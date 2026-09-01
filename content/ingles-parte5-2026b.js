/* Inglés · Parte 5 — «Comprensión de lectura» · lote 2026-B
 *
 * Fuente: el cuadernillo «Formulario inglés · parte 5» entregado por el
 * instituto (17 páginas escaneadas). Trae once textos largos con sus
 * preguntas: 65 en total. La numeración del original se repite entre
 * formularios (hay dos bloques «34 a 40», dos «11 a …», etc.), así que aquí
 * las preguntas se agrupan por texto y no por el número impreso.
 *
 * El cuadernillo NO trae hoja de respuestas: solo vienen marcados los
 * «Ejemplo 0». Las claves de este archivo las determinó el modelo leyendo cada
 * pasaje, y por eso todas se cargan con `clave_origen = 'modelo'`.
 *
 * `confianza` alimenta la plantilla de revisión docente:
 *   alta  — la respuesta se sostiene con una frase literal del texto
 *   media — hay una segunda lectura defendible; que un docente la vea primero
 *
 * ────────────────────────────────────────────────────────────────────────────
 * AVISO PARA REVISIÓN DOCENTE — el texto «How planes were born»
 *
 * Ese pasaje contiene historia falsa: llama «White Brothers» a los hermanos
 * Wright, «Orville and Nathan White» en vez de Orville y Wilbur, «the Irwins»
 * a los Montgolfier, y fecha el primer globo en 1738. Es un texto alterado a
 * propósito (o mal transcrito) en el cuadernillo original. Se carga tal cual
 * porque las siete preguntas dependen de esos nombres y fechas, y porque lo
 * que se evalúa es leer el texto, no saber historia. Aun así, la coordinación
 * debería decidir si lo deja, lo corrige o lo retira: un estudiante puede
 * salir creyendo que el avión lo inventaron los «White».
 * ────────────────────────────────────────────────────────────────────────────
 *
 * Erratas del original corregidas en silencio (la lista va al cliente):
 *   «Wath to wear?» → What to wear?  ·  «THE HAMBURGUER» → The Hamburger
 *   «for all the wholes» → for all the holes  ·  «he flied» → he flew
 *   «Some studies proved could be» → proved it could be
 *   «what benefits is could bring» → what benefits it could bring
 *   «trying tod in this text» → trying to do  ·  «nevelop» → develop
 *   «successf l» → successful  ·  «bette» → better  ·  «what they hav to say» → have
 *   «list n to every word» → listen  ·  «hiake people feel» → make people feel
 *   «Imanaging stress» → managing  ·  «Acording» → According  ·  «bussiness» → business
 *   «alre dy existed» → already  ·  «orkingmen» → workingmen  ·  «reputa ion» → reputation
 *   «in the mark t» → in the market  ·  «your body gests stronger» → gets stronger
 *   «parents'farm» → parents' farm  ·  «the 1800's» → the 1800s
 *   «drawings if a helicopter» → drawings of a helicopter
 *   «the desert if North Carolina» → the desert of North Carolina
 *   «The Unite States» → The United States
 *   «Don't concentrate too much what» → too much on what
 *   En «My trip to Bogotá» el escaneo repite un renglón a medias
 *   («…in my wrole fe Finally, we went to a typ cal restaurant…»); se deja una
 *   sola vez la frase completa.
 *
 * Las explicaciones NUNCA nombran una letra: las opciones se barajan por
 * estudiante, así que «la opción B» sería falsa para media clase.
 */

const TEXTO = (titulo, ...parrafos) =>
  `<p><strong>${titulo}</strong></p>` + parrafos.map(t => `<p>${t}</p>`).join('');

const R = (ctxLabel, context, text, opts, correct, exp, tip, confianza) => ({
  comp: 'Parte 5 · Comprensión de lectura',
  ctxLabel, ctxClass: 'ctx-pasaje', context,
  text, opts, correct, exp, tip,
  confianza: confianza || 'alta',
});

/* ═══════════════════════ Los once pasajes ═══════════════════════ */

const T_GOLF = TEXTO('Golf',
  'Golf is an outdoor sport played with a club and a ball on a field called a course. Players hit the ball with the club, usually very hard, across the course until it goes into a hole. When the player hits the ball, it is called a stroke.',
  'Historians believe that early forms of golf were played in the Netherlands and then in Scotland, where the oldest golf organization was created. The first golf courses were fields of grass; sheep ate the grass to keep it short. In the United States, the first course was on a farm in Illinois, and it is still there today. British players like John Taylor were considered the best in the 1800s, but in the 1920s Americans became well-known. In the 1960s, amazing players like Arnold Palmer and Jack Nicklaus began to appear.',
  'While playing, golfers choose between different clubs depending on how far they want to hit the ball. The balls are small, hard, white, and made of a strong material. They were originally wooden, but then they were made of leather in the 1600s. The modern balls made since the 1900s have very advanced technology in their design, which has improved the game a lot.',
  'There are different popular ways of playing, like match play or stroke play. However, in all cases, the golf player with the lowest number of strokes for all the holes wins.');

const T_EVELYN = TEXTO('Evelyn Smith',
  'Evelyn Smith was a pilot. Her father, David, had an important company in Kansas, USA, where she was born. They later moved to Texas with her Californian mother, and there Evelyn grew up with her younger sister, Helen, who became a painter and also wrote for a newspaper there. Evelyn got interested in airplanes when she was 20. Her uncle Jim, who was a mechanic, took her to a fair. They both got on an airplane and he flew it while she watched him. That is when she knew she wanted to learn to fly!',
  'Evelyn later traveled to Toronto, Canada, where she helped sell medicines for sick people. In 1919, she returned to the USA and got into medical school in Philadelphia. Then, she moved to Sacramento, where she learned how to fly along with her cousin, who sang and played popular music. During their training, Evelyn once saw a plane catch fire, but she was not frightened.',
  'In 1922, Smith bought an airplane thanks to some money that one of her parents lent her. Two years later, she moved to Pasadena, where her best friend helped her find a job. During this time, she was able to keep flying as a hobby.',
  'In May 1932, Evelyn flew from Hampton, USA, and after many hours she arrived in England, becoming the second woman to fly across the ocean.');

const T_REDES = TEXTO('Why I quit social media',
  'In recent years, there has been plenty of research about social media. Some studies proved it could be mentally unhealthy and suggest taking a break from it. I decided to quit Facebook, Twitter, and Instagram and see for myself what benefits it could bring.',
  'Now that I no longer have access to those networks, I get more work done and have time to do extra chores like answering more e-mails and talking to people who I can do business with. I might not get as many invitations nowadays, but the ones I get now are completely genuine. So, it has been positive.',
  'As for my friends, I have no idea what they all are doing, but those who really care about me are still there. I get involved with them on a real level, face to face. I listen to them without checking Facebook on my cell phone at the same time.',
  'I do things and enjoy them without wondering how they will look on Instagram. When I went out to eat with friends or relatives, I would always pause to upload pictures of the food. I would also publish online our location every time we went to whatever club or department store we visited. Now, I am living my life for my own pleasure, not for social media.',
  'I depended too much on social networks. My media was constantly full of videos and photos showing my day-to-day life. It was an awful habit, some kind of disease. Today, I feel free. I am enjoying something unexpected, which I had no idea I had lost.');

