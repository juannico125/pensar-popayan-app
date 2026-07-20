# Formato de preguntas y carga de lotes

Cómo entran las preguntas del cliente a la app. El flujo acordado: Pensar entrega
sus cuadernillos en PDF → se extraen las preguntas con IA (bajo el esquema de
abajo) → revisión humana obligatoria → se cargan a `js/data.js` agrupadas en
cuestionarios por área. La rotación del banco es semestral (constante `LOTE`).

## 1. Esquema de una pregunta

Cada pregunta del `BANKS` de `js/data.js` tiene esta forma. La extracción con IA
debe producir exactamente estos campos (JSON), y nada más:

```json
{
  "comp": "Inferencia",
  "ctxLabel": "TEXTO · Responda las preguntas 1 a 3",
  "ctxClass": "ctx-pasaje",
  "context": "<p>…pasaje o situación en HTML…</p>",
  "text": "Del texto puede inferirse que…",
  "opts": ["opción A", "opción B", "opción C", "opción D"],
  "correct": 0,
  "exp": "Por qué la correcta es correcta y por qué los distractores no.",
  "tip": "Estrategia general para este tipo de pregunta."
}
```

Reglas de validación (se chequean antes de la revisión humana):

- `opts` tiene **exactamente 4** opciones.
- `correct` es un índice **entre 0 y 3**.
- `exp` y `tip` no están vacíos; `exp` explica también el error típico.
- Sin duplicados contra el banco existente (comparar `text` normalizado).
- `context` puede compartirse entre varias preguntas (formato cuadernillo:
  un pasaje, varias preguntas). Declararlo una vez como constante y referenciarlo.
- `ctxClass`: `ctx-pasaje` (texto largo) o `ctx-sit` (situación corta con
  figura/tabla). Las figuras van como SVG inline y las tablas como
  `<table class="ctx-table">`.

**Ojo:** en el demo todas las respuestas correctas quedaron en el índice 0 y las
explicaciones mencionan letras («la opción B es la mediana»). En el producto
real las opciones deben barajarse por estudiante, así que las explicaciones
**no deben referirse a letras** sino al contenido («310 es la mediana; 316 es
el promedio»). Pedirle esto a la extracción desde el primer lote.

## 2. Agrupación en cuestionarios (ruta por materia)

El cliente entrega preguntas sueltas; nosotros las dividimos en **cuestionarios
cortos** (2–5 preguntas) agrupados por área/competencia. Eso vive en la
constante `CUESTIONARIOS` de `js/data.js`:

```js
const CUESTIONARIOS = {
  lc: [
    {
      tema: 'Comprensión e interpretación',        // sección de la ruta
      items: [
        { id: 'lc-1', titulo: 'La Semana Santa de Popayán', qs: [0, 1, 2], tipo: 'Pasaje' },
      ],
    },
  ],
};
```

- `qs` son **índices** dentro del `BANKS` de esa materia (no se duplica contenido).
- `id` es único y estable (`materia-consecutivo`): el progreso del estudiante
  se guarda contra ese id.
- `tipo` es el chip visible: `Pasaje`, `Gráfica`, `Tabla`, `Situación`, `Figura`.
- El desbloqueo es secuencial: completar un cuestionario abre el siguiente.
- Un pasaje compartido debe quedar completo dentro de un mismo cuestionario
  (no partir sus preguntas entre dos rutas).

## 3. Lotes y rotación semestral

```js
const LOTE = { codigo: '2026-B', vigencia: 'jul – dic 2026' };
```

Renovar el banco **no es borrar el anterior**: en el producto real cada pregunta
lleva su lote y su vigencia, el banco activo es un filtro y el histórico queda
intacto (los resultados de simulacros pasados apuntan a preguntas del lote
viejo). En el demo basta con actualizar `LOTE` y reemplazar el contenido de
`BANKS`/`CUESTIONARIOS` al cargar el lote nuevo.

## 4. Flujo de carga (servicio operado por nosotros)

1. **Ingesta**: el cliente envía los cuadernillos (confirmar formato: PDF con
   texto vs. escaneado — el escaneado requiere visión/OCR).
2. **Extracción estructurada**: modelo con el esquema del punto 1 impuesto como
   salida. No parsear texto libre.
3. **Validación automática**: las reglas del punto 1. Lo que falla no llega a
   revisión.
4. **Revisión humana**: lote por lote, antes de publicar. No negociable.
5. **Carga**: insertar las preguntas aprobadas en `BANKS`, declarar sus
   cuestionarios en `CUESTIONARIOS`, actualizar `LOTE`.
