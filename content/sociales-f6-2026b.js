/* Sociales y Ciudadanas · sexto cuadernillo (F6) · lote 2026-B
 *
 * Fuente: el cuadernillo «F6 SyC · Deadpool» entregado por el instituto,
 * 46 preguntas numeradas 31 a 76. El escaneo empieza en la pregunta 30, que
 * es de Matemáticas (diagrama de Venn de fútbol y baloncesto): pertenece a la
 * sección anterior del formulario y no entra en este lote.
 *
 * El nombre del personaje de portada es el identificador que usa el docente
 * en el preuniversitario para saber en qué formulario físico está una
 * pregunta. Por eso «Deadpool» va en el título de cada cuestionario de este
 * cuadernillo, no solo en este comentario.
 *
 * ⚠ La pregunta 71 (el ministro de Defensa acusado de lavado de dinero que
 * convoca una rueda de prensa y se va sin recibir preguntas) NO se carga: ya
 * estaba en la base desde F1/F2, dentro de `soc-10`, con el mismo contexto,
 * el mismo enunciado y las mismas cuatro opciones en el mismo orden. Es el
 * primer traslape real que aparece entre dos cuadernillos distintos; se
 * detectó comparando el `hash_norm` derivado del contenido contra el de la
 * base, antes de aplicar el SQL. Quedan 45 preguntas de las 46 impresas.
 *
 * Dos cosas que trae mal el impreso y que se corrigieron al transcribir:
 *
 *   · Pregunta 38 (parapolítica): el cuadernillo imprime la opción B dos
 *     veces, con el mismo texto. Se transcriben las cuatro opciones
 *     distintas.
 *   · Pregunta 47: el estímulo es un mapamundi escaneado que no se puede
 *     extraer como imagen. Se describe en prosa lo que el mapa muestra
 *     (círculos continuos sobre los compradores, segmentados sobre los
 *     exportadores), igual que se hizo con el mapa de títulos mineros de F3.
 *
 * El cuadernillo NO trae hoja de respuestas. Las claves las determinó el
 * modelo leyendo cada situación, y por eso se cargan con
 * `clave_origen = 'modelo'`. `confianza: 'media'` marca las que admiten una
 * segunda lectura defendible y que el docente debería revisar primero:
 *
 *   · 37 (aportes de la Guerra Fría) — la navegación satelital y el microchip
 *     son ambos herederos de la carrera espacial y armamentista.
 *   · 39 (objetivo de bajar aranceles) — «mayor fluidez de la economía» y
 *     «aumentar importaciones y exportaciones» describen lo mismo con
 *     distinto nivel de generalidad.
 *   · 47 (mapa del café) — la clave depende de leer bien un mapa escaneado.
 *   · 55 (Mil Días y Panamá) — se puede defender el peso de las tensiones
 *     internas o el de la presión estadounidense.
 *   · 59 (mercurio) — el texto dice «y, sobre todo, causa graves problemas en
 *     la salud»; sin ese «sobre todo» la respuesta sería la ambiental.
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
    S('Organización del Estado', 'FRAGMENTO', 'ctx-sit',
      'Un artículo de opinión sobre el federalismo define este en los siguientes términos: "¿A qué nos referimos cuando hablamos de federalismo? En primer lugar, al abandono del concepto y vocabulario de la soberanía, que implica la exorbitante exigencia de un centro monopolizador del poder político, indelegable e indivisible. La visión federal de la democracia reemplaza la concepción jerárquica y piramidal del poder político por otra bien diferente: horizontal, de competencias repartidas, en red, pero coordinadas (federadas). En su propia etimología, el federalismo remite a la construcción política de la confianza (fides) mediante pacto entre iguales (foedus)".',
      'Teniendo en cuenta la definición presentada en el artículo, ¿cuál de los siguientes objetivos se persigue con el uso de un modelo federalista?',
      ['Crear condiciones para que, en el marco de un sistema político centralizado, el ejercicio de la soberanía beneficie a las regiones.',
       'Corregir los efectos de un sistema político centralizado con una concentración excesiva del poder.',
       'Disminuir el número de cargos públicos para darle mayor participación a la sociedad civil en las decisiones del Estado.',
       'Fortalecer la democracia y permitir así que el gobierno central de un país se integre por personas de las distintas regiones.'],
      1,
      'El texto describe el federalismo como el abandono de un "centro monopolizador del poder" y el paso a competencias repartidas de manera horizontal. Es decir, corrige la concentración excesiva. Las opciones que mantienen el sistema centralizado contradicen esa definición.',
      'Cuando el enunciado define un concepto, la respuesta debe salir de esa definición y no de lo que sabías antes.'),

    /* ═════════ 32 ═════════ */
    S('Constitución y derechos', null, null, null,
      'La Constitución de 1991 protege la diversidad étnica y cultural de las distintas comunidades y, por tanto, reconoce que existen distintos tipos de organizaciones sociales y legislaciones sobre tierras y lenguas, sistemas normativos y concepciones de la relación con el entorno. Un ejemplo de la aplicación de este principio sería:',
      ['La autonomía territorial de los resguardos.',
       'La enseñanza y uso prioritario de la lengua castellana en todo el territorio.',
       'La uniformidad en los sistemas de tenencia de tierras.',
       'La subordinación de las normas indígenas a las leyes nacionales.'],
      0,
      'Reconocer la diversidad significa aceptar que hay formas distintas de organizarse y de gobernar el territorio: eso es exactamente lo que hace el resguardo con autonomía. Imponer una sola lengua, un solo sistema de tierras o subordinar las normas indígenas apunta a lo contrario, a la uniformidad.',
      'Diversidad y uniformidad son opuestas: descarta toda opción que imponga una sola forma para todos.'),

    /* ═════════ 33 ═════════ */
    S('Economía y sociedad', 'FRAGMENTO', 'ctx-sit',
      'En el siguiente fragmento se describe una política de servicio social propuesta en un plan de desarrollo para Colombia: "El Gobierno reorientará el servicio social universitario hacia el logro de las metas de cobertura y la calidad del bachillerato. A partir de 1992, los estudiantes universitarios en el área de pedagogía tendrán la obligación de apoyar los programas de educación secundaria, dictando clases durante un semestre académico. [...] Con las universidades se establecerá un programa de servicio social voluntario para las demás carreras". (Tomado y adaptado de: Gaviria, C. (1991). "Plan de apertura educativa". En La Revolución Pacífica).',
      '¿Cuál de las siguientes situaciones justifica mejor que esta política es apropiada y debería implementarse?',
      ['Los estudiantes universitarios, en los primeros semestres, invierten el 90 % de su tiempo en la elaboración de trabajos y tareas.',
       'Los estudiantes de carreras del área de pedagogía pueden contribuir significativamente a mejorar las condiciones de la educación secundaria en el país.',
       'Los estudiantes universitarios buscan con frecuencia trabajos en horarios nocturnos para generar ingresos, sin descuidar sus clases.',
       'Los estudiantes de carreras del área de pedagogía son un porcentaje muy pequeño del conjunto de estudiantes matriculados en educación superior.'],
      1,
      'La política obliga a los estudiantes de pedagogía a dar clases en bachillerato, así que la justificación tiene que decir por qué eso mejora algo: porque son precisamente quienes se están formando para enseñar. Que sean pocos sería un argumento en contra, no a favor.',
      'Una justificación debe apoyar la medida; si el dato la debilita, es un contraargumento disfrazado.'),

    /* ═════════ 34 ═════════ */
    S('Constitución y derechos', 'SITUACIÓN', 'ctx-sit',
      'El abogado de un importante político envía una carta a una reconocida periodista exigiéndole que no publique una investigación sobre su apoderado. Al respecto, el abogado afirma en la carta que la periodista "no puede dañar el buen nombre de una persona tan reputada" y concluye diciendo que: "A menos que quiera enfrentarse a una cuantiosa demanda, le solicito en nombre de mi apoderado que se abstenga de publicar la investigación de la que hace poco nos enteramos". Como respuesta a esto, la periodista hace pública la carta del abogado y, en una entrevista, responde lo siguiente: "No sé cómo estas personas se enteraron de la investigación, pero todos los datos y todo lo que pienso publicar está sustentado por documentos y entrevistas con decenas de testigos. Así que, bienvenida sea la demanda. No dejaré que me callen de semejante manera".',
      'De los derechos involucrados en esta problemática, ¿cuáles están en conflicto?',
      ['El derecho a la privacidad y el derecho a la defensa.',
       'El derecho a la privacidad y el derecho al buen nombre.',
       'El derecho a la libertad de expresión y el derecho a la defensa.',
       'El derecho a la libertad de expresión y el derecho al buen nombre.'],
      3,
      'La periodista reclama poder publicar lo que investigó, que es libertad de expresión e información; el abogado invoca el buen nombre de su cliente. Esos dos son los que chocan. La privacidad no está en juego, porque lo investigado es la conducta pública de un político.',
      'Nombra qué reclama cada parte con sus propias palabras: ahí quedan identificados los dos derechos en tensión.'),

    /* ═════════ 35 ═════════ */
    S('Organización del Estado', 'SITUACIÓN', 'ctx-sit',
      'Actualmente, en la Constitución Política de Colombia está establecido que los parlamentarios se pueden reelegir de manera indefinida. Al respecto, un grupo de jóvenes de varias regiones del país le ha solicitado a diversos partidos políticos, que tienen asientos en el Congreso, que presenten un proyecto de ley para que los parlamentarios solo puedan permanecer dos periodos en el Congreso. Los argumentos que exponen los jóvenes son, entre otros, que esto permitiría la renovación de los políticos en el país y que, con esta iniciativa, los congresistas dedicarían la mayor parte de su tiempo a realizar buenas leyes y debates de control político, y no a buscar su reelección. En este sentido, los promotores de la iniciativa afirman que "la alternancia en estas corporaciones es vital para la democracia y para promover nuevos liderazgos".',
      'Ahora bien, de acuerdo con las leyes de Colombia, esta propuesta es',
      ['viable, porque la Constitución política es susceptible de ser reformada cuando las circunstancias lo justifiquen.',
       'inviable, porque un proyecto de ley no puede modificar lo que está establecido en la Constitución política.',
       'viable, porque los proyectos de ley pueden limitar el periodo de los congresistas en Colombia.',
       'inviable, porque los congresistas no pueden aprobar proyectos de ley que los afecten.'],
      1,
      'La reelección indefinida está en la Constitución, y una ley ordinaria no puede cambiar la Constitución: para eso hace falta un acto legislativo, un referendo o una asamblea constituyente. El problema no es que los congresistas no puedan legislar sobre sí mismos, sino el tipo de norma que se está proponiendo.',
      'Fíjate siempre en el rango de la norma: una ley no puede modificar algo que está escrito en la Constitución.'),

    /* ═════════ 36 ═════════ */
    S('Historia de Colombia', 'SITUACIÓN', 'ctx-sit',
      'Hacia la década de los años 70, la crisis económica que vivía América Latina llevó al poder a políticos carismáticos, que, con el apoyo de su pueblo, buscaban reestructurar la dinámica económica de las naciones. Sin embargo, este tipo de iniciativas no eran funcionales para el proyecto estadounidense.',
      'A partir de lo anterior se puede explicar que en Latinoamérica desde los años 70',
      ['se negará la entrada a cualquier idea de corte socialista y antiyanqui.',
       'se presentará la desaparición de personas que iban en contra del régimen americano.',
       'se dieron el nacimiento de coaliciones políticas apoyadas por Estados Unidos.',
       'se dieron dictaduras de extrema derecha, respaldadas por el gobierno americano.'],
      3,
      'Cuando los gobiernos populares chocaron con los intereses de Estados Unidos, la respuesta en el Cono Sur fueron golpes militares y dictaduras de extrema derecha con respaldo estadounidense: Chile en 1973, Argentina en 1976, Uruguay. No fueron coaliciones políticas ni un simple bloqueo de ideas.',
      'Ubica el hecho concreto de la época: para los años setenta en Latinoamérica, la palabra clave es dictaduras militares.'),

    /* ═════════ 37 ═════════ */
    S('Historia de Colombia', 'SITUACIÓN', 'ctx-sit',
      'La Guerra Fría, además de representar una época de constante tensión entre las dos potencias mundiales del siglo XX, a saber la Unión Soviética y Estados Unidos, también trajo consigo su lucha por el dominio de otros escenarios a parte del político. Esta disputa trajo grandes avances para la humanidad que en la actualidad se siguen aprovechando.',
      'Dentro de estos aportes se encuentran',
      ['el descubrimiento del genoma humano.',
       'la construcción de armas nucleares.',
       'el nacimiento de sistemas de navegación, sin utilizar las estrellas.',
       'el desarrollo del microchip, componente esencial de las computadoras.'],
      2,
      'El texto habla de la disputa por escenarios distintos al político, y el más claro fue la carrera espacial. De los satélites lanzados en esa competencia salieron los sistemas de navegación que hoy usamos a diario. Las armas nucleares no son un aporte que beneficie a la humanidad, y el genoma humano se secuenció después.',
      'Un "aporte" tiene que ser algo que hoy se aproveche: descarta lo que solo sirvió para la guerra.',
      'media'),

    /* ═════════ 38 ═════════ */
    S('Conflicto armado y memoria', 'FRAGMENTO', 'ctx-sit',
      'Las Autodefensas Unidas de Colombia (AUC) fue el nombre con que se denominó a diversos grupos armados ilegales de extrema derecha (paramilitares) que hacia la década de 1990 conformaron una sola entidad con influencia a nivel nacional y que tenía como objetivo combatir a los grupos armados de extrema izquierda (guerrilla). En los últimos años se ha desatado un debate político y judicial por el apoyo de algunos industriales, hacendados y políticos a las AUC.',
      'De acuerdo con lo anterior, se podría afirmar que la parapolítica hace referencia al fenómeno relacionado con la',
      ['creación y desarrollo histórico de la guerrilla en Colombia a partir del ideal político de construcción de un nuevo Estado.',
       'participación activa de las Autodefensas Unidas de Colombia en los asuntos de la política interna y externa del país.',
       'conformación y acción de grupos armados ilegales de extrema derecha con el objetivo de combatir a la guerrilla supuestamente para ayudar al ejército nacional.',
       'participación de agentes del Estado, representantes políticos y de otros sectores de la sociedad en la conformación de grupos paramilitares.'],
      3,
      'La palabra une dos mundos: "para" de paramilitar y "política". Nombra los vínculos entre políticos, funcionarios y sectores económicos con los grupos paramilitares, que es justo el debate judicial que menciona el texto. La conformación de las AUC por sí sola es paramilitarismo, no parapolítica.',
      'Descompón el término: parapolítica es paramilitares más políticos, así que la respuesta debe nombrar a los dos.'),

    /* ═════════ 39 ═════════ */
    S('Economía y sociedad', 'FRAGMENTO', 'ctx-sit',
      'El fenómeno de la globalización ha llevado a los Estados a depender los unos de los otros. Así, generan alianzas que buscan mutuos beneficios en el largo y corto plazo. Colombia no ha estado exenta de esta dinámica; al contrario, ha buscado ser partícipe de este ejercicio de forma activa. Un ejemplo al respecto es la disminución de las tasas arancelarias que le ha hecho a algunos países.',
      'Un objetivo que seguramente persiguen este tipo de estrategias es',
      ['propiciar que el crecimiento económico de los Estados miembros se dé al mismo ritmo.',
       'aumentar el número de importaciones y exportaciones de los Estados miembros.',
       'permitir a los Estados aliados promover sus productos en otras naciones.',
       'garantizar una mayor fluidez de la economía de los Estados partícipes.'],
      3,
      'El arancel es un obstáculo: encarece lo que cruza la frontera. Bajarlo busca que el intercambio fluya con menos trabas entre los países aliados. Nada garantiza que todos crezcan al mismo ritmo, y eso no es lo que se persigue.',
      'Un arancel es un freno al comercio; quitarlo persigue que la economía circule con menos obstáculos.',
      'media'),

    /* ═════════ 40 ═════════ */
    S('Economía y sociedad', 'SITUACIÓN', 'ctx-sit',
      'La Comunidad Andina (CAN) es un organismo regional conformado por Colombia, Perú, Bolivia y Ecuador, el cual busca un desarrollo integral, equilibrado y autónomo de las naciones miembros. Dentro de ella, los Estados miembros pueden comerciar una serie de productos aprobados por sus pares. Sin embargo, en el caso de Perú y Colombia ha surgido una gran problemática referida a la producción de café, puesto que el país inca en los últimos años ha aumentado significativamente la exportación de este grano.',
      'Esta situación puede traer problemas para la continuidad de la relación comercial entre estos países, porque',
      ['afecta directamente la estabilidad de las exportaciones de uno de los sectores claves para la economía de estos países.',
       'tanto Colombia como Perú buscarían restringir la entrada de café extranjero a su territorio, afectando con ello el objetivo que persigue la CAN.',
       'Colombia y Perú entrarán en una competencia directa frente a la exportación de un producto a escala internacional.',
       'las naciones consumidoras de café evaluarían el impacto de su compra, en la relación comercial existente entre Colombia y Perú.'],
      2,
      'Los dos países venden el mismo grano a los mismos compradores del exterior. Cuando uno aumenta su exportación, le disputa mercado al otro: eso es competencia directa, y es lo que tensiona una alianza pensada para cooperar.',
      'Si dos socios venden el mismo producto al mismo mercado, el problema entre ellos es competencia, no restricción interna.'),

    /* ═════════ 41 ═════════ */
    S('Economía y sociedad', 'SITUACIÓN', 'ctx-sit',
      'A partir del 15 de mayo de 2012 entró en vigencia el Tratado de Libre Comercio (TLC) entre Estados Unidos y Colombia. Así, se dio inicio a un acuerdo comercial entre la economía más grande del mundo y un país cuyo crecimiento económico, en los últimos años, apenas ha llegado al 3 %.',
      'Teniendo en cuenta lo anterior, se podría afirmar que un beneficio que traerá este acuerdo para Colombia es',
      ['la creación de una sana competencia igualitaria que ayude al mejoramiento de su economía.',
       'el aumento de las importaciones de productos a precios accesibles.',
       'el tener acceso a un mercado con un alto ingreso per cápita y alto número de habitantes.',
       'la incorporación de estrategias norteamericanas en cuanto a relaciones comerciales internacionales.'],
      2,
      'Para el país más pequeño, la ganancia de un acuerdo con la economía más grande del mundo es poder venderle a millones de consumidores con alto poder adquisitivo. Aumentar las importaciones no es un beneficio para el productor colombiano, y el propio texto descarta que la competencia sea igualitaria.',
      'Pregúntate qué gana específicamente el país más débil del acuerdo: casi siempre es acceso a un mercado grande.'),

    /* ═════════ 42 ═════════ */
    S('Historia de Colombia', 'SITUACIÓN', 'ctx-sit',
      'Los conflictos en territorio africano que tuvieron lugar durante el siglo XX, dieron pie a una fuerte crisis humanitaria que tuvo que ser enfrentada por organizaciones no gubernamentales y por el sistema de naciones unidas. En el desarrollo de estos conflictos se crearon zonas de protección a la población civil para que fueran asistidos en términos alimenticios y de salud, en pro de disminuir el impacto de los enfrentamientos sobre dichos habitantes.',
      'Así, el papel de la ONU en este contexto fue',
      ['revisar que el conflicto armado se diera en igualdad de condiciones y respetando el uso de cualquier tipo de armamento.',
       'participar en los enfrentamientos armados que tenían lugar en estos territorios, con su ejército de cascos azules.',
       'garantizar la neutralidad de las zonas de protección, a través del uso de su ejército de cascos azules.',
       'promover la apertura de fronteras para que las víctimas de los conflictos fueran refugiados en países vecinos.'],
      2,
      'Las misiones de paz de la ONU no toman partido ni combaten: protegen a la población civil y mantienen neutrales las zonas humanitarias. Por eso los cascos azules aparecen custodiando esas zonas, no peleando dentro del conflicto.',
      'El papel de la ONU en un conflicto siempre se describe como interposición y protección, nunca como bando.'),

    /* ═════════ 43 ═════════ */
    S('Interpretación de perspectivas', 'FRAGMENTO', 'ctx-sit',
      'En el 2001 surgió un nuevo espacio de divulgación científica denominado bioinformática, que consiste en varias bases de datos públicas en internet, que ponen a disposición de todos los científicos del mundo los resultados sobre las investigaciones relacionadas con los genomas humanos.',
      'Según lo anterior, se puede deducir que la divulgación de los resultados de las investigaciones es justificable en la medida en que permite aplicar sus resultados y además',
      ['reconocer públicamente a los investigadores.',
       'justificar las inversiones hechas.',
       'generar nuevos conocimientos.',
       'juzgar éticamente los proyectos.'],
      2,
      'Poner los resultados al alcance de todos los científicos del mundo sirve para que otros construyan sobre ellos y no repitan el mismo camino. Reconocer autores o justificar gastos pueden ser efectos secundarios, pero no son la razón de una base de datos abierta.',
      'El propósito de compartir conocimiento científico es siempre que otros puedan seguir a partir de ahí.'),

    /* ═════════ 44 ═════════ */
    S('Constitución y derechos', 'SITUACIÓN', 'ctx-sit',
      'Durante los últimos años en Colombia, se ha generado un gran debate en contra de la práctica del aborto; incluso grandes movilizaciones se han realizado al respecto.',
      '¿Qué opción muestra las principales justificaciones para que existan grupos en contra y a favor?',
      ['Los castigos religiosos que la práctica del aborto implica versus la idea de que el aborto no implica que no se haya planificado.',
       'La idea de que la vida inicia desde el momento de la gestación versus el hecho de que las mujeres tienen derecho a decidir cuándo ser madres.',
       'Los niños siempre son bendiciones para sus familias y el mundo está sobre poblado por lo que traer niños a él debe ser una decisión consciente.',
       'Ser padres no es una decisión sino un deber versus el concebir un niño no deseado implica que él nazca en una familia feliz.'],
      1,
      'El debate real enfrenta dos principios: quien se opone parte de que hay vida desde la gestación, y quien está a favor parte del derecho de la mujer a decidir sobre su cuerpo y su maternidad. Las demás opciones mezclan argumentos sueltos que no representan las dos posturas centrales.',
      'En un debate polarizado, busca la opción que enuncia con claridad el principio de cada bando.'),

    /* ═════════ 45 ═════════ */
    S('Organización del Estado', 'SITUACIÓN', 'ctx-sit',
      'Un grupo de ciudadanos de la capital de un departamento en Colombia están inconformes con la labor de un alcalde que en campaña prometió mejorar los sistemas de acueducto de algunas zonas rurales y de la capital misma y casi al final de su mandato no ha hecho nada de esto. Así que deciden denunciar su mala gestión.',
      '¿Ante cuál de los siguientes organismos deben hacerlo?',
      ['Consejo de Estado.',
       'Procuraduría General de la Nación.',
       'Fiscalía General de la Nación.',
       'Corte Suprema de Justicia.'],
      1,
      'Vigilar la conducta de los funcionarios públicos y sancionarlos disciplinariamente es la función del Ministerio Público, es decir, de la Procuraduría. La Fiscalía investiga delitos, y aquí lo que se denuncia es incumplimiento de la gestión, no un delito probado.',
      'Distingue las tres vías: disciplinaria va a la Procuraduría, penal a la Fiscalía, fiscal a la Contraloría.'),

    /* ═════════ 46 ═════════ */
    S('Economía y sociedad', 'RECORTE DE PRENSA', 'ctx-sit',
      '<p><b>Colombia y la crisis financiera internacional</b></p><p>LA ECONOMÍA MUNDIAL ESTÁ EN APUROS. La crisis financiera de los Estados Unidos es probablemente la mayor desde la gran depresión. Las bolsas de todo el mundo han perdido valor. Los precios de los productos básicos han caído sustancialmente.</p><p>El lunes, dos legendarios bancos de inversión, con historias centenarias, Lehman Brothers y Merril Lynch, desaparecieron del panorama financiero en cuestión de horas. En las semanas anteriores, la Reserva Federal y la Secretaría del Tesoro de los Estados Unidos habían tratado de evitar a toda costa la quiebra de algunas instituciones financieras. Pero esta semana, las autoridades económicas de los Estados Unidos dejaron en claro que su capacidad y su voluntad tienen límites, que algunas veces el hundimiento de las instituciones que decidieron tomar riesgos excesivos y lo perdieron todo en el intento es inevitable.</p><p style="font-size:.85em">Tomado de: Periódico El Espectador, 17 de septiembre de 2008.</p>',
      '¿Cuál de las siguientes frases resume de mejor forma el papel del gobierno estadounidense en la crisis?',
      ['Restricción fiscal.', 'Apoyo desmedido.', 'Intervención controlada.', 'Protección bancaria.'], 2,
      'El texto muestra las dos caras: el Gobierno sí intervino para evitar quiebras, pero dejó claro que su capacidad y su voluntad tienen límites y permitió que Lehman Brothers cayera. Eso es intervenir con límites, no un apoyo sin medida ni una protección generalizada.',
      'Cuando el texto describe una acción y a la vez sus límites, la síntesis correcta suele llevar la palabra "controlada" o "parcial".'),

    /* ═════════ 47 ═════════ */
    S('Geografía y territorio', 'MAPA', 'ctx-fig',
      '<p><b>Exportaciones e importaciones a nivel mundial · 2010</b></p><p>El mapa mundial señala con círculos de línea continua las zonas que más compran café: Norteamérica, Europa occidental y Japón. Con círculos de línea segmentada señala a sus mayores exportadores: Centroamérica y el norte de Suramérica, África central y oriental, y el sureste asiático.</p><p style="font-size:.85em">Tomado de: www.cafedecolombia.com</p>',
      'En el mapa, los círculos con línea continua representan a las zonas que más compran café, mientras que los círculos con línea segmentada representan a sus mayores exportadores. Del mapa se puede concluir que para Colombia',
      ['los países africanos y del sureste asiático representan sus mayores competidores dentro de la exportación de café.',
       'es vital una buena situación económica de los países del norte, quienes son los principales compradores de café.',
       'el país más importante para el mercado cafetero es Estados Unidos, al ser el mayor comprador de dicho producto.',
       'es importante que países como exportadores de café dejen de lado la importación del grano y protejan a los productores locales.'],
      1,
      'Los círculos continuos, es decir los compradores, están sobre Norteamérica, Europa y Japón: economías del norte. Si a ellas les va mal, cae la demanda del café colombiano. África y el sureste asiático también exportan, pero el mapa no dice cuánto ni permite afirmar que sean los mayores competidores, ni singulariza a Estados Unidos.',
      'De un mapa solo puedes concluir lo que el mapa muestra: si no hay cifras, no afirmes cuál es "el mayor".',
      'media'),

    /* ═════════ 48 ═════════ */
    S('Historia de Colombia', 'SITUACIÓN', 'ctx-sit',
      'La séptima papeleta fue el mecanismo usado por un movimiento de estudiantes que querían cambiar la constitución de 1886, por considerarla excluyente y obsoleta para enfrentar los nuevos desafíos en los derechos fundamentales y asegurar la paz en Colombia.',
      'Esto es explicable pues la antigua constitución no daba espacios de representación a las minorías, ni garantizaba la creación y desarrollo de nuevos',
      ['sindicatos de trabajadores o asociaciones estudiantiles.',
       'espacios regionales para la paz.',
       'órganos estatales que garantizaran los derechos individuales.',
       'partidos políticos diferentes a los dos tradicionales.'],
      3,
      'Bajo la Constitución de 1886 la vida política se repartió entre liberales y conservadores, y ese bipartidismo cerrado dejaba por fuera cualquier otra fuerza. Por eso la Constitución de 1991 abrió el sistema a nuevos partidos y movimientos.',
      'Cuando hablen de exclusión política en el siglo XX colombiano, piensa en el bipartidismo liberal-conservador.'),

    /* ═════════ 49 ═════════ */
    S('Historia de Colombia', 'SITUACIÓN', 'ctx-sit',
      'El Frente Nacional (1958-1974) fue un acuerdo dado entre las fuerzas políticas usuales del país para poner fin a la violencia. Para ello se buscó redistribuir periódicamente los diferentes cargos del gobierno.',
      'De lo anterior, se puede deducir que dicho pacto consistió en',
      ['la participación de todos los sectores sociales en el ejercicio del poder.',
       'el fortalecimiento de una dictadura política-militar.',
       'el establecimiento formal de un gobierno de coalición bipartidista.',
       'la creación de un gobierno de tradición netamente conservadora.'],
      2,
      'El acuerdo fue entre las dos fuerzas políticas tradicionales, que se turnaron la presidencia y se repartieron por mitades los cargos. Eso es una coalición bipartidista, y precisamente por eso dejaba por fuera a los demás sectores sociales.',
      'Si el pacto reparte cargos entre dos partidos, no puede describirse como participación de todos los sectores.'),

    /* ═════════ 50 ═════════ */
    S('Interpretación de perspectivas', 'FRAGMENTO', 'ctx-sit',
      'Un profesor universitario estadounidense propuso que, en todos los programas universitarios, fuera de carácter obligatorio cursar, por lo menos, un año de formación básica en humanidades. Esto, con el objetivo de subsanar la grave crisis social, ambiental y económica que atraviesan las sociedades contemporáneas. Según la opinión del profesor, no debía expedirse una titulación universitaria en ningún campo del saber sin este requisito. Para él, es obvio que una formación en humanidades es vital "para entender a otros desde sus lenguas, culturas y cosmovisiones; para pensar creativamente y para aprender, entender y moverse con soltura en el conjunto de las mejores respuestas que la humanidad ha dado a sus grandes preguntas". (Tomado y adaptado de: Escourido, J. (2016, 28 de septiembre). Humanidades obligatorias. El País).',
      'De las siguientes condiciones, ¿cuál favorecería la implementación de la propuesta del profesor universitario en el contexto colombiano?',
      ['Reducir de cuatro a tres años la formación profesional universitaria.',
       'Crear nuevos programas académicos centrados en la formación técnica.',
       'Aumentar el número de horas de cátedra en las áreas de humanidades.',
       'Eliminar las evaluaciones de los cursos de formación en humanidades.'],
      2,
      'Si todas las carreras deben cursar un año de humanidades, hará falta quién las dicte y cuándo dictarlas: ampliar las horas de cátedra en esas áreas es la condición que lo hace posible. Recortar la carrera o volcarla a lo técnico va en contra de la propuesta.',
      'Una condición que "favorece" debe hacer materialmente posible la medida, no solo sonar afín al tema.'),

    /* ═════════ 51 ═════════ */
    S('Organización del Estado', 'SITUACIÓN', 'ctx-sit',
      'El presidente de un país prohibió la participación en política de cualquier directivo de la institución del Estado encargada de garantizar los derechos de los niños, niñas y adolescentes. La decisión se tomó luego de un escándalo de corrupción en el que se vio involucrada la directora de esa entidad. El caso generó gran rechazo de la población, pues la funcionaria utilizaba los recursos de la institución para favorecer a congresistas y pagar favores políticos, aprovechando que el Congreso es la instancia en la que se aprueba el presupuesto de la entidad que dirigía. La medida presidencial generó amplio descontento entre los congresistas, quienes afirman que están estigmatizándolos.',
      'De acuerdo con lo anterior, ¿qué consecuencia no esperada puede surgir a partir de la decisión presidencial?',
      ['Que aumente el descontento de la población civil y se organicen manifestaciones para defender los derechos de los niños, niñas y adolescentes.',
       'Que aumente el control político y presupuestario hacia la entidad involucrada en el escándalo y se vigilen los nexos políticos de los funcionarios que la dirijan en el futuro.',
       'Que disminuya el presupuesto que aprueba el Congreso para la entidad y, con ello, se afecten negativamente los programas de atención a niños, niñas y adolescentes.',
       'Que disminuya el apoyo popular al presidente y se afecte el respaldo ciudadano a otras de las políticas que quiera implementar su gobierno.'],
      2,
      'El texto deja servida la cadena: los congresistas quedaron molestos y son ellos quienes aprueban el presupuesto de esa entidad. La consecuencia que nadie buscaba es que se lo recorten y terminen perjudicados los niños, que eran justamente a quienes se quería proteger.',
      'Una consecuencia "no esperada" es la que contradice el propósito de la medida; búscala siguiendo quién quedó incómodo y qué poder tiene.'),

    /* ═════════ 52 ═════════ */
    S('Historia de Colombia', 'FRAGMENTO', 'ctx-sit',
      'Lea atentamente el siguiente fragmento, tomado de un discurso presidencial: "Los militares podemos afirmar, satisfechos y tranquilos, que hoy continuamos tan unidos y vigilantes al servicio exclusivo de la Patria, como el día en que la Divina Providencia hizo estallar de júbilo a Colombia, al poner en nuestras manos la responsabilidad del Gobierno. [...] Dios es testigo de que en los actos de mi vida sólo he buscado de que en los altos de mi vida sólo he buscado el bienestar de mis conciudadanos y de que antes del 13 de junio trabajé sincera e incansablemente para que las circunstancias no me obligaran a recibir el poder. Ningún militar o civil pueden afirmar que yo le pidiera su ayuda o aceptara su cooperación para derrocar al Gobierno".',
      '¿En qué periodo histórico nacional se inscribe este discurso?',
      ['El período bipartidista denominado Frente Nacional (1958-1974).',
       'El mandato de Jorge Eliécer Gaitán (1946-1950).',
       'La dictadura del general Gustavo Rojas Pinilla (1953-1957).',
       'La guerra de los Mil Días (1899-1902).'],
      2,
      'Quien habla es un militar que gobierna y menciona el 13 de junio como el día en que recibió el poder: es el 13 de junio de 1953, la fecha del golpe de Rojas Pinilla. Gaitán nunca fue presidente, y en el Frente Nacional gobernaban civiles.',
      'Una fecha suelta dentro de un discurso suele ser la pista que lo data: búscala y ánclala a un hecho.'),

    /* ═════════ 53 ═════════ */
    S('Geografía y territorio', 'SITUACIÓN', 'ctx-sit',
      'En los últimos años, ciudadanos y agremiaciones conformadas por ambientalistas han incrementado, a nivel nacional, sus denuncias sobre los efectos negativos de la explotación minera y petrolera en Colombia. Para el 2014, las denuncias relativas a la extracción de oro, carbón y arena correspondían al 30 % del total de procesos adelantados por la Unidad contra Delitos Ambientales de la Fiscalía General de la Nación. Para enero de 2018, se contemplaban acciones jurídicas en contra de la actividad petrolera en, por lo menos, 38 municipios de 8 departamentos del país.',
      'El incremento de denuncias de esta índole responde a un contexto en el que',
      ['el Estado colombiano, amparado en la Constitución Política, promueve e impulsa acciones ciudadanas para frenar los proyectos económicos de corte extractivista.',
       'las poblaciones cercanas a los territorios en los que se extrae oro, carbón y arena, se han beneficiado en razón a las ganancias que deja la extracción de estos minerales en sus municipios.',
       'las comunidades cercanas a los territorios en los que se extrae petróleo, han fortalecido sus procesos de participación para tomar decisiones acerca de cómo invertir los recursos que les deja este sector de la economía.',
       'el Estado colombiano, amparado en la Constitución Política, dispone de mecanismos legales para que, quienes consideren que se está violando su derecho a un ambiente sano, puedan manifestar su inconformidad.'],
      3,
      'Que las denuncias aumenten significa que existen vías legales para presentarlas y gente dispuesta a usarlas. El Estado no impulsa el freno a esos proyectos, solo pone a disposición los mecanismos; y el texto habla de denuncias, no de comunidades beneficiadas ni de decisiones sobre inversión.',
      'Un aumento de denuncias indica que hay canales disponibles, no que la autoridad esté promoviendo la protesta.'),

    /* ═════════ 54 ═════════ */
    S('Interpretación de perspectivas', 'FRAGMENTO', 'ctx-sit',
      'Considere el siguiente fragmento: "El sistema totalitario, que privó al país de la oportunidad de ser exitoso y próspero, hace mucho tiempo que se ha eliminado. Un gran avance se ha logrado en el camino hacia el cambio democrático. Las elecciones libres, la libertad de prensa, las libertades religiosas, los órganos representativos del poder, el sistema multipartidista; todo esto se ha hecho realidad. Los Derechos Humanos son reconocidos como principio supremo. Nos abrimos al mundo, dejamos de interferir en los asuntos de otros y de emplear tropas más allá de las fronteras del país, y la confianza, la solidaridad y el respeto fueron devueltos como respuesta". (Tomado de: Gorbachov, M. (1991). Discurso sobre la disolución de la Unión Soviética).',
      'Basado en la información del fragmento, ¿cuál es la intención del autor de este discurso?',
      ['Justificar el fortalecimiento del totalitarismo como una oportunidad para el progreso económico del país y el reconocimiento internacional de la URSS.',
       'Denunciar que el sistema totalitario no le permitía al país ser un actor internacional relevante del influir en asuntos políticos y militares de otros países.',
       'Justificar los cambios políticos implementados en el país, en especial la eliminación del totalitarismo, para la construcción de una sociedad democrática.',
       'Denunciar que los sistemas democráticos no garantizan el reconocimiento de los derechos humanos y la representación política de los ciudadanos.'],
      2,
      'Gorbachov enumera logros —elecciones libres, prensa libre, multipartidismo, derechos humanos— y los presenta como el resultado de haber desmontado el sistema totalitario. Está defendiendo lo que hizo, no denunciando a la democracia ni al aislamiento internacional.',
      'Si un discurso hace una lista de logros propios, la intención es justificar, no denunciar.'),

    /* ═════════ 55 ═════════ */
    S('Historia de Colombia', 'FRAGMENTOS', 'ctx-sit',
      '<p><b>Texto 1.</b> Entre octubre de 1899 y noviembre de 1902, en Colombia se libró una guerra civil que enfrentó a las fuerzas del Gobierno, centralista y conservador, con los sectores más radicales del Partido Liberal. "La guerra de los Mil Días", como es conocida, se vivió en distintos departamentos del país como Santander, Cauca, Panamá y Tolima. Al final del conflicto, el país quedó con una economía destrozada y más de 100.000 muertos.</p><p><b>Texto 2.</b> El 3 de noviembre de 1903, la provincia de Panamá se separa de Colombia y sus élites liberales la proclaman como una República independiente. Esta separación contó con el apoyo militar y económico de los Estados Unidos, como parte de una estrategia de los norteamericanos para fortalecer su hegemonía y su influencia en América Latina. El Estado colombiano poco pudo hacer para impedir la pérdida del istmo de Panamá.</p>',
      'De acuerdo con los dos textos, ¿qué relación existe entre la guerra de los Mil Días y la separación de Panamá de Colombia?',
      ['Las tensiones entre los proyectos centralistas y federalistas le impidieron al Gobierno colombiano mantener la paz y la soberanía sobre el territorio nacional.',
       'Las guerras internas de Colombia y la correspondiente pérdida de la provincia de Panamá son consecuencia directa de las políticas imperialistas de los Estados Unidos.',
       'El control sobre la posición geoestratégica de Panamá motivó los enfrentamientos dados en la guerra de los Mil Días y en la separación del istmo de Colombia.',
       'La separación de Panamá es consecuencia de los deseos separatistas de las provincias de Colombia, los cuales motivaron la guerra de los Mil Días.'],
      0,
      'Los textos van en orden: primero una guerra entre centralistas y radicales que dejó al país en ruinas, y un año después una separación que el Estado "poco pudo hacer" para impedir. El conflicto interno es lo que dejó al país sin capacidad de sostener su soberanía. Estados Unidos apoyó la separación, pero el primer texto no lo menciona como causa de la guerra.',
      'Cuando dos textos se presentan en secuencia, revisa si el primero explica la debilidad que hizo posible lo del segundo.',
      'media'),

    /* ═════════ 56 ═════════ */
    S('Interpretación de perspectivas', 'FRAGMENTO', 'ctx-sit',
      'La siguiente reflexión fue escrita por el periodista y cronista colombiano Luis Tejada Cano en 1924: "¿De qué les sirve al jornalero rural y al peón urbano que haya, por ejemplo, libertad de prensa, si ellos no saben escribir?, ¿de qué les sirve que haya libertad de elegir si no se les ha dado la educación suficiente para discernir a quién eligen?". (Tomado de: Tejada, L. (1961). Libro de Crónicas. Bogotá: Editorial Triángulo).',
      '¿Cuál de las siguientes opciones presenta la intención que pudo tener el periodista al escribir esas palabras?',
      ['Llamar la atención sobre la responsabilidad social de la prensa.',
       'Expresar su desacuerdo con las personas que aun teniendo educación deciden no votar.',
       'Resaltar la necesidad de la educación para que todas las personas puedan ejercer su ciudadanía.',
       'Mostrar su inconformismo con respecto a que los jornaleros y peones no quieran aprovechar sus derechos.'],
      2,
      'Tejada no reprocha nada a los trabajadores: señala que un derecho sin educación queda en el papel, porque no se puede usar. Su reclamo es por la educación como condición para ejercer la ciudadanía, no contra quienes no votan.',
      'Cuando un autor pregunta "¿de qué les sirve...?", está señalando una carencia, no culpando a quien la padece.'),

    /* ═════════ 57 ═════════ */
    S('Mecanismos de participación', null, null, null,
      'De las siguientes frases pronunciadas por el político colombiano Luis Carlos Galán Sarmiento (1943-1989), ¿cuál de ellas NO señala la importancia de que todos los ciudadanos participen activamente en la construcción de un mejor país?',
      ['"Se puede matar a los hombres, pero no a las ideas".',
       '"No hay democracia si no se entiende la Nación como una misión colectiva, un compromiso de todos".',
       '"Lo que interesa es que las ideas de libertad, de democracia, de igualdad, lleguen a la conciencia de cada uno de nuestros compatriotas y modifiquen en verdad y a fondo el comportamiento público de la Nación".',
       '"Para que, en verdad, haya un salto cualitativo en la interpretación del país, en el conocimiento de sus realidades y posibilidades, todo colombiano tiene una tarea por cumplir".'],
      0,
      'Tres de las frases hablan de "todos", de "cada uno de nuestros compatriotas" y de "todo colombiano": convocan a participar. La primera afirma que las ideas sobreviven a quien las sostiene, que es una reflexión distinta y no llama a nadie a actuar.',
      'En preguntas con NO, subraya las palabras colectivas ("todos", "cada uno"): la opción que no las tiene suele ser la respuesta.'),

    /* ═════════ 58 ═════════ */
    S('Mecanismos de participación', 'FRAGMENTO', 'ctx-sit',
      'El siguiente fragmento, publicado por el Instituto Científico de Culturas Indígenas del Ecuador (ICCI), es una crítica al modelo de democracia de ese país: "No hay democracia en el Ecuador. Estamos bajo un régimen presidencial con políticas dictatoriales. La democracia ‘legal’ que conocemos en nuestro país fomenta la desigualdad y la inequidad, se aplica en el marco del racismo, es excluyente, prepotente, y se expresa únicamente en el marco de las elecciones. A pesar de esto, nuestra lucha continúa, no solo por los derechos para y por los Pueblos y Nacionalidades indígenas. En conjunto con otros sectores sociales seguiremos hasta lograr una verdadera democracia en la cual se vea reflejada nuestra interculturalidad, tengamos una participación igualitaria, las propuestas ciudadanas sean acogidas, y los gobiernos consulten con la ciudadanía antes de tomar decisiones". (Tomado de: Zhingri, P. (2002). Democracia y pueblos indígenas).',
      'De las siguientes situaciones, ¿cuál NO es afín con el modelo de democracia deseado por el ICCI?',
      ['Elegir por voto popular representantes indígenas de cada una de las etnias del país para el Congreso.',
       'Priorizar el acceso a los programas de alfabetización y educación a las comunidades indígenas.',
       'Formar una comisión integrada por el Gobierno, la sociedad civil y los indígenas para atender sus demandas.',
       'Definir desde el Gobierno políticas relacionadas con los intereses de las comunidades indígenas.'],
      3,
      'El ICCI pide justamente que los gobiernos consulten antes de decidir y que las propuestas ciudadanas sean acogidas. Que el Gobierno defina solo las políticas indígenas es lo contrario: decidir sobre ellos sin ellos.',
      'Cuando un texto reclama ser consultado, cualquier opción donde otro decida en su nombre queda descartada.'),

    /* ═════════ 59 ═════════ */
    S('Geografía y territorio', 'SITUACIÓN', 'ctx-sit',
      'En una región al sur del país, las prácticas de extracción minera artesanal están ampliamente difundidas. La extracción artesanal de oro constituye una fuente de ingresos importante para muchas familias de bajos recursos en la región, y una práctica que se ha transmitido de generación en generación. No obstante, esta práctica tiene un impacto social y ambiental significativo, pues, en ocasiones, involucra el uso del mercurio. El mercurio que se vierte en los ríos afecta el ecosistema acuático y, sobre todo, causa graves problemas en la salud de las personas, desde enfermedades digestivas hasta daños cognitivos serios. La eliminación del uso del mercurio es, por tanto, una prioridad.',
      'De acuerdo con la descripción anterior, el problema planteado es principalmente de tipo',
      ['social, debido a los graves problemas de salud humana asociados al uso del mercurio.',
       'ambiental, debido a los daños irreversibles en los ecosistemas acuáticos causado por el mercurio.',
       'económico, debido a la inexistencia en la región de actividades económicas diferentes a la minería artesanal.',
       'cultural, debido a la costumbre, muy difundida en la población local, del uso de mercurio en la extracción de oro.'],
      0,
      'El texto menciona los dos daños, pero jerarquiza: dice que el mercurio afecta el ecosistema "y, sobre todo, causa graves problemas en la salud de las personas", y detalla cuáles. Ese "sobre todo" es el que inclina la respuesta hacia lo social.',
      'Cuando un texto enumera varios efectos, busca la expresión que jerarquiza ("sobre todo", "principalmente"): ahí está la clave.',
      'media'),

    /* ═════════ 60 ═════════ */
    S('Economía y sociedad', 'SITUACIÓN', 'ctx-sit',
      'En un municipio fronterizo fracasó el control por parte del Gobierno para evitar el contrabando. Por esta razón, el Gobierno decidió hacer un estudio sobre la economía local para solucionar el problema. El estudio concluyó que la principal fuente de ingresos de la zona es el contrabando: el 70 % de la población trabajadora depende de este. Esta población tiene, en promedio, 40 años de edad, dos o más hijos y gana el equivalente a seis salarios mínimos mensuales. Como parte de un esfuerzo para legalizar la economía, el Gobierno le ofrece a cada contrabandista financiación para cursar estudios de educación superior durante dos años, subsidiados, en alguna ciudad del interior del país. Mientras estudian recibirán, adicionalmente, un salario mínimo como incentivo para terminar sus estudios.',
      'Si se les propone la solución que brinda el Gobierno a los contrabandistas, lo más probable es que',
      ['la acepten, pues les interesa, sobre todo, participar en actividades de la economía legal.',
       'la rechacen, pues exige una reubicación forzosa y la reducción de sus ingresos familiares.',
       'la acepten, pues el dinero les permitirá sostenerse y los estudios les abrirán nuevas oportunidades.',
       'la rechacen, pues recomendarían participar en la ejecución de las actividades de contrabando.'],
      1,
      'Hay que hacer la cuenta: hoy ganan seis salarios mínimos y la oferta les da uno solo, además de obligarlos a mudarse a otra ciudad con dos o más hijos. Para alguien de cuarenta años con familia, eso es perder cinco sextas partes del ingreso y desarraigarse.',
      'Cuando el texto da cifras de ingreso y edad, no las ignores: están puestas para que compares el antes y el después.'),

    /* ═════════ 61 ═════════ */
    S('Interpretación de perspectivas', 'SITUACIÓN', 'ctx-sit',
      'En la Conferencia Episcopal, en la que se abordaban temas de familia, embarazos y abortos en la adolescencia, un expresidente de la república afirmó: "Los jóvenes deberían aplazar el gustico hasta después del matrimonio". Esta declaración incomodó a muchas personas. Una periodista dijo que esto equivalía a que cualquier joven le dijera al presidente cómo gobernar.',
      '¿Qué intención tiene la periodista al hacer esta afirmación?',
      ['Cuestionar las decisiones de los jóvenes que tienen tendencias o modas excéntricas.',
       'Afirmar que los jóvenes pueden ayudar a los dirigentes a tomar decisiones más ajustadas a la realidad.',
       'Señalar que las decisiones de los jóvenes sobre su intimidad no son competencia de los dirigentes del gobierno.',
       'Señalar que los jóvenes no son suficientemente competentes para aconsejar a los gobernantes.'],
      2,
      'La periodista construye una comparación: si suena absurdo que un joven le explique al presidente cómo gobernar, igual de absurdo es que el presidente le diga a un joven qué hacer con su vida íntima. Está marcando que cada quien opina fuera de su terreno.',
      'En una comparación irónica, la idea está en la simetría: lo que se dice del segundo caso vale para el primero.'),

    /* ═════════ 62 ═════════ */
    S('Interpretación de perspectivas', 'FRAGMENTO', 'ctx-sit',
      'En un debate sobre el propósito de la educación, un escritor dijo: "El aprendizaje de nuestro propio valor [...] es lo primero. Nunca llegará a saber nada el que no sabe de sus propios derechos y posibilidades. Por eso la educación que tiraniza y que irrespeta, la educación que masifica es fuente de todos los fracasos y todas las violencias. Por ello la educación no es simplemente la solución a los problemas de la sociedad: a veces es el problema. Puede educarnos en la exclusión, en el racismo, en el clasismo, en las manías de la estratificación social. Sólo cierto tipo de educación forma realmente individuos y forma ciudadanos". (Tomado de: Ospina, W. (2009). Educación. El Espectador).',
      '¿Cuál de las siguientes ideas sobre la educación NO es afín con la posición del escritor?',
      ['El reconocimiento de la dignidad de quien aprende es fundamento necesario para educar en el arte de pensar por sí mismo.',
       'La enseñanza es una práctica de autoridad que ejerce quien tiene el conocimiento sobre aprendices que carecen de este.',
       'El conocimiento implica libertad y, por tanto, es inconcebible que este sea administrado imponiendo y negando al mismo tiempo lo que somos.',
       'La educación debería contribuir a formar conciencia sobre lo que somos y sobre el papel que desempeñamos en el mundo al que pertenecemos.'],
      1,
      'Ospina rechaza expresamente "la educación que tiraniza y que irrespeta". Definir la enseñanza como el ejercicio de autoridad de quien sabe sobre quien no sabe es justamente esa relación jerárquica que él critica.',
      'Localiza qué rechaza el autor con nombre propio; la opción que describe eso mismo en positivo es la que no le es afín.'),

    /* ═════════ 63 ═════════ */
    S('Constitución y derechos', 'SITUACIÓN', 'ctx-sit',
      'Las directivas de un colegio han decidido modificar el manual de convivencia. Las nuevas normas indican que las jóvenes estudiantes no podrán tener el cabello de ningún color distinto al de su nacimiento; es decir, no podrán someter su cabello a ningún procedimiento químico que cambie su color, así como tampoco podrán portar aretes u objetos similares. Por su parte, los jóvenes no podrán tener el cabello largo ni tener tatuajes visibles. La Asociación de padres de familia y el rector señalaron que estos cambios procuran mantener la buena imagen de la institución. Los estudiantes, por su lado, manifestaron su inconformidad con la decisión, puesto que consideran que se están violando sus derechos fundamentales.',
      'El principal derecho que está violando el manual de convivencia es:',
      ['El artículo 16 de la Constitución, el cual señala que "todas las personas tienen derecho al libre desarrollo de su personalidad sin más limitaciones que las que imponen los derechos de los demás y el orden jurídico".',
       'El artículo 20 de la Constitución, el cual señala que "se garantiza a toda persona la libertad de expresar y difundir su pensamiento y sus opiniones, la de informar y recibir información veraz e imparcial".',
       'El artículo 18 de la Constitución, el cual señala que "se garantiza la libertad de conciencia. Nadie será molestado por razón de sus convicciones o creencias ni compelido a revelarlas ni obligado a actuar contra su conciencia".',
       'El artículo 19 de la Constitución, el cual señala que "se garantiza la libertad de cultos. Toda persona tiene derecho a profesar libremente su religión y a difundirla en forma individual o colectiva".'],
      0,
      'El manual regula la apariencia: color del cabello, largo, aretes, tatuajes. Decidir sobre el propio cuerpo y la propia imagen es el núcleo del libre desarrollo de la personalidad, y la buena imagen del colegio no es una limitación que impongan los derechos de los demás ni el orden jurídico.',
      'Cuando la norma toca el cuerpo o la apariencia de alguien, el derecho en juego es el libre desarrollo de la personalidad.'),

    /* ═════════ 64 ═════════ */
    S('Constitución y derechos', 'SITUACIÓN', 'ctx-sit',
      'Sofía, una joven de 16 años, les comunica a sus padres que está embarazada. Sus padres le proponen que se debe retirar del colegio y debe empezar a trabajar para garantizar el sustento económico de su hijo.',
      '¿Qué opción muestra que la propuesta de los padres de Sofía es equivocada?',
      ['Si empieza a trabajar no va a tener tiempo para cuidar a su hijo.',
       'El continuar los estudios puede darle un mejor futuro a ella y a su hijo.',
       'La responsabilidad de la crianza de los hijos es de los padres.',
       'Son sus padres los que deberían ayudarla económicamente.'],
      1,
      'Retirarla del colegio la deja sin la herramienta que mejor protege el ingreso futuro de los dos: la educación. Ese es el error de fondo de la propuesta. Las otras opciones desplazan la responsabilidad hacia otras personas en lugar de mostrar por qué la decisión perjudica a Sofía.',
      'Para refutar una propuesta, muestra el daño que causa, no quién debería hacerse cargo en su lugar.'),

    /* ═════════ 65 ═════════ */
    S('Interpretación de perspectivas', 'SITUACIÓN', 'ctx-sit',
      'En un colegio se reparten almuerzos escolares, el rector afirma que a los niños les encanta la comida y que se la comen toda, pues siempre devuelven su plato vacío, lo cual es requisito para darles el postre. Un padre de familia afirma que los niños no están contentos con la comida, algunas veces está salada, fría o picante, algunos la botan para que así les den el postre.',
      '¿Cómo podría el padre de familia darle validez a su afirmación?',
      ['Solicitando el reporte del número de almuerzos que se sirven por semana en la cafetería.',
       'Encuestando a los niños, pues ellos deben decir la verdad de lo que está pasando.',
       'Preguntando a los estudiantes y realizando visitas a la hora del almuerzo.',
       'Indagando a los otros padres de familia acerca del comportamiento de sus hijos.'],
      2,
      'La afirmación tiene dos partes: que la comida no gusta y que algunos la botan. Preguntar cubre la primera y observar en el comedor cubre la segunda. Solo encuestar deja sin comprobar lo que ocurre con los platos, y el número de almuerzos servidos no dice nada sobre si se comen.',
      'Elige el método que verifica todo lo que afirmaste: si dijiste que algo ocurre, hay que ir a verlo.'),

    /* ═════════ 66 ═════════ */
    S('Interpretación de perspectivas', 'SITUACIÓN', 'ctx-sit',
      'Antes de un partido de fútbol, durante una clase de educación física en un colegio masculino, varios estudiantes se burlan de Javier porque se dan cuenta de que se depila las piernas. Jaime, uno de sus compañeros, le grita: "¡yo no juego fútbol con gais, mejor vaya baile ballet!".',
      '¿Cuál de los siguientes prejuicios está contenido por lo que Jaime dijo?',
      ['Que los hombres que se depilan las piernas son gais.',
       'Que todos escogen lo que les gusta según sus preferencias sexuales.',
       'Que el ballet es más fácil que el fútbol.',
       'Que el fútbol es un deporte de mucha rudeza.'],
      0,
      'Jaime pasa directamente de un hecho —Javier se depila— a una conclusión sobre su orientación sexual, sin nada que la sostenga. Ese salto es el prejuicio. Lo del ballet es una burla adicional, pero el juicio anticipado está en el primer paso.',
      'El prejuicio es el salto entre lo que se observa y lo que se concluye: identifica ese salto.'),

    /* ═════════ 67 ═════════ */
    S('Interpretación de perspectivas', 'SITUACIÓN', 'ctx-sit',
      'Andrea es una estudiante que necesita sacar la máxima nota en un trabajo de lenguaje en el último periodo académico, de lo contrario, perdería la materia definitivamente. Andrea decide pagarle a un estudiante universitario para que le haga el trabajo y piensa, antes de cerrar el trato con el estudiante, "el que no arriesga no gana".',
      '¿Cuál es la noción de triunfo que motiva a Andrea a pagar para obtener una buena calificación?',
      ['Que hay que ser perseverante y disciplinado para alcanzar las metas.',
       'Que conseguir algo es cuestión de esforzarse y tomar algunos riesgos.',
       'Que ganar es conseguir lo que uno quiera sin importar los medios que utilice para ello.',
       'Que para poder ser exitoso hay que saber dónde invertir el dinero.'],
      2,
      'Andrea no se esfuerza ni persevera: paga para que otro haga el trabajo. Su idea de ganar es obtener el resultado, sin importar cómo. La frase que se repite le sirve de excusa, pero el riesgo que corre es el de ser descubierta haciendo trampa.',
      'Mira la acción, no la frase con que la persona se justifica: ahí está su verdadera idea del éxito.'),

    /* ═════════ 68 ═════════ */
    S('Constitución y derechos', 'SITUACIÓN', 'ctx-sit',
      'El alcalde de una ciudad colombiana, preocupado por el número de robos que se cometen en las noches en la zona, decide imponer un toque de queda que busca que después de las 10:00 p. m. no circulen personas por las calles.',
      '¿Por qué la propuesta del alcalde no es pertinente?',
      ['Porque no es seguro que los robos sean reales.',
       'Porque siempre habrá ladrones que se aprovechen de los demás.',
       'Porque no ataca de manera directa a los ladrones.',
       'Porque los robos también ocurren durante el día.'],
      2,
      'La medida restringe la libertad de circulación de todos los habitantes, incluidos los que no delinquen, y deja intacto el problema de fondo: quién está robando. Ataca a las víctimas potenciales en lugar de a los responsables.',
      'Evalúa si la medida golpea la causa del problema o solo a quienes lo padecen.'),

    /* ═════════ 69 ═════════ */
    S('Constitución y derechos', 'SITUACIÓN', 'ctx-sit',
      'Los miembros del consejo directivo de una institución educativa se encuentran preocupados por el creciente número de estudiantes que consumen bebidas alcohólicas al interior del plantel. El rector propone castigar con la expulsión a este tipo de conductas. Sin embargo, los padres de familia, que también hacen parte del consejo, advierten que esta actitud podría acarrear más problemas que soluciones al problema que se enfrentan.',
      'Dentro de sus argumentos el que más fuerza representa sería el que indica que al expulsar a los jóvenes consumidores',
      ['se convertirían en héroes de sus compañeros al desafiar el manual de convivencia del plantel.',
       'estos probablemente seguirán consumiendo al no tener reglas que cumplir, como las que propone la institución.',
       'las familias tendrían que inscribir a sus hijos en programas de rehabilitación, que no garantizan su derecho a la educación.',
       'la comunidad en la que se encuentra inscrito el plantel rechazaría esta actitud y promovería su cierre.'],
      2,
      'El argumento más fuerte es el que muestra que la sanción vulnera un derecho fundamental: expulsar deja al joven fuera del sistema educativo, y el colegio existe justamente para garantizar ese derecho. Los demás argumentos son especulaciones sobre reacciones ajenas.',
      'Entre varios argumentos, el más fuerte suele ser el que apela a un derecho, no el que predice una reacción.'),

    /* ═════════ 70 ═════════ */
    S('Constitución y derechos', 'SITUACIÓN', 'ctx-sit',
      'Uno de los parques de una ciudad es frecuentado en las horas de la tarde, principalmente, por un grupo de niños y sus padres, luego de que termina la jornada escolar; sin embargo, debido a su tamaño y sus zonas verdes, el parque también ha empezado a ser visitado a diario por un grupo de jóvenes cuyas edades oscilan entre los 20 y los 25 años. Generalmente, el parque es usado por los niños para recrearse, interactuar con la naturaleza y estimular su crecimiento, mientras que, por los jóvenes mayores, es usado para practicar deportes extremos, fumar y escuchar música a alto volumen. Los padres de los niños han puesto una queja ante las autoridades respectivas, argumentando que el humo y el volumen de la música pueden afectar la salud de los niños; en consecuencia, las autoridades han informado a los jóvenes que no pueden fumar y escuchar música a alto volumen en el parque mientras los niños se encuentren allí. Frente a esto, los jóvenes han manifestado que no están de acuerdo con la decisión tomada por las autoridades y afirman que es un atentado a la libertad de expresión.',
      'Teniendo en cuenta lo establecido en la Constitución Política, las autoridades tomaron esa decisión porque',
      ['los derechos de los padres prevalecen sobre los derechos de los jóvenes.',
       'los derechos de los niños prevalecen sobre los derechos de los demás.',
       'la libertad de expresión no es un derecho fundamental en Colombia.',
       'el derecho a la naturaleza se debe respetar en Colombia.'],
      1,
      'La Constitución establece expresamente que los derechos de los niños prevalecen sobre los derechos de los demás, y es esa regla la que resuelve el choque en el parque. No se trata de los padres frente a los jóvenes, y la libertad de expresión sí es un derecho fundamental, solo que aquí cede.',
      'Recuerda la regla de prevalencia: cuando hay niños de por medio, sus derechos van primero.'),

    /* ═════════ 72 ═════════ */
    S('Conflicto armado y memoria', 'FRAGMENTO', 'ctx-sit',
      'La Fundación Paz y Reconciliación, por medio del Observatorio de Violencia Política, registra que entre 2013 y agosto de 2018 se contabilizaron cuatro homicidios de líderes sociales que defendían la restitución de tierras en la región del Urabá. Por su parte, el Instituto Popular de Capacitación afirma que, entre 2008 y 2017, fueron asesinados 73 reclamantes de tierras en Urabá. Adicionalmente, la organización Somos Defensores denuncia que entre 2009 y 2016 actores armados asesinaron a 24 líderes en esta región. Como en muchas otras regiones del país, el vacío de poder que dejó la desmovilización de las FARC, y que el Estado no ha podido llenar, está empezando a cobrar factura. Según Prensa Rural, en este año [2018] se ha disparado la violencia. Paradójicamente, a pesar de esta situación, la región del Urabá presenta un alto crecimiento económico. Según el informe de la Cámara de Comercio en 2016, esta zona históricamente bananera y platanera mostró un excelente desempeño durante 2016. La constitución de empresas creció en un 5,4 % entre 2015 y 2016, la construcción está en ascenso y la compra de vivienda creció en un 16 %, pero existe otra cara de estas positivas cifras: la victimización de líderes, campesinos e indígenas que se da paralelamente con este desarrollo económico. Esta comunidad se opone a la "inversión social" realizada por grupos legales. Por esto han sido acusados de impedir el desarrollo de la región. Sin embargo, como afirma uno de los líderes sociales: "el deseo del progreso está presente, pero no bajo la luz de la violencia y la legalidad"; ellos prefieren que sea el Estado el encargado, ya que las carreteras que tienen son ilegales y son utilizadas para transportar mercancía ilícita.',
      '¿Cuáles de los siguientes factores podrían vincularse como causas de los asesinatos y la violencia contra líderes sociales en la región del Urabá?',
      ['La fuerte competencia en el mercado de las empresas bananeras y la oposición de la comunidad a la inversión social.',
       'El interés de los líderes en la restitución de tierras y el crecimiento en la constitución de empresas.',
       'La ausencia del Estado y la presencia de grupos ilegales relacionados con el narcotráfico.',
       'El alto crecimiento económico y el interés de la comunidad por la inversión estatal.'],
      2,
      'El texto lo dice con todas sus letras: el vacío de poder que dejó la desmovilización de las FARC y que el Estado no ha llenado, sumado a carreteras ilegales usadas para transportar mercancía ilícita. El crecimiento económico aparece como una paradoja que ocurre al mismo tiempo, no como la causa de los asesinatos.',
      'Que dos hechos ocurran a la vez no significa que uno cause el otro: el texto marca cuál es causa y cuál es coincidencia.'),

    /* ═════════ 73 ═════════ */
    S('Historia de Colombia', 'FRAGMENTO', 'ctx-sit',
      'En 2016, ciudadanos estadounidenses protestaron en varias ocasiones por algunos episodios de exceso en el uso de la fuerza por miembros de la policía y otras situaciones de discriminación en contra de ciudadanos afroamericanos. Durante las protestas un afroamericano dijo: "El New Black Panther Party, un movimiento reivindicativo del ‘poder negro’, portará armas como símbolo de autodefensa durante las protestas en Cleveland (Ohio) en los días previos a la Convención Nacional Republicana. Así lo afirmó este miércoles el presidente del movimiento: ‘Si el Estado permite portar armas a la vista, ejerceremos nuestro derecho de la segunda enmienda de la Constitución porque existen otros grupos que amenazan con hacernos daño’, dijo Hashim Nzinga, presidente del movimiento Nuevo Partido Panteras Negras". (Tomado y adaptado de: Alonso, N. (14 de julio de 2016). Los Nuevos Panteras Negras anuncian que portarán armas durante la Convención Republicana. El País).',
      'De los siguientes procesos históricos, ¿cuál influyó de manera directa en el surgimiento de este movimiento ciudadano?',
      ['La lucha por los derechos civiles (década de 1960).',
       'La Primera Guerra Mundial (1914-1918).',
       'La Revolución cubana (década de 1950).',
       'La Segunda Guerra Mundial (1939-1945).'],
      0,
      'El nombre mismo lo delata: el Nuevo Partido Panteras Negras retoma el de las Panteras Negras originales, nacidas en Estados Unidos en los años sesenta durante el movimiento por los derechos civiles de la población afroamericana. Esa es la línea directa.',
      'Cuando un movimiento se llama "nuevo" algo, busca el original: ahí está el proceso que lo influyó.'),

    /* ═════════ 74 ═════════ */
    S('Geografía y territorio', 'SITUACIÓN', 'ctx-sit',
      'En los últimos años han aumentado las campañas publicitarias para evitar el uso de bolsas y botellas plásticas, pitillos, latas, vasos desechables y, en general, artículos que se utilizan por unos minutos y, luego, se tiran a la basura. En estas campañas se propone que estos artículos sean reemplazados por unos que no estén hechos de plástico o que se puedan reutilizar; por ejemplo, bolsas de tela, botellas de cristal o de acero inoxidable. Los comportamientos que promueven estas campañas publicitarias son adoptados más fácilmente por unas personas que por otras. Los siguientes cuatro enunciados expresan creencias que podrían favorecer, o no, la adopción de los comportamientos promovidos por las campañas publicitarias mencionadas: <b>1.</b> Las futuras generaciones dependen de la consideración que, como ciudadanos, tengamos en el presente sobre el medioambiente. <b>2.</b> La responsabilidad del cuidado ambiental es un asunto de voluntad política que les corresponde a los científicos y a los gobiernos. <b>3.</b> Las acciones de cuidado ambiental, aunque sean pequeñas y cotidianas, tienen consecuencias colectivas e impacto a largo plazo. <b>4.</b> La tecnología ayudará al ser humano a encontrar una solución innovadora para el manejo de los residuos y desechos cotidianos.',
      '¿Cuál de las siguientes opciones presenta dos creencias que favorecen la adopción de los comportamientos promovidos por las campañas publicitarias descritas?',
      ['La primera y la tercera.', 'La segunda y la cuarta.', 'La tercera y la segunda.', 'La cuarta y la primera.'], 0,
      'Las creencias que empujan a actuar son las que ponen la responsabilidad en uno mismo: que lo que hagamos hoy afecta a quienes vienen, y que los gestos pequeños suman. Las otras dos delegan el problema en los gobiernos, los científicos o la tecnología futura, y por eso invitan a no hacer nada.',
      'Una creencia favorece la acción cuando le da al individuo un papel; si se lo entrega a otros, la desalienta.'),

    /* ═════════ 75 ═════════ */
    S('Geografía y territorio', 'SITUACIÓN', 'ctx-sit',
      'La Amazonia es la selva tropical más extensa del planeta; alberga gran cantidad de biodiversidad y cumple funciones de vital importancia para la humanidad como absorber dióxido de carbono de la atmósfera, liberar oxígeno y ayudar a estabilizar el clima global. Sin embargo, entre el 2015 y el 2018 se ha aumentado la deforestación en esta zona, y no hay estrategias para recuperarla al nivel de la evolución de los miles de años que ha tomado formarla. En la Amazonia colombiana la deforestación está relacionada con la ganadería extensiva: ganaderos tumban selva, la queman o la sierran, para ocuparla y sembrar pastos. Esto implica la destrucción del hábitat natural de múltiples especies silvestres y la contaminación del agua y el suelo por el uso de fertilizantes sintéticos, generando, a su vez, problemas de salud en las comunidades. Sin embargo, la descripción del problema de la deforestación de la Amazonia colombiana está incompleta, pues hay otros factores o situaciones asociados a este. Considere la siguiente lista: <b>1.</b> La consolidación del turismo de masas. <b>2.</b> El abandono estatal de la selva tropical. <b>3.</b> El atentado contra el oleoducto transandino en Tumaco. <b>4.</b> La usurpación de áreas protegidas y zonas de resguardo indígena. <b>5.</b> La tala selectiva de árboles vírgenes, que pueden tener más de 200 años de vida.',
      '¿Cuáles de las anteriores situaciones están asociadas directamente al problema de la deforestación de la Amazonia en Colombia?',
      ['1, 3 y 5.', '1, 3 y 4.', '2, 3 y 5.', '2, 4 y 5.'], 3,
      'Talar árboles vírgenes es deforestación directa; ocupar áreas protegidas y resguardos abre nuevos frentes de tala; y sin presencia del Estado nadie controla ninguna de las dos. El oleoducto de Tumaco está en Nariño, no en la Amazonia, y el turismo de masas no es un fenómeno de esa selva.',
      'Descarta primero los elementos que ni siquiera ocurren en el territorio del que habla la pregunta.'),

    /* ═════════ 76 ═════════ */
    S('Constitución y derechos', 'SITUACIÓN', 'ctx-sit',
      'Durante los últimos años, en una ciudad, se ha incrementado el hurto a ciudadanos por parte de personas que se movilizan en moto y van acompañadas por "parrilleros". Por esta razón, la alcaldía de la ciudad propuso decretar la prohibición del "parrillero", es decir, que quienes se movilicen en moto no pueden llevar acompañantes, para que sea mucho más fácil la identificación de los involucrados. Esta propuesta generó gran polémica, sobre todo en algunos grupos de usuarios de motos, quienes afirman que, con esta medida, el número de hurtos no se disminuiría y que, por el contrario, afectaría a quienes utilizan este vehículo para trabajar, desplazar a su familia y llevar a sus hijos al colegio; su propuesta es que se quite toda regulación existente para el uso de las motos en la ciudad.',
      'De acuerdo con esto, el concejo de la ciudad revisó la viabilidad de la medida y, con base en el modelo de Estado Social de Derecho, decide apoyar la propuesta de la alcaldía, argumentando que',
      ['la norma propuesta desde la alcaldía tiene como fundamento estudios previos realizados, razón por la cual se asegura su efectividad para reducir la cifra de hurtos.',
       'las propuestas planteadas desde la alcaldía juegan un papel fundamental para la convivencia, y si estas no obtienen los resultados esperados pueden ser modificadas.',
       'la propuesta presentada por la alcaldía va a ser modificada teniendo en cuenta lo expuesto por el grupo de moteros, en especial, por ser estos los principales afectados.',
       'las normas planteadas desde la alcaldía buscan el bienestar común y, para esto, no pueden tener en cuenta la opinión de particulares, en especial, si están siendo afectados.'],
      1,
      'En un Estado Social de Derecho las normas se dictan buscando la convivencia y pueden revisarse si no funcionan: eso justifica apoyar la medida sin cerrarse a corregirla. El texto nunca menciona estudios previos, y decir que no se puede escuchar a los afectados contradice ese mismo modelo de Estado.',
      'Desconfía de las opciones que afirman certezas que el texto no da ("estudios previos") o que niegan la participación ciudadana.'),
  ],
};

