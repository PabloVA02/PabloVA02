import type { Short } from "../shorts";

/* ==========================================================================
   Té.

   El riesgo del tema es la ceremonia: variedades, temperaturas, rituales
   orientales contados con reverencia. Es un catálogo, no una historia.

   La regla del tema: el té se cuenta como MERCANCÍA POLÍTICA. Una planta
   que un imperio guarda como secreto, otro roba disfrazado, y por la que
   se libran guerras y motines. Cada taza lleva detrás una balanza
   comercial descuadrada.

   Y cuando la versión popular de un episodio es la equivocada, se cuenta
   la completa: suele ser menos épica y bastante más interesante.
   ========================================================================== */

export const TE: Short[] = [
  {
    id: "robo-del-te",
    titulo: "Robaron el té a China",
    gancho: "Un botánico escocés se afeitó media cabeza, se puso una coleta postiza y entró en las montañas.",
    categoria: "Té",
    color: "var(--ochre)",
    encargo: "Una ladera con terrazas de arbustos de té entre la niebla de la mañana.",
    fotos: [
      {
        archivo: "Scenic Tea Plantation.jpg",
        autor: "Laderas de té al amanecer, entre la niebla. Fotografía de Hayleys Plantations.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Scenic_Tea_Plantation.jpg",
        foco: "50% 55%",
        alt: "Colinas cubiertas de arbustos de té recortadas por la niebla, bajo un cielo naranja de amanecer.",
      },
      {
        archivo: "KITLV - 110104 - Landscape in China - circa 1871.tif",
        autor: "Las montañas de Wuyi, en Fujian, de donde salía el mejor té negro. Fotografía de hacia 1871.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:KITLV_-_110104_-_Landscape_in_China_-_circa_1871.tif",
        foco: "50% 45%",
        alt: "Fotografía antigua en sepia de dos farallones de roca a los lados del cauce seco de un río.",
      },
      {
        archivo: "London - Kew Gardens - Glasshouse Walkway - View SSE on Palm House 1848 by Decimus Burton & Richard Turner.jpg",
        autor: "El Palm House de Kew, de 1848: las cajas que llevaron el té a la India eran invernaderos como este, en miniatura. Fotografía de Txllxt TxllxT.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:London_-_Kew_Gardens_-_Glasshouse_Walkway_-_View_SSE_on_Palm_House_1848_by_Decimus_Burton_%26_Richard_Turner.jpg",
        foco: "50% 45%",
        alt: "Un invernadero curvo de vidrio y hierro blanco reflejado en un estanque, entre parterres.",
      },
      {
        archivo: "Tea Leaves. Also known as \"Camellia Sinensis\".jpg",
        autor: "Hojas de Camellia sinensis, el arbusto del que salen todos los tés. Fotografía de Vicky Omondi.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Tea_Leaves._Also_known_as_%22Camellia_Sinensis%22.jpg",
        foco: "50% 45%",
        alt: "Brotes tiernos de hojas verdes y dentadas en la punta de una rama de té.",
      },
    ],
    entrada:
      "China, 1848. Una compañía comercial británica encarga a un botánico escocés una misión que hoy llamaríamos sin rodeos espionaje industrial: entrar en las zonas del interior prohibidas a los extranjeros, averiguar cómo se cultiva y se procesa el té, y sacar de allí plantas vivas, semillas y, si puede, operarios que sepan hacerlo, para montar el negocio en la India. El motivo es puramente contable. El té solo se produce en China, Gran Bretaña se lo bebe entero y ese desequilibrio comercial se está pagando con plata y con opio.",
    paginas: [
      {
        rotulo: "El disfraz",
        texto:
          "Se afeitó la parte delantera de la cabeza, se dejó una coleta postiza y se vistió con ropa de la zona, haciéndose pasar por un funcionario de una provincia lejana para justificar que hablara mal el idioma y se comportara de forma rara. Viajó con dos ayudantes chinos contratados, en barca y a pie, durante meses, entrando en las montañas donde se cultivaba el té más apreciado. Tomó nota de todo el proceso y descubrió de paso que el té verde y el negro no vienen de plantas distintas, sino del mismo arbusto tratado de otra manera.",
        destacado: { tipo: "frase", frase: "El té verde y el negro salen del mismo arbusto." },
      },
      {
        rotulo: "Las cajas",
        texto:
          "El primer envío fracasó: las semillas germinaron durante el viaje y las plantas llegaron muertas al puerto. En el segundo intento usó unas cajas de cristal cerradas que un médico londinense había inventado poco antes, una especie de invernadero portátil que mantiene la humedad dentro y protege a la planta del salitre del mar. Metió las semillas entre tierra húmeda, plantadas junto a moreras, y funcionaron. En total sacó unas veinte mil plantas y semillas, además de ochenta operarios chinos contratados para enseñar el proceso completo en las plantaciones nuevas.",
        destacado: { tipo: "cifra", cifra: "20.000", unidad: "plantas y semillas sacadas de China" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "En pocas décadas la India producía más té que China y los precios se hundieron, con lo que la bebida pasó de lujo a artículo corriente en cualquier casa británica. La operación se cita a menudo como el mayor robo de propiedad industrial de la historia, aunque en aquel momento no existía nada parecido a una patente sobre un cultivo. El botánico publicó libros de viajes, cobró un sueldo modesto y murió sin ser famoso. Y el arbusto que estaba prohibido sacar de un país acabó plantado en media Asia y en el este de África.",
      },
    ],
  },

  {
    id: "motin-del-te",
    titulo: "El té del motín era barato",
    gancho: "La ley que provocó la revuelta bajaba el precio. A quien arruinaba era a los contrabandistas.",
    categoria: "Té",
    color: "var(--slate)",
    curioso: true,
    encargo: "Cajas de madera abiertas a hachazos en la cubierta de un barco de noche.",
    fotos: [
      {
        archivo: "Assam-hajua.jpg",
        autor: "Hojas de té negro de Assam sin moler, vistas de cerca.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Assam-hajua.jpg",
        foco: "50% 50%",
        alt: "Montón de hojas de té negro enrolladas y secas, fotografiadas muy de cerca.",
      },
      {
        archivo: "Ceylon-amba.jpg",
        autor: "Té negro de Ceilán en hoja suelta.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Ceylon-amba.jpg",
        foco: "50% 50%",
        alt: "Hojas de té oscuras y retorcidas extendidas sobre una superficie clara.",
      },
      {
        archivo: "Assam-mangalam.jpg",
        autor: "Otro té de Assam, con la hoja más grande y dorada.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Assam-mangalam.jpg",
        foco: "50% 50%",
        alt: "Hojas de té sueltas con puntas doradas entre las hebras oscuras.",
      },
      {
        archivo: "Nepal-dhankuta.jpg",
        autor: "Té en hoja procedente de Dhankuta, en Nepal.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Nepal-dhankuta.jpg",
        foco: "50% 50%",
        alt: "Hojas de té enteras y algo rizadas, de tonos verdosos y marrones.",
      },
    ],
    entrada:
      "Boston, diciembre de 1773. Un grupo de colonos disfrazados sube de noche a tres barcos amarrados en el puerto y tira al agua trescientas cuarenta y dos cajas de té, una por una y sin robar nada. El acto se cuenta desde entonces como una protesta contra unos impuestos abusivos, y así ha llegado a los libros de texto de medio mundo. La ley que lo desencadenó, sin embargo, hacía justo lo contrario de lo que todos suponen: abarataba el té en las colonias en lugar de encarecerlo.",
    paginas: [
      {
        rotulo: "La ley",
        texto:
          "La compañía británica que comerciaba con Asia estaba al borde de la quiebra, con los almacenes llenos de té sin vender. El Parlamento aprobó una ley que le permitía enviarlo directamente a las colonias sin pasar por Inglaterra ni pagar los aranceles intermedios, de modo que su té resultaba más barato que el de contrabando que llegaba de Holanda y que llevaba años abasteciendo a media colonia. El impuesto pequeño que sí se mantenía llevaba seis años en vigor sin escándalo. Lo nuevo era el precio, y el precio hundía a los comerciantes locales.",
        destacado: { tipo: "frase", frase: "El té legal pasó a ser más barato que el de contrabando." },
      },
      {
        rotulo: "La noche",
        texto:
          "Los perjudicados eran los importadores y los contrabandistas de las colonias, entre ellos algunos de los hombres más ricos e influyentes de la ciudad, que financiaron y organizaron la protesta con un argumento de principio: aceptar aquel té equivalía a aceptar que el Parlamento podía cobrar impuestos a quien no tenía representación en él. La noche del 16 de diciembre, un centenar de hombres con la cara pintada abrieron las cajas a hachazos y vaciaron el contenido en el agua, unas cuarenta y cinco toneladas de hoja seca. No robaron nada ni hirieron a nadie.",
        destacado: { tipo: "cifra", cifra: "342", unidad: "cajas de té tiradas al agua" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La respuesta británica fue cerrar el puerto hasta que se pagara el té y suspender el autogobierno de la colonia, unas medidas tan duras que unieron a las trece colonias como no lo había conseguido ninguna otra cosa hasta entonces. La guerra empezó dieciséis meses después. La versión sencilla, la del impuesto abusivo, se impuso enseguida y se sigue enseñando así; la versión completa incluye a unos comerciantes defendiendo su negocio, que es menos épica y explica bastante mejor por qué aquella noche había tanta gente dispuesta a mojarse en el agua helada del puerto.",
      },
    ],
  },

  {
    id: "leche-en-el-te",
    titulo: "La leche iba primero para salvar la taza",
    gancho: "La porcelana barata se agrietaba con el té hirviendo. Con leche fría en el fondo, aguantaba.",
    categoria: "Té",
    color: "var(--clay)",
    curioso: true,
    encargo: "Una taza de porcelana blanca con un chorro de leche cayendo dentro.",
    entrada:
      "Inglaterra, siglo XVIII. El té se ha puesto de moda y las tazas de porcelana traídas de China cuestan una fortuna, así que empiezan a fabricarse imitaciones locales mucho más baratas y bastante peores. Esas tazas tienen un problema: si se les echa de golpe un líquido hirviendo, el cambio brusco de temperatura las agrieta o directamente las parte por la mitad.",
    paginas: [
      {
        rotulo: "El truco",
        texto:
          "La solución era poner primero un poco de leche fría en el fondo y verter el té encima, de modo que la temperatura subiera de forma más suave y la taza aguantara sin partirse. Quien tenía porcelana buena, capaz de resistir el calor, podía permitirse hacerlo al revés: primero el té y después la leche, ajustando el color a ojo hasta dejarlo a su gusto. De ahí salió una señal social de las que gustaban en aquella sociedad: el orden en que alguien echaba la leche delataba la calidad de la vajilla que tenía en casa.",
        destacado: { tipo: "frase", frase: "El orden de la leche delataba la calidad de tu vajilla." },
      },
      {
        rotulo: "La cata",
        texto:
          "El asunto llegó a la ciencia por una anécdota famosa. En los años veinte, durante una merienda entre investigadores de una estación agrícola inglesa, una mujer afirmó que distinguía por el sabor si la leche se había echado antes o después del té. Un estadístico que estaba presente respondió diseñando allí mismo un experimento para comprobarlo: ocho tazas, cuatro de cada tipo, presentadas en orden aleatorio. De aquel juego de sobremesa salió uno de los libros fundacionales del diseño de experimentos, con la cata de té como ejemplo desarrollado en el primer capítulo.",
        destacado: { tipo: "cifra", cifra: "8", unidad: "tazas para comprobar si lo notaba" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Se cuenta que la señora acertó las ocho. La discusión sobre el orden correcto no se ha cerrado nunca, y existe incluso una norma técnica británica sobre cómo preparar té para catas de laboratorio que se decanta por echar la leche primero, con el argumento de que así la proteína de la leche se calienta poco a poco y no se estropea. Las tazas de hoy aguantan cualquier cosa, así que el motivo original desapareció hace más de un siglo. La costumbre, como pasa casi siempre, se quedó sin el motivo.",
      },
    ],
  },
];
