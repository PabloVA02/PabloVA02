import type { Resumen } from "./tipos";

export const COSMOS: Resumen = {
  id: "cosmos",
  titulo: "Cosmos",
  autor: "Carl Sagan",
  ano: 1980,
  gancho: "Somos polvo de estrellas. No es una metáfora: el calcio de tus huesos se fabricó dentro de una estrella que explotó.",
  porQue:
    "Es el libro que convenció a media generación de científicos. Explica el universo entero sin una sola fórmula y sin rebajar nada.",
  partes: [
    {
      titulo: "El calendario cósmico",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Sagan tuvo una idea genial para hacer comprensible una cifra que no cabe en la cabeza: comprimir los 13.800 millones de años del universo en un solo año de calendario. El Big Bang es el 1 de enero a medianoche. La Vía Láctea se forma en mayo. El Sol y la Tierra, a principios de septiembre.",
        },
        {
          forma: "arte",
          texto:
            "Los dinosaurios aparecen el 25 de diciembre y se extinguen el 30. Los primeros humanos surgen el 31 de diciembre a las diez y media de la noche. Toda la historia escrita —Egipto, Roma, la imprenta, internet— cabe en los <strong>últimos diez segundos</strong> del 31 de diciembre.",
          arte: "noche",
        },
        {
          forma: "clave",
          rotulo: "La escala",
          frase: "Colón llegó a América hace un segundo. La Segunda Guerra Mundial ocurrió hace menos de medio.",
        },
      ],
    },
    {
      titulo: "Polvo de estrellas",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Tras el Big Bang solo existían hidrógeno y helio. Nada más. Ni carbono, ni oxígeno, ni hierro, ni calcio. Esos elementos no estaban: hubo que fabricarlos, y solo hay un sitio en el universo con la presión y la temperatura necesarias — el interior de una estrella.",
        },
        {
          forma: "texto",
          texto:
            "Las estrellas fusionan hidrógeno en helio, helio en carbono, y así hacia arriba hasta el hierro. Cuando una estrella grande agota su combustible, colapsa y explota como supernova, sembrando el espacio con todo lo que fabricó. Ese material se agrega, forma planetas, y termina en una vaca, en un ordenador o en tus dientes.",
        },
        {
          forma: "texto",
          texto:
            "Hay una consecuencia que Sagan disfrutaba señalando: los átomos que te forman han estado antes en otros sitios. El oxígeno que respiras ahora estuvo en el pulmón de alguien que vivió hace siglos, y el carbono de tus manos pasó por plantas, animales y rocas antes de llegar aquí. No hay materia nueva; solo hay materia reorganizada, prestada durante un rato.",
        },
        {
          forma: "clave",
          rotulo: "La frase que le hizo famoso",
          frase: "Estamos hechos de materia estelar. Somos una forma que tiene el cosmos de conocerse a sí mismo.",
        },
        {
          forma: "texto",
          texto:
            "Sagan lo dice sin ninguna cursilería: es literal y comprobable. El hierro de tu sangre y el calcio de tus huesos se fabricaron dentro de estrellas que murieron antes de que existiera el Sol. No es poesía adornando un hecho — es el hecho, contado bien.",
        },
      ],
    },
    {
      titulo: "El calendario cósmico",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El truco divulgativo más famoso de Sagan es comprimir los trece mil ochocientos millones de años del universo en un solo año de calendario. El Big Bang cae el 1 de enero a las cero horas. Cada mes equivale a algo más de mil millones de años, y cada segundo de ese año son unos cuatrocientos treinta y ocho años de los nuestros.",
        },
        {
          forma: "arte",
          texto:
            "La Vía Láctea se forma en marzo. El Sol y la Tierra no aparecen hasta principios de septiembre. La vida más simple surge a mediados de ese mes, y luego no pasa gran cosa durante muchísimo tiempo: los animales complejos no llegan hasta mediados de diciembre. Los dinosaurios se extinguen el 30 de diciembre.",
          arte: "mapa",
        },
        {
          forma: "clave",
          rotulo: "El golpe",
          frase: "Toda la historia humana escrita cabe en los últimos catorce segundos del 31 de diciembre.",
        },
        {
          forma: "texto",
          texto:
            "En esos segundos finales entra todo: las pirámides, Grecia, Roma, el Renacimiento, la imprenta, la Revolución Industrial y las dos guerras mundiales. Colón zarpa hacia América a falta de un segundo escaso para la medianoche. Sagan usa la escala no para achicarnos, sino para señalar hasta qué punto todo lo que consideramos importante ha ocurrido en un parpadeo.",
        },
        {
          forma: "texto",
          texto:
            "Su otra advertencia es sobre nosotros. La misma ciencia que nos enseñó de dónde venimos nos dio, en esos últimos segundos, la capacidad de terminar con todo. Sagan escribió en plena Guerra Fría y dedicó buena parte de su vida a explicar el invierno nuclear: era el mismo hombre en las dos tareas, divulgando y avisando.",
        },
      ],
    },
    {
      titulo: "La biblioteca y la humildad",
      tarjetas: [
        {
          forma: "arte",
          texto:
            "Uno de sus capítulos más recordados es sobre la Biblioteca de Alejandría y sobre Hipatia, la matemática asesinada por una turba en el año 415. Sagan lo usa para su tesis política: la ciencia no avanza sola ni es inevitable. Es frágil, depende de que una sociedad decida sostenerla, y se puede perder.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Y hace la cuenta que duele: si el conocimiento acumulado en Alejandría no se hubiera perdido, quizá la revolución científica habría llegado mil años antes. No es una afirmación demostrable —los historiadores discuten mucho su versión del incendio—, pero la advertencia aguanta.",
        },
        {
          forma: "texto",
          texto:
            "Su otra obsesión es el tamaño. Cuando la Voyager 1 se alejaba del sistema solar, Sagan insistió en que girara la cámara para fotografiar la Tierra desde seis mil millones de kilómetros. Salió un píxel azul pálido en un rayo de luz. Sobre él escribió que todos los reyes y guerras y amantes de la historia habían ocurrido en esa mota de polvo suspendida en un rayo de sol.",
        },
        {
          forma: "texto",
          texto:
            "Lo que hace distinto a <em>Cosmos</em> es que no se limita a divulgar hallazgos: enseña el método. Sagan dedica páginas a explicar cómo se distingue una afirmación buena de una mala, insistiendo en que en ciencia no hay autoridades y en que la única prueba admisible es la que cualquiera puede repetir. De ahí sale su regla más citada, que sigue siendo la mejor defensa contra el disparate: una afirmación extraordinaria exige pruebas extraordinarias.",
        },
        {
          forma: "clave",
          rotulo: "Para llevarte",
          frase: "No hay ningún indicio de que vaya a venir ayuda de otro sitio a salvarnos de nosotros mismos.",
        },
      ],
    },
  ],
};

