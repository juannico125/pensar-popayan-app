/* Física · formulario 2 (F2, Deadpool) · lote 2026-B
 *
 * Preguntas 97 a 116. Las 97 y 98 están en la portada (página 6 del PDF).
 *
 * La 112 tampoco está aquí: es de química (enlace y conductividad), como
 * anotó el docente al margen, y se cargó en `qui-f2-2026b.js`.
 *
 * Las cuatro gráficas de la 104 se dibujan en vez de recortarse: son ejes
 * esquemáticos sin un solo número, así que redibujarlas no decide nada que la
 * fuente no haya decidido ya. Las de la 106 y la 107 sí se recortan, porque
 * ahí lo que distingue una opción de otra son los valores de los ejes.
 *
 * Claves propuestas por el modelo, sin revisión docente.
 */

const IMG = 'img/figuras/fis/';
const P = txt => `<p>${txt}</p>`;
const M = txt => `<p style="font-family:var(--font-mono);text-align:center">${txt}</p>`;
const F = (archivo, alt) =>
  `<figure class="ctx-fig"><img src="${IMG}${archivo}.webp" loading="lazy" alt="${alt}"></figure>`;

const BANKS = { fis: [] };
const Q = (numero, comp, dificultad, context, text, opts, correct, exp, tip, extra = {}) =>
  BANKS.fis.push({ numero, comp, dificultad, ctxLabel: 'FÍSICA', ctxClass: 'ctx-sit',
                   context, text, opts, correct, exp, tip, ...extra });

/* ═════════ 99 · tensión en las cuerdas ═════════ */
Q(99, 'Dinámica y fuerzas', 'alta',
  P('Un estudiante analiza las fuerzas que actúan sobre un semáforo, de tal manera que la tensión de las cuerdas lo sostenga en reposo. Él construye la siguiente ecuación y gráfica:') +
  M('Tensión = mg ÷ (2 · sen α)') +
  F('f2-q99-semaforo', 'Semáforo colgado de dos cuerdas que van a dos postes, uno a cada lado. Cada cuerda forma un ángulo α con la horizontal, marcada con una línea punteada, y sobre cada una se dibuja la tensión apuntando hacia el poste.') +
  P('Donde m es la masa del semáforo, g la aceleración gravitacional y α es el ángulo que forman las cuerdas con respecto a un eje horizontal, y tiene una variación máxima de 90°.'),
  'De acuerdo con lo anterior, ¿por qué cuando se pone un semáforo de mayor masa la inclinación de las cuerdas aumenta, si se mantiene la misma tensión?',
  ['Porque cuando α es 90°, sen α = 1 y la tensión se iguala a la mitad de la masa.',
   'Porque al aumentar α la tensión se iguala a cero.',
   'Porque cuando α es 0°, sen α = 0 y la tensión tiende a una cantidad infinita.',
   'Porque al aumentar α se compensa el aumento de la masa.'], 3,
  'En la ecuación la masa está arriba y el seno del ángulo abajo. Si la masa crece y la tensión tiene que quedarse igual, el denominador debe crecer en la misma proporción, y para eso el seno del ángulo tiene que aumentar, es decir, el ángulo tiene que abrirse. Por eso un semáforo más pesado cuelga con las cuerdas más inclinadas. Las demás opciones describen casos extremos del ángulo, pero ninguno explica la compensación.',
  'Mira qué está arriba y qué está abajo en la fracción. Si algo de arriba crece y el resultado no cambia, algo de abajo tuvo que crecer también.');

/* ═════════ 100 · corriente en serie y en paralelo ═════════ */
Q(100, 'Electricidad y magnetismo', 'media',
  P('Isabel necesita instalar tres bombillas idénticas en un salón de eventos, en el que se requiere una bombilla en la parte de atrás y dos en la parte de adelante. Ella realiza el siguiente diagrama del circuito:') +
  F('f2-q100-circuito', 'Circuito con una fuente de energía y un interruptor. La bombilla 1 está sola sobre el cable principal; después el cable se abre en un rectángulo donde la bombilla 2 y la bombilla 3 están en ramas separadas, una en paralelo con la otra.'),
  'De acuerdo con el diagrama, ¿cuál de las siguientes afirmaciones sobre la corriente de la bombilla 1 es correcta?',
  ['La corriente de la bombilla 1 es igual que la corriente de la bombilla 2.',
   'La corriente de la bombilla 1 es el doble que la corriente de la bombilla 3.',
   'La corriente de la bombilla 1 es un tercio de la corriente por la fuente de energía.',
   'La corriente de la bombilla 1 es la mitad de la corriente por la fuente de energía.'], 1,
  'La bombilla 1 está sola en el cable que sale de la fuente, así que por ella pasa toda la corriente. Más adelante ese cable se divide en dos ramas iguales, una para la bombilla 2 y otra para la bombilla 3, y la corriente se reparte por mitades entre ellas. Entonces por la bombilla 1 pasa el doble que por la 3, y también el doble que por la 2. Y como no se pierde corriente por el camino, por la bombilla 1 pasa exactamente lo mismo que por la fuente, no un tercio ni la mitad.',
  'Sigue el cable desde la fuente: donde no hay bifurcación, la corriente es la misma; donde se abre en dos ramas iguales, se parte en dos.',
  { confianza: 'media' });

