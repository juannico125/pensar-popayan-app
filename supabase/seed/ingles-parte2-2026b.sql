-- Generado por scripts/generar-carga-banco.mjs · NO editar a mano.
-- Fuente: ../content/ingles-parte2-2026b.js · clave_origen = modelo


insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm)
select 'ca1ca31c-9001-49c7-833a-52ae51e55cde', 'ing',
  (select id from public.temas where materia = 'ing' and codigo = 'parte-2-vocabulario'),
  (select id from public.lotes where codigo = '2026-B'),
  null, 'Parte 2 · Vocabulario en contexto',
  'Children do this on bikes and skateboards.',
  array['boat', 'fish', 'drive', 'island', 'ride', 'roller skates', 'swimming pool', 'tennis'],
  'Cuando la descripción empieza con «do this», busca un verbo entre las opciones, no un objeto.', 'publicada', 'modelo', '1a44858a38935381753917e7a879bd1b';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('ca1ca31c-9001-49c7-833a-52ae51e55cde', 4, 'Montar es lo que se hace sobre una bicicleta o una patineta: en inglés, ride a bike. Manejar es para carros, y las demás palabras nombran objetos o lugares, no la acción.');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm)
select 'e183dfb1-7b32-4e4d-bb50-2d0a3ab5f594', 'ing',
  (select id from public.temas where materia = 'ing' and codigo = 'parte-2-vocabulario'),
  (select id from public.lotes where codigo = '2026-B'),
  null, 'Parte 2 · Vocabulario en contexto',
  'Tourists travel to this sunny place to enjoy the ocean waves.',
  array['boat', 'fish', 'drive', 'island', 'ride', 'roller skates', 'swimming pool', 'tennis'],
  'La palabra place te avisa de que la respuesta es un lugar. Descarta de entrada los verbos y los objetos.', 'publicada', 'modelo', '99a292a107eee6e42609a50c914d2bf6';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('e183dfb1-7b32-4e4d-bb50-2d0a3ab5f594', 3, 'Es un lugar soleado rodeado de mar, con olas: una isla. El bote sirve para llegar, pero no es el lugar; la piscina no tiene olas de océano.');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm)
select '209dd482-ee2d-4077-bcd0-ec5effa21b32', 'ing',
  (select id from public.temas where materia = 'ing' and codigo = 'parte-2-vocabulario'),
  (select id from public.lotes where codigo = '2026-B'),
  null, 'Parte 2 · Vocabulario en contexto',
  'You do this in a lake or river to catch something to eat.',
  array['boat', 'fish', 'drive', 'island', 'ride', 'roller skates', 'swimming pool', 'tennis'],
  'Varias palabras del inglés son verbo y sustantivo a la vez. Fíjate en si la frase pide una acción o una cosa.', 'publicada', 'modelo', '9415600dc8d3f08691589349cdcceeab';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('209dd482-ee2d-4077-bcd0-ec5effa21b32', 1, 'Sacar del agua algo para comer es pescar. Aquí «fish» funciona como verbo, no como el animal: la descripción pide una acción que se hace en un lago o un río.');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm)
select 'e61b7078-5a9b-4361-880f-ca78c3fa8f5c', 'ing',
  (select id from public.temas where materia = 'ing' and codigo = 'parte-2-vocabulario'),
  (select id from public.lotes where codigo = '2026-B'),
  null, 'Parte 2 · Vocabulario en contexto',
  'On hot days, you jump into it to get cooler.',
  array['boat', 'fish', 'drive', 'island', 'ride', 'roller skates', 'swimming pool', 'tennis'],
  'El pronombre it apunta a una sola cosa concreta; si dijera them, la respuesta sería un plural.', 'publicada', 'modelo', '3fb200b63f9001c5993cf7f22f559b3a';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('e61b7078-5a9b-4361-880f-ca78c3fa8f5c', 6, 'Uno se lanza al agua para refrescarse en los días de calor: es la piscina. La isla es un lugar al que se viaja, no algo a lo que uno se tire.');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm)
