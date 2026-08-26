import { motion } from "framer-motion";
import { springPop, springSoft } from "./motion";

/* ==========================================================================
   LA CUENTA

   Va donde estaba el saludo. Ahí había un círculo con una inicial y la
   palabra «Hola», que es lo que sale cuando nadie ha dicho cómo se llama:
   un avatar falso y un saludo a nadie ocupando lo mejor de la pantalla.

   En su sitio va lo que la referencia de Pablo pone más abajo —«inicia
   sesión para garantizar que tu progreso y estadísticas no se pierdan»— y
   va ARRIBA a propósito: es la única cosa de esta pantalla que puede
   perderse entera, así que es la que tiene que verse antes.

   QUÉ SE HACE DISTINTO, Y POR QUÉ

   1. DICE LO QUE HAY EN JUEGO, CON LAS CIFRAS PUESTAS. «Tu progreso y
      estadísticas» es una frase que no cuesta nada leer y por eso no
      convence a nadie. Debajo del titular van los tres números de verdad
      —los días de racha, los libros y las horas— y son los mismos que la
      pantalla enseña dos dedos más abajo. Lo que se pierde deja de ser una
      idea abstracta y pasa a ser 3, 43 y 30 h.

   2. EL TITULAR VA EN SERIFA. Es lo único de todo el perfil que la lleva.
      La serifa es la letra de LEER en esta app —las páginas, las portadas—
      y aquí hace que la tarjeta no parezca un formulario: parece una frase
      que alguien ha escrito. El resto de la pantalla sigue en palo seco.

   3. LOS BOTONES SECUNDARIOS LLEVAN NOMBRE. La referencia pone tres
      cuadrados grises con un logotipo dentro y nada más. Un cuadrado gris
      no dice a dónde lleva, y en una pantalla donde todo lo demás está
      etiquetado, canta. Aquí son dos botones con su palabra escrita.
      Y son dos y no tres: Apple, Google y el correo cubren a todo el
      mundo; el cuarto solo añade una fila que mirar.

   4. NO ES LA TARJETA LLAMATIVA. «Desbloquea todo» está justo debajo en
      morado macizo y es la que vende. Esta va en oscuro con un filo de luz
      arriba, y el único color que tiene lo pone el dibujo. Si las dos
      gritaran, la de arriba —que además es GRATIS y le conviene a todo el
      mundo— perdería contra la que cuesta dinero.

   5. LA LETRA PEQUEÑA CONTESTA LA OBJECIÓN DE VERDAD. Quien no se
      registra no teme perder el progreso: teme que le publiquen algo o que
      le vendan el correo. Se dice en una línea y se acaba.
   ========================================================================== */

/** Horas y minutos, que es como se dice un total grande. */
function horas(minutos: number): string {
  const m = Math.round(minutos);
  const h = Math.floor(m / 60);
  return h === 0 ? `${m} min` : `${h} h`;
}

export function Cuenta({
  racha,
  libros,
  minutosTotales,
  reducido,
}: {
  racha: number;
  libros: number;
  minutosTotales: number;
  reducido: boolean;
}) {
  const enJuego = [
    { n: String(racha), pie: racha === 1 ? "día de racha" : "días de racha" },
    { n: String(libros), pie: libros === 1 ? "libro leído" : "libros leídos" },
    { n: horas(minutosTotales), pie: "leyendo" },
  ];

  return (
    <motion.section
      className="cuenta"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...springSoft, delay: 0.08 }}
      aria-label="Guarda tu progreso"
    >
      {/* El filo de luz de arriba. Un punto de crema al 14 % en el borde
          superior y nada más: es lo que hace que una caja oscura sobre un
          fondo oscuro se lea como un objeto y no como un hueco. */}
      <span className="cuenta-filo" aria-hidden />

      <div className="cuenta-alto">
        <div className="cuenta-texto">
          <h1>No pierdas lo que llevas</h1>
          <p>Ahora mismo vive solo en este teléfono.</p>
        </div>
        <IluGuardado reducido={reducido} />
      </div>

      {/* Los tres números en juego, separados por filetes. Sin caja propia:
          son parte del argumento del titular, no una tarjeta aparte. */}
      <div className="cuenta-juego">
        {enJuego.map((x, k) => (
          <motion.div
            className="cuenta-dato"
            key={x.pie}
            initial={reducido ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reducido ? { duration: 0.01 } : { ...springSoft, delay: 0.3 + k * 0.07 }}
          >
            <span className="cuenta-dato-n">{x.n}</span>
            <span className="cuenta-dato-pie">{x.pie}</span>
          </motion.div>
        ))}
      </div>

      <motion.button className="cuenta-apple" type="button" whileTap={{ scale: 0.975 }}>
        <GlyphApple />
        Continuar con Apple
      </motion.button>

      <div className="cuenta-otros">
        <motion.button className="cuenta-otro" type="button" whileTap={{ scale: 0.96 }}>
          <GlyphGoogle />
          Google
        </motion.button>
        <motion.button className="cuenta-otro" type="button" whileTap={{ scale: 0.96 }}>
          <GlyphSobre />
          Correo
        </motion.button>
      </div>

      {/* Una línea, y en un móvil de 360 también: con dos frases se partía y
          dejaba un «nada.» solo en el segundo renglón. Lo que sobraba era
          decir qué se guarda, que ya lo dicen los tres números de arriba. */}
      <p className="cuenta-letra">Nunca publicamos nada en tu nombre.</p>
    </motion.section>
  );
}

