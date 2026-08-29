/* Panel del instituto · rol administrativo.
 *
 * Lo que puede hacer y por qué:
 *   · LEER estudiantes y sus estadísticas — RLS le da al admin lectura sobre
 *     `perfiles` y sobre la vista `v_resumen_estudiante`.
 *   · CREAR y ARCHIVAR — pasa por la Edge Function `estudiantes`, porque dar de
 *     alta un usuario de Auth exige `service_role`, que no puede tocar el
 *     navegador. La función vuelve a verificar el rol del lado del servidor: no
 *     se confía en que esta pantalla solo se la muestre a un admin.
 *
 * Nada se borra. Archivar deja al estudiante fuera de la app conservando su
 * historial; anonimizar es la depuración de fin de ciclo (Ley 1581).
 */
'use strict';

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: true, autoRefreshToken: true },
});

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

let ESTUDIANTES = [];
let filtroEstado = 'activos';

function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove('show'), 3200);
}

function mensajeError(e) {
  const m = (e && (e.message || e.msg || e.error)) || '';
  if (/invalid login credentials/i.test(m)) return 'Correo o contraseña incorrectos';
  if (/failed to fetch|network/i.test(m)) return 'Sin conexión con el servidor';
  return m || 'No se pudo completar la operación';
}

const fmtFecha = iso => {
  if (!iso) return '—';
  const d = new Date(iso);
  const dias = Math.floor((Date.now() - d.getTime()) / 86400000);
  if (dias === 0) return 'Hoy';
  if (dias === 1) return 'Ayer';
  if (dias < 30) return `Hace ${dias} días`;
  return d.toLocaleDateString('es-CO', { day: 'numeric', month: 'short', year: 'numeric' });
};
const fmtTiempo = ms => {
  const min = Math.round((ms || 0) / 60000);
  if (min < 60) return min + ' min';
  return Math.floor(min / 60) + ' h ' + (min % 60) + ' min';
};

/* ───────────────── acceso ─────────────────
 * El panel no pide credenciales: la entrada única es index.html. Aquí solo se
 * comprueba la sesión y el rol, y se redirige a quien no corresponda. La
 * comprobación es de conveniencia, no de seguridad: quien fuerce la URL sin ser
 * admin no ve nada igual, porque RLS no le devuelve filas y la Edge Function
 * le responde 403.
 */

async function arrancar() {
  try {
    const { data: { session } } = await sb.auth.getSession();
    if (!session) return aLogin('Necesitas iniciar sesión', 'Entra con tus credenciales de coordinación.');
    await entrar();
  } catch (e) {
    aLogin('No pudimos abrir el panel', mensajeError(e));
  }
}

// Manda a la entrada única. Se espera un momento para que se alcance a leer.
function aLogin(titulo, msg) {
  $('#gate-titulo').textContent = titulo;
  $('#gate-msg').textContent = msg;
  $('#gate-ir').hidden = false;
  setTimeout(() => { location.replace('index.html'); }, 2200);
}

// El rol se lee de la base. Un estudiante que abra esta URL vuelve a la app.
async function entrar() {
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return aLogin('Necesitas iniciar sesión', 'Entra con tus credenciales de coordinación.');

  const { data: perfil, error } = await sb.from('perfiles')
    .select('nombre, rol, activo').eq('id', user.id).single();
  if (error) throw error;

  if (perfil.rol !== 'admin' || !perfil.activo) {
    return aLogin('Este panel es de la coordinación',
      'Tu cuenta es de estudiante: te llevamos a tu app.');
  }

  $('#gate').hidden = true;
  $('#quien').textContent = perfil.nombre;
  await cargar();
}

$('#btn-salir').addEventListener('click', async () => {
  await sb.auth.signOut();
  location.replace('index.html');
});

/* ───────────────── datos ───────────────── */

async function cargar() {
  const [resumen, perfiles] = await Promise.all([
    sb.from('v_resumen_estudiante')
      .select('perfil_id, nombre, codigo, jornada, cohorte, activo, total, aciertos, precision, ms_total, ultima_actividad'),
    sb.from('perfiles').select('id, rol, anonimizado_en'),
  ]);
  if (resumen.error) throw resumen.error;
  if (perfiles.error) throw perfiles.error;

  const rol = Object.fromEntries((perfiles.data || []).map(p => [p.id, p]));
  ESTUDIANTES = (resumen.data || [])
    .filter(e => rol[e.perfil_id]?.rol === 'estudiante')
    .map(e => ({ ...e, anonimizado: !!rol[e.perfil_id]?.anonimizado_en }))
    .sort((a, b) => (a.nombre || '').localeCompare(b.nombre || '', 'es'));

  pintarKpis();
  pintarTabla();
}

