import { useEffect, useState } from "react";
import { animate, motion, useReducedMotion } from "framer-motion";
import { spring, springPop, springTight } from "./motion";
import { PortadaLibro } from "./PortadaLibro";
import { PORTADAS_LIBRO } from "./libros/portadas";
import { urlFoto } from "./shorts";

/* ==========================================================================
   El cierre de un resumen.

   Sustituye a la pantalla de «capítulo completado» que había, y que era de
   cuando la app iba por tarjetas: enseñaba puntos de experiencia y el tiempo
   que habías tardado en leer. Pablo lo pidió así el 21 de agosto, a partir de
   las capturas de Headway: se queda el escaneo del libro, se queda una cifra
   de minutos —los DE AUDIO, los de la ficha, no los que has tardado tú— y se
   añaden las ideas. Todo lo demás fuera: nada de experiencia, nada de
   estrellas de valoración, nada de progreso semanal.

   ── POR QUÉ LOS MINUTOS SON LOS DE LA FICHA ───────────────────────────────

   Porque son los que el lector vio ANTES de entrar. Enseñar al final «has
   tardado 4,2 minutos» convierte el cierre en un cronómetro y además castiga
   a quien lee despacio, que es justo lo contrario de lo que queremos. La cifra
   de la ficha es una promesa que se cumple: pone 17 minutos y al terminar
   dice 17. La regla de que la cifra visible es la de OÍRLO está en
   REDACCION.md, apartado 2 ter.

   ── LAS TRES FASES ────────────────────────────────────────────────────────

   1. ESCANEO. Una banda de luz recorre la cubierta dos veces y, a su paso,
      van saltando chispas hacia arriba: una por cada idea del resumen. No es
      decorado, es la cuenta real de cajas del rayo que tiene el texto.
   2. SELLADO. Se cierra un anillo alrededor de la cubierta y las chispas
      caen en fila. Es el único momento con rebote.
   3. CIFRAS. La barra de minutos se llena de una vez, sin pasarse —muelle
      apretado— y los dos números suben contando.

   Las chispas del paso 1 son las mismas que se posan en el paso 3. Ese es el
   truco de toda la pantalla: no hay dos animaciones, hay una sola cosa que
   sale del libro y acaba siendo la cifra.
   ========================================================================== */

/** Cuánto dura cada fase, en segundos. */
const ESCANEO = 1.9;
const SELLADO = 0.62;

/** Nunca más de doce chispas: por encima se convierten en confeti. */
const MAX_CHISPAS = 12;

type Fase = "escaneo" | "sellado" | "cifras";

