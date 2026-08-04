import type { Short } from "../shorts";

/* ==========================================================================
   Zoos.

   El riesgo del tema es el juicio moral rápido, en un sentido o en otro.
   Todo el mundo llega con la opinión hecha y no aprende nada.

   La regla del tema: un zoo se cuenta por CÓMO ESTÁ CONSTRUIDO y para
   quién. Una jaula, un foso medido según el salto de cada especie, un
   recinto pensado para que el animal pueda esconderse. El diseño delata
   exactamente qué se estaba buscando en cada época, sin necesidad de
   añadir ninguna valoración.

   Y donde el asunto es incómodo, se cuenta con documentos y con fechas.
   ========================================================================== */

export const ZOOS: Short[] = [
  {
    id: "coleccion-real",
    titulo: "Los reyes coleccionaban animales como joyas",
    gancho: "Un elefante regalado en 1255 vivió dos años en una fortaleza de Londres bebiendo vino.",
    categoria: "Zoos",
    color: "var(--clay)",
    encargo: "Una torre de piedra medieval con jaulas de madera adosadas al muro.",
    entrada:
      "Londres, 1255. Llega a la ciudad un elefante africano, regalo de un rey a otro, y se instala en la fortaleza real junto a los leones, un oso polar y un lince que ya viven allí. Es el primer elefante que se ve en las islas desde la época romana, y se le construye una casa de madera de doce metros de largo.",
    paginas: [
      {
        rotulo: "La colección",
        texto:
          "Aquellas colecciones no eran zoológicos en el sentido moderno: eran demostraciones de poder. Un animal exótico costaba una fortuna en transporte y en cuidados, y regalarlo entre monarcas equivalía a decir que uno alcanzaba sitios donde el otro no llegaba ni de lejos. El oso polar de aquella misma fortaleza salía atado con una cuerda larga a pescar al río, para ahorrar en comida, y al elefante le daban una dieta que incluía vino, porque los cuidadores creían que le vendría bien para pasar el invierno. Murió a los dos años, casi seguro por eso.",
        destacado: { tipo: "frase", frase: "Al oso polar lo sacaban atado a pescar al río." },
      },
      {
        rotulo: "El público",
        texto:
          "La colección de esa fortaleza duró seiscientos años y en algún momento se abrió al público, con una entrada bastante curiosa: se podía pagar con dinero o llevando un perro o un gato vivo para dar de comer a los leones. Las condiciones eran pésimas, con jaulas diminutas y una mortalidad altísima entre los animales, y en el siglo XIX un director nuevo decidió cerrarla y trasladarlos a un parque creado por una sociedad científica. Ese parque, abierto en 1828, es el primer zoo pensado para estudiar animales y no solo para exhibirlos.",
        destacado: { tipo: "cifra", cifra: "600", unidad: "años duró la colección de la fortaleza" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "De aquel traslado sale la palabra que usamos hoy: el nombre largo del parque se acortó en el habla popular hasta quedarse en las tres primeras letras, y de ahí pasó a media docena de idiomas. Aquella sociedad fue también la primera en llevar registros de cada animal, en publicar estudios sobre alimentación y en intentar la reproducción en cautividad de forma sistemática. En la fortaleza quedan hoy unas esculturas de alambre con la forma de los animales que vivieron allí, colocadas donde estaban las jaulas, y unos huesos de león hallados en el foso.",
      },
    ],
  },

  {
    id: "personas-exhibidas",
    titulo: "En las exposiciones se exhibía a personas",
    gancho: "Poblados enteros montados para que el público paseara alrededor. Duró hasta bien entrado el siglo XX.",
    categoria: "Zoos",
    color: "var(--slate)",
    encargo: "Una valla de madera con carteles de feria antiguos y un camino de tierra.",
    entrada:
      "Europa y Estados Unidos, entre 1870 y 1930. Las exposiciones universales y muchos parques zoológicos incluyen entre sus atracciones aldeas reconstruidas con personas traídas de colonias africanas, asiáticas y del Ártico, que viven allí durante meses mientras el público pasea alrededor y las observa. Se vendían millones de entradas cada temporada y las secciones se anunciaban en carteles por toda la ciudad.",
    paginas: [
      {
        rotulo: "El montaje",
        texto:
          "El montaje era siempre parecido: se levantaba un poblado con materiales traídos o imitados, se contrataba o se trasladaba a un grupo de personas, a veces con engaño y a veces con contrato firmado, y se les pedía que representaran su vida cotidiana con la ropa que se consideraba típica, aunque muchas veces no fuera realmente la suya. Un empresario alemán del negocio de los animales exóticos fue quien industrializó el formato y lo llevó de gira por Europa. En una exposición de París, en 1889, la sección colonial recibió millones de visitantes.",
        destacado: { tipo: "frase", frase: "Se les pedía representar su vida cotidiana ante el público." },
      },
      {
        rotulo: "Las cifras",
        texto:
          "Aquello no era en absoluto marginal: las exposiciones universales eran el gran acontecimiento de la época y esas secciones estaban entre las más visitadas de todo el recinto. Muchas personas murieron durante las giras por enfermedades comunes para las que no tenían defensas, y varias fueron exhibidas incluso después de muertas, con restos conservados en museos durante décadas. Los últimos episodios de este tipo están documentados hasta los años cincuenta en algunos parques europeos. La devolución de esos restos a sus países de origen sigue siendo hoy un proceso abierto, caso por caso y con negociaciones que duran años.",
        destacado: { tipo: "cifra", cifra: "1889", unidad: "millones de visitantes en una feria" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Varios países han hecho en los últimos años reconocimientos oficiales y devoluciones concretas, y algunos museos han abierto exposiciones sobre su propia participación en aquello, con los carteles y las fotografías de la época a la vista de cualquiera. Es una parte de la historia de los zoos y de las ferias que estuvo décadas sin contarse y que hoy se estudia con los archivos delante, porque las empresas que lo organizaban llevaban contabilidad, contratos y correspondencia. Lo incómodo del asunto no es que ocurriera lejos: es que está documentado con recibos.",
      },
    ],
  },

  {
    id: "zoo-sin-barrotes",
    titulo: "Un zoo cambió los barrotes por fosos",
    gancho: "En 1907 abrió un parque donde los animales parecían sueltos y el público no veía ninguna reja.",
    categoria: "Zoos",
    color: "var(--plum)",
    encargo: "Un recinto de rocas artificiales con un foso ancho delante y sin rejas a la vista.",
    entrada:
      "Hamburgo, 1907. Abre un parque zoológico construido con una idea completamente nueva: nada de jaulas con barrotes. Los animales están separados del público y unos de otros por fosos anchos y profundos, con rocas artificiales de hormigón detrás, de modo que desde el camino parece que leones y cebras comparten el mismo paisaje abierto.",
    paginas: [
      {
        rotulo: "El salto medido",
        texto:
          "El truco es puramente geométrico y se basa en medir cuánto salta cada especie. Si el foso es más ancho que el salto máximo del animal y tiene la pared del lado del público más alta que la del lado del recinto, no hace falta ninguna reja para retenerlo. Su promotor, que llevaba años en el negocio de capturar y vender animales, hizo pruebas durante mucho tiempo con distintas especies para averiguar esas distancias, y patentó la disposición en 1896. Después construyó el parque entero con esa idea y con paisajes escalonados.",
        destacado: { tipo: "cifra", cifra: "1896", unidad: "la patente del recinto sin rejas" },
      },
      {
        rotulo: "La copia",
        texto:
          "El modelo se copió en todo el mundo en las décadas siguientes y es el que se ve todavía en cualquier zoo moderno, aunque el hormigón imitando rocas ha ido dejando paso a recintos con vegetación real y con bastante más espacio. El cambio de fondo llegó mucho más tarde, cuando se empezó a diseñar pensando en lo que el animal necesita y no en lo que el visitante quiere ver: escondites donde no se le vea, terreno variado, comida que haya que buscar y grupos del tamaño adecuado para cada especie concreta.",
        destacado: { tipo: "frase", frase: "Se pasó de diseñar para el que mira a diseñar para el que vive." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Los zoos siguen siendo un asunto discutido y las posturas están bastante claras: por un lado, programas de reproducción que han salvado especies que ya no existían en libertad y que se han reintroducido después con éxito; por otro, animales grandes que en un recinto, por bueno que sea, presentan problemas de comportamiento medibles. Varios países han prohibido ya los espectáculos con determinadas especies y bastantes zoos han renunciado a tener elefantes o cetáceos. Aquel foso de 1907 quitó los barrotes de la vista, y la discusión siguiente ha sido qué hay detrás.",
      },
    ],
  },
];
