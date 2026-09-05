import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useAnimationControls,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useVelocity,
} from "framer-motion";
import { Portada, type Libro } from "./Biblioteca";
import { spring, springPop } from "./motion";
import { GlyphClose } from "./glyphs";

/* ==========================================================================
   EL DADO Y LA TRAGAPERRAS

   Pablo, el 27 de agosto: «el fuego que está al lado del icono del perfil
   quítalo y lo cambias por un dado; cuando se pulsa el dado entra una
   animación como una especie de máquina tragaperras, ese tipo de animación
   donde hace un efecto de ir muy rápido y parar en un libro lentamente… se
   verán las portadas de nuestros libros».

   POR QUÉ NO ES UNA ANIMACIÓN BAJADA DE INTERNET, que era lo que pedía. Una
   animación hecha —un Lottie, un GIF— es un dibujo cerrado: trae dentro sus
   propias frutas o sus propios sietes y no hay manera de meterle nuestras
   cubiertas. Y lo que hace que esto valga la pena es justamente que pasen
   nuestros cuatrocientos libros, con la cubierta que dibujó él. Así que el
   rodillo está hecho aquí, con la TÉCNICA de las buenas, que es lo que sí se
   puede copiar y son cuatro cosas:

   1. **Una sola curva de frenada, no dos animaciones pegadas.** El rodillo
      arranca a tope y se va parando con una bézier muy tumbada al final
      —`0.09, 0.62, 0.14, 1`—, que es la que hace que los últimos tres o
      cuatro libros pasen de uno en uno y se lean. Si se usa una `ease-out`
      normal, frena demasiado pronto y parece que se ha atascado.
   2. **El rebote del final.** Se pasa dieciséis puntos de largo y vuelve con
      un muelle. Es lo que hace una máquina de verdad —el rodillo tiene
      inercia y el tope lo devuelve— y es la diferencia entre parecer una
      máquina y parecer una lista con scroll.
   3. **LA ESTELA SALE DE LA VELOCIDAD DE VERDAD, y esto es la corrección del
      27 de agosto.** La primera versión llevaba un `filter: blur()` de CSS
      encendido por reloj, y Pablo lo cató a la primera: «quita el desenfoque
      ese, lo suyo es que de girar tan rápido se vea difuminado». Tenía toda
      la razón y son dos errores en uno:

        · El `blur()` de CSS es REDONDO: difumina igual a lo ancho que a lo
          alto, o sea que no parece movimiento, parece que la cámara está
          desenfocada. Lo que borra una cosa que pasa deprisa es una estela
          en la dirección en que pasa, y eso en la web solo lo hace un filtro
          SVG con `stdDeviation="0 N"`: cero en horizontal, N en vertical.
        · E iba por tiempo, no por velocidad, así que seguía borroso cuando
          ya casi estaba parado.

      Ahora la `N` la escribe la velocidad real del rodillo, fotograma a
      fotograma, con `useVelocity`. Cuando va a cinco mil puntos por segundo
      la estela mide catorce; cuando frena, se apaga sola; cuando para, es
      cero sin que nadie tenga que apagarla. Es lo que hace de verdad una
      cámara, y es la diferencia entre «va rápido» y «está mal enfocado».

      Y el filtro va sobre la CAJA DE LA VENTANA, que mide trescientos por
      doscientos noventa, no sobre la tira, que mide cuatro mil de alto.
      Puesto sobre la tira, el navegador tiene que filtrar cuatro mil puntos
      de alto en cada fotograma para enseñar doscientos noventa.
   4. **Las casillas tienen forma de libro**, no de cuadrado: alto por ancho
      de tres a dos y pico, con el lomo a la izquierda y el canto de las hojas
      a la derecha. Un cuadrado con un dibujo dentro es un azulejo; lo que
      tiene que pasar por delante de la ventana son libros.
   5. **El arranque tiene tirón hacia atrás y aceleración.** Un rodillo no
      empieza a girar a tope de golpe: primero cede un poco hacia atrás —el
      tirón de la palanca, lo que en animación se llama anticipación— y luego
      coge velocidad en un tercio de segundo. Sin eso el rodillo aparece ya
      lanzado y el ojo se pierde el principio.
   6. **El tamaño lo decide la pantalla, no una cifra escrita a mano.** Y esto
      es lo que arregló el corte que Pablo seguía viendo: la ventana medía 738
      puntos fijos, y en cuanto la pantalla es más baja que eso, los libros de
      arriba y de abajo se cortan contra el filo. Ahora se mide el hueco que
      hay y se reparte en TRES casillas exactas, así que caben tres libros
      enteros midan lo que midan la pantalla y el visor. Ver `useLayoutEffect`
      abajo.

   Y el que no quiera animaciones no la ve: con `prefers-reduced-motion` el
   rodillo aparece parado en el libro que le ha tocado, que es la información
   que había que dar.
   ========================================================================== */

