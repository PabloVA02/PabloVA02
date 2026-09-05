import { useEffect, useMemo, useRef, useState, type ComponentType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Aprendizaje, AprendizajeVB, Descubrir, DescubrirVB, Estanteria, EstanteriaVB,
  LuzLuna, LuzLunaVB, MapaAventura, MapaAventuraVB, Memoria, MemoriaVB,
  PensarArte, PensarArteVB,
} from "./undraw";
import { enterVariants, pantalla, spring, springPop, springSoft, springTight } from "./motion";
import {
  GlyphAuriculares, GlyphAvatar, GlyphClose, GlyphDescargar,
  GlyphGuardar, GlyphLeer, GlyphLupa, GlyphPaginas, GlyphPuntos, GlyphQuitar,
  GlyphReloj, GlyphShare, GlyphTresPuntos, GlyphVisto,
} from "./glyphs";
import { LIBROS_RESUMEN } from "./libros/puente";
import { APRENDERAS } from "./libros/aprenderas";
import { PAGINAS, PAGINAS_POR_RESUMEN, minutosDePaginas } from "./libros/paginas";
import { PUNTOS } from "./libros/puntos";
import { SUPERVENTAS } from "./libros/superventas";
import { desbloquea } from "./voz";
import { SUBTITULOS } from "./libros/subtitulos";
import { PortadaLibro } from "./PortadaLibro";
import { TiraColecciones } from "./Colecciones";
import { Hoja } from "./Hoja";
import { GestionaTemas } from "./Temas";
import { COLECCIONES_A_LA_VISTA, type Coleccion } from "./colecciones";
import { LibroDelDia, libroDeHoy, librosGratisDeHoy, quedaDeHoy } from "./LibroDelDia";
import regaloCaja from "./ilustraciones/regalo.webp";
import { GlyphAzar } from "./Dado";
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
  /** 0 a 1. Lo que lleva leído. Elige el libro de «Seguir leyendo». */
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

export function Portada({
  libro,
  tamano = 140,
  ansioso,
}: { libro: Libro; tamano?: number; ansioso?: boolean }) {
  return (
    <div className="portada" style={{ width: tamano, height: tamano }}>
      <PortadaLibro
        ansioso={ansioso}
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
   Mi biblioteca: lo tuyo, en tres estados
   ------------------------------------------------------------------------- */

/* Calcada de la captura de Headway, con dos cambios a propósito.
   
   La estructura es la suya: rótulo grande arriba con la lupa a la derecha,
   una fila de filtros con el activo subrayado, y debajo secciones apiladas
   —cada una con su nombre, su cuenta en gris al lado y un «Ver todo»— con las
   cubiertas en tira horizontal.

   Lo que cambia, y por qué:

   · Los filtros de Headway son «Resúmenes · Repetición · Destacados», que son
     COSAS SUYAS: repaso espaciado y subrayados, que aquí no existen. Poner
     dos pestañas a cero para siempre es enseñar una app que no es. Los
     nuestros son los tres estados que sí tenemos, y filtran de verdad.

   · Sus cubiertas llevan dos botones cuadrados encima —descargar y «···»—
     que aquí no harían nada. El marcador de la esquina, en cambio, quita el
     libro de esta pantalla, que es la acción que se pide desde aquí.

   El «Ver todo» no es decorativo: cambia el filtro a esa sección, y entonces
   la tira se abre en parrilla. */

type Estado = "todo" | "leyendo" | "guardados" | "terminados";

/* --------------------------------------------------------------------------
   LIBRO DIARIO GRATIS — lo que ve quien todavía no tiene cuenta

   Pablo, el 2 de septiembre, mandando una captura: «quiero que se vean los
   libros así, libros diarios gratis, con esa etiqueta exactamente igual».

   Medido en su captura, en un móvil de 375: tres tarjetas de 99 de ancho con
   20 de hueco, margen de 20, y encima de cada cubierta una banda azul clarita
   con «Gratis hoy» centrado. La banda no flota sobre la cubierta: va PEGADA
   encima, con las esquinas de arriba redondeadas y las de abajo rectas, de
   modo que las dos piezas se leen como una sola tarjeta.

   Quien sí tiene cuenta sigue viendo lo de siempre —la tarjeta grande con el
   degradado—, que es lo que él pidió expresamente que no se tocara.
   -------------------------------------------------------------------------- */
function LibrosGratis({ onAbrir }: { onAbrir: (l: Libro) => void }) {
  const libros = useMemo(() => librosGratisDeHoy(3), []);
  /* LA CUENTA ATRÁS. Pablo, el 4 de septiembre: «ahora un contador en libro
     diario gratis, uno bonito, no muy aparatoso».
   *
   * No aparatoso quiere decir esto: el reloj pequeño y la cifra, en el hueco
   * que ya deja el rótulo a su derecha. Sin caja, sin fondo y sin verbo, que
   * es exactamente como lo dice la tarjeta grande del día —misma pieza, mismo
   * texto—: dos maneras de escribir la misma cuenta en la misma pantalla se
   * leen como dos cuentas distintas.
   *
   * Y es la única urgencia honesta que hay aquí: no hay plazas ni ofertas que
   * expiran, hay medianoche. A las doce cambian los tres libros de verdad.
   *
   * Se refresca cada veinte segundos, como la otra. Cada segundo obligaría a
   * repintar la tira entera sesenta veces por minuto para mover un dígito que
   * casi nunca cambia. */
  const [queda, setQueda] = useState(() => quedaDeHoy(new Date()));
  useEffect(() => {
    const t = setInterval(() => setQueda(quedaDeHoy(new Date())), 20000);
    return () => clearInterval(t);
  }, []);
  if (!libros.length) return null;
  return (
    <section className="bloque gratis">
      <div className="bloque-cabecera">
        <h2>Libro diario gratis</h2>
        <span className="gratis-reloj">
          <GlyphReloj tamano={13} />
          {queda}
        </span>
      </div>
      {/* La misma tira que «Recomendados»: mismo relleno, mismo hueco y mismo
          anclaje. Pablo: «tiene que ser con el tamaño de nuestros libros, como
          la sección de recomendados». Lo único que se le añade es la banda. */}
      <div className="carrusel gratis-tira">
        {libros.map((l, i) => (
          <motion.button
            key={l.id}
            className="gratis-ficha"
            onClick={() => onAbrir(l)}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.06 + i * 0.05 }}
          >
            {/* El orden del DOM es cubierta y después rótulo; el `order` del
                CSS es el que manda, y así el lector de pantalla oye primero de
                qué libro se trata y luego que hoy es gratis. */}
            <Portada libro={l} tamano={148} />
            <span className="gratis-etiqueta">Gratis hoy</span>
          </motion.button>
        ))}
      </div>
    </section>
  );
}

