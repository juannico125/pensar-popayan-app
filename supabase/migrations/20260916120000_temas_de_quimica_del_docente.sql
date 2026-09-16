-- Química: completar el vocabulario de temas con la clasificación del docente
--
-- Herman entregó la hoja de clasificación de los cinco cuadernillos de Química
-- (una fila por pregunta: tema específico, componente y dificultad). Sus quince
-- componentes no caben en los siete temas que la materia tenía: siete de ellos
-- sí —teoría atómica es estructura de la materia, periodicidad es tabla
-- periódica, estequiometría y reacciones comparten bucket— pero otros siete no
-- existían.
--
-- Es el mismo caso que «trigonometría» en Matemáticas (20260914…): el tema se
-- añade al vocabulario en lugar de forzar la pregunta dentro de un tema que no
-- le corresponde, porque `cola_repaso()` empareja por tema y una pregunta mal
-- archivada reaparece en el repaso equivocado.
--
-- «Materia: clasificación y propiedades» merece tema propio y no cabe dentro de
-- «Estructura de la materia»: son 40 preguntas de los cinco cuadernillos sobre
-- mezclas, separación, estados y propiedades macroscópicas, mientras que
-- estructura de la materia se queda con lo que pasa dentro del átomo.

insert into public.temas (materia, codigo, nombre, orden) values
  ('qui', 'clasificacion-de-la-materia', 'Materia: clasificación y propiedades',  8),
  ('qui', 'gases',                       'Gases',                                 9),
  ('qui', 'termoquimica',                'Termoquímica y calorimetría',          10),
  ('qui', 'equilibrio-quimico',          'Equilibrio químico',                   11),
  ('qui', 'quimica-ambiental',           'Química ambiental',                    12),
  ('qui', 'indagacion-experimental',     'Indagación experimental',              13),
  ('qui', 'nomenclatura-quimica',        'Nomenclatura y lenguaje químico',      14)
on conflict (materia, codigo) do nothing;
