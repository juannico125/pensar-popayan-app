/* Química · cuadernillo 5 (Aladín) · lote 2026-B
 *
 * Preguntas 77 a 96. Es el cuadernillo de química mejor impreso de los cinco,
 * así que casi todo se lee sin forzar.
 *
 * Qué se recreó: todas las tablas —siete— y las cuatro carteleras de la 81,
 * que en el original son cuadros de texto y aquí son listas de verdad. Qué se
 * recortó: lo que es dibujo o fórmula estructural, que redibujar sería
 * transcribir química a mano y equivocarse en un enlace no se nota leyendo.
 *
 * La 89 estuvo a punto de quedar mal. A tamaño de recorte, la flecha 4 parecía
 * la respuesta; ampliada al triple se ve que 4 apunta hacia abajo —bajada de
 * presión, sublimación— y que la 2 sube hacia la izquierda cruzando primero la
 * curva de vaporización y después la de fusión, que es condensación seguida de
 * solidificación.
 *
 * La 78 queda marcada para el docente: el original nombra bien la sustancia
 * pero la justificación de la opción dice «disminuye» donde la química pide
 * «aumenta». Se transcribe tal cual; corregirlo sería reescribir la fuente.
 *
 * El componente y la dificultad salen de la hoja de clasificación de Herman,
 * no de mi criterio. Cinco de sus veinte descripciones no coinciden con lo que
 * trae el escaneo —la 83, la 86, la 87, la 91 y la 92—; las quince restantes
 * calzan exactas, así que el cuadernillo es el suyo y lo más probable es que
 * esas cinco filas estén parafraseadas de memoria. En cuatro da igual, porque
 * el componente sale el mismo por los dos caminos; la 92 es la única donde
 * seguir a Herman cambia el tema, y queda anotada para que él la confirme.
 *
 * Claves propuestas por el modelo, sin revisión docente.
 */

const IMG = 'img/figuras/qui/';
const P = txt => `<p>${txt}</p>`;
const M = txt => `<p style="font-family:var(--font-mono);text-align:center">${txt}</p>`;
const F = (archivo, alt) =>
  `<figure class="ctx-fig"><img src="${IMG}${archivo}.webp" loading="lazy" alt="${alt}"></figure>`;

const BANKS = { qui: [] };
const Q = (numero, comp, dificultad, context, text, opts, correct, exp, tip, extra = {}) =>
  BANKS.qui.push({ numero, comp, dificultad, ctxLabel: 'QUÍMICA', ctxClass: 'ctx-sit',
                   context, text, opts, correct, exp, tip, ...extra });

/* ═════════ 77 · propiedades de sustancias puras ═════════ */
Q(77, 'Materia: clasificación y propiedades', 'media',
  P('En la tabla se presentan características físicas y químicas de 4 sustancias puras.') +
  '<table class="ctx-table">' +
  '<tr><th>Sustancia</th><th>Punto de ebullición (°C)</th><th>Punto de fusión (°C)</th>' +
  '<th>Conductividad eléctrica (S/m)</th><th>Presión de vapor (Pa)</th></tr>' +
  '<tr><td>X</td><td>100,0</td><td>0</td><td>0,00005</td><td>3066,4</td></tr>' +
  '<tr><td>Y</td><td>64,7</td><td>−97</td><td>4 × 10<sup>−19</sup></td><td>13020,0</td></tr>' +
  '<tr><td>Z</td><td>78,4</td><td>−114</td><td>0,00006</td><td>5950,0</td></tr>' +
  '<tr><td>W</td><td>97,5</td><td>−126</td><td>6 × 10<sup>−18</sup></td><td>1990,0</td></tr></table>',
  'Según la información de la tabla, se puede observar que las sustancias Y y Z tienen como característica común que',
  ['presentan la misma composición química.',
   'presentan una presión de vapor superior a 4000 Pa.',
   'tienen valores de conductividad eléctrica superiores a 0,00001 S/m.',
   'tienen puntos de fusión más altos que los de ebullición.'], 1,
  'Hay que buscar la única columna donde Y y Z coinciden. En presión de vapor marcan 13020 y 5950, las dos por encima de 4000. En conductividad no: Z tiene 0,00006, que sí supera 0,00001, pero Y tiene 4 por 10 elevado a menos 19, un número muchísimo más pequeño. Y sus puntos de fusión, −97 y −114, están muy por debajo de sus puntos de ebullición, no por encima. Que tuvieran la misma composición química es imposible: si lo fueran, todas sus propiedades coincidirían.',
  'Recorre la tabla columna por columna y descarta en cuanto una de las dos sustancias no cumpla.');

