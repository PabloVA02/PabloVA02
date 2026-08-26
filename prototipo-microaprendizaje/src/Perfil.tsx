import { motion, useReducedMotion } from "framer-motion";
import { Llama } from "./Racha";
import { MetaDiaria } from "./Meta";
import { Crecimiento, type Semana } from "./Crecimiento";
import { Cuenta } from "./Cuenta";
import { Suscripcion, type EstadoPago } from "./Suscripcion";
import { GlyphClose, GlyphTick } from "./glyphs";
import { spring, springPop, springSoft } from "./motion";

/* ==========================================================================
   El perfil.

   Aquí no hay contenido nuevo que leer: hay estado. Y el estado se ordena por
   lo que la gente viene a mirar, que no es lo mismo que lo que la app quiere
   enseñar. Primero la racha, que es lo único que se pierde si dejas de
   entrar. Después las cifras. Los ajustes, al final.

   EL ORDEN DE AGOSTO, con las capturas que trajo Pablo delante. Los cuatro
   bloques de datos van seguidos y en escalas que se agrandan, que es como se
   lee una vida de lector: la racha cuenta DÍAS, la meta cuenta el DÍA DE HOY
   en minutos, el crecimiento cuenta SEMANAS y los temas cuentan TODO lo
   leído. Después vienen las cosas que se hacen —anti-scroll, invitar, prueba
   de nivel— y al final lo que se configura.

   Lo que se ha copiado de la referencia es la anatomía: tarjetas oscuras
   apiladas en una columna, título de bloque fuera de la tarjeta, cifras de
   colores en fila. Lo que NO: su bloque de misión diaria, que Pablo descartó
   —y hace bien: la meta de hoy ya cuenta el día, y dos contadores del mismo
   día compitiendo es lo que hace que la gente deje de mirar los dos—, sus
   botones azules a toda anchura, sus emojis por icono, y su crecimiento
   semanal de tres números sin comparación ninguna. Ver `Crecimiento.tsx`.

   Cada bloque entra escalonado con muelle, y el retraso se acumula recorriendo
   la pantalla de arriba abajo, así que el orden de entrada es el orden de
   lectura.
   ========================================================================== */

const PASO = 0.055;

/** Horas y minutos, y para un cuadro pequeño solo las horas: «30 h» cabe y
 *  «30 h 47 min» no, y el minuto suelto no cambia nada de lo que se lee. */
function horas(minutos: number): string {
  const h = Math.floor(Math.round(minutos) / 60);
  return h === 0 ? `${Math.round(minutos)} min` : `${h} h`;
}

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
  racha: number;
  /** Sin esto no hay tarjeta de pase. Ver arriba. */
  suscrito: boolean;
  /** Minutos leídos desde siempre. Va en el cuadro de estadísticas. */
  minutosTotales: number;
  /** Y con esto la tarjeta sabe a quién le habla. Ver `Suscripcion.tsx`. */
  estadoPago?: EstadoPago;
  /** A dónde lleva el botón del aviso de suscripción: a la caja. */
  onSuscribirse?: () => void;
  /** La racha más larga que ha tenido. Ver la tarjeta de racha. */
  record: number;
  /** Seis semanas, de la más vieja a la de ahora. Ver `Crecimiento.tsx`. */
  historial: Semana[];
  /** Lo leído por categoría, de más a menos. Ver la tarjeta de temas. */
  temas: { nombre: string; n: number; color: string }[];
  /** Minutos leídos hoy, su meta y el total de siempre. */
  minutosHoy: number;
  meta: number;
  onMeta: (m: number) => void;
  onCerrar: () => void;
  onAjustes: () => void;
  onAntiScroll: () => void;
};

