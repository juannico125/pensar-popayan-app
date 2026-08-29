-- 013 · Reintentar hasta acertar
--
-- Antes: una pregunta se respondía una sola vez por sesión y el cuestionario
-- seguía aunque estuviera mal. Ahora, si el estudiante falla, la pregunta se
-- repite hasta que la acierte. Eso obliga a tres cambios en la base:
--
-- 1. `respuestas` deja de aceptar una sola fila por (sesión, pregunta): ahora
--    lleva `intento`. El log sigue siendo append-only y ahora además cuenta la
--    historia completa —falló, volvió, acertó—, que es información real.
--
-- 2. Las estadísticas se calculan SOLO sobre el primer intento. «Precisión» debe
--    seguir queriendo decir «con qué frecuencia acierto de una», que es lo que
--    predice el Saber 11. Si contara los reintentos, todo el mundo tendería al
--    100 % y la cifra dejaría de servir para nada.
--
-- 3. Acertar en el segundo intento NO cuenta como recuperación para la
--    repetición espaciada. Acertar de inmediato, con la pregunta a la vista y
--    una opción ya descartada, no es haber aprendido el tema: esa pregunta
--    tiene que volver mañana igual.

alter table public.respuestas
  add column if not exists intento smallint not null default 1 check (intento between 1 and 20);

alter table public.respuestas drop constraint if exists respuestas_sesion_id_pregunta_id_key;
alter table public.respuestas add constraint respuestas_intento_unico
  unique (sesion_id, pregunta_id, intento);

comment on column public.respuestas.intento is
  'Número de intento sobre esa pregunta dentro de esa sesión. Las estadísticas usan solo intento = 1.';

/* ── responder() · admite reintentos ─────────────────────────────────────── */
-- Cambia la forma del retorno (agrega `intento`), así que hay que soltarla:
-- `create or replace` no puede alterar el tipo de salida de una función.
drop function if exists public.responder(uuid, uuid, smallint, integer);

create function public.responder(p_sesion   uuid,
                                            p_pregunta uuid,
                                            p_opcion   smallint,
                                            p_ms       integer)
returns table (correcta boolean, indice_correcto smallint, explicacion text, tip text, intento smallint)
language plpgsql security definer set search_path = '' as $$
declare
  s        public.sesiones;
  n_opts   int;
  v_clave  public.preguntas_clave;
  v_ok     boolean;
  v_ms     integer;
  v_intento smallint;
  v_fallo_antes boolean;
  intervalos constant int[] := array[1, 3, 7, 15, 30, 90];
