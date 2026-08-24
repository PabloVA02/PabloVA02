import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

/* La app COMO PÁGINA WEB, para verla entera y sin topes.
 *
 * POR QUÉ EXISTE
 *
 * El simulador que se publica como artefacto tiene un límite duro de 16 MB, y
 * ahí dentro no caben las 760 fotografías de los shorts: entran las primeras
 * setenta y pico y las demás salen con su cartel. Pablo lo preguntó el 24 de
 * agosto: «¿no existe ninguna forma de ir viendo la aplicación entera?».
 *
 * Sí: publicarla como una página normal. Ahí las fotos se piden a Wikimedia
 * Commons según hacen falta —que es como funciona la app de verdad—, así que
 * no hay nada que empotrar y no hay ningún tope.
 *
 * QUÉ CAMBIA RESPECTO DE `vite.config.ts`
 *
 * Solo dos cosas, y las dos son de alojamiento:
 *
 *   base: "./"   las rutas van relativas, no desde la raíz del dominio. Sin
 *                esto, servida desde una subcarpeta —que es lo que hace
 *                GitHub Pages en un repositorio de proyecto— la página carga
 *                el HTML y ningún recurso, y sale en blanco.
 *   outDir       `docs/`, que es una de las dos carpetas que GitHub Pages
 *                sabe servir sin ninguna configuración adicional.
 *
 *   npx vite build --config vite.web.config.mjs
 */
/* GitHub Pages pasa lo que sirve por Jekyll salvo que encuentre este fichero,
   y Jekyll se salta las carpetas que empiezan por guion bajo. Aquí no las hay,
   pero el aviso cuesta cero y la sorpresa costaría una tarde. Va como paso de
   la compilación porque `emptyOutDir` vacía `docs/` y se lo llevaba por
   delante cada vez. */
const nojekyll = {
  name: "nojekyll",
  closeBundle() {
    writeFileSync(join(process.cwd(), "docs", ".nojekyll"), "");
  },
};

export default defineConfig({
  plugins: [react(), nojekyll],
  base: "./",
  build: {
    assetsInlineLimit: 0,
    outDir: "docs",
    emptyOutDir: true,
  },
});
