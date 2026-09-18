/* Lectura Crítica · Simulacro 12 (Pato Donald), primera sesión · lote 2026-B
 *
 * Preguntas 61 a 96, las 36 que trae la sección. Es el primer contenido real
 * de Lectura Crítica: lo que había hasta hoy eran diez preguntas que escribí
 * yo para el prototipo, con textos inventados, y un estudiante las jugaba
 * creyendo que eran ICFES.
 *
 * Aquí no se recorta nada. Lectura Crítica no tiene figuras de datos: tiene
 * textos, y los textos se transcriben. Las tres piezas gráficas —las dos
 * tiras de Calvin y Hobbes, la caricatura del «Dios conejo» y la infografía
 * de Siddharta— se pasan a texto con el diálogo y la descripción de lo que se
 * ve. Hay dos razones y las dos pesan:
 *
 *   1. Un recorte de una tira cómica es ilegible con lector de pantalla, y
 *      estas preguntas piden justamente interpretar el diálogo y el gesto.
 *      Transcritas, la pregunta se puede contestar sin ver.
 *   2. Son obra de autores vivos e identificables —Watterson, sobre todo— y
 *      esto va dentro de un producto que se vende. Reproducir el dibujo es
 *      distinto de citar el texto.
 *
 * Cada estímulo conserva la atribución que trae el cuadernillo.
 *
 * Cuatro claves quedan marcadas con confianza media, y por motivos distintos:
 *
 *   · La 76 pregunta por el «deseo» de la señora Decker. El diálogo empieza
 *     pidiendo la mitad y termina apostando por el todo; leí la apuesta.
 *   · La 79 depende de una infografía cuyo diamante partido admite dos
 *     lecturas razonables.
 *   · La 86 no tiene ninguna opción que diga limpiamente lo que dice Weil;
 *     elegí la menos mala.
 *   · La 95 está mal construida en el original: ninguna opción ataca la razón
 *     real de Calvin, que es que los depredadores le parecen más geniales.
 *
 * Y una errata del cuadernillo que se transcribe tal cual: la 69 cita el
 * texto como «la innata buena fe» donde el texto dice «mala fe». No cambia la
 * respuesta —pregunta por un antónimo de «locuacidad»— pero está ahí.
 *
 * Claves propuestas por el modelo, sin revisión docente.
 */

const P = txt => `<p>${txt}</p>`;
const FUENTE = txt => `<p class="ctx-fuente"><small>${txt}</small></p>`;
const VINETA = (quien, dice) =>
  `<p><b>${quien}:</b> «${dice}»</p>`;

const BANKS = { lc: [] };
const Q = (numero, comp, dificultad, context, text, opts, correct, exp, tip, extra = {}) =>
  BANKS.lc.push({ numero, comp, dificultad, ctxLabel: 'LECTURA CRÍTICA', ctxClass: 'ctx-pasaje',
                  context, text, opts, correct, exp, tip, ...extra });

/* ═════════ 61-63 · Coca-Cola ═════════ */
const COCACOLA =
  P('<b>Un examen instructivo, aunque poco satisfactorio, de la Coca-Cola</b>') +
  P('Recientemente me topé con el libro <i>El ciudadano Coca-Cola: La construcción del capitalismo Coca-Cola</i> de Bartow Elmore y pensé, equivocadamente, que recibiría una versión de lo bueno, lo malo y lo feo sobre esta famosa compañía de gaseosa. En lugar de cumplir con la promesa de explicar como «una patente de una medicina, creada en una pequeña farmacia sureña en 1886 [se convirtió] en uno de los artículos de marca más <u>omnipresentes</u> de la historia humana», Elmore, historiador de la Universidad de Alabama, usa 432 páginas para pintar la Coca-Cola como una especie de Satán. Un diablo corporativo que engulle agua y saquea el medio ambiente, y que no se detiene ante nada a fin de «vender más, no menos». Como si cualquier empresa con fines de lucro no hiciera lo mismo.') +
  P('El autor, sin embargo, menciona pocas veces a los clientes de la Coca-Cola. Al principio, los aficionados a la Coca-Cola ahorraban 5 centavos para una bebida de 8 onzas. Y después, en el curso del Siglo, millones de personas se convirtieron en el tipo de consumidores que no solo desearon más Coca-Cola, sino que la exigieron y la utilizaron para reemplazar bebidas más nutritivas. Mucho más interesante es la atención de Elmore al detalle cuando relata cómo evolucionó la Coca-Cola como respuesta a la presión del consumidor y del gobierno, primero para despojar a la bebida de cocaína y después para disminuir la cantidad masiva de cafeína.') +
  P('Sin embargo, el autor hubiera podido mencionar también la conexión entre esas exitosas iniciativas de salud pública con otras menos conocidas. Por ejemplo, la presión a la empresa para reducir muy silenciosamente su cantidad de carbohidratos por onza reemplazando el jarabe de maíz de alto contenido de fructosa por edulcorantes no-calóricos. Finalmente, aunque eficaz para detallar los efectos negativos para el medio ambiente y para la salud de una empresa que en 2.012 vendió una Coca-Cola persona por cada cuatro personas en el planeta por día, Elmore podría haber incluido más ejemplos de otros gigantes de la industria alimenticia para ilustrar cómo Coca-Cola es una pequeña pieza en el engranaje de la cadena alimenticia industrializada.') +
  FUENTE('Esther J. Cepeda. Tomado y adaptado de: http://sindication');

Q(61, 'Función de expresiones', 'media', COCACOLA,
  'Con la oración «Como si cualquier empresa con fines de lucro no hiciera lo mismo», al final del segundo párrafo, la autora',
  ['asevera que la Coca-Cola es una bebida perjudicial para la salud humana.',
   'afirma que las empresas con ánimo de lucro se comportan de manera similar.',
   'niega que las compañías de gaseosa sean nocivas para la salud y el medio ambiente.',
   'cuestiona que la historia de la Coca-Cola sea como la de cualquier compañía de gaseosa.'], 1,
  'La oración va justo después de reprocharle a Elmore que pinte a la Coca-Cola como un diablo corporativo que no se detiene ante nada con tal de vender más. Al decir «como si cualquier empresa con fines de lucro no hiciera lo mismo», la autora no está defendiendo a la Coca-Cola ni negando el daño: está diciendo que ese comportamiento no la distingue, porque toda empresa que busca lucro hace lo mismo. Es una crítica al libro, no a la bebida.',
  'Lee la oración pegada a la frase anterior. Una expresión como «como si…» casi siempre matiza lo que se acaba de decir.');

Q(62, 'Semántica y léxico', 'baja', COCACOLA,
  'Considere la frase «uno de los artículos de marca más <u>omnipresente</u> de la historia humana». En ese contexto, el término con un significado opuesto al de la palabra subrayada es',
  ['ubicuos.', 'escasos.', 'invasivos.', 'misteriosos.'], 1,
  'Omnipresente quiere decir que está en todas partes. Su contrario es lo que casi no se encuentra, y eso es escaso. Ubicuo es un sinónimo, no un antónimo: significa exactamente lo mismo. Invasivo tampoco sirve, porque va en la misma dirección de estar en todos lados. Y misterioso habla de algo desconocido, que es otra cosa: algo puede ser común y misterioso a la vez.',
  'Busca el contrario de «estar en todas partes», no el contrario de «ser famoso».');

Q(63, 'Punto de vista del autor', 'media', COCACOLA,
  '¿Quién o quiénes intervienen en el texto?',
  ['Una periodista, quien critica severamente a las compañías de gaseosas.',
   'Una periodista, quien reseña un libro de un historiador sobre la Coca-Cola.',
   'Una periodista y un historiador, quienes debaten sobre la compañía Coca-Cola.',
   'Una periodista y un académico, quienes discuten los efectos nocivos de la Coca-Cola.'], 1,
  'Quien escribe es una sola persona, Esther Cepeda, y lo que hace es reseñar: cuenta que se topó con el libro de Elmore, dice qué esperaba, qué encontró y qué le faltó. Elmore no interviene en el texto, solo es el autor reseñado, así que no hay debate ni discusión entre dos voces. Y ella no critica a las compañías de gaseosa: critica el libro, que es distinto.',
  'Cuenta cuántas voces escriben aquí, no cuántas personas se mencionan.');

/* ═════════ 64-65 · tira del tigre ═════════ */
const TIRA_TIGRE =
  P('La siguiente historieta está compuesta por cuatro viñetas en las que conversan un niño y un tigre.') +
  P('<b>Primera viñeta.</b> El niño y el tigre caminan juntos.') +
  VINETA('Niño', '¿Crees que los tigres van al mismo cielo que las personas?') +
  P('<b>Segunda viñeta.</b> El tigre responde mientras el niño lo escucha.') +
  VINETA('Tigre', 'Se supone que en el cielo todos somos felices, ¿no? ¡Pero la gente no será feliz si corre el riesgo de ser devorada por un tigre!') +
  P('<b>Tercera viñeta.</b> El niño reflexiona.') +
  VINETA('Niño', 'Por otra parte, el cielo no sería divertido sin tigres. Yo no sería feliz sin tigres. Los echaría de menos.') +
  P('<b>Cuarta viñeta.</b> El tigre se lleva una mano al mentón, con gesto de haber caído en la cuenta de algo.') +
  VINETA('Niño', 'Quizás, en el cielo, los tigres no se coman a la gente.') +
  VINETA('Tigre', 'Entonces, nosotros no seríamos felices.');