/* --------------------------------------------------------------------------
   EL DIBUJO: lo que llevas, y un candado que se cierra encima.

   La referencia pone una llave y un candado de galería de imágenes prediseñadas,
   sin relación con la app. Aquí el candado se cierra sobre una tarjeta que
   lleva DENTRO lo que se está guardando: la llama de la racha y las barras de
   la gráfica de crecimiento, las dos piezas que el usuario acaba de ver
   bajando por esta misma pantalla. El dibujo dice qué se guarda, no solo que
   algo se guarda.

   El arco del candado entra abierto y baja a cerrarse con un muelle. Es la
   única animación que cuenta algo en vez de decorar: pasa una vez, al
   aparecer la tarjeta, y no se repite.
   -------------------------------------------------------------------------- */
function IluGuardado({ reducido }: { reducido: boolean }) {
  return (
    <span className="cuenta-arte" aria-hidden>
      <svg viewBox="0 0 112 96">
        {/* El halo, en dos círculos y sin desenfoque: un `feGaussianBlur` de
            este tamaño cuesta más de pintar que el dibujo entero. */}
        <circle cx="58" cy="48" r="42" fill="var(--ochre)" opacity="0.07" />
        <circle cx="58" cy="48" r="27" fill="var(--ochre)" opacity="0.07" />

        <motion.g
          animate={reducido ? {} : { y: [0, -2.8, 0], rotate: [-0.7, 0.7, -0.7] }}
          transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: "56px", originY: "50px" }}
        >
          {/* La tarjeta con lo que llevas. Todo lo que va encima se coloca en
              la mitad izquierda: la derecha se la come el candado, que va por
              delante, y una barra escondida detrás de un candado es una barra
              que no se ha dibujado. */}
          <g transform="rotate(-8 36 47)">
            <rect x="4" y="23" width="64" height="49" rx="11" fill="var(--plum-deep)" />
            <rect x="4" y="23" width="64" height="49" rx="11" fill="none" stroke="var(--plum-light)" strokeWidth="1.2" opacity="0.5" />
            {/* La llama de la racha */}
            <g transform="translate(-6 5)">
              <path
                d="M25 31c4.6 3.1 6.6 6.4 6.6 9.6 0 3.8-2.9 6.6-6.6 6.6s-6.6-2.8-6.6-6.6c0-2.3 1.2-4.1 2.4-5.2.1 1.4.9 2.3 1.9 2.3 1.3 0 2.1-1.1 2.1-3.1 0-1.2-.3-2.4-.4-3.6Z"
                fill="var(--fuego)"
              />
            </g>
            {/* Y las barras de la gráfica de crecimiento */}
            {[
              { x: 33, h: 11, c: "var(--ochre)" },
              { x: 42, h: 18, c: "var(--sage)" },
              { x: 51, h: 25, c: "var(--ochre)" },
            ].map((b) => (
              <rect key={b.x} x={b.x} y={57 - b.h} width="5.6" height={b.h} rx="2.8" fill={b.c} />
            ))}
            <rect x="14" y="62" width="21" height="3.6" rx="1.8" fill="var(--plum-light)" opacity="0.6" />
          </g>

          {/* El candado, por delante y montado sobre la esquina de la tarjeta.
              El arco entra abierto y baja a cerrar con un muelle: es la única
              animación de la tarjeta que cuenta algo, y pasa una sola vez. */}
          <motion.path
            d="M74 58v-10a9.5 9.5 0 0 1 19 0v10"
            fill="none"
            stroke="var(--ochre)"
            strokeWidth="5.4"
            strokeLinecap="round"
            initial={reducido ? false : { y: -10 }}
            animate={{ y: 0 }}
            transition={reducido ? { duration: 0.01 } : { ...springPop, delay: 0.62 }}
          />
          <rect x="64" y="56" width="39" height="31" rx="10" fill="var(--ochre)" />
          <circle cx="83.5" cy="68" r="4" fill="var(--night)" />
          <rect x="81.7" y="69.6" width="3.6" height="8" rx="1.8" fill="var(--night)" />
        </motion.g>
      </svg>
    </span>
  );
}

