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
