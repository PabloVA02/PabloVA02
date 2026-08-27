import { motion } from "framer-motion";
import { Crecimiento, type Semana } from "./Crecimiento";
import { spring, springSoft } from "./motion";
import { GlyphClose } from "./glyphs";

/* ==========================================================================
   ESTADÍSTICAS, EN SU PROPIA PANTALLA

   Pablo, el 27 de agosto: «en el perfil la zona de estadísticas debe ser un
   recuadro como los que tenemos que ponga Estadísticas —ahora te paso su
   emoticono— y una vez lo abres te aparece todo lo que tenemos, pero no en un
   mismo recuadro, sino mejor colocado todo».

   QUÉ CAMBIA Y POR QUÉ ESTÁ BIEN. En el perfil había una caja con cuatro
   cuadros dentro: la gráfica, dos cifras y la barra de temas. Cabían, pero
   cabían apretados: la gráfica tenía 150 puntos de alto para seis semanas y
   dos series, y la barra de temas repartía cinco tramos en 280 de ancho menos
   dos rellenos. Todo se leía, nada se miraba.

   Sacarlo a su pantalla arregla las dos cosas a la vez:

   · El perfil pasa a ser lo que tiene que ser, una lista corta de asuntos
     —quién eres, tu racha, tus estadísticas, lo que puedes hacer—, con las
     estadísticas en UNA fila como el modo anti-scroll o el soporte.
   · Y aquí dentro cada cosa tiene el sitio que pide: la gráfica a lo ancho de
     la pantalla, las cifras en su fila de dos, los temas con el ancho entero.

   NO ES «LA MISMA CAJA MÁS GRANDE», que era el riesgo. Son bloques separados,
   cada uno con su rótulo fuera y su tarjeta debajo, con el aire de siempre
   entre ellos. Un solo recuadro con cuatro cosas dentro obliga a mirarlas
   como si fueran comparables, y no lo son: una gráfica de seis semanas y el
   número de libros leídos no se leen igual ni se miran a la vez.
   ========================================================================== */

/** Minutos a «12 h 30 min», que es como se lee un total grande. */
function horas(minutos: number): string {
  const h = Math.floor(minutos / 60);
  const m = minutos % 60;
  if (!h) return `${m} min`;
  return m ? `${h} h ${m} min` : `${h} h`;
}

/** El icono de la pantalla y de la fila del perfil.
 *
 *  PROVISIONAL: Pablo dijo que manda el suyo. Está hecho en la familia de los
 *  demás —plano, sin filete y a dos tintas, rojo y oro—, como los dieciséis de
 *  `Temas.tsx`. Cambiarlo es cambiar esta función y nada más. */
export function GlyphEstadisticas({ tamano = 26 }: { tamano?: number }) {
  return (
    <svg viewBox="0 0 48 48" width={tamano} height={tamano} aria-hidden>
      <rect x="6" y="26" width="9" height="16" rx="2.6" fill="#fa5b4a" />
      <rect x="19.5" y="16" width="9" height="26" rx="2.6" fill="#f8bb31" />
      <rect x="33" y="7" width="9" height="35" rx="2.6" fill="#fa5b4a" />
    </svg>
  );
}

export function Estadisticas({
  historial,
  temas,
  librosLeidos,
  minutosTotales,
  racha,
  record,
  reducido,
  onCerrar,
  onTemas,
  Temas: PintaTemas,
}: {
  historial: Semana[];
  temas: { nombre: string; n: number; color: string }[];
  librosLeidos: number;
  minutosTotales: number;
  racha: number;
  record: number;
  reducido: boolean;
  onCerrar: () => void;
  onTemas?: () => void;
  /* La barra de temas vive en `Perfil.tsx` y se pasa entera. Moverla aquí
     obligaría a mover con ella su tarjeta y su animación, y sacarla a un
     fichero de dos piezas para que la usen dos pantallas es un fichero más
     para no ganar nada. */
  Temas: (p: {
    temas: { nombre: string; n: number; color: string }[];
    retraso: number;
    reducido: boolean;
    onAjustar?: () => void;
  }) => React.ReactElement;
}) {
  /* Las ideas: una por página escrita, que es la regla 3 de REDACCION. No hay
     contador de verdad en el prototipo, así que se deduce de lo leído, que es
     lo mismo que hace la gráfica. */
  const ideas = historial.reduce((t, s) => t + s.ideas, 0);
  const orden = (i: number) => (reducido ? 0 : 0.05 + i * 0.055);

  return (
    <motion.div
      className="stap"
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0, transition: spring }}
      exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
    >
      <div className="stap-head">
        <h1 className="stap-head-titulo">Estadísticas</h1>
        <button className="icon-btn" onClick={onCerrar} aria-label="Cerrar">
          <GlyphClose />
        </button>
      </div>

      <div className="stap-scroll">
        {/* LAS CUATRO CIFRAS, arriba del todo y sin tarjeta.
            Es lo que se viene a mirar y lo que se contesta de un vistazo, así
            que va antes que nada y sin caja: una caja alrededor de cuatro
            números los convierte en un formulario. */}
        <motion.div
          className="stap-cifras"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: orden(0) }}
        >
          <div className="stap-cifra">
            <span className="stap-n">{librosLeidos}</span>
            <span className="stap-pie">{librosLeidos === 1 ? "libro" : "libros"}</span>
          </div>
          <div className="stap-cifra">
            {/* «30 h 47 min» son diez caracteres y a 30 de cuerpo no caben en
                media pantalla: se partía en dos renglones y descuadraba la
                parrilla entera. Por encima de seis caracteres el número baja
                de cuerpo, que es lo que hace cualquier panel con cifras de
                largo variable. */}
            <span className="stap-n" data-largo={horas(minutosTotales).length > 6}>
              {horas(minutosTotales)}
            </span>
            <span className="stap-pie">leyendo</span>
          </div>
          <div className="stap-cifra">
            <span className="stap-n">{ideas}</span>
            <span className="stap-pie">ideas clave</span>
          </div>
          <div className="stap-cifra">
            <span className="stap-n">{record}</span>
            <span className="stap-pie">días de récord</span>
          </div>
        </motion.div>

        <motion.section
          className="stap-bloque"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: orden(1) }}
        >
          <h2 className="stap-rotulo">Crecimiento semanal</h2>
          <div className="stap-caja">
            <Crecimiento semanas={historial} reducido={reducido} />
          </div>
        </motion.section>

        <motion.section
          className="stap-bloque"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: orden(2) }}
        >
          <h2 className="stap-rotulo">Tus temas</h2>
          <div className="stap-caja">
            <PintaTemas
              temas={temas}
              retraso={orden(2)}
              reducido={reducido}
              onAjustar={onTemas}
            />
          </div>
        </motion.section>

        {/* La racha va la última y en una línea, no en una tarjeta: ya tiene la
            suya, grande y con la llama, tres dedos más arriba en el perfil.
            Repetirla aquí con el mismo tamaño sería contarla dos veces. */}
        <motion.p
          className="stap-nota"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: orden(3) }}
        >
          Llevas <strong>{racha}</strong> {racha === 1 ? "día" : "días"} seguidos.
          Tu mejor racha fueron <strong>{record}</strong>.
        </motion.p>
      </div>
    </motion.div>
  );
}
