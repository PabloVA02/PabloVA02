import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useAnimationControls, useReducedMotion } from "framer-motion";
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
   puede copiar y son tres cosas:

   1. **Una sola curva de frenada, no dos animaciones pegadas.** El rodillo
      arranca a tope y se va parando con una bézier muy tumbada al final
      —`0.09, 0.62, 0.14, 1`—, que es la que hace que los últimos tres o
      cuatro libros pasen de uno en uno y se lean. Si se usa una `ease-out`
      normal, frena demasiado pronto y parece que se ha atascado.
   2. **El rebote del final.** Se pasa dieciséis puntos de largo y vuelve con
      un muelle. Es lo que hace una máquina de verdad —el rodillo tiene
      inercia y el tope lo devuelve— y es la diferencia entre parecer una
      máquina y parecer una lista con scroll.
   3. **El borrón de velocidad.** Mientras va rápido, la tira va desenfocada,
      y el desenfoque baja con la velocidad. Sin esto se ven las cubiertas
      saltando de una a otra, como fotogramas sueltos; con esto se ve movimiento.

   Y el que no quiera animaciones no la ve: con `prefers-reduced-motion` el
   rodillo aparece parado en el libro que le ha tocado, que es la información
   que había que dar.
   ========================================================================== */

/** El lado de cada cubierta dentro del rodillo. */
const LADO = 124;
/** De una cubierta a la siguiente: el lado más el hueco. */
const PASO = 136;
/** El alto del hueco por el que se mira. Enseña la de en medio entera y un
 *  dedo de la de arriba y de la de abajo, que es lo que dice que hay más. */
const VENTANA = 236;
/** Cuántas cubiertas pasan antes de la buena. */
const VUELTA = 26;
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

  useEffect(() => {
    if (reducido) {
      controles.set({ y: parada(VUELTA) });
      return;
    }
    let vivo = true;
    (async () => {
      await controles.start({
        y: parada(VUELTA) - REBOTE,
        /* El retraso no es de estilo: es el respiro que necesita el
           navegador para pintar las doce cubiertas antes de que empiecen a
           correr. Sin él, los tres primeros fotogramas salen en blanco. */
        transition: { duration: 3.1, delay: 0.16, ease: [0.09, 0.62, 0.14, 1] },
      });
      if (!vivo) return;
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
          {/* El desenfoque va en su propia capa y no en la que se mueve: una
              caja que cambia de filtro Y de posición a la vez se repinta
              entera en cada fotograma. */}
          <motion.div
            className="trag-borron"
            initial={{ filter: "blur(0px)" }}
            animate={
              reducido
                ? { filter: "blur(0px)" }
                : { filter: ["blur(0px)", "blur(0px)", "blur(5px)", "blur(2px)", "blur(0px)"] }
            }
            transition={{
              duration: 3.4,
              times: [0, 0.05, 0.22, 0.72, 0.95],
              ease: "linear",
            }}
          >
            <motion.div
              className="trag-tira"
              style={{ paddingTop: (VENTANA - LADO) / 2 }}
              animate={controles}
            >
              {lista.map((l, i) => (
                <div className="trag-hueco" key={`${l.id}-${i}`} style={{ height: PASO }}>
                  <Portada libro={l} tamano={LADO} />
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* El marco de la casilla premiada, encima de todo. Se enciende al
              parar: antes es un filete y después es de oro. */}
          <motion.span
            className="trag-visor"
            data-on={parado}
            style={{ height: LADO }}
            animate={parado ? { scale: [1, 1.06, 1] } : { scale: 1 }}
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
