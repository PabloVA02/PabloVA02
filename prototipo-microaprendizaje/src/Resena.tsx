import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { spring, springPop, springSoft } from "./motion";
import { GlyphClose, GlyphLlama, GlyphVisto } from "./glyphs";
import { Cohete } from "./Valoracion";

/* ==========================================================================
   PEDIR LA RESEÑA

   Sale de la captura que mandó Pablo el 21 de agosto —la pantalla que Headway
   enseña cada cierto tiempo a quien ya está suscrito— y de su encargo: «algo
   así te deberá aparecer cuando te suscribas, cada cierto tiempo».

   La suya tiene cinco estrellas doradas dibujadas, un cerebro de dibujos
   animados asomando, un titular, dos vistos y un botón azul de «Continuar»
   que lleva a la tienda. Debajo, en letra pequeña, «¿Tuviste algún problema?
   Repórtalo».

   AQUÍ CAMBIAN CUATRO COSAS, Y LA PRIMERA ES DE FONDO:

   1. LAS ESTRELLAS SE TOCAN. En la suya son un dibujo: pulses lo que pulses,
      acabas en la tienda. Aquí son la pregunta, y lo que contestes decide a
      dónde vas. Cuatro o cinco: te llevamos a la tienda. Tres o menos: no se
      te pide reseña, se te pregunta qué falla. Mandar a la tienda a alguien
      descontento es pedirle que lo escriba en público.

   2. HABLA DE TI Y NO DE NOSOTROS. La suya dice «ayuda a que más personas
      aprendan con Headway», que es pedir un favor para ellos. Esta empieza
      por lo que llevas hecho —tu racha y tus resúmenes—, que además es la
      razón por la que se te pregunta a ti y no a cualquiera.

   3. SIGUE SIENDO OSCURA, y a propósito. La primera versión se hizo en papel,
      como la tarjeta del libro de hoy, y se volvió atrás: en esta app las
      TARJETAS son de papel y los AVISOS son oscuros —el regalo, la oferta—,
      así que un aviso claro se leía como una pantalla de otro sitio. Y el
      cohete de `Valoracion.tsx` está construido para fondo oscuro: su estela
      es luz, y sobre crema no se ve. Se conserva entero.

   4. NO HAY SIGNOS DE ADMIRACIÓN. La suya lleva dos en tres líneas.

   CUÁNDO APARECE: lo decide `tocaPedirResena()`, aquí abajo.
   ========================================================================== */

const CLAVE = "curva-resena";

type Memoria = { visto?: number; puesta?: boolean; noes?: number };

function memoria(): Memoria {
  try {
    return JSON.parse(localStorage.getItem(CLAVE) ?? "{}") as Memoria;
  } catch {
    return {};
  }
}

function guarda(cambio: Memoria) {
  try {
    localStorage.setItem(CLAVE, JSON.stringify({ ...memoria(), ...cambio }));
  } catch {
    /* Sin almacenamiento se pedirá otra vez; es lo de menos. */
  }
}

const DIA = 86400000;

/** Si toca pedirla, y las cuatro condiciones son las cuatro que importan.
 *
 *  Una petición de reseña es lo más caro que se le puede pedir a alguien que
 *  no ha pedido nada, así que se pregunta poco y en buen momento:
 *
 *  1. SUSCRITO. A quien está probando la app no se le pide que la valore.
 *  2. CON ALGO HECHO. Tres resúmenes terminados. Antes de eso no tiene
 *     opinión, tiene una primera impresión.
 *  3. NO RECIÉN LLEGADO A LA APP, sino recién salido de un resumen: se pide
 *     al terminar de leer, que es el único momento en que alguien está
 *     contento con una app de leer.
 *  4. UNA VEZ CADA CUARENTA Y CINCO DÍAS, dos veces como mucho. Si ya la
 *     puso, o si ya dijo que no dos veces, no se vuelve a preguntar nunca. */
export function tocaPedirResena({
  suscrito,
  terminados,
}: {
  suscrito: boolean;
  terminados: number;
}): boolean {
  if (!suscrito || terminados < 3) return false;
  const m = memoria();
  if (m.puesta || (m.noes ?? 0) >= 2) return false;
  if (m.visto && Date.now() - m.visto < 45 * DIA) return false;
  return true;
}

/** Para probarla sin esperar cuarenta y cinco días. */
export function olvidaResena() {
  try {
    localStorage.removeItem(CLAVE);
  } catch {
    /* nada */
  }
}

const FALLOS = ["Los resúmenes", "La voz", "El precio", "Va lento", "Otra cosa"];

