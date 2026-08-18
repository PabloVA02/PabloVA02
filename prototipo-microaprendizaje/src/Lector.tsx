/* ==========================================================================
   El lector por páginas.

   Calcado de la grabación que pasó Pablo. Lo que define la pantalla es que
   NO hay adornos: texto en serifa sobre negro, del ancho de la pantalla menos
   dieciséis puntos a cada lado, y abajo una fila con la flecha, la cuenta y
   la otra flecha. Nada más. Todo lo que no sea leer se ha quitado.

   Las medidas salen del vídeo, a 750 × 1624, o sea la pantalla a doble
   densidad: el cuerpo va a 19 con 27 de interlínea —54 píxeles de la
   grabación—, el margen es de 16,5 y la caja del rayo sangra el texto hasta
   los 60.

   En la última página, en vez de la flecha, va la pregunta y el botón de
   terminar, que es lo que cierra el resumen.
   ========================================================================== */

import { useState } from "react";
import { motion } from "framer-motion";
import { GlyphBack, GlyphClose } from "./glyphs";
import { spring } from "./motion";
import type { Bloque, PaginaLibro } from "./libros/paginas";

function Rayo() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" fill="currentColor" />
    </svg>
  );
}

function Comillas() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
      <path
        d="M9.5 5.5c-3 1.6-4.8 4.2-4.8 7.4 0 3 1.8 5.1 4.2 5.1 2 0 3.5-1.5 3.5-3.4 0-1.9-1.3-3.3-3.1-3.3-.3 0-.6 0-.9.1.3-1.7 1.5-3.2 3.3-4.2l-2.2-1.7zm9.6 0c-3 1.6-4.8 4.2-4.8 7.4 0 3 1.8 5.1 4.2 5.1 2 0 3.5-1.5 3.5-3.4 0-1.9-1.3-3.3-3.1-3.3-.3 0-.6 0-.9.1.3-1.7 1.5-3.2 3.3-4.2l-2.2-1.7z"
        fill="currentColor"
      />
    </svg>
  );
}

function PintaBloque({ b }: { b: Bloque }) {
  switch (b.b) {
    case "rotulo":
      return <h2 className="lee-rotulo">{b.texto}</h2>;
    case "texto":
      return <p className="lee-parrafo">{b.texto}</p>;
    case "lista":
      return (
        <ul className="lee-lista">
          {b.puntos.map((p) => (
            <li key={p.fuerte}>
              <b>{p.fuerte}:</b> {p.texto}
            </li>
          ))}
        </ul>
      );
    case "idea":
      return (
        <div className="lee-idea">
          <span className="lee-rayo" aria-hidden>
            <Rayo />
          </span>
          <p>{b.texto}</p>
        </div>
      );
    case "cita":
      return (
        <figure className="lee-cita">
          <span className="lee-comillas" aria-hidden>
            <Comillas />
          </span>
          <div>
            <blockquote>{b.frase}</blockquote>
            <figcaption>{b.autor}</figcaption>
          </div>
        </figure>
      );
    case "prueba":
      return (
        <div className="lee-prueba">
          <h3>Prueba esto</h3>
          <ul>
            {b.puntos.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      );
  }
}

export function Lector({
  titulo,
  paginas,
  onCerrar,
  onTerminar,
}: {
  titulo: string;
  paginas: PaginaLibro[];
  onCerrar: () => void;
  onTerminar: () => void;
}) {
  const [i, setI] = useState(0);
  /* El texto del libro llega de un trozo aparte y puede tardar un instante.
     Sin esta guarda, `paginas[i]` es undefined y la pantalla revienta. */
  const hay = paginas.length > 0;
  const n = Math.min(i, Math.max(0, paginas.length - 1));
  const ultima = hay && n === paginas.length - 1;

  /* Cada página empieza arriba. Sin esto se entra en la siguiente por la
     mitad, que es lo que hace que un lector paginado se sienta roto. */
  function ir(n: number) {
    setI(n);
    document.querySelector(".lee-scroll")?.scrollTo({ top: 0 });
  }

  return (
    <motion.div
      className="lector"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: spring }}
      exit={{ opacity: 0, transition: { duration: 0.18 } }}
    >
      <header className="lee-barra">
        <button className="icon-btn" onClick={onCerrar} aria-label="Cerrar">
          <GlyphClose />
        </button>
        <span className="lee-libro">{titulo}</span>
        <span className="lee-hueco" />
      </header>

      <div className="lee-scroll">
        {/* La página no se anima al entrar, y es a propósito. La referencia
            cambia de página en seco; además, una entrada desde opacidad cero
            deja la página en blanco si la animación no llega a arrancar, que
            es un modo de fallo caro para lo poco que aporta. */}
        {hay ? (
          <article key={n} className="lee-pagina">
            {paginas[n].bloques.map((b, k) => (
              <PintaBloque key={k} b={b} />
            ))}
          </article>
        ) : (
          <p className="lee-parrafo lee-esperando">Abriendo el resumen…</p>
        )}

        {/* El pie va DENTRO del desplazamiento y no fijo abajo: en la
            referencia se llega a él leyendo, no está siempre encima del
            texto comiéndose dos líneas. */}
        {!hay ? null : ultima ? (
          <div className="lee-final">
            <span>¿Leíste hasta el final?</span>
            <button className="lee-terminar" onClick={onTerminar}>
              Finalizar resumen
            </button>
          </div>
        ) : (
          <nav className="lee-paso">
            <button
              className="lee-flecha"
              onClick={() => ir(n - 1)}
              disabled={n === 0}
              aria-label="Página anterior"
            >
              <GlyphBack />
            </button>
            <span className="lee-cuenta">
              {n + 1} de {paginas.length}
            </span>
            <button
              className="lee-flecha lee-flecha-der"
              onClick={() => ir(n + 1)}
              aria-label="Página siguiente"
            >
              <GlyphBack />
            </button>
          </nav>
        )}
      </div>
    </motion.div>
  );
}
