import type { Short } from "../shorts";

/* ==========================================================================
   Los venenos.

   Sustancias que matan en dosis pequeñas, y una historia que va de la
   química y de la sospecha. El tema se estropea si se convierte en catálogo
   morboso de asesinatos.

   La regla del tema: se cuenta LA DETECCIÓN. Un veneno solo funciona
   mientras no se puede demostrar, así que la historia real es la de los
   métodos para encontrarlo, con sus fechas y sus juicios. Y se explica
   siempre qué le hace la sustancia al cuerpo, en una frase clara.
   ========================================================================== */

export const VENENOS: Short[] = [
  {
    id: "el-veneno-perfecto",
    titulo: "El veneno sin rastro",
    gancho: "Mataba con síntomas de enfermedad común y no dejaba rastro visible. Se le llamó el polvo de la herencia.",
    categoria: "Venenos",
    color: "var(--slate)",
    encargo: "Un frasco pequeño de cristal oscuro con polvo blanco, sobre madera antigua.",
    fotos: [
      {
        archivo: "Realgar & pararealgar & calcite on marble (Middle Eocene mineralization, 39 Ma; Getchell Mine, northern Osgood Mountains, northern Nevada, USA) 2 (18909791261).jpg",
        autor: "Cristales de rejalgar, un sulfuro de arsénico, sobre calcita blanca. Mina de Getchell, Nevada. Fotografía de James St. John.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Realgar_%26_pararealgar_%26_calcite_on_marble_(Middle_Eocene_mineralization,_39_Ma;_Getchell_Mine,_northern_Osgood_Mountains,_northern_Nevada,_USA)_2_(18909791261).jpg",
        foco: "50% 50%",
        alt: "Cristales rojo oscuro y anaranjados incrustados entre cristales blancos y translúcidos, vistos muy de cerca.",
      },
      {
        archivo: "Orpiment crystals (Twin Creeks Mine, Humboldt County, Nevada, USA) (18720354540).jpg",
        autor: "Cristales de oropimente, el otro mineral de arsénico, de un amarillo muy vivo. Fotografía de James St. John.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Orpiment_crystals_(Twin_Creeks_Mine,_Humboldt_County,_Nevada,_USA)_(18720354540).jpg",
        foco: "50% 50%",
        alt: "Un racimo de cristales amarillo dorado, brillantes y facetados, sobre roca oscura.",
      },
      {
        archivo: "Chemical apparatus. mid 19th C Wellcome M0018217.jpg",
        autor: "Aparatos de química de mediados del siglo XIX: dos retortas y una campana de vidrio. Wellcome Collection.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Chemical_apparatus._mid_19th_C_Wellcome_M0018217.jpg",
        foco: "50% 50%",
        alt: "Dos recipientes de vidrio de cuello largo y curvo junto a una campana transparente, sobre fondo claro.",
      },
      {
        archivo: "Orpiment with arsenic (GeoDIL number - 1232).jpg",
        autor: "Oropimente con arsénico nativo. Colección GeoDIL. Fotografía de Nessa Eull.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Orpiment_with_arsenic_(GeoDIL_number_-_1232).jpg",
        foco: "50% 50%",
        alt: "Una masa mineral amarilla y translúcida pegada a una costra gris metálica.",
      },
    ],
    entrada:
      "Europa, siglos XVII y XVIII. El arsénico se presenta como un polvo blanco, sin olor y sin sabor apreciable, y se vende legalmente en cualquier botica del continente porque es lo que se usa para matar ratas. Ingerido en dosis pequeñas produce vómitos, diarrea y dolor abdominal fuerte, que son exactamente los mismos síntomas de un cólera o de una intoxicación por alimentos en mal estado. Y esas dos cosas mataban entonces a muchísima gente todos los años, de manera que un muerto así no le extrañaba absolutamente a nadie ni hacía falta explicarlo.",
    paginas: [
      {
        rotulo: "Sin rastro",
        texto:
          "Aquella coincidencia de síntomas era la mitad del problema. La otra mitad es que no existía ninguna forma de demostrar la presencia del veneno en un cadáver, así que la única prueba posible era un testigo o una confesión. Los médicos de la época sospechaban a menudo, y sospechar no servía de nada ante un tribunal. En Francia y en Italia se documentaron redes que vendían el polvo a mujeres que querían enviudar, con juicios sonados de por medio. En el habla popular se le acabó llamando el polvo de la herencia, y el nombre lo dice todo.",
        destacado: { tipo: "frase", frase: "Sospechar no servía de nada: no había forma de demostrarlo." },
      },
      {
        rotulo: "La prueba",
        texto:
          "La situación cambió en 1836, cuando un químico inglés publicó un método capaz de detectar cantidades diminutas en un resto orgánico. El procedimiento aprovecha una reacción química sencilla. Si en la muestra hay arsénico, al tratarla se forma un gas. Al calentar ese gas dentro de un tubo, queda un depósito metálico brillante en el vidrio, imposible de confundir con otra cosa. Cuatro años después, aquel ensayo se usó en un juicio famoso en Francia. El propio químico repitió la prueba delante del tribunal, con el público mirando, y la acusada fue condenada.",
        destacado: { tipo: "cifra", cifra: "1836", unidad: "el año del método que lo detectó" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El envenenamiento con arsénico se hundió como método en pocas décadas, no porque la gente se volviera mejor, sino porque dejó de ser indetectable. Quedó una idea que gobierna la medicina legal desde entonces: lo que decide no es la sospecha, sino la prueba reproducible que puede repetirse ante un juez. Y quedó una consecuencia curiosa. El pelo y las uñas van guardando el metal a medida que crecen, así que hoy se analizan restos históricos con esa técnica. Varias leyendas famosas de envenenamiento se han confirmado así, y unas cuantas más se han descartado.",
      },
    ],
  },
  {
    id: "la-dosis-hace-el-veneno",
    titulo: "Todo es veneno",
    gancho: "El agua puede matar y el arsénico se recetaba como medicina. Lo que decide no es la sustancia, sino la dosis.",
    categoria: "Venenos",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una balanza de laboratorio antigua con dos platillos y pesas diminutas.",
    fotos: [
      {
        archivo: "Apothecary's balance with steel beam and brass pans in woode Wellcome L0058880.jpg",
        autor: "Balanza de boticario con platillos de latón y su caja de pesas diminutas. Colección Wellcome, Londres.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AApothecary%27s%20balance%20with%20steel%20beam%20and%20brass%20pans%20in%20woode%20Wellcome%20L0058880.jpg",
        foco: "42% 50%",
        alt: "Balanza de precisión sostenida por una mano, con dos platillos colgando y una caja de madera abierta al lado.",
      },
      {
        archivo: "Apothecary's balance, Europe, 1901-1930 Wellcome L0057866.jpg",
        autor: "Otra balanza de botica europea, de principios del siglo XX.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AApothecary%27s%20balance%2C%20Europe%2C%201901-1930%20Wellcome%20L0057866.jpg",
        foco: "50% 50%",
        alt: "Balanza pequeña de dos platillos sobre un pie de metal, con las pesas alineadas al lado.",
      },
      {
        archivo: "Portrait of Paracelsus. Wellcome L0014988.jpg",
        autor: "Retrato de Paracelso, el médico suizo que dejó escrito que la dosis lo decide todo.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3APortrait%20of%20Paracelsus.%20Wellcome%20L0014988.jpg",
        foco: "50% 40%",
        alt: "Retrato antiguo de un hombre de gesto duro, con gorro y ropa oscura, mirando de frente.",
      },
      {
        archivo: "Blue ridged glass bottle for arsenic, Europe, 1701-1935 Wellcome L0057809.jpg",
        autor: "Frasco azul acanalado para arsénico: el relieve avisaba al tacto de que aquello no se bebía.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ABlue%20ridged%20glass%20bottle%20for%20arsenic%2C%20Europe%2C%201701-1935%20Wellcome%20L0057809.jpg",
        foco: "50% 50%",
        alt: "Botella de vidrio azul oscuro con estrías en relieve y tapón, sobre fondo neutro.",
      },
    ],
    entrada:
      "Suiza, hacia 1538. Un médico y alquimista bastante peleón, que se hacía llamar Paracelso y que se pasó la vida discutiendo con las facultades de medicina, escribe una frase que hoy es el fundamento entero de la toxicología. Viene a decir que todas las cosas son veneno, que no hay ninguna que no lo sea, y que lo único que hace que algo no envenene es la dosis. Dicho así suena a juego de palabras de alquimista, y sin embargo es una descripción exacta de lo que le pasa al cuerpo con cualquier sustancia que se le meta dentro, empezando por el agua.",
    paginas: [
      {
        rotulo: "La curva",
        texto:
          "La idea es que casi ninguna sustancia es buena o mala en sí misma, sino que su efecto cambia con la cantidad. El agua es imprescindible, y beber varios litros seguidos puede diluir las sales del cuerpo hasta provocar la muerte. La vitamina A es necesaria, y en exceso resulta tóxica. Muchos medicamentos matan al doble de la dosis que curan, y por eso las cajas traen esas instrucciones tan insistentes. Por eso los toxicólogos trabajan con curvas que relacionan cantidad y efecto, y no con listas de sustancias buenas y malas.",
        destacado: { tipo: "frase", frase: "Beber demasiada agua de golpe también puede matar." },
      },
      {
        rotulo: "Medicina y veneno",
        texto:
          "Esa lógica explica algo que desconcierta al mirar la historia de la medicina: que durante siglos se recetaran cosas que hoy consideramos veneno puro. El arsénico en dosis mínimas se usó contra la sífilis y otras dolencias. La digital, sacada de una planta muy tóxica, sigue empleándose para el corazón. Y varios fármacos contra el cáncer son sustancias que matan células, con la dosis calculada para que hagan más daño al tumor que al paciente. La diferencia entre curar y envenenar es, en muchos casos, una cuestión de miligramos, de peso corporal y de cálculo cuidadoso.",
        destacado: { tipo: "cifra", cifra: "1538", unidad: "el año de la frase sobre la dosis" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el principio que sostiene toda la regulación sanitaria actual, desde los límites de residuos en los alimentos hasta las normas de calidad del aire. Ninguna de esas normas prohíbe una sustancia por el hecho de existir: lo que fijan es cuánta cantidad se considera aceptable y en qué condiciones. Y quedó un aviso útil para leer noticias, porque titulares del tipo tal alimento contiene una sustancia tóxica no dicen nada por sí solos. La pregunta que hay que hacerse siempre es cuánta cantidad, con qué frecuencia y a partir de qué nivel se ha visto daño.",
      },
    ],
  },
  {
    id: "el-catador-del-rey",
    titulo: "Alguien probaba la comida",
    gancho: "Servía de poco contra los venenos lentos, pero era una señal muy clara para quien estuviera pensándolo.",
    categoria: "Venenos",
    color: "var(--plum)",
    encargo: "Una mesa larga puesta con vajilla antigua y una copa de plata en primer plano.",
    entrada:
      "Cortes europeas y asiáticas, desde la Antigüedad hasta el siglo XIX. Un gobernante come rodeado de gente que podría beneficiarse de su muerte, y su cocina la manejan decenas de personas. De ahí nace un puesto de trabajo peculiar: el catador, que prueba delante de todos cada plato y cada bebida antes de que lleguen a la mesa del rey.",
    paginas: [
      {
        rotulo: "Lo que protegía",
        texto:
          "Contra un veneno rápido y potente, el sistema funcionaba de verdad. Si el catador caía fulminado delante de todos, el plato se retiraba y la comida se acababa ahí. Contra los venenos lentos, en cambio, no servía de nada: una dosis pequeña repetida durante semanas no produce ningún efecto inmediato, y el catador seguía tan campante mientras el rey se iba consumiendo. Su función principal era otra, y bastante eficaz: recordar a todo el que anduviera cerca que envenenar la comida costaría primero la vida de un hombre y desataría una investigación inmediata.",
        destacado: { tipo: "frase", frase: "Contra un veneno lento no servía: el catador seguía tan campante." },
      },
      {
        rotulo: "Otras defensas",
        texto:
          "Alrededor del catador se montó con el tiempo todo un protocolo de seguridad bastante elaborado. Los platos se cubrían con tapas selladas desde la cocina hasta la mesa y la vajilla del rey se guardaba bajo llave. Se usaban además copas de materiales a los que se atribuía la capacidad de detectar venenos, como ciertos cuernos o piedras, sin ninguna base real. También se organizaban las cocinas para que cada persona tocara solo una parte del proceso. Así resultaba muy difícil que alguien manipulara un plato entero sin que otro lo viera hacerlo.",
        destacado: { tipo: "cifra", cifra: "1", unidad: "hombre probaba cada plato antes que el rey" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El oficio desapareció con la química analítica, que permitió comprobar la comida sin sacrificar a nadie, y con unas cocinas de palacio mucho más controladas. Quedó la palabra en varios idiomas y quedó el gesto, repetido en cientos de películas de época. Y quedó la misma lógica, aplicada hoy a otras cosas: los alimentos de un mandatario en viaje oficial se analizan en laboratorio, igual que se revisa un vehículo antes de que lo use. Cambió el método y desapareció el riesgo para quien probaba, pero la desconfianza sigue exactamente donde estaba hace mil años.",
      },
    ],
  },
];
