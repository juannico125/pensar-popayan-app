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

-- ── F6 · 47 · mapa mundial del café ──
delete from public.cuestionario_preguntas where pregunta_id = 'c62685f7-06a9-4f64-9c14-5027bfd8414d';
delete from public.preguntas where id = 'c62685f7-06a9-4f64-9c14-5027bfd8414d';   -- arrastra su clave
delete from public.contextos where id = '7b647f32-6523-484a-8da5-010aed05c86f';
insert into public.contextos (id, tipo, etiqueta, clase, contenido) values ('73623fe9-6162-4310-818a-f5886c8198d6', 'figura', 'MAPA', 'ctx-fig', '<p><b>Exportaciones e importaciones a nivel mundial · 2010</b></p><figure class="ctx-fig"><img src="img/figuras/f6-p47-mapa-exportaciones-cafe.webp" width="1400" height="572" loading="lazy" alt="Mapa mundial. Círculos de línea continua rodean Norteamérica, Europa y el este de Asia. Círculos de línea segmentada rodean Centroamérica y el norte de Suramérica, África central y el sureste asiático."><figcaption>Tomado de: www.cafedecolombia.com</figcaption></figure>');
insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm)
select '11b50843-f693-4e23-9feb-30c371823cbd', 'soc',
  (select id from public.temas where materia = 'soc' and codigo = 'geografia-y-territorio'),
  (select id from public.lotes where codigo = '2026-B'),
  '73623fe9-6162-4310-818a-f5886c8198d6', 'Geografía y territorio',
  'En el mapa, los círculos con línea continua representan a las zonas que más compran café, mientras que los círculos con línea segmentada representan a sus mayores exportadores. Del mapa se puede concluir que para Colombia',
  array['los países africanos y del sureste asiático representan sus mayores competidores dentro de la exportación de café.', 'es vital una buena situación económica de los países del norte, quienes son los principales compradores de café.', 'el país más importante para el mercado cafetero es Estados Unidos, al ser el mayor comprador de dicho producto.', 'es importante que países como exportadores de café dejen de lado la importación del grano y protejan a los productores locales.'],
  'De un mapa solo puedes concluir lo que el mapa muestra: si no hay cifras, no afirmes cuál es "el mayor".', 'publicada', 'modelo', 'deff805aaeda86744871fc242c06c264';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('11b50843-f693-4e23-9feb-30c371823cbd', 1, 'Los círculos continuos, es decir los compradores, están sobre Norteamérica, Europa y el este de Asia: economías del norte. Si a ellas les va mal, cae la demanda del café colombiano. África y el sureste asiático también exportan, pero el mapa no dice cuánto ni permite afirmar que sean los mayores competidores, ni singulariza a Estados Unidos.');
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('e996b861-d686-4f69-a9e0-80f2580744ab', '11b50843-f693-4e23-9feb-30c371823cbd', 1);