Q(64, 'Función de expresiones', 'media', TIRA_TIGRE,
  'En la cuarta viñeta, la expresión del tigre «Entonces nosotros no seríamos felices» y su gesto dan a entender que',
  ['ni el tigre ni el niño serían felices en el cielo, si la gente va al cielo.',
   'el tigre no sería feliz en el cielo, si los demás tigres van al cielo.',
   'los tigres no serían felices en el cielo, si allí no pueden comer gente.',
   'nadie sería feliz en el cielo, si los tigres y las personas van a cielo.'], 2,
  'El niño acaba de proponer una salida: que en el cielo los tigres no se coman a la gente. El tigre contesta a esa propuesta, y el «nosotros» de su frase son los tigres. Está diciendo que si les quitan eso, entonces los que quedan infelices son ellos. El gesto de caer en la cuenta refuerza que acaba de encontrarle el problema a la solución del niño, no que esté hablando de los dos juntos.',
  'Fíjate a quién responde el tigre y a quiénes incluye su «nosotros».');

Q(65, 'Inferencia', 'media', TIRA_TIGRE,
  'De acuerdo con la caricatura, el niño y los tigres no pueden ser felices en el cielo porque',
  ['los tigres no quieren comerse a la gente y el niño no echaría de menos a los tigres.',
   'los tigres quieren comerse a la gente y el niño no echaría de menos a los tigres.',
   'los tigres no quieren comerse a la gente y el niño echaría de menos a los tigres.',
   'los tigres quieren comerse a la gente y el niño echaría de menos a los tigres.'], 3,
  'La historieta arma un callejón sin salida con dos piezas, y las dos son afirmativas. Los tigres quieren comer gente, así que si la gente va al cielo no está tranquila; y el niño echaría de menos a los tigres, así que un cielo sin tigres tampoco lo haría feliz. Las opciones que niegan alguna de las dos rompen justamente lo que crea el problema: si los tigres no quisieran comer gente, o si al niño le diera igual, habría solución.',
  'Escribe las dos condiciones que la tira da por ciertas. Ninguna de las dos está negada.');

/* ═════════ 66-69 · Schopenhauer ═════════ */
const SCHOPENHAUER =
  P('La dialéctica erística es el arte de discutir, y de discutir de tal modo que uno siempre lleve razón, es decir, <i>per fas et nefas</i> [justo o injustamente]. Uno puede, pues, tener razón objetiva en el asunto mismo y, sin embargo, carecer de ella a ojos de los presentes, incluso a veces a los propios ojos. Ese es el caso cuando, por ejemplo, el adversario refuta mi prueba y esto se considera una refutación de la propia afirmación, para la cual puede no obstante haber otras pruebas; en cuyo caso, naturalmente, la situación se invierte para el adversario: sigue llevando razón aunque objetivamente no la tenga. Por tanto, la verdad objetiva de una proposición y su validez en la aprobación de los que discuten y sus oyentes son dos cosas distintas. (De este último se ocupa la dialéctica.)') +
  P('¿A qué se debe esto? A la natural maldad del género humano. Si no existiera esta, si fuéramos por naturaleza honrados, en todo debate no tendríamos otra finalidad que la de poner de manifiesto la verdad, sin importarnos en nada que esta se conformara a la primera opinión que hubiéramos expuesto o a la del otro; esto sería indiferente, o por lo menos completamente secundario. Pero ahora es lo principal. La vanidad innata, especialmente susceptible en lo tocante a las capacidades intelectuales, se niega a admitir que lo que hemos empezado exponiendo resulte ser falso y cierto lo expuesto por el adversario. En este caso, todo lo que uno tendría que hacer sería esforzarse por juzgar correctamente, para lo cual tendría que pensar primero y hablar después. Pero a la vanidad innata se añaden en la mayoría la locuacidad y la innata mala fe. Hablan antes de pensar y al observar después que su afirmación es falsa y que no tienen razón, deben aparentar que es al revés. El interés por la verdad, que en la mayoría de los casos pudo haber sido el único motivo al exponer la tesis supuestamente verdadera, cede ahora del todo a favor del interés por la vanidad: lo verdadero debe parecer falso y lo falso verdadero.') +
  P('Sin embargo, incluso esa mala fe, el persistir en una tesis que ya nos parece falsa a nosotros mismos, aún tiene una disculpa: muchas veces, al principio estamos firmemente convencidos de la verdad de nuestra afirmación, pero el argumento del adversario parece desbaratarla; si nos damos de inmediato por vencidos, frecuentemente descubrimos después que éramos nosotros quienes teníamos razón: el argumento salvador no se nos ocurrió en ese momento. De ahí surge en nosotros la máxima de que aun cuando el contraargumento parezca correcto y convincente, no obstante hay que oponerse a él en la creencia de que esa corrección no es sino aparente y que durante la discusión ya se nos ocurrirá un argumento para rebatirlo o para confirmar de algún otro modo nuestra verdad. Por ese motivo nos vemos casi forzados, o al menos fácilmente tentados, a la mala fe en la discusión. De tal manera se amparan mutuamente la debilidad de nuestro entendimiento y lo torcido de nuestra voluntad.') +
  FUENTE('Tomado de: Arthur Schopenhauer, <i>El arte de tener la razón</i>. Alianza Editorial, Madrid 2006.');

Q(66, 'Tesis y argumentos', 'alta', SCHOPENHAUER,
  'Considere el siguiente fragmento del texto anterior: «La vanidad innata, especialmente en lo tocante a las capacidades intelectuales, se niega a admitir que lo que hemos empezado exponiendo resulte ser falso y cierto lo expuesto por el adversario». Este fragmento presenta una razón para sostener la idea de que la verdad no es lo principal en una discusión, ya que',
  ['es absurdo entonces pretender que una discusión lleve a una verdad objetiva, puesto que la vanidad solo produce falsedades.',
   'la vanidad llevaría entonces a que los interlocutores estén más interesados en quedar bien ante sus adversarios y oyentes que en buscar la verdad.',
   'el principal interés de los interlocutores sería entonces enfrentarse con la vanidad para llegar así a un consenso parcialmente verdadero.',
   'las capacidades intelectuales que definen lo que es falso o verdadero dependen entonces de elementos que van más allá de argumentos racionales y válidos.'], 1,
  'El fragmento dice que la vanidad se niega a admitir que uno se equivocó y que el otro tenía razón. Si eso manda, lo que el que discute está cuidando no es la verdad sino su imagen ante el adversario y ante quien escucha. Ese es justo el desplazamiento que el texto describe más adelante: el interés por la verdad cede al interés por la vanidad. Las otras opciones van más lejos de lo que el fragmento sostiene, o le atribuyen al texto una conclusión sobre qué define lo verdadero que no está ahí.',
  'Pregúntate qué gana el vanidoso al no admitir su error, y ante quién.');

Q(67, 'Evaluación crítica', 'alta', SCHOPENHAUER,
  '¿Cuál de las siguientes opciones presenta una crítica válida a la argumentación del autor en los dos primeros párrafos?',
  ['No existen razones para sostener que el interés por la verdad va en contravía del interés por la vanidad.',
   'Es exagerado afirmar que en todo debate los interlocutores siempre tienen intenciones malévolas.',
   'La verdad objetiva de una proposición depende en todos los casos, de la aprobación de los que la discuten.',
   'Refutar un argumento equivale a refutar el enunciado que se sostiene sobre ese argumento.'], 1,
  'El autor explica todo el fenómeno con una sola causa —«la natural maldad del género humano»— y la aplica sin excepciones. Esa generalización es el punto débil: basta un debate honesto para que se caiga, y desde luego los hay. Las otras opciones no son críticas suyas: una repite justamente lo que él niega, otra afirma lo contrario de lo que él dice sobre refutar una prueba, y la primera contradice sin argumento algo que el texto sí sustenta.',
  'Busca la afirmación del autor que no admite excepciones. Ahí suele estar el flanco.');

Q(68, 'Propósito del texto', 'media', SCHOPENHAUER,
  '¿Cuál de los siguientes enunciados presenta el tema principal del texto?',
  ['«Uno puede, pues, tener razón objetiva en el asunto mismo y, sin embargo, carecer de esta a ojos de los presentes».',
   '«La dialéctica erística es el arte de discutir de tal modo que uno siempre lleve razón, es decir, per fas et nefas».',
   '«Si fuéramos por naturaleza honrados, en todo debate no tendríamos otra finalidad que la de poner de manifiesto la verdad».',
   '«La verdad objetiva de una proposición y su validez en la aprobación de los que discuten y sus oyentes son dos cosas distintas».'], 1,
  'El tema principal es aquello de lo que trata todo el texto, y el texto entero trata sobre ese arte de discutir para llevar siempre la razón, sea con justicia o sin ella: primero lo define y después explica de dónde sale. Las otras tres frases son verdaderas y están en el texto, pero son piezas del desarrollo —una consecuencia, una hipótesis contraria, una distinción— y no el asunto que las contiene a todas.',
  'La frase que da el tema suele ser la que define de qué se va a hablar, no una de las que lo desarrollan.');

