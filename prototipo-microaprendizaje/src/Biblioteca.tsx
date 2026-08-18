import { useMemo, useState, type ComponentType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Aprendizaje, AprendizajeVB, Descubrir, DescubrirVB, Estanteria, EstanteriaVB,
  LuzLuna, LuzLunaVB, MapaAventura, MapaAventuraVB, Memoria, MemoriaVB,
  PensarArte, PensarArteVB,
} from "./undraw";
import { Llama } from "./Racha";
import { enterVariants, spring, springPop, springSoft } from "./motion";
import { urlFoto } from "./shorts";
import { GlyphClose, GlyphDescargar, GlyphGuardar, GlyphShare } from "./glyphs";
import { LIBROS_RESUMEN } from "./libros/puente";
import { PortadaLibro } from "./PortadaLibro";
import type { Foto } from "./shorts";

/* ==========================================================================
   La biblioteca: inicio y ficha de libro.

   Fondo oscuro, a diferencia de la lectura, que va en crema. No es un
   capricho: navegar y leer son dos modos distintos, y separarlos por
   temperatura ayuda a saber en cuál estás. Las portadas, que son lo único
   con color saturado, destacan sobre el oscuro y quedan apagadas sobre el
   claro — así que el oscuro también es la decisión correcta para una
   pantalla que es, sobre todo, una parrilla de portadas.
   ========================================================================== */

type Ilustracion = ComponentType<{ banda: "fondo" | "medio" | "frente" }>;

export type Libro = {
  id: string;
  titulo: string;
  autor: string;
  /** Línea corta bajo el autor, como en las fichas de la referencia. */
  subtitulo: string;
  /** Párrafo breve de «Lo que vas a aprender». Dos líneas, no una lista. */
  gancho: string;
  categoria: string;
  color: string;
  Arte: Ilustracion;
  vb: string;
  /** La obra que lleva la portada, cuando la tiene. Ver `libros/portadas.ts`. */
  portada?: Foto;
  /** 0 a 1. Si es mayor que 0, el libro aparece en «Retomar». */
  progreso: number;
  coleccion?: string;
  /** Capítulos del libro. El primero es el único jugable en el prototipo. */
  capitulos: { titulo: string; minutos?: number }[];
  /** Los de la biblioteca de resúmenes son jugables enteros. */
  jugable?: boolean;
  /** Año de publicación. Solo los resúmenes de libros reales lo traen. */
  ano?: number;
  /** Minutos de lectura calculados del texto real, no escritos a mano. */
  minutos?: number;
};

/* Los capítulos originales del prototipo. Se quedan porque el de Alejandría
   es el único con gráficos de datos, y eso no lo tiene ningún resumen. */
