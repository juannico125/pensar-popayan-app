-- Última pieza de la resincronización: el contexto de la tabla de precios.
--
-- La migración anterior (20260915020000) arregló la pregunta de soc-16, cuyo
-- id derivaba de una versión anterior del contexto. Pero el id de la pregunta
-- se deriva del TEXTO del contexto, no de su id, así que el contexto se quedó
-- con el suyo viejo y la huella de `contextos` de Sociales seguía sin cuadrar.
--
-- El contenido es idéntico en los dos lados (md5 334fe4b4…, 503 caracteres);
-- lo único que difiere es el identificador. supabase/seed/sociales-2026b.sql
-- ya trae el id correcto: nunca se aplicó esa parte.
--
-- Una sola pregunta lo usa, y el id nuevo no existe todavía, así que basta con
-- crear la fila, repuntar la pregunta y borrar la vieja.

insert into public.contextos (id, tipo, etiqueta, clase, contenido)
select '9c90a941-94f1-4646-bc37-6b2cbc47ec5e', tipo, etiqueta, clase, contenido
  from public.contextos where id = '8491e444-65aa-4695-95f4-b96f0838329f';

update public.preguntas set contexto_id = '9c90a941-94f1-4646-bc37-6b2cbc47ec5e'
  where contexto_id = '8491e444-65aa-4695-95f4-b96f0838329f';

delete from public.contextos where id = '8491e444-65aa-4695-95f4-b96f0838329f';
