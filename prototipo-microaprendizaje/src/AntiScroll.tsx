import { useState } from "react";
import { motion } from "framer-motion";
import { GlyphClose } from "./glyphs";
import { spring, springPop, springSoft, springTight } from "./motion";

/* ==========================================================================
   Modo anti-scroll.

   La promesa es simple: mientras no cumplas tu objetivo del día, las apps que
   te sacan de aquí se quedan cerradas.

   La pantalla tiene que hacer sentir eso ANTES de leerlo, y por eso el centro
   no es el texto: son cinco fichas de app flotando alrededor del móvil, y el
   momento en que a cada una le CAE su candado. El cierre va en cascada, de
   fuera hacia dentro, con el arco del candado bajando por separado del
   cuerpo: dos tiempos por candado en vez de uno.

   Las fichas son nuestras, abstractas. Dibujar los logos reales de Instagram
   o TikTok sería usar marcas ajenas, y además rompería la paleta: cinco
   colores de fuera en una app que tiene cinco y punto.

   Es un interruptor de verdad, no una maqueta: se activa y se desactiva, y
   todo lo de la pantalla responde a ese estado.
   ========================================================================== */

/** Las fichas, colocadas alrededor del móvil. Ninguna simétrica con otra. */
const FICHAS = [
  { x: -104, y: -128, giro: -9, color: "var(--clay)", forma: "video" },
  { x: 104, y: -92, giro: 8, color: "var(--plum)", forma: "camara" },
  { x: -122, y: 6, giro: -6, color: "var(--slate)", forma: "chat" },
  { x: 118, y: 42, giro: 10, color: "var(--ochre)", forma: "musica" },
  { x: -78, y: 128, giro: 7, color: "var(--sage)", forma: "corazon" },
] as const;

export function AntiScroll({
  objetivo,
  reducido,
  onCerrar,
}: {
  objetivo: number;
  reducido: boolean;
  onCerrar: () => void;
}) {
  const [activo, setActivo] = useState(false);

  return (
    <motion.div
      className="anti"
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0, transition: spring }}
      exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
    >
      <div className="anti-head">
        <button className="icon-btn" onClick={onCerrar} aria-label="Cerrar">
          <GlyphClose />
        </button>
      </div>

      <div className="anti-cuerpo">
        <motion.h1
          initial={{ opacity: 0, y: 18, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...springPop, delay: 0.06 }}
        >
          Bloquea las distracciones
        </motion.h1>

        <motion.p
          className="anti-entradilla"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: 0.14 }}
        >
          Mientras no leas tus <strong>{objetivo} minutos</strong> del día, las apps
          que te sacan de aquí no se abren.
        </motion.p>

        <div className="anti-escena">
          {/* El móvil, en el centro y quieto: es el ancla de la composición */}
          <motion.div
            className="anti-movil"
            initial={{ opacity: 0, scale: 0.8, rotate: -14 }}
            animate={{ opacity: 1, scale: 1, rotate: -9 }}
            transition={{ ...springPop, delay: 0.2 }}
          >
            <svg viewBox="0 0 120 200" width="112" height="187" aria-hidden>
              <rect x="6" y="6" width="108" height="188" rx="20" fill="var(--ink)" />
              <rect x="12" y="12" width="96" height="176" rx="15" fill="var(--paper)" />
              <rect x="44" y="18" width="32" height="5" rx="2.5" fill="var(--ink)" opacity="0.3" />
              {[40, 62, 84, 106, 128, 150].map((y, i) => (
                <rect
                  key={y}
                  x="24"
                  y={y}
                  width={i % 2 ? 52 : 72}
                  height="9"
                  rx="4.5"
                  fill="var(--ink)"
                  opacity={0.1 + (i % 3) * 0.04}
                />
              ))}
            </svg>
          </motion.div>

          {/* La mano: el sello de «para». Aterriza de golpe y rebota */}
          <motion.div
            className="anti-mano"
            initial={{ opacity: 0, scale: 0.2, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: -8 }}
            transition={{ type: "spring", stiffness: 260, damping: 12, delay: 0.44 }}
          >
            <svg viewBox="0 0 64 64" width="62" height="62" aria-hidden>
              <circle cx="32" cy="32" r="30" fill="var(--clay)" />
              <circle cx="32" cy="32" r="30" fill="none" stroke="var(--paper)" strokeWidth="3" />
              <path
                d="M22 36 V24a3 3 0 0 1 6 0v-4a3 3 0 0 1 6 0v3a3 3 0 0 1 6 0v4a3 3 0 0 1 5 2v7c0 6-4 10-11 10s-12-4-12-10Z"
                fill="var(--paper)"
              />
            </svg>
          </motion.div>

          {FICHAS.map((f, i) => (
            <Ficha
              key={f.forma}
              {...f}
              indice={i}
              bloqueada={activo}
              reducido={reducido}
            />
          ))}
        </div>
      </div>

      <div className="anti-pie">
        <motion.button
          className="anti-interruptor"
          data-on={activo}
          onClick={() => setActivo((v) => !v)}
          role="switch"
          aria-checked={activo}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: 0.6 }}
        >
          <span className="anti-interruptor-texto">
            <span className="anti-interruptor-titulo">
              {activo ? "Anti-scroll activado" : "Activar anti-scroll"}
            </span>
            <span className="anti-interruptor-pie">
              {activo
                ? `Se abrirán solas cuando leas ${objetivo} minutos`
                : "Puedes desactivarlo cuando quieras"}
            </span>
          </span>
          <span className="interruptor" data-on={activo}>
            <motion.span className="interruptor-pomo" layout transition={springTight} />
          </span>
        </motion.button>

        <motion.p
          className="anti-nota"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...springSoft, delay: 0.68 }}
        >
          Las llamadas y los mensajes nunca se bloquean.
        </motion.p>
      </div>
    </motion.div>
  );
}

