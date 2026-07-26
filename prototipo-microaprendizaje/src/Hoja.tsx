import { useEffect, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { spring, springTight } from "./motion";

/* ==========================================================================
   La hoja inferior y los controles que viven dentro.

   Un ajuste con más de dos estados no cabe en una fila: necesita una
   superficie. Se abre desde abajo porque el pulgar está abajo, se cierra
   arrastrando hacia abajo porque es el gesto que ya conoce cualquiera, y
   deja ver la lista detrás en penumbra para no perder el sitio.

   Todos los controles de aquí comparten dos reglas: el estado actual se ve
   sin tener que tocar nada, y el cambio se aplica en el momento — no hay
   botón de guardar. Un ajuste con confirmación es un formulario disfrazado.
   ========================================================================== */

export function Hoja({
  abierta,
  titulo,
  pie,
  onCerrar,
  children,
}: {
  abierta: boolean;
  titulo: string;
  /** Explicación corta bajo el título. Solo cuando el nombre no basta. */
  pie?: string;
  onCerrar: () => void;
  children: ReactNode;
}) {
  const reducido = useReducedMotion();

  // Escape cierra: en escritorio es el reflejo, y cuesta tres líneas.
  useEffect(() => {
    if (!abierta) return;
    const on = (e: KeyboardEvent) => e.key === "Escape" && onCerrar();
    window.addEventListener("keydown", on);
    return () => window.removeEventListener("keydown", on);
  }, [abierta, onCerrar]);

  return (
    <AnimatePresence>
      {abierta && (
        <>
          <motion.button
            className="hoja-velo"
            aria-label="Cerrar"
            onClick={onCerrar}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            className="hoja"
            role="dialog"
            aria-modal
            aria-label={titulo}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%", transition: { duration: 0.2 } }}
            transition={reducido ? { duration: 0.2 } : spring}
            drag={reducido ? false : "y"}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.6 }}
            /* Cierra por velocidad o por distancia: un arrastre corto y
               rápido cuenta igual que uno lento y largo. */
            onDragEnd={(_, info) => {
              if (info.offset.y > 120 || info.velocity.y > 620) onCerrar();
            }}
          >
            <span className="hoja-asa" aria-hidden />
            <header className="hoja-cabecera">
              <h2>{titulo}</h2>
              {pie && <p>{pie}</p>}
            </header>
            <div className="hoja-cuerpo">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* --------------------------------------------------------------------------
   Lista de opciones excluyentes.

   La marca de selección va a la DERECHA y no a la izquierda: así la columna
   de texto arranca siempre en el mismo sitio y la lista se lee como una
   lista, no como un formulario.
   -------------------------------------------------------------------------- */

export function Opciones<T extends string>({
  valor,
  opciones,
  onElegir,
}: {
  valor: T;
  opciones: { id: T; nombre: string; pie?: string }[];
  onElegir: (v: T) => void;
}) {
  return (
    <div className="hoja-lista">
      {opciones.map((o) => (
        <button
          key={o.id}
          className="hoja-opcion"
          data-activa={o.id === valor}
          onClick={() => onElegir(o.id)}
        >
          <span className="hoja-opcion-texto">
            <span className="hoja-opcion-nombre">{o.nombre}</span>
            {o.pie && <span className="hoja-opcion-pie">{o.pie}</span>}
          </span>
          {o.id === valor && (
            <motion.span
              className="hoja-tick"
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={springTight}
              aria-hidden
            >
              <svg width="15" height="15" viewBox="0 0 16 16">
                <path
                  d="M3 8.4 6.4 11.8 13 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.span>
          )}
        </button>
      ))}
    </div>
  );
}

/* --------------------------------------------------------------------------
   Chips de selección múltiple. Para temas, que son muchos y cortos.
   -------------------------------------------------------------------------- */

export function Chips({
  activos,
  opciones,
  color,
  onAlternar,
}: {
  activos: string[];
  opciones: string[];
  /** Color de acento por opción, para que la parrilla se lea por bloques. */
  color?: (id: string) => string;
  onAlternar: (id: string) => void;
}) {
  return (
    <div className="hoja-chips">
      {opciones.map((o) => {
        const on = activos.includes(o);
        return (
          <motion.button
            key={o}
            className="hoja-chip"
            data-on={on}
            style={on && color ? { background: color(o), borderColor: color(o) } : undefined}
            onClick={() => onAlternar(o)}
            whileTap={{ scale: 0.94 }}
            transition={springTight}
          >
            {o}
          </motion.button>
        );
      })}
    </div>
  );
}

/* --------------------------------------------------------------------------
   Segmentado. Pocas opciones, todas visibles, con la pastilla animada por
   `layoutId` para que se deslice de una a otra en vez de parpadear.
   -------------------------------------------------------------------------- */

export function Segmentado<T extends string | number>({
  valor,
  opciones,
  onElegir,
  id,
}: {
  valor: T;
  opciones: { id: T; nombre: string }[];
  onElegir: (v: T) => void;
  /** Identificador único: dos segmentados en pantalla no pueden compartirlo. */
  id: string;
}) {
  return (
    <div className="segmentado">
      {opciones.map((o) => (
        <button
          key={String(o.id)}
          className="segmentado-opcion"
          data-on={o.id === valor}
          onClick={() => onElegir(o.id)}
        >
          {o.id === valor && (
            <motion.span className="segmentado-pastilla" layoutId={id} transition={springTight} />
          )}
          <span>{o.nombre}</span>
        </button>
      ))}
    </div>
  );
}

/** Interruptor con etiqueta, para una hoja. El de la fila es más pequeño. */
export function Conmutador({
  nombre,
  pie,
  on,
  onCambiar,
}: {
  nombre: string;
  pie?: string;
  on: boolean;
  onCambiar: (v: boolean) => void;
}) {
  return (
    <button className="hoja-conmutador" onClick={() => onCambiar(!on)}>
      <span className="hoja-opcion-texto">
        <span className="hoja-opcion-nombre">{nombre}</span>
        {pie && <span className="hoja-opcion-pie">{pie}</span>}
      </span>
      <span className="interruptor" data-on={on}>
        <motion.span className="interruptor-pomo" layout transition={springTight} />
      </span>
    </button>
  );
}