/* ═════════ 78 · puentes de hidrógeno ═════════ */
Q(78, 'Orgánica', 'media',
  P('Un puente de hidrógeno se forma, entre otros, por la interacción entre el átomo de hidrógeno unido al oxígeno en una molécula de alcohol y un átomo de oxígeno de otra molécula de alcohol (ver figura 1), lo que aumenta su punto de ebullición. Sin embargo, los puentes de hidrógeno de una molécula de alcohol son más débiles a medida que aumenta la cantidad de carbono en su estructura.') +
  F('q5-q78-estructuras', 'Tres fórmulas estructurales. Figura 1: dos moléculas unidas por un puente de hidrógeno punteado entre el hidrógeno de una y el oxígeno de la otra. Figura 2, etilenglicol: dos carbonos en cadena, cada uno con un grupo OH. Figura 3, propanol: tres carbonos en cadena con un solo grupo OH en un extremo.'),
  'Teniendo en cuenta lo anterior, ¿cuál de las estructuras de las figuras 2 y 3 presentará mayor punto de ebullición?',
  ['El propanol, porque tiene mayor número de carbonos, lo cual modifica el número de puentes de hidrógeno.',
   'El propanol, porque tiene menor número de oxígenos, lo cual disminuye el número de puentes de hidrógeno.',
   'El etilenglicol, porque tiene mayor número de oxígenos, lo cual disminuye el número de puentes de hidrógeno.',
   'El etilenglicol, porque tiene mayor número de carbonos, lo cual aumenta el número de puentes de hidrógeno.'], 2,
  'El etilenglicol tiene dos grupos OH y el propanol solo uno, así que el etilenglicol puede formar más puentes de hidrógeno y por eso hierve a mayor temperatura. Además el enunciado avisa de que los puentes se debilitan cuando crece la cadena de carbonos, y el propanol tiene tres carbonos frente a los dos del etilenglicol: las dos razones apuntan al mismo lado. La opción que nombra el etilenglicol por sus carbonos se equivoca de dato, porque es el que menos tiene.',
  'Cuenta los grupos OH de cada estructura: cada uno es una posibilidad más de formar puente de hidrógeno.',
  { confianza: 'media' });

/* ═════════ 79 · isótopos ═════════ */
Q(79, 'Teoría atómica', 'media',
  P('A continuación se presentan los modelos atómicos de tres átomos (I, II y III) de un mismo elemento, donde se muestra el número de electrones, protones y neutrones.') +
  F('q5-q79-atomos', 'Tres modelos atómicos. En los tres hay un electrón girando alrededor del núcleo. El átomo I tiene un protón en el núcleo; el II, un protón y un neutrón; el III, un protón y dos neutrones.'),
  'Teniendo en cuenta la información anterior, ¿cuál de las siguientes afirmaciones es válida acerca de las estructuras de los anteriores átomos?',
  ['El átomo I tiene más electrones que el átomo III.',
   'Los tres átomos tienen el mismo número de neutrones.',
   'El átomo II tiene más electrones que el átomo III.',
   'Los tres átomos tienen el mismo número de protones.'], 3,
  'El enunciado dice que son átomos del mismo elemento, y lo que define a un elemento es su número de protones: si cambiara, ya sería otro elemento. En los tres dibujos hay un solo protón. Los electrones también son uno en cada uno, así que ninguno tiene más que otro. Lo que sí cambia de un dibujo al siguiente es la cantidad de neutrones, que va de cero a dos: por eso son isótopos.',
  'Recuerda qué partícula define de qué elemento se trata. Esa es la que no puede cambiar entre los tres.');

/* ═════════ 80 · estado de oxidación ═════════ */
Q(80, 'Teoría atómica', 'alta',
  P('En la tabla se muestra la configuración electrónica de un átomo y de un ion de aluminio.') +
  '<table class="ctx-table">' +
  '<tr><th></th><th>Aluminio neutro</th><th>Ion de aluminio</th></tr>' +
  '<tr><td>Configuración electrónica</td><td>1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>1</sup></td>' +
  '<td>1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup></td></tr></table>',
  'Teniendo en cuenta que el estado de oxidación de un átomo se determina conociendo los cambios en el número de electrones de la configuración electrónica respecto al átomo neutro, se puede afirmar que el estado de oxidación del ion de aluminio es de 3+, porque',
  ['el último nivel de energía de su configuración electrónica es 3.',
   'tiene 3 electrones menos en su configuración electrónica que el aluminio.',
   'tiene 3 electrones más en su configuración electrónica que el aluminio.',
   'el número total de electrones en su configuración electrónica es 3.'], 1,
  'Basta con sumar los superíndices de cada fila. El aluminio neutro tiene 2 más 2 más 6 más 2 más 1, que son 13 electrones; el ion tiene 2 más 2 más 6, que son 10. Perdió tres electrones, y perder carga negativa deja al átomo con tres cargas positivas de más: por eso el 3+. Si hubiera ganado electrones la carga sería negativa, y los 10 electrones que le quedan no son 3.',
  'Suma los electrones de cada configuración y resta. El signo lo da si perdió o ganó.');

