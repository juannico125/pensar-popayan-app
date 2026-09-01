/* Sociales y Ciudadanas · rescate de F1 y F2 · lote 2026-B
 *
 * ────────────────────────────────────────────────────────────────────────────
 * POR QUÉ EXISTE ESTE ARCHIVO
 *
 * Al auditar los ocho cuadernillos contra la base se descubrió que trece
 * preguntas de F1 («Pato Donald») y F2 («Bugs Bunny») nunca se cargaron.
 *
 * La cabecera de `sociales-2026b.js` afirma que «14 de las 46 de F2
 * resultaron idénticas a preguntas de F1» y las da por descartadas. Eso es
 * falso: al comparar las dos listas pregunta por pregunta, el traslape real
 * entre F1 y F2 es prácticamente nulo — son formularios distintos. El único
 * duplicado verdadero está dentro de F2 (la 45 se repite en la 74, ambas
 * sobre el diccionario de Fray Alonso de Molina).
 *
 * Es decir: esas trece no se descartaron por repetidas, se perdieron en la
 * transcripción y el comentario las dio por resueltas. Este archivo las
 * recupera.
 *
 *   De F1 faltaban: 31, 34, 46, 65, 68, 69, 70, 74, 75 y 76
 *   De F2 faltaban: 50, 51 y 52
 *
 * Cada una se verificó ausente con tres búsquedas distintas (frase del
 * contexto, del enunciado y de las opciones) antes de darla por faltante.
 * ────────────────────────────────────────────────────────────────────────────
 *
 * Los cuadernillos NO traen hoja de respuestas. Las claves las determinó el
 * modelo leyendo cada situación, y por eso se cargan con
 * `clave_origen = 'modelo'`. Dos quedan en confianza media:
 *
 *   · F1-46 (loncheras saludables) — «conseguir los mismos alimentos» frente a
 *     «encontrar alimentos diferentes»: la redacción del original hace que las
 *     dos opciones se puedan defender según cómo se lea el propósito del
 *     programa.
 *   · F1-70 (embarazo adolescente) — el texto atribuye la diferencia al acceso
 *     a zonas apartadas, pero también menciona presupuesto, así que la opción
 *     sobre voluntad política no es descabellada.
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
    /* ═════════ F1 · 31 ═════════ */
    S('Constitución y derechos', null, null, null,
      '¿En cuál de las siguientes situaciones se respetan los derechos del medio ambiente?',
      ['Debido al deterioro del agua en un país, un presidente decide ponerles como requisito a las empresas petroleras del lugar el uso de tecnologías limpias en los procedimientos que realizan.',
       'Debido al incremento de la población en una ciudad, un alcalde decide construir nuevas viviendas en los predios cercanos a algunos de los humedales protegidos de la zona.',
       'Debido al déficit energético de un país, un presidente decide saltarse varios protocolos de seguridad ambiental con tal de que las plantas nucleares produzcan más energía.',
       'Debido al aumento de la población en un municipio, el alcalde decide construir grandes y amplias vías sobre algunos lugares emblemáticos por su fauna y flora.'], 0,
      'Exigirle a las petroleras tecnologías limpias es poner el cuidado del agua por encima de la conveniencia de la industria: ahí el derecho al ambiente sano se protege. En las otras tres, el ambiente es justamente lo que se sacrifica — humedales, protocolos de seguridad y hábitats de fauna y flora.',
      'Lee cada opción preguntándote qué se sacrifica. Si lo que cede es el ambiente, esa no puede ser la respuesta.'),

    /* ═════════ F1 · 34 ═════════ */
    S('Constitución y derechos', 'FRAGMENTO', 'ctx-sit',
      'Una académica colombiana, a propósito de la participación de las mujeres en la justicia internacional, señala lo siguiente: "En total, solo el 17 % de los miembros de las cortes internacionales son mujeres. De igual forma, 19 de los 52 procedimientos especiales de la ONU no han sido jamás liderados por una mujer; en el Comité de Derechos Humanos de la ONU, solo 5 de sus 18 miembros son mujeres y en el comité de Derechos Económicos, Sociales y Culturales, solo 3 de los 18 miembros son mujeres. Por eso, cuando algunas mujeres sugieren que ya estamos en condiciones de llegar a estos cargos sin que entre a operar la paridad o un régimen de cuotas [normatividad que busca garantizar la presencia de un porcentaje mínimo de personas con ciertas características en una entidad o cargo], están juzgando a partir de su propia condición y no a partir de la estadística. Al menos, en el espacio de la justicia internacional, estamos muy lejos de jugar bajo unas reglas de juego justas". (Tomado de: Borda, S. (2016). La justicia internacional no es negocio de mujeres. Revista Arcadia)',
      'El análisis presentado por la académica se fundamenta en el concepto de',
      ['comunidad internacional.', 'meritocracia laboral.', 'equidad de género.', 'desigualdad social.'], 2,
      'Todas las cifras que cita comparan la presencia de mujeres frente a la de hombres en los mismos cargos, y su conclusión es que las reglas de juego no son justas entre unas y otros. Ese desequilibrio entre géneros es lo que nombra la equidad de género. La desigualdad social es más amplia y no explica por qué mide solo por sexo.',
      'Fíjate en qué variable usa el autor para comparar. Si todas las cifras separan hombres de mujeres, el concepto es de género.'),

    /* ═════════ F1 · 68 ═════════ */
    S('Constitución y derechos', 'FRAGMENTO', 'ctx-sit',
      '"La Declaración Universal de los Derechos Humanos establece que los seres humanos nacen libres e iguales en dignidad y derechos y que tienen derecho a la vida, la libertad y la seguridad de su persona, a la libertad de expresión, a no ser esclavizados, a un juicio justo y a la igualdad ante la ley. También a la libertad de circulación, a una nacionalidad, a contraer matrimonio y fundar una familia así como a un trabajo y a un salario igualitario". (Tomado y adaptado de: Naciones Unidas, ¿Qué son los derechos humanos?)',
      'De acuerdo con el fragmento anterior, ¿cuál de las siguientes acciones NO está directamente relacionada con la aplicación de los Derechos Humanos?',
      ['Eliminar las condiciones que causan la discriminación racial o que contribuyen a perpetuarla.',
       'Defender la igualdad de oportunidades laborales para mujeres y hombres.',
       'Procurar condiciones de vida digna en los establecimientos carcelarios.',
       'Promover normas de comportamiento que garanticen la convivencia ciudadana.'], 3,
      'Las otras tres se conectan con derechos que el fragmento nombra: la igualdad ante la ley, el trabajo con salario igualitario y la dignidad de la persona incluso privada de la libertad. Las normas de convivencia son reglas de trato social que un Estado puede promover, pero no aparecen en la lista como un derecho de la persona.',
      'En este tipo de pregunta, empareja cada opción con un derecho del texto. La que se quede sin pareja es la respuesta.'),

    /* ═════════ F1 · 75 ═════════ */
    S('Constitución y derechos', 'FRAGMENTO', 'ctx-sit',
      'El 10 de diciembre de 1948, la Asamblea General de las Naciones Unidas aprobó y proclamó la Declaración Universal de Derechos Humanos. En el segundo artículo de este documento se estableció que: <br><br>1. Toda persona tiene todos los derechos y libertades proclamados en esta Declaración, sin distinción alguna de raza, color, sexo, idioma, religión, opinión política o de cualquier otra índole, origen nacional o social, posición económica, nacimiento o cualquier otra condición.<br><br>2. Además, no se hará distinción alguna fundada en la condición política, jurídica o internacional del país o territorio de cuya jurisdicción dependa una persona, tanto si se trata de un país independiente, como de un territorio bajo administración fiduciaria, no autónoma o sometido a cualquier otra limitación de soberanía.',
      '¿Cuál de los siguientes es un supuesto que se deriva de este segundo artículo de la Declaración de los Derechos Humanos?',
      ['Los Derechos Humanos son aplicables solo si no van en contra de la soberanía del país o territorio al que pertenece una persona.',
       'Los Derechos Humanos son aplicables a todas las personas que hayan declarado oficialmente que están de acuerdo con ellos.',
       'Los Derechos Humanos se aplican siempre y cuando no vayan en contra de las leyes del país o territorio al que pertenezca la persona.',
       'Los Derechos Humanos son aplicables a todos los individuos independientemente de sus características socioculturales.'], 3,
      'El artículo enumera todo aquello que NO puede servir para excluir a alguien: raza, sexo, idioma, religión, opinión, origen, posición económica. Es decir, los derechos valen para cualquiera sin importar de dónde venga ni cómo viva. Las opciones que los condicionan a la soberanía, a las leyes locales o a una aceptación previa dicen justo lo contrario.',
      'Cuando un artículo lista condiciones prohibidas de distinción, lo que afirma es universalidad: aplica a todos sin excepción.'),

    /* ═════════ F1 · 69 ═════════ */
    S('Constitución y derechos', 'FRAGMENTO', 'ctx-sit',
      'Colombia, como país megadiverso, pluriétnico y multicultural, tiene una alta responsabilidad con la conservación del patrimonio natural e inmaterial. Para abordar esta tarea, es necesario crear un sistema de áreas protegidas o reservas naturales, que incluya ejemplos representativos de cada uno de los ecosistemas del país y ofrezca un manejo efectivo de los recursos naturales disponibles y los grupos humanos que los habitan. (Adaptado de: Departamento Nacional de Planeación, DNP, 2010)<br><br>Siguiendo los lineamientos de la política anterior, un grupo de científicos propone crear un área protegida con el objetivo de evitar el deterioro de un ecosistema vulnerable, producto de la explotación desmedida de los recursos naturales que alberga. La nueva reserva, ubicada en territorios históricamente ocupados por pueblos indígenas, sería administrada exclusivamente por un grupo de profesionales e investigadores y estaría encaminada a la protección de los recursos naturales disponibles y el uso de estos desde una perspectiva sostenible a largo plazo.',
      'De acuerdo con la información presentada anteriormente, ¿cuál de los siguientes aspectos NO es tenido en cuenta por el grupo de científicos al formular su propuesta de conservación?',
      ['El deber constitucional de los ciudadanos de proteger las riquezas naturales de la nación.',
       'El derecho de las comunidades indígenas a participar en las decisiones que afectan el manejo de sus territorios.',
       'La formación académica y experticia de las personas encargadas de administrar la reserva.',
       'El impacto que pueda tener la academia en el cuidado de los recursos naturales del país.'], 1,
      'La reserva se ubica en territorios ocupados históricamente por pueblos indígenas, pero la propuesta dice que la administrarían «exclusivamente» profesionales e investigadores. Esa palabra deja a las comunidades por fuera de las decisiones sobre su propio territorio. Los otros tres aspectos sí están contemplados: proteger las riquezas naturales, la experticia de quienes administran y el papel de la academia.',
      'La palabra «exclusivamente» casi siempre señala a quién se está excluyendo. Pregúntate quién más debería estar y no está.'),

    /* ═════════ F2 · 51 ═════════ */
    S('Constitución y derechos', 'SITUACIÓN', 'ctx-sit',
      'En una ciudad hay algunos barrios inundados, producto de las fuertes lluvias; esto ha provocado desplazamientos internos, y cientos de personas han perdido sus casas con todas sus pertenencias. Ante esta situación, los funcionarios de la alcaldía han decidido donar un día de su salario para que, con estos recursos, se apoye a las personas que han sido afectadas por el fenómeno natural.',
      'De acuerdo con la Constitución Política de Colombia, ¿en cuál deber ciudadano se ubica la acción de los funcionarios de la alcaldía?',
      ['Respetar los derechos ajenos y no abusar de los propios.',
       'Obrar conforme al principio de solidaridad social.',
       'Propender por el mantenimiento de la paz en las comunidades.',
       'Participar en la vida política, cívica y comunitaria del país.'], 1,
      'Los funcionarios ceden parte de su salario para ayudar a damnificados que no conocen: dar de lo propio para responder ante una calamidad ajena es exactamente el principio de solidaridad social. No están defendiendo un derecho, ni mediando en un conflicto, ni participando en política.',
      'Cuando alguien entrega algo suyo para socorrer a otro ante una calamidad, el deber constitucional en juego es la solidaridad.'),

    /* ═════════ F1 · 46 ═════════ */
    S('Economía y sociedad', 'SITUACIÓN', 'ctx-sit',
      'Diferentes estudios han demostrado que los hijos de padres obesos tienden a elegir alimentos ricos en grasa y a evitar el consumo de frutas y vegetales. Ante este escenario, asesores de algunos organismos internacionales han propuesto que se distribuyan, durante algunos meses, "loncheras saludables" en los hogares. El propósito de la iniciativa es enseñarles a los padres cómo deberían alimentar a sus hijos. El argumento a favor de esta ayuda temporal es que, una vez entrenados, los padres seguirán alimentando a sus hijos de manera saludable.',
      'Una vez finalice el programa, ¿qué impediría que los padres sigan alimentando a sus hijos de forma saludable?',
      ['Que les sea fácil enseñarles a sus hijos a comer alimentos saludables.',
       'Que les sea difícil conseguir los mismos alimentos que estaban en las "loncheras saludables".',
       'Que les sea fácil a ellos adoptar buenos hábitos de alimentación.',
       'Que les sea difícil encontrar alimentos diferentes a los que estaban en las "loncheras saludables".'], 1,
      'El programa entrega los alimentos y enseña a usarlos, pero al terminar los padres tienen que comprarlos ellos mismos. Si no logran conseguir esos alimentos, el aprendizaje no les sirve de nada. Las dos opciones que empiezan con «que les sea fácil» describen facilidades, no obstáculos, y no encontrar alimentos distintos no estorba: los que ya conocen bastan.',
      'La pregunta busca un obstáculo. Descarta de entrada todo lo que suene a facilidad o a ventaja.',
      'media'),

    /* ═════════ F1 · 70 ═════════ */
    S('Economía y sociedad', 'FRAGMENTO', 'ctx-sit',
      '"Hasta hace pocos años las estadísticas mostraban que en Estados Unidos aproximadamente un tercio de las adolescentes quedaban embarazadas. Las cifras de una organización reconocida en la materia indicaron que para 2010 el número de embarazadas adolescentes fue menor del 25 %. Y la tendencia ha seguido el mismo curso ya que los datos preliminares de 2013 sugieren una reducción del 22 % con respecto a la tasa de nacimientos desde 2010. De acuerdo con el Instituto Guttmacher, una organización no gubernamental que hace investigaciones sobre salud sexual y reproductiva, la clave está en las exitosas campañas para promover un mayor y mejor uso de anticonceptivos. En contraste con la tendencia a la baja en EE. UU., un informe elaborado por el Fondo de Población de las Naciones Unidas (UNFPA) en 2013 indicó que el embarazo adolescente ha registrado un aumento en América Latina en los últimos años, aunque varios países de la región han invertido presupuesto y los gobiernos se han preocupado por el asunto, en zonas de difícil acceso, lejos de centros urbanos ha sido difícil adelantar las campañas necesarias para combatir el fenómeno. En efecto, cada vez hay más embarazos en adolescentes en la región debido a la pobreza, la desigualdad de género y a la falta de acceso a los servicios en algunas zonas apartadas". (Tomado y adaptado de: BBC Mundo, 2014)',
      'Teniendo en cuenta la anterior información, ¿cuál de los siguientes factores puede explicar la diferencia entre las cifras de embarazo adolescente en Estados Unidos y América Latina?',
      ['La adecuada cobertura en seguridad social en los países de América Latina para todos los estratos.',
       'La menor voluntad política de los gobernantes en América Latina, lo cual impide invertir presupuesto para combatir la problemática.',
       'La discriminación hacia las mujeres y la violencia de género que prevalecen en Estados Unidos.',
       'La mejor comunicación y acceso a zonas apartadas en Estados Unidos, lo cual permite la efectividad de las campañas en ese país.'], 3,
      'El texto atribuye el éxito estadounidense a unas campañas que funcionaron, y explica que en América Latina esas mismas campañas no llegan a las zonas de difícil acceso. La diferencia está entonces en poder llegar o no con la campaña. El propio texto descarta la falta de voluntad política, porque dice que varios países sí invirtieron presupuesto.',
      'Cuando el texto niega explícitamente una explicación, esa opción queda descartada aunque suene razonable.',
      'media'),

    /* ═════════ F2 · 52 ═════════ */
    S('Economía y sociedad', 'FRAGMENTO', 'ctx-sit',
      'Octavio no puede moverse. Una enfermedad degenerativa lo mantiene postrado en una silla de ruedas en una villa, un asentamiento urbano informal de los más grandes de Buenos Aires, Argentina. Para Octavio, el barrio es su peor enemigo porque las ambulancias que deben trasladarlo al tratamiento que realiza se niegan a entrar en sus callejuelas. No entran para ayudar a Octavio ni a ningún otro vecino. Dicen que los asaltan, se sienten inseguros. Por eso desde hace dos años funciona la Central de Emergencias Villeras. Cinco vehículos recorren 20 asentamientos de la capital argentina para llegar allí donde el Estado no llega. La Central de Emergencias fue creada por vecinos y vecinas que se cansaron de esperar y estudiaron enfermería y conducción de ambulancias. Hoy atienden los llamados que le llegan desde la villa. La mayor parte de los viajes de estas ambulancias son programados, como el de Octavio, pero también atienden emergencias. Ha sido una cuestión de supervivencia. Los chóferes y las enfermeras viven en la villa y conocen cada metro del laberinto de calles donde trabajan. El sistema de emergencias se sostiene gracias a 500 personas, que trabajan cada día con una lógica que busca cambiar la política del reclamo por la de la acción, no recibe ayuda de sectores privados ni del Estado, y se financia con fiestas, rifas y otros proyectos que permiten comprar medicamentos y equipos. (Tomado y adaptado de: Molina, F. (2017). Las ambulancias villeras salvan vidas en Argentina. El País)',
      'Aplicar en otra ciudad la iniciativa descrita requeriría',
      ['la asistencia del Estado y sus funcionarios para satisfacer las demandas de servicios de salud.',
       'la participación solidaria y organizada de la comunidad en proyectos autónomos.',
       'la inversión económica de la empresa privada para apoyar proyectos comunitarios.',
       'la donación, por parte de hospitales y clínicas, de los equipos médicos necesarios.'], 1,
      'La Central la crearon los propios vecinos: estudiaron enfermería, manejan las ambulancias y se financian con rifas y fiestas. El texto subraya que no recibe ayuda del Estado ni de privados. Replicarla exige entonces esa misma organización comunitaria, no el apoyo que la iniciativa justamente no tiene.',
      'Si el texto aclara de dónde NO viene el apoyo, ahí te está diciendo cuál es el verdadero motor de la iniciativa.'),

    /* ═════════ F1 · 65 ═════════ */
    S('Interpretación de perspectivas', 'FRAGMENTO', 'ctx-sit',
      'El siguiente fragmento pertenece a un discurso de un líder político del siglo XX: "(...) nada queda de la legalidad pretendida; los extranjeros mandan los ejércitos, la anarquía reina en sus campos y ciudades, ninguna de las leyes fundamentales de la nación está en vigor: no se respeta ni la religión, ni la familia, ni la propiedad, y las organizaciones anarquistas y marxistas asaltan, roban, matan muchas veces con la complicidad del Gobierno (...) el bolchevismo seca la hierba (...) Pero nosotros sabremos reedificarlo todo".',
      'Por las posiciones políticas expresadas en este discurso, puede afirmarse que fue probablemente pronunciado por un líder con ideas políticas',
      ['de izquierda.', 'de derecha.', 'afines al liberalismo.', 'afines al proteccionismo.'], 1,
      'Quien habla ataca al anarquismo, al marxismo y al bolchevismo, y defiende la religión, la familia y la propiedad: esos tres valores, puestos en ese orden y frente a esos enemigos, son la bandera clásica de la derecha del siglo XX. La izquierda no combatiría al marxismo, y el proteccionismo es una política económica que aquí ni se menciona.',
      'Mira qué defiende y a quién ataca. El par «religión, familia y propiedad» contra «marxismo» ubica el discurso de inmediato.'),

    /* ═════════ F1 · 74 ═════════ */
    S('Interpretación de perspectivas', 'FRAGMENTO', 'ctx-sit',
      '"Yo tengo el sueño de que todos los hijos de Dios, blancos y negros, judíos o gentiles, católicos o protestantes, serán capaces de unir sus manos y cantar, con las palabras del viejo <em>espiritual</em> negro, ¡Al fin, libres! Gracias, Dios Todopoderoso, al fin somos libres".',
      'De acuerdo con el texto anterior, Luther King luchó por',
      ['el respeto que inspiran las diferencias raciales y culturales.',
       'la discriminación racial en lugares públicos.',
       'la igualdad de los derechos civiles entre negros y blancos.',
       'la defensa de la religión protestante.'], 2,
      'El sueño que describe es el de personas de distinto color y credo tomándose de las manos y siendo por fin libres: lo que persigue es que todos valgan lo mismo. Luchar «por la discriminación» diría lo contrario de lo que pide, y aunque nombra a católicos y protestantes, no defiende a una religión sobre otra: las pone en pie de igualdad.',
      'Cuidado con la opción que repite una palabra del tema pero invierte el sentido: nadie lucha «por» la discriminación.'),

    /* ═════════ F1 · 76 ═════════ */
    S('Interpretación de perspectivas', 'FRAGMENTO', 'ctx-sit',
      '"Ir a la universidad fue una senda abierta a un mundo por explorar, a unas relaciones nuevas por construir y a un autorreconocimiento de potencialidades y capacidades frente a los hombres. La alternativa del control natal replantea a las mujeres su función biológica y abre las posibilidades a vivir la sexualidad de otra manera, al separar reproducción y placer. Desempeñarse laboralmente fuera del hogar, además de reconocimiento social, procura los recursos económicos para aportar como proveedora al hogar, una función reservada para el padre como autoridad. Es el descubrimiento de la autonomía como resultado de la convergencia de todos los cambios, lo que hace que las mujeres se atrevan a aceptar el desafío de unas nuevas condiciones [...]". (Tomado de: Lamus Canavate, Doris. En: La manzana de la discordia, Universidad del Valle)',
      'El anterior fragmento hace alusión a',
      ['los movimientos laborales del siglo XX.',
       'el acceso de las mujeres a los cargos públicos.',
       'la obtención del derecho al voto por las mujeres.',
       'los logros de las mujeres durante la segunda mitad del siglo XX.'], 3,
      'El fragmento enumera varias conquistas a la vez: entrar a la universidad, controlar la natalidad, trabajar fuera de casa y descubrir la autonomía. Ninguna de las tres primeras opciones cubre ese conjunto; solo la que habla de los logros de las mujeres en ese periodo los abarca todos. El voto y los cargos públicos ni siquiera se mencionan.',
      'Si el texto enumera varios cambios distintos, la respuesta tiene que ser la más amplia, no una sola de las conquistas.'),

    /* ═════════ F2 · 50 ═════════ */
    S('Interpretación de perspectivas', 'FRAGMENTO', 'ctx-sit',
      'Lea con atención los siguientes fragmentos de discursos, sobre la relación Estado-medios de comunicación, pronunciados por un político en 1998 y en 2006, respectivamente:<br><br><strong>Fragmento 1:</strong> "No nacionalizaría ningún medio de comunicación. Basta con los medios que ya tiene el Estado. Hay que repotenciar esos canales y ponerlos a trabajar en función de la educación nacional, de los valores nacionales. Tengo las mejores relaciones con los canales y los medios de comunicación. Los canales deben seguir siendo privados; es más, estamos interesados en que se amplíen y se profundicen" (1998).<br><br><strong>Fragmento 2:</strong> "Ese canal de televisión [privado], se acaba. Se acaba la concesión cedida por el Gobierno. Ya está redactada la medida, así que vayan preparándose, apagando los equipos. No se va a tolerar aquí ningún medio de comunicación que esté al servicio del golpismo, contra el pueblo, contra la nación, contra la independencia nacional, contra la dignidad de la República" (2006).<br><br>El primer fragmento corresponde a una entrevista que el político concedió en 1998 a un medio de comunicación internacional cuando era candidato a la presidencia. El político asumió la presidencia en 1999, enfrentó un fallido golpe de Estado en su contra en 2002, y se mantuvo como presidente hasta su muerte en 2013. El segundo fragmento, por tanto, hace parte de un discurso pronunciado en plaza pública en el 2006, cuando estaba en la mitad de su mandato presidencial.',
      '¿Qué argumento explica el cambio de posición del político frente a los medios de comunicación privados en los dos discursos citados?',
      ['En su condición de candidato a la presidencia, desconocía el poder y la influencia de los medios de comunicación privados sobre la ciudadanía. Siendo presidente, decidió darles un mayor impulso a los medios nacionales.',
       'En su condición de candidato a la presidencia, no estaba interesado en perder el apoyo electoral de los medios de comunicación privados. Siendo presidente, buscó legitimar su proyecto político censurando a quienes se le opusieran.',
       'En su condición de candidato a la presidencia, desconocía que los medios de comunicación privados también pueden estar al servicio de los valores nacionales. Siendo presidente, estaba interesado en incidir en los contenidos que estos producían.',
       'En su condición de candidato a la presidencia, tenía como proyecto político sustituir progresivamente los medios de comunicación estatales por medios de comunicación privados. Siendo presidente, reconoció la importancia social de los medios estatales y decidió clausurar la competencia.'], 1,
      'De candidato necesitaba a los medios privados y por eso los halagaba; ya de presidente, y después de un golpe fallido, cierra un canal acusándolo de golpismo. El cambio se explica porque en cada momento le convenía algo distinto: primero el apoyo para ganar, después el control para sostenerse. Las otras tres le atribuyen desconocimiento o un cambio de convicción que los discursos no muestran.',
      'Cuando alguien cambia de posición, pregúntate qué necesitaba en cada momento. El interés suele explicar más que las ideas.'),
  ],
};

/* La ruta: cuatro cuestionarios que cierran el rescate de F1 y F2. */
const CUESTIONARIOS = {
  soc: [
    { tema: 'Constitución y derechos', items: [
      { id: 'soc-48', titulo: 'Ambiente, género y derechos', qs: [0, 1, 2],    tipo: 'Situación' },
      { id: 'soc-49', titulo: 'Universalidad y territorio',   qs: [3, 4, 5],    tipo: 'Situación' },
    ]},
    { tema: 'Economía y sociedad', items: [
      { id: 'soc-50', titulo: 'Salud, hábitos y comunidad',   qs: [6, 7, 8],    tipo: 'Situación' },
    ]},
    { tema: 'Interpretación de perspectivas', items: [
      { id: 'soc-51', titulo: 'Discursos e ideología',        qs: [9, 10, 11, 12], tipo: 'Situación' },
    ]},
  ],
};