select 'afebc77d-ff22-425a-b1cc-341e258d92f1', 'ing',
  (select id from public.temas where materia = 'ing' and codigo = 'parte-2-vocabulario'),
  (select id from public.lotes where codigo = '2026-B'),
  null, 'Parte 2 · Vocabulario en contexto',
  'You put them on to move quickly on a road.',
  array['boat', 'fish', 'drive', 'island', 'ride', 'roller skates', 'swimming pool', 'tennis'],
  'La estructura «put them on» significa ponerse algo encima: ropa, zapatos o, como aquí, patines.', 'publicada', 'modelo', '3c522d08dafb06672f53fb273550f9b4';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('afebc77d-ff22-425a-b1cc-341e258d92f1', 5, 'Se los pone uno en los pies para desplazarse rápido: son los patines. El plural them ya descarta la isla, la piscina y el bote, que van en singular.');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm)
select '76c222a6-18f7-4333-9ea8-0fe3a1488a8e', 'ing',
  (select id from public.temas where materia = 'ing' and codigo = 'parte-2-vocabulario'),
  (select id from public.lotes where codigo = '2026-B'),
  null, 'Parte 2 · Vocabulario en contexto',
  'This place is below the ground floor of your house.',
  array['Basement', 'Chair', 'Picture', 'Sofa', 'Stairs', 'Table', 'Towel', 'Radio'],
  'Below significa debajo. Ubica primero la posición que describe la frase y después busca el espacio que le corresponde.', 'publicada', 'modelo', '0f1992f569a921915850201bc9065841';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('76c222a6-18f7-4333-9ea8-0fe3a1488a8e', 0, 'El espacio que queda debajo del primer piso de una casa es el sótano. Las escaleras comunican los pisos, pero no son un lugar debajo de ellos.');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm)
select 'b4ec0283-805d-47b7-95e1-36d7fbe44063', 'ing',
  (select id from public.temas where materia = 'ing' and codigo = 'parte-2-vocabulario'),
  (select id from public.lotes where codigo = '2026-B'),
  null, 'Parte 2 · Vocabulario en contexto',
  'This is a person''s photo you have in your bedroom.',
  array['Basement', 'Chair', 'Picture', 'Sofa', 'Stairs', 'Table', 'Towel', 'Radio'],
  'La palabra photo te dice que la respuesta es algo que se mira, no algo que se usa.', 'publicada', 'modelo', '9e74a6a49d209a1fce16608bff35b680';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('b4ec0283-805d-47b7-95e1-36d7fbe44063', 2, 'Una foto de alguien que uno tiene en el cuarto es un retrato o cuadro. El radio y la mesa están en la casa, pero ninguno es una imagen.');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm)
select 'e0cedb95-ff8a-4340-8475-eaeb1c76abc9', 'ing',
  (select id from public.temas where materia = 'ing' and codigo = 'parte-2-vocabulario'),
  (select id from public.lotes where codigo = '2026-B'),
  null, 'Parte 2 · Vocabulario en contexto',
  'Two or three people can sit on it.',
  array['Basement', 'Chair', 'Picture', 'Sofa', 'Stairs', 'Table', 'Towel', 'Radio'],
  'Fíjate en el número: «two or three people» descarta el mueble hecho para una sola persona.', 'publicada', 'modelo', 'c41003ffe3754ac0713d704bcf107822';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('e0cedb95-ff8a-4340-8475-eaeb1c76abc9', 3, 'Un mueble donde caben dos o tres personas sentadas es el sofá. La silla también sirve para sentarse, pero solo alcanza para una.');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm)
select 'c598ee96-e356-48d7-b492-32deb8e8c1b9', 'ing',
  (select id from public.temas where materia = 'ing' and codigo = 'parte-2-vocabulario'),
  (select id from public.lotes where codigo = '2026-B'),
  null, 'Parte 2 · Vocabulario en contexto',
  'You dry your body with it.',
  array['Basement', 'Chair', 'Picture', 'Sofa', 'Stairs', 'Table', 'Towel', 'Radio'],
  'El verbo dry es secar. Piensa qué objeto de la casa cumple justo esa función.', 'publicada', 'modelo', '5f3ff9fac935b8e9b279b17a1a41c2c6';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('c598ee96-e356-48d7-b492-32deb8e8c1b9', 6, 'Lo que se usa para secarse el cuerpo es la toalla. Ninguna de las otras palabras nombra algo de tela que absorba el agua.');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm)
