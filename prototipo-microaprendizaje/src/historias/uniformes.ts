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
    titulo: "Los soldados iban de rojo por el humo",
    gancho: "Con la pólvora negra no se veía nada a treinta metros, así que había que distinguir a los tuyos por el color.",
    categoria: "Uniformes",
    color: "var(--clay)",
    encargo: "Una casaca militar roja antigua con botones dorados, sobre fondo neutro.",
    entrada:
      "Europa, siglos XVII a XIX. Los ejércitos visten a sus soldados con colores llamativos: rojo, azul intenso, blanco. Visto desde hoy parece un suicidio, y la explicación está en el arma de la época. La pólvora negra produce en cada disparo una nube densa de humo blanco, y tras unas descargas el campo de batalla queda cubierto por una niebla en la que apenas se ve a treinta metros.",
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
          "Todo se dio la vuelta con dos inventos casi simultáneos. La pólvora sin humo, generalizada a partir de 1886, dejó el campo despejado; y el fusil de repetición con cerrojo alcanzaba con puntería a varios centenares de metros. De pronto un hombre de rojo en un campo era un blanco visible y alcanzable. El cambio empezó en la India británica, donde las tropas teñían sus uniformes blancos con tierra, té o café para ensuciarlos y camuflarlos: de ahí viene la palabra caqui, que en la lengua local significa polvoriento. El ejército británico lo adoptó oficialmente en 1902, después de una guerra en Sudáfrica en la que sus casacas rojas habían resultado ser blancos perfectos.",
        destacado: { tipo: "cifra", cifra: "1886", unidad: "el año de la pólvora sin humo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el caqui y todos sus descendientes: verdes, grises, arenas y estampados de camuflaje diseñados para cada terreno. Y quedaron los colores vivos donde todavía cumplen su función original, que es que te vean: la guardia ceremonial, las bandas, los chalecos de los operarios de carretera y los uniformes de los servicios de emergencia. La lógica no ha cambiado en cuatro siglos, solo el sentido: primero se vestía de rojo para que te reconocieran los tuyos entre el humo, y hoy de amarillo reflectante para que no te atropelle un coche. En los dos casos, el color lo decide la distancia a la que hace falta que alguien te vea.",
      },
    ],
  },
  {
    id: "barcos-pintados-a-rayas",
    titulo: "Se pintaron barcos de guerra a rayas locas",
    gancho: "No era para esconderlos: era para que el submarino calculara mal la dirección y la velocidad.",
    categoria: "Uniformes",
    color: "var(--slate)",
    curioso: true,
    encargo: "Un barco de carga pintado con grandes formas geométricas en blanco y negro.",
    entrada:
      "Reino Unido, 1917. Los submarinos alemanes están hundiendo mercantes a un ritmo insostenible. En mar abierto no hay forma de esconder un barco: se ve su humo a kilómetros. Un pintor de marinas que sirve en la marina propone entonces algo distinto: si no se puede ocultar el barco, hay que hacer que el enemigo calcule mal dónde va.",
    paginas: [
      {
        rotulo: "Engañar la vista",
        texto:
          "El submarino de la época apuntaba con un periscopio y disparaba un torpedo hacia donde el barco estaría al cabo de un minuto, así que necesitaba estimar tres cosas de un vistazo: la distancia, la velocidad y el rumbo. Los cascos se pintaron con grandes bandas y cuñas de colores contrastados que cortaban la silueta, falseaban dónde estaba la proa y creaban líneas engañosas de perspectiva. Un barco así no desaparece —se ve más, incluso—, pero es dificilísimo decir si viene hacia ti o se aleja, y a qué ritmo.",
        destacado: { tipo: "frase", frase: "No se trataba de esconderlo, sino de que apuntaran mal." },
      },
      {
        rotulo: "Todos distintos",
        texto:
          "Se pintaron más de cuatro mil barcos británicos y unos mil doscientos americanos, cada uno con un diseño diferente para que el enemigo no pudiera aprenderse los patrones ni identificar el modelo por su pintura. Los diseños los preparaban artistas en un taller, se probaban con maquetas de madera vistas por un periscopio en miniatura dentro de un teatrito y se aprobaban antes de mandarlos a los astilleros. Los dos lados de un mismo barco se pintaban distintos a propósito, para despistar también a quien lo hubiera visto antes por el otro costado y creyera reconocerlo.",
        destacado: { tipo: "cifra", cifra: "4.000", unidad: "barcos británicos se pintaron así" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó la duda de si sirvió: las estadísticas de la época no fueron concluyentes, porque al mismo tiempo se organizaron los convoyes escoltados, que sí redujeron las pérdidas de forma clara. Con el radar, en la guerra siguiente, el engaño visual perdió sentido y la práctica se abandonó. Quedaron, en cambio, las fotografías, que parecen arte de vanguardia y de hecho lo influyeron, y quedó la idea de fondo, que sigue viva en el diseño de los prototipos de coches que circulan camuflados: si no puedes ocultar algo, confunde su forma.",
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
          "El uniforme cumplía dos funciones a la vez, y las dos eran del interés de quien pagaba, no del niño que lo llevaba puesto. Servía para que los niños estuvieran vestidos y abrigados sin depender de sus familias, y servía para que se supiera de un vistazo, en la calle y en la iglesia, quiénes eran los beneficiarios de la caridad de la institución. Era, por tanto, una etiqueta social visible, no un símbolo de prestigio. Los propios estatutos regulaban con detalle qué prendas llevaba cada alumno, cuántas veces al año se reponían y prohibían venderlas o cambiarlas por otras.",
        destacado: { tipo: "frase", frase: "Se veía de lejos quién era el niño que estudiaba gratis." },
      },
      {
        rotulo: "La vuelta",
        texto:
          "Con el tiempo, el significado se invirtió por completo. En el siglo XIX, los internados caros de Inglaterra adoptaron uniformes propios con corbata, escudo y colores de casa, y lo que había sido marca de pobreza se convirtió en señal de pertenencia a una institución exclusiva. De ahí se exportó al mundo entero por vía colonial y de imitación, y hoy es obligatorio en países enteros, con debates recurrentes: quienes lo defienden dicen que borra las diferencias de dinero entre alumnos, y quienes lo critican, que solo las traslada de la ropa al bolso o al calzado.",
        destacado: { tipo: "cifra", cifra: "1552", unidad: "el año del primer uniforme escolar" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó aquella escuela, que sigue existiendo casi cinco siglos después y cuyos alumnos llevan todavía el abrigo largo azul y las medias amarillas, prácticamente iguales a los de 1552, en lo que probablemente sea el uniforme más antiguo del mundo en uso continuado. Y quedó una inversión de significado que merece la pena tener en la cabeza: la misma prenda, sin cambiar de forma ni de color, pasó de señalar a los niños pobres a señalar a los de las escuelas caras, según quién decidiera ponérsela y cuánto costara la escuela que la exigía.",
      },
    ],
  },
];