/* ═════════ 81 · qué es una conclusión ═════════ */
Q(81, 'Indagación experimental', 'media',
  P('Cuatro estudiantes quieren saber si la tinta púrpura está conformada por varios colores que fueron mezclados.') +
  P('Ellos tienen la hipótesis de que tanto el etanol como el agua son disolventes que podrán separar la mezcla de tinta. Para evaluarla toman una gota de la tinta y separan los colores que la componen usando ambos disolventes, y descubren que la tinta púrpura está compuesta de los colores rojo y azul. Finalmente, con estos resultados concluyen que tanto el agua como el etanol separan la mezcla de tinta en sus dos colores: rojo y azul.') +
  P('Cada uno de los estudiantes decide elaborar una cartelera para resumir las conclusiones de la investigación.'),
  '¿Cuál de las siguientes carteleras presenta adecuadamente las conclusiones de la investigación?',
  ['<b>Conclusiones del estudiante 1</b><ul><li>Agregar una gota de tinta púrpura en etanol.</li><li>Agregar una gota de tinta púrpura en agua.</li></ul>',
   '<b>Conclusiones del estudiante 2</b><ul><li>El agua y el etanol son apropiados para separar los colores de la tinta púrpura.</li><li>La tinta púrpura está compuesta por los colores rojo y azul.</li></ul>',
   '<b>Conclusiones del estudiante 3</b><ul><li>La tinta púrpura está compuesta por más colores que la tinta azul y rosada.</li><li>Las tintas púrpura y roja pueden usarse en esferos.</li></ul>',
   '<b>Conclusiones del estudiante 4</b><ul><li>El etanol puede separar los colores que componen la tinta púrpura, pero el agua no puede hacer esta separación.</li><li>Una gota de tinta púrpura está compuesta de etanol y agua.</li></ul>'], 1,
  'Una conclusión responde a lo que se preguntó usando lo que se observó. Aquí se preguntó si la tinta es una mezcla y si los dos disolventes sirven, y se vio que sí en ambos casos: esa es la cartelera correcta. Otra de ellas enumera lo que se hizo, que es el procedimiento y no una conclusión. Otra habla de tintas que nunca se probaron y de para qué sirven, cosas que el experimento no midió. Y la última afirma que el agua no sirvió, justo lo contrario de lo observado.',
  'Separa tres cosas: lo que se hizo, lo que se vio y lo que se concluye. Solo lo tercero puede ir en una cartelera de conclusiones.');

/* ═════════ 82 · dos maneras de decir la misma concentración ═════════ */
Q(82, 'Soluciones', 'alta',
  P('A continuación se presentan dos unidades mediante las cuales se puede medir la concentración de una disolución:') +
  M('% p/V = masa de sustancia (g) ÷ 100 mL de disolución × 100 %') +
  M('M = masa de sustancia (mol) ÷ 1 L de disolución &nbsp;&nbsp; (1 L = 1000 mL)') +
  P('Un estudiante tiene dos disoluciones de distinta concentración de una misma sustancia, cuya masa es 200 g por cada mol, como se muestra a continuación.') +
  F('q5-q82-disoluciones', 'Dos recipientes graduados iguales, marcados de 50 a 200 mililitros. La disolución 1 tiene volumen 100 mililitros y concentración 20 %; la disolución 2, volumen 100 mililitros y concentración 1 molar.'),
  'Teniendo en cuenta la masa de un mol de la sustancia, ¿son equivalentes las concentraciones de ambas disoluciones?',
  ['Sí, porque las dos disoluciones tienen un volumen diferente.',
   'Sí, porque de acuerdo con el valor de la masa, 1 mol/L equivale a 200 g/1000 mL, que sería igual a 20 % p/V.',
   'No, porque la cantidad de moles son las mismas en las dos disoluciones, de manera que la concentración no cambia.',
   'No, porque las disoluciones están preparadas con la misma sustancia.'], 1,
  'Hay que llevar las dos concentraciones a la misma unidad. Un molar significa un mol por litro, y como cada mol pesa 200 gramos, eso son 200 gramos en 1000 mililitros. Reduciendo a la décima parte: 20 gramos en 100 mililitros, que es exactamente lo que significa 20 % peso-volumen. Así que sí son equivalentes. Y no por las razones de las otras opciones: los dos volúmenes son iguales, 100 mililitros, y usar la misma sustancia no dice nada sobre la concentración.',
  'Convierte la concentración molar a gramos por cada 100 mL y compárala con el porcentaje.');

