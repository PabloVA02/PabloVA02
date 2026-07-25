import { MEDITACIONES } from "./meditaciones";
import { SAPIENS } from "./sapiens";
import { MIL_NOVECIENTOS_OCHENTA_Y_CUATRO } from "./1984";
import { CATALOGO } from "./catalogo";
import type { Resumen } from "./tipos";

/* ==========================================================================
   El índice de resúmenes escritos.

   `comprobar()` es la red de seguridad del catálogo: cruza lo que dice el
   registro con lo que existe de verdad. Si un libro figura como «escrito» y
   no hay fichero, o al revés, aquí se ve. Sin esto, el catálogo se convierte
   en una lista de buenas intenciones a las dos semanas.
   ========================================================================== */

export const RESUMENES: Record<string, Resumen> = {
  meditaciones: MEDITACIONES,
  sapiens: SAPIENS,
  "1984": MIL_NOVECIENTOS_OCHENTA_Y_CUATRO,
};

export function comprobar() {
  const marcados = CATALOGO.filter((f) => f.estado === "escrito").map((f) => f.id);
  const existentes = Object.keys(RESUMENES);
  return {
    marcadosSinFichero: marcados.filter((id) => !existentes.includes(id)),
    ficheroSinMarcar: existentes.filter((id) => !marcados.includes(id)),
  };
}