/* ═════════ 101 · ondas en aguas someras ═════════ */
Q(101, 'Ondas y sonido', 'alta',
  P('Cuando las ondas viajan al interior de una cubeta con agua, entre una región más profunda a una menos profunda, sobre un obstáculo, experimentan una disminución de su velocidad de propagación y su longitud de onda, pero mantiene la misma amplitud.'),
  'Si se mira la cubeta con agua, por un lado, ¿cuál de las siguientes figuras muestra cómo son las ondas en la parte menos profunda?',
  [F('f2-q101-a', 'Corte de la cubeta con el obstáculo a la derecha. Sobre la parte honda de la izquierda se ven ondas, y sobre el obstáculo la superficie queda casi lisa.'),
   F('f2-q101-b', 'Corte de la cubeta con el obstáculo a la derecha. Las ondas son marcadas sobre la parte honda de la izquierda y se apagan sobre el obstáculo.'),
   F('f2-q101-c', 'Corte de la cubeta con el obstáculo a la derecha. Sobre el obstáculo las ondas se ven más altas y más separadas que sobre la parte honda.'),
   F('f2-q101-d', 'Corte de la cubeta con el obstáculo a la derecha. Sobre el obstáculo las ondas conservan la altura que traían pero van más juntas unas de otras.')], 3,
  'El enunciado ya dice qué hay que buscar: sobre la parte menos profunda la longitud de onda disminuye y la amplitud se mantiene. Longitud de onda menor significa crestas más juntas, y amplitud igual significa crestas de la misma altura. La figura correcta es la única donde, encima del obstáculo, las ondas se aprietan sin achatarse. Las que alisan la superficie sobre el obstáculo cambian la amplitud, y la que las dibuja más altas también.',
  'Traduce el enunciado a dos cosas que mirar en el dibujo: separación entre crestas y altura de las crestas.',
  { confianza: 'media' });

/* ═════════ 102 · calor específico ═════════ */
Q(102, 'Termodinámica', 'media',
  P('Un grupo de científicos diseñó un panel que funciona durante la noche, a diferencia del panel solar. El panel funciona aprovechando el flujo de calor entre el suelo caliente y el ambiente frío, para transformarlo en corriente eléctrica, como se muestra en la siguiente figura.') +
  F('f2-q102-panel', 'Corte del panel sobre una mesa. Arriba, un vidrio protector y una lámina de aluminio expuestos al ambiente frío; abajo, la tierra cálida. Entre los dos, un generador termoeléctrico recibe el flujo de calor que sube del suelo y entrega corriente, que enciende un bombillo.') +
  P('El panel se coloca sobre una mesa que tiene un vidrio en la parte superior, para proteger el sistema del viento. El generador termoeléctrico aprovecha el calor proveniente del suelo, para transformar parte de este en corriente eléctrica, que enciende un bombillo. Otra parte del calor se libera hacia el ambiente a través de la lámina de aluminio pintada de negro. Un panel de 1 m² logra encender un bombillo pequeño.') +
  P('El calor específico es una medida de la capacidad de un material para cambiar de temperatura cuando se le suministra cierta cantidad de calor. Cuanto mayor es el calor específico, mayor es la energía que se requiere para aumentar la temperatura del material.'),
  'Si se compara una lámina de aluminio con una de un nuevo material con mayor calor específico, ¿qué sucederá con la temperatura a la que llegará la nueva lámina, en comparación con la de aluminio?',
  ['Llegará a la misma temperatura, pero la lámina de aluminio tardará más tiempo.',
   'Llegará a una mayor temperatura, pero la lámina de aluminio tardará más tiempo.',
   'Llegará a la misma temperatura, pero la lámina del nuevo material tardará más tiempo.',
   'Llegará a una mayor temperatura, pero la lámina del nuevo material tardará más tiempo.'], 2,
  'El calor específico dice cuánta energía hay que darle a un material para subirle un grado, no hasta dónde puede subir. Las dos láminas están en el mismo panel, recibiendo el mismo calor del suelo y perdiéndolo hacia el mismo ambiente, así que las dos terminan en la misma temperatura de equilibrio. Lo que cambia es el camino: la de mayor calor específico necesita más energía por cada grado, así que tarda más en llegar.',
  'Separa dos preguntas distintas: a qué temperatura llega y cuánto tarda en llegar. El calor específico contesta la segunda.');

