/* ==========================================================================
   «Qué vas a aprender»: de qué va cada libro, en dos frases.

   La ficha tenía «Por qué merece la pena» y debajo el campo `porQue`, que es
   un argumento de venta —«Es el mejor libro que existe sobre…»—. Sirve para
   decidir si entras y no sirve para lo que hace falta aquí: saber DE QUÉ VA
   antes de empezar.

   LAS REGLAS, y las dos primeras mandan sobre las demás:

   1. CORTO. Dos frases, cuarenta palabras como mucho. Si hay que desplazar la
      pantalla para acabar de leerlo, sobra texto.

   2. QUE LO ENTIENDA CUALQUIERA. Palabras de todos los días. Nada de
      «paradigma», «cosmovisión» ni «arquetipo». Si una idea del libro pide un
      término raro, se dice con otras palabras o no se dice.

   3. FRASES DERECHAS. Sujeto, verbo y lo que pasa. Sin incisos encadenados ni
      tres rayas en el mismo renglón, que es en lo que cayó la primera versión.

   4. SE CUENTA, NO SE VENDE. Ni «imprescindible», ni «fascinante», ni «una
      obra maestra». Que apetezca leerlo tiene que salir de lo que se cuenta.

   5. SIN INVENTAR. Sale del índice del propio libro, que está escrito como un
      viaje con paradas: de ahí se saca de qué trata y por dónde pasa.

   Un libro sin entrada aquí cae en su `porQue`, que es peor pero no deja el
   hueco en blanco.
   ========================================================================== */

