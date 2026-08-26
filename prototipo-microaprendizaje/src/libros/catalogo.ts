/* ==========================================================================
   El catálogo.

   La lista de los libros que queremos tener, con su estado. NO es la
   biblioteca que se enseña: es el registro de trabajo, la única fuente de
   verdad sobre qué está escrito y qué falta.

   Se separa del contenido a propósito. Si el catálogo viviera dentro de los
   resúmenes, para saber qué queda habría que abrir cien ficheros; así se lee
   de un vistazo y `progreso()` da la cuenta exacta en cualquier momento.

   LAS CATEGORÍAS SON LAS NUEVE DE LA INTRODUCCIÓN

   Y no unas parecidas. Al entrar preguntamos «¿qué temas te interesan?» y
   ofrecemos nueve; si luego la biblioteca se organizara por otras, la
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

/** Las mismas nueve que se ofrecen en la introducción. Ni una más. */
export type Categoria =
  | "Historia"
  | "Filosofía"
  | "Ciencia"
  | "Arte"
  | "Literatura"
  | "Psicología"
  | "Economía"
  | "Salud"
  | "Deportes";

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
  { id: "si-esto-hombre", titulo: "Si esto es un hombre", autor: "Primo Levi", ano: 1947, categoria: "Historia", estado: "escrito" },
  { id: "origenes-totalitarismo", titulo: "Los orígenes del totalitarismo", autor: "Hannah Arendt", ano: 1951, categoria: "Historia", estado: "escrito" },
  { id: "eichmann-jerusalen", titulo: "Eichmann en Jerusalén", autor: "Hannah Arendt", ano: 1963, categoria: "Historia", estado: "escrito" },
  { id: "homenaje-cataluna", titulo: "Homenaje a Cataluña", autor: "George Orwell", ano: 1938, categoria: "Historia", estado: "escrito" },
  { id: "guerra-civil-thomas", titulo: "La guerra civil española", autor: "Hugh Thomas", ano: 1961, categoria: "Historia", estado: "escrito" },
  { id: "auschwitz-rees", titulo: "Auschwitz: los nazis y la solución final", autor: "Laurence Rees", ano: 2005, categoria: "Historia", estado: "escrito" },
  { id: "postguerra", titulo: "Postguerra", autor: "Tony Judt", ano: 2005, categoria: "Historia", estado: "escrito" },
  { id: "homo-sovieticus", titulo: "El fin del Homo Sovieticus", autor: "Svetlana Aleksiévich", ano: 2013, categoria: "Historia", estado: "escrito" },
  { id: "sobre-tirania", titulo: "Sobre la tiranía", autor: "Timothy Snyder", ano: 2017, categoria: "Historia", estado: "escrito" },
  { id: "imperiofobia", titulo: "Imperiofobia y leyenda negra", autor: "María Elvira Roca Barea", ano: 2016, categoria: "Historia", estado: "escrito" },

  { id: "becoming", titulo: "Mi historia", autor: "Michelle Obama", ano: 2018, categoria: "Historia", estado: "escrito" },
  { id: "malcolm-x", titulo: "Autobiografía de Malcolm X", autor: "Malcolm X y Alex Haley", ano: 1965, categoria: "Historia", estado: "escrito" },
  { id: "espia-traidor", titulo: "Espía y traidor", autor: "Ben Macintyre", ano: 2018, categoria: "Historia", estado: "pendiente" },
  { id: "equipo-rivales", titulo: "Equipo de rivales", autor: "Doris Kearns Goodwin", ano: 2005, categoria: "Historia", estado: "pendiente" },
  { id: "en-la-sombra", titulo: "En la sombra", autor: "Príncipe Harry", ano: 2023, categoria: "Historia", estado: "pendiente" },
  { id: "21-lecciones", titulo: "21 lecciones para el siglo XXI", autor: "Yuval Noah Harari", ano: 2018, categoria: "Historia", estado: "escrito" },
  { id: "nexus", titulo: "Nexus", autor: "Yuval Noah Harari", ano: 2024, categoria: "Historia", estado: "pendiente" },
  { id: "verano-1913", titulo: "1913: el verano del siglo", autor: "Florian Illies", ano: 2012, categoria: "Historia", estado: "pendiente" },
  { id: "hambruna-mao", titulo: "La gran hambruna en la China de Mao", autor: "Frank Dikötter", ano: 2010, categoria: "Historia", estado: "pendiente" },
  { id: "primera-guerra-keegan", titulo: "La primera guerra mundial", autor: "John Keegan", ano: 1998, categoria: "Historia", estado: "pendiente" },
  { id: "historia-mundo-objetos", titulo: "La historia del mundo en cien objetos", autor: "Neil MacGregor", ano: 2010, categoria: "Historia", estado: "pendiente" },
  { id: "verano-1927", titulo: "El verano de 1927", autor: "Bill Bryson", ano: 2013, categoria: "Historia", estado: "pendiente" },
  { id: "gulag", titulo: "Gulag", autor: "Anne Applebaum", ano: 2003, categoria: "Historia", estado: "escrito" },
  { id: "prision-americana", titulo: "Prisión americana", autor: "Shane Bauer", ano: 2018, categoria: "Historia", estado: "pendiente" },
  { id: "como-llegamos-aqui", titulo: "Cómo llegamos aquí", autor: "Steven Johnson", ano: 2014, categoria: "Historia", estado: "pendiente" },
  { id: "ucrania-relatos", titulo: "Ucrania en varios relatos", autor: "Volodímir Yermolenko", ano: 2019, categoria: "Historia", estado: "pendiente" },
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
  { id: "mundo-sofia", titulo: "El mundo de Sofía", autor: "Jostein Gaarder", ano: 1991, categoria: "Filosofía", estado: "escrito" },
  { id: "republica-platon", titulo: "La República", autor: "Platón", ano: -375, categoria: "Filosofía", estado: "escrito" },
  { id: "etica-nicomaco", titulo: "Ética a Nicómaco", autor: "Aristóteles", ano: -340, categoria: "Filosofía", estado: "escrito" },
  { id: "apologia-socrates", titulo: "Apología de Sócrates", autor: "Platón", ano: -399, categoria: "Filosofía", estado: "escrito" },
  { id: "discurso-metodo", titulo: "Discurso del método", autor: "René Descartes", ano: 1637, categoria: "Filosofía", estado: "escrito" },
  { id: "contrato-social", titulo: "El contrato social", autor: "Jean-Jacques Rousseau", ano: 1762, categoria: "Filosofía", estado: "escrito" },
  { id: "mas-alla-bien-mal", titulo: "Más allá del bien y del mal", autor: "Friedrich Nietzsche", ano: 1886, categoria: "Filosofía", estado: "escrito" },
  { id: "existencialismo-humanismo", titulo: "El existencialismo es un humanismo", autor: "Jean-Paul Sartre", ano: 1946, categoria: "Filosofía", estado: "escrito" },
  { id: "segundo-sexo", titulo: "El segundo sexo", autor: "Simone de Beauvoir", ano: 1949, categoria: "Filosofía", estado: "escrito" },
  { id: "ensayos-montaigne", titulo: "Ensayos", autor: "Michel de Montaigne", ano: 1580, categoria: "Filosofía", estado: "escrito" },

  { id: "amor-liquido", titulo: "Amor líquido", autor: "Zygmunt Bauman", ano: 2003, categoria: "Filosofía", estado: "escrito" },
  { id: "caballero-armadura", titulo: "El caballero de la armadura oxidada", autor: "Robert Fisher", ano: 1989, categoria: "Filosofía", estado: "escrito" },
  { id: "mundo-como-voluntad", titulo: "El mundo como voluntad y representación", autor: "Arthur Schopenhauer", ano: 1818, categoria: "Filosofía", estado: "pendiente" },
  { id: "miedo-libertad", titulo: "El miedo a la libertad", autor: "Erich Fromm", ano: 1941, categoria: "Filosofía", estado: "escrito" },
  { id: "tener-o-ser", titulo: "Tener o ser", autor: "Erich Fromm", ano: 1976, categoria: "Filosofía", estado: "pendiente" },
  { id: "banquete", titulo: "El banquete", autor: "Platón", ano: -385, categoria: "Filosofía", estado: "escrito" },
  { id: "sobre-la-libertad", titulo: "Sobre la libertad", autor: "John Stuart Mill", ano: 1859, categoria: "Filosofía", estado: "pendiente" },
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
  { id: "ultimos-dinosaurios", titulo: "Los últimos días de los dinosaurios", autor: "Riley Black", ano: 2022, categoria: "Ciencia", estado: "escrito" },
  { id: "einstein", titulo: "Einstein: su vida y su universo", autor: "Walter Isaacson", ano: 2007, categoria: "Ciencia", estado: "escrito" },
  { id: "feynman", titulo: "¿Está usted de broma, Sr. Feynman?", autor: "Richard Feynman", ano: 1985, categoria: "Ciencia", estado: "escrito" },
  { id: "musica-primos", titulo: "La música de los números primos", autor: "Marcus du Sautoy", ano: 2003, categoria: "Ciencia", estado: "escrito" },
  { id: "universo-mano", titulo: "El universo en tu mano", autor: "Christophe Galfard", ano: 2015, categoria: "Ciencia", estado: "escrito" },
  { id: "origen-especies", titulo: "El origen de las especies", autor: "Charles Darwin", ano: 1859, categoria: "Ciencia", estado: "escrito" },
  { id: "doble-helice", titulo: "La doble hélice", autor: "James D. Watson", ano: 1968, categoria: "Ciencia", estado: "escrito" },
  { id: "revoluciones-cientificas", titulo: "La estructura de las revoluciones científicas", autor: "Thomas S. Kuhn", ano: 1962, categoria: "Ciencia", estado: "escrito" },
  { id: "siete-lecciones-fisica", titulo: "Siete breves lecciones de física", autor: "Carlo Rovelli", ano: 2014, categoria: "Ciencia", estado: "escrito" },
  { id: "orden-del-tiempo", titulo: "El orden del tiempo", autor: "Carlo Rovelli", ano: 2017, categoria: "Ciencia", estado: "escrito" },
  { id: "henrietta-lacks", titulo: "La vida inmortal de Henrietta Lacks", autor: "Rebecca Skloot", ano: 2010, categoria: "Ciencia", estado: "escrito" },
  { id: "emperador-males", titulo: "El emperador de todos los males", autor: "Siddhartha Mukherjee", ano: 2010, categoria: "Ciencia", estado: "escrito" },
  { id: "pulgar-panda", titulo: "El pulgar del panda", autor: "Stephen Jay Gould", ano: 1980, categoria: "Ciencia", estado: "escrito" },
  { id: "cuchara-menguante", titulo: "La cuchara menguante", autor: "Sam Kean", ano: 2010, categoria: "Ciencia", estado: "escrito" },
  { id: "sexta-extincion", titulo: "La sexta extinción", autor: "Elizabeth Kolbert", ano: 2014, categoria: "Ciencia", estado: "escrito" },

  { id: "madame-curie", titulo: "Madame Curie", autor: "Ève Curie", ano: 1937, categoria: "Ciencia", estado: "escrito" },
  { id: "por-que-amamos", titulo: "Por qué amamos", autor: "Helen Fisher", ano: 2004, categoria: "Ciencia", estado: "escrito" },
  { id: "cerebro-femenino", titulo: "El cerebro femenino", autor: "Louann Brizendine", ano: 2006, categoria: "Ciencia", estado: "pendiente" },
  { id: "cerebro-adolescente", titulo: "El cerebro adolescente", autor: "Frances Jensen", ano: 2015, categoria: "Ciencia", estado: "pendiente" },
  { id: "incognito", titulo: "Incógnito", autor: "David Eagleman", ano: 2011, categoria: "Ciencia", estado: "escrito" },
  { id: "el-cerebro", titulo: "El cerebro", autor: "David Eagleman", ano: 2015, categoria: "Ciencia", estado: "escrito" },
  { id: "alicia-cuantos", titulo: "Alicia en el país de los cuantos", autor: "Robert Gilmore", ano: 1995, categoria: "Ciencia", estado: "pendiente" },
  { id: "caos-gleick", titulo: "Caos", autor: "James Gleick", ano: 1987, categoria: "Ciencia", estado: "pendiente" },
  { id: "informacion-gleick", titulo: "La información", autor: "James Gleick", ano: 2011, categoria: "Ciencia", estado: "pendiente" },
  { id: "vida-3-0", titulo: "Vida 3.0", autor: "Max Tegmark", ano: 2017, categoria: "Ciencia", estado: "pendiente" },
  { id: "primavera-silenciosa", titulo: "Primavera silenciosa", autor: "Rachel Carson", ano: 1962, categoria: "Ciencia", estado: "escrito" },
  { id: "futuro-nuestra-mente", titulo: "El futuro de nuestra mente", autor: "Michio Kaku", ano: 2014, categoria: "Ciencia", estado: "pendiente" },
  { id: "tecnologias-radicales", titulo: "Tecnologías radicales", autor: "Adam Greenfield", ano: 2017, categoria: "Ciencia", estado: "pendiente" },
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
  { id: "sobre-fotografia", titulo: "Sobre la fotografía", autor: "Susan Sontag", ano: 1977, categoria: "Arte", estado: "escrito" },
  { id: "mientras-escribo", titulo: "Mientras escribo", autor: "Stephen King", ano: 2000, categoria: "Arte", estado: "escrito" },
  { id: "magia-crear", titulo: "La magia de crear", autor: "Elizabeth Gilbert", ano: 2015, categoria: "Arte", estado: "escrito" },
  { id: "pajaro-a-pajaro", titulo: "Pájaro a pájaro", autor: "Anne Lamott", ano: 1994, categoria: "Arte", estado: "escrito" },
  { id: "vidas-vasari", titulo: "Las vidas de los más excelentes pintores, escultores y arquitectos", autor: "Giorgio Vasari", ano: 1550, categoria: "Arte", estado: "escrito" },
  { id: "espiritual-arte", titulo: "De lo espiritual en el arte", autor: "Vasili Kandinsky", ano: 1911, categoria: "Arte", estado: "escrito" },
  { id: "reproductibilidad", titulo: "La obra de arte en la época de su reproductibilidad técnica", autor: "Walter Benjamin", ano: 1936, categoria: "Arte", estado: "escrito" },
  { id: "heroe-mil-caras", titulo: "El héroe de las mil caras", autor: "Joseph Campbell", ano: 1949, categoria: "Arte", estado: "escrito" },
  { id: "el-elemento", titulo: "El elemento", autor: "Ken Robinson", ano: 2009, categoria: "Arte", estado: "escrito" },

  { id: "will-smith", titulo: "Will", autor: "Will Smith y Mark Manson", ano: 2021, categoria: "Arte", estado: "escrito" },
  { id: "just-kids", titulo: "Éramos unos niños", autor: "Patti Smith", ano: 2010, categoria: "Arte", estado: "pendiente" },
  { id: "confesiones-chef", titulo: "Confesiones de un chef", autor: "Anthony Bourdain", ano: 2000, categoria: "Arte", estado: "escrito" },
  { id: "frida-herrera", titulo: "Frida", autor: "Hayden Herrera", ano: 1983, categoria: "Arte", estado: "escrito" },
  { id: "bauhaus", titulo: "La Bauhaus", autor: "Magdalena Droste", ano: 1990, categoria: "Arte", estado: "pendiente" },
  { id: "mujeres-arte", titulo: "Mujeres artistas", autor: "Flavia Frigeri", ano: 2019, categoria: "Arte", estado: "pendiente" },
  { id: "teoria-color", titulo: "Teoría del color", autor: "Johannes Itten", ano: 1961, categoria: "Arte", estado: "pendiente" },
  { id: "el-guion", titulo: "El guion", autor: "Robert McKee", ano: 1997, categoria: "Arte", estado: "pendiente" },
  { id: "viaje-del-escritor", titulo: "El viaje del escritor", autor: "Christopher Vogler", ano: 1992, categoria: "Arte", estado: "pendiente" },
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
  { id: "mujercitas", titulo: "Mujercitas", autor: "Louisa May Alcott", ano: 1868, categoria: "Literatura", estado: "escrito" },
  { id: "sombra-viento", titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón", ano: 2001, categoria: "Literatura", estado: "escrito" },
  { id: "nombre-rosa", titulo: "El nombre de la rosa", autor: "Umberto Eco", ano: 1980, categoria: "Literatura", estado: "escrito" },
  { id: "casa-espiritus", titulo: "La casa de los espíritus", autor: "Isabel Allende", ano: 1982, categoria: "Literatura", estado: "escrito" },
  { id: "pedro-paramo", titulo: "Pedro Páramo", autor: "Juan Rulfo", ano: 1955, categoria: "Literatura", estado: "escrito" },
  { id: "ficciones", titulo: "Ficciones", autor: "Jorge Luis Borges", ano: 1944, categoria: "Literatura", estado: "escrito" },
  { id: "viejo-mar", titulo: "El viejo y el mar", autor: "Ernest Hemingway", ano: 1952, categoria: "Literatura", estado: "escrito" },
  { id: "guardian-centeno", titulo: "El guardián entre el centeno", autor: "J. D. Salinger", ano: 1951, categoria: "Literatura", estado: "escrito" },
  { id: "cuentos-poe", titulo: "Cuentos de Edgar Allan Poe", autor: "Edgar Allan Poe", ano: 1845, categoria: "Literatura", estado: "escrito" },
  { id: "elegancia-erizo", titulo: "La elegancia del erizo", autor: "Muriel Barbery", ano: 2006, categoria: "Literatura", estado: "escrito" },
  { id: "hobbit", titulo: "El hobbit", autor: "J. R. R. Tolkien", ano: 1937, categoria: "Literatura", estado: "escrito" },
  { id: "madame-bovary", titulo: "Madame Bovary", autor: "Gustave Flaubert", ano: 1856, categoria: "Literatura", estado: "escrito" },
  { id: "ana-karenina", titulo: "Ana Karenina", autor: "León Tolstói", ano: 1877, categoria: "Literatura", estado: "escrito" },
  { id: "guerra-y-paz", titulo: "Guerra y paz", autor: "León Tolstói", ano: 1869, categoria: "Literatura", estado: "escrito" },
  { id: "los-miserables", titulo: "Los miserables", autor: "Victor Hugo", ano: 1862, categoria: "Literatura", estado: "escrito" },
  { id: "moby-dick", titulo: "Moby Dick", autor: "Herman Melville", ano: 1851, categoria: "Literatura", estado: "escrito" },
  { id: "montecristo", titulo: "El conde de Montecristo", autor: "Alejandro Dumas", ano: 1844, categoria: "Literatura", estado: "escrito" },
  { id: "rayuela", titulo: "Rayuela", autor: "Julio Cortázar", ano: 1963, categoria: "Literatura", estado: "escrito" },
  { id: "bernarda-alba", titulo: "La casa de Bernarda Alba", autor: "Federico García Lorca", ano: 1936, categoria: "Literatura", estado: "escrito" },
  { id: "el-tunel", titulo: "El túnel", autor: "Ernesto Sabato", ano: 1948, categoria: "Literatura", estado: "escrito" },
  { id: "renglones-torcidos", titulo: "Los renglones torcidos de Dios", autor: "Torcuato Luca de Tena", ano: 1979, categoria: "Literatura", estado: "escrito" },

  { id: "harry-potter-1", titulo: "Harry Potter y la piedra filosofal", autor: "J. K. Rowling", ano: 1997, categoria: "Literatura", estado: "escrito" },
  { id: "senor-anillos", titulo: "El señor de los anillos", autor: "J. R. R. Tolkien", ano: 1954, categoria: "Literatura", estado: "escrito" },
  { id: "codigo-da-vinci", titulo: "El código Da Vinci", autor: "Dan Brown", ano: 2003, categoria: "Literatura", estado: "escrito" },
  { id: "juegos-hambre", titulo: "Los juegos del hambre", autor: "Suzanne Collins", ano: 2008, categoria: "Literatura", estado: "escrito" },
  { id: "cumbres-borrascosas", titulo: "Cumbres borrascosas", autor: "Emily Brontë", ano: 1847, categoria: "Literatura", estado: "escrito" },
  { id: "jane-eyre", titulo: "Jane Eyre", autor: "Charlotte Brontë", ano: 1847, categoria: "Literatura", estado: "escrito" },
  { id: "el-proceso", titulo: "El proceso", autor: "Franz Kafka", ano: 1925, categoria: "Literatura", estado: "escrito" },
  { id: "siddhartha", titulo: "Siddhartha", autor: "Hermann Hesse", ano: 1922, categoria: "Literatura", estado: "escrito" },
  { id: "alicia-maravillas", titulo: "Alicia en el país de las maravillas", autor: "Lewis Carroll", ano: 1865, categoria: "Literatura", estado: "escrito" },
  { id: "jekyll-hyde", titulo: "El extraño caso del doctor Jekyll y el señor Hyde", autor: "R. L. Stevenson", ano: 1886, categoria: "Literatura", estado: "pendiente" },
  { id: "historia-interminable", titulo: "La historia interminable", autor: "Michael Ende", ano: 1979, categoria: "Literatura", estado: "pendiente" },
  { id: "patria", titulo: "Patria", autor: "Fernando Aramburu", ano: 2016, categoria: "Literatura", estado: "escrito" },
  { id: "tiempo-entre-costuras", titulo: "El tiempo entre costuras", autor: "María Dueñas", ano: 2009, categoria: "Literatura", estado: "escrito" },
  { id: "come-reza-ama", titulo: "Come, reza, ama", autor: "Elizabeth Gilbert", ano: 2006, categoria: "Literatura", estado: "escrito" },
  { id: "veinte-poemas", titulo: "Veinte poemas de amor y una canción desesperada", autor: "Pablo Neruda", ano: 1924, categoria: "Literatura", estado: "pendiente" },
  { id: "vivir-para-contarla", titulo: "Vivir para contarla", autor: "Gabriel García Márquez", ano: 2002, categoria: "Literatura", estado: "pendiente" },
  { id: "cronica-muerte-anunciada", titulo: "Crónica de una muerte anunciada", autor: "Gabriel García Márquez", ano: 1981, categoria: "Literatura", estado: "escrito" },
  { id: "amor-tiempos-colera", titulo: "El amor en los tiempos del cólera", autor: "Gabriel García Márquez", ano: 1985, categoria: "Literatura", estado: "escrito" },
  { id: "perfume", titulo: "El perfume", autor: "Patrick Süskind", ano: 1985, categoria: "Literatura", estado: "escrito" },
  { id: "ladrona-libros", titulo: "La ladrona de libros", autor: "Markus Zusak", ano: 2005, categoria: "Literatura", estado: "escrito" },
  { id: "kite-runner", titulo: "Cometas en el cielo", autor: "Khaled Hosseini", ano: 2003, categoria: "Literatura", estado: "escrito" },
  { id: "mil-soles", titulo: "Mil soles espléndidos", autor: "Khaled Hosseini", ano: 2007, categoria: "Literatura", estado: "pendiente" },
  { id: "martes-con-mi-profesor", titulo: "Martes con mi viejo profesor", autor: "Mitch Albom", ano: 1997, categoria: "Literatura", estado: "escrito" },
  /* --- Psicología ------------------------------------------------------- */
  { id: "pensar-rapido", titulo: "Pensar rápido, pensar despacio", autor: "Daniel Kahneman", ano: 2011, categoria: "Psicología", estado: "escrito" },
  { id: "habitos-atomicos", titulo: "Hábitos atómicos", autor: "James Clear", ano: 2018, categoria: "Psicología", estado: "escrito" },
  { id: "influencia", titulo: "Influencia", autor: "Robert Cialdini", ano: 1984, categoria: "Psicología", estado: "escrito" },
  { id: "mindset", titulo: "Mindset", autor: "Carol Dweck", ano: 2006, categoria: "Psicología", estado: "escrito" },
  { id: "inteligencia-emocional", titulo: "Inteligencia emocional", autor: "Daniel Goleman", ano: 1995, categoria: "Psicología", estado: "escrito" },
  { id: "flow", titulo: "Fluir", autor: "Mihály Csíkszentmihályi", ano: 1990, categoria: "Psicología", estado: "escrito" },
  { id: "siete-habitos", titulo: "Los 7 hábitos de la gente altamente efectiva", autor: "Stephen Covey", ano: 1989, categoria: "Psicología", estado: "escrito" },
  { id: "club-5-manana", titulo: "El club de las 5 de la mañana", autor: "Robin Sharma", ano: 2018, categoria: "Psicología", estado: "escrito" },
  { id: "trabajo-profundo", titulo: "Céntrate", autor: "Cal Newport", ano: 2016, categoria: "Psicología", estado: "escrito" },
  { id: "amigos-influir", titulo: "Cómo ganar amigos e influir sobre las personas", autor: "Dale Carnegie", ano: 1936, categoria: "Psicología", estado: "escrito" },
  { id: "poder-ahora", titulo: "El poder del ahora", autor: "Eckhart Tolle", ano: 1997, categoria: "Psicología", estado: "escrito" },
  { id: "nudge", titulo: "Un pequeño empujón", autor: "Thaler y Sunstein", ano: 2008, categoria: "Psicología", estado: "escrito" },
  { id: "educada", titulo: "Una educación", autor: "Tara Westover", ano: 2018, categoria: "Psicología", estado: "escrito" },
  { id: "poder-habitos", titulo: "El poder de los hábitos", autor: "Charles Duhigg", ano: 2012, categoria: "Psicología", estado: "escrito" },
  { id: "cerebro-del-nino", titulo: "El cerebro del niño", autor: "Siegel y Payne Bryson", ano: 2011, categoria: "Psicología", estado: "escrito" },
  { id: "lenguajes-amor", titulo: "Los cinco lenguajes del amor", autor: "Gary Chapman", ano: 1992, categoria: "Psicología", estado: "escrito" },
  { id: "cosas-buenas", titulo: "Cómo hacer que te pasen cosas buenas", autor: "Marian Rojas Estapé", ano: 2018, categoria: "Psicología", estado: "escrito" },
  { id: "arte-de-amar", titulo: "El arte de amar", autor: "Erich Fromm", ano: 1956, categoria: "Psicología", estado: "escrito" },
  { id: "marte-venus", titulo: "Los hombres son de Marte, las mujeres son de Venus", autor: "John Gray", ano: 1992, categoria: "Psicología", estado: "escrito" },
  { id: "error-descartes", titulo: "El error de Descartes", autor: "Antonio Damasio", ano: 1994, categoria: "Psicología", estado: "escrito" },
  { id: "intro-psicoanalisis", titulo: "Introducción al psicoanálisis", autor: "Sigmund Freud", ano: 1917, categoria: "Psicología", estado: "escrito" },
  { id: "maneras-de-amar", titulo: "Maneras de amar", autor: "Levine y Heller", ano: 2010, categoria: "Psicología", estado: "escrito" },
  { id: "sentirse-bien", titulo: "Sentirse bien", autor: "David D. Burns", ano: 1980, categoria: "Psicología", estado: "escrito" },
  { id: "cerebro-buda", titulo: "El cerebro de Buda", autor: "Rick Hanson y Richard Mendius", ano: 2009, categoria: "Psicología", estado: "escrito" },

  { id: "inteligencia-erotica", titulo: "Inteligencia erótica", autor: "Esther Perel", ano: 2006, categoria: "Psicología", estado: "escrito" },
  { id: "nueva-mirada-infidelidad", titulo: "Una nueva mirada a la infidelidad", autor: "Esther Perel", ano: 2017, categoria: "Psicología", estado: "escrito" },
  { id: "gottman-pareja", titulo: "Siete reglas de oro para vivir en pareja", autor: "John Gottman", ano: 1999, categoria: "Psicología", estado: "escrito" },
  { id: "arte-seduccion", titulo: "El arte de la seducción", autor: "Robert Greene", ano: 2001, categoria: "Psicología", estado: "escrito" },
  { id: "48-leyes-poder", titulo: "Las 48 leyes del poder", autor: "Robert Greene", ano: 1998, categoria: "Psicología", estado: "escrito" },
  { id: "secreto-byrne", titulo: "El secreto", autor: "Rhonda Byrne", ano: 2006, categoria: "Psicología", estado: "escrito" },
  { id: "tus-zonas-erroneas", titulo: "Tus zonas erróneas", autor: "Wayne Dyer", ano: 1976, categoria: "Psicología", estado: "escrito" },
  { id: "mujeres-lobos", titulo: "Mujeres que corren con los lobos", autor: "Clarissa Pinkola Estés", ano: 1992, categoria: "Psicología", estado: "escrito" },
  { id: "cuatro-mil-semanas", titulo: "Cuatro mil semanas", autor: "Oliver Burkeman", ano: 2021, categoria: "Psicología", estado: "escrito" },
  { id: "rompe-barrera-no", titulo: "Rompe la barrera del no", autor: "Chris Voss", ano: 2016, categoria: "Psicología", estado: "escrito" },
  { id: "obtenga-el-si", titulo: "Obtenga el sí", autor: "Fisher y Ury", ano: 1981, categoria: "Psicología", estado: "escrito" },
  { id: "determinacion", titulo: "Determinación", autor: "Angela Duckworth", ano: 2016, categoria: "Psicología", estado: "escrito" },
  { id: "poder-5-segundos", titulo: "El poder de los 5 segundos", autor: "Mel Robbins", ano: 2017, categoria: "Psicología", estado: "escrito" },
  { id: "organizate-eficacia", titulo: "Organízate con eficacia", autor: "David Allen", ano: 2001, categoria: "Psicología", estado: "escrito" },
  { id: "traguese-sapo", titulo: "Tráguese ese sapo", autor: "Brian Tracy", ano: 2001, categoria: "Psicología", estado: "escrito" },
  { id: "cambia-el-chip", titulo: "Cambia el chip", autor: "Chip y Dan Heath", ano: 2010, categoria: "Psicología", estado: "escrito" },
  { id: "ideas-que-pegan", titulo: "Ideas que pegan", autor: "Chip y Dan Heath", ano: 2007, categoria: "Psicología", estado: "escrito" },
  { id: "magia-pensar-grande", titulo: "La magia de pensar en grande", autor: "David Schwartz", ano: 1959, categoria: "Psicología", estado: "escrito" },
  { id: "despertando-gigante", titulo: "Despertando al gigante interior", autor: "Tony Robbins", ano: 1991, categoria: "Psicología", estado: "escrito" },
  { id: "poder-sin-limites", titulo: "Poder sin límites", autor: "Tony Robbins", ano: 1986, categoria: "Psicología", estado: "escrito" },
  { id: "actitud-mental-positiva", titulo: "La actitud mental positiva", autor: "Napoleon Hill y W. Clement Stone", ano: 1959, categoria: "Psicología", estado: "escrito" },
  { id: "vendedor-mas-grande", titulo: "El vendedor más grande del mundo", autor: "Og Mandino", ano: 1968, categoria: "Psicología", estado: "escrito" },
  { id: "21-leyes-liderazgo", titulo: "Las 21 leyes irrefutables del liderazgo", autor: "John C. Maxwell", ano: 1998, categoria: "Psicología", estado: "escrito" },
  { id: "dar-y-recibir", titulo: "Dar y recibir", autor: "Adam Grant", ano: 2013, categoria: "Psicología", estado: "escrito" },
  { id: "originales", titulo: "Originales", autor: "Adam Grant", ano: 2016, categoria: "Psicología", estado: "escrito" },
  { id: "piensalo-otra-vez", titulo: "Piénsalo otra vez", autor: "Adam Grant", ano: 2021, categoria: "Psicología", estado: "escrito" },
  { id: "maestria-greene", titulo: "Maestría", autor: "Robert Greene", ano: 2012, categoria: "Psicología", estado: "escrito" },
  { id: "leyes-naturaleza-humana", titulo: "Las leyes de la naturaleza humana", autor: "Robert Greene", ano: 2018, categoria: "Psicología", estado: "escrito" },
  { id: "pre-suasion", titulo: "Pre-suasión", autor: "Robert Cialdini", ano: 2016, categoria: "Psicología", estado: "escrito" },
  { id: "lenguaje-del-cuerpo", titulo: "El lenguaje del cuerpo", autor: "Allan y Barbara Pease", ano: 2004, categoria: "Psicología", estado: "escrito" },
  { id: "hombres-no-escuchan", titulo: "Por qué los hombres no escuchan y las mujeres no saben leer los mapas", autor: "Allan y Barbara Pease", ano: 1998, categoria: "Psicología", estado: "pendiente" },
  { id: "arte-no-amargarse", titulo: "El arte de no amargarse la vida", autor: "Rafael Santandreu", ano: 2011, categoria: "Psicología", estado: "escrito" },
  { id: "cinco-heridas", titulo: "Las cinco heridas que impiden ser uno mismo", autor: "Lise Bourbeau", ano: 2000, categoria: "Psicología", estado: "pendiente" },
  { id: "usted-puede-sanar", titulo: "Usted puede sanar su vida", autor: "Louise Hay", ano: 1984, categoria: "Psicología", estado: "escrito" },
  { id: "nunca-comas-solo", titulo: "Nunca comas solo", autor: "Keith Ferrazzi", ano: 2005, categoria: "Psicología", estado: "escrito" },
  { id: "poder-introvertidos", titulo: "El poder de los introvertidos", autor: "Susan Cain", ano: 2012, categoria: "Psicología", estado: "escrito" },
  { id: "modelos-manson", titulo: "Modelos", autor: "Mark Manson", ano: 2011, categoria: "Psicología", estado: "pendiente" },
  { id: "buena-suerte", titulo: "La buena suerte", autor: "Rovira y Trías de Bes", ano: 2004, categoria: "Psicología", estado: "escrito" },
  { id: "placebo-eres-tu", titulo: "El placebo eres tú", autor: "Joe Dispenza", ano: 2014, categoria: "Psicología", estado: "escrito" },
  { id: "termina-acuff", titulo: "¡Termina!", autor: "Jon Acuff", ano: 2017, categoria: "Psicología", estado: "pendiente" },
  { id: "haz-cosas-dificiles", titulo: "Haz cosas difíciles", autor: "Steve Magness", ano: 2022, categoria: "Psicología", estado: "pendiente" },
  { id: "procrastinacion-steel", titulo: "Procrastinación", autor: "Piers Steel", ano: 2010, categoria: "Psicología", estado: "escrito" },
  { id: "no-lo-pienses-demasiado", titulo: "No lo pienses demasiado", autor: "Anne Bogel", ano: 2020, categoria: "Psicología", estado: "pendiente" },
  { id: "mente-justos", titulo: "La mente de los justos", autor: "Jonathan Haidt", ano: 2012, categoria: "Psicología", estado: "escrito" },
  { id: "poder-magico-voluntad", titulo: "El poder mágico de la voluntad", autor: "Claude M. Bristol", ano: 1948, categoria: "Psicología", estado: "pendiente" },
  { id: "treinta-dias", titulo: "30 días", autor: "Marc Reklau", ano: 2014, categoria: "Psicología", estado: "pendiente" },
  { id: "cientifico-espacial", titulo: "Piensa como un científico espacial", autor: "Ozan Varol", ano: 2020, categoria: "Psicología", estado: "pendiente" },
  { id: "filosofo-griego", titulo: "Piensa como un filósofo griego", autor: "Donald Robertson", ano: 2019, categoria: "Psicología", estado: "pendiente" },
  { id: "alegria-perderse", titulo: "La alegría de perderse", autor: "Tanya Dalton", ano: 2021, categoria: "Psicología", estado: "pendiente" },
  { id: "todo-empieza-contigo", titulo: "Todo empieza contigo", autor: "Jillian Turecki", ano: 2025, categoria: "Psicología", estado: "pendiente" },
  { id: "adulto-relaciones", titulo: "Cómo ser un adulto en las relaciones", autor: "David Richo", ano: 2002, categoria: "Psicología", estado: "escrito" },
  { id: "dopamina-lieberman", titulo: "Dopamina", autor: "Daniel Z. Lieberman y Michael E. Long", ano: 2018, categoria: "Psicología", estado: "escrito" },
  { id: "segundo-cerebro", titulo: "Crea tu segundo cerebro", autor: "Tiago Forte", ano: 2022, categoria: "Psicología", estado: "escrito" },
  { id: "focus-goleman", titulo: "Focus", autor: "Daniel Goleman", ano: 2013, categoria: "Psicología", estado: "escrito" },
  { id: "hombres-marte-mujeres-venus", titulo: "Los hombres son de Marte, las mujeres son de Venus", autor: "John Gray", ano: 1992, categoria: "Psicología", estado: "escrito" },
  { id: "mujeres-aman-demasiado", titulo: "Mujeres que aman demasiado", autor: "Robin Norwood", ano: 1985, categoria: "Psicología", estado: "escrito" },
  { id: "amar-o-depender", titulo: "Amar o depender", autor: "Walter Riso", ano: 1999, categoria: "Psicología", estado: "escrito" },
  { id: "enamorate-de-ti", titulo: "Enamórate de ti", autor: "Walter Riso", ano: 2012, categoria: "Psicología", estado: "pendiente" },
  { id: "comunicacion-no-violenta", titulo: "Comunicación no violenta", autor: "Marshall Rosenberg", ano: 1999, categoria: "Psicología", estado: "escrito" },
  { id: "conversaciones-cruciales", titulo: "Conversaciones cruciales", autor: "Patterson, Grenny, McMillan y Switzler", ano: 2002, categoria: "Psicología", estado: "escrito" },
  { id: "ninos-escuchen", titulo: "Cómo hablar para que los niños escuchen", autor: "Adele Faber y Elaine Mazlish", ano: 1980, categoria: "Psicología", estado: "pendiente" },
  { id: "actua-dama-piensa-hombre", titulo: "Actúa como dama, piensa como hombre", autor: "Steve Harvey", ano: 2009, categoria: "Psicología", estado: "pendiente" },
  { id: "desenredadas", titulo: "Desenredadas", autor: "Lisa Damour", ano: 2016, categoria: "Psicología", estado: "pendiente" },
  { id: "poder-de-la-presencia", titulo: "El poder de la presencia", autor: "Amy Cuddy", ano: 2015, categoria: "Psicología", estado: "escrito" },
  { id: "obstaculo-es-camino", titulo: "El obstáculo es el camino", autor: "Ryan Holiday", ano: 2014, categoria: "Psicología", estado: "escrito" },
  { id: "ego-es-el-enemigo", titulo: "El ego es el enemigo", autor: "Ryan Holiday", ano: 2016, categoria: "Psicología", estado: "escrito" },
  { id: "quietud-es-la-clave", titulo: "La quietud es la clave", autor: "Ryan Holiday", ano: 2019, categoria: "Psicología", estado: "pendiente" },
  { id: "disciplina-es-destino", titulo: "La disciplina es el destino", autor: "Ryan Holiday", ano: 2022, categoria: "Psicología", estado: "escrito" },
  { id: "ley-de-atraccion", titulo: "La ley de la atracción", autor: "Esther y Jerry Hicks", ano: 2006, categoria: "Psicología", estado: "escrito" },
  { id: "hazte-rico-durmiendo", titulo: "Hazte rico mientras duermes", autor: "Ben Sweetland", ano: 1962, categoria: "Psicología", estado: "pendiente" },
  { id: "cinco-arrepentimientos", titulo: "Los cinco arrepentimientos de los moribundos", autor: "Bronnie Ware", ano: 2011, categoria: "Psicología", estado: "escrito" },
  /* --- Economía --------------------------------------------------------- */
  { id: "psicologia-dinero", titulo: "La psicología del dinero", autor: "Morgan Housel", ano: 2020, categoria: "Economía", estado: "escrito" },
  { id: "padre-rico", titulo: "Padre rico, padre pobre", autor: "Robert Kiyosaki", ano: 1997, categoria: "Economía", estado: "escrito" },
  { id: "hombre-rico-babilonia", titulo: "El hombre más rico de Babilonia", autor: "George S. Clason", ano: 1926, categoria: "Economía", estado: "escrito" },
  { id: "freakonomics", titulo: "Freakonomics", autor: "Levitt y Dubner", ano: 2005, categoria: "Economía", estado: "escrito" },
  { id: "cisne-negro", titulo: "El cisne negro", autor: "Nassim Taleb", ano: 2007, categoria: "Economía", estado: "escrito" },
  { id: "antifragil", titulo: "Antifrágil", autor: "Nassim Taleb", ano: 2012, categoria: "Economía", estado: "escrito" },
  { id: "inversor-inteligente", titulo: "El inversor inteligente", autor: "Benjamin Graham", ano: 1949, categoria: "Economía", estado: "escrito" },
  { id: "piensa-hazte-rico", titulo: "Piensa y hazte rico", autor: "Napoleon Hill", ano: 1937, categoria: "Economía", estado: "escrito" },
  { id: "mente-millonaria", titulo: "Los secretos de la mente millonaria", autor: "T. Harv Eker", ano: 2005, categoria: "Economía", estado: "escrito" },
  { id: "cero-a-uno", titulo: "De cero a uno", autor: "Peter Thiel", ano: 2014, categoria: "Economía", estado: "escrito" },
  { id: "lean-startup", titulo: "El método Lean Startup", autor: "Eric Ries", ano: 2011, categoria: "Economía", estado: "escrito" },
  { id: "steve-jobs", titulo: "Steve Jobs", autor: "Walter Isaacson", ano: 2011, categoria: "Economía", estado: "escrito" },
  { id: "factfulness", titulo: "Factfulness", autor: "Hans Rosling", ano: 2018, categoria: "Economía", estado: "escrito" },
  { id: "semana-4-horas", titulo: "La semana laboral de 4 horas", autor: "Tim Ferriss", ano: 2007, categoria: "Economía", estado: "escrito" },
  { id: "riqueza-naciones", titulo: "La riqueza de las naciones", autor: "Adam Smith", ano: 1776, categoria: "Economía", estado: "escrito" },
  { id: "capital-siglo-xxi", titulo: "El capital en el siglo XXI", autor: "Thomas Piketty", ano: 2013, categoria: "Economía", estado: "escrito" },
  { id: "por-que-fracasan", titulo: "Por qué fracasan los países", autor: "Acemoglu y Robinson", ano: 2012, categoria: "Economía", estado: "escrito" },
  { id: "doctrina-shock", titulo: "La doctrina del shock", autor: "Naomi Klein", ano: 2007, categoria: "Economía", estado: "escrito" },
  { id: "millonario-al-lado", titulo: "El millonario de al lado", autor: "Stanley y Danko", ano: 1996, categoria: "Economía", estado: "escrito" },
  { id: "paseo-aleatorio", titulo: "Un paseo aleatorio por Wall Street", autor: "Burton Malkiel", ano: 1973, categoria: "Economía", estado: "escrito" },
  { id: "repensar-pobreza", titulo: "Repensar la pobreza", autor: "Banerjee y Duflo", ano: 2011, categoria: "Economía", estado: "escrito" },
  { id: "bogle-sentido-comun", titulo: "El pequeño libro para invertir con sentido común", autor: "John C. Bogle", ano: 2007, categoria: "Economía", estado: "escrito" },
  { id: "superpronosticadores", titulo: "Superpronosticadores", autor: "Tetlock y Gardner", ano: 2015, categoria: "Economía", estado: "escrito" },
  { id: "dinero-domina-juego", titulo: "Dinero: domina el juego", autor: "Tony Robbins", ano: 2014, categoria: "Economía", estado: "escrito" },

  { id: "elon-musk", titulo: "Elon Musk", autor: "Walter Isaacson", ano: 2023, categoria: "Economía", estado: "escrito" },
  { id: "ford-vida-obra", titulo: "Mi vida y obra", autor: "Henry Ford", ano: 1922, categoria: "Economía", estado: "pendiente" },
  { id: "coach-silicon-valley", titulo: "El coach de Silicon Valley", autor: "Schmidt, Rosenberg y Eagle", ano: 2019, categoria: "Economía", estado: "pendiente" },
  { id: "promesa-lapiz", titulo: "La promesa de un lápiz", autor: "Adam Braun", ano: 2014, categoria: "Economía", estado: "pendiente" },
  { id: "quien-queso", titulo: "¿Quién se ha llevado mi queso?", autor: "Spencer Johnson", ano: 1998, categoria: "Economía", estado: "escrito" },
  { id: "empieza-porque", titulo: "Empieza con el porqué", autor: "Simon Sinek", ano: 2009, categoria: "Economía", estado: "escrito" },
  { id: "millonario-automatico", titulo: "El millonario automático", autor: "David Bach", ano: 2004, categoria: "Economía", estado: "escrito" },
  { id: "ciencia-hacerse-rico", titulo: "La ciencia de hacerse rico", autor: "Wallace D. Wattles", ano: 1910, categoria: "Economía", estado: "escrito" },
  { id: "transformacion-dinero", titulo: "La transformación total de su dinero", autor: "Dave Ramsey", ano: 2003, categoria: "Economía", estado: "escrito" },
  { id: "vender-es-humano", titulo: "Vender es humano", autor: "Daniel H. Pink", ano: 2012, categoria: "Economía", estado: "escrito" },
  { id: "arte-de-empezar", titulo: "El arte de empezar", autor: "Guy Kawasaki", ano: 2004, categoria: "Economía", estado: "pendiente" },
  { id: "oceano-azul", titulo: "La estrategia del océano azul", autor: "Kim y Mauborgne", ano: 2005, categoria: "Economía", estado: "escrito" },
  { id: "empresas-sobresalen", titulo: "Empresas que sobresalen", autor: "Jim Collins", ano: 2001, categoria: "Economía", estado: "escrito" },
  { id: "efecto-compuesto", titulo: "El efecto compuesto", autor: "Darren Hardy", ano: 2010, categoria: "Economía", estado: "escrito" },
  { id: "psicologia-venta", titulo: "Psicología de ventas", autor: "Brian Tracy", ano: 2004, categoria: "Economía", estado: "pendiente" },
  { id: "cuadrante-flujo", titulo: "El cuadrante del flujo de dinero", autor: "Robert Kiyosaki", ano: 1998, categoria: "Economía", estado: "escrito" },
  { id: "bolsa-o-vida", titulo: "La bolsa o la vida", autor: "Robin y Dominguez", ano: 1992, categoria: "Economía", estado: "escrito" },
  { id: "ensenare-ser-rico", titulo: "Te enseñaré a ser rico", autor: "Ramit Sethi", ano: 2009, categoria: "Economía", estado: "escrito" },
  { id: "side-hustle", titulo: "Side Hustle", autor: "Chris Guillebeau", ano: 2017, categoria: "Economía", estado: "escrito" },
  { id: "maestro-dinero", titulo: "Maestro del dinero: el juego", autor: "Tony Robbins", ano: 2014, categoria: "Economía", estado: "escrito" },
  { id: "chingona-dinero", titulo: "Eres un chingón haciendo dinero", autor: "Jen Sincero", ano: 2017, categoria: "Economía", estado: "escrito" },
  { id: "vacas-sagradas", titulo: "Matar a las vacas sagradas", autor: "Garrett B. Gunderson", ano: 2008, categoria: "Economía", estado: "pendiente" },
  { id: "dieta-financiera", titulo: "La dieta financiera", autor: "Chelsea Fagan y Lauren Ver Hage", ano: 2018, categoria: "Economía", estado: "pendiente" },
  { id: "principios-orden-mundial", titulo: "Principios para enfrentarse al nuevo orden mundial", autor: "Ray Dalio", ano: 2021, categoria: "Economía", estado: "escrito" },
  { id: "guerra-chips", titulo: "La guerra de los chips", autor: "Chris Miller", ano: 2022, categoria: "Economía", estado: "escrito" },
  { id: "viaja-gratis", titulo: "Viaja gratis", autor: "Nomadic Matt", ano: 2015, categoria: "Economía", estado: "pendiente" },
  { id: "recompra-tu-tiempo", titulo: "Recompra tu tiempo", autor: "Dan Martell", ano: 2023, categoria: "Economía", estado: "escrito" },
  { id: "sprint-knapp", titulo: "Sprint", autor: "Jake Knapp", ano: 2016, categoria: "Economía", estado: "pendiente" },
  { id: "creatividad-sa", titulo: "Creatividad, S.A.", autor: "Ed Catmull y Amy Wallace", ano: 2014, categoria: "Economía", estado: "escrito" },
  { id: "thinkertoys", titulo: "Thinkertoys", autor: "Michael Michalko", ano: 1991, categoria: "Economía", estado: "pendiente" },
  { id: "planifica-tu-futuro", titulo: "Planifica tu futuro", autor: "Michael Hyatt y Daniel Harkavy", ano: 2016, categoria: "Economía", estado: "pendiente" },
  { id: "amor-trabajo-no-correspondido", titulo: "Tu amor al trabajo no es correspondido", autor: "Sarah Jaffe", ano: 2021, categoria: "Economía", estado: "pendiente" },
  { id: "camino-libertad-financiera", titulo: "El camino hacia la libertad financiera", autor: "Bodo Schäfer", ano: 1998, categoria: "Economía", estado: "escrito" },
  { id: "retirate-joven-rico", titulo: "Retírate joven y rico", autor: "Robert Kiyosaki", ano: 2001, categoria: "Economía", estado: "escrito" },
  { id: "cuatro-pilares-inversion", titulo: "Los cuatro pilares de la inversión", autor: "William Bernstein", ano: 2002, categoria: "Economía", estado: "pendiente" },
  { id: "primeros-90-dias", titulo: "Los primeros 90 días", autor: "Michael Watkins", ano: 2003, categoria: "Economía", estado: "escrito" },
  { id: "cinco-disfunciones", titulo: "Las cinco disfunciones de un equipo", autor: "Patrick Lencioni", ano: 2002, categoria: "Economía", estado: "escrito" },
  { id: "esencialismo", titulo: "Esencialismo", autor: "Greg McKeown", ano: 2014, categoria: "Economía", estado: "escrito" },
  { id: "sin-esfuerzo", titulo: "Sin esfuerzo", autor: "Greg McKeown", ano: 2021, categoria: "Economía", estado: "escrito" },
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
  { id: "ser-mortal", titulo: "Ser mortal", autor: "Atul Gawande", ano: 2014, categoria: "Salud", estado: "escrito" },
  { id: "anticancer", titulo: "Anticáncer", autor: "David Servan-Schreiber", ano: 2007, categoria: "Salud", estado: "escrito" },
  { id: "codigo-obesidad", titulo: "El código de la obesidad", autor: "Jason Fung", ano: 2016, categoria: "Salud", estado: "escrito" },
  { id: "dieta-cojea", titulo: "Mi dieta cojea", autor: "Aitor Sánchez García", ano: 2016, categoria: "Salud", estado: "escrito" },
  { id: "milagro-metabolico", titulo: "El milagro metabólico", autor: "Carlos Jaramillo", ano: 2019, categoria: "Salud", estado: "escrito" },
  { id: "cerebro-de-pan", titulo: "Cerebro de pan", autor: "David Perlmutter", ano: 2013, categoria: "Salud", estado: "escrito" },
  { id: "vivir-plenitud", titulo: "Vivir con plenitud las crisis", autor: "Jon Kabat-Zinn", ano: 1990, categoria: "Salud", estado: "escrito" },
  { id: "deja-de-ser-tu", titulo: "Deja de ser tú", autor: "Joe Dispenza", ano: 2012, categoria: "Salud", estado: "escrito" },
  { id: "poder-metabolismo", titulo: "El poder del metabolismo", autor: "Frank Suárez", ano: 2006, categoria: "Salud", estado: "escrito" },

  { id: "entre-dos-reinos", titulo: "Entre dos reinos", autor: "Suleika Jaouad", ano: 2021, categoria: "Salud", estado: "pendiente" },
  { id: "tal-como-eres", titulo: "Tal como eres", autor: "Emily Nagoski", ano: 2015, categoria: "Salud", estado: "escrito" },
  { id: "magia-orden", titulo: "La magia del orden", autor: "Marie Kondo", ano: 2011, categoria: "Salud", estado: "escrito" },
  { id: "cuerpo-4-horas", titulo: "El cuerpo perfecto en 4 horas", autor: "Tim Ferriss", ano: 2010, categoria: "Salud", estado: "pendiente" },
  { id: "intestino-feliz", titulo: "El intestino feliz", autor: "Justin y Erica Sonnenburg", ano: 2015, categoria: "Salud", estado: "pendiente" },
  { id: "metodo-wim-hof", titulo: "El método Wim Hof", autor: "Wim Hof", ano: 2020, categoria: "Salud", estado: "escrito" },
  { id: "cuerpo-para-vida", titulo: "Un cuerpo para toda la vida", autor: "Marcos Vázquez", ano: 2019, categoria: "Salud", estado: "pendiente" },
  { id: "dieta-ya-no-cojea", titulo: "Mi dieta ya no cojea", autor: "Aitor Sánchez García", ano: 2018, categoria: "Salud", estado: "pendiente" },
  { id: "biologia-creencia", titulo: "La biología de la creencia", autor: "Bruce Lipton", ano: 2005, categoria: "Salud", estado: "pendiente" },
  { id: "adelgaza-para-siempre", titulo: "Adelgaza para siempre", autor: "Ángela Quintas", ano: 2016, categoria: "Salud", estado: "pendiente" },
  { id: "libro-del-sueno", titulo: "El libro del sueño", autor: "Guy Meadows", ano: 2014, categoria: "Salud", estado: "pendiente" },
  { id: "pleno-compromiso", titulo: "El poder del pleno compromiso", autor: "Jim Loehr y Tony Schwartz", ano: 2003, categoria: "Salud", estado: "pendiente" },
  { id: "revolucion-glucosa", titulo: "La revolución de la glucosa", autor: "Jessie Inchauspé", ano: 2022, categoria: "Salud", estado: "escrito" },
  { id: "cerebro-hambriento", titulo: "El cerebro hambriento", autor: "Stephan Guyenet", ano: 2017, categoria: "Salud", estado: "escrito" },
  { id: "mente-en-forma", titulo: "Tu mente en forma", autor: "Wendy Suzuki", ano: 2015, categoria: "Salud", estado: "pendiente" },
  /* --- Deportes ---------------------------------------------------------
     La novena, pedida por Pablo el 21 de agosto: «añade sección de deportes
     también, que puede ser interesante con libros famosos y títulos que
     atraigan mucho leer como Messi y Cristiano».

     El criterio del catálogo no cambia: famosos y con algo que contar. Un
     libro de deporte que solo cuente partidos no entra; entran los que
     explican algo —cómo se ficha, cómo se entrena, qué cuesta ganar— o los
     que están bien escritos de verdad. La mitad son de fútbol porque es lo
     que pidió Pablo y es lo que se busca, y la otra mitad reparte. */
  { id: "messi-ronaldo", titulo: "Messi vs. Ronaldo", autor: "Clegg y Robinson", ano: 2021, categoria: "Deportes", estado: "escrito" },
  { id: "yo-soy-el-diego", titulo: "Yo soy el Diego", autor: "Diego Armando Maradona", ano: 2000, categoria: "Deportes", estado: "escrito" },
  { id: "piramide-invertida", titulo: "La pirámide invertida", autor: "Jonathan Wilson", ano: 2008, categoria: "Deportes", estado: "escrito" },
  { id: "futbol-sol-sombra", titulo: "El fútbol a sol y sombra", autor: "Eduardo Galeano", ano: 1995, categoria: "Deportes", estado: "escrito" },
  { id: "futbol-contra-enemigo", titulo: "Fútbol contra el enemigo", autor: "Simon Kuper", ano: 1994, categoria: "Deportes", estado: "escrito" },
  { id: "fiebre-gradas", titulo: "Fiebre en las gradas", autor: "Nick Hornby", ano: 1992, categoria: "Deportes", estado: "escrito" },
  { id: "cruyff-14", titulo: "14. La autobiografía de Johan Cruyff", autor: "Johan Cruyff", ano: 2016, categoria: "Deportes", estado: "escrito" },
  { id: "soy-zlatan", titulo: "Yo soy Zlatan Ibrahimović", autor: "David Lagercrantz", ano: 2011, categoria: "Deportes", estado: "escrito" },
  { id: "open-agassi", titulo: "Open", autor: "Andre Agassi", ano: 2009, categoria: "Deportes", estado: "escrito" },
  { id: "rafa-mi-historia", titulo: "Rafa, mi historia", autor: "Rafael Nadal y John Carlin", ano: 2011, categoria: "Deportes", estado: "escrito" },
  { id: "moneyball", titulo: "Moneyball", autor: "Michael Lewis", ano: 2003, categoria: "Deportes", estado: "escrito" },
  { id: "once-anillos", titulo: "Once anillos", autor: "Phil Jackson", ano: 2013, categoria: "Deportes", estado: "escrito" },
  { id: "mamba-mentality", titulo: "Mamba Mentality", autor: "Kobe Bryant", ano: 2018, categoria: "Deportes", estado: "escrito" },
  { id: "remando-un-hombre", titulo: "Remando como un solo hombre", autor: "Daniel James Brown", ano: 2013, categoria: "Deportes", estado: "escrito" },
  { id: "rey-del-mundo", titulo: "Rey del mundo", autor: "David Remnick", ano: 1998, categoria: "Deportes", estado: "escrito" },
  { id: "hablo-correr", titulo: "De qué hablo cuando hablo de correr", autor: "Haruki Murakami", ano: 2007, categoria: "Deportes", estado: "escrito" },
  { id: "numero-uno", titulo: "Número uno", autor: "Anders Ericsson", ano: 2016, categoria: "Deportes", estado: "escrito" },
  { id: "gen-deportivo", titulo: "El gen deportivo", autor: "David Epstein", ano: 2013, categoria: "Deportes", estado: "escrito" },
  { id: "legado-all-blacks", titulo: "Legado", autor: "James Kerr", ano: 2013, categoria: "Deportes", estado: "escrito" },
  { id: "nunca-te-pares", titulo: "Nunca te pares", autor: "Phil Knight", ano: 2016, categoria: "Deportes", estado: "escrito" },
  { id: "siete-pecados", titulo: "Siete pecados capitales", autor: "David Walsh", ano: 2012, categoria: "Deportes", estado: "escrito" },
  { id: "relentless", titulo: "Imparable", autor: "Tim Grover", ano: 2013, categoria: "Deportes", estado: "escrito" },
  { id: "correr-o-morir", titulo: "Correr o morir", autor: "Kilian Jornet", ano: 2011, categoria: "Deportes", estado: "escrito" },
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
