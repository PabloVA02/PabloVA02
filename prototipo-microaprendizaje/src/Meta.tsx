import { useEffect, useState } from "react";
import { AnimatePresence, animate, motion, useMotionValue, useTransform } from "framer-motion";
import { spring, springPop, springSoft } from "./motion";

/* ==========================================================================
   La meta del día.

   Un arco que se llena con lo leído hoy, la cifra dentro del hueco y el total
   de siempre al lado. Es el bloque que la gente abre a mirar aunque no vaya a
   leer, así que tiene que estar vivo sin ser un parque de atracciones.

   VA DEBAJO DE LA RACHA Y CON SU MISMA FORMA. Antes era una tarjeta crema y
   grande en mitad de un perfil oscuro: cantaba como una pieza pegada de otra
   app. Ahora es una tarjeta más de la columna —mismo fondo translúcido, mismo
   radio, misma altura de fila que la racha— y el arco baja a 108 px, del
   tamaño de la llama que tiene justo encima. Un medidor del día no compite
   con la racha: la acompaña.

   POR QUÉ UN SEMICÍRCULO Y NO UNA BARRA. Un arco abierto tiene principio y
   final visibles a la vez, y el hueco de abajo deja sitio para la cifra sin
   robarle protagonismo. Una barra recta cuenta lo mismo, pero no invita a
   mirar el centro, que es donde está el dato. Al encogerlo la razón se
   mantiene: el hueco sigue siendo el sitio natural del número.

   UN SOLO VALOR MUEVE TODO. Se anima `leido` —los minutos de verdad— y de ahí
   cuelgan las tres cosas: la fracción, que es el `pathLength` del arco y la
   posición del punto de cabeza por trigonometría, y el número, que se formatea
   en cada fotograma. Como salen del mismo sitio es IMPOSIBLE que se
   desincronicen; con tres animaciones paralelas, la cifra siempre termina
   antes o después que el trazo y se nota.

   LA SUBIDA ES LENTA A PROPÓSITO. 1,6 s con una curva que frena mucho al
   final: el arco tiene que parecer que ALCANZA la marca, no que la pinta.
   Con `prefers-reduced-motion` se coloca de golpe.

   EL DEGRADADO VA EN COORDENADAS DEL LIENZO (`userSpaceOnUse`), no en las de
   la caja del trazo. Si va en las de la caja, cada vez que el arco crece la
   caja cambia de tamaño y el degradado se reescala: los colores se moverían
   por debajo mientras sube, que es un efecto raro y muy difícil de diagnosticar.
   ========================================================================== */

/** Metas que se pueden elegir. Ni un deslizador ni un teclado: seis botones. */
const METAS = [5, 10, 15, 20, 30, 45];

const R = 104;
const CENTRO = { x: 130, y: 132 };
const ARCO = `M ${CENTRO.x - R} ${CENTRO.y} A ${R} ${R} 0 0 1 ${CENTRO.x + R} ${CENTRO.y}`;

