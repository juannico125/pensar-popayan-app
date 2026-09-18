/* Química · formulario 2 (F2, Bugs Bunny) · lote 2026-B
 *
 * Una sola pregunta, y por eso este archivo existe: la 112 viene impresa en el
 * cuadernillo de física, pero el docente anotó «Química» al margen y tiene
 * razón —va sobre tipos de enlace, no sobre electricidad—. Meterla en física
 * habría dejado la pregunta en un tema que no le corresponde y habría roto el
 * repaso, que empareja preguntas por tema.
 *
 * Es también la primera pregunta de Química en la plataforma. Cuando lleguen
 * los cuadernillos de la materia, este archivo se queda como está: los ids se
 * derivan del contenido, así que cargar más lotes no lo toca.
 *
 * Clave propuesta por el modelo, sin revisión docente.
 */

const BANKS = { qui: [] };

BANKS.qui.push({
  numero: 112,
  comp: 'Enlace químico',
  dificultad: 'media',
  ctxLabel: 'QUÍMICA',
  ctxClass: 'ctx-sit',
  context:
    '<p>En una práctica de laboratorio se hace pasar electricidad a través de soluciones de diferentes compuestos para encender una bombilla común. De este experimento se obtienen los siguientes datos.</p>' +
    '<table class="ctx-table">' +
    '<tr><th>Compuesto</th><th>NaCl</th><th>NH<sub>3</sub></th><th>CaO</th><th>Azúcar casera</th></tr>' +
    '<tr><td>Enlace</td><td>Iónico</td><td>Covalente polar</td><td>Iónico</td><td>Covalente apolar</td></tr>' +
    '<tr><td>Observación</td><td>Se enciende el bombillo</td><td>El bombillo enciende muy poco</td><td>Se enciende el bombillo</td><td>El bombillo no enciende</td></tr>' +
    '</table>',
  text: 'A partir de los resultados obtenidos y presentados en la tabla, la pregunta que pueden responder los estudiantes es',
  opts: [
    '¿Cómo se relaciona el enlace de un compuesto con su conductividad eléctrica?',
    '¿Qué diferencia química existe entre el enlace iónico y el enlace covalente?',
    '¿Por qué los compuestos iónicos encienden el bombillo y los covalentes no?',
    '¿Por qué se usa agua para formar las soluciones y encender la bombilla?',
  ],
  correct: 0,
  exp: 'La tabla solo tiene dos columnas de información por compuesto: qué enlace tiene y si encendió el bombillo. Con eso se puede responder si una cosa va con la otra, y de hecho va: los dos compuestos iónicos encienden, el covalente polar casi no y el apolar nada. Lo que la tabla no trae es el porqué —para eso haría falta hablar de iones libres, y ese dato no está—, ni nada sobre el agua, que no aparece como variable. Y la pregunta sobre la diferencia entre los dos enlaces se responde con teoría, no con este experimento.',
  tip: 'Mira qué columnas tiene la tabla. Una tabla solo puede responder preguntas sobre lo que midió.',
});

/* Primera ruta de Química. Arranca en qui-1 y crecerá cuando lleguen los
   cuadernillos de la materia. */
const CUESTIONARIOS = {
  qui: [
    { tema: 'Enlace químico', items: [
      { id: 'qui-1', titulo: 'Bugs Bunny · Enlace y conductividad', qs: [0], tipo: 'Situación' },
    ]},
  ],
};

/* Cotejo con la página 9 de fisica de aladin.pdf. */
for (const p of BANKS.qui) p.identityContext = p.context;
BANKS.qui[0].exp = 'La tabla permite relacionar el tipo de enlace consignado con la conductividad observada, porque ambas variables se registraron. No permite explicar por sí sola el mecanismo ni evaluar el efecto del agua como variable independiente. Advertencia sobre la fuente: clasifica el azúcar como covalente apolar, lo cual es incorrecto para la sacarosa, que tiene grupos polares. Que su disolución no encienda el bombillo se debe a que no aporta una cantidad apreciable de iones móviles; no demuestra que sea apolar. El amoníaco en agua sí produce algunos iones. La clave se refiere a qué relación se puede investigar, no a validar todas las etiquetas de la tabla.';
BANKS.qui[0].confianza = 'media';
CUESTIONARIOS.qui[0].items[0].titulo = 'Deadpool · Enlace y conductividad';

// Presentación accesible sin alterar celdas ni valores del documento.
for (const p of BANKS.qui) p.context = p.context.replace(/<table class="ctx-table">([\s\S]*?)<\/table>/g, (_,body) => {
 const wide = [...body.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)].some(m => [...m[1].matchAll(/<(?:td|th)\b/g)].length > 4);
 return '<div class="ctx-datos" role="region" aria-label="Tabla de datos" tabindex="0"><table class="ctx-table ctx-table-nativa' + (wide ? ' ctx-table-amplia' : '') + '">' + body + '</table></div>';
});
