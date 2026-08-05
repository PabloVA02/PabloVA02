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
    entrada:
      "Roma, siglo V antes de Cristo. Cada cinco años, dos magistrados elegidos para el cargo hacen el recuento de todos los ciudadanos varones y de sus bienes. No es una estadística: de ese registro dependen cuántos impuestos paga cada uno, en qué unidad del ejército sirve y con cuánto peso vota su grupo en las asambleas. Ser contado y ser clasificado es la misma operación.",
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
    titulo: "Un censo contado con agujeros",
    gancho: "El anterior había tardado ocho años en sumarse. Con máquinas, el nuevo estuvo en seis semanas.",
    categoria: "Censos",
    color: "var(--slate)",
    encargo: "Una tarjeta de cartón con agujeros ordenados en filas y columnas.",
    entrada:
      "Estados Unidos, 1890. El país crece tan deprisa que el censo anterior, el de 1880, tardó ocho años en terminar de sumarse a mano, de modo que los resultados llegaron cuando ya estaban obsoletos. La oficina responsable convoca un concurso para encontrar un método más rápido, y lo gana un ingeniero joven que ha trabajado en el censo anterior y ha visto el problema por dentro.",
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
    titulo: "Sumar escaños hizo perder uno",
    gancho: "El censo reparte escaños con una fórmula, y en 1880 se descubrió que la fórmula hacía cosas absurdas.",
    categoria: "Censos",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una hoja de cálculo manuscrita con columnas de números y correcciones a lápiz.",
    entrada:
      "Estados Unidos, 1880. Tras cada censo hay que repartir los escaños de la cámara baja entre los estados en proporción a su población, y como los escaños son enteros y las proporciones no, hace falta una regla para redondear. Un funcionario que prepara las tablas prueba a calcular el reparto con distintos tamaños de cámara y se encuentra con algo que no tiene sentido.",
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
