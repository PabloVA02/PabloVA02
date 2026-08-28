/* ==========================================================================
   DE LOS `.md` DE PABLO A LOS BLOQUES DE UN SHORT

       node scripts/temas.mjs referencia/textos-de-pablo/*.md

   Escribe `src/historias/curiosidades.ts` con el texto en BLOQUES SEGUIDOS, no
   en páginas. El reparto en pantallas ya no se hace aquí: lo hace la app al
   pintar, midiendo el móvil de quien lee. Es la regla 3 de
   `.claude/skills/paginado-shorts/SKILL.md`, y la puso Pablo:

     «Divide el contenido en páginas midiendo en tiempo de ejecución:
      renderiza los párrafos en un contenedor oculto con el mismo ancho y
      tipografía, acumula alturas, y corta cuando el siguiente no quepa.»

   Antes había aquí un `reparte.mjs` que abría un navegador, medía y escribía
   páginas fijas. Funcionaba y estaba mal: unas páginas calculadas en un móvil
   de 375 no valen en uno de 430 ni cuando alguien sube el tamaño de letra del
   sistema. Se ha ido.

   QUÉ SE LEE DE SU FORMATO

     # Título          el título del tema
     ## Sección        un bloque `rotulo`
     párrafo           un bloque `parrafo`
     • viñeta          se juntan en un bloque `lista`
     > ⚡ …            un bloque `rayo`
     > 🖼️ …            NO es texto: es el encargo de una imagen. Se guarda
                       aparte, en `encargos`, y no se pinta.
     **negrita**       <strong>;  *cursiva* → <em>
   ========================================================================== */
import { readFileSync, writeFileSync } from "node:fs";
import { basename } from "node:path";

const marcas = (t) =>
  t
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(?<!\*)\*([^*]+?)\*(?!\*)/g, "<em>$1</em>");

export function leeTema(ruta) {
  const md = readFileSync(ruta, "utf8");
  const titulo = /^# (.+)$/m.exec(md)?.[1]?.trim() ?? "";
  const bloques = [];
  const encargos = [];
  let vinetas = [];
  const cierraLista = () => {
    if (!vinetas.length) return;
    bloques.push({ b: "lista", puntos: vinetas.map(marcas) });
    vinetas = [];
  };
  for (const [i, tramo] of md.split(/\n## /).entries()) {
    const lineas = tramo.split("\n").map((l) => l.trim());
    if (i === 0) continue;
    cierraLista();
    bloques.push({ b: "rotulo", texto: marcas(lineas[0]) });
    for (const l of lineas.slice(1)) {
      if (!l) continue;
      if (l.startsWith("•")) { vinetas.push(l.slice(1).trim()); continue; }
      cierraLista();
      if (l.startsWith("> ⚡")) { bloques.push({ b: "rayo", texto: marcas(l.slice(3).trim()) }); continue; }
      /* El encargo de imagen no es texto de la historia: es una nota para
         quien la ilustre. Se guarda y no se pinta. */
      if (/^>\s*🖼/.test(l)) {
        encargos.push(l.replace(/^>\s*🖼️?\s*/, "").replace(/\*\*/g, "").trim());
        continue;
      }
      bloques.push({ b: "parrafo", texto: marcas(l) });
    }
  }
  cierraLista();
  return { id: basename(ruta, ".md"), titulo, bloques, encargos };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  for (const ruta of process.argv.slice(2)) {
    const t = leeTema(ruta);
    const cuenta = {};
    for (const b of t.bloques) cuenta[b.b] = (cuenta[b.b] ?? 0) + 1;
    console.log(`${t.id.padEnd(32)} ${t.titulo}`);
    console.log(`   ${Object.entries(cuenta).map(([k, v]) => `${v} ${k}`).join(" · ")} · ${t.encargos.length} encargos de imagen`);
  }
}