const T_BOGOTA = TEXTO('My trip to Bogotá and other places',
  'I arrived in Bogotá feeling excited and ready to explore a big city; unfortunately, many hours of unstoppable rain did not allow me to go out for a while. It rains a lot there, maybe more than in London, and I never thought that was possible.',
  'First I decided to visit a museum. I think museums are now more interesting and enjoyable places than before. I visited the Gold Museum and saw the gold from all over Colombia. Ancient people used to stick little gold pieces to their clothes during religious activities. They never considered it as a valuable metal. I wonder why people love gold and money so much nowadays. It is nothing special, just a metal. If you die, will you enjoy it?',
  'After that, I stayed with a family I had met at the museum. They invited me to stay with them in Chía. They live on the land that used to be their parents&rsquo; farm. That is why they have divided it into smaller parts, which means that they all live close to, next to, opposite or near each other. That is one really close and warm family. The houses are old and badly designed, built by the people themselves in different styles, but all beautiful and amazing. To have such a beautiful sense of family was something I had not seen in my whole life.',
  'Finally, we went to a typical restaurant. It was huge, with a fantastic view, and the food I ate was great. This was the part I liked the most. Colombian food is magnificent.');

const T_HAMBUR = TEXTO('The Hamburger',
  'There is controversy over the German origin of the hamburger, but it is a U.S. invention, says <em>The Hamburger: A History</em> by Josh Ozersky. However, the origin of the inventor of the hamburger is still not clear.',
  'It could be Charlie Nagreen, who sold meatballs between two pieces of soft bread in 1885. Or maybe Frank Menches, from Ohio, who sold a sandwich made of meat and soft bread in Hamburg, NY, in 1885. Another possible inventor was Louis Lassen, from Connecticut, who served some meat pieces between two slices of toast in 1900. There was also Fletcher David, a Texan who sold a meat sandwich with soft bread in a world exhibition in 1904, where it got the name &ldquo;hamburger&rdquo;.',
  'However, meat and bread &mdash;like today&rsquo;s hamburger&mdash; was more common in Hamburg, Germany, in the nineteenth century. It was called Hamburg steak and was a usual dish for the German immigrants that left Hamburg for the United States. Anyone could prepare it, and they could have it while standing up or walking.',
  'So, the hamburger already existed in the early twentieth century, but it was only food for workingmen and served in restaurants near factories at midday. However, after the introduction of the automobile in the market and people&rsquo;s new wish for meals to eat on the road, the reputation of the hamburger improved in 1920.');

const T_ROPA = TEXTO('What to wear?',
  'Hello dear readers,',
  'It is February and London Fashion Week has just ended. Fashion shows have been happening around the city. Magazines are full of chats about who the model of the moment is. Superstars and journalists have announced what the best dressed will be wearing in the coming seasons. Clearly, clothes can make you happy. I have decided that tomorrow I will &ldquo;dress for success&rdquo;.',
  'At 7.30 am, I remember my promise. I decide that dressing for success means more than putting my clothes on the right way round. I need to look good and feel good! The right clothing will make me feel confident and all my problems will disappear. Colleagues will be proud of me and I will get a better position.',
  'I open my bureau and notice that most of my clothes are black, brown and grey. They hang down sadly on their hangers. Are they depressed? I decide that a bright color is needed for successful dressing, and choose a red sweater. Now, I also want to look cool and casual, so I take the blue jean shorts! Finally, it is cold outside, black tights and long boots are a fashion rule. I look in the mirror. I realize that I wore exactly the same clothing two days ago. That was the day I lost my purse and had an argument with my partner. Not what you would call a successful day. I look in my bureau. My black, grey and brown clothes seem to fall even further down.',
  'I shut the drawer of my bureau and think that success is a state of mind, and decide not to pay attention to London Fashion Week.',
  'Catherine');

const T_COMUNIC = TEXTO('Effective communication',
  'Experts point to the fact that almost 85 percent of our success in life is due to our communication skills. That means that no matter how brilliant, how responsible, or how highly educated someone is, they still have a low possibility of success unless they develop the right communication skills.',
  'The good news is that anyone can develop good communication skills. And it is encouraging to know that even small improvements in your ability to connect with others will have a deep effect on the quality of your life and business.',
  'Do not concentrate too much on what you are going to say next as your conversation partner is talking. Instead, listen to every word they say and reply as properly and smoothly as possible. This shows people that you are interested in what they have to say and you are fully engaged in the moment with them. Also, make sure to ask questions whenever there is something they say that you do not quite understand. This will help correct any mistake in the communication.',
  'Effective communication requires a set of skills including body language, eye contact, engaged listening, managing stress in the moment, the ability to communicate confidently, and to recognize and understand your own emotions and those of the person you are communicating with. It is the connection that helps you solve problems, improve teamwork, and make decisions. It allows you to transfer even negative or difficult messages without creating disagreement.',
  'These abilities will open up new opportunities that would not have been available otherwise. Besides, you will make people feel more confident to express their thoughts. And finally, you will reduce stress, deal with challenging situations, and build better relationships at home and work.');

const T_SONGKRAN = TEXTO('The Songkran Festival',
  'There is a fun traditional water festival every Thai New Year that people want to go to! It is the unusual &ldquo;Songkran Festival&rdquo;, also called the &ldquo;Water Festival&rdquo;. It is the most expensive festival in Thailand, but it is known for the fantastic things people can do at it.',
  'Songkran is in April, and it is open to everyone. For 3-5 days, people from rural areas who are working in the capital go back home with their children for the festival; they spend time with their parents who they have not seen for a long time. People throw water on their heads to have an excellent year, with money and without problems.',
  'However, the festival has changed. Now people make teams to throw water at each other in a match and choose a winner. It is a wonderful reason to travel and enjoy the games. People sell, buy and use water toys, as well as carry cups of different sizes from their kitchens to throw water. Students do not wear their usual school clothes or get up early. During Songkran, it is very important to wear comfortable clothes and use something to protect your eyes from the sun and water.',
  'Tourists from other countries say this is the most special festival they have ever been to because of its new idea of having fun. People of different ages participate; they act like kids, they shout and have a wonderful time.');

const T_FITNESS = TEXTO('Fitness and health',
  '<em>by Dr. Charles Perry</em>',
  'A strong body is often the aim, if not always the result, of working out. However, &ldquo;just because someone looks fit on the outside, it does not necessarily mean they are healthy on the inside,&rdquo; Dr. Michael Smith says. &ldquo;Fitness and health, things that can and should be connected, are often very different things,&rdquo; he mentions.',
  'Nutritionist Anna Jackson explains that &ldquo;fitness is when your body gets used to exercise. If you lift a heavy weight, your body gets stronger so that the next time you lift that weight, it is better able to deal with that routine. Health can be explained as the lack of disease, but it also depends on environmental factors such as pollution or a poor diet.&rdquo;',
  'Taking into account the previous definition of health, I could say it is possible to be healthy but unfit. As exercising does provide a level of protection from many medical conditions such as diabetes and heart disease, being fit increases your chances of being healthy and living a long life; however, being fit does not mean you will not suffer from poor health at some point.',
  'You can be both fit and healthy. Honestly, extremes in exercise or poor diet choices can destroy your health. The charming benefits of running could be all but cancelled out by the health complications brought on by smoking or drinking too much. Everybody has to be very careful and understand that exercising will not give us a perfect health. Too much workout could reduce its benefits, and exercising always requires a well-planned diet to help our body gain the maximum.');

