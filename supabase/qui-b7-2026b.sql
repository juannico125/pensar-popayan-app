-- Generado por scripts/generar-carga-banco.mjs · NO editar a mano.
-- Fuente: ../content/qui-b7-2026b.js · clave_origen = modelo

insert into public.contextos (id, tipo, etiqueta, clase, contenido) values ('e7fff119-ca3d-4b28-ac63-78aea7413dc7', 'situacion', 'QUÍMICA', 'ctx-sit', '<p>Actualmente, algunos productos tecnológicos en buen estado se convierten en residuos electrónicos, principalmente los equipos de telecomunicaciones e informática, como televisores, radios, teléfonos celulares y computadores. En la siguiente gráfica se muestra la composición porcentual de estos residuos electrónicos.</p><figure class="ctx-fig es-ancha" tabindex="0"><img src="img/figuras/bio/b7-qresiduos.webp" style="min-width:530px" loading="lazy" alt="Composición porcentual de residuos electrónicos y desglose de los metales."></figure><p>En un colegio, una encuesta muestra que el 82% de los estudiantes almacena sus residuos electrónicos en sus casas, pues no saben qué hacer con ellos, y un tratamiento inadecuado puede ocasionar graves impactos en el ambiente. Como estrategia de educación ambiental, en el colegio se va a realizar una jornada de clasificación de desechos electrónicos, para aprovechar los metales presentes y facilitar su disposición adecuada por parte de la empresa de recolección de basuras.</p>');
insert into public.contextos (id, tipo, etiqueta, clase, contenido) values ('7786f647-5ef4-41c5-a906-654068a25c73', 'situacion', 'QUÍMICA', 'ctx-sit', '<p>Los tensoactivos son moléculas duales, es decir, tienen una cabeza hidrofílica (afín con el agua) y una cola hidrofóbica (que repele el agua, pero es afín con lípidos y grasas), como se muestra a continuación.</p><figure class="ctx-fig es-ancha" tabindex="0"><img src="img/figuras/bio/b7-q112-base.webp" style="min-width:300px" loading="lazy" alt="Molécula con cabeza hidrofílica y cola hidrofóbica."></figure><p>Cuando estas moléculas interactúan con grasa forman unas estructuras llamadas micelas, en las que las colas hidrofóbicas rodean como una especie de burbuja a las moléculas de grasa.</p>');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm, dificultad)
select '18544bb8-ee6c-4679-8299-709ad83a7a3e', 'qui',
  (select id from public.temas where materia = 'qui' and codigo = 'clasificacion-de-la-materia'),
  (select id from public.lotes where codigo = '2026-B'),
  'e7fff119-ca3d-4b28-ac63-78aea7413dc7', 'Materia: clasificación y propiedades',
  'De los metales que componen los residuos electrónicos, el cobre es el mejor conductor de corriente eléctrica. ¿La anterior conclusión cuenta con las evidencias suficientes para ser respaldada?',
  array['No, porque no se dan a conocer las propiedades eléctricas de los metales.', 'Sí, porque los porcentajes están relacionados con las propiedades eléctricas.', 'No, porque otro metal tiene propiedades similares en los residuos electrónicos.', 'Sí, porque el cobre es el metal que más se encuentra en los residuos electrónicos.'],
  'Comprueba si los datos miden la propiedad mencionada en la conclusión.', 'publicada', 'modelo', '1315403a501824ab2effc1a2d782a34f', 'media';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('18544bb8-ee6c-4679-8299-709ad83a7a3e', 0, 'La gráfica muestra cantidades relativas, no conductividades. Ser más abundante en los residuos no demuestra conducir mejor la corriente.');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm, dificultad)
