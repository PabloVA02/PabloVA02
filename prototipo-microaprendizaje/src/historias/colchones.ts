import type { Short } from "../shorts";

/* ==========================================================================
   Los colchones.

   Un objeto en el que pasamos un tercio de la vida y del que nadie sabe
   nada. El tema se estropea si se convierte en catálogo de tiendas.

   La regla del tema: todo se cuenta desde el mismo problema físico, que es
   REPARTIR EL PESO DEL CUERPO sin puntos duros y sin apelmazarse. Cada
   short explica un material y qué le pasa cuando te tumbas encima.
   ========================================================================== */

export const COLCHONES: Short[] = [
  {
    id: "de-paja-a-muelles",
    titulo: "El colchón de paja",
    gancho: "Durante siglos se dormía sobre paja, lana o crin de caballo, y todos esos rellenos tenían el mismo defecto.",
    categoria: "Objetos",
    color: "var(--ochre)",
    encargo: "Un jergón de tela rayada abierto por una costura, con la paja saliendo.",
    /* La cama de paja, el trabajo de rellenarla, el anuncio del invento que la
       jubiló y el sitio donde acaban todos hoy. */
    fotos: [
      {
        archivo: "Medieval Austrian bed with straw mattress (26797624432).jpg",
        autor:
          "Una cama antigua austríaca con su jergón, el saco de tela que se rellenaba de paja. Fotografía de Thomas Quine, 2014.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Medieval_Austrian_bed_with_straw_mattress_(26797624432).jpg",
        foco: "50% 45%",
        alt: "Una cama estrecha de madera tallada, arrimada a una pared encalada, con un colchón de tela clara y sin sábanas.",
      },
      {
        archivo: "Poston, Arizona. Filling straw ticks for mattresses at Colorado River Relocation center for evacuee . . . - NARA - 536109.jpg",
        autor:
          "Rellenando de paja las fundas de los colchones en el campo de internamiento de Poston, Arizona, en mayo de 1942. Fotografía de Fred Clark. Archivos Nacionales de Estados Unidos.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Poston,_Arizona._Filling_straw_ticks_for_mattresses_at_Colorado_River_Relocation_center_for_evacuee_._._._-_NARA_-_536109.jpg",
        foco: "50% 45%",
        alt: "Fotografía antigua: tres personas metiendo brazadas de paja en unos sacos de tela blanca, en el suelo y al aire libre.",
      },
      {
        archivo: "Serta 'Perfect Sleeper', 1948.jpg",
        autor:
          "Anuncio de un colchón de muelles en una revista estadounidense, 1948: cuarenta y nueve dólares con cincuenta. El muelle llevaba ya casi ochenta años patentado y todavía se vendía como novedad.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Serta_%27Perfect_Sleeper%27,_1948.jpg",
        foco: "50% 18%",
        alt: "Anuncio en color de los años cuarenta con una mujer tumbada sobre un colchón de rayas y el precio en grande debajo.",
      },
      {
        archivo: "Mattress in Coventry July 29 2021.jpg",
        autor:
          "Un colchón abandonado en la acera, en Coventry, 2021. Dentro lleva acero, espuma y tela pegados, y separarlos cuesta más de lo que valen. Fotografía de Rubbish computer.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Mattress_in_Coventry_July_29_2021.jpg",
        foco: "50% 55%",
        alt: "Un colchón blanco tirado en el suelo de una calle, apoyado contra un contenedor metálico.",
      },
    ],
    entrada:
      "Europa, siglo XIX. Hasta entonces, dormir bien dependía del relleno que uno pudiera pagar: paja para los jornaleros, lana o crin de caballo para los acomodados y plumón para los ricos. Todos esos rellenos tenían el mismo defecto. Se apelmazaban con el peso del cuerpo y había que ahuecarlos a mano cada mañana, un trabajo que en las casas grandes ocupaba a una criada entera. Y ninguno se podía lavar por dentro, así que el colchón acumulaba durante años todo lo que le fuera cayendo. Lo que cambió la cama no fue un material nuevo ni un relleno mejor, sino una pieza de alambre.",
    paginas: [
      {
        rotulo: "El relleno",
        texto:
          "La paja era barata y se cambiaba una o dos veces al año. Mientras tanto acumulaba humedad, migas y bichos, y el colchón de un jornalero podía tener chinches sin que nadie se escandalizara. La crin de caballo era mucho mejor, porque el pelo es rizado y elástico y recupera la forma cuando dejas de apoyarte. Costaba una fortuna, así que se usaba en los hoteles buenos y poco más. El plumón daba el sueño más blando de todos y era el peor en verano, porque no deja salir el calor del cuerpo. Y ninguno de los tres podía lavarse entero, de modo que la higiene consistía en sacarlo al sol y golpearlo.",
        destacado: { tipo: "frase", frase: "La crin de caballo es rizada: recupera la forma sola." },
      },
      {
        rotulo: "Los muelles",
        texto:
          "El muelle de acero resolvió el problema, y llegó tarde a las camas porque primero se usó en los carruajes. Un muelle en espiral se comprime bajo el peso y vuelve a estirarse solo, así que sostiene el cuerpo sin apelmazarse nunca. El primer colchón de muelles se patentó en 1871 y durante décadas fue un lujo ruidoso. Tenía un defecto claro: los muelles iban atados entre sí, de modo que cuando uno se hundía arrastraba a los de al lado. Por eso en una cama vieja de matrimonio se nota tanto cuando el otro se da la vuelta. La solución fue envolver cada muelle en su bolsita de tela, para que trabajara solo.",
        destacado: { tipo: "cifra", cifra: "1871", unidad: "la primera patente de colchón de muelles" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó la cama con somier y colchón como norma en casi todo el mundo, y con ella una industria que vende por comodidad y por salud a partes iguales. Quedó también el problema de qué hacer con los viejos, porque un colchón mezcla acero, espuma y tela, y separar esos materiales cuesta más de lo que valen. Muchos ayuntamientos acaban recogiéndolos por millones y quemándolos, que es la peor solución posible. Y quedó el gesto que heredamos de la paja sin saberlo: al hacer la cama seguimos sacudiendo y ahuecando, aunque debajo ya no haya nada que se apelmace.",
      },
    ],
  },
  {
    id: "el-colchon-de-agua",
    titulo: "La cama de agua, dos veces",
    gancho: "Primero en un hospital del siglo XIX, para que los enfermos no se llenaran de llagas. Un siglo después volvió como mueble de moda.",
    categoria: "Objetos",
    color: "var(--slate)",
    encargo: "Una mano apretando la superficie de una cama de agua y la onda que se forma.",
    entrada:
      "Reino Unido, 1832. Un médico escocés está buscando la manera de que un enfermo que lleva meses en cama no se llene de llagas. El problema es de física más que de medicina: si todo el peso del cuerpo descansa sobre los mismos puntos, la piel se queda sin riego y se muere. Su idea fue apoyar al enfermo sobre agua, que reparte la presión por igual.",
    paginas: [
      {
        rotulo: "La presión",
        texto:
          "Una llaga por presión aparece cuando el peso corta el riego de sangre a un trozo de piel durante horas. Los puntos de siempre son el talón, la cadera y la parte baja de la espalda. La solución de aquel médico fue meter al enfermo sobre una cuba de agua tibia cubierta con una lámina de goma. El agua no se puede comprimir, así que se aparta hacia los lados y el cuerpo se hunde hasta que su peso queda repartido por toda la superficie. Funcionaba, pero era un armatoste pesadísimo, imposible de mover y difícil de mantener a temperatura. Se quedó en los hospitales que podían montarlo y no llegó a ninguna casa.",
        destacado: { tipo: "frase", frase: "El agua no se comprime: se aparta y reparte el peso." },
      },
      {
        rotulo: "Los años setenta",
        texto:
          "El invento volvió en 1968, cuando un estudiante de diseño en California buscaba un mueble llamativo para clase. Lo que cambió todo fue el plástico, porque el vinilo permitía fabricar una bolsa estanca barata y ligera, algo imposible con la goma del siglo anterior. La cama de agua se convirtió en símbolo de aquella época y llegó a suponer casi una quinta parte de los colchones vendidos en Estados Unidos. Después se desinfló, y por motivos muy prosaicos: pesaba tanto que había edificios donde no se permitía, tardaba horas en llenarse y necesitaba un calentador enchufado todo el año. Bastaba un pinchazo con un tacón para que el suelo del vecino de abajo se enterase.",
        destacado: { tipo: "cifra", cifra: "20", unidad: "% del mercado llegó a tener en su mejor año" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó muy poca cama de agua en las casas y bastante en otro sitio, porque los hospitales nunca la abandonaron del todo. La idea original sigue viva en los colchones antiescaras, que son bolsas de aire conectadas a un motor pequeño. El motor va inflando y desinflando franjas alternas cada pocos minutos, de modo que ningún punto de la piel aguanta el peso mucho rato. También quedó el criterio, que es el que se usa hoy para juzgar cualquier colchón: lo importante no es que sea duro o blando, sino que reparta la presión en vez de concentrarla.",
      },
    ],
  },
  {
    id: "la-espuma-que-recuerda",
    titulo: "La espuma vino de los aviones",
    gancho: "Un centro espacial buscaba un asiento que amortiguase el golpe del despegue. Acabó en los colchones de medio mundo.",
    categoria: "Objetos",
    color: "var(--plum)",
    curioso: true,
    encargo: "La huella de una mano hundida en un bloque de espuma gris, recuperándose despacio.",
    entrada:
      "Estados Unidos, 1966. La agencia espacial estadounidense está preparando los vuelos que llevarán hombres a la Luna y tiene un problema con los asientos. En el despegue y en el aterrizaje, el cuerpo recibe un empujón de varias veces su propio peso, y una espuma normal devuelve ese empujón como un muelle. Un ingeniero recibió el encargo de fabricar un material que absorbiera el golpe en lugar de rebotarlo.",
    paginas: [
      {
        rotulo: "Rebotar o tragar",
        texto:
          "Una espuma corriente es un plástico lleno de burbujas de aire que se comportan como muellecitos. Cuando la aprietas, las paredes de las burbujas se doblan y guardan energía, y al soltarla te la devuelven de golpe. Eso está bien en un cojín y es malo en el asiento de un cohete, porque el material rebota contra el cuerpo. Lo que se buscaba era lo contrario: una espuma que al comprimirse convirtiera esa energía en calor. El resultado fue un material que se hunde despacio bajo la mano y tarda unos segundos en recuperar la forma. De ahí viene el nombre comercial con el que se vendió después, el de la espuma que recuerda.",
        destacado: { tipo: "frase", frase: "No devuelve el golpe: lo convierte en un poco de calor." },
      },
      {
        rotulo: "Fuera del cohete",
        texto:
          "La agencia no se quedó el material para sí, porque su norma era que los inventos pagados con dinero público pasaran a la industria. Durante años lo usaron sitios donde nadie repara, como las camillas de las ambulancias, las mesas de operaciones y los cascos de fútbol americano. También sirvió para las prótesis, ya que un muñón necesita apoyo sin ningún punto duro que le roce. El salto a las casas llegó a principios de los noventa, cuando una empresa sueca consiguió fabricarla en bloques grandes y a un precio razonable. A partir de ahí, el colchón dejó de venderse por su firmeza y empezó a venderse por cómo se adapta al cuerpo.",
        destacado: { tipo: "cifra", cifra: "1966", unidad: "el año del encargo a la agencia espacial" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una espuma que está hoy en colchones, almohadas, zapatillas, auriculares y tapones para los oídos. Quedó también su defecto conocido, porque el mismo mecanismo que absorbe el golpe guarda el calor y hace que se duerma con más calor del deseable. Los fabricantes llevan años peleando con eso a base de perforaciones y de geles que conducen el calor hacia fuera. Y quedó el ejemplo que se cita siempre que alguien pregunta para qué sirve gastar dinero en ir al espacio. Se buscaba un asiento capaz de aguantar un despegue y salió de ahí la cama de mucha gente.",
      },
    ],
  },
];
