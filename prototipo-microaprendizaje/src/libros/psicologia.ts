import type { Resumen } from "./tipos";

/* ==========================================================================
   Psicología.

   A partir de aquí los resúmenes se agrupan por categoría en vez de un
   fichero por libro. Con cinco libros daba igual; con ciento veinte, un
   directorio de ciento veinte ficheros es peor de recorrer que ocho de
   quince. El catálogo sigue siendo la única fuente de verdad sobre qué hay.
   ========================================================================== */

export const INFLUENCIA: Resumen = {
  id: "influencia",
  titulo: "Influencia",
  autor: "Robert Cialdini",
  ano: 1984,
  gancho: "Pasó tres años infiltrado como vendedor para averiguar por qué compramos lo que no queremos.",
  porQue:
    "Es el libro que usan todos los departamentos de marketing del mundo. Leerlo sirve para vender, pero sobre todo para darte cuenta de cuándo te están vendiendo.",
  partes: [
    {
      titulo: "El profesor infiltrado",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Robert Cialdini era un psicólogo que se reconocía a sí mismo como un blando: compraba suscripciones que no quería y donaba a causas que no conocía. En vez de resignarse, se infiltró. Durante tres años trabajó de incógnito en agencias de venta a domicilio, concesionarios de coches y organizaciones benéficas, apuntando exactamente qué le decían para hacerle ceder.",
        },
        {
          forma: "arte",
          texto:
            "Lo que encontró es que casi todas las tácticas del planeta se reducen a seis principios. No son trucos: son atajos mentales que normalmente nos funcionan bien, y por eso el engaño cuela — el vendedor no inventa nada, solo aprieta un botón que ya estaba ahí.",
          arte: "aprendizaje",
        },
        {
          forma: "clave",
          rotulo: "El punto de partida",
          frase: "Vivimos con demasiada información para decidirlo todo despacio. Los atajos no son un defecto: son lo que nos permite funcionar.",
        },
      ],
    },
    {
      titulo: "Los seis principios",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "<strong>Reciprocidad.</strong> Cuando alguien nos da algo, quedamos incómodos hasta devolverlo. Los camareros que dejan un caramelo con la cuenta suben la propina un 3 %; dos caramelos, un 14 %; y si el camarero se aleja, se gira y añade «para ustedes, uno más», sube un 23 %. Lo que dispara la deuda no es el caramelo: es que parezca personal.",
        },
        {
          forma: "texto",
          texto:
            "<strong>Compromiso y coherencia.</strong> Una vez decimos que sí a algo pequeño, defendemos esa posición aunque nos cueste. En un experimento clásico, la gente que había aceptado poner una pegatina diminuta de «conduce con cuidado» aceptó después, cuatro veces más que el resto, un cartel enorme en el jardín. Un compromiso mínimo cambia cómo te ves a ti mismo.",
        },
        {
          forma: "clave",
          rotulo: "El más peligroso",
          frase: "Prueba social: si no sabemos qué hacer, hacemos lo que hace la mayoría. Y eso es exactamente lo que se falsifica más fácil.",
        },
        {
          forma: "texto",
          texto:
            "<strong>Simpatía.</strong> Compramos a quien nos cae bien, y nos cae bien quien se nos parece, quien nos halaga y quien es atractivo. <strong>Autoridad</strong>: obedecemos a las batas blancas y a los títulos, a veces sin comprobar que existan. Y <strong>escasez</strong>: valoramos más lo que se acaba, que es por lo que existen las cuentas atrás y los «últimas 3 unidades».",
        },
        {
          forma: "texto",
          texto:
            "El detalle que Cialdini repite: la escasez no funciona porque queramos más el objeto, sino porque odiamos perder una opción. Perder pesa psicológicamente más que ganar lo mismo, y toda la publicidad moderna vive de esa asimetría.",
        },
      ],
    },
    {
      titulo: "Los trucos que ya te han hecho",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El caso más elegante del libro son los Hare Krishna en los aeropuertos de los años setenta. Habían probado a pedir donativos directamente y les iba fatal. Cambiaron la táctica: regalaban una flor y se negaban a aceptarla de vuelta. La gente donaba por incomodidad, tiraba la flor a la papelera nada más doblar la esquina, y ellos la recogían de la basura para volver a regalarla. La misma flor, varias veces al día.",
        },
        {
          forma: "texto",
          texto:
            "Cialdini probó también el mecanismo al revés, que él llama <em>puerta en la cara</em>. Preguntó a estudiantes si acompañarían a un grupo de menores delincuentes al zoo un día: aceptó el 17 %. A otro grupo le pidió antes algo enorme —dos años haciendo de tutor voluntario—, todos dijeron que no, y entonces les ofreció lo del zoo. Aceptó el 50 %. La segunda petición no había cambiado: había cambiado con qué se comparaba.",
        },
        {
          forma: "arte",
          texto:
            "Y el experimento que mejor resume el libro es el de Ellen Langer en una cola de fotocopiadora. «¿Puedo pasar antes?»: cedió el 60 %. «¿Puedo pasar antes, <em>porque tengo prisa</em>?»: el 94 %. «¿Puedo pasar antes, <em>porque tengo que hacer unas copias</em>?»: el 93 %. La razón era vacía —todos estaban allí para hacer copias— pero llevaba la palabra «porque» delante, y con eso bastó.",
          arte: "explorar",
        },
        {
          forma: "clave",
          rotulo: "Lo que revela",
          frase: "Muchas veces no respondemos al contenido del mensaje, sino a su forma. Sonar a razón funciona casi tan bien como serlo.",
        },
        {
          forma: "texto",
          texto:
            "La prueba social tiene su versión doméstica y está en todos los hoteles del mundo. Los carteles que piden reutilizar la toalla por el bien del planeta funcionan; los que dicen que la mayoría de los huéspedes la reutiliza funcionan más; y los que dicen que la mayoría de los que durmieron <em>en esa misma habitación</em> lo hicieron, más todavía. Cuanto más se parece a ti el grupo, más te arrastra.",
        },
        {
          forma: "texto",
          texto:
            "En la edición de 2016 Cialdini añadió un séptimo principio, la <strong>unidad</strong>: no basta con parecerse al otro, hay que compartir identidad con él —familia, pueblo, equipo, religión—. Es el más potente de todos y el que explica por qué la publicidad lleva veinte años intentando venderte pertenencia a una tribu en vez de un producto.",
        },
      ],
    },
    {
      titulo: "Defenderse",
      tarjetas: [
        {
          forma: "arte",
          texto:
            "Su consejo defensivo no es desconfiar de todo, que sería agotador e injusto. Es aprender a notar una sensación concreta: la de estar cediendo sin saber por qué. Cuando la detectes, di en voz alta lo que ha pasado — «me han hecho un favor y ahora me siento en deuda» — porque nombrar el mecanismo lo desactiva.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "El libro tiene casi cuarenta años y algunos de sus experimentos clásicos han fallado al repetirse, como le ha pasado a media psicología social. Los seis principios en sí han aguantado bien. Y hay un mérito que nadie discute: es el manual con el que se ha construido buena parte de la publicidad que ves cada día, escrito por alguien que quería enseñarte a resistirla.",
        },
        {
          forma: "clave",
          rotulo: "Para llevarte",
          frase: "No te defiendes desconfiando de todos, sino notando el momento exacto en que empiezas a ceder.",
        },
      ],
    },
  ],
};

