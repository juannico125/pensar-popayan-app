/* Inglés · Parte 1 — «¿Dónde puede ver estos avisos?» · lote 2026-B
 *
 * Extraído de los cinco formularios que entregó el instituto (25 preguntas).
 * Los cuadernillos NO traen hoja de respuestas: solo el «Ejemplo 0» viene
 * marcado. Las claves de este archivo las determinó el modelo leyendo cada
 * aviso, y por eso todas se cargan con `clave_origen = 'modelo'`.
 *
 * `confianza` alimenta la plantilla de revisión docente:
 *   alta  — el aviso solo admite una lectura razonable
 *   media — hay una segunda opción defendible; conviene que un docente la vea
 *
 * Erratas del original corregidas en silencio (la lista va al cliente):
 *   «in the boast» → in the boat · «afternons» → afternoons · «in the stret» → in the street
 *
 * Las explicaciones NUNCA nombran una letra: las opciones se barajan por
 * estudiante, así que «la opción B» sería falsa para media clase.
 */

const AVISO = t => `<div class="ctx-aviso">${t}</div>`;

const BANKS = {
  ing: [
    /* ── Formulario A · preguntas 1 a 5 ────────────────────────────────── */
    {
      comp: 'Parte 1 · Avisos y letreros', ctxLabel: 'AVISO', ctxClass: 'ctx-sit',
      context: AVISO('Try our new guitars here!'),
      text: 'Where can you see this notice?',
      opts: ['in a computer shop', 'in a music shop', 'in a bookshop'],
      correct: 1, confianza: 'alta',
      exp: '«Guitars» son guitarras, así que el aviso invita a probar instrumentos: solo tiene sentido en una tienda de música. Las otras dos tiendas venden computadores y libros, que no se «prueban» tocando.',
      tip: 'Busca el sustantivo clave del aviso (aquí, guitars) y pregúntate qué negocio vende justo eso.',
    },
    {
      comp: 'Parte 1 · Avisos y letreros', ctxLabel: 'AVISO', ctxClass: 'ctx-sit',
      context: AVISO('Music sale &mdash; 3rd floor'),
      text: 'Where can you see this notice?',
      opts: ['in a department store', 'outside an apartment', 'in a bank'],
      correct: 0, confianza: 'alta',
      exp: 'La pista está en «3rd floor»: solo un almacén grande con varios pisos necesita indicarte en cuál está la sección de música. Un apartamento no tiene secciones y un banco no vende música.',
      tip: 'Cuando un aviso menciona un piso o una sección, piensa en un edificio con varias áreas de venta.',
    },
    {
      comp: 'Parte 1 · Avisos y letreros', ctxLabel: 'AVISO', ctxClass: 'ctx-sit',
      context: AVISO('Single tickets 1.20<br>Return tickets £2.00'),
      text: 'Where can you see this notice?',
      opts: ['at a theatre', 'at a train station', 'at a cinema'],
      correct: 1, confianza: 'alta',
      exp: 'La clave es «return ticket», el tiquete de ida y vuelta. Al teatro y al cine se compra una sola entrada para la función; nadie compra «ida y vuelta» para ver una película. Ese par «single / return» es de transporte.',
      tip: 'En inglés británico, single = solo ida y return = ida y vuelta. Ese par apunta siempre a transporte.',
    },
    {
      comp: 'Parte 1 · Avisos y letreros', ctxLabel: 'AVISO', ctxClass: 'ctx-sit',
      context: AVISO('You must wear shoes in the boat at all times.'),
      text: 'Where can you see this notice?',
      opts: ['by a lake', 'in a shoe shop', 'on a farm'],
      correct: 0, confianza: 'alta',
      exp: 'El aviso habla de una norma dentro de un bote («in the boat»), y los botes están donde hay agua: junto al lago. Una zapatería vende zapatos, no exige usarlos, y en una finca no hay botes.',
      tip: 'Cuando el aviso da una regla, pregúntate en qué lugar esa regla haría falta de verdad.',
    },
    {
      comp: 'Parte 1 · Avisos y letreros', ctxLabel: 'AVISO', ctxClass: 'ctx-sit',
      context: AVISO('Please be quiet &mdash; exam in room 3C'),
      text: 'Where can you see this notice?',
      opts: ['in a church', 'in a school', 'in a zoo'],
      correct: 1, confianza: 'alta',
      exp: '«Exam» y «room 3C» son vocabulario de salones numerados: se presenta un examen, y eso ocurre en un colegio. En una iglesia también se pide silencio, pero no se hacen exámenes en aulas numeradas.',
      tip: 'Cuando dos opciones comparten un rasgo (aquí, el silencio), decide con el dato que solo una explica.',
    },

    /* ── Formulario B · preguntas 1 a 5 ────────────────────────────────── */
    {
      comp: 'Parte 1 · Avisos y letreros', ctxLabel: 'AVISO', ctxClass: 'ctx-sit',
      context: AVISO("You can see the elephants here.<br>Don't take pictures."),
      text: 'Where can you see this notice?',
      opts: ['at the beach', 'at the park', 'at the zoo'],
      correct: 2, confianza: 'alta',
      exp: 'Hay elefantes que se pueden ver y una prohibición de tomar fotos: eso describe un zoológico. En una playa no hay elefantes, y un parque común tampoco los exhibe ni regula las fotos.',
      tip: 'Si el aviso nombra un animal exótico, casi siempre el lugar es el zoológico.',
    },
    {
      comp: 'Parte 1 · Avisos y letreros', ctxLabel: 'AVISO', ctxClass: 'ctx-sit',
      context: AVISO('Now with lemon'),
      text: 'Where can you see this notice?',
      opts: ['on a watch', 'on a book', 'on a drink'],
      correct: 2, confianza: 'alta',
      exp: '«Now with lemon» anuncia un sabor nuevo, y el sabor solo aplica a algo que se consume. Un reloj y un libro no tienen sabor a limón.',
      tip: 'Los avisos de sabor, aroma o ingrediente van sobre empaques de comida o bebida.',
    },
    {
      comp: 'Parte 1 · Avisos y letreros', ctxLabel: 'AVISO', ctxClass: 'ctx-sit',
      context: AVISO('Wear the right shoes in here'),
      text: 'Where can you see this notice?',
      opts: ['in a music room', 'in a sports room', 'in a computer room'],
      correct: 1, confianza: 'alta',
      exp: 'Exigir el calzado adecuado tiene sentido donde se hace actividad física y el piso se daña o resbala: el salón deportivo. Para tocar música o usar un computador el calzado no importa.',
      tip: 'Pregúntate para qué actividad la regla sería necesaria, no solo dónde cabría el aviso.',
    },
    {
      comp: 'Parte 1 · Avisos y letreros', ctxLabel: 'AVISO', ctxClass: 'ctx-sit',
      context: AVISO('For children under 7'),
      text: 'Where can you see this notice?',
      opts: ['on a game', 'on a lamp', 'on an iphone'],
      correct: 0, confianza: 'alta',
      exp: 'Indicar una edad recomendada es propio de los juguetes y juegos, que se clasifican por edad. Las lámparas y los teléfonos no se venden «para menores de 7 años».',
      tip: 'Las restricciones por edad aparecen sobre todo en juegos, juguetes y películas.',
    },
    {
      comp: 'Parte 1 · Avisos y letreros', ctxLabel: 'AVISO', ctxClass: 'ctx-sit',
      context: AVISO('Please clean your desk at the end of the school day.'),
      text: 'Where can you see this notice?',
      opts: ['in a bathroom', 'in a hall', 'in a classroom'],
      correct: 2, confianza: 'alta',
      exp: 'El aviso habla de un pupitre («desk») y del final de la jornada escolar: eso ocurre en el salón de clase. En un baño o un pasillo no hay pupitres que limpiar.',
      tip: 'Localiza el objeto que nombra el aviso; el lugar es donde vive ese objeto.',
    },

    /* ── Formulario C · preguntas 1 a 5 ────────────────────────────────── */
    {
      comp: 'Parte 1 · Avisos y letreros', ctxLabel: 'AVISO', ctxClass: 'ctx-sit',
      context: AVISO('Basketball game<br>this evening at 7'),
      text: 'Where can you see this notice?',
      opts: ['at a playground', 'on a street', 'in a school'],
      correct: 2, confianza: 'media',
      exp: 'El aviso anuncia un partido para esa misma noche, así que es una cartelera dirigida a una comunidad que ya está reunida: el colegio. Ojo con la trampa: la cancha es donde ocurre el partido, no donde se anuncia.',
      tip: 'Distingue el lugar del EVENTO del lugar del AVISO. La pregunta siempre es por el segundo.',
    },
    {
      comp: 'Parte 1 · Avisos y letreros', ctxLabel: 'AVISO', ctxClass: 'ctx-sit',
      context: AVISO('Please, do not give food to the animals. Thanks!'),
      text: 'Where can you see this notice?',
      opts: ['in a garden', 'in a zoo', 'on a beach'],
      correct: 1, confianza: 'alta',
      exp: 'Prohibir que el público alimente a los animales solo hace falta donde hay animales en exhibición y visitantes cerca: el zoológico. En un jardín o una playa no hay animales bajo cuidado con una dieta controlada.',
      tip: 'Una prohibición señala qué suele pasar en ese lugar: si la prohíben, es porque la gente lo intenta.',
    },
    {
      comp: 'Parte 1 · Avisos y letreros', ctxLabel: 'AVISO', ctxClass: 'ctx-sit',
      context: AVISO('White chocolate balls.'),
      text: 'Where can you see this notice?',
      opts: ['on a milk box', 'on a candy box', 'on a cake box'],
      correct: 1, confianza: 'alta',
      exp: 'Son bolas de chocolate blanco, es decir, dulces empacados: la caja de confites. La leche no viene en bolas y una torta se vende entera, no en bolitas.',
      tip: 'Fíjate en la FORMA del producto («balls»): suele decidir en qué empaque viene.',
    },
    {
      comp: 'Parte 1 · Avisos y letreros', ctxLabel: 'AVISO', ctxClass: 'ctx-sit',
      context: AVISO('Clean the board in the afternoons.'),
      text: 'Where can you see this notice?',
      opts: ['in a classroom', 'in a hall', 'in a bookshop'],
      correct: 0, confianza: 'alta',
      exp: 'El «board» es el tablero, y el tablero está en el salón de clase. Ni el pasillo ni la librería tienen un tablero que haya que borrar todas las tardes.',
      tip: 'Board tiene varios sentidos; en contexto escolar es el tablero.',
    },
    {
      comp: 'Parte 1 · Avisos y letreros', ctxLabel: 'AVISO', ctxClass: 'ctx-sit',
      context: AVISO('Today, take beautiful oranges, grapes<br>and coconuts for $3'),
      text: 'Where can you see this notice?',
      opts: ['in a sports store', 'in a flower store', 'in a food store'],
      correct: 2, confianza: 'alta',
      exp: 'Naranjas, uvas y cocos son frutas con precio: es una oferta de una tienda de alimentos. La floristería vende flores y la tienda deportiva, implementos.',
      tip: 'Agrupa los sustantivos del aviso en una sola categoría; esa categoría te da el negocio.',
    },

    /* ── Formulario D · preguntas 6 a 10 ───────────────────────────────── */
    {
      comp: 'Parte 1 · Avisos y letreros', ctxLabel: 'AVISO', ctxClass: 'ctx-sit',
      context: AVISO("DON'T GIVE FOOD<br>TO THE GIRAFFES"),
      text: 'Where can you see this notice?',
      opts: ['at a zoo', 'at a garden', 'at a pet store'],
      correct: 0, confianza: 'alta',
      exp: 'Las jirafas no se tienen en jardines ni se venden como mascotas: viven en un zoológico, y allí se prohíbe que los visitantes las alimenten.',
      tip: 'El animal que nombra el aviso te descarta dos opciones de una vez.',
    },
    {
      comp: 'Parte 1 · Avisos y letreros', ctxLabel: 'AVISO', ctxClass: 'ctx-sit',
      context: AVISO("You can't take pictures<br>of the drawings"),
      text: 'Where can you see this notice?',
      opts: ['in a music class', 'in a sports class', 'in a painting class'],
      correct: 2, confianza: 'alta',
      exp: 'Lo que se protege son los «drawings», los dibujos, y los dibujos se hacen en la clase de pintura. En música y deportes no hay dibujos que fotografiar.',
      tip: 'El objeto protegido por la prohibición te dice de qué clase se trata.',
    },
    {
      comp: 'Parte 1 · Avisos y letreros', ctxLabel: 'AVISO', ctxClass: 'ctx-sit',
      context: AVISO('How do I drive?'),
      text: 'Where can you see this notice?',
      opts: ['on a truck', 'on a train', 'on a motorbike'],
      correct: 0, confianza: 'media',
      exp: 'Es la calcomanía que llevan los camiones de empresa para que otros conductores reporten cómo maneja el chofer. Va en un vehículo grande y visible por detrás: el tren lo conduce un maquinista y no se adelanta, y una moto no tiene superficie para ese aviso.',
      tip: 'Algunos avisos son fórmulas fijas del inglés; este va siempre en la parte trasera de camiones.',
    },
    {
      comp: 'Parte 1 · Avisos y letreros', ctxLabel: 'AVISO', ctxClass: 'ctx-sit',
      context: AVISO('Clean your desk!'),
      text: 'Where can you see this notice?',
      opts: ['in a playground', 'in a classroom', 'in a hall'],
      correct: 1, confianza: 'alta',
      exp: 'El pupitre («desk») está en el salón de clase. En el patio de recreo y en el pasillo no hay pupitres.',
      tip: 'Ubica el mueble que nombra el aviso: casi siempre resuelve la pregunta.',
    },
    {
      comp: 'Parte 1 · Avisos y letreros', ctxLabel: 'AVISO', ctxClass: 'ctx-sit',
      context: AVISO('Old people and women<br>with babies can sit here.'),
      text: 'Where can you see this notice?',
      opts: ['on a boat', 'on a bike', 'on a bus'],
      correct: 2, confianza: 'alta',
      exp: 'Es el aviso de las sillas preferenciales del transporte público, donde los puestos son limitados y hay pasajeros de pie. Una bicicleta no tiene puestos que reservar.',
      tip: 'Si el aviso reserva un asiento para alguien, piensa en transporte con muchos pasajeros.',
    },

    /* ── Formulario E · preguntas 6 a 10 ───────────────────────────────── */
    {
      comp: 'Parte 1 · Avisos y letreros', ctxLabel: 'AVISO', ctxClass: 'ctx-sit',
      context: AVISO('Try our great<br>chocolate apple pie'),
      text: 'Where can you see this notice?',
      opts: ['in a toy shop', 'in a clothes shop', 'in a cake shop'],
      correct: 2, confianza: 'alta',
      exp: 'Un «pie» es un pastel, y los pasteles se venden en la pastelería. Ni la juguetería ni la tienda de ropa venden comida.',
      tip: 'La invitación «try our…» acompaña siempre a algo que se come o se bebe.',
    },
    {
      comp: 'Parte 1 · Avisos y letreros', ctxLabel: 'AVISO', ctxClass: 'ctx-sit',
      context: AVISO('Put the crayons in the blue boxes'),
      text: 'Where can you see this notice?',
      opts: ['in a music classroom', 'in a drawing classroom', 'in a computer classroom'],
      correct: 1, confianza: 'alta',
      exp: '«Crayons» son crayolas, el material propio de la clase de dibujo. En el salón de música se guardan instrumentos y en el de computadores, equipos.',
      tip: 'El material que se manda a guardar identifica la materia del salón.',
    },
    {
      comp: 'Parte 1 · Avisos y letreros', ctxLabel: 'AVISO', ctxClass: 'ctx-sit',
      context: AVISO("Don't touch the flowers"),
      text: 'Where can you see this notice?',
      opts: ['at a beach', 'at a park', 'at a garden'],
      correct: 2, confianza: 'media',
      exp: 'El jardín es el lugar que existe precisamente para cultivar flores, así que allí la prohibición protege lo que le da sentido al sitio. En la playa no hay flores, y el parque es un espacio mucho más general.',
      tip: 'Entre dos lugares posibles, escoge aquel del que el objeto del aviso es la razón de ser.',
    },
    {
      comp: 'Parte 1 · Avisos y letreros', ctxLabel: 'AVISO', ctxClass: 'ctx-sit',
      context: AVISO("Don't eat or drink"),
      text: 'Where can you see this notice?',
      opts: ['in a truck', 'on a bike', 'in a bus'],
      correct: 2, confianza: 'media',
      exp: 'Es una norma dirigida a pasajeros, y el vehículo de esta lista que lleva pasajeros es el bus. En una bicicleta no hay dónde comer, y el camión lo ocupa el conductor, no un público al que se le fijen reglas.',
      tip: 'Las prohibiciones de comer y beber aparecen donde viaja o se reúne mucha gente.',
    },
    {
      comp: 'Parte 1 · Avisos y letreros', ctxLabel: 'AVISO', ctxClass: 'ctx-sit',
      context: AVISO('Read fun stories about animals<br>with us Today at 3:00'),
      text: 'Where can you see this notice?',
      opts: ['on a street', 'in a bookshop', 'in a playground'],
      correct: 1, confianza: 'alta',
      exp: 'Es la invitación a una lectura en voz alta a una hora fija, la actividad típica de una librería para atraer niños. La calle no organiza lecturas y el parque infantil es para jugar.',
      tip: 'Un aviso con hora exacta anuncia una actividad; pregúntate qué negocio la organizaría.',
    },
  ],
};

/* La ruta: cinco cuestionarios de cinco preguntas, uno por formulario. */
const CUESTIONARIOS = {
  ing: [
    {
      tema: 'Parte 1 · Avisos y letreros',
      items: [
        { id: 'ing-1', titulo: 'Avisos: tiendas y transporte', qs: [0, 1, 2, 3, 4],      tipo: 'Aviso' },
        { id: 'ing-2', titulo: 'Avisos: colegio y zoológico',   qs: [5, 6, 7, 8, 9],      tipo: 'Aviso' },
        { id: 'ing-3', titulo: 'Avisos: comercio y comida',     qs: [10, 11, 12, 13, 14], tipo: 'Aviso' },
        { id: 'ing-4', titulo: 'Avisos: normas y prohibiciones', qs: [15, 16, 17, 18, 19], tipo: 'Aviso' },
        { id: 'ing-5', titulo: 'Avisos: lugares y actividades',  qs: [20, 21, 22, 23, 24], tipo: 'Aviso' },
      ],
    },
  ],
};
