import type { ReactElement } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Llama } from "./Racha";
import { MetaDiaria } from "./Meta";
import { GlyphClose, GlyphGuardar, GlyphHeart, GlyphTick } from "./glyphs";
import { spring, springPop, springSoft } from "./motion";

/* ==========================================================================
   El perfil.

   Aquí no hay contenido nuevo que leer: hay estado. Y el estado se ordena por
   lo que la gente viene a mirar, que no es lo mismo que lo que la app quiere
   enseñar. Primero la racha, que es lo único que se pierde si dejas de
   entrar. Después las cifras. Los ajustes, al final.

   Cada bloque entra escalonado con muelle, y el retraso se acumula recorriendo
   la pantalla de arriba abajo, así que el orden de entrada es el orden de
   lectura.
   ========================================================================== */

const PASO = 0.055;

/** Retrasos encadenados: cada bloque sabe cuántos van antes que él. */
function orden(i: number) {
  return 0.08 + i * PASO;
}

/**
 * La semana de la racha: siete columnas colocadas de forma que HOY sea el
 * último día cumplido. Así los días hechos quedan a la izquierda y los que
 * faltan a la derecha, que es como se lee una racha —lo conseguido detrás,
 * lo que queda por delante— sin necesidad de explicarlo.
 */
function semana(racha: number) {
  const dias = [];
  const cursor = new Date();
  cursor.setDate(cursor.getDate() - Math.max(racha - 1, 0));

  for (let i = 0; i < 7; i++) {
    dias.push({
      etiqueta: cursor
        .toLocaleDateString("es-ES", { weekday: "short" })
        .slice(0, 2)
        .replace(/^./, (c) => c.toUpperCase()),
      hecho: i < racha,
      clave: cursor.toISOString().slice(0, 10),
    });
    cursor.setDate(cursor.getDate() + 1);
  }
  return dias;
}

type Props = {
  nombre: string;
  racha: number;
  leidas: number;
  /** Minutos leídos hoy, su meta y el total de siempre. */
  minutosHoy: number;
  meta: number;
  minutosTotales: number;
  onMeta: (m: number) => void;
  favoritas: number;
  guardadas: number;
  onCerrar: () => void;
  onAjustes: () => void;
};

