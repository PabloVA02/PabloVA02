import type { Short } from "../shorts";

/* ==========================================================================
   Los censos.

   Contar a la gente parece una tarea administrativa gris y es una de las
   operaciones más políticas que existe: quien cuenta, decide qué categorías
   hay, y quien decide las categorías reparte el poder y el dinero.

   La regla del tema: cada short enseña PARA QUÉ SE CONTABA. Nunca se cuenta
   por curiosidad: se cuenta para cobrar impuestos, para reclutar soldados o
   para repartir escaños. Y siempre aparece el problema material —cómo se
   suman millones de papeles— porque ahí está lo que nadie imagina.
   ========================================================================== */

export const CENSOS: Short[] = [
  {
    id: "el-censor-romano",
    titulo: "Contar gente era vigilarla",
    gancho: "Del cargo romano que hacía el recuento viene la palabra censura, y no por casualidad.",
    categoria: "Censos",
    color: "var(--clay)",
    encargo: "Una tablilla de cera con anotaciones y un punzón encima.",
    fotos: [
      {
        archivo: "Tablette a ecrire et stylet - Narbo Via.jpg",
        autor: "Tablilla de escribir romana y su punzón de hueso. Museo Narbo Via, Narbona.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Tablette_a_ecrire_et_stylet_-_Narbo_Via.jpg",
        foco: "50% 35%",
        alt: "Una tablilla de madera rayada y un punzón claro y afilado, apoyados sobre un soporte gris de museo.",
      },
      {
        archivo: "Silver denarius of Octavian MET sf0817088r.jpg",
        autor: "Denario de plata de Octaviano. Metropolitan Museum of Art, Nueva York.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Silver_denarius_of_Octavian_MET_sf0817088r.jpg",
        foco: "50% 45%",
        alt: "Una moneda de plata gastada con un perfil masculino de nariz recta acuñado en relieve.",
      },
      {
        archivo: "Marble portrait bust of a man MET DP123861.jpg",
        autor: "Busto romano de un hombre, en mármol. Metropolitan Museum of Art, Nueva York.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Marble_portrait_bust_of_a_man_MET_DP123861.jpg",
        foco: "55% 30%",
        alt: "Un busto de mármol blanco visto de perfil, con el pelo rizado a cincel y un gesto severo.",
      },
      {
        archivo: "Crowd in Willis Street, Wellington, awaiting the results of the 1931 general election, 1931 (3327041430).jpg",
        autor: "Una multitud esperando resultados electorales en Wellington, 1931. National Library of New Zealand.",
        licencia: "No restrictions",
        fuente: "https://commons.wikimedia.org/wiki/File:Crowd_in_Willis_Street,_Wellington,_awaiting_the_results_of_the_1931_general_election,_1931_(3327041430).jpg",
        foco: "50% 72%",
        alt: "Una calle abarrotada de gente con sombrero, todos mirando hacia un tablero enorme colgado en una fachada.",
      },
    ],
    entrada:
      "Roma, siglo V antes de Cristo. Cada cinco años, dos magistrados elegidos expresamente para el cargo hacen el recuento de todos los ciudadanos varones de la ciudad y de todo lo que poseen, hasta el último esclavo y la última cabeza de ganado. No es una estadística ni un ejercicio de curiosidad administrativa: de lo que quede escrito en ese registro dependen cuántos impuestos paga cada uno, en qué unidad del ejército tiene que servir y con cuánto peso vota su grupo en las asambleas. Ser contado y ser clasificado son, desde el principio, la misma operación.",
    paginas: [
      {
        rotulo: "Clases",
        texto:
          "El ciudadano se presentaba y declaraba bajo juramento su edad, su familia y su patrimonio: tierras, esclavos, ganado, dinero. Con esa cifra se le asignaba a una clase, y la clase determinaba desde el armamento con el que debía presentarse a la guerra hasta el peso de su voto, porque las asambleas votaban por grupos y los grupos de los ricos eran más numerosos y votaban primero. Falsear la declaración estaba castigado con dureza. El recuento terminaba con una ceremonia de purificación de la ciudad entera, que se repetía cada cinco años.",
        destacado: { tipo: "frase", frase: "Declarar el patrimonio decidía el peso de tu voto." },
      },
      {
        rotulo: "La otra tarea",
        texto:
          "Aquellos magistrados tenían además una atribución que hoy sorprende: vigilar las costumbres. Podían degradar de clase o expulsar del senado a alguien por conductas consideradas indignas —maltratar a su familia, abandonar sus tierras, gastar de forma escandalosa, no casarse—, con una nota escrita al margen de su nombre en el registro. Esa nota era un castigo público sin juicio ni defensa. De ese poder de poner una marca al lado de un nombre viene, en línea recta, la palabra censura, que hoy significa otra cosa pero conserva el mismo gesto.",
        destacado: { tipo: "cifra", cifra: "5", unidad: "años entre recuento y recuento" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó la palabra, y quedaron las dos ideas juntas: contar y calificar. Quedó también el mecanismo, porque casi todos los censos posteriores han servido para lo mismo que aquel: saber a quién cobrar y a quién llamar a filas. Por eso a lo largo de la historia la gente ha escondido personas al censo con notable constancia, y por eso muchos Estados modernos han tenido que prometer por ley que los datos del censo no se comunican a Hacienda ni a la policía. La promesa es reciente. La desconfianza tiene dos mil quinientos años.",
      },
    ],
  },
  {
    id: "tarjetas-perforadas",
    titulo: "Un censo con agujeros",
    gancho: "El anterior había tardado ocho años en sumarse. Con máquinas, el nuevo estuvo en seis semanas.",
    categoria: "Censos",
    color: "var(--slate)",
    encargo: "Una tarjeta de cartón con agujeros ordenados en filas y columnas.",
    fotos: [
      {
        archivo: "C.1900 Hollerith Census Tabulator (2585332983).jpg",
        autor: "Tabuladora de Hollerith de hacia 1900, con la prensa lectora de tarjetas y el muro de contadores. Fotografía de Erik Pitti.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:C.1900_Hollerith_Census_Tabulator_(2585332983).jpg",
        foco: "55% 35%",
        alt: "Máquina de madera con decenas de esferas amarillas de aguja y una prensa metálica con agujas en primer plano.",
      },
      {
        archivo:
          "Close up of the Hollerith machine in operation (Reeve 014276), National Museum of Health and Medicine (3547327090).jpg",
        autor: "La máquina de Hollerith en funcionamiento. Museo Nacional de Salud y Medicina, Estados Unidos.",
        licencia: "CC BY 2.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Close_up_of_the_Hollerith_machine_in_operation_(Reeve_014276),_National_Museum_of_Health_and_Medicine_(3547327090).jpg",
        foco: "50% 50%",
        alt: "Fotografía antigua de unas manos colocando una tarjeta perforada en la prensa de una máquina tabuladora.",
      },
      {
        archivo: "Card puncher - NARA - 513295.jpg",
        autor: "Perforadora de tarjetas del sistema de tabulación de la oficina del censo, hacia 1940. Archivos Nacionales de Estados Unidos.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Card_puncher_-_NARA_-_513295.jpg",
        foco: "50% 50%",
        alt: "Máquina perforadora de tarjetas con teclado, fotografiada en blanco y negro.",
      },
      {
        archivo: "IBM D11 (early Tabulation Machine).jpg",
        autor: "Tabuladora temprana de IBM, heredera directa de aquellas máquinas. Museo Alemán de Múnich.",
        licencia: "CC BY-SA 2.5",
        fuente: "https://commons.wikimedia.org/wiki/File:IBM_D11_(early_Tabulation_Machine).jpg",
        foco: "50% 50%",
        alt: "Máquina tabuladora antigua de metal gris con rodillos y contadores, expuesta en un museo.",
      },
    ],
    entrada:
      "Estados Unidos, 1890. El país crece tan deprisa que el censo anterior, el de 1880, tardó ocho años en terminar de sumarse a mano, de modo que los resultados llegaron cuando ya estaban obsoletos y no servían para repartir escaños ni presupuestos. La constitución obliga a contar a todo el mundo cada diez años, y las cuentas ya no caben en diez años de trabajo. La oficina responsable convoca un concurso para encontrar un método más rápido, y lo gana un ingeniero joven que trabajó en el censo anterior y vio el problema por dentro.",
    paginas: [
      {
        rotulo: "El agujero",
        texto:
          "Su idea consistía en traducir cada persona a una tarjeta de cartón del tamaño de un billete. Cada casilla de la tarjeta significaba una respuesta —hombre o mujer, casado o soltero, nacido dentro o fuera del país— y un operario la perforaba con una pinza según lo que dijera el cuestionario. Después la tarjeta se metía en una máquina con una prensa llena de agujas: donde había agujero, la aguja pasaba, tocaba una gota de mercurio y cerraba un circuito eléctrico que hacía avanzar una aguja de contador. Cada tarjeta tardaba unos segundos.",
        destacado: { tipo: "frase", frase: "Donde había agujero pasaba la aguja y cerraba el circuito." },
      },
      {
        rotulo: "Seis semanas",
        texto:
          "El recuento básico de población, sesenta y dos millones de personas, estuvo listo en seis semanas, y el censo completo, con todos sus cruces, en dos años y medio en lugar de ocho. Además permitía algo nuevo: hacer preguntas combinadas sin volver a empezar, poniendo un tope metálico para que solo contaran las tarjetas que cumplieran dos o tres condiciones a la vez. La oficina había dejado de contar personas para empezar a analizarlas. El ingeniero alquiló sus máquinas en lugar de venderlas, y así cobró por cada censo del mundo que las usó.",
        destacado: { tipo: "cifra", cifra: "6", unidad: "semanas frente a ocho años" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una empresa. La compañía que fundó para explotar aquellas máquinas se fusionó en 1911 con otras tres y en 1924 cambió de nombre para llamarse Máquinas de Negocios Internacionales, que es la que todo el mundo conoce por sus tres iniciales. Quedaron también las tarjetas perforadas, que fueron el soporte principal de la informática durante setenta años, hasta los años setenta del siglo XX. Y quedó una idea que hoy es evidente y entonces no: si consigues escribir a la gente en un formato que una máquina entienda, ya no hace falta leer los papeles.",
      },
    ],
  },
  {
    id: "la-paradoja-del-reparto",
    titulo: "Sumar y perder",
    gancho: "El censo reparte escaños con una fórmula, y en 1880 se descubrió que la fórmula hacía cosas absurdas.",
    categoria: "Censos",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una hoja de cálculo manuscrita con columnas de números y correcciones a lápiz.",
    entrada:
      "Estados Unidos, 1880. Después de cada censo hay que repartir los escaños de la cámara baja entre los estados en proporción a su población, y como los escaños son números enteros y las proporciones casi nunca lo son, hace falta una regla acordada para redondear. Parece un asunto de aritmética elemental. Un funcionario que prepara las tablas prueba a calcular el reparto con distintos tamaños de cámara, por si conviene ampliarla, y se encuentra con un resultado que no tiene ningún sentido y que no consigue explicarse. Con un escaño más para repartir, un estado se quedaba con menos escaños.",
    paginas: [
      {
        rotulo: "El absurdo",
        texto:
          "Con una cámara de doscientos noventa y nueve escaños, a un estado del sur le correspondían ocho. Con trescientos escaños, es decir, con un asiento más para repartir entre todos, a ese mismo estado le correspondían siete. Aumentar el tamaño total del reparto le hacía perder uno. No había ningún error de cálculo: el efecto salía de la propia regla de redondeo, que asignaba primero la parte entera y repartía los restantes según qué estados tenían el decimal más alto, y esos decimales cambian de forma irregular al cambiar el divisor.",
        destacado: { tipo: "frase", frase: "Con un escaño más para repartir, ese estado perdía uno." },
      },
      {
        rotulo: "Elegir la regla",
        texto:
          "El hallazgo abrió un siglo de discusión política disfrazada de discusión matemática, porque cada método de redondeo favorece sistemáticamente a los estados grandes o a los pequeños, y en el Congreso todo el mundo sabía a quién convenía cada uno. Se cambió de método varias veces según quién mandaba. En 1929 se fijó el tamaño de la cámara en cuatrocientos treinta y cinco escaños para acabar con parte del problema, y en 1941 se adoptó el método que sigue en vigor, que reparte según una media entre dos números consecutivos.",
        destacado: { tipo: "cifra", cifra: "435", unidad: "escaños fijos desde 1929" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó demostrado, ya en el siglo XX, algo más incómodo: no existe ningún método de reparto que cumpla a la vez todas las condiciones razonables que se le pedirían. Siempre se puede construir un caso en el que la regla haga algo que parece injusto. La elección del método, por tanto, no es un problema técnico con solución óptima, sino una decisión política que hay que tomar antes de conocer los números. Todo esto se descubrió porque un funcionario, preparando unas tablas después de un censo, se molestó en probar con un escaño más.",
      },
    ],
  },
];