export const POR_QUE_DORMIMOS: Resumen = {
  id: "por-que-dormimos",
  titulo: "Por qué dormimos",
  autor: "Matthew Walker",
  ano: 2017,
  gancho: "Dormir seis horas en vez de ocho no es un 25 % menos de descanso. Puede ser un 60 % menos de la parte que consolida la memoria.",
  porQue:
    "Cambió la conversación pública sobre el sueño. Conviene leerlo sabiendo que algunas de sus cifras han sido cuestionadas con razón.",
  partes: [
    {
      titulo: "La única cosa que no puedes saltarte",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Walker abre con una comparación: no hay ningún proceso biológico conocido que no se beneficie del sueño, ni ningún órgano al que no perjudique dormir poco. Y lo pone en perspectiva evolutiva — dormir es absurdamente peligroso: pasas un tercio de tu vida inconsciente e indefenso. Si la evolución no lo ha eliminado en cientos de millones de años, es que hace algo imprescindible.",
        },
        {
          forma: "clave",
          rotulo: "El dato",
          frase: "Dos semanas durmiendo seis horas te dejan igual de deteriorado que veinticuatro horas sin dormir. Y no lo notas.",
        },
        {
          forma: "arte",
          texto:
            "Ese «no lo notas» es la parte peligrosa. En los estudios, la gente privada de sueño calificaba su rendimiento como normal mientras sus pruebas se desplomaban. Perdemos la capacidad de juzgar cuánto hemos perdido, igual que un borracho no sabe que no debería conducir.",
          arte: "memoria",
        },
      ],
    },
    {
      titulo: "Dos sueños distintos",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El sueño no es un bloque. Hay <strong>sueño profundo</strong>, que domina la primera mitad de la noche y traslada los recuerdos del almacén temporal al duradero, y <strong>sueño REM</strong>, que domina la segunda mitad y se ocupa de la creatividad, la regulación emocional y el aprendizaje motor.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale el aviso más útil del libro: acortar la noche no recorta el sueño de forma proporcional. Si te acuestas tarde, pierdes sobre todo sueño profundo; si te levantas antes con el despertador, te quitas casi todo el REM, que se concentra en las últimas horas. Dos horas menos pueden eliminar más de la mitad de una fase entera.",
        },
        {
          forma: "clave",
          rotulo: "La limpieza",
          frase: "Durante el sueño profundo el cerebro se lava: el líquido cefalorraquídeo arrastra residuos, entre ellos la beta-amiloide del alzhéimer.",
        },
        {
          forma: "texto",
          texto:
            "También desmonta el mito del alcohol como somnífero. Sedar no es dormir: el alcohol fragmenta la noche en microdespertares que no recuerdas y bloquea el REM de forma muy marcada. Te duermes antes y descansas bastante peor.",
        },
      ],
    },
    {
      titulo: "Búhos, adolescentes y el turno de noche",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Ser de mañanas o de noches no es una cuestión de disciplina: es genético, y se hereda. Alrededor del cuarenta por ciento de la población es matutina, el treinta por ciento vespertina y el resto está en medio. Walker sostiene que probablemente sea una ventaja evolutiva —en un grupo que duerme por turnos naturales, siempre hay alguien despierto vigilando— y denuncia que el mundo laboral esté organizado entero a favor de los madrugadores.",
        },
        {
          forma: "arte",
          texto:
            "Con los adolescentes el asunto es más grave. En la pubertad el reloj interno se retrasa un par de horas de forma biológica: pedirle a un chaval de quince años que se duerma a las diez es como pedírselo a un adulto a las ocho de la tarde. Los institutos que retrasaron la hora de entrada midieron después mejores notas, menos absentismo y una caída notable de los accidentes de tráfico entre alumnos.",
          arte: "aprendizaje",
        },
        {
          forma: "clave",
          rotulo: "El dato que asusta",
          frase: "Conducir con menos de cinco horas de sueño multiplica el riesgo de accidente de forma comparable a hacerlo bebido.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un capítulo entero sobre el sueño y el aprendizaje que interesa a cualquiera que estudie. El sueño trabaja dos veces: antes de aprender, dejando el cerebro con capacidad libre para registrar cosas nuevas, y después, fijando lo aprendido. Una noche en blanco antes de un examen reduce la capacidad de memorizar en torno a un cuarenta por ciento. Estudiar toda la noche es el peor negocio posible.",
        },
        {
          forma: "texto",
          texto:
            "También explica de dónde salen esas ideas que aparecen al despertar. Durante el REM el cerebro conecta recuerdos distantes entre sí, y de ahí salen asociaciones que despierto no harías. Es la razón por la que a Mendeléyev se le ordenó la tabla periódica durmiendo y por la que Paul McCartney soñó la melodía de <em>Yesterday</em>: no es magia, es la fase que fabrica conexiones raras.",
        },
      ],
    },
    {
      titulo: "Qué hacer y qué matizar",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Sus consejos son pocos y consistentes: horario fijo también el fin de semana —lo más importante de todo—, dormitorio fresco, unos 18 grados, oscuridad total, nada de cafeína después del mediodía porque su vida media son unas seis horas, y no quedarse en la cama despierto más de veinte minutos.",
        },
        {
          forma: "texto",
          texto:
            "Ahora la parte honesta. En 2019 un investigador publicó una revisión detallada del libro señalando errores factuales y cifras exageradas, entre ellas la afirmación de que la OMS había declarado una «epidemia de falta de sueño», que no consta. Walker corrigió algunos puntos en ediciones posteriores. El consenso general sobre la importancia del sueño no está en duda; la contundencia de algunas cifras concretas, sí.",
        },
        {
          forma: "texto",
          texto:
            "Dos matices más que ahorran disgustos. Las pastillas para dormir más comunes no producen sueño natural sino sedación, y en los registros de actividad cerebral se ve que falta buena parte del sueño profundo; el tratamiento con mejor evidencia para el insomnio crónico no es un fármaco, es la terapia cognitivo-conductual. Y la siesta corta, de veinte minutos y antes de media tarde, sí ayuda: lo que destroza la noche es la de hora y media a las siete.",
        },
        {
          forma: "clave",
          rotulo: "Para llevarte",
          frase: "Lo único que importa de verdad es acostarse y levantarse a la misma hora. Todo lo demás son detalles.",
        },
      ],
    },
  ],
};

