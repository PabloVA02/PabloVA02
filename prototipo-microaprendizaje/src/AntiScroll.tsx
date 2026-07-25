import { useState } from "react";
import { motion } from "framer-motion";
import { GlyphClose } from "./glyphs";
import { spring, springPop, springSoft, springTight } from "./motion";

/* ==========================================================================
   Modo anti-scroll.

   La promesa es simple: mientras no cumplas tu objetivo del día, las apps que
   te sacan de aquí se quedan cerradas.

   La pantalla tiene que hacer sentir eso ANTES de leerlo, y por eso el centro
   no es el texto: son las apps reales flotando alrededor del móvil, y el
   momento en que a cada una le CAE su candado. El cierre va en cascada y el
   arco del candado baja por separado del cuerpo: dos tiempos por candado en
   vez de uno.

   Sobre los iconos: son las marcas de verdad, dibujadas a mano en SVG. Es un
   uso nominativo —se nombra exactamente lo que se va a bloquear, que es la
   función del producto— y es lo que hacen todas las apps de enfoque. Son las
   únicas piezas de la app que se salen de la paleta a propósito: tienen que
   reconocerse en un cuarto de segundo, y ahí el color de marca ES el dato.

   Es un interruptor de verdad, no una maqueta: se activa y se desactiva, y
   todo lo de la pantalla responde a ese estado.
   ========================================================================== */

type Marca = "instagram" | "tiktok" | "youtube" | "x" | "facebook";

