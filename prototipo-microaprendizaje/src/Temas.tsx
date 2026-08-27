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

/* --------------------------------------------------------------------------
   LAS METAS

   Hasta el 27 de agosto esto eran nuestras nueve categorías —Historia,
   Filosofía, Ciencia…—, que es una manera de preguntar DE QUÉ quieres leer.
   Pablo mandó las dos capturas de las 12:45 y pidió que estuvieran «todas
   estas secciones», que preguntan otra cosa: QUÉ QUIERES CONSEGUIR. No es un
   matiz. «Psicología» es un estante; «Confiar más en ti mismo» es un motivo
   para abrir la app, y a quien no sabe qué leer le dice mucho más.

   CÓMO SIGUE FUNCIONANDO EL ORDEN. La estantería, los filtros y las
   colecciones ordenan por CATEGORÍA, no por meta, y eso no ha cambiado: cada
   meta lleva de qué estantes tira, y `categoriasDe()` traduce lo que el lector
   marca a lo que el resto de la app entiende. Una meta puede tirar de tres
   estantes, así que marcar cinco metas ordena mejor que marcar cinco temas.

   Y LOS NOMBRES NO SON LOS SUYOS, a propósito. Pablo lo pidió así: «alguna
   más si se te ocurre, y llamadas de diferentes formas algunas, para que no
   sea un plagio total». De las doce suyas, cinco se quedan con el nombre que
   tienen porque son frases corrientes en castellano que no ha inventado nadie
   —«Confiar más en ti mismo», «Tener relaciones sanas», «Mejorar tu vida
   sexual»—; las otras están dichas de otra manera. Y hay cuatro que no
   existen en su lista y aquí sí, porque nuestro catálogo tiene estantes que
   el suyo no tiene: la literatura, el arte, la historia y el deporte.

   Una de las suyas se cae y conviene decir por qué: «Grow in faith» está sin
   traducir en su propia app en español. Lo que hay debajo —religión y
   sentido— se recoge en «Buscar un sentido», con Filosofía y Literatura
   detrás, que es de lo que tenemos libros.
   -------------------------------------------------------------------------- */

export type Meta = {
  nombre: string;
  /** De qué estantes tira. Es lo que el resto de la app sabe leer. */
  categorias: readonly string[];
};

export const METAS: readonly Meta[] = [
  { nombre: "Rendir más cada día", categorias: ["Psicología", "Economía"] },
  { nombre: "Crecer en el trabajo", categorias: ["Economía", "Psicología"] },
  { nombre: "Hacer crecer tu dinero", categorias: ["Economía"] },
  { nombre: "Pensar con más claridad", categorias: ["Filosofía", "Ciencia", "Psicología"] },
  { nombre: "Confiar más en ti mismo", categorias: ["Psicología"] },
  { nombre: "Poner orden en tu vida", categorias: ["Psicología", "Salud"] },
  { nombre: "Vivir con más calma", categorias: ["Filosofía", "Psicología", "Salud"] },
  { nombre: "Tener relaciones sanas", categorias: ["Psicología"] },
  { nombre: "Mejorar tu vida sexual", categorias: ["Psicología", "Salud"] },
  { nombre: "Criar mejor a tus hijos", categorias: ["Psicología", "Salud"] },
  { nombre: "Cuidar el cuerpo", categorias: ["Salud", "Deportes"] },
  { nombre: "Rendir en el deporte", categorias: ["Deportes", "Salud"] },
  { nombre: "Buscar un sentido", categorias: ["Filosofía", "Literatura"] },
  { nombre: "Entender el mundo de hoy", categorias: ["Historia", "Economía", "Ciencia"] },
  { nombre: "Leer lo que nunca leíste", categorias: ["Literatura"] },
  { nombre: "Saber mirar un cuadro", categorias: ["Arte", "Historia"] },
];

/** Lo mismo que la introducción: hasta cinco. */
export const TOPE_TEMAS = 5;

/** Los nombres, para la introducción y para las comprobaciones. */
export const NOMBRES_META = METAS.map((m) => m.nombre);

/** Las categorías de las que tiran las metas marcadas, sin repetir y en orden.
 *
 *  Es la traducción entre lo que elige el lector y lo que el resto de la app
 *  entiende. El orden importa: `ordenar()` de las colecciones da más peso a
 *  lo que va delante, así que la primera categoría de la primera meta manda.
 */
export function categoriasDe(metas: readonly string[]): string[] {
  const fuera: string[] = [];
  for (const nombre of metas) {
    const m = METAS.find((x) => x.nombre === nombre);
    if (!m) continue;
    for (const c of m.categorias) if (!fuera.includes(c)) fuera.push(c);
  }
  return fuera;
}