/* ═════════ 103 · densidad y calor específico ═════════ */
Q(103, 'Termodinámica', 'media',
  P('Sebastián realiza un experimento para organizar diferentes materiales según sus características, escogiendo madera, acero y agua, en donde dichos materiales tienen la misma masa. Los resultados de su experimento se muestran en la siguiente tabla.') +
  '<table class="ctx-table">' +
  '<tr><th>Material</th><th>Densidad (kg/m<sup>3</sup>)</th><th>Calor específico (kCal/kg °C)</th><th>Tiempo en llegar a 35 °C (s)</th></tr>' +
  '<tr><td>Madera</td><td>400</td><td>0,12</td><td>39</td></tr>' +
  '<tr><td>Acero</td><td>7.850</td><td>0,57</td><td>9</td></tr>' +
  '<tr><td>Agua</td><td>1.000</td><td>1,07</td><td>70</td></tr></table>',
  'Teniendo en cuenta los datos registrados en la tabla, ¿cuáles materiales se hunden en el agua y cuáles cambian de temperatura más fácilmente que el agua?',
  ['La madera y el acero se hunden, y ambos materiales cambian de temperatura más difícilmente en comparación con el agua.',
   'Solo el acero se hunde en el agua, mientras que la madera y el acero cambian de temperatura más fácilmente en comparación con el agua.',
   'La madera y el acero se hunden, mientras que solamente el acero cambia de temperatura más fácilmente en comparación con el agua.',
   'Solo el acero se hunde en el agua, mientras que la madera y el acero, al tener un calor específico menor a 1, no cambian de temperatura.'], 1,
  'Se hunde lo que es más denso que el agua. El agua está en 1.000, la madera en 400 —flota— y el acero en 7.850 —se hunde—. Para la temperatura hay que mirar el calor específico: cuanto más bajo, menos energía hace falta para calentar el material, o sea que cambia de temperatura con más facilidad. La madera está en 0,12 y el acero en 0,57, los dos por debajo del 1,07 del agua, así que los dos se calientan más fácil. Y que el calor específico sea menor que 1 no significa que no cambien de temperatura: significa lo contrario.',
  'Son dos comparaciones distintas contra el agua: una con la columna de densidad y otra con la de calor específico. Hazlas por separado.');

/* ═════════ 104 · ley de Boyle ═════════ */
Q(104, 'Termodinámica', 'media',
  P('Una estudiante mide la presión y el volumen de aire cuando comprime el émbolo que hay sobre un tubo cerrado en uno de sus extremos, como se observa en la figura. Los datos obtenidos se muestran en la tabla.') +
  '<table class="ctx-table">' +
  '<tr><th>Presión ejercida sobre el émbolo (atm)</th><th>Volumen de aire dentro del tubo (cm<sup>3</sup>)</th></tr>' +
  '<tr><td>0,10</td><td>10</td></tr><tr><td>0,20</td><td>5</td></tr>' +
  '<tr><td>0,30</td><td>3,3</td></tr><tr><td>0,40</td><td>2,5</td></tr></table>' +
  F('f2-q104-tubo', 'Dos tubos cerrados por abajo con un émbolo encima. En el primero el émbolo está arriba y la columna de aire es larga; en el segundo, una flecha indica que el émbolo bajó y la columna de aire quedó corta.'),
  '¿Cuál de las siguientes gráficas representa la relación entre la presión y el volumen obtenida en el experimento?',
  [esquema([[0.05, 0.08], [0.95, 0.92]], { x: 'V', y: 'P', alt: 'Ejes de presión contra volumen con una recta que sube de izquierda a derecha.' }),
   esquema([[0.07, 0.95], [0.10, 0.72], [0.15, 0.50], [0.22, 0.36], [0.32, 0.26],
            [0.45, 0.19], [0.60, 0.14], [0.78, 0.11], [0.95, 0.09]],
           { x: 'V', y: 'P', alt: 'Ejes de presión contra volumen con una curva que cae muy rápido al principio y luego se acerca al eje horizontal sin tocarlo.' }),
   esquema([[0.05, 0.92], [0.95, 0.08]], { x: 'V', y: 'P', alt: 'Ejes de presión contra volumen con una recta que baja de izquierda a derecha.' }),
   esquema([[0.5, 0.05], [0.5, 0.95]], { x: 'V', y: 'P', alt: 'Ejes de presión contra volumen con una recta vertical en un único valor de volumen.' })], 1,
  'Hay que mirar cómo cambian los números juntos. Al duplicar la presión de 0,10 a 0,20 el volumen cae a la mitad, de 10 a 5; al triplicarla, el volumen queda en la tercera parte, 3,3; y al cuadruplicarla, en la cuarta, 2,5. En todos los casos el producto de presión por volumen da lo mismo, aproximadamente 1. Esa relación no es una recta: es una curva que baja muy rápido y después se va acercando al eje sin llegar a tocarlo, porque por más que se comprima, el volumen nunca llega a cero.',
  'Multiplica cada presión por su volumen y mira si el resultado se repite. Si se repite, la gráfica no puede ser una recta.');

/* ═════════ 105 · el ángulo no depende de la masa ═════════ */
Q(105, 'Dinámica y fuerzas', 'alta',
  P('Juan observa el movimiento de una atracción mecánica en la feria del pueblo. Él nota que a medida que la atracción gira más rápido, el ángulo entre el brazo horizontal y el brazo que sostiene la silla donde está sentada una compañera aumenta, como se muestra en las siguientes figuras.') +
  F('f2-q105-atraccion', 'Dos esquemas de la misma atracción. En el primero la velocidad de giro es 5,6 metros por segundo, el brazo horizontal mide 3,0 metros, el brazo de la silla mide 5,0 metros y forma 30 grados; la distancia al eje es 5,5 metros. En el segundo la velocidad es 7,1 metros por segundo, con el mismo brazo horizontal, el ángulo es 40 grados y la distancia 6,2 metros.') +
  M('tan θ = (Velocidad)² ÷ ((Distancia) · g)'),
  'Si Juan encuentra la ecuación que relaciona el ángulo (θ) y la velocidad, y sube a la atracción sabiendo que pesa el doble de su compañera, ¿qué se espera que le suceda al ángulo en ambas situaciones?',
  ['Que aumente el doble, ya que en la ecuación se muestra la gravedad, y el peso depende de la aceleración de la gravedad y de la masa.',
   'Que se mantenga igual, ya que en la ecuación no aparece la masa: el ángulo solo depende de la velocidad y de la distancia.',
   'Que disminuya 10 grados, pues como se observa en la ecuación, al aumentar la velocidad el ángulo de rotación del sistema disminuye.',
   'Que aumente la mitad, puesto que al elevar la velocidad al cuadrado el ángulo de rotación aumenta en esa misma proporción, debido a la masa.'], 1,
  'En la ecuación aparecen tres cosas: la velocidad, la distancia y la gravedad. La masa no está por ningún lado, así que subirse alguien que pesa el doble no cambia el resultado. Es lo mismo que pasa con los cuerpos que caen: la masa se cancela. Si la atracción gira a la misma velocidad y a la misma distancia, el brazo se inclina el mismo ángulo con Juan que con su compañera.',
  'Antes de razonar, haz la lista de lo que aparece en la ecuación. Lo que no aparece, no influye.');

