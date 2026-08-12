import type { Short } from "../shorts";

/* ==========================================================================
   Las cruzadas.

   Doscientos años de expediciones militares europeas a Oriente Próximo, con
   una carga ideológica enorme y muy manoseada. El tema exige precisión: se
   cuenta lo que pasó y quién lo pagó, sin épica y sin sermón.

   La regla del tema: se explica siempre el INCENTIVO. Por qué se apuntaba
   alguien, qué le ofrecían y qué le costaba. Y se dan las cuentas: un
   caballero vendía tierras para pagarse el viaje, y eso mueve más historia
   que cualquier discurso.
   ========================================================================== */

export const CRUZADAS: Short[] = [
  {
    id: "el-sermon-que-movio-europa",
    titulo: "Un sermón movió a miles",
    gancho: "El papa ofreció el perdón de todos los pecados a quien fuera a luchar a Tierra Santa. Funcionó demasiado bien.",
    categoria: "Cruzadas",
    color: "var(--plum)",
    encargo: "Un campo abierto con una tarima de madera vacía y estandartes clavados en el suelo.",
    fotos: [
      {
        archivo: "Krak des Chevaliers landscape (cropped).jpg",
        autor: "El Krak de los Caballeros, en Siria, la mayor fortaleza que levantaron los cruzados.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Krak_des_Chevaliers_landscape_(cropped).jpg",
        foco: "50% 45%",
        alt: "Un castillo enorme de piedra clara sobre una loma verde, con valles y montañas al fondo.",
      },
      {
        archivo: "Clermont-Ferrand Cathedral.jpg",
        autor: "La catedral de Clermont-Ferrand, en la ciudad donde se convocó la asamblea de 1095. Fotografía de Ernesto.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Clermont-Ferrand_Cathedral.jpg",
        foco: "50% 45%",
        alt: "Una catedral gótica de piedra volcánica negra con dos torres altas y agujas afiladas.",
      },
      {
        archivo: "Middelalder (medieval) ridder ringbrynje (chain mail haubrek) med hette, okse på tappert (tabard), hjelm (spangen helmet) med neseskinne (Mannequin) etc Bergenhus festningsmuseum Military Museum Bergen, Norway 2021 6490.jpg",
        autor: "Reproducción del equipo de un guerrero del siglo XI: cota de malla, capucha y yelmo con nasal. Museo de la fortaleza de Bergenhus. Fotografía de Wolfmann.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Middelalder_(medieval)_ridder_ringbrynje_(chain_mail_haubrek)_med_hette,_okse_p%C3%A5_tappert_(tabard),_hjelm_(spangen_helmet)_med_neseskinne_(Mannequin)_etc_Bergenhus_festningsmuseum_Military_Museum_Bergen,_Norway_2021_6490.jpg",
        foco: "50% 35%",
        alt: "Un maniquí con cota de malla hasta la rodilla, capucha de anillas y casco cónico con protector de nariz.",
      },
      {
        archivo: "Krak des Chevaliers Castle, Inner and outer walls, Syria.jpg",
        autor: "Las murallas interior y exterior del Krak de los Caballeros. Fotografía de Vyacheslav Argenberg.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Krak_des_Chevaliers_Castle,_Inner_and_outer_walls,_Syria.jpg",
        foco: "50% 50%",
        alt: "El paso estrecho entre dos líneas de muralla de piedra, con torres redondas y almenas.",
      },
    ],
    entrada:
      "Clermont, Francia, noviembre de 1095. El papa convoca una asamblea de obispos que dura una semana y la remata con un discurso al aire libre, fuera de la ciudad, porque no cabe la gente dentro. Pide a los caballeros cristianos dos cosas: que dejen de guerrear entre ellos, que es lo que llevan haciendo toda su vida, y que vayan en cambio a ayudar al imperio de Oriente contra los turcos y, de paso, a recuperar Jerusalén. A cambio ofrece algo que nadie había ofrecido antes en esos términos, y la respuesta desborda por completo lo que esperaba.",
    paginas: [
      {
        rotulo: "El trato",
        texto:
          "Lo que se ofrecía era la indulgencia: el perdón de la penitencia debida por los pecados cometidos. Para un noble de la época eso era una oferta enorme, porque su oficio consistía en matar y saquear, y la Iglesia le imponía penitencias larguísimas por ello. Además, sus tierras quedaban bajo protección eclesiástica mientras estuviera fuera, y sus deudas, congeladas. La expedición no era, sobre el papel, una guerra de conquista, sino una peregrinación armada, y así se llamó durante mucho tiempo. La palabra cruzada es muy posterior y la pusieron los historiadores.",
        destacado: { tipo: "frase", frase: "No se llamaba cruzada, sino peregrinación armada." },
      },
      {
        rotulo: "Quién pagaba",
        texto:
          "El viaje lo pagaba cada uno de su bolsillo, y era carísimo. Se calcula que un caballero necesitaba el equivalente a cuatro o cinco años de sus ingresos para equiparse, comprar caballos y mantener a su gente durante el camino. Muchos vendieron tierras o las hipotecaron a monasterios, que se quedaron con propiedades enormes por ese procedimiento. Salieron unas cien mil personas entre soldados y acompañantes, y buena parte ni siquiera era gente de armas: iban campesinos, familias enteras y clérigos. Muchos murieron de hambre y de enfermedad antes de ver ninguna batalla.",
        destacado: { tipo: "cifra", cifra: "5", unidad: "años de ingresos costaba equiparse" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquella primera expedición tomó Jerusalén en 1099 tras una matanza que las propias crónicas cristianas describen con crudeza, y fundó varios estados en la costa que duraron casi dos siglos. Quedó sobre todo un mecanismo que se repetiría: la indulgencia como forma de movilizar gente y dinero, aplicada después a otras guerras dentro de Europa. Y quedó una consecuencia económica de la que se habla poco. Las órdenes religiosas y los monasterios se convirtieron en grandes propietarios de tierras, sencillamente porque miles de caballeros vendieron o hipotecaron a la desesperada para poder pagarse el viaje.",
      },
    ],
  },
  {
    id: "la-cruzada-que-no-llego",
    titulo: "Saquearon la ciudad amiga",
    gancho: "Se apuntaron menos hombres de los previstos, no pudieron pagar los barcos y terminaron atacando a quien no debían.",
    categoria: "Cruzadas",
    color: "var(--slate)",
    encargo: "Una muralla marítima antigua con torres, vista desde el agua.",
    fotos: [
      {
        archivo: "Interior of Hagia Sophia (2) - Istanbul (2022).jpg",
        autor: "Interior de Santa Sofía de Constantinopla, la iglesia más rica de la cristiandad en 1204.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Interior_of_Hagia_Sophia_(2)_-_Istanbul_(2022).jpg",
        foco: "50% 50%",
        alt: "Bóvedas doradas y medallones caligráficos vistos desde abajo en el interior de Santa Sofía.",
      },
      {
        archivo: "Interior of Hagia Sophia (3) - Istanbul (2022).jpg",
        autor: "Arcos y galerías del interior de Santa Sofía, en Estambul.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Interior_of_Hagia_Sophia_(3)_-_Istanbul_(2022).jpg",
        foco: "50% 50%",
        alt: "Columnas de mármol y arcadas bajo una bóveda decorada, en una gran iglesia bizantina.",
      },
      {
        archivo: "Interior of Hagia Sophia (6) - Istanbul (2022).jpg",
        autor: "La nave central de Santa Sofía vista hacia la cúpula.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Interior_of_Hagia_Sophia_(6)_-_Istanbul_(2022).jpg",
        foco: "50% 50%",
        alt: "Cúpula enorme sostenida por pechinas, con ventanas en la base y mosaicos dorados.",
      },
      {
        archivo: "Kuppel Kleine Hagia Sophia.jpg",
        autor: "Cúpula de la iglesia bizantina conocida como la pequeña Santa Sofía, en Estambul.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Kuppel_Kleine_Hagia_Sophia.jpg",
        foco: "50% 50%",
        alt: "Cúpula bizantina con nervios y ventanas, vista desde el suelo del templo.",
      },
    ],
    entrada:
      "Venecia, 1201. Los organizadores de una nueva expedición a Tierra Santa firman un contrato con la ciudad para que les construya y les tripule una flota entera. El precio se fija por adelantado según el número de hombres previsto, unos treinta y cinco mil, y Venecia para su economía durante un año para cumplirlo. Cuando llega la fecha de embarcar, en el puerto aparecen menos de la mitad de los cruzados, y el contrato hay que pagarlo entero igual. De esa deuda, y no de la fe, sale todo lo que viene después.",
    paginas: [
      {
        rotulo: "La deuda",
        texto:
          "Venecia había parado su comercio durante un año para construir aquella flota, así que no estaba dispuesta a perdonar nada. Los cruzados no podían pagar, y de esa deuda salió todo lo demás. Primero aceptaron un encargo: atacar una ciudad de la costa adriática que competía con Venecia y que era cristiana, cosa que el papa había prohibido expresamente. Los excomulgó a todos. Después apareció otra salida todavía peor. Un aspirante al trono de Constantinopla se ofreció a saldar la deuda entera si lo ayudaban a hacerse con el poder en su ciudad.",
        destacado: { tipo: "cifra", cifra: "35.000", unidad: "hombres se contrataron, y vino la mitad" },
      },
      {
        rotulo: "El saqueo",
        texto:
          "La operación salió mal en cadena. El aspirante llegó al trono, pero no pudo pagar lo prometido. La población de la ciudad se sublevó contra él y lo mató, y el ejército acampado a las puertas se quedó sin dinero y sin acuerdo. En abril de 1204 asaltaron Constantinopla, que era la ciudad más rica de la cristiandad y la capital del imperio al que habían venido a ayudar. El saqueo duró tres días. Se fundieron obras de arte para repartir el metal y se llevaron reliquias y estatuas a Occidente.",
        destacado: { tipo: "frase", frase: "Iban a ayudar a aquel imperio, y acabaron asaltando su capital." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquella expedición nunca llegó a Tierra Santa. El imperio de Oriente quedó partido y debilitado para siempre, y muchos historiadores sitúan ahí el principio de su caída definitiva, dos siglos y medio después. La ruptura entre las iglesias de Oriente y Occidente se hizo insalvable, y todavía en 2001 un papa pidió perdón públicamente por aquel episodio. Y quedan las piezas repartidas por Europa. Los cuatro caballos de bronce que presiden la basílica de San Marcos, en Venecia, salieron del hipódromo de Constantinopla en aquel saqueo, y allí siguen ocho siglos después.",
      },
    ],
  },
  {
    id: "lo-que-trajeron-de-vuelta",
    titulo: "Volvieron con azúcar",
    gancho: "Molinos, cultivos y un vocabulario entero que hoy usamos sin saber de dónde salió.",
    categoria: "Cruzadas",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un cuenco de azúcar sin refinar junto a una tela de rayas de colores.",
    entrada:
      "Oriente Próximo, siglos XII y XIII. Los estados fundados por los cruzados en la costa duran casi doscientos años, y durante ese tiempo miles de europeos viven allí, comercian, se casan y aprenden. Cuando aquellos territorios se pierden, lo que vuelve a Europa no es solo gente derrotada: vuelven cultivos, técnicas y palabras que se quedaron para siempre.",
    paginas: [
      {
        rotulo: "El azúcar",
        texto:
          "El caso más claro es la caña de azúcar. En Europa se endulzaba con miel, y allí encontraron plantaciones de caña con molinos y calderas para cocer el jugo hasta cristalizarlo. Los cruzados se hicieron cargo de esas instalaciones, aprendieron el proceso y lo llevaron primero a Chipre y Sicilia y después al Atlántico. De ahí saltó a las islas del Atlántico y después a América, donde se montó a escala industrial con trabajo esclavo. La palabra azúcar, con su forma parecida en casi todas las lenguas europeas, marca el camino que hizo el producto.",
        destacado: { tipo: "frase", frase: "Antes se endulzaba con miel: el azúcar llegó de allí." },
      },
      {
        rotulo: "Las palabras",
        texto:
          "El vocabulario que quedó es sorprendente por lo cotidiano. Alcohol, algodón, jarabe, alcanfor, alquiler, aduana o tarifa vienen del árabe, y entraron en las lenguas europeas por esta vía y sobre todo por la península ibérica. También los nombres de varias telas, como el damasco o la muselina, que se llaman así por la ciudad donde se tejían. Y algunos objetos: los espejos de vidrio de buena calidad, varios instrumentos de navegación y el papel, que llegó a Europa desde el mundo islámico, donde ya se fabricaba desde hacía siglos.",
        destacado: { tipo: "cifra", cifra: "200", unidad: "años vivieron europeos en aquella costa" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Conviene no exagerar el asunto, y los historiadores llevan tiempo corrigiéndolo. Casi todo eso llegaba también por otras vías más tranquilas: el comercio con Egipto, la península ibérica y Sicilia, donde convivían culturas sin necesidad de ejércitos. Las cruzadas aceleraron algunos intercambios y sobre todo crearon apetito por productos de lujo, lo que empujó el comercio mediterráneo. Pero la idea de que Europa aprendió gracias a aquellas guerras no se sostiene. Aprendió a pesar de ellas, comerciando con la misma gente a la que combatía, y muchas veces en los años de tregua.",
      },
    ],
  },
];