/* --------------------------------------------------------------------------
   Los dieciséis dibujos

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
  /* Un cronómetro: la esfera y las agujas. */
  "Rendir más cada día": () => (
    <Marco>
      <circle cx="24" cy="28" r="16" fill={O} />
      <rect x="19" y="2" width="10" height="5" rx="2.5" fill={R} />
      <rect x="21.6" y="6" width="4.8" height="6.5" fill={R} />
      <path d="M24 28V18M24 28h7.5" fill="none" stroke={R} strokeWidth="3.6" strokeLinecap="round" />
    </Marco>
  ),
  /* Un maletín. */
  "Crecer en el trabajo": () => (
    <Marco>
      <rect x="5" y="15" width="38" height="25" rx="4" fill={R} />
      <path d="M18 15v-3.6A3.4 3.4 0 0 1 21.4 8h5.2A3.4 3.4 0 0 1 30 11.4V15" fill="none" stroke={O} strokeWidth="3.4" />
      <rect x="5" y="23" width="38" height="4" fill={O} />
      <rect x="20.5" y="21" width="7" height="8" rx="2.4" fill={O} />
    </Marco>
  ),
  /* Un billete con su moneda. */
  "Hacer crecer tu dinero": () => (
    <Marco>
      <rect x="4" y="13" width="33" height="20" rx="3" fill={R} />
      <circle cx="20.5" cy="23" r="5.6" fill={O} />
      <circle cx="34" cy="33" r="10" fill={O} />
      <rect x="32" y="27" width="4" height="12" rx="2" fill={R} />
    </Marco>
  ),
  /* Una bombilla. */
  "Pensar con más claridad": () => (
    <Marco>
      <path d="M24 4c8 0 14 6 14 13.6 0 5-2.6 7.8-4.8 10.4-1.6 2-2.2 3-2.2 5.4H17c0-2.4-.6-3.4-2.2-5.4C12.6 25.4 10 22.6 10 17.6 10 10 16 4 24 4Z" fill={O} />
      <rect x="16.6" y="36" width="14.8" height="4.2" rx="2.1" fill={R} />
      <rect x="19" y="41.4" width="10" height="4.2" rx="2.1" fill={R} />
    </Marco>
  ),
  /* Un escudo con una chispa. */
  "Confiar más en ti mismo": () => (
    <Marco>
      <path d="M24 4l16 5.8v12C40 32 33 40 24 44 15 40 8 32 8 21.8v-12Z" fill={R} />
      <path d="M24 14l3 6.6 6.6 3-6.6 3-3 6.6-3-6.6-6.6-3 6.6-3Z" fill={O} />
    </Marco>
  ),
  /* Una balanza. */
  "Poner orden en tu vida": () => (
    <Marco>
      <rect x="22" y="7" width="4" height="32" rx="2" fill={R} />
      <rect x="13" y="38" width="22" height="5" rx="2.5" fill={R} />
      <rect x="8" y="13" width="32" height="4" rx="2" fill={O} />
      <path d="M12 17 6 28h12Z" fill={O} />
      <path d="M36 17 30 28h12Z" fill={O} />
    </Marco>
  ),
  /* Una taza con su vapor. */
  "Vivir con más calma": () => (
    <Marco>
      <rect x="7" y="19" width="25" height="19" rx="4" fill={R} />
      <path d="M32 23h3.6a5.2 5.2 0 0 1 0 10.4H32" fill="none" stroke={O} strokeWidth="4" />
      <rect x="5" y="38" width="30" height="4.4" rx="2.2" fill={O} />
      <path d="M15 14V8M22 14V5" fill="none" stroke={O} strokeWidth="3.2" strokeLinecap="round" />
    </Marco>
  ),
  /* Dos aros enlazados. */
  "Tener relaciones sanas": () => (
    <Marco>
      <circle cx="18" cy="24" r="11" fill="none" stroke={R} strokeWidth="5" />
      <circle cx="30" cy="24" r="11" fill="none" stroke={O} strokeWidth="5" />
    </Marco>
  ),
  /* Dos corazones. */
  "Mejorar tu vida sexual": () => (
    <Marco>
      <path d="M17 43C7 35.4 3 31.2 3 24.8A8.6 8.6 0 0 1 17 19a8.6 8.6 0 0 1 14 5.8C31 31.2 27 35.4 17 43Z" fill={R} />
      <path d="M35 28.5c-6.8-5.1-9.2-7.7-9.2-11.6a5.2 5.2 0 0 1 9.2-3.4 5.2 5.2 0 0 1 9.2 3.4c0 3.9-2.4 6.5-9.2 11.6Z" fill={O} />
    </Marco>
  ),
  /* Un adulto y un niño. */
  "Criar mejor a tus hijos": () => (
    <Marco>
      <circle cx="16" cy="13" r="7" fill={R} />
      <path d="M4 43c0-7.4 5.4-12.6 12-12.6S28 35.6 28 43Z" fill={R} />
      <circle cx="35" cy="21" r="5.6" fill={O} />
      <path d="M25.6 43c0-5.4 4.2-9.2 9.4-9.2s9.4 3.8 9.4 9.2Z" fill={O} />
    </Marco>
  ),
  /* Una manzana. */
  "Cuidar el cuerpo": () => (
    <Marco>
      <path d="M24 15c4-3.2 10.4-3 13.4 1.2 3.4 4.8 1.8 13.4-2.2 20-2.6 4.4-5.6 7.6-8 7.6-1.6 0-2-.8-3.2-.8s-1.6.8-3.2.8c-2.4 0-5.4-3.2-8-7.6-4-6.6-5.6-15.2-2.2-20C13.6 12 20 11.8 24 15Z" fill={R} />
      <path d="M24 14V7" fill="none" stroke={O} strokeWidth="3.2" strokeLinecap="round" />
      <path d="M24.5 10c2.4-5 8.5-5.4 8.5-5.4s.4 6-4.6 7.4c-2.6.7-3.9-2-3.9-2Z" fill={O} />
    </Marco>
  ),
  /* Una copa. */
  "Rendir en el deporte": () => (
    <Marco>
      <path d="M14 6h20v11c0 6-4.5 10.6-10 10.6S14 23 14 17Z" fill={O} />
      <path d="M14 9H9v3.4c0 4 2.4 6.6 5.6 7.2M34 9h5v3.4c0 4-2.4 6.6-5.6 7.2" fill="none" stroke={R} strokeWidth="3" strokeLinecap="round" />
      <rect x="21" y="27" width="6" height="7" fill={R} />
      <rect x="13" y="34" width="22" height="6" rx="2.4" fill={R} />
    </Marco>
  ),
  /* Una brújula. */
  "Buscar un sentido": () => (
    <Marco>
      <circle cx="24" cy="24" r="18" fill={R} />
      <path d="M35 13 27.5 27.5 13 35l7.5-14.5Z" fill={O} />
    </Marco>
  ),
  /* Un globo terráqueo. */
  "Entender el mundo de hoy": () => (
    <Marco>
      <circle cx="24" cy="24" r="18" fill={R} />
      <path d="M24 6c4.8 5 4.8 31 0 36M6 24h36M9.4 14h29.2M9.4 34h29.2" fill="none" stroke={O} strokeWidth="2.6" />
    </Marco>
  ),
  /* Un libro abierto. */
  "Leer lo que nunca leíste": () => (
    <Marco>
      <path d="M6 11c5.6-2 11.2-2 16.8 0v27c-5.6-2-11.2-2-16.8 0Z" fill={R} />
      <path d="M42 11c-5.6-2-11.2-2-16.8 0v27c5.6-2 11.2-2 16.8 0Z" fill={O} />
      <rect x="22.6" y="10" width="2.8" height="29" rx="1.4" fill={R} />
    </Marco>
  ),
  /* Un cuadro con su marco. */
  "Saber mirar un cuadro": () => (
    <Marco>
      <rect x="5" y="7" width="38" height="34" rx="3.4" fill={O} />
      <rect x="10.5" y="12.5" width="27" height="23" rx="2" fill={R} />
      <circle cx="17.5" cy="19" r="3" fill={O} />
      <path d="M10.5 35.5V33l8-8 5 5 6-6 8 8v3.5Z" fill={O} />
    </Marco>
  ),
};

