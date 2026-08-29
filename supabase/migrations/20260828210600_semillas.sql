-- 008 · Semillas: las 7 torres, el vocabulario cerrado de temas y el lote vigente
-- Esto no es contenido: es la estructura fija contra la que la extracción etiqueta.

insert into public.materias (key, sigla, nombre, area, docente, npreg, orden) values
  ('lc',  'LC', 'Lectura Crítica',       'lectura_critica',     'Diana Ordóñez',   36, 1),
  ('mat', 'MT', 'Matemáticas',           'matematicas',         'Carlos Muñoz',    36, 2),
  ('soc', 'SC', 'Sociales y Ciudadanas', 'sociales_ciudadanas', 'Hernán Chocué',   36, 3),
  ('ing', 'IN', 'Inglés',                'ingles',              'Paola Astaiza',   40, 4),
  ('bio', 'BI', 'Biología',              'ciencias_naturales',  'Lucía Guampe',    20, 5),
  ('fis', 'FI', 'Física',                'ciencias_naturales',  'Andrés Calambás', 20, 6),
  ('qui', 'QU', 'Química',               'ciencias_naturales',  'Marcela Velasco', 20, 7)
on conflict (key) do nothing;

-- Vocabulario CERRADO de temas. Si la extracción etiqueta libre, "Inferencia",
-- "Inferencia textual" y "Nivel inferencial" se vuelven tres temas y el repaso
-- se rompe en silencio. La extracción elige de esta lista.
insert into public.temas (materia, codigo, nombre, orden) values
  ('lc',  'proposito-del-texto',      'Propósito del texto',                 1),
  ('lc',  'funcion-de-expresiones',   'Función de expresiones',              2),
  ('lc',  'inferencia',               'Inferencia',                          3),
  ('lc',  'tesis-y-argumentos',       'Tesis y argumentos',                  4),
  ('lc',  'punto-de-vista',           'Punto de vista del autor',            5),
  ('lc',  'estructura-textual',       'Estructura y articulación del texto',  6),
  ('lc',  'evaluacion-critica',       'Evaluación crítica',                  7),
  ('lc',  'textos-discontinuos',      'Textos discontinuos',                 8),

  ('mat', 'lectura-de-graficas',      'Lectura de gráficas',                 1),
  ('mat', 'tablas-y-probabilidad',    'Tablas y probabilidad',               2),
  ('mat', 'estadistica-descriptiva',  'Estadística descriptiva',             3),
  ('mat', 'proporcionalidad',         'Proporcionalidad y porcentajes',      4),
  ('mat', 'ecuaciones-en-contexto',   'Ecuaciones en contexto',              5),
  ('mat', 'funciones',                'Funciones y variación',               6),
  ('mat', 'areas-y-perimetros',       'Áreas y perímetros',                  7),
  ('mat', 'geometria-espacial',       'Geometría espacial',                  8),

  ('soc', 'constitucion-y-derechos',  'Constitución y derechos',             1),
  ('soc', 'participacion-ciudadana',  'Mecanismos de participación',         2),
  ('soc', 'ramas-del-poder',          'Organización del Estado',             3),
  ('soc', 'conflicto-y-memoria',      'Conflicto armado y memoria',          4),
  ('soc', 'geografia-y-territorio',   'Geografía y territorio',              5),
  ('soc', 'economia-y-sociedad',      'Economía y sociedad',                 6),
  ('soc', 'historia-de-colombia',     'Historia de Colombia',                7),
  ('soc', 'perspectivas-y-fuentes',   'Interpretación de perspectivas',      8),

  -- Las siete partes del examen ICFES de inglés: el encabezado del cuadernillo
  -- ya las trae ("PARTE 1"), así que la extracción no tiene que adivinar.
  ('ing', 'parte-1-avisos',           'Parte 1 · Avisos y letreros',         1),
  ('ing', 'parte-2-vocabulario',      'Parte 2 · Vocabulario en contexto',   2),
  ('ing', 'parte-3-dialogos',         'Parte 3 · Diálogos cortos',           3),
  ('ing', 'parte-4-textos-cortos',    'Parte 4 · Textos cortos',             4),
  ('ing', 'parte-5-completar',        'Parte 5 · Completar texto',           5),
  ('ing', 'parte-6-lectura',          'Parte 6 · Comprensión de lectura',    6),
  ('ing', 'parte-7-gramatica',        'Parte 7 · Uso del idioma',            7),

  ('bio', 'celula',                   'Célula y sus procesos',               1),
  ('bio', 'genetica-y-herencia',      'Genética y herencia',                 2),
  ('bio', 'ecosistemas',              'Ecosistemas y ciclos',                3),
  ('bio', 'evolucion',                'Evolución y biodiversidad',           4),
  ('bio', 'cuerpo-humano',            'Sistemas del cuerpo humano',          5),

  ('fis', 'cinematica',               'Cinemática',                          1),
  ('fis', 'dinamica',                 'Dinámica y leyes de Newton',          2),
  ('fis', 'energia-y-trabajo',        'Energía y trabajo',                   3),
  ('fis', 'ondas-y-sonido',           'Ondas y sonido',                      4),
  ('fis', 'electricidad-y-magnetismo','Electricidad y magnetismo',           5),
  ('fis', 'termodinamica',            'Termodinámica',                       6),

  ('qui', 'estructura-de-la-materia', 'Estructura de la materia',            1),
  ('qui', 'tabla-periodica',          'Tabla periódica',                     2),
  ('qui', 'enlace-quimico',           'Enlace químico',                      3),
  ('qui', 'reacciones-estequiometria','Reacciones y estequiometría',         4),
  ('qui', 'soluciones',               'Soluciones y concentración',          5),
  ('qui', 'acidos-y-bases',           'Ácidos y bases',                      6),
  ('qui', 'quimica-organica',         'Química orgánica',                    7)
on conflict (materia, codigo) do nothing;

-- Lote vigente del semestre. Rotar NO borra nada: se apaga este y se prende otro.
insert into public.lotes (codigo, etiqueta, vigencia_desde, vigencia_hasta, activo)
values ('2026-B', 'jul – dic 2026', '2026-07-01', '2026-12-31', true)
on conflict (codigo) do nothing;
