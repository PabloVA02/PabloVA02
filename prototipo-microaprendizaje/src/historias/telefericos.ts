import type { Short } from "../shorts";

/* ==========================================================================
   Los teleféricos.

   Colgar cabinas de un cable y cruzar valles enteros sin tocar el suelo. El
   tema se estropea si se cuenta como atracción turística: nació para bajar
   mineral y sigue siendo, en muchos sitios, transporte público.

   La regla del tema: se explica el CABLE y lo que aguanta, porque todo el
   asunto depende de una cuerda de acero y de un contrapeso. Y se cuenta
   siempre para qué se usa de verdad en cada sitio, con cifras de pasajeros
   o de toneladas.
   ========================================================================== */

export const TELEFERICOS: Short[] = [
  {
    id: "bajar-mineral-por-el-aire",
    titulo: "Los cables llevaban piedra",
    gancho: "En la montaña, un cable en línea recta sustituye a una carretera de veinte kilómetros llena de curvas.",
    categoria: "Teleféricos",
    color: "var(--slate)",
    encargo: "Una torre metálica de cable aéreo en una ladera con niebla.",
    fotos: [
      {
        archivo: "Fansipan cable car misty mountain valley Sa Pa Vietnam.png",
        autor: "Dos cabinas cruzando el valle de Sa Pa, en el norte de Vietnam, por encima de los arrozales en bancales.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Fansipan_cable_car_misty_mountain_valley_Sa_Pa_Vietnam.png",
        foco: "50% 45%",
        alt: "Dos cabinas colgadas de un cable atraviesan un valle enorme de laderas verdes y terrazas amarillas.",
      },
      {
        archivo: "Rothornbahn Tal Lenzerheide.jpg",
        autor: "El cable del Rothorn sobre el valle de Lenzerheide, en Suiza. Fotografía de Andres Passwirth.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Rothornbahn_Tal_Lenzerheide.jpg",
        foco: "50% 50%",
        alt: "Una cabina suspendida sobre un valle alpino, con el cable tendido en línea recta entre dos laderas.",
      },
      {
        archivo: "Stubnerkogelbahn1.JPG",
        autor: "El teleférico del Stubnerkogel, en Austria, en invierno. Fotografía de Wald1siedel.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Stubnerkogelbahn1.JPG",
        foco: "50% 50%",
        alt: "Una cabina roja subiendo por el cable entre laderas nevadas y torres metálicas.",
      },
      {
        archivo: "Stubnerkogel11.JPG",
        autor: "La estación alta del mismo teleférico, a más de dos mil metros. Fotografía de Wald1siedel.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Stubnerkogel11.JPG",
        foco: "50% 50%",
        alt: "Una plataforma nevada en la cima con la maquinaria del cable y las montañas alrededor.",
      },
    ],
    entrada:
      "Alpes y zonas mineras europeas, siglo XIX. Bajar mineral desde una mina de montaña resulta carísimo por una razón muy simple: hay que abrir un camino, mantenerlo abierto todo el año, y aun así las mulas o los carros tardan horas en cada viaje y solo llevan lo que llevan. La solución que acaba imponiéndose no es un camino mejor, sino ninguno: tender un cable de acero entre la mina y el valle y colgar de él vagonetas que bajan solas por su propio peso mientras arrastran hacia arriba a las vacías.",
    paginas: [
      {
        rotulo: "El peso que baja",
        texto:
          "El principio es de una economía admirable. Si el material va cuesta abajo, el trabajo lo hace la gravedad. Las vagonetas cargadas que descienden tiran del cable y arrastran hacia arriba a las vacías, así que el sistema se mueve prácticamente solo. A veces incluso sobra energía, y se aprovecha con un freno o con un generador. Solo hace falta un motor cuando el balance se invierte. Un cable no necesita explanar terreno, ni hacer curvas, ni respetar pendientes máximas, así que cruza barrancos en línea recta y baja donde ningún camino podría.",
        destacado: { tipo: "frase", frase: "Lo que baja cargado tira de lo que sube vacío." },
      },
      {
        rotulo: "El salto a pasajeros",
        texto:
          "Llevar personas exigió otra cosa: seguridad demostrable. Los primeros teleféricos de pasajeros se abrieron en los Alpes a comienzos del siglo XX y tuvieron que resolver el frenado, los cables de repuesto y los sistemas de rescate. Hoy se distinguen dos familias. En unas instalaciones el mismo cable sostiene y tira, con cabinas pequeñas que se enganchan y desenganchan en las estaciones. En otras hay un cable fijo que hace de raíl y otro más fino que tira de la cabina, lo que permite vagones grandes y aguanta mejor el viento.",
        destacado: { tipo: "cifra", cifra: "2", unidad: "cables: uno sostiene y otro tira" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron miles de instalaciones en montaña y una idea que ha vuelto por otro lado. Varias ciudades latinoamericanas han montado teleféricos como transporte público urbano para conectar barrios encaramados en laderas, donde un autobús tardaría una hora en subir dando vueltas. Alguna de esas líneas mueve decenas de miles de pasajeros al día y ha reducido a la mitad el tiempo de viaje de barrios enteros. Es probablemente el único caso en que un aparato pensado para llevar esquiadores a la cima se ha convertido en una línea más de la red de transporte público.",
      },
    ],
  },
  {
    id: "el-cable-de-acero",
    titulo: "El cable son hilos",
    gancho: "Cientos de alambres finos enrollados aguantan mucho más que una barra maciza del mismo grosor, y avisan antes de romperse.",
    categoria: "Teleféricos",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un cable de acero grueso cortado, con los hilos abiertos como un pincel.",
    fotos: [
      {
        archivo: "Old mooring steel wire rope.jpg",
        autor: "Cable de acero de amarre de seis centímetros de grueso, con los cordones bien visibles.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AOld%20mooring%20steel%20wire%20rope.jpg",
        foco: "50% 50%",
        alt: "Cable de acero oxidado muy grueso, cruzando la imagen en diagonal sobre rocas de granito rosado.",
      },
      {
        archivo: "Steel wire rope on a drum.jpg",
        autor: "Cable de acero enrollado en el tambor de un cabrestante de remolcador.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ASteel%20wire%20rope%20on%20a%20drum.jpg",
        foco: "50% 50%",
        alt: "Vueltas de cable de acero apretadas unas contra otras sobre el tambor de un torno.",
      },
      {
        archivo: "Close-up of wire rope assembly, Jardim da Fundação Calouste Gulbenkian, Lisbon, Portugal julesvernex2.jpg",
        autor: "Anclaje y terminal de un cable de acero, en Lisboa.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AClose-up%20of%20wire%20rope%20assembly%2C%20Jardim%20da%20Funda%C3%A7%C3%A3o%20Calouste%20Gulbenkian%2C%20Lisbon%2C%20Portugal%20julesvernex2.jpg",
        foco: "50% 50%",
        alt: "Extremo de un cable de acero sujeto con abrazaderas metálicas y un tensor.",
      },
      {
        archivo: "Bremerhaven, Atlantic Hotel Sail City, Seilkonstruktion -- 2024 -- 2287.jpg",
        autor: "Estructura de cables de acero en el mirador del Sail City de Bremerhaven.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ABremerhaven%2C%20Atlantic%20Hotel%20Sail%20City%2C%20Seilkonstruktion%20--%202024%20--%202287.jpg",
        foco: "50% 50%",
        alt: "Haz de cables de acero tensados en abanico contra el cielo, sujetos a una estructura metálica.",
      },
    ],
    entrada:
      "Alemania, 1834. Un inspector de minas está harto de que las cuerdas de cáñamo y las cadenas de hierro se rompan al subir vagonetas por los pozos, con las muertes que eso provoca. Se le ocurre trenzar alambres finos de hierro formando una cuerda metálica, y prueba el invento en su propia mina. Aquel primer cable, trenzado casi a mano, es el antepasado directo de todos los que se usan hoy: los de los ascensores, los de los puentes colgantes, los de las grúas del puerto y los de cualquier telecabina de esquí.",
    paginas: [
      {
        rotulo: "Por qué trenzado",
        texto:
          "Una barra maciza de acero aguanta mucho tirando de ella, pero se parte de golpe y no se puede doblar alrededor de una polea sin fatigarse. Un cable trenzado resuelve las dos cosas. Al estar hecho de muchos hilos finos enrollados en espiral, se dobla con facilidad y reparte el esfuerzo entre todos. Y además falla poco a poco: los alambres se van rompiendo de uno en uno, asoman por fuera y se pueden contar. Eso permite retirar el cable mucho antes de que llegue a ceder, que es justo lo que no ocurría con las cadenas de hierro.",
        destacado: { tipo: "frase", frase: "Falla poco a poco, y los hilos rotos se ven asomar." },
      },
      {
        rotulo: "La revisión",
        texto:
          "De ahí sale toda la seguridad de estas instalaciones. Los cables se revisan a la vista y con aparatos magnéticos que detectan hilos rotos en el interior, donde el ojo no llega. Los límites están fijados por escrito: si en un tramo determinado aparecen más roturas de las permitidas, el cable se cambia entero. Los empalmes se hacen destrenzando los dos extremos y entrelazando los hilos a lo largo de varios metros. Es un trabajo manual de días, hecho por una cuadrilla especializada, y el resultado no debe engordar el cable ni un milímetro.",
        destacado: { tipo: "cifra", cifra: "1834", unidad: "el año del primer cable de acero" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una pieza que sostiene medio mundo moderno sin que nadie repare nunca en ella, porque casi siempre está a la vista y no la mira nadie. El mismo tipo de cable levanta los ascensores, sujeta los puentes colgantes, mueve las grúas de puerto y amarra los barcos. En todos esos usos la ventaja es la misma que en 1834: se dobla, reparte la carga y avisa antes de romperse. Quedó también el oficio de quien lo empalma a mano, tan artesanal que sigue aprendiéndose de la única manera posible: trabajando al lado de alguien que ya sabe hacerlo.",
      },
    ],
  },
  {
    id: "el-rescate-en-el-aire",
    titulo: "El plan para bajarte",
    gancho: "Si falla el motor y el de emergencia, hay que descolgar a la gente una por una desde la propia cabina.",
    categoria: "Teleféricos",
    color: "var(--plum)",
    encargo: "Una cabina detenida sobre un valle, vista desde abajo contra el cielo.",
    entrada:
      "Estaciones de montaña de todo el mundo, con normas europeas desde los años setenta. Una instalación de cable tiene siempre varios motores: el principal, uno de reserva y a veces un motor de combustión independiente para poder mover la línea aunque se caiga la electricidad de la comarca. Aun así, la ley obliga a tener previsto qué pasa si todo eso falla.",
    paginas: [
      {
        rotulo: "Bajar uno a uno",
        texto:
          "El plan de evacuación consiste en llegar hasta cada cabina y descender a los pasajeros con cuerdas. Los equipos de rescate suben por el propio cable con un carro especial, o llegan desde el suelo si el terreno lo permite. Una vez en la cabina, la abren y van bajando a la gente con un arnés hasta el suelo, muchas veces en pendiente y con nieve. Es lento por definición: la normativa suele exigir que se pueda evacuar a todo el mundo en unas pocas horas, y por eso se ensaya con simulacros periódicos.",
        destacado: { tipo: "cifra", cifra: "3", unidad: "horas suele ser el plazo de evacuación" },
      },
      {
        rotulo: "Lo que puede fallar",
        texto:
          "Los accidentes graves de teleféricos son raros y casi siempre tienen una causa concreta y evitable. En varios casos famosos falló el mantenimiento, alguien manipuló un freno de emergencia para que dejara de dar avisos molestos o se saltó una revisión programada por ahorrar tiempo. Por eso el sector funciona con inspecciones obligatorias, con registros de las horas de uso de cada pieza y con la sustitución preventiva de componentes que todavía parecen estar en buen estado. La regla del oficio es clara: se cambia por calendario y por horas trabajadas, nunca por el aspecto que tenga la pieza.",
        destacado: { tipo: "frase", frase: "Se cambian piezas por calendario, no por cómo se ven." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una estadística que sorprende a quien tiene miedo a subirse. Por kilómetro recorrido, el transporte por cable es uno de los medios más seguros que existen, muy por delante del coche. Quedó también una imagen conocida: la de los pasajeros esperando dentro de una cabina parada por el viento, que es con diferencia la causa más frecuente de detención. Y quedó el protocolo de rescate, que se ensaya cada temporada con voluntarios haciendo de pasajeros. Bajan de verdad, colgados de un arnés sobre el valle, para comprobar que los tiempos se cumplen.",
      },
    ],
  },
];