select '6d10722b-4dee-47fb-84ce-1d534ea6f3de', 'ing',
  (select id from public.temas where materia = 'ing' and codigo = 'parte-2-vocabulario'),
  (select id from public.lotes where codigo = '2026-B'),
  null, 'Parte 2 · Vocabulario en contexto',
  'You go up or down on them at home.',
  array['Basement', 'Chair', 'Picture', 'Sofa', 'Stairs', 'Table', 'Towel', 'Radio'],
  'Up or down describe un movimiento vertical: en una casa eso solo lo permite un elemento.', 'publicada', 'modelo', '593f6701c452543813b46c1d15ff01ae';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('6d10722b-4dee-47fb-84ce-1d534ea6f3de', 4, 'Subir y bajar dentro de la casa se hace por las escaleras. El plural them encaja con ellas, que se cuentan por escalones; el sótano es un lugar al que se llega, no por donde se sube.');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm)
select 'ee7c91c1-9461-42b4-b257-94c714b13d3f', 'ing',
  (select id from public.temas where materia = 'ing' and codigo = 'parte-2-vocabulario'),
  (select id from public.lotes where codigo = '2026-B'),
  null, 'Parte 2 · Vocabulario en contexto',
  'You put them on to move on the ground.',
  array['baseball', 'basketball', 'boats', 'cars', 'field', 'pool', 'skates', 'tennis'],
  'La misma pista de siempre: «put them on» significa ponerse algo, así que la respuesta se lleva puesta.', 'publicada', 'modelo', '5119efe38c7e903b8cbbb07246d66ff7';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('ee7c91c1-9461-42b4-b257-94c714b13d3f', 6, 'Son los patines: se los pone uno en los pies para desplazarse por el suelo. Los botes van en el agua y los carros no se los pone nadie.');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm)
select '7b648e91-e977-4ed5-9dfd-accb08a083ee', 'ing',
  (select id from public.temas where materia = 'ing' and codigo = 'parte-2-vocabulario'),
  (select id from public.lotes where codigo = '2026-B'),
  null, 'Parte 2 · Vocabulario en contexto',
  'In this game, two people hit a small ball.',
  array['baseball', 'basketball', 'boats', 'cars', 'field', 'pool', 'skates', 'tennis'],
  'Cuenta cuántos jugadores menciona la frase: ese dato suele separar un deporte de otro parecido.', 'publicada', 'modelo', '8a4ec881d7c89e957687897e51ef2065';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('7b648e91-e977-4ed5-9dfd-accb08a083ee', 7, 'Dos personas golpeando una pelota pequeña describe el tenis. El béisbol también usa pelota pequeña, pero se juega entre dos equipos completos, no entre dos personas.');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm)
select 'b1b75915-9756-4f5e-847f-02e4bbee69d8', 'ing',
  (select id from public.temas where materia = 'ing' and codigo = 'parte-2-vocabulario'),
  (select id from public.lotes where codigo = '2026-B'),
  null, 'Parte 2 · Vocabulario en contexto',
  'This is the best place to go for a swim.',
  array['baseball', 'basketball', 'boats', 'cars', 'field', 'pool', 'skates', 'tennis'],
  'Swim es nadar. Entre las opciones busca el único lugar hecho para el agua.', 'publicada', 'modelo', 'c2d09b8a02a7ad277a13b4153a0f0bbd';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('b1b75915-9756-4f5e-847f-02e4bbee69d8', 5, 'El mejor sitio para nadar es la piscina. El campo es para deportes en tierra y los botes flotan sobre el agua, pero no se nada en ellos.');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm)
