/* Inglés · Parte 4 — «Completar el texto» · lote 2026-B
 *
 * Fuente: el cuadernillo «Formulario inglés · parte 4» entregado por el
 * instituto (12 páginas). Trae diez textos con espacios numerados y, para
 * cada espacio, tres o cuatro opciones: 90 preguntas en total.
 *
 * La numeración del original se repite entre textos (hay dos bloques que
 * empiezan en 16, dos en 26, etc.), así que aquí cada pregunta se identifica
 * por el número del espacio dentro de SU texto, que es el que ve el
 * estudiante en el pasaje.
 *
 * ────────────────────────────────────────────────────────────────────────────
 * ESTA ES LA SECCIÓN QUE MÁS NECESITA REVISIÓN DOCENTE
 *
 * A diferencia de las partes 1, 3 y 5, aquí no se evalúa comprensión sino uso
 * del idioma: elegir entre «begins / began / begun», entre «for / about / of»,
 * entre «rises / grows / increases». En comprensión, el propio texto contiene
 * la respuesta y se puede verificar; en gramática y colocación, la clave
 * depende del criterio de quien la determina. El cuadernillo NO trae hoja de
 * respuestas (solo los «Ejemplo 0»), así que las 90 claves las determinó el
 * modelo y se cargan con `clave_origen = 'modelo'`.
 *
 * Seis quedan marcadas `confianza: 'media'` y deberían revisarse primero:
 *   · Amsterdam 7 — la palabra natural sería «famous» o «known», pero las tres
 *     opciones son formas de «visit»; queda la pasiva «is visited for».
 *   · The Mozart Effect 29 — «it's planned» es la única opción gramatical,
 *     pero suena forzada para describir la música de Mozart.
 *   · Useful Things 16 — «must» frente a «could»: obligación o posibilidad,
 *     las dos se sostienen en la frase.
 *   · Walk Your Dog 39 — «increases», «rises» y «grows» funcionan las tres
 *     como intransitivos; se escogió la colocación más frecuente.
 *   · Dogs are like people 14 — «totally awake» es correcto, aunque lo usual
 *     en inglés sea «fully awake».
 *   · Elephants in the circus 32 — «just wants» frente a «else»/«almost»;
 *     la frase admite matices.
 * ────────────────────────────────────────────────────────────────────────────
 *
 * Erratas del original corregidas en silencio (la lista va al cliente):
 *   «if how to Fly» → of how to fly  ·  «drawings if a helicopter» → of
 *   «brains of dog» → brains of dogs  ·  «Some dog had» → Some dogs had
 *   «resquesied» → requested  ·  «if your looking» → if you're looking
 *   «things have change» → things have changed  ·  «One groups says» → One group says
 *   «entro en vigencia» y demás del cuadernillo de sociales no aplican aquí
 *   «Amsterdam is among the greatest small city» se deja tal cual: el error de
 *   concordancia está en el enunciado del ejemplo 0, que no se carga.
 *
 * Las explicaciones NUNCA nombran una letra: las opciones se barajan por
 * estudiante.
 */

const TEXTO = (titulo, ...parrafos) =>
  `<p><strong>${titulo}</strong></p>` + parrafos.map(t => `<p>${t}</p>`).join('');

const C = (context, ctxLabel, n, opts, correct, exp, tip, confianza) => ({
  comp: 'Parte 4 · Completar texto',
  ctxLabel, ctxClass: 'ctx-pasaje', context,
  text: `¿Qué palabra va en el espacio (${n})?`,
  opts, correct, exp, tip,
  confianza: confianza || 'alta',
});

/* ═══════════════════════ Los diez textos ═══════════════════════ */

const T_GUIAS = TEXTO('Tour guides',
  'Tour guides take people on sightseeing trips (0) <strong>to</strong> places of interest in different countries or cities. On some tours, they may drive cars, (19) ______ tourists&rsquo; hotel rooms and carry luggage.',
  'They take people on indoor visits, such as tours (20) ______ museums or famous buildings. Others spend (21) ______ of their time outdoors, taking people on trips to visit cities or towns.',
  'Tour guides (22) ______ do their jobs both on weekdays and weekends. They can also be (23) ______ from home for a few days or a few months. They have very little time for (24) ______ and to spend with families (25) ______ they work long hours with hotels, meals and transportation. Anyway, one of the good things about being a tour guide is (26) ______ people from different cultures.');

const T_PERROS = TEXTO('Dogs are like people',
  'Two years ago, my colleagues and I began (0) <strong>researching</strong> into the brains of dogs. Some dogs had to go into an M.R.I. scanner (14) ______ awake. We wanted to (15) ______ how dog brains work. An M.R.I. scanner can (16) ______ information about their thoughts.',
  'The dog owners agreed with this by (17) ______ a form. In the study we used positive training (18) ______, the dogs could leave the scanner (19) ______ they wanted.',
  'My dog Lassie, which was (20) ______ from a homeless dog charity, was the first. After training Lassie for months, we got the first maps of her brain activity. This was a great (21) ______ for us.',
  'In later experiments, we (22) ______ the similarity between dogs and humans in an important brain region: the caudate nucleus. In humans, this part plays an important role in the anticipation of things we enjoy, like food. (23) ______ these facts about the canine brain are limited, they cannot be ignored.');

const T_MUJER = TEXTO('The unknown woman',
  'There is a mystery in US history which is worth (0) <strong>mentioning</strong>. In 1963, while the police was checking the film of the crime of John F. Kennedy that (24) ______ in Texas, a woman with a scarf around her face was noticed.',
  'In (25) ______ she appears in plenty of photos of the scene and seems to carry a camera. (26) ______ the shots that killed Kennedy, she kept recording while most people were (27) ______. Later, the FBI publicly (28) ______ the film from the woman, but she never gave it to them.',
  'At (29) ______ in 1970 the police received an (30) ______ call; a woman named Beverly Oliver (31) ______ that she was the &ldquo;Scarf Woman&rdquo;, but her description had many gaps, and she didn&rsquo;t (32) ______ further details. Nowadays, this story remains a mystery, and (33) ______ the Scarf Woman was Beverly Oliver or not, her purposes are still unknown.');

const T_AMSTERDAM = TEXTO('Amsterdam',
  'Amsterdam is among the (0) <strong>greatest</strong> small cities in the world, and it&rsquo;s one of the most beautiful and exciting cities in (6) ______ of Europe. Amsterdam is (7) ______ for its streets along the water and world-famous museums and history. Amsterdam is (8) ______ a friendly city. It has (9) ______ you can find in a big city, popular discos, international restaurants, and good transport. In Amsterdam, your next stop is never far away, but if you&rsquo;re looking (10) ______ really local experiences, get a bike. Exploring the city on a boat is another very popular and easy way to (11) ______ around this special place. Finally, (12) ______ you are staying longer, consider a trip during the day to see the towns and villages nearby Amsterdam. (13) ______ one is full of awesome things.');

