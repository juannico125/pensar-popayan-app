/* Física · formulario 1 (F1, Pato Donald) · lote 2026-B
 *
 * Preguntas 97 a 116 del cuadernillo escaneado. La clasificación por tema
 * viene escrita a mano por el docente en el propio cuadernillo, igual que la
 * de Herman en matemáticas: torques, cinemática, termodinámica, ondas,
 * dinámica y «CL» (lectura de datos).
 *
 * Qué se dibujó y qué se recortó. Se dibujan las gráficas cuyos datos están
 * en el enunciado —la del paracaidista, la de las tres pelotas— y las tablas,
 * que en la plataforma son tablas de verdad y no fotocopias. Se recorta lo
 * que es un dibujo: la bicicleta, la grúa, la cubeta de ondas, los diagramas
 * de flujo de la 100 y las cuatro gráficas de la 109. Estas últimas se
 * recortan a propósito: la diferencia entre la recta correcta y la recta
 * distractora es justo lo que la pregunta evalúa, y redibujarlas sería
 * decidir yo esa diferencia.
 *
 * Los recortes de opción NO incluyen la letra. Las opciones se barajan por
 * estudiante, así que una imagen que dijera «C.» junto a la opción A sería
 * una trampa.
 *
 * Claves propuestas por el modelo. Ninguna tiene revisión docente todavía.
 */

const IMG = 'img/figuras/fis/';
const P = txt => `<p>${txt}</p>`;
const F = (archivo, alt) =>
  `<figure class="ctx-fig"><img src="${IMG}${archivo}.webp" loading="lazy" alt="${alt}"></figure>`;

const BANKS = { fis: [] };
const Q = (numero, comp, dificultad, context, text, opts, correct, exp, tip, extra = {}) =>
  BANKS.fis.push({ numero, comp, dificultad, ctxLabel: 'FÍSICA', ctxClass: 'ctx-sit',
                   context, text, opts, correct, exp, tip, ...extra });

/* ═════════ 97 · torque ═════════ */
Q(97, 'Dinámica y fuerzas', 'media',
  P('Una estudiante aplica dos fuerzas de igual magnitud en distintas partes a cuatro barras, como se muestra en la siguiente figura.') +
  F('f1-q97-barras', 'Cuatro barras horizontales, cada una con su centro de masa marcado en el punto medio. En la barra 1, F1 apunta hacia abajo en el extremo derecho y F2 hacia arriba en el extremo izquierdo. En la barra 2, F2 apunta hacia abajo en el extremo izquierdo y F1 hacia abajo en el derecho. En la barra 3, F1 apunta hacia abajo en el extremo izquierdo y F2 hacia arriba en el derecho. En la barra 4, F1 hacia abajo y F2 hacia arriba, las dos sobre el mismo extremo derecho.') +
  P('El estudiante sabe que dependiendo de dónde se apliquen las fuerzas en las barras, estas pueden rotar respecto al centro de masa, moverse sin rotar o permanecer quietas.'),
  '¿En qué barra la aplicación de las fuerzas produce que la barra gire en el sentido opuesto al de las manecillas del reloj?',
  ['En la barra 1.', 'En la barra 2.', 'En la barra 3.', 'En la barra 4.'], 2,
  'Un par de fuerzas hace girar la barra cuando empujan en sentidos contrarios a lados distintos del centro. En la barra 3 la fuerza de la izquierda baja y la de la derecha sube: el extremo izquierdo cae y el derecho asciende, que es el giro contrario al del reloj. En la barra 1 pasa lo mismo pero al revés, y gira con el reloj. En la barra 2 las dos fuerzas bajan, así que la barra desciende sin girar, y en la barra 4 ambas actúan sobre el mismo punto y se anulan.',
  'Mira a qué lado del centro actúa cada fuerza y hacia dónde apunta: el giro lo decide esa combinación, no la magnitud.');

/* ═════════ 98 · caída con rozamiento ═════════ */
Q(98, 'Cinemática', 'baja',
  P('Un paracaidista se lanza de un avión y registra su rapidez de caída en función del tiempo en la siguiente gráfica.') +
  curvas([{ trazo: 'continuo',
            puntos: Array.from({ length: 40 }, (_, i) => {
              const t = 1 + i * (18 / 39);
              return [t, 40 * (1 - Math.exp(-(t - 1) / 1.05))];
            }) }], {
    ejeX: 'Tiempo (s)', ejeY: 'Rapidez (m/s)', alto: 290,
    xBase: 1, xTope: 19, xMarcas: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19], tope: 40, paso: 5,
    alt: 'Curva de rapidez contra tiempo. Sube muy rápido desde cero durante los primeros segundos y a partir de los 5 segundos se aplana en 40 metros por segundo, donde se mantiene hasta el final de la gráfica.',
  }),
  'A partir de la información anterior, luego de 7 segundos el paracaidista',
  ['aumenta su rapidez.', 'mantiene su rapidez en 0 m/s.', 'disminuye su rapidez.', 'mantiene su rapidez en 40 m/s.'], 3,
  'Después de los primeros segundos la curva deja de subir y se vuelve horizontal a la altura de 40 en el eje vertical. Una gráfica plana significa rapidez constante: a los 7 segundos, y de ahí en adelante, el paracaidista cae siempre a 40 metros por segundo. Es la rapidez límite, cuando la resistencia del aire iguala al peso.',
  'En una gráfica de rapidez contra tiempo lo que importa es la inclinación: plana es rapidez constante, no rapidez cero.');

