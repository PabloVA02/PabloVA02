/* ==========================================================================
   «Aprenderás»: lo que uno se lleva de cada libro.

   Es la tarjeta de los vistos de la ficha, calcada de Headway. Allí cada
   punto es UNA COSA QUE SABRÁS HACER O ENTENDER cuando termines, escrita en
   una línea y empezando por el verbo o por el qué:

       cómo detectar y promover a los mejores trabajadores
       formas de lograr el ajuste producto-mercado
       qué se necesita para mejorar el compromiso del equipo

   No son los capítulos, ni el índice, ni frases sueltas del libro. Son la
   promesa, y por eso van escritos a mano.

   LAS REGLAS

   1. UNA LÍNEA. Diez palabras como mucho. Si pide dos renglones en un móvil,
      sobra la mitad.

   1 bis. EN MINÚSCULA, como en la referencia: «por qué el cerebro humano
      vence a la inteligencia artificial», no «Por qué...». Detrás del visto no
      empieza una frase, se continúa la del rótulo: aprenderás… esto.

   2. QUE SE ENTIENDA SIN HABER LEÍDO EL LIBRO. «La habitación 101» no dice
      nada a quien no ha leído 1984; «por qué la tortura busca creencia y no
      información» sí.

   3. CONCRETO. Una idea que se pueda contar en una cena, no una categoría.
      Nada de «las claves del éxito» ni «los fundamentos de la felicidad».

   4. CINCO POR LIBRO. Es lo que cabe en la tarjeta sin desplazar la pantalla.

   5. SIN VENDER. Ni «descubre», ni «el secreto de», ni «imprescindible».

   Un libro sin entrada aquí cae en los títulos de sus capítulos, que son
   cortos y concretos pero hablan del recorrido y no de lo que te llevas. Se
   nota la diferencia, y por eso esta lista se va llenando.
   ========================================================================== */

