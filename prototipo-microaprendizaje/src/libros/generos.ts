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
    libros: [
      "habitos-atomicos", "siete-habitos", "poder-habitos", "sutil-arte", "mindset",
      "monje-ferrari", "cosas-buenas", "invencible", "deja-de-ser-tu", "el-elemento",
      "camino-artista", "guerra-arte", "milagro-manana", "club-5-manana", "busca-sentido",
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
    libros: [
      "inteligencia-erotica", "nueva-mirada-infidelidad", "gottman-pareja",
      "modelos-manson", "hombres-no-escuchan",
      "tal-como-eres", "por-que-amamos", "cerebro-femenino", "amor-liquido",
      "arte-seduccion", "lenguajes-amor", "maneras-de-amar", "arte-de-amar",
      "marte-venus", "veinte-poemas", "come-reza-ama",
    ],
  },
  { id: "deportes", nombre: "Deportes", sub: "Lo que cuesta llegar y lo que cuesta quedarse", categoria: "Deportes" },
  {
    id: "vidas",
    nombre: "Personalidades",
    sub: "Cómo fue por dentro ser esa persona",
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
  {
    id: "productividad",
    nombre: "Productividad",
    sub: "Hacer lo que ibas a hacer",
    /* Sale de juntar los dos cajones que se fueron —«Hábitos y rutinas» y
       «Concentración»— y añadirle los cuatro del catálogo que van justo de
       esto y no estaban en ninguno: la procrastinación, la disciplina, comprar
       tiempo y quitar de en medio lo que sobra. */
    libros: [
      "habitos-atomicos", "poder-habitos", "siete-habitos", "trabajo-profundo",
      "club-5-manana", "milagro-manana", "semana-4-horas", "flow",
      "procrastinacion-steel", "disciplina-es-destino", "recompra-tu-tiempo",
      "esencialismo",
    ],
  },
  {
    id: "felicidad",
    nombre: "Felicidad",
    sub: "Estar mejor, y saber por qué",
    /* Los de «Sentido de la vida», que se fue, más los que hablan de estar
       bien sin prometer que se arregla todo. Los estoicos entran aquí y no en
       Filosofía porque quien busca esto no busca a Marco Aurelio: busca no
       amargarse, y da la casualidad de que Marco Aurelio va de eso. */
    libros: [
      "ikigai", "cuatro-acuerdos", "meditaciones", "brevedad-vida",
      "monje-ferrari", "sentirse-bien", "vivir-plenitud", "busca-sentido",
      "poder-ahora", "respira", "sutil-arte", "alegria-perderse",
      "enquiridion", "sisifo",
    ],
  },
  { id: "historia", nombre: "Historia", sub: "Cómo llegamos hasta aquí", categoria: "Historia" },
  { id: "filosofia", nombre: "Filosofía", sub: "Las preguntas que no se cierran", categoria: "Filosofía" },
  { id: "ciencia", nombre: "Ciencia", sub: "De qué está hecho todo esto", categoria: "Ciencia" },
  {
    id: "dinero",
    nombre: "Dinero e inversiones",
    sub: "Entender el dinero antes de moverlo",
    libros: [
      "psicologia-dinero", "padre-rico", "piensa-hazte-rico", "mente-millonaria",
      "hombre-rico-babilonia", "inversor-inteligente", "bogle-sentido-comun",
      "millonario-al-lado", "paseo-aleatorio", "dinero-domina-juego", "cisne-negro",
      "antifragil", "freakonomics", "capital-siglo-xxi", "riqueza-naciones",
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
