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

     Desde el 28 de agosto por la noche los `.md` llegan con CABECERA, entre
     dos `---` al principio, y ahí va lo que no es texto: `titulo`,
     `categoria`, `serie`, `orden`, `portada`, `credito_portada` y
     `frase_portada`. Está descrito en `referencia/textos-de-pablo/FORMATO.md`,
     que lo escribió él. Los ficheros viejos no la llevan y siguen leyéndose:
     si no hay cabecera, se saca lo que se pueda del cuerpo.

     El identificador del tema sale de `portada` sin extensión, no del nombre
     del fichero. Es la regla de las portadas del `CLAUDE.md` —«el nombre,
     idéntico al del tema»— leída al revés: si él dice cómo se llama la imagen,
     así se llama el tema.

     # Título          el título del tema
     ## Sección        un bloque `rotulo`
     párrafo           un bloque `parrafo`
     • viñeta          se juntan en un bloque `lista`
     > ⚡ …            un bloque `rayo`
     > ❞ …            una cita textual; la línea `> — Autor` que va detrás es
                      su firma y se pega a ella, no es un párrafo aparte
     > 💡 …            un dato curioso al margen, de los que empiezan por
                       «¿Sabías que…?». Bloque `dato`. NO es un rayo: el rayo
                       es la conclusión de la sección y este es una nota
                       lateral, así que no lleva su caja ni su icono.
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

/* La cabecera, si la hay. No se usa un analizador de YAML entero porque aquí
   no hay YAML: son siete líneas de `clave: "valor"` sin anidar ni listas. */
function leeCabecera(md) {
  const m = /^---\n([\s\S]*?)\n---\n/.exec(md);
  if (!m) return [{}, md];
  const campos = {};
  for (const linea of m[1].split("\n")) {
    const c = /^(\w+):\s*(.*)$/.exec(linea.trim());
    if (!c) continue;
    campos[c[1]] = c[2].replace(/^"(.*)"$/, "$1").trim();
  }
  return [campos, md.slice(m[0].length)];
}

export function leeTema(ruta) {
  const [cabecera, md] = leeCabecera(readFileSync(ruta, "utf8"));
  const titulo = cabecera.titulo || /^# (.+)$/m.exec(md)?.[1]?.trim() || "";
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
      /* EL DATO CURIOSO. Es un párrafo con una marca, no una caja: Pablo lo
         dejó a criterio —«puede ir como párrafo normal o con estilo propio»— y
         lo que NO es, lo dice él mismo: «no es un insight». Así que se queda
         donde estaba, en el hilo del texto, y lo único que cambia es que su
         «¿Sabías que…?» se pinta en el color del tema. */
      if (/^>\s*💡/.test(l)) {
        bloques.push({ b: "dato", texto: marcas(l.replace(/^>\s*💡\s*/, "").trim()) });
        continue;
      }
      /* UNA CITA TEXTUAL, que no es lo mismo que un rayo. El rayo es la
         conclusión de la pantalla, escrita por nosotros; la cita son las
         palabras de otro, entrecomilladas y firmadas. Llegaron el 28 de agosto
         con «Cómo funciona la gravedad» —el «no invento hipótesis» de
         Newton— y con «Por qué se corta la leche». */
      if (/^>\s*❞/.test(l)) {
        bloques.push({ b: "cita", texto: marcas(l.replace(/^>\s*❞\s*/, "").trim()) });
        continue;
      }
      /* La firma va en su propia línea, detrás de la cita, y NO es un párrafo:
         se pega a la cita que acaba de salir. Si llegara suelta —sin cita
         delante— se deja como párrafo, que es lo menos malo. */
      if (/^>\s*—/.test(l)) {
        const ultimo = bloques[bloques.length - 1];
        if (ultimo?.b === "cita" && !ultimo.autor) {
          ultimo.autor = marcas(l.replace(/^>\s*—\s*/, "").trim());
          continue;
        }
      }
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
  /* El id sale de `portada` sin extensión; sin cabecera, del nombre del
     fichero, que es como se leían los de antes. */
  const id = cabecera.portada
    ? cabecera.portada.replace(/\.[a-z0-9]+$/i, "")
    : basename(ruta, ".md");
  return { id, titulo, bloques, encargos, cabecera };
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