export const BREVE_HISTORIA_TIEMPO: Resumen = {
  id: "breve-historia-tiempo",
  titulo: "Breve historia del tiempo",
  autor: "Stephen Hawking",
  ano: 1988,
  gancho: "Le avisaron de que cada fórmula que incluyera reduciría a la mitad sus ventas. Dejó una: E=mc².",
  porQue:
    "Diez millones de ejemplares y un récord de nueve meses en las listas. Es el intento más logrado de contar la física moderna a alguien que no sabe física.",
  partes: [
    {
      titulo: "La tortuga",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Hawking abre con una anécdota. Un científico daba una conferencia sobre astronomía cuando una señora mayor le interrumpió: «todo eso es una tontería, el mundo es un plato apoyado en el lomo de una tortuga gigante». El científico, con sorna, preguntó sobre qué se apoyaba la tortuga. «Es usted muy listo, joven, pero hay tortugas hasta el fondo.»",
        },
        {
          forma: "clave",
          rotulo: "La pregunta del libro",
          frase: "¿Por qué nos parece ridícula la torre infinita de tortugas y no la torre infinita de causas anteriores?",
        },
        {
          forma: "arte",
          texto:
            "El libro es el recorrido desde Aristóteles hasta el Big Bang, contando cómo cambió cada vez la respuesta. Y está escrito por alguien que llevaba veinte años con ELA, componiendo cada frase mentalmente antes de dictarla letra a letra — lo que explica su brevedad y su falta de paja.",
          arte: "noche",
        },
      ],
    },
    {
      titulo: "El tiempo no es lo que crees",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La idea que más cuesta aceptar: el tiempo no es un telón de fondo universal. Va más despacio cuanto más fuerte es la gravedad y cuanto más rápido te mueves. No es una ilusión ni una forma de hablar: los relojes de los satélites GPS se ajustan cada día por esto, y si no se hiciera, la navegación acumularía kilómetros de error.",
        },
        {
          forma: "texto",
          texto:
            "De la relatividad general sale también el agujero negro: si concentras suficiente masa, la curvatura del espacio se vuelve tan pronunciada que ni la luz escapa. Hawking explica que un astronauta cayendo no notaría nada especial al cruzar el horizonte, mientras que desde fuera lo verían frenarse y enrojecer hasta congelarse. Las dos cosas son ciertas a la vez.",
        },
        {
          forma: "clave",
          rotulo: "Su aportación",
          frase: "Los agujeros negros no son del todo negros: se evaporan muy despacio. Es la radiación de Hawking.",
        },
        {
          forma: "texto",
          texto:
            "Ese hallazgo de 1974 fue su gran contribución. En el vacío se crean constantemente pares de partículas; si eso ocurre justo en el borde de un agujero negro, una cae y la otra escapa, y el agujero pierde masa poco a poco. Es lo que unió por primera vez la gravedad con la cuántica, aunque solo fuera en un rincón.",
        },
      ],
    },
    {
      titulo: "Las flechas del tiempo",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Hay una pregunta que Hawking plantea y que casi nadie se hace: ¿por qué recordamos el pasado y no el futuro? Las leyes de la física funcionan igual hacia delante que hacia atrás — una película de dos bolas de billar chocando tiene sentido al revés—, así que la dirección del tiempo no está en las ecuaciones. Tiene que venir de otro sitio.",
        },
        {
          forma: "arte",
          texto:
            "Su respuesta son tres flechas. La <strong>termodinámica</strong>: el desorden siempre aumenta, y por eso una taza rota nunca se recompone sola. La <strong>psicológica</strong>: recordamos en la dirección en que crece el desorden, porque grabar un recuerdo genera desorden. Y la <strong>cosmológica</strong>: el universo se expande. Lo llamativo es que las tres apuntan al mismo lado, y Hawking argumenta que no es casualidad.",
          arte: "explorar",
        },
        {
          forma: "clave",
          rotulo: "La consecuencia",
          frase: "Si el universo dejara de expandirse y empezara a contraerse, no viviríamos hacia atrás: simplemente no habría nadie allí para notarlo.",
        },
        {
          forma: "texto",
          texto:
            "Su ejemplo doméstico es un rompecabezas dentro de una caja. Hay una sola forma de que las piezas estén montadas y billones de formas de que estén sueltas, así que agitar la caja siempre desordena. Ese desequilibrio brutal entre las maneras de estar ordenado y las de estar desordenado es, literalmente, todo lo que hace falta para que el tiempo tenga una dirección.",
        },
        {
          forma: "texto",
          texto:
            "Dedica también un tramo a los viajes en el tiempo, y lo hace con humor: si algún día fueran posibles, ¿dónde están los turistas del futuro? Su respuesta favorita era que las leyes de la física conspiran para impedir las paradojas. Años después de publicar el libro organizó una fiesta para viajeros temporales y solo mandó las invitaciones al día siguiente. No apareció nadie.",
        },
      ],
    },
    {
      titulo: "El principio",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Si el universo se expande —y lo sabemos desde Hubble—, hacia atrás todo estuvo junto. El Big Bang no fue una explosión en el espacio: fue el comienzo del espacio y también del tiempo. Preguntar qué había antes, dice Hawking, se parece a preguntar qué hay al norte del Polo Norte.",
        },
        {
          forma: "arte",
          texto:
            "Su propuesta más audaz es la de «sin frontera»: que el universo no tenga principio ni fin, sino que sea finito y cerrado sobre sí mismo, como la superficie de la Tierra. Si fuera así, no haría falta nada externo que lo pusiera en marcha, y ahí está la frase final que dio la vuelta al mundo — que entonces conoceríamos «la mente de Dios».",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "El libro tiene fama de ser «el más comprado y menos terminado» de la historia, y algo hay: los últimos capítulos son duros. También ha envejecido en partes — la teoría de cuerdas prometía entonces mucho más de lo que ha dado. Pero sigue siendo el mejor sitio donde empezar si nunca has leído física.",
        },
        {
          forma: "clave",
          rotulo: "Para llevarte",
          frase: "Vivimos en un planeta menor de una estrella corriente. Pero podemos entender el universo, y eso nos hace especiales.",
        },
      ],
    },
  ],
};