/* ═════════ 99 · analogía del flujo de calor ═════════ */
Q(99, 'Termodinámica', 'media',
  P('Un estudiante modela el flujo de calor entre dos objetos (P y Q), a partir de una analogía con el movimiento del agua contenida en dos recipientes.') +
  P('El estudiante observa que cuando se conectan dos recipientes con niveles y cantidades de agua diferentes (ver figura), el agua se mueve del recipiente P al recipiente Q, hasta que los dos recipientes tienen el mismo nivel de agua.') +
  F('f1-q99-recipientes', 'Dos recipientes comunicados por un tubo en la base. El recipiente P es angosto y su nivel de agua es alto; el recipiente Q es ancho y su nivel es más bajo. Una línea punteada marca el nivel del agua en P, por encima del nivel de Q.') +
  P('En el modelo, el nivel del líquido representará la temperatura y la cantidad de líquido representará la energía térmica (que se puede transferir como calor).'),
  'Según el modelo, si se colocan dos objetos de diferentes tamaños (Volumen<sub>Q</sub> &gt; Volumen<sub>P</sub>) y temperaturas (Temperatura<sub>P</sub> &gt; Temperatura<sub>Q</sub>), ¿cómo será el flujo de calor?',
  ['De Q a P, porque fluiría del cuerpo con mayor calor al cuerpo con menor calor.',
   'De P a Q, porque fluiría del cuerpo con mayor temperatura al cuerpo con menor temperatura.',
   'De P a Q, porque fluiría del cuerpo con menor temperatura al cuerpo con mayor temperatura.',
   'De Q a P, porque fluiría del cuerpo con menor calor al cuerpo con mayor calor.'], 1,
  'En la analogía el agua no se mueve hacia donde hay más agua, sino hacia donde el nivel es más bajo: en la figura P está más alto aunque Q contenga más líquido. Como el nivel representa la temperatura, el calor va del objeto más caliente al más frío. P tiene mayor temperatura, así que el calor fluye de P a Q, aunque Q sea más grande y guarde más energía térmica.',
  'Separa «cuánta energía tiene un cuerpo» de «qué tan caliente está»: lo que decide hacia dónde va el calor es lo segundo.');

/* ═════════ 100 · procedimiento experimental ═════════ */
Q(100, 'Cinemática', 'media',
  P('Un grupo de estudiantes pretende verificar las características del movimiento rectilíneo uniforme. Para ello, los estudiantes establecen una distancia fija que va a mover un carrito, luego realizan 3 mediciones del tiempo que emplea el carrito para recorrerla. Estos tiempos se promedian, y la distancia se divide entre ese valor para calcular un indicador de velocidad.'),
  'Teniendo en cuenta la información anterior, ¿cuál de las siguientes carteleras, con secuencias, muestra correctamente el procedimiento efectuado por los estudiantes?',
  [F('f1-q100-a', 'Secuencia: medir distancia, luego medir tiempos, luego promediar tiempos, luego dividir distancia entre tiempos promedio y por último calcular indicador de velocidad.'),
   F('f1-q100-b', 'Secuencia que arranca en medir tiempos y va hacia medir distancia; de medir tiempos baja a calcular indicador de velocidad, que lleva a dividir distancia entre tiempos promedio y de ahí sube a promediar tiempos.'),
   F('f1-q100-c', 'Secuencia que arranca en medir tiempos y va hacia medir distancia; de medir tiempos sigue a promediar tiempos y baja a dividir distancia entre tiempos promedio; calcular indicador de velocidad apunta hacia medir distancia.'),
   F('f1-q100-d', 'Secuencia: medir distancia baja a calcular indicador de velocidad, que lleva a medir tiempos, que sube a dividir distancia entre tiempos promedio y de ahí a promediar tiempos.')], 0,
  'El enunciado describe un orden que no se puede alterar: primero se fija la distancia, después se cronometra tres veces, luego se promedian esos tiempos, y solo entonces se divide la distancia entre el promedio para obtener la velocidad. La cartelera correcta es la única que encadena los cinco pasos en ese orden y termina en el cálculo del indicador. Las demás invierten flechas o ponen el cálculo antes de tener los datos, es decir, dividen antes de haber promediado.',
  'Lee el procedimiento como una receta y numera los pasos; después busca la cartelera cuyas flechas siguen esa numeración sin saltos.');

