import { useEffect, useState } from "react";
import { AnimatePresence, animate, motion, useMotionValue, useTransform } from "framer-motion";
import { spring, springPop, springSoft } from "./motion";

/* ==========================================================================
   Las dos gráficas de la introducción.

   Son las dos pantallas que tienen que convencer, y por eso son las únicas de
   la app donde el dibujo se construye delante de ti en vez de aparecer hecho.
   La regla es la misma de los gráficos de las lecciones: se anima la MAGNITUD,
   no la opacidad. Una línea que se dibuja de izquierda a derecha cuenta que el
   tiempo pasa; la misma línea apareciendo entera con un fundido no cuenta nada.

   Técnicas que se usan aquí, por si hay que repetirlas en otra pantalla:

   · `pathLength` de 0 a 1 dibuja el trazo como lo haría una mano. Es la
     propiedad que Framer traduce a `stroke-dasharray`, así que no hay que
     medir la longitud del camino a mano.
   · Un `clipPath` con un rectángulo que crece descubre el relleno EXACTAMENTE
     al ritmo del trazo, porque las dos curvas avanzan en la misma dirección.
     Si el relleno se fundiera aparte, se vería llegar antes que su línea.
   · Los muelles de los remates entran DESPUÉS de que el trazo llegue: el punto
     final y su etiqueta son la conclusión, y una conclusión no se adelanta.
   · Nada se mueve en bucle salvo el halo del punto final. Un gráfico que
     respira entero distrae de la cifra, que es lo único que hay que leer.
   ========================================================================== */

/**
 * Fases con reloj de verdad.
 *
 * Lo natural sería poner `delay` y olvidarse, y para un remate a 300 ms va
 * bien. Para uno a segundo y medio, no: el reloj de Framer avanza con el
 * frameloop, y cuando TODAS las animaciones de la pantalla han terminado el
 * frameloop se queda sin trabajo. Un retardo largo que aún no ha arrancado se
 * queda entonces esperando un latido que no llega, y el elemento no aparece
 * jamás. Aquí eso pasaba con las dos pastillas y con los puntos de llegada.
 *
 * Con `setTimeout` la cuenta la lleva el navegador, que no depende de que haya
 * algo moviéndose, y cada tramo entra con su muelle corto, que sí es de fiar.
 */
function useFases(retardos: number[], reducido: boolean) {
  const [fase, setFase] = useState(reducido ? retardos.length : 0);

  useEffect(() => {
    if (reducido) return setFase(retardos.length);
    setFase(0);
    const relojes = retardos.map((s, i) => window.setTimeout(() => setFase(i + 1), s * 1000));
    return () => relojes.forEach((r) => window.clearTimeout(r));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducido, retardos.join()]);

  return fase;
}

/* --------------------------------------------------------------------------
   1. La curva: cuánto cunde con la app y cuánto por tu cuenta
   -------------------------------------------------------------------------- */

/** Lo que promete el titular. Está aquí para que la curva y el texto no puedan
 *  contradecirse: si mañana la promesa es otra, se cambia en un sitio. */
export const VECES_MAS_RAPIDO = 20;

/* Los dos caminos. Suben a tirones a propósito: una curva perfectamente lisa
   parece una función, y lo que se cuenta aquí es una racha real, con semanas
   mejores y semanas peores. */
const CAMINO_APP =
  "M24 180 C44 176 52 163 70 158 C86 153 92 156 104 151 C118 145 120 131 138 125 " +
  "C154 120 160 123 172 118 C188 112 190 97 208 89 C224 82 232 85 244 79 C262 70 266 58 286 50";

const CAMINO_SOLO =
  "M24 200 C48 198 58 194 76 193 C96 192 104 197 122 195 C142 193 150 188 168 187 " +
  "C188 186 196 191 214 189 C234 187 242 183 260 182 C272 181 278 182 286 182";

