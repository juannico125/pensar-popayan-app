-- 007 · Funciones de aplicación y vistas de estadística
-- Toda escritura del estudiante pasa por aquí. Las tablas no le aceptan INSERT.

-- ── Barajado reproducible ───────────────────────────────────────────────────
-- Mismo orden siempre para el mismo estudiante, distinto entre compañeros,
-- sin almacenar nada. Devuelve los índices CANÓNICOS en orden de presentación.
create or replace function public.barajado(p_pregunta uuid)
returns smallint[] language sql stable security definer set search_path = '' as $$
  select array_agg(i::smallint order by md5((select auth.uid())::text || p_pregunta::text || i::text))
  from generate_series(0, (select cardinality(q.opciones) - 1
                             from public.preguntas q where q.id = p_pregunta)) g(i)
  where public.es_estudiante_activo();
$$;

-- ── Desbloqueo secuencial (servidor, no frontend) ───────────────────────────
create or replace function public.cuestionario_desbloqueado(p_cuestionario uuid)
returns boolean language sql stable security definer set search_path = '' as $$
  select not exists (
    select 1
      from public.cuestionarios previo
      join public.cuestionarios actual on actual.id = p_cuestionario
                                      and previo.materia = actual.materia
                                      and previo.orden   < actual.orden
      join public.lotes l on l.id = previo.lote_id and l.activo
     where previo.publicado
       and not exists (select 1 from public.sesiones s
                        where s.perfil_id = (select auth.uid())
                          and s.cuestionario_id = previo.id
                          and s.finalizada_en is not null)
  );
$$;

-- ── Sesiones ────────────────────────────────────────────────────────────────
create or replace function public.iniciar_sesion(p_tipo public.tipo_sesion,
                                                 p_cuestionario uuid default null)
returns uuid language plpgsql security definer set search_path = '' as $$
declare v_id uuid;
begin
  if not public.es_estudiante_activo() then
    raise exception 'perfil inactivo o inexistente' using errcode = '42501';
  end if;

  if p_tipo = 'cuestionario' then
    if p_cuestionario is null then
      raise exception 'falta el cuestionario' using errcode = '22023';
    end if;
    if not exists (select 1 from public.cuestionarios c
                     join public.lotes l on l.id = c.lote_id and l.activo
                    where c.id = p_cuestionario and c.publicado) then
      raise exception 'cuestionario no disponible' using errcode = '42501';
    end if;
    if not public.cuestionario_desbloqueado(p_cuestionario) then
      raise exception 'cuestionario bloqueado: completa el anterior' using errcode = '42501';
    end if;
  else
    p_cuestionario := null;
  end if;

  insert into public.sesiones (perfil_id, tipo, cuestionario_id)
  values ((select auth.uid()), p_tipo, p_cuestionario)
  returning id into v_id;
  return v_id;
end $$;

create or replace function public.finalizar_sesion(p_sesion uuid)
returns table (total integer, aciertos integer, ms_total bigint)
language plpgsql security definer set search_path = '' as $$
begin
  if not exists (select 1 from public.sesiones s
                  where s.id = p_sesion and s.perfil_id = (select auth.uid())) then
    raise exception 'sesión ajena o inexistente' using errcode = '42501';
  end if;

  update public.sesiones s set finalizada_en = now()
   where s.id = p_sesion and s.perfil_id = (select auth.uid()) and s.finalizada_en is null;

  return query
    select count(*)::int, count(*) filter (where r.correcta)::int, coalesce(sum(r.ms), 0)::bigint
      from public.respuestas r where r.sesion_id = p_sesion;
end $$;

-- ── Calificación del lado del servidor ──────────────────────────────────────
-- La clave y la explicación viven en preguntas_clave, que RLS niega a todos.
-- El estudiante nunca las descarga: las recibe una a una, ya respondida.
create or replace function public.responder(p_sesion   uuid,
                                            p_pregunta uuid,
                                            p_opcion   smallint,
                                            p_ms       integer)
returns table (correcta boolean, indice_correcto smallint, explicacion text, tip text)
language plpgsql security definer set search_path = '' as $$
declare
  s        public.sesiones;
  n_opts   int;
  v_clave  public.preguntas_clave;
  v_ok     boolean;
  v_ms     integer;
  v_filas  int;
  intervalos constant int[] := array[1, 3, 7, 15, 30, 90];  -- días