const T_HOTELS = TEXTO('Hotels',
  'Holidays, especially in wonderful and well-known places, can cost visitors a lot of money because hotels are often expensive. However, if you want to spend less money on hotels and have more time for visiting other places on your trip, follow these tips:',
  '1. Instead of spending time visiting each hotel website, go to sites such as Travelticker.com or Kayak.com that will tell you the differences among hotels, so you can get the best one. You will find out about hotels that offer the same experience but at different prices, and you can get special services, like an indoor pool. You do not even need a credit card to get this information.',
  '2. While websites have interesting information, like opinions by guests about hotels, a simple way to get the best option is by contacting the hotel. An e-mail may work, but if you call, you will save time. You can give details of the prices you have found on websites, in case they want to make an offer.',
  '3. Hotels earn more when everyone visits them at the same time; they rent everything! Save some money and enjoy almost empty hotels by traveling in winter, if you do not mind cold weather. Most people do not take this time because of their job or because their children have to study. However, this way you can also save money with flights, which will probably cost less.');

const T_AVIONES = TEXTO('How planes were born',
  'The history of planes started before the 1800s. In the 16th century, Mark Clerck was one of the first men who began thinking of how to fly a machine; he had dreams and made drawings of a helicopter, but he did not actually build it.',
  'The Irwins, two French brothers, made a balloon that flew for more than five miles in 1738. In 1848, John Hartman made a small model plane that was able to make short flights. Then in January of 1890, Samuel Secrest tried to fly a flying machine once, the weather was so bad, so he tried again the next month, but it did not work. Then he flew another plane, but it did not go up, so he stopped the project.',
  'By 1901, Orville and Nathan White prepared their new machine to fly, but it did not work the first times. Finally, on December 17, 1903, they built the Kitty Hawk Flyer, which after trying many times, stayed in the air for 12 seconds. The White Brothers did 1,000 short-distance flights in the desert of North Carolina. As a result, in 1907, air transport began.',
  'In 1905, the first airplane company was made by two pilots from Rome, Gabriel and Charles Oliveri, while the American Brett Graham, and the British Mike Major, were starting the first US airplane company in New York.');

/* ═══════════════════════ Las 65 preguntas ═══════════════════════ */

