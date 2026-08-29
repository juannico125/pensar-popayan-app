-- 001 · Tipos base y utilidades
-- Plataforma Pensar Popayán. Ver docs/superpowers/specs/2026-08-28-plataforma-pensar-design.md

-- Nadie anónimo toca nada. La app no tiene superficie pública.
revoke usage on schema public from anon;
revoke all on schema public from public;
grant usage on schema public to authenticated, service_role;

create type public.rol_usuario   as enum ('estudiante', 'admin');
create type public.jornada_tipo  as enum ('sabatino', 'intensivo');
create type public.area_icfes    as enum ('lectura_critica', 'matematicas', 'sociales_ciudadanas', 'ciencias_naturales', 'ingles');
create type public.clave_origen  as enum ('cuadernillo', 'modelo');   -- compromiso 4: la IA extrae, no inventa
create type public.estado_pregunta as enum ('borrador', 'revisada', 'publicada', 'retirada');
create type public.tipo_sesion   as enum ('cuestionario', 'repaso');
create type public.tipo_contexto as enum ('pasaje', 'figura', 'tabla', 'situacion');
create type public.estado_repaso as enum ('pendiente', 'dominada');

-- Marca de tiempo de modificación.
create or replace function public.touch_actualizado()
returns trigger language plpgsql security invoker set search_path = '' as $$
begin
  new.actualizado_en := now();
  return new;
end $$;

-- Nada de contenido con scripts: el HTML de contextos se renderiza sin escapar.
create or replace function public.sin_html_ejecutable(t text)
returns boolean language sql immutable set search_path = '' as $$
  select t is null or t !~* '<\s*(script|iframe|object|embed)\M|\yon[a-z]+\s*=|javascript:';
$$;
