import { useEffect, useState } from "react";
import { AnimatePresence, animate, motion, useMotionValue, useTransform } from "framer-motion";
import { spring, springPop, springSoft } from "./motion";

/* ==========================================================================
   LA META DEL DÍA

   Una barra plana con el degradado del fuego, el tiempo escrito encima y el
   botón de ajustar. Nada más.

   ANTES ERA UN ARCO, un semicírculo de 108 puntos con su degradado, su halo
   borroso, la cabeza del trazo corriendo por el filo y un latido de luz al
   cumplirse. Estaba bien hecho y Pablo lo devolvió el 26 de agosto: «en vez
   de eso haz una barra simple y plana donde se vea el tiempo, donde se pueda
   ajustar, pero solo pones eso y ya».

   Y el arco tenía un problema que no era de gusto. La ficha de la racha, que
   está justo encima, ya lleva un dibujo grande a la izquierda y su texto a la
   derecha. El arco repetía ese mismo reparto con otro dibujo grande, así que
   las dos fichas contaban lo mismo dos veces seguidas y la segunda pesaba lo
   que la primera sin decir más. Una barra ocupa doce puntos de alto y dice
   exactamente lo mismo.

   EL DEGRADADO ES EL DE LA LLAMA, tumbado: rojo donde empieza, naranja en
   medio y oro donde acaba. Los mismos tres tonos, así que el progreso del día
   y el fuego de la racha se leen como la misma cosa.

   Y VA ANCLADO AL CARRIL, no al relleno. Si el degradado se pinta sobre la
   parte llena, al 10 % se ve la rampa entera de rojo a oro apretada en un
   dedo, y el color de un punto cambia según cuánto lleves leído. Aquí el
   carril entero lleva el degradado y lo que se mueve es una tapa opaca que
   descubre por la izquierda: cada minuto tiene siempre su color.
   ========================================================================== */

/** Metas que se pueden elegir. Ni un deslizador ni un teclado: seis botones. */
const METAS = [5, 10, 15, 20, 30, 45];

/** mm:ss, que es como se lee un cronómetro. */
function reloj(minutos: number) {
  const total = Math.max(0, Math.round(minutos * 60));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function MetaDiaria({
  minutos,
  meta,
  reducido,
  onMeta,
}: {
  /** Minutos leídos hoy. */
  minutos: number;
  /** Minutos que se ha marcado como objetivo. */
  meta: number;
  reducido: boolean;
  onMeta: (m: number) => void;
}) {
  const [abierto, setAbierto] = useState(false);
  const cumplida = minutos >= meta;

  /* Se anima lo real —los minutos— y la fracción se deduce, topada en 1. Si se
     animara la fracción, al pasarse de la meta el contador se quedaría clavado
     en el objetivo y enseñaría 5:00 llevando 9:24. */
  const leido = useMotionValue(0);
  const fraccion = useTransform(leido, (m) => Math.min(m / meta, 1));
  const tapa = useTransform(fraccion, (f) => `${(1 - f) * 100}%`);
  const texto = useTransform(leido, (m) => reloj(m));

  useEffect(() => {
    if (reducido) {
      leido.set(minutos);
      return;
    }
    const control = animate(leido, minutos, { duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] });
    return () => control.stop();
  }, [minutos, reducido, leido]);

  return (
    <section className="meta">
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

      <p className="meta-cifra">
        <motion.span className="meta-numero">{texto}</motion.span>
        <span className="meta-de">{cumplida ? `cumplida · ${meta} min` : `de ${meta} min`}</span>
      </p>

      <div className="meta-barra" data-cumplida={cumplida}>
        <motion.span className="meta-tapa" style={{ width: tapa }} />
      </div>

      {/* El selector no es un diálogo: se despliega aquí mismo, debajo de la
          barra, para que se vea cómo cambia la barra al elegir. */}
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
