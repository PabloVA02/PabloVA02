/* Andamio de un solo uso para mirar la pantalla de cierre sin recorrer la app.
   No entra en el paquete: se borra al terminar. */
import { createRoot } from "react-dom/client";
import { FinResumen } from "./src/FinResumen";
import { PAGINAS } from "./src/libros/paginas";
import { LIBROS_RESUMEN } from "./src/libros/puente";
import "./src/styles.css";

const id = new URLSearchParams(location.search).get("id") ?? "messi-ronaldo";
const libro = LIBROS_RESUMEN.find((l) => l.id === id)!;
const ideas = (PAGINAS[id] ?? []).reduce(
  (t, p) => t + p.bloques.filter((b) => b.b === "idea").length, 0);

createRoot(document.getElementById("root")!).render(
  <div className="stage"><div className="shell">
    <FinResumen
      id={libro.id}
      titulo={libro.titulo}
      autor={libro.autor}
      categoria={libro.categoria}
      color={libro.color}
      minutosAudio={libro.minutos ?? 0}
      ideas={ideas}
      onCerrar={() => {}}
    />
  </div></div>,
);
