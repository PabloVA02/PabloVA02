import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { DATOS, type Dato } from "./sabias";
import { GlyphClose, GlyphShare } from "./glyphs";
import { pantalla, spring, springTight, suave } from "./motion";

/* ==========================================================================
   ¿SABÍAS QUE…?  —  calcado de la captura de Wiser del 2 de septiembre

   Pablo: «me gustaría más que tuviera más este estilo, cálcalo todo excepto lo
   que para nosotros no es útil».

   LO QUE SE CALCA, que es casi todo:

   · Los tramos de progreso arriba del todo, uno por entrada, como en una
     historia de Instagram. Dicen cuántas hay y por cuál vas sin ocupar sitio.
   · La fila de marca debajo: chapa redonda y el nombre de la sección.
   · La TARJETA centrada, que es el hallazgo de la captura. Fondo un punto más
     claro que la página, esquinas muy redondeadas, mucho aire dentro, y el
     texto en negrita de palo seco a un tamaño que ocupa media pantalla.
   · Las pastillas grises debajo del texto, dentro de la propia tarjeta y
     separadas por un filete finísimo.
   · El fondo beige, que además es el papel de Curva de toda la vida.

   LO QUE NO SE CALCA, porque para nosotros no sirve:

   · La equis de cerrar. Wiser enseña esto como una pantalla que se abre encima
     de la app; aquí es una pestaña, y de una pestaña no se sale cerrando.
   · La tarjeta de abajo con el libro y el botón «Leer». Es su manera de llevar
     de la cita al libro que la contiene; nuestros datos no salen de un libro,
     así que poner una tarjeta ahí sería inventarse una procedencia.

   Y LO QUE SE AÑADE: «Saber más» no abre una hoja desde abajo —eso era lo que
   había antes y Pablo pidió «uno mucho mejor y moderno, que se abre sobre la
   propia pantalla»—. Lo que hace es ABRIR LA TARJETA: la misma que estabas
   mirando crece hasta llenar la pantalla y el texto aparece dentro. Es una
   sola pieza que cambia de tamaño, no dos pantallas que se relevan, y por eso
   se entiende sin explicación: lo que se abre es lo que tocaste.
   ========================================================================== */

/** Tres tramos de tamaño, según lo que ocupe la frase. Ver `sabias.ts`. */
function tramo(t: string) {
  if (t.length <= 42) return "grande";
  if (t.length <= 62) return "medio";
  return "largo";
}

/** Parte el titular para teñir el trozo que sorprende. */
function partes(d: Dato): [string, string, string] {
  if (!d.realce) return [d.titular, "", ""];
  const i = d.titular.indexOf(d.realce);
  if (i < 0) return [d.titular, "", ""];
  return [d.titular.slice(0, i), d.realce, d.titular.slice(i + d.realce.length)];
}

