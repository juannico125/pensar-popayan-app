-- 010 · Dos temas más en Lectura Crítica
-- Aparecieron al mapear el banco existente contra el vocabulario cerrado: las
-- competencias «Información literal» y «Semántica y léxico» no tenían dónde caer.
-- Así se amplía el vocabulario: por migración y revisado, nunca desde la extracción.

insert into public.temas (materia, codigo, nombre, orden) values
  ('lc', 'informacion-literal', 'Información literal',  9),
  ('lc', 'semantica-y-lexico',  'Semántica y léxico',  10)
on conflict (materia, codigo) do nothing;