const BANKS = {
  ing: [
    /* ── 0 a 6 · Golf (original 27 a 33) ─────────────────────────────────── */
    R('LECTURA · Golf', T_GOLF,
      'When a player makes a stroke, he',
      ['gives instructions.', 'takes a hole.', 'hits the ball.'], 2,
      'El primer párrafo define la palabra: cuando el jugador le pega a la bola, a eso se le llama «stroke». Ni dar instrucciones ni tomar un hoyo aparecen como parte de esa definición.',
      'Cuando una pregunta usa una palabra rara del texto, búscala: casi siempre el propio texto la define con un «it is called…».'),

    R('LECTURA · Golf', T_GOLF,
      'Where did people play golf for the first time?',
      ['the Netherlands', 'Scotland', 'the United States'], 0,
      'El texto dice que las primeras formas del golf se jugaron en los Países Bajos «and then in Scotland»: ese «then» ordena los dos lugares y deja a Escocia en segundo lugar. Estados Unidos aparece después, con el primer campo en una finca de Illinois.',
      'Palabras como first, then, later y finally arman la línea de tiempo. Ubícalas antes de responder por fechas u orden.'),

    R('LECTURA · Golf', T_GOLF,
      'In the past, how was the grass in courses kept short?',
      ['People from Illinois did it.', 'A company cut it.', 'Animals ate it.'], 2,
      'Los primeros campos eran praderas y las ovejas se comían el pasto para mantenerlo corto. Illinois se menciona por el primer campo estadounidense, no por el pasto, y ninguna empresa aparece en el texto.',
      'Si la opción menciona algo que sí está en el texto pero en otro renglón, revisa que responda justo lo que se pregunta.'),

    R('LECTURA · Golf', T_GOLF,
      'Which player was famous in the 1800s in England?',
      ['John Taylor', 'Jack Nicklaus', 'Arnold Palmer'], 0,
      'El texto dice que los jugadores británicos como John Taylor fueron considerados los mejores en el siglo XIX. Palmer y Nicklaus aparecen en un renglón distinto, ya en los años sesenta.',
      'Cuando varias opciones son nombres propios, ubica cada uno en el texto y fíjate en la fecha que lo acompaña.'),

    R('LECTURA · Golf', T_GOLF,
      'If golfers want the balls to go further, they need a special',
      ['leather.', 'club.', 'field.'], 1,
      'El tercer párrafo explica que los golfistas eligen entre distintos palos según qué tan lejos quieran mandar la bola: la distancia depende del palo. El cuero fue material de las bolas antiguas y el campo es el lugar donde se juega.',
      'La palabra further apunta a distancia. Busca en el texto la frase que hable de «how far» y ahí está la respuesta.'),

    R('LECTURA · Golf', T_GOLF,
      'New technology has made',
      ['the game better than before.', 'players use leather balls.', 'balls go much further.'], 0,
      'El texto cierra ese párrafo diciendo que la tecnología avanzada del diseño de las bolas modernas «has improved the game a lot»: mejoró el juego. El cuero es del siglo XVII, y que las bolas lleguen más lejos no se afirma en ninguna parte.',
      'Ojo con las opciones que suenan lógicas pero que el texto nunca dice. Solo vale lo que está escrito.',
      'media'),

    R('LECTURA · Golf', T_GOLF,
      'The text says that a golf player wins a game by',
      ['making more holes.', 'hitting the ball fewer times.', 'playing in famous matches.'], 1,
      'La última frase es la clave: gana quien tenga el menor número de golpes en todos los hoyos. Menos golpes es exactamente pegarle menos veces a la bola.',
      'En este deporte gana el número más bajo, no el más alto. Léelo con calma: lowest number es lo contrario de «más».'),

    /* ── 7 a 13 · Evelyn Smith (original 34 a 40) ────────────────────────── */
    R('LECTURA · Evelyn Smith', T_EVELYN,
      'Where did Evelyn live when she was a teenager?',
      ['in Kansas', 'in California', 'in Texas'], 2,
      'Nació en Kansas, pero la familia se mudó a Texas y allí fue donde creció junto a su hermana menor. California solo aparece como el origen de la mamá.',
      'Nacer en un lugar y crecer en otro es una trampa frecuente. Separa «was born» de «grew up».'),

    R('LECTURA · Evelyn Smith', T_EVELYN,
      'Her first contact with planes happened thanks to',
      ['David.', 'Helen.', 'Jim.'], 2,
      'Fue el tío Jim, mecánico, quien la llevó a la feria y quien se subió con ella al avión. David es el papá, dueño de una empresa, y Helen es la hermana pintora.',
      'Cuando el texto presenta varios familiares, anota al lado de cada nombre qué hace: así no los confundes al responder.'),

    R('LECTURA · Evelyn Smith', T_EVELYN,
      'The first time Evelyn got on a plane, she was the',
      ['pilot.', 'passenger.', 'mechanic.'], 1,
      'El texto dice que él pilotaba el avión mientras ella lo observaba: iba de pasajera. Piloto llegó a ser después, y el mecánico era el tío.',
      'Fíjate en quién hace la acción: «he flew it while she watched» deja claro quién manejaba y quién no.'),

    R('LECTURA · Evelyn Smith', T_EVELYN,
      'What occupation did she have while being in a foreign country?',
      ['pharmacist', 'student', 'musician'], 0,
      'El único país extranjero que visita es Canadá, y allí ayudaba a vender medicinas para los enfermos: eso es trabajo de farmacia. Estudiante lo fue en Filadelfia, que queda en su propio país, y la música era lo del primo.',
      'Cuando preguntan por «a foreign country», primero identifica cuál país no es el suyo y solo después busca qué hacía allí.'),

    R('LECTURA · Evelyn Smith', T_EVELYN,
      'Where was she taught to fly a plane?',
      ['in Philadelphia', 'in Toronto', 'in Sacramento'], 2,
      'Aprendió a volar en Sacramento, junto a su primo. En Filadelfia entró a la escuela de medicina y en Toronto vendía medicinas.',
      'Cada ciudad del texto trae asociada una actividad distinta. Empareja ciudad y actividad antes de escoger.'),

    R('LECTURA · Evelyn Smith', T_EVELYN,
      'To get her plane, she borrowed cash from one of her',
      ['parents', 'friends', 'cousins'], 0,
      'El texto dice que compró el avión gracias al dinero que le prestó uno de sus padres. La mejor amiga aparece después, ayudándola a conseguir trabajo, y el primo solo la acompaña en el entrenamiento.',
      'El verbo lend significa prestar. Búscalo en el texto y al lado estará quién prestó el dinero.'),

    R('LECTURA · Evelyn Smith', T_EVELYN,
      "Based on the text, Evelyn's life was full of",
      ['adventure.', 'accidents.', 'art.'], 0,
      'Toda su vida es una sucesión de viajes, mudanzas y riesgos: aprender a volar, comprar un avión y cruzar el océano. Accidentes solo hay uno, y ella lo vio de lejos; el arte es lo de su hermana pintora.',
      'Las preguntas que empiezan con «Based on the text» piden una conclusión general: mira el conjunto, no un solo renglón.'),

    /* ── 14 a 20 · Why I quit social media (original 34 a 40) ────────────── */
    R('LECTURA · Why I quit social media', T_REDES,
      'What is the writer doing in this article?',
      ['convincing people to stop using all Internet apps.',
       'teaching readers how to use different internet apps.',
       'encouraging people to use some social media in a different way.',
       'showing readers how important it was media.'], 0,
      'El autor cuenta que dejó las redes y dedica el texto entero a mostrar lo bien que le fue: más trabajo, invitaciones genuinas, amistades reales, sentirse libre. Ese recuento sirve para convencer a otros de hacer lo mismo. No enseña a usar aplicaciones ni propone usarlas de otra forma, porque él las abandonó por completo.',
      'Para la intención del autor, mira cómo cierra el texto: si termina celebrando su decisión, está invitándote a tomarla.',
      'media'),

    R('LECTURA · Why I quit social media', T_REDES,
      'What can a reader find out from this text?',
      ['what benefits leaving social media provides.',
       'how to avoid using your e-mail account all the time.',
       'when people depend too much on the Internet.',
       'which types of people are more likely to use social media.'], 0,
      'El texto es una lista de ventajas: rinde más, recibe invitaciones sinceras, se relaciona cara a cara y disfruta sin pensar en publicarlo. El correo lo menciona como algo que ahora sí alcanza a responder, no como un problema, y nunca clasifica tipos de personas.',
      'Pregúntate qué se lleva el lector al terminar. Si todo el texto apunta a lo mismo, esa es la respuesta.'),

    R('LECTURA · Why I quit social media', T_REDES,
      'After quitting social media, the writer',
      ['has been working more.', 'still receives many invitations.',
       'has more friends in his social networks.', 'is learning more about his business.'], 0,
      'Dice que ahora saca adelante más trabajo y le alcanza el tiempo para tareas extra. Sobre las invitaciones aclara lo contrario: recibe menos, aunque más sinceras. Y ya no tiene redes, así que no puede tener más amigos en ellas.',
      'Cuando una opción usa palabras del texto pero cambia la cantidad (many, more, less), vuelve a leer esa frase completa.'),

    R('LECTURA · Why I quit social media', T_REDES,
      'What was different when the writer used Facebook, Twitter, and Instagram?',
      ['the number of close friends that he had.', 'the way he cared about his health issues.',
       'the types of relationships he used to have.', 'the time of the day he went out with friends.'], 2,
      'El cambio que describe es de calidad, no de cantidad: antes seguía a todo el mundo sin enterarse de nada; ahora se involucra de verdad, cara a cara y sin mirar el celular. Los amigos que le importan siguen siendo los mismos, así que el número no cambió.',
      'Distingue cambios de cantidad (cuántos) de cambios de tipo (cómo son). Aquí lo que cambió fue el cómo.'),

    R('LECTURA · Why I quit social media', T_REDES,
      'Which of these sentences would the writer most likely say?',
      ['Used social networks more, daily.', 'You must learn how to have more friends online.',
       "I won't go back to Facebook.", "I won't get health issues anymore."], 2,
      'Cierra diciendo que se siente libre y que disfruta algo que no sabía que había perdido: alguien así no piensa volver. Aumentar el uso o buscar más amigos en línea va en contra de todo el texto, y él nunca promete que no tendrá problemas de salud.',
      'Para «what would the writer say», escoge la frase que podría ir al final del texto sin contradecir nada de lo anterior.'),

    R('LECTURA · Why I quit social media', T_REDES,
      "Which of these statements wouldn't the writer say?",
      ['I miss social media a little bit.', 'I would like my friends to read my experience.',
       'I felt much better before, when I had social media.', 'My life is now more real and less virtual.'], 2,
      'Decir que estaba mucho mejor antes contradice de frente el cierre del texto, donde afirma sentirse libre y disfrutar algo que había perdido. Las otras tres encajan con alguien contento con su decisión y orgulloso de contarla.',
      'En las preguntas con wouldn’t o not, la respuesta es la que choca con el texto. Marca la palabra negativa antes de leer las opciones.',
      'media'),

    R('LECTURA · Why I quit social media', T_REDES,
      'According to the text, what is not an advantage of quitting social media?',
      ['Having more time for working and business.', 'Interacting with people face to face.',
       'Enjoying unexpected experiences.', 'Watching more videos and photos of daily activities.'], 3,
      'Ver videos y fotos del día a día es justo lo que hacía antes, y el propio texto lo llama un hábito horrible, casi una enfermedad: es lo que dejó, no lo que ganó. Las otras tres sí aparecen como ventajas.',
      'En las preguntas con «not», tres opciones son correctas y una sobra. Busca la que describa el pasado, no el presente.'),

    /* ── 21 a 25 · My trip to Bogotá (original 11 a 15) ──────────────────── */
    R('LECTURA · My trip to Bogotá', T_BOGOTA,
      "What is the writer's purpose in the article?",
      ['describe Bogotá in a detailed manner.', "talk about Chía's food and people.",
       'tell the reader about his trip to Bogotá and Chía.', 'recommend Colombian museums and food'], 2,
      'El texto es un relato de viaje: llega a Bogotá, visita el museo, se queda con una familia en Chía y termina en un restaurante. Describe momentos de un recorrido, no la ciudad en detalle ni únicamente la comida.',
      'El título suele delatar el propósito. Aquí anuncia un viaje a Bogotá «y otros lugares», y eso es lo que cuenta.'),

    R('LECTURA · My trip to Bogotá', T_BOGOTA,
      'What attitude does the writer show in the text?',
      ['A place is really boring when it rains.', 'Other things are more important than money.',
       'Food must always be well prepared.', 'Museums are the best places in the world.'], 1,
      'Al hablar del oro se pregunta por qué la gente ama tanto el dinero, dice que es apenas un metal y remata preguntando de qué sirve al morir. Eso es poner otras cosas por encima del dinero. La lluvia lo incomoda, pero no dice que el lugar sea aburrido.',
      'La actitud del autor aparece donde opina, no donde narra. Busca las frases con «I think», «I wonder» o preguntas retóricas.'),

    R('LECTURA · My trip to Bogotá', T_BOGOTA,
      "What's the writer's opinion about gold?",
      ['ancient cultures used it a lot because of their customs.', 'it will be very valuable when you die.',
       'you can wear it on your clothes all the time.', 'people should not consider it important.'], 3,
      'Su opinión es que el oro no tiene nada de especial, que es solo un metal: eso es decir que no debería dársele tanta importancia. Que los antiguos lo usaran en ritos es un dato del texto, no una opinión suya.',
      'Cuando preguntan por la opinión, descarta todo lo que sea un hecho contado, aunque esté en el texto.'),

    R('LECTURA · My trip to Bogotá', T_BOGOTA,
      "What does the writer think about the family's houses in Chía?",
      ['They were made in an unorganized but nice way.', 'They were constructed with no order at all.',
       'Everybody likes to live near their family in Chía.', "Everybody lives next to each other because there's no space."], 0,
      'Dice que las casas son viejas y mal diseñadas, hechas por ellos mismos en estilos distintos, «pero todas hermosas y asombrosas». Ese «pero» junta las dos ideas: desordenadas y a la vez bonitas. Que no haya orden en absoluto se queda con la mitad de la frase.',
      'Cuando una frase tiene «but», la idea completa está en los dos lados. Una opción que solo recoge uno se queda corta.'),

    R('LECTURA · My trip to Bogotá', T_BOGOTA,
      "Which of these ideas shows the writer's opinion?",
      ['Lots of people in Colombia need gold to build bigger and more modern houses.',
       'Colombian people are very kind and like being together with their family.',
       'Most restaurants and houses in Colombia serve very good, cheap food.',
       'Colombian museums are interesting because they keep gold used in the past.'], 1,
      'Una familia que acaba de conocer lo invita a quedarse, y él dice que nunca en su vida había visto un sentido de familia tan bonito: eso es exactamente gente amable a la que le gusta estar junta. El texto nunca habla de precios ni dice que se necesite oro para construir.',
      'Antes de escoger, revisa que cada palabra de la opción tenga respaldo. Una sola palabra inventada (como «cheap») la descarta.'),

    /* ── 26 a 32 · The Hamburger (original 11 a 17) ──────────────────────── */
    R('LECTURA · The Hamburger', T_HAMBUR,
      'A different type of bread was first used in a hamburger in',
      ['Ohio.', 'Texas.', 'Connecticut.'], 2,
      'Tres de los posibles inventores usaron «soft bread»; el único que cambió el pan fue Louis Lassen, de Connecticut, que sirvió la carne entre dos tajadas de tostada. Ohio es de Menches y Texas de Fletcher David, ambos con pan blando.',
      'Cuando varias descripciones se parecen, subraya la palabra que cambia en una sola de ellas: ahí está la diferencia.'),

    R('LECTURA · The Hamburger', T_HAMBUR,
      'The hamburger became known by people from all over the world in',
      ['1885.', '1900.', '1904.'], 2,
      'En 1904 se vendió en una exposición mundial y fue allí donde recibió el nombre de «hamburger». Una exposición mundial es justamente donde llega gente de todo el planeta. Las otras dos fechas corresponden a ventas locales.',
      'La expresión «all over the world» pide un evento internacional. Búscalo en el texto: aquí es la world exhibition.'),

    R('LECTURA · The Hamburger', T_HAMBUR,
      'Who made a Hamburger, with meat prepared in a special way?',
      ['Charlie Nagreen', 'Louis Lassen', 'Fletcher David'], 0,
      'Nagreen vendía albóndigas entre dos panes: convertir la carne en albóndigas es prepararla de una forma particular. Lassen usó trozos de carne sin más y Fletcher David un sándwich de carne corriente.',
      'Compara cómo describe el texto la carne de cada uno: pieces y meat sandwich son formas simples; meatballs implica preparación.'),

    R('LECTURA · The Hamburger', T_HAMBUR,
      'Hamburgers in Germany were different from the American ones in that they',
      ['were very popular.', 'had more meat.', 'were known later.'], 0,
      'En Hamburgo la carne con pan «was more common» y «was a usual dish»: era el plato de todos los días, muy popular. El texto nunca compara cantidades de carne, y en Alemania se conoció antes, no después.',
      'Popular equivale a common o usual. Si no encuentras la palabra exacta, busca un sinónimo en el texto.',
      'media'),

    R('LECTURA · The Hamburger', T_HAMBUR,
      'The hamburgers brought from Germany to the US were',
      ['hard to find.', 'interesting to make.', 'easy to eat.'], 2,
      'El texto dice que cualquiera podía prepararla y que se comía de pie o caminando: eso es comida fácil de comer. Que fuera un plato usual descarta que fuera difícil de conseguir.',
      'Poder comer algo de pie o caminando es la definición práctica de «easy to eat». Traduce la escena, no solo las palabras.'),

    R('LECTURA · The Hamburger', T_HAMBUR,
      'At the beginning of the last century, some people ate hamburgers for',
      ['breakfast.', 'lunch.', 'dinner.'], 1,
      'A comienzos del siglo XX era comida de obreros y se servía en restaurantes cerca de las fábricas «at midday»: al mediodía, es decir, el almuerzo.',
      'Midday es mediodía. Ubica la palabra de la hora en el texto y tradúcela a la comida que corresponde.'),

    R('LECTURA · The Hamburger', T_HAMBUR,
      'What changed the way people thought of the hamburger in 1920?',
      ['a new path.', 'new job.', 'a new machine.'], 2,
      'Lo que cambió su reputación fue la llegada del automóvil al mercado y el deseo de comer en la carretera. El automóvil es una máquina nueva; el texto no menciona caminos nuevos ni empleos nuevos.',
      'Si la opción no usa la palabra del texto, tradúcela a una categoría: un automóvil es, ante todo, una máquina.'),

    /* ── 33 a 37 · What to wear? (original 18 a 22) ──────────────────────── */
    R('LECTURA · What to wear?', T_ROPA,
      'What is the writer trying to do in this text?',
      ['advertise the best London Fashion Week', 'describe the routine she follows while getting dressed',
       'advise about the right colors to wear', 'show that fashion is unnecessary for success'], 3,
      'Todo el texto lleva al cierre: el éxito es un estado mental y decide no prestarle atención a la semana de la moda. La rutina de vestirse es el ejemplo con el que llega a esa conclusión, no el tema.',
      'La intención suele estar en el último párrafo. Léelo primero cuando pregunten «what is the writer trying to do».'),

    R('LECTURA · What to wear?', T_ROPA,
      'In this letter, the reader can find',
      ['the right clothing for very cold days.', 'what will be in fashion each season.',
       'who the model of the moment for magazines is.', 'the time when London Fashion Week took place.'], 3,
      'La primera línea dice que es febrero y que la semana de la moda acaba de terminar: eso sí es un dato concreto que el lector se lleva. Del modelo del momento y de las tendencias solo dice que las revistas hablan de eso, pero nunca cuenta cuáles son.',
      'Mencionar un tema no es informarlo. Pregúntate qué dato podrías anotar después de leer: ese está de verdad en el texto.'),

    R('LECTURA · What to wear?', T_ROPA,
      'At the beginning, she thought that if she dressed for success',
      ['she would be able to understand her troubles.', 'she could be a model in fashion shows.',
       'her workmates would admire her.', 'her picture could appear on magazines.'], 2,
      'Al comienzo se imagina que los colegas estarán orgullosos de ella y que conseguirá un mejor puesto: eso es la admiración de sus compañeros de trabajo. Sus problemas iban a desaparecer, no a entenderse, y nunca pensó en ser modelo.',
      'Colleagues y workmates significan lo mismo. Cuando una opción cambia la palabra, comprueba que no cambie la idea.'),

    R('LECTURA · What to wear?', T_ROPA,
      "The writer's opinion changed because",
      ['nothing good happened when she wore the same clothing.', "she realized that she couldn't feel or look better.",
       'she had only dark color clothing to wear.', 'her clothes looked really miserable.'], 0,
      'El giro llega frente al espejo: se da cuenta de que llevaba la misma ropa que dos días atrás, el día en que perdió el bolso y peleó con su pareja. La misma ropa no le trajo un buen día, y por eso deja de creer en la fórmula.',
      'Busca el momento exacto en que el texto cambia de dirección. Aquí es «I realize that I wore exactly the same clothing».'),

    R('LECTURA · What to wear?', T_ROPA,
      'Catherine could add to her letter the following:',
      ['You do not have to worry as long as you have shorts and tights to put on because they are basic pieces of clothing.',
       'If you want to be satisfied with life, you should get dressed differently from the models of the London Fashion Week!',
       'It does not matter what you wear; what is important is how you feel and the thoughts you have about yourself!',
       'Do not wear dark colors because you can get depressed. Buy colorful clothing, which makes you feel better.'], 2,
      'Su conclusión es que el éxito es un estado mental, y esa frase la repite en otras palabras: no importa qué te pongas, importa cómo te sientes. Las otras tres siguen dando consejos de ropa, que es justo lo que ella deja de hacer.',
      'Para «could add», busca la opción que continúe la conclusión del autor, no la que retome el tema del principio.'),

    /* ── 38 a 42 · Effective communication (original 31 a 35) ───────────── */
    R('LECTURA · Effective communication', T_COMUNIC,
      'What is the author trying to do in this text?',
      ['revise how successful people develop effective communication.',
       'help people become successful with different communication skills.',
       'suggest how to develop better relationships with communication skills.',
       'point at emotions that help improve effective communication.'], 1,
      'El texto abre diciendo que el 85 % del éxito depende de saber comunicarse, sigue con que cualquiera puede desarrollar esas habilidades y termina enumerando lo que se gana. Es una guía para que el lector logre el éxito, no una revisión de lo que hacen otros.',
      'Fíjate a quién le habla el texto. Si te da instrucciones a ti, la intención es ayudarte, no describir a terceros.',
      'media'),

    R('LECTURA · Effective communication', T_COMUNIC,
      'In this article you learn',
      ['to behave when you are listening to someone.', 'how smart people can communicate effectively.',
       'facts about the kind of people who are better at communicating.',
       'to control the way you reply when you are explaining your point of view.'], 0,
      'El tercer párrafo es una lista de instrucciones para el momento de escuchar: no pienses en lo que vas a decir, escucha cada palabra, responde con naturalidad y pregunta cuando no entiendas. Eso es cómo comportarse al escuchar.',
      'Cuando un párrafo entero está en imperativo (don’t, listen, make sure), ahí está lo que el texto te enseña a hacer.'),

    R('LECTURA · Effective communication', T_COMUNIC,
      "What would be one advantage of taking into account others' opinions?",
      ["It's possible to understand people and their mistakes.",
       'You can recommend helpful options to individual benefits.',
       "It's possible to find out information from people's body language.",
       'You can build a broader contact with your colleagues.'], 3,
      'El texto dice que esa conexión mejora el trabajo en equipo y ayuda a construir mejores relaciones en la casa y en el trabajo: eso es ampliar el contacto con quienes te rodean. La palabra «mistake» aparece, pero referida a errores de la comunicación, no a errores de las personas.',
      'Cuidado con las opciones que repiten una palabra del texto usada en otro sentido. Verifica la frase completa donde aparece.',
      'media'),

    R('LECTURA · Effective communication', T_COMUNIC,
      'When people feel they are heard, they are more likely to',
      ['be certain of bringing problems to light.', 'think more about what they have to say.',
       'lead the conversation and listen to the other.', 'deal with new challenges to avoid disagreement.'], 0,
      'El último párrafo dice que harás que la gente se sienta más segura para expresar lo que piensa: quien se siente escuchado se anima a sacar a la luz lo que le preocupa. Pensar en lo que uno va a decir es justo lo que el texto pide evitar.',
      'Relaciona la pregunta con el efecto que el texto atribuye a escuchar bien, no con lo que hace quien escucha.',
      'media'),

    R('LECTURA · Effective communication', T_COMUNIC,
      'A conference announcement on effective communication would be:',
      ['«Personal development conference» — It will provide opportunities to achieve communication skills. Audience: team leaders.',
       '«Gain an active role when communicating» — You will reach a high performance in your day-to-day communication. Audience: general public.',
       '«Manage your body language» — You will express your thoughts and complaints positively. Audience: experts.',
       '«Tips to succeed in your job» — You will receive support in teamwork management. Audience: professionals.'], 1,
      'El texto insiste en que cualquiera puede desarrollar estas habilidades y habla de la comunicación del día a día, en la casa y en el trabajo. El anuncio dirigido al público general y a la comunicación cotidiana es el único que respeta las dos ideas. Los otros tres limitan el público a líderes, expertos o profesionales.',
      'En las preguntas con avisos, compara el público destinatario: el texto ya te dijo para quién es.'),

    /* ── 43 a 47 · Songkran (original 16 a 20) ──────────────────────────── */
    R('LECTURA · The Songkran Festival', T_SONGKRAN,
      'One of the activities people do in the festival is to',
      ['visit their families.', 'play without their kids.', 'get a new job.'], 0,
      'Quienes trabajan en la capital vuelven a su pueblo con sus hijos y pasan tiempo con sus padres, a quienes no veían hace mucho: eso es visitar a la familia. Van con los niños, no sin ellos.',
      'Ojo con las opciones que invierten un detalle: «with their children» no es lo mismo que «without their kids».'),

    R('LECTURA · The Songkran Festival', T_SONGKRAN,
      'The festival is special because',
      ["It's only for workers.", 'It takes lots of time.', "It's for good luck."], 2,
      'La gente se echa agua en la cabeza para tener un año excelente, con dinero y sin problemas: eso es pedir buena suerte. El texto aclara además que está abierto a todo el mundo, no solo a los trabajadores.',
      'Cuando una costumbre busca un buen año o alejar problemas, en inglés eso se resume como good luck.'),

    R('LECTURA · The Songkran Festival', T_SONGKRAN,
      'The festival has become',
      ['a famous market.', 'a place to cook.', 'a fun competition.'], 2,
      'El texto dice que ahora la gente arma equipos para lanzarse agua en un partido y elegir un ganador: equipos, partido y ganador describen una competencia. Que vendan juguetes de agua no lo convierte en un mercado.',
      'La palabra «become» pide un cambio. Busca el párrafo que empiece con «However, the festival has changed».'),

    R('LECTURA · The Songkran Festival', T_SONGKRAN,
      'What should people bring from home?',
      ['uniforms', 'bowls', 'puzzles'], 1,
      'El texto dice que llevan vasos de distintos tamaños desde sus cocinas para lanzar agua: son recipientes de cocina. Uniformes no, porque justo aclara que los estudiantes no usan su ropa habitual del colegio.',
      'Cups y bowls son recipientes de cocina. Cuando no aparezca la palabra exacta, busca la de la misma familia.'),

    R('LECTURA · The Songkran Festival', T_SONGKRAN,
      'What is needed for the festival?',
      ['a bathing suit', 'an umbrella', 'a pair of sunglasses'], 2,
      'Pide usar algo que proteja los ojos del sol y del agua, y eso son las gafas. El paraguas sobra en un festival donde el punto es mojarse, y el vestido de baño no se menciona.',
      'Si el texto describe una función («protect your eyes»), busca el objeto que la cumple, aunque no lo nombre.'),

    /* ── 48 a 52 · Fitness and health (original 21 a 25) ────────────────── */
    R('LECTURA · Fitness and health', T_FITNESS,
      'What is the purpose of the writer in this article?',
      ['to describe a suitable exercise routine to do a good workout.',
       'to provide several recipes to be used to improve our meals.',
       'to inform about the awful effects of certain dangerous exercise routines.',
       "to explain that being in good shape doesn't mean you won't need medicine."], 3,
      'La idea que el autor repite es que estar en forma no garantiza estar sano: se puede ser fuerte por fuera y estar enfermo por dentro, y el ejercicio no da una salud perfecta. Nunca propone una rutina ni da recetas.',
      'Si una misma idea aparece en tres párrafos distintos, esa es la intención del autor.'),

    R('LECTURA · Fitness and health', T_FITNESS,
      'What can the reader discover in the article?',
      ['Too much training may produce trouble in your body.', 'Working out prevents you from being healthy.',
       'how to avoid body pains during an exercise program.', 'when to take advantage of a good training plan.'], 0,
      'El cierre dice que los extremos en el ejercicio pueden destruir la salud y que entrenar demasiado reduce los beneficios. El texto no dice que hacer ejercicio impida estar sano: al contrario, afirma que aumenta las probabilidades de estarlo.',
      'Distingue «demasiado ejercicio hace daño» de «el ejercicio hace daño». La segunda es una exageración que el texto no sostiene.'),

    R('LECTURA · Fitness and health', T_FITNESS,
      "Based on Dr. Smith's words in paragraph 1, we can imagine that",
      ['the possibility to achieve a gorgeous body is exciting.', 'the solution to curing illnesses is being strong.',
       'a healthy shape might make us good-looking people.', "a person who doesn't look fit can also be healthy."], 3,
      'Smith dice que verse en forma por fuera no garantiza estar sano por dentro: apariencia y salud van por caminos distintos. Si eso es cierto, también funciona al revés, y alguien que no se ve atlético puede estar perfectamente sano.',
      'Cuando el texto separa dos cosas que solemos unir, la conclusión suele ser que una puede darse sin la otra.'),

    R('LECTURA · Fitness and health', T_FITNESS,
      'What does Ms. Jackson communicate about fitness?',
      ['Exercise performance improves as you make it a habit.', 'The more weight you lift the fewer illnesses you will get.',
       'A complicated environment increases your stress.', 'Proper eating is the key to become stronger.'], 0,
      'Jackson define el estado físico como la costumbre del cuerpo al ejercicio: si levantas un peso, la próxima vez lo manejas mejor. Eso es mejorar por repetición, es decir, por hábito. Lo de la dieta y el ambiente lo menciona al hablar de salud, no de fitness.',
      'Cuando la pregunta nombra a una persona, responde solo con lo que dice esa persona entre comillas.'),

    R('LECTURA · Fitness and health', T_FITNESS,
      "Which sign in a gym agrees with Dr. Perry's ideas?",
      ['«Heroes eat more to be as strong as a wooden wall and exercise more to be healthier. Go for it!»',
       '«Remember to support your exercise routine with the perfect diet for you. Visit our nutritionist regularly.»',
       '«Get rid of stress with our new routine. Ask our trainers how you can benefit from it now.»',
       '«Being unfit makes you suffer. Thin people are likely to look unhealthy. Work out hard.»'], 1,
      'La última frase del texto dice que el ejercicio siempre necesita una dieta bien planeada para que el cuerpo aproveche al máximo: ese aviso dice exactamente eso. Los que invitan a comer más y entrenar más chocan con la advertencia sobre los extremos.',
      'Compara cada aviso con la última frase del texto: los cierres suelen condensar la tesis del autor.'),

    /* ── 53 a 57 · Hotels (original 36 a 40) ─────────────────────────────── */
    R('LECTURA · Hotels', T_HOTELS,
      "If you follow the writer's tips, you could",
      ['go to more touristic areas.', 'pay more money for hotels.', 'have more vacations.'], 0,
      'La introducción anuncia el objetivo de los consejos: gastar menos en hoteles y tener más tiempo para visitar otros lugares del viaje. Más lugares visitados es más zonas turísticas; pagar más es justo lo contrario de lo que promete.',
      'Los consejos siempre anuncian su propósito antes de la lista. Lee esa frase inicial: ahí está la respuesta.'),

    R('LECTURA · Hotels', T_HOTELS,
      'Internet sites like Kayak.com are different from hotel websites because they',
      ['let you book hotels faster.', 'show you various hotels.', 'choose your hotel.'], 1,
      'El texto los propone en vez de entrar a la página de cada hotel, porque muestran las diferencias entre varios de una sola vez. Comparan, pero la elección sigue siendo tuya: dicen «so you can get the best one».',
      'Comparar no es decidir. Si el texto dice que tú escoges, descarta la opción donde escoge la página.'),

    R('LECTURA · Hotels', T_HOTELS,
      'Web pages like TravelTicker.com help you',
      ['pay online.', 'get a credit card.', 'learn about better services.'], 2,
      'El texto dice que en esas páginas te enteras de hoteles con la misma experiencia a distinto precio y de servicios especiales, como una piscina cubierta. Además aclara que ni siquiera necesitas tarjeta de crédito para consultarlas.',
      'Cuando una opción menciona algo que el texto niega expresamente (aquí, la tarjeta), descártala de inmediato.'),

    R('LECTURA · Hotels', T_HOTELS,
      'What is the most important reason to contact the hotel?',
      ["to know visitor's experiences", 'to receive more e-mails', 'to discuss prices'], 2,
      'El motivo que da el texto para llamar es dar los precios que encontraste en las páginas, por si el hotel quiere hacerte una oferta: eso es negociar el precio. Las opiniones de los huéspedes se consiguen en las páginas web, no llamando.',
      'Separa lo que se consigue en internet de lo que se consigue llamando: el texto asigna una función distinta a cada canal.'),

    R('LECTURA · Hotels', T_HOTELS,
      'Tourists might pay less when',
      ['it is winter.', 'there are many people.', "the weather is hot."], 0,
      'El tercer consejo es viajar en invierno para encontrar hoteles casi vacíos y ahorrar también en vuelos. El texto explica que los hoteles ganan más cuando todos van al mismo tiempo, así que mucha gente significa precios altos.',
      'Si el texto dice que los hoteles ganan más con lleno total, entonces el ahorro está donde hay menos gente.'),

    /* ── 58 a 64 · How planes were born (original 24 a 30) ───────────────── */
    R('LECTURA · How planes were born', T_AVIONES,
      "When did the first plane fly after Clerck's dream?",
      ['in 1890', 'in 1738', 'in 1848'], 2,
      'En 1848 John Hartman hizo un modelo de avión capaz de hacer vuelos cortos: es el primer avión que vuela en el relato. Lo de 1738 fue un globo, no un avión, y en 1890 la máquina de Secrest no llegó a despegar.',
      'Balloon, plane y flying machine no son lo mismo. Si la pregunta dice «plane», descarta las otras dos.'),

    R('LECTURA · How planes were born', T_AVIONES,
      'Who made a machine that never could fly?',
      ['John Hartman', 'Samuel Secrest', 'The Irwins'], 1,
      'Secrest lo intentó dos veces sin resultado y con otro avión tampoco logró levantar vuelo, así que abandonó el proyecto. Hartman sí voló su modelo y los Irwin volaron su globo más de cinco millas.',
      'Rastrea el resultado de cada intento: «it didn’t work» y «it didn’t go up» son las marcas del fracaso.'),

    R('LECTURA · How planes were born', T_AVIONES,
      "Why was Secrest's project finished?",
      ['flights took little time', 'flights were delayed', 'flights failed'], 2,
      'El texto encadena los fracasos: no funcionó, el avión no subió y por eso detuvo el proyecto. Hubo una demora por el mal clima, pero lo que acabó con el proyecto fueron los intentos fallidos.',
      'Cuando hay varias causas seguidas, la que cierra la frase con «so he stopped» es la que responde al «why».'),

    R('LECTURA · How planes were born', T_AVIONES,
      'Orville and Nathan were important because they',
      ['started the air age.', 'worked together.', 'knew the desert.'], 0,
      'Después de sus vuelos, el texto concluye que en 1907 comenzó el transporte aéreo: esa consecuencia es lo que los vuelve importantes. Que trabajaran juntos o conocieran el desierto son detalles, no la razón.',
      'La expresión «As a result» señala la consecuencia. Ahí suele estar la importancia de un personaje.'),

    R('LECTURA · How planes were born', T_AVIONES,
      'Passengers were able to travel by air since',
      ['1900.', '1903.', '1907.'], 2,
      'El transporte aéreo, que es el que lleva pasajeros, empezó en 1907. En 1903 lo que ocurrió fue el vuelo del Kitty Hawk Flyer, que duró doce segundos y no transportaba a nadie.',
      'Distingue el primer vuelo del inicio del transporte: son dos fechas distintas y las preguntas suelen jugar con eso.'),

    R('LECTURA · How planes were born', T_AVIONES,
      'The Kitty Hawk Flyer flew',
      ['at once.', 'for a short time.', 'many kilometers.'], 1,
      'Se mantuvo en el aire doce segundos, que es muy poco tiempo. Además el texto aclara que lo lograron «after trying many times», así que no fue a la primera, y los mil vuelos posteriores fueron de corta distancia.',
      'Doce segundos es un dato. Tradúcelo a la idea que pide la opción: eso es «a short time».'),

    R('LECTURA · How planes were born', T_AVIONES,
      'Who was born in The United States?',
      ['Brett', 'Gabriel', 'Mike'], 0,
      'El texto lo presenta como «the American Brett Graham». Gabriel Oliveri es uno de los dos pilotos de Roma y Mike Major aparece como británico.',
      'Las nacionalidades vienen pegadas al nombre: American, British, French. Búscalas antes de escoger.'),
  ],
};