/* --------------------------------------------------------------------------
   Los tres logotipos.

   El de Apple y el de Google se dibujan como son porque están puestos donde
   deben: identificando el botón que lleva a ese servicio. El de Apple va en
   una sola tinta, que es como su guía lo exige.
   -------------------------------------------------------------------------- */

function GlyphApple() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M16.24 12.86c-.03-2.75 2.25-4.07 2.35-4.13-1.28-1.87-3.27-2.13-3.98-2.16-1.7-.17-3.31.99-4.17.99-.86 0-2.19-.97-3.6-.94-1.86.03-3.57 1.08-4.53 2.74-1.93 3.35-.49 8.31 1.39 11.03.92 1.33 2.02 2.82 3.47 2.77 1.39-.06 1.92-.9 3.6-.9 1.68 0 2.16.9 3.63.87 1.5-.03 2.45-1.36 3.36-2.69 1.06-1.55 1.5-3.05 1.52-3.12-.03-.02-2.91-1.12-2.94-4.44Z"
        fill="currentColor"
        transform="translate(0 -2.2) scale(0.96)"
      />
      <path
        d="M13.72 4.92c.77-.93 1.29-2.22 1.15-3.5-1.11.04-2.45.73-3.24 1.65-.71.82-1.33 2.13-1.16 3.39 1.23.1 2.48-.62 3.25-1.54Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Un arco del anillo de la G, de `a` a `b` grados. Se calcula en vez de
 *  escribirse a mano: cuatro caminos con las mismas comas puestas en sitios
 *  distintos es donde se cuelan los errores que solo se ven al mirarlo. */
function arcoG(a: number, b: number) {
  const r = 8.4;
  const p = (g: number) => {
    const rad = (g * Math.PI) / 180;
    return `${(12 + r * Math.cos(rad)).toFixed(2)} ${(12 + r * Math.sin(rad)).toFixed(2)}`;
  };
  const grande = Math.abs(b - a) > 180 ? 1 : 0;
  return `M ${p(a)} A ${r} ${r} 0 ${grande} 1 ${p(b)}`;
}

function GlyphGoogle() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden>
      <g fill="none" strokeWidth="4.6" strokeLinecap="butt">
        <path d={arcoG(200, 310)} stroke="#ea4335" />
        <path d={arcoG(310, 352)} stroke="#4285f4" />
        <path d={arcoG(8, 100)} stroke="#34a853" />
        <path d={arcoG(100, 200)} stroke="#fbbc05" />
      </g>
      {/* La barra: entra por el hueco de la derecha hasta el centro */}
      <rect x="11.6" y="10.2" width="9.4" height="3.6" rx="0.6" fill="#4285f4" />
    </svg>
  );
}

function GlyphSobre() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden>
      <rect
        x="2.6" y="5.2" width="18.8" height="13.6" rx="3.2"
        fill="none" stroke="currentColor" strokeWidth="1.9"
      />
      <path
        d="M4.4 8.2 11.1 13a1.6 1.6 0 0 0 1.8 0l6.7-4.8"
        fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}
