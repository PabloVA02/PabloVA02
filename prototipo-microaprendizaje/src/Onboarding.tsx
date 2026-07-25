import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LIBROS, Portada } from "./Biblioteca";
import { GlyphBack, GlyphTick } from "./glyphs";
import { PaseInvitado } from "./PaseInvitado";
import { spring, springPop, springSoft, springTight } from "./motion";

/* ==========================================================================
   Introducción.

   La técnica que sostiene todo esto se llama ENTRADA ESCALONADA (stagger)
   con FÍSICA DE MUELLE: los elementos no aparecen a la vez, sino uno detrás
   de otro con 60-80 ms de diferencia, y cada uno llega con su rebote en vez
   de con una curva de tiempo fija.

   Lo importante es que el escalonado no se aplica a la pantalla entera, sino
   a las PARTES del dibujo: primero entra el móvil, luego la mano que lo
   sostiene, luego el corazón, luego los destellos. Esa cadena es lo que hace
   que una ilustración quieta parezca que se monta sola delante de ti.
   ========================================================================== */

/** Retardo de cada parte dentro de una misma ilustración. */
const PARTE = 0.085;

/** Entra desde abajo con muelle. El índice marca su turno en la cadena. */
function parte(i: number, reducido: boolean) {
  return {
    initial: { opacity: 0, y: 22, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: reducido
      ? { duration: 0.01 }
      : { ...springPop, delay: 0.12 + i * PARTE },
  };
}

/** Igual, pero cayendo desde arriba: para lo que «aterriza». */
function cae(i: number, reducido: boolean) {
  return {
    initial: { opacity: 0, y: -26, rotate: -8 },
    animate: { opacity: 1, y: 0, rotate: 0 },
    transition: reducido
      ? { duration: 0.01 }
      : { ...springPop, delay: 0.12 + i * PARTE },
  };
}

/* -------------------------------------------------------------------------
   Ilustraciones de la introducción, montadas por partes
   ------------------------------------------------------------------------- */

function Movil({ reducido }: { reducido: boolean }) {
  return (
    <svg viewBox="0 0 240 300" className="ilu">
      {/* 1. el aparato */}
      <motion.g {...parte(0, reducido)}>
        <rect x="66" y="18" width="108" height="212" rx="20" fill="var(--ink)" />
        <rect x="72" y="24" width="96" height="200" rx="16" fill="var(--paper)" />
        <rect x="104" y="30" width="32" height="6" rx="3" fill="var(--ink)" opacity="0.35" />
      </motion.g>
      {/* 2. lo que hay dentro */}
      <motion.g {...parte(1, reducido)}>
        <rect x="82" y="48" width="76" height="52" rx="10" fill="var(--clay)" />
        <rect x="90" y="62" width="42" height="7" rx="3.5" fill="var(--paper)" opacity="0.9" />
        <rect x="90" y="76" width="30" height="7" rx="3.5" fill="var(--paper)" opacity="0.55" />
      </motion.g>
      <motion.g {...parte(2, reducido)}>
        <rect x="82" y="110" width="76" height="7" rx="3.5" fill="var(--paper-edge)" />
        <rect x="82" y="124" width="60" height="7" rx="3.5" fill="var(--paper-edge)" />
        <rect x="82" y="138" width="68" height="7" rx="3.5" fill="var(--paper-edge)" />
      </motion.g>
      {/* 3. el progreso, que es lo último que se entiende */}
      <motion.g {...parte(3, reducido)}>
        <rect x="82" y="196" width="76" height="8" rx="4" fill="var(--paper-deep)" />
        <motion.rect
          x="82"
          y="196"
          width="76"
          height="8"
          rx="4"
          fill="var(--sage)"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 0.45 }}
          transition={{ ...springSoft, delay: 0.7 }}
          style={{ originX: "82px" }}
        />
      </motion.g>
      {/* 4. destellos */}
      {[
        { x: 40, y: 60, r: 9 },
        { x: 202, y: 96, r: 7 },
        { x: 52, y: 186, r: 6 },
      ].map((d, i) => (
        <motion.path
          key={d.x}
          d={`M ${d.x} ${d.y - d.r} Q ${d.x} ${d.y}, ${d.x + d.r} ${d.y} Q ${d.x} ${d.y}, ${d.x} ${d.y + d.r} Q ${d.x} ${d.y}, ${d.x - d.r} ${d.y} Q ${d.x} ${d.y}, ${d.x} ${d.y - d.r} Z`}
          fill="var(--ochre)"
          {...parte(4 + i, reducido)}
        />
      ))}
    </svg>
  );
}

