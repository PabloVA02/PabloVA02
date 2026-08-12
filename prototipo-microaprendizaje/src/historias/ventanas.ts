import type { Short } from "../shorts";

/* ==========================================================================
   Las ventanas.

   Agujeros en la pared que dejan pasar la luz y no el frío, que es un
   problema técnico mucho más difícil de lo que parece. Ya hay ficheros de
   vidrio y de impuestos, así que aquí manda el hueco y su marco.

   La regla del tema: se explica siempre EL CONFLICTO ENTRE LUZ Y CALOR, que
   es lo que gobierna el diseño de cualquier ventana desde hace siglos. Y se
   dan medidas concretas: grosores, cámaras de aire y grados que se pierden,
   porque las cifras hacen entender el asunto de golpe.
   ========================================================================== */

export const VENTANAS: Short[] = [
  {
    id: "el-hueco-antes-del-vidrio",
    titulo: "Ventanas sin cristal",
    gancho: "Con papel aceitado, tripa de animal o láminas de mineral traslúcido. Todo servía menos dejar entrar el aire.",
    categoria: "Ventanas",
    color: "var(--ochre)",
    encargo: "Una ventana antigua con postigos de madera medio cerrados y luz entrando de lado.",
    fotos: [
      {
        archivo: "Fenetre bleue Jurilovca Musee Village Bucarest.jpg",
        autor: "La ventana de una casa de 1898 con los postigos entreabiertos. Museo del Pueblo, Bucarest. Fotografía de Myrabella.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Fenetre_bleue_Jurilovca_Musee_Village_Bucarest.jpg",
        foco: "50% 45%",
        alt: "Una ventana con contraventanas de madera pintadas de azul, rojo y verde, medio abiertas sobre un muro blanco.",
      },
      {
        archivo: "Muscovite mica 2.jpg",
        autor: "Moscovita, la mica que se separa en láminas traslúcidas y se usó para cerrar ventanas. Fotografía de James St. John.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Muscovite_mica_2.jpg",
        foco: "50% 45%",
        alt: "Un mineral formado por hojas finísimas apiladas, de brillo dorado y bordes irregulares.",
      },
      {
        archivo: "Jan Vermeer van Delft - The Glass of Wine - Google Art Project.jpg",
        autor: "La copa de vino, óleo de Johannes Vermeer, hacia 1660. A la izquierda, la ventana emplomada con su vidriera de escudo.",
        licencia: "Dominio público",
        pdPorEdad: 1675,
        fuente: "https://commons.wikimedia.org/wiki/File:Jan_Vermeer_van_Delft_-_The_Glass_of_Wine_-_Google_Art_Project.jpg",
        foco: "50% 32%",
        alt: "Una habitación con una gran ventana emplomada abierta a la izquierda y dos figuras junto a una mesa.",
      },
      {
        archivo: "Bard-lès-Pesmes (Haute-Saône) Bâtiments et constructions hdsr S5 16.jpg",
        autor: "Un postigo de tablas cerrado sobre el hueco de una ventana, en un pueblo del este de Francia. Fotografía de Hyppolyte de Saint-Rambert.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Bard-l%C3%A8s-Pesmes_(Haute-Sa%C3%B4ne)_B%C3%A2timents_et_constructions_hdsr_S5_16.jpg",
        foco: "50% 45%",
        alt: "Una contraventana de tablas grises muy gastadas, con dos pernios de hierro oxidado, cerrando un hueco en un muro.",
      },
    ],
    entrada:
      "Europa, siglos V a XV. El vidrio plano existe desde época romana y nadie lo ha olvidado, pero fabricarlo es tan caro y tan difícil que durante toda la Edad Media queda reservado a iglesias y a palacios. Una casa corriente tiene huecos abiertos en la pared, sin nada que los cierre, y con eso aparece el problema que va a durar mil años: la luz y el frío entran exactamente por el mismo sitio. Cada solución que se pruebe durante esos siglos será un intento de separar las dos cosas, y ninguna lo conseguirá del todo hasta que el vidrio se abarate.",
    paginas: [
      {
        rotulo: "Los apaños",
        texto:
          "Las soluciones que se usaron durante siglos eran ingeniosas y bastante incómodas de mantener. Se tensaban telas enceradas o papel empapado en aceite, que dejan pasar una luz difusa y turbia pero no se pueden abrir sin romperlos. En el norte de Europa se usaron membranas de tripa de animal, finísimas y traslúcidas, y en algunas zonas láminas de un mineral que se separa en capas transparentes. Lo más habitual, sin embargo, era el postigo de madera: se abría para tener luz y se cerraba para tener calor, y no había manera de tener las dos cosas a la vez.",
        destacado: { tipo: "frase", frase: "Se abría para ver y se cerraba para no helarse." },
      },
      {
        rotulo: "El vidrio caro",
        texto:
          "Cuando por fin el vidrio empezó a bajar de precio, en los siglos XVI y XVII, seguía siendo un bien de lujo que se trataba como un mueble. Los inventarios de la época listan las ventanas junto a las camas y las mesas. En Inglaterra hubo pleitos sobre si el vidrio pertenecía a la casa o al inquilino que lo había puesto, porque mucha gente se lo llevaba al mudarse. Las hojas se fabricaban pequeñas y se montaban con tiras de plomo formando cuadrículas, y de ahí vienen esas ventanas con retícula que hoy se copian como adorno.",
        destacado: { tipo: "cifra", cifra: "XVII", unidad: "el siglo en que el vidrio llega a las casas" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron los postigos, que sobreviven en media Europa y que siguen siendo lo más eficaz contra el calor del verano, porque paran el sol antes de que atraviese el cristal. Quedó también la forma de las ventanas antiguas, más altas que anchas, que tiene una razón práctica: una hoja de vidrio pequeña aguanta mejor y la luz entra más profunda si el hueco es alto. Y quedó una diferencia visible entre las casas viejas y las nuevas, porque el tamaño de cada hueco cuenta lo que costaba cerrarlo el año en que se construyó.",
      },
    ],
  },
  {
    id: "el-doble-cristal",
    titulo: "Lo que aísla es el aire",
    gancho: "No el cristal, que conduce el calor bastante bien. Lo que frena el frío es la cámara de aire quieto entre dos hojas.",
    categoria: "Ventanas",
    color: "var(--slate)",
    curioso: true,
    encargo: "Un perfil de ventana cortado, con dos cristales y la separación entre ellos.",
    fotos: [
      {
        archivo: "Ice Crystals on Window Pane.jpg",
        autor: "Cristales de hielo formados sobre el vidrio de una ventana. Fotografía de Jojoo64.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Ice_Crystals_on_Window_Pane.jpg",
        foco: "50% 50%",
        alt: "Helechos de escarcha dibujados sobre un cristal, iluminados en azul sobre fondo oscuro.",
      },
      {
        archivo: "Eisblumen am Fenster des Warteraums, Bahnhof Wolfsbergkogel; 29.11.2018.jpg",
        autor: "Flores de hielo en la ventana de la sala de espera de una estación austriaca.",
        licencia: "CC BY-SA 3.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Eisblumen_am_Fenster_des_Warteraums,_Bahnhof_Wolfsbergkogel;_29.11.2018.jpg",
        foco: "50% 50%",
        alt: "Ventana antigua cubierta de escarcha, con la luz de fuera pasando entre los dibujos de hielo.",
      },
      {
        archivo: "Eisblumen an einem alten Fenster.jpg",
        autor: "Escarcha en el cristal de una ventana vieja. Fotografía de Soluvo.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Eisblumen_an_einem_alten_Fenster.jpg",
        foco: "50% 50%",
        alt: "Cristal helado con dibujos de hielo en forma de plumas, con el marco de madera al lado.",
      },
      {
        archivo: "Ruhland, Grenzstr. 3, Eisblumen, 04.jpg",
        autor: "Flores de hielo en una ventana de Ruhland, Alemania. Fotografía de Wilhelm Zimmerling.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Ruhland,_Grenzstr._3,_Eisblumen,_04.jpg",
        foco: "50% 50%",
        alt: "Dibujos de escarcha sobre un cristal, con la luz del día detrás.",
      },
    ],
    entrada:
      "Estados Unidos, 1930. Se patenta un sistema para sellar dos hojas de vidrio dejando una cámara de aire entre ellas, y esa idea acaba cambiando la construcción de medio mundo. La razón es que el vidrio, por sí solo, es un aislante mediocre: una ventana simple pierde por metro cuadrado bastante más calor que la pared de al lado.",
    paginas: [
      {
        rotulo: "El aire quieto",
        texto:
          "El aire es un aislante excelente siempre que esté quieto, porque su capacidad de conducir el calor es muy baja. El problema es que en una cámara ancha el aire se mueve solo. El que toca el cristal caliente sube, el que toca el frío baja, y se forma una corriente que lleva el calor de un lado a otro. Por eso la separación entre las dos hojas tiene un óptimo, en torno a un centímetro y medio, y ensancharla más no mejora nada. En las ventanas buenas ese hueco se rellena además con un gas más pesado que el aire, que se mueve menos.",
        destacado: { tipo: "cifra", cifra: "16", unidad: "milímetros es la cámara óptima" },
      },
      {
        rotulo: "El marco",
        texto:
          "El otro punto débil es el marco, y en él está buena parte del problema en las casas antiguas. Un perfil de aluminio conduce el calor de maravilla, así que hace de puente entre el interior y el exterior por mucho vidrio doble que se ponga. Por eso los perfiles modernos llevan intercalada una pieza de plástico que corta esa conducción. Después está el sellado: una ventana mal ajustada pierde más por las rendijas que por el cristal, y eso se nota con una vela cerca del marco en un día de viento.",
        destacado: { tipo: "frase", frase: "Una ventana mal ajustada pierde más por las rendijas que por el vidrio." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una industria enorme y una parte muy visible de la factura de calefacción de cualquier país frío, hasta el punto de que muchos gobiernos subvencionan cambiar las ventanas antiguas. Quedaron también los vidrios con capas metálicas invisibles, que dejan pasar la luz y devuelven hacia dentro el calor de la habitación, y que son hoy lo normal en obra nueva. Y quedó un dato que sorprende a mucha gente. En un edificio corriente, las ventanas ocupan una fracción pequeña de la superficie exterior y son responsables, aun así, de una parte grandísima de las pérdidas de calor.",
      },
    ],
  },
  {
    id: "la-ventana-que-mira",
    titulo: "La ventana decide la casa",
    gancho: "Su orientación y su tamaño cambian la temperatura, la factura de la luz y hasta la hora a la que uno se levanta.",
    categoria: "Ventanas",
    color: "var(--plum)",
    encargo: "Una habitación con una franja de sol entrando por la ventana en el suelo.",
    entrada:
      "Arquitectura de todas las épocas, con normas de eficiencia energética generalizadas desde los años setenta del siglo XX. Colocar una ventana no es solo una decisión estética. Su orientación decide cuánto sol entra en invierno y cuánto en verano, y esos dos números son muy distintos, porque el sol no hace el mismo recorrido en las dos estaciones.",
    paginas: [
      {
        rotulo: "La altura del sol",
        texto:
          "En el hemisferio norte, el sol de invierno cruza el cielo bajo y por el sur, mientras que el de verano pasa mucho más alto y aparece por el nordeste. Eso significa que una ventana al sur recibe mucho sol en invierno, que es cuando conviene, y bastante menos al mediodía de julio, porque el sol le entra muy vertical. Basta un alero o un balcón que sobresalga para que el sol de verano quede fuera y el de invierno siga entrando, sin necesidad de ninguna instalación ni de gastar energía.",
        destacado: { tipo: "frase", frase: "Un alero deja fuera el sol de julio y deja entrar el de enero." },
      },
      {
        rotulo: "Los otros lados",
        texto:
          "Las ventanas al este y al oeste son las difíciles de controlar. Reciben el sol muy rasante, casi horizontal, al amanecer y al atardecer, y ahí no sirve ningún alero porque los rayos entran por debajo. Por eso el calor insoportable de una habitación al oeste se resuelve con persiana exterior o con toldo, y nunca con cortinas por dentro. Cuando el sol ha atravesado el cristal, el calor ya está dentro de la casa. Las ventanas al norte, en cambio, dan una luz constante y sin sol directo, que es la que buscan los pintores.",
        destacado: { tipo: "cifra", cifra: "2", unidad: "veces más alto pasa el sol en verano" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una arquitectura tradicional que en cada clima resolvió esto sin cálculos, con patios en el sur, ventanas pequeñas donde aprieta el sol y grandes donde falta la luz. Quedó también la comprobación moderna: los estudios sobre luz natural encuentran que trabajar cerca de una ventana mejora el sueño y el rendimiento, porque el reloj interno se ajusta con la luz de la mañana. Y quedó un consejo barato que da cualquier arquitecto antes de nada: antes de gastar dinero en climatización, conviene mirar por dónde entra el sol y a qué hora del día.",
      },
    ],
  },
];
