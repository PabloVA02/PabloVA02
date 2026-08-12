import type { Short } from "../shorts";

/* ==========================================================================
   Apellidos.

   El riesgo del tema es la heráldica: escudos, linajes y orígenes nobles
   inventados. Casi todo eso es publicidad tardía.

   La regla del tema: un apellido se cuenta como HERRAMIENTA DE ESTADO.
   Aparece cuando alguien necesita cobrar, reclutar o localizar, y se hace
   hereditario porque un registro lo exige, no porque una familia lo
   decida. Así que en cada short hay que decir quién llevaba la lista y
   para qué la quería.

   Y siempre se traduce lo que significan de verdad, sin adornos.
   ========================================================================== */

export const APELLIDOS: Short[] = [
  {
    id: "apellidos-por-impuestos",
    titulo: "El apellido nació cobrando",
    gancho: "Con dos Juanes en la aldea bastaba un mote. Con un registro fiscal hacía falta algo fijo.",
    categoria: "Apellidos",
    color: "var(--slate)",
    encargo: "Un libro de registro antiguo abierto con columnas de nombres escritos a pluma.",
    fotos: [
      {
        archivo: "Vintage smith's workshop - 0169.jpg",
        autor: "Un herrero forjando sobre el yunque: de este oficio salen Herrero, Smith, Ferrari y Schmidt. Fotografía de Jorge Royan.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Vintage_smith%27s_workshop_-_0169.jpg",
        foco: "50% 45%",
        alt: "Unas manos sujetan con tenazas una barra al rojo sobre un yunque, con el martillo levantado al lado.",
      },
      {
        archivo: "Medieval seal matrix (FindID 974315).jpg",
        autor: "Sello personal medieval, entre 1150 y 1275, con el nombre de su dueño grabado alrededor. Portable Antiquities Scheme.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Medieval_seal_matrix_(FindID_974315).jpg",
        foco: "50% 35%",
        alt: "Un sello ovalado de plomo con una flor de lis en el centro y letras gastadas rodeando el borde.",
      },
      {
        archivo: "-2022-04-01 Remoat view of Saint Giles parish church, Bradfield, Norfolk.JPG",
        autor: "La torre de una iglesia parroquial de Norfolk asomando sobre los setos: allí se guardaban los registros. Fotografía de Kolforn.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:-2022-04-01_Remoat_view_of_Saint_Giles_parish_church,_Bradfield,_Norfolk.JPG",
        foco: "50% 45%",
        alt: "Una torre de piedra cuadrada asomando entre árboles al otro lado de un campo arado.",
      },
      {
        archivo: "Commuters passing Old Xi'erqi Station (20170904083909).jpg",
        autor: "Gente saliendo de una estación a primera hora de la mañana. Fotografía de N509FZ.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Commuters_passing_Old_Xi%27erqi_Station_(20170904083909).jpg",
        foco: "50% 55%",
        alt: "Cientos de personas caminando por una explanada ancha a la salida de una estación.",
      },
    ],
    entrada:
      "Europa, siglos XI a XV. La inmensa mayoría de la gente tiene un solo nombre, y en una aldea de doscientas personas eso funciona sin el menor problema: cuando hay dos que se llaman igual, se les distingue añadiendo el oficio, el nombre del padre, el sitio del que vinieron o directamente un mote sobre su aspecto. Nada de eso es hereditario, nada es oficial y nada está escrito; el mote de un hombre puede cambiar tres veces en su vida y morir con él. Todo eso empieza a congelarse cuando aparece alguien con un libro y ganas de cobrar.",
    paginas: [
      {
        rotulo: "Los cuatro tipos",
        texto:
          "De ahí salen las cuatro familias de apellidos que existen en casi toda Europa. Los patronímicos, que dicen de quién es hijo alguien: en español acabaron en el sufijo que convierte a Fernando en Fernández. Los toponímicos, que indican el lugar de procedencia y explican los apellidos con nombre de pueblo, de río o de accidente del terreno. Los de oficio, como herrero, molinero o pastor, que tienen su equivalente exacto en cada idioma. Y los descriptivos, que empezaron siendo motes sobre el aspecto, el carácter o alguna anécdota concreta.",
        destacado: { tipo: "frase", frase: "Fernández significa, literalmente, hijo de Fernando." },
      },
      {
        rotulo: "El registro",
        texto:
          "Lo que hizo hereditarios esos añadidos fue la administración. Cuando un reino empieza a levantar censos de contribuyentes, listas de propietarios y registros parroquiales de bautismos, necesita que el nombre de una persona sea estable a lo largo de su vida y coincida con el de sus hijos, porque si no resulta imposible saber quién debe qué ni a quién reclamar una deuda. En Inglaterra el proceso está bien documentado entre los siglos XIII y XV; en España se consolidó con los registros parroquiales obligatorios desde mediados del siglo XVI.",
        destacado: { tipo: "cifra", cifra: "4", unidad: "familias: padre, sitio, oficio y mote" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "España conserva una particularidad que sorprende fuera: se llevan dos apellidos, el del padre y el de la madre, y la mujer no cambia el suyo al casarse, algo poco común en Europa y que existe desde hace siglos. Desde 1999 se puede elegir el orden de los dos, y desde 2017 hay que decidirlo al inscribir al recién nacido. La consecuencia práctica es que los apellidos más frecuentes del país son casi todos patronímicos, es decir, hijos de alguien, y entre unos pocos cubren a una parte enorme de la población.",
      },
    ],
  },

  {
    id: "islandia-sin-apellidos",
    titulo: "Islandia no tiene apellidos",
    gancho: "Cada uno se llama hijo o hija de su padre, y la guía telefónica se ordena por el nombre de pila.",
    categoria: "Apellidos",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una guía telefónica abierta con las entradas ordenadas por nombre propio.",
    fotos: [
      {
        archivo: "Mountains Reflected in Pond - Iceland.jpg",
        autor: "Montaña islandesa reflejada en una charca al atardecer, en la costa oeste del país.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AMountains%20Reflected%20in%20Pond%20-%20Iceland.jpg",
        foco: "50% 45%",
        alt: "Cordillera baja de laderas verdes y doradas con la luz del atardecer, reflejada entera en un agua muy quieta.",
      },
      {
        archivo: "Abandoned House and Mountains - Iceland.jpg",
        autor: "Casa abandonada al pie de las montañas, en el campo islandés.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AAbandoned%20House%20and%20Mountains%20-%20Iceland.jpg",
        foco: "50% 50%",
        alt: "Casa blanca de tejado rojo, sola en un prado, con montañas oscuras detrás.",
      },
      {
        archivo: "City View of Reykjavik from Hallgrímskirkja - 2013.08 - panoramio.jpg",
        autor: "Reikiavik vista desde la torre de la iglesia de Hallgrímur, con los tejados de colores.",
        licencia: "CC BY 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ACity%20View%20of%20Reykjavik%20from%20Hallgr%C3%ADmskirkja%20-%202013.08%20-%20panoramio.jpg",
        foco: "50% 50%",
        alt: "Vista de una ciudad pequeña desde arriba, con casas bajas de tejados rojos, azules y verdes junto al mar.",
      },
      {
        archivo: "Snow on the turf roof (Unsplash).jpg",
        autor: "Nieve sobre el tejado de hierba de una casa islandesa tradicional.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ASnow%20on%20the%20turf%20roof%20(Unsplash).jpg",
        foco: "50% 50%",
        alt: "Casa de piedra y madera con el tejado cubierto de hierba y una capa fina de nieve encima.",
      },
    ],
    entrada:
      "Islandia, siglo XXI. Un país de unos cuatrocientos mil habitantes mantiene un sistema de nombres que el resto de Europa abandonó hace siglos: el patronímico vivo, el que se rehace en cada generación. Nadie hereda un apellido y nadie lo transmite. Cada persona lleva el nombre de su padre, o de su madre si así se decide, con una terminación añadida que significa hijo o hija. Eso significa que el nombre completo de alguien no dice de qué familia viene, sino solo de quién es hijo, y que cambia entero cada vez que nace una generación nueva.",
    paginas: [
      {
        rotulo: "Cómo funciona",
        texto:
          "Si el padre se llama de una manera, el hijo llevará ese nombre más la terminación que significa hijo, y la hija el mismo nombre con la terminación que significa hija. Ninguno de los dos comparte apellido con su padre ni entre sí, y al casarse nadie cambia nada. En consecuencia, en una familia de cuatro puede haber cuatro apellidos distintos, lo que crea complicaciones constantes en los aeropuertos extranjeros. Se admite también el matronímico, y desde 2019 existe una terminación neutra para quien no quiera ninguna de las dos anteriores.",
        destacado: { tipo: "frase", frase: "En una familia de cuatro puede haber cuatro apellidos." },
      },
      {
        rotulo: "El listín",
        texto:
          "El sistema obliga a organizarlo todo por el nombre de pila. La guía telefónica se ordena alfabéticamente por el primer nombre, con la profesión al lado para distinguir a los que coinciden, y en la vida corriente se llama a todo el mundo por el nombre, incluidos los ministros y quien preside el país. Existe además un comité oficial que aprueba los nombres nuevos: tienen que poder declinarse según la gramática local y escribirse con el alfabeto del país, y rechaza unas decenas de solicitudes al año, con algún pleito sonado.",
        destacado: { tipo: "cifra", cifra: "400.000", unidad: "habitantes con el sistema en pie" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquel sistema, que era el normal en toda Escandinavia hasta el siglo XX, se congeló allí mientras los países vecinos lo cambiaban por apellidos fijos y heredables. Tiene una consecuencia inesperada y muy útil: como se conocen los nombres de casi todas las generaciones desde la colonización de la isla, existe una base de datos genealógica que enlaza a la práctica totalidad de la población, y se usa para investigar enfermedades hereditarias. Hay incluso una aplicación para comprobar antes de una cita el parentesco con alguien, porque el país es pequeño.",
      },
    ],
  },

  {
    id: "apellidos-por-decreto",
    titulo: "Apellidos repartidos por ley",
    gancho: "En 1787 se obligó a los judíos del imperio austríaco a adoptar uno, y había tarifa según lo bonito.",
    categoria: "Apellidos",
    color: "var(--plum)",
    encargo: "Un decreto impreso del siglo XVIII con sello oficial y texto en columnas.",
    entrada:
      "Imperio austríaco, 1787. Un decreto obliga a la población judía del imperio a adoptar un apellido fijo de estilo alemán y a registrarlo ante un funcionario. Hasta entonces se usaba el patronímico hebreo, que cambia con cada generación y que la administración considera imposible de fiscalizar. El plazo es corto y el trámite tiene precio.",
    paginas: [
      {
        rotulo: "La tarifa",
        texto:
          "Los funcionarios encargados del registro montaron un negocio con el asunto. Según la documentación conservada y los relatos de la época, los apellidos considerados bonitos —los formados con palabras como flor, oro, piedra preciosa o montaña— se cobraban a precios altos, los neutros salían bastante más baratos y a quien no pagaba se le asignaba de oficio uno desagradable, tomado de un defecto físico, de un animal o de un objeto ridículo. Bastantes familias arrastraron durante generaciones un apellido puesto por un empleado de mal humor y con la mano tendida.",
        destacado: { tipo: "frase", frase: "Los apellidos bonitos costaban dinero; los feos se regalaban." },
      },
      {
        rotulo: "Otros decretos",
        texto:
          "No fue un caso aislado ni mucho menos. En los Países Bajos, la administración napoleónica obligó en 1811 a inscribir un apellido a toda la población, y circula la historia de campesinos que eligieron nombres absurdos convencidos de que aquello sería pasajero; los historiadores creen que la mayoría de esos apellidos raros son en realidad motes antiguos ya existentes. Japón obligó a los plebeyos a tener apellido en 1875, con lo que se crearon cientos de miles de golpe, muchos tomados directamente del paisaje que cada familia tenía delante: monte, arrozal, río, puente. Los apellidos japoneses más comunes se leen hoy como una descripción del campo.",
        destacado: { tipo: "cifra", cifra: "1875", unidad: "el año que Japón los hizo obligatorios" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Todos aquellos decretos tenían el mismo objetivo, que no era cultural sino administrativo: poder cobrar impuestos, llamar a filas y localizar a cada persona dentro de una lista ordenada. Un apellido es, antes que una herencia familiar, una herramienta de Estado. Después de la Segunda Guerra Mundial, muchas familias cambiaron los apellidos impuestos en 1787 por otros elegidos por ellas, y varios países aprobaron leyes para facilitarlo. Y en unos cuantos sitios de Europa hay gente que se apellida piedra, flor u oro en su idioma sin saber que un antepasado suyo pagó por ello en una ventanilla.",
      },
    ],
  },
];
