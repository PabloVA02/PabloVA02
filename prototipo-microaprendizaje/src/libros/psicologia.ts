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

export const DEEP_WORK: Resumen = {
  id: "deep-work",
  titulo: "Céntrate",
  autor: "Cal Newport",
  ano: 2016,
  gancho: "Un profesor de informática que nunca ha tenido una cuenta en ninguna red social sostiene que concentrarse se ha vuelto raro justo cuando más vale.",
  porQue:
    "Porque explica con precisión por qué es tan difícil concentrarse en una oficina moderna, y porque su solución tiene un punto ciego enorme que conviene ver.",
  partes: [
    {
      titulo: "La torre de Bollingen",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Orilla del lago de Zúrich, 1922. Un psiquiatra de cuarenta y siete años compra un terreno y empieza a construir con sus propias manos una torre de piedra de dos plantas. No tiene electricidad, ni agua corriente, ni teléfono. Se llama Carl Jung.",
        },
        {
          forma: "texto",
          texto:
            "Dentro hay una habitación cerrada con llave de la que solo él tiene copia. Va allí varias semanas al año, se levanta a las siete, escribe durante horas, pasea y se acuesta a las diez. Está construyendo, mientras tanto, la ruptura teórica con Freud.",
        },
        {
          forma: "clave",
          rotulo: "El detalle importante",
          frase: "Jung no se había retirado de la vida. Tenía una consulta llena en Zúrich, daba clase y publicaba. La torre no era una huida: era un instrumento de trabajo, y lo usaba por temporadas.",
        },
        {
          forma: "texto",
          texto:
            "Cal Newport, profesor de informática en la Universidad de Georgetown, abre su libro con esa escena y sigue con una lista de casos parecidos. Mark Twain escribiendo en un cobertizo tan alejado de la casa que había que tocar un cuerno para llamarle a comer.",
        },
        {
          forma: "texto",
          texto:
            "Peter Higgs, el físico que predijo la partícula que lleva su nombre, tan desconectado que cuando le dieron el Nobel en 2013 no se le pudo localizar: no tiene correo electrónico ni teléfono móvil, y se enteró por un vecino que le paró en la calle.",
        },
        {
          forma: "texto",
          texto:
            "J. K. Rowling alquilando una suite en un hotel de Edimburgo para terminar el último libro de Harry Potter, porque en su casa no conseguía avanzar. Bill Gates encerrándose dos veces al año una semana entera con una maleta de libros y sin ninguna reunión.",
        },
        {
          forma: "arte",
          texto:
            "Newport reúne todos esos casos para señalar un patrón: gente con muchísimo trabajo que organiza su vida para conseguir bloques largos de concentración sin interrupciones, y que considera esos bloques la parte productiva de su jornada, no un lujo.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "A esa actividad le pone nombre y una definición precisa: trabajo profundo es la actividad profesional realizada en un estado de concentración libre de distracciones, que lleva las capacidades cognitivas hasta su límite y que crea valor nuevo y difícil de replicar.",
        },
        {
          forma: "texto",
          texto:
            "Y define lo contrario, que es lo que ocupa la mayor parte de las jornadas modernas: trabajo superficial. Tareas logísticas, poco exigentes intelectualmente, que a menudo se hacen mientras uno está distraído, y que no crean mucho valor y son fáciles de replicar.",
        },
        {
          forma: "texto",
          texto:
            "Contestar correos. Estar en reuniones. Actualizar hojas de cálculo. Responder mensajes internos. Coordinar. Programar. Nada de eso es inútil y casi nada de eso es difícil, y esa combinación es exactamente lo que lo hace peligroso.",
        },
        {
          forma: "clave",
          rotulo: "La hipótesis del libro",
          frase: "La capacidad de concentrarse profundamente se está volviendo rara al mismo tiempo que se vuelve más valiosa. Quien la cultive tendrá una ventaja desproporcionada.",
        },
        {
          forma: "texto",
          texto:
            "Su argumento económico es que la automatización y la globalización están vaciando el trabajo intermedio, y que quedarán bien dos grupos: los que dominan cosas complicadas y los que producen a un nivel muy alto. Y ambas cosas exigen concentración sostenida.",
        },
        {
          forma: "texto",
          texto:
            "Newport es un caso interesante para sostenerlo, porque su propia carrera es la prueba que ofrece. Consiguió la plaza de profesor titular publicando en revistas de primer nivel y escribiendo libros de divulgación a la vez, y no trabaja por las noches ni los fines de semana.",
        },
        {
          forma: "texto",
          texto:
            "Y no ha tenido nunca una cuenta en ninguna red social. Ni una. Lo cuenta sin militancia: dice que probó a evaluarlas con el mismo criterio que aplica a cualquier herramienta profesional y que ninguna pasó el examen para lo que él hace.",
        },
        {
          forma: "arte",
          texto:
            "Cita también el caso de Adam Grant, que consiguió ser el catedrático titular más joven de su escuela de negocios. Su truco era organizativo: concentraba toda su docencia en un semestre para dejar el otro entero libre de clases y de reuniones.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Y dentro de esos meses libres agrupaba las reuniones y los correos en bloques cortos, dejando semanas enteras sin ninguna interrupción programada. El resultado no fue trabajar más horas: fue tener horas mucho mejores, ordenadas de otra manera.",
        },
        {
          forma: "texto",
          texto:
            "Newport insiste desde el principio en algo que casi todos los lectores pasan por alto: el trabajo profundo tiene un techo diario bajo. Sostiene que un principiante aguanta como una hora, y que alguien entrenado llega a unas cuatro horas al día como máximo.",
        },
        {
          forma: "texto",
          texto:
            "Cuatro horas. No doce. Ese dato desactiva la lectura de este libro como manual para trabajar más, que es como se lee muy a menudo. Lo que propone es reorganizar la jornada para que esas cuatro horas existan, no añadir horas al final del día.",
        },
        {
          forma: "texto",
          texto:
            "Antes de dar recetas, dedica la primera parte a explicar por qué es tan difícil conseguir esas cuatro horas en una oficina normal. Y su explicación no es que la gente sea perezosa ni que los móviles sean malos: es bastante más incómoda que eso.",
        },
        {
          forma: "texto",
          texto:
            "Empieza por un fenómeno medido en laboratorio que explica por qué una interrupción de treinta segundos puede costar veinte minutos de rendimiento.",
        },
        {
          forma: "texto",
          texto:
            "Se llama residuo de atención, y una vez que se conoce ya no se puede mirar igual una jornada de trabajo llena de notificaciones.",
        },
      ],
    },

    {
      titulo: "El residuo de atención",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El concepto lo formuló la investigadora Sophie Leroy en un artículo de 2009. Su hallazgo es que cuando alguien cambia de una tarea a otra, su atención no se traslada limpiamente: una parte se queda enganchada en la anterior durante un rato.",
        },
        {
          forma: "texto",
          texto:
            "Y lo que empeora el efecto es que ese residuo es mayor cuando la tarea anterior quedó sin terminar o sin cerrar. Es decir: abrir el correo, ver un asunto que exige respuesta, decidir contestarlo luego y volver al trabajo es la peor combinación posible.",
        },
        {
          forma: "clave",
          rotulo: "La consecuencia",
          frase: "Una jornada con veinte comprobaciones rápidas del correo no es una jornada con veinte minutos perdidos. Es una jornada en la que nunca se alcanza la concentración plena, porque siempre queda un resto pendiente.",
        },
        {
          forma: "texto",
          texto:
            "Newport lo combina con investigación sobre atención y sobre rendimiento experto, y con el trabajo de Anders Ericsson sobre práctica deliberada, del que toma una idea clave: lo que produce mejora es la práctica concentrada y con retroalimentación, no la repetición distraída.",
        },
        {
          forma: "texto",
          texto:
            "También cita el concepto de mielinización: la capa de grasa que recubre los circuitos neuronales que se usan repetidamente y que hace la señal más rápida y limpia. Su lectura es que la atención dispersa no activa el circuito el tiempo suficiente para reforzarlo.",
        },
        {
          forma: "texto",
          texto:
            "Conviene decir que esa parte es la más floja del libro en cuanto a evidencia. La neurociencia se usa como ilustración más que como prueba, y el propio Newport no es investigador en ese campo. El fenómeno del residuo de atención sí está medido; el resto es analogía.",
        },
        {
          forma: "arte",
          texto:
            "La parte que sí aguanta es la observacional, y es la que hace daño: la jornada media de un trabajador de oficina está estructurada de tal forma que la concentración sostenida resulta prácticamente imposible, y nadie lo ha diseñado así a propósito.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Newport describe el mecanismo. Las herramientas de mensajería interna crean una expectativa implícita de respuesta rápida. Las reuniones se convocan para coordinar. El calendario se llena de fragmentos de treinta minutos entre los que no cabe nada exigente.",
        },
        {
          forma: "texto",
          texto:
            "Y cada una de esas prácticas es defendible por sí sola. Contestar rápido es útil. Reunirse es necesario. El problema es la suma: el conjunto produce jornadas troceadas en las que nunca hay noventa minutos seguidos para pensar en algo complicado.",
        },
        {
          forma: "texto",
          texto:
            "A eso le añade otro concepto, tomado del mundo empresarial: la ocupación como sustituto de la productividad. En trabajos donde el resultado es difícil de medir, la gente demuestra que está trabajando estando visiblemente ocupada.",
        },
        {
          forma: "clave",
          rotulo: "La sustitución",
          frase: "Si nadie sabe medir tu aportación real, contestas correos deprisa, vas a todas las reuniones y estás disponible. Todo eso es visible. Pensar tres horas con la puerta cerrada no lo es.",
        },
        {
          forma: "texto",
          texto:
            "Y de ahí sale la observación más útil del libro, que Newport llama el agujero negro de las métricas: nadie mide el coste de la distracción, porque es imposible de medir. No hay forma de saber qué libro no se escribió o qué idea no se tuvo por culpa de las notificaciones.",
        },
        {
          forma: "texto",
          texto:
            "Como el coste es invisible y el beneficio de responder rápido es visible, las organizaciones se desplazan sistemáticamente hacia lo superficial. No por estupidez, sino porque el sistema de retroalimentación solo registra una de las dos cosas.",
        },
        {
          forma: "texto",
          texto:
            "Su tercer factor es lo que llama el principio del mínimo esfuerzo: en ausencia de indicadores claros, la gente hace lo que resulta más fácil en el momento. Y responder un mensaje siempre es más fácil que abordar el problema difícil que hay encima de la mesa.",
        },
        {
          forma: "arte",
          texto:
            "Esa observación es probablemente la más honesta del libro, porque señala que la distracción no es una debilidad moral: es la respuesta racional a un entorno que premia la disponibilidad y no puede evaluar la profundidad. Cambiar la conducta exige cambiar el entorno.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "También ataca un culto muy extendido en el sector tecnológico: la idea de que la conectividad permanente es intrínsecamente buena. Newport la llama la mentalidad de cualquier beneficio, y consiste en adoptar una herramienta porque tiene alguna ventaja.",
        },
        {
          forma: "texto",
          texto:
            "Su alternativa es lo que llama el enfoque del artesano: un carpintero no compra todas las herramientas que le puedan servir para algo. Elige las que tienen un impacto grande en lo que hace y descarta el resto, aunque tengan ventajas menores.",
        },
        {
          forma: "texto",
          texto:
            "Aplicado a las herramientas digitales, el criterio queda así: identifica los dos o tres objetivos importantes de tu vida profesional y personal, mira qué actividades los sirven de verdad, y conserva solo las herramientas con impacto sustancial en esas actividades.",
        },
        {
          forma: "texto",
          texto:
            "Es un criterio exigente y produce resultados incómodos, porque la mayoría de las herramientas que usamos tienen alguna utilidad y muy pocas tienen una utilidad grande y demostrable para lo que uno de verdad quiere conseguir.",
        },
        {
          forma: "texto",
          texto:
            "Con el diagnóstico completo, la segunda mitad del libro pasa a lo práctico, y ahí Newport organiza todo en cuatro reglas. La primera es la más discutida, porque su primer paso no consiste en concentrarse mejor.",
        },
        {
          forma: "texto",
          texto:
            "Consiste en elegir cómo se va a organizar el tiempo, y ofrece cuatro modelos distintos según lo que la vida de cada uno permita.",
        },
      ],
    },

    {
      titulo: "El principio del mínimo esfuerzo",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El primer modelo lo llama monástico y consiste en eliminar casi por completo las obligaciones superficiales. Su ejemplo es el informático Donald Knuth, que lleva desde 1990 sin usar correo electrónico y pide que le escriban cartas en papel a su universidad.",
        },
        {
          forma: "texto",
          texto:
            "Newport reconoce que ese modelo solo es viable para un puñado de personas con un valor tan claro y tan singular que la organización les tolera desaparecer. No es una recomendación general y él mismo no lo practica.",
        },
        {
          forma: "clave",
          rotulo: "Los cuatro modelos",
          frase: "Monástico: eliminar todo lo superficial. Bimodal: temporadas largas de aislamiento alternadas con disponibilidad. Rítmico: un bloque a la misma hora todos los días. Periodístico: aprovechar cualquier hueco.",
        },
        {
          forma: "texto",
          texto:
            "El bimodal es el de Jung y el de Adam Grant: temporadas de aislamiento total —días o semanas— alternadas con temporadas de disponibilidad completa. Funciona si uno puede desaparecer al menos un día seguido, cosa que muchos trabajos permiten y casi nadie usa.",
        },
        {
          forma: "texto",
          texto:
            "El rítmico es el que Newport recomienda a la mayoría: un bloque fijo, a la misma hora, todos los días laborables. Su virtud no es la cantidad de horas sino que elimina la decisión: no hay que decidir cada mañana si hoy toca, porque siempre toca.",
        },
        {
          forma: "texto",
          texto:
            "Y menciona el truco de la cadena, atribuido a un cómico famoso: marcar en un calendario cada día que se ha hecho el trabajo y no romper nunca la racha. El objetivo deja de ser el resultado y pasa a ser la continuidad, que es mucho más fácil de sostener.",
        },
        {
          forma: "arte",
          texto:
            "El cuarto modelo, el periodístico, es el más difícil y él lo desaconseja para principiantes: consiste en entrar en concentración profunda en cualquier hueco disponible. Su ejemplo es un biógrafo capaz de subir a escribir veinte minutos en mitad de una fiesta.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Sobre los rituales, Newport es muy concreto y muy poco místico. Recomienda fijar dónde se trabaja, cuánto tiempo exacto, con qué reglas —sin conexión, sin teléfono— y con qué apoyos: café, agua, un paseo antes, algo de comer para no interrumpir.",
        },
        {
          forma: "texto",
          texto:
            "La razón no es estética: es reducir el número de decisiones. Cada elección que hay que tomar al empezar consume voluntad, y la voluntad es un recurso limitado que conviene gastar en el trabajo y no en dónde sentarse.",
        },
        {
          forma: "texto",
          texto:
            "Y añade una recomendación que a mucha gente le resulta útil: cerrar la jornada con un ritual explícito. Revisar lo pendiente, anotar el plan del día siguiente y decir en voz alta una frase de cierre. El objetivo es dejar de rumiar por la noche.",
        },
        {
          forma: "clave",
          rotulo: "Por qué funciona el cierre",
          frase: "Sin un cierre explícito, la cabeza sigue repasando tareas abiertas toda la tarde. Anotarlas y decidir cuándo se harán descarga el sistema y permite descansar de verdad, que es la condición del trabajo profundo del día siguiente.",
        },
        {
          forma: "texto",
          texto:
            "Ese punto conecta con una idea que Newport repite: el descanso no es lo contrario del trabajo profundo, es su condición. Cita investigación sobre atención dirigida y sobre paseos en entornos naturales, y sostiene que la capacidad de concentración se agota y se repone.",
        },
        {
          forma: "texto",
          texto:
            "Por eso él termina a las cinco y media, no trabaja por la noche y no trabaja los fines de semana. Y sostiene que produce más así que trabajando doce horas, porque las horas de la noche no serían profundas: serían horas de contestar correos con sueño.",
        },
        {
          forma: "texto",
          texto:
            "La segunda regla del libro es la que más incomoda y se titula, más o menos, acepta el aburrimiento. Su tesis es que no se puede entrenar la concentración si cada momento vacío del día se llena inmediatamente con una pantalla.",
        },
        {
          forma: "arte",
          texto:
            "Su argumento es de acondicionamiento: si en la cola del supermercado, en el ascensor y en cada semáforo se saca el móvil, el cerebro aprende que nunca hay que tolerar la falta de estímulo. Y entonces no aguanta un problema difícil que tarda veinte minutos en abrirse.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Su propuesta no es dejar de usar internet, sino invertir el planteamiento: en lugar de programar descansos de la concentración, programar descansos de la distracción. Es decir, decidir de antemano en qué franjas se puede consumir estímulo y estar concentrado el resto.",
        },
        {
          forma: "texto",
          texto:
            "Y propone un ejercicio concreto que llama meditación productiva: coger un problema profesional bien definido, salir a caminar o a correr, y trabajarlo solo con la cabeza durante todo el trayecto, devolviendo la atención cada vez que se escape.",
        },
        {
          forma: "texto",
          texto:
            "Avisa de que las primeras veces resulta agotador y de que la mente se va constantemente, y también de un fallo típico: dar vueltas en círculo sobre lo mismo sin avanzar. Recomienda estructurarlo: primero identificar las variables, luego formular la pregunta siguiente.",
        },
        {
          forma: "texto",
          texto:
            "La tercera regla es la que le hizo famoso y también la que más rechazo genera. Se titula abandona las redes sociales, y su argumento no es moral ni sobre la privacidad: es de coste de oportunidad y de criterio de selección de herramientas.",
        },
        {
          forma: "texto",
          texto:
            "Su prueba práctica es un experimento de treinta días: dejarlas todas durante un mes sin anunciarlo a nadie, y al terminar hacerse dos preguntas concretas.",
        },
        {
          forma: "texto",
          texto:
            "Primera: ¿habrían sido estos treinta días notablemente mejores si las hubiera tenido? Segunda: ¿le ha importado a alguien que no estuviera? Si las dos respuestas son negativas, no hay razón para volver, y sostiene que en la mayoría de los casos lo son.",
        },
      ],
    },

    {
      titulo: "Aburrirse a propósito",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La cuarta regla se ocupa de lo superficial, que no se puede eliminar del todo, y ahí Newport es más práctico que en ninguna otra parte. Su punto de partida es que lo superficial no se reduce con fuerza de voluntad: se reduce poniéndole un presupuesto.",
        },
        {
          forma: "texto",
          texto:
            "La primera herramienta es planificar cada minuto de la jornada por bloques, en papel, la noche anterior o al llegar. No para cumplirlo religiosamente, sino para obligarse a decidir de antemano en qué se va a gastar el día en lugar de reaccionar a lo que llegue.",
        },
        {
          forma: "clave",
          rotulo: "El objetivo del horario",
          frase: "No es la disciplina: es la intencionalidad. Newport asume que el plan se romperá y recomienda rehacerlo sobre la marcha. Lo que importa es que en ningún momento del día uno esté sin haber decidido qué hace.",
        },
        {
          forma: "texto",
          texto:
            "La segunda herramienta es una pregunta para clasificar cualquier tarea, y es de las cosas más útiles del libro: ¿cuántos meses harían falta para formar a un recién licenciado listo, sin experiencia en el sector, para que hiciera esto?",
        },
        {
          forma: "texto",
          texto:
            "Si la respuesta es que en unas semanas lo haría igual de bien, es trabajo superficial. Si la respuesta es que harían falta años, es profundo. Es un criterio operativo, rápido de aplicar y que produce respuestas incómodas sobre en qué se gasta la semana.",
        },
        {
          forma: "texto",
          texto:
            "La tercera es negociar con el jefe un porcentaje explícito de trabajo superficial. Newport sugiere plantearlo como una pregunta directa: qué proporción de mi tiempo quieres que dedique a coordinación y a correo. La respuesta suele estar entre el treinta y el cincuenta por ciento.",
        },
        {
          forma: "arte",
          texto:
            "Y ahí está el truco: una vez que ese número existe y está acordado, deja de ser una decisión personal y pasa a ser una restricción compartida. Rechazar una reunión ya no es antipatía, es cumplir el reparto que el propio jefe fijó.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "La cuarta es lo que él llama productividad de horario fijo: decidir de antemano la hora a la que se termina y trabajar hacia atrás desde ahí. Newport termina a las cinco y media todos los días, y ese límite le obliga a rechazar cosas que de otro modo aceptaría.",
        },
        {
          forma: "texto",
          texto:
            "Su observación es que un horario abierto hace que todo quepa, y que si todo cabe se acepta todo. Un límite rígido convierte el tiempo en un recurso escaso y obliga a priorizar de verdad, que es algo que casi nadie hace mientras crea que puede alargar el día.",
        },
        {
          forma: "texto",
          texto:
            "Y la quinta es volverse difícil de localizar, con tres tácticas. Poner filtros al que escribe, explicando en qué casos se responde y en cuáles no. Reservarse el derecho a no contestar. Y redactar correos que cierren el asunto en un solo mensaje.",
        },
        {
          forma: "clave",
          rotulo: "El correo centrado en el proceso",
          frase: "En vez de contestar «vale, ¿cuándo quedamos?», escribir «propongo el martes a las diez en mi despacho; si no puedes, dime dos huecos tuyos de esta semana y elijo». Un mensaje cierra lo que en otro caso serían seis.",
        },
        {
          forma: "texto",
          texto:
            "Ese consejo es probablemente el que más tiempo ahorra al lector medio, y es también el que menos gente aplica, porque escribir un correo que cierre el asunto exige pensar treinta segundos y contestar sin pensar exige cero.",
        },
        {
          forma: "texto",
          texto:
            "Newport importa además un marco de gestión empresarial con cuatro elementos: centrarse en lo importantísimo y no en lo importante; medir los indicadores de proceso y no solo los de resultado; llevar un marcador visible; y rendir cuentas con periodicidad fija.",
        },
        {
          forma: "texto",
          texto:
            "El indicador que él usa para sí mismo es muy simple: horas de trabajo profundo acumuladas, anotadas a mano en una hoja pegada al ordenador. No páginas escritas ni artículos publicados, porque esos resultados llegan meses después y no sirven para corregir la semana.",
        },
        {
          forma: "arte",
          texto:
            "Es la aplicación de un principio conocido: se puede controlar el proceso y no el resultado. Contar horas de concentración es contar lo único que uno decide cada día, y es también lo único que se puede aumentar mañana por la mañana.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Ahora, dónde falla el libro, y falla en algo grande. Todo el marco está construido para trabajadores del conocimiento con mucha autonomía: profesores, escritores, programadores, consultores, investigadores. Es decir, para gente que controla su calendario.",
        },
        {
          forma: "texto",
          texto:
            "Una enfermera de planta no puede cerrar la puerta noventa minutos. Un profesor de instituto tampoco. Ni alguien en atención al cliente, en una cadena de montaje, en una tienda, en logística o en cualquier trabajo de cuidados. La interrupción es el trabajo.",
        },
        {
          forma: "texto",
          texto:
            "Newport dedica un par de párrafos a esa objeción y sigue. Es el punto ciego central del libro: presenta como consejo universal algo que solo es aplicable a una fracción de los empleos, y esa fracción es además la mejor pagada y la que menos ayuda necesita.",
        },
        {
          forma: "texto",
          texto:
            "Hay un segundo problema, más incómodo todavía: en una organización, el trabajo superficial es en buena medida el trabajo de coordinación que permite que los demás trabajen. Quien se niega a hacerlo no lo elimina: lo traslada a sus compañeros.",
        },
        {
          forma: "texto",
          texto:
            "Newport reconoce parcialmente esto en libros posteriores, donde propone cambiar los procesos de la organización en lugar de que cada individuo se blinde por su cuenta. Es una corrección necesaria y llega después, no aquí.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una tercera cosa que no aparece por ninguna parte, y que salta a la vista al repasar sus ejemplos: casi todos son hombres, y casi todos son hombres sin obligaciones domésticas o con alguien que se ocupaba de ellas.",
        },
      ],
    },

    {
      titulo: "Terminar a las cinco y media",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Jung tenía una torre y una consulta. Twain tenía una casa con servicio. Gates tiene una semana libre porque puede. Ninguno de esos casos incluye recoger a un niño del colegio a las cinco, hacer la cena y estar disponible para una madre enferma.",
        },
        {
          forma: "texto",
          texto:
            "El trabajo profundo, tal como lo describe el libro, requiere poder blindar bloques largos, y la posibilidad de blindar bloques largos está repartida de forma muy desigual. Es una cuestión de poder y de tiempo disponible antes que de disciplina personal.",
        },
        {
          forma: "clave",
          rotulo: "El límite real del libro",
          frase: "No es que sus consejos sean malos: es que su aplicabilidad depende de una autonomía que la mayoría no tiene, y el libro no lo dice con la claridad que debería.",
        },
        {
          forma: "texto",
          texto:
            "La cuarta objeción es de evidencia. Aparte del residuo de atención, que está medido, casi todo el argumento es anécdota y razonamiento. No hay ningún experimento que compare grupos con y sin trabajo profundo, y no lo hay porque sería casi imposible de hacer.",
        },
        {
          forma: "texto",
          texto:
            "Eso no convierte la tesis en falsa: la convierte en una hipótesis razonable presentada con más seguridad de la que los datos permiten. El lector debería tratarla como un marco útil y no como un resultado establecido, y el libro no invita a esa distinción.",
        },
        {
          forma: "texto",
          texto:
            "Y una quinta, de tono: hay un fondo de superioridad moral que asoma cada vez que habla de las redes sociales o de quien contesta rápido. Newport describe hábitos ajenos con una condescendencia que resta fuerza a unos argumentos que no la necesitan.",
        },
        {
          forma: "arte",
          texto:
            "Dicho todo eso, lo que sí ha aguantado nueve años después es notable, y sobre todo el diagnóstico. La descripción de por qué las organizaciones derivan hacia lo superficial —métricas invisibles, ocupación como señal, mínimo esfuerzo— sigue siendo exacta.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Y ha aguantado la observación del techo diario. Cuatro horas de concentración real es mucho más de lo que casi nadie consigue, y saber que ese es el máximo posible cambia la manera de juzgar la propia jornada y quita bastante culpa por lo demás.",
        },
        {
          forma: "texto",
          texto:
            "También ha aguantado el criterio del artesano para elegir herramientas, que se puede aplicar hoy a cosas que en 2016 no existían, y la pregunta del recién licenciado para clasificar tareas, que es la herramienta más rápida y más incómoda del libro.",
        },
        {
          forma: "texto",
          texto:
            "Lo que casi todo el mundo cree y no es verdad, empezando por lo más extendido: este no es un libro sobre trabajar más. Newport termina a las cinco y media, no trabaja por las noches ni los fines de semana, y considera el descanso parte del método, no una recompensa.",
        },
        {
          forma: "clave",
          rotulo: "El segundo malentendido",
          frase: "No es un libro anti-tecnología. Newport es informático y trabaja con ordenadores todo el día. Su argumento es sobre selección de herramientas con un criterio explícito, no sobre desconectarse del mundo.",
        },
        {
          forma: "texto",
          texto:
            "Tercero: aburrirse a propósito no significa meditar ni buscar la paz interior. Es entrenamiento de tolerancia a la falta de estímulo, con un objetivo puramente instrumental, que es poder aguantar un problema difícil los veinte minutos que tarda en abrirse.",
        },
        {
          forma: "texto",
          texto:
            "Y cuarto: el trabajo superficial no es malo ni prescindible. Newport dice explícitamente que es necesario y que intentar eliminarlo del todo destruiría la carrera de casi cualquiera. Lo que propone es ponerle un presupuesto, no declararle la guerra.",
        },
        {
          forma: "texto",
          texto:
            "Su influencia práctica ha sido considerable. El vocabulario del libro —trabajo profundo, trabajo superficial, residuo de atención— se ha instalado en la conversación sobre productividad, y varias empresas han experimentado con franjas sin reuniones y sin mensajería.",
        },
        {
          forma: "arte",
          texto:
            "Newport ha seguido con tres libros más sobre el mismo terreno, y su evolución es la parte interesante: de proponer que el individuo se blinde ha pasado a sostener que el problema es organizativo y que ninguna disciplina personal arregla un sistema mal diseñado.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "Esa corrección es la respuesta a la crítica principal de este libro y llega desde el propio autor, lo cual dice bastante a su favor. La versión de 2016 pone toda la responsabilidad en el lector; las posteriores la reparten con quien diseña el trabajo.",
        },
        {
          forma: "texto",
          texto:
            "Lo que queda para alguien que quiera aplicar algo mañana cabe en cuatro cosas. Un bloque fijo, corto, a la misma hora, con el teléfono en otra habitación. Un cierre explícito al terminar la jornada. Correos que cierren asuntos. Y una hora de fin no negociable.",
        },
        {
          forma: "texto",
          texto:
            "Ninguna de esas cuatro exige permiso de nadie ni cambiar de trabajo, y las cuatro juntas producen la mayor parte del efecto. El resto del libro son quinientas páginas de justificación para conseguir que alguien haga esas cuatro cosas durante más de una semana.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una frase de Newport que resume mejor que ninguna otra su posición, y que es la única que no depende de tener un despacho ni autonomía: una vida profunda es una buena vida, y no porque produzca más, sino porque es más difícil de olvidar.",
        },
      ],
    },
  ],
};

