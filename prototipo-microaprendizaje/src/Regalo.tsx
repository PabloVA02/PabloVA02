import { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { GlyphClose } from "./glyphs";
import { spring, springPop, springSoft } from "./motion";

/* ==========================================================================
   El regalo.

   Dos pantallas y UN objeto. El aviso enseña la caja cerrada; la oferta la
   enseña abierta. Entre las dos no se destruye nada: es la misma caja, que
   cambia de sitio y de estado. Esa continuidad de motivo es lo que hace que
   el segundo paso se sienta consecuencia del primero y no otra pantalla más.

   La tapa NO se desvanece: sale despedida, gira y se sale de cuadro. Un
   elemento que se va con física se lee como abierto; uno que baja la opacidad
   se lee como un fallo de carga.

   Las estrellas salen del CENTRO de la caja hacia fuera, escalonadas 45 ms, y
   se quedan flotando a periodos distintos. Salir todas a la vez del mismo
   punto y quedarse quietas es lo que delata una animación barata.

   Los precios no están escritos a mano: el porcentaje se calcula. Si mañana
   cambia la oferta, el titular cambia solo y no puede mentir.
   ========================================================================== */

const PRECIO_NORMAL = 23.99;
const PRECIO_OFERTA = 14.99;

const DESCUENTO = Math.round((1 - PRECIO_OFERTA / PRECIO_NORMAL) * 100);
const euros = (n: number) => n.toFixed(2).replace(".", ",") + " €";
const AL_MES = euros(PRECIO_OFERTA / 12);

/* --------------------------------------------------------------------------
   La caja
   -------------------------------------------------------------------------- */

/**
 * Isométrica de verdad: la tapa y el cuerpo comparten los mismos puntos de
 * fuga, así que al levantarse la tapa el volumen sigue cuadrando. Dibujarla
 * de frente y «sugerir» la profundidad con una sombra es lo que hace que
 * estas cajas parezcan pegatinas.
 */
function Caja({
  abierta,
  reducido,
  tamano = 190,
}: {
  abierta: boolean;
  reducido: boolean;
  tamano?: number;
}) {
  return (
    <svg viewBox="0 0 200 200" width={tamano} height={tamano} aria-hidden>
      {/* Cuerpo */}
      <g>
        <path d="M100 96 L172 62 L172 138 L100 172 Z" fill="var(--sage)" />
        <path d="M100 96 L28 62 L28 138 L100 172 Z" fill="var(--sage-oscuro, #55624a)" />
        {/* La cinta baja por las dos caras y se dobla en la arista */}
        <path d="M118 87 L118 163 L136 154 L136 78 Z" fill="var(--paper)" opacity="0.55" />
        <path d="M64 78 L64 154 L82 163 L82 87 Z" fill="var(--paper)" opacity="0.32" />
        {/* Boca oscura: sin esto la caja abierta parece maciza */}
        <motion.path
          d="M100 96 L172 62 L100 28 L28 62 Z"
          fill="#2f3a26"
          initial={false}
          animate={{ opacity: abierta ? 1 : 0 }}
          transition={springSoft}
        />
      </g>

      {/* Tapa: sale despedida y gira */}
      <motion.g
        initial={false}
        animate={
          abierta
            ? { y: reducido ? -46 : -74, rotate: -13, scale: 1.04 }
            : { y: 0, rotate: 0, scale: 1 }
        }
        transition={{ type: "spring", stiffness: 190, damping: 13, mass: 1 }}
        style={{ originX: "100px", originY: "60px" }}
      >
        <path d="M100 92 L180 54 L100 16 L20 54 Z" fill="var(--sage)" />
        <path d="M100 92 L180 54 L180 66 L100 104 Z" fill="var(--sage-oscuro, #55624a)" />
        <path d="M100 92 L20 54 L20 66 L100 104 Z" fill="var(--sage-oscuro, #55624a)" opacity="0.75" />
        {/* Lazo */}
        <g>
          <path d="M100 54 C82 40, 74 28, 86 22 C96 17, 100 34, 100 46" fill="var(--paper)" opacity="0.6" />
          <path d="M100 54 C118 40, 126 28, 114 22 C104 17, 100 34, 100 46" fill="var(--paper)" opacity="0.42" />
          <ellipse cx="100" cy="52" rx="9" ry="6" fill="var(--paper)" opacity="0.75" />
        </g>
      </motion.g>
    </svg>
  );
}

/** Las estrellas que salen disparadas. Solo aparecen con la caja abierta. */
function Chispas({ reducido }: { reducido: boolean }) {
  // Colocadas a mano: dos altas, dos medias y dos bajas, y ninguna simétrica
  // con otra. Un reparto regular alrededor del centro se lee como un reloj.
  const estrellas = [
    { x: -104, y: -58, r: 15, t: "var(--clay)", d: 0 },
    { x: 96, y: -70, r: 13, t: "var(--plum-light, #9d8499)", d: 0.045 },
    { x: -128, y: 16, r: 12, t: "var(--ochre)", d: 0.09 },
    { x: 124, y: 6, r: 14, t: "var(--ochre)", d: 0.135 },
    { x: -78, y: 74, r: 11, t: "var(--plum-light, #9d8499)", d: 0.18 },
    { x: 84, y: 82, r: 13, t: "var(--clay)", d: 0.225 },
  ];

  return (
    <>
      {estrellas.map((e, i) => (
        <motion.svg
          key={i}
          className="regalo-chispa"
          viewBox="0 0 24 24"
          width={e.r * 2}
          height={e.r * 2}
          aria-hidden
          initial={{ x: 0, y: 0, scale: 0, rotate: -60, opacity: 0 }}
          animate={{ x: e.x, y: e.y, scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 240,
            damping: 15,
            mass: 0.9,
            delay: 0.28 + e.d,
          }}
        >
          {/* Flotan a periodos distintos: nunca coinciden dos */}
          <motion.g
            animate={reducido ? {} : { y: [0, -3.2, 0], rotate: [0, i % 2 ? 7 : -7, 0] }}
            transition={{
              duration: 2.6 + i * 0.37,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.9 + e.d,
            }}
            style={{ originX: "12px", originY: "12px" }}
          >
            <path
              d="M12 1.6 14.9 8.4 22.2 9.1 16.7 14 18.3 21.2 12 17.4 5.7 21.2 7.3 14 1.8 9.1 9.1 8.4Z"
              fill={e.t}
              stroke="var(--ink)"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </motion.g>
        </motion.svg>
      ))}
    </>
  );
}

/* --------------------------------------------------------------------------
   1. El aviso, encima del inicio
   -------------------------------------------------------------------------- */

export function AvisoRegalo({
  reducido,
  onAbrir,
  onCerrar,
}: {
  reducido: boolean;
  onAbrir: () => void;
  onCerrar: () => void;
}) {
  return (
    <motion.div
      className="regalo-velo"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      onClick={onCerrar}
    >
      <motion.div
        className="regalo-aviso"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 36, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.18 } }}
        transition={{ ...springPop, delay: 0.05 }}
      >
        {/* Late despacio: está pidiendo que la abras */}
        <motion.div
          className="regalo-caja"
          animate={reducido ? {} : { y: [0, -7, 0], rotate: [-1.6, 1.6, -1.6] }}
          transition={{
            y: { duration: 2.7, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 4.1, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Caja abierta={false} reducido={reducido} tamano={168} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: 0.22 }}
        >
          Tenemos un regalo para ti
        </motion.h2>

        <motion.button
          className="regalo-boton"
          onClick={onAbrir}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springPop, delay: 0.3 }}
        >
          Abrir
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

