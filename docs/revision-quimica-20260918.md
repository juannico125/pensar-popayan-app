# Cotejo de Química — 18 de septiembre de 2026

## Fuente y alcance

Se leyeron visualmente las cinco primeras páginas de `quinto de quimica.pdf`: Aladín, preguntas 77–96. El resto de ese archivo contiene Biología y no forma parte de este lote. También se cotejó la 112 de la página 9 de `fisica de aladin.pdf`, trasladada correctamente a Química, y la clasificación de Herman.

Los seis fingerprints iniciales coincidían con Supabase: 21 preguntas, 11 rutas. No faltan preguntas del cuadernillo Aladín. La hoja de Herman presenta discrepancias descriptivas en 83, 86, 87, 91 y 92; se mantienen sus componentes y se señala la 92 para revisión.

## Cambios

- 16 recortes completos: modelos atómicos con leyenda, estructuras, vasos, reacción, cuatro gráficas de pH sin letras impresas, cambios de estado, gráfica presión-temperatura, métodos y cuatro montajes individuales.
- Pregunta 95: cada montaje acompaña su propia opción al barajar. La decantación original muestra un sólido sedimentado y un líquido vertido; el texto alternativo anterior describía otro aparato.
- Tablas desplazables: no se altera ningún valor del PDF. Las tablas de cuatro o más columnas conservan ancho suficiente para que los números no se partan en móviles.
- Explicaciones corregidas: composición frente a propiedades (77), conteo electrónico (87), trayectoria de flecha 1 (89), supuestos de neutralización (92), destilación de mezclas (95) y conductividad frente a polaridad (112).
- La pregunta 78 pasa a borrador, y su única ruta, qui-5, se despublica. Ninguna opción original es completamente correcta. Se conserva la pregunta, su clave histórica y las relaciones con intentos; no se borra nada.

## Errores de la fuente conservados y señalados

| Pregunta | Observación |
|---|---|
| 78 | La opción sobre etilenglicol dice «disminuye» y la otra le atribuye más carbonos. Fuera de práctica hasta revisión docente. |
| 82 | La fórmula confunde masa con cantidad de sustancia y presenta el porcentaje de manera imprecisa. Se aclara la definición en la explicación. |
| 83 | A volumen y cantidad fijos, P/T debe ser constante; la tabla 298/1, 323/2, 373/4 no lo cumple. La respuesta cualitativa sigue siendo aumento de presión. |
| 92 | Z no se identifica y la neutralización se presupone. La clasificación de Herman no describe esta pregunta. |
| 112 | La fuente llama apolar al azúcar; la falta de conductividad no demuestra apolaridad. La explicación señala el error. |

Claves propuestas por el modelo: esta revisión no sustituye la aprobación docente.

## Referencias de contraste

- [NIST: etilenglicol](https://webbook.nist.gov/cgi/cbook.cgi?ID=C107211&Type=TBOIL) y [1-propanol](https://webbook.nist.gov/cgi/cbook.cgi?ID=C71238&Type=TBOIL): contraste del punto de ebullición.
- [OpenStax: molaridad](https://openstax.org/books/chemistry-2e/pages/3-3-molarity): cantidad de soluto por volumen de disolución.
- [OpenStax: disolución](https://openstax.org/books/chemistry-2e/pages/11-1-the-dissolution-process) y [propiedades coligativas](https://openstax.org/books/chemistry-2e/pages/11-4-colligative-properties): sacarosa molecular y no electrolito.

## Verificación

Validadores locales sin problemas. Los 21 UUID y los índices históricos se conservan. Parche de 22 actualizaciones con comprobación del valor anterior, transaccional y sin borrados. La presentación local recorre las 21 preguntas a 320 px: cuatro opciones por pregunta, sin imágenes rotas ni desbordamiento de página. No se envían respuestas de estudiantes en esta prueba.

El lote final debe quedar con 20 preguntas publicadas y una en borrador, en diez rutas publicadas. La ruta qui-5 conserva su registro inactivo y su relación histórica. No se crean preguntas ni duplicados.
