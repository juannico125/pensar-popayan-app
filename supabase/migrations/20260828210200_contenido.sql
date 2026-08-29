-- 003 · Contenido: preguntas, clave separada, cuestionarios

create table public.preguntas (
  id           uuid primary key default gen_random_uuid(),
  materia      text not null references public.materias(key) on update cascade,
  tema_id      uuid not null references public.temas(id),
  lote_id      uuid not null references public.lotes(id),
  contexto_id  uuid references public.contextos(id),
  comp         text,                                   -- competencia, solo para mostrar
  enunciado    text not null check (length(btrim(enunciado)) > 5
                                    and public.sin_html_ejecutable(enunciado)),
  -- El inglés del ICFES parte 1 usa legítimamente A/B/C: 3 o 4 opciones.
  opciones     text[] not null check (cardinality(opciones) between 3 and 4
                                      and array_position(opciones, null) is null),
  tip          text check (public.sin_html_ejecutable(tip)),
  estado       public.estado_pregunta not null default 'borrador',
  clave_origen public.clave_origen not null,           -- dirige la revisión humana
  hash_norm    text,                                   -- deduplicación del pipeline
  creado_en      timestamptz not null default now(),
  actualizado_en timestamptz not null default now()
);
create index on public.preguntas (materia, estado);
create index on public.preguntas (tema_id);
create index on public.preguntas (lote_id);
create index on public.preguntas (contexto_id);
create unique index preguntas_hash_por_materia on public.preguntas (materia, hash_norm)
  where hash_norm is not null;

-- La clave vive en su propia tabla. RLS la niega a TODO el mundo: solo la leen
-- funciones SECURITY DEFINER. Sin esto, cualquier estudiante abre la consola
-- y se lleva el solucionario completo.
create table public.preguntas_clave (
  pregunta_id  uuid primary key references public.preguntas(id) on delete cascade,
  correcta     smallint not null check (correcta >= 0),
  -- El barajado de opciones es por estudiante: una explicación que diga
  -- "la opción B" es falsa para la mitad del salón.
  explicacion  text not null check (
                 length(btrim(explicacion)) > 10
                 and explicacion !~* '\m(opci[oó]n|literal|alternativa|respuesta)\s+["“'']?[abcd]\M'),
  revisada_por uuid references auth.users(id),
  revisada_en  timestamptz
);
comment on table public.preguntas_clave is 'Sin políticas RLS a propósito: negación total. Solo public.responder() la lee.';

-- La clave debe caber en el número real de opciones de su pregunta.
create or replace function public.valida_clave()
returns trigger language plpgsql security invoker set search_path = '' as $$
declare n int;
begin
  select cardinality(p.opciones) into n from public.preguntas p where p.id = new.pregunta_id;
  if new.correcta >= n then
    raise exception 'clave % fuera de rango: la pregunta tiene % opciones', new.correcta, n;
  end if;
  return new;
end $$;
create trigger preguntas_clave_valida before insert or update on public.preguntas_clave
  for each row execute function public.valida_clave();

-- La ruta por materia: secciones por área, desbloqueo secuencial.
create table public.cuestionarios (
  id        uuid primary key default gen_random_uuid(),
  materia   text not null references public.materias(key) on update cascade,
  slug      text not null unique check (slug ~ '^[a-z]{2,4}-[0-9]{1,3}$'),
  seccion   text not null,
  titulo    text not null,
  tipo      text,
  orden     smallint not null,
  lote_id   uuid not null references public.lotes(id),
  publicado boolean not null default false,
  unique (materia, orden)
);
create index on public.cuestionarios (materia, orden);

create table public.cuestionario_preguntas (
  cuestionario_id uuid not null references public.cuestionarios(id) on delete cascade,
  pregunta_id     uuid not null references public.preguntas(id),
  orden           smallint not null,
  primary key (cuestionario_id, pregunta_id),
  unique (cuestionario_id, orden)
);
create index on public.cuestionario_preguntas (pregunta_id);

create trigger preguntas_touch before update on public.preguntas
  for each row execute function public.touch_actualizado();
