# Prototipo de microaprendizaje

Lección en tarjetas deslizables al estilo de las apps de aprendizaje visual.
Capítulo de ejemplo: **La Biblioteca de Alejandría**, 18 tarjetas, unos 5
minutos de lectura.

React 19 · TypeScript · Vite · Framer Motion

## Arrancar

```bash
npm install
npm run dev
```

## Compilar

```bash
npm run build     # tsc --noEmit + vite build
```

## Qué hay dentro

| Fichero | Qué resuelve |
|---|---|
| `src/lesson.ts` | Contenido del capítulo. Cada tarjeta declara su **forma** y la forma manda sobre la maquetación. |
| `src/motion.ts` | Presets de muelle y bucles de reposo. No hay un solo easing lineal fuera de los bucles. |
| `src/Scene.tsx` | Ilustración por capas de profundidad, con entrada escalonada. |
| `src/Graficos.tsx` | Los cuatro gráficos de datos. |
| `src/Racha.tsx` | Cierre: racha con llama animada y reto diario. |
| `src/undraw.tsx` | **Generado.** No editar a mano. |
| `scripts/convertir.mjs` | Genera `undraw.tsx` a partir de los SVG de unDraw. |

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

## Paleta

Cinco acentos cálidos desaturados sobre fondo hueso, definidos como variables
CSS al principio de `src/styles.css`. Cambiar la paleta es cambiar esas
variables: no hay ni un color escrito a pelo en los componentes.

## Estado

Prototipo. El contenido del capítulo está escrito para probar el formato; las
cifras históricas son las estimaciones habitualmente aceptadas, no una
investigación con fuentes citadas.
