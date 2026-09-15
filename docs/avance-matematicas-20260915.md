# Carga de matemáticas desde los PDF de Descargas

## Aplicado y verificado en Supabase

- Aladín S1: completada pregunta 18, ahora 21 preguntas. Se añadieron las cuatro gráficas originales de respuesta.
- Aladín S2: 25 preguntas previas, referencias de imágenes publicadas verificadas.
- Deadpool S1: 31 preguntas, 47 figuras originales. Pregunta 14 incompleta en el PDF: faltan figura y segundo procedimiento; pendiente de fuente completa.
- Deadpool S2: 24 preguntas, 16 figuras originales. Preguntas 58 y 64 con confianza media para revisión docente.
- Donald S1: 30 preguntas cargadas: 27 publicadas y 3 borradores sin clave (12, 18, 27). 38 figuras verificadas.
- Donald S2: 20 preguntas cargadas: 17 publicadas y 3 borradores sin clave (42, 49, 58). 17 figuras verificadas.
- Bugs Bunny S2: 20 preguntas publicadas, 16 figuras verificadas.

Las huellas de contextos, preguntas y claves coinciden entre archivos locales y Supabase. Todas las imágenes nuevas se comprobaron por HTTP.

## Publicación de figuras

Rama pública `codex/matematicas-figuras` del repositorio original. Solo imágenes, mediante una copia aislada en `tmp/matematicas/publicacion`. El contenido en Supabase usa URLs fijadas a commits para que los cambios de ramas no rompan imágenes:

- Aladín: `92e4e92`.
- Deadpool S1: `e663b326330ee0224a53dd0805b5434a7aa23a8e`.
- Deadpool S2: `38f9c7c2c48315d70d6ec2eb89205998ab3e8350`.
- Donald S1: `426bf8f59f0fa2597ba442f8e967c7b3274938c9`.
- Donald S2: `33cddc79285a510eec3ac93fcef24ad34584d251`.
- Bugs Bunny S2: `ac737fabf827423cb53afec96955516a31ae14ac`.

## Revisión de claves

Claves inferidas por el modelo, no certificadas por docente. Deadpool S2 58 supone simetría no marcada en el dibujo; se explicitó esa lectura en la pregunta. Deadpool S2 64: 9 km/h es velocidad, no aceleración; por lectura literal solo la afirmación 1 es válida. Mantener revisión docente.

## Trabajo en curso

Mickey y Tintín S2. Se están cotejando las preguntas y recortando personalmente las imágenes desde los PDF originales, sin recrear gráficos.

Siguiente cuestionario disponible: `mat-69`, orden 69. Las cargas completas son INSERT; comprobar duplicados antes de ejecutarlas de nuevo.

El generador admite `estado: 'borrador'` con `correct: null`, sin crear una clave ni incluirlo en rutas publicadas. El verificador rechaza borradores dentro de cuestionarios y conserva diferencias matemáticas entre superíndices y caracteres normales.

## Incidencias adicionales de la fuente

- Donald S1 12: dos opciones verdaderas (descenso de tasas y comparación de promedios).
- Donald S1 18: febrero aparece con 6.000 en tabla y 5.000 en la gráfica más próxima.
- Donald S1 27: frontera de áreas 1/4 poco nítida; no hay clave fiable.
- Donald S2 42: cotas/uniones de los desarrollos cilíndricos ambiguas.
- Donald S2 49: paralelismo y región sombreada contradictorios; el área que se deduce de la figura no aparece en las opciones.
- Donald S2 58: piano impreso como 16; total de inscripciones 41, resultado 13, ausente entre opciones. En Mickey S1 hay otra versión con piano 15; no cambiar Donald por esa versión sin revisión.