/* La ruta: once cuestionarios, uno por texto, en orden de dificultad creciente
 * (primero los de tres opciones, después los de cuatro). */
const CUESTIONARIOS = {
  ing: [
    {
      tema: 'Parte 5 · Comprensión de lectura',
      items: [
        { id: 'ing-12', titulo: 'Golf',                        qs: [0, 1, 2, 3, 4, 5, 6],       tipo: 'Lectura' },
        { id: 'ing-13', titulo: 'Evelyn Smith, la piloto',     qs: [7, 8, 9, 10, 11, 12, 13],   tipo: 'Lectura' },
        { id: 'ing-14', titulo: 'The Hamburger',               qs: [26, 27, 28, 29, 30, 31, 32], tipo: 'Lectura' },
        { id: 'ing-15', titulo: 'The Songkran Festival',       qs: [43, 44, 45, 46, 47],        tipo: 'Lectura' },
        { id: 'ing-16', titulo: 'Hotels: viajar gastando menos', qs: [53, 54, 55, 56, 57],      tipo: 'Lectura' },
        { id: 'ing-17', titulo: 'How planes were born',        qs: [58, 59, 60, 61, 62, 63, 64], tipo: 'Lectura' },
        { id: 'ing-18', titulo: 'My trip to Bogotá',           qs: [21, 22, 23, 24, 25],        tipo: 'Lectura' },
        { id: 'ing-19', titulo: 'What to wear?',               qs: [33, 34, 35, 36, 37],        tipo: 'Lectura' },
        { id: 'ing-20', titulo: 'Fitness and health',          qs: [48, 49, 50, 51, 52],        tipo: 'Lectura' },
        { id: 'ing-21', titulo: 'Effective communication',     qs: [38, 39, 40, 41, 42],        tipo: 'Lectura' },
        { id: 'ing-22', titulo: 'Why I quit social media',     qs: [14, 15, 16, 17, 18, 19, 20], tipo: 'Lectura' },
      ],
    },
  ],
};
