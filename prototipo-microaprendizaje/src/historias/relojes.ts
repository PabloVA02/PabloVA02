import type { Short } from "../shorts";

/* ==========================================================================
   Relojes.

   Medir el tiempo parece un asunto técnico y aburrido, y lo es mientras se
   cuente con engranajes y escapes. El riesgo del tema es el catálogo de
   mecanismos: rubíes, cuerdas, tolerancias.

   La regla del tema: un reloj solo importa por lo que se juega quien mira
   la hora. Un barco que no sabe dónde está y encalla con dos mil hombres
   dentro. Un soldado que tiene que atacar en el minuto exacto. Una
   industria entera que desaparece porque el aparato se abarató.

   Y siempre se dice CUÁNTO SE EQUIVOCABA el reloj de la época, porque sin
   el error no se entiende para qué servía arreglarlo.
   ========================================================================== */

export const RELOJES: Short[] = [
  {
    id: "longitud-harrison",
    titulo: "Un reloj resolvió el mayor problema del mar",
    gancho: "Un carpintero sin estudios ganó el premio y tardó cuarenta años en cobrarlo entero.",
    categoria: "Relojes",
    color: "var(--slate)",
    encargo: "Un reloj de latón grande dentro de una caja de madera con tapa de cristal.",
    entrada:
      "Reino Unido, 1714. Un barco en alta mar sabe calcular sin problema a qué altura está del ecuador, mirando el sol al mediodía, pero no tiene manera fiable de saber a qué distancia está hacia el este o hacia el oeste. Se navega a ojo. El Parlamento ofrece veinte mil libras, una fortuna descomunal, a quien lo resuelva.",
    paginas: [
      {
        rotulo: "El naufragio",
        texto:
          "La recompensa se convocó siete años después de un desastre que espantó al país: una escuadra que volvía del Mediterráneo se creyó más al oeste de lo que estaba y se estrelló de noche contra unas islas rocosas frente a la costa inglesa. Se hundieron cuatro barcos y murieron cerca de dos mil hombres en una noche. El problema tenía una solución sabida en teoría desde hacía más de un siglo: como la Tierra gira quince grados por hora, basta con llevar a bordo un reloj puesto a la hora del puerto de salida y compararlo con el mediodía del sitio donde uno está. La cuestión era el reloj.",
        destacado: { tipo: "cifra", cifra: "2.000", unidad: "muertos en un solo naufragio" },
      },
      {
        rotulo: "El carpintero",
        texto:
          "Ningún reloj de la época aguantaba aquello. Los de péndulo no funcionan en un barco que se mueve, y los demás se adelantaban o se atrasaban minutos al día con el calor, la humedad y el balanceo; un error de cuatro minutos son cien kilómetros de desvío. Un carpintero del norte de Inglaterra, sin estudios ni taller de relojería, se pasó cuarenta años construyendo aparatos cada vez mejores: engranajes de madera que no necesitan aceite, muelles enfrentados que se compensan solos, dos metales distintos unidos para que el calor no altere la marcha. Su cuarto modelo cabía en la mano y se parecía a un reloj de bolsillo grande.",
        destacado: { tipo: "frase", frase: "Cuatro minutos de error son cien kilómetros de desvío." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "En la travesía de prueba hasta el Caribe, en 1761, aquel reloj se desvió cinco segundos en más de dos meses de navegación. La comisión que juzgaba el premio, formada por astrónomos que defendían un método rival basado en la posición de la Luna, se resistió durante años a darlo por bueno y le fue exigiendo pruebas nuevas. Cobró casi todo el dinero a los ochenta años, y solo después de que el rey se metiera de por medio. Sus relojes se copiaron por centenares, y durante dos siglos todo barco del mundo llevó uno guardado en una caja, tratado con más cuidado que ninguna otra cosa a bordo.",
      },
    ],
  },

  {
    id: "reloj-pulsera-guerra",
    titulo: "El reloj de pulsera era cosa de mujeres",
    gancho: "Un hombre lo llevaba en el bolsillo. Las trincheras cambiaron eso en cuatro años.",
    categoria: "Relojes",
    color: "var(--clay)",
    curioso: true,
    encargo: "Una muñeca con un reloj pequeño de correa de cuero, en blanco y negro.",
    entrada:
      "Europa, comienzos del siglo XX. Un hombre que quiere saber la hora saca un reloj del bolsillo del chaleco, tirando de una cadenita. Los que se llevan atados a la muñeca existen, pero son pulseras con esfera, joyas pequeñas que se regalan a las señoras. A un caballero de la época le parecería tan ridículo ponerse uno como ponerse unos pendientes.",
    paginas: [
      {
        rotulo: "El bolsillo",
        texto:
          "El desprecio tenía su lógica: el reloj de bolsillo iba protegido de los golpes, del polvo y de la lluvia, y era una pieza cara que se enseñaba al sacarla. El de muñeca era pequeño, frágil y presumido. Los primeros militares que empezaron a atarse el suyo a la mano lo hicieron por necesidad, no por moda: los artilleros y los pilotos necesitaban las dos manos libres y no podían rebuscar en el chaleco. Algunos oficiales se fabricaban el apaño ellos mismos, cosiendo una correa de cuero al reloj de siempre para llevarlo puesto.",
        destacado: { tipo: "frase", frase: "Cosían una correa de cuero al reloj de bolsillo." },
      },
      {
        rotulo: "Las trincheras",
        texto:
          "La Primera Guerra Mundial acabó con la discusión en cuatro años. Los ataques de infantería se coordinaban con la artillería al minuto: los cañones bombardeaban una posición y los soldados salían a correr en el instante exacto en que el fuego se levantaba, ni antes ni después. Eso obliga a mirar la hora agachado, con barro, con las manos ocupadas y muchas veces de noche, y ahí el bolsillo no vale. El ejército empezó a repartir relojes de muñeca con la esfera luminosa y una rejilla metálica para proteger el cristal. Volvieron a casa millones de hombres que llevaban uno puesto y que ya no lo veían raro.",
        destacado: { tipo: "cifra", cifra: "4", unidad: "años bastaron para cambiar la costumbre" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "En 1930 se vendían cincuenta relojes de muñeca por cada uno de bolsillo, y la industria suiza había reorientado sus fábricas enteras. La esfera luminosa de aquellos modelos militares se pintaba con radio, y las mujeres que la aplicaban a pincel, afilándolo con los labios, acabaron enfermando: fue uno de los primeros casos de enfermedad laboral llevado a los tribunales. Hoy casi nadie mira la hora en la muñeca porque la lleva en el móvil, así que el reloj ha vuelto a ser lo que era antes de las trincheras: un objeto que se lleva porque se enseña.",
      },
    ],
  },

  {
    id: "crisis-cuarzo",
    titulo: "Suiza inventó el reloj que casi la arruina",
    gancho: "Enseñó el prototipo en una feria y no le vio salida. Los japoneses estaban mirando.",
    categoria: "Relojes",
    color: "var(--plum)",
    encargo: "Un escaparate de relojería antigua con la persiana medio bajada.",
    entrada:
      "Suiza, 1967. El país fabrica la mitad de los relojes del mundo y emplea a noventa mil personas en el oficio, repartidas en pueblos enteros dedicados a ello desde hace generaciones. Ese año, un centro de investigación suizo presenta un reloj electrónico de cuarzo, sin muelles ni engranajes, mucho más preciso que cualquier mecanismo. Y la industria decide que no le interesa.",
    paginas: [
      {
        rotulo: "El prototipo",
        texto:
          "El aparato se llevó ese mismo año a un concurso internacional de precisión y batió todos los récords, dejando muy atrás a los mejores relojes mecánicos. Un cristal de cuarzo vibra decenas de miles de veces por segundo con una regularidad que ningún muelle puede imitar, y contando esas vibraciones se obtiene la hora con un error de segundos al mes en lugar de segundos al día. Los fabricantes suizos vieron el invento, entendieron perfectamente cómo funcionaba y decidieron que aquello era un juguete de laboratorio sin encanto ni prestigio. No lo escondieron: lo enseñaron en las ferias del sector.",
        destacado: { tipo: "frase", frase: "Enseñaron el invento en las ferias sin darle importancia." },
      },
      {
        rotulo: "El derrumbe",
        texto:
          "Una empresa japonesa sacó el primer reloj de cuarzo a la venta en diciembre de 1969, a un precio de coche pequeño. En cinco años la electrónica lo abarató hasta lo ridículo, y de pronto un reloj de diez dólares daba la hora mejor que uno de mil. La industria suiza se hundió con una rapidez brutal: entre 1970 y 1983 pasó de noventa mil empleos a menos de treinta mil, cerraron cientos de talleres familiares y desaparecieron marcas con más de un siglo de historia. En el sector todavía se llama a aquello, sin rodeos, la crisis del cuarzo.",
        destacado: { tipo: "cifra", cifra: "60.000", unidad: "empleos perdidos en trece años" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Lo salvó una idea contraria a todo lo que el país había defendido: un reloj suizo barato, de plástico, con la mitad de piezas que uno normal y montado a máquina, vendido como un accesorio de color que se cambia según la ropa. Se lanzó en 1983 y vendió más de cien millones de unidades en una década, y con ese dinero el sector recompró las marcas de lujo que se estaban perdiendo. Hoy Suiza fabrica una fracción mínima de los relojes del mundo y se lleva más de la mitad del dinero, vendiendo precisamente el mecanismo que estuvo a punto de acabar con ella.",
      },
    ],
  },
];
