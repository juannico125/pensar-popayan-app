# Pensar Preuniversitario · Demo unificado

Demo de la plataforma de preparación Saber 11 para **Pensar Preuniversitario** (Popayán), en un solo repo:

- **App del estudiante** (`index.html`) — práctica por rutas de cuestionarios, retroalimentación inmediata, registro de errores, repaso inteligente (repetición espaciada), estadísticas y logros.
- **Panel del instituto** (`panel.html`) — resultados del grupo, banco de preguntas por profesor (torre de selección), cuestionarios, estudiantes y simulacros.

## Ver el demo

**App del estudiante:** https://juannico125.github.io/pensar-popayan-app/
**Panel del instituto:** https://juannico125.github.io/pensar-popayan-app/panel.html

El ingreso usa Supabase Auth con correo y contraseña. Las cuentas se crean desde coordinación; cada usuario necesita un registro en `public.perfiles` con su mismo UUID de Auth, rol `estudiante` o `admin` y `activo = true`. No hay registro público.

## Qué incluye la app del estudiante

- **Inicio**: saludo, racha de estudio, resumen semanal y las 7 materias (Lectura Crítica y Matemáticas jugables).
- **Ruta por materia**: cuestionarios cortos agrupados por área/competencia, con desbloqueo secuencial — al completar uno se abre el siguiente (estilo plataforma de cursos).
- **Práctica**: preguntas con estructura oficial ICFES (contexto, enunciado, 4 opciones), retroalimentación inmediata con explicación del profesor y tip.
- **Mis errores**: cada fallo se guarda con filtros por fecha y materia; se puede reintentar hasta dominarlo.
- **Repasar**: plan de repetición espaciada simulado (1, 3, 7, 15, 30, 90 días).
- **Progreso**: precisión global y por materia, preguntas por día, tiempo estudiado y racha.
- **Perfil**: nivel por XP y 6 logros desbloqueables.

## Cómo funciona

Frontend estático sin build, con Supabase como backend. Sirve la carpeta por HTTP:

```
python -m http.server 8000
```

La sesión persiste mediante Supabase Auth y el progreso se guarda en Postgres. `js/config.js` contiene la URL y la clave pública del proyecto; nunca debe contener una clave secreta o `service_role`.

## Autenticación y rutas protegidas

`js/auth.js` comparte el cliente y valida usuario, perfil activo y rol con el servidor. `index.html` dirige a estudiantes a su app y administradores a `panel.html`. El router bloquea pantallas privadas antes de completar la carga autenticada; el panel permanece oculto hasta autorizar. Los cierres de sesión y cambios de cuenta en otras pestañas bloquean la vista. El perfil se comprueba al volver a la pestaña, renovar el token y cada minuto mientras está visible; un fallo obliga a validar de nuevo.

Los HTML son públicos por ser un sitio estático: la protección de datos la aplican RLS y las funciones del servidor. No debe incrustarse información privada en estos archivos.

Verificación automatizada: `node scripts/verificar-auth.mjs`. Para comprobar el flujo completo, usar cuentas reales de estudiante y administrador: iniciar sesión, recargar, abrir el panel como estudiante, cerrar sesión en otra pestaña y archivar una cuenta mientras permanece abierta.

## Estructura

| Archivo | Contenido |
|---|---|
| `index.html` | App del estudiante: esqueleto de pantallas y navegación |
| `panel.html` | Panel del instituto (autocontenido: CSS y JS inline) |
| `css/tokens.css` | Design tokens de la app (OKLCH, tipografía, espaciado, movimiento) |
| `css/app.css` | Estilos de componentes y animaciones de la app |
| `js/data.js` | Materias, pasajes, figuras SVG, banco de preguntas y rutas de cuestionarios |
| `js/app.js` | Router, motor de práctica, repaso, estadísticas y logros |
| `docs/formato-preguntas.md` | Formato de los lotes de preguntas (PDFs del cliente → app) |

---

Demo preparado para Pensar Preuniversitario. Las preguntas son originales de muestra en formato ICFES.
