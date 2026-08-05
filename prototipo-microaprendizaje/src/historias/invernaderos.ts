import type { Short } from "../shorts";

/* ==========================================================================
   Los invernaderos.

   Cultivar dentro de una caja de cristal o de plástico, que parece un asunto
   de jardinería y es una de las transformaciones agrícolas más grandes del
   siglo XX. El tema se estropea si se cuenta con datos de producción.

   La regla del tema: se explica QUÉ HACE EL TECHO —dejar entrar la luz y no
   dejar salir el calor— y qué problema nuevo crea cada solución. Y siempre
   se dice quién trabaja dentro, porque un invernadero es sobre todo un sitio
   donde hay gente trabajando a cuarenta grados.
   ========================================================================== */

export const INVERNADEROS: Short[] = [
  {
    id: "por-que-calienta-el-cristal",
    titulo: "No es el efecto invernadero",
    gancho: "No es por el efecto invernadero de la atmósfera, aunque se llame igual. Es mucho más simple: el aire caliente no puede escaparse.",
    categoria: "Invernaderos",
    color: "var(--ochre)",
    curioso: true,
    encargo: "El interior de un invernadero de cristal con gotas de condensación en el techo.",
    entrada:
      "Cualquier huerto cubierto, con una explicación que se aclaró definitivamente en un experimento publicado en 1909. La idea intuitiva es que el cristal atrapa la radiación del sol como hace la atmósfera con los gases de efecto invernadero, y esa comparación se repite en muchos libros. Un físico americano decidió comprobarlo con dos cajas iguales, una con techo de cristal y otra con techo de sal.",
    paginas: [
      {
        rotulo: "El experimento",
        texto:
          "La sal gema tiene una propiedad muy útil para esta prueba. Deja pasar tanto la luz visible como la radiación de calor que devuelve el suelo caliente, mientras que el cristal bloquea buena parte de esa segunda. Si la explicación clásica fuera la principal, la caja de cristal debería calentarse mucho más que la de sal. El resultado fue que las dos alcanzaron temperaturas muy parecidas, lo que demostraba que ese efecto existe pero es secundario. Lo que de verdad calienta un invernadero es otra cosa mucho más doméstica y mucho más fácil de entender.",
        destacado: { tipo: "frase", frase: "Las dos cajas se calentaron casi igual, y eso lo cambió todo." },
      },
      {
        rotulo: "El aire quieto",
        texto:
          "Lo decisivo es que el techo impide que el aire caliente se vaya. En un campo abierto, el suelo calentado por el sol templa el aire que tiene encima. Ese aire sube porque pesa menos y se lo lleva el viento, así que el calor se disipa continuamente. Dentro de un invernadero ese aire se queda encerrado, no puede subir más allá del techo y va acumulando temperatura. Por eso, abrir unas ventanas en lo alto baja los grados de inmediato: el aire caliente encuentra por fin una salida y arrastra el calor consigo.",
        destacado: { tipo: "cifra", cifra: "1909", unidad: "el año del experimento de las dos cajas" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un nombre confuso que sigue usándose en todas partes. El efecto invernadero de la atmósfera funciona sobre todo por el mecanismo que en un invernadero de verdad resulta ser el secundario. Los libros de física llevan un siglo aclarando la diferencia, y la comparación se sigue repitiendo igual en las noticias y en las aulas. Quedó también algo que cualquiera puede comprobar en verano dentro de un coche aparcado al sol. El problema no es que el cristal atrape rayos misteriosos, sino que ese aire recalentado no tiene por dónde salir.",
      },
    ],
  },
  {
    id: "el-mar-de-plastico",
    titulo: "El mar de plástico",
    gancho: "Treinta mil hectáreas de invernaderos seguidos en una comarca que hace setenta años era la más pobre de España.",
    categoria: "Invernaderos",
    color: "var(--slate)",
    encargo: "Una extensión enorme de techos blancos de plástico vista desde una ladera.",
    entrada:
      "Almería, sureste de España, desde 1963. Es una comarca seca, con poca tierra buena y una emigración constante hacia Cataluña y hacia Europa. Ese año, un instituto público empieza a ensayar allí un sistema de cultivo bajo plástico con arena sobre el suelo. En cincuenta años, aquello se convierte en la mayor concentración de invernaderos del mundo.",
    paginas: [
      {
        rotulo: "La arena",
        texto:
          "La técnica que lo hizo posible se llama enarenado y es de una sencillez engañosa. Sobre el suelo original se extiende una capa de estiércol y encima otra de arena de playa de unos diez centímetros. La arena deja pasar el agua de riego, pero corta la evaporación desde abajo. Así el suelo conserva la humedad mucho más tiempo y las sales no suben a la superficie a estropear la cosecha. Con ese apaño, terrenos que se consideraban imposibles pasaron a dar dos o tres cosechas al año de tomate, pimiento, pepino y calabacín.",
        destacado: { tipo: "cifra", cifra: "30.000", unidad: "hectáreas cubiertas de plástico" },
      },
      {
        rotulo: "Lo que trajo",
        texto:
          "El efecto económico fue enorme y, cosa poco frecuente, bastante repartido. Las explotaciones eran pequeñas y familiares, de una o dos hectáreas, y las cooperativas se encargaron de vender y de negociar precios. La comarca pasó de ser de las más pobres del país a tener una de las rentas agrarias más altas, y el flujo migratorio se invirtió. Con ello llegaron también los problemas. La sobreexplotación del acuífero, los residuos de plástico y la dependencia de miles de temporeros inmigrantes, cuyas condiciones de alojamiento se han denunciado muchas veces.",
        destacado: { tipo: "frase", frase: "La comarca pasó de expulsar gente a necesitar mano de obra de fuera." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una comarca que abastece de verdura fresca a media Europa en invierno y que ha desarrollado técnicas punteras. La más llamativa es el control biológico de plagas: en lugar de fumigar, se sueltan insectos que se comen a los que atacan al cultivo, y hoy se aplica en casi toda la superficie cubierta. Quedó también un efecto climático medido y curioso. Tanto plástico blanco refleja luz hacia el espacio, y las estaciones meteorológicas de la zona registran un ligero enfriamiento local mientras el resto del país se calienta año tras año.",
      },
    ],
  },
  {
    id: "cultivar-sin-tierra",
    titulo: "Cultivar sin tierra",
    gancho: "Las raíces cuelgan en una solución con los minerales justos. La planta no echa de menos el suelo.",
    categoria: "Invernaderos",
    color: "var(--plum)",
    encargo: "Hileras de plantas en canaletas blancas con las raíces a la vista.",
    entrada:
      "California, 1937. Un investigador universitario publica un método para cultivar plantas con las raíces sumergidas en una disolución de sales minerales, sin nada de suelo. Le pone un nombre formado por dos palabras griegas que significan trabajo con agua. La idea no era nueva del todo, porque desde el siglo XIX se sabía que las plantas absorben elementos disueltos y no tierra.",
    paginas: [
      {
        rotulo: "Qué come una planta",
        texto:
          "El suelo cumple tres funciones para una planta: la sujeta, le guarda agua y le suministra minerales. Ninguna de las tres exige que haya tierra, y si se aportan por otro medio, la planta crece igual o mejor. En un cultivo hidropónico, la sujeción la da un soporte inerte como la fibra de coco o la lana de roca. El agua circula llevando disueltos los nutrientes en proporciones medidas al miligramo. El agricultor controla así, con precisión de laboratorio, cuánto recibe cada planta, en qué momento del día y en qué fase de su crecimiento.",
        destacado: { tipo: "frase", frase: "El suelo solo sujeta, guarda agua y aporta minerales." },
      },
      {
        rotulo: "Ventajas y peros",
        texto:
          "La ventaja más citada es el agua, porque en un sistema cerrado se recircula y se gasta una fracción de lo que consume el mismo cultivo en campo abierto. También desaparecen las enfermedades que viven en el suelo, y se puede cultivar en sitios sin nada de tierra fértil, incluidos tejados, sótanos y naves industriales. Los inconvenientes son igual de claros y conviene decirlos. Hace falta energía para bombear y para iluminar si no hay sol, el equipo cuesta dinero y un fallo eléctrico de unas horas puede matar la cosecha entera.",
        destacado: { tipo: "cifra", cifra: "10", unidad: "veces menos agua que en campo abierto" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una técnica hoy normal en los invernaderos de medio mundo, sobre todo en el norte de Europa, donde una parte enorme del tomate y del pimiento que se vende se produce exactamente así. Quedaron también las llamadas granjas verticales, que apilan bandejas de cultivo iluminadas con luces de bajo consumo dentro de naves cerradas, sin una sola ventana. Los resultados son desiguales. Funcionan bien con hoja verde y con hierbas aromáticas, que se venden caras y pesan poco, y no salen a cuenta con cereales, donde el sol gratis del campo es imbatible.",
      },
    ],
  },
];