const ORIGINALES: Libro[] = [
  {
    id: "alejandria",
    capitulos: [{ titulo: "La ambición imposible" }, { titulo: "El método de los barcos" }, { titulo: "Cuatrocientos mil rollos" }, { titulo: "El mito del incendio" }, { titulo: "Lo que se perdió" }, { titulo: "La cadena de copias" }, { titulo: "Qué sobrevive y por qué" }],
    titulo: "La Biblioteca de Alejandría",
    autor: "Historia del conocimiento",
    subtitulo: "La biblioteca que quiso tenerlo todo",
    gancho: "¿Se quemó en una noche? La verdad es más lenta y más incómoda: qué reunió Alejandría, cómo lo consiguió y por qué lo perdimos.",
    categoria: "Historia",
    color: "var(--clay)",
    Arte: Estanteria,
    vb: EstanteriaVB,
    progreso: 0,
    coleccion: "Grandes pérdidas de la humanidad",
    jugable: true,
  },
  {
    id: "sofocles",
    capitulos: [{ titulo: "Siete de ciento veinte" }, { titulo: "El teatro que ardió dos veces" }, { titulo: "Quién decidía qué copiar" }, { titulo: "Los títulos huérfanos" }, { titulo: "Reconstruir desde citas" }],
    titulo: "Lo que perdimos de Grecia",
    autor: "Literatura clásica",
    subtitulo: "De 120 obras quedan 7",
    gancho: "De la mayoría de los trágicos griegos solo conservamos el título. Esta es la historia de ese vacío y de quién decidió qué se copiaba.",
    categoria: "Literatura",
    color: "var(--plum)",
    Arte: PensarArte,
    vb: PensarArteVB,
    progreso: 0.42,
  },
  {
    id: "memoria",
    capitulos: [{ titulo: "La curva de Ebbinghaus" }, { titulo: "La primera hora" }, { titulo: "Repaso espaciado" }, { titulo: "Cuándo volver" }, { titulo: "Aprender para recordar" }, { titulo: "El sueño y la memoria" }],
    titulo: "Cómo recuerda el cerebro",
    autor: "Ciencia cognitiva",
    subtitulo: "Por qué olvidas casi todo",
    gancho: "Olvidas la mitad de lo aprendido en la primera hora. Esto explica la curva y qué hacer para aplanarla.",
    categoria: "Ciencia",
    color: "var(--sage)",
    Arte: Memoria,
    vb: MemoriaVB,
    progreso: 0.68,
  },
  {
    id: "mapas",
    capitulos: [{ titulo: "Mapas que mandaban" }, { titulo: "Aquí hay dragones" }, { titulo: "La línea de Tordesillas" }, { titulo: "Proyecciones que mienten" }, { titulo: "El mapa como poder" }],
    titulo: "Los mapas que inventaron el mundo",
    autor: "Historia de la cartografía",
    subtitulo: "Cuando el mapa decidía el mundo",
    gancho: "Durante siglos el mapa no describía la realidad: la imponía. Fronteras, imperios y monstruos dibujados a conveniencia.",
    categoria: "Historia",
    color: "var(--slate)",
    Arte: MapaAventura,
    vb: MapaAventuraVB,
    progreso: 0,
  },
  {
    id: "noche",
    capitulos: [{ titulo: "El primer sueño" }, { titulo: "La hora de en medio" }, { titulo: "Llega la luz de gas" }, { titulo: "Perder la noche" }, { titulo: "Dormir hoy" }],
    titulo: "Historia de la noche",
    autor: "Vida cotidiana",
    subtitulo: "Dormíamos en dos turnos",
    gancho: "Antes de la luz eléctrica la humanidad dormía en dos tandas, con un rato despierto en medio. Y lo olvidamos por completo.",
    categoria: "Historia",
    color: "var(--ochre)",
    Arte: LuzLuna,
    vb: LuzLunaVB,
    progreso: 0,
  },
  {
    id: "escuela",
    capitulos: [{ titulo: "Antes del aula" }, { titulo: "El modelo prusiano" }, { titulo: "Pupitres en fila" }, { titulo: "El examen" }, { titulo: "Qué queda por cambiar" }],
    titulo: "Cómo aprendimos a aprender",
    autor: "Historia de la educación",
    subtitulo: "La escuela es más nueva de lo que crees",
    gancho: "El aula con pupitres y horarios tiene menos de dos siglos. Antes se aprendía de maneras que hoy sorprenden.",
    /* Las categorías son las ocho de la introducción y solo esas: una novena
       que no se puede elegir al empezar deja un filtro huérfano. */
    categoria: "Historia",
    color: "var(--plum-light)",
    Arte: Aprendizaje,
    vb: AprendizajeVB,
    progreso: 0,
  },
  {
    id: "descubrir",
    capitulos: [{ titulo: "La placa olvidada" }, { titulo: "El chocolate derretido" }, { titulo: "El pegamento fallido" }, { titulo: "Qué tienen en común" }],
    titulo: "El azar en los grandes hallazgos",
    autor: "Historia de la ciencia",
    subtitulo: "Los hallazgos que nadie buscaba",
    gancho: "Penicilina, microondas, pósit. Lo que se encontró buscando otra cosa, y qué tienen todos en común.",
    categoria: "Ciencia",
    color: "var(--sage)",
    Arte: Descubrir,
    vb: DescubrirVB,
    progreso: 0,
  },
];

