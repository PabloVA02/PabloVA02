import type { Resumen } from "./tipos";

/* ==========================================================================
   Arte.

   La categoría que más se resiste al formato: hablar de imágenes sin
   enseñarlas. La salida es contar el proceso y la vida de quien las hizo,
   que es lo que engancha de todas formas — nadie recuerda un cuadro por su
   composición, lo recuerda por lo que le pasaba al que lo pintó.
   ========================================================================== */

export const ROBA_ARTISTA: Resumen = {
  id: "roba-artista",
  titulo: "Roba como un artista",
  autor: "Austin Kleon",
  ano: 2012,
  gancho: "Empezó como una charla en una universidad pequeña ante unos pocos estudiantes. Alguien la colgó en internet y se leyó millones de veces.",
  porQue:
    "Desmonta en diez reglas cortas el mito que más gente paraliza: que hay que tener una idea original antes de empezar.",
  partes: [
    {
      titulo: "Nada es original",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En 2011 Austin Kleon, un escritor sin apenas público, dio una charla a un grupo de estudiantes en una universidad pequeña de Nueva York. Preparó una lista de las diez cosas que le habría gustado que le contaran a los veinte años. La colgó en su blog por si a alguien le servía. Se propagó sola, la leyeron millones de personas y acabó convertida en un libro que se ha traducido a más de veinte idiomas.",
        },
        {
          forma: "clave",
          rotulo: "La regla número uno",
          frase: "Roba como un artista. Nada es completamente original, y saberlo te libera para empezar.",
        },
        {
          forma: "texto",
          texto:
            "Su argumento no es una excusa para copiar, y conviene entenderlo bien. Toda obra nueva se construye sobre otras: lo que llamamos originalidad es una combinación de influencias que nadie había juntado antes. El artista honesto conoce sus fuentes y las cita; el que roba de verdad es el que las esconde para parecer un genio salido de la nada.",
        },
        {
          forma: "arte",
          texto:
            "De ahí su consejo más práctico: en vez de preguntarte «¿qué tengo yo que decir?», estudia a quien admiras. Y no a uno solo, porque entonces eres un imitador; a diez o quince a la vez, para que sus influencias se mezclen y salga algo que no se parece del todo a ninguno. «Coleccionar bien es la mitad del trabajo.»",
          arte: "estanteria",
        },
      ],
    },

    {
      titulo: "Empieza antes de saber quién eres",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Su segunda regla ataca la parálisis más común: esperar a tener claro qué clase de artista eres antes de ponerte. Kleon dice que es al revés — descubres quién eres <em>haciendo</em>, no pensando. Y añade que fingir hasta conseguirlo no es una impostura: todo el mundo empieza haciendo algo que aún no sabe hacer.",
        },
        {
          forma: "clave",
          rotulo: "El atajo",
          frase: "Haz la cosa que te habría gustado encontrar hecha. Si no existe el libro que quieres leer, escríbelo tú.",
        },
        {
          forma: "texto",
          texto:
            "Insiste también en usar las manos. Su mesa está dividida en dos: la digital, con el ordenador, y la analógica, con papel, tijeras y rotuladores. La analógica es donde se generan las ideas, porque el ordenador —dice— es magnífico para editar y pésimo para empezar. En cuanto abres un documento en blanco entra el crítico, y el crítico mata todo lo que aún no está terminado.",
        },
        {
          forma: "texto",
          texto:
            "Y defiende los proyectos secundarios y las aficiones sin ambición: precisamente ahí, donde no hay nada en juego, es donde aparece lo bueno. Muchos artistas descubrieron su obra principal jugando con lo que hacían al margen.",
        },
      ],
    },

    {
      titulo: "Aburrido por fuera",
      tarjetas: [
        {
          forma: "arte",
          texto:
            "La regla que más choca es «sé aburrido; es la única manera de trabajar». Kleon desmonta el mito del artista caótico con una cita de Flaubert que resume el libro entero: sé ordenado y regular en tu vida para poder ser violento y original en tu obra.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "Lo lleva a lo doméstico y sin romanticismo: cuídate el sueño, haz algo de deporte, ten un trabajo que pague las facturas y no te queme la cabeza, guarda un calendario donde tachar los días que has trabajado. La cadena de días tachados acaba siendo la única motivación fiable, porque no depende de que ese día te apetezca.",
        },
        {
          forma: "clave",
          rotulo: "La otra mitad",
          frase: "Haz buen trabajo y compártelo. No hay tercera parte del secreto.",
        },
        {
          forma: "texto",
          texto:
            "Sobre compartir tiene una idea útil y poco intuitiva: no enseñes solo lo terminado, enseña también el proceso. Los bocetos, los descartes, lo que estás leyendo. La gente no se engancha a las obras acabadas de un desconocido; se engancha a ver cómo alguien las hace.",
        },
      ],
    },

    {
      titulo: "La creatividad es restar",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Su última idea es la más liberadora para cualquiera que se bloquee ante infinitas posibilidades: elige tus límites a propósito. Escribe solo con un color, o en un cuaderno diminuto, o dedícale veinte minutos y ni uno más. La restricción no empobrece el resultado, lo obliga a existir.",
        },
        {
          forma: "arte",
          texto:
            "Pone el ejemplo de músicos que se pusieron reglas absurdas —grabar en tres días, con dos micrófonos, sin ordenador— y sacaron sus mejores discos. Frente a la página en blanco, no falta talento: sobra libertad.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Hay que decir lo obvio del libro: son ochenta páginas de aforismos con dibujos, y quien busque profundidad se quedará con hambre. Kleon no demuestra nada, y su idea de «robar» se ha malinterpretado bastante — hay quien la ha leído como permiso para copiar sin más.",
        },
        {
          forma: "texto",
          texto:
            "Y una regla más que suele pasarse por alto y que es de las mejores: la geografía ya no manda. Kleon escribe que durante siglos había que mudarse a París o a Nueva York para estar donde pasaban las cosas, y que eso se acabó — hoy puedes formar parte de una conversación desde cualquier sitio. Pero lo remata con una advertencia: el mundo se ha convertido en un pueblo pequeño donde todos se conocen, así que trata bien a la gente, responde a quien te escribe y no hables mal de nadie por escrito. Ser generoso no es una estrategia de marketing; es que las oportunidades llegan casi siempre de alguien que te recordó con simpatía.",
        },
        {
          forma: "clave",
          rotulo: "Para llevarte",
          frase: "No esperes a tener una idea original. Junta las que ya te gustan y empieza hoy: lo tuyo aparece por el camino.",
        },
      ],
    },
  ],
};

export const GUERRA_ARTE: Resumen = {
  id: "guerra-arte",
  titulo: "La guerra del arte",
  autor: "Steven Pressfield",
  ano: 2002,
  gancho: "Le pone nombre a la fuerza que te impide sentarte a hacer lo que llevas años diciendo que vas a hacer.",
  porQue:
    "Es el libro que más escritores, músicos y deportistas regalan. Su idea central explica la procrastinación mejor que cualquier manual de productividad.",
  partes: [
    {
      titulo: "Diecisiete años sin vender nada",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Steven Pressfield pasó casi dos décadas intentando ser escritor sin conseguirlo. Trabajó de camionero, de recolector de fruta, de guionista sin encargos; vivió en una furgoneta. Su primera novela vendida llegó cuando ya rondaba los cincuenta. Este libro es lo que aprendió de esos años, y no va de escribir: va de por qué no escribía.",
        },
        {
          forma: "clave",
          rotulo: "El enemigo",
          frase: "La Resistencia: una fuerza que se opone a cualquier acto que te haga mejor de lo que eres.",
        },
        {
          forma: "texto",
          texto:
            "Lo llama así, con mayúscula, y lo trata como una ley física. La Resistencia no aparece cuando vas a ver la tele; aparece exactamente cuando vas a hacer lo que importa. Escribir, entrenar, montar el negocio, tener la conversación difícil. Nunca se opone a lo cómodo.",
        },
        {
          forma: "arte",
          texto:
            "Y de ahí saca la observación más útil del libro: la Resistencia funciona como una brújula. Cuanto más miedo te da algo, más señal es de que tienes que hacerlo, porque solo se resiste lo que te haría crecer. El proyecto que llevas años posponiendo es, casi siempre, el que más te importa.",
          arte: "explorar",
        },
      ],
    },

    {
      titulo: "Sus disfraces",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La primera parte del libro es un catálogo de cómo se disfraza. El más común es la procrastinación, y Pressfield señala su truco: nunca dice «no lo hagas», dice «hazlo mañana». Y eso suena tan razonable que cuela toda la vida.",
        },
        {
          forma: "texto",
          texto:
            "Pero hay más caras, y algunas incómodas. Formarse eternamente sin producir nada. Criticar el trabajo ajeno con un ojo finísimo. Convertirse en el personaje sufriente de tu propia película. Buscar problemas de pareja justo cuando había que trabajar. Cuidar de todo el mundo para no tener tiempo de cuidar lo tuyo.",
        },
        {
          forma: "clave",
          rotulo: "El disfraz favorito",
          frase: "El perfeccionismo. Suena a exigencia y es miedo con buena reputación.",
        },
        {
          forma: "texto",
          texto:
            "Señala otra pista inconfundible: la Resistencia aprieta más cuanto más cerca estás del final. El último capítulo, la última semana, el paso que ya solo consiste en entregar. Justo ahí aparecen las dudas, las ganas de rehacerlo todo desde cero y la urgencia repentina de ocuparse de otra cosa. Terminar es lo que más se resiste, porque terminar expone.",
        },
        {
          forma: "texto",
          texto:
            "Su diagnóstico más duro va al «artista bloqueado» que se refugia en el sufrimiento: la infelicidad puede volverse cómoda, porque mientras te lamentas nadie te pide resultados. Pressfield lo dice sin piedad, y probablemente porque estuvo ahí años.",
        },
      ],
    },

    {
      titulo: "Hacerse profesional",
      tarjetas: [
        {
          forma: "arte",
          texto:
            "La segunda parte es la solución, y no es motivación: es cambiar de categoría. El aficionado escribe cuando le apetece; el profesional se presenta todos los días, apetezca o no. No es cuestión de talento ni de haber vendido nada — es una decisión que puedes tomar esta tarde.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Su retrato del profesional es concreto. Aparece cada día a la misma hora. Se queda toda la jornada. Aguanta a largo plazo. Acepta que le paguen. No se identifica tanto con su trabajo como para hundirse cuando falla. Domina la técnica. Y sobre todo: no espera a la inspiración, porque sabe que la inspiración llega cuando ya estás sentado, no antes.",
        },
        {
          forma: "clave",
          rotulo: "La frase que resume el libro",
          frase: "El aficionado espera a estar inspirado. El profesional sabe que la inspiración viene después de empezar.",
        },
        {
          forma: "texto",
          texto:
            "Y una anécdota que remata la idea. El día que terminó su primera novela, después de años, llamó a su mentor y le dijo que lo había conseguido. El otro le felicitó y añadió una sola frase: «empieza la siguiente mañana». Terminar no es la meta; volver a sentarse sí.",
        },
      ],
    },

    {
      titulo: "La parte discutible",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La tercera parte del libro es donde mucha gente se baja. Pressfield sostiene que existen musas literales, ángeles y fuerzas superiores que acuden cuando demuestras compromiso, y describe un pequeño ritual de invocación antes de escribir. Lo dice en serio, no como metáfora.",
        },
        {
          forma: "texto",
          texto:
            "Se puede leer como superstición y saltárselo sin perder nada. Pero conviene rescatar el fondo, que sí aguanta: dejar de esperar a sentirte capaz y actuar como si ya lo fueras. El compromiso no llega después de la confianza; la confianza llega después del compromiso.",
        },
        {
          forma: "arte",
          texto:
            "Hay otra crítica justa: su tono es de sargento y su ideal —presentarse todos los días sin excusas— no distingue entre pereza y agotamiento real. Aplicado a alguien que atraviesa una depresión o cuida de otros, ese discurso hace daño en vez de ayudar.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Hay una distinción suya que vale por medio libro: la diferencia entre el que hace y el que habla de hacer. Pressfield señala que la Resistencia adora las conversaciones sobre proyectos — la novela que vas a escribir, el negocio que vas a montar— porque hablar de ello da casi la misma satisfacción que hacerlo y no cuesta nada. Su consejo es incómodo y práctico: no cuentes lo que estás haciendo hasta que esté hecho. Cada vez que lo narras gastas parte del combustible que necesitabas para terminarlo, y la aprobación que recibes al contarlo sustituye a la que ibas a buscar acabándolo.",
        },
        {
          forma: "clave",
          rotulo: "Para llevarte",
          frase: "Aquello que más te cuesta empezar es exactamente lo que tienes que empezar. La resistencia señala el camino.",
        },
      ],
    },
  ],
};

