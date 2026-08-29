/* Inglés · Parte 3 — «Complete las conversaciones» · lote 2026-B
 *
 * 28 preguntas de los cinco formularios entregados por el instituto. El
 * estímulo es la frase de una persona; el estudiante escoge la respuesta que
 * daría la otra. Se mide reacción conversacional, no gramática.
 *
 * Los cuadernillos NO traen hoja de respuestas: solo el «Ejemplo 0». Las claves
 * las determinó el modelo, y por eso se cargan con `clave_origen = 'modelo'`.
 * `confianza: 'media'` marca las que tienen una segunda lectura defendible.
 *
 * Erratas del original corregidas en silencio (la lista va al cliente):
 *   «So do it» → So do I · «toomorrow» → tomorrow · «Be cateful» → Be careful
 *   «you are sitting my seat» → you are sitting in my seat
 *
 * Las explicaciones nunca nombran una letra: las opciones se barajan por
 * estudiante.
 */

const DIALOGO = t => `<div class="ctx-dialogo">${t}</div>`;
const P3 = (linea, opts, correct, exp, tip, confianza) => ({
  comp: 'Parte 3 · Diálogos cortos',
  ctxLabel: 'CONVERSACIÓN',
  ctxClass: 'ctx-sit',
  context: DIALOGO(linea),
  text: 'Choose the best reply.',
  opts, correct, exp, tip,
  confianza: confianza || 'alta',
});

