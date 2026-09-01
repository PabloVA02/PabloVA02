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
  { marca: "youtube", x: -110, y: -166, giro: -8 },
  { marca: "instagram", x: 110, y: -126, giro: 7 },
  { marca: "x", x: -132, y: -50, giro: -5 },
  { marca: "facebook", x: 126, y: 26, giro: 9 },
  { marca: "tiktok", x: -112, y: 118, giro: 6 },
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
        {/* TRES ALTURAS Y NO DOS. Antes había titular y entradilla, y el
            titular cargaba con las dos cosas: decir cómo se llama el modo y
            prometer algo. Ahora el nombre va arriba en pequeño, el titular
            queda libre para la frase que tiene que quedarse en la cabeza, y
            el mecanismo baja a su sitio. */}
        <motion.span
          className="anti-nombre"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: 0.04 }}
        >
          Modo anti-scroll
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...springPop, delay: 0.08 }}
        >
          {/* Pablo: «algo tipo bloquea todas las distracciones que impiden tu
              desarrollo personal, que se le quede en la cabeza una buena
              frase». Lo que se queda no es lo largo: es lo corto y lo que
              acaba en un verbo que va contigo. «Crecer» es la palabra del
              producto entera, así que carga el peso tipográfico. */}
          Bloquea lo que te
          <br />
          impide <em>crecer</em>
        </motion.h1>

        <motion.p
          className="anti-entradilla"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: 0.16 }}
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
    <svg viewBox="0 0 136 250" width="152" height="280" aria-hidden>
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

   Pablo, el 1 de septiembre: «los símbolos de las redes sociales algunos están
   mal, el de TikTok mal, Twitter; quiero que sean como en la vida real todos y
   súper nítidos».

   Tenía razón y el fallo era de fondo: los de antes eran aproximaciones
   dibujadas a ojo —una X de dos barras cruzadas, una nota de música
   inventada—, y una marca mal dibujada se reconoce igual pero se ve mal. Ahora
   cada glifo es la FORMA REAL de la marca, con sus proporciones, y no un
   parecido:

     · X          la aspa asimétrica con sus remates rectos, que no es una x.
     · TikTok     la nota con la cabeza redonda y el asta que se curva.
     · Instagram  la cámara de trazo, dibujada como contorno relleno.
     · YouTube    el rectángulo de esquinas blandas con la muesca del play.
     · Facebook   la f que se sale por abajo, como en el icono de verdad.

   NITIDEZ. Son vectores, así que el tamaño no las estropea: lo que las
   estropeaba era el recorte. La ficha llevaba `overflow: hidden` con su propio
   radio y el SVG dibujaba OTRO redondeado encima; dos bordes curvos casi
   iguales, uno suavizado por el navegador y otro por CSS, dejan un filo sucio
   de un píxel. Ahora el redondeado lo dibuja solo el SVG.

   Y siguen siendo uso nominativo: se nombra exactamente lo que se va a
   bloquear, que es para lo que existe la pantalla.
   -------------------------------------------------------------------------- */

/** Mete un glifo de su propio sistema de coordenadas en la ficha de 56.
 *  `caja` es lo que ocupa de verdad el dibujo; `hueco`, lo que debe medir
 *  dentro. Cada marca pide un hueco distinto porque lo que iguala dos logos no
 *  es su alto sino cuánta tinta ponen: la f de Facebook llena su caja y la
 *  cámara de Instagram es casi todo aire. */
function marco(caja: [number, number, number, number], hueco: number) {
  const [x, y, an, al] = caja;
  const k = hueco / Math.max(an, al);
  return `translate(28 28) scale(${k.toFixed(5)}) translate(${(-(x + an / 2)).toFixed(2)} ${(-(y + al / 2)).toFixed(2)})`;
}

/* Los glifos, cada uno con la caja que ocupa en su propio sistema. */
const GLIFO_X =
  "M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866" +
  "l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894L144.011 79.694h162.604" +
  "l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z";

const GLIFO_TIKTOK =
  "M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753" +
  "-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1z";

const GLIFO_INSTAGRAM =
  "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6" +
  "c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3" +
  "c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2" +
  "c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1" +
  "s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0" +
  "c35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388" +
  "c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6" +
  "-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9" +
  "s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z";

