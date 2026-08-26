import { useState } from "react";
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

   PERO EL ARGUMENTO ES NUESTRO, Y ES VERDAD. La suya dice «sigue hoy con tu
   crecimiento personal y evita obstáculos en tus metas», que no significa
   nada y podría estar en cualquier app de cualquier cosa. La nuestra dice lo
   que de verdad separa las dos versiones de Curva, y es una frase que el
   usuario puede comprobar dos pantallas más atrás: gratis se lee UN libro al
   día —el de la tarjeta «Gratis hoy» de la portada— y pagando se abren los
   378 sin esperar a mañana. Un motivo concreto para pagar convence más que
   una promesa de crecimiento personal.

   TODO DEL MISMO COLOR, como la tarjeta de la cuenta que tiene justo encima:
   la banda, el titular de abajo y el botón son el mismo ocre. La suya usa
   marrón en la banda, naranja en el titular y azul en el botón, tres colores
   para una sola idea.
   ========================================================================== */

export function Suscripcion({
  /** Cuántos resúmenes hay escritos. Sale del catálogo, no de una promesa. */
  libros,
  onOferta,
}: {
  libros: number;
  onOferta?: () => void;
}) {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.section
          className="suscri"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0, height: "auto", marginTop: 14 }}
          exit={{ opacity: 0, height: 0, marginTop: 0, transition: { duration: 0.28 } }}
          transition={{ ...springSoft, delay: 0.14 }}
          aria-label="Hazte de pago"
        >
          <div className="suscri-banda">
            <motion.span
              className="suscri-sello"
              aria-hidden
              initial={{ scale: 0.6, opacity: 0, rotate: -14 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ ...spring, delay: 0.3 }}
            >
              📚
            </motion.span>
            <h2 className="suscri-titulo">
              Gratis lees un libro al día
              <b>Ábrelos todos</b>
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
            <p className="suscri-texto">
              {libros} resúmenes y 761 historias, sin esperar a mañana y sin un solo anuncio.
            </p>
            <motion.button
              className="suscri-boton"
              type="button"
              onClick={onOferta}
              whileTap={{ scale: 0.975 }}
            >
              Probar 7 días gratis
            </motion.button>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