/* ═════════ 83 · gases ideales ═════════ */
Q(83, 'Gases', 'media',
  P('En la tabla se muestran las variaciones de presión de una cantidad fija de un gas en un recipiente cerrado, variando la temperatura, pero manteniendo las demás condiciones sin variar.') +
  '<table class="ctx-table"><tr><th>Temperatura (K)</th><th>Presión (atm)</th></tr>' +
  '<tr><td>298</td><td>1</td></tr><tr><td>323</td><td>2</td></tr><tr><td>373</td><td>4</td></tr></table>' +
  P('Un estudiante quiere explicar este comportamiento y recurre a la ley de los gases ideales:') +
  M('P V = n R T') +
  P('Donde P es la presión, V el volumen, n el número de moles, R la constante de los gases ideales y T la temperatura.'),
  'Con base en la información anterior, y teniendo en cuenta la ley de los gases ideales, ¿cómo cambia el comportamiento del gas cuando aumenta la temperatura en el recipiente?',
  ['Aumenta el número de moles del gas.', 'Disminuye el volumen del gas.',
   'Aumenta la presión del gas.', 'Disminuye la densidad del gas.'], 2,
  'La tabla misma lo enseña: al pasar de 298 a 373 kelvin la presión sube de 1 a 4 atmósferas. Y la fórmula lo explica: el recipiente es cerrado y rígido, así que el volumen no cambia, y la cantidad de gas tampoco, porque no entra ni sale nada. Con el volumen y los moles fijos, si sube la temperatura del lado derecho tiene que subir la presión del izquierdo. La densidad es masa sobre volumen, y ninguna de las dos cambió.',
  'Marca en la fórmula qué se mantiene fijo por el enunciado. Lo que queda es lo único que puede moverse.');

/* ═════════ 84 · separar agua, hierro y aceite ═════════ */
Q(84, 'Materia: clasificación y propiedades', 'media',
  P('Se tiene una mezcla de dos líquidos no solubles entre sí (agua y aceite) y partículas sólidas de hierro metálico (limadura de hierro). El hierro es un metal ferromagnético que es atraído por el campo magnético de los imanes. Para separar los componentes de la mezcla se cuenta con los métodos de separación que se muestran en la tabla.') +
  '<table class="ctx-table"><tr><th>Método</th><th>Descripción</th></tr>' +
  '<tr><td>Filtración</td><td>Separa sólidos insolubles de líquidos.</td></tr>' +
  '<tr><td>Decantación</td><td>Separa líquidos que no se solubilizan entre sí y tienen diferentes densidades.</td></tr>' +
  '<tr><td>Sublimación</td><td>Separa mezclas de sólidos donde uno de ellos pasa de sólido a gas, sin pasar por el estado líquido.</td></tr>' +
  '<tr><td>Separación magnética</td><td>Separa los componentes que son atraídos por imanes de una mezcla.</td></tr></table>',
  'Con base en la información anterior, ¿cuáles métodos específicos son los más adecuados para obtener por separado el agua, el hierro y el aceite?',
  ['Separación magnética y decantación.', 'Filtración y separación magnética.',
   'Filtración y sublimación.', 'Separación magnética y sublimación.'], 0,
  'Son dos problemas distintos. El hierro es un sólido que el imán atrae, así que sale con separación magnética; la filtración también lo sacaría, pero desaprovecha la propiedad que el enunciado se molesta en mencionar. Lo que queda son dos líquidos que no se mezclan y tienen densidades distintas, y para eso está la decantación: el aceite queda arriba y el agua abajo. La sublimación no sirve porque ninguno de los tres pasa de sólido a gas.',
  'Trata cada componente por separado y busca en la tabla el método que aprovecha justo su propiedad.');

/* ═════════ 85 · qué es un compuesto ═════════ */
Q(85, 'Reacciones químicas', 'media',
  P('A continuación se muestran 3 pasos que describen la reacción que ocurre entre KI y Ag+, y el filtrado del AgI que resultó como producto.') +
  F('q5-q85-agi', 'Tres pasos. Uno: se vierte KI sobre un recipiente con iones Ag+. Dos: la mezcla contiene ya AgI. Tres: el AgI, filtrado, queda como un sólido sobre la superficie.'),
  'En el paso 3, el producto AgI es un compuesto porque',
  ['es una nueva sustancia constituida por dos átomos diferentes de la tabla periódica.',
   'siempre que se mezclen dos sustancias sólidas se formará un compuesto.',
   'todas las sustancias sólidas que se encuentran en la naturaleza son compuestos.',
   'presenta un solo elemento de la tabla periódica en su estructura química.'], 0,
  'Un compuesto es una sustancia formada por átomos de elementos distintos unidos químicamente. El AgI cumple: tiene plata y yodo, dos elementos diferentes, unidos en una sustancia nueva que no es ninguno de los dos de partida. Tener un solo elemento sería justo lo contrario, eso sería una sustancia simple. Y ni mezclar dos sólidos produce siempre un compuesto —muchas mezclas se quedan en mezclas— ni todo sólido natural es un compuesto: el oro y el azufre, por ejemplo, no lo son.',
  'Repasa la definición de compuesto y comprueba cuántos elementos distintos hay en la fórmula.');

