import { CATALOGO, type Categoria } from "./catalogo";

/* ==========================================================================
   Los géneros de la pantalla de explorar.

   NO son las categorías. Las categorías son ocho, están fijadas por la
   pregunta de la introducción —«¿qué temas te interesan?»— y no se pueden
   tocar sin que la respuesta del usuario deje de servir. Sirven para ordenar
   la estantería.

   Un género es otra cosa: es cómo BUSCA la gente. Nadie entra en una app de
   resúmenes pensando «quiero psicología»; entra pensando «quiero dejar de
   procrastinar», «quiero entender el dinero» o «quiero caer mejor». Headway y
   Blinkist tienen quince o veinte cajones de ese tipo, y por eso su pantalla
   de búsqueda funciona y una parrilla de ocho categorías académicas no.

   Así que el género es un EJE TRANSVERSAL. Hábitos atómicos está en
   Psicología —su categoría— y aparece a la vez en «Hábitos y rutinas» y en
   «Desarrollo personal». El príncipe está en Filosofía y aparece en
   «Liderazgo». Un libro puede estar en varios géneros o en ninguno.

   CÓMO SE ASIGNA

   A mano los que importan, y por categoría el resto. Los géneros que mueven a
   la gente —dinero, hábitos, relaciones, mente— llevan lista escrita: son
   pocos libros y la elección es la mitad del trabajo. Los cajones grandes
   —Historia, Ciencia, Literatura, Arte, Salud— se llenan solos con su
   categoría, porque ahí el género y la categoría son lo mismo y escribir
   ciento veinte identificadores a mano solo sirve para que se desincronicen.

   Un identificador que no esté en el catálogo se cae al construir la tabla,
   así que una lista con una errata se nota: el género sale con un libro menos
   y `comprobar()` lo dice.
   ========================================================================== */

export type Genero = {
  id: string;
  /** Como se lee en la pastilla. Corto: tiene que caber sin partirse. */
  nombre: string;
  /** La línea que explica el cajón cuando se abre. */
  sub: string;
  /** Qué dibujo le toca, de `glifos-generos.tsx`. */
  icono: string;
  /** Los que van escritos a mano. */
  libros?: string[];
  /** O la categoría entera, para los cajones que coinciden con una. */
  categoria?: Categoria;
};

/* El orden importa: es el de la parrilla, y los primeros son los que más se
   tocan. Desarrollo personal y dinero van delante porque son los dos que
   traen a la gente. */
