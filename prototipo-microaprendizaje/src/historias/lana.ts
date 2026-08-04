import type { Short } from "../shorts";

/* ==========================================================================
   La lana.

   El primer material industrial de Europa y la base de dos economías
   nacionales enteras. El tema se vuelve gris si se cuenta como historia del
   textil: telares, gremios, aranceles.

   La regla del tema: la lana se cuenta a través de UN OBJETO O UN CAMINO —un
   asiento, una oveja, una vereda de ganado—, y de ahí se sale a la economía
   y a la ley. Y siempre se dice cuánto dinero movía, porque sin la cifra
   parece una historia de pastores y es una historia de Estado.
   ========================================================================== */

export const LANA: Short[] = [
  {
    id: "el-asiento-de-lana",
    titulo: "El presidente británico se sienta sobre lana",
    gancho: "Un saco relleno de lana preside la cámara alta desde el siglo XIV, para que nadie olvide de qué vivía el país.",
    categoria: "Lana",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un asiento grande sin respaldo, tapizado en tela roja, en una sala solemne.",
    entrada:
      "¿Por qué el presidente de la cámara alta británica se sienta en un saco? En el siglo XIV, cuando la lana era la mayor fuente de riqueza de Inglaterra y el impuesto sobre su exportación financiaba las guerras del rey, se colocó en la sala un asiento relleno de lana para recordar a los legisladores de dónde salía el dinero. Ahí sigue.",
    paginas: [
      {
        rotulo: "El negocio",
        texto:
          "La lana inglesa era la mejor materia prima textil de Europa, y durante siglos se exportó en bruto a los talleres de Flandes y de Italia, que la convertían en paño y la vendían cara. El impuesto de salida sobre cada saco fue la principal fuente de ingresos de la corona: financió campañas militares, y varios reyes lo empeñaron por adelantado a banqueros extranjeros para pagar sus guerras. Cuando la corona quiso quedarse con más margen, prohibió exportar lana sin trabajar y atrajo a tejedores flamencos para montar la industria en casa.",
        destacado: { tipo: "frase", frase: "El impuesto sobre la lana pagaba las guerras del rey." },
      },
      {
        rotulo: "El relleno",
        texto:
          "El asiento es un banco grande, cuadrado y sin respaldo, tapizado en tela roja y relleno de lana. En 1938 se descubrió, al abrirlo, que llevaba dentro crin de caballo en lugar de lana, y se rellenó de nuevo con lana traída de varios países de la antigua mancomunidad británica como gesto simbólico. Es un mueble incómodo a propósito, porque quien lo ocupa dirige la sesión y no debe acomodarse. Su nombre en inglés es, literalmente, el saco de lana, y así se llama también, por extensión, al cargo que lo ocupa. Cuando el ocupante quiere intervenir en el debate como un miembro más, tiene que levantarse y apartarse de él.",
        destacado: { tipo: "cifra", cifra: "XIV", unidad: "el siglo en que se puso el saco" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un mueble que es un recordatorio económico convertido en ceremonia, y una tradición parlamentaria que sobrevive a la industria que la explicaba: hoy la lana británica es una parte minúscula de la economía del país y el saco sigue en el centro de la sala. Quedaron también topónimos, apellidos y calles enteras que hablan de aquel negocio, y decenas de iglesias enormes en pueblos pequeños del este de Inglaterra, levantadas con el dinero de los comerciantes de lana y llamadas todavía hoy iglesias de la lana. Son edificios desproporcionados para aldeas de doscientos vecinos, y explican de un vistazo dónde estaba la riqueza del país.",
      },
    ],
  },
  {
    id: "la-oveja-prohibida",
    titulo: "Sacar una oveja de España costaba la vida",
    gancho: "La merina daba la lana más fina del mundo y su exportación estuvo prohibida durante siglos.",
    categoria: "Lana",
    color: "var(--slate)",
    encargo: "Un rebaño de ovejas de lana espesa y rizada en un campo seco.",
    entrada:
      "Castilla, siglos XIV a XVIII. Una raza de oveja produce aquí una lana tan fina que no tiene competencia en Europa, y toda la industria textil del continente la quiere. La corona entiende enseguida el valor de ese monopolio y hace lo que hicieron todos los Estados con sus secretos industriales: prohibir la salida de los animales vivos, con penas durísimas para quien lo intentara.",
    paginas: [
      {
        rotulo: "El pelo fino",
        texto:
          "La ventaja de esa raza está en el grosor de la fibra. Una lana corriente tiene hebras gruesas que pican y solo sirven para paños bastos; la de esta oveja es mucho más fina y ondulada, con lo que se puede hilar delgadísima y produce un tejido suave, ligero y que abriga igual. Cada animal da además un vellón muy denso, con la piel llena de pliegues para tener más superficie. Esa diferencia de unas micras en el pelo valía, en el mercado europeo, varias veces el precio de la lana normal.",
        destacado: { tipo: "frase", frase: "La diferencia estaba en unas micras de grosor del pelo." },
      },
      {
        rotulo: "La fuga",
        texto:
          "El monopolio duró mientras duró la capacidad de vigilarlo. En el siglo XVIII, la corona empezó a regalar rebaños pequeños a otros monarcas europeos como obsequio diplomático, y de ahí salieron los primeros criaderos fuera. Con la invasión napoleónica y el desorden de la guerra, miles de animales cruzaron la frontera sin control. Los que llegaron a Australia y a Sudáfrica encontraron pastos inmensos y clima seco, y en pocas décadas aquellos países se convirtieron en los grandes productores mundiales de lana fina, con España desplazada del mercado que había dominado durante cuatrocientos años.",
        destacado: { tipo: "cifra", cifra: "XVIII", unidad: "el siglo en que se rompió el monopolio" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una raza repartida por el mundo entero: la inmensa mayoría de la lana fina que se vende hoy, incluida la de la ropa deportiva técnica, viene de descendientes de aquellos animales. Quedó en España un rebaño reducido pero conservado, con su denominación propia. Y quedó una historia que se repite con el gusano de seda, con la porcelana y con el caucho: los monopolios basados en un ser vivo acaban rompiéndose siempre, porque basta con que alguien se lleve unos pocos ejemplares y encuentre un sitio donde críen bien.",
      },
    ],
  },
  {
    id: "las-canadas-reales",
    titulo: "Hay caminos de ganado protegidos desde 1273",
    gancho: "Ciento veinticinco mil kilómetros de vías por las que aún pueden pasar ovejas, incluso por el centro de Madrid.",
    categoria: "Lana",
    color: "var(--clay)",
    encargo: "Un camino ancho de tierra entre muros de piedra, con rastro de ganado.",
    entrada:
      "Castilla, 1273. El rey reúne a los ganaderos del reino en una asociación única, con privilegios enormes, y les garantiza por ley el derecho a mover sus rebaños entre los pastos de verano del norte y los de invierno del sur. Para eso se fija una red de caminos de ganado con anchura legal, que nadie puede arar ni cerrar, y que llega a sumar unos ciento veinticinco mil kilómetros.",
    paginas: [
      {
        rotulo: "Ir y volver",
        texto:
          "El motivo es climático. En la península, los pastos de montaña son excelentes en verano y quedan bajo la nieve en invierno, mientras las dehesas del sur se agostan en verano y verdean en invierno. Mover el rebaño entre los dos aprovecha ambos y evita agotar ninguno. Los rebaños caminaban varias semanas, unos veinte kilómetros al día, guiados por pastores que hacían el viaje dos veces al año durante toda su vida. Las vías principales, las más anchas, medían noventa varas, unos setenta y cinco metros de ancho, una medida pensada para que el rebaño pudiera pastar mientras avanzaba sin salirse del camino.",
        destacado: { tipo: "cifra", cifra: "75", unidad: "metros de ancho tiene una cañada real" },
      },
      {
        rotulo: "El conflicto",
        texto:
          "Aquellos privilegios chocaron durante siglos con los agricultores, que veían pasar miles de animales junto a sus campos y no podían cerrar el camino ni cultivarlo. La asociación ganadera tenía además jueces propios para resolver esos pleitos, lo que inclinaba la balanza de su lado. Su poder venía del dinero: la lana era la primera exportación del reino y el impuesto sobre ella una fuente principal de ingresos de la corona. Cuando ese negocio se hundió en el siglo XIX, la asociación se disolvió y muchas vías empezaron a invadirse.",
        destacado: { tipo: "frase", frase: "Los ganaderos tenían jueces propios para sus pleitos." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó la red, protegida hoy por una ley de 1995 que declara las vías pecuarias bienes de dominio público, inalienables e imprescriptibles: no se pueden vender ni se ganan por ocuparlas mucho tiempo. Buena parte está invadida por cultivos, carreteras y urbanizaciones, y hay asociaciones dedicadas a recuperarlas. Y queda una imagen que lo resume todo: cada otoño, un rebaño cruza el centro de la capital por una cañada sobre la que la ciudad se construyó entera, y su pastor paga al ayuntamiento un peaje simbólico en monedas medievales, tal como manda el privilegio de 1273. Los coches esperan.",
      },
    ],
  },
];
