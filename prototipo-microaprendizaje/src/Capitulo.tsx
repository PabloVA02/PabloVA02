import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { spring, springSoft, springTight } from "./motion";

/* ==========================================================================
   La entrada de capítulo.

   Entre el mapa del camino y la primera tarjeta faltaba una respiración. Se
   pulsaba una parada y aparecía texto de golpe, sin que nada dijera en qué
   capítulo acababas de entrar ni cuántos quedaban. El mapa lo sabe y la
   lección lo olvidaba.

   Esto es un telón corto: número, título y una regla que se dibuja sola. Dura
   menos de dos segundos, se puede saltar tocando, y al irse deja la tarjeta
   ya montada debajo —no hay un segundo tiempo de espera—.

   Tres decisiones que importan:

   - El título entra desde abajo con desenfoque y el número desde arriba: son
     dos direcciones opuestas y por eso se lee como una portada que se cierra
     sobre sí misma, no como dos líneas apareciendo.
   - La regla se dibuja de izquierda a derecha con el mismo muelle que la
     barra de progreso de la lección, para que el gesto de «esto avanza» sea
     el mismo en las dos pantallas.
   - Con `prefers-reduced-motion` no se anima nada y el telón dura un tercio:
     sigue informando de en qué capítulo estás, que es lo que hace falta, sin
     mover un solo píxel de más.
   ========================================================================== */

type Props = {
  numero: number;
  total: number;
  titulo: string;
  reducido: boolean;
  onFin: () => void;
};

/** Lo que dura el telón antes de irse solo. */
const DURACION = 1500;
const DURACION_REDUCIDA = 550;

export function EntradaCapitulo({ numero, total, titulo, reducido, onFin }: Props) {
  /* El aviso va por referencia y el temporizador se pone UNA vez. Si el efecto
     dependiera de `onFin` —que llega como función anónima y cambia de
     identidad en cada render— cualquier cosa que repintara la lección, un
     cambio de tarjeta incluido, reiniciaría la cuenta y el telón se quedaría
     puesto para siempre. Pasó, y se veía. */
  const avisar = useRef(onFin);
  avisar.current = onFin;

  useEffect(() => {
    const id = window.setTimeout(() => avisar.current(), reducido ? DURACION_REDUCIDA : DURACION);
    return () => window.clearTimeout(id);
  }, [reducido]);

  return (
    <motion.div
      className="entrada-capitulo"
      onClick={onFin}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.18 } }}
      /* Al salir sube un poco y se va: el telón se levanta, no se apaga. */
      exit={{
        opacity: 0,
        y: reducido ? 0 : -18,
        transition: { duration: reducido ? 0.16 : 0.34, ease: [0.4, 0, 0.2, 1] },
      }}
      role="status"
      aria-live="polite"
    >
      <motion.span
        className="entrada-numero"
        initial={reducido ? false : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0, transition: { ...spring, delay: 0.06 } }}
      >
        Capítulo {numero} de {total}
      </motion.span>

      <motion.h2
        className="entrada-titulo"
        initial={reducido ? false : { opacity: 0, y: 22, filter: "blur(6px)" }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { ...springSoft, delay: 0.1 },
        }}
      >
        {titulo}
      </motion.h2>

      <motion.div
        className="entrada-regla"
        initial={reducido ? false : { scaleX: 0 }}
        animate={{ scaleX: 1, transition: { ...springTight, delay: 0.22 } }}
      />
    </motion.div>
  );
}