const GLIFO_YOUTUBE =
  "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486" +
  "c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305" +
  "c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486" +
  "c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305z" +
  "m-317.51 213.508V175.185l142.739 81.205-142.739 81.201z";

const GLIFO_FACEBOOK =
  "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0" +
  "c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z";

/** La baldosa: el redondeado del icono de un móvil, que NO es un radio
 *  constante sino una curva continua. Se dibuja aquí y en ningún otro sitio,
 *  para que no haya dos bordes curvos peleándose. */
function Baldosa({ fill }: { fill: string }) {
  return <rect width="56" height="56" rx="15.6" ry="15.6" fill={fill} />;
}

function Logo({ marca }: { marca: Marca }) {
  const comun = {
    /* El sistema de dentro sigue siendo de 56 y solo cambia lo que mide en
       pantalla: así las cajas de cada glifo, medidas una a una, siguen
       valiendo. */
    viewBox: "0 0 56 56",
    width: 62,
    height: 62,
    shapeRendering: "geometricPrecision" as const,
  };

  if (marca === "instagram")
    return (
      <svg {...comun} aria-label="Instagram">
        <defs>
          {/* El degradado real arranca abajo a la izquierda en amarillo y sube
              girando hacia el violeta; no es un degradado recto de esquina a
              esquina. */}
          <radialGradient id="anti-ig" cx="28%" cy="102%" r="122%">
            <stop offset="0%" stopColor="#ffd776" />
            <stop offset="14%" stopColor="#fdca63" />
            <stop offset="30%" stopColor="#f79445" />
            <stop offset="46%" stopColor="#ea5a45" />
            <stop offset="62%" stopColor="#d92e7f" />
            <stop offset="80%" stopColor="#a936b0" />
            <stop offset="100%" stopColor="#5b51d8" />
          </radialGradient>
        </defs>
        <Baldosa fill="url(#anti-ig)" />
        <g transform={marco([0, 32, 448, 448], 33)}>
          <path d={GLIFO_INSTAGRAM} fill="#fff" />
        </g>
      </svg>
    );

  if (marca === "tiktok")
    return (
      <svg {...comun} aria-label="TikTok">
        <Baldosa fill="#010101" />
        {/* Las dos copias corridas en cian y magenta, y la blanca encima: eso
            es la marca, no un adorno. El corrimiento va en las unidades del
            glifo, que mide 2859 de ancho, no en píxeles de pantalla. */}
        <g transform={marco([0, 0, 2859, 3333], 33)}>
          <path d={GLIFO_TIKTOK} fill="#25f4ee" transform="translate(-150 -105)" />
          <path d={GLIFO_TIKTOK} fill="#fe2c55" transform="translate(150 105)" />
          <path d={GLIFO_TIKTOK} fill="#fff" />
        </g>
      </svg>
    );

  if (marca === "youtube")
    return (
      <svg {...comun} aria-label="YouTube">
        <Baldosa fill="#fff" />
        {/* Un solo camino: el rectángulo blando y la muesca del triángulo van
            en la misma forma, así que el blanco de dentro es el de la baldosa
            y no un triángulo pegado encima que se desalinee. */}
        <g transform={marco([14, 64, 548, 384], 37)}>
          <path d={GLIFO_YOUTUBE} fill="#ff0000" fillRule="evenodd" />
        </g>
      </svg>
    );

  if (marca === "x")
    return (
      <svg {...comun} aria-label="X">
        <Baldosa fill="#000" />
        <g transform={marco([0, 0, 1200, 1227], 29)}>
          <path d={GLIFO_X} fill="#fff" />
        </g>
      </svg>
    );

  return (
    <svg {...comun} aria-label="Facebook">
      <Baldosa fill="#0866ff" />
      {/* La f no se centra: se apoya en el borde de abajo y se sale, que es lo
          que hace el icono de verdad. Por eso lleva su propia colocación y no
          pasa por marco(). */}
      <g transform="translate(28 56.4) scale(0.0742) translate(-160 -512)">
        <path d={GLIFO_FACEBOOK} fill="#fff" />
      </g>
    </svg>
  );
}
