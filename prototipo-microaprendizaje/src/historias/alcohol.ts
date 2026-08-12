import type { Short } from "../shorts";

/* ==========================================================================
   Alcohol.

   El riesgo del tema es doble: la nostalgia de taberna, que hace gracia y
   no informa, y el folleto de prevención, que informa y no lo lee nadie.

   La regla del tema: el alcohol se cuenta como UNA DECISIÓN DE ESTADO. Un
   gobierno que envenena a propósito el alcohol industrial. Un parlamento
   que aprueba ocho leyes en treinta años. Un templo que reparte raciones
   de cerveza como salario. Beber nunca ha sido un asunto privado: siempre
   hay alguien legislando, gravando o repartiendo.

   Y el precio se compara siempre con un jornal o con una hogaza.
   ========================================================================== */

export const ALCOHOL: Short[] = [
  {
    id: "alcohol-envenenado",
    titulo: "Envenenaron el alcohol",
    gancho: "Durante la ley seca se adulteró el alcohol industrial para que nadie lo bebiera. Se lo bebieron igual.",
    categoria: "Alcohol",
    color: "var(--clay)",
    encargo: "Una botella sin etiqueta y un vaso sobre la barra de madera de un local a oscuras.",
    fotos: [
      {
        archivo: "Drankverboden, prohibitie, drooglegging, SFA002010424.jpg",
        autor: "Una antigua taberna convertida en zapatería durante la ley seca: la barra sigue ahí, y la botella también. Estados Unidos, 1920.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Drankverboden,_prohibitie,_drooglegging,_SFA002010424.jpg",
        foco: "50% 45%",
        alt: "Interior de un local con una barra de madera curva, cajas de zapatos en los estantes y varios clientes.",
      },
      {
        archivo: "Drankverboden, prohibitie, drooglegging, SFA002010416.jpg",
        autor: "Agentes desmontando una destilería clandestina en los pantanos cercanos a Washington, 1924.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Drankverboden,_prohibitie,_drooglegging,_SFA002010416.jpg",
        foco: "50% 45%",
        alt: "Dos hombres vaciando bidones junto a una caseta de tablas en un bosque encharcado, en sepia.",
      },
      {
        archivo: "5 Prohibition Disposal(9) (cropped).jpg",
        autor: "Agentes vaciando barriles de licor incautado por una alcantarilla de Nueva York durante la ley seca.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:5_Prohibition_Disposal(9)_(cropped).jpg",
        foco: "50% 50%",
        alt: "Dos hombres inclinan un barril y el líquido cae a chorro por una boca de alcantarilla abierta en la calle.",
      },
      {
        archivo: "Drankverboden Drooglegging (Prohibition) Verenigde Staten van Amerika Grote groep agenten op, SFA022008269.jpg",
        autor: "Policías sacando barriles incautados a la calle ante una multitud, Estados Unidos, 1920.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Drankverboden_Drooglegging_(Prohibition)_Verenigde_Staten_van_Amerika_Grote_groep_agenten_op,_SFA022008269.jpg",
        foco: "50% 45%",
        alt: "Una calle llena de gente con agentes de uniforme haciendo rodar un barril entre la multitud.",
      },
    ],
    entrada:
      "Estados Unidos, 1926. El país lleva seis años con el alcohol prohibido y la ley no está funcionando: se bebe más o menos lo mismo que antes, solo que en locales clandestinos y con licor de procedencia dudosa. Buena parte de ese licor no se destila en ningún alambique escondido, sino que sale de robar alcohol industrial, que es puro, barato y se fabrica legalmente por millones de litros para las fábricas. Al alcohol industrial se le añaden por ley sustancias que lo hacen imbebible, así que el negocio consiste en quitárselas. Y ahí es donde el gobierno decide subir la apuesta.",
    paginas: [
      {
        rotulo: "La fórmula",
        texto:
          "El alcohol de uso industrial llevaba desde el siglo anterior una mezcla de sustancias añadidas para que supiera fatal y nadie lo bebiera, un procedimiento que se llama desnaturalizar. Los contrabandistas contrataban químicos para quitarle esos aditivos y devolverlo a un estado bebible, y lo conseguían casi siempre. En 1926 el gobierno respondió endureciendo la fórmula: ordenó añadir metanol, que no es solo repugnante sino tóxico, además de queroseno, benceno, yodo y otras cosas. La idea, discutida abiertamente en la prensa, era que el miedo disuadiera. Los contrabandistas siguieron vendiendo, y sus químicos ya no siempre lo limpiaban del todo.",
        destacado: { tipo: "frase", frase: "Ordenaron añadir metanol, que no es repugnante sino tóxico." },
      },
      {
        rotulo: "Los muertos",
        texto:
          "El metanol ciega y mata. En la Nochevieja de 1926, un hospital de Nueva York recibió más de sesenta intoxicados en dos días y varios murieron allí mismo; el forense jefe de la ciudad se dedicó a documentar los casos y a denunciarlo en público, y fue uno de los primeros forenses que usó la química para pelearse con un gobierno. Las estimaciones más citadas hablan de unos diez mil muertos por alcohol adulterado en todo el país hasta 1933. Hubo senadores que llamaron a aquello asesinato legal, y otros que respondieron que quien bebía se lo había buscado.",
        destacado: { tipo: "cifra", cifra: "10.000", unidad: "muertos estimados por alcohol adulterado" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La prohibición se levantó en 1933, entre otras cosas porque el país necesitaba desesperadamente los impuestos del alcohol en plena crisis económica. Dejó tres herencias: un crimen organizado que hasta entonces era pequeño y salió de aquellos años convertido en una industria, un país acostumbrado a beber licor fuerte en lugar de cerveza porque ocupa menos y se contrabandea mejor, y la costumbre de desnaturalizar el alcohol industrial, que sigue vigente hoy en todo el mundo aunque ya sin metanol. El aditivo que se usa ahora es amarguísimo y completamente inofensivo.",
      },
    ],
  },

  {
    id: "cerveza-y-pan",
    titulo: "Nos asentó la cerveza",
    gancho: "La discusión lleva setenta años abierta: si el primer cereal se sembró para pan o para fermentarlo.",
    categoria: "Alcohol",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un mortero excavado en la roca con restos de grano molido dentro.",
    entrada:
      "Oriente Próximo, hacia el año 10000 antes de Cristo. Unos grupos de cazadores y recolectores empiezan a sembrar cereal, a quedarse en un mismo sitio y a levantar aldeas, en el cambio más grande de la historia de nuestra especie. La explicación clásica es que lo hicieron para comer pan. En 1953 un arqueólogo publicó un artículo preguntando si no sería más bien por la bebida.",
    paginas: [
      {
        rotulo: "El grano difícil",
        texto:
          "El argumento de fondo es que el cereal silvestre resulta un alimento incomodísimo: hay que segarlo, trillarlo, aventarlo, molerlo y cocerlo para sacar un pan bastante malo, y con el mismo esfuerzo se conseguían raíces y carne sin tanto trámite. En cambio, el grano remojado germina y fermenta casi solo, y da una bebida espesa, dulce, nutritiva y con alcohol, que además se conserva unos días y se comparte. Para una sociedad sin escritura ni dinero, una bebida así vale mucho: sirve para reunir gente, para agradecer un trabajo y para celebrar una alianza.",
        destacado: { tipo: "frase", frase: "El grano remojado fermenta solo; el pan hay que trabajarlo." },
      },
      {
        rotulo: "Las pruebas",
        texto:
          "El debate sigue abierto y las dos posturas tienen datos a su favor. Del lado de la cerveza está un yacimiento del actual Israel donde se han encontrado morteros excavados en la roca con restos de almidón fermentado de hace unos trece mil años, anteriores a la agricultura, y unos recintos monumentales construidos por cazadores que parecen sitios de banquete colectivo. Del lado del pan está que también han aparecido restos de pan plano igual de antiguos. La respuesta más aceptada hoy es que van juntas: del mismo trabajo con el grano salen las dos cosas.",
        destacado: { tipo: "cifra", cifra: "13.000", unidad: "años tienen los restos de fermentado" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Lo que sí está documentado sin discusión es lo que vino después. En las primeras ciudades de Mesopotamia, hace cinco mil años, la cerveza era comida corriente y también salario: se conservan tablillas de arcilla que anotan las raciones diarias de los obreros en jarras, y una de las recetas escritas más antiguas que existen es un himno a la diosa de la cerveza que funciona como instrucciones de elaboración. Se bebía con caña para no tragarse las cáscaras. Y todavía hoy, en media Europa, pagarle una a alguien es la manera de agradecerle un favor.",
      },
    ],
  },

  {
    id: "ginebra-londres",
    titulo: "La fiebre de la ginebra",
    gancho: "Un cartel de la época prometía borrachera por un penique y borrachera total por dos.",
    categoria: "Alcohol",
    color: "var(--slate)",
    encargo: "Un callejón estrecho del siglo XVIII con figuras tumbadas en los portales.",
    entrada:
      "Londres, 1720. La ciudad ha crecido de golpe con gente llegada del campo que vive amontonada y sin trabajo fijo. La ginebra, que hasta hacía poco era una bebida importada de Holanda, se fabrica ahora en cualquier sótano, se vende sin licencia y sale más barata que la cerveza, más barata incluso que el agua limpia. El consumo se multiplica por ocho en veinte años.",
    paginas: [
      {
        rotulo: "El penique",
        texto:
          "Se vendía en tiendas, en puestos callejeros, en carretillas y hasta en máquinas: hubo un tendero que instaló en la pared un gato de madera con un tubo en la boca, de modo que el cliente metía la moneda por una ranura, decía una contraseña y recibía un chorro de ginebra sin ver a nadie. Un cartel famoso de la época anunciaba borrachera por un penique y borrachera total por dos, con paja limpia gratis para dormirla en el sótano. La bebida se destilaba mal, con aguarrás o ácido para darle fuerza, y dejaba secuelas de por vida.",
        destacado: { tipo: "frase", frase: "Borracho por un penique, muy borracho por dos." },
      },
      {
        rotulo: "Las leyes",
        texto:
          "El Parlamento aprobó ocho leyes en treinta años para frenarlo, y las primeras fueron un desastre completo. La de 1736 puso una licencia carísima y una recompensa para quien denunciara a un vendedor sin ella, lo que provocó disturbios, delatores linchados en plena calle y una economía sumergida todavía mayor: se vendía la misma ginebra con nombres inventados de medicina. La ley que funcionó, en 1751, hizo justo lo contrario: licencias asequibles solo para locales con puerta a la calle y prohibición de que los destiladores vendieran directamente al público.",
        destacado: { tipo: "cifra", cifra: "8", unidad: "leyes en treinta años contra la ginebra" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El consumo bajó a partir de mediados de siglo, aunque los historiadores reparten el mérito entre las leyes, dos malas cosechas que encarecieron el grano y una subida general de los salarios. Aquella crisis dejó la primera política pública de salud de la historia moderna que reconoció que un problema social no se arregla solo prohibiendo, y dejó también grabados y caricaturas que siguen reproduciéndose en los manuales. Y la ginebra, que era el licor de los desesperados, acabó dos siglos más tarde siendo la bebida más presumida de las cartas de cócteles.",
      },
    ],
  },
];
