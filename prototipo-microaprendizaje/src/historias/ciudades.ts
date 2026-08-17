import type { Short } from "../shorts";

/* ==========================================================================
   Ciudades.

   Todo el mundo vive en una y nadie mira cómo está hecha. Ese es el gancho:
   señalar un detalle que el lector ha pisado mil veces sin verlo.

   La regla del tema: la ciudad es un DOCUMENTO. Una esquina cortada, un plano
   de metro que miente a propósito, una casa apoyada sobre troncos. Cada rasgo
   raro es la firma de alguien que resolvió un problema concreto en una fecha
   concreta, y muchas veces ese alguien perdió la discusión y solo quedó el
   trozo que ya estaba construido.

   Nada de urbanismo abstracto. Si no se puede señalar con el dedo desde una
   acera, no entra.
   ========================================================================== */

export const CIUDADES: Short[] = [
  {
    id: "chaflanes-cerda",
    titulo: "Barcelona sin esquinas",
    gancho: "Su autor diseñó manzanas con jardín dentro. Se construyeron los cuatro lados.",
    categoria: "Ciudades",
    color: "var(--ochre)",
    encargo: "Una esquina achaflanada del Eixample vista desde el centro de la calzada.",
    fotos: [
      {
        archivo: "Panorama from Guinardó Park, Barcelona ESP.jpg",
        autor: "Barcelona vista desde el parque del Guinardó, con la cuadrícula del Eixample bajando hasta el mar. Fotografía de Benlet26.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Panorama_from_Guinard%C3%B3_Park,_Barcelona_ESP.jpg",
        foco: "50% 55%",
        alt: "Una panorámica de la ciudad al anochecer, con el cielo teñido de rosa y lila y una retícula de tejados extendiéndose hasta el mar.",
      },
      {
        archivo: "Casa Mila, Barcelona (P1170595).jpg",
        autor: "La Casa Milà de Antoni Gaudí, levantada sobre uno de los chaflanes del paseo de Gracia. Fotografía de Matti Blume.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Casa_Mila,_Barcelona_(P1170595).jpg",
        foco: "50% 45%",
        alt: "Una fachada ondulada de piedra clara que dobla la esquina en curva, con balcones de hierro retorcido.",
      },
      {
        archivo: "The top floor of a small apartment building in the Eixample, Barcelona (49731113776).jpg",
        autor: "El remate de la Casa Marià Pau, en el Eixample, construida entre 1905 y 1907. Fotografía de Spencer Means.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:The_top_floor_of_a_small_apartment_building_in_the_Eixample,_Barcelona_(49731113776).jpg",
        foco: "50% 50%",
        alt: "La última planta de un edificio modernista con galería acristalada, cornisa labrada y azulejos de colores.",
      },
      {
        archivo: "Superilla del barri de Sant Antoni, Barcelona 2.jpg",
        autor: "Un cruce del barrio de Sant Antoni convertido en plaza dentro de una supermanzana. Fotografía de Cataleirxs.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Superilla_del_barri_de_Sant_Antoni,_Barcelona_2.jpg",
        foco: "50% 50%",
        alt: "Un cruce de calles ocupado por bancos, jardineras y árboles jóvenes en lugar de coches.",
      },
    ],
    entrada:
      "En el Eixample de Barcelona no hay ni una sola esquina en ángulo recto: cada cruce tiene los cuatro vértices cortados en diagonal, de modo que lo que se abre delante de quien camina no es un cruce, sino una plaza octogonal de unos veinte metros de lado. No es un capricho estético, ni una tradición local, ni una manía de los constructores de la época. Es una decisión de ingeniería tomada por un hombre concreto, Ildefons Cerdà, defendida con datos de mortalidad y aprobada en 1859 contra la opinión de casi todo el mundo.",
    paginas: [
      {
        rotulo: "Para qué",
        texto:
          "Cerdà era ingeniero de caminos y llegó al urbanismo desde los datos: hizo un estudio sobre las condiciones de vida en la Barcelona amurallada y encontró que en los barrios más hacinados la esperanza de vida era menos de la mitad que en los acomodados. Su plan atacaba eso con aire, luz y circulación. El chaflán resolvía varias cosas a la vez: dejaba entrar sol en el cruce, permitía ver quién venía por la calle perpendicular y daba espacio de sobra para que girase un vehículo largo, que en aquel momento significaba un carro o un tranvía tirado por caballos.",
        destacado: {
          tipo: "frase",
          frase: "El chaflán no lo pidió la estética: lo pidieron el sol y el radio de giro.",
        },
      },
      {
        rotulo: "Lo que no se hizo",
        texto:
          "El plano original es bastante más ambicioso que la ciudad resultante. Cerdà proyectaba manzanas edificadas solo por dos de sus lados, con jardines y equipamientos en el interior, y una altura limitada a unos dieciséis metros. Lo que ocurrió fue lo previsible: el suelo era privado, la presión inmobiliaria empujó, se fueron autorizando excepciones y las manzanas acabaron cerradas por los cuatro costados y con más plantas. De aquel interior de jardín quedan hoy unos pocos patios recuperados. El propio Cerdà murió arruinado en <strong>1876</strong>, con su plan a medio traicionar.",
        destacado: { tipo: "cifra", cifra: "1859", unidad: "año de aprobación del plan" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La geometría, sin embargo, aguantó, y sigue dando de sí siglo y medio después. Los chaflanes se han usado desde entonces para aparcamiento, para terrazas, para contenedores y, en los últimos años, para el programa de supermanzanas, que reordena el tráfico de grupos de nueve manzanas y devuelve espacio al peatón. También los inventó la palabra: <em>chaflán</em> era un término de cantería, el corte de una arista en un sillar, antes de que Barcelona lo convirtiera en una forma urbana entera, reconocible desde un avión y copiada después en media docena de ciudades.",
      },
    ],
  },

  {
    id: "venecia-pilotes",
    titulo: "Venecia se apoya en madera",
    gancho: "La madera lleva mil años bajo el agua y no se ha podrido.",
    categoria: "Ciudades",
    color: "var(--sage)",
    curioso: true,
    encargo: "Los cimientos de ladrillo de un palacio veneciano al ras del agua del canal.",
    fotos: [
      {
        archivo: "Palazzo Cavalli Franchetti (Venice).jpg",
        autor: "El palacio Cavalli Franchetti al borde del Gran Canal, con el agua lamiendo la base.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3APalazzo%20Cavalli%20Franchetti%20(Venice).jpg",
        foco: "50% 72%",
        alt: "Fachada gótica de un palacio veneciano sobre el canal, con amarraderos a rayas y lanchas de madera delante.",
      },
      {
        archivo: "(Venice) - Santa Maria della Salute - Le due cupole e i due campanili.jpg",
        autor: "Santa María de la Salud, la iglesia bajo la que se clavó más de un millón de pilotes.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3A(Venice)%20-%20Santa%20Maria%20della%20Salute%20-%20Le%20due%20cupole%20e%20i%20due%20campanili.jpg",
        foco: "50% 50%",
        alt: "Iglesia de piedra blanca con dos cúpulas y dos campanarios, vista desde el agua.",
      },
      {
        archivo: "Hotel Ca Sagredo - Grand Canal - Rialto - Venice Italy Venezia - Creative Commons by gnuckx (4795639882).jpg",
        autor: "Palacio del siglo XV en el Gran Canal, con los postes de madera clavados delante de la puerta de agua.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AHotel%20Ca%20Sagredo%20-%20Grand%20Canal%20-%20Rialto%20-%20Venice%20Italy%20Venezia%20-%20Creative%20Commons%20by%20gnuckx%20(4795639882).jpg",
        foco: "50% 60%",
        alt: "Palacio veneciano visto desde el canal, con troncos de amarre asomando del agua junto a la fachada.",
      },
      {
        archivo: "(Barcelona) Santa Maria della Salute and the Dogana, Venice, at Sunset, across the Bacino - 1840 - William Turner Tate Britain.jpg",
        autor: "Óleo de William Turner, 1840: la Salute y la Aduana al atardecer, vistas desde el otro lado del Bacino. Tate Britain.",
        licencia: "Public domain",
        pdPorEdad: 1851,
        fuente: "https://commons.wikimedia.org/wiki/File%3A(Barcelona)%20Santa%20Maria%20della%20Salute%20and%20the%20Dogana%2C%20Venice%2C%20at%20Sunset%2C%20across%20the%20Bacino%20-%201840%20-%20William%20Turner%20Tate%20Britain.jpg",
        foco: "50% 50%",
        alt: "Pintura de Venecia al atardecer, con las cúpulas disueltas en una luz dorada y barcas en primer plano.",
      },
    ],
    entrada:
      "Venecia no se levanta sobre roca ni sobre tierra firme, sino sobre el barro blando de una laguna, que es el peor sitio imaginable para poner una ciudad de piedra. Para poder construir encima, quienes la hicieron clavaron troncos de árbol en el fango, uno junto a otro y muy apretados, hasta alcanzar una capa de arcilla compacta que sí aguanta peso. Sobre esa cabellera de madera pusieron plataformas de piedra, y sobre las plataformas los palacios. Los troncos siguen ahí abajo, mil años después, sin que nadie los haya cambiado nunca, y siguen aguantando el peso de la ciudad entera.",
    paginas: [
      {
        rotulo: "El bosque de abajo",
        texto:
          "Los pilotes son sobre todo de aliso, roble y alerce, traídos por flotación desde los bosques de la actual Eslovenia y de los Alpes. Se hincaban a golpe de maza, muy juntos, hasta atravesar el lodo. Para levantar la basílica de Santa María de la Salud, en el siglo XVII, la documentación de la obra habla de más de un millón de pilotes clavados a lo largo de dos años. La ciudad entera funciona así: cada edificio se apoya no en un cimiento macizo, sino en un bosque invertido que nadie ha visto nunca entero.",
        destacado: { tipo: "cifra", cifra: "1.000.000+", unidad: "pilotes bajo una sola iglesia" },
      },
      {
        rotulo: "Por qué no se pudre",
        texto:
          "La madera se pudre porque unos hongos y unas bacterias la comen, y esos organismos necesitan oxígeno. Enterrada en el barro de la laguna y cubierta permanentemente de agua salobre, la madera queda en un ambiente sin oxígeno donde esos descomponedores no pueden trabajar. Con el tiempo, además, el agua deposita minerales dentro de la estructura y la va endureciendo, en un proceso parecido a una petrificación lenta. El peligro no es que el agua la tape: es que la destape. Un pilote que asome y se seque a ratos sí se degrada.",
        destacado: {
          tipo: "frase",
          frase: "El agua no es lo que ataca a esa madera: es lo que la conserva.",
        },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "Los problemas de Venecia vienen de por encima y de por debajo. Durante el siglo XX se bombeó agua del subsuelo para la industria de tierra firme, y la ciudad se hundió unos centímetros antes de que se prohibiera; a eso se suma la subida del nivel del mar. Desde 2020 funciona el sistema MOSE, un juego de compuertas móviles en las bocas de la laguna que se levantan con aire comprimido cuando se anuncia marea alta. Los pilotes, mientras tanto, siguen ahí abajo, aguantando exactamente igual que el primer día.",
      },
    ],
  },

  {
    id: "mapa-beck",
    titulo: "El plano del metro miente",
    gancho: "Un delineador lo dibujó en su tiempo libre y se lo rechazaron por raro.",
    categoria: "Ciudades",
    color: "var(--slate)",
    encargo: "Un plano de metro esquemático de líneas de colores, sin nombres legibles.",
    entrada:
      "Todos los planos de metro del mundo se parecen sospechosamente entre sí: líneas de colores que solo van en horizontal, en vertical o a cuarenta y cinco grados, estaciones repartidas a distancias regulares aunque en la calle no lo estén, y un centro dibujado mucho más grande de lo que le tocaría. Ninguna de esas cosas es cierta sobre el terreno; todas son mentira a propósito. La idea es de un delineador de la compañía del metro de Londres llamado Harry Beck, y es de 1931. Se la rechazaron por rara. Hoy es el mismo idioma en Tokio, en Moscú y en Madrid.",
    paginas: [
      {
        rotulo: "La idea",
        texto:
          "Hasta entonces, los planos del metro se dibujaban sobre el mapa real de la ciudad, y el resultado era ilegible: en el centro las estaciones se amontonaban unas encima de otras y en las afueras las líneas se estiraban por zonas vacías. Beck, que trabajaba dibujando esquemas de circuitos eléctricos, se dio cuenta de algo evidente y que nadie había dicho: bajo tierra, al viajero le da igual la geografía. Lo único que necesita saber es el orden de las paradas y dónde puede cambiar de línea. Todo lo demás es ruido, y se puede tirar.",
        destacado: {
          tipo: "frase",
          frase: "Bajo tierra la geografía no sirve. Solo importa el orden y los cambios.",
        },
      },
      {
        rotulo: "El rechazo",
        texto:
          "La compañía lo rechazó al principio por demasiado esquemático: temían que el público lo encontrara confuso precisamente por no parecerse a un mapa. Beck insistió y en <strong>1933</strong> aceptaron imprimir una tirada de prueba en formato de bolsillo. Se agotó en cuestión de días y hubo que reimprimir de inmediato. Le pagaron unas pocas guineas por el trabajo, siguió actualizando el plano durante casi treinta años a cambio de muy poco, y acabó enfrentado con la compañía por las modificaciones que le fueron haciendo sin consultarle, hasta que le retiraron el nombre del plano y dejó de figurar en él.",
        destacado: { tipo: "cifra", cifra: "1933", unidad: "la tirada de prueba se agotó en días" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El diseño se copió en todo el planeta y hoy es un idioma internacional: cualquiera se orienta en el metro de una ciudad que no conoce y cuyo alfabeto no lee. Tiene un efecto secundario documentado y bastante gracioso: la gente coge el metro para trayectos que se harían antes andando, porque en el plano parecen lejos. En Londres, dos estaciones célebres del centro están a menos de trescientos metros la una de la otra, con la calle de por medio, y durante décadas hubo viajeros que bajaban al andén y hacían un transbordo entero para recorrerlas.",
      },
    ],
  },
];
