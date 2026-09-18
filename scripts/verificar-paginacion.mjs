import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const source = readFileSync(new URL('../js/api.js', import.meta.url), 'utf8');
async function cargar(total, cap, falla = -1) {
  const filas = Array.from({length:total}, (_, i) => ({id:String(i).padStart(8,'0')}));
  let llamadas = 0;
  const sb = {from(tabla) {
    assert.equal(tabla, 'preguntas');
    let cursor = null;
    let limite;
    return {
      select(columnas) { assert(!columnas.includes('correcta')); return this; },
      order(columna) { assert.equal(columna, 'id'); return this; },
      limit(n) { limite = n; return this; },
      gt(columna, valor) { assert.equal(columna,'id'); cursor = valor; return this; },
      then(resolve, reject) {
        const numero = llamadas++;
        return Promise.resolve(numero === falla ? {error:new Error('fallo de red')} : {
          data:filas.filter(p => cursor === null || p.id > cursor).slice(0, Math.min(cap,limite)),
          error:null,
        }).then(resolve,reject);
      },
    };
  }};
  const contexto = vm.createContext({sb});
  vm.runInContext(source, contexto);
  const resultado = await vm.runInContext('leerPreguntasCompletas()', contexto);
  assert.deepEqual(Array.from(resultado.data, p => p.id), filas.map(p => p.id));
  return llamadas;
}
assert.equal(await cargar(0,1000),1);
assert.equal(await cargar(1253,1000),4);
assert.equal(await cargar(1253,200),8);
assert.equal(await cargar(1000,1000),3);
await assert.rejects(cargar(1253,500,1), /fallo de red/);
console.log('Paginación verificada: banco >1000, límite reducido, vacío y error intermedio.');