export const APRENDERAS: Record<string, string> = {
  frankenstein:
    "Un estudiante fabrica un ser vivo, le ve la cara y sale corriendo. La criatura, que aprende sola a hablar y a leer, se pasa el libro pidiéndole cuentas.",

  "senor-moscas":
    "Un avión con niños británicos se estrella en una isla desierta y no queda ningún adulto. Montan una democracia en veinte minutos y tardan unas semanas en desmontarla.",

  "gran-gatsby":
    "Un hombre riquísimo da fiestas enormes todos los sábados para una sola persona, que vive al otro lado de la bahía y está casada con otro. Todo lo demás lo compró para eso.",

  metamorfosis:
    "Un viajante de comercio amanece convertido en un insecto y su primer pensamiento es que ha perdido el tren. Lo que cuenta el libro es qué hace una familia con alguien que ha dejado de ser útil.",

  "crimen-castigo":
    "Un estudiante sin dinero mata a hachazos a una prestamista para comprobar si es de los que pueden saltarse la ley. Sabemos quién fue desde la página cuarenta; quedan quinientas.",

  fahrenheit:
    "Un bombero que quema libros empieza a leerlos. Y lo que cuenta el libro no es que un gobierno los prohibiera: la gente dejó de leer sola, y la ley llegó al final como un trámite.",

  "mundo-feliz":
    "Una dictadura que nadie combate porque nadie la sufre: fabrica a la gente por castas, le enseña a querer su sitio y le da una pastilla para los malos ratos. A cambio se queda con el arte y la ciencia.",

  "republica-platon":
    "Empieza con una pregunta incómoda: si un anillo te hiciera invisible, ¿para qué seguir siendo justo? Para contestarla, Platón construye una ciudad entera y acaba describiendo cómo una democracia puede acabar en tiranía.",

  odisea:
    "Un hombre tarda diez años en volver de la guerra a una isla pedregosa donde lo esperan su mujer y un hijo al que no conoce. Por el camino le ofrecen la inmortalidad y dice que no.",

  "cerebro-buda":
    "Tu cerebro registra lo malo mucho mejor que lo bueno, y casi todo el sufrimiento lo fabricas después del golpe. El libro traduce prácticas budistas en ejercicios cortos con una explicación fisiológica.",

  "gen-egoista":
    "El libro que explica de dónde sale la generosidad en un mundo sin buenas intenciones. Su tesis es que la selección natural actúa sobre los genes, no sobre los individuos ni sobre las especies.",

  "rebelion-granja":
    "Los animales de una granja echan al granjero y montan un sistema justo. En unos años tienen algo peor de lo que había, y el libro explica exactamente por qué pasos ocurre.",

  "semana-4-horas":
    "El libro que convenció a mucha gente de que cuarenta años de oficina son una convención y no una ley. Cuatro pasos para quitarte el trabajo que no produce nada y usar el tiempo ahora.",

  "steve-jobs":
    "La biografía que Jobs encargó y no quiso leer antes de publicarse. Cuenta cómo fundó Apple, cómo lo echaron, qué hizo en los once años fuera y qué costó todo aquello en personas.",

  hobbit:
    "Un señor cómodo de cincuenta años firma un contrato como ladrón profesional y se va con trece enanos a quitarle el tesoro a un dragón. Vuelve siendo otro y con mucho menos dinero del prometido.",

  "sombra-viento":
    "En la Barcelona de 1945, un chico encuentra en una biblioteca secreta un libro del que alguien está quemando todos los ejemplares. Diez años de su vida se le van en averiguar por qué.",

  alquimista:
    "Un pastor andaluz sueña con un tesoro en las pirámides y cruza el desierto para encontrarlo. Es un cuento de las mil y una noches convertido en la fábula moderna sobre no aplazar la vida.",

  "orgullo-prejuicio":
    "Cinco hermanas sin herencia tienen que casarse antes de que muera su padre, porque la casa pasará a un primo. Alrededor de esa cuenta, Austen escribió la mejor comedia social que existe.",

  "matar-ruisenor":
    "Un abogado defiende en 1935 a un hombre negro acusado en falso en un pueblo de Alabama, y lo cuenta su hija de ocho años. La mitad del libro pasa antes de que empiece el juicio.",

  quijote:
    "Un hidalgo pobre lee tantos libros de caballerías que decide salir a comportarse como uno. La novela que se ríe de él terminó inventando casi todo lo que después ha hecho la novela moderna.",

  "mundo-ayer":
    "Zweig cuenta cómo la Europa segura y sin fronteras en la que nació se deshizo en treinta años. Dos guerras, una inflación y un destierro contados por alguien que estaba dentro y no lo vio venir.",

  "breve-historia-tiempo":
    "Hawking cuenta lo que la física del siglo XX averiguó sobre el universo: que se expande y que por tanto tuvo un principio. Y que el tiempo no corre igual para todos ni los agujeros negros son del todo negros.",

  principe:
    "Maquiavelo lo escribió en el destierro, después de que lo encarcelaran y lo torturaran, para intentar que le devolvieran el puesto que había ocupado quince años. No se lo devolvieron, y el libro no se publicó en vida suya.",

  "arte-guerra":
    "El libro de guerra más famoso del mundo sostiene que ganar cien batallas de cien no es la excelencia: la excelencia es someter al enemigo sin combatir y quedarse su territorio intacto. Todo lo demás se ordena debajo de esa idea.",

  "cien-anos":
    "José Arcadio Buendía mata a un hombre y el muerto empieza a aparecérsele en el patio. Huye con los suyos, cruza la sierra y funda un pueblo donde nadie los conozca. Cien años después, un viento lo borra del mapa.",

  "infinito-junco":
    "Los reyes de Egipto mandaron agentes por el Mediterráneo con dinero ilimitado y una orden: comprar todos los libros que existieran. A los barcos que atracaban en Alejandría se les requisaba lo que llevaran a bordo.",

  "cisne-negro":
    "Un pavo al que dan de comer mil días seguidos tiene mil pruebas de que lo quieren, y su confianza es máxima justo el miércoles antes de Acción de Gracias. Taleb parte de ahí para explicar por qué lo raro decide la historia.",

  spqr:
    "Los romanos contaban que su ciudad la fundó un hombre que mató a su hermano y la pobló acogiendo a fugitivos y esclavos huidos. Beard parte de ahí para examinar cómo sabemos lo que creemos saber de Roma.",

  "por-que-dormimos":
    "Cuando un país adelanta el reloj en primavera y pierde una hora de sueño, sus hospitales registran un pico de infartos; en otoño, cuando se gana, bajan. Walker parte de ahí para contar qué hace el cuerpo mientras duermes.",

  influencia:
    "Cialdini se pasó tres años de incógnito en cursos de vendedores de coches, de seguros y de enciclopedias, no a observarlos sino a que le enseñaran. Descubrió que profesiones que no se hablan entre sí usan las mismas seis palancas.",

  principito:
    "Saint-Exupéry se estrelló de verdad en el desierto de Libia y pasó tres días sin agua. Ocho años después, exiliado en Nueva York mientras Francia estaba ocupada, escribió un libro que empieza con ese accidente y termina con una muerte.",

  meditaciones:
    "Marco Aurelio gobernó Roma durante una peste, una guerra que duró casi todo su reinado y la muerte de ocho de sus trece hijos. Por las noches, en las tiendas del Danubio, escribía notas para sí mismo que nunca pensó publicar.",

  cosmos:
    "Hace veintidós siglos, un bibliotecario de Alejandría midió el tamaño del planeta con dos palos y una sombra. Sagan empieza ahí porque su libro no va de lo que sabemos del universo, sino de cómo hemos llegado a saberlo.",

  "1984":
    "Winston Smith trabaja corrigiendo periódicos que ya se publicaron: si el Partido prometió que no bajaría la ración de chocolate y la ha bajado, él reescribe el original y lo quema. Miles de personas hacen lo mismo, con cuotas y formularios.",

  flow:
    "Csíkszentmihályi repartió buscapersonas que sonaban ocho veces al día para pillar a la gente en mitad de su vida y preguntarle cómo estaba. En cientos de miles de anotaciones encontró siempre el mismo estado.",

  "busca-sentido":
    "Frankl entró en Auschwitz con el manuscrito de su libro cosido en el forro del abrigo. Se lo quitaron con todo lo demás. Tres años después lo reescribió en nueve días, y no trata del horror sino de qué hace que alguien siga levantándose.",

  mindset:
    "A cuatrocientos niños de quinto se les elogió por listos o por esforzados, con una frase de diferencia. Los primeros eligieron después problemas más fáciles y el cuarenta por ciento mintió sobre su nota. De ahí sale el libro entero.",

  "poder-ahora":
    "Tolle se despertó una noche pensando que no aguantaba más consigo mismo, y se dio cuenta de que esa frase supone dos personas. De ahí salió un libro sobre la voz que llevas en la cabeza y que no eres tú.",

  "monje-ferrari":
    "Un abogado de éxito se desploma con un infarto en mitad de un juicio, lo vende todo y desaparece. Vuelve del Himalaya con siete enseñanzas envueltas en una alegoría hecha para que no se olviden.",

  "sutil-arte":
    "Cuanto más te empeñas en sentirte bien, más presente tienes que ahora no lo estás. Manson parte de esa trampa para sostener que la energía de preocuparse es limitada y que el error no es gastarla poco, sino repartirla mal.",

  "cuatro-acuerdos":
    "Aprendiste el idioma, lo que está bien y lo que es una vida lograda sin que nadie te preguntara si estabas conforme. Miguel Ruiz propone sustituir esa maraña heredada por cuatro reglas elegidas a conciencia.",

  ikigai:
    "En Ogimi, un pueblo de Okinawa con una de las mayores proporciones de centenarios del mundo, no existe la palabra jubilación. Dos españoles fueron a entrevistar a los más viejos y volvieron con esto.",

  "pensar-rapido":
    "Un bate y una pelota cuestan 1,10 y el bate cuesta un euro más: la mitad de los alumnos del MIT falla. Kahneman ganó el Nobel demostrando que la mente usa atajos que se equivocan de maneras predecibles.",

  "inteligencia-emocional":
    "A un paciente le quitaron un tumor cerebral y salió con el cociente intelectual intacto y la vida destrozada: tardaba media hora en elegir la fecha de una cita. Goleman parte de ahí para explicar la otra inteligencia.",

  "mente-millonaria":
    "Mucha gente que gana un gran premio de lotería vuelve en pocos años al patrimonio que tenía antes. Eker lo explica con un termostato de dinero puesto en la infancia, y enseña a cambiarlo y a repartir cada ingreso.",

  "piensa-hazte-rico":
    "Dos buscadores de oro vendieron su mina y el chatarrero que la compró encontró la veta a un metro del punto donde habían parado. Hill publicó en plena Depresión los trece principios que fundaron el género entero.",

  "amigos-influir":
    "Al Capone se consideraba un benefactor y el peor asesino de Nueva York se creía un buen hombre. Carnegie parte de ahí para demostrar que criticar no corrige a nadie, y construye treinta reglas probadas en clases nocturnas.",

  "padre-rico":
    "Kiyosaki dice que creció con dos padres: uno doctorado que murió con facturas sin pagar y otro que dejó los estudios a los trece y se hizo rico. De ahí saca un vocabulario mínimo para mirar el dinero de otra manera.",

  "psicologia-dinero":
    "Un conserje de Vermont dejó ocho millones de dólares el mismo año en que un directivo de Merrill Lynch perdió su casa. Housel explica por qué con el dinero gana el que se comporta mejor y no el que más sabe.",

  "poder-habitos":
    "Un hombre que no podía retener un recuerdo más de veinte segundos seguía volviendo solo a su casa. Duhigg parte de ahí para enseñar el mecanismo de tres piezas que gobierna la mitad de lo que haces cada día.",

  "siete-habitos":
    "Covey leyó doscientos años de manuales de éxito y encontró una frontera: antes se hablaba de carácter y después de técnicas para caer bien. Su libro vuelve a lo primero y ordena siete hábitos que solo funcionan en ese orden.",

  "habitos-atomicos":
    "Mejorar un uno por ciento al día no se nota el martes; sostenido un año, multiplica por treinta y siete. James Clear explica por qué los hábitos tardan tanto en verse y cómo montarlos sin gastar voluntad.",

  "club-5-manana":
    "La primera hora del día es la única que no le pertenece a nadie más: a las cinco no hay correos, ni reuniones, ni nadie pidiéndote algo. Robin Sharma la reparte en tres bloques de veinte minutos y explica cómo sostenerlo sin quitarse horas de sueño.",

  "trabajo-profundo":
    "Cada vez que miras el correo a media tarea, una parte de tu cabeza se queda enganchada a lo anterior. Cal Newport sostiene que concentrarse se ha vuelto raro justo cuando más vale, y que se puede entrenar como cualquier otra cosa.",

  sapiens:
    "Hace cien mil años había seis especies humanas y hoy queda una. Harari explica por qué ganó la nuestra —sabemos inventarnos historias y creérnoslas entre millones de desconocidos— y qué hemos ido pagando por cada salto: la agricultura, el dinero, los imperios y la ciencia.",

  "homo-deus":
    "Hoy muere más gente por comer de más que por no tener qué comer. Resueltos el hambre, la peste y la guerra, este libro pregunta a qué se dedica una especie después: a no morirse, a fabricarse la felicidad y a dejar que los algoritmos decidan por ella.",

  "armas-germenes":
    "En una playa de Nueva Guinea le preguntaron a Jared Diamond por qué unos pueblos llegaron cargados de hierro y medicinas y otros no. Su respuesta no está en la gente sino en el mapa: qué plantas y qué animales había en cada sitio, y hacia dónde podían viajar.",

  "diario-ana-frank":
    "Dos años y un mes encerrada con otras siete personas detrás de la oficina de su padre, sin pisar la calle. No es una crónica de la guerra: es la vida diaria de un escondite contada por una chica de quince años que ya escribía mejor que la mayoría de los adultos.",
};