/* ═════════ 86 · comparar pH ═════════ */
Q(86, 'Ácidos, bases y pH', 'media',
  P('Juan considera que algunas de las sustancias que consumimos son más ácidas que otras, por eso él tiene la hipótesis de que entre el jugo de naranja, el café y la leche, el pH del jugo de naranja es el menor y el de la leche es el mayor.'),
  'Si la hipótesis de Juan es verdadera, ¿cuál de las siguientes gráficas representa los resultados esperados?',
  [F('q5-q86-a', 'Gráfica de barras de pH: el jugo de naranja es la barra más alta, el café la más baja y la leche queda en un valor intermedio.'),
   F('q5-q86-b', 'Gráfica de barras de pH: el jugo de naranja queda en un valor intermedio, el café es la barra más baja y la leche la más alta.'),
   F('q5-q86-c', 'Gráfica de barras de pH: el jugo de naranja es la barra más baja, el café queda en medio y la leche es la más alta.'),
   F('q5-q86-d', 'Gráfica de barras de pH: el jugo de naranja es la barra más alta, el café queda en medio y la leche es la más baja.')], 2,
  'La hipótesis fija los dos extremos: el jugo de naranja abajo y la leche arriba. Eso obliga a que las tres barras crezcan en ese orden, de izquierda a derecha, quedando el café en medio. Solo una de las gráficas lo hace. Dos de ellas ponen el jugo de naranja como la barra más alta, que es exactamente lo contrario de lo que dice la hipótesis, y otra deja la leche por debajo del jugo.',
  'Traduce la hipótesis a un orden entre las tres barras y busca la gráfica que lo respeta de punta a punta.');

/* ═════════ 87 · configuración de un ion ═════════ */
Q(87, 'Teoría atómica', 'alta',
  P('Un ion es una especie química que ha ganado o perdido electrones y por lo tanto tiene carga. La configuración electrónica para un átomo neutro «P» con Z = 19 es 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>1</sup>.'),
  'De acuerdo con esto, la configuración electrónica más probable para el ion P<sup>+1</sup> es',
  ['1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup>',
   '1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup>',
   '1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>5</sup>',
   '1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 3d<sup>1</sup>'], 1,
  'La carga +1 significa que el átomo perdió un electrón, así que hay que quitar uno de los 19. Y no se quita de cualquier sitio: sale el del nivel más externo, que aquí es el único electrón del 4s. Al irse, ese subnivel desaparece de la configuración y queda terminando en 3p6, con 18 electrones. Quitar el electrón del 3p sería sacarlo de un nivel más interno, y las otras dos opciones añaden electrones en vez de quitarlos.',
  'Carga positiva es electrones perdidos. Quita el del nivel de energía más alto, no el último que escribiste.');

/* ═════════ 88 · poner a prueba una hipótesis ═════════ */
Q(88, 'Indagación experimental', 'media',
  P('Un estudiante tiene la hipótesis de que un tipo de dulces se disuelve completamente en el mismo tiempo en alcohol, agua y aceite. Para comprobarlo, coloca dulces idénticos, del mismo tamaño, y los sumerge en las tres sustancias. Al transcurrir el mismo tiempo para las tres sustancias obtiene los resultados que se muestran en la tabla.') +
  '<table class="ctx-table"><tr><th>Sustancia</th><th>Observación</th></tr>' +
  '<tr><td>Alcohol</td><td>Se disuelve un poco</td></tr>' +
  '<tr><td>Agua</td><td>Se disuelve completamente</td></tr>' +
  '<tr><td>Aceite</td><td>No se disuelve</td></tr></table>',
  'De acuerdo con lo anterior, se puede afirmar que la hipótesis planteada por el estudiante es',
  ['verdadera, porque el dulce se disuelve completamente en las tres sustancias empleadas.',
   'falsa, porque el dulce se disuelve en un menor tiempo en el agua que en las otras sustancias.',
   'verdadera, porque el tiempo que tarde en disolverse depende del tamaño del dulce empleado.',
   'falsa, porque el dulce podría disolverse en un menor tiempo con una mezcla de alcohol y aceite.'], 1,
  'La hipótesis decía que el dulce se disolvería por completo en las tres sustancias y en el mismo tiempo. La tabla la desmiente: pasado ese tiempo solo el agua lo disolvió del todo, el alcohol apenas un poco y el aceite nada. Así que es falsa, y lo es por lo que se midió: el agua fue mucho más rápida que las otras dos. La opción que la da por verdadera contradice la tabla, y la que habla de mezclar alcohol y aceite propone un experimento que nunca se hizo.',
  'Compara la hipótesis palabra por palabra con lo que dice la tabla. Basta con que falle una parte.');

/* ═════════ 89 y 90 · hielo seco y cambios de estado ═════════ */
const HIELO =
  P('El CO<sub>2</sub>, gas carbónico, en condiciones de presión y temperatura adecuada se puede encontrar en estado sólido y es llamado hielo seco, y es usado frecuentemente como refrigerante. Tiene ventajas como la de refrigerar a menor temperatura que la del hielo y que pasa de estado sólido a gaseoso sin pasar por el estado líquido, lo cual evita deterioros de las sustancias refrigeradas. El dióxido de carbono, CO<sub>2</sub>, en estado líquido se usa en la fabricación de bebidas carbonatadas (bebidas gaseosas) y en extintores.') +
  P('En el siguiente diagrama de fases se indica los cambios de estado de la materia teniendo en cuenta los cambios en las condiciones de presión y temperatura.') +
  F('q5-q89-fases', 'Diagrama con tres estados en triángulo. De sólido a líquido, fusión; de líquido a sólido, solidificación. De sólido a gas, sublimación; de gas a sólido, sublimación inversa. De líquido a gas, vaporización o ebullición; de gas a líquido, condensación o licuefacción.');