/* --------------------------------------------------------------------------
   2. La oferta
   -------------------------------------------------------------------------- */

export function Oferta({
  reducido,
  onCerrar,
}: {
  reducido: boolean;
  onCerrar: () => void;
}) {
  // La caja llega cerrada y se abre sola un instante después: si llegara ya
  // abierta, el gesto de haber pulsado «Abrir» se perdería.
  const [abierta, setAbierta] = useState(false);
  useEffect(() => {
    const id = window.setTimeout(() => setAbierta(true), reducido ? 0 : 240);
    return () => window.clearTimeout(id);
  }, [reducido]);

  return (
    <motion.div
      className="oferta"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0, transition: spring }}
      exit={{ opacity: 0, y: 24, transition: { duration: 0.2 } }}
    >
      <div className="oferta-head">
        <motion.button
          className="icon-btn"
          onClick={onCerrar}
          aria-label="Cerrar"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...springPop, delay: 0.9 }}
        >
          <GlyphClose />
        </motion.button>
      </div>

      <div className="oferta-cuerpo">
        <motion.span
          className="oferta-pastilla"
          initial={{ opacity: 0, y: -14, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...springPop, delay: 0.08 }}
        >
          Oferta especial
        </motion.span>

        <Titular reducido={reducido} />

        <div className="oferta-escena">
          <motion.div
            className="regalo-caja"
            animate={
              reducido || !abierta ? {} : { y: [0, -5, 0] }
            }
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
          >
            <Caja abierta={abierta} reducido={reducido} tamano={196} />
          </motion.div>
          {abierta && <Chispas reducido={reducido} />}
        </div>

        <div className="oferta-precios">
          <motion.span
            className="oferta-antes"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...springSoft, delay: 0.62 }}
          >
            {euros(PRECIO_NORMAL)}
            {/* El tachado se DIBUJA: es el gesto de anular el precio viejo */}
            <motion.span
              className="oferta-tachon"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={reducido ? { duration: 0.01 } : { ...spring, delay: 0.82 }}
            />
          </motion.span>

          <motion.span
            className="oferta-ahora"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...springPop, delay: 0.94 }}
          >
            {euros(PRECIO_OFERTA)}
            <span className="oferta-periodo">/año</span>
          </motion.span>
        </div>

        <motion.p
          className="oferta-mes"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...springSoft, delay: 1.02 }}
        >
          Solo {AL_MES} al mes
        </motion.p>
      </div>

      <div className="oferta-pie">
        <motion.button
          className="primary-btn oferta-cta"
          onClick={onCerrar}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...springPop, delay: 1.08 }}
        >
          Conseguir la oferta
        </motion.button>

        <motion.p
          className="oferta-nota"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...springSoft, delay: 1.16 }}
        >
          Se cobra a través de la tienda · Cancela cuando quieras
        </motion.p>

        <motion.div
          className="pago-enlaces"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...springSoft, delay: 1.22 }}
        >
          <button onClick={onCerrar}>Restaurar</button>
          <button onClick={onCerrar}>Términos</button>
          <button onClick={onCerrar}>Privacidad</button>
        </motion.div>
      </div>
    </motion.div>
  );
}

/**
 * El titular. El número sube desde cero mientras la caja se abre: ver crecer
 * el descuento es parte del regalo. El «%» y la palabra no cuentan, entran
 * con muelle — animar todo a la vez emborrona lo único que importa.
 */
function Titular({ reducido }: { reducido: boolean }) {
  const valor = useMotionValue(0);
  const texto = useTransform(valor, (v) => String(Math.round(v)));

  useEffect(() => {
    if (reducido) {
      valor.set(DESCUENTO);
      return;
    }
    const control = animate(valor, DESCUENTO, { duration: 0.9, delay: 0.24, ease: "easeOut" });
    return () => control.stop();
  }, [valor, reducido]);

  return (
    <motion.h1
      className="oferta-titular"
      initial={{ opacity: 0, y: 16, scale: 0.86 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ ...springPop, delay: 0.16 }}
    >
      <motion.span className="oferta-numero">{texto}</motion.span>
      <span className="oferta-porciento">%</span>
      <span className="oferta-menos"> menos</span>
    </motion.h1>
  );
}
