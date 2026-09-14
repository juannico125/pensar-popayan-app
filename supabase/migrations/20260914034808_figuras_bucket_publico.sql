-- Bucket para las figuras recortadas de los cuadernillos escaneados.
--
-- Lectura pública: un estímulo gráfico es parte del enunciado, y el enunciado
-- ya es público para cualquier perfil activo. No hay nada que proteger aquí:
-- la clave sigue viviendo en preguntas_clave, fuera de todo alcance.
--
-- Escritura solo para el rol administrativo. El navegador de un estudiante no
-- puede subir, reemplazar ni borrar una figura.
--
-- Hoy las tres figuras cargadas se sirven desde el propio repositorio
-- (img/figuras/), que es más rápido para Colombia: el Worker de Cloudflare
-- tiene presencia en Bogotá y este proyecto de Supabase está en us-east-1.
-- El bucket queda listo para cuando el panel gane un botón de subida y los
-- docentes carguen figuras de Biología, Física y Química sin desplegar.

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('figuras', 'figuras', true, 5242880,
        array['image/png','image/jpeg','image/webp','image/svg+xml'])
on conflict (id) do update
  set public = excluded.public,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists figuras_lee on storage.objects;
create policy figuras_lee on storage.objects
  for select using (bucket_id = 'figuras');

drop policy if exists figuras_escribe_admin on storage.objects;
create policy figuras_escribe_admin on storage.objects
  for insert to authenticated
  with check (bucket_id = 'figuras' and public.es_admin());

drop policy if exists figuras_reemplaza_admin on storage.objects;
create policy figuras_reemplaza_admin on storage.objects
  for update to authenticated
  using (bucket_id = 'figuras' and public.es_admin())
  with check (bucket_id = 'figuras' and public.es_admin());

drop policy if exists figuras_borra_admin on storage.objects;
create policy figuras_borra_admin on storage.objects
  for delete to authenticated
  using (bucket_id = 'figuras' and public.es_admin());