Q(69, 'Semántica y léxico', 'media', SCHOPENHAUER,
  'En la frase «Pero a la vanidad innata se añaden en la mayoría la locuacidad y la innata buena fe», ¿cuál de las siguientes palabras es un antónimo de locuacidad?',
  ['Ingenuidad.', 'Cordura.', 'Pudor.', 'Discreción.'], 3,
  'Locuacidad es la tendencia a hablar mucho, y de hecho el texto la usa así: los locuaces «hablan antes de pensar». Lo contrario es contenerse, medir lo que se dice y callar cuando conviene, y eso es discreción. Pudor es vergüenza, que tiene que ver con el recato y no con la cantidad de palabras. Cordura se opone a la locura, no a la locuacidad, aunque se parezcan al oído. E ingenuidad se opone a la malicia.',
  'Ojo con «cordura»: suena parecido pero se opone a otra palabra. Piensa en quién habla de más.',
  { confianza: 'media' });

/* ═════════ 70-71 · Chandler ═════════ */
const CHANDLER =
  P('La primera vez que posé mis ojos en Terry Lennox, éste estaba borracho, en un Rolls Royce Silver Wraith frente a la terraza de The Dancers. El encargado de la playa de estacionamiento había sacado el auto y seguía manteniendo la puerta abierta, porque el pie izquierdo de Terry Lennox colgaba afuera como si se hubiera olvidado que lo tenía. El rostro de Terry Lennox era juvenil, pero su cabello blanco como la nieve. Por sus ojos se podía ver que le habían hecho cirugía estética hasta la raíz de los cabellos, pero por lo demás, se parecía a cualquier joven simpático en traje de etiqueta, que ha gastado demasiado dinero en uno de esos establecimientos que sólo existen con ese fin y para ningún otro. Junto a él había una muchacha. El tono rojo profundo de su cabello era encantador; asomaba a sus labios una lejana sonrisa y sobre los hombros llevaba un visón azul que casi lograba que el Rolls Royce pareciera un auto cualquiera. Pero no lo conseguía enteramente; nada hay que pueda lograrlo.') +
  FUENTE('Tomado de: Chandler, R. (1972). <i>El largo adiós</i>. Barcelona: Barral Editores.');

Q(70, 'Función de expresiones', 'media', CHANDLER,
  'La frase «Por sus ojos se podía ver que le habían hecho cirugía estética hasta la raíz de los cabellos» quiere decir que',
  ['el personaje tiene cirugías en los ojos e implantes de pelo.',
   'las múltiples cirugías estéticas del personaje son evidentes.',
   'a partir de sus ojos se puede deducir una frivolidad del personaje.',
   'la vejez del personaje se disimula por sus numerosas cirugías.'], 1,
  'La frase dice que basta mirarle los ojos para notar que se operó, y «hasta la raíz de los cabellos» indica cuánto: no una cirugía, muchas. O sea que las operaciones se le notan. No dice que le hayan operado los ojos: los ojos son por donde se nota. Tampoco habla de implantes de pelo, y aunque el contraste entre el rostro juvenil y el pelo blanco sugiere edad, la frase en sí se limita a decir que las cirugías saltan a la vista.',
  'Separa lo que se ve de dónde se ve. Los ojos aquí son el indicio, no lo operado.');

Q(71, 'Inferencia', 'media', CHANDLER,
  'El narrador describe a Terry Lennox como un',
  ['hombre sensato y superficial.', 'joven mafioso sin principios o escrúpulos.',
   'hombre rico, vanidoso y elegante.', 'joven magnate, atractivo y sibarita.'], 2,
  'Los tres rasgos salen del párrafo. Rico: un Rolls Royce Silver Wraith con encargado de estacionamiento. Vanidoso: se operó la cara hasta la raíz del pelo. Elegante: está en traje de etiqueta. De lo demás no hay nada. El texto no lo relaciona con el crimen, no dice que sea magnate ni dueño de nada, y llamarlo sensato choca de frente con que aparece borracho y con un pie colgando fuera del auto.',
  'Recorre el párrafo buscando el dato que respalda cada adjetivo. El que no tenga dato, descártalo.');

/* ═════════ 72-73 · Mauki ═════════ */
const MAUKI =
  P('<b>Mauki</b>') +
  P('Pesaba ciento diez libras. Tenía el pelo ensortijado y su piel era negra. Pero de un negro muy especial. Ni azulado ni rojizo, sino tirando a ciruela. Se llamaba Mauki y era hijo de un jefe. Tenía tres tambos, palabra melanesia que significa «prohibición» y es prima hermana del término polinesio tabú. Los tres tambos de Mauki eran los siguientes: primero, no podía estrechar manos femeninas ni podía permitir que mujer alguna le tocara ni a él ni a ninguna de sus pertenencias. Segundo, no podía comer almejas ni alimento alguno guisado sobre un fuego al calor del cual se hubieran cocinado dichos moluscos. Tercero, no podía cazar cocodrilos ni navegar en canoas que transportaran una parte de este animal por pequeña que fuera, aunque sólo se tratara de un diente.') +
  P('Tenía la dentadura de un negro distinto, intenso, o, mejor dicho, de un negro hollín. Se la había teñido así su madre en una sola noche frotándola con un mineral en polvo procedente de un yacimiento que había a espaldas de Port Adams, poblado marinero de Malaita, la más indómita de las islas del archipiélago de las Salomón, tan indómita que ni comerciantes ni colonos han logrado hasta ahora poner el pie en ella. Desde los tiempos de los primeros pescadores de cohombro de mar y comerciantes de sándalo, hasta los días recientes de negreros provistos de rifles automáticos y motores de gasolina, decenas y decenas de aventureros blancos han muerto en esa isla víctimas de las hachas y las balas explosivas de los nativos. […]') +
  P('Mauki tenía las orejas agujereadas, no en un sitio ni en dos, sino en un par de docenas. En uno de los orificios más pequeños llevaba una pipa de cerámica. Los mayores eran demasiado grandes para tal adorno. La cazuela de la pipa habría pasado a través de ellos. De hecho, en el agujero más grande de cada oreja llevaba tapones redondos de madera de unas cuatro pulgadas de diámetro. La circunferencia de dichas aberturas medía aproximadamente doce pulgadas y media. Mauki no era muy especial en sus gustos. En los orificios más pequeños llevaba entre otras cosas casquillos vacíos, clavos, tornillos de cobre, pedazos de cuerda, briznas de cables trenzados, tiritas de hojas verdes y, al atardecer, con la fresca, flores de hibisco color escarlata. De ello se deducirá que para andar por la vida no necesitaba bolsillos, los cuales, por otra parte, le estaban vedados por consistir toda su indumentaria en un retazo de percal de varias pulgadas de anchura. En la cabeza lucía una navaja con la hoja cerrada sobre un rizo del cabello. Su posesión más preciada era el asa de un tazón de porcelana que llevaba colgada de un anillo de concha de tortuga pendiente a su vez del tabique nasal.') +
  P('Pero a pesar de estos adornos, su cara resultaba agradable. Era el suyo un rostro hermoso desde cualquier punto de vista, sobre todo tratándose de un nativo de la Melanesia. Sólo tenía un defecto: le faltaba firmeza.') +
  FUENTE('Tomado de: London, J. (1986). <i>Relatos de los mares del Sur</i>. Madrid: Alianza. pp. 40-41.');

Q(72, 'Información literal', 'baja', MAUKI,
  'Según el texto anterior, Mauki no necesitaba bolsillos porque',
  ['llevaba todo lo necesario en sus orejas.', 'tenía las orejas muy agujereadas',
   'tenía las orejas grandes.', 'tenía muchos aretes.'], 0,
  'El texto lo dice con todas las letras: enumera los casquillos, clavos, tornillos, pedazos de cuerda y flores que Mauki cargaba en los agujeros de las orejas, y remata con «de ello se deducirá que para andar por la vida no necesitaba bolsillos». Lo que reemplaza al bolsillo no es que las orejas estén perforadas ni que sean grandes, sino que ahí lleva sus cosas: son el bolsillo. Y lo que lleva no son aretes, son objetos de uso.',
  'Busca la frase donde el texto mismo saca la conclusión, y mira qué viene justo antes.');

Q(73, 'Inferencia', 'media', MAUKI,
  'De la información contenida en el texto anterior, se puede inferir que Mauki era',
  ['un negrero.', 'un príncipe.', 'un caníbal', 'un isleño'], 1,
  'La segunda frase del texto dice que Mauki «era hijo de un jefe», y el hijo de un jefe es lo que en otras palabras llamamos un príncipe. Además sus tres tambos, las prohibiciones rituales que carga, son propias de alguien de rango. Los negreros del texto son los blancos que llegaban armados, no él. Que sea isleño es cierto pero no hay que inferirlo, está dicho; y de canibalismo el texto no dice absolutamente nada.',
  'Una inferencia se apoya en algo que el texto sí dice. Busca el dato sobre su familia.');

