// ─── Las 7 materias de Pensar (torre de selección: una por profesor) ───
const MATERIAS = [
  { key: 'lc',  sigla: 'LC', nombre: 'Lectura Crítica',        prof: 'Diana Ordóñez',    npreg: 36, jugable: true },
  { key: 'mat', sigla: 'MT', nombre: 'Matemáticas',            prof: 'Carlos Muñoz',     npreg: 36, jugable: true },
  { key: 'soc', sigla: 'SC', nombre: 'Sociales y Ciudadanas',  prof: 'Hernán Chocué',    npreg: 36 },
  { key: 'ing', sigla: 'IN', nombre: 'Inglés',                 prof: 'Paola Astaiza',    npreg: 40 },
  { key: 'bio', sigla: 'BI', nombre: 'Biología',               prof: 'Lucía Guampe',     npreg: 20 },
  { key: 'fis', sigla: 'FI', nombre: 'Física',                 prof: 'Andrés Calambás',  npreg: 20 },
  { key: 'qui', sigla: 'QU', nombre: 'Química',                prof: 'Marcela Velasco',  npreg: 20 },
];

// ─── Pasajes compartidos (formato cuadernillo: un texto, varias preguntas) ───
const PASAJE_SEMANA_SANTA = `<p>Cada año, durante la Semana Santa, Popayán se transforma. Las procesiones que recorren el centro histórico desde el siglo XVI no son un simple desfile religioso: son un mecanismo de memoria colectiva en el que participan por igual creyentes y no creyentes. Los «cargueros», que llevan sobre sus hombros pasos de madera que pueden superar los cuatrocientos kilos, heredan ese oficio de sus padres y abuelos, y lo consideran un honor que no se compra ni se vende.</p><p>En 2009, la Unesco inscribió las procesiones en la Lista Representativa del Patrimonio Cultural Inmaterial de la Humanidad. La declaratoria trajo visibilidad y turismo, pero también una tensión: algunos sectores proponen «modernizar» la celebración para hacerla más atractiva al visitante, mientras los cargueros defienden que su valor reside precisamente en aquello que no cambia. Si la procesión se convierte en espectáculo, advierten, dejará de ser patrimonio vivo para volverse una escenografía: un decorado que se mira, pero que ya no se hereda.</p>`;

const PASAJE_PARAMO = `<p>A pocos kilómetros de Popayán, en las faldas del volcán Puracé, comienza uno de los ecosistemas más extraños y valiosos del planeta: el páramo. Los páramos ocupan menos del 2&nbsp;% del territorio colombiano y, sin embargo, de ellos depende cerca del 70&nbsp;% del agua que consumen las ciudades andinas. El secreto está en sus suelos y en sus plantas. Los frailejones, con sus hojas cubiertas de vellosidades, capturan el agua de la niebla gota a gota; los suelos, ricos en materia orgánica, la absorben como una esponja y la liberan lentamente durante los meses secos.</p><p>Ese equilibrio, construido durante miles de años, es frágil. Cuando el páramo se quema o se convierte en potrero, el suelo se compacta y pierde su capacidad de retención: el agua que antes se liberaba durante meses ahora corre en horas, causando crecientes en invierno y escasez en verano. Restaurar un páramo degradado puede tardar más de un siglo; un frailejón crece, en promedio, apenas un centímetro por año.</p>`;

