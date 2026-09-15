-- Las figuras de matemáticas habían quedado apuntando a raw.githubusercontent,
-- fijadas a commits. Eso obligaba a que el repositorio siguiera siendo público
-- —y en el repositorio están los seeds, con la clave de respuestas de cada
-- pregunta— además de servir las imágenes desde fuera del PoP de Bogotá.
-- Aquí vuelven a `img/figuras/`, que es lo que sirve el Worker desde el mismo
-- origen, tal como las tres figuras de Sociales.

-- El id de un contexto se deriva de su contenido, así que reescribir el `src`
-- cambia el id. Esta función reproduce en Postgres la misma derivación que
-- `scripts/generar-carga-banco.mjs` hace en JS: sha256 sobre las partes unidas
-- por un byte NUL, con el formato de UUID v4. Sirve, además, para detectar en
-- una sola consulta las filas cuyo id ya no corresponde a su texto, que es el
-- problema de deriva anotado en CLAUDE.md.
create or replace function public.uuid_de_contexto(p_contenido text)
returns uuid language sql immutable as $$
  select (substr(h,1,8) || '-' || substr(h,9,4) || '-4' || substr(h,14,3) || '-' ||
          to_hex(((('x' || substr(h,17,1))::bit(4)::int) & 3) | 8) || substr(h,18,3) ||
          '-' || substr(h,21,12))::uuid
  from (select encode(extensions.digest(
           convert_to('contexto','UTF8') || '\x00'::bytea || convert_to(p_contenido,'UTF8'),
           'sha256'), 'hex') as h) t;
$$;

comment on function public.uuid_de_contexto(text) is
  'Deriva el id de un contexto a partir de su contenido, igual que el generador en JS. Una fila donde id <> uuid_de_contexto(contenido) es una fila cuyo texto se editó después de cargarla.';

-- 1. Los contextos cuyo id NO deriva de su texto llevan `identityContext`:
--    conservan el id a propósito, solo cambia lo que se muestra.
update public.contextos set contenido = regexp_replace(contenido,
    'https://raw\.githubusercontent\.com/juannico125/pensar-popayan-app/[0-9a-f]{7,40}/img/figuras/',
    'img/figuras/', 'g')
where contenido like '%raw.githubusercontent.com/juannico125/pensar-popayan-app/%'
  and id <> public.uuid_de_contexto(contenido);

-- 2. Los demás cambian de id: se inserta la fila nueva antes de mover nada,
--    porque `preguntas.contexto_id` es una clave foránea.
insert into public.contextos (id, tipo, etiqueta, clase, contenido)
select public.uuid_de_contexto(n.nuevo), c.tipo, c.etiqueta, c.clase, n.nuevo
from public.contextos c
cross join lateral (select regexp_replace(c.contenido,
    'https://raw\.githubusercontent\.com/juannico125/pensar-popayan-app/[0-9a-f]{7,40}/img/figuras/',
    'img/figuras/', 'g') as nuevo) n
where c.contenido like '%raw.githubusercontent.com/juannico125/pensar-popayan-app/%'
  and c.id = public.uuid_de_contexto(c.contenido);

-- 3. Las preguntas pasan a colgar del contexto nuevo. El id de la pregunta no
--    cambia: se deriva del contexto SIN etiquetas, y el `src` va dentro de una.
--    Por eso ninguna respuesta ni repaso de un estudiante se ve afectado.
update public.preguntas p set contexto_id = public.uuid_de_contexto(n.nuevo)
from public.contextos c
cross join lateral (select regexp_replace(c.contenido,
    'https://raw\.githubusercontent\.com/juannico125/pensar-popayan-app/[0-9a-f]{7,40}/img/figuras/',
    'img/figuras/', 'g') as nuevo) n
where p.contexto_id = c.id
  and c.contenido like '%raw.githubusercontent.com/juannico125/pensar-popayan-app/%'
  and c.id = public.uuid_de_contexto(c.contenido);

-- 4. Las opciones que son gráficas llevan su propio <img>.
update public.preguntas set opciones = (
    select array_agg(regexp_replace(o,
      'https://raw\.githubusercontent\.com/juannico125/pensar-popayan-app/[0-9a-f]{7,40}/img/figuras/',
      'img/figuras/', 'g') order by i)
    from unnest(opciones) with ordinality as t(o, i))
where exists (select 1 from unnest(opciones) o
              where o like '%raw.githubusercontent.com/juannico125/pensar-popayan-app/%');

-- 5. Ya nadie apunta a las viejas.
delete from public.contextos c
where c.contenido like '%raw.githubusercontent.com/juannico125/pensar-popayan-app/%'
  and not exists (select 1 from public.preguntas p where p.contexto_id = c.id);
