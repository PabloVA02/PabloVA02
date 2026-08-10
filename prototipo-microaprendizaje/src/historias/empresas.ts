import type { Short } from "../shorts";

/* ==========================================================================
   Empresas.

   Marcas que están en todas las casas y de las que casi nadie sabe de dónde
   salieron. El riesgo del tema es el panegírico de emprendedor —la visión,
   el garaje, el genio— que es publicidad tardía y aburre.

   La regla del tema: se cuenta el MOMENTO EN QUE PUDO NO SALIR. El
   farmacéutico que vendió su invento por nada y murió arruinado. La papelera
   que se jugó la empresa a una carta. La errata de teclado que dio nombre a
   un buscador. Casi ninguna gran empresa salió de un plan; salieron de una
   chapuza que funcionó.

   Y las cifras de valoración se ponen al final y una sola vez. Repetirlas es
   hacerle el anuncio gratis a alguien.
   ========================================================================== */

export const EMPRESAS: Short[] = [
  {
    id: "coca-cola-origen",
    titulo: "Nació en una farmacia",
    gancho: "Su inventor murió arruinado dos años después de crearla, sin haber ganado nada con ella.",
    categoria: "Empresas",
    color: "var(--clay)",
    encargo: "Un frasco de farmacia del XIX con etiqueta manuscrita, sobre un mostrador de madera.",
    fotos: [
      {
        archivo: "Equi's Store, Holyoke, Massachusetts circa 1910.jpg",
        autor: "Mostrador de refrescos de una tienda de Holyoke, Massachusetts, hacia 1910, con la barra de mármol italiano.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Equi's_Store,_Holyoke,_Massachusetts_circa_1910.jpg",
        foco: "50% 50%",
        alt: "Un local alargado con barra de mármol, taburetes de hierro curvado y vitrinas de madera a los dos lados.",
      },
      {
        archivo: "Erythroxylum coca Krasnodrzew pospolity 2024-02-29 Graz 03.jpg",
        autor: "Una mata de coca, Erythroxylum coca, en el jardín botánico de Graz. Fotografía de Agnieszka Kwiecień.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Erythroxylum_coca_Krasnodrzew_pospolity_2024-02-29_Graz_03.jpg",
        foco: "50% 50%",
        alt: "Ramas de un arbusto con hojas ovaladas de un verde intenso y nervio marcado, iluminadas de lado.",
      },
      {
        archivo: "Mate de coca Stevage.jpg",
        autor: "Un mate de coca servido en Villazón, Bolivia: la hoja infusionada, como se toma allí desde siempre. Fotografía de Stevage.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Mate_de_coca_Stevage.jpg",
        foco: "50% 50%",
        alt: "Un vaso de infusión clara con varias hojas verdes flotando dentro, sobre un plato.",
      },
      {
        archivo: "Women gathering leaves of the coca plant (Erythroxylum coca) Wellcome V0043210.jpg",
        autor: "Recolección de hoja de coca en Bolivia, grabado sobre madera de hacia 1867. Wellcome Collection.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Women_gathering_leaves_of_the_coca_plant_(Erythroxylum_coca)_Wellcome_V0043210.jpg",
        foco: "50% 50%",
        alt: "Un grabado antiguo con varias figuras recogiendo hojas entre arbustos bajos, con montañas al fondo.",
      },
    ],
    entrada:
      "Atlanta, en el sur de Estados Unidos, 1886. Un farmacéutico veterano de la guerra civil americana, enganchado a la morfina desde que lo hirieron en combate, lleva años buscando algo que le quite el dolor sin engancharle todavía más. Prepara jarabes en un caldero en el patio de su casa y los vende por vasos en la farmacia de la esquina, como hacía entonces media profesión. Uno de esos jarabes lleva hoja de coca y nuez de cola, y es el que acabará convirtiéndose en el refresco más vendido del planeta, sin que él llegue a enterarse.",
    paginas: [
      {
        rotulo: "El jarabe",
        texto:
          "Se despachaba por vasos en el mostrador, a cinco centavos, anunciado como tónico contra el dolor de cabeza, el cansancio y lo que entonces se llamaba agotamiento de los nervios. Que llevara burbujas fue un accidente: un empleado mezcló el jarabe con agua con gas en lugar de agua corriente y gustó bastante más. La cantidad de cocaína era pequeña, unos nueve miligramos por vaso, y desapareció del producto hacia 1903, cuando la sustancia empezó a estar mal vista.",
        destacado: { tipo: "frase", frase: "Que llevara burbujas fue una confusión de un empleado." },
      },
      {
        rotulo: "El mal negocio",
        texto:
          "El farmacéutico no ganó dinero con aquello. Enfermo y sin fondos, fue vendiendo trozos del negocio a distintos socios, a veces el mismo trozo dos veces, y murió en 1888 arruinado y todavía adicto. Un empresario de la ciudad compró los derechos sueltos, los juntó y se quedó con todo por unos dos mil trescientos dólares de la época. El hijo del inventor murió seis años más tarde, también pobre. La empresa que salió de aquellos frascos vale hoy más de doscientos mil millones de euros.",
        destacado: { tipo: "cifra", cifra: "2.300", unidad: "dólares costó quedarse con todo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La fórmula acabó convertida en el secreto comercial más famoso del mundo, guardado en una cámara acorazada que se puede visitar por fuera, y la compañía alimenta la leyenda de que solo dos directivos la conocen y tienen prohibido viajar en el mismo avión. Varios químicos independientes la han descifrado sin demasiada dificultad y han publicado su versión. Da igual. Lo que se vende no es el líquido, es la historia del sobre cerrado, y eso no se copia en un laboratorio.",
      },
    ],
  },

  {
    id: "nokia-papel",
    titulo: "Nokia hizo botas de goma",
    gancho: "Ciento treinta años fabricando de todo, y se salvó tirando por la borda lo único que ganaba dinero.",
    categoria: "Empresas",
    color: "var(--slate)",
    curioso: true,
    encargo: "Una fábrica de ladrillo junto a un río, con la chimenea humeando, en blanco y negro.",
    entrada:
      "Finlandia, 1865. Un ingeniero abre una fábrica de pasta de papel a la orilla de un río, en un pueblo del sur del país llamado Nokia. Durante el siglo siguiente, esa empresa hará papel higiénico, neumáticos, botas de agua, cables, mascarillas antigás y televisores. Los teléfonos llegan más de cien años después, y llegan casi por descarte.",
    paginas: [
      {
        rotulo: "El cajón de sastre",
        texto:
          "Para los años setenta era un grupo industrial que hacía de todo y nada especialmente bien: papelera, fábrica de goma y compañía de cables, las tres bajo el mismo nombre. Las botas de agua de colores llegaron a ser su producto más conocido dentro del país, y todavía se venden. En esa época montó también una división pequeña de electrónica, que fabricaba equipos de radio para el ejército y la policía y que perdió dinero todos los años, sin excepción, durante quince años seguidos.",
        destacado: { tipo: "frase", frase: "La división de electrónica perdió dinero quince años seguidos." },
      },
      {
        rotulo: "La apuesta",
        texto:
          "A principios de los noventa la empresa estaba al borde de la quiebra y con un director recién nombrado, de cuarenta y un años, que tomó una decisión brutal: vender todo lo demás —el papel, la goma, los cables, los televisores— y quedarse solo con la división que perdía dinero. Acertó en el momento exacto, justo cuando la telefonía móvil dejaba de ser un aparato de ejecutivo y empezaba a caber en un bolsillo cualquiera. En 1998 era el mayor fabricante de teléfonos del mundo, llegó a poner uno de cada cuatro móviles del planeta y su modelo más vendido despachó doscientos cincuenta millones de unidades, más que ningún otro aparato electrónico de la historia hasta entonces.",
        destacado: { tipo: "cifra", cifra: "1 de 4", unidad: "móviles del mundo eran suyos" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Perdió el trono tan deprisa como lo había ganado. Cuando llegaron las pantallas táctiles tenía un sistema propio anticuado y una organización interna que se peleaba consigo misma, y en cinco años pasó de media industria a casi nada; en 2013 vendió el negocio de móviles y desapareció de las tiendas. La empresa, sin embargo, sigue existiendo y no le va mal: hoy fabrica antenas y equipos de red, el armazón invisible por el que pasan las llamadas de todo el mundo, y factura miles de millones sin que casi nadie sepa que continúa ahí. Aquel pueblo a la orilla del río se sigue llamando igual que en 1865.",
      },
    ],
  },

  {
    id: "google-errata",
    titulo: "Google es una falta de ortografía",
    gancho: "Iban a ponerle el nombre de un número enorme. Lo escribieron mal al comprar el dominio.",
    categoria: "Empresas",
    color: "var(--plum)",
    curioso: true,
    encargo: "Una pantalla de ordenador de los noventa con un cursor parpadeando en una casilla vacía.",
    entrada:
      "California, septiembre de 1997. Dos estudiantes de doctorado de veinticuatro años tienen funcionando un buscador de internet en los ordenadores de su universidad y necesitan ponerle un nombre presentable, porque el que llevaba usando dos años no lo era: lo habían bautizado <em>BackRub</em>, «masaje de espalda», por la manera en que analizaba los enlaces que apuntaban hacia atrás a cada página. Con ese nombre no iba a ninguna parte.",
    paginas: [
      {
        rotulo: "El número",
        texto:
          "Buscaban un nombre que sugiriera una cantidad desmesurada de información, y alguien propuso <em>googol</em>, que es el nombre de una cifra concreta: un uno seguido de cien ceros, más que átomos hay en el universo observable. La palabra se la había inventado en 1920 un niño de nueve años, sobrino de un matemático que un día le pidió que bautizara aquella cifra y se quedó con lo primero que dijo. A los dos estudiantes les convenció. Uno de ellos se sentó a comprobar si el dominio estaba libre, escribió el nombre en la casilla y lo tecleó mal.",
        destacado: { tipo: "frase", frase: "La palabra la inventó, en 1920, un niño de nueve años." },
      },
      {
        rotulo: "La errata",
        texto:
          "Escribió <em>google</em>. Estaba libre, sonaba bien y lo registraron aquella misma noche, sin darse cuenta del error hasta bastante después; cuando lo vieron, decidieron quedárselo. Un año más tarde buscaban dinero para seguir y un inversor les firmó un cheque de cien mil dólares a nombre de una empresa que todavía no existía. Tuvieron que fundarla a toda prisa para poder ingresarlo, porque el banco no aceptaba el cheque de ninguna otra manera; el papel estuvo dos semanas metido en un cajón mientras se hacían los trámites. Así nació la sociedad: para poder cobrar un dinero que ya les habían dado.",
        destacado: { tipo: "cifra", cifra: "100.000", unidad: "dólares a una empresa que no existía" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La palabra terminó donde acaban muy pocas marcas: dentro del diccionario, convertida en verbo, en español y en una docena de idiomas más. La empresa lo vive con incomodidad, porque una marca convertida en nombre común puede perder su protección legal —le pasó a la aspirina y al celofán—, y de vez en cuando manda cartas pidiendo que no se emplee como verbo. El número original, mientras tanto, sigue sin servir para nada: en el universo entero no hay nada que se cuente por googoles. Aquel buscador iba a llamarse como una cifra inútil y acabó llamándose como el despiste de alguien con prisa.",
      },
    ],
  },
];