select '96a2b8e5-978b-4157-b4e0-f4cc83f04b96', 'ing',
  (select id from public.temas where materia = 'ing' and codigo = 'parte-2-vocabulario'),
  (select id from public.lotes where codigo = '2026-B'),
  null, 'Parte 2 · Vocabulario en contexto',
  'You bounce and throw a big ball with your hands.',
  array['baseball', 'basketball', 'boats', 'cars', 'field', 'pool', 'skates', 'tennis'],
  'Dos datos definen el deporte: el tamaño del balón y con qué parte del cuerpo se juega.', 'publicada', 'modelo', 'a16618f1d38430ef819bf7e10ef26184';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('96a2b8e5-978b-4157-b4e0-f4cc83f04b96', 1, 'Rebotar y lanzar un balón grande con las manos es baloncesto. En el béisbol la pelota es pequeña y se golpea con un bate, no se rebota.');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm)
select '1fd2674d-6791-4187-8bc6-cbc374e7c034', 'ing',
  (select id from public.temas where materia = 'ing' and codigo = 'parte-2-vocabulario'),
  (select id from public.lotes where codigo = '2026-B'),
  null, 'Parte 2 · Vocabulario en contexto',
  'People drive them in a great sport.',
  array['baseball', 'basketball', 'boats', 'cars', 'field', 'pool', 'skates', 'tennis'],
  'Cada vehículo tiene su verbo en inglés: drive para carros, sail para botes, ride para bicicletas.', 'publicada', 'modelo', 'f4fb889775cd64feaffc31705c93c37c';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('1fd2674d-6791-4187-8bc6-cbc374e7c034', 3, 'El verbo drive es conducir, y lo que se conduce en un deporte son los carros. Los botes se navegan y los patines se llevan puestos.');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm)
select '912601d9-02f0-480d-b811-8eb615e4945b', 'ing',
  (select id from public.temas where materia = 'ing' and codigo = 'parte-2-vocabulario'),
  (select id from public.lotes where codigo = '2026-B'),
  null, 'Parte 2 · Vocabulario en contexto',
  'Rabbits like this long orange vegetable.',
  array['candy', 'carrot', 'chicken', 'fish', 'milk', 'soup', 'tea', 'apple'],
  'La palabra vegetable ya reduce la lista. Después usa el color y la forma para escoger.', 'publicada', 'modelo', '804e00689399efa10eaa7ade02c1039e';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('912601d9-02f0-480d-b811-8eb615e4945b', 1, 'La verdura larga y naranja que comen los conejos es la zanahoria. Es además la única verdura de la lista: las demás son carnes, líquidos o dulces.');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm)
select 'ac3d70cb-c7e6-4a5c-b4bc-cfde30aeeca3', 'ing',
  (select id from public.temas where materia = 'ing' and codigo = 'parte-2-vocabulario'),
  (select id from public.lotes where codigo = '2026-B'),
  null, 'Parte 2 · Vocabulario en contexto',
  'You get this when you cook vegetables and meat in water.',
  array['candy', 'carrot', 'chicken', 'fish', 'milk', 'soup', 'tea', 'apple'],
  'Fíjate en los ingredientes que enumera la frase: el plato tiene que contenerlos todos.', 'publicada', 'modelo', '2fa3e2320d43e34498b259384d104fd1';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('ac3d70cb-c7e6-4a5c-b4bc-cfde30aeeca3', 5, 'Cocinar verduras y carne en agua da como resultado una sopa. El té también se prepara con agua, pero no lleva carne ni verduras.');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm)
select '3c0a1b2c-c098-4a10-a98b-2c551cb22f58', 'ing',
  (select id from public.temas where materia = 'ing' and codigo = 'parte-2-vocabulario'),
  (select id from public.lotes where codigo = '2026-B'),
  null, 'Parte 2 · Vocabulario en contexto',
  'This comes from cows and you can make cheese with it.',
  array['candy', 'carrot', 'chicken', 'fish', 'milk', 'soup', 'tea', 'apple'],
  'Cuando la frase da dos pistas (de dónde viene y para qué sirve), la respuesta debe cumplir las dos.', 'publicada', 'modelo', '8cbd4a13f6192a82bd4fd8a04616c71a';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('3c0a1b2c-c098-4a10-a98b-2c551cb22f58', 4, 'Lo que dan las vacas y sirve para hacer queso es la leche. La carne también viene de la vaca, pero con carne no se hace queso.');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm)
