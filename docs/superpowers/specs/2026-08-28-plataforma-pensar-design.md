# Diseño — Plataforma Pensar Popayán (producto real)

**Fecha:** 28 de agosto de 2026
**Estado:** aprobado en conversación, pendiente de revisión escrita
**Reemplaza:** el demo estático (`index.html` + `panel.html`) como referencia de construcción

---

## 1. Contexto

Pensar Preuniversitario aprobó el proyecto (COP 6M, solo web, sin tiendas de
aplicaciones). El demo de este repo fue la maqueta que cerró la venta; este
documento define el producto real que se construye a partir de él.

El demo no tiene backend ni persistencia, a propósito. El producto real sí.

---

## 2. Compromisos adquiridos en la venta

Estos no son opciones de diseño. Se dijeron en la reunión del 17 de julio y
deben cumplirse. Ver `docs/guion-presentacion-2026-07-17.md`.

1. **Instancia de Supabase separada** para Pensar. No multi-tenant compartido
   con otros institutos.
2. **El aislamiento entre usuarios es RLS en Postgres**, no lógica de frontend.
3. **Nada se borra en la rotación de lotes.** Cada pregunta lleva lote y
   vigencia; el banco activo es un filtro, el histórico queda intacto.
4. **La IA extrae, no inventa.** Revisión humana obligatoria antes de publicar.
   El pipeline lo opera el proveedor, no es autoservicio del cliente.
5. **Solo web.** Sin tiendas, sin funcionamiento sin conexión.
6. **Sin dependencia del proveedor:** código en repositorio del cliente,
   dominio a nombre del cliente, Postgres estándar exportable.
7. **El puntaje es estimado**, nunca "idéntico al ICFES". Las 7 torres son
   5 áreas ICFES (Biología + Física + Química se agregan en Ciencias Naturales).

---

## 3. Alcance de la versión 1

### Rol estudiante — tres pantallas

- **Cuestionarios.** Ruta por materia con secciones por área y desbloqueo
  secuencial: completar un cuestionario abre el siguiente.
- **Repaso inteligente.** Preguntas de los temas donde el estudiante falló,
  con repetición espaciada.
- **Estadísticas.** Racha, precisión, tiempo, progreso por materia.

La gamificación del demo se conserva: XP, niveles y logros.

### Rol administrativo — una pantalla

- Lista de estudiantes activos con sus estadísticas e información.
- Crear estudiante (individual y por archivo CSV).
- Archivar estudiante cuando termina el ciclo.

Solo este rol puede crear o archivar estudiantes.

### Login

Correo y contraseña. El rol se lee de la base de datos, nunca se infiere del
correo. **El auto-registro queda desactivado**: solo el administrativo crea
usuarios.

### Fuera de alcance de la v1

- **Simulacros.** Con esto, la pregunta pendiente de "161 contra 208" deja de
  bloquear el diseño.
- **Login por profesor y torre de selección por docente.** Solo hay dos roles.
  *Nota: la torre de selección fue una pieza central de la presentación. Su
  ausencia debe comunicarse explícitamente al cliente, no quedar como
  silencio.*
- **Gestión del banco de preguntas desde el panel.** Las preguntas las carga el
  proveedor desde los PDFs.
- Funcionamiento sin conexión, aplicaciones móviles nativas.

---

## 4. Arquitectura

**HTML, CSS y JavaScript planos, sin build, más `supabase-js` desde CDN con
versión fija y hash SRI.**

Se conserva el sistema de diseño existente (`css/tokens.css`, `css/app.css`) y
el router de `js/app.js`. El cambio principal es que `js/data.js` deja de ser
constantes y pasa a ser un `js/api.js` que consulta Supabase. La forma de los
datos no cambia.

### Por qué

- **Superficie de dependencias mínima.** Sin `npm` no hay cadena de suministro
  de cientos de paquetes transitivos que nadie va a auditar. Es el vector de
  ataque realista en un proyecto de un solo desarrollador.
- **Sin build no hay bundle donde se filtre una llave** por accidente.
- **Reutiliza el diseño ya aprobado por el cliente** (~2.200 líneas).
- **Mantenimiento a diez años:** archivos estáticos no se rompen con cambios de
  versión mayor de un framework.

### Costo aceptado

