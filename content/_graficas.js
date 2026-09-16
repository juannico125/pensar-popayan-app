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
function marco({ W, H, ml, mr, mt, mb, tope, paso, ejeY, ejeX, tamano = 12 }) {
  const x0 = ml, x1 = W - mr, y0 = mt, y1 = H - mb;
  const ys = [];
  for (let v = 0; v <= tope + 1e-9; v += paso) ys.push([v, y1 - (v / tope) * (y1 - y0)]);
  const r = n => Math.round(n * 10) / 10;
  const eje = ys.map(([, y]) => `M${x0} ${r(y)}H${x1}`).join('');
  let s = `<path d="${eje}" stroke="var(--color-line)" fill="none" stroke-dasharray="3 3"/>`
        + `<path d="M${x0} ${r(y1)}H${x1}" stroke="var(--color-line)" fill="none"/>`
        + `<g font-size="${tamano}" fill="var(--color-ink-faint)" text-anchor="end">`
        + ys.map(([v, y]) => `<text x="${x0 - 7}" y="${r(y + 4)}">${fmt(v)}</text>`).join('')
        + `</g>`;
  const rot = [];
  if (ejeY) rot.push(`<text transform="translate(13,${r((y0 + y1) / 2)}) rotate(-90)">${esc(ejeY)}</text>`);
  if (ejeX) rot.push(`<text x="${r((x0 + x1) / 2)}" y="${H - 5}">${esc(ejeX)}</text>`);
  if (rot.length) s += `<g font-size="${tamano}" fill="var(--color-ink-soft)" text-anchor="middle">${rot.join('')}</g>`;
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

/* Tablas cotejadas contra los recortes originales. Los datos siguen siendo
 * el estímulo del ejercicio: no se añaden resultados ni se corrigen aquí
 * las erratas de los cuadernillos que quedaron en borrador.
 */
function tablaNativa(cabeceras, filas, titulo = '') {
  const amplia = cabeceras.length > 4 ? ' ctx-table-amplia' : '';
  return `<div class="ctx-datos" role="region" aria-label="${esc(titulo || 'Tabla de datos')}" tabindex="0">`
    + `<table class="ctx-table ctx-table-nativa${amplia}">`
    + (titulo ? `<caption>${esc(titulo)}</caption>` : '')
    + '<thead><tr>' + cabeceras.map(c => `<th scope="col">${esc(c)}</th>`).join('') + '</tr></thead><tbody>'
    + filas.map(f => '<tr>' + f.map((v, i) => i === 0 ? `<th scope="row">${esc(v)}</th>` : `<td>${esc(v)}</td>`).join('') + '</tr>').join('')
    + '</tbody></table></div>';
}

/* Conserva el tipo de representación, la escala compartida y los rótulos
 * originales. Los valores solo se imprimen cuando también estaban impresos
 * en la fuente; leer una altura sigue siendo parte de la pregunta.
 */
function graficaDatos(categorias, series, o) {
  const W = 360, H = 300, izquierda = 56, derecha = 12;
  const arriba = series.length > 1 ? 45 : 24, abajo = 66;
  const ancho = W - izquierda - derecha, alto = H - arriba - abajo;
  const y = v => H - abajo - alto * v / o.tope;
  const pasoX = ancho / categorias.length;
  const colores = ['var(--color-accent)', 'var(--color-ink-soft)'];
  let cuerpo = marco({W,H,ml:izquierda,mr:derecha,mt:arriba,mb:abajo,tope:o.tope,paso:o.paso,ejeY:o.ejeY,ejeX:o.ejeX,tamano:16});
  if(series.length > 1) cuerpo += series.map((s,i)=>`<rect x="${izquierda+i*125}" y="10" width="12" height="12" fill="${colores[i]}"/><text x="${izquierda+18+i*125}" y="22" font-size="16" fill="var(--color-ink)">${esc(s.nombre)}</text>`).join('');
  for(const [indice,s] of series.entries()) {
    const anchoBarra = Math.min(42, pasoX * .7 / series.length);
    cuerpo += s.valores.map((v,i)=>{
      const centro = izquierda + pasoX * (i + .5);
      const x = centro + (indice - (series.length-1)/2)*anchoBarra;
      const figura = o.puntos
        ? `<circle cx="${x}" cy="${y(v)}" r="5" fill="${colores[indice]}"/>`
        : `<rect x="${x-anchoBarra/2}" y="${y(v)}" width="${anchoBarra-2}" height="${alto*v/o.tope}" fill="${colores[indice]}" rx="1"/>`;
      return figura + (o.valores ? `<text x="${x}" y="${y(v)-7}" font-size="16" text-anchor="middle" fill="var(--color-ink)">${fmt(v)}</text>` : '');
    }).join('');
  }
  cuerpo += '<g font-size="16" text-anchor="middle" fill="var(--color-ink-soft)">'
    + categorias.map((c,i)=>{
      c = o.rotulos?.[i] || c;
      const partes = c.length > 11 ? c.split(' ') : [c];
      const x = izquierda + pasoX*(i+.5);
      return `<text x="${x}" y="${H-abajo+19}">` + partes.map((p,j)=>`<tspan x="${x}" dy="${j?15:0}">${esc(p)}</tspan>`).join('') + '</text>';
    }).join('') + '</g>';
  const alt = o.alt || series.map(s => (s.nombre ? s.nombre + ': ' : '') + categorias.map((c,i)=>`${c}, ${s.valores[i]}`).join('; ')).join('. ');
  return envoltura(W,H,alt,cuerpo);
}

function figurasMatematicasNativas() {
  const t = tablaNativa;
  const figuras = {
    'bu2-q46-tablas.webp': t(['Vaca', 'Peso en la mañana (kg)'], [[1,652],[2,690],[3,774],[4,676],[5,703],['Total','3.495']])
      + t(['Tipo de camión','Capacidad máxima (kg)'], [['Ligero','2.500'],['Liviano','3.500'],['Mediano','4.500'],['Pesado','7.500']]),
    'bu2-q54-tabla.webp': t(['Atracción','Estatura mínima (cm)','Tiempo de fila (min)'], [['P',130,10],['Q',135,11],['R',160,15],['S',150,8],['T',120,9]]),
    'de1-q03-tabla.webp': t(['Día','Producción de leche (litros)'], [['Lunes',75],['Martes',65],['Miércoles',75],['Jueves',65],['Viernes',70]]),
    'de1-q04-precios.webp': t(['Elemento','Porcentaje del área total del anuncio','Precio'], [['Imagen','Por cada 1 %','$50.000'],['Texto','Por cada 5 %','$100.000']]),
    'de1-q06-tabla.webp': t(['Profesor','Cantidad de cucharadas de azúcar'], [['Carlos',1],['Juliana',5],['Lorena',3],['Iván',1],['Patricia',0]]),
    'de1-q08-tabla.webp': t(['Edad (años)','Minutos'], [[14,28],[15,30],[19,38],[20,40]]),
    'de1-q13-tabla.webp': t(['Participante','Edad (años)','Compras mensuales'], [[1,18,3],[2,25,2],[3,23,3],[4,35,2],[5,36,1],[6,18,4],[7,19,2],[8,31,1],[9,32,2],[10,27,3]]),
    'de1-q20-tabla.webp': t(['Paciente','Semana 1','Semana 2','Semana 3','Semana 4','Semana 5'], [['Pepe','50 %','45 %','40 %','35 %','30 %'],['Jacinto','20 %','30 %','40 %','20 %','30 %'],['Juan','35 %','40 %','45 %','50 %','55 %'],['María','10 %','20 %','20 %','20 %','50 %']], 'Porcentaje de movilidad de las piernas'),
    'de1-q21-tabla.webp': t(['Triángulo','Base','Altura'], [['V','1 cm','3 cm'],['W','4 cm','4 cm'],['Z','3 cm','4 cm']]),
    'de1-q28-notas.webp': t(['Nombre','Intensidad horaria','Tareas','Nota matemática','Nota química'], [['Camilo',3,8,'3,9','4,0'],['Luis',4,6,'4,0','3,9'],['Andrés',6,5,'4,2','3,7'],['Óscar',7,4,'4,5','3,5'],['Julián',8,2,'4,6','3,0'],['Fabián',12,1,'4,8','2,9']]),
    'de1-q29-notas.webp': t(['','Carlos','Miguel','Claudia'], [['Calificación 1',1,3,4],['Calificación 2',5,2,5],['Calificación 3',9,8,6],['Desviación estándar',4,'3,2',1]]),
    'de2-q45-tabla.webp': t(['Persona','Presión diastólica (mmHg)','Presión sistólica (mmHg)','Nivel'], [['Persona 1',70,110,'Normal'],['Persona 2',80,125,'Elevada'],['Persona 3',90,136,'Hipertensión I'],['Persona 4',95,144,'Hipertensión II']]),
    'de2-q46-registro1.webp': t(['Consumo total del trimestre (kWh)','Valor total del trimestre'], [['1.099','$635.222']], 'Registro 1'),
    'de2-q54-tabla.webp': t(['Tipo de medalla','Mujeres','Hombres'], [['Oro',20,8],['Plata',12,10],['Bronce',6,16]]),
    'de2-q57-tabla.webp': t(['Número de televisores','Sector 1','Sector 2','Sector 3'], [[0,5,3,10],[1,4,8,30],[2,9,2,15],[3,15,12,4],['4 o más',5,3,6],['Total',38,28,65]]),
    'de2-q63-tabla.webp': t(['Respuesta','Número de estudiantes'], [['Hago ejercicio todos los días',180],['Hago una vez por semana algo de ejercicio',360],['Hago ejercicio saliendo a caminar cada 15 días',360],['Hago una vez al mes algo de ejercicio',320],['No realizo actividad física',780]]),
    'do1-q01-tablas.webp': t(['Salario','Hombres','Mujeres','Total'], [['$1.000.000','2 %','18 %',40],['$1.500.000','15 %','10 %',50],['$2.000.000','21 %','14 %',70],['$3.000.000','12 %','8 %',40]], 'Porcentaje de personas por salario')
      + t(['Porcentaje destinado a cuotas','$1.000.000','$1.500.000','$2.000.000','$3.000.000'], [['15 %',10,15,25,10],['35 %',24,24,31,25],['Total de personas por salario',34,39,56,35]]),
    'do1-q04-tabla.webp': t(['Nombre','Peso (kg)','Edad','Color de ojos'], [['Paola',60,30,'Verde'],['Andrea',50,23,'Azul'],['Gloria',55,50,'Café'],['Luis',52,18,'Azul'],['Mario',53,20,'Café']]),
    'do1-q16-tabla.webp': t(['Dato del campeonato','Valor'], [['Número de saltos realizados',90],['Cantidad de atletas',30],['Menor distancia de un salto','11,5 metros'],['Mayor distancia de un salto','14,2 metros']]),
    'do1-q18-tabla.webp': t(['Mes','Ventas (millones de $)'], [['Enero','1.000'],['Febrero','6.000'],['Marzo','3.500'],['Abril','1.500'],['Mayo','4.000'],['Junio','3.500']]),
    'do2-q43-tabla.webp': t(['Posición',1,2,3,4,'…'], [['Área (cm²)',9,25,49,81,'…']]),
    'do2-q53-tabla.webp': t(['Medida','X','Y'], [['Desviación estándar','1,7','?'],['Varianza','?','11,7']])
      + t(['Covarianza de X e Y'], [['5,8']]),
    'do2-q56-precios.webp': t(['Curso','Precio mensual'], [['Guitarra','$130.000'],['Batería','$150.000'],['Piano','$120.000'],['Canto','$170.000']]),
    'do2-q56-inscritos.webp': t(['Guitarra','Batería','Piano','Canto'], [[10,6,16,9]]),
    'mi-q03-notas.webp': t(['Estudiante','Periodo 1','Periodo 2','Periodo 3','Periodo 4'], [[1,'3,5','3,0','3,5','3,0'],[2,'2,5','3,5','3,0','4,5'],[3,'4,5','2,5','4,5','2,5'],[4,'2,5','5,0','2,5','3,0']]),
    'mi-q06-estudiantes.webp': t(['Estudiante',1,2,3,4,5], [['Sexo','H','M','H','H','M'],['Edad (años)',15,17,17,15,15]]),
    'mi-q09-precios.webp': t(['Curso','Precio mensual'], [['Guitarra','$130.000'],['Batería','$150.000'],['Piano','$120.000'],['Canto','$170.000']]),
    'mi-q09-inscritos.webp': t(['Guitarra','Batería','Piano','Canto'], [[10,6,15,9]]),
    'mi-q21-tabla.webp': t(['x','y'], [[1,2],[2,4],[3,9],[4,15]]),
    'mi-q22-calzado.webp': t(['Producto','Costo de fabricación','Precio de venta','Unidades vendidas'], [['Botas','$30.000','$32.000',500],['Zapatillas','$25.000','$30.000',800],['Zapatos deportivos','$35.000','$35.000','2.000'],['Zapatos formales','$50.000','$60.000','1.200']]),
    'mi-q28-equipos.webp': t(['Equipo','Puntos','Partidos ganados','Anotaciones a favor','Anotaciones en contra'], [[1,42,10,30,10],[2,40,12,35,20],[3,37,9,25,10],[4,35,7,20,5],[5,32,7,22,8]]),
    'mi-q30-tabla.webp': t(['Mes','Ventas (millones de $)'], [['Enero','1.000'],['Febrero','5.000'],['Marzo','3.500'],['Abril','1.500'],['Mayo','4.000'],['Junio','3.500']]),
    'mi-q01-rutas.webp': t(['','Ruta 1','Ruta 2','Ruta 3'], [['Número máximo de pasajeros',30,20,60],['Velocidad (km/h)',7,5,4],['Tiempo de recorrido (min)',154,180,300],['Distancia recorrida (km)',18,15,20]]),
    'mi-q04-proporcion.webp': t(['Magnitud 1','Magnitud 2'], [[4,8],[6,'¿?']]),
    'mi-q08-autos.webp': t(['Marca','Autonomía (km)','Velocidad máxima (km/h)','Precio (euros)'], [[1,100,80,'16.400'],[2,160,112,'99.000'],[3,90,65,'8.500'],[4,150,90,'14.500'],[5,80,80,'7.400'],[6,160,126,'26.900'],[7,120,130,'25.000'],[8,400,210,'99.000'],[9,250,170,'297.000'],[10,200,85,'28.000']]),
    'mi-q11-mezcla.webp': t(['Aplicación','Cemento (kg)','Arena (kg)'], [['Pisos',35,70],['Techos',30,90],['Muros',25,75],['Revestimientos',20,100]]),
    'de1-q12-tarifas.webp': t(['Tarifa','Entrada','Valor adicional por atracción'], [['Opción 1','$20.000','$1.000'],['Opción 2','$15.000','$1.200']]),
    'do1-q07-zapatos.webp': t(['Producto','Costo de fabricación','Precio de venta','Unidades vendidas'], [['Botas','$30.000','$32.000',500],['Zapatillas','$25.000','$30.000',800],['Zapatos deportivos','$35.000','$35.000','2.000'],['Zapatos formales','$50.000','$80.000','1.200']]),
  };
  for(const [letra,imagen,texto] of [['a','80 dm²','40 dm²'],['b','800 cm²','800 cm²'],['c','8 dm²','8 dm²'],['d','800 cm²','4.000 cm²']]) {
    figuras[`de1-q04-${letra}.webp`] = t(['Elemento','Área ocupada','Precio'], [['Imagen',`Por cada ${imagen}`,'$50.000'],['Texto',`Por cada ${texto}`,'$100.000']]);
  }
  for(const prefijo of ['do1-q09','ti2-q54']) {
    for(const [letra,meses,lluvia] of [['a',false,false],['b',true,false],['c',false,true],['d',true,true]]) {
      const tiempos = meses ? ['Enero','Abril','Junio','Julio'] : ['Lunes','Martes','Miércoles','Jueves'];
      figuras[`${prefijo}-${letra}.webp`] = t([meses ? 'Meses de vacaciones' : 'Día de la semana','Número de visitantes',lluvia ? 'Probabilidad de lluvia (%)' : 'Temperatura ambiente (°C)'], tiempos.map((tiempo,i)=>[tiempo,[4,2,5,7][i],(lluvia ? [20,80,40,90] : [30,20,28,18])[i]]));
    }
  }
  for(const [letra,valores] of [['a',[1,8,10,1]],['b',[3,8,6,3]],['c',[5,8,2,5]],['d',[0,8,12,0]]]) {
    figuras[`mi-q02-${letra}.webp`] = t(['Calificación','Número de estudiantes'], ['Insuficiente','Aceptable','Sobresaliente','Excelente'].map((c,i)=>[c,valores[i]]));
  }
  figuras['al1-q08-marzo-abril.webp'] = graficaDatos(['Billeteras','Carteras','Correas','Chaquetas'], [{nombre:'Marzo',valores:[5,20,30,5]},{nombre:'Abril',valores:[15,25,10,10]}], {tope:35,paso:5,ejeY:'Porcentaje (%)',ejeX:'Productos'});
  figuras['al1-q09-produccion.webp'] = graficaDatos(['Pequeños','Grandes'], [{nombre:'Rayados',valores:[50,20]},{nombre:'Cuadriculados',valores:[70,60]}], {tope:80,paso:10,ejeY:'Cantidad',ejeX:'Producción día 2'});
  figuras['de1-q09-consumo.webp'] = graficaDatos(['Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Consumo promedio'], [{nombre:'Consumo (kWh)',valores:[82,60,82,90,82,66,77]}], {tope:100,paso:20,ejeY:'Consumo (kWh)',ejeX:'Mes',valores:true,rotulos:['May.','Jun.','Jul.','Ago.','Sep.','Oct.','Prom.']});
  figuras['de2-q54-grafica.webp'] = graficaDatos(['Oro','Plata','Bronce'], [{nombre:'Mujeres',valores:[6,12,20]},{nombre:'Hombres',valores:[8,10,16]}], {tope:22,paso:2,ejeY:'Número de medallas',ejeX:'Tipo de medalla'});
  for(const [letra,valores] of [['a',[6,9,10,15]],['b',[13,15,12,17]],['c',[17,15,13,12]],['d',[10,6,15,9]]]) {
    figuras[`mi-q10-${letra}.webp`] = graficaDatos(['Guitarra','Batería','Piano','Canto'], [{nombre:'Niños',valores}], {tope:18,paso:2,ejeY:'Cantidad de niños',ejeX:'Curso'});
  }
  for(const [letra,categorias,valores] of [['a',['P','Q','T'],[9,10,11]],['b',['R','S'],[8,15]],['c',['P','Q','T'],[10,11,9]],['d',['R','S'],[15,8]]]) {
    figuras[`bu2-q54-${letra}.webp`] = graficaDatos(categorias, [{nombre:'Tiempo de fila (min)',valores}], {tope:16,paso:2,ejeY:'Tiempo de fila (min)',ejeX:'Atracciones',puntos:true});
  }
  return figuras;
}

/* Pin de identidad antes de convertir imágenes en tablas. El texto nuevo
 * de las celdas no debe cambiar los UUID a los que apunta el historial.
 * La huella sí compara el contenido final completo que recibe el alumno.
 */
function mejorarFigurasMatematicas(banco) {
  const figuras = figurasMatematicasNativas();
  const sustituir = html => html?.replace(/<figure class="ctx-fig">\s*<img\b[^>]*src="img\/figuras\/mat\/([^"]+)"[^>]*>\s*<\/figure>/g,
    (original, archivo) => figuras[archivo] || original)
    .replace(/<table\b[^>]*>[\s\S]*?<\/table>/g, tabla => {
      if(tabla.includes('ctx-table-nativa')) return tabla;
      const primeraFila = tabla.match(/<tr[^>]*>([\s\S]*?)<\/tr>/)?.[1] || '';
      const ancha = (primeraFila.match(/<th\b/g) || []).length > 4;
      return '<div class="ctx-datos" role="region" aria-label="Tabla de datos" tabindex="0">'
        + tabla.replace('class="ctx-table"', `class="ctx-table ctx-table-nativa${ancha ? ' ctx-table-amplia' : ''}"`) + '</div>';
    });
  for(const pregunta of banco) {
    const contexto = sustituir(pregunta.context);
    if(contexto !== pregunta.context) {
      pregunta.identityContext ??= pregunta.context;
      pregunta.context = contexto;
    }
    pregunta.opts = pregunta.opts.map(sustituir);
  }
}

