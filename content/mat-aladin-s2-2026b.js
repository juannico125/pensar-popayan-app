/* Matemáticas · cuadernillo Aladín · segunda sesión · lote 2026-B
 *
 * Fuente: «aladin mates 2.pdf», el cuadernillo «Matemáticas 2» de Aladín, 25
 * preguntas numeradas 22 a 46. Escaneo de pliegos, sin capa de texto.
 *
 * Las 22 figuras están recortadas en img/figuras/mat/. Se localizaron con
 * scripts/detectar-figuras.mjs y se ajustaron a mano las que el detector no
 * aisló bien: las cinco de la 26, la del árbol de la 25 y la recta de la 45.
 *
 * El componente y la dificultad salen de la clasificación de Herman. Aquí
 * aparece la primera pregunta de Trigonometría del banco (la 34), que es la
 * que motivó añadir ese tema.
 *
 * La 23 quedó confirmada al aislar su gráfica con scripts/detectar-figuras.mjs:
 * las barras marcan 10, 12 y 8 donde la tabla dice 8, 12 y 10, que es
 * exactamente intercambiar los grupos I y III.
 *
 * `confianza: 'media'` marca las que dependen de leer bien el escaneo:
 *   · 31 — la relación entre los radios se deduce de que el centro pasa de
 *     (0, 2r) a (4πr, 2r), no está escrita.
 *   · 45 — el enunciado dice «multiplica por 9,2» donde se esperaría 8; puede
 *     ser errata del cuadernillo. La clave no depende de ese número.
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

const BANKS = {
  mat: [
    /* ═════════ 22 ═════════ */
    M('Interpretación de datos', 'media', 'TABLA', 'ctx-table',
      '<p>En la producción de flores bajo invernadero, se utilizan tres diferentes insumos aplicados a cuatro especies. La persona encargada del cultivo evaluó un indicador del crecimiento de las plantas bajo los efectos de cada uno de los insumos.</p>' +
      '<table class="ctx-table"><tr><th>Indicador de crecimiento</th><th>Especie 1</th><th>Especie 2</th><th>Especie 3</th><th>Especie 4</th></tr>' +
      '<tr><td>Insumo 1</td><td>5</td><td>2</td><td>6</td><td>9</td></tr>' +
      '<tr><td>Insumo 2</td><td>18</td><td>15</td><td>10</td><td>16</td></tr>' +
      '<tr><td>Insumo 3</td><td>20</td><td>21</td><td>19</td><td>23</td></tr></table>',
      'Con la información presentada, ¿cuál de los siguientes datos es posible obtener?',
      ['El indicador de crecimiento promedio del insumo 1 en todo el cultivo.',
       'La cantidad total de insumos que deben comprarse semanalmente.',
       'La producción total semanal de la especie 3 alimentada con el insumo 3.',
       'La cantidad del insumo 2 que debe aplicarse a la especie 3.'], 0,
      'La tabla solo trae indicadores de crecimiento, y con los cuatro del insumo 1 se saca su promedio: (5 + 2 + 6 + 9) ÷ 4 = 5,5. Las demás opciones piden cantidades que la tabla no registra: cuánto insumo comprar, cuánto se produce o qué dosis aplicar.',
      'Antes de responder, pregúntate qué mide la tabla. Aquí mide crecimiento, no cantidades ni producción.'),

    /* ═════════ 23 ═════════ */
    M('Interpretación de datos', 'media', 'TABLA Y GRÁFICA', 'ctx-fig',
      '<p>En la tabla se muestra la distribución de frecuencia de los pesos de los paquetes que llegaron a una oficina de correo en un día de trabajo.</p>' +
      '<table class="ctx-table"><tr><th>Grupo</th><th>Peso (libras)</th><th>Frecuencia absoluta</th></tr>' +
      '<tr><td>Grupo I</td><td>Entre 0 y 2,9</td><td>8</td></tr>' +
      '<tr><td>Grupo II</td><td>Entre 3 y 5,9</td><td>12</td></tr>' +
      '<tr><td>Grupo III</td><td>Entre 6 y 9</td><td>10</td></tr></table>' +
      '<p>A partir de la información anterior, un funcionario construyó la siguiente gráfica.</p>' +
      fig('al2-q23-frecuencias.webp', 'Gráfica de barras de frecuencia absoluta por grupo de peso. La barra del grupo I llega a 10 y la del grupo III a 8, al revés de lo que dice la tabla; la del grupo II sí llega a 12.'),
      '¿Qué error se cometió al construir la gráfica?',
      ['Se intercambiaron las frecuencias de los grupos I y III.',
       'Se dejaron las barras sin espacio entre ellas.',
       'Se representó mal el valor de la frecuencia absoluta del grupo II.',
       'Se nombraron incorrectamente los ejes.'], 0,
      'La tabla asigna 8 al grupo I y 10 al grupo III, pero en la gráfica el grupo I llega a 10 y el III a 8: están cambiados de sitio. El grupo II sí queda en 12, y los ejes están bien nombrados.',
      'Compara barra por barra contra la tabla. Cuando dos valores aparecen cruzados, el error es de intercambio, no de escala.'),

    /* ═════════ 24 ═════════ */
    M('Interpretación de datos', 'baja', 'GRÁFICA', 'ctx-fig',
      '<p>La gráfica muestra la cantidad de puntos obtenidos en un juego, durante las primeras seis rondas.</p>' +
      fig('al2-q24-rondas.webp', 'Gráfica de barras con los puntos por ronda: primera 4, segunda 8, tercera 6, cuarta 12, quinta 2 y sexta 6.'),
      'De acuerdo con la información de la gráfica, ¿cuál es el rango de puntos obtenidos en las seis rondas?',
      ['De 4 a 6 puntos.', 'De 4 a 12 puntos.', 'De 2 a 14 puntos.', 'De 2 a 12 puntos.'], 3,
      'El rango va del valor más bajo al más alto que aparecen. El mínimo es 2, en la quinta ronda, y el máximo 12, en la cuarta. El 14 solo es una marca del eje: ninguna barra lo alcanza.',
      'Busca la barra más corta y la más alta. Que el eje llegue más arriba no significa que haya un dato ahí.'),

    /* ═════════ 25 ═════════ */
    M('Tablas y probabilidad', 'media', 'DIAGRAMA', 'ctx-fig',
      '<p>El siguiente diagrama de árbol presenta las relaciones entre cinco acciones aleatorias que puede realizar un brazo mecánico.</p>' +
      fig('al2-q25-arbol.webp', 'Diagrama de árbol. De la acción X salen dos ramas, hacia la acción Y y hacia la acción Z. De la acción Y salen la acción W y la acción V. De la acción Z salen otras dos acciones.'),
      'De acuerdo con el diagrama de árbol, para que el brazo mecánico efectúe la acción V es necesario que realice anteriormente las acciones',
      ['Y, Z y W, porque en el diagrama están antes que la acción V.',
       'X y Y, porque en el diagrama se observa que la acción V depende de estas dos acciones.',
       'Z y W, porque la acción Z depende de la acción W y ambas están antes que la acción V.',
       'X, Y y Z, porque en el diagrama se observa que la acción X siempre debe ser la primera.'], 1,
      'En un árbol solo cuenta el camino que lleva hasta la acción buscada. A V se llega por X y luego Y, así que esas dos son las únicas necesarias. Z está en la otra rama: aparece dibujada, pero no se recorre para llegar a V.',
      'Traza con el dedo el camino desde la raíz hasta la acción que te piden; lo que quede fuera de ese camino no hace falta.'),

    /* ═════════ 26 ═════════ */
    M('Interpretación de datos', 'media', 'GRÁFICA', 'ctx-fig',
      '<p>La gráfica muestra la cantidad de pacientes que asistieron a un consultorio en una mañana.</p>' +
      fig('al2-q26-pacientes.webp', 'Gráfica de barras de pacientes por hora: de 7 a 8, dos pacientes; de 8 a 9, cuatro; de 9 a 10, diez; de 10 a 11, ocho; y de 11 a 12, seis.') +
      '<p>Para el día siguiente, se espera que el número de pacientes se duplique en la hora que hubo menos pacientes, sin alterar la cantidad observada para el resto de las horas.</p>',
      '¿Cuál de las siguientes gráficas representa la cantidad de pacientes en el consultorio, en el siguiente día?',
      [fig('al2-q26-opA.webp', 'Gráfica de barras: 2, 4, 10, 8 y 6 pacientes, igual que la original.'),
       fig('al2-q26-opB.webp', 'Gráfica de barras: 4, 6, 12, 10 y 8 pacientes; todas las horas aumentan.'),
       fig('al2-q26-opC.webp', 'Gráfica de barras con la misma cantidad, cuatro pacientes, en las cinco horas.'),
       fig('al2-q26-opD.webp', 'Gráfica de barras: 4, 4, 10, 8 y 6 pacientes; solo cambia la primera hora.')], 3,
      'La hora con menos pacientes es la de 7 a 8, con dos: duplicarla da cuatro. Todas las demás se quedan como estaban, en 4, 10, 8 y 6. Solo una gráfica cambia únicamente esa primera barra; las otras dejan todo igual, suben todas las horas o aplanan la mañana entera.',
      'Cambia solo lo que el enunciado manda cambiar y verifica que el resto quede idéntico.'),

    /* ═════════ 27 ═════════ */
    M('Proporcionalidad y porcentajes', 'alta', 'TABLA', 'ctx-table',
      '<p>Una empresa productora de tres marcas de artículos para el hogar dona una parte de las utilidades de cada marca a las reservas naturales de la región.</p>' +
      '<table class="ctx-table"><tr><th>Marca</th><th>1</th><th>2</th><th>3</th></tr>' +
      '<tr><td>Costo producción mensual (millones)</td><td>70</td><td>40</td><td>60</td></tr>' +
      '<tr><td>Ventas mensuales (millones)</td><td>100</td><td>60</td><td>—</td></tr>' +
      '<tr><td>Utilidad anual (millones)</td><td>360</td><td>240</td><td>300</td></tr>' +
      '<tr><td>Donación (millones)</td><td>54</td><td>36</td><td>—</td></tr></table>' +
      '<p>Para conocer el valor que cada una de las marcas dona a las reservas, se efectúa el siguiente procedimiento:</p>' +
      '<ol><li>Se realiza la resta entre las ventas y el costo de producción.</li>' +
      '<li>Se multiplica por 12 el valor obtenido en el paso 1.</li>' +
      '<li>Se multiplica por 15 el valor del paso 2, y luego se divide entre 100.</li></ol>' +
      '<p>La persona encargada de las donaciones necesita saber cuánto debe donar la marca número 3, pero ha perdido la información correspondiente a las ventas mensuales de esta marca.</p>',
      'De acuerdo con la información anterior, ¿es posible calcular cuánto debe donar la marca 3?',
      ['No, porque sin el valor de las ventas no se puede calcular el valor que debe donar la marca.',
       'Sí, porque con el valor reportado como utilidad anual se puede realizar el paso 3 del procedimiento.',
       'No, porque se desconoce cuál es el porcentaje de las utilidades anuales que esta marca dona a las reservas.',
       'Sí, porque al dividir las utilidades entre 12 se obtiene el valor de las ventas y con este se puede efectuar el paso 3.'], 1,
      'Los pasos 1 y 2 sirven justamente para llegar a la utilidad anual: en la marca 1, (100 − 70) × 12 = 360, que es lo que dice la tabla. Como la utilidad anual de la marca 3 ya está dada, 300, se puede saltar directo al paso 3: 300 × 15 ÷ 100 = 45 millones. Las ventas no hacen falta.',
      'Si un dato intermedio del procedimiento ya te lo dan, no necesitas reconstruir los pasos que llevan hasta él.'),

    /* ═════════ 28 ═════════ */
    M('Proporcionalidad y porcentajes', 'media', 'TABLA Y GRÁFICA', 'ctx-fig',
      '<p>En la tabla se registran los materiales necesarios para la construcción de un muro; y en la gráfica, el costo total acumulado de los materiales.</p>' +
      '<table class="ctx-table"><tr><th>Material</th><th>Unidades</th><th>Costo unidad ($)</th><th>Costo total ($)</th></tr>' +
      '<tr><td>Ladrillos</td><td>50</td><td>1</td><td>50</td></tr>' +
      '<tr><td>Varillas</td><td>10</td><td>5</td><td>50</td></tr>' +
      '<tr><td>Bulto de arena</td><td>5</td><td>5</td><td>25</td></tr>' +
      '<tr><td>Bulto de cemento</td><td>5</td><td>10</td><td>50</td></tr></table>' +
      fig('al2-q28-acumulado.webp', 'Gráfica de barras del costo acumulado: ladrillos 50 pesos; ladrillos y varillas 100; ladrillos, varillas y bulto de arena 150; y costo total 200.') +
      '<p>Un analista de construcción afirma que la gráfica es inconsistente con los datos presentados en la tabla.</p>',
      '¿Cuál es la inconsistencia que presenta la gráfica?',
      ['El costo total debería ser $ 25, en vez de $ 200.',
       'El costo total debería ser $ 50, en vez de $ 200.',
       'El costo total debería ser $ 125, en vez de $ 200.',
       'El costo total debería ser $ 175, en vez de $ 200.'], 3,
      'Sumando la última columna de la tabla: 50 + 50 + 25 + 50 = 175. La gráfica marca 200, que son 25 pesos de más, justo el valor del bulto de arena que la gráfica ya había contado mal en el tercer escalón.',
      'En una gráfica acumulada, revisa que el último valor coincida con la suma de toda la columna.'),

    /* ═════════ 29 ═════════ */
    M('Proporcionalidad y porcentajes', 'alta', 'FIGURA', 'ctx-fig',
      '<p>Una empresa tiene un sistema de ventas por redes, en el cual cada vendedor (nivel 1) recibe comisiones por sus ventas, por las de vendedores que él haya inscrito (nivel 2) y por las ventas de aquellos que fueron inscritos por las personas que inscribió (niveles 3, 4 y 5).</p>' +
      fig('al2-q29-red.webp', 'Pirámide de una red de ventas con cinco niveles. El nivel 1 recibe 5 % de comisión, el nivel 2 un 4 %, el nivel 3 un 3 %, el nivel 4 un 2 % y el nivel 5 un 1 %. Cada nivel tiene más vendedores que el anterior.') +
      '<p>Una persona afirma que las comisiones de un vendedor que tenga cinco niveles en su red de vendedores equivalen al 10 % de la suma de las ventas de los vendedores de su red más el 5 % de sus ventas.</p>',
      'La afirmación es incorrecta porque',
      ['las comisiones dependen del nivel de cada vendedor.',
       'en el quinto nivel hay mayor cantidad de vendedores.',
       'el vendedor recibiría menos de lo que le corresponde.',
       'en todos los niveles, las comisiones son del mismo valor.'], 0,
      'Los porcentajes de los niveles 2 a 5 suman 4 + 3 + 2 + 1 = 10 %, pero eso no autoriza a aplicarle el 10 % a la suma de todas las ventas: cada nivel cobra su propio porcentaje sobre sus propias ventas. Solo coincidiría si todos los niveles vendieran exactamente lo mismo, y no hay nada que lo garantice.',
      'Un porcentaje sobre una suma no equivale a la suma de porcentajes distintos, salvo que todas las partes sean iguales.'),

    /* ═════════ 30 ═════════ */
    M('Proporcionalidad y porcentajes', 'media', 'SITUACIÓN', 'ctx-sit',
      '<p>David compra tres artículos deportivos en una tienda que ofrecía un descuento por la compra de varios artículos. Una vez recibe su factura, él efectúa la siguiente operación para conocer el valor de su compra sin descuento.</p>' +
      '<p style="font-family:var(--font-mono);text-align:center">675.000 × 100 ÷ 90 = 750.000</p>',
      '¿Qué valores iniciales necesitó David para conocer el valor de su compra sin descuento?',
      ['El valor de cada uno de los artículos comprados sin el descuento.',
       'El valor de dos artículos con descuento y el valor de otros sin descuento.',
       'El valor del dinero que se ahorró y la cantidad de artículos comprados.',
       'El precio total de compra con descuento y el porcentaje de descuento.'], 3,
      'En la cuenta aparecen dos datos: 675.000, que es lo que pagó con el descuento aplicado, y el 90, que sale de restarle al 100 % el 10 % de descuento. Con eso basta; no necesitó el precio de cada artículo ni cuántos eran.',
      'Mira qué números entran en la operación: cada uno tuvo que venir de un dato inicial.'),

    /* ═════════ 31 ═════════ */
    M('Áreas y perímetros', 'alta', 'FIGURA', 'ctx-fig',
      '<p>Dos círculos se encuentran como se presenta en la figura. Si el círculo grande da una vuelta completa hacia la derecha a lo largo del eje x, este cambia su centro del punto (0, 2r) al punto (4πr, 2r).</p>' +
      fig('al2-q31-circulos.webp', 'Dos círculos tangentes al eje x en el origen: el grande, de radio 2r, contiene al pequeño, de radio r, que también toca el eje.'),
      '¿Cuántas vueltas tiene que dar el círculo pequeño para que vuelva a quedar de forma similar dentro del círculo grande?',
      ['Tiene que dar dos vueltas sobre el eje x.',
       'No es posible saber cuántas vueltas tiene que dar, pues falta información sobre los radios.',
       'Tiene que dar una vuelta sobre el eje x.',
       'No es posible saber cuántas vueltas tiene que dar, pues falta información sobre las posiciones.'], 0,
      'Que el centro del círculo grande esté en (0, 2r) dice que su radio es 2r, y que se desplace 4πr en una vuelta lo confirma: su circunferencia es 2π(2r) = 4πr. El pequeño tiene radio r, así que su circunferencia es 2πr, la mitad. Para recorrer los mismos 4πr necesita dos vueltas.',
      'El desplazamiento de una vuelta es la circunferencia. Compara circunferencias y tendrás la razón entre vueltas.',
      'media'),

    /* ═════════ 32 ═════════ */
    M('Áreas y perímetros', 'media', 'FIGURA', 'ctx-fig',
      '<p>El cuadrado de la figura representa una pared de lado 6 m. Sobre esta, Carlos pintó el triángulo sombreado, el cual quiere rellenar de pintura blanca.</p>' +
      fig('al2-q32-triangulo.webp', 'Cuadrado con un triángulo sombreado inscrito: la base del triángulo es el lado inferior completo del cuadrado y su vértice superior toca el lado de arriba.'),
      '¿Cuál es el área de la región triangular que quiere pintar Carlos?',
      ['36 m²', '18 m²', '12 m²', '9 m²'], 1,
      'La base del triángulo es el lado completo del cuadrado, 6 m, y su altura llega hasta el lado opuesto, otros 6 m. El área es base por altura sobre dos: 6 × 6 ÷ 2 = 18 m², justo la mitad del cuadrado, que mide 36 m².',
      'Un triángulo con la misma base y la misma altura que un cuadrado ocupa siempre la mitad, sin importar dónde esté el vértice.'),

    /* ═════════ 33 ═════════ */
    M('Áreas y perímetros', 'alta', 'FIGURA', 'ctx-fig',
      '<p>En la figura se muestra un hexágono regular y un ángulo θ.</p>' +
      fig('al2-q33-hexagono.webp', 'Hexágono regular con sus diagonales trazadas desde el centro, que lo dividen en seis triángulos equiláteros. En uno de los vértices inferiores se marca el ángulo θ, y junto al centro, un ángulo de 60 grados.') +
      '<p>Pedro afirma que el ángulo θ debe ser menor o igual que 100°.</p>',
      'La afirmación de Pedro es',
      ['verdadera, porque la suma de las medidas de los ángulos internos de un hexágono regular es 90° (4) = 360°.',
       'verdadera, porque θ es uno de los ángulos de un cuadrilátero, luego debe ser menor o igual que 360 ÷ 4 = 90°.',
       'falsa, porque θ/2 es uno de los ángulos internos de un triángulo equilátero, luego θ debe ser igual que 60° (2) = 120°.',
       'falsa, porque la suma de las medidas de los ángulos internos de un hexágono regular es 180° (6) = 1.080°.'], 2,
      'Las diagonales parten el hexágono en seis triángulos equiláteros, y la diagonal que llega a ese vértice divide el ángulo θ en dos mitades de 60° cada una. Entonces θ = 120°, mayor que 100°, y Pedro se equivoca. La suma de los ángulos internos de un hexágono es 720°, no 360° ni 1.080°.',
      'En un hexágono regular cada ángulo interno mide 120°: divídelo entre las diagonales que salgan de ese vértice.'),

    /* ═════════ 34 ═════════ */
    M('Trigonometría', 'alta', 'FIGURA', 'ctx-fig',
      '<p>Un grupo de arquitectos quiere calcular la altura de un edificio utilizando los datos de la figura.</p>' +
      fig('al2-q34-edificio.webp', 'Triángulo rectángulo apoyado en un edificio: el ángulo en el suelo mide 60 grados, el cateto horizontal mide 6 metros y el cateto vertical, que es la altura h del edificio, forma el ángulo recto con el suelo.') +
      '<p>Se proponen dos procedimientos para hallar h:</p>' +
      '<p style="font-family:var(--font-mono)"><b>Procedimiento 1:</b> tan(60°) = h ÷ 6 → h = 6 · tan(60°)</p>' +
      '<p style="font-family:var(--font-mono)"><b>Procedimiento 2:</b> h ÷ sen(60°) = 6 ÷ sen(90°) → h = sen(60°) · 6 ÷ sen(90°)</p>',
      'Respecto a estos procedimientos, es verdadero afirmar que',
      ['ambos procedimientos son correctos.', 'ambos procedimientos son incorrectos.',
       'solamente el procedimiento 2 es correcto.', 'solamente el procedimiento 1 es correcto.'], 3,
      'El primero es la definición de tangente: cateto opuesto sobre cateto adyacente, h sobre 6. El segundo usa mal la ley de senos: el lado de 6 metros no se opone al ángulo recto —ese es la hipotenusa—, sino al ángulo de 30°. Debería ser 6 ÷ sen(30°), no 6 ÷ sen(90°).',
      'En la ley de senos, cada lado va con el ángulo que tiene enfrente. Verifica esa correspondencia antes de despejar.'),

    /* ═════════ 35 ═════════ */
    M('Áreas y perímetros', 'media', 'FIGURA', 'ctx-fig',
      '<p>Las medidas de dos ángulos de un triángulo se muestran en la figura.</p>' +
      fig('al2-q35-triangulo-q.webp', 'Triángulo muy achatado: los dos ángulos de la base miden 15 grados cada uno y el ángulo del vértice superior, marcado como Q, es el que se pregunta.'),
      '¿Cuál es la medida del ángulo Q?',
      ['60°', '75°', '150°', '165°'], 2,
      'Los ángulos internos de cualquier triángulo suman 180°. Si dos de ellos miden 15° cada uno, al tercero le quedan 180 − 15 − 15 = 150°. Por eso el triángulo se ve tan achatado.',
      'La suma de los ángulos internos de un triángulo siempre es 180°: réstale los que ya conoces.'),

    /* ═════════ 36 ═════════ */
    M('Funciones y variación', 'alta', 'SITUACIÓN', 'ctx-sit',
      '<p>Si se sabe que la mejor forma para que un satélite de señal televisiva lleve su señal a todo el territorio de un país es que se mueva según la función</p>' +
      '<p style="font-family:var(--font-mono);text-align:center">x = 2 · (−t² + 10)</p>' +
      '<p>donde t es el tiempo en órbita y x es la distancia respecto a la línea del ecuador, y los valores negativos de x representan distancias hacia el sur y los valores positivos de x representan distancias hacia el norte…</p>',
      '¿Cuál es la distancia máxima hacia el norte a la que estará el satélite de la línea del ecuador?',
      /* El signo se dice con palabras: norm() borra el − al calcular el
         hash, y −20 y 20 quedarían como la misma opción. Además es la
         lectura que pide el contexto: el signo es el rumbo. */
      ['20 hacia el sur', '10 hacia el sur', '10 hacia el norte', '20 hacia el norte'], 3,
      'Hacia el norte significa x lo más grande posible. Como t² nunca es negativo, el paréntesis −t² + 10 alcanza su mayor valor cuando t = 0, y ahí vale 10. Entonces x = 2 × 10 = 20.',
      'En una parábola con el término cuadrático negativo, el máximo está donde ese término se anula.'),

    /* ═════════ 37 ═════════ */
    M('Funciones y variación', 'alta', 'SITUACIÓN', 'ctx-sit',
      '<p>Dos funciones continuas se intersectan en los puntos con coordenadas (−2, 0), (0, 6) y (2, 12).</p>',
      '¿Cuál de las siguientes gráficas representa dos funciones que cumplen esto?',
      [fig('al2-q37-opA.webp', 'Dos curvas: una parábola ancha con vértice en (−2, 0) que cruza el eje vertical cerca de 2, y otra casi recta que sube desde (−2, 0) pasando por (0, 6). Se juntan en (−2, 0) y en (2, 12), pero en el eje vertical van separadas.'),
       fig('al2-q37-opB.webp', 'Dos curvas que arrancan juntas en (−2, 0), se vuelven a encontrar sobre el eje vertical a la altura 6 y otra vez en (2, 12).'),
       fig('al2-q37-opC.webp', 'Una sola parábola con vértice en (−2, 0) que llega a (2, 12); hay puntos marcados en el eje vertical a la altura 6 y en (2, 12), pero no hay una segunda curva.'),
       fig('al2-q37-opD.webp', 'Una sola curva en forma de ese que pasa por (−2, 0), por el eje vertical a la altura 6 y por (2, 12); no hay una segunda curva.')], 1,
      'Se necesitan dos curvas que compartan los tres puntos. En una de las gráficas hay dos curvas, pero sobre el eje vertical una va por 2 y la otra por 6: ahí no se cortan, solo coinciden en los extremos. En otras dos está dibujada una única función, así que no hay intersección posible. Queda la que trae dos curvas juntas en (−2, 0), en la altura 6 del eje vertical y en (2, 12).',
      'Verifica los puntos de corte uno por uno sobre los ejes; no te fíes de la forma general de las curvas.',
      'media'),

    /* ═════════ 38 ═════════ */
    M('Tablas y probabilidad', 'alta', 'TABLA', 'ctx-table',
      '<p>En un colegio se ofrecen seis deportes, para los estudiantes que practiquen durante el año. Un estudiante elaboró una tabla que relaciona la cantidad de deportes que puede elegir y la cantidad de posibilidades distintas que hay para seleccionarlos.</p>' +
      '<table class="ctx-table"><tr><th>Cantidad de deportes escogidos</th><th>Número de posibilidades</th></tr>' +
      '<tr><td>2</td><td>6! ÷ (2! · (6 − 2)!) = 15</td></tr>' +
      '<tr><td>3</td><td>6! ÷ (3! · (6 − 3)!) = 20</td></tr></table>' +
      '<p>De un conjunto con n elementos, se deben seleccionar r elementos.</p>' +
      '<p><b>Combinaciones:</b> cuando no importa el orden en el que se selecciona cada deporte, C(n, r) = n! ÷ (r! · (n − r)!).<br>' +
      '<b>Permutaciones:</b> cuando sí importa el orden en que se selecciona cada deporte, P(n, r) = n! ÷ (n − r)!.</p>',
      '¿De acuerdo con la información anterior, es correcta la información que aparece en la tabla?',
      ['No, porque utilizó la fórmula de permutaciones y en este caso no importa el orden en que se escojan los deportes.',
       'No, porque utilizó la fórmula de combinaciones y en este caso sí importa el orden en que se escojan los deportes.',
       'Sí, porque usó la fórmula de permutaciones, puesto que el orden en que se presenten los deportes determina el total de posibilidades.',
       'Sí, porque usó la fórmula de combinaciones, puesto que el orden en que se escojan los deportes no cambia el total de posibilidades.'], 3,
      'La fórmula de la tabla lleva r! en el denominador, que es la de combinaciones. Y es la que corresponde: practicar fútbol y natación es lo mismo que practicar natación y fútbol, así que el orden no cambia nada.',
      'Si intercambiar dos elementos da el mismo resultado, son combinaciones; si da uno distinto, permutaciones.'),

    /* ═════════ 39 ═════════ */
    M('Proporcionalidad y porcentajes', 'media', 'SITUACIÓN', 'ctx-sit',
      '<p>En su infancia, el matemático Carl Friedrich Gauss descubrió una forma rápida para sumar números consecutivos. Por ejemplo, si quería calcular la suma de los números enteros del 1 al 10, seguía este procedimiento:</p>' +
      '<ol><li>Escribir en dos filas los números a sumar, la segunda en orden inverso.</li>' +
      '<li>Sumar los números de cada columna; el resultado en todos los casos es el mismo: 11.</li>' +
      '<li>Como hay 10 columnas, la suma de todos los números de la tabla es 10 × 11 = 110.</li>' +
      '<li>Como se escribió la lista de números del 1 al 10 dos veces, el resultado del paso anterior se divide entre dos: 110 ÷ 2 = 55.</li></ol>' +
      '<p>La idea del procedimiento anterior se puede aplicar a otros problemas similares.</p>',
      'Por ejemplo, ¿cuál es el resultado de sumar los números impares menores que 30: 1 + 3 + 5 + 7 + 9 + 11 + 13 + 15 + 17 + 19 + 21 + 23 + 25 + 27 + 29?',
      ['225', '435', '450', '870'], 0,
      'Aplicando la idea de Gauss: al emparejar el primero con el último se obtiene 1 + 29 = 30, y lo mismo con cada pareja. Hay 15 números, así que la suma es 15 × 30 ÷ 2 = 225. También sale directo: la suma de los primeros 15 impares es 15² = 225.',
      'Empareja el primero con el último y cuenta cuántos términos hay; el resto es una multiplicación.'),

    /* ═════════ 40 ═════════ */
    M('Funciones y variación', 'alta', 'SITUACIÓN', 'ctx-sit',
      '<p>Dada la función definida a trozos</p>' +
      '<p style="font-family:var(--font-mono);text-align:center">f(x) = 4x − 6 &nbsp; si x ≤ 2<br>f(x) = x² − x &nbsp; si x &gt; 2</p>' +
      '<p>Para evaluar la continuidad de la función, se realizan los siguientes pasos:</p>' +
      '<ol><li>Se reemplaza x = 2 en el trozo 4x − 6.</li>' +
      '<li>Se reemplaza x = 2 en el trozo x² − x.</li>' +
      '<li>Se comparan los resultados de los pasos 1 y 2.</li></ol>',
      '¿Cuál es el resultado de la comparación?',
      ['El resultado del paso 1 es mayor.', 'El resultado del paso 2 es mayor.',
       'Los resultados son iguales.', 'Los resultados son incomparables.'], 2,
      'Paso 1: 4 × 2 − 6 = 2. Paso 2: 2² − 2 = 2. Los dos trozos valen lo mismo en x = 2, que es precisamente la condición para que la función no dé un salto ahí.',
      'Evalúa los dos trozos en el punto de corte: si coinciden, la función es continua en ese punto.'),

    /* ═════════ 41 ═════════ */
    M('Áreas y perímetros', 'alta', 'TABLA', 'ctx-table',
      '<p>En un parque hay cuatro puntos (P, Q, R y S), los cuales están conectados por caminos rectos y curvos. La siguiente tabla muestra la distancia que hay entre varios pares de puntos, bien sea por los caminos rectos o por los curvos.</p>' +
      '<table class="ctx-table"><tr><th>Punto inicial</th><th>Punto final</th><th>Camino recto</th><th>Camino curvo</th></tr>' +
      '<tr><td>P</td><td>Q</td><td>3 m</td><td>3,5 m</td></tr>' +
      '<tr><td>P</td><td>R</td><td>4 m</td><td>4,5 m</td></tr>' +
      '<tr><td>Q</td><td>S</td><td>4 m</td><td>4,5 m</td></tr>' +
      '<tr><td>Q</td><td>R</td><td>5 m</td><td>No hay camino</td></tr>' +
      '<tr><td>S</td><td>R</td><td>3 m</td><td>3,5 m</td></tr></table>' +
      '<p>Un estudiante quiere desplazarse desde el punto Q hasta el R, recorriendo la menor distancia. Él sugiere la siguiente ruta: desde el punto Q al S y luego del S al R, por los caminos rectos.</p>',
      'Teniendo en cuenta la información anterior, la solución sugerida por el estudiante es correcta o incorrecta?',
      ['Correcta, porque esta distancia es la misma que si fuera del punto Q al P, y luego del P al R.',
       'Correcta, porque las líneas rectas son las de menor distancia al unir cualquiera de los pares de puntos.',
       'Incorrecta, porque la distancia mínima se obtiene por el camino que une directamente Q y R.',
       'Incorrecta, porque la distancia mínima se obtiene al recorrer un camino curvo en vez de dos rectos.'], 2,
      'La ruta que propone mide 4 + 3 = 7 metros. Pero la tabla trae un camino recto que va directo de Q a R y mide 5 metros, que es menos. Pasar por S alarga el recorrido.',
      'Antes de armar una ruta con escalas, revisa si la tabla ya trae el tramo directo.'),

    /* ═════════ 42 ═════════ */
    M('Áreas y perímetros', 'media', 'FIGURA', 'ctx-fig',
      '<p>El ortocentro se define como el lugar geométrico en el cual se cruzan las tres alturas de un triángulo. En la figura, se le han dibujado las alturas al triángulo MOP.</p>' +
      fig('al2-q42-ortocentro.webp', 'Triángulo MOP con un ángulo recto marcado en el vértice O. Desde O baja una altura que corta el lado MP en el punto Q, también en ángulo recto.'),
      '¿En cuál punto se ubica el ortocentro del triángulo?',
      ['O', 'P', 'Q', 'M'], 0,
      'El triángulo tiene su ángulo recto en O. En un triángulo rectángulo, dos de las alturas son justamente los catetos, y ambos se encuentran en el vértice del ángulo recto; la tercera altura también pasa por ahí. Por eso el ortocentro coincide con O.',
      'En un triángulo rectángulo el ortocentro siempre cae sobre el vértice del ángulo recto.'),

    /* ═════════ 43 ═════════ */
    M('Proporcionalidad y porcentajes', 'media', 'FIGURA', 'ctx-fig',
      '<p>El triángulo de las Bermudas está formado entre Miami, Bermuda y San Juan de Puerto Rico, con las distancias mostradas en la figura.</p>' +
      fig('al2-q43-bermudas.webp', 'Mapa del triángulo de las Bermudas: de Miami a Bermuda 1.035 millas, de Bermuda a San Juan 954 millas y de Miami a San Juan 1.033 millas.'),
      'Si una milla son 1,6 kilómetros, ¿cuál es la distancia en kilómetros que separa Miami de Bermuda en el triángulo?',
      ['625 km', '646,9 km', '1.036,6 km', '1.656 km'], 3,
      'El tramo entre Miami y Bermuda mide 1.035 millas. Pasarlo a kilómetros es multiplicar, no dividir: 1.035 × 1,6 = 1.656 km. Como un kilómetro es más corto que una milla, el número en kilómetros tiene que salir mayor.',
      'Antes de operar, decide si el resultado debe ser mayor o menor que el dato: eso te dice si multiplicas o divides.'),

    /* ═════════ 44 ═════════ */
    M('Proporcionalidad y porcentajes', 'alta', 'SITUACIÓN', 'ctx-sit',
      '<p>Una persona solicita un préstamo a un año de $ 3.000.000. El interés anual es de $ 210.000, por lo que debe pagar un total de $ 3.210.000. La persona difiere este pago a 12 cuotas cada una de</p>' +
      '<p style="font-family:var(--font-mono);text-align:center">3.210.000 ÷ 12 = $ 267.500</p>' +
      '<p>La persona quiere calcular la tasa de interés promedio mensual de su préstamo, y tres de sus amigos le sugieren los siguientes procesos:</p>' +
      '<ol><li>Dividir 210.000 entre tres millones, dividir entre doce y multiplicar por 100.</li>' +
      '<li>Dividir 210.000 entre tres millones y multiplicar por 100.</li>' +
      '<li>Dividir 267.500 entre tres millones, dividir entre doce y multiplicar por 100.</li></ol>',
      '¿Cuál o cuáles de los anteriores procesos sirven para calcular el interés promedio mensual del préstamo?',
      ['1 y 3 solamente.', '2 y 3 solamente.', '1 solamente.', '2 solamente.'], 2,
      'El interés del año es 210.000 sobre un capital de 3.000.000, o sea el 7 % anual; repartido entre 12 meses da cerca del 0,58 % mensual, que es lo que hace el primer proceso. El segundo se queda en la tasa anual, sin dividir entre doce. El tercero parte de 267.500, que es la cuota completa e incluye la devolución del capital, no solo el interés.',
      'Separa siempre el interés del capital: la cuota mensual contiene los dos y no sirve para calcular la tasa.'),

    /* ═════════ 45 ═════════ */
    M('Funciones y variación', 'media', 'GRÁFICA', 'ctx-fig',
      '<p>Una ciudad tiene un proyecto para recuperar sus humedales. La inversión que debe realizarse para recuperar las hectáreas de humedales está modelada por una función lineal como se muestra en la gráfica.</p>' +
      fig('al2-q45-humedales.webp', 'Recta creciente de inversión en millones de pesos frente a hectáreas recuperadas. Empieza cerca de 500 millones cuando no hay hectáreas y llega a unos 3.000 millones en seis hectáreas; el eje solo llega hasta seis hectáreas.') +
      '<p>Para determinar la inversión necesaria para recuperar 8 hectáreas de humedales, se calcula primero la inversión para recuperar una hectárea y después ese valor se multiplica.</p>',
      'Este procedimiento es',
      ['correcto, porque la inversión es directamente proporcional a la cantidad de hectáreas por recuperar.',
       'incorrecto, porque solo aparece la inversión hasta seis hectáreas de humedal por recuperar.',
       'correcto, porque a medida que aumenta la cantidad de hectáreas aumenta la inversión.',
       'incorrecto, porque se espera que cuantas más hectáreas se recuperen, la inversión empiece a disminuir.'], 1,
      'La gráfica solo llega hasta seis hectáreas, así que sacar de ahí el valor de ocho es salirse de lo que el modelo muestra. Además la recta no arranca en cero: ya con cero hectáreas hay una inversión de base, de modo que multiplicar el valor de una hectárea tampoco funcionaría. Que la inversión aumente es cierto, pero eso no valida el procedimiento.',
      'Una recta que no pasa por el origen no representa una proporcionalidad directa, aunque suba siempre.',
      'media'),

    /* ═════════ 46 ═════════ */
    M('Estadística descriptiva', 'media', 'TABLA', 'ctx-table',
      '<p>En un colegio, se realizó una encuesta a los estudiantes de un curso para conocer la cantidad de veces que les ha citado sus acudientes al colegio. Los resultados se muestran en la tabla.</p>' +
      '<table class="ctx-table"><tr><th>Número de citaciones en el año</th><th>Cantidad de estudiantes</th></tr>' +
      '<tr><td>0</td><td>7</td></tr><tr><td>1</td><td>5</td></tr>' +
      '<tr><td>2</td><td>6</td></tr><tr><td>3</td><td>4</td></tr></table>',
      'Si se requiere calcular la mediana y la moda del número de citaciones en el año, ¿cuál o cuáles de estas medidas de tendencia central es posible calcular con la información de la tabla?',
      ['La moda pero no la mediana.', 'La mediana pero no la moda.',
       'La mediana y la moda.', 'Ni la mediana ni la moda.'], 2,
      'La moda es el valor que más se repite: cero citaciones, con 7 estudiantes. Y la mediana también sale: hay 22 estudiantes en total, así que hay que mirar los que ocupan las posiciones 11 y 12; ambos caen dentro del grupo de una citación, de modo que la mediana es 1.',
      'Una tabla de frecuencias basta para las dos: la moda se lee directo y la mediana se ubica acumulando.'),
  ],
};

