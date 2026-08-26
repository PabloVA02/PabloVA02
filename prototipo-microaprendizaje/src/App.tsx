import { useEffect, useRef, useState, type ReactElement } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MINUTOS_OBJETIVO } from "./lesson";
import { cargarResumen, resumenCargado } from "./libros/indice";
import type { Resumen } from "./libros/tipos";
import { minutos as minutosDe } from "./libros/tipos";
import { Racha, RetoDiario } from "./Racha";
import { DetalleLibro, Inicio, LIBROS, MiBiblioteca, type Libro } from "./Biblioteca";
import { Onboarding } from "./Onboarding";
import { MuroShorts } from "./Shorts";
import { Explorar } from "./Explorar";
import { desbloquea } from "./voz";
import { Pago } from "./Pago";
import { Checkout } from "./Checkout";
import { Perfil } from "./Perfil";
import type { Semana } from "./Crecimiento";
import { Ajustes } from "./Ajustes";
import { usePreferencias } from "./preferencias";
import { AntiScroll } from "./AntiScroll";
import { Lector } from "./Lector";
import { FinResumen } from "./FinResumen";
import { PAGINAS, paginasDeResumen } from "./libros/paginas";
import { AvisoRegalo, Oferta } from "./Regalo";
import { Resena, tocaPedirResena } from "./Resena";
import { spring, springPop, springSoft, springTight } from "./motion";
import { GlyphBiblioteca, GlyphLibros, GlyphLupa, GlyphRayo } from "./glyphs";

type Pantalla =
  | "intro" | "pago" | "inicio" | "detalle" | "lector" | "fin" | "racha" | "reto"
  | "shorts" | "perfil" | "ajustes" | "oferta" | "alta" | "biblioteca"
  | "explorar" | "anti";
/** Las pantallas raíz: las únicas que enseñan la barra de abajo. */
/* Los shorts la llevan ahora también. Antes no: la pantalla era la página
   entera y una barra flotando encima le comía sitio al texto. Pablo la quiere
   ahí, y con razón —sin ella, del muro solo se sale volviendo atrás—, así que
   lo que cede es el texto: el pie de la hoja deja sesenta y dos puntos libres
   para que la barra no tape ni el «Seguir» ni la última línea. */
const CON_BARRA: Pantalla[] = ["inicio", "perfil", "biblioteca", "shorts", "explorar"];

/** Racha de ejemplo del prototipo. */
const RACHA = 3;
/** Y la más larga que ha tenido. Va al lado de la de arriba en el perfil: una
 *  racha corta con su récord delante es una meta; sola, es un reproche. */
const RECORD = 12;

/* Seis semanas de ejemplo para la gráfica del perfil, de la más vieja a la de
   ahora. Es el mismo apaño que `minutosTotales`, y por la misma razón: un
   perfil recién abierto no tiene historial, y una gráfica de seis ceros no
   enseña nada de lo que hace la gráfica.

   Los números no son al azar. Las ideas van más o menos a un tercio de los
   minutos —una página son ocho ideas y unos veintitrés minutos de resumen—,
   pero NO exactamente, y ahí está la gracia: la tercera semana leyó despacio
   —muchos minutos, pocas ideas, un libro largo— y la cuarta al revés, a
   ratos sueltos y con libros breves. Si las dos series fueran proporcionales
   dibujarían la misma línea dos veces y el segundo trazo sobraría. */
const HISTORIAL: Semana[] = [
  { ideas: 12, minutos: 41 },
  { ideas: 21, minutos: 68 },
  { ideas: 16, minutos: 62 },
  { ideas: 29, minutos: 79 },
  { ideas: 33, minutos: 108 },
  { ideas: 41, minutos: 124 },
];

/* Lo leído por temas, también de ejemplo, y también se le suma lo de verdad
   según se van terminando resúmenes. Cinco y no nueve: por debajo del quinto
   los tramos de la barra son de dos puntos de ancho y dejan de leerse. */
const TEMAS_MUESTRA: { nombre: string; n: number }[] = [
  { nombre: "Historia", n: 14 },
  { nombre: "Psicología", n: 11 },
  { nombre: "Economía", n: 8 },
  { nombre: "Ciencia", n: 6 },
  { nombre: "Filosofía", n: 4 },
];

/** El color de una categoría, sacado de la estantería. No hace falta una
 *  tabla nueva aquí: cada libro ya trae el suyo, y cogerlo de ahí hace
 *  imposible que el perfil pinte «Historia» de un color y la portada de
 *  otro. */