/* ═════════ 106 · velocidad con y sin rozamiento ═════════ */
Q(106, 'Cinemática', 'media',
  P('Un disco se mueve inicialmente con velocidad constante y en línea recta sobre una mesa que expulsa aire por unos agujeros. El disco no tiene contacto con la superficie de la mesa, de tal forma que queda suspendido en el aire y la fuerza de rozamiento que actúa sobre el disco es casi nula.') +
  F('f2-q106-disco', 'Mesa de aire vista desde arriba, con el disco a la izquierda y una flecha rotulada v cero que indica que se mueve hacia la derecha con velocidad constante.') +
  P('Posteriormente se apaga el aire y el disco vuelve a quedar sobre la mesa, deslizándose hasta detenerse por causa de la fuerza de fricción.'),
  '¿Cuál de las siguientes gráficas ilustra la velocidad del disco en el tiempo?',
  [F('f2-q106-a', 'Gráfica de velocidad contra tiempo: la velocidad sube desde cero en línea recta hasta v cero y a partir de ahí se mantiene constante.'),
   F('f2-q106-b', 'Gráfica de velocidad contra tiempo: la velocidad arranca en v cero, baja en línea recta hasta un valor intermedio y desde ahí se mantiene constante sin llegar a cero.'),
   F('f2-q106-c', 'Gráfica de velocidad contra tiempo: la velocidad sube desde cero hasta v cero y enseguida baja en línea recta hasta detenerse.'),
   F('f2-q106-d', 'Gráfica de velocidad contra tiempo: la velocidad se mantiene constante en v cero durante un tramo y después baja en línea recta hasta cero.')], 3,
  'El movimiento tiene dos etapas. Mientras el aire está encendido no hay rozamiento, así que la velocidad no cambia: eso es un tramo horizontal a la altura de v cero. Cuando se apaga el aire aparece la fricción, que frena el disco de manera pareja hasta dejarlo quieto: eso es un tramo recto que baja hasta cero. La gráfica correcta es la que tiene esas dos partes en ese orden. Las que empiezan subiendo desde cero contradicen el enunciado, que dice que el disco ya venía moviéndose.',
  'Divide el movimiento en etapas y dibuja cada una antes de mirar las opciones: primero velocidad constante, después frenado.');

/* ═════════ 107 · leer una relación en una gráfica ═════════ */
Q(107, 'Energía y trabajo', 'alta',
  P('La siguiente imagen muestra cómo la longitud de las aspas de un aerogenerador, medida en metros (m), se relaciona con la potencia eléctrica que puede generar, medida en kilovatios (kW).') +
  F('f2-q107-aerogeneradores', 'Cinco aerogeneradores de tamaño creciente. Debajo de cada uno, su potencia y la longitud de sus aspas: 300 kW con 30 m, 750 kW con 50 m, 1.800 kW con 80 m, 5.000 kW con 125 m y 20.000 kW con 250 m.'),
  '¿Cuál de las siguientes gráficas muestra correctamente los datos de potencia eléctrica respecto a la longitud de las aspas de un aerogenerador?',
  [F('f2-q107-a', 'Gráfica de dispersión con el eje horizontal de longitud de aspas marcado de 0 a 6.000 metros y el vertical de potencia de 0 a 6.000 kilovatios.'),
   F('f2-q107-b', 'Gráfica de dispersión con el eje horizontal marcado en 0, 30, 50, 80, 125 y 250 metros y el vertical en 0, 300, 750, 1.800, 5.000 y 20.000 kilovatios. El punto de 250 metros queda a la altura de 5.000 kilovatios.'),
   F('f2-q107-c', 'Gráfica de dispersión con el eje horizontal de 0 a 25.000 metros y el vertical de 0 a 300 kilovatios.'),
   F('f2-q107-d', 'Gráfica de dispersión con el eje horizontal repartido de 0 a 300 metros de cincuenta en cincuenta y el vertical de 0 a 25.000 kilovatios. Los puntos suben despacio al principio y el último, en 250 metros, llega a 20.000 kilovatios.')], 3,
  'Hay que revisar dos cosas en cada gráfica: que los ejes lleguen hasta donde llegan los datos y que los puntos queden donde toca. Las aspas van de 30 a 250 metros y las potencias de 300 a 20.000 kilovatios. Dos de las gráficas usan ejes que no corresponden, uno que llega a miles de metros de aspa y otro que se queda en 300 kilovatios. De las dos que quedan, una coloca el aerogenerador de 250 metros en 5.000 kilovatios cuando la imagen dice 20.000. La correcta es la que reparte los ejes de manera pareja y pone cada punto en su valor.',
  'Antes de mirar la forma de la nube de puntos, comprueba hasta dónde llega cada eje y busca el dato más grande en la gráfica.');