select '00315c20-e942-4305-892d-9a48d4caeb59', 'ing',
  (select id from public.temas where materia = 'ing' and codigo = 'parte-2-vocabulario'),
  (select id from public.lotes where codigo = '2026-B'),
  null, 'Parte 2 · Vocabulario en contexto',
  'Children love this sweet food.',
  array['candy', 'carrot', 'chicken', 'fish', 'milk', 'soup', 'tea', 'apple'],
  'Sweet es dulce. Recorre la lista y quédate con lo único que sea azucarado.', 'publicada', 'modelo', '0a71eb71c93c6a8c4d3d80c30febcb51';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('00315c20-e942-4305-892d-9a48d4caeb59', 0, 'La comida dulce que encanta a los niños son los dulces. Ninguna de las otras opciones es un alimento azucarado.');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm)
select 'd41286e9-30bf-4e82-884f-f3a13e41f6b1', 'ing',
  (select id from public.temas where materia = 'ing' and codigo = 'parte-2-vocabulario'),
  (select id from public.lotes where codigo = '2026-B'),
  null, 'Parte 2 · Vocabulario en contexto',
  'We eat this animal that lives in rivers or in the sea.',
  array['candy', 'carrot', 'chicken', 'fish', 'milk', 'soup', 'tea', 'apple'],
  'Aquí «fish» es el animal, no la acción de pescar. El contexto de cada bloque cambia el sentido de la palabra.', 'publicada', 'modelo', 'f1cd0a32c5a6972f41e506d1f5ac1be0';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('d41286e9-30bf-4e82-884f-f3a13e41f6b1', 3, 'El animal que vive en ríos y en el mar y se come es el pescado. El pollo también es un animal que se come, pero vive en tierra.');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm)
select '57941805-cb5f-42b5-b5a3-5fe1f5a9ab3c', 'ing',
  (select id from public.temas where materia = 'ing' and codigo = 'parte-2-vocabulario'),
  (select id from public.lotes where codigo = '2026-B'),
  null, 'Parte 2 · Vocabulario en contexto',
  'When you open it, you find something to drink inside.',
  array['Banana', 'Coconut', 'Grape', 'Lime', 'Mango', 'Pear', 'Pineapple', 'Watermelon'],
  'La frase dice «to drink»: busca la fruta que guarda líquido, no la que tiene jugo al exprimirla.', 'publicada', 'modelo', '5286ffc855f198c8d74ff56b859dffc0';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('57941805-cb5f-42b5-b5a3-5fe1f5a9ab3c', 1, 'La fruta que al abrirla trae líquido adentro es el coco: se bebe su agua. Las demás frutas de la lista se comen, no se beben.');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm)
select '084f6044-036a-42ee-aa31-491a90ae503b', 'ing',
  (select id from public.temas where materia = 'ing' and codigo = 'parte-2-vocabulario'),
  (select id from public.lotes where codigo = '2026-B'),
  null, 'Parte 2 · Vocabulario en contexto',
  'This fruit is long, and monkeys like it a lot.',
  array['Banana', 'Coconut', 'Grape', 'Lime', 'Mango', 'Pear', 'Pineapple', 'Watermelon'],
  'Cuando la descripción une forma y un animal conocido, casi siempre apunta a una fruta muy familiar.', 'publicada', 'modelo', '755d4152f87634b47fd3690efa98593c';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('084f6044-036a-42ee-aa31-491a90ae503b', 0, 'Alargada y asociada a los monos: es el banano. Ninguna otra fruta de la lista tiene esa forma ni esa fama.');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm)
select 'bef6d5af-d876-4e2c-a02b-315debf1f9f7', 'ing',
  (select id from public.temas where materia = 'ing' and codigo = 'parte-2-vocabulario'),
  (select id from public.lotes where codigo = '2026-B'),
  null, 'Parte 2 · Vocabulario en contexto',
  'It is red inside with small black things you don''t eat.',
  array['Banana', 'Coconut', 'Grape', 'Lime', 'Mango', 'Pear', 'Pineapple', 'Watermelon'],
  'Inside indica el interior de la fruta, no su cáscara. Imagínala partida por la mitad.', 'publicada', 'modelo', '0366ad7a18c20bbecf99651a3697d58c';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('bef6d5af-d876-4e2c-a02b-315debf1f9f7', 7, 'Roja por dentro y con pepas negras que se escupen: es la sandía. La uva puede ser oscura por fuera, pero no es roja por dentro con semillas negras visibles.');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm)