export function Perfil({
  nombre,
  racha,
  leidas,
  minutosHoy,
  meta,
  minutosTotales,
  onMeta,
  favoritas,
  guardadas,
  onCerrar,
  onAjustes,
}: Props) {
  const reducido = !!useReducedMotion();
  const dias = semana(racha);
  const inicial = (nombre.trim()[0] ?? "T").toUpperCase();

  return (
    <motion.div
      className="perfil"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0, transition: spring }}
      exit={{ opacity: 0, y: 18, transition: { duration: 0.2 } }}
    >
      <div className="perfil-head">
        <button className="icon-btn" onClick={onCerrar} aria-label="Cerrar perfil">
          <GlyphClose />
        </button>
        <button className="icon-btn" onClick={onAjustes} aria-label="Ajustes">
          <GlyphRueda />
        </button>
      </div>

      <div className="perfil-scroll">
        {/* Nombre y avatar: el nombre se pidió en la introducción */}
        <motion.div
          className="perfil-quien"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: orden(0) }}
        >
          <motion.span
            className="perfil-avatar"
            initial={{ scale: 0.5, rotate: -14 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ ...springPop, delay: orden(0) + 0.06 }}
          >
            {inicial}
          </motion.span>
          <div>
            <h1>{nombre}</h1>
            <p>{leidas} tarjetas leídas</p>
          </div>
        </motion.div>

        {/* Desbloquear: el único bloque de color saturado de la pantalla */}
        <motion.button
          className="perfil-desbloquea"
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...springSoft, delay: orden(1) }}
        >
          <div>
            <h2>Desbloquea todo</h2>
            <p>Todos los libros, todos los shorts y sin anuncios.</p>
          </div>
          <IluCohete reducido={reducido} />
        </motion.button>

        {/* La racha: lo primero que se mira y lo único que se pierde */}
        <motion.section
          className="perfil-racha"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: orden(2) }}
        >
          <div className="perfil-racha-llama">
            <Llama tamano={62} reducido={reducido} />
            <motion.span
              className="perfil-racha-numero"
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ ...springPop, delay: orden(2) + 0.14 }}
            >
              {racha}
            </motion.span>
          </div>

          <div className="perfil-racha-datos">
            <h2>Tu racha</h2>
            <div className="perfil-dias">
              {dias.map((d, k) => (
                <div key={d.clave} className="perfil-dia">
                  <span className="perfil-dia-nombre" data-hecho={d.hecho}>
                    {d.etiqueta}
                  </span>
                  <motion.span
                    className="perfil-dia-bola"
                    data-hecho={d.hecho}
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ ...springPop, delay: orden(2) + 0.2 + k * 0.045 }}
                  >
                    {d.hecho && <GlyphTick />}
                  </motion.span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* La meta del día, pegada a la racha: las dos cuentan el hoy, una en
            días y otra en minutos, así que se leen juntas y con la misma forma
            de tarjeta. Antes iba arriba del todo y partía la pantalla en dos. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: orden(3) }}
        >
          <MetaDiaria
            minutos={minutosHoy}
            meta={meta}
            total={minutosTotales}
            reducido={reducido}
            onMeta={onMeta}
          />
        </motion.div>

        {/* Las tres cifras */}
        <div className="perfil-cifras">
          {[
            { n: leidas, rotulo: "Leídas", Icono: GlyphLineas },
            { n: favoritas, rotulo: "Favoritas", Icono: () => <GlyphHeart on /> },
            { n: guardadas, rotulo: "Guardadas", Icono: GlyphGuardar },
          ].map((c, k) => (
            <motion.div
              key={c.rotulo}
              className="perfil-cifra"
              initial={{ opacity: 0, y: 18, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ ...springPop, delay: orden(4) + k * 0.06 }}
            >
              <div className="perfil-cifra-alto">
                <span className="perfil-cifra-n">{c.n}</span>
                <span className="perfil-cifra-icono">
                  <c.Icono />
                </span>
              </div>
              <span className="perfil-cifra-rotulo">{c.rotulo}</span>
            </motion.div>
          ))}
        </div>

        {/* Nivel: la fila que invita a hacer algo, no solo a mirar */}
        <motion.button
          className="perfil-fila"
          whileTap={{ scale: 0.985 }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: orden(5) }}
        >
          <span className="perfil-fila-ilu">
            <IluBirrete reducido={reducido} />
          </span>
          <div className="perfil-fila-texto">
            <p className="perfil-fila-titulo">Haz una prueba de nivel</p>
            <p className="perfil-fila-pie">Cinco minutos para saber por dónde empezar</p>
          </div>
          <span className="perfil-fila-flecha">›</span>
        </motion.button>

        <Rejilla
          titulo="Personaliza la app"
          retraso={orden(6)}
          reducido={reducido}
          casillas={[
            { nombre: "Temas que sigues", Ilu: IluTemas },
            { nombre: "Objetivo diario", Ilu: IluObjetivo },
            { nombre: "Recordatorios", Ilu: IluCampana },
            { nombre: "Tamaño del texto", Ilu: IluTexto },
            { nombre: "Apariencia", Ilu: IluApariencia },
            { nombre: "Sin conexión", Ilu: IluDescarga },
          ]}
        />

        <motion.section
          className="perfil-bloque"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: orden(9) }}
        >
          <h2 className="perfil-titulo-bloque">Mi contenido</h2>
          <div className="perfil-contenido">
            {[
              { nombre: "Favoritas", Icono: () => <GlyphHeart on={false} /> },
              { nombre: "Guardadas", Icono: GlyphGuardar },
              { nombre: "Historial", Icono: GlyphReloj },
              { nombre: "Mis apuntes", Icono: GlyphNota },
            ].map((c, k) => (
              <motion.button
                key={c.nombre}
                className="perfil-contenido-casilla"
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springSoft, delay: orden(9) + 0.05 + k * 0.05 }}
              >
                {c.nombre}
                <span className="perfil-contenido-icono">
                  <c.Icono />
                </span>
              </motion.button>
            ))}
          </div>
        </motion.section>

        <motion.p
          className="perfil-version"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...springSoft, delay: orden(11) }}
        >
          Prototipo · versión de muestra
        </motion.p>
      </div>
    </motion.div>
  );
}

/* --------------------------------------------------------------------------
   La rejilla de ajustes
   -------------------------------------------------------------------------- */

type Casilla = { nombre: string; Ilu: (p: { reducido: boolean }) => ReactElement };

function Rejilla({
  titulo,
  casillas,
  retraso,
  reducido,
}: {
  titulo: string;
  casillas: Casilla[];
  retraso: number;
  reducido: boolean;
}) {
  return (
    <motion.section
      className="perfil-bloque"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...springSoft, delay: retraso }}
    >
      <h2 className="perfil-titulo-bloque">{titulo}</h2>
      <div className="perfil-rejilla">
        {casillas.map((c, k) => (
          <motion.button
            key={c.nombre}
            className="perfil-casilla"
            whileTap={{ scale: 0.965 }}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ ...springPop, delay: retraso + 0.06 + k * 0.05 }}
          >
            <span className="perfil-casilla-ilu">
              <c.Ilu reducido={reducido} />
            </span>
            <span className="perfil-casilla-nombre">{c.nombre}</span>
          </motion.button>
        ))}
      </div>
    </motion.section>
  );
}

