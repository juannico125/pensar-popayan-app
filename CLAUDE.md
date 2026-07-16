# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The **v2 demo** of the "Pensar Popayán" student app (Saber 11 exam prep) — a static, no-build, no-backend SPA whose design DNA was studied from `educadavid-app` (another project by the same developer, Flutter) and re-skinned to the Pensar gold/dark brand via the Hallmark design skill. The v1 demo lives in the sibling repo `pensar-popayan-demo` (two self-contained HTML files); this repo is the app-like evolution with real navigation, persistence, and animations.

## Running / previewing

No build system. Open `index.html` directly or serve statically (`python -m http.server 8000`). Deployed on GitHub Pages. Demo login is prefilled (`demo@pensarpopayan.com` / `Pensar2026`); any password ≥ 6 chars passes.

## Architecture

- `index.html` — one `<section class="screen" id="screen-*">` per screen (splash, login, home, materia, quiz, results, mistakes, review, stats, profile) + bottom nav + feedback bottom sheet + toast. Classic scripts, no modules (so `file://` works).
- `js/app.js` — everything: `navigate(name, params)` router (toggles `.active`, re-runs the screen's render fn from the `RENDER` map), quiz engine (`startQuiz(materia, items?, retry?)` — sessions are `SESSION_SIZE = 5` random questions), spaced-repetition simulation (`S.mistakes` keyed `"materia:qi"`, status `pend`/`dom`), derived stats, XP/achievements (`LOGROS` with `check()` predicates).
- `js/data.js` — extracted from the v1 demo's `index.html`: `MATERIAS` (7 subjects, `jugable: true` only for `lc`/`mat`), shared passages, SVG figures (recolored for dark theme), `BANKS` (10 questions each for lc/mat), plus `MATERIA_META`/`ICONS` appended at the bottom. Question shape: `{ comp, ctxLabel, ctxClass, context, text, opts[4], correct, exp, tip }`.
- **State**: single object `S` persisted to `localStorage` key `pensar_app_v1`. Clearing site data resets the demo. `answered` is an append-only log; stats/streak/progress are all derived from it.

## Design system (Hallmark-managed)

- `css/tokens.css` is the single source of truth: OKLCH colors, Fraunces (display) + Plus Jakarta Sans (body) + IBM Plex Mono (labels/numbers), 4pt spacing, easing/duration tokens. **Never inline raw colors/fonts in `app.css` — add a token first.** Both CSS files carry Hallmark stamps at the top; `.hallmark/log.json` records the build.
- Motion rules: animate `transform`/`opacity` only; `--ease-out` for entrances, `--ease-in` for exits; one staggered `.reveal` entrance per screen (`--i` index, ~55ms steps); `prefers-reduced-motion` collapses everything (see the media query at the bottom of `app.css`).
- Bars/charts animate via `transform: scaleX/scaleY` with `--p` custom property, never `width`/`height`.

## Language & domain

All copy in Spanish with ICFES/Saber 11 terms (competencias, simulacro, repaso). Keep the tone consistent with the v1 repo. The sibling repo's CLAUDE.md documents the client requirements (7 materias/torres, extended ICFES questions, 600-question bank).
