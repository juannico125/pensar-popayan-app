# Pensar Preuniversitario · App del estudiante (demo v2)

Demo de la app móvil del estudiante para **Pensar Preuniversitario** (Popayán): práctica Saber 11 con retroalimentación inmediata, registro de errores, repaso inteligente (repetición espaciada), estadísticas y logros.

Es la evolución del [demo original](https://github.com/juannico125/pensar-popayan-demo): misma marca y mismo banco de preguntas tipo ICFES, con la experiencia de una app real — navegación por pestañas, animaciones y progreso persistente.

## Ver el demo

**https://juannico125.github.io/pensar-popayan-app/**

Credenciales demo: `demo@pensarpopayan.com` · `Pensar2026` (ya vienen pre-llenadas).

## Qué incluye

- **Inicio**: saludo, racha de estudio, resumen semanal y las 7 materias (Lectura Crítica y Matemáticas jugables con 10 preguntas extensas cada una).
- **Práctica**: sesiones de 5 preguntas aleatorias con estructura oficial ICFES (contexto, enunciado, 4 opciones), retroalimentación inmediata con explicación del profesor y tip.
- **Mis errores**: cada fallo se guarda con filtros por fecha y materia; se puede reintentar hasta dominarlo.
- **Repasar**: plan de repetición espaciada simulado (1, 3, 7, 15, 30, 90 días).
- **Progreso**: precisión global y por materia, preguntas por día (semana/mes), tiempo estudiado y racha.
- **Perfil**: nivel por XP y 6 logros desbloqueables.

## Cómo funciona

Archivos estáticos sin build ni backend: abre `index.html` en el navegador o sirve la carpeta:

```
python -m http.server 8000
```

El progreso se guarda en `localStorage` del navegador (borra los datos del sitio para reiniciar el demo).

## Estructura

| Archivo | Contenido |
|---|---|
| `index.html` | Esqueleto de pantallas y navegación |
| `css/tokens.css` | Design tokens (OKLCH, tipografía, espaciado, movimiento) |
| `css/app.css` | Estilos de componentes y animaciones |
| `js/data.js` | Materias, pasajes, figuras SVG y bancos de preguntas |
| `js/app.js` | Router, motor de práctica, repaso, estadísticas y logros |

---

Demo sin valor comercial, preparada para la presentación con Pensar Preuniversitario. Las preguntas son originales de muestra en formato ICFES.
