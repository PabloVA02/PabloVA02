import type { Short } from "../shorts";

/* ==========================================================================
   Cerillas y fuego doméstico.

   Un objeto que cuesta céntimos y que resolvió un problema diario enorme.
   El riesgo del tema es la anécdota simpática de inventor despistado.

   La regla del tema: la cerilla se cuenta por LO QUE COSTABA ANTES y por
   quién pagó el precio de fabricarla. Media hora con pedernal y yesca. Una
   mandíbula destruida por el fósforo blanco. Una huelga de mil cuatrocientas
   mujeres. Los objetos baratos casi nunca salen baratos para todos.

   Y la química se explica en dos frases, sin fórmulas.
   ========================================================================== */

export const CERILLAS: Short[] = [
  {
    id: "antes-de-la-cerilla",
    titulo: "Media hora para hacer fuego",
    gancho: "Pedernal, eslabón y yesca. Y si se apagaba de noche, tocaba ir a pedir brasas al vecino.",
    categoria: "Cerillas",
    color: "var(--ochre)",
    encargo: "Una caja metálica pequeña abierta con pedernal, eslabón y un trozo de yesca.",
    fotos: [
      {
        archivo: "Safety matches Independence.jpg",
        autor: "Una caja de cerillas de seguridad americana, abierta. Fotografía de Agnat.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Safety_matches_Independence.jpg",
        foco: "50% 42%",
        alt: "Una caja de cartón azul con cerillas de cabeza roja asomando, sobre una tela oscura.",
      },
      {
        archivo: "2026-03-21 Z5-2200 Achim-Lammerts Fomes-fomentarius.jpg",
        autor: "El hongo yesquero (<em>Fomes fomentarius</em>) en un tronco. Fotografía de Achim Lammerts.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:2026-03-21_Z5-2200_Achim-Lammerts_Fomes-fomentarius.jpg",
        foco: "55% 50%",
        alt: "Un hongo con forma de pezuña, gris y con bandas, saliendo de un tronco cubierto de musgo.",
      },
      {
        archivo: "Matchstick in the Dark (Unsplash).jpg",
        autor: "Una fila de cerillas ardiendo a la vez. Fotografía de Jamie Street.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Matchstick_in_the_Dark_(Unsplash).jpg",
        foco: "45% 50%",
        alt: "Muchas cerillas puestas en fila prendiendo unas de otras, con la llama corriendo por encima.",
      },
      {
        archivo: "Close-up of a Fire.jpg",
        autor: "Llamas y brasas de cerca. Fotografía de Thomas Kirchel.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Close-up_of_a_Fire.jpg",
        foco: "50% 50%",
        alt: "Un fuego de leña visto de cerca, con las llamas naranjas subiendo entre los troncos al rojo.",
      },
    ],
    entrada:
      "Europa, siglo XVIII. No existe nada que se parezca ni de lejos a una cerilla, y encender fuego es una tarea con su técnica y su mal humor. Hay que golpear un eslabón de acero contra un pedernal en el ángulo justo, dirigir la chispa que salta hacia un trozo de yesca preparada de antemano, soplar con mucha paciencia hasta conseguir un rescoldo que no se apague y pasarlo con cuidado a la paja o a las virutas. Con las manos frías, con viento o con la yesca algo húmeda, la operación entera puede llevar media hora larga.",
    paginas: [
      {
        rotulo: "La yesca",
        texto:
          "La yesca no era cualquier cosa: se preparaba con un hongo que crece en los troncos de haya y de abedul, cortado en láminas, hervido en lejía o en orina, machacado y secado hasta dejarlo suave como una gamuza. Se guardaba en una caja metálica hermética, la yesquera, junto al pedernal y el eslabón, y era un objeto tan cotidiano que aparece en los inventarios de cualquier casa. Por eso el fuego del hogar no se apagaba nunca si se podía evitar: se tapaban las brasas con ceniza por la noche para reavivarlas por la mañana.",
        destacado: { tipo: "frase", frase: "El fuego de casa no se apagaba nunca si se podía evitar." },
      },
      {
        rotulo: "El fósforo",
        texto:
          "La cerilla que funciona por fricción llegó en 1826, por casualidad, cuando un farmacéutico inglés raspó contra el suelo un palo con el que estaba removiendo una mezcla y se le encendió en la mano. Aquellas primeras eran escandalosas: soltaban chispas, olían fatal y podían prender la ropa. La versión que triunfó llevaba fósforo blanco, encendía con cualquier roce y se vendía por millones de cajas, tan barata que se convirtió en el primer objeto realmente universal de la industria. También podía encenderse sola con el calor de un bolsillo.",
        destacado: { tipo: "cifra", cifra: "1826", unidad: "la primera cerilla de fricción" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquel invento minúsculo cambió la vida doméstica más que muchos aparatos famosos: la lumbre dejó de ser un bien que había que custodiar día y noche y pasó a estar disponible en un segundo, a cualquier hora y en cualquier sitio. Cambió también el tabaco, que hasta entonces se fumaba sobre todo en pipa y junto al fuego, y de golpe se pudo fumar por la calle. Las cajas se convirtieron en objeto de coleccionista con miles de diseños. Y el gesto de raspar sigue siendo idéntico al de aquel farmacéutico que removía una mezcla.",
      },
    ],
  },

  {
    id: "cerilleras-de-londres",
    titulo: "El fósforo comía el hueso",
    gancho: "El fósforo blanco les pudría el hueso por dentro. En 1888 pararon la fábrica más grande de Londres.",
    categoria: "Cerillas",
    color: "var(--slate)",
    encargo: "Una nave industrial larga con mesas corridas y montones de palitos de madera.",
    fotos: [
      {
        archivo: "View of the former Bryant ^ May match factory (Bow Quarter Estate) from the River Lea - geograph.org.uk - 4983705.jpg",
        autor: "La antigua fábrica de cerillas Bryant & May, en Bow, vista desde el río Lea. Fotografía de Robert Lamb.",
        licencia: "CC BY-SA 2.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:View_of_the_former_Bryant_%5E_May_match_factory_(Bow_Quarter_Estate)_from_the_River_Lea_-_geograph.org.uk_-_4983705.jpg",
        foco: "50% 50%",
        alt: "Naves de ladrillo de una fábrica victoriana junto a un río, con la chimenea alta al fondo.",
      },
      {
        archivo: "Security Lodge 3 Moreland Cottages Bow Quarter 60 Fairfield Road Bow London E3 2QN.jpg",
        autor: "Entrada de la antigua fábrica Bryant & May, hoy viviendas. Fotografía de Spudgun67.",
        licencia: "CC BY-SA 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Security_Lodge_3_Moreland_Cottages_Bow_Quarter_60_Fairfield_Road_Bow_London_E3_2QN.jpg",
        foco: "50% 50%",
        alt: "Portería de ladrillo rojo con reloj a la entrada del recinto de una antigua fábrica.",
      },
      {
        archivo: "View of Canary Wharf and the Bow Quarter Estate (former Bryant ^ May match factory) from the Greenway - geograph.org.uk - 2756182.jpg",
        autor: "La antigua fábrica de cerillas y, al fondo, las torres de Canary Wharf.",
        licencia: "CC BY-SA 2.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:View_of_Canary_Wharf_and_the_Bow_Quarter_Estate_(former_Bryant_%5E_May_match_factory)_from_the_Greenway_-_geograph.org.uk_-_2756182.jpg",
        foco: "50% 50%",
        alt: "Tejados y chimenea de una fábrica antigua del este de Londres con rascacielos lejanos detrás.",
      },
      {
        archivo: "Three Mills Lane view across the water.jpg",
        autor: "El río Lea a su paso por Three Mills, en el este de Londres. Fotografía de Sallyanne4.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Three_Mills_Lane_view_across_the_water.jpg",
        foco: "50% 50%",
        alt: "Canal con barcazas amarradas junto a edificios industriales antiguos de ladrillo.",
      },
    ],
    entrada:
      "Londres, 1888. En una fábrica de cerillas del este de la ciudad trabajan unas mil cuatrocientas mujeres y niñas, muchas de catorce años, mojando palos en pasta de fósforo blanco durante jornadas de catorce horas. Cobran muy poco y encima les descuentan multas por hablar, por ir al baño sin permiso o por dejar caer cerillas al suelo. Pero lo peor del trabajo no es el sueldo ni el trato: es lo que aquel fósforo blanco les está haciendo por dentro, y que en la fábrica se conoce desde hace años con un nombre propio.",
    paginas: [
      {
        rotulo: "La mandíbula",
        texto:
          "El fósforo blanco es tóxico y sus vapores atacan el hueso de la mandíbula de quien lo respira a diario. La enfermedad empezaba con dolor de muelas y las encías hinchadas, seguía con abscesos y con un hueso que despedía un resplandor verdoso en la oscuridad, y terminaba con la mandíbula destruida: el único tratamiento era extirparla entera, lo que dejaba a la persona desfigurada y sin poder comer con normalidad. Sin cirugía, la infección llegaba al cerebro. La empresa lo sabía y despedía a las trabajadoras en cuanto aparecían los primeros síntomas.",
        destacado: { tipo: "frase", frase: "El hueso enfermo brillaba con un resplandor verdoso." },
      },
      {
        rotulo: "La huelga",
        texto:
          "Una periodista publicó un artículo con las condiciones de la fábrica y con nombres concretos. La dirección intentó obligar a las trabajadoras a firmar un desmentido, tres se negaron y una fue despedida; al día siguiente pararon las mil cuatrocientas. Organizaron un comité, fueron al Parlamento a explicarlo y consiguieron el apoyo de buena parte de la prensa. En tres semanas la empresa cedió: readmitió a la despedida, eliminó las multas y aceptó negociar. Fue una de las primeras huelgas ganadas por trabajadoras sin cualificación en todo el país, y sirvió de ejemplo al sindicalismo de los años siguientes.",
        destacado: { tipo: "cifra", cifra: "1.400", unidad: "trabajadoras pararon la fábrica" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El fósforo blanco tardó todavía casi veinte años en prohibirse, con un convenio internacional firmado en 1906 y leyes nacionales después, y existía desde hacía tiempo un sustituto seguro que las empresas no querían usar porque salía algo más caro. Una fábrica montada por una asociación benéfica llegó a producir cerillas sin fósforo blanco, pintadas de rojo, solo para demostrar que se podía hacer y venderlas igual. Hoy cualquier cerilla es de las otras, y de aquella huelga queda un edificio convertido en viviendas con una placa en la puerta.",
      },
    ],
  },

  {
    id: "cerilla-de-seguridad",
    titulo: "La cerilla que solo prende ahí",
    gancho: "Media reacción va en la cabeza y la otra media en el raspador. Por separado no arden.",
    categoria: "Cerillas",
    color: "var(--plum)",
    curioso: true,
    encargo: "Una caja de cerillas abierta con la banda lateral marrón muy gastada.",
    entrada:
      "Suecia, 1844. Un químico propone una idea sencilla para evitar los incendios y los envenenamientos que provocan las cerillas de fósforo blanco: separar los ingredientes. Si la mezcla que arde se reparte entre la cabeza de la cerilla y la banda lateral de la caja, ninguna de las dos partes sirve de nada por sí sola.",
    paginas: [
      {
        rotulo: "Las dos mitades",
        texto:
          "La cabeza lleva un oxidante, normalmente clorato de potasio, más azufre y un aglutinante. La banda de la caja lleva fósforo rojo, vidrio molido y pegamento. El fósforo rojo es una forma distinta del mismo elemento: no es tóxico, no arde solo y no se enciende con el calor de un bolsillo. Al raspar, la fricción con el vidrio molido calienta unos puntos diminutos, convierte durante un instante una parte del fósforo rojo en blanco y eso enciende la cabeza. Sin la banda, la cerilla se puede raspar contra lo que sea y no pasa nada.",
        destacado: { tipo: "frase", frase: "El fósforo va en la caja, no en la cerilla." },
      },
      {
        rotulo: "El monopolio",
        texto:
          "La cerilla de seguridad se fabricó a escala en Suecia a partir de 1855 y el país acabó controlando buena parte del mercado mundial, con una industria que en su mejor momento exportaba a todos los continentes. En los años veinte, un financiero sueco construyó sobre ese negocio un imperio que prestaba dinero a gobiernos enteros a cambio de monopolios nacionales de cerillas, y llegó a financiar a más de una docena de países. El montaje resultó ser en buena parte un fraude contable y se derrumbó en 1932, en un escándalo enorme.",
        destacado: { tipo: "cifra", cifra: "1844", unidad: "el año de separar los dos" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La superstición de no encender tres cigarrillos con la misma cerilla viene, según se cuenta, de las trincheras, donde la llama sostenida le daba tiempo al francotirador a apuntar; hay quien sostiene que la difundió precisamente aquella industria para vender más cajas. Hoy la cerilla compite con el mechero y con los encendedores eléctricos, y sobrevive sobre todo en los hoteles, en las velas y en las chimeneas. Sigue siendo el objeto más barato que hace exactamente lo que promete, y sigue necesitando su caja, que era la idea entera.",
      },
    ],
  },
];
