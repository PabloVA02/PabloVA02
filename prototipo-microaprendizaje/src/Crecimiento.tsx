import { useEffect, useMemo, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { spring, springPop, springSoft } from "./motion";

/* ==========================================================================
   CRECIMIENTO SEMANAL

   Dos series y seis semanas: las ideas clave que se ha llevado y los minutos
   que ha leído. La pregunta que contesta no es «cuánto llevo» —eso lo dicen
   la racha y el total de la meta— sino «¿voy a más o a menos?», que es la
   única que hace que alguien vuelva a abrir esta pantalla dentro de un mes.

   TRES DECISIONES, Y LAS TRES SON CONTRA LA REFERENCIA QUE TRAJO PABLO

   1. LA CIFRA SOLA NO DICE NADA. Su bloque de crecimiento semanal son tres
      números en una fila —0, 0, 0— y ahí se acaba. Un número sin el de la
      semana pasada al lado no es un progreso, es un marcador. Aquí cada cifra
      lleva pegada su diferencia contra la semana anterior, que es lo que la
      convierte en una noticia: 42 no significa nada, +9 sí.

   2. Y POR ESO HAY GRÁFICA. Es lo que pidió Pablo y es lo que falta allí. Seis
      semanas, dos trazos y un punto por semana: la forma de la línea se lee
      antes que cualquier número, y es la única manera de ver de un vistazo si
      la cosa sube, se ha estancado o se cayó la semana que estuvo de viaje.

   3. SE PUEDE TOCAR. Al tocar una semana, las dos cifras de arriba y las dos
      diferencias pasan a ser las de ESA semana. Una gráfica que solo se mira
      enseña la forma; una que se toca deja preguntarle «¿y en agosto?».

   CÓMO SE DIBUJAN DOS SERIES QUE NO SE MIDEN IGUAL

   Las ideas van por decenas y los minutos por centenas. En un mismo eje, la
   línea de las ideas quedaría pegada al suelo y no se vería su forma, que es
   justo lo que hay que ver. Así que cada serie se normaliza contra SU máximo
   —con un 14 % de aire por arriba para que el pico no toque el techo—, y lo
   que se compara no son las alturas entre líneas, que no significarían nada,
   sino la forma de cada una consigo misma a lo largo del tiempo. Por eso no
   hay eje de valores dibujado: sería mentira poner uno para dos escalas.

   EL COLOR. Los dos trazos son ocre y verde azulado, los de la paleta, pero
   subidos de luz. Un trazo de 2,4 puntos sobre un fondo oscuro necesita más
   croma que un relleno grande: es la misma razón por la que el botón de
   escuchar del libro del día aclara su acento en vez de usarlo tal cual.
   ========================================================================== */

export type Semana = {
  /** Cajas del rayo que se llevó esa semana. Una por página de resumen. */
  ideas: number;
  /** Minutos leídos esa semana. */
  minutos: number;
};

/* La caja del dibujo. Se piensa en estas unidades y el SVG se encoge solo al
   ancho que le toque, así que no hay ni una medida escrita dos veces.

   DOS CARRILES Y NO UN PLANO COMPARTIDO. El primer intento puso los dos
   trazos en el mismo rectángulo, cada uno normalizado contra su máximo, y
   salió mal de una manera que solo se ve al dibujarlo: como las ideas van más
   o menos a un tercio de los minutos, las dos líneas normalizadas describen
   casi la misma forma y se tapan la una a la otra. Quedaba un trazo verde con
   unos puntos dorados asomando por debajo, o sea una gráfica de una serie
   pintada dos veces.

   Así que cada serie tiene su franja, una encima de otra, y comparten el eje
   de abajo. Es lo mismo que hace cualquier panel con dos magnitudes que no se
   miden igual, y aquí además dice la verdad: las alturas de un carril NO se
   pueden comparar con las del otro, y separarlos lo deja claro sin tener que
   escribirlo. */
const CAJA = { ancho: 312, alto: 138 };
const MARGEN = { arriba: 8, abajo: 22, lado: 10 };
/** Alto de cada franja y el aire entre las dos. */
const CARRIL = 48;
const HUECO = 12;
/** El suelo de la franja n: es la línea del cero de esa serie. */
const suelo = (n: number) => MARGEN.arriba + n * (CARRIL + HUECO) + CARRIL;

/** Las dos series, con su nombre y su color. El orden manda en todo: cifras,
 *  trazos y leyenda se recorren desde aquí y no puede descuadrarse ninguno. */
const SERIES = [
  { clave: "ideas" as const, rotulo: "ideas clave", color: "var(--serie-a)" },
  { clave: "minutos" as const, rotulo: "minutos leídos", color: "var(--serie-b)" },
];

/** El lunes de la semana a la que pertenece una fecha. */
function lunesDe(d: Date): Date {
  const l = new Date(d);
  /* getDay() da 0 para domingo; el lunes es el día 1, así que el domingo hay
     que retroceder seis y no cero. */
  const desplaza = (l.getDay() + 6) % 7;
  l.setDate(l.getDate() - desplaza);
  l.setHours(0, 0, 0, 0);
  return l;
}

/** «4/8» para las semanas viejas y «Esta» para la de ahora. */
function etiquetas(cuantas: number, hoy = new Date()): string[] {
  const lunes = lunesDe(hoy);
  const fuera: string[] = [];
  for (let i = cuantas - 1; i >= 0; i--) {
    if (i === 0) {
      fuera.push("Esta");
      continue;
    }
    const d = new Date(lunes);
    d.setDate(d.getDate() - i * 7);
    fuera.push(`${d.getDate()}/${d.getMonth() + 1}`);
  }
  return fuera;
}

export function Crecimiento({
  semanas,
  reducido,
}: {
  /** De la más vieja a la de ahora. La última es la semana en curso. */
  semanas: Semana[];
  reducido: boolean;
}) {
  const ultima = semanas.length - 1;
  const [elegida, setElegida] = useState(ultima);

  const rotulos = useMemo(() => etiquetas(semanas.length), [semanas.length]);

  /* El paso entre columnas sale de repartir el ancho útil, no de un número
     escrito a mano: así la gráfica aguanta cinco semanas o diez sin tocar
     nada más que el array que llega. */
  const paso = (CAJA.ancho - MARGEN.lado * 2) / Math.max(semanas.length - 1, 1);
  const equis = (i: number) => MARGEN.lado + i * paso;

  /* Un techo por serie, con un 14 % de aire para que el pico no toque el
     borde de su franja. El suelo de cada franja es el CERO de verdad, no el
     mínimo de la serie: estirar la escala hasta el mínimo llenaría el carril
     y haría espectacular cualquier subida de tres unidades. El `Math.max`
     contra 1 evita dividir por cero en una semana entera en blanco. */
  const techos = {
    ideas: Math.max(...semanas.map((s) => s.ideas), 1) * 1.14,
    minutos: Math.max(...semanas.map((s) => s.minutos), 1) * 1.14,
  };
  const ye = (v: number, clave: "ideas" | "minutos", carril: number) =>
    suelo(carril) - CARRIL * (v / techos[clave]);

  const trazo = (clave: "ideas" | "minutos", carril: number) =>
    semanas
      .map((s, i) => `${i === 0 ? "M" : "L"} ${equis(i).toFixed(1)} ${ye(s[clave], clave, carril).toFixed(1)}`)
      .join(" ");

  /* La banda se centra en la columna elegida, pero sin salirse del lienzo: en
     la primera semana y en la última se quedaría medio fuera, y el SVG dibuja
     por fuera de su caja —lleva `overflow: visible` para que los puntos de
     los extremos no se corten—, así que se vería un rectángulo colgando del
     borde de la tarjeta. */
  const bandaAncho = paso * 0.58;
  const bandaX = Math.min(
    Math.max(equis(elegida) - bandaAncho / 2, MARGEN.lado - 8),
    CAJA.ancho - bandaAncho - (MARGEN.lado - 8),
  );

  const actual = semanas[elegida];
  const anterior = elegida > 0 ? semanas[elegida - 1] : undefined;

  return (
    <section className="crece" aria-label="Crecimiento semanal">
      {/* Las dos cifras, con su diferencia debajo. Es la fila que la
          referencia deja en tres números pelados. */}
      <div className="crece-cifras">
        {SERIES.map((s) => (
          <div className="crece-cifra" key={s.clave} style={{ ["--serie" as string]: s.color }}>
            <Contador valor={actual[s.clave]} reducido={reducido} />
            <span className="crece-cifra-rotulo">{s.rotulo}</span>
            <Diferencia
              ahora={actual[s.clave]}
              antes={anterior?.[s.clave]}
              reducido={reducido}
            />
          </div>
        ))}
      </div>

      <div className="crece-lienzo">
        <svg viewBox={`0 0 ${CAJA.ancho} ${CAJA.alto}`} className="crece-svg" aria-hidden>
          <defs>
            {/* El halo de cada trazo: el mismo camino, borroso y por debajo.
                Es lo que hace que una línea de 2,4 puntos no parezca un pelo
                sobre un fondo oscuro. Misma receta que el arco de la meta. */}
            <filter id="crece-halo" x="-20%" y="-40%" width="140%" height="180%">
              <feGaussianBlur stdDeviation="4" />
            </filter>
          </defs>

          {/* El suelo de cada franja, y nada más. No hay renglones a media
              altura ni números al lado: con dos escalas distintas, un número
              ahí sería mentira. La línea de abajo es el cero de esa serie, y
              eso sí es verdad en las dos. */}
          {[0, 1].map((n) => (
            <line
              key={n}
              x1={MARGEN.lado - 4}
              x2={CAJA.ancho - MARGEN.lado + 4}
              y1={suelo(n)}
              y2={suelo(n)}
              stroke="rgba(242, 236, 225, 0.1)"
              strokeWidth="1"
            />
          ))}

          {/* La banda de la semana elegida, por detrás de todo. Cubre las dos
              franjas y el hueco entre ellas —es UNA semana, no dos— y se para
              justo en el suelo del carril de abajo, sin comerse los rótulos
              del eje. */}
          <motion.rect
            className="crece-banda"
            width={bandaAncho}
            height={suelo(1) - MARGEN.arriba + 10}
            y={MARGEN.arriba - 5}
            rx="11"
            animate={{ x: bandaX }}
            transition={reducido ? { duration: 0.01 } : spring}
          />

          {SERIES.map((s, n) => (
            <g key={s.clave}>
              <motion.path
                d={trazo(s.clave, n)}
                fill="none"
                stroke={s.color}
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#crece-halo)"
                opacity="0.55"
                initial={reducido ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={reducido ? { duration: 0.01 } : { duration: 1.1, delay: 0.18 + n * 0.1, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.path
                d={trazo(s.clave, n)}
                fill="none"
                stroke={s.color}
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={reducido ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={reducido ? { duration: 0.01 } : { duration: 1.1, delay: 0.18 + n * 0.1, ease: [0.16, 1, 0.3, 1] }}
              />

              {semanas.map((sem, i) => (
                <motion.circle
                  key={i}
                  cx={equis(i)}
                  cy={ye(sem[s.clave], s.clave, n)}
                  r={i === elegida ? 5.4 : 3.5}
                  fill={s.color}
                  /* El punto lleva el fondo de la tarjeta por contorno, así
                     que el trazo pasa por detrás y no lo atraviesa. */
                  stroke="var(--crece-fondo)"
                  strokeWidth="2.6"
                  initial={reducido ? false : { scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={reducido ? { duration: 0.01 } : { ...springPop, delay: 0.55 + i * 0.055 + n * 0.08 }}
                  style={{ originX: `${equis(i)}px`, originY: `${ye(sem[s.clave], s.clave, n)}px` }}
                />
              ))}
            </g>
          ))}

          {/* Los rótulos del pie */}
          {rotulos.map((r, i) => (
            <text
              key={r + i}
              className="crece-eje"
              x={equis(i)}
              y={CAJA.alto - 5}
              textAnchor="middle"
              data-activa={i === elegida}
            >
              {r}
            </text>
          ))}

          {/* Y encima de todo, las zonas de toque: una columna entera por
              semana. Apuntar a un punto de tres puntos y medio con el dedo no
              es posible; a una columna de sesenta, sí. */}
          {semanas.map((_, i) => (
            <rect
              key={i}
              className="crece-toque"
              x={equis(i) - paso / 2}
              y="0"
              width={paso}
              height={CAJA.alto}
              onClick={() => setElegida(i)}
              role="button"
              tabIndex={0}
              aria-label={`Semana ${rotulos[i]}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setElegida(i);
              }}
            />
          ))}
        </svg>
      </div>

      <div className="crece-leyenda">
        {SERIES.map((s) => (
          <span className="crece-clave" key={s.clave}>
            <i style={{ background: s.color }} aria-hidden />
            {s.rotulo}
          </span>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------------
   La cifra que sube.

   Al entrar sube desde cero, y al cambiar de semana viaja desde el número que
   había hasta el nuevo en vez de saltar. El viaje es lo que hace visible que
   una semana tiene más que otra: un salto seco solo cambia unos dígitos.
   -------------------------------------------------------------------------- */
function Contador({ valor, reducido }: { valor: number; reducido: boolean }) {
  const v = useMotionValue(0);
  const texto = useTransform(v, (x) => String(Math.round(x)));

  useEffect(() => {
    if (reducido) {
      v.set(valor);
      return;
    }
    const control = animate(v, valor, { duration: 0.62, ease: [0.16, 1, 0.3, 1] });
    return () => control.stop();
  }, [valor, reducido, v]);

  return <motion.span className="crece-cifra-n">{texto}</motion.span>;
}

/* --------------------------------------------------------------------------
   La diferencia contra la semana anterior.

   Es la mitad del bloque: sin esto la cifra de arriba es un marcador. Sube en
   verde, baja en barro y se queda igual en gris, y la flecha se dibuja en vez
   de escribirse con un carácter —▲ y ▼ salen de una fuente distinta en cada
   sistema y en unos cuantos se ven enormes y descolocados—.
   -------------------------------------------------------------------------- */
function Diferencia({
  ahora,
  antes,
  reducido,
}: {
  ahora: number;
  antes?: number;
  reducido: boolean;
}) {
  if (antes === undefined) {
    return <span className="crece-delta" data-signo="cero">primera semana</span>;
  }
  const d = ahora - antes;
  const signo = d > 0 ? "sube" : d < 0 ? "baja" : "cero";

  return (
    <motion.span
      className="crece-delta"
      data-signo={signo}
      key={`${ahora}-${antes}`}
      initial={reducido ? false : { opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reducido ? { duration: 0.01 } : springSoft}
    >
      {d !== 0 && (
        <svg width="9" height="8" viewBox="0 0 9 8" aria-hidden>
          <path d={d > 0 ? "M4.5 0 L9 8 H0 Z" : "M4.5 8 L0 0 H9 Z"} fill="currentColor" />
        </svg>
      )}
      {d === 0 ? "igual que la anterior" : `${Math.abs(d)} ${d > 0 ? "más" : "menos"}`}
    </motion.span>
  );
}
