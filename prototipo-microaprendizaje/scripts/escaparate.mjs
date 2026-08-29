/* ==========================================================================
   COMPILAR EL SIMULADOR CON EL CATÁLOGO RECORTADO, Y DEJARLO COMO ESTABA

       node scripts/escaparate.mjs            la app entera -> movil.html
       node scripts/escaparate.mjs --mirador  el muro       -> shorts.html

   POR QUÉ EXISTE. `movil.html` es un solo fichero HTML con las portadas
   empotradas y un tope de publicación de 16 MB. Pasadas unas sesenta portadas
   no cabe, y seguir bajando la calidad estropea justo lo que Pablo mira. Él lo
   resolvió: «si no caben borras las que teníamos ya, que esas ya he comprobado
   que están bien». Los que se quedan fuera están en `assets/vitrina.json`.

   Y POR QUÉ UN GUION Y NO TRES ÓRDENES SUELTAS. El recorte se hace escribiendo
   `src/historias/curiosidades.ts` con menos shorts, compilando, y volviendo a
   escribirlo entero. Si el último paso se olvida —o si algo falla en medio— el
   repositorio se queda con el catálogo recortado y la app de verdad pierde
   once shorts sin que nadie se entere. Aquí la restauración va en un `finally`
   y ocurre pase lo que pase.
   ========================================================================== */
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const AQUI = fileURLToPath(new URL("..", import.meta.url));
const CATALOGO = "src/historias/curiosidades.ts";
const mirador = process.argv.includes("--mirador");
const corre = (orden, args) =>
  execFileSync(orden, args, { cwd: AQUI, stdio: ["ignore", "pipe", "inherit"] });

const escribe = (conVitrina) => {
  const args = ["scripts/catalogo.mjs", ...(conVitrina ? ["--vitrina"] : [])];
  writeFileSync(new URL(CATALOGO, `file://${AQUI}`), corre("node", args));
};

try {
  escribe(true);
  corre("npx", ["vite", "build", "--config", mirador ? "vite.shorts.config.mjs" : "vite.artefacto.config.mjs"]);
  const comunes = ["scripts/movil.mjs", "--muro", "/tmp/muro.json"];
  const propios = mirador
    ? ["--dist", "dist-shorts", "--pantalla", "shorts", "--ancho", "1000", "--calidad", "0.84",
       "--tope", "14", "--portadas-ancho", "930", "--salida", "shorts.html",
       "--titulo", "El muro de shorts, con las fotos de verdad"]
    : ["--dist", "dist-artefacto", "--ancho", "800", "--calidad", "0.8", "--tope", "8",
       "--cubiertas-ancho", "232", "--cubiertas-calidad", "0.70", "--portadas-ancho", "530"];
  process.stdout.write(corre("node", [...comunes, ...propios]));
} finally {
  /* PASE LO QUE PASE, el catálogo vuelve a estar entero. */
  escribe(false);
  console.log("catálogo restaurado con todos los shorts");
}
