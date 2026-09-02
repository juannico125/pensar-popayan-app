/* Sociales y Ciudadanas · quinto cuadernillo (F5) · lote 2026-B
 *
 * Fuente: el cuadernillo «F5 SyC · Aladín» entregado por el instituto,
 * 46 preguntas numeradas 31 a 76, igual que F1, F2, F3 y F4.
 *
 * El nombre del personaje de portada es el identificador que usa el docente
 * en el preuniversitario para saber en qué formulario físico está una
 * pregunta. Por eso «Aladín» va en el título de cada cuestionario de este
 * cuadernillo, no solo en este comentario.
 *
 * ⚠ El cuadernillo repite una pregunta: la 50 y la 75 son el mismo discurso
 * de Pierre Trudeau, con el mismo enunciado y las mismas cuatro opciones
 * (la 75 trae erratas de imprenta: «recibieron»/«el mayor apoyo»). Se carga
 * una sola vez, desde la 50. Quedan 45 preguntas únicas de las 46 impresas.
 *
 * El cuadernillo NO trae hoja de respuestas. Las claves las determinó el
 * modelo leyendo cada situación, y por eso se cargan con
 * `clave_origen = 'modelo'`. `confianza: 'media'` marca las que admiten una
 * segunda lectura defendible y que el docente debería revisar primero:
 *
 *   · Pregunta 71 («mayoría incompetente») — el antónimo directo es «apta»,
 *     pero «informada» también se defiende si se lee «incompetente» como
 *     falta de criterio por desinformación.
 *   · Pregunta 72 (relación entre los tres textos) — depende de si el texto
 *     (III) se lee como descripción neutral o como crítica; la clave asume
 *     lo segundo.
 *
 * Las explicaciones nunca nombran una letra: las opciones se barajan por
 * estudiante.
 */

const S = (comp, ctxLabel, ctxClass, context, text, opts, correct, exp, tip, confianza) => ({
  comp, ctxLabel: ctxLabel || null, ctxClass: ctxClass || null, context: context || null,
  text, opts, correct, exp, tip, confianza: confianza || 'alta',
});

/* Los tres fragmentos sobre democracia que comparten las preguntas 71 y 72. */
const TRES_TEXTOS = '<p>(I) "El argumento más poderoso contra la democracia es una conversación de cinco minutos con el votante medio".</p><p style="font-size:.85em">Adaptado de: Ovejero, F. (2008). <i>Incluso un pueblo de demonios: democracia, liberalismo, republicanismo</i>. Madrid: Katz Editores.</p><p>(II) "La democracia sustituye el nombramiento hecho por una minoría corrompida, por la elección debida a una mayoría incompetente".</p><p style="font-size:.85em">George Bernard Shaw. Epígrafe de: Ovejero, F. (2008). <i>Incluso un pueblo de demonios: democracia, liberalismo, republicanismo</i>. Madrid: Katz Editores.</p><p>(III) "Aunque la tradición política democrática se remonta a la antigua Grecia, los pensadores políticos no se ocuparon de la causa democrática hasta el siglo XIX. Hasta entonces venía desechándose la democracia como el gobierno de las masas ignorantes y sin luces. Hoy parece que todos nos hemos vuelto demócratas sin contar con argumentos sólidos a favor. Los liberales, los conservadores, los socialistas, los comunistas, los anarquistas y hasta los fascistas se han apresurado a proclamar las virtudes de la democracia y a mostrar sus credenciales demócratas".</p><p style="font-size:.85em">Adaptado de: Heywood, A. (2010). <i>Introducción a la teoría política</i>, p. 55. Valencia: Tirant lo Blanch.</p>';

/* La tabla de propuestas contra la corrupción, compartida por 73 y 74. */
const TABLA_CORRUPCION = '<p><b>Propuestas contra la corrupción</b></p><table class="ctx-table"><tr><th>N.º</th><th>Acciones</th><th>Propuestas</th></tr><tr><td>1.</td><td>Cobertura de leyes</td><td>Extender la ley de transparencia a partidos y sindicatos que se financian con fondos públicos.</td></tr><tr><td>2.</td><td>Legislación</td><td>Modificar y endurecer las penas.</td></tr><tr><td>3.</td><td>Administración de los recursos</td><td>Registro público de las cuentas de los partidos.</td></tr><tr><td>4.</td><td>Control y auditoría</td><td>Doble control a los responsables económicos de los partidos políticos.</td></tr><tr><td>5.</td><td>Hacienda pública</td><td>Declaraciones tributarias y de bienes a los cargos públicos.</td></tr><tr><td>6.</td><td>Inspección de aportes</td><td>Fiscalizar los ingresos y los gastos de las fundaciones vinculadas a los partidos políticos.</td></tr></table>';

