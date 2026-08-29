/* Pensar Preuniversitario · app del estudiante
 * SPA sin build ni dependencias, sobre Supabase. El estado del estudiante vive
 * en Postgres; aquí solo se cachea lo de la sesión abierta.
 *
 * Nada de lo que decide una calificación ocurre en este archivo: responder,
 * desbloquear y barajar son funciones de la base (ver js/api.js).
 */
'use strict';

/* ───────────────── estado ───────────────── */

function freshState() {
  return {
    logged: false,
    user: { nombre: '', email: '', rol: 'estudiante' },
    answered: [], mistakes: {}, cuestionarios: {},
    xp: 0, timeStudied: 0, sessions: 0,
  };
}

let S = freshState();
function save() { /* la base es la fuente de verdad; no hay copia local */ }

// Vuelve a leer del servidor el estado derivado del log append-only.
async function refrescarEstado() {
  const est = await API.cargarEstado();
  Object.assign(S, est);
}

/* ───────────────── utilidades ───────────────── */
const $ = sel => document.querySelector(sel);
const MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
const DIAS = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];

function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
function fmtDia(ts) { const d = new Date(ts); return d.getDate() + ' ' + MESES[d.getMonth()]; }
function fmtTiempo(seg) {
  if (seg < 60) return seg + ' s';
  const m = Math.floor(seg / 60);
  return m < 60 ? m + ' min' : Math.floor(m / 60) + ' h ' + (m % 60) + ' min';
}
function hoyKey(ts) { const d = new Date(ts || Date.now()); return d.toDateString(); }

function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove('show'), 2600);
}

/* estadísticas derivadas */
function statsGlobal() {
  const total = S.answered.length;
  const ok = S.answered.filter(a => a.ok).length;
  return { total, ok, prec: total ? Math.round(ok / total * 100) : null };
}
function statsMateria(m) {
  const arr = S.answered.filter(a => a.m === m);
  const ok = arr.filter(a => a.ok).length;
  return { total: arr.length, ok, prec: arr.length ? Math.round(ok / arr.length * 100) : null };
}
function progresoMateria(m) {
  const lista = listaCuestionarios(m);
  if (lista.length) return lista.filter(it => S.cuestionarios[it.id]).length / lista.length;
  if (!BANKS[m]) return 0;
  const vistas = new Set(S.answered.filter(a => a.m === m).map(a => a.qi));
  return vistas.size / BANKS[m].length;
}

