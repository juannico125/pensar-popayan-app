-- 009 · Endurecimiento de permisos de ejecución
-- Supabase concede EXECUTE a anon/authenticated por privilegios por defecto.
-- Eso deja expuestas en /rest/v1/rpc funciones internas (triggers, validadores)
-- que nadie debería poder llamar. Se revoca todo y se concede la lista exacta.

revoke execute on all functions in schema public from public, anon, authenticated;

alter default privileges in schema public revoke all on functions from anon, authenticated, public;

-- Superficie pública de la API: solo esto y nada más.
grant execute on function
  public.es_admin(),
  public.es_estudiante_activo(),
  public.barajado(uuid),
  public.cuestionario_desbloqueado(uuid),
  public.iniciar_sesion(public.tipo_sesion, uuid),
  public.finalizar_sesion(uuid),
  public.responder(uuid, uuid, smallint, integer),
  public.cola_repaso(integer),
  public.clave_de(uuid),
  public.racha(uuid)
to authenticated;

-- touch_actualizado(), valida_clave() y bloquea_campos_perfil() son funciones de
-- disparador: corren con el privilegio de la tabla, no necesitan EXECUTE público.
-- sin_html_ejecutable() solo la usan restricciones CHECK.