/* ═════════ 108 · dónde va el imán ═════════ */
Q(108, 'Electricidad y magnetismo', 'media',
  P('Un correntómetro es un instrumento usado para medir la velocidad de una corriente de agua, el cual está equipado de una hélice que gira por la corriente líquida que choca con sus aspas, un contrapeso para evitar que se incline cuando se sumerge, una barra graduada para medir la profundidad y un tornillo de bloqueo para ajustar la hélice a la distancia requerida, como se muestra a continuación.') +
  F('f2-q108-helice', 'Correntómetro: una hélice montada en un eje horizontal, sujeta a una barra vertical graduada de 01 a 05 mediante un tornillo de bloqueo, y un contrapeso en el extremo inferior de la barra.') +
  P('Actualmente, los correntómetros usan un contador de revoluciones, en donde los imanes establecen un contacto eléctrico con el sensor que envía la señal al contador, como se muestra en la siguiente figura.') +
  F('f2-q108-sensor', 'Detalle del mecanismo: una pieza curva con imanes incrustados pasa frente a un sensor, que queda fijo junto a ella.'),
  'De acuerdo con la información anterior, ¿en qué parte del correntómetro se debe ubicar el imán para que el contador de revoluciones indique la velocidad de la corriente?',
  ['En la barra graduada, porque la velocidad del agua depende de la profundidad.',
   'En el tornillo de bloqueo, porque el imán estaría fijo en todo momento.',
   'En el contrapeso, porque es el elemento que da estabilidad al correntómetro.',
   'En la hélice, porque esta gira gracias a la velocidad del agua.'], 3,
  'El contador cuenta revoluciones, y para que cuente algo el imán tiene que pasar una y otra vez frente al sensor. Eso solo ocurre si el imán va montado en la pieza que da vueltas, que es la hélice. La barra, el tornillo y el contrapeso están quietos mientras se mide: un imán ahí pasaría frente al sensor cero veces por minuto, sin importar qué tan rápido vaya el agua.',
  'Pregúntate qué pieza se mueve cuando el agua corre. El imán tiene que ir en esa, no en las que sostienen el aparato.');

/* ═════════ 109 · resistencias en paralelo ═════════ */
Q(109, 'Electricidad y magnetismo', 'alta',
  P('Se tienen 3 resistencias idénticas conectadas a una batería formando los circuitos mostrados en las figuras.') +
  F('f2-q109-circuitos', 'Cuatro circuitos con la misma batería y tres resistencias iguales. En el primero las tres van una detrás de otra. En el segundo, dos van en paralelo y la tercera en serie con ellas. En el tercero, las tres van en paralelo, cada una en su propia rama. En el cuarto, dos van en paralelo y la tercera en serie.'),
  'El circuito en el que la corriente total alcanza su mayor valor es',
  ['1', '2', '3', '4'], 2,
  'Con la misma batería, pasa más corriente por donde hay menos resistencia. Poner resistencias una detrás de otra las suma, así que el circuito en serie es el que más se opone. Ponerlas en ramas paralelas es abrirle al corriente más caminos a la vez, y eso baja la resistencia total. Las tres en paralelo es el caso con más caminos y la menor resistencia de los cuatro —la tercera parte de una sola—, así que por ahí pasa la mayor corriente.',
  'Cuenta cuántos caminos distintos tiene la corriente para volver a la batería. Cuantos más, menos se opone el circuito.');

/* ═════════ 110 · transformación de energía ═════════ */
Q(110, 'Energía y trabajo', 'baja',
  P('En un motor de combustión interna (como el de un carro), una mezcla de combustible, oxígeno y una chispa eléctrica producen una explosión controlada dentro del motor que genera movimiento del mismo.'),
  'Según lo anterior, el proceso de transformación de energía que se da dentro del motor es de',
  ['energía mecánica a energía térmica.', 'energía mecánica a energía química.',
   'energía química a energía mecánica.', 'energía térmica a energía química.'], 2,
  'La energía está guardada en el combustible, en los enlaces de sus moléculas: eso es energía química. La chispa dispara la explosión, que libera esa energía y empuja las piezas del motor, es decir, produce movimiento: energía mecánica. El proceso va entonces de química a mecánica. En el camino hay calor, sí, pero el enunciado pregunta de dónde sale la energía y en qué termina.',
  'Ubica dónde estaba guardada la energía antes de encender el motor y en qué se nota después.');