/* ruta de cuestionarios: lista plana numerada + estado de cada uno */
function listaCuestionarios(m) {
  const out = [];
  let n = 0;
  (CUESTIONARIOS[m] || []).forEach(sec =>
    sec.items.forEach(it => out.push({ ...it, tema: sec.tema, n: ++n })));
  return out;
}
function buscarCuestionario(m, id) {
  return listaCuestionarios(m).find(it => it.id === id) || null;
}
// desbloqueo secuencial: un cuestionario se abre al completar el anterior
function estadoCuestionario(m, id) {
  const lista = listaCuestionarios(m);
  const idx = lista.findIndex(it => it.id === id);
  if (S.cuestionarios[id]) return 'done';
  if (idx === 0 || S.cuestionarios[lista[idx - 1].id]) return 'next';
  return 'locked';
}
function racha() {
  const dias = new Set(S.answered.map(a => hoyKey(a.ts)));
  let n = 0;
  const d = new Date();
  while (dias.has(d.toDateString())) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
function semanaActual() {
  const inicio = new Date(); inicio.setHours(0, 0, 0, 0);
  inicio.setDate(inicio.getDate() - ((inicio.getDay() + 6) % 7)); // lunes
  return S.answered.filter(a => a.ts >= inicio.getTime());
}
function nombreMateria(m) { const mm = MATERIAS.find(x => x.key === m); return mm ? mm.nombre : m; }

/* ───────────────── router ───────────────── */
const NAV_SCREENS = ['home', 'review', 'mistakes', 'stats', 'profile'];
let current = null;

// agregar 12 nubes flotantes a la pantalla actual
function addClouds() {
  const screen = $('#screen-' + current);
  if (!screen || screen.querySelector('.cloud')) return; // ya tiene nubes
  const cloudsHtml = Array.from({length: 12}, (_, i) =>
    `<div class="cloud c${i+1}" aria-hidden="true"></div>`).join('');
  screen.insertAdjacentHTML('afterbegin', cloudsHtml);
}

const RENDER = {
  splash: renderSplash,
  login: renderLogin,
  home: renderHome,
  materia: renderMateria,
  quiz: renderQuiz,
  results: renderResults,
  mistakes: renderMistakes,
  review: renderReview,
  stats: renderStats,
  profile: renderProfile,
};

function navigate(name, params) {
  closeSheet(true);
  document.querySelectorAll('.screen').forEach(s => { s.classList.remove('active', 'entering'); });
  const el = $('#screen-' + name);
  el.classList.add('active');
  requestAnimationFrame(() => el.classList.add('entering'));
  current = name;
  addClouds();

  const nav = $('#bottom-nav');
  nav.classList.toggle('hidden', !NAV_SCREENS.includes(name));
  nav.querySelectorAll('.nav-item').forEach(b =>
    b.classList.toggle('active', b.dataset.route === name));

  if (RENDER[name]) RENDER[name](params);
  const scroller = el.querySelector('.scroll');
  if (scroller) scroller.scrollTop = 0;
}

document.querySelectorAll('[data-route]').forEach(b =>
  b.addEventListener('click', () => navigate(b.dataset.route)));
document.querySelectorAll('[data-back]').forEach(b =>
  b.addEventListener('click', () => navigate('home')));

// parallax de nubes: suben mientras scrolleas
document.addEventListener('scroll', () => {
  const screen = $('#screen-' + current);
  const scroller = screen?.querySelector('.scroll');
  if (!scroller) return;
  const scrollY = scroller.scrollTop;
  const clouds = screen.querySelectorAll('.cloud');
  clouds.forEach(cloud => {
    cloud.style.transform = `translateY(-${scrollY * 0.4}px)`;
  });
}, { passive: true });

/* ───────────────── splash ───────────────── */
function renderSplash() {
  requestAnimationFrame(() => { $('#splash-bar').style.setProperty('--p', 1); });
  arranque();
}

// Si ya hay sesión válida, entra directo; si no, a la pantalla de ingreso.
async function arranque() {
  const espera = new Promise(r => setTimeout(r, 1500));
  try {
    const sesion = await API.sesionActiva();
    if (!sesion) { await espera; navigate('login'); return; }
    await entrarConSesion();
    await espera;
    navigate('home');
  } catch (e) {
    await API.salir().catch(() => {});
    await espera;
    navigate('login');
  }
}

// Carga perfil, catálogo y progreso. El rol se lee de la base, no del correo.
async function entrarConSesion() {
  const perfil = await API.perfil();
  await API.cargarCatalogo();
  await refrescarEstado();
  S.logged = true;
  S.user = { nombre: perfil.nombre, email: perfil.codigo || '', rol: perfil.rol };
  return perfil;
}

/* ───────────────── login ───────────────── */
function renderLogin() {
  // re-dispara la entrada orquestada
  document.querySelectorAll('#screen-login .reveal').forEach(el => {
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = '';
  });
}

$('#btn-login').addEventListener('click', async () => {
  const email = $('#login-email').value.trim();
  const pass = $('#login-pass').value;
  const field = $('#pass-wrap').closest('.field');
  if (pass.length < 6) {
    field.classList.add('is-error');
    $('#pass-wrap').classList.add('is-error');
    return;
  }
  field.classList.remove('is-error');
  $('#pass-wrap').classList.remove('is-error');

  const btn = $('#btn-login');
  btn.dataset.state = 'loading';
  btn.textContent = 'Ingresando…';
  try {
    await API.entrar(email, pass);
    const perfil = await entrarConSesion();
    if (perfil.rol === 'admin') { location.href = 'panel.html'; return; }
    navigate('home');
  } catch (e) {
    await API.salir().catch(() => {});
    field.classList.add('is-error');
    $('#pass-wrap').classList.add('is-error');
    toast(mensajeError(e));
  } finally {
    delete btn.dataset.state;
    btn.textContent = 'Ingresar';
  }
});

// Los errores de Postgres traen el texto que escribimos en las funciones;
// los de Auth vienen en inglés y no le sirven a nadie en pantalla.
function mensajeError(e) {
  const m = (e && (e.message || e.msg)) || '';
  if (/invalid login credentials/i.test(m)) return 'Correo o contraseña incorrectos';
  if (/failed to fetch|network/i.test(m)) return 'Sin conexión con el servidor';
  return m || 'No se pudo completar la operación';
}

/* ───────────────── home ───────────────── */
function renderHome() {
  const h = new Date().getHours();
  const saludo = h < 12 ? 'Buenos días' : h < 19 ? 'Buenas tardes' : 'Buenas noches';
  const sem = semanaActual();
  const okSem = sem.filter(a => a.ok).length;
  const precSem = sem.length ? Math.round(okSem / sem.length * 100) + ' %' : '—';
  const meta = 40;
  const r = racha();

  let html = `
    <div class="cloud c1" aria-hidden="true"></div>
    <div class="cloud c2" aria-hidden="true"></div>
    <div class="cloud c3" aria-hidden="true"></div>
    <div class="cloud c4" aria-hidden="true"></div>
    <div class="cloud c5" aria-hidden="true"></div>
    <div class="cloud c6" aria-hidden="true"></div>
    <div class="cloud c7" aria-hidden="true"></div>
    <div class="cloud c8" aria-hidden="true"></div>
    <div class="cloud c9" aria-hidden="true"></div>
    <div class="cloud c10" aria-hidden="true"></div>
    <div class="cloud c11" aria-hidden="true"></div>
    <div class="cloud c12" aria-hidden="true"></div>
    <div class="home-top reveal" style="--i:0">
      <div class="greet-text">
        <div class="greet-hi">${saludo},</div>
        <h1 class="greet-name">${esc(S.user.nombre)}</h1>
      </div>
      <div class="logo-circle">
        <svg viewBox="0 0 64 64" fill="none" stroke="#26221B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M32 6C21.5 6 13.5 14 13.5 24c0 6.6 3.6 10.4 6.9 13.6 1.7 1.6 2.7 2.9 2.7 4.9h17.8c0-2 1-3.3 2.7-4.9 3.3-3.2 6.9-7 6.9-13.6C50.5 14 42.5 6 32 6Z"/>
          <path d="M23.5 44.5h17M25 49h14M27.5 53.5h9"/>
          <circle cx="32" cy="19" r="3.4" fill="#26221B" stroke="none"/>
          <path d="M24.5 33c0-4.6 3.2-7.6 7.5-7.6s7.5 3 7.5 7.6"/>
        </svg>
      </div>
    </div>

    <div class="week-card reveal" style="--i:1">
      <div class="week-head"><b>Tu semana</b><span>${sem.length} / ${meta} preguntas</span></div>
      <div class="bar"><i style="--p:${Math.min(sem.length / meta, 1)}"></i></div>
      <div class="week-stats">
        <div class="week-stat"><b>${sem.length}</b><span>Respondidas</span></div>
        <div class="week-stat"><b>${precSem}</b><span>Precisión</span></div>
        <div class="week-stat"><b>${fmtTiempo(S.timeStudied)}</b><span>Estudiado</span></div>
      </div>
    </div>

    <h2 class="section-title reveal" style="--i:2">Materias</h2>`;

  MATERIAS.forEach((m, idx) => {
    const meta2 = MATERIA_META[m.key];
    const jugable = !!m.jugable;
    const prog = progresoMateria(m.key);
    const sub = jugable
      ? `${listaCuestionarios(m.key).length} cuestionarios · Prof. ${m.prof}`
      : `${m.npreg} preguntas · Prof. ${m.prof}`;
    html += `
      <button class="mat-card reveal ${jugable ? '' : 'is-locked'}" style="--i:${idx + 3};--tint:${meta2.tint}" data-mat="${m.key}">
        <span class="mat-icon">${meta2.icon}</span>
        <span class="mat-body">
          <span class="mat-name">${m.nombre}</span>
          <div class="mat-meta">${sub}</div>
          <div class="bar bar-thin"><i style="--p:${prog}"></i></div>
        </span>
        <svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>`;
  });

  $('#home-scroll').innerHTML = html;
  $('#home-scroll').querySelectorAll('.mat-card').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.mat;
      const m = MATERIAS.find(x => x.key === key);
      if (m.jugable) navigate('materia', key);
      else toast(m.nombre + ' estará disponible en la versión completa');
    });
  });
}