/* ═════════ 74-75 · Ley Seca ═════════ */
const LEYSECA =
  P('Lo que llaman la «Ley Seca», a estilo y texto yanquis, está en la mente de varios legisladores y en el corazón de muchos colombianos. Ignoramos si saldrá temprano o tarde o si no saldrá esta ley prohibitiva; vista por un lado parece un prodigio de redención; vista por otro lado, bien puede parecer una solemne necedad. Prodigio, si por ella logran acabarse los crímenes que el consumo de alcohol provoca; necedad, si por ella se entregan las gentes a otras bebidas que las envenenen y las enloquezcan más que el aguardiente de caña y la chicha.') +
  P('Que con la ley se evitarían crímenes de sangre y otras bestialidades es cierto, ciertísimo. Por desgracia, no gozaremos de tanta dicha: la Ley Seca, aunque rija oficial y aparentemente, en cualquier parte, es un imposible físico y moral. Para establecerla habría que tumbar instituciones, leyes sobre tributos, sobre industrias, sobre comercio; habría que acabar con la química, con el reino vegetal y con el agua del cielo. El tal linaje humano parece necesitar de algo que lo intoxique, bien porque se lo exija el organismo, bien por buscar en la embriaguez olvido de pesares o mirajes de ilusión. ¿Quién se escapa de la quimera? Todos los pueblos, bárbaros o avanzados, han perseguido en todo tiempo y lugar, los «paraísos artificiales» que ofrece el alcohol.') +
  FUENTE('Tomado y adaptado de: Carrasquilla, Tomás (1922). «Discos cortos II». En: Vallejo, M. (ed.) (1997). <i>La crónica en Colombia: medio siglo de oro</i>. Bogotá: Presidencia de la República.');

Q(74, 'Tesis y argumentos', 'alta', LEYSECA,
  'Para demostrar que la Ley Seca NO puede establecerse, el autor supone que',
  ['la Ley Seca es una ley prohibitiva que evitaría que los hombres cometieran actos bestiales.',
   'la necesidad de los humanos de buscar los efectos del alcohol impide que la Ley Seca sea respetada.',
   'no existen pueblos bárbaros o avanzados que no conozcan los efectos psicoactivos del alcohol.',
   'las únicas bebidas alcohólicas sobre las que se aplica la ley son el aguardiente de caña y la chicha.'], 1,
  'El argumento del autor descansa en una idea sobre la naturaleza humana: que el ser humano «parece necesitar de algo que lo intoxique», sea por el cuerpo o por buscar olvido, y que por eso todos los pueblos han buscado siempre esos paraísos artificiales. Si esa necesidad existe, ninguna ley la va a suprimir, y de ahí que llame a la Ley Seca un imposible físico y moral. La primera opción es lo que él concede, no lo que supone para negarla.',
  'El autor concede que la ley serviría. Busca el supuesto por el cual, aun así, no funcionaría.');

Q(75, 'Evaluación crítica', 'media', LEYSECA,
  'Teniendo en cuenta el texto, ¿cuál de las siguientes opciones apoya fuertemente la idea de que la Ley Seca permitiría evitar «crímenes de sangre»?',
  ['Debido a que la Ley Seca es un prodigio de redención, haría que los hombres sean más tolerantes entre sí y resuelvan sus diferencias por medios no violentos.',
   'Dado que la Ley seca prohíbe el consumo de alcohol, las riñas generadas por estados de embriaguez y las consecuencias mortales de estas riñas disminuirían.',
   'La Ley seca es una ley prohibitiva que impide la venta de bebidas alcohólicas tóxicas, por lo que su aplicación prevendría muchas muertes causadas por envenenamiento.',
   'puesto que la Ley Seca prohíbe el aguardiente de caña y la chicha, menos gente moriría debido al tráfico ilegal de estas dos bebidas alcohólicas.'], 1,
  'Un buen apoyo tiene que encadenar la ley con esas muertes concretas. La segunda opción lo hace en tres pasos limpios: sin alcohol hay menos borracheras, con menos borracheras hay menos riñas, y con menos riñas hay menos muertos. Las demás cambian de tema: una habla de envenenamiento, otra de muertes por tráfico ilegal, y la primera da por bueno el «prodigio de redención» que el propio texto pone en duda, además de saltar directo a la tolerancia sin explicar por qué.',
  'Sigue la cadena: de la prohibición al crimen de sangre. La opción buena no debe cambiar de tipo de muerte.');

/* ═════════ 76-78 · Vudú ═════════ */
const VUDU =
  P('<b>Vudú</b>') +
  P('La esposa del señor Decker acababa de regresar de un viaje a Haití —viaje que había realizado sola—, para que las cosas se calmasen un poco antes de abordar la cuestión del divorcio. De nada sirvió. Ni él ni ella se calmaron en lo más mínimo. En realidad, descubrieron que todavía se odiaban más cordialmente que antes.') +
  P('—La mitad —dijo la señora Decker con firmeza—. No me conformaré con nada que no sea la mitad del capital, más la mitad de los bienes.<br>—¡No digas sandeces! —rezongó el señor Decker.<br>—¿Sandeces? Podría quedarme con todo, ¿sabes? Y muy fácilmente, pues mientras me hallaba en Haití me dediqué a estudiar vudú.<br>—¡Tonterías! —dijo el señor Decker.<br>—No lo son. Y tendrías que agradecer que yo sea una mujer de buenos sentimientos, pues podría matarte muy fácilmente si lo deseara. Entonces me quedaría con todo el dinero y todos los bienes, sin temor alguno a las consecuencias de mi acción. Una muerte realizada por medio del vudú no puede distinguirse de una muerte causada por un ataque al corazón.<br>—¡Imbecilidades! —exclamó el señor Decker.<br>—¿Eso crees? Mira, tengo cera y una aguja de sombrero. Dame un mechón de tu cabello o un trocito de uña, no necesito más, y te lo demostraré.<br>—¡Falsedades! —dijo el señor Decker, despectivo.<br>—Entonces, ¿por qué tienes miedo que lo pruebe? —dijo la señora Decker—. Como yo sé que es efectivo, te voy a hacer una proposición. Si no te mueres, te concederé el divorcio y no reclamaré absolutamente nada. Si te mueres, toda la fortuna pasará a mis manos en forma automática.<br>—¡Trato hecho! —exclamó el señor Decker—. Ve a buscar la cera y la aguja. —Luego se miró las uñas—. Las tengo muy cortas. Te daré un mechón de cabellos.') +
  P('Cuando él regresó con unas hebras de cabello en la tapa de un tubo de aspirina, la señora Decker ya había comenzado a ablandar la cera. En seguida, pegó los cabellos sobre ella y la modeló, dándole la tosca apariencia de un ser humano.') +
  P('—Lo lamentarás —dijo, clavando la aguja en el pecho de la figura de cera.') +
  P('El señor Decker quedó verdaderamente sorprendido, pero su gozo fue muy superior. Él no creía en el vudú, pero como era un hombre precavido prefirió no arriesgarse. Además, siempre le había irritado que su esposa limpiase con tan poca frecuencia su cepillo para el cabello.') +
  FUENTE('Fredric Brown (Ma. Teresa Segur, trad.). <i>Lo mejor de Fredric Brown</i>. Barcelona: Bruguera, 1988.');

Q(76, 'Inferencia', 'alta', VUDU,
  'A partir del diálogo entre los esposos, se comprende que el deseo de la señora Decker es',
  ['quedarse con la totalidad del dinero y de los bienes del matrimonio.',
   'quedarse con la mitad del dinero y de los bienes del matrimonio.',
   'demostrar que es una mujer de los bienes del matrimonio.',
   'asesinar al señor Decker.'], 0,
  'Pide la mitad al comenzar, pero enseguida se le sale lo que de verdad quiere: «Podría quedarme con todo, ¿sabes?». Y la apuesta que ella misma propone lo confirma, porque está armada a su favor en el único escenario que le interesa: si él no muere, renuncia a todo; si muere, se queda con la fortuna entera. Nadie ofrece renunciar a la mitad que ya reclamaba si no espera ganar el todo. Matarlo es el medio que pone sobre la mesa, no el fin.',
  'Compara lo primero que pide con lo que ofrece a cambio en la apuesta. La apuesta dice más que la petición.',
  { confianza: 'media' });

Q(77, 'Inferencia', 'media', VUDU,
  '¿Cuál de los siguientes enunciados NO está implícito en el relato anterior?',
  ['La señora Decker recibió una cucharada de su propia medicina.',
   'El señor Decker tuvo una relación extramatrimonial.',
   'La señora Decker es una mujer en ocasiones descuidada.',
   'El señor Decker es un hombre escéptico.'], 1,
  'Las otras tres se sostienen en el final. El marido no creía en el vudú pero prefirió no arriesgarse: es escéptico y precavido. Le fastidiaba que ella no limpiara su cepillo: por eso había pelos de ella ahí, o sea que es descuidada. Y de esos dos datos sale el remate, que ella clavó la aguja en una figura hecha con su propio cabello. De una relación extramatrimonial del señor Decker no hay ni una palabra ni nada que la insinúe.',
  'Tres opciones se apoyan en las dos últimas frases del cuento. Busca la que no se apoya en nada.');

