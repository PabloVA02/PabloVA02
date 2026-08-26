/* ==========================================================================
   «Aprenderás»: lo que uno se lleva de cada libro.

   Es la tarjeta de los vistos de la ficha. Allí cada punto es UNA COSA QUE
   SABRÁS O ENTENDERÁS cuando termines, escrita en una línea y en minúscula.

   LA REGLA QUE LO DECIDE TODO, y que costó una reescritura de los 223:

   **Un «Aprenderás» NO es una pregunta sobre el libro. Es un conocimiento
   que te llevas.** Pablo lo devolvió el 22 de agosto con el ejemplo exacto:

       así NO   qué pasó la mañana del 4 de agosto          (Ana Frank)
       así SÍ   cómo una niña sobrevivió dos años escondida

   «Eso no es aprender algo». Y tiene razón: lo primero es una pregunta de
   examen que solo entiende quien ya ha leído el libro, y encima no promete
   ningún conocimiento. Lo segundo se entiende sin contexto y dice qué te
   llevas.

   LA PRUEBA, que se aplica punto por punto: **léelo sin saber nada del
   libro. ¿Se entiende? ¿Y suena a algo que valga la pena saber?** Si hace
   falta haber leído el libro para saber de qué habla —una fecha, un nombre
   propio, un episodio—, está mal.

   LOS EJEMPLOS BUENOS son los de `referencia/fichas-aprenderas/`, las cinco
   fichas que mandó Pablo el 22 de agosto:

       El alquimista      cómo las pasiones moldean tu futuro
                          por qué debes proteger tus sueños
                          cómo las dificultades clarifican tu propósito
       La metamorfosis    el coste de ser el sostén de la familia
                          cómo la culpa corroe la identidad
                          el sufrimiento provocado por el exilio emocional
       Frankenstein       lo que realmente cuesta una ambición desenfrenada
                          cómo el aislamiento transforma la nostalgia en rabia
                          por qué saber cuándo parar es una forma de sabiduría
       El gran Gatsby     por qué no podemos escapar de nuestro pasado
                          el peligro de construir la identidad en torno a un
                          único sueño inalcanzable
       Dar y recibir      cómo ser generoso atrae el éxito
                          los inconvenientes de recibir siempre

   Ninguno exige haber leído nada. Todos prometen un conocimiento. Y fíjate
   en que hablan del MUNDO, no del argumento: «el coste de ser el sostén de
   la familia» es lo que enseña La metamorfosis sin contar que Gregorio se
   despierta convertido en insecto.

   LAS REGLAS

   1. UNA LÍNEA, hasta CATORCE palabras. La referencia llega a catorce —«por
      qué no podemos escapar de nuestro pasado por mucho que nos
      reinventemos»— así que el tope de once que había antes obligaba a
      recortes que estropeaban la frase. Dos renglones en un móvil está bien;
      tres, no.

   1 bis. EN MINÚSCULA. Detrás del visto no empieza una frase, se continúa la
      del rótulo: aprenderás… esto.

   2. SIN FECHAS, SIN NOMBRES PROPIOS QUE HAYA QUE CONOCER Y SIN EPISODIOS.
      «qué pasó en Anfield el 26 de mayo de 1989» no lo entiende nadie que no
      haya leído el libro. Lo que ese episodio ENSEÑA, sí: «por qué lo que
      llevas veinte años esperando no arregla nada».

      Un nombre propio solo entra si el punto se entiende igual sin saber
      quién es: «¿fue Gregorio el único en transformarse?» funciona porque la
      pregunta se entiende sola. «cómo acabó su amistad con Malcolm X», no.

   3. CINCO FORMAS, y conviene usarlas todas para que no suenen iguales:
      *cómo* · *por qué* · *lo que* / *el coste de* / *el peligro de* ·
      un sustantivo con su relativo · un infinitivo.

   4. CINCO POR LIBRO. Es lo que cabe en la tarjeta sin desplazar la pantalla.

   5. SIN VENDER. Ni «descubre», ni «el secreto de», ni «imprescindible». Y
      sin consignas: «que tu voz importa» no es un conocimiento.

   `node scripts/revisa-puntos.mjs` marca lo que se puede detectar a máquina:
   fechas, cifras de año, longitud y las fórmulas de pregunta de examen.
   ========================================================================== */

