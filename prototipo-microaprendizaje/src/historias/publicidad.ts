import type { Short } from "../shorts";

/* ==========================================================================
   Publicidad.

   El tema tiene dos trampas. Una es hacerle el anuncio gratis a la marca,
   repitiendo su eslogan con admiración. La otra es lo contrario: el sermón
   sobre lo manipulados que estamos, que no informa de nada.

   La regla del tema: se cuenta CÓMO SE FABRICÓ UNA COSTUMBRE. Alguien, en
   un despacho, en una fecha concreta, decidió que hiciéramos algo que antes
   nadie hacía —regalar un anillo, medirse el aliento, desayunar cierta
   cosa— y funcionó. El interés está en el mecanismo, no en el producto.

   Y siempre se dice qué se hacía antes, porque sin el antes no se entiende
   que la costumbre sea reciente y fabricada.
   ========================================================================== */

export const PUBLICIDAD: Short[] = [
  {
    id: "diamante-para-siempre",
    titulo: "Un anuncio creó el anillo",
    gancho: "En 1938 casi nadie los regalaba. Una agencia decidió cuánto había que gastarse y todos obedecimos.",
    categoria: "Publicidad",
    color: "var(--ochre)",
    encargo: "Un anillo pequeño solo sobre terciopelo oscuro, con un foco muy duro.",
    fotos: [
      {
        archivo: "Diamond princess cut.jpg",
        autor: "Un diamante de talla princesa montado en su anillo. Fotografía de Stephen Durham.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Diamond_princess_cut.jpg",
        foco: "50% 45%",
        alt: "Un diamante cuadrado sujeto por cuatro garras, con las facetas encendidas por una luz cálida.",
      },
      {
        archivo: "Cullinan Diamond (replica) (Premier Kimberlite Pipe, Precambrian; Premier Mine, South Africa) 1 (17872546950).jpg",
        autor: "Réplica del diamante en bruto más grande encontrado nunca, extraído en Sudáfrica. Fotografía de James St. John.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Cullinan_Diamond_(replica)_(Premier_Kimberlite_Pipe,_Precambrian;_Premier_Mine,_South_Africa)_1_(17872546950).jpg",
        foco: "50% 48%",
        alt: "Un pedrusco transparente del tamaño de un puño, con las caras irregulares y sin pulir.",
      },
      {
        archivo: "Neon Night 1 (22755978604).jpg",
        autor: "Un rótulo de neón encendido en Nueva York. Fotografía de Billie Grace Ward.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Neon_Night_1_(22755978604).jpg",
        foco: "50% 45%",
        alt: "Letras de neón rojo encendidas sobre la entrada de un local, con los toldos a rayas debajo.",
      },
      {
        archivo: "White wedding.jpg",
        autor: "Las alianzas en la bandeja, durante una ceremonia.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:White_wedding.jpg",
        foco: "55% 50%",
        alt: "Dos manos sosteniendo un platillo con dos anillos, entre ropas blancas, en blanco y negro.",
      },
    ],
    entrada:
      "Nueva York, 1938. La mayor empresa de diamantes del mundo, que controla casi toda la producción del planeta y decide cuántas piedras salen al mercado cada año, tiene un problema serio: no se venden. Después de la crisis económica de los años treinta un diamante es exactamente lo que parece, un lujo prescindible, y los precios llevan una década cayendo. En Estados Unidos solo una de cada diez novias recibe uno al comprometerse, y en Europa la costumbre es todavía más rara. La empresa contrata entonces a una agencia de publicidad de Filadelfia para que le arregle el asunto.",
    paginas: [
      {
        rotulo: "El plan",
        texto:
          "La agencia no diseñó un anuncio, diseñó una costumbre. Su informe decía que había que meter el diamante dentro del rito del compromiso hasta que pareciera obligatorio, y para eso trabajó por debajo: mandó conferenciantes a los institutos a hablar de gemas, colocó piedras prestadas en las manos de las actrices más fotografiadas y pasó a los periódicos historias sobre el anillo de tal boda famosa, con el tamaño incluido. Nunca se anunciaba una marca ni un precio. Se anunciaba la idea de que un compromiso sin piedra estaba incompleto, y se dejaba que la gente creyera que aquello venía de toda la vida.",
        destacado: { tipo: "frase", frase: "No se anunciaba una marca. Se anunciaba una obligación." },
      },
      {
        rotulo: "La frase",
        texto:
          "En 1947, una redactora de la agencia llevaba toda la noche sin encontrar el cierre de una campaña y garabateó cuatro palabras antes de irse a dormir: un diamante es para siempre. Al día siguiente en la reunión no gustó demasiado, pero no había nada mejor y se usó. Resolvía de un golpe el peor problema del negocio, que era el mercado de segunda mano: si la piedra es eterna y sentimental, no se revende, y así nadie descubre que vale bastante menos de lo que costó. La frase se usó sin cambiar ni una palabra durante más de setenta años. Su autora no se casó nunca.",
        destacado: { tipo: "cifra", cifra: "70", unidad: "años usando la misma frase" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Funcionó tan bien que se exportó. En Japón, donde el anillo de compromiso no existía en absoluto, la campaña empezó en los años sesenta y en menos de veinte años lo llevaba tres de cada cuatro novias. También se fijó la tarifa: primero se dijo que había que gastarse el sueldo de un mes, y más tarde, en otra campaña, el de dos. Aquella cifra no sale de ningún sitio salvo de un despacho publicitario. Hoy, con las piedras fabricadas en laboratorio, químicamente idénticas y mucho más baratas, la industria está peleando otra vez por convencernos de que solo vale la que salió de un agujero.",
      },
    ],
  },

  {
    id: "halitosis-listerine",
    titulo: "Inventaron la halitosis",
    gancho: "El producto llevaba décadas sin venderse. Le buscaron un problema, y le pusieron nombre médico.",
    categoria: "Publicidad",
    color: "var(--slate)",
    curioso: true,
    encargo: "Un frasco de vidrio ámbar de botica sobre un lavabo de porcelana blanca.",
    fotos: [
      {
        archivo: "Antique Amber H K Mulford Chemist Embossed Bottle (30500508927).jpg",
        autor: "Frasco de botica de vidrio ámbar con el nombre del fabricante en relieve. Fotografía de Cindy Shebley.",
        licencia: "CC BY 2.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Antique_Amber_H_K_Mulford_Chemist_Embossed_Bottle_(30500508927).jpg",
        foco: "50% 55%",
        alt: "Botella antigua de vidrio color ámbar con letras en relieve y tapón de corcho, sobre una mesa de madera.",
      },
      {
        archivo: "Apothecary Jar MET DP245577.jpg",
        autor: "Tarro de botica de cerámica mexicana, hacia 1800. Metropolitan Museum of Art, Nueva York.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Apothecary_Jar_MET_DP245577.jpg",
        foco: "50% 50%",
        alt: "Tarro de farmacia de cerámica esmaltada con decoración azul sobre fondo blanco.",
      },
      {
        archivo: "Antique Schlotter Beck & Foss Company Embossed Glass Bottle (42377995471).jpg",
        autor: "Botella de vidrio antigua con la marca del laboratorio grabada en el cristal. Fotografía de Cindy Shebley.",
        licencia: "CC BY 2.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Antique_Schlotter_Beck_%26_Foss_Company_Embossed_Glass_Bottle_(42377995471).jpg",
        foco: "50% 50%",
        alt: "Botella de cristal transparente con letras en relieve, fotografiada de cerca sobre madera.",
      },
      {
        archivo: "Antique Amber Medicine Bottle (42378014251).jpg",
        autor: "Frasco de medicina de vidrio ámbar de principios del siglo XX. Fotografía de Cindy Shebley.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Antique_Amber_Medicine_Bottle_(42378014251).jpg",
        foco: "50% 50%",
        alt: "Frasco pequeño de vidrio marrón oscuro iluminado de lado, con el fondo desenfocado.",
      },
    ],
    entrada:
      "Estados Unidos, años veinte. Existe desde 1879 un líquido antiséptico que se ha vendido como desinfectante de quirófanos, remedio para la gonorrea y hasta como limpiasuelos, sin gran éxito en ninguna de las tres cosas. Los hijos del fabricante deciden probar una última idea antes de rendirse: venderlo para la boca. El problema es evidente y parece insalvable, porque en aquel momento nadie se enjuagaba la boca con nada y nadie sentía que le hiciera ninguna falta. Así que hicieron algo distinto: en vez de vender el remedio, vendieron primero la enfermedad.",
    paginas: [
      {
        rotulo: "La palabra",
        texto:
          "Rebuscando en los diccionarios médicos encontraron un término antiguo y poco usado para el mal aliento: halitosis. Sonaba a enfermedad de verdad, a algo que se diagnostica y se trata. Los anuncios no hablaban del líquido casi nunca; contaban historias cortas de personas a las que la vida se les torcía sin saber por qué. La más famosa era la de una mujer joven, dama de honor una y otra vez, nunca novia, a la que sus amigas no se atrevían a decírselo. El texto insistía en el detalle clave: uno mismo no puede olerse el aliento, así que cualquiera podría tenerlo y no enterarse.",
        destacado: { tipo: "frase", frase: "Siempre dama de honor, nunca novia." },
      },
      {
        rotulo: "Las ventas",
        texto:
          "El mecanismo era una inseguridad sin salida: te acusaban de un defecto que no puedes comprobar por ti mismo y que nadie a tu alrededor va a mencionar por educación. La única manera de quedarse tranquilo era comprar el frasco. Las ventas de la empresa pasaron de unos cien mil dólares al año a más de ocho millones en siete años. Los anuncios eran tan eficaces que se estudiaron durante décadas en las escuelas de publicidad como el ejemplo de manual de cómo crear una necesidad: primero se nombra el mal, después se vende la cura, y en ese orden exacto.",
        destacado: { tipo: "cifra", cifra: "8 millones", unidad: "de dólares al año, desde cien mil" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La palabra se quedó y hoy está en cualquier diccionario y en la consulta del dentista, aunque casi nadie sepa que llegó al lenguaje corriente empujada por una campaña. El enjuague bucal se convirtió en un producto de baño normal en medio mundo. Y el método se copió hasta la saciedad durante todo el siglo: el olor corporal, la caspa, las axilas, el mal aliento del perro, cada uno con su palabra técnica y su frasco correspondiente. La receta sigue siendo la de aquel despacho de los años veinte: encuentra algo que la gente no puede comprobar de sí misma y díselo.",
      },
    ],
  },

  {
    id: "papa-noel-rojo",
    titulo: "El rojo de Papá Noel",
    gancho: "La marca lo pintó de rojo en 1931. Pero ya iba de rojo en postales de treinta años antes.",
    categoria: "Publicidad",
    color: "var(--clay)",
    curioso: true,
    encargo: "Una postal navideña antigua algo descolorida, con bordes gastados.",
    entrada:
      "Es una de esas cosas que todo el mundo repite en la cena de Navidad: que Papá Noel iba de verde hasta que una marca de refrescos lo vistió de rojo para que combinara con sus latas. La campaña existió, empezó en 1931 y fue extraordinaria. Lo que no existe es el cambio de color, y se demuestra mirando papeles anteriores.",
    paginas: [
      {
        rotulo: "Antes de 1931",
        texto:
          "El personaje moderno se fue armando en el siglo XIX a partir de un obispo del siglo IV y de varias tradiciones del norte de Europa. Un poema estadounidense de 1823 le puso el trineo, los renos y la entrada por la chimenea. Un dibujante de una revista de Nueva York le dio cara y ropa en las décadas siguientes, y a partir de 1885 aparece ya de rojo en sus ilustraciones. En 1906 una marca de bebidas de cola distinta lo usaba de rojo en sus anuncios, y las postales navideñas europeas de comienzos de siglo lo pintan de rojo la inmensa mayoría de las veces.",
        destacado: { tipo: "cifra", cifra: "1885", unidad: "ya se dibujaba de rojo" },
      },
      {
        rotulo: "Lo que sí hizo",
        texto:
          "Entonces, ¿qué aportó la campaña de 1931? Fijarlo. El ilustrador que contrataron pintó durante más de treinta años el mismo señor todas las navidades, siempre igual: gordo pero no deforme, con las mejillas rojas, el cinturón ancho y una cara concreta, la de un vendedor jubilado amigo suyo que le servía de modelo. Antes de él, las ilustraciones lo pintaban unas veces como un duende pequeño, otras como un obispo alto y flaco, otras como un gnomo. Aquellos anuncios repetidos año tras año en las revistas de mayor tirada del mundo convirtieron una de las versiones posibles en la única.",
        destacado: { tipo: "frase", frase: "No le cambió el color: le fijó la cara." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La leyenda del cambio de color es más útil que la verdad y por eso ha ganado. Sirve para contar en dos frases una historia con moraleja sobre el poder de la publicidad, y hasta la propia empresa la ha desmentido en su página web sin conseguir que nadie deje de repetirla. Lo interesante es que la versión falsa acusa a la marca de algo pequeño, cambiarle un color a un dibujo, cuando lo que hizo de verdad es bastante mayor: quedarse con la imagen mental que tienen del personaje varios miles de millones de personas.",
      },
    ],
  },
];
