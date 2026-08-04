import type { Short } from "../shorts";

/* ==========================================================================
   Las carreteras.

   Se pisan todos los días y no se miran nunca. El tema se hunde si se cuenta
   como historia del transporte: hay que contarlo como lo que es, ingeniería
   enterrada bajo los pies.

   La regla del tema: siempre se explica QUÉ HAY DEBAJO. Una carretera son
   capas, y cada capa resuelve un problema distinto: el agua, el peso, el
   desgaste. Quien entiende las capas entiende por qué unas duran dos mil
   años y otras se agrietan en dos inviernos.
   ========================================================================== */

export const CARRETERAS: Short[] = [
  {
    id: "calzadas-de-dos-mil-anos",
    titulo: "Por qué aguantan todavía las calzadas romanas",
    gancho: "No es la piedra de arriba: es un metro de capas debajo, colocado para que el agua nunca se quede dentro.",
    categoria: "Carreteras",
    color: "var(--slate)",
    encargo: "Un tramo de calzada empedrada antigua con losas gastadas y bordillo de piedra.",
    entrada:
      "¿Cómo puede seguir en pie un camino construido hace veinte siglos, cuando el asfalto de una calle nueva se agrieta en pocos inviernos? La respuesta no está en las losas que se ven, sino en lo que hay debajo. Un tramo de calzada romana bien hecha, de los que se levantaron entre el siglo III antes de Cristo y el II después, es una obra de casi un metro de espesor.",
    paginas: [
      {
        rotulo: "Las capas",
        texto:
          "Primero se excavaba una zanja hasta encontrar terreno firme, apartando la tierra blanda que es la que se hunde. En el fondo se colocaba una capa de piedras grandes asentadas a mano; encima, otra de piedra más pequeña mezclada con mortero; luego una de grava fina y arena bien apisonada, y por último las losas del pavimento, encajadas entre sí y con las juntas apretadas. Cada capa tiene una función: la de abajo reparte el peso sobre una superficie grande, y las intermedias impiden que la de arriba se hunda en el barro.",
        destacado: { tipo: "cifra", cifra: "1", unidad: "metro de espesor tenía una calzada buena" },
      },
      {
        rotulo: "El agua",
        texto:
          "El verdadero enemigo de cualquier carretera, entonces y ahora, es el agua. Si se queda debajo, reblandece el terreno y todo lo que hay encima se hunde; si se cuela en una grieta y se hiela, la abre. Por eso la calzada se construía abombada, más alta en el centro que en los bordes, con cunetas a los lados y bordillos de piedra que sujetan el conjunto lateralmente, y por eso las capas inferiores eran de material grueso por el que el agua escurre. Todo el diseño está pensado para que el agua entre y salga sin quedarse.",
        destacado: { tipo: "frase", frase: "Todo el diseño existe para que el agua no se quede dentro." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron miles de kilómetros de trazado que se siguen usando, muchos de ellos bajo carreteras modernas que aprovecharon el mismo camino porque estaba bien elegido. Y quedó el principio, que no ha cambiado: una carretera de hoy también son capas —explanada, subbase, base y una capa de rodadura de asfalto—, con la misma jerarquía y la misma obsesión por el drenaje. Lo que cambió es que la capa de arriba ya no tiene que durar siglos, porque se fresa y se repone cada quince años. Los romanos no tenían máquinas para eso.",
      },
    ],
  },
  {
    id: "el-firme-de-piedra-partida",
    titulo: "Un ingeniero arruinado inventó el firme moderno",
    gancho: "Su idea era que las piedras fueran pequeñas y del mismo tamaño, y que la carretera no tocara el suelo blando.",
    categoria: "Carreteras",
    color: "var(--ochre)",
    encargo: "Un montón de gravilla angulosa junto a un rodillo compactador antiguo.",
    entrada:
      "Escocia, 1816. Un hombre que ha hecho fortuna en América y la ha perdido en parte al volver dedica veinte años a estudiar por su cuenta por qué los caminos británicos son un lodazal intransitable. Su conclusión va contra todo lo que se hacía entonces: no hacen falta cimientos de piedra grande ni obras caras, hacen falta piedras pequeñas y buen drenaje.",
    paginas: [
      {
        rotulo: "Del mismo tamaño",
        texto:
          "Su método consistía en extender capas sucesivas de piedra partida, todas del mismo calibre, tan pequeñas que cupieran en la boca de un hombre, lo que decía medio en broma para que sus capataces no se despistaran. La clave está en la forma: al ser angulosas y de tamaño parecido, las piedras encajan entre sí como un rompecabezas cuando las aplasta el tráfico, y el conjunto se traba y se comporta como una losa. Si se mezclan tamaños, los finos rellenan los huecos y la capa se apelmaza, pero pierde ese trabado.",
        destacado: { tipo: "frase", frase: "Piedras pequeñas y angulosas que se traban entre sí." },
      },
      {
        rotulo: "Levantar el camino",
        texto:
          "La segunda idea era todavía más barata: elevar el camino por encima del terreno circundante y darle una ligera pendiente hacia los lados, de manera que el agua de lluvia se fuera sola. Sostenía que un suelo natural seco aguanta cualquier peso y que el problema no es el terreno sino el agua acumulada, así que gastar dinero en cimientos de piedra era tirarlo. Sus carreteras costaban una fracción de las anteriores y funcionaban mejor, y en pocos años el método se aplicó en todo el país y después en media Europa y en América.",
        destacado: { tipo: "cifra", cifra: "1816", unidad: "el año del primer firme de este tipo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó su apellido convertido en nombre común: al firme de piedra partida se lo llamó macadán, y cuando a comienzos del siglo XX se le empezó a echar alquitrán por encima para que los automóviles no levantaran polvo, la mezcla se llamó alquitranado de macadán, que abreviado dio el nombre de un material que todo el mundo pisa. Y quedó su diagnóstico, que sigue siendo el primer capítulo de cualquier manual: el enemigo es el agua, y una carretera bien drenada y bien trabada no necesita cimientos caros. Murió sin patentar nada y habiendo gastado su propio dinero en los primeros tramos de prueba, que hizo por su cuenta para convencer a las autoridades.",
      },
    ],
  },
  {
    id: "por-que-derecha-o-izquierda",
    titulo: "Por qué unos países conducen por la izquierda",
    gancho: "Tiene que ver con la espada, con los carros de varios caballos y con quién ganó una guerra.",
    categoria: "Carreteras",
    color: "var(--clay)",
    curioso: true,
    encargo: "Una carretera de dos carriles con la línea central pintada, vista de frente.",
    entrada:
      "¿Por qué en unos países se circula por la derecha y en otros por la izquierda? No es un capricho ni una manía insular: es el resultado de dos costumbres antiguas que chocaron y de una guerra que decidió cuál se extendía. Alrededor de un tercio de la población mundial conduce hoy por la izquierda, casi siempre en países que fueron colonias británicas.",
    paginas: [
      {
        rotulo: "La espada",
        texto:
          "La costumbre europea, documentada desde la Edad Media, era ir por la izquierda, y la explicación más repetida es práctica: la mayoría de la gente es diestra, y quien va a caballo por la izquierda de un camino se cruza con el desconocido teniendo la mano de la espada del lado del otro. También es más fácil montar desde la izquierda —el pie izquierdo en el estribo— y conviene hacerlo desde el borde del camino y no en mitad de la calzada. Hay pruebas arqueológicas de circulación por la izquierda incluso en una cantera romana británica, por las rodadas.",
        destacado: { tipo: "frase", frase: "Cruzarse por la izquierda deja la mano de la espada frente al otro." },
      },
      {
        rotulo: "El carro grande",
        texto:
          "El cambio vino de los carros de carga tirados por varias parejas de caballos, habituales en Francia y en América. No llevaban pescante: el conductor iba montado en el caballo trasero izquierdo, para tener libre la mano derecha con la que manejaba el látigo sobre todo el tiro. Sentado ahí, ve mal el borde derecho y prefiere circular por la derecha del camino para vigilar de cerca el cruce con los otros carros. Cuando la revolución y después el imperio francés reorganizaron media Europa, esa costumbre se impuso por ley en los países ocupados.",
        destacado: { tipo: "cifra", cifra: "1", unidad: "de cada 3 personas conduce por la izquierda" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un mapa que dibuja bastante bien los antiguos imperios, y quedaron los cambios de bando, que son operaciones enormes: Suecia cambió de la izquierda a la derecha en una madrugada de 1967, con todo el país parado durante horas, señales tapadas hasta el momento exacto y una campaña de años para preparar a la gente. Curiosamente, los accidentes bajaron los meses siguientes, porque todo el mundo conducía muerto de miedo, y después volvieron a su nivel de siempre. El cambio cuesta hoy tanto dinero que los países que quedan por cambiar ya no se lo plantean: habría que rehacer cruces, semáforos, accesos de autopista y toda la flota de autobuses.",
      },
    ],
  },
];
