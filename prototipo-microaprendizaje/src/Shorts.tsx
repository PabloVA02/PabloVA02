import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactElement } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
  type PanInfo,
} from "framer-motion";
import { SHORTS, urlFoto, textoDeBloque, type Bloque, type Foto, type Short } from "./shorts";
import { conGuiones } from "./silabas";
import { PORTADAS } from "./portadas";
import { Cartel } from "./Cartel";
import { GlyphHeart, GlyphRayo, GlyphShare } from "./glyphs";
import { enterVariants, spring, springPop, springSoft, springTight } from "./motion";

/* ==========================================================================
   Shorts.

   UNA SOLA PANTALLA. No hay un muro por un lado y un lector por otro: la
   historia se lee en el mismo sitio donde la encuentras. Nada se «abre».

   Todas las pantallas son la misma pieza —fotografía arriba, texto abajo— y
   solo hay dos gestos:

       arriba          cambias de historia
       a la derecha    sigues avanzando en la que estás
       a la izquierda  vuelves una pantalla (desde la portada, avanza también)

   Cuatro pantallas por historia: portada y tres páginas. Al pasar la última
   te deja directamente en la siguiente historia, así que se puede leer media
   sección sin levantar el dedo. La fotografía NO se desmonta al avanzar: es
   una capa fija de la historia y las páginas pasan por delante. Si entrara y
   saliera con cada página, cada deslizamiento sería un parpadeo y la foto se
   volvería a pedir por red.

   Sobre las fotografías: son de Wikimedia Commons y se piden por red. Aquí
   eso importa más de lo normal, porque una foto que no carga deja un agujero
   negro en mitad del diseño. Por eso <Fotografia> nunca enseña un hueco:
   mientras carga hay un degradado del color del short, y si falla —o si esa
   historia todavía no tiene foto asignada— se queda su cartel, dibujado a
   partir de su id. El diseño no depende de la red, la aprovecha.
   ========================================================================== */

const UMBRAL_PX = 62;
const UMBRAL_VEL = 480;

/** Cuántas historias se montan a cada lado de la que se está leyendo. */
const VECINAS = 2;

/** Lo que se espera a una fotografía antes de rendirse y dibujar la nuestra. */
const ESPERA_MAX = 6000;

/* --------------------------------------------------------------------------
   La fotografía
   -------------------------------------------------------------------------- */

type EstadoFoto = "cargando" | "lista" | "fallida";