/* ═════════ 101 · equilibrio térmico ═════════ */
Q(101, 'Termodinámica', 'alta',
  P('Un estudiante coloca un recipiente con agua caliente junto con otro con agua fría; a través de las paredes de los recipientes se establecerá un flujo de energía calorífica y, pasado un tiempo, estos llegarán a un equilibrio térmico con el ambiente (ver Figura 1).') +
  F('f1-q101-equilibrio', 'Figura 1: dos recipientes contiguos, uno con agua caliente y otro con agua fría, con flechas de flujo de calor que salen del agua caliente hacia el agua fría y hacia el exterior. Figura 2: los mismos dos recipientes, ahora encerrados dentro de una caja de icopor sellada.'),
  'Con base en el modelo de equilibrio térmico planteado con anterioridad, ¿qué pasará si los dos recipientes se dejaran aislados dentro de una caja de icopor sellada (ver Figura 2) a una temperatura intermedia entre el agua caliente y la fría?',
  ['Aumentará únicamente la temperatura del agua caliente, porque en los sitios cerrados el que cede la energía es el cuerpo con menor temperatura.',
   'Disminuirá la temperatura del agua caliente y de la fría, y aumentará la temperatura de la caja, porque el medio absorbe toda la energía del agua.',
   'Disminuirá únicamente la temperatura del agua fría, porque en sitios cerrados el cuerpo que cede energía es el cuerpo con la menor temperatura.',
   'Aumentará la temperatura del agua fría, porque el cuerpo con mayor temperatura siempre cede energía a los cuerpos más fríos.'], 3,
  'El calor siempre va del cuerpo más caliente al más frío, dentro o fuera de una caja. Al aislarlos, el agua caliente se enfría y la fría se calienta hasta que las dos igualan la temperatura. Las opciones que hacen ceder energía al cuerpo más frío invierten esa regla, y la que enfría las dos aguas a la vez no puede ser: si ambas bajaran de temperatura, esa energía no tendría a dónde ir dentro de una caja sellada.',
  'En un recinto aislado nada se pierde: lo que un cuerpo cede, otro lo recibe. Pregúntate quién cede y quién recibe.');

/* ═════════ 102 · torque en la bicicleta ═════════ */
Q(102, 'Dinámica y fuerzas', 'media',
  P('Una estudiante lee que el torque se da cuando se aplica una fuerza en algún punto de un cuerpo y este tiende a realizar un movimiento de rotación respecto a otro punto. La estudiante analiza que cuando una persona monta en bicicleta ejerce una fuerza (F) en el pedal hacia abajo, como muestra la figura.') +
  F('f1-q102-bicicleta', 'Ciclista sobre una bicicleta. Una ampliación señala el manubrio, la cadena y el plato; sobre el pedal se dibuja la fuerza F apuntando hacia abajo.'),
  'Si el estudiante quiere medir el torque que permite el desplazamiento de la bicicleta, ¿cuál de los siguientes puntos de la bicicleta es el más adecuado para hacerlo?',
  ['El extremo inferior de la cadena.', 'El centro de la rueda delantera.', 'El centro del plato.', 'El centro del manubrio.'], 2,
  'El torque se mide respecto al punto alrededor del cual gira el cuerpo sobre el que se aplica la fuerza. La fuerza del pie actúa sobre el pedal, y el pedal gira alrededor del eje del plato: ese es el centro de giro que corresponde. La cadena no es un punto de rotación sino lo que transmite el movimiento, y ni la rueda delantera ni el manubrio reciben la fuerza del pedaleo.',
  'Para hablar de torque hace falta un eje de giro. Busca alrededor de qué punto gira exactamente aquello sobre lo que se aplica la fuerza.');