function pintarKpis() {
  const activos = ESTUDIANTES.filter(e => e.activo);
  const respondidas = ESTUDIANTES.reduce((n, e) => n + (e.total || 0), 0);
  const aciertos = ESTUDIANTES.reduce((n, e) => n + (e.aciertos || 0), 0);
  const prec = respondidas ? Math.round(aciertos / respondidas * 100) + ' %' : '—';
  const practicaron = activos.filter(e => (e.total || 0) > 0).length;

  $('#kpis').innerHTML = `
    <div class="kpi"><b>${activos.length}</b><span>Estudiantes activos</span></div>
    <div class="kpi"><b>${practicaron}</b><span>Ya practicaron</span></div>
    <div class="kpi"><b>${respondidas}</b><span>Preguntas respondidas</span></div>
    <div class="kpi"><b>${prec}</b><span>Precisión del grupo</span></div>`;
}

function pintarTabla() {
  const q = $('#buscar').value.trim().toLowerCase();
  let lista = ESTUDIANTES.filter(e =>
    filtroEstado === 'todos' ? true : filtroEstado === 'activos' ? e.activo : !e.activo);
  if (q) lista = lista.filter(e =>
    (e.nombre || '').toLowerCase().includes(q) || (e.codigo || '').toLowerCase().includes(q));

  if (!lista.length) {
    $('#tabla').innerHTML = `
      <div class="empty">
        <b>Sin estudiantes que mostrar</b>
        ${ESTUDIANTES.length ? 'Prueba con otro filtro o búsqueda.' : 'Crea el primero desde «Crear estudiante».'}
      </div>`;
    return;
  }

  let html = `
    <div class="trow thead">
      <div>Estudiante</div><div>Jornada</div><div>Cohorte</div>
      <div class="tnum">Respondidas</div><div class="tnum">Precisión</div>
      <div>Última práctica</div><div></div>
    </div>`;

  lista.forEach(e => {
    const prec = e.total ? Math.round(e.aciertos / e.total * 100) + ' %' : '—';
    html += `
      <div class="trow ${e.activo ? '' : 'is-off'}">
        <div class="tname">
          <b>${esc(e.nombre)}</b>
          <span>${esc(e.codigo || 'sin código')}${e.activo ? '' : ' · archivado'}</span>
        </div>
        <div>${e.jornada ? esc(e.jornada[0].toUpperCase() + e.jornada.slice(1)) : '—'}</div>
        <div>${esc(e.cohorte || '—')}</div>
        <div class="tnum">${e.total || 0}</div>
        <div class="tnum">${e.total >= 5 ? prec : '<span class="badge badge-off">pocos datos</span>'}</div>
        <div>${fmtFecha(e.ultima_actividad)}<br><span class="badge ${e.total ? 'badge-ok' : 'badge-off'}">${fmtTiempo(e.ms_total)}</span></div>
        <div class="tacts">
          ${e.activo
            ? `<button class="btn-quiet danger" data-accion="archivar" data-id="${esc(e.perfil_id)}" data-nombre="${esc(e.nombre)}">Archivar</button>`
            : `<button class="btn-quiet" data-accion="reactivar" data-id="${esc(e.perfil_id)}" data-nombre="${esc(e.nombre)}">Reactivar</button>`}
        </div>
      </div>`;
  });

  $('#tabla').innerHTML = html;
  $$('#tabla [data-accion]').forEach(b => b.addEventListener('click', () => accionEstudiante(b)));
}

/* ───────────────── acciones ───────────────── */

// Toda escritura pasa por la Edge Function, que revalida el rol en el servidor.
async function llamar(cuerpo) {
  const { data, error } = await sb.functions.invoke('estudiantes', { body: cuerpo });
  if (error) {
    // El cuerpo del error trae el mensaje en español que escribimos nosotros.
    let msg = error.message;
    try { msg = (await error.context.json()).error || msg; } catch { /* sin cuerpo */ }
    throw new Error(msg);
  }
  if (data && data.error) throw new Error(data.error);
  return data;
}

async function accionEstudiante(btn) {
  const { accion, id, nombre } = btn.dataset;
  const verbo = accion === 'archivar' ? 'Archivar' : 'Reactivar';
  const aviso = accion === 'archivar'
    ? `¿Archivar a ${nombre}?\n\nDeja de poder entrar a la app. No se borra nada: su historial y sus estadísticas se conservan, y puedes reactivarlo cuando quieras.`
    : `¿Reactivar a ${nombre}?\n\nVuelve a poder entrar con su código y contraseña de siempre.`;
  if (!confirm(aviso)) return;

  btn.disabled = true; btn.textContent = '…';
  try {
    await llamar({ accion, id });
    toast(`${nombre} · ${accion === 'archivar' ? 'archivado' : 'reactivado'}`);
    await cargar();
  } catch (e) {
    toast(mensajeError(e));
    btn.disabled = false; btn.textContent = verbo;
  }
}