/* La estantería completa: primero los resúmenes de libros reales, que son el
   grueso del catálogo, y detrás los capítulos originales. El orden importa —
   lo que se ve sin desplazarse es lo que existe para el usuario. */
export const LIBROS: Libro[] = [...LIBROS_RESUMEN, ...ORIGINALES];

/** Búsqueda por id, que es como se enlaza un resumen con su ficha. */
export const porId = (id: string) => LIBROS.find((l) => l.id === id);

/* -------------------------------------------------------------------------
   Portada
   ------------------------------------------------------------------------- */

export function Portada({ libro, tamano = 140 }: { libro: Libro; tamano?: number }) {
  return (
    <div className="portada" style={{ width: tamano, height: tamano }}>
      <PortadaLibro
        id={libro.id}
        titulo={libro.titulo}
        autor={libro.autor}
        categoria={libro.categoria}
        color={libro.color}
        tamano={tamano}
        foto={libro.portada}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------
   Inicio
   ------------------------------------------------------------------------- */

function saludo() {
  const h = new Date().getHours();
  if (h < 6) return "Buenas noches";
  if (h < 13) return "Buenos días";
  if (h < 21) return "Buenas tardes";
  return "Buenas noches";
}

function FichaLibro({ libro, onAbrir, i }: { libro: Libro; onAbrir: () => void; i: number }) {
  return (
    <motion.button
      className="ficha"
      onClick={onAbrir}
      whileTap={{ scale: 0.96 }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...spring, delay: 0.06 + i * 0.05 }}
    >
      <div className="ficha-arte">
        {/* Guardar, asomando por la esquina de arriba a la derecha de la
            cubierta. En la referencia sobresale seis puntos por fuera y por
            arriba, y es lo que hace que se lea como una pegatina y no como
            un icono más. */}
        <span
          className="ficha-guardar"
          role="button"
          tabIndex={-1}
          aria-label="Guardar"
          onClick={(e) => e.stopPropagation()}
        >
          <GlyphGuardar />
        </span>
        <Portada libro={libro} tamano={148} />
        {libro.progreso > 0 && (
          <div className="ficha-barra">
            <motion.div
              className="ficha-relleno"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: libro.progreso }}
              transition={{ ...springSoft, delay: 0.3 + i * 0.05 }}
            />
          </div>
        )}
      </div>
      {/* Bajo la cubierta va el AUTOR y nada más. Es lo que hace la
          referencia, y tiene su lógica: el título ya está escrito, grande,
          en la propia cubierta, así que repetirlo debajo era decir dos veces
          lo mismo y estirar la ficha ciento cuarenta puntos. */}
      <p className="ficha-autor">{libro.autor}</p>
    </motion.button>
  );
}

/** «4 min», nunca «4.2 min»: el decimal no aporta y ensucia la ficha. */
export function tiempo(min: number) {
  return `${Math.round(min)} min`;
}