export const MINDSET: Resumen = {
  id: "mindset",
  titulo: "Mindset",
  autor: "Carol Dweck",
  ano: 2006,
  gancho: "Decirle «qué listo eres» a un niño le hace elegir después el problema más fácil.",
  porQue:
    "Una sola idea, demostrada con treinta años de experimentos, que cambia cómo hablas a tus hijos, a tu equipo y a ti mismo.",
  partes: [
    {
      titulo: "El experimento del elogio",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Dweck dio a cientos de niños una prueba fácil que todos aprobaron. A la mitad les dijo: «qué listo eres». A la otra mitad: «se nota que te has esforzado mucho». Una sola frase, una sola vez. Después les dejó elegir la siguiente prueba: una fácil o una difícil de la que aprenderían.",
        },
        {
          forma: "clave",
          rotulo: "El resultado",
          frase: "Los elogiados por listos eligieron la fácil. Los elogiados por su esfuerzo eligieron la difícil, en un 90 %.",
        },
        {
          forma: "texto",
          texto:
            "Y siguió. Puso a todos una prueba muy difícil, en la que fallaron. Los del grupo «listo» se hundieron: concluyeron que no eran tan listos y dejaron de disfrutar. Los del grupo «esfuerzo» se lo tomaron como un reto. En una última prueba del nivel inicial, el primer grupo bajó su nota un 20 %; el segundo la subió un 30 %.",
        },
        {
          forma: "texto",
          texto:
            "Y hubo un detalle que Dweck no esperaba: al pedirles que escribieran a otro colegio contando sus resultados, casi el 40 % de los niños elogiados por listos <em>mintió</em>, inflando su puntuación. Cuando tu identidad es «soy listo», un fallo no es información: es una amenaza.",
        },
      ],
    },
    {
      titulo: "Fija contra de crecimiento",
      tarjetas: [
        {
          forma: "arte",
          texto:
            "De ahí sale la distinción del libro. En mentalidad <strong>fija</strong>, la inteligencia y el talento son una cantidad que te tocó al nacer, y cada tarea es un examen sobre cuánto tienes. En mentalidad de <strong>crecimiento</strong>, son cosas que se desarrollan, y cada tarea es una ocasión de desarrollarlas.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "El cambio no es de optimismo, es de qué significa el esfuerzo. Con mentalidad fija, esforzarse es una mala señal — si tuvieras talento no te haría falta. Con la otra, el esfuerzo es literalmente el mecanismo por el que se mejora. Por eso los primeros abandonan cuando algo se pone cuesta arriba: seguir sería admitir que no valen.",
        },
        {
          forma: "clave",
          rotulo: "La palabra",
          frase: "«Todavía no». No es que no sepas hacerlo: es que no sabes hacerlo todavía.",
        },
      ],
    },
    {
      titulo: "Campeones, jefes y parejas",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Dweck lleva la idea al deporte con dos ejemplos opuestos. John McEnroe tenía un talento descomunal y lo dice él mismo en su autobiografía: cuando perdía siempre había una causa externa —el serrín de la pista, la cámara de un fotógrafo, un resfriado, la gente del público—. Nunca entrenó lo que se le daba mal, porque entrenar habría sido admitir que le faltaba algo.",
        },
        {
          forma: "arte",
          texto:
            "Michael Jordan es el reverso. En el instituto no entró en el equipo principal y se pasó el verano entrenando desde las seis de la mañana. Cuando llegó a la NBA no tenía un buen tiro exterior ni defensa; se los fabricó. Es célebre su frase de que ha fallado más de nueve mil tiros y perdido casi trescientos partidos, y que por eso ha tenido éxito. Dweck no lo cita como motivación barata, sino como descripción técnica de un método.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "En las empresas la distinción explica desastres enteros. Dweck analiza a directivos que llenaron sus consejos de gente que les daba la razón, castigaron a quien traía malas noticias y terminaron con compañías que se creían invencibles y no lo eran. Frente a ellos, jefes que empezaban preguntando qué estaba roto y agradecían el diagnóstico incómodo. La diferencia no era la inteligencia: era si la empresa existía para demostrar algo o para aprender algo.",
        },
        {
          forma: "clave",
          rotulo: "En pareja",
          frase: "Con mentalidad fija, que una relación cueste esfuerzo demuestra que no era la buena. Con la otra, es simplemente lo que hace una relación.",
        },
        {
          forma: "texto",
          texto:
            "Ese capítulo es el que más incomoda. La creencia de que las personas compatibles no discuten, de que el amor verdadero no requiere trabajo y de que la gente no cambia produce rupturas que no tenían por qué ocurrir. Y produce también su versión contraria: quedarse años intentando reformar a alguien que no ha pedido cambiar. Dweck insiste en que crecer no es exigirle a otro que se convierta en otro.",
        },
      ],
    },
    {
      titulo: "Lo que se malinterpreta",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El libro se convirtió en un fenómeno escolar y se deformó por el camino. Muchos colegios lo redujeron a colgar carteles y a elogiar el esfuerzo aunque no llevara a ningún sitio. La propia Dweck lo llamó «mentalidad de crecimiento falsa» y salió a corregirlo: elogiar el esfuerzo sin resultado no sirve de nada; hay que elogiar la <em>estrategia</em>, y si no funciona, cambiarla.",
        },
        {
          forma: "texto",
          texto:
            "También hay que decir que las réplicas grandes han encontrado efectos reales pero mucho menores que los del libro, sobre todo en alumnos con dificultades. La idea aguanta; el tamaño del milagro, no. Aun así, cambiar «qué listo eres» por «cómo lo has hecho» es de las cosas más baratas y útiles que puede hacer cualquiera que trate con niños.",
        },
        {
          forma: "texto",
          texto:
            "Cómo se cambia, en concreto, ocupa el último capítulo y es menos épico de lo que parece. Nadie tiene una mentalidad pura: tenemos las dos y cada una salta con cosas distintas. El trabajo consiste en identificar qué situación exacta te dispara la fija —una crítica, alguien mejor que tú, un examen— y aprender a reconocer esa voz cuando aparece, discutirle con hechos y actuar como actuaría la otra. Repetido bastantes veces, la voz cambia de tono.",
        },
        {
          forma: "clave",
          rotulo: "Para llevarte",
          frase: "Elogia el proceso, no la persona. Al que aplaudes por listo le estás enseñando a evitar los retos.",
        },
      ],
    },
  ],
};

export const INTELIGENCIA_EMOCIONAL: Resumen = {
  id: "inteligencia-emocional",
  titulo: "Inteligencia emocional",
  autor: "Daniel Goleman",
  ano: 1995,
  gancho: "El cociente intelectual explica como mucho un 20 % de tu éxito en la vida. El resto es otra cosa.",
  porQue:
    "Puso en el mapa una idea que hoy damos por evidente y que en 1995 sonaba a herejía: que gestionar emociones es una habilidad que se entrena.",
  partes: [
    {
      titulo: "El secuestro de la amígdala",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La información sensorial que llega al cerebro toma dos caminos. Uno largo, hacia la corteza, donde se piensa. Y otro corto y rapidísimo hacia la amígdala, que decide si hay peligro antes de que la parte racional se entere. En términos evolutivos es una ganga: mejor saltar mil veces por una rama que parecía una serpiente que morir una vez por analizarla.",
        },
        {
          forma: "clave",
          rotulo: "El fallo",
          frase: "La amígdala reacciona antes de que sepas por qué. Cuando la parte racional llega, ya has gritado.",
        },
        {
          forma: "arte",
          texto:
            "Goleman lo llama <em>secuestro emocional</em>, y explica el arrepentimiento inmediato: el mensaje que no deberías haber mandado, el portazo, la respuesta en la reunión. No es falta de carácter, es una diferencia de milisegundos entre dos circuitos. Y ahí está la buena noticia: si es un mecanismo, se puede intervenir.",
          arte: "memoria",
        },
      ],
    },
    {
      titulo: "Las cinco piezas",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La inteligencia emocional se compone, según él, de cinco habilidades: reconocer lo que sientes mientras lo sientes, saber regularlo, motivarte hacia una meta, reconocer lo que sienten los demás y manejar relaciones. Las tres primeras miran hacia dentro; las dos últimas, hacia fuera. Y ninguna aparece en un test de inteligencia.",
        },
        {
          forma: "texto",
          texto:
            "La primera es la que sostiene todas las demás, y es más rara de lo que parece: mucha gente sabe que está de mal humor pero no sabe con qué está enfadada. Poner nombre a una emoción mientras ocurre baja su intensidad — hay estudios de neuroimagen que lo muestran, y es la base de casi toda la terapia moderna.",
        },
        {
          forma: "texto",
          texto:
            "Para la motivación recurre al experimento de las nubes de azúcar de Walter Mischel: a niños de cuatro años se les ofrecía una golosina ya, o dos si esperaban quince minutos. Los que aguantaron sacaron años después mejores notas y se manejaron mejor bajo presión. Es el estudio más citado del libro — y conviene añadir que las réplicas recientes han encontrado un efecto bastante menor, y que el entorno familiar explica buena parte de él.",
        },
        {
          forma: "clave",
          rotulo: "La habilidad clave",
          frase: "No es no sentir. Es notar lo que sientes a tiempo de decidir qué haces con ello.",
        },
      ],
    },
    {
      titulo: "Los otros y el trabajo",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La empatía, dice Goleman, casi nunca se transmite con palabras. Más del noventa por ciento de los mensajes emocionales viajan en el tono, la postura, el ritmo del habla y la cara, y se leen sin darte cuenta. De ahí que discutir por escrito salga tan mal: quitas el canal por el que iba la mitad del mensaje y dejas solo la parte que se puede interpretar en contra.",
        },
        {
          forma: "texto",
          texto:
            "Recurre al trabajo de John Gottman con matrimonios, que llegó a predecir qué parejas se separarían con una fiabilidad altísima observando quince minutos de conversación. Lo decisivo no era discutir más o menos —todas discuten— sino cómo. La señal más destructiva era el desprecio: los ojos en blanco, el sarcasmo, hablar del otro como de un caso perdido en lugar de hablar del problema concreto.",
        },
        {
          forma: "clave",
          rotulo: "La regla práctica",
          frase: "Quéjate de lo que ha pasado, no de quién es la otra persona. «Has llegado tarde» y «eres un desastre» no son la misma frase.",
        },
        {
          forma: "arte",
          texto:
            "En 1998 Goleman llevó la idea a la empresa con un artículo en <em>Harvard Business Review</em> que se convirtió en uno de los más pedidos de su historia. Su afirmación: en los puestos altos, el conocimiento técnico es un requisito de entrada que todos cumplen, y lo que separa a los buenos jefes de los mediocres es la autoconciencia y el manejo de la gente. Las empresas empezaron a medirlo en sus procesos de selección.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "La aplicación que más le importaba, sin embargo, era la escolar. Defendió que alfabetizar emocionalmente a los niños —ponerle nombre a lo que sienten, aprender a esperar, resolver un conflicto sin pegar— debería ocupar horas del horario igual que las matemáticas. Los metaanálisis posteriores, sobre cientos de miles de alumnos, encontraron mejoras modestas pero consistentes en conducta y también en notas.",
        },
      ],
    },
    {
      titulo: "Qué ha quedado",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La cifra famosa —que el CI explica un 20 % del éxito— nunca tuvo un respaldo tan sólido como sugirió el libro, y Goleman ha matizado desde entonces. La psicología académica sigue discutiendo si la inteligencia emocional es una capacidad medible o un conjunto de rasgos de personalidad con nombre nuevo.",
        },
        {
          forma: "texto",
          texto:
            "Lo que no se discute es el efecto que tuvo. Antes de 1995, hablar de emociones en una empresa o en un colegio era casi ridículo; hoy hay programas de educación emocional en medio mundo y los estudios de seguimiento muestran mejoras reales en conducta y rendimiento. Pocos libros de divulgación han cambiado tantas prácticas.",
        },
        {
          forma: "texto",
          texto:
            "Si hay que quedarse con una sola práctica del libro, es la que Goleman toma de la terapia cognitiva: cuando notes que se te dispara algo, retrasa la respuesta el tiempo que haga falta para poder describir en una frase qué ha ocurrido y qué estás sintiendo. No es contar hasta diez por disciplina. Es que la amígdala se apaga sola en unos minutos si no la alimentas, y la corteza llega justo después.",
        },
        {
          forma: "clave",
          rotulo: "Para llevarte",
          frase: "Entre el estímulo y la respuesta hay un hueco. Ensancharlo es la habilidad entera.",
        },
      ],
    },
  ],
};

