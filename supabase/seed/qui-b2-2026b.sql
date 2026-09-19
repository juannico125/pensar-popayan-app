-- Generado por scripts/generar-carga-banco.mjs · NO editar a mano.
-- Fuente: ../content/qui-b2-2026b.js · clave_origen = modelo

insert into public.contextos (id, tipo, etiqueta, clase, contenido) values ('b7c657ec-16ae-40f5-af79-9e488550aaeb', 'situacion', 'QUÍMICA', 'ctx-sit', '<p>A continuación se esquematiza una reacción reversible y un sistema en el cual la reacción puede desplazarse a la derecha para generar el producto, o hacia la izquierda para que el producto se descomponga en dos reactivos.</p><figure class="ctx-fig es-ancha" tabindex="0"><img src="img/figuras/bio/b2-q95.webp" style="min-width:460px" loading="lazy" alt="Modelo de partículas de dos reactivos en equilibrio reversible con un producto."></figure><p>Un estudiante descubre que cuando la reacción se encuentra en equilibrio (hay tanto productos como reactivos), una manera de favorecer que la reacción se desplace hacia la derecha es extrayendo todo el producto de la reacción.</p>');
insert into public.contextos (id, tipo, etiqueta, clase, contenido) values ('e99904dd-3bb2-4035-99a4-c969b191a4e3', 'situacion', 'QUÍMICA', 'ctx-sit', '<p>La solubilidad en agua se define como la máxima cantidad de una sustancia que puede disolverse en 100 g de agua a una determinada temperatura. A continuación se muestra cómo cambia la solubilidad de tres compuestos en agua respecto a la temperatura.</p><figure class="ctx-fig es-ancha" tabindex="0"><img src="img/figuras/bio/b2-q96.webp" style="min-width:460px" loading="lazy" alt="Solubilidad de tres compuestos en gramos por 100 g de agua, frente a temperatura en grados Celsius."></figure><p>De acuerdo con lo anterior, se quiere encontrar una temperatura a la cual se puedan tener en recipientes separados 60 g o más de cada uno de los compuestos completamente disueltos en 100 g de agua.</p>');
insert into public.contextos (id, tipo, etiqueta, clase, contenido) values ('7581c90b-b020-4845-a5d1-21fb51d17b2e', 'situacion', 'QUÍMICA', 'ctx-sit', '<p>Un estudiante realizó el siguiente procedimiento para comparar el pH de tres frutas: naranja, mango y piña.</p><div class="ctx-datos" role="region" aria-label="Procedimiento de medición del pH" tabindex="0"><table class="ctx-table ctx-table-nativa ctx-table-amplia"><thead><tr><th scope="col">Muestra</th><th scope="col">Disolución</th><th scope="col">Medición</th></tr></thead><tbody><tr><th scope="row">1 g de naranja</th><td>15 ml de agua destilada</td><td>Papel indicador que cambia de color si la disolución es ácida o básica.</td></tr><tr><th scope="row">1 g de mango</th><td>10 ml de agua destilada</td><td>Peachímetro: instrumento que, con ayuda de un electrodo, mide el valor de pH de una disolución.</td></tr><tr><th scope="row">1 g de piña</th><td>5 ml de agua destilada</td><td>Solución indicadora de pH: fenolftaleína, sustancia que cambia de color si el pH de la disolución es ácido o básico.</td></tr></tbody></table></div>');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm, dificultad)
select 'e04d687d-4244-4863-a46a-eb09882dced2', 'qui',
  (select id from public.temas where materia = 'qui' and codigo = 'equilibrio-quimico'),
  (select id from public.lotes where codigo = '2026-B'),
  'b7c657ec-16ae-40f5-af79-9e488550aaeb', 'Equilibrio químico',
  'Cuando se hace esta modificación al sistema, el equilibrio se desplaza hacia la derecha, porque',
  array['para restablecer el equilibrio el sistema busca formar la sustancia que se extrajo.', 'cuando se extrae el producto aumenta el tamaño de las moléculas.', 'el producto se descompone completamente para formar mayor cantidad de reactivos.', 'cuando se extrae el producto aumenta la temperatura.'],
  'Aplica el principio de Le Châtelier a la retirada de un producto.', 'publicada', 'modelo', 'f3ebfc9f66b79d6798580794adef659c', 'media';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('e04d687d-4244-4863-a46a-eb09882dced2', 0, 'Al retirar producto, la reacción neta favorece su formación hasta alcanzar un nuevo equilibrio. No hace falta suponer un aumento de temperatura ni del tamaño molecular.');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm, dificultad)
