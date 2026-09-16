/* Gráficas dibujadas, no recortadas.
 *
 * Los cuadernillos son escaneos sin capa de texto. Recortar una gráfica de
 * ahí da una imagen gris, torcida, cortada por el borde de la columna y que
 * en un teléfono se lee mal — y varias salieron literalmente truncadas: la
 * de las rondas perdía las barras que llegaban a 12, justo las que había que
 * leer para responder.
 *
 * Cuando lo que la figura muestra son DATOS, y esos datos ya están
 * transcritos en el enunciado o en la explicación, se redibuja aquí. Queda
 * nítida a cualquier tamaño, pesa bytes en vez de kilobytes, hereda los
 * colores de la app y la lee un lector de pantalla.
 *
 * Lo que NO se redibuja: lo que es un dibujo de verdad. Un mapa, un triángulo
 * acotado, un hexágono con sus diagonales, la pirámide de una red de ventas.
 * Ahí redibujar sería inventar la fuente, y el recorte —bien hecho— es fiel.
 *
 * El SVG se genera al construir el lote y queda guardado en la base como
 * parte del contexto, así que el navegador no calcula nada. Usa las variables
 * de `tokens.css`: si cambia la paleta, cambian las gráficas.
 *
 * Los guiones de contenido (`generar-carga-banco`, `verificar-contenido`,
 * `huella-carga`) anteponen este archivo a cada archivo de contenido.
 */

// Escapa lo que va dentro del SVG como texto o como atributo.
const esc = s => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Una escala que termina en un número redondo y deja aire encima de la barra
// más alta. Sin esto, la barra máxima toca el techo y parece cortada — que es
// exactamente el defecto que veníamos arrastrando de los recortes.
function escala(max) {
  if (max <= 0) return { tope: 1, paso: 1 };
  const pasos = [1, 2, 2.5, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 2500, 5000];
  const mag = Math.pow(10, Math.floor(Math.log10(max)) - 1);
  for (const p of pasos) {
    const paso = p * mag;
    const tope = Math.ceil(max / paso) * paso;
    const n = tope / paso;
    if (n >= 4 && n <= 8) return { tope, paso };
  }
  return { tope: max, paso: max / 5 };
}

const fmt = v => String(Math.round(v * 1000) / 1000).replace('.', ',');

/* Marco común: rejilla horizontal y rótulos de los dos ejes.
   Los atributos repetidos se factorizan en grupos: el SVG se guarda en la
   base y se envía en cada pregunta, así que la verbosidad se paga 235 veces. */
function marco({ W, H, ml, mr, mt, mb, tope, paso, ejeY, ejeX }) {
  const x0 = ml, x1 = W - mr, y0 = mt, y1 = H - mb;
  const ys = [];
  for (let v = 0; v <= tope + 1e-9; v += paso) ys.push([v, y1 - (v / tope) * (y1 - y0)]);
  const r = n => Math.round(n * 10) / 10;
  const eje = ys.map(([, y]) => `M${x0} ${r(y)}H${x1}`).join('');
  let s = `<path d="${eje}" stroke="var(--color-line)" fill="none" stroke-dasharray="3 3"/>`
        + `<path d="M${x0} ${r(y1)}H${x1}" stroke="var(--color-line)" fill="none"/>`
        + `<g font-size="12" fill="var(--color-ink-faint)" text-anchor="end">`
        + ys.map(([v, y]) => `<text x="${x0 - 7}" y="${r(y + 4)}">${fmt(v)}</text>`).join('')
        + `</g>`;
  const rot = [];
  if (ejeY) rot.push(`<text transform="translate(13,${r((y0 + y1) / 2)}) rotate(-90)">${esc(ejeY)}</text>`);
  if (ejeX) rot.push(`<text x="${r((x0 + x1) / 2)}" y="${H - 5}">${esc(ejeX)}</text>`);
  if (rot.length) s += `<g font-size="12" fill="var(--color-ink-soft)" text-anchor="middle">${rot.join('')}</g>`;
  return s;
}

function envoltura(W, H, alt, cuerpo) {
  return `<figure class="ctx-fig"><svg viewBox="0 0 ${W} ${H}" width="100%" `
       + `preserveAspectRatio="xMidYMid meet" role="img" aria-label="${esc(alt)}" `
       + `font-family="var(--font-body), system-ui, sans-serif">${cuerpo}</svg></figure>`;
}

/* Gráfica de barras verticales.
 *   barras([['1ra.',4],['2da.',8]], { ejeY:'Número de puntos', ejeX:'Ronda', alt:'…' })
 * `destacar` pinta en acento las barras cuyo índice aparezca en el arreglo;
 * sirve cuando la pregunta va justamente sobre una de ellas. */
