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
  gancho:
    "Dormir seis horas en vez de ocho no es un veinticinco por ciento menos de descanso: por cómo se reparte la noche, puede ser más de la mitad menos de la fase que consolida lo aprendido. Ese cálculo es el corazón del libro y es correcto.",
  porQue:
    "Porque cambió la conversación pública sobre el sueño y porque en 2019 un revisor independiente encontró en él errores de bulto, incluido un organismo internacional que nunca declaró la epidemia que el libro le atribuye. Las dos cosas son verdad a la vez.",
  partes: [
    {
      titulo: "Treinta y dos días en una cueva de Kentucky",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En el verano de 1938, dos investigadores de la Universidad de Chicago bajaron a una cueva de Kentucky con dos camas de hospital, comida y ningún reloj. Se quedaron allí treinta y dos días, a temperatura constante y sin un rayo de luz, para averiguar si el cuerpo sabe la hora por su cuenta.",
        },
        {
          forma: "texto",
          texto:
            "La respuesta fue que sí. Sin ninguna señal exterior, su temperatura corporal y sus ciclos de sueño siguieron subiendo y bajando con una regularidad de reloj, y ese reloj interno resultó correr un poco largo: algo más de veinticuatro horas, unos quince minutos de más al día.",
        },
        {
          forma: "texto",
          texto:
            "El experimento se repitió después de formas más extremas. En 1962 un espeleólogo francés pasó dos meses solo en una cueva de los Alpes sin saber la hora, y salió convencido de que era un mes antes de lo que era: había perdido veinticinco días de cuenta y su cuerpo seguía funcionando por ciclos.",
        },
        {
          forma: "texto",
          texto:
            "Ese detalle es lo más interesante de aquel encierro: el cuerpo mantuvo el ritmo y la cabeza perdió la cuenta. El tiempo que se vive y el tiempo que se mide se separaron por completo en dos meses, que es más o menos lo que sostiene «El orden del tiempo» desde la física.",
        },
        {
          forma: "texto",
          texto:
            "Ese desajuste de un cuarto de hora diario, por cierto, no es un defecto. Un reloj que va ligeramente largo es más fácil de retrasar que de adelantar, y encaja mejor con un planeta donde la duración del día cambia con las estaciones y con la latitud.",
        },
        {
          forma: "clave",
          rotulo: "Por qué importa ese cuarto de hora",
          frase: "Un reloj que se retrasa quince minutos al día necesita ponerse en hora cada mañana. Lo que lo pone en hora es la luz, y por eso una persiana bajada hasta las once desordena la semana entera.",
        },
        {
          forma: "texto",
          texto:
            "Y no vale cualquier luz. La que pone el reloj en hora es la del exterior, que a media mañana ronda los diez mil lux; una habitación bien iluminada anda por los trescientos. La diferencia entre desayunar junto a la ventana o al fondo del salón es de un orden de magnitud.",
        },
        {
          forma: "texto",
          texto:
            "El aparato que lleva ese ritmo son unas veinte mil células apiñadas justo encima del cruce de los nervios ópticos, en el centro del cerebro. Están ahí, y no en otro sitio, precisamente porque su trabajo es enterarse de si hay luz fuera antes que ninguna otra parte del cuerpo.",
        },
        {
          forma: "arte",
          texto:
            "Ese reloj no manda directamente el sueño: manda la melatonina, que es la que anuncia que ha caído la noche. Walker insiste en una precisión que casi nadie hace: la melatonina no duerme a nadie, solo da la señal de salida. Es el juez que dispara la carrera y no el que corre.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "El segundo mecanismo es completamente distinto y funciona a la vez. Mientras estamos despiertos se acumula en el cerebro una sustancia llamada adenosina, y cuanto más se acumula, más pesa la cabeza. A las dieciséis horas de vigilia la presión es tan alta que dormirse es casi inevitable.",
        },
        {
          forma: "texto",
          texto:
            "Los dos sistemas son independientes y por eso hay noches raras. Se puede tener muchísima presión de sueño acumulada y no dormirse porque el reloj interno cree que son las cinco de la tarde; eso es exactamente lo que le pasa a cualquiera que aterriza en otro continente.",
        },
        {
          forma: "texto",
          texto:
            "Y explica también el fenómeno de las tres de la mañana en el turno de noche: la presión de sueño está altísima y el reloj además está en su punto más bajo de alerta. Las dos curvas coinciden en el peor sitio posible, y ahí es donde ocurren los errores graves.",
        },
        {
          forma: "texto",
          texto:
            "La cafeína no da energía: se sienta en los mismos receptores donde debería encajar la adenosina y los bloquea. La presión sigue subiendo por debajo, solo que uno no la nota, y cuando el efecto pasa llega de golpe todo lo acumulado. Eso es el bajón de media tarde.",
        },
        {
          forma: "texto",
          texto:
            "El dato práctico es la vida media: al cabo de unas cinco o seis horas todavía queda en el cuerpo la mitad de la cafeína del café, y a las doce horas queda un cuarto. Un café a las cuatro de la tarde sigue trabajando a medianoche aunque uno se duerma igual.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí está el matiz que más gente necesita oír: mucha gente que toma café por la tarde se duerme sin problema y concluye que a ella no le afecta. Lo que la cafeína estropea no es tanto conciliar el sueño como la profundidad de las primeras horas, y eso no se nota al acostarse sino al día siguiente.",
        },
        {
          forma: "texto",
          texto:
            "Y una precisión que el libro hace bien: el descafeinado no es cero cafeína. Lleva una fracción pequeña pero real, suficiente para que tres tazas por la tarde sumen lo que media taza normal. No es un problema para casi nadie y conviene saberlo si uno duerme mal.",
        },
        {
          forma: "texto",
          texto:
            "De paso, una cifra famosa que circula en todas partes y es falsa: que el café es la segunda materia prima más comerciada del mundo después del petróleo. No lo es, ni de lejos, y sin embargo se repite en artículos, charlas y libros sobre el sueño desde hace treinta años.",
        },
        {
          forma: "texto",
          texto:
            "Sobre los cronotipos el libro es especialmente bueno. Ser de mañana o de noche no es una costumbre ni una cuestión de disciplina: tiene una base genética considerable, y el reparto en la población es de aproximadamente un cuarenta por ciento de gente matutina, un treinta vespertina y el resto en medio.",
        },
        {
          forma: "texto",
          texto:
            "Su explicación evolutiva es de las mejores páginas del libro: en un grupo humano que duerme junto, tener gente que se acuesta tarde y gente que se levanta pronto significa que casi nunca están todos inconscientes a la vez. La variedad de horarios era un sistema de guardia.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un caso donde esto tiene consecuencias medibles: la adolescencia. El reloj se retrasa varias horas durante esos años, por biología y no por móviles, de modo que empezar el instituto a las ocho equivale a pedirle a un adulto que rinda a las cinco de la mañana.",
        },
        {
          forma: "arte",
          texto:
            "La consecuencia es una injusticia que Walker señala con razón: el horario laboral y escolar está hecho para los de mañana. El vespertino no llega tarde por vago; llega tarde porque su reloj interno le pide dormirse dos horas después y levantarse dos horas después, y el mundo no se lo permite.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Ahí choca de frente con un vecino de esta misma categoría. «El milagro de la mañana» propone levantarse a las cinco como receta universal de éxito; este libro explica por qué para un tercio de la gente eso equivale a trabajar con dos horas menos de sueño para siempre.",
        },
        {
          forma: "texto",
          texto:
            "Dos hombres en una cueva sin relojes.",
        },
        {
          forma: "texto",
          texto:
            "Y un reloj interno que siguió funcionando igual.",
        },
        {
          forma: "texto",
          texto:
            "Todo lo demás del libro cuelga de ese descubrimiento de 1938.",
        },
      ],
    },
    {
      titulo: "Lo que se pierde al recortar dos horas",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La noche no es un bloque uniforme: son cuatro o cinco ciclos de hora y media, y cada uno mezcla dos sueños completamente distintos. El profundo, sin sueños, con ondas lentas y enormes; y el de movimientos oculares rápidos, en el que el cerebro está casi tan activo como despierto.",
        },
        {
          forma: "texto",
          texto:
            "Esa segunda fase tiene una particularidad que sigue impresionando: el cuerpo se paraliza. Los músculos quedan desconectados salvo los de los ojos y la respiración, y por eso soñar que uno corre no le hace levantarse de la cama. Es un cerebro encendido dentro de un cuerpo apagado a propósito.",
        },
        {
          forma: "texto",
          texto:
            "El sueño profundo se mide por unas ondas lentísimas que barren la corteza, y cuando alguien está en esa fase cuesta muchísimo despertarlo. Si a uno lo sacan de ahí de golpe, se queda unos minutos sin saber ni dónde está: eso es la inercia del sueño, y no es un fallo, es la fase saliendo.",
        },
        {
          forma: "texto",
          texto:
            "Y aquí está el dato que hace útil el libro entero: esa mezcla no es la misma a lo largo de la noche. En los primeros ciclos manda el sueño profundo, y en los últimos manda el de los sueños. La noche no se reparte a partes iguales, se reparte por tramos.",
        },
        {
          forma: "clave",
          rotulo: "La cuenta que conviene hacer",
          frase: "Quien duerme seis horas en vez de ocho no pierde un cuarto de todo por igual: pierde sobre todo las dos últimas horas, que son justo donde se concentra el sueño de los sueños.",
        },
        {
          forma: "texto",
          texto:
            "Esa asimetría explica por qué madrugar dos horas y acostarse dos horas más tarde no son lo mismo aunque el total sea idéntico. Recortar por el final se lleva por delante una fase; recortar por el principio se lleva la otra, y las dos hacen trabajos distintos.",
        },
        {
          forma: "texto",
          texto:
            "Y desmonta de paso una idea muy extendida: la de que se puede recuperar el sueño perdido durmiendo el sábado hasta las dos. Se recupera algo, sobre todo profundo, pero no se devuelve lo que no se hizo aquella noche, porque la mudanza de memoria tenía fecha y ya pasó.",
        },
        {
          forma: "texto",
          texto:
            "El trabajo del sueño profundo es sobre todo mudanza de memoria. Durante el día lo aprendido se guarda en un almacén pequeño y provisional, el hipocampo, y por la noche se traslada a la corteza, que es el archivo definitivo, liberando sitio para el día siguiente.",
        },
        {
          forma: "texto",
          texto:
            "La imagen que usa es la de una memoria USB con poca capacidad y un disco duro grande: si no se vacía la primera cada noche, al día siguiente no cabe nada nuevo. Es una metáfora y funciona, porque explica de una vez por qué después de dormir poco no se retiene nada.",
        },
        {
          forma: "arte",
          texto:
            "El transporte lo hacen unas ráfagas eléctricas de un segundo llamadas husos del sueño, y aquí hay otro detalle que cambia decisiones: son mucho más frecuentes en la última parte de la noche. La mudanza se hace de madrugada, justo en las horas que se recortan al poner el despertador antes.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "El experimento que Walker firmó en 2007 es el más citado del libro. Dos grupos aprendían listas de palabras: uno había dormido y el otro llevaba una noche en vela. El grupo sin dormir retuvo alrededor de un cuarenta por ciento menos, y las imágenes mostraron un hipocampo que casi no se activaba.",
        },
        {
          forma: "texto",
          texto:
            "El titular popular de ese estudio es «dormir poco te hace olvidar», y es impreciso. Lo que midió es otra cosa y más incómoda: sin dormir, el cerebro no llega a fabricar el recuerdo. No es que se borre después; es que no se guarda mientras se estudia.",
        },
        {
          forma: "texto",
          texto:
            "Conviene decir el tamaño del experimento, que el libro no da: eran unas pocas decenas de personas jóvenes, sanas y en un laboratorio, con una noche entera sin dormir. Es un diseño limpio y también un caso extremo, bastante distinto de dormir seis horas cada día durante un año.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale el consejo que más aprovecha un estudiante: dormir antes de estudiar importa tanto como dormir después. La primera noche prepara la capacidad de grabar y la segunda consolida lo grabado, así que la noche en vela antes de un examen ataca las dos.",
        },
        {
          forma: "texto",
          texto:
            "Esa idea conecta directamente con lo que sostiene «Hábitos atómicos» sobre repetir poco y a menudo: si lo aprendido se fija durmiendo, estudiar una hora cada día durante cinco días deja más que estudiar cinco horas la noche anterior, porque han pasado cinco noches por medio.",
        },
        {
          forma: "texto",
          texto:
            "Y lo mismo vale para cualquier destreza física. Los estudios de aprendizaje motor que cita muestran mejoras del veinte por ciento después de una noche de sueño, sin practicar nada más, en gente que se había estancado la tarde anterior. El progreso ocurre dormido.",
        },
        {
          forma: "texto",
          texto:
            "El sueño de los sueños hace un trabajo distinto y más raro: cruza recuerdos que no tienen nada que ver entre sí. En pruebas de resolver anagramas o de encontrar la regla oculta de una serie, la gente despertada de esa fase acierta bastante más que la despertada del sueño profundo.",
        },
        {
          forma: "texto",
          texto:
            "Walker lo llama sabiduría nocturna y lo ilustra con casos famosos: el químico que dice que soñó la tabla periódica y el fisiólogo que soñó el experimento que le dio el Nobel. El segundo caso está bien documentado; el primero se contó décadas después y por terceros, y conviene tomarlo como leyenda.",
        },
        {
          forma: "texto",
          texto:
            "El caso bien documentado merece contarse entero: aquel fisiólogo se despertó de madrugada en 1920, apuntó una idea, volvió a dormirse y por la mañana no pudo leer su propia letra. La noche siguiente soñó lo mismo, se levantó y se fue directo al laboratorio a las tres de la mañana.",
        },
        {
          forma: "texto",
          texto:
            "Hay una tercera función que se ha estudiado mucho desde 2013: durante el sueño, el líquido que baña el cerebro circula bastante más y arrastra residuos, entre ellos las proteínas que se acumulan en el alzhéimer. Es un hallazgo sólido en ratones y más discutido en humanos.",
        },
        {
          forma: "texto",
          texto:
            "El detalle que hace convincente ese hallazgo es mecánico: durante el sueño profundo las células del cerebro encogen y dejan más espacio entre ellas, de modo que el líquido circula por los huecos con mucha más facilidad. Es una limpieza que necesita que el edificio esté vacío.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí Walker se acelera. De que dormir ayude a limpiar esas proteínas a decir que dormir poco causa alzhéimer hay una distancia enorme, porque la enfermedad también estropea el sueño años antes de dar la cara. Cuál de las dos cosas empieza sigue sin estar resuelto.",
        },
        {
          forma: "texto",
          texto:
            "La noche no es un bloque.",
        },
        {
          forma: "texto",
          texto:
            "Es un reparto, y las dos últimas horas no son las que sobran.",
        },
        {
          forma: "texto",
          texto:
            "El despertador de las seis se lleva justo lo que menos conviene perder.",
        },
      ],
    },
    {
      titulo: "El volante y el sistema inmunitario",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El capítulo más sólido del libro, y el que ni sus críticos discuten, es el de la carretera. Un cerebro con sueño no se apaga poco a poco: se apaga a ráfagas de dos o tres segundos, sin avisar y sin que la persona se entere de que ha ocurrido.",
        },
        {
          forma: "texto",
          texto:
            "Esas ráfagas se llaman microsueños y son el motivo por el que conducir cansado es distinto de conducir borracho. El borracho reacciona tarde; el que tiene sueño no reacciona en absoluto durante unos segundos, con los ojos abiertos y las manos en el volante.",
        },
        {
          forma: "texto",
          texto:
            "Hay además una asimetría cruel entre las dos cosas: el alcohol se puede medir en el arcén con un aparato de veinte euros y el sueño no. Un accidente por somnolencia se registra casi siempre como distracción o salida de vía, y por eso todas las estadísticas de este asunto se quedan cortas.",
        },
        {
          forma: "texto",
          texto:
            "Y el remedio popular no sirve: bajar la ventanilla, subir la radio o darse en la cara aguanta unos minutos y nada más. Lo único que funciona es parar, y si hay café de por medio, tomarlo y echarse veinte minutos, porque la cafeína tarda justo ese rato en hacer efecto.",
        },
        {
          forma: "clave",
          rotulo: "La cuenta de la carretera",
          frase: "A cien por hora, cuatro segundos de microsueño son más de cien metros conducidos por nadie. No hay frenada tardía: no hay frenada.",
        },
        {
          forma: "texto",
          texto:
            "Los estudios que recoge apuntan a que la somnolencia está detrás de una parte enorme de los accidentes mortales, comparable o superior a la del alcohol y las drogas juntos. Es un dato difícil de medir con precisión, porque el sueño no deja rastro en una analítica, y aun así el orden de magnitud aguanta.",
        },
        {
          forma: "arte",
          texto:
            "Y hay un experimento natural que se repite dos veces al año en medio mundo: el cambio de hora. Los trabajos que cita encuentran una subida de infartos el lunes siguiente al cambio de primavera, cuando se pierde una hora, y una bajada tras el de otoño, cuando se gana.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Conviene decir el tamaño real de eso, porque el libro lo cuenta con más énfasis del que aguanta: son porcentajes llamativos sobre números absolutos pequeños, medidos en unos pocos hospitales, y otros estudios posteriores han encontrado efectos menores. La dirección es creíble; la magnitud, discutida.",
        },
        {
          forma: "texto",
          texto:
            "Aun así, el argumento contra el cambio de hora se sostiene sin necesidad de infartos: dos veces al año se le mueve el reloj a un continente entero, y a los cronotipos vespertinos les cuesta cerca de una semana recolocarse. Es un experimento que nadie ha justificado nunca con datos de salud.",
        },
        {
          forma: "texto",
          texto:
            "Con el sistema inmunitario hay un experimento precioso y bien hecho, de 2015. A ciento sesenta y cuatro voluntarios les midieron el sueño durante una semana con sensores y después les metieron el virus del resfriado por la nariz, en gotas, y los encerraron en un hotel a ver quién caía.",
        },
        {
          forma: "texto",
          texto:
            "El resultado: los que habían dormido menos de seis horas enfermaron unas cuatro veces más que los que pasaban de siete. Es de los pocos casos en los que se puede hablar de causa y no de correlación, porque el virus lo puso el investigador y el reparto fue el mismo para todos.",
        },
        {
          forma: "texto",
          texto:
            "Hay otro experimento del mismo estilo con vacunas: quien duerme poco la semana de la inyección genera bastante menos anticuerpos que quien duerme bien. Es un efecto medido en sangre, no una sensación, y es probablemente el argumento más práctico del libro entero.",
        },
        {
          forma: "texto",
          texto:
            "Práctico porque es accionable de verdad y por una vez sin épica: si te vacunas el jueves, duerme bien el miércoles. Cuesta cero euros, no hay nada que comprar y es de lo poquísimo en todo el estante de salud que se puede aplicar esta semana con una fecha concreta.",
        },
        {
          forma: "texto",
          texto:
            "Sobre el cáncer, el dato duro y comprobable es otro: la agencia internacional que clasifica los carcinógenos considera desde 2007 que el trabajo por turnos que desordena el reloj biológico es probablemente cancerígeno. Es una clasificación oficial y no una interpretación del autor.",
        },
        {
          forma: "texto",
          texto:
            "Ojo con lo que eso significa exactamente, porque es donde el libro empuja de más. Se refiere a turnos de noche mantenidos durante años, no a acostarse tarde un martes, y probablemente es la categoría que menos se parece a la vida del lector que compra un libro sobre el sueño.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí hay una consecuencia social que el libro apunta y que merece más espacio del que le da: los turnos de noche los hacen enfermeras, camioneros, panaderos y personal de fábrica. El coste de salud de dormir mal no está repartido por igual, y cae siempre del mismo lado.",
        },
        {
          forma: "texto",
          texto:
            "El capítulo de las pastillas es de los más útiles y también de los más militantes. Su argumento central es correcto: los somníferos habituales no producen sueño natural, producen sedación, y la memoria no se consolida igual bajo su efecto que durmiendo.",
        },
        {
          forma: "texto",
          texto:
            "La diferencia se ve en el electroencefalograma: bajo sedación aparecen ondas lentas, sí, pero con un patrón distinto del que hace la mudanza de memoria. Alguien puede pasar ocho horas inconsciente con una pastilla y despertar sin haber consolidado lo que aprendió el día anterior.",
        },
        {
          forma: "texto",
          texto:
            "Donde se pasa es al vincularlos con la mortalidad apoyándose en estudios observacionales, que comparan a gente que toma pastillas con gente que no y no pueden separar el efecto del fármaco del hecho de que quien lo toma suele estar más enfermo. Esa parte se lee mucho más segura de lo que es.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí acierta, y hay que apuntárselo, es la alternativa. La terapia cognitivo-conductual para el insomnio es hoy el tratamiento de primera elección según las guías médicas, por delante de cualquier pastilla, y Walker lo dice con todas las letras en un libro de gran público.",
        },
        {
          forma: "texto",
          texto:
            "Y su parte más contraintuitiva es que empieza quitando horas de cama en vez de añadirlas: a quien pasa nueve horas acostado durmiendo cinco se le restringe la cama a seis, para que el sueño se concentre y vuelva a asociarse con estar tumbado. Es incómodo y funciona.",
        },
        {
          forma: "texto",
          texto:
            "Que un libro que vende millones dedique páginas a decir que el mejor tratamiento no es un producto sino una terapia de seis semanas es lo contrario de lo que hace el estante donde está colocado, y merece decirse a su favor antes de entrar en lo que hace mal.",
        },
        {
          forma: "texto",
          texto:
            "Dos segundos de microsueño y cien metros a ciegas.",
        },
        {
          forma: "texto",
          texto:
            "Un virus en gotas y cuatro veces más resfriados.",
        },
        {
          forma: "texto",
          texto:
            "Esta parte del libro no la discute nadie, y es la que menos se cita.",
        },
      ],
    },
    {
      titulo: "La revisión de 2019",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En diciembre de 2019, un investigador independiente llamado Alexey Guzey publicó un texto largo con un título nada diplomático: que el libro estaba lleno de errores científicos y factuales. No era una reseña de opinión; era una lista de afirmaciones con la fuente original al lado.",
        },
        {
          forma: "texto",
          texto:
            "El caso más claro es una frase que el libro repite: que la Organización Mundial de la Salud ha declarado una epidemia de falta de sueño en los países desarrollados. Guzey fue a buscar esa declaración y no existe. No hay documento, ni comunicado, ni informe que diga eso.",
        },
        {
          forma: "texto",
          texto:
            "Ese tipo de error tiene un mecanismo conocido y no hace falta suponer mala fe: alguien lo escribe, otro lo cita, un tercero cita al segundo, y a la quinta repetición la afirmación ya circula sin fuente y suena a cosa sabida. Lo llamativo es que llegara a un libro de un catedrático.",
        },
        {
          forma: "texto",
          texto:
            "El propio Guzey lo cuenta así: no fue a cazar al autor, empezó a comprobar las citas del primer capítulo por curiosidad y se encontró con que varias no decían lo que el libro les hacía decir. Comprobar las fuentes de un superventas es un trabajo que casi nadie hace nunca.",
        },
        {
          forma: "clave",
          rotulo: "Por qué ese error es grave",
          frase: "No es un decimal mal puesto. Es prestarle a un organismo internacional una declaración que nunca hizo, y usarla como argumento de autoridad en la primera página de un libro divulgativo.",
        },
        {
          forma: "texto",
          texto:
            "El segundo hallazgo es un gráfico. El libro reproduce una figura sobre duración del sueño y mortalidad recortando la parte que no encajaba con su tesis, de modo que la curva parecía decir algo más rotundo de lo que decía el trabajo original. Walker admitió después ese error y lo corrigió.",
        },
        {
          forma: "texto",
          texto:
            "Lo que la figura original mostraba, y sigue mostrando en la literatura, es una curva en forma de u: mueren antes los que duermen muy poco y también los que duermen mucho. Esa segunda mitad es incómoda para una tesis de dormir más, y probablemente por eso desapareció.",
        },
        {
          forma: "texto",
          texto:
            "La explicación más aceptada de esa segunda rama, por cierto, no es que dormir mucho mate: es que la gente enferma duerme más. Pero el libro no la discute, y una curva recortada le ahorra al lector el matiz entero.",
        },
        {
          forma: "texto",
          texto:
            "El tercero es de exageración: afirmaciones del tipo de que dormir menos de seis o siete horas dobla el riesgo de cáncer o destroza el sistema inmunitario, dichas en presente y sin matices, cuando la evidencia detrás es de asociación, con muchos factores de por medio y magnitudes bastante menores.",
        },
        {
          forma: "texto",
          texto:
            "El problema de fondo de esas asociaciones es siempre el mismo: quien duerme cinco horas suele además trabajar a turnos, fumar más, tener menos dinero y más estrés. Separar el efecto del sueño del efecto de la vida que obliga a dormir cinco horas es dificilísimo, y el libro lo trata como resuelto.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una asimetría en cómo se presentan los resultados: cuando un estudio apunta a que dormir poco es malo, se cuenta como hallazgo; cuando otro no encuentra efecto, no aparece. Con cientos de trabajos publicados, elegir solo los primeros basta para construir cualquier tesis.",
        },
        {
          forma: "arte",
          texto:
            "Lo que ocurrió después dice tanto como la propia revisión. Walker publicó una respuesta reconociendo varios puntos, corrigió el gráfico y algunas frases en ediciones posteriores, y mantuvo el resto. La comunidad científica se dividió entre quien pedía más rigor y quien defendía el mensaje de fondo.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Conviene sacar la conclusión correcta y no la fácil. Que un libro tenga errores no lo convierte en falso, igual que tener razón en lo grueso no autoriza a inventarse una declaración de la OMS. Las dos cosas se sostienen a la vez y hay que leerlo sabiéndolas.",
        },
        {
          forma: "texto",
          texto:
            "Lo que aguanta entero es mucho: la arquitectura de la noche, el reparto entre las dos fases, el papel del sueño en la memoria, los microsueños al volante, el experimento del resfriado y la recomendación de la terapia frente a las pastillas. Ese es el ochenta por ciento del libro.",
        },
        {
          forma: "texto",
          texto:
            "Lo que hay que leer con pinzas son las cifras rotundas sobre enfermedades concretas, las relaciones de causa cuando los datos solo dan asociación, y el tono general de urgencia, que convierte cada noche mala en un aviso de catástrofe.",
        },
        {
          forma: "texto",
          texto:
            "Hay además un problema de método que se nota al leerlo con atención: el libro casi nunca dice cuánta gente había en un estudio ni de qué tipo era. Sin ese dato, un experimento de dieciséis personas y otro de diez mil suenan exactamente igual de contundentes.",
        },
        {
          forma: "texto",
          texto:
            "Es el mismo problema que tiene «Respira», dos fichas más allá, y también «Deja de ser tú»: la prosa iguala lo comprobadísimo con lo prometedor, y el lector no tiene manera de saber cuál es cuál sin ir a las notas, que casi nadie mira.",
        },
        {
          forma: "texto",
          texto:
            "La regla de lectura que sale de aquí sirve para cualquier libro de divulgación con tesis: cuando una frase suene demasiado redonda —dobla el riesgo, destroza el sistema inmunitario, acorta la vida—, conviene ir a la nota y mirar cuánta gente, cuánto tiempo y comparados con quién.",
        },
        {
          forma: "texto",
          texto:
            "Y ese es el patrón de casi todos los libros de divulgación con tesis: la selección. Se cuentan los trabajos que apuntan en la dirección del argumento y no los que no, y como cada uno por separado es real, el conjunto parece mucho más firme de lo que la literatura permite decir.",
        },
        {
          forma: "texto",
          texto:
            "El caso más limpio de eso es el de los que duermen poco de verdad. Existen mutaciones genéticas, encontradas en unas pocas familias, que permiten funcionar bien con cuatro o cinco horas; son rarísimas y el libro las usa para reforzar que casi nadie es una excepción, que es cierto y a la vez conveniente.",
        },
        {
          forma: "texto",
          texto:
            "El aviso que sí conviene retener de ese punto es real: casi todo el que dice necesitar cinco horas está midiendo mal, porque el cansancio crónico se normaliza y uno deja de notar lo que le falta. La prueba está en las vacaciones: si en tres días sin despertador duerme dos horas más, tenía deuda.",
        },
        {
          forma: "texto",
          texto:
            "Una epidemia declarada por nadie.",
        },
        {
          forma: "texto",
          texto:
            "Un gráfico recortado por donde no convenía.",
        },
        {
          forma: "texto",
          texto:
            "Y un libro que, aun así, tiene razón en casi todo lo importante.",
        },
      ],
    },
    {
      titulo: "Dormir con miedo a no dormir",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El efecto secundario más raro de este libro es el que menos se comenta: mucha gente lo termina asustada, y el miedo a no dormir es exactamente lo que impide dormir. Un libro que insiste en que cada noche mala te acorta la vida puede fabricar el problema que quiere resolver.",
        },
        {
          forma: "texto",
          texto:
            "Eso tiene nombre en la literatura médica desde 2017: ortosomnia, la obsesión por dormir perfectamente, descrita en pacientes que llegaban a la consulta con meses de datos de su pulsera y una ansiedad que no tenían antes de empezar a medirse.",
        },
        {
          forma: "texto",
          texto:
            "El nombre está bien puesto y viene del griego: recto, correcto. Es la misma raíz que la ortorexia, la obsesión por comer sano, y describe el mismo movimiento: una preocupación razonable que se convierte en el problema al llevarla al extremo del control diario.",
        },
        {
          forma: "texto",
          texto:
            "Los casos que describe el artículo original son casi cómicos si no fueran de gente que lo pasa mal: pacientes que dormían bien según los aparatos del laboratorio y mal según su pulsera, y que se creían la pulsera. El dato de la muñeca pesaba más que cómo se encontraban.",
        },
        {
          forma: "clave",
          rotulo: "La paradoja del sueño",
          frase: "Es el único proceso importante del cuerpo que empeora cuanto más lo intentas. Con la comida y el ejercicio, esforzarse funciona; con el sueño, esforzarse es la manera más segura de espantarlo.",
        },
        {
          forma: "texto",
          texto:
            "Por eso las pulseras y los anillos que puntúan la noche son un arma de doble filo. Miden bastante peor de lo que creen —confunden estar quieto con estar dormido—, y su nota de la mañana determina cómo se siente el usuario más que lo que ha dormido realmente.",
        },
        {
          forma: "texto",
          texto:
            "Distinguir fases requiere medir la actividad eléctrica del cerebro con electrodos en la cabeza, y una pulsera solo tiene movimiento y pulso. Lo que llama sueño profundo es una estimación a partir de estar quieto, y por eso una noche leyendo sin moverse puntúa parecido a una noche durmiendo.",
        },
        {
          forma: "texto",
          texto:
            "El consejo práctico entonces es incómodo para quien se ha gastado el dinero: si el aparato le está poniendo nervioso, lo mejor que puede hacer con él es guardarlo un mes. La medida de si uno duerme bien es cómo está a las once de la mañana, no una nota sobre cien.",
        },
        {
          forma: "texto",
          texto:
            "El propio Walker, en entrevistas posteriores, ha tenido que ir matizando el tono y decir que una noche mala no arruina nada. Es lo correcto, y llega después de un libro escrito con una urgencia que a mucha gente le costó un par de meses de insomnio nuevo.",
        },
        {
          forma: "arte",
          texto:
            "Lo mismo le pasa a un vecino de esta categoría, «Respira», de Nestor: los dos convierten una función automática en una tarea que hay que hacer bien. Con la respiración el riesgo es menor; con el sueño, vigilarlo es literalmente la manera de no conseguirlo.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Y hay una tercera vía en la misma estantería que resuelve mejor esta tensión: «Vivir con plenitud las crisis», de Kabat-Zinn, cuyo entrenamiento consiste precisamente en dejar de pelearse con lo que ocurre. Aplicado a una noche en vela, es lo contrario de contar las horas perdidas.",
        },
        {
          forma: "texto",
          texto:
            "La parte accionable del libro es corta y merece quedarse. Regularidad antes que cantidad: acostarse y levantarse a la misma hora todos los días, incluidos los fines de semana, es lo que más ordena el reloj interno y lo que menos cuesta cumplir.",
        },
        {
          forma: "texto",
          texto:
            "Y de las dos horas, la que más manda es la de levantarse. La de acostarse depende del sueño, que no se ordena; la de levantarse depende de un despertador, y como es la que expone a la luz de la mañana, es la que de verdad pone en hora el reloj de las veinte mil células.",
        },
        {
          forma: "texto",
          texto:
            "Oscuridad y frío: la temperatura del cuerpo tiene que bajar aproximadamente un grado para entrar en el sueño, así que una habitación fresca ayuda de verdad y una ducha caliente antes de acostarse también, porque saca sangre a la piel y enfría el centro.",
        },
        {
          forma: "texto",
          texto:
            "Luz por la mañana y poca por la noche, que es la manera de poner en hora ese reloj que se retrasa un cuarto de hora al día. Diez minutos de calle al levantarse hacen más por el sueño de esa noche que cualquier infusión antes de acostarse.",
        },
        {
          forma: "texto",
          texto:
            "Sobre las pantallas, el matiz que el libro no hace del todo: el problema no es solo la luz azul, que a la distancia a la que se usa un móvil aporta menos de lo que se dice, sino lo que se hace con ellas. Media hora de mensajes o de noticias activa la cabeza más que los fotones.",
        },
        {
          forma: "texto",
          texto:
            "Y el alcohol, que es la creencia más extendida y más falsa: no da sueño, sino sedación, y además fragmenta la segunda mitad de la noche y suprime la fase de los sueños. La copa de antes de dormir es exactamente el peor somnífero disponible y el más recomendado por los amigos.",
        },
        {
          forma: "texto",
          texto:
            "Y la regla de la cama, que es la más contraintuitiva y la más eficaz: si no llega el sueño en veinte minutos, hay que levantarse e irse a otra habitación hasta que llegue. Quedarse dando vueltas enseña al cerebro que la cama es el sitio donde uno se pelea consigo mismo.",
        },
        {
          forma: "texto",
          texto:
            "Y no vale mirar el reloj para contar esos veinte minutos: se calculan a ojo, porque comprobar la hora a las cuatro de la mañana es exactamente el gesto que convierte el insomnio en aritmética —quedan tres horas, quedan dos y media— y esa cuenta atrás no deja dormir a nadie.",
        },
        {
          forma: "texto",
          texto:
            "Esas últimas reglas no son de Walker: son el núcleo de la terapia cognitivo-conductual para el insomnio, que lleva cuarenta años probándose en ensayos y funciona mejor que las pastillas a medio plazo. Él las recoge, y ese es el mejor servicio que presta el libro.",
        },
        {
          forma: "texto",
          texto:
            "El destino del viaje, entonces, es una lectura desdoblada: hacerle caso en lo que propone hacer, que es sensato y barato, y desconfiar de la parte que asusta, que es la que ha necesitado correcciones. Un libro puede ser útil y estar exagerado al mismo tiempo.",
        },
        {
          forma: "texto",
          texto:
            "Duerme a la misma hora, con la casa fresca y a oscuras.",
        },
        {
          forma: "texto",
          texto:
            "Y si no llega el sueño en veinte minutos, levántate.",
        },
        {
          forma: "texto",
          texto:
            "Lo demás es no tenerle miedo a una noche mala, que también las tiene todo el mundo.",
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
  gancho:
    "Su editor le avisó de que cada ecuación que dejara en el libro reduciría las ventas a la mitad. Hawking dejó una sola, la de Einstein, y vendió más de diez millones de ejemplares. Un matemático calculó después que el lector medio abandona en la página veintiséis.",
  porQue:
    "Porque metió la cosmología en las casas de medio mundo, y porque casi todo lo que la gente cree saber de él —el Nobel que no tuvo, la frase sobre la mente de Dios, los agujeros negros que se evaporan— necesita una corrección que el propio Hawking hizo en vida.",
  partes: [
    {
      titulo: "Un editor que contó las ecuaciones",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "A mediados de los ochenta, un físico de Cambridge de cuarenta y pocos años le lleva a un editor de Nueva York el borrador de un libro sobre el origen del universo. El editor lo lee y le da un consejo comercial que se ha hecho célebre: cada fórmula que deje dentro venderá la mitad de ejemplares.",
        },
        {
          forma: "texto",
          texto:
            "El borrador que le llevó no era este. La primera versión estaba escrita para lectores con formación científica, y el editor le hizo reescribirla entera varias veces, cada una más sencilla que la anterior. El libro que se vendió es la cuarta o quinta versión de aquello.",
        },
        {
          forma: "texto",
          texto:
            "Hawking le hizo caso casi por completo. En todo el libro quedó una sola ecuación, la más famosa del siglo veinte, la que relaciona energía y masa, y todo lo demás se explicó con palabras, con analogías y con unos pocos dibujos. Esa decisión es la razón de que exista el fenómeno.",
        },
        {
          forma: "texto",
          texto:
            "El consejo del editor era falso como estadística y certero como intuición. Nadie ha medido nunca esa curva de ventas por ecuación, pero cualquiera que haya visto a un lector saltarse una fórmula sabe que la dirección es la correcta, y el libro entero es la prueba del experimento.",
        },
        {
          forma: "texto",
          texto:
            "Y tiene una consecuencia que se paga: sin ecuaciones, todo se explica con analogías, y una analogía siempre miente un poco. Buena parte de los malentendidos populares sobre agujeros negros y tiempo vienen de metáforas de este libro tomadas al pie de la letra.",
        },
        {
          forma: "clave",
          rotulo: "El objetivo declarado",
          frase: "Hawking dijo que quería un libro que se vendiera en las tiendas de los aeropuertos. Lo consiguió: pasó doscientas treinta y siete semanas en la lista de más vendidos del Sunday Times, un récord que entró en el Guinness.",
        },
        {
          forma: "texto",
          texto:
            "Y había un motivo doméstico detrás que se cuenta poco: quería dinero. Su enfermedad exigía cuidados carísimos y tenía hijos en edad escolar, así que se propuso escribir algo que vendiera de verdad, no un ensayo académico. La ciencia popular se lo debe a una factura.",
        },
        {
          forma: "texto",
          texto:
            "Lo consiguió con creces y con un efecto secundario que le divertía: se hizo famoso a un nivel que ningún físico había alcanzado desde Einstein, con apariciones en series de dibujos, anuncios y una película sobre su vida. Nada de eso estaba en el plan de la factura.",
        },
        {
          forma: "texto",
          texto:
            "Conviene recordar en qué condiciones lo escribió. Le habían diagnosticado esclerosis lateral amiotrófica a los veintiún años, en 1963, con un pronóstico de dos años de vida. Cuando entregó este libro llevaba veinticinco años desmintiendo aquel pronóstico y vivió treinta más.",
        },
        {
          forma: "texto",
          texto:
            "Él contaba que el diagnóstico, paradójicamente, le puso a trabajar: hasta entonces era un estudiante brillante y perezoso, y saber que le quedaban dos años le hizo elegir un problema difícil y meterse en él. La productividad llegó con la sentencia, no antes.",
        },
        {
          forma: "texto",
          texto:
            "También conviene decir que su caso es médicamente excepcional. La forma habitual de esa enfermedad mata en pocos años; la suya avanzó despacísimo durante medio siglo, algo que ocurre en un porcentaje pequeñísimo de pacientes y que sigue sin estar bien explicado.",
        },
        {
          forma: "arte",
          texto:
            "En 1985, en mitad de la escritura, cogió una neumonía en Ginebra y hubo que practicarle una traqueotomía. Perdió la voz para siempre. El resto del libro lo terminó con un sintetizador que manejaba con la mano y que producía unas quince palabras por minuto: cada página costó horas.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "Aquella voz metálica, por cierto, era un aparato estadounidense de los ochenta, y por eso Hawking hablaba inglés con acento americano. Cuando la tecnología mejoró se negó a cambiarla: para entonces ya se había convertido en su voz y no quiso sonar de otra manera.",
        },
        {
          forma: "texto",
          texto:
            "El sistema funcionaba con un interruptor que pulsaba con la mano mientras un cursor recorría un teclado en pantalla; con los años, cuando perdió el movimiento de la mano, pasó a manejarlo con un sensor pegado a la mejilla que detectaba la contracción de un músculo.",
        },
        {
          forma: "texto",
          texto:
            "Conviene tener eso en la cabeza al leerlo. Cada frase de este libro pasó por un dedo primero y por una mejilla después, a razón de un puñado de palabras por minuto, y aun así no hay una sola página escrita con prisa ni una explicación despachada.",
        },
        {
          forma: "texto",
          texto:
            "Sobre las ventas hay una cifra célebre y otra más divertida. La primera: más de diez millones de ejemplares en cuarenta idiomas. La segunda la calculó un matemático en 2014 mirando dónde dejaban de subrayar los lectores de libro electrónico, y la llamó el índice Hawking.",
        },
        {
          forma: "texto",
          texto:
            "El resultado de aquel cálculo fue que el subrayado medio se detenía en torno al seis y medio por ciento del libro, es decir, alrededor de la página veintiséis de doscientas cincuenta. De ahí sale la fama de ser el libro más comprado y menos terminado de la historia reciente.",
        },
        {
          forma: "texto",
          texto:
            "El mismo cálculo puso a otros libros famosos en la misma lista, algunos de economía y algunos de historia, así que Hawking no está solo. Lo que el índice mide en realidad es la distancia entre el libro que uno quiere haber leído y el que está dispuesto a leer.",
        },
        {
          forma: "texto",
          texto:
            "Es un método imperfecto y aun así dice algo verdadero: el libro empieza siendo asombrosamente claro y se vuelve muy difícil hacia la mitad, justo cuando llegan el tiempo imaginario y la función de onda del universo. Ahí es donde se queda la mayoría.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una segunda explicación del abandono que no es intelectual sino de expectativa: mucha gente lo compró creyendo que era un libro sobre el tiempo en el sentido de la vida y la memoria, y se encontró con termodinámica y geometría. El título prometía otra cosa.",
        },
        {
          forma: "texto",
          texto:
            "Y esa es la primera advertencia útil para quien lo abra hoy: los cuatro primeros capítulos son de una claridad que no ha envejecido, y a partir del octavo hay que aceptar que se entiende a medias. Leerlo entero no es obligatorio y abandonarlo a la mitad no es un fracaso.",
        },
        {
          forma: "texto",
          texto:
            "Una sola ecuación en todo el libro.",
        },
        {
          forma: "texto",
          texto:
            "Diez millones de ejemplares y quince palabras por minuto.",
        },
        {
          forma: "texto",
          texto:
            "Y un lector medio que se baja en la página veintiséis.",
        },
      ],
    },
    {
      titulo: "El universo que no cabía en un punto",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El libro empieza con una anécdota que se ha citado mil veces. Después de una conferencia sobre astronomía, una señora mayor se levanta y dice que todo eso es una tontería, que el mundo es un plato apoyado sobre una tortuga gigante. Le preguntan sobre qué se apoya la tortuga.",
        },
        {
          forma: "texto",
          texto:
            "Y ella contesta que es muy listo, jovencito, pero que hay tortugas hasta abajo. Hawking la usa para plantear la pregunta del libro entero: cualquier explicación del universo tiene que parar en algún sitio, y el problema es que todo sitio donde pare exige explicar por qué para ahí.",
        },
        {
          forma: "texto",
          texto:
            "El primer hecho duro que cuenta es de 1929. Edwin Hubble midió la luz de galaxias lejanas y encontró que casi todas se alejan de nosotros, y que cuanto más lejos están, más deprisa se alejan. No es que nos rehúyan: es que el espacio entero se está estirando.",
        },
        {
          forma: "texto",
          texto:
            "La imagen que usa para explicarlo es un globo con puntos pintados: al hincharlo, todos los puntos se separan de todos, y desde cualquiera de ellos parece que uno está en el centro. No hay centro de la expansión, y esa es la parte que cuesta más aceptar.",
        },
        {
          forma: "texto",
          texto:
            "Y hay que precisar algo que la imagen del globo confunde: no se expanden las galaxias ni las mesas ni las personas. Lo que crece es el espacio entre grupos de galaxias, allí donde la gravedad es demasiado débil para sujetarlos. Nadie se está estirando en su salón.",
        },
        {
          forma: "texto",
          texto:
            "Conviene añadir el nombre que el libro no da: dos años antes que Hubble, en 1927, un sacerdote y físico belga llamado Georges Lemaître había publicado la misma relación y la idea del átomo primitivo. Su artículo salió en una revista poco leída y en francés.",
        },
        {
          forma: "texto",
          texto:
            "El nombre Big Bang, por cierto, se lo puso un rival. Fred Hoyle, que defendía un universo eterno, lo usó en la radio en 1949 como burla —la gran explosión—, y se quedó. Es de los pocos casos en que una teoría lleva para siempre el mote que le puso quien no se la creía.",
        },
        {
          forma: "clave",
          rotulo: "La consecuencia inevitable",
          frase: "Si el universo se expande, ayer estaba más junto. Y si se rebobina lo suficiente, todo estuvo en el mismo sitio a la vez, en un instante en el que la densidad y la curvatura se vuelven infinitas.",
        },
        {
          forma: "texto",
          texto:
            "Ese instante es lo que se llama una singularidad, y la palabra significa algo muy concreto y muy incómodo: el punto donde las ecuaciones de la relatividad dejan de dar resultados. No es que allí pasara algo raro; es que la teoría deja de poder decir qué pasó.",
        },
        {
          forma: "texto",
          texto:
            "Ese matiz es el que más se pierde en las conversaciones de sobremesa. Cuando un físico dice que en el Big Bang la densidad era infinita no está describiendo el universo, está diciendo que su mejor herramienta ha dejado de funcionar y que ahí hace falta otra cosa.",
        },
        {
          forma: "arte",
          texto:
            "Y aquí hay que hacer justicia, porque la versión popular se la salta. El teorema que demuestra que esas singularidades son inevitables lo publicó Roger Penrose en 1965, para los agujeros negros; lo que hizo Hawking fue extenderlo, con él, al universo entero hacia atrás en el tiempo.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Hay que decir en su descargo que el libro sí cita a Penrose repetidamente y no oculta nada: el reparto lo hizo la fama, no el autor. Es un buen ejemplo de cómo un divulgador con carisma acaba llevándose el crédito de un trabajo compartido sin haberlo pedido.",
        },
        {
          forma: "texto",
          texto:
            "Ese detalle tiene un desenlace que duele. En 2020, el premio Nobel de física reconoció precisamente aquel trabajo sobre singularidades, y lo recibió Penrose. Hawking había muerto en 2018, y el Nobel no se concede a título póstumo.",
        },
        {
          forma: "texto",
          texto:
            "La segunda herramienta que explica es el cono de luz, y es la mejor página del libro. Como nada viaja más rápido que la luz, cada suceso tiene un cono hacia el pasado, con todo lo que ha podido influirle, y otro hacia el futuro, con todo aquello sobre lo que podrá influir.",
        },
        {
          forma: "texto",
          texto:
            "Fuera de esos dos conos queda una región enorme que no es ni pasado ni futuro para uno, y sobre la que no se puede saber ni actuar. Esa idea, dibujada, explica en treinta segundos por qué la palabra ahora no significa lo mismo aquí que en otra galaxia.",
        },
        {
          forma: "texto",
          texto:
            "El nombre técnico de esa región es otro lugar, y su tamaño depende de la distancia: con la Luna son un par de segundos y con la estrella más cercana, ocho años. Todo lo que ocurra allí dentro es, para nosotros, ni presente ni pasado ni futuro.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale también la respuesta a la pregunta de por qué nada puede ir más rápido que la luz. No es que sea difícil ni que falte potencia: es que hacerlo significaría salir del cono y llegar antes de haber salido, y con eso la palabra causa deja de tener sentido.",
        },
        {
          forma: "texto",
          texto:
            "Sobre eso mismo hay otro libro en esta categoría que lo lleva mucho más lejos: «El orden del tiempo», de Rovelli, que dedica un capítulo entero a la franja que no es ni antes ni después. Hawking lo deja apuntado en tres páginas y Rovelli construye un libro encima.",
        },
        {
          forma: "texto",
          texto:
            "El otro pilar es la mecánica cuántica, y aquí Hawking se apoya en el principio de incertidumbre: no se puede conocer a la vez con precisión la posición y la velocidad de una partícula, y no por falta de instrumentos, sino porque no están las dos definidas al mismo tiempo.",
        },
        {
          forma: "texto",
          texto:
            "De ahí saca la tensión que ordena todo el libro: la relatividad describe magníficamente lo grande y la cuántica lo pequeño, y las dos se contradicen justo donde algo es a la vez muy pequeño y muy masivo. Es decir, en una singularidad. El problema del libro es también el de la física.",
        },
        {
          forma: "texto",
          texto:
            "Y esa tensión sigue exactamente igual de abierta hoy. Las dos teorías son las más comprobadas de la historia de la ciencia, cada una en su terreno, y no hay manera de que las dos sean del todo ciertas a la vez. La física lleva un siglo viviendo con esa contradicción.",
        },
        {
          forma: "texto",
          texto:
            "Tortugas hasta abajo.",
        },
        {
          forma: "texto",
          texto:
            "Galaxias que se alejan y un pasado cada vez más apretado.",
        },
        {
          forma: "texto",
          texto:
            "Y un instante donde las ecuaciones se callan.",
        },
      ],
    },
    {
      titulo: "Los agujeros negros no son tan negros",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El descubrimiento que da a Hawking su sitio en la física no está en la portada del libro pero es su centro. En 1974, con treinta y dos años, demostró algo que nadie esperaba: que los agujeros negros no son del todo negros, porque emiten radiación y con el tiempo se evaporan.",
        },
        {
          forma: "texto",
          texto:
            "La idea sale de juntar las dos teorías que no se llevan bien. En el vacío, según la cuántica, aparecen y desaparecen constantemente pares de partículas. Si eso ocurre justo en el borde de un agujero negro, una puede caer dentro y la otra escapar hacia fuera.",
        },
        {
          forma: "texto",
          texto:
            "Esa explicación con parejas de partículas es la que Hawking puso en el libro y también la que él mismo consideraba una analogía tosca. El cálculo real no habla de partículas que se separan, sino de cómo cambia el vacío cuando el espacio está muy curvado, que es bastante menos visual.",
        },
        {
          forma: "texto",
          texto:
            "Él contaba que la idea le llegó peleándose con un resultado ruso que decía que los agujeros negros en rotación debían emitir algo. Se puso a hacer el cálculo para refutarlo y le salió que emitían todos, girasen o no, y estuvo semanas convencido de que se había equivocado.",
        },
        {
          forma: "texto",
          texto:
            "Merece la pena señalarlo porque es el caso más claro del precio de escribir sin ecuaciones: la imagen que se quedó en la cabeza de millones de lectores es una simplificación que el propio autor no defendía como descripción de lo que ocurre.",
        },
        {
          forma: "clave",
          rotulo: "Lo que implica",
          frase: "Un agujero negro pierde masa poco a poco y termina desapareciendo. Deja de ser el sumidero eterno del universo para ser algo que también tiene una vida y un final.",
        },
        {
          forma: "texto",
          texto:
            "Y con una perversidad que le encantaba: cuanto más pequeño es un agujero negro, más caliente está y más deprisa se evapora. El final no es un apagarse suave, es una explosión, y los últimos instantes liberan más energía que todas las bombas fabricadas por la humanidad.",
        },
        {
          forma: "texto",
          texto:
            "Y aquí llega la corrección que casi nadie hace, y que explica el famoso Nobel que nunca tuvo. Esa radiación no se ha observado jamás. Ni una vez. Es una predicción teórica preciosa y sin una sola confirmación experimental en cincuenta años.",
        },
        {
          forma: "texto",
          texto:
            "El motivo es de tamaño. Un agujero negro con la masa del Sol tendría una temperatura de unas milmillonésimas de grado sobre el cero absoluto, mucho más fría que el fondo de radiación que llena el universo, así que absorbe muchísimo más de lo que emite. No hay nada que medir.",
        },
        {
          forma: "texto",
          texto:
            "Y el reloj tampoco ayuda: un agujero negro de masa solar tardaría en evaporarse un número de años que se escribe con sesenta y siete cifras, muchísimo más que la edad del universo. La predicción es real y su comprobación directa está fuera del alcance de cualquier experimento imaginable.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí se ha hecho son análogos de laboratorio: fluidos y condensados que imitan el borde de un agujero negro y en los que se ha observado algo parecido a esa radiación. Es una pista interesante y no es una confirmación, porque son sistemas distintos que comparten las matemáticas.",
        },
        {
          forma: "texto",
          texto:
            "Aun así, casi ningún físico duda de que la radiación exista. La razón es que sale de combinar dos teorías comprobadísimas sin añadir nada nuevo, y porque encaja con una serie de resultados sobre entropía y agujeros negros que llevan cincuenta años sosteniéndose unos a otros.",
        },
        {
          forma: "arte",
          texto:
            "El Nobel de física exige comprobación experimental, y por eso Hawking, el físico más famoso del mundo desde Einstein, nunca lo recibió. Sus colegas lo sabían y él bromeaba con ello; es probablemente el caso más conocido de un premio que no llegó por falta de un experimento posible.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale también su costumbre más simpática: apostar. En 1974 apostó con Kip Thorne a que cierta fuente de rayos X no era un agujero negro, y en 1990 reconoció que había perdido y pagó lo apostado, que era una suscripción a una revista para adultos.",
        },
        {
          forma: "texto",
          texto:
            "Él explicaba esas apuestas como una póliza de seguros: si acertaba, ganaba la razón; si se equivocaba, al menos ganaba el premio. Y la costumbre no era una excentricidad suelta, porque la apuesta más importante de su vida la perdió delante de todo el mundo.",
        },
        {
          forma: "texto",
          texto:
            "El problema se llama la paradoja de la información. Si un agujero negro se evapora del todo, ¿qué pasa con todo lo que cayó dentro? La cuántica dice que la información no puede destruirse nunca, y la evaporación parecía destruirla sin remedio.",
        },
        {
          forma: "texto",
          texto:
            "Hawking defendió durante casi treinta años que la información se perdía, y en 1997 apostó sobre ello con John Preskill. En julio de 2004, en un congreso en Dublín, se levantó y anunció que había cambiado de opinión: la información se conserva y él había estado equivocado.",
        },
        {
          forma: "texto",
          texto:
            "El detalle que redondea la escena es que Kip Thorne, que había apostado con él en el mismo bando, no reconoció la derrota. Siguió pensando que la cuestión no estaba resuelta, y veinte años después buena parte de la comunidad le da la razón a él y no al Hawking de 2004.",
        },
        {
          forma: "texto",
          texto:
            "Pagó la apuesta con una enciclopedia de béisbol, y explicó la elección con su humor de siempre: era un libro del que se puede recuperar información a voluntad. La escena, con él delante de cientos de físicos reconociendo el error, vale más que muchos capítulos del libro.",
        },
        {
          forma: "texto",
          texto:
            "Conviene subrayar lo que significa: la mejor idea de su vida abrió un problema que le obligó a rectificar en público, y aun así el asunto no está cerrado. Hoy sigue siendo una de las preguntas abiertas de la física, y su libro de 1988 la cuenta con la respuesta que él mismo abandonó.",
        },
        {
          forma: "texto",
          texto:
            "Para el lector de hoy eso es más una virtud que un defecto, si se sabe. Leer un capítulo escrito con total convicción por alguien que dieciséis años después se retractó es la mejor vacuna que existe contra creerse a pies juntillas cualquier libro de divulgación, incluido este.",
        },
        {
          forma: "texto",
          texto:
            "Una radiación que nadie ha medido nunca.",
        },
        {
          forma: "texto",
          texto:
            "Un Nobel que por eso no llegó.",
        },
        {
          forma: "texto",
          texto:
            "Y una apuesta perdida en voz alta delante de sus colegas.",
        },
      ],
    },
    {
      titulo: "La flecha del tiempo y la mente de Dios",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El capítulo sobre el tiempo plantea la pregunta que Hawking consideraba central: por qué recordamos el pasado y no el futuro, si las leyes fundamentales de la física funcionan igual en las dos direcciones y no distinguen entre antes y después.",
        },
        {
          forma: "texto",
          texto:
            "Su respuesta son tres flechas. La termodinámica, que apunta hacia donde crece el desorden; la psicológica, que es la dirección en la que recordamos; y la cosmológica, que es la dirección en la que el universo se expande. Y sostiene que las tres apuntan al mismo lado por una razón.",
        },
        {
          forma: "texto",
          texto:
            "El ejemplo que da es una taza que se cae de la mesa y se rompe: nadie ha visto nunca los trozos saltar del suelo y recomponerse, aunque las leyes del movimiento lo permitirían perfectamente. Lo que lo impide no es una ley, es una cuenta de probabilidades enorme.",
        },
        {
          forma: "texto",
          texto:
            "Es la misma taza que usa Rovelli treinta años después en «El orden del tiempo», y no por casualidad: es el ejemplo canónico del problema. La diferencia está en la respuesta, porque Rovelli sospecha que la flecha está en nuestro punto de vista y Hawking la ponía en el universo.",
        },
        {
          forma: "clave",
          rotulo: "Por qué coinciden",
          frase: "Recordar cuesta energía y produce desorden, así que la flecha psicológica no puede ir más que en la misma dirección que la termodinámica. Nuestra memoria apunta hacia donde apunta el desorden porque está hecha de él.",
        },
        {
          forma: "texto",
          texto:
            "Ese argumento sigue siendo bueno y es de lo mejor del libro. La parte discutible es la tercera flecha: por qué la expansión del universo coincide con las otras dos, y su explicación depende de que el universo empezara en un estado muy ordenado, que es justamente lo que no se sabe explicar.",
        },
        {
          forma: "texto",
          texto:
            "En una versión anterior de su trabajo, Hawking llegó a defender que si el universo empezara a contraerse el tiempo se invertiría y la gente rejuvenecería. Lo abandonó después y lo llamó su mayor error, y en el libro queda solo un rastro de aquella idea.",
        },
        {
          forma: "texto",
          texto:
            "Quien le convenció fue un estudiante suyo, que le demostró con un cálculo que la flecha del tiempo no se daría la vuelta en la contracción. Que un doctorando corrija al director y el director lo reconozca por escrito en un libro de gran público no es lo habitual.",
        },
        {
          forma: "texto",
          texto:
            "Ese episodio dice algo bueno de él: publicó una idea llamativa, un colaborador le demostró que estaba mal, y la retiró por escrito. En un libro de divulgación es raro encontrar al autor contando una equivocación propia que nadie le habría reprochado.",
        },
        {
          forma: "texto",
          texto:
            "Su propuesta para resolverlo es la idea más original y más difícil del libro, y la firmó con James Hartle en 1983: que el universo no tiene borde en el tiempo, igual que la superficie de la Tierra no tiene borde aunque sea finita.",
        },
        {
          forma: "arte",
          texto:
            "Preguntar qué había antes del Big Bang sería entonces como preguntar qué hay al norte del Polo Norte: una pregunta bien construida gramaticalmente y sin referente. No hay un antes, no porque falte información, sino porque la dirección se acaba ahí.",
          arte: "mapa",
        },
        {
          forma: "texto",
          texto:
            "Esa comparación es la más citada del libro y también la más discutida por sus colegas, porque la propuesta que hay detrás no está comprobada ni es mayoritaria. Hoy conviven varias ideas sobre el principio, y la del universo sin borde es una entre ellas y no la respuesta.",
        },
        {
          forma: "texto",
          texto:
            "Para que eso funcione matemáticamente hace falta un truco llamado tiempo imaginario, que consiste en medir el tiempo con números imaginarios en vez de reales. Y aquí es donde el libro pierde a casi todo el mundo, incluida buena parte de sus lectores más aplicados.",
        },
        {
          forma: "texto",
          texto:
            "Justo es decir que Hawking avisa: escribe que el tiempo imaginario es un recurso de cálculo y no algo que se pueda vivir, y que la pregunta de si es más real que el otro no tiene mucho sentido. El aviso está en el libro y casi nadie lo recuerda.",
        },
        {
          forma: "texto",
          texto:
            "El nombre no ayuda nada, y es culpa de las matemáticas: los números imaginarios se llaman así por un desprecio del siglo diecisiete y no porque sean fantasía. Son tan reales como los otros y se usan a diario en ingeniería eléctrica, sin que nadie hable de corrientes imaginarias.",
        },
        {
          forma: "texto",
          texto:
            "El libro termina con la frase más citada de la divulgación científica del siglo veinte: que si encontráramos una teoría completa, conoceríamos la mente de Dios. Esa frase ha sido usada durante décadas para presentar a Hawking como un físico creyente.",
        },
        {
          forma: "texto",
          texto:
            "Y es exactamente al revés. Hawking usaba la palabra Dios como sinónimo de las leyes de la naturaleza, y lo aclaró muchas veces; en sus libros posteriores lo dice ya sin metáforas, sosteniendo que el universo no necesita un creador y que no hay nada después de la muerte.",
        },
        {
          forma: "texto",
          texto:
            "El uso de esa palabra como sinónimo de las leyes de la naturaleza viene de Einstein, que la empleaba igual y que también pasó media vida desmintiendo que fuera creyente. Los dos físicos más famosos del siglo repitieron el mismo gesto retórico y cosecharon el mismo malentendido.",
        },
        {
          forma: "texto",
          texto:
            "Su frase sobre eso, de una entrevista de 2011, es de las más frías que dijo nunca: que el cerebro es un ordenador que deja de funcionar cuando fallan sus componentes, y que no hay cielo para ordenadores estropeados. Es el mismo hombre que había escrito lo de la mente de Dios.",
        },
        {
          forma: "texto",
          texto:
            "Y añadía la otra mitad, que se cita menos y es la que importa: que precisamente por eso hay que aprovechar al máximo el tiempo que hay. Es la misma conclusión a la que llega Rovelli al final de «El orden del tiempo» por un camino completamente distinto.",
        },
        {
          forma: "texto",
          texto:
            "Ese contraste es la mejor lección del libro sobre cómo leer divulgación: una frase final bonita puede cambiar por completo lo que un lector cree que ha entendido, y el autor puede pasar treinta años intentando desmentirla sin conseguirlo del todo.",
        },
        {
          forma: "texto",
          texto:
            "Tres flechas que apuntan al mismo lado.",
        },
        {
          forma: "texto",
          texto:
            "Un universo sin borde y un norte que se acaba.",
        },
        {
          forma: "texto",
          texto:
            "Y una metáfora que le sobrevivió, contra su voluntad.",
        },
      ],
    },
    {
      titulo: "Lo que ha envejecido y lo que no",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El libro tiene casi cuarenta años y conviene saber qué partes hay que corregir, porque en cosmología cuarenta años son mucho. La primera y más gorda llegó diez años después de publicarse y le dio la vuelta al final del universo.",
        },
        {
          forma: "texto",
          texto:
            "En 1998, dos equipos que medían supernovas lejanas encontraron que la expansión del universo no se está frenando, como todo el mundo daba por hecho, sino acelerándose. A la causa desconocida de esa aceleración se la llamó energía oscura, y hoy se estima que es la mayor parte del contenido del cosmos.",
        },
        {
          forma: "texto",
          texto:
            "El reparto que se maneja hoy es demoledor para cualquier lector de 1988: aproximadamente un cinco por ciento del universo es materia como la de este libro, un veintisiete es materia oscura que nadie ha detectado y el resto, casi el setenta, es esa energía que no se sabe qué es.",
        },
        {
          forma: "texto",
          texto:
            "Dicho de otra manera: el libro explica magníficamente el cinco por ciento del universo y en 1988 nadie sabía que era solo el cinco por ciento. Esa es la mejor medida de lo rápido que se mueve esto y de por qué ninguna divulgación envejece bien del todo.",
        },
        {
          forma: "clave",
          rotulo: "Lo que eso cambia",
          frase: "El libro discute si el universo terminará colapsando sobre sí mismo o expandiéndose para siempre, y lo deja abierto. La respuesta llegó en 1998 y es la segunda: se expandirá cada vez más deprisa.",
        },
        {
          forma: "texto",
          texto:
            "La segunda corrección es la que él mismo hizo en 2004 sobre la información en los agujeros negros. Un lector que llegue hoy al capítulo correspondiente estará leyendo la posición que el autor abandonó dieciséis años después de publicarla.",
        },
        {
          forma: "texto",
          texto:
            "Hay una tercera que es de las que dan alegría: en 2015 se detectaron por primera vez ondas gravitacionales producidas por la fusión de dos agujeros negros. El libro las menciona como una predicción de la relatividad sin esperanza cercana de medirse, y se midieron.",
        },
        {
          forma: "texto",
          texto:
            "Y en 2019 se publicó la primera imagen de la sombra de un agujero negro, y en 2022 la del que hay en el centro de nuestra galaxia. Hawking escribió sobre objetos que en 1988 eran una consecuencia matemática y de los que hoy existen fotografías.",
        },
        {
          forma: "texto",
          texto:
            "La tercera es de tono: el libro termina insinuando que una teoría del todo estaba a la vuelta de la esquina, cosa que en 1988 se creía de verdad. Cuarenta años más tarde no está más cerca, y las dos candidatas principales siguen sin una sola prueba experimental.",
        },
        {
          forma: "texto",
          texto:
            "El propio Hawking llegó a apostar públicamente que la física teórica estaría terminada en veinte años, y años después retiró la predicción diciendo que se había equivocado. Es otro caso más de la misma virtud suya: decir en voz alta que lo que había afirmado no se cumplió.",
        },
        {
          forma: "arte",
          texto:
            "En esta misma categoría está «El orden del tiempo», de Rovelli, que representa una de esas candidatas y que conviene leer justo por eso: para ver que la unificación que Hawking daba por inminente sigue siendo, cuatro décadas después, un programa de investigación sin confirmar.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Lo que no ha envejecido nada es la primera mitad: la expansión, el Big Bang, los conos de luz, la incertidumbre, la formación de las estrellas y los agujeros negros. Esa parte se sigue explicando igual en cualquier facultad y sigue siendo la mejor entrada que existe al asunto.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una prueba de que aquello funcionó: una generación entera de físicos actuales dice que se metió en esto por este libro, regalado a los quince años por alguien que tampoco lo terminó. Como aparato de reclutamiento no ha habido otro igual en el siglo veinte.",
        },
        {
          forma: "texto",
          texto:
            "Y consiguió algo todavía más raro: normalizó que un libro difícil esté en la mesilla de una casa cualquiera. Antes de 1988, la cosmología era un asunto de facultad; después, cualquiera podía tener una opinión sobre el Big Bang y equivocarse en ella, que es un progreso.",
        },
        {
          forma: "texto",
          texto:
            "Y hay algo que el libro hace y que casi ningún divulgador se atreve a hacer: contar la física como una discusión entre personas que se equivocan. Aparecen apuestas, cambios de opinión, teorías abandonadas y colegas que llevaban razón, y eso enseña cómo funciona la ciencia mejor que cualquier definición.",
        },
        {
          forma: "texto",
          texto:
            "Para quien lo encuentre difícil, la propia biblioteca tiene rampas. «El universo en tu mano», de Galfard, cuenta lo mismo en forma de viaje y lo escribió alguien que hizo su tesis doctoral con Hawking, así que la genealogía es directa.",
        },
        {
          forma: "texto",
          texto:
            "Y para quien quiera menos matemática y más asombro, «Cosmos», de Sagan, que es de 1980 y sigue siendo el mejor libro de divulgación jamás escrito. Sagan, por cierto, firmó la introducción de la primera edición de este.",
        },
        {
          forma: "texto",
          texto:
            "En esa introducción Sagan cuenta que conoció a Hawking en Londres, en una reunión sobre el origen de la vida, y que se dio cuenta de que estaba delante de alguien que trabajaba en la pregunta anterior a todas: por qué hay universo en vez de nada. Son dos páginas que merecen leerse.",
        },
        {
          forma: "texto",
          texto:
            "El propio Hawking escribió una versión más asequible en 2001, «El universo en una cáscara de nuez», que está en esta categoría y que él presentó como el libro que la gente le pedía después de no terminar este. Tiene más dibujos y menos tiempo imaginario.",
        },
        {
          forma: "texto",
          texto:
            "Y en 1996 sacó una edición ilustrada de este mismo, con fotografías y esquemas en color, que es probablemente la mejor manera de leerlo hoy: el mismo texto con doscientas imágenes que hacen visible justo la parte donde las palabras solas dejaban de bastar.",
        },
        {
          forma: "texto",
          texto:
            "El destino del viaje, entonces, es este: leer los cinco primeros capítulos con calma, aceptar que del octavo en adelante se entiende a medias, y quedarse con la lección de fondo, que no es ninguna teoría concreta sino que las preguntas grandes se pueden hacer con lenguaje corriente.",
        },
        {
          forma: "texto",
          texto:
            "Un libro de 1988 con una teoría de más y una energía oscura de menos.",
        },
        {
          forma: "texto",
          texto:
            "Su primera mitad se sigue explicando igual en clase.",
        },
        {
          forma: "texto",
          texto:
            "Y su autor cambió de opinión en público, que es lo mejor que enseña.",
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
