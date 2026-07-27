import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Libro } from "./Biblioteca";
import { Portada } from "./Biblioteca";
import { GlyphBack, GlyphCandado, GlyphCofre, GlyphTick, GlyphTrofeo } from "./glyphs";
import { spring, springPop, springSoft, springTight } from "./motion";

/* ==========================================================================
   El camino de capítulos.

   Una serpiente vertical de nodos, uno por capítulo. Tres estados y cada uno
   se distingue por FORMA y no solo por color, que es lo que permite leerlo
   de un vistazo: completado lleva marca, el actual está elevado y con aro
   latiendo, y el bloqueado va hundido y apagado.

   Los nodos son botones con reborde inferior macizo —no sombra difusa— y al
   pulsarlos ese reborde se encoge a la vez que el botón baja: el dedo nota
   que ha hundido algo. Es el único sitio de la aplicación donde el relieve
   se usa a lo grande, y es a propósito: aquí es donde se toca.

   Las coordenadas de los nodos y las del trazo que los une salen del mismo
   sistema (340 de ancho), así que la curva pasa exactamente por el centro de
   cada nodo por muy estrecha que sea la pantalla. Lo que NO va en ese
   sistema son los rótulos: se colocan al lado del nodo, en el costado libre,
   porque debajo se comían el trazo y el nodo siguiente.
   ========================================================================== */

const ANCHO = 340;
const PASO = 150;
const MARGEN_SUP = 96;
const CENTRO = 170;

