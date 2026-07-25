/* ==========================================================================
   El catálogo.

   La lista de los libros que queremos tener, con su estado. NO es la
   biblioteca que se enseña: es el registro de trabajo, la única fuente de
   verdad sobre qué está escrito y qué falta.

   Se separa del contenido a propósito. Si el catálogo viviera dentro de los
   resúmenes, para saber qué queda habría que abrir cien ficheros; así se lee
   de un vistazo y `progreso()` da la cuenta exacta en cualquier momento.

   LAS CATEGORÍAS SON LAS OCHO DE LA INTRODUCCIÓN

   Y no unas parecidas. Al entrar preguntamos «¿qué temas te interesan?» y
   ofrecemos ocho; si luego la biblioteca se organizara por otras, la
   respuesta del usuario no serviría para nada y la recomendación sería
   mentira. `Categoria` es literalmente esa lista, así que si algún día se
   cambia una opción de la introducción, aquí deja de compilar. Es a
   propósito.

   Los libros están elegidos por dos criterios a la vez: que sean CONOCIDOS
   —de los que la gente ha oído hablar y ha comprado en masa— y que tengan
   algo que contar en cuatro minutos. Un libro célebre cuya idea cabe en una
   frase no entra.

   ESTADOS
     "escrito"   el resumen existe, está en libros/<id>.ts y se puede leer
     "pendiente" está elegido y aprobado, pero aún no redactado
   ========================================================================== */

/** Las mismas ocho que se ofrecen en la introducción. Ni una más. */
export type Categoria =
  | "Historia"
  | "Filosofía"
  | "Ciencia"
  | "Arte"
  | "Literatura"
  | "Psicología"
  | "Economía"
  | "Salud";

export type Estado = "escrito" | "pendiente";

export type Ficha = {
  id: string;
  titulo: string;
  autor: string;
  /** Año de publicación original. Sitúa al lector sin gastarle una línea. */
  ano: number;
  categoria: Categoria;
  estado: Estado;
};

