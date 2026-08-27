import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/* ==========================================================================
   EL MIRADOR DE LOS SHORTS: la compilación.

   Es la de `vite.uno.config.mjs` con dos cambios, y los dos son el asunto:

   · La entrada es `shorts.html`, que monta `main-shorts.tsx` y NO la app. Eso
     deja fuera los 400 resúmenes, las 295 cubiertas y la estantería entera, y
     el paquete pasa de veintiocho megas a uno y pico.
   · Y esos megas que se ahorran se los queda `movil.mjs` para meter las
     fotografías a tamaño y calidad de verdad, que es justo lo que Pablo quería
     mirar y lo único que el simulador de siempre no puede enseñar bien.

   El porqué está en `src/main-shorts.tsx`. Se compila y se empaqueta así:

       npx vite build --config vite.shorts.config.mjs
       node scripts/orden-fotos.mjs 760 > /tmp/orden-fotos.json
       node scripts/movil.mjs --dist dist-shorts --lista /tmp/orden-fotos.json \
            --ancho 1000 --calidad 0.82 --tope 14 --salida shorts.html
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
      input: "shorts.html",
      output: { inlineDynamicImports: true },
    },
    assetsInlineLimit: Number.MAX_SAFE_INTEGER,
    cssCodeSplit: false,
  },
});