function ManoConMovil({ reducido }: { reducido: boolean }) {
  return (
    <svg viewBox="0 0 240 260" className="ilu">
      {/* 1. primero el móvil, solo */}
      <motion.g {...parte(0, reducido)}>
        <rect x="76" y="26" width="96" height="168" rx="18" fill="var(--paper-deep)" stroke="var(--ink)" strokeWidth="3" />
      </motion.g>
      {/* 2. después la mano que lo sostiene */}
      <motion.g {...parte(1, reducido)}>
        <path
          d="M 58 236 C 46 196, 52 150, 74 126 C 86 114, 100 118, 98 134 C 96 146, 90 156, 90 164 C 106 158, 128 156, 146 160 C 160 163, 160 178, 148 182 C 160 184, 162 198, 150 202 C 158 206, 156 218, 144 220 C 148 226, 142 236, 130 236 Z"
          fill="var(--sage)"
          stroke="var(--ink)"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* 3. el corazón, que es el mensaje */}
      <motion.g {...parte(2, reducido)}>
        <path
          d="M 124 104 L 104 84 A 14 14 0 0 1 124 64 A 14 14 0 0 1 144 84 Z"
          fill="var(--clay)"
          stroke="var(--ink)"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* 4. el latido, en bucle */}
      {!reducido && (
        <motion.circle
          cx="124"
          cy="86"
          r="34"
          fill="none"
          stroke="var(--clay)"
          strokeWidth="2.5"
          animate={{ scale: [0.8, 1.4], opacity: [0.5, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 1 }}
          style={{ originX: "124px", originY: "86px" }}
        />
      )}
    </svg>
  );
}

function Campana({ reducido }: { reducido: boolean }) {
  return (
    <svg viewBox="0 0 240 240" className="ilu">
      <motion.circle cx="120" cy="120" r="94" fill="var(--sage-veil)" {...parte(0, reducido)} />
      <motion.g
        {...parte(1, reducido)}
        style={{ originX: "120px", originY: "58px" }}
        animate={
          reducido
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 1, y: 0, scale: 1, rotate: [0, -9, 7, -4, 0] }
        }
        transition={
          reducido
            ? { duration: 0.01 }
            : {
                opacity: { ...springPop, delay: 0.2 },
                scale: { ...springPop, delay: 0.2 },
                rotate: { duration: 1.5, delay: 0.8, repeat: Infinity, repeatDelay: 2.4, ease: "easeInOut" },
              }
        }
      >
        <path
          d="M 120 52 C 156 52, 172 82, 172 120 C 172 148, 182 160, 186 168 L 54 168 C 58 160, 68 148, 68 120 C 68 82, 84 52, 120 52 Z"
          fill="var(--ochre)"
          stroke="var(--ink)"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <circle cx="120" cy="46" r="9" fill="var(--ink)" />
        <path d="M 104 178 A 16 16 0 0 0 136 178 Z" fill="var(--clay)" stroke="var(--ink)" strokeWidth="3.5" strokeLinejoin="round" />
      </motion.g>
      {[
        "M 40 92 L 22 84",
        "M 40 120 L 20 120",
        "M 200 92 L 218 84",
        "M 200 120 L 220 120",
      ].map((d, i) => (
        <motion.path
          key={d}
          d={d}
          stroke="var(--clay)"
          strokeWidth="4"
          strokeLinecap="round"
          {...parte(2 + i, reducido)}
        />
      ))}
    </svg>
  );
}