/* ───────────────── intro de materia ───────────────── */
let materiaActual = null;

function renderMateria(key) {
  materiaActual = key;
  const m = MATERIAS.find(x => x.key === key);
  const meta = MATERIA_META[key];
  const lista = listaCuestionarios(key);
  const hechos = lista.filter(it => S.cuestionarios[it.id]).length;
  $('#materia-title').textContent = m.nombre;

  let html = `
    <div class="intro-banner reveal" style="--i:0;--tint:${meta.tint}">${meta.icon.replace('width="22" height="22"', 'width="30" height="30"')}</div>
    <p class="intro-desc reveal" style="--i:1">${meta.desc}</p>
    <div class="chip-row reveal" style="--i:2">
      <span class="chip mono">${hechos} / ${lista.length} cuestionarios</span>
      <span class="chip mono">Nivel ${meta.nivel}</span>
      <span class="chip mono">Prof. ${m.prof}</span>
    </div>`;

  const iconCheck = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
  const iconLock = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>';
  const iconChev = '<svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>';

  let i = 3;
  html += `<div class="ruta reveal" style="--i:${i++};--tint:${meta.tint}">`;
  (CUESTIONARIOS[key] || []).forEach(sec => {
    html += `<div class="ruta-tema"><h3>${sec.tema}</h3></div>`;
    sec.items.forEach(it => {
      const flat = lista.find(x => x.id === it.id);
      const st = estadoCuestionario(key, it.id);
      const res = S.cuestionarios[it.id];
      const mins = it.qs.length * 3;
      const meta2 = res
        ? `<span class="ruta-score mono">${res.score}/${res.total}</span> · ${it.qs.length} preguntas`
        : `${it.qs.length} preguntas · ≈ ${mins} min`;
      html += `
        <button class="ruta-item is-${st}" data-cuest="${it.id}" ${st === 'locked' ? 'aria-disabled="true"' : ''}>
          <span class="ruta-node">${st === 'done' ? iconCheck : flat.n}</span>
          <span class="ruta-card">
            <span class="ruta-head">
              <span class="ruta-title">${it.titulo}</span>
              <span class="ruta-chip">${it.tipo}</span>
            </span>
            <span class="ruta-meta">${meta2}</span>
          </span>
          ${st === 'locked' ? `<span class="ruta-end">${iconLock}</span>` : st === 'done' ? `<span class="ruta-end is-redo"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg></span>` : iconChev}
        </button>`;
    });
  });
  html += `</div>
    <div class="lote-note mono reveal" style="--i:${i++}">Banco lote ${LOTE.codigo} · vigente ${LOTE.vigencia}</div>`;

  $('#materia-body').innerHTML = html;

  $('#materia-body').querySelectorAll('.ruta-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const it = buscarCuestionario(key, btn.dataset.cuest);
      const st = estadoCuestionario(key, it.id);
      if (st === 'locked') { toast('Completa el cuestionario anterior para desbloquearlo'); return; }
      startCuestionario(key, it);
    });
  });

  // CTA: continuar donde va, o repasar si ya terminó la ruta
  const next = lista.find(it => !S.cuestionarios[it.id]);
  const btn = $('#btn-start-quiz');
  btn.textContent = next ? `Continuar: ${next.titulo}` : 'Ruta completa · Repasar de nuevo';
}