export const AMIGOS_INFLUIR: Resumen = {
  id: "amigos-influir",
  titulo: "Cómo ganar amigos e influir sobre las personas",
  autor: "Dale Carnegie",
  ano: 1936,
  gancho: "Noventa años, treinta millones de ejemplares, y su primer consejo sigue siendo el que nadie cumple.",
  porQue:
    "Es el manual de trato humano más vendido de la historia. Suena a obviedad hasta que cuentas cuántas de sus reglas rompiste ayer.",
  partes: [
    {
      titulo: "El criminal que no se creía criminal",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Carnegie abre con Francis Crowley, un asesino acorralado en Nueva York en 1931 tras un tiroteo con cientos de policías. Mientras disparaba, escribió una carta que decía: «bajo mi abrigo hay un corazón cansado, pero bueno, que no haría daño a nadie». Al ir a la silla eléctrica no dijo «esto es lo que gano por matar»: dijo «esto es lo que gano por defenderme».",
        },
        {
          forma: "clave",
          rotulo: "La conclusión",
          frase: "Ni el peor criminal se culpa a sí mismo. ¿Por qué esperas que lo haga la persona a la que estás criticando?",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale su primera regla, la más incumplida del libro: <strong>no critiques, no condenes, no te quejes</strong>. La crítica pone a la otra persona a la defensiva y la empuja a justificarse, que es exactamente lo contrario de lo que buscabas. Hiere su orgullo y crea resentimiento — y no cambia nada.",
        },
      ],
    },
    {
      titulo: "Lo que la gente quiere",
      tarjetas: [
        {
          forma: "arte",
          texto:
            "Su segunda idea es la que sostiene el resto: el deseo humano más profundo y menos satisfecho es <em>sentirse importante</em>. Freud lo llamaba deseo de grandeza; Dewey, deseo de ser importante. Es la única cosa que casi nadie recibe suficiente y casi nadie sabe dar.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Por eso insiste tanto en la diferencia entre <em>aprecio</em> y <em>adulación</em>: el primero es sincero y sale del corazón, la segunda sale de los dientes para afuera y todo el mundo la detecta. Su consejo práctico: en vez de inventar halagos, dedicar el esfuerzo a encontrar algo que admirar de verdad, que casi siempre lo hay.",
        },
        {
          forma: "clave",
          rotulo: "El principio",
          frase: "Hablar de lo que te interesa a ti es el modo más rápido de que dejen de escucharte.",
        },
        {
          forma: "texto",
          texto:
            "De ahí las reglas más conocidas: interésate sinceramente por los demás, sonríe, recuerda y usa el nombre de la gente —«el sonido más dulce en cualquier idioma»—, escucha más de lo que hablas, y habla de lo que le interesa al otro. Ninguna es un descubrimiento. La cuestión es cuántas hiciste ayer.",
        },
      ],
    },
    {
      titulo: "El vendedor que dio clases",
      tarjetas: [
        {
          forma: "arte",
          texto:
            "Conviene saber de dónde sale el libro. Dale Carnegie nació en una granja pobre de Misuri y de joven vendió bacón y jabón por Nebraska. Quiso ser actor, fracasó, y acabó dando clases nocturnas de oratoria en una YMCA de Nueva York por comisión, porque no se fiaban lo bastante de él para pagarle un sueldo.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "Las clases se llenaron y descubrió que a sus alumnos les urgía menos hablar en público que aguantar a su jefe, a sus clientes y a su familia. Buscó un manual sobre eso y no existía, así que fue apuntando durante quince años lo que funcionaba a gente real. El libro salió en 1936, en plena Depresión, y vendió cinco millones antes de que él muriera.",
        },
        {
          forma: "clave",
          rotulo: "El origen",
          frase: "No es teoría de despacho: son quince años de notas sobre qué funcionaba de verdad en las clases nocturnas.",
        },
        {
          forma: "texto",
          texto:
            "Su parte final, la que trata de dirigir a otros sin ofenderlos, es la más aprovechable hoy. Empieza siempre por algo sincero que elogiar. Señala el fallo de forma indirecta —«y» en vez de «pero»: «has mejorado mucho <em>y</em> si arreglas esto será redondo»—. Habla de tus propios errores antes de mencionar los del otro.",
        },
        {
          forma: "texto",
          texto:
            "Y tres más que cuestan poco y cambian mucho: haz preguntas en vez de dar órdenes, deja siempre al otro una salida digna aunque tengas razón, y atribúyele la buena fama que quieres que cumpla, porque la gente tiende a comportarse como la reputación que le has dado. Elogia cada avance, no solo el resultado final.",
        },
      ],
    },
    {
      titulo: "Ganar discusiones",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Su capítulo sobre discusiones cabe en una frase: la única forma de ganar una discusión es evitarla. Si pierdes, pierdes; y si ganas, también, porque has humillado a alguien que se irá con su opinión intacta y con una herida nueva. Nunca digas «te equivocas»: nadie ha cambiado de idea después de oír eso.",
        },
        {
          forma: "texto",
          texto:
            "Su alternativa es admitir el error propio rápido y con energía, empezar de forma amistosa, y conseguir que el otro diga «sí» cuanto antes — porque una vez alguien dice «no», su orgullo le obliga a sostenerlo. Y dejar que la idea final parezca suya, aunque la hayas puesto tú.",
        },
        {
          forma: "texto",
          texto:
            "Hay un experimento que Carnegie no llegó a conocer y que le da la razón. En negociaciones grabadas, los acuerdos buenos casi nunca los cierra quien más argumenta: los cierra quien más preguntas hace y quien resume en voz alta la posición del otro antes de exponer la suya. Sentirse comprendido baja la guardia mucho más deprisa que cualquier dato.",
        },
        {
          forma: "clave",
          rotulo: "La incomodidad",
          frase: "Casi todo el libro es sentido común. El problema es que el sentido común no es práctica común.",
        },
        {
          forma: "texto",
          texto:
            "Hay una pega justa: leído de mala fe, esto es un manual de manipulación, y algunos de sus consejos —conseguir que la idea parezca del otro— rozan esa línea. Carnegie insiste una y otra vez en que sin interés sincero nada de esto funciona más de dos semanas. Con esa reserva, sigue siendo el libro más útil que existe sobre tratar con gente.",
        },
      ],
    },
  ],
};

export const PENSAR_RAPIDO: Resumen = {
  id: "pensar-rapido",
  titulo: "Pensar rápido, pensar despacio",
  autor: "Daniel Kahneman",
  ano: 2011,
  gancho: "Ganó el Nobel de Economía siendo psicólogo y sin haber hecho nunca un curso de economía.",
  porQue:
    "Es el resumen de cincuenta años demostrando que no decidimos como creemos. Después de leerlo no vuelves a fiarte igual de tu propio criterio.",
  partes: [
    {
      titulo: "Dos sistemas",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Kahneman propone imaginar la mente como dos personajes. El <strong>sistema 1</strong> es rápido, automático y no se puede apagar: reconoce una cara enfadada, completa «capital de Francia», frena si algo se cruza. El <strong>sistema 2</strong> es lento, deliberado y perezoso: multiplica 17 por 24, aparca en un hueco justo, rellena la declaración.",
        },
        {
          forma: "clave",
          rotulo: "El reparto real",
          frase: "Creemos que decidimos con el 2. En la práctica, el 1 propone casi todo y el 2 firma sin mirar.",
        },
        {
          forma: "arte",
          texto:
            "Su prueba favorita: un bate y una pelota cuestan un euro con diez. El bate cuesta un euro más que la pelota. ¿Cuánto cuesta la pelota? Casi todo el mundo responde diez céntimos, y es falso —serían un euro veinte en total—. La respuesta correcta es cinco. Más de la mitad de los estudiantes de las mejores universidades del mundo fallan esta pregunta.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Lo que demuestra no es que la gente sea tonta: es que el sistema 1 produce una respuesta plausible al instante y el sistema 2, que podría comprobarla en tres segundos, no se molesta. Su lema es que somos máquinas de sacar conclusiones precipitadas.",
        },
      ],
    },
    {
      titulo: "Los atajos que fallan",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El <strong>anclaje</strong> es el más inquietante. En un experimento hicieron girar una ruleta trucada delante de unos jueces y después les pidieron una cifra sin relación alguna. La cifra que salía en la ruleta desplazaba sus respuestas. Un número absurdo, del que sabían que era aleatorio, movía su criterio.",
        },
        {
          forma: "clave",
          rotulo: "Dónde lo ves cada día",
          frase: "El precio tachado al lado del rebajado. El primer sueldo que se menciona en una negociación. La ruleta funciona igual.",
        },
        {
          forma: "texto",
          texto:
            "La <strong>disponibilidad</strong> es el segundo: juzgamos la probabilidad de algo por lo fácil que es recordar un ejemplo. Por eso la gente teme más a los accidentes de avión que a los de coche, y por eso una noticia repetida durante una semana altera la sensación de riesgo de todo un país.",
        },
        {
          forma: "arte",
          texto:
            "Y está su descubrimiento estrella, por el que le dieron el Nobel: la <strong>aversión a la pérdida</strong>. Perder cien euros duele aproximadamente el doble de lo que alegra ganarlos. Por eso la gente no vende acciones que caen, aguanta en trabajos que odia y prefiere lo malo conocido: no está calculando, está evitando el dolor de perder.",
          arte: "memoria",
        },
      ],
    },
    {
      titulo: "Los dos yoes",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Su parte final es la más filosófica y la que más se recuerda. Kahneman distingue entre el <em>yo que experimenta</em>, que vive los momentos según pasan, y el <em>yo que recuerda</em>, que después construye el relato. Y demuestra que no coinciden.",
        },
        {
          forma: "texto",
          texto:
            "Lo probó con un experimento incómodo. A unos voluntarios les hacían meter la mano en agua muy fría durante sesenta segundos. Después repetían con la otra mano: sesenta segundos igual de fría, más treinta segundos adicionales en los que el agua subía un grado — seguía siendo desagradable, y era objetivamente más dolor total.",
        },
        {
          forma: "clave",
          rotulo: "El resultado",
          frase: "Cuando les dejaban elegir cuál repetir, la mayoría elegía la versión larga. Recordamos el final, no la suma.",
        },
        {
          forma: "texto",
          texto:
            "Lo llamó la regla del pico y el final: de una experiencia recordamos su momento más intenso y cómo terminó, y la duración apenas cuenta. Eso explica que unas vacaciones de dos semanas no se recuerden mucho mejor que unas de una, y por qué una discusión al final de una cena estupenda se lleva la cena entera.",
        },
      ],
    },
    {
      titulo: "Lo que él mismo corrigió",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Kahneman escribió el libro con su colega Amos Tversky siempre presente, aunque este había muerto en 1996. Trabajaron juntos décadas y él siempre dijo que el Nobel de 2002 habría sido compartido si Amos hubiera vivido; los premios no se conceden a título póstumo.",
        },
        {
          forma: "arte",
          texto:
            "Y hay que decir algo importante sobre el propio libro. Varios de los estudios que cita —sobre todo un capítulo entero dedicado al <em>priming</em>, la idea de que palabras leídas de pasada cambian tu comportamiento— no se han podido replicar. Kahneman lo reconoció públicamente en 2017 y escribió que había confiado demasiado en estudios con muestras pequeñas.",
          arte: "noche",
        },
        {
          forma: "clave",
          rotulo: "Su propia advertencia",
          frase: "Conocer estos sesgos no te libra de ellos. Kahneman decía que él seguía cayendo en casi todos.",
        },
        {
          forma: "texto",
          texto:
            "Su consejo práctico es por eso indirecto: como no puedes fiarte de tu intuición en el momento, construye sistemas. Listas de comprobación, criterios escritos antes de decidir, y sobre todo pedirle a otro que revise, porque somos mucho mejores detectando los errores ajenos que los propios.",
        },
        {
          forma: "texto",
          texto:
            "Un último hallazgo suyo, útil para cualquiera que decida en grupo: pide las opiniones por escrito y antes de la reunión. En cuanto alguien habla primero, ancla a todos los demás y lo que parece consenso es en realidad la opinión de la persona que abrió la boca, repetida con matices. Kahneman lo consideraba el arreglo más barato y eficaz que puede aplicar una organización.",
        },
        {
          forma: "texto",
          texto:
            "Otro efecto que documenta y que conviene conocer: cuanto más fácil de leer es una afirmación —buen contraste, tipografía clara, frase que rima— más verdadera nos parece. No tiene nada que ver con su contenido. Es el sistema 1 confundiendo fluidez con veracidad, y es la razón de que un eslogan bien escrito convenza más que un argumento largo.",
        },
      ],
    },
  ],
};