El panel administrativo es CRUD y en vanilla es tedioso. Se acepta porque lo
usan una o dos personas, no 300 estudiantes, y porque sostener dos stacks
implicaría dos sistemas de diseño que unificar. Si el panel se vuelve
inmanejable, migrarlo solo a él sigue siendo posible más adelante.

### La única pieza de servidor

Una **Edge Function** para crear y archivar estudiantes. Es inevitable: dar de
alta un usuario en Supabase requiere la llave `service_role`, que no puede
tocar el navegador. La función verifica que quien llama tiene rol
administrativo y luego opera del lado del servidor.

El navegador parsea el CSV y llama a la función una fila a la vez, mostrando
qué entró y qué falló.

**No se usa IA para filtrar los datos del CSV.** Agrega un punto de falla,
costo por uso y datos de menores viajando a un tercero sin necesidad. Si el
archivo viene sucio, se limpia antes de subirlo.

---

## 5. Modelo de datos

| Tabla | Contenido |
|---|---|
| `perfiles` | Rol (estudiante/admin), nombre, código, jornada, cohorte, activo |
| `materias` | Las 7 torres, cada una con su área ICFES |
| `temas` | Vocabulario controlado de temas, por materia |
| `lotes` | Código (`2026-B`), vigencia desde/hasta, activo |
| `contextos` | Pasajes y situaciones compartidas entre varias preguntas |
| `preguntas` | Enunciado, opciones, tip, materia, tema, lote, estado |
| `preguntas_clave` | Clave y explicación, en tabla aparte y sin políticas RLS |
| `cuestionarios` + `cuestionario_preguntas` | La ruta por materia: secciones, orden, desbloqueo |
| `sesiones` | Una corrida de cuestionario o de repaso |
| `respuestas` | Log append-only: quién respondió qué, cuándo, en cuánto tiempo |
| `repasos` | Programador de repetición espaciada (1-3-7-15-30-90 días) |

### Decisiones del modelo

**`respuestas` es append-only.** Nunca se actualiza. Todas las estadísticas
—racha, precisión, XP, progreso, detección de temas débiles— se derivan de esta
tabla. Es el mismo diseño que el demo ya prueba con `S.answered`.

**Todo el cálculo de estadísticas vive en una sola vista de Postgres.** La
aplicación nunca consulta `respuestas` directamente. Esto permite cambiar la
fuente de la vista el día que haga falta archivar, sin tocar el frontend ni el
panel.

**`opts` admite 3 o 4 opciones**, con la validación de `correct` atada a su
longitud. El inglés del ICFES parte 1 usa legítimamente A/B/C. El motor del
demo ya renderiza en bucle (`js/app.js:439`), así que no requiere cambios.

**`preguntas.clave_origen`** registra si la respuesta correcta venía marcada en
el cuadernillo o si la generó el modelo. Permite dirigir la revisión humana
hacia donde de verdad hace falta criterio.

**Datos personales al mínimo** (Ley 1581): nombre, código, jornada. Nada de
documento de identidad, dirección ni teléfono. Si se opta por login con código
de institución, Supabase Auth exige un correo internamente: se sintetiza uno
que nunca se muestra.

---

## 6. Seguridad

**Todas las tablas con RLS activado y política de negación por defecto.**

- Estudiante: lee y escribe solo sus propias filas de `respuestas`, `repasos`
  y `perfiles`.
- Administrativo: lee todo, escribe solo sobre `perfiles`.

**La clave correcta no viaja al navegador.** Implementado partiendo la
pregunta en dos tablas en vez de con permisos por columna: `preguntas` lleva
enunciado, contexto y opciones; `preguntas_clave` lleva `correcta` y
`explicacion`, tiene RLS activo y **cero políticas**, y ni el estudiante ni el
administrativo pueden leerla directamente. El permiso por columna no servía:
estudiante y administrativo son ambos el rol `authenticated` de Postgres, así
que un `GRANT` por columna no distingue entre los dos. El estudiante responde
llamando a `responder()`, que califica del lado del servidor y devuelve el
veredicto con la explicación; el administrativo consulta claves por
`clave_de()`, que verifica el rol antes de responder.

Sin esto, cualquier estudiante abre la consola y obtiene el solucionario
completo de las 600 preguntas.