function Fotografia({
  foto,
  Respaldo,
  reducido,
  /** Deriva lenta tipo Ken Burns. Se apaga en las fotos pequeñas. */
  deriva = true,
  /** Parallax. Se aplica DENTRO de la caja recortada, nunca fuera. */
  desplaza,
  /**
   * La foto tal cual, sin nada encima ni debajo: es como la pinta la maqueta
   * de lectura. Apaga el relleno desenfocado de las panorámicas, el zoom de
   * reposo y el tinte, y deja solo la imagen recortada a la caja. Lo demás de
   * la app la sigue enseñando con sus efectos.
   */
  plana = false,
}: {
  /** Si no hay foto asignada todavía, se dibuja el respaldo y ya está. */
  foto?: Foto;
  /** Qué se dibuja si la foto no llega. Es del tema, no genérico. */
  Respaldo: (p: { reducido: boolean }) => ReactElement;
  reducido: boolean;
  deriva?: boolean;
  desplaza?: MotionValue<number>;
  plana?: boolean;
}) {
  // Sin foto asignada no se espera a nada: el cartel es el estado final, no un
  // sustituto provisional que haya que anunciar con un barrido de carga.
  const [estado, setEstado] = useState<EstadoFoto>(foto ? "cargando" : "fallida");

  // La imagen se precarga fuera del árbol para poder decidir qué pintar antes
  // de que el navegador enseñe el icono de imagen rota.
  //
  // El plazo no es una precaución de manual: una petición bloqueada no dispara
  // `onerror`, se queda colgada. Sin plazo, una red lenta o un cortafuegos
  // dejan el barrido de carga girando para siempre, que es peor que enseñar
  // directamente la ilustración.
  useEffect(() => {
    if (!foto) return setEstado("fallida");

    let vivo = true;
    setEstado("cargando");

    const img = new Image();
    img.onload = () => vivo && setEstado("lista");
    img.onerror = () => vivo && setEstado("fallida");
    img.src = urlFoto(foto);

    const plazo = window.setTimeout(() => {
      if (vivo && !img.complete) setEstado("fallida");
    }, ESPERA_MAX);

    return () => {
      vivo = false;
      window.clearTimeout(plazo);
    };
  }, [foto]);

  return (
    <div className="foto-caja">
      {/* Fondo de color: nunca se ve blanco, ni siquiera un instante */}
      <div className="foto-fondo" />

      <motion.div className="foto-desplaza" style={desplaza ? { x: desplaza } : undefined}>
      <AnimatePresence>
        {/* Relleno para las panorámicas. La misma imagen, recortada a lo bruto,
            desenfocada hasta que no se lee nada y oscurecida: solo aporta
            color de fondo, y ese color sale del propio cuadro, así que la
            banda nítida de arriba no flota sobre un rectángulo ajeno. Se pinta
            antes que la foto para quedar por debajo. */}
        {estado === "lista" && foto?.panoramica && !plana && (
          <motion.img
            key="panorama"
            className="foto-panorama"
            src={urlFoto(foto)}
            alt=""
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          />
        )}

        {estado === "lista" && foto && (
          <motion.img
            key="foto"
            className={foto.panoramica && !plana ? "foto-panoramica" : "foto-img"}
            src={urlFoto(foto)}
            alt={foto.alt}
            style={
              foto.panoramica && !plana
                ? { ["--alto" as string]: foto.panoramica.alto }
                : { objectPosition: foto.foco ?? "50% 50%" }
            }
            initial={{ opacity: 0, scale: plana ? 1 : 1.08 }}
            exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeOut" } }}
            animate={
              plana
                ? { opacity: 1, scale: 1 }
                : reducido || !deriva
                ? { opacity: 1, scale: 1.02 }
                : foto.panoramica
                  ? /* La panorámica ya toca los dos costados del marco: el
                       zoom de reposo de la foto normal le comería los bordes
                       laterales, que es lo único que aquí no sobra. Sube un
                       6 % en lugar de un 16 %. */
                    { opacity: 1, scale: [1, 1.06] }
                  : { opacity: 1, scale: [1.08, 1.16] }
            }
            transition={
              plana
                ? { opacity: { duration: 0.5 } }
                : reducido || !deriva
                ? springSoft
                : {
                    opacity: { duration: 0.7 },
                    scale: { duration: 24, ease: "linear", repeat: Infinity, repeatType: "reverse" },
                  }
            }
          />
        )}

        {/* La deriva de nubes. Es la misma fotografía, desenfocada y en luz
            suave, cruzando el disco a paso de tortuga; la máscara la apaga
            antes del borde, así que nunca asoma el canto de la copia y no hay
            costura que disimular. Va con la misma escala que la foto de abajo
            para no despegarse de ella durante el zoom de reposo. */}
        {estado === "lista" && foto?.esfera && deriva && !reducido && !plana && (
          <motion.img
            key="atmosfera"
            className="foto-atmosfera"
            src={urlFoto(foto)}
            alt=""
            aria-hidden
            style={{
              objectPosition: foto.foco ?? "50% 50%",
              ["--mascara" as string]: `radial-gradient(ellipse ${foto.esfera.rx} ${foto.esfera.ry} at ${foto.esfera.cx} ${foto.esfera.cy}, #000 0%, rgba(0,0,0,0.85) 52%, transparent 100%)`,
            }}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: [1.08, 1.16], x: ["-9%", "9%"] }}
            transition={{
              opacity: { duration: 1.4, delay: 0.5 },
              scale: { duration: 24, ease: "linear", repeat: Infinity, repeatType: "reverse" },
              /* Ida y vuelta en dieciocho segundos. La primera versión hacía
                 este recorrido en treinta y ocho y con un tercio del ancho, o
                 sea veinte píxeles en más de medio minuto: sobre el papel era
                 elegante y en la mano no se veía. Una animación de ambiente
                 tiene que notarse mirándola diez segundos o no existe. */
              x: { duration: 18, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" },
            }}
          />
        )}

        {estado === "fallida" && (
          <motion.div
            key="respaldo"
            className="foto-respaldo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={springSoft}
          >
            <Respaldo reducido={reducido} />
          </motion.div>
        )}
      </AnimatePresence>
      </motion.div>

      {/* Revelado común: tinte del acento y grano. Solo sobre fotografía —el
          cartel generado ya sale con el color de la historia y teñirlo otra
          vez lo ensucia— y solo en la historia que se está mirando, porque el
          muro mantiene montadas las vecinas y tres filtros de ruido a pantalla
          completa se notan en el desplazamiento. */}
      {estado === "lista" && !plana && (
        <>
          <div className={foto?.panoramica ? "foto-tinte es-suave" : "foto-tinte"} />
          {deriva && (
            <svg className="foto-grano" aria-hidden>
              <filter id="grano-muro">
                <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="3" />
              </filter>
              <rect width="100%" height="100%" filter="url(#grano-muro)" />
            </svg>
          )}
        </>
      )}

      {/* Barrido mientras carga: sugiere que viene algo, no que esté roto */}
      {estado === "cargando" && !reducido && (
        <motion.div
          className="foto-barrido"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}

/**
 * Qué se dibuja cuando no hay fotografía. Las diez historias antiguas tienen
 * su cartel hecho a mano, dibujado para ESA historia, y esos ganan siempre.
 * El resto usa el cartel generado a partir del id.
 */
/* --------------------------------------------------------------------------
   El color de una historia lo decide SU TEMA, no la historia suelta. Todos
   los shorts de Cocina son del mismo color y todos los de Figuras de otro, de
   manera que el color dice de qué se está hablando antes de leer una palabra.

   Se reparte por el nombre de la categoría, no a mano: así un tema nuevo
   recibe el suyo el día que se escribe y nadie tiene que acordarse de nada.
   -------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------
   EL COLOR DE UNA HISTORIA LO DECLARA LA HISTORIA.

   Aquí había una tabla que repartía cinco acentos por CATEGORÍA: todos los
   shorts de Cocina de un color, todos los de Figuras de otro. Tenía sentido
   con doscientos treinta y seis temas: el color decía de qué se hablaba antes
   de leer una palabra.

   Con el muro de curiosidades ese reparto se vuelve del revés. Casi todo lo
   que Pablo quiere contar —cuánto le queda al sol, por qué llueve, cómo
   funciona un móvil— cae en Ciencia, así que la tabla pintaría el muro entero
   de azul pizarra y el color dejaría de distinguir nada.

   Y hacía algo peor: la capitular del Sol salía azul acero sobre una
   fotografía de la corona en oro. El acento se ve SIEMPRE contra la imagen, y
   quien elige la imagen es quien escribe la historia. Así que el color va en
   el short, que es donde ya estaba escrito —`color: "var(--ochre)"`— y donde
   llevaba desde el principio sin que nadie lo mirara.
   -------------------------------------------------------------------------- */

/**
 * Qué fotografía le toca a cada pantalla. `fotos` manda y `foto` es el
 * respaldo, de manera que las historias que solo tienen una imagen siguen
 * funcionando exactamente igual que antes.
 */
function fotoDe(short: Short, paso: number) {
  /* Y si esa pantalla no tiene la suya, la de la portada. El tipo ya lo
     prometía —«una historia con una sola imagen sigue funcionando: se queda
     la misma las cuatro pantallas»— pero solo se cumplía cuando la única
     imagen estaba escrita en `foto`. Escrita en `fotos: [una]`, que es como
     se escriben todas, las tres pantallas de dentro se quedaban con el cartel
     generado: un círculo plano detrás de una fotografía de la corona solar.
     Repetir la buena es peor que tener cuatro, y mucho mejor que eso. */
  /* Salvo que la historia diga que la fotografía es solo de la portada. Ese
     reparto se hizo para que una historia con una imagen la enseñara en las
     cuatro pantallas en vez de enseñar tres carteles generados, y sigue
     valiendo para esas. Para las que traen `soloPortada` sería lo contrario
     de lo que piden: la misma foto diez veces seguidas. */
  if (short.soloPortada && paso > 0) return undefined;
  return short.fotos?.[paso] ?? short.foto ?? short.fotos?.[0];
}

function respaldoDe(short: Short) {
  const propio = PORTADAS[short.id];
  if (propio) return propio;
  return ({ reducido }: { reducido: boolean }) => (
    <Cartel id={short.id} color={short.color} reducido={reducido} />
  );
}

/* --------------------------------------------------------------------------
   EL REPARTO EN PANTALLAS, MEDIDO EN EL MÓVIL DE QUIEN LEE

   Las siete reglas están en `.claude/skills/paginado-shorts/SKILL.md` y las
   puso Pablo el 28 de agosto de 2026. Esto es su cumplimiento.

   CÓMO SE MIDE. Se pinta la historia entera —todos sus bloques seguidos— en un
   contenedor invisible que tiene EXACTAMENTE el mismo ancho y la misma
   tipografía que la pantalla de verdad, se pregunta a cada bloque cuánto ocupa
   —su alto más el margen que arrastra— y se van acumulando hasta que el
   siguiente no cabe.

   Medir así y no calcular: la altura de un párrafo depende de dónde parta cada
   renglón, y eso solo lo sabe el navegador. Con la tipografía del sistema
   cambiada, o el teléfono girado, las alturas son otras y el reparto también.

   DÓNDE NO SE PUEDE CORTAR
   · dentro de un bloque, nunca;
   · entre un subtítulo y su primer párrafo: un título solo al pie de una
     pantalla no dice nada;
   · justo antes de un rayo: es la conclusión de lo que se acaba de leer, y
     abriendo pantalla se queda huérfano.

   Y SI UN BLOQUE NO CABE ÉL SOLO en una pantalla entera, no se parte y no se
   encoge: se avisa por consola con el nombre del tema, que es lo que pidió
   Pablo, y se deja en su pantalla. La salida buena es que él parta el párrafo
   en el texto, y eso no lo puede hacer el código.
   -------------------------------------------------------------------------- */

/**
 * DÓNDE SE PUEDE CORTAR: todos los huecos entre palabras del bloque pintado.
 *
 * Solo posiciones con espacio, así que un corte nunca parte una palabra. Se
 * recalculan cada vez porque probar un corte reescribe el HTML del bloque y
 * los nodos de texto de antes ya no existen.
 */
function espacios(el: HTMLElement): { nodo: Text; off: number }[] {
  const cortes: { nodo: Text; off: number }[] = [];
  const paseo = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  let n: Node | null;
  while ((n = paseo.nextNode())) {
    const t = n.textContent ?? "";
    for (let k = 0; k < t.length; k++) if (t[k] === " ") cortes.push({ nodo: n as Text, off: k });
  }
  return cortes;
}

/* CUÁNTO SE PUEDE ESTIRAR O ENCOGER UNA PÁGINA PARA ACABAR EN PUNTO.

   Pablo, el 28 de agosto: «el texto realmente intenta siempre que cada página
   acabe con un punto; puedes alargar más el margen o puedes acortarlo, pero es
   importante que se intente que acabe con el punto que mejor convenga».

   Un renglón hacia delante y dos hacia atrás. Hacia delante poco, porque ese
   renglón se sale de la caja y crece sobre el margen de pie: uno cabe —el
   margen está dimensionado para él, ver el CSS— y dos ya chocarían con el
   indicador de página. Hacia atrás se puede más, porque lo único que cuesta es
   blanco, pero tampoco mucho: dos renglones de hueco por acabar en punto está
   bien, cinco ya es un agujero. */
const ESTIRA = 2;
const ENCOGE = 2;

/** ¿El carácter que hay justo antes de este corte cierra una frase? */
function finDeFrase(texto: string): boolean {
  const t = texto.replace(/[\s\u00AD]+$/, "");
  return /[.!?…»”)]$/.test(t) && !/\b(?:Sr|Sra|Dr|Dra|etc|a\.C|d\.C|EE\.UU)\.$/i.test(t);
}

/**
 * Las dos mitades de un bloque cortado por el hueco número `k`.
 *
 * Se hace con un `Range` y `cloneContents`, no cortando la cadena: así una
 * cursiva o una negrita que cruce el corte sale bien cerrada a los dos lados.
 * Deja el bloque con su HTML entero puesto, listo para el siguiente intento.
 */
function trozo(el: HTMLElement, entero: string, k: number): [string, string] | null {
  el.innerHTML = entero;
  const cortes = espacios(el);
  if (k < 0 || k >= cortes.length) return null;
  const r = document.createRange();
  const caja = document.createElement("div");
  r.setStart(el, 0);
  r.setEnd(cortes[k].nodo, cortes[k].off);
  caja.appendChild(r.cloneContents());
  const cabeza = caja.innerHTML.trim();
  caja.innerHTML = "";
  r.setStart(cortes[k].nodo, cortes[k].off);
  r.setEnd(el, el.childNodes.length);
  caja.appendChild(r.cloneContents());
  const resto = caja.innerHTML.trim();
  el.innerHTML = entero;
  if (!cabeza || !resto) return null;
  return [cabeza, resto];
}

/* NI VIUDAS NI HUÉRFANAS: dos renglones a cada lado como mínimo.

   Pablo, el 28 de agosto, con «posible.» solo al principio de una pantalla
   delante: «lo único que no quiero es que haya palabras sueltas por cambiar de
   página». Así que cuando un párrafo se parte, al menos dos renglones arriba y
   al menos dos abajo; si el corte natural deja uno solo, se sube el corte un
   renglón, y si aun así no se cumple, el párrafo entero baja a la siguiente.

   En imprenta esa línea suelta al pie se llama viuda y la del principio,
   huérfana, y llevan cinco siglos evitándose por lo mismo que se ve aquí: una
   palabra sola arriba del todo no se lee como el final de una frase, se lee
   como una errata. */
const RENGLONES_MINIMOS = 2;

/** Cuántos renglones ocupa lo que hay dentro de un elemento, contados de
 *  verdad: `getClientRects` de un rango que lo abarque devuelve un rectángulo
 *  por caja de línea. No es una división de alturas, son los renglones que ha
 *  compuesto el navegador. */
function renglonesDe(el: HTMLElement): number {
  const r = document.createRange();
  r.selectNodeContents(el);
  return r.getClientRects().length;
}

/**
 * EL CORTE MÁS LARGO QUE NO DESBORDA, PROBADO DE VERDAD Y SIN DEJAR PALABRAS
 * SUELTAS.
 *
 * No cuenta renglones para decidir dónde cortar ni multiplica por la altura de
 * línea: pone un trozo, pregunta a la caja si desborda, y se queda con el más
 * largo que no lo hace. `desborda` es la medida real —`scrollHeight >
 * clientHeight`—, así que da igual lo que valgan los márgenes, el área segura
 * o la barra de pestañas.
 *
 * Va por bisección y no de uno en uno porque el resultado es idéntico —cuanto
 * más texto, más alto: la propiedad es monótona— y un párrafo de doscientas
 * palabras se resuelve en ocho pruebas en vez de en doscientas.
 *
 * DESPUÉS se comprueban los renglones de cada mitad, que es lo único que pidió
 * Pablo del lector: si la de abajo se queda en uno, se busca otra vez con el
 * listón un renglón más bajo, y eso empuja una línea de arriba abajo y deja
 * las dos. Si con eso la de arriba se queda en una, no se parte.
 */
function cortaHastaLlenar(
  el: HTMLElement,
  desborda: () => boolean,
  desbordaPor: () => number,
): [string, string] | "cabe-justo" | null {
  const entero = el.innerHTML;
  const cuantos = espacios(el).length;
  if (cuantos < 2) return null;

  /* El corte más largo que cumple `aceptable`, buscado por bisección. Sale de
     aquí con el HTML entero repuesto. */
  const busca = (aceptable: () => boolean): [string, string] | null => {
    let lo = 0;
    let hi = cuantos - 1;
    let mejor: [string, string] | null = null;
    while (lo <= hi) {
      const medio = (lo + hi) >> 1;
      const t = trozo(el, entero, medio);
      if (!t) { hi = medio - 1; continue; }
      el.innerHTML = t[0];
      if (aceptable()) { mejor = t; lo = medio + 1; }
      else hi = medio - 1;
    }
    el.innerHTML = entero;
    return mejor;
  };

  /** Los renglones de un trozo, medidos poniéndolo en la caja. */
  const renglonesDeTrozo = (html: string) => {
    el.innerHTML = html;
    const n = renglonesDe(el);
    el.innerHTML = entero;
    return n;
  };

  /* LA TOLERANCIA DE UN RENGLÓN. Pablo, el 28 de agosto: «si a un párrafo le
     falta 1 línea para terminar y no cabe, métela aunque pase de H. Una línea
     como máximo, nunca dos, y nunca invadiendo el indicador ni el safe-area».

     Antes de buscar dónde cortar se mira si el párrafo entero se pasa por un
     solo renglón: si es así no se parte, se mete entero y ya. Es lo que evita
     la pantalla que corta a mitad de frase para dejar la última línea sola
     arriba en la siguiente. El margen de pie está dimensionado para que esa
     línea de más quepa sin llegar al indicador: ver el CSS de `--margen-abajo`.

     `desbordaPor` mide cuánto se sale, y se compara con el renglón del bloque
     y no con una constante: en un rayo o en una cita el interlineado es otro. */
  const renglon = parseFloat(getComputedStyle(el).lineHeight) || 0;
  if (renglon > 0 && desbordaPor() > 0 && desbordaPor() <= renglon + 0.5) return "cabe-justo";

  let mejor = busca(() => !desborda());
  if (!mejor) return null;

  /* Si arriba no caben dos renglones, no hay corte que valga: el párrafo
     entero baja a la pantalla siguiente. */
  const arriba = renglonesDeTrozo(mejor[0]);
  if (arriba < RENGLONES_MINIMOS) return null;

  /* QUE LA PÁGINA ACABE EN PUNTO, si se puede sin pagarlo caro.
   *
   * El corte que llena la página cae casi siempre a mitad de frase, y eso es
   * lo que hace que se lea mal: la última línea se corta en «pudiera tirar» y
   * el «de ella» se va solo a la página siguiente. Así que, de todos los
   * cortes que cierran una frase, se coge el que menos se aparte del que
   * llenaba: hasta un renglón por delante —se sale de la caja, y el margen de
   * pie está hecho para ese renglón— y hasta dos por detrás, que solo cuestan
   * blanco. Si no hay ninguno en esa ventana, se queda el que llenaba.
   *
   * Empatando, gana el de delante: la página se ve llena y la frase entera. */
  /* Cuáles de los cortes caen detrás de un punto. Se mira el carácter anterior
     en el propio nodo de texto, no clonando el trozo: clonar doscientas veces
     por párrafo para preguntar por una letra cuesta más que todo el reparto. */
  const cortes = espacios(el);
  const puntos: number[] = [];
  for (let i = 0; i < cortes.length; i++) {
    const { nodo, off } = cortes[i];
    let antes = (nodo.textContent ?? "").slice(Math.max(0, off - 12), off);
    if (!antes && i > 0) antes = (cortes[i - 1].nodo.textContent ?? "").slice(-12);
    if (finDeFrase(antes)) puntos.push(i);
  }
  if (puntos.length) {
    let elegido: [string, string] | null = null;
    let mejorCoste = Infinity;
    for (const i of puntos) {
      const t = trozo(el, entero, i);
      if (!t) continue;
      const lineas = renglonesDeTrozo(t[0]);
      const delta = lineas - arriba;
      if (delta > ESTIRA || delta < -ENCOGE) continue;
      if (lineas < RENGLONES_MINIMOS) continue;
      if (renglonesDeTrozo(t[1]) < RENGLONES_MINIMOS) continue;
      /* El coste es cuánto se aparta; a igual distancia, mejor estirar. */
      const coste = Math.abs(delta) * 2 + (delta < 0 ? 1 : 0);
      if (coste < mejorCoste) { mejorCoste = coste; elegido = t; }
    }
    if (elegido) {
      el.innerHTML = entero;
      if (elegido[1].length < entero.trim().length) return elegido;
    }
  }
  el.innerHTML = entero;

  /* Y si abajo se queda una línea suelta —la palabra sola que no quiere—, se
     sube el corte un renglón: se vuelve a buscar el trozo más largo que ocupe
     uno menos, con lo que esa línea pasa a la siguiente y allí ya son dos. */
  if (renglonesDeTrozo(mejor[1]) < RENGLONES_MINIMOS) {
    const masCorto = busca(() => renglonesDe(el) <= arriba - 1);
    if (!masCorto) return null;
    if (renglonesDeTrozo(masCorto[0]) < RENGLONES_MINIMOS) return null;
    if (renglonesDeTrozo(masCorto[1]) < RENGLONES_MINIMOS) return null;
    mejor = masCorto;
  }

  /* Cortar tiene que avanzar: si la cola no es más corta que el original, el
     reparto entraría en bucle. No debería pasar —el corte cae siempre antes
     del final— y esta línea es el cinturón. */
  if (mejor[1].length >= entero.trim().length) return null;
  return mejor;
}

/**
 * Lo que se sabe de una pantalla al cerrarla: el sitio que había, el que se
 * usó, el hueco que quedó y —si pasa de tres renglones— cuál de las
 * excepciones de Pablo lo justifica.
 *
 * No es para la consola: es para poder COMPROBARLO desde fuera. El diario que
 * había antes se imprimía cuando el short se paginaba, y un short se pagina una
 * vez al montarlo, así que al recorrerlos con el navegador de pruebas casi
 * ninguno volvía a decir nada y el comprobador se quedaba sin las excepciones.
 * Aquí queda colgado de `window.__PAGINFO`, con el id del short por llave, y se
 * lee cuando haga falta. Ver `scripts/huecos.mjs`.
 */
export type Informe = {
  H: number;
  usada: number;
  hueco: number;
  renglones: number;
  excepcion: string;
  porque: string;
};

/**
 * REPARTE LA HISTORIA EN PANTALLAS PROBANDO EL DESBORDE DE VERDAD.
 *
 * El método lo dictó Pablo el 28 de agosto, después de tres intentos fallidos
 * a base de aritmética:
 *
 *   «Deja de calcular cuántas líneas caben. Averígualo probando. Monta el
 *   contenedor de página vacío, con su tamaño real ya en pantalla. Ve
 *   añadiendo contenido. Después de cada añadido, comprueba si el contenedor
 *   desborda de verdad: scrollHeight > clientHeight. En cuanto desborde, quita
 *   lo último. Esa página está llena. Sigue con la siguiente desde ahí.»
 *
 * Y tenía razón: los tres fallos anteriores fueron los tres de cuentas —la
 * barra restada dos veces, el área segura contada en dos sitios, el margen de
 * abajo del último bloque sumado sin estar—. Aquí no hay ni una resta. La caja
 * es la de verdad, con su ancho, su letra, sus márgenes y su recorte, y la
 * única pregunta que se le hace es «¿te has salido?».
 *
 * `caja` es la gemela invisible de la hoja: mismo ancho, misma tipografía,
 * mismos rellenos y `overflow: hidden`, que es lo que hace que `scrollHeight`
 * diga la verdad. Empieza vacía y se vacía al cerrar cada pantalla, así que
 * cada una se monta desde cero, exactamente como pidió él.
 *
 * Lo que no se puede meter entero se parte, y siempre por un hueco entre
 * palabras: nunca a mitad de palabra. Un párrafo y el texto de un rayo se
 * parten por texto; una lista, por puntos enteros.
 */
function reparte(
  caja: HTMLElement,
  bloques: Bloque[],
  ops: { avisa?: (b: Bloque) => void; informe?: Informe[] } = {},
): Bloque[][] {
  const { avisa, informe } = ops;
  /* El diario del reparto, apagado. Se enciende con `window.__PAGDEBUG = true`
     en la consola y dice, pantalla por pantalla, cuánto se ha llenado y qué
     bloque fue el que no cupo. */
  const diario = (globalThis as Record<string, unknown>).__PAGDEBUG
    ? (...t: unknown[]) => console.debug("[pag]", ...t)
    : () => {};

  /* LA ÚNICA MEDIDA DE TODO EL ARCHIVO. */
  const desborda = () => caja.scrollHeight > caja.clientHeight;
  /** Y CUÁNTO se sale, que hace falta para la tolerancia de un renglón. */
  const desbordaPor = () => caja.scrollHeight - caja.clientHeight;

  /** El hueco que queda debajo de lo último puesto.
   *
   *  `clientHeight - scrollHeight` NO vale para esto, y es la trampa en la que
   *  se cayó: `scrollHeight` nunca baja de `clientHeight`, así que esa resta da
   *  cero siempre que el texto quepa. El diario decía «sobran 0» en todas las
   *  pantallas y el tope del 25 % de las reglas de borde no saltaba nunca. El
   *  hueco de verdad es lo que va desde donde acaba el último hijo hasta el
   *  suelo de la caja. */
  const hueco = () => {
    const ult = caja.lastElementChild;
    if (!ult) return caja.clientHeight;
    const suelo = caja.getBoundingClientRect().top + caja.clientTop + caja.clientHeight;
    return Math.round(suelo - ult.getBoundingClientRect().bottom);
  };

  /** Pinta un bloque al final de la caja y devuelve su elemento. */
  const pinta = (b: Bloque): HTMLElement => {
    const tmp = document.createElement("div");
    tmp.innerHTML = htmlDeBloques([b]);
    const el = tmp.firstElementChild as HTMLElement;
    caja.appendChild(el);
    return el;
  };

  const paginas: Bloque[][] = [];
  let actual: Bloque[] = [];
  /* Lo que queda por colocar. Es una pila y no un índice porque partir un
     bloque devuelve la cola al montón, y puede tocar partirla otra vez. */
  const cola: Bloque[] = [...bloques];

  /* YA NO HAY QUE SABER CUÁL ES LA ÚLTIMA PANTALLA, y aquí había cincuenta
     líneas para averiguarlo. Los botones de «Guardar» iban en el flujo y le
     quitaban ochenta y nueve puntos a la última, así que esa había que
     medirla distinta: una copia inerte del pie en la hoja de medir, y una
     regla —«es la última si todo lo que queda cabe sin el pie»— que no
     convergía y dejaba la última con scroll.

     Desde que los márgenes son de libro —fijos e idénticos en todas las
     páginas, con los botones dentro del margen de abajo— la caja de texto
     mide lo mismo en todas. No hay caso especial que resolver. */

  /* EL INFORME QUE PIDIÓ PABLO, una línea por pantalla: «número, H, altura real
     usada y hueco = H − usada, en líneas. Ninguna puede tener hueco > 3 líneas
     sin declarar cuál de las tres excepciones aplica».

     Se enciende con `window.__PAGDEBUG = true` en la consola, o de una vez
     sobre los quince temas con `node scripts/huecos.mjs`. La excepción se
     apunta al cerrar, que es cuando se sabe por qué se cerró: no se deduce
     después mirando el resultado. */
  const cierra = (porque = "", excepcion = "") => {
    if (actual.length) {
      const h = hueco();
      const renglon = parseFloat(getComputedStyle(caja).lineHeight) || 26;
      const enRenglones = h / renglon;
      diario(
        `p${String(paginas.length + 1).padStart(2)}  H=${caja.clientHeight}` +
          `  usada=${caja.clientHeight - h}  hueco=${h} = ${enRenglones.toFixed(1)} renglones` +
          (enRenglones > 3
            ? excepcion
              ? `  · EXCEPCIÓN: ${excepcion}`
              : "  · ✗ SIN EXCEPCIÓN"
            : "") +
          (porque ? `  (${porque})` : ""),
      );
      informe?.push({
        H: caja.clientHeight,
        usada: caja.clientHeight - h,
        hueco: h,
        renglones: +enRenglones.toFixed(1),
        excepcion,
        porque,
      });
      paginas.push(actual);
      actual = [];
    }
    caja.innerHTML = "";
  };

  caja.innerHTML = "";

  /* El tope es el cinturón: cada vuelta o coloca un bloque o parte uno, y las
     dos cosas avanzan, así que el bucle termina. Si algún día no lo hiciera,
     mejor un reparto corto que una pestaña colgada. */
  for (let vueltas = 0; cola.length && vueltas < 5000; vueltas++) {
    const b = cola.shift()!;
    const el = pinta(b);
    if (!desborda()) { actual.push(b); continue; }

    /* Se ha salido. Primero se intenta partirlo por donde llegue. */
    const partido = parteBloque(b, el, desborda, desbordaPor);
    /* «Cabe justo»: se pasa de H por un solo renglón y se deja entero, que es
       la tolerancia que pidió Pablo. La pantalla se cierra ahí. */
    if (partido === "cabe-justo") {
      actual.push(b);
      cierra("el párrafo se pasaba por un renglón y se ha dejado entero");
      continue;
    }
    if (partido) {
      actual.push(partido[0]);
      cola.unshift(partido[1]);
      cierra(`el ${b.b} se partió por donde llegaba`);
      continue;
    }

    /* No se parte: sale de esta pantalla y abre la siguiente. Su alto se
       apunta ANTES de quitarlo: descolgado de la caja mide cero. */
    const altoDelQueNoCupo = Math.round(el.getBoundingClientRect().height);
    el.remove();
    const huecoQueQuedaba = hueco();
    if (!actual.length) {
      /* Ni él solo cabe en una pantalla vacía, y encima no se ha podido
         partir. Lo tiene que arreglar el texto, así que se avisa por consola
         con el nombre del tema, que es lo que pidió Pablo. */
      avisa?.(b);
      actual.push(b);
      cierra("un bloque no cabe ni en una pantalla entera");
      continue;
    }

    /* LAS DOS REGLAS DE BORDE, de la lista que mandó Pablo: «tampoco separes un
       título de su primer párrafo, ni dejes el bloque ⚡ suelto sin nada
       delante». Se cumplen devolviendo bloques al montón para que abran la
       pantalla siguiente.

       LA DEL RAYO, AFINADA. Estaba escrita como «un rayo no abre pantalla
       nunca», y eso costaba entre cien y ciento setenta puntos de hueco cada
       vez: se devolvía el párrafo de delante entero para no empezar con la
       caja del rayo. Pero «suelto sin nada delante» es quedarse SOLO, y un
       rayo que abre pantalla con tres párrafos debajo no está suelto. Así que
       la regla se aplica solo cuando de verdad se quedaría solo: cuando ya no
       queda nada detrás de él. Con eso desaparecen esos huecos y la conclusión
       sigue sin quedarse a solas en una pantalla.

       Y NINGUNA DE LAS DOS A CUALQUIER PRECIO: devolver deja un hueco donde
       antes había texto, y si ese hueco pasa de un cuarto de pantalla el
       remedio es peor que la enfermedad. Entonces no se aplica. */
    const devueltos: Bloque[] = [];
    while (actual.length > 1) {
      const cierraConRotulo = actual[actual.length - 1].b === "rotulo";
      const primero = devueltos.length ? devueltos[0] : b;
      const rayoSolo = primero.b === "rayo" && cola.length === 0;
      if (!cierraConRotulo && !rayoSolo) break;
      devueltos.unshift(actual.pop()!);
      caja.removeChild(caja.lastElementChild!);
    }
    /* EL TOPE DEL 25 % NO VALE PARA EL RÓTULO. Pablo, el 28 de agosto y sin
       matices: «un ## nunca se queda solo al final de una página; si debajo
       del subtítulo no caben al menos 2 líneas de su primer párrafo, el
       subtítulo entero pasa a la página siguiente». Nunca es nunca, así que
       cuando lo que se devuelve es un subtítulo se devuelve cueste lo que
       cueste el hueco. El tope sigue en pie para lo demás.

       Las dos líneas de su párrafo salen solas de `RENGLONES_MINIMOS`: si
       debajo del subtítulo no cabían dos renglones, el párrafo no se partió,
       así que el subtítulo quedó el último y entra por aquí. */
    const devuelveRotulo = devueltos.some((d) => d.b === "rotulo");
    if (devueltos.length && !devuelveRotulo && hueco() > caja.clientHeight * 0.25) {
      for (const d of devueltos) { actual.push(d); pinta(d); }
      devueltos.length = 0;
    }
    cola.unshift(...devueltos, b);
    /* Cuál de las tres excepciones de Pablo es. La 1 —«es la última página»— no
       se declara aquí: si se cierra por esto, es que quedaba algo detrás. */
    const excepcion = devueltos.some((d) => d.b === "rotulo")
      ? "se empujó un ## entero a la página siguiente"
      : b.b === "rotulo"
        ? "se empujó un ## entero a la página siguiente"
        : b.b === "parrafo" || b.b === "cita"
          ? "se empujó un párrafo nuevo porque no cabían 2 de sus líneas"
          : `un ${b.b} no se parte y no cabía entero`;
    cierra(
      `no cabía un ${b.b} de ${altoDelQueNoCupo} en los ${huecoQueQuedaba} ` +
        `que quedaban, y no se parte «${textoDeBloque(b).replace(/<[^>]+>/g, "").slice(0, 40)}…»` +
        (devueltos.length ? ` · ${devueltos.length} devueltos` : ""),
      excepcion,
    );
  }
  cierra();
  return paginas;
}

/**
 * PARTE UN BLOQUE QUE SE HA SALIDO, dejando arriba lo que quepa.
 *
 * Devuelve las dos mitades como bloques, o `null` si no se puede partir ahí:
 * entonces el bloque entero pasa a la pantalla siguiente. `el` es el bloque ya
 * pintado al final de la caja, y sale de aquí con su HTML entero repuesto.
 */
function parteBloque(
  b: Bloque,
  el: HTMLElement,
  desborda: () => boolean,
  desbordaPor: () => number,
): [Bloque, Bloque] | "cabe-justo" | null {
  /* UNA LISTA SE PARTE ENTRE PUNTOS, nunca dentro de uno: se van quitando
     puntos del final hasta que la caja deja de desbordar. */
  if (b.b === "lista") {
    const entero = el.innerHTML;
    const li = (t: string) => `<li>${conGuiones(t)}</li>`;
    const conSigue = (puntos: string[]) =>
      b.sigue ? { b: "lista" as const, puntos, sigue: true as const } : { b: "lista" as const, puntos };

    /* 1) CUÁNTOS PUNTOS ENTEROS CABEN. Se van quitando del final hasta que la
       caja deja de desbordar. */
    let n = b.puntos.length - 1;
    for (; n >= 1; n--) {
      el.innerHTML = b.puntos.slice(0, n).map(li).join("");
      if (!desborda()) break;
    }
    if (n < 0) n = 0;

    /* 2) Y DEL SIGUIENTE, LO QUE QUEPA POR RENGLONES. Sin esto, una lista se
       partía solo entre puntos y la pantalla se cerraba con el hueco de un
       punto entero: en «La costra no está curando nada» eran once renglones,
       porque sus viñetas miden cinco y seis líneas. La regla de Pablo no
       distingue: «cada página se llena hasta H; si un párrafo no cabe entero
       se parte y se mete todo lo que quepa», y una viñeta es un párrafo con
       bolita delante. Se parte con las mismas dos líneas mínimas a cada lado. */
    if (n < b.puntos.length) {
      el.innerHTML = b.puntos.slice(0, n + 1).map(li).join("");
      const ultimo = el.lastElementChild as HTMLElement | null;
      const trozos = ultimo ? cortaHastaLlenar(ultimo, desborda, desbordaPor) : null;
      /* «Cabe justo» aquí significa que los n+1 puntos se pasan por un renglón,
         NO que quepa la lista entera: devolverlo tal cual hacía que `reparte`
         colocara los puntos que faltaban y la pantalla acababa con scroll. Se
         traduce a lo que de verdad quiere decir: entran n+1 puntos. */
      if (trozos === "cabe-justo") {
        if (n + 1 >= b.puntos.length) { el.innerHTML = entero; return "cabe-justo"; }
        el.innerHTML = b.puntos.slice(0, n + 1).map(li).join("");
        return [conSigue(b.puntos.slice(0, n + 1)), { b: "lista", puntos: b.puntos.slice(n + 1) }];
      }
      if (trozos) {
        el.innerHTML = [...b.puntos.slice(0, n), trozos[0]].map(li).join("");
        return [
          conSigue([...b.puntos.slice(0, n), trozos[0]]),
          { b: "lista", puntos: [trozos[1], ...b.puntos.slice(n + 1)], sigue: true },
        ];
      }
    }

    /* 3) Y si no cabía ni el primer punto, se parte por dentro de ese. */
    if (n < 1) {
      el.innerHTML = li(b.puntos[0]);
      const uno = el.firstElementChild as HTMLElement | null;
      const trozos = uno ? cortaHastaLlenar(uno, desborda, desbordaPor) : null;
      if (trozos && trozos !== "cabe-justo") {
        uno!.innerHTML = trozos[0];
        return [
          conSigue([trozos[0]]),
          { b: "lista", puntos: [trozos[1], ...b.puntos.slice(1)], sigue: true },
        ];
      }
      el.innerHTML = entero;
      return null;
    }

    el.innerHTML = b.puntos.slice(0, n).map(li).join("");
    return [conSigue(b.puntos.slice(0, n)), { b: "lista", puntos: b.puntos.slice(n) }];
  }

  /* NI EL ⚡ NI EL 💡 SE PARTEN. Lo del rayo venía de antes; lo del dato lo
     añadió Pablo el 28 de agosto: «> ⚡ y > 💡 nunca se parten; si no caben
     enteros, van enteros a la página siguiente». Los dos son una nota cerrada
     que se lee de un golpe, y media nota al pie de una pantalla no dice nada.
     La cita SÍ se parte: puede medir quince renglones y no cabría en ninguna
     pantalla empezada. */
  const dentro = b.b === "cita" ? el.querySelector("p") : b.b === "parrafo" ? el : null;
  if (!dentro) {
    /* PERO SÍ SE ESTIRAN, y esto es lo que cierra los agujeros de diez
       renglones. Un ⚡ que no cabe por veinte puntos se iba entero a la
       pantalla siguiente y dejaba media pantalla en blanco detrás: el hueco
       que más se ve de toda la app, y el único que no tenía ninguna de las
       tres excepciones que puso Pablo. Pero no hay que partirlo para
       arreglarlo —eso él lo prohibió— sino dejar que se pase de la caja lo
       mismo que se pasa un párrafo por acabar en punto: hasta dos renglones,
       que caen en el margen de pie y están medidos para caber ahí.

       El renglón que manda es el del cuerpo y no el del bloque: lo que hay
       que llenar es un margen de la hoja, no de la caja del rayo. */
    /* PERO SOLO EL ⚡ Y EL 💡, no todo lo que no se parte. Un `rotulo` también
       entra por aquí, y estirarlo es justo lo que Pablo prohibió sin matices:
       «un ## nunca se queda solo al final de una página». Estuvo media hora
       incluido y dejó un subtítulo colgando al pie de la 2 de «Por qué la
       gente mayor huele distinto» —lo cantó `huerfanas.mjs`—: el rótulo se
       pasaba de la caja por medio renglón, se daba por colocado y se quedaba
       ahí solo en vez de bajar con su párrafo. El estirón es para cerrar el
       hueco que deja una nota que no cabe, no para colar un título. */
    if (b.b !== "rayo" && b.b !== "dato") return null;
    const padre = el.parentElement;
    const renglon = padre ? parseFloat(getComputedStyle(padre).lineHeight) || 0 : 0;
    if (renglon > 0 && desbordaPor() > 0 && desbordaPor() <= ESTIRA * renglon + 0.5)
      return "cabe-justo";
    return null;
  }
  const trozos = cortaHastaLlenar(dentro as HTMLElement, desborda, desbordaPor);
  if (trozos === "cabe-justo") return "cabe-justo";
  if (!trozos) return null;
  /* Igual que con la lista: la caja se queda con la cabeza puesta. */
  (dentro as HTMLElement).innerHTML = trozos[0];
  if (b.b === "cita")
    return [
      b.sigue ? { b: "cita", texto: trozos[0], sigue: true } : { b: "cita", texto: trozos[0] },
      { b: "cita", texto: trozos[1], autor: b.autor, sigue: true },
    ];
  return [{ b: "parrafo", texto: trozos[0] }, { b: "parrafo", texto: trozos[1] }];
}

/**
 * EL REPARTO VIVO: mide, reparte, y vuelve a hacerlo cuando cambia algo.
 *
 * Devuelve las pantallas ya hechas —bloques de verdad, alguno partido— y la
 * referencia de la caja donde se mide.
 */
function usePaginas(short: Short) {
  const medidor = useRef<HTMLDivElement>(null);
  const [paginas, setPaginas] = useState<Bloque[][]>(() =>
    short.bloques.length ? [short.bloques] : [],
  );

  useLayoutEffect(() => {
    const caja = medidor.current;
    if (!caja || !short.bloques.length) return;
    let vivo = true;
    let midiendo = false;
    let ultimo = "";

    const mide = () => {
      if (!vivo || midiendo || !medidor.current) return;
      const cuerpo = medidor.current;
      /* NADA DE ARITMÉTICA CON EL ALTO. `reparte` no recibe ninguna altura: la
         caja es `flex: 1` dentro de la hoja gemela, así que su alto ya es el
         sitio que hay, y lleva `overflow: hidden`, así que `scrollHeight >
         clientHeight` dice si el texto se ha salido. Eso es todo lo que se
         mide, y por eso ya no puede haber una barra restada dos veces. */
      if (cuerpo.clientHeight <= 0) return;
      midiendo = true;

      const avisar = (b: Bloque) => {
        console.warn(
          `[Curva] «${short.titulo}»: este bloque no cabe en una pantalla y no se ha ` +
            `podido partir. Pártelo en el texto.\n   ` +
            textoDeBloque(b).replace(/<[^>]+>/g, "").slice(0, 120) +
            "…",
        );
      };

      /* Y EL REPARTO, DE UNA SOLA PASADA Y SIN CASOS ESPECIALES: desde que los
         márgenes son de libro, todas las pantallas tienen el mismo alto de
         texto y no hay una última que medir aparte. */
      const informe: Informe[] = [];
      const nuevas = reparte(cuerpo, short.bloques, { avisa: avisar, informe });
      /* El informe, colgado por id para que se pueda comprobar desde fuera.
         Solo con el diario encendido: en producción no hace falta. */
      if ((globalThis as Record<string, unknown>).__PAGDEBUG) {
        const g = globalThis as Record<string, unknown>;
        g.__PAGINFO = { ...((g.__PAGINFO as object) ?? {}), [short.id]: informe };
      }

      cuerpo.innerHTML = "";
      midiendo = false;
      const firma = JSON.stringify(nuevas);
      if (firma === ultimo) return;
      ultimo = firma;
      setPaginas(nuevas);
    };

    /* SE MIDE CON LA LETRA YA CARGADA. Con la de respaldo del sistema las
       alturas son otras y el reparto sale mal: entre una serifa y la de palo
       seco de reserva hay renglones de diferencia en un párrafo largo. */
    if (document.fonts?.status === "loaded") mide();
    document.fonts?.ready.then(mide).catch(() => mide());
    /* Y si no hay API de fuentes, se mide igual en el cuadro siguiente. */
    requestAnimationFrame(mide);

    /* Regla 6: se rehace al girar el móvil y al cambiar el tamaño de letra del
       sistema. Lo primero cambia el ancho de la hoja; lo segundo, el alto de lo
       medido. El observador ve las dos cosas. */
    const ojo = new ResizeObserver(() => mide());
    ojo.observe(caja);
    if (caja.parentElement) ojo.observe(caja.parentElement);
    window.addEventListener("orientationchange", mide);
    return () => {
      vivo = false;
      ojo.disconnect();
      window.removeEventListener("orientationchange", mide);
    };
  }, [short]);

  return { paginas, medidor };
}

/* --------------------------------------------------------------------------
   El pase
   -------------------------------------------------------------------------- */

/**
 * La sección entera: una pila vertical de historias a pantalla completa.
 *
 * El anclaje vertical lo hace el navegador con `scroll-snap`, que va a 60 fps
 * porque no pasa por JavaScript. Lo único que se observa desde React es CUÁL
 * está delante, y eso sirve para animar su texto, para no tener diez derivas
 * Ken Burns corriendo a la vez y para saber a quién le hablan las flechas del
 * teclado.
 */
export function MuroShorts({ onLeido }: { onLeido: (s: Short, minutos: number) => void }) {
  const reducido = useReducedMotion();
  const [activo, setActivo] = useState(0);
  const scroll = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const caja = scroll.current;
    if (!caja) return;

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset.indice);
            if (!Number.isNaN(i)) setActivo(i);
          }
        }
      },
      { root: caja, threshold: 0.6 },
    );

    for (const hijo of Array.from(caja.children)) observador.observe(hijo);
    return () => observador.disconnect();
  }, []);

  /**
   * Terminar una historia no devuelve a ninguna parte: deja en la siguiente.
   * Devuelve `false` si ya era la última, para que la historia rebote en vez
   * de quedarse quieta sin explicar por qué.
   */
  function irASiguiente(desde: number) {
    const caja = scroll.current;
    const destino = caja?.children[desde + 1] as HTMLElement | undefined;
    if (!destino) return false;
    destino.scrollIntoView({ behavior: reducido ? "auto" : "smooth", block: "start" });
    return true;
  }

  return (
    <motion.div
      className="muro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: spring }}
      exit={{ opacity: 0, transition: { duration: 0.18 } }}
    >
      {/* La marca flota sobre la foto: la sección se reconoce sin robar sitio */}
      <motion.header
        className="muro-marca"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...springPop, delay: 0.1 }}
      >
        <span className="muro-rayo">
          <GlyphRayo tamano={15} />
        </span>
        Shorts
      </motion.header>

      {/* Por cuál del montón vas. Con cien historias, un punto por historia ni
          cabe ni informa: la cuenta sí. Con el muro vacío no se pinta: «1/0»
          se lee como una avería, no como que aún no hay nada. */}
      {SHORTS.length > 0 && (
      <motion.div
        className="muro-cuenta"
        aria-hidden
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...springPop, delay: 0.16 }}
      >
        <span className="muro-cuenta-cifra">
          {activo + 1}
          <span className="muro-cuenta-total">/{SHORTS.length}</span>
        </span>
      </motion.div>
      )}

      {/* Cada historia tiene su ranura, y la ranura no se desmonta nunca: es
          lo que hace que el desplazamiento tenga siempre la altura de las 757
          y que el observador que dice cuál está delante se monte una sola vez.

          Dentro de la ranura solo hay historia si está cerca. Antes se
          montaban las 757 a la vez —757 fotografías precargándose, 757 juegos
          de animaciones y 757 filtros de ruido—, y el desplazamiento iba a
          tirones. Con dos por cada lado hay una pantalla entera de margen
          para que la foto de la siguiente llegue antes de que se vea. */}
      {/* EL MURO VACÍO. Desde el 27 de agosto por la noche puede estarlo: Pablo
          escribe los textos y las historias se montan cuando llegan. Un muro
          sin nada dentro sería una pantalla negra, y una pantalla negra se lee
          como una aplicación rota, no como un cajón que espera. */}
      {SHORTS.length === 0 && (
        <motion.p
          className="muro-vacio"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: 0.2 }}
        >
          Aquí van las curiosidades.
          <br />
          Todavía no hay ninguna escrita.
        </motion.p>
      )}

      <div className="muro-pase" ref={scroll}>
        {SHORTS.map((s, i) => (
          <div key={s.id} className="muro-ranura" data-indice={i}>
            {Math.abs(i - activo) <= VECINAS && (
              <PaginaShort
                short={s}
                indice={i}
                activo={i === activo}
                reducido={!!reducido}
                onLeido={onLeido}
                onSiguiente={() => irASiguiente(i)}
              />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* --------------------------------------------------------------------------
   Una historia
   -------------------------------------------------------------------------- */

function PaginaShort({
  short,
  indice,
  activo,
  reducido,
  onLeido,
  onSiguiente,
}: {
  short: Short;
  indice: number;
  activo: boolean;
  reducido: boolean;
  onLeido: (s: Short, minutos: number) => void;
  /** Lleva a la historia de abajo. `false` si esta era la última. */
  onSiguiente: () => boolean;
}) {
  /** 0 es la portada; 1, 2 y 3 son las páginas. */
  const [paso, setPaso] = useState(0);
  const [sentido, setSentido] = useState(1);
  const [guardado, setGuardado] = useState(false);
  const arranque = useRef(Date.now());
  const contada = useRef(false);
  const bloqueado = useRef(false);
  /** Si el último gesto fue un arrastre, el `click` que viene detrás sobra. */
  const arrastro = useRef(false);

  /* Las pantallas de esta historia, calculadas midiendo. Ver `usePaginas` y
     `.claude/skills/paginado-shorts/SKILL.md`. */
  const { paginas, medidor } = usePaginas(short);
  const total = paginas.length + 1;

  // Un solo valor de gesto para toda la historia: el texto va pegado al dedo.
  // La foto ya no se mueve en contra —el parallax le cambiaba el encuadre a
  // media pasada, y la maqueta la tiene quieta—, así que del gesto solo cuelga
  // la hoja.
  const x = useMotionValue(0);
  const xHoja = useTransform(x, (v) => v * 0.92);

  /* Mide el texto ya pintado y lo encoge si se sale. Ver `useAjusteDeTexto`. */
  const ajusta = useAjusteDeTexto();

  // El cronómetro arranca cuando la historia se pone delante, no cuando se
  // monta: se montan todas a la vez al entrar en la sección.
  useEffect(() => {
    if (activo) arranque.current = Date.now();
  }, [activo]);

  function avanzar(delta: number) {
    if (bloqueado.current) return;
    const destino = paso + delta;
    if (destino < 0) return rebotar(-1);
    if (destino >= total) return terminar();

    bloqueado.current = true;
    setSentido(delta);
    setPaso(destino);
    animate(x, 0, { ...springSoft, onComplete: () => (bloqueado.current = false) });
  }

  function terminar() {
    if (!contada.current) {
      contada.current = true;
      onLeido(short, (Date.now() - arranque.current) / 60000);
    }
    if (!onSiguiente()) return rebotar(1);
    // Ya no se ve: se rebobina para que, si alguien vuelve a subir, la
    // historia esté otra vez por la portada y no por el final.
    window.setTimeout(() => setPaso(0), 420);
  }

  function rebotar(direccion: number) {
    animate(x, direccion * 26, { ...spring, onComplete: () => animate(x, 0, springSoft) });
  }

  function alSoltar(_: unknown, info: PanInfo) {
    const { offset, velocity } = info;

    // Un toque con la mano poco firme mueve tres o cuatro píxeles y eso ya
    // cuenta como arrastre para Framer. Se trata como lo que era: un toque.
    if (Math.abs(offset.x) < 8 && Math.abs(offset.y) < 8) return avanzar(1);

    const derecha = offset.x > UMBRAL_PX || velocity.x > UMBRAL_VEL;
    const izquierda = offset.x < -UMBRAL_PX || velocity.x < -UMBRAL_VEL;

    // A la derecha se avanza. A la izquierda se vuelve, salvo en la portada,
    // donde no hay nada detrás: allí cualquier lado tira hacia delante, que es
    // lo que espera quien todavía no sabe cómo va esto.
    if (derecha) return avanzar(1);
    if (izquierda) return avanzar(paso === 0 ? 1 : -1);
    animate(x, 0, springSoft);
  }

  // Las flechas solo le hablan a la historia que está delante.
  useEffect(() => {
    if (!activo) return;
    function teclas(e: KeyboardEvent) {
      // Con el foco en el corazón, el espacio es del corazón, no de la página.
      if (document.activeElement?.closest("button")) return;
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        avanzar(1);
      }
      if (e.key === "ArrowLeft") avanzar(-1);
    }
    window.addEventListener("keydown", teclas);
    return () => window.removeEventListener("keydown", teclas);
  });

  const portada = paso === 0;
  /* La última es la que lleva los dos botones y el aviso de que la siguiente
     historia va abajo. Una portada SIN TEXTO todavía es a la vez la primera y
     la última —solo hay una pantalla—, y con esa cuenta se le pintaban encima
     «Guardar», «Compartir» y «Siguiente short», que es justo lo que Pablo
     pidió quitar de la portada: la imagen y el título, nada más. Así que sin
     páginas no hay última: hay cartel. */
  const ultima = paso === total - 1 && paginas.length > 0;

  return (
    <section
      className="muro-pagina"
      /* El id del short, en el DOM. No lo usa la app: lo usan los
         comprobadores, para cruzar lo que se ve con el informe que deja el
         reparto en `window.__PAGINFO`. Sin esto había que adivinar de quién
         era cada informe por el orden en que se montaron los shorts, y con el
         muro virtualizado ese orden no es el del muro. */
      data-short={short.id}
      data-indice={indice}
      style={{ ["--acento" as string]: short.color }}
    >
      {/* El gesto vive en la página entera: se desliza desde cualquier punto,
          no hay que ir a buscar el texto de abajo. `touch-action: pan-y` deja
          pasar el desplazamiento vertical, que lo gobierna el navegador. */}
      <motion.div
        className="muro-gesto"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.34}
        dragMomentum={false}
        onDragStart={() => (arrastro.current = true)}
        onDragEnd={(e, info) => {
          alSoltar(e, info);
          // El navegador dispara un `click` al soltar el ratón aunque haya
          // habido arrastre, y llega ANTES que este manejador: sin la marca,
          // deslizar a la izquierda avanzaba en vez de volver, porque el
          // click ya había pasado página. Se limpia detrás del click.
          window.setTimeout(() => (arrastro.current = false), 0);
        }}
        /* Tocar también vale para volver: la mitad derecha avanza y la
           izquierda retrocede, que es como funciona cualquier lector de
           historias. Desde la portada no hay nada a lo que volver, así que
           ahí las dos mitades avanzan. El tercio izquierdo es más estrecho
           que el derecho a propósito: se avanza mil veces por cada vez que se
           vuelve, y el dedo cae solo en el lado de avanzar. */
        onClick={(e) => {
          if (arrastro.current) return;
          const caja = e.currentTarget.getBoundingClientRect();
          const atras = e.clientX - caja.left < caja.width * 0.3;
          avanzar(atras && paso > 0 ? -1 : 1);
        }}
      >
        {/* La foto va tal cual, como en la maqueta: ni zoom de reposo, ni
            relleno desenfocado, ni tinte, ni la banda escalada al pasar de
            página. Todo eso recortaba el cuadro por su cuenta, y Pablo pidió
            que la foto se vea como la pasa. Aquí es lo que es: recortada al
            alto de la banda y centrada donde diga su foco. */}
        {/* Y en una historia de solo portada, las páginas no llevan banda: no
            es que la banda se quede vacía, es que no está. Dejarla habría
            pintado el cartel generado —un círculo de color— en cada pantalla,
            que es más ruido que una foto repetida; y sobre todo, quitándola la
            hoja se queda con la pantalla entera, que es de donde sale el sitio
            para los textos largos de Pablo. */}
        {(portada || !short.soloPortada) && (
        <div className="muro-foto" data-portada={portada}>
          <Fotografia
            foto={fotoDe(short, paso)}
            Respaldo={respaldoDe(short)}
            reducido={reducido}
            plana
          />
          {/* El pie de la imagen, en las cuatro pantallas. No es una firma:
              dice qué es lo que se está viendo, de qué año y de dónde salió.

              VA DENTRO DE LA IMAGEN Y NO DEBAJO, y no es un capricho de
              maqueta. Debajo, en su propio renglón, el pie era lo SEGUNDO que
              se leía de la pantalla: cuatro líneas de gris entre la fotografía
              y el titular, o sea entre lo que engancha y lo que promete. Un
              crédito no se lee, se consulta. Encima de la imagen, apoyado en
              el degradado con el que la banda se disuelve en la página, sigue
              estando entero —la licencia CC BY-SA obliga y aquí se cumple— y
              deja de interrumpir. */}
          {/* Y si no hay crédito, NO SE PINTA NADA. Estuvo cayendo «Imagen del
              proyecto.» por defecto, y eso no es un hueco vacío: es una
              afirmación, y falsa, sobre catorce fotografías que no son
              nuestras. Mejor la banda sin línea hasta que Pablo diga de dónde
              salen; el aviso de que falta lo da `portadas.mjs` y la fila del
              CSV, que es donde tiene que darse. */}
          {(fotoDe(short, paso)?.autor ?? short.encargo) ? (
            <p className="muro-credito">{fotoDe(short, paso)?.autor ?? short.encargo}</p>
          ) : null}
        </div>
        )}

        <motion.div
          className="muro-hoja"
          data-forma={portada ? "portada" : "pagina"}
          data-sinfoto={!portada && !!short.soloPortada}
          style={{ x: xHoja }}
        >
          <AnimatePresence mode="wait" custom={sentido}>
            <motion.div
              key={paso}
              ref={ajusta}
              className="muro-hoja-cuerpo"
              custom={sentido}
              // Se avanza tirando hacia la derecha, así que la pantalla que se
              // va sale por la derecha y la que llega entra por la izquierda:
              // el papel sigue al dedo en lugar de contradecirlo.
              /* El texto entra subiendo un poco y con el dedo: sigue el
                 sentido del gesto en horizontal y sube en vertical, que es lo
                 que hace que el cambio se sienta como pasar una hoja y no
                 como cambiar de diapositiva. */
              initial={{ opacity: 0, x: sentido * -22, y: 14 }}
              animate={{ opacity: 1, x: 0, y: 0, transition: { ...spring, delay: 0.05 } }}
              exit={{ opacity: 0, x: sentido * 20, y: -10, transition: { duration: 0.16 } }}
            >
              {portada ? (
                <Portada short={short} />
              ) : (
                <CuerpoPagina bloques={paginas[paso - 1] ?? []} />
              )}
            </motion.div>
          </AnimatePresence>

          {/* El pie, exactamente como en la maqueta aprobada: en la portada
              solo "Seguir"; en las dos de en medio, nada; y en la ultima los
              dos botones y el aviso de que la siguiente historia va abajo. */}
          {/* «Seguir» solo si hay algo detrás. Una portada sin texto todavía
              —las que esperan lo que escriba Pablo— tenía la flecha animada
              prometiendo una pantalla siguiente que no existe, y el dedo se
              iba a por ella y no pasaba nada. */}
          {portada && paginas.length > 0 && (
            <span className="muro-tirar">
              Seguir
              <motion.span
                className="muro-flecha"
                animate={reducido ? {} : { x: [0, 7, 0] }}
                transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                →
              </motion.span>
            </span>
          )}

          {/* EL INDICADOR DE PÁGINA. Va en todas las pantallas de texto menos la
              última, que en su sitio lleva los botones. Los dos viven DENTRO
              del margen de abajo, en posición absoluta, así que no le quitan
              ni un punto al texto: el margen que ocupan ya estaba ahí. */}
          {!portada && !ultima && paginas.length > 0 && (
            <p className="muro-indice" aria-hidden>
              {paso} / {paginas.length}
            </p>
          )}

          {ultima && (
            <div className="muro-pie-final">
              <div className="muro-acciones">
                <motion.button
                  className="muro-accion"
                  data-on={guardado}
                  whileTap={{ scale: 0.94 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setGuardado((v) => !v);
                  }}
                  animate={guardado ? { scale: [1, 1.06, 1] } : {}}
                  transition={springPop}
                  aria-pressed={guardado}
                >
                  <GlyphHeart on={guardado} />
                  Guardar
                </motion.button>
                <motion.button
                  className="muro-accion"
                  whileTap={{ scale: 0.94 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <GlyphShare />
                  Compartir
                </motion.button>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* Los tramos van fuera de la capa que se arrastra: son de la historia,
          no de la pantalla, y moverlos con el dedo los volvería ilegibles.

          Hay un tramo por página, no uno por pantalla: en la portada aún no
          se ha leído nada y la barra está entera vacía, que es como está en
          la maqueta. */}
      {/* LA HOJA DE MEDIR: una copia exacta de la pantalla de texto, invisible,
          con la historia ENTERA dentro. De aquí salen las alturas de cada
          bloque y de aquí sale el alto útil de la pantalla, leídos del
          elemento y no de una constante.

          Es una hoja gemela y no una caja cualquiera porque lo que se mide
          tiene que medirse en las mismas condiciones: el mismo ancho, los
          mismos rellenos, la misma tipografía. `inset: 0` sobre la pantalla la
          hace del tamaño de la de verdad —sin banda de imagen, la hoja ocupa
          la pantalla entera—.

          Va SIEMPRE montada, también en la portada: el número de pantallas
          hace falta antes de entrar, para pintar la barra de tramos y para
          saber si hay algo detrás del «Seguir».

          `visibility: hidden` y no `display: none`: lo segundo no calcula la
          maqueta y devolvería alturas de cero. `aria-hidden` para que quien
          escuche la pantalla no oiga el tema dos veces. */}
      {short.bloques.length > 0 && (
        <div className="muro-hoja muro-medidor" data-forma="pagina" data-sinfoto="true" aria-hidden>
          <div
            className="short-cuerpo"
            ref={medidor}
            dangerouslySetInnerHTML={{ __html: htmlDeBloques(short.bloques) }}
          />
          {/* Aquí iba una copia inerte del pie, para medir cuánto sitio le
              quitaba a la última pantalla. Ya no hace falta: los botones viven
              dentro del margen de abajo y no le quitan sitio a nadie. */}
        </div>
      )}

      {/* Y sin páginas no hay barra: quedaba una franja vacía flotando. */}
      {paginas.length > 0 && (
        <div className="muro-tramos" aria-hidden>
          {paginas.map((_: Bloque[], i: number) => (
            <span key={i} className="muro-tramo">
              <motion.span
                className="muro-tramo-relleno"
                initial={false}
                animate={{ scaleX: i < paso ? 1 : 0 }}
                transition={springTight}
              />
            </span>
          ))}
        </div>
      )}
    </section>
  );
}

/* --------------------------------------------------------------------------
   La portada de una historia: de qué va y por qué te importa
   -------------------------------------------------------------------------- */

/**
 * El título en una sola línea, siempre.
 *
 * Pablo lo pidió así y no admite excepción: «todos los títulos deben ocupar
 * una línea, nunca más de una». Contarle las palabras al título no lo
 * garantiza, porque lo que decide si cabe no es cuántas palabras tiene sino
 * cuánto miden pintadas, y eso cambia con el móvil: la misma frase entra en
 * una pantalla de 430 y se parte en una de 320, y entra con la letra de un
 * iPhone y se parte con la de un Android. Medidos los 757 títulos, solo 31
 * caben en una línea en todas partes.
 *
 * Así que se mide de verdad, ya pintado, y si se sale se encoge lo justo para
 * entrar. El suelo está en el 78 %: por debajo de ahí el título empezaría a
 * parecer otra cosa, y antes que eso vale más acortarlo a mano —que es el
 * trabajo que queda pendiente en el molde—. Con un título corto no se toca
 * nada y sale a su tamaño.
 */
/* EL SUELO DE UNA LÍNEA. Por debajo de esto, el titular deja de ser un cartel
   y pasa a ser letra pequeña: en un móvil de 375 son unos veinticinco puntos.
   Cuando un título no cabe en una línea sin bajar de aquí, se envuelve. */
const SUELO_UNA_LINEA = 0.62;
/* Y envuelto, hasta tres renglones. Si ni así cabe, se encoge, pero nunca por
   debajo de esto: antes cuatro renglones que un cartel ilegible. */
const RENGLONES_TITULAR = 3;
const SUELO_ENVUELTO = 0.45;

/**
 * EL TITULAR DE LA PORTADA, LO MÁS GRANDE QUE QUEPA.
 *
 * Se pinta a 11cqw y se encoge hasta que entra, midiendo con el título YA
 * pintado: lo que decide si cabe no es cuántas letras hay sino cuánto miden en
 * ESTE móvil, con ESTA letra.
 *
 * EN UNA LÍNEA SIEMPRE QUE SE PUEDA, que es lo que pidió Pablo. Pero «siempre»
 * se escribió cuando los títulos eran «Por qué llueve», y el 28 de agosto
 * llegaron los suyos partidos del Sol: «Al Sol le quedan cinco mil millones de
 * años. A nosotros, mil», cincuenta y nueve letras. En una línea eso no cabe
 * en un móvil ni encogiéndolo a la mitad —salía cortado por el marco, que es
 * lo único que no puede pasar—, así que la regla se lee como lo que quería
 * decir: un cartel se compone en una línea mientras la línea se lea.
 *
 * Por debajo de `SUELO_UNA_LINEA` se envuelve, se equilibran los renglones con
 * `text-wrap: balance` y se sigue encogiendo hasta que quepa en tres.
 */
function useUnaLinea(texto: string) {
  const ref = useRef<HTMLHeadingElement>(null);
  useLayoutEffect(() => {
    const e = ref.current;
    if (!e) return;
    const ajusta = () => {
      /* Siempre se empieza de cero: si se midiera sobre la escala anterior, un
         título que ha crecido no volvería a subir nunca. */
      e.removeAttribute("data-envuelve");
      e.style.setProperty("--encoge", "1");
      const cabe = e.clientWidth;
      if (cabe <= 0) return;
      const mide = e.scrollWidth;
      if (mide <= cabe) return;

      const escala = cabe / mide;
      if (escala >= SUELO_UNA_LINEA) {
        e.style.setProperty("--encoge", String(escala));
        return;
      }

      /* No cabe en una línea sin quedarse ilegible: se envuelve y se busca la
         escala más grande que entre en tres renglones. De 0,04 en 0,04, que
         son cinco medidas como mucho y cada una es una relectura de la
         maqueta, no un cálculo. */
      e.setAttribute("data-envuelve", "true");
      const renglon = () => parseFloat(getComputedStyle(e).lineHeight) || 1;
      for (let s = SUELO_UNA_LINEA; s >= SUELO_ENVUELTO - 0.001; s -= 0.04) {
        e.style.setProperty("--encoge", String(s));
        if (Math.round(e.scrollHeight / renglon()) <= RENGLONES_TITULAR) return;
      }
      e.style.setProperty("--encoge", String(SUELO_ENVUELTO));
    };
    ajusta();
    const ro = new ResizeObserver(ajusta);
    ro.observe(e);
    return () => ro.disconnect();
  }, [texto]);
  return ref;
}

/**
 * QUE EL TEXTO NO SE SALGA NUNCA DE SU CAJA.
 *
 * El 27 de agosto, con el muro reducido a una historia, se vio a la primera:
 * la entrada del Sol rebosaba la hoja y las dos últimas líneas se pintaban
 * ENCIMA del «Seguir». No era un fallo de esa historia. La hoja tiene el alto
 * que tiene —lo que sobra de la pantalla después de la banda de imagen— y el
 * texto se escribe a mano en un fichero, así que antes o después alguna
 * entrada iba a pasarse. Con setecientas historias pasó y nadie lo vio, que
 * es lo que hace peligroso a este fallo: no rompe nada, solo deja una
 * pantalla ilegible cada tantas.
 *
 * Se mide con el texto YA PINTADO y se encoge lo justo, igual que el titular
 * en `useUnaLinea`, porque lo que decide si cabe no es cuántas palabras hay
 * sino cuánto miden en ESTE móvil: la misma entrada entra en un iPhone de 932
 * de alto y se sale en un SE de 667.
 *
 * El suelo está en el 86 %. Por debajo se notaría que una historia se lee más
 * pequeña que la de al lado, y eso es peor que el hueco: la regla de Pablo es
 * que la portada y las tres páginas midan lo mismo entre ellas. Si una
 * historia toca el suelo, lo que hay que arreglar es el texto —`scripts/
 * cabe.mjs` lo dice antes de publicar—, no la maqueta.
 */
const SUELO_TEXTO = 0.86;

/** ¿Se sale el contenido de su caja? Medido SOBRE LA MAQUETA, no sobre
 *  `scrollHeight`, y la diferencia costó una noche entera.
 *
 *  `scrollHeight` cuenta también el desplazamiento de las transformaciones, y
 *  los párrafos entran en pantalla con la animación de siempre: catorce
 *  puntos más abajo de su sitio, subiendo. Medir durante esa animación —y la
 *  medición corre justo entonces, en el primer fotograma— da siempre catorce
 *  puntos «de más» que ninguna letra puede encoger, así que el texto se iba
 *  al suelo del 86 % en pantallas donde cabía sobrado. Con la banda fija el
 *  fallo quedaba disimulado —el hueco muerto bajo el texto absorbía los
 *  catorce puntos casi siempre—, y los ajustes fantasma de 0,96 y 0,98 que
 *  salían a veces eran exactamente esto.
 *
 *  `offsetTop` y `offsetHeight` son de la maqueta: ignoran las
 *  transformaciones. Se mide dónde ACABARÁN los párrafos, no dónde están
 *  ahora mismo de paso. */
function desborda(e: HTMLElement): boolean {
  let fondo = 0;
  for (const hijo of Array.from(e.children) as HTMLElement[])
    fondo = Math.max(fondo, hijo.offsetTop + hijo.offsetHeight);
  return fondo - e.offsetTop > e.clientHeight + 1;
}

function useAjusteDeTexto() {
  const nodo = useRef<HTMLDivElement | null>(null);
  const vigia = useRef<ResizeObserver | null>(null);
  const midiendo = useRef(false);

  const mide = useCallback(() => {
    const e = nodo.current;
    if (!e || midiendo.current) return;
    midiendo.current = true;
    e.style.setProperty("--ajuste", "1");
    /* Se baja de dos en dos centésimas y no se calcula de una vez con una
       regla de tres: el alto del texto no es proporcional al cuerpo de letra
       —cambia el número de líneas, que es un salto— y una regla de tres se
       pasa de largo o se queda corta. Son ocho vueltas como mucho. */
    for (let f = 1; f > SUELO_TEXTO && desborda(e); ) {
      f -= 0.02;
      e.style.setProperty("--ajuste", f.toFixed(2));
    }
    midiendo.current = false;
  }, []);

  /* Ref de función y no de objeto: la hoja se desmonta y se vuelve a montar en
     cada página —`key={paso}` dentro de AnimatePresence—, y con `mode="wait"`
     la nueva no existe todavía cuando cambia `paso`. La función avisa justo
     cuando el nodo entra en el árbol, que es cuando se puede medir.

     PERO NO SE MIDE AHÍ MISMO, y eso costó una tarde. La ref se llama durante
     el commit de React, con el nodo ya colgado del árbol pero sin que el
     navegador haya rehecho el reparto de la columna: la caja todavía no tiene
     su alto definitivo, así que `clientHeight` sale corto, el bucle cree que
     el texto rebosa y lo encoge hasta el suelo del 86 %. Se veía clarísimo en
     la pantalla ya hecha: texto reducido y ciento sesenta puntos de sitio de
     sobra debajo.

     Se mide en el fotograma siguiente, con el reparto hecho, y otra vez
     cuando terminan de cargar las letras: una serifa del sistema puede
     resolverse a mitad de la primera pintada y cambia el número de líneas. */
  return useCallback(
    (e: HTMLDivElement | null) => {
      vigia.current?.disconnect();
      nodo.current = e;
      if (!e) return;
      requestAnimationFrame(mide);
      document.fonts?.ready.then(mide);
      vigia.current = new ResizeObserver(mide);
      vigia.current.observe(e);
      /* Y SE OBSERVA TAMBIÉN LA FOTOGRAFÍA, no solo el texto. Con la banda
         elástica esto dejó de ser opcional, y costó una tarde verlo: en el
         primer medio segundo el texto mide una línea MÁS que un momento
         después —los guiones de `hyphens: auto` llegan cuando el navegador
         carga su diccionario, y recuperan esa línea—. La medición corre en
         ese medio segundo, ve que no cabe ni encogiendo y deja la letra en
         el suelo. Cuando la línea sobrante desaparece ya nadie vuelve a
         mirar: la caja del texto no ha cambiado de tamaño exterior, así que
         el observador no salta. La que sí cambia es la fotografía, que
         absorbe el hueco que el texto suelta. Observándola a ella, el
         reajuste llega solo y la letra vuelve a su tamaño. */
      const foto = e.closest(".muro-pagina")?.querySelector(".muro-foto");
      if (foto) vigia.current.observe(foto);
    },
    [mide],
  );
}

function Portada({ short }: { short: Short }) {
  const titulo = useUnaLinea(short.titulo);
  /* LA PORTADA ES UN CARTEL: la fotografía a pantalla completa y el título
     encima. Nada más.
     
     Pablo, el 27 por la noche: «pon la imagen y el título solo, de momento, y
     las demás páginas con el texto […] que quede súper bonito y precioso».
     
     Antes llevaba además el gancho y el párrafo de entrada, y los tres juntos
     obligaban a subir el velo hasta media pantalla para que se leyeran: o sea
     que la fotografía se veía por la mitad justo en la única pantalla cuyo
     trabajo es que la mires. Ahora el velo solo tiene que sostener dos líneas
     y arranca abajo del todo, así que la imagen se ve entera.
     
     El `gancho` y la `entrada` siguen escritos en cada historia —hacen falta
     para las listas y para el buscador— y aquí no se pintan. El texto de la
     historia va en las páginas, que es donde se lee. */
  return (
    <>
      <motion.p
        className="port-tema"
        custom={0.6}
        variants={enterVariants}
        initial="hidden"
        animate="shown"
      >
        {short.categoria}
      </motion.p>
      <motion.h2 ref={titulo} custom={1} variants={enterVariants} initial="hidden" animate="shown">
        {short.titulo}
      </motion.h2>
    </>
  );
}

/* --------------------------------------------------------------------------
   El cuerpo de una página: el bloque de texto y nada más. Antes llevaba
   además el golpe de abajo —la cifra o la frase—, y sin él la pieza se queda
   en una sola cosa. Que las tres páginas de las setecientas historias
   compartan esqueleto es lo que permite leer diez seguidas sin cansarse: el
   ojo aprende dónde está cada cosa una vez y ya no vuelve a buscarla.
   -------------------------------------------------------------------------- */

function CuerpoPagina({ bloques }: { bloques: Bloque[] }) {
  /* Lo que se pinta es una página de libro: las mismas cuatro piezas que el
     lector de resúmenes —subtítulo, párrafo, lista y caja del rayo— con sus
     medidas. Pablo, el 28 de agosto: «hazlo todo como está en los libros
     exactamente igual».

     Y NO SABE CUÁNTAS PÁGINAS HAY. Recibe los bloques que le tocan a esta
     pantalla y los pinta; quién decide dónde se corta es `reparteBloques`, que
     mide el móvil de quien lee. Ver `.claude/skills/paginado-shorts/SKILL.md`. */
  return (
    <div className="short-pagina">
      <motion.div
        className="short-cuerpo"
        custom={2}
        variants={enterVariants}
        initial="hidden"
        animate="shown"
      >
        {bloques.map((b, i) => (
          <PintaBloque key={i} b={b} />
        ))}
      </motion.div>
    </div>
  );
}

/**
 * Los bloques en HTML, para la caja de medir.
 *
 * Se pinta con `dangerouslySetInnerHTML` y no con componentes a propósito:
 * `reparte` REESCRIBE ese HTML mientras mide —cuando parte un párrafo, deja
 * dentro la cola para volver a medirla—, y si React fuera dueño de esos hijos
 * los repondría en cualquier re-render, en mitad de la medida. Con el HTML
 * puesto de una vez, React no vuelve a mirar ahí dentro.
 */
/**
 * El «¿Sabías que…?» de un dato, marcado para poder pintarlo en el color del
 * tema. Solo la primera mitad de un dato partido lo lleva: la de abajo empieza
 * a media frase y ahí no hay nada que abrir.
 *
 * Se hace con una expresión sobre el HTML ya compuesto y no partiendo la
 * cadena antes, porque `conGuiones` mete guiones blandos dentro de las
 * palabras: buscar «¿Sabías que…?» en el texto crudo funcionaría y en el
 * compuesto no, y lo que llega a la pantalla es el compuesto.
 */
function abreDato(html: string, sigue?: true): string {
  if (sigue) return html;
  return html.replace(
    /^((?:¿|&iquest;)[\s\S]{0,40}?\?)/,
    '<span class="dato-abre">$1</span>',
  );
}

export function htmlDeBloques(bloques: Bloque[]): string {
  return bloques
    .map((b) => {
      if (b.b === "rotulo") return `<h3>${conGuiones(b.texto)}</h3>`;
      if (b.b === "parrafo") return `<p>${conGuiones(b.texto)}</p>`;
      if (b.b === "lista")
        return `<ul${b.sigue ? ' data-sigue="true"' : ""}>${b.puntos.map((t) => `<li>${conGuiones(t)}</li>`).join("")}</ul>`;
      if (b.b === "dato")
        return `<p class="dato"${b.sigue ? ' data-sigue="true"' : ""}>${abreDato(conGuiones(b.texto), b.sigue)}</p>`;
      if (b.b === "cita")
        return (
          `<blockquote class="cita"${b.sigue ? ' data-sigue="true"' : ""}>` +
          `<p>${conGuiones(b.texto)}</p>` +
          (b.autor ? `<cite>${conGuiones(b.autor)}</cite>` : "") +
          `</blockquote>`
        );
      return `<blockquote class="rayo"${b.sigue ? ' data-sigue="true"' : ""}><p>${conGuiones(b.texto)}</p></blockquote>`;
    })
    .join("");
}

/** Un bloque, pintado. Es la misma tabla que `PintaBloque` del lector. */
function PintaBloque({ b }: { b: Bloque }) {
  switch (b.b) {
    case "rotulo":
      return <h3 dangerouslySetInnerHTML={{ __html: conGuiones(b.texto) }} />;
    case "parrafo":
      return <p dangerouslySetInnerHTML={{ __html: conGuiones(b.texto) }} />;
    case "lista":
      return (
        <ul data-sigue={b.sigue ? "true" : undefined}>
          {b.puntos.map((t, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: conGuiones(t) }} />
          ))}
        </ul>
      );
    case "dato":
      return (
        <p
          className="dato"
          data-sigue={b.sigue ? "true" : undefined}
          dangerouslySetInnerHTML={{ __html: abreDato(conGuiones(b.texto), b.sigue) }}
        />
      );
    case "cita":
      return (
        <blockquote className="cita" data-sigue={b.sigue ? "true" : undefined}>
          <p dangerouslySetInnerHTML={{ __html: conGuiones(b.texto) }} />
          {b.autor ? <cite dangerouslySetInnerHTML={{ __html: conGuiones(b.autor) }} /> : null}
        </blockquote>
      );
    case "rayo":
      return (
        <blockquote className="rayo" data-sigue={b.sigue ? "true" : undefined}>
          <p dangerouslySetInnerHTML={{ __html: conGuiones(b.texto) }} />
        </blockquote>
      );
  }
}