function colorDeTema(categoria: string): string {
  return LIBROS.find((l) => l.categoria === categoria)?.color ?? "var(--sage)";
}
/* Si el usuario está suscrito. En el prototipo se llega al inicio después del
   alta, así que es cierto por defecto; existe como constante, y no como un
   literal suelto en cada llamada, para que el día que haya suscripción de
   verdad haya un solo sitio que tocar.
   Con `?gratis` se mira la app como la ve quien todavía no paga, que es el
   otro estado del libro del día. Es el mismo apaño que `?p=` y por el mismo
   motivo: para revisar la pantalla sin desandar el alta. */
const SUSCRITO =
  typeof window === "undefined"
    ? true
    : !new URLSearchParams(window.location.search).has("gratis");

/* Atajo para mirar una pantalla suelta sin pasar por el onboarding entero:
   ?p=shorts abre directamente el muro. Sirve para revisar el diseño en el
   navegador y para las capturas, y no molesta a nadie: sin el parámetro la
   app arranca donde siempre. */
/** Cuántas cajas del rayo tiene un resumen escrito a mano.
 *
 *  Es la cifra que enseña la pantalla de cierre, y no es decorativa: cada
 *  página del resumen lleva exactamente una idea —la regla 3 de REDACCION.md,
 *  «una idea por página»—, así que contarlas es contar las páginas que de
 *  verdad afirman algo. Un libro que todavía se lea con el resumen viejo por
 *  tarjetas devuelve cero y esa columna no se pinta.
 */
function ideasDe(id: string): number {
  const paginas = PAGINAS[id];
  if (!paginas) return 0;
  return paginas.reduce(
    (total, pagina) => total + pagina.bloques.filter((b) => b.b === "idea").length,
    0,
  );
}

/** Los temas del perfil: la muestra, más lo que se haya terminado de verdad
 *  en esta sesión. Los cinco primeros, de más leído a menos. */
function temasDe(terminados: ReadonlySet<string>) {
  const cuenta = new Map(TEMAS_MUESTRA.map((t) => [t.nombre, t.n]));
  for (const id of terminados) {
    const l = LIBROS.find((x) => x.id === id);
    if (l) cuenta.set(l.categoria, (cuenta.get(l.categoria) ?? 0) + 1);
  }
  return [...cuenta.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([nombre, n]) => ({ nombre, n, color: colorDeTema(nombre) }));
}

function pantallaInicial(): Pantalla {
  if (typeof window === "undefined") return "intro";
  /* En un visor que no da URL propia —el simulador de móvil que se publica
     como artefacto— no hay parámetro que poner, así que la página deja dicho
     por dónde quiere que se abra antes de arrancar la app. */
  const p = (globalThis as Record<string, any>).__PANTALLA
    ?? new URLSearchParams(window.location.search).get("p");
  /* «detalle» y «lector» entran aquí para poder mirarlas sueltas: son las dos
     que hay que comparar contra la referencia y no se llega a ellas sin pasar
     por la estantería. El libro que abren es el primero del catálogo, que es
     el que ya trae `libro` por defecto. */
  const validas = ["intro", "shorts", "inicio", "perfil", "ajustes", "detalle", "lector", "biblioteca", "explorar"];
  return validas.includes(p ?? "") ? (p as Pantalla) : "intro";
}

