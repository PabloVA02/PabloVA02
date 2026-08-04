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
    titulo: "El triaje lo inventó un cirujano de guerra",
    gancho: "Decidió atender por gravedad y no por graduación. A un coronel le tocaba esperar.",
    categoria: "Hospitales",
    color: "var(--clay)",
    encargo: "Un carro ligero de dos ruedas con toldo, tirado por caballos, en un camino embarrado.",
    entrada:
      "Europa, 1793. En los ejércitos de la época los heridos se recogen cuando termina la batalla, a veces al día siguiente, y se atiende primero a los oficiales por rango. Un cirujano militar francés de veinticuatro años decide cambiar las dos cosas a la vez y monta un servicio al que llama ambulancias volantes.",
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
    titulo: "Un gráfico demostró que morían de suciedad",
    gancho: "En aquella guerra murieron más soldados de infección que de heridas. Lo enseñó con un dibujo.",
    categoria: "Hospitales",
    color: "var(--slate)",
    encargo: "Un diagrama circular antiguo dividido en doce sectores de colores.",
    entrada:
      "Crimea, 1854. Una enfermera británica llega con un grupo de voluntarias a un hospital militar instalado en unos barracones. Hay ratas, no hay jabón, las letrinas desaguan por debajo del edificio y los heridos yacen sobre paja con el mismo uniforme con el que llegaron. La mortalidad es enorme y nadie sabe exactamente cuánta.",
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
    titulo: "El hospital era cosa de pobres",
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
