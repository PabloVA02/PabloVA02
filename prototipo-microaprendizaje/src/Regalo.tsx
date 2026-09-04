import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GlyphClose, GlyphVisto } from "./glyphs";
import { LIBROS_RESUMEN } from "./libros/puente";
import { CURIOSIDADES } from "./historias/curiosidades";
import { DATOS } from "./sabias";
import pollitoCupon from "./ilustraciones/pollito-cupon.webp";
import { spring, springPop, springSoft } from "./motion";

/* ==========================================================================
   El regalo.

   Dos pantallas y UN objeto. El aviso enseña la caja cerrada; la oferta la
   enseña abierta. Entre las dos no se destruye nada: es la misma caja, que
   cambia de sitio y de estado. Esa continuidad de motivo es lo que hace que
   el segundo paso se sienta consecuencia del primero y no otra pantalla más.

   La tapa NO se desvanece: sale despedida, gira y se sale de cuadro. Un
   elemento que se va con física se lee como abierto; uno que baja la opacidad
   se lee como un fallo de carga.

   Las estrellas salen del CENTRO de la caja hacia fuera, escalonadas 45 ms, y
   se quedan flotando a periodos distintos. Salir todas a la vez del mismo
   punto y quedarse quietas es lo que delata una animación barata.

   Los precios no están escritos a mano: el porcentaje se calcula. Si mañana
   cambia la oferta, el titular cambia solo y no puede mentir.
   ========================================================================== */

/* EL PRECIO SALE DEL CUPÓN, y no al revés. El dibujo que mandó Pablo el 4 de
   septiembre lleva «44 % DE DESCUENTO» pintado dentro, así que el precio de
   oferta tiene que ser el que dé 44 sobre el normal —23,99 × 0,56 = 13,43— y
   13,49 es el número redondo más cercano por arriba: (1 − 13,49/23,99) = 43,8,
   que redondea a 44.

   Si algún día cambia el precio, HAY QUE MIRAR ESTO: `DESCUENTO` se recalcula
   solo y el dibujo no, así que la pantalla diría dos números distintos. Estaba
   en 14,99, que daba 38.
   ========================================================================== */
const PRECIO_NORMAL = 23.99;
const PRECIO_OFERTA = 13.49;

const DESCUENTO = Math.round((1 - PRECIO_OFERTA / PRECIO_NORMAL) * 100);
const euros = (n: number) => n.toFixed(2).replace(".", ",") + " €";
const AL_MES = euros(PRECIO_OFERTA / 12);

/* --------------------------------------------------------------------------
   El zorro
   -------------------------------------------------------------------------- */

/**
 * El que vive dentro de la caja.
 *
 * Es un zorro y no un búho ni un panda por una razón práctica: el cuerpo va en
 * terracota y el pecho en hueso, que son dos colores que YA existen en la
 * paleta. Un animal con colores nuevos habría metido dos tintas más en una app
 * que tiene cinco y punto.
 *
 * La salida es de dibujo animado, no de interfaz: sube pasándose de largo,
 * aterriza aplastado y se recompone. La deformación es lo único que hace que
 * un muñeco parezca tener peso, y va en los dos ejes a la vez —se estira al
 * subir, se ensancha al caer— porque el volumen se conserva.
 *
 * Las cinco animaciones de reposo van cada una por su lado y con periodos que
 * no son múltiplos entre sí: respiración, cola, orejas, parpadeo y el balanceo
 * de la cabeza. Si compartieran reloj, el zorro sería un metrónomo. Como no lo
 * comparten, nunca repite la misma pose y parece que está vivo.
 */
