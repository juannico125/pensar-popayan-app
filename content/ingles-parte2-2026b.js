/* Inglés · Parte 2 — «Empareja la palabra con la descripción» · lote 2026-B
 *
 * Fuente: el cuadernillo «Formulario inglés · parte 2» entregado por el
 * instituto. Trae cinco bloques temáticos de cinco preguntas cada uno
 * (Free time · The Home · Sports · Food · Fruits): 25 preguntas en total.
 *
 * En el papel, cada bloque presenta ocho palabras (A-H) y cinco descripciones;
 * el «Ejemplo 0» consume una palabra y sobran dos. Aquí cada descripción se
 * carga como una pregunta independiente con las ocho palabras como opciones,
 * porque la plataforma baraja las opciones por estudiante y no puede tachar
 * una palabra ya usada. El ejercicio sigue midiendo lo mismo: reconocer el
 * vocabulario a partir de su definición.
 *
 * El cuadernillo NO trae hoja de respuestas: solo vienen marcados los
 * «Ejemplo 0». Las claves las determinó el modelo, y por eso se cargan con
 * `clave_origen = 'modelo'`. En este archivo las 25 quedan en confianza alta:
 * cada descripción admite una sola palabra de la lista, y al resolver el
 * bloque completo sobran exactamente las dos palabras que anuncia el
 * enunciado, lo que confirma el emparejamiento.
 *
 * Erratas del original corregidas en silencio (la lista va al cliente):
 *   «below thr ground floor» → below the ground floor
 *   «a person´s photo» → a person's photo  ·  «you don´t eat» → you don't eat
 *
 * Las explicaciones NUNCA nombran una letra: las opciones se barajan por
 * estudiante, así que «la opción B» sería falsa para media clase.
 */

const V = (opts, text, correct, exp, tip) => ({
  comp: 'Parte 2 · Vocabulario en contexto',
  ctxLabel: null, ctxClass: null, context: null,
  text, opts, correct, exp, tip,
  confianza: 'alta',
});

/* Las ocho palabras de cada bloque, en el orden A-H del cuadernillo. */
const OCIO    = ['boat', 'fish', 'drive', 'island', 'ride', 'roller skates', 'swimming pool', 'tennis'];
const CASA    = ['Basement', 'Chair', 'Picture', 'Sofa', 'Stairs', 'Table', 'Towel', 'Radio'];
const DEPORTE = ['baseball', 'basketball', 'boats', 'cars', 'field', 'pool', 'skates', 'tennis'];
const COMIDA  = ['candy', 'carrot', 'chicken', 'fish', 'milk', 'soup', 'tea', 'apple'];
const FRUTAS  = ['Banana', 'Coconut', 'Grape', 'Lime', 'Mango', 'Pear', 'Pineapple', 'Watermelon'];

