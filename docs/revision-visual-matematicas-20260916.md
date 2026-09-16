# Matemáticas: carga y revisión visual

Estado verificado en Supabase el 16 de septiembre de 2026. El pulido visual ya está aplicado: contenido local y remoto coinciden.

## Contenido disponible

| Cuadernillo | Cargadas | Publicadas | Borradores |
| --- | ---: | ---: | ---: |
| Aladín S1 | 21 | 21 | 0 |
| Aladín S2 | 25 | 25 | 0 |
| Deadpool S1 | 32 | 31 | 1 |
| Deadpool S2 | 24 | 24 | 0 |
| Donald S1 | 30 | 27 | 3 |
| Donald S2 | 20 | 17 | 3 |
| Bugs Bunny S2 | 20 | 20 | 0 |
| Mickey S1 | 30 | 30 | 0 |
| Tintín S2 | 20 | 18 | 2 |
| **Total del lote** | **222** | **213** | **9** |

Con las diez preguntas anteriores, Matemáticas tiene **223 publicadas, 9 borradores y 87 cuestionarios**. La consulta posterior al pulido devolvió cero publicadas sin clave, cero publicadas fuera de ruta, cero borradores con clave y cero borradores dentro de cuestionarios.

La clasificación de Herman enumera 302 preguntas. Faltan las fuentes de Mickey S2 (20), Tintín S1 (30) y Bugs Bunny S1 (30): **80 preguntas clasificadas sin cuadernillo disponible en los archivos revisados**. El PDF de Mickey contiene Matemáticas S1 y otras materias; no contiene Matemáticas S2.

## Presentación e imágenes

- 54 recortes de tablas convertidos en tablas HTML con datos cotejados contra la fuente. Algunas imágenes originales contenían más de una tabla.
- 12 gráficas convertidas en SVG, con escalas comparables entre opciones y etiquetas accesibles. Se mantienen los valores y errores intencionales de los distractores.
- Cinco figuras de Aladín recapturadas del PDF: álbumes, almuerzos, alturas, quejas y Everest. Se recuperaron ejes y márgenes cortados.
- Tablas extensas con desplazamiento horizontal propio. Las opciones con figuras aprovechan todo el ancho en móvil y las tablas pequeñas caben desde 320 px.
- Los números de los ejes usan la tinta secundaria de la aplicación para mejorar el contraste.
- Aladín S1, pregunta 9: corregida la transcripción a **80 + 60 = 140**, según el PDF. El índice de la respuesta correcta se conserva.

Las imágenes se sirven desde `img/figuras/mat/`, en el mismo dominio de la aplicación. Las 157 imágenes distintas que siguen referenciadas en este lote se verificaron en producción y revisión: **314 descargas correctas**, con el mismo SHA-256 que los archivos locales.

## Validación

- Nueve bancos aprobados por `scripts/verificar-contenido.mjs`.
- Conservados los 222 UUID de preguntas, los UUID de contextos, los índices correctos y las rutas. No se crean duplicados ni se modifica el historial de respuestas.
- Vista local con contenido y CSS reales: 222 preguntas comprobadas a 320 px, sin imágenes rotas ni desbordamiento de página; 42 estados adicionales a 375, 414 y 768 px. Las tablas amplias mantienen su desplazamiento interno.
- Barajado comprobado: cada opción mantiene su contenido asociado.
- Verificadores de autenticación y publicación aprobados. El sitio publicado muestra el formulario de acceso; no se realizó una sesión de resolución con una cuenta de estudiante durante esta revisión.

### Huellas después del pulido

| Contenido | MD5 local y remoto |
| --- | --- |
| Contextos | `3fd85e6a4ace039f898ac3a234e2ede0` |
| Preguntas | `2d513a98cf82c6ff5569c63cccdf4f28` |
| Claves y explicaciones | `0131260b729742a02f399a5766a03afe` |

`supabase/seed/mat-pulido-visual-20260915.sql` se ejecutó una vez: 59 contextos, 50 preguntas y una explicación, en una transacción con 110 comprobaciones de la versión anterior. **No volver a ejecutarlo sobre este estado.** Los nueve seeds completos se regeneraron para reproducibilidad; son cargas iniciales y tampoco deben insertarse de nuevo en la base actual.

## Revisión docente pendiente

Las claves son inferidas, sin certificación docente. Estos nueve borradores quedan excluidos de la ruta:

- Deadpool S1 14: faltan una figura y el segundo procedimiento.
- Donald S1 12: dos opciones verdaderas.
- Donald S1 18: febrero aparece con 6.000 en la tabla y 5.000 en la gráfica.
- Donald S1 27: frontera de áreas poco nítida.
- Donald S2 42: cotas y uniones de desarrollos cilíndricos ambiguas.
- Donald S2 49: paralelismo y región sombreada contradictorios; el resultado deducido no aparece entre las opciones.
- Donald S2 58: piano tiene 16 inscripciones; el resultado 13 no está entre las opciones. Mickey usa 15 y no debe sustituir esta fuente.
- Tintín S2 44: planteamiento ambiguo sobre los datos de la gráfica.
- Tintín S2 58: dos gráficas casi idénticas para el punto M(3; 2,5).

También requieren revisión diez claves publicadas de confianza media: Aladín S1 13, 16 y 21; Aladín S2 31, 37 y 45; Deadpool S2 58 y 64; Mickey S1 21 y 26.

## Publicación y archivos privados

- [Producción](https://pensar-popayan-app.futunicolas.workers.dev/).
- [Revisión](https://revision-cuestionarios-pensar-popayan-app.futunicolas.workers.dev/).
- Ajuste móvil y seeds publicados en `revision-cuestionarios` (`84cd7a1`) y `main` (`fe899da`), con despliegues de Workers y Pages satisfactorios. Producción conserva el desbloqueo secuencial; revisión permite abrir los cuestionarios para inspección.
- Los cuatro dominios actuales de Workers y Pages devuelven 404 para los archivos SQL. `_worker.js` limita los archivos servidos por Pages; `scripts/verificar-publicacion.mjs` comprueba 14 rutas privadas y 7 públicas.
- **Exposición pendiente:** GitHub sigue público y conserva las claves en el contenido y el historial. También se comprobó que un despliegue antiguo e inmutable de Pages todavía permite descargar SQL. El bloqueo de los dominios actuales no elimina esas copias. Se solicitó decisión sobre hacer privado el repositorio; hace falta retirar los despliegues antiguos afectados desde Cloudflare.

Se conservaron los cambios de Física realizados en paralelo por otra sesión. Su contenido no forma parte de esta auditoría de Matemáticas.