Q(89, 'Materia: clasificación y propiedades', 'alta', HIELO +
  F('q5-q89-pt', 'Gráfica de presión contra temperatura con las regiones sólido arriba a la izquierda, líquido en el centro y gas a la derecha, separadas por dos curvas. Sobre ella hay cuatro flechas numeradas: la 1 apunta hacia la derecha dentro de la región del gas; la 2 sube hacia la izquierda cruzando primero la curva que separa gas de líquido y después la que separa líquido de sólido; la 3 apunta hacia la izquierda por la parte baja de la gráfica; y la 4 apunta hacia abajo.'),
  'En la gráfica Presión - Temperatura, teniendo en cuenta el sentido de las flechas, la que mejor representa un proceso donde ocurre condensación y solidificación sería',
  ['4', '2', '1', '3'], 1,
  'Se piden dos cambios seguidos y en ese orden: primero de gas a líquido y después de líquido a sólido. En el dibujo eso significa una flecha que arranque en la región del gas y termine en la del sólido, cruzando por el medio la del líquido. La única que hace ese recorrido completo es la que sube hacia la izquierda: subir es ganar presión y moverse a la izquierda es perder temperatura. La que apunta hacia abajo pierde presión y va del sólido al gas, la de la parte baja pasa de gas a sólido de un solo salto, sin pasar por líquido, y la que apunta a la derecha calienta el gas sin cambiarlo de estado.',
  'Dibuja con el dedo el camino que pide el enunciado —gas, líquido, sólido— y busca la flecha que atraviesa las tres regiones en ese orden.');

Q(90, 'Materia: clasificación y propiedades', 'media', HIELO,
  'En el proceso de sublimación del hielo seco se observa la formación de una nube densa a los alrededores del bloque de hielo seco. Si se sabe que el CO<sub>2</sub> es incoloro y la temperatura del hielo seco es de −75 °C, es muy probable que la formación de esta nube corresponda al',
  ['dióxido de carbono que está pasando de estado sólido a estado gaseoso.',
   'vapor de agua del ambiente que está pasando a estado líquido debido al intenso frío.',
   'dióxido de carbono que está pasando de estado sólido a estado líquido.',
   'agua del ambiente que está pasando a estado gaseoso debido al intenso frío.'], 1,
  'El propio enunciado da la pista que resuelve la pregunta: el dióxido de carbono es incoloro, así que por mucho que se sublime no se puede ver. Lo que sí se ve es agua. A 75 grados bajo cero, el vapor de agua que hay en el aire alrededor del bloque se enfría de golpe y se condensa en gotitas diminutas, y esas gotitas son la nube blanca. Y no puede ser CO2 pasando a líquido, porque el enunciado dice que el hielo seco pasa directo de sólido a gas.',
  'Si un gas es incoloro, no puede ser lo que estás viendo. Pregúntate qué otra sustancia hay alrededor del bloque.');

/* ═════════ 91 · concentración, no cantidad ═════════ */
Q(91, 'Soluciones', 'media',
  P('La contaminación ambiental es la incorporación de sustancias sólidas, líquidas o gaseosas, o mezclas de ellas, a medios receptores que alteran desfavorablemente las condiciones naturales del mismo, o que puedan afectar la salud, la higiene o el bienestar del público. Los medios que reciben los contaminantes son el agua, el aire y el suelo. En la actualidad existen varios métodos de descontaminación de cuerpos de agua, aire y suelo.') +
  P('Se tomaron cuatro (4) muestras de agua contaminada de diferentes lugares. Mediante un análisis, se determinó la cantidad de plomo presente en cada muestra, los resultados se muestran en la tabla.') +
  '<table class="ctx-table"><tr><th>Muestra</th><th>Masa de plomo (mg)</th><th>Volumen de muestra (L)</th></tr>' +
  '<tr><td>1</td><td>2,5</td><td>50</td></tr><tr><td>2</td><td>5,0</td><td>100</td></tr>' +
  '<tr><td>3</td><td>15,0</td><td>200</td></tr><tr><td>4</td><td>50,0</td><td>1.000</td></tr></table>',
  'De acuerdo con la información anterior, es correcto afirmar que la muestra más contaminada es la',
  ['3', '4', '1', '2'], 0,
  'La muestra más contaminada no es la que tiene más plomo, sino la que tiene más plomo por cada litro de agua: si no, ganaría siempre la muestra más grande. Hay que dividir. La 1 da 2,5 entre 50, que son 0,05 miligramos por litro; la 2, 5 entre 100, otra vez 0,05; la 4, 50 entre 1.000, de nuevo 0,05. La 3 da 15 entre 200, que son 0,075: es la única que se sale del grupo, y hacia arriba.',
  'Divide la masa entre el volumen en cada fila. Comparar solo la columna de masa favorece a la muestra más grande.');

