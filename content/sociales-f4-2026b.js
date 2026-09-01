/* Sociales y Ciudadanas · cuarto cuadernillo (F4) · lote 2026-B
 *
 * Fuente: el cuadernillo «F4 SyC · Mikey Mouse» entregado por el instituto,
 * 46 preguntas numeradas 31 a 76, igual que F1, F2 y F3.
 *
 * A diferencia de F1/F2 (que compartían 14 preguntas), este formulario NO
 * repite ninguna: se compararon las 46 contra las 125 ya cargadas buscando
 * frases distintivas de cada situación, y los cinco candidatos que aparecieron
 * (Evo Morales, minería ilegal, LGBTI, papa criolla, matoneo) resultaron ser
 * coincidencias de tema, no de pregunta. Las 46 entran completas.
 *
 * El cuadernillo NO trae hoja de respuestas. Las claves las determinó el
 * modelo leyendo cada situación, y por eso se cargan con
 * `clave_origen = 'modelo'`. `confianza: 'media'` marca las dos que admiten
 * una segunda lectura defendible y que el docente debería revisar primero:
 *
 *   · Pregunta 41 (Dickens) — el enunciado sitúa «Tiempos difíciles» en la
 *     Inglaterra victoriana «de finales del siglo XIX», pero Dickens murió en
 *     1870 y la novela es de 1854. La incoherencia es del cuadernillo, no de
 *     la transcripción; la clave se sostiene igual, pero conviene decidir si
 *     se corrige la fecha del enunciado.
 *   · Pregunta 45 (mecanismos de participación) — las cuatro opciones son
 *     discutibles según qué tan estricto se sea con quién puede convocar cada
 *     mecanismo.
 *
 * Las explicaciones nunca nombran una letra: las opciones se barajan por
 * estudiante.
 */

const S = (comp, ctxLabel, ctxClass, context, text, opts, correct, exp, tip, confianza) => ({
  comp, ctxLabel: ctxLabel || null, ctxClass: ctxClass || null, context: context || null,
  text, opts, correct, exp, tip, confianza: confianza || 'alta',
});