// ─── Figuras SVG estilo cuadernillo ───
const FIG_EMPANADAS = `<div class="ctx-fig"><svg viewBox="0 0 340 190" role="img" aria-label="Gráfica de barras: empanadas vendidas por día">
<line x1="40" y1="150" x2="330" y2="150" stroke="#8A7A55" stroke-width="1.5"/>
<line x1="40" y1="108" x2="330" y2="108" stroke="#E4D9B8" stroke-width="1"/>
<line x1="40" y1="66" x2="330" y2="66" stroke="#E4D9B8" stroke-width="1"/>
<line x1="40" y1="24" x2="330" y2="24" stroke="#E4D9B8" stroke-width="1"/>
<text x="34" y="154" font-size="10" fill="#6B6248" text-anchor="end">0</text>
<text x="34" y="112" font-size="10" fill="#6B6248" text-anchor="end">30</text>
<text x="34" y="70" font-size="10" fill="#6B6248" text-anchor="end">60</text>
<text x="34" y="28" font-size="10" fill="#6B6248" text-anchor="end">90</text>
<path d="M51 150 V98 Q51 94 55 94 H83 Q87 94 87 98 V150 Z" fill="#A67C00"/>
<path d="M109 150 V77 Q109 73 113 73 H141 Q145 73 145 77 V150 Z" fill="#A67C00"/>
<path d="M167 150 V91 Q167 87 171 87 H199 Q203 87 203 91 V150 Z" fill="#A67C00"/>
<path d="M225 150 V56 Q225 52 229 52 H257 Q261 52 261 56 V150 Z" fill="#A67C00"/>
<path d="M283 150 V28 Q283 24 287 24 H315 Q319 24 319 28 V150 Z" fill="#A67C00"/>
<text x="69" y="88" font-size="11" font-weight="600" fill="#2A2418" text-anchor="middle">40</text>
<text x="127" y="67" font-size="11" font-weight="600" fill="#2A2418" text-anchor="middle">55</text>
<text x="185" y="81" font-size="11" font-weight="600" fill="#2A2418" text-anchor="middle">45</text>
<text x="243" y="46" font-size="11" font-weight="600" fill="#2A2418" text-anchor="middle">70</text>
<text x="301" y="18" font-size="11" font-weight="600" fill="#2A2418" text-anchor="middle">90</text>
<text x="69" y="167" font-size="11" fill="#6B6248" text-anchor="middle">Lun</text>
<text x="127" y="167" font-size="11" fill="#6B6248" text-anchor="middle">Mar</text>
<text x="185" y="167" font-size="11" fill="#6B6248" text-anchor="middle">Mié</text>
<text x="243" y="167" font-size="11" fill="#6B6248" text-anchor="middle">Jue</text>
<text x="301" y="167" font-size="11" fill="#6B6248" text-anchor="middle">Vie</text>
<text x="185" y="185" font-size="10" fill="#8A7A55" text-anchor="middle">Empanadas vendidas por día</text>
</svg></div>`;

const FIG_CICLISTA = `<div class="ctx-fig"><svg viewBox="0 0 340 190" role="img" aria-label="Gráfica: distancia recorrida en función del tiempo">
<line x1="40" y1="150" x2="330" y2="150" stroke="#8A7A55" stroke-width="1.5"/>
<line x1="40" y1="150" x2="40" y2="20" stroke="#8A7A55" stroke-width="1.5"/>
<line x1="40" y1="110" x2="330" y2="110" stroke="#E4D9B8" stroke-width="1"/>
<line x1="40" y1="70" x2="330" y2="70" stroke="#E4D9B8" stroke-width="1"/>
<line x1="40" y1="30" x2="330" y2="30" stroke="#E4D9B8" stroke-width="1"/>
<text x="34" y="154" font-size="10" fill="#6B6248" text-anchor="end">0</text>
<text x="34" y="114" font-size="10" fill="#6B6248" text-anchor="end">8</text>
<text x="34" y="74" font-size="10" fill="#6B6248" text-anchor="end">16</text>
<text x="34" y="34" font-size="10" fill="#6B6248" text-anchor="end">24</text>
<text x="22" y="18" font-size="10" fill="#6B6248">km</text>
<polyline points="40,150 152,90 208,90 320,30" fill="none" stroke="#A67C00" stroke-width="2.5" stroke-linejoin="round"/>
<circle cx="40" cy="150" r="4" fill="#A67C00" stroke="#FAF3DC" stroke-width="2"/>
<circle cx="152" cy="90" r="4" fill="#A67C00" stroke="#FAF3DC" stroke-width="2"/>
<circle cx="208" cy="90" r="4" fill="#A67C00" stroke="#FAF3DC" stroke-width="2"/>
<circle cx="320" cy="30" r="4" fill="#A67C00" stroke="#FAF3DC" stroke-width="2"/>
<text x="40" y="167" font-size="10" fill="#6B6248" text-anchor="middle">0</text>
<text x="96" y="167" font-size="10" fill="#6B6248" text-anchor="middle">10</text>
<text x="152" y="167" font-size="10" fill="#6B6248" text-anchor="middle">20</text>
<text x="208" y="167" font-size="10" fill="#6B6248" text-anchor="middle">30</text>
<text x="264" y="167" font-size="10" fill="#6B6248" text-anchor="middle">40</text>
<text x="320" y="167" font-size="10" fill="#6B6248" text-anchor="middle">50</text>
<text x="185" y="185" font-size="10" fill="#8A7A55" text-anchor="middle">Tiempo (minutos) — distancia recorrida (km)</text>
</svg></div>`;