const BANKS = {
  ing: [
    /* ── Formulario A · 11 a 18 ─────────────────────────────────────────── */
    P3('You have to eat breakfast every morning!',
      ["You're right.", "Let's have lunch.", 'Fruit is good.'], 0,
      'La frase es un consejo, y lo que se espera es aceptarlo: darle la razón a quien lo da. Proponer almorzar cambia de tema, y comentar que la fruta es buena no responde a lo que dijo.',
      'Cuando alguien te da un consejo, la respuesta natural en inglés es aceptarlo o rechazarlo, no cambiar de tema.'),

    P3('How often do you dance?',
      ['I need a break.', 'Not everyone practices.', 'Most weekends.'], 2,
      '«How often» pregunta por la frecuencia, así que la respuesta tiene que decir cada cuánto: casi todos los fines de semana. Las otras dos hablan de descanso y de otras personas, no de con qué frecuencia baila.',
      'Fíjate en la palabra que abre la pregunta: how often pide frecuencia, how long pide duración, how much pide cantidad.'),

    P3('The oven was finally repaired.',
      ['I ordered pizza.', "It's still not working.", 'The waiter was late.'], 1,
      'Quien responde contradice la noticia: dice que el horno sigue sin servir. Es la única de las tres que se refiere al horno; las otras hablan de pizza y de un mesero, que no vienen al caso.',
      'Una respuesta puede contradecir lo que acaban de decir: no busques siempre la que esté de acuerdo.',
      'media'),

    P3("Let's go to the park and play tennis!",
      ['Answer!', 'Again?', 'Bye.'], 1,
      'Ante una invitación repetida, «¿Otra vez?» es una reacción natural que la comenta sin aceptarla ni rechazarla del todo. Despedirse o dar una orden no responden a una propuesta.',
      'A una invitación se responde aceptando, rechazando o comentándola. Descarta lo que no haga ninguna de las tres.',
      'media'),

    P3("I'm afraid I have to buy a better laptop.",
      ['Not often.', "That's brilliant!", "What's wrong?"], 2,
      '«I’m afraid» anuncia algo que preocupa, así que lo natural es preguntar qué pasa con el computador que tiene. Celebrarlo choca con esa preocupación, y hablar de frecuencia no responde nada.',
      'La expresión «I’m afraid…» avisa de que viene una mala noticia; la respuesta debería reconocerla.'),

    P3('Have you joined the theater club yet?',
      ['A month ago.', 'Yes, I agree.', 'At the moment.'], 0,
      'La pregunta es si ya se inscribió, y la respuesta confirma que sí diciendo cuándo: hace un mes. Estar de acuerdo no responde a una pregunta de sí o no sobre un hecho.',
      'A una pregunta con «yet» se responde con lo que ya pasó y cuándo pasó.'),

    P3('Make sure that you keep the medicine in the cabinet.',
      ["It's kind.", 'See you soon.', 'Of course!'], 2,
      'Es una instrucción, y lo natural es comprometerse a cumplirla. Despedirse deja la instrucción sin responder, y calificarla de amable no dice si se va a hacer.',
      'A una instrucción se responde aceptándola («Of course», «Sure») o poniendo un reparo.'),

    P3('So, who is going to repair the engine?',
      ["I'll do it myself.", "I'll go straight.", "I'll look for it."], 0,
      'La pregunta es QUIÉN va a hacerlo, y la respuesta nombra a la persona: yo mismo. Las otras dos dicen qué se va a hacer, no quién.',
      'Responde a la palabra interrogativa: who pide una persona, where un lugar, when un momento.'),

    /* ── Formulario B · 6 a 10 ──────────────────────────────────────────── */
    P3('Would you like to draw?',
      ['Good job!', 'Sure!', 'Me too.'], 1,
      'Es una invitación, y lo que corresponde es aceptarla. Felicitar supone un trabajo ya hecho, y «yo también» responde a una afirmación, no a una propuesta.',
      '«Would you like…?» es una invitación: se acepta o se rechaza.'),

    P3('I always go swimming before I go to work.',
      ['I feel fine!', 'So do I.', "I'd like it!"], 1,
      'Quien responde cuenta que hace lo mismo. «So do I» es la fórmula del inglés para sumarse a una costumbre que el otro acaba de contar; las otras dos hablan de cómo se siente o de lo que le gustaría.',
      'Para decir «yo también» sobre una costumbre en presente, el inglés usa «So do I».'),

    P3('What about staying at home and cooking something?',
      ["Let's go there!", "You're welcome!", 'Yeah, why not?'], 2,
      'Es una propuesta de quedarse en casa, y se acepta con entusiasmo. Proponer ir a otro lado contradice el plan, y «de nada» responde a un agradecimiento que nadie hizo.',
      '«What about…?» propone un plan; la respuesta lo acepta o lo cambia.'),

    P3("I'm not interested in doing that now.",
      ['Ok, then.', 'Let him see.', "You mustn't go."], 0,
      'La otra persona acepta la negativa sin insistir. Las demás hablan de un tercero o prohíben algo que nadie propuso.',
      'Cuando alguien rechaza algo, la respuesta natural es aceptar el rechazo.'),

    P3("Sorry but I can't drive you home.",
      ['I suppose so.', 'Never mind!', 'I travel tomorrow.'], 1,
      'Es una disculpa, y «no importa» le quita peso: es lo que se dice para tranquilizar a quien se excusa. Suponer que sí no encaja con una disculpa, y anunciar un viaje cambia de tema.',
      'Ante una disculpa, el inglés responde quitándole importancia: «Never mind», «Don’t worry», «That’s OK».'),

    /* ── Formulario C · 36 a 40 ─────────────────────────────────────────── */
    P3("I think Jane's a very good teacher.",
      ['Who is it?', 'How far?', 'Do you?'], 2,
      '«Do you?» es la coletilla con la que el inglés muestra interés por lo que el otro acaba de opinar, sin estar de acuerdo ni en desacuerdo. Preguntar quién es o qué tan lejos queda no viene al caso: ya se sabe de quién se habla.',
      'Las preguntas cortas de eco —«Do you?», «Did he?», «Is it?»— sirven para mostrar interés, no para pedir información.'),

    P3("Why don't we go shopping after school?",
      ['Yes, I know.', "That's a good idea.", "I've got one, thanks."], 1,
      'Es una propuesta de plan y se acepta llamándola buena idea. «Ya lo sé» respondería a un dato, y «ya tengo uno» a un ofrecimiento de objeto.',
      '«Why don’t we…?» no es un reproche: es la forma de proponer un plan.'),

    P3('Thanks for helping with my homework.',
      ['No thanks.', 'No problem.', "No, it hasn't."], 1,
      'Es un agradecimiento, y «no problem» es la fórmula habitual para restarle importancia. «No thanks» rechaza algo que ofrecen, y la tercera responde a una pregunta que nadie hizo.',
      'Las tres opciones empiezan igual: lo que decide es qué sigue después del «no».'),

    P3('Please answer the phone.',
      ['How are you?', "Why can't you?", 'When did he call?'], 1,
      'Ante una orden, quien responde se resiste preguntando por qué no la hace quien la pide. Saludar ignora la petición, y preguntar cuándo llamó supone una llamada pasada, no el teléfono que suena ahora.',
      'Una petición se puede aceptar o discutir; preguntar «¿y por qué tú no?» es discutirla.'),

    P3("I'll wash up.",
      ['If you really want it.', "It's all right now.", "That's nice of you."], 2,
      'Es un ofrecimiento de lavar los platos, y se agradece reconociendo el gesto. Las otras dos suenan a permiso concedido a regañadientes o a que el asunto ya se resolvió, y ninguna agradece.',
      'A un ofrecimiento espontáneo se responde agradeciendo: «That’s nice of you», «Thank you».'),

    /* ── Formulario D · 11 a 15 ─────────────────────────────────────────── */
    P3('Can you hold the camera?',
      ["That's quick!", 'Of course.', 'May I keep this?'], 1,
      'Es una petición de favor y se acepta. Comentar la rapidez no responde nada, y pedir quedarse con algo cambia el sentido: le están pidiendo sostener la cámara, no regalándosela.',
      '«Can you…?» pide un favor; la respuesta lo concede o lo niega.'),

    P3('Honey, I invited my parents to the party.',
      ['Be careful!', "That's great!", 'As soon as possible!'], 1,
      'Es una noticia y se recibe con entusiasmo. Advertir que tenga cuidado no viene a cuento con una invitación, y «lo antes posible» respondería a una pregunta sobre cuándo.',
      'A una noticia se reacciona valorándola: «That’s great», «Oh no», «Really?».'),

    P3("Wasn't it a wonderful journey?",
      ["You're lucky!", 'Very kind of you!', 'Just amazing!'], 2,
      'Quien pregunta ya está diciendo que el viaje fue maravilloso y busca que se lo confirmen: la respuesta lo confirma con más entusiasmo todavía. Las otras dos felicitan o agradecen a la persona, no opinan del viaje.',
      'Una pregunta negativa como «Wasn’t it…?» busca que le den la razón, no información.'),

    P3('Anna missed the train.',
      ["That's terrible!", 'Never again.', 'How long is it?'], 0,
      'Es una mala noticia y se reacciona lamentándola. «Nunca más» supone algo que se decidió no repetir, y preguntar la duración no encaja con haber perdido el tren.',
      'Primero decide si la noticia es buena o mala: eso descarta la mitad de las opciones.'),

    P3("We couldn't swim in the pool yesterday.",
      ['How often?', "That's exciting!", 'What happened?'], 2,
      'Quien responde pide la explicación de por qué no pudieron nadar, que es lo que la frase deja pendiente. Celebrarlo choca con una contrariedad, y preguntar la frecuencia no responde al hecho puntual de ayer.',
      'Cuando la frase deja algo sin explicar, la mejor respuesta suele ser pedir esa explicación.'),

    /* ── Formulario E · 11 a 15 ─────────────────────────────────────────── */
    P3('I loved the book!',
      ['Did you?', 'Was it?', 'Why not?'], 0,
      'La frase está en pasado y el verbo es «loved», así que la pregunta de eco tiene que repetir ese verbo: «Did you?». «Was it?» respondería a una frase con el verbo to be, y «Why not?» a una negación.',
      'La pregunta de eco copia el verbo de la frase: «I loved…» pide «Did you?»; «It was…» pide «Was it?».'),

    P3('Can I try on that beautiful dress now?',
      ['What size?', 'Just a small bit.', 'Never mind!'], 0,
      'Quien atiende concede la prueba y pide el dato que le falta: la talla. Las otras dos hablan de cantidad o quitan importancia a algo, y ninguna de las dos tiene sentido ante quien quiere medirse un vestido.',
      'En una tienda, la respuesta suele pedir el dato que falta para atender: talla, color, cantidad.'),

    P3('Excuse me, you are sitting in my seat.',
      ['Be careful!', "That's easy!", 'Oh, I can move!'], 2,
      'Le están reclamando el puesto con cortesía, y lo que corresponde es ofrecerse a cambiarse. Advertir que tenga cuidado o decir que es fácil no resuelven el reclamo.',
      'Cuando te señalan un error tuyo, la respuesta esperada es corregirlo, no comentarlo.'),

    P3('Can you help me with this?',
      ['You must practice!', 'Will it take long?', "It doesn't matter."], 1,
      'Antes de aceptar el favor, quien responde pregunta cuánto tiempo le va a tomar: es una respuesta que sigue la conversación. Mandarlo a practicar no ayuda, y «no importa» respondería a una disculpa.',
      'No toda respuesta a una petición es sí o no: preguntar por las condiciones también la responde.'),

    P3('This is boring!',
      ["Don't change it!", "Let's look for it.", 'How about cooking?'], 2,
      'Ante la queja de aburrimiento, la respuesta propone otra cosa que hacer. Pedirle que no cambie nada va en contra de la queja, y buscar algo supone un objeto perdido que nadie mencionó.',
      'A una queja se responde resolviéndola: si alguien se aburre, se le propone un plan.'),
  ],
};

/* La ruta: seis cuestionarios cortos, agrupados por el tipo de reacción. */
const CUESTIONARIOS = {
  ing: [
    {
      tema: 'Parte 3 · Diálogos cortos',
      items: [
        { id: 'ing-6',  titulo: 'Consejos y costumbres',     qs: [0, 1, 2, 3, 4],       tipo: 'Diálogo' },
        { id: 'ing-7',  titulo: 'Preguntas e instrucciones', qs: [5, 6, 7, 8, 9],       tipo: 'Diálogo' },
        { id: 'ing-8',  titulo: 'Planes y negativas',        qs: [10, 11, 12, 13, 14],  tipo: 'Diálogo' },
        { id: 'ing-9',  titulo: 'Agradecer y ofrecer',       qs: [15, 16, 17, 18, 19],  tipo: 'Diálogo' },
        { id: 'ing-10', titulo: 'Reaccionar a una noticia',  qs: [20, 21, 22, 23, 24],  tipo: 'Diálogo' },
        { id: 'ing-11', titulo: 'Pedir y resolver',          qs: [25, 26, 27],          tipo: 'Diálogo' },
      ],
    },
  ],
};
