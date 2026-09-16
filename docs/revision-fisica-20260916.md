# Revisión de Física — 16 de septiembre de 2026

## Alcance y fuente

Comparación visual de las páginas 1–10 de `fisica de aladin.pdf` (31 páginas, en Descargas) con los dos lotes publicados: F1 y F2. F1 corresponde a Aladín y F2 a Deadpool, según sus portadas; los nombres Pato Donald y Bugs Bunny eran incorrectos.

Antes de corregir: 37 preguntas publicadas, 15 cuestionarios. Los tres fingerprints de cada lote coincidían con Supabase. F1 tenía 20 preguntas; F2 tenía 17. La pregunta F2-112 pertenece a Química y no se duplica en Física.

## Correcciones

- Recuperadas F2-97 y F2-98 de la portada, página 6. La afirmación anterior de que faltaban en el escaneo era incorrecta. Se agregan a fis-8 y fis-15, respectivamente: 39 preguntas, 15 cuestionarios.
- 33 recortes generados y examinados: 29 sustituciones y cuatro archivos nuevos. Se completan diagramas, flechas, rótulos y ejes. Se retiran las letras impresas de F2-101 para que las opciones puedan barajarse.
- F1-98 y F1-105 usan las gráficas originales. Las aproximaciones anteriores alteraban el inicio de la curva y los puntos de llegada al suelo.
- Restaurada la tabla del correntómetro F2-108: (1,15; 0,16), (3,63; 0,54), (5,20; 0,90), (5,66; 1,09).
- Tablas existentes envueltas en regiones desplazables para pantallas estrechas, conservando los valores impresos.
- Corregidos textos alternativos: disposición de sombrilla/ventilador, cuarto circuito de F2-109 y dirección de aceleraciones de F2-115.
- F2-105 recupera la opción original; la transcripción anterior había sustituido su justificación por otra más correcta. Se explica la imprecisión del original.
- F1-108 distingue aceleración ascendente de movimiento a velocidad constante; F1-105 explica el orden de llegada sin introducir tiempos calculados que no están en la fuente.

## Revisión docente

Las claves siguen siendo propuestas del modelo, no una clave oficial certificada. No se cambió ninguno de los 37 índices de respuesta existentes.

| Pregunta | Motivo |
|---|---|
| F1-110 | El original imprime tres mediciones de 1,10 s y promedio 1,06 s. Se conserva esa inconsistencia; la formulación sobre hipótesis también requiere revisión. |
| F2-98 | La opción impresa dice «ha presionado», una errata sin corrección deducible. La clave propuesta supone el clavo en reposo y desprecia su cambio de altura. |
| F2-100 | Clave heredada con confianza media; revisar el circuito y los supuestos sobre bombillos idénticos. |
| F2-101 | Fotocopia de contraste bajo; comparar separación y amplitud de las ondas. Se conserva la confianza media. |
| F2-105 | La justificación de la opción y la referencia horizontal/vertical del ángulo son imprecisas en el propio PDF. |

Además, F2-103 contiene valores de calor específico inusuales para madera y acero. La plataforma conserva la tabla del documento; no se reemplazan sus datos por valores externos.

## Integridad y validación

- `verificar-contenido.mjs`: ambos lotes sin problemas; 20 + 19 preguntas y 7 + 8 cuestionarios.
- 37 identificadores y claves anteriores preservados. `identityContext` conserva la identidad previa aunque cambie la presentación.
- Parche transaccional: 31 actualizaciones condicionadas a los valores anteriores y dos nuevas preguntas. Aborta si otra sesión cambió una fila; no borra ni reinserta preguntas existentes.
- Vista local con HTML/CSS de la plataforma: 39 estados a 320 px, cuatro opciones en cada pregunta, ninguna imagen rota ni desbordamiento horizontal. Verificación adicional del barajado de imágenes.
- La vista local no registra intentos ni sustituye una prueba autenticada de calificación.

### Fingerprints esperados después de aplicar

| Lote | Contextos | Preguntas | Claves |
|---|---|---|---|
| F1 | 002f2135fa9dd20f5281b79dd0cb4554 | 3d85dacf39ea61ec473d63ccbe11ba28 | 5e16f571efde75dec3d290b19d455e7b |
| F2 | 038cd4dd2979c89c1997ee476ec45dcf | 203a4ec72d868b0192f48098a642a323 | e3a3948c1d0e01383c57ea460c6a7883 |

F3–F6 están fuera de esta revisión de lo ya cargado. No se afirma que el PDF completo esté publicado.