/** LA PROPORCIÓN DE LA CASILLA: DOS TERCIOS, y no es una elección estética.
 *
 *  Es la proporción exacta en la que Pablo dibuja sus cubiertas —1024 × 1536,
 *  o sea 2:3, y así lo dice la cabecera de `libros/cubiertas.ts`—. Con esa
 *  misma proporción, el `object-fit: cover` de la imagen no recorta NADA: la
 *  cubierta entra entera.
 *
 *  Y de aquí venía lo de «los libros siguen sin verse enteros, hay partes
 *  cortadas». La casilla medía 170 por 230, que es 0,74, y una cubierta de
 *  0,667 metida ahí se recorta por arriba y por abajo: en «Los secretos de la
 *  mente millonaria» se comía la palabra MILLONARIA. No era la ventana
 *  cortando los libros, era la casilla cortando el dibujo.
 *
 *  SI ALGÚN DÍA CAMBIA LA PROPORCIÓN DE LAS CUBIERTAS, CAMBIA AQUÍ. */
const FORMA = 2 / 3;
/** El aire entre una casilla y la siguiente. */
const HUECO = 16;
/** Lo que el tambor sobresale del libro por cada lado, sumado.
 *
 *  Que el tambor NO llegue de borde a borde es lo que deja fondo alrededor
 *  para poder cerrar tocando fuera; ancho del todo, no había dónde tocar. Y de
 *  paso se parece más a una máquina: un tambor tiene lados. */
const MARCO = 34;
/** CUÁNTAS CASILLAS SE VEN A LA VEZ, y tiene que ser IMPAR.
 *
 *  Impar es lo que hace que no se corte ninguno: con un número impar de
 *  casillas el centro de la ventana cae en el CENTRO de una casilla, así que el
 *  libro premiado queda centrado Y los filos de la ventana caen justo en las
 *  juntas entre casillas. Con un número par el centro caería en una junta y
 *  habría que partir el premiado por la mitad. */
const CASILLAS = 3;
/** Cuántas cubiertas pasan antes de la buena. */
const VUELTA = 30;
/** Cuántas de esas pasan a velocidad constante, antes de empezar a frenar. */
const LANZADA = 15;
/** Cuántas se gasta el rodillo en coger velocidad. */
const ARRANQUE = 2.2;
/** Lo que se pasa de largo antes de volver a su sitio. */
const REBOTE = 16;
/** Lo que cede hacia atrás antes de salir. Es el tirón de la palanca. */
const TIRON = 20;

/* EL SITIO QUE NO ES DEL RODILLO. Arriba va el rótulo y abajo hace falta un
   dedo de aire: sin reservarlos, la ventana se come la pantalla entera, el
   libro de arriba acaba pegado al filo con el rótulo escrito encima y se LEE
   como cortado aunque esté entero. Y esto no es una manía: si un libro toca el
   borde de la pantalla, el ojo da por hecho que sigue por debajo. */
const RESERVA_ARRIBA = 46;
const RESERVA_ABAJO = 12;
/** Cuánto hay que bajar el rodillo para que las dos reservas queden donde
 *  tienen que quedar, ya que la ventana se centra. */
const DESPLAZA = (RESERVA_ARRIBA - RESERVA_ABAJO) / 2;

