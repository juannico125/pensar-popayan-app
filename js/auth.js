/* Shared Supabase session and authorization boundary. Roles come from RLS-protected profiles. */
'use strict';
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: true, autoRefreshToken: true },
});
const Auth = {
  async profile() {
    const { data: { user }, error: authError } = await sb.auth.getUser();
    if (authError) throw authError;
    if (!user) throw new Error('Sesión no iniciada');
    const { data, error } = await sb.from('perfiles')
      .select('id, rol, nombre, codigo, jornada, cohorte, activo')
      .eq('id', user.id).single();
    if (error) throw error;
    if (!data.activo) throw new Error('Tu cuenta está archivada. Habla con la coordinación.');
    if (!['admin', 'estudiante'].includes(data.rol)) throw new Error('Tu cuenta no tiene acceso.');
    return data;
  },
  watch(profile, invalidate) {
    let stopped = false;
    const check = async () => {
      try {
        const current = await Auth.profile();
        if (current.id !== profile.id || current.rol !== profile.rol) invalidate();
      } catch { invalidate(); }
    };
    // Never call Supabase APIs inside the synchronous auth callback.
    const { data: { subscription } } = sb.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT' || (session && session.user.id !== profile.id)) invalidate();
      else if (event === 'TOKEN_REFRESHED' || event === 'USER_UPDATED') {
        setTimeout(() => { if (!stopped) void check(); }, 0);
      }
    });
    const visible = () => { if (document.visibilityState === 'visible') void check(); };
    document.addEventListener('visibilitychange', visible);
    const timer = setInterval(() => { if (document.visibilityState === 'visible') void check(); }, 60000);
    return () => {
      stopped = true;
      subscription.unsubscribe();
      clearInterval(timer);
      document.removeEventListener('visibilitychange', visible);
    };
  },
};
