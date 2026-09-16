/* Revisa un archivo de content/ antes de generarle el SQL.
 *
 *   node scripts/verificar-contenido.mjs ../content/sociales-f5-2026b.js
 *
 * Comprueba lo que el generador no comprueba y que en la auditoría de
 * septiembre de 2026 resultó ser justo donde se cuelan los errores:
 *
 *   · que toda pregunta esté en algún cuestionario (una pregunta cargada pero
 *     fuera de la ruta es invisible para el estudiante),
 *   · que ninguna esté en dos cuestionarios a la vez,
 *   · que ningún índice de `qs` apunte fuera del banco,
 *   · que `correct` caiga dentro de las opciones,
 *   · que no haya opciones repetidas dentro de una pregunta,
 *   · que la explicación no nombre una letra (las opciones se barajan por
 *     estudiante, así que decir «la opción A» miente la mitad de las veces),
 *   · que no haya dos preguntas con el mismo contexto y enunciado.
 */

import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const ARCHIVO = process.argv[2];
if (!ARCHIVO) { console.error('falta el archivo'); process.exit(2); }

// Los archivos de contenido pueden usar los ayudantes de `_graficas.js`
// (barras, linea) para dibujar una gráfica en vez de recortarla del escaneo.
// Se antepone aquí porque no hay empaquetador: el archivo de contenido se
// evalúa entero en un vm, y las funciones tienen que existir antes.
const graficas = readFileSync(new URL('../content/_graficas.js', import.meta.url), 'utf8');
const fuente = graficas + '\n' +
  readFileSync(new URL(ARCHIVO, import.meta.url), 'utf8').replace(/^\ufeff/, '');
const ctx = { console };
vm.createContext(ctx);
const { BANKS, CUESTIONARIOS } = vm.runInContext(fuente + '\n;({ BANKS, CUESTIONARIOS });', ctx);

// Comprobación del propio guion antes de mirar el contenido. Esta regla ya
// se rompió una vez: un `` quedó escrito como un carácter de retroceso
// literal, la expresión dejó de casar y el generador empezó a derivar ids
// nuevos para toda pregunta con gráfica dibujada. No se notaba en ninguna
// salida: solo en que la base y git dejaban de cuadrar.
const norm = s => String(s).toLowerCase().normalize('NFD')
  .replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
// Una figura no debe influir NUNCA en la identidad de una pregunta. Un
// `<img>` ya cumplía eso sin hacer nada: es una etiqueta suelta y desaparece
// entera. Un `<svg>` dibujado no, porque lleva texto dentro —los números de
// las barras, los rótulos de los ejes— y ese texto sí sobrevivía, de modo que
// redibujar una gráfica movía el id de su pregunta y su `hash_norm`. Se
// elimina el bloque completo, y por un espacio, que es exactamente lo que
// dejaba el `<img>`: así redibujar una figura no cambia ningún id.
const sinEtiquetas = h => String(h)
  .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
  .replace(/<[^>]+>/g, ' ');

if (sinEtiquetas('a<svg x="1">HOLA</svg>b') !== 'a b') {
  console.error('sinEtiquetas no está descartando el bloque <svg>: una figura '
    + 'dibujada movería el id de su pregunta. Revisa la expresión regular.');
  process.exit(2);
}

let fallos = 0;
const mal = m => { console.log('  ✗ ' + m); fallos += 1; };

for (const [materia, banco] of Object.entries(BANKS)) {
  console.log(`\n${materia}: ${banco.length} preguntas`);

  banco.forEach((it, i) => {
    if (!Array.isArray(it.opts) || it.opts.length < 2) mal(`${i}: opciones insuficientes`);
    if (it.estado !== 'borrador' && !(Number.isInteger(it.correct) && it.correct >= 0 && it.correct < it.opts.length)) mal(`${i}: correct=${it.correct} fuera de las ${it.opts.length} opciones`);
    if (new Set(it.opts.map(op => String(op).normalize('NFC').replace(/\s+/g, ' ').trim().toLowerCase())).size !== it.opts.length) mal(`${i}: opciones repetidas`);
    if (!it.text || !it.exp) mal(`${i}: falta enunciado o explicación`);
    // «la opción A», «la respuesta B», «(C)» — pero no «Colombia» ni «Artículo 16».
    if (/\b(opci[oó]n|respuesta|literal)\s+[A-D]\b/i.test(it.exp)) mal(`${i}: la explicación nombra una letra`);
  });

  const claves = banco.map(it => norm(sinEtiquetas(it.context || '') + ' ' + it.text));
  claves.forEach((k, i) => {
    const j = claves.indexOf(k);
    if (j !== i) mal(`${i}: mismo contexto y enunciado que ${j}`);
  });

  const usos = new Map();
  for (const sec of (CUESTIONARIOS[materia] || [])) {
    for (const it of sec.items) {
      if (!it.qs.length) mal(`cuestionario ${it.id}: vacío`);
      for (const qi of it.qs) {
        if (!(qi >= 0 && qi < banco.length)) { mal(`cuestionario ${it.id}: índice ${qi} fuera de rango`); continue; }
        if (banco[qi].estado === 'borrador') mal(`cuestionario ${it.id}: contiene el borrador ${qi}`);
        if (usos.has(qi)) mal(`pregunta ${qi}: en ${usos.get(qi)} y en ${it.id}`);
        usos.set(qi, it.id);
      }
    }
  }
  const sueltas = banco.map((_, i) => i).filter(i => banco[i].estado !== 'borrador' && !usos.has(i));
  if (sueltas.length) mal(`sin cuestionario: ${sueltas.join(', ')}`);

  const cuest = (CUESTIONARIOS[materia] || []).reduce((n, s) => n + s.items.length, 0);
  console.log(`  ${cuest} cuestionarios · ${usos.size} preguntas en la ruta`);
  const media = banco.filter(it => it.confianza === 'media').length;
  if (media) console.log(`  ${media} con confianza media (revisión docente)`);
}

console.log(fallos ? `\n${fallos} problema(s).` : '\nSin problemas.');
process.exit(fallos ? 1 : 0);