export const CATALOGO: Ficha[] = [
  /* --- Historia --------------------------------------------------------- */
  { id: "sapiens", titulo: "Sapiens", autor: "Yuval Noah Harari", ano: 2011, categoria: "Historia", estado: "escrito" },
  { id: "homo-deus", titulo: "Homo Deus", autor: "Yuval Noah Harari", ano: 2015, categoria: "Historia", estado: "pendiente" },
  { id: "armas-germenes", titulo: "Armas, gérmenes y acero", autor: "Jared Diamond", ano: 1997, categoria: "Historia", estado: "pendiente" },
  { id: "infinito-junco", titulo: "El infinito en un junco", autor: "Irene Vallejo", ano: 2019, categoria: "Historia", estado: "pendiente" },
  { id: "mundo-ayer", titulo: "El mundo de ayer", autor: "Stefan Zweig", ano: 1942, categoria: "Historia", estado: "pendiente" },
  { id: "spqr", titulo: "SPQR", autor: "Mary Beard", ano: 2015, categoria: "Historia", estado: "pendiente" },
  { id: "diario-ana-frank", titulo: "Diario de Ana Frank", autor: "Ana Frank", ano: 1947, categoria: "Historia", estado: "pendiente" },
  { id: "gulag", titulo: "Archipiélago Gulag", autor: "Aleksandr Solzhenitsyn", ano: 1973, categoria: "Historia", estado: "pendiente" },
  { id: "canones-agosto", titulo: "Los cañones de agosto", autor: "Barbara Tuchman", ano: 1962, categoria: "Historia", estado: "pendiente" },
  { id: "totalitarismo", titulo: "Los orígenes del totalitarismo", autor: "Hannah Arendt", ano: 1951, categoria: "Historia", estado: "pendiente" },
  { id: "mandela", titulo: "El largo camino hacia la libertad", autor: "Nelson Mandela", ano: 1994, categoria: "Historia", estado: "pendiente" },
  { id: "1491", titulo: "1491", autor: "Charles C. Mann", ano: 2005, categoria: "Historia", estado: "pendiente" },
  { id: "banalidad-mal", titulo: "Eichmann en Jerusalén", autor: "Hannah Arendt", ano: 1963, categoria: "Historia", estado: "pendiente" },
  { id: "malala", titulo: "Yo soy Malala", autor: "Malala Yousafzai", ano: 2013, categoria: "Historia", estado: "pendiente" },

  /* --- Filosofía -------------------------------------------------------- */
  { id: "meditaciones", titulo: "Meditaciones", autor: "Marco Aurelio", ano: 180, categoria: "Filosofía", estado: "escrito" },
  { id: "busca-sentido", titulo: "El hombre en busca de sentido", autor: "Viktor Frankl", ano: 1946, categoria: "Filosofía", estado: "pendiente" },
  { id: "arte-guerra", titulo: "El arte de la guerra", autor: "Sun Tzu", ano: -500, categoria: "Filosofía", estado: "pendiente" },
  { id: "principe", titulo: "El príncipe", autor: "Nicolás Maquiavelo", ano: 1532, categoria: "Filosofía", estado: "pendiente" },
  { id: "zaratustra", titulo: "Así habló Zaratustra", autor: "Friedrich Nietzsche", ano: 1883, categoria: "Filosofía", estado: "pendiente" },
  { id: "brevedad-vida", titulo: "Sobre la brevedad de la vida", autor: "Séneca", ano: 49, categoria: "Filosofía", estado: "pendiente" },
  { id: "sisifo", titulo: "El mito de Sísifo", autor: "Albert Camus", ano: 1942, categoria: "Filosofía", estado: "pendiente" },
  { id: "republica", titulo: "La República", autor: "Platón", ano: -375, categoria: "Filosofía", estado: "pendiente" },
  { id: "enquiridion", titulo: "Enquiridión", autor: "Epicteto", ano: 125, categoria: "Filosofía", estado: "pendiente" },
  { id: "tao", titulo: "Tao Te Ching", autor: "Lao Tsé", ano: -400, categoria: "Filosofía", estado: "pendiente" },
  { id: "walden", titulo: "Walden", autor: "Henry David Thoreau", ano: 1854, categoria: "Filosofía", estado: "pendiente" },
  { id: "etica-amador", titulo: "Ética para Amador", autor: "Fernando Savater", ano: 1991, categoria: "Filosofía", estado: "pendiente" },
  { id: "segundo-sexo", titulo: "El segundo sexo", autor: "Simone de Beauvoir", ano: 1949, categoria: "Filosofía", estado: "pendiente" },
  { id: "vigilar-castigar", titulo: "Vigilar y castigar", autor: "Michel Foucault", ano: 1975, categoria: "Filosofía", estado: "pendiente" },

  /* --- Ciencia ---------------------------------------------------------- */
  { id: "breve-historia-tiempo", titulo: "Breve historia del tiempo", autor: "Stephen Hawking", ano: 1988, categoria: "Ciencia", estado: "pendiente" },
  { id: "cosmos", titulo: "Cosmos", autor: "Carl Sagan", ano: 1980, categoria: "Ciencia", estado: "pendiente" },
  { id: "gen-egoista", titulo: "El gen egoísta", autor: "Richard Dawkins", ano: 1976, categoria: "Ciencia", estado: "pendiente" },
  { id: "origen-especies", titulo: "El origen de las especies", autor: "Charles Darwin", ano: 1859, categoria: "Ciencia", estado: "pendiente" },
  { id: "casi-todo", titulo: "Una breve historia de casi todo", autor: "Bill Bryson", ano: 2003, categoria: "Ciencia", estado: "pendiente" },
  { id: "mundo-demonios", titulo: "El mundo y sus demonios", autor: "Carl Sagan", ano: 1995, categoria: "Ciencia", estado: "pendiente" },
  { id: "astrofisica-prisa", titulo: "Astrofísica para gente con prisa", autor: "Neil deGrasse Tyson", ano: 2017, categoria: "Ciencia", estado: "pendiente" },
  { id: "vida-arboles", titulo: "La vida secreta de los árboles", autor: "Peter Wohlleben", ano: 2015, categoria: "Ciencia", estado: "pendiente" },
  { id: "gen-historia", titulo: "El gen", autor: "Siddhartha Mukherjee", ano: 2016, categoria: "Ciencia", estado: "pendiente" },
  { id: "doble-helice", titulo: "La doble hélice", autor: "James Watson", ano: 1968, categoria: "Ciencia", estado: "pendiente" },
  { id: "einstein", titulo: "Einstein: su vida y su universo", autor: "Walter Isaacson", ano: 2007, categoria: "Ciencia", estado: "pendiente" },
  { id: "feynman", titulo: "¿Está usted de broma, Sr. Feynman?", autor: "Richard Feynman", ano: 1985, categoria: "Ciencia", estado: "pendiente" },
  { id: "revoluciones-cientificas", titulo: "La estructura de las revoluciones científicas", autor: "Thomas Kuhn", ano: 1962, categoria: "Ciencia", estado: "pendiente" },
  { id: "seis-grados", titulo: "Seis grados de separación", autor: "Duncan Watts", ano: 2003, categoria: "Ciencia", estado: "pendiente" },

  /* --- Arte ------------------------------------------------------------- */
  { id: "historia-arte", titulo: "La historia del arte", autor: "E. H. Gombrich", ano: 1950, categoria: "Arte", estado: "pendiente" },
  { id: "modos-ver", titulo: "Modos de ver", autor: "John Berger", ano: 1972, categoria: "Arte", estado: "pendiente" },
  { id: "acto-creativo", titulo: "El acto creativo", autor: "Rick Rubin", ano: 2023, categoria: "Arte", estado: "pendiente" },
  { id: "roba-artista", titulo: "Roba como un artista", autor: "Austin Kleon", ano: 2012, categoria: "Arte", estado: "pendiente" },
  { id: "camino-artista", titulo: "El camino del artista", autor: "Julia Cameron", ano: 1992, categoria: "Arte", estado: "pendiente" },
  { id: "cartas-joven-poeta", titulo: "Cartas a un joven poeta", autor: "Rainer Maria Rilke", ano: 1929, categoria: "Arte", estado: "pendiente" },
  { id: "leonardo", titulo: "Leonardo da Vinci", autor: "Walter Isaacson", ano: 2017, categoria: "Arte", estado: "pendiente" },
  { id: "arte-sin-hombres", titulo: "Historia del arte sin hombres", autor: "Katy Hessel", ano: 2022, categoria: "Arte", estado: "pendiente" },
  { id: "vida-dali", titulo: "La vida secreta de Salvador Dalí", autor: "Salvador Dalí", ano: 1942, categoria: "Arte", estado: "pendiente" },
  { id: "guerra-arte", titulo: "La guerra del arte", autor: "Steven Pressfield", ano: 2002, categoria: "Arte", estado: "pendiente" },
  { id: "diarios-frida", titulo: "El diario de Frida Kahlo", autor: "Frida Kahlo", ano: 1995, categoria: "Arte", estado: "pendiente" },
  { id: "van-gogh-cartas", titulo: "Cartas a Theo", autor: "Vincent van Gogh", ano: 1914, categoria: "Arte", estado: "pendiente" },

  /* --- Literatura ------------------------------------------------------- */
  { id: "1984", titulo: "1984", autor: "George Orwell", ano: 1949, categoria: "Literatura", estado: "escrito" },
  { id: "rebelion-granja", titulo: "Rebelión en la granja", autor: "George Orwell", ano: 1945, categoria: "Literatura", estado: "pendiente" },
  { id: "mundo-feliz", titulo: "Un mundo feliz", autor: "Aldous Huxley", ano: 1932, categoria: "Literatura", estado: "pendiente" },
  { id: "fahrenheit", titulo: "Fahrenheit 451", autor: "Ray Bradbury", ano: 1953, categoria: "Literatura", estado: "pendiente" },
  { id: "principito", titulo: "El principito", autor: "Antoine de Saint-Exupéry", ano: 1943, categoria: "Literatura", estado: "pendiente" },
  { id: "cien-anos", titulo: "Cien años de soledad", autor: "Gabriel García Márquez", ano: 1967, categoria: "Literatura", estado: "pendiente" },
  { id: "quijote", titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", ano: 1605, categoria: "Literatura", estado: "pendiente" },
  { id: "crimen-castigo", titulo: "Crimen y castigo", autor: "Fiódor Dostoievski", ano: 1866, categoria: "Literatura", estado: "pendiente" },
  { id: "gran-gatsby", titulo: "El gran Gatsby", autor: "F. Scott Fitzgerald", ano: 1925, categoria: "Literatura", estado: "pendiente" },
  { id: "matar-ruisenor", titulo: "Matar a un ruiseñor", autor: "Harper Lee", ano: 1960, categoria: "Literatura", estado: "pendiente" },
  { id: "extranjero", titulo: "El extranjero", autor: "Albert Camus", ano: 1942, categoria: "Literatura", estado: "pendiente" },
  { id: "metamorfosis", titulo: "La metamorfosis", autor: "Franz Kafka", ano: 1915, categoria: "Literatura", estado: "pendiente" },
  { id: "orgullo-prejuicio", titulo: "Orgullo y prejuicio", autor: "Jane Austen", ano: 1813, categoria: "Literatura", estado: "pendiente" },
  { id: "senor-moscas", titulo: "El señor de las moscas", autor: "William Golding", ano: 1954, categoria: "Literatura", estado: "pendiente" },
  { id: "frankenstein", titulo: "Frankenstein", autor: "Mary Shelley", ano: 1818, categoria: "Literatura", estado: "pendiente" },
  { id: "dorian-gray", titulo: "El retrato de Dorian Gray", autor: "Oscar Wilde", ano: 1890, categoria: "Literatura", estado: "pendiente" },
  { id: "dracula", titulo: "Drácula", autor: "Bram Stoker", ano: 1897, categoria: "Literatura", estado: "pendiente" },
  { id: "moby-dick", titulo: "Moby Dick", autor: "Herman Melville", ano: 1851, categoria: "Literatura", estado: "pendiente" },
  { id: "miserables", titulo: "Los miserables", autor: "Victor Hugo", ano: 1862, categoria: "Literatura", estado: "pendiente" },
  { id: "ana-karenina", titulo: "Ana Karénina", autor: "León Tolstói", ano: 1877, categoria: "Literatura", estado: "pendiente" },
  { id: "nombre-rosa", titulo: "El nombre de la rosa", autor: "Umberto Eco", ano: 1980, categoria: "Literatura", estado: "pendiente" },
  { id: "casa-espiritus", titulo: "La casa de los espíritus", autor: "Isabel Allende", ano: 1982, categoria: "Literatura", estado: "pendiente" },
  { id: "pedro-paramo", titulo: "Pedro Páramo", autor: "Juan Rulfo", ano: 1955, categoria: "Literatura", estado: "pendiente" },
  { id: "ficciones", titulo: "Ficciones", autor: "Jorge Luis Borges", ano: 1944, categoria: "Literatura", estado: "pendiente" },
  { id: "viejo-mar", titulo: "El viejo y el mar", autor: "Ernest Hemingway", ano: 1952, categoria: "Literatura", estado: "pendiente" },
  { id: "guardian-centeno", titulo: "El guardián entre el centeno", autor: "J. D. Salinger", ano: 1951, categoria: "Literatura", estado: "pendiente" },
  { id: "naranja-mecanica", titulo: "La naranja mecánica", autor: "Anthony Burgess", ano: 1962, categoria: "Literatura", estado: "pendiente" },
  { id: "rayuela", titulo: "Rayuela", autor: "Julio Cortázar", ano: 1963, categoria: "Literatura", estado: "pendiente" },

  /* --- Psicología ------------------------------------------------------- */
  { id: "pensar-rapido", titulo: "Pensar rápido, pensar despacio", autor: "Daniel Kahneman", ano: 2011, categoria: "Psicología", estado: "pendiente" },
  { id: "habitos-atomicos", titulo: "Hábitos atómicos", autor: "James Clear", ano: 2018, categoria: "Psicología", estado: "pendiente" },
  { id: "influencia", titulo: "Influencia", autor: "Robert Cialdini", ano: 1984, categoria: "Psicología", estado: "pendiente" },
  { id: "mindset", titulo: "Mindset", autor: "Carol Dweck", ano: 2006, categoria: "Psicología", estado: "pendiente" },
  { id: "inteligencia-emocional", titulo: "Inteligencia emocional", autor: "Daniel Goleman", ano: 1995, categoria: "Psicología", estado: "pendiente" },
  { id: "flow", titulo: "Fluir", autor: "Mihály Csíkszentmihályi", ano: 1990, categoria: "Psicología", estado: "pendiente" },
  { id: "siete-habitos", titulo: "Los 7 hábitos de la gente altamente efectiva", autor: "Stephen Covey", ano: 1989, categoria: "Psicología", estado: "pendiente" },
  { id: "amigos-influir", titulo: "Cómo ganar amigos e influir sobre las personas", autor: "Dale Carnegie", ano: 1936, categoria: "Psicología", estado: "pendiente" },
  { id: "deep-work", titulo: "Céntrate", autor: "Cal Newport", ano: 2016, categoria: "Psicología", estado: "pendiente" },
  { id: "poder-ahora", titulo: "El poder del ahora", autor: "Eckhart Tolle", ano: 1997, categoria: "Psicología", estado: "pendiente" },
  { id: "nudge", titulo: "Un pequeño empujón", autor: "Thaler y Sunstein", ano: 2008, categoria: "Psicología", estado: "pendiente" },
  { id: "educada", titulo: "Una educación", autor: "Tara Westover", ano: 2018, categoria: "Psicología", estado: "pendiente" },

  /* --- Economía --------------------------------------------------------- */
  { id: "psicologia-dinero", titulo: "La psicología del dinero", autor: "Morgan Housel", ano: 2020, categoria: "Economía", estado: "pendiente" },
  { id: "padre-rico", titulo: "Padre rico, padre pobre", autor: "Robert Kiyosaki", ano: 1997, categoria: "Economía", estado: "pendiente" },
  { id: "hombre-rico-babilonia", titulo: "El hombre más rico de Babilonia", autor: "George S. Clason", ano: 1926, categoria: "Economía", estado: "pendiente" },
  { id: "freakonomics", titulo: "Freakonomics", autor: "Levitt y Dubner", ano: 2005, categoria: "Economía", estado: "pendiente" },
  { id: "cisne-negro", titulo: "El cisne negro", autor: "Nassim Taleb", ano: 2007, categoria: "Economía", estado: "pendiente" },
  { id: "antifragil", titulo: "Antifrágil", autor: "Nassim Taleb", ano: 2012, categoria: "Economía", estado: "pendiente" },
  { id: "inversor-inteligente", titulo: "El inversor inteligente", autor: "Benjamin Graham", ano: 1949, categoria: "Economía", estado: "pendiente" },
  { id: "riqueza-naciones", titulo: "La riqueza de las naciones", autor: "Adam Smith", ano: 1776, categoria: "Economía", estado: "pendiente" },
  { id: "por-que-fracasan", titulo: "Por qué fracasan los países", autor: "Acemoglu y Robinson", ano: 2012, categoria: "Economía", estado: "pendiente" },
  { id: "cero-a-uno", titulo: "De cero a uno", autor: "Peter Thiel", ano: 2014, categoria: "Economía", estado: "pendiente" },
  { id: "lean-startup", titulo: "El método Lean Startup", autor: "Eric Ries", ano: 2011, categoria: "Economía", estado: "pendiente" },
  { id: "steve-jobs", titulo: "Steve Jobs", autor: "Walter Isaacson", ano: 2011, categoria: "Economía", estado: "pendiente" },
  { id: "factfulness", titulo: "Factfulness", autor: "Hans Rosling", ano: 2018, categoria: "Economía", estado: "pendiente" },
  { id: "capitalismo-vigilancia", titulo: "La era del capitalismo de la vigilancia", autor: "Shoshana Zuboff", ano: 2019, categoria: "Economía", estado: "pendiente" },

  /* --- Salud ------------------------------------------------------------ */
  { id: "por-que-dormimos", titulo: "Por qué dormimos", autor: "Matthew Walker", ano: 2017, categoria: "Salud", estado: "pendiente" },
  { id: "cuerpo-cuenta", titulo: "El cuerpo lleva la cuenta", autor: "Bessel van der Kolk", ano: 2014, categoria: "Salud", estado: "pendiente" },
  { id: "respira", titulo: "Respira", autor: "James Nestor", ano: 2020, categoria: "Salud", estado: "pendiente" },
  { id: "digestion-cuestion", titulo: "La digestión es la cuestión", autor: "Giulia Enders", ano: 2014, categoria: "Salud", estado: "pendiente" },
  { id: "outlive", titulo: "Outlive: el arte de vivir más y mejor", autor: "Peter Attia", ano: 2023, categoria: "Salud", estado: "pendiente" },
  { id: "nacidos-correr", titulo: "Nacidos para correr", autor: "Christopher McDougall", ano: 2009, categoria: "Salud", estado: "pendiente" },
  { id: "dilema-omnivoro", titulo: "El dilema del omnívoro", autor: "Michael Pollan", ano: 2006, categoria: "Salud", estado: "pendiente" },
  { id: "aliento-aire", titulo: "Cuando el aliento se vuelve aire", autor: "Paul Kalanithi", ano: 2016, categoria: "Salud", estado: "pendiente" },
  { id: "cerebro-que-cambia", titulo: "El cerebro que se cambia a sí mismo", autor: "Norman Doidge", ano: 2007, categoria: "Salud", estado: "pendiente" },
  { id: "mindfulness-kabat", titulo: "Vivir con plenitud las crisis", autor: "Jon Kabat-Zinn", ano: 1990, categoria: "Salud", estado: "pendiente" },
  { id: "sociedad-cansancio", titulo: "La sociedad del cansancio", autor: "Byung-Chul Han", ano: 2010, categoria: "Salud", estado: "pendiente" },
  { id: "zonas-azules", titulo: "El secreto de las zonas azules", autor: "Dan Buettner", ano: 2008, categoria: "Salud", estado: "pendiente" },
];

/* --------------------------------------------------------------------------
   Cuentas del catálogo. Sirven para saber por dónde vamos sin abrir nada.
   -------------------------------------------------------------------------- */

export function progreso() {
  const porCategoria = new Map<Categoria, { escritos: number; total: number }>();

  for (const f of CATALOGO) {
    const c = porCategoria.get(f.categoria) ?? { escritos: 0, total: 0 };
    c.total += 1;
    if (f.estado === "escrito") c.escritos += 1;
    porCategoria.set(f.categoria, c);
  }

  const escritos = CATALOGO.filter((f) => f.estado === "escrito").length;
  return {
    total: CATALOGO.length,
    escritos,
    pendientes: CATALOGO.length - escritos,
    porCategoria,
  };
}

/** Los que faltan, en orden de catálogo: la cola de trabajo. */
export const PENDIENTES = CATALOGO.filter((f) => f.estado === "pendiente");

/** Ids repetidos. Debe devolver siempre una lista vacía. */
export function idsDuplicados() {
  const vistos = new Set<string>();
  const repes: string[] = [];
  for (const f of CATALOGO) {
    if (vistos.has(f.id)) repes.push(f.id);
    vistos.add(f.id);
  }
  return repes;
}