/** El dibujo de una meta, por su nombre. */
export function DibujoTema({ tema }: { tema: string }) {
  const D = DIBUJOS[tema];
  return D ? <D /> : null;
}

/* --------------------------------------------------------------------------
   La tarjeta del inicio
   -------------------------------------------------------------------------- */

export function GestionaTemas({
  metas,
  onGestionar,
}: {
  metas: string[];
  onGestionar: () => void;
}) {
  /* Sin nada marcado la tarjeta seguiría teniendo sentido —es la manera de
     marcar algo—, así que en vez de esconderla se cambia lo que dice. */
  const hay = metas.length > 0;

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
        {/* La frase es la suya, palabra por palabra. Cae en dos líneas igual
            que en la captura, que es parte de la forma del recuadro. */}
        <p className="gestiona-sub">
          {hay
            ? "Para conseguir nuevas recomendaciones, tienes que ajustar tus objetivos"
            : "Elige lo que quieres conseguir y la estantería se ordena por ello"}
        </p>

        {hay && (
          <ul className="gestiona-lista">
            {metas.map((t) => (
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
          {hay ? "Gestionar" : "Elegir objetivos"}
        </motion.button>
      </div>
    </motion.section>
  );
}

/* --------------------------------------------------------------------------
   La pantalla de ajuste
   -------------------------------------------------------------------------- */

export function AjustarTemas({
  metas,
  onCerrar,
  onGuardar,
}: {
  metas: string[];
  onCerrar: () => void;
  onGuardar: (metas: string[]) => void;
}) {
  const [elegidos, setElegidos] = useState<string[]>(metas);

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
          La estantería se ordena por lo que dejes marcado aquí.
        </p>
        {/* El tope se enseña, no se aplica en silencio. Al llegar a cinco, la
            casilla de los que no están elegidos deja de responder, y sin este
            renglón eso parece que la app se ha colgado. */}
        <p className="ajtemas-cuenta" data-lleno={lleno}>
          {elegidos.length} de {TOPE_TEMAS} elegidos
        </p>

        <ul className="ajtemas-lista">
          {METAS.map(({ nombre: t }) => {
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
