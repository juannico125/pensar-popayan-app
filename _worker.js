/* Cloudflare Pages no aplica .assetsignore. Solo estas rutas pertenecen
 * a la aplicación pública; contenido, claves y herramientas quedan fuera.
 * El Worker estático principal mantiene su exclusión con .assetsignore.
 */
export default {
  async fetch(peticion, entorno) {
    let ruta;
    try { ruta = decodeURIComponent(new URL(peticion.url).pathname); }
    catch { return new Response('No encontrado', { status: 404 }); }
    const segmentos = ruta.split('/');
    const rutaLimpia = !/[\\%]/.test(ruta) && !segmentos.some(s => s === '..' || s.startsWith('.'));
    const entrada = ['/', '/index', '/index.html', '/panel', '/panel.html'].includes(ruta);
    const recurso = /^\/(css|js|img)\/[^?#]+$/.test(ruta);
    if (!rutaLimpia || (!entrada && !recurso)) {
      return new Response('No encontrado', { status: 404, headers: { 'Cache-Control': 'no-store' } });
    }
    return entorno.ASSETS.fetch(peticion);
  },
};
