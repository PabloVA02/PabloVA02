# Prototipo de microaprendizaje

App de aprendizaje visual en tarjetas deslizables, con dos secciones.

**Libros** — recorrido largo: introducción → biblioteca → ficha del libro →
camino de capítulos → lectura → racha. Capítulo de ejemplo: *La Biblioteca de
Alejandría*, 18 tarjetas, unos 5 minutos.

**Shorts** — historias sueltas de 2 minutos en un pase a pantalla completa,
cada una con una **fotografía real** de portada. Se sube para cambiar de
historia y se desliza a la derecha para seguir avanzando dentro de ella: no
hay que abrir nada. Cuatro pantallas por historia —portada y tres páginas— y
al pasar la última se cae directamente en la siguiente historia.

24 historias en cuatro temas: **Figuras** (Julio César, Cleopatra, Alejandro,
Gengis Kan, Napoleón, Juana de Arco), **Catástrofes**, **Crimen** y
**Misterios**. Cómo se escriben y cómo se llega a 500: [`CONTENIDO.md`](CONTENIDO.md).

React 19 · TypeScript · Vite · Framer Motion

## Verlo sin instalar nada

Abre **`demo.html`** en el navegador. Es la app entera empaquetada en un solo
fichero, dentro de un marco de móvil. No necesita servidor ni conexión.

## Arrancar en desarrollo

```bash
npm install
npm run dev
```

## Compilar

```bash
npm run build     # tsc --noEmit + vite build
npm run validar   # longitudes, ids, fichas de foto y paleta de las historias
```

## Qué hay dentro

| Fichero | Qué resuelve |
|---|---|
| `src/App.tsx` | Máquina de estados del recorrido y la lectura de tarjetas. |
| `src/Onboarding.tsx` | Las doce pantallas de introducción, con entrada por partes. |
| `src/Biblioteca.tsx` | Inicio con las fichas de libros y la ficha de un libro. |
| `src/Cargando.tsx` | La pantalla de carga: monta la biblioteca de verdad mientras la barra sube a tirones. |
| `src/Camino.tsx` | El camino de capítulos: serpiente vertical de nodos. |
| `src/lesson.ts` | Contenido del capítulo. Cada tarjeta declara su **forma** y la forma manda sobre la maquetación. |
| `src/motion.ts` | Presets de muelle y bucles de reposo. No hay un solo easing lineal fuera de los bucles. |
| `src/Scene.tsx` | Ilustración por capas de profundidad, con entrada escalonada. |
| `src/Graficos.tsx` | Los cuatro gráficos de datos. |
| `src/Shorts.tsx` | Shorts: el pase entero. Una sola pantalla, foto fija por historia y la hoja de texto pasando por delante. |
| `src/shorts.ts` | El tipo `Short`, la regla de los títulos y el orden del pase. |
| `src/historias/*.ts` | Las historias, un fichero por tema. |
| `src/Racha.tsx` | Cierre: racha con la llama como protagonista, y reto diario. |
| `src/undraw.tsx` | **Generado.** No editar a mano. |
| `scripts/convertir.mjs` | Genera `undraw.tsx` a partir de los SVG de unDraw. |
| `scripts/medir.mjs` | Calcula el encuadre real de cada SVG con `getBBox`. |
| `scripts/demo.mjs` | Rehace `demo.html` con lo compilado: `npm run demo`. |
| `scripts/validar.mjs` | Control de calidad de las historias: `npm run validar`. |

## Sistema de animación

- **Parallax atado al gesto.** Un único `MotionValue` alimenta cuatro capas
  multiplicado por su profundidad: `0,14 / 0,38 / 0,72 / 1,05`. Medido con el
  dedo a medio arrastre: `−5,88 / −15,96 / −30,24 / −44,1` px.
- **Reposo desincronizado.** Cada capa tiene amplitud, duración y desfase
  propios (duraciones primas entre sí). Medido: `2,2 / 3,7 / 5,9` px.
- **Entrada escalonada** a 70 ms entre capas: fondo primero, primer plano al
  final.
- **Todo muelle**: cuatro presets en `motion.ts`.
- Respeta `prefers-reduced-motion`: se apagan los bucles, no las transiciones.

## Los gráficos

La forma la elige el dato, no el gusto:

- **Cronología** → línea. Evolución en el tiempo.
- **Colección** → barras con el eje en cero. Comparar magnitudes.
- **Sófocles** → retícula de 120 unidades. Proporción sobre un total.
- **Supervivencia** → cadena de eslabones.

Se anima la **magnitud**, no la opacidad: la barra crece desde su base, la
línea se dibuja, las unidades se encienden una a una.

## Ilustraciones

De [unDraw](https://undraw.co), **licencia MIT**. unDraw las entrega casi
planas, sin grupos ni capas nombradas, así que no admiten parallax tal cual.

`scripts/convertir.mjs` las separa en tres bandas de profundidad usando la
**luminancia de cada color** como proxy de profundidad —claros al fondo,
oscuros al frente— y sustituye los colores originales por los tokens de la
paleta, de modo que la ilustración adopta la paleta del proyecto y cambia con
ella.

Para regenerar con otras ilustraciones: edita la lista `ELEGIDAS` del script,
apunta `BASE` a la carpeta de SVG y ejecútalo.

## Las fotografías de Shorts

Todas de [Wikimedia Commons](https://commons.wikimedia.org), en dominio
público o con licencia Creative Commons. Cada una guarda su autoría y su
licencia junto a la historia, y esa línea de crédito **se pinta en pantalla**, que
es lo que exigen las CC-BY.

Se piden por `Special:FilePath`, la dirección estable de Commons: no depende
del hash interno del fichero, así que no se rompe cuando Commons reorganiza su
almacenamiento.

**No se descargan al repositorio a propósito.** Empaquetarlas obligaría a
redistribuirlas, con lo que eso implica de licencias, y multiplicaría el peso
del proyecto. Se piden por red y el componente `<Fotografia>` tiene los tres
estados dibujados: cargando (color de la historia y barrido), cargada, y
fallida (una de nuestras ilustraciones). Hay un plazo de 6 segundos, porque
una petición bloqueada no falla: se queda colgada, y sin plazo el barrido de
carga giraría para siempre.

Consecuencia práctica: **sin red la sección sigue siendo presentable**, con
ilustración en lugar de foto. Es el mismo diseño, no una pantalla de error.

## Paleta

Cinco acentos cálidos desaturados sobre fondo hueso, definidos como variables
CSS al principio de `src/styles.css`. Cambiar la paleta es cambiar esas
variables: no hay ni un color escrito a pelo en los componentes.

## Estado

Prototipo. El contenido del capítulo está escrito para probar el formato; las
cifras históricas son las estimaciones habitualmente aceptadas, no una
investigación con fuentes citadas.
