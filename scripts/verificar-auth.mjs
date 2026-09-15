/* Prueba de la frontera de autorización, sin navegador ni red.
 *
 *   node scripts/verificar-auth.mjs
 *
 * `js/auth.js` decide quién entra y quién no, y se ejecuta en el cliente: es
 * el único archivo donde una regresión silenciosa deja a un estudiante dentro
 * del panel de la coordinación. Aquí se carga con un Supabase de mentira y se
 * comprueban los casos que importan: sin sesión, token inválido, cuenta
 * archivada, rol desconocido, sesión cerrada en otra pestaña, cambio de
 * cuenta y la revalidación periódica.
 *
 * Esto NO sustituye probar el ingreso en un navegador con cuentas reales;
 * comprueba la lógica, no el despliegue.
 */
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const source = readFileSync(new URL('../js/auth.js', import.meta.url), 'utf8');
let user = { id: 'student' }, profile = { id: 'student', rol: 'estudiante', activo: true };
let authError = null, callback, visibility, interval, invalidations = 0, unsubscribed = false;
const sb = {
  auth: {
    getUser: async () => ({ data: { user }, error: authError }),
    onAuthStateChange: fn => { callback = fn; return { data: { subscription: { unsubscribe() { unsubscribed = true; } } } }; },
  },
  from: () => ({ select: () => ({ eq: (_, id) => {
    assert.equal(id, user.id);
    return { single: async () => ({ data: profile, error: null }) };
  } }) }),
};
const context = vm.createContext({
  supabase: { createClient: () => sb }, SUPABASE_URL: 'https://example.test', SUPABASE_KEY: 'public',
  document: { visibilityState: 'visible', addEventListener: (_, fn) => { visibility = fn; }, removeEventListener() {} },
  setTimeout, setInterval: fn => { interval = fn; return 1; }, clearInterval() {},
});
vm.runInContext(source + '\nglobalThis.Auth = Auth;', context);
const { Auth } = context;
assert.equal((await Auth.perfil()).rol, 'estudiante');
user = null;
await assert.rejects(Auth.perfil(), /Sesión/);
user = { id: 'student' }; authError = new Error('Invalid token');
await assert.rejects(Auth.perfil(), /Invalid token/);
authError = null; profile.activo = false;
await assert.rejects(Auth.perfil(), /archivada/);
profile.activo = true; profile.rol = 'unknown';
await assert.rejects(Auth.perfil(), /no tiene acceso/);
profile.rol = 'admin';
assert.equal((await Auth.perfil()).rol, 'admin');
const stop = Auth.vigilar({ ...profile }, () => invalidations++);
callback('SIGNED_OUT', null);
assert.equal(invalidations, 1);
callback('SIGNED_IN', { user: { id: 'someone-else' } });
assert.equal(invalidations, 2);
profile.activo = false;
visibility();
await new Promise(resolve => setImmediate(resolve));
assert.equal(invalidations, 3);
profile.activo = true; profile.rol = 'estudiante';
interval();
await new Promise(resolve => setImmediate(resolve));
assert.equal(invalidations, 4);
stop(); assert.equal(unsubscribed, true);
console.log('Auth: sesión válida e inválida, roles, cuenta archivada, cierre en otra pestaña, cambio de cuenta y revalidación. Sin problemas.');
