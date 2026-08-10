import type { Short } from "../shorts";

/* ==========================================================================
   Los uniformes.

   Ropa que existe para que a quien la lleva se le reconozca al instante, y
   que por eso cambia en cuanto cambia lo que conviene que se vea. El tema se
   hunde si se convierte en desfile de trajes.

   La regla del tema: cada short responde a UNA PREGUNTA VISUAL —por qué de
   ese color, por qué esa forma, quién decide— y la respuesta es siempre
   práctica: la distancia a la que hay que reconocer a alguien, el humo que
   tapa, el precio de la tela. Nunca es cuestión de gusto.
   ========================================================================== */

export const UNIFORMES: Short[] = [
  {
    id: "del-rojo-al-caqui",
    titulo: "Iban de rojo por el humo",
    gancho: "Con la pólvora negra no se veía nada a treinta metros, así que había que distinguir a los tuyos por el color.",
    categoria: "Uniformes",
    color: "var(--clay)",
    encargo: "Una casaca militar roja antigua con botones dorados, sobre fondo neutro.",
    fotos: [
      {
        archivo: "Trooping the Colour (Hurley) 2025-06-14-11-42-A.jpg",
        autor: "Formación de la guardia británica durante el desfile del Trooping the Colour, en Londres. Fotografía de Lauren Hurley.",
        licencia: "OGL 3",
        fuente: "https://commons.wikimedia.org/wiki/File:Trooping_the_Colour_(Hurley)_2025-06-14-11-42-A.jpg",
        foco: "50% 50%",
        alt: "Filas apretadas de soldados con casaca roja y gorro alto de piel negra, vistos desde arriba.",
      },
      {
        archivo: "HRH The Price of Wales 71st Birthday Gun Salute MOD 45165445.jpg",
        autor: "Salva de cañones en la Torre de Londres: la nube blanca que dejaba cada descarga de pólvora negra. Fotografía del sargento Randall.",
        licencia: "OGL v1.0",
        fuente: "https://commons.wikimedia.org/wiki/File:HRH_The_Price_of_Wales_71st_Birthday_Gun_Salute_MOD_45165445.jpg",
        foco: "50% 50%",
        alt: "Una hilera de cañones disparando, con una gran nube de humo blanco levantándose por delante.",
      },
      {
        archivo: "Danish-Norwegian foot artillery uniform ca 1810. Shako, plume, crossbelt, cartridge pouch, tunic coat. Norw. horse-drawn gun carriage 1809. Dragoner 1808 by A. Bloch. Forvarsmuseet Oslo 2020-02-24 2746.jpg",
        autor: "Uniforme de artillero danés-noruego de hacia 1810, con casaca roja y azul, chacó y penacho. Museo de las Fuerzas Armadas, Oslo. Fotografía de Wolfmann.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Danish-Norwegian_foot_artillery_uniform_ca_1810._Shako,_plume,_crossbelt,_cartridge_pouch,_tunic_coat._Norw._horse-drawn_gun_carriage_1809._Dragoner_1808_by_A._Bloch._Forvarsmuseet_Oslo_2020-02-24_2746.jpg",
        foco: "50% 35%",
        alt: "Un maniquí con casaca roja de vueltas azules, correaje blanco cruzado al pecho y un gorro alto con plumero.",
      },
      {
        archivo: "Cochineal (6505719409).jpg",
        autor: "Cochinilla sobre una pala de chumbera: el insecto del que sale el carmín, el rojo más barato y estable que hubo. Fotografía de Leslie Seaton.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Cochineal_(6505719409).jpg",
        foco: "50% 50%",
        alt: "Una hoja carnosa de chumbera con manchas de pelusa blanca y un punto rojo intenso en el centro de una de ellas.",
      },
    ],
    entrada:
      "Europa, siglos XVII a XIX. Los ejércitos visten a sus soldados con colores llamativos y bien visibles: rojo encendido, azul intenso, blanco. Visto desde hoy parece un suicidio organizado, y la explicación no está en la vanidad de nadie sino en el arma de la época. La pólvora negra produce en cada disparo una nube densa de humo blanco que no se va, y después de tres o cuatro descargas el campo de batalla entero queda cubierto por una niebla espesa en la que apenas se distingue una figura a treinta metros.",
    paginas: [
      {
        rotulo: "Ver al tuyo",
        texto:
          "En esas condiciones, el peligro no era que el enemigo te viera —te veía igual— sino no reconocer a los tuyos. Las formaciones se movían muy juntas, disparaban por descargas y dependían de que cada hombre supiera dónde estaba su unidad. Un color fuerte y uniforme permitía distinguir de un vistazo una masa de tropas propias de una ajena entre el humo, y a los oficiales dirigir desde lejos. Los colores se elegían además por lo que costaba teñirlos: el rojo de la grana era barato y estable en Inglaterra, y el azul de tinte vegetal en Francia y Prusia.",
        destacado: { tipo: "frase", frase: "El problema no era que te vieran: era no reconocer a los tuyos." },
      },
      {
        rotulo: "El cambio",
        texto:
          "Todo se dio la vuelta con dos inventos casi simultáneos. La pólvora sin humo, generalizada a partir de 1886, dejó el campo despejado; y el fusil de repetición con cerrojo alcanzaba con puntería a varios centenares de metros. De pronto un hombre de rojo en un campo era un blanco visible y alcanzable. El cambio empezó en la India británica. Allí las tropas teñían sus uniformes blancos con tierra, con té o con café, para que dejaran de verse tanto. De ahí viene la palabra caqui, que en la lengua local significa polvoriento. El ejército británico lo adoptó en 1902, después de una guerra en Sudáfrica en la que sus casacas rojas fueron blancos perfectos.",
        destacado: { tipo: "cifra", cifra: "1886", unidad: "el año de la pólvora sin humo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el caqui y todos sus descendientes: verdes, grises, arenas y estampados de camuflaje diseñados para cada terreno. Y quedaron los colores vivos allí donde todavía sirven para lo mismo, que es que te vean: la guardia ceremonial, los chalecos de los operarios de carretera y los uniformes de emergencias. La lógica no ha cambiado en cuatro siglos, solo el sentido. Antes se vestía de rojo para que te reconocieran los tuyos entre el humo; hoy, de amarillo, para que te vea un coche a tiempo. En los dos casos, el color lo decide la distancia a la que hace falta que alguien te vea.",
      },
    ],
  },
  {
    id: "barcos-pintados-a-rayas",
    titulo: "Pintaron los barcos a rayas para confundir",
    gancho: "No era para esconderlos. Era para que el submarino no supiera hacia dónde iban.",
    categoria: "Uniformes",
    color: "var(--slate)",
    curioso: true,
    encargo: "Un carguero pintado con grandes bandas y cuñas en blanco y negro, visto de costado.",
    entrada:
      "Océano Atlántico, 1917. Europa lleva tres años en la Primera Guerra Mundial y Alemania ha decidido ganarla por hambre. Gran Bretaña es una isla: casi toda su comida y su combustible llegan en barco. Por eso los submarinos alemanes hunden cualquier carguero que se acerque a sus puertos. Solo en abril echan a pique casi novecientos, y al país le quedan seis semanas de trigo.",
    paginas: [
      {
        rotulo: "El tubo",
        texto:
          "Un submarino de entonces pasa casi todo el tiempo navegando en la superficie, como un barco normal, y solo se sumerge para atacar. Debajo del agua está prácticamente ciego. Lo único que ve es lo que entra por el periscopio, un tubo con espejos dentro que asoma un palmo por encima de las olas. La imagen que llega es pequeña, temblorosa y sin color. Y no se puede mirar mucho rato, porque ese tubo deja una estela blanca que delata la posición del submarino. Con unos segundos de mirada, el capitán tiene que calcular tres cosas: a qué distancia está el barco, a qué velocidad va y hacia dónde.",
        destacado: { tipo: "frase", frase: "Debajo del agua solo ve lo que entra por un tubo con espejos." },
      },
      {
        rotulo: "Apuntar al futuro",
        texto:
          "Esos tres datos hacen falta porque el capitán no dispara al barco: dispara al sitio donde el barco estará dentro de un minuto. Un torpedo de 1917 no persigue nada. Sale del submarino, va en línea recta y a velocidad fija, y si el blanco sigue navegando mientras tanto, llega tarde y pasa por detrás. Ahí es donde entró la pintura. Un pintor de marinas alistado en la armada británica propuso cubrir los cascos con bandas y cuñas de colores muy contrastados. No para ocultar el barco, que en mar abierto es imposible, sino para romper su silueta: que no se vea dónde acaba la proa y que parezca ir hacia otro lado.",
        destacado: { tipo: "cifra", cifra: "4.000", unidad: "barcos británicos se pintaron así" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Se pintaron más de cuatro mil barcos británicos, cada uno distinto, para que el enemigo no pudiera aprenderse los dibujos. Los diseños se probaban antes con maquetas de madera miradas por un periscopio de juguete, dentro de un teatrito. Nunca se demostró del todo que funcionara. Al mismo tiempo se organizaron los convoyes: los mercantes dejaron de cruzar solos y pasaron a hacerlo en grupo, escoltados por buques de guerra. Esa medida sí redujo los hundimientos de forma clara. Con la llegada del radar, engañar al ojo dejó de servir. Quedaron las fotografías, que parecen cuadros de vanguardia, y quedó la idea: cuando no puedes esconder algo, confunde su forma.",
      },
    ],
  },

  {
    id: "el-uniforme-escolar",
    titulo: "El uniforme escolar nació como ropa de caridad",
    gancho: "Era la señal de que aquel niño estudiaba gratis, y por eso se veía desde lejos.",
    categoria: "Uniformes",
    color: "var(--ochre)",
    encargo: "Un abrigo largo azul de niño colgado en una percha de madera.",
    entrada:
      "Londres, 1552. Un antiguo palacio se convierte en escuela para niños pobres y huérfanos, financiada con donaciones. A sus alumnos se les entrega ropa: un abrigo largo de paño azul, que es la tela más barata porque el tinte de añil era el de menor precio, con medias amarillas. Esa ropa, entregada a cada alumno el día que entra, es el primer uniforme escolar documentado de Europa.",
    paginas: [
      {
        rotulo: "La señal",
        texto:
          "El uniforme cumplía dos funciones a la vez, y las dos eran del interés de quien pagaba, no del niño que lo llevaba puesto. Servía para que los niños estuvieran vestidos y abrigados sin depender de sus familias. Y servía para que se supiera de un vistazo, en la calle y en la iglesia, quiénes vivían de la caridad de aquella casa. Era, por tanto, una etiqueta social visible, no un símbolo de prestigio. Los propios estatutos regulaban con detalle qué prendas llevaba cada alumno, cuántas veces al año se reponían y prohibían venderlas o cambiarlas por otras.",
        destacado: { tipo: "frase", frase: "Se veía de lejos quién era el niño que estudiaba gratis." },
      },
      {
        rotulo: "La vuelta",
        texto:
          "Con el tiempo, el significado se invirtió por completo. En el siglo XIX, los internados caros de Inglaterra adoptaron uniformes propios, con corbata, escudo y colores de casa. Lo que había sido marca de pobreza se convirtió en señal de pertenecer a un sitio exclusivo. De ahí se exportó al mundo entero, primero por vía colonial y luego por imitación. Hoy es obligatorio en países enteros y el debate se repite igual en todos. Quienes lo defienden dicen que borra las diferencias de dinero entre alumnos. Quienes lo critican, que solo las traslada al bolso o al calzado.",
        destacado: { tipo: "cifra", cifra: "1552", unidad: "el año del primer uniforme escolar" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó aquella escuela, que sigue existiendo casi cinco siglos después. Sus alumnos llevan todavía el abrigo largo azul y las medias amarillas, casi iguales a los de 1552. Es, probablemente, el uniforme más antiguo del mundo que sigue usándose a diario, y los vecinos del barrio los reconocen desde lejos por el azul. Y quedó una vuelta de significado que conviene tener en la cabeza. La misma prenda, sin cambiar de forma ni de color, pasó de señalar a los niños pobres a señalar a los de las escuelas caras. Lo único que cambió fue quién la exigía.",
      },
    ],
  },
];