const FIG_LOTE = `<div class="ctx-fig"><svg viewBox="0 0 340 210" role="img" aria-label="Figura: lote rectangular con jardín central y sendero perimetral">
<rect x="50" y="20" width="240" height="160" fill="#FAF3DC" stroke="#2A2418" stroke-width="2"/>
<rect x="90" y="60" width="160" height="80" fill="rgba(166,124,0,0.14)" stroke="#A67C00" stroke-width="2"/>
<text x="170" y="105" font-size="13" font-weight="700" fill="#8F6B00" text-anchor="middle">Jardín</text>
<text x="170" y="46" font-size="11" fill="#6B6248" text-anchor="middle">sendero · 2 m de ancho</text>
<text x="170" y="200" font-size="12" font-weight="600" fill="#2A2418" text-anchor="middle">12 m</text>
<text x="34" y="100" font-size="12" font-weight="600" fill="#2A2418" text-anchor="middle" transform="rotate(-90 34 100)">8 m</text>
</svg></div>`;

const TABLA_JORNADA = `<table class="ctx-table"><tr><th></th><th>Mujeres</th><th>Hombres</th><th>Total</th></tr><tr><td>Sabatino</td><td>12</td><td>8</td><td>20</td></tr><tr><td>Intensivo</td><td>10</td><td>10</td><td>20</td></tr><tr><td><b>Total</b></td><td>22</td><td>18</td><td>40</td></tr></table>`;

const TABLA_PUNTAJES = `<table class="ctx-table"><tr><th>Estudiante</th><th>Puntaje (0–500)</th></tr><tr><td>Ana</td><td>280</td></tr><tr><td>Beto</td><td>300</td></tr><tr><td>Carlos</td><td>310</td></tr><tr><td>Diana</td><td>340</td></tr><tr><td>Elena</td><td>350</td></tr></table>`;

const PASAJE_LECTURA = `<p>Se repite con frecuencia que los jóvenes ya no leen. La afirmación, sin embargo, confunde leer con leer libros. Un adolescente que pasa la tarde entre mensajes, publicaciones y videos con subtítulos lee, en realidad, miles de palabras al día; lo que ha cambiado no es la cantidad de lectura, sino su forma: fragmentada, veloz, saltando de un estímulo a otro.</p><p>El problema no es entonces que se lea poco, sino que se ha vuelto difícil sostener la atención sobre un texto largo, seguir un argumento que se despliega a lo largo de muchas páginas y exige paciencia. Y esa lectura profunda —la que permite comprender ideas complejas y formarse un criterio propio— sigue siendo insustituible.</p>`;

const PASAJE_BICI = `<p>Cada mañana, miles de payaneses dedican más de una hora a trasladarse por una ciudad que se puede cruzar en bicicleta en veinte minutos. Insistimos en llenar de carros unas calles coloniales que nunca fueron pensadas para ellos, mientras el aire que respiran nuestros hijos se vuelve, año tras año, un poco más pesado.</p><p>No se trata de renunciar al automóvil de un día para otro, sino de preguntarnos, honestamente, cuántos de esos trayectos podríamos hacer de otro modo. La ciudad que queremos dejarles a quienes vienen detrás empieza por una decisión tan pequeña como la de hoy.</p>`;