export const PODER_AHORA: Resumen = {
  id: "poder-ahora",
  titulo: "El poder del ahora",
  autor: "Eckhart Tolle",
  ano: 1997,
  gancho: "Una noche de 1977, a los veintinueve años, pensó que no podía vivir consigo mismo. Y entonces se fijó en lo raro que era eso: si no puedo vivir conmigo, somos dos.",
  porQue:
    "Porque su práctica central coincide con lo que sí está estudiado en psicología, y todo lo que la rodea es un sistema que no se puede discutir.",
  partes: [
    {
      titulo: "No puedo vivir conmigo mismo",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Londres, una noche de 1977. Un hombre de veintinueve años se despierta de madrugada en un piso alquilado con una sensación de pavor. Lleva años con depresión y con ansiedad, y esa noche llega a un punto en el que le parece insoportable seguir.",
        },
        {
          forma: "texto",
          texto:
            "Se formula un pensamiento que ha tenido muchas veces: no puedo vivir conmigo mismo por más tiempo. Y entonces, según cuenta él, ocurre algo distinto: se queda mirando esa frase y le llama la atención lo rara que es gramaticalmente.",
        },
        {
          forma: "clave",
          rotulo: "La pregunta",
          frase: "Si no puedo vivir conmigo mismo, entonces hay dos: el yo que no puede, y el mismo con el que no puede vivir. ¿Cuál de los dos soy? ¿Y quién está haciendo la pregunta?",
        },
        {
          forma: "texto",
          texto:
            "Describe lo que pasó después como una especie de succión: la sensación de ser arrastrado a un vacío, un miedo enorme y después nada. Se despertó por la mañana con la impresión de que todo lo que le rodeaba estaba bañado en una paz que no había sentido nunca.",
        },
        {
          forma: "texto",
          texto:
            "El hombre se llamaba Ulrich Leonard Tölle. Había nacido en Lünen, Alemania, en 1948, tuvo una infancia infeliz, se marchó a España con su padre a los trece años y allí no fue al colegio. A los diecinueve se fue a Inglaterra a dar clases de idiomas.",
        },
        {
          forma: "texto",
          texto:
            "Después estudió en la Universidad de Londres y empezó una investigación en Cambridge que no terminó. Y a los veintinueve años, aquella noche, dejó de hacer todo lo que estaba haciendo. Cambió su nombre por Eckhart, por el místico alemán medieval.",
        },
        {
          forma: "arte",
          texto:
            "Lo que vino después es lo más raro de su biografía y él lo cuenta sin dramatizar: pasó unos dos años sin trabajo fijo, durmiendo en casas de conocidos y sentándose durante horas en bancos de parques de Londres, en un estado que describe como de dicha intensa.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "La gente empezó a acercarse a preguntarle cosas. Él contestaba. Con el tiempo aquello se convirtió en pequeños grupos, después en charlas, después en cursos y, veinte años después de aquella noche, en un libro que escribió en Vancouver.",
        },
        {
          forma: "texto",
          texto:
            "Lo autopublicó en 1997 con una tirada de tres mil ejemplares y una editorial diminuta. Circuló durante dos años por recomendación boca a boca, sobre todo en Canadá y en la costa oeste de Estados Unidos, sin ninguna promoción.",
        },
        {
          forma: "texto",
          texto:
            "En el año 2000, Oprah Winfrey lo recomendó públicamente. El libro pasó al primer puesto de la lista de más vendidos del New York Times y se quedó ahí durante años. Lleva vendidos millones de ejemplares y está traducido a más de treinta idiomas.",
        },
        {
          forma: "clave",
          rotulo: "El segundo empujón",
          frase: "En 2008, con su libro siguiente, hizo con Oprah una serie de diez sesiones en directo por internet. Se calcula que la siguieron más de once millones de personas. Fue uno de los mayores acontecimientos de la divulgación espiritual moderna.",
        },
        {
          forma: "texto",
          texto:
            "El libro está escrito en forma de preguntas y respuestas, con una tipografía distinta para las preguntas del interlocutor. Es un formato antiguo —el diálogo socrático, los textos de maestros orientales— y funciona bien porque anticipa las objeciones del lector.",
        },
        {
          forma: "texto",
          texto:
            "Su tesis central se puede enunciar en una frase: casi todo el sufrimiento humano que no es dolor físico procede de identificarse con la propia mente, y en particular con un flujo continuo de pensamiento involuntario que nadie ha elegido tener.",
        },
        {
          forma: "texto",
          texto:
            "El primer paso que propone es una observación que cualquiera puede hacer en treinta segundos: intentar dejar de pensar durante un minuto y comprobar que no se puede. La mente sigue produciendo frases sola, sin permiso y sin parar.",
        },
        {
          forma: "arte",
          texto:
            "Y de ahí saca una conclusión que suena rara y es difícil de rebatir: si no puedes parar de pensar, entonces el pensamiento no está bajo tu control. Y si algo no está bajo tu control, es discutible que sea exactamente tú.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "A ese flujo automático lo llama la mente, y sostiene que casi todo el mundo vive dentro de él sin darse cuenta, comentando la realidad en lugar de percibirla, y confundiendo el comentario con quien lo escucha.",
        },
        {
          forma: "texto",
          texto:
            "Su segunda idea es sobre el tiempo, y es la que da título al libro. Sostiene que el sufrimiento psicológico siempre está o en el pasado —culpa, resentimiento, nostalgia— o en el futuro —ansiedad, miedo, expectativa—, y prácticamente nunca en el instante presente.",
        },
        {
          forma: "texto",
          texto:
            "Y hace una distinción que casi todos los críticos del libro pasan por alto: separa el tiempo del reloj del tiempo psicológico. El primero es útil y necesario: citas, planes, memoria práctica. El segundo es la rumiación, que es lo que él ataca.",
        },
        {
          forma: "clave",
          rotulo: "Lo que NO dice",
          frase: "No dice que no haya que planificar ni recordar. Dice explícitamente que usar el tiempo para organizarse es imprescindible, y que el problema es habitar mentalmente en un momento que no está ocurriendo.",
        },
        {
          forma: "texto",
          texto:
            "Ese matiz es importante porque el malentendido más extendido sobre este libro es exactamente el contrario: que propone vivir sin pensar en el mañana. No lo propone, y lo aclara en varios capítulos con bastante insistencia.",
        },
        {
          forma: "texto",
          texto:
            "Con esas dos ideas montadas —que no somos nuestro pensamiento y que el sufrimiento vive fuera del presente— llega a la práctica concreta, que es lo único que el libro pide hacer y que ocupa muy pocas páginas.",
        },
        {
          forma: "texto",
          texto:
            "Y es, además, la parte que coincide con lo que la psicología clínica lleva cuarenta años estudiando por su cuenta.",
        },
      ],
    },

    {
      titulo: "El observador",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La instrucción central es esta: en lugar de intentar controlar los pensamientos o discutir con ellos, observarlos. Notar que aparecen, verlos pasar y no meterse dentro. Colocarse, dice Tolle, en el lugar del que mira y no en el de lo mirado.",
        },
        {
          forma: "texto",
          texto:
            "Y propone un ejercicio muy concreto para experimentarlo, que dura unos segundos y que funciona la primera vez que se hace: preguntarse a uno mismo cuál será su próximo pensamiento, y quedarse esperando a ver qué llega.",
        },
        {
          forma: "clave",
          rotulo: "Lo que ocurre",
          frase: "Durante unos segundos no llega nada. La atención se dirige a esperar y el flujo se interrumpe. Ese hueco, dice Tolle, es la prueba de que hay algo que observa y que no es el pensamiento observado.",
        },
        {
          forma: "texto",
          texto:
            "Su segunda herramienta es anclar la atención en el cuerpo. Recomienda dirigir la percepción hacia dentro —las manos, los pies, el pecho— y notar la sensación de estar vivo desde el interior, sin visualizar ni imaginar nada.",
        },
        {
          forma: "texto",
          texto:
            "El razonamiento es simple: el pensamiento vive en el pasado y en el futuro, y el cuerpo solo puede estar aquí. Llevar la atención a la sensación física es la manera más rápida y más fiable de salir de la rumiación, y no exige creer en nada.",
        },
        {
          forma: "texto",
          texto:
            "La tercera es la aceptación de lo que hay, y es la más difícil de entender bien porque suena a resignación. Tolle insiste en que no lo es, y da una fórmula que aclara bastante: acepta primero, y después actúa.",
        },
        {
          forma: "arte",
          texto:
            "Su argumento es de eficacia: la acción que nace de la resistencia interna —del enfado por que las cosas sean así— es peor que la que nace de haber aceptado la situación tal como es. Aceptar el hecho no significa aprobarlo ni quedarse quieto.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Y añade una regla práctica que sí es aprovechable: ante cualquier situación desagradable hay tres opciones legítimas —cambiarla, salir de ella o aceptarla del todo— y una ilegítima, que es quedarse dentro protestando sin hacer ninguna de las tres.",
        },
        {
          forma: "texto",
          texto:
            "Esa formulación es de las mejores del libro. Describe con precisión una conducta muy común: permanecer en un trabajo, una relación o una situación mientras se protesta a diario, que es el estado que produce más desgaste y el único que no resuelve nada.",
        },
        {
          forma: "texto",
          texto:
            "Sobre el ego, Tolle propone una definición operativa que no es la de Freud ni la del uso corriente: llama ego a la identidad construida con pensamientos, recuerdos, opiniones, posesiones y roles, es decir, a la idea que uno tiene de sí mismo.",
        },
        {
          forma: "clave",
          rotulo: "Su tesis sobre el ego",
          frase: "Que necesita problemas para existir. Que se alimenta de conflicto, de comparación y de agravio, y que por eso mucha gente se aferra a sus quejas: sin ellas no sabría quién es.",
        },
        {
          forma: "texto",
          texto:
            "Esa observación es aguda y se puede comprobar en cualquier conversación: hay personas cuya identidad depende de un enfado sostenido durante años, y a las que resolver ese conflicto les dejaría sin un pilar central de quiénes creen ser.",
        },
        {
          forma: "texto",
          texto:
            "El libro tiene también un capítulo sobre las relaciones que es más incómodo y que a mucha gente le resulta el más útil. Sostiene que la mayoría de las relaciones funcionan como adicciones mutuas: dos personas usándose para llenar un vacío que no se llena así.",
        },
        {
          forma: "arte",
          texto:
            "Y avisa de una consecuencia previsible: cuando alguien empieza a trabajar en esa dirección, sus relaciones cambian, y no siempre a mejor. El libro no promete armonía; advierte de que va a haber una fase incómoda y de que hay parejas que no la pasan.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Todo lo anterior es, en lo esencial, un resumen del vedanta advaita y del zen. Tolle lo reconoce: cita a Meister Eckhart, a Krishnamurti, a Ramana Maharshi, los evangelios y los textos budistas, y dice que no está diciendo nada nuevo.",
        },
        {
          forma: "texto",
          texto:
            "Pero el marco narrativo del libro es el de una revelación personal, no el de una tradición. La historia que lo abre es la de un hombre que descubre algo solo, en un piso de Londres, sin maestro y sin lectura previa. Esas dos cosas no encajan bien.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí está el primer problema serio del libro: presenta como hallazgo directo un cuerpo de ideas de dos mil quinientos años, del que suprime el aparato conceptual, la disciplina, la comunidad y las advertencias que esas tradiciones incorporan.",
        },
        {
          forma: "texto",
          texto:
            "En el zen, por ejemplo, la práctica se hace bajo la supervisión de alguien con formación, precisamente porque se conocen sus efectos adversos. Existe un término específico para los estados desestabilizadores que puede producir la meditación intensiva.",
        },
        {
          forma: "texto",
          texto:
            "Este libro no menciona nada de eso. Propone prácticas de introspección profunda a millones de lectores anónimos sin ninguna advertencia sobre para quién pueden no ser adecuadas y sin ninguna indicación de cuándo conviene buscar ayuda.",
        },
        {
          forma: "texto",
          texto:
            "Y llega al concepto más suyo y más discutible de todos, que es el que le dio la mitad de su popularidad y que es también donde el libro deja de describir para empezar a inventar una entidad.",
        },
        {
          forma: "texto",
          texto:
            "Hay además una asimetría en el libro que conviene notar: dedica muchísimas páginas a describir el problema —la identificación con la mente, el tiempo psicológico, el ego— y muy pocas a la práctica. Las instrucciones concretas caben en unas quince páginas.",
        },
        {
          forma: "texto",
          texto:
            "Esa proporción es la contraria de la que tendría un manual. Y explica un efecto muy comentado por sus lectores: la sensación de haber comprendido algo importante y de no saber exactamente qué hay que hacer al cerrar el libro un martes por la mañana.",
        },
        {
          forma: "texto",
          texto:
            "Lo llama el cuerpo del dolor.",
        },
      ],
    },

    {
      titulo: "El cuerpo del dolor",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Tolle sostiene que el dolor emocional no procesado no se disuelve: se acumula. Que forma en el interior de cada persona una especie de masa de energía con vida propia, hecha de todo el sufrimiento antiguo que no se atravesó del todo.",
        },
        {
          forma: "texto",
          texto:
            "Y sostiene que esa masa se comporta como un organismo: duerme durante temporadas, despierta periódicamente y necesita alimentarse. Y que su alimento es más dolor, así que provoca activamente las situaciones que lo producen.",
        },
        {
          forma: "clave",
          rotulo: "La afirmación",
          frase: "Que hay algo dentro que busca discusiones, que sabotea lo que va bien y que se relame en el conflicto, porque de eso vive. Y que la gente confunde esa cosa con su propio yo.",
        },
        {
          forma: "texto",
          texto:
            "Como descripción de una conducta observable, hay algo real detrás: existe la tendencia a buscar la pelea cuando uno está mal, a reabrir asuntos cerrados y a repetir patrones que hacen daño. Eso lo reconoce cualquiera que se haya observado un rato.",
        },
        {
          forma: "texto",
          texto:
            "Y en psicología hay conceptos que describen fenómenos parecidos con otro vocabulario: la rumiación, la repetición de patrones aprendidos en la infancia, el refuerzo intermitente, la reactivación de esquemas emocionales antiguos ante señales del presente.",
        },
        {
          forma: "texto",
          texto:
            "El problema no es la observación: es la gramática. Tolle no dice que la gente tienda a repetir patrones dolorosos. Dice que hay una entidad que despierta, que busca, que se alimenta y que quiere. Le atribuye intención a una metáfora.",
        },
        {
          forma: "arte",
          texto:
            "Esa diferencia importa. Un patrón se puede examinar, medir y modificar. Una entidad con voluntad propia solo se puede combatir, y además ofrece una explicación disponible para cualquier cosa que salga mal, sin posibilidad de comprobarla.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Y ahí aparece el defecto estructural del libro entero, que es el más importante de todos: es un sistema cerrado. Cualquier objeción que se le haga puede ser reinterpretada como una prueba de que quien objeta está atrapado en su propia mente.",
        },
        {
          forma: "texto",
          texto:
            "Si el lector duda, es el ego resistiéndose. Si algo no funciona, es que no se ha aceptado del todo. Si aparece escepticismo, es la mente defendiendo su territorio. No existe ninguna observación que pudiera contar como evidencia en contra.",
        },
        {
          forma: "clave",
          rotulo: "Por qué eso es un problema",
          frase: "Una afirmación que no puede ser falsa no informa de nada. Y un marco donde toda crítica se reinterpreta como síntoma es exactamente la estructura que hace difícil salir de una creencia.",
        },
        {
          forma: "texto",
          texto:
            "El segundo problema serio es de salud mental. El libro propone la aceptación del momento presente como respuesta general al sufrimiento, sin distinguir situaciones que son radicalmente distintas y que requieren respuestas opuestas.",
        },
        {
          forma: "texto",
          texto:
            "Aceptar plenamente un atasco de tráfico es sensato. Aceptar plenamente una relación de maltrato, una depresión clínica o unas condiciones laborales abusivas no lo es, y presentarlo todo bajo la misma instrucción puede hacer daño real.",
        },
        {
          forma: "texto",
          texto:
            "Tolle dice, en su descargo, que después de aceptar hay que actuar, y que la acción incluye salir de la situación. Pero el peso del libro está enormemente cargado del lado de la aceptación, y esa es la parte que los lectores recuerdan y aplican.",
        },
        {
          forma: "arte",
          texto:
            "Hay además una omisión llamativa: el libro apenas menciona el trauma, el duelo, la enfermedad mental o las circunstancias materiales. Todo el sufrimiento aparece como producto de la mente, y buena parte del sufrimiento humano sencillamente no lo es.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale la tercera objeción, que es política y que se le hace a toda esta literatura: si todo el malestar viene de la conciencia individual, entonces la pobreza, la precariedad o la discriminación pasan a ser problemas de actitud.",
        },
        {
          forma: "texto",
          texto:
            "Es una consecuencia que Tolle no formula así y que se sigue con bastante naturalidad de su marco, y explica por qué este tipo de libros tiene tanto éxito en entornos corporativos: propone que el empleado gestione su reacción y no las condiciones.",
        },
        {
          forma: "texto",
          texto:
            "La cuarta objeción es de fondo epistemológico. Tolle presenta afirmaciones sobre la conciencia, el universo y la naturaleza del ser con la seguridad de quien describe hechos, y no ofrece ni una sola razón para creerlas más allá de su propia experiencia.",
        },
        {
          forma: "texto",
          texto:
            "Cuando habla de que la conciencia es anterior a la materia, de que el universo despierta a través de los humanos o de que el pensamiento es una fase evolutiva que se está superando, está haciendo metafísica sin decir que la está haciendo.",
        },
        {
          forma: "texto",
          texto:
            "Y la quinta, más menor: el estilo es repetitivo. El libro dice lo mismo muchas veces con distintas palabras, y una parte considerable de sus doscientas cincuenta páginas son reformulaciones de las tres o cuatro ideas de los primeros capítulos.",
        },
        {
          forma: "texto",
          texto:
            "Ahora bien, hay una parte de todo esto que no depende de creerse nada, que se puede comprobar y que lleva cuarenta años estudiándose en laboratorios y en consultas con métodos que Tolle no menciona en ninguna página.",
        },
        {
          forma: "texto",
          texto:
            "Conviene decir también qué tipo de afirmación es cada cosa, porque el libro las mezcla. Que la rumiación produce malestar es una afirmación empírica y comprobable. Que existe una entidad energética que se alimenta de conflicto no lo es, ni puede serlo.",
        },
        {
          forma: "texto",
          texto:
            "Y que la conciencia sea anterior a la materia o que el universo despierte a través de los seres humanos son afirmaciones metafísicas, del mismo tipo que las de cualquier religión. Pueden ser ciertas y no hay ninguna manera de averiguarlo.",
        },
        {
          forma: "texto",
          texto:
            "Y esa parte es precisamente la instrucción central del libro.",
        },
      ],
    },

    {
      titulo: "Lo que sí está estudiado",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En psicología clínica existe un concepto que se llama descentramiento y que describe exactamente lo que Tolle propone: pasar de estar dentro de un pensamiento a observarlo desde fuera, notando que es un pensamiento y no un hecho.",
        },
        {
          forma: "texto",
          texto:
            "La diferencia práctica es la que hay entre pensar soy un desastre y notar que está apareciendo el pensamiento de que soy un desastre. El contenido es idéntico y la relación con él es completamente distinta, y esa relación sí se puede entrenar.",
        },
        {
          forma: "clave",
          rotulo: "Dónde está estudiado",
          frase: "En la terapia cognitiva basada en la atención plena, desarrollada en los años noventa para prevenir recaídas en depresión. Su mecanismo central es exactamente el descentramiento.",
        },
        {
          forma: "texto",
          texto:
            "Aquel programa se diseñó para un problema concreto: la depresión recurrente, en la que cada episodio hace más probable el siguiente porque los estados de ánimo bajos reactivan automáticamente patrones de pensamiento negativo aprendidos.",
        },
        {
          forma: "texto",
          texto:
            "La idea era interrumpir esa reactivación enseñando a los pacientes a reconocer los pensamientos como eventos mentales pasajeros en lugar de como descripciones fiables de la realidad. Y los ensayos han encontrado reducciones significativas de recaídas.",
        },
        {
          forma: "texto",
          texto:
            "En varios países europeos, ese programa está recomendado en las guías clínicas para pacientes con episodios depresivos recurrentes. Es decir: una parte del contenido de este libro se ha convertido, por otra vía, en tratamiento con respaldo institucional.",
        },
        {
          forma: "arte",
          texto:
            "Con dos diferencias importantes. La primera es que allí se administra en un programa estructurado de ocho semanas, con profesionales formados, con criterios de exclusión y con seguimiento. Aquí se ofrece en un libro a cualquiera y sin ninguna condición.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Y la segunda es de alcance. El programa clínico afirma una cosa concreta y medible: reduce recaídas depresivas. Este libro afirma que disuelve el sufrimiento humano, transforma la conciencia y modifica la naturaleza del ser. No es la misma promesa.",
        },
        {
          forma: "texto",
          texto:
            "También está estudiado el anclaje atencional en el cuerpo, que es la segunda herramienta del libro. Hay evidencia razonable de que dirigir la atención a sensaciones físicas interrumpe la rumiación y reduce la activación fisiológica del estrés.",
        },
        {
          forma: "texto",
          texto:
            "Y hay evidencia sobre la rumiación misma: es uno de los predictores mejor establecidos de depresión y de ansiedad, y las intervenciones que la reducen mejoran los síntomas. La diana que Tolle señala existe y está bien identificada.",
        },
        {
          forma: "clave",
          rotulo: "El balance de evidencia",
          frase: "Lo que el libro propone hacer tiene respaldo. Lo que el libro afirma sobre por qué funciona, sobre la conciencia y sobre la naturaleza de la realidad no lo tiene y probablemente no lo pueda tener.",
        },
        {
          forma: "texto",
          texto:
            "Conviene también mencionar la otra cara, que casi nunca se dice: la meditación tiene efectos adversos documentados en una minoría de practicantes, sobre todo en prácticas intensivas y en personas con antecedentes de trauma o de psicosis.",
        },
        {
          forma: "texto",
          texto:
            "Se han descrito episodios de despersonalización, de ansiedad aguda y de reactivación de recuerdos traumáticos. Las tradiciones contemplativas lo saben desde hace siglos y por eso trabajan con maestros. La divulgación moderna lo omite casi siempre.",
        },
        {
          forma: "texto",
          texto:
            "Este libro lo omite por completo. No hay una sola advertencia en doscientas cincuenta páginas, y su público son millones de lectores sin ninguna supervisión, muchos de los cuales llegan a él precisamente porque están pasándolo mal.",
        },
        {
          forma: "arte",
          texto:
            "Esa es probablemente la crítica más justa que se le puede hacer: no la de que sus ideas sean falsas —muchas no son comprobables en ningún sentido—, sino la de que ofrece una herramienta potente sin ninguna indicación de uso.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Lo que casi todo el mundo cree y no es verdad sobre este libro, empezando por lo principal: no propone dejar de planificar ni de recordar. Tolle distingue explícitamente el tiempo del reloj del tiempo psicológico y dice que el primero es imprescindible.",
        },
        {
          forma: "texto",
          texto:
            "Segundo malentendido: aceptar el presente no significa conformarse. Su fórmula es aceptar y después actuar, y menciona que la acción puede consistir en irse. El problema es de énfasis, no de doctrina: el libro dedica muchísimo más espacio a aceptar.",
        },
        {
          forma: "texto",
          texto:
            "Tercero: no es budismo, aunque lo parezca. Tolle toma material del vedanta advaita, del zen, del cristianismo místico y de Krishnamurti, y lo mezcla sin el aparato conceptual de ninguna de esas tradiciones. Los budistas suelen señalarlo.",
        },
        {
          forma: "texto",
          texto:
            "Y cuarto: la práctica que propone no es original suya en absoluto. Está en textos indios de hace dos mil quinientos años, en la tradición zen y en la mística cristiana medieval, y él lo dice, aunque el marco narrativo del libro sugiera lo contrario.",
        },
        {
          forma: "texto",
          texto:
            "Lo que queda, descontando la metafísica, el cuerpo del dolor y las afirmaciones sobre el universo, es un puñado de instrucciones prácticas que se pueden probar esta tarde y que no exigen aceptar ninguna cosmovisión.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una manera bastante razonable de leer este libro, que es la que recomiendan varios psicólogos que lo tratan con simpatía crítica.",
        },
        {
          forma: "texto",
          texto:
            "Consiste en tratarlo como un manual de instrucciones con una teología pegada encima, y quedarse con las instrucciones.",
        },
      ],
    },

    {
      titulo: "La grieta en la frase",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Las instrucciones son cuatro y caben en una tarjeta. La primera: cuando notes que estás dando vueltas a algo, di para tus adentros que está apareciendo tal pensamiento, en lugar de continuar dentro de él. Eso solo ya cambia la relación con lo que se piensa.",
        },
        {
          forma: "texto",
          texto:
            "La segunda: cuando la cabeza se desboque, lleva la atención a una sensación física concreta —las manos, la respiración, los pies en el suelo— y sostenla ahí unos segundos. No para relajarse: para interrumpir el bucle.",
        },
        {
          forma: "clave",
          rotulo: "La tercera",
          frase: "Ante algo que no soportas, elige una de tres: cámbialo, márchate o acéptalo del todo. Quedarse dentro protestando no es una opción, es el estado que más desgasta y el único que no resuelve nada.",
        },
        {
          forma: "texto",
          texto:
            "Y la cuarta: separar el problema real del comentario sobre el problema. Casi siempre hay un hecho concreto —una factura, una conversación pendiente, un dolor— y encima una capa de narración sobre lo injusto que es. La capa se puede quitar.",
        },
        {
          forma: "texto",
          texto:
            "Ninguna de esas cuatro exige creer en la conciencia universal, en el cuerpo del dolor ni en que el pensamiento sea una fase evolutiva superable. Se pueden probar, comprobar si funcionan y descartarlas si no.",
        },
        {
          forma: "texto",
          texto:
            "Sobre el propio Tolle conviene decir un par de cosas, porque en este terreno el autor importa. No ha montado una organización jerárquica, no pide dinero por adelantado a discípulos y no ha aparecido en los escándalos habituales de este sector.",
        },
        {
          forma: "arte",
          texto:
            "Su negocio son libros, cursos en vídeo y conferencias, y es muy grande. Vive en Vancouver, da charlas y evita cuidadosamente el papel de gurú con comunidad cerrada. En un campo con un historial pésimo, esa distancia es un dato a su favor.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "También hay que decir que su formación no es ni psicológica ni filosófica en sentido académico. No es psicólogo, no es terapeuta y no tiene ninguna titulación relacionada con la salud mental. El libro se lee a menudo como si la tuviera.",
        },
        {
          forma: "texto",
          texto:
            "Y esa confusión no es del todo culpa suya: buena parte de la responsabilidad está en que el libro se coloca en las estanterías de psicología y se recomienda a gente con síntomas, cuando es un texto de espiritualidad y así se presenta.",
        },
        {
          forma: "clave",
          rotulo: "La recomendación honesta",
          frase: "Si alguien está pasando por un episodio depresivo, un duelo o una crisis de ansiedad, este libro no es el sitio. Existe tratamiento con evidencia para esas tres cosas y este texto no lo sustituye ni lo pretende.",
        },
        {
          forma: "texto",
          texto:
            "Para quien esté razonablemente bien y quiera una herramienta de gestión del ruido mental, la parte práctica sirve y es de las mejor formuladas que hay. Y para eso probablemente baste con los tres o cuatro primeros capítulos.",
        },
        {
          forma: "texto",
          texto:
            "El libro tuvo continuación en 2005 con otro título que vendió todavía más, gracias a la serie de sesiones con Oprah, y que desarrolla sobre todo el concepto de ego y las relaciones. Es más largo y no añade nada esencial a la práctica.",
        },
        {
          forma: "texto",
          texto:
            "Su influencia cultural ha sido enorme y bastante invisible. El vocabulario de la atención plena que hoy se usa en empresas, en aplicaciones de móvil y en programas escolares viene, por vías distintas, de la misma corriente que popularizó este libro.",
        },
        {
          forma: "arte",
          texto:
            "Y ha producido también el efecto contrario que suele producir el éxito masivo: una industria de la calma vendida como producto, con suscripciones mensuales, y una cierta obligación social de estar sereno que es exactamente lo opuesto a lo que proponía.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "El balance justo es este: un libro con una idea práctica valiosa y bien identificada, envuelta en un sistema de afirmaciones que no se pueden comprobar ni discutir, escrito por alguien sin formación clínica y leído por millones de personas que la necesitan.",
        },
        {
          forma: "texto",
          texto:
            "Su virtud principal es que señaló una diana correcta. La rumiación es real, es medible y es uno de los mejores predictores de malestar psicológico que existen. Que millones de personas hayan aprendido a mirarla no es poca cosa.",
        },
        {
          forma: "texto",
          texto:
            "Su defecto principal no es lo que afirma, sino lo que no dice: que hay sufrimiento que no viene de la mente, que hay circunstancias que hay que cambiar y no aceptar, y que hay estados en los que mirar hacia dentro sin ayuda puede empeorar las cosas.",
        },
        {
          forma: "texto",
          texto:
            "Queda la escena del principio, que es lo mejor que tiene el libro y lo que probablemente explica su éxito por encima de cualquier argumento. Un hombre de veintinueve años, de madrugada, pensando que no puede vivir consigo mismo.",
        },
        {
          forma: "texto",
          texto:
            "Y encontrando, en la propia frase que le estaba hundiendo, una grieta gramatical por la que se le coló una pregunta: si soy dos, ¿quién de los dos está sufriendo y quién se ha dado cuenta de que sufre?",
        },
        {
          forma: "texto",
          texto:
            "Esa pregunta es antigua, la han formulado varias tradiciones durante siglos y a él le llegó sin haberla leído en ninguna parte. Y funciona igual de bien sepa uno de dónde viene o no, que es probablemente por lo que sigue circulando.",
        },
        {
          forma: "texto",
          texto:
            "Lo que se hace con la respuesta —montar una metafísica o quedarse con el ejercicio— ya es cosa de cada lector, y este libro empuja bastante hacia lo primero.",
        },
      ],
    },
  ],
};