export const MODOS_VER: Resumen = {
  id: "modos-ver",
  titulo: "Modos de ver",
  autor: "John Berger",
  ano: 1972,
  gancho: "Cuatro programas de televisión de treinta minutos que cambiaron para siempre la forma en que Occidente mira las imágenes.",
  porQue:
    "Después de leerlo no puedes volver a ver un anuncio igual. Es el libro que más ha influido en cómo entendemos la publicidad.",
  partes: [
    {
      titulo: "Ver es anterior a las palabras",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En 1972 la BBC emitió cuatro programas de media hora presentados por John Berger, un crítico de arte con camisa estampada que hablaba mirando a cámara. Iban contra todo lo que se decía entonces sobre arte: nada de reverencia, nada de genios. El libro que salió de ahí lleva medio siglo en las listas de lectura de las escuelas de arte del mundo.",
        },
        {
          forma: "clave",
          rotulo: "La primera frase",
          frase: "Ver es anterior a las palabras. El niño mira y reconoce antes de poder hablar.",
        },
        {
          forma: "arte",
          texto:
            "Su primer golpe va contra la idea de obra maestra intocable. Un cuadro pintado para una capilla concreta significaba algo cuando lo veías allí, en penumbra, después de un viaje. El mismo cuadro reproducido en una postal, en un libro o de fondo en la pantalla de una cocina, ya no significa lo mismo. La reproducción no acerca la obra: la convierte en otra cosa.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Y señala la consecuencia incómoda: como ya se puede reproducir cualquier cosa, lo único que hace especial al original es que es <em>el original</em> — es decir, su precio. El aura del museo, dice Berger, es en buena parte el eco del valor de mercado.",
        },
      ],
    },

    {
      titulo: "Los hombres actúan, las mujeres aparecen",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El capítulo más citado del libro analiza el desnudo en la pintura europea. Berger observa que casi todos los desnudos femeninos están pintados por hombres, para hombres, y que la mujer del cuadro casi siempre mira hacia fuera: no está absorta en su mundo, está pendiente de quien la observa.",
        },
        {
          forma: "clave",
          rotulo: "La frase que se ha repetido mil veces",
          frase: "Los hombres miran a las mujeres. Las mujeres se miran a sí mismas siendo miradas.",
        },
        {
          forma: "texto",
          texto:
            "De ahí saca su idea más influyente: a las mujeres se les enseña desde niñas a vigilarse por dentro, a llevar encima un observador permanente que juzga cómo se las ve. Conviven una vigilante y una vigilada en la misma persona. Escrito en 1972, es la base de buena parte de lo que hoy se discute sobre imagen corporal y redes.",
        },
        {
          forma: "texto",
          texto:
            "Berger distingue además entre estar desnudo y ser un desnudo. Lo primero es simplemente no llevar ropa; lo segundo es estar convertido en objeto de exhibición para otro. La diferencia no está en el cuerpo sino en para quién está puesto.",
        },
      ],
    },

    {
      titulo: "Pintar lo que se posee",
      tarjetas: [
        {
          forma: "arte",
          texto:
            "Su tercera tesis es sobre la pintura al óleo entre 1500 y 1900, y es demoledora. Buena parte de esos cuadros, dice, no celebran la belleza: celebran la propiedad. Los objetos, los tejidos, la vajilla, las tierras del fondo — todo eso pertenecía al que pagaba el cuadro, y la pintura al óleo existía precisamente porque sabía representar mejor que ninguna otra técnica la textura de lo que se puede comprar.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Su ejemplo favorito es un retrato de matrimonio terrateniente sentado tranquilamente ante un campo de trigo. La lectura amable dice que aman la naturaleza. Berger señala lo otro: el campo es suyo, y en aquella época robar una patata de ahí se castigaba con la deportación.",
        },
        {
          forma: "clave",
          rotulo: "La conclusión",
          frase: "No estás viendo un paisaje. Estás viendo un inventario.",
        },
        {
          forma: "texto",
          texto:
            "Berger salva de esa crítica a unos pocos pintores, y explica por qué: son los que pintaron lo que no se podía vender. Un autorretrato de vejez, una pareja de zapatos gastados, una criada vertiendo leche. Ahí, dice, la pintura deja de ser un catálogo y empieza a mirar de verdad.",
        },
      ],
    },

    {
      titulo: "La publicidad como heredera",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Y llega el remate, que es lo que hace que el libro siga vivo. La publicidad, sostiene Berger, es la continuación directa de aquella pintura, con una inversión decisiva: el óleo enseñaba lo que su dueño <em>ya tenía</em>; el anuncio enseña lo que <em>podrías</em> tener. Uno confirmaba una vida; el otro la promete.",
        },
        {
          forma: "arte",
          texto:
            "Por eso, dice, la publicidad no vende objetos: vende una versión mejorada de ti mismo vista desde fuera, con los ojos de los demás. Te propone envidiar a la persona en la que te convertirías si compraras eso. Y como esa persona no llega nunca, el mecanismo se puede repetir indefinidamente.",
          arte: "explorar",
        },
        {
          forma: "clave",
          rotulo: "La definición",
          frase: "La publicidad no habla de productos. Habla de relaciones sociales, y promete felicidad juzgada por otros.",
        },
        {
          forma: "texto",
          texto:
            "Berger dedica además un capítulo entero a un formato que hoy llamaríamos otra cosa: los anuncios que usan obras de arte para vender. Un cuadro célebre detrás de un perfume, una escultura clásica en un anuncio de coches. Su lectura es que la publicidad necesita ese préstamo porque le hace falta autoridad cultural — quiere que la elegancia de siglos se transfiera al producto sin haberla ganado. Y añade una observación que corta: en un anuncio, el pasado se usa siempre para vender futuro. Nunca para entender el presente.",
        },
        {
          forma: "texto",
          texto:
            "Conviene decir sus límites: Berger escribe desde un marxismo explícito y a veces fuerza la interpretación —no todo cuadro de un campo es una escritura de propiedad—, y varios historiadores del arte le han discutido casos concretos. Pero su lectura de la publicidad ha envejecido asombrosamente bien: cámbiese «anuncio de revista» por «feed» y el texto de 1972 describe 2026 sin tocar una coma.",
        },
      ],
    },
  ],
};

export const CARTAS_THEO: Resumen = {
  id: "van-gogh-cartas",
  titulo: "Cartas a Theo",
  autor: "Vincent van Gogh",
  ano: 1914,
  gancho: "Pintó durante diez años, hizo más de dos mil obras y no vendió casi nada. Su hermano le pagó cada tubo de pintura.",
  porQue:
    "Las seiscientas cartas desmontan el mito del loco que pintaba por instinto. Era un lector voraz que razonaba cada color.",
  partes: [
    {
      titulo: "El hermano que pagaba",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Theo van Gogh era marchante de arte en París y tenía un sueldo decente. Durante toda su vida adulta mandó dinero a su hermano mayor Vincent, mes tras mes, para que pudiera pintar. Le pagaba el alquiler, la comida, los lienzos y los tubos de óleo. A cambio recibía cartas: más de seiscientas cincuenta a lo largo de dieciocho años.",
        },
        {
          forma: "arte",
          texto:
            "Vincent empezó a pintar tarde, cerca de los veintisiete años, después de fracasar como marchante, como maestro y como predicador entre mineros. En apenas una década produjo unas dos mil obras, de las cuales unas ochocientas sesenta son óleos. Casi todo lo que conocemos de él lo hizo en sus últimos cuatro años.",
          arte: "escritor",
        },
        {
          forma: "clave",
          rotulo: "La cuenta",
          frase: "Diez años pintando. Más de dos mil obras. Prácticamente ninguna vendida en vida.",
        },
        {
          forma: "texto",
          texto:
            "Las cartas dejan ver algo que el mito tapa: la culpa. Vincent sabía perfectamente que vivía del dinero de su hermano y se lo escribe una y otra vez, prometiendo que algún día podrá devolvérselo. Esa deuda pesa en el libro más que ninguna crisis artística.",
        },
      ],
    },

    {
      titulo: "El lector que nadie cuenta",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La imagen popular es la de un hombre poseído que embadurnaba el lienzo a manotazos. Las cartas dicen lo contrario. Van Gogh leía a Dickens, a Zola, a Shakespeare, en varios idiomas — hablaba neerlandés, francés e inglés—, y discutía teoría del color como un ingeniero.",
        },
        {
          forma: "texto",
          texto:
            "Explica a Theo por qué pone un naranja al lado de un azul, qué le pasa a un amarillo cuando lo rodea de violeta, cómo consigue que un campo vibre sin usar más pintura. Nada de eso es instinto: es alguien estudiando la ley física de los complementarios y aplicándola a mano.",
        },
        {
          forma: "clave",
          rotulo: "Lo que revela",
          frase: "No pintaba a ciegas. Sabía exactamente qué estaba haciendo y por qué. Escribirlo era parte del método.",
        },
        {
          forma: "arte",
          texto:
            "Hay una frase suya que resume su forma de trabajar y que conviene tener a mano cuando algo no sale: dice que busca, que se esfuerza, que está metido en ello con todo el corazón. No habla de talento en ningún momento; habla de estar dentro.",
          arte: "aprendizaje",
        },
      ],
    },

    {
      titulo: "Arlés",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En 1888 se mudó al sur de Francia buscando luz y soñando con fundar allí una comunidad de pintores. Alquiló una casa amarilla y convenció a Paul Gauguin para que fuera. Convivieron nueve semanas. Discutían constantemente sobre pintura y sobre todo lo demás.",
        },
        {
          forma: "texto",
          texto:
            "La víspera de Navidad, tras una pelea, Vincent se cortó parte de la oreja izquierda. Gauguin se marchó y no volvieron a verse. A partir de ahí se sucedieron los ingresos hospitalarios, y él mismo pidió internarse en un asilo cercano. Allí, encerrado y con una ventana como único paisaje, pintó algunas de sus obras más conocidas.",
        },
        {
          forma: "clave",
          rotulo: "El matiz que cambia la historia",
          frase: "No pintaba por estar enfermo. Pintaba a pesar de estarlo, en los intervalos en que la enfermedad le daba tregua.",
        },
        {
          forma: "texto",
          texto:
            "Es una corrección importante, porque el relato del genio atormentado ha hecho daño real: sugiere que el sufrimiento produce arte. Las cartas muestran lo contrario. Los brotes le impedían trabajar y él los vivía como interrupciones. Lo que producía arte eran las temporadas buenas.",
        },
      ],
    },

    {
      titulo: "Johanna",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En julio de 1890 Vincent murió a los treinta y siete años por una herida de bala. Seis meses después murió Theo, con treinta y tres, destrozado por la pérdida y por su propia enfermedad. Están enterrados uno junto al otro en Auvers-sur-Oise, con dos lápidas iguales cubiertas de hiedra.",
        },
        {
          forma: "arte",
          texto:
            "Y aquí aparece la persona sin la cual nadie sabría hoy quién fue Van Gogh: Johanna, la viuda de Theo. Se quedó con veintiocho años, un bebé, cientos de cuadros que nadie quería y un baúl lleno de cartas. Podría haberlo vendido todo por nada. En vez de eso dedicó el resto de su vida a colocar las obras en exposiciones, a negarse a malvenderlas y a traducir y publicar la correspondencia en 1914.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Las cartas dejan también su idea del trabajo, que es lo más aprovechable para cualquiera. Escribe que si oyes una voz dentro diciendo que no sabes pintar, entonces pinta como sea, y esa voz se callará. Cuenta que hacía decenas de estudios de una misma mano o de un mismo par de zapatos hasta que salían, y que no creía en la inspiración sino en presentarse cada mañana delante del lienzo. Ese Van Gogh —terco, metódico, corrigiendo— no aparece en ninguna película sobre él, y es el que se lee en las seiscientas cincuenta cartas.",
        },
        {
          forma: "clave",
          rotulo: "Lo que casi nadie sabe",
          frase: "La fama de Van Gogh no fue póstuma por casualidad. La construyó su cuñada, a pulso, durante casi treinta años.",
        },
        {
          forma: "texto",
          texto:
            "Como libro tiene una pega evidente: son cientos de cartas y no se leen de corrido. Hay páginas de listas de gastos y de encargos de pintura. Pero abrirlo por cualquier sitio y leer veinte minutos es una de las experiencias más directas que existen — se parece menos a leer a un artista muerto que a leer los mensajes de alguien que te está contando cómo le va.",
        },
      ],
    },
  ],
};