/* ═════════ 111 · diagrama de fases ═════════ */
Q(111, 'Termodinámica', 'alta',
  P('Un diagrama de fases es una representación gráfica de un sistema material a diferentes presiones y temperaturas, reflejando el equilibrio entre las distintas fases. A continuación, se observa el diagrama de fases de un compuesto.') +
  F('f2-q111-fases', 'Diagrama con la presión en el eje vertical y la temperatura en el horizontal. Tres regiones: sólido arriba a la izquierda, líquido arriba a la derecha y gas abajo, separadas por líneas que se cruzan en el punto triple; la frontera entre líquido y gas termina en el punto crítico. El punto A está en la región del sólido, arriba; el punto B está en la región del gas, abajo y más a la derecha.'),
  'Teniendo en cuenta la gráfica anterior, es posible afirmar que para pasar del punto B al punto A se requiere',
  ['mantener constante la temperatura y aumentar la presión del sistema.',
   'aumentar la presión y disminuir la temperatura del sistema.',
   'disminuir la presión y aumentar la temperatura del sistema.',
   'aumentar la temperatura y mantener constante la presión del sistema.'], 1,
  'En este diagrama la presión se lee hacia arriba y la temperatura hacia la derecha. El punto B está abajo y a la derecha; el punto A está arriba y a la izquierda. Para ir de B a A hay que subir, que es aumentar la presión, y moverse hacia la izquierda, que es bajar la temperatura. Las dos cosas a la vez: si solo se sube la presión sin enfriar, o solo se enfría sin comprimir, no se llega.',
  'Convierte el movimiento en el dibujo a dos frases: arriba o abajo es la presión; izquierda o derecha es la temperatura.');

/* ═════════ 113 · cómo presentar resultados ═════════ */
Q(113, 'Termodinámica', 'media',
  P('En un recipiente de volumen y temperatura constante, se mide la forma como varía la presión de un gas a medida que se incrementa la cantidad de dicho gas en el recipiente a través de una válvula en intervalos de tiempo controlados. Como resultado de esta experiencia se determina que a medida que aumenta la masa del gas la presión en el recipiente también se incrementa.'),
  'La manera adecuada de presentar los resultados de la experiencia es',
  ['por medio de fotografías en las cuales se muestre la construcción del recipiente y el diseño de los instrumentos usados para medir la presión.',
   'por medio de una tabla y una gráfica en las cuales se muestren los cambios en los valores de presión en cada instante que se agrega gas al recipiente.',
   'por medio de un escrito que mencione todas las propiedades de los gases y la variación del comportamiento de sus variables en relación con las demás.',
   'por medio de un diagrama de flujo el cual muestre cada uno de los pasos que se desarrollaron para agregar el gas al recipiente.'], 1,
  'Lo que el experimento produjo son parejas de números: cuánto gas hay y qué presión se midió. Presentar resultados es mostrar esos números y lo que dicen, y para eso sirven una tabla, que los guarda uno por uno, y una gráfica, que deja ver de un vistazo que la presión sube con la masa. Las fotografías muestran el montaje pero no los datos; el escrito general habla de gases en abstracto sin usar lo medido; y el diagrama de flujo describe el procedimiento, que es otra sección del informe.',
  'Distingue entre contar cómo se hizo el experimento y mostrar qué dio. La pregunta va por lo segundo.');

/* ═════════ 114 · primera ley de Newton ═════════ */
Q(114, 'Dinámica y fuerzas', 'media',
  P('Una esfera de vidrio rueda sobre una mesa de madera. A los pocos segundos de iniciado el movimiento la esfera se detiene.'),
  'Lo sucedido con el movimiento de la esfera es que',
  ['la fuerza neta sobre la esfera es en sentido contrario a su movimiento.',
   'todos los cuerpos tienden naturalmente a detenerse.',
   'la masa de la esfera incide en su detención.',
   'la aceleración de la esfera es positiva en el sentido del movimiento.'], 0,
  'Un cuerpo en movimiento solo se frena si algo lo empuja en contra. Aquí ese algo es el rozamiento entre la esfera y la madera, que apunta al revés del avance: por eso la esfera pierde velocidad hasta parar. Que los cuerpos «tiendan a detenerse» no es una ley, es justo lo contrario de lo que dice la inercia: sin ninguna fuerza en contra la esfera habría seguido rodando. Y si la aceleración fuera en el sentido del movimiento, la esfera iría cada vez más rápido.',
  'Si algo frena, hay una fuerza apuntando al revés del movimiento. Busca cuál es y en qué sentido va.');

/* ═════════ 115 · misma fuerza, distinta masa ═════════ */
Q(115, 'Electricidad y magnetismo', 'alta',
  P('Dos partículas de polvo cargadas están separadas a una misma distancia de una pantalla larga que tiene una carga eléctrica positiva. La pantalla ejerce una fuerza sobre las partículas de igual magnitud y en direcciones opuestas, generando que las partículas experimenten aceleraciones como se muestra en la siguiente figura.') +
  F('f2-q115-particulas', 'Una pantalla vertical cargada positivamente. A un lado, a 1 cm, la partícula 1 con su vector aceleración apuntando hacia afuera; al otro lado, también a 1 cm, la partícula 2 con su vector aceleración apuntando hacia afuera en sentido contrario. El vector de la partícula 1 es el doble de largo que el de la partícula 2.') +
  P('Una estudiante nota que, de acuerdo a la figura, la magnitud de aceleración en la partícula 1 es el doble que la de la partícula 2.'),
  '¿A qué se debe que la magnitud de la aceleración de las partículas no sea la misma?',
  ['A que la masa de las partículas es diferente.', 'A que la dirección de las fuerzas es diferente.',
   'A que la cantidad de carga de las partículas es igual.', 'A que la distancia de separación es la misma.'], 0,
  'El enunciado ya descarta casi todo: dice que la fuerza sobre las dos tiene la misma magnitud y que están a la misma distancia. Con la misma fuerza, la aceleración depende únicamente de la masa, y es al revés: cuanta más masa, menos acelera. Si una acelera el doble que la otra, es porque tiene la mitad de masa. Que las direcciones sean opuestas cambia hacia dónde va cada una, no qué tan rápido gana velocidad.',
  'Tacha del enunciado todo lo que dice que es igual en las dos partículas. Lo que sobra es la respuesta.');