export const PODER_HABITOS: Resumen = {
  id: "poder-habitos",
  titulo: "El poder de los hábitos",
  autor: "Charles Duhigg",
  ano: 2012,
  gancho: "Un comandante americano en Irak estudió las grabaciones de veinte disturbios, encontró un patrón y consiguió que la plaza se vaciara sin disparar un tiro. Lo único que hizo fue quitar los puestos de comida.",
  porQue:
    "Porque explicó a millones de personas cómo funciona un hábito, y porque uno de sus cuatro pilares —la fuerza de voluntad como músculo— se ha caído en los diez años siguientes y casi nadie lo ha contado.",
  partes: [
    {
      titulo: "La plaza de Kufa",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Kufa, Irak, 2003. Un comandante del ejército estadounidense lleva semanas viendo cómo se repiten los disturbios en la plaza mayor de la ciudad. Cada vez acaban igual: pedradas, gases lacrimógenos, heridos y una relación con la población un poco peor que el día anterior.",
        },
        {
          forma: "texto",
          texto:
            "En lugar de pedir más soldados, se pone a ver las grabaciones de los altercados anteriores buscando un patrón. Y lo encuentra. Todos empiezan igual: se junta un grupo pequeño, crece a lo largo de la tarde, y en algún momento llegan los vendedores ambulantes de comida.",
        },
        {
          forma: "texto",
          texto:
            "La gente compra, se queda, la plaza se llena, aparecen los curiosos, aparecen los que van a mirar, y al caer la tarde alguien tira la primera piedra. La secuencia se repite con una regularidad que en el vídeo resulta casi ridícula.",
        },
        {
          forma: "clave",
          rotulo: "Lo que pidió",
          frase: "Fue a ver al alcalde y le pidió una sola cosa: que los vendedores de comida no entraran en la plaza. Aquella tarde el grupo se juntó como siempre, a las siete la gente empezó a tener hambre, y a las ocho no quedaba nadie.",
        },
        {
          forma: "texto",
          texto:
            "Esa escena abre el libro y contiene su tesis entera: los comportamientos que parecen decisiones son en realidad secuencias automáticas, y para cambiarlos no hace falta convencer a nadie, basta con alterar una pieza pequeña de la secuencia.",
        },
        {
          forma: "texto",
          texto:
            "El autor es Charles Duhigg, periodista del New York Times, que en 2013 formó parte del equipo que ganó el Pulitzer por una serie de reportajes sobre las condiciones de fabricación en las cadenas de suministro tecnológicas.",
        },
        {
          forma: "arte",
          texto:
            "Eso importa para leer el libro: no lo escribió un científico. Lo escribió un reportero que fue a buscar a los científicos, y el libro tiene las virtudes y los defectos de eso. Se lee estupendamente y a veces convierte un estudio en una historia con más certeza de la que el estudio tenía.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "El armazón teórico viene de un laboratorio del Instituto Tecnológico de Massachusetts, donde en los años noventa se estudiaba qué pasa en el cerebro de una rata que aprende a recorrer un laberinto en forma de te con chocolate en un extremo.",
        },
        {
          forma: "texto",
          texto:
            "Al principio, la actividad cerebral de la rata está disparada durante todo el recorrido: olfatea, duda, se equivoca, gira. A medida que repite el trayecto, esa actividad se desploma. Después de cientos de intentos, el recorrido entero apenas produce señal.",
        },
        {
          forma: "texto",
          texto:
            "Lo interesante es dónde se queda la señal. No desaparece del todo: sube al principio, cuando se abre la compuerta, y vuelve a subir al final, cuando aparece el chocolate. En medio, casi nada. La rata recorre el laberinto sin pensar.",
        },
        {
          forma: "clave",
          rotulo: "El bucle del hábito",
          frase: "De ahí sale el esquema de tres piezas que ha hecho famoso este libro: una señal que dispara el comportamiento, una rutina que se ejecuta sin decidirla, y una recompensa que hace que el cerebro archive la secuencia como buena y la repita.",
        },
        {
          forma: "texto",
          texto:
            "Esa compresión tiene un nombre técnico y una función evolutiva evidente: liberar capacidad. Si hubiera que decidir cada movimiento de conducir, de andar o de cepillarse los dientes, no quedaría atención para nada más.",
        },
        {
          forma: "texto",
          texto:
            "Los hábitos no se guardan donde se guardan los recuerdos. Se guardan en unas estructuras profundas del cerebro, los ganglios basales, que funcionan de manera bastante independiente de la memoria consciente.",
        },
        {
          forma: "texto",
          texto:
            "La prueba de eso es el caso más impresionante del libro, y es real. Un hombre llamado Eugene Pauly contrajo a los setenta y un años una encefalitis vírica que le destruyó una parte del lóbulo temporal medial, incluido el hipocampo.",
        },
        {
          forma: "arte",
          texto:
            "Después de aquello no podía retener un dato nuevo más de un minuto. No sabía el año, no reconocía a su nieto, no recordaba haber comido hace diez minutos y saludaba a los investigadores como si fuera la primera vez cada mañana durante años.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Y sin embargo aprendió cosas. Aprendió a dar un paseo por su barrio y volver a casa sin perderse. Si le preguntabas dónde vivía, no sabía contestar. Si lo sacabas a la calle, sus pies lo llevaban de vuelta.",
        },
        {
          forma: "texto",
          texto:
            "Aprendió también dónde estaba la cocina de una casa nueva a la que se habían mudado después de su enfermedad, y podía ir a buscar la comida. No podía dibujar el plano ni describirlo, pero sus piernas lo sabían.",
        },
        {
          forma: "texto",
          texto:
            "Los investigadores hicieron con él un experimento sencillo: le enseñaron parejas de objetos, con un premio escondido siempre debajo del mismo, y él fue eligiendo bien cada vez con más frecuencia mientras seguía jurando que era la primera vez que veía aquello.",
        },
        {
          forma: "clave",
          rotulo: "Lo que demuestra ese caso",
          frase: "Que los hábitos y la memoria son sistemas distintos. Se puede saber hacer algo sin recordar haberlo aprendido, y esa es la razón por la que un hábito no se cambia sabiendo que es malo. Saberlo no llega al sitio donde vive.",
        },
        {
          forma: "texto",
          texto:
            "Hay un dato del propio Eugene que se cuenta de pasada y que es el más duro del capítulo: cuando su mujer intentó cambiar la disposición de la cocina, él se perdía dentro de su propia casa y se ponía furioso sin poder explicar por qué.",
        },
        {
          forma: "texto",
          texto:
            "Duhigg cita una estimación, atribuida a investigadores de Duke, de que en torno al cuarenta por ciento de lo que hacemos cada día no son decisiones sino hábitos. Es una cifra que se repite en todas partes y que conviene tomarse como orden de magnitud y no como dato exacto.",
        },
        {
          forma: "texto",
          texto:
            "Con ese esquema montado, la pregunta práctica es obvia: si el bucle tiene tres piezas, ¿cuál se toca para cambiarlo?",
        },
        {
          forma: "texto",
          texto:
            "Y la respuesta del libro no es ninguna de las tres.",
        },
        {
          forma: "texto",
          texto:
            "Es una cuarta cosa que no está en el esquema y que aparece cuando el hábito lleva tiempo instalado.",
        },
        {
          forma: "texto",
          texto:
            "El deseo anticipado de la recompensa.",
        },
        {
          forma: "texto",
          texto:
            "Y la mejor manera de explicarlo es una campaña de publicidad de 1900 que consiguió que un país entero se lavara los dientes.",
        },
      ],
    },

    {
      titulo: "El hormigueo de la pasta de dientes",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Estados Unidos, 1900. Solo un siete por ciento de los hogares tiene pasta de dientes en el cuarto de baño. Lavarse los dientes no es una costumbre nacional: es algo que hace la gente con dinero y a veces. Diez años después lo hace más de la mitad del país.",
        },
        {
          forma: "texto",
          texto:
            "El responsable es un publicista llamado Claude Hopkins, al que un amigo le ofrece promocionar una pasta nueva llamada Pepsodent. Hopkins había rechazado antes otras cinco pastas de dientes porque el negocio le parecía imposible.",
        },
        {
          forma: "texto",
          texto:
            "Lo que hizo fue buscar una señal: algo que todo el mundo pudiera ver todos los días y que disparara el gesto. Y lo encontró en un manual de odontología, en la descripción de la película de mucina que se forma sobre el esmalte.",
        },
        {
          forma: "clave",
          rotulo: "La campaña",
          frase: "Pásate la lengua por los dientes y notarás una película. Esa película es lo que los afea. Los anuncios pedían al lector que hiciera el gesto en ese mismo momento. La señal estaba dentro de la boca de todo el mundo y no fallaba nunca.",
        },
        {
          forma: "texto",
          texto:
            "El detalle científico es que esa película es natural, se forma pase lo que pase y se quita con la lengua o comiendo una manzana. No tiene nada que ver con la caries y ninguna pasta la elimina de forma duradera. Daba igual: funcionaba como disparador.",
        },
        {
          forma: "texto",
          texto:
            "Pero Hopkins hizo una segunda cosa, sin saber lo que estaba haciendo, y esa es la que explica que el hábito se quedara. Pepsodent llevaba ácido cítrico y aceite de menta, y esos ingredientes producen un hormigueo fresco en la boca.",
        },
        {
          forma: "arte",
          texto:
            "Ese hormigueo no limpia nada. Es completamente inútil desde el punto de vista dental. Y es la razón por la que la gente siguió cepillándose: porque el cerebro empezó a esperar esa sensación, y en cuanto no la tenía, la echaba de menos.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Todas las pastas de dientes que se venden hoy llevan agentes que producen esa frescura, y todas por el mismo motivo. Si mañana desaparecieran, la gente sentiría que no se ha lavado los dientes aunque se los hubiera lavado.",
        },
        {
          forma: "texto",
          texto:
            "El libro llama a eso el ansia, y sostiene que es lo que convierte una rutina repetida en un hábito de verdad. Sin ansia, el bucle se ejecuta mientras dura la motivación. Con ansia, se ejecuta solo.",
        },
        {
          forma: "texto",
          texto:
            "El contraejemplo del capítulo es todavía más didáctico. A finales de los noventa, Procter and Gamble lanzó un producto que eliminaba los olores de los tejidos, sin perfume y sin dejar rastro. Funcionaba técnicamente y no lo compraba nadie.",
        },
        {
          forma: "texto",
          texto:
            "El equipo de investigación fue a las casas de las clientas y encontró el problema: la gente que más lo necesitaba —una mujer con nueve gatos, por ejemplo— no olía nada, porque uno se acostumbra a su propio olor y deja de percibirlo.",
        },
        {
          forma: "clave",
          rotulo: "Lo que arreglaron",
          frase: "No había señal ni recompensa: no notaban el mal olor antes ni notaban nada después. La solución fue añadirle perfume, para que al terminar de limpiar la habitación oliera bien. El producto pasó a ser el premio final de una limpieza, y empezó a venderse.",
        },
        {
          forma: "texto",
          texto:
            "Es exactamente el mismo mecanismo que el hormigueo de la pasta: una recompensa sensorial inmediata, que no aporta nada al efecto real del producto, y que es lo único que hace que se repita el gesto.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale lo que Duhigg llama la regla de oro del cambio de hábitos, que es la parte más aplicable del libro y la que más se cita.",
        },
        {
          forma: "texto",
          texto:
            "Un hábito no se elimina. Se sustituye. Se mantienen la misma señal y la misma recompensa, y se cambia únicamente lo que hay en medio.",
        },
        {
          forma: "arte",
          texto:
            "Quien fuma al salir del trabajo no necesita el tabaco: necesita la pausa de cinco minutos, el aire y la interrupción. Quitarle el cigarro y no darle una pausa equivalente es dejar la señal y la recompensa colgando, y el bucle busca la manera de cerrarse.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Su ejemplo personal es una galleta que se comía todas las tardes en la cafetería de la redacción. Se pasó semanas experimentando y descubrió que lo que buscaba no era el azúcar: era levantarse de la mesa y charlar con alguien diez minutos.",
        },
        {
          forma: "texto",
          texto:
            "Cambió la galleta por acercarse a hablar con un compañero, mantuvo la hora exacta y la recompensa social, y el hábito de la galleta desapareció. Ese diagnóstico —averiguar qué recompensa se está buscando de verdad— es el trabajo difícil.",
        },
        {
          forma: "texto",
          texto:
            "El libro propone un método para hacerlo: probar recompensas distintas ante la misma señal, y después de cada una, anotar tres palabras y esperar quince minutos. Si la sensación de necesidad vuelve, esa no era.",
        },
        {
          forma: "texto",
          texto:
            "El caso extremo de sustitución es Alcohólicos Anónimos, que Duhigg analiza con cuidado. No promete quitar la bebida: reemplaza el bar por la reunión, el compañero de barra por el padrino y el alivio químico por hablar con alguien que ha pasado por lo mismo.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí aparece un cuarto elemento que el esquema de tres piezas no contempla. En los estudios sobre recaídas, la sustitución aguanta bien la vida normal y se rompe en las crisis: un despido, una muerte, un diagnóstico.",
        },
        {
          forma: "clave",
          rotulo: "La pieza que falta",
          frase: "Los que no recaían en las crisis tenían algo que los otros no: creían que su vida podía mejorar. Y esa creencia casi nunca aparece sola. Aparece en grupo, viendo a otros a los que les ha funcionado. Es lo que hacen los grupos de apoyo y no las reuniones de motivación.",
        },
        {
          forma: "texto",
          texto:
            "Es una idea incómoda para un libro de mecanismos, porque significa que el bucle de tres piezas no basta y que hace falta algo que no se puede diseñar desde fuera. Duhigg lo dice y no lo desarrolla mucho.",
        },
        {
          forma: "texto",
          texto:
            "Hasta aquí, el libro va de individuos. La segunda parte cambia de escala y va a empresas, y arranca con la historia que más se ha contado en escuelas de negocios de todo el mundo.",
        },
        {
          forma: "texto",
          texto:
            "Octubre de 1987, Manhattan. Una sala llena de inversores espera al nuevo director general de una compañía de aluminio de la que se dice que está en decadencia.",
        },
        {
          forma: "texto",
          texto:
            "El hombre sube al estrado y anuncia que quiere hablarles de una sola cosa.",
        },
        {
          forma: "texto",
          texto:
            "La seguridad de los trabajadores.",
        },
      ],
    },

    {
      titulo: "El día que Alcoa dejó de hablar de beneficios",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El hombre se llamaba Paul O'Neill, acababa de ser nombrado director general de Alcoa, y les dijo a los inversores que su objetivo era convertirla en la empresa más segura de Estados Unidos y que iba a por cero accidentes laborales.",
        },
        {
          forma: "texto",
          texto:
            "No mencionó los márgenes, ni los costes, ni la cuota de mercado. Un inversor salió de la sala y llamó a sus clientes para decirles que vendieran, que el consejo había puesto al frente a un hippie que iba a hundir la empresa.",
        },
        {
          forma: "clave",
          rotulo: "Lo que pasó después",
          frase: "Quien vendió aquel día perdió mucho dinero. En los trece años de O'Neill, los beneficios anuales de Alcoa se multiplicaron y su valor en bolsa creció enormemente. Y los accidentes bajaron hasta una fracción diminuta de la media del sector.",
        },
        {
          forma: "texto",
          texto:
            "Su método era este: cada vez que alguien se hiciera daño, el responsable de la planta tenía que informarle a él en veinticuatro horas con un plan para que no volviera a ocurrir. Y quien no lo hiciera no ascendía.",
        },
        {
          forma: "texto",
          texto:
            "Para cumplir eso hacía falta que un obrero pudiera avisar a su encargado, y el encargado al jefe de planta, y este a la dirección, en un día. Es decir: hacía falta construir canales de comunicación que no existían en una empresa con plantas en decenas de países.",
        },
        {
          forma: "texto",
          texto:
            "Y una vez construidos esos canales, empezaron a circular por ellos otras cosas. Sugerencias de mejora de procesos. Avisos de defectos. Ideas de los operarios que antes se quedaban en la planta y ahora llegaban a la dirección en veinticuatro horas.",
        },
        {
          forma: "arte",
          texto:
            "Ese es el concepto central del capítulo: hay hábitos que arrastran a otros. Duhigg los llama angulares, y su característica es que no producen su efecto directamente, sino porque obligan a cambiar estructuras que sirven para todo lo demás.",
          arte: "mapa",
        },
        {
          forma: "texto",
          texto:
            "En el plano personal, el hábito angular más documentado es el ejercicio. La gente que empieza a hacer deporte suele acabar comiendo mejor, fumando menos, gastando menos y siendo más productiva en el trabajo, sin habérselo propuesto.",
        },
        {
          forma: "texto",
          texto:
            "La explicación que propone es que el ejercicio produce una pequeña victoria diaria y comprobable, y que esa victoria cambia lo que uno cree que es capaz de hacer. A partir de ahí, otras cosas dejan de parecer imposibles.",
        },
        {
          forma: "texto",
          texto:
            "Otros que menciona: cenar en familia, hacer la cama por las mañanas y llevar un registro de lo que se come. Ninguno de los tres produce por sí solo un cambio importante, y los tres se asocian con cadenas de cambios posteriores.",
        },
        {
          forma: "clave",
          rotulo: "El matiz que hay que hacer",
          frase: "Esas asociaciones son correlaciones, no causas demostradas. Quien hace la cama todas las mañanas es probablemente una persona con cierta organización previa, y la cama es un síntoma tanto como una causa. El libro no hace esa distinción con suficiente cuidado.",
        },
        {
          forma: "texto",
          texto:
            "El otro caso del capítulo es Michael Phelps, el nadador con más medallas olímpicas de la historia, y su entrenador Bob Bowman, que desde que Phelps era un adolescente le hizo instalar una rutina muy concreta antes de cada carrera.",
        },
        {
          forma: "texto",
          texto:
            "Todas las noches, antes de dormir, Phelps se pasaba la carrera entera por la cabeza: la entrada al agua, cada brazada, el burbujeo, el viraje, el tacto de la pared. Bowman lo llamaba poner el vídeo, y lo hacían también antes de nadar.",
        },
        {
          forma: "texto",
          texto:
            "En los Juegos de Pekín de 2008, en la final de doscientos mariposa, a Phelps se le llenaron las gafas de agua desde el primer largo y nadó los últimos cien metros prácticamente a ciegas.",
        },
        {
          forma: "arte",
          texto:
            "Contó luego lo que hizo: como se sabía de memoria cuántas brazadas necesitaba, contó. Cuando llegó a la cuenta prevista para el último largo, estiró el brazo y tocó la pared. Ganó con récord del mundo sin ver el borde de la piscina.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "El uso que hace el libro de esa historia es correcto: la rutina de visualización no lo hizo nadar más rápido; lo que hizo fue que una situación imprevista no lo sacara de su secuencia automática.",
        },
        {
          forma: "texto",
          texto:
            "Hay una parte del libro dedicada a las organizaciones que suele ignorarse y que es la mejor escrita, sobre lo que ocurre cuando los hábitos institucionales fallan. El ejemplo es el incendio de la estación de King's Cross en Londres, en 1987.",
        },
        {
          forma: "texto",
          texto:
            "Un pasajero vio una cerilla encendida caer por una escalera mecánica y no avisó a nadie, porque no era su trabajo. Un empleado que vio humo no llamó a los bomberos, porque avisar de fuego correspondía a otro departamento y no se pisaban las competencias.",
        },
        {
          forma: "texto",
          texto:
            "El fuego se alimentó de la grasa y la pelusa acumuladas debajo de la escalera de madera, subió por el hueco y estalló en el vestíbulo. Murieron treinta y una personas.",
        },
        {
          forma: "clave",
          rotulo: "El diagnóstico",
          frase: "No fue negligencia individual: fue una tregua institucional. Los departamentos habían pactado tácitamente no meterse en el terreno del otro, y ese pacto funcionaba bien en la operación diaria y era letal en una emergencia.",
        },
        {
          forma: "texto",
          texto:
            "Duhigg sostiene que casi todas las organizaciones funcionan así, con acuerdos no escritos que reparten poder, y que esos acuerdos solo se ven cuando algo se rompe. Es la parte del libro más útil para cualquiera que trabaje en una empresa mediana.",
        },
        {
          forma: "texto",
          texto:
            "La segunda mitad del libro se ocupa entonces de lo que ocurre cuando el hábito choca con la voluntad, y ahí es donde el libro apuesta más fuerte.",
        },
        {
          forma: "texto",
          texto:
            "Con un experimento de los años noventa que se ha convertido en el más citado de la psicología de la fuerza de voluntad.",
        },
        {
          forma: "texto",
          texto:
            "Consiste en poner a unos estudiantes delante de un cuenco de rábanos.",
        },
        {
          forma: "texto",
          texto:
            "Y de una bandeja de galletas de chocolate recién hechas.",
        },
      ],
    },

    {
      titulo: "El rábano y las galletas",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El experimento lo diseñó Roy Baumeister en 1996. Se cita a los participantes sin desayunar en una habitación donde huele a galletas recién horneadas. Sobre la mesa hay dos cuencos: uno con galletas de chocolate y otro con rábanos.",
        },
        {
          forma: "texto",
          texto:
            "A la mitad se les dice que pueden comer galletas. A la otra mitad, que solo pueden comer rábanos, y se los deja solos con las galletas delante durante cinco minutos, observándolos por una ventana para comprobar que resisten.",
        },
        {
          forma: "texto",
          texto:
            "Después, a todos se les da un rompecabezas geométrico y se mide cuánto tiempo insisten antes de rendirse. El rompecabezas es irresoluble: lo que se mide no es la habilidad, es la persistencia.",
        },
        {
          forma: "clave",
          rotulo: "El resultado",
          frase: "Los que habían comido galletas insistieron una media de unos diecinueve minutos. Los que habían resistido comiendo rábanos aguantaron unos ocho. Resistir la tentación durante cinco minutos les había dejado sin reservas para lo siguiente.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale la idea de la fuerza de voluntad como un músculo: un recurso limitado que se gasta con el uso, que se agota a lo largo del día y que se puede entrenar para que aguante más. Se la llamó agotamiento del yo.",
        },
        {
          forma: "texto",
          texto:
            "Es una de las ideas de psicología más difundidas de las últimas décadas. Explica por qué la gente cumple la dieta a mediodía y la rompe a las once de la noche, y por qué a quien ha tenido un día horrible en el trabajo le cuesta más ir al gimnasio.",
        },
        {
          forma: "arte",
          texto:
            "Y hay que decir ya, antes de seguir, que esa idea es la parte del libro que peor ha envejecido. En 2016, una réplica coordinada entre veintitrés laboratorios de varios países no encontró prácticamente ningún efecto.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "El agotamiento del yo se convirtió en uno de los casos emblemáticos de la crisis de replicación de la psicología: cientos de estudios publicados, un efecto que parecía sólido, y que al someterlo a réplicas preregistradas y con muestras grandes se deshizo.",
        },
        {
          forma: "texto",
          texto:
            "Eso no significa que la fuerza de voluntad no exista ni que no se canse nadie. Significa que el modelo del depósito que se vacía no está demostrado, y que lo que se observa se explica probablemente mejor por motivación, por atención y por lo que uno cree sobre su propio cansancio.",
        },
        {
          forma: "texto",
          texto:
            "Duhigg publicó en 2012, antes de que esa literatura se cayera. No es un error suyo, y sí es la razón por la que este libro no se puede leer hoy como se leía entonces, y por la que este capítulo hay que tomarlo con distancia.",
        },
        {
          forma: "clave",
          rotulo: "Lo que sí ha aguantado",
          frase: "El estudio escocés de rehabilitación de cadera y rodilla, que aparece en el mismo capítulo, se sostiene mucho mejor. Y su conclusión es más útil que la del músculo, porque no depende de ninguna teoría sobre reservas mentales.",
        },
        {
          forma: "texto",
          texto:
            "A un grupo de pacientes recién operados, con una media de sesenta y ocho años, se les dio un cuaderno con páginas en blanco y se les pidió que escribieran sus objetivos de recuperación para la semana siguiente.",
        },
        {
          forma: "texto",
          texto:
            "La mayoría escribió cosas vagas o no escribió nada. Pero un tercio escribió planes concretos con hora y lugar: el miércoles voy a andar hasta la parada del autobús a buscar a mi mujer, y si me duele me sentaré en el banco de la esquina.",
        },
        {
          forma: "texto",
          texto:
            "Esos pacientes empezaron a andar casi el doble de rápido que los demás, se levantaron de la silla antes y recuperaron la movilidad en la mitad de tiempo. La diferencia no estaba en la fisioterapia, que era idéntica.",
        },
        {
          forma: "arte",
          texto:
            "Estaba en que habían anticipado el momento difícil y decidido de antemano qué harían. Esa técnica tiene nombre en la literatura, intenciones de implementación, y es de las cosas mejor replicadas de la psicología del cambio de conducta.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "La fórmula es de una simplicidad casi insultante: cuando ocurra tal cosa, haré tal otra. No sirve proponerse hacer más ejercicio; sirve escribir que los martes a las siete se sale a correr, y qué se hará si llueve.",
        },
        {
          forma: "texto",
          texto:
            "El otro caso del capítulo es Starbucks, que en los años dos mil tenía un problema con empleados jóvenes, muchos sin experiencia laboral previa, que se venían abajo ante un cliente que gritaba.",
        },
        {
          forma: "texto",
          texto:
            "En vez de dar cursos de actitud, la empresa identificó los momentos concretos en los que las cosas se torcían y escribió un guion para cada uno: qué decir exactamente cuando un cliente se enfada, cuando se derrama algo, cuando hay cola y falta un compañero.",
        },
        {
          forma: "texto",
          texto:
            "Los empleados ensayaban esas escenas en voz alta hasta que salían automáticas, y así el momento crítico dejaba de exigir una decisión bajo presión y pasaba a ser una secuencia aprendida.",
        },
        {
          forma: "texto",
          texto:
            "Duhigg lo presenta como entrenamiento de la fuerza de voluntad. Se puede describir sin esa teoría y funciona igual: convertir los puntos de inflexión previsibles en rutinas ensayadas de antemano.",
        },
        {
          forma: "clave",
          rotulo: "La otra cosa que encontraron",
          frase: "Los guiones funcionaban mucho peor si el empleado sentía que no pintaba nada en su trabajo. Cuando se les dio margen para decidir cosas pequeñas —horarios, cómo organizar el turno—, el rendimiento en esos momentos difíciles mejoró bastante.",
        },
        {
          forma: "texto",
          texto:
            "Ese matiz sí encaja con la literatura posterior: lo que sostiene el esfuerzo no parece ser un depósito de energía, sino la sensación de que uno está haciendo algo que ha elegido.",
        },
        {
          forma: "texto",
          texto:
            "La última parte del libro sale del individuo y de la empresa y se mete en un terreno bastante más resbaladizo.",
        },
        {
          forma: "texto",
          texto:
            "El de los hábitos sociales.",
        },
        {
          forma: "texto",
          texto:
            "Y empieza con una mujer que un jueves por la tarde no se levantó de un asiento.",
        },
      ],
    },

    {
      titulo: "El autobús de Montgomery",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Montgomery, Alabama, 1 de diciembre de 1955. Una mujer negra de cuarenta y dos años se niega a cederle su asiento a un pasajero blanco en un autobús urbano. La detienen esa misma tarde. Se llamaba Rosa Parks.",
        },
        {
          forma: "texto",
          texto:
            "Duhigg se hace la pregunta correcta: no había sido la primera. Meses antes, una chica de quince años, Claudette Colvin, había hecho exactamente lo mismo en la misma ciudad y no pasó nada. ¿Por qué esta vez sí?",
        },
        {
          forma: "clave",
          rotulo: "Su respuesta",
          frase: "Porque Rosa Parks estaba metida en decenas de círculos sociales distintos de la ciudad: la iglesia, un club de costura, asociaciones vecinales, grupos de voluntariado. Al detenerla, la noticia llegó a la vez a comunidades que no se hablaban entre sí.",
        },
        {
          forma: "texto",
          texto:
            "El mecanismo que propone tiene base sociológica: los lazos fuertes —familia, amigos— movilizan a poca gente; los lazos débiles —conocidos, vecinos, gente de la parroquia— son los que hacen que algo se extienda, porque conectan grupos separados.",
        },
        {
          forma: "texto",
          texto:
            "A eso añade la presión del entorno: cuando el boicot arrancó, no participar significaba quedar mal ante los vecinos, ante el pastor y ante el grupo de costura, y esa presión sostuvo trescientos ochenta y un días de no coger el autobús.",
        },
        {
          forma: "texto",
          texto:
            "Y una tercera pieza: que el movimiento le dio a la gente nuevos hábitos y una identidad nueva, con las reuniones semanales en las iglesias, la organización de coches compartidos y la formación en resistencia no violenta.",
        },
        {
          forma: "arte",
          texto:
            "Ahora, este capítulo es el más criticado del libro y con razón. Rosa Parks no era una costurera cansada que actuó por impulso: era secretaria de la sección local de la asociación nacional para el progreso de la gente de color y llevaba doce años de activismo.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Meses antes de aquel día había asistido a un curso de formación en desobediencia civil en una escuela de Tennessee. Su gesto no fue espontáneo, y la organización que había detrás llevaba años esperando el caso adecuado para llevarlo a los tribunales.",
        },
        {
          forma: "texto",
          texto:
            "El caso de Claudette Colvin no se usó, entre otras razones, porque quedó embarazada y los organizadores temieron que el rival lo utilizara para desacreditar el caso. Es una decisión estratégica, no un fenómeno de redes sociales.",
        },
        {
          forma: "texto",
          texto:
            "Contarlo como una historia de lazos débiles convierte una campaña política preparada durante años en un fenómeno casi automático, y le quita el mérito a la gente que la organizó. Ese es el reproche, y es serio.",
        },
        {
          forma: "clave",
          rotulo: "El problema de fondo del libro",
          frase: "Es el mismo en los tres capítulos de empresas y en este: coge un resultado conocido y lo explica hacia atrás con un solo factor. El éxito de Alcoa se atribuye a la seguridad laboral; el boicot, a los lazos débiles. Suena impecable y no se puede comprobar.",
        },
        {
          forma: "texto",
          texto:
            "Alcoa vendió divisiones, reestructuró plantas, se benefició de ciclos favorables del precio del aluminio y tuvo un director general excepcional en muchas más cosas que en seguridad. Nada de eso aparece.",
        },
        {
          forma: "texto",
          texto:
            "Es el defecto característico de la divulgación construida sobre casos: la historia se elige porque el final es bueno, y después se busca la causa. Los cientos de empresas que priorizaron la seguridad laboral y quebraron igualmente no dan para un capítulo.",
        },
        {
          forma: "texto",
          texto:
            "El último capítulo del libro plantea la pregunta que todo el mundo se hace al llegar hasta aquí: si tanto de lo que hacemos es automático, ¿de qué somos responsables?",
        },
        {
          forma: "texto",
          texto:
            "Y lo hace enfrentando dos casos reales. Un hombre británico que mató a su mujer mientras dormía, con un trastorno del sueño diagnosticado, y al que un tribunal absolvió porque no había ninguna conciencia implicada en el acto.",
        },
        {
          forma: "arte",
          texto:
            "Y una mujer que perdió la casa de sus padres y se arruinó jugando en casinos, arrastrada por un hábito que ella describía igual de incontrolable, y a la que un tribunal condenó a pagar hasta el último dólar de sus deudas de juego.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "La diferencia que establece Duhigg es que ella sabía que tenía el hábito y él no podía saberlo. Y de ahí saca la conclusión moral del libro: en cuanto conoces el bucle, pasa a ser responsabilidad tuya.",
        },
        {
          forma: "texto",
          texto:
            "Es una conclusión discutible, y es la misma que hace que este tipo de libros resulten a la vez estimulantes y un poco crueles: si todo se reduce a identificar la señal y cambiar la rutina, quien no lo consigue es porque no ha querido.",
        },
        {
          forma: "texto",
          texto:
            "Lo que la gente cree de este libro y no es verdad. Lo primero: que dice que un hábito se instala en veintiún días. No lo dice en ninguna página, y esa cifra viene de otro sitio y no tiene respaldo.",
        },
        {
          forma: "texto",
          texto:
            "Segundo: que los hábitos se pueden eliminar. La propia regla de oro del libro dice lo contrario: se sustituye la rutina y se conservan la señal y la recompensa, porque el bucle no se borra.",
        },
        {
          forma: "texto",
          texto:
            "Tercero, y es el más importante: que la fuerza de voluntad es un músculo que se agota. Esa es la parte que no ha resistido las réplicas, y quien organice su vida alrededor de administrar un depósito que quizá no existe está resolviendo un problema equivocado.",
        },
        {
          forma: "texto",
          texto:
            "Cuarto: que Rosa Parks era una mujer cansada que se negó sin más. Era una activista formada, con doce años de militancia, y detrás había una organización esperando el momento.",
        },
        {
          forma: "texto",
          texto:
            "Y quinto: que es un manual. Es un libro de reportajes. El método práctico está en un apéndice de veinte páginas que el autor añadió porque los lectores se lo pidieron después de publicarlo.",
        },
        {
          forma: "texto",
          texto:
            "Quitado todo eso, queda bastante y queda bueno. El bucle de señal, rutina y recompensa sigue siendo la mejor manera sencilla de mirar un comportamiento propio y entender por qué se repite.",
        },
        {
          forma: "texto",
          texto:
            "La regla de sustituir en vez de suprimir sigue siendo el consejo más práctico que existe sobre dejar algo.",
        },
        {
          forma: "texto",
          texto:
            "Y los planes escritos con hora, lugar y contingencia siguen siendo, diez años después, una de las técnicas con más apoyo experimental de toda la psicología aplicada.",
        },
        {
          forma: "texto",
          texto:
            "El libro se sostiene si se lee como lo que es: un reportaje excelente sobre una idea razonable, escrito antes de que una parte de su cimiento se cayera.",
        },
      ],
    },
  ],
};