export const RESPIRA: Resumen = {
  id: "respira",
  titulo: "Respira",
  autor: "James Nestor",
  ano: 2020,
  gancho: "Se tapó la nariz durante diez días bajo control médico. La tensión se le disparó y empezó a roncar veinte veces más.",
  porQue:
    "Casi todos respiramos mal y nadie nos ha enseñado a hacerlo bien. Es el libro de salud con mejor relación entre esfuerzo y resultado.",
  partes: [
    {
      titulo: "El experimento de Stanford",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Nestor y otro voluntario se sometieron a un experimento en Stanford: taponarse las fosas nasales con silicona durante diez días y respirar solo por la boca, con monitorización constante. Los resultados fueron peores de lo esperado. La tensión arterial de Nestor subió trece puntos, entró en prehipertensión, su variabilidad cardíaca se desplomó y los ronquidos pasaron de unos minutos a más de cuatro horas por noche.",
        },
        {
          forma: "clave",
          rotulo: "El resultado",
          frase: "En diez días respirando por la boca desarrolló apnea del sueño. Al volver a la nariz, todo revirtió en días.",
        },
        {
          forma: "arte",
          texto:
            "La nariz no es un agujero: calienta el aire, lo humedece, lo filtra y produce óxido nítrico, que dilata los vasos y mejora la absorción de oxígeno en torno a un 18 %. Respirar por la boca se salta todo eso. Es, dice, como comer por la nariz.",
          arte: "aprendizaje",
        },
      ],
    },
    {
      titulo: "Menos y más lento",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El segundo hallazgo es contraintuitivo: casi todos respiramos <em>de más</em>. La creencia popular dice que respirar hondo y mucho oxigena mejor, y es al revés. La sangre ya va casi saturada de oxígeno; lo que limita su entrega a los tejidos es el <strong>dióxido de carbono</strong>, que hiperventilando expulsamos en exceso.",
        },
        {
          forma: "texto",
          texto:
            "Es el efecto Bohr, descrito hace más de un siglo: sin suficiente CO₂ la hemoglobina no suelta el oxígeno que lleva. Por eso alguien con un ataque de pánico, jadeando, siente que le falta el aire — le sobra. Y por eso respirar en una bolsa funciona.",
        },
        {
          forma: "clave",
          rotulo: "El ritmo",
          frase: "Unas 5,5 respiraciones por minuto: 5,5 segundos inspirando, 5,5 espirando. Es el ritmo del rosario y del mantra.",
        },
        {
          forma: "texto",
          texto:
            "Ese dato es de los más bonitos del libro. Investigadores italianos midieron el efecto de recitar el rosario en latín y de cantar mantras de yoga: ambos llevan la respiración a ese mismo ritmo, y ambos sincronizan el ritmo cardíaco y bajan la tensión. Tradiciones separadas por continentes llegaron al mismo número.",
        },
      ],
    },
    {
      titulo: "Los pulmoneros",
      tarjetas: [
        {
          forma: "arte",
          texto:
            "Nestor dedica medio libro a lo que llama los <em>pulmoneros</em>: gente que a lo largo del siglo XX redescubrió por su cuenta cosas que la medicina había ignorado. Un dentista que documentó cómo cambian las caras de los niños que respiran por la boca. Un enfermero ucraniano, Buteyko, que trató el asma enseñando a respirar menos. Un instructor sueco que hizo correr a atletas con la boca cerrada y mejoró sus marcas.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "El truco doméstico que más ha dado que hablar es taparse los labios con un trocito de esparadrapo para dormir, para forzar la respiración nasal toda la noche. Nestor cuenta que le quitó los ronquidos casi por completo. Suena a barbaridad, hay médicos que lo desaconsejan a quien tenga la nariz obstruida o apnea sin diagnosticar, y conviene decirlo antes de que nadie lo pruebe.",
        },
        {
          forma: "clave",
          rotulo: "El ejercicio más útil",
          frase: "Espirar más largo que inspirar calma; inspirar más largo que espirar activa. El nervio vago responde en segundos.",
        },
        {
          forma: "texto",
          texto:
            "También explora el extremo contrario: la hiperventilación deliberada del método Wim Hof y del tummo tibetano, que a base de respirar muy fuerte y aguantar en vacío altera el pH de la sangre, dispara la adrenalina y permite soportar el frío. Nestor lo prueba en la nieve, y advierte de que es exactamente lo opuesto a todo lo demás del libro: una herramienta puntual, no una forma de respirar.",
        },
        {
          forma: "texto",
          texto:
            "Su conclusión une las dos mitades. Respirar despacio y por la nariz durante el noventa y nueve por ciento del día; usar la respiración intensa como se usa un sprint, en ratos cortos y a propósito. Lo importante es que la respiración es la única función automática del cuerpo que también puedes gobernar a voluntad — es la puerta de entrada al sistema nervioso que todos llevamos encima y casi nadie usa.",
        },
      ],
    },
    {
      titulo: "Bocas que encogen",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Su parte más sorprendente es antropológica. Los cráneos humanos anteriores a la industrialización tienen mandíbulas anchas, arcadas amplias y dientes rectos, casi sin caries ni apiñamiento. Los modernos, no. La razón que defiende: comida procesada y blanda desde la infancia, que no obliga a masticar y deja la cara sin desarrollar.",
        },
        {
          forma: "texto",
          texto:
            "Boca más pequeña significa vía aérea más estrecha, y de ahí los ronquidos y la apnea que afectan a millones de personas. Es la parte del libro donde más se estira la evidencia — muchos ortodoncistas discuten sus conclusiones—, así que conviene leerla como hipótesis interesante y no como hecho establecido.",
        },
        {
          forma: "texto",
          texto:
            "Nestor es periodista, no científico, y se le nota en los dos sentidos: cuenta muy bien y a veces presenta como establecido lo que es preliminar. El respaldo más firme lo tienen dos cosas — que la respiración nasal es mejor que la bucal, y que respirar lento y de forma pausada baja la tensión y activa el sistema parasimpático—. Con eso basta: son las dos que cuestan cero euros y se pueden empezar a hacer mientras se lee esta frase.",
        },
        {
          forma: "clave",
          rotulo: "Para llevarte",
          frase: "Cierra la boca. Respira por la nariz, más despacio y menos cantidad. Es gratis y se nota en una semana.",
        },
      ],
    },
  ],
};
