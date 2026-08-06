import type { Short } from "../shorts";

/* ==========================================================================
   Telescopios.

   El riesgo del tema es el asombro cósmico: la inmensidad, el misterio,
   nuestra pequeñez. Suena bien, no enseña nada y se olvida enseguida.

   La regla del tema: un telescopio se cuenta por EL ERROR Y EL ARREGLO.
   Una patente denegada, un espejo pulido a la forma equivocada, un ruido
   que se intenta limpiar con una escoba. La astronomía avanza tropezando
   con cosas que no cuadran, y la parte interesante es siempre lo que
   alguien hizo cuando el instrumento no daba lo que se esperaba.

   Y lo que se ve por el tubo se describe en lenguaje llano.
   ========================================================================== */

export const TELESCOPIO: Short[] = [
  {
    id: "telescopio-sin-patente",
    titulo: "Le negaron el telescopio",
    gancho: "Un fabricante de lentes lo pidió en 1608 y le contestaron que cualquiera podía copiarlo.",
    categoria: "Telescopios",
    color: "var(--ochre)",
    encargo: "Un catalejo de latón y cuero apoyado sobre una mesa junto a unos papeles.",
    fotos: [
      {
        archivo: "Τηλεσκόπια Γαλιλαίου 0623.jpg",
        autor: "Los dos telescopios que conserva el Museo Galileo de Florencia, construidos por él mismo hacia 1610. Fotografía de C messier.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:%CE%A4%CE%B7%CE%BB%CE%B5%CF%83%CE%BA%CF%8C%CF%80%CE%B9%CE%B1_%CE%93%CE%B1%CE%BB%CE%B9%CE%BB%CE%B1%CE%AF%CE%BF%CF%85_0623.jpg",
        foco: "50% 35%",
        alt: "Dos catalejos largos de madera y cuero colgados en una vitrina de museo.",
      },
      {
        archivo: "Jupiter and galilean moons.jpg",
        autor: "Júpiter con sus cuatro lunas mayores, las que vio Galileo. Fotografía de Freak-Line-Community.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Jupiter_and_galilean_moons.jpg",
        foco: "50% 50%",
        alt: "Júpiter con sus bandas de nubes y cuatro puntos de luz alineados a su lado.",
      },
      {
        archivo: "LRO Tycho Central Peak.jpg",
        autor: "El pico central del cráter Tycho, en la Luna, fotografiado por la sonda Lunar Reconnaissance Orbiter. NASA.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:LRO_Tycho_Central_Peak.jpg",
        foco: "50% 50%",
        alt: "Un pico de roca en el centro de un cráter lunar, con una sombra larguísima sobre el suelo gris.",
      },
      {
        archivo: "Inouye Solar Telescope Releases First Image of a Sunspot (NSO-DKIST-first-suspot).tiff",
        autor: "Una mancha solar vista por el telescopio Inouye, en Hawái. Observatorio Solar Nacional de Estados Unidos.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Inouye_Solar_Telescope_Releases_First_Image_of_a_Sunspot_(NSO-DKIST-first-suspot).tiff",
        foco: "50% 50%",
        alt: "Una mancha oscura sobre la superficie hirviendo del Sol, rodeada de células de gas incandescente.",
      },
    ],
    entrada:
      "Países Bajos, octubre de 1608. Un fabricante de lentes de una ciudad del norte solicita a las autoridades el privilegio exclusivo sobre un aparato con dos lentes dentro de un tubo que acerca los objetos lejanos. En pocas semanas aparecen otros dos solicitantes con el mismo invento, y el gobierno decide no concedérselo a ninguno de los tres. El argumento del dictamen es demoledor y probablemente cierto: el aparato es tan sencillo que cualquiera que lo vea una vez puede copiarlo, así que no tiene sentido conceder un privilegio imposible de hacer cumplir. Esa decisión es la razón de que un año después hubiera telescopios en media Europa, y de que uno acabara apuntando al cielo.",
    paginas: [
      {
        rotulo: "Demasiado fácil",
        texto:
          "El argumento de la denegación fue que cualquiera con dos lentes podía montarlo en un rato, y que por tanto no había nada que proteger. Tenían razón: la noticia se difundió por Europa en cuestión de meses, contada en cartas y en hojas impresas, y para el verano siguiente ya se vendían tubos en las ferias de París y de Venecia como juguete de curiosos. El aparato aumentaba unas tres veces y servía sobre todo para reconocer barcos lejanos, que era el uso militar que interesaba a las autoridades y por el que estaban dispuestas a pagar.",
        destacado: { tipo: "frase", frase: "Se lo denegaron porque cualquiera podía copiarlo." },
      },
      {
        rotulo: "Apuntar arriba",
        texto:
          "En 1609, un profesor de matemáticas italiano oyó hablar del invento sin haberlo visto siquiera y construyó el suyo en unos días, puliendo él mismo las lentes hasta llegar a veinte y treinta aumentos, mucho más de lo que ofrecía cualquier tubo de feria. Después hizo algo que casi nadie estaba haciendo: apuntarlo al cielo de manera sistemática y anotar lo que veía noche tras noche, con dibujos y fechas. Encontró montañas en la Luna, cuatro lunas girando alrededor de Júpiter y tantas estrellas nuevas que la Vía Láctea resultó estar hecha de ellas.",
        destacado: { tipo: "cifra", cifra: "30", unidad: "aumentos, diez veces más que en las ferias" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquellas observaciones se publicaron en un librito de sesenta páginas que se agotó en una semana y que cambió la discusión sobre el lugar de la Tierra en el universo, con las consecuencias conocidas para su autor. El fabricante holandés que había pedido la patente cobró una recompensa por su trabajo y siguió haciendo lentes hasta su muerte, sin que su nombre saliera nunca de los archivos. Es uno de los ejemplos más limpios de que un invento no vale por sí solo: lo que cambió el mundo no fue el tubo, sino adónde decidió apuntarlo alguien.",
      },
    ],
  },

  {
    id: "espejo-mal-pulido",
    titulo: "El telescopio espacial salió con el espejo mal",
    gancho: "Estaba pulido con una precisión perfecta a la forma equivocada, por una mota de pintura desprendida.",
    categoria: "Telescopios",
    color: "var(--slate)",
    encargo: "Un espejo circular enorme siendo manipulado por técnicos con traje blanco.",
    entrada:
      "Órbita terrestre, mayo de 1990. Un telescopio espacial que ha costado más de mil quinientos millones de dólares y quince años de trabajo manda sus primeras imágenes, y salen borrosas. Las estrellas aparecen con un halo alrededor en vez de como puntos limpios. El problema está en el espejo principal, de dos metros y medio, y no tiene arreglo desde el suelo.",
    paginas: [
      {
        rotulo: "Dos micras",
        texto:
          "El espejo estaba pulido de manera exquisita, con un error de forma menor que la centésima parte del grosor de un pelo, pero con la curva equivocada: el borde había quedado unas dos micras más plano de lo debido. La causa se rastreó hasta el aparato que se usó para comprobar la forma durante el pulido, en el que una pieza quedó colocada un milímetro y tres décimas fuera de sitio porque el técnico se apoyó en un punto del que se había desprendido una mota de pintura. Nadie contrastó aquella medida con otro método distinto.",
        destacado: { tipo: "cifra", cifra: "2", unidad: "micras de error en el borde del espejo" },
      },
      {
        rotulo: "Las gafas",
        texto:
          "Como el error estaba medido con precisión, se podía compensar. Se diseñó un juego de espejitos correctores montados en unos brazos que se desplegaban dentro del telescopio y devolvían la luz ya corregida a cada instrumento, que es exactamente el equivalente de ponerle unas gafas. En diciembre de 1993, siete astronautas hicieron cinco paseos espaciales en cinco días seguidos para instalarlos, la reparación más complicada intentada hasta entonces en órbita. Las primeras imágenes posteriores mostraron puntos limpios y nítidos, y a partir de ahí el aparato funcionó exactamente como estaba previsto en el proyecto original de quince años antes.",
        destacado: { tipo: "frase", frase: "Le pusieron gafas: unos espejos correctores por dentro." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El episodio se estudia en ingeniería como el caso de manual de por qué una medida crítica hay que comprobarla por dos caminos independientes: se saltaron esa verificación por presupuesto y por calendario. Dejó también una lección de diseño, y es que aquel telescopio era el único pensado desde el principio para ser reparado por astronautas, y por eso pudo salvarse. Ha producido desde entonces más de un millón de observaciones y algunas de las imágenes más reproducidas de la historia. Empezó siendo el chiste del año y acabó siendo el instrumento más famoso del mundo.",
      },
    ],
  },

  {
    id: "ruido-de-fondo",
    titulo: "Buscaron un zumbido y era el Big Bang",
    gancho: "Dos ingenieros limpiaron los excrementos de paloma de la antena. El ruido seguía exactamente igual.",
    categoria: "Telescopios",
    color: "var(--plum)",
    curioso: true,
    encargo: "Una antena metálica gigante con forma de cuerno apuntando al cielo en un descampado.",
    entrada:
      "Estados Unidos, 1964. Dos ingenieros de un laboratorio telefónico ponen a punto una antena enorme con forma de cuerno, construida para rebotar señales en los primeros satélites de comunicaciones. Antes de usarla necesitan medir todo el ruido de fondo que capta, para poder restarlo después. Y encuentran un zumbido constante que no consiguen explicar ni eliminar.",
    paginas: [
      {
        rotulo: "Las palomas",
        texto:
          "El zumbido venía de todas las direcciones del cielo por igual, de día y de noche, en verano y en invierno, lo que descartaba cualquier fuente concreta como una ciudad o una estrella. Revisaron los cables, cambiaron componentes, apuntaron a la ciudad más cercana para descartarla y comprobaron los restos de una prueba nuclear atmosférica reciente. Al final encontraron un nido de palomas dentro del cuerno, con las paredes cubiertas por lo que uno de ellos describió en un informe como un material dieléctrico blanco. Limpiaron la antena a fondo, echaron a las palomas y el ruido siguió igual.",
        destacado: { tipo: "frase", frase: "Lo describió en el informe como un material dieléctrico blanco." },
      },
      {
        rotulo: "La llamada",
        texto:
          "Sin saberlo, a unos sesenta kilómetros de allí un grupo de físicos estaba montando un aparato para buscar precisamente eso: la radiación que debería haber quedado del universo primitivo si todo empezó en un estado denso y caliente, enfriada por la expansión hasta unos pocos grados por encima del cero absoluto. Una conversación casual entre conocidos puso en contacto a los dos equipos. Los ingenieros tenían medido con precisión el ruido que los físicos predecían sobre el papel, y llevaban un año intentando quitárselo de encima sin entender qué era.",
        destacado: { tipo: "cifra", cifra: "2,7", unidad: "grados por encima del cero absoluto" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Los dos artículos se publicaron juntos en 1965, uno con la medida y otro con la explicación, y aquello zanjó una discusión de décadas sobre si el universo había tenido un comienzo o llevaba ahí siempre igual. Los dos ingenieros recibieron el premio Nobel en 1978. Esa radiación se ha medido después desde satélites con un detalle enorme, y sus diminutas variaciones son hoy la principal fuente de datos sobre la edad y la composición del universo. Todo salió de un zumbido que dos personas intentaron quitar limpiando la antena de palomas.",
      },
    ],
  },
];
