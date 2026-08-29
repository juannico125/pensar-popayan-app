/* Plantilla de revisión docente.
 *
 * Los cuadernillos de inglés no traen hoja de respuestas, así que las claves
 * las determinó el modelo. Esto imprime, en un solo archivo, cada aviso con
 * sus opciones y la clave propuesta, para que un docente firme o corrija.
 *
 *   node scripts/generar-plantilla-revision.mjs ../content/ingles-parte1-2026b.js > docs/revision-ingles-parte1.md
 *
 * Lo que el docente devuelva se aplica sobre `preguntas_clave`; si confirma la
 * clave, además se marca `revisada_por` y `revisada_en`.
 */

import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const ARCHIVO = process.argv[2] || '../content/ingles-parte1-2026b.js';
const fuente = readFileSync(new URL(ARCHIVO, import.meta.url), 'utf8').replace(/^﻿/, '');
const ctx = { console };
vm.createContext(ctx);
const { BANKS, CUESTIONARIOS } = vm.runInContext(fuente + '\n;({ BANKS, CUESTIONARIOS });', ctx);

const limpio = h => String(h).replace(/<br\s*\/?>/gi, ' / ').replace(/<[^>]+>/g, '').replace(/&mdash;/g, '—').replace(/\s+/g, ' ').trim();

const out = [];
out.push('# Revisión de claves · Inglés parte 1 · lote 2026-B');
out.push('');
out.push('Los cuadernillos entregados **no traen hoja de respuestas**: solo el «Ejemplo 0»');
out.push('viene marcado. Las claves de abajo las determinó el modelo leyendo cada aviso, y');
out.push('en la base quedan registradas como `clave_origen = modelo`.');
out.push('');
out.push('**Qué hay que hacer:** marcar ✔ si la clave es correcta, o escribir la letra');
out.push('correcta al lado si no lo es. Las marcadas «revisar» son las que tienen una');
out.push('segunda lectura defendible; si el tiempo alcanza para pocas, empiece por esas.');
out.push('');

for (const [materia, banco] of Object.entries(BANKS)) {
  const orden = [];
  for (const sec of (CUESTIONARIOS[materia] || []))
    for (const it of sec.items) orden.push(it);

  let n = 0;
  for (const it of orden) {
    out.push(`## ${it.titulo}  \`${it.id}\``);
    out.push('');
    out.push('| # | Aviso | Opciones | Clave propuesta | ¿Correcta? |');
    out.push('|---|---|---|---|---|');
    for (const qi of it.qs) {
      const q = banco[qi];
      n += 1;
      const opts = q.opts.map((o, i) => `${'ABCDEFGH'[i]}. ${o}`).join('<br>');
      const clave = `**${'ABCDEFGH'[q.correct]}**${q.confianza === 'media' ? ' · revisar' : ''}`;
      out.push(`| ${n} | ${limpio(q.context)} | ${opts} | ${clave} | ☐ |`);
    }
    out.push('');
  }

  const dudosas = banco.filter(q => q.confianza === 'media').length;
  out.push(`**Total: ${banco.length} preguntas · ${dudosas} marcadas para revisar con prioridad.**`);
}

process.stdout.write(out.join('\n') + '\n');