export function Perfil({
  racha,
  suscrito,
  minutosTotales,
  estadoPago,
  onSuscribirse,
  record,
  historial,
  temas,
  minutosHoy,
  meta,
  onMeta,
  onCerrar,
  onAjustes,
  onAntiScroll,
}: Props) {
  const reducido = !!useReducedMotion();
  const dias = semana(racha);
  const librosLeidos = temas.reduce((t, x) => t + x.n, 0);

  return (
    <motion.div
      className="perfil"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0, transition: spring }}
      exit={{ opacity: 0, y: 18, transition: { duration: 0.2 } }}
    >
      {/* La cabecera lleva título. Iba con dos botones y un hueco enorme en
          medio, y un hueco en medio de una barra no es aire: es una barra a
          la que le falta algo. */}
      <div className="perfil-head">
        <button className="icon-btn" onClick={onCerrar} aria-label="Cerrar perfil">
          <GlyphClose />
        </button>
        <h2 className="perfil-head-titulo">Tu progreso</h2>
        <button className="icon-btn" onClick={onAjustes} aria-label="Ajustes">
          <GlyphRueda />
        </button>
      </div>

      <div className="perfil-scroll">
        {/* EL ORDEN DE ESTAS DOS, y no es indiferente. Iba primero la cuenta y
            debajo el aviso de suscripción, porque registrarse es gratis y
            hacerse de pago cuesta dinero: parecía de buena educación poner
            delante lo que no cuesta. Pablo lo dio la vuelta y tiene razón por
            un motivo que no es de educación sino de para qué existe la
            pantalla. El perfil es donde alguien mira lo que lleva hecho, y
            justo ahí es donde una oferta encuentra a la persona más dispuesta
            a pagarla: acaba de ver su racha, sus semanas y sus temas. La
            cuenta puede esperar dos dedos más abajo; no se pierde, y quien la
            necesita la encuentra. */}
        {!suscrito && <Suscripcion estado={estadoPago} onSuscribirse={onSuscribirse} />}

        {/* Y aquí estaba el saludo: un círculo con una inicial y la palabra
            «Hola», que es lo que sale cuando nadie ha dicho todavía cómo se
            llama. Un avatar inventado y un saludo a nadie. En su sitio va la
            cuenta, que es la pieza que la referencia de Pablo tiene tres
            bloques más abajo. Ver `Cuenta.tsx`. */}
        <Cuenta />

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
            {/* El récord al lado del título, y no como cuarta cifra suelta en
                otra tarjeta: solo significa algo pegado al número de hoy. Es
                lo que convierte una racha corta en una meta —«llegaste a 12,
                vas por 3»— en vez de en un reproche. */}
            <div className="perfil-racha-alto">
              <h2>Tu racha</h2>
              <span className="perfil-record">
                Récord <strong>{record}</strong>
              </span>
            </div>
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
          <MetaDiaria minutos={minutosHoy} meta={meta} reducido={reducido} onMeta={onMeta} />
        </motion.div>

        {/* ESTADÍSTICAS, en una sola caja con cuatro cuadros dentro.

            Iban en dos bloques seguidos y sueltos —«Crecimiento semanal» y
            «Tus temas»—, cada uno con su título y su ficha. Pablo pidió el 26
            de agosto que se englobaran en un recuadro que diga Estadísticas y
            que los cuadros de dentro tengan tamaños distintos, estilo Apple.

            Y hay un motivo por debajo del gusto: las dos fichas contestaban
            preguntas de la misma familia —qué llevo leído— y estaban al mismo
            nivel que la racha, la meta o el aviso de suscripción, que son
            otra cosa. Agrupadas, el perfil pasa de ser una lista de nueve
            fichas a ser cuatro asuntos: quién eres, tu racha de hoy, tus
            estadísticas y lo que puedes hacer.

            Los cuatro cuadros y por qué cada tamaño:

              crecimiento   ancho y alto, porque lleva una gráfica y una
                            gráfica estrecha no se lee
              libros        pequeño: es una cifra
              horas         pequeño: es otra cifra, y las dos juntas se
                            comparan sin querer, que es lo que hace que una
                            parrilla se lea de un vistazo
              temas         ancho, porque es una barra partida en cinco y
                            necesita el ancho entero para que los tramos de
                            los últimos sigan siendo tramos

            El total de horas vuelve aquí. Estaba en la tarjeta de la meta del
            día —«En total 30 h 47 min»— y se cayó al pasar el arco a barra;
            este es su sitio de verdad, porque es una estadística y no una
            meta. */}
        <motion.section
          className="perfil-bloque"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: orden(4) }}
        >
          <h2 className="perfil-titulo-bloque">Estadísticas</h2>
          <div className="stats">
            <div className="stats-caja stats-ancha">
              <p className="stats-rotulo">Crecimiento semanal</p>
              <Crecimiento semanas={historial} reducido={reducido} />
            </div>

            {/* Las dos cifras llevan el color de lo que cuentan, y son los
                mismos dos de la gráfica de arriba: el oro es lo aprendido y el
                naranja es el tiempo. Así los cuatro cuadros se leen como un
                sistema y no como cuatro números sueltos. */}
            <div className="stats-caja stats-cifra" style={{ ["--serie" as string]: "var(--serie-a)" }}>
              <span className="stats-n">{librosLeidos}</span>
              <span className="stats-pie">{librosLeidos === 1 ? "libro leído" : "libros leídos"}</span>
            </div>

            <div className="stats-caja stats-cifra" style={{ ["--serie" as string]: "var(--serie-b)" }}>
              <span className="stats-n">{horas(minutosTotales)}</span>
              <span className="stats-pie">leyendo</span>
            </div>

            <div className="stats-caja stats-ancha">
              <p className="stats-rotulo">Tus temas</p>
              <Temas temas={temas} retraso={orden(4)} reducido={reducido} />
            </div>
          </div>
        </motion.section>

        {/* Invitar: va aquí y no en ajustes porque no es una preferencia, es
            algo que se hace. En una lista de ajustes se lee como un trámite;
            aquí, al lado de la racha, se lee como una propuesta.

            La forma sale de la captura del 26 a las 19:26, medida encima: el
            titular arriba a la izquierda a 21 del filo, el dibujo de 70 × 70
            a su derecha y a la misma altura, el párrafo debajo del titular en
            tres renglones y el botón azul a toda anchura entre sangrados de
            16. El dibujo pasa de colgar de la esquina a alinearse con el
            texto, que es lo que hace que el bloque se lea como una sola cosa.

            El lema es distinto del suyo a propósito. La suya dice «Creciendo
            juntos / comparte con tus amigos un pase de invitado gratuito de 7
            días»; la nuestra dice lo mismo en nuestras palabras y con la
            objeción contestada por delante, que en un regalo siempre es la
            misma: qué me va a costar. */}
        <motion.section
          className="perfil-invitar"
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...springSoft, delay: orden(6) }}
        >
          <div className="perfil-invitar-alto">
            <div className="perfil-invitar-texto">
              <h2>No leas solo</h2>
              <p>Regala siete días de todo a quien tú quieras. Sin tarjeta y sin compromiso.</p>
            </div>
            <Entradas reducido={reducido} />
          </div>
          <motion.button className="perfil-invitar-boton" whileTap={{ scale: 0.98 }}>
            Invitar amigos
          </motion.button>
        </motion.section>

        {/* Anti-scroll. Tenía color propio —un tinte de barro— y letra propia,
            de cuando era la única fila de la pantalla. Ahora que todo lo de
            arriba usa la misma tarjeta, ese tinte se leía como un error, así
            que va con el relleno y el filete de las demás. Lo que la distingue
            es el dibujo, que ya es bastante. */}
        <motion.button
          className="perfil-fila"
          onClick={onAntiScroll}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...springSoft, delay: orden(6) }}
        >
          <span className="perfil-anti-marca">
            <ManoAntiScroll reducido={reducido} />
          </span>
          <div className="perfil-fila-texto">
            <p className="perfil-fila-titulo">Modo anti-scroll</p>
            <p className="perfil-fila-pie">Bloquea las apps que te distraen mientras aprendes</p>
          </div>
          <span className="perfil-fila-flecha">›</span>
        </motion.button>

        {/* Aquí iba una fila de tres cifras —leídas, favoritas, guardadas— y
            se ha quitado. Las tres estaban clavadas a cero porque ninguna se
            llegó a enchufar nunca, y encima las tres ya tenían su sitio: lo
            leído está en el subtítulo del nombre y en la barra de temas, y a
            favoritas y guardadas se entra por «Mi contenido», que es una lista
            de verdad y no un número. Tres ceros seguidos justo debajo de una
            gráfica que sí dice algo hacían parecer rota la pantalla entera. */}

        {/* Aquí acaba el perfil, y acaba antes que antes. Se han ido cuatro
            bloques que Pablo mandó quitar el 26 de agosto, y los cuatro
            sobraban por el mismo motivo: no eran progreso.

              prueba de nivel     una promesa de algo que no existe
              personaliza la app  seis casillas que llevan a lo mismo que el
                                  engranaje de la cabecera, dos dedos más
                                  arriba y en una pantalla hecha para eso
              mi contenido        cuatro listas que ya tienen su pestaña
                                  abajo, en Biblioteca
              la fila de ayuda    se queda, pero como lo que es

            Esta pantalla se llama «Tu progreso» y todo lo que quedaba abajo
            era un menú. Un menú al final de una pantalla de datos no lo mira
            nadie: se baja hasta el último número y se sube.

            Y LA AYUDA SE QUEDA, con la forma de la captura: título de sección
            fuera y un botón azul a toda anchura, de 56 de alto. Era una fila
            de flecha discreta, y el argumento entonces era que un soporte no
            debe pesar más que la racha. Sigue siendo cierto arriba; aquí
            abajo, siendo lo último que queda, discreto solo significa
            invisible. */}
        <motion.section
          className="perfil-bloque"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: orden(8) }}
        >
          <h2 className="perfil-titulo-bloque">¿Necesitas ayuda?</h2>
          <motion.button className="perfil-soporte" type="button" whileTap={{ scale: 0.98 }}>
            Contactar con soporte
          </motion.button>
        </motion.section>

        <motion.p
          className="perfil-version"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...springSoft, delay: orden(9) }}
        >
          Prototipo · compilado el {__SELLO__}
        </motion.p>
      </div>
    </motion.div>
  );
}

