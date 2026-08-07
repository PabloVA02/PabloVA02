import type { Short } from "../shorts";

/* ==========================================================================
   Redes sociales.

   El tema con más riesgo de sermón de todo el catálogo: los jóvenes, la
   atención, la manipulación. Todo el mundo tiene ya una opinión y nadie
   necesita otra.

   La regla del tema: se cuenta la DECISIÓN DE DISEÑO. Un profesor que
   propone dos puntos y un paréntesis. Un diseñador que quita el botón de
   siguiente página. Una empresa que borra los perfiles con nombre falso.
   Cosas concretas, con fecha, tomadas por gente con nombre y despacho, no
   fuerzas abstractas que nos manejan.

   Y cuando alguien se ha arrepentido en público, se dice qué dijo y ya.
   ========================================================================== */

export const REDES: Short[] = [
  {
    id: "primer-emoticono",
    titulo: "Un bulo trajo el emoticono",
    gancho: "En un foro universitario discutían si un aviso de mercurio derramado iba en serio.",
    categoria: "Redes",
    color: "var(--slate)",
    curioso: true,
    encargo: "Una pantalla verde de terminal antigua con dos puntos, un guion y un paréntesis.",
    fotos: [
      {
        archivo: "TSD Computer -,Schreib und Bürotechnik DEC ASCII Computer-Terminal digital VT 100.jpg",
        autor: "Un terminal DEC VT100, de los que se usaban para escribir en los tablones de aquellos años. Fotografía de NoRud.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:TSD_Computer_-,Schreib_und_B%C3%BCrotechnik_DEC_ASCII_Computer-Terminal_digital_VT_100.jpg",
        foco: "50% 45%",
        alt: "Un terminal de ordenador de carcasa color crema con pantalla apagada y teclado negro, sobre una mesa de madera.",
      },
      {
        archivo: "Adler Typewriter Keyboard Close-up.jpg",
        autor: "El teclado de una máquina de escribir Adler, con los signos de puntuación en la fila de arriba. Fotografía de Maksym Kozlenko.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Adler_Typewriter_Keyboard_Close-up.jpg",
        foco: "50% 55%",
        alt: "Teclado negro de máquina de escribir visto desde arriba, con las teclas de puntuación y paréntesis a la vista.",
      },
      {
        archivo: "Magnetic tape library at USDA.jpg",
        autor: "Un almacén de cintas magnéticas de copia de seguridad, Departamento de Agricultura de Estados Unidos, 1966.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Magnetic_tape_library_at_USDA.jpg",
        foco: "50% 40%",
        alt: "Pasillo estrecho entre estanterías llenas de bobinas de cinta magnética, con tres hombres al fondo.",
      },
      {
        archivo: "Emoji bales (36765488293).jpg",
        autor: "Balas de forraje envueltas y pintadas como emoticonos. Fotografía de Tony Hisgett, 2017.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Emoji_bales_(36765488293).jpg",
        foco: "50% 50%",
        alt: "Seis balas redondas envueltas en plástico lila, apiladas en pirámide y pintadas con caras sonrientes.",
      },
    ],
    entrada:
      "Estados Unidos, 1982. En el tablón electrónico de una universidad, un sitio donde profesores y estudiantes de informática dejan mensajes escritos que lee todo el departamento, se discute un problema muy práctico. En un texto sin cara ni voz no hay manera de distinguir una broma de un aviso serio, y la confusión ya ha dado algún disgusto: alguien colgó una advertencia falsa sobre un derrame de mercurio en un ascensor del edificio, escrita con toda la seriedad del mundo, y varios profesores se la creyeron y evacuaron. El hilo que se abre a continuación busca una solución sencilla.",
    paginas: [
      {
        rotulo: "La propuesta",
        texto:
          "El hilo se llenó de ideas para marcar los chistes: un asterisco, un signo especial, una palabra convenida al final del mensaje. Un profesor de informática escribió el 19 de septiembre de 1982 una propuesta con dos puntos, un guion y un paréntesis, y explicaba que había que leerlo girando la cabeza hacia un lado. Añadía que, ya puestos, salía más económico marcar los mensajes que no eran broma, y proponía el mismo símbolo con el paréntesis al revés. En pocos días se usaba en los tablones de otras universidades del país.",
        destacado: { tipo: "frase", frase: "Había que leerlo girando la cabeza hacia un lado." },
      },
      {
        rotulo: "Los dos caminos",
        texto:
          "El mensaje original se dio por perdido durante años, hasta que en 2002 alguien rescató unas cintas de copia de seguridad de aquella época y lo encontró, con su fecha y su hora exactas. Mientras tanto la idea había seguido dos caminos distintos: en Occidente los emoticonos se leían de lado y describían la boca, mientras que en Japón se escribían en horizontal y se centraban en los ojos, porque allí se considera que la expresión está sobre todo en la mirada. Fueron dos familias de símbolos que convivieron veinte años.",
        destacado: { tipo: "cifra", cifra: "1982", unidad: "el año del primer emoticono documentado" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "En 1999, una operadora japonesa encargó a un empleado un juego de ciento setenta y seis dibujos diminutos para su servicio de internet móvil, cada uno de doce por doce puntos: de ahí salieron los emojis, que son otra cosa distinta y acabaron comiéndose a los emoticonos. Hoy los aprueba un comité internacional que decide cada año qué dibujos entran en el estándar y cuáles se quedan fuera. Y el problema que planteaba aquel profesor en 1982 sigue sin resolverse: seguimos discutiendo si un mensaje iba en serio o no.",
      },
    ],
  },

  {
    id: "scroll-infinito",
    titulo: "El inventor del scroll infinito pidió perdón",
    gancho: "Quitó el botón de siguiente página para hacerlo más cómodo. Y quitó el sitio donde parar.",
    categoria: "Redes",
    color: "var(--plum)",
    encargo: "Un pulgar deslizando sobre una pantalla de móvil borrosa en la oscuridad.",
    entrada:
      "Estados Unidos, 2006. Las páginas web muestran los resultados en tandas, con un botón al final para pasar a la siguiente. Un diseñador de interfaces de veintitrés años propone quitar ese botón y cargar el contenido siguiente de forma automática cuando el usuario llega abajo del todo. Le parece una mejora evidente de comodidad.",
    paginas: [
      {
        rotulo: "El freno que falta",
        texto:
          "La idea era buena por lo que resolvía: el botón obligaba a esperar una recarga y cortaba la lectura en seco. Lo que no se calculó fue lo que quitaba. El final de una página es lo que los psicólogos llaman una señal de parada, un momento en el que uno decide si sigue o lo deja, igual que el fondo de un plato o el final de un capítulo. Sin esa señal, la decisión de dejarlo no llega sola: hay que tomarla activamente contra una corriente que no se detiene nunca. Las redes lo adoptaron enseguida.",
        destacado: { tipo: "frase", frase: "El final de una página es un sitio donde decidir si sigues." },
      },
      {
        rotulo: "El arrepentimiento",
        texto:
          "Su autor ha explicado varias veces en público que se arrepiente, y ha calculado por encima que el invento consume del orden de doscientas mil vidas humanas al día si se suman los minutos de más de todos los usuarios del mundo. Fundó después un centro dedicado a estudiar cómo la tecnología capta la atención. No es el único caso: el creador del botón de me gusta ha contado algo parecido en varias entrevistas, y bastantes diseñadores de aquella época han acabado poniéndose ellos mismos limitadores de tiempo en el teléfono o borrando las aplicaciones que ayudaron a construir.",
        destacado: { tipo: "cifra", cifra: "2006", unidad: "el año en que desapareció el botón" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El mecanismo está hoy en casi todas las aplicaciones que se usan a diario, combinado con otro préstamo del mundo del juego: la recompensa impredecible, que consiste en que a veces aparezca algo interesante y a veces no, igual que en una máquina tragaperras. Varios países han empezado a legislar sobre estos diseños, y algunas aplicaciones ofrecen ya un aviso al cabo de un rato de uso. Es un aviso opcional, que se puede desactivar. El botón de siguiente página, en cambio, paraba solo, venía puesto de fábrica y no había que acordarse de activarlo cada cierto tiempo.",
      },
    ],
  },

  {
    id: "primera-red-social",
    titulo: "La primera red social se hundió por lenta",
    gancho: "Llegó al millón de usuarios antes que nadie y tardaba medio minuto en abrir un perfil.",
    categoria: "Redes",
    color: "var(--clay)",
    encargo: "Un ordenador de sobremesa de principios de siglo con una página cargando a medias.",
    entrada:
      "Estados Unidos, 2002. Un ingeniero lanza una página donde la gente crea un perfil, sube fotos y se conecta con sus amigos. En pocos meses tiene un millón de usuarios y sale en las portadas de las revistas de negocios; un buscador enorme intenta comprarla por treinta millones de dólares y el fundador dice que no.",
    paginas: [
      {
        rotulo: "La lentitud",
        texto:
          "El problema era técnico y no se resolvió a tiempo. Cada vez que alguien cargaba una página, el sistema recalculaba desde cero todas las conexiones para mostrar a qué distancia estaba uno de cada persona, y con un millón de perfiles aquello tardaba veinte o treinta segundos, cuando no se caía del todo. Los ingenieros pidieron parar y reconstruir el sistema desde los cimientos; la dirección prefirió seguir añadiendo funciones nuevas. Los usuarios se acostumbraron a esperar frente a una pantalla en blanco, que es lo que nadie hace en internet.",
        destacado: { tipo: "cifra", cifra: "30", unidad: "segundos para cargar un perfil" },
      },
      {
        rotulo: "Los perfiles falsos",
        texto:
          "Al mismo tiempo se libró una guerra interna. La página exigía usar el nombre real y borraba los perfiles de personajes inventados, de bandas de música y de mascotas, que eran justo lo que más divertía a la gente; llegó a eliminar decenas de miles de cuentas de golpe, y los usuarios se lo tomaron como una traición en toda regla. Otras redes que llegaron detrás hicieron lo contrario y dejaron a cada uno presentarse como quisiera. En 2004 apareció una página universitaria rápida y cerrada por campus, y el vuelco fue cuestión de meses.",
        destacado: { tipo: "frase", frase: "Borró decenas de miles de perfiles por no usar nombre real." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Se vendió en 2005 por veinte millones de dólares, menos de lo que le habían ofrecido tres años antes, y desapareció del mapa en poco tiempo. En el sector se estudia como el caso de manual de que en internet llegar el primero no sirve de nada si el producto va lento, y de que una comunidad se rompe en cuanto se le prohíbe hacer aquello que la divertía. Su fundador contó después que lo que más le dolió no fue perder, sino ver funcionando en otras páginas todas las ideas que él había tenido primero.",
      },
    ],
  },
];