export const LEONARDO: Resumen = {
  id: "leonardo",
  titulo: "Leonardo da Vinci",
  autor: "Walter Isaacson",
  ano: 2017,
  gancho: "Entre sus notas hay una tarea pendiente: «describir la lengua del pájaro carpintero». Nadie se lo había encargado.",
  porQue:
    "Reconstruye al personaje a partir de siete mil doscientas páginas de sus cuadernos. Y su conclusión es que el genio era, sobre todo, curiosidad entrenada.",
  partes: [
    {
      titulo: "Las listas de tareas",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Se conservan unas siete mil doscientas páginas de los cuadernos de Leonardo, y se calcula que son apenas una cuarta parte de lo que llegó a escribir. Isaacson construye el libro entero a partir de ellas, y lo mejor no son los grandes planos de máquinas: son las listas de cosas por hacer.",
        },
        {
          forma: "arte",
          texto:
            "«Preguntar al maestro de aritmética cómo se cuadra un triángulo.» «Averiguar por qué el cielo es azul.» «Describir la lengua del pájaro carpintero.» «Observar cómo camina la gente y qué hace con los pies.» Nadie le pagaba por nada de eso. Lo apuntaba porque no podía evitar preguntárselo.",
          arte: "explorar",
        },
        {
          forma: "clave",
          rotulo: "La tesis del libro",
          frase: "El genio de Leonardo no fue un don sobrenatural. Fue curiosidad obsesiva, sostenida durante toda una vida.",
        },
        {
          forma: "texto",
          texto:
            "Isaacson subraya la diferencia con Newton o Einstein, cuyo talento parece inalcanzable. Lo de Leonardo, dice, es distinto: mirar mejor, preguntar más y no dar nada por sabido son cosas que se pueden practicar. Puede que la conclusión sea optimista de más, pero apunta a algo real.",
        },
      ],
    },

    {
      titulo: "Hombre sin letras",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Nació fuera del matrimonio en un pueblo de la Toscana, y eso —que en su época era un estigma— resultó decisivo: al ser ilegítimo no podía heredar el oficio de notario de su padre. Se libró de una vida de escribano y entró de aprendiz en un taller de pintura.",
        },
        {
          forma: "texto",
          texto:
            "No fue a la universidad, no aprendió latín hasta muy mayor y se firmaba a sí mismo «hombre sin letras». Lo decía con resentimiento, pero también con una punta de orgullo: se llamaba discípulo de la experiencia. Mientras los eruditos discutían lo que había escrito Aristóteles, él iba y lo miraba.",
        },
        {
          forma: "clave",
          rotulo: "El método",
          frase: "No leyó lo que se sabía. Fue a comprobarlo. La observación directa, por encima de cualquier autoridad.",
        },
        {
          forma: "texto",
          texto:
            "Sus cuadernos están escritos de derecha a izquierda y con las letras invertidas, legibles solo ante un espejo. Se ha querido ver ahí un código secreto, y la explicación más aceptada es mucho más sencilla: era zurdo, y escribiendo así no arrastraba la mano sobre la tinta fresca.",
        },
        {
          forma: "texto",
          texto:
            "Isaacson enumera lo que era en su época y hoy suena moderno: hijo ilegítimo, homosexual, vegetariano, zurdo, distraído y heterodoxo en religión. Casi todo eso lo apartaba del camino normal. Y precisamente por estar fuera pudo mirar sin las anteojeras de nadie.",
        },
      ],
    },

    {
      titulo: "La sonrisa y el corazón",
      tarjetas: [
        {
          forma: "arte",
          texto:
            "Diseccionó unos treinta cadáveres, a mano, sin refrigeración y con el olor que eso supone. No lo hacía para la ciencia: quería saber qué músculo mueve exactamente un labio cuando alguien sonríe. Dibujó los nervios faciales capa por capa hasta entenderlo.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Ahí está el secreto de la <em>Gioconda</em>. La sonrisa cambia según dónde mires porque Leonardo sabía que la visión central y la periférica captan detalles distintos, y pintó la boca de forma que solo funcione del todo cuando no la miras directamente. No es magia: es anatomía más óptica.",
        },
        {
          forma: "clave",
          rotulo: "El hallazgo que tardó siglos en confirmarse",
          frase: "Dibujó cómo se cierra la válvula aórtica con remolinos de sangre. No se pudo verificar hasta la resonancia magnética.",
        },
        {
          forma: "texto",
          texto:
            "Y un detalle que dice mucho de él: no publicó nada. Todo esto quedó en cuadernos privados, escritos al revés con su letra en espejo, que nadie ordenó ni difundió. Buena parte de sus descubrimientos hubo que volver a hacerlos siglos después porque estaban ahí, escritos, y nadie los leyó.",
        },
      ],
    },

    {
      titulo: "El que no terminaba",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La parte que más consuela del libro es su historial de proyectos abandonados. El caballo gigante para los Sforza nunca llegó a fundirse. La batalla de Anghiari se deterioró por experimentar con una técnica que no funcionó. Aceptó encargos que no entregó, cobró adelantos que tuvo que devolver y dejó cuadros a medias durante años.",
        },
        {
          forma: "arte",
          texto:
            "La <em>Gioconda</em> es el caso extremo: la empezó hacia 1503 y siguió retocándola hasta su muerte, dieciséis años después. Nunca se la dio al cliente. Se la llevó consigo a Francia y la tenía en su habitación. Para él no estaba terminada.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Isaacson lo interpreta con generosidad: dejar algo sin acabar era la manera de no cerrarlo mientras siguiera aprendiendo. Es una lectura bonita, aunque hay que decir que también arruinó a varios clientes y que sus contemporáneos lo consideraban poco fiable.",
        },
        {
          forma: "texto",
          texto:
            "Isaacson insiste en una habilidad concreta que Leonardo entrenó como un músico entrena escalas: mirar despacio. Anotaba que el agua al caer forma espirales, que las libélulas mueven las alas delanteras y traseras en sentidos opuestos, que la lengua de un pájaro carpintero es tan larga que se enrolla alrededor del cráneo. Nada de eso se ve mirando: se ve observando lo mismo muchas veces. Y de ahí sale su consejo práctico para cualquiera, que no requiere ser un genio — dedicarle a una cosa cotidiana más atención de la que merece a primera vista, porque casi todo se vuelve interesante cuando lo miras el tiempo suficiente.",
        },
        {
          forma: "clave",
          rotulo: "Para llevarte",
          frase: "Apunta las preguntas raras que se te ocurran. Esa costumbre, sostenida, es casi todo el método.",
        },
      ],
    },
  ],
};