/* --------------------------------------------------------------------------
   Las miniaturas.

   Cada una es una escena diminuta, no un pictograma: tiene un fondo de color,
   una pieza al frente y un detalle que se mueve solo. A 96 px hace falta muy
   poco para que se lea como un dibujo en vez de como un icono.
   -------------------------------------------------------------------------- */

const flota = (reducido: boolean, amplitud = 2.4, duracion = 4.3, desfase = 0) =>
  reducido
    ? {}
    : {
        animate: { y: [0, -amplitud, 0] },
        transition: { duration: duracion, repeat: Infinity, ease: "easeInOut" as const, delay: desfase },
      };

function IluTemas({ reducido }: { reducido: boolean }) {
  return (
    <svg viewBox="0 0 72 60" aria-hidden>
      <rect x="8" y="10" width="38" height="42" rx="6" fill="var(--plum)" opacity="0.5" transform="rotate(-8 27 31)" />
      <motion.g {...flota(reducido, 2.6, 4.1)}>
        <rect x="20" y="8" width="38" height="42" rx="6" fill="var(--paper)" />
        <circle cx="39" cy="24" r="8" fill="var(--ochre)" />
        <rect x="27" y="37" width="24" height="3.4" rx="1.7" fill="var(--ink)" opacity="0.24" />
        <rect x="27" y="43" width="15" height="3.4" rx="1.7" fill="var(--ink)" opacity="0.16" />
      </motion.g>
      <motion.circle
        cx="55" cy="45" r="8" fill="var(--sage)"
        {...flota(reducido, 2, 3.3, 0.5)}
      />
      <path d="M51.6 45 L54 47.4 L58.4 42.6" fill="none" stroke="var(--paper)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IluObjetivo({ reducido }: { reducido: boolean }) {
  return (
    <svg viewBox="0 0 72 60" aria-hidden>
      <circle cx="36" cy="30" r="22" fill="var(--clay)" opacity="0.24" />
      <circle cx="36" cy="30" r="14" fill="var(--clay)" opacity="0.4" />
      <circle cx="36" cy="30" r="6.5" fill="var(--clay)" />
      {/* La aguja se clava: el objetivo se cumple */}
      <motion.g
        initial={reducido ? false : { x: 16, y: -16, rotate: 16 }}
        animate={{ x: 0, y: 0, rotate: 0 }}
        transition={reducido ? { duration: 0.01 } : { ...springPop, delay: 0.5 }}
      >
        <path d="M36 30 L57 12" stroke="var(--ink)" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M52 10 L58 11 L57 17 Z" fill="var(--ochre)" />
      </motion.g>
    </svg>
  );
}

function IluCampana({ reducido }: { reducido: boolean }) {
  return (
    <svg viewBox="0 0 72 60" aria-hidden>
      <circle cx="36" cy="31" r="21" fill="var(--ochre)" opacity="0.26" />
      <motion.g
        style={{ originX: "36px", originY: "13px" }}
        animate={reducido ? {} : { rotate: [0, -11, 9, -5, 0] }}
        transition={{ duration: 1.1, repeat: Infinity, repeatDelay: 3.1, ease: "easeOut" }}
      >
        <path
          d="M36 13 A11 11 0 0 1 47 24 V33 L50 38 H22 L25 33 V24 A11 11 0 0 1 36 13 Z"
          fill="var(--ochre)"
        />
        <path d="M31.5 38 A4.5 4.5 0 0 0 40.5 38" fill="var(--ink)" opacity="0.6" />
        <circle cx="36" cy="12" r="2.6" fill="var(--ink)" opacity="0.6" />
      </motion.g>
    </svg>
  );
}

function IluTexto({ reducido }: { reducido: boolean }) {
  return (
    <svg viewBox="0 0 72 60" aria-hidden>
      <rect x="14" y="9" width="44" height="42" rx="7" fill="var(--slate)" opacity="0.28" />
      <text x="24" y="40" fontSize="26" fontWeight="750" fill="var(--slate)" fontFamily="inherit">A</text>
      <motion.text
        x="41" y="40" fontSize="15" fontWeight="750" fill="var(--slate)" fontFamily="inherit"
        animate={reducido ? {} : { fontSize: [15, 21, 15] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
      >
        A
      </motion.text>
    </svg>
  );
}

function IluApariencia({ reducido }: { reducido: boolean }) {
  return (
    <svg viewBox="0 0 72 60" aria-hidden>
      <circle cx="36" cy="30" r="19" fill="var(--ochre)" />
      {/* La luna barre el disco: claro y oscuro en una sola figura */}
      <motion.circle
        cx="48" cy="24" r="17" fill="var(--night)"
        animate={reducido ? {} : { cx: [48, 44, 48], cy: [24, 21, 24] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <circle cx="36" cy="30" r="19" fill="none" stroke="var(--ochre)" strokeWidth="2.4" opacity="0.5" />
    </svg>
  );
}

function IluDescarga({ reducido }: { reducido: boolean }) {
  return (
    <svg viewBox="0 0 72 60" aria-hidden>
      <rect x="16" y="34" width="40" height="16" rx="6" fill="var(--sage)" opacity="0.34" />
      <motion.g
        animate={reducido ? {} : { y: [0, 6, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M36 10 V30" stroke="var(--sage)" strokeWidth="4" strokeLinecap="round" />
        <path d="M28 24 L36 32 L44 24" fill="none" stroke="var(--sage)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>
      <rect x="26" y="42" width="20" height="3" rx="1.5" fill="var(--sage)" />
    </svg>
  );
}

function IluCohete({ reducido }: { reducido: boolean }) {
  return (
    <svg viewBox="0 0 96 96" className="perfil-cohete" aria-hidden>
      <motion.g
        animate={reducido ? {} : { y: [0, -5, 0], rotate: [-4, 2, -4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "48px", originY: "48px" }}
      >
        <path d="M48 16 C60 28 62 44 58 58 H38 C34 44 36 28 48 16 Z" fill="var(--paper)" />
        <circle cx="48" cy="36" r="7" fill="var(--plum-deep, var(--plum))" />
        <path d="M38 50 L28 62 L38 60 Z" fill="var(--paper)" opacity="0.78" />
        <path d="M58 50 L68 62 L58 60 Z" fill="var(--paper)" opacity="0.78" />
        <motion.path
          d="M42 58 L48 76 L54 58 Z"
          fill="var(--ochre)"
          animate={reducido ? {} : { scaleY: [1, 0.64, 1], opacity: [1, 0.72, 1] }}
          transition={{ duration: 0.62, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: "48px", originY: "58px" }}
        />
      </motion.g>
    </svg>
  );
}

function IluBirrete({ reducido }: { reducido: boolean }) {
  return (
    <svg viewBox="0 0 48 40" aria-hidden>
      <motion.g {...flota(reducido, 2, 3.9)}>
        <path d="M24 9 L42 17 L24 25 L6 17 Z" fill="var(--sage)" />
        <path d="M13 20 V28 C13 31 34 31 34 28 V20" fill="none" stroke="var(--sage)" strokeWidth="3" strokeLinecap="round" />
        <path d="M42 17 V27" stroke="var(--sage)" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="42" cy="29" r="2.6" fill="var(--ochre)" />
      </motion.g>
    </svg>
  );
}

/* --- Iconos sueltos --- */

const trazoFino = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/**
 * La rueda se construye repitiendo un diente cada 45°, en vez de escribir un
 * contorno a mano. A 18 px un contorno dibujado a ojo se convierte en un
 * borrón; ocho dientes idénticos y colocados por trigonometría, no.
 */
function GlyphRueda() {
  const dientes = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      {dientes.map((i) => (
        <rect
          key={i}
          x="10.7"
          y="1.6"
          width="2.6"
          height="4.6"
          rx="1.1"
          fill="currentColor"
          transform={`rotate(${i * 45} 12 12)`}
        />
      ))}
      <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
    </svg>
  );
}

function GlyphLineas() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" aria-hidden>
      <rect x="2.6" y="3.4" width="11.8" height="2.6" rx="1.3" fill="currentColor" />
      <rect x="2.6" y="7.4" width="11.8" height="2.6" rx="1.3" fill="currentColor" opacity="0.7" />
      <rect x="2.6" y="11.4" width="7.6" height="2.6" rx="1.3" fill="currentColor" opacity="0.45" />
    </svg>
  );
}

function GlyphReloj() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" aria-hidden>
      <circle cx="8.5" cy="8.5" r="6.4" {...trazoFino} />
      <path d="M8.5 4.9 V8.7 L11 10.4" {...trazoFino} />
    </svg>
  );
}

function GlyphNota() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" aria-hidden>
      <path d="M3.4 3.6 H10 L13.6 7.2 V13.4 H3.4 Z" {...trazoFino} />
      <path d="M9.8 3.6 V7.4 H13.6" {...trazoFino} />
    </svg>
  );
}
