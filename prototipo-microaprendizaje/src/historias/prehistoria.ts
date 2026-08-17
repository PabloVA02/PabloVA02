import type { Short } from "../shorts";

/* ==========================================================================
   Prehistoria.

   Lo que pasó antes de que nadie escribiera nada. El riesgo aquí es doble:
   la fecha astronómica que no dice nada —«hace cuatrocientos mil años»— y el
   hombre de las cavernas de dibujos animados.

   La regla del tema: siempre hay un OBJETO. Una lanza, un techo pintado, un
   hueso con marcas. Se cuenta la pieza que se puede tocar y, a partir de
   ella, lo que se deduce de quien la hizo. Sin objeto no hay short: hay
   especulación.

   Y las cifras se traducen a algo humano. Trescientos mil años no significa
   nada; que la madera aguantara ahí abajo mientras nuestra especie ni
   existía, sí.
   ========================================================================== */

export const PREHISTORIA: Short[] = [
  {
    id: "lanzas-madera",
    titulo: "Lanzas de 300.000 años",
    gancho: "Son de madera y no deberían existir: la madera se pudre. Estas cayeron en el sitio exacto.",
    categoria: "Prehistoria",
    color: "var(--forest)",
    encargo: "Una vara de madera oscura y afilada, tumbada sobre arena húmeda.",
    fotos: [
      {
        archivo: "Senden, Venner Moor -- 2016 -- 5866.jpg",
        autor: "Un tocón afilado asomando en el lago helado de una antigua turbera, en Westfalia. Fotografía de Dietmar Rabich.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Senden,_Venner_Moor_--_2016_--_5866.jpg",
        foco: "50% 45%",
        alt: "Una punta de madera negra saliendo del agua oscura de un lago, recortada contra el brillo del hielo.",
      },
      {
        archivo: "Senden, Venner Moor -- 2016 -- 5886.jpg",
        autor: "La vegetación de una turbera: debajo, el suelo encharcado que conserva la madera durante milenios. Fotografía de Dietmar Rabich.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Senden,_Venner_Moor_--_2016_--_5886.jpg",
        foco: "50% 45%",
        alt: "Helechos secos de color cobre entre troncos finos, iluminados por el sol bajo del invierno.",
      },
      {
        archivo: "Askania-Nova Steppe 24 Przewalski's Horses (YDS 1683).jpg",
        autor: "Caballos salvajes en la estepa de Askania-Nova, en Ucrania. Fotografía de Nataliya Shestakova.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Askania-Nova_Steppe_24_Przewalski%27s_Horses_(YDS_1683).jpg",
        foco: "50% 50%",
        alt: "Una manada de caballos pardos de crin corta pastando en una llanura de hierba seca bajo un cielo amplio.",
      },
      {
        archivo: "2019-09-01 ISTAF 2019 Javelin throw (Martin Rulsch) 037.jpg",
        autor: "Un lanzamiento de jabalina en una competición de atletismo. Fotografía de Martin Rulsch.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:2019-09-01_ISTAF_2019_Javelin_throw_(Martin_Rulsch)_037.jpg",
        foco: "50% 40%",
        alt: "Una jabalina saliendo despedida hacia arriba en el momento del lanzamiento, sobre el césped de un estadio.",
      },
    ],
    entrada:
      "Alemania, 1994. Unos arqueólogos excavan en una mina de carbón a cielo abierto, en un terreno que hace trescientos mil años era la orilla de un lago. Entre el barro empiezan a asomar unas varas larguísimas, más altas que un hombre, afiladas por los dos extremos y con la superficie todavía lisa. Nadie esperaba encontrar algo así, y no por falta de interés: la madera se pudre. De todo lo que fabricaron nuestros antepasados, lo de madera es precisamente lo que nunca llega, y a esa edad no debería quedar ni el rastro de una astilla. Aquellas ocho varas cambiaron lo que se creía saber sobre quién las hizo.",
    paginas: [
      {
        rotulo: "Por qué se salvaron",
        texto:
          "Se conservaron por pura chiripa. Cayeron a un fondo encharcado y quedaron enterradas en un sedimento sin oxígeno, que es lo único capaz de impedir que las bacterias se coman la madera: llevaban ahí abajo trescientos mil años, como en conserva. Aparecieron ocho, de abeto y de pino, de entre dos metros y dos metros y medio. Y estaban trabajadas con criterio: el punto más grueso cae a un tercio de la punta, exactamente donde lo lleva una jabalina olímpica para volar recta.",
        destacado: { tipo: "frase", frase: "El punto de equilibrio está donde lo pone una jabalina olímpica." },
      },
      {
        rotulo: "Quién las hizo",
        texto:
          "No las hizo nuestra especie, que por entonces ni siquiera había salido de África. En Europa vivían antepasados de los neandertales, gente descrita durante décadas como carroñeros que apenas planificaban nada. Aquellas varas dicen otra cosa: hay que escoger el árbol, quitarle la corteza, secar la madera despacio para que no se raje y equilibrarla, y todo eso son días de trabajo dedicados a un objeto que se usará más adelante. Alrededor aparecieron los huesos de más de veinte caballos, con marcas de despiece.",
        destacado: { tipo: "cifra", cifra: "20", unidad: "caballos despiezados alrededor" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Un atleta profesional probó una réplica y la mandó a setenta metros, aunque los arqueólogos creen que se usaban más de cerca, clavándolas a mano. El hallazgo obligó a reescribir los manuales: no eran palos afilados, eran armas diseñadas por alguien que preparaba una cacería con días de antelación y sabía a qué animal iba. La madera sale del barro tan blanda que hay que mantenerla mojada para siempre, así que se exponen dentro de vitrinas llenas de líquido, como peces.",
      },
    ],
  },

  {
    id: "altamira",
    titulo: "Altamira la vio una niña",
    gancho: "Su padre defendió que eran prehistóricas y lo llamaron falsificador. Murió sin que le creyeran.",
    categoria: "Prehistoria",
    color: "var(--clay)",
    encargo: "Un techo de roca abombado con bisontes en rojo y negro, iluminado de lado.",
    fotos: [
      {
        archivo: "Altamira bisons.jpg",
        autor: "Reproducción del techo de bisontes de Altamira en el Museo del Mamut de Barcelona. Fotografía de Thomas Quine.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Altamira_bisons.jpg",
        foco: "50% 50%",
        alt: "Bisontes pintados en ocre y negro sobre la roca, unos encogidos y otros de pie, muy juntos.",
      },
      {
        archivo: "Altamira, bison, museum.JPG",
        autor: "Bisonte del facsímil del techo de Altamira, en el museo Anthropos de Brno.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Altamira,_bison,_museum.JPG",
        foco: "50% 50%",
        alt: "Un bisonte pintado en rojo y negro sobre la roca, con el lomo aprovechando un bulto de la piedra.",
      },
      {
        archivo: "Altamira, bison, museum 02.JPG",
        autor: "Otro bisonte de la reproducción del techo de Altamira, museo Anthropos de Brno.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Altamira,_bison,_museum_02.JPG",
        foco: "50% 50%",
        alt: "Figura de bisonte pintada sobre roca clara, con los cuernos y la pezuña marcados en negro.",
      },
      {
        archivo: "Altamira, bison, museum 03.JPG",
        autor: "Detalle de la reproducción del techo de Altamira en el museo Anthropos de Brno.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Altamira,_bison,_museum_03.JPG",
        foco: "50% 50%",
        alt: "Pintura rupestre de un bisonte agachado, con el pigmento rojizo extendido sobre la piedra.",
      },
    ],
    entrada:
      "Cantabria, en el norte de España, 1879. Un terrateniente aficionado a la arqueología lleva meses escarbando el suelo de una cueva que hay en sus tierras, cerca de casa, buscando huesos y herramientas de piedra como las que ha visto en una exposición de París. Ese día lleva consigo a su hija de ocho años porque no tiene con quién dejarla. La niña se aburre enseguida, se mete con la vela por un lateral que su padre no ha mirado nunca y hace lo único que a él no se le había ocurrido en meses: levantar la vista.",
    paginas: [
      {
        rotulo: "El techo",
        texto:
          "Lo que había encima eran bisontes. Más de veinte animales pintados en rojo y en negro sobre la roca, algunos de casi dos metros, aprovechando los bultos naturales del techo para dar volumen a los lomos. La niña lo llamó a gritos. Su padre publicó el hallazgo al año siguiente sosteniendo que aquello era prehistórico, y lo que recibió a cambio fue una acusación de fraude: media Europa decidió que era imposible que unos salvajes pintaran así, y que aquello lo había hecho un artista de la época.",
        destacado: { tipo: "frase", frase: "«Es imposible que unos salvajes pintaran así», dijeron los expertos." },
      },
      {
        rotulo: "La condena",
        texto:
          "La campaña en contra fue dura y personal. Se insinuó que había pagado a un pintor mudo que se alojaba en su casa, se le acusó de buscar notoriedad y las revistas científicas dejaron de citarle. Murió en 1888 sin que nadie le diera la razón. Catorce años después aparecieron cuevas parecidas en el sur de Francia, imposibles de falsificar porque estaban selladas por derrumbes, y el arqueólogo francés que más lo había atacado publicó un artículo titulado, sin rodeos, «Mea culpa de un escéptico».",
        destacado: { tipo: "cifra", cifra: "22", unidad: "años se tardó en darle la razón" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Las pinturas tienen entre catorce mil y treinta y seis mil años y hoy se consideran de lo mejor conservado del arte prehistórico. También estuvieron a punto de perderse por el éxito: en los años setenta entraban ciento cincuenta mil visitantes al año, y el vaho y el calor de tantos cuerpos criaron hongos sobre los pigmentos. La cueva se cerró en 1977. Ahora se visita una réplica exacta construida al lado, y al original entran cinco personas por semana, elegidas por sorteo.",
      },
    ],
  },

  {
    id: "fuego-cocina",
    titulo: "Cocinar cambió la cara",
    gancho: "Somos el único animal que no puede alimentarse de lo que le da la naturaleza tal cual.",
    categoria: "Prehistoria",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Unas brasas muy cerca, con la ceniza blanca cubriendo el rojo.",
    entrada:
      "Hace entre un millón y ochocientos mil años, en algún punto de África, un grupo de antepasados nuestros empezó a acercar la comida al fuego antes de comérsela. No fue un invento con fecha, ni con autor, ni con un momento en que a alguien se le encendiera la bombilla: fue una costumbre que se fue extendiendo despacio de un grupo a otro. Y de todas las cosas raras que ha hecho esta especie a lo largo de su historia, esa es probablemente la que más nos cambió el cuerpo por dentro.",
    paginas: [
      {
        rotulo: "La cuenta de energía",
        texto:
          "Un alimento cocinado se digiere muchísimo mejor: el calor rompe las fibras y deshace las proteínas, de modo que el cuerpo saca más energía del mismo bocado y con menos trabajo. Un chimpancé pasa entre cinco y seis horas al día masticando; nosotros, menos de una. Ese ahorro se ve en el esqueleto. Nuestras mandíbulas se hicieron pequeñas, los dientes menguaron y el intestino se acortó bastante respecto al de cualquier otro primate de nuestro tamaño.",
        destacado: { tipo: "cifra", cifra: "6 h", unidad: "mastica un chimpancé al día; nosotros, una" },
      },
      {
        rotulo: "Adónde fue",
        texto:
          "Un cerebro es un órgano carísimo de mantener: pesa el dos por ciento del cuerpo y se lleva el veinte por ciento de la energía que gastamos estando quietos. La explicación más extendida sostiene que el intestino más corto liberó justo el presupuesto que el cerebro necesitaba para crecer, y que sin comida cocinada ese crecimiento no habría salido a cuenta. En el registro fósil, el aumento del cráneo coincide a grandes rasgos con las primeras hogueras controladas que se han podido fechar.",
        destacado: { tipo: "frase", frase: "El cerebro pesa el 2 % del cuerpo y gasta el 20 % de la energía." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "No se conoce ninguna cultura humana que coma solo crudo, ni siquiera en climas donde mantener el fuego cuesta un esfuerzo enorme. Y hay una prueba en sentido contrario: los estudios sobre dietas crudívoras estrictas encuentran pérdidas de peso importantes y problemas de fertilidad, porque el cuerpo ya no sabe sacar bastante de lo que come sin ayuda. Dependemos del fuego igual que del agua. Nos hicimos a la cocina hasta el punto de no poder volver atrás.",
      },
    ],
  },
];
