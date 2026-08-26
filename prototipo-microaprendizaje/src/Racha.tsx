import { useEffect, useState } from "react";
import { animate, motion, useReducedMotion } from "framer-motion";
import { Llama } from "./Llama";
import { spring, springPop, springSoft, springTight } from "./motion";

/* ==========================================================================
   Cierre de capítulo: tiempo, racha y reto diario.

   Tres pantallas encadenadas, como en las referencias. El fuego no es un
   emoji ni una imagen: es SVG dibujado y animado por capas — llama exterior,
   interior y núcleo — cada una con su propio ritmo, para que ondule de verdad
   en lugar de parpadear.
   ========================================================================== */

/* -------------------------------------------------------------------------
   La llama
   ------------------------------------------------------------------------- */

/* ==========================================================================
   LA LLAMA

   Pablo la devolvió entera: «está fatal hecha, la animación muy mal y ese
   color tampoco me gusta». Las tres cosas eran verdad y las tres tenían la
   misma causa: estaba dibujada como una pegatina —una silueta plana de un
   solo color con un contorno negro de nueve puntos— y animada como una
   pegatina —escalando el grupo entero, que es lo que hace que parezca que
   respira en vez de que arde—.

   LA LLAMA SE MUDÓ. Estuvo aquí y ahora vive en `src/Llama.tsx`, porque ya
   no está dibujada: es la animación del emoji de fuego de Noto, de Google. Lo
   que se intentó antes —y por qué no bastaba— está contado allí.

   Lo que sí queda de aquello, porque sigue mandando en el resto de la
   pantalla: el fuego son tres tonos y no uno —rojo abajo, naranja en el
   cuerpo, oro en la punta—, porque una llama se enfría según sube y ese
   degradado es lo que el ojo reconoce como fuego. Es el mismo del fueguecito
   de la barra de arriba y el mismo de la barra de la meta.

   ========================================================================== */

/* -------------------------------------------------------------------------
   Pantalla de racha
   ------------------------------------------------------------------------- */

const ABREV = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"];

/**
 * Las tres próximas jornadas de estudio saltándose el fin de semana: el
 * objetivo es que la racha no se rompa por descansar el sábado.
 */
function jornadas(desde: Date) {
  const dias: Date[] = [];
  const cursor = new Date(desde);
  while (dias.length < 3) {
    const d = cursor.getDay();
    if (d !== 0 && d !== 6) dias.push(new Date(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }
  return dias;
}

export function Racha({ dias, onContinuar }: { dias: number; onContinuar: () => void }) {
  const reducido = useReducedMotion();
  const [numero, setNumero] = useState(0);
  const proximas = jornadas(new Date());

  // El número sube contando: llegar de golpe al total se siente plano.
  useEffect(() => {
    const control = animate(0, dias, {
      duration: 0.7,
      delay: 0.45,
      ease: "easeOut",
      onUpdate: (v) => setNumero(Math.round(v)),
    });
    return () => control.stop();
  }, [dias]);

  return (
    <motion.div
      className="racha"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: spring }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <div className="racha-centro">
        {/* La llama cae con rebote: es el golpe de efecto de la pantalla */}
        <motion.div
          initial={{ opacity: 0, y: -60, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={reducido ? { duration: 0.01 } : { type: "spring", stiffness: 300, damping: 16, mass: 1.1 }}
        >
          <Llama tamano={168} reducido={!!reducido} />
        </motion.div>

        <motion.p
          className="racha-numero"
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={reducido ? { duration: 0.01 } : { ...springPop, delay: 0.4 }}
        >
          {numero}
        </motion.p>

        <motion.p
          className="racha-rotulo"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.55 }}
        >
          {dias === 1 ? "Racha de días" : "Días de racha"}
        </motion.p>

        <div className="racha-jornadas">
          {proximas.map((fecha, i) => (
            <motion.div
              key={fecha.toDateString()}
              className="jornada"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.68 + i * 0.07 }}
            >
              <span className="jornada-letra">{ABREV[fecha.getDay()]}</span>
              <motion.span
                className="jornada-circulo"
                data-hecho={i === 0}
                initial={{ scale: 0.6 }}
                animate={{ scale: 1 }}
                transition={{ ...springPop, delay: 0.72 + i * 0.07 }}
              >
                {i === 0 && (
                  <motion.svg width="26" height="26" viewBox="0 0 26 26" aria-hidden>
                    <motion.path
                      d="M 6 13.5 L 11 18.5 L 20 8"
                      fill="none"
                      stroke="var(--fuego-trazo)"
                      strokeWidth="3.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={reducido ? { duration: 0.01 } : { ...springTight, delay: 1 }}
                    />
                  </motion.svg>
                )}
              </motion.span>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="racha-mensaje"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.95 }}
        >
          {dias === 1
            ? "Primer día hecho. Racha encendida. Findes libres."
            : `${dias} días seguidos. No la rompas ahora.`}
        </motion.p>
      </div>

      <motion.button
        className="racha-boton"
        onClick={onContinuar}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 1.1 }}
      >
        ¡Vamos!
      </motion.button>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------
   Reto diario
   ------------------------------------------------------------------------- */

export function RetoDiario({
  minutos,
  objetivo,
  onContinuar,
}: {
  minutos: number;
  objetivo: number;
  onContinuar: () => void;
}) {
  const [mostrado, setMostrado] = useState(0);
  const proporcion = Math.min(minutos / objetivo, 1);

  useEffect(() => {
    const control = animate(0, minutos, {
      duration: 0.9,
      delay: 0.35,
      ease: "easeOut",
      onUpdate: (v) => setMostrado(v),
    });
    return () => control.stop();
  }, [minutos]);

  const fecha = new Date().toLocaleDateString("es-ES", { day: "numeric", month: "long" });

  return (
    <motion.div
      className="cierre"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: spring }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <motion.p
        className="cierre-fecha"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.08 }}
      >
        {fecha}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.16 }}
      >
        Reto diario
      </motion.h2>
      <motion.p
        className="cierre-sub"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.24 }}
      >
        Este es el reto de hoy. Aprieta un poco e intenta completarlo.
      </motion.p>

      <motion.div
        className="reto-caja"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...springSoft, delay: 0.32 }}
      >
        <p className="reto-titulo">APRENDE DURANTE {objetivo} MINUTOS</p>
        <div className="reto-barra">
          <motion.div
            className="reto-relleno"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: proporcion }}
            transition={{ ...springSoft, delay: 0.5 }}
          />
        </div>
        <p className="reto-cifra">
          {mostrado.toFixed(1).replace(".", ",")} / {objetivo} MIN
        </p>
      </motion.div>

      <div className="cierre-cta">
        <motion.button
          className="primary-btn"
          onClick={onContinuar}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.7 }}
        >
          Continuar
        </motion.button>
      </div>
    </motion.div>
  );
}