const BANKS = {
  soc: [
    /* ═════════ 31 ═════════ */
    S('Economía y sociedad', 'SITUACIÓN', 'ctx-sit',
      'Recientemente, las autoridades nacionales han manifestado su preocupación por las alarmantes cifras de embarazo adolescente en Colombia. Se estima que una de cada cinco adolescentes entre los 15 y los 19 años de edad es madre o está embarazada. Esta problemática se encuentra influenciada por varias dimensiones. Por ejemplo, geográficamente tiende a afectar a las regiones rurales donde se registra una tasa más alta de embarazos adolescentes; económicamente, refuerza el círculo de la pobreza al reducir las posibilidades de formación e inserción en la vida laboral de las mujeres; culturalmente se asocia con patrones de conducta que impiden la formulación de un plan de vida independiente para las mujeres; y socialmente está relacionado con la deserción escolar. Con el fin de mitigar el embarazo adolescente en el país, se realizó una campaña de sensibilización sobre el uso de los métodos anticonceptivos y la importancia de tomar decisiones responsables respecto al futuro, la cual se concentró especialmente en ambientes educativos de las principales ciudades del país.',
      '¿Qué dimensión del problema fue privilegiada en la campaña propuesta para reducir el embarazo adolescente?',
      ['Económica, ya que se necesita una gran inversión de recursos para implementar la política y garantizar sus resultados a largo plazo.',
       'Cultural, ya que se encaminó a transformar patrones de conducta y generar conciencia sobre el problema y cómo prevenirlo.',
       'Social, ya que garantiza la permanencia de las mujeres en los planteles educativos.',
       'Geográfica, ya que se focalizó en las zonas del país con más población adolescente.'], 1,
      'La campaña no reparte dinero ni construye colegios: sensibiliza sobre anticoncepción y sobre tomar decisiones responsables. Eso ataca los patrones de conducta y las creencias, que es la dimensión cultural que el propio texto describe. Y se hizo en las principales ciudades, así que tampoco se focalizó en lo rural.',
      'Para saber qué dimensión privilegió una política, mira qué hace la acción concreta, no qué problema dice atacar.'),

    /* ═════════ 32 ═════════ */
    S('Interpretación de perspectivas', 'FRAGMENTO', 'ctx-sit',
      'En una columna de opinión, un periodista escribió lo siguiente: "En Colombia las cosas siempre son así. Lo más sagrado, lo que suelen llamar ‘escrito en piedra’ es siempre susceptible de retractaciones, de reformas, de enmiendas, de remiendos. Toda sentencia en firme se puede echar atrás, se puede revocar, se puede invertir; todo compromiso inamovible está sujeto a reinterpretaciones, a reformulaciones, a anulaciones; a toda disposición constitucional se le encuentra sin dificultad el quiebre". (Tomado de: Caballero, A. (2015, 23 de noviembre). Juego de Manos. Revista Arcadia).',
      'La intención del columnista en el fragmento citado es formular',
      ['una crítica al carácter inestable de los compromisos políticos y acuerdos legales en el país.',
       'una alternativa para evitar las continuas reinterpretaciones y enmiendas a las leyes nacionales.',
       'un argumento a favor de la posibilidad de reformar acuerdos y sentencias presuntamente inamovibles.',
       'una opinión favorable sobre la revocatoria de las reformas, sentencias y disposiciones constitucionales.'],
      0,
      'El tono es de reproche: "en Colombia las cosas siempre son así" y "se le encuentra sin dificultad el quiebre" no celebran nada, se quejan de que aquí nada aguanta. No propone ninguna alternativa ni defiende la posibilidad de reformar.',
      'Fíjate en las palabras cargadas ("siempre", "remiendos", "el quiebre"): revelan si el autor aprueba o reprocha lo que describe.'),

    /* ═════════ 33 ═════════ */
    S('Interpretación de perspectivas', 'FRAGMENTO', 'ctx-sit',
      'En el año 2017, un político holandés afirmó lo siguiente en la televisión pública de su país: "Den una vuelta y vean lo que está pasando. Parece que ya no estamos viviendo en nuestro propio país. Hay una batalla en las calles y nosotros tenemos que defender lo nuestro. Antes de que nos demos cuenta, habrá más mezquitas que iglesias. No digo que todos los musulmanes sean terroristas, sería ridículo, pero creo que en todos los países donde su religión es dominante, se puede observar falta de libertad y de democracia". (Tomado y adaptado de: Las 10 frases por las que Wilders podría ser primer ministro de Holanda. Diario Gaceta).',
      '¿Qué consecuencias sociales podría tener lo expresado por el político holandés?',
      ['Que la ciudadanía extranjera se sienta orgullosa de sus valores culturales, incluso por encima de los valores de los ciudadanos holandeses.',
       'Que la ciudadanía holandesa se sienta orgullosa de sus valores culturales, incluso por encima de los valores de los ciudadanos extranjeros.',
       'Que se promueva la discriminación hacia los practicantes de la religión católica por una parte de la sociedad holandesa.',
       'Que se promueva la discriminación hacia las practicantes de la religión islámica por una parte de la sociedad holandesa.'],
      3,
      'El discurso señala a un grupo concreto: habla de mezquitas que desplazan iglesias y asocia el islam con falta de libertad. Eso alimenta el rechazo hacia los musulmanes, no hacia los católicos, que en el discurso aparecen como el "nosotros" que hay que defender.',
      'Cuando un discurso nombra a un grupo como amenaza, la consecuencia social esperable es la discriminación contra ese grupo, no contra otro.'),

    /* ═════════ 34 ═════════ */
    S('Organización del Estado', 'SITUACIÓN', 'ctx-sit',
      'En Colombia se desarrolló una política de subsidios para impulsar el crecimiento agrícola y la producción de alimentos. Quienes quisieran recibir algún subsidio debían participar en una convocatoria pública. Sin embargo, un sector privado de la producción de alimentos entabló conversaciones directas con los directivos públicos de la política de subsidios y los convencieron de elegirlos directamente, a cambio de una suma de dinero. La razón dada por los directores públicos para la selección del sector privado fue que estos eran los más apropiados para dicho subsidio y que así no tendrían que acudir al concurso de méritos e inspección de los otros candidatos, lo que ahorraría tiempo y dinero para el sector público.',
      'En esta situación, el sector público',
      ['protege la Constitución, ya que está actuando de manera eficiente al buscar ahorrar tiempo y dinero del sector público.',
       'atenta contra la Constitución, porque los subsidios para el sector agrícola y la producción de alimentos son ilegales en Colombia.',
       'protege la Constitución, ya que los subsidios no se pueden otorgar por concurso de méritos en Colombia.',
       'atenta contra la Constitución, porque incurre en un abuso de autoridad, ya que está influenciando una decisión pública para su propio interés.'],
      3,
      'Los funcionarios recibieron dinero por saltarse la convocatoria pública. Usar el cargo para beneficio propio es abuso de autoridad, y ninguna eficiencia justifica eso. Los subsidios agrícolas no son ilegales, y el concurso de méritos es justamente el mecanismo que se eludió.',
      'Si alguien con poder público recibe un beneficio particular por una decisión oficial, ya no importa qué tan eficiente parezca la decisión.'),

    /* ═════════ 35 ═════════ */
    S('Geografía y territorio', 'SITUACIÓN', 'ctx-sit',
      'Una región de Colombia se caracteriza por tener tierras productivas y una gran riqueza ambiental. Sin embargo, la tasa de desempleo de la población en edad productiva es del 20 %. Frente a esta situación, el Gobierno contempla dos posibles alternativas. La primera consiste en eliminar los requisitos ambientales para la obtención de licencias mineras, con lo que se proyecta un incremento significativo de esta actividad, que según el Gobierno se reflejaría en una reducción del desempleo al 12 %. La segunda alternativa permitiría la operación de empresas de turismo ecológico en zonas de reserva, medida que según estimativos del Gobierno reduciría el desempleo al 18 %. En el último caso, las empresas se comprometen a emplear a la población local y pagar impuestos para promover el desarrollo de la región.',
      'La primera propuesta planteada por el Gobierno es',
      ['positiva, porque disminuiría el desempleo significativamente y aumentaría la productividad de la tierra en la región.',
       'negativa, porque a pesar de reducir en 8 % el desempleo su impacto en el desarrollo económico de la región es marginal.',
       'positiva, porque reduciría el desempleo en 8 % y tendría un impacto marginal sobre el medio ambiente de la región.',
       'negativa, porque aunque reduciría el desempleo significativamente podría tener altos costos ambientales para la región.'],
      3,
      'Bajar el desempleo del 20 % al 12 % sí es una reducción importante, así que el reparo no está en el efecto económico. El problema es el precio: eliminar los requisitos ambientales en una región de gran riqueza ambiental abre la puerta a daños que la propia región paga.',
      'En estas preguntas revisa las dos mitades de la opción por separado: muchas fallan porque el "porque" no encaja con el juicio inicial.'),

    /* ═════════ 36 ═════════ */
    S('Geografía y territorio', 'SITUACIÓN', 'ctx-sit',
      'En las inmediaciones de un colegio se localiza un caño que fue por mucho tiempo un foco de problemas y conflictos. Por un lado, algunos habitantes de la zona arrojaban con frecuencia residuos orgánicos e inorgánicos al caño, lo cual generaba emanaciones que afectaron la salud de algunos estudiantes y docentes. Por otro lado, los atracos a lo largo del caño se volvieron un problema diario, debido a la falta de vigilancia en la zona. Sumado a esto, recientemente una parte del caño se había convertido en un espacio de riñas callejeras entre estudiantes. Ante esta situación, las directivas del colegio realizaron una serie de jornadas y actividades artísticas que tenían como propósito apropiarse del canal como un territorio de encuentro pacífico. Además, con la participación de la comunidad del barrio y entidades locales, se realizaron campañas para sembrar árboles y limpiar la basura del canal.',
      'En esta solución, las directivas privilegiaron las dimensiones',
      ['política y cultural.', 'ambiental y económica.', 'social y ambiental.', 'política y social.'], 2,
      'Las jornadas artísticas y el encuentro pacífico entre estudiantes y vecinos atienden la convivencia, que es la dimensión social; sembrar árboles y limpiar la basura atiende el estado del caño, que es la ambiental. No hubo decisiones de gobierno ni movimiento de dinero.',
      'Traduce cada acción concreta a una dimensión antes de mirar las opciones: sembrar árboles es ambiental, convivir es social.'),

    /* ═════════ 37 ═════════ */
    S('Mecanismos de participación', null, null, null,
      'La democracia ha subsistido en la modernidad y se ha diferenciado de otro tipo de sistemas de gobierno como los totalitarios o los de tradición hereditaria. ¿Cuál de las siguientes figuras es fundamental y encierra uno de los principios para que un sistema pueda ser considerado como democrático?',
      ['Un ejército y una fuerza policial fuerte para cohesionar los intereses, asegurar la defensa y los principios de toda la población.',
       'Un organismo único de comunicación donde el Gobierno pueda informar sobre los avances de su gestión.',
       'Unos partidos políticos que representen los intereses del pueblo y aseguren la posibilidad de ejercer oposición política.',
       'Unos centros de pensamiento que conformen y creen la ideología académica que respalde los principios democráticos.'],
      2,
      'Lo que distingue a una democracia de un régimen totalitario es que el poder se puede disputar y criticar: por eso hacen falta partidos que representen distintos intereses y una oposición con garantías. Un solo canal oficial de información es justamente lo contrario.',
      'Cuando la pregunta contrasta democracia con totalitarismo, la respuesta casi siempre tiene que ver con pluralidad y oposición.'),

    /* ═════════ 38 ═════════ */
    S('Interpretación de perspectivas', 'FRAGMENTO', 'ctx-sit',
      'El cine llegó a Colombia a finales del siglo XIX. La primera función tuvo lugar el 14 de abril de 1897, en Puerto Colón, Panamá, que para entonces hacía parte del territorio nacional. Uno de los periódicos que reportó este acontecimiento, The Colon Telegram, afirmaba: "El efecto es sumamente realista y da prueba de los avances hechos por la ciencia en nuestros días". Así, a pesar de la curiosidad que representó el cine para muchos colombianos, también despertó inquietudes en relación con los potenciales riesgos que tendrían las películas para niños y jóvenes. Por ejemplo, a principios del siglo XX, un reconocido médico publicó en un libro el siguiente llamado de atención: "en la adolescencia es cuando el cine va a ejercer sus más desastrosas influencias, porque va a acentuar y a hacer más peligrosas las perturbaciones de la pubertad y porque le va a dar armas de dudosa moral a un ser desequilibrado y enloquecido por el despertar de las pasiones". (Adaptado de: Torres Umaña, C. (1935). Nociones de Puericultura, p. 19).',
      'A partir de la información anterior, ¿es posible inferir que el cine tuvo una influencia negativa en el comportamiento de los adolescentes colombianos de principios del siglo XX?',
      ['Sí, porque el médico tiene la autoridad académica e intelectual para hablar de los efectos del cine en todos los adolescentes.',
       'Sí, porque el argumento está basado en evidencia médica que indica que el cine es un instrumento nocivo para cualquier adolescente.',
       'No, porque el cine fue recibido positivamente por toda la comunidad científica y académica como una prueba del avance técnico y social de la época.',
       'No, porque el médico hace una generalización sobre los efectos del cine en los adolescentes sin presentar evidencia que sustente esa relación causal.'],
      3,
      'El médico afirma, no demuestra: en su texto no hay un solo dato, estudio o caso que conecte ver cine con un cambio de comportamiento. Su título le da autoridad para opinar, pero la autoridad no reemplaza la evidencia.',
      'Una afirmación no se vuelve evidencia por venir de un experto. Pregunta siempre: ¿con qué datos lo sostiene?'),

    /* ═════════ 39 ═════════ */
    S('Economía y sociedad', 'FRAGMENTO', 'ctx-sit',
      'Los estudios acerca de la desigualdad en la distribución mundial de la riqueza indican que aunque la riqueza a nivel mundial va en aumento, esto no significa que la desigualdad disminuya. Al respecto, el economista francés Thomas Piketty señala que la desigualdad entre el dinero que una persona puede acumular gracias a su trabajo y a sus ahorros en el transcurso de su vida, y el dinero que ya poseen o pueden continuar acumulando quienes heredan un capital económico importante, "puede potencialmente llevar a la dinámica mundial de la acumulación y de la distribución de los patrimonios hacia trayectorias explosivas y espirales de desigualdad fuera de todo control". (Tomado de: Piketty, T. (2013). El capital en el siglo XXI, p. 482).',
      '¿Cuál de los siguientes enunciados apoya la posición del economista?',
      ['El aumento de la riqueza en un país provoca la disminución de la desigualdad económica.',
       'El aumento de la riqueza entre los ricos promueve el aumento de la riqueza entre los pobres.',
       'El aumento de la riqueza de unos pocos puede llevar a la desigualdad económica de muchos.',
       'El aumento de la riqueza a nivel mundial es causa necesaria y suficiente del aumento de la desigualdad económica.'],
      2,
      'Piketty describe justamente eso: cuando el capital heredado crece más rápido que lo que alguien puede ahorrar trabajando, la brecha se ensancha. Habla de una tendencia posible ("puede potencialmente"), no de una causa necesaria y suficiente, que es una afirmación mucho más fuerte de la que él hace.',
      'Desconfía de las opciones con "necesaria y suficiente" o "siempre": suelen exagerar lo que el autor realmente dijo.'),

    /* ═════════ 40 ═════════ */
    S('Geografía y territorio', 'FRAGMENTO', 'ctx-sit',
      '<p>El fracking es una técnica de minería que permite extraer gas y petróleo del subsuelo que se encuentran atrapados en rocas madre a varios kilómetros de profundidad. Esta técnica no convencional ha generado controversia, pues implica el uso de agua que se inyecta en la tierra a alta presión junto con muchos componentes químicos, lo cual puede generar riesgos como contaminación de aguas subterráneas y aumento de sismicidad y radioactividad en el terreno. A continuación se presentan dos artículos de prensa que discuten la posible implementación del fracking en Colombia y España:</p><p><b>1.</b> En Colombia en 2014 varias organizaciones de la sociedad civil enviaron una carta al gobierno colombiano en la que se especificaban los posibles riesgos y la incertidumbre sobre los efectos que dicha técnica presenta para el agua, la calidad del aire, la atmósfera, la población aledaña a la explotación mediante fracking y para los ecosistemas de las zonas cercanas. En dicha carta instaban al Gobierno colombiano a sobreponer el principio de precaución a los intereses económicos de empresas interesadas en implementar esta técnica en el territorio.</p><p><b>2.</b> En 2013, Iker García, vocal del Colegio Oficial de Ingenieros Técnicos de Minas del País Vasco, Navarra, La Rioja y Soria, informó que los aditivos que se emplean habitualmente son compuestos como el ácido clorhídrico, ácido cítrico, glutaaldehído, bisulfito de amonio y el etilenglicol, entre otros. Así mismo, comentó que en general estos aditivos no son perjudiciales para el medioambiente, "aunque puede haber alguno tóxico, no se tiene conocimiento de efectos negativos en la salud. Pero se está tendiendo cada vez más los productos ecológicos y biológicos, que no alteran nada en absoluto".</p>',
      '¿En qué coinciden ambas fuentes periodísticas?',
      ['En denunciar que los gobiernos de España y Colombia han decidido implementar el fracking a pesar de las advertencias de las organizaciones ciudadanas y la prensa.',
       'En priorizar las desventajas del uso del fracking por sus consecuencias negativas en la salud y el medio ambiente por encima de las ventajas económicas.',
       'En resaltar que es inevitable el uso de las técnicas no convencionales como el fracking para garantizar el futuro de la explotación minero-energética en países productores como España y Colombia.',
       'En señalar que los alcances de algunos impactos sociales y ambientales del fracking, principalmente lo referente a la toxicidad, no se han establecido con suficiente nivel de certeza.'],
      3,
      'Las dos fuentes discrepan en el juicio pero coinciden en un hecho: no se sabe con certeza qué tan tóxico es. La primera habla de "incertidumbre sobre los efectos"; la segunda admite que "puede haber alguno tóxico" y que "no se tiene conocimiento" de efectos en la salud. La segunda fuente defiende el fracking, así que no prioriza las desventajas.',
      'Para hallar la coincidencia entre dos fuentes que se contradicen, busca el dato que ambas admiten, no la conclusión de una sola.'),

    /* ═════════ 41 ═════════ */
    S('Historia de Colombia', 'SITUACIÓN', 'ctx-sit',
      'En el siglo XVI, cuando se dieron la mayoría de los primeros contactos entre los europeos y americanos, mucha de la población de América murió a causa de las enfermedades traídas por los europeos, pues no tenían las defensas necesarias para resistirlas. Actualmente, en la región amazónica colombiana existen unos pueblos que han tenido contacto mínimo con la población mestiza, y se teme que al momento del contacto contraigan enfermedades que puedan ser mortales para ellos.',
      '¿Cómo ha cambiado esta situación desde el siglo XVI hasta la actualidad?',
      ['Antes las enfermedades eran dañinas y, en consecuencia, más mortales para la población vulnerable, pero hoy en día las personas tienen cuerpos más resistentes.',
       'Los españoles que venían a América no tenían buenos hábitos de higiene, por lo cual las enfermedades que portaban eran más dañinas y fuertes que las actuales.',
       'Ahora se conocen los efectos devastadores de enfermedades externas en poblaciones no contactadas, por lo cual se puede tener un plan de acción para mitigar sus efectos.',
       'El fenómeno de sobrepoblación actual haría que la tragedia fuera menos grave en proporción, pero igualmente morirían muchas personas en el momento del contacto.'],
      2,
      'Lo que cambió no es el cuerpo de nadie ni la higiene de nadie: cambió lo que sabemos. En el siglo XVI el contagio masivo tomó por sorpresa; hoy la historia ya ocurrió y permite anticiparse y planear la protección de esos pueblos.',
      'Cuando comparan un hecho histórico con uno actual, pregúntate qué es lo único que de verdad cambió entre los dos momentos.'),

    /* ═════════ 42 ═════════ */
    S('Interpretación de perspectivas', 'SITUACIÓN', 'ctx-sit',
      'Una universidad realiza una investigación sobre la eutanasia, también conocida como "muerte asistida". La investigación tiene como objetivo obtener datos sobre la cantidad de médicos —y de centros médicos— de una ciudad que se oponen, o que están a favor de esta práctica. Los investigadores revisan el siguiente fragmento de una declaración sobre la eutanasia de las Iglesias evangélicas colombianas: "Es irreal suponer que en la decisión de un paciente en estado terminal de poner fin a su vida está involucrada solamente su voluntad. Como se trata de una muerte ‘asistida’, necesariamente esta decisión también incluye a quien lo debe asistir, al médico. La eutanasia no promueve la libertad del paciente. Por el contrario, ejerce una presión indebida sobre la libertad de personas débiles, e invita (según el tipo de ley tal vez obliga) a los médicos a actuar contra su propia voluntad. Es precisamente en nombre de la dignidad y de la libertad que hay que oponerse a la eutanasia".',
      '¿Esta publicación es útil para cumplir el objetivo de la investigación?',
      ['Sí, porque sintetiza los argumentos filosóficos de quienes están en contra de la eutanasia.',
       'No, porque de lo expresado allí no pueden derivarse los datos que persigue la investigación.',
       'Sí, porque la investigación busca conocer los argumentos de quienes se oponen a practicar la eutanasia.',
       'No, porque allí solo se expresa el argumento de las Iglesias evangélicas colombianas.'],
      1,
      'La investigación quiere contar cuántos médicos y centros médicos están a favor o en contra. El documento expone razones, no cifras, y las razones son de unas iglesias, no de los médicos de esa ciudad. Por buena que sea la declaración, no responde la pregunta que se hizo la investigación.',
      'Antes de juzgar si una fuente sirve, relee el objetivo: si pide datos, un texto de argumentos no lo cumple.'),

    /* ═════════ 43 ═════════ */
    S('Geografía y territorio', 'SITUACIÓN', 'ctx-sit',
      'El Gobierno de un país con una alta tasa de desempleo pretende explotar intensivamente sus recursos naturales, con el objetivo de garantizarle trabajo a una parte significativa de su población. Considera que la medida reactivará otros sectores productivos, como el comercio, y permitirá un crecimiento económico generalizado. Sin embargo, diversos grupos de ecologistas se oponen a la medida, por lo que adelantan campañas en medios de comunicación y marchas pacíficas. Estas organizaciones argumentan que la explotación a gran escala de los recursos naturales afecta negativamente los ecosistemas únicos del país, al tiempo que tiene un impacto negativo en la provisión de agua, la regulación del clima, el desarrollo del turismo ecológico y el aprovisionamiento de alimentos.',
      'De acuerdo con la información anterior, ¿cuál dimensión está en conflicto con la conservación ambiental?',
      ['La seguridad alimentaria.', 'La participación ciudadana.', 'El desarrollo turístico.', 'La generación de empleo.'], 3,
      'El choque es entre conservar y explotar, y lo que el Gobierno pone del lado de explotar es el empleo. La seguridad alimentaria y el turismo ecológico aparecen en el texto del lado de los ecologistas: se pierden si se explota, así que están con la conservación, no contra ella.',
      'Identifica primero qué defiende cada bando; la dimensión en conflicto es la que sostiene el bando contrario.'),

    /* ═════════ 44 ═════════ */
    S('Mecanismos de participación', 'SITUACIÓN', 'ctx-sit',
      'En una ciudad intermedia, los habitantes se encuentran preocupados por el mal estado de los parques, las zonas verdes, los espacios comunales y las áreas de estacionamiento no privado. Para solucionar el problema, el alcalde decide contratar un experto que lo asesore, con el fin de entender mejor el problema y contemplar posibles soluciones. El diagnóstico del experto concluye que el problema radica en la gestión y en el uso de los bienes destinados a la satisfacción de necesidades colectivas. En tal sentido, propone que, en lugar de que la alcaldía se encargue de restaurar parques y ordenar obras, organice a los ciudadanos para que se genere un sentido de pertenencia y sean ellos mismos quienes se involucren en la discusión e implementación de soluciones concretas para cada espacio colectivo que necesite intervención.',
      'El concepto que mejor sintetiza la propuesta del experto es',
      ['gestión comunitaria.', 'movimiento político.', 'privatización urbana.', 'política social.'], 0,
      'La propuesta traslada la administración de los espacios colectivos a la propia comunidad, que discute e implementa las soluciones. Eso es gestión comunitaria. No hay partido ni campaña, no se venden los parques a privados y no es un programa de asistencia estatal.',
      'Cuando la solución consiste en que los vecinos se organicen y decidan, el concepto es gestión comunitaria.'),

    /* ═════════ 45 ═════════ */
    S('Economía y sociedad', 'SITUACIÓN', 'ctx-sit',
      'El costo de los medicamentos en Colombia varía dramáticamente dependiendo del laboratorio que los fabrique. Por tal motivo, los colombianos se ven obligados a comprar sus medicamentos con base en la información que provean las farmacias, y las quejas acerca de los elevados costos de los medicamentos son frecuentes. Por ejemplo, el omeprazol, uno de los fármacos más prescritos en el mundo por su utilidad para combatir la gastritis, se puede comprar a distintos precios. Si lo comercializa el laboratorio A puede costar $36.000, si lo comercializa el laboratorio B puede costar $138.000 y si lo hace el laboratorio C, puede costar $11.249. Todos son el mismo medicamento y todos son genéricos. Frente a este problema de información, los ministerios de Salud y de Tecnologías de la Información y las Comunicaciones (TIC), Colciencias y la Superintendencia de Salud desarrollaron juntos una nueva aplicación llamada Clic Salud, para darle a conocer al usuario los precios de un mismo medicamento desarrollado por diversos laboratorios, con el fin de que la persona pueda tomar una decisión informada al hacer su compra.',
      'De acuerdo con la experiencia en el sector de la salud, ¿en qué condiciones sería posible solucionar el problema del sector agroindustrial, relacionado con los precios de los fertilizantes y otros insumos?',
      ['Que por medio de una campaña masiva, los campesinos presionen al Gobierno para que regule los precios de los fertilizantes, con el fin de bajar costos en el sector.',
       'Que los campesinos presionen al Gobierno para que cree nuevos mecanismos que les permitan comparar los precios de los diferentes productos cultivados.',
       'Que el Gobierno colombiano prohíba la libre competencia e imponga un sistema fijo de precios por producto, con el fin de que el consumidor no pueda ser engañado.',
       'Que el Gobierno colombiano ponga a disposición de los campesinos información que les permita comparar los precios de fertilizantes e insumos de diversas empresas.'],
      3,
      'Clic Salud no fijó precios ni prohibió nada: simplemente hizo pública la información para que el comprador comparara. Trasladar esa misma solución al campo significa darle al campesino los precios de los insumos, no de los productos que él cultiva.',
      'Cuando piden trasladar una solución de un sector a otro, copia el mecanismo exacto, no solo el propósito general.'),

    /* ═════════ 46 ═════════ */
    S('Constitución y derechos', 'SITUACIÓN', 'ctx-sit',
      'En Colombia, tanto el matrimonio civil (ante juez o notario) como el religioso con efectos civiles protegen los derechos que surgen cuando dos personas conforman una familia, como el reconocimiento del vínculo familiar o los derechos sobre el patrimonio que consiguen. La Constitución Política de Colombia, en su artículo 42, define el matrimonio como la unión entre un hombre y una mujer. Sin embargo, en el país también se realizan uniones de parejas del mismo sexo. Estas uniones también se consideran matrimonios civiles de acuerdo con una sentencia del año 2016, expedida por la Corte Constitucional. Sin embargo, la definición de matrimonio presente en la Constitución Política no se modificó.',
      '¿Puede modificarse la definición de matrimonio en la Constitución Política de Colombia para que esta incluya las uniones de parejas del mismo sexo?',
      ['No, porque en Colombia las normas establecidas en la Constitución no pueden modificarse para ese fin.',
       'No, porque el matrimonio religioso es la figura jurídica en Colombia que garantiza los derechos a las parejas.',
       'Sí, porque el reconocimiento de parejas del mismo sexo garantiza la sana convivencia entre estas.',
       'Sí, porque la Constitución puede modificarse para hacerla acorde con las transformaciones sociales.'],
      3,
      'La Constitución no es un texto intocable: existen procedimientos para reformarla, y de hecho se ha reformado varias veces. La razón de fondo es que debe poder ajustarse a los cambios de la sociedad, que es exactamente lo que reconoció la sentencia de 2016.',
      'Ninguna norma constitucional es inmodificable en Colombia; lo que cambia es el procedimiento que exige cada reforma.'),

    /* ═════════ 47 ═════════ */
    S('Interpretación de perspectivas', 'SITUACIÓN', 'ctx-sit',
      'Cintia camina con su amiga por la acera de una calle del centro de una ciudad. Entre los peatones que vienen en sentido contrario por la misma acera, hay un señor que viste prendas viejas y desgastadas. Cuando Cintia lo ve, toma a su amiga por el brazo, le dice "crucemos" y, sin mirar si vienen carros, hace que ambas cambien enseguida de acera. La amiga se sorprende y le pregunta a Cintia por qué ha reaccionado de esa manera. Cintia le responde que, dado el aspecto del señor, era muy probable que se tratase de un ladrón. Su amiga le señala que el señor no se comportaba como si fuera a robar. Cintia acepta que en efecto el señor no estaba actuando como si fuera a cometer un robo, pero que de todos modos era mejor ser precavidas, y le ofrece disculpas a su amiga por no haber mirado con cuidado, antes de cruzar, si venían carros.',
      'Cintia expresó un prejuicio cuando',
      ['asumió que quienes visten de manera muy modesta están asociados a la delincuencia.',
       'le ofreció disculpas a su amiga por cambiar de acera sin mirar si venían carros.',
       'afirmó que las personas deben comportarse de manera prudente cuando se sienten amenazadas.',
       'le ordenó a su amiga que cruzaran a pesar de que ella puede estar en desacuerdo.'],
      0,
      'Un prejuicio es juzgar a alguien por su apariencia y no por lo que hace. Cintia lo admite ella misma: el señor no estaba actuando como un ladrón, y aun así cruzó por cómo iba vestido. Disculparse o ser precavida no son prejuicios.',
      'El prejuicio siempre está en el juicio anticipado sobre la persona, no en la reacción que vino después.'),

    /* ═════════ 48 ═════════ */
    S('Mecanismos de participación', 'FRAGMENTO', 'ctx-sit',
      'En la elección de los representantes al Congreso de la República de Colombia, los partidos políticos pueden optar por un mecanismo que se conoce como el voto preferente. Según esta figura, los partidos o movimientos políticos optan por inscribir una lista abierta de candidatos, de tal manera que el elector vota no solo por la organización política sino, además, por alguno de sus candidatos. Dependiendo del número de escaños que alcance la colectividad, sin importar el orden de la lista, los aspirantes que más votos consiguen son quienes obtienen curul. Sobre la conveniencia del voto preferente, un analista político comenta: "El voto preferente es un mecanismo bien intencionado, pero que en la práctica promueve la compra de votos. Esto porque las curules no serían otorgadas al partido con más votos, sino al aspirante individual que consiga una mayoría de votos. Esto último propicia las prácticas de corrupción y financiación ilícita, pues el aspirante compite tanto con los aspirantes de partidos opuestos como con sus compañeros. El voto no preferente no tiene este problema, ya que con este el partido o movimiento político inscribe una lista cerrada, de tal manera que el elector solo vota por la respectiva colectividad, no por aspirantes individuales".',
      'De los siguientes enunciados, ¿cuál contradice el comentario del analista?',
      ['La penetración de fondos o dineros de procedencia ilícita es más probable en el sistema de voto preferente que en el sistema no preferente.',
       'La eliminación del voto preferente permitiría la creación de mejores mecanismos de control respecto al origen de los recursos de financiación.',
       'El voto preferente les da la capacidad a algunos aspirantes para "comprar" su posición en una lista a cambio de favores propios del clientelismo.',
       'Es ingenuo creer que las listas cerradas acabarían con la compra de votos, pues esta práctica no dejaría de existir y solo cambiarían sus actores.'],
      3,
      'El analista sostiene que la lista cerrada no tiene el problema de la compra de votos. La única opción que le lleva la contraria dice justamente que la compra seguiría existiendo con listas cerradas y solo cambiaría de protagonistas. Las otras tres repiten lo que él ya afirmó.',
      'Contradecir no es matizar: busca la opción que niega directamente algo que el autor dio por cierto.'),

    /* ═════════ 49 ═════════ */
    S('Historia de Colombia', 'FRAGMENTO', 'ctx-sit',
      'En 1781 se desató la Rebelión de los Comuneros, uno de los movimientos políticos más grandes en la historia de Colombia. Aproximadamente 20.000 personas, hombres y mujeres, de los actuales departamentos de Santander, Boyacá y Cundinamarca marcharon hacia Bogotá para exigir al gobierno la suspensión del aumento de impuestos y la eliminación de las barreras que restringían el cultivo de tabaco y el comercio de aguardiente, entre otros productos. Este movimiento se extendió por otras zonas y generó disturbios a lo largo del país durante todo ese año. Los historiadores han relacionado este evento con otro que tuvo lugar unos años antes y a miles de kilómetros. Para ese entonces, Colombia era parte del imperio español, y su gobierno dependía de la corona española, con sede en Madrid. En 1759 la corona había pasado a manos de un nuevo rey, quien traía nuevas ideas sobre su gobierno. El nuevo monarca, inspirado en parte por ideas ilustradas, comenzó un periodo de intensas reformas en todo el imperio, encaminadas, entre otras, a aumentar su control sobre la administración de las colonias y elevar los ingresos que estas reportaban.',
      '¿Cuál de los siguientes argumentos soporta la relación existente entre la Rebelión de los Comuneros (1781) y las reformas impulsadas por el rey de España (1759)?',
      ['Durante la segunda mitad del siglo XVIII se desató una ola de descontento político a lo largo de todas las colonias europeas en América, comenzando por la Revolución de Haití y la Rebelión de los Comuneros en Colombia.',
       'Los habitantes de la zona donde se desarrolló el movimiento de los comuneros se dedicaban, en su gran mayoría, al cultivo de tabaco y de caña azúcar (utilizada en la fabricación del aguardiente).',
       'El Rey español desarrolló un programa intenso de reformas para aumentar los ingresos de la corona al observar que las otras potencias europeas, en especial Francia, obtenían ingresos mucho más altos de sus colonias de lo que recibía el imperio español.',
       'Las medidas utilizadas por la corona española con el objetivo de modernizar la administración y aumentar sus ingresos afectaron directamente la economía de los habitantes de Santander, ya que estos se dedicaban, en su mayoría, al cultivo del tabaco.'],
      3,
      'Para sostener que un hecho causó el otro hay que unir los dos extremos: las reformas del rey buscaban más ingresos y control, y eso golpeó justo el cultivo del que vivía la gente de Santander, que fue la que se levantó. Las otras opciones describen solo una punta de la cadena.',
      'Un argumento que relaciona dos hechos tiene que nombrar los dos y el vínculo entre ellos, no uno solo.'),

    /* ═════════ 50 ═════════ (la 75 del cuadernillo repite esta misma pregunta) */
    S('Interpretación de perspectivas', 'FRAGMENTO', 'ctx-sit',
      'Lea detenidamente el siguiente discurso del ex primer ministro canadiense Pierre Trudeau: "En el pasado, gran parte del apoyo público se le ha otorgado a las instituciones artísticas y culturales del Canadá anglohablante. Recientemente, y en gran medida gracias a las recomendaciones de la Comisión Real en los volúmenes I a III, se ha realizado un esfuerzo consciente por parte de los gobiernos para corregir cualquier sesgo en contra de la lengua y la cosmovisión francesa. En los últimos meses, el gobierno ha tomado medidas para proporcionar fondos para apoyar a los centros educativos para los aborígenes. La política que estoy anunciando hoy acepta el argumento de otras comunidades, según el cual ellas, también, son elementos esenciales de Canadá y merecen la ayuda del Gobierno". (Tomado y adaptado de: Trudeau, P. (1971). Discurso ofrecido en la Cámara de los Comunes del Parlamento canadiense).',
      'Según el discurso del exmandatario, el objetivo de la política que él promueve es que',
      ['las diferentes culturas que habitan en Canadá reciban un trato equitativo por parte del Gobierno.',
       'la cultura anglohablante de Canadá reciba mayor apoyo público y sea tratada de manera diferencial por el Gobierno.',
       'las culturas minoritarias presentes en Canadá reciban mayor apoyo público y sean tratadas de manera preferencial por el Gobierno.',
       'las culturas francesa y anglohablante de Canadá se opongan y sean tratadas de manera diferencial por el Gobierno.'],
      0,
      'Trudeau describe una corrección: antes el apoyo iba sobre todo a lo anglohablante, y ahora se extiende a la cultura francesa, a los aborígenes y a "otras comunidades". El objetivo es nivelar, no invertir el privilegio: nunca dice que las minorías deban recibir más que las demás.',
      'Distingue "trato equitativo" de "trato preferencial": corregir un desequilibrio no es crear uno nuevo al revés.'),

    /* ═════════ 51 ═════════ */
    S('Historia de Colombia', 'FRAGMENTO', 'ctx-sit',
      'Lea atentamente el siguiente fragmento: "La tierra de Israel fue la cuna del pueblo judío. Aquí se forjó su identidad espiritual, religiosa y nacional. Aquí logró por primera vez su soberanía, creando valores culturales de significado nacional y universal, y legó al mundo las Sagradas Escrituras [...] La catástrofe que recientemente azotó al pueblo judío fue una clara demostración de la urgencia por resolver el problema de su falta de hogar, restableciendo en la tierra de Israel el Estado judío, que habrá de abrir las puertas de la patria de par en par a todo judío y conferirle al pueblo judío el estatus de miembro privilegiado en la familia de las naciones. Nosotros, miembros del consejo del pueblo, representantes de la comunidad judía estamos reunidos aquí en el día de la terminación del mandato británico sobre la tierra de Israel y, en virtud de nuestro derecho natural e histórico y basados en la resolución de la Asamblea General de las Naciones Unidas, proclamamos el establecimiento de un Estado judío que será conocido como el Estado de Israel". (Adaptado de: Texto de la Declaración de independencia de Israel).',
      'La declaración de independencia presentada en el fragmento anterior se ubica en los años posteriores a la Segunda Guerra Mundial, porque en el fragmento',
      ['se demuestra el derecho histórico que tiene el pueblo judío sobre las tierras de Israel de acuerdo con los escritos bíblicos.',
       'se relaciona el antisemitismo de la Segunda Guerra Mundial con los conflictos en Medio Oriente de finales del siglo XX.',
       'se vincula la creación del Estado de Israel con la participación del pueblo judío durante la Primera Guerra Mundial.',
       'se relaciona la creación del Estado de Israel con el Holocausto y la decisión de las Naciones Unidas.'],
      3,
      'Dos pistas fechan el texto: "la catástrofe que recientemente azotó al pueblo judío", que es el Holocausto, y la resolución de la Asamblea General de la ONU, organismo creado en 1945. El derecho bíblico también se menciona, pero eso no sitúa el texto en ninguna década.',
      'Para datar un documento busca los hechos que menciona como recientes, no los que menciona como antiguos.'),

    /* ═════════ 52 ═════════ */
    S('Historia de Colombia', 'FRAGMENTO', 'ctx-sit',
      'La Declaración de los Derechos del Hombre y del Ciudadano, del 26 de agosto de 1789, comienza con el siguiente apartado: "Los representantes del pueblo francés, constituidos en Asamblea nacional, considerando que la ignorancia, el olvido y el menosprecio de los derechos del hombre son las únicas causas de las calamidades públicas y de la corrupción de los gobiernos, han resuelto exponer, en una declaración solemne, los derechos naturales, inalienables y sagrados del hombre, a fin de que esta declaración, constantemente presente para todos los miembros del cuerpo social, les recuerde sin cesar sus derechos y sus deberes; a fin de que los actos del poder legislativo y del poder ejecutivo, al poder cotejarse a cada instante con la finalidad de toda institución política, sean más respetados y para que las reclamaciones de los ciudadanos, en adelante fundadas en principios simples e indiscutibles, redunden siempre en beneficio del mantenimiento de una Constitución y de la felicidad de todos".',
      '¿Qué circunstancia histórica motivó las ideas que se plasmaron en esta declaración?',
      ['La firma, a mediados del siglo XX en Francia, de la convención que salvaguarda los Derechos Humanos, y que hoy garantiza el respeto por las libertades y los derechos fundamentales de los ciudadanos de los Estados que forman parte del Consejo de Europa.',
       'La Revolución francesa, que abolió los principios, instituciones y prácticas de antiguo régimen monárquico que reinaba en Francia y fue influenciada por una corriente de pensamiento que concedía primacía a la razón, a la igualdad y a la libertad.',
       'El reconocimiento de los derechos naturales e imprescriptibles como la libertad, la propiedad y la seguridad, así como la igualdad de todos los ciudadanos ante la ley y la justicia.',
       'La Cruzada napoleónica por la conquista de Europa que sucedió a la Revolución Francesa y justificaba apelando a las ideas de la Ilustración.'],
      1,
      'La declaración es de 1789, el año en que estalla la Revolución francesa, y está firmada por una Asamblea nacional que se enfrenta al rey. Las otras opciones son posteriores —Napoleón, el siglo XX— o describen el contenido de la declaración en lugar de la circunstancia que la motivó.',
      'La pregunta pide la causa, no el contenido: una opción que resume lo que el texto dice no responde por qué se escribió.'),

    /* ═════════ 53 ═════════ */
    S('Historia de Colombia', 'FRAGMENTO', 'ctx-sit',
      'Durante la clase de Historia, un profesor lee el siguiente discurso: "Hace cien años, un gran estadounidense, cuya simbólica sombra nos cobija hoy, firmó la Proclama de la Emancipación. Este trascendental decreto significó como un gran rayo de luz y de esperanza para millones de esclavos negros, chamuscados en las llamas de una marchita injusticia (...). Pero, cien años después, el negro aún no es libre (...). No podremos quedar satisfechos, mientras que los negros solo podamos trasladarnos de un gueto pequeño a un gueto más grande. Nunca podremos quedarnos satisfechos, mientras que un negro de Misisipi no puede votar y un negro de Nueva York considere que no hay por qué votar (...). ¡Sueño que mis cuatro hijos vivirán un día en un país en el cual no serán juzgados por el color de su piel, sino por los rasgos de su personalidad, hoy tengo un sueño!". Frente a ello, uno de sus estudiantes le dice al profesor que quien pronunció el discurso fue Martin Luther King.',
      '¿Qué razón puede tener el estudiante para afirmar esto?',
      ['El discurso habla de la liberación de los esclavos en Estados Unidos ocurrida en 1863, y Martin Luther King defendió esta causa.',
       'El discurso se refiere a la importancia de la unificación territorial de Estados Unidos, y Martin Luther King defendió esta causa.',
       'El discurso habla sobre la lucha por los derechos civiles de la población afroamericana en 1963, y Martin Luther King defendió esta causa.',
       'El discurso se refiere a la necesidad de reformar el sistema judicial para lograr procesos más justos para todos, y Martin Luther King defendió esta causa.'],
      2,
      'El propio discurso se ubica: dice "hace cien años" refiriéndose a la Proclama de la Emancipación de 1863, así que está hablando en 1963. Y su reclamo es que cien años después el negro sigue sin poder votar ni vivir libre: eso es la lucha por los derechos civiles, no la liberación de los esclavos, que ya había ocurrido.',
      'Cuando un discurso dice "hace cien años", súmale cien al hecho que menciona: te da la fecha del discurso.'),

    /* ═════════ 54 ═════════ */
    S('Conflicto armado y memoria', 'FRAGMENTO', 'ctx-sit',
      'En 2016, durante los diálogos de paz celebrados en La Habana, Cuba, se discutió el tema de la lucha contra las drogas a través de la sustitución de los cultivos ilícitos, con el fin de debilitar el negocio del narcotráfico y brindar condiciones económicas y sociales para el desarrollo del agro colombiano. Al respecto se concluyó que "se deben buscar nuevas opciones centradas en procesos de sustitución de cultivos de uso ilícito y la implementación de Planes Integrales de Sustitución y Desarrollo Alternativo regulados por un nuevo organismo estatal. Acordamos que la transformación de los territorios y las alternativas para las comunidades afectadas por los cultivos de uso ilícito, partirán de la construcción conjunta y participativa entre estas y las autoridades nacionales, departamentales y municipales, así como la superación de las condiciones de pobreza. El programa requiere la más amplia participación de las comunidades, incluyendo las directamente involucradas con el cultivo, para formular, ejecutar y hacerles seguimiento a los planes integrales municipales y comunitarios de sustitución y desarrollo alternativo, mediante un proceso de planificación participativa". (Tomado y adaptado de: Delegaciones del Gobierno y las FARC-EP (2014). Comunicado conjunto No. 36).',
      '¿Cuál es una medida consecuente con la aplicación de las políticas acordadas en el fragmento citado?',
      ['La estigmatización a campesinos que buscan sustituir sus cultivos ilícitos y el incremento de la erradicación de cultivos por aspersión aérea.',
       'La imposición de cultivos productivos para reemplazar los ilícitos y la disminución de la inversión estatal en la reducción de la pobreza rural.',
       'La reducción del valor de los predios que fueron usados para cultivos ilícitos y el desplazamiento de esos cultivadores a zonas más productivas.',
       'La creación de entidades especializadas en la sustitución de cultivos ilícitos y el aumento de la participación comunitaria en las zonas intervenidas.'],
      3,
      'El acuerdo pide dos cosas concretas: un nuevo organismo estatal que regule los planes y la participación más amplia posible de las comunidades. Las otras opciones proponen justo lo contrario: imponer, estigmatizar o desplazar.',
      'Una medida "consecuente" tiene que repetir lo que el texto pidió, no algo que suene parecido en el tema.'),

    /* ═════════ 55 ═════════ */
    S('Constitución y derechos', 'SITUACIÓN', 'ctx-sit',
      'Un pequeño municipio rural cuenta con una única escuela de primaria en la que trabajan dos docentes y deben atender un total de 74 estudiantes. Un niño en condición de discapacidad visual fue matriculado por sus padres en la escuela para cursar primer grado de primaria. Desde el punto de vista del director de la escuela, esta situación resulta problemática porque los docentes no cuentan con capacitación previa para enseñarles a personas en esta condición y sería mejor pedirles a los padres que retiren al niño de la escuela. Sin embargo, el director se reúne con los docentes para escuchar sus puntos de vista sobre la situación. El docente A piensa que alguno de ellos podría recibir la capacitación pertinente para educar al niño y que lo mejor es que el niño esté en la escuela. El docente B piensa que sería mejor que los padres del niño buscaran la forma de inscribirlo en otra institución que sí cuente con las condiciones para educarlo. El director de la escuela decide enviar por un mes al docente A a otra ciudad para que sea capacitado, mientras tanto el otro docente debe hacerse cargo de todas las clases en la escuela.',
      'De las siguientes opciones, ¿cuál es la principal desventaja de la decisión del director de la escuela?',
      ['Que el docente A probablemente no esté motivado para recibir la capacitación, pues la considera innecesaria.',
       'Que los estudiantes reciban menor atención en la escuela, pues solo habrá un docente disponible para todos por una temporada.',
       'Que la familia del menor deba mudarse para encontrar una institución que cuente con docentes capacitados para enseñar a su hijo.',
       'Que el menor en condición de discapacidad visual no cuente con alternativas para recibir educación en otra institución, dentro de ese municipio rural.'],
      1,
      'La decisión es buena para el niño, pero deja a un solo docente con 74 estudiantes durante un mes: ese es el costo real que tiene. El docente A fue precisamente quien propuso capacitarse, así que no le falta motivación, y ni la mudanza ni la falta de alternativas se derivan de lo que el director decidió.',
      'La desventaja de una decisión es lo que empeora por haberla tomado, no un problema que ya existía antes.'),

    /* ═════════ 56 ═════════ */
    S('Constitución y derechos', 'FRAGMENTO', 'ctx-sit',
      'La discriminación por motivos de etnia, raza y cultura ha sido un fenómeno persistente a lo largo del siglo XX en diferentes lugares del mundo. Este fenómeno se manifiesta en situaciones cotidianas por medio del rechazo y de los sentimientos de odio sistemático hacia un grupo poblacional, generalmente inspirados en la creencia de la supuesta superioridad de quien ejerce. Asimismo, puede desencadenar diversos tipos de violencia, desde la simbólica hasta la física. En muchas ocasiones, estos odios se han convertido en la base de políticas de Estado que conducen a la exclusión política y la segregación social.',
      '¿Cuál de las siguientes situaciones puede analizarse desde el concepto de discriminación anteriormente descrito?',
      ['El conflicto armado que ha existido en Colombia por cerca de medio siglo y que en sus orígenes respondían a conflictos bipartidistas.',
       'El sistema legal del apartheid sudafricano, cuyo objetivo fue generar un conjunto de privilegios para una minoría.',
       'La pobreza en diversas regiones del mundo, ya que a muchos países se les excluye de la distribución de la riqueza mundial.',
       'El embargo económico de Estados Unidos contra Cuba, implementado desde la década de 1960 para combatir el comunismo.'],
      1,
      'El texto define la discriminación como odio por etnia o raza convertido en política de Estado con exclusión y segregación. El apartheid es exactamente eso: un sistema legal de separación racial. Los otros casos son conflictos políticos, económicos o ideológicos, no raciales.',
      'Cuando el enunciado define un concepto, compara cada opción con la definición dada, no con lo que tú entiendas por la palabra.'),

    /* ═════════ 57 ═════════ */
    S('Geografía y territorio', 'SITUACIÓN', 'ctx-sit',
      'Frente a la escasez de trabajos para un gran sector de la clase media, y con la intención de mejorar la economía del país, el presidente autorizó la construcción de uno de los más grandes oleoductos jamás construidos, con la única condición de que se utilice mano de obra y materias primas del país. Aunque el proyecto promete generar más de 30.000 nuevos puestos de trabajo, la decisión ha sido polémica y ha generado multitudinarias protestas, pues el oleoducto atravesará dos de las fuentes hídricas más importantes del país y varios territorios indígenas. Líderes indígenas denuncian que se han incumplido tratados territoriales que otorgan completa autoridad y autonomía al pueblo indígena sobre esas tierras. Por otra parte, los ecologistas han alertado sobre los potenciales daños que podrían causar un derrame de petróleo en los principales ríos del país y buscan concienciar a la ciudadanía de la importancia del agua para la vida.',
      '¿Cuál de las siguientes opciones NO es un factor que contribuye directamente a originar un conflicto en la situación descrita?',
      ['Dar mayor importancia a las necesidades de tipo económico que a las necesidades de tipo ecológico.',
       'El incumplimiento de acuerdos territoriales que se han celebrado con anterioridad.',
       'La falta de desarrollo tecnológico para la producción de energías alternativas limpias.',
       'Dar prioridad al bienestar de la clase trabajadora por encima del bienestar de los pueblos indígenas.'],
      2,
      'El texto nombra tres tensiones: economía contra ecología, tratados indígenas incumplidos y empleo de la clase media frente a los territorios indígenas. Nunca menciona la tecnología de energías limpias: es un tema relacionado, pero no está en la disputa que se describe.',
      'En las preguntas con NO, marca en el texto cada factor que sí aparece; el que sobre es la respuesta.'),

    /* ═════════ 58 ═════════ */
    S('Economía y sociedad', 'FRAGMENTO', 'ctx-sit',
      'En un discurso pronunciado a mediados del siglo XIX, el dirigente político colombiano Mariano Ospina Rodríguez planteó lo siguiente: "Si el Gobierno, imaginándose que sabe más en la materia que los comerciantes (...) mete la mano en el negocio, su intervención no produce otro efecto que desconcertar los cálculos de los negociantes, turbar el movimiento natural del comercio, y retardar el restablecimiento del equilibrio". (Tomado de: Ospina Rodríguez, Mariano (1969). Escritos sobre economía política. Bogotá: Universidad Nacional de Colombia, p. 11).',
      'A partir de este fragmento, ¿puede afirmarse que Mariano Ospina Rodríguez está a favor del proteccionismo económico?',
      ['Sí, porque afirma que el Gobierno debe velar por que se mantenga el movimiento natural del comercio.',
       'No, porque muestra una opinión favorable con respecto al comercio de mercancías.',
       'Sí, porque plantea que el Gobierno debe salvaguardar los intereses de los comerciantes.',
       'No, porque se opone a que el Gobierno ejerza control sobre las actividades comerciales.'],
      3,
      'El proteccionismo consiste precisamente en que el Estado intervenga el comercio. Ospina dice que cuando el Gobierno "mete la mano" solo desconcierta y retarda: está pidiendo que no intervenga, que es lo contrario del proteccionismo.',
      'Define el término del enunciado antes de responder: si proteccionismo es intervención, quien la rechaza no puede estar a favor.'),

    /* ═════════ 59 ═════════ */
    S('Interpretación de perspectivas', 'SITUACIÓN', 'ctx-sit',
      'La alcaldía de una ciudad organiza las fiestas populares. Para esta ocasión, el alcalde decide convocar a diferentes líderes sociales con el fin de hacer una planeación de las fiestas mucho más participativa. En la primera reunión convocada para tal fin, dos de los líderes sociales discuten si las corridas de toros (espectáculo en el que varias personas enfrentan a un toro, el cual usualmente culmina con la muerte del animal) deben mantenerse o no. Al respecto afirman: <b>Líder 1.</b> Las corridas de toros son parte de la tradición en este pueblo y son el alma de sus fiestas. Es una forma de honrar a nuestros antepasados, al enfrentar la fuerza del toro contra la valentía del ser humano y recordar que el hombre ha conquistado la naturaleza. Perder esto es perder parte de nuestra identidad. <b>Líder 2.</b> Las corridas de toros solo traen sufrimiento y muerte. El toro muere en el ruedo solo para el placer de los asistentes al evento. Aunque haya sido tradición, esta actividad no puede representar una forma de cultura porque está lastimándose a un ser vivo y se les enseña a las nuevas generaciones a disfrutarlo. Ante la polémica, el alcalde decide declarar al toro como el animal central del evento haciendo una representación simbólica de las corridas, en las que un torero se enfrenta a un grupo de personas disfrazadas de toro. De acuerdo con el alcalde, es la mejor solución, pues de este modo se respetan las tradiciones y la vida del animal: "Solo así garantizamos que este pueblo se inserte en el siglo XXI y que a la vez las nuevas generaciones honren nuestras expresiones culturales".',
      '¿Cuál de las dos opiniones coincide con la decisión y los argumentos del alcalde?',
      ['La del líder 1, porque al declarar al toro como animal central del evento se hace un homenaje a quienes admiran las corridas y la tradición.',
       'La del líder 2, porque al modificar la forma en la que se llevan a cabo las corridas de toros se desconoce el carácter cultural de esta actividad.',
       'La del líder 2, porque al hacer una representación simbólica de las corridas sin participación real del toro se evitan el sufrimiento y la muerte del animal.',
       'La del líder 1, porque al involucrar a las nuevas generaciones en las corridas se garantiza que las costumbres y tradiciones del pueblo sigan intactas.'],
      2,
      'El líder 2 objetaba el sufrimiento y la muerte del toro, y la solución del alcalde elimina justamente eso: en el ruedo ya no hay animal. El líder 1 quería la tradición intacta, y una representación con personas disfrazadas no la deja intacta.',
      'Para ver con quién coincide una decisión, mira qué objeción resuelve, no qué palabras repite.'),

    /* ═════════ 60 ═════════ */
    S('Economía y sociedad', 'SITUACIÓN', 'ctx-sit',
      'Para el alcalde de una ciudad, el comercio informal en las calles está asociado a serios problemas para la ciudad, tales como la evasión de impuestos, la inseguridad y el uso inadecuado del espacio público. Con el objeto de erradicar esta modalidad de comercio, el alcalde contempla la implementación de un programa social. De acuerdo con el programa, se construiría una zona de comercio donde se asignarían puestos de venta fijos a los vendedores. Para mantener sus puestos de venta, los vendedores tendrían que pagar un alquiler mensual, demostrar que están al día en el pago de impuestos asociados a sus mercancías, y cancelar cumplidamente sus aportes a los sistemas de salud y pensión. Un sector de los comerciantes considera que la medida es positiva porque así evitarán perder la mercancía que les decomisa la policía por trabajar en la calle de manera informal. Otro sector de los comerciantes argumenta que sus ingresos disminuirían porque muy seguramente el costo de lo que tendrían que pagar sería mayor al producto de sus ventas. Por su parte, la Asociación de vendedores ambulantes le propone al alcalde que les permita continuar trabajando en la calle, pero cobrando una pequeña cuota mensual a cada vendedor. Según la Asociación, esta medida favorecería a la ciudad, pues se recaudarían recursos económicos que la alcaldía podría invertir en proyectos sociales. También, argumenta la Asociación, la medida favorecería a los vendedores, pues así estos no perderían su fuente de ingresos, ni tendrían que pagar alquiler por cada puesto de venta asignado.',
      'La valoración que más probablemente haría el alcalde sobre la propuesta de la Asociación, es que esta',
      ['no resolvería los problemas asociados al comercio informal en las calles.',
       'ayudaría efectivamente a combatir el problema de la evasión de impuestos.',
       'mejoraría la situación del manejo del espacio público.',
       'no evitaría que la policía decomisara la mercancía producto de las ventas callejeras.'],
      0,
      'Al alcalde le preocupan tres cosas: impuestos, inseguridad y espacio público. La propuesta de la Asociación deja a los vendedores donde están y solo agrega una cuota, así que el espacio público sigue igual de ocupado y la inseguridad no se toca. Cobra algo de dinero, pero no es lo mismo que resolver la evasión.',
      'Contrasta la propuesta con la lista completa de problemas que planteó quien debe valorarla, no con uno solo.'),

    /* ═════════ 61 ═════════ */
    S('Interpretación de perspectivas', 'SITUACIÓN', 'ctx-sit',
      'Carolina es una practicante del periodismo que está desarrollando una investigación sobre el consumo de drogas en los adolescentes. En su investigación quiere cumplir los siguientes objetivos: <b>1.</b> Identificar el impacto social que genera el consumo de drogas por adolescentes en el entorno comunitario. <b>2.</b> Conocer las medidas gubernamentales tomadas para mitigar el consumo de drogas por adolescentes. <b>3.</b> Establecer las causas y consecuencias del consumo de drogas en los proyectos de vida del adolescente consumidor. <b>4.</b> Definir la forma como expertos y académicos han analizado el consumo de drogas por parte de adolescentes. Para su investigación, Carolina quiere recopilar varios testimonios de adultos que consumieron drogas en su adolescencia. Ella espera que narren cómo fue su historia de vida desde que empezaron a consumir drogas, las decisiones profesionales y laborales que tomaron después, cómo afectó esto sus relaciones personales más cercanas y el cambio que tuvieron que recorrer para recuperarse.',
      '¿Cuál de los objetivos planteados puede cumplirse según la información recopilada en las entrevistas a adultos que consumieron drogas en su adolescencia?',
      ['El objetivo 1.', 'El objetivo 2.', 'El objetivo 3.', 'El objetivo 4.'], 2,
      'Los testimonios cuentan por qué empezaron, qué decisiones tomaron después y cómo afectó su vida: eso son causas y consecuencias en el proyecto de vida de quien consume. Para medir el impacto comunitario, conocer las medidas del Gobierno o revisar qué dicen los académicos harían falta otras fuentes.',
      'Cruza lo que la fuente realmente contiene con cada objetivo: solo uno queda cubierto por completo.'),

    /* ═════════ 62 ═════════ */
    S('Geografía y territorio', 'FRAGMENTO', 'ctx-sit',
      'La explotación minera en Colombia tiene adeptos y detractores. Los primeros señalan que esta crea empleo, trae inversión al país y protege a los territorios que cuentan con los recursos mineros como el oro y el carbón de la explotación ilegal. Los detractores sostienen que la explotación de estos recursos crea daños irreparables tanto para las comunidades como para el ambiente. En municipios con vocación agrícola, por ejemplo, muchos de sus habitantes consideran que la minería pondría en riesgo esta actividad. Consciente de la importancia que tienen las comunidades locales y las entidades territoriales, la Corte Constitucional señaló que estas tienen competencia para tomar decisiones sobre los proyectos de minería que se llevan a cabo en sus territorios. Esta posición de la Corte ha sido el detonante para que se inicien procesos de consulta en muchas partes de Colombia al fin de determinar si las comunidades desean, o no, que se exploten los recursos naturales en sus territorios. Un sector del Gobierno central, crítico del alcance que puedan llegar a tener estas consultas, afirma que la Constitución le otorga una facultad de "paternidad responsable" a la Nación al darle facultades de administración a los recursos naturales y el subsuelo, y que esta facultad se afectaría si la decisión última sobre el uso del subsuelo recae en manos de los municipios y autoridades locales.',
      'En este debate en torno a la explotación minera, ¿entre cuáles de los siguientes actores involucrados es probable que se dé un conflicto, y por qué?',
      ['Entre quienes defienden la explotación minera y el sector estatal que reclama la facultad de la Nación de administrar los recursos naturales; porque el segundo rechaza la idea de que entidades privadas se dediquen a esta actividad, y los primeros no.',
       'Entre la Corte Constitucional y el sector estatal que reclama la facultad de la Nación de administrar los recursos naturales; porque la primera considera que las comunidades locales deben participar de las decisiones relativas a la explotación de sus recursos naturales, y el segundo no.',
       'Entre la Corte Constitucional y las comunidades locales; porque las segundas ponen en duda los efectos que la explotación minera pueda traer sobre la producción agrícola y sobre la sostenibilidad ambiental de sus territorios, y la primera no.',
       'Entre quienes rechazan la explotación minera y el sector estatal que otorga, mediante sus disposiciones legales, facultades a las comunidades locales de decidir si desean proyectos de minería en sus territorios; porque los primeros promueven la sostenibilidad ambiental del territorio, y el segundo no.'],
      1,
      'El texto plantea una sola oposición explícita: la Corte dice que los municipios pueden decidir, y el sector del Gobierno central dice que esa decisión le corresponde a la Nación. La Corte y las comunidades están del mismo lado, así que entre ellas no hay pleito.',
      'Busca las dos posturas que el texto enfrenta de manera directa; las demás combinaciones suelen unir actores que en realidad coinciden.'),

    /* ═════════ 63 ═════════ */
    S('Economía y sociedad', 'FRAGMENTO', 'ctx-sit',
      'Un estudio realizado por el Instituto Geográfico Agustín Codazzi (IGAC) aplicó el coeficiente Gini (que permite medir la desigualdad social o económica a partir de una fórmula matemática) y determinó que Colombia es un país altamente desigual en cuanto a la propiedad del terreno rural. El caso más grave, a la luz del estudio, es Quibdó, donde menos del 1 % de los propietarios privados es dueño del 94,87 % del territorio rural. De acuerdo con el estudio, la situación de desigualdad en la distribución de la tierra obedece a las decisiones que varios gobiernos impusieron por décadas para favorecer intereses de los terratenientes y poderosos sobre sectores campesinos.',
      'En la problemática descrita en el estudio del IGAC, las dimensiones que entran en conflicto son',
      ['política y ambiental, ya que los terratenientes explotan indiscriminadamente amplias extensiones de tierra que han obtenido gracias a las políticas de varios gobiernos.',
       'económica y social, dado que los sectores sociales se definen en términos de la posesión de tierras y los conflictos entre ellos se fundan en luchas por su monopolio o control.',
       'económica y política, pues la desigualdad en la distribución de tierras rurales tuvo su origen en políticas que favorecieron intereses de pocos y generaron pobreza en sectores campesinos.',
       'social y ambiental, debido a que las grandes diferencias entre los sectores sociales de terratenientes y campesinos promueven la explotación desmedida de los recursos naturales.'],
      2,
      'El estudio dice dos cosas: hay concentración de la propiedad, que es un hecho económico, y esa concentración viene de decisiones de varios gobiernos, que es lo político. En ningún momento habla de daño ambiental, así que las opciones que lo mencionan agregan algo que el texto no dice.',
      'Las dimensiones deben estar las dos en el texto: si una opción nombra una que no aparece, queda descartada.'),

    /* ═════════ 64 ═════════ */
    S('Historia de Colombia', 'SITUACIÓN', 'ctx-sit',
      'Lea esta lista de episodios de la historia de Colombia: <b>1.</b> Las batallas de Palonegro y Peralonso durante la guerra de los Mil Días. <b>2.</b> Los asesinatos de jueces y periodistas por órdenes de los líderes de carteles como el de Medellín y el de Cali. <b>3.</b> Los enfrentamientos entre liberales y conservadores después del asesinato de Jorge Eliécer Gaitán. <b>4.</b> Los enfrentamientos por el control del narcotráfico entre bandas criminales, como los Rastrojos y los Úsuga.',
      'La opción que ordena correctamente, del más antiguo al más reciente, los episodios de violencia que han afectado directa o indirectamente a la población civil en Colombia es',
      ['2, 1, 4 y 3.', '3, 1, 2 y 4.', '4, 1, 2 y 3.', '1, 3, 2 y 4.'], 3,
      'La guerra de los Mil Días es de 1899-1902; el asesinato de Gaitán, de 1948; los carteles de Medellín y Cali dominaron los años ochenta y noventa; y las bandas criminales que menciona el texto surgieron después de 2006. Ese es el orden.',
      'Ancla cada episodio a una fecha concreta antes de ordenar: con dos fechas seguras suele bastar para descartar casi todas las opciones.'),

    /* ═════════ 65 ═════════ */
    S('Geografía y territorio', 'FRAGMENTO', 'ctx-sit',
      'Suponga que en un documento de política pública, el cual parte del modelo de desarrollo sostenible, se propone lo siguiente: "Uno de los proyectos prioritarios consiste en implementar medidas de control y vigilancia para prevenir la ocupación de áreas urbanas protegidas, con fines extractivistas. La actividad minera que ocurre en las zonas periféricas de las ciudades, deberá así ser regulada mediante instrumentos de control de competencia distrital que busque la recuperación ambiental y la incorporación de estas áreas a la estructura urbanística de la ciudad. Solo de esta manera será posible garantizar que el bienestar de las generaciones futuras no será comprometido desde nuestro presente inmediato".',
      'A partir del fragmento citado, ¿cuál es una de las características del modelo de desarrollo sostenible?',
      ['Proporcionar mecanismos que permitan satisfacer las necesidades inmediatas básicas de la población.',
       'Disminuir las desigualdades económicas y sociales derivadas del desarrollo, con la intención de alcanzar una mayor justicia social.',
       'Garantizar el uso eficiente de los recursos reconociendo la importancia de la naturaleza para el bienestar humano actual y futuro.',
       'Disminuir la intervención estatal y garantizar la libre competencia para que los actores del sistema obtengan la mayor satisfacción posible.'],
      2,
      'El fragmento cierra con la clave: que el bienestar de las generaciones futuras no se comprometa desde el presente. Esa mirada al mañana, junto con la recuperación ambiental, es lo que define al desarrollo sostenible. Atender solo lo inmediato o reducir la intervención estatal apuntan en dirección contraria.',
      'La palabra que delata al desarrollo sostenible es "futuras": el modelo se define por no hipotecar lo que viene.'),

    /* ═════════ 66 ═════════ */
    S('Constitución y derechos', 'SITUACIÓN', 'ctx-sit',
      'En el debate acerca de reducir de 18 a 16 años la mayoría de edad, quienes apoyan la iniciativa señalan como beneficios la posibilidad de aumentar la población electoral con capacidad de voto y la posibilidad de responsabilizar penalmente a los menores infractores de la ley. Por otra parte, quienes se oponen señalan que este cambio traería consigo un ingreso demasiado temprano de esta población a responsabilidades consideradas como "propias" de la vida adulta, y para las que los jóvenes de 16 años de edad no estarían todavía preparados.',
      '¿Qué dimensiones están presentes en el debate de reducir de 18 a 16 años de edad el ingreso a la mayoría de edad?',
      ['La política y la familiar.', 'La económica y la social.', 'La familiar y la económica.', 'La política y la social.'], 3,
      'Ampliar el número de votantes es un asunto político; asumir responsabilidades penales y adultas antes de tiempo es un asunto social. En el debate nadie habla de dinero ni de la organización de las familias.',
      'Verifica que las dos dimensiones tengan un argumento propio en el texto; con una sola no basta.'),

    /* ═════════ 67 ═════════ */
    S('Organización del Estado', 'SITUACIÓN', 'ctx-sit',
      'Debido al aumento del comercio con los países asiáticos, un puerto en el Pacífico colombiano aumentó drásticamente su tamaño y su nivel de operaciones en muy pocos años. La ciudad en la que se ubica el puerto se vio limitada por el alto costo que implica ampliar la operación del puerto, por lo que buscó ayuda del Gobierno. Ante esto, el presidente de la República quiere otorgar el estatus de Distrito Especial a la ciudad, de forma que esta reciba más recursos económicos. Para que el presidente pueda cambiar el estatus de la ciudad se debe modificar la Constitución, porque en ella se establece todo lo referente a los distritos especiales.',
      '¿Tiene el presidente la capacidad para realizar esta reforma constitucional por su cuenta?',
      ['Sí, porque el Ejecutivo puede decidir sobre la organización territorial de la República sin intervención de las demás ramas del poder.',
       'No, porque el presidente debe presentar su proyecto de reforma constitucional ante el Congreso, quien discute y aprueba los cambios a la Constitución.',
       'Sí, porque el presidente puede oficializar sus decisiones vía decreto y agregar esta reforma en el Plan Nacional de Desarrollo.',
       'No, porque debe convocar una consulta popular a los ciudadanos antes de realizar cualquier reforma a la Constitución vigente.'],
      1,
      'Reformar la Constitución no es un acto del Ejecutivo: el presidente puede proponer un acto legislativo, pero quien lo discute y lo aprueba es el Congreso. Un decreto no alcanza, y la consulta popular no es un requisito previo obligatorio para toda reforma.',
      'Ninguna rama reforma la Constitución sola: recuerda quién propone y quién aprueba en cada mecanismo.'),

    /* ═════════ 68 ═════════ */
    S('Mecanismos de participación', 'SITUACIÓN', 'ctx-sit',
      'Alberto le sugiere a Eliana asistir a unos eventos programados por la alcaldía municipal para escuchar las voces de las personas sobre los problemas de la comunidad y la posible búsqueda de soluciones que impactarían en la ciudadanía del municipio.',
      '¿Cuál de los siguientes argumentos podría utilizar Alberto para justificarle a Eliana su sugerencia?',
      ['Es responsabilidad del gobierno municipal identificar las problemáticas locales, y asimismo plantear sus soluciones.',
       'Es deber constitucional del ciudadano colombiano participar en la vida política, cívica y comunitaria del país.',
       'Es responsabilidad de la sociedad civil organizar los eventos necesarios para la elaboración de los planes de desarrollo locales.',
       'Es deber constitucional del ciudadano colombiano colaborar con el buen funcionamiento de la administración de la justicia.'],
      1,
      'Se trata de convencer a Eliana de ir, así que el argumento tiene que apuntar a lo que ella gana o debe hacer. Participar en la vida política y comunitaria es un deber ciudadano que la Constitución reconoce. Decir que el problema es del alcalde sería más bien un motivo para quedarse en casa.',
      'Un argumento sirve si sostiene la acción que se pide; si justifica lo contrario, está mal elegido.'),

    /* ═════════ 69 ═════════ */
    S('Economía y sociedad', 'SITUACIÓN', 'ctx-sit',
      'Considere las siguientes situaciones. <b>Situación 1:</b> en el mercado farmacéutico, una empresa controla el precio y la producción de un medicamento esencial para el tratamiento de una enfermedad degenerativa, dado que es la única firma con los derechos de fabricación. Los usuarios no tienen la posibilidad de adquirir medicamentos genéricos a mejores precios, porque ninguna otra farmacéutica los ofrece. <b>Situación 2:</b> en un mercado de productos agrícolas, un pequeño grupo de empresas concentra la importación y distribución de la mayoría de insumos como semillas, insecticidas y abonos. Debido a que estos son productos esenciales para campesinos y agricultores, los usuarios tienen que pagar varias veces el valor real de estos productos ante la ausencia de otros distribuidores que podrían ofrecer precios de comercialización más bajos.',
      '¿Cuál de los siguientes conceptos define mejor las situaciones anteriormente descritas?',
      ['Libre mercado.', 'Integración económica.', 'Competencia.', 'Monopolio.'], 3,
      'En los dos casos hay un único proveedor o un puñado de empresas que concentran la oferta, y por eso pueden imponer el precio. Eso es lo contrario de la competencia y del libre mercado: es control del mercado por unos pocos.',
      'Si el comprador no tiene a quién más acudir, el concepto es monopolio, no competencia.'),

    /* ═════════ 70 ═════════ */
    S('Mecanismos de participación', 'FRAGMENTO', 'ctx-sit',
      'A partir de la Declaración de Río sobre el medio ambiente, la opinión e intereses de los ciudadanos en materia ambiental empezó a escucharse. De este modo, se comenzó a reemplazar la visión según la cual eran exclusivamente los gobernantes de turno a quienes les correspondía, en nombre del "interés general", tomar decisiones sobre estos asuntos. Un ejemplo de los efectos de esta declaración ocurrió en Colombia en junio de 2016, cuando la alcaldía de un municipio colombiano promovió una consulta popular para preguntarles a sus ciudadanos si querían, o no, que se desarrollaran proyectos mineros en sus territorios. Como respuesta a esta consulta, miles de personas de ese, y otros municipios movilizaron en un encuentro que denominaron "El carnaval por el agua". Este encuentro tuvo como objetivo defender sus recursos hídricos, su derecho a un medio ambiente sano y mostrar su oposición al desarrollo de esos proyectos en sus municipios. Esta movilización se llevó a cabo con éxito, pese a las presiones de las empresas mineras y las amenazas que recibieron los promotores de la marcha. (Tomado y adaptado de: Gómez, Natalia (2018), "El carnaval por el agua y la participación ciudadana", en Revista Semana).',
      '¿Cuál de las siguientes opciones NO fue un objetivo de "El carnaval del agua"?',
      ['Cumplir el deber de participar en la vida política, cívica y comunitaria del país y en la toma de decisiones.',
       'Materializar el cambio de visión propuesto por la Declaración de Río sobre el medio ambiente y el desarrollo.',
       'Manifestar públicamente el sentimiento de inconformidad frente a los proyectos económicos que según el juicio de la población afectan el medio ambiente.',
       'Promover la importancia de que gobernantes y políticos aprueben proyectos en nombre del "interés general" para las poblaciones y para el país.'],
      3,
      'El carnaval nació justamente contra esa idea: que los gobernantes decidan solos invocando el interés general. La marcha buscaba lo opuesto, que la gente participara en la decisión. Las otras tres sí describen lo que hicieron.',
      'En una pregunta con NO, la respuesta suele ser la opción que dice lo contrario de lo que el texto celebra.'),

    /* ═════════ 71 ═════════ */
    S('Interpretación de perspectivas', 'FRAGMENTOS', 'ctx-sit', TRES_TEXTOS,
      '¿Cuál de las siguientes opciones es contraria a la expresión "una mayoría incompetente" que se encuentra en el texto (II)?',
      ['Una mayoría informada.', 'Una mayoría cauta.', 'Una mayoría ingenua.', 'Una mayoría apta.'], 3,
      'Incompetente significa que no es capaz, que no está capacitada para algo. Su contrario directo es apta. Informada y cauta son cualidades deseables, pero no son lo opuesto de incompetente; ingenua va en la misma dirección negativa.',
      'Para hallar un antónimo, quédate con el significado exacto de la palabra, no con si suena positiva o negativa.',
      'media'),

    /* ═════════ 72 ═════════ */
    S('Interpretación de perspectivas', 'FRAGMENTOS', 'ctx-sit', TRES_TEXTOS,
      '¿Qué relación hay entre los tres textos citados?',
      ['El texto (III) presenta una visión positiva de la democracia, opuesta a la de los textos (I) y (II).',
       'El texto (II) critica a la democracia, mientras que los textos (I) y (III) la defienden.',
       'Los textos (I), (II) y (III) se complementan, pues los tres son críticos frente a la democracia.',
       'Los textos (I), (II) y (III) presentan opiniones encontradas sobre la conveniencia de la democracia.'],
      2,
      'Los tres apuntan en la misma dirección. El primero se burla del votante medio; el segundo llama incompetente a la mayoría; y el tercero señala que todos se declaran demócratas "sin contar con argumentos sólidos a favor". Ninguno defiende la democracia, así que no hay opiniones encontradas.',
      'Antes de decir que dos textos se oponen, verifica que alguno de verdad esté defendiendo lo que el otro ataca.',
      'media'),

    /* ═════════ 73 ═════════ */
    S('Interpretación de perspectivas', 'TABLA', 'ctx-table', TABLA_CORRUPCION,
      'Los números tienen la función de',
      ['enumerar las propuestas para darle claridad a la información.',
       'clasificar las medidas propuestas por orden de importancia.',
       'definir el orden en el que van a desarrollarse las propuestas.',
       'establecer la secuencia del pacto con todas las fuerzas políticas.'],
      0,
      'Nada en la tabla indica que la primera fila sea más importante ni que deba hacerse antes que la sexta: las seis propuestas son independientes entre sí. La numeración solo sirve para separarlas y poder referirse a cada una.',
      'Un número en una lista solo indica prioridad u orden si el texto lo dice; si no, únicamente organiza.'),

    /* ═════════ 74 ═════════ */
    S('Interpretación de perspectivas', 'TABLA', 'ctx-table', TABLA_CORRUPCION,
      '"Fiscalizar los ingresos y los gastos de las fundaciones vinculadas a los partidos políticos" es una manera de decir que',
      ['la corrupción se combate regulando la vinculación de fundaciones a los partidos.',
       'la fiscalía debe encargarse de controlar a los estados financieros de las fundaciones.',
       'es necesario monitorear el flujo de dinero en las fundaciones con afiliaciones políticas.',
       'los estados financieros de los partidos políticos deben ser regulados por fundaciones.'],
      2,
      'Fiscalizar ingresos y gastos es, en palabras simples, vigilar el dinero que entra y sale. La propuesta no habla de prohibir el vínculo entre fundaciones y partidos, ni le asigna la tarea a la Fiscalía como entidad, ni invierte los papeles poniendo a las fundaciones a regular a los partidos.',
      'Al parafrasear, cambia las palabras pero no los actores: quién vigila a quién debe quedar igual.'),

    /* ═════════ 76 ═════════ */
    S('Geografía y territorio', 'SITUACIÓN', 'ctx-sit',
      'Las comunidades raizales del Archipiélago de San Andrés, Providencia y Santa Catalina pertenecen a un grupo étnico que ha desarrollado una relación especial con sus islas y el mar, de donde extraen los recursos pesqueros que es su principal actividad económica. La pesca artesanal ha sido una tradición familiar que es transmitida de generación en generación. Las faenas pesqueras pueden llegar a durar más de una semana y han sido fuente de reputación y honorabilidad. Sin embargo, tras el fallo de la Corte Internacional de La Haya emitido en el 2012, Colombia perdió un 40 % de mar territorial en el que se hallaban los bancos más importantes de peces y crustáceos, así como otras riquezas energéticas, en cerca de 75.000 kilómetros que ahora son de Nicaragua. Esto ha generado una profunda crisis entre los raizales y demás habitantes del archipiélago, quienes señalan que sienten un gran abandono y tienen miedo de volver a sus faenas y ser atacados por los nuevos dueños del mar.',
      'Según la información suministrada, ¿cuál de las siguientes relaciones explica mejor la situación descrita?',
      ['Las tradiciones culturales raizales incidieron directamente en la decisión política de la Corte Internacional.',
       'La diplomacia internacional no tiene impacto en las actividades económicas de las comunidades étnicas que viven aisladas.',
       'La división política del territorio afecta las prácticas culturales y económicas de las comunidades étnicas.',
       'Las condiciones climáticas cambiantes alteraron las actividades económicas de las comunidades raizales.'],
      2,
      'Un fallo internacional trazó de nuevo la frontera marítima, y con eso los raizales perdieron los bancos de pesca de los que viven y la tradición que pasaban de generación en generación. La causa es la nueva división del territorio, no el clima, y el texto muestra justamente que la diplomacia sí los afectó.',
      'Sigue la cadena causal del texto: qué cambió primero y qué se vio afectado después.'),
  ],
};

