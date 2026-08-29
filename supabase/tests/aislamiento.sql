-- Prueba de aislamiento entre estudiantes
--
-- "Autenticarse como el estudiante A, pedir los datos del estudiante B,
--  verificar que devuelve cero filas. Sin esa prueba el aislamiento es una
--  promesa, no un control."  — docs/superpowers/specs/2026-08-28-plataforma-pensar-design.md §6
--
-- Cómo correrla: cada bloque separado por «-- ▸» va en su propia ejecución,
-- porque varios deben FALLAR y el error aborta la transacción. Los bloques
-- marcados DEBE FALLAR pasan la prueba cuando lanzan el error indicado.
--
-- Correr solo contra el proyecto de DESARROLLO. Al final limpia lo que creó.

-- ▸ 1. Fixtures (como service_role)
insert into auth.users (id, instance_id, aud, role, email, encrypted_password, email_confirmed_at, created_at, updated_at)
values
 ('11111111-1111-4111-8111-111111111111','00000000-0000-0000-0000-000000000000','authenticated','authenticated','a@prueba.local','x',now(),now(),now()),
 ('22222222-2222-4222-8222-222222222222','00000000-0000-0000-0000-000000000000','authenticated','authenticated','b@prueba.local','x',now(),now(),now()),
 ('33333333-3333-4333-8333-333333333333','00000000-0000-0000-0000-000000000000','authenticated','authenticated','adm@prueba.local','x',now(),now(),now());

insert into public.perfiles (id, rol, nombre, codigo, jornada, cohorte) values
 ('11111111-1111-4111-8111-111111111111','estudiante','Estudiante A','A-001','sabatino','2026'),
 ('22222222-2222-4222-8222-222222222222','estudiante','Estudiante B','B-001','intensivo','2026'),
 ('33333333-3333-4333-8333-333333333333','admin','Coordinación','ADM-1',null,null);

insert into public.contextos (id, tipo, etiqueta, clase, contenido)
values ('44444444-4444-4444-8444-444444444444','pasaje','TEXTO · Prueba','ctx-pasaje',
        '<p>Pasaje de prueba para verificar el aislamiento.</p>');

insert into public.preguntas (id, materia, tema_id, lote_id, contexto_id, comp, enunciado, opciones, tip, estado, clave_origen)
select '55555555-5555-4555-8555-555555555551','lc',
       (select id from public.temas where materia='lc' and codigo='inferencia'),
       (select id from public.lotes where codigo='2026-B'),
       '44444444-4444-4444-8444-444444444444','Inferencia',
       'De la lectura del pasaje se puede inferir que',
       array['la primera idea','la segunda idea','la tercera idea','la cuarta idea'],
       'Fíjate en el cierre del pasaje.','publicada','cuadernillo';

insert into public.preguntas_clave (pregunta_id, correcta, explicacion)
values ('55555555-5555-4555-8555-555555555551', 1,
        'El cierre del pasaje sostiene esa idea; las demás no aparecen en el texto.');

insert into public.cuestionarios (id, materia, slug, seccion, titulo, tipo, orden, lote_id, publicado)
select '66666666-6666-4666-8666-666666666661','lc','lc-1','Comprensión e interpretación','Prueba de aislamiento','Pasaje',1,
       (select id from public.lotes where codigo='2026-B'), true
union all
select '66666666-6666-4666-8666-666666666662','lc','lc-2','Comprensión e interpretación','Segundo cuestionario','Pasaje',2,
       (select id from public.lotes where codigo='2026-B'), true;

insert into public.cuestionario_preguntas (cuestionario_id, pregunta_id, orden)
values ('66666666-6666-4666-8666-666666666661','55555555-5555-4555-8555-555555555551',1);

-- ▸ 2. El estudiante A hace un cuestionario. Todo debe funcionar.
set local role authenticated;
select set_config('request.jwt.claims','{"sub":"11111111-1111-4111-8111-111111111111","role":"authenticated"}', true);

create temp table t_ses as
  select public.iniciar_sesion('cuestionario','66666666-6666-4666-8666-666666666661') as id;
create temp table t_res as
  select * from public.responder((select id from t_ses),'55555555-5555-4555-8555-555555555551', 1::smallint, 4200);

select 'A: barajado' as prueba, public.barajado('55555555-5555-4555-8555-555555555551')::text as resultado
union all select 'A: veredicto',        (select correcta::text || ' / clave=' || indice_correcto::text from t_res)
union all select 'A: explicación',      (select left(explicacion, 34) from t_res)
union all select 'A: respuestas (1)',   (select count(*)::text from public.respuestas)
union all select 'A: perfiles (1)',     (select count(*)::text from public.perfiles)
union all select 'A: racha (1)',        public.racha()::text
union all select 'A: xp (10)',          (select coalesce(max(xp)::text,'-') from public.v_resumen_estudiante);

-- ▸ 3. El estudiante B no ve NADA de A.
set local role authenticated;
select set_config('request.jwt.claims','{"sub":"22222222-2222-4222-8222-222222222222","role":"authenticated"}', true);

select 'B: perfiles (1, el suyo)' as prueba, (select count(*)::text from public.perfiles) as resultado
union all select 'B: respuestas de A (0)', (select count(*)::text from public.respuestas)
union all select 'B: sesiones de A (0)',   (select count(*)::text from public.sesiones)
union all select 'B: repasos de A (0)',    (select count(*)::text from public.repasos)
union all select 'B: resumen (1)',         (select count(*)::text from public.v_resumen_estudiante)
union all select 'B: barajado propio',     public.barajado('55555555-5555-4555-8555-555555555551')::text
union all select 'B: racha(A) = 0',        public.racha('11111111-1111-4111-8111-111111111111')::text
union all select 'B: clave_de (0 filas)',  (select count(*)::text from public.clave_de('55555555-5555-4555-8555-555555555551'));

