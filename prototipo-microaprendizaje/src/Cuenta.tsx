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
          <CandadoYLlave />
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
        <motion.button className="cuenta-otro" type="button" whileTap={{ scale: 0.94 }} aria-label="Continuar con Facebook">
          <GlyphFacebook />
        </motion.button>
        <motion.button className="cuenta-otro" type="button" whileTap={{ scale: 0.94 }} aria-label="Continuar con tu correo">
          <GlyphSobre />
        </motion.button>
      </div>
    </motion.section>
  );
}

/* --------------------------------------------------------------------------
   EL CANDADO Y LA LLAVE

   Lo mandó Pablo en PNG y aquí va redibujado en SVG, por lo mismo que las dos
   tarjetas del aviso de suscripción: son figuras planas —un rectángulo
   redondeado, un arco grueso, un círculo y una barra dentada—, así que en SVG
   pesan trescientos bytes en vez de treinta y tres kilos y no se ven borrosas
   a ningún tamaño. Los colores son los suyos, muestreados del fichero: rojo
   (255, 101, 90) y oro (244, 185, 66), los mismos de las tarjetas rojas.

   Las medidas salen de medirle los píxeles al PNG y normalizarlas a una caja
   de 96 × 58, que es la proporción del original (881 × 526).
   -------------------------------------------------------------------------- */

const ROJO = "#ff655a";
const ORO = "#f4b942";

function CandadoYLlave() {
  return (
    <svg viewBox="0 0 96 58" aria-hidden>
      {/* El arco del candado, dibujado como trazo grueso y no como contorno
          cerrado: son dos rectas y un semicírculo, y con un trazo de 7,1 sale
          exactamente el grosor del original sin tener que calcular las dos
          caras del arco. */}
      <path
        d="M11.8 27 V15.8 a12.2 12.2 0 0 1 24.4 0 V27"
        fill="none"
        stroke={ROJO}
        strokeWidth="7.1"
      />
      <rect x="0" y="25.4" width="48" height="31.9" rx="5.5" fill={ROJO} />
      {/* La cerradura: círculo y cuña, como en el fichero */}
      <circle cx="23.9" cy="37.4" r="2.6" fill={ORO} />
      <path d="M22.3 39.6 h3.2 l1 5.6 h-5.2 Z" fill={ORO} />

      {/* La llave: cabeza con su ojo y la barra dentada */}
      <circle cx="57.2" cy="28.6" r="11.4" fill={ORO} />
      <circle cx="57.2" cy="28.6" r="4.9" fill={ROJO} />
      <path d="M62 25.6 H96 V38.6 H90 V31.6 H85 V36.6 H79 V31.6 H62 Z" fill={ORO} />
    </svg>
  );
}

/* --------------------------------------------------------------------------
   Los cuatro logotipos.

   Se dibujan como son porque están puestos donde deben: identificando el
   botón que lleva a ese servicio. El de Apple va en una sola tinta —la crema
   de la app sobre botón oscuro—, que es como su guía lo pide.

   Los dos primeros estaban mal hechos y Pablo los devolvió el 26 de agosto:
   «los símbolos hazlos mejores, los de Google y Apple, que están deformados».
   Lo estaban, y por la misma razón los dos: se habían construido en vez de
   dibujado.

   La manzana eran dos caminos, cuerpo y hoja, y al cuerpo se le había puesto
   encima un `transform` con traslación y escala para cuadrarlo. La hoja no lo
   llevaba, así que se quedaba flotando fuera de sitio y el cuerpo salía chato.
   Ahora es la silueta de verdad, un solo camino, sin transformaciones.

   La G eran cuatro arcos de circunferencia con trazo grueso y un rectángulo
   metido por la derecha. Un arco de trazo tiene los dos extremos cortados a
   escuadra, y la G de Google no: sus cuatro tramos acaban en diagonales y en
   escalones, y la barra sale del anillo con un pico. Con arcos eso no se puede
   hacer, y lo que salía era una tarta partida. Ahora son los cuatro caminos
   cerrados del logotipo, cada uno con su color.

   El de Facebook entra ahora, que lo pidió también. Va en su disco azul y no
   en una sola tinta como el sobre: sin el disco, una efe blanca suelta al lado
   de la G de colores no se lee como una marca, se lee como una letra.
   -------------------------------------------------------------------------- */

function GlyphApple() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08Zm-5.02-13.03c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

function GlyphGoogle() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.57c2.08-1.92 3.28-4.74 3.28-8.09Z"
        fill="#4285f4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.76c-.99.66-2.25 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
        fill="#34a853"
      />
      <path
        d="M5.84 14.11a6.6 6.6 0 0 1 0-4.22V7.05H2.18a11 11 0 0 0 0 9.9l3.66-2.84Z"
        fill="#fbbc05"
      />
      <path
        d="M12 5.38c1.62 0 3.07.56 4.21 1.65l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38Z"
        fill="#ea4335"
      />
    </svg>
  );
}

function GlyphFacebook() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="11" fill="#1877f2" />
      <path
        d="M13.6 23v-8.8h2.95l.44-3.42H13.6V8.6c0-.99.28-1.66 1.7-1.66h1.81V3.88c-.31-.04-1.39-.13-2.64-.13-2.61 0-4.4 1.6-4.4 4.53v2.5H7.11v3.42h2.96V23h3.53Z"
        fill="#fff"
      />
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