const T_ZOO = TEXTO('Looking after elephants in a zoo',
  'Elephants love (0) <strong>having</strong> a bath and their regular daily care includes a two-hour shower and brush in summer, and a dust bath in winter, to (16) ______ old skin. Their feet must also be looked at every day as stones get stuck (17) ______ their toes. That&rsquo;s the easy (18) ______!',
  'Their eating habits, however, demand a lot more attention, according to zoo owner Michael Booth, who (19) ______ described the elephant as an enormous fire that (20) ______ lots of fuel. This is (21) ______ elephants in the wild (22) ______ most of their time eating. The ones in Booth&rsquo;s zoo eat large (23) ______ of vegetables and fruit but their favourite food is bread. It (24) ______ about £20 a day to feed a fully-grown elephant.',
  'A male elephant is roughly the same size as a bus, so it isn&rsquo;t a good (25) ______ to make an elephant angry!');

const T_CIRCO = TEXTO('Elephants in the circus',
  'One of America&rsquo;s top shows will have no elephants (0) <strong>on</strong> stage in a few years. All their elephants will go to a natural park and be (26) ______ there than in the circus. One hundred years ago, people (27) ______ it was OK for animals to be in these shows; (28) ______, today things have changed. People have (29) ______ to worry about it because the animals aren&rsquo;t free.',
  'A lot of environmental groups believe that these kinds (30) ______ shows are not right. One group says circus elephants have a bad life. They (31) ______ have paints in their bodies and get sick. This group (32) ______ wants elephants to rest. There are even some places in the USA where shows (33) ______ use elephants because people agree that it is important to protect them.');

const T_MOZART = TEXTO('The Mozart Effect',
  'You have probably (0) <strong>heard</strong> of the Mozart effect. By 1982, Don Campbell (23) ______ studying the idea that if children or even babies listen to music composed by Mozart, they (24) ______ become more intelligent. He says that (25) ______ kinds of music can affect our learning and our health.',
  'We use music to (26) ______ us relax. However, Campbell says that music can (27) ______ reduce the stress of (28) ______ sick. Campbell believes that Mozart&rsquo;s music is popular because it&rsquo;s (29) ______ and makes your brain more alert.',
  'Music not only makes you more intelligent, but it can improve your memory, too. In one study, students who listened to Mozart before doing a test got much (30) ______ marks than those students who didn&rsquo;t.');

const T_CHILE = TEXTO('Chili peppers',
  'Chili peppers are the fruit of pepper plants. You might be surprised if you found out people have been eating them for a (0) <strong>lot</strong> of years. In (26) ______, they have been part of the human (27) ______ for more than 6,000 years.',
  'It was Christopher Columbus who accidentally (28) ______ chili peppers in America and took them to Europe. Later, Europeans began finding different (29) ______ for this spice. Columbus could never (30) ______ imagined the result. The chili pepper would turn (31) ______ &ldquo;the queen of spices&rdquo; around the world.',
  'Fortunately, it has been proven today that chili peppers have many (32) ______; they help reduce the level of cholesterol, (33) ______ virus infections like the flu and fight bone disease. Because of this, it&rsquo;s a good idea to eat this healthy fruit.',
  '(34) ______ all the advantages of eating chilies, don&rsquo;t start eating a lot of them at (35) ______; chilies can also cause an upset stomach and sore throat.');

const T_UTILES = TEXTO('Useful Things',
  'Few things are (0) <strong>better</strong> than having anything you love in your garage. I am a single father and I (16) ______ look after two teenagers; both of them are special and friendly. My car has become a very useful thing when it comes to (17) ______ them to the museum or to the department store. (18) ______ their friends in these places is important for them.',
  'However, the (19) ______ important thing on my list is my cell phone. I (20) ______ shopping and bought a modern one two months ago. It is (21) ______ and useful since I use it as an alarm clock to wake up (22) ______ 5 o&rsquo;clock. I (23) ______ check information on the web and send text messages to my colleagues.');

const T_PASEAR = TEXTO('Walk Your Dog',
  'Controlled exercise (0) <strong>benefits</strong> dogs in a couple of ways. They burn energy and it becomes a habit for them. The most basic exercise is a controlled walk. When you (31) ______ your dog for a walk, have it go beside you and don&rsquo;t (32) ______ it to smell everything in sight.',
  'In addition to the training and the social hierarchy established, walking the dog (33) ______ helps restless dogs get tired. This may be caused by (34) ______ physical exercise, but some of it comes from your dog&rsquo;s mental energy once it (35) ______ you&rsquo;re the one in control. That may sound strange, but avoiding distraction by concentrating on your (36) ______ is difficult for dogs. Dogs have the (37) ______ behavior thanks to their effort. If a dog is left (38) ______ its own, the possibility to get in trouble (39) ______ a lot. Be nice and give your dog a (40) ______ exercise routine.');

/* ═══════════════════════ Las 90 preguntas ═══════════════════════ */

