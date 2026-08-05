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
    entrada:
      "Clermont, Francia, noviembre de 1095. El papa convoca una asamblea de obispos y termina con un discurso al aire libre. Pide a los caballeros cristianos que dejen de guerrear entre ellos y vayan a ayudar al imperio de Oriente contra los turcos, y de paso a recuperar Jerusalén. A cambio ofrece algo que nadie había ofrecido antes en esos términos.",
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
    titulo: "Saquearon una ciudad cristiana",
    gancho: "Se apuntaron menos hombres de los previstos, no pudieron pagar los barcos y terminaron atacando a quien no debían.",
    categoria: "Cruzadas",
    color: "var(--slate)",
    encargo: "Una muralla marítima antigua con torres, vista desde el agua.",
    entrada:
      "Venecia, 1201. Los organizadores de una nueva expedición a Tierra Santa firman un contrato con la ciudad para que les construya y tripule una flota. El precio se fija según el número de hombres previsto: unos treinta y cinco mil. Cuando llega la fecha de embarcar, aparecen menos de la mitad, y el contrato hay que pagarlo entero igual.",
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
    titulo: "Volvieron con palabras y azúcar",
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
