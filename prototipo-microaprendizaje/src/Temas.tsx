import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { GlyphClose } from "./glyphs";
import { spring, springSoft } from "./motion";

/* ==========================================================================
   LOS TEMAS — la tarjeta de gestión y la pantalla de ajuste

   Sale de las capturas de Headway del 27 de agosto, y ocupa el sitio de
   «Personalizado para ti», que Pablo quitó.

   Y el cambio es a mejor por una razón que no es de gusto. «Personalizado
   para ti» enseñaba un libro y decía «por lo que te interesa», o sea que
   PROMETÍA una recomendación calculada donde solo había un libro sacado de la
   lista. Esto de aquí no promete nada: enseña los temas que marcaste, con sus
   nombres, y un botón para cambiarlos. Es la misma idea de la tira de
   colecciones —no inventar personalización que no existe, sino enseñar la
   palanca que sí existe— y encima es lo único de la pantalla de inicio que
   deja al lector cambiar lo que ve.

   La pantalla de dentro es la suya casi calcada: título, subtítulo, la lista
   entera con casilla, y el elegido en azul con filete.

   LO QUE NO COPIAMOS ES LA CONFIRMACIÓN. Headway, al darle a «Continuar»,
   levanta una hoja que vuelve a preguntar «¿Actualizar las recomendaciones?»
   con un botón «Actualizar». Ahí tiene sentido: en su app los objetivos
   REEMPLAZAN el contenido, y avisan de que lo que tenías se va. Aquí cambiar
   los temas solo cambia el ORDEN de lo que ya hay —ni se pierde nada ni se
   esconde nada—, así que preguntar dos veces lo mismo sería un paso de más
   para no decir nada.
   ========================================================================== */

/** Las mismas nueve de la introducción, en su orden. */
export const TEMAS = [
  "Historia",
  "Filosofía",
  "Ciencia",
  "Arte",
  "Literatura",
  "Psicología",
  "Economía",
  "Salud",
  "Deportes",
] as const;

/** Lo mismo que la introducción: hasta cinco. */
export const TOPE_TEMAS = 5;

/* --------------------------------------------------------------------------
   Los nueve dibujos

   PROVISIONALES: Pablo dijo que manda los suyos. Están hechos en la familia
   de los que ya mandó —el candado, las entradas, la mano—: planos, sin filete
   y a dos tintas, rojo y oro. Cambiar uno es cambiar su función de aquí
   abajo y nada más.
   -------------------------------------------------------------------------- */

const R = "#fa5b4a";
const O = "#f8bb31";

function Marco({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 48 48" width="26" height="26" aria-hidden>
      {children}
    </svg>
  );
}

