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