Q(78, 'Información literal', 'baja', VUDU,
  '¿Dónde se desarrollan los eventos narrados en el relato anterior?',
  ['En el hogar de los esposos Decker.', 'En la sala de baño de los Decker.',
   'En un lugar público.', 'En Haití.'], 0,
  'La escena ocurre en la casa de la pareja, y el relato lo deja ver en los movimientos: él va y vuelve con unas hebras de cabello en la tapa de un tubo de aspirina, ella tiene a mano la cera y la aguja. Ese ir y venir entre habitaciones solo es posible en la propia casa. Haití se menciona como el lugar del viaje del que ella acaba de regresar, no donde transcurre la conversación, y el baño es a lo sumo uno de los cuartos a los que él entra.',
  'Fíjate en lo que los personajes van a buscar y traen. Eso te dice dónde están.');

/* ═════════ 79-80 · Siddharta ═════════ */
const SIDDHARTA =
  P('<b>Ver entre líneas: por Mónica Serrano</b><br><b>Buscar o encontrar: Siddharta (1922), de Hermann Hesse</b>') +
  P('Hermann Hesse (premio Nobel de Literatura en 1946) escribió este libro en el que relata la vida de Siddharta (que toma su nombre del Buda Siddharta Gautama), un indú que emprende un viaje en busca de la sabiduría junto a su amigo Govinda. En un determinado momento del viaje se separan por diferencia de opiniones, sobre el camino a tomar. Tras muchos años, ambos, ya ancianos, se reencuentran. En el diálogo reproducido, Siddharta le reprocha a su compañero el que, pese a tenerle frente a sus ojos, este no lo reconozca.') +
  P('La infografía contrapone dos escenas. En la de arriba, rotulada <b>Buscar</b>, un personaje sentado señala con el brazo extendido hacia un rombo lejano, dibujado macizo y opaco; una flecha punteada va del personaje al rombo.') +
  P('«Cuando alguien busca —continuó Siddharta—, fácilmente puede ocurrir que su ojo sólo se fije en lo que busca; pero como no lo halla, tampoco deja entrar en su ser otra cosa, ya que únicamente piensa en lo que busca, tiene un fin y está obsesionado con esa meta. (…)»') +
  P('En la de abajo, rotulada <b>Encontrar</b>, el mismo personaje está sentado con los brazos recogidos y no señala nada; frente a él hay un rombo del mismo tamaño, pero dibujado como los dos triángulos que lo componen, y una flecha continua va del rombo hacia el personaje.') +
  P('«(…) Buscar significa tener un objetivo. Encontrar, sin embargo, significa estar libre, abierto, no necesitar ningún fin. Tú, venerable, quizás eres realmente uno que busca, pues persiguiendo tu objetivo, no ves muchas cosas que están a la vista.»');

Q(79, 'Textos discontinuos', 'alta', SIDDHARTA,
  'El diamante que se encuentra frente al personaje de la parte inferior está dividido en los dos triángulos que lo constituyen. Así, se muestra gráficamente que este personaje',
  ['encontró aquello que el personaje de la parte superior buscaba.',
   'rompió la obsesión con los triángulos que el personaje de la parte superior tenía.',
   'puede ver a través de los objetos que se presentan ante sus ojos.',
   'comprendió que todos los objetos se componen de partes más pequeñas.'], 2,
  'Arriba el rombo está macizo y lejos: el que busca lo tiene como meta y no ve más que su contorno. Abajo el mismo rombo aparece abierto en las dos piezas que lo forman, y además la flecha se invierte y viene hacia el personaje. El dibujo traduce la frase del texto: el que encuentra está libre y abierto, y por eso percibe lo que tiene a la vista en vez de quedarse en la superficie de su objetivo. No se trata de una lección de geometría sobre las partes de las figuras, ni de que haya hallado lo que el otro buscaba.',
  'Compara los dos rombos y también el sentido de las flechas. El cambio de dirección es parte del mensaje.',
  { confianza: 'media' });

Q(80, 'Propósito del texto', 'media', SIDDHARTA,
  'La idea principal expuesta en el texto es la siguiente:',
  ['Plantearse un objetivo en el momento de buscar impide que la búsqueda resulte fructífera.',
   'Buscar algo con un objetivo en mente lleva a que se enfrenten distracciones innecesarias.',
   'Focalizarse en algo que se persigue suele llevar a que las otras cosas pasen inadvertidas,',
   'Generalmente se encuentra lo que no busca y se busca lo que no es posible encontrar.'], 2,
  'La última frase de Siddharta lo resume: persiguiendo tu objetivo, no ves muchas cosas que están a la vista. Eso es exactamente lo que dice la tercera opción. La primera va más lejos de lo que el texto sostiene, porque el texto no dice que buscar impida encontrar, sino que estrecha la mirada. La segunda invierte el problema: lo que se pierde de vista no son distracciones, son cosas que valía la pena ver. Y la cuarta convierte en regla general algo que el texto nunca afirma.',
  'Quédate con la frase final del diálogo y busca la opción que dice lo mismo sin añadirle nada.');

/* ═════════ 81-84 · naturaleza humana ═════════ */
const NATURALEZA =
  P('<b>La naturaleza humana (innata) y los comportamientos de desadaptación en el mundo moderno</b>') +
  P('<b>TEXTO 1.</b> William Shakespeare dijo: «La red de nuestra vida es un mezclado estambre de hilos buenos y malos que se juntan». La aplicación de sólo una de las ramas de la actividad humana —la ciencia— parece confirmar tal adagio. Sin embargo, ¿tiene que ser así? ¿Estamos programados biológicamente para la agresión y la guerra? No soy una autoridad en genética, pero ni en mis lecturas ni en toda una vida de observación he visto ninguna evidencia de que estemos condenados genéticamente a hacer el mal. Por el contrario, en una visión muy general, diría que estamos destinados genéticamente a hacer cosas beneficiosas para la especie humana, y que los aspectos negativos son equivocaciones. En otras palabras, creo en la bondad inherente del hombre. La especie humana es el resultado de un proceso continuo y natural de evolución; adquisición del poder de pensamiento original ha acelerado de gran manera el proceso de la evolución natural. Ha dado como resultado enormes progresos en todos los campos de la civilización: arte, literatura, medicina, y por sobre todo, ciencia. Sin embargo, estos avances en la ciencia han llevado a la adquisición de la capacidad de autodestrucción, al desarrollo de medios de destrucción de la especie humana en sí misma.') +
  FUENTE('Adaptado de: Rotblat, J. (1995) <i>¿Estamos programados biológicamente para la agresión y la guerra?</i> Bogotá: Revista Número ediciones.') +
  P('<b>TEXTO 2.</b> La idea de que el cerebro humano no alberga ninguna tendencia intrínseca a la violencia, y que la violencia es el producto de la cultura, se enfrenta a un hecho evidente sobre la historia humana. Como dijo Winston Churchill «La historia de la especie humana es la guerra. A excepción de algunos breves interludios nunca ha habido paz en el mundo; y mucho antes del inicio de la historia la lucha sangrienta era ya universal e incansable». Durante muchos años, los intelectuales han tratado de negarlo a través del mito del salvaje pacífico, según el cual se concibe al «salvaje» o al cazador-recolector como al representante de una naturaleza humana no corrompida por las influencias malignas de la civilización. Sin embargo, en los pueblos preagrícolas, no es extraño que un tercio de los hombres mueran a manos de otros hombres, y que casi la mitad de los hombres hayan matado. De hecho, en la sociedad actual, que es más pacífica, entre el 70 y el 90 % de los hombres y el 40 y el 60 % de las mujeres dicen que han tenido la fantasía de asesinar a alguien. ¿Acaso sirve algo de todo esto como «justificación» de la guerra de la violencia? Obviamente que no. No se concibe cómo podría haber algo en el comportamiento de los cazadores-recolectores que nos disuadiera de nuestra repulsa hacia la guerra y de nuestros esfuerzos por erradicarla.') +
  FUENTE('Adaptado de: Pinker, S. (2005). <i>El malpensante</i> (45) pp. 64-75.');

Q(81, 'Punto de vista del autor', 'alta', NATURALEZA,
  'Al final del texto 2, Pinker indica que no debemos disminuir nuestros esfuerzos por erradicar la guerra. Con esto,',
  ['niega la bondad y el altruismo como características inherentes al ser humano.',
   'comparte la idea de una naturaleza humana corrompida por la civilización.',
   'reproduce un discurso que afirma la violencia universal como permanente e inevitable.',
   'rechaza la idea de que la violencia es inevitable, dados los rasgos innatos del ser humano.'], 3,
  'Pinker dedica casi todo el texto a mostrar que la violencia sí tiene raíz en la naturaleza humana, pero el cierre impide leer eso como una condena. Al preguntarse si algo de esto justifica la guerra y responder que obviamente no, separa dos cosas: que una tendencia exista y que sea un destino. Por eso insiste en seguir intentando erradicarla. Las otras opciones le atribuyen justo lo contrario: o el fatalismo que él está descartando, o el mito del buen salvaje que él critica.',
  'El final matiza todo lo anterior. Pregúntate qué deja de seguirse de los datos que acaba de dar.');

