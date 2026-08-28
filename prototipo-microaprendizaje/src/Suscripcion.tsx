import { useState, type ReactElement } from "react";
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

   TRES VARIANTES, PORQUE SON TRES PERSONAS DISTINTAS. Al que nunca ha pagado
   hay que decirle qué se lleva; al que canceló, ya lo sabe —lo ha tenido— y
   lo que hay que decirle es que su sitio sigue guardado; y al que se le ha
   caducado sin querer hay que decirle que se ha quedado fuera y ponérselo
   fácil, que es la única de las tres que lleva oferta. Prometerle «libros
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

   LAS MEDIDAS SON LAS DE LA CAPTURA, píxel a píxel, y están apuntadas en la
   hoja de estilos junto a `.suscri`. Se llegó ahí después de tres versiones
   que se le parecían cada vez menos; a la cuarta Pablo dijo «hazlo
   exactamente igual, mismo tamaño de letras y todo».

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

/* --------------------------------------------------------------------------
   LOS DOS DIBUJOS: la tarjeta entera y la tarjeta rota.

   Los mandó Pablo en PNG y aquí van redibujados en SVG. No es capricho: son
   cuatro figuras planas —un rectángulo redondeado, un círculo y dos barras—,
   así que en SVG pesan cuatrocientos bytes en vez de sesenta kilos, no se ven
   borrosos a ningún tamaño y el color se puede tocar desde la hoja de estilos
   el día que haga falta. Sus colores sí son los suyos, muestreados del PNG:
   rojo (255, 101, 90) y crema (255, 247, 232).

   Las medidas salen de medirle los píxeles al fichero, normalizadas a una
   caja de 96 × 63 —la proporción del original, 865 × 564—:

     tarjeta   radio 8,3 de 63 de alto
     círculo   centro (80,3 · 15), radio 6,2
     barra 1   x 11,7  y 39,4   27,9 × 4,7
     barra 2   x 11,7  y 47,8   17,2 × 4,7

   Y LAS DOS SON LA MISMA FIGURA. En los PNG la rota es un poco más ancha; se
   ha igualado a propósito, porque las dos tarjetas del perfil enseñan LA
   MISMA cosa en dos estados —el pase entero y el pase roto—, y si cambian de
   tamaño al cambiar de estado parecen dos objetos distintos.

   La rasgadura se hace con una máscara y no con dos mitades dibujadas a mano:
   el hueco tiene que ser transparente para que se vea la banda marrón por
   detrás, y una máscara con un zigzag de 5,5 de grosor lo resuelve sin tener
   que calcular los dos contornos. El zigzag sale de rastrear el hueco del PNG
   fila a fila: va de x≈48 a x≈54 y vuelve, cada diez de alto.
   -------------------------------------------------------------------------- */

const ROJO = "#ff655a";
const CREMA = "#fff7e8";

/** Lo que va impreso en el pase: el chip y las dos líneas. */
function CaraDeTarjeta() {
  return (
    <>
      <rect x="0" y="0" width="96" height="63" rx="8.5" fill={ROJO} />
      <circle cx="80.3" cy="15" r="6.2" fill={CREMA} />
      <rect x="11.7" y="39.4" width="27.9" height="4.7" rx="2.35" fill={CREMA} />
      <rect x="11.7" y="47.8" width="17.2" height="4.7" rx="2.35" fill={CREMA} />
    </>
  );
}

function TarjetaEntera() {
  return (
    <svg viewBox="0 0 96 63" aria-hidden>
      <CaraDeTarjeta />
    </svg>
  );
}

function TarjetaRota() {
  return (
    <svg viewBox="0 0 96 63" aria-hidden>
      <defs>
        <mask id="curva-rasga">
          <rect x="-2" y="-2" width="100" height="67" fill="#fff" />
          <path
            d="M48 -3 L53.5 8 L48.5 18 L54 26 L49 33.5 L54.5 43 L50 53.5 L52.5 66"
            fill="none"
            stroke="#000"
            strokeWidth="5.5"
          />
        </mask>
      </defs>
      <g mask="url(#curva-rasga)">
        <CaraDeTarjeta />
      </g>
    </svg>
  );
}

/** Quién está mirando la tarjeta. Sale del estado de la app. */
export type EstadoPago = "nuevo" | "cancelado" | "caducado";

/** El descuento de la vuelta, en tanto por ciento.
 *
 *  Vive aquí porque la tarjeta lo dice y la caja lo cobra, y son dos ficheros:
 *  escrito dos veces, el día que se cambie el número se cambiará en uno solo y
 *  la app prometerá una cosa y cobrará otra. */
