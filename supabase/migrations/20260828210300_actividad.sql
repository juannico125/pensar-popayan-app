-- 004 · Actividad: sesiones, respuestas (append-only), repasos

create table public.sesiones (
  id              uuid primary key default gen_random_uuid(),
  perfil_id       uuid not null references public.perfiles(id) on delete cascade,
  tipo            public.tipo_sesion not null,
  cuestionario_id uuid references public.cuestionarios(id),
  iniciada_en     timestamptz not null default now(),
  finalizada_en   timestamptz,
  check ((tipo = 'cuestionario' and cuestionario_id is not null)
      or (tipo = 'repaso'       and cuestionario_id is null))
);
create index on public.sesiones (perfil_id, iniciada_en desc);
create index on public.sesiones (cuestionario_id) where finalizada_en is not null;

-- Log append-only. Nunca se actualiza: racha, precisión, XP, progreso y
-- detección de temas débiles se derivan de aquí. Mismo diseño que S.answered.
create table public.respuestas (
  id            bigint generated always as identity primary key,
  perfil_id     uuid not null references public.perfiles(id) on delete cascade,
  sesion_id     uuid not null references public.sesiones(id) on delete cascade,
  pregunta_id   uuid not null references public.preguntas(id),
  -- Índice CANÓNICO, no el que vio el estudiante: el barajado es por persona
  -- y los datos deben seguir siendo comparables entre compañeros.
  opcion        smallint not null check (opcion >= 0 and opcion <= 3),
  correcta      boolean not null,
  ms            integer not null check (ms between 250 and 1800000),
  respondida_en timestamptz not null default now(),
  unique (sesion_id, pregunta_id)
);
create index on public.respuestas (perfil_id, respondida_en desc);
create index on public.respuestas (pregunta_id);

-- Programador de repetición espaciada: 1-3-7-15-30-90 días.
create table public.repasos (
  perfil_id      uuid not null references public.perfiles(id) on delete cascade,
  pregunta_id    uuid not null references public.preguntas(id),
  fallos         smallint not null default 0,
  reintentos     smallint not null default 0,
  paso           smallint not null default 0 check (paso between 0 and 6),
  estado         public.estado_repaso not null default 'pendiente',
  proxima_en     timestamptz not null default now(),
  actualizado_en timestamptz not null default now(),
  primary key (perfil_id, pregunta_id)
);
create index on public.repasos (perfil_id, proxima_en) where estado = 'pendiente';