begin
  select * into s from public.sesiones
   where id = p_sesion and perfil_id = (select auth.uid()) for update;
  if s.id is null then
    raise exception 'sesión ajena o inexistente' using errcode = '42501';
  end if;
  if s.finalizada_en is not null then
    raise exception 'la sesión ya terminó' using errcode = '42501';
  end if;

  -- La pregunta tiene que pertenecer a esta sesión.
  if s.tipo = 'cuestionario' then
    if not exists (select 1 from public.cuestionario_preguntas cp
                    where cp.cuestionario_id = s.cuestionario_id and cp.pregunta_id = p_pregunta) then
      raise exception 'la pregunta no pertenece a este cuestionario' using errcode = '42501';
    end if;
  else
    if not exists (select 1 from public.preguntas q
                     join public.lotes l on l.id = q.lote_id and l.activo
                    where q.id = p_pregunta and q.estado = 'publicada') then
      raise exception 'pregunta no disponible' using errcode = '42501';
    end if;
  end if;

  select cardinality(q.opciones) into n_opts from public.preguntas q where q.id = p_pregunta;
  if p_opcion is null or p_opcion < 0 or p_opcion >= n_opts then
    raise exception 'opción fuera de rango' using errcode = '22023';
  end if;

  select * into v_clave from public.preguntas_clave k where k.pregunta_id = p_pregunta;
  if v_clave.pregunta_id is null then
    raise exception 'la pregunta no tiene clave revisada' using errcode = '22023';
  end if;

  v_ok := (p_opcion = v_clave.correcta);
  -- El tiempo no puede ser mayor que la sesión ni menor que un reflejo humano.
  v_ms := greatest(250, least(coalesce(p_ms, 250),
                              (extract(epoch from now() - s.iniciada_en) * 1000)::int, 1800000));

  insert into public.respuestas (perfil_id, sesion_id, pregunta_id, opcion, correcta, ms, materia, tema_id)
  select (select auth.uid()), p_sesion, p_pregunta, p_opcion, v_ok, v_ms, q.materia, q.tema_id
    from public.preguntas q where q.id = p_pregunta
  on conflict (sesion_id, pregunta_id) do nothing;

  get diagnostics v_filas = row_count;
  if v_filas = 0 then
    raise exception 'esa pregunta ya fue respondida en esta sesión' using errcode = '23505';
  end if;

  -- Repetición espaciada 1-3-7-15-30-90. Se domina al superar el paso de 7 días.
  if v_ok then
    update public.repasos t
       set paso = least(t.paso + 1, 6),
           reintentos = t.reintentos + 1,
           estado = case when t.paso + 1 >= 3 then 'dominada'::public.estado_repaso else t.estado end,
           proxima_en = now() + (intervalos[least(t.paso + 1, 6)] || ' days')::interval,
           actualizado_en = now()
     where t.perfil_id = (select auth.uid()) and t.pregunta_id = p_pregunta
       and t.estado = 'pendiente';
  else
    insert into public.repasos (perfil_id, pregunta_id, fallos, paso, estado, proxima_en)
    values ((select auth.uid()), p_pregunta, 1, 0, 'pendiente', now() + interval '1 day')
    on conflict (perfil_id, pregunta_id) do update
      set fallos = public.repasos.fallos + 1,
          paso = 0,
          estado = 'pendiente',
          proxima_en = now() + interval '1 day',
          actualizado_en = now();
  end if;

  return query
    select v_ok, v_clave.correcta, v_clave.explicacion, q.tip
      from public.preguntas q where q.id = p_pregunta;
end $$;

-- ── Cola de repaso inteligente ──────────────────────────────────────────────
-- Dos fuentes: lo fallado que ya venció, y preguntas NUEVAS de los temas
-- flojos. Devolver seis veces la misma pregunta enseña esa pregunta, no el tema.
create or replace function public.cola_repaso(p_limite integer default 12)
returns setof uuid language sql stable security definer set search_path = '' as $$
  with yo as (select (select auth.uid()) as id),
  vencidas as (
    select t.pregunta_id, 0 as prioridad, t.proxima_en as orden
      from public.repasos t, yo
     where t.perfil_id = yo.id and t.estado = 'pendiente' and t.proxima_en <= now()
  ),
  temas_flojos as (
    select r.tema_id
      from public.respuestas r, yo
     where r.perfil_id = yo.id
     group by r.tema_id
    having count(*) >= 3
       and count(*) filter (where r.correcta)::numeric / count(*) < 0.6
  ),
  nuevas as (
    select q.id as pregunta_id, 1 as prioridad, q.creado_en as orden
      from public.preguntas q
      join public.lotes l on l.id = q.lote_id and l.activo
      join temas_flojos tf on tf.tema_id = q.tema_id
      cross join yo
     where q.estado = 'publicada'
       and not exists (select 1 from public.respuestas r
                        where r.perfil_id = yo.id and r.pregunta_id = q.id)
  )
  select c.pregunta_id from (
    select * from vencidas union all select * from nuevas
  ) c
  where public.es_estudiante_activo()
  order by c.prioridad, c.orden
  limit greatest(1, least(coalesce(p_limite, 12), 40));
