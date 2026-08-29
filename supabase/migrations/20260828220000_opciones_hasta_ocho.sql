-- 011 · Hasta ocho opciones, para la parte 2 del examen de inglés
--
-- Los cuadernillos reales rompieron el supuesto de «3 o 4 opciones». La parte 2
-- es un emparejamiento: cinco descripciones contra un banco de ocho palabras
-- (A–H), de las que sobran dos. Cada descripción se modela como una pregunta
-- cuyas opciones son el banco completo; el banco compartido va en `contextos`.
--
-- Se pierde la restricción de «cada palabra se usa una sola vez», que en papel
-- permite descartar por eliminación. En la app eso no es una pérdida: las
-- preguntas se muestran de a una, así que la eliminación nunca estuvo
-- disponible y el estudiante tiene que saber la palabra, no deducirla.

alter table public.preguntas
  drop constraint preguntas_opciones_check,
  add constraint preguntas_opciones_check
    check (cardinality(opciones) between 3 and 8
           and array_position(opciones, null) is null);

alter table public.respuestas
  drop constraint respuestas_opcion_check,
  add constraint respuestas_opcion_check check (opcion between 0 and 7);