**El barajado de opciones es reproducible.** El orden se deriva de una semilla
estable de estudiante más pregunta: siempre el mismo para él, distinto entre
compañeros, sin almacenar nada. En `respuestas` se registra el índice
**canónico**, no el mostrado, para que los datos sigan siendo comparables.

Consecuencia para el contenido: **las explicaciones no pueden referirse a
letras.** El demo tiene este defecto (`js/app.js:516` y las `exp` de
`js/data.js`) y debe exigírsele a la extracción desde el primer lote.

**La llave `service_role` nunca sale del entorno del proveedor.** Se usa para
correr el pipeline de carga y dentro de la Edge Function. Nunca en el repo,
nunca en el frontend.

**Las políticas de RLS se prueban.** Autenticarse como el estudiante A, pedir
los datos del estudiante B, verificar que devuelve cero filas. Sin esa prueba
el aislamiento es una promesa, no un control.

---

## 7. Repaso inteligente

La sesión de repaso mezcla dos fuentes:

1. Preguntas falladas cuyo intervalo ya venció, según el calendario
   1-3-7-15-30-90 días.
2. Preguntas **nuevas** de los temas donde el estudiante viene flojo.

La segunda fuente es la que importa pedagógicamente: devolver seis veces la
misma pregunta enseña a memorizar esa pregunta, no el tema.

**Esto obliga a que `temas` sea un vocabulario cerrado.** Si la extracción
etiqueta libremente, "Inferencia", "Inferencia textual" y "Nivel inferencial"
se vuelven tres temas distintos y el repaso se rompe en silencio. La extracción
**elige de la lista, no inventa**.

---

## 8. Pipeline de contenido

Flujo: el cliente entrega cuadernillos → extracción con visión bajo esquema
fijo → validación automática → revisión humana → carga. Ver
`docs/formato-preguntas.md`.

### Hallazgos del PDF real de inglés (parte 1, 25 preguntas en 5 páginas)

**Es escaneado**, con sangrado del reverso y marcas de lápiz. Requiere visión,
no extracción de texto. Pero es el caso fácil del material escaneado: avisos de
cinco a ocho palabras, tres opciones cortas, formato repetitivo, sin fórmulas
ni figuras.

**No trae clave de respuestas.** Solo el ejemplo (pregunta 0) está marcado. Las
25 preguntas reales no. Esto significa que el modelo *genera* la clave en vez
de extraerla, que es justo lo que se dijo al cliente que no haría. **Acción:
pedir las hojas de respuestas.** Es lo único que puede cambiar el diseño del
pipeline.

**No trae explicaciones ni tips.** Se generan en su totalidad. Ahí se va el
grueso del costo en tokens y del tiempo de revisión.

**El sangrado del reverso puede inducir contenido alucinado.** La validación
debe contemplarlo.

**Deduplicación por significado, no por cadena.** El material trae varias
formas distintas de la misma parte, con numeración repetida y preguntas
equivalentes redactadas distinto ("DON'T GIVE FOOD TO THE GIRAFFES" contra
"Please, do not give food to the animals"). La regla actual compara texto
normalizado y no las detecta.

**Erratas de origen** ("in the stret", "afternons", "in the boast"). Se
corrigen en silencio y se envía la lista al cliente. Publicar erratas en un
examen de inglés enseña mal.

**Vocabulario de temas para inglés:** las siete partes del examen ICFES de
inglés. El encabezado del cuadernillo ya trae "PARTE 1".

**Volumen estimado:** ~5 preguntas por página, del orden de 120 páginas para
llegar a 600 preguntas.

---

## 9. Infraestructura y costos

**Frontend** en Cloudflare Pages o GitHub Pages. **Base de datos** en Supabase,
plan gratuito.

Las cuentas van **a nombre del instituto**, con el proveedor invitado como
administrador. Además de la coherencia con el compromiso 6, bajo la Ley 1581 el
instituto es el responsable del tratamiento de los datos de sus estudiantes
menores de edad, y la infraestructura debe estar a nombre del responsable.

Durante el desarrollo se usa un **proyecto gratuito del proveedor**. El
proyecto de producción se crea en la cuenta del instituto al lanzar. Las
migraciones se aplican igual a ambos.

### Por qué el plan gratuito alcanza