/* La ruta: dieciocho cuestionarios cortos, agrupados por tema.
 * El título lleva «Deadpool» para que el docente sepa de qué formulario
 * físico viene cada uno. */
const CUESTIONARIOS = {
  soc: [
    { tema: 'Constitución y derechos', items: [
      { id: 'soc-67', titulo: 'Deadpool · Diversidad y derechos',     qs: [1, 3, 13],   tipo: 'Situación' },
      { id: 'soc-68', titulo: 'Deadpool · Cuerpo y educación',        qs: [32, 33, 44], tipo: 'Situación' },
      { id: 'soc-69', titulo: 'Deadpool · Convivencia y prevalencia', qs: [37, 38, 39], tipo: 'Situación' },
    ]},
    { tema: 'Mecanismos de participación', items: [
      { id: 'soc-70', titulo: 'Deadpool · Participar de verdad',      qs: [26, 27],     tipo: 'Situación' },
    ]},
    { tema: 'Organización del Estado', items: [
      { id: 'soc-71', titulo: 'Deadpool · Modelos de Estado',         qs: [0, 4],       tipo: 'Situación' },
      { id: 'soc-72', titulo: 'Deadpool · Control y presupuesto',     qs: [14, 20],     tipo: 'Situación' },
    ]},
    { tema: 'Conflicto armado y memoria', items: [
      { id: 'soc-73', titulo: 'Deadpool · Paramilitarismo y líderes', qs: [7, 40],      tipo: 'Situación' },
    ]},
    { tema: 'Geografía y territorio', items: [
      { id: 'soc-74', titulo: 'Deadpool · Café y denuncias',          qs: [16, 22],     tipo: 'Situación' },
      { id: 'soc-75', titulo: 'Deadpool · Mercurio y deforestación',  qs: [28, 42, 43], tipo: 'Situación' },
    ]},
    { tema: 'Economía y sociedad', items: [
      { id: 'soc-76', titulo: 'Deadpool · Acuerdos comerciales',      qs: [2, 9, 10],   tipo: 'Situación' },
      { id: 'soc-77', titulo: 'Deadpool · Crisis y economía legal',   qs: [8, 15, 29],  tipo: 'Situación' },
    ]},
    { tema: 'Historia de Colombia', items: [
      { id: 'soc-78', titulo: 'Deadpool · Guerra Fría y región',      qs: [5, 6, 11],   tipo: 'Situación' },
      { id: 'soc-79', titulo: 'Deadpool · Colombia en el siglo XX',   qs: [17, 18, 21], tipo: 'Situación' },
      { id: 'soc-80', titulo: 'Deadpool · Panamá y derechos civiles', qs: [24, 41],     tipo: 'Situación' },
    ]},
    { tema: 'Interpretación de perspectivas', items: [
      { id: 'soc-81', titulo: 'Deadpool · Intención del discurso',    qs: [12, 19, 23], tipo: 'Situación' },
      { id: 'soc-82', titulo: 'Deadpool · Educación y ciudadanía',    qs: [25, 30, 31], tipo: 'Situación' },
      { id: 'soc-83', titulo: 'Deadpool · Comprobar y decidir',       qs: [34, 35, 36], tipo: 'Situación' },
    ]},
  ],
};
