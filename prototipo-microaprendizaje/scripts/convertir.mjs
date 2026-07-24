import { readFile, writeFile } from "node:fs/promises";

/* ==========================================================================
   Convierte ilustraciones de unDraw (MIT) en componentes React por capas.

   unDraw las entrega casi planas: sin grupos y sin capas nombradas. Pero su
   paleta es pequeña y muy regular, y la LUMINANCIA de cada color es un proxy
   fiable de la profundidad:

     claros  (L > 195)  -> atrezo y fondo
     medios  (95..195)  -> piel y acentos
     oscuros (L < 95)   -> la figura, lo que está más cerca

   Así que cada ilustración se emite tres veces, una por banda, con los colores
   de las otras bandas apagados. Las tres copias comparten coordenadas, se
   superponen exactas, y cada una puede moverse a su propia velocidad. Eso
   devuelve el parallax que el SVG original no permitía.
   ========================================================================== */

const BASE = "node_modules/undraw-svg/svgs";
const SALIDA = "/workspace/micro-proto/src/undraw.tsx";

/** Mapa a los tokens de la paleta del proyecto. */
const MAPA = {
  // oscuros: la figura
  "#090814": "var(--ink)",
  "#2f2e41": "var(--ink)",
  "#3f3d56": "var(--plum-deep)",
  "#3a3768": "var(--plum-deep)",
  // medios: piel y acentos
  "#8985a8": "var(--plum-light)",
  "#ff6584": "var(--clay)",
  "#ed9da0": "var(--clay)",
  "#ffb8b8": "var(--skin)",
  "#ffb6b6": "var(--skin)",
  // claros: atrezo
  "#d6d6e3": "var(--paper-edge)",
  "#d5d6db": "var(--paper-edge)",
  "#e4e4e4": "var(--paper-edge)",
  "#e4e6ed": "var(--paper-edge)",
  "#e1e7ef": "var(--paper-edge)",
  "#e6e6e6": "var(--paper-deep)",
  "#f0f0f0": "var(--paper-deep)",
  "#f2f2f2": "var(--paper-deep)",
};

function luminancia(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

const BANDAS = {
  fondo: (L) => L > 195,
  medio: (L) => L > 95 && L <= 195,
  frente: (L) => L <= 95,
};

const ELEGIDAS = [
  // Libros y lectura
  ["bookshelves", "Estanteria"],
  ["book-lover", "Lectora"],
  ["book-reading", "Leyendo"],
  ["books", "Libros"],
  ["book-writer", "Escritor"],
  ["bookmarks", "Marcadores"],
  ["audiobook", "Audiolibro"],
  ["relaxed-reading", "LecturaTranquila"],
  // Aprendizaje
  ["education", "Educacion"],
  ["educator", "Docente"],
  ["continuous-learning", "Aprendizaje"],
  ["articles", "Articulos"],
  // Arte y cultura
  ["art", "Arte"],
  ["art-lover", "AmanteArte"],
  ["art-museum", "Museo"],
  ["artist-at-work", "ArtistaTrabajando"],
  ["art-thinking", "PensarArte"],
  // Historia y exploración
  ["explore", "Explorar"],
  ["exploring", "Explorando"],
  ["adventure-map", "MapaAventura"],
  ["adventure", "Aventura"],
  ["discoverable", "Descubrir"],
  // Ideas y pensamiento
  ["brainstorming", "LluviaIdeas"],
  ["conceptual-idea", "IdeaConceptual"],
  ["forming-ideas", "FormarIdeas"],
  ["memory-storage", "Memoria"],
  // Datos
  ["data-trends", "Tendencias"],
  ["data-points", "Puntos"],
  ["charts", "Graficos"],
  ["analysis", "Analisis"],
  // Noche y tiempo
  ["late-at-night", "TardeNoche"],
  ["moonlight", "LuzLuna"],
  ["into-the-night", "HaciaNoche"],
  // Logro
  ["celebrating", "Celebrando"],
  ["awards", "Premios"],
  ["completed", "Completado"],
];

/** Deja visibles solo los colores de una banda; el resto se apaga. */
function filtrar(svg, dentroDeBanda) {
  return svg.replace(/(fill|stroke)="(#[0-9a-fA-F]{6})"/g, (_, prop, color) => {
    const hex = color.toLowerCase();
    if (!dentroDeBanda(luminancia(hex))) return `${prop}="none"`;
    return `${prop}="${MAPA[hex] ?? hex}"`;
  });
}

/** Extrae el contenido interior y el viewBox del SVG original. */
function despiezar(svg) {
  const viewBox = svg.match(/viewBox="([^"]+)"/)?.[1] ?? "0 0 800 600";
  const interior = svg.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");
  return { viewBox, interior };
}

/** Convierte `style="a:b;c:d"` en el objeto que exige JSX. */
function estilos(s) {
  return s.replace(/style="([^"]*)"/g, (_, cuerpo) => {
    const pares = cuerpo
      .split(";")
      .map((par) => par.trim())
      .filter(Boolean)
      .map((par) => {
        const [clave, ...resto] = par.split(":");
        const camel = clave.trim().replace(/-([a-z])/g, (_m, c) => c.toUpperCase());
        return `${camel}:"${resto.join(":").trim()}"`;
      });
    return pares.length ? `style={{${pares.join(",")}}}` : "";
  });
}

/** Pasa atributos SVG a la forma que espera JSX. */
function aJsx(s) {
  return estilos(s)
    .replace(/([a-z]+)-([a-z])/g, (m, a, b) =>
      ["stroke", "fill", "clip", "stop", "font", "text", "shape", "vector", "paint", "marker"].includes(a)
        ? a + b.toUpperCase()
        : m,
    )
    .replace(/xmlns:xlink="[^"]*"/g, "")
    .replace(/xlink:href/g, "xlinkHref")
    .replace(/<!--[\s\S]*?-->/g, "");
}

let salida = `/* eslint-disable */
/* ==========================================================================
   Ilustraciones de unDraw (https://undraw.co) — licencia MIT.

   GENERADO AUTOMÁTICAMENTE por scripts/convertir.mjs. No editar a mano.

   unDraw las entrega casi planas, sin grupos ni capas nombradas. Aquí cada
   ilustración se parte en tres bandas por luminancia de color —fondo, medio y
   frente— para que cada una pueda moverse a su propia velocidad y recuperar
   la profundidad. Los colores originales quedan sustituidos por los tokens de
   la paleta del proyecto, así que cambian solos si cambias la paleta.
   ========================================================================== */

type CapaProps = { banda: "fondo" | "medio" | "frente" };

`;

for (const [fichero, nombre] of ELEGIDAS) {
  const bruto = await readFile(`${BASE}/${fichero}.svg`, "utf8");
  const { viewBox, interior } = despiezar(bruto);

  const capas = Object.entries(BANDAS)
    .map(([banda, test]) => `    ${banda}: (<>${aJsx(filtrar(interior, test))}</>),`)
    .join("\n");

  salida += `/** unDraw · ${fichero} */
export function ${nombre}({ banda }: CapaProps) {
  const capas = {
${capas}
  };
  return capas[banda];
}
export const ${nombre}VB = "${viewBox}";

`;
}

await writeFile(SALIDA, salida);
console.log(`OK -> ${SALIDA} (${(salida.length / 1024).toFixed(0)} KB, ${ELEGIDAS.length} ilustraciones × 3 capas)`);
