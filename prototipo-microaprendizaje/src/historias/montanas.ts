import type { Short } from "../shorts";

/* ==========================================================================
   Montañas.

   El riesgo del tema es la épica de expedición: el frío, la cumbre, la
   voluntad de hierro. Está contado mil veces y no informa de nada.

   La regla del tema: una montaña se cuenta por CÓMO SE MIDE Y QUIÉN
   DECIDE. Un funcionario de una oficina de cálculo que revisa columnas de
   números. Un científico que sube con un barómetro para saber a qué
   temperatura hierve el agua. Una cifra redonda que da miedo publicar.
   Las montañas están quietas: lo que se mueve es la manera de mirarlas.

   Y siempre se traduce la altura a algo comprensible, porque un número
   de cuatro cifras en metros no se imagina.
   ========================================================================== */

export const MONTANAS: Short[] = [
  {
    id: "altura-everest",
    titulo: "Cómo se midió el Everest",
    gancho: "El cálculo dio una cifra tan redonda que temieron que pareciera un número puesto a ojo.",
    categoria: "Montañas",
    color: "var(--slate)",
    curioso: true,
    encargo: "Un teodolito de latón sobre un trípode apuntando a una cordillera lejana.",
    entrada:
      "India, 1852. Un equipo lleva décadas midiendo el subcontinente con teodolitos y cadenas, triangulando desde la costa hacia el norte. Un matemático de la oficina de cálculo revisa los datos de un pico lejano del Himalaya, catalogado sin nombre y con un número. Entra en el despacho del jefe a decir que ha encontrado la montaña más alta del mundo. El número que le sale es tan redondo que le da apuro publicarlo, porque cualquiera va a pensar que lo ha puesto a ojo. Lo que hace a continuación es una de esas decisiones pequeñas que se quedan en los libros para siempre. Y la montaña acabó llamándose como un funcionario que nunca la vio.",
    paginas: [
      {
        rotulo: "La medición",
        texto:
          "Medir una montaña a doscientos kilómetros de distancia y sin acercarse a ella se hace por triángulos: se apunta con un instrumento desde dos puntos cuya separación se conoce con precisión y se calcula el resto. El problema es que la luz se curva al atravesar el aire, y esa curvatura depende de la temperatura y de la humedad, así que hay que corregirla. Aquel matemático combinó seis observaciones tomadas desde estaciones distintas y le salieron veintinueve mil pies clavados, unos ocho mil ochocientos cuarenta metros. Una cifra demasiado redonda para resultar creíble.",
        destacado: { tipo: "cifra", cifra: "29.000", unidad: "pies exactos daba el cálculo" },
      },
      {
        rotulo: "Los dos pies",
        texto:
          "El jefe de la oficina, según la versión que se cuenta desde entonces, decidió publicar veintinueve mil dos pies para que nadie pensara que era un número aproximado colocado por comodidad. La anécdota no está documentada de primera mano y algunos historiadores dudan de ella, pero la cifra que se publicó en 1856 fue exactamente esa. La montaña recibió el apellido de un antiguo jefe del servicio que se opuso al homenaje, porque él mismo defendía usar los nombres locales, y aquel pico tenía al menos dos, uno tibetano y otro nepalí, que se ignoraron durante un siglo largo.",
        destacado: { tipo: "frase", frase: "Publicaron dos pies de más para que no pareciera redondo." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La medida moderna, hecha con satélites y con sensores colocados en la propia cumbre, da ocho mil ochocientos cuarenta y ocho metros con ochenta y seis centímetros, una cifra acordada en 2020 entre los dos países que se reparten la montaña. El error de aquel cálculo con teodolitos, hecho a mano y a doscientos kilómetros de distancia, fue de unos pocos metros. La montaña además crece unos milímetros al año, empujada por el choque de dos placas, y encoge de golpe con los terremotos grandes. Los nombres locales ya se usan oficialmente en los dos países.",
      },
    ],
  },

  {
    id: "mont-blanc-premio",
    titulo: "Subieron por un premio",
    gancho: "Un naturalista ofreció dinero a quien encontrara la ruta. Tardaron veintiséis años en cobrarlo.",
    categoria: "Montañas",
    color: "var(--ochre)",
    encargo: "Una cordada antigua con bastones largos cruzando un glaciar agrietado.",
    entrada:
      "Alpes, 1760. Un naturalista suizo de veinte años visita el valle al pie de la montaña más alta de Europa occidental y ofrece una recompensa en dinero a quien encuentre un camino hasta la cumbre. Nadie sube montañas por gusto en aquella época: se consideran sitios peligrosos, inútiles y llenos de dragones en las leyendas del lugar.",
    paginas: [
      {
        rotulo: "Los intentos",
        texto:
          "Durante veintiséis años lo intentaron cazadores de gamuzas, buscadores de cristales y algún médico del pueblo, y todos acabaron dándose la vuelta. No existía equipo de ningún tipo: se subía con ropa de campo, bastones largos, escaleras de mano para cruzar las grietas y una idea muy vaga de lo que le ocurre al cuerpo por encima de los cuatro mil metros. Se creía que el aire de arriba podía envenenar o que podía salir sangre por los oídos. En 1786, un médico del pueblo y un buscador de cristales dieron con una ruta viable y llegaron arriba al atardecer.",
        destacado: { tipo: "cifra", cifra: "26", unidad: "años intentándolo antes de lograrlo" },
      },
      {
        rotulo: "El barómetro",
        texto:
          "El que había puesto el premio subió al año siguiente, con dieciocho porteadores, una escalera, un catre, una tienda, un barómetro y varios termómetros. No iba a hacer cima por deporte: quería medir la presión del aire a esa altura para poder calcular después la altura de otras montañas, y comprobar a qué temperatura hierve allí el agua, que es bastante menos que abajo. Se pasó cuatro horas en la cumbre haciendo experimentos, con dolor de cabeza y sin poder concentrarse, y anotó que a él le costaba respirar mucho más que a los porteadores del valle.",
        destacado: { tipo: "frase", frase: "Subió con dieciocho porteadores, un catre y un barómetro." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "De aquellas dos subidas nació el alpinismo como actividad, con guías profesionales, un oficio que en ese valle se organizó y se reguló muy pronto con su propia compañía y sus turnos. En un siglo la montaña pasó de terreno maldito a destino turístico, y el pueblo del fondo del valle se convirtió en una de las capitales del deporte de montaña. Hoy suben a la cumbre unas veinte mil personas cada verano y hay que reservar plaza en los refugios con meses de antelación. La cima que se resistió veintiséis años tiene ahora atascos en la cresta final.",
      },
    ],
  },

  {
    id: "punto-mas-lejano",
    titulo: "El pico más lejos del centro",
    gancho: "La Tierra está abombada por el ecuador, y ahí gana un volcán bastante más bajo.",
    categoria: "Montañas",
    color: "var(--plum)",
    curioso: true,
    encargo: "Un volcán nevado de cono perfecto sobre una llanura seca y amarilla.",
    entrada:
      "Ecuador, 1802. Un naturalista alemán intenta subir un volcán nevado que en aquel momento se considera la montaña más alta del planeta. Se queda a unos cuatrocientos metros de la cumbre, agotado y con las encías sangrando, y anota que aquello es lo más alto que ha llegado un ser humano. Se equivocaba de montaña, y a la vez acertaba.",
    paginas: [
      {
        rotulo: "La bola achatada",
        texto:
          "La Tierra no es una esfera perfecta. Al girar sobre sí misma se abomba por el centro y se aplasta por los polos, de manera que el radio en el ecuador es unos veintiún kilómetros mayor que el radio en los polos. Eso significa que el nivel del mar en el ecuador está ya mucho más lejos del centro del planeta que el nivel del mar en el Ártico. Y ese volcán se encuentra prácticamente encima de la línea del ecuador, mientras que la montaña más alta medida desde el mar queda bastante al norte, a la altura del trópico.",
        destacado: { tipo: "cifra", cifra: "21", unidad: "kilómetros más de radio en el ecuador" },
      },
      {
        rotulo: "Tres respuestas",
        texto:
          "Haciendo la cuenta, la cumbre de aquel volcán queda unos dos kilómetros más lejos del centro de la Tierra que la cumbre más alta del Himalaya, aunque mida casi dos mil quinientos metros menos sobre el nivel del mar. Y todavía hay una tercera respuesta posible: si se mide desde la base, la montaña más grande del planeta es un volcán de una isla del Pacífico que arranca en el fondo del océano y suma más de diez mil metros, de los cuales solo asoman cuatro mil por encima del agua.",
        destacado: { tipo: "frase", frase: "Hay tres montañas más altas, según desde dónde se mida." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El punto más lejano del centro del planeta es también, por la misma razón, el sitio de la superficie que va más deprisa: la rotación lo lleva a más de mil seiscientos kilómetros por hora, y por eso desde el ecuador resulta más barato lanzar cohetes. Aquel naturalista alemán publicó los datos de su expedición, y sus perfiles de vegetación por alturas fundaron la geografía moderna. La montaña a la que no consiguió llegar dejó de ser la más alta del mundo en cuanto se midió bien el Himalaya, y se ha quedado con otro récord que nadie le quita.",
      },
    ],
  },
];
