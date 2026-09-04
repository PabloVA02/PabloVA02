import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GlyphClose, GlyphVisto } from "./glyphs";
import { LIBROS_RESUMEN } from "./libros/puente";
import { CURIOSIDADES } from "./historias/curiosidades";
import { DATOS } from "./sabias";
import pollitoCupon from "./ilustraciones/pollito-cupon.webp";
import regaloCaja from "./ilustraciones/regalo.webp";
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

/* Aquí vivían el ZORRO y la CAJA: una caja isométrica dibujada a mano, con la
   tapa que salía despedida al abrirse y un zorro que asomaba por dentro. Las
   dos se fueron el 4 de septiembre, y cada una por su motivo.

   La caja, porque Pablo mandó la suya —coral y oro, la familia de sus
   emoticonos— y pidió ponerla «donde tenemos el regalo». La de aquí solo se
   usaba cerrada desde que la oferta pasó a enseñar el pollito, así que toda su
   maquinaria de apertura ya no la miraba nadie.

   Y el zorro, con ella: vivía dentro de la caja abierta.

   Están en el historial de git, con la isométrica entera y el parpadeo.


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
          {/* EL REGALO ES SUYO DESDE EL 4 DE SEPTIEMBRE. Aquí había una caja
              dibujada por mí, en isométrica y con la tapa que salía despedida
              al abrirse. Pablo mandó ésta —coral y oro, la familia de sus
              emoticonos— y pidió ponerla «donde tenemos el regalo».

              Que sea una imagen y no un dibujo animado no cuesta nada: en esta
              pantalla la caja está SIEMPRE CERRADA. Lo que se abría era la de
              la oferta, y esa la ocupa el pollito desde hace un rato. Lo que
              sí se conserva es el meneo, que es lo que pide que la toques. */}
          <img className="regalo-imagen" src={regaloCaja} width={168} height={179} alt="" />
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

