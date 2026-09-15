begin;
-- Generado por scripts/generar-carga-banco.mjs · NO editar a mano.
-- Fuente: ../tmp/matematicas/aladin-q18.js · clave_origen = modelo

insert into public.contextos (id, tipo, etiqueta, clase, contenido) values ('a06fc85a-772d-4343-8584-91c066e1ebe5', 'tabla', 'TABLA', 'ctx-table', '<p>Una compañía realizó una encuesta para conocer la cantidad de pacientes que se atendieron por varicela, sarampión y rubéola en el país durante tres años. Los resultados se muestran en la tabla.</p><table class="ctx-table"><tr><th>Enfermedad</th><th>2010</th><th>2011</th><th>2012</th></tr><tr><td>Varicela</td><td>4.000</td><td>5.000</td><td>7.500</td></tr><tr><td>Sarampión</td><td>5.500</td><td>4.500</td><td>6.500</td></tr><tr><td>Rubéola</td><td>3.500</td><td>4.500</td><td>4.000</td></tr></table>');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm, dificultad)
select 'eedc286e-ccb4-4733-bfca-27d97c94a43f', 'mat',
  (select id from public.temas where materia = 'mat' and codigo = 'lectura-de-graficas'),
  (select id from public.lotes where codigo = '2026-B'),
  'a06fc85a-772d-4343-8584-91c066e1ebe5', 'Interpretación de datos',
  'La gráfica que representa la cantidad total de personas atendidas por estas enfermedades durante los tres años observados es',
  array['<figure class="ctx-fig"><img src="https://raw.githubusercontent.com/juannico125/pensar-popayan-app/92e4e92/img/figuras/mat/al1-q18-a.webp" loading="lazy" alt="Barras: varicela cerca de 12.000, sarampión cerca de 14.000 y rubéola cerca de 19.000."></figure>', '<figure class="ctx-fig"><img src="https://raw.githubusercontent.com/juannico125/pensar-popayan-app/92e4e92/img/figuras/mat/al1-q18-b.webp" loading="lazy" alt="Línea decreciente: varicela cerca de 8.000, sarampión cerca de 6.000 y rubéola cerca de 4.000."></figure>', '<figure class="ctx-fig"><img src="https://raw.githubusercontent.com/juannico125/pensar-popayan-app/92e4e92/img/figuras/mat/al1-q18-c.webp" loading="lazy" alt="Barras: varicela 16.500, sarampión 16.500 y rubéola 12.000."></figure>', '<figure class="ctx-fig"><img src="https://raw.githubusercontent.com/juannico125/pensar-popayan-app/92e4e92/img/figuras/mat/al1-q18-d.webp" loading="lazy" alt="Línea: varicela cerca de 4.000, sarampión cerca de 4.500 y rubéola cerca de 4.000."></figure>'],
  'Para comparar totales de varios años, suma cada fila antes de elegir la gráfica.', 'publicada', 'modelo', '7fa96815a11f42fc24fa1237f9dc5448', 'media';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('eedc286e-ccb4-4733-bfca-27d97c94a43f', 2, 'Se suman los tres años por enfermedad: varicela, 4.000 + 5.000 + 7.500 = 16.500; sarampión, 5.500 + 4.500 + 6.500 = 16.500; rubéola, 3.500 + 4.500 + 4.000 = 12.000. La gráfica debe mostrar dos barras iguales de 16.500 y una menor de 12.000. Las otras gráficas no representan estos totales.');


insert into public.cuestionario_preguntas(cuestionario_id,pregunta_id,orden) values ('7c47648c-f1d5-46e2-a52b-a3662cc190f5','eedc286e-ccb4-4733-bfca-27d97c94a43f',4);

commit;