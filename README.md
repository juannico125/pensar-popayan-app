# Pensar Preuniversitario · Demo unificado

Demo de la plataforma de preparación Saber 11 para **Pensar Preuniversitario** (Popayán), en un solo repo:

- **App del estudiante** (`index.html`) — práctica por rutas de cuestionarios, retroalimentación inmediata, registro de errores, repaso inteligente (repetición espaciada), estadísticas y logros.
- **Panel del instituto** (`panel.html`) — resultados del grupo, banco de preguntas por profesor (torre de selección), cuestionarios, estudiantes y simulacros.

## Ver el demo

**App del estudiante:** https://juannico125.github.io/pensar-popayan-app/
**Panel del instituto:** https://juannico125.github.io/pensar-popayan-app/panel.html

Credenciales demo: `demo@pensarpopayan.com` · `Pensar2026` (ya vienen pre-llenadas). Ambas páginas se enlazan entre sí desde el login y la barra lateral.

## Qué incluye la app del estudiante

- **Inicio**: saludo, racha de estudio, resumen semanal y las 7 materias (Lectura Crítica y Matemáticas jugables).
- **Ruta por materia**: cuestionarios cortos agrupados por área/competencia, con desbloqueo secuencial — al completar uno se abre el siguiente (estilo plataforma de cursos).
- **Práctica**: preguntas con estructura oficial ICFES (contexto, enunciado, 4 opciones), retroalimentación inmediata con explicación del profesor y tip.
- **Mis errores**: cada fallo se guarda con filtros por fecha y materia; se puede reintentar hasta dominarlo.
- **Repasar**: plan de repetición espaciada simulado (1, 3, 7, 15, 30, 90 días).
- **Progreso**: precisión global y por materia, preguntas por día, tiempo estudiado y racha.
- **Perfil**: nivel por XP y 6 logros desbloqueables.

## Cómo funciona

Archivos estáticos sin build ni backend: abre `index.html` o `panel.html` en el navegador, o sirve la carpeta:

```
python -m http.server 8000
```

Todo el estado vive en memoria: recargar la página devuelve el demo a su estado inicial (la app del estudiante arranca con una semana de actividad de muestra).

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