const DIBUJOS: Record<string, () => React.ReactElement> = {
  /* Una columna clásica: fuste de oro, basa y ábaco en rojo. */
  Historia: () => (
    <Marco>
      <rect x="8" y="8" width="32" height="6" rx="2" fill={R} />
      <rect x="10" y="34" width="28" height="6" rx="2" fill={R} />
      <rect x="15" y="14" width="5" height="20" fill={O} />
      <rect x="22" y="14" width="5" height="20" fill={O} />
      <rect x="29" y="14" width="5" height="20" fill={O} />
    </Marco>
  ),
  /* Una cabeza de perfil con una chispa dentro. */
  Filosofía: () => (
    <Marco>
      <path d="M24 6c9 0 15 6.6 15 15 0 5-2.4 7.6-2.4 11.4V40a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2v-3.6C13 34 9 30 9 22 9 12.8 15 6 24 6Z" fill={R} />
      <path d="M24 14l2.6 5.6L32 22l-5.4 2.4L24 30l-2.6-5.6L16 22l5.4-2.4Z" fill={O} />
    </Marco>
  ),
  /* Un matraz con burbujas. */
  Ciencia: () => (
    <Marco>
      <path d="M20 6h8v12.6l9.2 15.9A4.6 4.6 0 0 1 33.2 42H14.8a4.6 4.6 0 0 1-4-6.9L20 18.6Z" fill={R} />
      <circle cx="21" cy="33" r="3.4" fill={O} />
      <circle cx="28.5" cy="37" r="2.2" fill={O} />
      <rect x="18" y="5" width="12" height="4" rx="2" fill={O} />
    </Marco>
  ),
  /* Una paleta con dos manchas. */
  Arte: () => (
    <Marco>
      <path d="M24 6c10.5 0 18 6.9 18 15.6 0 5.4-3.9 8.4-8.1 8.4h-3.3c-2.4 0-4.2 1.8-4.2 4 0 1.2.6 2 .6 3.2 0 2.4-1.8 4.8-5 4.8C12.6 42 6 34.5 6 24 6 13.5 13.5 6 24 6Z" fill={R} />
      <circle cx="17" cy="17" r="3.4" fill={O} />
      <circle cx="28" cy="14" r="3.4" fill={O} />
      <circle cx="13" cy="27" r="3.4" fill={O} />
    </Marco>
  ),
  /* Un libro abierto. */
  Literatura: () => (
    <Marco>
      <path d="M6 11c5.6-2 11.2-2 16.8 0v27c-5.6-2-11.2-2-16.8 0Z" fill={R} />
      <path d="M42 11c-5.6-2-11.2-2-16.8 0v27c5.6-2 11.2-2 16.8 0Z" fill={O} />
      <rect x="22.6" y="10" width="2.8" height="29" rx="1.4" fill={R} />
    </Marco>
  ),
  /* Una cabeza con un corazón dentro. */
  Psicología: () => (
    <Marco>
      <circle cx="24" cy="22" r="16" fill={R} />
      <rect x="19" y="36" width="10" height="7" rx="2.5" fill={R} />
      <path d="M24 30c-6-4.4-8-6.8-8-9.8a4.6 4.6 0 0 1 8-3 4.6 4.6 0 0 1 8 3c0 3-2 5.4-8 9.8Z" fill={O} />
    </Marco>
  ),
  /* Monedas apiladas. */
  Economía: () => (
    <Marco>
      <ellipse cx="24" cy="35" rx="16" ry="6" fill={R} />
      <ellipse cx="24" cy="27" rx="16" ry="6" fill={O} />
      <ellipse cx="24" cy="19" rx="16" ry="6" fill={R} />
      <ellipse cx="24" cy="11" rx="16" ry="6" fill={O} />
    </Marco>
  ),
  /* Un corazón con su línea de pulso. */
  Salud: () => (
    <Marco>
      <path d="M24 42C10 32.5 5 27 5 19.6A10.6 10.6 0 0 1 24 13a10.6 10.6 0 0 1 19 6.6C43 27 38 32.5 24 42Z" fill={R} />
      <path d="M11 24h6l3-6 4 12 3.4-7 2.6 3H37" fill="none" stroke={O} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </Marco>
  ),
  /* Una copa. */
  Deportes: () => (
    <Marco>
      <path d="M14 6h20v11c0 6-4.5 10.6-10 10.6S14 23 14 17Z" fill={O} />
      <path d="M14 9H9v3.4c0 4 2.4 6.6 5.6 7.2M34 9h5v3.4c0 4-2.4 6.6-5.6 7.2" fill="none" stroke={R} strokeWidth="3" strokeLinecap="round" />
      <rect x="21" y="27" width="6" height="7" fill={R} />
      <rect x="13" y="34" width="22" height="6" rx="2.4" fill={R} />
    </Marco>
  ),
};

export function DibujoTema({ tema }: { tema: string }) {
  const D = DIBUJOS[tema];
  return D ? <D /> : null;
}

/* --------------------------------------------------------------------------
   La tarjeta del inicio
   -------------------------------------------------------------------------- */

