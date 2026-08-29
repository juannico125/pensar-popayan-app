-- 005 · RLS: negación por defecto en todas las tablas
-- El aislamiento entre usuarios es Postgres, no lógica de frontend (compromiso 2).

-- Helpers. SECURITY DEFINER para no recursar sobre las políticas de perfiles.
create or replace function public.es_admin()
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.perfiles p
                 where p.id = (select auth.uid()) and p.rol = 'admin' and p.activo);
$$;

create or replace function public.es_estudiante_activo()
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.perfiles p
                 where p.id = (select auth.uid()) and p.activo);
$$;

revoke execute on function public.es_admin(), public.es_estudiante_activo() from public;
grant  execute on function public.es_admin(), public.es_estudiante_activo() to authenticated;

-- Punto de partida: nadie puede nada. Se concede a mano lo estrictamente necesario.
alter table public.perfiles               enable row level security;
alter table public.materias               enable row level security;
alter table public.temas                  enable row level security;
alter table public.lotes                  enable row level security;
alter table public.contextos              enable row level security;
alter table public.preguntas              enable row level security;
alter table public.preguntas_clave        enable row level security;
alter table public.cuestionarios          enable row level security;
alter table public.cuestionario_preguntas enable row level security;
alter table public.sesiones               enable row level security;
alter table public.respuestas             enable row level security;
alter table public.repasos                enable row level security;

revoke all on all tables in schema public from anon, authenticated;

-- ── Perfiles ────────────────────────────────────────────────────────────────
grant select, update on public.perfiles to authenticated;
create policy perfiles_lee_propio  on public.perfiles for select to authenticated
  using (id = (select auth.uid()));
create policy perfiles_lee_admin   on public.perfiles for select to authenticated
  using (public.es_admin());
create policy perfiles_edita_propio on public.perfiles for update to authenticated
  using (id = (select auth.uid())) with check (id = (select auth.uid()));
create policy perfiles_edita_admin on public.perfiles for update to authenticated
  using (public.es_admin()) with check (public.es_admin());
-- Sin políticas de insert ni delete: dar de alta y archivar pasa por la
-- Edge Function con service_role. Nadie se asciende a admin desde el navegador.

create or replace function public.bloquea_campos_perfil()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  if not public.es_admin() then
    if new.rol is distinct from old.rol
       or new.activo   is distinct from old.activo
       or new.codigo   is distinct from old.codigo
       or new.cohorte  is distinct from old.cohorte
       or new.jornada  is distinct from old.jornada then
      raise exception 'solo el rol administrativo modifica rol, estado o matrícula';
    end if;
  end if;
  new.id := old.id; new.creado_en := old.creado_en;
  return new;
end $$;
create trigger perfiles_campos_protegidos before update on public.perfiles
  for each row execute function public.bloquea_campos_perfil();

-- ── Catálogo: lectura para todo usuario activo, escritura solo service_role ──
grant select on public.materias, public.temas, public.lotes, public.contextos to authenticated;
create policy materias_lee  on public.materias  for select to authenticated
  using (public.es_estudiante_activo());
create policy temas_lee     on public.temas     for select to authenticated
  using (public.es_estudiante_activo());
create policy lotes_lee     on public.lotes     for select to authenticated
  using (public.es_estudiante_activo());
create policy contextos_lee on public.contextos for select to authenticated
  using (public.es_estudiante_activo());

-- ── Preguntas: solo publicadas y del lote vigente. Nunca la clave ───────────
grant select on public.preguntas, public.cuestionarios, public.cuestionario_preguntas to authenticated;
create policy preguntas_lee on public.preguntas for select to authenticated
  using (
    public.es_admin()
    or (public.es_estudiante_activo() and estado = 'publicada'
        and exists (select 1 from public.lotes l where l.id = lote_id and l.activo))
  );

-- preguntas_clave: RLS activo y CERO políticas. Negación total, a propósito.
-- Solo la leen public.responder() y public.clave_de(), ambas SECURITY DEFINER.

create policy cuestionarios_lee on public.cuestionarios for select to authenticated
  using (
    public.es_admin()
    or (public.es_estudiante_activo() and publicado
        and exists (select 1 from public.lotes l where l.id = lote_id and l.activo))
  );
create policy cuestionario_preguntas_lee on public.cuestionario_preguntas for select to authenticated
  using (exists (select 1 from public.cuestionarios c where c.id = cuestionario_id));

-- ── Actividad: cada quien la suya. El admin lee todo, no escribe nada ───────
grant select on public.sesiones, public.respuestas, public.repasos to authenticated;
create policy sesiones_propias   on public.sesiones  for select to authenticated
  using (perfil_id = (select auth.uid()) or public.es_admin());
create policy respuestas_propias on public.respuestas for select to authenticated
  using (perfil_id = (select auth.uid()) or public.es_admin());
create policy repasos_propios    on public.repasos    for select to authenticated
  using (perfil_id = (select auth.uid()) or public.es_admin());
-- Sin insert/update/delete para nadie: se escribe únicamente vía
-- public.iniciar_sesion() y public.responder(). Eso hace respuestas
-- append-only por construcción, no por convención.

-- Nada de privilegios heredados por tablas futuras.
alter default privileges in schema public revoke all on tables from anon, authenticated;
alter default privileges in schema public revoke all on functions from anon, public;
alter default privileges in schema public revoke all on sequences from anon, authenticated;