/* ═════════ 116 · dónde se fue la energía ═════════ */
Q(116, 'Energía y trabajo', 'alta',
  P('Un estudiante enrolla una cuerda a una rueda con paletas, que tiene sujeto en su otro extremo una masa, y la deja caer para agitar el agua (ver Figura 1).') +
  F('f2-q116-figura1', 'Figura 1: un recipiente con agua, un termómetro sumergido y, dentro del agua, una rueda con paletas conectada por una cuerda que pasa por una polea en el borde.') +
  P('Cuando la masa se libera, y cae cierta altura, se observa un aumento en la lectura del termómetro, cuando todo el sistema está completamente aislado (ver Figura 2).') +
  F('f2-q116-figura2', 'Figura 2: el mismo montaje rotulado. Se señalan la lectura del termómetro, la rueda de paletas dentro del agua, la cuerda que pasa por la polea y la masa que cae una altura determinada.') +
  P('Para predecir el aumento de la temperatura del agua, el estudiante supone que toda la energía potencial gravitacional de la masa se convierte en calor. Sin embargo, al medir la temperatura al final del experimento nota que la temperatura del agua es un poco menor que la predicha.'),
  '¿Cuál de las siguientes opciones puede ser una razón para que el termómetro registre una temperatura menor que la predicha?',
  ['Una parte pequeña de la energía potencial de la masa se transforma en energía cinética de la masa y de la rueda.',
   'Se aumenta la energía potencial de la rueda, causando un flujo de temperatura que se refleja en menos calor cedido.',
   'Aumentar la energía potencial de la masa aumenta la temperatura del agua, pero hay una disminución del flujo de calor.',
   'Parte del calor que genera la masa se transforma en energía potencial, lo cual causa que disminuya la temperatura del agua.'], 0,
  'La predicción supone que absolutamente toda la energía de la caída termina calentando el agua. Pero al final del recorrido la masa sigue bajando, o sea que se quedó con algo de energía de movimiento, y la rueda también está girando. Esa parte todavía no se ha convertido en calor, así que el agua recibe un poco menos de lo previsto y el termómetro marca menos. Las otras opciones invierten el sentido del proceso: convierten calor en energía potencial o hacen que la rueda gane altura, y nada de eso ocurre aquí.',
  'Compara lo que supone la predicción con lo que de verdad pasa al final de la caída. Pregúntate si toda la energía alcanzó a convertirse.');

/* La ruta continúa después de fis-7, que cierra el formulario 1. */
const CUESTIONARIOS = {
  fis: [
    { tema: 'Dinámica y fuerzas', items: [
      { id: 'fis-8',  titulo: 'Bugs Bunny · Cuando la masa no importa', qs: [0, 6, 14], tipo: 'Situación' },
    ]},
    { tema: 'Electricidad y magnetismo', items: [
      { id: 'fis-9',  titulo: 'Bugs Bunny · Circuitos y corriente',     qs: [1, 9],  tipo: 'Situación' },
      { id: 'fis-10', titulo: 'Bugs Bunny · Imanes y cargas',           qs: [10, 15], tipo: 'Situación' },
    ]},
    { tema: 'Ondas y sonido', items: [
      { id: 'fis-11', titulo: 'Bugs Bunny · Ondas en la cubeta',        qs: [2],     tipo: 'Situación' },
    ]},
    { tema: 'Termodinámica', items: [
      { id: 'fis-12', titulo: 'Bugs Bunny · Calor específico',          qs: [3, 4],  tipo: 'Situación' },
      { id: 'fis-13', titulo: 'Bugs Bunny · Gases y fases',             qs: [5, 12, 13], tipo: 'Situación' },
    ]},
    { tema: 'Cinemática', items: [
      { id: 'fis-14', titulo: 'Bugs Bunny · Con rozamiento y sin él',   qs: [7],     tipo: 'Situación' },
    ]},
    { tema: 'Energía y trabajo', items: [
      { id: 'fis-15', titulo: 'Bugs Bunny · A dónde va la energía',     qs: [8, 11, 16], tipo: 'Situación' },
    ]},
  ],
};