export function GestionaTemas({
  intereses,
  onGestionar,
}: {
  intereses: string[];
  onGestionar: () => void;
}) {
  /* Sin nada marcado la tarjeta seguiría teniendo sentido —es la manera de
     marcar algo—, así que en vez de esconderla se cambia lo que dice. */
  const hay = intereses.length > 0;

  /* EL TITULAR VA EN UNA LÍNEA, y esto es lo que lo garantiza.
   *
   * En la captura de Headway «Gestiona las recomendaciones» ocupa 299 de los
   * 309 píxeles que hay dentro del recuadro, con la mayúscula midiendo 15,5.
   * Ellos escriben en Roboto. Nuestra pila —Avenir Next primero, y lo que
   * haya cuando no está— es más ancha: a esa misma altura de mayúscula la
   * frase pide entre 320 y 355, así que se parte en dos y el recuadro entero
   * cambia de forma.
   *
   * No hay manera en CSS de decir «tan grande como quepa en una línea», y
   * clavar un tamaño no vale porque cada aparato resuelve la pila con una
   * tipografía distinta. Así que se mide: se empieza por el tamaño que sale
   * de la captura y se baja de tres en tres décimas hasta que deja de
   * desbordar. En un iPhone, con Avenir Next, apenas baja; con una fuente
   * ancha baja hasta que cabe. En los dos casos el titular ocupa UNA línea,
   * que es lo que hace que el recuadro se parezca al suyo. */
  const titular = useRef<HTMLHeadingElement>(null);
  useLayoutEffect(() => {
    const h = titular.current;
    if (!h) return;
    const TOPE = 21.3;
    let t = TOPE;
    h.style.fontSize = `${TOPE}px`;
    while (t > 15 && h.scrollWidth > h.clientWidth + 0.5) {
      t -= 0.3;
      h.style.fontSize = `${t.toFixed(1)}px`;
    }
  }, [hay]);

  return (
    <motion.section
      className="bloque"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={springSoft}
    >
      <div className="gestiona">
        <h2 className="gestiona-titulo" ref={titular}>
          Gestiona las recomendaciones
        </h2>
        {/* La frase es la suya, palabra por palabra, con un cambio: donde
            ellos dicen «objetivos» aquí dice «temas», que es como se llama
            esto en nuestra app y en la pantalla de ajuste. Cae en dos líneas
            igual que en la captura, que es parte de la forma del recuadro. */}
        <p className="gestiona-sub">
          {hay
            ? "Para conseguir nuevas recomendaciones, tienes que ajustar tus temas"
            : "Elige tus temas y la estantería se ordena por ellos"}
        </p>

        {hay && (
          <ul className="gestiona-lista">
            {intereses.map((t) => (
              <li key={t}>
                <DibujoTema tema={t} />
                {t}
              </li>
            ))}
          </ul>
        )}

        <motion.button
          className="gestiona-boton"
          type="button"
          onClick={onGestionar}
          whileTap={{ scale: 0.98 }}
        >
          {hay ? "Gestionar" : "Elegir temas"}
        </motion.button>
      </div>
    </motion.section>
  );
}

/* --------------------------------------------------------------------------
   La pantalla de ajuste
   -------------------------------------------------------------------------- */

export function AjustarTemas({
  intereses,
  onCerrar,
  onGuardar,
}: {
  intereses: string[];
  onCerrar: () => void;
  onGuardar: (temas: string[]) => void;
}) {
  const [elegidos, setElegidos] = useState<string[]>(intereses);

  const alternar = (t: string) =>
    setElegidos((v) =>
      v.includes(t) ? v.filter((x) => x !== t) : v.length < TOPE_TEMAS ? [...v, t] : v,
    );

  const lleno = elegidos.length >= TOPE_TEMAS;

  return (
    <motion.div
      className="ajtemas"
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0, transition: spring }}
      exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
    >
      <div className="ajtemas-head">
        <button className="icon-btn" onClick={onCerrar} aria-label="Cerrar">
          <GlyphClose />
        </button>
      </div>

      <div className="ajtemas-scroll">
        <h1 className="ajtemas-titulo">¿Cambiamos lo que te proponemos?</h1>
        <p className="ajtemas-sub">
          La estantería se ordena por los temas que dejes marcados.
        </p>
        {/* El tope se enseña, no se aplica en silencio. Al llegar a cinco, la
            casilla de los que no están elegidos deja de responder, y sin este
            renglón eso parece que la app se ha colgado. */}
        <p className="ajtemas-cuenta" data-lleno={lleno}>
          {elegidos.length} de {TOPE_TEMAS} elegidos
        </p>

        <ul className="ajtemas-lista">
          {TEMAS.map((t) => {
            const on = elegidos.includes(t);
            return (
              <li key={t}>
                <motion.button
                  type="button"
                  className="ajtemas-fila"
                  data-on={on}
                  data-bloqueada={!on && lleno}
                  onClick={() => alternar(t)}
                  whileTap={{ scale: 0.99 }}
                  aria-pressed={on}
                >
                  <span className="ajtemas-marca">
                    <DibujoTema tema={t} />
                  </span>
                  <span className="ajtemas-nombre">{t}</span>
                  <span className="ajtemas-casilla" data-on={on} aria-hidden>
                    {on && (
                      <svg viewBox="0 0 24 24" width="14" height="14">
                        <path
                          d="M4.5 12.5 10 18 19.5 7"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                </motion.button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="ajtemas-pie">
        <motion.button
          className="ajtemas-continuar"
          type="button"
          onClick={() => onGuardar(elegidos)}
          whileTap={{ scale: 0.98 }}
        >
          Continuar
        </motion.button>
      </div>
    </motion.div>
  );
}
