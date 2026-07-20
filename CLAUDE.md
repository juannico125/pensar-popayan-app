# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The **single demo repo** for "Pensar Popayán" (Saber 11 exam prep). The client accepted the proposal (jul 2026, COP 6M, web only — no app stores); this demo is the reference the real product will be built from. Two deliverables live here:

- `index.html` + `css/` + `js/` — the **student app**: a static, no-build, no-backend SPA whose design DNA was studied from `educadavid-app` via the Hallmark design skill (light cream theme, gold accent).
- `panel.html` — the **institute admin/teacher panel**, a fully self-contained HTML file (inline CSS/JS) carried over from the retired v1 repo `pensar-popayan-demo` (deleted). It keeps its own older visual style; unifying it with the app's design system is future work, on purpose.

The two cross-link: login screen → "Ver panel del instituto (web)" → `panel.html`; panel sidebar → "← App del estudiante" → `index.html`.

## Running / previewing

No build system. Open `index.html` / `panel.html` directly or serve statically (`python -m http.server 8000`). Deployed on GitHub Pages. Demo login is prefilled (`demo@pensarpopayan.com` / `Pensar2026`); any password ≥ 6 chars passes.

## Architecture (student app)

- `index.html` — one `<section class="screen" id="screen-*">` per screen (splash, login, home, materia, quiz, results, mistakes, review, stats, profile) + bottom nav + feedback bottom sheet + toast. Classic scripts, no modules (so `file://` works).
- `js/app.js` — everything: `navigate(name, params)` router (toggles `.active`, re-runs the screen's render fn from the `RENDER` map), quiz engine (`startQuiz(materia, items?, retry?, cuestId?)`), spaced-repetition simulation (`S.mistakes` keyed `"materia:qi"`, status `pend`/`dom`), derived stats, XP/achievements (`LOGROS` with `check()` predicates).
- `js/data.js` — `MATERIAS` (7 subjects, `jugable: true` only for `lc`/`mat`), shared passages, SVG figures, `BANKS` (10 questions each for lc/mat), `CUESTIONARIOS` (the per-materia route: sections by área → items referencing bank indices via `qs`), `LOTE` (semester batch), `MATERIA_META`/`ICONS`. Question shape: `{ comp, ctxLabel, ctxClass, context, text, opts[4], correct, exp, tip }`.
- **Cuestionario route** (client-requested, Platzi-style): entering a materia shows a numbered timeline of short quizzes grouped by área, with sequential unlock — `estadoCuestionario()` returns `done`/`next`/`locked`; completing a quiz writes `S.cuestionarios[id] = {score, total}` which unlocks the next. Locked taps toast. `progresoMateria()` = done/total cuestionarios.
- **State**: single in-memory object `S` — **no persistence, on purpose** (`save()` is a no-op). Any reload returns to the seeded initial state (`seedDemoHistory()`: a week of sample activity + some completed cuestionarios). `answered` is an append-only log; stats/streak are derived from it.
- **Loading new question batches**: see `docs/formato-preguntas.md` — the client sends PDFs, questions are AI-extracted against the fixed schema, human-reviewed, then added to `BANKS` + grouped in `CUESTIONARIOS`. Semester rotation updates `LOTE`.

## Design system (Hallmark-managed — student app only)

- `css/tokens.css` is the single source of truth: OKLCH colors (light cream paper, gold accent, per-materia tints), Source Serif 4 (display) + Inter (body) + IBM Plex Mono (labels/numbers), 4pt spacing, easing/duration tokens. **Never inline raw colors/fonts in `app.css` — add a token first.**
- Motion rules: animate `transform`/`opacity` only (the `ruta-pulse` ring is a `::after` scaling+fading, not box-shadow); `--ease-out` for entrances, `--ease-in` for exits; one staggered `.reveal` entrance per screen (`--i` index); `prefers-reduced-motion` collapses everything.
- Bars/charts animate via `transform: scaleX/scaleY` with `--p` custom property, never `width`/`height`.
- `panel.html` deliberately does **not** follow this system yet — don't half-migrate it; restyling it is a future, explicit task.

## Language & domain

All copy in Spanish with ICFES/Saber 11 terms (competencias, simulacro, repaso, torre de selección, banco de preguntas). Student-facing tone is direct and encouraging. Docs for the sales/product context: `docs/guion-presentacion-2026-07-17.md` (the pitch that closed the deal) and `docs/formato-preguntas.md` (batch-loading contract).