export const ARTE_DE_AMAR: Resumen = {
  id: "arte-de-amar",
  titulo: "El arte de amar",
  autor: "Erich Fromm",
  ano: 1956,
  gancho: "Ciento treinta páginas escritas en unos meses que han vendido más de veinticinco millones de ejemplares, y de las que su autor llegó a decir que se sentía casi avergonzado.",
  porQue:
    "Porque su tesis —que amar es una capacidad que se aprende y no una suerte que ocurre— sigue siendo la más útil que se ha escrito sobre el asunto, y porque el capítulo sobre madres y padres envejeció fatal.",
  partes: [
    {
      titulo: "La chica que quiso ser enterrada con su padre",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Fráncfort, hacia 1912. Un niño de doce años, hijo único de una familia judía practicante, conoce a una amiga de la casa: una pintora de veinticinco años, guapa y con talento, que vive con su padre viudo y que él encuentra fascinante y algo incomprensible.",
        },
        {
          forma: "texto",
          texto:
            "El padre de la joven muere de repente. Pocos días después, ella se quita la vida y deja escrito que quiere que la entierren junto a él. El niño oye la noticia en su casa y no consigue entenderla de ninguna manera.",
        },
        {
          forma: "clave",
          rotulo: "La pregunta que se le quedó",
          frase: "Cómo es posible que alguien joven, con talento y con la vida entera por delante, prefiera morir antes que seguir sin su padre. Contó muchas veces que aquella pregunta, hecha a los doce años, es el origen de todo lo que escribió después.",
        },
        {
          forma: "texto",
          texto:
            "El niño era Erich Fromm, nacido en Fráncfort en 1900. Describió a su padre como un comerciante de vino ansioso y de humor cambiante, y a su madre como una mujer con tendencia a la melancolía, y dijo que se crio en una casa profundamente rara.",
        },
        {
          forma: "texto",
          texto:
            "La segunda cosa que lo marcó fue la guerra. Tenía catorce años cuando empezó la Primera Guerra Mundial y vio cómo profesores y adultos razonables se volvían fanáticos de un día para otro, convencidos de que los ingleses eran monstruos.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale su otra pregunta permanente, la que ocupa la mitad de su obra: cómo es posible que millones de personas normales adopten a la vez una locura colectiva, y qué es lo que en una sociedad las empuja a ello.",
        },
        {
          forma: "arte",
          texto:
            "Esas dos preguntas —por qué alguien se destruye por amor y por qué una sociedad entera enloquece— son las dos mitades de su trabajo. Estudió sociología en Heidelberg, se doctoró a los veintidós años y después se formó como psicoanalista, buscando respuesta a las dos a la vez.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "En los años treinta trabajó en el Instituto de Investigación Social de Fráncfort, la llamada Escuela de Fráncfort, junto a Adorno, Horkheimer y Marcuse, un grupo que intentaba combinar el análisis marxista de la sociedad con el psicoanálisis de Freud.",
        },
        {
          forma: "texto",
          texto:
            "En 1934, siendo judío y estando el nazismo en el poder, se marchó a Estados Unidos, donde vivió el resto de su vida académica, primero en Nueva York y después en México, donde fundó una escuela de psicoanálisis.",
        },
        {
          forma: "texto",
          texto:
            "Su ruptura con sus antiguos compañeros fue dura. Fromm rechazó dos piezas centrales de Freud: la teoría de la libido, que explica la conducta por la energía sexual, y la pulsión de muerte. Para él, lo decisivo no era la biología sino las condiciones sociales.",
        },
        {
          forma: "clave",
          rotulo: "Su desacuerdo con Freud",
          frase: "Freud pensaba que la sociedad reprime instintos que existirían igual sin ella. Fromm sostenía que la sociedad no reprime a un individuo dado: lo fabrica. Que el carácter de una persona se forma con lo que su época necesita que sea, y que ahí está la clave.",
        },
        {
          forma: "texto",
          texto:
            "Los freudianos ortodoxos lo llamaron revisionista, que en aquel contexto era un insulto, y Marcuse le dedicó páginas muy duras acusándolo de haber convertido el psicoanálisis en una moral de adaptación y de conformismo.",
        },
        {
          forma: "texto",
          texto:
            "Su primer libro importante, El miedo a la libertad, de 1941, es el que sigue teniendo más prestigio académico. Sostiene que la libertad moderna liberó al individuo de las ataduras antiguas y lo dejó a la intemperie, y que mucha gente prefiere entregarla a cambio de seguridad.",
        },
        {
          forma: "texto",
          texto:
            "Escrito en 1941, sobre por qué millones de alemanes se entregaron voluntariamente a un régimen que los mandaba a morir, es un libro que se sigue citando cada vez que un movimiento autoritario crece en algún sitio.",
        },
        {
          forma: "arte",
          texto:
            "El arte de amar es de quince años después y es un libro completamente distinto: corto, sin aparato académico, sin notas, escrito en un tono directo y pensado para cualquier lector. Fromm lo consideraba menor y es el único suyo que casi todo el mundo conoce.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Ha vendido más de veinticinco millones de ejemplares, está traducido a más de cincuenta idiomas y lleva desde 1956 sin dejar de reeditarse en ningún país. Es, con diferencia, el libro sobre el amor más vendido del siglo veinte.",
        },
        {
          forma: "texto",
          texto:
            "Su éxito tiene una explicación de contexto que conviene tener presente. Salió en la América de los años cincuenta, en pleno auge del matrimonio temprano, los suburbios y la familia de anuncio, y fue de los primeros libros que le dijo a ese público que aquello podía estar vacío por dentro.",
        },
        {
          forma: "texto",
          texto:
            "Y lo dijo sin la jerga del psicoanálisis, que hasta entonces era el único vocabulario disponible para hablar de estas cosas. Fromm escribió sobre la vida sentimental de la gente corriente en un lenguaje que la gente corriente podía leer, y eso en 1956 casi no lo hacía nadie.",
        },
        {
          forma: "texto",
          texto:
            "En España llegó bastante después, con la editorial Paidós, y se convirtió en uno de esos libros que circulan de mano en mano entre estudiantes universitarios durante décadas. Es probable que esté en la estantería de alguien de tu familia sin que nadie recuerde quién lo compró.",
        },
        {
          forma: "texto",
          texto:
            "Y empieza con una advertencia al lector en la primera página, que es también la mejor manera de saber si este libro es para uno o no lo es.",
        },
        {
          forma: "texto",
          texto:
            "Dice que quien espere instrucciones fáciles para ser amado va a quedar decepcionado.",
        },
        {
          forma: "texto",
          texto:
            "Que amar es un arte, como la música o la medicina.",
        },
        {
          forma: "texto",
          texto:
            "Y que un arte exige teoría, práctica diaria y que sea lo más importante de tu vida.",
        },
      ],
    },

    {
      titulo: "El problema no es encontrar a alguien",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Su diagnóstico de partida es que casi todo el mundo se plantea el amor de una manera equivocada, y lo formula en tres errores concretos que se pueden reconocer en cualquier conversación de sobremesa sobre relaciones.",
        },
        {
          forma: "texto",
          texto:
            "El primero es pensar que el problema es ser amado y no amar. La gente se pregunta cómo resultar más atractiva, cómo caer mejor, cómo conseguir que alguien se enamore. Casi nadie se pregunta si tiene la capacidad de querer a otro.",
        },
        {
          forma: "texto",
          texto:
            "El segundo es pensar que el problema es de objeto y no de facultad. Es decir: creer que amar es fácil y que lo difícil es encontrar a la persona adecuada. Con esa premisa, cuando algo va mal la conclusión siempre es que no era la persona.",
        },
        {
          forma: "clave",
          rotulo: "El tercer error",
          frase: "Confundir la experiencia inicial de enamorarse con el estado permanente de amar. Fromm distingue el momento en que dos desconocidos derriban de golpe la pared que los separa —que es intenso y milagroso— del trabajo largo de sostener eso, que no se parece en nada.",
        },
        {
          forma: "texto",
          texto:
            "Su observación sobre eso es dura: cuanto más solos estaban los dos antes, más milagroso les parece ese momento, y más probable es que confundan la intensidad del alivio con la profundidad del vínculo.",
        },
        {
          forma: "texto",
          texto:
            "A partir de ahí introduce su análisis social, que es la parte más marcada por su época y a la vez la que más gente reconoce. Sostiene que en una sociedad de mercado, la gente aplica al amor la lógica del mercado sin darse cuenta.",
        },
        {
          forma: "arte",
          texto:
            "Su formulación es que dos personas se enamoran cuando sienten que han encontrado el mejor objeto disponible en el mercado teniendo en cuenta el valor de cambio de cada una. Se busca una ganga: alguien un poco por encima de lo que uno cree merecer.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Escrito en 1956, con las relaciones organizadas por barrio, clase y presentaciones familiares. Con aplicaciones que muestran perfiles ordenados, con filtros de altura, ingresos y edad, esa frase describe el mecanismo con una literalidad que Fromm no podía imaginar.",
        },
        {
          forma: "texto",
          texto:
            "Su segundo diagnóstico social es el del matrimonio como equipo bien avenido. Describe parejas que funcionan como una sociedad con reparto de tareas, cordialidad permanente y ausencia de conflicto, y sostiene que eso suele ser el nombre elegante de dos soledades ordenadas.",
        },
        {
          forma: "texto",
          texto:
            "Y hace una observación sobre el trato justo que sigue siendo incómoda: que la idea de dar lo mismo que se recibe, aplicada al amor, es una regla comercial, y que quien lleva la cuenta de lo que aporta cada uno está haciendo contabilidad, no queriendo.",
        },
        {
          forma: "clave",
          rotulo: "El fondo del libro",
          frase: "Para Fromm, el problema humano fundamental es la separación. Somos conscientes de estar separados de los demás y de la naturaleza, sabemos que vamos a morir, y esa conciencia produce una angustia de la que hay que hacer algo. El amor es su única solución completa.",
        },
        {
          forma: "texto",
          texto:
            "Antes de llegar ahí repasa las salidas que él considera fallidas, y ese repaso es de lo mejor del libro porque describe cosas que cualquiera ha hecho alguna vez para no estar solo consigo mismo.",
        },
        {
          forma: "texto",
          texto:
            "La primera son los estados de trance: el alcohol, las drogas, el sexo compulsivo, las experiencias de descontrol colectivo. Funcionan porque disuelven la conciencia de estar separado, y fallan porque duran poco, hay que repetirlos y dejan a la persona peor que antes.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es la conformidad con el grupo: vestirse igual, opinar igual, querer lo mismo que todo el mundo. Elimina la angustia de estar solo al precio de eliminar a la persona, y Fromm sostiene que es la salida mayoritaria en las sociedades modernas.",
        },
        {
          forma: "arte",
          texto:
            "La tercera es el trabajo creativo, que sí une a alguien con el mundo mientras dura, y que no une con otra persona. El carpintero está unido a su madera y el escritor a su texto, y los dos siguen igual de solos frente a otro ser humano.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "La única salida completa, dice, es la unión con otra persona conservándose uno mismo. Y esa condición, la de no disolverse, es lo que separa el amor de la dependencia y lo que hace que sea difícil.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale la fórmula más citada del libro: que en el amor maduro dos seres se convierten en uno y siguen siendo dos. Suena a frase de felicitación y en el contexto significa algo bastante exigente.",
        },
        {
          forma: "texto",
          texto:
            "Significa que si la relación exige que alguien deje de tener opiniones, amigos o proyectos propios, eso no es una versión intensa del amor.",
        },
        {
          forma: "texto",
          texto:
            "Fromm describe dos maneras concretas de fallar en esa condición, y las dos tienen nombre en el libro. La primera es la sumisión: la persona que resuelve su angustia de estar sola convirtiéndose en parte de otra, adoptando sus opiniones, sus horarios y sus amistades.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es la dominación: la persona que resuelve la misma angustia absorbiendo a otra, decidiendo por ella y necesitando que dependa. Y su observación es que las dos se necesitan mutuamente, que se buscan con precisión y que desde fuera parecen una pareja muy unida.",
        },
        {
          forma: "texto",
          texto:
            "Lo importante de ese análisis es que las dos posiciones son la misma cosa: dos maneras de no soportar la propia soledad. Ninguno de los dos está queriendo al otro; los dos están usando al otro para no tener que estar consigo mismos.",
        },
        {
          forma: "texto",
          texto:
            "Es una de las formas de fusión que él considera fracasos, y les dedica un capítulo entero.",
        },
        {
          forma: "texto",
          texto:
            "Y con el diagnóstico hecho, pasa a decir de qué está compuesto exactamente lo que él llama amor.",
        },
        {
          forma: "texto",
          texto:
            "Son cuatro cosas, y ninguna es un sentimiento.",
        },
      ],
    },

    {
      titulo: "Cuidado, responsabilidad, respeto, conocimiento",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El primer elemento es el cuidado, y Fromm lo define con un ejemplo doméstico: si una mujer dice que adora las flores y uno ve que se le mueren todas por no regarlas, no le creemos. El amor es una preocupación activa por la vida de lo que se ama.",
        },
        {
          forma: "texto",
          texto:
            "El criterio es sencillo y sirve para juzgar cualquier relación: no se mide por lo que alguien siente ni por lo que dice, sino por lo que hace con su tiempo y su atención cuando eso le cuesta algo.",
        },
        {
          forma: "texto",
          texto:
            "El segundo es la responsabilidad, y aquí hace una distinción que importa mucho. No la entiende como una obligación impuesta desde fuera, sino como la capacidad de responder: estar disponible cuando el otro necesita algo, sin que haya que pedírselo por escrito.",
        },
        {
          forma: "clave",
          rotulo: "El tercero, el que corrige a los otros dos",
          frase: "El respeto, que viene del latín respicere, mirar. Es la capacidad de ver a la otra persona tal como es y no como me conviene que sea. Sin respeto, dice, el cuidado y la responsabilidad degeneran en control, y el que controla siempre dice que lo hace por amor.",
        },
        {
          forma: "texto",
          texto:
            "Esa frase es de 1956 y describe con precisión lo que hoy se llamaría control en la pareja: una persona que vigila, decide y limita, y que tiene la convicción sincera de estar cuidando. Fromm identifica el mecanismo sin nombrarlo así.",
        },
        {
          forma: "texto",
          texto:
            "El cuarto elemento es el conocimiento, y no se refiere a saber datos del otro. Se refiere a conocerlo desde dentro, a entender por qué hace lo que hace, y sobre todo a saber ver la tristeza o el miedo que hay debajo de un enfado.",
        },
        {
          forma: "arte",
          texto:
            "Los cuatro se sostienen entre sí y ninguno funciona solo. Cuidar sin conocer produce ayuda que no sirve. Respetar sin cuidar es indiferencia educada. Y conocer sin responsabilidad es lo que hace un buen observador, que puede describir a alguien perfectamente y no mover un dedo por él.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Con esos cuatro elementos analiza después los distintos tipos de amor, y ahí es donde el libro se vuelve desigual: algunas partes siguen siendo excelentes y otras están claramente escritas en 1956 y se nota en cada línea.",
        },
        {
          forma: "texto",
          texto:
            "El amor fraternal es para él la base de todos los demás: el sentido de responsabilidad hacia cualquier ser humano por el hecho de serlo. Y sostiene que solo se aprende de verdad queriendo a quien no sirve para nada, porque querer al útil es una transacción.",
        },
        {
          forma: "texto",
          texto:
            "El amor materno lo describe como el único incondicional: no hay que ganárselo, no depende de portarse bien, y su tarea más difícil es exactamente la contraria de la que parece, porque consiste en soltar.",
        },
        {
          forma: "clave",
          rotulo: "Su idea sobre la maternidad",
          frase: "Que el amor de una madre es el único cuyo objetivo declarado es volverse innecesario. Una madre que lo consigue tiene un hijo que se va, y una que no lo consigue tiene un hijo que se queda. Y la segunda opción no es más amorosa que la primera.",
        },
        {
          forma: "texto",
          texto:
            "El amor paterno lo describe como lo opuesto: condicional, ligado al mérito, al esfuerzo y a los logros, y con la ventaja de que se puede conquistar y la desventaja de que se puede perder.",
        },
        {
          forma: "texto",
          texto:
            "Y aquí hay que parar, porque esta es la parte del libro que peor ha envejecido. Fromm no describe dos funciones que cualquier adulto puede ejercer: las atribuye a la madre y al padre, y las liga a la naturaleza de cada uno.",
        },
        {
          forma: "arte",
          texto:
            "Habla de la madre como la tierra, la leche y la miel, y del padre como la ley, el pensamiento y la disciplina. Está tomando el reparto de roles de la clase media alemana y americana de su época y presentándolo como una estructura humana permanente.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Eso hoy es insostenible. Hay padres que ejercen lo que él llama amor materno y madres que ejercen lo que llama paterno, y hay familias con dos madres, con un padre solo o con abuelos criando, y ninguna de ellas encaja en el esquema.",
        },
        {
          forma: "texto",
          texto:
            "Lo salvable de ese capítulo es la distinción entre dos tipos de amor —el que no hay que ganarse y el que se conquista— y la idea de que un adulto necesita haber recibido los dos y acabar dándose los dos a sí mismo.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un segundo punto del libro que hoy es directamente erróneo y conviene decirlo sin rodeos: sus comentarios sobre la homosexualidad, que trata según la ortodoxia psicoanalítica de su época, como una unión que no alcanza la polaridad.",
        },
        {
          forma: "texto",
          texto:
            "Es falso, era la posición dominante en la psiquiatría de 1956 y dejó de serlo oficialmente en 1973. No invalida el resto del libro y sí obliga a leer esas páginas concretas como lo que son: un prejuicio de época puesto por escrito.",
        },
        {
          forma: "texto",
          texto:
            "El capítulo que sí ha aguantado entero es el del amor a uno mismo, y es probablemente el más útil de todo el libro.",
        },
        {
          forma: "texto",
          texto:
            "Porque desmonta una idea que sigue circulando: que quererse a uno mismo y ser egoísta son la misma cosa en distinto grado.",
        },
        {
          forma: "texto",
          texto:
            "Fromm sostiene que son exactamente lo contrario.",
        },
      ],
    },

    {
      titulo: "El egoísta no se quiere nada",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Su argumento parte de una observación lógica: si el amor es una actitud hacia los seres humanos, y yo soy un ser humano, entonces excluirme a mí mismo de esa actitud es una contradicción. No hay ninguna razón para que la única persona a la que no puedo querer sea yo.",
        },
        {
          forma: "texto",
          texto:
            "La confusión, dice, viene de la moral cristiana y protestante, que enseñó durante siglos que amarse a uno mismo es pecado y que la virtud consiste en negarse. De ahí sale la idea de que cuanto menos se quiera uno, más querrá a los demás.",
        },
        {
          forma: "clave",
          rotulo: "Su tesis",
          frase: "El egoísta no se quiere demasiado: no se quiere nada. Precisamente porque no encuentra en sí mismo nada que valga la pena, tiene que estar acaparando todo el rato, buscando fuera lo que no tiene dentro. La avidez es el síntoma de un vacío, no de un exceso.",
        },
        {
          forma: "texto",
          texto:
            "Su ejemplo clínico es la madre que se sacrifica por todos, que no descansa nunca y que repite que ella no cuenta. Fromm sostiene que esos hijos suelen crecer angustiados, y que reciben un mensaje incómodo: que la vida es una carga y el amor una deuda.",
        },
        {
          forma: "texto",
          texto:
            "Es una observación dura y probablemente la más citada de este capítulo: alguien que no soporta su propia vida no puede enseñar a nadie a disfrutar de la suya, por mucho que se sacrifique. La generosidad sin autoestima transmite culpa.",
        },
        {
          forma: "texto",
          texto:
            "Con eso cierra la parte teórica, y el último capítulo del libro es el que promete el título: la práctica. Cómo se aprende esto. Y empieza con una advertencia honesta que a mucha gente le sienta mal.",
        },
        {
          forma: "arte",
          texto:
            "Dice que la práctica de un arte no se puede enseñar en un libro, igual que no se aprende a tocar el piano leyendo sobre pianos, y que lo único que él puede hacer es describir las condiciones. El resto no está en estas páginas.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Las condiciones que enumera son cuatro, y las mismas que harían falta, dice, para aprender cualquier oficio difícil. La primera es la disciplina: hacerlo todos los días, no cuando apetezca, y no como una imposición sino como algo que uno ha decidido que importa.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es la concentración, y aquí hace un diagnóstico de su época que hoy resulta casi profético: sostiene que la gente moderna es incapaz de estar haciendo una sola cosa, que come mientras lee, oye la radio mientras habla y fuma mientras trabaja.",
        },
        {
          forma: "texto",
          texto:
            "Y da un ejercicio concreto, el único del libro entero: sentarse relajado, sin hacer nada, sin leer y sin música, y aguantar veinte minutos así, notando la respiración. Dice que casi nadie es capaz al principio y que ese es exactamente el problema.",
        },
        {
          forma: "clave",
          rotulo: "Por qué eso tiene que ver con el amor",
          frase: "Porque quien no soporta estar veinte minutos consigo mismo no puede estar solo, y quien no puede estar solo busca a otra persona para no estarlo. Y eso, dice Fromm, no es amar: es usar a alguien como remedio contra la propia compañía.",
        },
        {
          forma: "texto",
          texto:
            "La aplicación práctica de la concentración a la relación es escuchar. Fromm sostiene que casi nadie escucha de verdad: se oye mientras se prepara la respuesta, se interrumpe, se aconseja sin que nadie lo haya pedido y se lleva la conversación al terreno propio.",
        },
        {
          forma: "texto",
          texto:
            "La tercera condición es la paciencia. Su comparación es que alguien que quiera resultados rápidos no aprenderá nunca un arte, y que la impaciencia moderna viene de una organización del tiempo en la que todo lo que va despacio parece una pérdida.",
        },
        {
          forma: "arte",
          texto:
            "Y la cuarta es que sea una preocupación suprema: que amar ocupe en la vida de alguien el sitio que ocupa el trabajo, y no el rato que sobra al final del día. Sin eso, dice, se puede hacer bastante bien todo lo anterior y no llegar a ninguna parte.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Añade dos requisitos más que son los que menos se citan. El primero es superar el narcisismo, que él define como la incapacidad de percibir como real lo que ocurre fuera de uno mismo. Y propone un criterio para medirlo: la objetividad.",
        },
        {
          forma: "texto",
          texto:
            "Su ejemplo es doméstico y funciona: una madre convencida de que su hijo no tiene ningún problema y otra convencida de que su hijo es un desastre son igual de narcisistas, porque las dos están viendo lo que necesitan ver y no lo que hay.",
        },
        {
          forma: "texto",
          texto:
            "El segundo requisito es la fe, y aclara enseguida que no habla de religión. Habla de fe racional: la convicción, basada en la observación, de que una persona es de determinada manera y de que va a seguir siéndolo aunque hoy se haya comportado mal.",
        },
        {
          forma: "texto",
          texto:
            "Sin esa confianza, dice, no se puede querer a nadie durante mucho tiempo, porque cualquier mal día se convierte en una revisión completa de la relación y nadie aguanta que lo evalúen entero cada semana.",
        },
        {
          forma: "texto",
          texto:
            "Y añade que tener fe en alguien exige coraje, porque significa aceptar el riesgo de equivocarse y de que a uno le hagan daño.",
        },
        {
          forma: "texto",
          texto:
            "Ese es el libro entero, en ciento treinta páginas y sin una sola cita bibliográfica.",
        },
        {
          forma: "texto",
          texto:
            "Y con veinticinco millones de ejemplares vendidos, que es lo que hay que explicar al final.",
        },
      ],
    },

    {
      titulo: "El libro que le dio vergüenza",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Fromm se refirió a este libro en varias ocasiones con una mezcla de orgullo y de incomodidad. Dijo que le producía cierta vergüenza que su obra más leída fuese la más sencilla, escrita deprisa y sin el aparato de sus libros académicos.",
        },
        {
          forma: "texto",
          texto:
            "También le molestaba cómo se leía. Sostenía que la gente lo compraba buscando una receta para arreglar su vida sentimental, saltándose la parte central del libro, que es una crítica bastante dura a la sociedad en la que ese lector vive.",
        },
        {
          forma: "clave",
          rotulo: "Lo que el libro dice de verdad",
          frase: "Que en una sociedad organizada alrededor del intercambio y del consumo, el amor en el sentido que él describe es casi imposible, y que quien lo consiga lo hará contra la corriente. No es un libro optimista, aunque se venda en la sección de autoayuda.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, dónde falla. Lo primero y más importante: no tiene ninguna base empírica. No hay un estudio, ni un dato, ni un caso clínico desarrollado. Son afirmaciones de un hombre inteligente que ha pensado mucho, y nada más que eso.",
        },
        {
          forma: "texto",
          texto:
            "Eso importa porque desde 1956 se ha investigado muchísimo sobre relaciones: teoría del apego, estudios longitudinales de parejas a lo largo de décadas, trabajos sobre qué predice una ruptura. Nada de eso existía, y el libro se lee a veces como si lo sustituyera.",
        },
        {
          forma: "texto",
          texto:
            "Curiosamente, buena parte de lo que se ha encontrado después va en su dirección: la calidad de la relación depende más de conductas concretas y sostenidas que de la intensidad inicial. Es lo que él decía sin poder demostrarlo.",
        },
        {
          forma: "arte",
          texto:
            "El segundo fallo es el capítulo sobre madres y padres, que congela como naturaleza humana el reparto de papeles de una familia burguesa europea de los años cincuenta, y que hoy no describe a la mayoría de las familias de ningún país.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "El tercero, ya dicho: sus afirmaciones sobre la homosexualidad son falsas y responden a la psiquiatría de su tiempo. Conviene saberlo antes de abrir el libro, para no llevarse la sorpresa a mitad de un capítulo por lo demás razonable.",
        },
        {
          forma: "texto",
          texto:
            "El cuarto es que no hay poder en ninguna página. No aparecen la violencia en la pareja, ni el dinero, ni quién hace las tareas de la casa, ni la dependencia económica de quien no puede irse. Todo ocurre entre dos personas igualmente libres, y eso casi nunca es cierto.",
        },
        {
          forma: "clave",
          rotulo: "El quinto, el más señalado por sus críticos",
          frase: "El capítulo de la práctica es cortísimo y vago comparado con el diagnóstico. Después de cien páginas explicando por qué casi nadie sabe amar, dedica quince a decir cómo se aprende, y buena parte de ellas a avisar de que eso no se puede enseñar en un libro.",
        },
        {
          forma: "texto",
          texto:
            "Es honesto y también es una salida. Marcuse le reprochó justamente eso: que su obra terminaba en una exhortación moral a mejorar personalmente, sin decir nada sobre cómo se cambian las condiciones sociales que él mismo señalaba como causa.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un sexto reproche de estilo: escribe en un tono profético, con frases rotundas y sin condicionales, que hace difícil discutirle nada. O se está de acuerdo con la frase o no, pero no hay por dónde entrar a debatirla.",
        },
        {
          forma: "texto",
          texto:
            "Lo que la gente cree y no es verdad. Lo primero: que es un manual para encontrar pareja. Es lo contrario. Su tesis central es que el problema no es encontrar a la persona adecuada, y quien lo lea buscando eso se va a irritar en el primer capítulo.",
        },
        {
          forma: "texto",
          texto:
            "Segundo: que amarse a uno mismo es una versión suave del egoísmo. Fromm sostiene que son opuestos, y que el egoísta se comporta así porque no encuentra nada en sí mismo, no porque se sobre.",
        },
        {
          forma: "arte",
          texto:
            "Tercero: que Fromm era freudiano. Rechazó la teoría de la libido y la pulsión de muerte, puso las condiciones sociales en el centro, y los freudianos ortodoxos lo trataron de revisionista durante décadas. Estaba más cerca de Marx que de Freud en lo esencial.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Cuarto: que es un libro fácil. Es corto, que no es lo mismo. Cien de sus ciento treinta páginas son análisis social y antropológico, y la parte que la gente compra ocupa la última quinta parte.",
        },
        {
          forma: "texto",
          texto:
            "Y quinto: que va del enamoramiento. Va exactamente de lo otro: de qué hay que hacer cuando eso se pasa, que es a los pocos meses y sin excepciones.",
        },
        {
          forma: "texto",
          texto:
            "Fromm murió en Suiza en 1980, cinco días antes de cumplir ochenta años, después de tres infartos y de haber escrito veinte libros más que casi nadie ha leído.",
        },
        {
          forma: "texto",
          texto:
            "El balance justo es este: un ensayo sin pruebas, escrito con prisa, con dos capítulos que hoy hay que leer con la fecha delante, y con una tesis central que sigue siendo la más útil que se ha formulado sobre el asunto.",
        },
        {
          forma: "texto",
          texto:
            "Que amar no es algo que te ocurre si tienes suerte.",
        },
        {
          forma: "texto",
          texto:
            "Es una capacidad que se tiene o no se tiene, que se puede entrenar, y que se entrena aprendiendo a estar solo, a escuchar y a mirar a alguien tal como es.",
        },
        {
          forma: "texto",
          texto:
            "Y que si eso no se aprende, cambiar de persona no arregla absolutamente nada.",
        },
      ],
    },
  ],
};