export function Inicio({
  racha,
  onAbrir,
  onPerfil,
  onOferta,
  intereses = [],
}: {
  racha: number;
  onAbrir: (libro: Libro) => void;
  onPerfil: () => void;
  /** El banner de lectura gratuita. Si no se pasa, el banner no sale. */
  onOferta?: () => void;
  /** Lo que marcó en la introducción. Ordena la estantería, no la recorta. */
  intereses?: string[];
}) {
  const [filtro, setFiltro] = useState<string | null>(null);

  const enCurso = LIBROS.filter((l) => l.progreso > 0);
  /* La pastilla de abajo dice «el libro que estás leyendo», así que el libro
     tiene que ser uno que esté de verdad a medias. Si no hay ninguno —cuenta
     recién abierta—, se ofrece el primero del catálogo, que es lo mismo que
     hace la referencia cuando aún no has empezado nada. */
  const destacado = enCurso[0] ?? LIBROS[0];
  /* `progreso` viene a cero en el catálogo de muestra, y una barra al cero no
     enseña nada de lo que hace la pastilla. */
  const avance = destacado.progreso > 0 ? destacado.progreso : 0.15;
  /* El libro de la franja azul: el que Pablo pidió, y si no está, el primero
     que tenga cubierta. Sin cubierta la franja se queda solo con el texto, que
     es mejor que un hueco con el icono de imagen rota. */
  const libroDeLaFranja =
    LIBROS.find((l) => l.id === "sapiens") ?? LIBROS.find((l) => l.portada);

  /* Las categorías que existen de verdad, con las elegidas en la introducción
     delante. Filtrar por algo que da cero resultados es una vía muerta, así
     que solo se ofrece lo que tiene libros detrás. */
  const categorias = useMemo(() => {
    const hay = [...new Set(LIBROS.map((l) => l.categoria))];
    const mios = intereses.filter((c) => hay.includes(c));
    return [...mios, ...hay.filter((c) => !mios.includes(c))];
  }, [intereses]);

  /* Sus intereses primero, y dentro de cada bloque el orden del catálogo.
     Es la única personalización real que puede hacer el prototipo, y se nota
     nada más entrar: lo que pidió está arriba. */
  const recomendados = useMemo(() => {
    const libres = LIBROS.filter((l) => l.progreso === 0);
    if (filtro) return libres.filter((l) => l.categoria === filtro);
    if (!intereses.length) return libres;
    const peso = (l: Libro) => (intereses.includes(l.categoria) ? 0 : 1);
    return [...libres].sort((a, b) => peso(a) - peso(b));
  }, [filtro, intereses]);

  /* Los de la sección ancha. Son tres y no treinta a propósito: la ficha
     ancha ocupa media pantalla cada una, y una lista larga de fichas que se
     explican deja de ser una recomendación para ser otro catálogo. Se cogen
     de los temas que marcó, saltándose los que ya salen arriba. */
  const personalizados = useMemo(() => {
    const arriba = new Set(recomendados.slice(0, 6).map((l) => l.id));
    const mios = LIBROS.filter(
      (l) => l.progreso === 0 && !arriba.has(l.id)
        && (!intereses.length || intereses.includes(l.categoria)),
    );
    return (mios.length ? mios : LIBROS.filter((l) => !arriba.has(l.id))).slice(0, 3);
  }, [recomendados, intereses]);

  return (
    <motion.div
      className="inicio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: spring }}
      exit={{ opacity: 0, transition: { duration: 0.18 } }}
    >
      <div className="inicio-scroll">
        <header className="inicio-cabecera">
          <motion.h1 custom={0} variants={enterVariants} initial="hidden" animate="shown">
            {saludo()}
          </motion.h1>
          {/* La racha es la puerta del perfil: se toca lo que se quiere mirar */}
          <motion.button
            className="pastilla-racha"
            onClick={onPerfil}
            whileTap={{ scale: 0.94 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...springPop, delay: 0.16 }}
            aria-label={`Tu perfil. Racha de ${racha} días`}
          >
            <Llama tamano={22} reducido={false} />
            <span>{racha}</span>
          </motion.button>
        </header>

        {/* La lectura diaria gratuita, lo primero de la pantalla. Medido
            sobre la captura de Pablo, que va a 750 × 1624 —o sea la pantalla
            a doble densidad, un píxel de la captura por medio punto—:
              franja        x 32..718, y 234..594  → 343 × 180, radio 11
              azul          #4397f7
              rótulo        altura de mayúscula 41 px → 28 de cuerpo
              interlínea    70 px → 35, o sea 1,25
              llamada       25 px de mayúscula → 17 de cuerpo
              cubierta      101 × 152 girada 6°, pegada al filo derecho */}
        {onOferta && (
          <motion.button
            className="franja-gratis"
            onClick={onOferta}
            whileTap={{ scale: 0.985 }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.06 }}
          >
            <span className="gratis-texto">
              <span className="gratis-titulo">Lectura diaria gratuita</span>
              <span className="gratis-llamada">
                Obtener ahora <span aria-hidden>→</span>
              </span>
            </span>
            {/* La cubierta va como imagen suelta y no por `Portada`, que
                fuerza una caja cuadrada y deformaba el dibujo. Aquí la caja ES
                el libro: 101 × 152, el 2:3 exacto del fichero que trajo Pablo
                —1024 × 1536— a la altura que tiene en la referencia. */}
            {libroDeLaFranja?.portada && (
              <img
                className="gratis-libro"
                src={urlFoto(libroDeLaFranja.portada, 420)}
                alt=""
                aria-hidden
              />
            )}
          </motion.button>
        )}

        {/* Los filtros son las mismas ocho de la introducción, en su orden */}
        <motion.div
          className="filtros"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.16 }}
        >
          <Filtro texto="Todo" activo={filtro === null} onClick={() => setFiltro(null)} />
          {categorias.map((c) => (
            <Filtro key={c} texto={c} activo={filtro === c} onClick={() => setFiltro(filtro === c ? null : c)} />
          ))}
        </motion.div>

        <section className="bloque">
          <div className="bloque-cabecera">
            <div>
              <h2>{filtro ?? (intereses.length ? "Para ti" : "Recomendados")}</h2>
              <p className="bloque-sub">
                {filtro
                  ? `${recomendados.length} ${recomendados.length === 1 ? "libro" : "libros"}`
                  : intereses.length
                    ? "Empezando por lo que elegiste"
                    : "Creemos que te van a gustar"}
              </p>
            </div>
            {/* Lleva a los mismos filtros de arriba: es el atajo para quien
                entra queriendo cambiar lo que le proponemos, no para quien
                viene a mirar. */}
            <button className="bloque-accion" type="button" onClick={() => setFiltro(null)}>
              Gestionar
            </button>
          </div>
          {/* Carrusel y no parrilla. La parrilla enseña más libros de golpe,
              pero obliga a una retícula de filas, y una fila es tan alta como
              su ficha más alta: con títulos de una y de dos líneas quedaban
              claros enormes debajo de la corta y la pastilla se iba a tocar
              la portada de la fila siguiente. En una tira horizontal no hay
              filas, así que cada ficha acaba donde acaba. Ver el catálogo
              entero es cosa de la vista de todos los libros, no de aquí. */}
          <div className="carrusel">
            <AnimatePresence mode="popLayout">
              {recomendados.map((l, i) => (
                <FichaLibro key={l.id} libro={l} i={Math.min(i, 9)} onAbrir={() => onAbrir(l)} />
              ))}
            </AnimatePresence>
          </div>
        </section>

        {enCurso.length > 0 && !filtro && (
          <section className="bloque">
            <h2>Retomar</h2>
            <p className="bloque-sub">Sigue donde lo dejaste</p>
            <div className="carrusel">
              {enCurso.map((l, i) => (
                <FichaLibro key={l.id} libro={l} i={i} onAbrir={() => onAbrir(l)} />
              ))}
            </div>
          </section>
        )}
        {/* Personalizado: la ficha ancha, centrada y con la portada sobre un
            arco de color. Es la que se para a explicar POR QUÉ te tocaría
            leer ese libro, y por eso va de una en una y no en carrusel: aquí
            se lee, no se ojea. */}
        {!filtro && personalizados.length > 0 && (
          <section className="bloque">
            <h2>Personalizado para ti</h2>
            <p className="bloque-sub">Por lo que te interesa</p>
            <div className="pila">
              {personalizados.map((l, i) => (
                <motion.button
                  key={l.id}
                  className="ancha"
                  onClick={() => onAbrir(l)}
                  whileTap={{ scale: 0.985 }}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ ...springSoft, delay: Math.min(i, 3) * 0.06 }}
                >
                  <div className="ancha-arco" style={{ ["--arco" as string]: l.color }}>
                    <Portada libro={l} tamano={132} />
                  </div>
                  <span className="chip-cat ancha-chip" style={{ background: l.color }}>
                    {tema(l.categoria)}
                  </span>
                  <p className="ancha-titulo">{l.titulo}</p>
                  <p className="ancha-autor">{l.autor}</p>
                  <p className="ancha-texto">{primeraFrase(l.gancho)}</p>
                </motion.button>
              ))}
            </div>
          </section>
        )}

      </div>

      {/* La pastilla del libro en curso, flotando sobre el contenido y por
          encima de la barra de pestañas. En la referencia este sitio lo ocupa
          el reproductor de audio; Pablo lo quiere con el progreso del libro
          que se está leyendo, que además es lo único de la pantalla que sabe
          algo de él. Medido: 120 px de alto → 60 puntos, redondeo entero,
          miniatura de 27 × 41 a 12 del filo y barra de 3 puntos. */}
      <motion.button
        className="pastilla-curso"
        onClick={() => onAbrir(destacado)}
        whileTap={{ scale: 0.985 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...springSoft, delay: 0.24 }}
      >
        {/* Va por `Portada` y no por una imagen suelta: no todos los libros
            tienen cubierta —los capítulos originales llevan su emblema— y con
            una etiqueta `img` a pelo la pastilla se quedaba con el hueco. El
            tamaño se lo da la hoja de estilos, como en el resto de cajas. */}
        <span className="curso-libro" aria-hidden>
          <Portada libro={destacado} tamano={27} />
        </span>
        <span className="curso-texto">
          <span className="curso-titulo">{destacado.titulo}</span>
          <span className="curso-barra">
            <motion.span
              className="curso-relleno"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: avance }}
              transition={{ ...springSoft, delay: 0.5 }}
            />
          </span>
        </span>
        <span className="curso-play" aria-hidden>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></svg>
        </span>
      </motion.button>
    </motion.div>
  );
}