export function FinResumen({
  id,
  titulo,
  autor,
  categoria,
  color,
  minutosAudio,
  ideas,
  onCerrar,
}: {
  id: string;
  titulo: string;
  autor: string;
  categoria: string;
  /** El color de su categoría. Tiñe el aura y la barra. */
  color: string;
  /** Los de la ficha, los de oírlo. NO los que ha tardado el lector. */
  minutosAudio: number;
  /** Cajas del rayo del resumen. Si es cero, esa columna no se pinta. */
  ideas: number;
  onCerrar: () => void;
}) {
  const quieto = useReducedMotion();
  const [fase, setFase] = useState<Fase>(quieto ? "cifras" : "escaneo");
  const [min, setMin] = useState(0);
  const [ide, setIde] = useState(0);

  const foto = PORTADAS_LIBRO[id];
  const cubierta = foto?.local ? urlFoto(foto) : undefined;
  const chispas = Math.min(ideas, MAX_CHISPAS);

  /* El reloj de las fases. Un solo efecto con dos temporizadores: encadenar
     `setTimeout` dentro de otro deja huérfano el segundo si el componente se
     desmonta a medias. */
  useEffect(() => {
    if (quieto) return;
    const a = setTimeout(() => setFase("sellado"), ESCANEO * 1000);
    const b = setTimeout(() => setFase("cifras"), (ESCANEO + SELLADO) * 1000);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, [quieto]);

  /* Los números suben contando cuando llega su fase, no antes: verlos quietos
     con el valor final y que luego se muevan es lo que hace que un contador
     parezca un adorno. */
  useEffect(() => {
    if (fase !== "cifras") return;
    const uno = animate(0, minutosAudio, {
      duration: 1.15,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setMin(v),
    });
    const dos = animate(0, ideas, {
      duration: 0.95,
      delay: 0.12,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setIde(Math.round(v)),
    });
    return () => {
      uno.stop();
      dos.stop();
    };
  }, [fase, minutosAudio, ideas]);

  const enCifras = fase === "cifras";

  return (
    <motion.div
      className="cierre"
      style={{ "--tono": color } as React.CSSProperties}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.32 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      {/* El aura. Vive detrás de todo y se enciende al sellar: es lo que hace
          que el sellado se sienta como un remate y no como un corte. */}
      <motion.div
        className="cierre-aura"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{
          opacity: fase === "escaneo" ? 0.28 : 0.62,
          scale: fase === "escaneo" ? 0.86 : 1,
          transition: spring,
        }}
      />

      <div className="cierre-escena">
        {/* La cubierta. Entra ligeramente girada y se endereza al sellar, que
            es el gesto de «esto ya está cerrado». */}
        <motion.div
          className="cierre-libro"
          initial={{ scale: 0.9, rotateY: -13, opacity: 0 }}
          animate={{
            scale: enCifras ? 0.82 : 1,
            rotateY: fase === "escaneo" ? -13 : 0,
            opacity: 1,
            transition: fase === "sellado" ? springPop : spring,
          }}
        >
          <div className="cierre-tapa">
            {cubierta ? (
              <img src={cubierta} alt="" className="cierre-cubierta" />
            ) : (
              <PortadaLibro
                id={id}
                titulo={titulo}
                autor={autor}
                categoria={categoria}
                color={color}
                tamano={168}
              />
            )}

            {/* La banda de luz. Solo existe mientras escanea: dejarla montada
                con opacidad cero seguía costando una capa compuesta por
                fotograma en los móviles lentos. */}
            {fase === "escaneo" && !quieto && (
              <motion.div
                className="cierre-barrido"
                initial={{ y: "-45%" }}
                animate={{ y: "145%" }}
                transition={{
                  duration: ESCANEO / 2,
                  repeat: 1,
                  ease: [0.45, 0, 0.55, 1],
                }}
              />
            )}
          </div>

          {/* El anillo se dibuja de un trazo al sellar. `pathLength` sobre un
              rectángulo redondeado da el recorrido exacto del borde. */}
          <svg className="cierre-anillo" viewBox="0 0 120 178" aria-hidden>
            <motion.rect
              x="2.5"
              y="2.5"
              width="115"
              height="173"
              rx="9"
              fill="none"
              stroke="var(--tono)"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                fase === "escaneo"
                  ? { pathLength: 0, opacity: 0 }
                  : { pathLength: 1, opacity: enCifras ? 0.45 : 1, transition: springTight }
              }
            />
          </svg>
        </motion.div>

        {/* Las chispas: una por idea. Suben durante el escaneo y en la fase de
            cifras ya no están aquí, están posadas abajo. */}
        {!quieto && fase !== "cifras" && (
          <div className="cierre-chispas" aria-hidden>
            {Array.from({ length: chispas }, (_, i) => (
              <motion.span
                key={i}
                className="cierre-chispa"
                style={{ left: `${8 + (i * 84) / Math.max(1, chispas - 1)}%` }}
                initial={{ opacity: 0, y: 30, scale: 0.5 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  y: [30, -46 - (i % 3) * 14],
                  scale: [0.5, 1, 1, 0.8],
                  transition: {
                    duration: 1.15,
                    delay: 0.18 + (i * (ESCANEO - 0.5)) / Math.max(1, chispas),
                    ease: "easeOut",
                    times: [0, 0.22, 0.7, 1],
                  },
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* El rótulo cambia en el sitio, sin moverse: el texto que salta de sitio
          al cambiar de fase es lo que hace que una secuencia parezca rota. */}
      <div className="cierre-rotulo">
        <motion.p
          key={enCifras ? "hecho" : "leyendo"}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0, transition: spring }}
        >
          {enCifras ? "Resumen terminado" : "Recogiendo las ideas…"}
        </motion.p>
      </div>

      {/* Las cifras. Ocupan sitio desde el principio —visibilidad, no
          montaje— para que al aparecer no empujen la cubierta hacia arriba. */}
      <div className="cierre-cifras" data-visible={enCifras}>
        <div className="cierre-dato">
          <div className="cierre-barra">
            <motion.div
              className="cierre-relleno"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: enCifras ? 1 : 0, transition: { ...springTight, delay: 0.05 } }}
            />
          </div>
          <p className="cierre-numero">
            {min.toLocaleString("es-ES", { maximumFractionDigits: 0 })}
          </p>
          <p className="cierre-pie">minutos de audio</p>
        </div>

        {ideas > 0 && (
          <div className="cierre-dato">
            <div className="cierre-posadas" aria-hidden>
              {Array.from({ length: chispas }, (_, i) => (
                <motion.span
                  key={i}
                  className="cierre-chispa cierre-chispa-quieta"
                  initial={{ opacity: 0, y: -10 }}
                  animate={
                    enCifras
                      ? { opacity: 1, y: 0, transition: { ...springPop, delay: 0.1 + i * 0.035 } }
                      : { opacity: 0, y: -10 }
                  }
                />
              ))}
            </div>
            <p className="cierre-numero">{ide}</p>
            <p className="cierre-pie">{ideas === 1 ? "idea clave" : "ideas clave"}</p>
          </div>
        )}
      </div>

      <motion.button
        className="primary-btn cierre-boton"
        onClick={onCerrar}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, y: 12 }}
        animate={
          enCifras ? { opacity: 1, y: 0, transition: { ...spring, delay: 0.45 } } : { opacity: 0, y: 12 }
        }
        /* Sin fase de cifras el botón está invisible; que además no se pueda
           tocar evita salir de la pantalla a ciegas durante el escaneo. */
        style={{ pointerEvents: enCifras ? "auto" : "none" }}
      >
        Seguir
      </motion.button>
    </motion.div>
  );
}