export const CARTAS_JOVEN_POETA: Resumen = {
  id: "cartas-joven-poeta",
  titulo: "Cartas a un joven poeta",
  autor: "Rainer Maria Rilke",
  ano: 1929,
  gancho: "Un cadete de diecinueve años pregunta si sus poemas son buenos. Rilke le contesta diez veces en cinco años y no comenta ni un solo verso.",
  porQue:
    "Es el libro más citado del mundo sobre vocación, y casi todo lo que se cita de él está cortado justo donde dejaba de ser cómodo.",
  partes: [
    {
      titulo: "El cadete que escribió primero",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Otoño de 1902. Un cadete de diecinueve años está sentado bajo los castaños del parque de la Academia Militar Teresiana de Wiener Neustadt, a cincuenta kilómetros de Viena, leyendo un libro que no toca. Se llama Franz Xaver Kappus. Debería estar estudiando reglamento.",
        },
        {
          forma: "texto",
          texto:
            "Se le acerca el capellán de la academia, el profesor Horaček, y le pregunta qué lee. Kappus le enseña la cubierta: poemas de un tal Rainer Maria Rilke. El cura se queda mirando ese nombre durante un rato largo antes de decir nada.",
        },
        {
          forma: "texto",
          texto:
            "Le cuenta que a ese chico lo tuvo él de alumno quince años antes, en la escuela militar de Sankt Pölten. Que era pálido, callado y muy dotado. Que su padre quería hacerlo oficial a toda costa. Que se marchó enfermo a los quince y no volvió nunca.",
        },
        {
          forma: "clave",
          rotulo: "Por qué le escribe",
          frase: "Rilke había llevado el mismo uniforme, en la misma clase de sitio, y había conseguido salir. Kappus no escribe a un poeta famoso: escribe a alguien que se escapó.",
        },
        {
          forma: "texto",
          texto:
            "Kappus iba para oficial porque su familia lo había decidido, y escribía versos a escondidas entre guardias. Esa tarde hizo lo que hace todo el mundo a esa edad: copió sus mejores poemas, escribió una carta y la mandó a París sin esperar respuesta.",
        },
        {
          forma: "texto",
          texto:
            "En la carta preguntaba lo único que le importaba: si sus poemas valían algo. Y colaba una segunda pregunta, más difícil de formular: si debía ser poeta o debía ser oficial, porque las dos cosas a la vez no parecían caber en una sola vida.",
        },
        {
          forma: "texto",
          texto:
            "La respuesta llegó de París el 17 de febrero de 1903. La firmaba un hombre de veintisiete años que no tenía dinero, ni casa propia, ni todavía la obra por la que hoy se le conoce. Rilke aún no había escrito casi nada de lo que se cita de él.",
        },
        {
          forma: "arte",
          texto:
            "Eso importa para leer el libro sin ingenuidad. No es un maestro consagrado bajando a aconsejar a un principiante. Son dos jóvenes, uno de diecinueve y otro de veintisiete, y el mayor está casi tan perdido como el otro; solo que ha decidido no disimularlo.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "Rilke empieza pidiendo perdón por tardar. Dice que ha estado enfermo y de viaje, y que las cartas así no se contestan deprisa. En la primera línea ya ha dejado puesta la única regla del libro entero: aquí no se va con prisa a ninguna parte.",
        },
        {
          forma: "texto",
          texto:
            "Y entonces hace lo que nadie espera. No habla de los poemas. Los ha leído, dice que se los devuelve adjuntos, y despacha el juicio en dos frases corteses: no son todavía nada propio, se le nota buscándose, algo se anuncia tímidamente en los últimos.",
        },
        {
          forma: "texto",
          texto:
            "Eso es todo lo que dirá sobre los versos de Kappus en diez cartas y cinco años. Ni una corrección, ni un consejo técnico, ni una lectura línea a línea. El texto más citado del mundo sobre escribir no comenta jamás un texto concreto.",
        },
        {
          forma: "texto",
          texto:
            "Lo dice sin rodeos: usted pregunta si sus versos son buenos. Me lo pregunta a mí; antes se lo ha preguntado a otros. Los manda a las revistas. Los compara con otros poemas y se inquieta cuando alguna redacción se los devuelve.",
        },
        {
          forma: "texto",
          texto:
            "Y a continuación desmonta la pregunta entera con seis palabras: nadie puede aconsejarle ni ayudarle, nadie. Solo hay un camino, y consiste en entrar dentro de usted mismo. Ahí se acaba el asunto de la calidad de los poemas y empieza el libro de verdad.",
        },
        {
          forma: "texto",
          texto:
            "Conviene saber desde dónde escribe. París, invierno, una habitación alquilada. Había llegado el año anterior para redactar un ensayo sobre Rodin y estaba pasando hambre y miedo en una ciudad que le parecía una máquina enorme de triturar gente.",
        },
        {
          forma: "texto",
          texto:
            "Escribiría después que en aquellos meses París le enseñó el miedo, los hospitales y las caras de la calle. Todo eso acabó en la novela que empezó allí, «Los cuadernos de Malte Laurids Brigge». Las cartas a Kappus salen del mismo cuarto y de la misma temporada mala.",
        },
        {
          forma: "texto",
          texto:
            "Así que cuando le dice al cadete que la soledad es el estado natural del que trabaja, no está recomendando algo cómodo desde un sillón. Está describiendo lo que tiene delante, lo que le da pánico y lo que ha decidido no esquivar.",
        },
        {
          forma: "arte",
          texto:
            "Hay una imagen que aparece pronto y que ordena las diez cartas: la obra crece como un árbol, no como un edificio. No se levanta por partes dentro de un plazo. Se hace por dentro, sin que se vea nada, y a la savia no se le puede meter prisa.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Kappus contesta. Y otra vez. Y así diez cartas entre 1903 y 1908, escritas desde París, desde Viareggio, desde Worpswede, desde Roma y desde dos casas de campo en Suecia. Rilke no para quieto en cinco años y no deja una sola sin contestar.",
        },
        {
          forma: "texto",
          texto:
            "Lo más raro del libro es que las cartas de Kappus no se conservan. Solo tenemos un lado de la conversación, y aun así se sigue perfectamente lo que preguntaba: por los poemas, por la carrera militar, por el sexo, por la duda, por una tristeza que no sabía explicar.",
        },
        {
          forma: "texto",
          texto:
            "Se adivina a un chaval de diecinueve años en un cuartel preguntándole a un desconocido si su vida va a servir para algo. Y a un hombre de veintisiete contestándole con muchísimo cuidado, porque se acuerda demasiado bien de ese uniforme.",
        },
      ],
    },

    {
      titulo: "Nadie puede aconsejarle",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La primera carta contiene la instrucción más famosa del libro y también la peor entendida. Rilke le pide a Kappus que se meta dentro de sí mismo y examine el fondo del que le brota la vida, porque en ese manantial está la respuesta a si debe escribir.",
        },
        {
          forma: "texto",
          texto:
            "Y le da la prueba concreta, que es lo que ha hecho durar la página un siglo: pregúntese en la hora más callada de su noche si tiene usted que escribir. Excave en busca de una respuesta profunda. Y si es que sí, construya su vida entera según esa necesidad.",
        },
        {
          forma: "clave",
          rotulo: "El cambio de pregunta",
          frase: "La pregunta no es «¿soy bueno?». Es «¿tengo que hacerlo?». Rilke sustituye el criterio de calidad por el de necesidad, y por eso el libro sirve para cualquier oficio.",
        },
        {
          forma: "texto",
          texto:
            "Lo importante es la mitad que casi nunca se cita. Rilke añade que si de ese examen sale que no tiene que escribir, entonces que lo deje sin dramatizar. La prueba sirve exactamente igual para decir que sí y para decir que no.",
        },
        {
          forma: "texto",
          texto:
            "Eso lo separa de la autoayuda. Un libro de autoayuda le habría dicho persigue tu sueño. Rilke le está diciendo averigüe si es su sueño de verdad, contando con la posibilidad real de que la respuesta sea que no y con que eso estaría bien.",
        },
        {
          forma: "texto",
          texto:
            "Después viene el aviso sobre los demás. Le pide que deje de mandar versos a las revistas y de compararse. Que no mire lo que hacen los otros ni lo que dicen de él, porque el juicio de fuera llega siempre antes de tiempo y le va a estropear el oído.",
        },
        {
          forma: "texto",
          texto:
            "Y le prohíbe algo que hoy sonaría a herejía: leer crítica literaria. Dice que son o comentarios de partido, endurecidos y sin sentido, o juegos de palabras hábiles. Que las obras de arte son de una soledad infinita y que con la crítica no se llega hasta ellas.",
        },
        {
          forma: "arte",
          texto:
            "Su alternativa es una frase que se queda pegada: solo el amor puede captarlas, sostenerlas y ser justo con ellas. No dice comprenderlas. Dice ser justo con ellas, que es una idea rarísima y bastante más exigente que la de entenderlas.",
          arte: "lectora",
        },
        {
          forma: "texto",
          texto:
            "Luego le quita el tema. Kappus, como todos los que empiezan, escribía de amor. Rilke le contesta que evite los motivos demasiado corrientes, y que el amor es el más difícil de todos porque hay detrás tradiciones enormes y algunas brillantes ya resueltas.",
        },
        {
          forma: "texto",
          texto:
            "Y le indica dónde mirar en su lugar: si su vida diaria le parece pobre, no la culpe a ella; cúlpese usted, dígase que no es bastante poeta para invocar sus riquezas, porque para el que crea no hay pobreza ni lugar pobre e indiferente.",
        },
        {
          forma: "texto",
          texto:
            "En el mismo párrafo le entrega el material que tiene delante y no ve: aunque estuviera usted en una cárcel cuyas paredes no dejaran llegar a sus sentidos ninguno de los ruidos del mundo, ¿no le quedaría siempre su infancia entera?",
        },
        {
          forma: "texto",
          texto:
            "La infancia como mina. Es un consejo técnico disfrazado de consuelo, y funciona: casi todo lo que un principiante cree que no da para escribir —su casa, su pueblo, su aburrimiento, su cuartel— es exactamente lo único que tiene de propio.",
        },
        {
          forma: "texto",
          texto:
            "Kappus debió de contestar algo sobre su encierro, porque en la segunda carta, desde Viareggio, Rilke vuelve al asunto y lo endurece. Le habla de la ironía, que era el vicio del chico y sigue siendo el vicio de todos los jóvenes listos.",
        },
        {
          forma: "texto",
          texto:
            "Le dice que no se deje dominar por ella, sobre todo en los momentos sin creación. En los creativos, que intente usarla como un medio más de agarrar la vida. Usada limpiamente, es limpia. Y da la regla de aviso: si le resulta demasiado familiar, sospeche.",
        },
        {
          forma: "texto",
          texto:
            "El remedio que propone es de una sensatez brutal: busque la profundidad de las cosas, porque ahí abajo la ironía no baja nunca. Si por el camino descubre que es un recurso grande, úsela sin miedo; si no lo es, se le caerá sola de las manos.",
        },
        {
          forma: "texto",
          texto:
            "Y le manda leer solo dos libros: la Biblia y a Jens Peter Jacobsen, un novelista danés casi desconocido hoy. No le recomienda a los grandes ni a los de moda. Le recomienda al autor que a él le cambió la cabeza, y sin pretender que le valga a todo el mundo.",
        },
        {
          forma: "texto",
          texto:
            "También le habla del dinero, que es la parte que nunca se cita. Kappus tenía que elegir entre el ejército y algo incierto, y esperaba que el poeta le dijera que se lanzara. Rilke no le dice en ningún momento que abandone el uniforme.",
        },
        {
          forma: "texto",
          texto:
            "Le dice que una profesión cualquiera, aunque sea dura y hostil, no le impedirá vivir lo suyo, porque todas lo son; y que quizá un oficio duro le convenga más a un solitario que uno artístico, que tiene la trampa de parecer que ya es arte por sí mismo.",
        },
        {
          forma: "arte",
          texto:
            "Ese consejo desaparece de todas las ediciones de frases bonitas, y es de lo más honesto que hay aquí: no dejes tu trabajo. Lo escribe un hombre que en ese momento vivía de la generosidad de aristócratas y sabía perfectamente lo que costaba lo contrario.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Al final de esa carta hay una línea que ordena las ocho siguientes. Le pide que no se busque a sí mismo en ellas, que no las conteste con prisa y que no le agradezca nada. Y le pide una sola cosa a cambio, que es la palabra que más repite el libro: paciencia.",
        },
      ],
    },

    {
      titulo: "Vivir las preguntas",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La cuarta carta está escrita el 16 de julio de 1903 desde Worpswede, una colonia de pintores en un páramo cerca de Bremen. Rilke había vivido allí, allí conoció a la escultora Clara Westhoff, con la que se casó, y había vuelto solo. Es la carta central del libro.",
        },
        {
          forma: "texto",
          texto:
            "Kappus le había escrito angustiado. Se deduce por la respuesta: dudas sobre su vocación, sobre su cuerpo y sobre por qué estaba triste sin motivo. Rilke, en lugar de resolverle nada, le explica con todo detalle por qué no piensa resolverle nada.",
        },
        {
          forma: "texto",
          texto:
            "Y llega el pasaje más citado del siglo, casi siempre cortado por la mitad. Le pide que tenga paciencia con todo lo que está sin resolver en su corazón, y que intente amar las preguntas mismas, como si fueran habitaciones cerradas con llave.",
        },
        {
          forma: "texto",
          texto:
            "Sigue: como libros escritos en un idioma extranjero. Que no busque ahora las respuestas, porque no se las podrían dar, ya que no sería capaz de vivirlas. Y de eso se trata en el fondo, dice: de vivirlo todo, incluida la parte que no se entiende.",
        },
        {
          forma: "clave",
          rotulo: "La frase entera",
          frase: "«Viva ahora las preguntas. Quizá entonces, poco a poco, sin darse cuenta, viva usted algún día lejano la respuesta.» La respuesta no se piensa: se llega a ella viviendo.",
        },
        {
          forma: "texto",
          texto:
            "Hoy se usa como consuelo, y es lo contrario de un consuelo. Rilke no le está diciendo tranquilo, ya llegará. Le está diciendo que no va a llegar por pensarlo, que le van a hacer falta años de vida y que quizá se le pase la juventud entera dentro de la pregunta.",
        },
        {
          forma: "texto",
          texto:
            "En la misma carta hay una idea que sostiene a la anterior y que casi nadie recuerda: que no hay que angustiarse por los estados de tristeza, porque los momentos tristes son precisamente aquellos en los que algo nuevo ha entrado en nosotros.",
        },
        {
          forma: "texto",
          texto:
            "Lo desarrolla con una imagen doméstica y exacta. Cuando estamos tristes, algo desconocido ha entrado en la casa; nuestros sentidos se callan, todo retrocede unos pasos, y en medio del silencio está eso nuevo que todavía no ha dicho su nombre.",
        },
        {
          forma: "arte",
          texto:
            "Y de ahí saca lo que le interesa: cuanto más callados, pacientes y abiertos estemos en la tristeza, más hondo entra lo nuevo y más nuestro se hace. Es una teoría del duelo escrita a los veintisiete años por un hombre que aún no había perdido casi nada.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "En esa carta está también la parte incómoda, la que las ediciones de regalo adelgazan: Rilke le habla de sexo a un cadete de veinte años, en 1903, con una franqueza que en aquel momento no era en absoluto habitual.",
        },
        {
          forma: "texto",
          texto:
            "Le dice que el placer físico es una experiencia sensorial como mirar o como el sabor de una fruta buena, una experiencia grande y sin límites que se nos ha dado; y que el problema nunca es tenerla, sino el uso torpe que se le da.",
        },
        {
          forma: "texto",
          texto:
            "Y le señala dónde está el error de casi todos: la mayoría abusa y malgasta esa experiencia, y la usa como excitación en los puntos cansados de su vida, en vez de como una concentración hacia arriba. Lo dice sin moralina y sin una sola advertencia religiosa.",
        },
        {
          forma: "texto",
          texto:
            "Después le hace un pronóstico raro: que quizá los sexos estén más emparentados de lo que se cree, y que la gran renovación del mundo consistirá en que el hombre y la mujer, liberados de los papeles falsos, se busquen como seres humanos y no como contrarios.",
        },
        {
          forma: "texto",
          texto:
            "Escrito en 1903, eso no era un lugar común. Rilke estaba casado con una escultora que trabajaba, había vivido con Lou Andreas-Salomé, catorce años mayor y más inteligente que casi todos los hombres que trató, y no estaba hablando de oídas.",
        },
        {
          forma: "texto",
          texto:
            "También le manda un aviso sobre la prisa: los jóvenes se equivocan al amar deprisa, porque se lanzan el uno sobre el otro cuando todavía no se sostienen solos, y de esa mezcla no sale una unión sino un desorden compartido y un cansancio doble.",
        },
        {
          forma: "texto",
          texto:
            "La quinta carta la escribe desde Roma, el 29 de octubre. Confiesa que la ciudad le agobió al llegar: museos, mármoles, la sensación de vivir dentro de un pasado inmenso que no es suyo. Tardó semanas en encontrar un sitio donde ponerse a trabajar.",
        },
        {
          forma: "texto",
          texto:
            "Ese detalle sirve para leer todo lo demás: el hombre que recomienda paciencia está contando a la vez que él no la tiene, que se muda cada pocos meses y que las ciudades le desordenan el trabajo. Estas cartas no están escritas desde arriba.",
        },
        {
          forma: "texto",
          texto:
            "En la sexta, ya en diciembre y ya con un cuarto donde puede trabajar, le habla de la Navidad y de por qué las fiestas son duras para los que están solos. Le pide que no espere consuelo de las personas y que lo busque donde de verdad lo tiene, que es en su trabajo.",
        },
        {
          forma: "texto",
          texto:
            "Y suelta la frase que resume el libro entero: lo necesario es solo esto, la soledad, la gran soledad interior. Ir hacia dentro y no encontrarse con nadie durante horas. Eso es lo que hay que conseguir, y no se consigue de golpe.",
        },
        {
          forma: "arte",
          texto:
            "Es una idea difícil de vender hoy, y por eso conviene decirla entera. Rilke no está recomendando aislarse por gusto ni desaparecer del mundo. Está diciendo que hay un trabajo que solo se hace cuando no hay nadie mirando, y que aprender a estar así es un oficio.",
          arte: "noche",
        },
      ],
    },

    {
      titulo: "Dos soledades",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La séptima carta es de Roma, 14 de mayo de 1904, y es la más larga del libro. Empieza pidiendo disculpas por el silencio de meses y acaba siendo el mejor texto sobre el amor que escribió Rilke, que escribió muchos y casi todos buenos.",
        },
        {
          forma: "texto",
          texto:
            "Kappus se había enamorado. La carta responde a eso, y lo primero que hace es quitarle la prisa. Amar es difícil, repite. Para un ser humano, amar a otro es quizá la tarea más difícil que se le ha encomendado, el trabajo para el que todos los demás son preparación.",
        },
        {
          forma: "clave",
          rotulo: "El orden",
          frase: "«El amor es una ocasión sublime para que el individuo madure, para que llegue a ser algo por sí mismo, para que se convierta en un mundo.» Primero se es alguien. Después se ama.",
        },
        {
          forma: "texto",
          texto:
            "Por eso los jóvenes se equivocan casi siempre, dice: se entregan porque no soportan estar solos, se mezclan y a eso lo llaman amor. Se prestan el uno al otro sus soledades como quien se presta un abrigo, y luego se extrañan de seguir teniendo frío.",
        },
        {
          forma: "arte",
          texto:
            "Y llega la definición que se sigue leyendo en bodas ciento veinte años después: el amor consiste en esto, en que dos soledades se protejan, se limiten y se saluden. Las tres cosas, y en ese orden exacto. Protegerse, ponerse límite, saludarse.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "La palabra que casi nadie oye ahí es la segunda. Limitarse. Rilke está diciendo que en el amor bueno cada uno le pone frontera al otro, y que esa frontera no es un fallo del amor: es la prueba de que hay dos personas y no una masa.",
        },
        {
          forma: "texto",
          texto:
            "En la misma carta habla de las mujeres con una idea que en 1904 no era corriente. Dice que la mujer está pasando por un cambio enorme, que dejará de definirse por contraste con el hombre, y que entonces el amor tendrá que reinventarse entero.",
        },
        {
          forma: "texto",
          texto:
            "Y añade que ese cambio será duro para los hombres, porque estarán sorprendidos y derrotados, acostumbrados como están a que el papel del otro venga escrito de antemano. Lo escribe un hombre que en ese momento no vivía ni con su mujer ni con su hija.",
        },
        {
          forma: "texto",
          texto:
            "Ahí está la contradicción central del libro y no hay que taparla. Rilke se casó con Clara Westhoff en 1901, tuvieron una hija, Ruth, y menos de un año después él estaba solo en París escribiendo sobre la soledad necesaria del que crea.",
        },
        {
          forma: "texto",
          texto:
            "No la abandonó del todo: siguieron escribiéndose y viéndose, y él sostenía que el buen matrimonio era el que guardaba la soledad de cada uno. Pero quien pagó ese arreglo fue sobre todo ella, que dejó de esculpir durante años. Conviene saberlo al leer lo de las dos soledades.",
        },
        {
          forma: "texto",
          texto:
            "La octava carta la escribe en agosto, ya desde Suecia, en una casa de campo llamada Borgeby gård. Kappus le ha escrito hundido, sin decir exactamente por qué. Rilke le contesta con la imagen más útil de todo el libro.",
        },
        {
          forma: "texto",
          texto:
            "Le dice que no se asuste si delante de él se levanta una tristeza más grande que ninguna de las vistas hasta ahora; que recuerde que la vida no lo ha olvidado, que lo tiene en la mano y que no lo dejará caer.",
        },
        {
          forma: "texto",
          texto:
            "Y luego la vuelta de tuerca: quizá todos los dragones de nuestra vida sean princesas que solo esperan vernos una vez hermosos y valientes. Quizá todo lo espantoso sea, en su fondo más profundo, algo indefenso que está pidiendo que lo ayudemos.",
        },
        {
          forma: "texto",
          texto:
            "La frase circula por ahí como decoración de taza, y en su sitio es un método concreto: cuando algo le dé miedo, mírelo el tiempo suficiente para averiguar si le está atacando o le está pidiendo algo. Casi nunca es lo primero.",
        },
        {
          forma: "texto",
          texto:
            "En la novena, de noviembre y también sueca, aparece un consejo casi práctico sobre la duda, que Kappus debía de tener a diario en el cuartel. Rilke no le dice que la eche de casa. Le dice que la eduque y le dé un empleo.",
        },
        {
          forma: "texto",
          texto:
            "Que su duda puede llegar a ser una buena cualidad si la disciplina. Que cada vez que quiera estropearle algo, le exija pruebas, le pregunte por qué eso es feo, le pida razones. Y que el día que se quede sin argumentos, se le habrá convertido en su mejor colaboradora.",
        },
        {
          forma: "arte",
          texto:
            "Es exactamente lo que hoy llamaríamos convertir la crítica interna en instrumento en vez de en juez. Rilke lo formula en 1904 con una imagen doméstica: dele a la duda un trabajo concreto y dejará de rondar por la casa sin hacer nada y molestando.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Entre medias hay un consejo que muchos lectores agradecen más que ningún otro: no se compare. Le pide que no mida su vida por la de los demás ni por los plazos que le ponen, porque las cosas no son ni tan comprensibles ni tan expresables como se nos quiere hacer creer.",
        },
        {
          forma: "texto",
          texto:
            "La última carta es de diciembre de 1908, cuatro años después de la anterior. Rilke ya ha publicado los «Nuevos poemas» y ya no es un desconocido. Es breve, cálida y no contiene un solo consejo nuevo.",
        },
        {
          forma: "texto",
          texto:
            "Le dice que se alegra de que su vida tenga ahora una profesión firme y clara, y que precisamente las vidas que parecen más duras por fuera son las que mejor protegen por dentro lo solitario. Y ahí, sin ninguna ceremonia, se acaba la correspondencia.",
        },
      ],
    },

    {
      titulo: "El libro que hizo el otro",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La historia tendría que acabar ahí, y lo interesante es lo que pasó después. Kappus siguió en el ejército. Fue oficial en la Primera Guerra Mundial. Luego trabajó de periodista y escribió novelas de aventuras y guiones de cine. Poeta no llegó a ser.",
        },
        {
          forma: "texto",
          texto:
            "Rilke, en cambio, sí llegó a ser lo que había descrito. Escribió las «Elegías de Duino» y los «Sonetos a Orfeo» en unas pocas semanas de febrero de 1922, después de diez años atascado, en un torreón suizo llamado Muzot que le habían prestado.",
        },
        {
          forma: "texto",
          texto:
            "Diez años de bloqueo. Eso también hay que decirlo al leer las cartas: el hombre que escribía sobre la savia y la paciencia estuvo una década sin poder terminar su obra, y la terminó de golpe, en unos días, en una casa que no era suya.",
        },
        {
          forma: "texto",
          texto:
            "Murió el 29 de diciembre de 1926 en un sanatorio de Val-Mont, en Suiza. Tenía cincuenta y un años. La causa fue una leucemia que le habían diagnosticado muy tarde y de la que apenas habló con nadie.",
        },
        {
          forma: "arte",
          texto:
            "La leyenda dice que lo mató la espina de una rosa. Se pinchó, es cierto, cortando rosas para una visita, y la herida no cerró. Pero lo que lo mató fue la leucemia; la infección solo fue el último episodio de una enfermedad que ya lo tenía cogido.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Tres años después de su muerte, en 1929, Kappus reunió las diez cartas que había guardado durante veintiséis años y las publicó con un prólogo suyo. Las tituló «Cartas a un joven poeta». No han dejado de editarse desde entonces en ningún idioma.",
        },
        {
          forma: "clave",
          rotulo: "La obra de Kappus",
          frase: "El joven poeta no llegó a poeta. Su única obra maestra es un libro que no escribió: guardó, escogió y publicó las cartas de otro. Y es, con diferencia, lo mejor que hizo.",
        },
        {
          forma: "texto",
          texto:
            "En el prólogo dice algo que da la medida del hombre. Explica que sus propias cartas no importan y que publica solo las de Rilke porque, donde un grande y único habla, los pequeños debemos callar. Y se borra del libro a propósito.",
        },
        {
          forma: "texto",
          texto:
            "Por eso solo tenemos un lado. Nunca sabremos qué preguntó exactamente, ni cómo eran los poemas que mandó, ni qué sintió al leer que no eran todavía nada propio. Ese silencio es la mitad de la fuerza del libro.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí está el hallazgo de forma. Un manual de escritura envejece en veinte años. Diez cartas a un desconocido no envejecen, porque el que lee ocupa sin esfuerzo el hueco del destinatario. Es el mismo mecanismo que mantiene vivas las «Meditaciones» de Marco Aurelio.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, dónde falla, que en este libro conviene decirlo alto. El consejo de Rilke da por supuesto un tipo de vida que casi nadie puede pagarse: horas de silencio, viajes largos, temporadas en casas prestadas y ninguna obligación urgente por la mañana.",
        },
        {
          forma: "texto",
          texto:
            "Él vivió casi siempre de mecenas. La princesa Marie von Thurn und Taxis le prestó el castillo de Duino; otros le prestaron Muzot y las casas de Suecia. No tuvo un empleo estable en su vida adulta. La soledad que recomienda tuvo un precio, y lo pagaron otros.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una incoherencia mayor. Predica una atención absoluta a lo difícil y al mismo tiempo se fue de su matrimonio y dejó a su hija criándose con la familia de su mujer. Se puede admirar el texto sin confundirlo con una biografía ejemplar.",
        },
        {
          forma: "texto",
          texto:
            "También hay una parte que hoy chirría. Su idea de que el artista debe apartarse del mundo, no leer crítica y no meterse en discusiones públicas le ha servido de coartada a mucha gente para no leer nunca nada que la contradiga.",
        },
        {
          forma: "texto",
          texto:
            "Y una cosa práctica: no hay una sola indicación técnica en todo el libro. Nada sobre métrica, sobre corrección, sobre cómo se rehace un poema malo. Quien busque aprender a escribir tiene que ir a otro sitio; aquí solo le van a explicar por qué escribiría.",
        },
        {
          forma: "texto",
          texto:
            "Lo que casi todo el mundo cree y no es verdad: no es un libro sobre cómo escribir, aunque se venda en esa estantería. Rilke se negó desde la primera línea a hacer de maestro. La palabra que más repite en cinco años no es poesía: es paciencia.",
        },
        {
          forma: "texto",
          texto:
            "Segundo error corriente: internet está lleno de citas atribuidas a este libro que Rilke no escribió, o que están cortadas justo donde dejaban de ser cómodas. La más maltratada es la de vivir las preguntas, que casi siempre pierde su segunda mitad.",
        },
        {
          forma: "arte",
          texto:
            "Y el tercero: mucha gente lo lee como un libro suave. No lo es. Le dice a un chico de diecinueve años que nadie puede ayudarle, que la soledad no se cura, que el amor es la tarea más difícil que existe y que a lo mejor no debería escribir nunca.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Lo que queda, después de descontar todo eso, es una cosa rara y muy resistente: un hombre joven contestando en serio a otro más joven, sin venderle nada, durante cinco años, sobre un asunto que no tenía ninguna obligación de atender.",
        },
        {
          forma: "texto",
          texto:
            "Y esa es la parte que sirve de verdad. Kappus escribió a un desconocido preguntando si valía. La respuesta fue que esa pregunta no se contesta desde fuera. Cambió de pregunta, no llegó a poeta, y por el camino le sacó a otro las diez cartas que hoy leemos.",
        },
      ],
    },
  ],
};

