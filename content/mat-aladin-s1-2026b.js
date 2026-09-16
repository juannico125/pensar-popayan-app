/* Matemáticas · cuadernillo Aladín · primera sesión · lote 2026-B
 *
 * Fuente: «aladin mates.pdf», el cuadernillo «Matemáticas 1» de Aladín, 21
 * preguntas numeradas 1 a 21. Es un escaneo de pliegos (dos páginas por hoja)
 * sin capa de texto.
 *
 * El componente y la dificultad de cada pregunta vienen de la clasificación
 * que entregó el docente (Herman), cruzada con el vocabulario de `temas` de
 * matemáticas, que es más fino que sus cinco componentes.
 *
 * La pregunta 18 se completó con las cuatro gráficas del PDF. Total: 21 preguntas.
 *
 * A diferencia de sociales, aquí las claves no se juzgan: se resuelven. Cada
 * una está calculada, y la explicación muestra el procedimiento. Aun así se
 * cargan con `clave_origen = 'modelo'` hasta que el docente las revise.
 * `confianza: 'media'` marca las tres que dependen de leer un escaneo:
 *
 *   · 13 — el exponente de la última opción sale borroso. Por aritmética solo
 *     puede ser 2,5 × 10³ (2.500 cm³); conviene confirmar contra el impreso.
 *   · 16 — la respuesta depende de cuántos tramos de ascenso tiene la gráfica.
 *     Se leen tres (2→3, 4→5, 8→9), que es justo lo que enumera la opción; el
 *     tramo 6→7 queda plano a la resolución del escaneo.
 *   · 21 — hay que leer las altitudes de los campamentos en el dibujo.
 *
 * Las explicaciones nunca nombran una letra: las opciones se barajan por
 * estudiante.
 */

const IMG = 'img/figuras/mat/';

const M = (comp, dificultad, ctxLabel, ctxClass, context, text, opts, correct, exp, tip, confianza) => ({
  comp, dificultad,
  ctxLabel: ctxLabel || null, ctxClass: ctxClass || null, context: context || null,
  text, opts, correct, exp, tip, confianza: confianza || 'alta',
});

const fig = (archivo, alt) =>
  `<figure class="ctx-fig"><img src="${IMG}${archivo}" loading="lazy" alt="${alt}"></figure>`;

/* Las cuatro tablas que son opciones de la 8: la misma información de la
   gráfica, con los valores cambiados de sitio. */
const t8 = (marzo, abril) =>
  '<table class="ctx-table"><tr><th></th><th>Billeteras</th><th>Carteras</th><th>Correas</th><th>Chaquetas</th></tr>' +
  `<tr><td>Marzo</td>${marzo.map(v => `<td>${v}</td>`).join('')}</tr>` +
  `<tr><td>Abril</td>${abril.map(v => `<td>${v}</td>`).join('')}</tr></table>`;

/* Las cuatro tablas que son opciones de la 9: producción total de los dos días. */
const t9 = (cuad, ray) =>
  '<table class="ctx-table"><tr><th></th><th>Grandes</th><th>Pequeños</th></tr>' +
  `<tr><td>Cuadriculados</td><td>${cuad[0]}</td><td>${cuad[1]}</td></tr>` +
  `<tr><td>Rayados</td><td>${ray[0]}</td><td>${ray[1]}</td></tr></table>`;

/* Las cuatro tablas que son opciones de la 19. */
const t19 = (personas, acum) => {
  const m = ['Caída de llamadas', 'Falta de cobertura', 'Problemas de facturación',
             'Velocidad de navegación', 'Precio de productos', 'Otros'];
  return '<table class="ctx-table"><tr><th>Motivo</th><th>N.º de personas</th><th>Porcentaje acumulado</th></tr>' +
    m.map((n, i) => `<tr><td>${n}</td><td>${personas[i]}</td><td>${acum[i]}</td></tr>`).join('') + '</table>';
};