/* ═════════ 103 · leer una tabla de tres variables ═════════ */
Q(103, 'Termodinámica', 'media',
  P('En un experimento se tomaron medidas de la variación del volumen (ΔV) de un cubo de un material elástico (respecto a un volumen de referencia), de su temperatura (T) y de la presión (P) a la que se sometía. Los datos del experimento se muestran en la tabla.') +
  '<table class="ctx-table">' +
  '<tr><th>P (atm)</th><th colspan="4"></th></tr>' +
  '<tr><td rowspan="2">1,0</td><td>T (°C)</td><td>32</td><td>35</td><td>40</td></tr>' +
  '<tr><td>ΔV (cm<sup>3</sup>)</td><td>1,1</td><td>1,6</td><td>1,9</td></tr>' +
  '<tr><td rowspan="2">1,1</td><td>T (°C)</td><td>31</td><td>36</td><td>39</td></tr>' +
  '<tr><td>ΔV (cm<sup>3</sup>)</td><td>0,9</td><td>1,2</td><td>1,4</td></tr>' +
  '<tr><td rowspan="2">1,3</td><td>T (°C)</td><td>29</td><td>33</td><td>38</td></tr>' +
  '<tr><td>ΔV (cm<sup>3</sup>)</td><td>0,7</td><td>0,8</td><td>1,0</td></tr>' +
  '</table>',
  'Teniendo en cuenta la información anterior, ¿cuál de los siguientes sería el título más apropiado para esta tabla?',
  ['Variación del volumen con la temperatura a diferentes presiones.',
   'Comportamiento de la temperatura y el volumen a diferentes presiones.',
   'Comportamiento de la temperatura con la presión a diferentes volúmenes.',
   'Variación del volumen y la presión a diferentes temperaturas.'], 0,
  'La tabla tiene tres presiones fijas, y dentro de cada una se anotan parejas de temperatura y variación de volumen. Es decir, la presión es la condición que se mantiene constante en cada bloque, la temperatura es lo que se hace variar y el volumen es lo que se mide como respuesta. Un título fiel tiene que decir eso: cómo cambia el volumen con la temperatura, y que se repitió a varias presiones. Los otros títulos cambian de lugar cuál variable se mide y cuál se controla.',
  'En una tabla, distingue qué se fija, qué se hace variar y qué se mide. El título se escribe en ese orden.');

/* ═════════ 104 · empuje ═════════ */
Q(104, 'Dinámica y fuerzas', 'baja',
  P('Un dinamómetro es un instrumento que se utiliza para medir fuerzas. Cuanto más se estira el resorte del dinamómetro, mayor es la fuerza que se ejerce sobre este. En la siguiente figura se muestra un dinamómetro en dos situaciones. En la primera, un objeto atado al dinamómetro cuelga en el aire y en la segunda, el objeto está sumergido en agua.') +
  F('f1-q104-dinamometro', 'Dos dinamómetros de resorte. En la situación 1 el resorte, más estirado, sostiene un bloque colgando en el aire. En la situación 2 el mismo bloque cuelga sumergido dentro de un recipiente con agua y el resorte aparece menos estirado.') +
  P('Los estudiantes notan que la fuerza registrada por el dinamómetro es menor en la situación 2 que en la situación 1.'),
  '¿Cuál es la fuerza que hace que ocurra esto?',
  ['La fricción.', 'La normal.', 'El empuje.', 'El peso.'], 2,
  'El peso del objeto no cambió al meterlo en el agua: sigue teniendo la misma masa. Lo que aparece es una fuerza hacia arriba que el líquido ejerce sobre el cuerpo sumergido, el empuje, y que ayuda al resorte a sostenerlo. Como el resorte tiene que hacer menos fuerza, se estira menos y el dinamómetro marca menos. La normal aparece cuando un cuerpo se apoya en una superficie, y la fricción cuando hay deslizamiento; aquí el cuerpo cuelga.',
  'Si un cuerpo pesa lo mismo pero el instrumento marca menos, es que apareció otra fuerza empujando hacia arriba.');

/* ═════════ 105 · tres lanzamientos ═════════ */
Q(105, 'Cinemática', 'alta',
  P('Se lanzan tres pelotas, L, M y N, desde la azotea de un edificio de 30 m de altura. La siguiente gráfica muestra la altura de las pelotas como función del tiempo.') +
  (() => {
    const par = (v0, tf) => {
      const pts = [];
      for (let i = 0; i <= 30; i++) {
        const t = tf * i / 30;
        const h = 30 + v0 * t - 5 * t * t;
        if (h >= 0) pts.push([t, h]);
      }
      return pts;
    };
    return curvas([
      { nombre: 'L', trazo: 'punteado', puntos: par(-9.15, 1.75), rotulo: [0.72, 13] },
      { nombre: 'M', trazo: 'rayado',   puntos: par(0, 2.5),      rotulo: [1.35, 22] },
      { nombre: 'N', trazo: 'continuo', puntos: par(8.93, 3.5),   rotulo: [1.95, 33] },
    ], {
      ejeX: 'Tiempo (s)', ejeY: 'Altura (m)', alto: 300,
      xTope: 3.5, xMarcas: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], tope: 40, paso: 5,
      alt: 'Tres curvas que parten de 30 metros de altura en el instante cero. La punteada, L, baja y toca el suelo antes de los 2 segundos. La de rayas, M, baja algo más despacio y toca el suelo cerca de los 2,5 segundos. La continua, N, primero sube hasta unos 34 metros y después baja, tocando el suelo cerca de los 3,5 segundos.',
    });
  })(),
  'Teniendo en cuenta la información de la gráfica, ¿en qué orden llegan las pelotas al piso?',
  ['Primero L, después N y por último M.', 'Primero N, después M y por último L.',
   'Primero M, después L y por último N.', 'Primero L, después M y por último N.'], 3,
  'Llegar al piso es que la curva toque el eje horizontal, es decir, altura cero. La punteada corta primero, antes de los 2 segundos; la de rayas después, cerca de 2,5; y la continua de última, cerca de 3,5, porque antes de caer subió por encima del edificio. El orden se lee de izquierda a derecha sobre el eje del tiempo, no por cuál curva está más arriba al principio.',
  'No mires qué tan alto llega cada una: mira en qué instante cada curva llega a altura cero.');

