/* Capa de datos: todo lo que la app le pide a Supabase.
 *
 * Reemplaza al antiguo `js/data.js` de constantes. La FORMA de los datos no
 * cambia —`MATERIAS`, `BANKS`, `CUESTIONARIOS`, `LOTE` siguen siendo lo que
 * `app.js` espera— pero ahora llegan de la base y filtradas por RLS.
 *
 * Dos reglas que no se pueden romper desde aquí, porque las impone Postgres:
 *   1. La clave correcta y la explicación NO se descargan. Se piden una a una
 *      a `responder()`, que califica del lado del servidor.
 *   2. El orden de las opciones lo decide `barajado()` en la base: el mismo
 *      siempre para este estudiante, distinto para su compañero de al lado.
 *      Lo que se registra es el índice CANÓNICO, no el que se mostró.
 */
'use strict';

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: true, autoRefreshToken: true },
});

// Se llenan al entrar. `let` a propósito: son la caché de la sesión, no constantes.
let MATERIAS = [];
let BANKS = {};
let CUESTIONARIOS = {};
let LOTE = { codigo: '—', vigencia: '' };
let QIDS = {};   // QIDS[materia][indice] = uuid de la pregunta
let QPOS = {};   // QPOS[uuid] = { m, qi }

const API = {

  /* ── Sesión ──────────────────────────────────────────────────────────── */

  async entrar(email, password) {
    const { data, error } = await sb.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
  },

  async salir() {
    await sb.auth.signOut();
    MATERIAS = []; BANKS = {}; CUESTIONARIOS = {}; QIDS = {}; QPOS = {};
  },

  async sesionActiva() {
    const { data } = await sb.auth.getSession();
    return data.session || null;
  },

  // El rol se LEE de la base; nunca se deduce del correo.
  // Se filtra por el id del usuario: el rol administrativo ve muchas filas.
  async perfil() {
    const { data: { user } } = await sb.auth.getUser();
    if (!user) throw new Error('Sesión no iniciada');
    const { data, error } = await sb.from('perfiles')
      .select('id, rol, nombre, codigo, jornada, cohorte, activo')
      .eq('id', user.id).single();
    if (error) throw error;
    if (!data.activo) throw new Error('Tu cuenta está archivada. Habla con la coordinación.');
    return data;
  },

  /* ── Catálogo: materias, ruta de cuestionarios y banco visible ────────── */

  async cargarCatalogo() {
    const [materias, lotes, preguntas, cuestionarios] = await Promise.all([
      sb.from('materias').select('key, sigla, nombre, area, docente, npreg, orden')
        .eq('activa', true).order('orden'),
      sb.from('lotes').select('codigo, etiqueta').eq('activo', true).single(),
      sb.from('preguntas')
        .select('id, materia, comp, enunciado, opciones, tip, contexto:contextos(etiqueta, clase, contenido)')
        .order('id'),
      sb.from('cuestionarios')
        .select('id, materia, slug, seccion, titulo, tipo, orden, cuestionario_preguntas(pregunta_id, orden)')
        .order('materia').order('orden'),
    ]);
    for (const r of [materias, lotes, preguntas, cuestionarios]) if (r.error) throw r.error;

    LOTE = { codigo: lotes.data.codigo, vigencia: lotes.data.etiqueta };

    // Banco por materia, indexado por posición (lo que `app.js` llama `qi`).
    BANKS = {}; QIDS = {}; QPOS = {};
    for (const p of preguntas.data) {
      (BANKS[p.materia] ||= []);
      (QIDS[p.materia] ||= []);
      const qi = BANKS[p.materia].length;
      BANKS[p.materia].push({
        comp: p.comp,
        ctxLabel: p.contexto?.etiqueta || '',
        ctxClass: p.contexto?.clase || '',
        context: p.contexto?.contenido || '',
        text: p.enunciado,
        opts: p.opciones,
        tip: p.tip || '',
        // `correct` y `exp` llegan de responder(): nunca se descargan.
        correct: null, exp: '',
      });
      QIDS[p.materia][qi] = p.id;
      QPOS[p.id] = { m: p.materia, qi };
    }

    // Ruta por materia: secciones en el orden en que vienen, sin reordenar.
    CUESTIONARIOS = {};
    for (const c of cuestionarios.data) {
      const secciones = (CUESTIONARIOS[c.materia] ||= []);
      let sec = secciones.find(s => s.tema === c.seccion);
      if (!sec) { sec = { tema: c.seccion, items: [] }; secciones.push(sec); }
      const qs = (c.cuestionario_preguntas || [])
        .slice().sort((a, b) => a.orden - b.orden)
        .map(cp => QPOS[cp.pregunta_id]?.qi)
        .filter(qi => qi !== undefined);
      sec.items.push({ id: c.slug, uuid: c.id, titulo: c.titulo, tipo: c.tipo, qs });
    }

    // Solo es «jugable» la materia que ya tiene ruta cargada.
    MATERIAS = materias.data.map(m => ({
      key: m.key, sigla: m.sigla, nombre: m.nombre, prof: m.docente || '—',
      area: m.area, npreg: m.npreg, jugable: (CUESTIONARIOS[m.key] || []).length > 0,
    }));
  },

  /* ── Estado del estudiante, derivado del log append-only ──────────────── */

  async cargarEstado() {
    const [respuestas, repasos, sesiones, resumen] = await Promise.all([
      sb.from('respuestas').select('pregunta_id, materia, correcta, ms, respondida_en, sesion_id')
        .order('respondida_en'),
      sb.from('repasos').select('pregunta_id, fallos, reintentos, estado, actualizado_en'),
      sb.from('sesiones').select('id, cuestionario_id, finalizada_en').not('finalizada_en', 'is', null),
      sb.from('v_resumen_estudiante').select('perfil_id, xp, ms_total'),
    ]);
    for (const r of [respuestas, repasos, sesiones, resumen]) if (r.error) throw r.error;
    const mio = (resumen.data || [])[0] || {};

    const answered = respuestas.data.map(r => ({
      m: r.materia,
      qi: QPOS[r.pregunta_id]?.qi ?? null,   // null si la pregunta ya salió del lote
      ok: r.correcta,
      ts: new Date(r.respondida_en).getTime(),
      sesion: r.sesion_id,
    }));

    const mistakes = {};
    for (const t of repasos.data) {
      const pos = QPOS[t.pregunta_id];
      if (!pos) continue;                     // error sobre pregunta de otro lote
      mistakes[pos.m + ':' + pos.qi] = {
        m: pos.m, qi: pos.qi, fails: t.fallos, retries: t.reintentos,
        ts: new Date(t.actualizado_en).getTime(),
        status: t.estado === 'dominada' ? 'dom' : 'pend',
      };
    }

    // Cuestionario completado = sesión cerrada sobre él. El puntaje es el de
    // esa corrida, calculado sobre el propio log.
    const porSesion = {};
    for (const a of answered) {
      const s = (porSesion[a.sesion] ||= { total: 0, ok: 0 });
      s.total++; if (a.ok) s.ok++;
    }
    const slugDe = {};
    for (const secciones of Object.values(CUESTIONARIOS))
      for (const sec of secciones) for (const it of sec.items) slugDe[it.uuid] = it.id;

    const cuestionarios = {};
    for (const s of sesiones.data) {
      const slug = slugDe[s.cuestionario_id];
      const marca = porSesion[s.id];
      if (slug && marca) cuestionarios[slug] = { score: marca.ok, total: marca.total };
    }

    return {
      answered, mistakes, cuestionarios,
      xp: mio.xp || 0,
      timeStudied: Math.round((mio.ms_total || 0) / 1000),
      sessions: sesiones.data.length,
    };
  },

  /* ── Práctica ─────────────────────────────────────────────────────────── */

  async iniciarSesion(tipo, cuestionarioUuid) {
    const { data, error } = await sb.rpc('iniciar_sesion', {
      p_tipo: tipo, p_cuestionario: cuestionarioUuid || null,
    });
    if (error) throw error;
    return data;
  },

  // Devuelve los índices canónicos en el orden en que deben mostrarse.
  async barajado(materia, qi) {
    const { data, error } = await sb.rpc('barajado', { p_pregunta: QIDS[materia][qi] });
    if (error || !data) return BANKS[materia][qi].opts.map((_, i) => i);
    return data;
  },

  // Califica en el servidor. La respuesta trae el veredicto y la explicación.
  async responder(sesionId, materia, qi, opcionCanonica, ms) {
    const { data, error } = await sb.rpc('responder', {
      p_sesion: sesionId, p_pregunta: QIDS[materia][qi],
      p_opcion: opcionCanonica, p_ms: Math.round(ms),
    });
    if (error) throw error;
    const r = Array.isArray(data) ? data[0] : data;
    return { ok: r.correcta, correct: r.indice_correcto, exp: r.explicacion, tip: r.tip || '' };
  },

  async finalizarSesion(sesionId) {
    const { data, error } = await sb.rpc('finalizar_sesion', { p_sesion: sesionId });
    if (error) throw error;
    return Array.isArray(data) ? data[0] : data;
  },

  // Repaso inteligente: vencidas por repetición espaciada + preguntas NUEVAS
  // de los temas flojos. La mezcla la decide la base, no el navegador.
  async colaRepaso(limite) {
    const { data, error } = await sb.rpc('cola_repaso', { p_limite: limite });
    if (error) throw error;
    return (data || []).map(id => QPOS[id]).filter(Boolean);
  },

  async racha() {
    const { data, error } = await sb.rpc('racha', { p_perfil: null });
    return error ? 0 : (data || 0);
  },

  /* ── Panel administrativo ─────────────────────────────────────────────── */

  async estudiantes() {
    const { data, error } = await sb.from('v_resumen_estudiante')
      .select('perfil_id, nombre, codigo, jornada, cohorte, activo, total, aciertos, precision, ms_total, ultima_actividad')
      .order('nombre');
    if (error) throw error;
    return data;
  },
};