// ─── Bancos de preguntas por materia (formato extenso tipo ICFES) ───
const BANKS = {
  lc: [
    {
      comp: 'Propósito del texto',
      ctxLabel: 'TEXTO · Responda las preguntas 1 a 3',
      ctxClass: 'ctx-pasaje',
      context: PASAJE_SEMANA_SANTA,
      text: 'El propósito principal del texto es',
      opts: [
        'presentar la tensión entre conservar una tradición viva y convertirla en un atractivo para el visitante.',
        'narrar la historia de la fundación de Popayán y de sus iglesias coloniales.',
        'convencer al lector de que asista como turista a las procesiones de Semana Santa.',
        'explicar el procedimiento técnico con que se construyen los pasos de madera.',
      ],
      correct: 0,
      exp: 'El texto describe la tradición en el primer párrafo y, en el segundo, la pone en tensión con la propuesta de «modernizarla» para el turismo. Esa oposición —lo que no cambia frente al espectáculo— es el eje que organiza todo el texto. Las demás opciones hablan de temas que el texto apenas roza o que no aparecen.',
      tip: 'Para hallar el propósito, pregúntate qué idea conecta TODOS los párrafos, no solo el primero.',
    },
    {
      comp: 'Función de expresiones',
      ctxLabel: 'TEXTO · Responda las preguntas 1 a 3',
      ctxClass: 'ctx-pasaje',
      context: PASAJE_SEMANA_SANTA,
      text: 'En el texto, la expresión «una escenografía: un decorado que se mira, pero que ya no se hereda» cumple la función de',
      opts: [
        'ilustrar, mediante una analogía, el riesgo de que la procesión pierda su carácter de patrimonio vivo.',
        'describir el estado actual de los pasos de madera que cargan los cargueros.',
        'informar sobre los requisitos de la Unesco para mantener una declaratoria.',
        'presentar la opinión de los turistas que visitan Popayán en Semana Santa.',
      ],
      correct: 0,
      exp: 'La expresión compara la procesión «modernizada» con un decorado teatral: algo que se contempla pero no se transmite entre generaciones. Es una analogía que hace visible el riesgo del que advierten los cargueros. No describe un hecho real ni cita a la Unesco o a los turistas.',
      tip: 'Cuando una pregunta dice «cumple la función de», busca qué hace esa expresión dentro del argumento: ¿ejemplifica, compara, refuta, define?',
    },
    {
      comp: 'Inferencia',
      ctxLabel: 'TEXTO · Responda las preguntas 1 a 3',
      ctxClass: 'ctx-pasaje',
      context: PASAJE_SEMANA_SANTA,
      text: 'Del texto puede inferirse que, para los cargueros, el valor de las procesiones depende de',
      opts: [
        'su continuidad y su transmisión de una generación a otra.',
        'la cantidad de visitantes que atraigan cada año a la ciudad.',
        'el reconocimiento económico que reciben quienes cargan los pasos.',
        'la incorporación de elementos modernos que renueven la celebración.',
      ],
      correct: 0,
      exp: 'El texto dice que los cargueros heredan el oficio «de sus padres y abuelos», que es un honor «que no se compra ni se vende» y que el valor reside «en aquello que no cambia». De esas tres pistas se infiere que lo que valoran es la continuidad heredada. Las opciones B y D contradicen su postura, y la C contradice el «no se compra ni se vende».',
      tip: 'Una inferencia válida se apoya en varias pistas del texto a la vez; si una opción contradice una frase literal, descártala.',
    },
    {
      comp: 'Información literal',
      ctxLabel: 'TEXTO · Responda las preguntas 4 a 6',
      ctxClass: 'ctx-pasaje',
      context: PASAJE_PARAMO,
      text: 'Según el texto, el papel de los frailejones en el páramo consiste en',
      opts: [
        'capturar el agua de la niebla mediante las vellosidades de sus hojas.',
        'absorber el agua como una esponja y compactar el suelo.',
        'liberar el agua acumulada en cuestión de horas durante el invierno.',
        'enriquecer el suelo con materia orgánica durante los meses secos.',
      ],
      correct: 0,
      exp: 'El texto lo dice de forma literal: «los frailejones, con sus hojas cubiertas de vellosidades, capturan el agua de la niebla gota a gota». Absorber como esponja es función de los suelos (opción B las mezcla), y liberar el agua en horas es lo que ocurre cuando el páramo se degrada, no una función del frailejón.',
      tip: 'En preguntas literales, vuelve al texto y verifica quién hace qué: los distractores suelen atribuirle a un elemento la función de otro.',
    },
    {
      comp: 'Estructura del texto',
      ctxLabel: 'TEXTO · Responda las preguntas 4 a 6',
      ctxClass: 'ctx-pasaje',
      context: PASAJE_PARAMO,
      text: 'En el segundo párrafo, la relación entre la quema del páramo y las crecientes de invierno se presenta como',
      opts: [
        'una relación de causa y efecto: al compactarse el suelo, el agua ya no se retiene y corre en horas.',
        'una comparación entre dos ecosistemas de alta montaña.',
        'una enumeración de fenómenos climáticos sin conexión entre sí.',
        'una oposición entre la opinión de los campesinos y la de los científicos.',
      ],
      correct: 0,
      exp: 'El párrafo sigue una cadena causal: quema → compactación del suelo → pérdida de retención → el agua corre en horas → crecientes y escasez. Reconocer esa cadena es entender cómo está construido el párrafo, no solo qué dice.',
      tip: 'Marca los conectores y los dos puntos: en este párrafo, «cuando… se compacta y pierde…: el agua… corre en horas» encadena las causas.',
    },
    {
      comp: 'Reflexionar y evaluar',
      ctxLabel: 'TEXTO · Responda las preguntas 4 a 6',
      ctxClass: 'ctx-pasaje',
      context: PASAJE_PARAMO,
      text: '¿Cuál de las siguientes afirmaciones, de ser cierta, debilitaría el argumento central del texto?',
      opts: [
        'La mayor parte del agua de las ciudades andinas proviene de acuíferos profundos que no dependen de los páramos.',
        'Los frailejones crecen, en promedio, un centímetro por año.',
        'Los páramos ocupan menos del 2 % del territorio colombiano.',
        'La niebla es un fenómeno frecuente en las faldas del volcán Puracé.',
      ],
      correct: 0,
      exp: 'El argumento central es que los páramos son valiosos porque de ellos depende cerca del 70 % del agua de las ciudades andinas. Si esa agua viniera en realidad de acuíferos ajenos al páramo, el argumento perdería su base. Las opciones B y C repiten datos del propio texto y la D lo refuerza.',
      tip: 'Para debilitar un argumento, ataca su premisa principal, no los detalles. Primero identifica qué afirmación sostiene todo lo demás.',
    },
    {
      comp: 'Estructura del texto',
      ctxLabel: 'TEXTO · Responda las preguntas 7 y 8',
      ctxClass: 'ctx-pasaje',
      context: PASAJE_LECTURA,
      text: 'La idea que el autor defiende a lo largo del texto es que',
      opts: [
        'los jóvenes no leen menos que antes, pero han perdido la capacidad de leer de forma profunda y sostenida.',
        'los jóvenes de hoy leen muchos más libros que las generaciones anteriores.',
        'la lectura en pantallas debería prohibirse porque perjudica la comprensión.',
        'leer mensajes y publicaciones equivale a leer libros completos.',
      ],
      correct: 0,
      exp: 'El autor concede que los jóvenes sí leen («miles de palabras al día»), pero aclara que «el problema no es que se lea poco, sino que se ha vuelto difícil sostener la atención sobre un texto largo». Esa distinción —cantidad frente a profundidad— es la tesis. B y D exageran, y C atribuye al autor una prohibición que no plantea.',
      tip: 'La tesis suele aparecer tras un «sin embargo» o un «el problema no es… sino…»: es la idea que el autor sostiene frente a lo que otros afirman.',
    },
    {
      comp: 'Semántica y léxico',
      ctxLabel: 'TEXTO · Responda las preguntas 7 y 8',
      ctxClass: 'ctx-pasaje',
      context: PASAJE_LECTURA,
      text: 'En el texto, la palabra «insustituible», referida a la lectura profunda, indica que esta',
      opts: [
        'no puede ser reemplazada por otras formas de lectura más rápidas.',
        'está a punto de desaparecer entre los jóvenes.',
        'resulta más entretenida que la lectura en pantallas.',
        'solo se logra leyendo libros impresos en papel.',
      ],
      correct: 0,
      exp: '«Insustituible» significa que no tiene sustituto: el autor afirma que la lectura profunda, la que forma criterio propio, no puede ser reemplazada por la lectura fragmentada. No dice que vaya a desaparecer (B), ni la compara por entretenimiento (C), ni la limita al papel (D).',
      tip: 'Cuando preguntan por el significado de una palabra «en el texto», reemplázala mentalmente por un sinónimo y verifica que la frase conserve el sentido.',
    },
    {
      comp: 'Intención del autor',
      ctxLabel: 'TEXTO · Responda las preguntas 9 y 10',
      ctxClass: 'ctx-pasaje',
      context: PASAJE_BICI,
      text: 'La intención principal del autor en este fragmento es',
      opts: [
        'persuadir al lector de reconsiderar el uso del automóvil para trayectos cortos en la ciudad.',
        'informar sobre las rutas de ciclovía disponibles en Popayán.',
        'narrar un recorrido en bicicleta por el centro histórico.',
        'describir el estado de las calles coloniales de la ciudad.',
      ],
      correct: 0,
      exp: 'El autor usa preguntas dirigidas al lector («preguntarnos, honestamente…»), un llamado al futuro («la ciudad que queremos dejarles») y expresiones valorativas («el aire… más pesado»). Ese conjunto de recursos busca convencer, no solo informar o narrar. La intención es persuadir.',
      tip: 'Los verbos en primera persona plural («insistimos», «queremos») y las preguntas al lector delatan un texto que busca persuadir.',
    },
    {
      comp: 'Reflexionar y evaluar',
      ctxLabel: 'TEXTO · Responda las preguntas 9 y 10',
      ctxClass: 'ctx-pasaje',
      context: PASAJE_BICI,
      text: 'De la expresión «la ciudad que queremos dejarles a quienes vienen detrás» puede inferirse que el autor apela a',
      opts: [
        'la responsabilidad con las generaciones futuras.',
        'la nostalgia por el pasado colonial de la ciudad.',
        'el ahorro económico de quienes usan bicicleta.',
        'la obligación legal de reducir el uso del automóvil.',
      ],
      correct: 0,
      exp: '«Quienes vienen detrás» son las generaciones futuras; hablar de la ciudad que se les «deja» apela a la responsabilidad hacia ellas. No evoca nostalgia (B), ni menciona ahorro (C), ni una obligación legal (D): el llamado es ético, no jurídico.',
      tip: 'Fíjate en a qué valor apela el autor (el futuro, la justicia, la salud): las inferencias sobre intención se apoyan en esas señales del propio texto.',
    },
  ],
  mat: [
    {
      comp: 'Interpretación de datos',
      ctxLabel: 'SITUACIÓN · Pregunta 1',
      ctxClass: 'ctx-sit',
      context: `<p>Un puesto del centro de Popayán registró la cantidad de empanadas de pipián vendidas durante los cinco días de una semana laboral. Los resultados se muestran en la gráfica:</p>${FIG_EMPANADAS}`,
      text: 'El promedio diario de empanadas vendidas durante esos cinco días fue',
      opts: ['60', '55', '70', '90'],
      correct: 0,
      exp: 'Se suman las ventas de los cinco días: 40 + 55 + 45 + 70 + 90 = 300, y se divide entre 5: 300 ÷ 5 = 60. La opción B (55) es la mediana, no el promedio; la D (90) es el valor máximo. Son los distractores clásicos de esta pregunta.',
      tip: 'No confundas promedio con mediana ni con el valor más alto: el promedio siempre exige sumar todo y dividir.',
    },
    {
      comp: 'Interpretación de datos',
      ctxLabel: 'SITUACIÓN · Pregunta 2',
      ctxClass: 'ctx-sit',
      context: `<p>Un ciclista entrena subiendo hacia el Morro de Tulcán y sus alrededores. La gráfica muestra la distancia total que ha recorrido en función del tiempo, durante 50 minutos de entrenamiento:</p>${FIG_CICLISTA}`,
      text: 'De acuerdo con la gráfica, puede afirmarse que el ciclista estuvo detenido',
      opts: [
        'entre el minuto 20 y el minuto 30.',
        'entre el minuto 0 y el minuto 20.',
        'entre el minuto 30 y el minuto 50.',
        'en ningún momento del entrenamiento.',
      ],
      correct: 0,
      exp: 'En una gráfica de distancia contra tiempo, estar detenido se ve como un tramo horizontal: el tiempo avanza pero la distancia no cambia. Eso ocurre entre los minutos 20 y 30, cuando la distancia se mantiene en 12 km. En los otros tramos la línea sube, es decir, el ciclista avanza.',
      tip: 'En gráficas distancia–tiempo: línea inclinada = movimiento, línea horizontal = detenido. La pendiente es la velocidad.',
    },
    {
      comp: 'Razonamiento probabilístico',
      ctxLabel: 'SITUACIÓN · Pregunta 3',
      ctxClass: 'ctx-sit',
      context: `<p>En un grupo de 40 estudiantes de un preuniversitario de Popayán se registró la jornada en la que estudian y su género. Los resultados se organizaron en la siguiente tabla:</p>${TABLA_JORNADA}`,
      text: 'Si se elige un estudiante al azar, la probabilidad de que sea una mujer de la jornada sabatina es',
      opts: ['3/10', '12/22', '1/2', '11/20'],
      correct: 0,
      exp: 'Los casos favorables son las mujeres del sabatino: 12. Los casos posibles son todos los estudiantes: 40. La probabilidad es 12/40 = 3/10. La opción B (12/22) sería la probabilidad de ser del sabatino DADO que es mujer (condicional), y la D (11/20) la de ser mujer de cualquier jornada.',
      tip: 'Lee con cuidado sobre qué total se calcula la probabilidad: «elegido al azar del grupo» significa dividir entre los 40.',
    },
    {
      comp: 'Razonamiento geométrico',
      ctxLabel: 'SITUACIÓN · Pregunta 4',
      ctxClass: 'ctx-sit',
      context: `<p>En un lote rectangular de 12 m de largo por 8 m de ancho se construirá un jardín rectangular central, rodeado por un sendero de 2 m de ancho por los cuatro costados, como muestra la figura:</p>${FIG_LOTE}`,
      text: 'El área del jardín central es',
      opts: ['32 m²', '96 m²', '60 m²', '48 m²'],
      correct: 0,
      exp: 'El sendero quita 2 m por CADA lado: el jardín mide (12 − 2 − 2) × (8 − 2 − 2) = 8 × 4 = 32 m². La opción B (96 m²) es el área total del lote, y la C (60 m²) resulta de restar los 2 m una sola vez por dimensión: el error más común.',
      tip: 'Cuando un borde rodea una figura por todos los costados, se resta dos veces por dimensión: una por cada lado.',
    },
    {
      comp: 'Formulación y ejecución',
      ctxLabel: 'SITUACIÓN · Pregunta 5',
      ctxClass: 'ctx-sit',
      context: `<p>En una papelería del centro de Popayán, un cuaderno cuesta $12.000. Durante la temporada escolar, la papelería ofrece un descuento del 25 % sobre ese precio a quienes compran tres o más cuadernos.</p>`,
      text: 'Una estudiante compra cuatro cuadernos durante la temporada escolar. ¿Cuánto paga en total?',
      opts: ['$36.000', '$48.000', '$12.000', '$9.000'],
      correct: 0,
      exp: 'Con 25 % de descuento se paga el 75 % del precio: 0,75 × 12.000 = $9.000 por cuaderno. Por cuatro cuadernos: 4 × 9.000 = $36.000. La opción B ($48.000) es el precio sin descuento, y la D ($9.000) es el valor de un solo cuaderno.',
      tip: 'Pagar con un 25 % de descuento equivale a pagar el 75 %: multiplica el precio por 0,75 y no olvides la cantidad.',
    },
    {
      comp: 'Formulación y ejecución',
      ctxLabel: 'SITUACIÓN · Pregunta 6',
      ctxClass: 'ctx-sit',
      context: `<p>Dos gimnasios de la ciudad ofrecen planes distintos. El gimnasio A cobra una matrícula de $40.000 más $30.000 por cada mes. El gimnasio B no cobra matrícula, pero cobra $50.000 por cada mes.</p>`,
      text: '¿En cuántos meses los dos planes cuestan exactamente lo mismo?',
      opts: ['2 meses', '4 meses', '1 mes', '8 meses'],
      correct: 0,
      exp: 'Se igualan los dos planes: 40.000 + 30.000·m = 50.000·m → 40.000 = 20.000·m → m = 2. A los 2 meses ambos cuestan $100.000; a partir de ahí, el gimnasio A resulta más económico. Verificación: 40.000 + 30.000×2 = 100.000 = 50.000×2 ✓',
      tip: 'Los problemas de «cuándo cuestan lo mismo» se resuelven igualando las dos expresiones y despejando la incógnita.',
    },
    {
      comp: 'Formulación y ejecución',
      ctxLabel: 'SITUACIÓN · Pregunta 7',
      ctxClass: 'ctx-sit',
      context: `<p>La receta tradicional del pipián para 6 empanadas necesita 300 gramos de papa. Un vendedor quiere preparar 20 empanadas usando la misma receta, sin cambiar las proporciones.</p>`,
      text: '¿Cuántos gramos de papa necesita?',
      opts: ['1.000 g', '900 g', '600 g', '360 g'],
      correct: 0,
      exp: 'Si 6 empanadas necesitan 300 g, cada empanada necesita 300 ÷ 6 = 50 g. Para 20 empanadas: 20 × 50 = 1.000 g. También por regla de tres: (300 × 20) ÷ 6 = 6.000 ÷ 6 = 1.000 g.',
      tip: 'En una regla de tres directa, halla primero el valor por unidad (gramos por empanada) y multiplícalo por la cantidad pedida.',
    },
    {
      comp: 'Formulación y ejecución',
      ctxLabel: 'SITUACIÓN · Pregunta 8',
      ctxClass: 'ctx-sit',
      context: `<p>En un salón de un preuniversitario, el número de estudiantes mujeres es el doble del número de estudiantes hombres. En total hay 33 estudiantes.</p>`,
      text: '¿Cuántos hombres hay en el salón?',
      opts: ['11', '22', '16', '33'],
      correct: 0,
      exp: 'Si hay h hombres, hay 2h mujeres. En total: h + 2h = 33 → 3h = 33 → h = 11. Entonces hay 11 hombres y 22 mujeres. La opción B (22) es el número de mujeres, no de hombres.',
      tip: 'Traduce el enunciado a una ecuación: «el doble» significa multiplicar por 2. Define la incógnita según lo que preguntan.',
    },
    {
      comp: 'Interpretación de datos',
      ctxLabel: 'SITUACIÓN · Pregunta 9',
      ctxClass: 'ctx-sit',
      context: `<p>La tabla muestra el puntaje que obtuvieron cinco estudiantes en el último simulacro tipo Saber 11, en escala de 0 a 500:</p>${TABLA_PUNTAJES}`,
      text: 'La mediana de los puntajes obtenidos por los cinco estudiantes es',
      opts: ['310', '316', '350', '280'],
      correct: 0,
      exp: 'La mediana es el valor central al ordenar los datos de menor a mayor: 280, 300, 310, 340, 350. El valor del medio es 310 (el puntaje de Carlos). Ojo: 316 es el promedio, no la mediana; conviene no confundirlos.',
      tip: 'Para hallar la mediana, primero ordena los datos y ubica el del centro; con cinco datos, es el tercero.',
    },
    {
      comp: 'Razonamiento geométrico',
      ctxLabel: 'SITUACIÓN · Pregunta 10',
      ctxClass: 'ctx-sit',
      context: `<p>Una cancha de microfútbol tiene forma rectangular. Su largo mide 40 metros y su ancho, 20 metros. Se quiere cercar todo su contorno con malla.</p>`,
      text: '¿Cuántos metros de malla se necesitan para cercar el contorno completo de la cancha?',
      opts: ['120 m', '800 m', '60 m', '240 m'],
      correct: 0,
      exp: 'Cercar el contorno es hallar el perímetro: P = 2 × (largo + ancho) = 2 × (40 + 20) = 2 × 60 = 120 m. La opción B (800) corresponde al área (40 × 20), no al perímetro, y está en unidades distintas (m²).',
      tip: 'Cercar o bordear una figura pide el perímetro (suma de los lados); cubrir o llenar su superficie pide el área.',
    },
  ],
};