/* --------------------------------------------------------------------------
   TUS TEMAS

   Una sola barra partida en tramos y su lista debajo. No es una tarta: una
   tarta de cinco trozos obliga a comparar ángulos, que es lo que peor hace el
   ojo, y encima ocupa un cuadrado en una pantalla que es una columna. Una
   barra de una sola línea compara longitudes —lo que mejor hace el ojo— y
   cabe en catorce puntos de alto.

   La barra entra creciendo desde la izquierda, de una pieza y no tramo a
   tramo: son partes de un mismo total, así que tienen que llegar juntas.
   -------------------------------------------------------------------------- */

function Temas({
  temas,
  retraso,
  reducido,
}: {
  temas: { nombre: string; n: number; color: string }[];
  retraso: number;
  reducido: boolean;
}) {
  const total = temas.reduce((t, x) => t + x.n, 0) || 1;
  const porcentaje = (n: number) => Math.round((n / total) * 100);

  return (
    <div className="temas">
      <motion.div
        className="temas-barra"
        initial={reducido ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={reducido ? { duration: 0.01 } : { duration: 0.9, delay: retraso + 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {temas.map((t) => (
          <span
            key={t.nombre}
            className="temas-tramo"
            style={{ width: `${(t.n / total) * 100}%`, background: t.color }}
          />
        ))}
      </motion.div>

      <ul className="temas-lista">
        {temas.map((t, k) => (
          <motion.li
            key={t.nombre}
            initial={reducido ? false : { opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={reducido ? { duration: 0.01 } : { ...springSoft, delay: retraso + 0.22 + k * 0.05 }}
          >
            <i style={{ background: t.color }} aria-hidden />
            <span className="temas-nombre">{t.nombre}</span>
            {/* El porcentaje delante del recuento: es lo que se compara con
                el tramo de la barra que tiene justo encima. El número crudo
                va detrás y en gris, para quien quiera el dato exacto. */}
            <span className="temas-pct">{porcentaje(t.n)} %</span>
            <span className="temas-n">{t.n}</span>
          </motion.li>
        ))}
      </ul>

      <motion.button className="temas-ajustar" whileTap={{ scale: 0.97 }}>
        Ajustar mis temas
      </motion.button>
    </div>
  );
}

/* --------------------------------------------------------------------------
   La rejilla de ajustes
   -------------------------------------------------------------------------- */


/* --- Iconos sueltos --- */

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


/* --------------------------------------------------------------------------
   EL BILLETE CON LA CARITA

   Lo mandó Pablo en PNG y aquí va redibujado en SVG, como el candado de la
   tarjeta de cuenta y como las dos tarjetas del aviso de suscripción: es un
   rectángulo redondeado con dos muescas y una carita dentro, o sea trescientos
   bytes de camino contra veintiséis kilos de imagen, y sin borrones a ningún
   tamaño. Los colores son los suyos, muestreados del fichero: rojo
   (255, 101, 90) y oro (244, 185, 66).

   Las medidas salen de medirle los píxeles y normalizarlas a 96 × 54, la
   proporción del original (735 × 411): radio 11, muescas de 6,8 centradas en
   la mitad de la altura y carita de 13,7 de radio en el centro.

   Antes había dos entradas dibujadas a mano que se balanceaban a ritmos
   distintos. Se quedan sin balanceo: en la captura de referencia el dibujo
   está quieto, y en una tarjeta que ya tiene un botón azul llamando, un
   dibujo moviéndose al lado es una segunda cosa pidiendo atención.
   -------------------------------------------------------------------------- */
function Entradas({ reducido }: { reducido: boolean }) {
  const R = "#ff655a";
  const O = "#f4b942";
  return (
    <span className="perfil-invitar-arte" aria-hidden>
      <motion.svg
        viewBox="0 0 96 54"
        initial={reducido ? false : { scale: 0.72, opacity: 0, rotate: -8 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={reducido ? { duration: 0.01 } : { ...springPop, delay: 0.3 }}
      >
        <defs>
          {/* Las dos muescas se quitan con una máscara y no se dibujan como
              parte del contorno: así el billete sigue siendo un rectángulo
              redondeado normal y las muescas son dos círculos, que es como
              está hecho el fichero. */}
          <mask id="curva-billete">
            <rect x="0" y="0" width="96" height="54" fill="#fff" />
            <circle cx="0" cy="27" r="6.8" fill="#000" />
            <circle cx="96" cy="27" r="6.8" fill="#000" />
          </mask>
        </defs>
        <g mask="url(#curva-billete)">
          <rect x="0" y="0" width="96" height="54" rx="11" fill={R} />
        </g>
        <circle cx="47.9" cy="26.9" r="13.7" fill={O} />
        <circle cx="42.7" cy="21.7" r="1.9" fill={R} />
        <circle cx="53.2" cy="21.7" r="1.9" fill={R} />
        <path
          d="M41.4 29.6 a7 7 0 0 0 13 0"
          fill="none"
          stroke={R}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </motion.svg>
    </span>
  );
}

/* ---------------------------------------------------------------------------
   La mano del modo anti-scroll — el icono que mandó Pablo el 26 de agosto,
   redibujado en vectores en vez de pegar el PNG.

   Está montada como está montado el fichero original, y por eso se dibuja dos
   veces: primero todas las piezas en oro con un filete gordo alrededor
   (fill + stroke del mismo color, así el trazo ENGORDA la silueta seis
   unidades por lado), y encima las mismas piezas en rojo sin filete. El oro
   que se ve es lo que asoma por fuera del rojo: el contorno de la mano, y
   —donde dos piezas rojas quedan separadas— las rayas que separan los dedos
   y la del hueco del pulgar. Dibujarlo así ahorra tener que trazar a mano
   esas rayas interiores, que es donde se nota el dibujo hecho a ojo.

   Las medidas están normalizadas a 200 × 200 desde el PNG (1254 × 1254), y
   salen de escanearlo fila a fila separando fondo, oro y rojo:

     dedos      cuatro cápsulas; la del corazón vertical y las otras tres
                abiertas en abanico (el índice cae hacia dentro, el anular y
                el meñique hacia el centro)
     rayas      las de los dedos mueren a media palma —y 88, y 89, y 101—,
                y el hueco del pulgar baja hasta y 115
     colores    rojo (250, 91, 74) y oro (248, 187, 49)

   El vaivén es el mismo gesto de antes: una mano de «para» que se balancea
   despacio. Se apaga con `reducido`.
   -------------------------------------------------------------------------- */
const MANO_ROJO = "#fa5b4a";
const MANO_ORO = "#f8bb31";

const MANO_DEDOS = [
  { x1: 59.5, y1: 38.5, x2: 73, y2: 96, w: 27 },
  { x1: 101, y1: 24, x2: 101, y2: 96, w: 28 },
  { x1: 142, y1: 40.8, x2: 130, y2: 96, w: 26 },
  { x1: 173.5, y1: 72, x2: 163, y2: 93, w: 23 },
];

const MANO_PULGAR =
  "M27 93 C41 96 51 103 57 113 C62 122 62 132 56 140 C50 148 44 150 41 146 " +
  "C37 140 34 137 31 132 C24 124 16 118 14 108 C12 100 18 93 27 93 Z";

const MANO_PALMA =
  "M63 114 C70 98 78 89 90 86 C104 83 120 88 134 95 C148 102 160 99 176 97 " +
  "C171 103 168 105 166 112 C164 121 162 128 161 137 C160 147 158 157 154 166 " +
  "C150 175 143 183 133 187 C124 191 112 191 102 191 C92 191 80 190 71 186 " +
  "C61 182 53 174 48 165 C43 156 40 146 38 136 C44 128 54 121 63 114 Z";

function ManoAntiScroll({ reducido }: { reducido: boolean }) {
  const capa = (color: string, crece: number) => (
    <g fill={color} stroke={color} strokeWidth={crece} strokeLinejoin="round">
      {MANO_DEDOS.map((d, i) => (
        <line
          key={i}
          x1={d.x1}
          y1={d.y1}
          x2={d.x2}
          y2={d.y2}
          stroke={color}
          strokeWidth={d.w + crece}
          strokeLinecap="round"
        />
      ))}
      <path d={MANO_PULGAR} />
      <path d={MANO_PALMA} />
    </g>
  );
  return (
    <motion.svg
      viewBox="0 0 200 200"
      width="36"
      height="36"
      aria-hidden
      style={{ originY: 0.85 }}
      animate={reducido ? {} : { rotate: [-7, 7, -7] }}
      transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
    >
      {capa(MANO_ORO, 12)}
      {capa(MANO_ROJO, 0)}
    </motion.svg>
  );
}
