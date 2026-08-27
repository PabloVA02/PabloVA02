import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/* ==========================================================================
   EL MIRADOR DE LOS SHORTS: la compilación.

   Es la de `vite.uno.config.mjs` con dos cambios, y los dos son el asunto:

   · La entrada es `mirador.html`, que monta `main-shorts.tsx` y NO la app. Eso
     deja fuera los 400 resúmenes, las 295 cubiertas y la estantería entera, y
     el paquete pasa de veintiocho megas a uno y pico.
   · Y esos megas que se ahorran se los queda `movil.mjs` para meter las
     fotografías a tamaño y calidad de verdad, que es justo lo que Pablo quería
     mirar y lo único que el simulador de siempre no puede enseñar bien.

   El porqué está en `src/main-shorts.tsx`. Se compila y se empaqueta así:

       npx vite build --config vite.shorts.config.mjs
       node scripts/muro-demo.mjs 24 > /tmp/muro.json
       node scripts/movil.mjs --dist dist-shorts --entrada mirador.html \
            --muro /tmp/muro.json --ancho 1000 --calidad 0.82 --tope 14 \
            --pantalla shorts --salida shorts.html

   LA ENTRADA SE LLAMA `mirador.html` Y LA SALIDA `shorts.html`, Y NO AL REVÉS.
   El 27 de agosto se llamaban las dos igual: `movil.mjs --salida shorts.html`
   escribía encima de la entrada de vite, así que la compilación siguiente
   empaquetaba su propio resultado —una página de catorce megas con las fotos
   ya empotradas dentro— y el mirador se quedó congelado en el muro de aquel
   día. Dos nombres distintos y no puede volver a pasar.
   ========================================================================== */

export default defineConfig({
  define: {
    __SELLO__: JSON.stringify(
      new Date().toLocaleString("es-ES", {
        day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit",
      }),
    ),
  },
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist-shorts",
    rollupOptions: {
      input: "mirador.html",
      output: { inlineDynamicImports: true },
    },
    assetsInlineLimit: Number.MAX_SAFE_INTEGER,
    cssCodeSplit: false,
  },
});
