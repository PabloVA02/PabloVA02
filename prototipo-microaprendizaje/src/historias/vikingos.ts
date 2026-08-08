import type { Short } from "../shorts";

/* ==========================================================================
   Vikingos.

   El riesgo del tema es el cliché de saqueo: el hacha, el drakkar, la
   barba. Es la imagen que vende camisetas y no explica nada.

   La regla del tema: se cuenta LO QUE SE PUEDE DEMOSTRAR y cómo se
   demostró. Un solo casco completo encontrado en mil años. Un anillo de
   árbol marcado por una tormenta solar. Unas leyes recitadas de memoria
   cada verano. Este es un pueblo del que casi todo lo que creemos saber
   viene del siglo XIX, así que aquí se separa el hallazgo del adorno.

   Y cuando la imagen popular es falsa, se dice quién la fabricó y cuándo.
   ========================================================================== */

export const VIKINGOS: Short[] = [
  {
    id: "cascos-sin-cuernos",
    titulo: "Cascos vikingos sin cuernos",
    gancho: "El casco con cuernos lo diseñó un figurinista de ópera en 1876 y ya no hubo manera de quitarlo.",
    categoria: "Vikingos",
    color: "var(--slate)",
    curioso: true,
    encargo: "Un casco de hierro liso y abollado sobre un fondo oscuro de museo.",
    fotos: [
      {
        archivo: "Cultural History (historisk) Museum Oslo. VIKINGR Norwegian Viking-Age Exhibition 08 Iron helmet from Gjermundbu (Gjermundbuhjelmen). Best-preserved viking helmet, grave find, destroyed in funeral. Equestrian warrior 950-1000. 4665.jpg",
        autor: "El casco de Gjermundbu, el único casco vikingo completo que se conserva. Museo de Historia Cultural de Oslo.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Cultural_History_(historisk)_Museum_Oslo._VIKINGR_Norwegian_Viking-Age_Exhibition_08_Iron_helmet_from_Gjermundbu_(Gjermundbuhjelmen)._Best-preserved_viking_helmet,_grave_find,_destroyed_in_funeral._Equestrian_warrior_950-1000._4665.jpg",
        foco: "58% 48%",
        alt: "Un casquete de hierro corroído con una máscara en forma de gafas sobre los ojos, sin nada en lo alto.",
      },
      {
        archivo: "Wolin 2018 07.jpg",
        autor: "Muro de escudos en el festival de Wolin, Polonia. Fotografía de Jakub T. Jankiewicz, 2018.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Wolin_2018_07.jpg",
        foco: "50% 55%",
        alt: "Una fila apretada de hombres con escudos redondos pintados, lanzas y hachas, todos con la cabeza descubierta.",
      },
      {
        archivo: "Bronze Age Helmets, Nationalmuseet Copenhagen.jpg",
        autor: "Cascos con cuernos de la Edad del Bronce, mil años anteriores a los vikingos. Museo Nacional de Dinamarca.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Bronze_Age_Helmets,_Nationalmuseet_Copenhagen.jpg",
        foco: "58% 50%",
        alt: "Dos cascos de bronce verdoso con cuernos largos y curvados, expuestos sobre un fondo negro.",
      },
      {
        archivo: "Oseberg Ship - Viking Ship Museum (Oslo).jpg",
        autor: "El barco de Oseberg, enterrado hacia el año 834 y desenterrado en 1904. Museo de Barcos Vikingos, Oslo.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Oseberg_Ship_-_Viking_Ship_Museum_(Oslo).jpg",
        foco: "55% 50%",
        alt: "Un barco largo de madera oscura dentro de una sala abovedada, con la proa enroscándose en espiral hacia arriba.",
      },
    ],
    entrada:
      "Escandinavia, siglos VIII a XI. Los guerreros del norte asaltan monasterios en Inglaterra y en Irlanda, comercian con plata por media Europa, fundan ciudades y llegan navegando hasta el Mediterráneo y hasta el mar Caspio. Trescientos años de historia bien documentada, con crónicas escritas por sus víctimas y por ellos mismos. Y de todos aquellos siglos se conserva un solo casco vikingo completo, encontrado en una tumba del sur de Noruega en 1943: un simple casquete de hierro remachado, con una pieza en forma de gafas para proteger los ojos. No tiene cuernos por ninguna parte.",
    paginas: [
      {
        rotulo: "Por qué no",
        texto:
          "Los cuernos, además, serían un estorbo grave en combate: dan al enemigo un asa perfecta para tirar de la cabeza hacia atrás y se enganchan con cualquier cosa en un espacio estrecho como la cubierta de un barco. Ningún relato contemporáneo los menciona, ni los que escribieron los propios escandinavos ni los cronistas de los monasterios saqueados, que tenían pocos motivos para adornar a quien acababa de robarles. Las tallas y los grabados de la época muestran cascos lisos, cónicos o redondeados, algunos con una pieza que baja a proteger la nariz.",
        destacado: { tipo: "frase", frase: "Un cuerno es un asa perfecta para tirarle a alguien de la cabeza." },
      },
      {
        rotulo: "La ópera",
        texto:
          "El origen del malentendido está bastante bien documentado. En el siglo XIX, los movimientos nacionalistas del norte de Europa buscaron una imagen épica de sus antepasados y los pintores empezaron a añadir cuernos y alas a los cascos, tomándolos de hallazgos arqueológicos muy anteriores, de la Edad del Bronce, que eran objetos ceremoniales y no de guerra. En 1876, el figurinista de un ciclo de óperas alemanas puso cuernos en escena delante de un público enorme, y a partir de ahí la imagen se volvió imparable en carteles, ilustraciones y disfraces.",
        destacado: { tipo: "cifra", cifra: "1876", unidad: "el estreno que fijó la imagen" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El casco con cuernos está hoy en los envases de mantequilla, en los cómics, en los equipos de fútbol americano y en cualquier disfraz de carnaval, y ha resistido más de un siglo de correcciones de los museos escandinavos, que se han rendido y lo explican en un cartel a la entrada. Es un ejemplo perfecto de cómo una imagen bien hecha le gana a la evidencia: de aquellos siglos de saqueos y de viajes queda un solo casco de hierro liso, y lo que todo el mundo tiene en la cabeza es un sombrero de ópera.",
      },
    ],
  },

  {
    id: "america-en-1021",
    titulo: "Llegaron a América en el año 1021",
    gancho: "Se sabe el año exacto por una tormenta solar que dejó marca en los anillos de tres troncos.",
    categoria: "Vikingos",
    color: "var(--ochre)",
    encargo: "Una casa de bloques de tierra con hierba encima junto a una costa fría.",
    entrada:
      "Terranova, en el este de Canadá, año 1021. Un grupo de escandinavos corta árboles para reparar un barco en un campamento junto a la costa. Llevan siglos navegando hacia el oeste, saltando de Islandia a Groenlandia, y han llegado al continente americano cuatro siglos y medio antes que ningún otro europeo. Se quedan allí unos pocos años y se van.",
    paginas: [
      {
        rotulo: "El campamento",
        texto:
          "El sitio se encontró en 1960 y es el único asentamiento escandinavo confirmado en América: ocho construcciones de bloques de tierra con hierba, una fragua, restos de clavos de hierro y de agujas de tejer, y virutas de madera trabajada con herramientas metálicas, que los pueblos locales no usaban. No era una colonia sino una base de reparación y de invernada, con capacidad para unas ochenta personas. Las sagas islandesas contaban desde hacía siglos aquellos viajes, con nombres y con detalles, y se tomaban por literatura hasta que apareció el yacimiento.",
        destacado: { tipo: "frase", frase: "Las sagas lo contaban desde hacía siglos y nadie las creía." },
      },
      {
        rotulo: "El año exacto",
        texto:
          "La fecha llegó en 2021 por un camino inesperado. En el año 993 hubo una tormenta solar enorme que dejó en todos los árboles del planeta un anillo con una cantidad anómala de un tipo concreto de carbono, una marca reconocible en cualquier madera de esa época y en cualquier continente. Los investigadores localizaron ese anillo en tres troncos cortados del campamento y contaron los anillos que venían después hasta el borde exterior, que corresponde al año de la tala: veintiocho. Es decir, 1021, con una precisión de un año.",
        destacado: { tipo: "cifra", cifra: "1021", unidad: "el año exacto, contado por anillos" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "No se quedaron. Los relatos hablan de enfrentamientos con la población local, y unos pocos centenares de recién llegados a miles de kilómetros de casa, sin refuerzos y sin ninguna ventaja tecnológica decisiva, tenían poco que hacer. El asentamiento se abandonó en unos años y el contacto no dejó rastro genético ni cultural apreciable en ninguno de los dos lados. Es el ejemplo más limpio de un encuentro que ocurrió de verdad y no cambió nada: la historia se movió cinco siglos más tarde, cuando llegaron otros con barcos mayores.",
      },
    ],
  },

  {
    id: "asamblea-islandesa",
    titulo: "El parlamento más antiguo se reunía al aire libre",
    gancho: "Una llanura de lava, una pared que devuelve la voz y un hombre que recitaba las leyes de memoria.",
    categoria: "Vikingos",
    color: "var(--plum)",
    encargo: "Una llanura de lava con una pared rocosa larga y hierba amarilla.",
    entrada:
      "Islandia, año 930. Los colonos escandinavos que ocupan la isla desde hace medio siglo no tienen rey ni ejército. Deciden reunirse dos semanas cada verano en una llanura de lava del suroeste para resolver pleitos, aprobar leyes y cerrar acuerdos. Aquella asamblea sigue existiendo hoy y es el parlamento en funcionamiento más antiguo del mundo.",
    paginas: [
      {
        rotulo: "La roca",
        texto:
          "El sitio se eligió por la acústica: una pared de lava que devuelve la voz y permite que varios miles de personas oigan a alguien hablando desde una roca, sin ningún aparato de por medio. Allí se plantaban tiendas durante dos semanas, se cerraban tratos, se concertaban matrimonios y se vendía de todo, además de dictarse sentencias. No había edificio, ni sillas, ni actas escritas, ni prisión: las penas eran multas en ganado o el destierro, que en una isla del Atlántico norte podía equivaler a una condena a muerte.",
        destacado: { tipo: "frase", frase: "Ni edificio, ni actas, ni prisión: multas o destierro." },
      },
      {
        rotulo: "El recitador",
        texto:
          "Como no había leyes escritas, se elegía cada tres años a un hombre encargado de recordarlas y de recitar en voz alta un tercio del código completo cada verano, de modo que en su mandato se repasara entero delante de todos. Si se equivocaba, cualquiera podía corregirlo desde abajo. Ese oficio hacía las veces de biblioteca, de archivo y de garantía de que nadie inventara una norma sobre la marcha. En el año 1000, la asamblea decidió por votación adoptar el cristianismo, dejando que quien quisiera siguiera con los ritos antiguos en privado.",
        destacado: { tipo: "cifra", cifra: "1/3", unidad: "del código recitado cada verano" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Las leyes se pusieron por escrito en 1117, sobre pieles de vaca, precisamente porque el sistema de memorizarlas empezaba a fallar. La asamblea perdió poder cuando la isla pasó a depender de Noruega y después de Dinamarca, y llegó a suspenderse durante décadas, pero se reconstituyó y hoy funciona en un edificio de piedra de la capital, con el mismo nombre que hace mil cien años. La llanura donde se reunía es un parque nacional, y el sitio exacto de la roca sigue devolviendo la voz a quien se pone a hablar.",
      },
    ],
  },
];