const BANKS = {
  mat: [
    /* ═════════ 1 ═════════ */
    M('Interpretación de datos', 'media', 'GRÁFICA', 'ctx-fig',
      '<p>El porcentaje de acierto por pregunta en una prueba de selección se presenta en la gráfica. Una pregunta se considera de alto nivel de dificultad si menos del 50 % de las personas aciertan la respuesta.</p>' +
      fig('al1-q01-acierto.webp', 'Gráfica de barras: porcentaje de acierto para las preguntas 1 a 15. Las cuatro primeras barras están por debajo del 50 %; de la quinta en adelante todas lo superan.'),
      'De acuerdo con los resultados, las preguntas difíciles se ubicaron',
      ['al inicio y al final de la prueba.', 'a lo largo de toda la prueba.',
       'al inicio de la prueba.', 'al final de la prueba.'], 2,
      'Difícil significa acierto por debajo del 50 %. Solo las barras de las posiciones 1 a 4 quedan bajo esa línea; de la 5 en adelante todas la superan, y las últimas son de las más altas. Las preguntas difíciles están agrupadas al comienzo.',
      'Traza mentalmente la línea del 50 % sobre la gráfica y mira qué barras quedan por debajo.'),

    /* ═════════ 2 ═════════ */
    M('Interpretación de datos', 'media', 'GRÁFICA', 'ctx-fig',
      '<p>La gráfica muestra el porcentaje de ventas del último año de una empresa de álbumes musicales en tres idiomas: inglés, francés y español.</p>' +
      fig('al1-q02-albumes.webp', 'Gráfica de barras de porcentaje de ventas por idioma: inglés alrededor del 35 %, español alrededor del 38 %, francés alrededor del 28 %. La barra del francés es la más baja.') +
      '<p>Al ver la gráfica, un ejecutivo de la empresa interpreta que la menor parte de los álbumes musicales vendidos en el último año fueron los del idioma francés.</p>',
      '¿La interpretación del ejecutivo es correcta?',
      ['Sí, porque la barra de los álbumes en francés está al extremo derecho de la gráfica.',
       'No, porque la barra de mayor altura es la de álbumes en español y los otros dos álbumes tienen ventas menores.',
       'Sí, porque la barra que representa los álbumes vendidos en francés es la de menor altura.',
       'No, porque el menor valor corresponde a los álbumes en inglés que están a la izquierda en el eje horizontal.'], 2,
      'La barra del francés es efectivamente la más baja de las tres, así que el ejecutivo tiene razón. Pero el motivo no es dónde esté ubicada la barra: en una gráfica de barras lo que compara cantidades es la altura, no la posición en el eje.',
      'Cuando una opción acierta el «sí» pero por un motivo equivocado, sigue siendo incorrecta. Revisa siempre la justificación.'),

    /* ═════════ 3 ═════════ */
    M('Proporcionalidad y porcentajes', 'media', 'SITUACIÓN', 'ctx-sit',
      '<p>Las estadísticas de asistencia a una obra de teatro indican que por cada dos niños ingresó un hombre adulto, y por cada tres niñas, una mujer adulta, todos pagando su respectiva entrada. Los siguientes datos fueron reportados por el teatro:</p>' +
      '<ul><li>Valor entrada mujer adulta: $ 4.000.</li><li>Valor entrada niño o niña: $ 2.000.</li>' +
      '<li>Cantidad de niños que ingresó: 480.</li><li>Cantidad de niñas que ingresó: 600.</li>' +
      '<li>Cantidad de asientos: 1.500.</li></ul>',
      '¿Con cuáles de los siguientes datos puede determinarse el recaudo por concepto de mujeres adultas y niñas?',
      ['Valor entrada mujer adulta, valor entrada niño o niña, y cantidad de asientos.',
       'Valor entrada niño o niña, cantidad de niñas y cantidad de asientos.',
       'Valor entrada mujer adulta, valor entrada niño o niña, y cantidad de niñas.',
       'Valor entrada niño o niña, cantidad de niños y cantidad de niñas.'], 2,
      'El número de mujeres adultas no está dado, pero se deduce: por cada tres niñas entró una mujer, así que con la cantidad de niñas basta. Después hacen falta los dos precios, el de la niña y el de la mujer. La cantidad de asientos y la de niños no intervienen en ese recaudo.',
      'Antes de buscar datos, escribe la cuenta que quieres hacer. Lo que no aparezca en esa cuenta, sobra.'),

    /* ═════════ 4 ═════════ */
    M('Interpretación de datos', 'media', 'TABLA Y GRÁFICA', 'ctx-fig',
      '<p>En un pueblo se cuenta con el programa de comedores comunitarios y se quiere saber qué tan exitoso ha sido. Para esto, se registra en una tabla la cantidad de almuerzos proporcionados durante los primeros seis meses del año.</p>' +
      '<table class="ctx-table"><tr><th>Mes</th><th>Almuerzos proporcionados</th></tr>' +
      '<tr><td>Enero</td><td>1.500</td></tr><tr><td>Febrero</td><td>1.550</td></tr>' +
      '<tr><td>Marzo</td><td>1.700</td></tr><tr><td>Abril</td><td>1.850</td></tr>' +
      '<tr><td>Mayo</td><td>2.600</td></tr><tr><td>Junio</td><td>2.650</td></tr></table>' +
      '<p>Uno de los coordinadores del programa plantea la siguiente gráfica para ilustrar los datos.</p>' +
      fig('al1-q04-almuerzos.webp', 'Gráfica de barras horizontales de almuerzos por mes. Las barras de enero y febrero son muy cortas, muy por debajo de 1.000, mientras que la tabla les asigna 1.500 y 1.550. Las de marzo a junio sí crecen de forma coherente.'),
      'La información presentada en la gráfica es',
      ['incorrecta, porque los valores de enero y febrero no corresponden a los datos de la tabla.',
       'correcta, porque se observa el crecimiento que ha tenido el programa durante los seis meses.',
       'incorrecta, porque los valores de mayo y junio están muy altos comparados con los demás.',
       'correcta, porque la escala de la gráfica contiene todos los valores que se presentan en la tabla.'], 0,
      'Según la tabla, enero y febrero rondan los 1.500 almuerzos, más de la mitad de lo que alcanza junio. En la gráfica, en cambio, sus barras son diminutas y no llegan ni a 500. Mayo y junio sí están bien: son altos porque los datos son altos.',
      'Para revisar si una gráfica representa bien una tabla, compara barra por barra contra el valor que le toca.'),

    /* ═════════ 5 ═════════ */
    M('Tablas y probabilidad', 'media', null, null, null,
      'Mario debe visitar a sus clientes Carlos, Alberto, Lucía y Patricia, quienes viven en la misma zona, pero solo tiene tiempo para visitar a dos de ellos. ¿Cuántos pares diferentes de clientes puede Mario escoger para visitar?',
      ['12', '8', '6', '4'], 2,
      'Se eligen 2 de 4 y el orden no importa: visitar a Carlos y Alberto es lo mismo que visitar a Alberto y Carlos. Los pares son Carlos-Alberto, Carlos-Lucía, Carlos-Patricia, Alberto-Lucía, Alberto-Patricia y Lucía-Patricia: seis en total.',
      'Cuando el orden no importa, enumerar los pares a mano es rápido y seguro con cuatro elementos.'),

    /* ═════════ 6 ═════════ */
    M('Interpretación de datos', 'media', 'TABLA', 'ctx-table',
      '<p>En la tabla se muestra la cantidad de libros de dos géneros que han leído tres personas.</p>' +
      '<table class="ctx-table"><tr><th>Persona</th><th>Ficción</th><th>Poesía</th></tr>' +
      '<tr><td>Javier</td><td>7</td><td>5</td></tr><tr><td>Celeste</td><td>16</td><td>8</td></tr>' +
      '<tr><td>Eduardo</td><td>15</td><td>9</td></tr></table>',
      '¿Cuál de las siguientes opciones es una interpretación errónea de los datos de la tabla?',
      ['Javier leyó menos libros de poesía que Eduardo.',
       'Celeste leyó más libros de poesía que Eduardo.',
       'Las tres personas han leído más libros de ficción que de poesía.',
       'Las tres personas leyeron por lo menos 5 libros de cada género.'], 1,
      'Celeste leyó 8 libros de poesía y Eduardo 9, así que Celeste leyó menos, no más. Las otras tres se cumplen: Javier tiene 5 contra 9; los tres tienen más ficción que poesía; y el mínimo de toda la tabla es 5, de Javier en poesía.',
      'En las preguntas de «interpretación errónea» hay que verificar las cuatro: la respuesta es la única que falla.'),

    /* ═════════ 7 ═════════ */
    M('Proporcionalidad y porcentajes', 'media', 'SITUACIÓN', 'ctx-sit',
      '<p>En una tienda de animales, el administrador realiza el siguiente procedimiento para hacer un inventario de sus canarios:</p>' +
      '<ol><li>Separa los canarios en tres grupos excluyentes: canarios de color, canarios de forma y canarios de canto.</li>' +
      '<li>Cuenta la cantidad de canarios de cada grupo.</li>' +
      '<li>Divide el número de canarios de cada grupo entre el número total de canarios, y el resultado lo multiplica por 100 %.</li></ol>',
      'Si en la tienda de animales el 40 % son canarios de canto, entonces, después de realizar el inventario, se tendrá',
      ['el 20 % de canarios de forma y el 20 % de color.',
       'el 30 % entre canarios de forma y color.',
       'el 30 % de canarios de forma y el 30 % de color.',
       'el 60 % entre canarios de forma y color.'], 3,
      'Los tres grupos son excluyentes y cubren toda la tienda, así que sus porcentajes suman 100 %. Si canto es el 40 %, a forma y color les queda el 60 % entre los dos. Cómo se reparte ese 60 % no se sabe: podría ser 30 y 30, pero también 50 y 10.',
      'Distingue lo que el dato obliga de lo que solo permite. Aquí el total está fijo; el reparto interno no.'),

    /* ═════════ 8 ═════════ */
    M('Interpretación de datos', 'media', 'GRÁFICA', 'ctx-fig',
      '<p>La gráfica muestra la cantidad de productos vendidos en una tienda, en marzo y abril.</p>' +
      fig('al1-q08-marzo-abril.webp', 'Gráfica de barras por producto con dos series, marzo y abril. Billeteras: marzo 5 %, abril 15 %. Carteras: marzo 20 %, abril 25 %. Correas: marzo 30 %, abril 10 %. Chaquetas: marzo 5 %, abril 10 %.'),
      'La tabla que muestra la misma información de la gráfica es',
      [t8([5, 20, 30, 5], [15, 25, 10, 10]),
       t8([15, 25, 10, 10], [5, 20, 30, 5]),
       t8([5, 25, 55, 50], [15, 40, 50, 60]),
       t8([5, 40, 50, 60], [15, 25, 55, 60])], 0,
      'De la gráfica se leen ocho valores: marzo 5, 20, 30 y 5; abril 15, 25, 10 y 10. La tabla correcta es la que los repite en ese orden. Una de las opciones tiene los números bien pero intercambia las filas de marzo y abril, y las otras dos traen valores que no aparecen en la gráfica.',
      'Fíjate en un dato que distinga rápido: correas en marzo es la barra más alta, 30. La tabla correcta debe tenerlo ahí.'),

    /* ═════════ 9 ═════════ */
    M('Interpretación de datos', 'media', 'TABLA Y GRÁFICA', 'ctx-fig',
      '<p>Una empresa se dedica a la fabricación de cuadernos cuadriculados y rayados de dos tamaños: grande y pequeño. La tabla y la gráfica muestran la producción en los primeros dos días de funcionamiento de la empresa.</p>' +
      '<p><b>Producción día 1</b></p>' +
      '<table class="ctx-table"><tr><th></th><th>Grandes</th><th>Pequeños</th></tr>' +
      '<tr><td>Cuadriculados</td><td>90</td><td>70</td></tr><tr><td>Rayados</td><td>30</td><td>20</td></tr></table>' +
      fig('al1-q09-produccion.webp', 'Gráfica de barras de la producción del día 2: cuadernos pequeños, cuadriculados 50 y rayados 70; cuadernos grandes, cuadriculados 20 y rayados 60.'),
      '¿De las siguientes tablas, cuál corresponde a la producción total de los dos días?',
      [t9([130, 140], [50, 80]),
       t9([140, 140], [50, 70]),
       t9([140, 130], [80, 40]),
       t9([150, 130], [40, 80])], 1,
      'Hay que sumar día 1 y día 2 casilla por casilla. Cuadriculados grandes: 90 + 50 = 140. Cuadriculados pequeños: 70 + 70 = 140. Rayados grandes: 30 + 20 = 50. Rayados pequeños: 20 + 50 = 70.',
      'Suma una casilla y busca qué opciones la respetan; casi siempre con dos casillas ya queda una sola en pie.'),

    /* ═════════ 10 ═════════ */
    M('Tablas y probabilidad', 'media', 'SITUACIÓN', 'ctx-sit',
      '<p>En una universidad se determinó que los futuros códigos de los estudiantes admitidos a primer semestre estarán compuestos por 6 casillas. En las 2 primeras casillas del código se deben ubicar los últimos 2 números del año de ingreso, y en cada una de las 4 casillas restantes es posible ubicar cualquier número de 0 a 9 con opción de repetirlos, así:</p>' +
      '<p>Si ingresara en el año 2050:</p>' +
      '<table class="ctx-table"><tr><td>5</td><td>0</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>' +
      '<tr><td colspan="2">Últimos dígitos del año</td><td colspan="4">Cualquier dígito de 0 a 9</td></tr></table>',
      'De acuerdo con el sistema anterior, ¿cuál es el máximo número de códigos diferentes que se pueden generar en cada año de ingreso?',
      ['5.040', '9.999', '10.000', '50.000'], 2,
      'Dentro de un mismo año las dos primeras casillas están fijas, así que no aportan variedad. Quedan 4 casillas libres con 10 posibilidades cada una y se pueden repetir: 10 × 10 × 10 × 10 = 10.000.',
      'Cuando los dígitos se pueden repetir, se multiplican las posibilidades de cada casilla. Las casillas fijas no cuentan.'),

    /* ═════════ 11 ═════════ */
    M('Proporcionalidad y porcentajes', 'media', 'SITUACIÓN', 'ctx-sit',
      '<p>Andrés está viendo la transmisión de una carrera de ciclismo y el comentarista dice: «este pedalista avanza 8,5 metros con cada pedalazo, si mantiene ese ritmo es fácil calcular cuántos metros avanzará en los próximos minutos». Andrés afirma que hacer el cálculo que sugiere el comentarista es imposible, pues hace falta información.</p>',
      'La afirmación de Andrés es',
      ['correcta, porque hace falta saber cuántos segundos tiene un minuto y así poder multiplicar la cantidad de segundos por los metros que avanza el pedalista.',
       'incorrecta, porque basta con multiplicar los metros que avanza el pedalista por el tiempo transcurrido.',
       'correcta, porque hace falta saber cuántos pedalazos hace en un minuto y así poder multiplicar este valor por la distancia que avanza en cada uno.',
       'incorrecta, porque si se suman los metros que avanza el pedalista cada minuto se obtiene la distancia total que avanza en los próximos minutos.'],
      2,
      'El dato que hay relaciona metros con pedalazos, no metros con tiempo. Para pasar a metros por minuto falta la cadencia: cuántos pedalazos da en un minuto. Cuántos segundos tiene un minuto se sabe de sobra, y eso no resuelve nada.',
      'Revisa las unidades del dato que te dan y las de la respuesta que piden. Lo que falta es el puente entre las dos.'),

    /* ═════════ 12 ═════════ */
    M('Estadística descriptiva', 'media', 'SITUACIÓN', 'ctx-sit',
      '<p>En una universidad, un curso se aprueba si se obtiene una nota final igual o mayor que 3,0. De las cuatro notas del curso, la primera equivale al 10 %, la segunda al 20 %, la tercera al 30 % y la cuarta al 40 %. Un estudiante que obtuvo 4,0 en la primera nota, 2,5 en la segunda, 3,0 en la tercera y 2,5 en la cuarta se sorprendió al saber que había reprobado el curso, porque suponía que su nota final era 3,0.</p>',
      'Al estudiante le faltó considerar',
      ['los porcentajes de valoración.', 'la frecuencia de las notas.',
       'las notas bajas.', 'la cantidad de notas.'], 0,
      'El estudiante promedió las cuatro notas por igual: (4,0 + 2,5 + 3,0 + 2,5) ÷ 4 = 3,0. Pero cada nota pesa distinto: 4,0×0,10 + 2,5×0,20 + 3,0×0,30 + 2,5×0,40 = 0,40 + 0,50 + 0,90 + 1,00 = 2,8. Pesó más la nota baja del 40 %.',
      'Si los porcentajes de cada nota son distintos, el promedio simple no sirve: hay que ponderar.'),

    /* ═════════ 13 ═════════ */
    M('Proporcionalidad y porcentajes', 'media', null, null, null,
      'Un recipiente contiene dos litros y medio de agua. Si cada litro equivale a 1.000 cm<sup>3</sup>, en total, en ese recipiente hay',
      // Con superíndices Unicode (³, ⁴) las cuatro opciones se vuelven
      // indistinguibles al normalizar, porque la normalización solo conserva
      // letras y dígitos. En <sup> se renderizan mejor y se distinguen.
      ['25 × 10<sup>3</sup> cm<sup>3</sup> de agua.', '2,5 × 10<sup>4</sup> cm<sup>3</sup> de agua.',
       '25 × 10<sup>4</sup> cm<sup>3</sup> de agua.', '2,5 × 10<sup>3</sup> cm<sup>3</sup> de agua.'], 3,
      '2,5 litros × 1.000 cm³ por litro = 2.500 cm³. Escrito en notación científica, 2.500 es 2,5 × 10³. Las otras opciones dan 25.000, 25.000 y 250.000: diez y cien veces de más.',
      'Convierte primero y escribe el número completo; después pásalo a potencia de diez.',
      'media'),

    /* ═════════ 14 ═════════ */
    M('Proporcionalidad y porcentajes', 'media', 'SITUACIÓN', 'ctx-sit',
      '<p>Una prueba atlética de 10.000 metros planos fue completada por Fernando en un tiempo de 25 minutos; su entrenador le informa que su tiempo mejoró un 15 % respecto al año pasado, pero Fernando no recuerda cuál fue su tiempo en esa prueba. Con el fin de encontrarlo, efectúa el siguiente cálculo:</p>' +
      '<p style="font-family:var(--font-mono)">25 × 0,15 = 3,75<br>25 + 3,75 = 28,75</p>' +
      '<p>Fernando encuentra entonces que su tiempo de carrera el año pasado fue 28,75 minutos.</p>',
      'El cálculo de Fernando es incorrecto, debido a que',
      ['calcula mal el porcentaje de 15 % al realizarlo sin divisiones.',
       'suma el valor obtenido pero debe restarlo porque el tiempo de la prueba disminuyó.',
       'el cambio del 15 % es respecto al tiempo del año pasado.',
       'debe encontrar un valor que corresponda al 115 % de 25.'], 2,
      'La mejora del 15 % se mide sobre el tiempo del año pasado, que es justamente el dato desconocido. Si ese tiempo es T, entonces 25 = T − 0,15·T = 0,85·T, de donde T = 25 ÷ 0,85 ≈ 29,4 minutos. Fernando le aplicó el 15 % al tiempo de este año, que es la base equivocada.',
      'Pregúntate siempre sobre qué cantidad se calcula el porcentaje. El «respecto a» dice cuál es la base.'),

    /* ═════════ 15 ═════════ */
    M('Ecuaciones en contexto', 'media', 'SITUACIÓN', 'ctx-sit',
      '<p>En una heladería venden paletas y conos. El sábado se vendieron x paletas y z conos, y el domingo se vendieron 3z paletas y 2x conos. Cada paleta vendida a R pesos genera una ganancia de $ 200 y cada cono vendido a Q pesos genera una ganancia de $ 500.</p>',
      '¿De cuáles variables se necesita conocer su valor para hallar las ganancias obtenidas por la venta de todas las paletas el sábado y el domingo?',
      ['Solamente de x y Q.', 'Solamente de R y z.',
       'Solamente de R y Q.', 'Solamente x y z.'], 3,
      'Las paletas vendidas son x el sábado y 3z el domingo, o sea x + 3z en total, y cada una deja $ 200 fijos: la ganancia es 200·(x + 3z). Hacen falta x y z. R es el precio de venta, no la ganancia, y Q solo interviene en los conos.',
      'Escribe la expresión de lo que te piden. Las letras que no aparezcan en ella no hacen falta.'),

    /* ═════════ 16 ═════════ */
    M('Interpretación de datos', 'alta', 'GRÁFICA', 'ctx-fig',
      '<p>La gráfica muestra las alturas sobre el nivel del mar de 9 puntos por los cuales recorre un ciclista un trayecto.</p>' +
      fig('al1-q16-alturas.webp', 'Gráfica de línea con la altura en metros de nueve puntos. El recorrido sube entre los puntos 2 y 3, vuelve a subir entre el 4 y el 5, y sube de nuevo entre el 8 y el 9; en los demás tramos desciende.'),
      'Una manera de determinar cuántos metros asciende el ciclista en sentido vertical (distancia vertical) en todo el trayecto es',
      ['sumar las alturas correspondientes a los puntos 1, 3, 5, 7, y 9.',
       'calcular la diferencia de altura entre los puntos 2 y 3, 4 y 5, y 8 y 9, y sumar estas diferencias.',
       'adicionar las alturas de los puntos 3, 5 y 9, y restarle a esta suma, la suma de los demás puntos.',
       'restarle a la altura del punto 9, la suma de las diferencias de los puntos 2 y 3, y 4 y 5.'], 1,
      'Ascender es solo subir. En la gráfica el ciclista sube en tres tramos: del punto 2 al 3, del 4 al 5 y del 8 al 9. Lo que asciende en cada uno es la diferencia de alturas entre sus extremos, y el total es la suma de esas tres diferencias. Sumar alturas no sirve: la altura es una posición, no un ascenso.',
      'Marca en la gráfica solo los tramos que suben e ignora las bajadas: la distancia vertical ascendida es la suma de esas subidas.',
      'media'),

    /* ═════════ 17 ═════════ */
    M('Interpretación de datos', 'media', 'TABLA', 'ctx-table',
      '<p>En una encuesta realizada anualmente por el Departamento Administrativo Nacional de Estadística (DANE), se registra el número de automóviles afiliados al servicio de transporte público. Los resultados de esta encuesta se presentan en la tabla.</p>' +
      '<table class="ctx-table"><tr><th colspan="4">Promedio mensual de vehículos afiliados al servicio de transporte público</th></tr>' +
      '<tr><th>Ciudad</th><th>2015</th><th>2016</th><th>Porcentaje de variación (%)</th></tr>' +
      '<tr><td>Barranquilla</td><td>3.375</td><td>3.391</td><td>0,5</td></tr>' +
      '<tr><td>Bogotá</td><td>18.267</td><td>16.622</td><td>−9,0</td></tr>' +
      '<tr><td>Cali</td><td>1.967</td><td>1.891</td><td>−3,9</td></tr>' +
      '<tr><td>Medellín</td><td>5.547</td><td>5.417</td><td>−2,4</td></tr></table>' +
      '<p style="font-size:.85em">Tomado y adaptado de: http://www.dane.gov.co</p>',
      'De acuerdo con la tabla, si se ordenan las ciudades según el porcentaje de variación de menor a mayor, el orden correcto es',
      ['Medellín, Cali, Bogotá, Barranquilla.', 'Bogotá, Medellín, Cali, Barranquilla.',
       'Bogotá, Cali, Medellín, Barranquilla.', 'Medellín, Cali, Barranquilla, Bogotá.'], 2,
      'Son números con signo, así que el menor es el más negativo: −9,0 de Bogotá, luego −3,9 de Cali, después −2,4 de Medellín y por último 0,5 de Barranquilla, la única positiva.',
      'Con porcentajes negativos, «menor» es el que más baja. Ubícalos en una recta numérica si dudas.'),

    /* ═════════ 19 ═════════ */
    M('Interpretación de datos', 'alta', 'GRÁFICA', 'ctx-fig',
      '<p>La gráfica muestra información sobre las quejas que se reciben en un punto de servicio al cliente de una compañía de telefonía celular.</p>' +
      fig('al1-q19-quejas.webp', 'Gráfica de barras con el número de personas por motivo de queja y una línea de porcentaje acumulado: caída de llamadas 60, falta de cobertura 55, problemas de facturación 35, velocidad de navegación 25, precio de productos 20 y otros 5.'),
      '¿Cuál de las siguientes tablas muestra la cantidad de personas y el porcentaje acumulado por cada tipo de queja?',
      [t19([30, 58, 75, 87, 97, 100], [30, 88, 163, 250, 347, 447]),
       t19([30, 28, 17, 12, 10, 3], [5, 20, 10, 5, 15, 5]),
       t19([60, 55, 35, 25, 20, 5], [30, 58, 75, 87, 97, 100]),
       t19([60, 115, 150, 175, 195, 200], [60, 115, 150, 175, 195, 200])], 2,
      'Las barras dan las personas: 60, 55, 35, 25, 20 y 5, que suman 200. El acumulado es el porcentaje del total alcanzado hasta cada motivo: 60 de 200 es 30 %; con 115 vamos en 58 %; con 150, en 75 %; con 175, en 87 %; con 195, en 97 %; y con 200, en 100 %. Una opción confunde las personas con los porcentajes, otra pone los acumulados como si fueran personas y la tercera trae cifras que no están en la gráfica.',
      'El acumulado siempre crece y termina exactamente en 100 %. Esa sola regla descarta varias opciones.'),

    /* ═════════ 20 ═════════ */
    M('Estadística descriptiva', 'alta', 'TABLAS', 'ctx-table',
      '<p>En un estudio se analizó el salario de 200 personas, de las cuales solo 164 tenían deudas por tarjeta de crédito con una entidad bancaria. En la Tabla 1 se muestra la distribución de las 200 personas, según su salario.</p>' +
      '<table class="ctx-table"><tr><th rowspan="2">Salario</th><th colspan="2">Porcentaje de personas</th><th rowspan="2">Total</th></tr>' +
      '<tr><th>Hombres</th><th>Mujeres</th></tr>' +
      '<tr><td>$ 1.000.000</td><td>2 %</td><td>18 %</td><td>40</td></tr>' +
      '<tr><td>$ 1.500.000</td><td>15 %</td><td>10 %</td><td>50</td></tr>' +
      '<tr><td>$ 2.000.000</td><td>21 %</td><td>14 %</td><td>70</td></tr>' +
      '<tr><td>$ 3.000.000</td><td>12 %</td><td>8 %</td><td>40</td></tr></table>',
      '¿Cuál es el salario promedio de las 100 mujeres?',
      ['$ 1.000.000', '$ 1.700.000', '$ 3.000.000', '$ 3.750.000'], 1,
      'Los porcentajes son sobre las 200 personas, así que las mujeres son 18 %, 10 %, 14 % y 8 % de 200: 36, 20, 28 y 16, que suman 100. El total que ganan es 36×1.000.000 + 20×1.500.000 + 28×2.000.000 + 16×3.000.000 = 170.000.000, y repartido entre 100 mujeres da 1.700.000.',
      'Un promedio ponderado nunca puede quedar fuera del rango de los datos: aquí tiene que estar entre 1 y 3 millones.'),

    /* ═════════ 21 ═════════ */
    M('Proporcionalidad y porcentajes', 'media', 'FIGURA', 'ctx-fig',
      '<p>La gráfica forma parte de un informe sobre montañismo en los montes Everest y Lhotse. En ella se indican las alturas a las que habitualmente se ubican los campamentos al escalar y un posible plan de ascenso al Everest en 17 días.</p>' +
      fig('al1-q21-everest.webp', 'Ilustración de los montes Everest, de 8.848 metros, y Lhotse, de 8.516 metros, con los campamentos marcados: campo base a 5.300 metros y campos I a V ascendiendo hasta 7.900 metros.'),
      'Un grupo de montañistas planea realizar un ascenso al Everest distinto al mostrado en la gráfica, instalando un campo cada 700 metros desde el campo base hasta la cumbre. Si instalan el campo base a 5.300 metros, ¿cuántos campos en total tendrían que usar incluyendo el campo base?',
      ['20 campos.', '12 campos.', '8 campos.', '6 campos.'], 3,
      'Desde 5.300 metros y subiendo de 700 en 700 los campos quedan en 5.300, 6.000, 6.700, 7.400, 8.100 y 8.800. El siguiente sería 9.500, que pasa la cumbre de 8.848, así que no se instala. Contando el campo base son seis.',
      'Cuando cuentes posiciones a intervalos regulares, enuméralas; olvidar el punto de partida es el error más común.',
      'media'),
  ],
};