export const DESCUENTO_VUELTA = 45;

const TEXTOS: Record<EstadoPago, {
  Sello: () => ReactElement;
  alto: string;
  bajo: string;
  lema: string;
  boton: string;
}> = {
  nuevo: {
    Sello: TarjetaEntera,
    /* Las dos líneas siguen el reparto de la captura: arriba en blanco LA
       COSA, abajo en naranja EL DATO con fecha. La suya dice «Tu acceso
       Premium / expira el agosto 28»; la nuestra pone en el renglón naranja
       lo que Pablo quería destacar, los siete días. Y caben: a 25 de cuerpo
       en negrita, «7 días gratis» ocupa 169 puntos de los 314 que hay en un
       móvil estrecho, mientras que «y curiosidades cada día» se pasaba.

       EL TONO ES EL SUYO, no el de una tarifa. Pablo lo pidió mirando la
       captura: «alcanza tus metas y logra…, algo así, mucho más motivador».
       Y es lo que hacen todas: la suya no promete funciones, promete que vas
       a llegar a donde querías —«sigue hoy con tu crecimiento personal y
       evita obstáculos en tus metas»—. Los renglones de aquí decían «libros
       ilimitados», «sin anuncios», «sin esperar a mañana»: eso es la letra
       pequeña del plan, no un motivo para pagar. Lo que se compra sigue
       estando, pero detrás del motivo y no delante. */
    alto: "Alcanza tus metas",
    bajo: "7 días gratis",
    lema: "Contenido ilimitado para que no dejes tus metas a medias.",
    boton: "Empezar prueba gratuita",
  },
  cancelado: {
    Sello: TarjetaRota,
    alto: "Sigue creciendo",
    bajo: "Vuelve hoy",
    lema: "Te guardamos la racha y lo que llevabas. Sigue donde lo dejaste.",
    boton: "Recuperar mi suscripción",
  },
  /* LA TERCERA, Y ES OTRA PERSONA MÁS. Pablo mandó el 28 de agosto la captura
     de Headway con esta: «Tu acceso Premium / ha expirado», y debajo un 45 %
     de descuento. La pidió tal cual: «pon esto para cuando la suscripción ha
     terminado en un usuario».

     NO ES LA DE «CANCELADO» CON OTRAS PALABRAS, aunque las dos hablen con
     alguien que ya pagó. Cancelar es una decisión: te fuiste, y lo que hay
     que decirte es que tu sitio sigue ahí. Caducar es un accidente —se acabó
     el año, o falló el cobro—, y a quien no decidió irse no se le pide que
     «vuelva»: se le dice que se ha quedado fuera sin querer y se le pone
     fácil entrar. De ahí que esta sea la única de las tres que trae una
     oferta encima.

     EL DIBUJO ES EL MISMO PASE ROTO que el de cancelado, y está bien que lo
     sea: en los dos casos lo que hay roto es el pase. Lo que cambia es de
     quién es la culpa, y eso lo dicen las palabras, no el icono.

     Y NO DICE EL PRECIO, que es la regla de esta tarjeta desde el principio:
     una tarjeta que vende promete, no explica tarifas. El 45 % sí va, porque
     un descuento sin número no es un descuento; los euros están una pantalla
     más allá, en la caja, y salen del mismo `DESCUENTO_VUELTA` de aquí
     arriba. */
  caducado: {
    Sello: TarjetaRota,
    /* «Caducado» y no «expirado». Los dos se entienden, y el suyo es el calco
       del inglés; el nuestro es la palabra que lleva toda la vida diciendo en
       castellano que a algo se le ha pasado la fecha. */
    alto: "Tu acceso completo",
    bajo: "ha caducado",
    lema: `No pierdas la racha ni lo que llevabas leído. Vuelve con un ${DESCUENTO_VUELTA} % de descuento.`,
    boton: `Continuar con el ${DESCUENTO_VUELTA} %`,
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
              <t.Sello />
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
            {/* Texto corriente, que parte por donde quiera. Estuvo troceado en
                piezas que no se rompían por dentro, para que un lema de dos
                frases cortas no bajara por la preposición; con una frase larga
                y seguida eso ya no hace falta, y además era peligroso: un
                trozo que no cupiera se salía de la tarjeta en vez de bajar. */}
            <p className="suscri-texto">{t.lema}</p>
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
