/* Localiza las figuras de un cuadernillo escaneado de matemáticas.
 *
 *   node scripts/detectar-figuras.mjs <pdf> <prefijo>            (detectar)
 *   node scripts/detectar-figuras.mjs <pdf> <prefijo> --hoja     (+ hoja de contacto)
 *
 * En sociales las figuras eran tres en 152 páginas y se medían a mano. En
 * matemáticas hay una por pregunta —unas 22 por cuadernillo, más de 180 en
 * total— así que medirlas a ojo no escala.
 *
 * El detector por manchas de tinta que sirvió en sociales aquí falla: una
 * gráfica de ejes finos no forma una mancha grande, y una montaña en semitono
 * se rompe en miles de puntos. Lo que sí separa texto de figura es la
 * PERIODICIDAD: el texto son renglones a intervalos regulares, de altura
 * pareja; una gráfica, una tabla o un diagrama no tienen ese pulso.
 *
 * Para cada banda horizontal de la página se mide qué tan periódico es el
 * perfil de tinta. Las bandas poco periódicas y con tinta suficiente son
 * candidatas a figura; se agrupan las contiguas y se recorta cada grupo.
 *
 * Nota: este guion no escribe los recortes definitivos. Propone cajas y arma
 * una hoja de contacto para revisarlas; el recorte final se hace con las
 * cajas ya confirmadas. Un recorte que invade la columna vecina se nota en la
 * pantalla del estudiante, así que la revisión visual no se salta.
 */

import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const [PDF, PREFIJO, ...resto] = process.argv.slice(2);
if (!PDF || !PREFIJO) {
  console.error('uso: node scripts/detectar-figuras.mjs <pdf> <prefijo> [--hoja]');
  process.exit(2);
}
const HOJA = resto.includes('--hoja');

// El trabajo de imagen se hace en Python: pymupdf rinde el PDF y numpy mide.
const PY = String.raw`
import json, os, sys
import numpy as np
import pymupdf

PDF, PREFIJO, HOJA = sys.argv[1], sys.argv[2], sys.argv[3] == '1'
DPI = 110
BANDA = 6           # alto de cada banda de medida, en px
TINTA_MIN = 0.012   # por debajo de esto la banda está vacía
PERIODICO = 0.34    # autocorrelación por encima de esto: parece texto

def medias(doc):
    for i in range(doc.page_count):
        r = doc[i].rect
        yield i, 'a', pymupdf.Rect(r.x0, r.y0, r.x0 + r.width / 2, r.y1)
        yield i, 'b', pymupdf.Rect(r.x0 + r.width / 2, r.y0, r.x1, r.y1)

def periodicidad(perfil):
    """Qué tan rítmico es el perfil de tinta: 1 = renglones regulares."""
    p = perfil - perfil.mean()
    if np.allclose(p, 0):
        return 1.0
    n = len(p)
    ac = np.correlate(p, p, 'full')[n - 1:]
    ac = ac / (ac[0] + 1e-9)
    # el renglón de un cuadernillo cae entre 8 y 26 px a 110 dpi
    ventana = ac[8:27]
    return float(ventana.max()) if len(ventana) else 0.0

def corondel(tinta):
    """El canal vertical en blanco que separa las dos columnas de la página.

    Sin este corte el detector devuelve la franja entera y se lleva el texto
    de al lado, que en la pantalla del estudiante se ve como basura pegada a
    la figura."""
    W = tinta.shape[1]
    cols = tinta.mean(axis=0)
    a, b = int(W * 0.38), int(W * 0.62)
    if b <= a:
        return None
    k = a + int(np.argmin(cols[a:b]))
    return k if cols[k] < cols.mean() * 0.35 else None

doc = pymupdf.open(PDF)
salida = []
for i, lado, clip in medias(doc):
    pm = doc[i].get_pixmap(clip=clip, dpi=DPI, colorspace=pymupdf.csGRAY)
    a = np.frombuffer(pm.samples, dtype=np.uint8).reshape(pm.height, pm.width)
    tinta_full = (a < max(40, np.percentile(a, 75) * 0.72)).astype(np.float32)
    corte = corondel(tinta_full)
    tramos = ([(0, corte), (corte, tinta_full.shape[1])] if corte
              else [(0, tinta_full.shape[1])])
    for cx0, cx1 in tramos:
        tinta = tinta_full[:, cx0:cx1]
        H, W = tinta.shape
        filas = tinta.mean(axis=1)

        # ¿es figura cada banda?
        marcas = []
        for y in range(0, H - BANDA, BANDA):
            seg = filas[max(0, y - 40):min(H, y + 46)]
            hay = filas[y:y + BANDA].mean() > TINTA_MIN
            marcas.append(hay and periodicidad(seg) < PERIODICO)

        # agrupa bandas contiguas, tolerando un hueco corto
        grupos, actual, hueco = [], None, 0
        for b, m in enumerate(marcas):
            if m:
                if actual is None:
                    actual = [b, b]
                else:
                    actual[1] = b
                hueco = 0
            elif actual is not None:
                hueco += 1
                if hueco > 3:
                    grupos.append(actual); actual = None
        if actual is not None:
            grupos.append(actual)

        for g0, g1 in grupos:
            y0, y1 = g0 * BANDA, min(H, (g1 + 1) * BANDA)
            if y1 - y0 < 55:                 # demasiado bajo para ser figura
                continue
            cols = np.where(tinta[y0:y1].sum(axis=0) > 0)[0]
            if not len(cols) or cols[-1] - cols[0] < 90:
                continue
            salida.append(dict(pag=i, lado=lado, x=int(cols[0]) + cx0, y=int(y0),
                               w=int(cols[-1] - cols[0]), h=int(y1 - y0),
                               clipx=clip.x0, dpi=DPI))

json.dump(salida, open(f'{PREFIJO}-cajas.json', 'w'), indent=0)
print(f'{len(salida)} candidatas')

if HOJA and salida:
    from PIL import Image, ImageDraw
    COLS, CW, CH = 4, 300, 250
    filas_n = (len(salida) + COLS - 1) // COLS
    hoja = Image.new('RGB', (COLS * CW, filas_n * (CH + 16)), 'white')
    dib = ImageDraw.Draw(hoja)
    f = 72.0 / DPI
    for n, c in enumerate(salida):
        R = pymupdf.Rect(c['clipx'] + c['x'] * f, c['y'] * f,
                         c['clipx'] + (c['x'] + c['w']) * f, (c['y'] + c['h']) * f)
        pm = doc[c['pag']].get_pixmap(clip=R, dpi=150)
        im = Image.frombytes('RGB', (pm.width, pm.height), pm.samples)
        im.thumbnail((CW - 8, CH - 8))
        px, py = (n % COLS) * CW, (n // COLS) * (CH + 16)
        hoja.paste(im, (px + 4, py + 16))
        dib.text((px + 4, py + 3), f"[{n}] p{c['pag']+1}{c['lado']} {c['w']}x{c['h']}", fill='black')
        dib.rectangle([px + 1, py + 1, px + CW - 1, py + CH + 14], outline='#ccc')
    hoja.save(f'{PREFIJO}-candidatas.png', optimize=True)
    print(f'hoja: {PREFIJO}-candidatas.png')
`;

try {
  const out = execFileSync('python', ['-c', PY, PDF, PREFIJO, HOJA ? '1' : '0'],
    { encoding: 'utf8' });
  process.stdout.write(out);
} catch (e) {
  console.error(e.stderr || e.message);
  process.exit(1);
}