const BANKS = {
  ing: [
    /* ── 0 a 7 · Tour guides (19 a 26) ───────────────────────────────────── */
    C(T_GUIAS, 'COMPLETAR · Tour guides', 19, ['book', 'booking', 'booked'], 0,
      'La frase encadena tres acciones después de «may»: manejar, reservar y cargar. Tras un verbo modal siempre va el infinitivo sin cambios, así que las tres tienen que ir en la misma forma.',
      'Cuando una lista de acciones cuelga de un modal (may, can, must), todas van en infinitivo simple.'),
    C(T_GUIAS, 'COMPLETAR · Tour guides', 20, ['against', 'above', 'around'], 2,
      'Un recorrido por dentro de un museo es un tour «around»: se camina alrededor, de sala en sala. «Against» significa contra y «above» encima, y ninguna describe un recorrido.',
      'Para recorridos por un lugar, el inglés usa around. Guárdala junto a «a tour around the city».'),
    C(T_GUIAS, 'COMPLETAR · Tour guides', 21, ['several', 'most', 'many'], 1,
      '«Time» es incontable, así que solo funciona la palabra que acompaña a incontables. «Several» y «many» exigen un plural contable, como «several days» o «many hours».',
      'Antes de escoger, pregúntate si el sustantivo se puede contar. Time, money y water piden most, much o a lot of.'),
    C(T_GUIAS, 'COMPLETAR · Tour guides', 22, ['often', 'already', 'early'], 0,
      'La frase dice que trabajan entre semana y también los fines de semana: describe con qué frecuencia lo hacen. «Already» habla de algo que ya pasó y «early» de la hora, no de la frecuencia.',
      'Si el resto de la frase enumera momentos (weekdays and weekends), el hueco pide un adverbio de frecuencia.'),
    C(T_GUIAS, 'COMPLETAR · Tour guides', 23, ['inside', 'over', 'away'], 2,
      'Estar lejos de casa por días o meses es «away from home»: es la expresión fija para ausentarse. «Inside from home» y «over from home» no existen.',
      'Away from home es una expresión de bloque. Memorízala completa, no palabra por palabra.'),
    C(T_GUIAS, 'COMPLETAR · Tour guides', 24, ['yourselves', 'themselves', 'ourselves'], 1,
      'El sujeto del párrafo es «tour guides», que en inglés se retoma con «they». El reflexivo tiene que concordar con ese sujeto, no con «tú» ni con «nosotros».',
      'El pronombre reflexivo copia al sujeto: they → themselves, we → ourselves, you → yourselves.'),
    C(T_GUIAS, 'COMPLETAR · Tour guides', 25, ['so', 'because', 'or'], 1,
      'La segunda parte explica por qué les queda poco tiempo: trabajan muchas horas. Ese es un vínculo de causa. «So» introduciría la consecuencia, que aquí va al revés, y «or» ofrecería una alternativa.',
      'Fíjate en el orden: si primero va el efecto y después la razón, el conector es because.'),
    C(T_GUIAS, 'COMPLETAR · Tour guides', 26, ['meeting', 'meet', 'meets'], 0,
      'Después del verbo «is» hace falta un sustantivo o un gerundio que funcione como tal: conocer gente. El infinitivo suelto y la tercera persona no encajan en esa posición.',
      'Tras «one of the good things is…» siempre viene un gerundio en -ing.'),

    /* ── 8 a 17 · Dogs are like people (14 a 23) ─────────────────────────── */
    C(T_PERROS, 'COMPLETAR · Dogs are like people', 14, ['directly', 'totally', 'exactly', 'especially'], 1,
      'Lo que se quiere decir es que los perros entraban al escáner completamente despiertos, sin sedación. Ese grado total lo da «totally»; las otras tres modifican precisión, momento o énfasis, no el grado de vigilia.',
      'Los adverbios de grado (totally, completely, fully) van antes de adjetivos que admiten un máximo, como awake o full.',
      'media'),
    C(T_PERROS, 'COMPLETAR · Dogs are like people', 15, ['discover', 'receive', 'accept', 'revise'], 0,
      'La investigación busca averiguar algo que todavía no se sabe: cómo funciona el cerebro del perro. Recibir, aceptar o revisar suponen que la información ya existe y está en sus manos.',
      'Si la frase plantea una pregunta abierta de investigación, el verbo es discover o find out.'),
    C(T_PERROS, 'COMPLETAR · Dogs are like people', 16, ['feed', 'serve', 'afford', 'provide'], 3,
      'Una máquina que entrega datos los proporciona. «Feed» es alimentar, «serve» servir a alguien y «afford» poder costear algo: ninguno se usa con información en este sentido.',
      'La colocación fija es «provide information». Apréndela como una sola pieza.'),
    C(T_PERROS, 'COMPLETAR · Dogs are like people', 17, ['achieving', 'signing', 'recording', 'booking'], 1,
      'Los dueños dieron su consentimiento firmando un formulario: así se autoriza formalmente un estudio. Lograr, grabar o reservar un formulario no significa nada.',
      'Un formulario se firma. Piensa qué se hace físicamente con el objeto que aparece después del hueco.'),
    C(T_PERROS, 'COMPLETAR · Dogs are like people', 18, ['patterns', 'recipes', 'methods', 'arrangements'], 2,
      'Un entrenamiento positivo es una forma de hacer las cosas, es decir, un método. Las recetas son de cocina, los patrones son formas que se repiten y los arreglos son acuerdos u organización.',
      '«Training methods» es la combinación habitual en textos científicos. Descarta lo que no acompañe a training.'),
    C(T_PERROS, 'COMPLETAR · Dogs are like people', 19, ['whenever', 'whatever', 'wherever', 'whoever'], 0,
      'Los perros podían salir del escáner en el momento en que quisieran: eso es tiempo. Las otras tres preguntan por cosa, lugar y persona, y ninguna encaja con la libertad de salir.',
      'La familia -ever se reparte por categoría: when → tiempo, what → cosa, where → lugar, who → persona.'),
    C(T_PERROS, 'COMPLETAR · Dogs are like people', 20, ['approached', 'caught', 'rescued', 'stolen'], 2,
      'Una perra que viene de una fundación de animales sin hogar fue rescatada. Acercarse no es un verbo que se use así, y atraparla o robarla contradice el sentido de una fundación protectora.',
      'Fíjate en la institución que aparece: una charity de perros sin hogar rescata, no captura.'),
    C(T_PERROS, 'COMPLETAR · Dogs are like people', 21, ['earning', 'affect', 'reward', 'wage'], 2,
      'Conseguir los primeros mapas de actividad cerebral después de meses de entrenamiento es una recompensa al esfuerzo. «Wage» es el sueldo de un trabajo y «affect» es un verbo, no un sustantivo que quepa aquí.',
      'Después de «a great» hace falta un sustantivo. Descarta primero los verbos y quédate con lo que se pueda contar.'),
    C(T_PERROS, 'COMPLETAR · Dogs are like people', 22, ['solved', 'noticed', 'imagined', 'designed'], 1,
      'En experimentos posteriores observaron un parecido que ya estaba ahí: lo notaron. Un parecido no se resuelve, no se imagina si es real ni se diseña.',
      'Cuando el objeto del verbo es un hallazgo (a similarity, a pattern), el verbo suele ser notice, observe o find.'),
    C(T_PERROS, 'COMPLETAR · Dogs are like people', 23, ['If', 'till', 'Unless', 'Although'], 3,
      'La frase admite una limitación y aun así defiende el valor de los datos: es un contraste. «If» y «Unless» plantean condiciones y «till» habla de hasta cuándo, no de oposición.',
      'Si las dos mitades de la frase se oponen, el conector es although, though o even though.'),

    /* ── 18 a 27 · The unknown woman (24 a 33) ───────────────────────────── */
    C(T_MUJER, 'COMPLETAR · The unknown woman', 24, ['took off', 'took part', 'took away', 'took place'], 3,
      'Un crimen ocurre en un lugar, y eso en inglés es «take place». Los otros tres verbos compuestos significan despegar, participar y llevarse algo.',
      'Los phrasal verbs cambian por completo con la preposición. Aprende «take place» = ocurrir.'),
    C(T_MUJER, 'COMPLETAR · The unknown woman', 25, ['fact', 'order', 'time', 'case'], 0,
      '«In fact» introduce un dato que refuerza lo dicho antes, que es justo lo que hace la frase al añadir que aparece en muchas fotos. «In order» y «in case» tienen otros usos y «in time» significa a tiempo.',
      'Las expresiones con «in» son bloques fijos: in fact, in time, in case, in order to. No se traducen palabra por palabra.'),
    C(T_MUJER, 'COMPLETAR · The unknown woman', 26, ['Within', 'Despite', 'Beneath', 'Towards'], 1,
      'Ella siguió grabando pese a los disparos: hay una oposición entre el peligro y su conducta. «Within» es dentro de, «beneath» debajo y «towards» hacia, y ninguna marca contraste.',
      'Despite introduce un obstáculo que no impidió la acción. Búscalo cuando la frase describa algo hecho a pesar del riesgo.'),
    C(T_MUJER, 'COMPLETAR · The unknown woman', 27, ['retiring', 'touring', 'escaping', 'transferring'], 2,
      'Frente a unos disparos, lo que hace la mayoría es huir, y eso contrasta con que ella se quedara grabando. Jubilarse, hacer turismo o trasladarse no describen una reacción ante un atentado.',
      'El contraste de la frase te dice qué hacía la gente: si ella se quedó, los demás se iban.'),
    C(T_MUJER, 'COMPLETAR · The unknown woman', 28, ['achieved', 'argued', 'requested', 'warned'], 2,
      'El FBI pidió públicamente la película, y ella nunca se la entregó: pedir y no recibir encajan. Lograr contradice el final de la frase, y discutir o advertir no se construyen con un objeto así.',
      'La segunda mitad de la frase («but she never gave it») te dice que el FBI no lo consiguió: descarta achieved.'),
    C(T_MUJER, 'COMPLETAR · The unknown woman', 29, ['all', 'last', 'first', 'least'], 1,
      '«At last» significa por fin, y encaja con una llamada que llega siete años después del crimen. «At all», «at first» y «at least» significan en absoluto, al principio y al menos.',
      'Las cuatro son expresiones fijas con «at». Repásalas juntas: at last, at first, at least, at all.'),
    C(T_MUJER, 'COMPLETAR · The unknown woman', 30, ['unlucky', 'unfamiliar', 'uncertain', 'unexpected'], 3,
      'Una llamada que llega de la nada, años después, es inesperada. Que sea de mala suerte, desconocida o incierta no describe la sorpresa de que aparezca de repente.',
      'Fíjate en el salto temporal de la frase: siete años después, cualquier novedad es unexpected.'),
    C(T_MUJER, 'COMPLETAR · The unknown woman', 31, ['defended', 'insisted', 'demanded', 'required'], 1,
      'Ella sostuvo con firmeza que era la mujer del pañuelo, aunque su relato tuviera vacíos: eso es insistir. Exigir y requerir piden que otro haga algo, y defender necesitaría un objeto distinto.',
      'Después del verbo viene «that + frase». Comprueba cuál de los cuatro admite esa construcción con ese sentido.'),
    C(T_MUJER, 'COMPLETAR · The unknown woman', 32, ['suppose', 'replay', 'provide', 'arrange'], 2,
      'Lo que no hizo fue dar más detalles, y dar información es «provide». Suponer, volver a reproducir y organizar no funcionan con «further details» en esta frase.',
      'Vuelve a la colocación que ya viste: provide information, provide details. Es la misma familia.'),
    C(T_MUJER, 'COMPLETAR · The unknown woman', 33, ['whatever', 'wherever', 'whether', 'whilst'], 2,
      'La frase plantea dos posibilidades unidas por «or not», y eso pide «whether». Las de la familia -ever introducen otra clase de idea y «whilst» significa mientras.',
      'La pista es «or not» al final: siempre va con whether, nunca con if en esta posición.'),

    /* ── 28 a 35 · Amsterdam (6 a 13) ────────────────────────────────────── */
    C(T_AMSTERDAM, 'COMPLETAR · Amsterdam', 6, ['any', 'every', 'all'], 2,
      'Europa es un todo, así que la expresión es «in all of Europe». «Any» aparece sobre todo en preguntas y negaciones, y «every» exige un sustantivo contable en singular detrás.',
      'Con nombres de continentes o países, la fórmula para abarcarlo todo es «all of».'),
    C(T_AMSTERDAM, 'COMPLETAR · Amsterdam', 7, ['visit', 'visited', 'visits'], 1,
      'El sujeto es la ciudad, que recibe la acción: la gente la visita por sus canales y museos. Eso obliga a la forma de participio detrás de «is». El infinitivo y la tercera persona dejarían la frase sin construcción.',
      'Cuando «is» va seguido de un verbo, revisa si el sujeto hace la acción o la recibe. Si la recibe, va en participio.',
      'media'),
    C(T_AMSTERDAM, 'COMPLETAR · Amsterdam', 8, ['ever', 'so', 'also'], 2,
      'La frase suma una cualidad más a las ya mencionadas: además es una ciudad amable. «Ever» significa alguna vez y «so» introduce consecuencia o intensidad, no adición.',
      'Also añade información. Si la frase acumula cualidades, ese es el adverbio.'),
    C(T_AMSTERDAM, 'COMPLETAR · Amsterdam', 9, ['everything', 'everyone', 'nothing'], 0,
      'Enseguida se enumeran discotecas, restaurantes y transporte: la ciudad tiene todo lo que se encuentra en una gran ciudad. «Everyone» se refiere a personas y «nothing» diría lo contrario.',
      'Mira lo que viene después del hueco: si es una lista de cosas, la respuesta es everything.'),
    C(T_AMSTERDAM, 'COMPLETAR · Amsterdam', 10, ['for', 'after', 'out'], 0,
      '«Look for» es buscar, que es lo que hace quien quiere experiencias locales. «Look after» es cuidar y «look out» es tener cuidado: los tres cambian por completo con la preposición.',
      'Los phrasal verbs con look son tres muy distintos. Repásalos juntos: look for, look after, look out.'),
    C(T_AMSTERDAM, 'COMPLETAR · Amsterdam', 11, ['traveling', 'travel', 'travels'], 1,
      'Detrás de «a way to» siempre va el infinitivo sin cambios. El gerundio y la tercera persona romperían esa estructura.',
      'La partícula «to» de un infinitivo pide el verbo limpio, sin -ing ni -s.'),
    C(T_AMSTERDAM, 'COMPLETAR · Amsterdam', 12, ['than', 'while', 'if'], 2,
      'La frase pone una condición: si te quedas más tiempo, considera una excursión. «Than» sirve para comparar y «while» para hablar de simultaneidad.',
      'Si la segunda parte de la frase es un consejo o una consecuencia, la primera suele abrirse con if.'),
    C(T_AMSTERDAM, 'COMPLETAR · Amsterdam', 13, ['each', 'both', 'other'], 0,
      'Se acaba de hablar de varios pueblos y aldeas, y la frase dice que cada uno está lleno de cosas asombrosas. «Both» sirve solo para dos y «other one» necesitaría un artículo delante.',
      'Each se usa para uno por uno dentro de un grupo de más de dos; both solo cuando son exactamente dos.'),

    /* ── 36 a 45 · Looking after elephants in a zoo (16 a 25) ────────────── */
    C(T_ZOO, 'COMPLETAR · Elephants in a zoo', 16, ['pass', 'remove', 'take', 'fall'], 1,
      'El baño de polvo sirve para quitar la piel vieja, y quitar algo de encima es «remove». «Pass», «take» y «fall» no expresan esa eliminación sin una preposición que aquí no aparece.',
      'La estructura es «to + verbo + objeto». Busca el verbo que signifique eliminar por sí solo.'),
    C(T_ZOO, 'COMPLETAR · Elephants in a zoo', 17, ['off', 'along', 'up', 'between'], 3,
      'Las piedras se atascan en el espacio que queda entre los dedos, y ese espacio entre varios elementos es «between». Las otras tres indican separación, recorrido y dirección hacia arriba.',
      'Cuando algo queda atrapado en el hueco que separa dos partes, la preposición es between.'),
    C(T_ZOO, 'COMPLETAR · Elephants in a zoo', 18, ['scene', 'role', 'part', 'piece'], 2,
      '«That&rsquo;s the easy part» es la expresión hecha para decir que eso era lo fácil, frente a lo que viene después. Escena, papel y pieza no se usan así.',
      'Guárdala completa: «that&rsquo;s the easy part» anuncia que ahora viene lo difícil.'),
    C(T_ZOO, 'COMPLETAR · Elephants in a zoo', 19, ['now', 'before', 'once', 'then'], 2,
      'Se cita algo que el dueño del zoológico dijo en alguna ocasión del pasado, y ese «alguna vez» es «once». «Now» contradice el pasado del verbo, y «before» y «then» necesitarían un momento de referencia que la frase no da.',
      'Once, colocado antes del verbo en pasado, significa «en cierta ocasión», no «una vez» de conteo.'),
    C(T_ZOO, 'COMPLETAR · Elephants in a zoo', 20, ['searches', 'needs', 'asks', 'keeps'], 1,
      'La comparación es con un fuego enorme, y lo que un fuego requiere para seguir ardiendo es combustible. Buscar, pedir y guardar no describen lo que un fuego hace con el combustible.',
      'Desarrolla la metáfora: ¿qué relación tiene un fuego con el combustible? Esa es la respuesta.'),
    C(T_ZOO, 'COMPLETAR · Elephants in a zoo', 21, ['when', 'whether', 'while', 'why'], 3,
      'La frase anterior explica cuánto combustible necesita el elefante, y esta saca la consecuencia: por eso comen todo el día. «This is why» presenta la razón de lo que sigue.',
      'La fórmula «This is why…» encadena una causa con su efecto. Apréndela junto a «that&rsquo;s why».'),
    C(T_ZOO, 'COMPLETAR · Elephants in a zoo', 22, ['continue', 'spend', 'give', 'stay'], 1,
      'Dedicar tiempo a algo es «spend time», igual que se gasta dinero. Los otros tres verbos no admiten «time» como objeto directo en esta construcción.',
      'Spend sirve para tiempo y para dinero: spend time, spend money. Es la misma estructura.'),
    C(T_ZOO, 'COMPLETAR · Elephants in a zoo', 23, ['totals', 'weights', 'numbers', 'quantities'], 3,
      'Verduras y fruta se miden como masa, no de una en una, así que se habla de grandes cantidades. «Numbers» exigiría contar unidades y «totals» y «weights» son resultados de una medición, no la medida misma.',
      'Con alimentos incontables se usa quantities o amounts; numbers solo con cosas que se cuentan una a una.'),
    C(T_ZOO, 'COMPLETAR · Elephants in a zoo', 24, ['costs', 'buys', 'pays', 'charges'], 0,
      'La estructura «It costs… to do something» dice cuánto vale hacer algo. Comprar, pagar y cobrar necesitan a alguien que realice la acción, y aquí el sujeto es el impersonal «it».',
      'Reconoce el molde: It costs + dinero + to + verbo. Aparece siempre que se informa un precio.'),
    C(T_ZOO, 'COMPLETAR · Elephants in a zoo', 25, ['purpose', 'idea', 'opinion', 'thought'], 1,
      '«It isn&rsquo;t a good idea» es la forma habitual de decir que algo es imprudente. Propósito, opinión y pensamiento no se combinan con «a good» en ese sentido de advertencia.',
      'A good idea / a bad idea es una pareja fija. Memorízala tal cual.'),

    /* ── 46 a 53 · Elephants in the circus (26 a 33) ─────────────────────── */
    C(T_CIRCO, 'COMPLETAR · Elephants in the circus', 26, ['happier', 'happy', 'happiest'], 0,
      'La palabra «than» al final obliga a una comparación entre dos situaciones: el parque y el circo. El adjetivo simple y el superlativo no admiten «than» detrás.',
      'La presencia de «than» decide sola: si aparece, el adjetivo va en comparativo.'),
    C(T_CIRCO, 'COMPLETAR · Elephants in the circus', 27, ['thinking', 'thought', 'think'], 1,
      'La frase empieza con «One hundred years ago», así que todo el verbo va en pasado. El gerundio necesitaría un auxiliar delante y el presente contradice la fecha.',
      'Una expresión de tiempo pasado al inicio marca el tiempo verbal de toda la oración.'),
    C(T_CIRCO, 'COMPLETAR · Elephants in the circus', 28, ['instead', 'next', 'however'], 2,
      'Antes se dice que hace cien años parecía aceptable y después que hoy las cosas cambiaron: eso es una oposición. «Instead» sustituye una cosa por otra y «next» ordena una secuencia.',
      'However marca contraste entre dos épocas o dos ideas. Ubica siempre las dos mitades antes de escoger.'),
    C(T_CIRCO, 'COMPLETAR · Elephants in the circus', 29, ['begin', 'begun', 'began'], 1,
      'El auxiliar «have» pide el participio del verbo. «Began» es el pasado simple, que va solo, y «begin» es el infinitivo.',
      'Begin, began, begun: el tercero es el que acompaña a have o has.'),
    C(T_CIRCO, 'COMPLETAR · Elephants in the circus', 30, ['for', 'about', 'of'], 2,
      '«Kinds of» es la fórmula fija para decir tipos de algo, igual que «types of» o «sorts of». Las otras dos preposiciones no se combinan con kinds.',
      'Kind, type y sort van siempre con «of». Es una de las combinaciones más constantes del inglés.'),
    C(T_CIRCO, 'COMPLETAR · Elephants in the circus', 31, ['may', 'shall', 'should'], 0,
      'Se habla de algo que puede llegar a pasarles a los elefantes del circo: es una posibilidad. «Shall» sirve para ofrecimientos y propuestas, y «should» daría un consejo, que no tiene sentido aquí.',
      'May expresa posibilidad; should, consejo; shall, propuesta. Decide primero qué idea necesita la frase.'),
    C(T_CIRCO, 'COMPLETAR · Elephants in the circus', 32, ['else', 'just', 'almost'], 1,
      'El grupo quiere una sola cosa: que los elefantes descansen. «Just» limita la petición a eso. «Else» significa más o distinto y necesitaría otra palabra delante, y «almost» dejaría el deseo a medias.',
      'Just antes del verbo reduce la acción a lo mínimo: «solo quiere», nada más.',
      'media'),
    C(T_CIRCO, 'COMPLETAR · Elephants in the circus', 33, ['never', 'usually', 'always'], 0,
      'La frase explica que en esos lugares la gente considera importante proteger a los elefantes, así que allí los espectáculos no los usan nunca. «Usually» y «always» dirían que sí los usan.',
      'La causa que cierra la frase («because people agree it is important to protect them») decide el adverbio.'),

    /* ── 54 a 61 · The Mozart Effect (23 a 30) ───────────────────────────── */
    C(T_MOZART, 'COMPLETAR · The Mozart Effect', 23, ['begins', 'began', 'begun'], 1,
      'La fecha «By 1982» sitúa la acción en el pasado y no hay ningún auxiliar delante, así que corresponde el pasado simple. «Begun» solo aparece con have o has.',
      'Sin auxiliar y con fecha pasada, siempre pasado simple. Con have delante, participio.'),
    C(T_MOZART, 'COMPLETAR · The Mozart Effect', 24, ['shall', 'will', 'must'], 1,
      'Es una condición con su resultado probable: si escuchan a Mozart, se volverán más inteligentes. Ese resultado futuro lo marca «will». «Must» expresaría obligación y «shall» una propuesta.',
      'En el primer condicional la fórmula es: if + presente, … will + verbo.'),
    C(T_MOZART, 'COMPLETAR · The Mozart Effect', 25, ['every', 'both', 'all'], 2,
      '«Kinds» está en plural, así que la palabra que lo acompaña debe admitir plural. «Every» exige singular y «both» se limita a dos.',
      'Revisa si el sustantivo está en singular o plural: every kind, pero all kinds.'),
    C(T_MOZART, 'COMPLETAR · The Mozart Effect', 26, ['helping', 'helped', 'help'], 2,
      'Detrás de «to» va el infinitivo sin marcas. El gerundio y el pasado no caben después de esa partícula.',
      'Cada vez que veas «to» antes del hueco, escribe el verbo en su forma base.'),
    C(T_MOZART, 'COMPLETAR · The Mozart Effect', 27, ['also', 'once', 'yet'], 0,
      'La frase añade un efecto más de la música, junto al de relajar: reducir el estrés. «Once» habla de una ocasión y «yet» de algo que todavía no ocurre.',
      'Also entre el modal y el verbo (can also reduce) es la posición típica para sumar una idea.'),
    C(T_MOZART, 'COMPLETAR · The Mozart Effect', 28, ['been', 'being', 'be'], 1,
      'Después de la preposición «of» siempre va un gerundio. El infinitivo y el participio dejarían la frase incompleta.',
      'Preposición + verbo = verbo en -ing. Vale para of, about, by, without y todas las demás.'),
    C(T_MOZART, 'COMPLETAR · The Mozart Effect', 29, ['planned', 'planning', 'plans'], 0,
      'Detrás de «it&rsquo;s» hace falta algo que describa la música, y la única de las tres que funciona como adjetivo es el participio: una música construida con orden. El gerundio y el plural no describen.',
      'Cuando el hueco va después de is o it&rsquo;s y debe describir algo, prueba con la forma en -ed.',
      'media'),
    C(T_MOZART, 'COMPLETAR · The Mozart Effect', 30, ['highest', 'high', 'higher'], 2,
      'La palabra «than» al final de la frase compara a dos grupos de estudiantes, así que el adjetivo va en comparativo. El superlativo no admite «than» y el adjetivo simple no compara.',
      'Igual que en el texto del circo: si ves than, va comparativo. Es la regla más rentable de esta sección.'),

    /* ── 62 a 71 · Chili peppers (26 a 35) ───────────────────────────────── */
    C(T_CHILE, 'COMPLETAR · Chili peppers', 26, ['time', 'fact', 'order', 'advance'], 1,
      '«In fact» confirma y precisa lo que se acaba de insinuar, que es exactamente lo que hace la frase al dar la cifra de 6.000 años. Las otras tres expresiones con «in» tienen usos distintos.',
      'In fact refuerza; in time significa a tiempo; in order to, para; in advance, por anticipado.'),
    C(T_CHILE, 'COMPLETAR · Chili peppers', 27, ['diet', 'recipe', 'meal', 'ingredient'], 0,
      'Formar parte de lo que la humanidad come durante milenios es formar parte de su alimentación. Una receta y una comida son casos puntuales, y un ingrediente iría con «an», no con «the human».',
      '«The human diet» nombra la alimentación de una especie entera. Piensa en escala antes de escoger.'),
    C(T_CHILE, 'COMPLETAR · Chili peppers', 28, ['delivered', 'explored', 'produced', 'discovered'], 3,
      'Colón se topó con el ají sin buscarlo y lo llevó a Europa: lo descubrió. Entregar, explorar y producir no describen ese encuentro casual con algo que ya existía.',
      'La palabra «accidentally» delante del hueco te dice que fue un hallazgo, no una acción planeada.'),
    C(T_CHILE, 'COMPLETAR · Chili peppers', 29, ['reasons', 'services', 'uses', 'values'], 2,
      'Los europeos fueron encontrando distintas maneras de emplear la especia, y esas maneras son «uses». Razones, servicios y valores no se combinan con una especia en este sentido.',
      'Cuando el objeto es un producto, «different uses» es la colocación esperada.'),
    C(T_CHILE, 'COMPLETAR · Chili peppers', 30, ['did', 'was', 'have', 'can'], 2,
      'La estructura completa es «could never have imagined»: un modal seguido de have y participio para hablar de algo que no pudo pasar en el pasado. Los otros tres auxiliares no encajan detrás de «could».',
      'Modal + have + participio es el molde para el pasado de los modales: could have, should have, might have.'),
    C(T_CHILE, 'COMPLETAR · Chili peppers', 31, ['down', 'off', 'for', 'into'], 3,
      '«Turn into» es convertirse en algo distinto, que es lo que pasó con el ají al volverse la reina de las especias. «Turn down» es rechazar y «turn off» apagar.',
      'Otra familia de phrasal verbs que conviene repasar junta: turn into, turn down, turn off, turn up.'),
    C(T_CHILE, 'COMPLETAR · Chili peppers', 32, ['favors', 'benefits', 'developments', 'improvements'], 1,
      'Enseguida se enumeran efectos buenos para la salud: bajar el colesterol, frenar infecciones, combatir enfermedades óseas. Todo eso son beneficios. Los favores son entre personas y los avances o mejoras se refieren a procesos.',
      'Lee lo que viene después del punto y coma: si es una lista de efectos positivos, el sustantivo es benefits.'),
    C(T_CHILE, 'COMPLETAR · Chili peppers', 33, ['hide', 'defend', 'prevent', 'protect'], 2,
      'Evitar que una infección aparezca es «prevent». «Protect» necesitaría decir de qué protege, con «from», y esconder o defender no se usan con infecciones.',
      'Prevent va directo al problema que se evita; protect siempre pide «protect someone from something».'),
    C(T_CHILE, 'COMPLETAR · Chili peppers', 34, ['Beyond', 'Upon', 'Despite', 'Beneath'], 2,
      'La frase reconoce las ventajas y aun así advierte que no conviene abusar: es un contraste. «Beyond» es más allá, «upon» sobre y «beneath» debajo.',
      'Es el mismo despite del texto de la mujer del pañuelo. Cuando hay una advertencia pese a lo bueno, ese es el conector.'),
    C(T_CHILE, 'COMPLETAR · Chili peppers', 35, ['once', 'worst', 'last', 'all'], 0,
      '«At once» significa de una sola vez, y el consejo es no comer muchos ajíes de golpe. «At last» es por fin, «at all» en absoluto, y «at worst» no encaja con la advertencia.',
      'Vuelve a la lista de expresiones con «at» y escoge la que hable de cantidad de una sola vez.'),

    /* ── 72 a 79 · Useful Things (16 a 23) ───────────────────────────────── */
    C(T_UTILES, 'COMPLETAR · Useful Things', 16, ['shall', 'must', 'could'], 1,
      'Ser padre soltero de dos adolescentes trae consigo una obligación: le toca cuidarlos. «Must» expresa ese deber. «Could» hablaría de una posibilidad y «shall» de una propuesta, y ninguna encaja con una responsabilidad familiar.',
      'Must marca lo que no se puede evitar; could, lo que se puede elegir. Fíjate en cuál pide la situación.',
      'media'),
    C(T_UTILES, 'COMPLETAR · Useful Things', 17, ['take', 'taking', 'taken'], 1,
      'La expresión «when it comes to» termina en una preposición, así que el verbo que sigue va en gerundio. Es la misma regla de siempre: tras preposición, -ing.',
      'Cuidado con este «to»: en «when it comes to» es preposición, no marca de infinitivo.'),
    C(T_UTILES, 'COMPLETAR · Useful Things', 18, ['met', 'meet', 'meeting'], 2,
      'El hueco abre la frase y funciona como sujeto de «is important», así que necesita la forma en -ing, que actúa como sustantivo. Un pasado o un infinitivo suelto no pueden ser sujeto aquí.',
      'Si el hueco está al principio y le sigue un verbo conjugado, lo que falta es un sujeto: gerundio.'),
    C(T_UTILES, 'COMPLETAR · Useful Things', 19, ['more', 'most', 'much'], 1,
      'El artículo «the» delante y la ausencia de «than» señalan un superlativo: la cosa más importante de la lista. «More» compararía dos y «much» acompaña a incontables.',
      'The + most + adjetivo = superlativo. La presencia de «the» es la señal.'),
    C(T_UTILES, 'COMPLETAR · Useful Things', 20, ['go', 'went', 'gone'], 1,
      '«Two months ago» sitúa la acción en el pasado y el verbo va solo, sin auxiliar, así que corresponde el pasado simple. «Gone» pediría have delante.',
      'La palabra «ago» siempre arrastra pasado simple. Es una señal infalible.'),
    C(T_UTILES, 'COMPLETAR · Useful Things', 21, ['interested', 'interest', 'interesting'], 2,
      'Lo que se describe es el celular, no una persona, y los objetos que despiertan interés son «interesting». La forma en -ed describiría a quien siente el interés.',
      'Regla de oro: -ing describe la cosa que causa la emoción; -ed, a la persona que la siente.'),
    C(T_UTILES, 'COMPLETAR · Useful Things', 22, ['at', 'into', 'on'], 0,
      'Las horas exactas llevan «at»: at 5 o&rsquo;clock. «On» se usa con días y fechas, e «into» indica movimiento hacia dentro.',
      'Ordena las tres por tamaño: at para la hora, on para el día, in para el mes o el año.'),
    C(T_UTILES, 'COMPLETAR · Useful Things', 23, ['quite', 'also', 'once'], 1,
      'El párrafo va sumando funciones del celular: despertador y, además, consultar internet y enviar mensajes. Esa adición la marca «also». «Quite» gradúa un adjetivo y «once» habla de una sola vez.',
      'Cuando la frase agrega un uso más a los ya mencionados, el adverbio es also.'),

    /* ── 80 a 89 · Walk Your Dog (31 a 40) ───────────────────────────────── */
    C(T_PASEAR, 'COMPLETAR · Walk Your Dog', 31, ['carry', 'deliver', 'bring', 'take'], 3,
      'Sacar al perro a pasear es «take your dog for a walk», una expresión fija. «Carry» es cargarlo en brazos, «deliver» entregarlo y «bring» traerlo hacia quien habla.',
      'Take… for a walk se aprende de bloque. Take se aleja del hablante; bring se acerca.'),
    C(T_PASEAR, 'COMPLETAR · Walk Your Dog', 32, ['admit', 'allow', 'accept', 'agree'], 1,
      'La estructura «allow + objeto + to + verbo» es la única de las cuatro que admite esa construcción con ese sentido de permitir. Aquí se aconseja no dejar que el perro huela todo.',
      'Comprueba la construcción que pide cada verbo: allow somebody to do something es la que encaja aquí.'),
    C(T_PASEAR, 'COMPLETAR · Walk Your Dog', 33, ['then', 'hence', 'also', 'indeed'], 2,
      'Se añade un beneficio más del paseo, junto al entrenamiento y la jerarquía que ya se mencionaron. «Then» ordena en el tiempo, «hence» introduce consecuencia y «indeed» refuerza algo ya dicho.',
      'La expresión «In addition to…» al inicio ya anuncia que se va a sumar algo: el adverbio debe acompañar esa suma.'),
    C(T_PASEAR, 'COMPLETAR · Walk Your Dog', 34, ['making', 'producing', 'doing', 'developing'], 2,
      'Hacer ejercicio en inglés es «do exercise». Los otros tres verbos se combinan con otros objetos: make a decision, produce goods, develop a skill.',
      'Do y make se reparten los sustantivos y hay que memorizarlos: do exercise, do homework, make a decision.'),
    C(T_PASEAR, 'COMPLETAR · Walk Your Dog', 35, ['realizes', 'dreams', 'imagines', 'examines'], 0,
      'El perro se da cuenta de quién manda, y darse cuenta de algo es «realize». Soñar, imaginar y examinar no describen esa comprensión de una situación real.',
      'Realize no es «realizar»: significa darse cuenta. Es uno de los falsos amigos que más caen en el examen.'),
    C(T_PASEAR, 'COMPLETAR · Walk Your Dog', 36, ['wishes', 'opinions', 'requirements', 'instructions'], 3,
      'Durante el paseo el perro debe concentrarse en lo que su dueño le indica, y esas indicaciones son instrucciones. Deseos, opiniones y requisitos no son cosas que un perro pueda seguir.',
      'Piensa qué puede atender realmente un animal: órdenes concretas, no ideas abstractas.'),
    C(T_PASEAR, 'COMPLETAR · Walk Your Dog', 37, ['better', 'well', 'best', 'good'], 2,
      'El artículo «the» delante del hueco pide un superlativo, y no hay ningún «than» que sugiera comparación. «Well» es adverbio y no puede acompañar a un sustantivo como behavior.',
      'The + superlativo es la pareja fija. Si además no hay than, se confirma.'),
    C(T_PASEAR, 'COMPLETAR · Walk Your Dog', 38, ['by', 'on', 'for', 'at'], 1,
      '«On its own» significa por su cuenta, solo, y es la expresión que corresponde a un perro dejado sin supervisión. «By itself» diría algo parecido, pero con el pronombre reflexivo, no con «its».',
      'On my own, on your own, on its own: la expresión lleva siempre el posesivo, no el reflexivo.'),
    C(T_PASEAR, 'COMPLETAR · Walk Your Dog', 39, ['rises', 'grows', 'raises', 'increases'], 3,
      'La posibilidad de meterse en problemas aumenta, y con sustantivos abstractos como possibility la colocación habitual es «increases». «Raises» es transitivo y exigiría un objeto detrás, que aquí no hay.',
      'Distingue raise (necesita objeto) de rise e increase (van solos). El primero siempre lleva algo detrás.',
      'media'),
    C(T_PASEAR, 'COMPLETAR · Walk Your Dog', 40, ['suitable', 'sure', 'smart', 'straight'], 0,
      'Todo el texto propone una rutina hecha a la medida del perro, es decir, adecuada. «Sure» significa seguro de algo, «smart» inteligente y «straight» recto, y ninguno califica una rutina de ejercicio.',
      'Suitable equivale a apropiado o adecuado. Aparece siempre acompañando planes, rutinas y horarios.'),
  ],
};

