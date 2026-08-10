import type { Short } from "../shorts";

/* ==========================================================================
   Islas.

   El riesgo del tema es la postal exótica: el paraíso remoto, el misterio
   sin resolver, los enigmas de la antigüedad. Vende y no informa.

   La regla del tema: una isla se cuenta como un EXPERIMENTO CERRADO. Un
   sitio con límites conocidos donde se puede seguir qué entra, qué sale y
   qué pasa cuando se acaba algo. Por eso interesan: son el único lugar
   donde una historia tiene bordes.

   Y cuando la explicación tradicional está en discusión, se dice qué se
   sabe, qué se ha probado y qué sigue abierto, sin cerrar en falso.
   ========================================================================== */

export const ISLAS: Short[] = [
  {
    id: "estatuas-caminando",
    titulo: "Las estatuas de la isla",
    gancho: "Los isleños lo dijeron siempre y nadie les creyó. Se ha probado con cuerdas y dieciocho personas.",
    categoria: "Islas",
    color: "var(--slate)",
    encargo: "Una estatua de piedra de espaldas al mar, con la base ancha y el cuerpo inclinado.",
    /* Las que llegaron a su plataforma, una de las que se quedaron a medio
       camino —de pie, que es el dato que lo cambia todo—, una de cerca para ver
       el tamaño, y la cantera con la isla pelada detrás. */
    fotos: [
      {
        archivo: "Rapa Nui Moai (Easter Island).jpg",
        autor:
          "Una fila de estatuas sobre su plataforma en Rapa Nui, la isla de Pascua, con el moño de piedra roja puesto. Fotografía de Docrgd, 2010.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Rapa_Nui_Moai_(Easter_Island).jpg",
        foco: "50% 50%",
        alt: "Cinco estatuas de piedra en fila sobre una plataforma baja, con cilindros rojizos encima de la cabeza y una ladera de hierba detrás.",
      },
      {
        archivo: "Moai at Rano Raraku (Easter Island).jpg",
        autor:
          "Una estatua de las que nunca llegaron a su plataforma, en la ladera de la cantera de Rano Raraku. Está de pie y enterrada hasta los hombros. Fotografía de Mc vc, 2019.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Moai_at_Rano_Raraku_(Easter_Island).jpg",
        foco: "50% 55%",
        alt: "Una cabeza y unos hombros de piedra asomando derechos de la hierba de una ladera, con el cielo azul detrás.",
      },
      {
        archivo: "Rapa Nui, Rano Raraku.JPG",
        autor:
          "Otra de la misma ladera, vista desde abajo. Las dos personas del fondo dan la medida: las mayores pasan de las setenta toneladas. Fotografía de Javier Ramos Pinochet, 2012.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Rapa_Nui,_Rano_Raraku.JPG",
        foco: "45% 50%",
        alt: "Una estatua de perfil recortada contra el cielo, con la nariz y el mentón muy marcados, y dos personas diminutas sentadas al fondo.",
      },
      {
        archivo: "Easter Island, Rano Raraku, moais (6686043521).jpg",
        autor:
          "La cantera de Rano Raraku entera, con las estatuas repartidas por la falda y ni un árbol en la isla. Fotografía de Arian Zwegers, 2011.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Easter_Island,_Rano_Raraku,_moais_(6686043521).jpg",
        foco: "50% 60%",
        alt: "Una loma de roca oscura cubierta de hierba, con decenas de estatuas pequeñas repartidas por la ladera y ningún árbol a la vista.",
      },
    ],
    entrada:
      "Pacífico sur, siglo XVII. En una isla de veinticuatro kilómetros de largo, a tres mil quinientos kilómetros de la costa más cercana, hay casi un millar de estatuas de piedra de hasta ochenta toneladas. Están talladas en una misma cantera y repartidas por plataformas de toda la costa. La isla no tiene árboles grandes, ni animales de tiro, ni ruedas, y sus habitantes eran unos pocos miles. Nadie de fuera sabe cómo se movieron esas piedras, y durante dos siglos se dio por hecho que la explicación tenía que ser que las arrastraron tumbadas sobre troncos. Los propios isleños contaban otra cosa, y nadie les hizo caso.",
    paginas: [
      {
        rotulo: "Los troncos",
        texto:
          "Durante décadas se explicó que las habían tumbado sobre troncos y arrastrado rodando, y de ahí salió la idea de que los isleños talaron todos los árboles hasta quedarse sin bosque y sin comida. Los habitantes, en cambio, contaban otra cosa desde el primer contacto con los europeos: decían que las estatuas habían caminado hasta su sitio. Se tomó como una leyenda religiosa. Había detalles que no encajaban con la versión de los troncos: las figuras que quedaron a medio camino están de pie, no tumbadas, y tienen la base curvada y el cuerpo inclinado hacia delante.",
        destacado: { tipo: "frase", frase: "Las estatuas abandonadas por el camino están de pie." },
      },
      {
        rotulo: "El experimento",
        texto:
          "En 2012 un equipo de arqueólogos hizo la prueba con una réplica de cinco toneladas y la misma forma que las originales. Ataron tres cuerdas, dos a los lados y una por detrás, y con dieciocho personas tirando alternativamente de un lado y de otro consiguieron que la estatua se balanceara sobre su base curva y avanzara a pasos, exactamente igual que se mueve una nevera pesada por la cocina. Recorrieron cien metros en menos de una hora. La base redondeada, que parecía un defecto de talla, resultó ser precisamente lo que hace posible el movimiento.",
        destacado: { tipo: "cifra", cifra: "18", unidad: "personas para hacerla andar" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El experimento no cierra la discusión, porque otros investigadores sostienen que las mayores, de setenta u ochenta toneladas, difícilmente se movieron así. Sí ha cambiado, en cambio, el relato del colapso: los estudios recientes apuntan a que la deforestación la aceleraron sobre todo unas ratas llegadas en las canoas, que se comían las semillas de las palmeras, y que la población se hundió de verdad con las enfermedades europeas y los barcos negreros. Y ha dejado una lección incómoda: los isleños llevaban tres siglos explicándolo bien y nadie tomó nota.",
      },
    ],
  },

  {
    id: "isla-que-se-hundio",
    titulo: "Tres banderas, ninguna isla",
    gancho: "Emergió del Mediterráneo en 1831, le clavaron tres banderas y desapareció antes de fin de año.",
    categoria: "Islas",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una columna de vapor saliendo del mar abierto bajo un cielo cargado.",
    fotos: [
      {
        archivo: "Kavachi Eruption.jpg",
        autor: "Erupción del volcán submarino Kavachi, islas Salomón, 2016. Fotografía de Alex DeCiccio.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Kavachi_Eruption.jpg",
        foco: "50% 50%",
        alt: "Una columna oscura de ceniza y agua reventando en la superficie del mar abierto bajo un cielo nublado.",
      },
      {
        archivo: "John Ward of Hull - Warships on a calm sea.jpg",
        autor: "«Barcos de guerra en mar en calma», óleo de John Ward de Hull, primera mitad del siglo XIX.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:John_Ward_of_Hull_-_Warships_on_a_calm_sea.jpg",
        foco: "50% 50%",
        alt: "Pintura de varios navíos de guerra de vela fondeados en un mar liso, con las banderas colgando.",
      },
      {
        archivo: "Халатырский пляж на Камчатке.jpg",
        autor: "Playa de arena volcánica negra batida por el oleaje, Jalaktyrski, Kamchatka. Fotografía de tanysolovey, 2021.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:%D0%A5%D0%B0%D0%BB%D0%B0%D1%82%D1%8B%D1%80%D1%81%D0%BA%D0%B8%D0%B9_%D0%BF%D0%BB%D1%8F%D0%B6_%D0%BD%D0%B0_%D0%9A%D0%B0%D0%BC%D1%87%D0%B0%D1%82%D0%BA%D0%B5.jpg",
        foco: "50% 50%",
        alt: "Olas rompiendo sobre una playa de arena negra de origen volcánico, con la espuma corriendo hacia la orilla.",
      },
      {
        archivo: "Mountains and sea from Solunto.jpg",
        autor: "El mar frente a la costa norte de Sicilia, visto desde Solunto, 2023. Fotografía de Oxidising.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Mountains_and_sea_from_Solunto.jpg",
        foco: "50% 55%",
        alt: "Vista del mar azul y las montañas de la costa siciliana desde un promontorio.",
      },
    ],
    entrada:
      "Mediterráneo, julio de 1831. A unos sesenta kilómetros de la costa sur de Sicilia, los marineros que pasan por la zona ven salir del agua una columna de humo y de ceniza que se levanta cientos de metros. Es un volcán submarino en erupción, y en pocas semanas asoma sobre el agua una isla de cuatro kilómetros y medio de perímetro y sesenta metros de altura, con su playa de arena negra y su cráter humeando en el centro. Aparece en mitad de una de las rutas de navegación más transitadas del mundo, y eso lo cambia todo.",
    paginas: [
      {
        rotulo: "Tres banderas",
        texto:
          "El sitio era estratégico, en mitad de una ruta muy transitada, así que la carrera fue inmediata. Un capitán británico desembarcó primero, plantó una bandera y le puso el nombre de un almirante. El reino que gobernaba Sicilia mandó un barco con otra bandera y otro nombre distinto. Francia envió a un geólogo con una tercera, y desde España se llegó a hablar de reclamarla también. Hubo notas diplomáticas, artículos de prensa y juristas discutiendo a quién pertenece una tierra que no existía el mes anterior, mientras la isla seguía echando humo por el centro.",
        destacado: { tipo: "cifra", cifra: "3", unidad: "banderas clavadas en seis meses" },
      },
      {
        rotulo: "La desaparición",
        texto:
          "El problema era el material. Aquella isla no estaba hecha de roca sólida sino de ceniza y de fragmentos sueltos, amontonados por la erupción y sin nada que los uniera entre sí. En cuanto el volcán se calmó, en agosto, el oleaje empezó a comérsela por los bordes a ojos vista, día tras día. En octubre era un banco de arena a ras de agua y en diciembre había desaparecido del todo, dejando una cima sumergida a unos seis metros de la superficie. Las banderas, los nombres y las notas diplomáticas se quedaron sin territorio al que referirse.",
        destacado: { tipo: "frase", frase: "Era ceniza apilada: el oleaje se la comió por los bordes." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El volcán sigue vivo ahí abajo y ha vuelto a asomar varias veces a lo largo de los siglos, siempre con el mismo final. En el año 2000, ante los indicios de una erupción nueva, un submarinista italiano bajó y colocó una placa de mármol en la cima sumergida reclamando por adelantado la propiedad para su país; la placa apareció partida al poco tiempo y nunca se supo por quién. Es probablemente el único trozo de tierra del mundo con una reclamación territorial esperando, bajo el agua, a que el suelo vuelva a salir a flote.",
      },
    ],
  },

  {
    id: "isla-nueva-cerrada",
    titulo: "Una isla nueva que nadie pisa",
    gancho: "Nació en 1963 y se cerró al público para ver qué llega solo. Apareció una tomatera.",
    categoria: "Islas",
    color: "var(--plum)",
    curioso: true,
    encargo: "Una isla pequeña de roca negra rodeada de mar gris, vista desde el aire.",
    entrada:
      "Sur de Islandia, noviembre de 1963. Unos pescadores ven humo saliendo del mar a media mañana y creen que es un barco ardiendo. Es una erupción submarina. En pocos días asoma una isla que sigue creciendo durante tres años y medio, hasta alcanzar casi tres kilómetros cuadrados de roca volcánica negra y completamente estéril, sin una brizna de hierba.",
    paginas: [
      {
        rotulo: "El laboratorio",
        texto:
          "Los científicos islandeses entendieron enseguida lo que tenían delante: una superficie sin una sola semilla, sin un insecto y sin un microbio, en la que se podía observar desde el minuto cero cómo coloniza la vida un terreno nuevo. Se prohibió el acceso a todo el mundo salvo a unos pocos investigadores con permiso, con reglas estrictas para no llevar nada pegado a la ropa ni a las suelas de las botas. Las primeras semillas llegaron flotando al año siguiente; la primera planta con flor brotó en 1965 y las primeras gaviotas anidaron en 1970.",
        destacado: { tipo: "frase", frase: "Sin una semilla, sin un insecto y sin un microbio." },
      },
      {
        rotulo: "La tomatera",
        texto:
          "En 1970, un investigador encontró una tomatera creciendo con muy buena salud en una zona de arena. No había llegado flotando: las semillas de tomate resisten el paso por el aparato digestivo humano, y alguien del equipo había hecho sus necesidades detrás de una roca. La planta se arrancó y se destruyó de inmediato, y el episodio sirvió para endurecer el protocolo, con letrinas obligatorias y control de residuos. Hoy en la isla hay unas setenta especies de plantas, decenas de especies de aves nidificando y hasta lombrices, todas llegadas por su cuenta.",
        destacado: { tipo: "cifra", cifra: "70", unidad: "especies de plantas llegadas solas" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La isla lleva sesenta años encogiendo, porque el oleaje se come el material suelto igual que en cualquier otra isla volcánica joven; ha perdido ya más de la mitad de su superficie y las estimaciones le dan unos cuantos siglos antes de quedar reducida a un islote de la parte más dura. Mientras dure, es el mejor registro que existe de cómo se instala la vida en un sitio vacío, con fecha exacta de comienzo. Y sigue prohibido desembarcar sin permiso, precisamente para que lo que llegue allí siga llegando por sí solo.",
      },
    ],
  },
];