begin
  select * into s from public.sesiones
   where id = p_sesion and perfil_id = (select auth.uid()) for update;
  if s.id is null then
    raise exception 'sesión ajena o inexistente' using errcode = '42501';
  end if;
  if s.finalizada_en is not null then
    raise exception 'la sesión ya terminó' using errcode = '42501';
  end if;

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

  -- Historia de esta pregunta en esta sesión.
  select count(*) + 1, bool_or(not r.correcta)
    into v_intento, v_fallo_antes
    from public.respuestas r
   where r.sesion_id = p_sesion and r.pregunta_id = p_pregunta;
  v_fallo_antes := coalesce(v_fallo_antes, false);

  -- Una vez acertada, la pregunta se cierra: no se vuelve a responder.
  if exists (select 1 from public.respuestas r
              where r.sesion_id = p_sesion and r.pregunta_id = p_pregunta and r.correcta) then
    raise exception 'esa pregunta ya fue acertada en esta sesión' using errcode = '23505';
  end if;
  if v_intento > 20 then
    raise exception 'demasiados intentos sobre la misma pregunta' using errcode = '22023';
  end if;

  select cardinality(q.opciones) into n_opts from public.preguntas q where q.id = p_pregunta;
  if p_opcion is null or p_opcion < 0 or p_opcion >= n_opts then
    raise exception 'opción fuera de rango' using errcode = '22023';
  end if;

  -- No se admite repetir una opción ya descartada: obligaría a adivinar por
  -- fuerza bruta en vez de releer el enunciado.
  if exists (select 1 from public.respuestas r
              where r.sesion_id = p_sesion and r.pregunta_id = p_pregunta and r.opcion = p_opcion) then
    raise exception 'esa opción ya la descartaste' using errcode = '23505';
  end if;

  select * into v_clave from public.preguntas_clave k where k.pregunta_id = p_pregunta;
  if v_clave.pregunta_id is null then
    raise exception 'la pregunta no tiene clave revisada' using errcode = '22023';
  end if;

  v_ok := (p_opcion = v_clave.correcta);
  v_ms := greatest(250, least(coalesce(p_ms, 250),
                              (extract(epoch from now() - s.iniciada_en) * 1000)::int, 1800000));

  insert into public.respuestas (perfil_id, sesion_id, pregunta_id, opcion, correcta, ms, materia, tema_id, intento)
  select (select auth.uid()), p_sesion, p_pregunta, p_opcion, v_ok, v_ms, q.materia, q.tema_id, v_intento
    from public.preguntas q where q.id = p_pregunta;

  if not v_ok then
    -- Falló: entra o reinicia el ciclo de repaso.
    insert into public.repasos (perfil_id, pregunta_id, fallos, paso, estado, proxima_en)
    values ((select auth.uid()), p_pregunta, 1, 0, 'pendiente', now() + interval '1 day')
    on conflict (perfil_id, pregunta_id) do update
      set fallos = public.repasos.fallos + 1,
          paso = 0,
          estado = 'pendiente',
          proxima_en = now() + interval '1 day',
          actualizado_en = now();

  elsif not v_fallo_antes then
    -- Acertó de una: avanza el intervalo de repetición espaciada.
    update public.repasos t
       set paso = least(t.paso + 1, 6),
           reintentos = t.reintentos + 1,
           estado = case when t.paso + 1 >= 3 then 'dominada'::public.estado_repaso else t.estado end,
           proxima_en = now() + (intervalos[least(t.paso + 1, 6)] || ' days')::interval,
           actualizado_en = now()
     where t.perfil_id = (select auth.uid()) and t.pregunta_id = p_pregunta
       and t.estado = 'pendiente';

  else
    -- Acertó tras fallar en la misma sesión: solo cuenta el reintento. La
    -- pregunta sigue pendiente y vuelve mañana; con el enunciado a la vista y
    -- una opción descartada, acertar no es haber aprendido el tema.
    update public.repasos t
       set reintentos = t.reintentos + 1, actualizado_en = now()
     where t.perfil_id = (select auth.uid()) and t.pregunta_id = p_pregunta;
  end if;

  -- En un fallo solo vuelve el tip. Devolver la clave la dejaría en memoria del
  -- navegador y el reintento se resolvería mirando la consola: la clave y la
  -- explicación salen únicamente cuando la pregunta ya quedó resuelta.
  return query
    select v_ok,
           case when v_ok then v_clave.correcta end,
           case when v_ok then v_clave.explicacion end,
           q.tip,
           v_intento
      from public.preguntas q where q.id = p_pregunta;
end $$;

/* ── finalizar_sesion() · cuenta preguntas, no intentos ──────────────────── */
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
    select count(distinct r.pregunta_id)::int,
           count(*) filter (where r.correcta and r.intento = 1)::int,
           coalesce(sum(r.ms), 0)::bigint
      from public.respuestas r where r.sesion_id = p_sesion;
end $$;

/* ── estadísticas · solo el primer intento ───────────────────────────────── */
drop view if exists public.v_resumen_estudiante;
drop view if exists public.v_estadisticas_materia;

create view public.v_estadisticas_materia with (security_invoker = true) as
  select r.perfil_id,
         r.materia,
         count(*)::int                                as total,
         count(*) filter (where r.correcta)::int      as aciertos,
         round(100.0 * count(*) filter (where r.correcta) / count(*), 1) as precision,
         sum(r.ms)::bigint                            as ms_total,
         max(r.respondida_en)                         as ultima
    from public.respuestas r
   where r.intento = 1
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
         (coalesce(sum(e.aciertos), 0) * 10
          + coalesce((select count(*) from public.repasos t
                       where t.perfil_id = p.id and t.estado = 'dominada'), 0) * 5)::int as xp
    from public.perfiles p
    left join public.v_estadisticas_materia e on e.perfil_id = p.id
   group by p.id, p.nombre, p.codigo, p.jornada, p.cohorte, p.activo;

grant select on public.v_estadisticas_materia, public.v_resumen_estudiante to authenticated;
grant execute on function public.responder(uuid, uuid, smallint, integer) to authenticated;
grant execute on function public.finalizar_sesion(uuid) to authenticated;
