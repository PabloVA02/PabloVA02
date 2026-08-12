import type { Short } from "../shorts";

/* ==========================================================================
   El arado.

   La herramienta que ha dado de comer al mundo y que casi nunca aparece en
   una lista de grandes inventos. El tema se pierde si se convierte en un
   catálogo de piezas: reja, vertedera, timón.

   La regla del tema: el arado se cuenta por lo que MUEVE. Mueve tierra, sí,
   pero también mueve fronteras agrícolas, mueve poblaciones y —según una
   investigación reciente— movió el reparto del trabajo entre hombres y
   mujeres. Cada short empieza en el metal y termina en la sociedad.
   ========================================================================== */

export const ARADO: Short[] = [
  {
    id: "el-arado-pesado",
    titulo: "El arado que abrió el norte",
    gancho: "Las tierras húmedas y pesadas del norte eran inservibles hasta que apareció una cuchilla que las volteaba.",
    categoria: "Arado",
    color: "var(--slate)",
    encargo: "Un arado de madera con reja de hierro tirado por bueyes en un campo embarrado.",
    fotos: [
      {
        archivo: "BLW Stained Glass Panel - Labours of the Months (October).jpg",
        autor: "Los trabajos de octubre, deshacer terrones y sembrar el trigo. Vidriera inglesa de entre 1450 y 1475, procedente de Cassiobury Park. Fotografía de David Jackson.",
        licencia: "CC BY-SA 2.0 uk",
        fuente: "https://commons.wikimedia.org/wiki/File:BLW_Stained_Glass_Panel_-_Labours_of_the_Months_(October).jpg",
        foco: "50% 50%",
        alt: "Un medallón de vidriera en amarillos y blancos con un caballo, una grada de madera y dos campesinos sembrando.",
      },
      {
        archivo: "Ploughing in Wood Walton Fen - geograph.org.uk - 1707063.jpg",
        autor: "Un arado de seis vertederas volteando tierra de turba en los fens de Cambridgeshire. Fotografía de Michael Trolove.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Ploughing_in_Wood_Walton_Fen_-_geograph.org.uk_-_1707063.jpg",
        foco: "50% 55%",
        alt: "Un tractor arrastrando un arado que va dando la vuelta a franjas de tierra negra y brillante.",
      },
      {
        archivo: "Photo Plow pulled by oxs 1940 - Touring Club Italiano 1.2732.jpg",
        autor: "Arado tirado por bueyes, fotografiado en Italia en 1940. Archivo del Touring Club Italiano.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Photo_Plow_pulled_by_oxs_1940_-_Touring_Club_Italiano_1.2732.jpg",
        foco: "50% 50%",
        alt: "Una yunta de bueyes uncida a un arado avanzando por un campo, en una fotografía en blanco y negro.",
      },
      {
        archivo: "Juignac 16 Labours-octobre 2011.jpg",
        autor: "Campos recién arados en las lomas de la Charente, en octubre. Fotografía de JLPC.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Juignac_16_Labours-octobre_2011.jpg",
        foco: "50% 50%",
        alt: "Un paisaje ondulado de campos labrados en franjas pardas y ocres, con hileras de árboles al fondo.",
      },
    ],
    entrada:
      "Europa, siglos VI a XI. El arado que se usa en el sur, heredado de Roma, es poco más que un palo reforzado con hierro que abre un surco superficial y no llega a dar la vuelta a la tierra. En los suelos ligeros y secos del Mediterráneo cumple de sobra y nadie echa nada en falta. En las llanuras del norte, en cambio, con tierras arcillosas, profundas y encharcadas media parte del año, apenas araña la superficie. Por eso vastas extensiones de tierra buenísima siguen sin cultivar, cubiertas de bosque y de pasto, durante siglos.",
    paginas: [
      {
        rotulo: "Voltear",
        texto:
          "El arado pesado que se extiende por el norte incorpora tres piezas nuevas. Una cuchilla vertical que corta la tierra por delante, una reja horizontal que la separa por debajo y, sobre todo, una tabla curva llamada vertedera que levanta el bloque cortado y lo voltea. Al voltearlo ocurren varias cosas a la vez: las malas hierbas quedan enterradas y se pudren, la tierra se airea y, lo más importante en el norte, el surco y el caballón que se forman drenan el agua sobrante hacia los lados, que era exactamente el problema.",
        destacado: { tipo: "frase", frase: "Voltear la tierra enterraba las hierbas y sacaba el agua." },
      },
      {
        rotulo: "Ocho bueyes",
        texto:
          "El precio fue el esfuerzo. Un arado así pesa mucho y agarra hondo, así que hacían falta hasta ocho bueyes para tirar de él, más de los que tenía ningún campesino solo. Eso obligó a poner en común los animales de varias familias y a arar juntos, y como girar semejante tren es lentísimo, convino hacer surcos larguísimos: de ahí vienen las parcelas alargadas y estrechas que todavía se ven desde el aire en media Europa. La herramienta acabó dando forma al pueblo, porque exigía organizarse por fuerza: quién ponía los bueyes, quién guiaba y en qué orden se araban las parcelas de cada vecino.",
        destacado: { tipo: "cifra", cifra: "8", unidad: "bueyes hacían falta para tirar de él" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un desplazamiento del centro de gravedad de Europa. Las llanuras del norte, hasta entonces marginales, se convirtieron en las tierras más productivas del continente, la población creció, se roturaron bosques enteros y se fundaron miles de aldeas nuevas entre los siglos X y XIII. Quedaron también las parcelas alargadas, los caminos que las bordean y los repartos comunales de tierra, que sobrevivieron a los bueyes muchos siglos. Todo eso salió de añadir a un palo con punta una tabla curva capaz de dar la vuelta a un bloque de barro.",
      },
    ],
  },
  {
    id: "el-arado-de-acero",
    titulo: "La tierra que se pegaba",
    gancho: "En las praderas americanas había que parar cada pocos metros a rascar el barro. Un herrero probó con acero pulido.",
    categoria: "Arado",
    color: "var(--ochre)",
    encargo: "Una hoja de arado de acero brillante apoyada en un banco de herrero.",
    fotos: [
      {
        archivo: "Vintage smith's workshop - 0172.jpg",
        autor: "Herrero forjando una barra al rojo sobre el yunque, en un taller tradicional alemán.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AVintage%20smith%27s%20workshop%20-%200172.jpg",
        foco: "55% 58%",
        alt: "Manos de un herrero golpeando con el mazo un hierro incandescente apoyado en un yunque, con chispas saltando.",
      },
      {
        archivo: "Vintage smith's workshop - 0158.jpg",
        autor: "Taller de herrero conservado con sus herramientas, en Alemania.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AVintage%20smith%27s%20workshop%20-%200158.jpg",
        foco: "50% 50%",
        alt: "Banco de trabajo de una herrería con tenazas, martillos y piezas de hierro colgadas en la pared.",
      },
      {
        archivo: "Surrey County Ploughing Match 2009 (5) - geograph.org.uk - 1513372.jpg",
        autor: "Concurso de arada en el condado de Surrey, con los surcos recién abiertos.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ASurrey%20County%20Ploughing%20Match%202009%20(5)%20-%20geograph.org.uk%20-%201513372.jpg",
        foco: "50% 50%",
        alt: "Tractor arrastrando un arado por un campo, dejando detrás surcos paralelos de tierra volteada.",
      },
      {
        archivo: "Dust storm approaching Stratford, Texas.jpg",
        autor: "Tormenta de polvo acercándose a Stratford, en Texas, en 1935.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File%3ADust%20storm%20approaching%20Stratford%2C%20Texas.jpg",
        foco: "50% 50%",
        alt: "Muro enorme de polvo avanzando sobre unas casas bajas de una llanura, tapando el cielo entero.",
      },
    ],
    entrada:
      "Praderas de Norteamérica, 1837. Los colonos llegados del este se encuentran con una tierra negra, grasa y fértil como no habían visto nunca en su vida, y con un problema que no esperaba nadie: esa tierra se pega al arado. Los arados de hierro fundido que traen consigo van acumulando barro en la hoja hasta convertirla en un bloque informe que ya no corta nada, y hay que parar cada pocos metros a rascarla con una paleta de madera. Arar una hectárea puede llevar el día entero, y la mayor parte de ese día se va en limpiar.",
    paginas: [
      {
        rotulo: "La sierra vieja",
        texto:
          "Un herrero de un pueblo pequeño le dio la vuelta al problema. Se fijó en que la tierra no se pegaba a las herramientas pulidas y brillantes, y en su taller tenía una hoja rota de una sierra de aserradero, de acero fino y muy liso. Con ella construyó una vertedera curva, sin rebordes ni tornillos salientes, con una superficie tan pulida que el barro resbalaba en lugar de agarrarse. El arado avanzaba solo, sin paradas, y además la propia tierra al deslizarse mantenía la hoja limpia y brillante durante toda la jornada.",
        destacado: { tipo: "frase", frase: "La tierra que resbala va puliendo sola la hoja." },
      },
      {
        rotulo: "Diez al año",
        texto:
          "El primer año fabricó tres, al siguiente diez y en 1842 unos cien. En 1855 vendía más de diez mil arados al año y había montado una fábrica con su propia fundición, porque el acero de calidad había que importarlo de Inglaterra y era caro. La empresa que fundó sigue existiendo hoy y es una de las mayores del mundo en maquinaria agrícola. El arado de acero permitió roturar en pocas décadas las praderas centrales del continente, un mar de hierba que llevaba milenios intacto y que ningún apero anterior había conseguido levantar. Los colonos lo llamaron el arado que canta, por el silbido que hacía la tierra al deslizarse sobre el acero.",
        destacado: { tipo: "cifra", cifra: "10.000", unidad: "arados al año en 1855" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el granero más productivo del planeta y quedó también la factura. Aquella hierba de raíces profundísimas era lo que sujetaba el suelo, y cuando se aró todo y llegaron unos años secos, el viento se llevó la tierra en tormentas de polvo que oscurecieron el cielo a mil kilómetros. La lección se aprendió tarde y hoy se traduce en técnicas que aran menos o no aran nada. El arado que resolvió el problema del barro pegado resultó ser, medio siglo después, el que había dejado el suelo suelto y sin nada que lo sujetara.",
      },
    ],
  },
  {
    id: "la-hipotesis-del-arado",
    titulo: "El arado y ellas",
    gancho: "Donde se aró con tracción animal, hoy hay menos mujeres trabajando fuera de casa. Y no es casualidad.",
    categoria: "Arado",
    color: "var(--plum)",
    curioso: true,
    encargo: "Un mango de arado gastado por el uso, sujeto por unas manos.",
    entrada:
      "En 2013, tres economistas publicaron un trabajo que cruzaba datos de agricultura tradicional de más de mil grupos étnicos, recogidos por antropólogos a lo largo del siglo XX, con las cifras actuales de empleo y de opinión de decenas de países. Buscaban el origen de una diferencia que las explicaciones habituales no cubren: por qué en unas sociedades la mujer trabaja fuera de casa mucho más que en otras.",
    paginas: [
      {
        rotulo: "Fuerza de brazo",
        texto:
          "El punto de partida es una observación antigua. La agricultura con azada exige agacharse, escardar y sembrar, un trabajo repartible que hacen hombres, mujeres y niños. La agricultura con arado exige controlar un apero pesado tirado por animales, lo que requiere fuerza de agarre y de tronco superior, donde la diferencia física entre sexos es mayor, y además concentra el trabajo en jornadas cortas e intensas mal compatibles con el cuidado de bebés. En las sociedades que adoptaron el arado, los hombres fueron al campo y las mujeres se quedaron en la casa.",
        destacado: { tipo: "frase", frase: "La azada se reparte; el arado exige fuerza de brazo." },
      },
      {
        rotulo: "Lo que dura",
        texto:
          "Lo llamativo del estudio no es eso, sino lo que dura. Los descendientes de aquellas sociedades presentan hoy menor participación femenina en el mercado laboral, menos mujeres en la política y opiniones más tradicionales sobre el trabajo de la mujer, y el efecto se mantiene incluso en los hijos de emigrantes nacidos en otro país. Para descartar que la causa fuera el clima o la riqueza, los autores usaron un truco: compararon regiones según si su suelo era adecuado para cultivos de arado, como el trigo, o para cultivos de azada, como el mijo.",
        destacado: { tipo: "cifra", cifra: "1.000", unidad: "grupos étnicos cruzados en el estudio" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una hipótesis discutida, como debe ser: hay quien objeta que la relación no prueba la causa y que otros factores históricos van en paralelo. Pero el trabajo se cita muchísimo porque plantea bien una idea incómoda: costumbres que hoy se defienden como valores eternos pueden venir de una decisión agrícola tomada hace milenios por razones puramente mecánicas. El arado dejó de usarse en casi todo el mundo rico hace dos generaciones. Las ideas que ordenó a su alrededor han demostrado ser bastante más difíciles de arrancar que la hierba.",
      },
    ],
  },
];
