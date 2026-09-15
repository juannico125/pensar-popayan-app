# Auditoría de carga y cotejo de PDF

Verificación: 15 de septiembre de 2026 (UTC). Proyecto Supabase: `unttlrqhfpttueezvrtp`.

## Resultado comprobado en Supabase

| Bloque | Preguntas existentes y publicadas | Vínculos correctos con la ruta | Cuestionarios |
|---|---:|---:|---:|
| Inglés parte 2 | 25 | 25 | 5 |
| Inglés parte 4 | 90 | 90 | 15 |
| Sociales F4 | 46 | 46 | 15 |

Las 161 preguntas ya estaban cargadas. No se insertaron preguntas ni cuestionarios. Se verificaron los vínculos por UUID de pregunta, UUID de cuestionario y posición, comparándolos con los SQL de carga.

## Cotejo visual

Se renderizaron e inspeccionaron las 36 páginas de los tres documentos escaneados, cuya extracción de texto resultó vacía:

- `C:/Users/futun/Downloads/Formulario ingles . parte(2)ñññ (1).pdf`: 5 páginas.
- `C:/Users/futun/Downloads/Formulario ingles .parte(4)ñññ (1).pdf`: 12 páginas.
- `C:/Users/futun/Downloads/F4 SyC .Mikey Mouse.pdf`: 19 páginas.

El cotejo comprueba contenido de ejercicios, opciones y pasajes; no certifica una reproducción tipográfica literal. La adaptación ya normaliza puntuación y erratas, incorpora los ejemplos resueltos en inglés, abrevia referencias bibliográficas y omite ilustraciones decorativas. Las marcas manuscritas de los escaneos no se trataron como una clave oficial.

### Correcciones aplicadas en archivos y base

| Fuente | Antes | Corregido conforme al PDF |
|---|---|---|
| Inglés parte 4, página 10, Useful Things | `I (23) ______ check information` | `I can (23) ______ check information` |
| Sociales F4, página 8, pregunta 49 | `costear el 50 % del valor` | `costear el 30 % del valor` |
| Sociales F4, página 11, pregunta 56 | `más de 40.000 nigerianos` | `más de 4.000 nigerianos` |

Se actualizaron tres contextos y las huellas normalizadas de diez preguntas que los utilizan. Se conservaron los UUID de contextos y preguntas, las opciones y las claves. No se modificaron respuestas, repasos ni calificaciones históricas.

El atributo opcional `identityContext` conserva el contexto usado originalmente para derivar UUID. Tanto el generador como el verificador lo respetan; las huellas del contenido usan el texto corregido. Los SQL de carga se regeneraron comprobando que los UUID de preguntas y cuestionarios no cambiaran.

SQL aplicado: `supabase/seed/correcciones-cotejo-pdf-20260915.sql`. Es una corrección de datos existentes, no una migración de esquema.

## Huellas finales: local y Supabase coinciden

| Bloque | Contextos MD5 | Preguntas MD5 | Claves MD5 |
|---|---|---|---|
| Inglés 2 | d41d8cd98f00b204e9800998ecf8427e | eb508c8795e10ad959d633e84c5be93d | 7bbfba50af0096107644749f4976dd3d |
| Inglés 4 | d4347cd7a301f90e907fa29088c719e2 | 2428e980a67b1896c847be13834737b3 | 8bbcc87fb3ff4aa0d4e7a4eb017df1cf |
| Sociales F4 | c4807479d7723d99ea1bcee1de8bbf12 | a4b15ce2b5ba831a3b66d97a1fdee525 | 29c2acbacf39b46a7cf570eed25b86a2 |

Se corrigió `huella-carga.mjs` para generar SQL válido cuando no hay contextos (`IN (null)` y huella de cadena vacía). Antes producía `IN ()` en Inglés parte 2.

## Revisión docente pendiente

Las ocho claves de confianza media siguen pendientes en `docs/revision-prioritaria-ingles-sociales.md`: seis de Inglés parte 4 y dos de Sociales F4. La coincidencia con el archivo local no certifica que una clave propuesta por el modelo sea correcta. No se marcaron claves como revisadas por un docente.

Esta auditoría no incluye pruebas de una sesión real de estudiante en navegador ni los otros cuadernillos del repositorio.