/* La ruta: quince cuestionarios. Los textos de ocho espacios van completos;
 * los de diez se parten en dos mitades para no alargar la sesión. */
const CUESTIONARIOS = {
  ing: [
    {
      tema: 'Parte 4 · Completar texto',
      items: [
        { id: 'ing-28', titulo: 'Tour guides',                  qs: [0, 1, 2, 3, 4, 5, 6, 7],       tipo: 'Completar' },
        { id: 'ing-29', titulo: 'Dogs are like people · 1',     qs: [8, 9, 10, 11, 12],             tipo: 'Completar' },
        { id: 'ing-30', titulo: 'Dogs are like people · 2',     qs: [13, 14, 15, 16, 17],           tipo: 'Completar' },
        { id: 'ing-31', titulo: 'The unknown woman · 1',        qs: [18, 19, 20, 21, 22],           tipo: 'Completar' },
        { id: 'ing-32', titulo: 'The unknown woman · 2',        qs: [23, 24, 25, 26, 27],           tipo: 'Completar' },
        { id: 'ing-33', titulo: 'Amsterdam',                    qs: [28, 29, 30, 31, 32, 33, 34, 35], tipo: 'Completar' },
        { id: 'ing-34', titulo: 'Elephants in a zoo · 1',       qs: [36, 37, 38, 39, 40],           tipo: 'Completar' },
        { id: 'ing-35', titulo: 'Elephants in a zoo · 2',       qs: [41, 42, 43, 44, 45],           tipo: 'Completar' },
        { id: 'ing-36', titulo: 'Elephants in the circus',      qs: [46, 47, 48, 49, 50, 51, 52, 53], tipo: 'Completar' },
        { id: 'ing-37', titulo: 'The Mozart Effect',            qs: [54, 55, 56, 57, 58, 59, 60, 61], tipo: 'Completar' },
        { id: 'ing-38', titulo: 'Chili peppers · 1',            qs: [62, 63, 64, 65, 66],           tipo: 'Completar' },
        { id: 'ing-39', titulo: 'Chili peppers · 2',            qs: [67, 68, 69, 70, 71],           tipo: 'Completar' },
        { id: 'ing-40', titulo: 'Useful Things',                qs: [72, 73, 74, 75, 76, 77, 78, 79], tipo: 'Completar' },
        { id: 'ing-41', titulo: 'Walk Your Dog · 1',            qs: [80, 81, 82, 83, 84],           tipo: 'Completar' },
        { id: 'ing-42', titulo: 'Walk Your Dog · 2',            qs: [85, 86, 87, 88, 89],           tipo: 'Completar' },
      ],
    },
  ],
};