-- ▸ 4. DEBE FALLAR · el estudiante no puede leer el solucionario
--    esperado: 42501 permission denied for table preguntas_clave
set local role authenticated;
select set_config('request.jwt.claims','{"sub":"22222222-2222-4222-8222-222222222222","role":"authenticated"}', true);
select * from public.preguntas_clave;

-- ▸ 5. DEBE FALLAR · el estudiante no se asciende a admin
--    esperado: P0001 solo el rol administrativo modifica rol, estado o matrícula
set local role authenticated;
select set_config('request.jwt.claims','{"sub":"22222222-2222-4222-8222-222222222222","role":"authenticated"}', true);
update public.perfiles set rol = 'admin' where id = '22222222-2222-4222-8222-222222222222';

-- ▸ 6. DEBE FALLAR · nadie escribe respuestas a mano (log append-only)
--    esperado: 42501 permission denied for table respuestas
set local role authenticated;
select set_config('request.jwt.claims','{"sub":"22222222-2222-4222-8222-222222222222","role":"authenticated"}', true);
insert into public.respuestas (perfil_id, sesion_id, pregunta_id, opcion, correcta, ms, materia, tema_id)
values ('22222222-2222-4222-8222-222222222222', gen_random_uuid(), '55555555-5555-4555-8555-555555555551', 1, true, 1000, 'lc',
        (select id from public.temas where materia='lc' and codigo='inferencia'));

-- ▸ 7. DEBE FALLAR · B no responde dentro de la sesión de A
--    esperado: 42501 sesión ajena o inexistente
set local role authenticated;
select set_config('request.jwt.claims','{"sub":"22222222-2222-4222-8222-222222222222","role":"authenticated"}', true);
select * from public.responder(
  (select id from public.sesiones where perfil_id = '11111111-1111-4111-8111-111111111111' limit 1),
  '55555555-5555-4555-8555-555555555551', 1::smallint, 3000);

-- ▸ 8. DEBE FALLAR · el desbloqueo secuencial es del servidor
--    esperado: 42501 cuestionario bloqueado: completa el anterior
set local role authenticated;
select set_config('request.jwt.claims','{"sub":"22222222-2222-4222-8222-222222222222","role":"authenticated"}', true);
select public.iniciar_sesion('cuestionario','66666666-6666-4666-8666-666666666662');

-- ▸ 9. El rol administrativo sí lo ve todo.
set local role authenticated;
select set_config('request.jwt.claims','{"sub":"33333333-3333-4333-8333-333333333333","role":"authenticated"}', true);

select 'Admin: perfiles (3)' as prueba, (select count(*)::text from public.perfiles) as resultado
union all select 'Admin: respuestas (1)', (select count(*)::text from public.respuestas)
union all select 'Admin: resumen (3)',    (select count(*)::text from public.v_resumen_estudiante)
union all select 'Admin: clave_de',       (select correcta::text || ' · ' || origen::text
                                             from public.clave_de('55555555-5555-4555-8555-555555555551'));

-- ▸ 10. DEBE FALLAR · la clave no puede salirse del número de opciones
--     esperado: P0001 clave 3 fuera de rango: la pregunta tiene 3 opciones
insert into public.preguntas (id, materia, tema_id, lote_id, enunciado, opciones, estado, clave_origen)
select '55555555-5555-4555-8555-555555555552','ing',
       (select id from public.temas where materia='ing' and codigo='parte-1-avisos'),
       (select id from public.lotes where codigo='2026-B'),
       'DO NOT FEED THE ANIMALS. Where can you see this sign?',
       array['At the zoo','At the bank','At the airport'],'publicada','modelo';
insert into public.preguntas_clave (pregunta_id, correcta, explicacion)
values ('55555555-5555-4555-8555-555555555552', 3, 'Clave fuera de rango, debe rechazarse.');

-- ▸ 11. DEBE FALLAR · las explicaciones no pueden nombrar letras
--     esperado: 23514 preguntas_clave_explicacion_check
insert into public.preguntas_clave (pregunta_id, correcta, explicacion)
values ('55555555-5555-4555-8555-555555555552', 0,
        'La opción A es la correcta porque los animales están en el zoológico.');

-- ▸ 12. DEBE FALLAR · no entra HTML ejecutable al banco de contextos
--     esperado: 23514 contextos_contenido_check
insert into public.contextos (tipo, contenido)
values ('pasaje', '<p>Hola</p><script>fetch("https://malo.example")</script>');

-- ▸ 13. Limpieza (como service_role)
delete from public.repasos    where perfil_id::text like '11111111%' or perfil_id::text like '22222222%';
delete from public.respuestas where perfil_id::text like '11111111%' or perfil_id::text like '22222222%';
delete from public.sesiones   where perfil_id::text like '11111111%' or perfil_id::text like '22222222%';
delete from public.cuestionario_preguntas where cuestionario_id::text like '66666666%';
delete from public.cuestionarios  where slug in ('lc-1','lc-2');
delete from public.preguntas_clave where pregunta_id::text like '55555555%';
delete from public.preguntas      where id::text like '55555555%';
delete from public.contextos      where id::text like '44444444%';
delete from public.perfiles       where id::text like '11111111%' or id::text like '22222222%' or id::text like '33333333%';
delete from auth.users            where email like '%@prueba.local';
