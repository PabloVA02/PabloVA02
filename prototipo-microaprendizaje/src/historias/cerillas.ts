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
    titulo: "Encender el fuego costaba media hora",
    gancho: "Pedernal, eslabón y yesca. Y si se apagaba de noche, tocaba ir a pedir brasas al vecino.",
    categoria: "Cerillas",
    color: "var(--ochre)",
    encargo: "Una caja metálica pequeña abierta con pedernal, eslabón y un trozo de yesca.",
    entrada:
      "Europa, siglo XVIII. No existe nada parecido a una cerilla. Para hacer fuego hay que golpear un eslabón de acero contra un pedernal, dirigir la chispa hacia una yesca preparada, soplar con paciencia hasta conseguir un rescoldo y pasarlo a paja o a virutas. Con las manos frías o con humedad, la operación puede llevar media hora larga.",
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
    titulo: "Las cerilleras perdían la mandíbula",
    gancho: "El fósforo blanco les pudría el hueso por dentro. En 1888 pararon la fábrica más grande de Londres.",
    categoria: "Cerillas",
    color: "var(--slate)",
    encargo: "Una nave industrial larga con mesas corridas y montones de palitos de madera.",
    entrada:
      "Londres, 1888. En una fábrica de cerillas del este de la ciudad trabajan unas mil cuatrocientas mujeres y niñas, muchas de catorce años, mojando palos en pasta de fósforo blanco durante jornadas de catorce horas. Cobran muy poco y encima les descuentan multas por hablar, por ir al baño o por dejar caer cerillas al suelo.",
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
    titulo: "La cerilla de seguridad solo prende en su caja",
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
        destacado: { tipo: "cifra", cifra: "1844", unidad: "el año de la idea de separarlo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La superstición de no encender tres cigarrillos con la misma cerilla viene, según se cuenta, de las trincheras, donde la llama sostenida le daba tiempo al francotirador a apuntar; hay quien sostiene que la difundió precisamente aquella industria para vender más cajas. Hoy la cerilla compite con el mechero y con los encendedores eléctricos, y sobrevive sobre todo en los hoteles, en las velas y en las chimeneas. Sigue siendo el objeto más barato que hace exactamente lo que promete, y sigue necesitando su caja, que era la idea entera.",
      },
    ],
  },
];
