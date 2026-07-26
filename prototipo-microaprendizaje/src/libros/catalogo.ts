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
  { id: "homo-deus", titulo: "Homo Deus", autor: "Yuval Noah Harari", ano: 2015, categoria: "Historia", estado: "escrito" },
  { id: "armas-germenes", titulo: "Armas, gérmenes y acero", autor: "Jared Diamond", ano: 1997, categoria: "Historia", estado: "escrito" },
  { id: "infinito-junco", titulo: "El infinito en un junco", autor: "Irene Vallejo", ano: 2019, categoria: "Historia", estado: "escrito" },
  { id: "mundo-ayer", titulo: "El mundo de ayer", autor: "Stefan Zweig", ano: 1942, categoria: "Historia", estado: "escrito" },
  { id: "spqr", titulo: "SPQR", autor: "Mary Beard", ano: 2015, categoria: "Historia", estado: "escrito" },
  { id: "diario-ana-frank", titulo: "Diario de Ana Frank", autor: "Ana Frank", ano: 1947, categoria: "Historia", estado: "escrito" },
  { id: "pilares-tierra", titulo: "Los pilares de la Tierra", autor: "Ken Follett", ano: 1989, categoria: "Historia", estado: "escrito" },
  { id: "canones-agosto", titulo: "Los cañones de agosto", autor: "Barbara Tuchman", ano: 1962, categoria: "Historia", estado: "escrito" },
  { id: "historia-espana", titulo: "Una historia de España", autor: "Arturo Pérez-Reverte", ano: 2019, categoria: "Historia", estado: "escrito" },
  { id: "mandela", titulo: "El largo camino hacia la libertad", autor: "Nelson Mandela", ano: 1994, categoria: "Historia", estado: "escrito" },
  { id: "tatuador", titulo: "El tatuador de Auschwitz", autor: "Heather Morris", ano: 2018, categoria: "Historia", estado: "escrito" },
  { id: "chico-pijama", titulo: "El niño con el pijama de rayas", autor: "John Boyne", ano: 2006, categoria: "Historia", estado: "escrito" },
  { id: "malala", titulo: "Yo soy Malala", autor: "Malala Yousafzai", ano: 2013, categoria: "Historia", estado: "escrito" },

  /* --- Filosofía -------------------------------------------------------- */
  { id: "meditaciones", titulo: "Meditaciones", autor: "Marco Aurelio", ano: 180, categoria: "Filosofía", estado: "escrito" },
  { id: "busca-sentido", titulo: "El hombre en busca de sentido", autor: "Viktor Frankl", ano: 1946, categoria: "Filosofía", estado: "escrito" },
  { id: "arte-guerra", titulo: "El arte de la guerra", autor: "Sun Tzu", ano: -500, categoria: "Filosofía", estado: "escrito" },
  { id: "principe", titulo: "El príncipe", autor: "Nicolás Maquiavelo", ano: 1532, categoria: "Filosofía", estado: "escrito" },
  { id: "zaratustra", titulo: "Así habló Zaratustra", autor: "Friedrich Nietzsche", ano: 1883, categoria: "Filosofía", estado: "escrito" },
  { id: "brevedad-vida", titulo: "Sobre la brevedad de la vida", autor: "Séneca", ano: 49, categoria: "Filosofía", estado: "escrito" },
  { id: "sisifo", titulo: "El mito de Sísifo", autor: "Albert Camus", ano: 1942, categoria: "Filosofía", estado: "escrito" },
  { id: "cuatro-acuerdos", titulo: "Los cuatro acuerdos", autor: "Miguel Ruiz", ano: 1997, categoria: "Filosofía", estado: "escrito" },
  { id: "enquiridion", titulo: "Enquiridión", autor: "Epicteto", ano: 125, categoria: "Filosofía", estado: "escrito" },
  { id: "tao", titulo: "Tao Te Ching", autor: "Lao Tsé", ano: -400, categoria: "Filosofía", estado: "escrito" },
  { id: "sutil-arte", titulo: "El sutil arte de que casi todo te importe una mierda", autor: "Mark Manson", ano: 2016, categoria: "Filosofía", estado: "escrito" },
  { id: "etica-amador", titulo: "Ética para Amador", autor: "Fernando Savater", ano: 1991, categoria: "Filosofía", estado: "escrito" },
  { id: "ikigai", titulo: "Ikigai", autor: "García y Miralles", ano: 2016, categoria: "Filosofía", estado: "escrito" },
  { id: "monje-ferrari", titulo: "El monje que vendió su Ferrari", autor: "Robin Sharma", ano: 1997, categoria: "Filosofía", estado: "escrito" },

  /* --- Ciencia ---------------------------------------------------------- */
  { id: "breve-historia-tiempo", titulo: "Breve historia del tiempo", autor: "Stephen Hawking", ano: 1988, categoria: "Ciencia", estado: "escrito" },
  { id: "cosmos", titulo: "Cosmos", autor: "Carl Sagan", ano: 1980, categoria: "Ciencia", estado: "escrito" },
  { id: "gen-egoista", titulo: "El gen egoísta", autor: "Richard Dawkins", ano: 1976, categoria: "Ciencia", estado: "escrito" },
  { id: "universo-cascara", titulo: "El universo en una cáscara de nuez", autor: "Stephen Hawking", ano: 2001, categoria: "Ciencia", estado: "escrito" },
  { id: "casi-todo", titulo: "Una breve historia de casi todo", autor: "Bill Bryson", ano: 2003, categoria: "Ciencia", estado: "escrito" },
  { id: "mundo-demonios", titulo: "El mundo y sus demonios", autor: "Carl Sagan", ano: 1995, categoria: "Ciencia", estado: "escrito" },
  { id: "astrofisica-prisa", titulo: "Astrofísica para gente con prisa", autor: "Neil deGrasse Tyson", ano: 2017, categoria: "Ciencia", estado: "escrito" },
  { id: "vida-arboles", titulo: "La vida secreta de los árboles", autor: "Peter Wohlleben", ano: 2015, categoria: "Ciencia", estado: "escrito" },
  { id: "gen-historia", titulo: "El gen", autor: "Siddhartha Mukherjee", ano: 2016, categoria: "Ciencia", estado: "escrito" },
  { id: "mapa-mundos", titulo: "Los últimos días de los dinosaurios", autor: "Riley Black", ano: 2022, categoria: "Ciencia", estado: "escrito" },
  { id: "einstein", titulo: "Einstein: su vida y su universo", autor: "Walter Isaacson", ano: 2007, categoria: "Ciencia", estado: "escrito" },
  { id: "feynman", titulo: "¿Está usted de broma, Sr. Feynman?", autor: "Richard Feynman", ano: 1985, categoria: "Ciencia", estado: "escrito" },
  { id: "musica-primos", titulo: "La música de los números primos", autor: "Marcus du Sautoy", ano: 2003, categoria: "Ciencia", estado: "escrito" },
  { id: "universo-mano", titulo: "El universo en tu mano", autor: "Christophe Galfard", ano: 2015, categoria: "Ciencia", estado: "escrito" },

  /* --- Arte ------------------------------------------------------------- */
  { id: "historia-arte", titulo: "La historia del arte", autor: "E. H. Gombrich", ano: 1950, categoria: "Arte", estado: "escrito" },
  { id: "modos-ver", titulo: "Modos de ver", autor: "John Berger", ano: 1972, categoria: "Arte", estado: "escrito" },
  { id: "acto-creativo", titulo: "El acto creativo", autor: "Rick Rubin", ano: 2023, categoria: "Arte", estado: "escrito" },
  { id: "roba-artista", titulo: "Roba como un artista", autor: "Austin Kleon", ano: 2012, categoria: "Arte", estado: "escrito" },
  { id: "camino-artista", titulo: "El camino del artista", autor: "Julia Cameron", ano: 1992, categoria: "Arte", estado: "escrito" },
  { id: "cartas-joven-poeta", titulo: "Cartas a un joven poeta", autor: "Rainer Maria Rilke", ano: 1929, categoria: "Arte", estado: "escrito" },
  { id: "leonardo", titulo: "Leonardo da Vinci", autor: "Walter Isaacson", ano: 2017, categoria: "Arte", estado: "escrito" },
  { id: "arte-sin-hombres", titulo: "Historia del arte sin hombres", autor: "Katy Hessel", ano: 2022, categoria: "Arte", estado: "escrito" },
  { id: "vida-dali", titulo: "La vida secreta de Salvador Dalí", autor: "Salvador Dalí", ano: 1942, categoria: "Arte", estado: "escrito" },
  { id: "guerra-arte", titulo: "La guerra del arte", autor: "Steven Pressfield", ano: 2002, categoria: "Arte", estado: "escrito" },
  { id: "diarios-frida", titulo: "El diario de Frida Kahlo", autor: "Frida Kahlo", ano: 1995, categoria: "Arte", estado: "escrito" },
  { id: "van-gogh-cartas", titulo: "Cartas a Theo", autor: "Vincent van Gogh", ano: 1914, categoria: "Arte", estado: "escrito" },

  /* --- Literatura ------------------------------------------------------- */
  { id: "1984", titulo: "1984", autor: "George Orwell", ano: 1949, categoria: "Literatura", estado: "escrito" },
  { id: "rebelion-granja", titulo: "Rebelión en la granja", autor: "George Orwell", ano: 1945, categoria: "Literatura", estado: "escrito" },
  { id: "mundo-feliz", titulo: "Un mundo feliz", autor: "Aldous Huxley", ano: 1932, categoria: "Literatura", estado: "escrito" },
  { id: "fahrenheit", titulo: "Fahrenheit 451", autor: "Ray Bradbury", ano: 1953, categoria: "Literatura", estado: "escrito" },
  { id: "principito", titulo: "El principito", autor: "Antoine de Saint-Exupéry", ano: 1943, categoria: "Literatura", estado: "escrito" },
  { id: "cien-anos", titulo: "Cien años de soledad", autor: "Gabriel García Márquez", ano: 1967, categoria: "Literatura", estado: "escrito" },
  { id: "odisea", titulo: "La Odisea", autor: "Homero", ano: -750, categoria: "Literatura", estado: "escrito" },
  { id: "quijote", titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", ano: 1605, categoria: "Literatura", estado: "escrito" },
  { id: "crimen-castigo", titulo: "Crimen y castigo", autor: "Fiódor Dostoievski", ano: 1866, categoria: "Literatura", estado: "escrito" },
  { id: "gran-gatsby", titulo: "El gran Gatsby", autor: "F. Scott Fitzgerald", ano: 1925, categoria: "Literatura", estado: "escrito" },
  { id: "matar-ruisenor", titulo: "Matar a un ruiseñor", autor: "Harper Lee", ano: 1960, categoria: "Literatura", estado: "escrito" },
  { id: "extranjero", titulo: "El extranjero", autor: "Albert Camus", ano: 1942, categoria: "Literatura", estado: "escrito" },
  { id: "metamorfosis", titulo: "La metamorfosis", autor: "Franz Kafka", ano: 1915, categoria: "Literatura", estado: "escrito" },
  { id: "orgullo-prejuicio", titulo: "Orgullo y prejuicio", autor: "Jane Austen", ano: 1813, categoria: "Literatura", estado: "escrito" },
  { id: "senor-moscas", titulo: "El señor de las moscas", autor: "William Golding", ano: 1954, categoria: "Literatura", estado: "escrito" },
  { id: "frankenstein", titulo: "Frankenstein", autor: "Mary Shelley", ano: 1818, categoria: "Literatura", estado: "escrito" },
  { id: "dorian-gray", titulo: "El retrato de Dorian Gray", autor: "Oscar Wilde", ano: 1890, categoria: "Literatura", estado: "escrito" },
  { id: "dracula", titulo: "Drácula", autor: "Bram Stoker", ano: 1897, categoria: "Literatura", estado: "escrito" },
  { id: "alquimista", titulo: "El alquimista", autor: "Paulo Coelho", ano: 1988, categoria: "Literatura", estado: "escrito" },
  { id: "mujercitas", titulo: "Mujercitas", autor: "Louisa May Alcott", ano: 1868, categoria: "Literatura", estado: "pendiente" },
  { id: "sombra-viento", titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón", ano: 2001, categoria: "Literatura", estado: "escrito" },
  { id: "nombre-rosa", titulo: "El nombre de la rosa", autor: "Umberto Eco", ano: 1980, categoria: "Literatura", estado: "escrito" },
  { id: "casa-espiritus", titulo: "La casa de los espíritus", autor: "Isabel Allende", ano: 1982, categoria: "Literatura", estado: "pendiente" },
  { id: "pedro-paramo", titulo: "Pedro Páramo", autor: "Juan Rulfo", ano: 1955, categoria: "Literatura", estado: "escrito" },
  { id: "ficciones", titulo: "Ficciones", autor: "Jorge Luis Borges", ano: 1944, categoria: "Literatura", estado: "pendiente" },
  { id: "viejo-mar", titulo: "El viejo y el mar", autor: "Ernest Hemingway", ano: 1952, categoria: "Literatura", estado: "escrito" },
  { id: "guardian-centeno", titulo: "El guardián entre el centeno", autor: "J. D. Salinger", ano: 1951, categoria: "Literatura", estado: "escrito" },
  { id: "cuentos-poe", titulo: "Cuentos de Edgar Allan Poe", autor: "Edgar Allan Poe", ano: 1845, categoria: "Literatura", estado: "pendiente" },
  { id: "elegancia-erizo", titulo: "La elegancia del erizo", autor: "Muriel Barbery", ano: 2006, categoria: "Literatura", estado: "pendiente" },
  { id: "hobbit", titulo: "El hobbit", autor: "J. R. R. Tolkien", ano: 1937, categoria: "Literatura", estado: "escrito" },

  /* --- Psicología ------------------------------------------------------- */
  { id: "pensar-rapido", titulo: "Pensar rápido, pensar despacio", autor: "Daniel Kahneman", ano: 2011, categoria: "Psicología", estado: "escrito" },
  { id: "habitos-atomicos", titulo: "Hábitos atómicos", autor: "James Clear", ano: 2018, categoria: "Psicología", estado: "escrito" },
  { id: "influencia", titulo: "Influencia", autor: "Robert Cialdini", ano: 1984, categoria: "Psicología", estado: "escrito" },
  { id: "mindset", titulo: "Mindset", autor: "Carol Dweck", ano: 2006, categoria: "Psicología", estado: "escrito" },
  { id: "inteligencia-emocional", titulo: "Inteligencia emocional", autor: "Daniel Goleman", ano: 1995, categoria: "Psicología", estado: "escrito" },
  { id: "flow", titulo: "Fluir", autor: "Mihály Csíkszentmihályi", ano: 1990, categoria: "Psicología", estado: "escrito" },
  { id: "siete-habitos", titulo: "Los 7 hábitos de la gente altamente efectiva", autor: "Stephen Covey", ano: 1989, categoria: "Psicología", estado: "escrito" },
  { id: "amigos-influir", titulo: "Cómo ganar amigos e influir sobre las personas", autor: "Dale Carnegie", ano: 1936, categoria: "Psicología", estado: "escrito" },
  { id: "deep-work", titulo: "Céntrate", autor: "Cal Newport", ano: 2016, categoria: "Psicología", estado: "escrito" },
  { id: "poder-ahora", titulo: "El poder del ahora", autor: "Eckhart Tolle", ano: 1997, categoria: "Psicología", estado: "escrito" },
  { id: "nudge", titulo: "Un pequeño empujón", autor: "Thaler y Sunstein", ano: 2008, categoria: "Psicología", estado: "escrito" },
  { id: "educada", titulo: "Una educación", autor: "Tara Westover", ano: 2018, categoria: "Psicología", estado: "escrito" },

  /* --- Economía --------------------------------------------------------- */
  { id: "psicologia-dinero", titulo: "La psicología del dinero", autor: "Morgan Housel", ano: 2020, categoria: "Economía", estado: "escrito" },
  { id: "padre-rico", titulo: "Padre rico, padre pobre", autor: "Robert Kiyosaki", ano: 1997, categoria: "Economía", estado: "escrito" },
  { id: "hombre-rico-babilonia", titulo: "El hombre más rico de Babilonia", autor: "George S. Clason", ano: 1926, categoria: "Economía", estado: "escrito" },
  { id: "freakonomics", titulo: "Freakonomics", autor: "Levitt y Dubner", ano: 2005, categoria: "Economía", estado: "escrito" },
  { id: "cisne-negro", titulo: "El cisne negro", autor: "Nassim Taleb", ano: 2007, categoria: "Economía", estado: "escrito" },
  { id: "antifragil", titulo: "Antifrágil", autor: "Nassim Taleb", ano: 2012, categoria: "Economía", estado: "escrito" },
  { id: "inversor-inteligente", titulo: "El inversor inteligente", autor: "Benjamin Graham", ano: 1949, categoria: "Economía", estado: "escrito" },
  { id: "piensa-hazte-rico", titulo: "Piensa y hazte rico", autor: "Napoleon Hill", ano: 1937, categoria: "Economía", estado: "escrito" },
  { id: "mente-millonaria", titulo: "Los secretos de la mente millonaria", autor: "T. Harv Eker", ano: 2005, categoria: "Economía", estado: "pendiente" },
  { id: "cero-a-uno", titulo: "De cero a uno", autor: "Peter Thiel", ano: 2014, categoria: "Economía", estado: "escrito" },
  { id: "lean-startup", titulo: "El método Lean Startup", autor: "Eric Ries", ano: 2011, categoria: "Economía", estado: "escrito" },
  { id: "steve-jobs", titulo: "Steve Jobs", autor: "Walter Isaacson", ano: 2011, categoria: "Economía", estado: "escrito" },
  { id: "factfulness", titulo: "Factfulness", autor: "Hans Rosling", ano: 2018, categoria: "Economía", estado: "escrito" },
  { id: "semana-4-horas", titulo: "La semana laboral de 4 horas", autor: "Tim Ferriss", ano: 2007, categoria: "Economía", estado: "escrito" },

  /* --- Salud ------------------------------------------------------------ */
  { id: "por-que-dormimos", titulo: "Por qué dormimos", autor: "Matthew Walker", ano: 2017, categoria: "Salud", estado: "escrito" },
  { id: "cuerpo-cuenta", titulo: "El cuerpo lleva la cuenta", autor: "Bessel van der Kolk", ano: 2014, categoria: "Salud", estado: "escrito" },
  { id: "respira", titulo: "Respira", autor: "James Nestor", ano: 2020, categoria: "Salud", estado: "escrito" },
  { id: "digestion-cuestion", titulo: "La digestión es la cuestión", autor: "Giulia Enders", ano: 2014, categoria: "Salud", estado: "escrito" },
  { id: "outlive", titulo: "Outlive: el arte de vivir más y mejor", autor: "Peter Attia", ano: 2023, categoria: "Salud", estado: "escrito" },
  { id: "nacidos-correr", titulo: "Nacidos para correr", autor: "Christopher McDougall", ano: 2009, categoria: "Salud", estado: "escrito" },
  { id: "dilema-omnivoro", titulo: "El dilema del omnívoro", autor: "Michael Pollan", ano: 2006, categoria: "Salud", estado: "escrito" },
  { id: "aliento-aire", titulo: "Cuando el aliento se vuelve aire", autor: "Paul Kalanithi", ano: 2016, categoria: "Salud", estado: "escrito" },
  { id: "milagro-manana", titulo: "Mañanas milagrosas", autor: "Hal Elrod", ano: 2012, categoria: "Salud", estado: "escrito" },
  { id: "come-comida-real", titulo: "Come comida real", autor: "Carlos Ríos", ano: 2019, categoria: "Salud", estado: "escrito" },
  { id: "invencible", titulo: "Invicto", autor: "Marcos Vázquez", ano: 2021, categoria: "Salud", estado: "escrito" },
  { id: "zonas-azules", titulo: "El secreto de las zonas azules", autor: "Dan Buettner", ano: 2008, categoria: "Salud", estado: "escrito" },
];

/* --------------------------------------------------------------------------
   Cuentas del catálogo. Sirven para saber por dónde vamos sin abrir nada.
   -------------------------------------------------------------------------- */

export function progreso() {
  /* Record y no Map: esto acaba pintándose en pantalla, y un Map obliga a
     convertirlo en cada sitio donde se consuma. */
  const porCategoria = {} as Record<Categoria, { escritos: number; total: number }>;

  for (const f of CATALOGO) {
    const c = (porCategoria[f.categoria] ??= { escritos: 0, total: 0 });
    c.total += 1;
    if (f.estado === "escrito") c.escritos += 1;
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