export default function App() {
  const [pantalla, setPantalla] = useState<Pantalla>(pantallaInicial);
  /* Las preferencias viven aquí arriba y no en la pantalla de ajustes: sus
     efectos —el tema y la escala de texto— tienen que seguir aplicados
     mientras se lee, que es cuando importan. */
  const preferencias = usePreferencias();
  const [libro, setLibro] = useState<Libro>(LIBROS[0]);
  /** Se ha entrado por «Escuchar»: el lector arranca con la voz puesta. */
  const [conVoz, setConVoz] = useState(false);
  /** A dónde vuelve el cierre. Un short no devuelve a la ficha de un libro. */
  const [vuelta, setVuelta] = useState<Pantalla>("detalle");
  /** Objetivo de lectura de lo que se acaba de terminar, para comparar. */
  const [objetivo, setObjetivo] = useState(MINUTOS_OBJETIVO);
  /** El nombre se pide en la introducción y se usa en el perfil y el saludo. */
  const [nombre, setNombre] = useState("Hola");
  /** Los temas que marcó en la introducción. Ordenan la estantería. */
  const [intereses, setIntereses] = useState<string[]>([]);
  /** Tarjetas leídas. Sube al terminar un capítulo o un short. */
  /* Cuántos resúmenes lleva terminados. Arranca en cero salvo que la página
     diga otra cosa: `?leidas=6` es lo que permite mirar el aviso de reseña sin
     leerse seis resúmenes seguidos, igual que `?p=` permite abrir una pantalla
     suelta. Ver el comienzo de este fichero. */
  const [leidas, setLeidas] = useState(() => {
    if (typeof window === "undefined") return 0;
    const n = Number(new URLSearchParams(window.location.search).get("leidas"));
    return Number.isFinite(n) && n > 0 ? n : 0;
  });
  /** Minutos de lectura de hoy, su meta y el total acumulado de siempre.
      Los dos arrancan con historial de ejemplo, como la racha: un perfil a
      cero no enseña ni el arco lleno a medias ni el contador subiendo, que es
      justo lo que hay que ver. Al leer suben de verdad. */
  const [minutosHoy, setMinutosHoy] = useState(6.5);
  const [meta, setMeta] = useState(15);
  const [minutosTotales, setMinutosTotales] = useState(1847);
  /* Los libros guardados. Vive aquí arriba y no dentro de la estantería
     porque el mismo libro se guarda desde dos sitios —la esquina de la
     cubierta y el botón redondo de su ficha— y los dos tienen que enseñar lo
     mismo. Con el estado dentro de `Inicio`, guardar desde la ficha no se
     notaba al volver a la parrilla. */
  const [guardados, setGuardados] = useState<ReadonlySet<string>>(() => new Set());
  /** El aviso de «guardado en tu biblioteca», que se va solo. */
  const [avisoGuardado, setAvisoGuardado] = useState<string | null>(null);
  /* Los que se han leído hasta el final. La biblioteca tiene una sección de
     terminados y sin esto estaría siempre vacía: se apunta al pulsar
     «Finalizar resumen», que es el único sitio donde consta que se acabó. */
  const [terminados, setTerminados] = useState<ReadonlySet<string>>(() => new Set());
  /* El «ya estaba» se mira fuera del actualizador. Dentro no vale: el
     actualizador de `useState` tiene que ser puro y React lo llama dos veces
     en StrictMode, así que un efecto secundario ahí —poner el aviso— se
     ejecuta de más. */
  function alternarGuardado(l: Libro) {
    const estaba = guardados.has(l.id);
    setGuardados((antes) => {
      const ahora = new Set(antes);
      if (estaba) ahora.delete(l.id);
      else ahora.add(l.id);
      return ahora;
    });
    setAvisoGuardado(estaba ? "Quitado de tu biblioteca" : "Guardado en tu biblioteca");
  }

  /** El aviso del regalo: se enseña una vez, al llegar al inicio. */
  const [avisoRegalo, setAvisoRegalo] = useState(false);
  const [regaloVisto, setRegaloVisto] = useState(false);
  /** El «¿te está gustando?»: una vez, y solo cuando ya has leído algo. */
  const [valoracion, setValoracion] = useState(false);
  const [valoracionVista, setValoracionVista] = useState(false);
  /** Capítulos completados del libro abierto. */
  const [, setCompletados] = useState(0);
  /** Minutos que ha tardado el lector en el capítulo, medidos de verdad. */
  const [minutos, setMinutos] = useState(0);
  const arranque = useRef(0);
  const reducido = useReducedMotion();

  /* Los dos botones del pie de la ficha hacen lo mismo salvo en una cosa: si
     el lector arranca con la voz puesta. Todo lo demás —poner el cronómetro a
     cero y pedir el texto— es idéntico, y estaba escrito dentro del `onClick`
     de «Leer», así que duplicarlo para «Escuchar» era garantizar que un día
     se tocara uno y no el otro. */
  /* `cual` existe por «El libro de hoy»: desde el inicio se abre en voz un
     libro que todavía no es el del estado, y `setLibro` no ha corrido cuando
     esto se ejecuta. Sin el parámetro se cargaba el resumen del anterior. */
  function abrirLector(conVozPuesta: boolean, cual: Libro = libro) {
    setCompletados(0);
    arranque.current = Date.now();
    void cargarResumen(cual.id).then(setResumen);
    setConVoz(conVozPuesta);
    /* Derecho a leer, siempre. El mapa de capítulos era una parada de más
       entre «quiero este libro» y el texto. */
    setPantalla("lector");
  }

  /* El texto no está en memoria desde el arranque: se pide al abrir la ficha
     del libro y llega en cuanto llega, así que al pulsar «Leer» casi siempre
     está puesto. De él salen las páginas del lector. */
  const [resumen, setResumen] = useState<Resumen | undefined>(() => resumenCargado(libro.id));
  const objetivoLibro = resumen ? Math.max(1, Math.round(minutosDe(resumen) / resumen.partes.length)) : MINUTOS_OBJETIVO;

  // Al cambiar de libro se vacía lo anterior y se pide lo nuevo. El `vivo`
  // evita que una descarga lenta de un libro que ya se ha cerrado pise el
  // texto del que se está leyendo ahora.
  useEffect(() => {
    let vivo = true;
    setResumen(resumenCargado(libro.id));
    void cargarResumen(libro.id).then((r) => {
      if (vivo) setResumen(r);
    });
    return () => {
      vivo = false;
    };
  }, [libro.id]);

  /* El aviso se retira solo. Si se pulsa otra vez antes de que se vaya, el
     efecto se vuelve a montar y el reloj empieza de cero, que es lo que se
     espera al guardar dos libros seguidos. */
  useEffect(() => {
    if (!avisoGuardado) return;
    const id = window.setTimeout(() => setAvisoGuardado(null), 2200);
    return () => window.clearTimeout(id);
  }, [avisoGuardado]);

  // El regalo aparece cuando ya has visto el inicio un momento. Soltarlo a
  // bocajarro nada más entrar se lee como un anuncio; dejar respirar la
  // pantalla primero hace que se lea como algo que la app te ofrece.
  // Con segundo y medio no respiraba nada: en el simulador, que entra directo
  // a la biblioteca, el aviso caía encima antes de que diera tiempo a mirar
  // una portada. Cinco segundos son los que se tarda en recorrer la tira.
  useEffect(() => {
    if (pantalla !== "inicio" || regaloVisto) return;
    const id = window.setTimeout(() => {
      setAvisoRegalo(true);
      setRegaloVisto(true);
    }, 5000);
    return () => window.clearTimeout(id);
  }, [pantalla, regaloVisto]);

  // La valoración no se pide al entrar, sino cuando vuelves al inicio después
  // de haber leído. Preguntar «¿te gusta?» a quien no ha usado nada todavía es
  // pedirle que se invente una respuesta, y encima molesta.
  /* Y además las reglas de frecuencia de `tocaPedirResena`: suscrito, con
     tres resúmenes terminados, una vez cada cuarenta y cinco días y dos veces
     como mucho en la vida. Pablo lo pidió así el 21 de agosto —«te deberá
     aparecer cuando te suscribas, cada cierto tiempo»—, y «cada cierto
     tiempo» tiene que significar algo o se convierte en cada semana. */
  useEffect(() => {
    if (pantalla !== "inicio" || valoracionVista || leidas < 6 || avisoRegalo) return;
    if (!tocaPedirResena({ suscrito: SUSCRITO, terminados: leidas })) return;
    const id = window.setTimeout(() => {
      setValoracion(true);
      setValoracionVista(true);
    }, 1400);
    return () => window.clearTimeout(id);
  }, [pantalla, valoracionVista, leidas, avisoRegalo]);

  return (
    <div className="stage">
      <div className="shell">
        {/* La barra de la hora no sale mientras se lee: en la maqueta la
            pantalla es la pagina entera, de borde a borde. */}
        {pantalla !== "shorts" && <StatusBar />}
        <AnimatePresence mode="wait">
          {pantalla === "intro" && (
            <Onboarding
              key="intro"
              onTerminar={(alta) => {
                setNombre(alta.nombre);
                setIntereses(alta.intereses);
                /* Lo que se ha contestado en la introducción se guarda en las
                   preferencias, que es lo único que sobrevive a un recargado.
                   Ahí lo lee la pantalla de ajustes y ahí lo leería el envío a
                   analítica de una app de verdad. */
                preferencias.set("nombre", alta.nombre);
                preferencias.set("edad", alta.edad);
                preferencias.set("genero", alta.genero);
                preferencias.set("origen", alta.origen);
                setPantalla("pago");
              }}
            />
          )}
          {pantalla === "pago" && <Pago key="pago" onEntrar={() => setPantalla("alta")} />}
          {pantalla === "alta" && (
            <Checkout
              key="alta"
              reducido={!!reducido}
              onVolver={() => setPantalla("pago")}
              onListo={() => setPantalla("inicio")}
            />
          )}
          {pantalla === "inicio" && (
            <Inicio
              key="inicio"
              racha={RACHA}
              suscrito={SUSCRITO}
              intereses={intereses}
              onAbrir={(l) => {
                setLibro(l);
                setPantalla("detalle");
              }}
              onPerfil={() => setPantalla("perfil")}
              onEscuchar={(l) => {
                setLibro(l);
                desbloquea();
                abrirLector(true, l);
              }}
              onOferta={() => setPantalla("oferta")}
              guardados={guardados}
              onGuardar={alternarGuardado}
            />
          )}
          {pantalla === "explorar" && (
            <Explorar
              key="explorar"
              onAbrir={(l) => {
                setLibro(l);
                setPantalla("detalle");
              }}
              guardados={guardados}
              onGuardar={alternarGuardado}
            />
          )}
          {pantalla === "biblioteca" && (
            <MiBiblioteca
              key="biblioteca"
              guardados={guardados}
              terminados={terminados}
              onAbrir={(l) => {
                setLibro(l);
                setPantalla("detalle");
              }}
              onGuardar={alternarGuardado}
              onExplorar={() => setPantalla("inicio")}
            />
          )}
          {pantalla === "perfil" && (
            <Perfil
              key="perfil"
              nombre={nombre}
              racha={RACHA}
              record={RECORD}
              /* La semana en curso lleva pegado lo de esta sesión, que sí es
                 de verdad: los minutos de hoy y las ideas de los resúmenes
                 que se hayan terminado. Así la última columna de la gráfica
                 se mueve al leer, que es lo único que la hace creíble. */
              historial={HISTORIAL.map((sem, i) =>
                i < HISTORIAL.length - 1
                  ? sem
                  : {
                      ideas: sem.ideas + [...terminados].reduce((t, id) => t + ideasDe(id), 0),
                      minutos: sem.minutos + Math.round(minutosHoy),
                    },
              )}
              temas={temasDe(terminados)}
              minutosHoy={minutosHoy}
              meta={meta}
              minutosTotales={minutosTotales}
              onMeta={setMeta}
              onCerrar={() => setPantalla("inicio")}
              onAjustes={() => setPantalla("ajustes")}
              onAntiScroll={() => setPantalla("anti")}
            />
          )}
          {pantalla === "anti" && (
            <AntiScroll
              key="anti"
              objetivo={MINUTOS_OBJETIVO}
              reducido={!!reducido}
              onCerrar={() => setPantalla("perfil")}
            />
          )}
          {pantalla === "ajustes" && (
            <Ajustes
              key="ajustes"
              nombre={nombre}
              racha={RACHA}
              prefs={preferencias}
              /* El nombre y el objetivo viven aquí arriba: los ajustes los
                 editan y el perfil y la pantalla de inicio los reflejan sin
                 tener que recargar. */
              onNombre={setNombre}
              onObjetivo={setObjetivo}
              onVolver={() => setPantalla("perfil")}
            />
          )}
          {pantalla === "oferta" && (
            <Oferta key="oferta" reducido={!!reducido} onCerrar={() => setPantalla("inicio")} />
          )}
          {pantalla === "shorts" && (
            // Terminar un short no saca de la sección: deja en la siguiente
            // historia. Lo único que sube al estado de la app es la cuenta de
            // tarjetas leídas, que es lo que ve el perfil.
            <MuroShorts
              key="shorts"
              onLeido={(s, m) => {
                setLeidas((n) => n + s.paginas.length + 1);
                setMinutosHoy((n) => n + m);
                setMinutosTotales((n) => n + m);
              }}
            />
          )}
          {pantalla === "detalle" && (
            <DetalleLibro
              key="detalle"
              libro={libro}
              onCerrar={() => setPantalla("inicio")}
              onAbrir={(l) => setLibro(l)}
              guardados={guardados}
              onGuardar={alternarGuardado}
              onEmpezar={() => abrirLector(false)}
              onEscuchar={() => abrirLector(true)}
            />
          )}
          {pantalla === "lector" && (
            <Lector
              key="lector"
              titulo={libro.titulo}
              /* Escritas a mano si las hay; si no, salen del resumen por
                 tarjetas, que es lo que hace que los doscientos libros se
                 puedan leer desde el primer día. */
              paginas={PAGINAS[libro.id] ?? paginasDeResumen(resumen?.partes ?? [])}
              audioAlEntrar={conVoz}
              onCerrar={() => setPantalla("detalle")}
              onTerminar={() => {
                /* Lo que antes hacía la lección al acabar un capítulo: contar
                   el tiempo, sumar lo leído y pasar al cierre. */
                const gastado = (Date.now() - arranque.current) / 60000;
                setMinutos(gastado);
                setMinutosHoy((n) => n + gastado);
                setMinutosTotales((n) => n + gastado);
                setLeidas((n) => n + 1);
                setTerminados((antes) => new Set(antes).add(libro.id));
                setObjetivo(objetivoLibro);
                setVuelta("detalle");
                setPantalla("fin");
              }}
            />
          )}

          {pantalla === "fin" && (
            <FinResumen
              key="fin"
              id={libro.id}
              titulo={libro.titulo}
              autor={libro.autor}
              categoria={libro.categoria}
              color={libro.color}
              /* Los de la FICHA, no los que ha tardado el lector. Es la cifra
                 que vio antes de entrar, así que al terminar tiene que
                 coincidir; ver REDACCION.md, apartado 2 ter. */
              minutosAudio={libro.minutos ?? 0}
              ideas={ideasDe(libro.id)}
              onCerrar={() => setPantalla("racha")}
            />
          )}
          {pantalla === "racha" && (
            <Racha key="racha" dias={1} onContinuar={() => setPantalla("reto")} />
          )}
          {pantalla === "reto" && (
            <RetoDiario
              key="reto"
              minutos={minutos}
              objetivo={objetivo}
              onContinuar={() => setPantalla(vuelta)}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {avisoRegalo && pantalla === "inicio" && (
            <AvisoRegalo
              key="aviso-regalo"
              reducido={!!reducido}
              onCerrar={() => setAvisoRegalo(false)}
              onAbrir={() => {
                setAvisoRegalo(false);
                setPantalla("oferta");
              }}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {valoracion && pantalla === "inicio" && (
            <Resena
              key="valoracion"
              racha={RACHA}
              terminados={leidas}
              reducido={!!reducido}
              onCerrar={() => setValoracion(false)}
            />
          )}
        </AnimatePresence>

        {/* «Guardado en tu biblioteca». Va por encima de todo y por fuera de
            las pantallas: se guarda desde la estantería y desde la ficha, y el
            aviso tiene que salir igual en las dos. No bloquea nada.

            Sin `key` por el texto: con ella, cambiar de «Guardado» a «Quitado»
            monta un elemento nuevo mientras el viejo todavía se está yendo, y
            durante ese cuarto de segundo se ven las dos pastillas una encima
            de la otra. Un solo elemento que cambia de texto entra una vez y se
            va una vez. */}
        <AnimatePresence>
          {avisoGuardado && (
            <motion.p
              className="aviso-guardado"
              /* Sube solo en la estantería, que es la única pantalla con la
                 pastilla del libro en curso abajo. En la ficha, donde lo que
                 hay es el botón de empezar, se queda a la altura normal. */
              data-alto={pantalla === "inicio"}
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={springTight}
            >
              {avisoGuardado}
            </motion.p>
          )}
        </AnimatePresence>

        <BarraPestanas
          visible={CON_BARRA.includes(pantalla)}
          activa={
            pantalla === "shorts"
              ? "shorts"
              : pantalla === "explorar"
                ? "explorar"
                : pantalla === "biblioteca"
                  ? "biblioteca"
                  : "libros"
          }
          onIr={(t) => setPantalla(t === "libros" ? "inicio" : t)}
        />
      </div>
    </div>
  );
}

/* ==========================================================================
   La barra de pestañas
   ========================================================================== */

type Tab = "libros" | "shorts" | "explorar" | "biblioteca";

/**
 * Solo aparece en las pantallas raíz: dentro de un libro o de un short
 * estorbaría, porque esas pantallas ya tienen su propia salida.
 *
 * Empezó calcada de la captura de Blinkist —una pastilla de 331 × 61 flotando
 * a 22 del suelo, traslúcida y con desenfoque—. Ahora va apoyada abajo del
 * todo, opaca, de filo a filo y baja: 64 puntos de alto. Las medidas están en
 * `.pestanas`, en `styles.css`.
 *
 * De la captura se queda lo que valía: la etiqueta de 11, y la pestaña activa
 * con pastilla más clara detrás e icono y letra en verde.
 *
 * El icono va ENCIMA de la etiqueta y no al lado, que es lo que hace que las
 * tres pestañas quepan a lo ancho sin apretarse. La pastilla del fondo viaja
 * entre pestañas con `layoutId`: el movimiento lo interpola Framer Motion.
 *
 * La entrada y la salida se van 72 abajo: algo más de lo que la barra mide,
 * para que no se quede un dedo suyo asomando por el filo.
 */
function BarraPestanas({
  visible,
  activa,
  onIr,
}: {
  visible: boolean;
  activa: Tab;
  onIr: (t: Tab) => void;
}) {
  const tabs: { id: Tab; nombre: string; Icono: (p: { tamano?: number }) => ReactElement }[] = [
    { id: "libros", nombre: "Libros", Icono: GlyphLibros },
    { id: "shorts", nombre: "Shorts", Icono: GlyphRayo },
    /* Explorar va en tercer lugar, como en las dos referencias: es la
       pantalla a la que se entra a buscar algo, y buscar viene después de
       mirar lo que te proponen y antes de volver a lo que ya es tuyo. */
    { id: "explorar", nombre: "Explorar", Icono: GlyphLupa },
    { id: "biblioteca", nombre: "Biblioteca", Icono: GlyphBiblioteca },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          className="pestanas"
          initial={{ y: 72, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 72, opacity: 0 }}
          transition={springSoft}
        >
          {tabs.map(({ id, nombre, Icono }) => (
            <button
              key={id}
              className="pestana"
              data-activa={activa === id}
              onClick={() => onIr(id)}
              aria-current={activa === id ? "page" : undefined}
            >
              {activa === id && (
                <motion.span className="pestana-pastilla" layoutId="pastilla" transition={spring} />
              )}
              <motion.span
                className="pestana-icono"
                animate={activa === id ? { scale: [1, 1.22, 1], y: [0, -3, 0] } : { scale: 1, y: 0 }}
                transition={springPop}
              >
                <Icono tamano={22} />
              </motion.span>
              <span className="pestana-nombre">{nombre}</span>
            </button>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

function StatusBar() {
  const [hora, setHora] = useState(() => reloj());
  useEffect(() => {
    const id = window.setInterval(() => setHora(reloj()), 20000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="status-bar">
      <span>{hora}</span>
      <span className="glyphs">
        <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor" aria-hidden>
          <rect x="0" y="7" width="3" height="4" rx="1" />
          <rect x="4.6" y="5" width="3" height="6" rx="1" />
          <rect x="9.2" y="2.6" width="3" height="8.4" rx="1" />
          <rect x="13.8" y="0" width="3" height="11" rx="1" />
        </svg>
        <svg width="22" height="11" viewBox="0 0 22 11" aria-hidden>
          <rect x="0.6" y="0.6" width="17" height="9.8" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
          <rect x="2.2" y="2.2" width="12" height="6.6" rx="1.8" fill="currentColor" />
          <path d="M19.4 4v3a2 2 0 0 0 0-3Z" fill="currentColor" opacity="0.5" />
        </svg>
      </span>
    </div>
  );
}

function reloj() {
  return new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
}

/* ==========================================================================
   Portada del libro — el paso previo a la lección
   ========================================================================== */

/* ==========================================================================
   La lección
   ========================================================================== */


/* El lector por tarjetas se ha retirado: los libros se leen ahora por
   páginas, en `Lector.tsx`, que es como lo hace la referencia. Con él se
   fueron el mapa de capítulos y el telón de entrada de cada parte. */


/* ==========================================================================
   Cierre
   ========================================================================== */

/* La pantalla de cierre vive en `FinResumen.tsx` desde el 21 de agosto.

   La que había aquí era de cuando la app iba por tarjetas: enseñaba puntos de
   experiencia y el tiempo que habías tardado en leer, medido con un
   cronómetro desde que abrías el resumen. Pablo la mandó rehacer a partir de
   las capturas de Headway, y con ella se fueron `TOTAL_XP` y el aviso de «has
   ido rápido», que castigaba justamente a quien lee deprisa. */