/** LA VELOCIDAD DE CRUCERO, en casillas por segundo.
 *
 *  Contada en casillas y no en puntos a propósito: así el rodillo va a la misma
 *  velocidad APARENTE en una pantalla grande y en una pequeña, aunque los
 *  libros midan distinto. Y de aquí salen todas las duraciones de abajo, que
 *  por eso no dependen del tamaño. */
const CRUCERO = 14;

/* Las duraciones, deducidas de CRUCERO. Ninguna lleva el tamaño dentro: al
   dividir distancia entre velocidad, la casilla se va en la cuenta.

   La del arranque sale de la pendiente de SALIDA de su curva, que en una
   bézier vale (1-y2)/(1-x2) y aquí son 1,8: para acabar justo a velocidad de
   crucero, el tramo tiene que durar 1,8 veces lo que duraría a esa velocidad. */
const CURVA_ARRANQUE: [number, number, number, number] = [0.4, 0, 0.75, 0.55];
const T_ARRANQUE = (1.8 * ARRANQUE) / CRUCERO;
const T_CRUCERO = (LANZADA - ARRANQUE) / CRUCERO;
const T_FRENO = 2.15;

/* Y LA CURVA DEL FRENO, que es la pieza delicada. Su pendiente de ENTRADA es
   y1/x1, y tiene que valer exactamente la velocidad con la que llega el tramo
   anterior partida por la media de éste, o hay un tirón en la junta:

     entrada = CRUCERO / ((VUELTA - LANZADA) / T_FRENO) = 14 · 2,15 / 15 = 2,01

   De ahí el 0,6 sobre 0,3. Y el 0,62 del segundo punto es lo que reparte el
   final: la curva se va tumbando durante el último 38 %, que es donde pasan
   los tres o cuatro últimos libros de uno en uno y se pueden leer.

   SI SE CAMBIA CRUCERO, LANZADA, VUELTA O T_FRENO HAY QUE REHACER ESTA CUENTA.
   Es la diferencia entre una máquina y una lista que se para. */
const CURVA_FRENO: [number, number, number, number] = [0.3, 0.6, 0.62, 1];

/** Cuántas cubiertas DISTINTAS pasan por el rodillo.
 *
 *  Doce, y no una por casilla, y es la corrección que más se nota. Con treinta
 *  y tres distintas el navegador tiene que descomprimir treinta y tres
 *  imágenes en el primer fotograma —las cubiertas de Pablo van incrustadas en
 *  el propio paquete—, y el rodillo arranca con las casillas EN BLANCO: se ve
 *  pasar una tira gris. Con doce repetidas hay doce descompresiones, se
 *  reaprovechan, y a la velocidad a la que van no hay ojo que note que la de
 *  arriba ya salió hace ocho. */
const BOLSA = 12;

/** La tira que se ve pasar: la bolsa repetida, la buena, y dos detrás para que
 *  la ventana no se quede a medias por abajo. */
function tirada(libros: Libro[], ganador: Libro): Libro[] {
  const suelta = () => libros[Math.floor(Math.random() * libros.length)];
  const bolsa: Libro[] = [];
  let intentos = 0;
  while (bolsa.length < BOLSA && intentos++ < 400) {
    const l = suelta();
    if (l !== ganador && !bolsa.includes(l)) bolsa.push(l);
  }
  const fuera: Libro[] = [];
  /* El paso de 7 —primo con 12— hace que la bolsa no salga siempre en el mismo
     orden. Recorriéndola del tirón se ve el bucle en cuanto frena. */
  for (let i = 0; i < VUELTA; i++) fuera.push(bolsa[(i * 7) % bolsa.length]);
  fuera.push(ganador);
  fuera.push(bolsa[3], bolsa[8]);
  return fuera;
}

