import type { Short } from "../shorts";

/* ==========================================================================
   Cementerios.

   El riesgo del tema es lo lúgubre por lo lúgubre: cipreses, silencio,
   mármol. Atmósfera sin información.

   La regla del tema: un cementerio se cuenta como PROBLEMA DE SUELO Y DE
   DINERO. Cuánto espacio hay, quién paga, cuánto dura una concesión, qué
   pasa cuando nadie renueva. Todo lo que parece costumbre inmemorial es
   en realidad una ordenanza municipal con fecha.

   Y se cuenta sin solemnidad y sin morbo: con los datos delante, como
   quien explica cualquier otro servicio público.
   ========================================================================== */

export const CEMENTERIOS: Short[] = [
  {
    id: "enterrar-fuera",
    titulo: "Se enterraba en la iglesia",
    gancho: "Bajo las losas del suelo, por capas. En verano el olor era insoportable y los pozos se contaminaban.",
    categoria: "Cementerios",
    color: "var(--slate)",
    encargo: "Un suelo de iglesia con losas gastadas y letras grabadas medio borradas.",
    fotos: [
      {
        archivo: "Church of St Mary, Tilty Essex England - chancel ledger memorial.jpg",
        autor: "Losa sepulcral en el suelo del presbiterio de la iglesia de Tilty, Essex. Fotografía de Acabashi.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Church_of_St_Mary,_Tilty_Essex_England_-_chancel_ledger_memorial.jpg",
        foco: "50% 45%",
        alt: "Una losa de piedra clara encajada en el suelo, con una inscripción latina medio borrada por las pisadas.",
      },
      {
        archivo: "Stift Altenburg Krypta 02.JPG",
        autor: "La cripta de la abadía de Altenburg, en Austria. Fotografía de Uoaei1.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Stift_Altenburg_Krypta_02.JPG",
        foco: "50% 40%",
        alt: "Un pasillo abovedado bajo tierra, con las bóvedas cubiertas de frescos de flores y guirnaldas.",
      },
      {
        archivo: "St Andrew's west tower and graveyard - geograph.org.uk - 8257857.jpg",
        autor: "La torre de una iglesia parroquial con su camposanto alrededor. Fotografía de Neil Owen.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:St_Andrew%27s_west_tower_and_graveyard_-_geograph.org.uk_-_8257857.jpg",
        foco: "45% 55%",
        alt: "Una torre de piedra maciza entre árboles pelados, rodeada de lápidas inclinadas sobre la hierba.",
      },
      {
        archivo: "Cementerio de Laño.jpg",
        autor: "El cementerio de Laño, a las afueras del pueblo. Fotografía de Mentxuwiki.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Cementerio_de_La%C3%B1o.jpg",
        foco: "45% 55%",
        alt: "Un recinto rectangular de muro de piedra con una cancela de hierro y una cruz encima, en pleno campo.",
      },
    ],
    entrada:
      "España, 1787. Un decreto real ordena algo que hoy parece de sentido común y que entonces sonó a disparate: que los enterramientos dejen de hacerse dentro de las iglesias y en los recintos parroquiales del interior de los pueblos, y que cada localidad construya un cementerio en las afueras, ventilado, cercado y lejos de las casas. Hasta ese momento lo normal, en toda Europa, era enterrar bajo el suelo de la iglesia o en el patio de al lado, a unos metros de donde vivía y bebía la gente. La medida tarda décadas en cumplirse y provoca resistencia en casi todas partes.",
    paginas: [
      {
        rotulo: "Bajo las losas",
        texto:
          "Durante siglos lo normal fue enterrar en el suelo de la iglesia, y cuanto más cerca del altar, mejor sitio y más caro: las familias con dinero tenían su losa con nombre, y el resto iba a fosas comunes bajo el pavimento o en el patio anexo. Las capas se superponían y los huesos antiguos se sacaban a un osario cuando hacía falta espacio para los nuevos. En verano el olor era insoportable y hay actas de ayuntamientos quejándose de que no se podía oír misa. Los pozos cercanos se contaminaban y nadie relacionaba una cosa con la otra.",
        destacado: { tipo: "frase", frase: "Cuanto más cerca del altar, mejor sitio y más caro." },
      },
      {
        rotulo: "La resistencia",
        texto:
          "La orden se apoyaba en los médicos de la época, que atribuían las enfermedades a los aires corrompidos, una teoría errónea en el mecanismo pero acertada en la conclusión práctica. La resistencia fue grande y por motivos entendibles: enterrar fuera del pueblo se percibía como un castigo y como una pérdida de posición, las parroquias perdían los ingresos de las sepulturas y las familias no querían dejar a sus muertos lejos y sin vigilancia. Hicieron falta epidemias, multas y varias décadas de insistencia administrativa para que el cambio llegara a completarse en todo el país.",
        destacado: { tipo: "cifra", cifra: "1787", unidad: "el decreto que sacó los muertos" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El resultado es el cementerio tal como lo conocemos: un recinto amurallado a las afueras, con calles, numeración y registro escrito, es decir, una institución administrativa moderna y no un anexo de la iglesia. Fue uno de los primeros asuntos en los que el Estado le quitó a la parroquia una competencia de toda la vida, y por eso costó tanto imponerlo. Los suelos de las iglesias antiguas siguen llenos de losas con nombres y fechas, y bajo bastantes de ellas queda todavía lo que había. Al entrar a ver un retablo se pisa, sin saberlo, un cementerio.",
      },
    ],
  },

  {
    id: "cementerio-jardin",
    titulo: "Mudaron a dos famosos",
    gancho: "Estaba lejos y vacío. Trasladaron los restos de unos muertos célebres y se llenó en diez años.",
    categoria: "Cementerios",
    color: "var(--plum)",
    curioso: true,
    encargo: "Una avenida arbolada entre panteones de piedra con esculturas.",
    fotos: [
      {
        archivo: "Père Lachaise Cemetery @ Paris (30636899203).jpg",
        autor: "Una de las avenidas del cementerio del Père-Lachaise, en París. Fotografía de Guilhem Vellut.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:P%C3%A8re_Lachaise_Cemetery_@_Paris_(30636899203).jpg",
        foco: "50% 50%",
        alt: "Camino empedrado entre panteones de piedra y árboles sin hojas, cubierto de hojarasca.",
      },
      {
        archivo: "Père Lachaise Cemetery @ Paris (31408231786).jpg",
        autor: "Panteones y arbolado del Père-Lachaise en invierno. Fotografía de Guilhem Vellut.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:P%C3%A8re_Lachaise_Cemetery_@_Paris_(31408231786).jpg",
        foco: "50% 50%",
        alt: "Hilera de capillas funerarias de piedra bajo árboles altos, con la luz baja del invierno.",
      },
      {
        archivo: "Père Lachaise Cemetery @ Paris (31444718565).jpg",
        autor: "Monumentos y sepulturas del Père-Lachaise. Fotografía de Guilhem Vellut.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:P%C3%A8re_Lachaise_Cemetery_@_Paris_(31444718565).jpg",
        foco: "50% 50%",
        alt: "Tumbas antiguas con esculturas de piedra entre troncos y hojas caídas.",
      },
      {
        archivo: "Crematorium @ Père Lachaise Cemetery @ Paris (31328990591).jpg",
        autor: "El crematorio del Père-Lachaise, construido a finales del siglo XIX. Fotografía de Guilhem Vellut.",
        licencia: "CC BY 2.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Crematorium_@_P%C3%A8re_Lachaise_Cemetery_@_Paris_(31328990591).jpg",
        foco: "50% 50%",
        alt: "Edificio de cúpula y arcos de ladrillo claro dentro del recinto del cementerio.",
      },
    ],
    entrada:
      "París, 1804. Se inaugura en una colina de las afueras el primer cementerio ajardinado de Europa, con árboles, avenidas trazadas como calles y parcelas que se compran en propiedad, pensado no como un camposanto sino como un parque por el que pasear entre monumentos. La idea es buena y la ejecución también. El problema es que en el primer año entero se hacen trece enterramientos: está demasiado lejos del centro, en un barrio pobre, y nadie de París quiere acabar allí.",
    paginas: [
      {
        rotulo: "El parque",
        texto:
          "La idea era romper con el osario y ofrecer otra cosa: una tumba individual, en propiedad y a perpetuidad, con un monumento al gusto de la familia, dentro de un recinto ajardinado que se pudiera visitar como quien va de paseo un domingo por la tarde. Era un cambio enorme respecto a la fosa común y encajaba con la mentalidad burguesa del momento, que valoraba el nombre propio y la memoria familiar. El problema era comercial: la gente asociaba el sitio con el barrio en el que estaba y prefería las parroquias de siempre.",
        destacado: { tipo: "cifra", cifra: "13", unidad: "enterramientos en el primer año" },
      },
      {
        rotulo: "El traslado",
        texto:
          "La administración del cementerio recurrió entonces a una campaña de promoción sin ningún disimulo. En 1817 trasladó allí, con ceremonia pública y monumento aparte, los supuestos restos de una pareja legendaria de enamorados medievales cuya historia conocía todo el mundo, y también los de un dramaturgo y un fabulista muy famosos del siglo anterior. La prensa lo cubrió con detalle, la gente subió a verlo y las ventas de parcelas se dispararon en cuestión de meses. En 1830 había más de treinta mil tumbas en la colina, y hoy pasa del millón de enterramientos acumulados a lo largo de dos siglos.",
        destacado: { tipo: "frase", frase: "Trasladaron a los muertos famosos para vender parcelas." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El modelo se copió en toda Europa y en América a lo largo del siglo XIX, y de ahí vienen los cementerios ajardinados con avenidas y escultura que hay en casi cualquier ciudad grande. Aquel de París recibe hoy más de tres millones de visitantes al año, más que muchos museos, y hay que regular el acceso a algunas tumbas concretas por la cantidad de gente que se acerca a verlas. Las parcelas a perpetuidad, mientras tanto, se han convertido en un problema de gestión: cuando una familia deja de aparecer, la tumba acaba recuperándose.",
      },
    ],
  },

  {
    id: "tumbas-de-alquiler",
    titulo: "La tumba se alquila",
    gancho: "El nicho se paga por un plazo, y si nadie renueva la concesión, los restos van al osario común.",
    categoria: "Cementerios",
    color: "var(--ochre)",
    encargo: "Un muro de nichos de varias alturas con flores en algunas repisas.",
    entrada:
      "España, siglo XXI. La mayoría de los enterramientos no se hacen en tierra sino en nichos, unos huecos apilados en muros de varias alturas, y casi ninguno se compra para siempre: se contrata una concesión por un plazo, habitualmente de diez, veinticinco o cincuenta años, que después hay que renovar volviendo a pagar por ella.",
    paginas: [
      {
        rotulo: "El nicho",
        texto:
          "El sistema de nichos apilados se generalizó en el siglo XIX por una razón de espacio y de coste: en un muro de cinco alturas caben muchísimos más enterramientos por metro cuadrado que en tierra, y la obra sale más barata que excavar y mantener sepulturas individuales. En algunas ciudades del sur y del levante hay muros enormes con miles de huecos, con escaleras de mano para llegar a las filas altas y con una repisa estrecha para las flores. El resultado es un paisaje muy reconocible que sorprende a cualquier visitante extranjero.",
        destacado: { tipo: "frase", frase: "En un muro de cinco alturas cabe mucha más gente." },
      },
      {
        rotulo: "La renovación",
        texto:
          "Cuando vence el plazo, el ayuntamiento o la empresa concesionaria avisa a la familia por carta y mediante un edicto público colocado en el propio cementerio. Si nadie responde ni paga, se procede a exhumar lo que queda y a trasladarlo a un osario común dentro del mismo recinto, y el hueco se vuelve a ofrecer. No es un procedimiento oculto ni excepcional: está en las ordenanzas municipales y ocurre continuamente, sobre todo con enterramientos de familias que se mudaron de ciudad o que se extinguieron sin dejar a nadie.",
        destacado: { tipo: "cifra", cifra: "50", unidad: "años dura una concesión larga" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El resultado es que un cementerio español es, en la práctica, un espacio que se recicla, y que la idea de descansar para siempre en un sitio concreto depende de que alguien siga pagando cada cierto número de años. Es justo lo contrario de la perpetuidad que se vendía en el modelo de cementerio ajardinado del siglo XIX, y responde exactamente a lo mismo: falta de espacio y coste de mantenimiento. En los últimos años, además, la incineración ha pasado de ser minoritaria a superar la mitad de los casos en muchas ciudades.",
      },
    ],
  },
];
