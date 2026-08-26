import { Fragment, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { spring, springSoft } from "./motion";
import { GlyphClose } from "./glyphs";

/* ==========================================================================
   EL PASE — la tarjeta de suscripción, solo para quien no paga

   Ocupa el sitio de «Desbloquea todo», que era una tarjeta morada maciza con
   un cohete y que salía siempre, se pagara o no. Salir siempre es el fallo
   gordo: a quien ya paga le estabas vendiendo lo que ya tiene, y una pantalla
   que le pide dinero a un cliente es una pantalla que ese cliente aprende a
   no mirar. Ahora se enseña solo con `suscrito` en falso, y desaparece el día
   que alguien paga.

   LA FORMA VIENE DE LA CAPTURA DE PABLO: la tarjeta se parte en dos. Arriba
   una banda de color con el símbolo y el titular; abajo, sobre el fondo
   normal, la explicación y el botón. Ese corte es lo que la hace parecer un
   AVISO y no otra sección de la columna, y es la única pieza del perfil que
   se lee así. Se cierra con la equis, igual que la suya.

   DOS VARIANTES, PORQUE SON DOS PERSONAS DISTINTAS. Al que nunca ha pagado
   hay que decirle qué se lleva; al que canceló, ya lo sabe —lo ha tenido— y
   lo que hay que decirle es que su sitio sigue guardado. Prometerle «libros
   ilimitados» a quien acaba de dejar de pagarlos es no haberse enterado de
   nada. Cambian el símbolo, las dos líneas del titular, el lema y el botón;
   la caja es la misma.

   LO QUE DICE, Y LO QUE NO. La suya dice «sigue hoy con tu crecimiento
   personal y evita obstáculos en tus metas», que no significa nada y podría
   estar en cualquier app de cualquier cosa. La primera nuestra tampoco valía,
   por lo contrario: contaba el modelo de negocio —«gratis lees un libro al
   día», «378 resúmenes y 761 historias»— y una tarjeta que vende no explica
   tarifas, promete.

   Y no dice «resúmenes». Lo quitó Pablo, y tiene razón: quien va a pagar no
   compra resúmenes, que suena a versión recortada de algo mejor; compra los
   libros. Los shorts tampoco son «historias ilustradas» aquí: son
   CURIOSIDADES, que es lo que son cuando alguien decide si le compensa pagar.

   Y el lema del cuerpo es lo que Pablo pidió al ver la captura otra vez: una
   frase que venda, no una lista de lo que incluye la tarifa. La suya —«sigue
   hoy con tu crecimiento personal y evita obstáculos en tus metas»— vende sin
   decir nada. La nuestra vende diciendo algo que se puede comprobar: veinte
   minutos es lo que dura un resumen a la velocidad de la voz, contado en
   `minutosDePaginas()`.

   TODO DEL MISMO COLOR, como la tarjeta de la cuenta que tiene justo encima:
   la banda, el titular de abajo y el botón son el mismo ocre. La suya usa
   marrón en la banda, naranja en el titular y azul en el botón, tres colores
   para una sola idea.
   ========================================================================== */

/** Quién está mirando la tarjeta. Sale del estado de la app. */
export type EstadoPago = "nuevo" | "cancelado";

const TEXTOS: Record<EstadoPago, {
  sello: string;
  alto: string;
  bajo: string;
  lema: string;
  boton: string;
}> = {
  nuevo: {
    /* Una entrada, no una pila de libros. La pila la devolvió Pablo —«esos
       libros son muy feos, pon algo que no parezca tan genérico de IA»— y
       tenía razón: un montón de libros en una app de libros no dice nada, es
       el dibujo por defecto. La entrada dice lo que se compra, que es el
       PASE, y es además lo que pone la captura de referencia en ese mismo
       hueco. */
    sello: "🎟️",
    alto: "Libros ilimitados",
    bajo: "y curiosidades cada día",
    lema: "Un libro entero al día,|en veinte minutos.",
    boton: "Empezar prueba gratuita",
  },
  cancelado: {
    /* Un marcapáginas y no un candado: al que canceló no se le cierra nada,
       se le guarda el sitio. El dibujo tiene que decir eso mismo. */
    sello: "🔖",
    alto: "Tu suscripción",
    bajo: "está cancelada",
    lema: "Te guardamos la racha, los apuntes|y todo lo que dejaste a medias.",
    boton: "Recuperar mi suscripción",
  },
};

export function Suscripcion({
  estado = "nuevo",
  onSuscribirse,
}: {
  estado?: EstadoPago;
  onSuscribirse?: () => void;
}) {
  const [visible, setVisible] = useState(true);
  const t = TEXTOS[estado];

  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.section
          className="suscri"
          key={estado}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0, height: "auto", marginTop: 14 }}
          exit={{ opacity: 0, height: 0, marginTop: 0, transition: { duration: 0.28 } }}
          transition={{ ...springSoft, delay: 0.14 }}
          aria-label="Hazte de pago"
        >
          <div className="suscri-banda">
            {/* El símbolo sobre un plato redondo, como el candado de la
                tarjeta de la cuenta que tiene justo encima. Es lo que hace que
                un emoji deje de parecer pegado: le da un plano propio y ata
                las dos tarjetas, que son las dos únicas de la pantalla que
                llevan uno. */}
            <motion.span
              className="suscri-sello"
              aria-hidden
              initial={{ scale: 0.6, opacity: 0, rotate: -14 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ ...spring, delay: 0.3 }}
            >
              {t.sello}
            </motion.span>
            <h2 className="suscri-titulo">
              {t.alto}
              <b>{t.bajo}</b>
            </h2>

            {/* La equis, como la suya. Se cierra por esta sesión y ya: quien
                no quiere leerla ahora no tiene por qué pelearse con ella. */}
            <button
              className="suscri-cerrar"
              type="button"
              onClick={() => setVisible(false)}
              aria-label="Cerrar este aviso"
            >
              <GlyphClose />
            </button>
          </div>

          <div className="suscri-cuerpo">
            {/* El lema va partido por la barra en piezas que no se rompen por
                dentro: si no cabe en un renglón, baja por donde tiene sentido
                y no por «cada / día».

                El espacio va FUERA de las piezas y como `{" "}`. Dentro se
                pierde: los trozos son `inline-block` y un blanco al final de
                una caja en línea lo recoge el navegador. Y en JSX el salto de
                línea entre dos elementos tampoco cuenta como espacio, así que
                hay que escribirlo. Se veía «cada día,en veinte minutos». */}
            <p className="suscri-texto">
              {t.lema.split("|").map((trozo, i) => (
                <Fragment key={i}>
                  {i > 0 ? " " : null}
                  <span>{trozo}</span>
                </Fragment>
              ))}
            </p>
            <motion.button
              className="suscri-boton"
              type="button"
              onClick={onSuscribirse}
              whileTap={{ scale: 0.975 }}
            >
              {t.boton}
            </motion.button>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