/* ═════════ 106 · unidades de una tabla ═════════ */
Q(106, 'Cinemática', 'baja',
  P('Un vuelo comercial, que transporta aproximadamente 500 pasajeros por vuelo, maneja una tabla como la siguiente para calcular el combustible necesario en cada trayecto.') +
  '<table class="ctx-table">' +
  '<tr><th>Kilómetros</th><th>Litros</th></tr>' +
  '<tr><td>1,6</td><td>19</td></tr><tr><td>3,2</td><td>38</td></tr>' +
  '<tr><td>4,8</td><td>57</td></tr><tr><td>6,4</td><td>76</td></tr></table>',
  'A partir de la información anterior, ¿cuáles serían los títulos apropiados para las columnas de la tabla, respectivamente?',
  ['Área y volumen.', 'Distancia y tipo de combustible.',
   'Cantidad de personas y volumen.', 'Distancia y volumen.'], 3,
  'Hay que fijarse en qué mide cada unidad. El kilómetro mide longitud recorrida, o sea distancia; el litro mide capacidad, o sea volumen. Los 500 pasajeros aparecen en el enunciado pero no en la tabla, y el tipo de combustible sería un nombre, no un número. El área se mediría en unidades al cuadrado, que no es el caso.',
  'Antes de elegir, pregúntate qué magnitud mide cada unidad: el kilómetro y el litro no miden lo mismo.');

/* ═════════ 107 · amplitud de la ola ═════════ */
Q(107, 'Ondas y sonido', 'media',
  P('Cuando una ola se acerca a la costa, se puede representar su movimiento como una onda (ver figura).') +
  F('f1-q107-ola', 'Corte vertical del mar acercándose a la costa. El fondo asciende desde la izquierda, donde el agua es profunda, hasta la costa, a la derecha, donde es somera. Una flecha punteada indica el sentido de avance de la ola hacia la costa.'),
  'Si la amplitud de una onda se entiende como la altura que tienen sus puntos más altos, ¿cómo cambia la amplitud de la ola a medida que se acerca a la costa?',
  ['Aumenta a medida que aumenta la profundidad.', 'Es constante para cualquier profundidad.',
   'Aumenta a medida que se reduce la profundidad.', 'Disminuye a medida que disminuye la profundidad.'], 2,
  'La figura muestra que el fondo sube conforme la ola se acerca a la costa, así que la profundidad disminuye. Al tener menos agua debajo, la ola se frena y la energía que traía se acumula en menos espacio: la ola se encrespa y sus crestas se vuelven más altas. Por eso las olas rompen cerca de la orilla y no en mar abierto.',
  'Sigue el fondo en la figura: la respuesta depende de qué le pasa a la profundidad, no de qué le pasa a la distancia.');

/* ═════════ 108 · máquina de Atwood ═════════ */
Q(108, 'Dinámica y fuerzas', 'alta',
  P('Una grúa levanta una caja de masa (m), como se muestra en la Figura 1.') +
  F('f1-q108-grua', 'Figura 1: una grúa con su pluma sostiene una caja rotulada m, colgada de un cable.') +
  P('El funcionamiento de la grúa puede modelarse como una máquina de Atwood. En este modelo, como lo muestra la Figura 2, se aplica una fuerza F<sub>motor</sub> sobre una cuerda que produce, sobre esta, una tensión T, con la finalidad de levantar un cuerpo de peso mg.') +
  F('f1-q108-atwood', 'Figura 2: una polea con una cuerda. De un lado cuelga un bloque de peso mg, sobre el que la cuerda ejerce una tensión T hacia arriba. Del otro lado de la polea se tira de la cuerda con la fuerza F del motor, dirigida hacia abajo.'),
  '¿Qué predicción puede hacerse a partir del modelo?',
  ['F<sub>motor</sub> está dirigida en sentido contrario al peso.',
   'Para levantar la caja, se necesitará que la magnitud de T sea mayor que su peso.',
   'Es posible levantar la caja si la magnitud de T es menor que el peso de la caja.',
   'La grúa levantará la caja sin importar la magnitud de F<sub>motor</sub>.'], 1,
  'Sobre la caja actúan dos fuerzas opuestas: el peso, que tira hacia abajo, y la tensión de la cuerda, que tira hacia arriba. Mientras las dos sean iguales la caja se queda quieta; para que suba, la tensión tiene que superar al peso. Si fuera menor, la caja bajaría. Y en la figura la fuerza del motor tira hacia abajo del otro lado de la polea, es decir, en el mismo sentido que el peso, no en el contrario.',
  'Para que un cuerpo arranque hacia arriba, la suma de fuerzas debe apuntar hacia arriba. Compara la tensión con el peso.');

