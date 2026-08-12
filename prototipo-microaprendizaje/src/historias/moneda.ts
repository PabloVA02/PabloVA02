import type { Short } from "../shorts";

/* ==========================================================================
   Monedas.

   El riesgo del tema es la numismática: cecas, leyendas, catálogos de
   variantes. Interesa a quien colecciona y a nadie más.

   La regla del tema: una moneda se cuenta por CÓMO SE HACE TRAMPA CON
   ELLA. Aleaciones que nadie puede comprobar a ojo, bordes que se liman,
   piezas que cuestan más de lo que valen. Cada detalle del diseño —el
   canto, el peso, la marca— está ahí porque alguien intentó engañar antes.

   Y el valor se traduce siempre a algo: un jornal, una compra, un metal.
   ========================================================================== */

export const MONEDA: Short[] = [
  {
    id: "primera-moneda",
    titulo: "Las monedas engañaban",
    gancho: "Un metal natural con oro y plata mezclados en proporción variable, imposible de juzgar a ojo.",
    categoria: "Monedas",
    color: "var(--ochre)",
    encargo: "Unas pepitas de metal aplastadas con un sello marcado a golpe.",
    fotos: [
      {
        archivo: "Athens - 454-404 BC - silver tetradrachm - head of Athena - owl - München SMS.jpg",
        autor: "Tetradracma de plata de Atenas con la cabeza de Atenea, acuñado entre el 454 y el 404 antes de Cristo. Colección de Múnich. Fotografía de ArchaiOptix.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Athens_-_454-404_BC_-_silver_tetradrachm_-_head_of_Athena_-_owl_-_M%C3%BCnchen_SMS.jpg",
        foco: "50% 50%",
        alt: "Una moneda gruesa de plata oscurecida con un perfil femenino con casco, golpeado en relieve.",
      },
      {
        archivo: "Gold fluvial pebbles (placer gold) (Washington State, USA) 3 (16846570129).jpg",
        autor: "Pepitas de oro de aluvión recogidas en un río, como las que arrastraban los ríos de Lidia. Fotografía de James St. John.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Gold_fluvial_pebbles_(placer_gold)_(Washington_State,_USA)_3_(16846570129).jpg",
        foco: "50% 50%",
        alt: "Varias pepitas de oro pequeñas, irregulares y muy brillantes, sobre una superficie oscura.",
      },
      {
        archivo: "Athens - 510-500 BC - silver tetradrachm - head of Athena - owl - München SMS.jpg",
        autor: "Un tetradracma ateniense algo anterior, de hacia el año 500 antes de Cristo. Fotografía de ArchaiOptix.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Athens_-_510-500_BC_-_silver_tetradrachm_-_head_of_Athena_-_owl_-_M%C3%BCnchen_SMS.jpg",
        foco: "50% 50%",
        alt: "Una moneda de plata con el cuño desplazado hacia un lado y el relieve gastado por el uso.",
      },
      {
        archivo: "Izmir Archaeology museum Greek coins 5810.jpg",
        autor: "Monedas griegas expuestas en el Museo Arqueológico de Esmirna, en la misma región donde se acuñaron las primeras. Fotografía de Dosseman.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Izmir_Archaeology_museum_Greek_coins_5810.jpg",
        foco: "50% 50%",
        alt: "Un conjunto de monedas antiguas de distintos tamaños colocadas en filas dentro de una vitrina.",
      },
    ],
    entrada:
      "Lidia, en la actual Turquía, siglo VII antes de Cristo. Aparecen las primeras monedas acuñadas del mundo, y no son de oro ni de plata sino de electro: una aleación natural de las dos que se recoge en pepitas de los ríos de la zona, se aplasta a golpe de martillo y se marca con un sello oficial. El sello garantiza que la pieza pesa lo que dice pesar, y eso ya es un avance enorme frente a pesar cada pago. El problema, y no es pequeño, es que no garantiza de qué está hecha.",
    paginas: [
      {
        rotulo: "El engaño natural",
        texto:
          "El electro que sale del río no tiene una proporción fija: puede llevar desde un treinta hasta un setenta por ciento de oro, y la diferencia de valor entre esos dos extremos es enorme. A ojo resultan indistinguibles, porque el color apenas cambia con la mezcla. Eso significaba que quien pagaba podía estar entregando la mitad de lo que parecía, y que el rey podía hacer exactamente lo mismo desde su taller sin que nadie lo notara. La moneda resolvía el problema del peso y abría uno nuevo, así que la desconfianza limitaba su uso.",
        destacado: { tipo: "frase", frase: "Dos monedas iguales podían valer el doble una que otra." },
      },
      {
        rotulo: "La separación",
        texto:
          "La solución llegó un siglo después y fue química. Se descubrió cómo separar el oro de la plata calentando la aleación con sal común dentro de un recipiente poroso: la plata reacciona y se marcha con los vapores o se absorbe en las paredes, y queda oro casi puro en el fondo. En unas excavaciones de la capital de aquel reino aparecieron los talleres donde se hacía, con hornos, crisoles y restos de sal. A partir de ahí se pudieron acuñar dos monedas distintas, una de oro y otra de plata, cada una con su valor estable.",
        destacado: { tipo: "cifra", cifra: "1", unidad: "siglo tardaron en separar los metales" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Con eso quedó fijado el modelo que ha durado hasta anteayer: piezas de metal con un peso garantizado, una pureza garantizada y una marca oficial que responde de las dos cosas a la vez. La idea se copió en Grecia en pocas décadas y desde allí se extendió por todo el Mediterráneo. El rey de aquel reino, famoso por su riqueza, dio nombre a una expresión que todavía se usa para decir que alguien tiene muchísimo dinero. Y la desconfianza inicial no era paranoia: manipular la aleación siguió siendo el fraude más común durante dos mil años.",
      },
    ],
  },

  {
    id: "canto-estriado",
    titulo: "Las rayas del canto avisan",
    gancho: "Se rebañaba plata del borde y se seguía gastando. Con rayas en el canto, el recorte se ve.",
    categoria: "Monedas",
    color: "var(--slate)",
    encargo: "El canto estriado de una moneda visto muy de cerca, en diagonal.",
    entrada:
      "Inglaterra, 1696. El país tiene un problema monetario grave: las monedas de plata en circulación pesan bastante menos de lo que deberían, porque durante décadas la gente les ha ido rebañando el borde con una lima y guardándose las virutas. Se calcula que la mitad del peso de la plata circulante ha desaparecido de esa manera.",
    paginas: [
      {
        rotulo: "La lima",
        texto:
          "Recortar era fácil porque las monedas se hacían a martillo, con el metal aplastado entre dos cuños, y salían de forma irregular y sin un borde bien definido. Nadie podía saber si a una pieza le faltaba un poco o si había nacido así de fea. La consecuencia era que el comercio se hacía pesando y no contando, y que nadie aceptaba una moneda sin sopesarla antes; los precios subían y las monedas buenas desaparecían de la circulación, porque la gente las guardaba y pagaba con las peores, que es lo que siempre ocurre.",
        destacado: { tipo: "frase", frase: "Se pagaba con las malas y se guardaban las buenas." },
      },
      {
        rotulo: "La reacuñación",
        texto:
          "El Parlamento decidió retirar toda la plata del país y volver a acuñarla, esta vez con prensa mecánica, con el borde perfectamente circular y con unas estrías grabadas en el canto: si alguien lima el borde, las estrías desaparecen y el recorte queda a la vista de cualquiera. Al frente de la operación pusieron a un matemático de cincuenta y tres años que acababa de dejar la universidad y que resultó ser un administrador implacable; también persiguió en persona a los falsificadores por las tabernas, con varios llevados a la horca.",
        destacado: { tipo: "cifra", cifra: "1696", unidad: "la reacuñación de toda la plata" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El canto estriado sigue en las monedas de hoy aunque ya no lleven metal precioso y recortarlas no tenga ningún sentido. Sobrevive por dos motivos prácticos: distinguir al tacto monedas de tamaño parecido, algo importante para quien no ve, y dificultar la falsificación, porque el estriado exige maquinaria que un aficionado no tiene. Basta mirar un puñado de monedas para comprobarlo: unas tienen el canto liso, otras estriado y alguna lleva letras grabadas alrededor. Cada uno de esos acabados es una decisión heredada de una época en la que el borde de una moneda valía dinero de verdad.",
      },
    ],
  },

  {
    id: "moneda-que-cuesta-mas",
    titulo: "Un céntimo que cuesta dos",
    gancho: "Fabricar un céntimo puede costar dos. Varios países los han retirado y redondean el total.",
    categoria: "Monedas",
    color: "var(--clay)",
    curioso: true,
    encargo: "Un montón de monedas pequeñas de cobre amontonadas en un platillo.",
    entrada:
      "Canadá, 2012. El gobierno anuncia que deja de fabricar la moneda de un centavo y que la irá retirando de la circulación. El motivo es puramente aritmético: fabricar cada pieza cuesta más de lo que la pieza vale, contando el metal, la acuñación y el transporte. Varios países han hecho lo mismo antes y bastantes lo han hecho después.",
    paginas: [
      {
        rotulo: "La cuenta",
        texto:
          "El coste de una moneda tiene tres partes: el metal, que sube y baja con el mercado; la fabricación, que es prácticamente igual para una pieza de un céntimo que para una de dos euros; y la logística, es decir, contarlas, empaquetarlas, transportarlas en furgones blindados y repartirlas por los bancos. Cuando el valor nominal es muy bajo, la suma de esas tres partes se lo come entero. Además, las monedas pequeñas no circulan: se quedan en cajones y en huchas, así que hay que fabricar más cada año para reponer las que desaparecen.",
        destacado: { tipo: "frase", frase: "No circulan: se quedan en cajones y hay que reponerlas." },
      },
      {
        rotulo: "El redondeo",
        texto:
          "El procedimiento para retirarlas está bien estudiado y es siempre el mismo: se deja de acuñarlas, se siguen aceptando indefinidamente en los bancos y se redondea el total de cada compra en efectivo, hacia arriba o hacia abajo según el múltiplo más cercano. Los pagos con tarjeta se cobran al céntimo exacto, sin ningún cambio. Los estudios hechos después en varios países no encuentran efecto apreciable en los precios, porque el redondeo se compensa: unas veces sale a favor del cliente y otras del comercio, y la media queda en cero.",
        destacado: { tipo: "cifra", cifra: "2", unidad: "céntimos costaba fabricar uno" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "En la eurozona, varios países han dejado de usar las piezas de uno y dos céntimos con ese mismo sistema de redondeo, aunque siguen siendo moneda de curso legal en toda la unión y quien las tenga puede gastarlas sin problema. La discusión se repite cada pocos años en los demás, con dos argumentos enfrentados: el ahorro público frente al miedo a que los comercios redondeen siempre hacia arriba, algo que los datos no respaldan. Y hay un detalle curioso: en algún país la moneda más pequeña sobrevive por presión de la industria del metal.",
      },
    ],
  },
];