/** Serpiente: la amplitud se alterna para que no quede un zigzag mecánico. */
function posicion(i: number) {
  const x = CENTRO + Math.sin(i * 1.05) * 72;
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

/* El costado libre de un tramo. Los rótulos se van al lado contrario al que
   se ha ido la curva, así que el adorno tiene que irse al MISMO lado que la
   curva: es el único hueco que queda sin texto. */
function costadoLibre(medio: number) {
  const x = medio > CENTRO ? medio + 104 : medio - 104;
  return Math.min(268, Math.max(72, x));
}

/** Ruido reproducible: el cielo tiene que ser el mismo en cada render. */
function ruido(n: number) {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

const pct = (x: number) => `${(x / ANCHO) * 100}%`;

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
  const alto = MARGEN_SUP + (capitulos.length - 1) * PASO + 216;
  const actual = Math.min(completados, capitulos.length - 1);
  const entero = completados >= capitulos.length;
  // Duración del viaje entero: la suma de las paradas, no un número a mano.
  const total = capitulos.reduce((a, c) => a + (c.minutos ?? 0), 0);

  // Al entrar, el camino se coloca sobre el capítulo actual: en un libro
  // largo, obligar a buscarlo desplazándose sería justo lo tedioso que se
  // quiere evitar.
  useEffect(() => {
    const caja = scroll.current;
    if (!caja) return;
    const destino = Math.max(0, MARGEN_SUP + actual * PASO - caja.clientHeight / 2);
    caja.scrollTo({ top: destino, behavior: reducido ? "auto" : "smooth" });
  }, [actual, reducido]);

  /* La figura acompaña al capítulo en el que estás, en el tramo que sale de
     él. El cofre se va al último tramo antes de la meta; si los dos caen en
     el mismo sitio gana la figura y el cofre no se dibuja, que para eso es
     adorno. */
  const tramoFigura = Math.min(actual, Math.max(capitulos.length - 2, 0));
  const tramoCofre = capitulos.length - 2;
  const conCofre = capitulos.length >= 3 && tramoCofre !== tramoFigura;

  const medio = (t: number) => ({
    x: (posicion(t).x + posicion(t + 1).x) / 2,
    y: (posicion(t).y + posicion(t + 1).y) / 2,
  });

  const mFigura = medio(tramoFigura);
  const mCofre = medio(Math.max(tramoCofre, 0));
  const cofreAbierto = completados > tramoCofre;

  const camino = trazo(capitulos.length);
  const avance = completados / Math.max(capitulos.length - 1, 1);

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
            {total > 0 && ` · ${Math.round(total)} min`}
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
          {/* Cielo: puntos tenues y dos lomas al fondo. Sin esto el camino
              flota en un vacío negro y se lee como una pantalla a medio
              cargar. `preserveAspectRatio` en none igual que el trazo, para
              que todo estire junto. */}
          <svg
            className="camino-cielo"
            viewBox={`0 0 ${ANCHO} ${alto}`}
            preserveAspectRatio="none"
            aria-hidden
          >
            {Array.from({ length: 30 }, (_, k) => (
              <circle
                key={k}
                cx={12 + ruido(k + 1) * (ANCHO - 24)}
                cy={20 + ruido(k + 41) * (alto - 40)}
                r={1 + ruido(k + 91) * 1.5}
                fill="rgba(242,236,225,0.9)"
                opacity={0.05 + ruido(k + 131) * 0.08}
              />
            ))}
            <path
              d={`M -20 ${alto - 92} Q 70 ${alto - 168} 168 ${alto - 96} T ${ANCHO + 20} ${alto - 120} V ${alto} H -20 Z`}
              fill="rgba(242,236,225,0.035)"
            />
            <path
              d={`M -20 ${alto - 44} Q 110 ${alto - 116} 232 ${alto - 52} T ${ANCHO + 20} ${alto - 70} V ${alto} H -20 Z`}
              fill="rgba(242,236,225,0.05)"
            />
          </svg>

          {/* Trazo que une los nodos. `vector-effect` mantiene el grosor
              aunque el lienzo se estire para ajustarse al ancho real. */}
          <svg
            className="camino-trazo"
            viewBox={`0 0 ${ANCHO} ${alto}`}
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d={camino}
              fill="none"
              stroke="rgba(0,0,0,0.28)"
              strokeWidth="18"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              transform="translate(0 4)"
            />
            <path
              d={camino}
              fill="none"
              stroke="rgba(242,236,225,0.14)"
              strokeWidth="16"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <motion.path
              d={camino}
              fill="none"
              stroke={libro.color}
              strokeWidth="16"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: avance }}
              transition={{ ...springSoft, delay: 0.25 }}
            />
            {/* Hormigas: puntos que suben por el camino. Es lo que dice hacia
                dónde se sigue sin escribir «hacia abajo» en ningún sitio. */}
            {!reducido && (
              <motion.path
                d={camino}
                fill="none"
                stroke="rgba(242,236,225,0.3)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray="1 20"
                vectorEffect="non-scaling-stroke"
                animate={{ strokeDashoffset: [0, -21] }}
                transition={{ duration: 1.3, repeat: Infinity, ease: "linear" }}
              />
            )}
          </svg>

          {/* La figura del libro, caminando al lado. Es la misma ilustración
              de la portada: el acompañante no es un personaje inventado,
              es el libro. */}
          {/* El div de fuera coloca y el de dentro anima. No se pueden juntar:
              framer escribe `transform` en línea y se lleva por delante el
              translate(-50%,-50%) que centra el adorno en su coordenada. */}
          <div
            className="camino-adorno"
            style={{ left: pct(costadoLibre(mFigura.x)), top: mFigura.y }}
          >
            <motion.div
              className="adorno-vaiven"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={
                reducido
                  ? { opacity: 1, scale: 1, y: 0 }
                  : { opacity: 1, scale: 1, y: [0, -7, 0] }
              }
              transition={
                reducido
                  ? { ...springPop, delay: 0.5 }
                  : {
                      opacity: { ...spring, delay: 0.5 },
                      scale: { ...springPop, delay: 0.5 },
                      y: { duration: 4.3, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
                    }
              }
            >
              <span className="figura-peana" />
              <span className="figura-medallon" style={{ background: libro.color }}>
                <svg viewBox={libro.vb} aria-hidden>
                  <g opacity="0.95">
                    <libro.Arte banda="fondo" />
                    <libro.Arte banda="medio" />
                    <libro.Arte banda="frente" />
                  </g>
                </svg>
              </span>
            </motion.div>
          </div>

          {conCofre && (
            <div
              className="camino-adorno"
              data-abierto={cofreAbierto}
              style={{ left: pct(costadoLibre(mCofre.x)), top: mCofre.y }}
            >
              <motion.div
                className="adorno-vaiven"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={
                  reducido
                    ? { opacity: 1, scale: 1, rotate: 0 }
                    : { opacity: 1, scale: 1, rotate: [-5, 5, -5] }
                }
                transition={
                  reducido
                    ? { ...springPop, delay: 0.6 }
                    : {
                        opacity: { ...spring, delay: 0.6 },
                        scale: { ...springPop, delay: 0.6 },
                        rotate: { duration: 3.7, repeat: Infinity, ease: "easeInOut", delay: 1 },
                      }
                }
              >
                <span className="cofre-peana" />
                <span
                  className="cofre-caja"
                  style={cofreAbierto ? { color: libro.color } : undefined}
                >
                  <GlyphCofre tamano={30} />
                </span>
              </motion.div>
            </div>
          )}

          {capitulos.map((cap, i) => {
            const p = posicion(i);
            const hecho = i < completados;
            const esActual = i === actual && !hecho;
            const bloqueado = i > completados;
            // El rótulo va al costado libre: si el nodo se ha ido a la
            // derecha, el texto se queda a la izquierda.
            const lado = p.x >= CENTRO ? "izq" : "der";

            return (
              <div
                key={cap.titulo}
                className="nodo-hueco"
                style={{ left: pct(p.x), top: p.y }}
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

                {/* Dos aros desfasados bajo el capítulo actual: uno solo se
                    lee como un parpadeo, dos se leen como algo que late. */}
                {esActual &&
                  !reducido &&
                  [0, 1.2].map((retraso) => (
                    <motion.span
                      key={retraso}
                      className="nodo-aro"
                      style={{ borderColor: libro.color }}
                      animate={{ scale: [1, 1.45, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: retraso,
                      }}
                    />
                  ))}

                <motion.button
                  className="nodo"
                  data-estado={hecho ? "hecho" : esActual ? "actual" : "bloqueado"}
                  style={{ background: hecho || esActual ? libro.color : undefined }}
                  onClick={() => !bloqueado && onEmpezar(i)}
                  disabled={bloqueado}
                  whileTap={bloqueado ? {} : { y: 5, boxShadow: "0 1px 0 rgba(0,0,0,0.36)" }}
                  initial={{ opacity: 0, scale: 0.5, y: 14 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ ...springPop, delay: 0.2 + i * 0.08 }}
                  aria-label={`Capítulo ${i + 1}: ${cap.titulo}${bloqueado ? " (bloqueado)" : ""}`}
                >
                  <span className="nodo-cara">
                    {hecho ? <GlyphTick /> : bloqueado ? <GlyphCandado /> : <span>{i + 1}</span>}
                  </span>
                </motion.button>

                <motion.div
                  className="nodo-rotulo"
                  data-lado={lado}
                  initial={{ opacity: 0, x: lado === "izq" ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...spring, delay: 0.3 + i * 0.08 }}
                >
                  <p className="nodo-paso">Parada {i + 1}</p>
                  <p className="nodo-nombre" data-bloqueado={bloqueado}>
                    {cap.titulo}
                  </p>
                  {cap.minutos != null && (
                    <p className="nodo-min" data-bloqueado={bloqueado}>
                      {Math.round(cap.minutos)} min
                    </p>
                  )}
                </motion.div>
              </div>
            );
          })}

          {/* Meta: cierra el camino para que no acabe en el aire */}
          <motion.div
            className="camino-meta"
            data-entero={entero}
            style={{ top: alto - 138 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...springPop, delay: 0.3 + capitulos.length * 0.08 }}
          >
            {entero && !reducido && (
              <motion.span
                className="meta-destello"
                style={{ borderColor: libro.color }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
              />
            )}
            <motion.span
              className="meta-copa"
              style={entero ? { background: libro.color, color: "var(--ink)" } : undefined}
              animate={entero && !reducido ? { y: [0, -6, 0] } : { y: 0 }}
              transition={
                entero && !reducido
                  ? { duration: 2.6, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0.01 }
              }
            >
              <GlyphTrofeo tamano={28} />
            </motion.span>
            <p>{entero ? "Libro completo" : "Aquí acaba el libro"}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
