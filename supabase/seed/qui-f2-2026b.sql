-- Generado por scripts/generar-carga-banco.mjs · NO editar a mano.
-- Fuente: ../content/qui-f2-2026b.js · clave_origen = modelo

insert into public.contextos (id, tipo, etiqueta, clase, contenido) values ('1c4e532d-97a2-4775-a799-29d7f893b97f', 'situacion', 'QUÍMICA', 'ctx-sit', '<p>En una práctica de laboratorio se hace pasar electricidad a través de soluciones de diferentes compuestos para encender una bombilla común. De este experimento se obtienen los siguientes datos.</p><div class="ctx-datos" role="region" aria-label="Tabla de datos" tabindex="0"><table class="ctx-table ctx-table-nativa ctx-table-amplia"><tr><th>Compuesto</th><th>NaCl</th><th>NH<sub>3</sub></th><th>CaO</th><th>Azúcar casera</th></tr><tr><td>Enlace</td><td>Iónico</td><td>Covalente polar</td><td>Iónico</td><td>Covalente apolar</td></tr><tr><td>Observación</td><td>Se enciende el bombillo</td><td>El bombillo enciende muy poco</td><td>Se enciende el bombillo</td><td>El bombillo no enciende</td></tr></table></div>');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm, dificultad)
select '7d318eb9-05e0-43cf-97d5-b7244bfd1737', 'qui',
  (select id from public.temas where materia = 'qui' and codigo = 'enlace-quimico'),
  (select id from public.lotes where codigo = '2026-B'),
  '1c4e532d-97a2-4775-a799-29d7f893b97f', 'Enlace químico',
  'A partir de los resultados obtenidos y presentados en la tabla, la pregunta que pueden responder los estudiantes es',
  array['¿Cómo se relaciona el enlace de un compuesto con su conductividad eléctrica?', '¿Qué diferencia química existe entre el enlace iónico y el enlace covalente?', '¿Por qué los compuestos iónicos encienden el bombillo y los covalentes no?', '¿Por qué se usa agua para formar las soluciones y encender la bombilla?'],
  'Mira qué columnas tiene la tabla. Una tabla solo puede responder preguntas sobre lo que midió.', 'publicada', 'modelo', '831b26ad544f541f24d1fb4303c0e35e', 'media';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('7d318eb9-05e0-43cf-97d5-b7244bfd1737', 0, 'La tabla permite relacionar el tipo de enlace consignado con la conductividad observada, porque ambas variables se registraron. No permite explicar por sí sola el mecanismo ni evaluar el efecto del agua como variable independiente. Advertencia sobre la fuente: clasifica el azúcar como covalente apolar, lo cual es incorrecto para la sacarosa, que tiene grupos polares. Que su disolución no encienda el bombillo se debe a que no aporta una cantidad apreciable de iones móviles; no demuestra que sea apolar. El amoníaco en agua sí produce algunos iones. La clave se refiere a qué relación se puede investigar, no a validar todas las etiquetas de la tabla.');

insert into public.cuestionarios (id, materia, slug, seccion, titulo, tipo, orden, lote_id, publicado)
select 'b20821f4-a5d2-444e-88f3-25ee8bc08bfb', 'qui', 'qui-1', 'Enlace químico', 'Deadpool · Enlace y conductividad', 'Situación', 1,
  (select id from public.lotes where codigo = '2026-B'), true;
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('b20821f4-a5d2-444e-88f3-25ee8bc08bfb', '7d318eb9-05e0-43cf-97d5-b7244bfd1737', 1);