/** mm:ss, que es como se lee un cronómetro. */
function reloj(minutos: number) {
  const total = Math.max(0, Math.round(minutos * 60));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

/** Para el total de la vida: horas y minutos, sin segundos, que ahí sobran. */
function largo(minutos: number) {
  const m = Math.round(minutos);
  const h = Math.floor(m / 60);
  if (h === 0) return `${m} min`;
  return `${h} h ${String(m % 60).padStart(2, "0")} min`;
}

export function MetaDiaria({
  minutos,
  meta,
  total,
  reducido,
  onMeta,
}: {
  /** Minutos leídos hoy. */
  minutos: number;
  /** Minutos que se ha marcado como objetivo. */
  meta: number;
  /** Minutos leídos desde siempre. */
  total: number;
  reducido: boolean;
  onMeta: (m: number) => void;
}) {
  const [abierto, setAbierto] = useState(false);

  const cumplida = minutos >= meta;

  // El valor del que cuelga todo lo demás son los MINUTOS, no la fracción: si
  // se anima la fracción, al pasarse de la meta el contador se queda clavado
  // en el objetivo y enseña 5:00 cuando llevas 9:24. Se anima lo real y la
  // fracción se deduce, topada en 1 para que el arco no dé la vuelta.
  const leido = useMotionValue(0);
  const fraccion = useTransform(leido, (m) => Math.min(m / meta, 1));

  const angulo = useTransform(fraccion, (f) => Math.PI * (1 + f));
  const puntoX = useTransform(angulo, (a) => CENTRO.x + Math.cos(a) * R);
  const puntoY = useTransform(angulo, (a) => CENTRO.y + Math.sin(a) * R);
  const texto = useTransform(leido, (m) => reloj(m));

  useEffect(() => {
    if (reducido) {
      leido.set(minutos);
      return;
    }
    // Sube despacio y frena mucho al final: tiene que parecer que alcanza la
    // marca, no que la dibuja.
    const control = animate(leido, minutos, {
      duration: 1.6,
      delay: 0.25,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => control.stop();
  }, [minutos, reducido, leido]);

  return (
    <section className="meta">
      <div className="meta-fila">
        <div className="meta-arco">
          <svg viewBox="0 0 260 168" className="meta-svg" aria-hidden>
            <defs>
              <linearGradient
                id="meta-degradado"
                gradientUnits="userSpaceOnUse"
                x1={CENTRO.x - R}
                y1={CENTRO.y}
                x2={CENTRO.x + R}
                y2={CENTRO.y - R * 0.6}
              >
                <stop offset="0%" stopColor="var(--sage)" />
                <stop offset="45%" stopColor="var(--ochre)" />
                <stop offset="100%" stopColor="var(--clay)" />
              </linearGradient>
              {/* El halo del trazo: el mismo arco, borroso y por debajo */}
              <filter id="meta-halo" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="7" />
              </filter>
            </defs>

            {/* El carril va en blanco translúcido, no en `--paper-edge`: sobre
                el fondo oscuro del perfil ese color es casi blanco y el arco
                parecería lleno del todo antes de empezar. */}
            <path
              d={ARCO}
              fill="none"
              stroke="rgba(242, 236, 225, 0.14)"
              strokeWidth="17"
              strokeLinecap="round"
            />

            <motion.path
              d={ARCO}
              fill="none"
              stroke="url(#meta-degradado)"
              strokeWidth="17"
              strokeLinecap="round"
              filter="url(#meta-halo)"
              opacity="0.5"
              style={{ pathLength: fraccion }}
            />
            <motion.path
              d={ARCO}
              fill="none"
              stroke="url(#meta-degradado)"
              strokeWidth="17"
              strokeLinecap="round"
              style={{ pathLength: fraccion }}
            />

            {/* La cabeza del trazo: dice dónde estás sin tener que leer nada */}
            <motion.circle r="11" fill="var(--night)" style={{ cx: puntoX, cy: puntoY }} />
            <motion.circle
              r="6.5"
              fill={cumplida ? "var(--clay)" : "var(--ochre)"}
              style={{ cx: puntoX, cy: puntoY }}
            />
          </svg>

          <div className="meta-centro">
            <motion.span className="meta-numero">{texto}</motion.span>
          </div>

          {/* Cuando se cumple, el arco entero da un latido de luz */}
          <AnimatePresence>
            {cumplida && !reducido && (
              <motion.span
                className="meta-brillo"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: [0, 0.55, 0], scale: [0.85, 1.12, 1.2] }}
                transition={{ duration: 1.6, delay: 1.2, ease: "easeOut" }}
              />
            )}
          </AnimatePresence>
        </div>

        {/* La columna de la derecha repite el reparto de la tarjeta de racha:
            título arriba, dato debajo. Así las dos se leen igual. */}
        <div className="meta-datos">
          <div className="meta-alto">
            <h2>Meta de hoy</h2>
            <motion.button
              className="meta-boton"
              onClick={() => setAbierto((v) => !v)}
              whileTap={{ scale: 0.96 }}
              transition={springPop}
              aria-expanded={abierto}
            >
              {abierto ? "Listo" : "Ajustar"}
            </motion.button>
          </div>

          <p className="meta-pie">
            {cumplida ? (
              <>
                Cumplida · <strong>{meta} min</strong>
              </>
            ) : (
              <>
                de tu meta de <strong>{meta} min</strong>
              </>
            )}
          </p>

          <Total minutos={total} reducido={reducido} />
        </div>
      </div>

      {/* El selector no es un diálogo: se despliega aquí mismo, debajo del
          arco, para que se vea cómo cambia el arco al elegir. */}
      <AnimatePresence initial={false}>
        {abierto && (
          <motion.div
            className="meta-opciones"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={reducido ? { duration: 0.01 } : springSoft}
          >
            <div className="meta-opciones-fila">
              {METAS.map((m) => (
                <motion.button
                  key={m}
                  className="meta-opcion"
                  data-activa={m === meta}
                  onClick={() => onMeta(m)}
                  whileTap={{ scale: 0.94 }}
                  transition={spring}
                >
                  {m}
                  <span>min</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/**
 * El total de siempre. Sube desde cero al entrar como el marcador de una
 * gasolinera: es la cifra que premia haber vuelto muchos días, y verla
 * quieta no premia nada.
 */
function Total({ minutos, reducido }: { minutos: number; reducido: boolean }) {
  const valor = useMotionValue(0);
  const texto = useTransform(valor, (v) => largo(v));

  useEffect(() => {
    if (reducido) {
      valor.set(minutos);
      return;
    }
    const control = animate(valor, minutos, { duration: 1.9, delay: 0.5, ease: [0.12, 0.86, 0.14, 1] });
    return () => control.stop();
  }, [minutos, reducido, valor]);

  return (
    <motion.div
      className="meta-total"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reducido ? { duration: 0.01 } : { ...springSoft, delay: 0.42 }}
    >
      <span className="meta-total-rotulo">En total</span>
      <motion.span className="meta-total-cifra">{texto}</motion.span>
    </motion.div>
  );
}