/* ═════════ 92 · metal, base y sal ═════════ */
Q(92, 'Nomenclatura química', 'media',
  P('Una muestra de agua contaminada presenta entre sus componentes el elemento X. Este elemento se oxida en presencia de agua y oxígeno. Algunas de las reacciones que el elemento X presenta frente a diferentes sustancias se muestran en las ecuaciones 1, 2 y 3.') +
  M('1. &nbsp; 2X + O<sub>2</sub> → 2XO') +
  M('2. &nbsp; XO + H<sub>2</sub>O → X(OH)<sub>2</sub>') +
  M('3. &nbsp; X(OH)<sub>2</sub> + Z → D + H<sub>2</sub>O') +
  P('Al medir el pH del producto de la reacción 2 se encuentra un valor mayor que 7.'),
  'De acuerdo con la información anterior, se puede afirmar que las sustancias X y D son, respectivamente, un',
  ['no metal y una sal.', 'metal y una sal.', 'metal y un ácido.', 'no metal y una base.'], 1,
  'La pista está en el pH. El producto de la segunda reacción, el hidróxido X(OH)2, da por encima de 7, o sea que es una base, y los óxidos que al juntarse con agua forman bases son los de los metales: los de los no metales forman ácidos. Así que X es un metal. La tercera reacción toma esa base, la hace reaccionar con otra sustancia y devuelve agua más D: eso es una neutralización, y lo que sale junto al agua en una neutralización es una sal.',
  'El pH del producto intermedio te dice si X es metal o no metal. La reacción que libera agua te dice qué tipo de sustancia es D.');

/* ═════════ 93 y 94 · elegir el método de separación ═════════ */
const METODOS =
  P('A continuación se ilustran cuatro métodos de separación de mezclas.') +
  F('q5-q93-metodos', 'Cuatro montajes: magnetismo, que es el método 1; tamizado, el método 3; filtración, el método 2; y decantación, el método 4.') +
  P('Se emplearon algunos materiales, identificados con las letras K, L, H, F, para preparar cuatro mezclas de diferente composición. Posteriormente, cada una de ellas fue separada por el método más apropiado, obteniéndose los siguientes resultados:') +
  '<table class="ctx-table">' +
  '<tr><th>Componente separado</th><th>Método(s) empleado(s)</th><th>Característica de la sustancia</th></tr>' +
  '<tr><td>K</td><td>2 y 4</td><td>Agua. Densidad = 1 g/cm<sup>3</sup></td></tr>' +
  '<tr><td>F</td><td>2, 1 y 3</td><td>Polvo insoluble en agua.</td></tr>' +
  '<tr><td>H</td><td>1</td><td>Trozos con propiedades magnéticas.</td></tr>' +
  '<tr><td>L</td><td>4</td><td>Líquido insoluble en agua. Densidad = 0,6 g/cm<sup>3</sup></td></tr></table>';

Q(93, 'Materia: clasificación y propiedades', 'media', METODOS,
  'El componente L puede ser',
  ['arena.', 'hierro.', 'aceite.', 'sal.'], 2,
  'La tabla dice tres cosas de L: es líquido, no se disuelve en agua y su densidad es 0,6, menor que la del agua. La arena y el hierro quedan fuera de entrada porque son sólidos, y la sal también, además de que se disuelve. El aceite cumple las tres: es líquido, no se mezcla con el agua y flota sobre ella justamente porque es menos denso.',
  'Lee la fila de L como una lista de requisitos y descarta cualquier sustancia que incumpla uno solo.');

Q(94, 'Materia: clasificación y propiedades', 'media', METODOS,
  'El componente F se separa por los métodos 2 y 3, debido a que en dichos métodos se separan los materiales que tienen diferente',
  ['punto de ebullición.', 'tamaño de las partículas.', 'densidad.', 'solubilidad.'], 1,
  'Los métodos 2 y 3 son la filtración y el tamizado, y los dos hacen lo mismo con distintos nombres: dejan pasar lo que es más pequeño que los agujeros y retienen lo que no cabe. Lo que decide en ambos casos es el tamaño de las partículas. La densidad es lo que separa la decantación, el punto de ebullición lo que separa la destilación, y la solubilidad no interviene aquí porque el propio enunciado dice que F es insoluble en agua.',
  'Piensa qué tienen en común un filtro y un colador: los dos clasifican por lo mismo.');