/* ═════════ 109 · dilatación lineal ═════════ */
Q(109, 'Termodinámica', 'media',
  P('La expansión térmica es el fenómeno físico que experimenta un cuerpo al calentarse. Conforme aumenta la temperatura del objeto aumenta su tamaño, y sus cambios de longitud son proporcionales a los cambios de temperatura.') +
  P('Un alambre de cobre de longitud inicial de 1,00000 metros a una temperatura de 20 °C se calienta hasta alcanzar los 50 °C y llega a una longitud final de 1,00051 metros.'),
  '¿Cuál de las siguientes gráficas de longitud como función de la temperatura describe la situación anterior?',
  [F('f1-q109-a', 'Gráfica de longitud contra temperatura: una recta que sube de manera uniforme desde 1,00000 metros a los 20 grados hasta 1,00051 metros a los 50 grados.'),
   F('f1-q109-b', 'Gráfica de longitud contra temperatura: una curva que se mantiene casi plana en 1,00000 metros y solo al final, cerca de los 50 grados, se dispara hacia arriba.'),
   F('f1-q109-c', 'Gráfica de longitud contra temperatura: una recta que arranca por debajo de 1,00000 metros antes de los 20 grados y sube con más inclinación, superando 1,00051 antes de llegar a los 50 grados.'),
   F('f1-q109-d', 'Gráfica de longitud contra temperatura: una curva que sube muy rápido al principio y después se aplana, quedando casi horizontal en 1,00051 metros.')], 0,
  'El enunciado dice que los cambios de longitud son proporcionales a los cambios de temperatura. Proporcional significa que a cada grado que sube corresponde siempre el mismo estiramiento, y eso en una gráfica es una línea recta. Además la recta debe salir de 1,00000 a los 20 grados y llegar a 1,00051 a los 50, que son los dos datos medidos. Las curvas no sirven porque en ellas el estiramiento por grado cambia según el tramo, y la recta que no pasa por los dos puntos medidos tampoco.',
  'Traduce «proporcional» a una forma: es una recta. Después comprueba que pase por los dos valores que da el texto.');

/* ═════════ 110 · hipótesis y datos ═════════
   La tabla del cuadernillo trae los tres tiempos de la hoja lisa en 1,10 y un
   promedio de 1,06, que no cuadra. Se transcribe tal como está impresa: la
   incoherencia es de la fuente y no cambia la respuesta, que va sobre el tipo
   de afirmación y no sobre los números. Queda para revisión docente. */
Q(110, 'Cinemática', 'alta',
  P('Una estudiante suelta dos hojas de papel iguales desde la misma altura. Sin embargo, una está arrugada y la otra no. La estudiante mide los tiempos de caída y los organiza en la tabla.') +
  '<table class="ctx-table">' +
  '<tr><th></th><th>Tiempo I (s)</th><th>Tiempo II (s)</th><th>Tiempo III (s)</th><th>Tiempo promedio (s)</th></tr>' +
  '<tr><td>Hoja arrugada</td><td>0,30</td><td>0,40</td><td>0,40</td><td>0,36</td></tr>' +
  '<tr><td>Hoja lisa</td><td>1,10</td><td>1,10</td><td>1,10</td><td>1,06</td></tr></table>' +
  P('A partir de lo anterior, la estudiante afirma que las dos hojas caen debido a la fuerza de atracción gravitacional que ejerce la Tierra sobre estas.'),
  '¿Qué tipo de afirmación es la anterior?',
  ['Una hipótesis, porque se ajusta a los datos (masa, tiempo, volumen) tomados durante la observación.',
   'Una suposición no fundamentada, porque no tiene en cuenta las mediciones.',
   'Una hipótesis, porque intenta explicar por qué la hoja arrugada cae más rápido.',
   'Una suposición no fundamentada, porque es una ley científicamente reconocida.'], 1,
  'Lo que la estudiante midió fue una diferencia: la hoja arrugada cae en un tercio del tiempo que la lisa. Decir que las dos caen por la gravedad es cierto, pero no dice nada sobre esa diferencia, que es justo lo que el experimento sacó a la luz. Una afirmación que ignora los datos recogidos no se apoya en ellos. Tampoco explica por qué una cae más rápido, porque la gravedad actúa igual sobre las dos; lo que las distingue es la resistencia del aire.',
  'Compara la afirmación con lo que las mediciones muestran. Si la afirmación sería la misma sin haber medido, no se apoya en los datos.',
  { confianza: 'media' });