/* --------------------------------------------------------------------------
   EL BOTÓN DE «SÁCAME UN LIBRO», EN LA CABECERA

   AQUÍ HAN PASADO CINCO DIBUJOS, y conviene que estén los cinco apuntados para
   que nadie vuelva a probar uno que ya se descartó:

   1. Un cuadrado de oro con cinco puntos rojos, dibujado por mí, meneándose
      cada cinco segundos. «Pon otro mucho más bonito con animación que
      encuentres por ahí, que sea más profesional.»
   2. El Lottie del emoji 🎲 de Noto, de Google, girando sobre sus tres ejes.
      «Nada, muy feo.» Y con razón: el cubo de Noto es plano, gris y de tres
      caras casi iguales; a treinta puntos es una mancha con puntos.
   3. Un dado plano de frente, en crema con los puntos en tinta, dibujado por
      mí. Se leía perfectamente, pero: «el dado no me gusta, quiero que sea
      en 3D».
   4. El dado 3D de Fluent Emoji, de Microsoft. Tenía luz y esquinas
      redondeadas y se leía como un cubo. Y el 4 de septiembre: «el dado no me
      gusta cómo queda, ¿qué podríamos poner para que quedase mejor?».
   5. Éste, que YA NO ES UN DADO.

   POR QUÉ SE CAMBIA EL SÍMBOLO Y NO EL DIBUJO. Cuatro dados, cuatro
   devoluciones. El último era el que él mismo pidió —en 3D, bajado de fuera y
   bien hecho— y siguió sin gustarle, así que el problema no era cómo estaba
   dibujado el dado: era que un objeto de tres dimensiones con luz, sombra y
   dos colores está solo en una cabecera donde todo lo demás son trazos
   blancos de 1,8. Por bien hecho que esté, ahí dentro es un cuerpo extraño.

   Lo que hay ahora es el símbolo de BARAJAR: dos flechas que se cruzan. Dice
   lo que hace el botón —darte un libro al azar— sin tener que dibujar el
   objeto que lo decide, y es de la misma familia que la lupa, el marcador y
   el rayo de la barra.

   CÓMO SE MUEVE, y por qué así. Un dado rueda; unas flechas, no. Lo honesto
   con este dibujo es una SACUDIDA corta, la de quien menea la bolsa antes de
   sacar la ficha: dos idas y venidas de dos puntos y para.

     · Al tocarlo, siempre.
     · Con `prefers-reduced-motion`, nunca.

   SE MENEABA SOLO CADA NUEVE SEGUNDOS, «para que se vea que se puede tocar», y
   eso se fue el 5 de septiembre. Pablo: «quítame las animaciones que pones».
   La regla que queda, y vale para toda la app: **nada se mueve solo; las cosas
   responden cuando se las toca.** Un icono que se sacude en bucle en la
   cabecera es una mosca en la esquina del ojo mientras se lee la pantalla.
   -------------------------------------------------------------------------- */

export function GlyphAzar({
  tamano = 26,
  /** Sube uno cada vez que se toca: cada cambio lanza una sacudida. */
  tirada: pulsos = 0,
}: {
  tamano?: number;
  tirada?: number;
}) {
  const reducido = !!useReducedMotion();
  const controles = useAnimationControls();
  const primera = useRef(true);

  const menear = useMemo(
    () => () => {
      if (reducido) return;
      controles.start({
        x: [0, -2.4, 2.4, -1.6, 0],
        rotate: [0, -4, 4, -2, 0],
        transition: { duration: 0.42, ease: [0.35, 0.6, 0.3, 1] },
      });
    },
    [controles, reducido],
  );

  /* Al tocarlo. La primera pasada se salta: `pulsos` arranca en cero y el
     efecto se dispara una vez al montar, y un icono que se menea solo nada más
     abrir la app parece un fallo. */
  useEffect(() => {
    if (primera.current) {
      primera.current = false;
      return;
    }
    menear();
  }, [pulsos, menear]);

  return (
    <motion.svg
      width={tamano}
      height={tamano}
      viewBox="0 0 24 24"
      animate={controles}
      aria-hidden
      focusable="false"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Las dos trayectorias que se cruzan, y las dos puntas de flecha. */}
        <path d="M3 7.4h3.1c1.7 0 2.7 1 3.7 2.3l3.3 4.6c1 1.3 2 2.3 3.7 2.3H21" />
        <path d="M3 16.6h3.1c1.7 0 2.7-1 3.7-2.3l.9-1.3" />
        <path d="M13.9 9.6l.9-1.2c1-1.3 2-2.3 3.7-2.3H21" />
        <path d="M18.6 3.7 21 6.1l-2.4 2.4" />
        <path d="M18.6 13.9 21 16.3l-2.4 2.4" />
      </g>
    </motion.svg>
  );
}

