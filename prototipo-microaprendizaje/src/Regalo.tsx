import { motion } from "framer-motion";
import { GlyphClose } from "./glyphs";
/* Aquí se importaban `LIBROS_RESUMEN`, `CURIOSIDADES`, `DATOS` y `GlyphVisto`
   para la lista de cuatro puntos —«400 resúmenes», «225 historias»…— con sus
   vistos verdes. La lista salió el 5 de septiembre al calcar la captura de
   Headway, donde no hay ninguna: no cabe sin obligar a hacer scroll en una
   pantalla de pago. Las cuatro cifras se contaban de los propios datos, así
   que al volver a ponerlas hay que devolver estos cuatro `import`. */
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


/* AQUÍ VIVÍAN LAS ESTRELLAS Y EL CONFETI, y se fueron el 5 de septiembre.
   Pablo: «quítame las animaciones que pones y deja las imágenes como están, y
   quítame las estrellas que añadiste al lado del pollo».

   Eran seis estrellas de cinco puntas y diez papelillos que salían disparados
   del centro de la escena, en el rojo #f35247 del cupón y el amarillo #fdbb2d
   del pollito, muestreados de su propio dibujo.

   Y ese era justo el problema, visto ahora: **su dibujo YA TRAE destellos**,
   cuatro chispas de cuatro puntas repartidas alrededor del pollito. Poner seis
   estrellas más grandes encima no añadía fiesta, tapaba las suyas y convertía
   un dibujo terminado en un dibujo con adornos pegados alrededor. Es la misma
   lección de «¿Sabías que…?» y de la etiqueta de «Gratis hoy»: cuando la pieza
   ya está resuelta, lo de al lado solo le quita sitio.

   Están enteras en el historial de git, con su escalonado de 45 ms y los
   periodos distintos de flotación. */

/* --------------------------------------------------------------------------
   1. El aviso, encima del inicio
   -------------------------------------------------------------------------- */

/* Ya no recibe `reducido`. Lo usaba para no menear la caja cuando el móvil
   pide menos movimiento; desde que la caja está quieta siempre, no hay
   movimiento que perdonar. */