$$;

-- ── Consulta de clave para el rol administrativo ────────────────────────────
create or replace function public.clave_de(p_pregunta uuid)
returns table (correcta smallint, explicacion text, origen public.clave_origen)
language sql stable security definer set search_path = '' as $$
  select k.correcta, k.explicacion, q.clave_origen
    from public.preguntas_clave k join public.preguntas q on q.id = k.pregunta_id
   where k.pregunta_id = p_pregunta and public.es_admin();
$$;

-- ── Racha en días, zona horaria de Colombia ─────────────────────────────────
create or replace function public.racha(p_perfil uuid default null)
returns integer language sql stable security definer set search_path = '' as $$
  with objetivo as (select coalesce(p_perfil, (select auth.uid())) as id),
  dias as (
    select distinct (r.respondida_en at time zone 'America/Bogota')::date as d
      from public.respuestas r, objetivo o
     where r.perfil_id = o.id
       and (o.id = (select auth.uid()) or public.es_admin())
  ),
  islas as (select d, d - (row_number() over (order by d))::int as grupo from dias)
  select coalesce((
    select count(*)::int from islas
     where grupo = (select i2.grupo from islas i2 order by i2.d desc limit 1)
       and (select max(d) from dias) >= (now() at time zone 'America/Bogota')::date - 1
  ), 0);
$$;

-- ── Estadísticas: una sola fuente derivada del log append-only ──────────────
create view public.v_estadisticas_materia with (security_invoker = true) as
  select r.perfil_id,
         r.materia,
         count(*)::int                                as total,
         count(*) filter (where r.correcta)::int      as aciertos,
         round(100.0 * count(*) filter (where r.correcta) / count(*), 1) as precision,
         sum(r.ms)::bigint                            as ms_total,
         max(r.respondida_en)                         as ultima
    from public.respuestas r
   group by r.perfil_id, r.materia;

create view public.v_resumen_estudiante with (security_invoker = true) as
  select p.id as perfil_id,
         p.nombre, p.codigo, p.jornada, p.cohorte, p.activo,
         coalesce(sum(e.total), 0)::int    as total,
         coalesce(sum(e.aciertos), 0)::int as aciertos,
         case when coalesce(sum(e.total), 0) = 0 then 0
              else round(100.0 * sum(e.aciertos) / sum(e.total), 1) end as precision,
         coalesce(sum(e.ms_total), 0)::bigint as ms_total,
         max(e.ultima)                        as ultima_actividad,
         -- XP: 10 por acierto + 5 por pregunta recuperada en repaso.
         (coalesce(sum(e.aciertos), 0) * 10
          + coalesce((select count(*) from public.repasos t
                       where t.perfil_id = p.id and t.estado = 'dominada'), 0) * 5)::int as xp
    from public.perfiles p
    left join public.v_estadisticas_materia e on e.perfil_id = p.id
   group by p.id, p.nombre, p.codigo, p.jornada, p.cohorte, p.activo;

grant select on public.v_estadisticas_materia, public.v_resumen_estudiante to authenticated;

-- Permisos de ejecución: explícitos, nunca heredados.
revoke execute on all functions in schema public from public, anon;
grant execute on function
  public.barajado(uuid),
  public.cuestionario_desbloqueado(uuid),
  public.iniciar_sesion(public.tipo_sesion, uuid),
  public.finalizar_sesion(uuid),
  public.responder(uuid, uuid, smallint, integer),
  public.cola_repaso(integer),
  public.clave_de(uuid),
  public.racha(uuid),
  public.es_admin(),
  public.es_estudiante_activo()
to authenticated;