/** Colocadas alrededor del móvil, ninguna simétrica con otra. */
const APPS: { marca: Marca; x: number; y: number; giro: number }[] = [
  { marca: "youtube", x: -96, y: -142, giro: -8 },
  { marca: "instagram", x: 104, y: -96, giro: 7 },
  { marca: "x", x: -128, y: -18, giro: -5 },
  { marca: "tiktok", x: -84, y: 116, giro: 6 },
  { marca: "facebook", x: 116, y: 74, giro: 9 },
];

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
          Mientras no leas tus <strong>{objetivo} minutos</strong> del día, estas
          apps no se abren.
        </motion.p>

        <div className="anti-escena">
          {/* El móvil: claro y ligeramente girado, para que las fichas oscuras
              de alrededor se recorten contra él */}
          <motion.div
            className="anti-movil"
            initial={{ opacity: 0, scale: 0.82, rotate: -16 }}
            animate={{ opacity: 1, scale: 1, rotate: -11 }}
            transition={{ ...springPop, delay: 0.18 }}
          >
            <svg viewBox="0 0 130 226" width="128" height="222" aria-hidden>
              <rect x="4" y="4" width="122" height="218" rx="24" fill="#e8e4dc" />
              <rect x="10" y="10" width="110" height="206" rx="19" fill="#f7f5f1" />
              <rect x="50" y="16" width="30" height="5" rx="2.5" fill="#cfc9be" />
              {[42, 66, 90, 114, 138, 162, 186].map((y, i) => (
                <rect
                  key={y}
                  x="24"
                  y={y}
                  width={i % 3 === 1 ? 52 : i % 3 === 2 ? 66 : 82}
                  height="10"
                  rx="5"
                  fill="#d8d2c7"
                />
              ))}
            </svg>
          </motion.div>

          {/* La mano: el sello de «alto». Aterriza de golpe y rebota */}
          <motion.div
            className="anti-mano"
            initial={{ opacity: 0, scale: 0.15, rotate: -34 }}
            animate={{ opacity: 1, scale: 1, rotate: -7 }}
            transition={{ type: "spring", stiffness: 250, damping: 11, delay: 0.5 }}
          >
            <svg viewBox="0 0 92 92" width="88" height="88" aria-hidden>
              <circle cx="46" cy="46" r="42" fill="#e0483c" />
              <circle cx="46" cy="46" r="42" fill="none" stroke="#fff" strokeWidth="4" />
              <path
                d="M31 52V33.5a4.2 4.2 0 0 1 8.4 0V27a4.2 4.2 0 0 1 8.4 0v4a4.2 4.2 0 0 1 8.4 0v5.5a4.2 4.2 0 0 1 7 3v11c0 8.6-6 14.5-16 14.5s-16.2-6-16.2-13Z"
                fill="#fff"
              />
              <path
                d="M39.4 41v9M47.8 38.5v11M56.2 40.5v9"
                stroke="#e0483c"
                strokeWidth="1.6"
                strokeLinecap="round"
                opacity="0.45"
              />
            </svg>
          </motion.div>

          {APPS.map((a, i) => (
            <Ficha key={a.marca} {...a} indice={i} bloqueada={activo} reducido={reducido} />
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
          transition={{ ...springSoft, delay: 0.64 }}
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
          transition={{ ...springSoft, delay: 0.72 }}
        >
          Las llamadas y los mensajes nunca se bloquean.
        </motion.p>
      </div>
    </motion.div>
  );
}

/* --------------------------------------------------------------------------
   Una app con su candado
   -------------------------------------------------------------------------- */

function Ficha({
  marca,
  x,
  y,
  giro,
  indice,
  bloqueada,
  reducido,
}: {
  marca: Marca;
  x: number;
  y: number;
  giro: number;
  indice: number;
  bloqueada: boolean;
  reducido: boolean;
}) {
  const turno = indice * 0.07;

  return (
    <motion.div
      className="anti-ficha"
      initial={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: 0 }}
      animate={{ x, y, scale: 1, opacity: 1, rotate: giro }}
      transition={{ ...springPop, delay: 0.24 + indice * 0.06 }}
    >
      <motion.div
        className="anti-ficha-caja"
        animate={reducido || bloqueada ? { y: 0 } : { y: [0, indice % 2 ? -5 : -7, 0] }}
        transition={{
          duration: 3.1 + indice * 0.43,
          repeat: bloqueada ? 0 : Infinity,
          ease: "easeInOut",
          delay: 0.9 + turno,
        }}
      >
        {/* Al bloquearse pierde el color y se apaga: el gris es el estado */}
        <motion.div
          className="anti-ficha-fondo"
          animate={{
            opacity: bloqueada ? 0.4 : 1,
            filter: bloqueada ? "grayscale(0.9)" : "grayscale(0)",
          }}
          transition={{ ...springSoft, delay: bloqueada ? turno : 0 }}
        >
          <Logo marca={marca} />
        </motion.div>

        {/* El candado: cuerpo y arco entran por separado. El arco BAJA para
            cerrarse, que es el gesto que hace que se lea como «cierra» */}
        <motion.span
          className="anti-candado"
          initial={false}
          animate={bloqueada ? { scale: 1, opacity: 1 } : { scale: 0.2, opacity: 0 }}
          transition={{ ...springPop, delay: bloqueada ? turno + 0.06 : 0 }}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
            <motion.path
              d="M8.4 10.4V7.6a3.6 3.6 0 0 1 7.2 0v2.8"
              fill="none"
              stroke="#fff"
              strokeWidth="2.2"
              strokeLinecap="round"
              initial={false}
              animate={bloqueada ? { y: 0 } : { y: -3.4 }}
              transition={{ ...springPop, delay: bloqueada ? turno + 0.16 : 0 }}
            />
            <rect x="5.4" y="10" width="13.2" height="9.4" rx="2.6" fill="#fff" />
            <circle cx="12" cy="14.7" r="1.5" fill="#1b1b22" />
          </svg>
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

/**
 * Los iconos, dibujados a mano. No son capturas ni ficheros de marca: son las
 * formas mínimas que hacen que cada app se reconozca de un vistazo, que es
 * todo lo que esta pantalla necesita de ellas.
 */
function Logo({ marca }: { marca: Marca }) {
  if (marca === "instagram")
    return (
      <svg viewBox="0 0 56 56" width="56" height="56" aria-label="Instagram">
        <defs>
          <radialGradient id="ig" cx="30%" cy="107%" r="130%">
            <stop offset="0%" stopColor="#fdd85d" />
            <stop offset="26%" stopColor="#f6a03c" />
            <stop offset="48%" stopColor="#e6483d" />
            <stop offset="72%" stopColor="#c92bb7" />
            <stop offset="100%" stopColor="#6a3fd6" />
          </radialGradient>
        </defs>
        <rect width="56" height="56" rx="16" fill="url(#ig)" />
        <rect x="14" y="14" width="28" height="28" rx="9" fill="none" stroke="#fff" strokeWidth="3.2" />
        <circle cx="28" cy="28" r="7" fill="none" stroke="#fff" strokeWidth="3.2" />
        <circle cx="37.4" cy="18.6" r="2.1" fill="#fff" />
      </svg>
    );

  if (marca === "tiktok")
    return (
      <svg viewBox="0 0 56 56" width="56" height="56" aria-label="TikTok">
        <rect width="56" height="56" rx="16" fill="#0b0b0f" />
        {/* Las dos copias desplazadas en cian y rosa, y la blanca encima */}
        <path d="M33 12h-6.4v24.6a5.2 5.2 0 1 1-4.2-5.1V25a11.4 11.4 0 1 0 10.6 11.4V23.9a13 13 0 0 0 8 2.7v-6.3A7.6 7.6 0 0 1 33 12Z" fill="#25f4ee" transform="translate(-2.4 -1.6)" />
        <path d="M33 12h-6.4v24.6a5.2 5.2 0 1 1-4.2-5.1V25a11.4 11.4 0 1 0 10.6 11.4V23.9a13 13 0 0 0 8 2.7v-6.3A7.6 7.6 0 0 1 33 12Z" fill="#fe2c55" transform="translate(2.4 1.6)" />
        <path d="M33 12h-6.4v24.6a5.2 5.2 0 1 1-4.2-5.1V25a11.4 11.4 0 1 0 10.6 11.4V23.9a13 13 0 0 0 8 2.7v-6.3A7.6 7.6 0 0 1 33 12Z" fill="#fff" />
      </svg>
    );

  if (marca === "youtube")
    return (
      <svg viewBox="0 0 56 56" width="56" height="56" aria-label="YouTube">
        <rect width="56" height="56" rx="16" fill="#fff" />
        <rect x="6" y="15" width="44" height="26" rx="8.5" fill="#ff0033" />
        <path d="M24.6 22.4 34.8 28l-10.2 5.6Z" fill="#fff" />
      </svg>
    );

  if (marca === "x")
    return (
      <svg viewBox="0 0 56 56" width="56" height="56" aria-label="X">
        <rect width="56" height="56" rx="16" fill="#0b0b0f" />
        <path
          d="M16 15h7.6l8 10.6L40.2 15H45L33.6 28.3 45.6 44H38l-8.5-11.3L19.6 44H15l12-14.1L16 15Z"
          fill="#fff"
        />
      </svg>
    );

  return (
    <svg viewBox="0 0 56 56" width="56" height="56" aria-label="Facebook">
      <rect width="56" height="56" rx="16" fill="#1877f2" />
      <path
        d="M32.6 56V34.6h6.6l1-8.4h-7.6v-5.3c0-2.4.7-4 4.1-4h4.3v-7.5c-.8-.1-3.3-.3-6.3-.3-6.3 0-10.6 3.9-10.6 11v6.1h-6.7v8.4h6.7V56Z"
        fill="#fff"
      />
    </svg>
  );
}