export function MiBiblioteca({
  guardados,
  terminados,
  empezados = [],
  paginaDe,
  onAbrir,
  onGuardar,
  onTerminar,
  onExplorar,
}: {
  guardados: ReadonlySet<string>;
  /** Los leídos hasta el final. Se apuntan al pulsar «Finalizar resumen». */
  terminados: ReadonlySet<string>;
  /** Los que se han abierto a leer alguna vez, en orden. Los lleva `App`. */
  empezados?: readonly string[];
  /** Por qué página va cada libro. De aquí sale la barra de cada cubierta. */
  paginaDe?: Record<string, { n: number; en: number }>;
  onAbrir: (libro: Libro) => void;
  onGuardar: (libro: Libro) => void;
  /** Darlo por leído desde el menú, sin tener que abrirlo y llegar al final. */
  onTerminar?: (libro: Libro) => void;
  /** Salida de la pantalla vacía: no se deja a nadie delante de una nada. */
  onExplorar: () => void;
}) {
  const [filtro, setFiltro] = useState<Estado>("todo");
  const [buscando, setBuscando] = useState(false);
  const [busca, setBusca] = useState("");
  /* El libro cuyo menú está abierto, o nada. Uno solo: dos menús a la vez no
     tienen sentido y guardarlo por id evitaría tener que buscarlo otra vez. */
  const [menu, setMenu] = useState<Libro | null>(null);

  /* CUÁNTO LLEVA LEÍDO DE CADA UNO, en la misma cuenta que la barra grande del
     inicio: las páginas enteras pasadas más el trozo que lleva de la de ahora,
     sobre las que tiene el libro. Un libro terminado no enseña barra: ya no es
     algo que estés siguiendo. */
  const avanceDe = (l: Libro) => {
    if (terminados.has(l.id)) return 0;
    const marca = paginaDe?.[l.id];
    if (!marca) return 0;
    return Math.min(1, (marca.n + marca.en) / Math.max(1, paginasDeLibro(l)));
  };

  /* GUARDADOS SON TODOS LOS QUE LLEVAN EL MARCADOR, sin más condiciones.
     Estaban excluidos los que ya se estaban leyendo, con la idea de que cada
     libro saliera en una sola sección; y eso rompía lo único que el botón
     promete: guardas un libro que tenías a medias, el aviso dice «Guardado en
     tu biblioteca» y en Guardados no aparecía. El botón manda sobre la
     ordenación.

     Las otras dos sí se excluyen entre sí, porque ahí no hay promesa que
     romper y sí una contradicción: un libro terminado no es un libro que
     estés siguiendo. */
  const secciones = useMemo(() => {
    const fin = LIBROS.filter((l) => terminados.has(l.id));
    /* LEYENDO ES LO QUE SE HA ABIERTO Y NO SE HA ACABADO, y en el orden en que
       se abrió, del más reciente al más viejo: lo último que estabas leyendo
       es lo primero que quieres ver.

       Miraba `l.progreso`, que es un número escrito a mano en los datos de
       muestra y que no mueve nadie al leer: salían siempre los mismos tres
       libros abrieras el que abrieras, y el que acababas de dejar a medias no
       estaba. */
    const abiertos = [...empezados].reverse();
    const leyendo = abiertos
      .filter((id) => !terminados.has(id))
      .map((id) => LIBROS.find((l) => l.id === id))
      .filter((l): l is Libro => !!l);
    const guarda = LIBROS.filter((l) => guardados.has(l.id));
    /* Dos nombres por sección: el largo para el rótulo, que ahí hay sitio, y
       el corto para la fila de filtros, donde cuatro nombres largos no caben
       en 375 puntos y obligan a desplazar para ver el último. */
    return [
      { id: "leyendo" as const, nombre: "Seguir leyendo", corto: "Leyendo", libros: leyendo },
      /* «Guardado para más tarde» es el nombre de la referencia y en 375
         puntos parte en dos renglones al lado del botón. Dice lo mismo en una
         línea. */
      { id: "guardados" as const, nombre: "Para más tarde", corto: "Guardados", libros: guarda },
      { id: "terminados" as const, nombre: "Terminado", corto: "Terminados", libros: fin },
    ];
  }, [guardados, terminados, empezados]);

  const texto = busca.trim().toLowerCase();
  const cuela = (l: Libro) =>
    !texto || l.titulo.toLowerCase().includes(texto) || l.autor.toLowerCase().includes(texto);

  const visibles = secciones
    .filter((sec) => filtro === "todo" || filtro === sec.id)
    .map((sec) => ({ ...sec, libros: sec.libros.filter(cuela) }));

  const total = secciones.reduce((n, sec) => n + sec.libros.length, 0);
  /* Con un solo estado a la vista, la tira se abre en parrilla: ya no es una
     tira de las tres que hay, es la lista de esa sección. */
  const enParrilla = filtro !== "todo";

  return (
    <motion.div
      className="inicio guardados"
      initial={pantalla.initial}
      animate={pantalla.animate}
      exit={pantalla.exit}
    >
      <div className="inicio-scroll">
        <header className="inicio-cabecera">
          <motion.h1 custom={0} variants={enterVariants} initial="hidden" animate="shown">
            Biblioteca
          </motion.h1>
          {total > 0 && (
            <motion.button
              className="biblio-lupa"
              onClick={() => {
                setBuscando((v) => !v);
                setBusca("");
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...springPop, delay: 0.14 }}
              aria-label={buscando ? "Cerrar la búsqueda" : "Buscar en tu biblioteca"}
            >
              {buscando ? <GlyphClose /> : <GlyphLupa />}
            </motion.button>
          )}
        </header>

        {total > 0 && (
          <>
            <AnimatePresence>
              {buscando && (
                <motion.div
                  className="biblio-busca"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={springTight}
                >
                  <input
                    autoFocus
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                    placeholder="Título o autor"
                    aria-label="Buscar en tu biblioteca"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* La fila de filtros. El activo va en verde y subrayado, que es
                lo que hace la referencia con su azul. */}
            <div className="biblio-filtros" role="tablist">
              {([
                { id: "todo" as const, nombre: "Todo" },
                ...secciones.map((sec) => ({ id: sec.id, nombre: sec.corto })),
              ]).map((f) => (
                <button
                  key={f.id}
                  role="tab"
                  aria-selected={filtro === f.id}
                  className="biblio-filtro"
                  data-activo={filtro === f.id}
                  onClick={() => setFiltro(f.id)}
                >
                  {/* Sin la cuenta al lado. Cuatro filtros con su número no
                      caben en 375 puntos ni bajando el cuerpo, y el último se
                      quedaba fuera de pantalla; y la cuenta ya está, más a
                      mano, junto al rótulo de cada sección. */}
                  {f.nombre}
                  {filtro === f.id && (
                    <motion.span className="biblio-raya" layoutId="raya-biblio" transition={spring} />
                  )}
                </button>
              ))}
            </div>
          </>
        )}

        {total === 0 ? (
          <motion.div
            className="guardados-vacio"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.08 }}
          >
            <span className="guardados-marca" aria-hidden>
              <GlyphGuardar />
            </span>
            <p className="guardados-titulo">Tu biblioteca está vacía</p>
            <p className="guardados-sub">
              Toca el marcador de la esquina de cualquier cubierta y el libro
              aparecerá aquí.
            </p>
            <button className="guardados-ir" type="button" onClick={onExplorar}>
              Ver libros
            </button>
          </motion.div>
        ) : (
          visibles.map((sec) =>
            sec.libros.length === 0 ? null : (
              <section className="bloque biblio-bloque" key={sec.id}>
                <div className="bloque-cabecera">
                  <h2>
                    {sec.nombre} <span className="biblio-cuenta">{sec.libros.length}</span>
                  </h2>
                  {filtro === "todo" && sec.libros.length > 1 && (
                    <button className="biblio-todo" type="button" onClick={() => setFiltro(sec.id)}>
                      Ver todo
                    </button>
                  )}
                </div>
                <div className={enParrilla ? "parrilla" : "carrusel"}>
                  {sec.libros.map((l, i) => (
                    <FichaLibro
                      key={l.id}
                      libro={l}
                      i={Math.min(i, 9)}
                      onAbrir={() => onAbrir(l)}
                      guardado={guardados.has(l.id)}
                      onGuardar={() => onGuardar(l)}
                      avance={avanceDe(l)}
                      acciones
                      onMenu={() => setMenu(l)}
                    />
                  ))}
                </div>
              </section>
            ),
          )
        )}

        {/* Solo cuando se ha buscado algo. Sin esta condición, un filtro
            vacío —«Terminados» recién abierta la app— decía «ningún libro
            tuyo se llama así» sin que nadie hubiera escrito nada. */}
        {total > 0 && texto !== "" && visibles.every((sec) => sec.libros.length === 0) && (
          <p className="biblio-nada">Ningún libro tuyo se llama así.</p>
        )}
        {/* Y cuando la sección está vacía de verdad, se dice lo que le falta. */}
        {total > 0 && texto === "" && visibles.every((sec) => sec.libros.length === 0) && (
          <p className="biblio-nada">
            {filtro === "terminados"
              ? "Todavía no has terminado ningún resumen."
              : filtro === "leyendo"
                ? "No tienes ningún libro a medias."
                : "Todavía no has guardado ningún libro."}
          </p>
        )}
      </div>

      {/* EL MENÚ DE LOS TRES PUNTOS. Pablo dijo qué va dentro: «compartir,
          quitar de la biblioteca o marcar como terminado».

          Va en la hoja de siempre y no en un globo pegado al botón: son
          cubiertas de 148 puntos pegadas al borde de la pantalla, y un globo
          ahí se sale o tapa la cubierta de al lado. La hoja siempre cabe, se
          cierra arrastrando y ya se sabe usar en el resto de la app.

          El título es el del libro: tocas tres puntos en una fila de
          cubiertas parecidas y lo primero que hay que confirmar es cuál. */}
      <Hoja abierta={!!menu} titulo={menu?.titulo ?? ""} pie={menu?.autor} onCerrar={() => setMenu(null)}>
        <div className="menu-libro">
          <button
            type="button"
            className="menu-fila"
            onClick={() => {
              const l = menu;
              setMenu(null);
              if (l) comparteLibro(l);
            }}
          >
            <span className="menu-icono" aria-hidden><GlyphShare /></span>
            Compartir
          </button>
          <button
            type="button"
            className="menu-fila"
            onClick={() => {
              const l = menu;
              setMenu(null);
              if (l) onTerminar?.(l);
            }}
            /* Terminado ya: la fila se queda, apagada. Quitarla movería las
               otras dos de sitio según el libro, y un menú que cambia de
               forma obliga a leerlo entero cada vez. */
            disabled={!!menu && terminados.has(menu.id)}
          >
            <span className="menu-icono" aria-hidden><GlyphVisto tamano={17} /></span>
            {menu && terminados.has(menu.id) ? "Ya está terminado" : "Marcar como terminado"}
          </button>
          <button
            type="button"
            className="menu-fila"
            data-peligro
            onClick={() => {
              const l = menu;
              setMenu(null);
              if (l) onGuardar(l);
            }}
          >
            <span className="menu-icono" aria-hidden><GlyphQuitar /></span>
            Quitar de la biblioteca
          </button>
        </div>
      </Hoja>
    </motion.div>
  );
}

