/* Alta y archivo de estudiantes · la única pieza de servidor del producto.
 *
 * Por qué existe: dar de alta un usuario en Supabase Auth exige la llave
 * `service_role`, que no puede tocar el navegador. Esta función la usa del lado
 * del servidor y, antes de nada, verifica que quien llama tiene rol
 * administrativo. Ver docs/superpowers/specs/2026-08-28-plataforma-pensar-design.md §4.
 *
 * Acciones:
 *   crear      · crea el usuario de Auth y su perfil de estudiante
 *   archivar   · marca el perfil como inactivo (el estudiante deja de entrar)
 *   reactivar  · lo vuelve a activar
 *   anonimizar · le quita nombre y código, conserva la fila y sus estadísticas
 *
 * Nada se borra: la Ley 1581 y el histórico por cohorte piden archivar, no
 * eliminar. `anonimizar` es la depuración de fin de ciclo.
 *
 * El correo del estudiante puede sintetizarse a partir del código: Auth lo
 * exige internamente, pero nunca se le muestra a nadie.
 */
import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import { createClient } from 'jsr:@supabase/supabase-js@2';

const URL = Deno.env.get('SUPABASE_URL')!;
const SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!;
const DOMINIO = 'estudiantes.pensarpopayan.com';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });

// Contraseña temporal legible: el administrativo se la dicta al estudiante.
function claveTemporal(): string {
  const abc = 'abcdefghijkmnpqrstuvwxyz';   // sin l ni o: se confunden al dictar
  const num = '23456789';                   // sin 0 ni 1, por lo mismo
  const pick = (s: string, n: number) =>
    Array.from(crypto.getRandomValues(new Uint32Array(n)), v => s[v % s.length]).join('');
  return pick(abc, 4) + '-' + pick(num, 4);
}

const limpio = (s: unknown) => typeof s === 'string' ? s.trim() : '';

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') return json({ error: 'Método no permitido' }, 405);

  const auth = req.headers.get('Authorization') ?? '';
  if (!auth.startsWith('Bearer ')) return json({ error: 'Falta la sesión' }, 401);

  // 1 · Quién llama. Se resuelve con la llave publicable y el token del usuario.
  const comoUsuario = createClient(URL, ANON_KEY, {
    global: { headers: { Authorization: auth } },
  });
  const { data: { user }, error: eUser } = await comoUsuario.auth.getUser();
  if (eUser || !user) return json({ error: 'Sesión inválida' }, 401);

  // 2 · El rol se lee de la base, nunca del token ni del correo.
  const admin = createClient(URL, SERVICE_KEY, { auth: { persistSession: false } });
  const { data: perfil } = await admin
    .from('perfiles').select('rol, activo').eq('id', user.id).single();

  if (!perfil || perfil.rol !== 'admin' || !perfil.activo) {
    return json({ error: 'Se requiere rol administrativo' }, 403);
  }

  let cuerpo: Record<string, unknown>;
  try { cuerpo = await req.json(); } catch { return json({ error: 'Cuerpo inválido' }, 400); }
  const accion = limpio(cuerpo.accion);

  /* ── crear ───────────────────────────────────────────────────────────── */
  if (accion === 'crear') {
    const nombre  = limpio(cuerpo.nombre);
    const codigo  = limpio(cuerpo.codigo).toUpperCase();
    const jornada = limpio(cuerpo.jornada) || null;
    const cohorte = limpio(cuerpo.cohorte) || null;

    if (nombre.length < 2)            return json({ error: 'El nombre es obligatorio' }, 400);
    if (!/^[A-Z0-9-]{3,20}$/.test(codigo)) return json({ error: 'Código inválido (3 a 20 letras, números o guiones)' }, 400);
    if (jornada && !['sabatino', 'intensivo'].includes(jornada)) return json({ error: 'Jornada inválida' }, 400);

    // Correo sintetizado a partir del código si no lo dan: Auth lo exige, pero
    // el estudiante entra con su código y nunca ve esta dirección.
    const correo = (limpio(cuerpo.email) || `${codigo.toLowerCase()}@${DOMINIO}`).toLowerCase();
    const clave = limpio(cuerpo.password) || claveTemporal();

    const { data: yaExiste } = await admin
      .from('perfiles').select('id').eq('codigo', codigo).maybeSingle();
    if (yaExiste) return json({ error: `El código ${codigo} ya está en uso` }, 409);

    const { data: creado, error: eCrear } = await admin.auth.admin.createUser({
      email: correo,
      password: clave,
      email_confirm: true,
    });
    if (eCrear || !creado?.user) {
      const msg = eCrear?.message ?? 'No se pudo crear el usuario';
      return json({ error: /already been registered/i.test(msg) ? `El correo ${correo} ya existe` : msg }, 409);
    }

    const { error: ePerfil } = await admin.from('perfiles').insert({
      id: creado.user.id, rol: 'estudiante', nombre, codigo, jornada, cohorte,
    });
    if (ePerfil) {
      // Sin perfil el usuario de Auth queda huérfano y no puede hacer nada:
      // se deshace para no dejar basura.
      await admin.auth.admin.deleteUser(creado.user.id);
      return json({ error: ePerfil.message }, 400);
    }

    return json({ ok: true, id: creado.user.id, nombre, codigo, email: correo, password_temporal: clave });
  }

  /* ── archivar · reactivar · anonimizar ───────────────────────────────── */
  const id = limpio(cuerpo.id);
  if (!id) return json({ error: 'Falta el estudiante' }, 400);

  if (accion === 'archivar' || accion === 'reactivar') {
    const { error } = await admin.from('perfiles')
      .update({ activo: accion === 'reactivar' }).eq('id', id).eq('rol', 'estudiante');
    if (error) return json({ error: error.message }, 400);
    return json({ ok: true, activo: accion === 'reactivar' });
  }

  if (accion === 'anonimizar') {
    // Se conservan la fila, la cohorte y todo el log de respuestas: las
    // estadísticas agregadas de la cohorte siguen siendo comparables.
    const { error } = await admin.from('perfiles').update({
      nombre: 'Estudiante retirado',
      codigo: null,
      activo: false,
      anonimizado_en: new Date().toISOString(),
    }).eq('id', id).eq('rol', 'estudiante');
    if (error) return json({ error: error.message }, 400);
    return json({ ok: true });
  }

  return json({ error: 'Acción desconocida' }, 400);
});