// ─── Metadatos de materia para la app (iconos, tintes, descripciones) ───
const ICONS = {
  book: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>',
  sigma: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 7V4H6l6 8-6 8h12v-3"/></svg>',
  globe: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
  lang: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>',
  leaf: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
  atom: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"/><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"/></svg>',
  flask: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.31"/><path d="M14 9.3V2"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/></svg>',
};

const MATERIA_META = {
  lc:  { tint: 'var(--tint-lc)',  icon: ICONS.book,  nivel: 'Intermedio', desc: 'Comprensión, interpretación y evaluación de textos continuos y discontinuos: identificar ideas, inferir intenciones y valorar argumentos.' },
  mat: { tint: 'var(--tint-mat)', icon: ICONS.sigma, nivel: 'Intermedio', desc: 'Interpretación de datos, formulación y ejecución de problemas y razonamiento geométrico en contextos cotidianos.' },
  soc: { tint: 'var(--tint-soc)', icon: ICONS.globe, nivel: 'Intermedio', desc: 'Pensamiento social, interpretación de perspectivas y competencias ciudadanas.' },
  ing: { tint: 'var(--tint-ing)', icon: ICONS.lang,  nivel: 'B1',         desc: 'Comprensión lectora y uso del idioma según el Marco Común Europeo.' },
  bio: { tint: 'var(--tint-bio)', icon: ICONS.leaf,  nivel: 'Intermedio', desc: 'Seres vivos, ecosistemas y procesos biológicos en contexto.' },
  fis: { tint: 'var(--tint-fis)', icon: ICONS.atom,  nivel: 'Intermedio', desc: 'Mecánica, energía y fenómenos físicos aplicados.' },
  qui: { tint: 'var(--tint-qui)', icon: ICONS.flask, nivel: 'Intermedio', desc: 'Materia, reacciones y estequiometría en situaciones reales.' },
};

