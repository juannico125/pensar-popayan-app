/* Metadatos de presentación de las materias. Puro UI: iconos, tintes y
 * descripciones. El contenido (preguntas y cuestionarios) viene de Supabase.
 */
const ICONS = {
  book: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>',
  sigma: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 7V4H6l6 8-6 8h12v-3"/></svg>',
  globe: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
  lang: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>',
  leaf: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
  atom: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"/><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"/></svg>',
  flask: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.31"/><path d="M14 9.3V2"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/></svg>',
};

const MATERIA_META = {
  lc:  { tint: 'var(--tint-lc)',  icon: ICONS.book,  nivel: 'Intermedio', desc: 'Comprensión, interpretación y evaluación de textos continuos y discontinuos: identificar ideas, inferir intenciones y valorar argumentos.' },
  mat: { tint: 'var(--tint-mat)', icon: ICONS.sigma, nivel: 'Intermedio', desc: 'Interpretación de datos, formulación y ejecución de problemas y razonamiento geométrico en contextos cotidianos.' },
  soc: { tint: 'var(--tint-soc)', icon: ICONS.globe, nivel: 'Intermedio', desc: 'Pensamiento social, interpretación de perspectivas y competencias ciudadanas.' },
  ing: { tint: 'var(--tint-ing)', icon: ICONS.lang,  nivel: 'B1',         desc: 'Comprensión lectora y uso del idioma según el Marco Común Europeo.' },
  bio: { tint: 'var(--tint-bio)', icon: ICONS.leaf,  nivel: 'Intermedio', desc: 'Seres vivos, ecosistemas y procesos biológicos en contexto.' },
  fis: { tint: 'var(--tint-fis)', icon: ICONS.atom,  nivel: 'Intermedio', desc: 'Mecánica, energía y fenómenos físicos aplicados.' },
  qui: { tint: 'var(--tint-qui)', icon: ICONS.flask, nivel: 'Intermedio', desc: 'Materia, reacciones y estequiometría en situaciones reales.' },
};

