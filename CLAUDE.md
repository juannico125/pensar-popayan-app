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

`supabase/seed/` holds real extracted question batches (`banco-demo`, the
`ingles-parte*` files and the `sociales-*` ones) — these are the actual
content pipeline output, not throwaway fixtures.

### How the client names a cuadernillo

The PDFs arrive named `F<n> <materia> .<personaje>.pdf` — for example
`F5 SyC .Aladin.pdf`: **F** for formulario, the number of the scanned physical
form, `SyC` for the subject (Sociales y Ciudadanas), and the character on the
cover. The character is what actually matters: it is how the docente locates a
form in the physical stack at the preuniversitario, so **the character name
goes in the cuestionario title** (`Aladín · Derechos y dignidad`), not only in
a comment.

The full roster, recovered from the PDF filenames in September 2026:

| Formulario | Personaje   | Archivo                      |
| ---------- | ----------- | ---------------------------- |
| F1         | Pato Donald | `F1 SyC .Pato Donal.pdf`     |
| F2         | Bugs Bunny  | `F2 SyC .Bugs bunny.pdf`     |
| F3         | Tintín      | `F3 SyC .Tintin.pdf`         |
| F4         | Mikey Mouse | `F4 SyC .Mikey Mouse.pdf`    |
| F5         | Aladín      | `F5 SyC .Aladin.pdf`         |
| F6         | Deadpool    | `F6 SyC .Deadpool.pdf`       |

Only F5 and F6 carry the character in their cuestionario titles; the other 51
still don't. Adding them is safe — `uuidDe('cuestionario', materia, slug)`
derives the id from the **slug**, not the title, so renaming touches no ids.

### How Matemáticas is organized

The docente (Herman) delivered a classification that gives, per question,
a **tema específico**, a **componente** and a **dificultad**. His five
componentes map onto the `mat` vocabulary that already existed, which is finer
(nine temas), so the componente picks the family and the tema específico picks
the bucket inside it:

| Componente de Herman | Temas de `mat` |
| --- | --- |
| Estadística   | `lectura-de-graficas`, `tablas-y-probabilidad`, `estadistica-descriptiva` |
| Aritmética    | `proporcionalidad` |
| Álgebra       | `ecuaciones-en-contexto`, `funciones` |
| Geometría     | `areas-y-perimetros`, `geometria-espacial` |
| Trigonometría | `trigonometria` — **añadido** en `20260914…`, no existía |

`preguntas.dificultad` (`baja`/`media`/`alta`, nullable) exists because of that
classification. The chip the student sees used to be hardcoded to «Intermedio»
for all 526 questions; it now reads the column and is omitted when nobody has
classified the question. Only Matemáticas will have it filled at first.

Two things matemáticas needs that sociales did not:

- **An option can be a table or a graph.** `app.js` builds options with
  `innerHTML`, so HTML inside an option works, and several questions ask «¿cuál
  de estas tablas…?». `opciones` was the one text field that never passed
  through `sin_html_ejecutable()`; the constraint
  `preguntas_opciones_sin_html` now closes that.
- **Nearly every question carries a figure**, the reverse of sociales (273
  questions, 3 figures). Budget the figure work per question, not per
  cuadernillo.

### Figures: three in Sociales/Inglés, one per question in Matemáticas

In the eleven Sociales/Inglés cuadernillos, a sweep of all 152 pages found only
**three figures that carry meaning**; everything else is decorative (the
portraits heading the English reading passages, the Mickey Mouse cover) or
already solved as HTML (the two tables, and the part-1 avisos, which are text in
a box styled by `.ctx-aviso`).

Matemáticas is the opposite: **235 figures across the nine cuadernillos**, about
one per question, plus the ones that are option graphs (`¿cuál de estas
gráficas…?`) living inside `preguntas.opciones`. They are located with
`scripts/detectar-figuras.mjs` and then cropped by hand — the detector proposes
boxes, it does not write the final crop, because a crop that bleeds into the
neighbouring column is visible on the student's screen.

The three live in `img/figuras/` as WebP and are referenced from the contexto
HTML with a relative `src`, so the Cloudflare Worker serves them from the same
origin as the app. That beats Supabase Storage here: Cloudflare has a Bogotá
PoP and this Supabase project is in `us-east-1`. The `figuras` bucket exists
with public read and admin-only write (`20260914034808`), ready for when the
panel gains an upload button — moving the bytes there means changing only the
`src` base.