/* --------------------------------------------------------------------------
   La máquina
   -------------------------------------------------------------------------- */

export function Tragaperras({
  libros,
  onCerrar,
  onLeer,
}: {
  libros: Libro[];
  onCerrar: () => void;
  onLeer: (l: Libro) => void;
}) {
  /* «Otra vez» no reinicia estados a mano: cambia la llave y monta una tirada
     nueva de cero. Reiniciar seis cosas en el orden correcto es de donde salen
     los rodillos que se quedan a medias. */
  const [ronda, setRonda] = useState(0);
  return (
    <Ronda
      key={ronda}
      libros={libros}
      onCerrar={onCerrar}
      onLeer={onLeer}
      onOtra={() => setRonda((r) => r + 1)}
    />
  );
}

/** Lo que mide una casilla en ESTA pantalla. */
type Medida = { paso: number; alto: number; ancho: number; ventana: number };

function Ronda({
  libros,
  onCerrar,
  onLeer,
  onOtra,
}: {
  libros: Libro[];
  onCerrar: () => void;
  onLeer: (l: Libro) => void;
  onOtra: () => void;
}) {
  const reducido = !!useReducedMotion();
  const ganador = useMemo(
    () => libros[Math.floor(Math.random() * libros.length)],
    [libros],
  );
  const lista = useMemo(() => tirada(libros, ganador), [libros, ganador]);
  const controles = useAnimationControls();
  const [parado, setParado] = useState(false);

  /* EL TAMAÑO SALE DE LA PANTALLA, Y ÉSTA ERA LA AVERÍA. Antes la casilla
     medía 246 y la ventana 738, escritos a mano; en cuanto la pantalla es más
     baja que 738 —y el visor del artefacto lo es— los libros de arriba y de
     abajo se cortan contra el filo, que es lo que Pablo seguía viendo.

     Se mide el hueco que hay de verdad y se reparte en TRES casillas exactas:
     así caben tres libros enteros midan lo que midan la pantalla y el visor. Y
     se vuelve a medir si el hueco cambia, que es lo que hace el
     `ResizeObserver` —girar el móvil, o el visor cambiando de tamaño—. */
  const caja = useRef<HTMLDivElement>(null);
  const [medida, setMedida] = useState<Medida | null>(null);

  useLayoutEffect(() => {
    const e = caja.current;
    if (!e) return;
    const mide = () => {
      const h = e.clientHeight;
      const w = e.clientWidth;
      if (!h || !w) return;
      let paso = Math.floor((h - RESERVA_ARRIBA - RESERVA_ABAJO) / CASILLAS);
      let alto = paso - HUECO;
      let ancho = Math.round(alto * FORMA);
      /* Y si de ancho no cabe, manda el ancho y se recalcula el alto: más vale
         un libro más pequeño que uno que se sale por los lados. */
      const tope = w - 52;
      if (ancho > tope) {
        ancho = tope;
        alto = Math.round(ancho / FORMA);
        paso = alto + HUECO;
      }
      setMedida({ paso, alto, ancho, ventana: paso * CASILLAS });
    };
    mide();
    const ro = new ResizeObserver(mide);
    ro.observe(e);
    return () => ro.disconnect();
  }, []);

  /* La posición del rodillo, como valor vivo, para poder preguntarle a qué
     velocidad va. Framer anima ESTE valor —el que va en `style`— cuando los
     controles tocan `y`, así que la animación y la medida son la misma cosa y
     no pueden desincronizarse. */
  const y = useMotionValue(0);
  const velocidad = useVelocity(y);
  const estela = useRef<SVGFEGaussianBlurElement>(null);
  const paso = medida?.paso ?? 0;

  useMotionValueEvent(velocidad, "change", (v) => {
    if (!paso) return;
    /* Puntos por segundo → altura de la estela. Dividir por el PASO y no por
       una cifra fija es lo que hace que la estela mida lo mismo en una
       pantalla grande y en una pequeña: a velocidad de crucero son catorce
       casillas por segundo, o sea catorce, mida lo que mida la casilla. */
    const alto = Math.min(14, Math.abs(v) / paso);
    estela.current?.setAttribute("stdDeviation", `0 ${alto.toFixed(2)}`);
  });

  useEffect(() => {
    if (!medida) return;
    const parada = (i: number) => -(i * medida.paso);
    if (reducido) {
      controles.set({ y: parada(VUELTA) });
      setParado(true);
      return;
    }
    let vivo = true;
    (async () => {
      /* UNO: el tirón. Cede hacia atrás antes de salir, como una palanca. Es
         anticipación de manual y es lo que hace que el arranque se vea: sin
         ella el rodillo aparece ya lanzado.

         El retraso de salida tampoco es de estilo: es el respiro que necesita
         el navegador para pintar las doce cubiertas antes de que empiecen a
         correr. Sin él, los tres primeros fotogramas salen en blanco. */
      await controles.start({
        y: TIRON,
        transition: { duration: 0.15, delay: 0.16, ease: "easeOut" },
      });
      if (!vivo) return;

      /* DOS: coger velocidad, en dos casillas y pico. */
      await controles.start({
        y: parada(ARRANQUE),
        transition: { duration: T_ARRANQUE, ease: CURVA_ARRANQUE },
      });
      if (!vivo) return;

      /* TRES: crucero. En línea recta y a tope. Este tramo es el que hace que
         la cosa parezca una máquina: si se frena desde el primer fotograma no
         hay ningún momento de «esto va a toda pastilla». */
      await controles.start({
        y: parada(LANZADA),
        transition: { duration: T_CRUCERO, ease: "linear" },
      });
      if (!vivo) return;

      /* CUATRO: la frenada, con la curva empalmada sin tirón. Ver la cuenta
         donde se declara CURVA_FRENO. */
      await controles.start({
        y: parada(VUELTA) - REBOTE,
        transition: { duration: T_FRENO, ease: CURVA_FRENO },
      });
      if (!vivo) return;

      /* CINCO: el tope. */
      await controles.start({
        y: parada(VUELTA),
        transition: { type: "spring", stiffness: 170, damping: 13, mass: 0.9 },
      });
      if (vivo) setParado(true);
    })();
    return () => {
      vivo = false;
    };
  }, [controles, reducido, medida]);

  return (
    <motion.div
      className="trag"
      /* Tocar el fondo cierra, que es lo que espera cualquiera de una hoja que
         se ha levantado encima. La cruz de arriba sigue estando: las dos, no
         una. */
      onClick={onCerrar}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.18 } }}
      transition={{ duration: 0.22 }}
    >
      <motion.button
        className="trag-cerrar"
        type="button"
        onClick={onCerrar}
        aria-label="Cerrar"
        whileTap={{ scale: 0.92 }}
      >
        <GlyphClose />
      </motion.button>

      {/* EL RODILLO OCUPA LA PANTALLA. El rótulo va arriba y el resultado en un
          panel que sube desde abajo cuando para; ninguno de los dos le quita
          alto a la ventana. */}
      <motion.div
        className="trag-caja"
        ref={caja}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...springPop, delay: 0.04 }}
      >
        <p className="trag-encima">Un libro a suertes</p>

        {medida && (
          <div
            className="trag-ventana"
            /* Que un toque en el rodillo no llegue al fondo: cerrar la máquina
               por tocar los libros que estás mirando es de las cosas que más
               molestan. */
            onClick={(e) => e.stopPropagation()}
            /* El alto y el medio alto salen de la misma medida: centrar a mano
               con un número escrito en el CSS es de donde salió el marco
               descuadrado. */
            style={{
              height: medida.ventana,
              marginTop: -medida.ventana / 2 + DESPLAZA,
              width: medida.ancho + MARCO,
              marginLeft: -(medida.ancho + MARCO) / 2,
            }}
          >
            {/* El filtro vive aquí dentro y no en una hoja aparte: es de esta
                máquina y de nadie más. `stdDeviation="0 0"` de salida; lo que
                lo mueve es la velocidad del rodillo, ahí arriba. */}
            <svg className="trag-defs" aria-hidden focusable="false">
              <defs>
                <filter
                  id="trag-estela"
                  x="-12%"
                  y="-25%"
                  width="124%"
                  height="150%"
                  colorInterpolationFilters="sRGB"
                >
                  <feGaussianBlur ref={estela} in="SourceGraphic" stdDeviation="0 0" />
                </filter>
              </defs>
            </svg>

            {/* La caja que se filtra mide lo que la ventana y recorta lo que
                sobra. Ver el punto 3 de arriba: puesta sobre la tira, el filtro
                tendría que trabajar sobre cinco mil puntos de alto. */}
            <div className="trag-borron" data-gira={!parado && !reducido}>
              <motion.div
                className="trag-tira"
                /* (VENTANA - PASO) y no (VENTANA - ALTO): lo que hay que
                   centrar en la ventana no es el LIBRO, es su CASILLA. El libro
                   va centrado dentro de la casilla, así que restar su alto deja
                   todo el rodillo ocho puntos por debajo del marco. */
                style={{ y, paddingTop: (medida.ventana - medida.paso) / 2 }}
                animate={controles}
              >
                {lista.map((l, i) => (
                  <div
                    className="trag-hueco"
                    key={`${l.id}-${i}`}
                    style={{ height: medida.paso }}
                  >
                    <div
                      className="trag-libro"
                      data-premio={parado ? (i === VUELTA ? "si" : "no") : undefined}
                      style={{ width: medida.ancho, height: medida.alto }}
                    >
                      <Portada libro={l} tamano={medida.ancho} />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* El marco de la casilla premiada, encima de todo. Mide
                EXACTAMENTE lo que el libro más tres puntos por lado, y las
                medidas salen de la misma medida que el libro: escritas a mano
                se descuadran en cuanto cambia el tamaño, que es lo que pasó. */}
            <motion.span
              className="trag-visor"
              data-on={parado}
              style={{
                width: medida.ancho + 6,
                height: medida.alto + 6,
                marginLeft: -(medida.ancho + 6) / 2,
                marginTop: -(medida.alto + 6) / 2,
              }}
              animate={parado ? { scale: [1, 1.05, 1] } : { scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              aria-hidden
            />
            <span className="trag-sombra" aria-hidden />
            {/* El reflejo del cristal. Un rodillo de verdad se mira a través de
                algo, y es lo que separa «una lista que se mueve» de «una
                máquina». Va muy bajo de tinta a propósito: al 6 % se nota y no
                lava las cubiertas. */}
            <span className="trag-cristal" aria-hidden />
          </div>
        )}

        {/* El resultado no tiene sitio reservado: aparece encima del rodillo
            cuando para, subiendo desde abajo y sobre un degradado que apaga el
            libro de la casilla de abajo. Reservarle sitio le quitaba doscientos
            puntos de alto al rodillo durante todo el giro, para enseñar un
            renglón que dice «Girando…». */}
        <div className="trag-pie" data-on={parado} onClick={(e) => e.stopPropagation()}>
          <AnimatePresence mode="wait">
            {parado ? (
              <motion.div
                key="premio"
                className="trag-premio"
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={spring}
              >
                <h2 className="trag-titulo">{ganador.titulo}</h2>
                <p className="trag-autor">{ganador.autor}</p>
                <div className="trag-botones">
                  <motion.button
                    className="trag-leer"
                    type="button"
                    onClick={() => onLeer(ganador)}
                    whileTap={{ scale: 0.97 }}
                  >
                    Leerlo
                  </motion.button>
                  <motion.button
                    className="trag-otra"
                    type="button"
                    onClick={onOtra}
                    whileTap={{ scale: 0.97 }}
                  >
                    Otra vez
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <motion.p
                key="girando"
                className="trag-girando"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.12 } }}
              >
                Girando…
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