select '392bb5cc-4a5b-4d0c-9834-b96513bc52b6', 'qui',
  (select id from public.temas where materia = 'qui' and codigo = 'soluciones'),
  (select id from public.lotes where codigo = '2026-B'),
  'e99904dd-3bb2-4035-99a4-c969b191a4e3', 'Soluciones',
  '¿A qué temperatura se cumple esta condición?',
  array['20 °C.', '35 °C.', '45 °C.', '0 °C.'],
  'Busca una temperatura que cumpla la condición para las tres curvas a la vez.', 'publicada', 'modelo', '9e4148582c8ec51e203b50ba5b095b0c', 'media';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('392bb5cc-4a5b-4d0c-9834-b96513bc52b6', 2, 'A 45 °C las tres curvas alcanzan o superan 60 g por 100 g de agua. A las temperaturas menores propuestas, el compuesto 2 todavía está por debajo de ese umbral.');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm, dificultad)
select '58eafdaa-2c00-4bba-bfe2-ac9d474ac451', 'qui',
  (select id from public.temas where materia = 'qui' and codigo = 'indagacion-experimental'),
  (select id from public.lotes where codigo = '2026-B'),
  '7581c90b-b020-4845-a5d1-21fb51d17b2e', 'Indagación experimental',
  '¿El anterior procedimiento permite comparar apropiadamente los pH de las tres frutas?',
  array['No, porque cada fruta se disolvió en distintas cantidades de agua y cada medición de pH se realizó con una técnica distinta, lo cual dificulta las comparaciones.', 'No, porque para detectar diferencias en los valores de pH se debieron haber usado distintas masas de cada fruta y no la misma.', 'Sí, porque todas las frutas se disolvieron en agua y se emplearon tres técnicas diferentes, lo cual permite obtener un gran número de datos.', 'Sí, porque con este procedimiento se puede saber no solo cuál es la fruta con mayor pH, sino cuál es la técnica más apropiada para medir el pH de las frutas.'],
  'Comprueba qué variables, además del tipo de fruta, cambian entre las mediciones.', 'publicada', 'modelo', 'a3bb1ac4e4e6a42f2b76f55fff786446', 'media';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('58eafdaa-2c00-4bba-bfe2-ac9d474ac451', 0, 'Se cambiaron simultáneamente el volumen de dilución y el método de medición. Para comparar las frutas se necesitan condiciones y métodos equivalentes; los indicadores de color tampoco dan la misma precisión que un pH-metro.');

insert into public.cuestionarios (id, materia, slug, seccion, titulo, tipo, orden, lote_id, publicado)
select '9a8dea72-0ba2-426f-a7d4-3935fbbeb911', 'qui', 'qui-13', 'Equilibrio químico', '2B · Equilibrio químico', 'Práctica', 13,
  (select id from public.lotes where codigo = '2026-B'), true;
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('9a8dea72-0ba2-426f-a7d4-3935fbbeb911', 'e04d687d-4244-4863-a46a-eb09882dced2', 1);

insert into public.cuestionarios (id, materia, slug, seccion, titulo, tipo, orden, lote_id, publicado)
select '640f7af5-9f31-4b0e-b1d8-55e74bd38606', 'qui', 'qui-14', 'Soluciones', '2B · Soluciones', 'Práctica', 14,
  (select id from public.lotes where codigo = '2026-B'), true;
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('640f7af5-9f31-4b0e-b1d8-55e74bd38606', '392bb5cc-4a5b-4d0c-9834-b96513bc52b6', 1);

insert into public.cuestionarios (id, materia, slug, seccion, titulo, tipo, orden, lote_id, publicado)
select '99bbbaf9-b79a-433b-93bd-97273fbd5b5d', 'qui', 'qui-15', 'Indagación experimental', '2B · Indagación experimental', 'Práctica', 15,
  (select id from public.lotes where codigo = '2026-B'), true;
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('99bbbaf9-b79a-433b-93bd-97273fbd5b5d', '58eafdaa-2c00-4bba-bfe2-ac9d474ac451', 1);