export const LENGUAJES_AMOR: Resumen = {
  id: "lenguajes-amor",
  titulo: "Los cinco lenguajes del amor",
  autor: "Gary Chapman",
  ano: 1992,
  gancho: "Un pastor baptista de Carolina del Norte releyó veinte años de notas de sus sesiones de pareja, agrupó las quejas en cinco categorías y escribió el libro sobre relaciones más vendido del mundo.",
  porQue:
    "Porque veinte millones de personas organizan su vida de pareja con este esquema, y porque su afirmación central —que hay que emparejar los lenguajes— es la única comprobable y no ha salido bien de las comprobaciones.",
  partes: [
    {
      titulo: "Las notas de un pastor de Winston-Salem",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Winston-Salem, Carolina del Norte, finales de los años ochenta. Un pastor baptista que lleva dos décadas atendiendo a parejas de su congregación se sienta a revisar las carpetas con las notas de esas sesiones, que ocupan varios archivadores de su despacho.",
        },
        {
          forma: "texto",
          texto:
            "Lo que busca no es un caso concreto: busca un patrón. Y lo que le llama la atención es que las quejas, después de veinte años y de cientos de parejas distintas, se repiten con muy pocas variaciones y en muy pocas formas.",
        },
        {
          forma: "clave",
          rotulo: "Lo que se repetía",
          frase: "Ella dice que él nunca le dice nada bonito. Él dice que ella no valora todo lo que hace en casa. Ella dice que nunca pasan tiempo juntos de verdad. Él dice que ella lo rechaza físicamente. Y casi ninguno se entiende con el otro.",
        },
        {
          forma: "texto",
          texto:
            "Al agrupar las quejas por tipo le salieron cinco montones, y esa clasificación es todo el libro. La hipótesis que construyó encima es que cada persona tiene una manera principal de sentirse querida, y que lo que a uno le llega puede no llegarle al otro.",
        },
        {
          forma: "texto",
          texto:
            "El pastor se llamaba Gary Chapman, había nacido en 1938, tenía formación en antropología y un doctorado en educación de adultos por un seminario teológico baptista, y llevaba desde los años setenta atendiendo matrimonios de su iglesia sin cobrar por ello.",
        },
        {
          forma: "texto",
          texto:
            "Conviene decirlo pronto porque cambia cómo se lee el libro: no es psicólogo, no es terapeuta con licencia clínica y no ha hecho investigación. Es un pastor con muchísima experiencia práctica escuchando a parejas en dificultades.",
        },
        {
          forma: "arte",
          texto:
            "El libro salió en 1992 en una editorial evangélica pequeña vinculada a un instituto bíblico de Chicago, sin apenas promoción. Tardó casi una década en despegar, empujado por el boca a boca y por las redes de iglesias, hasta convertirse en un fenómeno mundial.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Ha vendido más de veinte millones de ejemplares, está traducido a más de cincuenta idiomas y ha generado versiones para niños, adolescentes, solteros, militares, familias monoparentales, el lugar de trabajo y hasta un libro entero sobre cómo pedir perdón.",
        },
        {
          forma: "texto",
          texto:
            "Su origen religioso está declarado y en las ediciones originales es bastante visible, con citas bíblicas y con un marco de compromiso matrimonial explícito. Las ediciones más recientes lo han ido dejando en segundo plano para ampliar el público.",
        },
        {
          forma: "texto",
          texto:
            "Eso importa por una razón concreta que veremos al final: hay consejos en el libro que solo tienen sentido dentro de una idea del matrimonio como compromiso indisoluble, y que aplicados fuera de ese marco pueden ser malos consejos.",
        },
        {
          forma: "clave",
          rotulo: "Su observación de partida",
          frase: "Que en la mayoría de las parejas que atendía no había maldad ni desinterés. Había dos personas esforzándose de verdad, cada una a su manera, y ninguna de las dos recibía nada de lo que necesitaba. El problema no era la falta de amor: era la traducción.",
        },
        {
          forma: "texto",
          texto:
            "Esa idea es la que ha hecho que el libro funcione durante treinta años, porque le da a mucha gente una explicación que no acusa a nadie. No es que tu pareja no te quiera; es que te lo está diciendo en un idioma que tú no hablas.",
        },
        {
          forma: "texto",
          texto:
            "Y viene con una promesa muy concreta: que si aprendes el idioma del otro y lo usas deliberadamente, aunque no te salga natural, la relación cambia. Que es una habilidad y no una cuestión de compatibilidad.",
        },
        {
          forma: "texto",
          texto:
            "El libro está escrito en un formato reconocible: capítulos cortos, cada uno con un caso de consulta, con nombres y diálogos, y con una moraleja al final. No hay una sola referencia, ni un estudio, ni una cifra en todo el volumen.",
        },
        {
          forma: "arte",
          texto:
            "Es importante saberlo antes de empezar. Los casos son reales según el autor y están contados de memoria y desde su punto de vista, y en todos ellos el consejo funciona. No aparece ninguna pareja a la que este método no le sirviera.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Antes de enumerar los cinco lenguajes, dedica un capítulo a explicar por qué hace falta un método, y ese capítulo es de lo mejor del libro porque describe algo que casi todo el mundo ha vivido.",
        },
        {
          forma: "texto",
          texto:
            "Su descripción de esa fase inicial es bastante precisa: la sensación de que el otro es perfecto, la incapacidad de ver sus defectos, la certeza de que esto va a durar así siempre y la convicción de que a los demás les pasa lo mismo pero con menos intensidad.",
        },
        {
          forma: "texto",
          texto:
            "Y su descripción de lo que viene después también: el momento en que las mismas costumbres que parecían encantadoras empiezan a irritar, en que aparecen las primeras discusiones repetidas, y en que uno de los dos se pregunta en voz baja si se ha equivocado.",
        },
        {
          forma: "texto",
          texto:
            "Chapman sostiene que ese descubrimiento produce dos reacciones típicas y las dos son malas. La primera es concluir que el otro ha cambiado o que ha estado fingiendo. La segunda es concluir que uno mismo se ha equivocado de persona y que en algún sitio está la correcta.",
        },
        {
          forma: "texto",
          texto:
            "Su tercera opción, que es la del libro, es aceptar que aquella fase era temporal por diseño y que lo que viene después no es un fracaso sino otra cosa: una relación que hay que construir deliberadamente porque ya no se construye sola.",
        },
        {
          forma: "texto",
          texto:
            "El momento en que se acaba el enamoramiento.",
        },
        {
          forma: "texto",
          texto:
            "Chapman lo sitúa entre los dieciocho meses y los dos años, que es aproximadamente lo que dicen también los estudios sobre la fase inicial de las relaciones.",
        },
        {
          forma: "texto",
          texto:
            "Y sostiene que ese momento no es el fin de nada.",
        },
        {
          forma: "texto",
          texto:
            "Es cuando empieza el trabajo, porque hasta entonces no hacía falta ninguna técnica.",
        },
      ],
    },

    {
      titulo: "El depósito vacío",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La imagen central del libro es la de un depósito emocional que cada persona lleva dentro. Cuando está lleno, uno se siente querido y se comporta con generosidad. Cuando está vacío, se vuelve susceptible, reprocha cosas antiguas y busca pelea por asuntos menores.",
        },
        {
          forma: "texto",
          texto:
            "La metáfora es sencilla y le sirve a Chapman para explicar algo que en consulta veía todo el rato: que las discusiones de pareja casi nunca van de lo que aparentemente van, y que discutir sobre el reparto de tareas puede ser en realidad otra conversación.",
        },
        {
          forma: "clave",
          rotulo: "El mecanismo del malentendido",
          frase: "Cada uno expresa el cariño en su propio lenguaje, que es el que a él le llena el depósito. Si el mío es hacer cosas y el tuyo es que te hablen, yo puedo pasarme diez años arreglando la casa mientras tú te sientes cada vez más sola. Y los dos tendremos razón.",
        },
        {
          forma: "texto",
          texto:
            "Ese es el diagnóstico que hace que el libro se recomiende de boca en boca, porque describe una situación muy común: dos personas agotadas de intentarlo, cada una convencida de que la otra no pone de su parte, y las dos poniendo mucho.",
        },
        {
          forma: "texto",
          texto:
            "Chapman sostiene además que el lenguaje propio suele venir de la infancia, de cómo se expresaba el cariño en la casa donde uno se crio, y que por eso resulta tan evidente y tan difícil de ver como una preferencia particular y no como la manera normal de querer.",
        },
        {
          forma: "texto",
          texto:
            "Su segunda observación es que la queja repetida es el mejor indicador. Lo que una persona reprocha con más frecuencia señala exactamente su lenguaje: quien dice que nunca la ayudan lo dice porque para ella la ayuda es lo que significa cariño.",
        },
        {
          forma: "arte",
          texto:
            "Da tres preguntas para identificar el propio: qué pides con más frecuencia, de qué te quejas más, y qué haces tú espontáneamente por la otra persona. La tercera es la más reveladora, porque casi todo el mundo da lo que le gustaría recibir.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Y añade un matiz que se pierde en las versiones populares del esquema: dentro de cada lenguaje hay dialectos. A una persona cuyo lenguaje es el tiempo puede no servirle cualquier tiempo: puede necesitar conversación sin pantallas y no le vale ver una serie juntos.",
        },
        {
          forma: "texto",
          texto:
            "Eso convierte el método en algo bastante más laborioso de lo que parece en los resúmenes de internet. No basta con saber que tu pareja funciona con actos de servicio: hay que averiguar qué actos concretos significan algo para ella y cuáles le dan igual.",
        },
        {
          forma: "texto",
          texto:
            "La otra pieza del mecanismo es la que más resistencia genera en los lectores, y Chapman la defiende sin rodeos: hay que hablar el idioma del otro aunque no salga natural y aunque no apetezca, porque eso es precisamente lo que lo convierte en un regalo.",
        },
        {
          forma: "clave",
          rotulo: "Su argumento",
          frase: "Que hacer algo que te sale solo no cuesta nada y por tanto comunica poco. Que el gesto significativo es el que exige esfuerzo y atención, y que esperar a sentir ganas antes de actuar es exactamente lo que mantiene a las parejas estancadas durante años.",
        },
        {
          forma: "texto",
          texto:
            "Eso encaja con lo que se sabe de la conducta: actuar suele preceder al sentimiento más de lo que la gente cree, y en terapia de pareja se usan intervenciones conductuales similares con resultados razonables.",
        },
        {
          forma: "texto",
          texto:
            "Y encaja también con la crítica más seria que se le hace, que veremos al final: la idea de comportarse con cariño sin sentirlo, aplicada sin ninguna advertencia, puede sostener relaciones que deberían terminarse.",
        },
        {
          forma: "texto",
          texto:
            "Con la teoría montada, el libro dedica un capítulo a cada uno de los cinco, con casos, ejemplos concretos y listas de cosas que se pueden hacer esta semana.",
        },
        {
          forma: "texto",
          texto:
            "Esa parte práctica es la que ha hecho el éxito.",
        },
        {
          forma: "texto",
          texto:
            "Y también la que ha hecho que el esquema circule por todas partes recortado en cinco palabras.",
        },
        {
          forma: "texto",
          texto:
            "Antes de entrar en ellos conviene fijarse en un detalle del método que se pierde siempre: Chapman insiste en que el lenguaje de cada uno hay que preguntarlo, no deducirlo. Que casi todo el mundo se equivoca al adivinar el de su pareja, incluso después de años.",
        },
        {
          forma: "texto",
          texto:
            "La razón que da es que uno interpreta al otro desde su propio idioma. Alguien para quien el cariño son palabras dará por hecho que a su pareja también le hacen falta palabras, y no se le ocurrirá que lo que necesita es que le hagan la compra.",
        },
        {
          forma: "texto",
          texto:
            "Por eso el ejercicio que propone es una conversación explícita y no un test: sentarse los dos y contarse tres momentos concretos en que cada uno se sintió especialmente querido, y buscar qué tienen en común esos tres momentos.",
        },
        {
          forma: "texto",
          texto:
            "Ese ejercicio es probablemente lo mejor del libro entero y no depende de que la teoría sea correcta. Obliga a las dos personas a hablar de algo específico y comprobable, en lugar de discutir sobre si el otro se esfuerza o no.",
        },
        {
          forma: "texto",
          texto:
            "Y tiene un efecto secundario que Chapman menciona de pasada: mucha gente descubre haciéndolo que no recuerda ningún momento reciente. Ese hallazgo, por sí solo, suele ser más informativo que cualquier clasificación posterior.",
        },
        {
          forma: "texto",
          texto:
            "El libro añade una advertencia sensata sobre los plazos: dice que hay que sostener el cambio varias semanas antes de esperar nada, porque quien lleva años con el depósito vacío no se lo va a creer con dos gestos, y que ese periodo de desconfianza es normal.",
        },
      ],
    },

    {
      titulo: "Los cinco",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El primero son las palabras de afirmación: decir en voz alta lo que se aprecia del otro. No cumplidos automáticos, sino reconocimientos concretos de algo que ha hecho, de cómo ha manejado una situación difícil o de una cualidad suya que uno admira de verdad.",
        },
        {
          forma: "texto",
          texto:
            "Chapman insiste en dos cosas sobre este: que la crítica hace un daño desproporcionado a quien funciona así, y que las palabras cuentan también cuando se dicen delante de otros, porque el reconocimiento en público pesa más que en privado.",
        },
        {
          forma: "texto",
          texto:
            "El segundo es el tiempo de calidad, y el adjetivo es la clave: no se trata de estar en la misma habitación, sino de atención sin repartir. Una conversación de veinte minutos mirándose vale más que una tarde entera juntos con el móvil en la mano.",
        },
        {
          forma: "clave",
          rotulo: "Su distinción más útil",
          frase: "Entre estar presente y estar disponible. Mucha gente pasa horas al lado de su pareja sin haber tenido ni un momento de atención mutua, y para quien funciona con este lenguaje esas horas no cuentan absolutamente nada.",
        },
        {
          forma: "texto",
          texto:
            "El tercero son los regalos, que es el más criticado y el que peor se entiende. No va de dinero ni de objetos caros: va del gesto de haber pensado en alguien cuando no estaba delante, y el objeto es solo la prueba física de ese pensamiento.",
        },
        {
          forma: "texto",
          texto:
            "El ejemplo que da es el de una piedra recogida en un paseo, o una revista comprada porque sabías que le interesaba el tema. Aun así, es la categoría más discutida del esquema, y hay investigadores que sostienen que no es un lenguaje sino una variante de las otras cuatro.",
        },
        {
          forma: "arte",
          texto:
            "El cuarto son los actos de servicio: hacer cosas que le quitan trabajo o preocupación al otro. Cambiar una bombilla, ocuparse de un trámite pesado, tener la cena hecha cuando llega tarde. Para quien funciona así, esto es literalmente lo que significa la palabra cariño.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Y es el lenguaje que más conflictos genera en la práctica, porque se confunde con el reparto de tareas. Un acto de servicio que se da por supuesto deja de comunicar nada, y cuando una persona hace siempre las mismas cosas, dejan de leerse como un regalo.",
        },
        {
          forma: "texto",
          texto:
            "El quinto es el contacto físico, que Chapman se cuida de separar del sexo. Incluye la mano en la espalda al pasar, el abrazo al llegar, el pie que toca el otro pie debajo de la mesa: contacto de baja intensidad y alta frecuencia.",
        },
        {
          forma: "texto",
          texto:
            "Para quien funciona así, la ausencia de ese contacto se experimenta como rechazo aunque todo lo demás vaya bien, y eso explica discusiones que desde fuera parecen desproporcionadas por algo tan pequeño como que el otro se aparte al sentarse en el sofá.",
        },
        {
          forma: "clave",
          rotulo: "Cómo se supone que se usa",
          frase: "Cada uno identifica el suyo, se lo dice al otro con ejemplos concretos, y ambos se comprometen a practicar el del otro deliberadamente durante unas semanas. Chapman propone empezar con una cosa al día y sin esperar reciprocidad inmediata.",
        },
        {
          forma: "texto",
          texto:
            "Hay un test de treinta preguntas para identificar el propio, que circula por internet y que se ha convertido en la puerta de entrada al libro para la mayoría de la gente. Conviene saber que ese test no está validado como instrumento psicométrico.",
        },
        {
          forma: "texto",
          texto:
            "Es decir: no ha pasado los procedimientos habituales para comprobar que mide lo que dice medir, ni que dé el mismo resultado si se repite unas semanas después, que es precisamente uno de los problemas que ha encontrado la investigación.",
        },
        {
          forma: "texto",
          texto:
            "Porque desde 1992 sí se ha investigado el asunto.",
        },
        {
          forma: "texto",
          texto:
            "No mucho, y lo suficiente para poner a prueba la única afirmación del libro que se puede comprobar.",
        },
        {
          forma: "texto",
          texto:
            "Que es la de emparejar los lenguajes.",
        },
        {
          forma: "texto",
          texto:
            "Merece la pena detenerse antes en un problema práctico que el propio libro señala y que cualquiera reconocerá: el lenguaje de una persona puede ser exactamente aquel que a la otra le resulta más difícil de dar, y eso no es mala suerte, es bastante frecuente.",
        },
        {
          forma: "texto",
          texto:
            "Alguien criado en una casa donde nadie se tocaba tendrá dificultades reales con el contacto físico, y alguien que creció con reproches puede tener un bloqueo con las palabras de afirmación porque nunca oyó ninguna dirigida a él.",
        },
        {
          forma: "texto",
          texto:
            "La respuesta de Chapman a eso es que se aprende igual que se aprende un idioma extranjero: torpemente al principio, con esfuerzo consciente durante meses y con la garantía de que va a sonar artificial hasta que deje de sonarlo.",
        },
        {
          forma: "texto",
          texto:
            "Y da un consejo que resulta útil y que contradice un poco al resto del libro: que quien recibe un intento torpe lo agradezca aunque no sea exactamente lo que necesitaba, porque castigar los primeros intentos garantiza que no haya segundos.",
        },
        {
          forma: "texto",
          texto:
            "Hay además un problema de dosis que el esquema no resuelve. Dos personas pueden compartir lenguaje y necesitar cantidades muy distintas: a una le basta con una conversación larga a la semana y otra necesita una todos los días, y eso genera exactamente el mismo conflicto.",
        },
        {
          forma: "texto",
          texto:
            "Ese punto ciego es importante y apunta ya hacia lo que ha encontrado la investigación posterior, que es que el problema rara vez es de idioma y muy a menudo es de cantidad.",
        },
      ],
    },

    {
      titulo: "Lo que dicen los estudios",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El libro contiene varias afirmaciones y solo una de ellas se puede someter a prueba con claridad: que las parejas cuyos lenguajes coinciden, o que aprenden a hablar el del otro, están más satisfechas que las que no. Todo el método depende de eso.",
        },
        {
          forma: "texto",
          texto:
            "Los primeros trabajos, de mediados de los dos mil, intentaron comprobar si las cinco categorías aparecen realmente cuando se analizan estadísticamente las respuestas de mucha gente. Los resultados fueron mixtos: en algunos estudios salen cinco factores y en otros salen menos o agrupados de otra manera.",
        },
        {
          forma: "clave",
          rotulo: "El estudio más claro sobre el emparejamiento",
          frase: "Un trabajo publicado en 2022 en la revista PLOS ONE con parejas reales encontró que la coincidencia de lenguajes entre los dos miembros no predecía la calidad de la relación. Lo que sí la predecía era usar el propio lenguaje y expresar cariño con frecuencia.",
        },
        {
          forma: "texto",
          texto:
            "Ese resultado es incómodo para el libro porque invierte su consejo. Chapman dice que hay que abandonar el idioma propio y hablar el del otro; los datos sugieren que lo que funciona es expresar cariño mucho, de la manera que a uno le salga.",
        },
        {
          forma: "texto",
          texto:
            "Otros estudios apuntan en la misma dirección: la variable que mejor predice la satisfacción no es el ajuste entre lenguajes sino la cantidad total de conductas de afecto, la reciprocidad percibida y la capacidad de responder a lo que el otro pide en el momento.",
        },
        {
          forma: "texto",
          texto:
            "En 2024, un grupo de investigadoras publicó en una revista de psicología una revisión de toda la evidencia disponible sobre el esquema, y su conclusión fue bastante contundente en las tres afirmaciones centrales del libro.",
        },
        {
          forma: "arte",
          texto:
            "La primera: que cada persona tiene un lenguaje principal. Los datos no lo sostienen. La gente valora los cinco, las puntuaciones están más repartidas de lo que el esquema supone, y el lenguaje que alguien declara cambia según el momento y la situación.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "La segunda: que los cinco cubren el terreno. No lo cubren. Faltan cosas que aparecen sistemáticamente en la investigación sobre relaciones, como el apoyo en momentos difíciles, la lealtad, la capacidad de reparar después de una discusión o el interés genuino por lo que le pasa al otro.",
        },
        {
          forma: "texto",
          texto:
            "Y la tercera: que emparejar lenguajes mejora la relación. Es la que menos apoyo tiene de las tres, y es la que sostiene el método entero.",
        },
        {
          forma: "texto",
          texto:
            "Esa revisión propuso además cambiar la metáfora, y la alternativa es mejor que la crítica. En lugar de un idioma que hay que aprender, proponen pensarlo como una dieta equilibrada: todo el mundo necesita algo de los cinco, y el problema es la carencia, no el idioma.",
        },
        {
          forma: "clave",
          rotulo: "Por qué esa metáfora funciona mejor",
          frase: "Porque explica algo que el esquema original no explica: que una relación con muchas palabras bonitas y cero contacto físico falla, y una con mucho contacto y ninguna conversación también. No hay un nutriente principal que compense la ausencia del resto.",
        },
        {
          forma: "texto",
          texto:
            "Y porque quita el determinismo. Decir que uno es de actos de servicio funciona como una etiqueta que se lleva puesta, y la investigación sugiere que esas preferencias son más flexibles y más dependientes del contexto de lo que el libro admite.",
        },
        {
          forma: "texto",
          texto:
            "Nada de esto significa que el libro no sirva para nada, y conviene decirlo con la misma claridad, porque hay un efecto real que ninguna de esas críticas discute.",
        },
        {
          forma: "texto",
          texto:
            "Que da a dos personas un vocabulario para hablar de algo de lo que no sabían hablar.",
        },
        {
          forma: "texto",
          texto:
            "Y eso, en una pareja atascada, puede valer más que la exactitud del esquema.",
        },
        {
          forma: "texto",
          texto:
            "Conviene además situar bien el alcance de esas críticas, porque tampoco son un desmentido total. Los estudios que han fallado son los de la hipótesis del emparejamiento; lo que sí se sostiene es que las conductas concretas que Chapman describe importan y que la gente las echa de menos.",
        },
        {
          forma: "texto",
          texto:
            "Es decir: las cinco cosas que enumera son cinco cosas reales que la gente valora en una relación. Lo que no está demostrado es que funcionen como idiomas mutuamente excluyentes ni que haya que acertar con uno.",
        },
        {
          forma: "texto",
          texto:
            "La cantidad de investigación disponible tampoco es enorme, y ese es un matiz que hay que hacer en las dos direcciones. Son unos pocos estudios, con muestras medianas, y no una literatura tan sólida como la que existe sobre otros aspectos de las relaciones de pareja.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí tiene una base amplia es lo que predice que una pareja dure, y ahí el nombre de referencia es el trabajo de John Gottman, que grabó a cientos de parejas discutiendo en un laboratorio durante décadas y midió qué las diferenciaba.",
        },
        {
          forma: "texto",
          texto:
            "Lo que encontró no tiene que ver con lenguajes: tiene que ver con cómo se discute. La presencia de desprecio, de crítica al carácter y no a la conducta, de actitud defensiva y de retirada durante el conflicto es lo que mejor predice una ruptura.",
        },
        {
          forma: "texto",
          texto:
            "Y en el lado positivo, una proporción alta de interacciones agradables frente a las desagradables en la vida cotidiana, más la costumbre de responder a los pequeños intentos de contacto del otro. Eso último se parece bastante a lo que Chapman intuía sin poder medirlo.",
        },
      ],
    },

    {
      titulo: "La dieta equilibrada",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Lo que casi todos los críticos del libro reconocen es que abrió una conversación que mucha gente no sabía tener. Antes de este esquema, la manera habitual de plantear el problema era decir que el otro no se esfuerza, que es una acusación y no una pregunta.",
        },
        {
          forma: "texto",
          texto:
            "Con el vocabulario de los lenguajes, la misma conversación se puede plantear sin culpar a nadie: no es que no te esfuerces, es que necesito otra cosa distinta de la que me das. Esa reformulación es lo que de verdad ha ayudado a millones de parejas.",
        },
        {
          forma: "clave",
          rotulo: "Su función real",
          frase: "No es un modelo válido de cómo funciona el afecto. Es una herramienta de conversación, y como tal es excelente: obliga a las dos personas a decir en voz alta y con ejemplos concretos qué necesitan, que es algo que casi nadie hace nunca.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, dónde falla, empezando por lo que ya está dicho: no tiene ninguna base empírica de origen, sus tres afirmaciones centrales no se sostienen bien cuando se comprueban, y el test que todo el mundo hace no está validado.",
        },
        {
          forma: "texto",
          texto:
            "El segundo fallo es de encuadre. Está escrito para un matrimonio heterosexual con reparto de papeles bastante tradicional, y buena parte de los ejemplos tienen a una mujer que se queja de que no la ayudan en casa y a un hombre que no entiende por qué.",
        },
        {
          forma: "texto",
          texto:
            "Ese ejemplo se repite tanto que acaba revelando algo que el libro no analiza: si el reparto de tareas domésticas es profundamente desigual, llamarlo un problema de lenguajes es convertir una injusticia en un malentendido de comunicación.",
        },
        {
          forma: "arte",
          texto:
            "Ese es el reproche de fondo más serio. El esquema despolitiza los conflictos. Todo lo que en una pareja tiene que ver con poder, con dinero, con carga mental o con quién renuncia a qué, en este libro se traduce a un problema de traducción entre dos idiomas.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "El tercer fallo es el más grave y tiene que ver con el marco religioso del que nace. El libro parte de que el matrimonio es un compromiso que hay que sostener, y aconseja actuar con cariño aunque no se sienta, esperando que el sentimiento vuelva.",
        },
        {
          forma: "texto",
          texto:
            "En una pareja sana y atascada, ese consejo es bueno. En una relación con desprecio sostenido, control o maltrato, es exactamente el consejo equivocado, y le dice a la persona que está peor que la solución es esforzarse más.",
        },
        {
          forma: "texto",
          texto:
            "El libro no dedica prácticamente nada a distinguir esas dos situaciones, ni a explicar cuándo una relación no tiene arreglo, ni menciona el maltrato salvo de pasada. En un superventas de veinte millones de ejemplares sobre parejas, esa omisión pesa.",
        },
        {
          forma: "clave",
          rotulo: "Lo que la gente cree y no es verdad",
          frase: "Que el esquema está basado en investigación. No lo está: nace de las notas de consulta de un pastor y se publicó sin un solo estudio detrás. La investigación llegó veinte años después y en buena parte lo contradice.",
        },
        {
          forma: "texto",
          texto:
            "Segundo: que cada persona tiene un lenguaje principal y estable. Los datos disponibles sugieren que la gente valora los cinco, que las diferencias entre ellos son menores de lo que el esquema supone y que la preferencia declarada cambia con el tiempo y la situación.",
        },
        {
          forma: "texto",
          texto:
            "Tercero: que emparejar lenguajes con la pareja mejora la relación. Es la afirmación central y la que peor ha salido de las comprobaciones. Lo que sí predice satisfacción es expresar afecto con frecuencia y responder a lo que el otro pide.",
        },
        {
          forma: "texto",
          texto:
            "Cuarto: que Chapman es psicólogo. Es pastor baptista, con formación en antropología y un doctorado en educación de adultos, y con muchísima experiencia práctica atendiendo parejas, que no es lo mismo pero tampoco es poco.",
        },
        {
          forma: "arte",
          texto:
            "Y quinto: que el test de internet dice algo sobre uno. No está validado, se contesta según el estado de ánimo del día, y su resultado cambia si se repite. Sirve para empezar una conversación y no para etiquetarse.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Puesto todo junto, el balance honesto es este: un modelo probablemente falso y una herramienta bastante buena, que son dos cosas que pueden convivir y que en los libros de este tipo conviven más de lo que parece.",
        },
        {
          forma: "texto",
          texto:
            "La versión corregida por la investigación posterior es más sencilla y más difícil de vender, y cabe en tres líneas.",
        },
        {
          forma: "texto",
          texto:
            "Hay cinco maneras principales de demostrar afecto y todo el mundo necesita algo de las cinco, no una.",
        },
        {
          forma: "texto",
          texto:
            "Lo que predice que una relación vaya bien no es acertar el idioma, sino la frecuencia con que se expresa el cariño y la disposición a hacer caso cuando el otro pide algo concreto.",
        },
        {
          forma: "texto",
          texto:
            "Y preguntar directamente qué necesita la otra persona funciona mejor que cualquier test de treinta preguntas.",
        },
        {
          forma: "texto",
          texto:
            "Quien quiera seguir por ahí tiene sitios mejores. Sobre lo que predice que una pareja funcione, los libros de Gottman están construidos sobre décadas de observación en laboratorio y tienen datos en cada capítulo, que es exactamente lo que a este le falta.",
        },
        {
          forma: "texto",
          texto:
            "Y sobre por qué a alguien le cuesta pedir o recibir determinadas cosas, la literatura sobre estilos de apego explica bastante mejor los bloqueos que este libro atribuye simplemente a tener otro idioma.",
        },
        {
          forma: "texto",
          texto:
            "Aun así, ninguno de esos dos ha conseguido lo que consiguió este: que veinte millones de personas que no habrían abierto un libro de psicología se sentaran con su pareja a hablar de qué necesitan, con ejemplos concretos y sin acusarse de nada.",
        },
        {
          forma: "texto",
          texto:
            "Un pastor de Carolina del Norte releyendo sus carpetas de notas hizo eso, y eso no lo ha hecho ningún estudio.",
        },
      ],
    },
  ],
};