/* Varias curvas sobre los mismos ejes, cada una con su rótulo.
 *   curvas([{ nombre:'L', trazo:'punteado', puntos:[[0,30],…] }, …], {…})
 * El trazo distingue las series sin depender del color, que en un cuadernillo
 * impreso en blanco y negro no existe —y en pantalla tampoco ayuda a quien no
 * distingue tonos—. `xMarcas` permite rotular el eje horizontal con los
 * mismos valores que trae la fuente en vez de con una escala redonda. */
function curvas(series, o = {}) {
  const W = 480, H = o.alto || 300;
  const ml = o.ejeY ? 56 : 38, mr = 18, mt = 16, mb = o.ejeX ? 46 : 30;
  const xs = series.flatMap(s => s.puntos.map(p => p[0]));
  const ys = series.flatMap(s => s.puntos.map(p => p[1]));
  const xTope = o.xTope ?? Math.max(...xs);
  const xBase = o.xBase ?? 0;
  const { tope, paso } = o.tope ? { tope: o.tope, paso: o.paso || o.tope / 5 }
                                : escala(Math.max(...ys));
  const x0 = ml, x1 = W - mr, y0 = mt, y1 = H - mb;
  const px = x => x0 + ((x - xBase) / (xTope - xBase)) * (x1 - x0);
  const py = y => y1 - (y / tope) * (y1 - y0);
  const r = n => Math.round(n * 10) / 10;
  let s = marco({ W, H, ml, mr, mt, mb, tope, paso, ejeY: o.ejeY, ejeX: o.ejeX });
  const marcas = o.xMarcas || (() => {
    const m = [], paso = o.xPaso || 1;
    for (let v = xBase; v <= xTope + 1e-9; v += paso) m.push(v);
    return m;
  })();
  s += `<g font-size="12" fill="var(--color-ink-soft)" text-anchor="middle">`
     + marcas.map(v => `<text x="${r(px(v))}" y="${y1 + 17}">${fmt(v)}</text>`).join('')
     + `</g>`;
  const DASH = { punteado: '2 4', rayado: '9 5', continuo: '' };
  for (const se of series) {
    const d = DASH[se.trazo] ?? '';
    s += `<polyline fill="none" stroke="var(--color-accent)" stroke-width="2.2" `
       + `stroke-linecap="round" stroke-linejoin="round"${d ? ` stroke-dasharray="${d}"` : ''} `
       + `points="${se.puntos.map(p => `${r(px(p[0]))},${r(py(p[1]))}`).join(' ')}"/>`;
    if (se.nombre) {
      const [lx, ly] = se.rotulo || se.puntos[Math.floor(se.puntos.length / 2)];
      s += `<text x="${r(px(lx))}" y="${r(py(ly))}" font-size="13" font-weight="700" `
         + `fill="var(--color-ink)" text-anchor="middle">${esc(se.nombre)}</text>`;
    }
  }
  return envoltura(W, H, o.alt, s);
}

