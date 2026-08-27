import { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useAnimationControls,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useVelocity,
} from "framer-motion";
import { Portada, type Libro } from "./Biblioteca";
import { spring, springPop } from "./motion";
import { GlyphClose } from "./glyphs";

/* ==========================================================================
   EL DADO Y LA TRAGAPERRAS

   Pablo, el 27 de agosto: «el fuego que está al lado del icono del perfil
   quítalo y lo cambias por un dado; cuando se pulsa el dado entra una
   animación como una especie de máquina tragaperras, ese tipo de animación
   donde hace un efecto de ir muy rápido y parar en un libro lentamente… se
   verán las portadas de nuestros libros».

   POR QUÉ NO ES UNA ANIMACIÓN BAJADA DE INTERNET, que era lo que pedía. Una
   animación hecha —un Lottie, un GIF— es un dibujo cerrado: trae dentro sus
   propias frutas o sus propios sietes y no hay manera de meterle nuestras
   cubiertas. Y lo que hace que esto valga la pena es justamente que pasen
   nuestros cuatrocientos libros, con la cubierta que dibujó él. Así que el
   rodillo está hecho aquí, con la TÉCNICA de las buenas, que es lo que sí se
   puede copiar y son cuatro cosas:

   1. **Una sola curva de frenada, no dos animaciones pegadas.** El rodillo
      arranca a tope y se va parando con una bézier muy tumbada al final
      —`0.09, 0.62, 0.14, 1`—, que es la que hace que los últimos tres o
      cuatro libros pasen de uno en uno y se lean. Si se usa una `ease-out`
      normal, frena demasiado pronto y parece que se ha atascado.
   2. **El rebote del final.** Se pasa dieciséis puntos de largo y vuelve con
      un muelle. Es lo que hace una máquina de verdad —el rodillo tiene
      inercia y el tope lo devuelve— y es la diferencia entre parecer una
      máquina y parecer una lista con scroll.
   3. **LA ESTELA SALE DE LA VELOCIDAD DE VERDAD, y esto es la corrección del
      27 de agosto.** La primera versión llevaba un `filter: blur()` de CSS
      encendido por reloj, y Pablo lo cató a la primera: «quita el desenfoque
      ese, lo suyo es que de girar tan rápido se vea difuminado». Tenía toda
      la razón y son dos errores en uno:

        · El `blur()` de CSS es REDONDO: difumina igual a lo ancho que a lo
          alto, o sea que no parece movimiento, parece que la cámara está
          desenfocada. Lo que borra una cosa que pasa deprisa es una estela
          en la dirección en que pasa, y eso en la web solo lo hace un filtro
          SVG con `stdDeviation="0 N"`: cero en horizontal, N en vertical.
        · E iba por tiempo, no por velocidad, así que seguía borroso cuando
          ya casi estaba parado.

      Ahora la `N` la escribe la velocidad real del rodillo, fotograma a
      fotograma, con `useVelocity`. Cuando va a cinco mil puntos por segundo
      la estela mide catorce; cuando frena, se apaga sola; cuando para, es
      cero sin que nadie tenga que apagarla. Es lo que hace de verdad una
      cámara, y es la diferencia entre «va rápido» y «está mal enfocado».

      Y el filtro va sobre la CAJA DE LA VENTANA, que mide trescientos por
      doscientos noventa, no sobre la tira, que mide cuatro mil de alto.
      Puesto sobre la tira, el navegador tiene que filtrar cuatro mil puntos
      de alto en cada fotograma para enseñar doscientos noventa.
   4. **Las casillas tienen forma de libro**, no de cuadrado: alto por ancho
      de tres a dos y pico, con el lomo a la izquierda y el canto de las hojas
      a la derecha. Un cuadrado con un dibujo dentro es un azulejo; lo que
      tiene que pasar por delante de la ventana son libros.

   Y el que no quiera animaciones no la ve: con `prefers-reduced-motion` el
   rodillo aparece parado en el libro que le ha tocado, que es la información
   que había que dar.
   ========================================================================== */

