import type { Short } from "../shorts";

/* ==========================================================================
   Los boticarios.

   El oficio del que salió la farmacia, cuando la misma tienda vendía
   especias, cosméticos, venenos y remedios. El tema se estropea si se
   cuenta como historia de la medicina, que está en medicina.ts.

   La regla del tema: el boticario es un ARTESANO QUE FABRICA A MANO cada
   preparado, no un vendedor, y esa diferencia manda en los tres shorts.
   La regulación se cuenta siempre desde el conflicto concreto que resolvía.
   ========================================================================== */

export const BOTICARIOS: Short[] = [
  {
    id: "la-botica-y-sus-cajones",
    titulo: "Veneno y azúcar juntos",
    gancho: "El boticario vendía especias, tintes, cosméticos y medicinas del mismo armario, y muchas de esas cosas eran lo mismo.",
    categoria: "Historia",
    color: "var(--clay)",
    encargo: "Interior de botica antigua con las paredes de botes de cerámica rotulados en latín.",
    fotos: [
      {
        archivo: "Albarello drug jar used for cinchona bark, Spain, 1731-1770 Wellcome L0057419.jpg",
        autor: "Bote de botica español del siglo XVIII para corteza de quina, rotulado «Cort. Calisay». Wellcome Collection.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Albarello_drug_jar_used_for_cinchona_bark,_Spain,_1731-1770_Wellcome_L0057419.jpg",
        foco: "50% 45%",
        alt: "Un bote de cerámica blanca con guirnaldas pintadas y una cartela con el nombre del contenido en latín.",
      },
      {
        archivo: "Bronze mortar and pestle, European, 18th century Wellcome L0057078.jpg",
        autor: "Mortero y mano de bronce europeos del siglo XVIII. Wellcome Collection.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Bronze_mortar_and_pestle,_European,_18th_century_Wellcome_L0057078.jpg",
        foco: "50% 50%",
        alt: "Un mortero de bronce oscuro con la mano apoyada al lado, sobre fondo negro.",
      },
      {
        archivo: "Thériaque - musée HCL - pot canon - pharmacie à l'Hôtel-Dieu.jpg",
        autor: "Bote de triaca de la farmacia del Hôtel-Dieu de Lyon. Fotografía de Aurélie Troccon y Manon Mauquin.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Th%C3%A9riaque_-_mus%C3%A9e_HCL_-_pot_canon_-_pharmacie_%C3%A0_l%27H%C3%B4tel-Dieu.jpg",
        foco: "50% 45%",
        alt: "Un tarro cilíndrico de cerámica pintada con el nombre del preparado escrito en la panza.",
      },
      {
        archivo: "Farmacia di santa maria novella, sala dell'antica spezieria, 01.jpg",
        autor: "La antigua botica de Santa Maria Novella, en Florencia. Fotografía de Francesco Bini.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Farmacia_di_santa_maria_novella,_sala_dell%27antica_spezieria,_01.jpg",
        foco: "50% 20%",
        alt: "El techo de estuco blanco y dorado de una botica antigua sobre vitrinas de madera oscura.",
      },
    ],
    entrada:
      "Europa, siglos XIII a XVIII. Una botica era una tienda pequeña con las paredes cubiertas de cajones y de botes de cerámica rotulados en latín, y con un olor que se recordaba toda la vida. Dentro de aquellos botes había raíces secas, minerales molidos, grasas animales, especias caras, resinas, azúcar y unos cuantos venenos, todo en la misma habitación y muchas veces en el mismo estante. El boticario no era un vendedor que despachaba cajas: era un artesano que fabricaba cada preparado a mano, uno a uno, a petición del médico y delante del cliente.",
    paginas: [
      {
        rotulo: "Botes y mortero",
        texto:
          "El instrumento central de una botica era el mortero, y no por casualidad se convirtió en su símbolo. Casi todo lo que se vendía había que machacarlo, mezclarlo y convertirlo en polvo, pasta o jarabe. Los botes de cerámica no eran decoración, porque el barro vidriado no reacciona con lo que guarda. Un preparado ácido en un recipiente metálico se estropea, y en uno de madera se filtra. Los venenos se guardaban aparte, en un armario con llave, y su venta se anotaba en un libro. Ese libro es hoy una fuente estupenda para los historiadores, porque cuenta quién compró qué y cuándo.",
        destacado: { tipo: "frase", frase: "El barro vidriado no reacciona con lo que guarda." },
      },
      {
        rotulo: "La triaca",
        texto:
          "El producto más famoso de cualquier botica europea era una pasta llamada triaca, que servía supuestamente para todo. Llevaba entre cincuenta y setenta ingredientes, incluidos opio, canela, mirra y carne de víbora. Se preparaba en público una vez al año, con el ayuntamiento vigilando que no faltara ningún componente. Después había que dejarla reposar años antes de venderla, y las ciudades presumían de la suya. De todos aquellos ingredientes, el único que hacía algo era el opio, que calma el dolor de verdad. Eso bastaba para que el enfermo se encontrara mejor y para que la triaca durase mil ochocientos años.",
        destacado: { tipo: "cifra", cifra: "70", unidad: "ingredientes llegaba a llevar la triaca" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron las boticas antiguas convertidas en museo, con sus botes rotulados en latín y su mueble de cajones. Quedó también el mortero como emblema de la profesión, dibujado todavía hoy en el escaparate de muchas farmacias. Quedó el latín en las etiquetas, que era el idioma común y permitía que una receta funcionase en otro país. Y quedó la mezcla original, porque una farmacia moderna sigue vendiendo medicinas, cosmética, jabón, biberones y caramelos. El mostrador ha cambiado, pero el surtido de la tienda se parece más de lo que uno diría.",
      },
    ],
  },
  {
    id: "separar-al-que-receta",
    titulo: "Recetar y vender, aparte",
    gancho: "La separación entre quien prescribe y quien despacha es una ley del siglo XIII, y sigue en pie por la misma razón.",
    categoria: "Medicina",
    color: "var(--slate)",
    encargo: "Receta manuscrita antigua sobre el mostrador de una farmacia, junto a una balanza pequeña.",
    entrada:
      "Reino de Sicilia, 1240. El emperador que gobierna el sur de Italia y buena parte del Mediterráneo promulga un conjunto de leyes sanitarias que no tiene precedente. Entre ellas hay una que sigue vigente en casi todo el mundo ocho siglos después. Un médico no puede tener botica ni participar en el negocio de un boticario, porque el conflicto es evidente.",
    paginas: [
      {
        rotulo: "El conflicto",
        texto:
          "Si quien decide qué medicina necesitas es la misma persona que te la vende, hay un problema. Cuanto más caro sea el preparado y más cantidad receta, más gana quien firma la receta. Aquellas leyes fijaron además los precios máximos de cada preparado, para que nadie se aprovechara del enfermo. Obligaron también a que el boticario jurase preparar las fórmulas exactamente como venían escritas. Y establecieron inspecciones, porque un boticario podía ahorrarse el ingrediente caro y nadie lo notaría. Es la primera regulación farmacéutica de la que hay constancia y se parece muchísimo a la actual.",
        destacado: { tipo: "frase", frase: "Quien decide la medicina no puede ser quien la vende." },
      },
      {
        rotulo: "La doble firma",
        texto:
          "El sistema que salió de ahí funciona como un control cruzado entre dos profesionales independientes. El médico decide qué hace falta y el farmacéutico comprueba que lo recetado tiene sentido. Ese segundo par de ojos detecta errores de dosis, incompatibilidades entre fármacos y confusiones de nombre. Muchos medicamentos se llaman de manera parecidísima, y una letra cambiada puede ser un problema grave. Los estudios sobre errores de medicación sitúan a la farmacia como el filtro que atrapa una parte importante. Por eso la separación sobrevive incluso donde vender directamente sería más cómodo y más barato.",
        destacado: { tipo: "cifra", cifra: "1240", unidad: "el año de la primera ley farmacéutica" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una regla que casi todos los países mantienen, con excepciones en zonas rurales sin farmacia cercana. Quedó también la discusión sobre hasta dónde llega, porque un veterinario sí puede vender lo que receta. Lo mismo pasa con los ópticos, los dentistas y varias especialidades donde el conflicto es igual de real. Y quedó una idea que se ha copiado en otros sitios, porque separar a quien decide de quien cobra es un principio general. Funciona igual en una obra, en una auditoría y en cualquier sitio donde alguien firma un gasto ajeno.",
      },
    ],
  },
  {
    id: "refrescos-de-farmacia",
    titulo: "Refrescos de la botica",
    gancho: "El mostrador de la botica servía agua con gas por motivos médicos. De ahí salieron algunas marcas enormes.",
    categoria: "Empresas",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Mostrador de farmacia estadounidense de 1900 con grifos de soda y taburetes altos.",
    entrada:
      "Estados Unidos, siglo XIX. En las farmacias del país se instala un mostrador con grifos que sirve agua carbonatada, porque el agua con gas se considera entonces un remedio digestivo. El farmacéutico le añade jarabes de su propia cosecha para que sepa mejor y para tratar dolencias concretas. De esos mostradores salieron varias de las bebidas más vendidas del mundo.",
    paginas: [
      {
        rotulo: "El mostrador",
        texto:
          "El agua carbonatada se fabricaba disolviendo dióxido de carbono a presión, y sabía distinta de la del grifo. Se le atribuían propiedades para la digestión, para el dolor de cabeza y para el cansancio. El mostrador se convirtió en un sitio social, porque el alcohol estaba mal visto en muchas ciudades. La gente quedaba allí a tomar algo y el farmacéutico competía inventando jarabes con sabores propios. Muchos de esos jarabes llevaban extractos de plantas con efectos reales, algunos de ellos bastante fuertes. Se vendían como tónicos, y la frontera entre bebida y medicina no estaba en ninguna parte.",
        destacado: { tipo: "frase", frase: "La frontera entre bebida y medicina no existía." },
      },
      {
        rotulo: "El cambio",
        texto:
          "El paso de tónico a refresco ocurrió cuando dos cosas cambiaron a la vez a principios del siglo XX. La primera fue la ley, porque los gobiernos empezaron a exigir que se declarase lo que llevaba cada botella. Los ingredientes más discutibles desaparecieron de las fórmulas y los fabricantes dejaron de prometer curaciones. La segunda fue el embotellado, que sacó la bebida del mostrador y la puso en cualquier tienda. A partir de ahí ya no hacía falta un farmacéutico detrás, sino una fábrica y un camión. El producto dejó de venderse como salud y pasó a venderse como placer, que resultó ser mejor negocio.",
        destacado: { tipo: "cifra", cifra: "1906", unidad: "el año de la ley que obligó a declarar ingredientes" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron marcas gigantescas cuyo origen de farmacia sigue apareciendo en su nombre y en su forma de botella. Quedó también un rastro en el idioma, porque en inglés a un refresco se le sigue llamando agua tónica o soda. Quedaron algunos mostradores originales funcionando todavía como cafeterías en ciudades pequeñas de Estados Unidos. Y quedó un recordatorio útil de que la publicidad basada en la salud es tan vieja como el comercio. Muchas bebidas que hoy se anuncian por sus vitaminas y por sus minerales están repitiendo exactamente aquel guion. El envase cambia y el argumento no.",
      },
    ],
  },
];