/* ═════════ 111 · fuerza neta ═════════ */
Q(111, 'Dinámica y fuerzas', 'baja',
  P('Un estudiante ubica una sombrilla sobre un ventilador soplando hacia arriba y observa que la sombrilla comienza a aumentar su velocidad hacia arriba, como se muestra en la figura.') +
  F('f1-q111-sombrilla', 'Una sombrilla abierta flotando encima de un ventilador de mesa que sopla hacia arriba.'),
  '¿Cómo debe ser la fuerza que ejerce el aire del ventilador para que la sombrilla se mueva aceleradamente hacia arriba?',
  ['Menor que el peso de la sombrilla.', 'Mayor que el peso de la sombrilla.',
   'Igual al peso de la sombrilla.', 'Igual al peso del ventilador.'], 1,
  'Sobre la sombrilla actúan el aire, que la empuja hacia arriba, y su propio peso, que tira hacia abajo. Si las dos fuerzas fueran iguales la sombrilla quedaría suspendida sin acelerar, y si el aire hiciera menos fuerza caería. Como el enunciado dice que va aumentando su velocidad hacia arriba, la fuerza del aire tiene que superar al peso. El peso del ventilador no interviene: no es un cuerpo que esté sobre la sombrilla.',
  'Acelerar en un sentido exige que la suma de fuerzas apunte en ese sentido. Compara solo las fuerzas que actúan sobre la sombrilla.');

/* ═════════ 112 · fuerza normal ═════════ */
Q(112, 'Dinámica y fuerzas', 'media',
  P('Un estudiante observa que cuando llueve intensamente caen gotas de agua congeladas a una velocidad de 40 km/h. Una de estas gotas choca con el piso y cambia su dirección de movimiento. En las figuras 1 y 2 se muestran las fuerzas que actúan sobre la gota antes y durante el choque respectivamente.') +
  F('f1-q112-choque', 'Figura 1, antes del choque: sobre la gota que cae se dibujan la resistencia del aire, la fuerza del viento y el peso, este último hacia abajo. Figura 2, durante el choque: la gota está en contacto con el piso y sobre ella se dibujan el peso hacia abajo y la normal hacia arriba.'),
  'Teniendo en cuenta la información anterior, ¿cuál es la fuerza que hace que la gota cambie de dirección?',
  ['La fuerza del viento.', 'La fuerza normal.', 'El peso de la gota.', 'La fuerza de rozamiento.'], 1,
  'Antes de tocar el piso la gota baja, y después del choque sube: su movimiento se invirtió, y eso solo puede hacerlo una fuerza dirigida hacia arriba. La única que aparece en la figura del momento del choque y apunta hacia arriba es la normal, la que el piso ejerce sobre todo lo que se apoya en él. El peso apunta hacia abajo, así que no puede devolverla, y el viento y el rozamiento actuaban durante la caída, no en el rebote.',
  'Fíjate en qué sentido cambió el movimiento y busca, entre las fuerzas dibujadas en ese instante, la que apunta hacia allá.');

/* ═════════ 113 · densidad y flotación ═════════ */
Q(113, 'Dinámica y fuerzas', 'media',
  P('Un estudiante viaja a un lago que es famoso porque es muy difícil hundirse en él. Cuando el estudiante llega a un lugar donde la profundidad es de 4 metros e intenta sumergirse, se da cuenta de que requiere mucha energía para hundirse en sus aguas y que puede flotar en ellas sin ningún esfuerzo, cosa que no pasa en una piscina, donde el estudiante se hunde más rápido.') +
  P('Cuando él observa con cuidado el agua de este lago, se da cuenta de que tiene un color amarillento, un olor muy fuerte y un sabor bastante particular.'),
  'De acuerdo con lo anterior, ¿cuál de las siguientes hipótesis plantea una causa probable para explicar por qué en este lago se flota con mayor facilidad que en una piscina?',
  ['Este lugar es tan poco profundo que es imposible hundirse en él, ya que el agua le llega a las rodillas al estudiante.',
   'El agua de este lago contiene compuestos químicos que aumentan su densidad y facilitan la flotabilidad.',
   'El agua de este lago es potable, pero el agua de la piscina no, y es imposible hundirse en agua pura.',
   'El lago fue creado por el hombre y no porta naturaleza, y los humanos solo pueden flotar en aguas naturales.'], 1,
  'Un cuerpo flota con más facilidad cuando el líquido en el que está es más denso que él. El color, el olor y el sabor extraños son pistas de que en esa agua hay algo disuelto, y lo disuelto aumenta la densidad; por eso empuja más hacia arriba que el agua de una piscina. Las demás no explican nada: el enunciado dice que hay 4 metros de profundidad, y ni ser potable ni ser natural tiene que ver con la densidad.',
  'Las hipótesis se juzgan por si explican lo observado. Fíjate en qué detalle del texto queda sin explicar en cada opción.');

