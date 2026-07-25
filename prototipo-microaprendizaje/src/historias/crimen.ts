import type { Short } from "../shorts";

/* ==========================================================================
   Crímenes y desapariciones.

   El criterio para entrar aquí no es lo truculento: es que haya un GIRO. Un
   detalle que da la vuelta a lo que creías, o una pieza que nunca encajó.
   Nada de recrearse en la violencia — eso ni engancha ni se sostiene diez
   historias seguidas; lo que engancha es no poder dejar de pensarlo.
   ========================================================================== */

export const CRIMEN: Short[] = [
  {
    id: "dahmer",
    titulo: "La policía se lo devolvió",
    gancho: "Un chico escapó y pidió ayuda en la calle. Tres agentes lo entregaron de vuelta.",
    categoria: "Crimen",
    color: "var(--slate)",
    encargo: "El edificio de apartamentos Oxford, en Milwaukee, o una calle nocturna de la ciudad.",
    entrada:
      "27 de mayo de 1991, Milwaukee, tres de la madrugada. Dos mujeres encuentran en la calle a un chico desnudo, aturdido y sangrando, y llaman a emergencias. Un vecino de aspecto tranquilo aparece y explica que es su novio de 19 años, que han bebido y que han discutido. La policía llega. Y aquí es donde esta historia deja de ser un caso más.",
    paginas: [
      {
        rotulo: "«Es cosa de pareja»",
        texto:
          "El chico se llamaba Konerak Sinthasomphone, tenía <strong>14 años</strong> y era laosiano. No hablaba: Dahmer le había perforado el cráneo horas antes. Las dos mujeres que habían llamado insistieron a gritos en que era un menor y en que había escapado de aquel hombre. Los agentes las apartaron. Acompañaron a los dos al apartamento, notaron un olor fuerte que Dahmer explicó como basura sin sacar, y se marcharon. En la habitación de al lado había un cadáver. Konerak murió esa misma noche.",
        destacado: { tipo: "frase", frase: "Las tres agentes que insistieron eran vecinas. No las creyeron." },
      },
      {
        rotulo: "La grabación",
        texto:
          "Al volver al coche, uno de los agentes informó por radio entre risas: «el crío intoxicado ha vuelto con su novio», y añadió que iban a desinfectarse. La llamada quedó grabada. Cuando dos meses después detuvieron a Dahmer y salió la cinta, los tres agentes fueron despedidos. Dos recurrieron y fueron readmitidos con sueldos atrasados; uno llegó a ser elegido <strong>agente del año</strong> por su sindicato. El caso se convirtió en el ejemplo de manual de cómo el racismo y la homofobia se disfrazan de rutina policial.",
        destacado: { tipo: "cifra", cifra: "2", unidad: "meses hasta la detención" },
      },
      {
        rotulo: "Lo que ya sabían",
        texto:
          "Lo más difícil de encajar es que Dahmer no era un desconocido para el sistema. Tres años antes había sido condenado por abusar de un menor: el hermano mayor de Konerak. Estaba en libertad condicional por ese delito la noche en que los agentes le devolvieron al pequeño. Su agente de la condicional nunca visitó el apartamento pese a haberlo solicitado varias veces, alegando exceso de trabajo. Dahmer mató a cuatro personas más después de aquella madrugada, antes de que otra víctima lograra escapar en julio, esta vez con las esposas todavía puestas.",
      },
    ],
  },

  {
    id: "cooper",
    titulo: "Saltó de un avión con el rescate y nadie lo volvió a ver",
    gancho: "El único secuestro aéreo sin resolver de la historia de Estados Unidos.",
    categoria: "Crimen",
    color: "var(--sage)",
    encargo: "Un Boeing 727 de los años setenta, o el retrato robot de D. B. Cooper.",
    entrada:
      "24 de noviembre de 1971, víspera de Acción de Gracias. Un hombre de traje oscuro y corbata compra un billete a nombre de Dan Cooper para un vuelo corto de Portland a Seattle. Pide un bourbon con soda. A mitad de vuelo le pasa una nota a la azafata, que se la guarda en el bolso sin leer, convencida de que es un número de teléfono. Él se inclina y le dice en voz baja: «Señorita, será mejor que la lea. Tengo una bomba».",
    paginas: [
      {
        rotulo: "Educadísimo",
        texto:
          "Le enseñó el maletín: cilindros rojos y cables. Pidió 200.000 dólares en billetes de veinte, cuatro paracaídas y un camión de combustible esperando en Seattle. Todo lo pidió por favor. Al aterrizar liberó a los 36 pasajeros y a dos azafatas, y despegó de nuevo con la tripulación mínima rumbo a México, con instrucciones muy precisas: volar a menos de 3.000 metros, a menos de 320 km/h, con el tren de aterrizaje bajado y los flaps a 15 grados. Es decir, exactamente la configuración de un avión desde el que se puede saltar.",
        destacado: { tipo: "cifra", cifra: "200.000", unidad: "dólares de 1971" },
      },
      {
        rotulo: "20:13",
        texto:
          "Sobre las ocho de la tarde, en algún punto entre Seattle y Reno, con lluvia, siete grados bajo cero y noche cerrada, la rampa trasera del Boeing 727 se abrió. Cooper saltó con el dinero atado al cuerpo. La búsqueda posterior fue una de las mayores de la historia del FBI: batieron el bosque, dragaron ríos, interrogaron a más de mil sospechosos. No apareció ni el cuerpo, ni el paracaídas, ni el maletín. En 2016, tras 45 años, el FBI cerró el caso oficialmente sin una sola identificación firme.",
        destacado: { tipo: "frase", frase: "45 años de investigación. Cero identificaciones firmes." },
      },
      {
        rotulo: "El fajo del río",
        texto:
          "En 1980, un niño de ocho años que hacía una hoguera a orillas del río Columbia desenterró tres fajos de billetes deshechos. Eran <strong>5.800 dólares</strong>, y los números de serie coincidían exactamente con el rescate. Es lo único que ha aparecido jamás. Y planteó más preguntas de las que resolvió: aquel dinero estaba a kilómetros de la zona de salto calculada, y las gomas que sujetaban los fajos seguían intactas, algo casi imposible tras años en el agua. La teoría dominante hoy es que Cooper no sobrevivió a la caída. Pero nadie ha encontrado nunca nada suyo.",
      },
    ],
  },

  {
    id: "dyatlov",
    titulo: "Salieron de la tienda cortándola desde dentro",
    gancho: "Nueve montañeros expertos huyeron descalzos a veinte bajo cero. Nadie sabe de qué.",
    categoria: "Misterios",
    color: "var(--plum)",
    encargo: "Los Urales nevados de noche, o la tienda de la expedición Dyatlov medio enterrada.",
    entrada:
      "Febrero de 1959, montes Urales. Nueve estudiantes de ingeniería, montañeros con experiencia, acampan en la ladera de una montaña cuyo nombre en mansi significa aproximadamente «no vayas allí». Cuando el grupo de rescate llega semanas después, encuentra la tienda en pie, con la comida servida y las botas ordenadas. La lona está rajada. Desde dentro.",
    paginas: [
      {
        rotulo: "Descalzos, cuesta abajo",
        texto:
          "Las huellas salían de la tienda y bajaban ladera abajo, en calma, sin señales de carrera ni de forcejeo. Ocho o nueve pares de pies, algunos descalzos, otros con un solo calcetín, a veinte grados bajo cero. Los dos primeros cuerpos aparecieron junto a un cedro a kilómetro y medio, en ropa interior, con las manos quemadas y ramas rotas hasta cinco metros de altura, como si alguien hubiera trepado a mirar algo. Otros tres cayeron en el camino de vuelta hacia la tienda, congelados en posición de estar volviendo.",
        destacado: { tipo: "frase", frase: "La tienda estaba rajada desde dentro. Nadie huye así de un oso." },
      },
      {
        rotulo: "Los cuatro del barranco",
        texto:
          "Los últimos cuatro tardaron dos meses en aparecer, bajo cuatro metros de nieve en un barranco. Y esos cambiaron el caso. Uno tenía el cráneo hundido; dos, el tórax aplastado con una fuerza que el forense comparó con un accidente de coche. Ninguno tenía heridas externas. A una le faltaban la lengua y parte de los tejidos de la cara. Algunas ropas presentaban <strong>radiactividad</strong> por encima de lo normal. La investigación soviética se cerró con una frase que no explica nada y lo dice todo: los mató «una fuerza natural irresistible».",
        destacado: { tipo: "cifra", cifra: "9", unidad: "muertos, ninguna explicación" },
      },
      {
        rotulo: "La avalancha imposible",
        texto:
          "Durante sesenta años se descartó la avalancha: la pendiente era demasiado suave y no había rastro de ella. En 2021, dos investigadores suizos publicaron en <em>Nature</em> una simulación —usando, entre otras cosas, los modelos de nieve desarrollados para la película <em>Frozen</em>— que muestra cómo una placa pequeña pudo desprenderse horas después del corte que los montañeros hicieron en la ladera para montar la tienda. Explicaría las fracturas y la huida a medio vestir. No explica la radiactividad ni por qué volvieron. Sigue siendo la mejor teoría que hay, y sigue sin cerrar el caso.",
      },
    ],
  },

  {
    id: "alcatraz",
    titulo: "Dejaron cabezas falsas en la almohada",
    gancho: "Escaparon de la prisión de la que era imposible escapar. Y quizá lo lograron.",
    categoria: "Crimen",
    color: "var(--ochre)",
    encargo: "La isla de Alcatraz vista desde la bahía de San Francisco.",
    entrada:
      "11 de junio de 1962. En Alcatraz, la prisión federal rodeada de corrientes heladas donde estuvo Al Capone, tres presos pasan lista con normalidad y se acuestan. A la mañana siguiente, el funcionario recorre las celdas y ve tres cabezas asomando de las mantas. Golpea los barrotes de una para despertarla. La cabeza se cae al suelo.",
    paginas: [
      {
        rotulo: "Cucharas y cartón",
        texto:
          "Frank Morris y los hermanos Anglin llevaban más de un año trabajando. Habían ensanchado las rejillas de ventilación de sus celdas raspando el hormigón —debilitado por la humedad marina— con cucharas de la cocina y un taladro improvisado con el motor de una aspiradora. Las cabezas eran de jabón, papel higiénico, cemento y pelo de verdad recogido en la barbería. Por el hueco subían a un pasillo de servicio abandonado que los funcionarios no revisaban, y allí montaron un taller: allí construyeron, en secreto, una balsa.",
        destacado: { tipo: "frase", frase: "Fabricaron la balsa con cincuenta impermeables robados." },
      },
      {
        rotulo: "Cincuenta impermeables",
        texto:
          "Cosieron y vulcanizaron más de <strong>cincuenta impermeables</strong> reunidos poco a poco entre los presos, y usaron un acordeón como fuelle para inflarla. Salieron por el tejado, bajaron por una tubería, saltaron dos vallas y se echaron al agua por el noreste de la isla. La marea aquella noche empujaba hacia la bahía. Nunca se encontraron los cuerpos. Aparecieron restos de la balsa, un remo y una bolsa impermeable con fotos y direcciones de familiares, todo flotando cerca de la Isla del Ángel.",
        destacado: { tipo: "cifra", cifra: "50+", unidad: "impermeables cosidos" },
      },
      {
        rotulo: "La carta de 2013",
        texto:
          "El FBI cerró el caso en 1979 concluyendo que se ahogaron. Pero el caso lo mantiene abierto el Servicio de Alguaciles, y tiene razones. En 2013 la policía de San Francisco recibió una carta firmada por John Anglin: decía tener 83 años, cáncer, y ofrecía entregarse a cambio de tratamiento médico. El análisis fue oficialmente «no concluyente». Y en 2018 la familia difundió una fotografía de 1975 en Brasil que, según ellos, muestra a los dos hermanos vivos. Alcatraz cerró un año después de la fuga: mantenerla salía carísimo, y su leyenda de inexpugnable acababa de romperse.",
      },
    ],
  },

  {
    id: "tylenol",
    titulo: "Por eso los botes traen precinto",
    gancho: "Siete muertes en 1982 cambiaron el envase de todo lo que compras.",
    categoria: "Crimen",
    color: "var(--clay)",
    encargo: "Un bote de pastillas con precinto de seguridad, o una farmacia de los años ochenta.",
    entrada:
      "29 de septiembre de 1982, Chicago. Mary Kellerman, doce años, se levanta con dolor de garganta. Sus padres le dan una cápsula de Tylenol, el analgésico más vendido de Estados Unidos. Muere esa mañana. Ese mismo día mueren un cartero de 27 años y su hermano, que habían tomado del mismo bote. En tres días son siete muertos, y nadie entiende qué tienen en común.",
    paginas: [
      {
        rotulo: "El bombero que ató cabos",
        texto:
          "Lo resolvieron dos bomberos que hablaban por teléfono comentando los casos. Uno mencionó que la niña había tomado Tylenol. El otro dijo que en la otra familia también. Analizaron las cápsulas: alguien había abierto los botes, vaciado el polvo y lo había sustituido por <strong>cianuro potásico</strong>, en dosis miles de veces superiores a la letal. No lo había hecho en la fábrica: los botes procedían de plantas distintas. Alguien los había manipulado uno a uno, en las estanterías de los supermercados de Chicago, y los había devuelto a su sitio.",
        destacado: { tipo: "cifra", cifra: "7", unidad: "muertos en tres días" },
      },
      {
        rotulo: "Retirarlo todo",
        texto:
          "Johnson & Johnson hizo algo que en 1982 parecía un suicidio empresarial: retiró <strong>31 millones</strong> de envases de todo el país, unos 100 millones de dólares, sin esperar a que se lo ordenaran. Paró la publicidad, abrió líneas de atención y avisó por televisión de que nadie tomara Tylenol. Su cuota de mercado se desplomó del 35 % al 8 %. En un año la había recuperado casi entera. Hoy ese caso se estudia en todas las escuelas de negocios como el manual de qué hacer cuando lo peor ya ha pasado.",
        destacado: { tipo: "frase", frase: "Retiraron 31 millones de envases sin que nadie se lo ordenara." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El envenenador nunca fue identificado. Un hombre llegó a pedir un millón de dólares para «parar las muertes» y fue condenado por extorsión, pero nunca se le pudo vincular con los envenenamientos. Lo que sí quedó fue todo lo demás: en 1983 Estados Unidos tipificó como delito federal manipular productos de consumo, y en 1989 se hicieron obligatorios los envases a prueba de manipulación. El precinto de plástico que rompes al abrir un bote de pastillas, un yogur o un zumo existe por aquellas siete personas.",
      },
    ],
  },

  {
    id: "isdal",
    titulo: "Le habían limado las huellas y las etiquetas",
    gancho: "Apareció quemada en un valle noruego con ocho identidades falsas y ningún nombre.",
    categoria: "Misterios",
    color: "var(--slate)",
    encargo: "Un valle noruego con niebla, o el retrato forense de la mujer de Isdal.",
    entrada:
      "29 de noviembre de 1970, valle de Isdalen, cerca de Bergen. Un profesor pasea con sus dos hijas y encuentra el cuerpo de una mujer, parcialmente quemado, entre las rocas. Alrededor: botellas de licor, restos de una comida, un paraguas, joyas colocadas ordenadamente… y todas las etiquetas de la ropa arrancadas. Todas. Hasta las de la maleta que apareció después en la estación.",
    paginas: [
      {
        rotulo: "Ocho nombres",
        texto:
          "En las consignas de la estación de Bergen aparecieron dos maletas suyas. Dentro: pelucas, gafas, dinero en varias monedas, un peine con las iniciales borradas y un cuaderno con anotaciones en clave. Y ocho pasaportes falsos con ocho identidades distintas. Reconstruyendo sus movimientos, la policía descubrió que había recorrido Europa cambiando de nombre y de aspecto en cada ciudad, pagando siempre en efectivo, y pidiendo habitación con vistas y a poder ser cambiándola al día siguiente. Los testigos la describían hablando varios idiomas con un acento que nadie supo situar.",
        destacado: { tipo: "cifra", cifra: "8", unidad: "identidades falsas" },
      },
      {
        rotulo: "Suicidio, dijeron",
        texto:
          "La autopsia encontró decenas de somníferos y monóxido de carbono. La policía noruega cerró el caso en apenas un mes como suicidio, en un país donde entonces no había prácticamente crímenes sin resolver. Pero el cuerpo tenía un golpe en el cuello que no encajaba, la posición no era la de alguien que se prende fuego, y sus <strong>huellas dactilares habían sido limadas</strong>. Los archivos permanecieron clasificados durante décadas. Los agentes que trabajaron el caso han contado después que recibieron instrucciones de no insistir.",
        destacado: { tipo: "frase", frase: "Cerrado como suicidio en un mes. Con las huellas limadas." },
      },
      {
        rotulo: "Los dientes hablaron",
        texto:
          "En 2017, la radiotelevisión noruega y la policía reabrieron el caso con ciencia que en 1970 no existía. El análisis de isótopos de sus dientes dio un resultado preciso: nació en algún lugar de Europa central, probablemente en la frontera entre Alemania y Francia, y de niña se mudó hacia el este, quizá a Alemania Oriental. Nació hacia 1930. La hipótesis que casi nadie discute ya es que era una espía en plena Guerra Fría. Sigue enterrada en Bergen, en un ataúd de zinc por si algún día alguien la reclama. Nadie lo ha hecho.",
      },
    ],
  },

  {
    id: "golden-state",
    titulo: "Lo cazó el árbol genealógico de un primo lejano",
    gancho: "Cuarenta años impune. Lo delató un pariente al que no conocía subiendo su ADN a una web.",
    categoria: "Crimen",
    color: "var(--sage)",
    encargo: "Un suburbio californiano de los años setenta al anochecer.",
    entrada:
      "Entre 1974 y 1986, un hombre cometió al menos 13 asesinatos y más de 50 violaciones por toda California. Entraba de noche en casas de las afueras, y era metódico hasta lo insoportable: días antes desmontaba las cerraduras, dejaba ventanas preparadas y llamaba por teléfono para saber quién estaba en casa. Luego desapareció. Durante cuarenta años no hubo un solo sospechoso sólido.",
    paginas: [
      {
        rotulo: "El árbol al revés",
        texto:
          "En 2018, un equipo hizo algo que no se había hecho nunca. Cogieron el ADN guardado de las escenas de los crímenes y lo subieron a <strong>GEDmatch</strong>, una web gratuita donde la gente cuelga sus resultados de test genéticos caseros para buscar familiares. No buscaban una coincidencia con el asesino: buscaban primos. Encontraron parientes lejanos, del orden de terceros y cuartos primos, y a partir de ahí construyeron hacia atrás un árbol genealógico enorme, con archivos de censo, esquelas y registros parroquiales, hasta llegar a los antepasados comunes y bajar de nuevo.",
        destacado: { tipo: "frase", frase: "No buscaban al asesino. Buscaban a sus primos." },
      },
      {
        rotulo: "Se quedó uno",
        texto:
          "El árbol fue estrechando el cerco. Descartaron ramas por edad, por sexo, por lugar de residencia. Al final quedó un hombre de 72 años que vivía tranquilamente en Citrus Heights: Joseph James DeAngelo, expolicía. Lo habían expulsado del cuerpo en 1979 por robar en una tienda un martillo y un repelente para perros. Lo vigilaron, recogieron ADN de la manilla de su coche y de un pañuelo de su basura, y coincidió. Lo detuvieron en abril de 2018. Se declaró culpable en 2020 y cumple cadena perpetua.",
        destacado: { tipo: "cifra", cifra: "44", unidad: "años entre el primer crimen y la detención" },
      },
      {
        rotulo: "La factura",
        texto:
          "Aquel método —la genealogía genética forense— ha resuelto desde entonces cientos de casos antiguos y ha exonerado a inocentes. También abrió un debate que sigue abierto: para localizarlo no hizo falta que DeAngelo diera su ADN, bastó con que lo dieran <em>otros</em>. Se calcula que con que un 2 % de una población haya hecho un test genético, ya se puede identificar por parentesco a casi cualquiera de sus miembros. Tú no decides sobre tu privacidad genética: la deciden tus primos.",
      },
    ],
  },

  {
    id: "celeste",
    titulo: "El barco llegó perfecto. Sin nadie a bordo",
    gancho: "Comida en la mesa, carga intacta, mar en calma. Faltaban las diez personas.",
    categoria: "Misterios",
    color: "var(--slate)",
    encargo: "Un bergantín del siglo XIX navegando solo, o el Mary Celeste.",
    entrada:
      "4 de diciembre de 1872, en mitad del Atlántico entre las Azores y Portugal. El bergantín <em>Dei Gratia</em> avista otro barco navegando de forma extraña, con poca vela y dando bandazos. Se acercan y gritan. Nadie responde. Suben a bordo y encuentran el <em>Mary Celeste</em> en perfecto estado: sin vías de agua, con la carga entera y provisiones para seis meses. No hay una sola persona.",
    paginas: [
      {
        rotulo: "Lo que sí faltaba",
        texto:
          "Faltaban diez personas: el capitán Briggs, su mujer, su hija de dos años y siete tripulantes. Faltaba también el único bote salvavidas, y con él el sextante, el cronómetro y los papeles de navegación. Es decir, no desaparecieron: <strong>se fueron</strong>, ordenadamente y con lo necesario para navegar. El barco tenía metro y medio de agua en la bodega —mucha, pero no peligrosa— y una escotilla abierta. La última anotación del diario, de nueve días antes, era rutinaria y no mencionaba ningún problema.",
        destacado: { tipo: "cifra", cifra: "10", unidad: "personas, ningún cuerpo" },
      },
      {
        rotulo: "Alcohol",
        texto:
          "La carga eran 1.701 barriles de alcohol industrial. Al descargarlos en Génova, nueve estaban vacíos. Eran de roble rojo, más poroso que el roble blanco del resto. De ahí sale la explicación que hoy convence a casi todos: el alcohol se filtró y se evaporó, los vapores se acumularon en la bodega y un cambio de temperatura provocó un estallido de presión —una llamarada sin fuego persistente, que no deja marcas de quemado—. El capitán, con su mujer y su hija a bordo, ordenó abandonar el barco temiendo que todo saltara por los aires.",
        destacado: { tipo: "frase", frase: "Se fueron ordenadamente. Ese es justo el problema." },
      },
      {
        rotulo: "El cabo que se soltó",
        texto:
          "Salieron al bote y lo amarraron al barco con un cabo, para volver cuando pasara el peligro. El cabo se soltó o se rompió. El <em>Mary Celeste</em>, con las velas puestas, se alejó solo mientras ellos remaban detrás en un bote abierto en mitad del Atlántico. Nunca se les volvió a ver. La leyenda del barco fantasma la creó, en buena medida, un joven médico llamado Arthur Conan Doyle, que en 1884 publicó un relato inventado con la mitad de los detalles que hoy la gente repite como ciertos.",
      },
    ],
  },

  {
    id: "hinterkaifeck",
    titulo: "Alguien vivió en la casa mientras la familia estaba muerta",
    gancho: "Comieron, dieron de comer al ganado y encendieron el fuego. Con los cuerpos en el granero.",
    categoria: "Misterios",
    color: "var(--plum)",
    encargo: "Una granja bávara aislada bajo la nieve, con el bosque detrás.",
    entrada:
      "Marzo de 1922, Baviera. La granja de Hinterkaifeck está aislada, a media hora del pueblo más cercano. Semanas antes, el dueño había contado en el pueblo cosas raras: huellas en la nieve que venían del bosque hasta la casa y no volvían, pasos en el desván, una llave desaparecida y un periódico que nadie de la casa había comprado. No llamó a la policía.",
    paginas: [
      {
        rotulo: "El granero",
        texto:
          "El 31 de marzo, seis personas mueren en la granja: el matrimonio, su hija viuda, sus dos nietos de siete y dos años, y la criada nueva —que había llegado ese mismo día, después de que la anterior se marchara diciendo que la casa estaba encantada—. Cuatro de ellas fueron atraídas una a una al granero y golpeadas con un <em>Reuthaue</em>, un azadón de labranza. Los otros dos murieron dentro de la casa. Los cuerpos aparecieron apilados y cubiertos con heno y una puerta.",
        destacado: { tipo: "cifra", cifra: "6", unidad: "muertos, uno a uno" },
      },
      {
        rotulo: "Cuatro días después",
        texto:
          "Nadie encontró los cuerpos hasta el 4 de abril. Y lo que había pasado en esos cuatro días es lo que hace que esta historia no se olvide: alguien se quedó. El ganado estaba alimentado y ordeñado. En la cocina había restos de comida reciente. La chimenea había estado encendida. Varios vecinos declararon haber visto <strong>humo saliendo de la casa</strong> aquellos días sin darle importancia. El asesino mató a seis personas y después vivió allí casi una semana, con los cadáveres a veinte metros.",
        destacado: { tipo: "frase", frase: "Los vecinos vieron salir humo. No les extrañó." },
      },
      {
        rotulo: "Cien años",
        texto:
          "La investigación fue un desastre por criterios de la época: los cuerpos fueron decapitados y las cabezas enviadas a Múnich para que las examinaran videntes; se perdieron en la guerra. La granja se demolió un año después y bajo el suelo apareció el arma. Se interrogó a más de un centenar de sospechosos durante décadas. En 2007, la academia de policía de Fürstenfeldbruck reabrió el caso con métodos modernos y llegó a un nombre probable, pero decidió no publicarlo: quedaban descendientes vivos. Es el crimen sin resolver más famoso de Alemania.",
      },
    ],
  },

  {
    id: "zodiaco",
    titulo: "Su clave aguantó 51 años",
    gancho: "La descifraron tres aficionados en 2020. Dentro no había ningún nombre.",
    categoria: "Crimen",
    color: "var(--ochre)",
    encargo: "Un recorte de periódico de San Francisco de 1969 con un criptograma.",
    entrada:
      "Entre 1968 y 1969, un asesino mató al menos a cinco personas en el norte de California y empezó a mandar cartas a los periódicos firmadas como Zodiac. Exigía que se publicaran en portada bajo amenaza de matar a más gente. Y dentro mandaba criptogramas: series de símbolos donde, decía, estaba su identidad.",
    paginas: [
      {
        rotulo: "El profesor y su mujer",
        texto:
          "El primer criptograma, de 408 símbolos, lo resolvió en una semana un matrimonio de profesores de instituto de Salinas, Donald y Bettye Harden, trabajando en la mesa de su casa. Bettye probó la corazonada de que un egocéntrico empezaría con «I like killing», y acertó. El mensaje descifrado era escalofriante pero no daba ningún nombre. El segundo, de <strong>340 símbolos</strong>, resistió. Lo intentaron el FBI, la NSA, criptógrafos militares y miles de aficionados durante medio siglo.",
        destacado: { tipo: "cifra", cifra: "51", unidad: "años sin descifrar" },
      },
      {
        rotulo: "Diciembre de 2020",
        texto:
          "Lo resolvieron tres personas que no se conocían en persona: un programador estadounidense, un matemático australiano y un logista belga. La clave estaba en que el mensaje no se leía en líneas: se escribía en diagonal, por bloques, con un patrón de transposición encima del cifrado por sustitución. El texto decía que esperaba que se lo estuvieran pasando bien intentando pillarlo, negaba ser el hombre que había salido en televisión, y afirmaba que no temía a la cámara de gas porque le enviaría antes al paraíso.",
        destacado: { tipo: "frase", frase: "Cincuenta y un años de clave. Y dentro, ni un nombre." },
      },
      {
        rotulo: "Sigue abierto",
        texto:
          "El caso continúa oficialmente sin resolver. El sospechoso principal durante décadas fue Arthur Leigh Allen, muerto en 1992: coincidía en algunos detalles, pero ni sus huellas ni su letra ni su ADN encajaron nunca. Quedan dos criptogramas menores sin descifrar. Y hay un detalle que se pasa por alto: el Zodiac se atribuyó 37 muertes, pero solo se le han confirmado cinco. Buena parte de su fama la construyó él mismo, escribiendo cartas, y los periódicos se la publicaron en portada porque él lo exigió.",
      },
    ],
  },
];