const BANKS = {
  soc: [
    /* ═════════ 31 ═════════ */
    S('Economía y sociedad', 'FRAGMENTO', 'ctx-sit',
      'Con el final de la Segunda Guerra Mundial, se dio inicio a una nueva era en la comprensión y manejo de los asuntos mundiales, conocida como Doctrina Truman. "(...) El propósito era bastante ambicioso: crear las condiciones necesarias para reproducir en todo el mundo los rasgos característicos de las sociedades avanzadas de la época: altos niveles de industrialización y urbanización, tecnificación de la agricultura, rápido crecimiento de la producción material y los niveles de vida, y adopción generalizada de la educación y los valores culturales modernos. Según la Doctrina Truman, el capital, la ciencia y la tecnología eran los principales componentes que harían posible tal revolución masiva. Solo así el sueño americano de paz y abundancia podrían extenderse a todos los pueblos del planeta". (Escobar, Arturo. La invención del Tercer Mundo. Bogotá: Editorial Norma)',
      'De acuerdo con lo anterior, ¿cuál de los siguientes procesos o sucesos son producto de la aplicación de la doctrina Truman?',
      ['La descolonización de África durante la Guerra Fría, cuyo objetivo era independizar a los países de ese continente que continuaban bajo el poder de Inglaterra y otras potencias europeas.',
       'La creación del Banco Mundial durante la posguerra, cuyo objetivo era facilitar la reconstrucción de Europa y orientar acciones encaminadas a superar la pobreza en el mundo.',
       'La Declaración Universal de los Derechos Humanos durante la posguerra, cuyo objetivo era proteger la dignidad humana e impedir que las atrocidades nazis volvieran a suceder.',
       'La construcción del Muro de Berlín durante la Guerra Fría, cuyo objetivo era separar la Alemania Occidental de influencia capitalista y la Alemania Oriental de influencia comunista.'], 1,
      'El texto dice que el capital, la ciencia y la tecnología eran los componentes que harían posible la transformación. Una banca mundial que financia reconstrucción y combate la pobreza es exactamente esa idea de desarrollo llevada a una institución. La descolonización, los derechos humanos y el muro responden a otras lógicas: independencia, dignidad y división ideológica.',
      'Cuando un texto enumera los medios de una doctrina (aquí capital, ciencia y tecnología), busca entre las opciones la que use esos mismos medios.'),

    /* ═════════ 32 ═════════ */
    S('Interpretación de perspectivas', 'FRAGMENTO', 'ctx-sit',
      'Bernal Díaz del Castillo fue un soldado de a pie de la expedición liderada por Hernán Cortés para la conquista de México. El soldado Díaz del Castillo escribió lo siguiente en el inicio de su crónica: "Y si hubiese de decir y traer a la memoria, parte por parte, los heroicos hechos que en las conquistas hicimos cada uno de los valerosos capitanes y fuertes soldados que desde el principio en ella nos hallamos, fuera menester hacer un gran libro para declararlo como conviene". (Tomado de: Díaz del Castillo, B. Historia verdadera de la conquista de la Nueva España. Méjico. Porrúa)',
      'Un historiador busca realizar una investigación cuyo principal objetivo es describir la conquista de México desde la perspectiva de los conquistadores. ¿La obra de Bernal Díaz del Castillo es útil para cumplir este objetivo?',
      ['Sí, porque la información que proporciona el soldado es producto de sus vivencias y experiencias.',
       'No, porque los soldados españoles no habían recibido educación y, por ende, su opinión no es válida.',
       'No, porque los españoles no entendieron a los pueblos que conquistaron y sus descripciones son falsas.',
       'Sí, porque el soldado vivió en la misma época y tuvo acceso a información de segunda mano.'], 0,
      'El historiador quiere la mirada de los conquistadores, y Díaz del Castillo fue uno de ellos: escribe lo que vivió. Eso lo convierte en fuente de primera mano, no de segunda. Descalificarlo por falta de educación o dar por falsas todas sus descripciones sería descartar la única perspectiva que se está buscando.',
      'Una fuente no se juzga por si dice la verdad absoluta, sino por si sirve para la pregunta que se está haciendo.'),

    /* ═════════ 33 ═════════ */
    S('Economía y sociedad', 'SITUACIÓN', 'ctx-sit',
      'La pesca es la principal actividad económica para ocho pequeños Estados isleños del Pacífico Occidental conocidos como "naciones isla del Pacífico". Desde 2010, los gobiernos de estas naciones se unieron y acordaron exigir un cobro a los barcos pesqueros de otras nacionalidades por cada día de pesca en sus aguas. Si bien en los últimos cinco años se han triplicado las ganancias provenientes de ese cobro, las agencias de apoyo al consumidor no aprueban el acuerdo. Argumentan que este incrementa los precios del pescado y que esos sobrecostos terminan recayendo, finalmente, en el consumidor. Agencias pesqueras, conformes con el acuerdo, argumentan que este no puede cambiarse porque está amparado bajo la figura de cooperación entre gobiernos. Un grupo de empresarios de pescado, por su parte, afirma que las ganancias reales no están en vender esta materia prima, sino en el procesamiento de desperdicios, lo que generaría más puestos de trabajo y les daría mayor participación en la industria. (Tomado y adaptado de: McDonald, Tim (2015), BBC Mundo)',
      'En esta situación conflictiva, ¿qué quieren probablemente lograr los actores involucrados?',
      ['Los gobiernos de los ocho Estados quieren disminuir los precios al consumidor final; el grupo de empresarios de pescado, reducir los costos de mano de obra.',
       'Los gobiernos quieren trabajar de manera independiente; las agencias pesqueras quieren modificar el acuerdo de cooperación suscrito entre los gobiernos.',
       'Los gobiernos de los ocho Estados quieren consolidar su acuerdo comercial; el grupo de empresarios pretende ampliar su margen de participación en la industria pesquera.',
       'Las agencias pesqueras quieren apoyar el acuerdo entre los ocho gobiernos; el grupo de empresarios quiere reducir la participación de trabajadores en la industria pesquera.'], 2,
      'Los gobiernos se unieron y triplicaron sus ganancias con el cobro: lo que quieren es sostener ese acuerdo. Los empresarios dicen abiertamente que buscan mayor participación en la industria procesando desperdicios. Las otras combinaciones invierten los intereses: los gobiernos no buscan bajar precios y los empresarios hablan de crear empleo, no de recortarlo.',
      'En preguntas de intereses, ubica a cada actor y subraya la frase donde dice qué quiere. Después revisa que la opción respete a los dos.'),

    /* ═════════ 34 ═════════ */
    S('Mecanismos de participación', null, null, null,
      '¿Cuál de las siguientes NO es una función de los partidos políticos?',
      ['Representar las demandas sociales a través de voceros.',
       'Recoger, discutir y promover las ideas y propuestas de sus miembros.',
       'Servir como intermediarios entre las autoridades públicas y los ciudadanos.',
       'Operar como recaudadores de dineros públicos para el Estado.'], 3,
      'Recaudar impuestos es tarea de la administración tributaria del Estado, no de los partidos. Los partidos existen para canalizar demandas, debatir propuestas y servir de puente entre la ciudadanía y las autoridades: esas tres sí son funciones suyas.',
      'En las preguntas con NO, revisa las cuatro y quédate con la única que le corresponde a otra institución.'),

    /* ═════════ 35 ═════════ */
    S('Constitución y derechos', 'SITUACIÓN', 'ctx-sit',
      'El ministro de Ambiente de un país fue duramente criticado por unas infortunadas declaraciones mientras hablaba sobre un parque nacional, una de las zonas protegidas del país por su gran valor ecológico y cultural. Probablemente en medio de una confusión, el ministro afirmó que en ese parque "no hay vida humana, salvo los indígenas que se considera que todavía están allí, que nunca han salido de allí, pero allá no hay vida humana". (Tomado de: Revista Semana, 2015)',
      'La afirmación del ministro podría generar consecuencias negativas para',
      ['los antropólogos, porque se desincentiva la investigación en el área del parque al no existir vida humana en este.',
       'los inversionistas, porque, al tener territorios de gran importancia despoblados, desestimula la inversión extranjera en el país.',
       'los turistas de la región, porque no saben con certeza si hay indígenas habitando en el parque, y ya no van a tener interés en visitarlo.',
       'las comunidades indígenas de la región, porque al tratar a sus miembros como si no fuesen seres humanos se vulneran sus derechos.'], 3,
      'La frase dice que allí no hay vida humana «salvo los indígenas», y con eso los deja por fuera de la categoría de seres humanos. Los afectados son ellos: se les niega el reconocimiento del que dependen todos sus derechos. Los demás grupos aparecen mencionados, pero ninguno queda deshumanizado por la declaración.',
      'Cuando una declaración excluye a un grupo del lenguaje de lo humano, el daño recae sobre ese grupo, no sobre quienes lo estudian o lo visitan.'),

    /* ═════════ 36 ═════════ */
    S('Interpretación de perspectivas', 'SITUACIÓN', 'ctx-sit',
      'Recientemente, dos senadores, A y B, se pronunciaron sobre la propuesta del Gobierno de aplicar una reforma tributaria. Esta reforma implicaría aumentar el IVA, que es un impuesto al consumo de ciertos productos. El senador A dijo: "Las reformas tributarias generan inestabilidad social". Por su parte, el senador B señaló: "El aumento del IVA disminuye la capacidad de compra de las personas y el ritmo de la economía".',
      'Las afirmaciones de los senadores A y B',
      ['son semejantes, ya que ambas expresan una razón a favor de una reforma tributaria.',
       'no son semejantes, pues la primera expresa una razón en contra y la segunda, una razón a favor de una reforma tributaria.',
       'son semejantes, pues ambas expresan una razón en contra de una reforma tributaria.',
       'no son semejantes, ya que la primera expresa una razón a favor y la segunda, una razón en contra de una reforma tributaria.'], 2,
      'Uno habla de inestabilidad social y el otro de menor capacidad de compra y menor ritmo económico: los dos señalan perjuicios. Aunque den razones distintas, ambos apuntan en la misma dirección, así que sus posturas coinciden.',
      'Para comparar dos posturas, no mires si dicen lo mismo, sino si están del mismo lado: a favor o en contra.'),

    /* ═════════ 37 ═════════ */
    S('Economía y sociedad', 'SITUACIÓN', 'ctx-sit',
      'Existe un debate entre los defensores de dos teorías económicas. De acuerdo con la primera teoría, el Estado debe intervenir en la economía de un país, sobre todo en tiempos de crisis, pues la obligación del Estado es reducir las pérdidas que puedan tener las empresas y los individuos. De acuerdo con la segunda teoría, la intervención estatal en la economía conduce inevitablemente a situaciones estructurales de crisis, al desestimular el crecimiento económico producto de la libre competencia entre empresas e individuos.',
      '¿Cuál de las siguientes situaciones es afín con la segunda teoría económica?',
      ['En un país, las empresas privadas que brinden empleo a jóvenes menores de 25 años de edad tienen descuentos en los impuestos que pagan.',
       'Para eliminar el monopolio estatal en el suministro de servicios públicos, un gobierno decide subastar las empresas públicas de electricidad y agua.',
       'Para reducir el desempleo, un gobierno invierte grandes sumas de dinero para la construcción de puentes, carreteras y vías férreas.',
       'En un país, las empresas extranjeras deben pagar altos aranceles como una medida para proteger las empresas nacionales.'], 1,
      'La segunda teoría desconfía de la intervención estatal y confía en la libre competencia. Vender las empresas públicas para acabar un monopolio del Estado es justamente retirar al Estado y abrir el mercado. Los descuentos tributarios, la obra pública y los aranceles altos son, en cambio, tres formas de intervenir.',
      'Antes de mirar las opciones, escribe en una palabra qué defiende cada teoría. Aquí: intervenir contra dejar competir.'),

    /* ═════════ 38 ═════════ */
    S('Interpretación de perspectivas', 'SITUACIÓN', 'ctx-sit',
      'Desde abril de 2011, Francia se convirtió en el primer país occidental en imponer la prohibición del velo integral islámico, o burka, en el espacio público. Esta ley afecta a 2.000 mujeres islámicas en Francia, que deben pagar una multa de 150 euros en caso de que sigan usando el velo en espacios públicos. La mayoría de los franceses apoyaron la ley, argumentando que esta vestimenta es un símbolo de opresión contra la mujer. Por su parte, el entonces presidente francés Nicolás Sarkozy aseguró: "El burka no es un símbolo religioso sino un símbolo de la opresión. No es bienvenido en Francia". Por otro lado, las afectadas consideran que la ley es un ataque contra sus libertades y que aislará socialmente a las mujeres islámicas. Muchas de estas mujeres argumentan que usan el velo integral de forma voluntaria, porque forma parte de su cultura y que no lo hacen por imposición de sus padres o de sus maridos. (Tomado y adaptado de: DPA París, 2011, El Mundo)',
      'De acuerdo con el enunciado, ¿cuáles factores dan origen al conflicto alrededor de esta regulación francesa?',
      ['La falta de interés del gobierno francés para pronunciarse respecto a las costumbres de otras culturas y la tolerancia de la población francesa frente a la costumbre islámica del burka en lugares públicos.',
       'La falta de solidaridad de la población francesa con la liberación de las mujeres islámicas y el desconocimiento de los derechos de aquellas que insisten en usar el velo.',
       'La falta de comprensión, por parte del gobierno francés, de los valores de la cultura islámica al considerar el burka como elemento de opresión y los efectos de la ley sobre la identidad cultural de las mujeres islámicas.',
       'La falta de voluntad de las mujeres islámicas para modificar su vestimenta y el alto precio de las multas que tendrán que pagar las mujeres si siguen usando el velo.'], 2,
      'El choque tiene dos caras: el gobierno lee el burka solo como opresión, sin considerar lo que significa dentro de esa cultura, y las mujeres afectadas sienten que la ley golpea su identidad y las aísla. Esa es la única opción que recoge los dos lados. Decir que el gobierno no se pronunció o que la población fue tolerante contradice el texto.',
      'Si la pregunta pide «los factores» en plural, la respuesta correcta suele nombrar a las dos partes del conflicto, no solo a una.'),

    /* ═════════ 39 ═════════ */
    S('Geografía y territorio', 'SITUACIÓN', 'ctx-sit',
      'Un municipio al norte de un país sufrió una inundación como consecuencia del impacto de las fuertes lluvias asociadas con el fenómeno de La Niña y la inestabilidad de los terrenos. Las viviendas de la mayor parte de las familias del municipio fueron arrasadas por la inundación. El gobierno les prometió a sus habitantes reconstruir las viviendas en terrenos estables para evitar o disminuir los daños que puedan causar futuras inundaciones. Para cumplir su promesa, el Gobernador adquirió terrenos estables en una zona en la que, durante varios años, se han llevado a cabo planes de reforestación y cuidado de las fuentes hídricas para su recuperación y conservación como reserva natural, luego de haber sufrido las consecuencias de las prácticas de la ganadería y la minería.',
      'Para reconstruir el municipio, la solución del Gobierno tiene implicaciones negativas desde un punto de vista económico, pues',
      ['la reconstrucción del municipio en los nuevos terrenos implicaría la pérdida de la inversión hecha para la recuperación ambiental de la nueva zona.',
       'a largo plazo, reconstruir el municipio en la nueva zona es más costoso que construir en la misma zona afectada por la inundación.',
       'los habitantes del municipio inundado tuvieron pérdidas millonarias como consecuencia de la falta de planeación del gobierno.',
       'la construcción de vivienda en terrenos estables es más costosa que la construcción en terrenos inestables.'], 0,
      'En esa zona se invirtieron años de reforestación y recuperación de fuentes hídricas. Construir el municipio encima echa a perder ese dinero y ese trabajo: ahí está el costo económico de la decisión. Las otras opciones comparan precios de construcción o hablan de pérdidas pasadas, y el texto no da datos para ninguna de las dos cosas.',
      'Una inversión ya hecha también es dinero. Si una decisión la desperdicia, eso cuenta como implicación económica negativa.'),

    /* ═════════ 40 ═════════ */
    S('Historia de Colombia', 'FRAGMENTO', 'ctx-sit',
      'Durante más de tres siglos, este puerto fue punto de contacto geográfico y cultural entre África y los territorios españoles de la América meridional. Aunque existían otros puntos de entrada de comercio en el Caribe continental y el contrabando abundaba, la ciudad se convirtió en uno de los más importantes puertos de España en América durante todo el periodo colonial gracias a su situación estratégica y a las excelentes condiciones de su bahía para todo tipo de comercio, incluyendo el de esclavos. A ella llegaban toda suerte de mercaderías que se introducían al Nuevo Reino de Granada y constituyó la puerta de entrada al virreinato tanto de migrantes europeos como esclavos africanos traídos para el trabajo en las minas y haciendas. De esta manera, la ciudad unía las funciones de la plaza fuerte por su condición amurallada y de puerto, congregando en ella los poderes económico, social, civil, eclesiástico y militar. (Adaptado de: Banco de la República, 1996)',
      'Teniendo en cuenta la información anterior, ¿en qué ciudad del actual territorio colombiano se presentó la mayor entrada de esclavos africanos?',
      ['Buenaventura.', 'Zipaquirá.', 'Quibdó.', 'Cartagena.'], 3,
      'El texto describe un puerto amurallado sobre el Caribe, con una bahía excelente y sede de los poderes de la colonia: esa es Cartagena. Buenaventura es puerto, pero sobre el Pacífico y sin ese papel colonial; Zipaquirá y Quibdó no son puertos marítimos.',
      'Reúne las pistas geográficas antes de responder: aquí son mar Caribe, bahía, murallas y capital comercial de la colonia.'),

    /* ═════════ 41 ═════════ */
    S('Interpretación de perspectivas', 'FRAGMENTO', 'ctx-sit',
      'En el libro <em>Tiempos difíciles</em>, el escritor británico Charles Dickens (1812-1870) describía una ciudad con las siguientes palabras: "Era una ciudad de ladrillo rojo, es decir, de ladrillo que habría sido rojo si el humo y la ceniza se lo hubiesen consentido, como no era así, la ciudad tenía un extraño color rojinegro, parecido al que usan los salvajes para embadurnarse la cara. Era una ciudad de máquinas y de altas chimeneas, por las que salían interminables serpientes de humo que no acababan nunca de desenroscarse, a pesar de salir y salir sin interrupción. Pasaban por la ciudad un negro canal y un río de aguas teñidas de púrpura maloliente, tenía también grandes bloques de edificios llenos de ventanas, y en cuyo interior resonaba todo el día un continuo traqueteo y temblor en el que el émbolo de la máquina de vapor subía y bajaba con monotonía, lo mismo que la cabeza de un elefante enloquecido de melancolía". Los estudios de la obra de Dickens asocian esta descripción con la Inglaterra victoriana de finales del siglo XIX.',
      '¿Cuál de los siguientes argumentos apoya esta ubicación temporal y espacial de la obra de Dickens?',
      ['Dickens buscaba describir los bruscos cambios que la industrialización había traído a la sociedad en la que vivía.',
       'Inglaterra fue el país donde se inventó la máquina de vapor de 1776.',
       'Inglaterra fue el primer país en donde se empleó el ladrillo para la construcción de viviendas.',
       'Dickens buscaba denunciar la grave contaminación de las fuentes de agua en Inglaterra durante la época victoriana.'], 0,
      'Dickens escribe sobre su propia sociedad, y lo que retrata (chimeneas, máquinas de vapor, ríos teñidos) es la transformación industrial de la Inglaterra en la que vivió. Ese argumento ata la obra a un lugar y a un momento. El dato de la máquina de vapor no dice nada sobre cuándo se escribió la novela, y lo del ladrillo es falso.',
      'Para ubicar una obra en el tiempo, el argumento más fuerte suele ser la relación entre el autor y la sociedad que describe.',
      'media'),

    /* ═════════ 42 ═════════ */
    S('Interpretación de perspectivas', 'SITUACIÓN', 'ctx-sit',
      'En un debate a propósito de la protección de derechos de autor y el libre acceso a la información y la cultura a través de internet, los representantes de dos grupos con intereses distintos presentan las siguientes opiniones. Los usuarios: "Tendrán que aceptar seriamente que vivimos en una economía de mercado garantizada por la Constitución, en la que las cosas tienen un precio y solo el Estado puede decidir que el acceso a la cultura y a la información a través de internet u otros medios digitales sea gratis o no". Los periodistas, usuarios y creadores de internet: "Declaramos que los derechos de autor no pueden situarse por encima de los derechos fundamentales de los ciudadanos; internet debe funcionar de forma libre y sin interferencias políticas impulsadas por sectores que quieren preservar anticuados modelos de negocio e imposibilitar que el saber humano siga siendo libre".',
      'Considerando los argumentos de cada una de las partes, es posible concluir que estas presentan visiones divergentes en relación con',
      ['el nivel de credibilidad e imparcialidad de la información que circula en internet.',
       'el deber de los Estados de garantizar cobertura y acceso a internet de manera gratuita, para todos sus ciudadanos.',
       'el papel del estado en la regulación del acceso público a la información disponible en internet.',
       'la responsabilidad de los medios masivos de comunicación en la búsqueda de bienestar social.'], 2,
      'Un grupo sostiene que solo el Estado puede decidir si el acceso es gratuito; el otro exige que internet funcione sin interferencias políticas. Los dos están hablando de lo mismo: cuánto debe intervenir el Estado. Ninguno discute la credibilidad de la información ni el papel de los medios masivos.',
      'Para hallar la divergencia, busca el tema que ambas partes tocan y sobre el que dicen cosas opuestas.'),

    /* ═════════ 43 ═════════ */
    S('Geografía y territorio', 'SITUACIÓN', 'ctx-sit',
      'En 2015, el presidente boliviano Evo Morales autorizó exploraciones para hallar hidrocarburos en las áreas protegidas de su país, incluidos parques nacionales y territorios indígenas. En efecto, la economía boliviana depende en gran medida de la exportación de petróleo y gas, cuyas reservas están agotándose. Organizaciones indígenas han protestado y manifestado su descontento por la medida, argumentando que el daño a la madre tierra y la alteración de sus formas de vida tradicionales son inevitables. Ello a pesar de que el Gobierno ha anunciado la implementación de nuevas tecnologías para evitar daños serios a los ecosistemas y el pago de una compensación a las comunidades indígenas del 1 % del total de la inversión de las empresas exploradoras.',
      '¿Cuál de las siguientes razones explica por qué las organizaciones indígenas bolivianas se oponen a la exploración de hidrocarburos?',
      ['Porque consideran que la economía del país no debería depender de un solo tipo de exportación, dadas las enormes riquezas naturales que posee.',
       'Porque consideran que los recursos que proporciona la madre tierra deben ser aprovechados solamente por las comunidades indígenas del país.',
       'Porque consideran que la compensación del 1 % es muy poca dadas las enormes ganancias que obtienen las empresas que explotan hidrocarburos.',
       'Porque consideran que tanto la tierra como sus costumbres deben protegerse por encima de los intereses económicos que generan los hidrocarburos.'], 3,
      'El texto recoge su argumento textualmente: el daño a la madre tierra y la alteración de sus formas de vida tradicionales son inevitables. Es decir, ponen el territorio y la cultura por encima del beneficio económico. Nunca reclaman un uso exclusivo de los recursos ni discuten el monto de la compensación.',
      'Cuando el texto cita el argumento de un grupo, la clave está en parafrasearlo, no en imaginar otras razones posibles.'),

    /* ═════════ 44 ═════════ */
    S('Geografía y territorio', 'SITUACIÓN', 'ctx-sit',
      'De acuerdo con la ley 1715 de 2014, Colombia, país cuyas exportaciones dependen principalmente de sus riquezas naturales, entre ellas el petróleo, tiene la necesidad de evaluar nuevas fuentes de energía para enfrentar la crisis energética que los expertos pronostican a corto y mediano plazo. Por medio de esta ley, se busca incentivar el uso de energías renovables no convencionales (energía solar y energía eólica) y minimizar los conflictos ambientales causados por la dependencia del país de las fuentes de energía basadas en combustibles fósiles (carbón, petróleo) o hidroeléctricas. Con esta ley se espera aportar al desarrollo sostenible del país y prevenir la vulnerabilidad ante escenarios de sequía extrema que afectarían el suministro de energía generada por los embalses, ríos o grandes represas.',
      '¿Cuál de los siguientes hechos justifica la adopción de esta política sustentada en la Ley 1715 de 2014?',
      ['El escaso impacto ambiental generado por el consumo de combustibles fósiles como el petróleo y el carbón, ya que estas son fuente de energía limpia.',
       'El agotamiento de los recursos naturales producidos por la explotación continua de fuentes de energía no renovables (carbón, petróleo, agua).',
       'La sostenibilidad a largo plazo del actual modelo de producción energética, gracias a la abundancia de recursos no renovables en el país.',
       'La rápida regeneración de los combustibles fósiles y otros recursos naturales, lo que garantiza su explotación ilimitada.'], 1,
      'La ley existe porque el modelo actual se está quedando sin base: las reservas se agotan y las sequías amenazan la generación hidroeléctrica. Ese agotamiento es lo que obliga a buscar sol y viento. Las otras tres afirman que los fósiles son limpios, abundantes o inagotables, y las tres contradicen el texto.',
      'Si una opción dice justo lo contrario de lo que el texto plantea como problema, descártala sin dudar.'),

    /* ═════════ 45 ═════════ */
    S('Mecanismos de participación', 'SITUACIÓN', 'ctx-sit',
      'De acuerdo con la Constitución de 1991, el pueblo interviene de forma directa en el ejercicio del poder mediante los mecanismos de participación ciudadana. Entre estos se encuentran el referendo, el plebiscito, la consulta popular y la revocatoria de mandato.',
      '¿En cuál de los siguientes escenarios NO es posible hacer uso de estos mecanismos?',
      ['Un grupo de ciudadanos y ciudadanas quiere revocar a su alcalde de este cargo, porque se ha incumplido las metas que propuso en su campaña electoral.',
       'El presidente quiere saber si los ciudadanos apoyan la participación política de miembros de grupos al margen de la ley, luego de que se reintegren a la vida civil.',
       'Un grupo de ciudadanos quiere cambiar la norma constitucional que protege los espectáculos taurinos, porque consideran que se trata de casos de maltrato animal.',
       'El presidente quiere modificar una ley que impide en ciertos casos la judicialización de quienes trafican con drogas, porque considera que esta norma es muy flexible y lleva a la injusticia.'], 3,
      'Los mecanismos de participación existen para que el pueblo intervenga directamente: revocar a un alcalde, ser consultado por el presidente sobre una decisión suya o promover un referendo para cambiar la Constitución son usos previstos. Modificar una ley porque el presidente la considera muy flexible no es participación ciudadana: eso se tramita en el Congreso, que es quien hace y reforma las leyes.',
      'Pregúntate quién actúa en cada escenario. Si quien decide es el gobernante y no el pueblo, no estamos ante un mecanismo de participación.',
      'media'),

    /* ═════════ 46 ═════════ */
    S('Geografía y territorio', 'SITUACIÓN', 'ctx-sit',
      'En un departamento con escasa presencia de autoridades estatales y gran parte de la población en condiciones de pobreza extrema, existen desde hace varios años actividades de minería ilegal. A este fenómeno se asocian problemas de salud en los niños y escasez de alimentos por el reemplazo de las zonas tradicionales agrícolas por la extracción minera, la cual resulta más lucrativa para habitantes. En otra región del mismo país, ante la falta de recursos para fortalecer el Ejército Nacional y la posible corrupción en esa institución, operan actores armados ilegales que han promovido la minería ilegal para financiarse. Debido a que no hay instituciones que puedan controlar las actividades de extracción mineral, el uso poco riguroso de químicos ha generado problemas de contaminación de fuentes hídricas para el consumo humano y el riego de cultivos, así como alteraciones drásticas del paisaje y los ecosistemas de la zona.',
      'De las siguientes razones, ¿cuál podría explicar las semejanzas que caracterizan a la minería ilegal en ambas regiones?',
      ['La ubicación geográfica, pues ambos lugares se localizan lejos de yacimientos minerales que puedan ser explotados.',
       'La débil presencia estatal, pues la actuación de las instituciones públicas es mínima en ambos lugares.',
       'Las dinámicas económicas, pues en ambos lugares hay pobladores con escasa vocación agrícola.',
       'La violencia política, pues los actores armados ilegales llegaron a ambas regiones en busca de apoyo popular.'], 1,
      'En la primera región hay escasa presencia de autoridades; en la segunda faltan recursos para el Ejército y no hay instituciones que controlen la extracción. El punto común es que el Estado no llega. La primera región sí tenía vocación agrícola —la minería la reemplazó— y en ningún caso se habla de buscar apoyo popular.',
      'Para hallar la semejanza, subraya en cada caso la causa que se repite y comprueba que aparezca en los dos.'),

    /* ═════════ 47 ═════════ */
    S('Constitución y derechos', 'SITUACIÓN', 'ctx-sit',
      'Un profesor universitario, detractor de la discriminación de género y defensor de los derechos de la población LGBTI (lesbianas, gays, bisexuales, transexuales e intersexuales) fue asesinado en una ciudad de Colombia. Un representante de una entidad pública encargada de investigar el caso emitió la siguiente declaración ante la opinión pública: "Nuestra entidad está comprometida en aclarar el crimen y en que la muerte del profesor no quede en la impunidad; sin embargo, todo parece indicar que los móviles del crimen fueron absolutamente pasionales, por cuanto este ciudadano llevaba una vida desordenada, era promiscuo y, en su condición de homosexual, tenía varias personas como pareja". (Tomado y adaptado de: El Espectador)',
      '¿Cuál de las siguientes afirmaciones del funcionario contiene un claro sesgo discriminatorio en contra de la víctima?',
      ['"Todo parece indicar que los móviles del crimen fueron absolutamente pasionales".',
       '"Este ciudadano (...) era promiscuo".',
       '"Este ciudadano (...), en su condición de homosexual, tenía varias personas como pareja".',
       '"Este ciudadano llevaba una vida desordenada".'], 2,
      'La frase que discrimina es la que usa la orientación sexual como explicación de la conducta: al decir «en su condición de homosexual» convierte una característica protegida en la causa de tener varias parejas. Las otras dos frases juzgan a la persona, pero no la señalan por pertenecer a un grupo.',
      'Discriminar es tratar a alguien distinto por pertenecer a un grupo. Busca la frase que nombre esa pertenencia y la use como explicación.'),

    /* ═════════ 48 ═════════ */
    S('Organización del Estado', 'SITUACIÓN', 'ctx-sit',
      'En el año 2004, se realizó una reforma a la Constitución política que permitió modificar los artículos 127, 197, 204 y 152, a través de la introducción de la figura de la reelección presidencial inmediata en Colombia. Esta reforma permitió que quienes hayan ejercido la Presidencia de la República permanezcan en su cargo durante un segundo periodo, si así lo deciden los ciudadanos mediante votaciones.',
      '¿Cuál de los siguientes mecanismos permite realizar modificaciones a la Constitución política de Colombia como las realizadas en el año 2004?',
      ['Una consulta popular realizada a los colombianos.',
       'La recolección de firmas por parte de los ciudadanos.',
       'Un acto legislativo discutido y aprobado por el Congreso.',
       'Un decreto promulgado por el presidente de la República.'], 2,
      'La Constitución se reforma por acto legislativo, que es el trámite que hace el Congreso. La consulta popular y las firmas pueden servir para impulsar un referendo, pero no reforman por sí solas el texto constitucional, y un decreto presidencial nunca puede modificarlo.',
      'Distingue la herramienta del resultado: firmas y consultas impulsan; el acto legislativo es el que efectivamente reforma.'),

    /* ═════════ 49 ═════════ */
    S('Interpretación de perspectivas', 'SITUACIÓN', 'ctx-sit',
      'Luisa y Jorge son beneficiarios de la misma Entidad Promotora de Salud (EPS). Luisa padece una enfermedad crónica desde hace más de veinte años. Jorge, por su parte, sufre de una enfermedad degenerativa desde hace un año. Jorge le contó a Luisa que en las primeras citas los médicos de su EPS afirmaron que los síntomas de su enfermedad se debían a "cansancio y estrés", por lo que le recetaron analgésicos y le recomendaron iniciar sesiones de ejercicio físico. Como su salud no mejoraba, Jorge consultó a otro médico, quien finalmente le diagnosticó una enfermedad degenerativa. El médico señaló que su tratamiento requería de un medicamento novedoso y de muy alto costo; la EPS, por su parte, le notificó a Jorge que solo podría costear el 50 % del valor total del mismo. Jorge, indignado, le dice a Luisa que el servicio que le están prestando en su EPS no solo es deficiente, sino inhumano. Luisa le responde a Jorge que no está de acuerdo con que la EPS presta un mal servicio; por el contrario, piensa que muchas cosas han cambiado para bien en los últimos tiempos. "Si hace veinte años usted hubiera tenido los mismos síntomas, le hubiera tocado pagar un médico privado y costearse usted mismo la totalidad del tratamiento. Por eso yo creo que el sistema de salud ha mejorado mucho y es cada vez más humano... Se lo digo yo por experiencia", afirmó.',
      'De acuerdo con la situación descrita, puede afirmarse que el argumento de Luisa NO refuta del todo el de Jorge, porque',
      ['Luisa no se refiere en su argumentación a enfermedades degenerativas como las que padece Jorge.',
       'Luisa no puede apelar a su experiencia personal como argumento para rectificar la posición de Jorge.',
       'el hecho de que Luisa no explique cómo puede haber un sistema de salud costoso y humano al mismo tiempo invalida su opinión.',
       'el hecho de que el sistema de salud funcione mejor que antes, como afirma Luisa, no significa que ahora sí funcione bien.'], 3,
      'Luisa compara el presente con hace veinte años y concluye que el sistema mejoró. Pero Jorge no dijo que el sistema fuera peor que antes: dijo que hoy es deficiente. Mostrar una mejora no demuestra que el servicio actual sea bueno, así que el argumento pasa por al lado del reclamo.',
      'Que algo haya mejorado no prueba que ya esté bien. Son dos afirmaciones distintas y una no responde a la otra.'),

    /* ═════════ 50 ═════════ */
    S('Interpretación de perspectivas', 'SITUACIÓN', 'ctx-sit',
      'El máximo jerarca de la Iglesia Católica, el papa Francisco, escribió en junio de 2015 una contundente encíclica sobre el medio ambiente que desató la ira de varios líderes políticos conservadores estadounidenses. El pontífice hizo un llamado para proteger el planeta de la degradación ambiental y presentó una fuerte crítica al sistema económico capitalista que explota los recursos naturales sin consideraciones éticas o morales. Algunos líderes políticos estadounidenses sostuvieron al respecto: "La religión no debe mezclarse con cuestiones que tengan un efecto en el ámbito político". También afirmaron que el papa es peligroso, porque "está vendiendo una línea de socialismo al estilo latinoamericano y no está en sintonía con la Iglesia Católica de los Estados Unidos". (Tomado y adaptado de: BBC Mundo, 2015)',
      'En la situación anterior, ¿qué aspectos están en conflicto?',
      ['El religioso y el ambiental.', 'El ideológico y el legislativo.',
       'El legislativo y el ambiental.', 'El religioso y el político.'], 3,
      'De un lado habla la máxima autoridad religiosa; del otro, líderes políticos que le reclaman justamente haberse metido en política. El choque es entre esos dos ámbitos. Lo ambiental es el tema del que hablan, no el lado en disputa, y en ningún momento aparece un trámite legislativo.',
      'Separa el tema del debate de quiénes debaten. El conflicto se define por los ámbitos que representan las partes.'),

    /* ═════════ 51 ═════════ */
    S('Constitución y derechos', 'SITUACIÓN', 'ctx-sit',
      'En Colombia, así como en otros países del mundo, existen leyes y políticas que protegen los derechos de las comunidades indígenas para garantizar la diversidad étnica, superar la discriminación histórica, fomentar su participación en la sociedad, mejorar sus condiciones de vida, preservar sus tradiciones y garantizar su supervivencia. Entre ellas se destacan el reconocimiento de los resguardos indígenas como entes territoriales, la exención del servicio militar, la creación de curules especiales en el Congreso de la República, el sistema de justicia indígena aplicable en sus territorios, entre otras medidas.',
      'Teniendo en cuenta lo anterior, ¿en cuál de las siguientes situaciones se vulnera el deber constitucional de proteger la diversidad cultural y étnica del país?',
      ['Todo indígena que haya cometido un delito en su comunidad puede ser juzgado según las normas y los procedimientos propios de la justicia indígena.',
       'Todo indígena que viva en territorios ancestrales y mantenga sus tradiciones estará exento de prestar el servicio militar.',
       'Dos indígenas son elegidos para entrar a una universidad con la condición de que modifiquen su modo de vestir y solo hablen el español.',
       'Dos indígenas son elegidos por voto popular para representar a sus comunidades en el Senado con el requisito de que sean líderes indígenas reconocidos.'], 2,
      'Condicionar el ingreso a la universidad a que abandonen su vestido y su lengua es exigirles renunciar a su cultura para acceder a un derecho: eso es justo lo contrario de proteger la diversidad. Las otras tres describen medidas que el propio texto menciona como formas de protegerla.',
      'Si una medida exige que alguien deje de ser lo que es para acceder a un derecho, está vulnerando la diversidad, no protegiéndola.'),

    /* ═════════ 52 ═════════ */
    S('Interpretación de perspectivas', 'SITUACIÓN', 'ctx-sit',
      'Durante el primer trimestre del año 2017 se presentaron en los Estados Unidos incendios que afectaron 2 millones de acres de tierras, fuertes tormentas e inundaciones que cobraron vidas humanas; las catástrofes por estos eventos suman pérdidas económicas de hasta 5 billones de dólares. Un reporte de la Administración Nacional Oceanográfica y Atmosférica (NOAA, por sus siglas en inglés), instituto con más de 120 años de existencia, señala que el primer trimestre del año 2017 fue el segundo periodo con más altas temperaturas registrado hasta ahora. De acuerdo con la NOAA, las temperaturas cada vez más calientes de la superficie del mar, además de otros factores atmosféricos, contribuyeron a una temporada de huracanes más fuertes de lo normal en el Atlántico.',
      '¿El reporte de la NOAA es una fuente útil para establecer las causas de los desastres naturales que se presentaron en los Estados Unidos en el 2017?',
      ['Sí, porque la NOAA es una entidad que no tiene vínculos con el Gobierno y por tal razón está libre de influencias políticas.',
       'No, porque si el reporte es tan confiable se hubieran podido predecir y evitar las catástrofes ocurridas.',
       'Sí, porque el reporte proviene de una entidad oficial con una larga trayectoria en el estudio de los cambios climáticos.',
       'No, porque no se ha demostrado que haya una relación entre el aumento de la temperatura y los desastres naturales.'], 2,
      'Lo que hace útil al reporte es que viene de una institución oficial con más de 120 años estudiando el clima: tiene experiencia y respaldo. Decir que no tiene vínculos con el gobierno es falso, porque es una administración estatal, y las dos negativas contradicen el texto, que sí establece la relación entre temperatura y huracanes.',
      'Para juzgar una fuente, mira su trayectoria y su especialidad, no si te gusta lo que concluye.'),

    /* ═════════ 53 ═════════ */
    S('Constitución y derechos', 'FRAGMENTO', 'ctx-sit',
      'La lengua creole, la música, la danza, el canto, el respeto a los mayores, la cocina tradicional y la arquitectura son manifestaciones asociadas a la cultura raizal de los habitantes de la isla de San Andrés. Estas expresiones fueron heredadas de los ancestros africanos, del puritanismo inglés y de los indígenas del Caribe: elementos que han sido fundamentales en la vida social de la población isleña. La declaratoria de San Andrés como puerto libre en el año 1959 dio lugar a un proceso migratorio que cambió las condiciones socioeconómicas y culturales de esta población; es así como la cultura ancestral propia de la comunidad ha venido sufriendo un proceso de pérdida de la identidad cultural, y muchas de las manifestaciones tradicionales han desaparecido o están en peligro de desaparición; tal es el caso de la lengua creole, subvalorada en varios momentos históricos de las islas. La lengua materna de los raizales es de base inglesa, con elementos africanos del Caribe, y es hablada por los nativos dentro del seno familiar y transmitida oralmente; de hecho, en escenarios como la iglesia y en asuntos públicos o comunitarios, suele utilizarse el inglés y el español. En el ámbito educativo, el único colegio que incluye el creole dentro de su currículo es el First Baptist School, uno de los más tradicionales de la isla. (Tomado y adaptado de: Radio Nacional de Colombia, 2007)',
      'Teniendo en cuenta el texto anterior, la estrategia más eficaz para revitalizar la lengua creole sería',
      ['restringir que a la isla ingresen personas que hablen lenguas o dialectos distintos al creole.',
       'recolectar toda la documentación posible sobre la lengua, para su archivo y conservación.',
       'garantizar que la enseñanza de la lengua creole sea obligatoria en las escuelas de la isla.',
       'impulsar la emisión de programas en lengua creole en los medios de comunicación.'], 2,
      'El texto señala el problema exacto: la lengua solo se transmite oralmente en casa y un único colegio la enseña. Llevarla a todas las escuelas ataca esa causa y asegura nuevos hablantes. Archivarla la conserva pero no la revive, los medios ayudan menos que la escuela y restringir la entrada de personas es inviable y contrario a los derechos.',
      'Una estrategia eficaz ataca la causa que el texto identifica. Busca el dato que explica por qué la lengua se está perdiendo.'),

    /* ═════════ 54 ═════════ */
    S('Constitución y derechos', 'SITUACIÓN', 'ctx-sit',
      'La Corte Constitucional tumbó el artículo del Código del Trabajo que prohíbe asistir al empleo bajo el efecto del alcohol o de estupefacientes. El argumento es que siempre y cuando no afecte su desempeño laboral, un trabajador podrá llegar a su puesto drogado o borracho sin que eso configure una justa causa de despido o de sanciones disciplinarias. El Ministerio de Trabajo pidió mantener el artículo del Código, ya que el alcohol y la droga pueden descontrolar las inhibiciones del individuo, generarle torpeza para coordinar, deteriorar su capacidad de juicio, producir alucinaciones y causar eventuales accidentes. De acuerdo con varias organizaciones, el artículo del código del Trabajo vulneraba los derechos de los adictos y, por tanto, era inconstitucional. (Adaptado de: Revista Semana, 2017)',
      'De acuerdo con lo expresado por el Ministerio de Trabajo, la decisión de la Corte Constitucional podría ser',
      ['desventajas para los distribuidores y consumidores de bebidas alcohólicas y de estupefacientes.',
       'ventajas para las personas que emplean sustancias psicoactivas, como la marihuana, de forma estrictamente medicinal.',
       'desventajas para las empresas en las que se realizan tareas que requieren atención, como la conducción de vehículos.',
       'ventajas para las empresas en que usualmente se requiere consumir bebidas alcohólicas y otras sustancias psicoactivas.'], 2,
      'El Ministerio advierte torpeza para coordinar, deterioro del juicio y accidentes. Donde ese riesgo pesa más es en los trabajos que exigen atención plena, como conducir: allí la decisión resulta desventajosa. Las otras opciones hablan de distribuidores, de uso medicinal o de empresas que exigirían consumir alcohol, y nada de eso está en el argumento del Ministerio.',
      'La pregunta pide leer desde la postura de un actor concreto. Usa solo los argumentos que ese actor dio.'),

    /* ═════════ 55 ═════════ */
    S('Historia de Colombia', 'FRAGMENTO', 'ctx-sit',
      'El siguiente es un fragmento de un comunicado firmado por el grupo denominado "Los extraditables" y publicado en Colombia el 5 de noviembre de 1986: "Preferimos una tumba en Colombia a un calabozo en Estados Unidos (...) Reclamamos poner fin a la extradición de colombianos, en nombre de los derechos de la familia, de los derechos humanos y de la soberanía nacional (...) Solicitamos al gobierno la firma de convenios de intercambio de presos para buscar la repatriación de nacionales encarcelados, discriminados o ultrajados en otros países (...) Solicitamos al gobierno que envíe circulares a los establecimientos educativos anunciando sanciones a quienes nieguen a recibir en ellos a nuestros hijos".',
      'Este comunicado está relacionado con el contexto social y político de la década de los años 1980 en Colombia, porque, en esa década,',
      ['la toma del Palacio de Justicia despertó un interés especial en la comunidad internacional, por el conflicto armado colombiano.',
       'las negociaciones de paz con las guerrillas estuvieron condicionadas a la abolición de los tratados de extradición.',
       'los juicios contra colombianos en otros países se incrementaron, debido al auge de actividades ilegales vinculadas con el narcotráfico.',
       'la Asamblea Nacional Constituyente introdujo modificaciones a la figura de la extradición, lo cual afectó los intereses de algunos ciudadanos colombianos.'], 2,
      'El comunicado gira entero alrededor de la extradición, y quienes lo firman temen ser juzgados en Estados Unidos: eso solo se explica por el auge del narcotráfico en los años ochenta. La Constituyente que tocó la extradición fue de 1991, ya en la década siguiente, y las otras dos opciones no tienen relación con el reclamo del texto.',
      'Fíjate en la fecha del documento y descarta lo que ocurrió después de ella.'),

    /* ═════════ 56 ═════════ */
    S('Geografía y territorio', 'SITUACIÓN', 'ctx-sit',
      'El jefe de la tribu ogale de Nigeria muestra ante los medios de comunicación una botella de plástico con agua. Dice que usará el agua como prueba, ante un tribunal en Londres, de que una compañía petrolera provocó un desastre en el río Níger. "Si abro esta botella, se va a sentir el olor a petróleo por toda la habitación", indicó el jefe y representante de la comunidad ogale de Nigeria. Durante tres días, los representantes legales de más de 40.000 nigerianos afectados pedirían cuentas a la compañía. Por su parte, la petrolera ha informado que le entrega asistencia a las comunidades y que apoya el programa del Gobierno para el desarrollo de la comunidad, que cuesta alrededor de 1.000 millones de dólares. Los representantes de la petrolera cuestionan la demanda del jefe de la tribu, pues consideran que el problema que denuncia es consecuencia del robo del crudo y el sabotaje a la compañía.',
      'De acuerdo con la información anterior, ¿cuál es el aspecto central del problema de la comunidad ogale con la compañía petrolera?',
      ['Económico, pues la compañía no destina los recursos económicos suficientes para el desarrollo de la comunidad ogale.',
       'Ambiental, la petrolera ha causado una destrucción masiva de todos los territorios ancestrales ocupados por el pueblo ogale.',
       'Ambiental, pues la comunidad ogale acusa a la compañía de ser la responsable de contaminar fuentes hídricas provenientes del río Níger.',
       'Económico, pues el bienestar de la comunidad ogale es obstaculizado por problemas como el robo y el sabotaje.'], 2,
      'La prueba que lleva el jefe al tribunal es una botella de agua del río que huele a petróleo: lo que reclama es la contaminación del agua. Hablar de destrucción de todos los territorios va más allá de lo que dice el texto, y el robo y el sabotaje son el argumento de la petrolera, no el reclamo de la comunidad.',
      'El aspecto central es aquel sobre el que se presenta la prueba. Mira qué lleva cada parte al tribunal.'),

    /* ═════════ 57 ═════════ */
    S('Conflicto armado y memoria', 'FRAGMENTO', 'ctx-sit',
      'Todos deberían aceptar el Acuerdo de paz, incluyendo a quienes nunca han padecido el conflicto directamente, pero aún así se atrevieron a votar en contra de la paz en nuestros territorios. El nuestro era un municipio compartido por comunidades indígenas y negras principalmente, reconocido en la región como la despensa agrícola del Chocó, que llegó a exportar plátanos, tenía producción importante en cacao y arroz; un pequeño paraíso donde la población no tenía riquezas monetarias pero no le faltaba nada para ser feliz, hasta que llegó el conflicto armado y nos destrozó la vida. (Tomado y adaptado de: Verdad Abierta, 6 de octubre de 2016)',
      'Una hipótesis sobre los autores del anterior fragmento es que estos pertenecen a una población conformada por minorías víctimas del conflicto armado. ¿Qué elementos del texto sirven para apoyar esta hipótesis?',
      ['La resistencia de la comunidad a los procesos de implementación del Acuerdo de paz.',
       'La denuncia hecha sobre la falta de riquezas monetarias en la que vive la población del municipio.',
       'La alusión a la economía agrícola que sirve de sustento a la comunidad gracias al cultivo de arroz.',
       'La composición pluriétnica y multicultural de la comunidad a la que se hace alusión en el testimonio.'], 3,
      'La hipótesis habla de minorías, y el texto dice que el municipio estaba compartido por comunidades indígenas y negras: esa composición es precisamente lo que las identifica como minorías étnicas. La comunidad apoya el Acuerdo, no se resiste a él, y el arroz o la falta de dinero no dicen nada sobre su condición de minoría.',
      'Cuando te piden apoyar una hipótesis, busca en el texto el dato que corresponde a la palabra clave de esa hipótesis. Aquí, «minorías».'),

    /* ═════════ 58 ═════════ */
    S('Economía y sociedad', 'SITUACIÓN', 'ctx-sit',
      'La Encuesta Nacional de la Situación Nutricional ha mostrado con persistencia la deficiencia de micronutrientes como uno de los principales problemas nutricionales en los colombianos. La falta de hierro, reflejada en anemias, y de zinc, que tiene efectos directos en el crecimiento, el desarrollo neurológico y en el sistema inmune, son algunas de las deficiencias más críticas. Por eso, científicos de la Universidad Nacional de Colombia desarrollaron tres variedades de papa criolla modificada con mayores contenidos de hierro, zinc y proteína. Se escogió este alimento debido a su fuerte presencia en los hábitos alimentarios de los colombianos, y a que, si se consumen papas con mejores contenidos nutricionales, se puede contribuir a mitigar la mencionada carencia de micronutrientes, hoy denominada "hambre oculta".',
      'Uno de los factores que obstaculizaría la mayor difusión de las papas criollas modificadas respecto a las papas tradicionales es',
      ['que las papas criollas modificadas sean más resistentes a plagas y enfermedades que las papas tradicionales.',
       'que las papas criollas modificadas, a diferencia de las tradicionales, se cultiven en cualquier clima.',
       'que el precio de venta de las papas criollas modificadas sea mucho mayor que el de las papas tradicionales.',
       'que el precio de producción de las papas tradicionales sea mayor que el de las papas criollas modificadas.'], 2,
      'Si la papa modificada cuesta mucho más en el mercado, la gente sigue comprando la tradicional y el producto no se difunde. Ser más resistente o crecer en cualquier clima son ventajas que ayudarían a difundirla, y que producir la tradicional salga más caro también favorecería a la modificada.',
      'Un obstáculo es algo que frena. Descarta de entrada toda opción que describa una ventaja del producto nuevo.'),

    /* ═════════ 59 ═════════ */
    S('Economía y sociedad', 'SITUACIÓN', 'ctx-sit',
      'Dentro de los objetivos ambientales del Plan Nacional de Desarrollo del periodo 1994-1998 se establecieron dos medidas para fomentar la conservación de los recursos naturales en Colombia: en primer lugar, la imposición de tasas (pagos que deben realizar los ciudadanos o empresas) por el uso de los recursos naturales y, en segundo lugar, la creación de incentivos como reducción de impuestos a quienes contribuyan a conservar el entorno, hagan uso eficiente de los recursos naturales y eviten la producción de sustancias contaminantes.',
      'De acuerdo con la información anterior, estas propuestas de conservación ambiental',
      ['dan prioridad a herramientas económicas para generar incentivos hacia la conservación de los recursos naturales en el país.',
       'enfatizan en la importancia de la participación ciudadana con el objetivo de diseñar medidas orientadas hacia la conservación ambiental del país.',
       'dan prioridad a herramientas pedagógicas para concientizar a ciudadanos y empresas sobre su rol en la conservación ambiental.',
       'enfatizan en la importancia de la promoción de la equidad social con el objetivo de establecer condiciones a largo plazo para la conservación ambiental.'], 0,
      'Las dos medidas son cobros y descuentos de impuestos: dinero. Se apuesta a que la gente cuide el ambiente porque le conviene económicamente. No aparece por ningún lado la formación de ciudadanos, la participación en el diseño de las medidas ni la equidad social.',
      'Clasifica cada medida antes de responder: una tasa y una exención tributaria son herramientas económicas, no pedagógicas.'),

    /* ═════════ 60 ═════════ */
    S('Economía y sociedad', 'SITUACIÓN', 'ctx-sit',
      'Con el propósito de generar empleo, mejorar los ingresos de la población colombiana, en general, y cambiar la situación de los desempleados en condiciones de desventaja, en particular, el Congreso de la República de Colombia aprobó la Ley 1429 del 29 de diciembre de 2010. Esta Ley brinda beneficios tributarios para las empresas que contraten: 1. Jóvenes menores de 28 años (artículo 9). 2. Personas en condición de desplazamiento, en proceso de reintegración o en condición de discapacidad (artículo 10). 3. Mujeres mayores de cuarenta años que estuvieran sin contrato de trabajo por más de un año (artículo 11). 4. Empleados cuyo salario fuera inferior a 1,5 salarios mínimos (artículo 13).',
      '¿Cuál de los siguientes aspectos NO fue tenido en cuenta en la Ley 1429 de 2010?',
      ['Que la posibilidad de acceder a un empleo formal en Colombia está mediada por variables tales como el género y la edad.',
       'Que la generación de empleo requiere de que el Estado estimule a la empresa privada para frenar el flagelo del desempleo.',
       'Que las brechas salariales entre quienes ganan menos de dos salarios mínimos y quienes ganan hasta diez veces más podrían ser reducidas.',
       'Que fenómenos como la migración interna ocurrida en el marco del conflicto armado afectan negativamente las posibilidades de conseguir un empleo.'], 2,
      'La ley reconoce la edad y el género (artículos 9 y 11), estimula a la empresa privada con beneficios tributarios y atiende el desplazamiento (artículo 10). Lo que nunca toca es la distancia entre los salarios más bajos y los más altos: el artículo 13 favorece la contratación de quienes ganan poco, pero no reduce esa brecha.',
      'En preguntas con NO, ve descartando cada opción buscando el artículo que la respalda. La que se quede sin artículo es la respuesta.'),

    /* ═════════ 61 ═════════ */
    S('Constitución y derechos', 'FRAGMENTO', 'ctx-sit',
      'De acuerdo con la Corte Constitucional de Colombia, las acciones afirmativas son "todas aquellas medidas, políticas o decisiones públicas a través de las cuales se establece un trato ventajoso, y en cuanto tal formalmente desigual, que favorece a determinadas personas o grupos humanos tradicionalmente marginados o discriminados, con el único propósito de avanzar hacia la igualdad sustancial de todo el conglomerado social". (Tomado de: Corte Constitucional, 2010, Sentencia 293/10)',
      '¿Cuál de las siguientes situaciones puede entenderse a partir del concepto de acción afirmativa?',
      ['El alcalde de un municipio decreta que todas las edificaciones que se construyan en la ciudad deben tener rampas de acceso para personas en condición de discapacidad.',
       'El gobernador de un departamento establece la creación de colegios especiales exclusivos para separar a estudiantes que se identifiquen como parte de poblaciones diversas sexualmente.',
       'Un concejal propone que miembros de las comunidades afro e indígenas no pueden acceder a instituciones educativas públicas, para no influenciar sus culturas con costumbres occidentales.',
       'El decano de una universidad pública propone la expulsión de un grupo de estudiantes por adelantar una manifestación, a modo de protesta, durante un acto religioso convocado por las directivas de la institución.'], 0,
      'Exigir rampas es un trato especial que favorece a un grupo históricamente excluido para que pueda ejercer sus derechos en igualdad: eso es una acción afirmativa. Separar estudiantes en colegios exclusivos y negar el acceso a la educación son formas de segregación, y expulsar por protestar es una sanción.',
      'La acción afirmativa da una ventaja para incluir. Si la medida separa o excluye, aunque suene protectora, no lo es.'),

    /* ═════════ 62 ═════════ */
    S('Geografía y territorio', 'FRAGMENTO', 'ctx-sit',
      'En 2015, el presidente de Venezuela afirmó lo siguiente en los medios de comunicación: "La frontera [entre Colombia y Venezuela] va a seguir cerrada hasta que no restablezcamos un mínimo de convivencia, de respeto a la legalidad, a la vida y a la economía. Va a seguir cerrada digan lo que digan en Bogotá, en Cúcuta o donde lo quieran decir, no me importa lo que digan de mí (...) Fenómenos como el crimen organizado, el contrabando de extracción y la fuga de productos de primera necesidad son problemas trasladados al país [Venezuela], a través de la práctica paramilitar instaurada en Colombia desde hace varias décadas y que ha causado daños en la frontera colombovenezolana". (Tomado y adaptado de: BBC, 2015)',
      'De acuerdo con la información anterior, ¿cuál de los siguientes es el propósito del mandatario venezolano al mantener cerrada la frontera?',
      ['Resolver la crisis política interna de Venezuela.',
       'Proteger a su país responsabilizando a Colombia de la criminalidad fronteriza.',
       'Fomentar el crecimiento económico de ambos países.',
       'Ayudar a resolver los problemas de seguridad y criminalidad de Colombia.'], 1,
      'El presidente presenta el cierre como una medida para restablecer la legalidad y la convivencia en su país, y atribuye el crimen organizado, el contrabando y la fuga de productos a prácticas instaladas en Colombia. Está protegiendo a Venezuela y, al mismo tiempo, señalando al vecino como origen del problema.',
      'Cuando alguien justifica una medida, fíjate en dos cosas: a quién dice proteger y a quién le atribuye la culpa.'),

    /* ═════════ 63 ═════════ */
    S('Economía y sociedad', 'SITUACIÓN', 'ctx-sit',
      'Ante el aumento en las cifras de los ciudadanos con enfermedades como diabetes y obesidad asociadas al consumo excesivo de azúcar, el gobierno de un país decidió instaurar una serie de medidas tributarias para las empresas productoras de bebidas azucaradas. Con la implementación de esta medida, se espera recaudar mayores recursos para el sector salud, disminuir el consumo de estas bebidas por los ciudadanos, quienes tendrían que pagar un costo mayor por estas.',
      'Un efecto económico NO esperado en la medida instaurada por el gobierno es que',
      ['a corto plazo la medida genere una reducción poco significativa en el número de personas con enfermedades asociadas al consumo excesivo de azúcar.',
       'a largo plazo las empresas productoras de bebidas azucaradas hagan recortes drásticos de personal para compensar el incremento de sus impuestos.',
       'el costo de las bebidas azucaradas aumente de tal forma que estos productos dejen de ser apetecidos por un número amplio de personas de escasos recursos.',
       'se reduzcan las cifras de obesidad debido al consumo de bebidas azucaradas, pero no las cifras de obesidad por el consumo de otros productos azucarados.'], 1,
      'El gobierno buscaba recaudar más y que se consumieran menos bebidas azucaradas. Que las empresas despidan trabajadores para compensar el impuesto es un efecto económico que nadie planeó y que golpea el empleo. Que suba el precio y baje el consumo era justamente lo esperado, y las otras dos hablan de efectos en salud, no económicos.',
      'La pregunta pide dos cosas a la vez: que el efecto sea económico y que no estuviera previsto. Verifica las dos.'),

    /* ═════════ 64 ═════════ */
    S('Economía y sociedad', 'SITUACIÓN', 'ctx-sit',
      'Con el propósito de mejorar la comunicación entre padres de familia y docentes de instituciones educativas, un grupo de emprendedores colombianos desarrolla la aplicación gratuita Apprendices. Mediante esta aplicación, que deben descargarse por padres y profesores, podrá compartirse información vía internet respecto al rendimiento académico de los estudiantes, próximos eventos en el colegio, pagos y planes de estudio. Asimismo, los padres podrán ver los mensajes de los profesores en los que informan sobre las tareas, las clases e incluso sobre su disponibilidad de tiempo para tener reuniones y discutir temas referentes a cada estudiante.',
      '¿Qué podría impedir que la aplicación descrita funcione en todos los colegios del país?',
      ['Que los estudiantes no tengan que asistir a clases algunos días del año.',
       'Que no haya cobertura de internet en la totalidad del territorio nacional.',
       'Que los profesores utilicen estrategias adicionales de comunicación con los padres de familia.',
       'Que los estudiantes no tengan celulares inteligentes en los cuales pueda utilizarse la aplicación.'], 1,
      'La aplicación comparte la información vía internet, así que donde no llega la señal simplemente no sirve. Los celulares de los estudiantes no importan, porque quienes la descargan son padres y profesores, y que existan otras formas de comunicación no impide que esta funcione.',
      'Identifica de qué depende técnicamente la herramienta. Si le falta eso, deja de funcionar.'),

    /* ═════════ 65 ═════════ */
    S('Organización del Estado', 'SITUACIÓN', 'ctx-sit',
      'Una entidad del Estado quiere contratar la reparación y construcción de los parques de una ciudad. Al enterarse, un alto funcionario del Estado llama a la persona encargada de escoger al mejor oferente, y le exige que contrate a una determinada empresa. El funcionario explica que contratar a esta empresa es lo más recomendable y que la empresa tiene mucha experiencia en ese tipo de construcciones; además, que la conoce de primera mano porque la dirige uno de sus familiares. La persona a cargo de la contratación no accede a la petición y la considera que puede denunciar al funcionario.',
      'A la luz de la Constitución, ¿por qué puede denunciarse al funcionario?',
      ['Por postular un oferente que, según su juicio, tiene amplia experiencia en construcción y reparación de parques.',
       'Por omitir detalles acerca de los vínculos personales que lo relacionan con la empresa de construcción que sugiere contratar.',
       'Por abuso de autoridad, pues su propósito era influir en la decisión y obtener un beneficio propio antes que un beneficio común.',
       'Por negligencia, pues permitir la contratación de una empresa distinta a la que él recomienda retrasará el inicio de las obras pactadas.'], 2,
      'El funcionario usa su cargo para exigirle a otro a quién contratar, y la empresa la dirige un familiar suyo: está poniendo el interés propio por encima del público. Eso es abuso de autoridad. No omitió el vínculo —de hecho lo mencionó—, y su recomendación no tiene nada que ver con retrasos en la obra.',
      'Distingue lo que el funcionario dijo de lo que hizo. La falta está en usar el cargo para presionar, no en la información que dio.'),

    /* ═════════ 66 ═════════ */
    S('Mecanismos de participación', 'SITUACIÓN', 'ctx-sit',
      'Un sector de la población está inconforme y no se siente representado por los partidos políticos existentes, pues los últimos cuatro gobiernos no han cumplido sus planes de desarrollo y dejaron sin resolver problemas como la falta de vías e infraestructura y la insuficiencia de escuelas públicas. Estas administraciones han sido lideradas por unos pocos partidos que por años han turnado altos cargos públicos. Por tal motivo, ese grupo de la población decidió conformar un movimiento político para presentarse a las próximas elecciones al Congreso y, en un futuro, consolidarse como un partido político reconocido.',
      'Además de la representación política que estos ciudadanos quieren obtener, a la luz de la Constitución política de Colombia, ¿a qué otro objetivo respondería la creación del nuevo partido?',
      ['Al interés de los representantes de la población inconforme de obtener curules en el Congreso y tener así un trabajo bien remunerado.',
       'A la necesidad de intervenir en las decisiones sobre la utilización de los recursos públicos y defender así los intereses personales de sus líderes.',
       'Al interés de modificar las normas actuales para reducir el número de partidos políticos y disminuir así la ineficiencia del Estado.',
       'A la necesidad de reducir la concentración del poder en los partidos políticos tradicionales y asegurar así la pluralidad en la toma de decisiones públicas.'], 3,
      'El problema que describe el texto es que unos pocos partidos se han turnado el poder durante años. Un partido nuevo rompe esa concentración y amplía las voces que participan, que es justamente el pluralismo que la Constitución busca proteger. Las opciones que hablan de sueldos o de intereses personales de los líderes contradicen el sentido de la representación.',
      'Cuando la pregunta dice «a la luz de la Constitución», descarta los motivos egoístas: busca el principio democrático en juego.'),

    /* ═════════ 67 ═════════ */
    S('Organización del Estado', 'SITUACIÓN', 'ctx-sit',
      'De acuerdo con el artículo 11 de la Constitución Política de Colombia de 1991, que forma parte del capítulo de los derechos fundamentales, el derecho a la vida es inviolable y, en consecuencia, no habrá pena de muerte.',
      'Si el Congreso de la República expide un proyecto de ley que autoriza la pena de muerte para los delitos graves, ¿cuál de las siguientes afirmaciones sobre este proyecto de ley es coherente con lo establecido en la Constitución?',
      ['Como es una norma expedida después de la Constitución Política de 1991, sería aplicable solo para los nuevos delitos cometidos después de la expedición de la ley.',
       'Al tratarse de una norma que modifica la Constitución, es válido y de obligatorio cumplimiento, porque las nuevas priman sobre las antiguas.',
       'Como es una ley expedida después de la Constitución política de 1991, sería aplicable para todos los casos, incluso para los delitos cometidos antes de la expedición de la ley.',
       'Al tratarse de una ley que va en contravía de lo establecido en la Constitución respecto a un derecho fundamental, no podría aprobarse a menos que se modifique la Constitución.'], 3,
      'La Constitución está por encima de las leyes: una ley que la contradiga no vale por el solo hecho de ser posterior. Como el artículo 11 prohíbe expresamente la pena de muerte, autorizarla exigiría antes reformar la Constitución. Las opciones que dan por válida la ley invierten esa jerarquía.',
      'Recuerda el orden: la Constitución manda sobre la ley. Una ley nueva no deroga la Constitución por ser más reciente.'),

    /* ═════════ 68 ═════════ */
    S('Economía y sociedad', 'SITUACIÓN', 'ctx-sit',
      'El consumo excesivo de alcohol se ha asociado con algunas enfermedades, trastornos psicológicos y con el aumento de la violencia intrafamiliar, razón por la cual en algunos lugares del mundo se han implementado diferentes medidas para reducir sus niveles de consumo. En Estados Unidos, entró en vigencia en 1920 una ley denominada "Ley seca". Esta ley prohibía la venta, importación, exportación, fabricación y transporte de bebidas alcohólicas en todo el territorio estadounidense, lo que generó la creación de grupos ilegales que se dedicaron a su distribución. En Colombia, en la década de 1990 se aumentaron significativamente los impuestos a la producción, comercialización, exportación y consumo de este tipo de bebidas, lo que a su vez aumentó las transferencias de dinero a municipios y departamentos.',
      'Un efecto NO esperado por las autoridades colombianas al incrementar los impuestos de bebidas alcohólicas fue',
      ['el aumento en la inversión regional y en el desarrollo económico, social y educativo del país.',
       'la disminución de los ingresos de los distribuidores de licor y de los casos de violencia intrafamiliar.',
       'el aumento del contrabando y de los índices de corrupción en las zonas comerciales fronterizas.',
       'la disminución progresiva de patologías derivadas del consumo de bebidas alcohólicas.'], 2,
      'El texto trae a propósito el ejemplo de la Ley seca, donde prohibir generó grupos ilegales de distribución. Con los impuestos altos pasa algo parecido: aparece el contrabando y con él la corrupción. Más recaudo para las regiones y menos consumo y enfermedades era exactamente lo que se buscaba.',
      'Cuando un texto incluye un antecedente de otro país, casi siempre está anticipando el efecto no deseado que te van a preguntar.'),

    /* ═════════ 69 ═════════ */
    S('Interpretación de perspectivas', 'SITUACIÓN', 'ctx-sit',
      'Durante una conferencia, un abogado señala que el derecho a la información es inherente e intransferible al ser humano, y que herramientas como Internet y las nuevas tecnologías han facilitado el ejercicio de este derecho, pues permite acceder a todo tipo de información muy rápido. Un profesor de Sociales, quien asistió a la conferencia, le dice al experto que internet ha permitido todo tipo de abusos como el matoneo en redes sociales, la difusión de mentiras o calumnias y las violaciones a los derechos de autor. Al usar internet, la gente no verifica la información que encuentra y quienes cometen abusos no se castigan.',
      '¿Cuál de las siguientes afirmaciones apoya lo que dice el profesor de Sociales?',
      ['Internet ha simplificado la manera como las personas investigan sobre asuntos que les interesan.',
       'Mucha de la información que circula en internet es falsa o es producto del robo de ideas a otras personas.',
       'Internet permite acceder a información de cualquier parte del mundo de manera ágil y muchas veces gratuita.',
       'La información que se puede divulgar a través de Internet puede contrastarse fácilmente para establecer su veracidad.'], 1,
      'El profesor denuncia dos cosas: mentiras que circulan y violaciones a los derechos de autor. La afirmación que habla de información falsa y de robo de ideas recoge exactamente esas dos quejas. Las que resaltan rapidez, gratuidad o facilidad de verificación respaldan al abogado, no a él.',
      'Cuando dos personas discuten, primero decide de qué lado está la afirmación y solo después revisa si es verdadera.'),

    /* ═════════ 70 ═════════ */
    S('Interpretación de perspectivas', 'SITUACIÓN', 'ctx-sit',
      'Una fábrica cercana a un pueblo lleva muchos años produciendo mercancías que se exportan a diversos países. Debido al éxito que ha tenido, ha aumentado su tamaño a lo largo del tiempo. El crecimiento de la fábrica ha ido de la mano del aumento del uso de los recursos hídricos y de la contaminación que producen. Recientemente, un grupo de ciudadanos, con la consigna "No hay futuro", ha salido a protestar por el impacto negativo que tiene la fábrica en el medio ambiente. En contravía de estas protestas, otros ciudadanos han señalado que la fabricación no solo es la fuente principal de empleo en el municipio, sino que ha colaborado activamente en la creación de programas sociales y culturales que han beneficiado a la población.',
      'El grupo que protesta con la consigna "No hay futuro" considera que entre todas las bondades o problemas que genera la fábrica se le debe prestar atención especial a',
      ['lo político.', 'lo ambiental.', 'lo económico.', 'lo social.'], 1,
      'Ese grupo sale a la calle por el impacto negativo de la fábrica en el medio ambiente: el uso del agua y la contaminación. El empleo y los programas sociales son los argumentos del otro grupo, no los suyos.',
      'Cuando hay dos grupos enfrentados, asegúrate de responder por el que nombra la pregunta y no por el contrario.'),

    /* ═════════ 71 ═════════ */
    S('Interpretación de perspectivas', 'SITUACIÓN', 'ctx-sit',
      'En un edificio se quieren hacer arreglos en la fachada para que este se vea mejor. Un primer grupo de vecinos propone instalar paneles metálicos para que el edificio se vea más moderno, y presentan una propuesta relativamente costosa. Un segundo grupo quiere que se pinte y se resane lo estrictamente necesario, de manera que la inversión sea pequeña y mejore, sin embargo, el aspecto del edificio. Un tercer grupo propone reformar totalmente la fachada para que el edificio se vea completamente renovado, y, para eso, considera que debe invertirse todo el dinero que sea necesario.',
      'Sobre las propuestas es correcto afirmar que',
      ['no todos los grupos están de acuerdo en que deben hacerse un arreglo de la fachada del edificio.',
       'el segundo grupo está de acuerdo con el tercero en que debe renovarse completamente la fachada del edificio.',
       'el segundo grupo está de acuerdo con el primero en que debe hacerse una inversión importante para arreglar la fachada del edificio.',
       'el primer grupo está de acuerdo con el tercero en que debe hacerse una inversión relativamente grande para el arreglo de la fachada del edificio.'], 3,
      'El primer grupo propone algo relativamente costoso y el tercero está dispuesto a invertir todo lo necesario: los dos aceptan gastar bastante. El segundo grupo quiere lo contrario, una inversión pequeña, así que no coincide con ninguno de los dos. Y los tres sí están de acuerdo en que hay que arreglar la fachada.',
      'Arma una tabla mental con cuánto quiere gastar cada grupo. La coincidencia salta a la vista.'),

    /* ═════════ 72 ═════════ */
    S('Conflicto armado y memoria', 'SITUACIÓN', 'ctx-sit',
      'De acuerdo con cifras del informe ¡Basta ya!, del Centro de Memoria Histórica, de las masacres ocurridas en Colombia entre 1985 y 2012, el 56,6 % fueron cometidas por grupos paramilitares, el 17,3 % por las guerrillas, el 8 % por la fuerza pública y el 14,9 % por grupos armados no identificados. Se calcula que hubo 11.751 víctimas en estas masacres. En el prólogo del informe donde se publicó esa información, se indica que "Del conjunto de muertes violentas ocurridas en el país entre 1958 y 2012, por lo menos 220.000 tienen su origen en el conflicto armado, y de estas el 80 % han sido civiles inermes". Suponga que un docente, en un curso de historia de Colombia, se apoya en estas cifras para hacer la siguiente afirmación: "Si los paramilitares cometieron el mayor número de masacres, en el paramilitarismo debemos buscar el origen y las causas principales de nuestro conflicto histórico, en el que los más afectados hemos sido los civiles".',
      'El uso que el docente hace de las cifras de la información ¡Basta ya! en su afirmación es',
      ['inadecuado, pues las cifras no se refieren a los fenómenos que dieron origen al conflicto armado.',
       'acertado, pues el conflicto armado en Colombia ha impactado principalmente a la población civil.',
       'justo, pues es claro que la responsabilidad principal recae en quien más crímenes ha cometido.',
       'desproporcionado, pues las cifras sugieren responsabilidad de grupos distintos a los paramilitares en los inicios del conflicto.'], 0,
      'Las cifras de masacres cubren de 1985 a 2012, pero el conflicto que se quiere explicar arranca en 1958. Con datos de las últimas décadas no se puede concluir nada sobre su origen: el docente salta de «quién cometió más masacres en un periodo» a «dónde está la causa de todo el conflicto», y ese salto no lo autorizan los números.',
      'Revisa siempre el periodo que cubren las cifras. Si la conclusión habla de un momento que los datos no incluyen, el uso es indebido.'),

    /* ═════════ 73 ═════════ */
    S('Interpretación de perspectivas', 'FRAGMENTO', 'ctx-sit',
      'El siguiente fragmento forma parte de una noticia publicada en el periódico El Espectador acerca de Uber, una aplicación para celulares que permite a conductores de vehículos particulares prestar servicios de transporte a pasajeros en diferentes ciudades. La noticia contiene las respuestas de una persona durante una entrevista en la que se le preguntó por su participación en un incidente ocurrido en la ciudad de Bogotá: "No atacamos, condujimos a un vehículo particular que estaba prestando un servicio público a una estación de policía. El gremio está un poquito enojado porque el Gobierno ha permitido el delito de la ilegalidad y la piratería (...), nuestro trabajo está siendo rechazado y se olvida que somos pioneros en el transporte público individual (...). Si nosotros tenemos que actuar de una manera errónea, pues nos toca a ver si hacen algo (...), sé que los que me escuchan me dan la razón por estar alterado porque Uber es un delito".',
      'De acuerdo con la información anterior, ¿cuál de las siguientes fue la persona entrevistada?',
      ['Un conductor de mototaxi, porque ellos son los pioneros en el transporte público individual.',
       'Un conductor de camión, porque muestra que está en paro contra los altos fletes del Gobierno.',
       'Un conductor de taxi, porque defiende el transporte público individual frente a la ilegalidad de otros tipos de transporte.',
       'Un conductor de bus, porque defiende el transporte colectivo frente al individual de otros tipos de transporte.'], 2,
      'Quien habla se presenta como pionero del transporte público individual y legal, y acusa a Uber de piratería: ese es el reclamo característico del gremio de taxistas. El bus es transporte colectivo, el camión mueve carga y el mototaxi opera en la informalidad que el entrevistado justamente critica.',
      'Ubica el gremio por lo que defiende y por a quién acusa. Aquí defiende lo legal e individual y acusa a lo informal.'),

    /* ═════════ 74 ═════════ */
    S('Geografía y territorio', 'SITUACIÓN', 'ctx-sit',
      'Uno de los principales problemas relacionados con el fenómeno del calentamiento global es la gran emisión de gases contaminantes que producen los motores de vehículos que utilizan combustibles fósiles (petróleo crudo, carbón o gas natural). La utilización de estos motores genera altas emisiones de dióxido de carbono (CO2), gas que aumenta el efecto invernadero. En consecuencia, en una ciudad de Colombia se han adelantado campañas para incentivar a la población a hacer uso de la bicicleta como medio de transporte que sustituye el uso de automóviles.',
      'Una condición que obstaculizaría la efectividad de la campaña, en cuanto a sus fines, es',
      ['el incremento en la oferta de otros medios de transporte no contaminantes.',
       'la alta volatilidad en los precios de los combustibles fósiles.',
       'el desinterés de la ciudadanía por el uso de medios ecológicos de transporte.',
       'la baja oferta actual de vehículos que usan combustibles fósiles.'], 2,
      'La campaña depende por completo de que la gente quiera cambiar el carro por la bicicleta; si no hay interés, no funciona. Que aparezcan otros transportes limpios o que haya menos carros de combustible fósil van en la misma dirección del objetivo, que es reducir las emisiones.',
      'Fíjate en el fin último de la campaña: reducir emisiones. Lo que obstaculiza es lo que impide ese fin, no lo que compite con el medio.'),

    /* ═════════ 75 ═════════ */
    S('Interpretación de perspectivas', 'SITUACIÓN', 'ctx-sit',
      'Se ha desatado un polémico debate en torno a los cultivos y alimentos genéticamente alterados, también conocidos como transgénicos. El debate genera en los ciudadanos desconfianza hacia este tipo de alimentos. En este contexto, el gerente general de una empresa de transgénicos escribe el siguiente comunicado de prensa: "Investigaciones recientes han demostrado que el consumo de soya transgénica, en lugar de aumentar los riesgos de cáncer, como muchos afirman, trae cientos de beneficios para la salud de los consumidores, y para la economía de los productores dadas las mejoras genéticas que se han realizado a las semillas".',
      'Teniendo en cuenta la información anterior, en relación con la confiabilidad de las afirmaciones del gerente es correcto afirmar que estas',
      ['son confiables, porque están respaldadas por estudios científicos realizados en los últimos años por académicos reconocidos.',
       'son confiables, porque fueron formuladas por el gerente general de una empresa que por su naturaleza podría catalogarse como imparcial.',
       'son poco confiables, porque fueron formuladas en nombre de una empresa que, con la declaración, probablemente busca salvaguardar sus intereses económicos.',
       'son poco confiables, porque investigaciones recientes han mostrado que los alimentos modificados son perjudiciales para la salud.'], 2,
      'Quien habla dirige una empresa de transgénicos y se beneficia directamente de que la gente confíe en ellos: es parte interesada. Además menciona investigaciones sin decir cuáles, así que tampoco hay respaldo verificable. Llamar imparcial a un gerente de la industria es justo lo contrario de lo que ocurre.',
      'Antes de creer una afirmación, pregúntate quién gana si le creemos. Esa es la prueba de imparcialidad.'),

    /* ═════════ 76 ═════════ */
    S('Conflicto armado y memoria', 'FRAGMENTO', 'ctx-sit',
      'En un periódico de la Universidad Nacional Autónoma de México, se publicó el siguiente fragmento de una entrevista a una mujer colombiana: "La situación sigue siendo grave en Colombia. La guerra que venimos padeciendo ha provocado una reconcentración de la tierra y de la riqueza. Hay nuevos propietarios en el campo, principalmente grandes latifundistas y narcotraficantes. Además, temo que detrás de las violaciones a los Derechos Humanos que sufren las mujeres colombianas haya políticas de exterminio encubiertas. En medio de todo este drama, hemos seguido haciendo este trabajo. Nuestro principal objetivo es pasar de ser mujeres desplazadas a ciudadanas plenas. Logramos dejar dos grupos importantes de mujeres en posesión de fincas conseguidas a través de la reforma agraria, con sus proyectos andando. También conseguimos que varias líderes amenazadas contaran con programas de protección y acompañamiento de brigadas. Esto me reportó una mínima tranquilidad para poder salir del país". Después de leer la entrevista, un académico mexicano afirma que seguramente esta mujer es una líder de una organización social y que eso explicaría la labor que ha realizado.',
      '¿Qué información presentada en la entrevista le permitiría a este académico decir que la mujer es una líder social?',
      ['Su opinión sobre el contexto de conflicto armado en Colombia.',
       'Su condición de mujer colombiana que vive fuera del país.',
       'Su trabajo para conseguir protección a mujeres y recuperación de propiedades rurales para ellas.',
       'Su cercanía con los nuevos propietarios rurales en Colombia, incluidos latifundistas y narcotraficantes.'], 2,
      'Ella cuenta logros concretos y colectivos: dejó a dos grupos de mujeres con fincas y proyectos andando, y consiguió protección para líderes amenazadas. Ese trabajo organizado a favor de otras es lo que define a una lideresa social. Opinar sobre el conflicto o vivir fuera del país no lo demuestra, y a los nuevos propietarios los denuncia, no los acompaña.',
      'El liderazgo social se prueba con acciones hechas para otros, no con opiniones. Busca los verbos «logramos» y «conseguimos».'),
  ],
};

