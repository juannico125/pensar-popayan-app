# Carga y revisión de scanner.zip

## Inventario comprobado

El ZIP de Descargas contiene **19 PDFs y 302 páginas**, no 262. El recuento se hizo abriendo cada archivo con PDFium. No debe confundirse un reescaneo con un documento completamente cargado.

| PDF | Páginas | Identificación inicial |
|---|---:|---|
| content (4).pdf | 25 | Simulacro 12, Donald, sesión 1 |
| content.pdf | 22 | Simulacro 12, Donald, sesión 2 |
| content2.pdf | 24 | Simulacro 13, Mickey, sesión 1 |
| content (1).pdf | 21 | Simulacro 13, Mickey, sesión 2 |
| content (12).pdf | 25 | Simulacro 21, Tintín, sesión 1 |
| content (3).pdf | 20 | Simulacro 21, Tintín, sesión 2 |
| content (5).pdf | 22 | Simulacro 22, Bugs, sesión 1 |
| 2.pdf | 19 | Simulacro 22, Bugs, sesión 2 |
| 3.pdf | 5 | Matemáticas 2, comienza en 22 |
| content (1)_removed_merged (1).pdf | 7 | Matemáticas 1, Deadpool |
| content (11).pdf | 31 | Física, varios formularios; carga previa parcial |
| content (13).pdf | 5 | Biología 1B, comienza en 97 |
| content (14).pdf | 11 | Marcado 2B, comienza con química 95–96 |
| content (2).pdf | 5 | Matemáticas 2, comienza en 41 |
| content (6).pdf | 13 | Química Aladín y material adicional |
| content (7).pdf | 11 | Biología Tintín, marcado 5B Revisado |
| content (8).pdf | 7 | Química Mickey y comienzo de Sociales |
| content (9).pdf | 24 | Sociales Donald, girado |
| content 1.pdf | 5 | Matemáticas 1, Aladín |

## Lotes cerrados en esta revisión

- Química ya existente: 20 publicadas, una en borrador. Véase revisión-quimica-20260918.md.
- LC Simulacro 12: se contrastaron las 36 existentes; 34 publicadas y dos en borrador. Véase revisión-lc-s12-20260918.md.
- LC Simulacro 13: se leyeron los siete pliegos (PDF 14–20); 36 nuevas, 35 publicadas y una en borrador, diez rutas `lc-17` a `lc-26`. La pregunta 71 contiene dos condiciones lógicamente equivalentes y no admite una clave única. Siete recortes conservan los originales. No hubo coincidencias de UUID ni hash con preguntas existentes.

LC S13: las 36 preguntas se recorrieron a 320 px con cuatro opciones, ninguna imagen rota ni desbordamiento de página. Las figuras densas conservan un ancho mínimo con desplazamiento dentro del marco. Se verificaron los siete WebP por SHA en ambos hosts (14 comprobaciones). Huellas remotas iguales a las locales: contextos `697742de1d39071f003007b80aea3af9`, preguntas `de766105b0dde0802774e6f92d3e1f5f`, claves `b189ba0a3f7549d8d4bdf28ee175a75d`.

## Pendiente

Cruce de todas las secciones y cuadernillos restantes con la base; cargas de Biología y resto de Ciencias Naturales y Matemáticas; auditoría global final. Este inventario no declara el ZIP completo ni sustituye la revisión docente de las claves del modelo.

## Lectura Crítica S21 y S22

- S21 Tintín: 36 preguntas contrastadas con `content (12).pdf`, páginas 14–21; 34 publicadas y dos borradores (82, oposición no unívoca; 89, símil sin opción correspondiente). Nueve rutas `lc-27` a `lc-35`. Huellas remotas: contextos `2ae26d4ff7ce0e0390e511d3490674d9`, preguntas `5ee3ab6227a12913d43ef2b447fd10c5`, claves `02e883b350d5ffefc94ea8630ffc5c24`. Figura verificada por SHA en ambos hosts. Recorrido de las 36 preguntas a 320 px sin imágenes rotas ni desbordamiento de página.
- S22 Bugs Bunny: 36 preguntas contrastadas con `content (5).pdf`, páginas 12–18; 35 publicadas y un borrador (75: falta la pregunta tras la cita). Ocho rutas `lc-36` a `lc-43`. Siete recortes del original, verificados visualmente y por SHA en ambos hosts (14 comprobaciones). Recorrido de las 36 preguntas a 320 px: cuatro opciones por pregunta, cero imágenes rotas y cero desbordamientos de página. Huellas remotas: contextos `24a2378e3c97b0821a233a09b9e9cfa4`, preguntas `64d206ed891e1e8ad33758d052bc8a7f`, claves `32b58ed9b80ab5cc7c6d6aa0be1cd6ad`.
- S22 conserva la errata del quinto párrafo de Talbot («No tener razón significa que nunca meras reacciones…»), presente en el escaneo. Las claves 61, 79, 80 y 86 requieren atención docente por su formulación o inferencia. Todas las claves nuevas están identificadas como propuestas del modelo.

Total de los cuatro bloques: **144 preguntas, 138 publicadas y seis borradores**. Las verificaciones de presentación anteriores son vistas locales con los estilos reales, no una sesión autenticada de un estudiante.

