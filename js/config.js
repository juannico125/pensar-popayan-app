/* Conexión a Supabase.
 *
 * La llave publicable es pública a propósito: está diseñada para viajar en el
 * navegador. Lo que protege los datos no es esconderla, sino RLS en Postgres:
 * cada fila se filtra por el usuario autenticado, y la clave de las preguntas
 * vive en una tabla que nadie puede leer. Ver supabase/migrations/…_rls.sql.
 *
 * La llave `service_role` NUNCA va aquí ni en ningún archivo del repositorio.
 */
const SUPABASE_URL = 'https://unttlrqhfpttueezvrtp.supabase.co';
const SUPABASE_KEY = 'sb_publishable_IvsT8DPoDLFvom0QkWGujg_ewDYOga5';
