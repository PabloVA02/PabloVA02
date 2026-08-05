import type { Short } from "../shorts";

/* ==========================================================================
   Faros.

   El riesgo del tema es la postal: la torre a rayas, la ola rompiendo, el
   farero solitario mirando el horizonte. Bonito y vacío.

   La regla del tema: un faro se cuenta desde DENTRO. Lo que se ve desde
   fuera es una torre; lo interesante es la gente encerrada en ella y los
   problemas concretos que resuelve o que crea: cómo se pega una piedra
   bajo el agua, cómo se aprovecha la luz de una lámpara de aceite, qué se
   hace con un compañero muerto cuando no puede venir nadie a buscarlo.

   Y cada short termina en una norma o en un objeto que sigue existiendo,
   porque casi todo lo que hay en un faro se inventó a fuerza de desastres.
   ========================================================================== */

export const FAROS: Short[] = [
  {
    id: "eddystone",
    titulo: "El faro mató a su autor",
    gancho: "Decía que quería estar dentro en la peor tormenta posible. La tuvo, y no apareció ni una tabla.",
    categoria: "Faros",
    color: "var(--slate)",
    encargo: "Una roca negra batida por el mar con los restos de unos hierros clavados.",
    entrada:
      "Canal de la Mancha, 1698. Frente a la costa suroeste de Inglaterra hay un arrecife que asoma poco más de un metro con la marea baja y que lleva siglos tragándose barcos. Un excéntrico inglés se ofrece a levantar allí el primer faro construido en mar abierto. Nadie lo había intentado nunca en ninguna parte.",
    paginas: [
      {
        rotulo: "La torre de madera",
        texto:
          "Trabajaban solo en verano y con marea baja, unas pocas horas al día, subidos a una roca que el agua tapaba dos veces por jornada. Tardó cuatro años. La torre era de madera y hierro, con adornos, balcones y una veleta enorme, y se parecía más a un capricho de jardín que a un edificio marino. Encendía sesenta velas de sebo. Aguantó cinco inviernos, y su constructor solía repetir delante de quien quisiera oírlo que le gustaría estar dentro durante la mayor tormenta que Dios mandara. En noviembre de 1703 se acercó una y él se empeñó en ir a supervisar unas reparaciones.",
        destacado: { tipo: "frase", frase: "Decía que quería estar dentro en la mayor tormenta posible." },
      },
      {
        rotulo: "La tormenta",
        texto:
          "Fue la peor tormenta registrada en las islas británicas: derribó miles de chimeneas, hundió una parte de la flota y mató a más de ocho mil personas en una noche. Cuando amaneció, en el arrecife no quedaba nada. Ni la torre, ni las velas, ni los seis hombres que estaban dentro; solo unos hierros retorcidos clavados en la roca. Se reconstruyó otra vez en madera, y aquel segundo faro ardió en 1755 por culpa de las propias velas. El farero, un hombre de noventa y cuatro años, tragó plomo derretido del tejado mientras miraba hacia arriba y murió doce días más tarde.",
        destacado: { tipo: "cifra", cifra: "8.000", unidad: "muertos en aquella tormenta" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El tercero cambió el oficio entero. Un ingeniero decidió imitar la forma de un tronco de roble, ancho abajo y curvo hacia arriba, y encajar los bloques de piedra unos con otros como las piezas de un rompecabezas en lugar de apilarlos. Para pegarlos necesitaba un cemento que fraguara bajo el agua, y lo consiguió probando calizas hasta dar con la mezcla adecuada: es el antepasado directo del cemento que se usa hoy en todo el mundo. Aquella torre aguantó ciento veintitrés años y se desmontó porque cedía la roca, no ella. Está reconstruida en tierra y se puede subir.",
      },
    ],
  },

  {
    id: "lente-fresnel",
    titulo: "Una lente de anillos triplicó todo",
    gancho: "Antes, un faro se veía a ocho kilómetros. Con aquel cristal escalonado, a más de treinta.",
    categoria: "Faros",
    color: "var(--ochre)",
    encargo: "Una lente enorme de anillos de vidrio vista de cerca, con la luz atravesándola.",
    entrada:
      "Francia, 1822. Un faro de la época funciona con lámparas de aceite y espejos curvos detrás, y desperdicia casi toda la luz, que se escapa hacia arriba, hacia abajo y hacia los lados. Un ingeniero de caminos de salud frágil propone una lente completamente distinta, hecha de anillos concéntricos de vidrio en vez de una pieza maciza.",
    paginas: [
      {
        rotulo: "El vidrio que sobra",
        texto:
          "Una lente capaz de recoger toda la luz de una lámpara tendría que ser tan gruesa y pesada que ni se podría fabricar ni se podría sostener. La idea consistió en quedarse solo con la superficie que hace el trabajo: se corta la lente en anillos escalonados, cada uno con la inclinación exacta que le corresponde, y se tira todo el vidrio del medio. El resultado es un panel de un palmo de grosor que hace lo mismo que un bloque enorme. Alrededor de la lámpara se montan varios pisos de anillos, y arriba y abajo unos prismas que devuelven al haz la luz que se escapaba.",
        destacado: { tipo: "frase", frase: "Se queda solo con la superficie que trabaja y tira el resto." },
      },
      {
        rotulo: "El estreno",
        texto:
          "El primer aparato se instaló en 1823 en un faro del estuario de un río francés y se vio desde más de treinta kilómetros de distancia. Aprovechaba en torno al ochenta por ciento de la luz, frente al veinte escaso que sacaban los espejos. Las piezas se tallaban y pulían a mano y se encajaban en armazones de bronce, de modo que una lente de las grandes pesaba varias toneladas y costaba lo que una casa. Su inventor murió de tuberculosis en 1827, con treinta y nueve años, cuando apenas había una docena instaladas. En unas décadas no quedó un faro importante sin ella.",
        destacado: { tipo: "cifra", cifra: "80 %", unidad: "de la luz aprovechada, frente al 20" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Se ha dicho muchas veces, sin manera de comprobarlo del todo, que ninguna otra invención de aquel siglo salvó tantas vidas. La idea saltó después a sitios donde nadie la busca: los faros de un coche, los semáforos, los focos de teatro, las placas que concentran el sol y esa lámina fina y estriada que llevan las lupas de plástico. Muchas de las lentes originales siguen girando en sus torres casi dos siglos después, flotando sobre un baño de mercurio para que un solo dedo baste para moverlas sin esfuerzo.",
      },
    ],
  },

  {
    id: "tres-fareros",
    titulo: "Por qué siempre eran tres fareros",
    gancho: "Dos hombres solos en una roca. Uno murió, y el otro pasó cuatro meses con el cuerpo fuera.",
    categoria: "Faros",
    color: "var(--plum)",
    curioso: true,
    encargo: "Una cabaña de madera sobre pilotes de hierro clavados en una roca, con mar picado.",
    entrada:
      "Mar de Irlanda, invierno de 1801. Un faro de madera montado sobre pilotes, plantado en una roca a treinta kilómetros de la costa de Gales, tiene dos fareros. Se sabe que discutían a menudo y que en tierra se comentaba. Una tormenta larguísima impide durante semanas que ninguna barca pueda acercarse a relevarlos.",
    paginas: [
      {
        rotulo: "El cajón",
        texto:
          "Uno de los dos murió, probablemente por un accidente. El otro se encontró ante un problema que no tenía nada que ver con el duelo: si tiraba el cadáver al mar, en tierra sabían que se llevaban mal y lo acusarían de haberlo matado. Así que construyó una caja con tablas del propio faro, metió el cuerpo dentro y la ató por fuera, en la plataforma exterior, para no tenerlo dentro de la vivienda. La caja se abrió con el viento. Durante semanas, uno de los brazos del muerto quedó suelto y golpeaba la ventana cada vez que soplaba fuerte.",
        destacado: { tipo: "frase", frase: "El brazo suelto golpeaba la ventana con el viento." },
      },
      {
        rotulo: "El relevo",
        texto:
          "Siguió encendiendo la luz todas las noches, que era su obligación, y los barcos que pasaban informaron de que el faro funcionaba con normalidad, así que en tierra nadie sospechó nada. Tardaron cuatro meses en poder desembarcar. Cuando por fin llegaron se encontraron con un hombre al que sus propios compañeros no reconocieron: había perdido mucho peso, apenas hablaba y ya no volvió a ser el mismo. La versión del accidente quedó confirmada y no se le acusó de nada, pero el caso llegó a los responsables del servicio de faros y provocó un cambio de normas inmediato.",
        destacado: { tipo: "cifra", cifra: "4", unidad: "meses aislado con el cadáver" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "A partir de entonces, todos los faros aislados del Reino Unido pasaron a tener tres fareros en lugar de dos, y la costumbre se copió en medio mundo. La razón era puramente práctica: con tres, si uno muere o enferma quedan dos, y ninguno se queda a solas con un cuerpo y con una acusación encima. Aquella regla estuvo vigente casi dos siglos, hasta que la automatización dejó las torres vacías; el último faro habitado del Reino Unido se automatizó en 1998. Hoy no queda dentro nadie que pueda discutir con nadie.",
      },
    ],
  },
];
