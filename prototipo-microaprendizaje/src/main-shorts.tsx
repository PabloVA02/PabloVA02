import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MuroShorts } from "./Shorts";
import "./styles.css";

/* ==========================================================================
   EL MIRADOR DE LOS SHORTS

   Pablo, el 27 de agosto: «hazme un simulador nuevo de móvil para ver cómo
   saldría exactamente y hacerme una idea exacta de cómo lo vería el usuario…
   conserva el simulador que tenemos ahora, la app entera en un móvil, que es
   para el resto de cosas. Y añade la imagen en la parte de los shorts para ver
   cómo queda».

   POR QUÉ HACE FALTA UN SEGUNDO SIMULADOR Y NO VALE EL DE SIEMPRE. El de
   siempre es la app entera en un solo fichero HTML, y ese fichero tiene un
   tope de 16 MB para poder publicarlo. Dentro van los 400 resúmenes, las 295
   cubiertas de Pablo y los 757 shorts, y con todo eso dentro a las fotografías
   les quedan 0,08 MB: caben 24 de 760, y encogidas a 200 puntos de ancho con
   la calidad al 45 %. O sea que el simulador enseña bien TODO menos justo lo
   que Pablo quería mirar.

   Este de aquí no lleva los libros. Ni los resúmenes, ni las cubiertas, ni la
   estantería: solo el muro. Y esos catorce megas que se ahorran se convierten
   en fotografías a tamaño y calidad de verdad. Es el mismo reparto de siempre
   —lo que no está dentro es sitio para lo que sí—, decidido al revés.

   LO QUE NO HACE, y hay que saberlo antes de mirarlo: no tiene barra de abajo,
   ni perfil, ni estantería, ni se puede salir del muro. No es la app: es una
   ventana a una parte de la app, hecha para juzgar una cosa concreta.

   La app de verdad no tiene ninguno de estos dos problemas: no lleva las fotos
   dentro, se las pide a Wikimedia según van apareciendo, y las pide del tamaño
   que necesita la pantalla. Ver `docs/` y `FOTOS.md`.
   ========================================================================== */

function Mirador() {
  return (
    <div className="stage">
      {/* Sin barra de la hora, igual que en la app: el muro es la pantalla
          entera, de borde a borde. */}
      <div className="shell">
        <MuroShorts onLeido={() => {}} />
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Mirador />
  </StrictMode>,
);