function startCuestionario(m, item) {
  startQuiz(m, item.qs.slice(), false, item);
}

$('#btn-start-quiz').addEventListener('click', () => {
  const lista = listaCuestionarios(materiaActual);
  const next = lista.find(it => !S.cuestionarios[it.id]) || lista[0];
  if (next) startCuestionario(materiaActual, next);
});

/* ───────────────── quiz ───────────────── */
const SESSION_SIZE = 5;
let quiz = null; // { m, items, idx, ok, wrong, t0, retry, sesion, cuest }

// Abre la sesión en la base. Si el cuestionario está bloqueado o el perfil
// inactivo, Postgres lo rechaza aquí y el quiz no arranca.
async function startQuiz(m, items, retry, cuestItem) {
  try {
    const sesion = await API.iniciarSesion(retry ? 'repaso' : 'cuestionario',
                                           retry ? null : cuestItem && cuestItem.uuid);
    quiz = {
      m, items: items.slice(), idx: 0, ok: 0, wrong: [],
      t0: Date.now(), tPregunta: Date.now(), retry: !!retry,
      sesion, cuest: retry ? null : (cuestItem ? cuestItem.id : null),
    };
    navigate('quiz');
  } catch (e) {
    toast(mensajeError(e));
  }
}

async function renderQuiz() {
  const qi = quiz.items[quiz.idx];
  const q = BANKS[quiz.m][qi];
  $('#quiz-title').textContent = nombreMateria(quiz.m);
  $('#quiz-counter').textContent = (quiz.idx + 1) + ' / ' + quiz.items.length;
  $('#quiz-bar').style.setProperty('--p', quiz.idx / quiz.items.length);

  // Orden de presentación: estable para este estudiante, distinto para otro.
  quiz.orden = await API.barajado(quiz.m, qi);

  let html = `
    <div class="q-chips reveal" style="--i:0">
      <span class="chip">${q.comp}</span>
      <span class="chip">Intermedio</span>
    </div>`;
  if (q.context) {
    html += `<div class="reveal" style="--i:1">`;
    if (q.ctxLabel) html += `<div class="ctx-label">${q.ctxLabel.split('·')[0].trim()}</div>`;
    html += `<div class="ctx-card">${q.context}</div></div>`;
  }
  html += `<h2 class="q-text reveal" style="--i:2">${q.text}</h2>`;
  quiz.orden.forEach((canon, pos) => {
    html += `
      <button class="opt reveal" style="--i:${pos + 3}" data-i="${canon}">
        <span class="badge">${'ABCD'[pos]}</span>
        <span>${q.opts[canon]}</span>
      </button>`;
  });

  const body = $('#quiz-body');
  body.classList.remove('quiz-locked');
  body.innerHTML = html;
  body.scrollTop = 0;
  quiz.tPregunta = Date.now();
  requestAnimationFrame(() =>
    $('#quiz-bar').style.setProperty('--p', (quiz.idx + 0.15) / quiz.items.length));

  body.querySelectorAll('.opt').forEach(btn =>
    btn.addEventListener('click', () => answer(parseInt(btn.dataset.i, 10))));
}

// Califica el servidor. El navegador no sabe cuál es la correcta hasta que
// la base se la dice, así que abrir la consola no sirve de nada.
async function answer(canon) {
  const body = $('#quiz-body');
  if (body.classList.contains('quiz-locked')) return;
  body.classList.add('quiz-locked');

  const qi = quiz.items[quiz.idx];
  const q = BANKS[quiz.m][qi];

  let r;
  try {
    r = await API.responder(quiz.sesion, quiz.m, qi, canon, Date.now() - quiz.tPregunta);
  } catch (e) {
    body.classList.remove('quiz-locked');
    toast(mensajeError(e));
    return;
  }
  q.correct = r.correct;
  q.exp = r.exp;
  if (r.tip) q.tip = r.tip;

  body.querySelectorAll('.opt').forEach(btn => {
    const bi = parseInt(btn.dataset.i, 10);
    if (bi === r.correct) btn.classList.add('is-correct');
    else if (bi === canon) btn.classList.add('is-wrong');
    else btn.classList.add('is-dim');
    const badge = btn.querySelector('.badge');
    if (bi === r.correct) badge.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
    else if (bi === canon && !r.ok) badge.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
  });

  // Espejo local para que las pantallas derivadas respondan de inmediato;
  // la verdad ya quedó escrita en `respuestas`.
  S.answered.push({ m: quiz.m, qi, ok: r.ok, ts: Date.now(), sesion: quiz.sesion });
  const mk = quiz.m + ':' + qi;
  if (r.ok) {
    quiz.ok++;
    if (S.mistakes[mk] && S.mistakes[mk].status === 'pend' && quiz.retry) {
      S.mistakes[mk].status = 'dom';
      S.mistakes[mk].retries = (S.mistakes[mk].retries || 0) + 1;
    }
  } else {
    quiz.wrong.push(qi);
    if (S.mistakes[mk]) {
      S.mistakes[mk].fails++;
      S.mistakes[mk].ts = Date.now();
      S.mistakes[mk].status = 'pend';
      if (quiz.retry) S.mistakes[mk].retries = (S.mistakes[mk].retries || 0) + 1;
    } else {
      S.mistakes[mk] = { m: quiz.m, qi, fails: 1, retries: 0, ts: Date.now(), status: 'pend' };
    }
  }

  $('#quiz-bar').style.setProperty('--p', (quiz.idx + 1) / quiz.items.length);
  setTimeout(() => openFeedback(q, r.ok), 420);
}

