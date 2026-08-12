import type { Short } from "../shorts";

/* ==========================================================================
   El hierro.

   El metal que da nombre a una edad entera y que sigue siendo la base de
   casi todo lo que construimos. Ya hay un fichero de acero, así que aquí se
   habla del metal antes del acero: de dónde salía y qué costaba trabajarlo.

   La regla del tema: se explica la DIFICULTAD TÉCNICA de cada paso —fundir,
   forjar, no oxidarse— con temperaturas y con tiempos, porque el hierro es
   difícil precisamente por eso. Y se dice siempre quién estaba delante del
   fuego, que era un trabajo durísimo.
   ========================================================================== */

export const HIERRO: Short[] = [
  {
    id: "el-hierro-caido-del-cielo",
    titulo: "El hierro cayó del cielo",
    gancho: "Antes de saber fundir el mineral, algunos pueblos forjaban hierro que había caído del cielo, y lo llamaban así.",
    categoria: "Hierro",
    color: "var(--slate)",
    curioso: true,
    encargo: "Un trozo de meteorito metálico cortado y pulido, con dibujo de cristales.",
    fotos: [
      {
        archivo: "Iron meteorite. Hammersley Range, Australia-8911.jpg",
        autor: "Meteorito de hierro de la sierra de Hammersley, cortado y atacado con ácido. Fotografía de Raimond Spekking.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Iron_meteorite._Hammersley_Range,_Australia-8911.jpg",
        foco: "50% 42%",
        alt: "Una lámina de metal gris con un enrejado de bandas cruzadas dibujado en la superficie pulida.",
      },
      {
        archivo: "2024-12-20 15-29-16 CZ PRG Tutankhamun exhib JHe N9.jpg",
        autor: "La daga de hierro de Tutankamón junto a su vaina de oro. Fotografía de Juhele, exposición de Praga, 2024.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:2024-12-20_15-29-16_CZ_PRG_Tutankhamun_exhib_JHe_N9.jpg",
        foco: "50% 45%",
        alt: "Un puñal de hoja clara con empuñadura labrada, tumbado sobre fondo negro al lado de una funda dorada.",
      },
      {
        archivo: "Aurora and perseids.jpg",
        autor: "Perseidas cruzando el cielo bajo una aurora. Fotografía de Stephan Sprinz, agosto de 2024.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Aurora_and_perseids.jpg",
        foco: "50% 45%",
        alt: "Cielo nocturno con estelas de meteoros y una franja verde de aurora sobre el horizonte.",
      },
      {
        archivo: "Banded iron formation Dales Gorge.jpg",
        autor: "Formación de hierro bandeado en la garganta de Dales, Australia. Fotografía de Graeme Churchard, 2013.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Banded_iron_formation_Dales_Gorge.jpg",
        foco: "50% 50%",
        alt: "Roca con capas rojas, ocres y grises apiladas una encima de otra como las hojas de un libro.",
      },
    ],
    entrada:
      "Egipto y Oriente Próximo, hacia el año 3200 antes de Cristo, más de mil años antes de que nadie en la zona supiera sacar hierro del mineral. En varias tumbas de esa época aparecen cuentas ensartadas en collares y alguna hoja pequeña, todas de hierro, un metal que entonces era tan raro que valía más que el oro y se reservaba para ajuares de gente muy principal. Durante mucho tiempo nadie supo explicar de dónde había salido aquel material, porque la tecnología para obtenerlo sencillamente no existía todavía. El análisis químico de las piezas acabó dando una respuesta que estaba escrita desde el principio: venían de meteoritos.",
    paginas: [
      {
        rotulo: "La prueba",
        texto:
          "Lo que delata el origen de aquel metal es el níquel que lleva mezclado. El hierro de meteorito contiene un porcentaje alto de ese metal, muy superior al del hierro terrestre. Además, al cortarlo aparece un dibujo de cristales alargados que solo se forma enfriándose durante millones de años en el espacio. Cuando se analizaron con rayos las piezas de varias tumbas antiguas, incluida una daga muy conocida que acompañaba a un faraón adolescente, aparecieron exactamente esas dos marcas. El metal, por tanto, había caído literalmente del cielo, y quien lo trabajó lo sabía perfectamente.",
        destacado: { tipo: "frase", frase: "El níquel y un dibujo de cristales delatan el origen espacial." },
      },
      {
        rotulo: "El nombre",
        texto:
          "Los propios textos lo decían y nadie lo había tomado en serio. En egipcio antiguo, el hierro se nombraba con una expresión que puede traducirse como metal del cielo, y en otras lenguas de la zona aparecen fórmulas parecidas. Aquel material se trabajaba en frío, a martillazos, porque nadie podía alcanzar las temperaturas necesarias para fundirlo, y por eso las piezas son pequeñas: cuentas, amuletos, alguna hoja. Fabricar una espada entera con aquel material era sencillamente imposible, y por eso el hierro fue durante siglos cosa de joyeros y no de armeros.",
        destacado: { tipo: "cifra", cifra: "3200", unidad: "años antes de Cristo, las piezas más antiguas" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una imagen que ayuda a entender por qué el hierro tardó tanto en imponerse. No es un metal escaso, sino todo lo contrario: es de los más abundantes de la corteza terrestre. Lo difícil no era encontrarlo, sino separarlo de la roca, y eso exige temperaturas y técnicas que costaron siglos. Mientras tanto, el bronce se fundía con relativa facilidad y dominó dos milenios. El hierro solo se impuso cuando alguien aprendió a sacarlo del mineral corriente, y entonces resultó ser mucho más barato que el bronce, que dependía de un estaño escaso y lejano.",
      },
    ],
  },
  {
    id: "la-esponja-de-hierro",
    titulo: "Nadie vio hierro líquido",
    gancho: "Sacaban del horno una masa esponjosa mezclada con escoria y la golpeaban durante horas para limpiarla.",
    categoria: "Hierro",
    color: "var(--ochre)",
    encargo: "Un horno bajo de barro con la boca abierta y brasas al fondo.",
    fotos: [
      {
        archivo: "Blacksmith (1).jpg",
        autor: "Herrero levantando el martillo sobre una pieza al rojo, 2013. Fotografía de Sasener.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Blacksmith_(1).jpg",
        foco: "50% 50%",
        alt: "Un herrero con el martillo en alto sobre una barra de metal incandescente que le ilumina la cara desde abajo.",
      },
      {
        archivo: "0910 6290m Blacksmith bellows, Fang, Gabon (5618236012).jpg",
        autor: "Fragua alimentada a fuelle en un taller fang, Gabón, 2011. Fotografía de Ann Porteus.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:0910_6290m_Blacksmith_bellows,_Fang,_Gabon_(5618236012).jpg",
        foco: "50% 50%",
        alt: "Un fuelle de piel soplando sobre unas brasas en una fragua de tierra.",
      },
      {
        archivo: "Blacksmith working.jpg",
        autor: "Herrero trabajando una pieza caliente sobre el yunque. Fotografía de Jeff Kubina, 2008.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Blacksmith_working.jpg",
        foco: "50% 50%",
        alt: "Unas manos sujetando con tenazas una pieza al rojo sobre el yunque mientras cae el martillo.",
      },
      {
        archivo: "Historic blast furnaces, Blaenavon Ironworks - geograph.org.uk - 5099239.jpg",
        autor: "Altos hornos históricos de la ferrería de Blaenavon, Gales, 2016. Fotografía de M J Roscoe.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Historic_blast_furnaces,_Blaenavon_Ironworks_-_geograph.org.uk_-_5099239.jpg",
        foco: "50% 50%",
        alt: "Los muros de piedra y los arcos de unos altos hornos antiguos conservados como ruina industrial.",
      },
    ],
    entrada:
      "Oriente Próximo y Europa, desde el año 1200 antes de Cristo aproximadamente. El hierro funde a mil quinientos treinta y ocho grados, una temperatura que los hornos antiguos no alcanzaban ni de lejos: con carbón vegetal y un fuelle de cuero se llegaba a mil doscientos con suerte. Y sin embargo aquellos herreros sacaban hierro, porque el metal se puede obtener sin llegar nunca a fundirlo. Ese descubrimiento, que parece un tecnicismo de fragua, es el que abre la Edad del Hierro y cambia de golpe la agricultura y la guerra.",
    paginas: [
      {
        rotulo: "Sin fundir",
        texto:
          "El truco está en que el carbón al arder produce un gas capaz de robarle el oxígeno al mineral de hierro. En un horno bajo, alimentado con carbón vegetal y con aire de fuelle, ese gas convierte el mineral en hierro metálico a unos mil doscientos grados. El metal nunca llega a licuarse. Lo que se saca al final es una masa pastosa y llena de agujeros, mezclada con impurezas fundidas. Se llama esponja de hierro, pesa unos pocos kilos y no se parece nada a lo que uno imagina.",
        destacado: { tipo: "cifra", cifra: "1.200", unidad: "grados bastaban, sin fundir el metal" },
      },
      {
        rotulo: "A martillazos",
        texto:
          "Esa masa no sirve para nada tal como sale del horno, porque lleva escoria repartida por dentro. Hay que recalentarla y golpearla con el martillo una y otra vez, doblándola sobre sí misma, para ir expulsando las impurezas en forma de chispas. Un herrero podía pasar un día entero convirtiendo unos kilos de esponja en un lingote utilizable, y de ahí viene el prestigio antiguo del oficio. La consecuencia es que el hierro de aquella época salía caro por las horas de trabajo que llevaba dentro, y no por el material, que estaba en cualquier ladera.",
        destacado: { tipo: "frase", frase: "El hierro era caro por las horas de martillo, no por el mineral." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el reparto que explica el mundo antiguo: donde había bosque para hacer carbón vegetal y mineral cerca, aparecían herrerías, y esos pueblos ganaron ventaja en aperos y en armas. La fundición de verdad, con hierro líquido colado en moldes, llegó mucho antes a China que a Europa, gracias a hornos mejores y a un mineral con fósforo que funde a menor temperatura. En Europa hubo que esperar al alto horno medieval, capaz de mantener el fuego días enteros, y con él llegaron los cañones, las rejas y las máquinas.",
      },
    ],
  },
  {
    id: "por-que-se-oxida",
    titulo: "Vuelve a ser piedra",
    gancho: "El óxido no es una enfermedad del metal: es el estado en el que estaba antes de que lo sacáramos del suelo.",
    categoria: "Hierro",
    color: "var(--plum)",
    encargo: "Una viga oxidada con la pintura levantada y el óxido naranja debajo.",
    entrada:
      "Cualquier estructura metálica a la intemperie, con un coste calculado por varios países desde los años setenta del siglo XX. La corrosión se lleva cada año una parte enorme del acero que se fabrica en el mundo, y las estimaciones sitúan su coste en torno al tres por ciento del producto interior bruto mundial. Y la razón de fondo no es un defecto de fabricación, sino pura termodinámica.",
    paginas: [
      {
        rotulo: "Volver atrás",
        texto:
          "El hierro casi no existe en la naturaleza como metal puro: aparece combinado con oxígeno formando minerales, es decir, óxidos de distintos colores. Sacarlo de ahí exige mucha energía, que es exactamente lo que se hace en un alto horno con carbón y calor. Ese metal queda cargado con esa energía y, en presencia de agua y aire, la suelta poco a poco volviendo a combinarse con el oxígeno. Oxidarse no es más que deshacer, muy despacio y sin ayuda de nadie, el trabajo que costó tanto hacer en el alto horno.",
        destacado: { tipo: "frase", frase: "El metal solo está deshaciendo el trabajo del alto horno." },
      },
      {
        rotulo: "El óxido malo",
        texto:
          "La diferencia entre un metal que se pudre y otro que aguanta está en el tipo de capa que forma su óxido. El aluminio también se oxida, y muy deprisa, pero su óxido forma una película durísima, transparente y muy pegada, que protege el metal que hay debajo. El óxido del hierro, en cambio, ocupa más volumen que el metal original, se hincha, se agrieta y se desprende en escamas, dejando expuesta una superficie nueva. Por eso una pieza de hierro acaba comida entera con el tiempo, mientras que una de aluminio se queda prácticamente como estaba el primer día.",
        destacado: { tipo: "cifra", cifra: "3", unidad: "por ciento del PIB mundial cuesta la corrosión" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron todas las formas de pelear contra eso, que consisten en aislar el metal o en engañarlo. Se pinta, se galvaniza con una capa de cinc o se le conecta un trozo de un metal más reactivo que se oxida en su lugar. Ese último truco, que exige cambiar la pieza sacrificada cada cierto tiempo, se usa en barcos y en tuberías enterradas. Y quedó un acero especial que forma una capa de óxido estable y compacta, parecida a la del aluminio, muy usado en esculturas y en puentes por su color anaranjado.",
      },
    ],
  },
];
