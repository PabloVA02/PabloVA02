import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { EMOTICONOS_METAS } from "./emoticonos-metas";
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

   LOS NOMBRES SON LOS SUYOS, y esto ya se hizo al revés una vez. El 27 de
   agosto Pablo pidió primero que estuvieran «llamadas de diferentes formas
   algunas, para que no sea un plagio total», se rebautizaron nueve, y al
   verlas dijo: «na, pon el nombre que tienen puesto ellos, que me gusta más
   la verdad, deja eso». Manda lo segundo. **Si a alguien le vuelve a parecer
   que esto habría que reescribirlo, ya está decidido y está decidido así.**

   Y son nombres de tres palabras que describen una intención corriente
   —«Equilibrar tu vida», «Alcanzar la felicidad»—, no textos con autor: lo
   que sí es de Headway, y no se copia, es el resumen de cada libro.

   Una de las suyas va traducida, no copiada: en su app en español pone «Grow
   in faith», en inglés, que es un descuido suyo. Aquí es «Crecer en tu fe»,
   que es lo que quiere decir, con Filosofía y Literatura detrás, que es de lo
   que tenemos libros.

   ONCE Y NO DIECISÉIS, DESDE EL 4 DE SEPTIEMBRE. Pablo mandó once emoticonos
   el 27 de agosto y las otras cinco metas llevaban desde entonces con un
   dibujo provisional mío. Al pasarle la hoja con los suyos: «vale, pues borra
   el resto, que no tienen emoticono».

   Las cinco que se fueron, por si vuelven —basta con reponer la línea—:

     { nombre: "Triunfar en tu vida profesional", categorias: ["Economía", "Psicología"] },
     { nombre: "Rendir en el deporte",            categorias: ["Deportes", "Salud"] },
     { nombre: "Entender el mundo de hoy",        categorias: ["Historia", "Economía", "Ciencia"] },
     { nombre: "Leer lo que nunca leíste",        categorias: ["Literatura"] },
     { nombre: "Saber mirar un cuadro",           categorias: ["Arte", "Historia"] },

   Y HAY QUE SABER LO QUE SE PIERDE, porque no es solo que haya cinco filas
   menos. Cada meta dice de qué estantes tira, y `categoriasDe()` es lo que
   traduce lo que marca el lector a lo que el resto de la app ordena. De esas
   cinco salían las ÚNICAS menciones a dos estantes:

     · HISTORIA, que estaba en «Entender el mundo de hoy» y «Saber mirar un
       cuadro». Y es el estante más grande del catálogo.
     · ARTE, que estaba solo en «Saber mirar un cuadro».

   O sea que a partir de ahora nadie puede decir que le interesa la historia ni
   el arte, y esos libros no suben nunca en su estantería. Los libros siguen
   ahí y se llega a ellos por los filtros y por el buscador; lo que se ha
   perdido es la manera de pedirlos desde la introducción. Se arregla el día
   que lleguen esos dos emoticonos, o metiendo Historia y Arte detrás de alguna
   de las once que quedan.
   -------------------------------------------------------------------------- */

export type Meta = {
  nombre: string;
  /** De qué estantes tira. Es lo que el resto de la app sabe leer. */
  categorias: readonly string[];
};

export const METAS: readonly Meta[] = [
  { nombre: "Aumentar tu productividad", categorias: ["Psicología", "Economía"] },
  { nombre: "Llegar a ser rico", categorias: ["Economía"] },
  { nombre: "Potenciar tu inteligencia", categorias: ["Filosofía", "Ciencia", "Psicología"] },
  { nombre: "Confiar más en ti mismo", categorias: ["Psicología"] },
  { nombre: "Equilibrar tu vida", categorias: ["Psicología", "Salud"] },
  { nombre: "Alcanzar la felicidad", categorias: ["Filosofía", "Psicología", "Salud"] },
  { nombre: "Tener relaciones sanas", categorias: ["Psicología"] },
  { nombre: "Mejorar tu vida sexual", categorias: ["Psicología", "Salud"] },
  { nombre: "Cómo ser mejores padres", categorias: ["Psicología", "Salud"] },
  { nombre: "Disfrutar de una vida sana", categorias: ["Salud", "Deportes"] },
  { nombre: "Crecer en tu fe", categorias: ["Filosofía", "Literatura"] },
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

/** El emoticono de una meta, por su nombre. Todas tienen el suyo.
 *
 *  Aquí había una segunda mitad: dieciséis dibujos provisionales míos, en la
 *  familia de los de Pablo —planos, a dos tintas, rojo y oro—, que se pintaban
 *  cuando una meta no tenía emoticono suyo. Con las cinco metas descolgadas ya
 *  no hay ninguna en ese caso, así que se ha ido, que es exactamente lo que
 *  decía este comentario que había que hacer el día que pasara.
 *
 *  Sale a 26 puntos clavados, que es lo que medían aquellos `<svg>`. */
export function DibujoTema({ tema }: { tema: string }) {
  const suyo = EMOTICONOS_METAS[tema];
  return suyo ? <img src={suyo} width={26} height={26} alt="" aria-hidden /> : null;
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
