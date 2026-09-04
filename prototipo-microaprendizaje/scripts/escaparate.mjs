/* ==========================================================================
   COMPILAR EL SIMULADOR CON EL CATÁLOGO RECORTADO, Y DEJARLO COMO ESTABA

       node scripts/escaparate.mjs            la app entera -> movil.html
       node scripts/escaparate.mjs --mirador  el muro       -> shorts.html

   Y `--delante <serie>` saca ese short al principio del muro, solo en esta
   compilación:

       node scripts/escaparate.mjs --delante como-funciona-un-ascensor

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
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const AQUI = fileURLToPath(new URL("..", import.meta.url));
const CATALOGO = "src/historias/curiosidades.ts";
const mirador = process.argv.includes("--mirador");
/* `maxBuffer` NO ES OPCIONAL AQUÍ. Por defecto execFileSync corta la salida en
   1 MB y lanza ENOBUFS, y el catálogo entero pasó de ese megabyte el 1 de
   septiembre con el tomo 9 dentro. Como quien pasaba de largo era `escribe(false)`
   —la restauración del `finally`—, el fallo dejaba en disco el catálogo
   RECORTADO: la app de verdad se quedaba sin los shorts de la vitrina y nada
   avisaba. Se descubrió contando entradas, no por un error en pantalla. */
const corre = (orden, args) =>
  execFileSync(orden, args, { cwd: AQUI, stdio: ["ignore", "pipe", "inherit"], maxBuffer: 512 * 1024 * 1024 });

/* `--delante <serie>` se le pasa tal cual a catalogo.mjs y saca ese short al
   principio del muro. Solo en el catálogo recortado —el del simulador—: el que
   se restaura al final va SIEMPRE sin él, para que un apaño de una tarde no se
   quede escrito en el repositorio. Se puede repetir. */
const DELANTE = process.argv.reduce(
  (l, a, i) => (a === "--delante" && process.argv[i + 1] ? [...l, "--delante", process.argv[i + 1]] : l),
  [],
);

const escribe = (conVitrina) => {
  const args = ["scripts/catalogo.mjs", ...(conVitrina ? ["--vitrina", ...DELANTE] : [])];
  writeFileSync(new URL(CATALOGO, `file://${AQUI}`), corre("node", args));
};

/* PRIMERO SE COMPRUEBA QUE EL CATÁLOGO ESTÉ ENTERO, y no es paranoia: el 2 de
   septiembre el contenedor se quedó sin memoria y mató este guion a media
   compilación. Un `finally` protege de una excepción, no de que te maten el
   proceso, así que el catálogo RECORTADO se quedó en disco: 126 shorts en vez
   de 225. No dio ningún error, y lo que lo destapó fue que las comprobaciones
   del paginado midieran once temas en vez de quince.

   Así que al arrancar se mira cuántos hay y, si son menos de los que debería,
   se restaura antes de tocar nada. Una carrera muerta se cura sola en la
   siguiente en vez de esperar a que alguien se dé cuenta. */
const cuenta = () =>
  (readFileSync(new URL(CATALOGO, `file://${AQUI}`), "utf8").match(/^ {4}id: "/gm) ?? []).length;
const recorte = JSON.parse(readFileSync(new URL("assets/vitrina.json", `file://${AQUI}`), "utf8")).fuera.length;
if (cuenta() <= recorte) {
  console.error(`El catálogo estaba recortado (${cuenta()} shorts). Se restaura antes de empezar.`);
  escribe(false);
  console.error(`  restaurado: ${cuenta()} shorts`);
}

try {
  escribe(true);
  corre("npx", ["vite", "build", "--config", mirador ? "vite.shorts.config.mjs" : "vite.artefacto.config.mjs"]);
  const comunes = ["scripts/movil.mjs", "--muro", "/tmp/muro.json"];
  const propios = mirador
    ? ["--dist", "dist-shorts", "--pantalla", "shorts", "--ancho", "1000", "--calidad", "0.84",
       /* 930 daba 22,1 MB con la tanda del 31 dentro; 680 sale por 14,6. El
          mirador es donde Pablo mira cómo queda una foto, así que aquí el
          ancho se estira todo lo que deja el tope, no más. */
       "--tope", "14", "--portadas-ancho", "680", "--salida", "shorts.html",
       "--titulo", "El muro de shorts, con las fotos de verdad"]
    /* Los anchos de aquí abajo son los que hacen que quepa, y hay que volver a
       bajarlos cada vez que crece el catálogo. Historial: 232/530 daban 19,1
       MB el 31 de agosto; 175/355 dejaron aquello en 15,1; y el 4 de
       septiembre, con 350 cubiertas ya escritas, esos mismos 175/355 volvían a
       salir por 16,6 —por encima del tope de 16—. Con 168/320 sale por 14,1.
       La otra salida, y es la que Pablo autorizó primero, es ampliar
       assets/vitrina.json y dejar más shorts fuera del simulador. */
    : ["--dist", "dist-artefacto", "--ancho", "800", "--calidad", "0.8", "--tope", "8",
       "--cubiertas-ancho", "168", "--cubiertas-calidad", "0.70", "--portadas-ancho", "320"];
  process.stdout.write(corre("node", [...comunes, ...propios]));
} finally {
  /* PASE LO QUE PASE, el catálogo vuelve a estar entero. Y se COMPRUEBA: la
     primera versión daba por hecho que escribir había funcionado, y cuando
     dejó de funcionar no lo dijo nadie. */
  escribe(false);
  const entero = readFileSync(new URL(CATALOGO, `file://${AQUI}`), "utf8");
  const cuantos = (entero.match(/^ {4}id: "/gm) ?? []).length;
  const recorte = JSON.parse(readFileSync(new URL("assets/vitrina.json", `file://${AQUI}`), "utf8")).fuera.length;
  if (cuantos <= recorte) {
    console.error(`EL CATÁLOGO SE HA QUEDADO RECORTADO: ${cuantos} shorts. Vuelve a correr\n    node scripts/catalogo.mjs > ${CATALOGO}\nantes de compilar nada para el móvil.`);
    process.exitCode = 1;
  } else {
    console.log(`catálogo restaurado con todos los shorts (${cuantos})`);
  }
}
