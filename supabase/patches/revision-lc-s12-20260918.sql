-- Contraste visual con scanner/content (4).pdf, páginas 18 y 20.
-- No se borran preguntas, claves, relaciones ni intentos históricos.
begin;
do $audit$
declare n integer;
begin
  update public.preguntas set estado = 'borrador'
  where materia = 'lc' and estado = 'publicada' and (
    (id = 'e9f676a2-1b32-40ed-a3f3-72b7f4a309b5' and enunciado = '¿Cuál de las siguientes opciones describe mejor la opinión del autor del primer texto?')
    or (id = 'abcdeaf7-e267-4a91-8d01-dcd6d360e1ca' and enunciado = 'El argumento del niño es')
  );
  get diagnostics n = row_count;
  if n <> 2 then raise exception 'Conflicto: se esperaban las dos preguntas publicadas de LC S12'; end if;
end $audit$;
commit;