export const SIETE_HABITOS: Resumen = {
  id: "siete-habitos",
  titulo: "Los 7 hábitos de la gente altamente efectiva",
  autor: "Stephen Covey",
  ano: 1989,
  gancho: "Estudió doscientos años de literatura sobre el éxito y encontró un corte claro en 1920: antes hablaban de carácter, después de técnicas.",
  porQue:
    "Cuarenta millones de ejemplares. Es el manual de desarrollo personal más vendido de la historia y sus siete reglas siguen siendo difíciles de rebatir.",
  partes: [
    {
      titulo: "El corte de 1920",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Covey hizo su tesis revisando toda la literatura sobre el éxito publicada en Estados Unidos desde 1776. Encontró un cambio nítido a partir de los años veinte: los libros anteriores hablaban de integridad, humildad, justicia y paciencia; los posteriores, de técnicas de personalidad, actitud positiva y habilidades para caer bien.",
        },
        {
          forma: "clave",
          rotulo: "Su diagnóstico",
          frase: "Se pasó de la ética del carácter a la ética de la personalidad. De ser bueno a parecerlo.",
        },
        {
          forma: "arte",
          texto:
            "Su objeción es práctica, no moral: las técnicas funcionan a corto plazo y se caen a la primera. Si tratas bien a alguien con una técnica pero por dentro le desprecias, lo acabará notando, porque comunicamos mucho más de lo que decimos. Lo que se sostiene en el tiempo es lo que uno es.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "De ahí su idea de los paradigmas: cada uno lleva un mapa mental del mundo y lo confunde con el mundo. Cambiar de conducta sin cambiar el mapa es andar más rápido en la dirección equivocada.",
        },
      ],
    },
    {
      titulo: "Los tres primeros: la victoria privada",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "<strong>Uno: sé proactivo.</strong> No significa tener iniciativa: significa que entre lo que te pasa y cómo respondes hay un espacio, y ese espacio es tuyo. Covey propone distinguir el <em>círculo de preocupación</em> —todo lo que te inquieta— del <em>círculo de influencia</em>, lo que puedes tocar. Quien invierte su energía en el primero, ve encogerse el segundo.",
        },
        {
          forma: "clave",
          rotulo: "Dos: empieza con el fin en mente",
          frase: "Imagina tu propio funeral y qué te gustaría que dijeran de ti los que hablen. Después trabaja hacia atrás.",
        },
        {
          forma: "texto",
          texto:
            "Es un ejercicio duro y es el corazón del libro. Suele revelar que lo que uno quiere que se diga de él no tiene nada que ver con aquello a lo que le dedica el día. De ahí sale su propuesta de escribir un enunciado personal de misión, en el que Covey insistía en que se tarda semanas.",
        },
        {
          forma: "arte",
          texto:
            "<strong>Tres: primero lo primero.</strong> Su matriz de cuatro cuadrantes cruza urgente con importante. Casi todo el mundo vive en lo urgente e importante —crisis— y en lo urgente y no importante —interrupciones, mensajes, reuniones ajenas—. Lo que casi nadie protege es el segundo cuadrante: importante y no urgente. Ahí están la salud, las relaciones, la planificación y el aprendizaje.",
          arte: "aprendizaje",
        },
      ],
    },
    {
      titulo: "Los tres siguientes: con los demás",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "<strong>Cuatro: piensa en ganar/ganar.</strong> Covey enumera seis posturas posibles ante otro —ganar/perder, perder/ganar, perder/perder, ganar sin más— y defiende que solo una es sostenible. Y añade una quinta opción que la gente olvida: si no hay acuerdo bueno para ambos, se puede acordar no hacer el trato.",
        },
        {
          forma: "clave",
          rotulo: "El quinto, el más citado",
          frase: "Busca primero entender, y después ser entendido. Casi nadie escucha para comprender: escucha para contestar.",
        },
        {
          forma: "texto",
          texto:
            "Su ejemplo es un óptico que, antes de examinarte, se quita sus gafas y te las da porque a él le van muy bien. Eso, dice, es lo que hacemos al dar consejos: recetamos antes de diagnosticar. Su propuesta es reformular lo que ha dicho el otro con tus palabras hasta que él confirme que lo has entendido — y solo entonces hablar.",
        },
        {
          forma: "texto",
          texto:
            "<strong>Seis: sinergia.</strong> Que la diferencia entre dos personas es el activo, no el problema. Si dos piensan igual, uno sobra. Y <strong>siete: afila la sierra</strong> — cuidar las cuatro dimensiones (física, mental, emocional y espiritual), porque quien sierra dieciséis horas sin parar a afilar corta cada vez menos.",
        },
      ],
    },
    {
      titulo: "Qué ha aguantado",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Su gran acierto es el orden. Los tres primeros hábitos van de uno mismo y los llama victoria privada; los tres siguientes, de los demás. Covey insiste en que no se pueden invertir: nadie puede colaborar de verdad con otros si depende emocionalmente de su aprobación. La independencia es requisito de la interdependencia.",
        },
        {
          forma: "clave",
          rotulo: "Lo que más se recuerda",
          frase: "El segundo cuadrante. Lo importante y no urgente es lo único que nunca te va a reclamar nadie.",
        },
        {
          forma: "arte",
          texto:
            "Sus pegas también son claras. Está escrito con un tono de sermón que hoy cansa, sus ejemplos son casi todos de ejecutivos estadounidenses de los años ochenta con esposa en casa, y su base es la experiencia del autor, no la evidencia — no hay estudios detrás de los siete hábitos.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Y hay un punto que se le critica con razón: parte de que casi todo depende de la actitud personal, y apenas menciona las circunstancias que uno no elige. Con esa reserva, sigue siendo el libro más completo del género, y el único cuyos consejos siguen sonando sensatos treinta y cinco años después.",
        },
        {
          forma: "texto",
          texto:
            "Su distinción entre la cuenta corriente y la cuenta emocional es de lo más aprovechable. Con cada persona importante tienes un saldo que sube con detalles pequeños y constantes —cumplir lo prometido, escuchar, pedir perdón— y baja de golpe con las decepciones. Nadie puede exigir una retirada grande si nunca ha ingresado nada. Covey señalaba que con la familia solemos suponer que el saldo está lleno precisamente donde menos lo alimentamos.",
        },
        {
          forma: "texto",
          texto:
            "Covey insistía en una idea que hoy suena a obviedad y entonces no lo era: que un hábito necesita las tres cosas a la vez —saber qué hacer, saber cómo hacerlo y querer hacerlo—. Si falta una, no se sostiene. Por eso los cursos de técnicas fracasan con quien no ve el motivo, y por eso la motivación sola tampoco basta.",
        },
      ],
    },
  ],
};