/** El relleno es la misma curva, bajada hasta la base y cerrada. */
const RELLENO_APP = `${CAMINO_APP} L286 212 L24 212 Z`;

/* Abreviados a propósito: con «semana 1» completo, dos rótulos seguidos se
   tocaban. Un eje que se toca se lee como un error de maquetación. */
const SEMANAS = [
  { x: 26, texto: "sem. 1", ancla: "start" },
  { x: 112, texto: "sem. 2", ancla: "middle" },
  { x: 199, texto: "sem. 3", ancla: "middle" },
  { x: 286, texto: "sem. 4", ancla: "end" },
] as const;

/** Cuánto tarda el trazo en llegar de un extremo al otro. */
const TRAZO = 1.35;
const ESPERA = 0.25;

export function CurvaVelocidad({ reducido }: { reducido: boolean }) {
  const dibujo = reducido
    ? { duration: 0.01 }
    : { duration: TRAZO, delay: ESPERA, ease: [0.4, 0, 0.2, 1] as const };

  /** 1 = el trazo ya ha llegado al final y toca rematar. */
  const fase = useFases([ESPERA + TRAZO * 0.9], reducido);

  return (
    <svg viewBox="0 0 320 244" className="grafica" role="img" aria-label={`Con la app se avanza ${VECES_MAS_RAPIDO} veces más rápido que leyendo por tu cuenta`}>
      <defs>
        <linearGradient id="gi-relleno" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--ochre)" stopOpacity="0.34" />
          <stop offset="70%" stopColor="var(--ochre)" stopOpacity="0.06" />
          <stop offset="100%" stopColor="var(--ochre)" stopOpacity="0" />
        </linearGradient>
        {/* El barrido descubre el relleno al mismo ritmo que avanza el trazo */}
        <clipPath id="gi-barrido">
          <motion.rect
            x="0"
            y="0"
            height="244"
            initial={{ width: reducido ? 320 : 22 }}
            animate={{ width: 320 }}
            transition={dibujo}
          />
        </clipPath>
      </defs>

      <g clipPath="url(#gi-barrido)">
        <path d={RELLENO_APP} fill="url(#gi-relleno)" />
      </g>

      {/* Por tu cuenta: primero, más fina y sin relleno. Es el punto de
          partida, y el punto de partida no se luce. */}
      <motion.path
        d={CAMINO_SOLO}
        fill="none"
        stroke="var(--ink)"
        strokeOpacity="0.26"
        strokeWidth="3.4"
        strokeLinecap="round"
        initial={{ pathLength: reducido ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={dibujo}
      />

      <motion.path
        d={CAMINO_APP}
        fill="none"
        stroke="var(--ochre)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: reducido ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={dibujo}
      />

      {/* Remates: el punto de llegada de cada línea y su etiqueta */}
      {fase >= 1 && (
        <>
          <Punto x={286} y={182} color="var(--ink)" opacidad={0.26} retardo={0} reducido={reducido} />
          <Punto x={286} y={50} color="var(--ochre)" halo retardo={0.06} reducido={reducido} />

          {/* La de arriba es la que se lee: llena y con el acento */}
          <Bocadillo
            x={232}
            y={22}
            ancho={116}
            texto="Con la app"
            relleno="var(--ochre)"
            color="var(--ink)"
            cola="M268 37 L286 50 L278 37 Z"
            retardo={0.14}
            reducido={reducido}
          />
          <Bocadillo
            x={224}
            y={150}
            ancho={124}
            texto="Por tu cuenta"
            relleno="var(--paper)"
            color="var(--ink-soft)"
            borde
            cola="M264 165 L286 182 L274 165 Z"
            retardo={0.02}
            reducido={reducido}
          />
        </>
      )}

      {SEMANAS.map((s, i) => (
        <motion.text
          key={s.texto}
          x={s.x}
          y={234}
          textAnchor={s.ancla}
          className="grafica-eje"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.75, y: 0 }}
          transition={reducido ? { duration: 0.01 } : { ...springSoft, delay: 0.34 + i * 0.09 }}
        >
          {s.texto}
        </motion.text>
      ))}
    </svg>
  );
}

