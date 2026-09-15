begin;
update public.contextos c set contenido=replace(c.contenido,'src="img/figuras/mat/','src="https://raw.githubusercontent.com/juannico125/pensar-popayan-app/92e4e92/img/figuras/mat/')
where c.contenido like '%src="img/figuras/mat/%' and exists(select 1 from public.preguntas p where p.contexto_id=c.id and p.materia='mat');
update public.preguntas p set opciones=(select array_agg(replace(o,'src="img/figuras/mat/','src="https://raw.githubusercontent.com/juannico125/pensar-popayan-app/92e4e92/img/figuras/mat/') order by n) from unnest(p.opciones) with ordinality a(o,n))
where p.materia='mat' and exists(select 1 from unnest(p.opciones) o where o like '%src="img/figuras/mat/%');
commit;
