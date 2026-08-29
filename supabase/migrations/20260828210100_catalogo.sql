-- 002 · Catálogo: perfiles, materias, temas, lotes, contextos

-- Datos personales al mínimo (Ley 1581): nombre, código, jornada. Nada más.
create table public.perfiles (
  id             uuid primary key references auth.users(id) on delete cascade,
  rol            public.rol_usuario not null default 'estudiante',
  nombre         text not null check (length(btrim(nombre)) between 2 and 120),
  codigo         text unique check (codigo ~ '^[A-Za-z0-9-]{3,20}$'),
  jornada        public.jornada_tipo,
  cohorte        text check (cohorte ~ '^[0-9]{4}(-[AB])?$'),
  activo         boolean not null default true,
  anonimizado_en timestamptz,
  creado_en      timestamptz not null default now(),
  actualizado_en timestamptz not null default now()
);
comment on table public.perfiles is 'Un perfil por usuario de auth. El rol se lee de aquí, nunca se infiere del correo.';

create index on public.perfiles (rol) where activo;
create index on public.perfiles (cohorte);

-- Las 7 torres. La clave natural coincide con la del frontend (js/data.js).
create table public.materias (
  key      text primary key check (key ~ '^[a-z]{2,4}$'),
  sigla    text not null,
  nombre   text not null,
  area     public.area_icfes not null,   -- Bio + Fís + Quí agregan en ciencias_naturales
  docente  text,
  npreg    smallint not null check (npreg > 0),
  orden    smallint not null unique,
  activa   boolean not null default true
);

-- Vocabulario CERRADO. La extracción elige de esta lista, no inventa:
-- si no, "Inferencia" e "Inferencia textual" rompen el repaso en silencio.
create table public.temas (
  id      uuid primary key default gen_random_uuid(),
  materia text not null references public.materias(key) on update cascade,
  codigo  text not null check (codigo ~ '^[a-z0-9-]{3,40}$'),
  nombre  text not null,
  orden   smallint not null,
  unique (materia, codigo),
  unique (materia, orden)
);

-- Nada se borra en la rotación: el lote es un filtro, no una purga.
create table public.lotes (
  id              uuid primary key default gen_random_uuid(),
  codigo          text not null unique check (codigo ~ '^[0-9]{4}-[AB]$'),
  etiqueta        text not null,
  vigencia_desde  date not null,
  vigencia_hasta  date not null,
  activo          boolean not null default false,
  creado_en       timestamptz not null default now(),
  check (vigencia_hasta > vigencia_desde)
);
create unique index lotes_un_solo_activo on public.lotes ((activo)) where activo;

-- Pasajes, figuras SVG y tablas compartidos entre varias preguntas.
create table public.contextos (
  id        uuid primary key default gen_random_uuid(),
  tipo      public.tipo_contexto not null,
  etiqueta  text,                       -- "TEXTO · Responda las preguntas 1 a 3"
  clase     text check (clase ~ '^[a-z0-9 _-]{0,60}$'),
  contenido text not null check (public.sin_html_ejecutable(contenido)),
  creado_en timestamptz not null default now()
);

create trigger perfiles_touch before update on public.perfiles
  for each row execute function public.touch_actualizado();