export function AvisoRegalo({
  onAbrir,
  onCerrar,
}: {
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
        {/* QUIETA. Flotaba y se balanceaba despacio, «pidiendo que la abras».
            Pablo lo quitó el 5 de septiembre: la imagen se pinta y ya está. */}
        <div className="regalo-caja">
          {/* EL REGALO ES SUYO DESDE EL 4 DE SEPTIEMBRE. Aquí había una caja
              dibujada por mí, en isométrica y con la tapa que salía despedida
              al abrirse. Pablo mandó ésta —coral y oro, la familia de sus
              emoticonos— y pidió ponerla «donde tenemos el regalo».

              Que sea una imagen y no un dibujo animado no cuesta nada: en esta
              pantalla la caja está SIEMPRE CERRADA. Lo que se abría era la de
              la oferta, y esa la ocupa el pollito desde hace un rato. Lo que
              sí se conserva es el meneo, que es lo que pide que la toques. */}
          <img className="regalo-imagen" src={regaloCaja} width={168} height={179} alt="" />
        </div>

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

/* Aquí había un estado `abierta` con un temporizador de 240 ms: la pantalla
   entraba con la caja cerrada y disparaba las estrellas un instante después,
   para que el estallido se leyera como consecuencia de haber pulsado «Abrir».
   Sin estrellas que disparar, el temporizador no encendía nada. Y `reducido`
   se iba con él, que era lo que lo ponía a cero. */
export function Oferta({ onCerrar }: { onCerrar: () => void }) {
  return (
    <motion.div
      className="oferta"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0, transition: spring }}
      exit={{ opacity: 0, y: 24, transition: { duration: 0.2 } }}
    >
      <div className="oferta-head">
        <button className="oferta-cerrar" onClick={onCerrar} aria-label="Cerrar">
          <GlyphClose />
        </button>
      </div>

      <div className="oferta-cuerpo">
        {/* EL POLLITO CON EL CUPÓN, que es lo que se mira primero. Lo mandó
            Pablo el 4 de septiembre y trae el «44 %» pintado dentro, con las
            mismas tres líneas que el cartel morado de la captura de Headway
            —«DESCUENTO PARA TI», el número y «DE DESCUENTO»—, así que encaja
            en el sitio de su cerebro sin cambiarle nada.

            Se columpia despacio, colgando del cupón que sujeta con las dos
            manos. No flota arriba y abajo como la caja: un peso que cuelga de
            algo se balancea, y ese es el gesto que hace creíble que lo esté
            agarrando de verdad. */}
        <div className="oferta-escena">
          {/* QUIETO. Se columpiaba despacio, colgando del cupón, y entraba
              cayendo desde arriba. Las dos cosas se fueron el 5 de septiembre
              a petición de Pablo: la imagen se pinta y ya está. */}
          <img
            className="oferta-pollito"
            src={pollitoCupon}
            alt={`Un pollito sujetando un cupón del ${DESCUENTO} % de descuento`}
          />
        </div>

        {/* EL AHORRO EN EUROS. El cupón dice el tanto por ciento y esto dice lo
            mismo en dinero, que es como se piensa. La resta se hace aquí y no
            se escribe a mano: cambiar un precio no puede dejar el ahorro
            diciendo otra cosa. */}
        <span className="oferta-ahorro">
          Ahorra {euros(PRECIO_NORMAL - PRECIO_OFERTA)}/año
        </span>

        <div className="oferta-precios">
          {/* El tachado se DIBUJABA de izquierda a derecha. Ahora está puesto
              y ya: un precio tachado se entiende sin verlo tacharse. */}
          <span className="oferta-antes">
            {euros(PRECIO_NORMAL)}
            <span className="oferta-tachon" />
          </span>

          <span className="oferta-ahora">
            {euros(PRECIO_OFERTA)}
            <span className="oferta-periodo">/año</span>
          </span>
        </div>

        {/* El precio por mes y no por año es el mismo dinero dicho de la manera
            en que se piensa el gasto pequeño. */}
        <p className="oferta-mes">solo {AL_MES} al mes</p>
      </div>

      <div className="oferta-pie">
        {/* EL BOTÓN, CON LA LETRA PEQUEÑA DENTRO. Es lo que más se copia de su
            captura y lo que más cambia: la nota de «cancela cuando quieras»
            estaba fuera, en gris sobre el fondo, que es el sitio donde no la
            lee nadie. Dentro del azul y debajo de la palabra se lee, y además
            quita el miedo justo en el instante en que se decide. */}
        {/* El `whileTap` se queda: no es una animación de entrada, es el acuse
            de que el dedo ha tocado. Sin él un botón parece que no responde. */}
        <motion.button className="oferta-cta" onClick={onCerrar} whileTap={{ scale: 0.97 }}>
          <span className="oferta-cta-titulo">Continuar</span>
          <span className="oferta-cta-pie">
            Dos pasos para empezar · Se cancela cuando quieras
          </span>
        </motion.button>

        <p className="oferta-seguro">
          <GlyphEscudo />
          Se cobra en la tienda
        </p>

        <div className="oferta-filete" />

        <div className="oferta-enlaces">
          <button onClick={onCerrar}>Términos y condiciones</button>
          <button onClick={onCerrar}>Política de privacidad</button>
          <button onClick={onCerrar}>Restaurar compra</button>
        </div>
      </div>
    </motion.div>
  );
}

/* El escudo con el visto de la línea de la tienda. Va aquí y no en `glyphs`
   porque solo se usa en esta pantalla: catorce puntos, trazo de 1,6 y las
   mismas proporciones que el de su captura. */
function GlyphEscudo() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3 4.8 5.8v5.4c0 4.3 2.9 8.3 7.2 9.6 4.3-1.3 7.2-5.3 7.2-9.6V5.8L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="m8.9 11.9 2.2 2.2 4-4.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Aquí vivía `Titular`, el «38 % menos» con el número subiendo desde cero
   mientras se abría la caja. Se fue el 4 de septiembre, cuando el descuento
   pasó a estar pintado dentro del cupón que sujeta el pollito: el número ya se
   ve, más grande, y decirlo dos veces en la misma pantalla era competir
   consigo mismo. Está en el historial de git con su animación entera. */