const BANKS = {
  ing: [
    /* ── 0 a 4 · Free time ───────────────────────────────────────────────── */
    V(OCIO, 'Children do this on bikes and skateboards.', 4,
      'Montar es lo que se hace sobre una bicicleta o una patineta: en inglés, ride a bike. Manejar es para carros, y las demás palabras nombran objetos o lugares, no la acción.',
      'Cuando la descripción empieza con «do this», busca un verbo entre las opciones, no un objeto.'),

    V(OCIO, 'Tourists travel to this sunny place to enjoy the ocean waves.', 3,
      'Es un lugar soleado rodeado de mar, con olas: una isla. El bote sirve para llegar, pero no es el lugar; la piscina no tiene olas de océano.',
      'La palabra place te avisa de que la respuesta es un lugar. Descarta de entrada los verbos y los objetos.'),

    V(OCIO, 'You do this in a lake or river to catch something to eat.', 1,
      'Sacar del agua algo para comer es pescar. Aquí «fish» funciona como verbo, no como el animal: la descripción pide una acción que se hace en un lago o un río.',
      'Varias palabras del inglés son verbo y sustantivo a la vez. Fíjate en si la frase pide una acción o una cosa.'),

    V(OCIO, 'On hot days, you jump into it to get cooler.', 6,
      'Uno se lanza al agua para refrescarse en los días de calor: es la piscina. La isla es un lugar al que se viaja, no algo a lo que uno se tire.',
      'El pronombre it apunta a una sola cosa concreta; si dijera them, la respuesta sería un plural.'),

    V(OCIO, 'You put them on to move quickly on a road.', 5,
      'Se los pone uno en los pies para desplazarse rápido: son los patines. El plural them ya descarta la isla, la piscina y el bote, que van en singular.',
      'La estructura «put them on» significa ponerse algo encima: ropa, zapatos o, como aquí, patines.'),

    /* ── 5 a 9 · The Home ────────────────────────────────────────────────── */
    V(CASA, 'This place is below the ground floor of your house.', 0,
      'El espacio que queda debajo del primer piso de una casa es el sótano. Las escaleras comunican los pisos, pero no son un lugar debajo de ellos.',
      'Below significa debajo. Ubica primero la posición que describe la frase y después busca el espacio que le corresponde.'),

    V(CASA, "This is a person's photo you have in your bedroom.", 2,
      'Una foto de alguien que uno tiene en el cuarto es un retrato o cuadro. El radio y la mesa están en la casa, pero ninguno es una imagen.',
      'La palabra photo te dice que la respuesta es algo que se mira, no algo que se usa.'),

    V(CASA, 'Two or three people can sit on it.', 3,
      'Un mueble donde caben dos o tres personas sentadas es el sofá. La silla también sirve para sentarse, pero solo alcanza para una.',
      'Fíjate en el número: «two or three people» descarta el mueble hecho para una sola persona.'),

    V(CASA, 'You dry your body with it.', 6,
      'Lo que se usa para secarse el cuerpo es la toalla. Ninguna de las otras palabras nombra algo de tela que absorba el agua.',
      'El verbo dry es secar. Piensa qué objeto de la casa cumple justo esa función.'),

    V(CASA, 'You go up or down on them at home.', 4,
      'Subir y bajar dentro de la casa se hace por las escaleras. El plural them encaja con ellas, que se cuentan por escalones; el sótano es un lugar al que se llega, no por donde se sube.',
      'Up or down describe un movimiento vertical: en una casa eso solo lo permite un elemento.'),

    /* ── 10 a 14 · Sports ────────────────────────────────────────────────── */
    V(DEPORTE, 'You put them on to move on the ground.', 6,
      'Son los patines: se los pone uno en los pies para desplazarse por el suelo. Los botes van en el agua y los carros no se los pone nadie.',
      'La misma pista de siempre: «put them on» significa ponerse algo, así que la respuesta se lleva puesta.'),

    V(DEPORTE, 'In this game, two people hit a small ball.', 7,
      'Dos personas golpeando una pelota pequeña describe el tenis. El béisbol también usa pelota pequeña, pero se juega entre dos equipos completos, no entre dos personas.',
      'Cuenta cuántos jugadores menciona la frase: ese dato suele separar un deporte de otro parecido.'),

    V(DEPORTE, 'This is the best place to go for a swim.', 5,
      'El mejor sitio para nadar es la piscina. El campo es para deportes en tierra y los botes flotan sobre el agua, pero no se nada en ellos.',
      'Swim es nadar. Entre las opciones busca el único lugar hecho para el agua.'),

    V(DEPORTE, 'You bounce and throw a big ball with your hands.', 1,
      'Rebotar y lanzar un balón grande con las manos es baloncesto. En el béisbol la pelota es pequeña y se golpea con un bate, no se rebota.',
      'Dos datos definen el deporte: el tamaño del balón y con qué parte del cuerpo se juega.'),

    V(DEPORTE, 'People drive them in a great sport.', 3,
      'El verbo drive es conducir, y lo que se conduce en un deporte son los carros. Los botes se navegan y los patines se llevan puestos.',
      'Cada vehículo tiene su verbo en inglés: drive para carros, sail para botes, ride para bicicletas.'),

    /* ── 15 a 19 · Food ──────────────────────────────────────────────────── */
    V(COMIDA, 'Rabbits like this long orange vegetable.', 1,
      'La verdura larga y naranja que comen los conejos es la zanahoria. Es además la única verdura de la lista: las demás son carnes, líquidos o dulces.',
      'La palabra vegetable ya reduce la lista. Después usa el color y la forma para escoger.'),

    V(COMIDA, 'You get this when you cook vegetables and meat in water.', 5,
      'Cocinar verduras y carne en agua da como resultado una sopa. El té también se prepara con agua, pero no lleva carne ni verduras.',
      'Fíjate en los ingredientes que enumera la frase: el plato tiene que contenerlos todos.'),

    V(COMIDA, 'This comes from cows and you can make cheese with it.', 4,
      'Lo que dan las vacas y sirve para hacer queso es la leche. La carne también viene de la vaca, pero con carne no se hace queso.',
      'Cuando la frase da dos pistas (de dónde viene y para qué sirve), la respuesta debe cumplir las dos.'),

    V(COMIDA, 'Children love this sweet food.', 0,
      'La comida dulce que encanta a los niños son los dulces. Ninguna de las otras opciones es un alimento azucarado.',
      'Sweet es dulce. Recorre la lista y quédate con lo único que sea azucarado.'),

    V(COMIDA, 'We eat this animal that lives in rivers or in the sea.', 3,
      'El animal que vive en ríos y en el mar y se come es el pescado. El pollo también es un animal que se come, pero vive en tierra.',
      'Aquí «fish» es el animal, no la acción de pescar. El contexto de cada bloque cambia el sentido de la palabra.'),

    /* ── 20 a 24 · Fruits ────────────────────────────────────────────────── */
    V(FRUTAS, 'When you open it, you find something to drink inside.', 1,
      'La fruta que al abrirla trae líquido adentro es el coco: se bebe su agua. Las demás frutas de la lista se comen, no se beben.',
      'La frase dice «to drink»: busca la fruta que guarda líquido, no la que tiene jugo al exprimirla.'),

    V(FRUTAS, 'This fruit is long, and monkeys like it a lot.', 0,
      'Alargada y asociada a los monos: es el banano. Ninguna otra fruta de la lista tiene esa forma ni esa fama.',
      'Cuando la descripción une forma y un animal conocido, casi siempre apunta a una fruta muy familiar.'),

    V(FRUTAS, "It is red inside with small black things you don't eat.", 7,
      'Roja por dentro y con pepas negras que se escupen: es la sandía. La uva puede ser oscura por fuera, pero no es roja por dentro con semillas negras visibles.',
      'Inside indica el interior de la fruta, no su cáscara. Imagínala partida por la mitad.'),

    V(FRUTAS, 'Some people eat vegetable salads with its juice.', 3,
      'El jugo que se le echa a las ensaladas es el del limón. Las demás frutas de la lista se comen como postre, no se usan para aliñar.',
      'Juice aquí no es una bebida: es el jugo que se exprime encima de otra comida.'),

    V(FRUTAS, 'It is very small and can be purple or green.', 2,
      'Muy pequeña y de color morado o verde: es la uva. El resto de las frutas de la lista son grandes o tienen un solo color característico.',
      'Dos datos juntos, tamaño y color, suelen dejar una sola fruta posible.'),
  ],
};

/* La ruta: cinco cuestionarios, uno por bloque temático del cuadernillo. */
const CUESTIONARIOS = {
  ing: [
    {
      tema: 'Parte 2 · Vocabulario en contexto',
      items: [
        { id: 'ing-23', titulo: 'Vocabulario: tiempo libre', qs: [0, 1, 2, 3, 4],       tipo: 'Vocabulario' },
        { id: 'ing-24', titulo: 'Vocabulario: la casa',      qs: [5, 6, 7, 8, 9],       tipo: 'Vocabulario' },
        { id: 'ing-25', titulo: 'Vocabulario: deportes',     qs: [10, 11, 12, 13, 14],  tipo: 'Vocabulario' },
        { id: 'ing-26', titulo: 'Vocabulario: comida',       qs: [15, 16, 17, 18, 19],  tipo: 'Vocabulario' },
        { id: 'ing-27', titulo: 'Vocabulario: frutas',       qs: [20, 21, 22, 23, 24],  tipo: 'Vocabulario' },
      ],
    },
  ],
};