/** El punto de llegada. El de la app late; el otro no, porque no hay nada que
 *  celebrar en la línea que se queda plana. */
function Punto({
  x,
  y,
  color,
  opacidad = 1,
  halo = false,
  retardo,
  reducido,
}: {
  x: number;
  y: number;
  color: string;
  opacidad?: number;
  halo?: boolean;
  retardo: number;
  reducido: boolean;
}) {
  return (
    <>
      {halo && !reducido && (
        <motion.circle
          cx={x}
          cy={y}
          r="8"
          fill={color}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 2.6], opacity: [0.34, 0] }}
          transition={{ duration: 2.1, repeat: Infinity, ease: "easeOut", delay: retardo + 0.4 }}
          style={{ originX: `${x}px`, originY: `${y}px` }}
        />
      )}
      <motion.circle
        cx={x}
        cy={y}
        r="7.5"
        fill={color}
        fillOpacity={opacidad}
        stroke="var(--paper)"
        strokeWidth="3.4"
        initial={{ scale: reducido ? 1 : 0 }}
        animate={{ scale: 1 }}
        transition={reducido ? { duration: 0.01 } : { ...springPop, delay: retardo }}
        style={{ originX: `${x}px`, originY: `${y}px` }}
      />
    </>
  );
}

function Bocadillo({
  x,
  y,
  ancho,
  texto,
  relleno,
  color,
  borde = false,
  cola,
  retardo,
  reducido,
}: {
  /** Centro de la pastilla. */
  x: number;
  y: number;
  ancho: number;
  texto: string;
  relleno: string;
  color: string;
  borde?: boolean;
  /** El pico que apunta al punto de la curva. */
  cola: string;
  retardo: number;
  reducido: boolean;
}) {
  const alto = 32;
  return (
    <motion.g
      initial={{ opacity: 0, scale: reducido ? 1 : 0.6, y: reducido ? 0 : -6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={reducido ? { duration: 0.01 } : { ...springPop, delay: retardo }}
      style={{ originX: `${x}px`, originY: `${y + alto / 2}px` }}
    >
      <path d={cola} fill={relleno} stroke={borde ? "var(--paper-edge)" : "none"} strokeWidth="1.6" />
      <rect
        x={x - ancho / 2}
        y={y - alto / 2}
        width={ancho}
        height={alto}
        rx={alto / 2}
        fill={relleno}
        stroke={borde ? "var(--paper-edge)" : "none"}
        strokeWidth="1.6"
      />
      <text x={x} y={y + 5} textAnchor="middle" className="grafica-pastilla" fill={color}>
        {texto}
      </text>
    </motion.g>
  );
}

/* --------------------------------------------------------------------------
   2. El radar: qué se entrena leyendo
   -------------------------------------------------------------------------- */

/**
 * Cinco rasgos, cinco ejes. El radar es el único gráfico que enseña a la vez
 * que TODO sube y que no sube igual; con cinco barras se leería como una lista
 * ordenada de mejor a peor, que no es lo que se quiere decir.
 *
 * Los valores son ilustrativos y así se dice en la pantalla. Lo que no es
 * ilustrativo son los dos estudios del pie, y por eso están citados.
 */
const RASGOS = [
  { nombre: "Memoria", hoy: 0.4, luego: 0.9 },
  { nombre: "Vocabulario", hoy: 0.34, luego: 0.86 },
  { nombre: "Empatía", hoy: 0.3, luego: 0.78 },
  { nombre: "Concentración", hoy: 0.26, luego: 0.84 },
  { nombre: "Criterio", hoy: 0.36, luego: 0.8 },
] as const;

const CENTRO = { x: 170, y: 116 };
const RADIO = 84;

/** Vértice i-ésimo a una fracción del radio. El primero, arriba del todo. */
function vertice(i: number, fraccion: number, total = RASGOS.length) {
  const angulo = (Math.PI * 2 * i) / total - Math.PI / 2;
  return {
    x: CENTRO.x + Math.cos(angulo) * RADIO * fraccion,
    y: CENTRO.y + Math.sin(angulo) * RADIO * fraccion,
  };
}

const poligono = (fracciones: number[] | readonly number[]) =>
  fracciones.map((f, i) => {
    const p = vertice(i, f);
    return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
  }).join(" ");

const anillo = (f: number) => poligono(RASGOS.map(() => f));

export function RadarRasgos({ reducido }: { reducido: boolean }) {
  const hoy = RASGOS.map((r) => r.hoy);
  const luego = RASGOS.map((r) => r.luego);

  return (
    <svg viewBox="0 0 340 250" className="grafica" role="img" aria-label="Rasgos que entrena la lectura: memoria, vocabulario, empatía, concentración y criterio">
      <defs>
        <radialGradient id="gi-halo">
          <stop offset="0%" stopColor="var(--ochre)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="var(--ochre)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Un halo detrás: separa la figura del papel sin dibujar una caja */}
      <motion.circle
        cx={CENTRO.x}
        cy={CENTRO.y}
        r={RADIO + 18}
        fill="url(#gi-halo)"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={reducido ? { duration: 0.01 } : { ...springSoft, delay: 0.5 }}
        style={{ originX: `${CENTRO.x}px`, originY: `${CENTRO.y}px` }}
      />

      {/* La retícula entra de dentro afuera: primero se ve el sitio donde va
          a caber la figura y luego la figura. Al revés no se entiende. */}
      {[0.35, 0.7, 1].map((f, i) => (
        <motion.polygon
          key={f}
          points={anillo(f)}
          fill="none"
          stroke="var(--paper-edge)"
          strokeWidth="1.4"
          strokeLinejoin="round"
          initial={{ opacity: 0, scale: reducido ? 1 : 0.55 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={reducido ? { duration: 0.01 } : { ...springSoft, delay: 0.1 + i * 0.07 }}
          style={{ originX: `${CENTRO.x}px`, originY: `${CENTRO.y}px` }}
        />
      ))}

      {RASGOS.map((r, i) => {
        const p = vertice(i, 1);
        return (
          <motion.line
            key={r.nombre}
            x1={CENTRO.x}
            y1={CENTRO.y}
            x2={p.x}
            y2={p.y}
            stroke="var(--paper-edge)"
            strokeWidth="1.2"
            initial={{ pathLength: reducido ? 1 : 0 }}
            animate={{ pathLength: 1 }}
            transition={reducido ? { duration: 0.01 } : { duration: 0.5, delay: 0.18 + i * 0.05, ease: "easeOut" }}
          />
        );
      })}

      {/* Dónde estás hoy */}
      <motion.polygon
        points={poligono(hoy)}
        fill="var(--ink)"
        fillOpacity="0.07"
        stroke="var(--ink)"
        strokeOpacity="0.24"
        strokeWidth="2"
        strokeLinejoin="round"
        initial={{ scale: reducido ? 1 : 0 }}
        animate={{ scale: 1 }}
        transition={reducido ? { duration: 0.01 } : { ...spring, delay: 0.42 }}
        style={{ originX: `${CENTRO.x}px`, originY: `${CENTRO.y}px` }}
      />

      {/* Y a dónde llega. Infla por encima de la anterior, que se queda
          debajo como marca de agua de por dónde ibas. */}
      <motion.polygon
        points={poligono(luego)}
        fill="var(--ochre)"
        fillOpacity="0.28"
        stroke="var(--ochre)"
        strokeWidth="2.8"
        strokeLinejoin="round"
        initial={{ scale: reducido ? 1 : 0, opacity: reducido ? 1 : 0.4 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={
          reducido
            ? { duration: 0.01 }
            : { type: "spring", stiffness: 150, damping: 13, mass: 1, delay: 0.62 }
        }
        style={{ originX: `${CENTRO.x}px`, originY: `${CENTRO.y}px` }}
      />

      {RASGOS.map((r, i) => {
        const p = vertice(i, r.luego);
        return (
          <motion.circle
            key={r.nombre}
            cx={p.x}
            cy={p.y}
            r="5"
            fill="var(--ochre)"
            stroke="var(--paper)"
            strokeWidth="2.6"
            initial={{ scale: reducido ? 1 : 0 }}
            animate={{ scale: 1 }}
            transition={reducido ? { duration: 0.01 } : { ...springPop, delay: 0.86 + i * 0.07 }}
            style={{ originX: `${p.x}px`, originY: `${p.y}px` }}
          />
        );
      })}

      {/* Los nombres, por fuera del vértice y empujados hacia su lado */}
      {RASGOS.map((r, i) => {
        const p = vertice(i, 1.16);
        const ancla = p.x > CENTRO.x + 8 ? "start" : p.x < CENTRO.x - 8 ? "end" : "middle";
        return (
          <motion.text
            key={r.nombre}
            x={p.x}
            y={p.y + (i === 0 ? -4 : 4)}
            textAnchor={ancla}
            className="grafica-rasgo"
            initial={{ opacity: 0, scale: reducido ? 1 : 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={reducido ? { duration: 0.01 } : { ...springPop, delay: 0.92 + i * 0.07 }}
            style={{ originX: `${p.x}px`, originY: `${p.y}px` }}
          >
            {r.nombre}
          </motion.text>
        );
      })}

      {/* Leyenda: sin ella, dos polígonos superpuestos no dicen cuál es cuál */}
      <motion.g
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reducido ? { duration: 0.01 } : { ...springSoft, delay: 1.15 }}
      >
        <circle cx="112" cy="238" r="5" fill="var(--ink)" fillOpacity="0.22" />
        <text x="122" y="242" className="grafica-leyenda">Hoy</text>
        <circle cx="174" cy="238" r="5" fill="var(--ochre)" />
        <text x="184" y="242" className="grafica-leyenda">En tres meses</text>
      </motion.g>
    </svg>
  );
}

/* --------------------------------------------------------------------------
   3. El contador: cuántas cosas nuevas al año
   -------------------------------------------------------------------------- */

/**
 * El número sube como el de una báscula: se dispara, pasa de largo la mitad en
 * medio segundo y luego se pasa dos segundos afinando los últimos dígitos.
 *
 * Eso NO se consigue con `easeOut`, que reparte la desaceleración de forma
 * educada. Se consigue con una bézier deliberadamente bestia —el segundo punto
 * de control casi arriba del todo— que gasta el 80 % del recorrido en el 20 %
 * del tiempo. La espera se concentra al final, que es donde el número ya casi
 * se lee y el ojo quiere saber en qué se para.
 *
 * Al parar, tres cosas a la vez: el número da un golpe de escala, sale un halo
 * del color del acento y saltan cinco chispas. Es un remate corto, de 900 ms;
 * pasado ese tiempo la pantalla se queda quieta para que se pueda leer.
 */
export function ContadorBascula({
  valor,
  reducido,
}: {
  valor: number;
  reducido: boolean;
}) {
  const cuenta = useMotionValue(0);
  const [parado, setParado] = useState(reducido);
  const texto = useTransform(cuenta, (v) => Math.round(v).toLocaleString("es-ES"));

  useEffect(() => {
    if (reducido) {
      cuenta.set(valor);
      setParado(true);
      return;
    }
    setParado(false);
    const control = animate(cuenta, valor, {
      duration: 2.7,
      delay: 0.42,
      ease: [0.04, 0.88, 0.12, 1],
      onComplete: () => setParado(true),
    });
    return () => control.stop();
  }, [valor, reducido, cuenta]);

  return (
    <div className="calc-caja">
      <AnimatePresence>
        {parado && !reducido && (
          <>
            <motion.span
              key="halo"
              className="calc-halo"
              initial={{ scale: 0.35, opacity: 0.5 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.95, ease: "easeOut" }}
            />
            {CHISPAS.map((c, i) => (
              <motion.span
                key={`chispa-${i}`}
                className="calc-chispa"
                style={{ background: c.color, width: c.r, height: c.r }}
                initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                animate={{ x: c.x, y: c.y, scale: [0, 1, 0.2], opacity: [1, 1, 0] }}
                transition={{ duration: 0.8, delay: i * 0.035, ease: "easeOut" }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      <motion.span
        className="calc-numero"
        initial={false}
        animate={parado && !reducido ? { scale: [1, 1.08, 1] } : { scale: 1 }}
        transition={springPop}
      >
        {/* El estirón vertical mientras corre: los dígitos de una báscula no
            están quietos, y con la escala fija el número parecía un dato ya
            escrito al que le han puesto una animación encima. */}
        <motion.span
          className="calc-rodillo"
          initial={reducido ? false : { scaleY: 1.07 }}
          animate={{ scaleY: 1 }}
          transition={reducido ? { duration: 0.01 } : { duration: 2.7, delay: 0.42, ease: [0.04, 0.88, 0.12, 1] }}
        >
          <motion.span>{texto}</motion.span>
        </motion.span>
      </motion.span>
    </div>
  );
}

/** Las cinco chispas del remate. Ni simétricas ni del mismo tamaño. */
const CHISPAS = [
  { x: -54, y: -46, r: 9, color: "var(--ochre)" },
  { x: 46, y: -58, r: 7, color: "var(--clay)" },
  { x: 86, y: -14, r: 10, color: "var(--plum-light, #9d8499)" },
  { x: -70, y: 26, r: 7, color: "var(--clay)" },
  { x: 58, y: 40, r: 8, color: "var(--ochre)" },
];

/**
 * La pantalla entera del cálculo. Va aquí y no en la introducción porque el
 * texto y el número tienen que ir sincronizados: el remate («Nada mal, ¿no?»)
 * no se puede leer mientras la cifra todavía corre, y quien sabe cuándo para
 * la cifra es este fichero.
 *
 * Los tres bloques están siempre montados y lo que cambia es su destino de
 * animación. Si se montaran al llegar su turno, la caja crecería y el número
 * daría un salto vertical justo cuando acaba de pararse, que es el único
 * momento en el que no puede moverse nada.
 */
export function PantallaCalculo({
  valor,
  remate,
  pie,
  reducido,
}: {
  valor: number;
  remate: string;
  pie: string;
  reducido: boolean;
}) {
  const fase = useFases([3.25, 3.5], reducido);

  return (
    <div className="calc">
      <motion.h1
        className="calc-frase"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reducido ? { duration: 0.01 } : { ...springPop, delay: 0.1 }}
      >
        A este ritmo, aprenderás
      </motion.h1>

      <ContadorBascula valor={valor} reducido={reducido} />

      <motion.h1
        className="calc-frase"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reducido ? { duration: 0.01 } : { ...springPop, delay: 0.2 }}
      >
        cosas nuevas al año.
      </motion.h1>

      <motion.p
        className="calc-remate"
        initial={false}
        animate={{ opacity: fase >= 1 ? 1 : 0, y: fase >= 1 ? 0 : 12 }}
        transition={reducido ? { duration: 0.01 } : springPop}
      >
        {remate}
      </motion.p>

      <motion.p
        className="onb-fuente calc-pie"
        initial={false}
        animate={{ opacity: fase >= 2 ? 0.62 : 0 }}
        transition={{ duration: reducido ? 0.01 : 0.5 }}
      >
        {pie}
      </motion.p>
    </div>
  );
}