/* La ruta: siete cuestionarios cortos, agrupados por tema. El título lleva el
   personaje del cuadernillo, como en sociales. */
const CUESTIONARIOS = {
  mat: [
    { tema: 'Interpretación de datos', items: [
      { id: 'mat-6',  titulo: 'Aladín · Leer una gráfica',       qs: [0, 1, 3],      tipo: 'Situación' },
      { id: 'mat-7',  titulo: 'Aladín · De la gráfica a la tabla', qs: [7, 8, 16],   tipo: 'Situación' },
      { id: 'mat-8',  titulo: 'Aladín · Gráficas exigentes',      qs: [5, 15, 17],    tipo: 'Situación' },
    ]},
    { tema: 'Estadística descriptiva', items: [
      { id: 'mat-9',  titulo: 'Aladín · Promedios y ponderación', qs: [11, 18],       tipo: 'Situación' },
    ]},
    { tema: 'Tablas y probabilidad', items: [
      { id: 'mat-10', titulo: 'Aladín · Contar posibilidades',    qs: [4, 9],         tipo: 'Situación' },
    ]},
    { tema: 'Proporcionalidad y porcentajes', items: [
      { id: 'mat-11', titulo: 'Aladín · Porcentajes y unidades',  qs: [2, 6, 12, 13], tipo: 'Situación' },
      { id: 'mat-12', titulo: 'Aladín · Razones y distancias',    qs: [10, 19],       tipo: 'Situación' },
    ]},
    { tema: 'Ecuaciones en contexto', items: [
      { id: 'mat-13', titulo: 'Aladín · Qué datos hacen falta',   qs: [14],           tipo: 'Situación' },
    ]},
  ],
};