export const PUNTOS: Record<string, string[]> = {
  "side-hustle": [
    "qué distingue un negocio propio de un segundo empleo peor pagado",
    "cómo se comparan varias ideas en vez de enamorarse de una",
    "por qué se le vende a quien ya gasta dinero en ese problema",
    "que un cliente que paga informa más que cien que se lo descargan",
    "lo que hay que mirar en tu contrato antes de empezar a facturar",
  ],

  "chingona-dinero": [
    "qué creencias sobre el dinero se heredan sin llegar a examinarse nunca",
    "por qué un deseo sin cifra ni fecha no cambia ninguna conducta",
    "que subir el precio sube lo que ingresas sin subir lo que trabajas",
    "el efecto medido de fantasear con el resultado que se desea",
    "distinguir una formación que sirve de una promesa de cambio de mentalidad",
  ],

  "poder-sin-limites": [
    "cómo se desmonta en pasos lo que otra persona hace bien",
    "por qué la postura cambia el ánimo antes que el razonamiento",
    "que imitar sin querer los gestos ajenos es señal de acuerdo",
    "el motivo de que insistir sin medir se confunda con la constancia",
    "distinguir una técnica que funciona de la teoría que la explica",
  ],

  "retirate-joven-rico": [
    "por qué la misma deuda enriquece a uno y hunde a otro",
    "que un patrimonio se mide por lo que ingresas sin trabajar",
    "cómo se recupera el capital invertido sin vender lo comprado",
    "para quién está pensado el consejo de ahorrar y diversificar",
    "el papel que juega el momento del ciclo en cualquier fortuna inmobiliaria",
  ],

  "maestro-dinero": [
    "cuánto se lleva de verdad un fondo cuando se suman todos sus costes",
    "por qué el rendimiento anunciado no es el que se lleva el partícipe",
    "convertir un deseo de libertad en una cifra que se pueda calcular",
    "el reparto entre tipos de activo que Ray Dalio recomienda a un particular",
    "que la promesa de ganar sin perder siempre la paga alguien",
  ],

  "ladrona-libros": [
    "qué se lee cuando el narrador ya te ha dicho quién va a morir",
    "cuánto tarda en cobrarse una promesa dada en una trinchera",
    "por qué las palabras hacen aquí las dos cosas a la vez",
    "en qué consiste resistir cuando nadie puede hacer nada heroico",
    "qué se ve y qué queda fuera contándolo desde una casa alemana",
  ],

  "confesiones-chef": [
    "qué hace bueno a alguien en un oficio duro, que no es el talento",
    "por qué quien empieza el día desordenado ya ha perdido",
    "quién sostiene de verdad el trabajo en casi cualquier sector",
    "en qué hay que pensar antes de pedir en un restaurante",
    "qué acabó diciendo el propio autor sobre su libro",
  ],

  "21-leyes-liderazgo": [
    "qué te frena cuando algo tuyo lleva años estancado",
    "cómo se mide la influencia que tienes de verdad",
    "por qué el equipo acaba pareciéndose a quien lo dirige",
    "por qué el mismo plan recibe dos respuestas según quién lo traiga",
    "qué pasa cuando en tu equipo cercano nadie te lleva la contraria",
  ],

  "usted-puede-sanar": [
    "cómo te hablas cuando algo sale mal, y de dónde viene esa frase",
    "qué información da que te incomode decirte algo bueno en voz alta",
    "por qué ninguna prueba externa calla la creencia de no valer",
    "qué es perdonar si no es absolver ni volver a tratar a nadie",
    "qué parte de este libro es falsa y a quién le hace daño",
  ],

  "amor-tiempos-colera": [
    "por qué se cae en dos minutos algo que llevaba dos años creciendo",
    "qué sostiene de verdad un matrimonio de cincuenta años",
    "para quién acaba siendo una espera muy larga",
    "qué hay debajo de la historia de amor con la que termina el libro",
    "en qué hay que fijarse cuando alguien te dice que te ha esperado",
  ],

  "caballero-armadura": [
    "cómo se acaba encerrado sin haberlo decidido ningún día",
    "por qué dar más de lo mismo no sustituye a lo que te piden",
    "qué estás evitando cuando llenas todos los huecos del día",
    "qué llega primero al quitarte lo que te tapaba, que no es alivio",
    "qué te suelen estar pidiendo en casa, que es más barato y más difícil",
  ],

  "buena-suerte": [
    "en qué se distingue lo que te pasa de lo que has preparado",
    "qué pregunta hace el que encuentra lo que los demás buscan",
    "qué te falta cuando llevas mucho esforzándote y no sale",
    "por qué un acuerdo donde ganan los dos no hay que vigilarlo",
    "en qué se diferencian de verdad los que se creen afortunados",
  ],

  "tiempo-entre-costuras": [
    "qué es lo único que no te pueden quitar cuando te quitan todo",
    "por qué nadie se calla delante de quien está trabajando",
    "cómo se monta un negocio cuando no se tiene absolutamente nada",
    "por qué la mejor tapadera es un oficio de verdad",
    "qué se aprende a hacer con el miedo, ya que no se quita",
  ],

  "juegos-hambre": [
    "por qué una lotería que se compra con comida deja de ser azar",
    "qué decide de verdad quién sobrevive ahí dentro, que no es pelear",
    "qué te pasa cuando sabes en todo momento que te están mirando",
    "por qué un directo se le puede volver en contra a quien manda",
    "por qué salir de allí no es lo mismo que haber terminado",
  ],

  "vendedor-mas-grande": [
    "la instrucción de lectura que casi ninguno de sus lectores cumple",
    "por qué un mal hábito no se quita decidiéndolo",
    "qué le falta al consejo de persistir para ser un método",
    "qué hacer cuando el ánimo va hacia abajo desde por la mañana",
    "en qué instante exacto se pierde un día de trabajo",
  ],

  "actitud-mental-positiva": [
    "por qué lo que te dices cuando algo sale mal no es un rasgo",
    "qué le pasa a una frase de tres palabras repetida durante semanas",
    "cómo vendía de verdad el autor que tenía una empresa",
    "cuándo sirve estar descontento y cuándo solo desgasta",
    "cómo se lee un libro práctico para que cambie algo",
  ],

  "transformacion-dinero": [
    "por qué el primer paso no es empezar a pagar deudas",
    "en qué orden conviene pagarlas si lo que necesitas es terminar",
    "qué cambia el día que tienes seis meses de gastos guardados",
    "por qué quien paga con tarjeta gasta más que quien paga en efectivo",
    "con qué se incumple un presupuesto sin llegar a notarlo",
  ],

  "cuadrante-flujo": [
    "qué comparten el empleado y el autónomo aunque se crean opuestos",
    "la pregunta que distingue un negocio de un empleo que te pertenece",
    "por qué ser muy bueno en algo impide construir un sistema",
    "qué diferencia hay entre lo que sube de precio y lo que renta",
    "cómo cambia el resultado el orden en que se cobra y se tributa",
  ],

  "ciencia-hacerse-rico": [
    "en qué se distingue crear algo nuevo de pelear por lo que ya existe",
    "por qué conviene entregar siempre más valor del que se cobra",
    "qué se puede hacer hoy de verdad para el futuro",
    "qué consigue concretar un objetivo, que no es lo que dice el libro",
    "qué parte de esta teoría es falsa y además hace daño",
  ],

  "efecto-compuesto": [
    "cómo se separan dos personas idénticas sin decidirlo ningún día",
    "por qué hay que apuntar dos semanas antes de cambiar nada",
    "qué tamaño hay que elegir al empezar algo, y no es el que crees",
    "qué hacer los días en que no se puede hacer nada",
    "en qué se distingue el dinero de todo lo demás que se acumula",
  ],

  "miedo-libertad": [
    "en qué se distingue librarse de algo de ser libre para algo",
    "qué se perdió al perder el sitio fijo en el mundo",
    "por qué obedecer arriba y humillar abajo son el mismo rasgo",
    "de dónde sale la energía que acaba dedicándose a destruir",
    "cómo se distingue un deseo propio de uno adoptado",
  ],

  "kite-runner": [
    "por qué aquella amistad no era entre iguales, y qué decide eso",
    "qué necesita un niño para justificarse cuando no ayuda",
    "por qué después de hacer daño cuesta tanto ver a la otra persona",
    "en qué consiste el destierro además de perder un país",
    "por qué el villano de esta novela resulta tan cómodo de leer",
  ],

  "vender-es-humano": [
    "por qué las técnicas de presión dejaron de funcionar, y no por ética",
    "qué rinde más que sentir lo que siente el otro",
    "qué carácter vende más, que no es el que se contrata",
    "cómo hablarse a uno mismo antes de algo difícil",
    "por qué encontrar el problema vale hoy más que resolverlo",
  ],

  gulag: [
    "en qué año se abrieron los primeros campos, que no fue con Stalin",
    "por qué siguieron treinta años abiertos costando más de lo que producían",
    "cómo una norma sobre la comida convirtió el hambre en algo automático",
    "quién mandaba de verdad dentro de un barracón",
    "qué se encontró al volver quien salió de allí",
  ],

  patria: [
    "cómo se aísla a una familia sin que nadie dé ninguna orden",
    "qué le pasa a una amistad de cuarenta años cuando hay que elegir",
    "cómo entra alguien de veinte años en un grupo armado",
    "por qué el daño no se reparte igual dentro de una misma casa",
    "qué falta en un libro que se ha leído como el retrato del conflicto",
  ],

  "procrastinacion-steel": [
    "por qué el domingo decides empezar el lunes y lo dices en serio",
    "qué sube de verdad tu confianza en que puedes con algo",
    "qué hacer con una tarea que es aburrida de verdad",
    "por qué calculas mal el tiempo aunque ya lo hayas hecho antes",
    "qué plazos funcionan, que no son los que pide nadie",
  ],

  "amor-liquido": [
    "en qué se comportan al revés una conexión y un lazo",
    "por qué no se puede tener a la vez seguridad y ninguna atadura",
    "qué pasa cuando dos personas se evalúan como se evalúa un producto",
    "en qué se distingue desear a alguien de tener ganas de algo",
    "por qué estar siempre comunicado empeora la soledad",
  ],

  "martes-con-mi-profesor": [
    "qué se aprende al perder la capacidad de valerse por uno mismo",
    "por qué organizó su propio funeral estando vivo",
    "qué método usaba con el miedo, y por qué tenía horario",
    "de dónde le venía su manera de tratar a la gente",
    "cómo se comprueba si uno tiene alrededor lo que cree tener",
  ],

  incognito: [
    "por qué ver no consiste en recibir imágenes del mundo",
    "cómo se puede saber hacer algo sin acceso a cómo se hace",
    "qué explica la ambivalencia mejor que la falta de voluntad",
    "de dónde salen las razones que damos de nuestros propios actos",
    "qué cambia en alguien cuando le cambia un poco el tejido cerebral",
  ],

  "primeros-90-dias": [
    "qué tienes que dejar de hacer justo cuando te ascienden por hacerlo",
    "en qué cinco situaciones puedes caer, y por qué piden cosas opuestas",
    "qué hay que hablar con un jefe nuevo, y en qué orden",
    "cómo se eligen las primeras victorias, que no es por su tamaño",
    "dónde está el problema real cuando las versiones no coinciden",
  ],

  "nueva-mirada-infidelidad": [
    "por qué creer que solo pasa donde algo falla resulta tan tranquilizador",
    "qué se echa de menos al terminar una aventura, que no es una persona",
    "por qué la crisis empieza el día en que se descubre",
    "qué preguntas dejan imágenes que duran años",
    "las tres maneras muy distintas de seguir juntos después",
  ],

  "jane-eyre": [
    "qué parte del internado del libro no hubo que inventarse",
    "qué se puede admirar en alguien sin querer imitarlo",
    "por qué se va de madrugada teniendo dónde quedarse",
    "en qué se distingue que te necesiten de que te quieran",
    "quién es el personaje que no habla, y qué paga con su silencio",
  ],

  "cerebro-hambriento": [
    "cómo vigila tu cerebro la grasa que tienes y en qué dirección la defiende",
    "por qué adelgazar se pone más difícil cuanto más adelgazas",
    "qué combinación de comida hace comer más de lo necesario",
    "por qué siempre queda sitio para el postre",
    "cómo suben el hambre el mal sueño y el estrés sostenido",
  ],

  "creatividad-sa": [
    "en qué estado nacen de verdad las películas que luego funcionan",
    "por qué una crítica deja de servir en cuanto puede mandar",
    "qué le pasa a lo nuevo cuando nadie lo protege del calendario",
    "por qué conviene provocar los errores antes de que salgan caros",
    "qué problemas conoce todo el mundo y a nadie le compensa decir",
  ],

  "primavera-silenciosa": [
    "qué le pasa a un veneno que no se degrada tras hacer su trabajo",
    "por qué una concentración inofensiva deja de serlo tres escalones más arriba",
    "cómo murieron unos pájaros a los que nadie había fumigado",
    "por qué fumigar más produce insectos más difíciles de matar",
    "qué se dijo de la autora en lugar de discutir sus datos",
  ],

  "camino-libertad-financiera": [
    "en qué se diferencian la culpa y la responsabilidad cuando hablamos de dinero",
    "por qué lo que guardas a fin de mes no se guarda nunca",
    "qué regla separa ahorrar de llegar a tener patrimonio",
    "por qué un plan de dinero necesita una cuenta para gastar",
    "qué hacer con la mitad de cada subida de sueldo",
  ],

  "cambia-el-chip": [
    "por qué conviene mirar lo que ya funciona antes que lo que falla",
    "qué le pasa a alguien cuando le pides un objetivo y no un movimiento",
    "por qué una escena consigue lo que no consigue un informe",
    "qué motiva más que empezar algo, y no es la fuerza de voluntad",
    "cuánta de tu falta de disciplina es en realidad un camino mal puesto",
  ],

  "mente-justos": [
    "por qué un juicio moral llega antes que sus razones",
    "qué mueve de verdad a alguien, ya que no es el argumento",
    "cuántas cosas distintas cuenta la gente como moral",
    "con quién se ha hecho casi toda la psicología, y por qué importa",
    "qué precio paga un grupo por estar moralmente unido",
  ],

  "cinco-disfunciones": [
    "qué está pasando cuando en una reunión no discute nadie",
    "qué clase de confianza sostiene a un equipo, que no es fiarse",
    "por qué buscar el consenso produce decisiones de nadie",
    "qué le pasa a la relación cuando te callas que alguien no cumple",
    "cuál es tu primer equipo: el que diriges o el que compartes",
  ],

  "empresas-sobresalen": [
    "qué clase de jefe aparece siempre en el punto de inflexión",
    "por qué la primera decisión no es adónde ir sino con quién",
    "cómo se sostienen a la vez la fe y los datos malos",
    "por qué la cifra que eliges cambia lo que haces más que un plan",
    "qué pasó después con las once empresas ejemplares",
  ],

  "traguese-sapo": [
    "por qué conviene hacer lo más pesado antes que nada",
    "cómo se distingue lo urgente de lo que importará dentro de un mes",
    "qué le pasa a una tarea que retomas cuatro veces",
    "por qué hay que escribir la lista de lo que no vas a hacer",
    "qué habilidad marca el techo de todas las demás",
  ],

  "codigo-da-vinci": [
    "por qué un dato cierto al principio te hace creer lo que viene después",
    "qué se puede deducir de verdad de un símbolo, y qué no",
    "cómo está cortado un libro que no puedes soltar",
    "de dónde salió la teoría del linaje que la novela da por buena",
    "qué se comprueba en un minuto y millones de lectores no comprobaron",
  ],

  "mujeres-lobos": [
    "las señales concretas de que llevas tiempo sin hacerte caso",
    "qué le pasa a la intuición de quien nunca la consulta",
    "por qué separar lo que alimenta de lo podrido se hace grano a grano",
    "qué se pierde al cambiar lo tuyo por una versión más razonable",
    "cuánto dura de verdad recuperarse de algo grande",
  ],

  "come-reza-ama": [
    "qué pasa cuando dejas de justificar cada hora con un rendimiento",
    "por qué descansar solo cuando te lo has ganado no es descansar",
    "cómo se mira un pensamiento propio sin obedecerlo",
    "en qué se distingue perdonar de decidir que aquello estuvo bien",
    "qué deuda crea el dinero que regalas aunque no la quieras",
  ],

  perfume: [
    "por qué el olfato llega antes de que tu cabeza decida nada",
    "qué te enseña estar mucho tiempo solo, que no es lo que parece",
    "qué pasa cuando alguien te trata como material para su objetivo",
    "por qué un cariño que sabes fabricar deja de alimentarte",
    "qué hace la novela con sus víctimas, y por qué hoy se nota",
  ],

  "oceano-azul": [
    "por qué elegir entre ser barato o ser bueno es una elección falsa",
    "qué se ve al dibujar en qué compite todo tu sector a la vez",
    "cuáles son las dos preguntas que casi nadie se hace, y pagan las otras",
    "dónde está la demanda que no aparece en los datos de ninguna empresa",
    "por qué conviene fijar el precio antes que el coste",
  ],

  "ideas-que-pegan": [
    "por qué los expertos explican peor su tema que los principiantes",
    "qué trabajo hay detrás de un mensaje que parece simple",
    "por qué una frase que no se puede ver no se recuerda",
    "de dónde sacas credibilidad cuando no tienes ninguna autoridad",
    "qué le pasa a una historia cuando le añades estadísticas",
  ],

  "arte-no-amargarse": [
    "por qué el mismo despido hunde a una persona y a otra no",
    "qué le pasa a tu cuerpo cuando llamas insoportable a algo molesto",
    "en qué se nota la diferencia entre querer algo y necesitarlo",
    "por qué mirar de frente lo peor quita más miedo que apartar la vista",
    "cómo se discute una creencia para que se caiga de verdad",
  ],

  "adulto-relaciones": [
    "por qué a veces tu reacción es mucho mayor que lo que ha pasado",
    "en qué se distingue algo que puedes pedir de algo que solo esperas",
    "qué empieza el día que se cae la imagen que te habías hecho",
    "qué carencia no puede pagarte nadie por muy cerca que esté",
    "cómo se pone un límite que no dependa de que el otro cambie",
  ],

  "bolsa-o-vida": [
    "por qué casi nadie cobra por hora lo que cree que cobra",
    "en qué punto tener más cosas empieza a empeorarte la vida",
    "la pregunta que hace caerse sola media lista de gastos",
    "por qué un gráfico en la pared ahorra más que un propósito",
    "cómo se cuenta la libertad cuando aún queda lejos",
  ],

  "despertando-gigante": [
    "por qué sabes lo que te conviene y aun así no lo haces",
    "qué hace falta para que un cambio aguante cuando se acaban las ganas",
    "de qué están hechas las cosas que crees que no puedes hacer",
    "cómo una pregunta decide lo que vas a ver de una situación",
    "cuántas de tus condiciones para estar bien dependen de otra persona",
  ],

  "ego-es-el-enemigo": [
    "por qué anunciar un plan te quita parte de las ganas de cumplirlo",
    "qué se pierde el día que dejas de tener a alguien que te corrija",
    "cuándo trabajar para el lucimiento de otro es una escalera y cuándo un pozo",
    "qué te cuesta de verdad ganar una discusión delante de gente",
    "por qué el peligro llega con el éxito y no con el fracaso",
  ],

  "organizate-eficacia": [
    "por qué tu memoria te recuerda las cosas justo cuando no puedes hacerlas",
    "qué gana quien escribe el movimiento concreto en vez del nombre del asunto",
    "cuándo sale más caro apuntar una tarea que hacerla en el momento",
    "por qué tu cabeza solo suelta algo si confía en dónde lo dejaste",
    "qué parte de este método envejeció mal con la llegada del móvil",
  ],

  "maestria-greene": [
    "por qué el primer trabajo se elige por lo que enseña",
    "qué corrigieron los propios investigadores de las diez mil horas",
    "cómo se busca hacia atrás la inclinación que ya tenías de niño",
    "en qué momento deja de convenir obedecer al maestro",
    "a quién no le sirve este libro por mucho que quiera",
  ],

  "pre-suasion": [
    "por qué tu explicación de una compra puede ser sincera y falsa",
    "cómo el orden de una conversación decide en qué términos se evalúa",
    "qué hace una pregunta previa sobre qué clase de persona eres",
    "en qué se diferencia caer bien de ser de los suyos",
    "qué parte de este libro se apoya en estudios que se cayeron",
  ],

  siddhartha: [
    "por qué hay conocimientos que nadie te puede transmitir",
    "qué le da a alguien poder aguantar sin lo que necesita",
    "cómo se acaba siendo aquello que se despreciaba",
    "por qué escuchar bien es un oficio y no una actitud",
    "qué cambia saber quién escribió algo y desde dónde",
  ],

  originales: [
    "cómo distinguir una historia elegante de una prueba",
    "por qué conviene no dejar lo seguro mientras pruebas algo",
    "por qué producir mucho es la única forma de producir algo bueno",
    "por qué juzgas tan mal tu propio trabajo",
    "quién es el que menos se atreve a discrepar en una empresa",
  ],

  "mujeres-aman-demasiado": [
    "qué significa que la gente estable te resulte aburrida",
    "por qué lo conocido se reconoce como amor aunque fuera caótico",
    "qué tapa la costumbre de ocuparse de los problemas de otro",
    "cómo contar el patrón con un calendario en vez de con la memoria",
    "por qué llamarlo adicción traslada la responsabilidad de lado",
  ],

  "revolucion-glucosa": [
    "por qué el mismo plato en otro orden entra más despacio en la sangre",
    "qué hace una cucharada de vinagre antes de una comida",
    "por qué diez minutos andando valen más que cualquier otro truco",
    "qué explica el hambre y el sueño de media mañana",
    "qué mide de verdad un sensor de glucosa en alguien sano",
  ],

  "poder-de-la-presencia": [
    "qué detecta de verdad alguien que te está entrevistando",
    "qué pasó cuando repitieron el experimento con más participantes",
    "qué ejercicio de este libro sí se ha replicado en escuelas",
    "cuál es el rasgo que define el síndrome del impostor",
    "por qué esforzarse en parecer fuerte transmite lo contrario",
  ],

  "conversaciones-cruciales": [
    "cómo salir de la falsa disyuntiva entre ser sincero y llevarse bien",
    "por qué callarse y gritar son exactamente la misma señal",
    "qué paso invisible hay entre ver algo y enfadarte",
    "las tres historias con las que uno se justifica no hacer nada",
    "por qué hablar con menos seguridad convence más",
  ],

  "amar-o-depender": [
    "por qué una relación intermitente engancha más que una buena",
    "qué señales se pueden contar con un calendario delante",
    "por qué el límite hay que escribirlo antes de necesitarlo",
    "en qué momento exacto llega la recaída después de una ruptura",
    "por qué no necesitar a nadie no es la curación de la dependencia",
  ],

  "obstaculo-es-camino": [
    "cómo separar de un problema la parte que sí depende de ti",
    "qué le pasa a una situación cuando la describes sin adjetivos",
    "por qué un objetivo grande no se puede empezar por ningún sitio",
    "qué preguntar cuando algo no tiene ninguna solución",
    "qué se pierde al quedarse solo con la parte útil de una filosofía",
  ],

  "cinco-arrepentimientos": [
    "por qué la vida que uno no eligió se construye con decisiones pequeñas",
    "cómo distinguir lo que tiene ventana de lo que se puede intentar siempre",
    "qué hace que una amistad se pierda sin ninguna discusión",
    "qué le hace a alguien callarse durante años para mantener la paz",
    "qué predice de verdad cómo estarás a los ochenta años",
  ],

  esencialismo: [
    "por qué copiar solo la parte agradable de una estrategia sale carísimo",
    "qué tipo de oportunidad te come el año, que no es la mala",
    "qué contestar cuando te añaden trabajo sin quitarte nada",
    "cómo averiguar si algo que llevas años haciendo hace falta",
    "por qué calculas mal los plazos siempre en la misma dirección",
  ],

  "comunicacion-no-violenta": [
    "cómo contar algo tal y como lo habría grabado una cámara",
    "cómo saber si lo que dices sentir es un sentimiento o una acusación",
    "por qué las necesidades casi nunca chocan aunque las soluciones sí",
    "en qué se distingue una petición de una exigencia",
    "qué esconde la frase «tengo que» cuando se termina de escribir",
  ],

  "hombres-marte-mujeres-venus": [
    "qué decir antes de retirarte para que no se lea como castigo",
    "qué preguntar antes de proponerle a alguien una solución",
    "por qué esperar que lo adivinen acaba pasando factura",
    "qué le hacen a una queja las palabras «siempre» y «nunca»",
    "qué se sabe de verdad de las diferencias entre hombres y mujeres",
  ],

  "metodo-wim-hof": [
    "de dónde vienen las ganas de respirar, que no es del oxígeno",
    "por qué esta técnica no se hace nunca dentro del agua",
    "qué demostró exactamente el estudio que sostiene el método",
    "las tres cosas que ese estudio no puede decir",
    "qué se sabe del agua fría cuando se mide por separado",
  ],

  "frida-herrera": [
    "cómo reaparece después una formación que alguien no llegó a terminar",
    "qué sale de pintar teniendo un solo modelo disponible",
    "de qué tradición vienen sus cuadros, que no es el surrealismo",
    "cómo una misma decisión puede ser política y práctica a la vez",
    "qué pasa cuando un libro fabrica el icono que está estudiando",
  ],

  "cumbres-borrascosas": [
    "por qué quien participó en algo no puede ser testigo de ello",
    "en qué se diferencia que alguien te necesite de que te quiera bien",
    "cómo las reglas que dejan a alguien sin nada sirven al revés",
    "qué recibes cuando lo que sabes de alguien te lo cuenta quien lo desprecia",
    "qué corta la crueldad que se hereda de una generación a otra",
  ],

  "nunca-comas-solo": [
    "por qué tus amigos cercanos saben exactamente lo mismo que tú",
    "qué convierte un contacto en una relación, y cuánto tarda",
    "qué rompe de verdad una relación profesional, que no es una discusión",
    "por qué calcular a quién ayudar sale más caro que no calcular",
    "por qué conviene ser conocido por algo estrecho y no por algo amplio",
  ],

  "el-cerebro": [
    "por qué un cerebro se termina quitando conexiones y no poniéndolas",
    "qué existe fuera de la cabeza cuando ves un color",
    "por qué los ojos envían correcciones y no imágenes",
    "qué devuelve alguien cuando le preguntas por qué hizo algo",
    "qué pregunta sí puede contestar un tribunal con datos",
  ],

  "tus-zonas-erroneas": [
    "en qué se diferencia aprender de un error de sentirse culpable",
    "por qué necesitar aprobación entrega decisiones a otros",
    "qué le hace a una persona la frase «yo soy así»",
    "cómo pelear una injusticia sin quedarse esperando por ella",
    "qué anuncian verbos como «ojalá» y «a ver si»",
  ],

  "leyes-naturaleza-humana": [
    "por qué sentir claridad especial suele significar lo contrario",
    "qué mirar para juzgar a alguien, que no es lo que dice",
    "las cuatro señales de quien va a costarte caro",
    "por qué atacar una opinión de frente la refuerza",
    "qué significa que algo de otro te irrite desproporcionadamente",
  ],

  "21-lecciones": [
    "en qué se diferencia quedarse sin trabajo de dejar de hacer falta",
    "qué significa que un sistema acierte más que tu intuición",
    "por qué un dato no encaja en las leyes de propiedad que existen",
    "qué problemas no puede resolver un país por bien gobernado que esté",
    "qué se puede enseñar cuando no se sabe qué oficios habrá",
  ],

  "millonario-automatico": [
    "por qué los presupuestos se abandonan a los tres meses",
    "en qué orden tiene que salir el dinero para que quede algo",
    "qué gasto revisar primero, que no es el que todos dicen",
    "cómo quitarle años a una hipoteca sin pagar más al mes",
    "para qué sirve de verdad tener tres meses guardados",
  ],

  "will-smith": [
    "por qué un objetivo grande no tiene por dónde empezarse",
    "qué se gana al contar lo que funciona en un oficio donde nadie cuenta",
    "por qué ganar más nunca arregla un problema de administración",
    "cuándo un gesto muy grande deja de dejar sitio al otro",
    "qué significa que alguien solo pueda negarse haciendo algo drástico",
  ],

  "por-que-amamos": [
    "en qué se diferencia un impulso de una emoción, y por qué importa",
    "por qué desear, enamorarse y encariñarse son tres cosas separadas",
    "qué demuestran dos roedores casi idénticos sobre la fidelidad",
    "por qué un rechazo se parece más a una abstinencia que a la tristeza",
    "qué se sabe y qué no del efecto de los antidepresivos en el vínculo",
  ],

  "poder-5-segundos": [
    "por qué las ganas llegan después de empezar y no antes",
    "qué hace contar hacia atrás que no hace decidirse",
    "por qué arrancar cuesta más que continuar, y cómo abaratarlo",
    "qué decirse antes de algo que da miedo, según un experimento",
    "para qué no sirve una técnica de arranque por buena que sea",
  ],

  "obtenga-el-si": [
    "por qué preguntar para qué lo quiere el otro desbloquea la conversación",
    "dónde está tu poder real cuando negocias algo",
    "por qué proponer y decidir a la vez estropea las dos cosas",
    "qué hacer cuando la discusión se convierte en un pulso",
    "cómo desactivar una táctica sucia sin acusar a nadie",
  ],

  "quien-queso": [
    "por qué comprobar a menudo sale mucho más barato que enterarse tarde",
    "qué compara tu cabeza cuando calcula el miedo a moverte",
    "cuándo buscar responsables estorba y cuándo es el primer paso",
    "qué conductas quedan fuera de una fábula sin nadie al mando",
    "por qué mirar quién te da un consejo cambia lo que significa",
  ],

  "dopamina-lieberman": [
    "por qué lo predecible deja de motivar aunque siga siendo bueno",
    "cómo se puede querer algo sin disfrutarlo en absoluto",
    "qué cambia en el cuerpo cuando termina la fase obsesiva",
    "por qué conseguir más no aumenta la satisfacción",
    "qué forma tienen las actividades que sí se disfrutan",
  ],

  "segundo-cerebro": [
    "qué merece guardarse de un libro entero, que son cinco cosas",
    "por qué ordenar por temas hace que no encuentres nada",
    "cómo resumir una nota sin dedicarle tiempo a propósito",
    "qué extraer de un trabajo terminado para no repetirlo",
    "cómo saber si tu sistema ha sustituido a tu trabajo",
  ],

  "cuatro-mil-semanas": [
    "por qué despachar más rápido hace que llegue más trabajo",
    "de dónde salió la idea de que el tiempo es algo que se gasta",
    "por qué elegir duele siempre, aunque elijas bien",
    "por qué se aplaza justo lo que más ganas hay de hacer",
    "qué pierde el descanso cuando no coincide con el de nadie",
  ],

  "ensenare-ser-rico": [
    "por qué empezar antes pesa más que elegir bien el producto",
    "cuánto se lleva una comisión pequeña a lo largo de una vida",
    "por qué comprar el índice entero bate a casi todos los gestores",
    "cómo montar un sistema que no dependa de tu voluntad",
    "por qué recortarlo todo un poco no lo aguanta nadie",
  ],

  "senor-anillos": [
    "qué hace creíble un mundo inventado, que no es lo asombroso",
    "por qué hay poderes que corrompen a cualquiera que los use",
    "por qué la piedad de hace meses resuelve lo que el esfuerzo no",
    "en qué se diferencia una alegoría de un relato aplicable",
    "por qué quien vuelve de ciertos sitios no puede quedarse",
  ],

  "piensalo-otra-vez": [
    "los cuatro papeles con los que se discute, y cuál sirve",
    "por qué definirse por una opinión encarece cada rectificación",
    "por qué dos argumentos convencen más que cinco",
    "qué preguntar a alguien con una postura muy firme",
    "en qué se diferencia quien te desafía de quien te critica",
  ],

  "empieza-porque": [
    "por qué el orden de una presentación cambia lo que decide quien escucha",
    "qué le cuesta a una empresa cada descuento que hace",
    "a cuánta gente hay que convencer para que el resto imite",
    "cómo comprobar si un propósito declarado es de verdad",
    "qué le pasa a una empresa que solo se dirige por lo medible",
  ],

  "correr-o-morir": [
    "por qué ir a vencer algo te quita el momento de dar la vuelta",
    "cómo distinguir el dolor que avisa del que solo cuesta",
    "por qué las decisiones difíciles se toman antes y no durante",
    "en qué se diferencia la costumbre de la motivación",
    "qué se pierde al planificar con un límite que nunca comprobaste",
  ],

  relentless: [
    "en qué se diferencia quien decide de quien sugiere",
    "por qué conviene comprometerse con el resultado y no con la tarea",
    "cuándo ayuda dejar de pensar y cuándo arruina el aprendizaje",
    "por qué el descanso cuenta como parte del entrenamiento",
    "qué falla en un argumento construido sobre casos excepcionales",
  ],

  "malcolm-x": [
    "por qué un techo puesto con buena intención frena más que el odio",
    "qué aprende sobre sí mismo quien se cambia el aspecto para encajar",
    "cómo se aprende a hablar en público empezando por leer",
    "lo que cuesta rectificar en público algo defendido durante años",
    "por qué reformular un problema cambia quién tiene que responder",
  ],

  "harry-potter-1": [
    "por qué lo nuevo suele ser algo viejo puesto en otro sitio",
    "la diferencia entre ser conocido y haber hecho algo",
    "por qué elegir lo que no quieres ser define más que tu carácter",
    "el precio de mirar durante horas un deseo que no se cumple",
    "por qué cuesta más enfrentarse a los amigos que a los rivales",
  ],

  "tal-como-eres": [
    "por qué el cuerpo puede responder a algo que no apetece nada",
    "en qué se diferencia el deseo que llega antes del que llega después",
    "qué frena de verdad, y por qué casi nadie lo eligió",
    "por qué insistir empeora la situación en una pareja desigual",
    "cómo saber si algo que te venden resuelve tu problema o el de otro",
  ],

  "magia-pensar-grande": [
    "las cuatro excusas con las que casi todo el mundo se cubre",
    "por qué el valor aparece después de actuar y no antes",
    "cómo cambia lo que se te ocurre según las palabras que usas",
    "a quién conviene pedir consejo y a quién no",
    "cómo se repasa un fracaso sin dejar de mirarlo a mitad",
  ],

  "elon-musk": [
    "cómo se decide si conviene fabricar una pieza o comprarla",
    "por qué automatizar antes de simplificar sale carísimo",
    "el orden en que se recorta un proceso para no romperlo",
    "qué demuestra y qué no que una empresa aguante sin su plantilla",
    "por qué dos rasgos juntos no prueban que uno cause el otro",
  ],

  "arte-seduccion": [
    "por qué la atención completa pesa más que el aspecto físico",
    "cómo alguien se vuelve insustituible cuando ya no lo desean",
    "por qué el deseo es imitativo y se contagia de terceros",
    "en qué se parece un cortejo calculado al control coercitivo",
    "qué conductas espantan a cualquiera por mucho que se esfuerce",
  ],

  "poder-introvertidos": [
    "en qué se diferencia la timidez de la preferencia por el silencio",
    "por qué las reuniones creativas dan peores ideas que trabajar solo",
    "cómo el sistema de recompensa explica quién asume riesgos",
    "cuándo un jefe callado rinde más que uno que llena la sala",
    "hasta dónde se puede fingir un carácter que no se tiene",
  ],

  "magia-orden": [
    "por qué ordenar poco a poco garantiza volver a empezar",
    "por qué se ordena por categorías y nunca por habitaciones",
    "por qué preguntar qué tirar te paraliza y qué preguntar en su lugar",
    "por qué nada debe apilarse nunca en un cajón",
    "por qué no se ordenan las cosas de nadie más",
  ],

  "secreto-byrne": [
    "de dónde sale realmente la ley de la atracción",
    "qué parte de la visualización está medida y cuál no",
    "por qué visualizar el resultado reduce el esfuerzo",
    "por qué un método que nunca falla no explica nada",
    "qué le pasa a un enfermo al que le dicen que se cure pensando",
  ],

  "48-leyes-poder": [
    "por qué no conviene eclipsar nunca a quien está por encima",
    "por qué el silencio produce más efecto que un argumento",
    "cómo se construye una reputación y cómo se defiende",
    "por qué lo que consigues gratis acaba saliendo caro",
    "por qué la rigidez es la mayor debilidad posible",
  ],

  becoming: [
    "qué decide de verdad el futuro de un niño sin recursos",
    "cómo se contesta a quien duda de que valgas",
    "qué red hace falta debajo para poder cambiar de vida",
    "qué se aprende en una terapia de pareja de veinte años",
    "por qué ser el primero de algo cansa el doble",
  ],

  "inteligencia-erotica": [
    "por qué el amor y el deseo piden cosas contrarias",
    "en qué momento se vuelve a mirar con deseo a la pareja",
    "qué relación tiene el reparto de la casa con el dormitorio",
    "por qué las fantasías no coinciden con lo que uno defiende",
    "por qué la transparencia total no produce confianza",
  ],

  determinacion: [
    "por qué el esfuerzo cuenta dos veces y el talento una",
    "por qué llamar genio a alguien te deja tranquilo",
    "en qué se diferencia repetir algo de entrenarlo",
    "por qué el interés aparece después y no antes",
    "cómo se ordenan veinticinco objetivos en uno solo",
  ],

  "dar-y-recibir": [
    "por qué los generosos ocupan los dos extremos de la tabla",
    "por qué al que se aprovecha dejan de contar con él",
    "por qué el contacto útil es el que no ves hace años",
    "qué tres cosas hunden a la gente generosa",
    "cómo se organiza la ayuda para que no te agote",
  ],

  "lenguaje-del-cuerpo": [
    "por qué un gesto suelto no significa absolutamente nada",
    "qué distingue una sonrisa sentida de una decidida",
    "cómo copiar la postura del otro sin que se note",
    "por qué los pies son la parte del cuerpo que nadie vigila",
    "por qué detectar mentiras por el cuerpo no funciona",
  ],

  "rompe-barrera-no": [
    "por qué nadie escucha tus razones hasta sentirse entendido",
    "qué pasa si repites las tres últimas palabras del otro",
    "por qué conviene decir tú primero lo peor que piensan de ti",
    "por qué un «no» abre la conversación y un «sí» la cierra",
    "por qué partir la diferencia es la peor salida posible",
  ],

  "gottman-pareja": [
    "las cuatro maneras de discutir que anuncian una separación",
    "por qué los tres primeros minutos deciden cómo acaba una discusión",
    "por qué dos tercios de los problemas no se resuelven nunca",
    "cómo se pide atención sin darte cuenta de que la estás pidiendo",
    "qué relación tiene ceder en lo pequeño con durar en lo grande",
  ],

  "siete-pecados": [
    "por qué cuanto mejor es una historia menos gente quiere comprobarla",
    "por qué un sector que necesita buenas noticias deja de examinarlas",
    "qué preguntarse ante un testimonio que acusa a alguien poderoso",
    "cómo se usan las demandas para silenciar sin demostrar nada",
    "por qué una buena causa alrededor de alguien funciona como blindaje",
  ],

  "nunca-te-pares": [
    "por qué un negocio que crece rápido quiebra por caja y no por ventas",
    "por qué al principio no necesitas profesionales sino obsesionados",
    "dónde está la ventaja real: en lo que solo tú puedes fabricar",
    "de dónde llega el golpe cuando empiezas a molestar de verdad",
    "lo que se lleva por delante dedicarle veinte años a una sola cosa",
  ],

  "legado-all-blacks": [
    "por qué a un grupo bueno lo hunde creerse que ya se lo ganó",
    "cómo se instala un valor: haciéndolo el de arriba cuando le incomoda",
    "por qué una norma que nunca te ha costado nada no es una norma",
    "qué gesto ensayado corta el bucle cuando llega el pánico",
    "por qué un ritual que acaba de inventar el jefe no engaña a nadie",
  ],

  "gen-deportivo": [
    "por qué la pregunta no es si importa el talento sino cuánto explica",
    "por qué el entrenamiento te acerca a tu techo pero no te lo cambia",
    "por qué toda maestría es específica y fuera de su terreno no sirve",
    "por qué el mismo programa mejora muchísimo a unos y nada a otros",
    "para qué sirven y para qué no los tests genéticos que se venden",
  ],

  "numero-uno": [
    "por qué acumular años haciendo algo no te hace mejor en ello",
    "por qué muchos límites del cerebro son solo límites de tu método",
    "qué tiene un experto que no se puede transmitir con una explicación",
    "qué requisitos cumple un entrenamiento que de verdad mejora a alguien",
    "por qué en varias profesiones se empeora a medida que se acumula oficio",
  ],

  "hablo-correr": [
    "por qué no hay que descansar nunca dos días seguidos",
    "por qué conviene parar antes de agotarte para tener ganas mañana",
    "cuáles de los requisitos de un oficio se entrenan y cuál no",
    "por qué después de llevar algo al límite deja de importarte un tiempo",
    "cómo se cambia la vara de medir cuando ya no puedes mejorar",
  ],

  "rey-del-mundo": [
    "qué haces cuando los dos papeles que te ofrecen los ha escrito otro",
    "por qué el que decide cómo se habla de él deja de depender",
    "cómo se gana a un rival confiado cambiando el juego en vez de mejorarlo",
    "lo que un grupo que te protege te va a pedir que sacrifiques",
    "por qué juzgar lo nuevo con la vara de lo viejo falla siempre",
  ],

  "remando-un-hombre": [
    "por qué los ocho mejores no forman nunca el mejor equipo",
    "qué ocurre cuando un grupo por fin se mueve exactamente a la vez",
    "cómo aprende a depender de otros alguien a quien abandonaron pronto",
    "por qué lo que crece deprisa y protegido se rompe antes",
    "lo que te enseña un trabajo duro y ajeno a lo tuyo",
  ],

  "mamba-mentality": [
    "qué se mira exactamente al estudiar a alguien a quien vas a enfrentarte",
    "por qué conviene aprenderse las reglas mejor que quien las aplica",
    "cómo se le pide a alguien mejor que tú que te enseñe lo suyo",
    "por qué lo que llevas años haciendo sin pensar es donde queda margen",
    "por qué un método excelente puede ser pésimo consejo para casi todos",
  ],

  "once-anillos": [
    "por qué una estructura clara da más libertad que no tener ninguna",
    "cómo se convence al mejor del equipo de que reparta",
    "por qué cada instrucción que das gasta autoridad",
    "cómo se dirige a la gente difícil sin tratarla como a los demás",
    "por qué mirar el marcador todo el rato te hace jugar peor",
  ],

  moneyball: [
    "cómo se detecta que un sector entero lleva un siglo midiendo mal",
    "por qué hay que saber cuál es el recurso que se te acaba",
    "por qué un defecto visible hace que se descuente todo lo bueno",
    "dónde están las ventajas baratas: en lo que a los demás les da vergüenza",
    "por qué un buen método mejora tus probabilidades y no te garantiza nada",
  ],

  "rafa-mi-historia": [
    "por qué quejarte del viento le anuncia al rival que vas perdiendo",
    "cómo se administra el miedo sin esperar a que desaparezca",
    "para qué sirven de verdad las rutinas antes de algo importante",
    "por qué la concentración se agota y hay que volver a encenderla",
    "cómo un rival que te supera te obliga a inventar un plan mejor",
  ],

  "soy-zlatan": [
    "qué haces cuando sabes que no vas a encajar por más que lo intentes",
    "por qué te mejora más quien te obliga a repetir lo que odias",
    "cómo se conquista un grupo nuevo en la primera semana",
    "por qué un sitio prestigioso no sirve si allí sobra lo que sabes hacer",
    "para qué sirve anunciar en voz alta lo que vas a hacer",
  ],

  "cruyff-14": [
    "por qué obedecer sin entender te deja indefenso cuando falla el plan",
    "cómo se ocupa un espacio en vez de correr detrás del que lo tiene",
    "lo que cuesta y lo que da elegir bando en público",
    "por qué correr mucho suele ser la prueba de que saliste tarde",
    "cómo se deja montado un sistema que funciona sin ti",
  ],

  "fiebre-gradas": [
    "por qué el estado natural del hincha es la decepción",
    "cómo una recompensa rara e imprevisible engancha más que una segura",
    "lo que un refugio te da y lo que te acaba quitando",
    "por qué lo que llevas veinte años esperando no arregla tu vida",
    "el precio en silencios que se paga por pertenecer a algo grande",
  ],

  "futbol-contra-enemigo": [
    "por qué un país dice en el estadio lo que calla en otros sitios",
    "qué le pasa a una identidad cuando le cierran todos los cauces menos uno",
    "por qué una historia falsa puede sostener el orgullo de una ciudad",
    "cómo se gobierna un deporte donde el Estado no llega",
    "por qué el mismo juego no significa nada en algunos países",
  ],

  "futbol-sol-sombra": [
    "por qué lo que escasea en un espectáculo es lo que le da valor",
    "cómo la falta de espacio y de dinero inventa un estilo propio",
    "para qué le sirve el deporte a un gobierno con problemas",
    "por qué una industria que teme perder acaba castigando la belleza",
    "en qué acierta y en qué se equivoca el que denuncia lo que ama",
  ],

  "piramide-invertida": [
    "por qué el pase se inventó donde había peores jugadores individuales",
    "cómo un cambio pequeño de reglamento reordena un deporte entero",
    "por qué el sistema que arrasa hoy será el más fácil de batir mañana",
    "cómo se defiende un equipo adelantando la línea en vez de retrasarla",
    "por qué cada década sobran más delanteros y faltan más centrocampistas",
  ],

  "yo-soy-el-diego": [
    "cómo el barrio en el que naces decide contra quién peleas",
    "lo que significa para una ciudad pobre ganarle a las ricas",
    "por qué un tramposo célebre no se arrepiente nunca en público",
    "cómo empieza una adicción cuando nadie a tu alrededor quiere verla",
    "en qué deforma un libro cuando lo cuenta el propio protagonista",
  ],

  "el-elemento": [
    "qué dos cosas tienen que coincidir para encontrar lo tuyo",
    "por qué la escuela sigue teniendo la forma de una fábrica",
    "cómo se le pasa por alto un talento enorme a quien debería verlo",
    "por qué los estilos de aprendizaje no existen, aunque se enseñen",
    "qué se sabe realmente sobre eso de seguir tu pasión",
  ],

  "heroe-mil-caras": [
    "por qué casi todo héroe empieza rechazando lo que le proponen",
    "para qué sirve en un relato el momento en que todo se hunde",
    "por qué la parte difícil de un viaje es siempre la vuelta",
    "de quién es realmente la estructura que usan todas las películas",
    "por qué un esquema que encaja con todo no informa de nada",
  ],

  reproductibilidad: [
    "en qué se diferencia copiar algo a mano de copiarlo con una máquina",
    "qué pierde una obra cuando cualquiera puede tener una copia",
    "por qué esa pérdida puede ser una buena noticia y no un desastre",
    "qué le ocurre a un actor cuando actúa delante de un aparato",
    "cómo un régimen convierte la política en un espectáculo bonito",
  ],

  "espiritual-arte": [
    "cuál es el único criterio para juzgar si una obra vale algo",
    "por qué la idea de que el arte va por delante ha hecho daño",
    "qué se creía sobre lo que provocan los colores y qué se sabe hoy",
    "por qué comparar la pintura con la música desarma la objeción habitual",
    "qué se gana cuando un cuadro deja de tener que parecerse a algo",
  ],

  "vidas-vasari": [
    "cómo se ordena la historia del arte y a quién beneficia ese orden",
    "por qué llamamos gótico a algo que nadie llamó así en su época",
    "qué cambia cuando un artesano empieza a considerarse un artista",
    "cómo se comprueba si una anécdota famosa ocurrió de verdad",
    "qué pasa cuando alguien lee en vida su propia biografía",
  ],

  "van-gogh-cartas": [
    "en cuántos oficios se puede fracasar antes de encontrar el propio",
    "de qué vive quien no vende nada durante diez años",
    "qué se busca al poner dos colores enfrentados en un cuadro",
    "cómo escribe sobre su trabajo alguien encerrado en un manicomio",
    "de quién depende que hoy conozcamos a un artista que murió pobre",
  ],

  "arte-sin-hombres": [
    "cómo se cierra una carrera entera prohibiendo una sola clase",
    "qué le hacían a una mujer que denunciaba una violación entonces",
    "cómo se borra a una artista cambiándole la firma a un cuadro",
    "quién pintó el primer cuadro abstracto, que no fue quien te enseñaron",
    "cuánto menos vale el mismo cuadro si lo firma una mujer",
  ],

  imperiofobia: [
    "por qué todo imperio genera un desprecio que le sobrevive siglos",
    "cómo se fabrica la mala fama de un país y quién la escribe",
    "por qué una cifra repetida mil veces no se parece a la contada",
    "por qué una explicación que sirve para todo no explica nada",
    "cómo distinguir corregir un tópico de fabricar el tópico contrario",
  ],

  "homo-sovieticus": [
    "cómo se cuenta un país entero solo con voces de gente corriente",
    "qué le pasa a quien recibe una libertad que no había pedido así",
    "cómo desaparecen en unas semanas los ahorros de toda una vida",
    "por qué hay regímenes de los que nadie responde nunca",
    "de qué es la nostalgia de quien echa de menos una dictadura",
  ],

  "guerra-civil-thomas": [
    "por qué un golpe de Estado que fracasa a medias produce una guerra",
    "qué le pasa a un gobierno legal que se queda sin ejército ni policía",
    "cómo un pacto de no intervención puede favorecer a un solo bando",
    "en qué se diferencian las matanzas de una retaguardia y de la otra",
    "por qué se pierde una guerra por motivos que no son militares",
  ],

  "auschwitz-rees": [
    "cómo un sitio cambia de función cuatro veces sin que nadie lo planee",
    "por qué una burocracia hace posible lo que ninguna persona haría sola",
    "qué buscaban de verdad los que eligieron un método de matar",
    "qué hace un gobierno cuando le piden entregar a sus propios vecinos",
    "qué contestan cincuenta años después los que participaron en aquello",
  ],

  tatuador: [
    "cómo sobrevive alguien a quien le dan un puesto dentro del horror",
    "qué compra y qué cuesta un privilegio concedido por tus verdugos",
    "cómo funciona un mercado negro donde no existe el dinero",
    "por qué una novela basada en hechos reales sigue siendo una novela",
    "por qué los errores de detalle importan al contar un genocidio",
  ],

  postguerra: [
    "sobre qué se levantó la paz europea, que no fue la reconciliación",
    "para qué sirvió de verdad el dinero americano de la posguerra",
    "por qué el crecimiento de aquellas décadas no se puede repetir",
    "cuánto tarda un continente en atreverse a mirar su propio pasado",
    "por qué un país recuerda lo que le conviene y olvida el resto",
  ],

  "canones-agosto": [
    "cómo un plan militar rígido arrastra a un país a una guerra",
    "lo que cuesta una doctrina que ordena atacar siempre",
    "por qué llega un punto en que nadie puede ya parar nada",
    "cómo un detalle logístico decide de qué bando se pone un imperio",
    "por qué conviene leer cómo empezó una guerra antes de empezar otra",
  ],

  "ensayos-montaigne": [
    "qué significa ensayar una idea en vez de demostrarla",
    "por qué corregirse añadiendo enseña más que borrar lo anterior",
    "cómo mirar tu propia cultura desde fuera y qué se ve entonces",
    "por qué saber algo de memoria no es saberlo",
    "cómo se cambia de opinión sobre la muerte a lo largo de una vida",
  ],

  "existencialismo-humanismo": [
    "qué significa que primero existas y solo después decidas quién eres",
    "por qué cada decisión tuya propone en silencio cómo debería vivir todo el mundo",
    "en qué sentido no puedes librarte de ser libre",
    "por qué ninguna doctrina te va a resolver la decisión difícil",
    "por qué un autor puede arrepentirse de su libro más leído",
  ],

  "mas-alla-bien-mal": [
    "por qué una filosofía sería la confesión involuntaria de quien la escribe",
    "qué le falla al «pienso, luego existo» de Descartes",
    "en qué se diferencian una moral de fuertes y una de débiles",
    "qué quiere decir que lo que te mueve no sea la razón",
    "cómo se falsifica la obra de un muerto y para qué sirve luego",
  ],

  "contrato-social": [
    "por qué la fuerza no crea ninguna obligación de obedecer",
    "qué problema tiene que resolver cualquier gobierno para ser legítimo",
    "en qué se diferencia lo que quiere la mayoría de lo que conviene",
    "por qué hay poderes que no se pueden delegar en un representante",
    "cómo se usa a un pensador para justificar lo contrario de lo que dijo",
  ],

  "etica-nicomaco": [
    "por qué la felicidad de la que habla no se puede tener un martes",
    "por qué nadie se vuelve justo entendiendo lo que es la justicia",
    "qué dice de verdad el término medio, que no es la mediocridad",
    "cómo se puede saber lo correcto y hacer exactamente lo contrario",
    "por qué la amistad ocupa una quinta parte de un tratado de ética",
  ],

  "etica-amador": [
    "por qué la libertad no consiste en poder hacer cualquier cosa",
    "las tres cosas que confundimos con razones para hacer algo",
    "qué diferencia hay entre querer algo y que simplemente te apetezca",
    "por qué eres humano solo porque otros te han tratado como tal",
    "dónde acaba lo que decides tú y empieza lo que decidimos entre todos",
  ],

  "cuentos-poe": [
    "la regla con la que se fundó el cuento moderno",
    "cómo funciona un narrador al que no se puede creer",
    "las cuatro piezas con las que se monta cualquier relato policiaco",
    "por qué un escondite a la vista derrota a una búsqueda minuciosa",
    "cómo se fabrica la leyenda negra de un escritor después de muerto",
  ],

  mujercitas: [
    "cómo un primer capítulo instala la moral de todo un libro",
    "cuánto le pagaban a una escritora por lo que sabía que era malo",
    "de qué libro antiguo sale la estructura de media literatura juvenil",
    "por qué una autora niega a sus lectores el final que le piden",
    "por qué el personaje antipático de un libro deja de serlo con los años",
  ],

  "renglones-torcidos": [
    "por qué una historia contada desde dentro no se puede confirmar",
    "cómo dos expertos llegan a conclusiones opuestas con el mismo informe",
    "qué pasa cuando negar una acusación cuenta como prueba de culpa",
    "por qué es tan difícil demostrar que estás cuerdo desde dentro",
    "qué cambió en la psiquiatría justo después de que saliera este libro",
  ],

  "elegancia-erizo": [
    "por qué alguien esconde durante décadas lo que sabe",
    "qué está diagnosticando una adolescente cuando decide morirse",
    "cómo un detalle mínimo derriba un disfraz de veintisiete años",
    "por qué la clase social decide quién puede parecer culto",
    "por qué un final abrupto puede arruinar o salvar una novela",
  ],

  "el-tunel": [
    "por qué contar el final en la primera línea cambia todo el libro",
    "cómo un detalle que solo tú ves se convierte en una obsesión",
    "por qué los celos funcionan como un método y no como una emoción",
    "cómo alguien construye pruebas de lo que ya ha decidido creer",
    "de dónde sale la imagen de dos personas que no llegan a tocarse",
  ],

  "intro-psicoanalisis": [
    "por qué una equivocación al hablar tendría dos intenciones dentro",
    "las cuatro operaciones con las que se fabrica un sueño",
    "en qué sentido un síntoma es un acuerdo entre dos fuerzas",
    "por qué el paciente acaba tratando al médico como a otra persona",
    "por qué un autor acaba corrigiendo su propio libro más leído",
  ],

  "cosas-buenas": [
    "qué hace el cortisol y qué no vas a poder hacer con él",
    "por qué dar vueltas a lo mismo predice una depresión",
    "qué hay de cierto en que el cerebro no distinga lo imaginado",
    "por qué las cuatro hormonas de la felicidad no explican nada",
    "qué predice de verdad cómo estarás de salud a los ochenta",
  ],

  "maneras-de-amar": [
    "de dónde salen los tres modos de comportarse dentro de una pareja",
    "qué hace exactamente alguien ansioso cuando siente que se aleja el otro",
    "las maniobras con las que una persona evitativa mantiene la distancia",
    "por qué esas dos formas de ser se emparejan tanto entre sí",
    "por qué apoyarte bien en alguien te vuelve más autónomo y no menos",
  ],

  "cerebro-del-nino": [
    "un modelo del cerebro que se explica con una sola mano",
    "cómo distinguir un berrinche calculado de uno desbordado",
    "por qué calmar antes de corregir no es ceder",
    "qué le pasa al miedo cuando le pones nombre a lo que sientes",
    "cómo detectar el mito científico sobre el que se monta un libro",
  ],

  "poder-metabolismo": [
    "cómo se reparte un plato sin tener que contar nada",
    "qué le pasa al hambre cuando duermes cuatro horas",
    "qué es el metabolismo y cómo se mide de verdad",
    "por qué un diagnóstico que no existe se vende igual de bien",
    "cómo confirmar una sospecha de tiroides con un análisis corriente",
  ],

  "vivir-plenitud": [
    "en qué consiste exactamente un programa de reducción del estrés",
    "qué demuestra pasarse diez minutos comiendo una sola pasa",
    "cómo separar un dolor de la historia que te cuentas sobre él",
    "por qué aceptar algo no es lo mismo que resignarse",
    "qué encontraron los ensayos, incluidos los efectos que nadie cuenta",
  ],

  "milagro-metabolico": [
    "qué hace la insulina y por qué bloquea el uso de la grasa",
    "por qué contar calorías es cierto y aun así no te sirve",
    "qué se sabe del ayuno intermitente cuando por fin se mide",
    "con qué se consiguió revertir una diabetes en un ensayo serio",
    "cómo separar los consejos buenos de la teoría que los envuelve",
  ],

  invencible: [
    "cómo separar lo que depende de ti de lo que no",
    "qué frase se cuela entre lo que te pasa y lo que sientes",
    "por qué escribir por qué fracasará algo antes de empezarlo",
    "una fórmula de una línea que triplica las probabilidades de cumplir algo",
    "por qué la fuerza de voluntad no es un depósito que se vacía",
  ],

  "repensar-pobreza": [
    "por qué la pregunta de si la ayuda funciona no tiene respuesta",
    "en qué se gasta el dinero una familia pobre cuando le sobra algo",
    "por qué nadie paga céntimos por lo que le salvaría la vida",
    "qué pasó cuando por fin se midió si el microcrédito funcionaba",
    "las tres razones por las que fracasa un programa bienintencionado",
  ],

  "doctrina-shock": [
    "cómo se aprovecha una catástrofe para aprobar lo que nadie votaría",
    "por qué un plan económico puede estar escrito antes del golpe",
    "qué le pasa a una economía que se privatiza entera en dos años",
    "qué se firma en una negociación política que no sale en las noticias",
    "cómo distinguir los casos documentados de la teoría que los une",
  ],

  "dinero-domina-juego": [
    "por qué el porcentaje que apartas manda sobre el fondo que elijas",
    "si quien te aconseja cobra de ti o de lo que te vende",
    "una cartera pensada para aguantar los cuatro escenarios posibles",
    "cómo calcular la cifra exacta que te haría falta para vivir",
    "qué mirar con lupa cuando alguien te ofrece una renta de por vida",
  ],

  superpronosticadores: [
    "cómo se puntúa si una predicción fue buena o mala",
    "por qué el experto más famoso suele acertar menos que los demás",
    "cómo partir una pregunta imposible en cuatro preguntas difíciles",
    "por qué hay que empezar por la frecuencia general y no por el caso",
    "qué rasgos comparten los que aciertan más que el resto",
  ],

  "paseo-aleatorio": [
    "qué significa exactamente que la bolsa sea un paseo aleatorio",
    "por qué la gente compra lo que cree que comprarán los demás",
    "por qué el análisis de gráficos no sobrevive a un examen serio",
    "cuánto aciertan las previsiones de beneficios de los analistas",
    "cómo distinguir un precio correcto de un precio imbatible",
  ],

  "millonario-al-lado": [
    "una fórmula que dice si acumulas o gastas, con tu edad y tu sueldo",
    "por qué los que más ganan salen mal parados en esa cuenta",
    "en qué oficios estaban de verdad los millonarios que estudiaron",
    "qué le pasa a un hijo adulto al que sus padres siguen ayudando",
    "cómo detectar el fallo de método que arrastra un estudio entero",
  ],

  "bogle-sentido-comun": [
    "por qué los gestores en conjunto no pueden ganarle al mercado",
    "cuánto se lleva de verdad una comisión que parece pequeña",
    "por qué las tablas de fondos ocultan a todos los que quebraron",
    "el hueco entre lo que rinde un fondo y lo que acabas ganando tú",
    "cómo acabó la apuesta de un millón de dólares sobre esto mismo",
  ],

  einstein: [
    "por qué es falso que suspendiera matemáticas de pequeño",
    "qué pregunta abrió la relatividad, y no era una pregunta de física",
    "cómo salieron cuatro descubrimientos enormes de un mismo año",
    "por qué el mejor físico del siglo se equivocó sobre la física cuántica",
    "cómo distinguir el papel real de alguien en la bomba atómica del inventado",
  ],

  "musica-primos": [
    "por qué los números primos son los átomos de la aritmética",
    "qué es el problema sin resolver más importante de las matemáticas",
    "por qué comprobar algo diez billones de veces no lo demuestra",
    "cómo un problema abstracto acaba coincidiendo con la física",
    "cómo un asunto inútil acabó protegiendo tu tarjeta de crédito",
  ],

  "universo-mano": [
    "por qué mirar el cielo es mirar hacia atrás en el tiempo",
    "qué se sabe del noventa y cinco por ciento que no se ve",
    "qué separa exactamente el punto de no retorno de un agujero negro",
    "por qué un experimento con dos rendijas sigue sin poder explicarse",
    "cómo distinguir lo medido de lo deducido y de lo imaginado",
  ],

  "universo-cascara": [
    "por qué la gravedad no es una fuerza sino una forma del espacio",
    "qué significa que el universo pueda no tener ningún borde",
    "cómo se evapora un agujero negro y qué se lleva por delante",
    "por qué un físico defiende que el pasado no se puede cambiar",
    "cómo distinguir en un libro de divulgación lo medido de lo conjeturado",
  ],

  "ultimos-dinosaurios": [
    "por qué el cielo entero puede convertirse en una fuente de calor",
    "por qué importa tanto qué tipo de roca hay bajo un impacto",
    "qué crece primero en un mundo donde ya no queda casi nada",
    "qué tuvieron de distinto los animales que sobrevivieron",
    "por qué los que heredan un mundo no estaban esperando su turno",
  ],

  "pulgar-panda": [
    "por qué lo imperfecto es la mejor prueba de la evolución",
    "qué dice el registro fósil sobre el ritmo al que cambia la vida",
    "por qué las plumas no aparecieron para volar",
    "qué le pasa a un animal cuando cambia de tamaño",
    "cómo se cuela un prejuicio en mediciones hechas de buena fe",
  ],

  "cuchara-menguante": [
    "por qué la tabla periódica tiene esa forma tan rara",
    "por qué un metal puede ocupar el sitio de otro dentro de tu cuerpo",
    "qué reacción alimenta al mundo y municionó una guerra mundial",
    "cómo dos países se pelean durante décadas por poner nombres",
    "por qué la electrónica se fabrica a partir de arena",
  ],

  "vida-dali": [
    "por qué alguien empieza su autobiografía con un recuerdo imposible",
    "cómo el paisaje donde creciste acaba metido en todo lo que haces",
    "qué se calla en unas memorias sobre el amigo muerto",
    "en qué consiste convertir tus obsesiones en un método de trabajo",
    "cómo se fabrica un personaje público y qué acaba costando",
  ],

  "diarios-frida": [
    "cómo se pinta cuando el cuerpo duele todos los días",
    "qué significa que alguien tenga un idioma privado de colores",
    "cómo aparece una pareja difícil en las páginas que nadie iba a leer",
    "por qué las mismas imágenes vuelven una y otra vez en una obra",
    "qué dice de verdad la frase suya que todo el mundo cita",
  ],

  "magia-crear": [
    "qué hacer con el miedo en vez de esperar a que se vaya",
    "por qué conviene no dejar el trabajo para dedicarte a lo tuyo",
    "de dónde sale el mito de que hay que sufrir para crear",
    "por qué la curiosidad funciona mejor que la pasión",
    "cómo distinguir un consejo útil de la teoría mística que lo envuelve",
  ],

  "pajaro-a-pajaro": [
    "por qué el primer borrador tiene que ser malo a propósito",
    "cómo se hace algo enorme mirando solo un trozo pequeño cada vez",
    "cómo se le baja el volumen a la voz que te desanima",
    "por qué una historia sale de los personajes y no del plan",
    "qué cambia de verdad en tu vida el día que publicas algo",
  ],

  "camino-artista": [
    "en qué consiste escribir tres páginas a mano nada más levantarte",
    "por qué no hay que releer lo que se escribe así",
    "cómo se recupera la curiosidad con una cita contigo mismo",
    "cómo se reconoce a alguien que renunció a lo suyo hace años",
    "por qué producir mucho lleva antes a lo bueno que buscar lo perfecto",
  ],

  "dieta-cojea": [
    "de dónde salió la idea de que el desayuno es obligatorio",
    "por qué un zumo no equivale a la fruta que lleva dentro",
    "qué significa de verdad la palabra light en una etiqueta",
    "cuáles son los pocos suplementos que sí hacen falta",
    "por qué lo que tienes en casa decide más que tu voluntad",
  ],

  anticancer: [
    "por qué casi todo el mundo lleva encima células con mutaciones",
    "qué relación hay entre la inflamación crónica y el cáncer",
    "cómo separar lo demostrado de lo prometido en una lista de alimentos",
    "cuál de los consejos habituales tiene detrás pruebas de verdad",
    "qué se ha medido realmente sobre el estrés y la enfermedad",
  ],

  "milagro-manana": [
    "por qué lo que no tiene una hora fijada se aplaza siempre",
    "seis cosas que caben en una hora antes de que empiece el día",
    "cómo levantarse temprano sin depender de la fuerza de voluntad",
    "por qué un reto se abandona en la segunda semana",
    "cómo detectar lo que un libro de éxito prefiere no contarte",
  ],

  "codigo-obesidad": [
    "qué le pasa al cuerpo cuando pasa meses comiendo menos de lo que gasta",
    "por qué adelgazar de golpe deja el metabolismo tocado durante años",
    "por qué el azúcar de un refresco no va al mismo sitio",
    "de dónde salió el consejo de comer cinco veces al día",
    "qué han encontrado los ensayos serios sobre el ayuno",
  ],

  "nacidos-correr": [
    "cómo corre un pueblo que lleva siglos corriendo distancias enormes",
    "por qué el cuerpo humano aguanta corriendo más que casi ningún animal",
    "qué se le reprocha a la zapatilla con más amortiguación",
    "qué predice de verdad que te vayas a lesionar corriendo",
    "cómo distinguir una buena historia de una prueba científica",
  ],

  "marte-venus": [
    "por qué la ayuda que nadie te ha pedido se recibe como una crítica",
    "por qué perseguir a alguien que se ha encerrado alarga el encierro",
    "cómo se piden las cosas para que de verdad se hagan",
    "por qué los gestos pequeños y constantes puntúan más que los grandes",
    "qué dice la evidencia sobre las diferencias entre hombres y mujeres",
  ],

  "sentirse-bien": [
    "por qué el pensamiento va delante del sentimiento y no al revés",
    "las diez maneras en que tu cabeza deforma lo que te pasa",
    "cómo se rebate por escrito un pensamiento que te hunde",
    "por qué ponerle una nota a tu propio valor es ya el problema",
    "qué suele haber debajo de lo que llamamos pereza",
  ],

  "open-agassi": [
    "cómo se vive dedicándote a algo que tu padre eligió por ti",
    "por qué odiar tu trabajo no te impide ser el mejor del mundo",
    "lo que esconde un cambio de imagen que todo el mundo celebra",
    "cómo se reconstruye una carrera desde abajo a los veintisiete años",
    "por qué se aguanta mejor el dolor cuando el motivo es de otro",
  ],

  "messi-ronaldo": [
    "cómo dos maneras opuestas de trabajar llegan igual de lejos",
    "por qué un rival de tu edad te empuja más que cualquier entrenador",
    "lo que cambia en un oficio cuando entra el dinero de la televisión",
    "por qué el talento precoz necesita a alguien que lo administre",
    "qué le queda a alguien cuando se retira lo que lo definía",
  ],

  "sexta-extincion": [
    "quién inventó la idea de que una especie puede desaparecer",
    "por qué costó siglo y medio aceptar que hay catástrofes",
    "qué le pasa al mar cuando absorbe el dióxido de carbono",
    "por qué un trozo de selva protegido sigue perdiendo especies",
    "por qué mover especies de sitio es más grave de lo que parece",
  ],

  "error-descartes": [
    "qué le pasa a alguien que conserva la inteligencia y pierde las emociones",
    "por qué calcular sin sentir no basta para tomar una decisión",
    "cómo se mide en un laboratorio que el cuerpo decide antes que tú",
    "qué es una corazonada, explicada sin ninguna magia",
    "en qué se diferencian una emoción y un sentimiento",
  ],

  "lenguajes-amor": [
    "cuánto dura de media el enamoramiento y qué viene justo después",
    "por qué esforzarte más en una relación a veces la empeora",
    "cinco maneras distintas de demostrar afecto y qué duele en cada una",
    "tres preguntas para averiguar qué necesita de verdad el otro",
    "qué dice la evidencia sobre una idea que ha vendido millones",
  ],

  "lean-startup": [
    "por qué cumplir el plan puede ser la peor señal de todas",
    "qué es de verdad la versión más pequeña de un producto",
    "por qué los totales acumulados no sirven para decidir nada",
    "cómo saber si toca cambiar de rumbo o insistir un poco más",
    "los tres únicos motores con los que crece un negocio",
  ],

  "cero-a-uno": [
    "por qué competir bien acaba dejándote sin ningún beneficio",
    "cómo mienten sobre su mercado los que ya no tienen competencia",
    "por qué conviene empezar en un mercado ridículamente pequeño",
    "la zona en la que mueren productos que eran buenos",
    "siete preguntas que deciden si un negocio va a existir dentro de diez años",
  ],

  "riqueza-naciones": [
    "por qué dividir el trabajo tiene un techo que casi nadie menciona",
    "cuántas veces aparece de verdad la frase por la que se le cita",
    "qué pensaba de los empresarios el fundador de la economía moderna",
    "las tres cosas que sí le encarga al Estado",
    "cuatro reglas para saber si un impuesto está bien puesto",
  ],

  "emperador-males": [
    "por qué no se operó una enfermedad conocida durante trece siglos",
    "de qué gas de guerra salió el primer tratamiento contra el cáncer",
    "cómo se demuestra que una operación más agresiva no cura más",
    "cómo se curó una enfermedad infantil y a qué precio para los niños",
    "por qué el enemigo son genes propios y no ningún invasor",
  ],

  "henrietta-lacks": [
    "por qué unas células no se mueren nunca y las demás sí",
    "cómo se investiga con el cuerpo de alguien sin decírselo a nadie",
    "de quién es el tejido que te sacan en un hospital",
    "qué le pasa a una familia que se entera veinte años después",
    "cómo un solo error de laboratorio arruina miles de experimentos",
  ],

  feynman: [
    "la diferencia entre saber el nombre de algo y saber qué es",
    "por qué alguien brillante se dedica a abrir cajas fuertes por diversión",
    "qué se descubre al dar clase en un sitio donde nadie entiende nada",
    "qué encuentra quien se molesta en leer los libros de texto escolares",
    "por qué el trabajo que da un Nobel suele empezar como un juego",
  ],

  leonardo: [
    "por qué cuatro desventajas de partida pueden acabar siendo una ventaja",
    "para qué sirve llevar una lista de cosas que quieres averiguar",
    "qué se aprende de un cuerpo humano que no está en ningún libro",
    "por qué una obra maestra puede empezar a estropearse enseguida",
    "cómo se construye una sonrisa que aparece y desaparece al mirarla",
  ],

  "sobre-fotografia": [
    "por qué hacer una foto de algo es una forma de apropiárselo",
    "por qué el vocabulario de la fotografía es el de un arma",
    "para qué sirve realmente una cámara cuando estás de viaje",
    "qué puede hacer una imagen por una causa y qué no puede hacer",
    "por qué una autora acaba retirando parte de lo que escribió",
  ],

  "roba-artista": [
    "por qué buscar la originalidad es la mejor manera de no empezar nunca",
    "cómo se distingue copiar bien de copiar mal",
    "qué hacer mientras todavía no sabes qué clase de trabajo es el tuyo",
    "para qué sirve enseñar algo antes de tenerlo terminado",
    "por qué a una vida creativa le conviene ser aburrida y ordenada",
  ],

  "por-que-fracasan": [
    "por qué no explican nada la geografía, la cultura ni la ignorancia",
    "qué distingue a las instituciones que reparten de las que extraen",
    "por qué un país puede crecer con malas reglas, pero solo un rato",
    "cómo un mismo desastre lleva a dos sitios en direcciones opuestas",
    "por qué el que manda a veces prefiere un país pobre que pueda controlar",
  ],

  "deja-de-ser-tu": [
    "de dónde sale la historia personal que sostiene todo un método",
    "qué parte de un argumento así está bien demostrada",
    "qué se sabe realmente del ensayo mental y para qué sirve",
    "cómo se usa la física cuántica para justificar cualquier cosa",
    "qué le hace a un enfermo la idea de que curarse depende de él",
  ],

  "cerebro-de-pan": [
    "cómo se encadenan cuatro afirmaciones para parecer una sola",
    "a quién le hace daño de verdad el gluten y en qué proporción",
    "qué se sabe de la relación entre el azúcar en sangre y el cerebro",
    "para qué sirve realmente una dieta sin hidratos",
    "qué aparece al comprobar una por una las referencias de un libro",
  ],

  "come-comida-real": [
    "cómo se divide todo lo comestible en solo tres categorías",
    "qué demostró un experimento en el que se comía lo mismo procesado",
    "por qué comes más cantidad cuando la comida viene muy elaborada",
    "qué parte del envase hay que leer y cuál se puede ignorar",
    "qué le reprochan a este discurso otros dietistas",
  ],

  "dilema-omnivoro": [
    "por qué casi todo lo que comes viene de la misma planta",
    "qué decisión política explica cómo se come hoy en medio mundo",
    "qué le pasa a un animal rumiante al que se alimenta con grano",
    "qué garantiza y qué no garantiza una etiqueta ecológica",
    "cómo funciona una granja que cierra sus propios ciclos",
  ],

  "zonas-azules": [
    "cómo se mueve la gente que llega a los cien sin pisar un gimnasio",
    "qué significa dejar de comer cuando aún no estás lleno del todo",
    "qué alimento está en el centro de todas las dietas longevas",
    "qué estructuras sociales tienen esos sitios y aquí no",
    "qué aparece cuando alguien va a comprobar los registros de nacimiento",
  ],

  outlive: [
    "qué cuatro enfermedades causan casi todas las muertes",
    "cómo se fijan objetivos físicos pensando en tus últimos diez años",
    "qué análisis de sangre importa y casi nunca se pide",
    "los cuatro componentes que tiene un programa de ejercicio completo",
    "qué se sabe de verdad sobre nutrición y qué sigue sin saberse",
  ],

  "segundo-sexo": [
    "por qué lo masculino funciona como norma y lo femenino como excepción",
    "en qué se distingue esta situación de cualquier otra opresión",
    "por qué la biología no determina ningún destino",
    "qué significa exactamente que no se nace mujer, se llega a serlo",
    "qué tiene de particular un trabajo que no se ve ni se paga",
  ],

  "discurso-metodo": [
    "qué se gana escribiendo un libro difícil en la lengua de la calle",
    "cuatro reglas para pensar cualquier cosa desde cero",
    "cómo se vive mientras pones en duda todo lo que creías",
    "adónde te lleva dudar absolutamente de todo",
    "qué objeción destroza un sistema entero si nadie sabe contestarla",
  ],

  "apologia-socrates": [
    "de qué acusan realmente a alguien que incomoda a los poderosos",
    "qué haces cuando te declaran el más sabio y no te lo crees",
    "cómo se desmonta a un acusador con sus propias respuestas",
    "por qué alguien elige la condena antes que renunciar a lo suyo",
    "cómo se convierte una derrota en el fundamento de todo lo que viene",
  ],

  tao: [
    "por qué lo útil de una rueda es el agujero que tiene en medio",
    "qué enseña sobre la fuerza el ejemplo del agua",
    "por qué proclamar una virtud suele ser señal de haberla perdido",
    "cómo gobierna el que gobierna sin que se le note",
    "por qué dos traducciones del mismo libro parecen libros distintos",
  ],

  enquiridion: [
    "cómo se separa lo que depende de ti de lo que no depende",
    "por qué no te altera lo que pasa sino lo que piensas de ello",
    "qué cambia decir «lo he devuelto» en lugar de «lo he perdido»",
    "por qué conviene tratar lo que tienes como algo prestado",
    "cómo saber si de verdad estás mejorando en algo",
  ],

  "brevedad-vida": [
    "por qué la vida no es corta sino que la desperdiciamos",
    "por qué cuidamos el dinero muchísimo más que el tiempo",
    "a quiénes llama ocupados, que no son los que más trabajan",
    "qué le pasa a quien vive esperando el momento adecuado",
    "cuál de los tres tiempos es el único que ya es tuyo",
  ],

  "gen-historia": [
    "por qué un descubrimiento enorme puede quedarse treinta años sin leer",
    "dónde empezó de verdad la idea de mejorar a la especie humana",
    "por qué un gen no es un plano sino un interruptor",
    "qué pasa cuando unos científicos deciden parar ellos mismos",
    "cuántos genes tienes y con qué otros seres vivos los compartes",
  ],

  "orden-del-tiempo": [
    "por qué dos relojes a distinta altura marcan cosas distintas",
    "por qué no existe un ahora compartido con nada que esté lejos",
    "por qué las ecuaciones de la física no distinguen pasado de futuro",
    "de dónde sale entonces la sensación de que el tiempo avanza",
    "por qué puedes recordar ayer y no puedes recordar mañana",
  ],

  "revoluciones-cientificas": [
    "en qué consiste realmente el trabajo científico de todos los días",
    "qué se hace con los resultados que no encajan con lo que se cree",
    "por qué una teoría nueva sustituye a la anterior en vez de completarla",
    "cómo los libros de texto borran el rastro de lo que se descartó",
    "cómo se impone finalmente una idea sobre otra, que no es solo por pruebas",
  ],

  "astrofisica-prisa": [
    "qué quedó decidido en los tres primeros minutos de todo",
    "por qué existe materia en lugar de no existir nada",
    "cómo se sabe de qué está hecha una estrella que nadie ha tocado",
    "qué proporción del universo sigue sin poder identificarse",
    "dónde se fabricaron los átomos de los que estás hecho",
  ],

  "doble-helice": [
    "cómo se resuelve un problema enorme sin hacer un solo experimento",
    "por qué un ridículo público en el trabajo puede no ser el final",
    "qué se hace con el dato decisivo que ha conseguido otra persona",
    "cómo un error de detalle tiene a alguien atascado durante semanas",
    "cómo un libro puede dejar mal a alguien durante cincuenta años",
  ],

  "siete-lecciones-fisica": [
    "por qué el espacio no es un escenario donde ocurren las cosas",
    "las tres rarezas que trae consigo la mecánica cuántica",
    "cómo ha cambiado seis veces nuestra imagen del universo",
    "por qué a los físicos no les gusta su teoría más exacta",
    "por qué el pasado se distingue del futuro solo por el calor",
  ],

  "vida-arboles": [
    "cómo se avisan los árboles cuando algo los está mordiendo",
    "qué hay bajo el suelo que conecta un bosque entero",
    "por qué crecer despacio y a la sombra alarga muchísimo la vida",
    "cómo se sincroniza una especie entera para ganarle a quien se la come",
    "dónde está la frontera entre divulgar y contar un cuento",
  ],

  "mundo-demonios": [
    "qué demuestra la parábola del dragón invisible en un garaje",
    "qué herramientas usa alguien para detectar que le están engañando",
    "por qué la caza de brujas no fue cosa de gente ignorante",
    "cómo se puede dudar de los ovnis y creer en la vida extraterrestre",
    "qué previó hace treinta años sobre lo que iba a venir",
  ],

  nudge: [
    "en qué se distingue un empujón de una prohibición",
    "por qué la opción marcada por defecto decide casi todo",
    "cómo se consiguió triplicar el ahorro de unos trabajadores",
    "qué pasa cuando el ejemplo estrella de un libro no se replica",
    "cómo usan las empresas los trámites molestos para que no reclames",
  ],

  "arte-de-amar": [
    "por qué casi todo el mundo trabaja sobre el problema equivocado",
    "qué diferencia hay entre querer a alguien y necesitarlo",
    "los cuatro elementos de los que está hecho, y ninguno es una emoción",
    "por qué quererse a uno mismo es la condición previa de lo demás",
    "cómo el mercado se metió también en las relaciones personales",
  ],

  educada: [
    "qué le pasa a un niño que crece sin pisar una escuela",
    "cómo se sobrevive en una casa donde ir al médico está prohibido",
    "cómo se duda de la propia memoria cuando nadie te cree",
    "qué cuesta empezar a estudiar desde cero a los diecisiete años",
    "qué precio se paga por educarse cuando eso te aleja de los tuyos",
  ],

  "historia-espana": [
    "por qué le fue tan bien a un territorio al ser conquistado",
    "cómo un imperio puede tener un siglo de esplendor y estar en quiebra",
    "por qué una guerra de ocho siglos casi nunca fue una guerra",
    "cómo se cuenta la historia de un país sin dorar nada",
    "por qué culpar del atraso al carácter nacional no explica nada",
  ],

  "pilares-tierra": [
    "por qué una sociedad hambrienta dedica un siglo entero a un edificio",
    "de dónde sale el dinero para pagar una obra que no verás terminada",
    "cómo un cambio técnico permite construir el doble de alto",
    "cómo funcionaba el poder cuando la Iglesia era también un banco",
    "por qué se derrumbaban tantas catedrales antes de acabarse",
  ],

  "homenaje-cataluna": [
    "cómo es de verdad una guerra que casi nunca aparece en las películas",
    "qué pasa cuando los que luchan en el mismo bando se disparan entre sí",
    "qué se siente al leer en la prensa lo contrario de lo visto",
    "cómo se fabrica una versión oficial mientras el hecho todavía pasa",
    "por qué esa experiencia acabó produciendo la novela más famosa sobre el poder",
  ],

  "capital-siglo-xxi": [
    "por qué las encuestas de ingresos no ven nunca a los muy ricos",
    "qué pasa cuando el dinero renta más de lo que crece la economía",
    "qué produjo realmente las décadas más igualitarias del siglo pasado",
    "cuánto pesa hoy heredar frente a tener un sueldo muy bueno",
    "cómo se comprueba si los datos de un libro célebre aguantan",
  ],

  "origenes-totalitarismo": [
    "en qué se distingue el odio moderno a un grupo del odio religioso",
    "por qué se odia más a quien tiene dinero sin tener ya ninguna función",
    "dónde se ensayó gobernar por decreto antes de hacerlo en casa",
    "qué demuestra sobre los derechos humanos la gente que se queda sin país",
    "por qué el terror aumenta justo cuando ya no queda oposición",
  ],

  "guerra-y-paz": [
    "cómo se cuenta una batalla desde dentro, sin vista de pájaro",
    "por qué ningún general dirige realmente lo que pasa en un campo",
    "qué le ocurre a alguien que se cree destinado a algo grande",
    "por qué la historia no la hacen los grandes hombres",
    "qué encuentra alguien que lo ha perdido todo y sigue vivo",
  ],

  "guerra-arte": [
    "qué se gana poniéndole nombre a lo que te impide empezar",
    "por qué lo que más miedo te da señala lo que tienes que hacer",
    "los disfraces que adopta la pereza y ninguno parece pereza",
    "la diferencia exacta entre un aficionado y un profesional",
    "cómo separar un buen consejo de la mitología que lo rodea",
  ],

  "acto-creativo": [
    "qué cambia si te entiendes como un recipiente y no como una fuente",
    "las cuatro fases de un trabajo creativo y por qué no se mezclan",
    "por qué el único público al que puedes conocer eres tú mismo",
    "qué diferencia hay entre tener técnica y tener un punto de vista",
    "de qué te está avisando la duda cuando aparece",
  ],

  "cartas-joven-poeta": [
    "una prueba para saber si de verdad tienes que dedicarte a esto",
    "qué hacer cuando tu propia vida te parece mal material",
    "qué significa vivir las preguntas en vez de exigirles respuesta",
    "por qué la tristeza no es un daño sino un cambio en marcha",
    "en qué consiste querer a alguien sin invadirlo",
  ],

  "mientras-escribo": [
    "qué se hace con lo que tiras a la papelera y alguien rescata",
    "por qué escribir es una forma de telepatía entre dos desconocidos",
    "reglas concretas sobre adverbios, diálogos y voz pasiva",
    "por qué se puede escribir una novela entera sin planificarla",
    "cómo se vuelve al trabajo después de que casi te maten",
  ],

  "modos-ver": [
    "por qué no existe ninguna manera inocente de mirar una imagen",
    "qué le hizo la fotografía al significado de los cuadros antiguos",
    "en qué se diferencia estar desnuda de ser un desnudo",
    "qué relación hay entre la pintura al óleo y la propiedad",
    "por qué la publicidad necesita que sientas que te falta algo",
  ],

  "aliento-aire": [
    "qué cambia cuando el médico se convierte en el paciente",
    "cómo es una carrera de más de cien horas semanales durante años",
    "por qué un buen médico se niega a darte cifras de supervivencia",
    "cómo se decide en qué gastar el tiempo cuando sabes cuánto queda",
    "qué se le pide a la medicina que la medicina no puede dar",
  ],

  "ser-mortal": [
    "qué le pasa realmente a un cuerpo mientras envejece",
    "por qué las residencias están pensadas para la seguridad y no para vivir",
    "qué cambia en un geriátrico cuando entran animales y plantas",
    "por qué quien recibe cuidados paliativos a veces vive más",
    "cuatro preguntas que cambian por completo una decisión médica",
  ],

  "digestion-cuestion": [
    "por qué la postura cambia la mecánica de ir al baño",
    "cómo negocian entre sí dos músculos que no controlas igual",
    "en qué dirección va la conversación entre el intestino y el cerebro",
    "qué le hacen los antibióticos a las bacterias que te acompañan",
    "qué tratamiento de este campo funciona de verdad y cuáles no",
  ],

  antifragil: [
    "qué distingue lo frágil, lo robusto y lo que mejora con los golpes",
    "por qué una dosis pequeña de daño fortalece y una grande destruye",
    "cómo se fabrica una catástrofe intentando evitar los sobresaltos",
    "una regla para decidir cuándo hay que intervenir y cuándo no",
    "cómo se reparte el riesgo entre lo muy seguro y lo muy arriesgado",
  ],

  factfulness: [
    "por qué dividir el mundo en países ricos y pobres ya no sirve",
    "cuatro niveles de ingreso que explican mejor cómo vive la gente",
    "cómo pueden ser ciertas a la vez las palabras «mal» y «mejorando»",
    "por qué casi ninguna tendencia real es una línea recta",
    "qué cuesta decidir con prisa cuando los datos aún no están",
  ],

  respira: [
    "por qué los cráneos antiguos no tienen los dientes torcidos",
    "qué hace la nariz que la boca no puede hacer",
    "por qué respirar más aire lleva menos oxígeno a tus tejidos",
    "cuál es el ritmo de respiración que calma y por qué funciona",
    "qué partes de un libro de éxito no tienen ninguna evidencia detrás",
  ],

  "inversor-inteligente": [
    "qué separa exactamente invertir de especular",
    "cómo tratar a un mercado que un día te ofrece caro y otro barato",
    "en qué consiste comprar algo por menos de lo que vale",
    "qué hacer si no quieres dedicarle tiempo a esto",
    "por qué hasta el mejor inversor gana más por suerte de lo que admite",
  ],

  "hombre-rico-babilonia": [
    "por qué hay una regla que va antes que todas las demás",
    "por qué los gastos necesarios crecen hasta igualar lo que ganas",
    "qué diferencia hay entre ahorrar y llegar a ser rico",
    "cómo se reparten los ingresos para salir de deudas",
    "cuál de estos consejos clásicos ha hecho perder más dinero",
  ],

  "casa-espiritus": [
    "por qué una familia entera anota su vida en unos cuadernos",
    "cómo se cuenta un país entero a través de cuatro generaciones",
    "qué le pasa a una casa cuando la política entra por la puerta",
    "cómo vuelve, treinta años después, la violencia que alguien cometió",
    "por qué elegir no vengarse es la decisión más difícil del libro",
  ],

  rayuela: [
    "cómo funciona un libro que se puede leer en dos órdenes distintos",
    "qué se consigue inventándose un idioma desde cero",
    "para qué sirve meter dentro de una novela a alguien que la critica",
    "por qué un final que no termina puede ser el mejor final",
    "qué le pide un autor a un lector que no quiere ser cómplice",
  ],

  "bernarda-alba": [
    "cómo se impone el silencio en una casa desde la primera frase",
    "por qué no aparece ni un solo hombre en toda la obra",
    "qué papel tiene el dinero de una herencia en un conflicto familiar",
    "quién vigila realmente a quién cuando todos se vigilan",
    "por qué guardar las apariencias puede costar una vida",
  ],

  ficciones: [
    "por qué reseñar un libro inventado en lugar de escribirlo",
    "qué demuestra un texto idéntico a otro escrito tres siglos antes",
    "cómo sería una biblioteca que contuviera todos los libros posibles",
    "dónde aparecen por primera vez los universos paralelos",
    "por qué recordarlo absolutamente todo impediría pensar",
  ],

  "sobre-tirania": [
    "qué es adelantarse a obedecer antes de que te ordenen nada",
    "con qué porcentaje de votos puede empezar a caer una democracia",
    "qué papel tienen los profesionales con título en un régimen nuevo",
    "cómo se estropea un idioma antes de que se estropee una ley",
    "qué se puede desmontar en veinticuatro horas aprovechando un atentado",
  ],

  mandela: [
    "en qué consiste un sistema racista escrito en forma de leyes",
    "por qué alguien que defendía la no violencia deja de defenderla",
    "qué se dice en un juicio donde te juegas la pena de muerte",
    "cómo se pasan veintisiete años en una cárcel sin volverse loco",
    "para qué sirve aprender el idioma de quien te tiene encerrado",
  ],

  "eichmann-jerusalen": [
    "qué significa exactamente eso de la banalidad del mal",
    "qué revela alguien que solo sabe hablar con frases hechas",
    "cómo se justifica una persona que dice haber cumplido órdenes",
    "por qué unas pocas páginas pueden costarte todas tus amistades",
    "en qué se equivocó ese libro y qué sigue en pie de él",
  ],

  malala: [
    "cómo una emisora de radio pirata puede cambiar un valle entero",
    "qué se juega una niña que escribe un diario bajo un régimen armado",
    "qué le pasa a una población cuando entra el ejército a defenderla",
    "cómo se sigue adelante después de que te disparen en la cabeza",
    "por qué un símbolo mundial puede estar prohibido en su propio país",
  ],

  "chico-pijama": [
    "por qué una historia funciona solo si el que la cuenta no entiende nada",
    "qué se pierde al contar un genocidio como una fábula",
    "qué le pasa a un niño que aprende historia con una novela inexacta",
    "por qué los detalles falsos importan cuando el hecho fue real",
    "cómo se lee una historia inventada sin confundirla con lo que pasó",
  ],

  "historia-arte": [
    "para qué servían de verdad las pinturas de las cuevas",
    "por qué se dibujó igual durante tres mil años sin cambiar nada",
    "cuándo y dónde se inventó la manera de dar profundidad a un cuadro",
    "qué le hizo la fotografía al oficio de pintar",
    "de qué tres insatisfacciones sale todo el arte moderno",
  ],

  "madame-bovary": [
    "de dónde le viene la desgracia a quien lo tenía casi todo",
    "qué le hace a una vida entera una sola noche que fue distinta",
    "cómo se cuenta una seducción sin contar nada explícito",
    "por qué acaba en los tribunales un libro que no dice nada obsceno",
    "quién arruina de verdad a alguien y quién acaba ganando dinero",
  ],

  "ana-karenina": [
    "por qué hay dos historias opuestas dentro de un mismo libro",
    "qué perdía una mujer al dejar a su marido cuando la ley era otra",
    "por qué el marido engañado no está escrito como el villano",
    "cómo una escena anuncia el final doscientas páginas antes",
    "por qué la novela sigue mucho después de que muera su protagonista",
  ],

  sisifo: [
    "dónde está exactamente lo absurdo, que no está en el mundo ni en ti",
    "por qué inventarse un sentido es una forma de rendirse",
    "las tres cosas que se siguen de aceptar que nada tiene sentido",
    "por qué el castigo peor es repetir algo que no sirve para nada",
    "cómo se puede ser feliz sabiendo todo eso",
  ],

  extranjero: [
    "por qué el tiempo verbal de una novela decide cómo la lees",
    "por qué alguien que no llora en un entierro no es un hombre frío",
    "qué detalle impide leer un crimen como un accidente",
    "por qué a veces te juzgan por tu carácter y no por tus actos",
    "qué significa que la víctima de una novela no tenga nombre",
  ],

  "casi-todo": [
    "cómo se pesa un planeta entero desde una cabaña",
    "cómo averiguar la edad de la Tierra acabó quitando el plomo de la gasolina",
    "por qué un volcán enorme puede tardar un siglo en aparecer en los mapas",
    "cómo se demuestra algo que ocurrió hace sesenta y seis millones de años",
    "con cuántos huesos se ha reconstruido toda la historia humana",
  ],

  "mundo-sofia": [
    "con qué imagen se explica en una frase qué es un filósofo",
    "quién acertó lo de los átomos sin tener con qué mirar",
    "qué demuestra exactamente la alegoría de la caverna",
    "cómo se puede dar la razón a dos bandos enfrentados a la vez",
    "qué pasa cuando un personaje descubre que está dentro de un libro",
  ],

  "cuerpo-cuenta": [
    "por qué revivir algo no es lo mismo que recordarlo",
    "qué parte del cerebro se apaga cuando alguien revive un trauma",
    "por qué contar lo que te pasó a veces te deja peor",
    "qué descubrió por accidente una clínica que trataba la obesidad",
    "por qué a un niño maltratado no le sirve ningún diagnóstico",
  ],

  freakonomics: [
    "por qué una multa puede empeorar justo lo que quiere castigar",
    "cómo se detecta a un tramposo sin llegar a verlo hacer trampa",
    "cuánto gana de verdad quien vende droga en la calle",
    "cómo se busca la causa de algo cuando todos dan la misma explicación",
    "qué influye realmente en las notas de un niño y qué no",
  ],

  "los-miserables": [
    "por qué un cambio de vida no ocurre en la escena que todos recuerdan",
    "cómo se llega paso a paso de un despido a acabar en la calle",
    "por qué el perseguidor de la historia no está escrito como un villano",
    "por qué una revuelta puede ser heroica y a la vez inútil",
    "qué hacen cien páginas sobre alcantarillas dentro de una novela",
  ],

  "origen-especies": [
    "por qué se explica una idea enorme empezando por las palomas",
    "qué cálculo demuestra que no puede sobrevivir todo lo que nace",
    "por qué la selección natural no elige a nadie ni busca nada",
    "cómo se contesta a la mejor objeción contra tu propia teoría",
    "qué le faltaba a la teoría el mismo día en que se publicó",
  ],

  zaratustra: [
    "por qué «Dios ha muerto» es un diagnóstico y no un ataque",
    "las tres transformaciones por las que pasa quien crea algo propio",
    "qué es el último hombre y por qué esa vida gusta tanto",
    "por qué la idea de repetirlo todo es una prueba y no una teoría",
    "cómo se convierte la obra de un muerto en lo contrario",
  ],

  "si-esto-hombre": [
    "cómo un sistema convierte a una persona en un número",
    "por qué sobrevivir dependía de aprender reglas que nadie explicaba",
    "qué queda de la dignidad cuando se quitan todas las condiciones",
    "por qué el que sobrevive carga con la culpa de haberlo hecho",
    "por qué escribir sin rabia hace un testimonio más demoledor",
  ],

  "guardian-centeno": [
    "qué esconde alguien que se pasa un libro entero hablando de otra cosa",
    "por qué se repite la misma pregunta absurda a desconocidos",
    "qué le dice el único adulto que se molesta en escucharle",
    "por qué un título puede salir de un verso mal entendido",
    "qué significa dejar que alguien a quien quieres se caiga",
  ],

  "pedro-paramo": [
    "en qué momento un lector descubre dónde está de verdad",
    "cómo se monta un libro con sesenta y ocho trozos desordenados",
    "cómo se hace alguien dueño de un valle entero sin comprarlo",
    "qué es lo único que no se puede comprar con poder",
    "cómo se mata un pueblo entero sin disparar un tiro",
  ],

  "nombre-rosa": [
    "por qué una novela histórica se disfraza de novela policiaca",
    "qué se protege cuando se prohíbe entrar en una biblioteca",
    "por qué a un poder le da miedo que la gente se ría",
    "cómo se investiga un crimen con la lógica de la época",
    "por qué un título puede no significar nada a propósito",
  ],

  "viejo-mar": [
    "en qué consiste contar una historia dejando fuera casi todo",
    "por qué dos personas que no tienen nada se inventan una cena",
    "qué se hace cuando se te acaban las herramientas a mitad",
    "qué queda de una victoria cuando llegas a casa",
    "qué contesta un autor cuando le explican los símbolos de su libro",
  ],

  montecristo: [
    "qué gana cada uno de los que denuncian a un inocente",
    "qué se aprende en una celda de alguien que lo sabe todo",
    "por qué no matar a tu enemigo puede ser peor para él",
    "cómo se arruina a alguien usando exactamente su propio vicio",
    "en qué momento una venganza justa se te va de las manos",
  ],

  "moby-dick": [
    "qué barco hundió de verdad una ballena y qué pasó con sus hombres",
    "cómo se ata a un grupo entero a la obsesión de una sola persona",
    "por qué una novela se para en seco a explicar anatomía",
    "por qué el color blanco puede dar más miedo que la oscuridad",
    "cómo termina una obsesión, que no es como suele contarse",
  ],

  dracula: [
    "cómo se descubre que algo va mal por un detalle doméstico",
    "por qué un enemigo con reglas fijas da más miedo que uno sin ellas",
    "cuánta tecnología moderna hay dentro de una novela de terror antigua",
    "cómo se cuenta una historia usando solo cartas y diarios",
    "de dónde salió el nombre, que no es de quien tú crees",
  ],

  "dorian-gray": [
    "qué frase de un desconocido puede cambiarte la vida entera",
    "por qué el castigo empieza el día que pides no envejecer",
    "qué hace un libro con los dieciocho años que decide no contar",
    "qué le pasa a quien creó algo y ve en qué se ha convertido",
    "por qué un prólogo famoso se escribe después del escándalo",
  ],

  frankenstein: [
    "lo que realmente cuesta una ambición sin ningún freno",
    "por qué el pecado no fue crear algo sino abandonarlo después",
    "cómo el aislamiento transforma la tristeza en rabia",
    "sobre la responsabilidad de un creador respecto a lo que crea",
    "por qué saber cuándo parar es una forma de sabiduría",
  ],

  "senor-moscas": [
    "cuánto tarda en romperse un orden que parecía natural",
    "por qué el miedo compartido une más que cualquier acuerdo",
    "cómo se fabrica un monstruo para no mirar de dónde viene el peligro",
    "por qué el que tiene razón es el primero al que hacen callar",
    "qué dicen los experimentos reales que contradicen esta novela",
  ],

  "gran-gatsby": [
    "por qué no se escapa del propio pasado por mucho que uno se reinvente",
    "cómo la riqueza genera una indiferencia que destruye vidas",
    "el peligro de construir tu identidad sobre un solo sueño inalcanzable",
    "por qué el dinero heredado y el ganado nunca se mezclan",
    "cómo se corrompe una promesa colectiva cuando solo queda el dinero",
  ],

  metamorfosis: [
    "el coste de ser el que sostiene económicamente a una familia",
    "cómo la culpa va corroyendo la identidad de una persona",
    "qué le pasa a alguien cuando deja de ser útil para los suyos",
    "por qué la familia también se transforma, y nadie lo cuenta",
    "cómo una situación absurda contada en serio da más miedo",
  ],

  "crimen-castigo": [
    "por qué alguien se convence de que las reglas no van con él",
    "por qué una teoría que parece sólida se rompe al primer contacto",
    "en qué consiste el castigo de verdad, que no es la cárcel",
    "cómo se interroga a alguien sin acusarlo de nada",
    "por qué se lo contamos antes a un desconocido que a los nuestros",
  ],

  fahrenheit: [
    "por qué la gente dejó de leer antes de que nadie prohibiera nada",
    "cómo el entretenimiento continuo hace innecesaria la censura",
    "por qué el que quema libros puede saber muy bien lo que hay dentro",
    "qué se pierde exactamente cuando se pierde un libro",
    "cómo se conserva algo cuando no se puede conservar el objeto",
  ],

  "mundo-feliz": [
    "por qué una dictadura basada en el placer es más difícil de derribar",
    "cómo se fabrica el consentimiento repitiendo frases mientras duermes",
    "qué le pasa a una sociedad que ha eliminado la incomodidad",
    "por qué el que quiere sufrir es el único disidente posible",
    "en qué se diferencia esta pesadilla de la de un Estado policial",
  ],

  "republica-platon": [
    "si seguirías siendo honrado sabiendo que nadie va a enterarse",
    "por qué se describe una ciudad entera para hablar de una persona",
    "las tres partes en las que se divide lo que quieres",
    "qué demuestra de verdad la alegoría de la caverna",
    "en qué orden se estropea un régimen hasta acabar en tiranía",
  ],

  odisea: [
    "por qué las cosas que te dan miedo señalan lo que valoras",
    "por qué la paciencia no es pasividad sino una habilidad",
    "por qué rechazar la inmortalidad puede ser la decisión sensata",
    "dónde ponía los monstruos la gente que aún no tenía mapas",
    "cómo se reconoce a alguien después de veinte años",
  ],

  "cerebro-buda": [
    "por qué lo malo se te queda pegado y lo bueno resbala",
    "cuál de los dos dolores te lo estás causando tú",
    "cómo se sujeta una experiencia buena para que deje huella",
    "qué palanca física apaga la alarma del cuerpo en un minuto",
    "qué parte de la neurociencia de un libro así ya no se sostiene",
  ],

  "gen-egoista": [
    "por qué tu cuerpo es solo el vehículo de algo más pequeño",
    "por qué morirías por dos hermanos y no por uno",
    "en qué condiciones compensa ayudar a un completo desconocido",
    "por qué la naturaleza produce equilibrios y nunca lo óptimo",
    "de dónde salió la palabra que hoy usa todo el mundo en internet",
  ],

  "rebelion-granja": [
    "cómo se toma el poder mientras los demás siguen discutiendo",
    "para qué sirve un enemigo que ya no está en ninguna parte",
    "cómo se reescriben las reglas sin que nadie se dé cuenta",
    "qué le pasa siempre al que más trabaja de todos",
    "por qué una revolución acaba pareciéndose a lo que derribó",
  ],

  "semana-4-horas": [
    "cómo escribir tus miedos para dejar de aplazar una decisión",
    "por qué una tarea se hincha hasta llenar el plazo que le des",
    "cómo comprobar si algo se vende antes de fabricarlo",
    "cómo se negocia trabajar desde fuera de la oficina",
    "qué partes de un libro de hace quince años ya no funcionan",
  ],

  "steve-jobs": [
    "cómo se convence a un equipo de hacer algo que cree imposible",
    "por qué te pueden echar de la empresa que fundaste tú",
    "cómo se salva una empresa cancelando casi todos sus productos",
    "qué significa simplificar algo hasta que ya no se pueda más",
    "qué cuesta tratar como a un genio a alguien que también se equivoca",
  ],

  hobbit: [
    "por qué una aventura empieza siempre con un contrato y un empujón",
    "cómo se le habla a alguien mucho más poderoso para salir vivo",
    "por qué el que resuelve el problema no suele ser el protagonista",
    "por qué un tesoro conseguido puede envenenar a quien lo consigue",
    "qué cambia en una historia cuando el autor la reescribe después",
  ],

  "sombra-viento": [
    "qué se siente al ser responsable de que un libro no desaparezca",
    "por qué una vida puede repetir sin querer la de otro",
    "cómo se cuenta una posguerra sin nombrar la política",
    "por qué el personaje secundario acaba llevándose la novela",
    "cómo está montada una historia que engancha desde la primera página",
  ],

  alquimista: [
    "cómo las pasiones que tienes hoy moldean lo que serás",
    "por qué el miedo pesa más que la dificultad real",
    "por qué el que aplaza su sueño para más adelante ya no va",
    "cómo las dificultades acaban aclarando lo que de verdad querías",
    "qué esconde la promesa de que el universo conspira a tu favor",
  ],

  "orgullo-prejuicio": [
    "por qué una familia sin hijos varones podía quedarse sin casa",
    "cuánto dinero hacía falta para ser considerado un buen partido",
    "por qué alguien se casa con quien no soporta y no es tonta",
    "qué hace falta para cambiar de opinión sobre una persona",
    "quién paga en realidad los finales felices",
  ],

  "matar-ruisenor": [
    "por qué un jurado condena con todas las pruebas en contra",
    "por qué la que acusa en falso también es una víctima",
    "qué significa exactamente matar a alguien inofensivo",
    "por qué un final justo puede consistir en tapar un delito",
    "qué pasa cuando aparece un borrador que desmonta a tu héroe",
  ],

  quijote: [
    "qué le pasa a alguien que decide vivir según lo que ha leído",
    "por qué el criado sensato acaba contagiándose de su señor",
    "cómo cambia una novela cuando sus personajes saben que existe",
    "por qué la segunda parte funciona al revés que la primera",
    "por qué el final es más triste de lo que casi nadie recuerda",
  ],

  "mundo-ayer": [
    "cómo era viajar por Europa cuando no existían los pasaportes",
    "qué escondía debajo la moral rígida de una ciudad elegante",
    "cómo se le enseña a un país entero a odiar a otro",
    "qué le enseña una inflación descontrolada a toda una generación",
    "por qué casi nadie se marcha a tiempo cuando aún puede",
  ],

  "breve-historia-tiempo": [
    "por qué un universo en expansión tuvo que tener un principio",
    "por qué uno de dos gemelos envejece menos que el otro",
    "por qué los agujeros negros se evaporan poco a poco",
    "qué prohíbe de verdad el principio de incertidumbre",
    "por qué el desorden marca hacia dónde avanza el tiempo",
  ],

  principe: [
    "por qué describir cómo se gobierna no es aprobarlo",
    "por qué es más seguro que te teman a que te quieran",
    "por qué el daño se hace de golpe y el favor a plazos",
    "cuándo conviene la fuerza y cuándo conviene el disimulo",
    "qué pide el último capítulo, que casi nadie llega a leer",
  ],

  "arte-guerra": [
    "los cinco factores que se calculan antes de empezar nada",
    "por qué atacar de frente es siempre el peor recurso",
    "las reglas concretas del engaño, una por una",
    "por qué la información sale más barata que el conflicto",
    "cuándo hay que desobedecer a quien te ha dado la orden",
  ],

  "cien-anos": [
    "por qué una familia repite los mismos errores durante un siglo",
    "en qué consiste de verdad contar lo increíble con toda naturalidad",
    "qué le pasa a un pueblo aislado cuando llega una empresa de fuera",
    "cómo se borra oficialmente una matanza que ocurrió de verdad",
    "por qué la soledad puede heredarse igual que el color de los ojos",
  ],

  "infinito-junco": [
    "de qué planta dependía toda la memoria escrita del mundo",
    "por qué una biblioteca no desaparece en una noche sino poco a poco",
    "por qué coser unas hojas por un lado cambió la historia",
    "quién copiaba a mano lo que hoy podemos leer",
    "por qué el libro es un invento que no ha necesitado mejoras",
  ],

  "cisne-negro": [
    "por qué mil días de datos no dicen nada sobre el siguiente",
    "en qué se diferencia un mundo donde todo es parecido de otro donde no",
    "por qué el pasado siempre parece que se podía haber previsto",
    "en qué campos funcionan los expertos y en cuáles no",
    "cómo colocarse para que lo imprevisto no te arruine",
  ],

  spqr: [
    "por qué un pueblo elige un crimen entre hermanos como origen",
    "por qué la historia antigua de un imperio se escribió mucho después",
    "por qué Roma daba la ciudadanía a los pueblos que conquistaba",
    "por qué un sistema político tarda un siglo en caerse del todo",
    "por qué conviene desconfiar de las historias de gobernantes locos",
  ],

  "por-que-dormimos": [
    "los dos sistemas que deciden a qué hora te entra el sueño",
    "por qué la cafeína no da energía, solo tapa el cansancio",
    "para qué sirve el sueño profundo y para qué el de los sueños",
    "por qué diez noches de seis horas te dejan como sin dormir",
    "por qué el alcohol seda pero no hace dormir",
  ],

  influencia: [
    "por qué un favor que no pediste te deja en deuda",
    "por qué decir que sí a algo pequeño te lleva a aceptar algo grande",
    "a quién señalar exactamente si necesitas ayuda entre mucha gente",
    "por qué obedecemos a un uniforme antes que a un argumento",
    "por qué lo que se está acabando nos parece de golpe mejor",
  ],

  principito: [
    "por qué lo que hace única a una rosa es el tiempo dedicado",
    "cómo se ve el mundo adulto desde fuera y qué tiene de ridículo",
    "qué significa domesticar a alguien y qué obligaciones crea",
    "por qué lo esencial es invisible y qué se hace con eso",
    "por qué el final de este cuento es una muerte",
  ],

  meditaciones: [
    "cómo separar lo que está en tu mano de lo que no lo está",
    "por qué casi todo se encoge si lo describes sin adornos",
    "por qué morir joven y morir viejo cuestan exactamente lo mismo",
    "qué conviene decirse al levantarse antes de tratar con gente",
    "por qué un obstáculo es material de trabajo y no una interrupción",
  ],

  cosmos: [
    "cómo se midió el tamaño de la Tierra con dos palos y una sombra",
    "por qué el conocimiento puede pararse mil quinientos años",
    "dónde cabe la historia humana si el universo fuera un año",
    "en qué estrella se fabricó el calcio de tus huesos",
    "qué le pasó a un planeta vecino y por qué debería importarnos",
  ],

  "1984": [
    "qué es sostener dos ideas contrarias a la vez y creerse las dos",
    "por qué un régimen quita palabras del diccionario",
    "por qué a un poder le estorba el amor más que la política",
    "por qué la tortura busca creencia y no información",
    "qué cambia en una novela cuando su apéndice está escrito en pasado",
  ],

  flow: [
    "por qué tu atención es un presupuesto limitado que gastas mal",
    "dónde está la franja exacta en la que se te pasa el tiempo volando",
    "por qué se disfruta más trabajando que tirado en el sofá",
    "en qué se diferencian el placer y el disfrute",
    "por qué el tiempo libre sin plan deja peor que el ocupado",
  ],

  "busca-sentido": [
    "qué queda de una persona cuando le quitan absolutamente todo",
    "por qué quien encuentra un para qué aguanta casi cualquier cómo",
    "cómo se usa el humor como arma en un sitio sin ninguna salida",
    "en qué consiste una terapia que busca sentido en vez de causas",
    "por qué esa idea se vuelve cruel cuando se convierte en lema de éxito",
  ],

  mindset: [
    "la diferencia entre creer que vales lo que vales y creer que puedes crecer",
    "por qué elogiar la inteligencia de un niño le hace daño",
    "qué le pasa a tu atención en el momento exacto en que fallas",
    "por qué una empresa se hunde por fichar solo a los más brillantes",
    "cómo se reconoce la voz que te dice que no lo intentes",
  ],

  "poder-ahora": [
    "por qué el que escucha tus pensamientos no es tu pensamiento",
    "por qué una discusión absurda deja después una satisfacción rara",
    "por qué nadie ha sufrido nunca por lo que pasa en este momento",
    "las tres únicas salidas ante algo que no te gusta",
    "por qué esperar que otra persona te complete rompe la relación",
  ],

  "monje-ferrari": [
    "cómo se cuida la cabeza igual que se cuida un jardín",
    "cómo se usa el pensamiento contrario para desmontar una obsesión",
    "qué es mejorar un uno por ciento cada día y cómo se aplica",
    "por qué estar ocupado no tiene nada que ver con ser productivo",
    "por qué lo que dejas atrás casi nunca era el problema",
  ],

  "sutil-arte": [
    "por qué esforzarte en ser positivo te recuerda que no lo estás",
    "por qué la pregunta buena no es qué quieres sino qué dolor aguantas",
    "en qué se diferencian la culpa y la responsabilidad",
    "por qué creerte especial te impide mejorar en nada",
    "por qué tener todas las opciones abiertas empobrece tu vida",
  ],

  "cuatro-acuerdos": [
    "por qué una frase de tres segundos puede durarte veinte años",
    "por qué los elogios tampoco hablan de ti",
    "de dónde salen casi todas las peleas de pareja",
    "por qué tu mejor esfuerzo es distinto cada día",
    "por qué perdonar es sobre todo un asunto de interés propio",
  ],

  ikigai: [
    "qué significa esa palabra japonesa de verdad, que no es lo que se dice",
    "por qué el diagrama de los cuatro círculos no es japonés",
    "qué se gana dejando de comer cuando aún no estás lleno",
    "qué es un grupo de apoyo que dura toda la vida y cómo funciona",
    "qué dicen los estudios sobre tener un propósito y vivir más",
  ],

  "pensar-rapido": [
    "en qué se diferencian las dos maneras que tienes de pensar",
    "por qué una historia coherente te parece automáticamente más probable",
    "cómo un número dicho al azar te cambia el precio que aceptas",
    "por qué perder cien duele más que ganar cien",
    "por qué de una experiencia solo recuerdas el pico y el final",
  ],

  "inteligencia-emocional": [
    "por qué reaccionas antes de saber a qué estás reaccionando",
    "qué es un secuestro emocional y cómo se corta en el momento",
    "cinco capacidades que se construyen una encima de otra",
    "qué predice sobre un adulto la paciencia que tuvo de niño",
    "cuatro maneras de discutir que acaban con cualquier pareja",
  ],

  "mente-millonaria": [
    "por qué el dinero que llega de golpe casi nunca se queda",
    "las tres vías por las que heredaste tu manera de ver el dinero",
    "la diferencia entre jugar a ganar y jugar a no perder",
    "cómo repartir lo que entra en seis partes con sus porcentajes",
    "por qué cobrar por horas te pone un techo que se puede calcular",
  ],

  "piensa-hazte-rico": [
    "por qué un deseo sin una cifra y una fecha no sirve de nada",
    "seis pasos para convertir una idea suelta en un plan",
    "por qué no hace falta saberlo todo si sabes a quién preguntar",
    "qué es un grupo de gente que piensa contigo y para qué sirve",
    "cómo distinguir una derrota pasajera de un fracaso de verdad",
  ],

  "amigos-influir": [
    "por qué la crítica solo consigue que el otro se defienda",
    "en qué se diferencian el aprecio sincero y la adulación",
    "por qué en el anzuelo se pone lo que le gusta al pez",
    "cómo se admite un error antes de que te lo echen en cara",
    "por qué cambiar «pero» por «y» cambia una conversación entera",
  ],

  "padre-rico": [
    "la diferencia entre lo que te da dinero y lo que te lo quita",
    "por qué la casa en la que vives no es una inversión",
    "por qué cobrar más solo hace la rueda más grande",
    "qué significa pagarte a ti mismo antes que a nadie",
    "los cinco miedos que frenan a quien nunca acaba invirtiendo",
  ],

  "psicologia-dinero": [
    "por qué cada uno decide con el dinero según la época que le tocó",
    "cómo separar lo que fue mérito propio de lo que fue suerte",
    "por qué casi toda la fortuna de alguien llega en su última etapa",
    "por qué casi todo el resultado se juega en un puñado de días",
    "en qué se diferencian ser rico y tener riqueza",
  ],

  "poder-habitos": [
    "las tres piezas de las que está hecho cualquier hábito",
    "por qué un hábito no se borra nunca y solo se puede sustituir",
    "por qué un solo hábito arrastra detrás a todos los demás",
    "cómo se entrena el autocontrol sin gastarlo cada vez",
    "cómo una empresa sabe que estás embarazada antes que tu familia",
  ],

  "siete-habitos": [
    "por qué siempre eliges tu respuesta, aunque no lo parezca",
    "cómo distinguir lo que te preocupa de lo que puedes cambiar",
    "por qué lo urgente se come siempre lo importante",
    "cómo funciona una cuenta de confianza y cómo se ingresa en ella",
    "por qué escuchamos para contestar y no para entender",
  ],

  sapiens: [
    "por qué ganó una especie que no era la más fuerte ni lista",
    "cómo se coopera en masa creyéndose todos la misma ficción",
    "por qué la agricultura empeoró la vida de casi todo el mundo",
    "cómo el dinero, los imperios y las religiones unificaron el planeta",
    "por qué ser más poderosos no nos ha hecho más felices",
  ],

  "habitos-atomicos": [
    "por qué los resultados llegan mucho después que los hábitos",
    "por qué el sistema importa más que la meta que te pongas",
    "cómo un hábito acaba cambiando quién crees que eres",
    "cómo colgar un hábito nuevo de otro que ya tienes",
    "la regla de los dos minutos para dejar de aplazar algo",
  ],

  "club-5-manana": [
    "cómo repartir la primera hora del día en tres bloques",
    "por qué madrugar se decide la noche anterior y no por la mañana",
    "cuánto tarda de verdad en instalarse un hábito y cuándo se abandona",
    "por qué conviene trabajar noventa minutos y descansar de verdad",
    "por qué el descanso es parte del rendimiento y no su premio",
  ],

  "trabajo-profundo": [
    "por qué la atención no vuelve entera después de cada interrupción",
    "cuatro maneras de meter concentración en una vida normal",
    "cómo montar un ritual que te ahorre decisiones en vez de voluntad",
    "por qué hay que descansar de la distracción y no de la concentración",
    "cómo decidir qué aplicaciones se quedan en tu móvil y cuáles no",
  ],

  "armas-germenes": [
    "por qué unos pueblos llegaron a otros y no ocurrió al revés",
    "cuántos animales grandes se han conseguido domesticar en la historia",
    "qué tiene que ver la forma de un continente con lo que se cultiva",
    "por qué una enfermedad mató más que todos los conquistadores juntos",
    "de dónde salieron la escritura, el Estado y los ejércitos",
  ],

  "diario-ana-frank": [
    "cómo se sobrevive dos años escondido en unos pocos metros cuadrados",
    "qué le hace a una adolescente crecer sin poder salir a la calle",
    "por qué una niña escribió el mismo diario dos veces",
    "qué hicieron los vecinos que arriesgaron la vida por unos desconocidos",
    "cómo un editor cambió el texto y qué se recuperó después",
  ],

  "homo-deus": [
    "por qué el hambre, la peste y la guerra han dejado de ser destinos",
    "qué persigue la humanidad ahora que ha resuelto lo que la mataba",
    "por qué la felicidad tiene un techo que es bioquímico",
    "cómo unos algoritmos acaban conociéndote mejor que tu pareja",
    "en qué se diferencian la inteligencia y la conciencia",
  ],
};
