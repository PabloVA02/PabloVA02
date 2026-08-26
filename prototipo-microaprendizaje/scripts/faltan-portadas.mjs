/* ==========================================================================
   PORTADAS QUE FALTAN — el documento que se le pasa a Pablo

   Reescribe `PORTADAS-QUE-FALTAN.md` con lo que hay ahora mismo. No se toca a
   mano: la lista cambia cada vez que él manda una tanda de cubiertas o que se
   escribe un libro nuevo, y una lista retecleada se queda vieja el mismo día.

   Se separa en dos bloques a propósito, y el orden importa:

     BLOQUE 1  los que YA SE PUEDEN LEER y salen sin cubierta suya. Son los
               que se notan: alguien los abre hoy, lee el resumen entero y no
               ve nada suyo.
     BLOQUE 2  los que aún no tienen resumen. No corren prisa, pero van para
               que la lista esté completa y no haya que volver a preguntarla.

   Dos trampas que costaron un rato la primera vez:

     · En `catalogo.ts` hay años NEGATIVOS —`ano: -750` en la Odisea— porque
       son anteriores a Cristo. Un `(\d+)` se los salta y se pierden siete
       libros sin que nada avise. Van con `(-?\d+)` y se imprimen «750 a. C.».
     · Algunas fichas están partidas en varias líneas, así que entre campo y
       campo hay que admitir saltos de línea y no solo espacios.

   El hermano de este script es `faltan-cubiertas.mjs`, que saca lo mismo por
   pantalla y ordenado por prioridad de trabajo. Éste escribe el fichero.
   ========================================================================== */

import { readFileSync, writeFileSync } from "node:fs";

const cat = readFileSync("src/libros/catalogo.ts", "utf8");
const cub = readFileSync("src/libros/cubiertas.ts", "utf8");
const pag = readFileSync("src/libros/paginas.ts", "utf8");

const fichas = [];
const re = /id:\s*"([^"]+)",[\s\S]{0,80}?titulo:\s*"([^"]+)",[\s\S]{0,80}?autor:\s*"([^"]+)",[\s\S]{0,80}?ano:\s*(-?\d+),[\s\S]{0,80}?categoria:\s*"([^"]+)",[\s\S]{0,80}?estado:\s*"([^"]+)"/g;
let m;
while ((m = re.exec(cat))) fichas.push({ id: m[1], titulo: m[2], autor: m[3], ano: +m[4], cat: m[5], estado: m[6] });

const conCubierta = new Set([...cub.matchAll(/^\s*"([a-z0-9-]+)":/gm)].map((x) => x[1]));
const escritos = new Set(fichas.filter((f) => f.estado === "escrito").map((f) => f.id));

const faltan = fichas.filter((f) => !conCubierta.has(f.id));
const ya = faltan.filter((f) => escritos.has(f.id));
const luego = faltan.filter((f) => !escritos.has(f.id));

const ORDEN = ["Historia","Filosofía","Ciencia","Arte","Literatura","Psicología","Economía","Salud","Deportes"];
const porCat = (lista) => {
  const g = {};
  for (const f of lista) (g[f.cat] ??= []).push(f);
  for (const k of Object.keys(g)) g[k].sort((a, b) => a.titulo.localeCompare(b.titulo, "es"));
  return g;
};
const tabla = (lista) =>
  "| fichero | Título | Autor | Año |\n|---|---|---|---|\n" +
  lista.map((f) => `| \`${f.id}.png\` | ${f.titulo} | ${f.autor} | ${f.ano < 0 ? `${-f.ano} a. C.` : f.ano} |`).join("\n");

const hoy = new Date().toISOString().slice(0, 10);
let s = `# Portadas que faltan

Al ${hoy}: **${fichas.length} libros** en el catálogo, **${conCubierta.size} con cubierta tuya**, **${faltan.length} sin ella**.

## Cómo tiene que ser

- PNG a **1024 × 1536** (2:3 exacto), y el nombre del fichero es **el id** de la
  primera columna. Con eso entra sola con \`scripts/mete-cubiertas.mjs\`.
- Como las ${conCubierta.size} que ya hay: **título, autor y un dibujo** que cuente el libro.
  El dibujo es lo que la distingue de una portada genérica.
- Si además cabe una frase corta que prometa algo, mejor; pero no hace falta.

> El 25 de agosto se retiraron 81 de tus portadas creyendo que les faltaba
> mensaje. Estaban todas ilustradas y estaban bien. Se devolvieron el mismo día
> y no se perdió ninguna. **Ninguna portada se retira sin que tú lo digas.**

---

# BLOQUE 1 — ${ya.length} que YA SE PUEDEN LEER y salen sin portada tuya

Son los que más se notan: alguien los abre hoy, lee el resumen entero y no ve
nada tuyo en la cubierta. Si hay que empezar por algún sitio, es por aquí.
`;
const g1 = porCat(ya);
for (const c of ORDEN) if (g1[c]) s += `\n## ${c} — ${g1[c].length}\n\n${tabla(g1[c])}\n`;

s += `\n---\n\n# BLOQUE 2 — ${luego.length} que todavía no tienen resumen escrito\n\nEstos aún no se pueden leer, así que no corren tanta prisa. Van aquí para que\nla lista esté completa y no haya que volver a preguntarla.\n`;
const g2 = porCat(luego);
for (const c of ORDEN) if (g2[c]) s += `\n## ${c} — ${g2[c].length}\n\n${tabla(g2[c])}\n`;

writeFileSync("PORTADAS-QUE-FALTAN.md", s);
console.log(`${conCubierta.size} dibujadas · ${faltan.length} faltan (${ya.length} ya legibles + ${luego.length} sin escribir) · ${fichas.length} en el catálogo`);