select 'ff9ff8de-42b8-4b72-9a98-37330e3b6dfa', 'ing',
  (select id from public.temas where materia = 'ing' and codigo = 'parte-2-vocabulario'),
  (select id from public.lotes where codigo = '2026-B'),
  null, 'Parte 2 · Vocabulario en contexto',
  'Some people eat vegetable salads with its juice.',
  array['Banana', 'Coconut', 'Grape', 'Lime', 'Mango', 'Pear', 'Pineapple', 'Watermelon'],
  'Juice aquí no es una bebida: es el jugo que se exprime encima de otra comida.', 'publicada', 'modelo', 'cafc08d4a18da6e9a6213faa7d7bafe2';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('ff9ff8de-42b8-4b72-9a98-37330e3b6dfa', 3, 'El jugo que se le echa a las ensaladas es el del limón. Las demás frutas de la lista se comen como postre, no se usan para aliñar.');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm)
select '0be89c38-e6f2-4ed8-a10f-23ee82b6feaa', 'ing',
  (select id from public.temas where materia = 'ing' and codigo = 'parte-2-vocabulario'),
  (select id from public.lotes where codigo = '2026-B'),
  null, 'Parte 2 · Vocabulario en contexto',
  'It is very small and can be purple or green.',
  array['Banana', 'Coconut', 'Grape', 'Lime', 'Mango', 'Pear', 'Pineapple', 'Watermelon'],
  'Dos datos juntos, tamaño y color, suelen dejar una sola fruta posible.', 'publicada', 'modelo', '9c8845786908a6a30efcec868d477993';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion) values ('0be89c38-e6f2-4ed8-a10f-23ee82b6feaa', 2, 'Muy pequeña y de color morado o verde: es la uva. El resto de las frutas de la lista son grandes o tienen un solo color característico.');

insert into public.cuestionarios (id, materia, slug, seccion, titulo, tipo, orden, lote_id, publicado)
select '746d5785-eecb-4587-b3f6-6382c7ee4e40', 'ing', 'ing-23', 'Parte 2 · Vocabulario en contexto', 'Vocabulario: tiempo libre', 'Vocabulario', 23,
  (select id from public.lotes where codigo = '2026-B'), true;
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('746d5785-eecb-4587-b3f6-6382c7ee4e40', 'ca1ca31c-9001-49c7-833a-52ae51e55cde', 1);
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('746d5785-eecb-4587-b3f6-6382c7ee4e40', 'e183dfb1-7b32-4e4d-bb50-2d0a3ab5f594', 2);
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('746d5785-eecb-4587-b3f6-6382c7ee4e40', '209dd482-ee2d-4077-bcd0-ec5effa21b32', 3);
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('746d5785-eecb-4587-b3f6-6382c7ee4e40', 'e61b7078-5a9b-4361-880f-ca78c3fa8f5c', 4);
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('746d5785-eecb-4587-b3f6-6382c7ee4e40', 'afebc77d-ff22-425a-b1cc-341e258d92f1', 5);

insert into public.cuestionarios (id, materia, slug, seccion, titulo, tipo, orden, lote_id, publicado)
select 'a7ed59ef-e01c-4a4b-9013-3c53ffd06371', 'ing', 'ing-24', 'Parte 2 · Vocabulario en contexto', 'Vocabulario: la casa', 'Vocabulario', 24,
  (select id from public.lotes where codigo = '2026-B'), true;
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('a7ed59ef-e01c-4a4b-9013-3c53ffd06371', '76c222a6-18f7-4333-9ea8-0fe3a1488a8e', 1);
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('a7ed59ef-e01c-4a4b-9013-3c53ffd06371', 'b4ec0283-805d-47b7-95e1-36d7fbe44063', 2);
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('a7ed59ef-e01c-4a4b-9013-3c53ffd06371', 'e0cedb95-ff8a-4340-8475-eaeb1c76abc9', 3);
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('a7ed59ef-e01c-4a4b-9013-3c53ffd06371', 'c598ee96-e356-48d7-b492-32deb8e8c1b9', 4);
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('a7ed59ef-e01c-4a4b-9013-3c53ffd06371', '6d10722b-4dee-47fb-84ce-1d534ea6f3de', 5);

