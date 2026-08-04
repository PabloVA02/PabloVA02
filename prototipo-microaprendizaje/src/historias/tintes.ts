import type { Short } from "../shorts";

/* ==========================================================================
   Los tintes.

   El color de la ropa, que hoy no cuesta nada y durante milenios fue un
   marcador de riqueza brutal. El tema se estropea si se cuenta como moda:
   hay que contarlo como química y como comercio.

   La regla del tema: se dice SIEMPRE DE DÓNDE SALE EL COLOR —un bicho, una
   raíz, un molusco, una fábrica— y cuánto hacía falta para teñir una prenda.
   Esa cifra es la que explica el precio y, con él, quién podía vestirlo.
   ========================================================================== */

export const TINTES: Short[] = [
  {
    id: "el-purpura-de-los-caracoles",
    titulo: "El púrpura salía de un molusco y apestaba",
    gancho: "Hacían falta miles de caracoles marinos para teñir una sola prenda, y las fábricas olían tan mal que iban fuera de la ciudad.",
    categoria: "Tintes",
    color: "var(--plum)",
    encargo: "Una tela violeta oscura junto a varias conchas marinas rotas.",
    entrada:
      "Mediterráneo oriental, desde el siglo XV antes de Cristo. Las ciudades fenicias de la costa producen un tinte que no existe en ninguna otra parte: un violeta intenso que no destiñe con el sol ni con el lavado, sino que incluso mejora. Sale de una glándula de unos caracoles marinos, y para conseguir unos pocos gramos hay que sacrificar miles de animales.",
    paginas: [
      {
        rotulo: "El proceso",
        texto:
          "Los moluscos se recogían con nasas cebadas, se rompían para extraerles una glándula pequeña y esa masa se dejaba fermentar en tinas durante días, con sal y a la intemperie. El líquido resultante es incoloro al principio y solo se vuelve púrpura al darle el aire y la luz, lo que permitía sumergir la tela y verla cambiar de color al sacarla. El olor de aquellas tinas era insoportable y se notaba a kilómetros, así que los talleres se instalaban siempre a las afueras y a favor del viento dominante.",
        destacado: { tipo: "frase", frase: "El líquido sale incoloro y se vuelve púrpura con el aire." },
      },
      {
        rotulo: "El precio",
        texto:
          "Las cuentas explican el resto de la historia. Se calcula que hacían falta del orden de diez mil caracoles para obtener un gramo de tinte, y un manto necesitaba bastante más de un gramo. En el Imperio romano, un kilo de lana teñida de púrpura llegó a costar el equivalente a varios años de salario de un obrero. Por eso el color acabó convertido en un privilegio legal. Hubo emperadores que prohibieron llevarlo a quien no perteneciera a la familia imperial, y la pena por incumplirlo podía ser la muerte.",
        destacado: { tipo: "cifra", cifra: "10.000", unidad: "caracoles por gramo de tinte" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó la asociación entre el púrpura y el poder, que sigue viva en las togas de algunas magistraturas y en la ropa de ciertos cargos eclesiásticos. Quedó también la expresión de nacer en la púrpura, que se sigue usando para decir que alguien nació en una familia poderosa. El tinte auténtico desapareció con la caída de las ciudades que lo fabricaban y durante siglos nadie supo reproducirlo. Hoy se ha recuperado el método en unos pocos talleres artesanales, y sigue costando una fortuna exactamente por las mismas razones que hace tres mil años.",
      },
    ],
  },
  {
    id: "el-color-que-invento-un-estudiante",
    titulo: "El primer tinte artificial salió de un error",
    gancho: "Un estudiante de dieciocho años buscaba un medicamento contra la malaria y le salió una mancha violeta.",
    categoria: "Tintes",
    color: "var(--ochre)",
    encargo: "Un matraz con un líquido violeta intenso sobre un banco de laboratorio antiguo.",
    entrada:
      "Londres, 1856. Un estudiante de química de dieciocho años intenta fabricar quinina, el único remedio conocido contra la malaria. Se sacaba de la corteza de un árbol sudamericano y hacía falta a toneladas para las colonias europeas. Trabaja con derivados del alquitrán de hulla, un residuo negro y pegajoso de las fábricas de gas, y lo que obtiene no se parece nada a lo que buscaba.",
    paginas: [
      {
        rotulo: "La mancha",
        texto:
          "El experimento le dejó en el matraz un sólido oscuro que, al limpiarlo con alcohol, tiñó el líquido de un violeta intenso. En lugar de tirarlo, probó a mojar un trozo de seda y comprobó que el color se agarraba y aguantaba los lavados. Aquello era importante porque casi todos los tintes de la época venían de plantas y de insectos, con producciones limitadas y precios altos. Pidió una patente ese mismo año, dejó los estudios y montó una fábrica con dinero de su familia, que confió en él contra la opinión de sus profesores.",
        destacado: { tipo: "frase", frase: "Buscaba un medicamento y encontró un color que no destiñe." },
      },
      {
        rotulo: "La moda",
        texto:
          "El negocio despegó por una casualidad social, no por la química. La emperatriz francesa decidió que aquel tono favorecía sus ojos, y poco después la reina británica apareció con un vestido del mismo color en una boda muy fotografiada. El violeta se puso de moda en toda Europa y las fábricas no daban abasto. Detrás llegó la avalancha. En pocos años, los químicos alemanes sacaron cientos de colores nuevos del mismo alquitrán, más baratos y más vivos que los naturales. Sobre esa industria de colorantes se construyeron después sus grandes empresas químicas y farmacéuticas.",
        destacado: { tipo: "cifra", cifra: "18", unidad: "años tenía el estudiante" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el nacimiento de la química industrial moderna, que empezó con colorantes y siguió con medicamentos, explosivos y fertilizantes fabricados a partir del mismo tipo de moléculas. Quedaron arruinados, en apenas unas décadas, los cultivos que abastecían los tintes naturales, sobre todo el añil de la India y la rubia que se cultivaba en Europa. Y quedó una consecuencia que nadie previó. La ropa de color dejó de ser cara y pasó a estar al alcance de cualquiera, lo que cambió el aspecto de las calles en una sola generación.",
      },
    ],
  },
  {
    id: "el-agua-de-los-tintes",
    titulo: "Teñir ropa es de lo que más agua ensucia",
    gancho: "Una parte enorme de la contaminación de los ríos textiles viene del baño de color, no de la fábrica de tela.",
    categoria: "Tintes",
    color: "var(--slate)",
    encargo: "Un canal de agua teñida de color junto a una nave industrial.",
    entrada:
      "Zonas textiles de Asia y de otros continentes, desde finales del siglo XX. Teñir no es pintar: la prenda se sumerge en un baño de agua caliente con el colorante disuelto y varias sustancias que ayudan a fijarlo. Buena parte de esos productos no llega a agarrarse a la fibra y termina en el agua sobrante, que hay que tratar antes de devolverla al río si es que alguien la trata.",
    paginas: [
      {
        rotulo: "Lo que sobra",
        texto:
          "Según el tipo de colorante, entre el diez y el cincuenta por ciento no llega a fijarse en la tela. Ese resto sale con el agua del baño junto a sales, sosa y otros aditivos, y da lugar a vertidos de colores llamativos que se ven desde el aire. El problema no es solo estético. Ese agua lleva una carga química que consume el oxígeno del río y deja sin respirar a los peces. Además el color impide que la luz llegue al fondo, con lo que las plantas acuáticas dejan de crecer.",
        destacado: { tipo: "cifra", cifra: "50", unidad: "por ciento del tinte puede no fijarse" },
      },
      {
        rotulo: "Cómo se arregla",
        texto:
          "Las soluciones existen y son conocidas, pero cuestan dinero. Una depuradora textil trata el agua con procesos físicos, químicos y biológicos antes de soltarla, y en las plantas mejores se recircula buena parte del baño. Han aparecido además métodos que reducen mucho el consumo, como los baños cortos o el teñido con dióxido de carbono a presión, que prescinde del agua casi por completo. Lo que decide cuál de esas soluciones se aplica no es la técnica disponible, sino la regulación del país donde está la fábrica y la exigencia de la marca que compra el género.",
        destacado: { tipo: "frase", frase: "La técnica existe: lo que decide es quién obliga a usarla." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un contraste que resume la historia entera de los tintes. Durante milenios el color fue tan caro que había leyes para reservarlo a unos pocos, y hoy es tan barato que su coste real lo pagan los ríos de los sitios donde se tiñe. Quedaron también certificaciones y auditorías que intentan controlarlo, con resultados muy desiguales según el país y la marca. Y quedó un dato para cualquier comprador: el color de una camiseta barata es lo más contaminante que lleva, bastante más que el algodón con el que está hecha.",
      },
    ],
  },
];