export function Resena({
  racha,
  terminados,
  reducido = false,
  onCerrar,
}: {
  racha: number;
  terminados: number;
  /** `prefers-reduced-motion`: apaga el bucle del cohete. */
  reducido?: boolean;
  onCerrar: () => void;
}) {
  const [estrellas, setEstrellas] = useState(0);
  const [fallo, setFallo] = useState<string | null>(null);
  const [gracias, setGracias] = useState(false);
  const contento = estrellas >= 4;

  function cerrar(comoNo: boolean) {
    guarda({ visto: Date.now(), noes: (memoria().noes ?? 0) + (comoNo ? 1 : 0) });
    onCerrar();
  }

  return (
    <motion.div
      className="regalo-velo"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      onClick={() => cerrar(true)}
    >
      <motion.div
        className="resena"
        role="dialog"
        aria-label="Qué te parece Curva"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 34, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.18 } }}
        transition={{ ...springPop, delay: 0.04 }}
      >
        <button className="resena-cerrar" type="button" onClick={() => cerrar(true)} aria-label="Cerrar">
          <GlyphClose />
        </button>

        {/* El cohete de `Valoracion.tsx`, que ya estaba y es de lo mejor que
            tiene la app: cuatro capas a ritmos distintos, con las estrellas
            cayendo para que se note que el que sube es él. La referencia pone
            aquí un cerebro de dibujos animados; nosotros ya teníamos esto. */}
        <Cohete reducido={reducido} />

        {/* Lo que llevas hecho. Es el motivo de que se te pregunte y va antes
            que la pregunta, no después: primero el dato, luego el favor. */}
        <p className="resena-tuyo">
          <GlyphLlama />
          {racha} {racha === 1 ? "día seguido" : "días seguidos"} · {terminados}{" "}
          {terminados === 1 ? "resumen" : "resúmenes"}
        </p>

        <AnimatePresence mode="wait">
          {gracias ? (
            <motion.div
              key="gracias"
              className="resena-paso"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0, transition: springSoft }}
              exit={{ opacity: 0, transition: { duration: 0.14 } }}
            >
              <h2>Anotado</h2>
              <p className="resena-texto">
                Va directo a quien escribe los resúmenes. No es un buzón que no lee nadie.
              </p>
              <button className="resena-principal" type="button" onClick={() => cerrar(false)}>
                Cerrar
              </button>
            </motion.div>
          ) : estrellas === 0 ? (
            <motion.div
              key="preguntar"
              className="resena-paso"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.14 } }}
            >
              <h2>¿Qué tal vamos?</h2>
              <p className="resena-texto">
                Toca las estrellas que darías. Tarda cinco segundos y cambia lo que hacemos
                después.
              </p>
              <Estrellas valor={estrellas} onElegir={setEstrellas} />
            </motion.div>
          ) : contento ? (
            <motion.div
              key="tienda"
              className="resena-paso"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0, transition: springSoft }}
              exit={{ opacity: 0, transition: { duration: 0.14 } }}
            >
              <Estrellas valor={estrellas} onElegir={setEstrellas} />
              <h2>Gracias</h2>
              <p className="resena-texto">
                Si dejas esas mismas estrellas en la tienda, Curva le aparece a gente que
                nunca ha abierto un resumen. Son tres frases.
              </p>
              <button
                className="resena-principal"
                type="button"
                onClick={() => {
                  guarda({ puesta: true, visto: Date.now() });
                  onCerrar();
                }}
              >
                Escribir la reseña
              </button>
              <button className="resena-secundario" type="button" onClick={() => cerrar(true)}>
                Ahora no
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="fallo"
              className="resena-paso"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0, transition: springSoft }}
              exit={{ opacity: 0, transition: { duration: 0.14 } }}
            >
              <Estrellas valor={estrellas} onElegir={setEstrellas} />
              <h2>¿Qué falla?</h2>
              <p className="resena-texto">
                No te vamos a mandar a la tienda con esa cara. Dinos qué es y lo arreglamos.
              </p>
              <div className="resena-fallos">
                {FALLOS.map((f) => (
                  <button
                    key={f}
                    type="button"
                    className="resena-chip"
                    data-on={fallo === f ? "true" : "false"}
                    onClick={() => setFallo(f)}
                  >
                    {fallo === f && <GlyphVisto />}
                    {f}
                  </button>
                ))}
              </div>
              <button
                className="resena-principal"
                type="button"
                disabled={!fallo}
                onClick={() => setGracias(true)}
              >
                Enviar
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

/* Las cinco estrellas. Se pintan a mano y no con un icono suelto porque la
   gracia está en el relleno: la que tocas y las anteriores se quedan llenas,
   como en cualquier valoración, y eso hay que dibujarlo. */
function Estrellas({ valor, onElegir }: { valor: number; onElegir: (n: number) => void }) {
  return (
    <div className="resena-estrellas" role="radiogroup" aria-label="Estrellas">
      {[1, 2, 3, 4, 5].map((n) => (
        <motion.button
          key={n}
          type="button"
          role="radio"
          aria-checked={valor === n}
          aria-label={`${n} ${n === 1 ? "estrella" : "estrellas"}`}
          className="resena-estrella"
          data-on={n <= valor ? "true" : "false"}
          onClick={() => onElegir(n)}
          whileTap={{ scale: 0.82 }}
          animate={n <= valor ? { scale: [1, 1.22, 1] } : { scale: 1 }}
          transition={{ ...spring, delay: n <= valor ? n * 0.035 : 0 }}
        >
          <svg viewBox="0 0 24 24" aria-hidden>
            <path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.44 6.19 20.5l1.11-6.47L2.6 9.45l6.5-.95z" />
          </svg>
        </motion.button>
      ))}
    </div>
  );
}
