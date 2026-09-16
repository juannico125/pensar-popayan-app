-- Generado por scripts/generar-carga-banco.mjs · NO editar a mano.
-- Fuente: ../content/qui-f2-2026b.js · clave_origen = modelo

insert into public.contextos (id, tipo, etiqueta, clase, contenido) values ('1c4e532d-97a2-4775-a799-29d7f893b97f', 'situacion', 'QUÍMICA', 'ctx-sit', '<p>En una práctica de laboratorio se hace pasar electricidad a través de soluciones de diferentes compuestos para encender una bombilla común. De este experimento se obtienen los siguientes datos.</p><table class="ctx-table"><tr><th>Compuesto</th><th>NaCl</th><th>NH<sub>3</sub></th><th>CaO</th><th>Azúcar casera</th></tr><tr><td>Enlace</td><td>Iónico</td><td>Covalente polar</td><td>Iónico</td><td>Covalente apolar</td></tr><tr><td>Observación</td><td>Se enciende el bombillo</td><td>El bombillo enciende muy poco</td><td>Se enciende el bombillo</td><td>El bombillo no enciende</td></tr></table>');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm, dificultad)
select '7d318eb9-05e0-43cf-97d5-b7244bfd1737', 'qui',
  (select id from public.temas where materia = 'qui' and codigo = 'enlace-quimico'),
  (select id from public.lotes where codigo = '2026-B'),
  '1c4e532d-97a2-4775-a799-29d7f893b97f', 'Enlace químico',
  'A partir de los resultados obtenidos y presentados en la tabla, la pregunta que pueden responder los estudiantes es',
  array['¿Cómo se relaciona el enlace de un compuesto con su conductividad eléctrica?', '¿Qué diferencia química existe entre el enlace iónico y el enlace covalente?', '¿Por qué los compuestos iónicos encienden el bombillo y los covalentes no?', '¿Por qué se usa agua para formar las soluciones y encender la bombilla?'],
  'Mira qué columnas tiene la tabla. Una tabla solo puede responder preguntas sobre lo que midió.', 'publicada', 'modelo', '831b26ad544f541f24d1fb4303c0e35e', 'media';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('7d318eb9-05e0-43cf-97d5-b7244bfd1737', 0, 'La tabla solo tiene dos columnas de información por compuesto: qué enlace tiene y si encendió el bombillo. Con eso se puede responder si una cosa va con la otra, y de hecho va: los dos compuestos iónicos encienden, el covalente polar casi no y el apolar nada. Lo que la tabla no trae es el porqué —para eso haría falta hablar de iones libres, y ese dato no está—, ni nada sobre el agua, que no aparece como variable. Y la pregunta sobre la diferencia entre los dos enlaces se responde con teoría, no con este experimento.');

insert into public.cuestionarios (id, materia, slug, seccion, titulo, tipo, orden, lote_id, publicado)
select 'b20821f4-a5d2-444e-88f3-25ee8bc08bfb', 'qui', 'qui-1', 'Enlace químico', 'Bugs Bunny · Enlace y conductividad', 'Situación', 1,
  (select id from public.lotes where codigo = '2026-B'), true;
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('b20821f4-a5d2-444e-88f3-25ee8bc08bfb', '7d318eb9-05e0-43cf-97d5-b7244bfd1737', 1);