export const COSAS_BUENAS: Resumen = {
  id: "cosas-buenas",
  titulo: "Cómo hacer que te pasen cosas buenas",
  autor: "Marian Rojas Estapé",
  ano: 2018,
  gancho: "Es probablemente el libro de divulgación más vendido en España en lo que va de siglo, y repite en cada capítulo una frase que es falsa tal y como está escrita.",
  porQue:
    "Porque su capítulo sobre el estrés crónico está bien y es útil, y porque su neurociencia de cuatro hormonas es una versión de manual popular que conviene saber leer con distancia.",
  partes: [
    {
      titulo: "La hija del psiquiatra",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Madrid, consulta de un instituto privado de psiquiatría. Una médica de treinta y pocos años atiende a pacientes con ansiedad, con insomnio y con episodios depresivos, y comprueba una y otra vez que casi ninguno sabe qué le está pasando a su cuerpo mientras le pasa.",
        },
        {
          forma: "texto",
          texto:
            "La gente llega describiendo síntomas físicos —taquicardias, mareos, problemas digestivos, contracturas— convencida de que tiene una enfermedad que no aparece en ninguna prueba. Nadie les ha explicado nunca qué hace el cuerpo cuando lleva dos años en alerta permanente.",
        },
        {
          forma: "clave",
          rotulo: "El hueco que detecta",
          frase: "Que hay una distancia enorme entre lo que se sabe en medicina sobre el estrés y lo que sabe la población, y que llenar ese hueco con un lenguaje que se entienda podría ahorrarle a mucha gente años de consultas y de miedo.",
        },
        {
          forma: "texto",
          texto:
            "La médica es Marian Rojas Estapé, nacida en Madrid en 1983, psiquiatra formada en la Universidad de Navarra, e hija de Enrique Rojas, uno de los psiquiatras más conocidos de España y autor a su vez de varios superventas divulgativos.",
        },
        {
          forma: "texto",
          texto:
            "Ese detalle familiar importa para entender el libro: creció en una casa donde la psiquiatría se contaba en la mesa y donde divulgar formaba parte del oficio. Trabaja en el instituto que fundó su padre y ha seguido su misma trayectoria pública.",
        },
        {
          forma: "texto",
          texto:
            "El libro se publicó en 2018 en Espasa y su recorrido comercial fue enorme: más de un millón de ejemplares en español, decenas de reediciones, traducciones a varios idiomas y una presencia constante en televisión, radio y pódcast durante años.",
        },
        {
          forma: "arte",
          texto:
            "En España lo ha leído gente que no había leído nunca un libro de psicología, y ese es su primer mérito objetivo: metió en las casas un vocabulario —cortisol, dopamina, estrés crónico— que hasta entonces se quedaba en las consultas.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Su promesa, dicha en el título, es ambiciosa y algo tramposa: no explica cómo hacer que ocurran cosas buenas, sino cómo estar en condiciones de reconocerlas y aprovecharlas cuando ocurren. La diferencia se explica dentro y no en la portada.",
        },
        {
          forma: "texto",
          texto:
            "La estructura del libro es sencilla. Primero explica qué le pasa al cuerpo cuando está en alerta, después describe cuatro sustancias del sistema nervioso, y finalmente propone maneras de intervenir sobre el propio estado a partir de esa descripción.",
        },
        {
          forma: "texto",
          texto:
            "Está escrito en un tono cercano, con muchos casos de consulta contados con nombres cambiados, con listas de consejos y con un lenguaje deliberadamente sencillo. No tiene referencias bibliográficas en la edición original y sus afirmaciones se presentan con autoridad médica.",
        },
        {
          forma: "clave",
          rotulo: "Lo que hay que tener en cuenta al leerlo",
          frase: "Que lo escribe una psiquiatra en ejercicio y no una investigadora, que está divulgando y no citando, y que en divulgación las simplificaciones son inevitables. El problema no es que simplifique, sino que algunas simplificaciones concretas dicen cosas que no son ciertas.",
        },
        {
          forma: "texto",
          texto:
            "Y conviene decir algo más antes de entrar: su mensaje central sobre pedir ayuda profesional es bueno y bastante valiente en el contexto español, donde la psiquiatría sigue arrastrando un estigma considerable y donde mucha gente aguanta años sin consultar a nadie.",
        },
        {
          forma: "texto",
          texto:
            "El libro insiste en que la depresión y la ansiedad son enfermedades, en que la medicación cuando está indicada no es una debilidad, y en que ir a terapia es tan razonable como ir al traumatólogo con una rodilla rota.",
        },
        {
          forma: "texto",
          texto:
            "Eso, dicho desde una posición de autoridad médica y llegando a un millón de casas, es un efecto de salud pública que ningún reparo posterior anula. Conviene tenerlo presente mientras se leen las críticas que vienen a continuación.",
        },
        {
          forma: "arte",
          texto:
            "El libro empieza donde empieza todo lo suyo: en la descripción de qué ocurre en un cuerpo cuando percibe una amenaza. Y usa el ejemplo clásico de los manuales de fisiología, que es el de encontrarse un animal peligroso.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Hay además un dato del contexto español que explica parte de su éxito y que el libro no menciona: España tiene uno de los consumos de ansiolíticos más altos del mundo, y a la vez una de las peores proporciones de psicólogos en la sanidad pública de Europa occidental.",
        },
        {
          forma: "texto",
          texto:
            "Es decir, un país donde el malestar psíquico se trata masivamente con pastillas recetadas en atención primaria, con listas de espera de meses para terapia y con muy poca información pública sobre qué está pasando dentro de uno cuando aparecen los síntomas.",
        },
        {
          forma: "texto",
          texto:
            "En ese hueco es donde aterriza este libro, y por eso funcionó como funcionó. No compitió con la sanidad pública: ocupó un espacio que la sanidad pública tenía vacío, con un lenguaje que se entendía y por doce euros en cualquier librería.",
        },
        {
          forma: "texto",
          texto:
            "Eso no lo convierte en un libro mejor de lo que es y explica por qué las críticas de los profesionales nunca han hecho mella en sus ventas. La alternativa que ofrecían esos profesionales, para la mayoría de la gente, era una lista de espera.",
        },
        {
          forma: "texto",
          texto:
            "Un oso, en la versión que ella cuenta.",
        },
        {
          forma: "texto",
          texto:
            "El problema es lo que ocurre cuando el oso no está.",
        },
        {
          forma: "texto",
          texto:
            "Y el cuerpo se comporta exactamente igual que si estuviera.",
        },
      ],
    },

    {
      titulo: "El oso que no está",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La descripción fisiológica que hace el libro es correcta y es la parte más útil de todo el volumen. Ante una amenaza, el organismo activa en milisegundos una cadena que empieza en el cerebro y termina en las glándulas suprarrenales, encima de los riñones.",
        },
        {
          forma: "texto",
          texto:
            "Se libera adrenalina, que produce el efecto inmediato: sube la frecuencia cardíaca, se dilatan las pupilas, la sangre se redirige a los músculos grandes, se corta la digestión y la atención se estrecha sobre la fuente del peligro.",
        },
        {
          forma: "texto",
          texto:
            "Y se libera cortisol, que es la hormona del segundo tiempo: moviliza glucosa para tener energía disponible, mantiene la presión arterial y frena procesos que en una emergencia no son prioritarios, como la reparación de tejidos o parte de la respuesta inmunitaria.",
        },
        {
          forma: "clave",
          rotulo: "Para qué sirve todo eso",
          frase: "Para sobrevivir a una amenaza que dura minutos. El sistema está diseñado para dispararse, resolver la situación y apagarse. Todo lo que hace tiene sentido si la amenaza es un depredador, y prácticamente ninguno si es una reunión que hay dentro de tres semanas.",
        },
        {
          forma: "texto",
          texto:
            "El problema que describe el libro es real y está bien documentado: cuando ese sistema no se apaga y se mantiene activado durante meses, las mismas respuestas que salvan la vida a corto plazo hacen daño a largo plazo.",
        },
        {
          forma: "texto",
          texto:
            "Los efectos del estrés sostenido que la investigación ha documentado incluyen alteraciones del sueño, peor respuesta inmunitaria ante infecciones, problemas digestivos, tensión muscular crónica, dificultades de concentración y de memoria, y un empeoramiento de casi cualquier enfermedad previa.",
        },
        {
          forma: "arte",
          texto:
            "También hay evidencia de asociación entre estrés crónico y riesgo cardiovascular, aunque los mecanismos exactos se discuten y buena parte de esa asociación pasa por conductas intermedias: quien está muy estresado duerme peor, se mueve menos, come peor y bebe más.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Hasta aquí, lo que dice el libro es razonable y explicar esto a un público amplio tiene un valor claro. El paciente que llega a urgencias convencido de estar sufriendo un infarto y al que le dicen que es ansiedad merece que alguien le explique por qué su pecho hacía eso.",
        },
        {
          forma: "texto",
          texto:
            "El problema aparece con la frase que el libro repite en cada capítulo y que se ha convertido en su eslogan: que el cerebro no distingue entre lo real y lo imaginado.",
        },
        {
          forma: "texto",
          texto:
            "Esa afirmación, tal y como está escrita, es falsa. El cerebro distingue perfectamente entre percibir algo y recordarlo o imaginarlo, y esa distinción es una de sus funciones básicas. Cuando falla, tiene nombre clínico y se llama alucinación.",
        },
        {
          forma: "clave",
          rotulo: "Lo que sí es cierto",
          frase: "Que imaginar una amenaza puede disparar una respuesta fisiológica parecida a la de una amenaza real. Anticipar una discusión sube el pulso de verdad. Pero eso no significa que el cerebro se confunda: significa que el sistema de alarma también responde a representaciones.",
        },
        {
          forma: "texto",
          texto:
            "La diferencia entre las dos formulaciones parece un matiz y no lo es. La primera sugiere que uno puede reprogramarse imaginando cosas buenas, que es la lectura que hace mucha gente. La segunda dice algo más modesto: que preocuparse tiene un coste corporal real.",
        },
        {
          forma: "texto",
          texto:
            "El segundo problema del capítulo es el tratamiento del cortisol como villano. Se le llama la hormona del estrés y se sugiere que conviene tenerla baja, cuando el cortisol es imprescindible y su ausencia produce una enfermedad grave.",
        },
        {
          forma: "arte",
          texto:
            "El cortisol tiene un ritmo diario: sube por la mañana para despertarnos y baja por la noche. Regula el metabolismo, la inflamación y la presión arterial. Lo problemático no es su existencia sino la pérdida de ese ritmo y la exposición sostenida.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "El matiz importa porque de la versión simplificada salen productos y consejos para bajar el cortisol que no tienen ningún sentido, y una cierta idea de que estar activado es siempre malo, cuando activarse ante un examen o una entrevista es exactamente lo que hay que hacer.",
        },
        {
          forma: "texto",
          texto:
            "La parte práctica del capítulo, en cambio, es sensata y coincide con lo que recomendaría cualquier profesional: dormir, moverse, respirar despacio, reducir la cafeína, poner límites a lo que uno acepta y aprender a distinguir lo que depende de uno de lo que no.",
        },
        {
          forma: "texto",
          texto:
            "Con el estrés explicado, el libro pasa al otro lado del sistema: no a lo que nos pone en alerta, sino a lo que nos produce placer.",
        },
        {
          forma: "texto",
          texto:
            "Antes de eso conviene rescatar la mejor observación clínica del capítulo, que no tiene nada de neuroquímica: que muchísima gente sostiene un nivel de alerta alto durante años sin darse cuenta, porque se ha acostumbrado y ha olvidado cómo era estar tranquila.",
        },
        {
          forma: "texto",
          texto:
            "El síntoma que ella describe como más revelador es lo que ocurre en vacaciones: gente que cae enferma el primer día de descanso, con gripe, migraña o dolor de espalda, después de haber aguantado meses sin ponerse mala ni un día.",
        },
        {
          forma: "texto",
          texto:
            "Ese fenómeno tiene nombre en la literatura y se ha estudiado con datos de bajas laborales y de encuestas de salud. La explicación más aceptada tiene que ver con la caída brusca del nivel de activación y con lo que eso hace a la respuesta inmunitaria.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una observación práctica que se deriva de eso y que el libro formula bien: si uno solo se entera de que estaba agotado cuando para, entonces la señal de agotamiento no sirve como aviso, y hay que fijarse en otras cosas.",
        },
        {
          forma: "texto",
          texto:
            "Las que propone son concretas y comprobables: cuánto se tarda en dormirse, si uno se despierta de madrugada dándole vueltas a algo, si aguanta media hora sin mirar el móvil y si recuerda la última vez que se rio de verdad.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí aparece la palabra que en los últimos diez años se ha convertido en la más usada y peor usada de la divulgación psicológica.",
        },
      ],
    },

    {
      titulo: "El circuito de la recompensa",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La dopamina es un neurotransmisor que participa en el circuito de recompensa del cerebro, y también en el control del movimiento, en la regulación de la prolactina y en varios procesos cognitivos. Lo primero es lo único que aparece en la divulgación.",
        },
        {
          forma: "texto",
          texto:
            "El libro la presenta como la sustancia del placer y de la motivación, y explica con ella el mecanismo de las adicciones y el efecto de las pantallas. La descripción general es reconocible y la simplificación tiene un problema que conviene señalar.",
        },
        {
          forma: "clave",
          rotulo: "Lo que la investigación ha ido corrigiendo",
          frase: "Que la dopamina no es la molécula del placer sino la de querer. Se libera sobre todo en la anticipación, no en el disfrute. Es lo que hace desear algo, no lo que hace que ese algo guste, y esa distinción está bastante bien establecida.",
        },
        {
          forma: "texto",
          texto:
            "Eso explica mejor que la versión simplificada lo que le pasa a alguien enganchado a una aplicación: no es que disfrute cada vez que la abre, es que siente la necesidad de abrirla. El querer y el gustar se separan, y eso es exactamente una adicción.",
        },
        {
          forma: "texto",
          texto:
            "El libro describe bien un mecanismo concreto que sí está documentado: la recompensa variable. Un sistema que a veces da algo interesante y a veces no engancha mucho más que uno que siempre da lo mismo, porque la incertidumbre mantiene la anticipación activa.",
        },
        {
          forma: "texto",
          texto:
            "Ese es el principio de las máquinas tragaperras y también el de cualquier red social con actualización por deslizamiento: no se sabe qué va a aparecer, y esa ignorancia es lo que mantiene el dedo moviéndose durante cuarenta minutos.",
        },
        {
          forma: "arte",
          texto:
            "Su recomendación de fondo —recuperar la capacidad de esperar, tolerar el aburrimiento, retrasar recompensas pequeñas— es razonable y coincide con lo que proponen investigadores serios de la atención, aunque el marco de la dopamina con el que se justifica sea más flojo que la recomendación.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Donde el capítulo se pasa de frenada es en la idea de que se puede quedar el sistema quemado por exceso de estímulo y que hay que hacer una desintoxicación. La expresión ayuno de dopamina se ha popularizado y no describe ningún proceso fisiológico real.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí ocurre y está descrito es una regulación a la baja de receptores ante estimulación repetida, que es un fenómeno mucho más específico y que no se corrige pasando un fin de semana sin móvil, por útil que sea pasar un fin de semana sin móvil.",
        },
        {
          forma: "texto",
          texto:
            "El libro dedica también atención al consumo de pornografía y a su efecto sobre el deseo y las relaciones, un asunto sobre el que hay literatura creciente y bastante discutida, y donde su tratamiento es más categórico de lo que la evidencia permite.",
        },
        {
          forma: "clave",
          rotulo: "El problema del esquema de las cuatro hormonas",
          frase: "El libro organiza el bienestar en torno a cortisol, dopamina, oxitocina y serotonina, asignando una emoción a cada una. Es un esquema pedagógico cómodo y no es así como funciona el cerebro: cada una de esas sustancias participa en decenas de procesos distintos.",
        },
        {
          forma: "texto",
          texto:
            "La serotonina es el ejemplo más claro. Durante décadas se dijo que la depresión era un déficit de serotonina, y esa explicación se ha ido abandonando: una revisión amplia publicada en 2022 concluyó que no hay pruebas consistentes que la sostengan.",
        },
        {
          forma: "texto",
          texto:
            "Eso no significa que los antidepresivos que actúan sobre la serotonina no funcionen: hay evidencia de que en depresión moderada y grave son eficaces. Significa que no funcionan corrigiendo un déficit, y que la explicación popular del desequilibrio químico está superada.",
        },
        {
          forma: "arte",
          texto:
            "El libro repite esa explicación popular, que es la que estaba en los manuales de divulgación cuando él se escribió, y que conviene leer sabiendo que la propia psiquiatría se ha desmarcado de ella en los últimos años.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Nada de esto convierte el libro en un libro malo. Lo convierte en un libro de divulgación de 2018 escrito con el vocabulario de la divulgación de 2018, con las virtudes y los límites de ese género.",
        },
        {
          forma: "texto",
          texto:
            "La tercera parte, en cambio, es la mejor y la que menos depende de la neuroquímica, porque habla de personas.",
        },
        {
          forma: "texto",
          texto:
            "Antes de cerrar este capítulo merece la pena señalar una asimetría curiosa del libro: la parte que peor sostiene científicamente es la que más se ha citado, y la que mejor sostiene —la psicológica, la de las relaciones y la infancia— es la que menos se comenta.",
        },
        {
          forma: "texto",
          texto:
            "Eso pasa con casi toda la divulgación que usa el cerebro como aval. Decir que algo activa la dopamina suena más serio que decir que a la gente le cuesta esperar, aunque la segunda afirmación esté mejor establecida que la primera.",
        },
        {
          forma: "texto",
          texto:
            "Es un fenómeno con nombre en la investigación sobre comunicación científica: añadir una explicación neurocientífica irrelevante a un texto psicológico hace que los lectores lo juzguen más convincente, aunque la explicación no aporte nada al argumento.",
        },
        {
          forma: "texto",
          texto:
            "Sabiendo eso, la manera sensata de leer este libro es al revés de como se lee: saltarse los nombres de las moléculas y quedarse con las descripciones de conducta, que es donde la autora tiene veinte años de consulta detrás.",
        },
        {
          forma: "texto",
          texto:
            "Y de por qué unas nos dejan mejor de lo que nos encontraron y otras nos dejan agotados.",
        },
      ],
    },

    {
      titulo: "Personas vitamina",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La expresión que ha hecho fortuna es la de personas vitamina: aquellas cuya compañía deja a uno con más energía de la que tenía antes de verlas. El libro la contrapone a las que producen el efecto inverso, a las que llama tóxicas.",
        },
        {
          forma: "texto",
          texto:
            "La descripción es reconocible y por eso ha calado tanto. Casi cualquiera puede hacer la lista: personas con las que se sale del café con ganas de hacer cosas, y personas después de las cuales hay que echarse una siesta.",
        },
        {
          forma: "clave",
          rotulo: "El reparo con la palabra tóxica",
          frase: "No es un concepto clínico ni tiene definición operativa. Etiqueta a la persona entera en lugar de describir una conducta concreta, y una vez puesta la etiqueta no queda nada que hablar, porque las personas tóxicas no se conversan, se eliminan.",
        },
        {
          forma: "texto",
          texto:
            "Esa lógica funciona bien para relaciones que efectivamente hay que cortar y funciona fatal para casi todo lo demás. La mayoría de los conflictos son entre dos personas normales que hacen cosas concretas que molestan, y eso se habla, no se diagnostica.",
        },
        {
          forma: "texto",
          texto:
            "El libro también reconoce el matiz —dice que a veces el tóxico es uno mismo— y aun así el término, sacado del libro y suelto en las redes, se ha convertido en una manera cómoda de no revisar la propia parte en ningún conflicto.",
        },
        {
          forma: "texto",
          texto:
            "La parte de oxitocina que sostiene ese capítulo repite el esquema simplificado: la llama la hormona del amor y del vínculo, cuando participa también en el parto, en la lactancia, en la respuesta al estrés y en conductas que no tienen nada de amables.",
        },
        {
          forma: "arte",
          texto:
            "Hay investigación que asocia la oxitocina con el favoritismo hacia el propio grupo y con más hostilidad hacia los de fuera, lo que hace que llamarla hormona del amor sea, en el mejor de los casos, una descripción muy parcial.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "El contenido psicológico del capítulo, en cambio, es sólido y es lo mejor del libro. La idea de que las reacciones desproporcionadas de un adulto suelen apuntar a algo antiguo está bien establecida y es el material con el que trabaja cualquier terapia.",
        },
        {
          forma: "texto",
          texto:
            "Su formulación práctica es útil: cuando una situación produce una reacción claramente mayor de lo que merece, conviene preguntarse a qué se parece eso, en lugar de discutir sobre el asunto concreto que la ha disparado.",
        },
        {
          forma: "texto",
          texto:
            "El capítulo sobre el perdón es también de los mejores, y lo plantea sin misticismo: perdonar no es decir que lo que pasó estuvo bien ni implica reconciliarse con nadie. Es dejar de gastar recursos en un rencor que solo consume a quien lo sostiene.",
        },
        {
          forma: "clave",
          rotulo: "La distinción que hace bien",
          frase: "Entre perdonar y reconciliarse. Se puede perdonar a alguien y no volver a verlo nunca, y eso es a menudo lo más sano. Confundir las dos cosas es lo que hace que mucha gente se niegue a perdonar, porque cree que perdonar la obliga a volver.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un tercer bloque práctico sobre la atención que resiste bien: la observación de que casi nadie está donde está, que la mente pasa buena parte del día en el futuro anticipando y en el pasado rumiando, y que eso tiene un coste medible en bienestar.",
        },
        {
          forma: "texto",
          texto:
            "Ese punto tiene respaldo empírico razonable. Un trabajo bastante citado con miles de participantes muestreados a lo largo del día encontró que la gente estaba pensando en algo distinto de lo que hacía casi la mitad del tiempo, y que en esos momentos se sentía peor.",
        },
        {
          forma: "arte",
          texto:
            "Lo interesante de ese estudio es la dirección: no era que se distrajeran porque estaban mal, sino que estar distraído precedía a estar peor, incluso cuando lo que se hacía era aburrido. Distraerse de una tarea desagradable tampoco mejoraba el ánimo.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Sobre eso el libro construye su parte final de recomendaciones, que son las de siempre y no por repetidas son malas: agradecer por escrito, dormir, moverse, cuidar los vínculos, poner límites, buscar sentido en lo que se hace y pedir ayuda cuando hace falta.",
        },
        {
          forma: "texto",
          texto:
            "Queda un último asunto, que es el más delicado del libro y el que más discusión ha generado entre profesionales.",
        },
        {
          forma: "texto",
          texto:
            "Antes conviene añadir una parte del capítulo que se pasa por alto y que es de las más útiles: su descripción de los límites. Sostiene que mucha gente confunde ser buena persona con no saber decir que no, y que eso produce un agotamiento silencioso y crónico.",
        },
        {
          forma: "texto",
          texto:
            "Su observación de consulta es que quien nunca dice que no no acaba siendo más querido: acaba siendo el que siempre está disponible, y en algún momento estalla por algo pequeño y desproporcionado que sorprende a todo el mundo.",
        },
        {
          forma: "texto",
          texto:
            "Y da un criterio práctico para distinguir cuándo un vínculo compensa: no si la persona nos cae bien, sino cómo estamos las horas siguientes a haberla visto. Es un criterio conductual, comprobable y bastante más fiable que cualquier etiqueta.",
        },
        {
          forma: "texto",
          texto:
            "Esa parte, la de los vínculos, coincide con lo que sí está muy bien establecido en investigación: el estudio longitudinal de Harvard, que lleva más de ochenta años siguiendo a las mismas familias, encontró que la calidad de las relaciones es el mejor predictor de salud y bienestar a largo plazo.",
        },
        {
          forma: "texto",
          texto:
            "Mejor que el colesterol, mejor que los ingresos y mejor que la fama profesional. Es de los pocos hallazgos de la psicología de las últimas décadas que se sostienen con datos de ochenta años, y encaja bien con lo que el libro propone en esta parte.",
        },
        {
          forma: "texto",
          texto:
            "El que tiene que ver con el optimismo y con lo que se le puede pedir a la actitud de una persona.",
        },
      ],
    },

    {
      titulo: "La psiquiatra que dice que vayas al psiquiatra",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El libro sostiene que el optimismo es en parte entrenable, y eso tiene respaldo: la manera en que alguien interpreta lo que le pasa se puede modificar, y ese es el fundamento de la terapia cognitiva, que es de los tratamientos psicológicos mejor evaluados que existen.",
        },
        {
          forma: "texto",
          texto:
            "El problema no es esa afirmación sino su vecindad. En un libro titulado cómo hacer que te pasen cosas buenas, escrito por una médica, la insistencia en la actitud puede leerse como una promesa de que la actitud influye en lo que a uno le ocurre.",
        },
        {
          forma: "clave",
          rotulo: "Por qué eso es delicado",
          frase: "Porque a este libro llegan personas con cáncer, con enfermedades crónicas y con duelos. Sugerirles que su estado emocional influye en su enfermedad les añade una responsabilidad que no les corresponde, y la evidencia de que la actitud modifique el curso de un cáncer es muy débil.",
        },
        {
          forma: "texto",
          texto:
            "La autora no afirma eso de forma explícita y en algún pasaje lo matiza, y el conjunto empuja en esa dirección. Es el riesgo característico de este género y merece decirse en un resumen honesto, porque el lector que peor lo está pasando es el más expuesto.",
        },
        {
          forma: "texto",
          texto:
            "El segundo reparo general es la ausencia de referencias en la edición original. Un libro que afirma continuamente qué hace el cerebro, escrito con autoridad médica y leído por un millón de personas, debería permitir comprobar de dónde sale cada afirmación.",
        },
        {
          forma: "texto",
          texto:
            "El tercero es de proporción entre lo individual y lo demás. El libro habla de estrés crónico sin apenas mencionar las causas que producen la mayor parte del estrés crónico de la población: la precariedad, las jornadas, los cuidados y el precio de la vivienda.",
        },
        {
          forma: "arte",
          texto:
            "Eso deja al lector con herramientas para gestionar un problema cuya causa está fuera de su alcance, que es útil y es insuficiente. Respirar mejor no arregla dos trabajos, y presentar la respiración como la solución traslada al individuo un problema que no es suyo.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Ahora, lo que hay que ponerle a favor, que es más de lo que suelen reconocer sus críticos. El primero ya está dicho y es el más importante: normalizó ir al psiquiatra y al psicólogo en un país donde eso seguía siendo motivo de vergüenza.",
        },
        {
          forma: "texto",
          texto:
            "El segundo es que explicó la fisiología del estrés a gente que llevaba años yendo a urgencias con síntomas que nadie le había sabido nombrar, y esa explicación por sí sola reduce el miedo, que es una parte importante del propio síntoma.",
        },
        {
          forma: "texto",
          texto:
            "El tercero es que no promete milagros ni vende un método propio. Las recomendaciones que da son las que daría cualquier profesional razonable, y no hay detrás un curso, un suplemento ni un programa de pago.",
        },
        {
          forma: "clave",
          rotulo: "Lo que la gente cree y no es verdad",
          frase: "Lo primero, la frase que el libro repite más: el cerebro sí distingue entre lo real y lo imaginado. Lo que ocurre es que también reacciona a lo imaginado, que es una cosa bastante distinta y bastante menos espectacular.",
        },
        {
          forma: "texto",
          texto:
            "Segundo: el cortisol no es una hormona mala que haya que mantener baja. Es imprescindible, sigue un ritmo diario y su ausencia produce una enfermedad grave. Lo perjudicial es la activación sostenida, no la sustancia.",
        },
        {
          forma: "texto",
          texto:
            "Tercero: no hay cuatro hormonas de la felicidad con una emoción cada una. Es un esquema pedagógico útil para explicar y falso como descripción, porque cada una de esas moléculas participa en decenas de funciones distintas y a menudo contradictorias.",
        },
        {
          forma: "texto",
          texto:
            "Cuarto: la depresión no es un déficit de serotonina. Esa explicación se abandonó, una revisión amplia de 2022 no encontró pruebas consistentes que la sostuvieran, y los antidepresivos funcionan en depresión moderada y grave por mecanismos que no son ese.",
        },
        {
          forma: "arte",
          texto:
            "Y quinto: la dopamina no es la molécula del placer, es la del deseo. Se dispara anticipando y no disfrutando, y esa distinción explica mucho mejor por qué alguien puede pasarse dos horas en una aplicación que no le está gustando nada.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "El balance justo: un libro de divulgación con neurociencia simplificada hasta el error en varios puntos, sin referencias, con una tendencia a poner en el individuo la solución de problemas que no lo son.",
        },
        {
          forma: "texto",
          texto:
            "Y que ha explicado a un millón de personas qué le pasa a su cuerpo cuando lleva dos años en alerta, y les ha dicho que pedir ayuda es lo razonable.",
        },
        {
          forma: "texto",
          texto:
            "Lo segundo pesa bastante más de lo que su reputación en los círculos profesionales sugiere.",
        },
        {
          forma: "texto",
          texto:
            "Quien quiera seguir por ahí con material más sólido tiene por dónde. Sobre el estrés, el libro de Robert Sapolsky sobre por qué las cebras no tienen úlcera explica lo mismo con treinta años de investigación propia detrás y con las referencias puestas.",
        },
        {
          forma: "texto",
          texto:
            "Sobre atención y pantallas, hay trabajo académico reciente bastante más matizado que la versión de la dopamina, incluida investigación que discute cuánto daño hacen realmente las redes sociales y que encuentra efectos más pequeños de lo que suele decirse.",
        },
        {
          forma: "texto",
          texto:
            "Y para lo que este libro hace bien —explicarle a alguien que no sabe nada qué le está pasando en el cuerpo y convencerlo de que pida ayuda— no hay tantos sustitutos en español, y esa es la razón honesta de su éxito.",
        },
        {
          forma: "texto",
          texto:
            "La manera de leerlo, entonces, es como lo que es: no un libro de neurociencia, sino un libro de una psiquiatra que ha visto a mucha gente asustada y ha escrito lo que le dice a esa gente en la consulta.",
        },
      ],
    },
  ],
};
