import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/* ==========================================================================
   La compilación para el simulador que se publica.

   Es la de `vite.uno.config.mjs` menos una línea: aquí NO se fuerza
   `inlineDynamicImports`. La diferencia es todo el asunto.

   Los resúmenes de los libros se piden con `import()` desde `libros/indice.ts`
   precisamente para no descargarlos hasta que alguien abre uno. Al forzar el
   empotrado, los doscientos entraban en el fichero único y se comían siete de
   los doce megas. Dejándolos como trozos aparte, el trozo de entrada baja a
   cuatro y medio, y esos siete megas y medio se convierten en sitio para
   fotografías: es la diferencia entre publicar cincuenta shorts ilustrados y
   publicar ciento ochenta.

   Lo que se pierde: al abrir un libro, el trozo con su texto no está en la
   página y no hay red para ir a buscarlo. La estantería se pinta igual, porque
   los títulos y las portadas salen de `libros/meta.ts`, que sí va dentro. Es
   un mirador de los shorts, y esa es la parte que se acepta que no funcione.
   ========================================================================== */

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist-artefacto",
    assetsInlineLimit: Number.MAX_SAFE_INTEGER,
    cssCodeSplit: false,
  },
});