## Capacidad del catálogo

Se corrigió `js/api.js` para leer preguntas por páginas ordenadas por UUID, evitando el truncamiento de una consulta única al superar el límite de PostgREST. `node scripts/verificar-paginacion.mjs` comprueba 1.253 filas, un límite de servidor inferior al solicitado, un banco vacío, páginas exactas y un fallo intermedio. No se alteraron RLS ni las claves que recibe el cliente.

## Ciencias Naturales 1B: cargado y comprobado

Se leyeron las cinco páginas de `content (13).pdf`, preguntas 97–116. Las 20 se distribuyeron en 17 de Biología, una de Química (102) y dos de Física (112 y 114). No hubo hashes coincidentes con la base. Se publicaron 18 y se conservaron dos borradores: 97 (especiación sin información suficiente para una clave inequívoca) y 113 (premisa incorrecta sobre diagnóstico del cáncer).

Se recrearon cuatro tablas y las cuatro gráficas de opciones de la 114; once WebP conservan los dibujos. Se comprobaron las 20 vistas locales a 320 px: cuatro opciones por pregunta, ninguna imagen rota ni desbordamiento exterior. Las tablas tienen desplazamiento interno para evitar columnas excesivamente estrechas. Se verificaron los once WebP por SHA en ambos hosts (22 comprobaciones).

| Archivo | Huella contextos | Huella preguntas | Huella claves |
|---|---|---|---|
| bio-f1-2026b | e1394f5c360b246605cb9badaf26f5ed | d79cf063055013077213988512522bd8 | f9c56672b9091175c46aaf319728985f |
| qui-b1-2026b | 2461313bcb940422b56f8f3dbc9bbf3a | 20a1a6d2ce76f941f5517762a4bea26a | 31224608ef1ff33e3b7dd3046b8515dd |
| fis-b1-2026b | 706752ef55b1ee56ed625e7d71278480 | 142d161afa87b442057943c369715bce | b4538a168420e5a25e5e82881811e035 |

Las tres huellas de cada archivo coinciden con Supabase después de la carga. Todas las claves tienen origen `modelo`.

Contrastes externos usados para evitar reproducir errores científicos:

- [Instituto Nacional del Cáncer: diagnóstico](https://www.cancer.gov/about-cancer/diagnosis-staging/diagnosis): los rayos X y la tomografía sí se usan en estudios diagnósticos; sustenta el borrador 113.
- [CDC: VPH](https://www.cdc.gov/std/treatment-guidelines/hpv.htm): el preservativo reduce el riesgo sin eliminarlo; precisión incorporada en la explicación de la 99.

El PDF `content (14).pdf` contiene al menos dos cuadernillos, no uno: el primer bloque empieza en 95 y termina en 116 (páginas 1–6), el segundo vuelve a 97–116 (páginas 7–11). Está en revisión; aún no se declara cargado.

## Ciencias Naturales 2B: cargado y comprobado

El primer bloque de `content (14).pdf` quedó cargado: 19 preguntas de Biología y tres de Química (95, 96 y 102). Se publicaron 21 y quedó en borrador la 114 por la discrepancia entre la hipótesis rechazada, la superposición de horarios en la gráfica y las conclusiones ofrecidas.

Se verificaron 17 WebP por SHA en ambos hosts (34 comprobaciones), además de revisar sus márgenes visualmente. Las letras originales de las opciones se excluyeron de los recortes para permitir el barajado. Las 22 vistas locales se recorrieron a 320 px con cuatro opciones y sin imágenes rotas ni desbordamientos exteriores. Las tablas fueron recreadas en HTML.

| Archivo | Huella contextos | Huella preguntas | Huella claves |
|---|---|---|---|
| bio-f2-2026b | dd88fd9a851a84da310a3576f462f6b5 | 3cbea5af5995cf804505671ff81e99e4 | d299b59e21bcc709e4405eb8c9088199 |
| qui-b2-2026b | 28522c1b3c9a58e5a96903447d98eaf3 | f238510b3b19f179ce1c6b7aeaae8c92 | f08dedc697ba2bd6628d132575341769 |

Las huellas coinciden con Supabase. El segundo bloque de ese PDF está marcado a mano **7B**, no 3B; sus páginas 7–11 están pendientes de carga.

## Cuadernillo 7B — content (14).pdf, páginas 7–11

- 20 preguntas: 17 de Biología y 3 de Química; 19 publicables y la 113 en borrador por opciones incompatibles con la gráfica.
- 17 figuras recortadas y revisadas; se ampliaron márgenes para conservar ejes, leyendas y dibujos. Las opciones gráficas no conservan letras fijas.
- Revisión local de las 20 preguntas a 320 px: cuatro opciones por pregunta, ninguna imagen rota y ningún desbordamiento de página. Tablas y figuras amplias permiten desplazamiento horizontal.
- Claves de modelo; 99 y 115 requieren especial revisión docente. La errata del texto de PM2.5 queda señalada en el contexto.
- SQL generado con rutas bio-10 a bio-13 y qui-16 a qui-17. Huellas previas verificadas sin coincidencias en la base; publicación y carga pendientes de comprobación remota.
