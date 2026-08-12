import type { Short } from "../shorts";

/* ==========================================================================
   Los funiculares.

   Dos cabinas atadas al mismo cable que se hacen el peso una a otra. Es un
   truco de equilibrio, no un motor potente, y ahi esta toda la gracia del
   asunto. El tema se estropea si se cuenta como estampa turistica.

   La regla del tema: se dice PRIMERO QUE ES UN FUNICULAR con palabras de
   decir en voz alta (un vagon que sube por una via clavada en la ladera,
   tirado por un cable), y se explica por que no vale un tren normal antes
   de contar la solucion. Ninguna pieza sin traducir: la mordaza son dos
   hierros que muerden el rail. Y se dice quien sube en ellos: vecinos con
   la compra, no solo visitantes con camara.
   ========================================================================== */

export const FUNICULARES: Short[] = [
  {
    id: "dos-cabinas-un-cable",
    titulo: "Sube porque otro baja",
    gancho: "Dos vagones atados al mismo cable se equilibran entre sí. El motor solo tiene que vencer la diferencia de peso.",
    categoria: "Funiculares",
    color: "var(--slate)",
    encargo: "Dos cabinas de funicular cruzandose a media ladera en una via unica.",
    fotos: [
      {
        archivo: "Vevey–Chardonne–Mont Pèlerin funicular railway 01.jpg",
        autor: "La vía del funicular de Vevey a Mont Pèlerin bajando hacia el lago Lemán, en Suiza. Fotografía de Llez.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Vevey%E2%80%93Chardonne%E2%80%93Mont_P%C3%A8lerin_funicular_railway_01.jpg",
        foco: "50% 55%",
        alt: "Una vía de raíles cayendo en línea recta por una ladera, con la ciudad y un lago grande al fondo.",
      },
      {
        archivo: "Vevey–Chardonne–Mont Pèlerin funicular railway 04.jpg",
        autor: "Uno de los dos coches del mismo funicular, con el piso escalonado para ir siempre horizontal. Fotografía de Llez.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Vevey%E2%80%93Chardonne%E2%80%93Mont_P%C3%A8lerin_funicular_railway_04.jpg",
        foco: "50% 50%",
        alt: "Un vagón con el suelo cortado en peldaños subiendo por una vía muy inclinada.",
      },
      {
        archivo: "Caumasee with funicular 20210614.jpg",
        autor: "El pequeño funicular que baja al lago de Cauma, en los Grisones suizos. Fotografía de Daniel Kraft.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Caumasee_with_funicular_20210614.jpg",
        foco: "50% 50%",
        alt: "Un lago de agua turquesa rodeado de bosque, con una vía corta bajando por la ladera hasta la orilla.",
      },
      {
        archivo: "Funicular in Dubuque, Iowa.png",
        autor: "El funicular de Dubuque, en Iowa, que sube apenas noventa metros de cuesta. Fotografía de Funknendai.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Funicular_in_Dubuque,_Iowa.png",
        foco: "50% 50%",
        alt: "Una caseta de madera roja en lo alto de una vía corta y empinada encajada entre casas.",
      },
    ],
    entrada:
      "Suiza y Austria, segunda mitad del siglo XIX. Las ciudades crecen hacia laderas cada vez más empinadas y hace falta subir gente por cuestas donde ningún tranvía puede trepar, porque las ruedas de acero patinan sobre el raíl en cuanto la pendiente se pronuncia. La solución que se inventa entonces se llama funicular: un vagón que sube por una vía de raíles clavada en la ladera, tirado por un cable de acero. Lo curioso, y lo que casi nadie sabe al montarse, es de dónde saca la fuerza para subir.",
    paginas: [
      {
        rotulo: "El equilibrio",
        texto:
          "Un tren normal no sube una ladera empinada, porque sus ruedas de acero resbalan sobre el raíl en cuanto la cuesta se pronuncia. El funicular no lo intenta: en vez de empujarse con las ruedas, se deja tirar por un cable. El cable sube hasta una rueda grande colocada en lo alto y baja por el otro lado. Allí hay una segunda cabina, igual que la primera y atada al mismo cable. Cuando una sube, la otra baja, y es el peso de la que baja el que tira de la que sube. El motor de arriba no levanta un vagón lleno: solo mueve la diferencia de peso entre los dos.",
        destacado: { tipo: "cifra", cifra: "7", unidad: "por ciento de cuesta y un tren ya resbala" },
      },
      {
        rotulo: "El freno",
        texto:
          "Lo primero que piensa cualquiera al subir es qué pasaría si el cable se rompiera. Los constructores respondieron con un freno que funciona precisamente cuando el cable falla. Debajo de cada cabina hay dos piezas de hierro que abrazan el raíl, como unas tenazas abiertas. Lo que las mantiene abiertas es la propia tensión del cable, es decir, el tirón hacia arriba. Si el cable se parte, ese tirón desaparece, un muelle cierra las tenazas y el vagón queda mordido al raíl. Es el mismo freno que llevan los ascensores, y por eso el funicular es uno de los transportes con menos accidentes.",
        destacado: { tipo: "frase", frase: "El freno se cierra justo cuando el cable deja de tirar." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron funiculares en marcha en decenas de ciudades, casi todos con más de cien años y con la maquinaria a la vista. Quedó sobre todo la idea de subir algo usando el peso de otra cosa que baja. Es la misma idea del ascensor, que lleva un bloque de plomo colgado al otro lado del cable. Muchos funiculares dejaron de ser transporte y son hoy una atracción de fin de semana. Otros siguen siendo lo que fueron: la forma normal de que un vecino llegue a su casa con la compra. Para subir algo pesado no hace falta más fuerza, sino algo igual de pesado dispuesto a bajar.",
      },
    ],
  },
  {
    id: "el-funicular-de-agua",
    titulo: "Subía con agua",
    gancho: "La cabina de arriba llenaba un depósito hasta pesar más que la de abajo. Luego lo vaciaba y subía la otra.",
    categoria: "Funiculares",
    color: "var(--clay)",
    curioso: true,
    encargo: "Un deposito de agua bajo el suelo de una cabina de madera, con el tapon abierto.",
    entrada:
      "Costa del suroeste de Inglaterra, 1890. Dos pueblos de pescadores están uno encima del otro: el de abajo, junto al mar; el de arriba, en lo alto de un acantilado de ciento cincuenta metros. Solo los une un camino de mulas. No hay electricidad en la zona y traer carbón para una máquina de vapor cuesta más de lo que el viaje puede dar.",
    paginas: [
      {
        rotulo: "El contrapeso",
        texto:
          "El funicular que se construyó allí no tiene motor de ninguna clase, y aun así lleva gente arriba y abajo. Debajo del suelo de cada cabina hay un depósito que cabe varios miles de litros de agua. La cabina de arriba llena ese depósito hasta pesar más que la de abajo, aunque las dos lleven los mismos pasajeros. Entonces el encargado suelta el freno y la cabina pesada baja sola, tirando de la otra hacia arriba. Al llegar abajo abre un tapón, suelta toda el agua y se queda ligera para el viaje siguiente. Arriba, un arroyo de montaña llena el depósito de la que espera, y el ciclo vuelve a empezar.",
        destacado: { tipo: "cifra", cifra: "1890", unidad: "el año en que se abrió" },
      },
      {
        rotulo: "El cálculo",
        texto:
          "El sistema tiene una pega, y es que la cantidad de agua no puede ser siempre la misma. Depende de cuánta gente vaya en cada cabina, y eso cambia en cada viaje. Si arriba van dos personas y abajo van veinte, el depósito de arriba tiene que llenarse mucho más. Por eso el encargado mira el andén, calcula a ojo lo que pesan los pasajeros y abre el grifo lo justo. Si echa de menos, la cabina no arranca; si echa de más, el viaje baja demasiado deprisa. Es un oficio que se aprende mirando a otro hacerlo, porque no está escrito en ningún manual.",
        destacado: { tipo: "frase", frase: "El encargado calcula a ojo cuánta agua hay que echar." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó aquel funicular funcionando, subiendo y bajando gente todos los días sin gastar un vatio de electricidad. Quedaron unos cuantos más en Europa, todos del mismo siglo y todos conservados como piezas de museo que trabajan. Y quedó la idea, que la ingeniería ha vuelto a mirar con interés en los últimos años. Hoy hay centrales eléctricas que suben agua a un embalse alto cuando sobra corriente en la red. Cuando falta, dejan caer esa agua por una tubería y le sacan otra vez electricidad. Es lo mismo que hacían aquellos dos pueblos de pescadores: guardar energía poniendo algo pesado más arriba.",
      },
    ],
  },
  {
    id: "subir-al-barrio-de-arriba",
    titulo: "Los ascensores de Valparaíso",
    gancho: "Una ciudad chilena construida sobre cuarenta cerros llenó las laderas de funiculares de madera. Los llaman ascensores y siguen funcionando.",
    categoria: "Funiculares",
    color: "var(--plum)",
    encargo: "Una cabina de madera pintada subiendo entre casas de colores por una ladera empinada.",
    entrada:
      "Valparaíso, Chile, 1883. La ciudad es entonces el puerto más importante del Pacífico americano, porque el canal de Panamá aún no existe y los barcos rodean el continente entero. Está encajada entre el mar y una corona de cerros muy empinados, con el puerto y el comercio abajo. Los trabajadores viven arriba, y para llegar a casa suben a pie escaleras de cientos de peldaños.",
    paginas: [
      {
        rotulo: "Los cerros",
        texto:
          "El problema de Valparaíso no era la distancia, sino la altura: las casas se apilan en cuestas de más de treinta grados. Un hombre que descargaba barcos podía tardar media hora en subir a su casa después de doce horas de trabajo. El primer funicular se abrió en 1883, costaba unos céntimos y lo usaba todo el mundo. Detrás llegaron otros treinta, construidos por empresas distintas que competían cerro por cerro. Cada uno tenía su cabina de madera, su empleado cobrando el billete a mano y su casa de máquinas arriba. La ciudad los llamó ascensores, aunque no suben en vertical sino inclinados sobre una vía.",
        destacado: { tipo: "cifra", cifra: "30", unidad: "ascensores llegó a tener la ciudad" },
      },
      {
        rotulo: "El abandono",
        texto:
          "El puerto perdió importancia en 1914, cuando se abrió el canal de Panamá y los barcos dejaron de rodear el continente. Con menos trabajo y menos dinero en la ciudad, mantener treinta funiculares dejó de salir a cuenta. Muchos cerraron con candado y se quedaron parados décadas enteras, con la cabina dentro y los raíles llenos de hierba. A finales del siglo XX entraron en varias listas internacionales de patrimonio en peligro, y eso lo cambió todo. El Estado chileno compró parte de ellos y los fue reabriendo poco a poco, uno cada pocos años. Quien sube hoy paga un billete simbólico y viaja en la misma cabina de madera de siempre.",
        destacado: { tipo: "frase", frase: "Muchos se quedaron parados décadas, con la cabina dentro." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una decena larga de ascensores en marcha, que no son un recuerdo turístico sino transporte de vecinos. Quedaron barrios enteros que solo se entienden con ellos, porque a las casas de arriba no llega ninguna calle para coches. Quedó la costumbre de medir las distancias de la ciudad en minutos de cuesta y no en metros. Y quedó un modelo que han copiado otras ciudades con ladera, de Lisboa a Bilbao. Donde el suelo se levanta demasiado, la solución casi nunca es una calle mejor. Es un cable, una rueda arriba y dos cabinas que se hacen el peso una a la otra.",
      },
    ],
  },
];
