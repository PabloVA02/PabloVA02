import type { Short } from "../shorts";

/* ==========================================================================
   Los tejados.

   La parte del edificio que nadie mira y que decide si la casa dura. Su
   forma no es estilo: es la respuesta al agua, a la nieve y al material que
   había cerca. El tema se estropea si se cuenta como arquitectura.

   La regla del tema: cada short empieza por EL PROBLEMA FÍSICO (agua que
   entra, nieve que pesa, calor que sube) y solo después cuenta la forma que
   lo resuelve. Siempre con un material concreto y de dónde salía.
   ========================================================================== */

export const TEJADOS: Short[] = [
  {
    id: "por-que-el-tejado-se-inclina",
    titulo: "La lluvia decide el tejado",
    gancho: "En el norte son casi triángulos y en el sur casi planos. No es estilo: es cuánta agua y cuánta nieve hay que quitarse de encima.",
    categoria: "Objetos",
    color: "var(--slate)",
    encargo: "Dos tejados juntos en la misma imagen: uno muy picudo y otro casi plano.",
    fotos: [
      {
        archivo: "Axel Lindahl - 150446499e (2).jpg",
        autor: "La iglesia de madera de Heddal, en Noruega, fotografiada por Axel Lindahl en el siglo XIX.",
        licencia: "Dominio público",
        pdPorEdad: 1906,
        fuente: "https://commons.wikimedia.org/wiki/File:Axel_Lindahl_-_150446499e_(2).jpg",
        foco: "50% 38%",
        alt: "Una iglesia de madera con seis tejados picudos apilados unos sobre otros, cubiertos de tejuela.",
      },
      {
        archivo: "Winter view of typical norwegian hytte (cabin) coverd in snow in Rekdalsetra area - Rekdal, Vestnes, Norway 2017-12-29.jpg",
        autor: "Una cabaña noruega con el tejado cargado de nieve y una fila de carámbanos en el alero. Fotografía de Mænsard vokser.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Winter_view_of_typical_norwegian_hytte_(cabin)_coverd_in_snow_in_Rekdalsetra_area_-_Rekdal,_Vestnes,_Norway_2017-12-29.jpg",
        foco: "50% 42%",
        alt: "Una cabaña de troncos con medio metro de nieve sobre el tejado y carámbanos colgando del borde.",
      },
      {
        archivo: "Castle, Silves (20518366418).jpg",
        autor: "Tejas curvas de barro en el castillo de Silves, Portugal. Fotografía de Paul Wilkinson.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Castle,_Silves_(20518366418).jpg",
        foco: "50% 50%",
        alt: "Hileras de tejas curvas de barro rosado y ocre, manchadas de líquenes, vistas de muy cerca.",
      },
      {
        archivo: "Shibam Hadramaut.jpg",
        autor: "Las casas torre de adobe de Shibam, en Yemen, con sus azoteas planas. Fotografía de Ala Askool.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Shibam_Hadramaut.jpg",
        foco: "50% 50%",
        alt: "Un bloque apretado de torres de barro de varias plantas, todas rematadas en azotea plana, de noche.",
      },
    ],
    entrada:
      "Cualquier sitio del mundo, y desde hace por lo menos diez mil años. La pendiente de un tejado parece lo más gratuito que tiene una casa, una cuestión de gusto o de tradición local, y no lo es en absoluto: es la respuesta a una pregunta muy concreta que se hace cada constructor en cada sitio. Cuánta agua cae aquí, cuánta nieve se acumula encima y con qué material voy a cubrirlo. De esas tres respuestas sale el ángulo. Por eso en el norte de Europa los tejados son casi triángulos y en el sur del Mediterráneo son casi planos.",
    paginas: [
      {
        rotulo: "Agua y nieve",
        texto:
          "El agua de lluvia no cae solo hacia abajo: el viento la empuja de lado y la mete por cualquier junta. Cuanto más inclinado está el tejado, menos tiempo pasa el agua encima y menos ocasiones tiene de colarse. Con nieve es peor, porque un metro de nieve mojada pesa más de doscientos kilos por metro cuadrado. Una pendiente fuerte hace que la nieve resbale antes de acumular ese peso, y de ahí los tejados picudos de los Alpes. En el sur, donde apenas nieva, la pendiente baja mucho y el tejado sirve además de terraza. Cada material tiene su límite: la pizarra aguanta casi vertical y la teja curva se cae si hay demasiada inclinación.",
        destacado: { tipo: "cifra", cifra: "200", unidad: "kilos por metro cuadrado pesa un metro de nieve" },
      },
      {
        rotulo: "La teja curva",
        texto:
          "La teja curva del Mediterráneo es un trozo de barro cocido con forma de canal, y su sistema engaña por sencillo. Se colocan unas boca arriba, haciendo de canaleta, y otras boca abajo encima de las juntas, tapando el hueco entre dos. No hace falta clavo ni mortero, porque el propio peso las sujeta, y por eso se cambian de una en una. La forma cónica, más ancha por un extremo, permite encajarlas solapadas sin que ninguna se mueva de sitio. La teja plana del norte va colgada de un listón mediante un pequeño gancho y necesita más pendiente. Entre las dos se reparten casi todos los tejados de Europa desde hace dos mil años.",
        destacado: { tipo: "frase", frase: "Ni un clavo: la teja curva la sujeta su propio peso." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un mapa de tejados que se lee desde el avión, con el rojo del barro en el sur y el gris de la pizarra en el norte. Quedó también la razón práctica detrás de cada forma que hoy parece pintoresca, desde el alero que aleja el agua de la pared hasta el faldón que mira al viento dominante. Y quedó una excepción moderna, porque el tejado plano volvió en el siglo XX gracias a las láminas impermeables de asfalto y de plástico. Aun así, el criterio no ha cambiado desde que existe la primera cabaña: el tejado gana si el agua se va antes de encontrar por dónde entrar.",
      },
    ],
  },
  {
    id: "el-tejado-de-pizarra",
    titulo: "La pizarra se parte sola",
    gancho: "Un golpe de cincel en la dirección correcta y la roca se abre sola en hojas de cinco milímetros.",
    categoria: "Objetos",
    color: "var(--clay)",
    encargo: "Manos de un cantero abriendo un bloque de pizarra en dos láminas con cincel.",
    fotos: [
      {
        archivo: "Roof slates Eiktunet.jpg",
        autor: "Tejado de lajas de pizarra solapadas, fotografiado de cerca con la luz baja de la tarde.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ARoof%20slates%20Eiktunet.jpg",
        foco: "50% 50%",
        alt: "Superficie de un tejado cubierta de piezas de pizarra redondeadas montadas como escamas.",
      },
      {
        archivo: "Old slate quarry (51041749762).jpg",
        autor: "La antigua cantera de Dinorwic, en Gales, con las montañas de Snowdonia al fondo.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AOld%20slate%20quarry%20(51041749762).jpg",
        foco: "50% 50%",
        alt: "Enorme cantera abierta en la ladera, con bancales de roca gris azulada y montañas detrás.",
      },
      {
        archivo: "Slate mills, Dinorwic Quarry - geograph.org.uk - 4169340.jpg",
        autor: "Los talleres de la cantera de Dinorwic, donde se rajaban y recortaban las láminas.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ASlate%20mills%2C%20Dinorwic%20Quarry%20-%20geograph.org.uk%20-%204169340.jpg",
        foco: "50% 50%",
        alt: "Naves de piedra al pie de una montaña de escombrera de pizarra, con vagonetas y raíles.",
      },
      {
        archivo: "Slate roofs in Llanberis.jpg",
        autor: "Los tejados del pueblo de Llanberis, cubiertos con la pizarra de la cantera de al lado.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ASlate%20roofs%20in%20Llanberis.jpg",
        foco: "50% 50%",
        alt: "Casas de un pueblo vistas desde arriba, todas con el tejado del mismo gris azulado.",
      },
    ],
    entrada:
      "Galicia, Gales y las montañas de media Europa, con la explotación a gran escala a partir del siglo XIX. La pizarra es una roca corriente que tiene una propiedad rarísima: golpeada con un cincel en la dirección correcta, se abre en láminas finas y planas casi sola, y las hojas salen tan iguales que parecen cortadas a máquina. Ninguna otra piedra de construcción hace eso. Esa manía de partirse bien, que no sirve para nada más, la convirtió durante siglo y medio en el mejor tejado que se podía poner en una casa.",
    paginas: [
      {
        rotulo: "Por qué se abre",
        texto:
          "La pizarra empezó siendo barro en el fondo de un mar, hecho de partículas planas y diminutas. Cuando dos placas de la corteza chocaron y aplastaron aquella capa durante millones de años, las partículas se giraron todas igual. Quedaron alineadas como las páginas de un libro cerrado, y esa alineación permite abrir la roca por donde uno quiere. El cantero apoya el cincel en el canto del bloque, da un golpe seco y la piedra se abre en dos hojas. Repitiendo la operación se llega a láminas de unos cinco milímetros, ligeras y lisas. Ninguna otra piedra de construcción hace eso, y por eso ninguna otra se pone tan fina en un tejado.",
        destacado: { tipo: "frase", frase: "Alineada como las páginas de un libro cerrado." },
      },
      {
        rotulo: "Cortar a mano",
        texto:
          "Partir pizarra sigue haciéndose casi igual que hace dos siglos, porque ninguna máquina sustituye el oído y la muñeca del rajador. El trabajador sujeta el bloque contra la rodilla y decide dónde entra el cincel según cómo suena la piedra al golpearla. Una lámina mal abierta se rompe, y en una cantera se descarta más de la mitad de lo extraído. El oficio pasó factura durante generaciones, porque respirar el polvo de la roca destroza los pulmones y llenó los cementerios de las comarcas pizarreras. Hoy hay aspiración, agua y mascarilla, aunque el gesto sigue siendo el mismo. España es el primer exportador mundial y casi toda esa pizarra sale de una comarca del noroeste.",
        destacado: { tipo: "cifra", cifra: "50", unidad: "% del material extraído se descarta" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un material que dura más que la casa que cubre, porque un tejado de pizarra bien puesto pasa de los cien años sin mantenimiento. Quedaron pueblos enteros construidos con el descarte de la cantera, con la piedra en el suelo, en las paredes y hasta en las vallas del campo. Quedó también una enfermedad reconocida como laboral, que sigue apareciendo en las revisiones de quienes trabajaron antes de que hubiera aspiración. Y quedó la sorpresa de que una roca sirva de tejado por una casualidad de su origen: si aquel barro no se hubiera aplastado en la dirección justa, no habría láminas ni tejados grises.",
      },
    ],
  },
  {
    id: "los-tejados-verdes",
    titulo: "Césped en el tejado",
    gancho: "Escandinavia lleva mil años cubriendo las casas de hierba. Las ciudades han vuelto a hacerlo por motivos distintos.",
    categoria: "Objetos",
    color: "var(--ochre)",
    encargo: "Casa noruega de madera con el tejado cubierto de hierba alta y una cabra encima.",
    entrada:
      "Noruega e Islandia, desde la época vikinga y hasta bien entrado el siglo XIX. En un sitio con pocos árboles grandes y con inviernos muy largos, la casa se cubría con capas de turba y de hierba viva. No era una moda ni un adorno, sino la única manera barata de que el frío no entrara por arriba.",
    paginas: [
      {
        rotulo: "Turba y abedul",
        texto:
          "El montaje tenía tres capas y cada una hacía un trabajo distinto. Abajo iban tablas de madera, encima varias láminas de corteza de abedul y arriba del todo los tepes de turba con su hierba. La corteza de abedul es la pieza clave, porque contiene aceites que la hacen impermeable y no se pudre aunque pase décadas mojada. La turba pesaba lo suyo, y ese peso venía bien para que el viento no arrancara el tejado. La hierba seguía creciendo, de modo que las raíces trababan la capa y la sujetaban como una red. En las fotos antiguas se ven cabras pastando encima de las casas, que es exactamente lo que parece.",
        destacado: { tipo: "frase", frase: "La corteza de abedul no se pudre ni mojada décadas." },
      },
      {
        rotulo: "La ciudad vuelve",
        texto:
          "El tejado verde ha vuelto a las ciudades europeas desde los años setenta, por razones que nada tienen que ver con el frío. La primera es el agua, porque una ciudad de asfalto manda toda la lluvia al alcantarillado de golpe. Un tejado con sustrato retiene buena parte de esa agua y la suelta despacio durante horas. La segunda es el calor, porque las plantas evaporan agua y refrescan el aire, mientras que el asfalto llega a los setenta grados en verano. La tercera es más prosaica: la capa vegetal protege del sol la lámina impermeable y le alarga la vida. Varias ciudades ya lo exigen en los edificios nuevos.",
        destacado: { tipo: "cifra", cifra: "70", unidad: "grados alcanza un tejado de asfalto en verano" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una técnica antigua reciclada para un problema nuevo, que es lo que suele pasar cuando una ciudad se queda sin sitio. Quedaron también sus límites, porque el tejado verde pesa mucho más que uno normal y no todos los edificios antiguos aguantan esa carga. Hace falta además comprobar cada cierto tiempo que las raíces no han encontrado un camino hasta la lámina de abajo. Y quedó la imagen que une los dos extremos de la historia, separada por mil años: una cabra pastando sobre una granja noruega y un apicultor subiendo a la azotea de una oficina.",
      },
    ],
  },
];