function openFeedback(q, ok) {
  const last = quiz.idx === quiz.items.length - 1;
  const sheet = $('#sheet');
  sheet.className = 'sheet ' + (ok ? 'ok' : 'err');
  sheet.innerHTML = `
    <div class="sheet-head">
      <span class="mark">${ok
        ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>'
        : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>'}</span>
      <div>
        <h2 id="sheet-title">${ok ? '¡Correcto!' : 'Respuesta incorrecta'}</h2>
        ${ok ? '' : '<div class="sub">Revisa la explicación: la correcta quedó marcada arriba.</div>'}
      </div>
    </div>
    <div class="sheet-body">
      <div class="exp-card"><b>${ok ? '¿Por qué es correcta?' : 'Explicación'}</b>${esc(q.exp)}</div>
      <div class="tip-row">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
        ${esc(q.tip)}
      </div>
    </div>
    <button class="btn ${ok ? 'btn-ok' : 'btn-err'}" id="btn-continue">${last ? 'Ver resultados' : 'Continuar'}</button>`;

  $('#sheet-backdrop').classList.add('open');
  requestAnimationFrame(() => sheet.classList.add('open'));
  $('#btn-continue').focus({ preventScroll: true });
  $('#btn-continue').addEventListener('click', nextQuestion);
}

function closeSheet(instant) {
  const sheet = $('#sheet');
  const bd = $('#sheet-backdrop');
  if (!sheet.classList.contains('open')) return;
  bd.classList.remove('open');
  if (instant) { sheet.classList.remove('open'); return; }
  sheet.classList.add('closing');
  sheet.classList.remove('open');
  setTimeout(() => sheet.classList.remove('closing'), 300);
}

function nextQuestion() {
  closeSheet();
  if (quiz.idx < quiz.items.length - 1) {
    quiz.idx++;
    setTimeout(renderQuiz, 180);
  } else {
    cerrarSesionQuiz();
    setTimeout(() => navigate('results'), 180);
  }
}

// Cierra la sesión en la base y vuelve a leer el estado derivado.
async function cerrarSesionQuiz() {
  S.timeStudied += Math.round((Date.now() - quiz.t0) / 1000);
  S.sessions++;
  if (quiz.cuest) S.cuestionarios[quiz.cuest] = { score: quiz.ok, total: quiz.items.length };
  try {
    await API.finalizarSesion(quiz.sesion);
    await refrescarEstado();
  } catch (e) { /* el log ya quedó escrito; la vista se pone al día al recargar */ }
}

$('#btn-quiz-exit').addEventListener('click', () => {
  closeSheet(true);
  navigate(quiz && quiz.retry ? 'mistakes' : 'home');
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && $('#sheet').classList.contains('open')) nextQuestion();
});

