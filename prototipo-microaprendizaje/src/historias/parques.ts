import type { Short } from "../shorts";

/* ==========================================================================
   Los parques.

   Trozos de campo dentro de la ciudad, que parecen un lujo estético y se
   crearon por motivos de salud pública y de orden social. El tema se
   estropea si se cuenta con jardinería.

   La regla del tema: se cuenta QUIÉN LO PAGÓ Y POR QUÉ, y qué pasó con el
   terreno de alrededor. Un parque sube el precio de lo que tiene al lado, y
   esa consecuencia aparece en todas las épocas. Con cifras de superficie y
   de dinero, y con lo que se derribó para hacerlo.
   ========================================================================== */

export const PARQUES: Short[] = [
  {
    id: "el-parque-como-medicina",
    titulo: "Parques contra el mal aire",
    gancho: "Se creía que las enfermedades venían del aire viciado, así que se plantaron pulmones verdes en las ciudades.",
    categoria: "Parques",
    color: "var(--ochre)",
    encargo: "Una avenida arbolada de un parque urbano con bancos de hierro.",
    fotos: [
      {
        archivo: "Waterfall in the Grotte, Parc des Buttes-Chaumont, Paris 19e 140427 1.jpg",
        autor: "La gruta artificial del parque de Buttes-Chaumont, en París, levantada sobre una antigua cantera de yeso.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Waterfall_in_the_Grotte,_Parc_des_Buttes-Chaumont,_Paris_19e_140427_1.jpg",
        foco: "50% 45%",
        alt: "Una cascada cayendo dentro de una cueva de roca y estalactitas, con luz verde entrando por el hueco de arriba.",
      },
      {
        archivo: "Parc des Buttes-Chaumont, November 2019.jpg",
        autor: "Un paseo del mismo parque en noviembre. Fotografía de Jami430.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Parc_des_Buttes-Chaumont,_November_2019.jpg",
        foco: "50% 55%",
        alt: "Un camino de tierra mojada curvándose entre arbustos, con bancos de hierro verdes y hojas caídas.",
      },
      {
        archivo: "The Victorian bandstand in sefton park, Liverpool, England.jpg",
        autor: "El quiosco de música de Sefton Park, en Liverpool. Fotografía de Fatih Renkligil.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:The_Victorian_bandstand_in_sefton_park,_Liverpool,_England.jpg",
        foco: "50% 50%",
        alt: "Un templete octogonal de hierro pintado de rojo con la cubierta de cobre verdoso, entre árboles pelados.",
      },
      {
        archivo: "Barcas - Estanque del Retiro - Madrid 01.jpg",
        autor: "El estanque del Retiro de Madrid al atardecer. Fotografía de Javier Pérez Montes.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Barcas_-_Estanque_del_Retiro_-_Madrid_01.jpg",
        foco: "50% 50%",
        alt: "Una pareja remando en una barca sobre un estanque dorado por la luz baja, con más barcas al fondo.",
      },
    ],
    entrada:
      "Europa, mediados del siglo XIX. Las ciudades industriales han crecido a una velocidad que nadie había visto antes, absorbiendo en pocas décadas a millones de personas venidas del campo, con barrios obreros hacinados, sin alcantarillado y con epidemias de cólera cada pocos años que se llevan a miles cada vez. Nadie sabe todavía por qué. La medicina de la época atribuye esas enfermedades a los miasmas, unos vapores malsanos que se creía que salían de la basura, del agua estancada y de los muertos, y de esa explicación equivocada sale una receta urbanística que va a cambiar la cara de las ciudades.",
    paginas: [
      {
        rotulo: "El aire",
        texto:
          "Si la enfermedad viaja en el aire corrompido, la solución consiste en ventilar la ciudad, y para eso hacen falta espacios abiertos donde el aire se renueve. Con ese argumento sanitario se aprobaron los primeros parques públicos financiados con dinero municipal, defendidos en los parlamentos por médicos y por reformadores sociales que hablaban de pulmones para la ciudad. La teoría de los miasmas resultó ser falsa, porque el cólera se transmite por el agua contaminada. La receta, en cambio, funcionó igual: los parques mejoraron de verdad la salud de las ciudades, aunque por otras razones.",
        destacado: { tipo: "frase", frase: "La teoría era falsa y la receta funcionó igual." },
      },
      {
        rotulo: "El otro motivo",
        texto:
          "Había un segundo argumento que se decía en voz más baja y que aparece en los debates de la época. Un parque ofrecía a los obreros un sitio donde pasar el domingo que no fuera la taberna, y se esperaba que eso redujera la bebida, las peleas y, de paso, el descontento político. Por eso muchos parques del siglo XIX incluyen quioscos de música, campos de juego y normas estrictas de comportamiento. Había guardas uniformados que expulsaban a quien pisara el césped, gritara demasiado o llevara ropa de trabajo sucia.",
        destacado: { tipo: "cifra", cifra: "1847", unidad: "uno de los primeros parques públicos" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó la costumbre de que una ciudad tenga parques pagados por todos, que hoy parece obvia y entonces era una novedad enorme. Quedaron también las cifras que la medicina moderna ha confirmado por otros caminos. Vivir cerca de una zona verde se asocia con menos enfermedad cardiovascular, menos estrés y mejor sueño, en estudios repetidos en muchos países. Y quedó el efecto que ya se notó entonces y que hoy tiene nombre en los manuales de urbanismo: las casas que dan al parque valen bastante más que las de la calle siguiente.",
      },
    ],
  },
  {
    id: "el-parque-que-desalojo",
    titulo: "Un barrio por un parque",
    gancho: "Mil seiscientas personas vivían en el terreno elegido, y la ciudad las expropió para plantar césped.",
    categoria: "Parques",
    color: "var(--slate)",
    encargo: "Un plano antiguo de ciudad con un rectángulo verde en el centro.",
    fotos: [
      {
        archivo: "The Mall Central Park New York City October 30 2022 - Flickr - Anthony Quintano.jpg",
        autor: "El paseo del Mall, en Central Park, una mañana de otoño. Fotografía de Anthony Quintano.",
        licencia: "CC BY 2.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:The_Mall_Central_Park_New_York_City_October_30_2022_-_Flickr_-_Anthony_Quintano.jpg",
        foco: "50% 40%",
        alt: "Paseo ancho de un parque entre olmos altos con las hojas doradas, con farolas encendidas y bancos.",
      },
      {
        archivo: "2024-11-19-Central Park-0669.jpg",
        autor: "Central Park en noviembre, con los rascacielos asomando por encima de los árboles.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:2024-11-19-Central_Park-0669.jpg",
        foco: "50% 50%",
        alt: "Césped y árboles de un gran parque urbano, con edificios altos recortados al fondo.",
      },
      {
        archivo: "Central Park New York October 2016 004.jpg",
        autor: "Un rincón de Central Park en otoño. Fotografía de King of Hearts.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Central_Park_New_York_October_2016_004.jpg",
        foco: "50% 50%",
        alt: "Praderas y afloramientos de roca dentro de un parque, con los árboles ya amarillos.",
      },
      {
        archivo: "Prospect Park New York November 2016 001.jpg",
        autor: "Prospect Park, en Brooklyn, obra de los mismos paisajistas. Fotografía de King of Hearts.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Prospect_Park_New_York_November_2016_001.jpg",
        foco: "50% 50%",
        alt: "Camino de parque entre árboles de otoño, con el suelo cubierto de hojas caídas.",
      },
    ],
    entrada:
      "Nueva York, 1857. La ciudad decide reservar un rectángulo enorme en mitad de la isla para construir un parque, en un momento en que aquella zona es todavía periferia rocosa y pantanosa, muy lejos de donde vive la gente con dinero. El terreno, sin embargo, no está vacío ni mucho menos. Allí viven unas mil seiscientas personas repartidas en varios asentamientos, con sus casas, sus huertos, tres iglesias y un colegio en funcionamiento. El más grande de todos ellos lleva treinta años en pie, tiene nombre propio y es una de las pocas comunidades de la ciudad donde vecinos negros e irlandeses viven puerta con puerta.",
    paginas: [
      {
        rotulo: "Los vecinos",
        texto:
          "El asentamiento más conocido lo habían fundado familias afroamericanas libres que habían comprado sus parcelas legalmente, y con el tiempo se les habían sumado inmigrantes irlandeses y alemanes. Tenían tres iglesias, un cementerio y una escuela, y varios propietarios pagaban impuestos y tenían derecho a voto por ser dueños de tierra. La ciudad aplicó la expropiación forzosa, pagó indemnizaciones que muchos consideraron insuficientes y derribó todo entre 1856 y 1857. La prensa de la época describió a aquella gente como ocupantes miserables, y esa versión se dio por buena durante más de un siglo.",
        destacado: { tipo: "cifra", cifra: "1.600", unidad: "personas vivían en el terreno" },
      },
      {
        rotulo: "El parque",
        texto:
          "Lo que se construyó encima es una obra de ingeniería enorme y no un trozo de naturaleza conservada. Se movieron millones de metros cúbicos de tierra, se dinamitaron afloramientos de roca, se plantaron cientos de miles de árboles y se excavaron lagos artificiales con todo su sistema de drenaje bajo tierra. Los diseñadores hundieron además las vías de tráfico transversal en trincheras, para que los carruajes cruzaran la isla sin estropear el paisaje del paseante. Nada de aquello es casual: el proyecto ganó un concurso público y estaba pensado hasta el último sendero.",
        destacado: { tipo: "frase", frase: "No es naturaleza conservada: está construido entero." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó uno de los parques más visitados del mundo y, durante siglo y medio, el olvido de lo que hubo debajo. Solo en las últimas décadas se ha investigado aquel asentamiento con excavaciones arqueológicas y con archivos, se ha colocado señalización explicando lo que hubo allí y se ha reconocido oficialmente lo ocurrido. Quedó también un patrón que se ha repetido en muchas ciudades desde entonces. La zona verde se sitúa donde el suelo es barato porque vive gente pobre, y treinta años más tarde ese es el barrio más caro.",
      },
    ],
  },
  {
    id: "el-arbol-de-la-acera",
    titulo: "El árbol de calle vive poco",
    gancho: "Diez o quince años frente a más de cien. El problema no es el humo, es el sitio que tienen las raíces.",
    categoria: "Parques",
    color: "var(--plum)",
    curioso: true,
    encargo: "Un alcorque estrecho en una acera con un árbol joven y el suelo agrietado.",
    entrada:
      "Ciudades de todo el mundo, con estudios de supervivencia hechos desde los años ochenta del siglo XX. Un árbol plantado en el alcorque de una acera, es decir, en ese hueco cuadrado rodeado de pavimento, tiene una esperanza de vida sorprendentemente corta. Los estudios hechos en calles muy transitadas dan medias de diez a quince años, mientras que el mismo ejemplar plantado en un parque cercano pasa tranquilamente de los cincuenta.",
    paginas: [
      {
        rotulo: "Las raíces",
        texto:
          "El motivo principal está bajo tierra y no se ve. Las raíces de un árbol adulto necesitan un volumen de suelo grande, entre diez y treinta metros cúbicos. En una acera solo disponen del hueco del alcorque, rodeado de tierra apisonada por las obras y por el tráfico. En un suelo apisonado no queda aire entre las partículas, y conviene recordar que las raíces necesitan oxígeno tanto como necesitan agua. Así que el árbol crece poco, vive estresado y queda a merced de cualquier plaga o de un verano especialmente seco.",
        destacado: { tipo: "cifra", cifra: "15", unidad: "años vive de media en una calle" },
      },
      {
        rotulo: "Lo demás",
        texto:
          "A eso se suman todos los golpes de la vida urbana, que son muchos y llegan por todas partes. La sal que se echa contra el hielo se acumula en el suelo y quema las raíces. Los coches rozan el tronco, las obras cortan raíces sin que nadie proteste y las podas mal hechas abren heridas por donde entran los hongos. Además, el calor que devuelve el asfalto sube la temperatura del entorno varios grados y adelanta la brotación, con lo que el árbol queda expuesto a las heladas tardías de primavera.",
        destacado: { tipo: "frase", frase: "La sal del invierno se queda en la tierra y quema la raíz." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron algunas soluciones que se están extendiendo poco a poco y que tienen en común una cosa: cuestan dinero por adelantado. Se construyen zanjas continuas bajo la acera para que las raíces de varios árboles compartan suelo. Se usan estructuras que sostienen el pavimento sin apisonar la tierra, y se conectan los alcorques al agua de lluvia de la calle. Y quedó un cálculo que convence a los ayuntamientos mejor que cualquier argumento estético. Un árbol que hay que reponer cada quince años sale mucho más caro que uno bien plantado desde el principio.",
      },
    ],
  },
];