select 'f728de63-94b3-4ffe-9975-e9a89e6ea78f', 'qui',
  (select id from public.temas where materia = 'qui' and codigo = 'clasificacion-de-la-materia'),
  (select id from public.lotes where codigo = '2026-B'),
  'e7fff119-ca3d-4b28-ac63-78aea7413dc7', 'Materia: clasificación y propiedades',
  'Teniendo en cuenta los metales que componen los residuos electrónicos, ¿qué relación existe entre la cantidad de masa que se puede recuperar de algunos de ellos?',
  array['Que la cantidad de masa de plata y cobalto es menor que la de aluminio.', 'Que la cantidad de masa es similar en el aluminio y metales tóxicos.', 'Que la cantidad de masa de hierro y cobre es mayor que la de «Otros metales».', 'Que la cantidad de masa es similar en el oro y la plata.'],
  'Compara los porcentajes sobre la misma masa total de residuos.', 'publicada', 'modelo', 'fcd1e35843207d1b94f7b0bb6086b600', 'media';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('f728de63-94b3-4ffe-9975-e9a89e6ea78f', 1, 'El aluminio corresponde al 2,85% y los metales tóxicos al 3%, valores cercanos. Plata y cobalto suman 5,24%, hierro y cobre 19,68% frente a 32,21% de otros metales, y oro y plata son 0,02% y 0,24%.');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm, dificultad)
select 'f7548e28-54fd-479b-9b78-afa028a17b85', 'qui',
  (select id from public.temas where materia = 'qui' and codigo = 'enlace-quimico'),
  (select id from public.lotes where codigo = '2026-B'),
  '7786f647-5ef4-41c5-a906-654068a25c73', 'Enlace químico',
  'Teniendo en cuenta la información anterior, ¿cuál de los siguientes modelos representa correctamente una micela?',
  array['<img src="img/figuras/bio/b7-q112-a.webp" style="width:100%;max-width:240px" alt="Modelo de organización de cabezas hidrofílicas y colas hidrofóbicas" loading="lazy">', '<img src="img/figuras/bio/b7-q112-b.webp" style="width:100%;max-width:240px" alt="Modelo de organización de cabezas hidrofílicas y colas hidrofóbicas" loading="lazy">', '<img src="img/figuras/bio/b7-q112-c.webp" style="width:100%;max-width:240px" alt="Modelo de organización de cabezas hidrofílicas y colas hidrofóbicas" loading="lazy">', '<img src="img/figuras/bio/b7-q112-d.webp" style="width:100%;max-width:240px" alt="Modelo de organización de cabezas hidrofílicas y colas hidrofóbicas" loading="lazy">'],
  'Ubica qué parte debe tocar el agua y cuál debe rodear la grasa.', 'publicada', 'modelo', '02029266223dce7639455db562f0c943', 'media';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('f7548e28-54fd-479b-9b78-afa028a17b85', 3, 'En agua, las cabezas hidrofílicas quedan hacia el exterior y las colas hidrofóbicas se orientan hacia la grasa en el interior. El modelo circular con cabezas externas cumple esa disposición.');

insert into public.cuestionarios (id, materia, slug, seccion, titulo, tipo, orden, lote_id, publicado)
select '07bc8c46-e2df-44d4-bd26-e227e3313a95', 'qui', 'qui-16', 'Materia: clasificación y propiedades', '7B · Composición y propiedades', 'Práctica', 16,
  (select id from public.lotes where codigo = '2026-B'), true;
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('07bc8c46-e2df-44d4-bd26-e227e3313a95', '18544bb8-ee6c-4679-8299-709ad83a7a3e', 1);
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('07bc8c46-e2df-44d4-bd26-e227e3313a95', 'f728de63-94b3-4ffe-9975-e9a89e6ea78f', 2);

insert into public.cuestionarios (id, materia, slug, seccion, titulo, tipo, orden, lote_id, publicado)
select 'c4352f61-5077-4edd-b696-445253fb3558', 'qui', 'qui-17', 'Enlace químico', '7B · Micelas', 'Práctica', 17,
  (select id from public.lotes where codigo = '2026-B'), true;
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('c4352f61-5077-4edd-b696-445253fb3558', 'f7548e28-54fd-479b-9b78-afa028a17b85', 1);