Q(82, 'Evaluación crítica', 'alta', NATURALEZA,
  'En el texto 1 Rotblat afirma: «No soy una autoridad en genética, pero ni en mis lecturas ni en toda una vida de observación he visto ninguna evidencia de que estemos condenados genéticamente a hacer el mal». Este argumento es cuestionable porque',
  ['deriva en que no se siguen necesariamente las causas.',
   'sostiene una conclusión general a partir de experiencias personales.',
   'presenta evidencias que solo se aplican a un sector de la población.',
   'desvirtúa los estudios de los genetistas para reafirmar su posición.'], 1,
  'Lo que Rotblat pone sobre la mesa son sus lecturas y su observación personal, y él mismo aclara que no es autoridad en genética. De ahí salta a una afirmación sobre toda la especie. El problema no es que se equivoque, sino que la base es demasiado estrecha para lo que concluye: que una persona no haya visto una evidencia no significa que no exista. No está desvirtuando estudios de nadie —al contrario, admite que no los domina— ni presenta datos parciales de población.',
  'Mira de qué tamaño es la evidencia que ofrece y de qué tamaño es la conclusión que saca.');

Q(83, 'Estructura y articulación del texto', 'media', NATURALEZA,
  'Tanto en el texto 1 como en el texto 2 se cita a otros autores (Shakespeare y Churchill), con el fin de',
  ['respaldar la idea de que existen tendencias naturales en el ser humano que lo disponen hacia la violencia.',
   'indicar que en diferentes épocas se ha evidenciado un equilibrio entre la bondad y la maldad innatas en el ser humano.',
   'mostrar que la idea según la cual los seres humanos nacen con un instinto agresivo es recurrente y está arraigada.',
   'argumentar que, aunque el ser humano es naturalmente bondadoso, la vida en sociedad lo desvirtúa y lo conduce a la guerra.'], 2,
  'Las dos citas cumplen la misma función y ninguna de las dos es la tesis de quien la usa. Shakespeare aparece al comienzo del texto 1 como el adagio que Rotblat va a poner en duda, y Churchill al comienzo del texto 2 como formulación de la idea que Pinker va a discutir. Traer dos voces de siglos distintos sirve para mostrar que esa idea sobre la agresividad humana viene de lejos y está instalada. Si su fin fuera respaldarla, Rotblat no la citaría para contradecirla.',
  'Fíjate qué hace cada autor con su cita justo después de darla: ¿la sigue o la discute?');

Q(84, 'Propósito del texto', 'media', NATURALEZA,
  '¿Cuál es el tema común a los dos textos?',
  ['La incidencia de los factores genéticos en las diferencias sociales.',
   'La influencia de los rasgos innatos en los comportamientos humanos.',
   'Los efectos del desarrollo científico en los comportamientos bélicos.',
   'Las diferencias sociales entre las sociedades preagrícolas y las actuales.'], 1,
  'Los dos se preguntan lo mismo y responden distinto: si lo que traemos de nacimiento nos empuja a la violencia. Rotblat dice que no y apuesta por una bondad inherente; Pinker dice que esa tendencia existe aunque no nos condene. Ese es el terreno común. Las otras opciones recogen detalles que aparecen en uno solo de los textos —la ciencia y la autodestrucción en el primero, los pueblos preagrícolas en el segundo— y ninguno de los dos habla de diferencias sociales.',
  'El tema común tiene que estar en los dos textos. Descarta lo que solo aparece en uno.');

/* ═════════ 85-87 · el trabajo ═════════ */
const TRABAJO =
  P('Considere los tres textos que siguen:') +
  P('<b>Texto 1.</b> Podemos plantearnos si existe un ámbito de la vida pública o privada en el que la fuente de la actividad y de esperanza no esté envenenada por las condiciones en que vivimos. El trabajo ya no se realiza con la orgullosa conciencia de ser útil, sino con el sentimiento humillante y angustioso de poseer, solo por el hecho de disfrutar, sencillamente, de un puesto de trabajo, un privilegio concedido por un pasajero favor de la suerte, privilegio del que están excluidos muchos seres humanos.') +
  FUENTE('Tomado de Weil, S. (1934) <i>Reflexiones sobre las causas de la libertad y de la opresión social</i>. Carmen Revilla (trad.). Barcelona: Paidós Ibérica.') +
  P('<b>Texto 2.</b> Digan en buena hora que el trabajo es una necesidad dolorosa para la conservación de la vida, pero no digan que es una virtud; pues el reposo y la dulce inactividad son más gratos al hombre y a todos los animales que el movimiento y la fatiga.') +
  FUENTE('Tomado de: Blasco Ibáñez, V. (1919) <i>La catedral</i>. Valencia: F. Siempre y Cuando Editores.') +
  P('<b>Texto 3.</b> El conocimiento y hábito de las buenas maneras no se consigue sino mediante el uso largo y continuado. Gustos, modales y hábitos de vida refinados son una prueba útil de hidalguía, porque la buena educación exige tiempo, aplicación y gastos, y no puede, por ende, ser adquirida por aquellas personas cuyo tiempo y energía han de emplearse en el trabajo.') +
  FUENTE('Tomado de: Veblen, T. (1899). <i>The Theory of Leisure Class</i>. New York: The Macmillan Company.');

Q(85, 'Estructura y articulación del texto', 'media', TRABAJO,
  '¿cuál de las siguientes opciones presenta la mejor continuación para el segundo texto?',
  ['Además, lo más grato para el hombre es un trabajo que implique siempre una dulce inactividad',
   'por tanto, el trabajo no puede ser una virtud, a menos que sea necesario para la conservación de la vida.',
   'Y como el trabajo implica movimiento y fatiga, una vida sin trabajo es más grata que una vida con trabajo.',
   'Sin embargo, tener un puesto de trabajo es un privilegio de unos pocos que con suerte han sido bien educados.'], 2,
  'El texto 2 deja dos premisas puestas: el reposo es más grato que el movimiento y la fatiga, y el trabajo es precisamente movimiento y fatiga. La continuación natural es cerrar ese razonamiento, y eso hace la tercera opción. La primera se contradice sola, porque un trabajo no puede ser inactividad. La segunda le pone una condición que el texto no admite. Y la cuarta cambia de tema y de autor: habla del privilegio y la educación, que son los otros dos textos.',
  'Junta las dos ideas del texto 2 y saca la conclusión. La continuación buena no agrega información nueva.');

Q(86, 'Punto de vista del autor', 'alta', TRABAJO,
  '¿Cuál de las siguientes opciones describe mejor la opinión del autor del primer texto?',
  ['La única motivación que puede tener alguien para realizar un trabajo es creer que lo que hace es útil, aunque sea humillante.',
   'Es triste creer que poseer un puesto de trabajo es un privilegio, pero esa creencia es precisamente lo que motiva a las personas a trabajar.',
   'Es humillante y angustioso creer que el trabajo es útil, pero actualmente es la única forma de conseguir un puesto de trabajo.',
   'Es agradable tener un puesto de trabajo, pues es un privilegio que solo pueden tener las personas que son útiles, no las personas con suerte.'], 1,
  'Weil contrapone dos maneras de vivir el trabajo: la orgullosa conciencia de ser útil, que dice que ya no existe, y el sentimiento humillante de tener un puesto por un golpe de suerte, que es el de ahora. Su queja es esa degradación. La segunda opción es la única que recoge el lamento por ver el empleo como privilegio, aunque le añade un motivo que Weil no menciona. La última invierte el texto, porque Weil dice explícitamente que el privilegio lo da la suerte y no la utilidad.',
  'Weil compara el antes y el ahora del trabajo. Busca la opción que lamenta el ahora.',
  { confianza: 'media' });

Q(87, 'Propósito del texto', 'media', TRABAJO,
  '¿Cuál de las siguientes opciones expresa mejor el propósito de los tres textos?',
  ['Persuadir al lector de que el trabajo es poco satisfactorio.',
   'Recordarle al lector la importancia de la educación y del trabajo.',
   'Convencer al lector de que el trabajo es necesario para sobrevivir.',
   'Exhortar al lector a buscar un trabajo que en lo posible no sea humillante.'], 0,
  'Los tres apuntan en la misma dirección desfavorable. Weil lo describe como humillante y angustioso; Blasco Ibáñez le niega el rango de virtud y prefiere el reposo; Veblen lo presenta como lo que consume el tiempo y la energía que harían falta para refinarse. Ninguno lo defiende. Por eso no pueden estar recordando su importancia ni convenciendo de que es necesario, y ninguno de los tres aconseja al lector qué empleo buscar.',
  'Pregúntate si alguno de los tres habla bien del trabajo. La respuesta te da el propósito común.');

