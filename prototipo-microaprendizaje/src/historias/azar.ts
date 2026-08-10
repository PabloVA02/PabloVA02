import type { Short } from "../shorts";

/* ==========================================================================
   Azar.

   Probabilidad, apuestas y suerte. El riesgo del tema es la clase de
   matemáticas: fórmulas, porcentajes y ejemplos con bolas de colores que
   se olvidan al pasar de pantalla.

   La regla del tema: siempre hay ALGUIEN JUGÁNDOSE DINERO. Un aristócrata
   que no sabe cómo repartir el bote, una sala de casino apostando contra
   la aritmética, un contable que compra siete millones de boletos. La
   probabilidad no nació en una pizarra, nació en una mesa de juego, y se
   entiende mejor si se cuenta con el dinero encima de la mesa.

   Y el resultado se traduce siempre a lenguaje corriente, sin fórmulas.
   ========================================================================== */

export const AZAR: Short[] = [
  {
    id: "probabilidad-partida-cortada",
    titulo: "La partida se interrumpió",
    gancho: "Un jugador preguntó cómo repartir el bote si la partida se corta. Dos matemáticos se escribieron.",
    categoria: "Azar",
    color: "var(--ochre)",
    encargo: "Unos dados antiguos de hueso y unas monedas sobre un tapete gastado.",
    fotos: [
      {
        archivo: "David Teniers - Card Players L08033-21-lr-1.jpg",
        autor: "Jugadores de cartas en una taberna, óleo de David Teniers el Joven, siglo XVII.",
        licencia: "Dominio público",
        pdPorEdad: 1690,
        fuente: "https://commons.wikimedia.org/wiki/File:David_Teniers_-_Card_Players_L08033-21-lr-1.jpg",
        foco: "50% 55%",
        alt: "Cuatro hombres alrededor de una mesa baja de taberna, con las cartas en la mano y una jarra de barro en el suelo.",
      },
      {
        archivo: "FR-631136102 GRA 6025 Portrait de Blaise Pascal par Edelinck.jpg",
        autor: "Retrato de Blaise Pascal grabado a buril por Gérard Edelinck hacia 1691.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:FR-631136102_GRA_6025_Portrait_de_Blaise_Pascal_par_Edelinck.jpg",
        foco: "50% 30%",
        alt: "Un grabado de un hombre joven de melena larga y gesto grave, dentro de un óvalo.",
      },
      {
        archivo: "Corbridge Roman Town Museum, Gaming board and counters, bone dice and shaker - geograph.org.uk - 7849634.jpg",
        autor: "Tablero de juego romano con sus fichas, dados de hueso y cubilete. Museo de Corbridge, Inglaterra. Fotografía de Michael Garlick.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Corbridge_Roman_Town_Museum,_Gaming_board_and_counters,_bone_dice_and_shaker_-_geograph.org.uk_-_7849634.jpg",
        foco: "50% 50%",
        alt: "Un tablero cuadriculado antiguo con fichas redondas de dos colores, varios dados pequeños y un cubilete.",
      },
      {
        archivo: "Edvard Munch - At the Roulette Table in Monte Carlo - Google Art Project.jpg",
        autor: "En la mesa de ruleta de Montecarlo, óleo de Edvard Munch, 1892.",
        licencia: "Dominio público",
        pdPorEdad: 1944,
        fuente: "https://commons.wikimedia.org/wiki/File:Edvard_Munch_-_At_the_Roulette_Table_in_Monte_Carlo_-_Google_Art_Project.jpg",
        foco: "50% 50%",
        alt: "Una escena pintada a brochazos sueltos con muchas figuras inclinadas sobre el tapete verde de una ruleta.",
      },
    ],
    entrada:
      "Francia, 1654. Un aristócrata aficionado al juego lleva tiempo dándole vueltas a un problema de mesa que nadie de su entorno sabe resolver de manera convincente. Si dos jugadores apuestan la misma cantidad a ganar tres rondas y la partida se interrumpe cuando uno va dos a uno, ¿cómo hay que repartir el dinero que hay encima de la mesa? La pregunta parece de tahúr y es de matemáticas. Termina planteándosela por carta a un matemático conocido, y de aquella correspondencia sale una de las herramientas más útiles que se han inventado nunca.",
    paginas: [
      {
        rotulo: "Las cartas",
        texto:
          "La pregunta llevaba dos siglos rondando por Europa y las respuestas que se daban eran chapuzas: repartir según las rondas ya ganadas, o dárselo todo al que iba por delante. El matemático se la pasó a otro, un juez del sur de Francia aficionado a los números, y durante el verano de 1654 se cruzaron media docena de cartas. Llegaron los dos a la misma idea, y era una idea nueva: lo que hay que repartir no es lo ya jugado, sino lo que quedaba por jugar. Es decir, contar de cuántas maneras podría haber terminado la partida y ver en cuántas gana cada uno.",
        destacado: { tipo: "frase", frase: "No se reparte lo jugado: se reparte lo que quedaba por jugar." },
      },
      {
        rotulo: "El futuro contado",
        texto:
          "Aquello parece un detalle y no lo es. Hasta entonces el azar se consideraba cosa de los dioses o de la suerte, algo sobre lo que no cabía calcular nada; a partir de esas cartas pasó a ser un objeto con reglas, medible con un número entre cero y uno. En pocos años apareció el primer tratado impreso sobre el asunto, y en unas décadas la idea saltó de la mesa de juego a sitios donde importaba mucho más: cuánto cobrar por asegurar un barco, cuánto dinero guardar para pagar pensiones, qué probabilidad tiene un recién nacido de llegar a los cincuenta años.",
        destacado: { tipo: "cifra", cifra: "1654", unidad: "el verano en que nació el cálculo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Ninguno de los dos publicó nada sobre el tema: las cartas circularon entre conocidos y así se difundió. El que empezó la conversación tuvo poco después una experiencia religiosa que lo apartó de las matemáticas, y acabó usando su propio invento para un argumento famoso sobre si conviene creer en Dios, planteado exactamente como una apuesta con ganancias y pérdidas. El otro siguió siendo juez toda su vida y escribiendo teoremas en los márgenes de sus libros. Hoy no hay seguro, medicamento, encuesta ni previsión del tiempo que no venga en línea recta de aquel jugador que quería repartir un bote.",
      },
    ],
  },

  {
    id: "ruleta-veintiseis",
    titulo: "Negro veintiséis veces seguidas",
    gancho: "En un casino, en 1913. La sala se arruinó apostando al rojo porque ya tenía que tocar.",
    categoria: "Azar",
    color: "var(--slate)",
    curioso: true,
    encargo: "Una ruleta antigua fotografiada desde arriba, con la bola quieta en una casilla negra.",
    entrada:
      "Mónaco, 18 de agosto de 1913. En el casino más famoso de Europa, una bola de ruleta cae en negro. Vuelve a caer en negro. Y otra vez. Hacia la décima tirada la sala empieza a llenarse de curiosos que apuestan al rojo, convencidos de que la racha tiene que romperse de un momento a otro. La bola sigue cayendo en negro.",
    paginas: [
      {
        rotulo: "La racha",
        texto:
          "Salió negro veintiséis veces seguidas. La probabilidad de que ocurra es de aproximadamente una entre setenta millones, pero ocurre: con las ruletas girando día y noche en cientos de casinos durante décadas, una racha así aparece antes o después en algún sitio. Lo interesante fue lo que pasó en la mesa, que es justo lo contrario de lo que dicta la aritmética. Cuanto más largo se hacía el negro, más dinero se ponía al rojo, y en las últimas tiradas la gente doblaba y triplicaba convencida de que la corrección era inminente. El casino ganó millones de francos aquella noche.",
        destacado: { tipo: "cifra", cifra: "26", unidad: "veces seguidas cayó en negro" },
      },
      {
        rotulo: "El error",
        texto:
          "La bola no se acuerda. Cada tirada es independiente de la anterior, y después de veinticinco negros la probabilidad de que salga rojo sigue siendo prácticamente la mitad, ni un pelo más. La intuición dice lo contrario porque en la vida corriente casi nada es independiente: si lleva lloviendo mucho rato pensamos que escampará, y solemos acertar. Aquella idea equivocada tiene nombre propio desde entonces y se llama la falacia del jugador. Se ha encontrado después en muchos sitios que no son un casino, y algunos con consecuencias bastante serias sobre la vida de la gente.",
        destacado: { tipo: "frase", frase: "La bola no se acuerda de las veinticinco tiradas anteriores." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Se ha medido, por ejemplo, en jueces que resuelven peticiones de asilo una detrás de otra: después de dos concesiones seguidas, la probabilidad de que concedan la tercera baja de forma apreciable, aunque los casos no tengan nada que ver entre sí. Lo mismo se ha visto en árbitros deportivos, en tribunales de oposiciones y en quienes revisan solicitudes de préstamo en un banco. La ruleta de aquella noche de 1913 es el ejemplo que se pone en clase porque es limpio y espectacular, pero el error que la hizo famosa lo cometemos a diario en decisiones donde no hay fichas.",
      },
    ],
  },

  {
    id: "loteria-todas-combinaciones",
    titulo: "Compró la lotería entera",
    gancho: "Ganó catorce botes. En el último movió a dos mil quinientos inversores y siete millones de boletos.",
    categoria: "Azar",
    color: "var(--plum)",
    curioso: true,
    encargo: "Montones de boletos impresos apilados en cajas de cartón abiertas.",
    entrada:
      "Rumanía, 1964. Un contable que cobra unos setenta y cinco dólares al mes quiere sacar a su familia del país y necesita dinero. Se pasa años estudiando cómo funcionan las loterías y llega a una conclusión muy simple: cuando el bote acumulado supera el coste de comprar todas las combinaciones posibles, jugar deja de ser una apuesta.",
    paginas: [
      {
        rotulo: "El método",
        texto:
          "El problema es que las combinaciones son millones y los boletos hay que rellenarlos uno a uno. Desarrolló un sistema para reducir el número de billetes necesarios asegurando de todos modos los premios menores, ganó su primer bote y con ese dinero consiguió salir del país. Después de pasar por Israel se instaló en Australia, donde montó un fondo con inversores: ellos ponían el capital, él ponía el método y una nave llena de impresoras. Ganaron doce veces en distintos sorteos hasta que las leyes locales se cambiaron para impedir la compra de boletos al por mayor.",
        destacado: { tipo: "frase", frase: "Si el bote supera el coste de comprarlo todo, deja de ser azar." },
      },
      {
        rotulo: "El bote grande",
        texto:
          "En 1992 encontró la lotería perfecta en un estado del este de Estados Unidos: solo siete millones de combinaciones, boletos a un dólar, un bote acumulado de veintisiete millones y ninguna norma que impidiera comprarlos todos. Reunió a más de dos mil quinientos inversores, imprimió los boletos por adelantado en Australia, los mandó en cajas por avión y organizó a decenas de personas para entregarlos en tiendas y gasolineras durante tres días seguidos. Se quedaron sin comprar un millón y medio cuando venció el plazo. Aun así, el número premiado estaba entre los suyos.",
        destacado: { tipo: "cifra", cifra: "27", unidad: "millones de dólares en el bote" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Las autoridades investigaron durante meses y no encontraron ninguna ilegalidad: había comprado boletos, que es exactamente lo que una lotería vende. Aun así tardó en cobrar, y a varios inversores les quedó poco después del reparto. Él pasó más tarde una temporada en la cárcel por un asunto distinto de inversiones y hoy vive retirado en una isla del Pacífico. Casi todas las loterías del mundo cambiaron sus reglas después de aquello, ampliando el número de combinaciones y limitando la compra masiva, precisamente para que nadie más pueda hacer la cuenta que él hizo.",
      },
    ],
  },
];
