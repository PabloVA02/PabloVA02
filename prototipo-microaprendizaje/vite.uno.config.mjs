import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  /* El sello de compilación. Sale en el pie del perfil y existe por un motivo
     práctico: cuando Pablo dice «no me sale el cambio», mirar esa línea zanja
     en un segundo si está viendo el simulador nuevo o uno que se le ha quedado
     en la caché del navegador. Ha pasado dos veces. */
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
    outDir: "dist-uno",
    assetsInlineLimit: Number.MAX_SAFE_INTEGER,   // las fotos, dentro del js
    cssCodeSplit: false,
    rollupOptions: { output: { inlineDynamicImports: true } },
  },
});
