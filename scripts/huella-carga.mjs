/* Huella del contenido que debería quedar en la base tras aplicar un lote.
 *
 *   node scripts/huella-carga.mjs ../content/sociales-f5-2026b.js
 *   node scripts/huella-carga.mjs ../content/sociales-f5-2026b.js --sql
 *
 * El SQL se aplica a través de la API de Supabase, es decir, copiando texto.
 * Copiar 120 KB de enunciados puede introducir erratas silenciosas: el SQL en
 * git diría una cosa y la fila de la base otra. Este script calcula tres md5
 * (contextos, preguntas, claves) a partir del archivo de contenido, y `--sql`
 * imprime la consulta que calcula esos mismos tres md5 dentro de Postgres. Si
 * los seis valores coinciden, lo cargado es exactamente lo que está en git.
 *
 * La serialización tiene que ser idéntica en los dos lados: campos separados
 * por U+0001, filas por U+0002, y las filas ordenadas por el texto del id en
 * orden de bytes (`collate "C"` en Postgres, comparación de cadenas en JS).
 */

import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import vm from 'node:vm';

const ARCHIVO = process.argv[2];
if (!ARCHIVO) { console.error('falta el archivo'); process.exit(2); }

const U = String.fromCharCode(1);   // separa campos
const R = String.fromCharCode(2);   // separa filas
const md5 = s => createHash('md5').update(s, 'utf8').digest('hex');

const fuente = readFileSync(new URL(ARCHIVO, import.meta.url), 'utf8').replace(/^﻿/, '');
const vmctx = { console };
vm.createContext(vmctx);
const { BANKS } = vm.runInContext(fuente + '\n;({ BANKS, CUESTIONARIOS });', vmctx);

// Mismas derivaciones que scripts/generar-carga-banco.mjs: el separador de
// `uuidDe` es un byte NUL, no la cadena vacía.
function uuidDe(...partes) {
  const h = createHash('sha256').update(partes.join(String.fromCharCode(0))).digest('hex');
  const v = (parseInt(h[16], 16) & 0x3 | 0x8).toString(16);
  return `${h.slice(0,8)}-${h.slice(8,12)}-4${h.slice(13,16)}-${v}${h.slice(17,20)}-${h.slice(20,32)}`;
}
const sinEtiquetas = h => String(h).replace(/<[^>]+>/g, ' ');
const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/g, ' ').trim();

const contextos = [];
const preguntas = [];
const claves = [];
const vistos = new Set();

for (const [materia, banco] of Object.entries(BANKS)) {
  for (const it of banco) {
    if (it.context && !vistos.has(it.context)) {
      vistos.add(it.context);
      contextos.push([uuidDe('contexto', it.context), it.context]);
    }
  }
  for (const it of banco) {
    const id = uuidDe('pregunta', materia, sinEtiquetas(it.context || ''), it.text, it.comp);
    const hash = createHash('sha256')
      .update(norm(sinEtiquetas(it.context || '') + ' ' + it.text)).digest('hex').slice(0, 32);
    preguntas.push([id, [it.text, it.opts.join(U), it.tip || '', hash].join(U)]);
    claves.push([id, [String(it.correct), it.exp].join(U)]);
  }
}

const huella = filas => md5(
  filas.slice()
    .sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0))
    .map(([id, txt]) => id + U + txt)
    .join(R));

const ids = filas => filas.map(f => "'" + f[0] + "'").join(',');

if (process.argv.includes('--sql')) {
  console.log(`select
  (select md5(string_agg(id::text || chr(1) || contenido, chr(2) order by id::text collate "C"))
     from contextos where id in (${ids(contextos)})) as contextos,
  (select md5(string_agg(id::text || chr(1) || enunciado || chr(1) ||
       array_to_string(opciones, chr(1)) || chr(1) || coalesce(tip,'') || chr(1) || hash_norm,
       chr(2) order by id::text collate "C"))
     from preguntas where id in (${ids(preguntas)})) as preguntas,
  (select md5(string_agg(pregunta_id::text || chr(1) || correcta::text || chr(1) || explicacion,
       chr(2) order by pregunta_id::text collate "C"))
     from preguntas_clave where pregunta_id in (${ids(claves)})) as claves;`);
} else {
  console.log(`archivo:   ${ARCHIVO}`);
  console.log(`contextos: ${String(contextos.length).padStart(3)}  ${huella(contextos)}`);
  console.log(`preguntas: ${String(preguntas.length).padStart(3)}  ${huella(preguntas)}`);
  console.log(`claves:    ${String(claves.length).padStart(3)}  ${huella(claves)}`);
}
