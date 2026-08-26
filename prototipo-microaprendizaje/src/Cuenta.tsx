import { motion } from "framer-motion";
import { springSoft } from "./motion";

/* ==========================================================================
   LA CUENTA

   Va arriba del perfil, donde antes había un círculo con una inicial y la
   palabra «Hola»: un avatar inventado y un saludo a nadie ocupando lo mejor
   de la pantalla. Es la pieza que la referencia de Pablo tiene tres bloques
   más abajo, y sube arriba del todo porque es lo único de esta pantalla que
   se puede perder ENTERO —y todo lo que viene debajo, la racha, la meta, la
   gráfica y los temas, es exactamente lo que se perdería—.

   SIMPLE, Y ESO ES LA DECISIÓN. La primera versión traía las tres cifras en
   juego, un titular en serifa, un dibujo con un candado que se cerraba y una
   línea de letra pequeña. Estaba bien hecha y sobraba entera: en una tarjeta
   cuyo único trabajo es que alguien toque un botón, cada cosa que se añade es
   una cosa más que leer antes de tocarlo. Pablo la devolvió pidiendo lo que
   hay ahora, que es lo que hace la referencia y lo que hacen todas: una
   frase, un símbolo y los botones.

   TRES BOTONES Y DEL MISMO COLOR. Allí hay uno blanco a toda anchura y debajo
   tres cuadrados grises con un logotipo suelto dentro, sin nombre. Eso son
   dos cosas mal: un cuadrado gris no dice a dónde lleva, y el blanco de
   arriba convierte en segunda opción a Google, que es por donde entra la
   mitad de la gente. Aquí los tres son el mismo botón, con la misma altura y
   el mismo color, y cada uno con su palabra escrita. Lo único que tiene color
   propio es el logotipo, que es lo que hay que reconocer de un vistazo.

   EL ORDEN NO ES CASUAL: Apple primero porque su guía pide que, si se ofrece
   registro con otros servicios, el suyo no quede por debajo; Google después
   porque es el que más se usa; Facebook el tercero porque es el que menos y
   el que más recelo da.
   ========================================================================== */

export function Cuenta() {
  const entradas = [
    { nombre: "Apple", Logo: GlyphApple },
    { nombre: "Google", Logo: GlyphGoogle },
    { nombre: "Facebook", Logo: GlyphFacebook },
  ];

  return (
    <motion.section
      className="cuenta"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...springSoft, delay: 0.08 }}
      aria-label="Guarda tu progreso"
    >
      <div className="cuenta-alto">
        <p className="cuenta-texto">
          Inicia sesión para que tu racha y todo lo que has leído no se pierdan
        </p>
        {/* El candado con llave. La referencia dibuja las dos cosas por
            separado con imágenes prediseñadas; este glifo las trae en uno solo
            y ya viene con el color puesto. Va grande —46 puntos— y con un halo
            ocre detrás, que es lo único que hace falta para que un emoji deje
            de parecer un emoji y parezca una ilustración. */}
        <motion.span
          className="cuenta-sello"
          aria-hidden
          initial={{ scale: 0.6, opacity: 0, rotate: -12 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ ...springSoft, delay: 0.26 }}
        >
          🔐
        </motion.span>
      </div>

      <div className="cuenta-entradas">
        {entradas.map((e, k) => (
          <motion.button
            className="cuenta-entrada"
            key={e.nombre}
            type="button"
            whileTap={{ scale: 0.975 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springSoft, delay: 0.3 + k * 0.06 }}
          >
            <e.Logo />
            Continuar con {e.nombre}
          </motion.button>
        ))}
      </div>
    </motion.section>
  );
}

/* --------------------------------------------------------------------------
   Los tres logotipos.

   Se dibujan como son porque están puestos donde deben: identificando el
   botón que lleva a ese servicio. El de Apple va en una sola tinta —la crema
   de la app sobre botón oscuro—, que es como su guía lo pide.
   -------------------------------------------------------------------------- */

function GlyphApple() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" aria-hidden>
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
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <g fill="none" strokeWidth="4.6">
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

function GlyphFacebook() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="10.6" fill="#1877f2" />
      <path
        d="M14.9 12.6h-2v6.9h-2.9v-6.9H8.5v-2.5h1.5V8.7c0-2 .84-3.2 3.2-3.2h2v2.5h-1.24c-.92 0-.98.34-.98.98v1.1h2.23l-.31 2.5Z"
        fill="#fff"
      />
    </svg>
  );
}