/* La ruta: catorce cuestionarios cortos, agrupados por tema.
 * El título lleva «Aladín» para que el docente sepa de qué formulario físico
 * viene cada uno. */
const CUESTIONARIOS = {
  soc: [
    { tema: 'Constitución y derechos', items: [
      { id: 'soc-52', titulo: 'Aladín · Derechos y dignidad',        qs: [15, 24, 25, 35], tipo: 'Situación' },
    ]},
    { tema: 'Mecanismos de participación', items: [
      { id: 'soc-53', titulo: 'Aladín · Democracia y voto',          qs: [6, 17],          tipo: 'Situación' },
      { id: 'soc-54', titulo: 'Aladín · Participar y decidir',       qs: [13, 37, 39],     tipo: 'Situación' },
    ]},
    { tema: 'Organización del Estado', items: [
      { id: 'soc-55', titulo: 'Aladín · Poder público y reformas',   qs: [3, 36],          tipo: 'Situación' },
    ]},
    { tema: 'Conflicto armado y memoria', items: [
      { id: 'soc-56', titulo: 'Aladín · Violencia y sustitución',    qs: [23, 33],         tipo: 'Situación' },
    ]},
    { tema: 'Geografía y territorio', items: [
      { id: 'soc-57', titulo: 'Aladín · Minería y ambiente',         qs: [4, 12, 31],      tipo: 'Situación' },
      { id: 'soc-58', titulo: 'Aladín · Territorio y sostenibilidad', qs: [5, 9, 26, 34, 44], tipo: 'Situación' },
    ]},
    { tema: 'Economía y sociedad', items: [
      { id: 'soc-59', titulo: 'Aladín · Precios y mercados',         qs: [14, 29, 38],     tipo: 'Situación' },
      { id: 'soc-60', titulo: 'Aladín · Desigualdad y empleo',       qs: [0, 8, 27, 32],   tipo: 'Situación' },
    ]},
    { tema: 'Historia de Colombia', items: [
      { id: 'soc-61', titulo: 'Aladín · Colonia y contacto',         qs: [10, 18],         tipo: 'Situación' },
      { id: 'soc-62', titulo: 'Aladín · Siglo XX en el mundo',       qs: [20, 21, 22],     tipo: 'Situación' },
    ]},
    { tema: 'Interpretación de perspectivas', items: [
      { id: 'soc-63', titulo: 'Aladín · Intención del autor',        qs: [1, 2, 7],        tipo: 'Situación' },
      { id: 'soc-64', titulo: 'Aladín · Fuentes y objetivos',        qs: [11, 19, 30],     tipo: 'Situación' },
      { id: 'soc-65', titulo: 'Aladín · Prejuicio y argumento',      qs: [16, 28, 40],     tipo: 'Situación' },
      { id: 'soc-66', titulo: 'Aladín · Leer tabla y textos',        qs: [41, 42, 43],     tipo: 'Situación' },
    ]},
  ],
};