/* COMPARTIR. En un móvil de verdad esto abre la bandeja del sistema; donde no
   la haya —un navegador de escritorio— se copia el enlace, que es lo más
   parecido a lo que esperabas. Y si tampoco se puede, no se hace nada ruidoso:
   un fallo al compartir no merece un cartel de error. */
function comparteLibro(l: Libro) {
  const datos = {
    title: l.titulo,
    text: `${l.titulo}, de ${l.autor}, resumido en Curva.`,
    url: `https://pablova02.github.io/curva/?libro=${l.id}`,
  };
  try {
    if (typeof navigator !== "undefined" && navigator.share) {
      void navigator.share(datos).catch(() => {});
      return;
    }
    void navigator?.clipboard?.writeText(datos.url).catch(() => {});
  } catch {
    /* Sin permiso para compartir ni para copiar. Se queda como estaba. */
  }
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

export function FichaLibro({
  libro,
  onAbrir,
  i,
  guardado = false,
  onGuardar,
  avance = 0,
  acciones = false,
  onMenu,
}: {
  libro: Libro;
  onAbrir: () => void;
  i: number;
  /** Si ya está en su biblioteca. Pinta el botón en azul y macizo. */
  guardado?: boolean;
  onGuardar?: () => void;
  /**
   * LO QUE LLEVA LEÍDO, de 0 a 1, y lo que pinta la barra de debajo.
   *
   * Va aparte de `libro.progreso` a propósito: ese es un número escrito a mano
   * en los datos de muestra y no lo mueve nadie al leer. Este sale de la
   * página por la que va de verdad, y quien lo calcula es quien tiene esa
   * cuenta —`App`— y lo baja hasta aquí.
   */
  avance?: number;
  /**
   * EN LA BIBLIOTECA EL MARCADOR SOBRA. Pablo, el 4 de septiembre: «el botón
   * de guardar nuestro lo quitas porque en ese caso no tiene sentido, y pones
   * lo suyo, descargar, y los tres puntitos».
   *
   * Y tiene razón: un libro que ya está en tu biblioteca no se guarda otra
   * vez. Lo que hace falta ahí es lo contrario —sacarlo— y eso vive dentro del
   * menú, junto a compartir y a darlo por terminado.
   *
   * DESPUÉS SE QUEDÓ SOLO EL MENÚ, y fuera de la cubierta. Un rato más tarde:
   * «lo de descargar y los tres puntitos de biblioteca quítalo y ponlo en otro
   * lado, que no tape la portada; lo de descargar quítalo y solo deja los tres
   * puntitos y ya».
   *
   * Las dos teclas iban apoyadas en el borde de abajo de la cubierta, que es
   * donde las pone Headway, y ahí tapan el pie de la portada —justo donde casi
   * todas llevan impreso el nombre del autor—. Ahora el menú baja al renglón
   * del autor, a la derecha, y la cubierta se ve entera.
   */
  acciones?: boolean;
  onMenu?: () => void;
}) {
  return (
    <motion.button
      className="ficha"
      onClick={onAbrir}
      whileTap={{ scale: 0.96 }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...spring, delay: 0.06 + i * 0.05 }}
    >
      {/* EL MARCADOR YA NO VA ENCIMA DE LA CUBIERTA. Estaba asomando por la
          esquina de arriba a la derecha, seis puntos por fuera y por arriba,
          calcado de la referencia de Headway.

          Pablo, el 5 de septiembre: «los libros están cortados por arriba en
          muchos casos, no los cortes en absoluto, debes ponerlo tal cual te
          los paso». Y no es la primera vez: el 4 de septiembre ya sacó de la
          cubierta el botón de descargar y los tres puntos —«ponlo en otro lado
          que no tape la portada»—, y el marcador se quedó. Medido, tapaba unos
          24 × 24 de la esquina de cada cubierta de cada parrilla y cada tira,
          o sea de casi todas las que se ven a la vez.

          Baja al renglón del autor, que es exactamente donde ya viven los tres
          puntos de la biblioteca y por el mismo motivo: ese renglón existe,
          tiene sitio de sobra a la derecha y no tapa nada. Los dos no salen
          nunca a la vez —el marcador fuera de la biblioteca, los tres puntos
          dentro—, así que ocupan la misma esquina sin estorbarse. */}
      <div className="ficha-arte">
        <Portada libro={libro} tamano={148} />
      </div>
      {/* LA BARRA DE PROGRESO, DEBAJO DE LA CUBIERTA Y NO ENCIMA.

          Estaba dentro, flotando sobre el dibujo con un carril blanco, y
          Pablo mandó la de Headway: «cópiame la barra azul de progreso de
          seguir leyendo, hazla igual o casi casi igual». Medida en su
          captura: ocho puntos de alto, todo el ancho de la cubierta, extremos
          redondos, carril gris y relleno azul.

          Y fuera de la cubierta es mejor sitio: encima tapaba justo el pie de
          la portada, que es donde suele ir el nombre del autor impreso. */}
      {avance > 0 && (
        <div
          className="ficha-barra"
          role="progressbar"
          aria-valuenow={Math.round(avance * 100)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Llevas leído el ${Math.round(avance * 100)} %`}
        >
          <motion.div
            className="ficha-relleno"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: avance }}
            transition={{ ...springSoft, delay: 0.3 + i * 0.05 }}
          />
        </div>
      )}
      {/* Bajo la cubierta va el AUTOR y nada más. Es lo que hace la
          referencia, y tiene su lógica: el título ya está escrito, grande,
          en la propia cubierta, así que repetirlo debajo era decir dos veces
          lo mismo y estirar la ficha ciento cuarenta puntos.

          Y a su derecha, en la biblioteca, los tres puntos. Aquí y no sobre la
          cubierta: el renglón del autor ya existe, tiene sitio de sobra a la
          derecha —los nombres cortos dejan media línea vacía— y no tapa nada. */}
      <div className="ficha-pie">
        <p className="ficha-autor">{libro.autor}</p>
        {!acciones && (
          <motion.span
            className="ficha-menu ficha-guardar"
            data-guardado={guardado}
            role="button"
            tabIndex={-1}
            aria-label={guardado ? "Quitar de tu biblioteca" : "Guardar en tu biblioteca"}
            aria-pressed={guardado}
            onClick={(e) => {
              e.stopPropagation();
              onGuardar?.();
            }}
            whileTap={{ scale: 0.86 }}
          >
            {/* El rebote va en el icono y no en el botón: escalando la caja se
                mueve con ella el renglón del autor y parece que tiembla. */}
            <motion.span
              className="guardar-icono"
              animate={guardado ? { scale: [1, 1.34, 1], rotate: [0, -9, 0] } : { scale: 1, rotate: 0 }}
              transition={springPop}
            >
              <GlyphGuardar relleno={guardado} />
            </motion.span>
          </motion.span>
        )}
        {acciones && (
          <motion.span
            className="ficha-menu"
            role="button"
            tabIndex={-1}
            aria-label={`Más opciones de ${libro.titulo}`}
            aria-haspopup="menu"
            onClick={(e) => {
              e.stopPropagation();
              onMenu?.();
            }}
            whileTap={{ scale: 0.88 }}
          >
            <GlyphTresPuntos />
          </motion.span>
        )}
      </div>
    </motion.button>
  );
}

/** «4 min», nunca «4.2 min»: el decimal no aporta y ensucia la ficha. */
export function tiempo(min: number) {
  return `${Math.round(min)} min`;
}

export function Inicio({
  onDado,
  suscrito = true,
  onAbrir,
  onPerfil,
  onEscuchar,
  onOferta,
  intereses = [],
  metas = [],
  guardados,
  onGuardar,
  onColeccion,
  onGestionarTemas,
  enCursoId = null,
  terminados,
  paginaDe,
}: {
  /** Abre la tragaperras: un libro al azar. */
  onDado: () => void;
  /** Sin suscripción no hay libro del día. Ver `LibroDelDia.tsx`. */
  suscrito?: boolean;
  onAbrir: (libro: Libro) => void;
  onPerfil: () => void;
  /** Abre el libro directamente en voz alta. Lo usa «El libro de hoy». */
  onEscuchar?: (libro: Libro) => void;
  /** El banner de lectura gratuita. Si no se pasa, el banner no sale. */
  onOferta?: () => void;
  /** Lo que marcó en la introducción. Ordena la estantería, no la recorta. */
  intereses?: string[];
  /** Lo que el lector eligió: sus metas. `intereses` son las categorías que
   *  salen de ellas, y es lo que ordena la estantería. */
  metas?: string[];
  /** Los que ya están en su biblioteca, por id. Viven en `App`. */
  guardados?: ReadonlySet<string>;
  onGuardar?: (libro: Libro) => void;
  /** Abre una colección. Sin esto, la tira de colecciones no sale. */
  onColeccion?: (c: Coleccion) => void;
  /** Abre la pantalla de temas. Sin esto, la tarjeta de gestión no sale. */
  onGestionarTemas?: () => void;
  /** El último libro que se abrió a leer y no se terminó. Lo lleva `App`. */
  enCursoId?: string | null;
  /** Los ya acabados, para no ofrecer «seguir» uno que está terminado. */
  terminados?: ReadonlySet<string>;
  /** Por dónde va cada libro: página y sitio dentro de ella. Lo lleva `App`. */
  paginaDe?: Record<string, { n: number; en: number }>;
}) {
  const [filtro, setFiltro] = useState<string | null>(null);

  /* EL LIBRO DE «SEGUIR LEYENDO».
   *
   * Pablo, el 1 de septiembre: «debe aparecer la portada del libro que se
   * estaba leyendo en ese momento, el último de todos que se abrió y no se
   * terminó».
   *
   * Esto era lo que fallaba: se cogía `LIBROS.filter(l => l.progreso > 0)[0]`,
   * o sea el PRIMERO DEL CATÁLOGO con un progreso escrito a mano en los datos
   * de muestra. Salía siempre el mismo —«Lo que perdimos de Grecia»— abrieras
   * lo que abrieras, porque ese número no lo mueve nadie al leer.
   *
   * Ahora manda lo que de verdad pasó: `enCursoId`, que `App` apunta al entrar
   * en el texto y borra al terminarlo. El orden de las alternativas es el de
   * lo que más cerca está de la verdad:
   *
   *   1. lo último que se abrió y no se acabó;
   *   2. si no hay, algo a medias del catálogo que tampoco esté acabado;
   *   3. y si tampoco, el primero sin acabar, que es lo que se le ofrece a una
   *      cuenta recién abierta. */
  const acabado = (l: Libro) => terminados?.has(l.id) ?? false;
  const ultimo = enCursoId ? LIBROS.find((l) => l.id === enCursoId && !acabado(l)) : undefined;
  const aMedias = LIBROS.find((l) => l.progreso > 0 && !acabado(l));
  const destacado = ultimo ?? aMedias ?? LIBROS.find((l) => !acabado(l)) ?? LIBROS[0];
  /* LA BARRA DICE CUÁNTO LLEVAS LEÍDO DE VERDAD.
   *
   * Pablo, el 2 de septiembre: «eso debe aparecer en la línea de seguir
   * leyendo para saber cuánto se lleva leído del libro».
   *
   * Sale de la página por la que va —la que guarda el lector al pasar— sobre
   * las que tiene el libro. Se cuenta la página EMPEZADA, no la terminada: si
   * vas por la segunda de diez, llevas dos de diez y no una, porque la que
   * estás leyendo también cuenta. Por eso `+ 1`.
   *
   * Antes esto era `destacado.progreso`, el número de los datos de muestra, y
   * cuando valía cero se pintaba un arranque falso del 15 % para que la barra
   * no saliera vacía. Un adorno que mentía. Ahora, si de verdad no se ha
   * pasado de la primera página, la barra enseña esa primera página y ya. */
  const hojas = Math.max(1, paginasDeLibro(destacado));
  const porDonde = paginaDe?.[destacado.id];
  /* Páginas enteras leídas más el trozo que llevas de la de ahora. Quien va
     por la mitad de la quinta de dieciséis ha leído cuatro y media, o sea un
     28 %, y eso es lo que se pinta. */
  const avance = Math.min(1, ((porDonde?.n ?? 0) + (porDonde?.en ?? 0)) / hojas);
  /* Cada toque en el dado sube este número, y cada cambio lanza una tirada en
     el dibujo de la cabecera. Un contador y no un booleano: dos toques
     seguidos tienen que dar dos tiradas. */
  const [tiradas, tirar] = useState(0);
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
  /* Los superventas, en el orden en que están escritos —de más vendido a
     menos— y sin filtrar por nada. Se cae el que no esté en el catálogo, que
     es la única manera de que borrar un libro no deje un hueco aquí. */
  const superventas = useMemo(
    () => SUPERVENTAS.map((s) => LIBROS.find((l) => l.id === s.id)).filter((l): l is Libro => !!l),
    [],
  );

  const recomendados = useMemo(() => {
    const libres = LIBROS.filter((l) => l.progreso === 0);
    if (filtro) return libres.filter((l) => l.categoria === filtro);
    if (!intereses.length) return libres;
    const peso = (l: Libro) => (intereses.includes(l.categoria) ? 0 : 1);
    return [...libres].sort((a, b) => peso(a) - peso(b));
  }, [filtro, intereses]);

  /* CUÁNTAS FICHAS DE LA TIRA ESTÁN PUESTAS DE VERDAD.
   *
   * La tira llevaba las cuatrocientas y pico del catálogo, y en la pantalla
   * caben dos y media. Las otras cuatrocientas estaban a la derecha, fuera,
   * ocupando 5.300 nodos que había que construir al entrar en el inicio y
   * deshacer al salir: eso es lo que hacía que cambiar de pestaña fuera a
   * trompicones. Medido con el procesador a un cuarto de velocidad, entrar en
   * Shorts costaba 2.300 ms de tareas largas, casi todo desmontar esto.
   *
   * Ahora se ponen doce y se añaden de doce en doce según el dedo se acerca al
   * final de la tira. No cambia nada de lo que se ve ni de lo que se puede
   * hacer: el catálogo entero sigue estando y la cuenta de arriba sigue
   * diciendo cuántos hay. Lo único que cambia es que no se fabrica lo que
   * nadie ha pedido todavía.
   *
   * Y no se hace con `content-visibility`, que es lo primero que se probó: con
   * 405 fichas la contabilidad de esa propiedad costaba MÁS que maquetarlas,
   * 3.280 ms contra 2.349. Lo dijo la medida, no la intuición. */
  const PASO_TIRA = 12;
  const [aLaVista, setALaVista] = useState(PASO_TIRA);
  /* Al cambiar de filtro la tira es otra y vuelve a empezar por el principio. */
  useEffect(() => setALaVista(PASO_TIRA), [filtro, intereses]);
  const tira = useRef<HTMLDivElement>(null);
  const masTira = () => {
    const c = tira.current;
    if (!c) return;
    /* Cuando falta menos de una pantalla y media para el final, se añaden más.
       Con ese margen las siguientes están puestas antes de que se vean. */
    if (c.scrollLeft + c.clientWidth * 2.5 < c.scrollWidth) return;
    setALaVista((n) => (n >= recomendados.length ? n : n + PASO_TIRA));
  };

  return (
    <motion.div
      className="inicio"
      initial={pantalla.initial}
      animate={pantalla.animate}
      exit={pantalla.exit}
    >
      <div className="inicio-scroll">
        <header className="inicio-cabecera">
          <motion.h1 custom={0} variants={enterVariants} initial="hidden" animate="shown">
            {saludo()}
          </motion.h1>
          {/* Dos botones en una sola pastilla partida por un filete, como en la
              captura de Headway. Ellos ponen ahí el fuego de la racha; el 27
              de agosto Pablo lo cambió por sacar un libro AL AZAR, que abre la
              tragaperras. Es mejor sitio: la racha ya se ve entera en el perfil
              y en su pantalla, mientras que «no sé qué leer» es el problema que
              se tiene justo al abrir la app, que es cuando se mira aquí arriba.

              Y va sin la cifra al lado. El «3» era de la racha; aquí no querría
              decir nada, y un número que no significa nada en la esquina de una
              pantalla se lee igual: se intenta entender.

              EL DIBUJO YA NO ES UN DADO, y por qué está contado entero en
              `Dado.tsx`, encima de `GlyphAzar`: se probaron cuatro dados y los
              cuatro se devolvieron, el último siendo el 3D que él mismo había
              pedido. El problema no era el dado, era que un objeto con luz y
              sombra está solo en una cabecera de trazos blancos.

              Se menea solo cada nueve segundos. Sin eso es un icono más de una
              fila de iconos y nadie lo toca; con eso pide que lo pulses, que es
              exactamente lo que hay que hacer con él. */}
          <motion.div
            className="cabecera-pastilla"
            initial={{ opacity: 0, scale: 0.86 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...springPop, delay: 0.16 }}
          >
            <motion.button
              className="pastilla-dado"
              onClick={() => {
                /* La tirada se lanza ANTES de abrir la máquina, no después:
                   el dado tiene que contestar al dedo en el mismo fotograma
                   en que se toca. */
                tirar((n) => n + 1);
                onDado();
              }}
              whileTap={{ scale: 0.9 }}
              aria-label="Sacar un libro al azar"
            >
              <GlyphAzar tamano={26} tirada={tiradas} />
            </motion.button>
            <span className="cabecera-filete" aria-hidden />
            <motion.button
              className="pastilla-perfil"
              onClick={onPerfil}
              whileTap={{ scale: 0.92 }}
              aria-label="Tu perfil"
            >
              <GlyphAvatar tamano={23} />
            </motion.button>
          </motion.div>
        </header>

        {/* El libro a medias, lo primero de todo. Antes flotaba abajo, en el
            sitio donde Blinkist pone su reproductor; Pablo lo quiere arriba,
            encima de la lectura gratuita, y tiene su lógica: lo que estás
            leyendo pesa más que lo que se te ofrece.

            La forma sale de su captura: pastilla entera, la cubierta a la
            izquierda, la ceja pequeña encima del título y la barra de avance
            corriendo por el filo de abajo, en verde. */}
        <motion.button
          className="pastilla-curso"
          onClick={() => onAbrir(destacado)}
          whileTap={{ scale: 0.985 }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.04 }}
        >
          <span className="curso-libro" aria-hidden>
            <Portada libro={destacado} tamano={27} />
          </span>
          <span className="curso-texto">
            {/* La ceja lleva la cuenta. La barra dice cuánto de un vistazo, pero
                «cuánto llevo» se contesta con un número, y ahí abajo hay sitio
                de sobra. Solo sale cuando se ha pasado de la primera página:
                antes de eso «1 de 10» es ruido, porque aún no has avanzado. */}
            <span className="curso-ceja">
              Seguir leyendo
              {(porDonde?.n ?? 0) > 0 && (
                <span className="curso-cuenta">
                  {(porDonde?.n ?? 0) + 1} de {hojas}
                </span>
              )}
            </span>
            <span className="curso-titulo">{destacado.titulo}</span>
          </span>
          <span className="curso-barra">
            <motion.span
              className="curso-relleno"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: avance }}
              transition={{ ...springSoft, delay: 0.4 }}
            />
          </span>
        </motion.button>

        {/* El libro de hoy, justo debajo de la pastilla de «seguir leyendo».
            Es lo único de la pantalla que cambia cada día, así que es lo que
            da un motivo para abrir la app un martes cualquiera. La pastilla de
            arriba va antes porque es de una línea y porque quien tiene algo a
            medias viene a eso.

            Aquí estaba la franja verde de «Lectura diaria gratuita», y se ha
            quitado: anunciaba en un cartel aparte justo lo que esta tarjeta ES
            para quien no paga. Ahora lo dice la tarjeta misma. Ver
            `LibroDelDia.tsx`. */}
        {/* Con cuenta, la tarjeta del día de siempre. Sin ella, la tira de tres
            libros gratis calcada de la captura del 2 de septiembre. */}
        {suscrito ? (
          <LibroDelDia
            suscrito={suscrito}
            guardado={guardados?.has(libroDeHoy()?.id ?? "")}
            onGuardar={onGuardar}
            onLeer={onAbrir}
            onEscuchar={onEscuchar}
          />
        ) : (
          <LibrosGratis onAbrir={onAbrir} />
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
              {/* «PARA TI» Y NADA MÁS. Pablo, el 4 de septiembre: «en vez de
                  recomendados quiero que solo ponga Para ti». Decía
                  «Recomendados» a secas para quien todavía no había elegido
                  temas y «Para ti» para quien sí, con un subtítulo debajo que
                  explicaba cuál de las dos cosas era.

                  El nombre vale igual en los dos casos y el subtítulo sobraba:
                  al lado hay un botón que dice «Gestionar», que es de donde se
                  saca que esto se puede cambiar. Con el filtro puesto sí queda
                  el rótulo de la categoría y su cuenta, porque ahí el número es
                  el resultado de lo que acabas de pulsar. */}
              <h2>{filtro ?? "Para ti"}</h2>
              {filtro && (
                <p className="bloque-sub">
                  {recomendados.length} {recomendados.length === 1 ? "libro" : "libros"}
                </p>
              )}
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
          <div className="carrusel" ref={tira} onScroll={masTira}>
            <AnimatePresence mode="popLayout">
              {recomendados.slice(0, aLaVista).map((l, i) => (
                <FichaLibro
                  key={l.id}
                  libro={l}
                  i={Math.min(i, 9)}
                  onAbrir={() => onAbrir(l)}
                  guardado={guardados?.has(l.id)}
                  onGuardar={onGuardar && (() => onGuardar(l))}
                />
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* BEST SELLERS, JUSTO DEBAJO. Pablo, el 4 de septiembre: «y debajo
            otra fila de best sellers».

            El sitio importa y es el que él dijo: primero lo que te podría
            gustar a TI, y después lo que le ha gustado a todo el mundo. Al
            revés, la fila personal quedaría de apéndice de la general.

            Con un filtro puesto no sale. El filtro es una categoría —«Historia»,
            «Dinero»— y una lista de superventas no se filtra por tema sin
            dejar de ser lo que es: los tres más vendidos de una categoría no
            son best sellers, son los tres primeros de una lista corta. */}
        {!filtro && (
          <section className="bloque">
            <div className="bloque-cabecera">
              <h2>Best sellers</h2>
            </div>
            <div className="carrusel">
              {superventas.map((l, i) => (
                <FichaLibro
                  key={l.id}
                  libro={l}
                  i={Math.min(i, 9)}
                  onAbrir={() => onAbrir(l)}
                  guardado={guardados?.has(l.id)}
                  onGuardar={onGuardar && (() => onGuardar(l))}
                />
              ))}
            </div>
          </section>
        )}

        {/* Las colecciones van justo debajo de lo que recomendamos, que es
            donde las ponen Headway y Blinkist. El sitio no es capricho suyo:
            la tira de arriba es «un libro para hoy» y ésta es «un plan para
            varias semanas», así que la segunda solo tiene sentido después de
            que la primera no haya bastado. Con el filtro puesto no salen: el
            filtro es una categoría y una colección no lo es. */}
        {COLECCIONES_A_LA_VISTA && !filtro && onColeccion && (
          <TiraColecciones intereses={intereses} onAbrir={onColeccion} />
        )}

        {/* Aquí estaba «Personalizado para ti»: una ficha ancha por libro,
            con la portada sobre un arco de color y un párrafo debajo. Pablo
            la quitó el 27 de agosto y en su sitio va la tarjeta de gestionar
            los temas, que es la de las capturas de Headway.

            Y el cambio arregla algo, no solo mueve una sección. Aquella
            enseñaba un libro bajo el rótulo «por lo que te interesa», o sea
            que prometía un cálculo donde solo había un libro sacado de la
            lista de siempre; el de abajo lo enseñaba igual con los intereses
            vacíos. La tarjeta nueva no promete nada: enseña los temas que
            marcaste, con su nombre, y el botón para cambiarlos. Es lo mismo
            que se hizo en la tira de colecciones —no inventar personalización
            que no existe y enseñar la palanca que sí existe— y encima es lo
            único de esta pantalla que deja cambiar lo que se ve sin salir de
            ella. */}
        {!filtro && onGestionarTemas && (
          <GestionaTemas metas={metas} onGestionar={onGestionarTemas} />
        )}

      </div>

      {/* EL REGALO, EN UN RECUADRO. Pablo, el 5 de septiembre: «no pongas el
          círculo ese verde en el regalo, quítalo, y pon en cambio un recuadro
          al lado tu regalo que envuelva todo y quede muy bien y bonito».

          Tres formas ha tenido este botón. Pastilla verde ancha con un lazo
          dibujado; después, círculo verde con solo el dibujo de Pablo y las
          palabras fuera; ahora, un marco fino que envuelve las dos cosas.

          Las palabras VUELVEN, y no es dar marcha atrás. Sin rótulo, el botón
          dependía de que se reconociera un dibujo de 38 puntos; con marco hay
          sitio para decirlo, porque lo que ocupaba antes no era el texto, era
          el relleno verde. El `aria-label` sobra ahora: hay texto que leer.

          Y EL MENEO YA NO ESTÁ. El regalo se sacudía cada pocos segundos, y
          antes de eso latía el botón entero. Pablo lo quitó el 5 de septiembre
          —«quítame las animaciones que pones y deja las imágenes como están»—.
          Se queda el `whileTap`, que no es una animación de entrada sino el
          acuse de que el dedo ha tocado: sin él, un botón parece averiado. */}
      {onOferta && (
        <motion.button className="regalo-flota" onClick={onOferta} whileTap={{ scale: 0.96 }}>
          <img className="regalo-flota-caja" src={regaloCaja} width={36} height={38} alt="" />
          <span className="regalo-flota-texto">Tu regalo</span>
        </motion.button>
      )}

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
export const tema = (c: string) => TEMA[c] ?? c;

/* La descripción de la ficha: la primera frase del gancho y nada más. Antes
   se recortaba con puntos suspensivos a media palabra, que en una parrilla de
   veinte fichas es un campo de minas de puntitos. Una frase entera, con su
   punto, se lee y se acaba.

   La usaba «Personalizado para ti», que ya no está. Se queda porque la ficha
   ancha es una pieza que va a volver —es la única forma que tenemos de
   explicar UN libro— y rehacerla desde cero para eso es tirar el trabajo. */
export function primeraFrase(texto: string): string {
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

/**
 * LA FICHA, A LA MANERA DE HEADWAY.
 *
 * Pablo pasó una captura suya y pidió cuatro cosas: la cubierta más grande,
 * el título y el autor colocados como allí, una descripción breve, la lista
 * de lo que se va a aprender, y abajo los dos botones de leer y escuchar
 * —«pero que no sea calcado»—. Lo que cambia respecto a la captura:
 *
 *   la pastilla de categoría   suya, con el color del tema. Headway no la
 *                              tiene y es lo que le pone color a la cabecera
 *   los vistos                 en verde y no en azul: en esta app el verde es
 *                              lo que ya es tuyo, y una idea aprendida lo es
 *   los botones                pastillas enteras —radio 999— y uno relleno y
 *                              otro de contorno, en vez de dos rectángulos
 *                              azules iguales. Se distingue cuál es el gesto
 *                              principal sin leerlos
 *
 * Lo de antes era un calco del segundo vídeo de Blinkist: cubierta de 114
 * sobre una cúpula pastel y los tres botones redondos pegados a la izquierda.
 * De aquello se queda la cúpula, porque es lo que da color al hueco detrás de
 * la cubierta, y crece con ella.
 *
 * LAS TRES CIFRAS de la fila salen del libro, no están escritas a mano: las
 * ideas clave son las tarjetas `clave` de su resumen —una por capítulo, que es
 * el esqueleto que define `tipos.ts`—, los minutos están medidos sobre el
 * texto real y las páginas son las ocho de todo resumen.
 */
export function DetalleLibro({
  libro,
  onCerrar,
  onEmpezar,
  onEscuchar,
  onAbrir,
  guardados,
  onGuardar,
}: {
  libro: Libro;
  onCerrar: () => void;
  onEmpezar: () => void;
  /** Lo mismo que empezar, pero entrando con la voz puesta. */
  onEscuchar: () => void;
  onAbrir: (libro: Libro) => void;
  /* La hoja recibe el conjunto entero y no un solo booleano: abajo lleva su
     propia tira de «También te puede gustar», y esas fichas tienen que
     enseñar su estado igual que las de la estantería. */
  guardados?: ReadonlySet<string>;
  onGuardar?: (libro: Libro) => void;
}) {
  const guardado = guardados?.has(libro.id) ?? false;
  const parecidos = LIBROS.filter((l) => l.id !== libro.id).slice(0, 4);

  /* Lo escrito a mano manda: es lo que uno se lleva del libro. Sin ello van
     las paradas del recorrido, que son cortas y concretas pero cuentan por
     dónde se pasa y no qué se saca. Ver `puntos.ts`. */
  const lista = PUNTOS[libro.id] ?? paradasDe(libro);

  return (
    <motion.div
      className="detalle"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0, transition: springSoft }}
      exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
    >
      {/* La barra de arriba se queda quieta mientras el texto pasa por debajo:
          cerrar y los tres gestos del libro tienen que estar siempre a mano.
          Antes los tres colgaban del pie de la cúpula, pegados a la izquierda,
          y con la columna centrada quedaban descolgados. */}
      <div className="detalle-barra">
        <button className="icon-btn detalle-cerrar" onClick={onCerrar} aria-label="Cerrar">
          <GlyphClose />
        </button>
        <div className="detalle-acciones">
          {/* El primero es el mismo gesto que la esquina de la cubierta, así
              que tiene que contar lo mismo: azul y macizo cuando ya está. */}
          <motion.button
            className="accion-redonda"
            data-guardado={guardado}
            whileTap={{ scale: 0.88 }}
            aria-label={guardado ? "Quitar de tu biblioteca" : "Guardar en tu biblioteca"}
            aria-pressed={guardado}
            onClick={() => onGuardar?.(libro)}
          >
            <motion.span
              className="guardar-icono"
              animate={guardado ? { scale: [1, 1.34, 1], rotate: [0, -9, 0] } : { scale: 1, rotate: 0 }}
              transition={springPop}
            >
              <GlyphGuardar relleno={guardado} />
            </motion.span>
          </motion.button>
          {[
            { g: <GlyphDescargar />, l: "Descargar" },
            { g: <GlyphShare />, l: "Compartir" },
          ].map((a) => (
            <motion.button key={a.l} className="accion-redonda" whileTap={{ scale: 0.88 }} aria-label={a.l}>
              {a.g}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="detalle-scroll">
        {/* El color va como variable para poder aclararlo en la hoja: la
            cúpula es un tinte pastel, no el color de la categoría a pelo. */}
        <div className="detalle-arco" style={{ ["--arco" as string]: libro.color }} />

        <motion.div
          className="detalle-portada"
          initial={{ opacity: 0, y: 18, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...springPop, delay: 0.08 }}
        >
          <Portada libro={libro} tamano={152} />
        </motion.div>

        {[
          <span key="c" className="chip-cat chip-relleno" style={{ background: libro.color }}>
            {libro.categoria}
          </span>,
          <h1 key="t" className="detalle-titulo">{libro.titulo}</h1>,
          /* La frase de la cubierta, que es lo que coloca el libro en un
             segundo: «Sapiens» no dice nada y «Una breve historia de la
             humanidad» lo dice todo. Solo la llevan los libros que la tienen
             de verdad; el resto no pinta la línea. Ver `subtitulos.ts`. */
          ...(SUBTITULOS[libro.id]
            ? [<p key="s" className="detalle-subtitulo">{SUBTITULOS[libro.id]}</p>]
            : []),
          <p key="a" className="detalle-autor">
            {libro.autor}
            {libro.ano && <span className="detalle-ano"> · {libro.ano}</span>}
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

        {/* Las tres cifras, como en la captura: cuántas ideas, cuánto dura y
            cuánto ocupa. Es lo que se mira antes de decidir si se entra. */}
        <motion.ul
          className="detalle-datos"
          custom={6}
          variants={enterVariants}
          initial="hidden"
          animate="shown"
        >
          <li><GlyphPuntos /> {lista.length} ideas clave</li>
          <li><GlyphReloj /> {tiempo(minutosDeLibro(libro))}</li>
          {/* Las páginas de ESTE libro, no las de un libro tipo. Estuvo fijo en
              ocho porque todos los resúmenes medían ocho, y en cuanto un libro
              denso pasó a doce, la ficha empezó a mentir sin que nadie lo
              notara: el lector decía «3 de 12» y la ficha, «8 páginas». */}
          <li><GlyphPaginas /> {paginasDeLibro(libro)} páginas</li>
        </motion.ul>

        {/* De qué va el libro, no por qué habría que leerlo. El rótulo decía
            «Por qué merece la pena» y debajo iba `porQue`, que es un argumento
            de venta: sirve para decidir si entras y no para saber qué te vas a
            encontrar. El texto de `aprenderas.ts` cuenta el recorrido; si un
            libro todavía no lo tiene, cae en el de antes para no dejar hueco. */}
        <motion.section custom={7} variants={enterVariants} initial="hidden" animate="shown">
          <h2 className="detalle-seccion">De qué trata</h2>
          <p className="detalle-parrafo">{APRENDERAS[libro.id] ?? libro.gancho}</p>
        </motion.section>

        <motion.section
          className="aprender"
          custom={8}
          variants={enterVariants}
          initial="hidden"
          animate="shown"
        >
          <h2 className="aprender-rotulo">Aprenderás</h2>
          <ul className="aprender-lista">
            {lista.map((idea, i) => (
              <li key={i}>
                <span className="aprender-visto"><GlyphVisto /></span>
                <span>{idea}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {COLECCIONES_A_LA_VISTA && libro.coleccion && (
          <motion.section custom={9} variants={enterVariants} initial="hidden" animate="shown">
            <h2 className="detalle-seccion">Aparece en</h2>
            <div className="detalle-coleccion">
              <Portada libro={libro} tamano={52} />
              <span>{libro.coleccion}</span>
            </div>
          </motion.section>
        )}

        <motion.section custom={10} variants={enterVariants} initial="hidden" animate="shown">
          <h2 className="detalle-seccion">También te puede gustar</h2>
          <div className="carrusel">
            {parecidos.map((l, i) => (
              <FichaLibro
                  key={l.id}
                  libro={l}
                  i={i}
                  onAbrir={() => onAbrir(l)}
                  guardado={guardados?.has(l.id)}
                  onGuardar={onGuardar && (() => onGuardar(l))}
                />
            ))}
          </div>
        </motion.section>
      </div>

      <div className="detalle-pie">
        <motion.div
          className="detalle-botones"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.3 }}
        >
          {/* El toque en este botón es lo que abre la síntesis de voz en
              Safari: si la primera locución no sale de un gesto del dedo, iOS
              no deja hablar en toda la sesión. Por eso `desbloquea()` va aquí
              dentro y no en el lector, que se monta ya sin gesto. */}
          <motion.button
            className="btn-pie btn-pie-hueco"
            onClick={() => {
              desbloquea();
              onEscuchar();
            }}
            whileTap={{ scale: 0.97 }}
          >
            <GlyphAuriculares />
            Escuchar
          </motion.button>
          {/* El principal es leer, y por eso es el macizo. Los minutos van
              dentro cuando el libro está por empezar: la línea que los llevaba
              está oculta en esta pantalla, así que este es el único sitio donde
              se ve cuánto dura. */}
          <motion.button className="btn-pie btn-pie-macizo" onClick={onEmpezar} whileTap={{ scale: 0.97 }}>
            <GlyphLeer />
            {libro.progreso > 0 ? "Seguir" : "Leer"}
          </motion.button>
        </motion.div>
      </div>

    </motion.div>
  );
}

/* Los minutos que se enseñan en la ficha, y son los de OÍRLO. El porqué está
   en `minutosDePaginas()`: es el mayor de los dos números, así que quien lea
   termina antes de lo prometido.

   Un libro reescrito a mano se cuenta de sus palabras. Los que aún no lo
   están traen del catálogo unos minutos de LECTURA, calculados sobre el texto
   por tarjetas, y se pasan a audio con el mismo tercio: 200 palabras por
   minuto leyendo contra 140 diciéndolo. */
/** Cuántas páginas tiene ESTE libro. Ver `minutosDeLibro`, que va en pareja. */
export function paginasDeLibro(libro: Libro): number {
  return PAGINAS[libro.id]?.length ?? PAGINAS_POR_RESUMEN;
}

export function minutosDeLibro(libro: Libro): number {
  const paginas = PAGINAS[libro.id];
  if (paginas) return minutosDePaginas(paginas);
  return Math.round((libro.minutos ?? 25) * (200 / 140));
}

/* Lo que va en «Aprenderás»: las paradas del libro.

   El primer intento fueron las frases de las tarjetas `clave`, y Pablo las
   devolvió: «son cosas un poco ambiguas, tienen que ser más cortas y más
   concretas». Tenía razón, y se puede medir: las 1.476 frases clave escritas
   tienen una mediana de 32 palabras. Son el remate de un capítulo, pensadas
   para leerse DESPUÉS de él, y sueltas en una lista no se sostienen.

   Los títulos de los capítulos sí. `tipos.ts` los define como paradas de un
   viaje y no como etiquetas de archivador —«el mayor fraude de la historia»,
   «la neolengua y el doblepensar», «la habitación 101 y el apéndice»—, así que
   ya son cortos y concretos, que es lo que se pedía.

   Lo único que hay que quitarles es el andamiaje del viaje: en esta lista
   «Salida:», «Primera parada:» y «Destino:» no dicen nada, numeran algo que la
   lista ya enseña en orden. Fuera el prefijo, y mayúscula a la primera para
   que las cinco entren iguales vengan de donde vengan. */
const ANDAMIO = /^(salida|(primera|segunda|tercera|cuarta|quinta|sexta) parada|destino)\s*:\s*/i;

function paradasDe(libro: Libro): string[] {
  return libro.capitulos.slice(0, 5).map((c) => {
    const limpio = c.titulo.replace(ANDAMIO, "").trim();
    return limpio.charAt(0).toUpperCase() + limpio.slice(1);
  });
}
