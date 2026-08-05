import type { Short } from "../shorts";

/* ==========================================================================
   Las escaleras mecánicas.

   Una máquina que casi nadie mira y que mueve a más gente que cualquier
   otra. El tema se estropea si se cuenta como historia de patentes.

   La regla del tema: cada short arranca del MOMENTO EN QUE EL PIE TOCA la
   máquina, que es donde está todo (el peldaño que se forma, el peine de la
   salida, el paso que se acorta). La ingeniería se explica por el cuerpo.
   ========================================================================== */

export const ESCALERAS_MECANICAS: Short[] = [
  {
    id: "la-escalera-de-feria",
    titulo: "La escalera mecánica",
    gancho: "No llevaba a ninguna parte: subías, mirabas y volvías a bajar. Setenta y cinco mil personas pagaron por probarla.",
    categoria: "Objetos",
    color: "var(--clay)",
    encargo: "Rampa mecánica de listones de madera de 1896, con gente de época subida de pie.",
    entrada:
      "Nueva York, 1896. En el parque de atracciones de Coney Island se instala un aparato nuevo que la gente paga por probar: una rampa inclinada que sube sola. No tiene escalones ni sirve para ir a ninguna parte, porque solo lleva a una plataforma y se vuelve a bajar. La ciudad ya tiene ascensores en los edificios altos, pero un ascensor sube a doce personas cada vez y hay que esperarlo abajo. Esto no se espera: se pisa y ya está subiendo. Durante dos semanas la usan setenta y cinco mil personas por pura diversión. Pagan cinco centavos por subir a una plataforma y bajar andando, y nadie ve todavía para qué sirve aquello más allá del rato que dura.",
    paginas: [
      {
        rotulo: "La rampa",
        texto:
          "Aquel primer aparato era una cinta de listones de madera sobre una cadena, con una inclinación suave de veinticinco grados. El usuario se subía de pie y se agarraba a un pasamanos, sin más ayuda que la fricción de la suela. Funcionaba, pero tenía dos problemas: si la rampa era más empinada la gente resbalaba, y si era más suave ocupaba media manzana. La solución llegó pocos años después con los peldaños, unas piezas planas que salen de debajo del suelo y forman escalón al subir. Arriba y abajo vuelven a aplanarse, de modo que el pasajero entra y sale sin saltar. Ese mecanismo de peldaños que aparecen y desaparecen es el mismo de hoy.",
        destacado: { tipo: "frase", frase: "Los peldaños nacen planos, se levantan y vuelven a aplanarse." },
      },
      {
        rotulo: "Enseñar a subir",
        texto:
          "Cuando llegaron a los grandes almacenes de Londres en 1898, hubo que enseñar a la gente a usarlas. La compañía colocó a un empleado al final que ofrecía coñac a quien bajaba mareado, porque el miedo era real. El problema no era el movimiento, sino el momento de poner el pie y el de sacarlo, donde ocurren casi todos los accidentes. Por eso las escaleras actuales llevan un peine de dientes metálicos en los dos extremos, que encaja en las ranuras del peldaño. Si algo se engancha, ese peine se rompe antes de arrastrar nada, y un sensor para la máquina. Los cordones sueltos y las chanclas siguen siendo la causa más común de sustos.",
        destacado: { tipo: "cifra", cifra: "1898", unidad: "el año del coñac para los mareados" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una máquina que no se apaga casi nunca, porque arrancarla y pararla la desgasta más que dejarla girando. Quedó la costumbre de ponerse a la derecha para dejar pasar por la izquierda, que en algunos metros muy cargados resulta contraproducente. Varios estudios han demostrado que si todo el mundo se queda quieto en los dos lados sube más gente por minuto, y aun así casi nadie acepta la idea. Y quedó el origen que casi nadie sospecha: el aparato que hoy mueve a millones de personas por los aeropuertos empezó siendo una atracción de feria a la que se subía por diversión.",
      },
    ],
  },
  {
    id: "el-fuego-que-se-tumbo",
    titulo: "Un incendio descubrió el efecto chimenea",
    gancho: "En una escalera mecánica de madera del metro de Londres, la llama no subió hacia arriba: se tumbó sobre los peldaños y corrió.",
    categoria: "Objetos",
    color: "var(--slate)",
    encargo: "Escalera mecánica antigua de metro, con peldaños de madera y el hueco de la maquinaria.",
    entrada:
      "Londres, noviembre de 1987. El metro de la ciudad sigue teniendo escaleras mecánicas con peldaños de madera, instaladas décadas antes, y debajo de ellas se acumula pelusa y grasa. Una cerilla encendida cae por una ranura y prende ese depósito. Lo que pasa a continuación no lo había previsto ningún manual y cambió la manera de construir túneles en todo el mundo.",
    paginas: [
      {
        rotulo: "Un fuego tumbado",
        texto:
          "Un incendio normal sube en vertical, porque el aire caliente pesa menos y tira hacia arriba arrastrando la llama. En un pasillo inclinado ocurre algo distinto: la llama se pega a la superficie en lugar de despegarse y avanza tumbada. Al ir pegada calienta el material que tiene delante, lo prepara para arder y se acelera a sí misma. En aquella escalera el fuego pasó de pequeño a incontrolable en menos de un minuto y salió disparado hacia el vestíbulo como una llamarada. Murieron treinta y una personas. Los ingenieros no lo habían visto nunca porque nadie había estudiado un fuego en una rampa, y hubo que reproducirlo a escala en un laboratorio para creerlo.",
        destacado: { tipo: "frase", frase: "En una rampa la llama no sube: se tumba y corre." },
      },
      {
        rotulo: "Lo que cambió",
        texto:
          "La investigación posterior fue durísima con la compañía del metro y con la idea de que fumar allí abajo fuera asumible. Se prohibió fumar en toda la red, se retiraron las escaleras de madera y se obligó a limpiar los bajos. Se instalaron rociadores y detectores de humo en los huecos de las escaleras, que hasta entonces no llevaban nada. Y se cambió algo menos visible, porque desde entonces los túneles se diseñan contando con ese efecto de la llama tumbada. Los manuales de seguridad de medio mundo incorporaron el fenómeno con el nombre del sitio donde ocurrió. Fue un caso raro en el que una tragedia enseñó física que no estaba en los libros.",
        destacado: { tipo: "cifra", cifra: "1987", unidad: "el año que cambió el diseño de los túneles" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una red de metro que hoy es de las más vigiladas del mundo en materia de incendios, con inspecciones y simulacros constantes. Quedó también un efecto con nombre propio en la literatura científica, que se estudia en cualquier escuela de ingeniería del fuego. Y quedó una lección incómoda que se repite en casi todas las investigaciones de accidentes, porque nadie había hecho nada mal según las normas de entonces. El fallo estaba en las normas mismas, que daban por sabido algo que nadie había comprobado nunca: que el fuego siempre sube recto.",
      },
    ],
  },
  {
    id: "la-cinta-del-aeropuerto",
    titulo: "La cinta no te ahorra tiempo",
    gancho: "Los estudios con cámaras dicen que los pasajeros van de media más lentos con cinta que sin ella.",
    categoria: "Objetos",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Pasillo largo de aeropuerto con cinta transportadora vacía y gente andando al lado.",
    entrada:
      "Aeropuertos de todo el mundo, con la primera cinta instalada en 1958. La idea parece obvia: si el pasajero camina y además la cinta se mueve, debería llegar antes a la puerta de embarque. Los estudios de los últimos años dicen que en la práctica no suele ser así, y el motivo no está en la máquina, sino en lo que hace la gente al subirse.",
    paginas: [
      {
        rotulo: "El paso corto",
        texto:
          "Al pisar una cinta en marcha, el cuerpo tarda unos segundos en recalibrar el equilibrio y el paso se acorta. Al salir ocurre lo mismo al revés, con un tropiezo pequeño que casi todo el mundo ha notado alguna vez. Sumados los dos ajustes, la ganancia neta se reduce a mucho menos de lo que sugiere su velocidad. A eso se añade que mucha gente se queda quieta, y una persona parada en la cinta avanza más despacio que otra andando. Un estudio con cámaras midió que los pasajeros iban de media más lentos con cinta que sin ella. Cuando se hicieron los cálculos, la máquina salía perdiendo contra el suelo de toda la vida.",
        destacado: { tipo: "frase", frase: "Un parado en la cinta va más lento que un peatón." },
      },
      {
        rotulo: "Para qué sirve",
        texto:
          "La cinta sigue teniendo sentido, aunque no sea el que se le supone, y hay tres motivos claros. El primero es el equipaje de mano, porque arrastrar veinte kilos de maleta por un pasillo largo cansa mucho más de lo que parece. El segundo es que reparte a la gente y evita el atasco en los cuellos de botella, donde el problema es la aglomeración. El tercero es la accesibilidad, ya que a quien camina con dificultad la cinta le ahorra un esfuerzo real. Y hay un cuarto motivo que las aerolíneas no niegan: un pasajero relajado gasta más en las tiendas del pasillo. Por eso las cintas suelen acabar justo delante de un escaparate.",
        destacado: { tipo: "cifra", cifra: "1958", unidad: "el año de la primera cinta de aeropuerto" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron miles de cintas instaladas en aeropuertos que cada año son más grandes y con pasillos más largos. Quedó también una discusión que sigue abierta entre los que diseñan terminales, porque varios aeropuertos las han retirado y otros las siguen poniendo. Y quedó un ejemplo perfecto de una trampa que se repite en muchos sitios, que consiste en medir la máquina y olvidarse de la persona. La cinta hace exactamente lo que promete el catálogo, y aun así el pasajero llega igual de tarde, porque en cuanto se sube deja de andar.",
      },
    ],
  },
];