/* La ruta: quince cuestionarios cortos, agrupados por tema. */
const CUESTIONARIOS = {
  soc: [
    { tema: 'Constitución y derechos', items: [
      { id: 'soc-33', titulo: 'Derechos y dignidad',            qs: [4, 16, 20],     tipo: 'Situación' },
      { id: 'soc-34', titulo: 'Diversidad cultural y trabajo',  qs: [22, 23, 30],    tipo: 'Situación' },
    ]},
    { tema: 'Mecanismos de participación', items: [
      { id: 'soc-35', titulo: 'Partidos y participación',       qs: [3, 14, 35],     tipo: 'Situación' },
    ]},
    { tema: 'Organización del Estado', items: [
      { id: 'soc-36', titulo: 'Reformas, cargos y jerarquía',   qs: [17, 34, 36],    tipo: 'Situación' },
    ]},
    { tema: 'Conflicto armado y memoria', items: [
      { id: 'soc-37', titulo: 'Víctimas, cifras y liderazgo',   qs: [26, 41, 45],    tipo: 'Situación' },
    ]},
    { tema: 'Geografía y territorio', items: [
      { id: 'soc-38', titulo: 'Recursos y territorio',          qs: [8, 12, 13, 15], tipo: 'Situación' },
      { id: 'soc-39', titulo: 'Agua, fronteras y movilidad',    qs: [25, 31, 43],    tipo: 'Situación' },
    ]},
    { tema: 'Economía y sociedad', items: [
      { id: 'soc-40', titulo: 'Desarrollo y mercado',           qs: [0, 2, 6],       tipo: 'Situación' },
      { id: 'soc-41', titulo: 'Políticas públicas y empleo',    qs: [27, 28, 29],    tipo: 'Situación' },
      { id: 'soc-42', titulo: 'Impuestos y efectos no previstos', qs: [32, 33, 37],  tipo: 'Situación' },
    ]},
    { tema: 'Historia de Colombia', items: [
      { id: 'soc-43', titulo: 'Colonia y narcotráfico',         qs: [9, 24],         tipo: 'Situación' },
    ]},
    { tema: 'Interpretación de perspectivas', items: [
      { id: 'soc-44', titulo: 'Fuentes y testimonios',          qs: [1, 10, 21],     tipo: 'Situación' },
      { id: 'soc-45', titulo: 'Comparar argumentos',            qs: [5, 11, 18],     tipo: 'Situación' },
      { id: 'soc-46', titulo: 'Cultura, religión y política',   qs: [7, 19, 38],     tipo: 'Situación' },
      { id: 'soc-47', titulo: 'Intereses en disputa',           qs: [39, 40, 42, 44], tipo: 'Situación' },
    ]},
  ],
};