function Zorro({ reducido }: { reducido: boolean }) {
  return (
    <motion.g
      style={{ originX: "100px", originY: "96px" }}
      initial={reducido ? { opacity: 0 } : { y: 78, scaleY: 0.72, scaleX: 1.2, opacity: 0 }}
      animate={
        reducido
          ? { opacity: 1 }
          : {
              // Sale disparado, se pasa doce píxeles, cae y se asienta.
              y: [78, 40, -12, 3, 0],
              scaleY: [0.72, 0.9, 1.14, 0.95, 1],
              scaleX: [1.2, 1.08, 0.9, 1.05, 1],
              rotate: [0, 0, -4, 2, 0],
              opacity: [0, 1, 1, 1, 1],
            }
      }
      transition={
        reducido
          ? { duration: 0.25 }
          : { duration: 0.82, delay: 0.2, times: [0, 0.18, 0.52, 0.8, 1], ease: "easeOut" }
      }
    >
      {/* Respiración y balanceo. Empieza cuando el salto ya ha terminado */}
      <motion.g
        style={{ originX: "100px", originY: "96px" }}
        animate={
          reducido ? {} : { y: [0, -2.6, 0], scaleY: [1, 1.025, 1], rotate: [0, 2.2, 0, -2.2, 0] }
        }
        transition={{
          y: { duration: 2.9, repeat: Infinity, ease: "easeInOut", delay: 1.05 },
          scaleY: { duration: 2.9, repeat: Infinity, ease: "easeInOut", delay: 1.05 },
          rotate: { duration: 7.3, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
        }}
      >
        {/* La cola, detrás de todo. Gira sobre su nacimiento, no sobre el
            centro: una cola que pivota por el medio parece una hélice. */}
        <motion.g
          style={{ originX: "124px", originY: "92px" }}
          animate={reducido ? {} : { rotate: [-9, 12, -9] }}
          transition={{ duration: 1.35, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
        >
          {/* Hecha de círculos que van menguando, no de un contorno: así el
              perfil sale mullido y la punta afila sola. Con una curva cerrada
              a mano la cola parecía un brazo doblado. */}
          <circle cx="122" cy="90" r="13" fill="var(--clay)" />
          <circle cx="131" cy="79" r="12.2" fill="var(--clay)" />
          <circle cx="137" cy="67" r="11" fill="var(--clay)" />
          <circle cx="140" cy="55" r="9.6" fill="var(--clay)" />
          <circle cx="139" cy="44" r="8.4" fill="var(--paper)" />
          <circle cx="134" cy="35" r="6.6" fill="var(--paper)" />
        </motion.g>

        {/* Orejas. Cada una con su periodo, para que no se muevan a la vez */}
        <motion.g
          style={{ originX: "92px", originY: "25px" }}
          animate={reducido ? {} : { rotate: [0, -13, 0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2.3, ease: "easeInOut", delay: 1.5 }}
        >
          <path
            d="M82 26 L76 8 L96 20 Z"
            fill="var(--clay)"
            stroke="var(--clay)"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <path
            d="M84 23 L80.5 13 L91 19 Z"
            fill="var(--skin)"
            stroke="var(--skin)"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </motion.g>
        <motion.g
          style={{ originX: "108px", originY: "25px" }}
          animate={reducido ? {} : { rotate: [0, 13, 0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3.1, ease: "easeInOut", delay: 2.1 }}
        >
          <path
            d="M118 26 L124 8 L104 20 Z"
            fill="var(--clay)"
            stroke="var(--clay)"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <path
            d="M116 23 L119.5 13 L109 19 Z"
            fill="var(--skin)"
            stroke="var(--skin)"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* Cuerpo y pechera */}
        <path d="M74 98 C74 76, 85 66, 100 66 C115 66, 126 76, 126 98 Z" fill="var(--clay)" />
        <path d="M88 98 C88 82, 93 75, 100 75 C107 75, 112 82, 112 98 Z" fill="var(--paper)" opacity="0.9" />

        {/* Las manos agarran el borde de la caja: media pata queda dentro,
            tapada por las caras de delante, y por eso se lee como agarre */}
        <g>
          <ellipse cx="76" cy="84" rx="9" ry="6.6" fill="var(--clay)" />
          <ellipse cx="124" cy="84" rx="9" ry="6.6" fill="var(--clay)" />
          <path
            d="M72.6 82.6 v3 M76 82.2 v3.4 M79.4 82.6 v3 M120.6 82.6 v3 M124 82.2 v3.4 M127.4 82.6 v3"
            stroke="var(--clay-deep)"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.45"
          />
        </g>

        {/* Cabeza */}
        <ellipse cx="100" cy="41" rx="28" ry="24" fill="var(--clay)" />
        <ellipse cx="100" cy="52" rx="15" ry="10.5" fill="var(--paper)" />
        <ellipse cx="79" cy="47" rx="6" ry="4" fill="var(--clay-veil)" opacity="0.7" />
        <ellipse cx="121" cy="47" rx="6" ry="4" fill="var(--clay-veil)" opacity="0.7" />
        <ellipse cx="100" cy="47.5" rx="4.4" ry="3.4" fill="#2b2320" />
        <path
          d="M100 51 q0 3.6 -4 3.6 M100 51 q0 3.6 4 3.6"
          stroke="#2b2320"
          strokeWidth="1.7"
          strokeLinecap="round"
          fill="none"
        />

        {/* Los dos ojos parpadean juntos, que es como parpadea todo el mundo.
            Un ojo suelto es un guiño, y un guiño cada cuatro segundos cansa. */}
        <motion.g
          style={{ originX: "100px", originY: "37px" }}
          animate={reducido ? {} : { scaleY: [1, 1, 0.06, 1] }}
          transition={{
            duration: 4.2,
            times: [0, 0.9, 0.945, 1],
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.6,
          }}
        >
          <ellipse cx="87.5" cy="37" rx="5.4" ry="6" fill="#2b2320" />
          <ellipse cx="112.5" cy="37" rx="5.4" ry="6" fill="#2b2320" />
          <circle cx="89.6" cy="34.8" r="1.9" fill="#fff" opacity="0.92" />
          <circle cx="114.6" cy="34.8" r="1.9" fill="#fff" opacity="0.92" />
        </motion.g>
      </motion.g>
    </motion.g>
  );
}

/* --------------------------------------------------------------------------
   La caja
   -------------------------------------------------------------------------- */

/**
 * Isométrica de verdad: la tapa y el cuerpo comparten los mismos puntos de
 * fuga, así que al levantarse la tapa el volumen sigue cuadrando. Dibujarla
 * de frente y «sugerir» la profundidad con una sombra es lo que hace que
 * estas cajas parezcan pegatinas.
 *
 * El orden de pintado es lo que hace que el zorro salga DE la caja y no
 * DELANTE de ella: primero la boca oscura, luego el zorro, y encima las dos
 * caras de delante, que juntas tapan todo lo que quede por debajo del borde.
 * Sin ese sándwich, el muñeco flota sobre el dibujo como una pegatina.
 */
function Caja({
  abierta,
  reducido,
  tamano = 190,
  conZorro = false,
}: {
  abierta: boolean;
  reducido: boolean;
  tamano?: number;
  /** El zorro solo sale en la oferta: en el aviso la caja está por abrir. */
  conZorro?: boolean;
}) {
  return (
    <svg viewBox="0 0 200 200" width={tamano} height={tamano} aria-hidden>
      {/* Boca oscura: sin esto la caja abierta parece maciza */}
      <motion.path
        d="M100 96 L172 62 L100 28 L28 62 Z"
        fill="#2f3a26"
        initial={false}
        animate={{ opacity: abierta ? 1 : 0 }}
        transition={springSoft}
      />

      {conZorro && abierta && <Zorro reducido={reducido} />}

      {/* Cuerpo. Va DESPUÉS del zorro: es lo que le corta la cintura */}
      <g>
        <path d="M100 96 L172 62 L172 138 L100 172 Z" fill="var(--sage)" />
        <path d="M100 96 L28 62 L28 138 L100 172 Z" fill="var(--sage-oscuro, #55624a)" />
        {/* La cinta baja por las dos caras y se dobla en la arista */}
        <path d="M118 87 L118 163 L136 154 L136 78 Z" fill="var(--paper)" opacity="0.55" />
        <path d="M64 78 L64 154 L82 163 L82 87 Z" fill="var(--paper)" opacity="0.32" />
      </g>

      {/* Mientras está cerrada, algo empuja desde dentro cada dos por tres */}
      <motion.g
        style={{ originX: "100px", originY: "60px" }}
        animate={abierta || reducido ? {} : { y: [0, -6, 0, -2.5, 0], rotate: [0, -1.6, 0, 1, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 1.8, ease: "easeInOut", delay: 1.1 }}
      >
        {/* Tapa: sale despedida y gira */}
        <motion.g
          initial={false}
          animate={
            abierta
              ? { y: reducido ? -46 : -104, x: -18, rotate: -17, scale: 1.04, opacity: 0 }
              : { y: 0, x: 0, rotate: 0, scale: 1, opacity: 1 }
          }
          // La tapa no se desvanece en el sitio: se apaga cuando ya está
          // saliendo de cuadro, que es cuando dejaría de verse de todos modos.
          // Sin esto, el lienzo la recorta y queda un triángulo verde cortado
          // justo detrás de la cabeza del zorro.
          transition={{
            default: { type: "spring", stiffness: 190, damping: 13, mass: 1 },
            opacity: abierta ? { duration: 0.3, delay: 0.34 } : { duration: 0.2 },
          }}
          style={{ originX: "100px", originY: "60px" }}
        >
          <path d="M100 92 L180 54 L100 16 L20 54 Z" fill="var(--sage)" />
          <path d="M100 92 L180 54 L180 66 L100 104 Z" fill="var(--sage-oscuro, #55624a)" />
          <path d="M100 92 L20 54 L20 66 L100 104 Z" fill="var(--sage-oscuro, #55624a)" opacity="0.75" />
          {/* Lazo */}
          <g>
            <path d="M100 54 C82 40, 74 28, 86 22 C96 17, 100 34, 100 46" fill="var(--paper)" opacity="0.6" />
            <path d="M100 54 C118 40, 126 28, 114 22 C104 17, 100 34, 100 46" fill="var(--paper)" opacity="0.42" />
            <ellipse cx="100" cy="52" rx="9" ry="6" fill="var(--paper)" opacity="0.75" />
          </g>
        </motion.g>
      </motion.g>
    </svg>
  );
}

/** Las estrellas que salen disparadas. Solo aparecen con la caja abierta. */
/* LOS COLORES SALEN DEL DIBUJO, muestreados de su PNG: el rojo del cupón es
   #f35247 y el amarillo del pollito #fdbb2d. Antes eran los cinco acentos de
   la app —barro, ocre, ciruela, salvia—, y con el dibujo de Pablo dentro el
   morado y el verde salían de la nada: seis estrellas de dos colores que no
   están en el pollito convierten una escena en un adorno pegado alrededor.
   Ahora todo lo que estalla es de su misma familia. */
const ROJO_CUPON = "#f35247";
const ORO_POLLO = "#fdbb2d";

function Chispas({ reducido }: { reducido: boolean }) {
  // Colocadas a mano: dos altas, dos medias y dos bajas, y ninguna simétrica
  // con otra. Un reparto regular alrededor del centro se lee como un reloj.
  const estrellas = [
    { x: -104, y: -58, r: 15, t: ROJO_CUPON, d: 0 },
    { x: 96, y: -70, r: 13, t: ORO_POLLO, d: 0.045 },
    { x: -128, y: 16, r: 12, t: ORO_POLLO, d: 0.09 },
    { x: 124, y: 6, r: 14, t: ROJO_CUPON, d: 0.135 },
    { x: -78, y: 74, r: 11, t: ORO_POLLO, d: 0.18 },
    { x: 84, y: 82, r: 13, t: ORO_POLLO, d: 0.225 },
  ];

  return (
    <>
      {estrellas.map((e, i) => (
        <motion.svg
          key={i}
          className="regalo-chispa"
          viewBox="0 0 24 24"
          width={e.r * 2}
          height={e.r * 2}
          aria-hidden
          initial={{ x: 0, y: 0, scale: 0, rotate: -60, opacity: 0 }}
          animate={{ x: e.x, y: e.y, scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 240,
            damping: 15,
            mass: 0.9,
            delay: 0.28 + e.d,
          }}
        >
          {/* Flotan a periodos distintos: nunca coinciden dos */}
          <motion.g
            animate={reducido ? {} : { y: [0, -3.2, 0], rotate: [0, i % 2 ? 7 : -7, 0] }}
            transition={{
              duration: 2.6 + i * 0.37,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.9 + e.d,
            }}
            style={{ originX: "12px", originY: "12px" }}
          >
            <path
              d="M12 1.6 14.9 8.4 22.2 9.1 16.7 14 18.3 21.2 12 17.4 5.7 21.2 7.3 14 1.8 9.1 9.1 8.4Z"
              fill={e.t}
              stroke="var(--ink)"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </motion.g>
        </motion.svg>
      ))}
    </>
  );
}

/**
 * Papelillos. A diferencia de las estrellas, que se quedan flotando, estos
 * tienen gravedad: suben con la tapa, se frenan y caen girando. Dos curvas
 * distintas para el mismo movimiento —`easeOut` al subir, `easeIn` al caer—
 * porque una sola curva para todo el recorrido no es una parábola, es un
 * elemento que se mueve.
 */
function Confeti({ reducido }: { reducido: boolean }) {
  if (reducido) return null;

  const trozos = [
    { x: -118, sube: -78, cae: 96, giro: 420, c: ROJO_CUPON, w: 7, h: 11, t: 1.5, d: 0.2 },
    { x: -74, sube: -122, cae: 58, giro: -300, c: ORO_POLLO, w: 9, h: 9, t: 1.7, d: 0.26 },
    { x: -38, sube: -140, cae: 30, giro: 520, c: ORO_POLLO, w: 6, h: 12, t: 1.8, d: 0.22 },
    { x: -12, sube: -152, cae: 70, giro: -380, c: "#fbedd7", w: 8, h: 8, t: 1.9, d: 0.3 },
    { x: 22, sube: -134, cae: 44, giro: 340, c: ROJO_CUPON, w: 7, h: 11, t: 1.6, d: 0.24 },
    { x: 58, sube: -146, cae: 82, giro: -460, c: ORO_POLLO, w: 9, h: 7, t: 1.85, d: 0.34 },
    { x: 96, sube: -104, cae: 62, giro: 400, c: ORO_POLLO, w: 6, h: 12, t: 1.55, d: 0.2 },
    { x: 126, sube: -70, cae: 108, giro: -280, c: ROJO_CUPON, w: 8, h: 8, t: 1.45, d: 0.3 },
    { x: -100, sube: -134, cae: 26, giro: 300, c: "#fbedd7", w: 7, h: 10, t: 1.75, d: 0.38 },
    { x: 80, sube: -158, cae: 20, giro: -520, c: ORO_POLLO, w: 6, h: 11, t: 1.95, d: 0.42 },
  ];

  return (
    <>
      {trozos.map((p, i) => (
        <motion.span
          key={i}
          className="regalo-confeti"
          style={{ width: p.w, height: p.h, background: p.c }}
          initial={{ x: 0, y: 10, rotate: 0, opacity: 0 }}
          animate={{
            x: p.x,
            y: [10, p.sube, p.cae],
            rotate: p.giro,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: p.t,
            delay: p.d,
            x: { ease: "easeOut" },
            y: { times: [0, 0.42, 1], ease: ["easeOut", "easeIn"] },
            rotate: { ease: "linear" },
            opacity: { times: [0, 0.06, 0.72, 1] },
          }}
        />
      ))}
    </>
  );
}

/* --------------------------------------------------------------------------
   1. El aviso, encima del inicio
   -------------------------------------------------------------------------- */

export function AvisoRegalo({
  reducido,
  onAbrir,
  onCerrar,
}: {
  reducido: boolean;
  onAbrir: () => void;
  onCerrar: () => void;
}) {
  return (
    <motion.div
      className="regalo-velo"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      onClick={onCerrar}
    >
      <motion.div
        className="regalo-aviso"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 36, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.18 } }}
        transition={{ ...springPop, delay: 0.05 }}
      >
        {/* Late despacio: está pidiendo que la abras */}
        <motion.div
          className="regalo-caja"
          animate={reducido ? {} : { y: [0, -7, 0], rotate: [-1.6, 1.6, -1.6] }}
          transition={{
            y: { duration: 2.7, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 4.1, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Caja abierta={false} reducido={reducido} tamano={168} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: 0.22 }}
        >
          Tenemos un regalo para ti
        </motion.h2>

        <motion.button
          className="regalo-boton"
          onClick={onAbrir}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springPop, delay: 0.3 }}
        >
          Abrir
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

/* --------------------------------------------------------------------------
   2. La oferta
   -------------------------------------------------------------------------- */

export function Oferta({
  reducido,
  onCerrar,
}: {
  reducido: boolean;
  onCerrar: () => void;
}) {
  // La caja llega cerrada y se abre sola un instante después: si llegara ya
  // abierta, el gesto de haber pulsado «Abrir» se perdería.
  const [abierta, setAbierta] = useState(false);
  useEffect(() => {
    const id = window.setTimeout(() => setAbierta(true), reducido ? 0 : 240);
    return () => window.clearTimeout(id);
  }, [reducido]);

  return (
    <motion.div
      className="oferta"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0, transition: spring }}
      exit={{ opacity: 0, y: 24, transition: { duration: 0.2 } }}
    >
      <div className="oferta-head">
        <motion.button
          className="icon-btn"
          onClick={onCerrar}
          aria-label="Cerrar"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...springPop, delay: 0.9 }}
        >
          <GlyphClose />
        </motion.button>
      </div>

      <div className="oferta-cuerpo">
        <motion.span
          className="oferta-pastilla"
          initial={{ opacity: 0, y: -14, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...springPop, delay: 0.08 }}
        >
          Tu cupón
        </motion.span>

        {/* EL POLLITO CON EL CUPÓN, que es lo que se mira primero. Lo mandó
            Pablo el 4 de septiembre y trae el «44 %» pintado dentro, así que
            aquí ya no hace falta el titular que contaba el número: lo dice el
            dibujo, más grande y mejor.

            Se columpia despacio, colgando del cupón que sujeta con las dos
            manos. No flota arriba y abajo como la caja: un peso que cuelga de
            algo se balancea, y ese es el gesto que hace creíble que lo esté
            agarrando de verdad. */}
        <div className="oferta-escena">
          <motion.img
            className="oferta-pollito"
            src={pollitoCupon}
            alt="Un pollito sujetando un cupón del 44 % de descuento"
            initial={{ opacity: 0, y: -26, scale: 0.9 }}
            animate={
              reducido || !abierta
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 1, y: 0, scale: 1, rotate: [0, -2.2, 2.2, -1.2, 0] }
            }
            transition={
              reducido
                ? { duration: 0.01 }
                : { ...springPop, delay: 0.1, rotate: { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1 } }
            }
          />
          {abierta && (
            <>
              <Chispas reducido={reducido} />
              <Confeti reducido={reducido} />
            </>
          )}
        </div>

        <motion.h1
          className="oferta-titular"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: 0.42 }}
        >
          Todo Curva, un año
        </motion.h1>

        {/* LO QUE TE LLEVAS, CONTADO Y NO PROMETIDO.

            Es la pieza que faltaba y la que más pesa: antes de esto la
            pantalla pedía dinero por una palabra —«la oferta»— y quien no
            supiera ya lo que hay dentro no tenía con qué comparar el precio.
            Tres cifras y un renglón lo convierten en algo que se puede pesar.

            LAS CIFRAS SE CUENTAN, NO SE ESCRIBEN. Salen de los propios datos,
            así que el día que entren cien resúmenes más la pantalla lo dice
            sola. Un número escrito a mano aquí se queda viejo en una semana y
            nadie se entera, y ese número es una afirmación sobre lo que
            alguien está comprando. */}
        <motion.ul
          className="oferta-lista"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: 0.5 }}
        >
          {[
            /* Cada renglón, UNA línea. Dos líneas por punto convertían la
               lista en un párrafo y la lista deja de contarse de un vistazo,
               que es justo lo único que tiene que hacer. */
            [`${LIBROS_RESUMEN.length} resúmenes`, "y dónde falla cada libro"],
            [`${CURIOSIDADES.length} historias`, "ilustradas, de cinco minutos"],
            [`${DATOS.length} «¿Sabías que…?»`, "de un vistazo"],
            ["Sin anuncios", "y sin conexión"],
          ].map(([que, pie]) => (
            <li key={que}>
              <span className="oferta-visto" aria-hidden>
                <GlyphVisto tamano={12} />
              </span>
              <span>
                <b>{que}</b> {pie}
              </span>
            </li>
          ))}
        </motion.ul>

        <div className="oferta-precios">
          <motion.span
            className="oferta-antes"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...springSoft, delay: 0.62 }}
          >
            {euros(PRECIO_NORMAL)}
            {/* El tachado se DIBUJA: es el gesto de anular el precio viejo */}
            <motion.span
              className="oferta-tachon"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={reducido ? { duration: 0.01 } : { ...spring, delay: 0.82 }}
            />
          </motion.span>

          <motion.span
            className="oferta-ahora"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...springPop, delay: 0.94 }}
          >
            {euros(PRECIO_OFERTA)}
            <span className="oferta-periodo">/año</span>
          </motion.span>
        </div>

        {/* El precio por mes y no por año es el mismo dinero dicho de la manera
            en que se piensa el gasto pequeño. Y la comparación es literal, no
            un decir: a 1,12 no hay café en España que salga por menos. */}
        <motion.p
          className="oferta-mes"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...springSoft, delay: 1.02 }}
        >
          Salen <b>{AL_MES} al mes</b>. Menos que un café.
        </motion.p>
      </div>

      <div className="oferta-pie">
        <motion.button
          className="primary-btn oferta-cta"
          onClick={onCerrar}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...springPop, delay: 1.08 }}
        >
          Quiero mi {DESCUENTO} %
        </motion.button>

        <motion.p
          className="oferta-nota"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...springSoft, delay: 1.16 }}
        >
          Cancela cuando quieras · Sin permanencia · Se cobra en la tienda
        </motion.p>

        <motion.div
          className="pago-enlaces"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...springSoft, delay: 1.22 }}
        >
          <button onClick={onCerrar}>Restaurar</button>
          <button onClick={onCerrar}>Términos</button>
          <button onClick={onCerrar}>Privacidad</button>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* Aquí vivía `Titular`, el «38 % menos» con el número subiendo desde cero
   mientras se abría la caja. Se fue el 4 de septiembre, cuando el descuento
   pasó a estar pintado dentro del cupón que sujeta el pollito: el número ya se
   ve, más grande, y decirlo dos veces en la misma pantalla era competir
   consigo mismo. Está en el historial de git con su animación entera. */

