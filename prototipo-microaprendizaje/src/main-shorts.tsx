import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MuroShorts } from "./Shorts";
import { GlyphBiblioteca, GlyphLibros, GlyphLupa, GlyphRayo } from "./glyphs";
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

/**
 * La barra de pestañas, quieta.
 *
 * No es decoración ni un intento de simular la app: es que la hoja de texto
 * de un short se reserva 64 puntos abajo para esta barra, y sin ella el
 * mirador enseñaría una pantalla con 64 puntos de texto de más —o, si se le
 * quita la reserva, con 64 puntos de sitio que en la app no existen—. En los
 * dos casos lo que Pablo aprueba mirando el mirador no es lo que se ve luego,
 * que es justo lo contrario de para lo que pidió el mirador: «para hacerme
 * una idea exacta de cómo lo vería el usuario».
 *
 * Está copiada de `BarraPestanas` en `App.tsx` en vez de importada, y es la
 * decisión correcta aunque duela: importarla se trae la app entera detrás
 * —los 400 resúmenes, las cubiertas, la estantería— y el mirador existe
 * precisamente porque eso no cabe. Son veinte líneas sin estado ni lógica; lo
 * único que tienen que compartir con la barra de verdad es la hoja de
 * estilos, que sí es la misma.
 */
function BarraQuieta() {
  const tabs = [
    { id: "libros", nombre: "Libros", Icono: GlyphLibros },
    { id: "shorts", nombre: "Shorts", Icono: GlyphRayo },
    { id: "explorar", nombre: "Explorar", Icono: GlyphLupa },
    { id: "biblioteca", nombre: "Biblioteca", Icono: GlyphBiblioteca },
  ];
  return (
    <nav className="pestanas" aria-hidden>
      {tabs.map(({ id, nombre, Icono }) => (
        <span key={id} className="pestana" data-activa={id === "shorts"}>
          {id === "shorts" && <span className="pestana-pastilla" />}
          <span className="pestana-icono">
            <Icono tamano={22} />
          </span>
          <span className="pestana-nombre">{nombre}</span>
        </span>
      ))}
    </nav>
  );
}

function Mirador() {
  return (
    <div className="stage mirador">
      {/* Sin barra de la hora, igual que en la app: el muro es la pantalla
          entera, de borde a borde. */}
      <div className="shell">
        <MuroShorts onLeido={() => {}} />
        <BarraQuieta />
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Mirador />
  </StrictMode>,
);