function barras(datos, o = {}) {
  const W = 480, H = o.alto || 300;
  const ml = o.ejeY ? 58 : 40, mr = 14, mt = 14, mb = (o.ejeX ? 46 : 30) + (o.rotar ? 18 : 0);
  const { tope, paso } = o.tope ? { tope: o.tope, paso: o.paso || o.tope / 5 }
                                : escala(Math.max(...datos.map(d => d[1])));
  const x0 = ml, x1 = W - mr, y1 = H - mb, y0 = mt;
  const ancho = (x1 - x0) / datos.length;
  const bw = Math.min(ancho * 0.62, 48);
  const r = n => Math.round(n * 10) / 10;
  const geo = datos.map(([rot, v], i) => {
    const cx = x0 + ancho * (i + 0.5);
    return { rot, v, cx: r(cx), y: r(y1 - (v / tope) * (y1 - y0)), h: r(Math.max((v / tope) * (y1 - y0), 0)) };
  });
  const dest = o.destacar || [];
  let s = marco({ W, H, ml, mr, mt, mb, tope, paso, ejeY: o.ejeY, ejeX: o.ejeX });
  s += `<g fill="var(--color-accent-lite)">`
     + geo.filter((_, i) => !dest.includes(i))
         .map(g => `<rect x="${r(g.cx - bw / 2)}" y="${g.y}" width="${r(bw)}" height="${g.h}" rx="2"/>`).join('')
     + `</g>`;
  if (dest.length) s += `<g fill="var(--color-accent)">`
     + geo.filter((_, i) => dest.includes(i))
         .map(g => `<rect x="${r(g.cx - bw / 2)}" y="${g.y}" width="${r(bw)}" height="${g.h}" rx="2"/>`).join('')
     + `</g>`;
  // El valor va encima de la barra: leer la altura contra la rejilla es
  // justo lo que salía mal en los recortes.
  s += `<g font-size="12" font-weight="600" fill="var(--color-ink)" text-anchor="middle">`
     + geo.map(g => `<text x="${g.cx}" y="${r(g.y - 6)}">${fmt(g.v)}</text>`).join('')
     + `</g>`;
  // Girado, el rótulo se ancla al final: anclado al centro, el último se
  // saldría por la derecha del dibujo.
  s += `<g font-size="12" fill="var(--color-ink-soft)" text-anchor="${o.rotar ? 'end' : 'middle'}">`
     + geo.map(g => `<text x="${g.cx}" y="${y1 + 16}"`
         + `${o.rotar ? ` transform="rotate(-30 ${g.cx} ${y1 + 16})"` : ''}>${esc(g.rot)}</text>`).join('')
     + `</g>`;
  return envoltura(W, H, o.alt, s);
}

/* Gráfica de línea sobre ejes numéricos.
 *   linea([[0,500],[6,3000]], { ejeX:'Hectáreas', ejeY:'Millones de pesos', alt:'…' }) */
function linea(puntos, o = {}) {
  const W = 480, H = o.alto || 300;
  const ml = o.ejeY ? 62 : 44, mr = 16, mt = 16, mb = o.ejeX ? 46 : 30;
  const xs = puntos.map(p => p[0]), ys = puntos.map(p => p[1]);
  const xTope = o.xTope || Math.max(...xs);
  const { tope, paso } = o.tope ? { tope: o.tope, paso: o.paso || o.tope / 5 }
                                : escala(Math.max(...ys));
  const x0 = ml, x1 = W - mr, y0 = mt, y1 = H - mb;
  const px = x => x0 + (x / xTope) * (x1 - x0);
  const py = y => y1 - (y / tope) * (y1 - y0);
  let s = marco({ W, H, ml, mr, mt, mb, tope, paso, ejeY: o.ejeY, ejeX: o.ejeX });
  const xPaso = o.xPaso || 1;
  const marcas = [];
  for (let v = 0; v <= xTope + 1e-9; v += xPaso) marcas.push(v);
  s += `<g font-size="12" fill="var(--color-ink-soft)" text-anchor="middle">`
     + marcas.map(v => `<text x="${px(v).toFixed(1)}" y="${y1 + 17}">${fmt(v)}</text>`).join('')
     + `</g>`;
  s += `<polyline fill="none" stroke="var(--color-accent)" stroke-width="2.5" `
     + `stroke-linecap="round" stroke-linejoin="round" points="`
     + puntos.map(p => `${px(p[0]).toFixed(1)},${py(p[1]).toFixed(1)}`).join(' ') + `"/>`;
  if (o.puntos !== false) {
    for (const p of puntos) {
      s += `<circle cx="${px(p[0]).toFixed(1)}" cy="${py(p[1]).toFixed(1)}" r="3.5" `
         + `fill="var(--color-card)" stroke="var(--color-accent)" stroke-width="2"/>`;
    }
  }
  return envoltura(W, H, o.alt, s);
}
