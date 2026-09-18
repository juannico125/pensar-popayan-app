-- Generado por scripts/generar-carga-banco.mjs · NO editar a mano.
-- Fuente: ../content/qui-b1-2026b.js · clave_origen = modelo

insert into public.contextos (id, tipo, etiqueta, clase, contenido) values ('c08494cc-49a6-4545-b1d6-6656f7383d11', 'situacion', 'QUÍMICA', 'ctx-sit', '<p>Un estudiante tiene una mezcla heterogénea de dos líquidos, X y Y, que no se solubilizan entre sí, y una sustancia sólida que no disuelve en ninguno de ellos. Para separar sus componentes, se cuenta con los métodos de separación que se describen en la tabla.</p><div class="ctx-datos" role="region" aria-label="Métodos de separación" tabindex="0"><table class="ctx-table ctx-table-nativa ctx-table-amplia"><thead><tr><th scope="col">Método de separación</th><th scope="col">Descripción</th></tr></thead><tbody><tr><th scope="row">Filtración</th><td>Separación de sólidos insolubles de líquidos.</td></tr><tr><th scope="row">Evaporación</th><td>Separa sólidos solubles de líquidos mediante calentamiento.</td></tr><tr><th scope="row">Decantación</th><td>Separa líquidos que no se solubilizan entre sí y forman una mezcla heterogénea.</td></tr></tbody></table></div>');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm, dificultad)
select 'bdee34b7-3f2d-4cd2-8c08-7c8c4e959a8a', 'qui',
  (select id from public.temas where materia = 'qui' and codigo = 'clasificacion-de-la-materia'),
  (select id from public.lotes where codigo = '2026-B'),
  'c08494cc-49a6-4545-b1d6-6656f7383d11', 'Materia: clasificación y propiedades',
  'Con base en la información anterior, ¿cuál es el método más adecuado para obtener por separado los tres componentes de la mezcla?',
  array['Evaporar solamente.', 'Primero filtrar y luego decantar.', 'Filtrar solamente.', 'Primero filtrar luego evaporar.'],
  'Primero separa el sólido y luego las dos fases líquidas.', 'publicada', 'modelo', 'd62e30cfb31b6693be55bf841bce6b44', 'baja';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('bdee34b7-3f2d-4cd2-8c08-7c8c4e959a8a', 1, 'La filtración retiene el sólido insoluble y deja pasar los dos líquidos. Como estos no se mezclan, la decantación permite separarlos después. Evaporar no recupera por separado ambos líquidos en el procedimiento descrito.');

insert into public.cuestionarios (id, materia, slug, seccion, titulo, tipo, orden, lote_id, publicado)
select '300c4df1-ed96-47c4-a2e9-734fb8fc1b7f', 'qui', 'qui-12', 'Materia: clasificación y propiedades', '1B · Separación de mezclas', 'Práctica', 12,
  (select id from public.lotes where codigo = '2026-B'), true;
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('300c4df1-ed96-47c4-a2e9-734fb8fc1b7f', 'bdee34b7-3f2d-4cd2-8c08-7c8c4e959a8a', 1);