export const HISTORIA_ARTE: Resumen = {
  id: "historia-arte",
  titulo: "La historia del arte",
  autor: "E. H. Gombrich",
  ano: 1950,
  gancho: "Empieza diciendo que el Arte no existe. Ocho millones de ejemplares después, sigue siendo la mejor primera frase de un libro de arte.",
  porQue:
    "Es el libro de arte más vendido de la historia y no es un catálogo: es una sola idea sostenida durante veintisiete capítulos.",
  partes: [
    {
      titulo: "No existe el Arte",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Londres, 1949. Un historiador vienés de cuarenta años recibe el encargo de escribir un libro de arte para adolescentes. El editor, Béla Horovitz, de Phaidon, le pide algo que un chaval de trece años pueda leer entero. Él acepta y lo escribe en unos meses.",
        },
        {
          forma: "texto",
          texto:
            "Se llamaba Ernst Gombrich, había nacido en Viena en 1909 y había salido de Austria en 1936 con un contrato en el Instituto Warburg de Londres. Se fue a tiempo. Su familia era judía y en Viena, tres años después, ya no había sitio para ellos.",
        },
        {
          forma: "texto",
          texto:
            "Durante la guerra no trabajó en historia del arte: trabajó para la BBC escuchando la radio alemana, seis años sentado con unos auriculares transcribiendo emisiones enemigas. Era un trabajo de oficina, aburridísimo y crucial, en un sótano lleno de exiliados que hablaban alemán.",
        },
        {
          forma: "clave",
          rotulo: "El día que lo oyó",
          frase: "En abril de 1945 Gombrich estaba de guardia cuando la radio alemana interrumpió la programación y puso el adagio de la Séptima de Bruckner. Supo antes que nadie lo que venía después: Hitler había muerto.",
        },
        {
          forma: "texto",
          texto:
            "Ese es el hombre que cuatro años después se sienta a explicar el arte occidental desde las cuevas hasta el presente. No es un profesor de sillón: es alguien que ha visto desaparecer su ciudad y que ha aprendido a escuchar con muchísima atención lo que dice la gente.",
        },
        {
          forma: "texto",
          texto:
            "El libro empieza con la frase que todo el mundo cita y casi nadie termina: no existe realmente el Arte. Tan solo hay artistas. Es la primera línea, va en la introducción y no es una provocación de escaparate: es literalmente la tesis del libro entero.",
        },
        {
          forma: "texto",
          texto:
            "Lo explica en seguida. El Arte con mayúscula, dice, es un fantasma que se ha convertido en un espantajo: sirve para que la gente se sienta ignorante delante de un cuadro y deje de mirarlo. Quitando la mayúscula queda lo que hay de verdad: hombres y mujeres resolviendo problemas concretos.",
        },
        {
          forma: "arte",
          texto:
            "Y da el ejemplo doméstico que lo aterriza: no hay nada malo en que a alguien le guste un cuadro porque le recuerda a algo suyo. El error empieza cuando esa preferencia se convierte en prejuicio y le impide mirar lo demás. Su enemigo no es el ignorante: es el que ya ha decidido.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "El libro tiene veintisiete capítulos y va en línea recta desde las pinturas de las cuevas hasta mediados del siglo XX. Está escrito sin una sola nota al pie y sin una sola palabra técnica que no se explique en el sitio donde aparece por primera vez.",
        },
        {
          forma: "texto",
          texto:
            "Gombrich puso una regla que ningún manual cumple: no hablar de ninguna obra que no estuviera reproducida en la página. Si no cabía la imagen, no entraba el texto. Prefirió dejar fuera a artistas importantes antes que soltar nombres que el lector no pudiera comprobar con los ojos.",
        },
        {
          forma: "texto",
          texto:
            "Eso cambia la lectura por completo. Un manual normal enumera. Este señala: mire esta mano, mire este pliegue, fíjese en que el pie está visto de frente. El lector no está aprendiendo una lista, está aprendiendo a mirar, que es un músculo distinto.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una segunda regla, la que le da su motor: cada obra se explica como respuesta a un problema que dejó abierto la anterior. No hay genios que caen del cielo. Hay talleres, encargos y una conversación de tres mil años en la que cada uno contesta al de antes.",
        },
        {
          forma: "clave",
          rotulo: "El método",
          frase: "La historia del arte no es un desfile de genios: es una cadena de problemas. Cada generación hereda una dificultad sin resolver y se pasa la vida buscándole la vuelta.",
        },
        {
          forma: "texto",
          texto:
            "Esa idea suena abstracta hasta que se ve funcionando. Un escultor griego no despierta un día con más talento que un egipcio. Hereda una manera de hacer piernas que no acaba de convencer a nadie y prueba otra. La siguiente generación hereda su solución y le encuentra el fallo.",
        },
        {
          forma: "texto",
          texto:
            "Gombrich desarrollaría eso diez años después en un libro más difícil, «Arte e ilusión», con una fórmula que se ha quedado: esquema y corrección. El artista no dibuja lo que ve. Parte de un esquema aprendido y lo va corrigiendo contra lo que ve. Nadie empieza de cero.",
        },
        {
          forma: "arte",
          texto:
            "El ejemplo que usa es de manual: los grabados antiguos de rinocerontes copian todos al de Durero, incluidas las escamas que el animal no tiene. Durante siglos, los que dibujaban un rinoceronte estaban dibujando el rinoceronte de Durero corregido un poco.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Con esa herramienta el libro deja de ser una lista de estilos. Gótico, Renacimiento, Barroco dejan de ser etiquetas de examen y pasan a ser lo que fueron: soluciones distintas a la pregunta de cómo se pone el mundo en una superficie plana sin que parezca mentira.",
        },
        {
          forma: "texto",
          texto:
            "El tono es la otra mitad del éxito. Gombrich escribe como quien acompaña a alguien por un museo hablando bajito. Nunca dice esta obra es sublime. Dice fíjese en lo difícil que era esto y en lo bien que lo resolvió, y el lector siente que lo está viendo por su cuenta.",
        },
        {
          forma: "texto",
          texto:
            "Y no esconde sus gustos. Cuando algo no le convence lo dice, y cuando una época le interesa poco se le nota. Un manual neutro no existe, y él prefiere que se le vea la mano a fingir una objetividad que no tiene.",
        },
        {
          forma: "texto",
          texto:
            "El libro salió en 1950, se tituló en inglés «La historia del arte» con artículo determinado, y a Gombrich siempre le pareció un título demasiado grande. Decía que se lo puso el editor. Él lo habría llamado, como mucho, una historia del arte contada a un chico listo.",
        },
      ],
    },

    {
      titulo: "Lo que se sabe y lo que se ve",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El primer gran hallazgo del libro está en Egipto, y Gombrich lo explica con una pregunta que descoloca: ¿por qué las figuras egipcias están tan raras? Cabeza de perfil, ojo de frente, hombros de frente, piernas de perfil. Todas iguales durante tres mil años.",
        },
        {
          forma: "texto",
          texto:
            "La respuesta fácil es que no sabían dibujar. La de Gombrich es la contraria: sabían perfectamente, y estaban haciendo otra cosa. No pintaban lo que veían. Pintaban lo que sabían, y de cada parte del cuerpo elegían la vista que más información daba.",
        },
        {
          forma: "texto",
          texto:
            "Un ojo se reconoce mejor de frente. Unos hombros, de frente. Una nariz y unos pies, de perfil. El resultado es un cuerpo imposible y clarísimo: una especie de ficha técnica de un ser humano, montada con las mejores vistas de cada pieza.",
        },
        {
          forma: "clave",
          rotulo: "La regla egipcia",
          frase: "El arte egipcio no busca parecerse a lo que se ve desde un sitio. Busca ser completo. Nada puede quedar tapado, porque lo tapado, para el más allá, no existe.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí está lo que lo explica todo: aquellas figuras no eran cuadros para mirar. Estaban en tumbas cerradas que nadie iba a visitar. Servían para acompañar al muerto, y un muerto con medio pie pintado tendría medio pie. La utilidad manda sobre la apariencia.",
        },
        {
          forma: "texto",
          texto:
            "Gombrich añade el dato que remata el argumento: hubo una excepción. Bajo el faraón Akenatón, hacia 1350 antes de Cristo, el estilo se soltó de golpe. Aparecen posturas relajadas, cuerpos raros, el rey besando a su hija. Duró lo que duró él y luego se volvió a la norma.",
        },
        {
          forma: "arte",
          texto:
            "Eso demuestra que no era incapacidad. Era una decisión colectiva sostenida durante milenios, que un solo hombre pudo cambiar y que se restauró en cuanto murió. La historia del arte, dice Gombrich, está llena de estas cosas y casi ninguna es cuestión de talento.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Con esa base montada, el libro llega al momento que él considera el más importante de todos, y lo cuenta con una precisión de detective. Ocurre en Grecia, hacia el año 500 antes de Cristo, y se puede ver en un solo objeto.",
        },
        {
          forma: "texto",
          texto:
            "Un pintor de vasijas está dibujando a un guerrero de perfil, como se ha hecho siempre. Y en vez de poner el pie hacia un lado, lo pinta de frente: dos dedos y un óvalo. Un pie escorzado. Es un dibujo torpe y es la primera vez que alguien pinta lo que ve en vez de lo que sabe.",
        },
        {
          forma: "texto",
          texto:
            "Gombrich se detiene ahí más que en cualquier catedral. Ese pie mal dibujado es, para él, la puerta por la que entra el arte occidental entero: la decisión de renunciar a la información completa a cambio de un punto de vista concreto, el de alguien que está mirando desde un sitio.",
        },
        {
          forma: "clave",
          rotulo: "El escorzo",
          frase: "Pintar un pie de frente significa aceptar que se pierde información a cambio de verdad. Ese cambio de trato es el que separa a Egipto de Grecia y a Grecia de casi todo lo demás.",
        },
        {
          forma: "texto",
          texto:
            "A partir de ahí los griegos se lanzan. En un siglo pasan de figuras rígidas y sonrientes a cuerpos que apoyan el peso en una pierna y descansan la otra. Ese gesto mínimo, el contraposto, hace que una piedra parezca que respira, y se inventó por prueba y error en un par de generaciones.",
        },
        {
          forma: "texto",
          texto:
            "Gombrich pone dos estatuas juntas para que se vea, y funciona: un kurós arcaico y un joven clásico. La misma postura, cincuenta años de diferencia, y el segundo parece que va a echar a andar. No hay nada místico en el medio; hay talleres corrigiendo a otros talleres.",
        },
        {
          forma: "texto",
          texto:
            "Después llega Roma, que él trata sin desprecio y sin entusiasmo: copiaron muchísimo, inventaron el retrato realista y construyeron edificios que aún están de pie. El Panteón, dice, es una idea que ningún griego había tenido: no una fachada, sino un espacio por dentro.",
        },
        {
          forma: "texto",
          texto:
            "Y entonces viene el capítulo que más sorprende a los lectores, porque va hacia atrás. Con el cristianismo, el arte occidental deja de buscar el parecido y vuelve a lo egipcio: figuras planas, frontales, sin sombra, sin profundidad. Durante mil años.",
        },
        {
          forma: "texto",
          texto:
            "La explicación de Gombrich es la misma de siempre, aplicada al revés: cambia el trabajo, cambia la solución. Un mosaico bizantino no está para que parezca una persona. Está para que un analfabeto entienda quién es y qué hizo, en una iglesia oscura, desde treinta metros.",
        },
        {
          forma: "arte",
          texto:
            "Eso desactiva de un plumazo la idea de decadencia, que es lo que enseñaban los manuales anteriores. La Edad Media no perdió la técnica: dejó de necesitarla y desarrolló otra. Cuando el encargo cambió, la habilidad volvió en dos generaciones.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "El libro dedica capítulos largos y muy buenos a las catedrales, y ahí Gombrich hace algo poco frecuente: explica la arquitectura como ingeniería. El arco apuntado y el arbotante no son estilo. Son la solución a un problema de peso, y la altura de las naves es su consecuencia.",
        },
        {
          forma: "texto",
          texto:
            "Y hace notar quién las hizo: gremios, canteros, talleres familiares, cientos de personas cuyos nombres no se conservan. El anonimato medieval no es un misterio romántico. Es que aquello se parecía más a una obra pública que a un acto de expresión personal.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale, en el capítulo siguiente, el hombre que rompe la cadena. Un pintor florentino que hacia 1300 empieza a poner sombras en las caras y a colocar a la gente en un espacio con suelo. Se llamaba Giotto, y con él empieza la parte que todo el mundo cree conocer.",
        },
      ],
    },

    {
      titulo: "El problema que deja el anterior",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Giotto pinta en Padua, hacia 1305, una capilla entera. En una escena, dos figuras se abrazan y se miran; en otra, un personaje está de espaldas al espectador, tapando parte de la acción. Eso último no se había hecho en mil años y es una revolución silenciosa.",
        },
        {
          forma: "texto",
          texto:
            "Poner a alguien de espaldas significa aceptar que el cuadro es una ventana y no un cartel. Si es una ventana, hay cosas que no se ven porque hay alguien delante. Gombrich vuelve a su idea: Giotto no es más listo, es que ha cambiado el trato con el que mira.",
        },
        {
          forma: "texto",
          texto:
            "El problema que deja abierto es evidente en cuanto se enuncia: si esto es una ventana, ¿cómo se dibuja la profundidad para que sea exacta y no aproximada? Ese problema tarda cien años en resolverse y lo resuelve un arquitecto, no un pintor.",
        },
        {
          forma: "clave",
          rotulo: "1420, Florencia",
          frase: "Brunelleschi demuestra la perspectiva con un experimento: una tabla pintada del baptisterio, un agujero, un espejo. Quien mira por el agujero no distingue el cuadro del edificio real.",
        },
        {
          forma: "texto",
          texto:
            "Es el momento en que el arte occidental se vuelve, durante quinientos años, un asunto de geometría. Un punto de fuga, unas líneas que convergen y una regla que cualquiera puede aprender. Gombrich subraya que fue un descubrimiento técnico, con fecha, autor y demostración pública.",
        },
        {
          forma: "texto",
          texto:
            "El primero que lo usa en serio en pintura es Masaccio, en una capilla de Florencia, y el efecto sobre sus contemporáneos fue de asombro físico: la pared parecía que se hundía. Murió a los veintiséis años y dejó a toda una generación con la herramienta en la mano.",
        },
        {
          forma: "texto",
          texto:
            "Al mismo tiempo, al norte, otros están resolviendo un problema distinto sin enterarse de la perspectiva. En Flandes, Jan van Eyck perfecciona la pintura al óleo y consigue algo que ningún italiano tenía: el brillo de un collar, el pelo de un perro, la luz en un espejo convexo.",
        },
        {
          forma: "arte",
          texto:
            "Gombrich pone los dos caminos uno al lado del otro y no los jerarquiza. Italia resuelve el espacio con matemáticas; Flandes resuelve la superficie con paciencia y con una técnica nueva. Son dos respuestas a preguntas distintas, y durante un siglo ninguna de las dos sabe de la otra.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "El siglo XVI es donde el lector espera fuegos artificiales y Gombrich baja el tono a propósito. A Leonardo, Miguel Ángel y Rafael los trata como a artesanos con problemas técnicos muy concretos, no como a semidioses, y el efecto es que se entienden mejor.",
        },
        {
          forma: "texto",
          texto:
            "De Leonardo destaca una cosa por encima de todo: el sfumato. Y lo explica con una utilidad rara. Dejar los contornos difuminados no es un truco de belleza; es dejarle al ojo del que mira una parte del trabajo. Por eso la Gioconda parece cambiar de expresión: la termina el espectador.",
        },
        {
          forma: "texto",
          texto:
            "De Miguel Ángel cuenta la Capilla Sixtina como lo que fue: un encargo que no quería, cuatro años de andamio, un hombre que se consideraba escultor pintando de espaldas y quejándose por carta del cuello. La grandeza sale de ahí, no de la inspiración.",
        },
        {
          forma: "texto",
          texto:
            "Y llega el problema siguiente, que es el más divertido del libro: cuando ya está todo resuelto, ¿qué hace la generación de después? La respuesta fue romperlo a propósito. Cuellos largos, colores imposibles, composiciones descentradas. Se llamó manierismo y fue el primer arte que juega contra la regla.",
        },
        {
          forma: "texto",
          texto:
            "El Barroco lo cuenta como teatro, con Caravaggio de protagonista. Un foco duro, un fondo negro, unos pies sucios en primer plano. Sus clientes se escandalizaban de que los santos parecieran gente del barrio, y de eso exactamente iba el asunto.",
        },
        {
          forma: "clave",
          rotulo: "Velázquez",
          frase: "Gombrich, que era vienés, dedica a «Las meninas» una de sus mejores páginas: un cuadro sobre el acto de pintar, con el pintor dentro, el rey fuera y el espectador ocupando el sitio del rey.",
        },
        {
          forma: "texto",
          texto:
            "Y hace notar el detalle técnico que lo hace moderno: de cerca son manchas. Las mangas, los reflejos, el pelo de la infanta son toques sueltos que no describen nada. Solo a tres metros se convierten en tela y en luz. Doscientos años antes de los impresionistas.",
        },
        {
          forma: "texto",
          texto:
            "El libro sigue con Rembrandt, y ahí Gombrich hace algo que no hace con nadie más: lo sigue envejeciendo. Pone sus autorretratos en orden, del joven presumido con sombrero al viejo hinchado y arruinado, y deja que la secuencia hable sola.",
        },
        {
          forma: "arte",
          texto:
            "Rembrandt se declaró en bancarrota en 1656 y le subastaron la casa y la colección. Pintó los mejores cuadros de su vida después de eso, cuando ya casi nadie le encargaba nada. Gombrich lo cuenta sin épica y el efecto es demoledor.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "El siglo XVIII lo despacha con cierta frialdad —le interesan más los ingleses que los franceses— y entra en el XIX con un cambio que le parece más importante que cualquier estilo: los artistas dejan de trabajar por encargo y empiezan a pintar sin saber quién lo comprará.",
        },
        {
          forma: "texto",
          texto:
            "Eso lo cambia todo, y es el hilo del capítulo siguiente. Cuando desaparece el cliente que dice qué quiere, aparece por primera vez la figura del artista incomprendido, y también la del cuadro que nadie ha pedido y que puede no gustar a nadie.",
        },
        {
          forma: "texto",
          texto:
            "Gombrich no lo celebra ni lo lamenta. Lo trata como lo que es en su método: un problema nuevo. Durante cinco mil años el arte había tenido un encargo detrás. A partir de 1850, muchas veces no. Todo lo que viene después es la respuesta a esa situación.",
        },
      ],
    },

    {
      titulo: "Quién pagaba",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "París, 1863. El jurado del Salón oficial rechaza más de dos mil cuadros. Hay tanto escándalo que Napoleón III ordena montar una exposición aparte con los rechazados. La llaman el Salón de los Rechazados y va muchísima gente, sobre todo a reírse.",
        },
        {
          forma: "texto",
          texto:
            "El cuadro del que más se ríen es «El almuerzo sobre la hierba», de Manet: una mujer desnuda comiendo en el campo con dos señores vestidos de calle. La gente no se escandaliza por el desnudo, que estaba en todos los museos, sino porque los hombres van vestidos de 1863.",
        },
        {
          forma: "texto",
          texto:
            "Gombrich saca de ahí una lección que vale para todo el arte moderno: lo que ofende casi nunca es el tema, es el contexto. Una Venus desnuda era aceptable; una vecina desnuda al lado de dos hombres con chaqueta convertía al espectador en testigo de algo, y eso no se perdonaba.",
        },
        {
          forma: "clave",
          rotulo: "El cambio de siglo",
          frase: "Hasta 1800 casi todo el arte se hacía por encargo: se sabía quién pagaba, para qué sitio y con qué tamaño. Después de 1850, muchos cuadros se pintan sin comprador y sin destino.",
        },
        {
          forma: "texto",
          texto:
            "El libro se toma en serio esa parte económica, que la mayoría de manuales se salta. Explica los gremios medievales, el sistema de aprendizaje, los contratos donde se fijaba cuántos gramos de oro y de azul de lapislázuli llevaba un retablo, porque el azul costaba más que el pintor.",
        },
        {
          forma: "texto",
          texto:
            "Y explica cómo esa relación fue cambiando de manos: primero la Iglesia, luego los príncipes, luego los banqueros, luego los ayuntamientos holandeses, luego los burgueses que compraban paisajes para el salón, y por fin el marchante, que compra para revender.",
        },
        {
          forma: "arte",
          texto:
            "Ese recorrido explica más que cualquier lista de estilos. Los cuadros holandeses del XVII son pequeños porque se colgaban en casas pequeñas. Los retablos son enormes porque estaban a veinte metros. El formato lo decide el sitio, y el sitio lo decide quién paga.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Con los impresionistas, Gombrich vuelve a su método: no los presenta como rebeldes, sino como gente resolviendo un problema técnico. Si se quiere pintar al aire libre y deprisa, no se puede trabajar por capas durante meses. Hay que poner el color directo y aceptar la mancha.",
        },
        {
          forma: "texto",
          texto:
            "Y añade dos cosas materiales que casi nadie cuenta y que lo hicieron posible: el tubo de pintura metálico, que permitía sacar el óleo de casa, y el ferrocarril, que llevaba a un pintor de París al campo y de vuelta en el mismo día.",
        },
        {
          forma: "texto",
          texto:
            "El público tardó veinte años en aceptarlos y él no lo cuenta con condescendencia. Explica por qué chocaba: un ojo educado en los contornos nítidos veía aquello sencillamente inacabado, como hoy nos parecería inacabado un edificio sin fachada.",
        },
        {
          forma: "texto",
          texto:
            "Después vienen los que él llama los tres solitarios, y es de lo mejor del libro: Cézanne, Van Gogh y Gauguin, tres hombres que no se llevaban bien y que abrieron los tres caminos por donde iría todo el siglo XX.",
        },
        {
          forma: "texto",
          texto:
            "Cézanne quería el orden: reconstruir con manchas de color la solidez que los impresionistas habían disuelto. Se pasó años delante de la misma montaña. De ahí sale el cubismo, es decir, Picasso y Braque descomponiendo un objeto en planos.",
        },
        {
          forma: "texto",
          texto:
            "Van Gogh quería la expresión: que la pincelada llevara dentro la emoción del que pinta. De ahí sale el expresionismo alemán. Gauguin quería la simplicidad y se fue a buscarla lejos. De ahí sale buena parte de la obsesión moderna con lo primitivo, con todo lo que eso trae.",
        },
        {
          forma: "clave",
          rotulo: "Tres puertas",
          frase: "Estructura, expresión y simplificación. Gombrich reduce el arte del siglo XX a tres problemas heredados de tres hombres que murieron sin venderlo casi nada.",
        },
        {
          forma: "texto",
          texto:
            "Y aquí se nota el límite del propio libro, que él nunca ocultó. Los capítulos sobre arte del siglo XX son los más cortos, los más prudentes y los menos entusiastas. Gombrich escribía en 1950 sobre gente que seguía viva y trabajando, y se le nota incómodo.",
        },
        {
          forma: "texto",
          texto:
            "En ediciones posteriores fue añadiendo material —llegó a haber dieciséis ediciones y él siguió revisándolas hasta los noventa años— pero la desproporción sigue ahí: cinco mil años en veinticinco capítulos y el siglo más agitado en dos.",
        },
        {
          forma: "arte",
          texto:
            "Su defensa era honesta: decía que no se puede escribir historia de lo que aún está pasando, porque falta lo único que la hace posible, que es saber qué vino después. Un historiador que juzga el presente, decía, está haciendo crítica, no historia.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "También rechazó siempre la idea de progreso. Que Rafael venga después de Giotto no significa que sea mejor, igual que un rascacielos no es mejor que una catedral. Cada uno resolvió lo que tenía delante. Esa negativa es lo que salva al libro de ser una escalera hacia el presente.",
        },
        {
          forma: "texto",
          texto:
            "El resultado es raro: un libro escrito para adolescentes en 1950, que no presume, que no adorna y que sigue siendo el mejor sitio por donde empezar. Nadie ha escrito nada que lo sustituya, y no por falta de intentos.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí ha aparecido son libros que le contestan. Y ahí está la conversación más interesante que ha tenido este libro en setenta años, que es la que va de todo lo que se quedó fuera de sus páginas.",
        },
      ],
    },

    {
      titulo: "Ocho millones de ejemplares",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El dato primero: «La historia del arte» ha vendido más de ocho millones de ejemplares y se ha traducido a más de treinta idiomas. Es, con diferencia, el libro de arte más vendido que existe, y sigue siendo el manual con el que empieza medio mundo.",
        },
        {
          forma: "texto",
          texto:
            "Gombrich vivió lo suficiente para verlo. Murió en Londres en 2001, con noventa y dos años, después de haber revisado personalmente dieciséis ediciones y de haber contestado, según sus editores, prácticamente todas las cartas que le mandaban los lectores.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, dónde falla, que falla en algo grande y hay que decirlo sin rodeos. En la primera edición no aparecía ni una sola mujer artista. Ni una, en quinientas páginas y cinco mil años. En ediciones posteriores entró alguna mención, pero la estructura del libro no cambió.",
        },
        {
          forma: "clave",
          rotulo: "El agujero",
          frase: "Artemisia Gentileschi, Sofonisba Anguissola, Judith Leyster, Berthe Morisot, Käthe Kollwitz. Ninguna estaba. No es un descuido pequeño: es media historia.",
        },
        {
          forma: "texto",
          texto:
            "Su defensa, cuando se lo preguntaron en los años noventa, fue que él no escribía sobre artistas por su biografía sino por su lugar en la cadena de problemas, y que si alguna quedaba fuera era por su criterio de importancia, no por su sexo. La respuesta convenció a poca gente.",
        },
        {
          forma: "texto",
          texto:
            "Porque el criterio de importancia no es neutro: se hereda de quién pudo entrar en un taller, quién pudo estudiar del natural —a las mujeres se les prohibió dibujar modelos desnudos hasta el siglo XIX— y de quién decidió después qué se colgaba en los museos.",
        },
        {
          forma: "texto",
          texto:
            "En 2022 Katy Hessel publicó «Historia del arte sin hombres» precisamente como respuesta a este libro. No lo niega: lo completa. Es una conversación de setenta años entre dos volúmenes, y las dos partes se leen mejor la una con la otra.",
        },
        {
          forma: "texto",
          texto:
            "El segundo agujero es geográfico. El arte chino, el japonés, el persa, el africano y el precolombino ocupan un capítulo temprano y luego desaparecen. A partir del Renacimiento, el libro es exclusivamente europeo y no vuelve a mirar fuera salvo de pasada.",
        },
        {
          forma: "arte",
          texto:
            "Su explicación también era coherente y también es insuficiente: dijo que solo podía contar la tradición en la que se había formado, y que un capítulo turístico sobre China sería peor que ninguno. Es un argumento decente que deja el título, «La historia del arte», bastante grande.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "El tercer defecto es el que él mismo admitía: la cadena de problemas funciona de maravilla hasta 1900 y bastante peor después. Cuando el problema deja de ser cómo representar el mundo, el método pierde agarre, y se nota en la prudencia de los últimos capítulos.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un cuarto, más sutil. Al contarlo todo como una conversación de soluciones, el libro deja fuera casi por completo el dinero, el poder y la política. Los papas, los banqueros y los imperios aparecen como clientes, no como parte del contenido de las obras.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, lo que casi todo el mundo cree y no es verdad. No es una enciclopedia. La gente lo compra para consultarlo y no funciona así: no hay nada que buscar por orden alfabético. Es un solo argumento continuo, y leído a saltos se pierde justo lo que lo hace valioso.",
        },
        {
          forma: "texto",
          texto:
            "Segundo malentendido: la frase de que el Arte no existe se cita como una boutade elegante para empezar conferencias. No lo es. Es una instrucción de uso: quítese la mayúscula, deje de sentirse examinado y mire el cuadro que tiene delante como quien mira un problema resuelto.",
        },
        {
          forma: "texto",
          texto:
            "Y el tercero, el más extendido: mucha gente cree que es un libro difícil porque es gordo y porque va de arte. Está escrito para lectores de trece años, con vocabulario corriente y sin una sola cita erudita. La dificultad está en la materia, nunca en la prosa.",
        },
        {
          forma: "texto",
          texto:
            "Lo que queda, después de descontar los agujeros, sigue siendo enorme. Es el libro que ha enseñado a mirar a más gente que ningún otro, y lo ha hecho con un procedimiento que se puede aplicar a cualquier cosa: preguntarse siempre qué problema estaba resolviendo el que hizo esto.",
        },
        {
          forma: "arte",
          texto:
            "Esa pregunta funciona igual delante de un mosaico bizantino, de una silla, de una portada de disco o de una aplicación de móvil. Gombrich no enseñó arte: enseñó que detrás de cada forma hay alguien con una dificultad concreta y unos medios limitados.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Él lo resumió mejor que nadie en el prólogo de una de las últimas ediciones, cuando ya tenía noventa años. Escribió que el libro pretendía una cosa modesta: ordenar un poco el terreno para que el lector pudiera después perderse en él por su cuenta.",
        },
        {
          forma: "texto",
          texto:
            "Y avisaba de que ningún libro sustituye al museo. Decía que las reproducciones son notas al pie de las obras, no las obras, y que un cuadro se ve una sola vez de verdad: la primera, cuando se está delante y todavía no se sabe qué se está mirando.",
        },
        {
          forma: "texto",
          texto:
            "El detalle final es de las cosas más raras que le han pasado a un libro. Gombrich escribió para adolescentes un texto que acabó siendo obligatorio en universidades de medio mundo. Nunca cambió el tono para ponerse a la altura de ese público nuevo.",
        },
        {
          forma: "texto",
          texto:
            "Y probablemente esa sea la razón de las ocho millones de copias. Es el único manual importante de su campo que no da por supuesto que el lector ya sabe algo, y que en ningún momento de sus quinientas páginas le hace sentir tonto por no saberlo.",
        },
      ],
    },
  ],
};