// Se añade al final para conservar los índices de los cuestionarios existentes.
BANKS.mat.push(M('Interpretación de datos', 'media', 'TABLA', 'ctx-table',
  '<p>Una compañía realizó una encuesta para conocer la cantidad de pacientes que se atendieron por varicela, sarampión y rubéola en el país durante tres años. Los resultados se muestran en la tabla.</p>' +
  '<table class="ctx-table"><tr><th>Enfermedad</th><th>2010</th><th>2011</th><th>2012</th></tr><tr><td>Varicela</td><td>4.000</td><td>5.000</td><td>7.500</td></tr><tr><td>Sarampión</td><td>5.500</td><td>4.500</td><td>6.500</td></tr><tr><td>Rubéola</td><td>3.500</td><td>4.500</td><td>4.000</td></tr></table>',
  'La gráfica que representa la cantidad total de personas atendidas por estas enfermedades durante los tres años observados es',
  [fig('al1-q18-a.webp', 'Barras: varicela cerca de 12.000, sarampión cerca de 14.000 y rubéola cerca de 19.000.'),
   fig('al1-q18-b.webp', 'Línea decreciente: varicela cerca de 8.000, sarampión cerca de 6.000 y rubéola cerca de 4.000.'),
   fig('al1-q18-c.webp', 'Barras: varicela 16.500, sarampión 16.500 y rubéola 12.000.'),
   fig('al1-q18-d.webp', 'Línea: varicela cerca de 4.000, sarampión cerca de 4.500 y rubéola cerca de 4.000.')], 2,
  'Se suman los tres años por enfermedad: varicela, 4.000 + 5.000 + 7.500 = 16.500; sarampión, 5.500 + 4.500 + 6.500 = 16.500; rubéola, 3.500 + 4.500 + 4.000 = 12.000. La gráfica debe mostrar dos barras iguales de 16.500 y una menor de 12.000. Las otras gráficas no representan estos totales.',
  'Para comparar totales de varios años, suma cada fila antes de elegir la gráfica.'));
CUESTIONARIOS.mat[0].items[1].qs.push(20);

for (let i = 0; i < BANKS.mat[20].opts.length; i++) {
  BANKS.mat[20].opts[i] = BANKS.mat[20].opts[i].replace(
    'src="img/figuras/mat/',
    'src="img/figuras/mat/');
}

// URLs verificadas de las figuras: conservamos los UUID ya usados por el historial.
for (const pregunta of BANKS.mat) {
  if (pregunta.context?.includes('src="img/figuras/mat/')) {
    pregunta.identityContext = pregunta.context;
    pregunta.context = pregunta.context.replaceAll('src="img/figuras/mat/', 'src="img/figuras/mat/');
  }
  pregunta.opts = pregunta.opts.map(opcion => opcion.replaceAll('src="img/figuras/mat/', 'src="img/figuras/mat/'));
}