/* --------------------------------------------------------------------------
   Una ficha de app con su candado
   -------------------------------------------------------------------------- */

function Ficha({
  x,
  y,
  giro,
  color,
  forma,
  indice,
  bloqueada,
  reducido,
}: {
  x: number;
  y: number;
  giro: number;
  color: string;
  forma: string;
  indice: number;
  bloqueada: boolean;
  reducido: boolean;
}) {
  // La cascada va de fuera hacia dentro. 70 ms entre candados: lo justo para
  // que se lean como una secuencia y no como un parpadeo.
  const turno = indice * 0.07;

  return (
    <motion.div
      className="anti-ficha"
      style={{ ["--tinta" as string]: color }}
      initial={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: 0 }}
      animate={{ x, y, scale: 1, opacity: 1, rotate: giro }}
      transition={{ ...springPop, delay: 0.26 + indice * 0.06 }}
    >
      {/* Flotan a periodos distintos; al bloquearse se quedan quietas, que es
          justo lo que tiene que sentirse */}
      <motion.div
        className="anti-ficha-caja"
        animate={
          reducido || bloqueada
            ? { y: 0 }
            : { y: [0, indice % 2 ? -5 : -7, 0] }
        }
        transition={{
          duration: 3.1 + indice * 0.43,
          repeat: bloqueada ? 0 : Infinity,
          ease: "easeInOut",
          delay: 0.9 + turno,
        }}
      >
        <motion.div
          className="anti-ficha-fondo"
          animate={{
            opacity: bloqueada ? 0.34 : 1,
            filter: bloqueada ? "grayscale(0.85)" : "grayscale(0)",
          }}
          transition={{ ...springSoft, delay: bloqueada ? turno : 0 }}
        >
          <Simbolo forma={forma} />
        </motion.div>

        {/* El candado: cuerpo y arco entran por separado. El arco BAJA para
            cerrarse, que es el gesto que hace que se lea como «cierra» */}
        <motion.span
          className="anti-candado"
          initial={false}
          animate={
            bloqueada
              ? { scale: 1, opacity: 1 }
              : { scale: 0.2, opacity: 0 }
          }
          transition={{ ...springPop, delay: bloqueada ? turno + 0.06 : 0 }}
        >
          <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden>
            <motion.path
              d="M8.4 10.4V7.6a3.6 3.6 0 0 1 7.2 0v2.8"
              fill="none"
              stroke="var(--paper)"
              strokeWidth="2.1"
              strokeLinecap="round"
              initial={false}
              animate={bloqueada ? { y: 0 } : { y: -3.4 }}
              transition={{ ...springPop, delay: bloqueada ? turno + 0.16 : 0 }}
            />
            <rect x="5.4" y="10" width="13.2" height="9.4" rx="2.6" fill="var(--paper)" />
            <circle cx="12" cy="14.7" r="1.5" fill="var(--carbon)" />
          </svg>
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

/** Símbolos abstractos: se leen como «vídeo», «fotos», «chat»… sin ser nadie. */
function Simbolo({ forma }: { forma: string }) {
  const p = { fill: "var(--paper)", opacity: 0.92 };

  if (forma === "video")
    return (
      <svg viewBox="0 0 44 44" width="30" height="30" aria-hidden>
        <path d="M17 13.5 33 22 17 30.5Z" {...p} />
      </svg>
    );

  if (forma === "camara")
    return (
      <svg viewBox="0 0 44 44" width="30" height="30" aria-hidden>
        <rect x="10" y="10" width="24" height="24" rx="7.5" fill="none" stroke="var(--paper)" strokeWidth="3" opacity="0.92" />
        <circle cx="22" cy="22" r="6" fill="none" stroke="var(--paper)" strokeWidth="3" opacity="0.92" />
        <circle cx="29.5" cy="14.5" r="1.9" {...p} />
      </svg>
    );

  if (forma === "chat")
    return (
      <svg viewBox="0 0 44 44" width="30" height="30" aria-hidden>
        <path d="M10 17a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v7a5 5 0 0 1-5 5H20l-7 5v-5a3 3 0 0 1-3-3Z" {...p} />
      </svg>
    );

  if (forma === "musica")
    return (
      <svg viewBox="0 0 44 44" width="30" height="30" aria-hidden>
        <path d="M18 30V14l12-3v16" fill="none" stroke="var(--paper)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.92" />
        <circle cx="15" cy="30" r="4" {...p} />
        <circle cx="27" cy="27" r="4" {...p} />
      </svg>
    );

  return (
    <svg viewBox="0 0 44 44" width="30" height="30" aria-hidden>
      <path d="M22 32 12 22a6.4 6.4 0 0 1 10-7.8 6.4 6.4 0 0 1 10 7.8Z" {...p} />
    </svg>
  );
}
