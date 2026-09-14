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

-- ── F3 · 38 · portada «Allende Derrocado y Muerto» ──
delete from public.cuestionario_preguntas where pregunta_id = '97cc88db-7932-4441-898c-29f24bdb58de';
delete from public.preguntas where id = '97cc88db-7932-4441-898c-29f24bdb58de';   -- arrastra su clave
delete from public.contextos where id = 'fae7ba28-fda8-47c0-9a21-2650489b0e8b';
insert into public.contextos (id, tipo, etiqueta, clase, contenido) values ('c322e6b7-edd7-4a5f-8cac-cf1dea38f7ff', 'figura', 'RECORTE DE PRENSA', 'ctx-fig', '<p>La siguiente imagen presenta uno de los sucesos más importantes en la historia política de una nación latinoamericana.</p><figure class="ctx-fig"><img src="img/figuras/f3-p38-allende-golpe-militar.webp" width="1400" height="640" loading="lazy" alt="Portada de periódico. El titular principal, a toda plana, dice «Allende Derrocado y Muerto en Golpe Militar», junto a dos retratos y a una nota que menciona que una Junta Militar de Gobierno decretó estado de sitio, cerró las fronteras y estableció censura de prensa. En una columna lateral, un segundo titular anuncia «Desembarco Armado Contra Duvalier en Haití»."><figcaption>Tomado de: portada de El Nacional de Venezuela.</figcaption></figure>');
insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm)
select 'd282e372-18c8-487b-a600-7126ca2c394f', 'soc',
  (select id from public.temas where materia = 'soc' and codigo = 'perspectivas-y-fuentes'),
  (select id from public.lotes where codigo = '2026-B'),
  'c322e6b7-edd7-4a5f-8cac-cf1dea38f7ff', 'Interpretación de perspectivas',
  'A pesar de la información presentada, es posible determinar que este artículo periodístico fue escrito en el periodo histórico correspondiente a',
  array['el golpe de Estado con el que se da inicio a la dictadura chilena en los años 70 del siglo XX.', 'el golpe de Estado que llevó al poder a Getulio Vargas en Brasil a finales de los años 30 del siglo XX.', 'la caída del peronismo en los años 70 del siglo XX y los inicios de la dictadura militar en Argentina.', 'los inicios de la dictadura de Gustavo Rojas Pinilla durante los años 50 del siglo XX en Colombia.'],
  'El titular nombra directamente al presidente y al país: no hace falta inferir nada más.', 'publicada', 'modelo', 'bc5cfe30a5866e0f6c05f435a6dbaab9';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('d282e372-18c8-487b-a600-7126ca2c394f', 0, 'El propio titular anuncia el hecho: "Allende Derrocado y Muerto en Golpe Militar". Ese es el golpe de Estado de 1973 en Chile que dio inicio a la dictadura de Pinochet, no un hecho de Brasil, Argentina o Colombia.');
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('2a3fef6c-99e1-40c6-a3f8-9e087876416e', 'd282e372-18c8-487b-a600-7126ca2c394f', 2);
