import { useEffect, useState } from "react";
import { animate, motion, useReducedMotion } from "framer-motion";
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

   EL COLOR. Iba en `--fuego`, que era un salmón (244, 128, 94): el color de
   una brasa apagada, no el de una llama. Ahora son los tres tonos que ya
   llevaba el fueguecito de la barra de arriba, y son los de un fuego de
   verdad: rojo abajo del todo, naranja en el cuerpo y oro en la punta,
   porque una llama se enfría según sube y ese degradado es lo que el ojo
   reconoce como fuego. El contorno negro se ha ido: existía para recortar la
   silueta contra el fondo, y con el degradado ya se recorta sola.

   LA ANIMACIÓN. Escalar el grupo mueve la base igual que la punta, y la base
   de una llama no se mueve: está pegada a lo que arde. Lo que se mueve es la
   punta, y no de tamaño sino de FORMA. Así que aquí no se escala nada: se
   interpola el camino entre tres siluetas —`CUERPO`, con la punta erguida,
   caída a la izquierda y caída a la derecha— que tienen exactamente los
   mismos comandos y solo cambian los puntos de control. El navegador
   interpola número a número y sale una llama que ondea.

   Tres detalles más, y los tres son de ritmo:

     · El núcleo va a 1,45 s y el cuerpo a 2,3, dos duraciones que no son
       múltiplos, así que no vuelven a coincidir hasta pasado un buen rato y
       nunca se ve el bucle.
     · Las chispas SUBEN y se apagan, no flotan en su sitio. Una chispa que
       sube y desaparece dice que hay corriente de aire; una que sube y baja
       dice que está colgada de un hilo.
     · Y detrás hay un resplandor que late muy despacio, a 3,7 s. No se ve
       —está al 22 %— pero es lo que hace que la llama parezca que ilumina
       algo en vez de estar recortada encima.
   ========================================================================== */

/** Las tres siluetas del cuerpo. Mismos comandos, distintos puntos: es lo que
 *  permite que el navegador interpole de una a otra. */
const CUERPO = [
  "M66 8 C82 36 108 52 106 84 C104 120 86 146 58 146 C30 146 12 124 14 94 C16 68 34 58 42 34 C44 56 52 66 58 70 C52 46 56 24 66 8 Z",
  "M58 6 C78 34 106 54 104 86 C102 122 86 146 58 146 C30 146 12 122 14 92 C16 66 30 60 38 36 C42 58 50 68 56 72 C48 46 50 22 58 6 Z",
  "M72 10 C86 38 110 50 108 82 C106 118 88 146 58 146 C30 146 14 126 16 96 C18 70 38 56 46 32 C46 54 54 64 60 68 C56 44 62 26 72 10 Z",
];

/** Y las tres del núcleo, con la punta más viva porque es la parte más
 *  caliente y la que más se mueve en una llama de verdad. */
const NUCLEO = [
  "M64 66 C74 84 88 96 86 116 C84 136 72 146 58 146 C44 146 32 134 34 116 C36 100 48 94 52 78 C54 94 58 100 62 104 C58 88 60 76 64 66 Z",
  "M58 62 C70 82 88 98 86 118 C84 138 72 146 58 146 C44 146 32 132 34 114 C36 98 44 96 48 80 C52 96 56 102 60 106 C54 88 54 74 58 62 Z",
  "M70 70 C80 88 90 96 88 114 C86 134 72 146 58 146 C44 146 34 136 36 118 C38 102 52 92 56 76 C56 92 60 98 64 102 C60 86 64 78 70 70 Z",
];

export function Llama({ tamano = 108, reducido }: { tamano?: number; reducido: boolean }) {
  const onda = (caminos: string[]) => (reducido ? {} : { d: [...caminos, caminos[0]] });

  return (
    /* El alto sale de la caja del dibujo —152 sobre 120— y no de un 1,12
       escrito a ojo, que era lo que había y dejaba la llama encogida dentro
       de su hueco con aire a los lados. */
    <svg width={tamano} height={(tamano * 152) / 120} viewBox="0 0 120 152" aria-hidden>
      <defs>
        {/* Los mismos tres tonos del fueguecito de la barra de arriba: el de
            allí y el de aquí tienen que ser el mismo fuego a dos tamaños. */}
        <linearGradient id="llama-cuerpo" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#ffb13d" />
          <stop offset="0.42" stopColor="#ff7a18" />
          <stop offset="1" stopColor="#f0410e" />
        </linearGradient>
        <linearGradient id="llama-nucleo" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#fff6c2" />
          <stop offset="0.8" stopColor="#ffc93c" />
          <stop offset="1" stopColor="#ffa616" />
        </linearGradient>
        <radialGradient id="llama-halo">
          <stop offset="0" stopColor="#ff7a18" stopOpacity="0.42" />
          <stop offset="1" stopColor="#ff7a18" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* El resplandor de detrás */}
      <motion.ellipse
        cx="60" cy="104" rx="58" ry="52"
        fill="url(#llama-halo)"
        animate={reducido ? {} : { opacity: [0.72, 1, 0.72], scale: [0.96, 1.04, 0.96] }}
        transition={reducido ? {} : { duration: 3.7, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "60px", originY: "116px" }}
      />

      {/* Chispas: suben y se apagan. Cada una a su ritmo y con su retraso, que
          tres chispas subiendo a la vez son un ascensor, no un fuego. */}
      {[
        { cx: 30, r: 3.2, dur: 2.9, d: 0 },
        { cx: 92, r: 2.4, dur: 3.6, d: 1.1 },
        { cx: 74, r: 2.8, dur: 3.2, d: 2.2 },
      ].map((c) => (
        <motion.circle
          key={c.cx}
          cx={c.cx}
          cy={74}
          r={c.r}
          fill="#ffb13d"
          initial={{ opacity: 0 }}
          animate={reducido ? { opacity: 0.5 } : { y: [0, -62], opacity: [0, 0.9, 0] }}
          transition={
            reducido ? {} : { duration: c.dur, delay: c.d, repeat: Infinity, ease: "easeOut" }
          }
        />
      ))}

      <motion.path
        d={CUERPO[0]}
        fill="url(#llama-cuerpo)"
        animate={onda(CUERPO)}
        transition={reducido ? {} : { duration: 2.3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d={NUCLEO[0]}
        fill="url(#llama-nucleo)"
        animate={onda(NUCLEO)}
        transition={reducido ? {} : { duration: 1.45, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

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
