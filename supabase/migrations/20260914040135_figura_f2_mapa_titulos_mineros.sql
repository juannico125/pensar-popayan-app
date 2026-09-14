-- Mete en la plataforma las tres figuras recortadas de los cuadernillos.
--
-- Los ocho cuadernillos son escaneos sin capa de texto, así que los estímulos
-- gráficos se habían transcrito en prosa. Tras revisar las 152 páginas, solo
-- tres figuras cargan significado; el resto de ilustraciones son decorativas
-- (retratos que encabezan las lecturas de inglés) o ya estaban resueltas como
-- HTML (las dos tablas y los avisos de la parte 1).
--
-- La más importante es la de F3: su pregunta dice «La siguiente imagen
-- presenta...» y el titular es toda la evidencia. Sin verlo no se puede
-- responder.
--
-- Los identificadores se derivan del contenido, así que cambiar el contexto
-- cambia también el id de su pregunta. Por eso cada figura se reconstruye en
-- vez de actualizarse en sitio. Ninguna de las tres tenía respuestas ni
-- repasos, así que no se pierde actividad de ningún estudiante.
--
-- De paso corrige una desincronización previa: el contexto de F3 tenía en la
-- base un texto distinto al que produce content/sociales-f3-2026b.js, con el
-- id de una versión anterior. Después de esta migración los tres artefactos
-- (contenido, seed y base) vuelven a coincidir.

-- ── F2 · 54 · mapa de títulos mineros ──
delete from public.cuestionario_preguntas where pregunta_id = '67b45bc8-4e08-4ae0-b4ce-9f705326f3fe';
delete from public.preguntas where id = '67b45bc8-4e08-4ae0-b4ce-9f705326f3fe';   -- arrastra su clave
delete from public.contextos where id = '86b1da9f-adb3-49c7-8057-89b2c83b0765';
insert into public.contextos (id, tipo, etiqueta, clase, contenido) values ('d053c923-36e4-4801-acf3-bcf2e38fa761', 'figura', 'MAPA', 'ctx-fig', '<p>Este mapa muestra, en color negro, las zonas del país donde, hasta el 2012, se habían adjudicado títulos mineros. Como se observa, la región Andina ha sido el territorio donde más títulos mineros se han adjudicado, mientras que la Amazonía presenta una situación diametralmente opuesta en términos de actividad minera.</p><figure class="ctx-fig"><img src="img/figuras/f2-p54-mapa-titulos-mineros.webp" width="737" height="1089" loading="lazy" alt="Mapa de Colombia. En negro aparecen las zonas con títulos mineros adjudicados hasta 2012: una franja ancha y continua que recorre la cordillera de los Andes de norte a sur, más algunas manchas en el norte del país. La mitad oriental, que corresponde a la Orinoquía y la Amazonía, queda casi por completo en blanco."></figure>');
insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm)
select '8c9a5674-2b60-4673-bd55-0a2fb64c691f', 'soc',
  (select id from public.temas where materia = 'soc' and codigo = 'geografia-y-territorio'),
  (select id from public.lotes where codigo = '2026-B'),
  'd053c923-36e4-4801-acf3-bcf2e38fa761', 'Geografía y territorio',
  '¿Cuál de las siguientes razones explica mejor la distribución geográfica de los títulos mineros?',
  array['La región Andina carece de biodiversidad y recursos hídricos, por lo cual la actividad minera desarrollada en ella tiene un menor impacto ambiental.', 'La región Andina es la zona del país donde existe mejor infraestructura y capacidad técnica para realizar exploraciones mineras.', 'La Amazonía es un territorio desértico donde existen pocas probabilidades de encontrar yacimientos mineros.', 'La Amazonía carece de ríos caudalosos que faciliten el transporte de las mercancías necesarias para el desarrollo de actividades mineras.'],
  'Descarta primero las opciones con datos falsos sobre la Amazonía (no es desierto, sí tiene grandes ríos) antes de comparar las que quedan.', 'publicada', 'modelo', 'fcdaa8e3ba6887c65e2807bd3da5656a';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('8c9a5674-2b60-4673-bd55-0a2fb64c691f', 1, 'Ni la Amazonía es desértica ni carece de ríos, y la región Andina no carece de biodiversidad; lo que sí es cierto es que la infraestructura vial, técnica y logística de Colombia está históricamente concentrada en la zona Andina, lo cual facilita la exploración y adjudicación de títulos mineros ahí.');
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('63076a75-1054-4f0e-a6c6-2218a1eed7ef', '8c9a5674-2b60-4673-bd55-0a2fb64c691f', 2);