/** El ancho de cada libro dentro del rodillo. */
const ANCHO = 126;
/** Y su alto. La proporción es de libro de bolsillo, no de azulejo. */
const ALTO = 170;
/** De un libro al siguiente: el alto más el hueco. */
const PASO = 188;
/** El alto del hueco por el que se mira. Enseña el de en medio entero y un
 *  dedo del de arriba y del de abajo, que es lo que dice que hay más. */
const VENTANA = 292;
/** Cuántas cubiertas pasan antes de la buena. */
const VUELTA = 26;
/** Cuántas de esas pasan a velocidad constante, antes de empezar a frenar. */
const LANZADA = 13;
/** Lo que se pasa de largo antes de volver a su sitio. */
const REBOTE = 16;

/** El sitio donde para el rodillo para dejar centrada la cubierta `i`. */
const parada = (i: number) => -(i * PASO);

/** Cuántas cubiertas DISTINTAS pasan por el rodillo.
 *
 *  Doce, y no una por casilla, y es la corrección que más se nota. Con
 *  veintinueve distintas el navegador tiene que descomprimir veintinueve
 *  imágenes en el primer fotograma —las cubiertas de Pablo van incrustadas en
 *  el propio paquete—, y el rodillo arranca con las casillas EN BLANCO: se ve
 *  pasar una tira gris. Con doce repetidas hay doce descompresiones, se
 *  reaprovechan, y a la velocidad a la que van no hay ojo que note que la de
 *  arriba ya salió hace ocho. */
const BOLSA = 12;

/** La tira que se ve pasar: la bolsa repetida, la buena, y dos detrás para que
 *  la ventana no se quede a medias por abajo. */
function tirada(libros: Libro[], ganador: Libro): Libro[] {
  const suelta = () => libros[Math.floor(Math.random() * libros.length)];
  const bolsa: Libro[] = [];
  let intentos = 0;
  while (bolsa.length < BOLSA && intentos++ < 400) {
    const l = suelta();
    if (l !== ganador && !bolsa.includes(l)) bolsa.push(l);
  }
  const fuera: Libro[] = [];
  /* El paso de 7 —primo con 12— hace que la bolsa no salga siempre en el mismo
     orden. Recorriéndola del tirón se ve el bucle en cuanto frena. */
  for (let i = 0; i < VUELTA; i++) fuera.push(bolsa[(i * 7) % bolsa.length]);
  fuera.push(ganador);
  fuera.push(bolsa[3], bolsa[8]);
  return fuera;
}

/* --------------------------------------------------------------------------
   El dado de la cabecera
   -------------------------------------------------------------------------- */

/** Un cinco, que es la cara que más se reconoce de lejos. */
export function GlyphDado({ tamano = 22 }: { tamano?: number }) {
  return (
    <svg viewBox="0 0 48 48" width={tamano} height={tamano} aria-hidden>
      <rect x="4.5" y="4.5" width="39" height="39" rx="10.5" fill="#f8bb31" />
      <circle cx="15" cy="15" r="4.1" fill="#c2410c" />
      <circle cx="33" cy="15" r="4.1" fill="#c2410c" />
      <circle cx="24" cy="24" r="4.1" fill="#c2410c" />
      <circle cx="15" cy="33" r="4.1" fill="#c2410c" />
      <circle cx="33" cy="33" r="4.1" fill="#c2410c" />
    </svg>
  );
}

/* --------------------------------------------------------------------------
   La máquina
   -------------------------------------------------------------------------- */

export function Tragaperras({
  libros,
  onCerrar,
  onLeer,
}: {
  libros: Libro[];
  onCerrar: () => void;
  onLeer: (l: Libro) => void;
}) {
  /* «Otra vez» no reinicia estados a mano: cambia la llave y monta una tirada
     nueva de cero. Reiniciar seis cosas en el orden correcto es de donde salen
     los rodillos que se quedan a medias. */
  const [ronda, setRonda] = useState(0);
  return (
    <Ronda
      key={ronda}
      libros={libros}
      onCerrar={onCerrar}
      onLeer={onLeer}
      onOtra={() => setRonda((r) => r + 1)}
    />
  );
}