/* ═════════ 88-89 · el arte de conversar ═════════ */
const CONVERSAR =
  P('Yo creo que un buen conversador puede llamarse aquel que sabe manejar la batuta en la tertulia, sin dejar decaer a los que en ella actúan como lo hace el director de orquesta con los músicos del concierto… El que acepta las interrupciones y las aliña con su ingenio o su gracia…') +
  P('El que habla poco de sí mismo… Y del prójimo, solamente cuando se llegue el caso de contar de él alguna anécdota sustanciosa.') +
  P('Y, ahora que hablamos de anécdotas, reconozcamos que siempre han sido ellas la sal de la conversación.') +
  P('Nada hay tan interesante como conocer la personalidad de la gente a través de los hechos de su vida. Y el tema es inagotable, porque la humanidad es una mina que jamás acabaremos de explotar.') +
  P('Por ejemplo, a don Pepe Sierra —el acaudalado antioqueño que no dejó al morir solo millones, sino también sabias reglas para llegar a conseguirlos— lo pinta de cuerpo entero la anécdota de la vaca:') +
  P('—Don José María —le dijo alguna vez el encargado de una de sus haciendas— se acaba de rodar por el precipicio una de las vacas y la encontraron muerta en la cañada…<br>—Pues no hay más remedio que enterrarla, mi amigo.<br>—¿Enterrarla, don Pepe…? La vaca estaba sana… y los peones me piden que les deje aprovechar la carne.<br>—No importa… Que la entierren ligerito. No quiero que se me sigan rodando las demás.') +
  FUENTE('Tomado de: Ospina de Navarro, Sofía. (1983). «El Arte de Conversar». <i>Crónicas</i>, Medellín. Susaeta');

Q(88, 'Propósito del texto', 'media', CONVERSAR,
  '¿Cuál es la pregunta central que responde el texto?',
  ['¿Qué significa tener una conversación?', '¿Por qué es importante conversar bien?',
   '¿Que se requiere para ser buen conversador?', '¿Para qué sirve entablar una buena conversación?'], 2,
  'El texto arranca con «Yo creo que un buen conversador puede llamarse aquel que…» y desde ahí no hace otra cosa que enumerar condiciones: llevar la batuta sin dejar decaer a los demás, aceptar las interrupciones con gracia, hablar poco de sí mismo, tener anécdotas que valgan la pena. Incluso la historia de don Pepe Sierra está puesta como ejemplo de anécdota sustanciosa. No define qué es conversar, ni argumenta por qué importa, ni para qué sirve.',
  'Mira cómo empieza la primera frase. Casi siempre anuncia la pregunta que el texto responde.');

Q(89, 'Inferencia', 'media', CONVERSAR,
  'De acuerdo con el texto, una persona que solo narra anécdotas en las que él aparece como personaje central',
  ['es una persona interesante.', 'no es un buen conversador',
   'maneja la batuta en la tertulia.', 'cuenta anécdotas sustanciosas.'], 1,
  'Entre los requisitos que enumera la autora hay uno que este caso incumple de frente: el buen conversador «habla poco de sí mismo». Quien solo cuenta anécdotas protagonizadas por él hace exactamente lo contrario, así que queda fuera de la definición. Que las anécdotas sean la sal de la conversación no lo salva, porque el texto pide anécdotas del prójimo cuando vengan al caso, no un desfile de las propias.',
  'Repasa la lista de requisitos y busca cuál queda incumplido por hablar siempre de uno mismo.');

/* ═════════ 90-92 · morir solo en Nueva York ═════════ */
const NUEVAYORK =
  P('Su cuerpo apareció en la sala. La policía lo encontró acurrucado sobre una alfombra sucia. Una vecina dio la alarma, alertada por el olor fétido que salía del apartamento. La vivienda pertenecía a un tal George Bell que vivía solo, así que era fácil suponer que el cuerpo era suyo.') +
  P('Sus vecinos le habían visto por última vez seis días antes, el domingo. El auto que movía de lado a lado de la calle para evitar las multas de tráfico se habían quedado desde el jueves en el lado equivocado con una sanción en el parabrisas. Su vecina le llamo por teléfono sin obtener respuesta…') +
  P('Cincuenta mil personas mueren al año en Nueva York. La mayor parte de quienes mueren tiene amigos y parientes que se enteran de inmediato. Unos pocos mueren solos, sin testigos. Nadie reclama sus cuerpos, nadie guarda luto. Apenas un nombre en la lista. En la de 2014, George Bell, de 72 años, fue uno de ellos.') +
  P('George Bell, nombre simple, dos sílabas. Sin respuesta sobre quién era, cuál fue su vida, qué le preocupó, a quién amó o quién le amó. Como la mayor parte de los neoyorquinos, su vida transcurrió al margen.') +
  P('Cuando los bomberos forzaron la puerta, la policía irrumpió en una vivienda llena de cosas. No cabía duda de que se trataba de uno de esos ancianos, aquejados de síndrome de Diógenes, que lo acumulan todo.') +
  P('En la oficina del condado trabajan tres investigadores que peinan las viviendas de los fallecidos y buscan pruebas de qué pudieron poseer en vida o de quiénes pudieron ser sus familiares. Es un trabajo peculiar ese de ver lo que alguien guardó.') +
  P('El 24 de julio, dos investigadores, Juan Plaza y Ronald Rodríguez, ingresaron al apartamento de Bell. Habían visto cosas peores. Como una vivienda tan llena de cosas que su inquilina murió de pie porque era imposible caerse. O un lugar del que tuvieron que salir espantando pulgas…') +
  P('Rebuscaron entre la anarquía del apartamento, de 74 metros cuadrados. El aire, denso y hediondo. Por única cama, el sofá. Parecía que alguien había saqueado dormitorio y baño. La cocina estaba llena de basura, inservible. El grifo no funcionaba. Hacía mucho que la estufa no se usaba para cocinar.') +
  P('Hurgar entre las posesiones de los muertos, percibiendo su miseria, ha cambiado a estos hombres. Rodríguez, de 57 años, divorciado, siente la urgencia: «Trato de vivir la vida como si fuera el último día… nunca sabes cuándo te vas a morir».') +
  P('La soledad de tantas muertes ha hecho mella en Plaza, tiene miedo de ser él quien acabe tirado en el suelo. «Este trabajo enseña mucho… Aprendes que debes compartirte. La gente se muere sin tener con quién hablar. Se muere y los parientes salen de quién sabe dónde. "Era mi tío. Era mi primo. Dame lo que tenía". Dame, dame. Pero en vida nunca le hicieron una visita. Me cambió la vida desde que trabajo en esta oficina»…') +
  FUENTE('Kleinfield, N. R. (2015, diciembre). <i>Morir solo en Nueva York</i>. The New York Times. Recuperado y adaptado el 23 de junio de 2016.');

Q(90, 'Inferencia', 'media', NUEVAYORK,
  'Considere el siguiente fragmento: «El 24 de julio dos investigadores Juan Plaza y Ronald Rodríguez, ingresaron al apartamento de Bell… Habían visto cosas peores. Cómo una vivienda tan llena de cosas que su inquilina murió de pie porque era imposible caerse, O un lugar del que tuvieron que salir espantando pulgas…». De lo anterior, se puede concluir que',
  ['por cuenta de su trabajo, Rodríguez y Bell se enfrentan con situaciones cada vez peores.',
   'descubrir el apartamento de Bell les recordó a Rodríguez y a Plaza pasadas y peores experiencias.',
   'debido a su experiencia, Rodríguez y Plaza no se sorprendieron cuando entraron en el apartamento de Bell.',
   'a pesar de su trabajo, Rodríguez y Plaza no dejaron de sorprenderse cuando irrumpieron en el apartamento de Bell.'], 2,
  'La frase clave es «habían visto cosas peores», y los dos ejemplos que siguen están puestos justamente para medir contra qué. Si lo peor ya lo vieron, el apartamento de Bell no los impresionó: esa es la conclusión. La opción que dice lo contrario choca con la frase. Otra invierte el orden, porque el texto no dice que el apartamento les trajera recuerdos. Y la primera además confunde a Bell, que es el muerto, con Plaza, que es el investigador.',
  'Apóyate en la frase «habían visto cosas peores» y pregúntate qué se sigue de ella.');

Q(91, 'Propósito del texto', 'media', NUEVAYORK,
  '¿Cuál es el tema central del texto?',
  ['El afán de acumulación de muchos ancianos.', 'Las disputas en torno a la herencia de un difunto.',
   'Las precarias condiciones de vida en Nueva York.', 'La soledad en la que mueren muchos neoyorquinos.'], 3,
  'El caso de George Bell está contado como ejemplo de algo más grande, y el propio texto lo dice al dar la cifra: de las cincuenta mil personas que mueren al año en la ciudad, unas pocas mueren solas, sin testigos, sin nadie que reclame el cuerpo. Los testimonios finales de los investigadores insisten en lo mismo: la gente se muere sin tener con quién hablar. La acumulación y los parientes que aparecen por la herencia son detalles del caso, no el asunto.',
  'Pregúntate por qué el periodista da la cifra de cincuenta mil. Ese dato revela de qué trata el texto.');