export const GENEROS: Genero[] = [
  {
    id: "desarrollo",
    nombre: "Desarrollo personal",
    sub: "Cambiar algo que llevas años arrastrando",
    icono: "escalera",
    libros: [
      "habitos-atomicos", "siete-habitos", "poder-habitos", "sutil-arte", "mindset",
      "monje-ferrari", "cosas-buenas", "invencible", "deja-de-ser-tu", "el-elemento",
      "camino-artista", "guerra-arte", "milagro-manana", "club-5-manana", "busca-sentido",
    ],
  },
  {
    id: "dinero",
    nombre: "Dinero e inversiones",
    sub: "Entender el dinero antes de moverlo",
    icono: "hucha",
    libros: [
      "psicologia-dinero", "padre-rico", "piensa-hazte-rico", "mente-millonaria",
      "hombre-rico-babilonia", "inversor-inteligente", "bogle-sentido-comun",
      "millonario-al-lado", "paseo-aleatorio", "dinero-domina-juego", "cisne-negro",
      "antifragil", "freakonomics", "capital-siglo-xxi", "riqueza-naciones",
    ],
  },
  {
    id: "habitos",
    nombre: "Hábitos y rutinas",
    sub: "Que las cosas salgan sin tener que obligarte",
    icono: "diana",
    libros: [
      "habitos-atomicos", "poder-habitos", "trabajo-profundo",
      "club-5-manana", "milagro-manana", "semana-4-horas", "flow", "siete-habitos",
    ],
  },
  {
    id: "mente",
    nombre: "Mente y emociones",
    sub: "Cómo funciona por dentro y qué se puede tocar",
    icono: "cabeza",
    libros: [
      "inteligencia-emocional", "pensar-rapido", "poder-ahora", "sentirse-bien",
      "cuerpo-cuenta", "error-descartes", "intro-psicoanalisis", "busca-sentido",
      "respira", "flow", "vivir-plenitud", "cerebro-del-nino",
    ],
  },
  {
    id: "relaciones",
    nombre: "Gente y relaciones",
    sub: "Caer mejor, discutir menos, entender al otro",
    icono: "dos",
    libros: [
      "amigos-influir", "influencia", "lenguajes-amor", "maneras-de-amar",
      "48-leyes-poder", "gottman-pareja",
      "arte-de-amar", "marte-venus", "cuatro-acuerdos", "cerebro-del-nino", "nudge",
    ],
  },
  {
    id: "amor",
    nombre: "Amor y sexo",
    /* Es el cajón que más se abre en cualquier app de resúmenes, y el que más
       fácil se llena de folletos. Aquí entra por dos vías: lo que está medido
       —Gottman grabando a parejas durante años, Fisher metiendo enamorados en
       un escáner— y lo que está bien contado, incluida la poesía. Y entra
       también lo que se vende muchísimo y no se sostiene, porque un resumen
       nuestro dice dónde falla y ese es justo el servicio. */
    sub: "Deseo, pareja y lo que dicen los datos",
    icono: "dos",
    libros: [
      "inteligencia-erotica", "nueva-mirada-infidelidad", "gottman-pareja",
      "tal-como-eres", "por-que-amamos", "cerebro-femenino", "amor-liquido",
      "arte-seduccion", "lenguajes-amor", "maneras-de-amar", "arte-de-amar",
      "marte-venus", "veinte-poemas", "come-reza-ama",
    ],
  },
  {
    id: "concentracion",
    nombre: "Concentración",
    sub: "Recuperar la atención que se ha ido",
    icono: "reloj",
    libros: [
      "trabajo-profundo", "flow", "semana-4-horas", "poder-ahora",
      "respira", "habitos-atomicos",
    ],
  },
  {
    id: "liderazgo",
    nombre: "Liderazgo y empresa",
    sub: "Montar algo y llevar a un equipo",
    icono: "bandera",
    libros: [
      "cero-a-uno", "lean-startup", "steve-jobs", "principe", "superpronosticadores",
      "antifragil", "influencia", "semana-4-horas", "siete-habitos", "por-que-fracasan",
    ],
  },
  {
    id: "sentido",
    nombre: "Sentido de la vida",
    sub: "Para qué, cuando ya no basta el cómo",
    icono: "brujula",
    libros: [
      "busca-sentido", "ikigai", "cuatro-acuerdos", "meditaciones", "enquiridion",
      "brevedad-vida", "sisifo", "poder-ahora", "monje-ferrari", "ser-mortal",
      "etica-amador", "zaratustra", "aliento-aire",
    ],
  },
  { id: "salud", nombre: "Salud y cuerpo", sub: "Dormir, comer y durar", icono: "manzana", categoria: "Salud" },
  { id: "historia", nombre: "Historia", sub: "Cómo llegamos hasta aquí", icono: "columna", categoria: "Historia" },
  { id: "ciencia", nombre: "Ciencia", sub: "De qué está hecho todo esto", icono: "atomo", categoria: "Ciencia" },
  { id: "filosofia", nombre: "Filosofía", sub: "Las preguntas que no se cierran", icono: "pensar", categoria: "Filosofía" },
  { id: "literatura", nombre: "Novela", sub: "Las historias que había que leer", icono: "libro", categoria: "Literatura" },
  { id: "arte", nombre: "Arte y creatividad", sub: "Mirar mejor y ponerse a hacer", icono: "paleta", categoria: "Arte" },
  { id: "deportes", nombre: "Deportes", sub: "Lo que cuesta llegar y lo que cuesta quedarse", icono: "copa", categoria: "Deportes" },
  /* Vidas es el cajón que pidió Pablo el 21 de agosto —«me gusta la sección de
     personalidades»— al mandar veinte fichas de Headway, donde ese cajón junta
     a Michelle Obama, la princesa Diana, Henry Ford y Cameron Diaz.

     Es el género más transversal de todos y por eso va escrito a mano y no por
     categoría: sus libros están repartidos en Arte, Ciencia, Historia, Salud,
     Economía y Deportes, y lo único que comparten es que se leen para saber
     cómo fue vivir siendo esa persona. Dan igual autobiografías y biografías
     ajenas: lo que decide es de quién trata, no quién lo firma. */
  {
    id: "vidas",
    nombre: "Vidas",
    sub: "Cómo fue por dentro ser esa persona",
    icono: "retrato",
    libros: [
      "steve-jobs", "leonardo", "einstein", "feynman", "diario-ana-frank",
      "malala", "mandela", "diarios-frida", "vida-dali", "van-gogh-cartas",
      "vidas-vasari", "si-esto-hombre", "tatuador", "aliento-aire",
      "open-agassi", "messi-ronaldo", "yo-soy-el-diego", "cruyff-14",
      "soy-zlatan", "rafa-mi-historia", "mamba-mentality", "once-anillos",
      "nunca-te-pares", "rey-del-mundo", "hablo-correr",
      "becoming", "malcolm-x", "will-smith", "elon-musk", "en-la-sombra",
      "madame-curie", "just-kids", "confesiones-chef", "frida-herrera",
      "vivir-para-contarla", "espia-traidor", "equipo-rivales",
      "ford-vida-obra", "entre-dos-reinos", "promesa-lapiz",
    ],
  },
];

/* Los identificadores que existen de verdad. Una lista de arriba con una
   errata pierde ese libro aquí y no rompe nada, que es lo que se quiere: la
   pantalla sigue funcionando y `comprobar()` avisa. */
const EXISTE = new Set(CATALOGO.map((f) => f.id));

export const LIBROS_POR_GENERO: Record<string, string[]> = Object.fromEntries(
  GENEROS.map((g) => [
    g.id,
    g.categoria
      ? CATALOGO.filter((f) => f.categoria === g.categoria).map((f) => f.id)
      : (g.libros ?? []).filter((id) => EXISTE.has(id)),
  ]),
);

/** Los géneros de un libro, para enseñarlos en su ficha. */
export const GENEROS_POR_LIBRO: Record<string, string[]> = (() => {
  const tabla: Record<string, string[]> = {};
  for (const [genero, libros] of Object.entries(LIBROS_POR_GENERO))
    for (const id of libros) (tabla[id] ??= []).push(genero);
  return tabla;
})();

/** Los que se han escrito a mano y no existen. Para `comprobar()`. */
export function generosRotos(): string[] {
  const rotos: string[] = [];
  for (const g of GENEROS)
    for (const id of g.libros ?? []) if (!EXISTE.has(id)) rotos.push(`${g.id} → ${id}`);
  return rotos;
}