/* La ruta: diez cuestionarios cortos por tema, continuando la numeración de
   Aladín S1, que llegó hasta mat-13. */
const CUESTIONARIOS = {
  mat: [
    { tema: 'Interpretación de datos', items: [
      { id: 'mat-14', titulo: 'Aladín · Qué dice una tabla',      qs: [0, 1],          tipo: 'Situación' },
      { id: 'mat-15', titulo: 'Aladín · Comparar gráficas',       qs: [2, 4],          tipo: 'Situación' },
    ]},
    { tema: 'Tablas y probabilidad', items: [
      { id: 'mat-16', titulo: 'Aladín · Contar y decidir',        qs: [3, 16],         tipo: 'Situación' },
    ]},
    { tema: 'Proporcionalidad y porcentajes', items: [
      { id: 'mat-17', titulo: 'Aladín · Porcentajes en contexto', qs: [5, 6, 7],       tipo: 'Situación' },
      { id: 'mat-18', titulo: 'Aladín · Descuentos e intereses',  qs: [8, 17, 21, 22], tipo: 'Situación' },
    ]},
    { tema: 'Áreas y perímetros', items: [
      { id: 'mat-19', titulo: 'Aladín · Figuras planas',          qs: [9, 10, 11],     tipo: 'Situación' },
      { id: 'mat-20', titulo: 'Aladín · Ángulos y recorridos',    qs: [13, 19, 20],    tipo: 'Situación' },
    ]},
    { tema: 'Trigonometría', items: [
      { id: 'mat-21', titulo: 'Aladín · Razones trigonométricas', qs: [12],            tipo: 'Situación' },
    ]},
    { tema: 'Funciones y variación', items: [
      { id: 'mat-22', titulo: 'Aladín · Funciones y gráficas',    qs: [14, 15, 18, 23], tipo: 'Situación' },
    ]},
    { tema: 'Estadística descriptiva', items: [
      { id: 'mat-23', titulo: 'Aladín · Mediana y moda',          qs: [24],            tipo: 'Situación' },
    ]},
  ],
};

// URLs verificadas de las figuras: conservamos los UUID ya usados por el historial.
for (const pregunta of BANKS.mat) {
  if (pregunta.context?.includes('src="img/figuras/mat/')) {
    pregunta.identityContext = pregunta.context;
    pregunta.context = pregunta.context.replaceAll('src="img/figuras/mat/', 'src="img/figuras/mat/');
  }
  pregunta.opts = pregunta.opts.map(opcion => opcion.replaceAll('src="img/figuras/mat/', 'src="img/figuras/mat/'));
}
