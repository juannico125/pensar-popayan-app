-- 012 · El guardián de `perfiles` deja pasar al servidor
--
-- `bloquea_campos_perfil()` impide que un estudiante se cambie el rol, el
-- estado o la matrícula. Estaba comprobando `es_admin()`, que se resuelve con
-- `auth.uid()`. La Edge Function corre con `service_role` y ahí no hay
-- `auth.uid()`: el disparador la tomaba por un estudiante y bloqueaba archivar.
--
-- Un contexto sin usuario autenticado solo puede ser el servidor —`service_role`
-- o el pipeline de carga—, y para ese contexto el disparador nunca fue la
-- frontera de seguridad: `service_role` ya salta RLS por completo. Quien sí
-- sigue bloqueado es el estudiante autenticado, que es de quien protege.

create or replace function public.bloquea_campos_perfil()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  -- Sin usuario autenticado la llamada viene del servidor: se deja pasar.
  if (select auth.uid()) is not null and not public.es_admin() then
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
