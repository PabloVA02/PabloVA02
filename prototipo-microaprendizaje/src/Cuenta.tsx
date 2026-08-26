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

   LA FORMA ES LA DE LA SEGUNDA CAPTURA, la del 26 de agosto por la tarde:
   símbolo a la izquierda, titular a su derecha con la primera palabra en
   color, el párrafo colgando del titular, un botón de Apple a toda anchura y
   debajo dos cuadrados con el logotipo suelto.

   Estuvo con tres botones iguales apilados, cada uno con su frase. Se leían
   mejor, pero costaban 42 puntos más para decir lo mismo, y Pablo devolvió la
   tarjeta por alta. El reparto de la captura resuelve las dos cosas a la vez:
   Apple es obligatorio en su tienda y va entero; los otros dos son
   alternativas y no necesitan una fila cada uno.

   FACEBOOK SE CAE, y no por sitio. Con dos huecos hay que elegir, y entre
   Google y Facebook no hay debate: por Google entra la mitad de la gente y
   Facebook es además el que más recelo da al registrarse. Quedan los tres que
   cubren a todo el mundo: Apple, Google y el correo.
   ========================================================================== */

export function Cuenta() {
  return (
    <motion.section
      className="cuenta"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...springSoft, delay: 0.08 }}
      aria-label="Guarda tu progreso"
    >
      {/* Símbolo a la izquierda y el texto a su derecha, como la captura del
          26 de agosto. El párrafo cuelga del titular y no del filo de la
          tarjeta: los dos empiezan en la misma vertical, pasada la anchura del
          símbolo, y eso es lo que hace que el bloque se lea como una sola
          cosa y no como un icono con dos textos sueltos debajo. */}
      <div className="cuenta-alto">
        <motion.span
          className="cuenta-sello"
          aria-hidden
          initial={{ scale: 0.6, opacity: 0, rotate: -12 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ ...springSoft, delay: 0.26 }}
        >
          🛡️
        </motion.span>
        <div className="cuenta-col">
          {/* La primera palabra en color, como la suya. Y el color es el del
              fuego de la racha, que es lo que se está protegiendo. */}
          <h2 className="cuenta-titulo">
            <b>Guarda</b> tu racha y tu biblioteca
          </h2>
          <p className="cuenta-texto">
            Estás entrando como invitado. Regístrate y no pierdas nada.
          </p>
        </div>
      </div>

      {/* Apple arriba y a toda anchura, y los otros dos en cuadrado y debajo:
          es el reparto de la captura, y funciona porque Apple es obligatorio
          en su tienda y los demás son alternativas. Antes eran tres botones
          iguales apilados, que ocupaban 42 puntos más para decir lo mismo. */}
      <motion.button className="cuenta-apple" type="button" whileTap={{ scale: 0.98 }}>
        <GlyphApple />
        Continuar con Apple
      </motion.button>

      <div className="cuenta-otros">
        <motion.button className="cuenta-otro" type="button" whileTap={{ scale: 0.94 }} aria-label="Continuar con Google">
          <GlyphGoogle />
        </motion.button>
        <motion.button className="cuenta-otro" type="button" whileTap={{ scale: 0.94 }} aria-label="Continuar con tu correo">
          <GlyphSobre />
        </motion.button>
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
    <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden>
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
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
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

function GlyphSobre() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
      <rect x="2.6" y="5.2" width="18.8" height="13.6" rx="3.2" fill="none" stroke="currentColor" strokeWidth="1.9" />
      <path
        d="M4.4 8.2 11.1 13a1.6 1.6 0 0 0 1.8 0l6.7-4.8"
        fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}
