import type { Short } from "../shorts";

/* ==========================================================================
   Crimenes y desapariciones.

   El criterio para entrar aqui no es lo truculento: es que haya un GIRO. Un
   detalle que da la vuelta a lo que creias, o una pieza que nunca encajo.
   Nada de recrearse en la violencia, que ni engancha ni se sostiene diez
   historias seguidas; lo que engancha es no poder dejar de pensarlo.

   La regla del tema, despues de la revision de Pablo: NADA DE FRASES
   PICADAS, que es el vicio del genero. Los nombres de victimas y de policias
   se sustituyen por lo que son ("el chico", "el funcionario encargado de
   vigilarlo"), porque un nombre que no se reconoce es un frenazo y aqui
   salian a seis por short. Cada aparato o procedimiento se explica antes de
   usarlo: que es un sextante, que es un criptograma, que hace un analisis de
   isotopos. Y la pagina 3 dice siempre lo que quedo, no un dato mas.
   ========================================================================== */

export const CRIMEN: Short[] = [
  {
    id: "dahmer",
    titulo: "Dahmer y el chico devuelto",
    gancho: "Un chico escapó y pidió ayuda en la calle. Tres agentes lo entregaron de vuelta.",
    categoria: "Crimen",
    color: "var(--slate)",
    encargo: "El edificio de apartamentos Oxford, en Milwaukee, o una calle nocturna de la ciudad.",
    fotos: [
      {
        archivo: "Milwaukee pano west night.jpg",
        autor: "Milwaukee, Wisconsin, al anochecer. Fotografía de Dori.",
        licencia: "CC BY-SA 3.0 us",
        fuente: "https://commons.wikimedia.org/wiki/File:Milwaukee_pano_west_night.jpg",
        foco: "50% 50%",
        alt: "Vista amplia de una ciudad al anochecer, con las luces encendidas y el cielo todavía azul.",
      },
      {
        archivo: "Milwaukee January 2023 10 (E. Wisconsin Avenue).jpg",
        autor: "Una avenida del centro de Milwaukee en invierno. Fotografía de Michael Barera.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Milwaukee_January_2023_10_(E._Wisconsin_Avenue).jpg",
        foco: "50% 45%",
        alt: "Una avenida ancha cubierta de nieve sucia entre edificios de piedra, sin nadie en las aceras.",
      },
      {
        archivo: "Revox B77 MK II reel-to-reel audio tape recorder, ca. 1982 (cropped and edited).jpg",
        autor: "Un magnetófono de bobina abierta de los años ochenta. Fotografía de Norbert Schnitzler.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Revox_B77_MK_II_reel-to-reel_audio_tape_recorder,_ca._1982_(cropped_and_edited).jpg",
        foco: "50% 45%",
        alt: "Un magnetófono con dos bobinas de cinta montadas y una hilera de mandos e indicadores debajo.",
      },
      {
        archivo: "Milwaukee November 2022 12 (Milwaukee River from Milwaukee Skywalk).jpg",
        autor: "El río Milwaukee a su paso por el centro de la ciudad. Fotografía de Michael Barera.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Milwaukee_November_2022_12_(Milwaukee_River_from_Milwaukee_Skywalk).jpg",
        foco: "50% 50%",
        alt: "Un río estrecho encajonado entre edificios altos, con puentes y un paseo a la orilla.",
      },
    ],
    entrada:
      "Milwaukee, Estados Unidos, 27 de mayo de 1991, a las tres de la madrugada. Dos mujeres encuentran en la calle a un chico desnudo, aturdido y sangrando, y hacen lo que haría cualquiera: llaman a emergencias y se quedan con él hasta que llegue alguien. Aparece entonces un vecino de aspecto tranquilo y educado que explica que el chico es su novio, que han bebido demasiado y que han discutido. La policía llega a los pocos minutos y tiene delante las dos versiones. Lo que decida hacer en el cuarto de hora siguiente es lo que convierte esto en algo más que un aviso nocturno.",
    paginas: [
      {
        rotulo: "En la calle",
        texto:
          "El chico tenía catorce años, era laosiano y no podía hablar, porque aquel hombre le había perforado el cráneo horas antes. Las dos mujeres que habían llamado insistieron a gritos en que era un menor y en que había escapado de allí. Los agentes las apartaron y no las escucharon, pese a que ellas vivían en el barrio y él acababa de llegar. Acompañaron a los dos hasta el apartamento, notaron un olor muy fuerte y aceptaron la explicación de que era basura sin sacar. En la habitación de al lado había un cadáver que nadie llegó a ver. Se marcharon dejando al chico allí dentro, y esa misma noche murió.",
        destacado: { tipo: "cifra", cifra: "14", unidad: "años tenía el chico" },
      },
      {
        rotulo: "La grabación",
        texto:
          "Al volver al coche, uno de los agentes informó por radio entre risas de lo que acababa de hacer. Dijo que el crío intoxicado había vuelto con su novio y añadió que iban a desinfectarse. Esa llamada quedó grabada, como todas las de la radio policial, y nadie pensó en ella hasta dos meses después. Cuando detuvieron a Dahmer y salió la cinta, los tres agentes fueron despedidos del cuerpo. Dos de ellos recurrieron, fueron readmitidos con los sueldos atrasados y uno acabó elegido agente del año por su sindicato. El caso se estudia desde entonces como el ejemplo de cómo el racismo se disfraza de rutina.",
        destacado: { tipo: "frase", frase: "Las que insistieron eran vecinas. No las creyeron." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó lo más difícil de encajar, que es que aquel hombre no era un desconocido para el sistema. Tres años antes lo habían condenado por abusar de un menor, y ese menor era el hermano mayor del chico. Estaba en libertad vigilada por ese delito la noche en que los agentes le devolvieron al pequeño. El funcionario encargado de vigilarlo nunca visitó el apartamento, aunque lo había pedido varias veces por escrito. Después de aquella madrugada murieron cuatro personas más, hasta que otra víctima logró escapar en julio. Salió a la calle con una esposa todavía puesta en la muñeca, y esa vez sí la creyeron.",
      },
    ],
  },

  {
    id: "cooper",
    titulo: "Cooper saltó con el dinero",
    gancho: "El único secuestro de avión sin resolver de la historia de Estados Unidos.",
    categoria: "Crimen",
    color: "var(--sage)",
    encargo: "Un Boeing 727 de los años setenta, o el retrato robot de D. B. Cooper.",
    fotos: [
      {
        archivo: "Ex-Asia Pacific Airlines Boeing 727-212 Adv F (N319NE).jpg",
        autor: "Un Boeing 727 retirado en un cementerio de aviones del desierto. Fotografía de Quintin Soloviev.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Ex-Asia_Pacific_Airlines_Boeing_727-212_Adv_F_(N319NE).jpg",
        foco: "50% 45%",
        alt: "Fuselaje blanco y verde de un Boeing 727 abandonado en el desierto, con un ala desmontada en el suelo.",
      },
      {
        archivo: "Boeing 727-228-Adv, Ariana Afghan Airlines AN1450645.jpg",
        autor: "Un Boeing 727 en pista, el modelo con la escalerilla trasera que se abre en vuelo.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Boeing_727-228-Adv,_Ariana_Afghan_Airlines_AN1450645.jpg",
        foco: "50% 50%",
        alt: "Avión trirreactor de pasajeros aparcado en la pista, visto de lado.",
      },
      {
        archivo: "Industries of War - Lumber - LOGGING CAMPS IN THE OREGON FOREST. A company street in the woods. The cloudy effect in picture is not due to clouds nor smoke, but to the almost everlasting \"Oregon mist\" or in plain(...) - NARA - 31490027.jpg",
        autor: "Bosque del noroeste de Estados Unidos entre la niebla, la zona donde se perdió el rastro. Archivos Nacionales.",
        licencia: "Public domain",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Industries_of_War_-_Lumber_-_LOGGING_CAMPS_IN_THE_OREGON_FOREST._A_company_street_in_the_woods._The_cloudy_effect_in_picture_is_not_due_to_clouds_nor_smoke,_but_to_the_almost_everlasting_%22Oregon_mist%22_or_in_plain(...)_-_NARA_-_31490027.jpg",
        foco: "50% 50%",
        alt: "Fotografía antigua de un bosque de coníferas altísimas envuelto en niebla espesa.",
      },
      {
        archivo: "Azerbaijan Airlines Boeing 727-235; 4K-AZ2@FRA, July 1996 (5695398251).jpg",
        autor: "Otro Boeing 727 en un aeropuerto europeo, en 1996.",
        licencia: "CC BY-SA 2.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Azerbaijan_Airlines_Boeing_727-235;_4K-AZ2@FRA,_July_1996_(5695398251).jpg",
        foco: "50% 50%",
        alt: "Boeing 727 rodando por la pista con los tres motores en la cola.",
      },
    ],
    entrada:
      "Estados Unidos, 24 de noviembre de 1971, la víspera del día de Acción de Gracias. Un hombre de traje oscuro y corbata compra un billete para un vuelo corto entre dos ciudades del noroeste del país. Ya en el aire le pasa una nota a la azafata, que se la guarda en el bolso sin leerla, creyendo que es un teléfono. Él se inclina y le dice que la lea.",
    paginas: [
      {
        rotulo: "Todo por favor",
        texto:
          "La nota decía que llevaba una bomba, y le enseñó un maletín con cilindros rojos y cables dentro. Pidió doscientos mil dólares en billetes de veinte, cuatro paracaídas y un camión de combustible esperando en la pista. Lo pidió todo por favor, sin levantar la voz y sin que el resto del pasaje se enterara de nada. Al aterrizar dejó bajar a los treinta y seis pasajeros y despegó otra vez con la tripulación mínima. Dio entonces unas instrucciones muy concretas sobre cómo tenía que volar el avión a partir de ese momento. Pidió poca altura, poca velocidad y el tren de aterrizaje bajado, que es la configuración exacta para poder saltar.",
        destacado: { tipo: "cifra", cifra: "200000", unidad: "dólares de 1971" },
      },
      {
        rotulo: "El salto",
        texto:
          "Sobre las ocho de la tarde, con lluvia, siete grados bajo cero y noche cerrada, la rampa trasera del avión se abrió. Aquel modelo tenía una escalerilla que baja por la cola y que se puede abrir en pleno vuelo, cosa que ningún otro avión permitía. Cooper saltó con el dinero atado al cuerpo y nadie volvió a verlo. La búsqueda fue una de las mayores de la historia de la policía federal estadounidense. Batieron el bosque, dragaron ríos e interrogaron a más de mil sospechosos durante años. No apareció ni el cuerpo, ni el paracaídas, ni el maletín, ni un solo billete.",
        destacado: { tipo: "frase", frase: "Aquel avión tenía una escalerilla que se abría en vuelo." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un caso que la policía federal cerró oficialmente en 2016, después de cuarenta y cinco años sin una sola identificación firme. Quedó también lo único que ha aparecido jamás de aquel dinero, y apareció en 1980. Un niño de ocho años que hacía una hoguera a orillas de un río desenterró tres fajos de billetes deshechos. Eran cinco mil ochocientos dólares y los números de serie coincidían con los del rescate. Aquello planteó más preguntas de las que resolvió, porque el sitio quedaba a kilómetros de la zona de salto calculada. Y quedó el cambio que todos notamos: desde entonces esos aviones llevan una pieza que impide abrir la cola en vuelo.",
      },
    ],
  },

  {
    id: "dyatlov",
    titulo: "Rajada por dentro",
    gancho: "Nueve montañeros expertos huyeron descalzos a veinte bajo cero. Nadie sabe de qué.",
    categoria: "Misterios",
    color: "var(--plum)",
    encargo: "Los Urales nevados de noche, o la tienda de la expedición Dyatlov medio enterrada.",
    entrada:
      "Montes Urales, en la Unión Soviética, febrero de 1959. Nueve estudiantes de ingeniería, montañeros con experiencia, acampan en la ladera de una montaña cuyo nombre local significa más o menos «no vayas allí». Cuando el equipo de rescate llega semanas después, encuentra la tienda todavía en pie, con la comida servida y las botas ordenadas. La lona está rajada desde dentro.",
    paginas: [
      {
        rotulo: "Cuesta abajo",
        texto:
          "Las huellas salían de la tienda y bajaban la ladera en calma, sin señal de carrera ni de forcejeo. Eran ocho o nueve pares de pies, algunos descalzos y otros con un solo calcetín, a veinte grados bajo cero. Los dos primeros cuerpos aparecieron a kilómetro y medio, junto a un cedro y en ropa interior. Tenían las manos quemadas y el árbol tenía ramas rotas hasta cinco metros de altura. Alguien había trepado allí arriba a mirar algo, y ese detalle nunca se ha explicado. Otros tres cayeron en el camino de vuelta hacia la tienda, congelados en la postura de estar volviendo.",
        destacado: { tipo: "frase", frase: "Rajaron la lona desde dentro. Nadie huye así de un oso." },
      },
      {
        rotulo: "Los del barranco",
        texto:
          "Los últimos cuatro tardaron dos meses en aparecer, bajo cuatro metros de nieve en un barranco. Y fueron esos cuatro los que convirtieron el caso en un misterio que aún dura. Uno tenía el cráneo hundido y dos tenían el tórax aplastado con una fuerza que el forense comparó con un accidente de coche. Ninguno de ellos tenía heridas por fuera, que es lo que no encaja de ninguna manera. Algunas ropas dieron además radiactividad por encima de lo normal, sin que se supiera de dónde salía. La investigación soviética se cerró con una frase que no explica nada: los mató una fuerza natural irresistible.",
        destacado: { tipo: "cifra", cifra: "9", unidad: "muertos y ninguna explicación" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó descartada la avalancha durante sesenta años, porque la pendiente era demasiado suave y no había rastro de ella. Quedó desmentida esa idea en 2021, cuando dos investigadores suizos publicaron una simulación por ordenador del comportamiento de la nieve. Según ese cálculo, una placa pequeña pudo desprenderse horas después del corte que los montañeros hicieron en la ladera para montar la tienda. Explicaría las fracturas sin heridas externas y explicaría la huida a medio vestir en plena noche. No explica la radiactividad de la ropa ni por qué tres de ellos volvieron hacia arriba. Es la mejor teoría que hay y sigue sin cerrar el caso.",
      },
    ],
  },

  {
    id: "alcatraz",
    titulo: "Cabezas falsas en Alcatraz",
    gancho: "Escaparon de la prisión de la que era imposible escapar. Y quizá lo lograron.",
    categoria: "Crimen",
    color: "var(--ochre)",
    encargo: "La isla de Alcatraz vista desde la bahía de San Francisco.",
    entrada:
      "Bahía de San Francisco, 11 de junio de 1962. Alcatraz es una prisión federal montada en una isla y rodeada de corrientes heladas, y su fama entera consiste en que de allí no se escapa nadie. Aquella noche tres presos pasan lista con normalidad y se acuestan. A la mañana siguiente el funcionario ve tres cabezas asomando de las mantas y golpea los barrotes para despertarlas.",
    paginas: [
      {
        rotulo: "Cucharas y cartón",
        texto:
          "Los tres llevaban más de un año trabajando de noche sin que nadie lo notara. Habían ensanchado las rejillas de ventilación de sus celdas raspando el hormigón, que la humedad del mar tenía medio deshecho. Rascaban con cucharas de la cocina y con un taladro fabricado con el motor de una aspiradora. Las cabezas que dejaron en las almohadas eran de jabón, papel higiénico, cemento y pelo recogido en la barbería. Por el hueco de la rejilla subían a un pasillo de servicio abandonado que los funcionarios no revisaban. Allí arriba montaron un taller y allí construyeron, pieza a pieza, una balsa.",
        destacado: { tipo: "frase", frase: "El mar tenía el hormigón medio deshecho." },
      },
      {
        rotulo: "Cincuenta impermeables",
        texto:
          "La balsa la hicieron con más de cincuenta impermeables que fueron reuniendo poco a poco entre los presos. Cosieron las piezas y las sellaron con calor, y usaron un acordeón como fuelle para inflarla. La noche de la fuga salieron por el tejado, bajaron por una tubería y saltaron dos vallas. Se echaron al agua por el noreste de la isla, que era el lado que la marea empujaba hacia dentro de la bahía. Nunca se encontraron los cuerpos, y en un mar tan frío los cuerpos suelen aparecer. Sí aparecieron restos de la balsa, un remo y una bolsa impermeable con fotos y direcciones de familiares.",
        destacado: { tipo: "cifra", cifra: "50", unidad: "impermeables cosidos a mano" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un caso que la policía federal cerró en 1979 concluyendo que los tres se ahogaron. Quedó abierto en cambio para el cuerpo de alguaciles federales, que tiene sus razones para no cerrarlo. En 2013 llegó a la policía una carta firmada por uno de ellos, diciendo tener ochenta y tres años y cáncer. Ofrecía entregarse a cambio de tratamiento médico, y el análisis de la carta fue oficialmente no concluyente. Quedó también el final de la propia prisión, que cerró un año después de la fuga. Mantenerla salía carísimo y su leyenda de inexpugnable acababa de romperse delante de todo el país.",
      },
    ],
  },

  {
    id: "tylenol",
    titulo: "El Tylenol y el precinto",
    gancho: "Siete muertes en 1982 cambiaron el envase de todo lo que compras.",
    categoria: "Crimen",
    color: "var(--clay)",
    encargo: "Un bote de pastillas con precinto de seguridad, o una farmacia de los años ochenta.",
    entrada:
      "Chicago, 29 de septiembre de 1982. Una niña de doce años se levanta con dolor de garganta y sus padres le dan una cápsula de Tylenol, el analgésico más vendido del país. La niña muere esa misma mañana. Ese día mueren también un cartero de veintisiete años y su hermano, que habían tomado pastillas del mismo bote. En tres días hay siete muertos y nadie entiende qué tienen en común.",
    paginas: [
      {
        rotulo: "Los dos bomberos",
        texto:
          "El caso lo resolvieron dos bomberos que hablaban por teléfono comentando las muertes de aquellos días. Uno mencionó que la niña había tomado Tylenol y el otro dijo que en la otra familia también. Analizaron las cápsulas y encontraron que alguien había abierto los botes y vaciado el polvo de dentro. Lo había sustituido por cianuro potásico, un veneno que mata en minutos, en dosis miles de veces superiores a la mortal. No podía haber ocurrido en la fábrica, porque los botes venían de plantas distintas y de lotes distintos. Alguien los había manipulado uno a uno en las estanterías de los supermercados y los había devuelto a su sitio.",
        destacado: { tipo: "cifra", cifra: "7", unidad: "muertos en tres días" },
      },
      {
        rotulo: "Retirarlo todo",
        texto:
          "La empresa fabricante hizo entonces algo que en 1982 parecía un suicidio comercial. Retiró treinta y un millones de envases de todo el país sin esperar a que nadie se lo ordenara. Aquello costó unos cien millones de dólares y dejó las farmacias sin su producto más vendido. Paró la publicidad, abrió líneas de teléfono para el público y avisó por televisión de que nadie tomara Tylenol. Su parte del mercado se hundió del treinta y cinco por ciento al ocho en unas semanas. En un año la había recuperado casi entera, y el caso se estudia hoy en las escuelas de negocios.",
        destacado: { tipo: "frase", frase: "Retiraron treinta y un millones de envases sin que se lo mandaran." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un envenenador al que nunca se identificó, y el caso sigue abierto más de cuarenta años después. Un hombre llegó a pedir un millón de dólares para parar las muertes y fue condenado por extorsión. Nunca se le pudo relacionar con los envenenamientos, así que aquello quedó en un chantaje aparte. Quedó en cambio todo lo demás, y es lo que cualquiera tiene hoy en las manos. Estados Unidos convirtió en delito federal manipular productos de consumo e hizo obligatorios los envases a prueba de manipulación. El precinto que rompes al abrir un bote de pastillas, un yogur o un zumo existe por aquellas siete personas.",
      },
    ],
  },

  {
    id: "isdal",
    titulo: "La mujer sin huellas",
    gancho: "Apareció quemada en un valle noruego con ocho identidades falsas y ningún nombre.",
    categoria: "Misterios",
    color: "var(--slate)",
    encargo: "Un valle noruego con niebla, o el retrato forense de la mujer de Isdal.",
    entrada:
      "Cerca de Bergen, en Noruega, el 29 de noviembre de 1970. Un profesor que pasea con sus dos hijas encuentra entre las rocas de un valle el cuerpo medio quemado de una mujer. A su alrededor hay botellas de licor, restos de una comida, un paraguas y unas joyas colocadas en orden. Y a la ropa le han arrancado todas las etiquetas, una por una.",
    paginas: [
      {
        rotulo: "Ocho nombres",
        texto:
          "En la consigna de la estación de tren aparecieron dos maletas suyas, y dentro estaba todo lo raro. Había pelucas, gafas, dinero en varias monedas, un peine con las iniciales borradas y un cuaderno con anotaciones en clave. Y había ocho pasaportes falsos con ocho identidades distintas, todos con su cara. Reconstruyendo sus movimientos, la policía vio que había recorrido Europa cambiando de nombre y de aspecto en cada ciudad. Pagaba siempre en efectivo y pedía habitación con vistas, y muchas veces la cambiaba al día siguiente. Los testigos la describían hablando varios idiomas con un acento que ninguno supo situar.",
        destacado: { tipo: "cifra", cifra: "8", unidad: "pasaportes falsos en la maleta" },
      },
      {
        rotulo: "Suicidio, dijeron",
        texto:
          "La autopsia encontró decenas de somníferos en el cuerpo y monóxido de carbono en los pulmones. La policía noruega cerró el caso como suicidio en apenas un mes, en un país donde casi todo se resolvía. Pero el cuerpo tenía un golpe en el cuello que no encajaba con esa explicación. La postura tampoco era la de alguien que se prende fuego a sí mismo. Y sobre todo estaban las manos, porque le habían limado las huellas dactilares hasta borrarlas. Los archivos siguieron clasificados décadas, y los agentes contaron después que recibieron instrucciones de no insistir.",
        destacado: { tipo: "frase", frase: "Cerrado como suicidio en un mes, con las huellas limadas." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un caso que la policía y la televisión noruegas reabrieron en 2017 con técnicas que en 1970 no existían. Analizaron sus dientes buscando los rastros que el agua de cada sitio deja en el esmalte al crecer. Ese análisis dijo que nació hacia 1930 en Europa central, cerca de la frontera entre Alemania y Francia. Y dijo que de niña se mudó hacia el este, probablemente a la parte de Alemania que quedó bajo control soviético. La hipótesis que ya casi nadie discute es que era una espía en plena guerra fría. Sigue enterrada en Bergen, en un ataúd de zinc por si algún día alguien la reclama, y nadie lo ha hecho.",
      },
    ],
  },

  {
    id: "golden-state",
    titulo: "El asesino y un primo",
    gancho: "Cuarenta años impune. Lo delató un pariente al que no conocía subiendo su ADN a una web.",
    categoria: "Crimen",
    color: "var(--sage)",
    encargo: "Un suburbio californiano de los años setenta al anochecer.",
    entrada:
      "California, entre 1974 y 1986. Un hombre comete al menos trece asesinatos y más de cincuenta violaciones entrando de noche en casas de las afueras. Es metódico hasta lo insoportable: días antes desmonta las cerraduras, deja ventanas preparadas y llama por teléfono para saber quién está en casa. Después desaparece sin más, y durante cuarenta años no hay un solo sospechoso sólido.",
    paginas: [
      {
        rotulo: "El árbol al revés",
        texto:
          "En 2018 un equipo de investigadores hizo algo que no se había hecho nunca con un caso antiguo. Cogieron el ADN guardado de las escenas de los crímenes y lo subieron a una web gratuita de genealogía. En esas webs la gente cuelga el resultado de sus análisis genéticos caseros para buscar parientes perdidos. No buscaban una coincidencia con el asesino, porque él nunca había dado su ADN a nadie. Buscaban a sus primos, y encontraron parientes lejanos del orden de terceros y cuartos primos. Desde ahí construyeron hacia atrás un árbol genealógico enorme con censos, esquelas y registros parroquiales.",
        destacado: { tipo: "frase", frase: "No buscaban al asesino, sino a sus primos." },
      },
      {
        rotulo: "Se quedó uno",
        texto:
          "El árbol fue estrechando el cerco a base de descartar ramas enteras de la familia. Quitaron a las mujeres, a los que tenían la edad equivocada y a los que vivían lejos de California. Al final quedó un solo hombre, de setenta y dos años, que vivía tranquilo en un chalé con jardín. Era un expolicía al que habían expulsado del cuerpo en 1979 por robar en una tienda un martillo y un repelente para perros. Lo vigilaron unos días y recogieron su ADN de la manilla del coche y de un pañuelo de su basura. Coincidió, lo detuvieron en abril de 2018 y hoy cumple cadena perpetua.",
        destacado: { tipo: "cifra", cifra: "44", unidad: "años entre el primer crimen y la detención" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un método nuevo, la genealogía genética forense, que desde entonces ha resuelto cientos de casos antiguos. Ha servido además para sacar de la cárcel a personas condenadas por error hace décadas. Y quedó un debate que sigue sin cerrarse y que no va solo de asesinos. Para localizar a aquel hombre no hizo falta que él diera su ADN: bastó con que lo dieran otros. Se calcula que si el dos por ciento de una población se hace un análisis genético, ya se puede identificar por parentesco a casi cualquiera. Sobre tu información genética no decides solo tú, porque la mitad de la decisión está en manos de tus primos.",
      },
    ],
  },

  {
    id: "celeste",
    titulo: "El Mary Celeste, vacío",
    gancho: "Comida en la mesa, carga intacta, mar en calma. Faltaban las diez personas.",
    categoria: "Misterios",
    color: "var(--slate)",
    encargo: "Un bergantin del siglo XIX navegando solo, o el Mary Celeste.",
    entrada:
      "En mitad del Atlántico, camino de Portugal, el 4 de diciembre de 1872. Un bergantín, que es un barco de vela de dos palos, avista a otro navegando de forma extraña, con poca vela y dando bandazos. Se acercan y gritan, y nadie responde. Suben a bordo y encuentran el Mary Celeste en perfecto estado, con la carga entera y provisiones para seis meses.",
    paginas: [
      {
        rotulo: "Lo que faltaba",
        texto:
          "Faltaban diez personas: el capitán, su mujer, la hija de dos años del matrimonio y siete tripulantes. Faltaba también el único bote salvavidas, y con él el sextante, el cronómetro y los papeles de navegación. El sextante es el aparato para saber dónde está uno en el mar mirando la altura del sol. Que se lo llevaran significa que no desaparecieron de golpe, sino que se fueron ordenadamente y con lo necesario para navegar. El barco tenía metro y medio de agua en la bodega, que es mucha pero no peligrosa, y una escotilla abierta. La última anotación del diario era de nueve días antes y no mencionaba ningún problema.",
        destacado: { tipo: "cifra", cifra: "10", unidad: "personas y ningún cuerpo" },
      },
      {
        rotulo: "El alcohol",
        texto:
          "La carga eran mil setecientos barriles de alcohol industrial, y al descargarlos en el puerto de destino nueve estaban vacíos. Esos nueve eran de roble rojo, una madera más porosa que el roble blanco de los demás. De ahí sale la explicación que hoy convence a casi todo el mundo. El alcohol se filtró por la madera y se evaporó, y los vapores se fueron acumulando en la bodega cerrada. Un cambio de temperatura pudo provocar un estallido de presión, una llamarada rápida que no deja marcas de quemado. El capitán, con su mujer y su hija a bordo, mandó abandonar el barco temiendo que todo saltara por los aires.",
        destacado: { tipo: "frase", frase: "Se fueron ordenadamente. Ese es justo el problema." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó lo que pasó después de bajar al bote, que es la parte más cruel de la historia. Lo amarraron al barco con un cabo para volver a subir cuando pasara el peligro, y el cabo se soltó. El Mary Celeste, con las velas puestas, se alejó solo mientras ellos remaban detrás en un bote abierto. Nunca se les volvió a ver, y ninguno de los diez apareció jamás. Y quedó una leyenda de barco fantasma que no la crearon los marineros, sino un escritor. Un joven médico llamado Arthur Conan Doyle publicó en 1884 un relato inventado, y la mitad de los detalles que hoy se repiten salen de ahí.",
      },
    ],
  },

  {
    id: "hinterkaifeck",
    titulo: "Vivió con los muertos",
    gancho: "Comieron, dieron de comer al ganado y encendieron el fuego. Con los cuerpos en el granero.",
    categoria: "Misterios",
    color: "var(--plum)",
    encargo: "Una granja bavara aislada bajo la nieve, con el bosque detras.",
    entrada:
      "Baviera, Alemania, marzo de 1922. La granja de Hinterkaifeck está aislada, a media hora andando del pueblo más cercano. Semanas antes, el dueño había contado en el pueblo cosas muy raras que le estaban pasando en casa. Había huellas en la nieve que venían del bosque hasta la puerta y no volvían, pasos en el desván y un periódico que nadie había comprado. No llamó a la policía.",
    paginas: [
      {
        rotulo: "El granero",
        texto:
          "El 31 de marzo murieron en la granja seis personas, y murieron una a una. Eran el matrimonio dueño de la casa, su hija viuda, los dos nietos de siete y dos años y la criada. La criada había llegado ese mismo día, después de que la anterior se marchara diciendo que la casa estaba encantada. A cuatro de ellos los atrajeron al granero, uno detrás de otro, y los mataron a golpes con un azadón de labranza. Los otros dos murieron dentro de la casa, sin que se sepa en qué orden. Los cuerpos aparecieron apilados en el granero y cubiertos con heno y con una puerta.",
        destacado: { tipo: "cifra", cifra: "6", unidad: "muertos, uno detrás de otro" },
      },
      {
        rotulo: "Cuatro días",
        texto:
          "Nadie encontró los cuerpos hasta el 4 de abril, cuatro días después. Y lo que pasó en esos cuatro días es lo que hace que esta historia no se olvide. Alguien se quedó viviendo en la casa, y de eso hay pruebas materiales. El ganado estaba alimentado y ordeñado, en la cocina había restos de comida reciente y la chimenea había estado encendida. Varios vecinos declararon después que vieron salir humo de la casa aquellos días sin darle importancia ninguna. Quien mató a seis personas vivió allí casi una semana, con los cadáveres a veinte metros de la cama.",
        destacado: { tipo: "frase", frase: "Los vecinos vieron salir humo. No les extrañó." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una investigación desastrosa incluso para los criterios de la época. Los cuerpos fueron decapitados y las cabezas se enviaron a Múnich para que las examinaran unos videntes. Se perdieron durante la Segunda Guerra Mundial y nunca se han recuperado. La granja se demolió un año después del crimen, y bajo el suelo apareció el arma. Se interrogó a más de un centenar de sospechosos a lo largo de varias décadas sin llegar a nada. En 2007 una academia de policía reabrió el caso con métodos modernos, llegó a un nombre probable y decidió no publicarlo, porque quedaban descendientes vivos.",
      },
    ],
  },

  {
    id: "zodiaco",
    titulo: "La clave del Zodiac",
    gancho: "La descifraron tres aficionados en 2020. Dentro no había ningún nombre.",
    categoria: "Crimen",
    color: "var(--ochre)",
    encargo: "Un recorte de periodico de San Francisco de 1969 con un criptograma.",
    entrada:
      "Norte de California, entre 1968 y 1969. Un asesino mata al menos a cinco personas y empieza a mandar cartas a los periódicos firmadas como Zodiac. Exige que se publiquen en portada y amenaza con matar a más gente si no lo hacen. Y dentro de las cartas manda criptogramas, que son mensajes escritos con símbolos inventados, donde dice que está su identidad.",
    paginas: [
      {
        rotulo: "El primer mensaje",
        texto:
          "El primer criptograma tenía cuatrocientos ocho símbolos y lo resolvió en una semana un matrimonio de profesores de instituto. Trabajaron en la mesa de su casa, sin ordenador y sin más ayuda que papel y lápiz. Ella probó la corazonada de que un hombre así empezaría el mensaje diciendo que le gusta matar, y acertó. A partir de esas letras cayó el resto, porque cada símbolo valía siempre por la misma letra. El texto descifrado resultó escalofriante, pero no daba ningún nombre ni ninguna pista útil. El segundo criptograma, de trescientos cuarenta símbolos, resistió al FBI, a criptógrafos militares y a miles de aficionados.",
        destacado: { tipo: "cifra", cifra: "51", unidad: "años tardó en descifrarse el segundo" },
      },
      {
        rotulo: "Diciembre de 2020",
        texto:
          "Lo resolvieron tres personas que no se conocían en persona y que vivían en tres continentes distintos. Eran un programador estadounidense, un matemático australiano y un empleado de logística belga. La clave estaba en que el mensaje no se leía por líneas, de izquierda a derecha. Se escribía en diagonal y por bloques, de modo que había dos trucos encima del otro. Primero había que recolocar los símbolos en el orden correcto y solo después traducirlos a letras. El texto decía que esperaba que se lo estuvieran pasando bien intentando pillarlo, y volvía a no dar ningún nombre.",
        destacado: { tipo: "frase", frase: "Cincuenta y un años de clave, y dentro ni un nombre." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un caso oficialmente sin resolver, con dos criptogramas menores todavía sin descifrar. Quedó un sospechoso principal durante décadas, muerto en 1992, que coincidía en algunos detalles. Ni sus huellas, ni su letra, ni su ADN encajaron nunca con los que dejó el asesino. Y quedó un detalle que suele pasarse por alto y que explica media historia. El Zodiac se atribuyó treinta y siete muertes, pero solo se le han confirmado cinco. Buena parte de su fama la construyó él escribiendo cartas, y los periódicos se las publicaron en portada porque él lo exigió.",
      },
    ],
  },
];