export function Sabias() {
  const reducido = useReducedMotion();
  const [activo, setActivo] = useState(0);
  const [abierto, setAbierto] = useState<Dato | null>(null);
  const pase = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const caja = pase.current;
    if (!caja) return;
    const ojo = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas)
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset.i);
            if (!Number.isNaN(i)) setActivo(i);
          }
      },
      { root: caja, threshold: 0.6 },
    );
    for (const hijo of Array.from(caja.children)) ojo.observe(hijo);
    return () => ojo.disconnect();
  }, []);

  useEffect(() => {
    if (!abierto) return;
    const t = (e: KeyboardEvent) => e.key === "Escape" && setAbierto(null);
    window.addEventListener("keydown", t);
    return () => window.removeEventListener("keydown", t);
  }, [abierto]);

  return (
    <motion.div
      className="sab"
      initial={pantalla.initial}
      animate={pantalla.animate}
      exit={pantalla.exit}
    >
      {/* Los tramos, uno por dato. El que va delante se pinta entero y los
          anteriores a media tinta: se ve de un vistazo cuánto llevas. */}
      <div className="sab-tramos" aria-hidden>
        {DATOS.map((d, i) => (
          <span
            key={d.id}
            className="sab-tramo"
            data-estado={i === activo ? "ahora" : i < activo ? "visto" : "queda"}
          />
        ))}
      </div>

      <motion.header
        className="sab-marca"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0, transition: { ...springTight, delay: 0.06 } }}
      >
        <span className="sab-chapa" aria-hidden>
          {/* La bombilla de la pestaña, en pequeño y encerrada en su chapa. */}
          <svg width="17" height="17" viewBox="0 0 24 24">
            <path
              d="M12 2 A7 7 0 0 0 7.6 14.4 C8.6 15.3 9.1 16.2 9.2 17.2 H14.8 C14.9 16.2 15.4 15.3 16.4 14.4 A7 7 0 0 0 12 2 Z"
              fill="currentColor"
            />
            <rect x="9.2" y="18.4" width="5.6" height="1.7" rx="0.85" fill="currentColor" />
            <path d="M9.9 21.3 H14.1 A2.1 2.1 0 0 1 12 23 A2.1 2.1 0 0 1 9.9 21.3 Z" fill="currentColor" />
          </svg>
        </span>
        ¿Sabías que…?
      </motion.header>

      <div className="sab-pase" ref={pase}>
        {DATOS.map((d, i) => {
          const [antes, medio, despues] = partes(d);
          const estaAbierta = abierto?.id === d.id;
          return (
            <section
              key={d.id}
              className="sab-hueco"
              data-i={i}
              data-conimagen={d.imagen ? "true" : undefined}
              style={{ ["--acento" as string]: d.color }}
            >
              {/* LA ILUSTRACIÓN, A SANGRE Y SIN MARCO. Ocupa la mitad de arriba
                  y se desvanece hacia abajo hasta desaparecer en el fondo de la
                  sección. Funciona porque su papel es del mismo crema: no hay
                  un borde donde acabe la imagen y empiece la pantalla, hay una
                  transición. Con marco sería una foto pegada; así es la propia
                  pantalla la que está dibujada. */}
              {d.imagen && (
                <div className="sab-lienzo" aria-hidden>
                  <img src={d.imagen} alt="" decoding="async" />
                </div>
              )}
              {/* La tarjeta lleva `layoutId`: cuando se abre, ESTA MISMA crece
                  hasta llenar la pantalla en vez de aparecer otra encima. Por
                  eso mientras está abierta aquí no se pinta, o habría dos. */}
              {!estaAbierta && (
                <motion.article layoutId={`sab-${d.id}`} className="sab-carta" transition={spring}>
                  <motion.p layoutId={`sab-tema-${d.id}`} className="sab-tema">
                    {d.tema}
                  </motion.p>
                  <motion.h2
                    layoutId={`sab-frase-${d.id}`}
                    className="sab-frase"
                    data-tramo={tramo(d.titular)}
                  >
                    {antes}
                    {medio && <em>{medio}</em>}
                    {despues}
                  </motion.h2>
                  <motion.div layoutId={`sab-pie-${d.id}`} className="sab-acciones">
                    <button className="sab-pastilla sab-pastilla-fuerte" onClick={() => setAbierto(d)}>
                      <span aria-hidden>＋</span> Saber más
                    </button>
                    <button
                      className="sab-pastilla"
                      onClick={() => {
                        const texto = `¿Sabías que… ${d.titular}?`;
                        void navigator.share?.({ text: texto }).catch(() => {});
                      }}
                    >
                      <GlyphShare /> Compartir
                    </button>
                  </motion.div>
                </motion.article>
              )}
            </section>
          );
        })}
      </div>

      <AnimatePresence>
        {abierto && (
          <motion.div
            key="velo"
            className="sab-velo"
            style={{ ["--acento" as string]: abierto.color }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.18, ease: suave } }}
            exit={{ opacity: 0, transition: { duration: 0.16 } }}
          >
            <motion.article
              layoutId={`sab-${abierto.id}`}
              className="sab-carta sab-carta-abierta"
              transition={reducido ? { duration: 0.16 } : spring}
            >
              <button className="sab-cerrar" onClick={() => setAbierto(null)} aria-label="Cerrar">
                <GlyphClose />
              </button>
              <motion.p layoutId={`sab-tema-${abierto.id}`} className="sab-tema">
                {abierto.tema}
              </motion.p>
              <motion.h2
                layoutId={`sab-frase-${abierto.id}`}
                className="sab-frase"
                data-tramo="abierto"
              >
                {abierto.titular}
              </motion.h2>
              {/* El texto llega DESPUÉS de que la tarjeta haya crecido: si
                  entrara a la vez, la caja cambiaría de alto mientras se
                  mueve y el movimiento saldría a tirones. */}
              <motion.div
                className="sab-texto"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.22, ease: suave, delay: 0.16 } }}
              >
                {abierto.mas.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </motion.div>
              <motion.div layoutId={`sab-pie-${abierto.id}`} className="sab-acciones sab-acciones-abierta">
                <button className="sab-pastilla sab-pastilla-fuerte" onClick={() => setAbierto(null)}>
                  Cerrar
                </button>
              </motion.div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