export const FLOW: Resumen = {
  id: "flow",
  titulo: "Fluir",
  autor: "Mihály Csíkszentmihályi",
  ano: 1990,
  gancho: "Preguntó a miles de personas ocho veces al día qué estaban haciendo y cómo se sentían. Descubrió que no somos felices descansando.",
  porQue:
    "Explica esos ratos en los que desaparece el tiempo, y demuestra que se pueden provocar a voluntad.",
  partes: [
    {
      titulo: "El buscapersonas",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Csíkszentmihályi inventó un método que hoy parece obvio y entonces no existía: dio buscapersonas a miles de voluntarios y les hizo sonar ocho veces al día, a horas aleatorias. Cada vez, la persona anotaba qué estaba haciendo, con quién y cómo se sentía. Recogió cientos de miles de instantáneas de vidas reales.",
        },
        {
          forma: "clave",
          rotulo: "El hallazgo que no esperaba",
          frase: "La gente disfrutaba mucho más trabajando que en su tiempo libre. Y aun así prefería el tiempo libre.",
        },
        {
          forma: "arte",
          texto:
            "Lo llamó la paradoja del trabajo. En el trabajo hay objetivos claros, información inmediata sobre si lo estás haciendo bien y un reto que ajusta tus capacidades. En el sofá, un domingo por la tarde, no hay nada de eso — y por eso el ocio pasivo produce mucho menos disfrute del que la gente cree.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Le interesó especialmente un estado que aparecía una y otra vez en pintores, cirujanos, escaladores y ajedrecistas, pero también en obreros de cadena de montaje y en cocineros. Lo describían igual en todos los idiomas: que se dejaban llevar por una corriente. De ahí el nombre.",
        },
      ],
    },
    {
      titulo: "Qué es fluir",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El estado tiene rasgos constantes. Desaparece la noción del tiempo: horas que pasan como minutos, o segundos que se estiran. Desaparece la conciencia de uno mismo — dejas de oír la voz que te evalúa. La acción y la atención se funden, y la actividad se vuelve gratificante en sí misma, al margen del resultado.",
        },
        {
          forma: "clave",
          rotulo: "La condición esencial",
          frase: "El reto tiene que estar justo por encima de tu nivel. Si es fácil te aburres; si es imposible te bloqueas.",
        },
        {
          forma: "arte",
          texto:
            "Ese equilibrio es lo que hace el estado inestable y perseguible a la vez: como al fluir mejoras, lo que ayer era un reto mañana aburre, y hay que subir la dificultad. Fluir empuja a mejorar sin que haga falta disciplina, porque la alternativa —quedarse igual— deja de ser agradable.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Las otras dos condiciones son igual de concretas. Un objetivo claro, para saber qué es hacerlo bien. Y respuesta inmediata: el escalador sabe al instante si el agarre aguanta, el cirujano ve el corte. Cuando falta ese retorno rápido, la atención se dispersa y no hay flujo posible.",
        },
      ],
    },
    {
      titulo: "El orden de la conciencia",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Su marco de fondo es que la atención es un recurso limitado —podemos procesar una cantidad finita de información por segundo— y que la calidad de una vida es, básicamente, en qué se ha gastado esa atención. No en qué te ha pasado: en dónde has puesto la cabeza.",
        },
        {
          forma: "clave",
          rotulo: "El estado por defecto",
          frase: "Cuando no hay nada que ocupe la atención, la mente vuelve al desorden: preocupaciones, rumiaciones, ansiedad difusa.",
        },
        {
          forma: "texto",
          texto:
            "Por eso, dice, la gente enciende la televisión: no porque le guste, sino porque cualquier información externa ordena la mente mejor que el vacío. Y por eso el aburrimiento auténtico es tan desagradable. Fluir es lo contrario del desorden — es la conciencia entera apuntando a un solo sitio.",
        },
        {
          forma: "texto",
          texto:
            "Su parte más emocionante recoge casos de personas que consiguieron fluir en circunstancias terribles: presos que convirtieron la celda en un problema mental que resolver, trabajadores de fábrica que competían consigo mismos. Su tesis es que casi cualquier actividad puede transformarse si le pones objetivos, reglas y medición propia.",
        },
      ],
    },
    {
      titulo: "Lo que se le discute",
      tarjetas: [
        {
          forma: "arte",
          texto:
            "El concepto salió del laboratorio y se lo llevó todo el mundo. Los diseñadores de videojuegos lo usan explícitamente para calibrar la dificultad; el deporte de élite lo llama «la zona»; y las empresas montaron programas de productividad basados en él. Es de los conceptos psicológicos más exportados del siglo.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Y de ahí vienen sus problemas. La misma mecánica que hace absorbente un buen trabajo hace absorbente una tragaperras o un feed infinito: objetivos claros, respuesta inmediata, dificultad ajustada. Csíkszentmihályi era consciente y distinguía entre flujo que construye algo y flujo que solo consume tiempo, pero el matiz se pierde casi siempre.",
        },
        {
          forma: "clave",
          rotulo: "La crítica académica",
          frase: "Es difícil de medir con precisión, y sus datos dependen de lo que la gente dice sentir, no de nada observable.",
        },
        {
          forma: "texto",
          texto:
            "Como lectura es más denso que sus imitadores: hay páginas de teoría de la información y de psicología evolutiva que se pueden saltar. Lo aprovechable cabe en poco — protege ratos largos sin interrupciones, ponte retos un poco por encima de lo que sabes, y busca actividades donde sepas al momento si vas bien.",
        },
        {
          forma: "texto",
          texto:
            "Su consejo más contraintuitivo tiene que ver con el ocio. Csíkszentmihályi encontró que las actividades pasivas —televisión, mirar sin más— producen niveles de disfrute muy bajos, y aun así ocupan la mayor parte del tiempo libre, porque cuestan cero energía empezarlas. Las que sí generan flujo requieren un empujón inicial: sacar la guitarra, ponerse las zapatillas, abrir el cuaderno. Toda la diferencia está en esos treinta segundos de arranque.",
        },
        {
          forma: "texto",
          texto:
            "Su definición de personalidad autotélica describe a quien consigue entrar en flujo casi en cualquier parte: gente capaz de convertir una espera, una tarea rutinaria o una conversación en un pequeño reto con reglas propias. Csíkszentmihályi sostenía que no es un rasgo con el que se nace, sino una costumbre que se entrena.",
        },
      ],
    },
  ],
};

export const EDUCADA: Resumen = {
  id: "educada",
  titulo: "Una educación",
  autor: "Tara Westover",
  ano: 2018,
  gancho: "Pisó un aula por primera vez a los diecisiete años. Diez años después era doctora por Cambridge.",
  porQue:
    "Unas memorias que se leen como una novela y que plantean la pregunta más difícil: qué haces cuando educarte te separa de tu familia.",
  partes: [
    {
      titulo: "Sin partida de nacimiento",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Tara Westover creció en una montaña de Idaho, la menor de siete hermanos de una familia mormona fundamentalista. Su padre desconfiaba del gobierno, de los médicos y de las escuelas públicas: creía que el fin del mundo era inminente y preparaba a la familia para sobrevivir a él. Ninguno de los hijos pequeños fue registrado al nacer.",
        },
        {
          forma: "clave",
          rotulo: "El punto de partida",
          frase: "No fue al colegio. No tuvo historial médico. Oficialmente, durante años, no constaba que existiera.",
        },
        {
          forma: "arte",
          texto:
            "Trabajó desde niña en el desguace familiar, manejando chatarra y maquinaria pesada sin ninguna protección. El libro describe accidentes graves —quemaduras, caídas, un hermano con la cabeza abierta— que se trataban en casa con remedios caseros de su madre, que ejercía de partera y herborista. Nunca pisaron un hospital.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Cuenta también la violencia de uno de sus hermanos mayores, que la agredía repetidamente, y algo más difícil de asimilar: cómo el resto de la familia construía versiones alternativas de lo ocurrido hasta que ella misma dudaba de su memoria.",
        },
      ],
    },
    {
      titulo: "El examen",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Un hermano mayor que se había marchado a estudiar le dijo que podía presentarse a la prueba de acceso a la universidad sin haber ido nunca al instituto. Ella se compró libros de texto y estudió a escondidas, empezando por álgebra que no había visto en su vida. Suspendió la primera vez. La segunda entró en la Universidad Brigham Young.",
        },
        {
          forma: "clave",
          rotulo: "Su primera clase",
          frase: "Levantó la mano para preguntar qué significaba una palabra que no conocía: «Holocausto». La clase se quedó en silencio.",
        },
        {
          forma: "arte",
          texto:
            "Esa escena resume el libro. No era ignorancia por torpeza: era que nadie se lo había contado nunca. Tampoco sabía qué había sido el movimiento por los derechos civiles, ni cómo se tomaba un analgésico, ni que había que lavarse las manos al salir del baño — eso último se lo enseñó una compañera de piso, con vergüenza ajena.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Sacó las notas suficientes para una beca en Cambridge, después otra en Harvard, y terminó doctorándose en historia intelectual en Cambridge a los veintisiete años. Diez años después de entrar por primera vez en un aula.",
        },
      ],
    },
    {
      titulo: "El precio",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La segunda mitad del libro no va de logros académicos: va de lo que le costó. Cada cosa que aprendía la alejaba un poco más de su familia, y su padre interpretó su educación como una traición y una posesión demoníaca. Le exigieron que eligiera.",
        },
        {
          forma: "clave",
          rotulo: "La pregunta del libro",
          frase: "¿Qué haces cuando para entenderte a ti mismo tienes que aceptar que la gente que te crió mentía?",
        },
        {
          forma: "texto",
          texto:
            "Lo más doloroso no es el enfrentamiento sino la duda. Westover describe años enteros preguntándose si estaba loca, si se inventaba los recuerdos, si tenían razón. Cuando denunció los abusos de su hermano, parte de la familia se puso del lado de él, y su propia memoria empezó a parecerle poco fiable.",
        },
        {
          forma: "arte",
          texto:
            "El libro es honesto con sus límites como testimonio. Incluye notas al pie donde reconoce que otro hermano recuerda un episodio de otra manera, y no lo resuelve. Esa decisión —dejar la contradicción a la vista en vez de imponer su versión— es lo que le da autoridad al resto.",
          arte: "escritor",
        },
      ],
    },
    {
      titulo: "Qué es educarse",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Su definición de educación no tiene que ver con títulos. Escribe que educarse no es aprender datos, sino ganar la capacidad de sostener una opinión propia frente a las personas que más quieres. Y que eso, y no los exámenes, es lo difícil.",
        },
        {
          forma: "clave",
          rotulo: "Lo que rechaza",
          frase: "Se niega a llamarlo una historia de superación. Dice que no ganó nada: cambió una cosa por otra.",
        },
        {
          forma: "texto",
          texto:
            "Al terminar el libro está distanciada de sus padres y de varios hermanos, y no lo presenta como un final feliz. Su conclusión es que uno puede querer a su familia y no poder vivir con ella, y que aceptar eso sin convertirlo en un ajuste de cuentas es lo más adulto que consiguió hacer.",
        },
        {
          forma: "texto",
          texto:
            "Hay que decir que su versión ha sido discutida: parte de su familia niega buena parte de lo relatado. No hay forma de verificarlo desde fuera, y el propio libro no lo esconde. Con eso puesto, vendió millones de ejemplares y es de las pocas memorias recientes que se leen de un tirón sin sentir que te están vendiendo una lección.",
        },
        {
          forma: "texto",
          texto:
            "El título original juega con algo que la traducción pierde: en inglés es una sola palabra, «educada», usada como acusación y como conquista a la vez. Es lo que su padre le reprocha —te han educado y por eso ya no eres de los nuestros— y lo que ella termina reclamando como suyo. Todo el conflicto del libro cabe en esa palabra.",
        },
        {
          forma: "texto",
          texto:
            "Westover escribió el libro mientras terminaba el doctorado, y tardó años en decidirse a publicarlo. Ha contado que lo más difícil no fue recordar sino elegir qué contar sabiendo que su familia lo leería, y que evitó a propósito el tono de denuncia porque no quería que se leyera como una venganza.",
        },
      ],
    },
  ],
};

