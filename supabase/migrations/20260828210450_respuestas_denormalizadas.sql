-- 006 · Materia y tema copiados en la respuesta
-- Las estadísticas no pueden depender de leer `preguntas`: cuando el lote rota,
-- el estudiante pierde permiso de lectura sobre las preguntas viejas y su
-- histórico desaparecería de la vista. El log guarda su propia clasificación.

alter table public.respuestas
  add column materia text references public.materias(key) on update cascade,
  add column tema_id uuid references public.temas(id);

update public.respuestas r
   set materia = p.materia, tema_id = p.tema_id
  from public.preguntas p where p.id = r.pregunta_id;

alter table public.respuestas
  alter column materia set not null,
  alter column tema_id set not null;

create index on public.respuestas (perfil_id, materia);
create index on public.respuestas (perfil_id, tema_id);
