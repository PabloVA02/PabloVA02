import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { DATOS, type Dato } from "./sabias";
import { GlyphClose } from "./glyphs";
import { pantalla, spring, springTight, suave } from "./motion";

/* ==========================================================================
   ¿SABÍAS QUE…?  —  la sección de datos curiosos

   Pablo, el 2 de septiembre: «pones una frase corta que guste leerla, en
   grande, con letras grandes y vistosas, y si quieres profundizar un poco más
   existirá una pestaña donde se abrirá más texto».

   Así que la pantalla es la frase y nada más. Ni foto, ni tarjeta, ni marco:
   el dato ocupa el móvil entero y lo único que compite con él es el botón de
   abrir. La foto se cayó a propósito —una imagen genérica al lado de un dato
   bueno lo empequeñece— y en su sitio va el color, uno por entrada.

   SE PASA COMO EL MURO, deslizando hacia arriba, porque es el gesto que ya
   tiene aprendido de los shorts y porque un dato se lee en seis segundos: lo
   que hace falta es que el siguiente esté a un dedo de distancia.

   EL TAMAÑO DE LA LETRA NO SE MIDE, SE ELIGE POR TRAMOS. Con `cqw` la letra
   crece con la pantalla, y con tres tramos según lo que ocupe la frase se
   evita el bucle de medir y encoger que en los shorts cuesta cientos de
   milisegundos. Aquí no hace falta: no hay que llenar una caja exacta, solo
   que quepa holgada y se vea grande.
   ========================================================================== */

/** Tres tramos de tamaño. Una frase corta puede ir enorme; una larga, no. */
function tramo(t: string) {
  if (t.length <= 42) return "grande";
  if (t.length <= 62) return "medio";
  return "largo";
}

/** Parte el titular en tres para poder teñir el trozo que sorprende. */
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

  /* Cuál está delante. Igual que en el muro: lo dice el navegador, no un
     cálculo con la posición del scroll. */
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

  /* Con el panel abierto, la tecla de escape lo cierra. */
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
      <motion.header
        className="sab-marca"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0, transition: { ...springTight, delay: 0.08 } }}
      >
        ¿Sabías que…?
      </motion.header>

      <motion.div
        className="sab-cuenta"
        aria-hidden
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0, transition: { ...springTight, delay: 0.12 } }}
      >
        {activo + 1}
        <span className="sab-cuenta-total">/{DATOS.length}</span>
      </motion.div>

      <div className="sab-pase" ref={pase}>
        {DATOS.map((d, i) => {
          const [antes, medio, despues] = partes(d);
          return (
            <article
              key={d.id}
              className="sab-carta"
              data-i={i}
              style={{ ["--acento" as string]: d.color }}
            >
              <p className="sab-tema">{d.tema}</p>
              <h2 className="sab-frase" data-tramo={tramo(d.titular)}>
                {antes}
                {medio && <em>{medio}</em>}
                {despues}
              </h2>
              <button className="sab-mas" type="button" onClick={() => setAbierto(d)}>
                Saber más
                {/* Hacia ARRIBA, que es de donde viene la hoja. Con la flecha
                    hacia abajo —que fue lo primero— el botón prometía bajar y
                    lo que pasaba era lo contrario. */}
                <span className="sab-mas-flecha" aria-hidden>
                  ↑
                </span>
              </button>
            </article>
          );
        })}
      </div>

      <AnimatePresence>
        {abierto && (
          <>
            <motion.button
              key="velo"
              className="sab-velo"
              aria-label="Cerrar"
              onClick={() => setAbierto(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.16, ease: suave } }}
              exit={{ opacity: 0, transition: { duration: 0.12 } }}
            />
            <motion.div
              key="hoja"
              className="sab-hoja"
              style={{ ["--acento" as string]: abierto.color }}
              initial={{ y: reducido ? 0 : "100%" }}
              animate={{ y: 0, transition: reducido ? { duration: 0.15 } : spring }}
              exit={{ y: reducido ? 0 : "100%", opacity: reducido ? 0 : 1, transition: { duration: 0.2, ease: suave } }}
              drag={reducido ? false : "y"}
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0, bottom: 0.4 }}
              onDragEnd={(_, info) => {
                if (info.offset.y > 90 || info.velocity.y > 500) setAbierto(null);
              }}
            >
              <span className="sab-asa" aria-hidden />
              <button className="sab-cerrar" onClick={() => setAbierto(null)} aria-label="Cerrar">
                <GlyphClose />
              </button>
              <p className="sab-hoja-tema">{abierto.tema}</p>
              <h3 className="sab-hoja-titulo">{abierto.titular}</h3>
              <div className="sab-hoja-texto">
                {abierto.mas.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