/* ═════════ 114 a 116 · péndulo y cubeta de ondas ═════════ */
const CUBETA =
  P('El sistema que muestra la figura consta de una cubeta dividida en dos secciones por una membrana sensible: la parte izquierda está llena de agua y la derecha contiene aceite. Una esfera hueca colgada de una cuerda de 2,5 m de longitud oscila por encima de la cubeta y al pasar por el punto más bajo roza con el agua formando ondas.') +
  F('f1-q114-cubeta', 'Cubeta rectangular dividida en dos mitades por una membrana sensible: la mitad izquierda contiene agua y la derecha aceite. Sobre ella cuelga, de un soporte, una esfera sujeta por una cuerda, que oscila y al pasar por el punto más bajo toca la superficie del agua generando ondas circulares.') +
  P('<b>Nota:</b> suponga que el péndulo oscila con frecuencia constante sin tener en cuenta las pérdidas de energía por fricción.');

Q(114, 'Ondas y sonido', 'media', CUBETA,
  'Si la esfera hueca se llena con agua sucedería que',
  ['la frecuencia de oscilación del péndulo aumentaría.',
   'la frecuencia de oscilación del péndulo disminuiría.',
   'la frecuencia de oscilación del péndulo no cambiaría.',
   'el periodo de oscilación del péndulo aumentaría.'], 2,
  'Llenar la esfera cambia su masa, pero el ritmo con el que oscila un péndulo no depende de la masa que cuelga: depende solo de la longitud de la cuerda y de la gravedad. Es el mismo motivo por el que dos cuerpos de distinto peso caen igual cuando se puede despreciar el aire. Como la cuerda sigue midiendo 2,5 metros, ni la frecuencia ni el periodo cambian.',
  'Escribe de qué depende el periodo de un péndulo. Lo que no aparezca en esa lista, no lo afecta.');

Q(115, 'Ondas y sonido', 'alta', CUBETA,
  'Si el experimento se repitiera pero utilizando una cuerda de 10 m sucedería que',
  ['la frecuencia aumentaría al doble.', 'el periodo de oscilación disminuiría a la mitad.',
   'la frecuencia de oscilación no se vería afectada.', 'la frecuencia disminuiría a la mitad.'], 3,
  'El periodo de un péndulo crece con la raíz cuadrada de la longitud. Pasar de 2,5 a 10 metros es multiplicar la longitud por cuatro, y la raíz de cuatro es dos: el periodo se duplica. La frecuencia es el inverso del periodo, así que si el periodo se duplica la frecuencia se reduce a la mitad. Una cuerda más larga hace un péndulo más lento, no más rápido.',
  'Cuadruplicar la longitud no cuadruplica el periodo: en la fórmula la longitud está bajo una raíz.');

Q(116, 'Ondas y sonido', 'alta', CUBETA,
  'Si la longitud de onda de las ondas formadas en el agua fuera π metros (λ = π), entonces la velocidad de estas ondas sería de',
  ['π m/s', '1/π m/s', '0,5 m/s', '1 m/s'], 3,
  'Las ondas se forman al ritmo del péndulo, así que su frecuencia es la del péndulo. Con una cuerda de 2,5 metros y una gravedad de 10 m/s², el periodo es 2π por la raíz de 2,5 entre 10, es decir 2π por 0,5, o sea π segundos. La frecuencia es entonces 1/π hercios. La velocidad de una onda es su longitud de onda por su frecuencia: π por 1/π da exactamente 1 metro por segundo. Los π se cancelan, y por eso el resultado sale redondo.',
  'Primero saca el periodo del péndulo, de ahí la frecuencia, y solo al final multiplica por la longitud de onda.');

/* La ruta: siete cuestionarios cortos agrupados por tema. Física arranca en
   fis-1 porque es la primera materia de ciencias naturales con contenido. */
const CUESTIONARIOS = {
  fis: [
    { tema: 'Cinemática', items: [
      { id: 'fis-1', titulo: 'Pato Donald · Leer una gráfica de movimiento', qs: [1, 8],      tipo: 'Situación' },
      { id: 'fis-2', titulo: 'Pato Donald · Medir y concluir',               qs: [3, 9, 13],  tipo: 'Situación' },
    ]},
    { tema: 'Dinámica y fuerzas', items: [
      { id: 'fis-3', titulo: 'Pato Donald · Giros y torque',                 qs: [0, 5],      tipo: 'Situación' },
      { id: 'fis-4', titulo: 'Pato Donald · Fuerzas que se compensan',       qs: [14, 15],     tipo: 'Situación' },
      { id: 'fis-5', titulo: 'Pato Donald · Flotar y levantar',              qs: [7, 11, 16], tipo: 'Situación' },
    ]},
    { tema: 'Termodinámica', items: [
      { id: 'fis-6', titulo: 'Pato Donald · Calor y temperatura',            qs: [2, 4, 6, 12], tipo: 'Situación' },
    ]},
    { tema: 'Ondas y sonido', items: [
      { id: 'fis-7', titulo: 'Pato Donald · Ondas y péndulo',                qs: [10, 17, 18, 19], tipo: 'Situación' },
    ]},
  ],
};
