import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { DATOS, type Dato } from "./sabias";
import { GlyphClose, GlyphGuardar, GlyphShare } from "./glyphs";
import { Boceto } from "./bocetos";
import { pantalla, spring, suave } from "./motion";

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
/* Cinco tamaños y no tres. Desde que los titulares cuentan el dato ENTERO
   —Pablo, 4 de septiembre: «cosas que se entiendan»— hay frases de 127
   caracteres donde antes ninguna pasaba de 70, y con tres escalones las
   largas se salían de la tarjeta. */
function tramo(t: string) {
  if (t.length <= 42) return "grande";
  if (t.length <= 62) return "medio";
  if (t.length <= 85) return "largo";
  if (t.length <= 105) return "mayor";
  return "muy-largo";
}

/** Parte el titular para teñir el trozo que sorprende. */
function partes(d: Dato): [string, string, string] {
  if (!d.realce) return [d.titular, "", ""];
  const i = d.titular.indexOf(d.realce);
  if (i < 0) return [d.titular, "", ""];
  return [d.titular.slice(0, i), d.realce, d.titular.slice(i + d.realce.length)];
}

/* LO GUARDADO, en el disco del navegador y con el mismo formato que el resto
   de la app: una lista de identificadores separados por comas, leída filtrando
   contra los datos DE HOY —así un dato retirado desaparece en vez de dejar una
   entrada rota— y todo entre `try`, porque en modo privado o con el disco
   lleno `localStorage` lanza y sin la guarda se queda la pantalla en blanco
   por no poder apuntar que has guardado una curiosidad.

   Vive aquí y no en `App.tsx` a propósito: lo de allí es una lista de LIBROS,
   se filtra contra el catálogo de libros y un dato no es un libro. Meterlos en
   el mismo saco haría que cada uno borrara al otro al guardarse. */
const CLAVE = "curva.sabias.guardados";

function leeGuardados(): string[] {
  try {
    const v = localStorage.getItem(CLAVE);
    if (!v) return [];
    const hay = new Set(DATOS.map((d) => d.id));
    return v.split(",").filter((id) => hay.has(id));
  } catch {
    return [];
  }
}

export function Sabias() {
  const reducido = useReducedMotion();
  const [abierto, setAbierto] = useState<Dato | null>(null);
  const [guardados, setGuardados] = useState<ReadonlySet<string>>(() => new Set(leeGuardados()));
  const pase = useRef<HTMLDivElement>(null);

  const guardar = (id: string) => {
    setGuardados((antes) => {
      const ahora = new Set(antes);
      if (ahora.has(id)) ahora.delete(id);
      else ahora.add(id);
      try {
        localStorage.setItem(CLAVE, [...ahora].join(","));
      } catch {
        /* Se pierde entre sesiones y nada más: dentro de esta manda React. */
      }
      return ahora;
    });
  };

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
      {/* NI TRAMOS NI FILA DE MARCA. Los dos venían calcados de la captura de
          Wiser y los quitó Pablo el 3 de septiembre: «quitar lo de sabías que
          y lo de la raya esa de al lado».

          Y con la sección llamándose ya Shorts, tenía razón por partida doble:
          un rótulo que dice «¿Sabías que…?» encima de una pestaña que dice
          «Shorts» son dos nombres para lo mismo, y los tramos contaban
          veintitrés pantallas en una lista que va a crecer, o sea que a los
          cincuenta datos habrían sido cincuenta rayitas de dos puntos.

          Su CSS —`.sab-tramos`, `.sab-tramo`, `.sab-marca`, `.sab-chapa`—
          sigue en `styles.css` por si vuelven. */}

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
                  {/* EL BOCETO. Va encima del texto y a línea, sin relleno ni
                      color: es el dibujo de lo que se está contando, no un
                      icono ni una ilustración. Ver `bocetos.tsx`. */}
                  {d.boceto && (
                    <div className="sab-boceto">
                      <Boceto nombre={d.boceto} escena={d.escena} />
                    </div>
                  )}
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
                  {/* UNA PASTILLA CON LETRA Y DOS BOTONES REDONDOS. Antes eran
                      dos pastillas con letra y sumaban 288 de los 291 que hay:
                      meter «Guardar» de tercera se iba a dos líneas. Y no hace
                      falta el rótulo —el marcador y la flecha se entienden
                      solos, y así «Saber más», que es lo que se quiere que se
                      pulse, se queda con todo el ancho que sobra. */}
                  <motion.div layoutId={`sab-pie-${d.id}`} className="sab-acciones">
                    <button className="sab-pastilla sab-pastilla-fuerte" onClick={() => setAbierto(d)}>
                      <span aria-hidden>＋</span> Saber más
                    </button>
                    <button
                      className="sab-redondo"
                      aria-label={guardados.has(d.id) ? "Quitar de guardados" : "Guardar"}
                      aria-pressed={guardados.has(d.id)}
                      data-on={guardados.has(d.id) ? "true" : undefined}
                      onClick={() => guardar(d.id)}
                    >
                      <GlyphGuardar relleno={guardados.has(d.id)} />
                    </button>
                    <button
                      className="sab-redondo"
                      aria-label="Compartir"
                      onClick={() => {
                        const texto = `¿Sabías que… ${d.titular}?`;
                        void navigator.share?.({ text: texto }).catch(() => {});
                      }}
                    >
                      <GlyphShare />
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
