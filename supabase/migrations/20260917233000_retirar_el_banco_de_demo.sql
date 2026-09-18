-- Retirar el banco de demo del prototipo
--
-- `banco-demo.sql` / `content/banco-2026b.js` traían veinte preguntas que
-- escribí yo para cerrar la propuesta, con textos inventados: diez de Lectura
-- Crítica («La Semana Santa de Popayán», «El páramo y el agua», «¿Leemos menos
-- que antes?», «La ciudad y la bicicleta») y diez de Matemáticas. Sirvieron
-- para la demo, pero un estudiante las jugaba creyendo que eran ICFES.
--
-- Ahora que Lectura Crítica tiene contenido real —36 preguntas del Simulacro
-- 12— sobran, y se van. Pero no de la misma manera, porque no están en la
-- misma situación:
--
--   · Las diez de Lectura Crítica no las respondió nadie: cero filas en
--     `respuestas` y cero en `repasos`. Se borran de raíz, con sus contextos.
--
--   · Las diez de Matemáticas sí: 12 respuestas y 3 repasos de estudiantes
--     reales. `respuestas` es un registro que no se actualiza nunca y del que
--     se derivan racha, precisión, XP y tiempo estudiado; borrar esas filas
--     alteraría el historial de quienes las contestaron, y además contradice
--     el compromiso con el cliente de no borrar preguntas al rotar el banco
--     (docs/guion-presentacion-2026-07-17.md). Se retiran, que es exactamente
--     para lo que existe el estado `retirada`, y sus cinco cuestionarios se
--     despublican para que salgan de la ruta.
--
-- Despublicar los cuestionarios tiene un efecto secundario deseable:
-- `cuestionario_desbloqueado()` solo mira los previos con `publicado`, así que
-- mat-1 a mat-5 dejan de ser requisito para llegar al contenido de verdad, que
-- empieza en mat-6.

-- ── Lectura Crítica: borrado completo ──────────────────────────────────────
create temporary table demo_lc as
  select p.id, p.contexto_id
    from public.preguntas p
   where p.materia = 'lc' and p.clave_origen <> 'modelo';

delete from public.cuestionario_preguntas where pregunta_id in (select id from demo_lc);
delete from public.cuestionarios where materia = 'lc' and slug in ('lc-1','lc-2','lc-3','lc-4');
delete from public.preguntas_clave where pregunta_id in (select id from demo_lc);
delete from public.preguntas where id in (select id from demo_lc);
delete from public.contextos c
 where c.id in (select contexto_id from demo_lc)
   and not exists (select 1 from public.preguntas p where p.contexto_id = c.id);

-- ── Matemáticas: retiro conservando el historial ───────────────────────────
update public.preguntas set estado = 'retirada'
 where materia = 'mat' and clave_origen <> 'modelo';

update public.cuestionarios set publicado = false
 where materia = 'mat' and slug in ('mat-1','mat-2','mat-3','mat-4','mat-5');