Con 300 estudiantes, cuatro de los cinco límites sobran por dos órdenes de
magnitud: usuarios activos (300 de 50.000), ancho de banda (~40 MB de 5 GB),
invocaciones de Edge Functions (~300 al año), almacenamiento de archivos (cero;
las figuras son SVG en línea).

El único que aprieta es el **tamaño de la base: 500 MB**. El log de respuestas
crece del orden de 100–250 MB al año.

*Los límites de Supabase cambian con el tiempo. Verificarlos antes de
comprometer cifras con el cliente.*

### Backups sin plan Pro

`pg_dump` nocturno desde una GitHub Action, empujando el volcado a
almacenamiento externo. Cumple el compromiso de backups a costo cero.

### Depuración por cohorte

El preuniversitario es un ciclo anual. Cuando una cohorte termina, se archiva
su log crudo y se conservan sus agregados. Cada año sale aproximadamente lo
mismo que entra: **estado estacionario alrededor de 150–300 MB**, por debajo
del límite de forma indefinida.

- **Las preguntas no se borran nunca.** Pesan ~2 MB y borrarlas rompe el
  histórico. Costo real, beneficio cero.
- **Los estudiantes se anonimizan, no se borran.** Se les quita nombre y
  código, se conserva la fila marcada con su cohorte y sus estadísticas
  agregadas. Cumple el principio de finalidad de la Ley 1581 y conserva la
  capacidad de comparar cohortes.
- **Ojo con `VACUUM`.** Borrar filas en Postgres no libera espacio de
  inmediato. La depuración es un procedimiento con pasos, no un `DELETE`.

### Esquema como migraciones

El esquema vive en `supabase/migrations/`, versionado en git. Nunca se aplica a
mano desde una consola. Sin esto, el proyecto no es entregable al cliente, no
se puede revertir, y las políticas de RLS no son revisables antes de correr.

---

## 10. Pendientes

**Hojas de respuestas: resuelto con marca de origen (28 de agosto de 2026).**
Los cinco cuadernillos de inglés no las traen. En vez de bloquear el lote, las
claves las determina el modelo y se cargan con `clave_origen = 'modelo'`, que
es exactamente para lo que existe ese campo: la base distingue lo extraído de
lo generado, y `scripts/generar-plantilla-revision.mjs` imprime la hoja para
que un docente firme o corrija.

Parte 1 cargada y en línea: 25 preguntas, 5 cuestionarios, 4 marcadas para
revisión prioritaria. Ver `docs/revision-ingles-parte1.md`.

**Pendiente del pipeline:**
- Partes 2 a 5 de inglés (~275 preguntas más).
- Borrar las anotaciones a lápiz del escaneo de la parte 2: son traducciones
  de un estudiante escritas sobre la página, y en varios ítems revelan la
  respuesta. El extractor las lee como contenido.

**Base de datos: hecho (28 de agosto de 2026).**
- MCP de Supabase autorizado y proyecto de desarrollo creado
  (`unttlrqhfpttueezvrtp`, organización «pensar preu»).
- Esquema completo aplicado desde `supabase/migrations/` (9 migraciones):
  catálogo, contenido, actividad, RLS, funciones, semillas y endurecimiento
  de permisos.
- Prueba de aislamiento escrita y ejecutada: `supabase/tests/aislamiento.sql`.

**Frontend y panel: hecho (29 de agosto de 2026).**
- `js/api.js` reemplazó a las constantes; la app del estudiante corre sobre
  Supabase con login real.
- Edge Function `estudiantes` desplegada: crea, archiva, reactiva y anonimiza.
  Verifica el rol del lado del servidor antes de usar `service_role`.
- `panel.html` reconstruido: lista de estudiantes con estadísticas, alta
  individual, alta por CSV fila a fila con reporte de qué entró y qué falló, y
  archivo/reactivación.

**Pendiente de configuración (no se puede por migración):**
- Desactivar el auto-registro en el panel de Auth de Supabase.

**Para confirmar con el cliente:**
- Que la torre de selección por docente queda fuera de la v1.
- Formato y volumen del resto de cuadernillos.
- Quién revisa los lotes generados y bajo qué tarifa recurrente.
- Recolección de autorización de tratamiento de datos en la matrícula.
- Dominio: quién lo registra y a nombre de quién queda.
- Fecha objetivo de entrega.