/* ── alta individual ── */
$('#form-alta').addEventListener('submit', async e => {
  e.preventDefault();
  const btn = $('#btn-crear');
  btn.disabled = true; btn.textContent = 'Creando…';
  try {
    const r = await llamar({
      accion: 'crear',
      nombre:  $('#a-nombre').value.trim(),
      codigo:  $('#a-codigo').value.trim(),
      jornada: $('#a-jornada').value,
      cohorte: $('#a-cohorte').value.trim(),
    });
    $('#cred').innerHTML = `
      <div class="cred">
        <b>${esc(r.nombre)} quedó creado</b>
        <div class="cred-row">Código <code>${esc(r.codigo)}</code> · Contraseña <code>${esc(r.password_temporal)}</code></div>
        <p>Anótala ahora: no se vuelve a mostrar. El estudiante puede cambiarla después desde su perfil.</p>
      </div>`;
    $('#form-alta').reset();
    $('#a-nombre').focus();
    await cargar();
  } catch (e) {
    toast(mensajeError(e));
  } finally {
    btn.disabled = false; btn.textContent = 'Crear estudiante';
  }
});

$('#btn-limpiar').addEventListener('click', () => {
  $('#form-alta').reset();
  $('#cred').innerHTML = '';
});

/* ── alta por CSV ── */
// El navegador parsea el archivo y llama a la función fila por fila. No se usa
// IA para filtrarlo: son tres columnas, y son datos de menores.
function filasCsv(texto) {
  return texto.split(/\r?\n/)
    .map(l => l.trim())
    .filter(l => l && !/^nombre\s*[,;]/i.test(l))          // descarta el encabezado
    .map(l => l.split(/[,;]/).map(c => c.trim().replace(/^"|"$/g, '')))
    .map(([nombre, codigo, jornada, cohorte]) => ({ nombre, codigo, jornada, cohorte }));
}

$('#btn-archivo').addEventListener('click', () => $('#csv-file').click());
$('#csv-file').addEventListener('change', async e => {
  const f = e.target.files[0];
  if (!f) return;
  $('#csv').value = await f.text();
  $('#csv-hint').textContent = `Archivo cargado: ${f.name}. Revisa el contenido antes de crear.`;
});

$('#btn-lote').addEventListener('click', async () => {
  const filas = filasCsv($('#csv').value);
  if (!filas.length) { toast('No hay filas que cargar'); return; }
  if (!confirm(`Se van a crear ${filas.length} estudiantes. ¿Continuar?`)) return;

  const btn = $('#btn-lote');
  btn.disabled = true;
  const cont = $('#lote');
  cont.innerHTML = '<div class="lote-list"></div>';
  const lista = cont.firstElementChild;

  let ok = 0, mal = 0;
  for (const [i, fila] of filas.entries()) {
    btn.textContent = `Creando ${i + 1} de ${filas.length}…`;
    const row = document.createElement('div');
    row.className = 'lote-row';
    row.innerHTML = `<code>${esc(fila.codigo || '—')}</code><span class="msg">${esc(fila.nombre || 'sin nombre')}</span><span>…</span>`;
    lista.appendChild(row);
    try {
      const r = await llamar({ accion: 'crear', ...fila });
      ok++;
      row.className = 'lote-row ok';
      row.innerHTML = `<code>${esc(r.codigo)}</code><span class="msg">${esc(r.nombre)}</span><code>${esc(r.password_temporal)}</code>`;
    } catch (e) {
      mal++;
      row.className = 'lote-row err';
      row.innerHTML = `<code>${esc(fila.codigo || '—')}</code><span class="msg">${esc(mensajeError(e))}</span><span>✕</span>`;
    }
  }

  btn.disabled = false; btn.textContent = 'Cargar el lote';
  toast(`${ok} creados · ${mal} con problema`);
  if (ok) await cargar();
});

/* ───────────────── navegación y filtros ───────────────── */
$$('[data-vista]').forEach(b => b.addEventListener('click', () => {
  const v = b.dataset.vista;
  $$('.main').forEach(m => m.classList.toggle('active', m.id === 'vista-' + v));
  $$('.side-item[data-vista]').forEach(s => s.classList.toggle('active', s.dataset.vista === v));
  window.scrollTo({ top: 0 });
}));

$('#buscar').addEventListener('input', pintarTabla);
$('#filtro-estado').addEventListener('click', e => {
  const orden = ['activos', 'archivados', 'todos'];
  filtroEstado = orden[(orden.indexOf(filtroEstado) + 1) % orden.length];
  e.target.textContent = 'Mostrando: ' + filtroEstado;
  pintarTabla();
});

arrancar();