export const NUDGE: Resumen = {
  id: "nudge",
  titulo: "Un pequeño empujón",
  autor: "Thaler y Sunstein",
  ano: 2008,
  gancho: "Retiró el cuenco de anacardos antes de cenar y sus invitados le dieron las gracias. Un economista no debería alegrarse de tener menos opciones.",
  porQue:
    "Cambió cómo diseñan políticas media docena de gobiernos, le dio un Nobel a su autor, y quince años después la mitad de sus pruebas están en discusión.",
  partes: [
    {
      titulo: "El cuenco de anacardos",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Una casa en Rochester, años setenta. Un profesor de economía ha invitado a cenar a unos colegas. Antes de sentarse a la mesa, saca un cuenco grande de anacardos. La gente empieza a comer y sigue comiendo, y va a llegar a la cena sin hambre.",
        },
        {
          forma: "texto",
          texto:
            "El anfitrión, Richard Thaler, coge el cuenco y lo lleva a la cocina. Cuando vuelve, sus invitados —todos economistas— le dan las gracias. Y entonces se dan cuenta, todos a la vez, de que acaban de agradecer que les quitaran una opción.",
        },
        {
          forma: "clave",
          rotulo: "Por qué eso es un problema",
          frase: "En la teoría económica estándar, tener más alternativas nunca puede empeorarte: si no querías los anacardos, no los comes. Que la gente agradezca perder una opción significa que el modelo está mal.",
        },
        {
          forma: "texto",
          texto:
            "De esa cena sale la carrera entera de Thaler. Se pasó treinta años recopilando situaciones en las que las personas hacen sistemáticamente lo contrario de lo que la teoría predice, y en 2017 le dieron el Nobel de Economía por haberlas convertido en una disciplina.",
        },
        {
          forma: "texto",
          texto:
            "El libro lo firma con Cass Sunstein, catedrático de Derecho en Harvard, que después dirigiría la oficina de regulación de la Casa Blanca con Obama. Uno pone la psicología económica y el otro la maquinaria legal. Es la combinación que explica que esto acabara en gobiernos.",
        },
        {
          forma: "texto",
          texto:
            "El punto de partida es la distinción entre dos criaturas. Están los econs, que son los seres que pueblan los modelos: calculan bien, tienen preferencias estables, no se dejan influir por cómo se les presenta una opción y siempre eligen lo que les conviene.",
        },
        {
          forma: "arte",
          texto:
            "Y están los humanos, que comen anacardos antes de cenar, no cambian de tarifa aunque salga más barato, no abren la carta del banco, se apuntan al gimnasio en enero y firman lo que sea si viene marcado por defecto. La economía llevaba un siglo legislando para los primeros.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Los autores toman de Kahneman la idea de dos sistemas de pensamiento. Ellos los llaman automático y reflexivo. El automático es rápido, intuitivo y no cuesta esfuerzo; el reflexivo es lento, deliberado y perezoso. Casi todas las decisiones del día las toma el primero.",
        },
        {
          forma: "texto",
          texto:
            "Y de ahí sale la lista de sesgos que el libro repasa. El anclaje: cualquier número que se te ponga delante contamina tu estimación posterior, aunque sea irrelevante. La disponibilidad: juzgas la probabilidad de algo por lo fácil que te resulta recordar un caso.",
        },
        {
          forma: "texto",
          texto:
            "El optimismo poco realista: alrededor del noventa por ciento de los conductores se considera mejor que la media. La aversión a la pérdida: perder cien euros duele aproximadamente el doble de lo que alegra ganarlos, y eso deforma toda decisión con riesgo.",
        },
        {
          forma: "clave",
          rotulo: "El sesgo que da nombre al libro",
          frase: "El statu quo. La gente se queda donde está por defecto, no porque lo prefiera, sino porque cambiar exige una decisión y decidir cuesta.",
        },
        {
          forma: "texto",
          texto:
            "El ejemplo que usan es de los que se recuerdan: durante años, los planes de pensiones de empresa venían con una asignación por defecto, y los empleados podían cambiarla. Décadas después, la mayoría seguía exactamente en la opción que le habían puesto el primer día.",
        },
        {
          forma: "texto",
          texto:
            "Y de ahí nace el concepto central del libro, que es el que de verdad importa: la arquitectura de las decisiones. Alguien tiene que decidir en qué orden aparecen las opciones, cuál viene marcada, cómo se redacta el formulario. Esa persona es un arquitecto de decisiones.",
        },
        {
          forma: "texto",
          texto:
            "Y la afirmación que hace que todo lo demás se siga: no existe una presentación neutra. Un menú tiene que tener un orden. Un formulario tiene que tener una casilla por defecto o ninguna, y las dos cosas son decisiones. La neutralidad no está disponible.",
        },
        {
          forma: "arte",
          texto:
            "Ese es el mejor argumento del libro y el más difícil de rebatir. Quien se opone a los empujones suele proponer que se deje a la gente elegir libremente, sin darse cuenta de que el marco en el que elige ya lo ha diseñado alguien, y casi siempre sin pensarlo.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale la etiqueta que los autores se ponen y que ha generado más discusión que ninguna otra cosa: paternalismo libertario. Paternalismo porque se orienta hacia lo que se considera mejor. Libertario porque no se prohíbe nada y salirse cuesta poco o nada.",
        },
        {
          forma: "texto",
          texto:
            "La definición técnica de empujón es estricta y conviene retenerla: cualquier cambio en la arquitectura de las decisiones que altere el comportamiento de forma predecible, sin prohibir ninguna opción y sin cambiar significativamente los incentivos económicos.",
        },
        {
          forma: "texto",
          texto:
            "Eso deja fuera muchas cosas que la gente llama empujón. Una multa no lo es, porque cambia los incentivos. Una prohibición no lo es. Un impuesto tampoco. Colocar la fruta a la altura de los ojos sí, porque las patatas fritas siguen ahí y siguen costando lo mismo.",
        },
        {
          forma: "texto",
          texto:
            "Los autores ponen además un límite ético que repiten varias veces: el principio de publicidad. Nunca se debe diseñar un empujón que no se pueda defender en público delante de los que lo van a recibir. Si hay que ocultarlo, no es un empujón: es una manipulación.",
        },
        {
          forma: "texto",
          texto:
            "Y para explicar todo esto, el libro recurre a un ejemplo que ha acabado siendo más famoso que el propio libro y que está grabado en la porcelana de un aeropuerto holandés.",
        },
      ],
    },

    {
      titulo: "La mosca del urinario",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Aeropuerto de Schiphol, Ámsterdam. Alguien del equipo de limpieza propone grabar una pequeña mosca negra en la porcelana de los urinarios masculinos, cerca del desagüe. No hay cartel, no hay instrucción, no hay multa. Solo un dibujo de un insecto.",
        },
        {
          forma: "texto",
          texto:
            "Los hombres apuntan a la mosca. Según las cifras que cita el libro, las salpicaduras fuera del urinario cayeron alrededor de un ochenta por ciento y los costes de limpieza bajaron sensiblemente. Nadie prohibió nada y nadie supo que estaba siendo dirigido.",
        },
        {
          forma: "clave",
          rotulo: "Por qué funciona",
          frase: "No apela a la conciencia, a la norma ni al bolsillo. Le da al sistema automático una diana, que es lo único que necesitaba para hacer bien una tarea que a nadie le importa.",
        },
        {
          forma: "texto",
          texto:
            "El segundo ejemplo del libro es un comedor escolar. Una directora de servicios de alimentación, a la que llaman Carolyn, descubre que reordenando la comida en la barra puede subir o bajar el consumo de casi cualquier plato en torno a un veinticinco por ciento.",
        },
        {
          forma: "texto",
          texto:
            "No cambia el menú, no sube precios, no quita nada. Solo mueve la fruta a la altura de los ojos y las patatas al final de la fila. Y entonces le llega la pregunta que estructura el capítulo: ¿qué es lo correcto que debería hacer con ese poder?",
        },
        {
          forma: "texto",
          texto:
            "Los autores enumeran sus opciones. Colocar la comida para maximizar la salud. Colocarla al azar. Colocarla como quisieran los niños si pensaran con calma. Colocarla para maximizar beneficios. Lo único que no puede hacer es no colocarla de ninguna manera.",
        },
        {
          forma: "arte",
          texto:
            "Ese es el argumento del cuchillo. Una vez que se entiende que la disposición influye, la inacción deja de ser neutral y pasa a ser una decisión más, tomada sin criterio. El libro no pide que se empuje: señala que ya se está empujando, casi siempre sin querer.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale un catálogo de herramientas que el libro ordena, y la primera y más potente de todas es la opción por defecto. Lo que viene marcado se queda marcado. Es el instrumento más barato, más eficaz y también el más discutible que existe.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es esperar el error. Diseñar sabiendo que la gente se va a equivocar: la tarjeta del cajero que hay que retirar antes de que salga el dinero, el tapón del depósito de gasolina atado al coche, el enchufe que solo entra de una manera.",
        },
        {
          forma: "texto",
          texto:
            "La tercera es la retroalimentación. La gente no aprende de decisiones cuyo resultado no ve, y muchas decisiones importantes son así: nadie percibe el gasto de electricidad mientras lo gasta. Poner un contador visible cambia el consumo sin cambiar la tarifa.",
        },
        {
          forma: "clave",
          rotulo: "La cuarta herramienta",
          frase: "La norma social. Decirle a alguien lo que hace la mayoría de la gente parecida a él es uno de los mensajes más eficaces que existen, y también uno de los que más fácil sale al revés.",
        },
        {
          forma: "texto",
          texto:
            "El libro cuenta el experimento que lo demuestra en las dos direcciones. Se informó a hogares de cuánta electricidad consumían comparados con sus vecinos. Los que gastaban mucho bajaron. Y los que gastaban poco subieron, porque descubrieron que tenían margen.",
        },
        {
          forma: "texto",
          texto:
            "La solución que encontraron es de una simpleza casi cómica: añadir una carita sonriente al mensaje de los que consumían poco. Con eso, el efecto rebote desapareció. Un emoticono impreso en una factura sostuvo un ahorro de energía a escala de miles de hogares.",
        },
        {
          forma: "texto",
          texto:
            "También está el efecto contrario, el que los autores llaman contraproducente. Las campañas que dicen que mucha gente hace algo mal —evade impuestos, tira basura, no vota— comunican sin querer que eso es lo normal, y normalizan exactamente lo que querían combatir.",
        },
        {
          forma: "texto",
          texto:
            "El ejemplo que dan es de un parque nacional americano con un cartel que avisaba de que muchos visitantes se llevaban madera petrificada. Al cambiarlo por un mensaje que señalaba a los pocos que lo hacían como una excepción, los robos bajaron notablemente.",
        },
        {
          forma: "arte",
          texto:
            "De ahí sale la regla práctica más aprovechable del libro: si quieres que la gente haga algo, cuéntale que la mayoría ya lo hace, siempre que sea verdad. Y si es falso, no lo digas, porque decir que casi nadie lo hace es garantizar que siga sin hacerlo.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "El libro añade una herramienta más, pensada para decisiones complejas: la simplificación de la información. Sostiene que la mayoría de la letra pequeña no informa a nadie, y propone obligar a que los datos clave se publiquen en formatos comparables y legibles por máquinas.",
        },
        {
          forma: "texto",
          texto:
            "Su ejemplo son las tarifas de móvil y de tarjetas de crédito. Nadie compara veinte contratos de treinta páginas. Todo el mundo compararía si existiera un fichero estándar que un comparador pudiera leer. Eso no prohíbe nada y cambia la competencia entera de un sector.",
        },
        {
          forma: "texto",
          texto:
            "Con el catálogo montado, la segunda mitad del libro lo aplica a tres terrenos concretos: el ahorro para la jubilación, la sanidad y el medio ambiente. Y el primero es donde el efecto medido es más grande y menos discutido de todos.",
        },
        {
          forma: "texto",
          texto:
            "Porque hay un problema con el ahorro que ningún incentivo resuelve: la gente sabe perfectamente que debería ahorrar más, quiere ahorrar más, y no lo hace. No es un problema de información ni de convicción. Es un problema de que hoy siempre gana a mañana.",
        },
      ],
    },

    {
      titulo: "Ahorra más mañana",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Estados Unidos, finales de los noventa. Thaler y el economista Shlomo Benartzi diseñan un programa para una empresa mediana cuyos empleados ahorraban poco. La idea es tan sencilla que cuesta creer que funcione: pedirles que se comprometan a ahorrar más, pero en el futuro.",
        },
        {
          forma: "texto",
          texto:
            "El acuerdo consiste en que cada vez que el trabajador reciba una subida de sueldo, una parte de ese incremento irá automáticamente al plan de pensiones. No baja su nómina actual ni un céntimo. Simplemente decide hoy cómo repartir un dinero que aún no tiene.",
        },
        {
          forma: "clave",
          rotulo: "Ahorra más mañana",
          frase: "Explota tres sesgos a la vez y a favor: es fácil comprometerse con el futuro, no se percibe como pérdida porque la nómina nunca baja, y hay que dar un paso activo para salirse.",
        },
        {
          forma: "texto",
          texto:
            "Los resultados que reporta el libro son de los más citados de la economía del comportamiento: entre los empleados que se apuntaron, la tasa de ahorro se multiplicó a lo largo de varios aumentos de sueldo, y la mayoría siguió en el programa años después.",
        },
        {
          forma: "texto",
          texto:
            "El otro caso es todavía más simple y ha tenido más impacto legislativo. En los planes de pensiones de empresa americanos, cambiar la inscripción de voluntaria a automática —con derecho a salirse en cualquier momento— dispara la participación de en torno a la mitad a más del noventa por ciento.",
        },
        {
          forma: "texto",
          texto:
            "Ni un euro de incentivo. Nadie obligado. La misma decisión y las mismas opciones, con la casilla marcada del otro lado. Ese dato es el más sólido del libro y el que llevó a que la ley americana de pensiones de 2006 fomentara explícitamente la inscripción automática.",
        },
        {
          forma: "arte",
          texto:
            "Es también el mejor argumento contra quien diga que los empujones son irrelevantes. Un cambio en la casilla por defecto de un formulario movió el comportamiento de ahorro de millones de personas más que décadas de campañas de educación financiera.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "El caso de la donación de órganos es el más famoso y también el peor entendido. Los datos que citan son espectaculares: países con consentimiento presunto rondan tasas de consentimiento del noventa y muchos por ciento; países con consentimiento expreso se quedan en cifras de un dígito o poco más.",
        },
        {
          forma: "texto",
          texto:
            "Alemania y Austria son el ejemplo de manual: dos países vecinos, culturalmente próximos, con tasas separadas por decenas de puntos. La única diferencia relevante es qué pasa si no rellenas el formulario.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, la parte que casi nadie cita: Thaler y Sunstein no defienden el consentimiento presunto. Lo consideran demasiado agresivo, porque presume la voluntad de alguien que quizá nunca se enteró. Lo que proponen es otra cosa, la elección obligatoria.",
        },
        {
          forma: "clave",
          rotulo: "Elección obligatoria",
          frase: "Al renovar el carné de conducir hay que marcar sí o no, sin defecto y sin poder saltarse la pregunta. Se preserva la decisión y se elimina la inercia. Illinois lo aplicó con tasas muy altas.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un matiz importantísimo que el libro sí menciona y que la divulgación posterior perdió: las tasas de consentimiento no son tasas de donación efectiva. España lleva décadas siendo líder mundial en trasplantes y no es por la ley, que es de consentimiento presunto como en muchos sitios.",
        },
        {
          forma: "texto",
          texto:
            "Es por un sistema de coordinadores de trasplante en cada hospital, formación específica, logística y conversación con las familias. La ley por sí sola no mueve la aguja. El empujón funcionó en el papel y lo que salva vidas es la infraestructura detrás.",
        },
        {
          forma: "texto",
          texto:
            "En sanidad, el libro analiza el programa americano de medicamentos para mayores, que ofrecía decenas de planes distintos con coberturas difíciles de comparar. Concluye que dar cuarenta opciones a un jubilado de ochenta años no es libertad de elección: es abandono con buena prensa.",
        },
        {
          forma: "texto",
          texto:
            "Su propuesta es la de siempre: no reducir las opciones, sino poner un defecto razonable y publicar los datos en formato comparable para que aparezcan comparadores. Es un patrón que se repite en todo el libro y que ha sido su exportación más duradera.",
        },
        {
          forma: "arte",
          texto:
            "Los autores también dedican espacio a lo que llaman empujones malos, y el término que se ha popularizado después es sludge: fricción deliberada para que no hagas algo. Suscribirse en dos clics y darse de baja con una llamada telefónica en horario de oficina.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Ese concepto ha resultado más útil que muchos empujones positivos, porque describe una práctica masiva y perfectamente medible: todo el diseño de las suscripciones, las cookies, los seguros y los reembolsos está lleno de fricción puesta a propósito.",
        },
        {
          forma: "texto",
          texto:
            "Thaler ha insistido mucho en esto en los últimos años, hasta el punto de decir que combatir el sludge probablemente rinda más que diseñar empujones nuevos, porque quitar obstáculos no plantea ninguno de los problemas éticos que plantea dirigir.",
        },
        {
          forma: "texto",
          texto:
            "El libro salió en 2008, justo cuando estallaba la crisis financiera, y su recorrido posterior fue vertiginoso. En dos años, dos gobiernos importantes habían montado equipos oficiales para aplicar estas ideas a la administración pública.",
        },
        {
          forma: "texto",
          texto:
            "Uno de ellos empezó siendo siete personas en un despacho pequeño de Downing Street, con un plazo de dos años para justificar su existencia o cerrar. Se le conoció enseguida por un apodo que sus fundadores nunca eligieron.",
        },
      ],
    },

    {
      titulo: "La unidad de empujones",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Londres, 2010. El gobierno británico crea un equipo llamado Behavioural Insights Team, con siete personas, dentro de la oficina del primer ministro. La prensa lo bautiza inmediatamente como la unidad de empujones, y el nombre se queda para siempre.",
        },
        {
          forma: "texto",
          texto:
            "Se le pone una condición dura: en dos años tiene que demostrar un ahorro de al menos diez veces su coste o se disuelve. Y una regla de método que es lo que de verdad lo hizo distinto: todo se prueba con experimentos controlados y aleatorizados antes de generalizarlo.",
        },
        {
          forma: "clave",
          rotulo: "Cartas de Hacienda",
          frase: "Añadir una frase a las cartas de reclamación —que la gran mayoría de los contribuyentes de su zona ya había pagado a tiempo— aumentó de forma medible los pagos. Coste del cambio: cero.",
        },
        {
          forma: "texto",
          texto:
            "Ese experimento es el que se cita siempre porque tiene las tres propiedades que buscaba el equipo: efecto claro, coste nulo y verificable con un ensayo real de decenas de miles de cartas divididas al azar en grupos con distintos textos.",
        },
        {
          forma: "texto",
          texto:
            "Hicieron muchos más. Cambiar el formulario de un programa de empleo para que el desempleado escribiera lo que iba a hacer la semana siguiente en lugar de lo que había hecho la anterior. Mandar mensajes de texto recordando multas antes de que fueran a ejecución.",
        },
        {
          forma: "texto",
          texto:
            "La unidad sobrevivió, se convirtió en una empresa semipública en 2014 y hoy trabaja en decenas de países. Estados Unidos creó su propio equipo en 2015, y organismos como la OCDE y el Banco Mundial montaron los suyos. En una década pasó de idea de libro a práctica administrativa.",
        },
        {
          forma: "arte",
          texto:
            "Su aportación más valiosa quizá no sea ningún empujón concreto sino el método: obligar a la administración pública a probar sus propias políticas con grupos de control, en vez de aprobarlas porque suenan razonables. Eso vale igual aunque el empujón no funcione.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Thaler ganó el Nobel en 2017. En la rueda de prensa le preguntaron qué iba a hacer con el dinero del premio y contestó que intentaría gastarlo de la forma más irracional posible. Es la mejor broma que ha hecho un premiado, y también un resumen de su obra.",
        },
        {
          forma: "texto",
          texto:
            "Firma sus libros con una fórmula fija: empujar para bien. Y ha declarado varias veces que su mayor preocupación es que las mismas técnicas se usen en la dirección contraria, que es exactamente lo que ha ocurrido en la economía digital.",
        },
        {
          forma: "texto",
          texto:
            "Porque el sector que mejor ha aprendido esta literatura no es el público: es el de las aplicaciones. Cuentas atrás falsas, casillas premarcadas, botones de cancelar en gris claro, avisos de que quedan dos habitaciones. Todo eso son empujones ejecutados con precisión industrial.",
        },
        {
          forma: "clave",
          rotulo: "La objeción de la manipulación",
          frase: "Si un empujón funciona porque no te das cuenta, ¿en qué sentido has elegido? Los autores contestan con el principio de publicidad, y esa respuesta convence solo a medias.",
        },
        {
          forma: "texto",
          texto:
            "La crítica más elaborada vino de filósofos y de juristas: que el paternalismo libertario asume que existe una versión mejor informada de ti a la que el arquitecto tiene acceso, y que en la práctica ese arquitecto es un funcionario o una empresa con intereses propios.",
        },
        {
          forma: "texto",
          texto:
            "Hay además una objeción política que ha ganado fuerza con los años: los empujones son baratos, y por eso resultan tentadores como sustituto de políticas caras. Es más cómodo empujar a la gente a ahorrar que subir los salarios o mejorar las pensiones públicas.",
        },
        {
          forma: "texto",
          texto:
            "Los propios autores han aceptado parte de esa crítica. Sunstein ha escrito que los empujones no son un sustituto de la regulación cuando hay un daño claro, y que nadie debería proponer una campaña de concienciación frente a un vertido tóxico.",
        },
        {
          forma: "texto",
          texto:
            "Y hay otra limitación técnica que se ha hecho evidente con el tiempo: los efectos suelen ser pequeños. Un empujón bueno mueve unos pocos puntos porcentuales. Eso es enorme cuando se aplica a millones de cartas y es irrelevante para un problema que requiere un cambio de escala.",
        },
        {
          forma: "arte",
          texto:
            "El propio Thaler ha dicho que si tuviera que quedarse con un consejo sería el más aburrido de todos: si quieres que la gente haga algo, hazlo fácil. No inspirador, no persuasivo. Fácil. Quitar un paso de un formulario rinde más que la mejor campaña.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Ese consejo, además, ha resistido todo lo que vino después. Porque a partir de 2015 la economía del comportamiento entró en una crisis que ha afectado a buena parte de sus resultados publicados, y que obliga a releer este libro con una lista de excepciones en la mano.",
        },
        {
          forma: "texto",
          texto:
            "La crisis empezó en psicología social, con un proyecto que intentó repetir cien experimentos famosos y consiguió reproducir menos de la mitad. Y de ahí se extendió a los campos vecinos, entre ellos varios de los que sostienen los capítulos de este libro.",
        },
        {
          forma: "texto",
          texto:
            "Hay que decirlo con precisión, porque la reacción fácil es tirarlo todo y es tan equivocada como creérselo todo. Algunos resultados han aguantado perfectamente. Otros se han desinflado. Y en un par de casos ocurrió algo mucho peor que un experimento que no se repite.",
        },
        {
          forma: "texto",
          texto:
            "En 2021, unos investigadores independientes se sentaron a revisar los datos brutos de un estudio muy famoso sobre honestidad, publicado en 2012, y encontraron algo que no se puede explicar con estadística ni con azar.",
        },
      ],
    },

    {
      titulo: "La crisis de replicación",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Agosto de 2021. Un blog de investigadores especializados en detectar fraude publica un análisis de los datos de un estudio de 2012 sobre honestidad. El experimento decía que firmar una declaración al principio de un formulario, en lugar de al final, reducía las mentiras.",
        },
        {
          forma: "texto",
          texto:
            "Los datos venían de una aseguradora real y de miles de clientes declarando su kilometraje. Al examinarlos, los analistas encontraron señales inequívocas de fabricación: una distribución imposible, kilómetros generados con una función aleatoria y duplicados con dos tipografías distintas.",
        },
        {
          forma: "clave",
          rotulo: "La ironía",
          frase: "El estudio más famoso sobre cómo conseguir que la gente sea honesta contenía datos inventados. Se retractó en 2021 y sigue sin saberse quién los fabricó.",
        },
        {
          forma: "texto",
          texto:
            "Dos de los coautores del artículo, ambos figuras de primera línea de la economía del comportamiento, quedaron bajo sospecha en investigaciones separadas por otros trabajos. Uno de ellos fue apartado por su universidad tras una investigación interna sobre varios estudios.",
        },
        {
          forma: "texto",
          texto:
            "Conviene aclarar que Thaler y Sunstein no están implicados en nada de eso. Pero el episodio golpeó la credibilidad del campo entero, porque durante quince años los libros de divulgación —este incluido— habían presentado ese tipo de resultados como hechos establecidos.",
        },
        {
          forma: "texto",
          texto:
            "La segunda parte de la crisis es más técnica y más importante. En 2022 se publicó un metaanálisis que reunía cientos de estudios de empujones y concluía que el efecto medio era pequeño pero real y aprovechable. Fue muy citado como la confirmación definitiva.",
        },
        {
          forma: "arte",
          texto:
            "Meses después, otro equipo reanalizó exactamente los mismos datos aplicando correcciones por sesgo de publicación —el hecho de que los estudios con resultado nulo casi nunca se publican— y encontró que el efecto agregado se volvía indistinguible de cero.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Eso no significa que los empujones no funcionen nunca. Significa que la literatura publicada está contaminada, que hay muchos experimentos fallidos que nunca vieron la luz, y que no se puede saber el tamaño real del efecto medio a partir de lo que hay publicado.",
        },
        {
          forma: "texto",
          texto:
            "Los que sí han aguantado son, casualmente, los menos ingeniosos. La inscripción automática en planes de pensiones tiene efectos enormes y replicados en muchos países. Los recordatorios por mensaje funcionan. Quitar pasos de un trámite funciona. Los defectos funcionan.",
        },
        {
          forma: "texto",
          texto:
            "Los que se han desinflado son los brillantes: los que dependen de un mensaje inteligente, de un encuadre sutil o de activar una emoción concreta. Justo los que quedan mejor en una charla y peor en una réplica independiente con muestra grande.",
        },
        {
          forma: "clave",
          rotulo: "La regla que queda",
          frase: "Cambiar la estructura funciona. Cambiar el mensaje funciona mucho menos de lo que se dijo. Lo primero es aburrido y sólido; lo segundo es vistoso y frágil.",
        },
        {
          forma: "texto",
          texto:
            "Los autores publicaron en 2021 una edición revisada, subtitulada la edición final, en la que recogen parte de estas críticas, retiran algún ejemplo, matizan otros y añaden capítulos sobre el sludge y sobre el cambio climático. No es un mea culpa, pero es un ajuste sincero.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, dónde falla el libro más allá de la replicación. La primera cosa es de estilo: la segunda mitad está muy centrada en instituciones estadounidenses —planes de pensiones, seguros médicos, hipotecas— y para un lector europeo buena parte de esos capítulos son opacos.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es que confía demasiado en el arquitecto. El libro asume implícitamente un diseñador bienintencionado, y dedica poquísimas páginas a lo que ocurre cuando el que diseña la arquitectura de decisiones es alguien que gana dinero con que tú te equivoques.",
        },
        {
          forma: "texto",
          texto:
            "La tercera es la que más ha pesado políticamente: al presentar los problemas como fallos de decisión individual, se corre el riesgo de convertir cuestiones estructurales en cuestiones de diseño de formularios. Que la gente no ahorre puede ser un sesgo o puede ser el sueldo.",
        },
        {
          forma: "arte",
          texto:
            "Y una cuarta, de fondo: la propia idea de empujar hacia lo que la gente elegiría si pensara mejor supone que existe una preferencia verdadera detrás de la equivocada. En muchos casos eso es cuestionable, y el libro lo despacha en un par de párrafos.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Lo que casi todo el mundo cree y no es verdad. Primero: un empujón no es cualquier técnica para influir. Si prohíbe, si multa o si cambia el precio, no es un empujón. Casi todo lo que se llama nudge en los medios queda fuera de la definición de los autores.",
        },
        {
          forma: "texto",
          texto:
            "Segundo: el libro no defiende el consentimiento presunto para la donación de órganos. Defiende la elección obligatoria, que es lo contrario de un defecto. Es probablemente el malentendido más repetido de todos y aparece en la mitad de los artículos que lo citan.",
        },
        {
          forma: "texto",
          texto:
            "Y tercero, el que más pena da: la mosca del urinario no es el hallazgo del libro, es su anécdota. Lo importante son las casillas por defecto en los planes de pensiones, que han movido miles de millones y que no salen en ninguna charla porque no tienen gracia.",
        },
        {
          forma: "texto",
          texto:
            "Lo que queda en pie es la idea del principio, y es la que no depende de ningún experimento. Alguien tiene que decidir en qué orden aparecen las cosas. Eso no se puede evitar. La única elección real es si se decide pensando o se decide sin pensar.",
        },
      ],
    },
  ],
};