Rules for adding one:
- Wrap it in `<figure class="ctx-fig">` **inside** the contexto HTML. `app.js`
  always renders the wrapper as `<div class="ctx-card">` and ignores the
  `ctxClass` column, so styling classes have to live in the content itself.
- `.ctx-card` normally scrolls at 250px; `.ctx-card:has(.ctx-fig)` lifts that,
  because an image can't be read in slices.
- The `alt` has to carry the same evidence the image does — a blind student
  must be able to answer. That is not leaking the key: the stimulus is public,
  the key is not. Note that `sinEtiquetas()` strips whole tags, so `alt` text
  never reaches the derived id or `hash_norm`.
- **The `src` is always relative** (`img/figuras/…`), served by the Worker from
  the same origin. Never an absolute URL to GitHub, a CDN, or Storage. In
  September 2026 the math figures were briefly pinned to
  `raw.githubusercontent.com` commits: that moved the bytes out of the Bogotá
  PoP and, worse, made the product depend on this repository staying **public**
  — and `supabase/seed/` holds every `preguntas_clave` insert, which is the
  answer key. Undone in `20260915100000_figuras_vuelven_al_mismo_origen.sql`.
- When four options are graphs, **each `alt` must describe its own graph**. Four
  identical `alt` strings pass every automated check and still leave the
  question unanswerable with a screen reader.

**Changing a contexto changes the id of its pregunta**, because both derive
from the content. Rebuild the rows (delete + insert) instead of updating in
place, and check `respuestas`/`repasos` first — the three figures had none.
Updating a row's text in place while keeping its old id is what left the DB and
git out of step before (see below).

### Loading a batch, and proving it loaded intact

The SQL is applied by pasting it through the Supabase API, so a typo in the
transfer would silently make the row differ from the seed file in git. Two
scripts guard the pipeline:

- `scripts/verificar-contenido.mjs <archivo>` — run **before** generating SQL.
  Catches what the generator does not: questions left out of every
  cuestionario (loaded but invisible to the student), questions in two
  cuestionarios at once, `qs` indices out of range, `correct` outside the
  options, repeated options, an explanation that names a letter (options are
  shuffled per student, so "la opción A" is wrong half the time), and two
  questions sharing context + enunciado.
- `scripts/huella-carga.mjs <archivo> [--sql]` — run **after** applying. Prints
  three md5 over contextos / preguntas / claves; `--sql` prints the query that
  computes the same three inside Postgres. Six matching values mean what is
  loaded is byte-identical to git.

Before applying a new batch, also check its content-derived `hash_norm` values
against the ones already in `preguntas`: that is how the repeat of F6's
question 71 (already loaded from F1/F2) was caught before it hit the database.

**Drift: how to check it, and where it stands.** An id is derived from the
content, so a row whose text was edited in place after loading keeps an id that
git no longer produces. Harmless to students, fatal to reproducibility. One
query finds every such row:

```sql
select id, etiqueta from contextos where id <> uuid_de_contexto(contenido);
```

`uuid_de_contexto()` (added 2026-09-15) reproduces the JS derivation inside
Postgres — sha256 over the parts joined by a NUL byte, in `bytea`, because
Postgres `text` cannot hold a zero byte.

**That query alone is not a drift report.** It flags every row whose id was
pinned on purpose with `identityContext`, because `uuid_de_contexto()` only
sees the stored text and knows nothing about the pin. As of 2026-09-16 it
returns **73 rows**, and all 73 are deliberate: 3 text corrections (Inglés p4
and Sociales F4 against the scans — `Useful Things`, the EPS 30 %, the 4.000
Nigerians), 59 in Matemáticas and 11 in Física, where the figures were redrawn
as SVG and the tables rebuilt after `identityContext` had already captured the
previous text. In Matemáticas the pin is applied in bulk at the foot of each
content file, before `mejorarFigurasMatematicas()` rewrites the presentation.

So the number growing is not by itself a problem, and 3 is no longer the
expected answer. **The real check is `huella-carga.mjs`**: it hashes the
`(id, contenido)` pair exactly as git produces it, pin included, so six
matching md5 mean the row is reproducible whether or not it is pinned. Use the
`uuid_de_contexto()` query to *locate* pinned rows, then confirm each one is
accounted for by an `identityContext` in its content file — an unexplained row
is the one worth chasing.

Note that editing a **contexto** does not move the **pregunta**'s id: that one
derives from the contexto *without tags*, so changing an `<img src>` or an `alt`
leaves it alone. Only the contexto row has to be rebuilt.

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