/* ═════════ 95 · destilación ═════════ */
Q(95, 'Materia: clasificación y propiedades', 'media',
  P('Se tiene una mezcla líquida de 3 compuestos X, Y y Z solubles entre sí. Para recolectar cada líquido por separado, se ha decidido tener en cuenta el punto de ebullición de cada uno a 1 atm de presión.') +
  '<table class="ctx-table"><tr><th>Líquido</th><th>X</th><th>Y</th><th>Z</th></tr>' +
  '<tr><td>Punto de ebullición (°C)</td><td>40</td><td>53,1</td><td>82,3</td></tr></table>' +
  P('En el laboratorio hay disponibles cuatro montajes.') +
  F('q5-q95-montajes', 'Cuatro montajes de laboratorio. Filtración: un embudo con papel de filtro sobre un recipiente, que retiene el sólido y deja pasar el líquido. Evaporación: un recipiente ancho calentado con mechero hasta que el líquido se va y queda el sólido. Destilación: un balón con termómetro sobre un mechero, unido a un refrigerante inclinado que recoge aparte el líquido condensado. Decantación: un embudo donde un líquido queda encima del otro y se deja salir el de abajo por la llave.'),
  'De acuerdo con esto, el montaje más adecuado para la separación es',
  ['el de filtración.', 'el de evaporación.', 'el de destilación.', 'el de decantación.'], 2,
  'Los tres líquidos se mezclan entre sí, así que no hay capas que separar ni sólidos que retener: filtrar o decantar no serviría de nada. Lo único distinto que ofrece la tabla son los puntos de ebullición, bastante separados: 40, 53,1 y 82,3 grados. Calentando poco a poco hierve primero el de 40, después el de 53,1 y por último el de 82,3, y cada vapor se recoge aparte al volverse líquido en el refrigerante. Eso es una destilación. La evaporación tampoco sirve, porque deja escapar el vapor en vez de recuperarlo.',
  'Pregúntate qué propiedad es la única que distingue a los tres líquidos, y qué montaje la aprovecha.');

/* ═════════ 96 · elemento o compuesto ═════════ */
Q(96, 'Materia: clasificación y propiedades', 'media',
  P('A continuación se muestran las fórmulas estructurales de las sustancias R, J y T.') +
  F('q5-q96-estructuras', 'Tres fórmulas. R: dos carbonos unidos por doble enlace, cada uno con dos hidrógenos. J: tres átomos de oxígeno unidos entre sí. T: un carbono unido por dobles enlaces a dos oxígenos.'),
  'De las estructuras anteriores, es válido afirmar que',
  ['R y J son compuestos y T es un elemento.', 'R y T son elementos y J es un compuesto.',
   'J y T son compuestos y R es un elemento.', 'R y T son compuestos y J es un elemento.'], 3,
  'La regla es contar cuántos elementos distintos aparecen en cada fórmula. R tiene carbono e hidrógeno, dos elementos: es un compuesto. T tiene carbono y oxígeno, también dos: compuesto. J está hecha solo de oxígeno, un único elemento, por muchos átomos que tenga: es una sustancia simple, no un compuesto. Que una fórmula tenga varios átomos no la convierte en compuesto; lo que cuenta es que sean de elementos diferentes.',
  'No cuentes átomos, cuenta elementos distintos. Tres átomos del mismo elemento siguen siendo un solo elemento.');

/* La ruta continúa después de qui-1, que trajo la pregunta colada en el
   cuadernillo de física. Los cuestionarios se arman por el componente de la
   hoja de Herman; «Materia: clasificación y propiedades» son ocho preguntas y
   se parten en dos para que ninguno pase de cuatro. */
const CUESTIONARIOS = {
  qui: [
    { tema: 'Materia: clasificación y propiedades', items: [
      { id: 'qui-2',  titulo: 'Aladín · Clasificar y separar materia', qs: [0, 7, 16, 17],   tipo: 'Situación' },
      { id: 'qui-3',  titulo: 'Aladín · Cambios de estado',            qs: [12, 13, 18, 19], tipo: 'Situación' },
    ]},
    { tema: 'Teoría atómica', items: [
      { id: 'qui-4',  titulo: 'Aladín · Átomos, iones y configuración', qs: [2, 3, 10],      tipo: 'Situación' },
    ]},
    { tema: 'Orgánica', items: [
      { id: 'qui-5',  titulo: 'Aladín · Alcoholes y puentes de hidrógeno', qs: [1],          tipo: 'Situación' },
    ]},
    { tema: 'Indagación experimental', items: [
      { id: 'qui-6',  titulo: 'Aladín · Hipótesis y conclusiones',     qs: [4, 11],          tipo: 'Situación' },
    ]},
    { tema: 'Soluciones', items: [
      { id: 'qui-7',  titulo: 'Aladín · Concentración de disoluciones', qs: [5, 14],         tipo: 'Situación' },
    ]},
    { tema: 'Gases', items: [
      { id: 'qui-8',  titulo: 'Aladín · Gases ideales',                qs: [6],              tipo: 'Situación' },
    ]},
    { tema: 'Reacciones químicas', items: [
      { id: 'qui-9',  titulo: 'Aladín · Formación de compuestos',      qs: [8],              tipo: 'Situación' },
    ]},
    { tema: 'Ácidos, bases y pH', items: [
      { id: 'qui-10', titulo: 'Aladín · Comparar el pH',               qs: [9],              tipo: 'Situación' },
    ]},
    { tema: 'Nomenclatura química', items: [
      { id: 'qui-11', titulo: 'Aladín · Lenguaje químico',             qs: [15],             tipo: 'Situación' },
    ]},
  ],
};