function Ronda({
  libros,
  onCerrar,
  onLeer,
  onOtra,
}: {
  libros: Libro[];
  onCerrar: () => void;
  onLeer: (l: Libro) => void;
  onOtra: () => void;
}) {
  const reducido = !!useReducedMotion();
  const ganador = useMemo(
    () => libros[Math.floor(Math.random() * libros.length)],
    [libros],
  );
  const lista = useMemo(() => tirada(libros, ganador), [libros, ganador]);
  const controles = useAnimationControls();
  const [parado, setParado] = useState(reducido);

  /* La posición del rodillo, como valor vivo, para poder preguntarle a qué
     velocidad va. Framer anima ESTE valor —el que va en `style`— cuando los
     controles tocan `y`, así que la animación y la medida son la misma cosa y
     no pueden desincronizarse. */
  const y = useMotionValue(0);
  const velocidad = useVelocity(y);
  const estela = useRef<SVGFEGaussianBlurElement>(null);

  useMotionValueEvent(velocidad, "change", (v) => {
    /* Puntos por segundo → altura de la estela. El tope de catorce no es por
       gusto: por encima de ahí el libro deja de reconocerse y lo que pasa por
       la ventana es una tira de color. */
    const alto = Math.min(14, Math.abs(v) / 195);
    estela.current?.setAttribute("stdDeviation", `0 ${alto.toFixed(2)}`);
  });

  useEffect(() => {
    if (reducido) {
      controles.set({ y: parada(VUELTA) });
      return;
    }
    let vivo = true;
    (async () => {
      /* PRIMER TIEMPO: a velocidad constante. Trece libros en un segundo, o
         sea unos dos mil quinientos puntos por segundo, y en línea recta.
         Este tramo faltaba y es el que echaba a perder el resto: si se frena
         desde el primer fotograma, nunca hay un momento de «esto va a toda
         pastilla», que es de lo que va una tragaperras.

         El retraso de la salida no es de estilo: es el respiro que necesita
         el navegador para pintar las doce cubiertas antes de que empiecen a
         correr. Sin él, los tres primeros fotogramas salen en blanco. */
      await controles.start({
        y: parada(LANZADA),
        transition: { duration: 0.95, delay: 0.16, ease: "linear" },
      });
      if (!vivo) return;

      /* SEGUNDO TIEMPO: la frenada. Y la curva no está elegida a ojo, está
         CALCULADA para que no haya un tirón en la junta.

         La velocidad con la que llega el primer tiempo son 2573 puntos por
         segundo. Este tramo recorre 2460 puntos en dos segundos, o sea 1230
         de media. Para empalmar sin salto, la curva tiene que arrancar a
         2573/1230 = 2,09 veces su media, y en una bézier la pendiente de
         salida es y1/x1: de ahí el 0,6 sobre 0,29. Con la curva de antes
         —0,62 sobre 0,09, o sea siete veces la media— el rodillo pegaba un
         acelerón justo al empezar a frenar.

         Y el 0,6 del segundo punto es lo que reparte el final: la curva se
         va tumbando durante el último 40 %, que es donde pasan los tres o
         cuatro últimos libros de uno en uno y se pueden leer. */
      await controles.start({
        y: parada(VUELTA) - REBOTE,
        transition: { duration: 2, ease: [0.29, 0.6, 0.6, 1] },
      });
      if (!vivo) return;

      /* TERCER TIEMPO: el tope. */
      await controles.start({
        y: parada(VUELTA),
        transition: { type: "spring", stiffness: 170, damping: 13, mass: 0.9 },
      });
      if (vivo) setParado(true);
    })();
    return () => {
      vivo = false;
    };
  }, [controles, reducido]);

  return (
    <motion.div
      className="trag"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.18 } }}
      transition={{ duration: 0.22 }}
    >
      <motion.button
        className="trag-cerrar"
        type="button"
        onClick={onCerrar}
        aria-label="Cerrar"
        whileTap={{ scale: 0.92 }}
      >
        <GlyphClose />
      </motion.button>

      <motion.div
        className="trag-caja"
        initial={{ opacity: 0, y: 22, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ ...springPop, delay: 0.04 }}
      >
        <p className="trag-encima">Un libro a suertes</p>

        <div className="trag-ventana" style={{ height: VENTANA }}>
          {/* El filtro vive aquí dentro y no en una hoja aparte: es de esta
              máquina y de nadie más. `stdDeviation="0 0"` de salida; lo que
              lo mueve es la velocidad del rodillo, ahí arriba. */}
          <svg className="trag-defs" aria-hidden focusable="false">
            <defs>
              <filter
                id="trag-estela"
                x="-12%"
                y="-25%"
                width="124%"
                height="150%"
                colorInterpolationFilters="sRGB"
              >
                <feGaussianBlur ref={estela} in="SourceGraphic" stdDeviation="0 0" />
              </filter>
            </defs>
          </svg>

          {/* La caja que se filtra mide lo que la ventana y recorta lo que
              sobra. Ver el punto 3 de arriba: puesta sobre la tira, el filtro
              tendría que trabajar sobre cuatro mil puntos de alto. */}
          <div className="trag-borron" data-gira={!parado && !reducido}>
            <motion.div
              className="trag-tira"
              /* (VENTANA - PASO) y no (VENTANA - ALTO), y de aquí venía el
                 marco «mal cuadrado». Lo que hay que centrar en la ventana no
                 es el LIBRO, es su CASILLA: la casilla mide PASO y el libro va
                 centrado dentro de ella, así que restar el alto del libro deja
                 todo el rodillo nueve puntos por debajo de donde está el
                 marco. Con la casilla, los dos centros son el mismo punto por
                 construcción y no puede volver a descuadrarse. */
              style={{ y, paddingTop: (VENTANA - PASO) / 2 }}
              animate={controles}
            >
              {lista.map((l, i) => (
                <div className="trag-hueco" key={`${l.id}-${i}`} style={{ height: PASO }}>
                  <div className="trag-libro" style={{ width: ANCHO, height: ALTO }}>
                    <Portada libro={l} tamano={ANCHO} />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* El marco de la casilla premiada, encima de todo. Mide EXACTAMENTE
              lo que el libro más tres puntos por lado, y las medidas salen de
              las mismas constantes que el libro: escritas a mano se descuadran
              en cuanto alguien toca el tamaño, que es lo que pasó. */}
          <motion.span
            className="trag-visor"
            data-on={parado}
            style={{
              width: ANCHO + 6,
              height: ALTO + 6,
              marginLeft: -(ANCHO + 6) / 2,
              marginTop: -(ALTO + 6) / 2,
            }}
            animate={parado ? { scale: [1, 1.05, 1] } : { scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            aria-hidden
          />
          <span className="trag-sombra" aria-hidden />
        </div>

        <div className="trag-pie">
          <AnimatePresence mode="wait">
            {parado ? (
              <motion.div
                key="premio"
                className="trag-premio"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={spring}
              >
                <h2 className="trag-titulo">{ganador.titulo}</h2>
                <p className="trag-autor">{ganador.autor}</p>
                <div className="trag-botones">
                  <motion.button
                    className="trag-leer"
                    type="button"
                    onClick={() => onLeer(ganador)}
                    whileTap={{ scale: 0.97 }}
                  >
                    Leerlo
                  </motion.button>
                  <motion.button
                    className="trag-otra"
                    type="button"
                    onClick={onOtra}
                    whileTap={{ scale: 0.97 }}
                  >
                    Otra vez
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <motion.p
                key="girando"
                className="trag-girando"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.12 } }}
              >
                Girando…
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