/* La pastilla del libro no dice «Historia»: dice de qué va. Las ocho
   categorías de verdad no se tocan —son las mismas de la introducción y con
   ellas se filtra—, pero como etiqueta se quedan cortas: «Historia» no
   distingue un libro de Roma de uno sobre el futuro del trabajo. Esto es solo
   el nombre que se enseña, y por eso vive aquí y no en el catálogo. */
const TEMA: Record<string, string> = {
  Historia: "Civilización",
  Filosofía: "Ideas y sentido",
  Ciencia: "Ciencia y universo",
  Arte: "Arte y creación",
  Literatura: "Relato",
  Psicología: "Mente y conducta",
  Economía: "Dinero",
  Salud: "Salud y longevidad",
};
const tema = (c: string) => TEMA[c] ?? c;

/* La descripción de la ficha: la primera frase del gancho y nada más. Antes
   se recortaba con puntos suspensivos a media palabra, que en una parrilla de
   veinte fichas es un campo de minas de puntitos. Una frase entera, con su
   punto, se lee y se acaba. */
function primeraFrase(texto: string): string {
  const punto = texto.search(/[.:?!]\s/);
  const frase = punto > 0 ? texto.slice(0, punto) : texto.replace(/[.\s]+$/, "");
  if (frase.length <= 88) return frase + ".";
  /* Si la frase es larga se corta por su primera junta —una coma, una raya,
     un punto y coma—, nunca a media palabra: «…sin recurrir ni una vez a la.»
     es peor que unos puntos suspensivos. */
  const junta = frase.search(/\s[—–]|,|;/);
  if (junta > 34) return frase.slice(0, junta).replace(/[,;\s]+$/, "") + ".";
  return frase.slice(0, frase.lastIndexOf(" ", 86)) + "…";
}

