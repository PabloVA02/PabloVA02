import type { Short } from "../shorts";

/* ==========================================================================
   Hospitales.

   El riesgo del tema es el elogio de la medicina moderna: los avances, la
   esperanza de vida, la dedicación del personal. Cierto todo y sin
   ninguna historia dentro.

   La regla del tema: un hospital se cuenta por CÓMO SE ORGANIZA LA COLA.
   Quién entra primero, quién paga, quién puede quedarse. El triaje, el
   registro de defunciones, la habitación privada: son decisiones sobre el
   orden de las personas, y ahí es donde se ve de verdad cómo funciona una
   sociedad.

   Y las cifras de mortalidad se dan siempre comparadas con algo.
   ========================================================================== */

export const HOSPITALES: Short[] = [
  {
    id: "triaje-ambulancias",
    titulo: "La guerra inventó el triaje",
    gancho: "Decidió atender por gravedad y no por graduación. A un coronel le tocaba esperar.",
    categoria: "Hospitales",
    color: "var(--clay)",
    encargo: "Un carro ligero de dos ruedas con toldo, tirado por caballos, en un camino embarrado.",
    fotos: [
      {
        archivo: "Model ambulance, of McPherson, known as the Madras waggon, w Wellcome L0058527.jpg",
        autor: "Maqueta de un carro-ambulancia militar del siglo XIX, del Royal Army Medical College. Wellcome Collection.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Model_ambulance,_of_McPherson,_known_as_the_Madras_waggon,_w_Wellcome_L0058527.jpg",
        foco: "50% 62%",
        alt: "Un carro de madera con dos ruedas grandes de radios, con los laterales de rejilla y la trasera abierta.",
      },
      {
        archivo: "Model ambulance, of McPherson, known as the Madras waggon, w Wellcome L0058528.jpg",
        autor: "El mismo carro visto de perfil, con las camillas encajadas dentro. Wellcome Collection.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Model_ambulance,_of_McPherson,_known_as_the_Madras_waggon,_w_Wellcome_L0058528.jpg",
        foco: "50% 55%",
        alt: "Perfil de un carro de madera con toldo bajo y bandejas alargadas para tumbar heridos.",
      },
      {
        archivo: "German Sick, Captured at Messines, in a Canadian Hospital Art.IWMART3043.jpg",
        autor: "Prisioneros alemanes enfermos atendidos en un hospital de campaña canadiense, óleo de William Orpen, 1917. Imperial War Museum.",
        licencia: "Dominio público",
        pdPorEdad: 1931,
        fuente: "https://commons.wikimedia.org/wiki/File:German_Sick,_Captured_at_Messines,_in_a_Canadian_Hospital_Art.IWMART3043.jpg",
        foco: "50% 50%",
        alt: "Un hospital al aire libre pintado a plena luz, con una tienda a la izquierda y varios hombres tumbados bajo un árbol.",
      },
      {
        archivo: "Late in September 1918, while gathering material for 'Gassed' near Peronne, Sargent was struck down with influenza and taken to a hospital near Roisel. Here, he spent a week in a hospital bed next to the war-wo Art.IWMART1611.jpg",
        autor: "Interior de una tienda-hospital en el frente, acuarela de John Singer Sargent, 1918. Imperial War Museum.",
        licencia: "Dominio público",
        pdPorEdad: 1925,
        fuente: "https://commons.wikimedia.org/wiki/File:Late_in_September_1918,_while_gathering_material_for_'Gassed'_near_Peronne,_Sargent_was_struck_down_with_influenza_and_taken_to_a_hospital_near_Roisel._Here,_he_spent_a_week_in_a_hospital_bed_next_to_the_war-wo_Art.IWMART1611.jpg",
        foco: "50% 50%",
        alt: "Filas de catres bajo la lona de una tienda, con mantas pardas y rojas y la luz entrando por el fondo.",
      },
    ],
    entrada:
      "Europa, 1793. En los ejércitos de la época los heridos se recogen cuando termina la batalla, muchas veces al día siguiente por la mañana, y a la hora de atenderlos se empieza por los oficiales y se sigue por orden de graduación. Las dos costumbres parecen intocables y matan a muchísima gente. Un cirujano militar francés de veinticuatro años decide cambiarlas a la vez: monta un servicio de carros ligeros al que llama ambulancias volantes y, ya puestos, ordena atender a los heridos por gravedad de la herida y no por rango, empezando por quien peor está aunque sea del bando contrario.",
    paginas: [
      {
        rotulo: "Las ambulancias",
        texto:
          "Eran carros ligeros de dos ruedas, tirados por caballos y con suspensión, capaces de entrar en el campo de batalla mientras se seguía disparando y de sacar heridos en pleno combate. Llevaban camilleros, vendas y material quirúrgico, y trabajaban en compañías organizadas con su propio mando. Hasta entonces un herido podía pasar veinticuatro horas tirado en el barro esperando a que acabara todo, y la mayoría de las muertes no las causaba la herida en sí sino la hemorragia y la infección de las horas siguientes. Sacarlos deprisa cambió las cifras.",
        destacado: { tipo: "frase", frase: "Entraban a recoger heridos mientras se seguía disparando." },
      },
      {
        rotulo: "El orden",
        texto:
          "La segunda decisión costó bastante más de imponer. Estableció que se atendiera según la gravedad de la herida y la urgencia del caso, sin mirar el grado militar ni el bando: un soldado raso desangrándose pasaba antes que un coronel con un brazo roto, y un enemigo herido entraba en la misma cola que los propios. La palabra francesa que empleó para clasificarlos significa simplemente separar o escoger, y de ahí viene el término que se usa hoy en cualquier urgencia. Llegó a operar a doscientos heridos seguidos después de una batalla, sin dormir.",
        destacado: { tipo: "cifra", cifra: "200", unidad: "operaciones seguidas tras una batalla" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El sistema se copió en todos los ejércitos y, con el tiempo, salió del mundo militar: hoy cualquier servicio de urgencias clasifica a los pacientes por colores según la gravedad, y quien llega con algo leve espera aunque haya llegado el primero. Es una de las pocas ideas médicas que se explican en una frase y que salvan vidas sin necesidad de ningún aparato. Aquel cirujano acabó de jefe médico del ejército imperial y, cuando el imperio cayó, un general enemigo al que había atendido intercedió para salvarle la vida.",
      },
    ],
  },

  {
    id: "grafico-mortalidad",
    titulo: "Morían de suciedad",
    gancho: "En aquella guerra murieron más soldados de infección que de heridas. Lo enseñó con un dibujo.",
    categoria: "Hospitales",
    color: "var(--slate)",
    encargo: "Un diagrama circular antiguo dividido en doce sectores de colores.",
    fotos: [
      {
        archivo: "'One of the wards in the hospital at Scutari'. Wellcome M0007724 - restoration, cropped.jpg",
        autor: "Litografía de William Simpson, 1856: una de las salas del hospital de Escútari. Colección Wellcome, Londres.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3A'One%20of%20the%20wards%20in%20the%20hospital%20at%20Scutari'.%20Wellcome%20M0007724%20-%20restoration%2C%20cropped.jpg",
        foco: "50% 45%",
        alt: "Sala larga de hospital militar con camas a un lado, una estufa en el centro y personal atendiendo a los heridos.",
      },
      {
        archivo: "Crimean War; Florence Nightingale going around the wards at Wellcome M0003645.jpg",
        autor: "Grabado de <em>The Illustrated London News</em>, febrero de 1855: la ronda nocturna por las salas de Escútari.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ACrimean%20War%3B%20Florence%20Nightingale%20going%20around%20the%20wards%20at%20Wellcome%20M0003645.jpg",
        foco: "50% 50%",
        alt: "Estampa de una mujer con lámpara recorriendo de noche una sala llena de heridos tumbados en el suelo y en camastros.",
      },
      {
        archivo: "Portrait of Florence Nightingale Wellcome L0010475.jpg",
        autor: "Retrato de Florence Nightingale. Colección Wellcome, Londres.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3APortrait%20of%20Florence%20Nightingale%20Wellcome%20L0010475.jpg",
        foco: "50% 35%",
        alt: "Retrato de una mujer joven de mediados del siglo XIX, con el pelo recogido y vestido oscuro.",
      },
      {
        archivo: "Crimean War; Florence Nightingale at Scutari Hospital. Tinte Wellcome V0015436.jpg",
        autor: "Estampa coloreada del hospital de Escútari durante la guerra de Crimea. Colección Wellcome, Londres.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ACrimean%20War%3B%20Florence%20Nightingale%20at%20Scutari%20Hospital.%20Tinte%20Wellcome%20V0015436.jpg",
        foco: "50% 50%",
        alt: "Interior de un hospital de campaña con enfermas y enfermos, camillas y personal moviéndose entre las camas.",
      },
    ],
    entrada:
      "Crimea, 1854. Una enfermera británica llega con un grupo de treinta y ocho voluntarias a un hospital militar instalado en unos barracones prestados por el ejército turco. Lo que se encuentra dentro es peor que el frente: hay ratas, no hay jabón ni vendas limpias, las letrinas desaguan por debajo del edificio y los heridos yacen sobre paja con el mismo uniforme sucio con el que llegaron de la batalla. La mortalidad es enorme, eso lo ve cualquiera nada más entrar, pero nadie sabe exactamente cuánta ni de qué se muere la gente, porque no hay nadie contándolo.",
    paginas: [
      {
        rotulo: "Las cuentas",
        texto:
          "Lo primero que hizo fue llevar un registro riguroso: cuántos ingresaban, de qué, cuántos morían y por qué causa, algo que en un hospital militar de la época no se hacía de forma sistemática ni con fechas. Los números que salieron eran demoledores. En los peores meses moría más de la mitad de los ingresados, y la inmensa mayoría no por las heridas de guerra sino por tifus, cólera y disentería contraídos allí dentro. Es decir, el hospital mataba más que el campo de batalla, y las cifras lo mostraban mes a mes.",
        destacado: { tipo: "frase", frase: "El hospital mataba más soldados que el campo de batalla." },
      },
      {
        rotulo: "El dibujo",
        texto:
          "De vuelta en Londres se topó con el problema de siempre: nadie lee una tabla de números. Así que diseñó un gráfico circular dividido en doce porciones, una por cada mes, en el que el área de cada trozo representaba las muertes y el color distinguía la causa: azul para las enfermedades evitables, rojo para las heridas y negro para el resto. El azul se comía el dibujo entero. Aquella imagen la vieron ministros, diputados y la reina, y consiguió lo que no habían logrado tres informes: una comisión y dinero para reformar los hospitales.",
        destacado: { tipo: "cifra", cifra: "12", unidad: "porciones, una por cada mes de guerra" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Fue una de las primeras veces que se usó un gráfico para convencer a un gobierno, y la mujer que lo dibujó acabó siendo la primera socia de la sociedad estadística británica. Su otra herencia es la escuela de enfermería que fundó al volver, que convirtió el oficio en una profesión con formación reglada y jerarquía propia. Y la conclusión de aquel gráfico sigue vigente en cualquier hospital moderno: buena parte de lo que mata dentro de un edificio sanitario no es la enfermedad que trajo el paciente, sino lo que coge estando allí.",
      },
    ],
  },

  {
    id: "hospital-de-pobres",
    titulo: "El hospital era de pobres",
    gancho: "Quien tenía dinero se operaba en su casa, sobre la mesa del comedor, hasta hace un siglo.",
    categoria: "Hospitales",
    color: "var(--plum)",
    encargo: "Una sala larga con camas de hierro alineadas contra las dos paredes.",
    entrada:
      "Europa y América, 1870. Un hospital es una institución de beneficencia donde se atiende a quien no tiene familia ni dinero. Huele mal, las heridas se infectan casi siempre y la gente entra sabiendo que hay bastantes posibilidades de no volver a salir. Quien puede pagarlo hace venir al médico a su domicilio, y allí se opera.",
    paginas: [
      {
        rotulo: "La mesa",
        texto:
          "Las operaciones a domicilio eran habituales y además bastante razonables según la lógica de la época: en una casa había menos infecciones que en una sala común de treinta camas por la que pasaba un cirujano de un paciente a otro sin lavarse las manos. Se despejaba la mesa del comedor, se hervía agua y se apartaban las alfombras. Los hospitales, mientras tanto, se financiaban con donaciones y patronatos religiosos, y en sus salas el mismo espacio servía para un tuberculoso, para un enfermo de fiebres y para alguien con una pierna rota, todos respirando el mismo aire.",
        destacado: { tipo: "frase", frase: "Se despejaba la mesa del comedor y se hervía agua." },
      },
      {
        rotulo: "Los aparatos",
        texto:
          "Tres cosas cambiaron la situación en pocas décadas. La antisepsia, que hizo que operar dejara de ser una lotería; la anestesia, que permitió intervenciones largas y cuidadosas en lugar de amputaciones a toda prisa; y sobre todo los aparatos. Cuando aparecieron los rayos X, los laboratorios de análisis y los quirófanos con esterilización por vapor, la medicina dejó de caber en un maletín. Todo aquello era caro, ocupaba sitio y necesitaba personal formado, así que solo tenía sentido concentrarlo en un edificio, y el paciente tuvo que ir hasta allí.",
        destacado: { tipo: "cifra", cifra: "3", unidad: "cambios: antisepsia, anestesia y aparatos" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "En una sola generación el hospital pasó de ser el último recurso de los indigentes a ser el sitio donde iban los ricos, y hacia 1920 ya se anunciaban habitaciones privadas con teléfono y menú. La visita del médico a domicilio, que era lo normal, quedó reducida a una excepción para casos concretos. Ahora el movimiento parece ir un poco de vuelta: la cirugía sin ingreso, los aparatos portátiles y la consulta por pantalla devuelven parte de la atención a la casa. La mesa del comedor, eso sí, ya no la usa nadie.",
      },
    ],
  },
];