export const PUNTOS: Record<string, string[]> = {
  "ana-karenina": [
    "por qué son dos novelas dentro de un mismo libro",
    "qué perdía una mujer rusa al dejar a su marido",
    "por qué el marido engañado no es el villano",
    "qué anuncia la escena de las carreras de caballos",
    "por qué el libro sigue ochenta páginas tras el suicidio",
  ],

  sisifo: [
    "dónde está exactamente lo absurdo, según su definición",
    "a qué llama Camus el suicidio filosófico",
    "qué tres consecuencias saca del absurdo",
    "por qué castigaron a Sísifo en realidad",
    "qué momento del mito le interesa y por qué",
  ],

  extranjero: [
    "qué decide el tiempo verbal en el que está escrita",
    "por qué su protagonista no es un hombre frío",
    "qué detalle del disparo impide leerlo como un accidente",
    "por qué el juicio trata del entierro y no del crimen",
    "a quién no le pone nombre la novela en doscientas páginas",
  ],

  "casi-todo": [
    "quién pesó la Tierra y con qué aparato",
    "cómo la edad del planeta acabó quitando el plomo de la gasolina",
    "por qué el volcán de Yellowstone tardó un siglo en aparecer",
    "cómo se demostró lo del asteroide de los dinosaurios",
    "cuántos fósiles humanos hay en total en el mundo",
  ],

  "mundo-sofia": [
    "con qué imagen define el libro lo que es un filósofo",
    "quién acertó lo de los átomos sin tener con qué mirar",
    "qué demuestra exactamente la alegoría de la caverna",
    "por qué Kant dio la razón a los dos bandos a la vez",
    "qué descubren los personajes a mitad de la novela",
  ],

  "cuerpo-cuenta": [
    "por qué revivir no es lo mismo que recordar",
    "qué zona del cerebro se apaga al revivir un trauma",
    "qué descubrió por accidente una clínica de obesidad",
    "por qué contar lo ocurrido a veces deja peor al paciente",
    "por qué el diagnóstico no sirve para un niño maltratado",
  ],

  freakonomics: [
    "por qué una multa puede empeorar lo que castiga",
    "cómo se detecta a un tramposo sin llegar a verlo",
    "cuánto gana de verdad un vendedor de droga de calle",
    "qué explica la caída del crimen en los años noventa",
    "qué influye realmente en las notas de un niño",
  ],

  "los-miserables": [
    "por qué su conversión no ocurre en la escena de los candelabros",
    "cómo se llega paso a paso de un despido a la calle",
    "por qué Javert no está escrito como un villano",
    "qué revuelta es en realidad la de la barricada",
    "qué hacen cien páginas sobre alcantarillas dentro de una novela",
  ],

  "origen-especies": [
    "por qué el libro empieza hablando de palomas domésticas",
    "qué cálculo de elefantes demuestra la lucha por la existencia",
    "por qué la selección natural no elige a nadie",
    "qué contestó Darwin a la objeción del ojo",
    "qué le faltaba a la teoría el día que se publicó",
  ],

  zaratustra: [
    "por qué «Dios ha muerto» es un diagnóstico, no un ataque",
    "las tres transformaciones por las que pasa quien crea algo propio",
    "qué es el último hombre y por qué gusta tanto",
    "por qué el eterno retorno es una prueba, no una teoría",
    "cómo su hermana convirtió su obra en lo contrario",
  ],

  "si-esto-hombre": [
    "qué se le quita a una persona en las primeras horas",
    "qué significa que allí no haya ningún porqué",
    "cómo funcionaba el mercado interno del campo",
    "por qué dice que los que volvieron no eran los mejores",
    "qué pasó en los diez días antes de la liberación",
  ],

  "guardian-centeno": [
    "qué le pasó a su hermano, y por qué no lo dice",
    "qué le pregunta dos veces a un taxista de madrugada",
    "qué consejo le da el único adulto que lo escucha",
    "de dónde sale el título, que es un verso mal oído",
    "qué decide no hacer en el tiovivo del final",
  ],

  "pedro-paramo": [
    "en qué momento se descubre lo que pasa en Comala",
    "cómo está montado un libro de sesenta y ocho trozos",
    "cómo se hizo Pedro Páramo dueño de todo un valle",
    "qué es lo único que no pudo comprar",
    "qué hizo para que el pueblo se muriera de hambre",
  ],

  "nombre-rosa": [
    "por qué el investigador se apellida Baskerville",
    "por qué nadie puede entrar en la biblioteca",
    "qué libro es el que envenena a quien lo lee",
    "por qué el asesino cree que la risa es peligrosa",
    "por qué el título no significa nada",
  ],

  "viejo-mar": [
    "qué es la teoría del iceberg y qué se calla aquí",
    "por qué el chico y él se inventan una cena",
    "cómo se le acaban las armas contra los tiburones",
    "qué queda del pez al llegar a puerto",
    "qué dijo Hemingway de todos los simbolismos",
  ],

  montecristo: [
    "quiénes lo denunciaron y qué ganaba cada uno",
    "qué le enseña el preso de la celda de al lado",
    "por qué no mata a ninguno de los tres",
    "cómo arruina a cada uno con su propio vicio",
    "en qué momento la venganza se le va de las manos",
  ],

  "moby-dick": [
    "qué barco hundió una ballena de verdad en 1820",
    "qué jura la tripulación alrededor del doblón",
    "por qué el libro se para a explicar anatomía",
    "por qué el color blanco es lo que más asusta",
    "cómo muere Ahab, que no es como se cuenta",
  ],

  dracula: [
    "cómo se descubre que en el castillo no hay espejos",
    "qué le pasó al barco que llegó a puerto sin nadie",
    "cuáles son las reglas del enemigo y para qué sirven",
    "cuánta tecnología de 1897 hay dentro del libro",
    "de dónde salió el nombre, que no es de Vlad",
  ],

  "dorian-gray": [
    "qué le dice el hombre que le cambia la vida",
    "por qué la primera arruga aparece por una frase",
    "qué hace el libro con los dieciocho años que no cuenta",
    "qué le pasa al pintor cuando ve el cuadro",
    "por qué el prólogo famoso se escribió después",
  ],

  frankenstein: [
    "por qué el pecado no fue crearlo sino abandonarlo",
    "cómo aprende a leer espiando por una rendija",
    "qué pide a cambio de desaparecer para siempre",
    "por qué la venganza cae en la noche de bodas",
    "qué le cuenta al capitán sobre el cadáver",
  ],

  "senor-moscas": [
    "contra qué libro está escrito este libro",
    "por qué se apaga la hoguera justo cuando pasa un barco",
    "qué es de verdad la bestia de la montaña",
    "qué le pasa al único que descubre la verdad",
    "cómo acabó el mismo naufragio en la vida real",
  ],

  "gran-gatsby": [
    "por qué el hombre que da las fiestas no bebe",
    "qué separa el dinero viejo del recién hecho",
    "qué oyó Gatsby de verdad en la voz de Daisy",
    "qué son los ojos que vigilan el descampado",
    "quién fue al funeral",
  ],

  metamorfosis: [
    "por qué nadie pregunta cómo ha pasado",
    "qué descubre sobre el dinero que había en casa",
    "cómo se va vaciando su habitación",
    "qué frase dice su hermana al final",
    "qué bicho es en realidad, y por qué Kafka prohibió dibujarlo",
  ],

  "crimen-castigo": [
    "qué decía su artículo sobre los hombres extraordinarios",
    "por qué la teoría se rompe en el minuto dos",
    "en qué consiste el castigo, que no es la cárcel",
    "cómo trabaja un juez que no acusa a nadie",
    "por qué se lo cuenta a Sonia antes que a nadie",
  ],

  fahrenheit: [
    "por qué nadie tuvo que prohibir los libros",
    "qué son las paredes que le hablan a su mujer",
    "por qué quitaron los porches de las casas",
    "las tres cosas que hacen falta para pensar",
    "por qué el jefe de bomberos ha leído más que nadie",
  ],

  "mundo-feliz": [
    "cómo se fabrican noventa y seis personas de un óvulo",
    "por qué se enseña a los niños a odiar las flores",
    "para qué sirve de verdad el soma",
    "por qué está prohibido querer a alguien en concreto",
    "qué pidió el Salvaje cuando pudo pedir cualquier cosa",
  ],

  "republica-platon": [
    "qué desafío plantea el anillo de Giges",
    "por qué construye una ciudad para hablar de una persona",
    "cuáles son las tres partes del alma",
    "qué dice de verdad la alegoría de la caverna",
    "en qué orden se pudre un régimen",
  ],

  odisea: [
    "por qué el poema empieza por su hijo",
    "dónde están los monstruos en el mapa de verdad",
    "el segundo chiste del cíclope, que solo se oye en griego",
    "qué le ofrece Calipso y por qué lo rechaza",
    "cómo lo reconoce Penélope al final",
  ],

  "cerebro-buda": [
    "por qué lo malo se te queda y lo bueno resbala",
    "cuál es el dardo que te lanzas tú",
    "cómo sujetar una experiencia buena veinte segundos",
    "qué palanca física apaga la alarma del cuerpo",
    "qué parte de la neurociencia del libro ya no se sostiene",
  ],

  "gen-egoista": [
    "por qué el cuerpo es solo el vehículo del gen",
    "por qué morirías por dos hermanos y no por uno",
    "en qué condiciones compensa ayudar a un desconocido",
    "por qué la naturaleza produce equilibrios y no óptimos",
    "qué quería decir de verdad la palabra meme",
  ],

  "rebelion-granja": [
    "cómo se toma el poder mientras otros discuten",
    "para qué sirve un enemigo que ya no está",
    "cómo se reescriben las reglas sin que nadie lo note",
    "qué le pasa al que más trabaja de todos",
    "por qué el final es una cena entre socios",
  ],

  "semana-4-horas": [
    "cómo escribir tus miedos para dejar de aplazar una decisión",
    "por qué una tarea se hincha hasta llenar el plazo",
    "cómo comprobar si algo se vende antes de fabricarlo",
    "cómo negociar trabajar fuera de la oficina",
    "qué partes del libro ya no funcionan",
  ],

  "steve-jobs": [
    "qué era el campo de distorsión de la realidad",
    "por qué lo echaron de su propia empresa en 1985",
    "cómo salvó Apple cancelando casi todos sus productos",
    "qué entendía él por simplicidad",
    "por qué tardó nueve meses en operarse",
  ],

  hobbit: [
    "por qué la aventura empieza con un contrato",
    "cómo se le habla a un dragón para salir vivo",
    "quién mata a Smaug, que no es ninguno de los protagonistas",
    "por qué el final es un reparto de oro",
    "por qué Tolkien reescribió el capítulo del anillo en 1951",
  ],

  "sombra-viento": [
    "qué es el Cementerio de los Libros Olvidados",
    "por qué la vida de Daniel repite la de Carax",
    "cómo cuenta la posguerra sin nombrar la política",
    "qué le pasó a Fermín antes de aparecer en el libro",
    "cómo está montada una novela que no se puede soltar",
  ],

  alquimista: [
    "qué es exactamente la Leyenda Personal del libro",
    "por qué el mercader de cristales no va a La Meca",
    "por qué el miedo pesa más que la dificultad",
    "dónde estaba el tesoro y por qué hubo que viajar",
    "qué esconde la promesa del universo conspirando",
  ],

  "orgullo-prejuicio": [
    "por qué las cinco hermanas se quedarían sin casa",
    "cuánto dinero al año hace falta para ser un buen partido",
    "por qué Charlotte se casa con un hombre que no soporta",
    "qué le hace cambiar de opinión sobre Darcy",
    "quién paga en realidad el final feliz",
  ],

  "matar-ruisenor": [
    "por qué el jurado condena con todas las pruebas en contra",
    "por qué la chica que acusa también es una víctima",
    "qué significa exactamente el título",
    "por qué el final consiste en tapar un homicidio",
    "qué cambió cuando en 2015 apareció otro Atticus",
  ],

  quijote: [
    "por qué los molinos ocupan solo dos páginas",
    "quién es el historiador árabe que finge haber escrito el libro",
    "qué pasa cuando todos los personajes han leído tu historia",
    "por qué Sancho resulta ser un buen gobernante",
    "cómo respondió Cervantes al Quijote falso de 1614",
  ],

  "mundo-ayer": [
    "por qué antes de 1914 se viajaba sin pasaporte",
    "qué escondía debajo la moral de la Viena elegante",
    "cómo se le enseña a odiar a un país entero",
    "qué le enseña una inflación a toda una generación",
    "por qué casi nadie se marchó a tiempo",
  ],

  "breve-historia-tiempo": [
    "por qué un universo en expansión tuvo que tener un principio",
    "por qué un gemelo que viaja envejece menos que el otro",
    "por qué los agujeros negros se evaporan poco a poco",
    "qué prohíbe de verdad el principio de incertidumbre",
    "por qué el desorden marca hacia dónde va el tiempo",
  ],

  principe: [
    "por qué describe cómo se gobierna y no cómo debería",
    "por qué es más seguro ser temido que amado",
    "por qué el daño va de golpe y el favor a plazos",
    "qué tienen que ver la zorra y el león",
    "qué pide el último capítulo, que casi nadie lee",
  ],

  "arte-guerra": [
    "los cinco factores que se calculan antes de empezar",
    "por qué asediar una ciudad es siempre el peor recurso",
    "las reglas concretas del engaño, una por una",
    "por qué pagar espías sale más barato que la guerra",
    "cuándo un general debe desobedecer a su rey",
  ],

  "cien-anos": [
    "por qué se repiten los nombres de los Buendía",
    "en qué consiste de verdad el realismo mágico",
    "qué le pasa a Macondo cuando llega algo de fuera",
    "qué matanza real hay detrás de la de las bananeras",
    "qué dicen los pergaminos que se descifran al final",
  ],

  "infinito-junco": [
    "de qué planta dependía toda la memoria escrita",
    "por qué Alejandría no ardió en una noche",
    "por qué coser las hojas cambió el mundo",
    "quién copió a mano lo que hoy leemos",
    "por qué el libro no ha cambiado en dos mil años",
  ],

  "cisne-negro": [
    "por qué mil días de datos no dicen nada del siguiente",
    "en qué se diferencian Mediocristán y Extremistán",
    "por qué el pasado siempre parece haber sido previsible",
    "dónde funcionan los expertos y dónde no",
    "cómo colocarse para que lo imprevisto no te arruine",
  ],

  spqr: [
    "por qué su mito fundacional es un crimen entre hermanos",
    "por qué la historia antigua de Roma se escribió siglos después",
    "qué hizo Roma con los vencidos que no hizo Atenas",
    "por qué la república tardó un siglo en caerse",
    "por qué desconfiar de las historias de emperadores locos",
  ],

  "por-que-dormimos": [
    "los dos sistemas que deciden cuándo te entra sueño",
    "por qué la cafeína no da energía, solo tapa el cansancio",
    "qué hace el sueño profundo y qué hace el REM",
    "por qué diez noches a seis horas te dejan igual",
    "por qué el alcohol seda pero no hace dormir",
  ],

  influencia: [
    "por qué un favor pequeño que no pediste te obliga",
    "por qué un sí pequeño lleva a uno grande",
    "a quién señalar si necesitas ayuda entre mucha gente",
    "por qué obedecemos la bata y no al experto",
    "por qué lo que se está acabando parece mejor",
  ],

  principito: [
    "por qué los mayores necesitan cifras para creer algo",
    "qué le pasa a los seis adultos de los planetas",
    "por qué una rosa entre cinco mil sigue siendo única",
    "el método del zorro para crear un lazo, paso a paso",
    "cómo termina de verdad, que casi nadie recuerda",
  ],

  meditaciones: [
    "cómo separar lo que está en tu mano de lo que no",
    "por qué casi todo se encoge si lo describes sin adornos",
    "por qué morir joven y morir viejo cuestan lo mismo",
    "qué decirse al levantarse antes de tratar con gente",
    "por qué un obstáculo es material de trabajo",
  ],

  cosmos: [
    "cómo se midió la Tierra con dos palos y una sombra",
    "por qué la ciencia griega se paró mil quinientos años",
    "dónde cae la historia humana en el calendario cósmico",
    "en qué estrella se fabricó el calcio de tus huesos",
    "qué le pasó a Venus y por qué nos importa",
  ],

  "1984": [
    "qué es el doblepensar y por qué no es hipocresía",
    "por qué el Partido quita palabras del diccionario",
    "por qué persigue el amor y no solo la política",
    "por qué la tortura busca creencia y no información",
    "qué cambia el apéndice, que está escrito en pasado",
  ],

  flow: [
    "por qué tu atención es un presupuesto y se gasta mal",
    "dónde está la franja exacta en la que aparece el flujo",
    "por qué se fluye más trabajando que en el sofá",
    "en qué se diferencian el placer y el disfrute",
    "por qué el domingo por la mañana se está peor",
  ],

  "busca-sentido": [
    "las tres fases por las que pasaba un prisionero",
    "por qué murió tanta gente la semana después de Navidad",
    "qué es lo único que no te pueden quitar",
    "las tres vías por las que aparece un sentido",
    "cómo se cura un insomnio pidiendo no dormir",
  ],

  mindset: [
    "en qué se diferencian la mentalidad fija y la de crecimiento",
    "por qué elogiar la inteligencia de un niño le perjudica",
    "qué le pasa a tu atención cuando fallas",
    "por qué Enron se hundió por fichar a los más brillantes",
    "cómo se reconoce la voz de la mentalidad fija",
  ],

  "poder-ahora": [
    "por qué el que oye el pensamiento no es el pensamiento",
    "por qué una bronca absurda deja una satisfacción rara",
    "por qué nadie ha sufrido nunca por el momento presente",
    "las tres únicas salidas ante algo que no te gusta",
    "por qué esperar que otro te complete rompe la relación",
  ],

  "monje-ferrari": [
    "cómo se cuida la mente como se cuida un jardín",
    "qué es el pensamiento opuesto y cómo se usa",
    "qué es el kaizen aplicado a un día normal",
    "por qué estar ocupado no es ser productivo",
    "por qué el Ferrari nunca fue el problema",
  ],

  "sutil-arte": [
    "por qué querer ser positivo te recuerda que no lo eres",
    "por qué la pregunta buena es qué dolor aguantas",
    "en qué se diferencian la culpa y la responsabilidad",
    "por qué creerse especial impide mejorar en nada",
    "por qué tener todas las opciones abiertas empobrece",
  ],

  "cuatro-acuerdos": [
    "por qué una frase de tres segundos dura veinte años",
    "por qué los elogios tampoco son sobre ti",
    "de dónde salen casi todas las peleas de pareja",
    "por qué tu mejor esfuerzo cambia cada día",
    "por qué perdonar es un asunto de interés propio",
  ],

  ikigai: [
    "qué significa ikigai de verdad en japonés",
    "por qué el diagrama de los cuatro círculos no es japonés",
    "qué es el hara hachi bu y por qué funciona",
    "qué es un moai y por qué dura toda la vida",
    "qué dicen los estudios sobre tener un propósito",
  ],

  "pensar-rapido": [
    "en qué se diferencian los dos sistemas con que piensas",
    "por qué una historia coherente parece más probable",
    "cómo un número dicho al azar te cambia el precio",
    "por qué perder cien duele más que ganar cien",
    "por qué de algo solo recuerdas el pico y el final",
  ],

  "inteligencia-emocional": [
    "por qué reaccionas antes de saber a qué reaccionas",
    "qué es un secuestro emocional y cómo se corta",
    "las cinco capacidades y por qué van en ese orden",
    "qué predijo aguantar sin comerse una golosina a los cuatro años",
    "los cuatro modos de discutir que rompen una pareja",
  ],

  "mente-millonaria": [
    "por qué el dinero que llega de golpe no se queda",
    "las tres vías por las que heredaste tu idea del dinero",
    "la diferencia entre jugar a ganar y a no perder",
    "el reparto en seis frascos, con sus porcentajes",
    "por qué cobrar por horas te pone un techo calculable",
  ],

  "piensa-hazte-rico": [
    "por qué un deseo sin cifra ni fecha no vale",
    "los seis pasos para convertir una idea en un plan",
    "por qué Ford no se molestaba en saber datos generales",
    "qué es una mente maestra y para qué sirve",
    "cómo distinguir una derrota temporal de un fracaso",
  ],

  "amigos-influir": [
    "por qué la crítica solo consigue que el otro se defienda",
    "en qué se diferencian el aprecio y la adulación",
    "por qué en el anzuelo va gusano y no fresas",
    "cómo admitir un error antes de que te lo digan",
    "por qué cambiar «pero» por «y» cambia una bronca entera",
  ],

  "padre-rico": [
    "la diferencia entre un activo y un pasivo, en una línea",
    "por qué la casa donde vives no es una inversión",
    "por qué cobrar más solo agranda la rueda",
    "qué significa pagarse a uno mismo primero",
    "los cinco miedos que frenan a quien no invierte",
  ],

  "psicologia-dinero": [
    "por qué cada uno decide con la vida que le tocó",
    "cómo separar lo que fue mérito de lo que fue suerte",
    "por qué Buffett ganó casi todo después de los cincuenta",
    "por qué casi todo se juega en un puñado de días",
    "en qué se diferencian ser rico y tener riqueza",
  ],

  "poder-habitos": [
    "las tres piezas de las que está hecho cualquier hábito",
    "por qué un hábito no se borra y solo se sustituye",
    "por qué un solo hábito arrastra a todos los demás",
    "cómo se entrena el autocontrol sin gastarlo",
    "cómo unos grandes almacenes detectan un embarazo",
  ],

  "siete-habitos": [
    "por qué eliges siempre la respuesta, aunque no lo parezca",
    "cómo distinguir tu círculo de preocupación del de influencia",
    "por qué lo urgente se come siempre lo importante",
    "qué es la cuenta bancaria emocional y cómo se ingresa",
    "por qué escuchamos para contestar y no para entender",
  ],

  sapiens: [
    "por qué hubo seis especies humanas y solo queda una",
    "cómo una ficción compartida permite cooperar entre desconocidos",
    "por qué la agricultura empeoró la vida de casi todos",
    "qué sostiene el valor del dinero cuando nadie lo respalda",
    "por qué más poder no ha traído más felicidad",
  ],

  "habitos-atomicos": [
    "por qué los resultados llegan mucho después que los hábitos",
    "por qué el sistema importa más que la meta",
    "cómo un hábito cambia quién crees que eres",
    "cómo apilar un hábito nuevo sobre uno que ya tienes",
    "la regla de los dos minutos para no aplazar",
  ],

  "club-5-manana": [
    "cómo repartir la primera hora del día en tres bloques de veinte minutos",
    "por qué madrugar se decide la noche anterior y no por la mañana",
    "cuánto tarda de verdad en instalarse un hábito, y en qué semana se abandona",
    "qué son la regla del 90/90/1 y el ritmo de 60 y 10",
    "por qué el descanso es parte del rendimiento y no su premio",
  ],

  "trabajo-profundo": [
    "por qué la atención no vuelve entera después de cada interrupción",
    "las cuatro maneras de meter concentración en una vida normal",
    "cómo montar un ritual que quite decisiones en vez de gastar voluntad",
    "por qué conviene descansar de la distracción y no de la concentración",
    "cómo elegir qué aplicaciones se quedan y cuáles sobran",
  ],

  "armas-germenes": [
    "por qué unos pueblos llegaron a otros y no al revés",
    "cuántos animales grandes se han domesticado en toda la historia",
    "qué tiene que ver la forma de un continente con su agricultura",
    "por qué la viruela mató más que todos los conquistadores juntos",
    "de dónde salieron la escritura, el Estado y los ejércitos",
  ],

  "diario-ana-frank": [
    "cómo se vivía en un escondite de cincuenta metros y ocho personas",
    "por qué Ana estaba reescribiendo su diario para publicarlo",
    "qué pasó la mañana del 4 de agosto de 1944",
    "qué le quitó su padre al libro antes de publicarlo",
    "por qué leerla como un símbolo de esperanza la deja en nada",
  ],

  "homo-deus": [
    "por qué el hambre, la peste y la guerra han dejado de ser destinos",
    "qué persigue la humanidad ahora que los ha resuelto",
    "por qué la felicidad tiene un techo bioquímico",
    "cómo los algoritmos acaban conociéndote mejor que tu pareja",
    "en qué se diferencian la inteligencia y la conciencia",
  ],
};