Q(92, 'Semántica y léxico', 'media', NUEVAYORK,
  'Con base en el texto, se puede afirmar que con el «Síndrome de Diógenes» se designa',
  ['un trastorno psicológico.', 'un fenómeno económico.',
   'una conducta de desapego.', 'una etapa de la tercera edad.'], 0,
  'El texto lo presenta como una dolencia: habla de ancianos «aquejados de síndrome de Diógenes, que lo acumulan todo». La palabra síndrome y el verbo aquejar sitúan esto en el terreno de lo patológico, no en el de una etapa normal de la vejez ni en el de la economía. Y desapego es lo contrario de lo que describe: quien acumula todo y no se deshace de nada está apegado a sus cosas.',
  'Fíjate en las dos palabras con que el texto lo introduce: «síndrome» y «aquejados».');

/* ═════════ 93-94 · caricatura ═════════ */
const CARICATURA =
  P('La imagen es una caricatura en blanco y negro. Dos ejércitos medievales avanzan uno contra otro. Al fondo, la tropa de la izquierda lleva estandartes con la figura de un palo; la de la derecha, estandartes con la figura de un conejo. En primer plano, un jinete de la primera tropa levanta la espada y arenga a sus soldados, que marchan con las lanzas en alto.') +
  P('Al pie de la caricatura se lee la frase que pronuncia el jinete:') +
  P('<i>«No habrá Paz hasta que estos infieles renuncien a su Dios conejo y acepten a nuestro Dios palo»</i>');

Q(93, 'Textos discontinuos', 'media', CARICATURA,
  'por medio de la anterior imagen, el autor busca',
  ['establecer una verdad.', 'mostrar admiración por la religión,',
   'justificar las guerras santas.', 'divertir y hacer reflexionar al lector.'], 3,
  'La gracia está en que los dos dioses en disputa son un conejo y un palo, dos cosas igual de arbitrarias. Al volver ridícula la diferencia, el dibujante consigue que uno se ría y, al mismo tiempo, se pregunte qué separa de verdad a quienes se matan por su religión. Eso es humor con intención crítica. Justificar las guerras santas sería lo contrario de lo que hace, y mostrar admiración por la religión no encaja con el tono burlón.',
  'Pregúntate por qué el autor eligió un conejo y un palo, y no dos dioses solemnes.');

Q(94, 'Función de expresiones', 'media', CARICATURA,
  'en la caricatura, la frase «No habrá paz hasta que estos infieles renuncien a su Dios Conejo» debe entenderse como',
  ['una queja del autor.', 'una promesa del pueblo elegido.',
   'una amenaza de uno de los personajes.', 'un intento de reconciliación por uno de los infieles..'], 2,
  'Quien habla es el jinete que arenga a su tropa con la espada en alto, frente al ejército enemigo. En esa situación, condicionar la paz a que el otro renuncie a su dios equivale a anunciarle que la guerra sigue mientras no ceda: es una amenaza. No es la voz del autor, que se expresa a través de la burla y no de la frase; y de reconciliación no tiene nada, porque no ofrece ceder en ningún punto.',
  'Mira quién dice la frase y en qué momento la dice. El contexto define si amenaza o propone.');

/* ═════════ 95-96 · tira de los tiranosaurios ═════════ */
const TIRA_DINO =
  P('La siguiente historieta está compuesta por cuatro viñetas. En ellas conversan un niño, que está sentado a la mesa haciendo un trabajo del colegio, y su tigre de peluche.') +
  P('<b>Primera viñeta.</b>') +
  VINETA('Niño', 'Mi poderoso cerebro ha pensado un tema para mi trabajo.') +
  VINETA('Tigre', '¡Genial!') +
  P('<b>Segunda viñeta.</b> El niño sostiene un dinosaurio de juguete.') +
  VINETA('Niño', 'Escribiré sobre el debate acerca de si los tiranosaurios eran temibles depredadores o desagradables carroñeros.') +
  P('<b>Tercera viñeta.</b>') +
  VINETA('Tigre', '¿Qué posición defenderás?') +
  VINETA('Niño', 'Definitivamente creo que eran temibles depredadores.') +
  P('<b>Cuarta viñeta.</b>') +
  VINETA('Tigre', '¿Por qué lo dices?') +
  VINETA('Niño', '¡Son mucho más geniales de esa manera!');

Q(95, 'Evaluación crítica', 'alta', TIRA_DINO,
  'El argumento del niño es',
  ['Invalido, porque los tiranosaurios serían más geniales si fueran carroñeros.',
   'valido, porque simplifica que los tiranosaurios son geniales depredadores.',
   'invalido, porque los tiranosaurios son depredadores.',
   'valido, porque o bien los tiranosaurios son terribles depredadores o bien son desagradables carroñeros.'], 0,
  'El niño no da ninguna prueba sobre los tiranosaurios: elige la tesis porque le resulta más genial, y el gusto no demuestra nada sobre lo que ocurrió hace millones de años. El argumento es inválido. De las dos opciones que lo declaran inválido, la que atiende a esa razón es la que discute el criterio de lo genial; la otra lo declara inválido por un motivo que en realidad le daría la razón al niño. Conviene saber que el original no ofrece ninguna opción que nombre con precisión la falla, así que esta pregunta necesita revisión del docente.',
  'Pregúntate qué evidencia da el niño sobre los tiranosaurios. Si no da ninguna, el argumento no se sostiene.',
  { confianza: 'media' });

Q(96, 'Tesis y argumentos', 'media', TIRA_DINO,
  '¿cuál es la tesis que quiere defender Calvin (el niño) en su trabajo?',
  ['los tiranosaurios son geniales.', 'Los depredadores son geniales.',
   'Los depredadores son terribles.', 'Los tiranosaurios son depredadores.'], 3,
  'La tesis es la posición que va a sostener en el trabajo, y él la enuncia en la tercera viñeta: cree que los tiranosaurios eran temibles depredadores. Eso responde al debate que planteó antes, entre depredadores y carroñeros. Que le parezcan geniales no es la tesis sino la razón por la que la escogió, y es justamente lo que se le critica. Las otras dos opciones hablan de los depredadores en general, cuando el trabajo es sobre los tiranosaurios.',
  'Separa lo que va a defender de por qué lo escogió. La tesis responde al debate que él mismo planteó.');

/* La ruta arranca en lc-5: lc-1 a lc-4 son las cuatro del prototipo, con
   textos inventados, y deberían retirarse cuando el docente lo confirme. */
const CUESTIONARIOS = {
  lc: [
    { tema: 'Propósito del texto', items: [
      { id: 'lc-5',  titulo: 'Pato Donald · De qué trata un texto',      qs: [7, 19, 23],       tipo: 'Pasaje' },
      { id: 'lc-6',  titulo: 'Pato Donald · Para qué se escribe',        qs: [26, 27, 30],      tipo: 'Pasaje' },
    ]},
    { tema: 'Función de expresiones', items: [
      { id: 'lc-7',  titulo: 'Pato Donald · Qué hace una frase',         qs: [0, 3, 9, 33],     tipo: 'Pasaje' },
    ]},
    { tema: 'Inferencia', items: [
      { id: 'lc-8',  titulo: 'Pato Donald · Leer lo que no está dicho',  qs: [4, 10, 12, 15],   tipo: 'Pasaje' },
      { id: 'lc-9',  titulo: 'Pato Donald · Sacar conclusiones',         qs: [16, 28, 29],      tipo: 'Pasaje' },
    ]},
    { tema: 'Evaluación crítica', items: [
      { id: 'lc-10', titulo: 'Pato Donald · Poner en duda un argumento', qs: [6, 14, 21, 34],   tipo: 'Pasaje' },
    ]},
    { tema: 'Tesis y argumentos', items: [
      { id: 'lc-11', titulo: 'Pato Donald · Qué se defiende y con qué',  qs: [5, 13, 35],       tipo: 'Pasaje' },
    ]},
    { tema: 'Semántica y léxico', items: [
      { id: 'lc-12', titulo: 'Pato Donald · Palabras en contexto',       qs: [1, 8, 31],        tipo: 'Pasaje' },
    ]},
    { tema: 'Punto de vista del autor', items: [
      { id: 'lc-13', titulo: 'Pato Donald · Quién habla y desde dónde',  qs: [2, 20, 25],       tipo: 'Pasaje' },
    ]},
    { tema: 'Textos discontinuos', items: [
      { id: 'lc-14', titulo: 'Pato Donald · Imágenes que argumentan',    qs: [18, 32],          tipo: 'Pasaje' },
    ]},
    { tema: 'Estructura y articulación del texto', items: [
      { id: 'lc-15', titulo: 'Pato Donald · Cómo se arma un texto',      qs: [22, 24],          tipo: 'Pasaje' },
    ]},
    { tema: 'Información literal', items: [
      { id: 'lc-16', titulo: 'Pato Donald · Lo que el texto dice',       qs: [11, 17],          tipo: 'Pasaje' },
    ]},
  ],
};
