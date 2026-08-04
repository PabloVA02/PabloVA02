import type { Short } from "../shorts";

/* ==========================================================================
   Los andamios.

   La estructura provisional que sostiene al que construye. Nadie la mira y
   sin ella no existiría ningún edificio alto. El tema se estropea si se
   cuenta como curiosidad exótica del bambú y nada más.

   La regla del tema: cada short explica CÓMO SE UNEN LAS PIEZAS, que es
   donde está toda la ingeniería, y qué le pasa al que trabaja encima. El
   andamio siempre acaba hablando de altura, de peso y de caídas.
   ========================================================================== */

export const ANDAMIOS: Short[] = [
  {
    id: "el-andamio-de-bambu",
    titulo: "En Hong Kong los andamios son de bambú",
    gancho: "Rascacielos de acero y cristal levantados desde una estructura de cañas atadas a mano. No es folclore: funciona mejor.",
    categoria: "Objetos",
    color: "var(--slate)",
    encargo: "Fachada de rascacielos cubierta de andamio de cañas de bambú atadas en cruz.",
    entrada:
      "Hong Kong, siglo XXI. En una ciudad de rascacielos de acero y cristal, las obras se rodean de cañas de bambú atadas a mano con cintas de plástico. No es folclore ni ahorro pintoresco, porque el bambú funciona mejor que el metal en ese sitio concreto. Es una tradición china de más de mil años que ha sobrevivido justo donde parecía imposible.",
    paginas: [
      {
        rotulo: "Por qué aguanta",
        texto:
          "Un andamio es la estructura provisional que sostiene a los operarios y sus materiales mientras trabajan en altura. El bambú no es madera, sino una hierba gigante, y su tallo es un tubo hueco con tabiques cada pocos centímetros. Esa forma le da una resistencia enorme para lo poco que pesa, porque un tubo aguanta la flexión mejor que una barra maciza. Además es flexible, y en una ciudad que recibe tifones cada verano eso es decisivo: el andamio se dobla con la ráfaga y vuelve. Una caña la sube un hombre al hombro, mientras que un tubo de acero equivalente necesita grúa. Y cuando la obra termina, el material se reutiliza o se composta.",
        destacado: { tipo: "frase", frase: "Un tubo hueco aguanta la flexión mejor que una barra maciza." },
      },
      {
        rotulo: "El nudo",
        texto:
          "Lo que más sorprende de esos andamios es que no llevan ni un tornillo ni una soldadura. Las cañas se cruzan y se atan con una cinta de nailon que el montador enrolla y aprieta en segundos. Antes se usaban tiras de bambú trenzado, y esa cinta de plástico es la única modernización del oficio. La unión atada tiene una ventaja sobre la atornillada, porque cede un poco y reparte los esfuerzos en lugar de concentrarlos en un punto. Los montadores aprenden con años de práctica y atan con las dos manos a decenas de metros de altura. Es un oficio que se transmite sobre la propia obra, de mayores a jóvenes.",
        destacado: { tipo: "cifra", cifra: "0", unidad: "tornillos lleva el andamio entero" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un oficio que sigue vivo y que a la vez está desapareciendo, porque el gobierno de la ciudad ha empezado a exigir metal en las obras públicas. El motivo es la seguridad, ya que un andamio de bambú depende por completo de que quien lo monta sepa hacerlo. Quedan unos pocos miles de montadores en activo, cada vez con más edad media y con pocos aprendices detrás. Y quedó una lección de ingeniería que no ha caducado, porque un material vegetal, ligero y flexible puede ganarle al acero cuando el problema no es aguantar, sino subirse a pulso y quitarse después.",
      },
    ],
  },
  {
    id: "la-catedral-y-su-andamio",
    titulo: "Las catedrales se construyeron con andamios colgados",
    gancho: "No llegaban desde el suelo: se apoyaban en el propio muro, en agujeros que todavía se ven.",
    categoria: "Objetos",
    color: "var(--clay)",
    encargo: "Muro de iglesia de piedra con hileras de agujeros cuadrados a intervalos regulares.",
    entrada:
      "Europa, siglos XII a XV. Levantar una catedral gótica significaba trabajar a cuarenta metros de altura durante décadas, con piedra de varias toneladas y sin una sola máquina a motor. El problema no era solo subir el material, sino sostener a los canteros mientras tallaban en lo alto. La solución fue un andamio que no llegaba desde el suelo, porque habría hecho falta un bosque entero.",
    paginas: [
      {
        rotulo: "Agujeros en el muro",
        texto:
          "Si se mira de cerca el muro de una iglesia antigua, aparecen hileras de agujeros cuadrados repartidos a intervalos regulares. Son los mechinales, los huecos donde encajaban las vigas horizontales que sostenían el andamio mientras se levantaba la pared. La estructura no subía desde el suelo, sino que se apoyaba en la propia obra y crecía con ella, hilada a hilada. Sobre esas vigas se colocaban tablones, y de ahí trabajaban los canteros, los albañiles y los que subían el mortero. Al terminar se sacaban las vigas y los agujeros se tapaban con piedra o se dejaban a la vista. En muchas iglesias siguen abiertos, y hoy los ocupan los vencejos y las palomas.",
        destacado: { tipo: "frase", frase: "Los agujeros del muro son las huellas del andamio." },
      },
      {
        rotulo: "La rueda de ardilla",
        texto:
          "Para subir la piedra se usaba una grúa movida por una rueda enorme de madera, con un hombre caminando dentro. Cuanto mayor era el diámetro de la rueda, más fuerza multiplicaba, de modo que dos operarios podían izar bloques de media tonelada. La grúa no se quedaba abajo: se montaba sobre las bóvedas ya terminadas y se desmontaba para subirla otro piso. No tenía freno de verdad, así que bajar la carga era más peligroso que subirla y se hacía muy despacio. Todo era de madera, cuerda y hierro, y se armaba y desarmaba tantas veces como pisos tuviera la obra. Algunas de aquellas ruedas siguen en el desván de catedrales que llevan siglos acabadas.",
        destacado: { tipo: "cifra", cifra: "500", unidad: "kilos izaban dos hombres dentro de la rueda" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron los mechinales a la vista en media Europa, que son la prueba de que la obra se construyó desde ella misma. Quedó también el principio, porque una grúa torre moderna sigue haciendo lo mismo: se apoya en el edificio y va creciendo con él. Lo que cambió fue quién aguanta el esfuerzo, ya que el motor eléctrico sustituyó al hombre que caminaba dentro de la rueda. Y quedó la escala del asunto, difícil de imaginar hoy: una catedral tardaba tanto que los canteros que abrían los primeros agujeros no llegaban a ver el andamio que se montaría encima.",
      },
    ],
  },
  {
    id: "el-tubo-y-la-grapa",
    titulo: "El andamio de metal empezó con un enganche",
    gancho: "Antes de 1913 cada andamio se ataba con cuerda y dependía del oficio del montador. Una pieza de hierro acabó con eso.",
    categoria: "Objetos",
    color: "var(--ochre)",
    encargo: "Primer plano de una grapa de andamio agarrando dos tubos de acero en cruz.",
    entrada:
      "Reino Unido, 1913. Los andamios se siguen atando con cuerda, igual que en la Edad Media, y cada obra depende de que el montador sepa hacer bien el nudo. Un empresario del sector se da cuenta de que si las uniones fueran piezas iguales y atornillables, cualquiera podría montar un andamio seguro. Compra tubos de acero baratos y diseña una grapa que los agarra en cruz.",
    paginas: [
      {
        rotulo: "La pieza clave",
        texto:
          "Una grapa de andamio son dos abrazaderas de acero unidas por un perno, que muerden dos tubos y los dejan en ángulo recto. Parece poca cosa y lo cambia todo, porque convierte el andamio en un juego de piezas repetidas. Con cuerda, la resistencia de la unión dependía de la mano de quien ataba y nadie podía calcularla sobre el papel. Con la grapa, un ingeniero sabe cuánto aguanta cada nudo y puede dibujar la estructura antes de que llegue el primer tubo. Además el montaje se vuelve rápido, porque apretar un perno con llave lleva segundos. Los tubos, todos del mismo diámetro, se pueden alquilar, transportar y reutilizar cientos de veces.",
        destacado: { tipo: "frase", frase: "Con cuerda nadie podía calcular cuánto aguantaba el nudo." },
      },
      {
        rotulo: "Caídas y normas",
        texto:
          "El andamio moderno nació cuando caerse de una obra empezaba a considerarse un problema público. Hasta entonces la muerte de un albañil se trataba como mala suerte, y las obras grandes casi contaban con sus víctimas. Las primeras normas obligaron a poner tablones de anchura suficiente, barandillas a la altura de la cintura y un rodapié que impidiera que cayeran herramientas. Ese rodapié explica por qué el andamio bien montado tiene siempre una tabla baja pegada al suelo de la plataforma. Después llegaron la red, el arnés y la obligación de que alguien con formación revisara el montaje. La caída de altura sigue siendo, aun así, la primera causa de muerte en la construcción.",
        destacado: { tipo: "cifra", cifra: "1913", unidad: "el año de la grapa que se sigue usando" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una pieza que sigue siendo casi idéntica a la de hace un siglo, porque no ha habido manera de mejorarla. Quedó también un negocio distinto del que parecía, ya que las grandes empresas del ramo no venden andamios, sino que los alquilan por semanas. Y quedaron dos maneras de resolver el mismo problema conviviendo en el mismo planeta: la caña atada a mano en Hong Kong y el tubo con grapa en casi todas las demás obras. Las dos sostienen a un hombre a cuarenta metros del suelo, que era exactamente lo que hacía falta.",
      },
    ],
  },
];