/* Cotejo visual con el PDF, 16-09-2026. La identidad previa conserva el historial. */
for (const p of BANKS.fis) p.identityContext = p.context;
const revisada = numero => BANKS.fis.find(p => p.numero === numero);
revisada(105).opts[1] = 'Que se mantenga igual, ya que en la ecuación se muestra la gravedad, y el peso depende de la aceleración de la gravedad y la masa.';
revisada(105).confianza = 'media';
revisada(105).exp += ' La conclusión de que el ángulo no cambia es compatible con la ecuación, donde la masa no aparece. Sin embargo, la justificación impresa de esa opción es imprecisa. Además, el dibujo mide θ desde la vertical, aunque el texto menciona el brazo horizontal. Se conserva el original para revisión docente.';
revisada(108).context += P('Luego de una prueba en un río, el correntómetro marca los siguientes resultados:') + tablaNativa(['Profundidad (m)', 'Velocidad (m/s)'], [['1,15','0,16'],['3,63','0,54'],['5,20','0,90'],['5,66','1,09']], 'Resultados del correntómetro');
revisada(109).context = revisada(109).context.replace(/alt="[^"]*"/, 'alt="Cuatro circuitos con resistencias idénticas R: 1, tres en serie; 2, una en serie con dos en paralelo; 3, tres en paralelo; 4, una rama con R en paralelo con otra rama de dos resistencias en serie."');
revisada(115).context = revisada(115).context.replaceAll('apuntando hacia afuera', 'apuntando hacia la pantalla');

// Las preguntas 97 y 98 sí aparecen en la portada de F2 (página 6 del PDF).
Q(97, 'Dinámica y fuerzas', 'media',
 P('Un estudiante observa que cuando se coloca un botellón de agua de 20 kg sobre una base sostenida por dos vasos de icopor vacíos, los vasos son aplastados. Sin embargo, si se aumenta el número de vasos para soportar el botellón, los vasos sí lo sostienen, como se muestra en la figura. El estudiante realiza un experimento y obtiene los siguientes resultados.') +
 F('f2-q97-botellones', 'Montajes del botellón sobre vasos de icopor. Con pocos vasos estos se aplastan; al aumentar su número, sostienen el botellón.') +
 tablaNativa(['Peso del botellón (N)','Número de vasos','Presión (Pa)'], [['196','1','2,00'],['196','2','1,00'],['196','3','0,67'],['196','4','0,50']], 'Resultados del experimento'),
 'De acuerdo a los resultados obtenidos por el estudiante, ¿por qué un número suficiente de vasos puede llegar a sostener el botellón sin ser aplastados?',
 ['Porque la fuerza de los vasos disminuye, conforme el peso del botellón de agua cambia.',
 'Porque al aumentar el número de botellones se mantiene constante el peso de los vasos.',
 'Porque al aumentar el número de vasos, disminuye la presión ejercida por el botellón sobre cada vaso.',
 'Porque al disminuir la presión del recipiente de agua disminuye el peso del botellón.'], 2,
 'El peso del botellón permanece en 196 N. Al repartirlo entre más vasos aumenta el área de apoyo total y disminuye la fuerza que soporta cada vaso. La tabla muestra que la presión disminuye al aumentar el número de vasos. No se reduce el peso del botellón: cambia cómo se distribuye sobre el soporte.',
 'Busca qué cantidad permanece constante y cuál disminuye al aumentar los apoyos.');
Q(98, 'Energía y trabajo', 'media',
 P('Camilo observa un martillo que se encuentra adherido a un eje de giro, el cual golpea un clavo sobre una superficie de madera, tal y como muestra la figura.') +
 F('f2-q98-martillo', 'Martillo sujeto a un eje: la altura después del primer golpe es mayor que la altura después del segundo golpe.') +
 P('Luego de golpear el clavo, el martillo se sube a una altura menor que la del primer golpe, para luego volver a golpear el clavo. Esto lo hace en repetidas ocasiones, hasta que finalmente se detiene.'),
 'Teniendo en cuenta la información anterior, ¿cómo es la variación de la energía mecánica del martillo y del clavo cuando el martillo ha regresado a una altura menor?',
 ['La energía mecánica del martillo ha disminuido y la del clavo ha permanecido constante.',
 'La energía mecánica del martillo ha presionado mientras que la del clavo ha disminuido.',
 'La energía mecánica del clavo y del martillo han aumentado tras cada golpe.',
 'La energía mecánica que posee el martillo y el clavo permanece constante.'], 0,
 'Al comparar las alturas máximas, el martillo está momentáneamente en reposo y su energía potencial es menor tras cada golpe. Parte de su energía se transfiere a la madera, al clavo y al entorno por deformación, calentamiento y sonido. La respuesta propuesta supone que se compara el clavo en reposo y se desprecia su pequeño cambio de altura. La opción que dice «ha presionado» contiene una errata del PDF; se conserva sin inventar el término faltante. Requiere revisión docente.',
 'Compara las alturas máximas alcanzadas y distingue la energía mecánica de otras formas de energía.',
 { confianza: 'media' });
for (const seccion of CUESTIONARIOS.fis) for (const item of seccion.items) {
 item.titulo = item.titulo.replace('Bugs Bunny', 'Deadpool');
 if (item.id === 'fis-8') { item.titulo = 'Deadpool · Fuerzas y presión'; item.qs.push(17); }
 if (item.id === 'fis-15') item.qs.push(18);
}

// Las tablas conservan sus celdas y valores y permiten desplazamiento en móviles.
for (const p of BANKS.fis) {
 p.context = p.context.replace(/<table class="ctx-table">([\s\S]*?)<\/table>/g, (_, interior) => {
  const ancha = [...interior.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)].some(m => [...m[1].matchAll(/<(?:td|th)\b/g)].length > 4);
  return '<div class="ctx-datos" role="region" aria-label="Tabla de datos" tabindex="0"><table class="ctx-table ctx-table-nativa' + (ancha ? ' ctx-table-amplia' : '') + '">' + interior + '</table></div>';
 });
}
