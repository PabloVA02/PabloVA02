import type { Short } from "../shorts";

/* ==========================================================================
   Los peregrinos.

   Millones de personas cruzando Europa a pie durante siglos, con una
   infraestructura entera montada alrededor. El tema se estropea si se cuenta
   como devoción: hay que contarlo como movimiento de gente, con sus rutas,
   sus posadas, sus estafas y sus papeles.

   La regla del tema: se cuenta la LOGÍSTICA. Dónde se dormía, qué se comía,
   quién cobraba, cómo se demostraba que habías llegado. La fe es el motivo,
   pero lo que hay que explicar es cómo se sostenía materialmente un viaje de
   mil kilómetros hecho andando por gente sin dinero.
   ========================================================================== */

export const PEREGRINOS: Short[] = [
  {
    id: "la-primera-guia-de-viaje",
    titulo: "La primera guía de viaje",
    gancho: "Siglo XII: qué ríos matan al caballo, qué posaderos engañan y cuántos días hay de etapa en etapa.",
    categoria: "Peregrinos",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un libro medieval abierto con letra apretada y una inicial pintada en rojo.",
    /* De arriba abajo del short: el libro, el río del que avisa, la catedral
       que describe y quien lo sigue haciendo ochocientos años después. */
    fotos: [
      {
        archivo: "Códice Calixtino (Catedral de Santiago de Compostela).jpg",
        autor:
          "El Códice Calixtino, manuscrito iluminado del siglo XII. Archivo de la catedral de Santiago de Compostela. Fotografía de Manuel, 2008.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:C%C3%B3dice_Calixtino_(Catedral_de_Santiago_de_Compostela).jpg",
        foco: "50% 50%",
        alt: "Un códice medieval abierto sobre fondo negro, con una página iluminada en rojo y oro y otra de letra apretada.",
      },
      {
        archivo: "Rio Arga en Puente la Reina.jpg",
        autor:
          "El río Arga a su paso por Puente la Reina, Navarra, uno de los ríos que el libro clasifica. Fotografía de aherrero, 2009.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Rio_Arga_en_Puente_la_Reina.jpg",
        foco: "50% 45%",
        alt: "Un río quieto que refleja una arboleda de otoño en rojos y amarillos.",
      },
      {
        archivo: "Catedral de Santiago de Compostela, Panorama del Portico de la Gloria.jpg",
        autor:
          "La fachada del Obradoiro de la catedral de Santiago de Compostela, el destino que el libro describe con sus medidas y sus puertas. Fotografía de D. Rovchak, 2013.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Catedral_de_Santiago_de_Compostela,_Panorama_del_Portico_de_la_Gloria.jpg",
        foco: "40% 50%",
        alt: "La fachada barroca de la catedral de Santiago iluminada por el sol bajo, recortada contra un cielo de tormenta.",
      },
      {
        archivo: "Camino de Santiago (5364961214).jpg",
        autor:
          "Un peregrino en la meseta entre Burgos y León, noviembre de 2010. Fotografía de Rocco Rossi.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Camino_de_Santiago_(5364961214).jpg",
        foco: "50% 55%",
        alt: "Un caminante de espaldas con mochila grande, siguiendo un sendero de tierra por una llanura sin árboles.",
      },
    ],
    entrada:
      "Europa, hacia 1140. Un códice reúne cinco libros sobre el santuario del noroeste de la península. El quinto no se parece a nada anterior: es un manual práctico para quien va a hacer el camino a pie. Divide la ruta en etapas, nombra los ríos, evalúa las posadas y advierte de los peligros con una franqueza que no ha envejecido nada. Dice qué agua mata al caballo que la bebe, qué posaderos cobran de más y qué pueblos conviene cruzar sin pararse. Es, ochocientos años antes de que existiera la palabra, exactamente una guía de viaje. Y está escrita con la mala leche de alguien que ha hecho el camino y ha pagado de más.",
    paginas: [
      {
        rotulo: "El agua",
        texto:
          "El capítulo más famoso es una lista de ríos con veredicto: en este se puede beber, en este otro no, y en aquel el agua mata a las caballerías. El autor cuenta que vio a unos lugareños afilar el cuchillo junto a un arroyo mientras animaban a los peregrinos a que abrevaran allí a sus monturas, para quedarse con la carne del animal muerto. Detalla también qué comarcas tienen buen pan y buen vino, cuáles están llenas de moscas y en cuáles conviene no dormir al raso. Y opina sobre el carácter de sus habitantes con una crudeza que hoy costaría publicar.",
        destacado: { tipo: "frase", frase: "Animaban a beber a los caballos para quedarse con la carne." },
      },
      {
        rotulo: "Los tramos",
        texto:
          "Además de avisar, organiza. El libro divide el camino en trece etapas grandes y enumera los santuarios que hay que visitar. Describe la catedral de destino con sus medidas y sus puertas. Y explica cómo se reparten las ofrendas que deja la gente. Da consejos sobre los cambistas, que engañaban con las monedas de cada reino, y sobre los guías falsos. Está escrito en latín y pensado para leerse en voz alta a grupos que en su mayoría no sabían leer. Eso explica su tono de aviso repetido y su gusto por las listas fáciles de recordar.",
        destacado: { tipo: "cifra", cifra: "13", unidad: "etapas en que dividía el camino" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el manuscrito, que se conserva en la catedral de destino y que fue robado en 2011 por un antiguo empleado, apareciendo un año después en el garaje de su casa. Y quedó el género: aquel quinto libro es el antepasado directo de cualquier guía de viaje moderna, con sus etapas, sus alojamientos recomendados y sus avisos. Ocho siglos después, las guías del mismo camino siguen diciendo lo mismo: dónde dormir, dónde beber y de quién fiarse. La diferencia es que ya nadie afila un cuchillo junto al río esperando a que pase un caballo sediento.",
      },
    ],
  },
  {
    id: "la-concha-y-el-papel",
    titulo: "La concha era el recibo",
    gancho: "Era el recibo del viaje, se vendía solo en el destino y falsificarla podía costar la excomunión.",
    categoria: "Peregrinos",
    color: "var(--slate)",
    encargo: "Una concha de vieira atada con un cordel a un zurrón de cuero gastado.",
    fotos: [
      {
        archivo: "2010-Catedral de Santiago de Compostela-Galicia (Spain) 3.jpg",
        autor: "Las torres de la catedral de Santiago de Compostela, 2010. Fotografía de Luis Miguel Bugallo Sánchez.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:2010-Catedral_de_Santiago_de_Compostela-Galicia_(Spain)_3.jpg",
        foco: "50% 45%",
        alt: "Las torres barrocas de la catedral de Santiago recortadas contra un cielo azul, con los tejados rojos de la ciudad delante.",
      },
      {
        archivo: "Close-up view on Pecten maximus (Ifremer 00618-73027 - 28923).jpg",
        autor: "Vieira viva (Pecten maximus), la concha de Santiago, en el fondo marino. Fotografía de Matthias Huber, Ifremer.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Close-up_view_on_Pecten_maximus_(Ifremer_00618-73027_-_28923).jpg",
        foco: "50% 50%",
        alt: "Una vieira abierta en el fondo del mar, con las estrías de la concha y el borde del manto visibles.",
      },
      {
        archivo: "Lead alloy Medieval Pilgrim badge (FindID 768597).jpg",
        autor: "Insignia de peregrino de aleación de plomo, siglos XIV a XVI, hallada en Inglaterra. Portable Antiquities Scheme.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Lead_alloy_Medieval_Pilgrim_badge_(FindID_768597).jpg",
        foco: "50% 50%",
        alt: "Una insignia medieval de plomo calada, con una figura dentro de un marco arquitectónico rematado por una cruz.",
      },
      {
        archivo: "Camino Primitivo, marcador Asturias-Galicia.jpg",
        autor: "Mojón del Camino Primitivo en la raya entre Asturias y Galicia, 2019. Fotografía de Simon Burchell.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Camino_Primitivo,_marcador_Asturias-Galicia.jpg",
        foco: "50% 50%",
        alt: "Un mojón de piedra con la concha amarilla del camino, en medio del monte.",
      },
    ],
    entrada:
      "Europa, siglos XII a XV. Un peregrino que vuelve de un santuario lejano necesita demostrarlo: ha estado meses fuera, ha gastado el dinero de su casa y, en muchos casos, viajaba para cumplir una promesa o una condena. La prueba es un objeto pequeño que solo se consigue en el destino y que se cose a la ropa o al sombrero, bien a la vista, para que cualquiera lo reconozca de lejos.",
    paginas: [
      {
        rotulo: "El distintivo",
        texto:
          "El sistema estaba bien organizado y cada gran santuario tenía el suyo, distinto y reconocible. Una concha de vieira en el del noroeste peninsular. Unas palmas en el de Tierra Santa. Una insignia de plomo con la imagen del santo en otros. Se vendían en puestos autorizados junto a la iglesia, y la venta era un ingreso importante, tan importante que hubo pleitos entre obispados por el monopolio. Falsificarlas o venderlas por el camino estaba perseguido con penas eclesiásticas, precisamente porque el objeto valía como certificado y no como recuerdo.",
        destacado: { tipo: "frase", frase: "Era un certificado, no un recuerdo: por eso se perseguía la copia." },
      },
      {
        rotulo: "El salvoconducto",
        texto:
          "Con la concha viajaba el papel. Antes de salir, el peregrino conseguía en su parroquia una carta que decía quién era y adónde iba. Esa carta funcionaba como salvoconducto. Le abría las puertas de los hospitales de peregrinos, donde se dormía y se comía gratis unas noches. Y evitaba que lo tomaran por vagabundo, algo castigado con dureza. Al llegar al destino se sellaba, y ese sello era la prueba definitiva. El sistema, con otro nombre y otros sellos, sigue funcionando exactamente igual hoy, y sin él muchos albergues no dejan pasar a nadie.",
        destacado: { tipo: "cifra", cifra: "3", unidad: "noches gratis solía dar cada hospital" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó la concha, convertida en el símbolo del camino y en la señal amarilla que marca la ruta. Quedó la credencial con sus sellos, que hoy se rellena en albergues y bares y que sigue dando derecho a dormir barato y a un certificado al llegar. Y quedó una palabra: a los que volvían con la palma de Tierra Santa se les llamaba palmeros, y de ahí viene el apellido. La lógica de fondo es la misma de entonces: un viaje largo solo cuenta si puedes demostrar que lo has hecho.",
      },
    ],
  },
  {
    id: "condenados-a-peregrinar",
    titulo: "Condenado a andar mil kilómetros",
    gancho: "En lugar de cárcel o multa: andar mil kilómetros y volver con la prueba sellada.",
    categoria: "Peregrinos",
    color: "var(--plum)",
    curioso: true,
    encargo: "Un camino de tierra entre campos, con un mojón de piedra en primer plano.",
    entrada:
      "Países Bajos y norte de Europa, siglos XIV a XVI. Los tribunales de varias ciudades comerciales imponen una pena poco habitual a quien ha cometido delitos de sangre, injurias o peleas graves: la peregrinación judicial. La sentencia fija el destino, el plazo y la obligación de volver con un documento sellado que demuestre que se ha llegado.",
    paginas: [
      {
        rotulo: "La sentencia",
        texto:
          "Las actas conservadas son sorprendentemente precisas. Fijan el santuario según la gravedad del delito, con una escala clara. Los más leves se pagaban con un viaje corto dentro de la región. Los graves, con destinos a mil o dos mil kilómetros. Los peores, con el santuario más lejano que hubiera. Se anotaba la fecha límite de regreso, a veces la ruta obligatoria y las ciudades por las que había que pasar. Para la ciudad tenía una ventaja doble: se quitaba de encima durante meses a alguien conflictivo sin coste de prisión, y el condenado pagaba su propio castigo con sus piernas y su bolsillo.",
        destacado: { tipo: "frase", frase: "Cuanto peor el delito, más lejos había que llegar." },
      },
      {
        rotulo: "El negocio",
        texto:
          "Como pasa siempre que un castigo se puede comprar, apareció el mercado. Había hombres que se ofrecían a hacer el viaje en lugar del condenado, por dinero, y ciudades que permitían conmutar la pena por una cantidad destinada a obras públicas. Se llegó a profesionalizar: existían peregrinos de oficio que encadenaban encargos y volvían con varios certificados de una tacada. Los tribunales respondieron endureciendo los requisitos: sellos intermedios por el camino, plazos más ajustados y descripciones físicas del penado escritas en el propio documento, para que no lo hiciera otro por él.",
        destacado: { tipo: "cifra", cifra: "2.000", unidad: "kilómetros podía imponer una sentencia" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La práctica desapareció en el siglo XVI, con la Reforma y con las primeras cárceles modernas, pero dejó los archivos. Son una mina para los historiadores: gracias a esas sentencias sabemos cuánta gente recorría los caminos, de dónde salía y qué precio exacto tenía cada delito en cada ciudad. Y quedó una idea que ha vuelto por otra puerta. Castigar obligando a hacer algo trabajoso y comprobable, en lugar de encerrar a alguien, es el mismo razonamiento que hay detrás de los trabajos en beneficio de la comunidad que imponen hoy los juzgados.",
      },
    ],
  },
];