/* ───────────────── resultados ───────────────── */
function renderResults() {
  const n = quiz.items.length;
  const pct = Math.round(quiz.ok / n * 100);
  const seg = Math.round((Date.now() - quiz.t0) / 1000);
  const msg = pct === 100 ? '¡Impecable!'
    : pct >= 80 ? '¡Muy buen resultado!'
    : pct >= 60 ? 'Buen trabajo, sigue así'
    : pct >= 40 ? 'Vas por buen camino'
    : 'El repaso hace al maestro';
  const tier = pct >= 80 ? '' : pct >= 50 ? 'mid' : 'low';

  const cuest = quiz.cuest ? buscarCuestionario(quiz.m, quiz.cuest) : null;
  const sub = cuest
    ? `Respondiste ${quiz.ok} de ${n} en «${cuest.titulo}».`
    : `Respondiste ${quiz.ok} de ${n} preguntas correctamente.`;

  const R = 82, C = Math.round(2 * Math.PI * R);
  $('#results-body').innerHTML = `
    <div class="ring-box reveal" style="--i:0">
      <svg width="190" height="190" viewBox="0 0 190 190" aria-hidden="true">
        <circle class="ring-track" cx="95" cy="95" r="${R}" fill="none" stroke-width="11"/>
        <circle class="ring-val ${tier}" id="ring" cx="95" cy="95" r="${R}" fill="none" stroke-width="11"
          stroke-dasharray="${C}" stroke-dashoffset="${C}"/>
      </svg>
      <div class="ring-label"><b id="ring-num">0 %</b><span>precisión</span></div>
    </div>
    <h1 class="results-title reveal" style="--i:1">${msg}</h1>
    <p class="results-sub reveal" style="--i:2">${sub}</p>
    <div class="stat-cards">
      <div class="stat-card c-ok reveal" style="--i:3">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
        <b>${quiz.ok}</b><span>Correctas</span>
      </div>
      <div class="stat-card c-err reveal" style="--i:4">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
        <b>${n - quiz.ok}</b><span>Incorrectas</span>
      </div>
      <div class="stat-card c-gold reveal" style="--i:5">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M5 3 2 6"/><path d="m22 6-3-3"/></svg>
        <b>${fmtTiempo(seg)}</b><span>Tiempo</span>
      </div>
    </div>
    <div class="xp-note reveal" style="--i:6">+${quiz.ok * 10} XP</div>`;

  $('#results-cta').innerHTML = `
    <button class="btn btn-primary" id="btn-again">${cuest ? 'Continuar la ruta' : 'Repetir práctica'}</button>
    <button class="btn btn-ghost" id="btn-see">${quiz.wrong.length ? 'Ver errores' : 'Volver al inicio'}</button>`;
  $('#btn-again').addEventListener('click', () =>
    cuest ? navigate('materia', quiz.m) : startQuiz(quiz.m));
  $('#btn-see').addEventListener('click', () =>
    navigate(quiz.wrong.length ? 'mistakes' : 'home'));

  // anillo + conteo (funcionales; reduced-motion los acorta vía CSS)
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  requestAnimationFrame(() => requestAnimationFrame(() => {
    $('#ring').style.strokeDashoffset = Math.round(C * (1 - pct / 100));
  }));
  const num = $('#ring-num');
  if (reduced) { num.textContent = pct + ' %'; }
  else {
    const t0 = performance.now(), dur = 1100;
    (function tick(t) {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      num.textContent = Math.round(pct * eased) + ' %';
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }
}

/* ───────────────── errores ───────────────── */
let mistakeFilter = 'todos';

function renderMistakes() {
  const all = Object.values(S.mistakes).sort((a, b) => b.ts - a.ts);
  const materiasPresentes = [...new Set(all.map(e => e.m))];

  let chips = `
    <button class="chip filter ${mistakeFilter === 'todos' ? 'active' : ''}" data-f="todos">Todos</button>
    <button class="chip filter ${mistakeFilter === 'hoy' ? 'active' : ''}" data-f="hoy">Hoy</button>
    <button class="chip filter ${mistakeFilter === 'semana' ? 'active' : ''}" data-f="semana">Semana</button>`;
  if (materiasPresentes.length) chips += `<span class="divider"></span>`;
  materiasPresentes.forEach(m => {
    chips += `<button class="chip filter ${mistakeFilter === m ? 'active' : ''}" data-f="${m}">${nombreMateria(m)}</button>`;
  });
  $('#mistake-filters').innerHTML = chips;
  $('#mistake-filters').querySelectorAll('.chip').forEach(c =>
    c.addEventListener('click', () => { mistakeFilter = c.dataset.f; renderMistakes(); }));

  let list = all;
  const dayMs = 86400000;
  if (mistakeFilter === 'hoy') list = all.filter(e => hoyKey(e.ts) === hoyKey());
  else if (mistakeFilter === 'semana') list = all.filter(e => Date.now() - e.ts < 7 * dayMs);
  else if (mistakeFilter !== 'todos') list = all.filter(e => e.m === mistakeFilter);

  if (!list.length) {
    $('#mistake-list').innerHTML = `
      <div class="empty-state reveal">
        <div class="empty-ico">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>
        </div>
        <b>Sin errores por aquí</b>
        <p>Cuando falles una pregunta, aparecerá en esta lista para que puedas dominarla con el repaso inteligente.</p>
      </div>`;
    return;
  }

  let html = '';
  list.forEach((e, i) => {
    const q = BANKS[e.m][e.qi];
    const meta = MATERIA_META[e.m];
    const dom = e.status === 'dom';
    html += `
      <button class="err-card reveal" style="--i:${Math.min(i, 6)};--tint:${meta.tint}" data-k="${e.m}:${e.qi}">
        <div class="err-top">
          <span class="err-mat">${meta.icon.replace('width="22" height="22"', 'width="15" height="15"')} ${nombreMateria(e.m)}</span>
          <span class="pill ${dom ? 'done' : 'pend'}">${dom ? 'Dominada' : 'Pendiente'}</span>
        </div>
        <div class="err-q">${q.text}</div>
        <div class="err-meta">
          <span>${fmtDia(e.ts)} · ${e.fails} ${e.fails === 1 ? 'fallo' : 'fallos'}</span>
          <span class="retry">${dom ? 'Repasar de nuevo ›' : 'Reintentar ›'}</span>
        </div>
      </button>`;
  });
  $('#mistake-list').innerHTML = html;
  $('#mistake-list').querySelectorAll('.err-card').forEach(c =>
    c.addEventListener('click', () => {
      const [m, qi] = c.dataset.k.split(':');
      startQuiz(m, [parseInt(qi, 10)], true, null);
    }));
}

/* ───────────────── repasar ───────────────── */
function renderReview() {
  const all = Object.values(S.mistakes);
  const pend = all.filter(e => e.status === 'pend');
  const aprendiendo = all.filter(e => e.status === 'pend' && e.retries > 0);
  const dom = all.filter(e => e.status === 'dom');
  const alDia = pend.length === 0;

  let html = `
    <h1 class="page-title reveal" style="--i:0">Repasar</h1>
    <div class="review-hero reveal" style="--i:1">
      <span class="r-ico">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
      </span>
      <div>
        <b>${alDia ? 'Estás al día' : 'Tienes ' + pend.length + (pend.length === 1 ? ' pregunta' : ' preguntas') + ' para hoy'}</b>
        <p>${alDia
          ? 'El repaso inteligente te avisará cuando sea el momento óptimo.'
          : 'Dominar tus errores vale doble: cada pregunta superada suma XP extra.'}</p>
      </div>
    </div>

    <h2 class="section-title reveal" style="--i:2">Tu memoria en números</h2>
    <div class="mem-cards">
      <div class="mem-card reveal" style="--i:3"><span class="dot" style="background:var(--color-accent)"></span><b>${pend.length}</b><span>Para hoy</span></div>
      <div class="mem-card reveal" style="--i:4"><span class="dot" style="background:var(--tint-ing)"></span><b>${aprendiendo.length}</b><span>Aprendiendo</span></div>
      <div class="mem-card reveal" style="--i:5"><span class="dot" style="background:var(--color-ok)"></span><b>${dom.length}</b><span>Dominadas</span></div>
    </div>`;

  if (!alDia) {
    html += `<div style="margin-top:var(--space-md)" class="reveal"><button class="btn btn-primary" id="btn-review-now">Repasar ahora</button></div>`;
  }

  html += `
    <div class="info-card reveal" style="--i:6">
      <h3>💡 ¿Cómo funciona?</h3>
      <p style="font-size:var(--text-base);color:var(--color-ink-soft);line-height:1.55">
        Usamos repetición espaciada: cada pregunta fallada vuelve mañana. Si la aciertas,
        el intervalo crece — 1, 3, 7, 15, 30 y 90 días — hasta que la dominas.
        Si vuelves a fallar, el ciclo reinicia.
      </p>
    </div>`;

  $('#review-body').innerHTML = html;
  const btn = $('#btn-review-now');
  if (btn) btn.addEventListener('click', async () => {
    btn.disabled = true;
    try {
      // La cola mezcla lo vencido con preguntas NUEVAS de los temas flojos:
      // devolver seis veces la misma pregunta enseña esa pregunta, no el tema.
      const cola = await API.colaRepaso(SESSION_SIZE);
      if (!cola.length) { toast('No hay nada vencido por hoy'); return; }
      const m = cola[0].m;
      await startQuiz(m, cola.filter(c => c.m === m).map(c => c.qi), true, null);
    } catch (e) {
      toast(mensajeError(e));
    } finally {
      btn.disabled = false;
    }
  });
}

/* ───────────────── progreso ───────────────── */
let chartMode = 'semana';

function renderStats() {
  const g = statsGlobal();
  const r = racha();

  // serie por día (7 días) o por semana (4 semanas)
  const cols = [];
  if (chartMode === 'semana') {
    for (let i = 6; i >= 0; i--) {
      const d = new Date(); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() - i);
      const next = d.getTime() + 86400000;
      const n = S.answered.filter(a => a.ts >= d.getTime() && a.ts < next).length;
      cols.push({ label: DIAS[d.getDay()], n });
    }
  } else {
    for (let i = 3; i >= 0; i--) {
      const end = new Date(); end.setHours(23, 59, 59, 0); end.setDate(end.getDate() - i * 7);
      const start = end.getTime() - 7 * 86400000;
      const n = S.answered.filter(a => a.ts > start && a.ts <= end.getTime()).length;
      cols.push({ label: 'S' + (4 - i), n });
    }
  }
  const max = Math.max(1, ...cols.map(c => c.n));

  // precisión por materia (solo jugables)
  const conDatos = MATERIAS.filter(m => m.jugable && statsMateria(m.key).total > 0)
    .map(m => ({ m, s: statsMateria(m.key) }));
  conDatos.sort((a, b) => b.s.prec - a.s.prec);
  const fuerte = conDatos[0];
  const debil = conDatos[conDatos.length - 1];

  let html = `
    <h1 class="page-title reveal" style="--i:0">Estadísticas</h1>
    <div class="stats-grid">
      <div class="kpi-card reveal" style="--i:1">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
        <b>${g.total}</b><span>Respondidas</span>
      </div>
      <div class="kpi-card reveal" style="--i:2">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
        <b>${g.prec === null ? '—' : g.prec + ' %'}</b><span>Precisión</span>
      </div>
      <div class="kpi-card reveal" style="--i:3">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M5 3 2 6"/><path d="m22 6-3-3"/></svg>
        <b>${fmtTiempo(S.timeStudied)}</b><span>Tiempo estudiado</span>
      </div>
      <div class="kpi-card reveal" style="--i:4">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
        <b>${r} ${r === 1 ? 'día' : 'días'}</b><span>Racha actual</span>
      </div>
    </div>

    <div class="chart-card reveal" style="--i:5">
      <div class="chart-head">
        <b>Preguntas por día</b>
        <div class="seg-group">
          <button class="seg ${chartMode === 'semana' ? 'active' : ''}" data-mode="semana">Semana</button>
          <button class="seg ${chartMode === 'mes' ? 'active' : ''}" data-mode="mes">Mes</button>
        </div>
      </div>
      <div class="chart">`;
  cols.forEach((c, i) => {
    html += `
        <div class="col ${c.n === 0 ? 'zero' : ''}">
          <span class="v">${c.n || ''}</span>
          <span class="stick" style="--i:${i};--p:${c.n / max};height:${Math.max(Math.round(c.n / max * 100), 3)}%"></span>
          <span class="d">${c.label}</span>
        </div>`;
  });
  html += `</div></div>

    <h2 class="section-title reveal" style="--i:6">Precisión por materia</h2>`;

  if (!conDatos.length) {
    html += `
      <div class="info-card reveal" style="--i:7">
        <p style="font-size:var(--text-base);color:var(--color-ink-soft);line-height:1.5">
          Aún no hay datos: responde tus primeras preguntas para ver tu precisión por materia.
        </p>
      </div>`;
  } else {
    html += `
      <div class="twin-cards">
        <div class="twin-card strong reveal" style="--i:7">
          <div class="tag">MÁS FUERTE</div>
          <div class="name" style="color:${MATERIA_META[fuerte.m.key].tint}">${MATERIA_META[fuerte.m.key].icon.replace('width="22" height="22"', 'width="15" height="15"')} ${fuerte.m.nombre}</div>
          <div class="val">${fuerte.s.prec} % de precisión</div>
        </div>
        <div class="twin-card weak reveal" style="--i:8">
          <div class="tag">POR MEJORAR</div>
          <div class="name" style="color:${MATERIA_META[debil.m.key].tint}">${MATERIA_META[debil.m.key].icon.replace('width="22" height="22"', 'width="15" height="15"')} ${debil.m.nombre}</div>
          <div class="val">${debil.s.prec} % de precisión</div>
        </div>
      </div>`;
  }

  html += `<div class="acc-list reveal" style="--i:9">`;
  MATERIAS.forEach(m => {
    const s = statsMateria(m.key);
    const meta = MATERIA_META[m.key];
    html += `
      <div class="acc-row" style="--tint:${meta.tint}">
        <span class="a-ico">${meta.icon.replace('width="22" height="22"', 'width="17" height="17"')}</span>
        <div class="a-body">
          <div class="a-head"><b>${m.nombre}</b><span>${s.prec === null ? 'Sin practicar' : s.prec + ' %'}</span></div>
          <div class="bar bar-thin"><i style="--p:${s.prec === null ? 0 : s.prec / 100}"></i></div>
        </div>
      </div>`;
  });
  html += `</div>`;

  $('#stats-body').innerHTML = html;
  $('#stats-body').querySelectorAll('.seg').forEach(s =>
    s.addEventListener('click', () => { chartMode = s.dataset.mode; renderStats(); }));
}

/* ───────────────── perfil ───────────────── */
const LOGROS = [
  { icon: 'M6 9H4.5a2.5 2.5 0 0 1 0-5H6m12 5h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22m10-7.34V17c0 .55.47.98.97 1.21C19.15 18.75 20 20.24 20 22M8 2h8v7a4 4 0 0 1-8 0V2Z', nombre: 'Primer paso', desc: 'Completa tu primera práctica.', check: () => S.sessions >= 1 },
  { icon: 'M12 2v20M2 12h20', nombre: 'Centena', desc: 'Responde 100 preguntas.', check: () => S.answered.length >= 100 },
  { icon: 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z', nombre: 'Semana perfecta', desc: 'Estudia 7 días seguidos.', check: () => racha() >= 7 },
  { icon: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 16a6 6 0 1 1 6-6 6 6 0 0 1-6 6Zm0-9a3 3 0 1 0 3 3 3 3 0 0 0-3-3Z', nombre: 'Francotirador', desc: 'Alcanza 90 % de precisión con 20+ preguntas.', check: () => S.answered.length >= 20 && statsGlobal().prec >= 90 },
  { icon: 'M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5M9 18h6M10 22h4', nombre: 'Lección aprendida', desc: 'Domina tu primera pregunta repasada.', check: () => Object.values(S.mistakes).some(e => e.status === 'dom') },
  { icon: 'M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z', nombre: 'Explorador', desc: 'Practica Lectura Crítica y Matemáticas.', check: () => ['lc', 'mat'].every(m => statsMateria(m).total > 0) },
];

function renderProfile() {
  const nivel = Math.floor(S.xp / 150) + 1;
  const enNivel = S.xp % 150;

  let html = `
    <div style="display:flex;justify-content:space-between;align-items:center" class="reveal">
      <h1 class="page-title" style="margin-bottom:0">Perfil</h1>
    </div>
    <div class="profile-head reveal" style="--i:1;margin-top:var(--space-md)">
      <div class="avatar">${esc((S.user.nombre || '?')[0])}</div>
      <div>
        <b>${esc(S.user.nombre)}</b>
        <span>${esc(S.user.email || 'Estudiante')}</span>
      </div>
    </div>
    <div class="level-card reveal" style="--i:2">
      <div class="level-head"><b>Nivel ${nivel}</b><span>${S.xp} XP</span></div>
      <div class="bar"><i style="--p:${enNivel / 150}"></i></div>
      <div class="level-note">${150 - enNivel} XP para el nivel ${nivel + 1}</div>
    </div>
    <h2 class="section-title reveal" style="--i:3">Logros</h2>
    <div class="ach-list reveal" style="--i:4">`;

  LOGROS.forEach(l => {
    const ok = l.check();
    html += `
      <div class="ach-row ${ok ? 'unlocked' : ''}">
        <span class="ach-ico">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${l.icon}"/></svg>
        </span>
        <div><b>${l.nombre}</b><p>${l.desc}</p></div>
      </div>`;
  });

  html += `</div>
    <div style="margin-top:var(--space-lg)" class="reveal">
      <button class="btn btn-danger" id="btn-logout">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/></svg>
        Cerrar sesión
      </button>
    </div>`;

  $('#profile-body').innerHTML = html;
  $('#btn-logout').addEventListener('click', async () => {
    await API.salir();
    S = freshState();
    navigate('login');
  });
}

/* ───────────────── arranque ───────────────── */
navigate('splash');
