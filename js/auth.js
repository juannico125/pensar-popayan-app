/* Sesión de Supabase y frontera de autorización, compartidas por las dos apps.
 *
 * `index.html` y `panel.html` cargan este archivo antes que `api.js` y que
 * `panel.js`: el cliente de Supabase vive aquí y no se crea dos veces.
 *
 * El rol SIEMPRE se lee de `perfiles`, que está protegida por RLS. No se
 * deduce del correo ni de qué página se abrió, porque cualquiera puede
 * escribir `panel.html` en la barra de direcciones.
 */
'use strict';

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: true, autoRefreshToken: true },
});

const Auth = {
  // Perfil del usuario de la sesión actual, o excepción si no puede entrar.
  async perfil() {
    const { data: { user }, error: errorSesion } = await sb.auth.getUser();
    if (errorSesion) throw errorSesion;
    if (!user) throw new Error('Sesión no iniciada');
    const { data, error } = await sb.from('perfiles')
      .select('id, rol, nombre, codigo, jornada, cohorte, activo')
      .eq('id', user.id).single();
    if (error) throw error;
    if (!data.activo) throw new Error('Tu cuenta está archivada. Habla con la coordinación.');
    if (!['admin', 'estudiante'].includes(data.rol)) throw new Error('Tu cuenta no tiene acceso.');
    return data;
  },

  // Vigila que la sesión siga siendo la misma persona con el mismo rol, y
  // llama a `invalidar` si deja de serlo: sesión cerrada en otra pestaña,
  // cuenta archivada desde el panel, o rol cambiado mientras la app estaba
  // abierta. Devuelve la función que detiene la vigilancia.
  vigilar(perfil, invalidar) {
    let detenido = false;
    const revisar = async () => {
      try {
        const actual = await Auth.perfil();
        if (actual.id !== perfil.id || actual.rol !== perfil.rol) invalidar();
      } catch { invalidar(); }
    };
    // Nunca se llama a Supabase dentro del callback síncrono de auth: hacerlo
    // puede dejar el cliente esperándose a sí mismo. Se aplaza con setTimeout.
    const { data: { subscription } } = sb.auth.onAuthStateChange((evento, sesion) => {
      if (evento === 'SIGNED_OUT' || (sesion && sesion.user.id !== perfil.id)) invalidar();
      else if (evento === 'TOKEN_REFRESHED' || evento === 'USER_UPDATED') {
        setTimeout(() => { if (!detenido) void revisar(); }, 0);
      }
    });
    // Y se revisa también al volver a la pestaña, y cada minuto mientras esté
    // a la vista: un cambio hecho desde el panel no genera evento aquí.
    const alVolver = () => { if (document.visibilityState === 'visible') void revisar(); };
    document.addEventListener('visibilitychange', alVolver);
    const reloj = setInterval(alVolver, 60000);
    return () => {
      detenido = true;
      subscription.unsubscribe();
      clearInterval(reloj);
      document.removeEventListener('visibilitychange', alVolver);
    };
  },
};
