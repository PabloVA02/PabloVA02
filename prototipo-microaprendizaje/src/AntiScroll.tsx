import { useState } from "react";
import { motion } from "framer-motion";
import { GlyphClose } from "./glyphs";
import { spring, springPop, springSoft, springTight } from "./motion";
import { ManoPiezas } from "./Mano";

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

/** Colocadas alrededor del móvil, ninguna simétrica con otra. Las coordenadas
    salen del centro de la escena, y están puestas para dejarle sitio a la
    mano, que cae abajo a la derecha y no debe pisar ninguna ficha. */
const APPS: { marca: Marca; x: number; y: number; giro: number }[] = [
  { marca: "youtube", x: -102, y: -148, giro: -8 },
  { marca: "instagram", x: 100, y: -112, giro: 7 },
  { marca: "x", x: -126, y: -46, giro: -5 },
  { marca: "facebook", x: 118, y: 22, giro: 9 },
  { marca: "tiktok", x: -104, y: 104, giro: 6 },
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
          <motion.div
            className="anti-movil"
            initial={{ opacity: 0, scale: 0.82, rotate: -14 }}
            animate={{ opacity: 1, scale: 1, rotate: -9 }}
            transition={{ ...springPop, delay: 0.18 }}
          >
            <Movil />
          </motion.div>

          {/* La mano: el sello de «alto». Aterriza de golpe, rebota y luego se
              queda con el mismo vaivén lento que tiene en el perfil. Antes era
              otro dibujo metido en un disco rojo; ahora es la mano de Pablo, y
              sin disco: el disco la convertía en un botón, y esto no se pulsa. */}
          <motion.div
            className="anti-mano"
            initial={{ opacity: 0, scale: 0.15, rotate: -34 }}
            animate={{ opacity: 1, scale: 1, rotate: -9 }}
            transition={{ type: "spring", stiffness: 250, damping: 11, delay: 0.5 }}
          >
            <motion.svg
              viewBox="0 0 200 200"
              width="88"
              height="88"
              aria-hidden
              style={{ originY: 0.85 }}
              animate={reducido ? {} : { rotate: [-5, 5, -5] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            >
              <ManoPiezas />
            </motion.svg>
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


/* --------------------------------------------------------------------------
   El móvil de la escena

   El de antes era una losa de color crema con siete barras grises: se leía
   como una servilleta, no como un teléfono, y era lo más feo de la pantalla.
   Éste es un aparato de verdad —canto de metal claro, marco negro, pantalla
   de papel— con renglones y nada más. Llegó a llevar dentro un libro abierto
   en Curva y se quitó a la primera: este móvil no es el nuestro, es el de
   Pablo, y meterle nuestra app dentro convertía la promesa de la pantalla en
   un anuncio.

   El canto sigue siendo claro a propósito. Es lo que recorta las fichas
   oscuras que flotan alrededor: sobre un fondo casi negro, un móvil negro las
   dejaría sin contorno.
   -------------------------------------------------------------------------- */

function Movil() {
  return (
    <svg viewBox="0 0 136 250" width="138" height="254" aria-hidden>
      <defs>
        <linearGradient id="anti-canto" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#efeae0" />
          <stop offset="46%" stopColor="#cfc9bd" />
          <stop offset="100%" stopColor="#a9a396" />
        </linearGradient>
      </defs>

      <rect width="136" height="250" rx="30" fill="url(#anti-canto)" />
      <rect x="3.5" y="3.5" width="129" height="243" rx="26.5" fill="#1a1a1c" />
      <rect x="6.5" y="6.5" width="123" height="237" rx="24" fill="#f7f5f1" />

      {/* La isla */}
      <rect x="51" y="13" width="34" height="9.5" rx="4.75" fill="#17171a" />

      {/* Nada más que renglones. Llegó a haber aquí una cubierta, un titular y
          una barra de avance, o sea Curva abierta dentro del móvil, y Pablo lo
          quitó: «no pongas los libros como si fuera mi aplicación, pon esas
          líneas y ya». Y tiene razón, porque este móvil no es el nuestro. Es
          EL SUYO, el que tiene en la mano, y lo que promete la pantalla es
          que las cinco apps de alrededor se quedan cerradas. Poner nuestra
          app dentro convertía la promesa en un anuncio. */}
      {[42, 56, 70, 84, 98, 112, 126, 140, 154, 168].map((y, i) => (
        <rect
          key={y}
          x="20"
          y={y}
          width={[96, 84, 96, 72, 90, 96, 66, 92, 80, 96][i]}
          height="7"
          rx="3.5"
          fill="#d5cfc3"
        />
      ))}

      <rect x="48" y="231" width="40" height="4" rx="2" fill="#cfc9be" />
    </svg>
  );
}

/* --------------------------------------------------------------------------
   Los iconos de las apps

   No son capturas ni ficheros de marca: son las formas mínimas que hacen que
   cada app se reconozca de un vistazo, que es todo lo que esta pantalla
   necesita de ellas.

   Lo que se arregló el 26 de agosto —Pablo: «los logos de las redes sociales
   se ven algo mal»— no fue el dibujo de cada uno, sino que estaban a tamaños
   distintos dentro de su ficha: la nota de TikTok ocupaba media ficha y la f
   de Facebook la ficha entera, así que en fila parecían mal recortados. Ahora
   cada dibujo se centra y se escala dentro del mismo hueco de 36 sobre 56
   —`marco()`—, medido sobre su propia caja. Con eso pesan lo mismo en el ojo
   aunque tengan formas muy distintas.
   -------------------------------------------------------------------------- */

/**
 * Centra un dibujo dentro de la ficha y lo lleva al mismo tamaño óptico que
 * los demás. `caja` es lo que ocupa de verdad el dibujo en su propio sistema
 * de coordenadas; `hueco` es lo que tiene que medir dentro de los 56.
 */
function marco(caja: [number, number, number, number], hueco = 36) {
  const [x, y, an, al] = caja;
  const k = hueco / Math.max(an, al);
  return `translate(28 28) scale(${k.toFixed(4)}) translate(${(-(x + an / 2)).toFixed(2)} ${(-(y + al / 2)).toFixed(2)})`;
}

const NOTA_TIKTOK =
  "M33 12h-6.4v24.6a5.2 5.2 0 1 1-4.2-5.1V25a11.4 11.4 0 1 0 10.6 11.4V23.9" +
  "a13 13 0 0 0 8 2.7v-6.3A7.6 7.6 0 0 1 33 12Z";

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
        <g fill="none" stroke="#fff" strokeWidth="3.4">
          <rect x="11.7" y="11.7" width="32.6" height="32.6" rx="10.4" />
          <circle cx="28" cy="28" r="8.3" />
        </g>
        <circle cx="38.4" cy="17.6" r="2.3" fill="#fff" />
      </svg>
    );

  if (marca === "tiktok")
    return (
      <svg viewBox="0 0 56 56" width="56" height="56" aria-label="TikTok">
        <rect width="56" height="56" rx="16" fill="#0b0b0f" />
        {/* Las dos copias desplazadas en cian y rosa, y la blanca encima */}
        <g transform={marco([10.6, 12, 30.4, 36], 34)}>
          <path d={NOTA_TIKTOK} fill="#25f4ee" transform="translate(-2 -1.4)" />
          <path d={NOTA_TIKTOK} fill="#fe2c55" transform="translate(2 1.4)" />
          <path d={NOTA_TIKTOK} fill="#fff" />
        </g>
      </svg>
    );

  if (marca === "youtube")
    return (
      <svg viewBox="0 0 56 56" width="56" height="56" aria-label="YouTube">
        <rect width="56" height="56" rx="16" fill="#fbfbfa" />
        <rect x="6" y="14" width="44" height="28" rx="9.4" fill="#ff0033" />
        <path
          d="M24.6 21.9c0-.9 1-1.5 1.8-1l9.2 5.3a1.2 1.2 0 0 1 0 2l-9.2 5.4c-.8.5-1.8-.1-1.8-1V21.9Z"
          fill="#fff"
        />
      </svg>
    );

  if (marca === "x")
    return (
      <svg viewBox="0 0 56 56" width="56" height="56" aria-label="X">
        <rect width="56" height="56" rx="16" fill="#0b0b0f" />
        <g transform={marco([15, 15, 30.6, 29], 31)}>
          <path
            d="M16 15h7.6l8 10.6L40.2 15H45L33.6 28.3 45.6 44H38l-8.5-11.3L19.6 44H15l12-14.1L16 15Z"
            fill="#fff"
          />
        </g>
      </svg>
    );

  return (
    <svg viewBox="0 0 56 56" width="56" height="56" aria-label="Facebook">
      <rect width="56" height="56" rx="16" fill="#1877f2" />
      <g transform={marco([18.4, 10.5, 24.2, 45.5], 38)}>
        <path
          d="M32.6 56V34.6h6.6l1-8.4h-7.6v-5.3c0-2.4.7-4 4.1-4h4.3v-7.5c-.8-.1-3.3-.3-6.3-.3-6.3 0-10.6 3.9-10.6 11v6.1h-6.7v8.4h6.7V56Z"
          fill="#fff"
        />
      </g>
    </svg>
  );
}
