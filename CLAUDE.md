# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The production build of "Pensar Popayán" (Saber 11 exam prep), built from an
earlier demo that closed the client's proposal (COP 6M, web only). Two apps,
one Supabase backend:

- `index.html` + `css/` + `js/{config,data,api,app}.js` — the **student app**.
- `panel.html` + `css/panel.css` + `js/panel.js` — the **institute admin panel**.
- `supabase/` — schema migrations, RLS policies, RPCs, seed data, and one Edge
  Function, all applied to a live Supabase project.

Both HTML entry points share `js/config.js` (Supabase URL + publishable key)
and load `@supabase/supabase-js` from a pinned CDN URL. No build step, no
`npm`, no bundler — everything is `<script src>` tags, so `file://` still
works for local iteration. The design/security rationale for this shape lives
in `docs/superpowers/specs/2026-08-28-plataforma-pensar-design.md` — read it
before changing architecture, RLS, or the content pipeline.

## Running / previewing

Open `index.html` / `panel.html` directly, or serve statically
(`python -m http.server 8000`). Both require network access: Google Fonts, the
Supabase CDN script, and the live Supabase project (`js/config.js`). There is
no offline/mock mode — every screen depends on a real session.

Login has no demo bypass anymore: an account must exist in `perfiles`
(created via the panel's "crear estudiante", which calls the `estudiantes`
Edge Function). Role is always read from `perfiles.rol`, never inferred from
the email.

## Architecture

### Data flow: nothing is a local constant anymore

`js/data.js` now holds **only static UI metadata** — icons, per-materia tint
tokens, description copy, and the `AREAS` map (the 7 towers → 5 ICFES areas
aggregation). Everything content-shaped (`MATERIAS`, `BANKS`, `CUESTIONARIOS`,
`LOTE`) is populated at runtime by `js/api.js` from Supabase and treated as a
mutable cache (`let`, not `const`) — do not add new hardcoded question data to
`data.js`.

`js/api.js` is the only file that talks to Supabase directly. It exposes a
single `API` object; `app.js` and `panel.js` call through it and never touch
`sb.from(...)` themselves for anything content- or grading-related. When
adding a feature, extend `API` rather than querying Supabase inline in a
render function.

### The two facts that are enforced server-side, not client-side

1. **The answer key never downloads.** `preguntas` holds enunciado/contexto/
   opciones; `correct`/`exp` live in a separate table, `preguntas_clave`, which
   has RLS enabled with **zero policies** — nobody can `select` it directly,
   including admins. Grading happens through the `responder()` Postgres
   function (called via `API.responder`), which returns the verdict and
   explanation only after the answer is submitted, and never on a wrong
   answer (the question stays open for retry — see
   `20260829110000_reintentar_hasta_acertar.sql`).
2. **Option order is per-student but reproducible**, not random-per-render.
   `barajado(p_pregunta)` derives a stable shuffle from student+question; the
   client stores/sends the **canonical** option index, never the displayed
   one. If you touch quiz rendering, preserve this — mapping canonical↔shown
   index is `API.barajado`'s job, not `app.js`'s.

### Derived state, not stored state

`respuestas` is an append-only log (never updated). Streak, accuracy, XP,
time-studied, and per-cuestionario scores are all derived from it —
`API.cargarEstado()` reconstructs the shape `app.js` expects
(`answered`/`mistakes`/`cuestionarios`) from `respuestas` + `repasos` +
`sesiones` + the `v_resumen_estudiante` view. Do not add a second place that
stores an aggregate that could drift from the log; extend the view instead.

### Sequential unlock and spaced repetition are still client-visible concepts, now server-computed

- **Cuestionario route**: `cuestionario_desbloqueado()` (RPC) decides
  lock/unlock server-side; `js/app.js`'s `estadoCuestionario()` reads the
  result rather than computing it from local state.
- **Repaso inteligente**: `cola_repaso()` mixes overdue spaced-repetition
  items (1-3-7-15-30-90 day schedule, tracked in `repasos`) with **new**
  questions from topics (`temas`) the student is weak in — the mix logic
  lives in SQL, not in `app.js`. `temas` is a controlled vocabulary per
  materia; the content pipeline must select from it, never invent new topic
  strings, or repaso silently stops matching.

### The one server-side write path

`supabase/functions/estudiantes/index.ts` is the only Edge Function and the
only code that touches the `service_role` key. It handles `crear` /
`archivar` / `reactivar` / `anonimizar` for student accounts, re-checking the
caller's admin role from `perfiles` itself (never trusting the JWT or which
screen called it). `service_role` must never appear in any other file —
`js/config.js` only ever holds the publishable key. Deleting a student is not
an operation this function supports on purpose: `archivar` deactivates,
`anonimizar` strips PII while keeping the row and its aggregated stats
(cohort comparisons must keep working — see the design spec §9).

### Supabase schema layout

Migrations in `supabase/migrations/` are timestamp-ordered and split by
concern: `catalogo` (materias/temas/lotes/contextos), `contenido`
(preguntas/preguntas_clave/cuestionarios), `actividad`
(sesiones/respuestas/repasos), `rls` (policies + `es_admin()`/
`es_estudiante_activo()` helpers), `funciones` (the RPCs above), plus later
patches (`opciones_hasta_ocho`, `perfiles_permite_servidor`,
`reintentar_hasta_acertar`, `regla_letras_sin_falso_positivo`). Treat this
directory as the source of truth for the schema — never hand-edit the
project via the Supabase dashboard SQL editor for anything that should
survive a rebuild; add a new migration file instead. `supabase/tests/aislamiento.sql`
is the RLS cross-tenant isolation test (student A cannot read student B's
rows) — extend it when adding a policy, don't just trust the policy reads
correctly.

`supabase/seed/` holds real extracted question batches (`banco-demo`,
`ingles-parte1`, `ingles-parte3`, `sociales-2026b`) — these are the actual
content pipeline output, not throwaway fixtures.

## Design system (student app + panel)

- `css/tokens.css` is the single source of truth: OKLCH colors (light cream
  paper, gold accent, per-materia tints), Source Serif 4 (display) + Inter
  (body) + IBM Plex Mono (labels/numbers), 4pt spacing, easing/duration
  tokens. **Never inline raw colors/fonts in `app.css` — add a token first.**
- Motion rules: animate `transform`/`opacity` only (the `ruta-pulse` ring is a
  `::after` scaling+fading, not box-shadow); `--ease-out` for entrances,
  `--ease-in` for exits; one staggered `.reveal` entrance per screen (`--i`
  index); `prefers-reduced-motion` collapses everything.
- Bars/charts animate via `transform: scaleX/scaleY` with `--p` custom
  property, never `width`/`height`.
- `panel.html` has been rebuilt with its own stylesheet (`css/panel.css`) and
  script (`js/panel.js`) — the "unify later" deferral from the demo era is
  done; new panel work should follow `tokens.css`, same as the student app.

## Language & domain

All copy in Spanish with ICFES/Saber 11 terms (competencias, cuestionario,
repaso, banco de preguntas, cohorte). Student-facing tone is direct and
encouraging. Background docs: `docs/guion-presentacion-2026-07-17.md` (the
sales pitch — captures commitments made to the client that constrain this
build, e.g. per-client Supabase isolation, RLS-based access control, no
question deletion on batch rotation) and `docs/formato-preguntas.md`
(batch-loading contract for turning client PDFs into `preguntas` rows).
