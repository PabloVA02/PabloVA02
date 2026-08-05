import type { Short } from "../shorts";

/* ==========================================================================
   La linterna.

   Luz que se lleva en la mano. El asunto de fondo siempre es el mismo:
   cuanta energia cabe en una pila y cuanta gasta la bombilla. De esa cuenta
   salen el nombre del aparato, su tamano y su historia entera.

   La regla del tema: se dice SIEMPRE CUANTO DURABA antes de contar lo que
   se hacia con ella. Y toda pieza se explica en palabras llanas antes de
   nombrarla: un led es una pieza que se ilumina al pasarle corriente; el
   polvo que la vuelve blanca hace lo mismo que el de un fluorescente. El
   short del sereno lleva ademas el dato espanol que nadie recuerda.
   ========================================================================== */

export const LINTERNA: Short[] = [
  {
    id: "el-destello",
    titulo: "La linterna solo daba destellos",
    gancho: "Las pilas de 1899 se agotaban en minutos. Había que encenderla a ratitos, y de ahí le viene el nombre.",
    categoria: "Linterna",
    color: "var(--slate)",
    encargo: "Una linterna de tubo de carton de 1900 con la bombilla y la pila a la vista.",
    entrada:
      "Nueva York, 1899. La bombilla eléctrica lleva veinte años funcionando en las casas de las ciudades ricas, pero siempre enchufada a una instalación fija, con su cable y su contador. Para llevar luz en la mano solo hay velas y lámparas de aceite, que se apagan con el viento y gotean. En un establo o en una mina, además, prenden fuego a lo que tocan y son un peligro serio. Ese año, un fabricante junta por primera vez una bombilla pequeña y una pila seca dentro de un tubo de cartón.",
    paginas: [
      {
        rotulo: "A ratitos",
        texto:
          "Aquel invento tenía un problema que hoy parece increíble y que marcó su nombre para siempre. Las pilas secas de la época daban poca corriente y se agotaban en cuestión de minutos de uso seguido. La bombilla, además, era de filamento de carbono, que consume mucho y da una luz amarillenta y débil. Con esa pareja no se podía tener la luz encendida mientras se andaba por la calle. Lo que se hacía era apretar el botón un momento, mirar, soltarlo y seguir a oscuras. Por eso en inglés se llamó luz de destello, y ese nombre le ha quedado hasta hoy.",
        destacado: { tipo: "frase", frase: "Se apretaba un momento, se miraba y se soltaba." },
      },
      {
        rotulo: "El policía",
        texto:
          "El fabricante entendió que aquello no se vendía solo y buscó a quien lo necesitara de verdad. Regaló linternas a los policías de Nueva York, que patrullaban de noche con faroles de aceite. Un farol de aceite tiene dos pegas gordas para un policía: se ve desde lejos y ocupa una mano. La linterna cabía en el bolsillo, se encendía solo cuando hacía falta y no delataba al que la llevaba. Los agentes la adoptaron enseguida y los informes de la policía sirvieron de anuncio gratis. En pocos años el mismo fabricante vendía linternas a mineros, a marinos y a cualquiera que trabajara de noche.",
        destacado: { tipo: "cifra", cifra: "1899", unidad: "el año de la primera linterna" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el nombre en inglés, que sigue diciendo destello aunque hace un siglo que la luz no se interrumpe. Quedó también el formato, porque una linterna sigue siendo un tubo con pilas en fila y una lente delante. Lo que cambió fue lo de dentro, y cambió dos veces. Primero llegaron las pilas alcalinas, que aguantan muchas horas seguidas sin caerse de golpe. Y después llegó la luz de diodo, que da la misma claridad gastando una fracción de la corriente. Una linterna de ahora alumbra días enteros con las mismas pilas que antes duraban un paseo.",
      },
    ],
  },
  {
    id: "la-luz-azul-que-faltaba",
    titulo: "El led azul que faltaba",
    gancho: "Había diodos rojos y verdes desde los años sesenta. Sin el azul no había blanco, y el azul se resistió.",
    categoria: "Linterna",
    color: "var(--plum)",
    encargo: "Un diodo azul encendido muy de cerca, con el resto de la imagen a oscuras.",
    entrada:
      "Japón, años ochenta y noventa del siglo XX. Un led es una pieza pequeña de material semiconductor que se ilumina al pasarle corriente y que gasta poquísimo comparada con una bombilla. Desde los años sesenta se fabrican en rojo y en verde, y son los pilotos que se encienden en los aparatos de casa. El problema es que con rojo y verde no se puede hacer luz blanca, y sin blanco un led sirve para avisar pero no para alumbrar. Falta el azul, y el azul lleva treinta años resistiéndose a todos los laboratorios del mundo.",
    paginas: [
      {
        rotulo: "Por qué el azul",
        texto:
          "La luz blanca no es un color, sino una mezcla de varios que el ojo suma. Con rojo y verde solos se consiguen amarillos y naranjas, pero nunca algo que parezca blanco. Hace falta azul, y el azul es el color de luz que más energía lleva de los tres. Para que un diodo dé una luz de tanta energía hace falta un material muy concreto y muy difícil de fabricar limpio. Durante treinta años los laboratorios probaron compuestos que salían llenos de defectos y apenas alumbraban. Varias empresas grandes abandonaron la línea de investigación por considerarla un pozo sin fondo.",
        destacado: { tipo: "frase", frase: "Con rojo y verde nunca sale algo que parezca blanco." },
      },
      {
        rotulo: "El fósforo",
        texto:
          "El azul llegó a principios de los noventa, de la mano de un investigador de una empresa pequeña japonesa. Trabajaba casi solo, con un horno que él mismo reparaba, y en contra del criterio de su dirección. Con el azul resuelto, el truco para hacer blanco resultó ser más sencillo de lo esperado. Se cubre el diodo azul con un polvo que absorbe parte de esa luz y la devuelve en amarillo. El azul que se escapa y el amarillo que sale del polvo se mezclan y el ojo ve blanco. Es el mismo principio de los tubos fluorescentes, que llevan ese polvo pintado por dentro del cristal.",
        destacado: { tipo: "cifra", cifra: "30", unidad: "años se resistió el azul" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una bombilla que gasta una décima parte que la de toda la vida y dura años encendida. Quedaron las pantallas de móvil, los semáforos, los faros de coche y las linternas, todos con la misma pieza. Quedó un premio Nobel de Física en 2014 para los tres investigadores que lo resolvieron. Y quedó una discusión sobre la luz que antes no existía, porque el led emite mucho azul. Esa parte azul de la luz es la que más despista al reloj interno del cuerpo por la noche. Resolver un problema de treinta años trajo otro que ahora se estudia en los hospitales del sueño.",
      },
    ],
  },
  {
    id: "el-sereno",
    titulo: "El sereno y sus llaves",
    gancho: "En España se daban dos palmadas en la calle y aparecía un hombre con un farol y un manojo de llaves.",
    categoria: "Linterna",
    color: "var(--ochre)",
    encargo: "Un sereno con farol y chuzo en una calle espanola de noche, hacia 1950.",
    entrada:
      "España, desde finales del siglo XVIII hasta los años setenta del XX. Los portales de las ciudades se cerraban por la noche y los vecinos no llevaban llave de la calle, porque hacer una copia para cada inquilino era caro y nadie lo hacía. Quien llegaba tarde se encontraba la puerta cerrada y sin nadie a quien llamar. La ciudad resolvía el problema con un empleado municipal que recorría unas cuantas manzanas toda la noche, con un farol, un chuzo y las llaves de todos los portales de su ronda en el cinturón.",
    paginas: [
      {
        rotulo: "Las palmadas",
        texto:
          "El chuzo era un palo largo rematado en punta de hierro, entre bastón y arma. Servía para apoyarse, para golpear el suelo y para defenderse, y se oía desde lejos. El vecino que llegaba tarde a casa se plantaba en su portal y daba dos palmadas fuertes. El sereno contestaba con un grito para avisar de que iba, y aparecía a los pocos minutos. Abría el portal, cobraba una propina pequeña y volvía a cerrar cuando el vecino había subido. Con eso, un solo hombre hacía de llave, de portero y de vigilante para varios cientos de vecinos.",
        destacado: { tipo: "frase", frase: "Dos palmadas en la calle y contestaba desde la esquina." },
      },
      {
        rotulo: "El oficio",
        texto:
          "El sereno hacía además otras cosas que no estaban en su nombre ni en su sueldo. Cantaba la hora y el tiempo que hacía, que es de donde le viene el nombre. Gritaba sereno cuando la noche estaba despejada, y así el que estaba en la cama sabía la hora. Avisaba de los incendios, acompañaba al médico de guardia y ayudaba a llevar a un enfermo. Conocía a todo el mundo de su ronda, incluidos los horarios, las visitas y las discusiones. Esa mezcla de servicio y vigilancia es la razón de que se le recuerde con cariño y con recelo a la vez.",
        destacado: { tipo: "cifra", cifra: "18", unidad: "el siglo en que aparece el oficio" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el oficio hasta bien entrados los años setenta, cuando lo mataron dos cosas a la vez. Una fue el portero automático, que dejó a cada vecino abriendo desde su casa sin bajar. La otra fue el reparto de llaves de portal, que ya se podían copiar barato y para todos. Quedó la expresión de dar dos palmadas, que sigue usándose sin que casi nadie sepa de dónde viene. Quedaron algunos intentos de recuperarlos como figura turística o de seguridad en barrios concretos. Y quedó una idea que las ciudades siguen buscando: alguien de la calle que conozca la calle.",
      },
    ],
  },
];