function Cheque({ reducido }: { reducido: boolean }) {
  return (
    <svg viewBox="0 0 240 240" className="ilu">
      <motion.circle cx="120" cy="120" r="92" fill="var(--sage-veil)" {...parte(0, reducido)} />
      <motion.circle cx="120" cy="120" r="70" fill="var(--sage)" {...parte(1, reducido)} />
      <motion.path
        d="M 88 122 L 110 144 L 154 98"
        fill="none"
        stroke="var(--paper)"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={reducido ? { duration: 0.01 } : { ...springTight, delay: 0.45 }}
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------
   Guion de la introducción
   ------------------------------------------------------------------------- */

type Opcion = { texto: string; pie?: string };

type Paso =
  | { tipo: "bienvenida" }
  | { tipo: "nombre"; titulo: string; pie: string }
  | { tipo: "promesa"; titulo: string; ilu: "movil" }
  | { tipo: "ventajas"; titulo: string; puntos: { titulo: string; color: string }[] }
  | { tipo: "eleccion"; titulo: string; pie?: string; opciones: Opcion[]; multiple?: boolean; max?: number }
  | { tipo: "confirmacion"; titulo: string; texto: string }
  | { tipo: "testimonio"; cita: string; sello: string }
  | { tipo: "aviso"; titulo: string; texto: string; ilu: "mano" | "campana"; cta: string; secundario?: string }
  | { tipo: "invitar"; titulo: string; texto: string; cta: string; secundario: string }
  | { tipo: "cargando"; titulo: string }
  | { tipo: "prueba"; titulo: string; hitos: { dia: string; texto: string }[] };

const PASOS: Paso[] = [
  { tipo: "bienvenida" },
  {
    tipo: "nombre",
    titulo: "¿Cómo te llamamos?",
    pie: "Solo para saludarte. Podrás cambiarlo en tu perfil.",
  },
  { tipo: "promesa", titulo: "Una forma completamente nueva de aprender…", ilu: "movil" },
  {
    tipo: "ventajas",
    titulo: "Te va a ayudar a…",
    puntos: [
      { titulo: "Mantener la atención", color: "var(--clay)" },
      { titulo: "Entender ideas difíciles", color: "var(--plum)" },
      { titulo: "Retenerlo a largo plazo", color: "var(--sage)" },
    ],
  },
  {
    tipo: "eleccion",
    titulo: "¿Qué temas te interesan?",
    pie: "Elige hasta 5 para empezar. Podrás añadir más luego.",
    multiple: true,
    max: 5,
    opciones: [
      { texto: "Historia" }, { texto: "Filosofía" }, { texto: "Ciencia" },
      { texto: "Arte" }, { texto: "Literatura" }, { texto: "Psicología" },
      { texto: "Economía" }, { texto: "Salud" },
    ],
  },
  {
    tipo: "confirmacion",
    titulo: "Buena elección.",
    texto: "Con estos temas el formato rinde especialmente bien: capítulos cortos, una idea por tarjeta y repaso al final.",
  },
  {
    tipo: "eleccion",
    titulo: "¿Cuánto quieres leer al día?",
    pie: "Quien se marca un objetivo aprende más, aunque sean pocos minutos.",
    opciones: [
      { texto: "5 minutos", pie: "Un capítulo" },
      { texto: "10 minutos", pie: "Dos capítulos" },
      { texto: "20 minutos", pie: "Ritmo intenso" },
    ],
  },
  {
    tipo: "eleccion",
    titulo: "¿En qué momento del día?",
    pie: "Elegir una hora fija es lo que convierte esto en hábito.",
    opciones: [
      { texto: "Por la mañana", pie: "Con el desayuno o de camino" },
      { texto: "A mediodía", pie: "En la comida o en un rato muerto" },
      { texto: "Por la noche", pie: "Después de cenar o en la cama" },
    ],
  },
  {
    tipo: "aviso",
    titulo: "Te avisamos y no se te olvida",
    texto: "Un recordatorio al día, a la hora que has elegido. Ni uno más.",
    ilu: "campana",
    cta: "Activar recordatorios",
    secundario: "Ahora no",
  },
  {
    tipo: "testimonio",
    cita: "Leo en la comida en vez de mirar el móvil sin más, y luego uso lo que he aprendido el mismo día.",
    sello: "4,8 · 20.000 valoraciones",
  },
  {
    tipo: "invitar",
    titulo: "¿Invitas a alguien?",
    texto:
      "Aprender acompañado multiplica por cuatro las probabilidades de no dejarlo. Regala una semana entera, sin que nadie ponga una tarjeta.",
    cta: "Invitar a alguien",
    secundario: "Ahora no",
  },
  { tipo: "cargando", titulo: "Un momento, estamos preparando tu biblioteca…" },
  {
    tipo: "aviso",
    titulo: "Empieza gratis",
    texto: "Siete días con la biblioteca completa. Sin compromiso y puedes cancelar cuando quieras.",
    ilu: "mano",
    cta: "Empezar la prueba",
  },
  {
    tipo: "prueba",
    titulo: "Cómo va la prueba",
    hitos: [
      { dia: "Hoy", texto: "Acceso completo a toda la biblioteca." },
      { dia: "Día 5", texto: "Te avisamos de que quedan dos días." },
      { dia: "Día 7", texto: "Termina la prueba. Cancela antes si no sigues." },
    ],
  },
];

/* -------------------------------------------------------------------------

   ------------------------------------------------------------------------- */

export function Onboarding({ onTerminar }: { onTerminar: (nombre: string) => void }) {
  const reducido = !!useReducedMotion();
  const [i, setI] = useState(0);
  const [sentido, setSentido] = useState(1);
  const [elegidas, setElegidas] = useState<Record<number, string[]>>({});
  const [nombre, setNombre] = useState("");
  const paso = PASOS[i];

  // Si no escribe nada, no se le da la lata: la app le llama de tú.
  const terminar = () => onTerminar(nombre.trim() || "Hola");

  const avanzar = (d: number) => {
    if (i + d < 0) return;
    if (i + d >= PASOS.length) return terminar();
    setSentido(d);
    setI(i + d);
  };

  // La pantalla de carga avanza sola, como en cualquier onboarding real.
  useEffect(() => {
    if (paso.tipo !== "cargando") return;
    const id = window.setTimeout(() => avanzar(1), 2400);
    return () => window.clearTimeout(id);
  });

  const marcar = (texto: string) => {
    const actual = elegidas[i] ?? [];
    const multiple = paso.tipo === "eleccion" && paso.multiple;
    const max = (paso.tipo === "eleccion" && paso.max) || 99;
    let siguiente: string[];
    if (!multiple) siguiente = [texto];
    else if (actual.includes(texto)) siguiente = actual.filter((t) => t !== texto);
    else siguiente = actual.length >= max ? actual : [...actual, texto];
    setElegidas({ ...elegidas, [i]: siguiente });
  };

  const seleccion = elegidas[i] ?? [];
  const puedeSeguir = paso.tipo !== "eleccion" || seleccion.length > 0;

  return (
    <motion.div
      className="onb"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: spring }}
      exit={{ opacity: 0, transition: { duration: 0.18 } }}
    >
      {paso.tipo !== "bienvenida" && (
        <header className="onb-cabecera">
          <button className="icon-btn" onClick={() => avanzar(-1)} aria-label="Atrás">
            <GlyphBack />
          </button>
          <div className="onb-barra">
            <motion.div
              className="onb-relleno"
              animate={{ scaleX: (i + 1) / PASOS.length }}
              transition={springTight}
            />
          </div>
        </header>
      )}

      <AnimatePresence mode="wait" custom={sentido}>
        <motion.div
          key={i}
          className="onb-cuerpo"
          data-tipo={paso.tipo}
          initial={{ opacity: 0, x: sentido * 30 }}
          animate={{ opacity: 1, x: 0, transition: { ...spring, delay: 0.04 } }}
          exit={{ opacity: 0, x: sentido * -24, transition: { duration: 0.15 } }}
        >
          {paso.tipo === "bienvenida" && <Bienvenida reducido={reducido} />}

          {paso.tipo === "nombre" && (
            <>
              <motion.h1 className="onb-titulo onb-izq" {...parte(0, reducido)}>
                {paso.titulo}
              </motion.h1>
              <motion.p className="onb-pie" {...parte(1, reducido)}>
                {paso.pie}
              </motion.p>
              <motion.div className="onb-campo" {...parte(2, reducido)}>
                <input
                  className="onb-input"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && avanzar(1)}
                  placeholder="Tu nombre"
                  maxLength={22}
                  autoComplete="given-name"
                  aria-label="Tu nombre"
                />
                {/* El subrayado crece cuando hay algo escrito: acusa recibo */}
                <motion.span
                  className="onb-subrayado"
                  initial={false}
                  animate={{ scaleX: nombre.trim() ? 1 : 0.999 }}
                  data-lleno={!!nombre.trim()}
                  transition={springTight}
                />
              </motion.div>
            </>
          )}

          {paso.tipo === "invitar" && (
            <>
              <motion.h1 className="onb-titulo onb-izq" {...parte(0, reducido)}>
                {paso.titulo}
              </motion.h1>
              <motion.p className="onb-pie" {...parte(1, reducido)}>
                {paso.texto}
              </motion.p>
              <PaseInvitado reducido={reducido} />
            </>
          )}

          {paso.tipo === "promesa" && (
            <>
              <motion.h1 className="onb-titulo" {...parte(0, reducido)}>
                {paso.titulo}
              </motion.h1>
              <Movil reducido={reducido} />
            </>
          )}

          {paso.tipo === "ventajas" && (
            <>
              <motion.h1 className="onb-titulo" {...parte(0, reducido)}>
                {paso.titulo}
              </motion.h1>
              <div className="onb-ventajas">
                {paso.puntos.map((p, k) => (
                  <motion.div key={p.titulo} className="ventaja" {...cae(1 + k, reducido)}>
                    <span className="ventaja-marca" style={{ background: p.color }} />
                    <span>{p.titulo}</span>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {paso.tipo === "eleccion" && (
            <>
              <motion.h1 className="onb-titulo onb-izq" {...parte(0, reducido)}>
                {paso.titulo}
              </motion.h1>
              {paso.pie && (
                <motion.p className="onb-pie" {...parte(1, reducido)}>
                  {paso.pie}
                </motion.p>
              )}
              <div className="onb-opciones">
                {paso.opciones.map((o, k) => {
                  const activa = seleccion.includes(o.texto);
                  return (
                    <motion.button
                      key={o.texto}
                      className="opcion"
                      data-activa={activa}
                      onClick={() => marcar(o.texto)}
                      whileTap={{ scale: 0.98 }}
                      {...parte(2 + k, reducido)}
                    >
                      <span className="opcion-texto">
                        {o.texto}
                        {o.pie && <span className="opcion-pie">{o.pie}</span>}
                      </span>
                      <motion.span
                        className="opcion-marca"
                        animate={{ scale: activa ? 1 : 0.4, opacity: activa ? 1 : 0 }}
                        transition={springPop}
                      >
                        <GlyphTick />
                      </motion.span>
                    </motion.button>
                  );
                })}
              </div>
            </>
          )}

          {paso.tipo === "confirmacion" && (
            <>
              <Cheque reducido={reducido} />
              <motion.h1 className="onb-titulo" {...parte(3, reducido)}>
                {paso.titulo}
              </motion.h1>
              <motion.p className="onb-texto" {...parte(4, reducido)}>
                {paso.texto}
              </motion.p>
            </>
          )}

          {paso.tipo === "testimonio" && (
            <div className="onb-testimonio">
              <motion.span className="comilla" {...parte(0, reducido)}>
                “
              </motion.span>
              <motion.blockquote {...parte(1, reducido)}>{paso.cita}</motion.blockquote>
              <motion.p className="onb-sello" {...parte(2, reducido)}>
                {paso.sello}
              </motion.p>
            </div>
          )}

          {paso.tipo === "aviso" && (
            <>
              {paso.ilu === "campana" ? (
                <Campana reducido={reducido} />
              ) : (
                <ManoConMovil reducido={reducido} />
              )}
              <motion.h1 className="onb-titulo" {...parte(4, reducido)}>
                {paso.titulo}
              </motion.h1>
              <motion.p className="onb-texto" {...parte(5, reducido)}>
                {paso.texto}
              </motion.p>
            </>
          )}

          {paso.tipo === "cargando" && (
            <>
              <motion.h1 className="onb-titulo" {...parte(0, reducido)}>
                {paso.titulo}
              </motion.h1>
              <div className="onb-carga">
                <motion.div
                  className="onb-carga-relleno"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                />
              </div>
            </>
          )}

          {paso.tipo === "prueba" && (
            <>
              <motion.h1 className="onb-titulo onb-izq" {...parte(0, reducido)}>
                {paso.titulo}
              </motion.h1>
              <div className="onb-hitos">
                {/* La línea se dibuja y los hitos van cayendo sobre ella */}
                <motion.span
                  className="hito-linea"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={reducido ? { duration: 0.01 } : { ...springSoft, delay: 0.2 }}
                />
                {paso.hitos.map((h, k) => (
                  <motion.div key={h.dia} className="hito" {...parte(1 + k, reducido)}>
                    <span className="hito-punto" data-primero={k === 0} />
                    <div>
                      <p className="hito-dia">{h.dia}</p>
                      <p className="hito-texto">{h.texto}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {paso.tipo !== "cargando" && (
        <div className="onb-pie-botones">
          <motion.button
            className="primary-btn"
            onClick={() => avanzar(1)}
            disabled={!puedeSeguir}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: puedeSeguir ? 1 : 0.4, y: 0 }}
            transition={{ ...spring, delay: 0.3 }}
          >
            {paso.tipo === "bienvenida"
              ? "Empezar"
              : paso.tipo === "aviso" || paso.tipo === "invitar"
                ? paso.cta
                : paso.tipo === "prueba"
                  ? "Entrar en la biblioteca"
                  : "Continuar"}
          </motion.button>
          {(paso.tipo === "invitar" || (paso.tipo === "aviso" && paso.secundario)) && (
            <motion.button
              className="onb-secundario"
              onClick={() => avanzar(1)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...spring, delay: 0.4 }}
            >
              {paso.tipo === "invitar" ? paso.secundario : paso.secundario}
            </motion.button>
          )}
          {paso.tipo === "bienvenida" && (
            <motion.button
              className="onb-secundario"
              onClick={terminar}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...spring, delay: 0.4 }}
            >
              Ya tengo cuenta
            </motion.button>
          )}
        </div>
      )}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------
   Bienvenida: rejilla de portadas que va cayendo
   ------------------------------------------------------------------------- */

function Bienvenida({ reducido }: { reducido: boolean }) {
  const rejilla = [...LIBROS, ...LIBROS].slice(0, 12);
  return (
    <div className="onb-bienvenida">
      <div className="rejilla">
        {rejilla.map((l, k) => (
          <motion.div
            key={`${l.id}-${k}`}
            initial={{ opacity: 0, y: -30, scale: 0.86 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={
              reducido
                ? { duration: 0.01 }
                : { ...springPop, delay: 0.05 + (k % 3) * 0.05 + Math.floor(k / 3) * 0.09 }
            }
          >
            <Portada libro={l} tamano={98} />
          </motion.div>
        ))}
      </div>
      <div className="onb-marca">
        <motion.h1 {...parte(6, reducido)}>Curva</motion.h1>
        <motion.p {...parte(7, reducido)}>Aprende leyendo poco</motion.p>
      </div>
    </div>
  );
}