insert into public.cuestionarios (id, materia, slug, seccion, titulo, tipo, orden, lote_id, publicado)
select 'f97a7d57-fd1d-4812-b061-13c9ddc6cf4d', 'ing', 'ing-25', 'Parte 2 · Vocabulario en contexto', 'Vocabulario: deportes', 'Vocabulario', 25,
  (select id from public.lotes where codigo = '2026-B'), true;
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('f97a7d57-fd1d-4812-b061-13c9ddc6cf4d', 'ee7c91c1-9461-42b4-b257-94c714b13d3f', 1);
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('f97a7d57-fd1d-4812-b061-13c9ddc6cf4d', '7b648e91-e977-4ed5-9dfd-accb08a083ee', 2);
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('f97a7d57-fd1d-4812-b061-13c9ddc6cf4d', 'b1b75915-9756-4f5e-847f-02e4bbee69d8', 3);
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('f97a7d57-fd1d-4812-b061-13c9ddc6cf4d', '96a2b8e5-978b-4157-b4e0-f4cc83f04b96', 4);
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('f97a7d57-fd1d-4812-b061-13c9ddc6cf4d', '1fd2674d-6791-4187-8bc6-cbc374e7c034', 5);

insert into public.cuestionarios (id, materia, slug, seccion, titulo, tipo, orden, lote_id, publicado)
select '22486736-ceec-43de-bdec-5fca0b4b7f89', 'ing', 'ing-26', 'Parte 2 · Vocabulario en contexto', 'Vocabulario: comida', 'Vocabulario', 26,
  (select id from public.lotes where codigo = '2026-B'), true;
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('22486736-ceec-43de-bdec-5fca0b4b7f89', '912601d9-02f0-480d-b811-8eb615e4945b', 1);
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('22486736-ceec-43de-bdec-5fca0b4b7f89', 'ac3d70cb-c7e6-4a5c-b4bc-cfde30aeeca3', 2);
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('22486736-ceec-43de-bdec-5fca0b4b7f89', '3c0a1b2c-c098-4a10-a98b-2c551cb22f58', 3);
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('22486736-ceec-43de-bdec-5fca0b4b7f89', '00315c20-e942-4305-892d-9a48d4caeb59', 4);
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('22486736-ceec-43de-bdec-5fca0b4b7f89', 'd41286e9-30bf-4e82-884f-f3a13e41f6b1', 5);

insert into public.cuestionarios (id, materia, slug, seccion, titulo, tipo, orden, lote_id, publicado)
select 'dfef5fb5-fbe1-45db-8ed4-5a1cd36e1317', 'ing', 'ing-27', 'Parte 2 · Vocabulario en contexto', 'Vocabulario: frutas', 'Vocabulario', 27,
  (select id from public.lotes where codigo = '2026-B'), true;
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('dfef5fb5-fbe1-45db-8ed4-5a1cd36e1317', '57941805-cb5f-42b5-b5a3-5fe1f5a9ab3c', 1);
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('dfef5fb5-fbe1-45db-8ed4-5a1cd36e1317', '084f6044-036a-42ee-aa31-491a90ae503b', 2);
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('dfef5fb5-fbe1-45db-8ed4-5a1cd36e1317', 'bef6d5af-d876-4e2c-a02b-315debf1f9f7', 3);
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('dfef5fb5-fbe1-45db-8ed4-5a1cd36e1317', 'ff9ff8de-42b8-4b72-9a98-37330e3b6dfa', 4);
insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden) values ('dfef5fb5-fbe1-45db-8ed4-5a1cd36e1317', '0be89c38-e6f2-4ed8-a10f-23ee82b6feaa', 5);