/** Pastilla de filtro. El activo se rellena, no solo cambia de color. */
function Filtro({ texto, activo, onClick }: { texto: string; activo: boolean; onClick: () => void }) {
  return (
    <motion.button
      className="filtro"
      data-activo={activo}
      onClick={onClick}
      whileTap={{ scale: 0.93 }}
      transition={springPop}
      type="button"
    >
      {texto}
    </motion.button>
  );
}

/* -------------------------------------------------------------------------
   Ficha del libro
   ------------------------------------------------------------------------- */

export function DetalleLibro({
  libro,
  onCerrar,
  onEmpezar,
  onAbrir,
}: {
  libro: Libro;
  onCerrar: () => void;
  onEmpezar: () => void;
  onAbrir: (libro: Libro) => void;
}) {
  const parecidos = LIBROS.filter((l) => l.id !== libro.id).slice(0, 4);

  return (
    <motion.div
      className="detalle"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0, transition: springSoft }}
      exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
    >
      <div className="detalle-scroll">
        <button className="icon-btn detalle-cerrar" onClick={onCerrar} aria-label="Cerrar">
          <GlyphClose />
        </button>

        {/* El color va como variable para poder aclararlo en la hoja: el arco del
            vídeo es un tinte pastel, no el color de la categoría a pelo. */}
        <div className="detalle-arco" style={{ ["--arco" as string]: libro.color }} />

        <motion.div
          className="detalle-portada"
          initial={{ opacity: 0, y: 18, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...springPop, delay: 0.08 }}
        >
          <Portada libro={libro} tamano={108} />
        </motion.div>

        <motion.div
          className="detalle-acciones"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.18 }}
        >
          {[
            { g: <GlyphGuardar />, l: "Guardar" },
            { g: <GlyphDescargar />, l: "Descargar" },
            { g: <GlyphShare />, l: "Compartir" },
          ].map((a) => (
            <motion.button key={a.l} className="accion-redonda" whileTap={{ scale: 0.88 }} aria-label={a.l}>
              {a.g}
            </motion.button>
          ))}
        </motion.div>

        {[
          <span key="c" className="chip-cat chip-relleno" style={{ background: libro.color }}>
            {libro.categoria}
          </span>,
          <h1 key="t" className="detalle-titulo">{libro.titulo}</h1>,
          <p key="a" className="detalle-autor">
            {libro.autor}
            {libro.ano && <span className="detalle-ano"> · {libro.ano}</span>}
          </p>,
          <p key="m" className="detalle-meta">
            {libro.minutos ? tiempo(libro.minutos) : "5 min"} de lectura ·{" "}
            {libro.capitulos.length} {libro.capitulos.length === 1 ? "parte" : "partes"}
          </p>,
        ].map((n, i) => (
          <motion.div
            key={n.key}
            className="detalle-centrado"
            custom={i + 3}
            variants={enterVariants}
            initial="hidden"
            animate="shown"
          >
            {n}
          </motion.div>
        ))}

        <motion.section custom={6} variants={enterVariants} initial="hidden" animate="shown">
          <h2 className="detalle-seccion">Por qué merece la pena</h2>
          <p className="detalle-parrafo">{libro.gancho}</p>
        </motion.section>

        {/* El índice antes de empezar: saber cuánto queda es lo que hace que
            alguien empiece. Un libro sin índice parece que no se acaba nunca. */}
        <motion.section custom={7} variants={enterVariants} initial="hidden" animate="shown">
          <h2 className="detalle-seccion">Lo que vas a leer</h2>
          <ol className="detalle-indice">
            {libro.capitulos.map((c, i) => (
              <li key={c.titulo}>
                <span className="indice-num" style={{ color: libro.color }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{c.titulo}</span>
              </li>
            ))}
          </ol>
        </motion.section>

        {libro.coleccion && (
          <motion.section custom={7} variants={enterVariants} initial="hidden" animate="shown">
            <h2 className="detalle-seccion">Aparece en</h2>
            <div className="detalle-coleccion">
              <Portada libro={libro} tamano={52} />
              <span>{libro.coleccion}</span>
            </div>
          </motion.section>
        )}

        <motion.section custom={8} variants={enterVariants} initial="hidden" animate="shown">
          <h2 className="detalle-seccion">También te puede gustar</h2>
          <div className="carrusel">
            {parecidos.map((l, i) => (
              <FichaLibro key={l.id} libro={l} i={i} onAbrir={() => onAbrir(l)} />
            ))}
          </div>
        </motion.section>
      </div>

      <div className="detalle-pie">
        <motion.button
          className="primary-btn"
          onClick={onEmpezar}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.3 }}
        >
          {libro.progreso > 0 ? "Seguir" : `Empezar · ${libro.capitulos.length} capítulos`}
        </motion.button>
      </div>
    </motion.div>
  );
}
