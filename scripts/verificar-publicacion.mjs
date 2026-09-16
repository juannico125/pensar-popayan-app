/* Comprueba que Pages solo sirva los archivos de la aplicación. */
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const modulo = await import('data:text/javascript;base64,' + Buffer.from(readFileSync(new URL('../_worker.js', import.meta.url))).toString('base64'));
const entorno = {ASSETS:{fetch:async()=>new Response('recurso público')}};
const bloqueadas = ['/supabase/seed/banco-demo.sql','/content/mat-deadpool-s1-2026b.js','/scripts/huella-carga.mjs','/docs/avance-matematicas-20260915.md','/.git/config','/.remember/archivo.md','/CLAUDE.md','/README.md','/wrangler.jsonc','/_worker.js','/tmp/matematicas/antes-pulido.json','/%73upabase/seed/prueba.sql','/img/%2e%2e/supabase/seed/prueba.sql','/img/%252e%252e/supabase/prueba.sql'];
for (const ruta of bloqueadas) {
  const peticion = new Request('https://prueba.invalid' + ruta);
  assert.equal((await modulo.default.fetch(peticion,entorno)).status,404,ruta);
}
for(const ruta of ['/','/index.html','/panel','/panel.html','/css/app.css','/js/api.js','/img/figuras/mat/de1-q03-tabla.webp']) {
  assert.equal((await modulo.default.fetch(new Request('https://prueba.invalid'+ruta),entorno)).status,200,ruta);
}
console.log('Publicación: 14 rutas privadas bloqueadas y 7 públicas disponibles.');
