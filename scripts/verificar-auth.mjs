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
assert.equal((await Auth.profile()).rol, 'estudiante');
user = null;
await assert.rejects(Auth.profile(), /Sesión/);
user = { id: 'student' }; authError = new Error('Invalid token');
await assert.rejects(Auth.profile(), /Invalid token/);
authError = null; profile.activo = false;
await assert.rejects(Auth.profile(), /archivada/);
profile.activo = true; profile.rol = 'unknown';
await assert.rejects(Auth.profile(), /no tiene acceso/);
profile.rol = 'admin';
assert.equal((await Auth.profile()).rol, 'admin');
const stop = Auth.watch({ ...profile }, () => invalidations++);
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
console.log('Auth: valid/invalid sessions, roles, inactive accounts, cross-tab logout, account changes and revalidation passed.');
