-- Vuelve a alinear la base con git: 10 explicaciones y un id de pregunta.
--
-- Se aplica como una sola migración, es decir, dentro de una transacción: el
-- intercambio de id de la parte 2 no puede quedar a medias.
--
-- La huella de contenido (scripts/huella-carga.mjs) no cuadraba en cinco
-- cuestionarios de 125. El contenido en git —el .js y el .sql que genera— sí
-- coincide entre sí; lo que quedó atrás es la base. Ninguna clave 'correcta'
-- difería: solo la redacción de diez explicaciones y un identificador.
--
-- 1 · ing-7, ing-9, ing-10 e ing-11: diez explicaciones se cargaron con una
--     redacción anterior a la que quedó en content/ingles-parte3-2026b.js.
--     Se reescriben con el texto de git.
--
-- 2 · soc-16: la fila de la pregunta sobre precios agrícolas por ciudad tiene
--     el id de una versión anterior del contexto. El texto de la base ya es
--     idéntico al de git, pero el id no, y como el id se deriva del contenido,
--     la huella no volverá a cuadrar mientras siga así.
--
--     A diferencia de las tres figuras (20260914040135 y siguientes), esta
--     pregunta sí tiene una respuesta de estudiante, así que no se borra y se
--     reinserta: se crea la fila nueva, se le pasan los hijos —incluida esa
--     respuesta— y solo entonces se borra la vieja. El índice único
--     (materia, hash_norm) obliga a soltar antes el hash de la fila vieja.


-- ── 1 · Las diez explicaciones ──
update public.preguntas_clave set explicacion = 'La pregunta es si ya se inscribió, y la respuesta confirma que sí diciendo cuándo: hace un mes. Estar de acuerdo no responde a una pregunta de sí o no sobre un hecho.'
  where pregunta_id = '55e0fff6-afcc-408b-a197-db019e23f3b2';
update public.preguntas_clave set explicacion = 'La pregunta es QUIÉN va a hacerlo, y la respuesta nombra a la persona: yo mismo. Las otras dos dicen qué se va a hacer, no quién.'
  where pregunta_id = 'aaa3fa77-b674-4b3d-a951-93508dc09c84';
update public.preguntas_clave set explicacion = 'Es un agradecimiento, y «no problem» es la fórmula habitual para restarle importancia. «No thanks» rechaza algo que ofrecen, y la tercera responde a una pregunta que nadie hizo.'
  where pregunta_id = '56647cb1-86ab-4775-8e9b-a980aaf8dcab';
update public.preguntas_clave set explicacion = 'Es una noticia y se recibe con entusiasmo. Advertir que tenga cuidado no viene a cuento con una invitación, y «lo antes posible» respondería a una pregunta sobre cuándo.'
  where pregunta_id = '848d0f73-9c87-4416-8c2d-6b757e706652';
update public.preguntas_clave set explicacion = 'Quien pregunta ya está diciendo que el viaje fue maravilloso y busca que se lo confirmen: la respuesta lo confirma con más entusiasmo todavía. Las otras dos felicitan o agradecen a la persona, no opinan del viaje.'
  where pregunta_id = 'c365bd9c-429e-4ee6-ad29-07ffc39ab91f';
update public.preguntas_clave set explicacion = 'Quien responde pide la explicación de por qué no pudieron nadar, que es lo que la frase deja pendiente. Celebrarlo choca con una contrariedad, y preguntar la frecuencia no responde al hecho puntual de ayer.'
  where pregunta_id = '4ee0894a-b4f3-458f-90b9-6187938612a7';
update public.preguntas_clave set explicacion = 'La frase está en pasado y el verbo es «loved», así que la pregunta de eco tiene que repetir ese verbo: «Did you?». «Was it?» respondería a una frase con el verbo to be, y «Why not?» a una negación.'
  where pregunta_id = 'a6d0bd35-8eb4-4f11-bb73-0a72005aa8b0';
update public.preguntas_clave set explicacion = 'Quien atiende concede la prueba y pide el dato que le falta: la talla. Las otras dos hablan de cantidad o quitan importancia a algo, y ninguna de las dos tiene sentido ante quien quiere medirse un vestido.'
  where pregunta_id = '5842b200-1a54-4fa7-986b-af3be4b243c1';
update public.preguntas_clave set explicacion = 'Antes de aceptar el favor, quien responde pregunta cuánto tiempo le va a tomar: es una respuesta que sigue la conversación. Mandarlo a practicar no ayuda, y «no importa» respondería a una disculpa.'
  where pregunta_id = '28b08cbc-90d9-442b-ac65-ad6c837c5c99';
update public.preguntas_clave set explicacion = 'Ante la queja de aburrimiento, la respuesta propone otra cosa que hacer. Pedirle que no cambie nada va en contra de la queja, y buscar algo supone un objeto perdido que nadie mencionó.'
  where pregunta_id = 'e90a55f2-1a79-4ca2-a1ce-36a478753c86';

-- ── 2 · soc-16: 676d7044… → 7b0d2e69… ──
update public.preguntas set hash_norm = null
  where id = '676d7044-f9a9-4609-86f0-4a7e8640be0a';

insert into public.preguntas
  (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip,
   estado, clave_origen, hash_norm, creado_en)
select '7b0d2e69-06bd-4e13-87ed-4846e7545699', materia, tema_id, lote_id, contexto_id, comp, enunciado,
       opciones, tip, estado, clave_origen, '56275d943ebe2b8f83237928399d4d71', creado_en
  from public.preguntas where id = '676d7044-f9a9-4609-86f0-4a7e8640be0a';

insert into public.preguntas_clave (pregunta_id, correcta, explicacion, revisada_por, revisada_en)
select '7b0d2e69-06bd-4e13-87ed-4846e7545699', correcta, explicacion, revisada_por, revisada_en
  from public.preguntas_clave where pregunta_id = '676d7044-f9a9-4609-86f0-4a7e8640be0a';

update public.cuestionario_preguntas set pregunta_id = '7b0d2e69-06bd-4e13-87ed-4846e7545699'
  where pregunta_id = '676d7044-f9a9-4609-86f0-4a7e8640be0a';
update public.respuestas set pregunta_id = '7b0d2e69-06bd-4e13-87ed-4846e7545699'
  where pregunta_id = '676d7044-f9a9-4609-86f0-4a7e8640be0a';
update public.repasos set pregunta_id = '7b0d2e69-06bd-4e13-87ed-4846e7545699'
  where pregunta_id = '676d7044-f9a9-4609-86f0-4a7e8640be0a';

delete from public.preguntas_clave where pregunta_id = '676d7044-f9a9-4609-86f0-4a7e8640be0a';
delete from public.preguntas       where id          = '676d7044-f9a9-4609-86f0-4a7e8640be0a';