/* Ejes esquemáticos: sin escala, sin rejilla, sin números. Muchas opciones de
 * los cuadernillos son exactamente esto —«¿cuál de estas gráficas…?» con dos
 * ejes rotulados con una letra y una curva encima—, y ahí redibujar no inventa
 * nada porque no hay ningún valor que leer. Los puntos van en fracciones de 0
 * a 1 sobre el área de dibujo, con el origen abajo a la izquierda.
 *
 *   esquema([[0,0],[1,1]], { x:'V', y:'P', alt:'…' })
 */
function esquema(puntos, o = {}) {
  const W = 300, H = o.alto || 220;
  const ml = 34, mr = 26, mt = 22, mb = 34;
  const x0 = ml, x1 = W - mr, y0 = mt, y1 = H - mb;
  const px = f => x0 + f * (x1 - x0);
  const py = f => y1 - f * (y1 - y0);
  const r = n => Math.round(n * 10) / 10;
  const flecha = `<marker id="pf" markerWidth="7" markerHeight="7" refX="6" refY="3" `
               + `orient="auto"><path d="M0 0 L7 3 L0 6 z" fill="var(--color-ink-soft)"/></marker>`;
  let s = `<defs>${flecha}</defs>`
        + `<path d="M${x0} ${y0 - 6}V${y1}H${x1 + 6}" fill="none" `
        + `stroke="var(--color-ink-soft)" stroke-width="1.6" marker-end="url(#pf)"/>`
        + `<path d="M${x0} ${y1}V${y0 - 6}" fill="none" stroke="var(--color-ink-soft)" `
        + `stroke-width="1.6" marker-end="url(#pf)"/>`;
  s += `<g font-size="14" font-style="italic" fill="var(--color-ink)">`
     + (o.y ? `<text x="${x0 - 10}" y="${y0 - 4}" text-anchor="end">${esc(o.y)}</text>` : '')
     + (o.x ? `<text x="${x1 + 10}" y="${y1 + 5}">${esc(o.x)}</text>` : '')
     + `</g>`;
  s += `<polyline fill="none" stroke="var(--color-accent)" stroke-width="2.4" `
     + `stroke-linecap="round" stroke-linejoin="round" points="`
     + puntos.map(p => `${r(px(p[0]))},${r(py(p[1]))}`).join(' ') + `"/>`;
  return envoltura(W, H, o.alt, s);
}
