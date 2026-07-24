import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Libro } from "./Biblioteca";
import { Portada } from "./Biblioteca";
import { GlyphBack, GlyphCandado, GlyphTick } from "./glyphs";
import { spring, springPop, springSoft, springTight } from "./motion";

/* ==========================================================================
   El camino de capítulos.

   Una serpiente vertical de nodos, uno por capítulo. Tres estados y cada uno
   se distingue por FORMA y no solo por color, que es lo que permite leerlo
   de un vistazo: completado lleva marca, el actual está elevado y con aro
   latiendo, y el bloqueado va hundido y apagado.

   Las coordenadas de los nodos y las del trazo que los une salen del mismo
   sistema (340 de ancho), así que la curva pasa exactamente por el centro de
   cada nodo por muy estrecha que sea la pantalla.
   ========================================================================== */

const ANCHO = 340;
const PASO = 132;
const MARGEN_SUP = 92;

/** Serpiente: la amplitud se alterna para que no quede un zigzag mecánico. */
function posicion(i: number) {
  const x = 170 + Math.sin(i * 1.05) * 72;
  const y = MARGEN_SUP + i * PASO;
  return { x, y };
}

function trazo(n: number) {
  if (n === 0) return "";
  let d = "";
  for (let i = 0; i < n; i++) {
    const p = posicion(i);
    if (i === 0) {
      d += `M ${p.x} ${p.y}`;
    } else {
      const a = posicion(i - 1);
      // Curva en S entre nodo y nodo: nunca una recta, nunca un pico.
      d += ` C ${a.x} ${a.y + PASO * 0.55}, ${p.x} ${p.y - PASO * 0.55}, ${p.x} ${p.y}`;
    }
  }
  return d;
}

type Props = {
  libro: Libro;
  /** Cuántos capítulos hay completados. El siguiente es el actual. */
  completados: number;
  onVolver: () => void;
  onEmpezar: (indice: number) => void;
};

export function Camino({ libro, completados, onVolver, onEmpezar }: Props) {
  const reducido = useReducedMotion();
  const scroll = useRef<HTMLDivElement>(null);
  const capitulos = libro.capitulos;
  const alto = MARGEN_SUP + (capitulos.length - 1) * PASO + 130;
  const actual = Math.min(completados, capitulos.length - 1);

  // Al entrar, el camino se coloca sobre el capítulo actual: en un libro
  // largo, obligar a buscarlo desplazándose sería justo lo tedioso que se
  // quiere evitar.
  useEffect(() => {
    const caja = scroll.current;
    if (!caja) return;
    const destino = Math.max(0, MARGEN_SUP + actual * PASO - caja.clientHeight / 2);
    caja.scrollTo({ top: destino, behavior: reducido ? "auto" : "smooth" });
  }, [actual, reducido]);

  return (
    <motion.div
      className="camino"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: spring }}
      exit={{ opacity: 0, transition: { duration: 0.18 } }}
    >
      <header className="camino-cabecera">
        <button className="icon-btn" onClick={onVolver} aria-label="Volver">
          <GlyphBack />
        </button>
        <div className="camino-titulo">
          <p className="camino-libro">{libro.titulo}</p>
          <p className="camino-progreso">
            {completados} de {capitulos.length} capítulos
          </p>
        </div>
        <Portada libro={libro} tamano={40} />
      </header>

      <div className="camino-barra">
        <motion.div
          className="camino-relleno"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: completados / capitulos.length }}
          transition={{ ...springTight, delay: 0.2 }}
        />
      </div>

      <div className="camino-scroll" ref={scroll}>
        <div className="camino-lienzo" style={{ height: alto }}>
          {/* Trazo que une los nodos. `vector-effect` mantiene el grosor
              aunque el lienzo se estire para ajustarse al ancho real. */}
          <svg
            className="camino-trazo"
            viewBox={`0 0 ${ANCHO} ${alto}`}
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d={trazo(capitulos.length)}
              fill="none"
              stroke="rgba(242,236,225,0.14)"
              strokeWidth="14"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <motion.path
              d={trazo(capitulos.length)}
              fill="none"
              stroke={libro.color}
              strokeWidth="14"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: completados / Math.max(capitulos.length - 1, 1) }}
              transition={{ ...springSoft, delay: 0.25 }}
            />
          </svg>

          {capitulos.map((cap, i) => {
            const p = posicion(i);
            const hecho = i < completados;
            const esActual = i === actual && !hecho;
            const bloqueado = i > completados;

            return (
              <div
                key={cap.titulo}
                className="nodo-hueco"
                style={{ left: `${(p.x / ANCHO) * 100}%`, top: p.y }}
              >
                {esActual && (
                  <motion.div
                    className="nodo-globo"
                    initial={{ opacity: 0, y: 8, scale: 0.9 }}
                    animate={
                      reducido
                        ? { opacity: 1, y: 0, scale: 1 }
                        : { opacity: 1, y: [0, -5, 0], scale: 1 }
                    }
                    transition={
                      reducido
                        ? { ...spring, delay: 0.6 }
                        : {
                            opacity: { ...spring, delay: 0.6 },
                            scale: { ...springPop, delay: 0.6 },
                            y: { duration: 2.1, repeat: Infinity, ease: "easeInOut", delay: 0.9 },
                          }
                    }
                  >
                    Empezar
                  </motion.div>
                )}

                {/* Aro que late solo bajo el capítulo actual */}
                {esActual && !reducido && (
                  <motion.span
                    className="nodo-aro"
                    style={{ borderColor: libro.color }}
                    animate={{ scale: [1, 1.35, 1], opacity: [0.55, 0, 0.55] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
                  />
                )}

                <motion.button
                  className="nodo"
                  data-estado={hecho ? "hecho" : esActual ? "actual" : "bloqueado"}
                  style={{ background: hecho || esActual ? libro.color : undefined }}
                  onClick={() => !bloqueado && onEmpezar(i)}
                  disabled={bloqueado}
                  whileTap={bloqueado ? {} : { scale: 0.92, y: 3 }}
                  initial={{ opacity: 0, scale: 0.5, y: 14 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ ...springPop, delay: 0.2 + i * 0.08 }}
                  aria-label={`Capítulo ${i + 1}: ${cap.titulo}${bloqueado ? " (bloqueado)" : ""}`}
                >
                  {hecho ? <GlyphTick /> : bloqueado ? <GlyphCandado /> : <span>{i + 1}</span>}
                </motion.button>

                <motion.p
                  className="nodo-nombre"
                  data-bloqueado={bloqueado}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...spring, delay: 0.3 + i * 0.08 }}
                >
                  {cap.titulo}
                </motion.p>
              </div>
            );
          })}

          {/* Meta: cierra el camino para que no acabe en el aire */}
          <motion.div
            className="camino-meta"
            style={{ top: alto - 76 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...springPop, delay: 0.3 + capitulos.length * 0.08 }}
          >
            <span className="meta-copa">◆</span>
            <p>Libro completo</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
