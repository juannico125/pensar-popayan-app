-- Generado por scripts/generar-carga-banco.mjs · NO editar a mano.
-- Fuente: ../tmp/matematicas/deadpool14-borrador.js · clave_origen = modelo

insert into public.contextos (id, tipo, etiqueta, clase, contenido) values ('ba74beb0-10fb-4a42-98c3-b9b2df10fce7', 'situacion', 'DEADPOOL · Pregunta 14', 'ctx-sit', '<p>Un grupo de ingenieros quiere calcular la altura h de un edificio. El original anuncia dos procedimientos, pero solo muestra «Procedimiento 1: tan 60 = h» y no contiene la figura ni el segundo procedimiento.</p><figure class="ctx-fig"><img src="https://raw.githubusercontent.com/juannico125/pensar-popayan-app/a6318851bb2ba6c9af60974280bd525d1b66e6e9/img/figuras/mat/de1-q14-fuente-incompleta.webp" alt="Captura del ejercicio original: falta la figura anunciada y solo aparece el primer procedimiento." loading="lazy"></figure>');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen, hash_norm, dificultad)
select 'c3af7321-e949-419a-926a-f54f9c213b4b', 'mat',
  (select id from public.temas where materia = 'mat' and codigo = 'trigonometria'),
  (select id from public.lotes where codigo = '2026-B'),
  'ba74beb0-10fb-4a42-98c3-b9b2df10fce7', 'Trigonometría',
  'Respecto a los dos procedimientos, ¿qué afirmación es verdadera?',
  array['Ambos procedimientos son correctos.', 'Ambos procedimientos son incorrectos.', 'Solo el procedimiento 2 es correcto.', 'Solo el procedimiento 1 es correcto.'],
  'Revisión docente: recuperar la figura y el segundo procedimiento del original.', 'borrador', 'modelo', '869f9d979131767f290c06c380638a6d', 'alta';

