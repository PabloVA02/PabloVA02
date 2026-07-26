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

export const ARTE_SIN_HOMBRES: Resumen = {
  id: "arte-sin-hombres",
  titulo: "Historia del arte sin hombres",
  autor: "Katy Hessel",
  ano: 2022,
  gancho: "En una feria de arte de Londres con miles de obras no había ni una sola de una mujer. La que se dio cuenta tenía veintiún años y decidió escribir el otro libro.",
  porQue:
    "Es la respuesta directa al manual de Gombrich, y no va de opinar: va de enseñar los mecanismos concretos por los que media historia del arte desapareció.",
  partes: [
    {
      titulo: "Una feria sin una sola mujer",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Londres, 2015. Una estudiante de historia del arte de veintiún años recorre una feria comercial con cientos de galerías y miles de obras. A media tarde cae en la cuenta de algo que lleva rato rondándole: no ha visto ni una sola pieza firmada por una mujer.",
        },
        {
          forma: "texto",
          texto:
            "Se llamaba Katy Hessel. No era una activista ni una veterana del sector: estaba terminando la carrera. Esa misma semana abrió una cuenta de Instagram donde publicaba cada día una artista, con su nombre, su fecha y una obra. La llamó las grandes artistas mujeres.",
        },
        {
          forma: "texto",
          texto:
            "El nombre era una respuesta a un artículo célebre de 1971, en el que la historiadora Linda Nochlin se preguntaba por qué no ha habido grandes mujeres artistas. Nochlin no contestaba con nombres: contestaba desmontando la pregunta y señalando las instituciones que la hacían posible.",
        },
        {
          forma: "clave",
          rotulo: "La respuesta de Nochlin",
          frase: "No faltó talento. Faltó acceso: a los talleres, a las academias, a los encargos y, sobre todo, a la clase de dibujo del natural. Sin eso no se podía pintar una figura, y sin figura no había arte mayor.",
        },
        {
          forma: "texto",
          texto:
            "Hessel se pasó siete años acumulando material y en 2022 publicó el libro. Va del Renacimiento a hoy, unos quinientos años, con quinientas páginas y sin una sola obra de hombre. El título es deliberadamente provocador y ella lo explica en el prólogo con toda claridad.",
        },
        {
          forma: "texto",
          texto:
            "No propone borrar a nadie. Propone hacer el experimento contrario al que se ha hecho durante siglos: escribir el relato completo dejando fuera a los hombres, para que se vea que hay relato. La ausencia, dice, no era de artistas: era de páginas.",
        },
        {
          forma: "arte",
          texto:
            "Y el objetivo declarado es concreto: que dentro de veinte años este libro no haga falta, porque los manuales generales las incluyan. Hessel escribe una corrección, no un canon alternativo, y avisa desde la primera página de que aspira a quedarse obsoleta.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "El libro que tiene en el punto de mira, aunque lo trata con respeto, es el de Gombrich. «La historia del arte», el manual más vendido de todos los tiempos, no incluía en su primera edición ni una sola mujer artista. Ni una, en quinientas páginas y cinco mil años.",
        },
        {
          forma: "texto",
          texto:
            "Hessel no lo presenta como una maldad personal de Gombrich. Lo presenta como el resultado final de una cadena, y esa cadena es lo que se dedica a documentar: cómo se llega a que un historiador honesto escriba un manual completo sin encontrarse a nadie por el camino.",
        },
        {
          forma: "texto",
          texto:
            "Los eslabones son concretos y se pueden nombrar uno a uno. El primero: los gremios medievales y los talleres. Se entraba de aprendiz a los diez o doce años, viviendo en casa del maestro. A una niña de familia respetable eso no se le permitía.",
        },
        {
          forma: "texto",
          texto:
            "Por eso casi todas las pintoras anteriores al siglo XIX son hijas de pintores. Es la única puerta que quedaba: aprender en el taller del padre, donde nadie tenía que autorizar nada. Ese detalle biográfico se repite tanto que deja de ser una casualidad.",
        },
        {
          forma: "texto",
          texto:
            "El segundo eslabón es la clase de dibujo del natural. En la jerarquía académica, la pintura de historia —escenas religiosas, mitológicas, batallas— era el género más alto, y requería dominar el cuerpo humano desnudo. Se aprendía dibujando modelos vivos en la academia.",
        },
        {
          forma: "clave",
          rotulo: "La puerta cerrada",
          frase: "A las mujeres se les prohibió el dibujo del natural durante siglos por decoro. Sin eso quedaban confinadas a los géneros menores: retrato, bodegón, flores. Y luego se les reprochaba pintar solo flores.",
        },
        {
          forma: "texto",
          texto:
            "La Royal Academy de Londres no admitió mujeres en las clases del natural hasta 1893, y aun entonces con el modelo parcialmente cubierto. En París, la École des Beaux-Arts no admitió mujeres hasta 1897. Son fechas, no impresiones.",
        },
        {
          forma: "texto",
          texto:
            "El tercer eslabón es la atribución. Cuando una obra buena aparecía sin firma clara, el mercado tendía a atribuirla a un hombre conocido, porque valía más. Y en algunos casos documentados alguien directamente borró una firma y pintó otra encima.",
        },
        {
          forma: "arte",
          texto:
            "El cuarto es el más lento y el más eficaz: el museo. Lo que no se compra no se expone; lo que no se expone no entra en los manuales; lo que no está en los manuales no se estudia; y lo que no se estudia no se compra. El círculo se cierra sin que nadie tenga que decidir nada.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Hessel aporta la cifra que mide el resultado. Un estudio publicado en 2019 sobre las colecciones de dieciocho grandes museos estadounidenses encontró que el ochenta y siete por ciento de las obras eran de artistas hombres y el ochenta y cinco por ciento, de artistas blancos.",
        },
        {
          forma: "texto",
          texto:
            "Con ese marco montado, el libro se pone a contar. Y lo hace en orden cronológico normal, como un manual cualquiera, empezando por una ciudad italiana del siglo XVI donde una familia noble tomó una decisión rara: educar a sus cinco hijas como si fueran a ser algo.",
        },
        {
          forma: "texto",
          texto:
            "La mayor de aquellas hermanas acabó siendo pintora de corte de Felipe II en Madrid, y vivió noventa y tres años. Se llamaba Sofonisba Anguissola y es, cronológicamente, la primera protagonista de esta historia.",
        },
        {
          forma: "texto",
          texto:
            "Pero la escena con la que arranca de verdad el capítulo siguiente no es un taller ni un palacio. Es una sala de un tribunal de Roma, en 1612, donde a una pintora de diecinueve años le están apretando los dedos con cuerdas mientras declara.",
        },
      ],
    },

    {
      titulo: "El juicio de Artemisia",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Roma, 1612. Artemisia Gentileschi tiene diecinueve años y declara ante un tribunal. Ha denunciado que Agostino Tassi, el pintor al que su padre había contratado para enseñarle perspectiva, la violó en la casa familiar el año anterior. El juicio dura siete meses.",
        },
        {
          forma: "texto",
          texto:
            "Durante su testimonio le aplican la sibila: unas cuerdas que se van apretando alrededor de los dedos. No es un castigo. Es el procedimiento habitual para comprobar si un testigo dice la verdad, bajo la lógica de que el dolor impide mentir. Se lo aplican a ella, no al acusado.",
        },
        {
          forma: "texto",
          texto:
            "Las actas del juicio se conservan y se pueden leer. Ella repite mientras le aprietan los dedos que es verdad, es verdad, es verdad. Era pintora: la tortura se le aplicaba precisamente en la herramienta de su oficio, y todos los presentes lo sabían.",
        },
        {
          forma: "clave",
          rotulo: "El final del juicio",
          frase: "Tassi fue condenado y la pena no se llegó a ejecutar. Siguió trabajando en Roma con encargos importantes. Artemisia se casó a los pocos días y se marchó a Florencia.",
        },
        {
          forma: "texto",
          texto:
            "Hessel avisa aquí de una trampa de lectura, y es de las cosas más útiles del libro. Durante décadas la obra de Gentileschi se ha explicado exclusivamente como venganza biográfica: sus Judith degollando a Holofernes serían la violación pintada. Esa lectura la reduce a su trauma.",
        },
        {
          forma: "texto",
          texto:
            "Porque lo que hay en esos cuadros, mirados como se mira a cualquier pintor, es una solución técnica de primer nivel. La composición es de una violencia física real: las dos mujeres empujan con el peso del cuerpo, se remangan, sujetan. No posan.",
        },
        {
          forma: "arte",
          texto:
            "Hessel compara su Judith con la de Caravaggio, que ella conocía. En la de él, Judith aparta la cara y corta con el brazo estirado, como quien no quiere mancharse. En la de Artemisia hay dos mujeres haciendo un trabajo pesado, con la sangre saltando en arcos hacia la sábana.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Su carrera fue notable con criterios de la época: en 1616 se convirtió en la primera mujer admitida en la Academia del Dibujo de Florencia. Trabajó para los Médici, viajó a Venecia, a Nápoles y a Londres, y firmó cartas negociando precios como cualquier maestro.",
        },
        {
          forma: "texto",
          texto:
            "Antes que ella está Sofonisba Anguissola, nacida en Cremona hacia 1532, que llegó a ser dama de compañía y pintora de la corte de Felipe II en Madrid. Miguel Ángel, ya anciano, le mandó dibujos para que los corrigiera y le comentó el trabajo por carta.",
        },
        {
          forma: "texto",
          texto:
            "Anguissola vivió noventa y tres años. En 1624, cuando ya estaba casi ciega, el joven Van Dyck fue a visitarla a Palermo y le hizo un retrato. Anotó en su cuaderno que aquella anciana le había dado más consejos útiles sobre pintura que cualquier maestro que hubiera conocido.",
        },
        {
          forma: "texto",
          texto:
            "Y está Lavinia Fontana, de Bolonia, que Hessel destaca por una razón económica: fue probablemente la primera mujer que mantuvo a su familia con su taller de pintura. Tuvo once hijos y su marido, también pintor, dejó de pintar para gestionarle los encargos.",
        },
        {
          forma: "texto",
          texto:
            "El caso que mejor demuestra el mecanismo de la desaparición está en Holanda. Judith Leyster fue una pintora de Haarlem del siglo XVII, admitida en el gremio de San Lucas en 1633, con taller propio y aprendices a su cargo.",
        },
        {
          forma: "clave",
          rotulo: "La firma tapada",
          frase: "En 1893 el Louvre compró un cuadro como obra de Frans Hals. Al restaurarlo apareció debajo el monograma de Judith Leyster. Sus obras llevaban siglos vendiéndose como de él.",
        },
        {
          forma: "texto",
          texto:
            "El descubrimiento acabó en un pleito y en un escándalo en el mercado del arte. Y obligó a reatribuir varias obras. Hessel señala lo que eso implica: no es que Leyster fuera desconocida, es que su nombre valía menos, así que alguien lo sustituyó por otro que valía más.",
        },
        {
          forma: "texto",
          texto:
            "En el siglo XVIII aparece Élisabeth Vigée Le Brun, retratista de María Antonieta, que pintó más de seiscientos retratos y huyó de Francia la noche del 6 de octubre de 1789 disfrazada, con su hija de nueve años y en una diligencia pública.",
        },
        {
          forma: "texto",
          texto:
            "Pasó doce años en el exilio trabajando en Nápoles, Viena, San Petersburgo y Berlín, y se hizo rica por su cuenta. Sus memorias, escritas de mayor, son una de las mejores fuentes que hay sobre cómo funcionaba el mercado del retrato en la Europa del XVIII.",
        },
        {
          forma: "arte",
          texto:
            "Hessel destaca de ella un cuadro concreto: un autorretrato de 1787 con su hija en brazos, en el que aparece sonriendo con los dientes visibles. En el Salón de París aquello escandalizó. Ninguna dama retratada enseñaba los dientes, y la crítica se lo afeó por escrito.",
          arte: "lectora",
        },
        {
          forma: "texto",
          texto:
            "Y también está Rachel Ruysch, la pintora de flores holandesa, que fue durante su vida más cotizada que Rembrandt en el mercado de su ciudad. Vivió ochenta y siete años, tuvo diez hijos y siguió firmando cuadros a los ochenta y tres.",
        },
        {
          forma: "texto",
          texto:
            "El bodegón de flores era un género menor en la jerarquía académica y ella lo aceptó, porque era el que tenía disponible. Hessel señala el bucle completo: se les cierra el acceso a la pintura de historia, se las empuja a las flores, y luego se las considera menores por pintar flores.",
        },
        {
          forma: "texto",
          texto:
            "Esa jerarquía tenía sede oficial, y en Londres se fundó en 1768 con treinta y seis miembros fundadores. Dos de ellos eran mujeres. Y el cuadro que se pintó para celebrar aquella fundación es la mejor imagen que existe de todo lo que cuenta este libro.",
        },
      ],
    },

    {
      titulo: "Las dos que solo están en el cuadro",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Londres, 1771. El pintor Johan Zoffany recibe el encargo de retratar a los miembros fundadores de la Royal Academy reunidos. Los pinta en una sala de dibujo del natural, con dos modelos masculinos desnudos posando y los académicos alrededor, discutiendo.",
        },
        {
          forma: "texto",
          texto:
            "Entre los treinta y seis fundadores hay dos mujeres: Angelica Kauffman, pintora suiza de gran éxito internacional, y Mary Moser, pintora de flores. Las dos son miembros de pleno derecho, con firma en el acta fundacional y con voto.",
        },
        {
          forma: "texto",
          texto:
            "Y las dos aparecen en el cuadro de Zoffany. Pero no de cuerpo entero entre sus colegas: aparecen como dos retratos colgados en la pared del fondo, dos cabezas enmarcadas mirando la escena desde arriba, junto a los bustos de yeso.",
        },
        {
          forma: "clave",
          rotulo: "El motivo",
          frase: "No podían estar en una sala con un modelo desnudo. Su presencia física era incompatible con el decoro, así que el pintor las incluyó de la única forma posible: como cuadros dentro del cuadro.",
        },
        {
          forma: "texto",
          texto:
            "Hessel usa esa pintura como imagen central del libro y se entiende por qué. No hace falta ningún argumento: está todo ahí. Dos miembros fundadoras convertidas en decoración de pared en el retrato oficial de la institución que ellas fundaron.",
        },
        {
          forma: "texto",
          texto:
            "Y la consecuencia práctica duró más de un siglo. Después de Kauffman y Moser, la Royal Academy no volvió a elegir a una mujer como miembro de pleno derecho hasta 1936. Ciento sesenta y ocho años sin ninguna, después de haber empezado con dos.",
        },
        {
          forma: "texto",
          texto:
            "Kauffman, mientras tanto, tuvo una carrera enorme: pintó a media aristocracia europea, se hizo rica, se instaló en Roma y su casa era una parada obligatoria para los viajeros del Grand Tour. Goethe la visitó y escribió que tenía un talento increíble para su sexo, que era el elogio de la época.",
        },
        {
          forma: "arte",
          texto:
            "Ese tipo de elogio aparece una y otra vez en el libro y es un dato en sí mismo. Durante siglos la mejor crítica que podía recibir una pintora era la de que pintaba como un hombre. El halago contenía dentro toda la clasificación que hacía falta desmontar.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "El siglo XIX trae el impresionismo, y ahí hay dos nombres que sí sobrevivieron al filtro: Berthe Morisot y Mary Cassatt. Morisot participó en siete de las ocho exposiciones impresionistas, más que Monet, y era considerada por el grupo una de sus figuras centrales.",
        },
        {
          forma: "texto",
          texto:
            "Su limitación era de acceso, no de talento. No podía sentarse sola en un café de Montmartre a pintar, ni pasear por los bulevares sin compañía. Así que pintó lo que tenía a mano: interiores, jardines, mujeres vistiéndose, niñas. Sus temas son el mapa de sus permisos.",
        },
        {
          forma: "texto",
          texto:
            "Cassatt, americana en París, hizo algo parecido y además una cosa decisiva para el arte de su país: aconsejó a coleccionistas americanos ricos qué comprar. Buena parte de los impresionistas que hoy cuelgan en los museos de Nueva York están ahí porque ella lo recomendó.",
        },
        {
          forma: "texto",
          texto:
            "Hessel se detiene además en un detalle económico de Cassatt que suele pasarse por alto: nunca se casó y vivió de su trabajo y de su renta familiar. La mayoría de las pintoras del XIX que llegaron a algo o no se casaron, o se casaron con un pintor. No era una casualidad de carácter.",
        },
        {
          forma: "texto",
          texto:
            "Y está el caso de Marie Bracquemond, considerada por Gauguin una de las tres grandes impresionistas junto con Morisot y Cassatt. Su marido, también pintor y con menos talento, se opuso durante años a su trabajo. Dejó de pintar en 1890 y no volvió a coger un pincel.",
        },
        {
          forma: "texto",
          texto:
            "Ese tipo de final aparece en el libro con una frecuencia que acaba siendo el argumento. No hay un veto legal ni una prohibición escrita: hay una acumulación de fricciones domésticas, de puertas entornadas y de comentarios, hasta que alguien deja de pintar y nadie tiene que responder de ello.",
        },
        {
          forma: "texto",
          texto:
            "En escultura la exclusión era todavía más dura, porque implicaba taller, materiales caros y trabajo físico. Camille Claudel trabajó veinte años, estuvo con Rodin, y en 1913, a los cuarenta y ocho, su familia la internó en un psiquiátrico. Pasó allí los treinta años que le quedaban.",
        },
        {
          forma: "texto",
          texto:
            "Los informes médicos que se conservan indican que no requería internamiento permanente y que los médicos sugirieron varias veces darle el alta. La familia se negó. Su hermano, el escritor Paul Claudel, la visitó una docena de veces en tres décadas. Murió en 1943 en el asilo.",
        },
        {
          forma: "arte",
          texto:
            "Hessel evita convertir esas biografías en martirologio, y hace bien: lo que le interesa es la obra. De Claudel destaca «La edad madura», un grupo en bronce con tres figuras donde una mujer arrodillada tiende los brazos hacia un hombre al que otra se lleva. Es autobiográfico y es magistral.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "El cambio de siglo trae por fin las escuelas de arte privadas que sí admitían mujeres —la Académie Julian en París entre ellas— y de golpe aparecen decenas de pintoras formadas. La barrera de acceso cae en una generación, y el efecto en la cantidad de obra es inmediato.",
        },
        {
          forma: "texto",
          texto:
            "Ese dato es el que remata el capítulo: en cuanto se abren las academias, las mujeres artistas se multiplican. No hubo que esperar a ningún cambio de talento ni de vocación. Lo único que había cambiado era quién podía entrar por la puerta.",
        },
      ],
    },

    {
      titulo: "La abstracción llegó antes",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Y entonces llega el capítulo que más ha cambiado los manuales en los últimos diez años, y va de una sueca de la que casi nadie había oído hablar hasta 2018. Se llamaba Hilma af Klint y pintaba en Estocolmo a principios del siglo XX.",
        },
        {
          forma: "clave",
          rotulo: "1906",
          frase: "Af Klint pintó cuadros completamente abstractos —formas, espirales, colores sin referente— empezando en 1906. Kandinsky, a quien los manuales dan como primer abstracto, llegó ahí hacia 1911.",
        },
        {
          forma: "texto",
          texto:
            "Trabajaba en secreto y por motivos espirituales: pertenecía a un grupo teosófico y sostenía que las obras le venían dictadas. Llegó a pintar más de mil doscientas piezas, algunas de tres metros, y casi ninguna se expuso mientras vivió.",
        },
        {
          forma: "texto",
          texto:
            "En su testamento dejó escrito que su obra no se mostrara hasta veinte años después de su muerte, convencida de que nadie iba a entenderla antes. Murió en 1944. La primera exposición importante llegó, en realidad, más de cuarenta años después.",
        },
        {
          forma: "arte",
          texto:
            "En 2018 el Guggenheim de Nueva York le dedicó una retrospectiva. Fue la exposición más visitada de la historia del museo, con más de seiscientos mil visitantes. Una pintora que llevaba setenta años en un almacén batió el récord del edificio.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "El siglo XX está lleno de casos parecidos, y Hessel los va poniendo en fila. Lee Krasner, pintora excelente y formada, cuya obra quedó tapada por la de su marido, Jackson Pollock, y que además dedicó años a gestionar el legado de él después de su muerte.",
        },
        {
          forma: "texto",
          texto:
            "Louise Bourgeois, que trabajó cincuenta años sin apenas reconocimiento y tuvo su primera gran retrospectiva en el MoMA en 1982, cuando tenía setenta y un años. Fue la primera mujer a la que el museo dedicaba una retrospectiva completa. Vivió hasta los noventa y ocho y siguió trabajando.",
        },
        {
          forma: "texto",
          texto:
            "Y Yayoi Kusama, que estuvo en el Nueva York de los sesenta haciendo instalaciones y performances antes que muchos de los que se llevaron el crédito, volvió a Japón, ingresó voluntariamente en una institución psiquiátrica en 1977 y siguió pintando desde allí durante cuarenta años.",
        },
        {
          forma: "texto",
          texto:
            "De Bourgeois, Hessel destaca «Maman», la araña de acero de nueve metros con un saco de huevos de mármol bajo el abdomen. La escultora explicó que era un retrato de su madre, que restauraba tapices: tejedora, protectora y con la capacidad de morder. No es un monstruo, es un elogio.",
        },
        {
          forma: "arte",
          texto:
            "Y hay un detalle biográfico que ilumina toda su obra: su padre tuvo durante años una amante que vivía en la casa familiar como institutriz de los niños, con el conocimiento de todos. Bourgeois pasó setenta años haciendo obra sobre esa casa. La primera vez que la mostró tenía cuarenta y ocho.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Del expresionismo abstracto americano, además de Krasner, rescata a Joan Mitchell y a Helen Frankenthaler. Frankenthaler inventó en 1952 una técnica —verter pintura muy diluida sobre lienzo sin imprimar, para que empapara la tela— que dos pintores hombres adoptaron y con la que ellos hicieron carrera.",
        },
        {
          forma: "texto",
          texto:
            "Ese patrón, el de la innovación técnica atribuida al que la populariza y no a la que la inventa, se repite lo suficiente como para tener nombre propio en la bibliografía. Hessel lo documenta con fechas de exposición y no con insinuaciones, que es lo que hace útil el capítulo.",
        },
        {
          forma: "texto",
          texto:
            "En México está Frida Kahlo, y aquí Hessel hace algo valiente: pelea contra su propia popularidad. Kahlo se ha convertido en una cara en camisetas y bolsas, y esa iconografía ha tapado lo que hay en los cuadros, que es de una brutalidad médica muy poco decorativa.",
        },
        {
          forma: "texto",
          texto:
            "Recuerda los hechos concretos: un accidente de autobús a los dieciocho años, una barra de metal que le atravesó la pelvis, treinta y dos operaciones a lo largo de su vida, meses enteros en cama con un espejo en el dosel. Pintó autorretratos porque era lo único que tenía delante.",
        },
        {
          forma: "texto",
          texto:
            "Y señala el dato de mercado: en 1938 vendió cuatro cuadros; en vida hizo una sola exposición individual en México, en 1953, a la que asistió en camilla porque no podía levantarse. En 2021 un autorretrato suyo se vendió en subasta por casi treinta y cinco millones de dólares.",
        },
        {
          forma: "texto",
          texto:
            "En Estados Unidos, Georgia O\u0027Keeffe tuvo el problema contrario: demasiada interpretación. Sus flores enormes se leyeron desde el principio como genitales femeninos, lectura que impulsó su marido y galerista, Alfred Stieglitz, porque vendía. Ella lo negó toda su vida y siguió pintando huesos y desiertos.",
        },
        {
          forma: "arte",
          texto:
            "O\u0027Keeffe vivió noventa y ocho años, se marchó a Nuevo México, se quedó casi ciega y siguió trabajando con ayudantes. Es de los pocos casos del libro en que una artista consigue en vida el reconocimiento completo, y aun así se pasó sesenta años discutiendo lo que sus cuadros significaban.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Hessel incluye también a las que trabajaron fuera del circuito de las galerías. Las colchas de Gee\u0027s Bend, hechas durante generaciones por mujeres negras de una comunidad aislada de Alabama, se expusieron en museos a partir de 2002 y se leyeron entonces como abstracción geométrica de primer nivel.",
        },
        {
          forma: "texto",
          texto:
            "Eso plantea la pregunta de fondo del libro sin necesidad de formularla: cuánto de lo que llamamos arte depende de la obra y cuánto de que alguien con autoridad decida llamarlo así. Aquellas colchas eran exactamente las mismas antes y después de entrar en el museo.",
        },
        {
          forma: "texto",
          texto:
            "Hoy Kusama es una de las artistas vivas más vistas del planeta y sus salas de espejos llenan museos enteros. Ese recorrido —de invisible a taquillera— es el que un grupo de artistas enmascaradas empezó a exigir en Nueva York a mediados de los ochenta, con carteles y con datos.",
        },
      ],
    },

    {
      titulo: "¿Hay que estar desnuda?",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Nueva York, 1989. Aparecen pegados por la ciudad y en un autobús unos carteles amarillos con una odalisca de Ingres, desnuda y tumbada, con una cabeza de gorila. El texto pregunta si las mujeres tienen que estar desnudas para entrar en el Metropolitan.",
        },
        {
          forma: "texto",
          texto:
            "Debajo va el dato, que es lo que lo convierte en un golpe: menos del cinco por ciento de los artistas de las secciones de arte moderno del museo eran mujeres, pero el ochenta y cinco por ciento de los desnudos eran femeninos. Habían ido a contarlos sala por sala.",
        },
        {
          forma: "texto",
          texto:
            "Las firmaba un colectivo llamado Guerrilla Girls, formado en 1985, que se presentaba en público con máscaras de gorila y usando nombres de artistas muertas —Frida Kahlo, Käthe Kollwitz— para no ser identificadas y para que la discusión no fuera sobre sus personas.",
        },
        {
          forma: "clave",
          rotulo: "El método",
          frase: "No discutían de estética. Iban al museo, contaban las obras, contaban los desnudos y publicaban la resta. La estadística resultó ser el argumento más difícil de contestar.",
        },
        {
          forma: "texto",
          texto:
            "El origen del grupo fue una exposición del MoMA de 1984 que pretendía ser un panorama del arte contemporáneo internacional. De los ciento sesenta y cinco artistas seleccionados, trece eran mujeres. El comisario declaró que cualquier artista que no estuviera en la muestra debería replantearse su carrera.",
        },
        {
          forma: "texto",
          texto:
            "Treinta años después volvieron a contar en el Metropolitan y el porcentaje de artistas mujeres en aquellas salas había bajado, aunque el de desnudos femeninos también. Ese resultado —mejora aparente, retroceso real— es el que Hessel usa para cerrar el argumento del libro.",
        },
        {
          forma: "arte",
          texto:
            "Porque los datos actuales siguen siendo tozudos. En las grandes colecciones estadounidenses estudiadas en 2019, el ochenta y siete por ciento de las obras eran de hombres. En el mercado, la brecha de precios entre firmas equivalentes se sigue midiendo en múltiplos, no en porcentajes.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "El último tercio del libro recorre el arte contemporáneo con esa lente: Faith Ringgold y sus colchas narrativas, Ana Mendieta, Barbara Kruger, Cindy Sherman, Kara Walker, Tracey Emin. Y también artistas de fuera del circuito occidental, aunque esa es la parte más floja.",
        },
        {
          forma: "texto",
          texto:
            "Porque ahora toca decir dónde falla, y falla en cosas identificables. La primera es de formato: al cubrir quinientos años y a más de trescientas artistas, cada una recibe dos o tres páginas. Es un catálogo espléndido y un argumento fino.",
        },
        {
          forma: "texto",
          texto:
            "El propio Gombrich, al que este libro contesta, tenía una tesis que le daba motor: cada obra como respuesta a un problema. Aquí el hilo es la exclusión, que explica muy bien por qué no estaban y bastante peor qué hicieron una vez dentro.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es geográfica, y es la misma que ella le reprocha al canon. El libro es abrumadoramente europeo y norteamericano. África, Asia y América Latina aparecen sobre todo a partir del siglo XX y casi siempre a través de artistas ya validadas por museos de Londres y Nueva York.",
        },
        {
          forma: "texto",
          texto:
            "La tercera es de método, y es la crítica más seria que se le ha hecho: el libro combate un canon construyendo otro, y usa para hacerlo los mismos criterios de validación —el museo, la retrospectiva, la subasta— que denuncia. Sustituir la lista no cambia quién decide las listas.",
        },
        {
          forma: "arte",
          texto:
            "Hessel lo sabe y lo dice en el prólogo, que es lo que la salva. Escribe que este es un libro de transición y que ojalá quede anticuado pronto. Aspira a ser un andamio, no un edificio. Aun así, la contradicción está ahí y no se resuelve dentro de las páginas.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Y una cuarta, menor pero real: el tono es divulgativo y a ratos demasiado entusiasta. Casi todas las artistas son extraordinarias, revolucionarias y adelantadas a su tiempo. Con trescientas seguidas, el superlativo se gasta y cuesta distinguir a las de primera fila.",
        },
        {
          forma: "texto",
          texto:
            "Lo que casi todo el mundo cree y no es verdad, empezando por el título: no propone quitar a los hombres de la historia del arte. Es un experimento de lectura, no un programa. La propia autora escribe sobre artistas hombres en su trabajo habitual.",
        },
        {
          forma: "texto",
          texto:
            "Segundo malentendido, el más extendido: que sencillamente no hubo mujeres artistas antes del siglo XX. El libro demuestra lo contrario con nombres, fechas, actas de gremio, contratos y precios de mercado. Hubo muchas, algunas famosísimas en vida, y luego desaparecieron de los libros.",
        },
        {
          forma: "texto",
          texto:
            "Y el tercero: que aquello se arregló solo con el tiempo. La Royal Academy tardó ciento sesenta y ocho años en volver a elegir a una mujer. El MoMA tardó hasta 1982 en dedicarle una retrospectiva a una artista viva. Nada de eso ocurrió por inercia: ocurrió cuando alguien empujó.",
        },
        {
          forma: "texto",
          texto:
            "Lo que queda es un libro que funciona mejor como herramienta que como relato: se abre por cualquier página, se encuentra una artista de la que no se sabía nada, y se comprueba en el museo más cercano cuántas obras suyas hay colgadas. Casi siempre la respuesta es ninguna.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un detalle final que resume la historia entera. Cuando el Prado quiso montar en 2016 la primera exposición monográfica de dos pintoras —Clara Peeters y Sofonisba Anguissola—, tuvo que pedir prestadas obras: llevaban doscientos años en sus almacenes o en colecciones ajenas, sin colgar.",
        },
      ],
    },
  ],
};

export const ACTO_CREATIVO: Resumen = {
  id: "acto-creativo",
  titulo: "El acto creativo",
  autor: "Rick Rubin",
  ano: 2023,
  gancho: "El productor musical más influyente de los últimos cuarenta años no toca ningún instrumento, no sabe leer música y no maneja una mesa de mezclas.",
  porQue:
    "Porque su método —quitar en vez de añadir— resucitó a Johnny Cash a los sesenta y un años, y porque el libro donde lo explica es más discutible de lo que parece.",
  partes: [
    {
      titulo: "La habitación 712",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Nueva York, 1984. En una residencia de estudiantes de la Universidad de Nueva York, un chaval de Long Island con veintiún años y el pelo largo monta un sello discográfico en su habitación. El logotipo lo dibuja él. La dirección postal del sello es su cuarto.",
        },
        {
          forma: "texto",
          texto:
            "Se llama Rick Rubin y el sello se llama Def Jam. En los tres años siguientes publicará el primer disco de LL Cool J, el de los Beastie Boys y el que junta a Run-DMC con Aerosmith. El hip hop pasa de la radio comunitaria a las listas de éxitos.",
        },
        {
          forma: "texto",
          texto:
            "El dato que sostiene todo lo demás: Rubin no toca ningún instrumento, no sabe leer una partitura y no sabe manejar una mesa de mezclas. Ha producido varios de los discos más vendidos de la historia sin ninguna de las tres competencias que se le suponen a un productor.",
        },
        {
          forma: "clave",
          rotulo: "Qué hace entonces",
          frase: "Escuchar y decir qué sobra. Su trabajo se parece más al de un editor de libros o un director de cine que al de un técnico: no fabrica el sonido, decide qué se queda.",
        },
        {
          forma: "texto",
          texto:
            "Su carrera es, además, una lista de saltos que no deberían caber en una sola persona. Después del hip hop produjo el disco más extremo del thrash metal, «Reign in Blood» de Slayer, veintiocho minutos y diez canciones, grabado con la misma lógica de quitar todo lo que sobre.",
        },
        {
          forma: "texto",
          texto:
            "Luego los Red Hot Chili Peppers, a los que sacó de su casa y encerró en una mansión de Hollywood para grabar; Adele, Kanye West, System of a Down, Metallica, los Dixie Chicks. Y entre medias el trabajo por el que se le recordará más allá de la música pop.",
        },
        {
          forma: "arte",
          texto:
            "Ese currículum es el argumento implícito del libro: si el mismo hombre puede sacar lo mejor de un grupo de thrash metal, de una cantante de soul y de un icono del country, lo que hace no puede ser técnico. Tiene que ser otra cosa, y el libro es su intento de explicarla.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "«El acto creativo» salió en 2023, después de treinta y cinco años de carrera y de un podcast donde entrevista a músicos y a científicos. Vendió millones de ejemplares y se convirtió en el libro de cabecera de mucha gente que no tiene nada que ver con la música.",
        },
        {
          forma: "texto",
          texto:
            "Y lo primero que sorprende al abrirlo es lo que no hay. No hay anécdotas de estudio. No hay nombres. No cuenta cómo grabó ningún disco. En quinientas páginas apenas se menciona a un puñado de artistas, y casi nunca por su trabajo con ellos.",
        },
        {
          forma: "texto",
          texto:
            "Está organizado en setenta y ocho capítulos cortos, algunos de dos páginas, que él llama áreas de pensamiento. Se pueden leer en cualquier orden. No hay ejercicios, no hay bibliografía y no hay una sola cifra en todo el libro.",
        },
        {
          forma: "clave",
          rotulo: "La decisión de forma",
          frase: "Podría haber escrito unas memorias de la industria musical que se habrían vendido igual. Escribió deliberadamente lo contrario: un libro sin él dentro.",
        },
        {
          forma: "texto",
          texto:
            "Su justificación aparece en la introducción: dice que no escribe para músicos, sino para cualquiera que haga algo, y que los ejemplos concretos de su oficio harían pensar al lector que aquello va de discos. La ausencia de anécdotas es una decisión, no una carencia.",
        },
        {
          forma: "texto",
          texto:
            "También define desde el principio a quién se dirige, y es la frase más citada del libro: todos somos creadores. No se refiere a que todo el mundo pueda ser artista, sino a algo más básico: que elegir qué mirar, qué escuchar y qué ignorar ya es un acto creativo.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale la primera idea sólida: la materia prima no es el talento, es la atención. Un creador no es alguien que produce más, es alguien que percibe más, y percibir más es un músculo que se entrena reduciendo el ruido y aumentando el tiempo de mirar.",
        },
        {
          forma: "arte",
          texto:
            "Rubin cuenta que en las sesiones se pasa mucho rato tumbado en un sofá con los ojos cerrados, escuchando. Los músicos que han trabajado con él lo han descrito con perplejidad y también con respeto: no hace nada durante horas y luego dice una frase que reordena el disco.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "La otra idea que introduce pronto y que estructura el libro es la más discutible: sostiene que las ideas no se fabrican, se reciben. Que existe algo a lo que llama la Fuente, del que las ideas emanan, y que el trabajo del artista es sintonizar y no obstruir.",
        },
        {
          forma: "texto",
          texto:
            "Es una idea muy antigua vestida de nuevo. Los griegos la llamaban musa y los romanos genius, entendido no como un rasgo de la persona sino como un espíritu que la visitaba. Rubin la recupera sin citar a nadie, y ahí empieza el problema del libro y también su atractivo.",
        },
        {
          forma: "texto",
          texto:
            "Porque tiene una utilidad práctica innegable: si la idea no es tuya, el fracaso tampoco te define. Baja la presión del ego, que según él es el principal obstáculo. Y tiene un coste: es una afirmación que no se puede comprobar ni discutir.",
        },
        {
          forma: "texto",
          texto:
            "Antes de entrar en el método conviene ver cómo funciona aplicado, porque hay un caso documentado que lo demuestra mejor que cualquier capítulo del libro. Ocurrió en 1993, en el salón de la casa de Rubin, con un hombre de sesenta y un años al que nadie quería contratar.",
        },
        {
          forma: "texto",
          texto:
            "Ese hombre llevaba diez años sin un disco de éxito, había sido despedido por su discográfica de toda la vida y actuaba en cenas-espectáculo de Branson, Misuri. Se llamaba Johnny Cash y estaba a punto de tener la mejor década de su carrera.",
        },
      ],
    },

    {
      titulo: "El sillón de Johnny Cash",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Los Ángeles, 1993. Johnny Cash tiene sesenta y un años. Columbia Records, su casa desde los años sesenta, lo ha despedido. Su siguiente sello tampoco funcionó. Toca en teatros para turistas y su público ha envejecido con él. Nadie en la industria lo considera un artista activo.",
        },
        {
          forma: "texto",
          texto:
            "Rubin le propone grabar. Cash le pregunta qué se supone que va a hacer con él, y Rubin le contesta que sentarlo con una guitarra en su salón y grabar las canciones que él quiera cantar. Sin banda, sin arreglos, sin coros, sin nada.",
        },
        {
          forma: "clave",
          rotulo: "El método, en una frase",
          frase: "Quitar todo lo que no sea la voz y la canción. Cash llevaba treinta años enterrado bajo producciones cada vez más pobladas. Rubin le quitó la orquesta y dejó a un hombre y una guitarra.",
        },
        {
          forma: "texto",
          texto:
            "Grabaron durante meses, decenas y decenas de canciones. Country antiguo, himnos, cosas que Cash cantaba de niño, y también temas de gente que su público no habría reconocido: Leonard Cohen, Tom Waits, Nick Lowe, Glenn Danzig. El primer disco salió en 1994 y se llamó «American Recordings».",
        },
        {
          forma: "texto",
          texto:
            "La portada es Cash de negro, con dos perros, en un campo. El disco ganó un Grammy y le devolvió un público que no había nacido cuando él era famoso. Grabaron seis discos en total, los dos últimos publicados después de su muerte en 2003.",
        },
        {
          forma: "arte",
          texto:
            "El punto culminante llegó en 2002, con una versión de «Hurt», de Nine Inch Nails, una canción sobre la adicción escrita por un hombre de veintiséis años. Cantada por un anciano enfermo, con la voz agrietada, la letra dice otra cosa completamente distinta sin cambiar una palabra.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Trent Reznor, su autor, contó que al principio le pareció una idea rara y que al ver el vídeo se quedó sin habla. Dijo que aquella canción había dejado de ser suya. Es probablemente el mejor elogio que ha recibido nunca una versión.",
        },
        {
          forma: "texto",
          texto:
            "Ese caso enseña lo que el libro no explica bien: el trabajo de Rubin no fue creativo en el sentido de añadir, sino de decidir. Elegir qué canciones, elegir qué versión de las diez grabadas se quedaba y elegir qué se quitaba. Eso es todo, y era casi todo lo que hacía falta.",
        },
        {
          forma: "texto",
          texto:
            "El libro sí desarrolla el principio general, y lo llama de varias maneras. La idea es que casi todo lo que se hace está de más, y que la mejor pregunta que se le puede hacer a una obra terminada es qué pasa si le quito esto.",
        },
        {
          forma: "texto",
          texto:
            "Rubin propone probarlo literalmente: quitar un elemento y escuchar. Si la pieza sigue funcionando, sobraba. Y sostiene que la mayoría de las obras que no funcionan no fallan por falta de material, sino por exceso: por no haberse atrevido a tirar lo que costó hacer.",
        },
        {
          forma: "clave",
          rotulo: "El coste hundido",
          frase: "Lo más difícil de quitar no es lo malo: es lo bueno que no encaja. Y cuanto más tiempo costó hacerlo, más difícil resulta tirarlo, aunque esté estorbando.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale otro consejo suyo que sí es operativo: separar la fase de generar de la fase de juzgar. Mientras se hace, no se evalúa. Mientras se evalúa, no se hace. Mezclarlas es la forma más rápida de bloquearse, porque el crítico interno mata lo que aún no está formado.",
        },
        {
          forma: "texto",
          texto:
            "Rubin divide el proceso en cuatro fases y esa es la parte más estructurada del libro. La semilla, la experimentación, el oficio y la terminación. Cada una pide una actitud distinta y el error habitual es aplicar la actitud de una fase en otra.",
        },
        {
          forma: "texto",
          texto:
            "En la semilla se recoge sin filtrar. Todo vale, nada se descarta, no importa la calidad. Rubin insiste en que en esa fase juzgar es contraproducente, porque las semillas malas a veces contienen la buena y no se sabe cuál es hasta que crece.",
        },
        {
          forma: "texto",
          texto:
            "En la experimentación se prueba: se llevan las semillas a distintos terrenos, se combinan, se estropean a propósito. Aquí recomienda hacer versiones deliberadamente malas o extremas, porque el extremo enseña dónde están los bordes de lo que se está haciendo.",
        },
        {
          forma: "arte",
          texto:
            "En el oficio se ejecuta, y es la fase que él confiesa que menos le interesa y peor se le da. Y en la terminación hay que decidir que ya está, que según él es el momento más difícil y donde más obra buena se arruina por seguir tocándola.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Sobre terminar da un consejo práctico y bastante sensato: ponerse una fecha límite aunque sea artificial. Dice que la obra nunca está lista y que se acaba cuando alguien decide que se acaba, y que ese alguien tiene que ser el autor y no el cansancio.",
        },
        {
          forma: "texto",
          texto:
            "Y una regla de trabajo que ha adoptado mucha gente: probar dos veces con una limitación absurda. Hacerlo en veinte minutos. Hacerlo con tres elementos. Hacerlo sin la parte de la que estás más orgulloso. Las restricciones inventadas producen soluciones que la libertad no produce.",
        },
        {
          forma: "texto",
          texto:
            "Todo eso es aprovechable. Lo que ocupa la mitad restante del libro es otra cosa, y es donde el lector se divide en dos: unos encuentran el marco que les faltaba y otros encuentran una sucesión de frases bonitas sin nada debajo.",
        },
        {
          forma: "texto",
          texto:
            "Porque el corazón conceptual del libro es la idea de que el artista no inventa: recibe. Y una vez aceptada esa premisa, todo lo demás se sigue de ella con una coherencia notable, empezando por qué demonios se supone que hay que hacer para recibir algo.",
        },
      ],
    },

    {
      titulo: "La antena",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La tesis, dicha con sus palabras: las ideas no salen de dentro del artista. Existen fuera, en circulación, y el artista es un receptor. Su trabajo no consiste en generar sino en estar disponible para captar, y en no estropear lo que capta al pasarlo al mundo.",
        },
        {
          forma: "texto",
          texto:
            "El ejemplo que suele darse para defender esto es la simultaneidad de los descubrimientos: el cálculo lo inventaron Newton y Leibniz por separado, la evolución la formularon Darwin y Wallace a la vez, el teléfono se patentó el mismo día en dos despachos distintos.",
        },
        {
          forma: "clave",
          rotulo: "La utilidad práctica",
          frase: "Si la idea no es tuya, el mérito no te infla y el fracaso no te hunde. Rubin sostiene que el ego es el mayor obstáculo del trabajo creativo, y esto es su antídoto.",
        },
        {
          forma: "texto",
          texto:
            "El problema evidente es que la afirmación no se puede comprobar. No hay forma de distinguir una idea recibida de una idea generada por un cerebro que ha acumulado material durante años y lo recombina mientras uno se ducha. La explicación material funciona igual de bien.",
        },
        {
          forma: "texto",
          texto:
            "Rubin no discute eso porque no le interesa. Su libro no es descriptivo: es prescriptivo. No pretende explicar cómo funciona la mente, pretende dar un marco mental que produzca mejor trabajo. Y como marco, tiene efectos observables que él ha visto durante décadas.",
        },
        {
          forma: "arte",
          texto:
            "El principal es sobre el bloqueo. Un artista que cree que las ideas salen de él vive con miedo a agotarse. Uno que cree que pasan por él vive con la tarea mucho más manejable de estar atento. La segunda historia produce menos parálisis, sea o no verdad.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "De la tesis salen las prácticas. La primera es la atención deliberada: mirar cosas sin propósito, sin buscar material. Rubin recomienda pasear, mirar el mar, observar a la gente, y expresamente no ir a buscar ideas, porque ir a buscarlas es la manera más fiable de no encontrarlas.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es la reducción del ruido. Menos noticias, menos redes, menos consumo pasivo, más silencio. Su argumento no es moral sino de capacidad: la atención es limitada y la gasta lo que se mete en ella, así que elegir la dieta informativa es elegir la materia prima.",
        },
        {
          forma: "texto",
          texto:
            "La tercera es el cuaderno. Anotar todo, sin filtrar, sin ordenar y sin releer inmediatamente. La idea es no confiar en la memoria y no juzgar en el momento de capturar, porque el juicio en ese momento descarta cosas que solo se entienden meses después.",
        },
        {
          forma: "texto",
          texto:
            "La cuarta es la mente de principiante, un concepto tomado del zen. Consiste en acercarse a algo que ya se conoce como si fuera la primera vez. Es lo que, según él, le permite trabajar con géneros que no domina: no sabe cómo se hace, así que pregunta lo obvio.",
        },
        {
          forma: "clave",
          rotulo: "La ventaja de no saber",
          frase: "Rubin sostiene que no saber tocar es una ventaja, porque le impide oír una canción como un músico. La oye como el que la va a escuchar, que es el único oído que le importa.",
        },
        {
          forma: "texto",
          texto:
            "Ese punto es más sólido de lo que parece y tiene respaldo en la práctica de otros oficios. Un editor que no escribe novelas ve la novela como el lector. Un director que no actúa ve la interpretación desde la butaca. El experto pierde acceso a la mirada del que llega de nuevo.",
        },
        {
          forma: "texto",
          texto:
            "Rubin añade una consecuencia incómoda: la técnica, dice, tiende a llevar al artista hacia lo que sabe hacer bien. Un guitarrista virtuoso escribe canciones que le permiten lucirse, y esas suelen ser peores que las que escribiría si solo supiera tres acordes.",
        },
        {
          forma: "texto",
          texto:
            "Y de ahí una recomendación que sí se puede aplicar mañana: trabajar deliberadamente con menos herramientas de las que se dominan. Grabar con un solo micrófono. Escribir sin adjetivos. Dibujar con un solo color. La limitación obliga a resolver por el lado de la idea.",
        },
        {
          forma: "texto",
          texto:
            "Hay otro capítulo que la gente subraya siempre y que va sobre la comparación. Rubin sostiene que compararse con otros artistas es una forma de mirar hacia fuera en un trabajo que solo se puede hacer mirando hacia dentro, y que las modas son ruido con apariencia de información.",
        },
        {
          forma: "arte",
          texto:
            "Su argumento es cronológico y es bueno: cuando algo está de moda, ya es tarde. Lo que se percibe como tendencia se decidió dos años antes en el trabajo de alguien que no estaba mirando tendencias. Perseguir el momento garantiza llegar al momento siguiente con retraso.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Hay también un capítulo sobre la colaboración que contradice bastante la imagen del genio receptor. Rubin describe su papel en el estudio como el de alguien que crea las condiciones: la sala, el orden de las canciones, quién habla, cuándo se para. Casi un trabajo de anfitrión.",
        },
        {
          forma: "texto",
          texto:
            "Y cuenta que su intervención más frecuente es una pregunta: ¿te gusta? Repetida, sin juicio, hasta que el artista contesta que no. Sostiene que la mayoría de la gente sabe perfectamente qué parte de su trabajo no funciona y que solo necesita permiso para decirlo en voz alta.",
        },
        {
          forma: "texto",
          texto:
            "Ese es probablemente el consejo más útil de todo el libro y ocupa media página. Y es también un buen ejemplo del problema del volumen: para llegar a él hay que atravesar cuarenta capítulos sobre la naturaleza del universo y la energía de las cosas.",
        },
        {
          forma: "texto",
          texto:
            "Porque falta todavía la afirmación que más se ha discutido, la que aparece cerca del final y que en boca del cofundador de uno de los sellos discográficos más rentables de la historia resulta, cuando menos, llamativa.",
        },
      ],
    },

    {
      titulo: "El primer borrador malo",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Uno de los capítulos más útiles se llama, en la práctica, hazlo mal primero. Rubin sostiene que el primer intento no tiene que ser bueno: tiene que existir. Su función no es ser la obra, sino darle al autor algo concreto que criticar en lugar de una página en blanco.",
        },
        {
          forma: "texto",
          texto:
            "El argumento psicológico es fino: es infinitamente más fácil mejorar algo malo que crear algo bueno. Frente a la nada, la mente no tiene dónde agarrarse. Frente a un borrador horrible, la mente sabe exactamente qué está mal, y saber qué está mal es la mitad del trabajo.",
        },
        {
          forma: "clave",
          rotulo: "El cambio de tarea",
          frase: "La página en blanco pide inventar. El borrador malo pide corregir. Corregir es una habilidad mucho más accesible, y casi todo el mundo la tiene aunque crea que no.",
        },
        {
          forma: "texto",
          texto:
            "De ahí se derivan varias reglas de trabajo. La primera: fijar un volumen mínimo diario y cumplirlo con independencia de la calidad. La cantidad, sostiene, produce calidad por acumulación, y esperar la inspiración es una manera elegante de no trabajar.",
        },
        {
          forma: "texto",
          texto:
            "La segunda: empezar por lo más pequeño posible. Si un disco parece imposible, una canción. Si una canción es demasiado, una frase. Rubin insiste en que el tamaño de la tarea que uno se plantea determina si se empieza, y que casi todo el mundo se plantea tareas demasiado grandes.",
        },
        {
          forma: "texto",
          texto:
            "La tercera es sobre los plazos y contradice lo que muchos esperarían de él. Defiende las fechas límite, incluso las inventadas, porque la obra nunca se acaba sola. Dice que ha visto morir discos por exceso de tiempo mucho más a menudo que por falta de él.",
        },
        {
          forma: "arte",
          texto:
            "Su descripción del exceso de retoque es exacta: llega un punto en que cada cambio ya no mejora, solo cambia, y el autor está moviendo piezas para no tener que enfrentarse a que ya está. Terminar da miedo porque terminar significa exponerse a que juzguen.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Hay un capítulo sobre los hábitos que es más matizado de lo habitual en este tipo de libros. Rubin defiende la rutina como forma de reducir decisiones, y a la vez avisa de que una rutina demasiado rígida acaba produciendo siempre el mismo trabajo.",
        },
        {
          forma: "texto",
          texto:
            "Su propuesta es rotar deliberadamente: cambiar de sitio, de hora, de herramienta cada cierto tiempo, no por capricho sino porque el entorno determina lo que se le ocurre a uno. Escribir en otro cuarto produce otras frases, y eso es comprobable en una tarde.",
        },
        {
          forma: "texto",
          texto:
            "Otro capítulo trata la relación entre estado de ánimo y trabajo, y ahí es tajante en contra del tópico romántico. Sostiene que no hace falta sufrir para crear, que el mito del artista atormentado ha hecho mucho daño y que el trabajo sostenido requiere estabilidad, no crisis.",
        },
        {
          forma: "clave",
          rotulo: "Contra el artista atormentado",
          frase: "Rubin ha trabajado con adicciones, depresiones y catástrofes personales de primera fila. Su conclusión es que la gente creó a pesar de eso, nunca gracias a eso.",
        },
        {
          forma: "texto",
          texto:
            "También hay una idea sobre el gusto que merece la pena. Dice que el gusto de una persona casi siempre va por delante de su habilidad, y que ese desfase es la causa principal del abandono: uno reconoce que lo que hace no está a la altura de lo que admira, y lo deja.",
        },
        {
          forma: "texto",
          texto:
            "Su respuesta a eso es que el desfase no es un problema, es el motor. Si el gusto no fuera superior a la habilidad, no habría hacia dónde mejorar. Lo único que hay que aceptar es que el hueco tarda años en cerrarse y que durante ese tiempo el trabajo será decepcionante.",
        },
        {
          forma: "texto",
          texto:
            "Sobre el fracaso, su reencuadre es de los más limpios: un experimento no puede fallar. Si sale mal, la información que devuelve es tan válida como si sale bien. Solo hay fracaso si se esperaba un resultado concreto, y esperar un resultado concreto es lo que estropea la fase de prueba.",
        },
        {
          forma: "texto",
          texto:
            "Y una advertencia contra el consejo, incluido el suyo: dice que todo lo que hay en el libro son observaciones sobre lo que a él le ha funcionado, que no son reglas, y que si alguna contradice la experiencia del lector, la que vale es la del lector.",
        },
        {
          forma: "arte",
          texto:
            "Esa cláusula aparece varias veces y es honesta y también cómoda: un libro que se declara inaplicable a quien no le encaje es un libro que no se puede refutar. Es la misma estructura que la idea de la Fuente, y es la característica más discutible de todo el conjunto.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Con todo, hay una parte del método que sí es concreta y que él practica desde hace cuarenta años: escuchar la obra terminada como si fuera de otro. Dejarla reposar semanas, ponerla sin avisarse, y observar la primera reacción antes de que entre el conocimiento de cómo se hizo.",
        },
        {
          forma: "texto",
          texto:
            "Y otra: enseñársela a alguien y no mirar la obra, sino a la persona. Rubin dice que lo que la gente comenta después es mucho menos informativo que lo que hace su cara en el minuto tres. La opinión se filtra por educación; la atención no se puede fingir.",
        },
        {
          forma: "texto",
          texto:
            "Ese es un consejo de productor puro y probablemente venga de haber visto a cientos de personas escuchar maquetas en un sofá. Es también uno de los pocos momentos del libro en que se nota debajo la experiencia acumulada de un oficio concreto.",
        },
        {
          forma: "texto",
          texto:
            "Queda la afirmación final, la que da la vuelta a todo lo anterior y la que más ruido ha hecho. Está en un capítulo breve, hacia el final, y contradice de frente el negocio en el que Rick Rubin ha trabajado toda su vida.",
        },
      ],
    },

    {
      titulo: "El público va el último",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La frase es esta: el público va el último. Rubin sostiene que la obra no se hace para nadie, que consultar al oyente antes de terminar es la forma más segura de estropearla, y que la única persona a la que hay que satisfacer es a uno mismo.",
        },
        {
          forma: "texto",
          texto:
            "Su argumento no es de pureza sino práctico. Dice que nadie sabe lo que el público quiere, ni siquiera el público, porque lo que la gente pide es siempre una variación de lo que ya conoce, y lo que acaba entusiasmándola es casi siempre algo que no habría sabido pedir.",
        },
        {
          forma: "clave",
          rotulo: "El argumento",
          frase: "Si intentas adivinar lo que gustará, produces una versión diluida de lo que ya existía. Si haces exactamente lo que te gusta a ti, al menos hay una persona en el mundo a la que le encanta.",
        },
        {
          forma: "texto",
          texto:
            "Y da un dato de su propia experiencia que sostiene la idea: los discos suyos que se convirtieron en éxitos enormes fueron, casi siempre, los que la industria consideró inviables antes de salir. Un disco de rap con guitarras. Un disco de Johnny Cash con una guitarra y nada más.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, la objeción evidente, que hay que poner sobre la mesa. Esto lo escribe el hombre que cofundó Def Jam, que dirigió Columbia Records y que ha producido algunos de los discos más vendidos de la historia. Nadie ha entendido mejor el mercado que él.",
        },
        {
          forma: "arte",
          texto:
            "El libro no explica esa tensión en ningún momento. Un lector sin carrera hecha puede seguir el consejo de ignorar al público y quedarse sin público. Rubin puede permitirse ignorarlo porque lleva cuarenta años acertando con él, y esa asimetría no aparece en ninguna página.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Esa es la primera de las cosas que fallan, y hay más. La segunda es que el libro no enseña a hacer nada. No hay ejercicios, no hay ejemplos trabajados, no hay ni un solo caso desarrollado. Es un libro sobre cómo colocarse mentalmente, no sobre cómo trabajar.",
        },
        {
          forma: "texto",
          texto:
            "La tercera es el tono. Muchos capítulos son sucesiones de afirmaciones breves y solemnes sin argumentación. La crítica más repetida que ha recibido es que se parece a un calendario de frases inspiradoras, y en algunos tramos es difícil defenderlo de esa acusación.",
        },
        {
          forma: "texto",
          texto:
            "La cuarta es la repetición. Setenta y ocho capítulos para unas ocho o diez ideas. La idea de la atención aparece cinco veces con distinta ropa; la de quitar, otras tantas. Un lector que subraye descubrirá que ha subrayado la misma frase en tres sitios distintos.",
        },
        {
          forma: "texto",
          texto:
            "Y la quinta, la de fondo: la Fuente. Colocar el origen de las ideas fuera del artista es una decisión metafísica presentada como observación. Rubin no la argumenta ni la contrasta con nada, y el lector que no la compre tiene que releer medio libro traduciendo.",
        },
        {
          forma: "clave",
          rotulo: "La traducción posible",
          frase: "Donde él dice «sintonizar con la Fuente», se puede leer «acumular material durante años y darle a la cabeza tiempo y silencio para recombinarlo». Casi todos los consejos siguen funcionando.",
        },
        {
          forma: "texto",
          texto:
            "Lo que casi todo el mundo cree y no es verdad, empezando por lo más común: no son unas memorias. Quien lo compre buscando la historia de Def Jam, de los Beastie Boys o de las sesiones con Cash no va a encontrar prácticamente nada de eso.",
        },
        {
          forma: "texto",
          texto:
            "Segundo malentendido: que sea un libro de música. No lo es en ningún sentido. No hay términos técnicos, no hay estudio, no hay instrumentos. Está escrito para que lo lea un fotógrafo, un cocinero o alguien que monta una empresa, y esa era la intención declarada.",
        },
        {
          forma: "texto",
          texto:
            "Tercero: mucha gente asume que Rubin es productor en el sentido técnico. No lo es. No manipula el sonido. Lo que hace es escuchar, elegir y quitar, y ese trabajo tiene más que ver con la dirección y la edición que con la ingeniería.",
        },
        {
          forma: "arte",
          texto:
            "Los músicos que han trabajado con él lo describen con la misma imagen una y otra vez: un hombre descalzo, tumbado, con los ojos cerrados, que a veces no dice nada en toda la tarde. Anthony Kiedis contó que al principio pensó que se había dormido.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Y el cuarto malentendido: que el libro proponga esperar la inspiración. Propone exactamente lo contrario. Volumen diario, plazos, primer borrador malo, terminar aunque no esté perfecto. Debajo del lenguaje místico hay una ética de trabajo bastante dura.",
        },
        {
          forma: "texto",
          texto:
            "Lo que queda, si se descuenta la repetición y la metafísica, cabe en una página: presta atención a lo que te interesa de verdad, acumula sin juzgar, haz mucho y mal antes de hacer poco y bien, quita todo lo que no sostenga la pieza, y decide tú cuándo está terminada.",
        },
        {
          forma: "texto",
          texto:
            "No es original y él tampoco lo pretende. Lo que aporta es la autoridad de alguien que lo ha aplicado durante cuarenta años en géneros incompatibles entre sí, y la prueba concreta de un hombre de sesenta y un años sentado en un salón con una guitarra prestada.",
        },
        {
          forma: "texto",
          texto:
            "Porque esa es, al final, la mejor defensa del libro. Cash llevaba una década enterrado bajo arreglos, coros y decisiones comerciales tomadas por otros. Alguien le quitó todo eso y grabó lo que quedaba. Y lo que quedaba resultó ser la mejor música de su vida.",
        },
      ],
    },
  ],
};

export const CAMINO_ARTISTA: Resumen = {
  id: "camino-artista",
  titulo: "El camino del artista",
  autor: "Julia Cameron",
  ano: 1992,
  gancho: "Dejó de beber a los treinta años convencida de que el alcohol era lo que la hacía escribir. Descubrió que era al revés y montó un curso de doce semanas.",
  porQue:
    "Es el libro que ha desbloqueado a más gente creativa que ningún otro, y su herramienta principal cabe en tres folios y un bolígrafo.",
  partes: [
    {
      titulo: "El día que dejó de beber",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Nuevo México, 1978. Una periodista de treinta años acaba de dejar el alcohol. Ha escrito para Rolling Stone y para el Washington Post, ha estado casada con un director de cine y tiene una hija pequeña. Y está aterrorizada por una razón muy concreta.",
        },
        {
          forma: "texto",
          texto:
            "Está convencida de que el alcohol era la fuente de su talento. Que escribía porque bebía. Que sin la botella no va a salir nada. Se llamaba Julia Cameron y llevaba años oyendo el mito del escritor que bebe, aplicado a sí misma.",
        },
        {
          forma: "clave",
          rotulo: "Lo que descubrió",
          frase: "Sobria escribía más y mejor. El alcohol no había alimentado nada: había ido tapando el miedo a escribir mal, y de paso le había robado años de trabajo.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale todo el libro. Cameron empezó a dar clases para gente bloqueada creativamente, primero en su casa y después en talleres en Nueva York y en Los Ángeles. El material circuló durante años fotocopiado antes de que ninguna editorial lo quisiera.",
        },
        {
          forma: "texto",
          texto:
            "Se publicó en 1992 y lleva vendidos más de cinco millones de ejemplares. Lo han usado guionistas de Hollywood, novelistas premiados, músicos y una enorme cantidad de gente que no se dedica al arte y que simplemente había dejado de hacer algo que le importaba.",
        },
        {
          forma: "texto",
          texto:
            "La tesis de partida es la que más incomoda y la más útil: la creatividad no es un don que unos tienen y otros no. Es una capacidad ordinaria que casi todo el mundo tuvo de niño y que se pierde por una acumulación de comentarios, miedos y decisiones prácticas.",
        },
        {
          forma: "arte",
          texto:
            "Cameron no habla de aprender a crear, habla de desbloquear. Su diagnóstico es que casi nadie está vacío: está tapado. Y su curso no es un curso de técnica sino un procedimiento para quitar lo que hay encima, que suele ser vergüenza y miedo a ser mediocre.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "El libro está organizado como un curso de doce semanas, con un capítulo por semana, unas tareas al final de cada uno y una lista de comprobación. La estructura es deliberada y su origen es explícito: los doce pasos de Alcohólicos Anónimos.",
        },
        {
          forma: "texto",
          texto:
            "Cameron nunca lo ha ocultado. Ella salió de la adicción con ese programa y trasladó el molde: doce etapas, una entrega diaria, un poder superior, una comunidad y la idea de que la voluntad sola no basta. Quien reconozca la estructura entenderá la mitad del libro.",
        },
        {
          forma: "texto",
          texto:
            "Y de ahí viene también el aspecto que más lectores expulsa. El libro habla de Dios, del Gran Creador y de una energía que fluye a través de uno. Cameron avisa en el prólogo de que si esas palabras molestan, se sustituyan por cualquier otra, pero no las quita.",
        },
        {
          forma: "clave",
          rotulo: "El aviso",
          frase: "Quien no soporte el vocabulario espiritual va a tener que traducir cada dos páginas. La alternativa es leerlo como una descripción del inconsciente y de la costumbre, y funciona casi igual.",
        },
        {
          forma: "texto",
          texto:
            "El diagnóstico central se llama el Censor. Es la voz interna que evalúa mientras se está produciendo, que compara lo que está saliendo con lo que debería salir, y que consigue que la mayoría de la gente abandone antes de terminar el primer intento.",
        },
        {
          forma: "texto",
          texto:
            "Cameron sostiene, y esto sí lo respalda la práctica de cualquier oficio creativo, que generar y juzgar son dos operaciones incompatibles. Hacerlas a la vez produce parálisis, y casi todo el bloqueo creativo consiste exactamente en eso: intentar hacerlas a la vez.",
        },
        {
          forma: "texto",
          texto:
            "Su remedio no es silenciar al Censor, porque no se puede. Es distraerlo. Todo el curso consiste en herramientas para que ese vigilante mire hacia otro lado el tiempo suficiente para que algo salga a la superficie sin ser evaluado en el trayecto.",
        },
        {
          forma: "arte",
          texto:
            "Y hay una idea que atraviesa el libro entero y que explica por qué ha funcionado con tanta gente: el bloqueo casi nunca es falta de ideas. Es miedo. Miedo a hacerlo mal, a que se rían, a descubrir que uno no vale, y a lo que pasaría si de verdad valiera.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Esa última parte es la más fina. Cameron insiste en que mucha gente teme el éxito tanto como el fracaso, porque el éxito obliga a seguir, a exponerse y a cambiar la vida entera. No hacer nada protege de las dos cosas y permite conservar intacta la fantasía.",
        },
        {
          forma: "texto",
          texto:
            "Contra todo eso propone dos herramientas y solo dos. Todo el resto del libro son variaciones, tareas y advertencias, pero el método cabe en dos prácticas que hay que hacer sin fallar durante doce semanas.",
        },
        {
          forma: "texto",
          texto:
            "La primera es diaria, cuesta unos treinta minutos y se hace nada más levantarse. La segunda es semanal, dura una o dos horas y hay que hacerla completamente solo, sin ninguna compañía, cosa que resulta ser mucho más difícil de lo que suena.",
        },
        {
          forma: "texto",
          texto:
            "La primera se ha convertido en la contribución más conocida de este libro, hasta el punto de que mucha gente la practica sin haber leído una página y sin saber de dónde salió.",
        },
        {
          forma: "texto",
          texto:
            "Consiste en escribir tres folios a mano, cada mañana, sin parar, sin corregir y sin releer. Y Cameron es tajante en una cosa que casi todo el mundo entiende mal: eso no es escribir. No es un diario, no es literatura y no tiene que ser bueno.",
        },
      ],
    },

    {
      titulo: "Tres páginas a mano",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Las reglas son estrictas y son pocas. Tres páginas, siempre tres. A mano, nunca en ordenador. Nada más levantarse, antes de mirar el móvil, antes del café si es posible. Sin parar a pensar y sin corregir. Y sin releerlas durante ocho semanas.",
        },
        {
          forma: "texto",
          texto:
            "Se escribe lo que haya. Que no se te ocurre nada. Que tienes sueño. La lista de la compra. Que tu jefe es idiota. Que no sabes por qué estás haciendo esto. Cameron insiste en que el contenido da exactamente igual: lo que importa es que la mano no pare.",
        },
        {
          forma: "clave",
          rotulo: "Para qué sirve",
          frase: "No es para producir material. Es para vaciar el ruido de la superficie —las preocupaciones, las listas, los reproches— y llegar al fondo, que es donde está lo que sirve.",
        },
        {
          forma: "texto",
          texto:
            "La imagen que usa es la de un desagüe atascado. Las primeras dos páginas suelen ser basura mental: lo que hay que hacer hoy, lo que pasó ayer, lo que duele. Y hacia la tercera, cuando ya no queda queja disponible, empieza a aparecer otra cosa.",
        },
        {
          forma: "texto",
          texto:
            "El detalle de escribir a mano no es nostalgia. Cameron sostiene que la mano es más lenta que la cabeza y que esa lentitud impide el modo de edición: no se puede volver atrás, no se puede borrar, no se puede reordenar. El teclado permite todo eso y por eso no vale.",
        },
        {
          forma: "texto",
          texto:
            "Y el detalle de la mañana tampoco es capricho. La idea es escribir antes de que la vigilancia se ponga en marcha, con la mente todavía a medio despertar, cuando el Censor aún no ha llegado a su puesto y no revisa nada de lo que sale.",
        },
        {
          forma: "arte",
          texto:
            "Lo de no releerlas en ocho semanas es la regla que más gente incumple y probablemente la más importante. Si uno sabe que va a releerse, escribe para ese lector futuro. En cuanto hay lector, hay actuación, y en cuanto hay actuación se acabó el volcado.",
          arte: "lectora",
        },
        {
          forma: "texto",
          texto:
            "Cameron llega a recomendar meterlas en un sobre, en una caja o en un cajón que no se abra. Algunas ediciones sugieren directamente tirarlas. Lo que se busca no es un archivo: es el efecto de haberlas escrito, que ocurre durante y no después.",
        },
        {
          forma: "texto",
          texto:
            "¿Qué respaldo tiene esto? Ninguno directo: nadie ha hecho un ensayo clínico sobre las páginas matutinas. Lo que sí existe es una literatura amplia sobre escritura expresiva, iniciada por el psicólogo James Pennebaker en los años ochenta, que apunta en una dirección parecida.",
        },
        {
          forma: "texto",
          texto:
            "Aquellos estudios encontraron que escribir sobre experiencias difíciles durante quince o veinte minutos, varios días seguidos, se asociaba a mejoras medibles en indicadores de salud y de estado de ánimo. No es lo mismo que las páginas matutinas, pero es su pariente más cercano.",
        },
        {
          forma: "clave",
          rotulo: "El efecto secundario",
          frase: "Mucha gente cuenta que a las tres semanas empieza a tomar decisiones que llevaba años posponiendo. Cameron lo atribuye a la claridad; el mecanismo probablemente sea más simple: enunciar algo cada día lo vuelve imposible de seguir ignorando.",
        },
        {
          forma: "texto",
          texto:
            "También avisa de lo que va a pasar y conviene saberlo. Las páginas producen resistencia. Habrá días de escribir tres folios de quejas sobre tener que escribir tres folios. Cameron dice que esos días son tan válidos como los demás y que a menudo son los que más mueven.",
        },
        {
          forma: "texto",
          texto:
            "Y avisa de una trampa: querer que sean buenas. En cuanto alguien empieza a escribir bonito en las páginas matutinas, ha dejado de hacer el ejercicio. Deben ser malas, torpes, repetitivas y aburridas. Su calidad es exactamente irrelevante.",
        },
        {
          forma: "texto",
          texto:
            "La segunda herramienta se llama la cita con el artista y es la que casi todo el mundo se salta. Consiste en dedicar entre una y dos horas a la semana, en solitario absoluto, a hacer algo que llame la atención de la parte curiosa y juguetona de uno mismo.",
        },
        {
          forma: "texto",
          texto:
            "Los ejemplos que da son deliberadamente triviales: ir a una tienda de telas y tocar los tejidos, entrar en un acuario, pasear por un mercado, mirar escaparates de ferretería, ir a un museo pequeño. No hace falta que sea artístico y no debe ser productivo.",
        },
        {
          forma: "arte",
          texto:
            "La regla dura es la soledad. Sin pareja, sin amigos, sin hijos. Cameron insiste porque en cuanto hay otra persona la experiencia se convierte en una conversación, y lo que se busca es precisamente el rato sin conversación, que casi nadie tiene ya.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Su justificación es de economía sencilla y es lo más convincente del libro: si las páginas matutinas son el desagüe, la cita con el artista es el grifo. Se escribe con lo que se ha metido dentro, y quien no mete nada acaba escribiendo sobre lo que ya escribió.",
        },
        {
          forma: "texto",
          texto:
            "Lo llama llenar el pozo. Y sostiene que la sequedad creativa que la gente interpreta como falta de talento es casi siempre falta de material fresco: semanas o meses consumiendo lo mismo, viendo lo mismo y hablando con las mismas personas.",
        },
        {
          forma: "texto",
          texto:
            "Cameron señala además que las citas con el artista producen una resistencia mucho mayor que las páginas. La gente escribe los tres folios y luego no encuentra la hora semanal. Y su interpretación de por qué pasa eso es la parte más incisiva del libro.",
        },
        {
          forma: "texto",
          texto:
            "Porque escribir tres páginas puede justificarse como trabajo. Pasear solo dos horas mirando telas no se puede justificar de ninguna manera, y ahí es donde aparece la creencia de fondo: que uno no merece tiempo que no produzca nada.",
        },
      ],
    },

    {
      titulo: "La cita con el artista",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El capítulo sobre la culpa es de los mejores. Cameron sostiene que mucha gente bloqueada no tiene un problema de tiempo sino de permiso: podría sacar las horas, y no se autoriza a gastarlas en algo que no rinde, que no cobra y que a nadie le importa.",
        },
        {
          forma: "texto",
          texto:
            "Y hace notar una asimetría curiosa: esa misma persona sí se autoriza a pasar dos horas viendo una serie. La diferencia es que ver una serie no expone a nada, y sentarse a escribir sí. La culpa por el tiempo suele ser miedo disfrazado de responsabilidad.",
        },
        {
          forma: "clave",
          rotulo: "Los artistas en la sombra",
          frase: "Gente que ha organizado su vida entera alrededor del arte sin hacer arte. El agente que quería escribir. El crítico que quería pintar. El profesor que quería componer.",
        },
        {
          forma: "texto",
          texto:
            "Es un concepto muy fino y probablemente el más reconocible del libro. Cameron sostiene que es una posición estable y cómoda: se está cerca de lo que se ama, se participa, se entiende, y no se corre nunca el riesgo de que juzguen algo propio.",
        },
        {
          forma: "texto",
          texto:
            "Y añade el rasgo que los delata: suelen ser durísimos juzgando el trabajo ajeno. Cuanto más severo es alguien con la obra de otros, más probable es que esté midiéndola contra la que él no se ha atrevido a hacer nunca.",
        },
        {
          forma: "texto",
          texto:
            "El origen, según ella, casi siempre está en un episodio concreto y antiguo. Un profesor que se rió de un dibujo. Un padre que dijo que de eso no se come. Un comentario en clase a los once años. Cameron dedica varias tareas a rastrear esos episodios por escrito.",
        },
        {
          forma: "arte",
          texto:
            "Es la parte más terapéutica del libro y la que más se le ha discutido. Cameron no es psicóloga y sin embargo propone ejercicios de recuperación de heridas de infancia con bastante desenvoltura. A quien tenga algo serio ahí, esto no le va a bastar y puede removerle.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Otro concepto suyo que ha hecho fortuna es el de los locos, en el original crazymakers: personas que absorben la energía y el tiempo de los demás con crisis continuas, urgencias inventadas y demandas de atención permanente.",
        },
        {
          forma: "texto",
          texto:
            "Los describe con precisión: rompen los planes de los demás, esperan disponibilidad total, crean dramas y luego los abandonan, y suelen ser personas encantadoras. Cameron sostiene que un bloqueado los busca inconscientemente, porque dan una excusa perfecta para no trabajar.",
        },
        {
          forma: "texto",
          texto:
            "Ahí está una de las críticas más serias al libro. Ese capítulo se ha leído muchas veces como una autorización para etiquetar a familiares y amigos difíciles y apartarlos. Cameron no lo dice exactamente, pero el marco lo permite con mucha facilidad.",
        },
        {
          forma: "clave",
          rotulo: "La objeción",
          frase: "Es cómodo explicar por qué uno no crea señalando a la gente que tiene alrededor. Cameron da un vocabulario para hacerlo, y ese vocabulario se puede usar para exactamente lo contrario de lo que ella pretendía.",
        },
        {
          forma: "texto",
          texto:
            "El libro habla también del dinero, y ahí es más práctico de lo que se espera. Rechaza el mito del artista que debe pasar hambre y sostiene que la pobreza no purifica nada. Recomienda tener ingresos estables y no depender del arte para pagar el alquiler.",
        },
        {
          forma: "texto",
          texto:
            "Su argumento es que la necesidad económica es el peor asesor artístico posible: obliga a producir para vender, a aceptar encargos que no interesan y a terminar antes de tiempo. Un trabajo aburrido puede proteger la obra mejor que un mecenas.",
        },
        {
          forma: "texto",
          texto:
            "Hay un capítulo sobre la comparación y los celos que aporta una idea aprovechable. Cameron propone tratar la envidia como información: si la carrera de alguien te da rabia, esa rabia está señalando con precisión lo que tú quieres y no te estás permitiendo.",
        },
        {
          forma: "texto",
          texto:
            "Y propone un ejercicio concreto: hacer una lista de a quién se envidia, de qué exactamente, y qué paso pequeño se podría dar esta semana en esa dirección. Convertir un sentimiento incómodo en una lista de tareas es lo más útil que hay en todo el libro.",
        },
        {
          forma: "arte",
          texto:
            "También insiste en un principio de tamaño: empezar siempre por lo mínimo. No escribir una novela, escribir una página. No aprender piano, tocar quince minutos. Cameron sostiene que el tamaño de la meta declarada es el mejor predictor de que no se empiece nunca.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Otra idea suya que ha calado: la creatividad no requiere permiso ni credenciales. No hace falta ser artista para hacer algo. La palabra artista, dice, es un sustantivo que nos ha impedido usar el verbo, y la gente espera a merecer el título para empezar a practicar.",
        },
        {
          forma: "texto",
          texto:
            "Y el mito que más ataca es el del rayo: la idea de que hay que esperar a estar inspirado. Su posición es la de cualquier profesional del oficio: la inspiración aparece trabajando, y quien la espera antes de empezar se pasa la vida esperando.",
        },
        {
          forma: "texto",
          texto:
            "Sobre eso monta una regla que repite mucho: es más fácil actuar hacia una nueva forma de pensar que pensar hacia una nueva forma de actuar. Primero se hace, después se entiende, y no al revés. Es lo mismo que sostiene cualquier terapia conductual.",
        },
        {
          forma: "texto",
          texto:
            "Todo eso se organiza en doce semanas con nombres que suenan a manual de autoayuda, y ahí está la parte del libro que más discusión ha generado, empezando por si esa estructura tiene alguna razón de ser más allá de imitar un programa de desintoxicación.",
        },
      ],
    },

    {
      titulo: "Los artistas en la sombra",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Cada una de las doce semanas tiene un tema —recuperar la sensación de seguridad, de identidad, de poder, de integridad, de posibilidad, de abundancia— y termina con entre cinco y diez tareas y una lista de comprobación con tres preguntas fijas.",
        },
        {
          forma: "texto",
          texto:
            "Las preguntas son siempre las mismas y son buenas: cuántos días has hecho las páginas, has hecho la cita con el artista, y ha ocurrido esta semana algo que consideres significativo para tu recuperación. Es un sistema de seguimiento minúsculo y funciona.",
        },
        {
          forma: "clave",
          rotulo: "El origen de la estructura",
          frase: "Doce semanas por los doce pasos. Una entrega diaria, un poder superior, una comunidad, un inventario personal. Cameron no lo esconde: adaptó el programa que la sacó del alcohol.",
        },
        {
          forma: "texto",
          texto:
            "Ese origen explica sus virtudes y sus defectos a la vez. La virtud: es un método probado para cambiar una conducta sostenida, con práctica diaria, hitos y rendición de cuentas. El defecto: importa un marco espiritual que muchos lectores no comparten.",
        },
        {
          forma: "texto",
          texto:
            "Las tareas son de calidad muy desigual. Algunas son excelentes: listar veinte cosas que te gusta hacer y mirar cuándo las hiciste por última vez, o escribir tu propia biografía por décadas y marcar en qué momento dejaste de hacer algo que te importaba.",
        },
        {
          forma: "texto",
          texto:
            "Otras son claramente prescindibles: escribir cartas al niño que fuiste, redactar afirmaciones positivas, imaginar vidas alternativas. Cameron reconoce que no todas funcionan para todo el mundo y recomienda hacer al menos la mitad de cada semana.",
        },
        {
          forma: "arte",
          texto:
            "Y hay una tarea que casi todos los lectores mencionan como la más dura: la privación de lectura. Durante una semana, no leer absolutamente nada. Ni libros, ni prensa, ni pantallas. La idea es que el ruido de entrada tapa la señal propia.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Escrita en 1992 esa tarea era exigente. Hoy, con el móvil, es prácticamente imposible de cumplir, y precisamente por eso es más reveladora: la mayoría descubre a las tres horas cuánto tiempo dedicaba a consumir palabras ajenas sin haberlo decidido.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, dónde falla, que falla en cosas concretas. La primera y más citada: el vocabulario espiritual. Dios, el Gran Creador, la energía que fluye, la sincronicidad. Cameron avisa y ofrece sustituir las palabras, pero el marco entero está construido sobre ellas.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es de contenido: no hay nada sobre técnica. Ni una línea sobre cómo escribir mejor, componer mejor o dibujar mejor. Es un libro sobre empezar y sostener, no sobre mejorar. Quien ya trabaja con regularidad no va a encontrar aquí gran cosa.",
        },
        {
          forma: "clave",
          rotulo: "El público real",
          frase: "Funciona con quien está parado. Con quien ya produce, sirve de poco. Y el propio libro no lo aclara, así que mucha gente lo lee esperando lo que no ofrece.",
        },
        {
          forma: "texto",
          texto:
            "La tercera es la ausencia de evidencia. Las páginas matutinas no se han estudiado. Lo que hay es investigación adyacente sobre escritura expresiva, y no es lo mismo. Cameron presenta sus herramientas con una seguridad que los datos disponibles no respaldan.",
        },
        {
          forma: "texto",
          texto:
            "La cuarta es el tono. Hay tramos de sensiblería considerable, mayúsculas emotivas y citas inspiradoras al margen de cada página. A un lector alérgico a ese registro le va a costar llegar al capítulo cuatro, y lo que hay debajo merece la pena.",
        },
        {
          forma: "texto",
          texto:
            "Y la quinta, ya mencionada: el capítulo de los locos puede leerse como permiso para culpar al entorno. Es la parte del libro con mayor potencial de hacer daño, y también la que más lectores citan como reveladora, lo cual dice algo sobre lo cómodo del diagnóstico.",
        },
        {
          forma: "texto",
          texto:
            "Hay además una crítica de fondo que se le ha hecho desde la psicología: el libro trata como bloqueo creativo cosas que a veces son depresión, ansiedad o duelo. Tres folios a mano no son un tratamiento, y presentarlos como solución universal tiene un coste.",
        },
        {
          forma: "arte",
          texto:
            "Cameron sí avisa, en un par de párrafos, de que quien esté pasando algo grave debería buscar ayuda profesional. Es una advertencia breve dentro de un libro largo que promete recuperación, y esa desproporción es un defecto real de diseño.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Lo que casi todo el mundo cree y no es verdad, empezando por lo más común: las páginas matutinas no son un diario. No se releen, no se ordenan, no se escriben para nadie y no tienen que tener sentido. Convertirlas en diario es dejar de hacer el ejercicio.",
        },
        {
          forma: "texto",
          texto:
            "Segundo: no es un libro solo para artistas. La mayoría de sus lectores no se dedica al arte. Funciona igual con alguien que quiere volver a tocar la guitarra, montar un negocio o retomar unos estudios. La palabra artista del título ha ahuyentado a mucha gente.",
        },
        {
          forma: "texto",
          texto:
            "Y tercero: la herramienta que la gente considera secundaria es la que Cameron considera decisiva. Las páginas se hacen porque son un deber reconocible. La cita con el artista se salta porque parece un capricho, y es la que llena el pozo del que se saca todo lo demás.",
        },
        {
          forma: "texto",
          texto:
            "Queda por decir qué pasa después de las doce semanas, y ahí el libro tiene una respuesta que es a la vez su mejor frase y su mayor acto de fe.",
        },
      ],
    },

    {
      titulo: "Salta y aparecerá la red",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La frase es esta: salta y la red aparecerá. Cameron la repite varias veces y la usa como cierre del curso. Es la idea de que la certeza no llega antes de moverse, y de que esperar a tenerla es la forma más eficaz de no moverse nunca.",
        },
        {
          forma: "texto",
          texto:
            "Como consejo vital es discutible y ella lo sabe. Como descripción de cómo funciona empezar algo es bastante exacta: casi nadie tiene claro que su proyecto va a salir bien antes de empezarlo, y la claridad aparece a mitad de camino o no aparece.",
        },
        {
          forma: "clave",
          rotulo: "La versión honesta",
          frase: "No es que el universo te sostenga si saltas. Es que el noventa por ciento de la información que necesitas para decidir solo existe después de haber empezado, y desde el borde no se puede obtener.",
        },
        {
          forma: "texto",
          texto:
            "Cameron habla mucho de sincronicidad: de que en cuanto uno empieza a moverse, aparecen oportunidades, personas y coincidencias que antes no estaban. Lo atribuye a una fuerza espiritual. Hay una explicación más terrenal y probablemente igual de válida.",
        },
        {
          forma: "texto",
          texto:
            "Quien empieza un proyecto habla de él, y hablar de él activa contactos. Además cambia lo que percibe: las oportunidades relacionadas con lo que uno está haciendo dejan de pasar desapercibidas. No aparece más mundo; se activa un filtro distinto.",
        },
        {
          forma: "texto",
          texto:
            "El libro termina insistiendo en que las dos herramientas se mantienen de por vida. Cameron lleva más de cuarenta años haciendo las páginas matutinas todos los días. Ha publicado más de cuarenta libros, entre novela, poesía, ensayo, teatro y guion.",
        },
        {
          forma: "arte",
          texto:
            "Ese dato es su mejor argumento y no aparece nunca en el libro. La mujer que en 1978 creía que sin alcohol no volvería a escribir una línea ha publicado, sobria, cuarenta títulos en cuarenta y cinco años. La prueba de concepto es su propia bibliografía.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "Conviene también decir qué no fue. Su matrimonio con Martin Scorsese duró poco más de un año y la relación con Hollywood le dejó bastante amargura, que asoma en varios capítulos cuando habla de industrias que consumen artistas y los escupen.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un dato que ayuda a leer el libro con la distancia adecuada: durante años, el propio libro le impidió ser tomada en serio como escritora. Se convirtió en la señora de las páginas matutinas, y sus novelas y su poesía quedaron enterradas bajo el fenómeno.",
        },
        {
          forma: "texto",
          texto:
            "El éxito llegó además muy despacio. Ninguna editorial grande lo quiso; se publicó con una tirada modesta y creció durante años por recomendación boca a boca, sobre todo entre guionistas de Los Ángeles. Tardó casi una década en ser un éxito de ventas.",
        },
        {
          forma: "clave",
          rotulo: "La recomendación práctica",
          frase: "Si el vocabulario espiritual estorba, hacer solo las dos herramientas durante tres meses y saltarse el resto del libro. Ahí está el noventa por ciento del valor.",
        },
        {
          forma: "texto",
          texto:
            "Y para quien las quiera probar sin comprar nada: tres folios a mano al levantarse, cada día, sin releer, más una hora a la semana en solitario haciendo algo inútil y curioso. Eso es el método completo. Todo lo demás son doce semanas de andamiaje.",
        },
        {
          forma: "texto",
          texto:
            "Cameron ha escrito varias continuaciones —sobre el dinero, sobre escribir, sobre envejecer, sobre caminar— y ninguna ha aportado nada nuevo de peso. Es un caso claro de libro único: dio con dos herramientas buenas y lleva treinta años reformulándolas.",
        },
        {
          forma: "texto",
          texto:
            "Su influencia práctica, en cambio, es enorme y bastante invisible. Buena parte de los consejos que circulan hoy sobre escritura diaria, sobre no editar mientras se escribe y sobre proteger tiempo para pasear vienen, directa o indirectamente, de este libro.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una idea suya que ha resistido especialmente bien el paso de treinta años: que la creatividad es un asunto de cantidad antes que de calidad, y que la única variable que un principiante controla de verdad es cuántas veces se sienta a hacerlo.",
        },
        {
          forma: "arte",
          texto:
            "Eso coincide con lo que dicen casi todos los oficios. El que hace muchas piezas malas acaba haciendo alguna buena; el que espera a hacer una buena no hace ninguna. Cameron llegó a esa conclusión desde el otro lado, saliendo de una adicción, y da igual: es la misma.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "El balance justo es este: es un libro con un vocabulario que echará atrás a mucha gente, con capítulos flojos y con una promesa terapéutica que excede lo que puede cumplir, y con dos herramientas que funcionan y que han desatascado a millones de personas.",
        },
        {
          forma: "texto",
          texto:
            "Cameron insiste en que no hay que creerse nada de lo que dice y que lo único que pide son doce semanas de práctica. Es una posición honrada: propone un experimento con un coste bajo y un plazo definido, y deja el juicio para después de haberlo hecho.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una frase suya, mucho menos famosa que la de la red, que es la que mejor resume el libro entero: no se trata de que llegues a ser un artista, se trata de que dejes de impedírtelo.",
        },
        {
          forma: "texto",
          texto:
            "Esa es, en el fondo, la única promesa que hace y la única que puede cumplir. No enseña a hacer nada. Quita cosas de en medio. Y para una cantidad enorme de gente que llevaba años sin empezar, resultó que era exactamente lo que hacía falta.",
        },
      ],
    },
  ],
};

export const DIARIOS_FRIDA: Resumen = {
  id: "diarios-frida",
  titulo: "El diario de Frida Kahlo",
  autor: "Frida Kahlo",
  ano: 1995,
  gancho: "Ciento setenta páginas que nunca quiso que se publicaran. Se editaron en facsímil cuarenta y un años después de su muerte, con las manchas incluidas.",
  porQue:
    "Porque es el documento más íntimo del arte del siglo XX, y porque leerlo obliga a preguntarse qué derecho tiene nadie a leer el cuaderno privado de una muerta.",
  partes: [
    {
      titulo: "El pasamanos",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Ciudad de México, 17 de septiembre de 1925, a media tarde. Un autobús de madera recién estrenado circula por la calzada de Tlalpan. Dentro va una chica de dieciocho años que vuelve de clase con su novio. Se llama Frida Kahlo y estudia para entrar en Medicina.",
        },
        {
          forma: "texto",
          texto:
            "Un tranvía embiste el autobús por el costado. El vehículo se dobla y se rompe. Un pasamanos de hierro entra por el costado izquierdo de Frida y sale por su pelvis. En el mismo golpe se revienta un paquete de polvo de oro que llevaba otro pasajero.",
        },
        {
          forma: "clave",
          rotulo: "La imagen que ella contó siempre",
          frase: "Quedó desnuda, empalada por una barra de hierro y cubierta de polvo de oro. Alguien gritó que había que sacarle la barra. Se la sacaron ahí mismo, en la calle, y ella dijo que ese fue el peor dolor.",
        },
        {
          forma: "texto",
          texto:
            "El parte médico es una enumeración: columna vertebral fracturada en tres puntos, clavícula rota, dos costillas, pelvis rota en tres sitios, pierna derecha con once fracturas, pie derecho aplastado, hombro dislocado. Estuvo un mes en el hospital y meses más en cama.",
        },
        {
          forma: "texto",
          texto:
            "Ya venía con daños. A los seis años había tenido poliomielitis, que le dejó la pierna derecha más delgada y más corta. En el colegio la llamaban Frida la coja. Ella se ponía varios calcetines y un zapato con alza, y jugaba al fútbol para demostrar que podía.",
        },
        {
          forma: "texto",
          texto:
            "Tras el accidente vinieron más de treinta operaciones a lo largo de su vida. Corsés de yeso, de cuero y de acero que tenía que llevar meses seguidos. Períodos enteros inmovilizada boca arriba. El dolor no se le fue nunca del todo en los veintinueve años que le quedaban.",
        },
        {
          forma: "arte",
          texto:
            "Y ahí ocurre lo que convierte una desgracia en una obra: su madre mandó construir un caballete especial que se podía usar tumbada, y colocó un espejo en el dosel de la cama. Frida empezó a pintar en 1926, en la cama, y el único modelo disponible era ella misma.",
          arte: "lectora",
        },
        {
          forma: "texto",
          texto:
            "Esa es la explicación práctica de por qué alrededor de un tercio de su obra son autorretratos, y ella lo dijo así: se pintaba a sí misma porque estaba mucho tiempo sola y porque era el tema que mejor conocía. No hay ninguna teoría detrás, hay un espejo en un techo.",
        },
        {
          forma: "texto",
          texto:
            "Pintó en toda su vida unas ciento cuarenta y tres obras. Es una cantidad pequeña para una pintora de su fama, y la razón también es física: hubo temporadas largas en las que no podía sostener un pincel, y otras en las que estaba en un hospital.",
        },
        {
          forma: "texto",
          texto:
            "El diario del que trata este libro es muy posterior. Lo llevó los últimos diez años de su vida, entre 1944 y 1954, y son unas ciento setenta páginas de un cuaderno con tapas rojas, escritas y pintadas con tinta, acuarela, lápices de colores y lo que hubiera a mano.",
        },
        {
          forma: "clave",
          rotulo: "Qué clase de objeto es",
          frase: "No es un libro. Es un cuaderno privado publicado en facsímil en 1995, cuarenta y un años después de su muerte, con las manchas, los tachones, las páginas ilegibles y los dibujos hechos encima del texto.",
        },
        {
          forma: "texto",
          texto:
            "No está ordenado por fechas. Muy pocas entradas llevan una. No hay narración, no hay relato de los días y no hay explicación de nada. Hay listas de palabras, cartas de amor que nunca envió, manchas de tinta convertidas en figuras, consignas políticas y frases sueltas.",
        },
        {
          forma: "texto",
          texto:
            "Una parte considerable procede de un juego surrealista: dejar caer una gota de tinta, doblar la hoja y ver qué aparece. Frida hacía eso y luego dibujaba encima lo que había visto: caras, animales, pies, ojos. Después escribía alrededor de la figura.",
        },
        {
          forma: "texto",
          texto:
            "Y aquí conviene aclarar algo que ella repitió toda su vida y que casi nadie respeta. Los surrealistas franceses la reclamaron como una de los suyos. André Breton escribió sobre ella y organizó su exposición en París en 1939. Frida los detestaba.",
        },
        {
          forma: "arte",
          texto:
            "Su frase sobre el asunto es de las más citadas y de las peor entendidas: dijo que nunca pintó sueños, que pintó su propia realidad. No era una boutade. Cuando pintaba un aborto o una columna rota, estaba pintando lo que le había pasado la semana anterior.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "De los surrealistas parisinos dejó escrito, en una carta desde París, que eran unos intelectuales podridos, que se pasaban el día en los cafés discutiendo y que no le interesaban en absoluto. Volvió a México en cuanto pudo.",
        },
        {
          forma: "texto",
          texto:
            "El diario recoge también otra cosa que la iconografía de camiseta suele borrar: era comunista militante. Se afilió al Partido Comunista Mexicano en los años veinte, y en las páginas del cuaderno hay retratos de dirigentes, consignas y declaraciones políticas explícitas.",
        },
        {
          forma: "texto",
          texto:
            "Una de las últimas entradas del cuaderno es una declaración de fe política y de agradecimiento por haber podido dedicar su obra al partido. La mujer que hoy aparece en bolsos y en tazas escribió eso en su cuaderno privado semanas antes de morir.",
        },
        {
          forma: "texto",
          texto:
            "Pero el asunto que ocupa más páginas del diario no es la política, ni la enfermedad, ni la pintura. Es un hombre veinte años mayor que ella, con el que se casó dos veces, del que se divorció una y con el que mantuvo la relación más documentada del arte mexicano.",
        },
        {
          forma: "texto",
          texto:
            "Su madre dijo de aquella boda que era el matrimonio de un elefante y una paloma.",
        },
        {
          forma: "texto",
          texto:
            "Se llamaba Diego Rivera y era, en aquel momento, el pintor más famoso de México.",
        },
      ],
    },

    {
      titulo: "El espejo del dosel",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Se casaron el 21 de agosto de 1929. Ella tenía veintidós años y él cuarenta y dos. Él pesaba más de cien kilos y medía casi metro noventa; ella medía metro sesenta y estaba delgadísima. La diferencia física era tan llamativa que se convirtió en un chiste familiar.",
        },
        {
          forma: "texto",
          texto:
            "Rivera era ya una figura internacional: muralista, comunista, con encargos del Estado mexicano y después de industriales estadounidenses. Frida era, para casi todo el mundo, la mujer de Rivera. Esa asimetría duró prácticamente toda su vida.",
        },
        {
          forma: "clave",
          rotulo: "La proporción de fama",
          frase: "En vida de Frida, la prensa la trataba como la esposa pintora de un gran muralista. Su primera exposición individual en México llegó en 1953, un año antes de morir.",
        },
        {
          forma: "texto",
          texto:
            "El matrimonio fue una catástrofe sostenida con periodos de felicidad enorme. Los dos tuvieron amantes. Él, muchos y en público. Ella, hombres y mujeres, entre ellos el fotógrafo Nickolas Muray y, según casi todos los biógrafos, León Trotski durante su exilio en México.",
        },
        {
          forma: "texto",
          texto:
            "Lo que la destrozó fue una traición concreta: Rivera tuvo una relación con Cristina, la hermana pequeña de Frida, que vivía cerca y con la que estaba muy unida. Se enteró en 1934 y fue el golpe emocional que más aparece, transformado, en su pintura posterior.",
        },
        {
          forma: "texto",
          texto:
            "Se divorciaron en 1939 y se volvieron a casar en diciembre de 1940, en San Francisco, con condiciones nuevas: cuentas separadas, sin relaciones sexuales entre ellos y con Frida pagando sus propios gastos. El acuerdo lo propuso ella.",
        },
        {
          forma: "arte",
          texto:
            "El diario está lleno de textos dirigidos a él y son de una intensidad difícil de sostener. Le llama su niño, su universo, su Diego. Escribe que él es todo lo que existe y que ella nunca ha estado sola. Y en la página siguiente hay una figura rota y una mancha de tinta.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Hay una entrada en la que enumera lo que él es para ella y va subiendo: mi niño, mi novio, mi amante, mi madre, yo misma, el universo. La progresión termina donde termina siempre en ese cuaderno: en la desaparición de la frontera entre los dos.",
        },
        {
          forma: "texto",
          texto:
            "Y también hay reproche. Escribe sobre el dolor de esperar, sobre la humillación y sobre las horas perdidas. No lo idealiza en todas las páginas: lo idealiza en unas y lo destroza en otras, a menudo separadas por dos hojas y sin ninguna fecha entre medias.",
        },
        {
          forma: "texto",
          texto:
            "La otra herida que atraviesa el cuaderno son los embarazos que no llegaron a término. Tuvo al menos un aborto espontáneo grave, en Detroit en 1932, del que salió una de sus pinturas más brutales, y varias interrupciones más por consejo médico.",
        },
        {
          forma: "clave",
          rotulo: "Lo que pintó con eso",
          frase: "En un país católico de 1932, una mujer pintó su propio aborto: ella desnuda sobre una cama de hospital, sangrando, con un feto y una pelvis flotando atados por venas rojas. No existía nada parecido.",
        },
        {
          forma: "texto",
          texto:
            "Ese es el rasgo que hace de Kahlo algo más que una biografía triste. Pintó cosas que no se pintaban: el aborto, el cuerpo médico, los corsés, la columna partida, la cirugía, el dolor crónico. Convirtió en materia pictórica un territorio que estaba prohibido y no nombrado.",
        },
        {
          forma: "texto",
          texto:
            "Y lo hizo con un lenguaje visual que viene del arte popular mexicano y no de la vanguardia europea. Sus cuadros tienen el tamaño, el formato y la estructura de los exvotos: esas pequeñas láminas votivas que se cuelgan en las iglesias para agradecer un milagro.",
        },
        {
          forma: "texto",
          texto:
            "Un exvoto muestra la desgracia —el accidente, la enfermedad— con una cinta escrita abajo explicando qué pasó y dando las gracias. Frida coleccionaba exvotos, tenía cientos en su casa, y copió esa estructura exacta en varias de sus obras más conocidas.",
        },
        {
          forma: "arte",
          texto:
            "Esa filiación cambia la lectura del cuadro. No es una alucinación surrealista: es una lámina votiva sin santo. Se muestra la desgracia con la misma frontalidad, con la misma inscripción explicativa, y falta únicamente la figura celestial que agradecer.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "El diario funciona igual. Muchas páginas son casi un exvoto: una figura sufriente, una anotación al lado y ninguna interpretación. No hay elaboración literaria, no hay metáfora buscada. Hay una constatación y el objeto pintado al lado.",
        },
        {
          forma: "texto",
          texto:
            "Hay además una sección del cuaderno dedicada al color que es fascinante y que casi nadie cita. Frida hace una lista de colores y anota al lado lo que significan para ella, y las asociaciones no se parecen a ninguna teoría cromática conocida.",
        },
        {
          forma: "texto",
          texto:
            "El verde lo describe como luz tibia y buena. El amarillo como locura, enfermedad y miedo, y añade que también es el sol y la alegría. El azul cobalto como electricidad y pureza, amor. El verde hoja como hojas, tristeza, ciencia, y que Alemania entera es de ese color.",
        },
        {
          forma: "texto",
          texto:
            "Esa lista es lo más cerca que estuvo de escribir una poética, y ocupa una página. No hay más teoría en todo el cuaderno. Cuando alguien le preguntaba por su método, contestaba que pintaba lo que le pasaba y ya está.",
        },
        {
          forma: "texto",
          texto:
            "El último tramo del diario cambia de tono, y el cambio tiene una fecha exacta. En agosto de 1953, después de años de infecciones y de gangrena, los médicos le amputaron la pierna derecha por debajo de la rodilla.",
        },
        {
          forma: "texto",
          texto:
            "Y lo que escribió en el cuaderno pocas semanas después es la frase más conocida de todo el volumen.",
        },
      ],
    },

    {
      titulo: "Diego",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La frase, escrita junto a un dibujo de dos pies sobre una columna, dice: pies, para qué los quiero, si tengo alas para volar. Está fechada en 1953, poco después de la amputación, y se ha reproducido en carteles, camisetas y tatuajes por todo el mundo.",
        },
        {
          forma: "texto",
          texto:
            "Y aquí es donde el cuaderno se vuelve más incómodo, porque esa frase se lee siempre como una declaración de fortaleza y en el cuaderno está rodeada de páginas que dicen lo contrario. La misma mano escribe unas hojas más allá que ya no aguanta más.",
        },
        {
          forma: "clave",
          rotulo: "El problema de citar un diario",
          frase: "En un cuaderno privado no hay tesis. Hay estados de ánimo de distintos días sin orden. Sacar una frase y convertirla en lema es exactamente lo que un diario no permite hacer honestamente.",
        },
        {
          forma: "texto",
          texto:
            "Después de la amputación pasó meses hundida. Los testimonios de quienes la visitaban describen dolores muy fuertes, dosis crecientes de morfina, periodos de confusión y varios intentos de quitarse la vida según algunas fuentes, aunque ese punto está discutido.",
        },
        {
          forma: "texto",
          texto:
            "El cuaderno de esos meses tiene la letra cada vez más grande y más temblorosa. Las líneas se salen del renglón. Hay palabras repetidas y frases que se interrumpen. Es un documento clínico además de literario, y verlo en facsímil resulta bastante duro.",
        },
        {
          forma: "texto",
          texto:
            "Aun así siguió pintando. Sus últimos cuadros son naturalezas muertas con frutas partidas, sandías abiertas, banderas pequeñas y palabras escritas dentro de la propia pintura. Es una obra tardía distinta, más simple, hecha con menos fuerza física disponible.",
        },
        {
          forma: "arte",
          texto:
            "Su último cuadro conocido es una sandía abierta sobre la que escribió, con el pincel, las palabras viva la vida. Tenía la pierna amputada, estaba en cama y le quedaban días. Esa combinación resume el problema entero de interpretar a Frida Kahlo.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Porque se puede leer como afirmación heroica o como despedida, y las dos lecturas son defendibles. La cultura popular ha elegido masivamente la primera. El cuaderno permite las dos, y probablemente ella pensaba las dos cosas en semanas distintas.",
        },
        {
          forma: "texto",
          texto:
            "En abril de 1953 ocurrió el otro episodio de su último año, y es una de las mejores escenas de la historia del arte del siglo XX. La galería de Lola Álvarez Bravo, en Ciudad de México, organizó su primera exposición individual en su propio país.",
        },
        {
          forma: "texto",
          texto:
            "Los médicos le prohibieron ir. Estaba demasiado enferma para levantarse. La noche de la inauguración, la sala estaba llena de gente cuando se oyó una sirena en la calle: había llegado una ambulancia.",
        },
        {
          forma: "clave",
          rotulo: "La cama en la galería",
          frase: "Habían llevado su cama con dosel a la sala esa misma tarde. La sacaron de la ambulancia en camilla, la acostaron en su cama en medio de la exposición, y recibió a los invitados desde ahí.",
        },
        {
          forma: "texto",
          texto:
            "Los testimonios cuentan que estuvo horas, hablando, brindando y cantando corridos con los que se acercaban a la cama. Fue la única exposición individual que vio en México. Murió quince meses después.",
        },
        {
          forma: "texto",
          texto:
            "La fecha oficial es el 13 de julio de 1954, siete días después de cumplir cuarenta y siete años. El certificado dice embolia pulmonar. No se practicó autopsia. La sospecha de una sobredosis, intencionada o no, ha circulado desde entonces sin confirmarse jamás.",
        },
        {
          forma: "texto",
          texto:
            "La última entrada del diario está unas páginas antes. Es un dibujo de una figura oscura con alas, un ángel negro, y debajo unas palabras escritas con letra grande e insegura.",
        },
        {
          forma: "arte",
          texto:
            "Dicen: espero alegre la salida, y espero no volver jamás. Es lo último que escribió en el cuaderno. Está en la última página utilizada, y el resto del volumen quedó en blanco.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Once días antes de morir había salido a la calle en silla de ruedas, con fiebre, a una manifestación contra la intervención estadounidense en Guatemala. Hay fotografías. Es lo último que hizo en público y encaja mal con casi todos los usos posteriores de su imagen.",
        },
        {
          forma: "texto",
          texto:
            "Diego Rivera escribió después que el día de la muerte de Frida fue el más trágico de su vida, y que se dio cuenta demasiado tarde de que la parte más maravillosa de su vida había sido el amor por ella. Murió tres años más tarde.",
        },
        {
          forma: "texto",
          texto:
            "Su casa de Coyoacán, la Casa Azul, se convirtió en museo en 1958. Rivera dejó instrucciones de que un baño con parte de sus pertenencias permaneciera cerrado durante quince años después de su propia muerte. Se abrió en 2004, cincuenta años después.",
        },
        {
          forma: "texto",
          texto:
            "Dentro había trescientas prendas de ropa, corsés ortopédicos pintados a mano, prótesis, medicamentos, cartas y fotografías. Ese hallazgo, medio siglo tarde, alimentó otra oleada de exposiciones y de libros sobre ella.",
        },
        {
          forma: "texto",
          texto:
            "El diario se había publicado nueve años antes, en 1995, en edición facsímil con transcripción y un ensayo de Carlos Fuentes. Y su publicación plantea una pregunta que el propio libro no resuelve y que conviene hacerse antes de abrirlo.",
        },
        {
          forma: "texto",
          texto:
            "Antes de esa pregunta conviene apuntar un dato de la Casa Azul que ayuda a entender el cuaderno. Frida vivió casi toda su vida en la casa donde nació, en Coyoacán, y murió en la misma habitación. El diario se escribió, en su mayor parte, en esa cama y en ese cuarto.",
        },
        {
          forma: "texto",
          texto:
            "La casa estaba llena de objetos que aparecen dibujados en sus páginas: exvotos colgados en las paredes, calaveras de azúcar, muñecas, esqueletos de cartón, retratos de Marx y de Lenin, monos y perros que criaba en el patio. El cuaderno es un inventario de esa habitación.",
        },
        {
          forma: "texto",
          texto:
            "¿Quién autorizó esto?",
        },
      ],
    },

    {
      titulo: "Pies para qué los quiero",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Frida Kahlo no dejó ninguna instrucción sobre este cuaderno. No lo escribió para publicar, no lo revisó, no lo ordenó y no lo mencionó en ningún testamento conocido. Es un objeto privado que salió a la luz cuarenta y un años después de su muerte.",
        },
        {
          forma: "texto",
          texto:
            "Esa es la objeción de fondo y no tiene una respuesta cómoda. Publicarlo aportó material valiosísimo para entender su obra, y también convirtió en producto editorial las páginas donde una mujer con dolores atroces escribía cosas que no quería que leyera nadie.",
        },
        {
          forma: "clave",
          rotulo: "La comparación",
          frase: "Con Kafka al menos hubo una instrucción explícita —quemarlo todo— que Max Brod desobedeció. Aquí no hay ni siquiera eso: hay un cuaderno que apareció y una industria que lo esperaba.",
        },
        {
          forma: "texto",
          texto:
            "El segundo problema del libro es de formato. No es una lectura: es un facsímil. Hay páginas ilegibles, textos escritos encima de dibujos, tinta corrida y frases que se cortan. La transcripción ayuda y no arregla que el objeto no está pensado para leerse seguido.",
        },
        {
          forma: "texto",
          texto:
            "El tercero es interpretativo y es el que más daño hace. El diario se usa constantemente para psicoanalizar sus cuadros: se busca en el cuaderno la explicación de cada símbolo, como si la pintura fuera un jeroglífico que la libreta descifra.",
        },
        {
          forma: "texto",
          texto:
            "Esa lectura es exactamente la que Kahlo rechazó toda su vida. Insistió en que pintaba realidades y no símbolos, y en que un venado atravesado por flechas no era una alegoría del alma: era ella con nueve intervenciones quirúrgicas y con un dolor que no se iba.",
        },
        {
          forma: "arte",
          texto:
            "Hay una diferencia de fondo entre las dos lecturas. Tratarla como enigma la convierte en un caso clínico interesante. Tratarla como pintora obliga a mirar la composición, el color, el formato de exvoto y la decisión técnica de pintar en pequeño y con detalle.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Y el cuarto problema es el más grande de todos y no es del libro sino de lo que ha ocurrido alrededor: la conversión de Frida Kahlo en mercancía global. Su cara está en bolsos, fundas de móvil, tazas, calcetines, envases de cosmética y muñecas.",
        },
        {
          forma: "texto",
          texto:
            "Esa operación ha requerido borrar casi todo lo que ella era. La comunista militante que fue a manifestarse en silla de ruedas once días antes de morir aparece hoy como icono estético de empoderamiento individual, vendido por empresas que ella habría atacado.",
        },
        {
          forma: "texto",
          texto:
            "El proceso se puede fechar. Su reputación empezó a crecer en los años setenta con el feminismo y con el movimiento chicano, y explotó tras la biografía que Hayden Herrera publicó en 1983. Antes de eso era una figura secundaria incluso en México.",
        },
        {
          forma: "clave",
          rotulo: "El dato de mercado",
          frase: "En vida vendió muy pocos cuadros. Décadas después, sus obras alcanzaron cifras de decenas de millones de dólares. Ninguna de esas cifras la vio ella, que se pasó la vida dependiendo del dinero de su marido.",
        },
        {
          forma: "texto",
          texto:
            "Lo que casi todo el mundo cree y no es verdad, empezando por lo más repetido: no era surrealista. Lo negó explícitamente, despreció a los surrealistas franceses por escrito y sostuvo siempre que pintaba hechos y no sueños. La etiqueta se la pusieron ellos.",
        },
        {
          forma: "texto",
          texto:
            "Segundo malentendido: no fue famosa en vida. Fue conocida en círculos artísticos, expuso en Nueva York y en París y tuvo cierta prensa, sobre todo por excéntrica. Su única exposición individual en México fue quince meses antes de morir.",
        },
        {
          forma: "texto",
          texto:
            "Tercero: no nació en 1910. Nació el 6 de julio de 1907 y ella misma cambió la fecha para hacerla coincidir con el estallido de la Revolución mexicana. Es un dato menor y dice mucho: se construyó a sí misma como personaje desde muy joven.",
        },
        {
          forma: "arte",
          texto:
            "Y cuarto, el más difícil de aceptar: el cuaderno no explica sus cuadros. Es material paralelo, escrito en los últimos diez años de su vida, cuando la mayor parte de su obra ya estaba pintada. Usarlo como clave de lectura de los años treinta es un anacronismo.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí aporta, y es mucho, es una cosa que ninguna biografía puede dar: la textura de una mano. Ver cómo la letra crece y se descompone en los últimos meses, cómo las manchas se convierten en figuras, cómo una frase de amor se corta a la mitad.",
        },
        {
          forma: "texto",
          texto:
            "Es un documento sobre el trabajo del dolor y sobre lo que hace alguien con un cuaderno y unos lápices cuando lleva meses sin poder levantarse. Y en ese sentido concreto no tiene equivalente en la historia del arte moderno.",
        },
        {
          forma: "texto",
          texto:
            "También corrige una imagen: Frida Kahlo no era una mártir silenciosa. El cuaderno está lleno de humor, de palabrotas, de juegos de palabras, de dibujos absurdos y de listas sin sentido. Se reía mucho, y eso desaparece por completo en la iconografía posterior.",
        },
        {
          forma: "texto",
          texto:
            "Los testimonios coinciden: hablaba mal, contaba chistes verdes, bebía tequila y era divertidísima. La imagen solemne de mujer sufriente con flores en el pelo es una construcción de otros, y este cuaderno es una de las pocas cosas que la desmiente desde dentro.",
        },
        {
          forma: "texto",
          texto:
            "Queda una última cuestión que el libro plantea sin querer y que es la más interesante de todas: qué habría dicho ella de que lo estemos leyendo.",
        },
        {
          forma: "texto",
          texto:
            "No hay forma de saberlo, y esa incertidumbre es parte del objeto que uno tiene en las manos.",
        },
      ],
    },

    {
      titulo: "La cama en la galería",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Hay un argumento a favor de la publicación y merece ser oído. Kahlo se pintó a sí misma cincuenta y cinco veces. Se expuso desnuda, sangrando, abierta en canal y con el cuerpo roto, y colgó esos cuadros en galerías de Nueva York y de París.",
        },
        {
          forma: "texto",
          texto:
            "Es difícil sostener que una mujer que pintó su propio aborto para que lo viera todo el mundo tuviera una idea convencional de la intimidad. Su obra entera consiste en enseñar lo que no se enseña, y el cuaderno es una versión más de esa operación.",
        },
        {
          forma: "clave",
          rotulo: "El contraargumento",
          frase: "Pintar algo para exponerlo es una decisión. Escribirlo en un cuaderno privado es exactamente lo contrario. La diferencia entre las dos cosas es precisamente el consentimiento.",
        },
        {
          forma: "texto",
          texto:
            "El libro no resuelve esa tensión y probablemente no se puede resolver. Lo que sí se puede es leerlo sabiendo lo que es: un objeto obtenido sin permiso, valiosísimo, publicado por herederos e instituciones cuarenta y un años después.",
        },
        {
          forma: "texto",
          texto:
            "La edición de 1995 incluye un ensayo introductorio de Carlos Fuentes, la transcripción completa y la traducción cuando hace falta, más un aparato de notas. Es una edición cuidada, y también es un libro caro y grande, más para mirar que para leer.",
        },
        {
          forma: "texto",
          texto:
            "Su lectura recomendable es en compañía de otra cosa. Solo, resulta fragmentario e impenetrable. Junto a una biografía o a un catálogo de su obra, se convierte en el complemento que faltaba: la voz sin editar de la persona que pintó aquellos cuadros.",
        },
        {
          forma: "arte",
          texto:
            "Y funciona sobre todo por contraste. Los cuadros son composiciones cerradas, pensadas, con simetrías y con una técnica minuciosa. El cuaderno es lo contrario: caótico, sin corregir, con la mano temblando. Ver las dos cosas juntas enseña dónde estaba el trabajo.",
          arte: "lectora",
        },
        {
          forma: "texto",
          texto:
            "Porque eso es lo que la mitología borra. Frida Kahlo no pintaba a chorro desde el sufrimiento: pintaba despacio, con pinceles finos, corrigiendo, sobre superficies pequeñas, usando una técnica aprendida y una tradición concreta, la del retablo popular mexicano.",
        },
        {
          forma: "texto",
          texto:
            "El dolor le dio los temas. La técnica se la trabajó. Y esa distinción es la que se pierde cuando se convierte en un icono del sentimiento puro, porque entonces deja de ser una pintora y pasa a ser un caso.",
        },
        {
          forma: "texto",
          texto:
            "Su obra completa, ciento cuarenta y tres cuadros, se puede recorrer en un día. Es un catálogo pequeño y notablemente coherente: una mujer mirándose en un espejo colocado sobre una cama durante casi treinta años, y anotando lo que veía.",
        },
        {
          forma: "clave",
          rotulo: "La aportación real",
          frase: "Incorporó al arte occidental el cuerpo enfermo visto desde dentro. Antes de ella, el dolor físico en pintura era el de los mártires y el de las batallas. El de un quirófano y una cama de hospital no estaba.",
        },
        {
          forma: "texto",
          texto:
            "Ese es su lugar histórico, más allá de la biografía y de la iconografía comercial. Y es un lugar que se puede defender sin recurrir a su vida: los cuadros lo sostienen solos, colgados en una pared y sin ninguna explicación al lado.",
        },
        {
          forma: "texto",
          texto:
            "El cuaderno añade una capa a eso y también añade un riesgo, que es el de leer los cuadros como síntomas. La mejor manera de usarlo es al revés: mirar primero la pintura como pintura, y abrir el cuaderno después, sabiendo que es material en bruto.",
        },
        {
          forma: "texto",
          texto:
            "Hay una entrada del diario que resume mejor que ninguna otra lo que hay dentro. Escribió que le habían amputado la pierna hacía seis meses, que le habían dado siglos de tortura, y que en algunos momentos casi perdió la razón.",
        },
        {
          forma: "arte",
          texto:
            "Y a continuación, en la misma entrada, escribió que seguía teniendo ganas de suicidarse y que solo la pintura la detenía. Esa frase está en el cuaderno, junto a otras que dicen que espera alegre la salida, y las dos son igual de verdad.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Un diario no tiene tesis. Tiene días. Y la mayor virtud de esta edición es que no ordena nada: reproduce las páginas como estaban, en desorden, con las contradicciones intactas y sin ningún intento de construir una narrativa coherente.",
        },
        {
          forma: "texto",
          texto:
            "Eso es lo contrario de lo que hace la industria que vende su cara. La camiseta necesita una frase; el cuaderno tiene ciento setenta páginas que se desmienten unas a otras. La segunda cosa es la persona; la primera es el producto.",
        },
        {
          forma: "texto",
          texto:
            "Si hay algo que este libro consigue, es hacer imposible la versión simplificada. Quien lo abra esperando encontrar la fuente de las frases motivacionales se va a encontrar con una mujer con morfina escribiendo torcido a las tres de la mañana.",
        },
        {
          forma: "texto",
          texto:
            "Y con una lista de colores, y con un dibujo hecho encima de una mancha de tinta, y con una carta de amor a un hombre que le fue infiel con su hermana, y con una consigna política, y con un pie dibujado sobre una columna.",
        },
        {
          forma: "texto",
          texto:
            "Todo eso en el mismo cuaderno, sin fechas y sin orden, exactamente como pasan las cosas.",
        },
        {
          forma: "texto",
          texto:
            "Y al final, en la última página escrita, un ángel negro y siete palabras sobre la salida.",
        },
      ],
    },
  ],
};

export const VIDA_DALI: Resumen = {
  id: "vida-dali",
  titulo: "La vida secreta de Salvador Dalí",
  autor: "Salvador Dalí",
  ano: 1942,
  gancho: "Sus padres le pusieron el nombre de un hermano muerto nueve meses antes de nacer él. A los cinco años lo llevaron a su tumba y le dijeron que era su reencarnación.",
  porQue:
    "Es la autobiografía más mentirosa que se ha escrito y sigue siendo imprescindible, porque la mentira es exactamente el objeto de estudio.",
  partes: [
    {
      titulo: "La tumba del hermano",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Cementerio de Figueres, Cataluña, hacia 1909. Un matrimonio lleva a su hijo de cinco años ante una lápida y le enseña un nombre grabado en la piedra. El nombre es Salvador Dalí, y es exactamente el mismo que el del niño que está mirando.",
        },
        {
          forma: "texto",
          texto:
            "El hermano mayor había muerto el 1 de agosto de 1903, con veintiún meses, de una gastroenteritis. El segundo hijo nació nueve meses y diez días después, el 11 de mayo de 1904. Los padres le pusieron el mismo nombre y no cambiaron nada de la casa.",
        },
        {
          forma: "clave",
          rotulo: "Lo que le dijeron",
          frase: "Que él era la reencarnación de su hermano. Ese es el primer recuerdo consciente que el libro relata, y es también el único episodio de la infancia que todos sus biógrafos dan por cierto.",
        },
        {
          forma: "texto",
          texto:
            "En la casa había un retrato del hermano muerto colgado en el dormitorio de los padres. Dalí escribió sobre eso durante toda su vida y volvió al asunto en cuadros, en entrevistas y en varios libros. Es el material más recurrente de su obra.",
        },
        {
          forma: "texto",
          texto:
            "Su formulación en este libro es de las pocas frases suyas que se citan sin ironía: dice que se parecían como dos gotas de agua pero que tenían reflejos distintos, y que el hermano era probablemente una primera versión de sí mismo, concebida demasiado en absoluto.",
        },
        {
          forma: "texto",
          texto:
            "Y añade la consecuencia práctica: que se pasó la infancia entera intentando demostrar que él no era el otro, que estaba vivo y que era distinto, y que para conseguirlo tenía que hacer constantemente cosas que llamaran la atención.",
        },
        {
          forma: "arte",
          texto:
            "Ahí está, según él mismo, el origen de todo lo demás: el bigote, las declaraciones absurdas, las entradas triunfales, los escándalos calculados. Un niño compitiendo con un muerto por existir, que a los treinta y siete años escribió una autobiografía para consolidarlo.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "El libro se publicó en 1942, en Nueva York, cuando él tenía treinta y ocho años. Lo escribió en francés y salió primero en inglés. Vivía exiliado en Estados Unidos desde 1940, huyendo de la guerra europea, y necesitaba construirse una posición allí.",
        },
        {
          forma: "texto",
          texto:
            "Ese dato es esencial para leerlo. No son las memorias de un anciano que hace balance: son las de un hombre en mitad de su carrera, en un país nuevo, que necesita vender una imagen y que sabe perfectamente cuál le conviene.",
        },
        {
          forma: "texto",
          texto:
            "Y avisa desde la primera página de lo que va a hacer. Dice, con distintas formulaciones a lo largo del libro, que la única diferencia entre él y un loco es que él no está loco. Es una declaración de método: lo que viene es una construcción deliberada.",
        },
        {
          forma: "clave",
          rotulo: "Cómo hay que leerlo",
          frase: "No como una biografía. Como una obra de arte cuyo material es la propia vida del autor, con episodios inventados, exagerados y contradictorios, colocados a propósito y sin ninguna intención de exactitud.",
        },
        {
          forma: "texto",
          texto:
            "Los episodios de infancia que cuenta lo dejan claro. Dice que empujó a un compañero desde un puente. Que le dio una patada en la cabeza a su hermana pequeña. Que se tiraba por las escaleras a propósito delante de la gente para que le miraran.",
        },
        {
          forma: "texto",
          texto:
            "Que tenía un terror insoportable a los saltamontes y que sus compañeros lo aprovechaban para torturarle. Que mordió a un murciélago moribundo cubierto de hormigas. Ninguno de esos episodios se puede verificar y varios son casi con seguridad falsos.",
        },
        {
          forma: "texto",
          texto:
            "Su hermana Anna Maria publicó en 1949 un libro contestando, con el título de Salvador Dalí visto por su hermana, en el que negaba buena parte de lo que él contaba sobre la familia y describía una infancia bastante más normal.",
        },
        {
          forma: "arte",
          texto:
            "Dalí reaccionó con una crueldad considerable: pintó cuadros que la aludían de manera ofensiva y rompió con ella de por vida. Nunca volvieron a hablarse. Esa reacción dice más sobre él que cualquiera de las anécdotas que él mismo se inventó.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí está documentado de aquella familia es otra cosa. El padre, Salvador Dalí Cusí, era notario, republicano y anticlerical, un hombre de carácter fuerte que sin embargo apoyó desde el principio la vocación artística del hijo.",
        },
        {
          forma: "texto",
          texto:
            "Le pagó la academia, le organizó su primera exposición en Figueres a los catorce años y le mandó a Madrid a estudiar Bellas Artes. Fue un padre presente y exigente, y esa relación acabaría rompiéndose de la peor manera posible en 1929.",
        },
        {
          forma: "texto",
          texto:
            "La madre, Felipa Domènech, murió de cáncer de útero en 1921, cuando él tenía dieciséis años. Dalí escribió que fue el golpe más grande de su vida y que juró vencer a la muerte con la gloria. Es una de las pocas líneas del libro que suena sincera.",
        },
        {
          forma: "texto",
          texto:
            "El otro escenario fijo de esos años es Cadaqués, el pueblo de pescadores de la costa gerundense donde la familia veraneaba, y la cala de Portlligat. Ese paisaje —rocas, agua quieta, olivos, luz dura— es el fondo de casi toda su pintura.",
        },
        {
          forma: "texto",
          texto:
            "Es un dato que suele perderse en la iconografía del bigote: el paisaje de sus cuadros más famosos no es un delirio inventado. Es la bahía concreta que veía desde su casa, pintada con precisión topográfica y con cosas raras encima.",
        },
        {
          forma: "texto",
          texto:
            "En 1922, con dieciocho años, se fue a Madrid a estudiar en la Academia de San Fernando y se alojó en un sitio que en aquellos años concentraba a media generación de la cultura española.",
        },
        {
          forma: "texto",
          texto:
            "Allí conoció a dos personas que le cambiaron la vida, y a una de ellas la iba a tratar muy mal.",
        },
      ],
    },

    {
      titulo: "La Residencia",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La Residencia de Estudiantes de Madrid era una institución educativa fundada en 1910, laica y de inspiración liberal, en la que convivían estudiantes de todas las carreras con conferencias, laboratorios y una biblioteca abierta. Por allí pasó casi todo el mundo.",
        },
        {
          forma: "texto",
          texto:
            "Dieron conferencias allí Einstein, Marie Curie, Chesterton, Le Corbusier y Stravinski. Vivieron allí, entre otros, un poeta granadino llamado Federico García Lorca y un aragonés que iba para cineasta y se llamaba Luis Buñuel.",
        },
        {
          forma: "clave",
          rotulo: "Cómo llegó Dalí",
          frase: "Con el pelo largo, patillas, capa y pantalones bombachos, hablando poco y en catalán. Los demás lo tomaron primero por un provinciano ridículo. Buñuel escribió que tardaron semanas en descubrir que dibujaba mejor que nadie.",
        },
        {
          forma: "texto",
          texto:
            "El grupo que se formó allí inventó una palabra que define bastante bien su actitud: llamaban putrefactos a todo lo que consideraban acartonado, sentimental y burgués. Salían a la calle a señalarlos y Dalí hacía dibujos de ellos.",
        },
        {
          forma: "texto",
          texto:
            "La relación con Lorca fue la más intensa de su vida antes de Gala, y el libro la trata de manera evasiva y confusa, que es exactamente lo esperable de un texto escrito en 1942 para el público americano.",
        },
        {
          forma: "texto",
          texto:
            "Lo que se sabe por cartas y por testimonios es que Lorca estaba enamorado de él y se lo hizo saber. Dalí declaró décadas después, en entrevistas, que se sintió halagado y que no pudo corresponderle, y dio versiones distintas en momentos distintos.",
        },
        {
          forma: "arte",
          texto:
            "Lo que sí es indiscutible es la influencia mutua. Lorca escribió la «Oda a Salvador Dalí» en 1926, uno de sus poemas mayores, y Dalí le hizo retratos y decorados. Se cartearon durante años y esas cartas están publicadas.",
          arte: "lectora",
        },
        {
          forma: "texto",
          texto:
            "La ruptura vino con el surrealismo. Dalí y Buñuel se fueron a París y se burlaron por escrito del Romancero gitano de Lorca, considerándolo tradicional y sentimental. A Lorca aquello le dolió considerablemente y la amistad se enfrió.",
        },
        {
          forma: "texto",
          texto:
            "Con Buñuel el resultado fue una película. En 1929 escribieron juntos, en unos días, el guion de «Un perro andaluz», dieciséis minutos de imágenes sin ninguna lógica narrativa, financiada por la madre de Buñuel.",
        },
        {
          forma: "clave",
          rotulo: "La regla del guion",
          frase: "Se contaban imágenes que habían soñado y aceptaban solo las que no admitían ninguna explicación racional, psicológica ni simbólica. Si alguno encontraba un sentido, la imagen se descartaba.",
        },
        {
          forma: "texto",
          texto:
            "De ahí salió la escena más famosa del cine de vanguardia: una navaja cortando un ojo, rodada con el ojo de un ternero muerto. Se estrenó en París ante un público de intelectuales que Buñuel esperaba que se le echara encima, y le aplaudieron.",
        },
        {
          forma: "texto",
          texto:
            "Mientras tanto, en la academia de Madrid, Dalí se comportaba de manera cada vez más provocadora. En 1926 fue expulsado definitivamente después de negarse a ser examinado, alegando que ninguno de los profesores del tribunal estaba capacitado para juzgarle.",
        },
        {
          forma: "texto",
          texto:
            "Esa frase se cita siempre como una boutade y tiene un fondo defendible: técnicamente era mejor dibujante que sus profesores y lo sabía. Su dominio del oficio clásico —perspectiva, anatomía, óleo— era y siguió siendo extraordinario.",
        },
        {
          forma: "arte",
          texto:
            "Ese es el punto que separa a Dalí de casi todos los provocadores posteriores: era, sin discusión, uno de los mejores dibujantes del siglo XX. Lo que hizo con esa habilidad se puede discutir; que la tenía, no lo ha discutido nadie nunca.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "En 1929 llegó a París y se incorporó al grupo surrealista de André Breton, que llevaba cinco años funcionando como una especie de partido con expulsiones, manifiestos y disciplina interna. Dalí encajó de inmediato y duró poco.",
        },
        {
          forma: "texto",
          texto:
            "Su aportación teórica al grupo tiene nombre propio y es lo más serio que produjo intelectualmente: el método paranoico-crítico, que describió como una forma de irracionalidad organizada y sistemática puesta al servicio de la producción de imágenes.",
        },
        {
          forma: "texto",
          texto:
            "La idea es esta: el delirio paranoico consiste en ver conexiones donde no las hay, con una coherencia interna absoluta. Dalí propuso usar deliberadamente ese mecanismo para producir imágenes dobles, donde una misma forma se lee de dos maneras a la vez.",
        },
        {
          forma: "texto",
          texto:
            "Sus cuadros de esos años están llenos de eso: un rostro que también es un grupo de figuras, una mesa que también es un perro, un busto de Voltaire que aparece y desaparece según cómo se mire. Y funcionan: el efecto es comprobable mirando.",
        },
        {
          forma: "clave",
          rotulo: "La diferencia con los demás",
          frase: "El resto del grupo buscaba el automatismo: pintar sin control consciente. Dalí hacía lo contrario: usaba una técnica académica milimétrica para representar con precisión fotográfica cosas imposibles.",
        },
        {
          forma: "texto",
          texto:
            "Su formulación era que quería fotografiar a mano y en color sus imágenes concretas de la irracionalidad. Y eso explica por qué su pintura es la que más ha calado: un delirio pintado con torpeza no impresiona; uno pintado con precisión de miniaturista sí.",
        },
        {
          forma: "texto",
          texto:
            "En 1931 pintó el cuadro que le hizo mundialmente famoso: un paisaje de Cadaqués con relojes blandos derritiéndose sobre una rama y sobre una forma que es un autorretrato deformado. Mide veinticuatro por treinta y tres centímetros.",
        },
        {
          forma: "texto",
          texto:
            "Y ese mismo verano de 1929, en Cadaqués, apareció en su casa una mujer rusa de diez años más que él, casada con un poeta francés, que iba a cambiarlo todo.",
        },
      ],
    },

    {
      titulo: "Gala",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Se llamaba Elena Ivánovna Diákonova, había nacido en Kazán en 1894, había pasado la adolescencia en un sanatorio suizo por tuberculosis y estaba casada con el poeta Paul Éluard, uno de los fundadores del surrealismo. Todos la llamaban Gala.",
        },
        {
          forma: "texto",
          texto:
            "Llegó a Cadaqués en el verano de 1929 con su marido, su hija y un grupo de amigos, invitados por Dalí. Se marchó semanas después habiendo decidido quedarse con él. Éluard volvió a París solo y siguió siendo su amigo durante años.",
        },
        {
          forma: "clave",
          rotulo: "El efecto que tuvo",
          frase: "Dalí tenía veinticinco años, ataques de risa incontrolable, crisis de ansiedad y ninguna capacidad para gestionar su propia vida. Ella se encargó de todo lo demás durante cincuenta y tres años.",
        },
        {
          forma: "texto",
          texto:
            "Gala negociaba los precios, elegía los clientes, gestionaba las galerías, decidía qué se vendía y a quién, y organizaba las giras. Era, en la práctica, la directora de una empresa cuyo único producto era él, y lo hacía con una dureza que le valió muy mala prensa.",
        },
        {
          forma: "texto",
          texto:
            "Buena parte de esa mala prensa tiene el tono que suele tener cuando una mujer administra el dinero: se la describía como codiciosa, calculadora y manipuladora. Es probable que fuera dura negociando y también que sin ella él no habría tenido carrera.",
        },
        {
          forma: "texto",
          texto:
            "Dalí firmaba muchos de sus cuadros como Gala Salvador Dalí, incorporando el nombre de ella al suyo. En el libro le dedica páginas de una devoción absoluta y bastante ilegible, y ese registro se mantiene en todo lo que escribió sobre ella durante medio siglo.",
        },
        {
          forma: "arte",
          texto:
            "Aparece además en decenas de cuadros, muchas veces de espaldas, y en 1949 la pintó como la Virgen en una Madonna que llevó al Vaticano para enseñársela al papa. Nadie ha explicado nunca del todo qué pretendía con aquella visita.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Aquel mismo año de 1929 se produjo la ruptura con su padre, y fue definitiva. Hubo dos motivos y se sumaron: la relación con una mujer casada, y una inscripción que Dalí pintó sobre una obra en la que decía que a veces escupía por placer sobre el retrato de su madre.",
        },
        {
          forma: "texto",
          texto:
            "El padre, que había enviudado ocho años antes y que había apoyado su carrera desde el principio, lo echó de casa y lo desheredó. Estuvieron años sin hablarse. Dalí se instaló en una barraca de pescadores en Portlligat, a un kilómetro del pueblo.",
        },
        {
          forma: "clave",
          rotulo: "Portlligat",
          frase: "Aquella barraca de veintiún metros cuadrados fue creciendo durante cuarenta años a base de comprar las casetas de al lado. Acabó siendo una vivienda-laberinto donde vivió y pintó casi toda su vida.",
        },
        {
          forma: "texto",
          texto:
            "El libro no cuenta bien nada de eso. La ruptura con el padre aparece de manera oblicua, la política no aparece, y los años treinta españoles —que fueron los de la República, la guerra y el exilio— están tratados con una evasividad que hoy resulta escandalosa.",
        },
        {
          forma: "texto",
          texto:
            "Porque en medio de todo aquello ocurrieron dos cosas que este libro, escrito en 1942, esquiva por completo. La primera es su expulsión del grupo surrealista, que fue por motivos políticos además de comerciales.",
        },
        {
          forma: "texto",
          texto:
            "En 1934 Breton convocó un juicio interno contra él. Los cargos incluían haber pintado obras con contenido considerado contrarrevolucionario y haber hecho declaraciones ambiguas sobre Hitler, al que Dalí decía encontrar fascinante como imagen y no como político.",
        },
        {
          forma: "arte",
          texto:
            "Dalí se presentó al juicio con un termómetro en la boca y varios jerséis, alegando que tenía fiebre, y se los fue quitando mientras hablaba. Consiguió que el asunto quedara en nada durante un tiempo. La expulsión formal llegó en 1939.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Breton le dedicó entonces un apodo construido con las letras de su nombre y que resultó demoledor: Ávida Dollars. Es un anagrama perfecto de Salvador Dalí y resume la acusación entera. Se le quedó pegado el resto de su vida.",
        },
        {
          forma: "texto",
          texto:
            "La segunda cosa que el libro esquiva es la guerra civil española y, dentro de ella, el asesinato de Federico García Lorca en agosto de 1936, en Granada, a manos de sublevados. Dalí no dijo nada relevante entonces ni escribió nada aquí.",
        },
        {
          forma: "texto",
          texto:
            "Circula una anécdota, no confirmada, según la cual reaccionó a la noticia con una exclamación taurina. Sea cierta o no, lo comprobable es que su amigo más íntimo de juventud fue fusilado y que en su autobiografía, escrita seis años después, no hay ajuste de cuentas con eso.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí hizo, ya en los años cincuenta, fue apoyar públicamente al régimen de Franco, enviar telegramas de adhesión y declarar que aprobaba las sentencias de muerte firmadas en 1975, semanas antes de la muerte del dictador.",
        },
        {
          forma: "texto",
          texto:
            "Esas declaraciones son documentadas y no admiten la lectura de la broma surrealista, aunque él pretendiera venderlas así. Es la parte más difícil de sostener de su biografía y ninguna admiración por su pintura la borra.",
        },
        {
          forma: "clave",
          rotulo: "Lo que hay que mantener a la vez",
          frase: "Que era un dibujante extraordinario y que hizo y dijo cosas indefendibles. Las dos cosas son ciertas y ninguna cancela a la otra, y saber sostenerlas juntas es la única manera honesta de leerlo.",
        },
        {
          forma: "texto",
          texto:
            "Esa formulación no es de nadie de ahora: la escribió George Orwell en 1944, en un ensayo sobre este libro exactamente, que sigue siendo la mejor cosa que se ha escrito sobre Dalí y una de las mejores sobre el problema general que plantea.",
        },
        {
          forma: "texto",
          texto:
            "Se titula, más o menos, privilegio del clero, y es una discusión sobre si el talento artístico exime de algo.",
        },
      ],
    },

    {
      titulo: "Ávida Dollars",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Orwell escribió aquel ensayo poco después de leer este libro, y empieza reconociendo que le produce náuseas. Repasa los episodios que Dalí cuenta con orgullo —la crueldad infantil, los animales torturados, la exhibición constante— y no los suaviza.",
        },
        {
          forma: "texto",
          texto:
            "Y a continuación reconoce, sin ninguna concesión, que Dalí es un dibujante excelente y que buena parte de sus imágenes tienen una potencia que no se puede negar. Las dos afirmaciones están en el mismo texto y él se niega a elegir entre ellas.",
        },
        {
          forma: "clave",
          rotulo: "Su formulación",
          frase: "Que uno debería poder sostener a la vez en la cabeza dos hechos: que Dalí es un buen dibujante y que es una persona repugnante. Que lo primero no cancela lo segundo y lo segundo no cancela lo primero.",
        },
        {
          forma: "texto",
          texto:
            "Y ataca las dos escapatorias habituales. La de quienes dicen que el talento justifica cualquier conducta, que sería conceder a los artistas un privilegio de clero. Y la de quienes dicen que un mal tipo no puede hacer buen arte, que es sencillamente falso.",
        },
        {
          forma: "texto",
          texto:
            "Ese ensayo se escribió hace ochenta años y es exactamente la discusión que se sigue teniendo hoy con otros nombres. Orwell la resolvió en diez páginas y su conclusión —sostener las dos cosas y no fusionarlas— sigue siendo la posición más sólida disponible.",
        },
        {
          forma: "texto",
          texto:
            "El período americano de Dalí, en el que escribió este libro, fue el de su transformación en marca. Diseñó escaparates para grandes almacenes de Nueva York, hizo publicidad, colaboró con Disney, con Hitchcock y con la revista Vogue.",
        },
        {
          forma: "arte",
          texto:
            "Hay un episodio que lo resume: en 1939 montó un escaparate para unos almacenes de la Quinta Avenida, la dirección lo modificó sin avisarle, y él entró y volcó una bañera llena de agua que atravesó el cristal y acabó en la calle. Salió en la prensa.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Fue detenido, pagó una multa y el juez le dio la razón parcialmente, diciendo que un artista tiene derecho a defender la integridad de su obra. El escaparate se rehízo tal como él lo había diseñado y los almacenes vendieron mucho más.",
        },
        {
          forma: "texto",
          texto:
            "Con Hitchcock diseñó la secuencia onírica de la película «Recuerda», en 1945, con ojos pintados sobre cortinas y unas tijeras enormes. Con Disney empezó en 1946 un cortometraje que se abandonó y que la compañía terminó en 2003, cincuenta y siete años después.",
        },
        {
          forma: "clave",
          rotulo: "La acusación",
          frase: "Que a partir de cierto punto dejó de ser un pintor con una obra y pasó a ser un personaje que vendía firmas. Esa acusación es de Breton, es de sus antiguos amigos, y es en buena parte correcta.",
        },
        {
          forma: "texto",
          texto:
            "El caso más grave llegó al final de su vida. En los años setenta firmó cantidades enormes de hojas de papel en blanco, que después se usaron para imprimir litografías. Se han estimado en decenas de miles, aunque las cifras exactas se discuten.",
        },
        {
          forma: "texto",
          texto:
            "El resultado es que el mercado de obra gráfica de Dalí está tan contaminado que hoy resulta prácticamente imposible autentificar muchas piezas, y que existen fundaciones dedicadas exclusivamente a intentar separar lo suyo de lo que no lo es.",
        },
        {
          forma: "texto",
          texto:
            "Se ha discutido mucho cuánta responsabilidad tuvo él en aquello y cuánta gente de su entorno, en unos años en que su salud mental y física ya estaba deteriorada. La consecuencia, en cualquier caso, es un desastre patrimonial que sigue vigente.",
        },
        {
          forma: "arte",
          texto:
            "Y produce una ironía perfecta: el hombre que se pasó la vida construyendo un personaje inventado acabó dejando un rastro de obras cuya autenticidad no se puede establecer. Lo que le ocurrió al mercado es lo mismo que él le hizo a su biografía.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Ahora, dónde falla este libro como libro. La primera cosa es evidente y ya se ha dicho: no vale como fuente biográfica. Contiene episodios inventados, fechas alteradas, personajes deformados y contradicciones internas, todo deliberado.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es la prosa. Es agotadora: adjetivos acumulados, exclamaciones, digresiones larguísimas y una autocelebración constante que en trescientas páginas se hace muy difícil de sostener. Hay tramos que solo se pueden leer en diagonal.",
        },
        {
          forma: "texto",
          texto:
            "La tercera es de fondo y es la más seria: las evasiones. La guerra civil, la muerte de Lorca, la posición ante el fascismo y la ruptura con casi todos sus amigos aparecen difuminadas o directamente ausentes en unas memorias escritas en 1942.",
        },
        {
          forma: "texto",
          texto:
            "Y la cuarta: es un texto interesado. Se escribió para consolidar una posición comercial en un país nuevo, y eso condiciona cada página. No es una confesión, es una operación de imagen, y hay que leerla sabiendo qué está intentando conseguir.",
        },
        {
          forma: "texto",
          texto:
            "Lo que casi todo el mundo cree y no es verdad, empezando por lo más repetido: los relojes blandos no representan la relatividad de Einstein. Se lo preguntaron muchas veces y siempre lo negó, diciendo que la idea venía de un camembert derritiéndose al sol.",
        },
        {
          forma: "clave",
          rotulo: "El segundo malentendido",
          frase: "Dalí no fue un surrealista toda su vida: el grupo lo expulsó en 1939 y él siguió llamándose surrealista otros cincuenta años, con Breton llamándole Ávida Dollars.",
        },
        {
          forma: "texto",
          texto:
            "Tercero: no estaba loco. El personaje era una construcción administrada con precisión, y él lo declaró abiertamente muchas veces. Concedía entrevistas absurdas y llevaba una contabilidad meticulosa de sus ingresos.",
        },
        {
          forma: "texto",
          texto:
            "Y cuarto: no fue un pintor abstracto ni un vanguardista formal. Técnicamente era un pintor académico del XIX pintando cosas imposibles, y esa combinación —oficio antiguo, contenido delirante— es justamente lo que le hizo distinto de todos los demás.",
        },
      ],
    },

    {
      titulo: "La cripta de Figueres",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Figueres, 1974. Sobre las ruinas del antiguo teatro municipal de la ciudad, bombardeado durante la guerra civil y abandonado desde entonces, se inaugura un museo diseñado por el propio Dalí, con una cúpula geodésica transparente y huevos gigantes en el tejado.",
        },
        {
          forma: "texto",
          texto:
            "Él lo llamó Teatro-Museo y no museo a secas, y explicó por qué: porque su obra es teatral y porque el edificio era un teatro. Es hoy el segundo museo más visitado de España, después del Prado, con más de un millón de visitantes al año.",
        },
        {
          forma: "clave",
          rotulo: "El detalle importante",
          frase: "Lo diseñó y lo montó él mismo, pieza a pieza, durante trece años. No es una colección organizada por conservadores: es la última obra de arte de Dalí, y su contenido es él.",
        },
        {
          forma: "texto",
          texto:
            "Dentro hay salas que son instalaciones enteras: una habitación que vista desde un punto concreto se convierte en una cara, un cadillac con lluvia dentro, techos pintados con dos figuras vistas desde abajo. Todo funciona con la lógica de la imagen doble.",
        },
        {
          forma: "texto",
          texto:
            "Los últimos años de su vida fueron muy malos. Gala murió en junio de 1982, con ochenta y siete años, y él quedó en un estado de deterioro rápido: dejó de pintar, dejó de comer con regularidad y se instaló en el castillo de Púbol, que le había regalado a ella.",
        },
        {
          forma: "texto",
          texto:
            "En 1984 se produjo un incendio en su habitación de aquel castillo, en circunstancias que nunca se aclararon del todo, y sufrió quemaduras graves. Lo trasladaron a una torre anexa al museo de Figueres, y allí pasó sus últimos cinco años.",
        },
        {
          forma: "arte",
          texto:
            "Murió el 23 de enero de 1989, a los ochenta y cuatro años, y está enterrado en la cripta de su propio museo, bajo el suelo del escenario, con una losa por la que pasan a diario miles de visitantes sin darse cuenta de que están encima.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Ese final tiene una simetría que él no habría podido diseñar mejor: el libro empieza con un niño de cinco años delante de la tumba de su hermano, en Figueres, y la vida acaba con él enterrado en la misma ciudad, bajo un edificio construido para su propia obra.",
        },
        {
          forma: "texto",
          texto:
            "Su testamento dejó todo el patrimonio al Estado español, sin mencionar a su hermana Anna Maria ni a la hija de Gala. Los pleitos posteriores duraron años, y en 2017 se llegó incluso a exhumar el cadáver para una prueba de paternidad.",
        },
        {
          forma: "clave",
          rotulo: "El resultado de aquella exhumación",
          frase: "La prueba dio negativo. Y los técnicos que abrieron la tumba informaron de que el bigote seguía intacto, en la posición de las diez y diez, veintiocho años después.",
        },
        {
          forma: "texto",
          texto:
            "Ese detalle recorrió el mundo entero en 2017 y es probablemente el epitafio que él habría elegido. Un titular internacional sobre su bigote, generado por un pleito de herencia, casi treinta años después de haberse muerto.",
        },
        {
          forma: "texto",
          texto:
            "Lo que queda de este libro, descontando las mentiras, la prosa insoportable y las evasiones políticas, es un documento único sobre una operación concreta: cómo se fabrica un personaje público, contada por el propio fabricante mientras la está ejecutando.",
        },
        {
          forma: "texto",
          texto:
            "Y en eso es asombrosamente moderno. Dalí entendió antes que nadie que la imagen pública es una obra en sí misma, que se puede diseñar, que se puede mantener y que puede valer más que el producto. Trabajaba en eso a jornada completa desde 1930.",
        },
        {
          forma: "arte",
          texto:
            "Cualquiera que hoy gestione su presencia pública está haciendo, con peor técnica, lo que él hizo con un bigote encerado, una declaración absurda a la semana y una precisión enorme sobre qué fotografía convenía en cada momento.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "La recomendación de lectura es la que se aplica a cualquier texto de este tipo: leerlo junto a otra cosa. Existen biografías serias de Dalí, con documentación y contraste, y este libro se disfruta mucho más sabiendo qué partes son inventadas.",
        },
        {
          forma: "texto",
          texto:
            "Y la recomendación de fondo es la de Orwell: no resolver la contradicción. No hay que decidir si Dalí era un genio o un impostor, porque fue las dos cosas simultáneamente y durante sesenta años, y esa simultaneidad es lo interesante del caso.",
        },
        {
          forma: "texto",
          texto:
            "El pintor que a los veintidós años dominaba la técnica clásica mejor que sus profesores es el mismo que firmó papeles en blanco a los setenta. El amigo de Lorca es el mismo que aplaudió al régimen que lo mató. No hay dos Dalís: hay uno solo.",
        },
        {
          forma: "texto",
          texto:
            "Y todo eso, según él, empezó en un cementerio de Figueres, con unos padres enseñándole una lápida con su propio nombre grabado y diciéndole que él era otro que ya se había muerto.",
        },
        {
          forma: "texto",
          texto:
            "Es probablemente la única cosa verdadera del libro, y él construyó las trescientas páginas restantes para demostrar que se había pasado la vida entera negándolo.",
        },
        {
          forma: "texto",
          texto:
            "Escribió que a los seis años quería ser cocinero, a los siete Napoleón, y que desde entonces su ambición no había hecho más que crecer. Es la mejor frase del libro y resume el proyecto completo.",
        },
        {
          forma: "texto",
          texto:
            "Y también deja ver, debajo del chiste, a un niño intentando ser lo bastante grande como para que dejaran de confundirlo con un hermano muerto que nunca cumplió dos años.",
        },
        {
          forma: "texto",
          texto:
            "Está enterrado a cuarenta metros de aquella tumba.",
        },
      ],
    },
  ],
};

export const MIENTRAS_ESCRIBO: Resumen = {
  id: "mientras-escribo",
  titulo: "Mientras escribo",
  autor: "Stephen King",
  ano: 2000,
  gancho: "Llevaba media vida escribiendo cuando lo atropelló una furgoneta en una carretera de Maine. Volvió a este libro seis semanas después, sentado cuarenta minutos seguidos, que era lo que aguantaba.",
  porQue:
    "Porque es el manual de escritura más leído del mundo y la mitad de sus reglas son suyas y solo suyas. Saber cuáles valen para cualquiera y cuáles no es la diferencia entre usarlo y obedecerlo.",
  partes: [
    {
      titulo: "La sala de la caldera",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Hermon, Maine, principios de los setenta. En una caravana de doble ancho aparcada junto a una carretera vive un profesor de instituto de veinticinco años con su mujer y dos hijos. El sueldo son seis mil dólares al año y no llega.",
        },
        {
          forma: "texto",
          texto:
            "En la caravana no hay sitio para un escritorio, así que escribe en el cuarto de la caldera, sentado en una silla de niño, con la máquina de escribir de su mujer apoyada sobre los muslos. Escribe por las tardes y los fines de semana.",
        },
        {
          forma: "clave",
          rotulo: "El clavo de la pared",
          frase: "Desde los catorce años clavaba las cartas de rechazo de las revistas en un clavo del dormitorio. Cuando el clavo no aguantó el peso, lo cambió por una escarpia. Sigue teniendo esa imagen como la definición exacta de aprender el oficio.",
        },
        {
          forma: "texto",
          texto:
            "Se llama Stephen King, nació en Portland en 1947 y su padre se marchó a comprar tabaco cuando él tenía dos años y no volvió nunca. Su madre los crio sola, mudándose de estado en estado, trabajando de panadera, de planchadora y de cuidadora en una residencia.",
        },
        {
          forma: "texto",
          texto:
            "Ese abandono aparece en el libro sin dramatismo y con un detalle revelador: en el desván encontró una caja con libros de bolsillo de terror y ciencia ficción que su padre había dejado. Fue lo único que le dejó, y fue lo que le enseñó lo que quería hacer.",
        },
        {
          forma: "texto",
          texto:
            "Empezó a publicar en la universidad, en revistas masculinas que pagaban treinta y cinco dólares por cuento. Con ese dinero pagaba antibióticos para el oído de su hija. Lo cuenta así, en dólares y en medicinas, y esa es la mejor decisión del libro.",
        },
        {
          forma: "arte",
          texto:
            "Porque casi toda la literatura sobre escribir habla de vocación, de inspiración y de silencio. Este libro habla de dinero, de turnos, de guarderías y de un hombre que escribía en una habitación con una caldera porque era la única que quedaba libre.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "Antes de dar clases estuvo trabajando en una lavandería industrial, lavando sábanas de hospitales y manteles de restaurantes de la costa. De aquellos manteles salían gusanos y de aquel trabajo salieron varios de sus cuentos.",
        },
        {
          forma: "texto",
          texto:
            "El primer tercio del libro es eso: memorias, y no una autobiografía. Él lo llama un currículum, y avisa de que no ha ordenado nada, que son las escenas que se le quedaron y que las ha puesto tal cual.",
        },
        {
          forma: "texto",
          texto:
            "Hay una que explica su idea de la literatura mejor que cualquier capítulo teórico. De niño se tragó una amígdala infectada, tuvo problemas de oído y le perforaron el tímpano tres veces sin anestesia suficiente.",
        },
        {
          forma: "texto",
          texto:
            "La tercera vez, el médico le dijo lo mismo que las dos anteriores: que no le iba a doler. Y King anota que ese día aprendió que los adultos mienten, y que esa es la primera cosa que hay que saber para escribir sobre gente.",
        },
        {
          forma: "clave",
          rotulo: "Su definición del oficio",
          frase: "Escribir es telepatía. Él pone unas palabras en una mesa en Maine en 1997 y alguien las lee en otro sitio y en otro año, y ve exactamente lo mismo: una mesa cubierta con un mantel rojo y encima una jaula con un conejo blanco con el número ocho pintado en el lomo.",
        },
        {
          forma: "texto",
          texto:
            "Ese ejemplo del conejo lo desarrolla durante tres páginas y es la mejor explicación de qué hace la prosa que hay en un libro de este tipo: no dice cómo era la mesa ni cuántos años tenía el conejo, y aun así los dos ven lo mismo.",
        },
        {
          forma: "texto",
          texto:
            "Su conclusión práctica: la descripción funciona cuando selecciona dos o tres detalles y deja que el lector monte el resto. La descripción exhaustiva no produce una imagen más nítida, produce aburrimiento.",
        },
        {
          forma: "texto",
          texto:
            "Su ejemplo favorito para eso es un restaurante. Dice que basta con el olor a fritanga, el ruido de los platos y una camarera con las zapatillas gastadas por el mismo lado. Nadie necesita saber de qué color eran las paredes, y el lector se lo inventará solo.",
        },
        {
          forma: "texto",
          texto:
            "Y sostiene que los detalles buenos casi nunca son visuales. Un olor, un ruido de fondo o la temperatura de una habitación colocan al lector dentro mucho mejor que tres párrafos describiendo muebles, que es lo primero que hace todo el que empieza.",
        },
        {
          forma: "texto",
          texto:
            "Su regla para saber cuánto describir es de tiempo: si al releer un párrafo uno se salta líneas para llegar al diálogo, esas líneas sobran. Y avisa de que uno se las salta siempre, incluso en su propio texto, y que hay que hacer caso a ese gesto.",
        },
        {
          forma: "arte",
          texto:
            "En la universidad conoció a Tabitha Spruce en la biblioteca. Se casaron en 1971, con dos empleos malos entre los dos y una hija. Ella escribía poesía. Y va a ser el personaje decisivo del libro, dos veces, en dos momentos que cambian su vida.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "El primero llegó una tarde de 1973, en aquella caravana, con una historia que había empezado y que no le convencía nada.",
        },
        {
          forma: "texto",
          texto:
            "Trataba de una chica del instituto a la que sus compañeras humillaban en las duchas del gimnasio.",
        },
        {
          forma: "texto",
          texto:
            "Había escrito tres páginas y le parecía que no iba a ninguna parte.",
        },
        {
          forma: "texto",
          texto:
            "No conocía a chicas adolescentes, no sabía cómo hablaban y el personaje le resultaba antipático.",
        },
        {
          forma: "texto",
          texto:
            "Así que hizo lo que hacía con todo lo que no funcionaba.",
        },
        {
          forma: "texto",
          texto:
            "Arrugó las páginas y las tiró a la papelera.",
        },
      ],
    },

    {
      titulo: "La papelera de Carrie",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Al día siguiente, Tabitha vació la papelera para tirarla y vio las páginas arrugadas. Las sacó, las alisó sobre la mesa de la cocina, las leyó y le dijo que tenía algo ahí y que siguiera. Que ella le ayudaría con la parte de las chicas.",
        },
        {
          forma: "texto",
          texto:
            "Él contestó que no sabía nada del asunto. Ella contestó que lo averiguaría. Y esa conversación de dos minutos en una caravana de Maine es el origen de una de las carreras literarias más vendidas de la historia.",
        },
        {
          forma: "clave",
          rotulo: "El lector ideal",
          frase: "De ahí sale uno de los conceptos más útiles del libro. King sostiene que hay que escribir para una persona concreta, no para un público. La suya es Tabitha. Cuando revisa, se imagina exactamente en qué párrafo se va a reír ella y en cuál se va a aburrir.",
        },
        {
          forma: "texto",
          texto:
            "La novela se llamó Carrie y la mandó a Doubleday, que le pagó un anticipo de dos mil quinientos dólares. Con eso compró un coche de segunda mano y siguió dando clases, porque dos mil quinientos dólares no cambian la vida de nadie.",
        },
        {
          forma: "texto",
          texto:
            "Un domingo de mayo de 1973, su editor le llamó al único teléfono que tenían para decirle que se habían vendido los derechos de bolsillo por cuatrocientos mil dólares. Le tocaban doscientos mil, unas treinta y tres veces su sueldo anual.",
        },
        {
          forma: "texto",
          texto:
            "Salió a la calle a buscar a Tabitha, que no estaba en casa. Cuando volvió, lo primero que hicieron fue calcular cuánto quedaba después de impuestos. Y con parte de ese dinero le compró a su mujer un secador de pelo.",
        },
        {
          forma: "arte",
          texto:
            "Ese detalle es lo que hace creíble el libro entero. La escena de la fortuna repentina no termina en un yate: termina en un secador, comprado por alguien que llevaba años sin poder comprar nada que no fuera imprescindible.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Su madre murió de cáncer poco después. Alcanzó a saber que su hijo había vendido la novela y él le leyó las pruebas de imprenta en voz alta durante sus últimos meses. No llegó a ver el libro publicado.",
        },
        {
          forma: "texto",
          texto:
            "A partir de ahí la carrera se dispara: El misterio de Salem's Lot, El resplandor, La zona muerta, Ojos de fuego, Cujo. Publicaba tan deprisa que su editorial le pidió que frenara, porque el mercado no absorbía tres novelas suyas al año.",
        },
        {
          forma: "texto",
          texto:
            "La solución fue inventarse un segundo autor. Publicó cinco novelas como Richard Bachman, con una biografía falsa y una foto de un amigo de su agente en la solapa, para averiguar si se vendía por lo que escribía o por cómo se llamaba.",
        },
        {
          forma: "clave",
          rotulo: "El resultado del experimento",
          frase: "Las novelas de Bachman vendían decentemente y nada más. Un librero de Washington comparó estilos, buscó en los registros de derechos de autor y lo destapó en 1985. King dijo que Bachman había muerto de cáncer de seudónimo.",
        },
        {
          forma: "texto",
          texto:
            "Ese episodio es también la respuesta a la pregunta de si la fama vende libros: sí, y bastante. La misma prosa firmada por un desconocido vendía una fracción, y él lo comprobó con un experimento que ningún otro autor famoso ha hecho.",
        },
        {
          forma: "texto",
          texto:
            "El seudónimo tuvo además un efecto que él no esperaba: escribiendo como Bachman se permitía cosas que como King no se permitía. Los libros de Bachman son más secos, más crueles y terminan peor, y varios de sus lectores los prefieren.",
        },
        {
          forma: "texto",
          texto:
            "Es un fenómeno conocido en el oficio y el libro lo señala de pasada sin desarrollarlo: el nombre propio acaba funcionando como una expectativa, y esa expectativa condiciona lo que uno se atreve a escribir aunque no quiera.",
        },
        {
          forma: "texto",
          texto:
            "Cuando lo destaparon, King publicó una nota de prensa diciendo que Richard Bachman había muerto de cáncer de seudónimo, una enfermedad rara pero fulminante. Es la mejor broma del libro y describe bastante bien su relación con su propia fama.",
        },
        {
          forma: "texto",
          texto:
            "Mientras tanto, escribía cada vez más y recordaba cada vez menos. En el libro hay una confesión que en 2000 sorprendió a mucha gente y que él cuenta sin buscar compasión, en un par de páginas y sin adjetivos.",
        },
        {
          forma: "texto",
          texto:
            "Escribió Cujo, una novela entera, y no recuerda haberla escrito. Ni un día. Dice que a veces lo lamenta, porque le gusta el libro y le habría gustado disfrutar de las partes que salieron bien.",
        },
        {
          forma: "arte",
          texto:
            "Llevaba años bebiendo a diario y consumiendo cocaína. En los años ochenta, según su propio relato, escribía con una servilleta metida en la nariz para que la sangre no cayera sobre las teclas de la máquina.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Y sostiene algo que conviene leer con atención, porque contradice uno de los mitos más resistentes del oficio: que el escritor alcohólico no bebe porque sea sensible ni porque el arte lo exija. Bebe porque es alcohólico, como el fontanero alcohólico.",
        },
        {
          forma: "texto",
          texto:
            "Dice que la idea del artista que necesita destruirse para crear es una excusa fabricada por gente que ya estaba destruyéndose, y que no conoce un solo caso en que las drogas hayan mejorado un libro.",
        },
        {
          forma: "texto",
          texto:
            "El final de aquello llegó a finales de los ochenta, en su despacho, con su mujer y varios miembros de su familia esperándolo.",
        },
        {
          forma: "texto",
          texto:
            "Habían recogido el contenido de la papelera de aquel despacho.",
        },
        {
          forma: "texto",
          texto:
            "Y lo habían volcado entero sobre la alfombra.",
        },
      ],
    },

    {
      titulo: "La alfombra con las latas",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En la alfombra había latas de cerveza, colillas, restos de cocaína y de tranquilizantes, botellas de jarabe para la tos, botellas de enjuague bucal y latas de un refresco. Todo lo que había consumido en su despacho en una temporada, delante de él.",
        },
        {
          forma: "texto",
          texto:
            "Tabitha le planteó la elección sin discusión posible: o lo dejaba o se marchaban. Él pidió tiempo para pensarlo y ella se lo negó. Cuenta que la parte de él que quería seguir escribiendo entendió que las dos cosas no cabían.",
        },
        {
          forma: "clave",
          rotulo: "Su miedo real",
          frase: "Lo que le paralizaba no era dejar de beber: era la certeza de que sin alcohol no podría volver a escribir. Es la creencia más extendida del oficio y el libro la desmonta con el mejor argumento posible, que es su propia obra posterior.",
        },
        {
          forma: "texto",
          texto:
            "Lo dejó. Y siguió escribiendo, y lo que escribió sobrio incluye buena parte de sus mejores libros. Ese es todo el argumento y no necesita más: veinte años de obra posterior contra una teoría romántica.",
        },
        {
          forma: "texto",
          texto:
            "Con esa parte biográfica cerrada, el libro cambia de registro y empieza el manual propiamente dicho. Y arranca con la única regla que King considera innegociable, repetida tres veces en cuatro páginas.",
        },
        {
          forma: "texto",
          texto:
            "Si quieres escribir, tienes que hacer dos cosas por encima de todas: leer mucho y escribir mucho. No hay atajo, no hay truco y no conoce a nadie que se lo haya saltado. Lo demás del libro son detalles.",
        },
        {
          forma: "arte",
          texto:
            "Él lee entre setenta y ochenta libros al año y lleva uno encima a todas partes: a la consulta del médico, a la cola del supermercado, al coche. Sostiene que quien dice no tener tiempo para leer no lo tendrá tampoco para escribir.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Y añade una idea que suele sorprender: que los libros malos enseñan más que los buenos. Con un libro excelente uno se queda mirando cómo está hecho sin entenderlo. Con uno malo se ve exactamente dónde falla y se aprende a no hacerlo.",
        },
        {
          forma: "texto",
          texto:
            "Su segunda regla es de cantidad y de horario: dos mil palabras al día, unas diez páginas, todos los días, incluidos los cumpleaños y las Navidades. Empieza por la mañana y no se levanta hasta terminar.",
        },
        {
          forma: "texto",
          texto:
            "Esa cifra hay que cogerla con pinzas y él mismo lo matiza después diciendo que mil está bien para empezar. Aun así es la parte del libro que más culpa ha generado en lectores que escriben después de una jornada laboral de ocho horas.",
        },
        {
          forma: "clave",
          rotulo: "Lo que sí es transferible",
          frase: "No la cifra, sino el hábito: el mismo sitio, la misma hora y la puerta cerrada. Su argumento es que la musa no aparece por inspiración, aparece por costumbre, y que si uno se sienta todos los días a las nueve, la musa acaba sabiendo dónde encontrarlo.",
        },
        {
          forma: "texto",
          texto:
            "Y una recomendación de sentido común que casi nadie sigue: quitar la televisión de la habitación donde se escribe, y no poner ningún objetivo de tiempo, sino de palabras. Se termina cuando están escritas, no cuando pasan tres horas.",
        },
        {
          forma: "texto",
          texto:
            "Sobre el sitio también tiene una idea que contradice la imagen habitual del escritor. Cuenta que cuando por fin tuvo dinero se compró un escritorio enorme de roble y lo puso en el centro del despacho, y que pasó seis años bebiendo detrás de él.",
        },
        {
          forma: "texto",
          texto:
            "Cuando dejó de beber, lo sacó de allí y puso una mesa pequeña en un rincón, debajo del alero. Su conclusión es que la mesa no debe ser el centro de la habitación ni de la vida: es una herramienta, y ponerla en un pedestal fue parte del problema.",
        },
        {
          forma: "texto",
          texto:
            "Y añade una recomendación que suena rara y que él considera importante: escribir con la puerta cerrada literalmente, con una puerta física que se cierra. Dice que ese gesto le comunica a la propia cabeza que lo que va a pasar ahí dentro va en serio.",
        },
        {
          forma: "texto",
          texto:
            "Después viene la parte técnica, que él organiza con una imagen que ha hecho fortuna y que viene de su tío Oren, que era carpintero y llevaba a las reparaciones una caja de herramientas enorme de tres pisos.",
        },
        {
          forma: "texto",
          texto:
            "En la bandeja de arriba de la caja, lo que se usa todos los días: el vocabulario y la gramática. En la de abajo, lo que se usa a veces: los elementos de estilo. Y en el fondo, las herramientas grandes que casi no se sacan.",
        },
        {
          forma: "arte",
          texto:
            "Sobre el vocabulario tiene una postura que tranquiliza a mucha gente: no hace falta ampliarlo. La primera palabra que llega, si es la correcta y es vívida, es la buena. Buscar un sinónimo más culto en el diccionario es, dice, ponerle un vestido de fiesta a un perro.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Sobre la gramática, dos manías. La primera, la voz pasiva, que le parece cobarde: se usa porque no compromete a nadie, y por eso está en todos los informes oficiales y en todos los correos de empresa.",
        },
        {
          forma: "texto",
          texto:
            "Y la segunda, la más famosa del libro y la que se ha convertido en cita de camiseta: que el camino del infierno está empedrado de adverbios.",
        },
        {
          forma: "texto",
          texto:
            "Su ejemplo es de diálogo. Cerró la puerta firmemente no dice nada que no dijera cerró la puerta, y encima suena a que el autor no se fía del lector.",
        },
        {
          forma: "texto",
          texto:
            "Lo mismo con los verbos de habla. Dijo basta. Musitó, exclamó, sentenció y espetó son formas de intentar rescatar un diálogo que no funciona.",
        },
        {
          forma: "texto",
          texto:
            "Y luego está la regla que aprendió a los dieciséis años de una carta de rechazo.",
        },
      ],
    },

    {
      titulo: "La caja de herramientas",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Aquella carta era un formulario impreso, pero alguien de la revista le había escrito una nota a mano debajo. Decía que el cuento no estaba mal, que estaba hinchado, y que anotara una fórmula: segundo borrador igual a primer borrador menos el diez por ciento.",
        },
        {
          forma: "texto",
          texto:
            "King dice que llevaba dos años escribiendo cuentos a ciegas y que aquella nota manuscrita fue el primer consejo útil que recibió en su vida. La copió en un papel y la pegó en la pared, y sigue aplicándola sesenta años después.",
        },
        {
          forma: "clave",
          rotulo: "Por qué funciona",
          frase: "Porque el primer borrador siempre lleva relleno: explicaciones que el lector no necesita, adjetivos duplicados, escenas que preparan una escena que ya se prepara sola. Quitar un diez por ciento obliga a decidir qué es carne y qué es paja.",
        },
        {
          forma: "texto",
          texto:
            "Su método de revisión tiene dos fases con una imagen muy clara: la primera versión se escribe con la puerta cerrada y la segunda se reescribe con la puerta abierta. Cerrada quiere decir para uno mismo; abierta, pensando en el lector.",
        },
        {
          forma: "texto",
          texto:
            "Y entre las dos, un plazo obligatorio: seis semanas mínimo con el manuscrito guardado en un cajón, sin tocarlo ni pensarlo. Lo compara con dejar reposar una masa: al volver, los fallos que eran invisibles saltan a la vista.",
        },
        {
          forma: "texto",
          texto:
            "Solo entonces se lo da a leer a un grupo pequeño, entre cuatro y ocho personas. Y da una regla práctica para gestionar sus opiniones que resuelve el problema de los comentarios contradictorios.",
        },
        {
          forma: "arte",
          texto:
            "Si a la mitad les gusta una cosa y a la otra mitad no, uno hace lo que quiera con la conciencia tranquila. Si todos señalan lo mismo, está mal y hay que arreglarlo. La unanimidad es el único dato fiable.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "El capítulo más discutido del libro es el de la trama, porque King sostiene que no cree en ella. Dice que planificar una novela le parece incompatible con que resulte creíble, porque la vida de la gente no está planificada.",
        },
        {
          forma: "texto",
          texto:
            "Su alternativa es empezar por una situación y unos personajes, y dejar que ellos decidan. Pone a alguien en un aprieto y observa cómo sale. No sabe el final cuando empieza, y sostiene que si él lo supiera el lector también lo sabría.",
        },
        {
          forma: "clave",
          rotulo: "El fósil",
          frase: "Su imagen es que las historias son cosas encontradas, como fósiles enterrados. El escritor no las inventa: las desentierra. Y cuanto más fina sea la herramienta que use, menos daño le hará al hueso. La trama es el martillo neumático del arqueólogo.",
        },
        {
          forma: "texto",
          texto:
            "Es una imagen preciosa y es también el consejo más peligroso del libro, y hay que decirlo claro: funciona para él y arruina a mucha gente. Escritores excelentes planifican hasta el último capítulo antes de empezar.",
        },
        {
          forma: "texto",
          texto:
            "Nabokov escribía sus novelas en fichas que ordenaba y reordenaba antes de redactar. Muchos autores de novela negra tienen que saber quién es el asesino desde la primera página, por razones puramente técnicas de construcción.",
        },
        {
          forma: "texto",
          texto:
            "King escribe una clase de novela concreta —larga, de personajes, con una situación de partida fuerte— y su método está calibrado para eso. Presentado como ley general, ha dejado a mucha gente con doscientas páginas y ningún sitio adonde ir.",
        },
        {
          forma: "arte",
          texto:
            "El resto de la caja de herramientas sí es transferible casi entero. La descripción, con la regla de los dos o tres detalles. El diálogo, que según él es lo único que revela de verdad a un personaje, porque la gente se define por lo que dice y por cómo lo dice.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "Su consejo sobre el diálogo es escucharlo, no inventarlo: sentarse en un bar y oír cómo habla la gente de verdad, con repeticiones, con frases sin terminar y con palabrotas. Y no limpiarlo después, porque limpiarlo lo mata.",
        },
        {
          forma: "texto",
          texto:
            "Sobre el simbolismo y el tema, su postura es que se buscan después, nunca antes. Se escribe la historia, se guarda seis semanas, y en la relectura se descubre de qué iba. Entonces, y solo entonces, se puede reforzar lo que ya estaba.",
        },
        {
          forma: "texto",
          texto:
            "Su ejemplo es Carrie. Dice que la escribió como una historia de instituto con un final espectacular y que no se dio cuenta hasta la segunda lectura de que trataba del poder femenino y del castigo que recibe una chica por tenerlo.",
        },
        {
          forma: "texto",
          texto:
            "Si lo hubiera sabido antes, sostiene, habría escrito una tesis con personajes en lugar de una novela. Es el argumento más sólido que hay contra escribir para demostrar algo, y vale igual para el ensayo que para la ficción.",
        },
        {
          forma: "texto",
          texto:
            "La contrapartida es que hay que estar dispuesto a descubrir que uno ha escrito trescientas páginas sobre algo que no le interesa, o peor, sobre algo que preferiría no haber sabido de sí mismo. Eso también lo dice, y en una sola frase.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una parte final del libro que es puramente práctica y que casi ningún manual incluye: cómo se busca agente, cómo se manda un manuscrito, qué se cobra y qué no hay que firmar nunca.",
        },
        {
          forma: "texto",
          texto:
            "Además incluye un ejemplo real: un cuento suyo en primer borrador y el mismo cuento corregido a mano, con las tachaduras y las notas al margen, para que se vea qué se quita exactamente.",
        },
        {
          forma: "texto",
          texto:
            "Ese apéndice es lo mejor del libro y lo que menos se comenta, porque enseñar es más difícil que explicar.",
        },
        {
          forma: "texto",
          texto:
            "King terminó la parte teórica en 1997 y se atascó.",
        },
        {
          forma: "texto",
          texto:
            "No tocó el manuscrito durante dieciocho meses.",
        },
        {
          forma: "texto",
          texto:
            "Y el 19 de junio de 1999 salió a andar por el arcén de la carretera número 5, cerca de su casa de Maine, como hacía todas las tardes.",
        },
      ],
    },

    {
      titulo: "La carretera número 5",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Una furgoneta Dodge azul se salió del asfalto en una cuesta sin visibilidad. El conductor se llamaba Bryan Smith, iba distraído con sus perros en la parte de atrás y no vio a nadie hasta el impacto.",
        },
        {
          forma: "texto",
          texto:
            "King salió despedido unos cuatro metros. Se rompió la cadera, cuatro costillas, la clavícula y la pierna derecha por nueve sitios distintos. Tenía un pulmón colapsado y un corte profundo en la cabeza. Estuvo consciente casi todo el rato.",
        },
        {
          forma: "clave",
          rotulo: "La coincidencia que él mismo señala",
          frase: "Llevaba treinta años escribiendo novelas en las que un accidente absurdo destroza a un hombre corriente en una carretera secundaria. Anota que ser atropellado por una furgoneta mientras paseaba es exactamente el tipo de cosa que él le habría hecho a un personaje.",
        },
        {
          forma: "texto",
          texto:
            "Cinco operaciones en diez días. Los médicos consideraron amputarle la pierna. Le pusieron un fijador externo con clavos que le atravesaban el hueso, y estuvo semanas sin poder moverse ni dormir más de dos horas seguidas.",
        },
        {
          forma: "texto",
          texto:
            "Volvió a escribir el 24 de julio, cinco semanas después del accidente. Tabitha le montó una mesa en el pasillo de atrás de la casa, porque su despacho estaba arriba y él no podía subir escaleras.",
        },
        {
          forma: "texto",
          texto:
            "La primera sesión duró una hora y cuarenta minutos. Escribió unas quinientas palabras. Dice que fue como pasar por un campo de zarzas y que cada frase le costó como si fuera la primera de su vida.",
        },
        {
          forma: "arte",
          texto:
            "Y describe lo que pasó después con una honestidad que salva el libro entero: que a las pocas sesiones el dolor empezó a importar menos, no porque se fuera, sino porque escribir lo sacaba de la habitación donde le dolía.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Esa es la tesis final del libro y no aparece hasta la última página: no escribe para ganar dinero, ni para hacerse famoso, ni para que lo quieran. Escribe porque le sostiene. Dice que la escritura es agua y que él tiene sed.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, dónde falla el libro, porque tiene fallos y se recomienda demasiado sin decirlos. El primero ya está dicho y es el mayor: su rechazo a planificar se presenta como principio y es una preferencia personal.",
        },
        {
          forma: "texto",
          texto:
            "El segundo es la cifra de las dos mil palabras diarias. Está escrita por alguien que lleva desde 1974 viviendo de esto a tiempo completo, y leída por gente que escribe entre las diez y las doce de la noche después de trabajar.",
        },
        {
          forma: "clave",
          rotulo: "El tercero, el más de fondo",
          frase: "Es un manual para escribir novela popular de personajes, contada en tercera o primera persona, con trama y con final. De poesía, de ensayo, de teatro, de literatura experimental o de no ficción no dice prácticamente nada, y no avisa de que no lo dice.",
        },
        {
          forma: "texto",
          texto:
            "El cuarto es la regla del adverbio, que se ha convertido en una superstición. King usa adverbios; están en todas sus novelas. Lo que dice es que no se usen para apuntalar diálogos flojos, y eso se ha simplificado hasta convertirlo en un tabú absurdo.",
        },
        {
          forma: "texto",
          texto:
            "El quinto es de estructura: es medio libro de memorias y medio manual, y las dos mitades no están cosidas. Quien lo compre buscando técnica encontrará cien páginas de infancia; quien lo compre por las memorias, cien de gramática.",
        },
        {
          forma: "texto",
          texto:
            "Se puede defender que esa mezcla es el libro: que las memorias son la demostración de que el método funciona, porque enseñan a alguien pobre, sin contactos y sin estudios de escritura convirtiéndose en escritor a base de leer y escribir todos los días.",
        },
        {
          forma: "texto",
          texto:
            "Leído así funciona mejor. Y aun así, quien busque un manual ordenado tiene mejores opciones: hay libros de técnica narrativa con más sistema y menos anécdota, y este no compite con ellos en ese terreno.",
        },
        {
          forma: "texto",
          texto:
            "Lo que ninguno de esos tiene es la parte que hace que este se recomiende de boca en boca: un hombre de cincuenta y dos años, con la pierna rota por nueve sitios, arrastrándose hasta una mesa en un pasillo para escribir quinientas palabras.",
        },
        {
          forma: "arte",
          texto:
            "Y el sexto, que es de tono: escribe como si el talento se repartiera en escalones fijos. Sostiene que a un escritor malo no se le puede hacer competente y a uno bueno no se le puede hacer grande, y eso es una afirmación enorme sin nada que la respalde.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Lo que la gente cree de este libro y no es verdad. Primero: que es su autobiografía. No lo es. Él lo llama currículum y deja fuera casi todo: su matrimonio, sus hijos, sus lecturas, su relación con la crítica.",
        },
        {
          forma: "texto",
          texto:
            "Segundo: que dice que el talento no importa. Dice exactamente lo contrario, y es de las cosas menos amables del libro. Su promesa es hacer competente a quien es correcto, no genio a quien no lo es.",
        },
        {
          forma: "texto",
          texto:
            "Tercero: que lo escribió a raíz del atropello. Lo empezó dos años antes, se atascó, y el accidente lo interrumpió. La parte del accidente es un epílogo añadido, no el origen.",
        },
        {
          forma: "texto",
          texto:
            "Y cuarto: que Carrie fue su primera novela. Fue la primera publicada. Tenía varias escritas y guardadas, y algunas se publicaron después bajo el seudónimo de Bachman.",
        },
        {
          forma: "texto",
          texto:
            "Quitando todo eso, quedan cuatro cosas que sirven a cualquiera que escriba, en cualquier género y con cualquier horario.",
        },
        {
          forma: "texto",
          texto:
            "Leer mucho más de lo que se escribe, y leer también lo malo, que enseña más.",
        },
        {
          forma: "texto",
          texto:
            "Escribir a la misma hora en el mismo sitio con la puerta cerrada, aunque sean trescientas palabras.",
        },
        {
          forma: "texto",
          texto:
            "Guardar el borrador seis semanas antes de tocarlo, y quitarle después el diez por ciento.",
        },
        {
          forma: "texto",
          texto:
            "Y escribir para una persona concreta, con nombre y apellidos, en vez de para un público que no existe.",
        },
        {
          forma: "texto",
          texto:
            "Lo demás es la caravana, la caldera y la papelera de la que su mujer sacó tres páginas arrugadas.",
        },
      ],
    },
  ],
};

export const SOBRE_FOTOGRAFIA: Resumen = {
  id: "sobre-fotografia",
  titulo: "Sobre la fotografía",
  autor: "Susan Sontag",
  ano: 1977,
  gancho: "Es el libro más influyente que se ha escrito sobre fotografía y no contiene ni una sola fotografía. La decisión es deliberada y es también su mayor defecto.",
  porQue:
    "Porque describió en 1977 un mundo saturado de imágenes que entonces no existía y hoy es el nuestro, y porque su autora corrigió públicamente la tesis central veintiséis años después.",
  partes: [
    {
      titulo: "Una librería de Santa Mónica, julio de 1945",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Santa Mónica, California, julio de 1945. Una niña de doce años entra en una librería a matar el tiempo mientras espera. En una mesa hay un libro abierto con fotografías tomadas semanas antes en dos campos de concentración recién liberados, Bergen-Belsen y Dachau.",
        },
        {
          forma: "texto",
          texto:
            "Las mira sin saber lo que está mirando. No tiene contexto, no sabe qué son esos cuerpos ni por qué están así. Escribió más de treinta años después que nada de lo que ha visto en su vida, ni en fotografía ni en la realidad, la cortó tan hondo y tan de golpe.",
        },
        {
          forma: "clave",
          rotulo: "Cómo lo formuló",
          frase: "Dijo que algo se le rompió aquel día y que llegó a un límite; que algo murió y algo sigue llorando. Y que su vida se dividió en dos, en un antes y un después de aquellas fotografías vistas por casualidad a los doce años.",
        },
        {
          forma: "texto",
          texto:
            "Esa niña era Susan Sontag, nacida en Nueva York en 1933, criada en Tucson y en Los Ángeles, huérfana de padre desde los cinco años, y que a los quince entró en la universidad y a los diecisiete ya estaba casada.",
        },
        {
          forma: "texto",
          texto:
            "Estudió filosofía en Chicago, en Harvard y en Oxford, y acabó siendo la ensayista más influyente de su país durante tres décadas: sobre cine, sobre enfermedad, sobre guerra, sobre camp, sobre pornografía y sobre fotografía.",
        },
        {
          forma: "texto",
          texto:
            "Este libro no nació como libro. Son seis ensayos que fue publicando entre 1973 y 1977 en la New York Review of Books, y que después reunió y ordenó. Eso explica su forma: no argumenta linealmente, vuelve una y otra vez sobre las mismas ideas desde ángulos distintos.",
        },
        {
          forma: "arte",
          texto:
            "El detonante fue una exposición. En 1972, el museo de arte moderno de Nueva York montó una retrospectiva de Diane Arbus, fotógrafa que se había suicidado el año anterior y que retrataba a gente que la sociedad prefería no mirar: enanos, gemelas, gigantes, nudistas, personas con discapacidad.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "La exposición fue un acontecimiento y a Sontag le pareció profundamente incómoda, no por las imágenes en sí, sino por lo que hacía el público con ellas: mirarlas en un museo, con calma, como objetos estéticos, sin ninguna relación con las personas retratadas.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale la pregunta que sostiene el libro entero y que no es sobre fotografía sino sobre nosotros: qué nos hace mirar tantas imágenes, y qué le hacemos nosotros a lo que hay dentro de ellas.",
        },
        {
          forma: "texto",
          texto:
            "Conviene situarse en 1977 para entenderlo. Una fotografía era entonces un objeto escaso y caro: había que comprar el carrete, disparar treinta y seis veces, llevarlo a revelar, esperar días y pagar por las copias.",
        },
        {
          forma: "texto",
          texto:
            "Una familia normal hacía tal vez cien o doscientas fotografías al año, casi todas de cumpleaños, bodas y vacaciones. Las imágenes que se veían venían de la prensa, de la televisión, de la publicidad y del cine, y todas estaban seleccionadas por alguien.",
        },
        {
          forma: "clave",
          rotulo: "Lo que anticipó",
          frase: "Escribiendo en ese mundo, Sontag describió otro: uno en el que la gente vive rodeada de imágenes, colecciona imágenes, se relaciona a través de imágenes y experimenta el mundo como una acumulación de imágenes. Hoy eso no es una tesis, es una descripción del día.",
        },
        {
          forma: "texto",
          texto:
            "Ese es el motivo por el que el libro sigue reeditándose. No porque acertara con los detalles —muchos han quedado obsoletos—, sino porque su diagnóstico de fondo se cumplió con una exactitud que ella no podía comprobar.",
        },
        {
          forma: "texto",
          texto:
            "Y hay que decir enseguida una cosa que sorprende a mucha gente al abrir el libro: no tiene fotografías. Ni una. Trescientas páginas sobre imágenes sin una sola imagen reproducida.",
        },
        {
          forma: "arte",
          texto:
            "La decisión es deliberada y ella la defendió: quería que el lector pensara sobre la fotografía en general, no sobre fotografías concretas. El precio es que se puede escribir cualquier cosa sobre una imagen que nadie está viendo.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Su estilo tampoco ayuda a discutirle. Escribe en aforismos, en frases cerradas que suenan definitivas, y encadena afirmaciones grandes sin detenerse a demostrarlas. Es una prosa magnífica de leer y muy difícil de rebatir por partes.",
        },
        {
          forma: "texto",
          texto:
            "Ella misma era consciente. Dijo alguna vez que sus ensayos sobre fotografía eran una discusión consigo misma, y que cada uno intentaba corregir el anterior sin conseguirlo del todo.",
        },
        {
          forma: "texto",
          texto:
            "Escribió el libro además en unas circunstancias que no aparecen en él y que conviene saber: entre 1975 y 1977 estaba en tratamiento por un cáncer de mama con un pronóstico que sus médicos consideraban muy malo, y a la vez escribía otro libro sobre las metáforas de la enfermedad.",
        },
        {
          forma: "texto",
          texto:
            "Ese dato explica la insistencia del libro en la muerte. La idea de que toda fotografía certifica que un instante existió y ya no existe la escribió alguien que tenía razones concretas para pensar en instantes que no volverían.",
        },
        {
          forma: "texto",
          texto:
            "Y explica también su tono. No es un libro de un observador tranquilo comentando un fenómeno cultural: es un libro escrito con urgencia por alguien que creía que le quedaba poco tiempo para decir lo que tenía que decir.",
        },
        {
          forma: "texto",
          texto:
            "El primer ensayo, el que da el tono, se titula con una referencia que sitúa el asunto en el sitio más antiguo posible de la filosofía occidental.",
        },
        {
          forma: "texto",
          texto:
            "El mito de la caverna de Platón: unos prisioneros encadenados que solo ven sombras proyectadas en una pared y creen que eso es el mundo.",
        },
        {
          forma: "texto",
          texto:
            "Sontag empieza diciendo que la humanidad sigue en esa caverna, encantada con las imágenes.",
        },
        {
          forma: "texto",
          texto:
            "Y que la novedad no es que nos engañen.",
        },
        {
          forma: "texto",
          texto:
            "Es que ahora podemos llevárnoslas.",
        },
      ],
    },

    {
      titulo: "En la caverna de Platón",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Su primera afirmación es la que sostiene todo lo demás: una fotografía no es una opinión sobre el mundo, es un trozo del mundo. No se parece a un cuadro ni a un texto; se parece a una huella, a una máscara mortuoria o a una pisada en el barro.",
        },
        {
          forma: "texto",
          texto:
            "La diferencia es física. Un retrato pintado es la interpretación de un pintor; una fotografía es el resultado de que la luz reflejada en una persona concreta impactara en una superficie sensible en un instante concreto. Hubo contacto.",
        },
        {
          forma: "clave",
          rotulo: "Por qué eso importa",
          frase: "Porque le da a la fotografía una autoridad que ningún otro tipo de imagen tiene. Un dibujo de un fantasma es un dibujo; una fotografía de un fantasma es una prueba, o lo parece. La fotografía no representa: certifica.",
        },
        {
          forma: "texto",
          texto:
            "Y a la vez, dice Sontag, esa autoridad es una trampa, porque toda fotografía es también una interpretación disfrazada de constatación: alguien eligió el encuadre, el momento, qué dejaba fuera, y esas elecciones desaparecen en el resultado.",
        },
        {
          forma: "texto",
          texto:
            "El ejemplo clásico es la doble fotografía: la misma manifestación fotografiada desde delante, con la calle llena, o desde un lado, con un hueco. Las dos son verdad y las dos son incompatibles como información.",
        },
        {
          forma: "texto",
          texto:
            "Su segunda idea es que las fotografías cambian lo que consideramos digno de mirarse. Enseñan un código visual nuevo y, al enseñarlo, amplían la lista de cosas que uno cree tener derecho a observar.",
        },
        {
          forma: "arte",
          texto:
            "Antes de la fotografía, casi nadie había visto de cerca la cara de un desconocido pobre de otro continente, ni el interior de una mina, ni un cadáver que no fuera de su familia. La fotografía convirtió todo eso en algo que se puede mirar cómodamente sentado.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale una de sus frases más citadas: que fotografiar es esencialmente un acto de no intervención. El fotógrafo que capta el momento exacto en que algo terrible ocurre ha elegido, aunque sea por una fracción de segundo, hacer la foto en lugar de otra cosa.",
        },
        {
          forma: "texto",
          texto:
            "Ella no lo plantea como una acusación moral simple, y a veces se lee así. Su matiz es que la cámara instala una relación con el mundo: la del que mira desde fuera, y que esa posición es cómoda y crea hábito.",
        },
        {
          forma: "texto",
          texto:
            "La tercera idea del libro es la de coleccionar. Fotografiar es acumular el mundo en trozos pequeños y manejables, y una colección de fotografías es una forma de posesión de sitios y de personas a los que uno no puede volver.",
        },
        {
          forma: "clave",
          rotulo: "La frase que resume el libro",
          frase: "Sostiene que en la sociedad moderna todo existe para terminar en una fotografía. Cualquier suceso, cualquier viaje, cualquier comida y cualquier cara valen en parte por la imagen que producirán, y esa idea escrita en 1977 describe exactamente 2025.",
        },
        {
          forma: "texto",
          texto:
            "Aplicado al turismo, su análisis es tan certero que resulta incómodo. Sostiene que la cámara resuelve la ansiedad del viajero: da algo que hacer, convierte el tiempo libre en actividad y produce una prueba de que se estuvo allí.",
        },
        {
          forma: "texto",
          texto:
            "Su observación es que esa necesidad es especialmente fuerte en las culturas con una ética del trabajo intensa, donde no hacer nada produce culpa. La cámara convierte las vacaciones en una tarea con un producto al final.",
        },
        {
          forma: "texto",
          texto:
            "Y añade el efecto secundario: fotografiar algo permite no mirarlo. La atención se va al encuadre, a la luz y al momento, y la experiencia queda aplazada para cuando se vean las fotos, que a menudo es nunca.",
        },
        {
          forma: "arte",
          texto:
            "Hay una parte de esa intuición que la psicología ha investigado después. Varios estudios encontraron que la gente recuerda peor los objetos que fotografía en un museo que los que se limita a mirar, y el efecto se ha replicado con matices.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "No es una confirmación de Sontag, que no hablaba de memoria sino de experiencia, y sí es una de las pocas afirmaciones del libro que se puede comprobar y que ha resistido bastante bien.",
        },
        {
          forma: "texto",
          texto:
            "El álbum familiar recibe un tratamiento aparte y sorprendente. Sontag sostiene que la fotografía se convirtió en un rito familiar justo cuando la familia extensa se estaba deshaciendo por la industrialización y las migraciones.",
        },
        {
          forma: "texto",
          texto:
            "Es decir: el álbum no documenta una familia que existe; es la prueba portátil de una familia que se está dispersando. Las fotos de boda y de bautizo aumentan cuanto menos se ven los parientes.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un dato que ella señala y que cualquiera puede comprobar en su propia casa: casi nadie fotografía lo malo. Los álbumes están llenos de cumpleaños y de playas, y no hay ni una imagen de un divorcio, de una discusión o de un funeral.",
        },
        {
          forma: "texto",
          texto:
            "El álbum familiar no es un registro: es una versión editada, y la edición está hecha por defecto, sin que nadie la decida.",
        },
        {
          forma: "texto",
          texto:
            "Esa observación se ha vuelto todavía más cierta con las redes sociales, donde el álbum se hizo público y la edición dejó de ser inconsciente: ahora se elige deliberadamente qué versión de la propia vida se enseña, y se descarta lo demás con un gesto.",
        },
        {
          forma: "texto",
          texto:
            "Sontag no llegó a ver eso y sí describió el mecanismo. Dijo que las fotografías no documentan la felicidad de una familia: la producen, porque el propio acto de posar para la cámara obliga a poner la cara que corresponde.",
        },
        {
          forma: "texto",
          texto:
            "Hay un detalle que ella señala y que cualquiera reconoce: la orden de sonreír. Nadie sonríe espontáneamente al ver una cámara; se sonríe porque se sabe lo que hay que hacer, y ese gesto aprendido llena después el álbum de una alegría que no ocurrió.",
        },
        {
          forma: "texto",
          texto:
            "Todo esto sirve de preparación para la parte del libro que ha hecho discutir durante cincuenta años.",
        },
        {
          forma: "texto",
          texto:
            "Que empieza con una analogía sobre el gesto de hacer una fotografía.",
        },
        {
          forma: "texto",
          texto:
            "Y con el vocabulario que se usa en inglés para describirlo.",
        },
      ],
    },

    {
      titulo: "Disparar",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Sontag señala que en inglés el vocabulario de la fotografía es el de las armas. Se carga la cámara, se apunta y se dispara. En español se usa disparar también, y se habla de captar y de cazar imágenes.",
        },
        {
          forma: "texto",
          texto:
            "Su tesis es que la cámara funciona como una sublimación del arma: permite apropiarse de alguien sin tocarlo. Lo llama un asesinato blando, y aclara enseguida a qué se refiere, porque la frase se ha citado mil veces fuera de contexto.",
        },
        {
          forma: "clave",
          rotulo: "Qué quiere decir con eso",
          frase: "No que los fotógrafos sean violentos. Que fotografiar a alguien es convertirlo en objeto: en algo que se posee, se guarda, se recorta, se muestra y se juzga, sin que esa persona tenga después ningún control sobre lo que se hace con su cara.",
        },
        {
          forma: "texto",
          texto:
            "Su prueba histórica es la relación entre la fotografía y las expediciones coloniales, las clasificaciones raciales, los archivos policiales y los estudios antropológicos del siglo diecinueve, donde la cámara sirvió literalmente para catalogar personas.",
        },
        {
          forma: "texto",
          texto:
            "También aparece el safari fotográfico, que ella analiza con precisión: sustituyó al safari de caza en el momento en que matar animales dejó de estar bien visto, y conservó exactamente la misma estructura de acecho, trofeo y colección.",
        },
        {
          forma: "texto",
          texto:
            "El desequilibrio de poder es el eje de todo el capítulo, y se ve mejor preguntando quién fotografía a quién. Históricamente, los ricos han fotografiado a los pobres, los sanos a los enfermos, los del norte a los del sur y los adultos a los niños.",
        },
        {
          forma: "arte",
          texto:
            "Muy pocas veces al revés. Y quien aparece en la imagen casi nunca decide cómo se le retrata, ni dónde se publica, ni qué pie de foto le ponen. Esa asimetría es invisible en el resultado, que se presenta como un documento neutral.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "El caso que discute a fondo es el de los fotógrafos que documentaron la pobreza rural americana durante la Gran Depresión, un proyecto financiado por el gobierno que produjo imágenes extraordinarias y que hoy se estudia como fotografía social.",
        },
        {
          forma: "texto",
          texto:
            "Sontag cuenta el procedimiento habitual: se hacían decenas de tomas de la misma persona hasta conseguir la cara adecuada, la que expresaba lo que el fotógrafo quería contar. Eso significa que el documento se seleccionó para producir un efecto.",
        },
        {
          forma: "texto",
          texto:
            "Su conclusión no es que aquello estuviera mal hecho, sino que un documento fotográfico es siempre también una composición, y que llamarlo documento tapa el trabajo de selección que hay detrás.",
        },
        {
          forma: "clave",
          rotulo: "El problema de la belleza",
          frase: "Una fotografía de miseria bien hecha es hermosa. Y ahí hay una trampa que Sontag señala mejor que nadie: la belleza formal de la imagen puede convertir el sufrimiento de alguien en un objeto agradable de contemplar, colgado en una pared.",
        },
        {
          forma: "texto",
          texto:
            "Ese es el reproche que le hizo a la exposición de Diane Arbus y el que recorre el libro entero. No es la intención del fotógrafo lo que le preocupa: es lo que hace el espectador en una sala de museo.",
        },
        {
          forma: "texto",
          texto:
            "Después de esa parte, el libro se vuelve más filosófico. Sostiene que la fotografía es la única forma artística que es intrínsecamente surrealista, y el argumento es bueno aunque suene grandilocuente.",
        },
        {
          forma: "texto",
          texto:
            "Su razón es que basta con que pase el tiempo. Cualquier fotografía se vuelve extraña con los años: la ropa, los coches, los peinados y los gestos se convierten en otra cosa. Ninguna otra imagen adquiere esa rareza sola, sin que nadie haga nada.",
        },
        {
          forma: "arte",
          texto:
            "Una fotografía de una calle cualquiera de 1965 es hoy una imagen de un mundo desaparecido, y lo es sin que su autor lo pretendiera. El tiempo hace surrealista todo lo que se fotografía, y esa es la mejor idea del libro.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale también su relación con la muerte, que es constante en el libro. Toda fotografía es un memento mori: certifica que ese instante existió y que ya no existe, y que la persona retratada está más cerca de morir que cuando se hizo la imagen.",
        },
        {
          forma: "texto",
          texto:
            "Por eso, dice, las fotos de gente joven que ha muerto son insoportables de una manera particular: contienen a la vez la prueba de que estaba viva y la certeza de que ya no lo está.",
        },
        {
          forma: "texto",
          texto:
            "Y por eso los álbumes familiares se vuelven más difíciles de mirar con los años, aunque las imágenes sean las mismas y aunque todas sean de días felices.",
        },
        {
          forma: "texto",
          texto:
            "Hay una consecuencia práctica de esa idea que se ve mejor en las fotografías de prensa antiguas. Una imagen de una manifestación de hace cincuenta años ya no informa sobre la manifestación: informa sobre la ropa, los peinados, los coches y las caras.",
        },
        {
          forma: "texto",
          texto:
            "El contenido político se evapora y queda el documento antropológico. Sontag sostiene que eso le pasa a toda fotografía sin excepción, y que la única defensa es el texto: sin un pie de foto que fije de qué va, la imagen se convierte con el tiempo en otra cosa.",
        },
        {
          forma: "texto",
          texto:
            "De ahí su desconfianza hacia los museos de fotografía. Colgar en una pared blanca una imagen tomada para denunciar algo la convierte en un objeto de contemplación, y en ese traslado la denuncia se queda fuera del marco.",
        },
        {
          forma: "texto",
          texto:
            "Con ese material montado, el libro llega a su afirmación más fuerte y más discutida.",
        },
        {
          forma: "texto",
          texto:
            "La que tiene que ver con lo que le pasa a alguien que ve muchas imágenes de gente sufriendo.",
        },
        {
          forma: "texto",
          texto:
            "Y que empieza volviendo a aquella librería de Santa Mónica.",
        },
      ],
    },

    {
      titulo: "La anestesia",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Sontag vuelve a las fotografías de los campos que vio a los doce años y hace una observación sobre sí misma que es el origen de toda esta parte: la primera vez que las vio, la hirieron. Las veces siguientes, ya no.",
        },
        {
          forma: "texto",
          texto:
            "Y generaliza a partir de ahí: sostiene que la exposición repetida a imágenes de atrocidades desgasta su capacidad de conmover. Que la primera vez impacta, la décima informa y la centésima aburre.",
        },
        {
          forma: "clave",
          rotulo: "La tesis de la anestesia",
          frase: "Cuanto más se ve, menos se siente. Las imágenes de sufrimiento, repetidas, no aumentan la compasión: la agotan. Y una sociedad que consume atrocidad a diario acaba mirándola como mira cualquier otra cosa, con el mismo desinterés.",
        },
        {
          forma: "texto",
          texto:
            "Esa frase se ha convertido en un lugar común: se cita en clases de periodismo, en debates sobre las noticias y en cualquier discusión sobre las imágenes de guerra. Y hay que decir dos cosas sobre ella.",
        },
        {
          forma: "texto",
          texto:
            "La primera es que Sontag no la demuestra en ningún momento. Es una observación introspectiva convertida en ley general, sin un solo estudio detrás, escrita con la seguridad de quien no espera que le pidan pruebas.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es que la investigación posterior sobre lo que se ha llamado fatiga de la compasión da resultados mixtos: hay habituación en algunos contextos y no en otros, y depende mucho de si el espectador siente que puede hacer algo.",
        },
        {
          forma: "arte",
          texto:
            "Ese matiz aparece en el propio libro, en su afirmación más interesante y menos citada: que una fotografía no puede crear una posición moral, solo reforzar una que ya existe. Una imagen de guerra conmueve a quien ya piensa que esa guerra es injusta.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Su ejemplo es que las mismas fotografías de víctimas se han usado, en distintos conflictos, para argumentar cosas opuestas, y que cada bando ha visto en ellas la confirmación de lo que ya sostenía.",
        },
        {
          forma: "texto",
          texto:
            "De ahí saca la consecuencia práctica que sigue siendo válida: para que una imagen movilice, hace falta que exista antes un marco político que le dé sentido, y una vía por la que quien la ve pueda actuar.",
        },
        {
          forma: "texto",
          texto:
            "Sin eso, la fotografía de un niño muerto produce dolor durante treinta segundos y después se pasa a la siguiente, y ese ciclo es exactamente el que describe cualquier persona que baje por una pantalla hoy.",
        },
        {
          forma: "clave",
          rotulo: "El otro problema que señala",
          frase: "Que las imágenes de sufrimiento lejano crean una ilusión de conocimiento. Ver muchas fotos de una guerra hace sentir que uno sabe lo que pasa allí, cuando lo que tiene es una colección de instantes sin causas, sin historia y sin nombres.",
        },
        {
          forma: "texto",
          texto:
            "Y una fotografía, dice, no puede explicar nada por sí misma. Necesita un texto que diga qué es, dónde, cuándo y por qué. Sin ese texto es un objeto ambiguo que cada uno interpreta según lo que ya cree.",
        },
        {
          forma: "texto",
          texto:
            "Ese punto es el más sólido del libro y el que más se ha confirmado. Las mismas imágenes circulan hoy atribuidas a conflictos distintos, con pies de foto contradictorios, y funcionan igual de bien para todos ellos.",
        },
        {
          forma: "texto",
          texto:
            "El último capítulo del libro no es un capítulo: es una antología de citas sobre fotografía, de fotógrafos, escritores y filósofos, ordenadas sin comentario, en homenaje explícito a un proyecto de Walter Benjamin.",
        },
        {
          forma: "arte",
          texto:
            "Es una decisión coherente con todo lo anterior: después de trescientas páginas sosteniendo que las imágenes se coleccionan y se descontextualizan, ella termina coleccionando frases y sacándolas de contexto para que el lector haga con ellas lo que quiera.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "El libro salió en 1977, ganó el premio de la crítica y se convirtió inmediatamente en lectura obligatoria en las escuelas de fotografía, lo cual tiene su ironía, porque es un libro escrito en contra de casi todo lo que hacen los fotógrafos.",
        },
        {
          forma: "texto",
          texto:
            "Y produjo una reacción airada en la profesión. Varios fotógrafos importantes escribieron respuestas señalando que Sontag hablaba de fotografía sin haber hecho fotografías, sin conocer el trabajo técnico y sin distinguir entre unos y otros.",
        },
        {
          forma: "texto",
          texto:
            "El reproche tiene fundamento. En trescientas páginas no hay una sola descripción de cómo se toma una decisión en el momento de disparar, ni de qué hace un fotógrafo en una situación difícil, ni de por qué elige un objetivo u otro.",
        },
        {
          forma: "texto",
          texto:
            "Ella escribe siempre desde el lado del que mira las imágenes acabadas, y su libro trata en realidad de los espectadores y no de la fotografía.",
        },
        {
          forma: "texto",
          texto:
            "El fotógrafo que respondió con más dureza fue el crítico y comisario John Szarkowski, del museo de arte moderno de Nueva York, que llevaba años defendiendo la fotografía como arte con lenguaje propio y que veía en Sontag exactamente lo contrario.",
        },
        {
          forma: "texto",
          texto:
            "Su reproche era que el libro trataba todas las fotografías como síntomas de una enfermedad cultural, sin admitir nunca que una imagen pudiera ser sencillamente buena. Y es un reproche justo: en trescientas páginas ella no elogia una sola fotografía.",
        },
        {
          forma: "texto",
          texto:
            "Es la diferencia entre criticar un oficio y criticar su efecto social. Sontag hace lo segundo todo el rato y lo presenta como lo primero, y de ahí viene buena parte del enfado que produjo entre quienes se dedicaban a esto.",
        },
        {
          forma: "texto",
          texto:
            "Durante veinticinco años defendió su tesis en entrevistas y en conferencias, y se convirtió en la posición estándar sobre el asunto.",
        },
        {
          forma: "texto",
          texto:
            "Hasta que en 2003, con setenta años y enferma, publicó otro libro sobre lo mismo.",
        },
        {
          forma: "texto",
          texto:
            "Y lo dedicó, en buena parte, a corregirse.",
        },
      ],
    },

    {
      titulo: "Ante el dolor de los demás",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El segundo libro se llama Ante el dolor de los demás, se publicó en 2003, tiene la mitad de páginas que el primero y está escrito después de haber estado en Sarajevo durante el asedio, donde Sontag pasó temporadas y llegó a dirigir una obra de teatro bajo los bombardeos.",
        },
        {
          forma: "texto",
          texto:
            "Esa experiencia cambia el punto de vista del libro. Ya no escribe sobre gente que mira imágenes desde un sofá: escribe habiendo estado en el sitio del que salen las imágenes y habiendo visto cómo se cuenta desde fuera.",
        },
        {
          forma: "clave",
          rotulo: "Lo que corrige",
          frase: "Que no está claro que ver muchas imágenes de horror insensibilice. Dice que fue una afirmación cómoda y que no tiene datos que la respalden, y que el problema no es que la gente sienta menos: es que sentir sin poder hacer nada resulta insoportable y se busca la salida.",
        },
        {
          forma: "texto",
          texto:
            "Y cuestiona algo más de fondo: el nosotros de su primer libro. Preguntarse qué nos hacen las imágenes supone un espectador único, occidental, seguro y a distancia. Alguien que reconoce a un familiar en una fotografía de guerra no está haciendo nada de eso.",
        },
        {
          forma: "texto",
          texto:
            "Ese giro es lo mejor que se puede decir de ella como pensadora, y no es frecuente: una autora reconocida revisando en público, con nombre y apellidos, la tesis que la hizo influyente y que llevaba veinticinco años citándose.",
        },
        {
          forma: "texto",
          texto:
            "Mantiene, en cambio, casi todo lo demás: que una fotografía no puede argumentar sola, que necesita un texto, que las imágenes de sufrimiento pueden convertirse en objetos estéticos y que hay una asimetría de poder en quién retrata a quién.",
        },
        {
          forma: "arte",
          texto:
            "Y añade una idea nueva y dura: que existe un placer en mirar el sufrimiento ajeno, que es antiquísimo y que la fotografía no inventó. Cita a Platón y a Edmund Burke, y dice que negarlo es una hipocresía que impide entender por qué miramos.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Murió al año siguiente, en diciembre de 2004, de una leucemia. Había tenido antes un cáncer de mama en los años setenta, mientras escribía este libro, y un sarcoma de útero en los noventa. Escribió también dos libros sobre la enfermedad y sus metáforas.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, dónde falla Sobre la fotografía leído hoy. Lo primero, ya dicho y es lo más llamativo: no tiene imágenes. Un libro que analiza fotografías concretas sin mostrarlas obliga al lector a fiarse de la descripción de la autora.",
        },
        {
          forma: "texto",
          texto:
            "Lo segundo es que no distingue. Trata igual la fotografía de guerra, el retrato de estudio, el álbum familiar, la publicidad y la fotografía científica, como si todas fueran la misma actividad con la misma ética.",
        },
        {
          forma: "clave",
          rotulo: "El tercero, el que más se le ha reprochado",
          frase: "Escribe sobre un oficio desde fuera y sin curiosidad por cómo se hace. No hay técnica, no hay condiciones de trabajo, no hay encargos, no hay dinero. Y buena parte de las decisiones que critica las toma un editor de fotografía, no el fotógrafo.",
        },
        {
          forma: "texto",
          texto:
            "El cuarto es de estilo. La prosa aforística es magnífica y no admite discusión: cada frase se presenta cerrada, sin condicionales y sin datos, y quien no esté de acuerdo no tiene por dónde entrar.",
        },
        {
          forma: "texto",
          texto:
            "Y el quinto es de fecha, y es inevitable. El libro describe un mundo con escasez de imágenes. Hoy se hacen más fotografías en dos minutos que en todo el siglo diecinueve, y casi todas las hace y las mira la misma persona en el mismo aparato.",
        },
        {
          forma: "arte",
          texto:
            "Eso cambia varias de sus premisas. La foto ya no es un objeto que se guarda: es un flujo que se ve una vez. Y quien fotografía ya no es un profesional con poder sobre un retratado, sino cualquiera fotografiándose a sí mismo.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "El autorretrato masivo es el fenómeno que ella no podía prever y que pone patas arriba su análisis del poder: aquí la persona retratada, la que decide el encuadre y la que publica son la misma, y sin embargo el resultado no es más libre.",
        },
        {
          forma: "texto",
          texto:
            "Con todo eso puesto, sus dos ideas centrales han aguantado mejor que casi cualquier cosa escrita sobre medios en los años setenta.",
        },
        {
          forma: "texto",
          texto:
            "La primera: que la experiencia se está convirtiendo en la producción de imágenes de la experiencia, y que todo lo que hacemos vale en parte por la imagen que dejará.",
        },
        {
          forma: "texto",
          texto:
            "La segunda: que una imagen no argumenta. Necesita palabras que digan qué es, y sin ellas cada uno ve la confirmación de lo que ya pensaba.",
        },
        {
          forma: "texto",
          texto:
            "Lo que la gente cree de este libro y no es verdad. Lo primero: que Sontag odiaba la fotografía. Le fascinaba, coleccionaba imágenes, escribió sobre ellas durante treinta años y fue pareja de una de las fotógrafas más importantes de su tiempo.",
        },
        {
          forma: "texto",
          texto:
            "Segundo: que la frase de la cámara como arma acusa a los fotógrafos de violentos. Habla de apropiación, no de agresión, y ella misma matiza el alcance de la analogía en el mismo capítulo en que la propone.",
        },
        {
          forma: "texto",
          texto:
            "Tercero: que sostuvo siempre lo mismo. Corrigió la tesis de la anestesia en 2003, por escrito y sin excusas, después de haber pasado temporadas en una ciudad sitiada.",
        },
        {
          forma: "texto",
          texto:
            "Cuarto: que es un libro de crítica fotográfica. No analiza obras ni fotógrafos con detalle. Es un ensayo sobre lo que las imágenes hacen con quien las mira, y el material es el espectador, no la fotografía.",
        },
        {
          forma: "texto",
          texto:
            "Y quinto: que está anticuado. Lo están sus ejemplos. Su diagnóstico describe un mundo saturado de imágenes que en 1977 no existía y que ella dedujo a partir de una exposición en un museo y de un álbum de familia.",
        },
        {
          forma: "texto",
          texto:
            "La manera honesta de leerlo hoy es como lo que es: un ensayo brillante, injusto con los fotógrafos, sin pruebas, y que acertó en lo esencial por delante de todo el mundo.",
        },
        {
          forma: "texto",
          texto:
            "Escrito por una mujer que a los doce años miró unas fotografías en una librería y pasó el resto de su vida intentando explicar qué le habían hecho.",
        },
      ],
    },
  ],
};

export const HEROE_MIL_CARAS: Resumen = {
  id: "heroe-mil-caras",
  titulo: "El héroe de las mil caras",
  autor: "Joseph Campbell",
  ano: 1949,
  gancho: "Un hombre sin doctorado, que se pasó cinco años sin trabajo leyendo nueve horas al día en una cabaña, escribió el esquema con el que se construyen hoy la mitad de las películas de Hollywood.",
  porQue:
    "Porque su estructura funciona sorprendentemente bien para escribir historias y es bastante mala como descripción de la mitología del mundo, y casi nadie distingue las dos cosas.",
  partes: [
    {
      titulo: "Cinco años leyendo en una cabaña",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Woodstock, estado de Nueva York, 1929. Un joven de veinticinco años acaba de volver de estudiar en París y en Múnich y se encuentra con que en Estados Unidos no hay trabajo para nadie: la bolsa se ha hundido y empieza la Gran Depresión.",
        },
        {
          forma: "texto",
          texto:
            "Alquila una cabaña sin agua corriente en el bosque, se instala allí con lo puesto y organiza sus días en cuatro bloques de lectura de cuatro horas, de los que hace tres al día. Estuvo así cinco años, sin empleo, sin publicar nada y sin buscarse un título.",
        },
        {
          forma: "clave",
          rotulo: "Lo que leyó en esos años",
          frase: "Mitología comparada, antropología, psicoanálisis, literatura medieval, filosofía india y novela moderna, todo a la vez y sin plan académico. Lo llamó después el periodo más importante de su vida, y de esa mezcla desordenada salió todo lo que escribió luego.",
        },
        {
          forma: "texto",
          texto:
            "El joven se llamaba Joseph Campbell, había nacido en Nueva York en 1904 en una familia católica irlandesa, y su obsesión con los mitos empezó a los siete años, cuando su padre lo llevó a ver el espectáculo del Oeste de Buffalo Bill en el Madison Square Garden.",
        },
        {
          forma: "texto",
          texto:
            "Lo que le fascinó no fueron los vaqueros: fueron los indios. Empezó a leer todo lo que encontró sobre culturas nativas americanas y a los diez años tenía acceso, por su cuenta, a la sala de investigadores del Museo de Historia Natural.",
        },
        {
          forma: "texto",
          texto:
            "Estudió en Columbia, se especializó en literatura artúrica medieval y consiguió una beca para Europa. En París le pilló de lleno el momento en que se estaban inventando el arte y la literatura del siglo veinte, y en Múnich descubrió a Freud y a Jung.",
        },
        {
          forma: "arte",
          texto:
            "Al volver quiso hacer una tesis doctoral que combinara el arte moderno, el sánscrito y la mitología comparada. En Columbia le dijeron que eligiera un campo y se atuviera a él. Se negó, abandonó el doctorado y no volvió a intentarlo nunca.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Ese detalle importa para entender el libro y para entender las críticas que recibió: Campbell nunca fue un académico en el sentido estricto, no se formó en el método comparativo de su disciplina y no publicó en revistas revisadas por pares.",
        },
        {
          forma: "texto",
          texto:
            "En 1934 lo contrataron en el Sarah Lawrence College, una universidad pequeña de artes liberales al norte de Nueva York, donde dio clase durante treinta y ocho años. Sus estudiantes lo recuerdan como uno de los mejores profesores que han tenido nunca.",
        },
        {
          forma: "texto",
          texto:
            "El héroe de las mil caras se publicó en 1949, en una colección financiada por una fundación dedicada a difundir la obra de Jung. Vendió despacio los primeros años y se convirtió en un libro de culto a partir de los sesenta.",
        },
        {
          forma: "clave",
          rotulo: "Su pregunta de partida",
          frase: "Por qué los relatos de héroes de culturas que nunca se conocieron —griegos, esquimales, aborígenes australianos, hindúes, celtas, africanos— se parecen tanto entre sí. Y si esa coincidencia dice algo sobre la mente humana en general.",
        },
        {
          forma: "texto",
          texto:
            "Su respuesta, tomada directamente de Jung, es que existen unas estructuras psíquicas comunes a toda la especie, y que los mitos son la forma en que esas estructuras se expresan en cada cultura con los materiales que tiene a mano.",
        },
        {
          forma: "texto",
          texto:
            "Es decir: los héroes son distintos, las pruebas son distintas y los dioses son distintos, y el recorrido es siempre el mismo. De ahí el título: un solo héroe con mil caras, la misma figura contada de mil maneras.",
        },
        {
          forma: "texto",
          texto:
            "Al esquema lo llamó monomito, y la palabra no es suya: la sacó del Finnegans Wake de James Joyce, un libro que Campbell había estudiado a fondo y sobre el que publicó una guía de lectura antes que este.",
        },
        {
          forma: "arte",
          texto:
            "Su tesis sobre para qué sirve todo esto es más ambiciosa que la de contar historias. Sostiene que los mitos son manuales de instrucciones para las transiciones difíciles de una vida: dejar la infancia, casarse, tener hijos, envejecer y morir.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Y que las sociedades modernas se han quedado sin ellos. Que hemos desmontado los rituales que acompañaban esos pasos y no hemos puesto nada en su sitio, y que por eso la gente atraviesa esos cambios sin ningún mapa.",
        },
        {
          forma: "texto",
          texto:
            "Esa idea, la de la orfandad mitológica del hombre moderno, es la que conectó con el público de los años sesenta y setenta y la que explica que un libro académico de 1949 acabara siendo una biblia de la contracultura.",
        },
        {
          forma: "texto",
          texto:
            "Su ejemplo favorito para explicarlo era el de las sociedades tradicionales que separaban físicamente a los adolescentes de sus familias durante semanas, los sometían a pruebas duras y los devolvían con otro nombre y otro estatus, reconocido por todo el pueblo.",
        },
        {
          forma: "texto",
          texto:
            "Sostenía que una sociedad sin esos ritos deja a la gente joven sin ninguna señal de que ha dejado de ser niña, y que muchos comportamientos de riesgo de la adolescencia son intentos improvisados de darse a uno mismo la prueba que nadie le ha puesto.",
        },
        {
          forma: "texto",
          texto:
            "Es una idea sugerente y no está demostrada, como casi todo lo suyo. Y explica por qué su obra caló entre lectores jóvenes en un momento en que las instituciones que marcaban esos pasos —la iglesia, la mili, el matrimonio temprano— se estaban desmontando a la vez.",
        },
        {
          forma: "texto",
          texto:
            "Conviene avisar de una cosa antes de seguir: el libro es difícil de leer. Está escrito en una prosa densa, con citas en varios idiomas, saltos entre culturas sin transición y párrafos francamente místicos.",
        },
        {
          forma: "texto",
          texto:
            "Su reputación de manual claro viene de las versiones simplificadas que llegaron después.",
        },
        {
          forma: "texto",
          texto:
            "El original tiene cuatrocientas páginas y no se parece a un esquema de guion.",
        },
        {
          forma: "texto",
          texto:
            "Aunque contenga uno dentro.",
        },
      ],
    },

    {
      titulo: "El monomito",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La formulación completa cabe en una frase que Campbell repite varias veces en el libro: un héroe se aventura desde el mundo cotidiano hacia una región de prodigios sobrenaturales, se enfrenta allí a fuerzas fabulosas y obtiene una victoria decisiva, y regresa con el poder de conceder dones a los suyos.",
        },
        {
          forma: "texto",
          texto:
            "Esa frase tiene tres partes y son las tres del esquema entero: la separación, la iniciación y el regreso. Cada una se subdivide, y las subdivisiones suman diecisiete etapas que ningún mito concreto cumple todas, cosa que él admite explícitamente.",
        },
        {
          forma: "clave",
          rotulo: "La primera etapa",
          frase: "La llamada a la aventura: algo rompe la normalidad. Un mensajero, una carta, una desgracia, una herencia inesperada. El protagonista está viviendo una vida y de pronto se le presenta un asunto que le obliga a salir de ella.",
        },
        {
          forma: "texto",
          texto:
            "La segunda etapa es la que más se cita en los talleres de escritura y la que a Campbell más le interesaba psicológicamente: el rechazo de la llamada. El héroe dice que no. Tiene cosas que hacer, no es el indicado, alguien lo hará mejor.",
        },
        {
          forma: "texto",
          texto:
            "Campbell sostiene que ese rechazo es lo más humano del esquema y que en muchos mitos tiene consecuencias: quien se niega a lo que le corresponde queda atrapado en una vida que ya no le sirve, y la historia se convierte en una historia de estancamiento.",
        },
        {
          forma: "texto",
          texto:
            "Después llega la ayuda sobrenatural, que en la práctica es la figura del mentor: alguien mayor que aparece cuando el protagonista ha aceptado, y que le da un objeto, un consejo o una habilidad. Aparece y suele desaparecer antes del final.",
        },
        {
          forma: "arte",
          texto:
            "La cuarta etapa es el cruce del primer umbral, que es el momento en que el protagonista sale del territorio conocido, casi siempre con un guardián que se lo pone difícil en la frontera. A partir de ahí las reglas del mundo son otras.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Y la quinta es la que da nombre a esa primera parte: el vientre de la ballena, tomado del relato bíblico de Jonás. El héroe es tragado, desaparece del mundo conocido y esa desaparición equivale a una muerte simbólica.",
        },
        {
          forma: "texto",
          texto:
            "Campbell insiste mucho en eso: casi todas las iniciaciones antiguas contenían una muerte ritual. El iniciado era enterrado, encerrado o dado por muerto, y volvía siendo otra persona con otro nombre. La estructura del héroe hereda ese esquema.",
        },
        {
          forma: "texto",
          texto:
            "La segunda parte, la iniciación, empieza con el camino de las pruebas: una serie de dificultades encadenadas, cada una más difícil, en las que el protagonista falla varias veces y aprende algo cada vez.",
        },
        {
          forma: "clave",
          rotulo: "El centro del esquema",
          frase: "Después vienen las tres etapas más discutidas del libro: el encuentro con la diosa, la mujer como tentación y la reconciliación con el padre. Están descritas con un lenguaje psicoanalítico que hoy resulta ajeno, y tienen un problema de fondo que veremos al final.",
        },
        {
          forma: "texto",
          texto:
            "La reconciliación con el padre es, para Campbell, el momento decisivo: el héroe se enfrenta a la figura que tiene poder sobre su vida y descubre que esa figura y él son de la misma naturaleza. Es enfrentarse a lo que uno teme y comprobar que se le puede mirar.",
        },
        {
          forma: "texto",
          texto:
            "El nombre le viene del vocabulario freudiano de su época y despista, porque no se trata literalmente de un padre. Puede ser una institución, una tradición, un maestro o cualquier autoridad que el protagonista haya interiorizado sin examinar.",
        },
        {
          forma: "texto",
          texto:
            "Después llega el don supremo: el objetivo por el que salió. El fuego, el elixir, la espada, la verdad, la persona rescatada. Y Campbell señala algo que se olvida siempre: en muchísimos mitos, ese premio resulta no ser lo importante.",
        },
        {
          forma: "arte",
          texto:
            "Porque la tercera parte, el regreso, es la que a él le interesaba de verdad y la que casi todas las adaptaciones modernas despachan en cinco minutos. El héroe tiene que volver, y volver es mucho más difícil que salir.",
          arte: "mapa",
        },
        {
          forma: "texto",
          texto:
            "Empieza con el rechazo del regreso: el protagonista no quiere volver. Ha estado en un sitio donde las cosas tenían sentido y sabe que en su mundo de origen nadie va a entender lo que ha visto ni le va a interesar.",
        },
        {
          forma: "texto",
          texto:
            "Después vienen la huida mágica, el rescate desde fuera —a veces hay que ir a buscar al héroe porque no puede volver solo— y el cruce del umbral de vuelta, que es el momento de reincorporarse a una vida normal siendo otro.",
        },
        {
          forma: "texto",
          texto:
            "Y las dos últimas etapas son las que él consideraba el objetivo entero del recorrido: ser dueño de los dos mundos y tener libertad para vivir.",
        },
        {
          forma: "texto",
          texto:
            "Ser dueño de los dos mundos significa poder moverse entre lo aprendido allí y lo cotidiano de aquí sin que ninguno anule al otro. Poder tener una experiencia extraordinaria y a la vez pagar el alquiler.",
        },
        {
          forma: "texto",
          texto:
            "Y la libertad para vivir es, en su descripción, dejar de tener miedo a la muerte y por tanto poder estar en el presente sin estar defendiéndose todo el rato.",
        },
        {
          forma: "texto",
          texto:
            "Ese es el esquema completo, publicado en 1949 en un libro difícil que leía poca gente.",
        },
        {
          forma: "texto",
          texto:
            "Veinticinco años después, un director de cine de treinta años atascado en el tercer borrador de un guion lo cogió de una estantería.",
        },
      ],
    },

    {
      titulo: "El rancho Skywalker, 1983",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "George Lucas llevaba dos años reescribiendo un guion de ciencia ficción que no acababa de funcionar. Tenía las naves, los planetas y los personajes, y las versiones sucesivas se le desmontaban por el medio sin que supiera por qué.",
        },
        {
          forma: "texto",
          texto:
            "Había leído a Campbell en la universidad y volvió al libro buscando estructura. Contó después que fue como encontrar el esqueleto que le faltaba: reescribió el guion apoyándose en el esquema y el resultado se estrenó en 1977.",
        },
        {
          forma: "clave",
          rotulo: "Lo que hay que matizar",
          frase: "La leyenda dice que Lucas escribió La guerra de las galaxias siguiendo el libro capítulo a capítulo. No es exacto: había borradores anteriores a esa relectura, con influencias del cine de samuráis y de los seriales de aventuras. Campbell le dio la columna vertebral, no la historia.",
        },
        {
          forma: "texto",
          texto:
            "Aun así, la correspondencia es evidente y el propio Lucas la reconoció siempre. Un chico en un planeta perdido, una llamada que rechaza, un mentor anciano que le da un arma y muere, un descenso al interior de una máquina, y un padre que resulta ser lo que era.",
        },
        {
          forma: "texto",
          texto:
            "Los dos se conocieron en 1983 y se hicieron amigos. Dos años después, Lucas invitó a Campbell a su rancho de California y allí se grabaron las conversaciones con el periodista Bill Moyers que se emitieron como serie documental en 1988.",
        },
        {
          forma: "texto",
          texto:
            "Campbell había muerto el año anterior, en Honolulu, a los ochenta y tres años. La serie fue el mayor éxito de audiencia de la televisión pública americana en su género, el libro que la acompañaba fue superventas, y su obra pasó de nicho a fenómeno de masas.",
        },
        {
          forma: "arte",
          texto:
            "En medio de todo eso ocurrió lo que de verdad convirtió el monomito en una herramienta industrial, y no fue en una universidad: fue en un despacho de los estudios Disney, en 1985, en forma de un memorando interno de siete páginas.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "Lo escribió un analista de guiones llamado Christopher Vogler, que llevaba tiempo aplicando a los guiones que le llegaban el esquema de Campbell y había comprobado que le servía para explicar por qué unos funcionaban y otros no.",
        },
        {
          forma: "texto",
          texto:
            "Su memorando resumía el libro en doce etapas en lugar de diecisiete, con un vocabulario práctico, sin misticismo y con ejemplos de películas conocidas. Se fotocopió, circuló por los estudios y en pocos años era conocido en toda la industria.",
        },
        {
          forma: "texto",
          texto:
            "En 1992 lo convirtió en un libro, El viaje del escritor, que es hoy lectura obligatoria en la mayoría de escuelas de guion del mundo. Vogler trabajó después en varios proyectos de animación, entre ellos El rey león.",
        },
        {
          forma: "clave",
          rotulo: "Las doce etapas de Vogler",
          frase: "Mundo ordinario, llamada a la aventura, rechazo de la llamada, encuentro con el mentor, cruce del primer umbral, pruebas y aliados, aproximación a la cueva, la prueba máxima, la recompensa, el camino de vuelta, la resurrección y el retorno con el elixir.",
        },
        {
          forma: "texto",
          texto:
            "Esa lista es la que se enseña hoy, y es una simplificación de una simplificación: Vogler simplificó a Campbell, y las escuelas de guion simplificaron a Vogler hasta dejarlo en una plantilla con marcas de minuto.",
        },
        {
          forma: "texto",
          texto:
            "Su ventaja práctica es evidente. Es un esquema que se puede aplicar en una tarde, que funciona en géneros muy distintos y que da una respuesta concreta cuando alguien está atascado en la mitad de una historia.",
        },
        {
          forma: "texto",
          texto:
            "Y explica bastante bien por qué ciertas películas se sienten completas y otras no. Muchas historias que dejan al espectador insatisfecho se han saltado el regreso: el protagonista consigue lo que buscaba y la película acaba, sin mostrar qué hace con ello.",
        },
        {
          forma: "arte",
          texto:
            "El problema es lo que ocurre cuando una herramienta de análisis se convierte en un requisito de producción. Cuando un estudio exige que un guion tenga sus doce etapas en sus minutos, lo que se está pidiendo no es una historia: es un producto que cumpla una especificación.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Ese es el reproche más extendido hoy, y no es de teóricos: viene de guionistas. Que la industria del cine comercial de los últimos treinta años ha producido cientos de películas indistinguibles entre sí porque todas siguen el mismo mapa.",
        },
        {
          forma: "texto",
          texto:
            "Y que buena parte de las mejores películas de esas mismas décadas no lo siguen en absoluto: historias sin protagonista único, sin transformación, sin regreso, o con un protagonista que no aprende nada y termina peor que empezó.",
        },
        {
          forma: "texto",
          texto:
            "El propio Vogler ha matizado su libro varias veces por eso mismo, insistiendo en que las doce etapas son un mapa y no una receta, y que un mapa se usa para orientarse y no para decidir por dónde tiene que pasar obligatoriamente el camino.",
        },
        {
          forma: "texto",
          texto:
            "Y añadió después algo que se cita poco: que el orden de las etapas se puede alterar, que se pueden saltar varias y que hay historias enteras que consisten en una sola de ellas estirada durante dos horas.",
        },
        {
          forma: "texto",
          texto:
            "El uso sensato de todo esto es el de diagnóstico y no el de plantilla. Sirve mejor para entender por qué una historia que uno ya ha escrito no acaba de funcionar, que para decidir de antemano qué tiene que pasar en la página cuarenta.",
        },
        {
          forma: "texto",
          texto:
            "Campbell no tiene culpa de eso. Él escribía sobre mitología comparada y no sobre estructura de guion, y jamás propuso su esquema como fórmula de escritura.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí es responsabilidad suya es la afirmación de la que todo esto depende.",
        },
        {
          forma: "texto",
          texto:
            "Que ese recorrido es universal y aparece en las mitologías de toda la humanidad.",
        },
        {
          forma: "texto",
          texto:
            "Y esa afirmación es, en el mejor de los casos, muy discutible.",
        },
      ],
    },

    {
      titulo: "Los mitos que no encajan",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El problema de método es el más grave y es fácil de enunciar: Campbell parte de un esquema y después recorre las mitologías del mundo buscando ejemplos que lo confirmen. No hay un corpus definido, ni un criterio de selección, ni un procedimiento que otro pueda repetir.",
        },
        {
          forma: "texto",
          texto:
            "Cuando un mito no encaja, tiene dos salidas y usa las dos. Una es interpretarlo simbólicamente hasta que encaje, y con suficiente interpretación simbólica cualquier relato puede parecerse a cualquier otro. La segunda es no mencionarlo.",
        },
        {
          forma: "clave",
          rotulo: "El reproche de los especialistas",
          frase: "El folclorista Alan Dundes, una de las autoridades del campo, lo criticó con dureza: sostenía que Campbell no hacía análisis comparativo sino especulación, que sus datos estaban escogidos y que su obra no cumplía ningún estándar de la disciplina.",
        },
        {
          forma: "texto",
          texto:
            "La comparación que más daño le hace es con un trabajo anterior y mucho menos famoso. En 1928, el ruso Vladimir Propp publicó un estudio sobre la estructura del cuento maravilloso a partir de un corpus definido y acotado de cuentos rusos.",
        },
        {
          forma: "texto",
          texto:
            "Propp dijo exactamente qué cuentos analizaba, cuántos eran y con qué criterio los había elegido, y encontró treinta y una funciones que aparecían siempre en el mismo orden dentro de ese corpus. No afirmó nada sobre la humanidad entera.",
        },
        {
          forma: "texto",
          texto:
            "Esa diferencia es la que separa un hallazgo comprobable de una intuición. Cualquiera puede coger los cuentos de Propp y comprobar si tenía razón. Nadie puede hacer eso con Campbell, porque su corpus es toda la mitología del mundo y su método es la analogía.",
        },
        {
          forma: "arte",
          texto:
            "Y hay categorías enteras de mito que no encajan de ninguna manera. Los mitos de origen, que explican cómo se formó el mundo, no tienen héroe ni viaje. Los mitos cíclicos, en los que todo se repite eternamente, no tienen transformación ni regreso.",
          arte: "mapa",
        },
        {
          forma: "texto",
          texto:
            "Los ciclos del embaucador, que están en casi todas las culturas —el coyote norteamericano, la araña Anansi africana, el Loki nórdico—, van de un personaje que engaña, roba y provoca desastres, que no aprende nada y que vuelve a empezar en el relato siguiente.",
        },
        {
          forma: "texto",
          texto:
            "Ese personaje es de los más extendidos que existen y no cabe en el monomito por ningún sitio. Campbell lo trata muy por encima, y es un problema para una teoría que se presenta como universal.",
        },
        {
          forma: "texto",
          texto:
            "Hay también culturas cuya narrativa central no es el viaje individual sino la genealogía, la relación con la tierra o el mantenimiento del orden, y donde la idea de un individuo que se transforma y vuelve cambiado no organiza nada.",
        },
        {
          forma: "clave",
          rotulo: "La sospecha de fondo",
          frase: "Que el monomito describe bien un tipo concreto de relato —el de la tradición indoeuropea, con protagonista individual y transformación personal— y que Campbell lo proyectó sobre el resto del mundo. Encontró en todas partes la estructura que ya conocía.",
        },
        {
          forma: "texto",
          texto:
            "El segundo problema es la base psicológica. Todo el edificio se apoya en los arquetipos de Jung: estructuras heredadas y comunes a toda la especie que se expresarían en los sueños y en los mitos.",
        },
        {
          forma: "texto",
          texto:
            "Esa teoría no tiene apoyo empírico. No se ha demostrado la existencia de contenidos mentales heredados, ni hay manera de someterla a prueba, y la psicología académica la abandonó hace décadas como explicación causal.",
        },
        {
          forma: "texto",
          texto:
            "Hay una explicación alternativa mucho menos vistosa y bastante más plausible para las coincidencias que Campbell encontró: que las historias se han contado durante milenios entre pueblos que comerciaban, guerreaban y se mezclaban, y que se copian unas a otras.",
        },
        {
          forma: "arte",
          texto:
            "Y una segunda, todavía más sencilla: que las estructuras narrativas que se recuerdan y se transmiten son las que se ajustan a cómo funciona la memoria humana. No hace falta un inconsciente colectivo para explicar que las historias con un problema, un intento y una resolución se recuerden mejor.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "El tercer problema es de escritura y es más leve: el libro está escrito en un registro que mezcla el análisis con la afirmación mística, y hay páginas enteras en las que no queda claro si está describiendo lo que creía una cultura o afirmando algo sobre la realidad.",
        },
        {
          forma: "texto",
          texto:
            "Con todos esos reparos, hay que decir también qué queda en pie, porque el libro no se ha mantenido setenta y cinco años por casualidad.",
        },
        {
          forma: "texto",
          texto:
            "Queda en pie que hay una familia de relatos, extendidísima, que comparte una estructura reconocible, y que Campbell fue el primero en describirla de forma completa y ordenada.",
        },
        {
          forma: "texto",
          texto:
            "Queda en pie su observación sobre la muerte simbólica en las iniciaciones, que sí está documentada en un número enorme de culturas y que es un hallazgo antropológico sólido.",
        },
        {
          forma: "texto",
          texto:
            "Y queda en pie, sobre todo, su insistencia en el regreso: que la parte difícil no es conseguir lo que uno buscaba, sino volver con ello a la vida de siempre.",
        },
        {
          forma: "texto",
          texto:
            "Esa observación tiene aplicaciones fuera de la ficción y es probablemente lo más útil del libro entero. Describe con precisión lo que le pasa a alguien que vuelve de una experiencia que lo ha cambiado y se encuentra con que en casa no ha cambiado nada.",
        },
        {
          forma: "texto",
          texto:
            "Vale para quien vuelve de vivir años en otro país, para quien sale de una enfermedad grave, para quien termina una carrera exigente y para cualquiera que haya atravesado algo que la gente de su alrededor no puede imaginar del todo.",
        },
        {
          forma: "texto",
          texto:
            "Campbell sostenía que muchos relatos antiguos dedican al regreso tanto espacio como a la ida, precisamente porque las culturas que los contaban sabían que ahí estaba la dificultad. Y que nuestras versiones modernas lo han recortado casi por completo.",
        },
        {
          forma: "texto",
          texto:
            "Falta, para terminar, la parte del libro que peor ha envejecido y de la que casi nunca se habla en los cursos de guion.",
        },
        {
          forma: "texto",
          texto:
            "La que se ocupa de las mujeres.",
        },
      ],
    },

    {
      titulo: "La diosa y la tentadora",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En las diecisiete etapas del monomito, el héroe es siempre masculino. No es un descuido de lenguaje de la época: la estructura está construida sobre un protagonista varón, y las mujeres aparecen exclusivamente como etapas del recorrido de ese varón.",
        },
        {
          forma: "texto",
          texto:
            "Aparecen tres veces y en tres papeles. Como diosa, que es la unión con lo femenino idealizado y con la madre. Como tentadora, que es el peligro que desvía al héroe de su misión. Y como recompensa, la mujer que se conquista al final.",
        },
        {
          forma: "clave",
          rotulo: "Lo que ninguna de las tres hace",
          frase: "Ninguna de las tres tiene un viaje propio. No reciben llamada, no rechazan nada, no cruzan umbrales ni regresan transformadas. Están colocadas en el camino de otro, funcionando como prueba, como premio o como obstáculo.",
        },
        {
          forma: "texto",
          texto:
            "A Campbell le preguntaron por eso muchas veces en sus últimos años, con el libro ya convertido en fenómeno y con un público mayoritariamente joven que no aceptaba ese reparto. Su respuesta es la parte más indefendible de toda su obra.",
        },
        {
          forma: "texto",
          texto:
            "Sostuvo que la mujer no necesita hacer el viaje porque la mujer es el lugar al que el héroe intenta llegar. Que ella ya está donde él va, y que su realización pasa por otras vías: la maternidad y la transformación del propio cuerpo.",
        },
        {
          forma: "texto",
          texto:
            "Es una idea que suena elogiosa y que, mirada dos segundos, dice que la mitad de la humanidad no tiene camino propio. Que es meta y no viajera. Que no se transforma buscando algo, sino esperando a que alguien llegue.",
        },
        {
          forma: "arte",
          texto:
            "Se puede alegar que nació en 1904, y es cierto y no basta, porque otros de su generación no pensaban así y porque él mantuvo esa posición en entrevistas de los años ochenta, respondiendo a preguntas de mujeres que le decían que no les servía.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "El resultado práctico se ve en el cine: durante décadas, las protagonistas femeninas que seguían el esquema tenían que ser tratadas como héroes masculinos, porque el modelo no contemplaba otra cosa. Y las que no, quedaban fuera de la estructura sin sitio alguno.",
        },
        {
          forma: "texto",
          texto:
            "Varias autoras han propuesto después estructuras alternativas, con etapas distintas y sin la idea de conquista, y ninguna ha tenido ni una fracción de la difusión de la de Vogler. Eso también forma parte del balance.",
        },
        {
          forma: "texto",
          texto:
            "Hay una segunda controversia sobre Campbell que conviene mencionar y situar con cuidado. En 1989, dos años después de su muerte, el escritor Brendan Gill publicó un artículo en la New York Review of Books recogiendo comentarios antisemitas y racistas que le atribuía.",
        },
        {
          forma: "clave",
          rotulo: "Cómo está esa discusión",
          frase: "Provocó una polémica larga, con antiguos alumnos y colegas defendiéndolo y otros confirmando episodios concretos. No hay un consenso limpio y sí un asunto documentado y discutido que forma parte de su biografía, y omitirlo sería contar el personaje a medias.",
        },
        {
          forma: "texto",
          texto:
            "Queda un último apartado, el de lo que la gente cree de este libro y no es verdad, que en este caso es casi todo lo que se repite en internet.",
        },
        {
          forma: "texto",
          texto:
            "Lo primero: que el viaje del héroe es un hallazgo empírico sobre la mitología mundial. No lo es. Es un esquema interpretativo construido sin corpus, sin método replicable y con selección de ejemplos.",
        },
        {
          forma: "texto",
          texto:
            "Segundo: que Campbell escribió un manual de guion. Escribió mitología comparada. Las doce etapas que se enseñan en las escuelas de cine son de Christopher Vogler y son de 1985, treinta y seis años después del libro.",
        },
        {
          forma: "arte",
          texto:
            "Tercero: que sigue tu dicha significa haz lo que te apetezca. La frase viene de un concepto sánscrito sobre el ser y la conciencia, y él mismo se lamentó de cómo se había entendido. Dijo en broma que debería haber dicho sigue tus ampollas.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Cuarto: que Lucas escribió La guerra de las galaxias con el libro delante. Había borradores anteriores; el libro le dio estructura a una historia que ya existía, que es una influencia real y bastante menos mecánica que la leyenda.",
        },
        {
          forma: "texto",
          texto:
            "Y quinto: que Campbell era catedrático de mitología con un doctorado. Abandonó la tesis, no se doctoró nunca y dio clase durante treinta y ocho años en una facultad pequeña de artes liberales.",
        },
        {
          forma: "texto",
          texto:
            "El balance justo es este: una teoría floja sobre la mitología humana y una herramienta excelente para construir historias, que son dos cosas distintas y que su fama ha mezclado.",
        },
        {
          forma: "texto",
          texto:
            "Quien lo lea buscando saber cómo funcionan los mitos del mundo se va a llevar una versión seleccionada y sin comprobar.",
        },
        {
          forma: "texto",
          texto:
            "Quien lo lea buscando entender por qué unas historias se sostienen y otras se caen a la mitad va a encontrar la mejor descripción disponible de una estructura que lleva funcionando tres mil años.",
        },
        {
          forma: "texto",
          texto:
            "Con la parte de las mujeres tachada, y con la advertencia de que el mapa no es todo el territorio.",
        },
        {
          forma: "texto",
          texto:
            "Aunque de un hombre que se pasó cinco años leyendo en una cabaña sin agua corriente, y que no consiguió que ninguna universidad le dejara estudiar lo que quería, no es poca cosa haber acabado organizando las historias que se cuentan hoy.",
        },
      ],
    },
  ],
};

export const VIDAS_VASARI: Resumen = {
  id: "vidas-vasari",
  titulo: "Las vidas de los más excelentes pintores, escultores y arquitectos",
  autor: "Giorgio Vasari",
  ano: 1550,
  gancho:
    "Casi todo lo que crees saber sobre los artistas del Renacimiento lo escribió un pintor de Arezzo que conocía a la mitad de ellos.",
  porQue:
    "Es el primer libro de historia del arte que se escribió, y sigue siendo la fuente de casi todas las anécdotas que circulan sobre Giotto, Leonardo o Miguel Ángel. También es donde nacieron algunos de los errores que todavía repetimos.",
  partes: [
    {
      titulo: "Una cena en casa del cardenal",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Roma, hacia 1546. En el palacio del cardenal Alejandro Farnesio se cena y se conversa, como cada noche, con un grupo de escritores y eruditos alrededor de la mesa. Entre los invitados hay un pintor toscano de treinta y cinco años que trabaja para la casa.",
        },
        {
          forma: "texto",
          texto:
            "Paolo Giovio, historiador y coleccionista, cuenta que le gustaría escribir un tratado sobre los artistas famosos desde Cimabue hasta el presente. Habla un rato y se le van escapando confusiones: mezcla nombres, atribuye obras a quien no las hizo, se equivoca de siglo.",
        },
        {
          forma: "texto",
          texto:
            "El pintor toma la palabra y le corrige, con la seguridad de quien ha visto esas obras con sus propios ojos y ha hablado con quien las hizo. El cardenal se queda mirándolo y le suelta que entonces por qué no lo escribe él.",
        },
        {
          forma: "texto",
          texto:
            "Se llamaba Giorgio Vasari, había nacido en Arezzo en 1511 y era pintor y arquitecto de oficio. Aquella noche, según cuenta él mismo, dijo que lo intentaría sin darle mayor importancia, y acabó dedicándole veinte años y creando una disciplina entera.",
        },
        {
          forma: "clave",
          rotulo: "Qué es este libro",
          frase: "La primera historia del arte que se escribió: alrededor de doscientas biografías de pintores, escultores y arquitectos italianos, desde el siglo trece hasta el propio Vasari, ordenadas para contar una única historia con principio, desarrollo y final.",
        },
        {
          forma: "texto",
          texto:
            "Salió en 1550 en Florencia, impreso por Lorenzo Torrentino. Dieciocho años después publicó una segunda edición mucho más gorda, con retratos grabados en madera, artistas vivos añadidos y una autobiografía suya al final que es de las cosas más divertidas del libro.",
        },
        {
          forma: "texto",
          texto:
            "El formato que eligió no era neutro. Escribió vidas, no un tratado: cada artista tiene su nacimiento, su maestro, sus obras, sus anécdotas, sus rivalidades y su muerte, exactamente igual que en las biografías de emperadores de Plutarco o de Suetonio.",
        },
        {
          forma: "arte",
          texto:
            "Esa decisión formal es la que ha condicionado todo lo que vino después. Contar el arte a través de las vidas de sus autores nos parece hoy lo natural, y no lo es: es una elección que hizo un señor en el siglo dieciséis y de la que aún no hemos salido.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Antes de él, escribir sobre arte era escribir sobre técnica: cómo se prepara un pigmento, cómo se calcula una perspectiva, cuántas partes tiene un cuerpo bien proporcionado. Cennino Cennini o Alberti hacían manuales. Vasari hizo un relato.",
        },
        {
          forma: "texto",
          texto:
            "Y para hacerlo tuvo que inventarse el trabajo. Viajó por media Italia mirando obras, preguntando en talleres, copiando inscripciones de tumbas y pidiendo a los viejos que le contaran lo que recordaban de sus maestros. Eso es investigación de campo, y no existía.",
        },
        {
          forma: "texto",
          texto:
            "También reunió una colección enorme de dibujos de otros artistas, un álbum que llamaba su Libro de los dibujos, montando cada hoja con marcos decorados por él mismo. Le servía como archivo: comparaba manos y estilos para saber quién había hecho qué.",
        },
        {
          forma: "texto",
          texto:
            "El libro está dedicado a Cosme I de Médici, duque de Florencia y jefe suyo. Ese detalle explica muchas cosas del resto: Vasari escribe la historia del arte como una historia que empieza en Toscana, culmina en Florencia y da la razón a quien le paga.",
        },
        {
          forma: "texto",
          texto:
            "Su tesis se resume en una palabra que él usa una y otra vez: rinascita, renacimiento. La idea de que el arte antiguo fue perfecto, que después vino un desastre de mil años, y que en Italia el arte volvió a nacer y fue subiendo hasta la perfección otra vez.",
        },
        {
          forma: "texto",
          texto:
            "Esa palabra suya es el origen de la nuestra. Renacimiento como nombre de un periodo histórico no lo puso él, lo popularizaron historiadores del siglo diecinueve, pero la idea de un renacer y de una Edad Media oscura en medio es literalmente el esquema de este libro.",
        },
        {
          forma: "texto",
          texto:
            "Y le debemos otro término, este menos afortunado. Vasari llama gótico al arte medieval, atribuyéndolo a los godos, los bárbaros que arrasaron Roma. Lo dice como insulto: un estilo de monstruos y confusión, hecho por gente que había perdido la buena manera.",
        },
        {
          forma: "arte",
          texto:
            "Es decir, que el nombre con el que hoy se enseñan las catedrales de Chartres o de León nació como una descalificación de un pintor florentino que las consideraba una barbaridad. Tardó siglos en dejar de ser un insulto y nunca dejó de ser su palabra.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Para organizar la subida hasta la perfección divide el libro en tres edades, y cada una tiene su prólogo explicando qué se conquistó en ella. Es un esquema de progreso, muy claro y muy útil para leer, y es también el mayor problema del libro.",
        },
        {
          forma: "texto",
          texto:
            "Porque si el arte avanza hacia una meta, todo lo anterior a la meta es imperfecto por definición, y todo lo posterior solo puede ser decadencia. Vasari se pasa páginas explicando que a tal maestro le faltaba lo que otro conseguiría cincuenta años después.",
        },
        {
          forma: "texto",
          texto:
            "El concepto que le sirve para medir ese avance es el disegno, que no significa solo dibujo. Significa la idea, el diseño mental de la obra, y la capacidad de trazarla. Para Vasari es el padre común de la pintura, la escultura y la arquitectura.",
        },
        {
          forma: "texto",
          texto:
            "Con esa vara mide a todo el mundo, y es lo que le hace injusto con quien no la comparte. Un pintor que resuelve por color en vez de por línea, para él, está haciendo algo incompleto por muy bonito que sea. Los venecianos lo van a pagar caro.",
        },
        {
          forma: "texto",
          texto:
            "También conviene tener claro qué clase de escritor es. Vasari no separa el dato del rumor: cuenta lo que ha visto, lo que le han dicho y lo que se dice, todo con el mismo tono, y no avisa de cuál es cuál en ningún momento.",
        },
        {
          forma: "texto",
          texto:
            "Su primera edad empieza en Florencia, a finales del siglo trece, con un pintor que iba por el campo y se encontró a un crío dibujando en una piedra.",
        },
      ],
    },

    {
      titulo: "El niño que dibujaba ovejas",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Cimabue, el pintor más importante de Florencia, va camino de Vespignano y se cruza con un pastorcillo de unos diez años sentado junto a su rebaño. El niño está dibujando una oveja sobre una piedra lisa, con otra piedra puntiaguda, sin que nadie le haya enseñado.",
        },
        {
          forma: "texto",
          texto:
            "Cimabue se para, mira el dibujo, y le pregunta si quiere irse con él a aprender. El niño dice que sí si su padre le deja. El padre le deja. Aquel crío se llamaba Giotto y, según Vasari, fue quien devolvió el arte a la vida después de mil años.",
        },
        {
          forma: "texto",
          texto:
            "La historia es casi con toda seguridad falsa. No hay ni un documento que la respalde, el patrón del genio descubierto por casualidad ya estaba en la Antigüedad, y Vasari la cuenta ciento cincuenta años después de los hechos. Pero es la mejor escena inaugural posible.",
        },
        {
          forma: "clave",
          rotulo: "Lo que Vasari dice que hizo Giotto",
          frase: "Dejar de copiar la manera griega —las figuras rígidas y doradas de los bizantinos— y ponerse a mirar del natural. Sus personajes tienen peso, ocupan un espacio, se tocan y se miran entre ellos. Es el momento en que la pintura vuelve a parecerse a lo que hay delante.",
        },
        {
          forma: "texto",
          texto:
            "Eso, a diferencia de las ovejas, es verdad y se puede comprobar yendo a Padua. En la capilla de los Scrovegni, pintada hacia 1305, hay una escena en la que Judas besa a Cristo y los dos se miran a los ojos, y no hay nada igual en los trescientos años anteriores.",
        },
        {
          forma: "texto",
          texto:
            "De Giotto vienen dos de las anécdotas más repetidas de la historia del arte, y las dos salen de aquí. La primera: de niño, en el taller, pintó una mosca sobre la nariz de una figura de Cimabue, y el maestro intentó espantarla varias veces con la mano.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es mejor. Un enviado del papa recorre Italia pidiendo a los pintores una muestra de su trabajo. Giotto coge un pincel, apoya el codo en el costado y traza a mano alzada un círculo perfecto. Le dice al mensajero que se lo lleve, que ya verá si se entiende.",
        },
        {
          forma: "arte",
          texto:
            "El mensajero se marcha convencido de que se están riendo de él. El papa entiende perfectamente lo que significa y le da el encargo. Vasari añade que de ahí viene el dicho florentino de que alguien es más redondo que la O de Giotto, que se usaba para llamar tonto a la gente.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Tampoco hay ninguna prueba de esa historia. Lo que sí es cierto y está documentado es que Giotto se hizo rico, que alquilaba telares, que tuvo ocho hijos y que en 1334 la ciudad de Florencia lo nombró maestro de obras de la catedral, que es el cargo civil más alto para un artista.",
        },
        {
          forma: "texto",
          texto:
            "Y ese es un cambio del que Vasari es plenamente consciente: el paso del artesano anónimo, que firmaba con el nombre de su gremio, al artista con nombre propio, con fama, con dinero y con acceso a los príncipes. El libro entero es, entre otras cosas, la crónica de ese ascenso.",
        },
        {
          forma: "texto",
          texto:
            "La primera edad ocupa el siglo catorce y Vasari la trata con una mezcla de admiración y condescendencia. Elogia a Duccio, a Simone Martini, a Ambrogio Lorenzetti, y a la vez repite que aún no sabían lo que vendría después, como quien alaba a un alumno aplicado.",
        },
        {
          forma: "texto",
          texto:
            "Esa condescendencia tiene consecuencias que duraron siglos. Durante trescientos años, casi nadie en Europa miró la pintura anterior a Giotto de otra manera que no fuera como un balbuceo, y hubo que esperar al siglo diecinueve para que se volviera a mirar en serio.",
        },
        {
          forma: "texto",
          texto:
            "Hay otra deuda que conviene reconocerle. Muchas de las obras que describe con detalle ya no existen: se quemaron, se derribaron los edificios que las contenían o se picaron para pintar encima. En bastantes casos, la descripción de Vasari es lo único que queda.",
        },
        {
          forma: "texto",
          texto:
            "También conservó nombres que se habrían perdido del todo. Artistas de los que no queda una sola obra documentada existen para nosotros porque Vasari les dedicó tres párrafos y anotó de dónde eran, con quién se formaron y qué pintaron.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un aspecto suyo que sorprende al lector actual: cuenta el dinero. Cuánto cobró cada uno por cada encargo, quién le engañó, quién se arruinó, quién murió rico. Es una historia del arte que no separa la obra maestra de la factura, y eso la hace muy moderna.",
        },
        {
          forma: "texto",
          texto:
            "El tono, además, es de taller. Vasari escribe como quien lleva toda la vida entre andamios: le interesan los procedimientos, las manías, quién trabajaba deprisa y quién no entregaba nunca, quién se peleaba con los clientes y quién bebía.",
        },
        {
          forma: "texto",
          texto:
            "De Paolo Uccello cuenta que se obsesionó tanto con la perspectiva que se pasaba las noches en vela dibujando líneas de fuga, y que cuando su mujer le llamaba a la cama contestaba que qué cosa tan dulce era aquella perspectiva. Es un chiste con dos siglos de éxito.",
        },
        {
          forma: "texto",
          texto:
            "De Piero di Cosimo, que vivía de huevos duros cocidos de sesenta en sesenta mientras hervía la cola para las pinturas, y que no dejaba barrer su taller ni podar las plantas del huerto porque prefería verlo todo salvaje.",
        },
        {
          forma: "texto",
          texto:
            "Estas cosas son las que han hecho que el libro sobreviva. Nadie lee cuatro mil páginas por un esquema de progreso: se leen porque cada pocas páginas hay una escena que se recuerda, y porque Vasari tenía un oído excelente para lo que se recuerda.",
        },
        {
          forma: "texto",
          texto:
            "El problema, claro, es que ese mismo oído es el que fabrica escenas. Cuando le falta un dato, lo rellena con algo verosímil, y como escribe bien, lo verosímil ha pasado por cierto durante cuatrocientos años.",
        },
        {
          forma: "texto",
          texto:
            "La segunda edad empieza, según él, con un concurso público que se celebró en Florencia en el año 1401.",
        },
        {
          forma: "texto",
          texto:
            "Se trataba de decidir quién haría unas puertas de bronce.",
        },
      ],
    },

    {
      titulo: "Las puertas del Paraíso",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El gremio de los mercaderes de paño de Florencia convocó un concurso para fundir la segunda puerta de bronce del baptisterio. Cada aspirante tenía que presentar un panel con el sacrificio de Isaac, mismo tema, mismo formato, mismo material y un año de plazo.",
        },
        {
          forma: "texto",
          texto:
            "Los dos finalistas fueron un orfebre de veintitrés años, Lorenzo Ghiberti, y un chaval de veinticuatro, Filippo Brunelleschi. Ganó Ghiberti. Los dos paneles se conservan y se pueden ver hoy, uno al lado del otro, en el museo del Duomo.",
        },
        {
          forma: "texto",
          texto:
            "Vasari cuenta que a Brunelleschi la derrota le sentó tan mal que se fue de Florencia y se marchó a Roma con su amigo Donatello, y que allí se pasaron años midiendo ruinas antiguas, excavando cimientos y dibujando capiteles como dos poseídos.",
        },
        {
          forma: "clave",
          rotulo: "Lo que sacaron de aquellas ruinas",
          frase: "Dos cosas que cambiaron el arte europeo: la manera romana de construir, con sus proporciones y sus órdenes, y la idea de que la Antigüedad no era un decorado sino un sistema que se podía entender midiéndolo. Volvieron con cuadernos, no con souvenirs.",
        },
        {
          forma: "texto",
          texto:
            "A Ghiberti le encargaron después una tercera puerta, en la que trabajó veintisiete años. Es la que da al Duomo, con diez paneles dorados y en relieve, y es la que Miguel Ángel llamó, según Vasari, digna de ser las puertas del Paraíso.",
        },
        {
          forma: "texto",
          texto:
            "Ese nombre se le quedó y es el que se usa hoy en todas partes. Como tantas otras cosas, sabemos que Miguel Ángel lo dijo porque lo escribió Vasari, y no hay ninguna otra fuente. La frase más famosa sobre unas puertas depende de un solo testigo.",
        },
        {
          forma: "texto",
          texto:
            "Brunelleschi, mientras tanto, se metió en el problema técnico más difícil de la época. La catedral de Florencia llevaba más de un siglo con un agujero de cuarenta y tres metros de diámetro en el crucero, porque nadie sabía cómo cubrirlo.",
        },
        {
          forma: "arte",
          texto:
            "No había madera suficiente en Toscana para montar la cimbra que sostuviera una cúpula así mientras se construía. Brunelleschi propuso levantarla sin cimbra, con dos capas de ladrillo colocados en espiga que se sostenían solos a medida que subían. Nadie sabía si funcionaría.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Vasari cuenta que los gremios lo tomaron por loco y que en una reunión lo echaron a la fuerza de la sala. También cuenta el truco del huevo: que retó a los demás a ponerlo de pie sobre el mármol, y cuando ninguno pudo, lo cascó por la base y lo dejó tieso.",
        },
        {
          forma: "texto",
          texto:
            "Los otros protestaron diciendo que así lo hacía cualquiera, y él contestó que lo mismo dirían de la cúpula si les enseñaba cómo se hacía. Esa anécdota también es probablemente inventada, y lleva quinientos años ilustrando qué es tener una idea.",
        },
        {
          forma: "texto",
          texto:
            "La cúpula se terminó en 1436 y sigue en pie, con cuatro millones de ladrillos encima. Es la mayor cúpula de fábrica del mundo y se construyó sin un solo cálculo de los que hoy haría un ingeniero, resolviendo cada problema sobre la marcha.",
        },
        {
          forma: "texto",
          texto:
            "El tercer nombre de esta edad es Masaccio, que murió a los veintisiete años y al que Vasari trata con auténtica devoción. En la capilla Brancacci pintó unas figuras que proyectan sombra, pisan el suelo y tienen un volumen que nadie había conseguido antes.",
        },
        {
          forma: "texto",
          texto:
            "Su Adán y Eva expulsados del paraíso son dos personas llorando de verdad, no dos símbolos. Vasari escribe que todos los pintores que vinieron después fueron a aprender a aquella capilla, y en ese caso hay documentación: se sabe que Miguel Ángel iba a copiarlos.",
        },
        {
          forma: "texto",
          texto:
            "Y añade una historia sobre esa capilla que suena a leyenda de taller pero que da la medida del ambiente: que un rival le rompió la nariz a Miguel Ángel de un puñetazo mientras copiaba allí, y que se la dejó torcida para toda la vida. Esa sí está confirmada por otras fuentes.",
        },
        {
          forma: "texto",
          texto:
            "En esta parte del libro aparece también la única mujer a la que Vasari dedica una biografía completa: Properzia de Rossi, escultora de Bolonia, muerta hacia 1530, que empezó tallando escenas enteras sobre huesos de melocotón antes de trabajar el mármol.",
        },
        {
          forma: "texto",
          texto:
            "Vasari la trata con respeto y con un asombro que dice bastante de la época, porque presenta el hecho de que una mujer esculpiera como una rareza digna de mención. En la edición de 1568 menciona a algunas más, entre ellas a Sofonisba Anguissola, pero de pasada.",
        },
        {
          forma: "texto",
          texto:
            "Ese es uno de los agujeros del libro que hoy más se nota. Hubo más mujeres trabajando en talleres de las que él cuenta, muchas veces en el taller de su padre y firmando con el nombre de él, y recuperarlas ha sido trabajo de los últimos cincuenta años.",
        },
        {
          forma: "texto",
          texto:
            "El otro agujero enorme es geográfico. Venecia aparece poco y mal: Vasari admira el color de Tiziano y le reprocha una y otra vez que los venecianos no aprendieran a dibujar como Dios manda, que en su vocabulario significa como en Florencia.",
        },
        {
          forma: "texto",
          texto:
            "Cuenta incluso que fue a visitar a Tiziano a Roma en 1546 acompañando a Miguel Ángel, y que al salir este comentó que era una lástima que en Venecia no se empezara por el dibujo. Vasari lo escribe como si zanjara el asunto, y lo que zanja es su propio prejuicio.",
        },
        {
          forma: "texto",
          texto:
            "Del arte del norte de Europa apenas habla, y cuando lo hace es para admirar la técnica y lamentar la falta de gracia. Van Eyck aparece sobre todo como el hombre que inventó la pintura al óleo, cosa que además no es cierta: la perfeccionó, no la inventó.",
        },
        {
          forma: "texto",
          texto:
            "Todo eso se entiende mejor sabiendo hacia dónde va el libro. Las tres edades no son una clasificación: son una cuesta arriba, y arriba del todo hay una sola persona.",
        },
        {
          forma: "texto",
          texto:
            "Vasari lo llama el divino, y era amigo suyo.",
        },
      ],
    },

    {
      titulo: "El funeral de San Lorenzo",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El 18 de febrero de 1564 murió en Roma Miguel Ángel Buonarroti, a los ochenta y ocho años. Su sobrino sacó el cuerpo de la ciudad de noche y en secreto, metido en un fardo como si fuera mercancía, porque Roma no iba a dejar marchar ese cadáver de buena gana.",
        },
        {
          forma: "texto",
          texto:
            "Lo llevó a Florencia, que era lo que el muerto había pedido. Allí, la Academia del Dibujo —fundada un año antes por Cosme I, con Vasari entre los promotores— organizó un funeral de estado en la iglesia de San Lorenzo, con un catafalco monumental y semanas de preparativos.",
        },
        {
          forma: "texto",
          texto:
            "Vasari fue una de las manos que movieron aquello, y después diseñó la tumba que se le hizo en Santa Croce. No es un detalle menor para leer el libro: el biógrafo del héroe es también quien le organizó el entierro y quien le construyó el sepulcro.",
        },
        {
          forma: "clave",
          rotulo: "El lugar que le da en la historia",
          frase: "El final del camino. Para Vasari, el arte fue subiendo desde Giotto durante doscientos cincuenta años y en Miguel Ángel alcanzó la perfección, y no porque le superara a nadie en una técnica concreta, sino porque las reunió todas: escultura, pintura y arquitectura.",
        },
        {
          forma: "texto",
          texto:
            "En la primera edición, la de 1550, era el único artista vivo que tenía biografía. Todo el libro estaba construido para desembocar en él, y terminaba diciendo que la naturaleza había querido enviar a la tierra un espíritu capaz de hacerlo todo.",
        },
        {
          forma: "texto",
          texto:
            "Aquello tuvo una consecuencia que Vasari no esperaba. A Miguel Ángel, que tenía setenta y cinco años y muy mal carácter, la biografía no le gustó del todo: había errores, y sobre todo había cosas de su juventud contadas de una manera que a él no le convenía.",
        },
        {
          forma: "texto",
          texto:
            "Tres años después, en 1553, un discípulo suyo llamado Ascanio Condivi publicó otra biografía, mucho más corta, que contradice a Vasari en varios puntos importantes. Todo indica que el propio Miguel Ángel se la dictó o se la corrigió de cerca.",
        },
        {
          forma: "arte",
          texto:
            "O sea que tenemos dos versiones de la misma vida, una escrita por un colega y otra supervisada por el interesado, y no coinciden. Es un caso extraordinario en la historia del arte: el biografiado publicando su propia réplica en vida a través de otro.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "Vasari respondió en 1568 rehaciendo el capítulo entero, incorporando lo de Condivi sin citarlo, y añadiendo material propio: cartas que se habían escrito, conversaciones, la última visita, los detalles de la muerte. Es la biografía más larga del libro con diferencia.",
        },
        {
          forma: "texto",
          texto:
            "De ahí salen las historias que todo el mundo conoce. Que pintó la Capilla Sixtina de pie y con la cabeza hacia atrás durante cuatro años, con la pintura cayéndole en la cara, y que después estuvo un tiempo sin poder leer una carta si no la sostenía en alto.",
        },
        {
          forma: "texto",
          texto:
            "Que se peleaba con el papa Julio II como no se peleaba nadie con un papa. Que el bloque de mármol del David llevaba cuarenta años tirado y estropeado por otro escultor, y que él lo aceptó tal como estaba y sacó de ahí una figura de más de cinco metros.",
        },
        {
          forma: "texto",
          texto:
            "Que a los ochenta y tantos seguía picando piedra de noche, con una vela atada a un gorro de cartón para no hacer sombra. Y que decía que la escultura consiste en quitar, no en poner: que la figura ya está dentro del bloque y solo hay que retirar lo que sobra.",
        },
        {
          forma: "texto",
          texto:
            "Los otros dos nombres de la tercera edad son Leonardo y Rafael, y con los dos Vasari es generoso y algo incómodo. A Leonardo lo describe como un hombre de talento sobrenatural que dejaba casi todo sin terminar, cosa que a él, que entregaba siempre, le desconcertaba.",
        },
        {
          forma: "texto",
          texto:
            "En esa biografía está una de las páginas más consultadas de la historia del arte: la descripción del retrato de una tal Lisa, mujer del florentino Francesco del Giocondo. De ahí viene el nombre de La Gioconda, y de ahí viene la historia de los músicos.",
        },
        {
          forma: "texto",
          texto:
            "Porque Vasari cuenta que Leonardo hacía tocar y cantar a gente mientras posaba, para que aquella sonrisa no se le apagara. Es una escena preciosa y hay un problema: cuando la escribió, el cuadro llevaba treinta años en Francia y él no lo había visto nunca.",
        },
        {
          forma: "texto",
          texto:
            "De Rafael dice lo que dice todo el mundo desde entonces: que fue el más grato, el que aprendió de todos, el que se llevaba bien con todos y el que murió joven, a los treinta y siete años, el mismo día de su cumpleaños y en Viernes Santo.",
        },
        {
          forma: "texto",
          texto:
            "Y le atribuye una muerte por exceso amoroso que los médicos actuales creen que fue más bien una fiebre mal tratada. Es otro caso típico: un detalle novelesco que Vasari suelta sin más, que suena a chismorreo de taller y que ha sobrevivido cinco siglos.",
        },
        {
          forma: "texto",
          texto:
            "Aquí conviene decir algo sobre la fiabilidad general del libro. En los hechos grandes —quién pintó qué, quién enseñó a quién, dónde estaba cada obra— Vasari acierta la mayor parte de las veces, y los archivos le han ido dando la razón.",
        },
        {
          forma: "texto",
          texto:
            "En las fechas se equivoca constantemente. Adelanta y retrasa nacimientos, confunde a artistas con nombres parecidos, atribuye obras a quien no las hizo y en algún caso se inventa un personaje entero a partir de una firma que había leído mal.",
        },
        {
          forma: "texto",
          texto:
            "Y en las anécdotas, la regla práctica es no fiarse nunca del todo. No porque mintiera a propósito, sino porque no tenía nuestro concepto de fuente: si algo se contaba en los talleres y encajaba con el personaje, para él eso ya era suficiente.",
        },
        {
          forma: "texto",
          texto:
            "El propio Vasari se puso al final del libro, con una autobiografía en la que enumera sus obras sin ninguna modestia. Y una de esas obras es la razón de que hoy discutamos sobre él.",
        },
        {
          forma: "texto",
          texto:
            "Está en Florencia, es una sala enorme, y hay algo debajo.",
        },
      ],
    },

    {
      titulo: "El muro de la Sala de los Quinientos",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En 1563, Cosme I encargó a Vasari reformar el gran salón del Palacio Viejo de Florencia, la Sala de los Quinientos. Había que subir el techo siete metros, cambiar la cubierta y cubrir las paredes con escenas de las victorias militares de Florencia.",
        },
        {
          forma: "texto",
          texto:
            "En una de aquellas paredes, cincuenta y ocho años antes, Leonardo da Vinci había empezado La batalla de Anghiari, y en la de enfrente iba a pintar Miguel Ángel otra batalla. El encuentro de los dos en la misma sala es una de las citas más célebres que nunca ocurrieron del todo.",
        },
        {
          forma: "texto",
          texto:
            "Miguel Ángel no llegó a pintar: se hizo el cartón y se marchó a Roma llamado por el papa. Leonardo sí pintó una parte, con una técnica experimental que no secaba, y el resultado se le empezó a derretir literalmente en la pared. Lo dejó a medias.",
        },
        {
          forma: "clave",
          rotulo: "La pregunta que sigue abierta",
          frase: "Si Vasari, al reformar la sala, destruyó lo que quedaba de Leonardo o construyó un muro nuevo por delante dejándolo detrás. Hay quien sostiene lo segundo, apoyándose en que en su propio fresco pintó una banderita con dos palabras: busca y encontrarás.",
        },
        {
          forma: "texto",
          texto:
            "Entre 2011 y 2012 se hicieron sondeos con endoscopio a través del fresco de Vasari y aparecieron rastros de pigmento y una cavidad detrás del muro. La investigación se paró por la presión de quienes consideraban un disparate agujerear una obra para buscar otra.",
        },
        {
          forma: "texto",
          texto:
            "No hay conclusión. Puede que debajo esté Leonardo y puede que no, y la banderita puede ser una casualidad o un guiño. Lo que sí es seguro es que el hombre que escribió la vida de Leonardo pintó encima de un Leonardo, y esa imagen resume el libro entero.",
        },
        {
          forma: "arte",
          texto:
            "Porque Vasari es a la vez la razón de que sepamos tanto y la razón de que algunas cosas se perdieran o se contaran torcidas. Es el testigo y es parte interesada, y no hay manera de tener lo primero sin cargar con lo segundo.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Como arquitecto le debemos algo que sí está a la vista de todos. En 1560 empezó los Uffizi, unas oficinas para los magistrados del ducado, con dos alas larguísimas y una calle en medio abierta al río. Hoy son uno de los museos más visitados del mundo.",
        },
        {
          forma: "texto",
          texto:
            "Y en 1565 construyó en cinco meses el pasadizo elevado que une el Palacio Viejo con el palacio Pitti cruzando por encima del Ponte Vecchio, para que el duque pudiera ir de casa al trabajo sin pisar la calle. Se sigue llamando el corredor vasariano.",
        },
        {
          forma: "texto",
          texto:
            "Como pintor fue enormemente productivo y hoy se le considera correcto y poco más. Es una de las ironías del libro: escribió la historia que colocaba a Miguel Ángel en la cima, y con ello dejó una vara con la que su propia obra sale midiendo poco.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, dónde falla el libro, ordenado. Lo primero, ya dicho, es el esquema de progreso. Si el arte culmina en 1550, todo lo que venga después es caída, y esa idea ha lastrado durante siglos la manera de mirar el arte de los dos siglos siguientes.",
        },
        {
          forma: "texto",
          texto:
            "Lo segundo es el nacionalismo toscano. Florencia es el centro, Roma es donde los florentinos triunfan, Venecia es una provincia con buen color, Siena aparece a ratos, y el resto de Europa apenas existe. Escribe la historia del arte como si fuera la historia de su barrio.",
        },
        {
          forma: "texto",
          texto:
            "Lo tercero es el conflicto de intereses. Vasari trabajaba para los Médici, y la familia que le pagaba sale en el libro como la protectora natural del genio. Los encargos, las cortes y las lealtades de la época se leen siempre desde el lado del que manda.",
        },
        {
          forma: "texto",
          texto:
            "Lo cuarto es el método, o su ausencia. No distingue lo que ha visto de lo que le han contado, no cita de dónde saca las cosas, y cuando le falta un dato improvisa. Un historiador actual no aprobaría ni diez páginas seguidas de este libro.",
        },
        {
          forma: "texto",
          texto:
            "Lo que la gente cree y no es verdad, uno: que las anécdotas están documentadas. La mayoría no lo están. Las ovejas de Giotto, su círculo perfecto, el huevo de Brunelleschi y los músicos de la Gioconda no tienen ninguna prueba fuera de estas páginas.",
        },
        {
          forma: "texto",
          texto:
            "Dos: que Vasari inventó la palabra Renacimiento. Usó rinascita, renacer, para describir lo que había pasado. El nombre del periodo se fijó en el siglo diecinueve, con Michelet y Burckhardt. Lo que sí inventó es la idea, que es mucho más gordo.",
        },
        {
          forma: "texto",
          texto:
            "Tres: que es un libro de consulta aburrido. Es un libro de cotilleos con cuatro mil páginas, y por eso ha sobrevivido. Se puede abrir por cualquier sitio, leer una vida de ocho páginas y cerrarlo, que es exactamente como está pensado.",
        },
        {
          forma: "texto",
          texto:
            "Cuatro: que hay que leérselo entero. No hace falta, y probablemente no debe hacerse. Casi todas las ediciones en español son antologías con treinta o cuarenta vidas, y con eso está cubierto lo que un lector normal necesita.",
        },
        {
          forma: "texto",
          texto:
            "Y cinco: que Vasari era un aficionado escribiendo. Era un profesional del oficio que estaba contando, y eso se nota en cada página: sabe cuánto tarda en secar un fresco, cuánto pesa un bloque de mármol y qué se siente cuando un cliente no paga.",
        },
        {
          forma: "texto",
          texto:
            "Su idea de fondo tampoco ha caducado: que las obras las hacen personas concretas, con maestros, deudas, envidias y encargos, y que entender una pintura pasa por saber quién la pintó, para quién y en qué condiciones.",
        },
        {
          forma: "texto",
          texto:
            "Cada vez que alguien cuenta que Van Gogh se cortó la oreja antes de hablar de sus cuadros, está usando el formato que inventó un pintor de Arezzo en una cena de 1546.",
        },
        {
          forma: "texto",
          texto:
            "Vasari murió en 1574, sin saber si debajo de su fresco quedaba algo de Leonardo.",
        },
      ],
    },
  ],
};

export const REPRODUCTIBILIDAD: Resumen = {
  id: "reproductibilidad",
  titulo: "La obra de arte en la época de su reproductibilidad técnica",
  autor: "Walter Benjamin",
  ano: 1936,
  gancho:
    "Un refugiado alemán sin trabajo escribió en un café de París por qué una foto de un cuadro no es el cuadro. Cuatro años después murió en la frontera española.",
  porQue:
    "Es el ensayo del que salió todo lo que se dice hoy sobre imágenes, copias y originales. Y casi nadie lo lee: se citan cuatro frases suyas, casi siempre al revés de lo que él quería decir.",
  partes: [
    {
      titulo: "El Instituto en el exilio",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "París, otoño de 1935. Un alemán de cuarenta y tres años escribe en la sala de lectura de la Biblioteca Nacional porque su habitación de hotel no tiene calefacción. Vive de una beca pequeña, en un país que no es el suyo, y lleva dos años sin poder publicar en Alemania.",
        },
        {
          forma: "texto",
          texto:
            "Se llamaba Walter Benjamin. Había nacido en Berlín en 1892 en una familia judía acomodada, y su carrera académica se había hundido de un golpe en 1925, cuando la Universidad de Fráncfort rechazó su tesis de habilitación sobre el drama barroco alemán.",
        },
        {
          forma: "texto",
          texto:
            "El tribunal no la entendió, y un profesor le sugirió que la retirara para ahorrarse el bochorno. Aquel texto se considera hoy una obra mayor de la teoría literaria del siglo veinte. Benjamin no volvió a tener nunca un puesto universitario.",
        },
        {
          forma: "clave",
          rotulo: "De qué vivía entonces",
          frase: "De escribir reseñas, de traducir a Baudelaire y a Proust, y de hacer programas de radio para niños: unos ochenta guiones entre 1927 y 1933, sobre terremotos, estafadores y juguetes. El crítico más difícil de su generación se ganaba el pan explicando cosas a críos de diez años.",
        },
        {
          forma: "texto",
          texto:
            "En marzo de 1933, dos meses después de que Hitler llegara al poder, se marchó de Alemania y no volvió. Se instaló en París con lo puesto, y sobrevivió gracias a un estipendio del Instituto de Investigación Social, la llamada Escuela de Fráncfort, que también estaba en el exilio.",
        },
        {
          forma: "texto",
          texto:
            "Conviene aclarar su posición ahí, porque suele contarse mal. Benjamin no era un miembro consagrado de aquel grupo: era un becario periférico y dependiente, al que sus colegas admiraban y a la vez corregían, y esa dependencia va a marcar el destino de este texto.",
        },
        {
          forma: "arte",
          texto:
            "Cuando el ensayo se publicó en 1936, salió en la revista del Instituto, en traducción francesa y considerablemente recortado. Horkheimer y Adorno quitaron las referencias explícitas al comunismo, a Marx y a la lucha de clases, por miedo a comprometer al Instituto en el exilio.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Benjamin se puso furioso y protestó por carta, sin conseguir gran cosa. De todo aquello resulta un lío que hay que conocer antes de citarlo: existen tres versiones del ensayo, de 1935, 1936 y 1939, y no dicen exactamente lo mismo.",
        },
        {
          forma: "texto",
          texto:
            "La que se traduce con más frecuencia a otros idiomas es la última, y hay frases muy citadas que solo están en una de las tres. Cualquier discusión seria sobre este texto empieza preguntando de qué versión se está hablando, y esa pregunta casi nunca se hace.",
        },
        {
          forma: "texto",
          texto:
            "El punto de partida es un hecho técnico y no una teoría. Las obras de arte siempre se han podido reproducir: los griegos fundían bronces, la Edad Media estampaba xilografías, y en el siglo diecinueve llegaron la litografía y después la fotografía.",
        },
        {
          forma: "texto",
          texto:
            "Pero con la fotografía pasa algo distinto por primera vez. La mano deja de intervenir: el ojo mira por el objetivo y la reproducción se hace más deprisa de lo que se tarda en hablar. Y con el cine, la obra ya nace pensada para ser reproducida y no existe ningún original.",
        },
        {
          forma: "texto",
          texto:
            "De ese hecho saca su tesis, y es lo que hace que el ensayo siga vivo noventa años después: que un cambio en la manera de fabricar y distribuir imágenes cambia la naturaleza del arte, y de paso cambia la manera de percibir de la gente que lo consume.",
        },
        {
          forma: "texto",
          texto:
            "Conviene decir enseguida algo que casi siempre se cuenta al revés. Benjamin no está lamentando nada. No es un conservador llorando la pérdida de la gran pintura ante la invasión del cine: está celebrando lo que ocurre y explicando por qué le parece emancipador.",
        },
        {
          forma: "texto",
          texto:
            "Lo dice en el prólogo con todas las letras. Escribe que quiere dar unas tesis sobre la evolución del arte bajo las condiciones actuales de producción que sean inservibles para el fascismo y utilizables para formular exigencias revolucionarias en política artística.",
        },
        {
          forma: "texto",
          texto:
            "Y explica contra quién escribe: contra los conceptos tradicionales de creatividad, genialidad, valor eterno y misterio, que en la Alemania de 1935 se estaban usando para justificar exactamente el tipo de arte que el régimen quería. No es una discusión de estética abstracta.",
        },
        {
          forma: "texto",
          texto:
            "El texto es corto —unas cuarenta páginas— y es difícil de una manera peculiar. Cada párrafo funciona casi como un aforismo, los saltos son bruscos, y hay frases que se han citado durante décadas sin que nadie se ponga de acuerdo sobre qué significan exactamente.",
        },
        {
          forma: "arte",
          texto:
            "Su amigo Bertolt Brecht lo leyó y anotó en su diario que aquello era misticismo puro, con la postura de estar en contra del misticismo. Es una crítica de aliado, es injusta y tiene su parte de razón, y sigue siendo la mejor advertencia para un lector primerizo.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "Adorno le contestó por carta en 1936 con una objeción distinta y más de fondo: que era demasiado optimista con la cultura de masas y demasiado duro con el arte autónomo, y que las dos cosas llevan igualmente las marcas del capitalismo.",
        },
        {
          forma: "texto",
          texto:
            "Ese intercambio es uno de los debates clásicos del pensamiento del siglo veinte, y en él se ve bien la diferencia entre los dos. Adorno desconfía de lo que gusta a mucha gente. Benjamin sospecha de lo que solo puede disfrutar quien tiene tiempo y educación para ello.",
        },
        {
          forma: "texto",
          texto:
            "Todo el ensayo gira alrededor de un concepto que Benjamin se inventa y que ha entrado en el idioma sin que casi nadie sepa de dónde viene.",
        },
        {
          forma: "texto",
          texto:
            "Lo llama el aura.",
        },
        {
          forma: "texto",
          texto:
            "Y su tesis es que la reproducción técnica se la carga.",
        },
      ],
    },

    {
      titulo: "El aura",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La definición que da es rara y hay que leerla despacio: el aura es la aparición única de una lejanía, por cerca que esté lo que la produce. La ilustra con un ejemplo que no es de arte, sino de estar tumbado en una tarde de verano siguiendo con la vista una cordillera en el horizonte.",
        },
        {
          forma: "texto",
          texto:
            "Esa montaña está lejos aunque uno la tenga delante, y esa distancia no se puede abolir acercándose. Traducido a un cuadro: el aura es lo que hace que estar delante del original no sea lo mismo que ver una foto perfecta de él, aunque la foto muestre más detalle.",
        },
        {
          forma: "clave",
          rotulo: "De qué está hecha esa distancia",
          frase: "Del aquí y del ahora de la obra: de que existe una sola, en un sitio concreto, con una historia detrás. El cuadro estuvo en un taller, lo compró alguien, se agrietó, lo restauraron, sobrevivió a una guerra. Eso es lo que Benjamin llama su autenticidad, y no se puede copiar.",
        },
        {
          forma: "texto",
          texto:
            "La reproducción hace dos cosas a la vez con eso. Primero, saca la obra de su sitio: la catedral sale de su plaza y entra en el salón de una casa, el coro entra en una habitación. Segundo, la multiplica: en vez de un ejemplar irrepetible hay millones de copias iguales.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí es donde Benjamin toma partido. Escribe que las masas contemporáneas tienen el deseo de acercarse a las cosas y de superar lo irrepetible de cada dato apropiándose de su reproducción, y no lo dice como reproche: lo dice como descripción de un movimiento histórico.",
        },
        {
          forma: "texto",
          texto:
            "Para explicar de dónde viene el aura se va muy atrás, y esta es la parte más elegante del ensayo. Sostiene que el arte nació en el ritual y que durante milenios su función no fue ser mirado, sino estar ahí. Las pinturas de las cuevas no se hicieron para que se vieran.",
        },
        {
          forma: "arte",
          texto:
            "Su otro ejemplo es medieval y es demoledor. Ciertas imágenes de la Virgen permanecían tapadas casi todo el año y solo se descubrían en fechas señaladas; y algunas esculturas de las catedrales están talladas en sitios donde nadie a pie de calle puede verlas nunca.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "De ahí saca su pareja de conceptos: valor de culto y valor de exhibición. Una obra con valor de culto vale por existir en un sitio, aunque no la vea nadie. Una obra con valor de exhibición vale por ser vista, y cuanta más gente la vea, mejor cumple su función.",
        },
        {
          forma: "texto",
          texto:
            "La historia del arte, en su lectura, es el desplazamiento lento de lo primero a lo segundo. El cuadro de caballete ya es más exhibible que un fresco, la litografía más que el cuadro, y la fotografía es exhibición pura: solo existe para circular y para ser mirada.",
        },
        {
          forma: "texto",
          texto:
            "Y cuando el valor de culto desaparece, dice, la obra pierde su fundamento en el ritual y pasa a fundarse en otra práctica. En la política. Esa frase es el eje del ensayo entero y es también la que Adorno y Horkheimer le recortaron en la edición de 1936.",
        },
        {
          forma: "texto",
          texto:
            "Hay una excepción que Benjamin describe con cariño: el último refugio del aura en la fotografía es el retrato. En las primeras fotos de personas queridas, sobre todo de las que ya han muerto, queda algo de valor de culto: son objetos de recuerdo, no imágenes para exhibir.",
        },
        {
          forma: "texto",
          texto:
            "Por eso, dice, en aquellos retratos de 1850 el rostro humano todavía tiene aura, y cuando el hombre desaparece de la fotografía —cuando Eugène Atget empieza a fotografiar calles de París vacías— el aura se acaba del todo y aparece otra cosa.",
        },
        {
          forma: "texto",
          texto:
            "Su comparación de las fotos de Atget es magnífica: parecen escenas del crimen. Un lugar vacío fotografiado para el registro, que exige una interpretación y que no se explica solo. Y de ahí, dice, viene la necesidad del pie de foto, que es lo que orienta lo que hay que mirar.",
        },
        {
          forma: "texto",
          texto:
            "Ese detalle, escrito en 1935, describe el problema entero de las imágenes de hoy. Una fotografía no dice nada por sí sola: lo que dice depende del texto que la acompaña, y quien controla el pie de foto controla lo que la imagen significa para quien la ve.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, la objeción de fondo, que hay que poner encima de la mesa porque es fuerte. La predicción central del ensayo —que la reproducción disolvería el aura— no se ha cumplido. Ha ocurrido casi lo contrario, y las cifras están a la vista de cualquiera.",
        },
        {
          forma: "texto",
          texto:
            "La Gioconda es el cuadro más reproducido de la historia, está en llaveros, tazas y anuncios, y precisamente por eso hay treinta mil personas al día haciendo cola en el Louvre para verlo diez segundos por encima de las cabezas de los demás. La copia alimenta al original.",
        },
        {
          forma: "texto",
          texto:
            "El aura no se disolvió: se desplazó y se hizo negocio. Los museos están más llenos que nunca, las entradas a exposiciones se agotan, y el valor de un original en subasta ha crecido en proporción directa a lo reproducida que esté su imagen.",
        },
        {
          forma: "texto",
          texto:
            "Es la refutación más clara de su tesis y conviene decirla sin rodeos. Lo que sí acertó es el mecanismo: que el aquí y el ahora es lo que la gente busca, y hoy se busca haciendo cuatro horas de cola para estar cinco minutos delante de algo que ya se ha visto mil veces.",
        },
        {
          forma: "texto",
          texto:
            "Hay otra objeción menor y también justa: usa la palabra aura de maneras distintas en distintos textos suyos. En un ensayo de 1931 sobre fotografía la define de otro modo, y esa inconsistencia ha dado de comer a varias generaciones de comentaristas.",
        },
        {
          forma: "texto",
          texto:
            "Dicho eso, la segunda mitad del ensayo es donde está lo mejor y lo más aprovechable, y trata de un arte que en 1935 tenía menos de cuarenta años.",
        },
        {
          forma: "texto",
          texto:
            "El primero que nace ya sin original.",
        },
        {
          forma: "texto",
          texto:
            "El cine.",
        },
      ],
    },

    {
      titulo: "La sala de montaje",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Benjamin empieza por lo que le ocurre al actor, y es la observación más aguda del ensayo. Un actor de teatro trabaja delante de un público, en tiempo real, y su interpretación es un acontecimiento que ocurre una vez. Un actor de cine trabaja delante de una máquina.",
        },
        {
          forma: "texto",
          texto:
            "No hay público, no hay continuidad y no hay obra: hay una serie de fragmentos rodados en desorden, cada uno repetido veinte veces, que alguien montará después en una sala a la que el actor no entra. Su interpretación no existe hasta que otro la fabrica.",
        },
        {
          forma: "clave",
          rotulo: "Lo que eso significa",
          frase: "Que el actor de cine actúa en el exilio: exiliado del escenario y también de su propia imagen, que se le presenta terminada y ajena. Y como el aura de una persona está atada a su presencia, en el cine no puede haber aura. Lo que hay es su sustituto industrial.",
        },
        {
          forma: "texto",
          texto:
            "Ese sustituto es el sistema de estrellas. Benjamin escribe que el capital cinematográfico fabrica alrededor del actor un culto artificial a la personalidad, hecho de revistas, apariciones y rumores, precisamente para reponer algo que la técnica ha eliminado.",
        },
        {
          forma: "texto",
          texto:
            "Y añade la observación política que va con ella: que ese mismo procedimiento se aplica a los políticos, que también actúan ante micrófonos y cámaras y a los que se les construye una presencia fabricada. En 1935, con Hitler dando discursos filmados, no es una nota al margen.",
        },
        {
          forma: "texto",
          texto:
            "La comparación con la que explica la diferencia entre pintar y filmar es la más recordada del ensayo: el pintor es como un curandero y el cámara es como un cirujano. Y la desarrolla en serio, porque no es un adorno retórico.",
        },
        {
          forma: "arte",
          texto:
            "El curandero pone las manos encima del enfermo y mantiene una distancia natural con él; el cirujano abre el cuerpo y mete las manos dentro. Igual el pintor mantiene su distancia con lo que pinta y el cámara penetra en el tejido de lo real y lo trocea.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "De ahí saca la consecuencia estética: la imagen del pintor es total, la del cámara es fragmentaria y sus partes se ensamblan según una ley nueva. La unidad de una película no está en ningún plano: está en el montaje, que es un procedimiento de laboratorio.",
        },
        {
          forma: "texto",
          texto:
            "El segundo concepto que aporta aquí es el que más ha viajado: el inconsciente óptico. La cámara ve cosas que el ojo no puede ver, y no por ser más potente, sino por poder cortar el tiempo y el espacio de maneras que la percepción humana no admite.",
        },
        {
          forma: "texto",
          texto:
            "Todo el mundo sabe más o menos cómo camina una persona; nadie sabe qué hace exactamente el pie en la fracción de segundo en que se despega del suelo. El primer plano y la cámara lenta lo enseñan, y con ello abren un territorio que estaba delante de los ojos y era invisible.",
        },
        {
          forma: "texto",
          texto:
            "Benjamin compara eso directamente con lo que hizo el psicoanálisis: aislar y hacer analizable un material que estaba ahí y del que nadie se daba cuenta. Y lo dice con admiración, porque para él el cine no es entretenimiento, es un instrumento de conocimiento.",
        },
        {
          forma: "texto",
          texto:
            "La tercera aportación es la que se ha vuelto más actual y se llama recepción en la dispersión. Su tesis es que hay dos maneras de recibir una obra: la contemplación, en la que uno se sumerge en ella, y la distracción, en la que uno la incorpora sin fijarse.",
        },
        {
          forma: "texto",
          texto:
            "El modelo de la segunda es la arquitectura, y el ejemplo es perfecto. Nadie contempla el edificio donde vive: lo recibe usándolo, entrando y saliendo, por costumbre y con el rabillo del ojo. Y sin embargo lo conoce mejor que cualquier turista que lo mire una tarde.",
        },
        {
          forma: "texto",
          texto:
            "Su tesis es que el cine hace lo mismo con las imágenes. Nadie contempla un plano: en cuanto uno se fija, ya ha cambiado, y esa sucesión constante impide la absorción y produce lo que él llama un efecto de choque. Se recibe la película por hábito, no por concentración.",
        },
        {
          forma: "texto",
          texto:
            "Y no lo considera una degradación, aunque suene así. Sostiene que la humanidad se enfrenta a tareas nuevas de percepción que no se pueden resolver mirando fijamente, y que la distracción es el modo en que las masas se entrenan para un entorno que va demasiado deprisa.",
        },
        {
          forma: "texto",
          texto:
            "Cualquiera que haya visto a alguien con el móvil mientras habla, la televisión encendida de fondo y tres pestañas abiertas, reconocerá que ese análisis de 1935 describe con bastante exactitud cómo se consume casi todo hoy, incluido este resumen.",
        },
        {
          forma: "texto",
          texto:
            "Hay un cuarto punto que Benjamin celebra y en el que se equivocó de medio a medio, y merece señalarse. Sostiene que el cine democratiza la autoría, porque cualquiera puede acabar delante de una cámara y porque los periódicos han convertido a los lectores en escritores.",
        },
        {
          forma: "texto",
          texto:
            "Su ejemplo es el de las cartas al director y las secciones de opinión, que en su época borraban un poco la frontera entre quien escribe y quien lee. Es una intuición que noventa años después describe internet entero y que él imaginó a partir de la prensa obrera.",
        },
        {
          forma: "texto",
          texto:
            "Lo que no vio, y era difícil de ver, es que un medio de producción caro y una distribución concentrada podían dar el resultado contrario: no la democratización, sino una industria de estudios con un puñado de propietarios decidiendo qué ve todo el mundo.",
        },
        {
          forma: "texto",
          texto:
            "Y sobre eso, en las últimas páginas, escribe el epílogo más citado y más sombrío del ensayo, porque en 1935 ya se veía perfectamente para qué se estaba usando aquello.",
        },
        {
          forma: "texto",
          texto:
            "Bastaba con mirar los noticiarios que llegaban de Alemania.",
        },
      ],
    },

    {
      titulo: "El estadio de Núremberg",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En septiembre de 1934, en la explanada de los congresos del partido nazi en Núremberg, ciento cincuenta mil personas formadas en cuadros perfectos escuchaban a Hitler bajo ciento treinta reflectores antiaéreos que subían rectos hacia el cielo. Todo estaba diseñado para la cámara.",
        },
        {
          forma: "texto",
          texto:
            "Aquello se rodó con treinta cámaras y treinta y cinco horas de material, y el montaje se estrenó en 1935. La coreografía de las masas no era un acto político que además se filmara: era una película que se estaba rodando y a la que asistían ciento cincuenta mil figurantes.",
        },
        {
          forma: "clave",
          rotulo: "El diagnóstico de Benjamin",
          frase: "Que el fascismo da a las masas expresión sin darles derechos. Les permite manifestarse, desfilar y sentirse protagonistas, mientras deja intacta la estructura de propiedad que las mantiene donde están. Y esa sustitución de derechos por expresión desemboca en la estetización de la política.",
        },
        {
          forma: "texto",
          texto:
            "Su razonamiento es este. Un régimen que no puede resolver los conflictos materiales tiene que ofrecer otra cosa, y lo que ofrece es forma: uniformes, banderas, formaciones, luces, música. La política se convierte en un espectáculo del que la gente forma parte como material.",
        },
        {
          forma: "texto",
          texto:
            "Y si la política es una obra de arte, dice, su culminación lógica es la guerra, porque la guerra es lo único capaz de movilizar todos los recursos técnicos de una sociedad manteniendo intactas las relaciones de propiedad. Es la obra total del régimen.",
        },
        {
          forma: "arte",
          texto:
            "Como prueba cita un manifiesto del futurista italiano Marinetti sobre la guerra colonial en Etiopía, que celebra literalmente la belleza de la guerra: los tanques, los fusiles ametralladores, el olor de la pólvora y los grandes cañones. Benjamin lo reproduce sin comentarlo mucho.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "No hace falta comentarlo. Un poeta explicando que la metralla es hermosa mientras Italia bombardea aldeas con gas es exactamente lo que el ensayo estaba describiendo en abstracto, y Benjamin lo pone al final como quien enseña la pieza de convicción.",
        },
        {
          forma: "texto",
          texto:
            "El párrafo final es de los más célebres del pensamiento del siglo veinte, y dice que la humanidad se ha convertido en espectáculo para sí misma, y que su autoextrañamiento ha llegado a un grado tal que le permite vivir su propia destrucción como un goce estético de primer orden.",
        },
        {
          forma: "texto",
          texto:
            "Y cierra con la frase que lo resume todo: esa es la situación de la política que el fascismo estetiza. El comunismo le responde con la politización del arte. Esa última línea es la que Adorno y Horkheimer suavizaron en la edición de 1936.",
        },
        {
          forma: "texto",
          texto:
            "Hay que decir que esa conclusión es también el punto más débil del ensayo, y no por motivos ideológicos sino empíricos. La misma técnica que él confiaba en que sirviera para politizar el arte estaba sirviendo mucho mejor, en ese mismo momento, para lo contrario.",
        },
        {
          forma: "texto",
          texto:
            "El cine no resultó ser un medio intrínsecamente emancipador. Fue el mejor instrumento de propaganda que ha existido hasta la aparición de las redes, lo usaron con maestría los dos totalitarismos del siglo, y su forma dominante acabó siendo la industria del entretenimiento.",
        },
        {
          forma: "texto",
          texto:
            "El error de fondo es el determinismo tecnológico: dar por supuesto que una técnica lleva dentro una política. Su propio epílogo lo desmiente, y esa tensión sin resolver entre el cuerpo optimista del ensayo y el final sombrío es lo que lo hace interesante de leer.",
        },
        {
          forma: "texto",
          texto:
            "Hay otras dos objeciones que se le hacen con razón. La primera es que habla constantemente de las masas sin haberlas estudiado nunca: no hay en estas páginas un solo dato sobre qué veía la gente, en qué salas, cuánto pagaba o qué entendía.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es de método. Benjamin escribe por imágenes y por saltos, y sus afirmaciones no son de las que se pueden comprobar. Es un ensayista extraordinario y no es un investigador, y quien lo lea esperando pruebas se va a encontrar con metáforas muy buenas.",
        },
        {
          forma: "texto",
          texto:
            "Aun con todo eso, la caja de herramientas que dejó se sigue usando a diario. El aura, el valor de exhibición, el inconsciente óptico, la recepción distraída y la estetización de la política son conceptos que hoy aparecen en discusiones sobre cosas que él no llegó a ver.",
        },
        {
          forma: "texto",
          texto:
            "Un filtro de retrato es exactamente el culto artificial a la personalidad que describía. Una manifestación organizada para producir imágenes es la estetización de la política. Y lo del pie de foto que decide qué significa una imagen es la discusión pública entera de hoy.",
        },
        {
          forma: "texto",
          texto:
            "El ensayo se publicó en francés, en una revista de exiliados con muy pocos lectores, y prácticamente no tuvo eco en su momento. Hubo que esperar a los años sesenta, cuando se recuperó su obra en Alemania, para que empezara a leerse en serio.",
        },
        {
          forma: "texto",
          texto:
            "Su autor no llegó a verlo. En junio de 1940, cuando los alemanes entraron en París, Benjamin quemó papeles, cerró el piso y salió hacia el sur con lo que pudo cargar.",
        },
        {
          forma: "texto",
          texto:
            "Tenía cuarenta y ocho años, el corazón mal y ningún visado de salida de Francia.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí tenía era un visado de entrada en Estados Unidos, conseguido por Horkheimer desde Nueva York, y un plan.",
        },
        {
          forma: "texto",
          texto:
            "Cruzar los Pirineos a pie y coger un barco en Lisboa.",
        },
      ],
    },

    {
      titulo: "Portbou, 26 de septiembre de 1940",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El 25 de septiembre de 1940, un grupo pequeño de refugiados subió desde Banyuls-sur-Mer por un sendero de contrabandistas que cruza la sierra hasta el lado español. Los guiaba Lisa Fittko, una alemana de veintiséis años que había hecho el camino una sola vez.",
        },
        {
          forma: "texto",
          texto:
            "Benjamin era el mayor y estaba enfermo del corazón. Subió parándose cada diez minutos exactamente un minuto, con un método que se había impuesto a sí mismo para no derrumbarse, y cargando todo el trayecto una cartera negra pesada que se negó a dejar en ningún momento.",
        },
        {
          forma: "clave",
          rotulo: "Lo que dijo de aquella cartera",
          frase: "Que el manuscrito que llevaba dentro era más importante que su propia persona y que tenía que salvarse. Le contó a Fittko que era un texto nuevo. Ni la cartera ni el manuscrito han aparecido nunca, y desde entonces se discute qué contenía exactamente.",
        },
        {
          forma: "texto",
          texto:
            "Llegaron a Portbou por la tarde y se presentaron en la comisaría con sus visados de tránsito españoles. Les dijeron que ya no servían: España acababa de cerrar la frontera a los apátridas, y a la mañana siguiente los devolverían a Francia, es decir, a la Gestapo.",
        },
        {
          forma: "texto",
          texto:
            "Los alojaron esa noche en el hotel de Francia, en la habitación número cuatro, con un policía vigilando. Benjamin llevaba encima un tubo de tabletas de morfina que había conseguido en Marsella. Murió en aquella habitación en la madrugada del 26 de septiembre.",
        },
        {
          forma: "texto",
          texto:
            "El certificado médico habla de hemorragia cerebral. Los que iban con él entendieron siempre otra cosa, y el juez que instruyó el caso registró varias tabletas y una nota. La ambigüedad del certificado probablemente permitió enterrarlo en el cementerio católico del pueblo.",
        },
        {
          forma: "arte",
          texto:
            "A la mañana siguiente, las autoridades dejaron pasar a todo el grupo. La orden de cierre se levantó a los pocos días. Si Benjamin hubiera aguantado una noche más, habría llegado a Lisboa y de allí a Nueva York, donde le esperaban con un puesto en el Instituto.",
          arte: "mapa",
        },
        {
          forma: "texto",
          texto:
            "Unas semanas después cruzó por allí Hannah Arendt, que era amiga suya y que buscó su tumba sin encontrarla. Llevaba en el equipaje un texto que él le había entregado en Marsella por si acaso: las tesis sobre el concepto de historia, que llegaron así a Nueva York.",
        },
        {
          forma: "texto",
          texto:
            "La concesión de la tumba de Portbou expiró y los restos fueron a parar a un osario común, así que no se sabe con exactitud dónde están. En 1994 se inauguró allí un monumento del escultor Dani Karavan: una escalera de acero que baja hacia el mar y se detiene ante un cristal.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, el balance del ensayo, ordenado. Lo primero: su predicción central falló. El aura no se disolvió con la reproducción, se revalorizó gracias a ella, y el turismo de museo es la prueba diaria de que ocurrió lo contrario de lo que anunció.",
        },
        {
          forma: "texto",
          texto:
            "Lo segundo: el determinismo. Da por hecho que una técnica trae consigo una política, y la historia del cine demuestra que la misma cámara sirve para un documental obrero y para un desfile en Núremberg. Él lo intuye en el epílogo y no lo resuelve.",
        },
        {
          forma: "texto",
          texto:
            "Lo tercero: no hay investigación empírica de ninguna clase. Habla de las masas, del público y de la percepción sin un solo dato, y sus afirmaciones sobre cómo perciben millones de personas están construidas desde un sillón de biblioteca.",
        },
        {
          forma: "texto",
          texto:
            "Lo cuarto: es un texto difícil, elíptico y con tres versiones distintas que no coinciden. Quien lo cite debería decir cuál está citando, y casi nadie lo hace, con lo que circulan atribuciones de frases que solo aparecen en una de las tres redacciones.",
        },
        {
          forma: "texto",
          texto:
            "Lo que la gente cree y no es verdad, uno: que Benjamin lamenta la pérdida del aura. No la lamenta. Considera que liberar al arte del ritual es una emancipación, y escribe explícitamente contra las teorías reaccionarias del genio y del valor eterno.",
        },
        {
          forma: "texto",
          texto:
            "Dos: que aura significa algo místico que tienen las obras maestras. Es un término técnico y bastante seco: el aquí y el ahora de un objeto único con una historia propia. Nada que ver con la calidad de la obra ni con el talento de quien la hizo.",
        },
        {
          forma: "texto",
          texto:
            "Tres: que era un miembro destacado de la Escuela de Fráncfort. Era un becario dependiente al que sus colegas recortaron el texto antes de publicárselo, y que murió pobre sin haber tenido nunca un puesto académico en ninguna parte.",
        },
        {
          forma: "texto",
          texto:
            "Cuatro: que el ensayo fue influyente en su momento. Salió en francés, en una revista de exiliados, cortado, y no lo leyó prácticamente nadie hasta veinticinco años después de la muerte de su autor.",
        },
        {
          forma: "texto",
          texto:
            "Y cinco: que se mató por desesperación ante la guerra. Se mató la noche en que le comunicaron que a la mañana siguiente lo entregarían a la policía francesa, y por tanto a los alemanes. Es una diferencia importante y conviene mantenerla.",
        },
        {
          forma: "texto",
          texto:
            "Lo que queda es una caja de herramientas para pensar cualquier imagen que se produzca hoy, escrita por alguien que no vio la televisión, ni el color, ni una pantalla de ordenador, ni una cámara en un bolsillo.",
        },
        {
          forma: "texto",
          texto:
            "En Portbou, la escalera de Karavan baja setenta escalones hacia el agua y termina en un cristal que impide seguir.",
        },
        {
          forma: "texto",
          texto:
            "Se ve el mar perfectamente y no se puede llegar a él.",
        },
      ],
    },
  ],
};

export const PAJARO_A_PAJARO: Resumen = {
  id: "pajaro-a-pajaro",
  titulo: "Pájaro a pájaro",
  autor: "Anne Lamott",
  ano: 1994,
  gancho:
    "Un niño de diez años lleva tres meses con un trabajo sobre pájaros y lo tiene que entregar mañana. Está paralizado. Su padre se sienta a su lado.",
  porQue:
    "No enseña a escribir bien: enseña a escribir mal a propósito, que es el requisito previo que nadie cuenta. Y dice en voz alta lo que ningún libro del género dice: que publicar no arregla nada.",
  partes: [
    {
      titulo: "La mesa del comedor, en Marin County",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Norte de California, años sesenta. Un niño de diez años está sentado a la mesa del comedor la noche antes de entregar un trabajo del colegio sobre pájaros. Lo lleva mandado desde hace tres meses y no ha escrito ni una línea.",
        },
        {
          forma: "texto",
          texto:
            "A su alrededor tiene folios en blanco, lápices bien afilados y una pila de libros sobre aves que no ha abierto. Está inmóvil, con la cabeza entre las manos, al borde de las lágrimas, aplastado por el tamaño de la tarea que tiene delante.",
        },
        {
          forma: "clave",
          rotulo: "Lo que le dijo su padre",
          frase: "Se sentó a su lado, le pasó el brazo por el hombro y le dijo: pájaro a pájaro, chaval. Cógelo pájaro a pájaro. No le dio un plan ni un esquema ni un horario. Le quitó de delante la enciclopedia entera y le dejó un pájaro.",
        },
        {
          forma: "texto",
          texto:
            "El niño era el hermano mayor de Anne Lamott, y el padre era un escritor profesional que sabía perfectamente lo que estaba viendo, porque era exactamente lo mismo que le pasaba a él delante de la máquina de escribir cada mañana.",
        },
        {
          forma: "texto",
          texto:
            "Treinta años después, aquella frase da título al mejor libro que se ha escrito sobre por qué la gente que quiere escribir no escribe. No sobre técnica, ni sobre estructura, ni sobre estilo: sobre el miedo concreto que produce una página vacía.",
        },
        {
          forma: "arte",
          texto:
            "Y conviene entender bien qué significa el consejo, porque suele traducirse mal. Pájaro a pájaro no quiere decir divide la tarea en partes, que es lo que dice cualquier manual de productividad. Quiere decir deja de mirar el conjunto, porque mirarlo te está paralizando.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "La diferencia es real. Dividir una tarea es una técnica de planificación que se hace con la cabeza fría. Lo que su padre le dio a aquel niño fue un remedio contra el pánico: no puedes escribir sobre los pájaros, así que escribe sobre este.",
        },
        {
          forma: "texto",
          texto:
            "Quien escribió el libro se llama Anne Lamott, nació en San Francisco en 1954 y creció en Marin County, al norte de la ciudad. Su padre, Kenneth Lamott, fue escritor y periodista, y en su casa la escritura era el oficio del que se comía y del que se hablaba.",
        },
        {
          forma: "texto",
          texto:
            "Ese detalle le da autoridad y también le quita una parte. Creció viendo a un profesional trabajar todos los días, lo cual explica mucho de lo que sabe. Y significa que su punto de partida no es el de alguien que empieza de cero sin nadie que le enseñe.",
        },
        {
          forma: "texto",
          texto:
            "Su padre murió de un tumor cerebral cuando ella tenía veintitantos años. Su primera novela la escribió en aquellos meses, para él y sobre aquello, y él llegó a leer partes. Ese episodio recorre el libro entero por debajo sin que se convierta nunca en el tema.",
        },
        {
          forma: "texto",
          texto:
            "Lamott es alcohólica en recuperación desde 1986 y no lo esconde: aparece en varias páginas como parte del oficio y del problema. También es creyente, y esa parte del libro merece un aviso porque no está anunciada en la portada.",
        },
        {
          forma: "texto",
          texto:
            "En los últimos capítulos, su cristianismo se vuelve explícito, con oraciones incluidas. A quien no comparta eso le va a chirriar, y conviene saberlo de antemano para no llevarse la sorpresa a mitad de un libro que hasta entonces era otra cosa.",
        },
        {
          forma: "texto",
          texto:
            "El libro salió en 1994, sale de sus clases de escritura y está escrito como si estuviera hablando en una de ellas. Se puede leer en dos tardes, no tiene ejercicios y no tiene sistema. Es una conversación con alguien que lleva veinte años haciendo esto y ha decidido no mentir.",
        },
        {
          forma: "arte",
          texto:
            "Su tesis de partida es que el problema del escritor principiante no es de técnica sino de expectativa. Cree que escribir consiste en sentarse y que salgan frases buenas, y como no le salen, concluye que no sirve, cuando lo que pasa es que a nadie le salen.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "De ahí que el libro dedique tan poco espacio a la técnica y tanto a la cabeza. Su diagnóstico es que casi todo el mundo que quiere escribir sabe bastante más de lo que cree, y que lo que le impide hacerlo es una idea equivocada de cómo trabajan los demás.",
        },
        {
          forma: "texto",
          texto:
            "Aquí hay una comparación útil con el otro gran libro del género, que está en esta misma biblioteca. Mientras escribo, de Stephen King, tiene caja de herramientas: gramática, adverbios, diálogo, ritmo, cuántas palabras al día y cómo se corta un manuscrito.",
        },
        {
          forma: "texto",
          texto:
            "Pájaro a pájaro casi no tiene nada de eso, y no por descuido. Los dos libros hacen cosas distintas: King explica cómo se construye una casa y Lamott explica por qué te tiemblan las manos antes de coger el martillo. Leídos juntos, se completan bastante bien.",
        },
        {
          forma: "texto",
          texto:
            "Si alguien tiene que elegir uno, la regla práctica es sencilla. Quien ya escribe y quiere escribir mejor, que lea a King. Quien lleva años queriendo escribir y no ha pasado de la primera página, que lea a Lamott, porque su problema no es la técnica.",
        },
        {
          forma: "texto",
          texto:
            "Y el primer capítulo de verdad del libro, el que ha hecho que se recomiende durante treinta años, ataca directamente la causa número uno de esa parálisis.",
        },
        {
          forma: "texto",
          texto:
            "Es un capítulo corto, de seis páginas, y tiene un título que en la edición española se suaviza y en el original no.",
        },
        {
          forma: "texto",
          texto:
            "Habla de los primeros borradores.",
        },
        {
          forma: "texto",
          texto:
            "Y del hecho, no negociable, de que son malísimos.",
        },
        {
          forma: "texto",
          texto:
            "Todos.",
        },
        {
          forma: "texto",
          texto:
            "También los de la gente a la que admiras.",
        },
      ],
    },

    {
      titulo: "El primer borrador de mierda",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Lamott empieza el capítulo describiendo lo que cree la gente que no escribe: que los escritores buenos se sientan, entran en una especie de trance, y sale un texto fluido y ordenado que ya casi está listo, con algún retoque menor aquí y allá.",
        },
        {
          forma: "texto",
          texto:
            "Y dice que eso no le pasa a nadie que ella conozca, y que conoce a bastantes. Lo que pasa de verdad es que se sientan aterrorizados, escriben algo espantoso durante dos horas, y al día siguiente lo miran y encuentran dos frases que sirven.",
        },
        {
          forma: "clave",
          rotulo: "Su regla, que es la del libro entero",
          frase: "El primer borrador tiene permiso para ser horroroso, y de hecho tiene que serlo. Lo llama el borrador del niño: se deja salir todo, sin juzgar, sabiendo que nadie lo va a ver. Es la única manera de tener material sobre el que trabajar después.",
        },
        {
          forma: "texto",
          texto:
            "Su descripción del proceso es de tres pasos y es lo más útil que hay en el libro. El primer borrador se escribe entero y mal, sin corregir nada por el camino. El segundo se dedica a arreglarlo. Y el tercero es el borrador dental: se comprueba diente por diente.",
        },
        {
          forma: "texto",
          texto:
            "El error que describe, y que hace casi todo el mundo, es intentar hacer los tres a la vez. Escribir una frase, corregirla, volver a leerla, cambiarla otra vez, y llevar dos horas de trabajo con un párrafo pulido y ninguna idea de adónde va aquello.",
        },
        {
          forma: "arte",
          texto:
            "El motivo por el que eso no funciona es de mecánica mental. Escribir y corregir son operaciones distintas: una necesita permiso para decir tonterías y la otra consiste en detectar tonterías. Hacerlas a la vez es conducir con el freno de mano puesto.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Ella cuenta su propio proceso con una escena que se recuerda. Escribía una columna mensual sobre comida para una revista, y cada mes se pasaba dos días convencida de que esa vez sí, de que ya no sabía escribir y de que iban a descubrir el fraude.",
        },
        {
          forma: "texto",
          texto:
            "Y cada mes hacía lo mismo: escribía páginas y páginas de material inservible, en las que se quejaba, divagaba y contaba cosas que no venían a cuento, hasta que en algún sitio aparecía una línea que valía. Esa línea era el principio de la columna.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale su segundo consejo práctico, y es de los que se pueden aplicar esta tarde: el material bueno casi nunca está al principio de lo que escribes. Está enterrado en la página tres, después de que hayas terminado de calentar.",
        },
        {
          forma: "texto",
          texto:
            "Por eso insiste en escribir de más y tirar. La labor de las primeras páginas no es ser buenas: es llevarte hasta donde está lo que de verdad tenías que decir, que casi nunca es lo que creías que ibas a decir cuando te sentaste.",
        },
        {
          forma: "texto",
          texto:
            "El enemigo que identifica detrás de todo esto tiene nombre y le dedica un capítulo entero: el perfeccionismo. Y su definición es agresiva a propósito. Lo llama la voz del opresor y el enemigo del pueblo.",
        },
        {
          forma: "texto",
          texto:
            "Su argumento es que el perfeccionismo se disfraza de exigencia y de buen gusto, y que en realidad es miedo. Miedo a que si dejas salir algo imperfecto se vea cómo eres, y ese miedo produce el único resultado que garantiza no exponerse: no terminar nada.",
        },
        {
          forma: "texto",
          texto:
            "Y añade una observación que va más allá de la escritura: que el perfeccionismo se basa en la creencia obsesiva de que si corres con el cuidado suficiente conseguirás no morirte. Que si lo haces todo bien no te pasará nada malo, y eso no funciona así.",
        },
        {
          forma: "arte",
          texto:
            "Su prueba práctica de que la imperfección no mata es doméstica: que el desorden y las manchas son donde vive la vida, y que una casa perfectamente ordenada y una página perfectamente pulida tienen en común que no ha pasado nada en ellas.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "El otro consejo material del capítulo es de una banalidad engañosa: llevar fichas de cartulina encima siempre. En el bolsillo, en el coche, en la mesilla, en la ducha si hace falta una pizarra. Y apuntar en el momento.",
        },
        {
          forma: "texto",
          texto:
            "Su razonamiento es que las ideas buenas llegan sin avisar y con una vida útil de unos treinta segundos, y que la sensación de que uno se acordará después es sistemáticamente falsa. La cantidad de material que se pierde por confiar en la memoria es enorme.",
        },
        {
          forma: "texto",
          texto:
            "Y advierte contra la trampa habitual, que es apuntar solo lo que parece importante. Dice que hay que apuntar también lo que parece una tontería, porque lo que sirve después casi nunca es lo que parecía servir cuando se apuntó.",
        },
        {
          forma: "texto",
          texto:
            "Todo esto se resume en una idea que atraviesa el libro: la escritura no es un talento que se tiene o no se tiene, es un hábito de prestar atención. Y prestar atención se puede entrenar aunque uno no tenga ningún don especial.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, el problema es que aunque uno acepte todo lo anterior, se sienta igual delante de la página y sigue sin poder empezar. Porque el borrador puede ser malo y aun así hay que decidir por dónde entrar, y las opciones son infinitas.",
        },
        {
          forma: "texto",
          texto:
            "Y mientras uno decide, dentro de la cabeza hay dos voces hablando a la vez y muy alto.",
        },
        {
          forma: "texto",
          texto:
            "Una dice que esto va a ser una obra maestra y que va a cambiarle la vida.",
        },
        {
          forma: "texto",
          texto:
            "La otra dice que es un fraude, que siempre lo ha sido y que se va a notar.",
        },
        {
          forma: "texto",
          texto:
            "Lamott les puso un nombre a las dos juntas.",
        },
        {
          forma: "texto",
          texto:
            "Las llama una emisora de radio.",
        },
      ],
    },

    {
      titulo: "La emisora que suena dentro",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El capítulo describe una emisora que emite en estéreo dentro de la cabeza de cualquiera que se sienta a escribir, y que ella bautiza con unas siglas impronunciables que en el original son una grosería disimulada. Suena todo el rato y en los dos altavoces a la vez.",
        },
        {
          forma: "texto",
          texto:
            "Por el altavoz izquierdo salen las canciones de grandeza: lo listo que eres, lo que va a decir la gente cuando lea esto, el premio, la entrevista, la cara que van a poner los que no te tomaban en serio, y la vida entera que va a cambiar con este párrafo.",
        },
        {
          forma: "clave",
          rotulo: "Y por el derecho",
          frase: "El repertorio contrario: que no vales, que la frase anterior era mejor, que a tu edad otros ya habían publicado, que se va a notar que no has leído lo suficiente, y una lista detallada de todas las veces que has quedado en ridículo desde los nueve años.",
        },
        {
          forma: "texto",
          texto:
            "Lo que Lamott señala, y es la observación fina del capítulo, es que las dos emisiones son la misma cosa. Las dos hablan de ti y no del texto, y las dos consiguen exactamente el mismo efecto: que no estés mirando lo que estás escribiendo.",
        },
        {
          forma: "texto",
          texto:
            "Y esa es su definición del problema. Escribir bien exige atención puesta fuera —en el personaje, en la escena, en la frase— y esa emisora la devuelve constantemente hacia dentro, hacia la pregunta de qué dice esto sobre mí, que es la pregunta que estropea el trabajo.",
        },
        {
          forma: "arte",
          texto:
            "Su solución no es apagarla, porque no se puede. Es reconocerla, ponerle nombre y bajarle el volumen: darse cuenta de que ha empezado a sonar, decirlo en voz alta si hace falta, y volver a la frase. Es un gesto pequeño y hay que repetirlo cincuenta veces al día.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "El capítulo que va con este es el más valiente del libro y es el de la envidia. Lamott dedica quince páginas a contar, con detalle y sin quedar bien, lo mal que lo ha pasado cuando a amigos suyos escritores les ha ido mejor que a ella.",
        },
        {
          forma: "texto",
          texto:
            "Cuenta el caso de una amiga cuyo libro empezó a venderse muchísimo mientras el suyo no se vendía, y describe sin ahorrarse nada lo que sentía: rabia, deseo de que le fuera mal, incapacidad de alegrarse, y encima vergüenza por sentir todo aquello.",
        },
        {
          forma: "texto",
          texto:
            "Ese capítulo es útil por una razón concreta: nadie lo escribe. Los libros sobre creatividad hablan de disciplina, de inspiración y de constancia, y no hablan de que buena parte del sufrimiento de quien intenta hacer algo viene de mirar lo que consiguen los demás.",
        },
        {
          forma: "texto",
          texto:
            "Su consejo práctico es tan poco elevado que resulta creíble. Dice que hay que dejar de fingir que no se siente, contárselo a alguien de confianza —preferiblemente alguien que se ría—, y limitar el contacto con la persona que lo provoca durante una temporada.",
        },
        {
          forma: "texto",
          texto:
            "Y añade un dato que consuela más que cualquier consejo: que a la escritora que ella envidiaba le estaba pasando algo horrible en su vida privada en aquel mismo momento, y que ella no tenía ni idea. Nunca se envidia una vida entera, se envidia un titular.",
        },
        {
          forma: "texto",
          texto:
            "Hay una variante del problema que Lamott identifica y que hoy es la forma dominante: comparar tu primer borrador con el libro terminado de otro. Es una comparación entre un montón de escombros y un edificio acabado, y siempre se pierde.",
        },
        {
          forma: "texto",
          texto:
            "Lo que se lee de los demás es la versión que pasó por dos años de reescritura, un editor, un corrector y una imprenta. Lo que uno tiene delante es lo que salió esta mañana. Nadie enseña sus escombros, y por eso todo el mundo cree ser el único que los tiene.",
        },
        {
          forma: "texto",
          texto:
            "El otro capítulo que va con este trata de la atención, y contiene la metáfora que mejor describe el proceso. Lamott dice que escribir se parece a mirar cómo se revela una fotografía instantánea de las antiguas, esas que salían de la cámara en blanco.",
        },
        {
          forma: "texto",
          texto:
            "Uno la sostiene entre los dedos y durante un rato no hay nada, solo una superficie gris. Después aparecen unas manchas, después unas formas, y solo al final se ve qué había en la escena, que casi nunca es lo que uno creía haber fotografiado.",
        },
        {
          forma: "arte",
          texto:
            "Su tesis es que escribir funciona igual: uno empieza creyendo que va a contar una cosa y solo descubre de qué iba en realidad cuando ya está escrito. Y que por eso no se puede esperar a tenerlo claro para empezar, porque la claridad es el resultado y no el requisito.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale su consejo sobre la atención, que es el más aprovechable para quien no escribe. Dice que hay que andar por la vida mirando como si uno fuera a tener que describirlo después, y que ese solo cambio de mirada ya modifica cómo se pasan los días.",
        },
        {
          forma: "texto",
          texto:
            "Lo ilustra con sus propios alumnos: al pedirles que describan a un desconocido del autobús, la mitad no es capaz de decir nada porque no ha mirado a nadie en su vida. Y la otra mitad descubre que mirar durante treinta segundos da material para tres páginas.",
        },
        {
          forma: "texto",
          texto:
            "Con la emisora bajada de volumen, la envidia puesta encima de la mesa y los ojos abiertos, queda el problema material: por dónde se empieza a escribir hoy, a las nueve de la mañana, con el documento en blanco delante.",
        },
        {
          forma: "texto",
          texto:
            "Con la emisora bajada de volumen y la envidia puesta encima de la mesa, queda el problema material: por dónde se empieza a escribir hoy.",
        },
        {
          forma: "texto",
          texto:
            "Y para eso Lamott tiene un objeto encima de su escritorio.",
        },
      ],
    },

    {
      titulo: "El marco de un palmo",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La siguiente herramienta del libro es la más citada después del título, y es un objeto físico que tiene encima de la mesa. Un marco de fotos pequeño, de unos dos centímetros y medio de lado, del tamaño de un sello grande.",
        },
        {
          forma: "arte",
          texto:
            "Su función es recordarle todos los días lo único que tiene que escribir hoy: lo que quepa dentro de ese marco. No la novela, ni el capítulo, ni siquiera la escena. Un recuerdo, un gesto, una conversación de dos minutos, una habitación.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Es la misma idea del pájaro, aplicada al trabajo diario. Cuando la tarea es enorme la cabeza se bloquea, y el truco no consiste en darse ánimos sino en reducir el campo de visión hasta que quepa en la cabeza.",
        },
        {
          forma: "texto",
          texto:
            "El ejercicio que propone para arrancar, y que ha acabado en cientos de talleres, es escribir sobre las comidas del colegio. Los recuerdos de la infancia relacionados con la comida, la fiambrera, quién tenía qué, quién cambiaba qué, quién se sentaba solo.",
        },
        {
          forma: "texto",
          texto:
            "Su razón es que ahí está todo lo que hace falta para narrar: la jerarquía social, la vergüenza, el deseo, la envidia y la familia, en un escenario que cualquiera recuerda con detalle sensorial. Y porque nadie se pone solemne escribiendo sobre un bocadillo.",
        },
        {
          forma: "texto",
          texto:
            "Sobre personajes da un consejo que es cierto para algunos escritores y falso para otros, y el libro lo presenta como universal: que hay que dejar que los personajes hagan lo que quieran y que la trama sale de ellos, y que forzarlos los mata.",
        },
        {
          forma: "texto",
          texto:
            "Eso funciona para quien escribe explorando y no funciona para quien escribe planificando, y hay grandes novelas hechas de las dos maneras. Es uno de los sitios donde el libro generaliza su propio método más de lo que debería.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una recomendación práctica que sí vale para todos: conseguir dos o tres lectores de confianza que lean los borradores y digan la verdad, y no enseñárselo a nadie más hasta entonces.",
        },
        {
          forma: "texto",
          texto:
            "Su matiz sobre esos lectores es fino y viene de haberse equivocado. Dice que no sirve cualquiera que te quiera bien: hace falta gente capaz de decirte que un capítulo no funciona sin que se te caiga el mundo, y que se pueda contar con los dedos de una mano.",
        },
        {
          forma: "texto",
          texto:
            "Y advierte de la trampa contraria, que es enseñárselo a demasiada gente. Con cinco opiniones distintas sobre el mismo capítulo, uno acaba escribiendo por comité y el texto pierde lo único que lo hacía suyo, que es la voz.",
        },
        {
          forma: "texto",
          texto:
            "Sobre el diálogo sí da un consejo técnico, de los pocos del libro, y es bueno: leerlo en voz alta. Si al decirlo en alto suena a frase escrita, no vale. La gente real no habla en párrafos ordenados, se interrumpe, no termina las frases y contesta a otra cosa.",
        },
        {
          forma: "texto",
          texto:
            "Su método para conseguirlo es escuchar. Llevar la libreta al autobús, a la sala de espera y a la cola del supermercado, y copiar literalmente lo que dice la gente, incluidas las muletillas. Después se recorta, porque una transcripción literal aburre, y se queda el ritmo.",
        },
        {
          forma: "arte",
          texto:
            "El capítulo más raro y más recordado del libro trata de la intuición y se llama, sin ninguna ironía, el del brócoli. Viene de un chiste de un cómico estadounidense en el que un personaje de dos mil años da su consejo de salud: escucha a tu brócoli.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "El chiste es que el brócoli te dirá cómo hay que comérselo. Y Lamott lo usa en serio: sostiene que cuando uno está atascado en una escena, la respuesta suele estar disponible si se deja de forzar, se pregunta y se espera callado un rato.",
        },
        {
          forma: "texto",
          texto:
            "Dicho así suena a misticismo barato, y ella lo defiende con un argumento práctico. Que la parte de la cabeza que resuelve problemas de narración no funciona bajo presión y a mandato, y que muchas veces la escena se desbloquea en la ducha o paseando.",
        },
        {
          forma: "texto",
          texto:
            "El consejo operativo que saca de ahí es que hay que trabajar todos los días a la misma hora, sin esperar la inspiración, y que a la vez hay que aceptar que la solución a un problema concreto llegará cuando llegue y no cuando la agenda diga.",
        },
        {
          forma: "texto",
          texto:
            "Sobre la documentación tiene una advertencia que a mucha gente le hace falta: que investigar es la forma más elegante de no escribir. Que se puede pasar un año leyendo sobre el siglo diecinueve con la sensación de estar trabajando en la novela sin haber escrito una línea.",
        },
        {
          forma: "texto",
          texto:
            "Su regla es escribir primero con lo que se sabe, dejando huecos marcados donde haga falta un dato, y buscar los datos después. El texto dirá qué hay que investigar; investigar antes produce montañas de material que nunca se usa.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una advertencia legal y moral sobre escribir a partir de gente real, porque Lamott escribe memorias y sabe lo que cuesta. Dice que se puede contar la propia vida y que la propia vida incluye a otros, y que eso tiene consecuencias que hay que asumir antes y no después.",
        },
        {
          forma: "texto",
          texto:
            "Su consejo práctico es de una franqueza brutal: si vas a retratar a alguien reconocible y mal parado, cámbiale todo lo que se pueda cambiar, y si aun así se va a reconocer, decide de antemano si estás dispuesto a perder esa relación, porque probablemente la vas a perder.",
        },
        {
          forma: "texto",
          texto:
            "Con lo cual llegamos a la parte del libro que menos se cita y que probablemente es la más importante.",
        },
        {
          forma: "texto",
          texto:
            "Porque todo lo anterior sirve para terminar algo.",
        },
        {
          forma: "texto",
          texto:
            "Y cuando alguien termina algo, quiere publicarlo.",
        },
        {
          forma: "texto",
          texto:
            "Y cree que ese día va a cambiarle la vida.",
        },
      ],
    },

    {
      titulo: "El día que sale el libro",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Lamott dedica un capítulo a la publicación y lo escribe desde el único sitio desde el que se puede escribir con autoridad sobre esto: había publicado ya varias novelas y un libro de memorias cuando lo escribió, y por tanto sabe exactamente qué se siente.",
        },
        {
          forma: "texto",
          texto:
            "Y lo que dice es que no pasa nada. Que el día que sale el libro uno se levanta siendo la misma persona, con los mismos problemas, la misma cuenta corriente aproximada y las mismas cosas sin resolver, y que la euforia dura entre dos días y dos semanas.",
        },
        {
          forma: "clave",
          rotulo: "Por qué eso importa tanto",
          frase: "Porque casi todo el mundo que quiere escribir no quiere escribir: quiere haber publicado. Quiere el resultado, la validación y el cambio de estatus. Y si ese es el motor, cuando llega el día se descubre que el motor no llevaba a ninguna parte.",
        },
        {
          forma: "texto",
          texto:
            "Su descripción del proceso real es deliberadamente antiépica. Que las reseñas malas duelen mucho más de lo que alegran las buenas. Que la mayoría de los libros venden muy poco y desaparecen de las mesas de novedades en unas semanas.",
        },
        {
          forma: "texto",
          texto:
            "Que los amigos y la familia no lo leen o lo leen buscándose a sí mismos. Que las ventas se consultan de manera obsesiva y que eso es una forma eficaz de amargarse. Y que después hay que volver a sentarse a escribir el siguiente, con la misma página en blanco.",
        },
        {
          forma: "arte",
          texto:
            "No lo cuenta para desanimar sino para desmontar la única motivación que garantiza el fracaso. Su tesis es que si escribir solo tiene sentido cuando alguien te publica, casi todo el tiempo que le dediques será tiempo desgraciado, porque casi todo ese tiempo no habrá nadie mirando.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Su alternativa es lo que da al libro su subtítulo: unas instrucciones sobre escribir y sobre la vida. Sostiene que la razón para escribir es que escribir obliga a mirar de cerca, y que mirar de cerca es una manera de estar vivo que no da ninguna otra actividad.",
        },
        {
          forma: "texto",
          texto:
            "Y añade la segunda razón, que es la que a ella le sostiene: que escribir es dar algo. Que un texto terminado es un regalo que alguien abrirá en su casa, solo, y que esa transacción no necesita ni editorial ni ventas para tener sentido.",
        },
        {
          forma: "texto",
          texto:
            "Es una conclusión bastante menos vendible que la de la mayoría de los libros de este estante, y por eso conviene señalarla. Este libro no promete que vayas a publicar y dice explícitamente que si publicas no vas a ser otra persona.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, dónde falla, que es donde hay que ser justo. Lo primero: no es un manual y quien lo compre como manual se va a quedar sin nada. Aquí no hay estructura, ni construcción de escenas, ni mecánica del diálogo, ni técnicas de revisión.",
        },
        {
          forma: "texto",
          texto:
            "Lo segundo, unido a lo anterior: el libro es excelente para llegar al primer borrador y no ayuda casi nada a terminar un libro largo. Pájaro a pájaro es una técnica contra el pánico, no un método de trabajo, y un proyecto de trescientas páginas necesita las dos cosas.",
        },
        {
          forma: "texto",
          texto:
            "Lo tercero: su mundo es muy estrecho. Habla de literatura y de memorias, desde una posición muy concreta —clase media californiana, con un padre escritor, en los años ochenta y noventa—, y no dice nada de escribir por encargo, con plazos, para un periódico o para vivir.",
        },
        {
          forma: "arte",
          texto:
            "Lo cuarto: hay un sesgo de superviviente que ella misma reconoce a medias. El consejo viene de alguien que publicó, y sobre cómo se publica hoy el libro admite que no tiene ni idea, porque el sector ha cambiado tres veces desde 1994.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Lo quinto: la religión. En el último tercio aparecen la oración y una fe cristiana explícita, sin previo aviso, en un libro que hasta entonces se leía como laico. No es un defecto en sí, y sí lo es no advertirlo, porque a bastantes lectores les rompe el tono.",
        },
        {
          forma: "texto",
          texto:
            "Y lo sexto: el consejo de dejar que los personajes manden se presenta como una verdad general cuando es un método entre otros. Muchos novelistas planifican de arriba abajo y les va estupendamente, y este libro los deja fuera del cuadro.",
        },
        {
          forma: "texto",
          texto:
            "Lo que la gente cree y no es verdad, uno: que enseña a escribir bien. Enseña a escribir mal a propósito, que es distinto y es el requisito previo. La parte de escribir bien viene después y este libro apenas la toca.",
        },
        {
          forma: "texto",
          texto:
            "Dos: que pájaro a pájaro significa dividir la tarea en trozos. Significa dejar de mirar el conjunto porque mirarlo paraliza. Es un remedio contra el bloqueo y no una técnica de planificación, y confundirlo lo vuelve inútil.",
        },
        {
          forma: "texto",
          texto:
            "Tres: que es un libro solo para escritores. La parte del perfeccionismo, la de la envidia y la de la emisora describen a cualquiera que intente hacer algo que le importe delante de otros, y ahí es donde más lectores ha ganado.",
        },
        {
          forma: "texto",
          texto:
            "Y cuatro: que publicar es el objetivo. El libro dice lo contrario en su mejor capítulo, y ese es también el que menos se cita cuando alguien lo recomienda.",
        },
        {
          forma: "texto",
          texto:
            "Si hay que quedarse con una sola cosa, es la que le dijo un padre a un niño de diez años en una mesa de comedor hace sesenta años, y que sirve para un trabajo del colegio y para casi todo lo demás.",
        },
        {
          forma: "texto",
          texto:
            "No tienes que escribir sobre los pájaros.",
        },
        {
          forma: "texto",
          texto:
            "Tienes que escribir sobre este.",
        },
        {
          forma: "texto",
          texto:
            "Y mañana, sobre el siguiente.",
        },
      ],
    },
  ],
};

export const ESPIRITUAL_ARTE: Resumen = {
  id: "espiritual-arte",
  titulo: "De lo espiritual en el arte",
  autor: "Vasili Kandinsky",
  ano: 1911,
  gancho:
    "El libro con el que un pintor se dio permiso para dejar de pintar cosas. Su teoría del color es casi toda falsa y aun así cambió lo que se cuelga en las paredes.",
  porQue:
    "Porque explica de dónde salió el arte abstracto, que es lo que más incomoda al visitante de un museo. Y enseña una manera concreta de mirar un cuadro que no representa nada, que es dejar de preguntar qué es.",
  partes: [
    {
      titulo: "Un cuadro apoyado del revés",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Kandinsky lo contó muchas veces y siempre igual. Volvió a su estudio de Múnich al atardecer, con la cabeza en otra cosa, y al abrir la puerta vio apoyado contra la pared un cuadro de una belleza extraordinaria que ardía de colores y en el que no reconoció absolutamente nada.",
        },
        {
          forma: "texto",
          texto:
            "Se acercó y descubrió dos cosas a la vez: que era un cuadro suyo y que estaba apoyado de lado. Al ponerlo derecho volvieron a aparecer los objetos, y con ellos, escribió, el cuadro dejó de funcionar. Aquella tarde decidió que el asunto no era el asunto.",
        },
        {
          forma: "texto",
          texto:
            "Conviene tomar esa anécdota con la prudencia con que se toma cualquier mito fundacional contado por su propio protagonista años después. Lo que sí está documentado es el efecto: a partir de entonces sus cuadros van perdiendo el objeto hasta quedarse sin él.",
        },
        {
          forma: "texto",
          texto:
            "Quién era. Vasili Kandinsky nació en Moscú en 1866, estudió Derecho y Economía, hizo trabajo de campo etnográfico en el norte de Rusia y llegó a tener una plaza de profesor de Derecho esperándole en Tartu, en la actual Estonia.",
        },
        {
          forma: "texto",
          texto:
            "La rechazó a los treinta años y se fue a Múnich a aprender a pintar. Es decir, empezó tardísimo y desde una carrera respetable, y eso explica bastante del libro: está escrito por alguien acostumbrado a argumentar por escrito y a construir sistemas.",
        },
        {
          forma: "clave",
          rotulo: "Los dos golpes que se le quedaron",
          frase: "En 1896 vio en Moscú un cuadro de una exposición francesa que no supo identificar, y al mirar el catálogo descubrió que era un almiar de Monet. Le desconcertó que el cuadro funcionara sin que él supiera qué era. Y el mismo año oyó Lohengrin de Wagner y vio colores mientras sonaba.",
        },
        {
          forma: "texto",
          texto:
            "Esos dos episodios contienen todo el libro. El primero le enseñó que un cuadro puede producir su efecto sin que el espectador reconozca el motivo. El segundo le sugirió que había una correspondencia entre lo que se oye y lo que se ve, y que esa correspondencia era objetiva.",
        },
        {
          forma: "texto",
          texto:
            "El libro se publicó en Múnich a finales de 1911, con fecha de 1912 en la portada, con el título alemán Über das Geistige in der Kunst. Es corto, unas cien páginas, y estaba escrito desde hacía años sin que ningún editor lo quisiera.",
        },
        {
          forma: "texto",
          texto:
            "Salió a la vez que el grupo que él fundó con Franz Marc, El Jinete Azul, y que su almanaque. El nombre venía de que a los dos les gustaban los jinetes, los caballos y el azul, lo cual da una idea del nivel de sistematicidad que hay que esperar.",
        },
        {
          forma: "texto",
          texto:
            "El momento importa. En 1911 la fotografía llevaba setenta años existiendo y había dejado sin trabajo a la pintura en su función más antigua, que era dejar constancia de cómo era algo o alguien. La pregunta de para qué servía pintar estaba abierta de verdad.",
        },
        {
          forma: "arte",
          texto:
            "Ese vaciado de función es el mismo que analiza Walter Benjamin veinticinco años después en La obra de arte en la época de su reproductibilidad técnica, que está en esta biblioteca. Kandinsky vive el problema; Benjamin lo explica.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "La respuesta que da Kandinsky es que la pintura debe dejar de competir con la cámara y dedicarse a lo que la cámara no puede hacer: producir directamente un estado en quien mira, sin pasar por el reconocimiento de ningún objeto.",
        },
        {
          forma: "texto",
          texto:
            "Y su modelo para eso es la música. La música lleva siglos emocionando sin representar nada: nadie le pide a una sonata que sea la sonata de algo. Kandinsky quiere para la pintura ese mismo estatuto, y a esa idea le dedica el libro entero.",
        },
        {
          forma: "texto",
          texto:
            "La comparación es tan central que llamó a muchos de sus cuadros con nombres musicales: Impresión, Improvisación y Composición, numerados como si fueran opus. Las Composiciones son las que él consideraba mayores y las trabajaba durante meses con bocetos previos.",
        },
        {
          forma: "texto",
          texto:
            "Hay que decir además cómo está escrito, porque avisa: es un texto desordenado, con saltos, con afirmaciones enormes sin argumentar y con una prosa cargada de mayúsculas y de palabras como vibración, alma y espíritu. No es un tratado, es un manifiesto largo.",
        },
        {
          forma: "texto",
          texto:
            "Conviene también situar en qué punto estaba su propia pintura. En 1911 llevaba quince años pintando y había pasado por el impresionismo, por el paisaje ruso de colores fuertes y por unas escenas de jinetes y ciudades medievales que hoy nadie miraría dos veces.",
        },
        {
          forma: "texto",
          texto:
            "El proceso de abstracción se puede seguir cuadro a cuadro y es gradual. Primero el caballo y el jinete se convierten en dos manchas curvas; luego la montaña se queda en una diagonal; luego desaparece el horizonte. En 1913 ya no hay nada que reconocer.",
        },
        {
          forma: "texto",
          texto:
            "Ese detalle importa porque desmiente la versión heroica del salto. No hubo un día en que dejara de pintar cosas: hubo cinco años de un motivo que se va disolviendo, con cuadros intermedios en los que el espectador todavía adivina una torre o una barca.",
        },
        {
          forma: "texto",
          texto:
            "Él lo explicaba con una idea que sigue siendo útil: que el objeto reconocible en un cuadro secuestra la atención. En cuanto uno identifica una manzana, deja de mirar el color y la forma y empieza a pensar en manzanas, que es precisamente lo que él quería impedir.",
        },
        {
          forma: "texto",
          texto:
            "Y añadía un temor que resultó fundado: que sin objeto, el cuadro corre el riesgo de quedarse en un adorno, en una corbata bonita. Escribió que el peligro del arte abstracto era acabar en la ornamentación, y dedicó el resto del libro a intentar evitarlo.",
        },
        {
          forma: "texto",
          texto:
            "Su respuesta a ese peligro es todo el aparato teórico que viene después: si los colores y las formas tienen un significado propio y objetivo, entonces un cuadro sin objeto no es un adorno, es un mensaje. De ahí la urgencia con que defiende su sistema.",
        },
        {
          forma: "texto",
          texto:
            "Su parte más famosa es la que menos aguanta.",
        },
        {
          forma: "texto",
          texto:
            "Su parte más famosa es la que menos aguanta.",
        },
        {
          forma: "texto",
          texto:
            "Y conviene empezar por ella para quitarla de en medio.",
        },
      ],
    },

    {
      titulo: "El amarillo suena a trompeta",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La mitad del libro es un catálogo de los colores en el que cada uno tiene un carácter, un movimiento, una temperatura y un instrumento musical asignado. Está escrito con una seguridad absoluta y sin una sola prueba, y es lo que todo el mundo cita.",
        },
        {
          forma: "texto",
          texto:
            "El amarillo, para él, es el color más terrenal y agresivo. Avanza hacia el espectador, se sale del cuadro, y si se intensifica produce algo parecido a un ruido molesto. Lo llega a comparar con la locura violenta y con el sonido de una trompeta aguda.",
        },
        {
          forma: "texto",
          texto:
            "El azul hace lo contrario: retrocede, se aleja, se abre hacia dentro. Cuanto más oscuro, más profundo y más grave, hasta el azul casi negro que asocia con el duelo. Su instrumento va del violonchelo al contrabajo y, en el extremo, al órgano.",
        },
        {
          forma: "texto",
          texto:
            "El verde, que es la mezcla de los dos, resulta de esa suma inmóvil y satisfecho, y él lo describe con una impaciencia divertida: lo llama el color de la burguesía complacida, y su sonido es el de un violín tocando notas medias y sostenidas.",
        },
        {
          forma: "clave",
          rotulo: "Los dos efectos que distingue",
          frase: "El físico, que es la impresión superficial del ojo y se agota en segundos. Y el psíquico, que es una vibración del alma. Su tesis es que solo el segundo importa y que se puede provocar con precisión, como un músico provoca una emoción con un acorde.",
        },
        {
          forma: "texto",
          texto:
            "El rojo se le complica y ahí se nota que el sistema no cierra. Distingue el rojo saturno, el rojo cinabrio, el rojo claro y el oscuro, y les atribuye caracteres distintos: el brillante suena a tuba y a tambor, y el granate a violonchelo apasionado.",
        },
        {
          forma: "texto",
          texto:
            "Al blanco y al negro les dedica un tratamiento aparte que es probablemente lo mejor del capítulo. El blanco no es ausencia de color sino un silencio lleno de posibilidades, una pausa antes de que empiece la música; el negro es un silencio sin futuro, el final después del acorde.",
        },
        {
          forma: "texto",
          texto:
            "Ahora hay que decir de dónde viene todo esto y qué queda en pie. Lo primero: Kandinsky probablemente tenía sinestesia, una condición neurológica real en la que un estímulo de un sentido provoca de forma automática una sensación en otro.",
        },
        {
          forma: "texto",
          texto:
            "Existe, está bien documentada, afecta a algo así como un dos a cuatro por ciento de la población, y en su forma más común hace que quien la tiene vea colores asociados a letras, números o notas musicales sin poder evitarlo y siempre los mismos.",
        },
        {
          forma: "arte",
          texto:
            "Y aquí está la objeción que hunde el sistema. Las asociaciones sinestésicas son idiosincrásicas: dos personas con sinestesia casi nunca coinciden en de qué color es un do. Son consistentes dentro de una persona y no se comparten entre personas.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Es decir: lo que Kandinsky presenta como una gramática objetiva del color, válida para cualquiera, es con toda probabilidad el mapa privado de su propio cerebro, escrito en imperativo. Su experiencia era real; su universalidad, no.",
        },
        {
          forma: "texto",
          texto:
            "La investigación posterior sobre asociaciones entre color y emoción encuentra un cuadro mixto. Hay regularidades que aparecen en muchas culturas —el rojo se asocia con activación y con excitación, el azul con calma— y hay variación cultural grande en casi todo lo demás.",
        },
        {
          forma: "texto",
          texto:
            "El blanco es el ejemplo estándar: en Europa se asocia con bodas y pureza y en buena parte de Asia oriental con el luto. Un sistema que pretenda ser universal no puede permitirse que su color más neutro signifique lo contrario a mitad de camino.",
        },
        {
          forma: "texto",
          texto:
            "La segunda fuente del libro es más incómoda y explica el título. Kandinsky leyó con devoción a Helena Blavatsky y a Rudolf Steiner, es decir, la teosofía y la antroposofía, dos corrientes esotéricas muy influyentes entre los artistas de aquellos años.",
        },
        {
          forma: "texto",
          texto:
            "De ahí vienen las vibraciones, el alma que resuena, la evolución espiritual de la humanidad y la idea de que hay planos de realidad que la materia oculta. No son metáforas suyas: son vocabulario técnico de una doctrina concreta que él cita por su nombre.",
        },
        {
          forma: "texto",
          texto:
            "Saberlo no invalida el libro y cambia cómo se lee: no es un pintor buscando palabras, es un creyente aplicando una cosmología. Y explica por qué las afirmaciones se hacen sin pruebas, porque en ese marco no hacen falta.",
        },
        {
          forma: "texto",
          texto:
            "Hay que decir en su descargo que la teosofía no era entonces una rareza marginal, sino una corriente enorme entre artistas e intelectuales europeos. Mondrian era teósofo declarado, Scriabin componía con un teclado de luces, y Yeats pertenecía a una orden esotérica.",
        },
        {
          forma: "texto",
          texto:
            "Aquello respondía a una necesidad concreta del momento: la ciencia había desmontado la cosmología religiosa y no había puesto nada en su lugar que sirviera para vivir. La teosofía ofrecía un universo con sentido y con niveles, y muchos artistas se agarraron a ella.",
        },
        {
          forma: "texto",
          texto:
            "Hay además un detalle histórico que lo explica todavía mejor. En 1895 se descubrieron los rayos X, en 1896 la radiactividad y en 1897 el electrón, y de repente resultó que había realidades invisibles atravesando los cuerpos. La palabra vibración estaba en todas partes.",
        },
        {
          forma: "texto",
          texto:
            "Kandinsky cita expresamente ese ambiente y dice que la desintegración del átomo le produjo el mismo efecto que si el mundo entero se hubiera derrumbado. Su vocabulario de ondas y vibraciones espirituales es un préstamo de una física que no entendía y que le impresionó.",
        },
        {
          forma: "texto",
          texto:
            "Queda por decir qué parte del capítulo del color sí es útil, porque hay una. Sus descripciones de cómo un color avanza o retrocede en el plano son observaciones perceptivas correctas: los cálidos y saturados sí parecen acercarse y los fríos alejarse.",
        },
        {
          forma: "texto",
          texto:
            "Eso lo sabe cualquier pintor por oficio y tiene explicación óptica. Lo que no se sostiene es el paso siguiente, que es asignarle a cada uno un carácter moral y un instrumento. La observación es buena; la metafísica que le monta encima, no.",
        },
        {
          forma: "texto",
          texto:
            "Con la teoría del color descartada, queda lo que sí funciona.",
        },
        {
          forma: "texto",
          texto:
            "Y es una idea moral, no una idea técnica.",
        },
      ],
    },

    {
      titulo: "La necesidad interior",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El concepto que sostiene el libro y que ha durado ciento quince años es el principio de la necesidad interior. Dice que una obra solo vale si nace de una exigencia interna del artista, y que cualquier otro motivo produce un cadáver por bien hecho que esté.",
        },
        {
          forma: "texto",
          texto:
            "Los otros motivos los enumera con desprecio: pintar para gustar, pintar para vender, pintar para demostrar destreza, pintar porque es lo que se lleva, y pintar para decorar. Ese último le parece el peor, y lo llama arte que sirve de corbata.",
        },
        {
          forma: "texto",
          texto:
            "Descompone esa necesidad en tres. La primera es la personalidad del artista, lo que solo él tiene. La segunda es el estilo de su época, que le viene dado y del que no puede escapar. Y la tercera es lo puramente artístico, que no depende ni de él ni de su siglo.",
        },
        {
          forma: "clave",
          rotulo: "Por qué esa tercera importa",
          frase: "Es su explicación de por qué una máscara africana o una talla románica siguen funcionando siglos después, cuando ya nadie comparte las creencias que las produjeron. Si solo hubiera personalidad y época, todo el arte antiguo sería ilegible, y no lo es.",
        },
        {
          forma: "texto",
          texto:
            "De ahí saca su criterio para juzgar, que es sencillo y peligroso: una obra es buena si es necesaria y mala si es arbitraria. Y bello, escribe, es lo que brota de la necesidad interior del alma, sin ninguna referencia a la proporción, la destreza ni el gusto.",
        },
        {
          forma: "texto",
          texto:
            "Eso es una demolición de todo el criterio académico de su tiempo, que evaluaba el dibujo, la composición y el acabado. Y es también, hay que decirlo, la puerta por la que ha entrado todo el que quiere justificar cualquier cosa diciendo que le salió de dentro.",
        },
        {
          forma: "texto",
          texto:
            "La otra imagen que aporta es el triángulo espiritual, y es la más citada del libro después de la del color. Imagina la sociedad como un triángulo dividido en secciones horizontales, que avanza lentamente hacia arriba y hacia delante.",
        },
        {
          forma: "texto",
          texto:
            "En la punta hay a veces un solo hombre. Ve lo que los de abajo no ven, y por eso lo que dice les resulta incomprensible o directamente ofensivo. Con el tiempo, el triángulo entero sube y lo que era la punta pasa a ser la sección corriente, y aparece otra punta.",
        },
        {
          forma: "arte",
          texto:
            "Su ejemplo es Beethoven, insultado en vida y luego convertido en el gusto de todo el mundo. La imagen es potente y tiene una trampa que conviene nombrar: convierte la incomprensión en prueba de valor, que es exactamente la coartada de cualquier impostor.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Porque la afirmación es asimétrica. Es cierto que a algunos grandes artistas no se les entendió; no es cierto que a todo el que no se le entiende sea grande. Kandinsky enuncia lo primero y sus lectores han usado durante un siglo lo segundo.",
        },
        {
          forma: "texto",
          texto:
            "Merece la pena comparar esto con Las vidas de Vasari, en esta biblioteca, que en 1550 hacía justo lo contrario: medía a los pintores por su habilidad para imitar la naturaleza y ordenaba la historia como un progreso hacia esa habilidad.",
        },
        {
          forma: "texto",
          texto:
            "Entre los dos libros hay trescientos sesenta años y una inversión completa del criterio: de la destreza como medida a la sinceridad como medida. Casi toda la discusión sobre arte contemporáneo se puede colocar en algún punto entre esos dos.",
        },
        {
          forma: "texto",
          texto:
            "Hay una tercera idea en el libro que se cita poco y que es la más práctica: la distinción entre disonancia y error. Kandinsky sostiene que un acorde que hoy suena a fallo puede ser el acorde central de la música de dentro de treinta años.",
        },
        {
          forma: "texto",
          texto:
            "Lo escribe pensando en su amigo Arnold Schönberg, cuya música atonal escandalizaba entonces, y con el que se carteó durante años. Los dos estaban haciendo lo mismo en dos artes: quitar el centro tonal, quitar el objeto, y ver si la obra se sostenía igual.",
        },
        {
          forma: "texto",
          texto:
            "Esa correspondencia entre los dos es de lo más interesante del periodo, y también acabó mal: se rompió en 1923 por una carta en la que Schönberg le reprochó comentarios antisemitas que le habían llegado de terceros. Nunca volvieron a ser amigos.",
        },
        {
          forma: "texto",
          texto:
            "Ese episodio conviene contarlo entero porque no deja bien a Kandinsky. En 1922 estaba en la Bauhaus y se habló de llamar a Schönberg para dirigir la escuela de música de Weimar; a Schönberg le llegó que Kandinsky había hecho comentarios sobre los judíos.",
        },
        {
          forma: "texto",
          texto:
            "Su respuesta es una carta larga y demoledora en la que le dice que no quiere ser la excepción con la que se tranquiliza la conciencia quien desprecia a los demás judíos. La escribió en 1923, diez años antes de tener que huir de Alemania, y acertó de lleno.",
        },
        {
          forma: "texto",
          texto:
            "Kandinsky contestó negándolo y la relación no se recompuso. Es un recordatorio útil de que un libro sobre la elevación espiritual del artista puede convivir perfectamente con las miserias corrientes de su autor.",
        },
        {
          forma: "texto",
          texto:
            "Volviendo a la teoría, hay un cuarto elemento que se cita poco y que da la medida de sus ambiciones: para él, todo esto era una etapa hacia una obra de arte total, que combinara pintura, música, movimiento y palabra en un mismo acontecimiento.",
        },
        {
          forma: "texto",
          texto:
            "Escribió una pieza escénica con esa intención, El sonido amarillo, con luces de color, figuras que se mueven y sin apenas texto, pensada para producir un efecto directo sin contar ninguna historia. Se publicó en 1912 y no llegó a estrenarse en vida suya.",
        },
        {
          forma: "texto",
          texto:
            "La idea de la obra total venía de Wagner, que es de donde le venía casi todo, y ha tenido una descendencia enorme y bastante inesperada: los espectáculos de luces, las instalaciones inmersivas y buena parte de lo que hoy se llama experiencia audiovisual.",
        },
        {
          forma: "texto",
          texto:
            "Con la teoría expuesta, queda la pregunta histórica.",
        },
        {
          forma: "texto",
          texto:
            "Con la teoría expuesta, queda la pregunta histórica.",
        },
        {
          forma: "texto",
          texto:
            "¿Fue realmente el primero en pintar sin objeto?",
        },
      ],
    },

    {
      titulo: "La mujer que llegó cuatro años antes",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Durante casi todo el siglo veinte, la respuesta de los manuales fue que sí. Kandinsky pintó en 1910 una acuarela sin ningún motivo reconocible, la fechó, la conservó, y esa acuarela se enseñaba como el acta de nacimiento del arte abstracto.",
        },
        {
          forma: "texto",
          texto:
            "El primer problema con esa historia es la fecha. Los historiadores del arte llevan décadas sospechando que la acuarela está antedatada, y el análisis del estilo y de los materiales la sitúa más cerca de 1913, cuando ya había pintado obras claramente abstractas.",
        },
        {
          forma: "texto",
          texto:
            "El motivo del retoque es transparente y bastante humano: para 1913 la abstracción ya la estaba haciendo mucha gente, y ser el primero valía una carrera. Nunca se ha demostrado la falsificación, y la mayoría de los especialistas la da por probable.",
        },
        {
          forma: "texto",
          texto:
            "El segundo problema es mucho mayor y tiene nombre: Hilma af Klint. Pintora sueca nacida en 1862, formada en la Real Academia de Estocolmo, retratista y paisajista de oficio y con una carrera convencional y solvente.",
        },
        {
          forma: "clave",
          rotulo: "Lo que estaba haciendo en 1906",
          frase: "Cuadros enormes, sin ningún objeto, con espirales, círculos concéntricos y formas orgánicas de colores planos. Cuatro años antes de la acuarela de Kandinsky, y en una escala que él no alcanzaría hasta mucho después: algunos miden más de tres metros.",
        },
        {
          forma: "texto",
          texto:
            "La serie principal se llama Los cuadros para el templo y son ciento noventa y tres obras pintadas entre 1906 y 1915. Están hechas, según ella, siguiendo indicaciones recibidas en sesiones espiritistas junto a otras cuatro mujeres que se llamaban a sí mismas Las Cinco.",
        },
        {
          forma: "texto",
          texto:
            "Ese origen es exactamente el mismo que el de Kandinsky, que es lo más interesante de la comparación: los dos vienen de la teosofía, los dos citan a Steiner, y los dos llegan a la abstracción por una vía espiritual y no por una vía formal.",
        },
        {
          forma: "texto",
          texto:
            "Y aquí está el episodio que decide la historia. Af Klint le enseñó su obra a Rudolf Steiner en 1908 y él le dijo que nadie la entendería hasta dentro de cincuenta años. Ella se lo tomó al pie de la letra.",
        },
        {
          forma: "texto",
          texto:
            "Dejó escrito en su testamento que sus cuadros abstractos no debían mostrarse hasta veinte años después de su muerte. Murió en 1944 y su sobrino heredó más de mil doscientas obras que estuvieron en un almacén durante décadas sin que nadie se interesara.",
        },
        {
          forma: "arte",
          texto:
            "El Moderna Museet de Estocolmo rechazó la donación en los años setenta. Su primera exposición internacional relevante fue en Los Ángeles en 1986, y el reconocimiento masivo llegó con una muestra en el Guggenheim de Nueva York en 2018 que batió el récord de visitantes del museo.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Conviene ser preciso con lo que eso significa, porque se cuenta de forma épica y el matiz importa. No prueba que Kandinsky copiara nada: casi con seguridad no supo nunca de ella. Prueba que la abstracción estaba en el aire y que la prioridad es una cuestión de archivo, no de genio.",
        },
        {
          forma: "texto",
          texto:
            "Y hay más candidatos. František Kupka pintaba obras no figurativas en París hacia 1911 y las expuso antes que Kandinsky. Robert y Sonia Delaunay llegaban por otro camino, el del color puro. Y en Rusia, Malévich y Larionov trabajaban en paralelo sin conocerse todos entre sí.",
        },
        {
          forma: "texto",
          texto:
            "La conclusión razonable no es que Kandinsky fuera un impostor. Es que fue el que escribió el libro, y quien escribe el manifiesto se queda con la fundación aunque no haya sido el primero en pintar. La historia del arte premia a quien explica lo que hace.",
        },
        {
          forma: "texto",
          texto:
            "Ese sesgo tiene además un componente que no conviene esquivar. Af Klint era una mujer, pintaba en Suecia, no publicó ninguna teoría y escondió su obra por indicación de un gurú. Cada una de esas cuatro cosas la sacaba del relato, y las cuatro juntas la borraron.",
        },
        {
          forma: "texto",
          texto:
            "Kandinsky era hombre, estaba en Múnich y luego en el Bauhaus, publicaba, daba clases y tenía galerista. La diferencia entre estar en los manuales y no estarlo se explica con eso mucho mejor que con la calidad de los cuadros.",
        },
        {
          forma: "texto",
          texto:
            "Conviene ser justo también con af Klint y no convertirla en lo contrario del mito. Su obra abstracta no salió de un programa estético sino de un encargo que ella creía recibido de entidades espirituales, y a la vez había estudiado botánica, matemáticas y anatomía y dibujaba muy bien.",
        },
        {
          forma: "texto",
          texto:
            "Sus cuadros están llenos de diagramas, letras y esquemas de correspondencias entre colores y conceptos, con un sistema propio: azul para lo femenino, amarillo para lo masculino, rosa para el amor. Es decir, tenía su propia gramática cromática, tan arbitraria como la de él.",
        },
        {
          forma: "texto",
          texto:
            "Esa coincidencia es lo más revelador de todo el asunto. Dos personas que no se conocían, en dos países, sacaron de la misma doctrina esotérica dos sistemas de color incompatibles entre sí, y los dos estaban convencidos de haber encontrado algo objetivo.",
        },
        {
          forma: "texto",
          texto:
            "Hay una tercera figura que también estaba en ello y que suele quedar fuera: Georgiana Houghton, una médium británica que en 1871 expuso en Londres acuarelas de líneas entrelazadas sin ningún motivo reconocible. La crítica la destrozó y ella se arruinó pagando la sala.",
        },
        {
          forma: "texto",
          texto:
            "Cuarenta años antes que Kandinsky, y por el mismo camino: el espiritismo. Que las tres primeras abstracciones documentadas vengan de sesiones mediúmnicas y no de estudios de pintura es un hecho histórico curioso y bastante incómodo para el relato del progreso formal.",
        },
        {
          forma: "texto",
          texto:
            "La explicación probable es sencilla y no tiene nada de sobrenatural. Para pintar sin objeto hacía falta una justificación, y en 1900 la única disponible era que lo invisible existe y que el cuadro lo registra. La justificación estética llegó después, cuando ya había cuadros.",
        },
        {
          forma: "texto",
          texto:
            "Con la prioridad discutida, queda lo que hizo después.",
        },
        {
          forma: "texto",
          texto:
            "Con la prioridad discutida, queda lo que hizo después.",
        },
        {
          forma: "texto",
          texto:
            "Que es donde su teoría se puso seria de verdad.",
        },
      ],
    },

    {
      titulo: "Del Bauhaus a la pared del salón",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En 1922, Walter Gropius lo llamó para dar clase en la Bauhaus de Weimar, y allí Kandinsky pasó once años enseñando teoría de la forma y del color junto a Paul Klee, con quien compartía casa y un desacuerdo cordial sobre casi todo.",
        },
        {
          forma: "texto",
          texto:
            "El libro que salió de esa etapa, Punto y línea sobre el plano, de 1926, es muchísimo más riguroso que el de 1911 y bastante menos leído. Analiza qué hace un punto según dónde esté, qué tensión produce una diagonal y cómo pesa cada zona de un rectángulo.",
        },
        {
          forma: "texto",
          texto:
            "Ahí hay observaciones que sí se sostienen y que cualquier diseñador reconoce: que la parte superior de un formato se percibe como ligera y la inferior como pesada, o que una línea que sube a la derecha se lee distinta de una que baja.",
        },
        {
          forma: "texto",
          texto:
            "En la Bauhaus hizo también un experimento célebre y metodológicamente terrible. Repartió un cuestionario pidiendo que se asignara uno de los tres colores primarios a cada una de tres figuras: triángulo, cuadrado y círculo.",
        },
        {
          forma: "clave",
          rotulo: "El problema de aquel cuestionario",
          frase: "Los resultados le dieron la razón —amarillo para el triángulo, rojo para el cuadrado, azul para el círculo— y no valían nada. Se pasó a alumnos que llevaban meses escuchándole defender exactamente esas correspondencias. Es un examen, no un experimento.",
        },
        {
          forma: "texto",
          texto:
            "Cuando se ha replicado con gente sin formación previa, los resultados son mucho más flojos y varían con la cultura. Queda alguna tendencia débil, sobre todo la del círculo con el azul, y nada parecido a la correspondencia inevitable que él proponía.",
        },
        {
          forma: "texto",
          texto:
            "El final de la Bauhaus fue político. La escuela se mudó a Dessau y luego a Berlín huyendo de los ayuntamientos nazis, y se disolvió en 1933 bajo presión de la Gestapo. Kandinsky, que tenía sesenta y siete años, se marchó a Francia.",
        },
        {
          forma: "texto",
          texto:
            "En 1937, el régimen incluyó obra suya en la exposición de Arte Degenerado de Múnich, montada para ridiculizar el arte moderno colgando los cuadros torcidos y con pintadas al lado. Varias de sus obras fueron confiscadas de museos alemanes y algunas se vendieron o destruyeron.",
        },
        {
          forma: "texto",
          texto:
            "Murió en 1944 en Neuilly-sur-Seine, a las afueras de París, con Francia todavía saliendo de la ocupación. Su última etapa, la parisina, es la de las formas biomórficas, y es la que menos gusta a sus admiradores y la que él consideraba su síntesis.",
        },
        {
          forma: "texto",
          texto:
            "Lo que pasó después con su idea es la mejor ironía posible. La abstracción ganó: se convirtió en la lengua franca del arte del siglo veinte, primero en Nueva York con el expresionismo abstracto y después en todas partes.",
        },
        {
          forma: "arte",
          texto:
            "Y al ganar dejó de ser espiritual. Las formas abstractas acabaron en los logotipos corporativos, en las moquetas de los aeropuertos, en los vestíbulos de hotel y en los cuadros que se venden por metro para decorar salones. Justo lo que él llamaba arte de corbata.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Ese destino lo explica bien Walter Benjamin en La obra de arte en la época de su reproductibilidad técnica, que está en esta biblioteca: cuando una imagen se puede reproducir infinitamente, pierde el aura que la hacía única y pasa a circular como cualquier otra mercancía.",
        },
        {
          forma: "texto",
          texto:
            "Y también conecta con Sobre la fotografía, de Susan Sontag, en el mismo estante, por el otro lado del problema: Kandinsky liberó a la pintura de tener que documentar el mundo precisamente porque la cámara se había quedado con ese trabajo.",
        },
        {
          forma: "texto",
          texto:
            "El balance honrado de este libro es incómodo. Su teoría del color es casi toda falsa. Su fundamento es una doctrina esotérica. Su reclamación de primacía histórica no se sostiene. Y su criterio de la necesidad interior es imposible de comprobar desde fuera.",
        },
        {
          forma: "texto",
          texto:
            "Y aun así importa, por una razón que no tiene que ver con que acertara. Fue el primero en argumentar en serio, por escrito y en público, que un cuadro no tiene por qué ser un cuadro de algo. Dio permiso, y el permiso funcionó aunque la justificación fuera mala.",
        },
        {
          forma: "texto",
          texto:
            "Hay una segunda cosa que le sobrevive y que es más modesta: la idea de que mirar es un trabajo. Todo el libro da por hecho que el espectador tiene que poner algo, y que un cuadro que se entiende de un vistazo probablemente no valía la pena.",
        },
        {
          forma: "texto",
          texto:
            "Eso choca con lo que se hace en los museos, donde se ha medido cuánto tiempo pasa la gente delante de cada obra. Los estudios dan cifras que rondan los veinte o treinta segundos de media, y buena parte de esos segundos se van en leer la cartela y hacer la foto.",
        },
        {
          forma: "texto",
          texto:
            "Contra eso, la instrucción que se saca del libro es concreta y cuesta poco: quedarse delante de un solo cuadro tres o cuatro minutos, sin cartela, y esperar. La mayoría de la gente que lo prueba dice que a partir del minuto empieza a pasar algo distinto.",
        },
        {
          forma: "texto",
          texto:
            "Lo que hay que buscar en ese rato tampoco es misterioso. Por dónde entra el ojo y por dónde sale; qué zona pesa más; si algo avanza y algo retrocede; si el conjunto está quieto o parece que se va a mover. Son preguntas sobre el efecto, no sobre el asunto.",
        },
        {
          forma: "texto",
          texto:
            "Y si al cabo del rato no ocurre nada, la conclusión razonable es que ese cuadro no funciona para uno, y no que uno no lo entiende. Kandinsky, que tanto usó la incomprensión como prueba de valor, habría discutido esto, y en esto se equivocaba él.",
        },
        {
          forma: "texto",
          texto:
            "Queda por último lo único que se puede usar mañana.",
        },
        {
          forma: "texto",
          texto:
            "Queda por último lo único que se puede usar mañana.",
        },
        {
          forma: "texto",
          texto:
            "Y es una instrucción para mirar, no para pintar.",
        },
        {
          forma: "texto",
          texto:
            "Ante un cuadro abstracto, dejar de preguntar qué es y quedarse el rato suficiente para notar qué hace.",
        },
      ],
    },
  ],
};

export const EL_ELEMENTO: Resumen = {
  id: "el-elemento",
  titulo: "El elemento",
  autor: "Ken Robinson",
  ano: 2009,
  gancho:
    "La charla más vista de la historia de TED se apoya en una estadística que la NASA nunca hizo. Y el argumento, curiosamente, aguanta igual sin ella.",
  porQue:
    "Porque es el libro que convenció a media docena de generaciones de que el colegio les había escondido algo. Vale la pena separar lo que Robinson demostró de lo que solo contó bien, porque las dos cosas están mezcladas y la segunda es la que más se repite.",
  partes: [
    {
      titulo: "Una niña que no paraba quieta",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Londres, finales de los años treinta. Una niña de ocho años llamada Gillian Lynne trae del colegio una carta para su madre. Dice que no atiende, que molesta a las compañeras, que entrega los deberes tarde y que no consigue estarse quieta en la silla ni diez minutos seguidos.",
        },
        {
          forma: "texto",
          texto:
            "La madre la lleva a un especialista. El hombre no examina a la niña: se sienta a hablar con la madre durante veinte minutos mientras Gillian espera en una esquina del despacho, con las manos debajo de los muslos para no moverlas, convencida de que la van a mandar a un sitio del que no se vuelve.",
        },
        {
          forma: "texto",
          texto:
            "Al terminar, el médico se acerca a la niña y le dice que necesita hablar a solas con su madre un momento. Sale con ella al pasillo y, al salir, enciende la radio que tenía sobre la mesa. Después le pide a la madre que mire por la rendija de la puerta.",
        },
        {
          forma: "arte",
          texto:
            "Gillian se había levantado y bailaba. El médico observó un rato y dijo la frase por la que este libro existe: su hija no está enferma, señora Lynne, es una bailarina. Llévela a una escuela de danza.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "La madre la llevó. Gillian Lynne entró en la Royal Ballet School, bailó como solista en el Royal Ballet y montó su propia compañía. Décadas después coreografió «Cats» y «El fantasma de la ópera», dos de los musicales más vistos que se han hecho jamás.",
        },
        {
          forma: "texto",
          texto:
            "Murió en 2018, con noventa y dos años. Ese mismo año el New London Theatre pasó a llamarse Gillian Lynne Theatre, el primer teatro del West End con nombre de mujer que no fuera de la familia real. La niña de la carta acabó dando nombre a un edificio de Drury Lane.",
        },
        {
          forma: "texto",
          texto:
            "Conviene decir algo que los resúmenes se saltan, porque cambia el peso de la historia: no es una anécdota que Robinson oyera de tercera mano. Se la contó ella misma, y ella la contó también por su cuenta en sus memorias. Está corroborada por la persona a la que le pasó.",
        },
        {
          forma: "clave",
          rotulo: "La tesis en una escena",
          frase: "Aquella niña no tenía un problema de atención. Tenía un cuerpo que pensaba moviéndose y una silla que se lo impedía seis horas al día.",
        },
        {
          forma: "texto",
          texto:
            "Robinson remata la historia con una frase que se ha repetido en cien mil presentaciones: hoy probablemente le habrían diagnosticado un trastorno por déficit de atención y le habrían dado una pastilla para que se estuviera quieta. Volveremos a esa frase, porque es la más discutible del libro.",
        },
        {
          forma: "texto",
          texto:
            "De momento quedémonos con lo que la escena hace bien, que es mucho. Instala la idea entera sin definirla: hay capacidades que un aula no puede ver porque no las mide, y que desde dentro del aula parecen exactamente lo mismo que un defecto.",
        },
        {
          forma: "texto",
          texto:
            "El libro está construido así de principio a fin. Robinson no argumenta: entrevista. Habló con bailarines, físicos, dibujantes, empresarios, futbolistas y músicos, y les preguntó cuándo supieron lo que se les daba bien y cuánto tardó el sistema en darse cuenta.",
        },
        {
          forma: "texto",
          texto:
            "A ese punto de encuentro entre lo que se te da bien y lo que te gusta hacer lo llamó el elemento, tomando prestada la expresión inglesa de estar en tu elemento. No es una metáfora original y él no finge que lo sea; lo que hace es convertirla en una pregunta que se puede contestar.",
        },
        {
          forma: "texto",
          texto:
            "Aquí ya conviene precisar algo, porque es donde el libro se malinterpreta más. Robinson pone cuatro condiciones, no dos: aptitud, pasión, actitud y oportunidad. Las dos últimas son las que desaparecen en cada resumen, y son justamente las que impiden que esto sea un horóscopo.",
        },
        {
          forma: "texto",
          texto:
            "La oportunidad, en particular, es la que salva el libro de ser un cuento. Gillian Lynne encontró su elemento porque su madre tenía dinero para pagar a un especialista privado, tiempo para llevarla y un médico que en 1937 tuvo una idea rarísima. Tres cosas que no dependían de ella.",
        },
        {
          forma: "arte",
          texto:
            "El elemento no es la vocación de las películas, esa cosa que se te aparece de golpe. Robinson lo describe como un reconocimiento: la sensación de que el tiempo se comporta distinto cuando haces eso, y de que después estás cansado pero no vacío.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Eso que describe tiene nombre técnico y está en esta biblioteca: es el flujo de Mihály Csíkszentmihályi. Robinson lo cita, y hace bien. Pero la diferencia entre los dos libros es la diferencia entre dos oficios, y merece la pena verla.",
        },
        {
          forma: "texto",
          texto:
            "Csíkszentmihályi midió aquello durante décadas con buscapersonas: les pitaba a miles de personas a horas aleatorias y les hacía anotar qué estaban haciendo y cómo se sentían. Robinson reúne entrevistas con gente que ya triunfó. Es el mismo fenómeno visto desde dos mundos distintos.",
        },
        {
          forma: "texto",
          texto:
            "El libro lo escribió a cuatro manos con Lou Aronica, un editor y escritor profesional de los que dan forma a los libros de otros. Eso explica la textura: capítulos cortos, una historia cada tres páginas, ninguna nota al pie que interrumpa. Es un libro diseñado para no soltarse.",
        },
        {
          forma: "texto",
          texto:
            "También explica su punto débil estructural. Cuando el material son historias de gente que ya lo consiguió, el libro no puede contar cuántos hicieron lo mismo y no lo consiguieron. No hay denominador en ninguna página, y sin denominador no hay proporción.",
        },
        {
          forma: "texto",
          texto:
            "Ese problema tiene nombre —sesgo del superviviente— y aparece en otros libros de esta biblioteca, sobre todo cuando alguien deduce una regla de una lista de ganadores. Aquí no invalida la tesis, pero sí desmiente la impresión que deja: la de que esto le pasa a cualquiera que se atreva.",
        },
        {
          forma: "texto",
          texto:
            "Dicho lo cual, hay una historia en el libro que sí tiene un denominador incómodo, y es su propia biografía. Robinson iba a ser el chico al que el sistema archiva, y no lo fue. Esa parte la contamos en el capítulo siguiente, porque no es una anécdota: es el argumento.",
        },
        {
          forma: "texto",
          texto:
            "El médico no hizo nada extraordinario.",
        },
        {
          forma: "texto",
          texto:
            "Encendió una radio y miró.",
        },
        {
          forma: "texto",
          texto:
            "Ese es el libro entero, y también su límite: hace falta que alguien mire.",
        },
      ],
    },
    {
      titulo: "Diecinueve minutos en Monterrey",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Febrero de 2006, Monterrey, California. Un hombre de cincuenta y cinco años sube a un escenario pequeño con una audiencia de mil personas y una charla de diecinueve minutos sin una sola diapositiva. Se apoya en el atril porque cojea. Se llama Ken Robinson.",
        },
        {
          forma: "texto",
          texto:
            "El título es una pregunta: ¿matan las escuelas la creatividad? Aquel vídeo fue uno de los primeros seis que TED colgó gratis en internet en junio de 2006, cuando nadie sabía todavía si eso tenía sentido. Sumando plataformas lleva más de setenta millones de reproducciones.",
        },
        {
          forma: "texto",
          texto:
            "La charla funciona porque es un monólogo cómico con una tesis dentro. Cuenta lo de la niña de seis años que dibuja concentradísima; la maestra le pregunta qué dibuja y ella contesta que a Dios. La maestra dice que nadie sabe cómo es Dios. Y la niña, sin levantar la vista: lo sabrán en un minuto.",
        },
        {
          forma: "arte",
          texto:
            "Y remata con la idea que resume su carrera: los niños no tienen miedo a equivocarse, y eso no es lo mismo que ser creativo, pero si no estás dispuesto a equivocarte nunca se te ocurrirá nada original. Nosotros no perdemos esa capacidad: la desaprendemos, y nos educan para desaprenderla.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "El otro golpe de la charla es la jerarquía de asignaturas. Robinson observa que en todos los sistemas educativos del planeta el orden es el mismo: matemáticas y lenguas arriba, humanidades en medio, arte abajo. Y dentro del arte, música y plástica por encima de teatro y danza.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale su frase más citada: no hay ningún sistema educativo que enseñe danza todos los días como enseña matemáticas todos los días, y no hay ninguna razón para eso. Su explicación es que el sistema entero está diseñado para producir profesores de universidad.",
        },
        {
          forma: "texto",
          texto:
            "Ahora la biografía, que importa más de lo que parece. Robinson nació en Liverpool en 1950, en una familia obrera de siete hermanos. A los cuatro años contrajo la polio durante la epidemia de los cincuenta; su hermano la pasó la misma semana y se recuperó del todo. Él no.",
        },
        {
          forma: "texto",
          texto:
            "Lo mandaron a un colegio para niños con discapacidad, que en la Inglaterra de los años cincuenta era una vía muerta. Salió de ahí porque aprobó el examen selectivo que había entonces a los once años y entró en un instituto que enseñaba latín, el Liverpool Collegiate.",
        },
        {
          forma: "clave",
          rotulo: "Por qué le creemos",
          frase: "El hombre que dice que el sistema no sabe reconocer un talento fue clasificado a los cuatro años como un niño que no iba a llegar a nada. Cuarenta y nueve años después lo nombraron caballero.",
        },
        {
          forma: "texto",
          texto:
            "Se licenció, hizo el doctorado en Londres sobre teatro en la educación y acabó de catedrático de educación artística en la Universidad de Warwick. No era un divulgador que opinaba sobre colegios desde fuera: llevaba veinte años dentro del asunto cuando salió a un escenario.",
        },
        {
          forma: "texto",
          texto:
            "Y en 1998 hizo lo que casi ningún autor de libros de este tipo ha hecho: presidir un comité oficial. El Gobierno británico le encargó una comisión nacional sobre creatividad y educación, cuyo informe se publicó en 1999 con el título «All Our Futures».",
        },
        {
          forma: "texto",
          texto:
            "Ese informe contiene la definición de creatividad más útil de toda su obra, y no está en el libro superventas: actividad imaginativa orientada a producir resultados que sean a la vez originales y valiosos. Las dos condiciones, y la segunda es la que casi nadie exige.",
        },
        {
          forma: "texto",
          texto:
            "Merece la pena detenerse en eso. Con esa definición, tener ideas raras no es ser creativo. Hace falta que alguien distinto de ti reconozca que la cosa vale para algo. Es una definición exigente, comprobable y bastante menos halagadora que la que se le atribuye desde los escenarios.",
        },
        {
          forma: "texto",
          texto:
            "El destino del informe es la parte amarga de la historia. Lo recibieron bien, lo elogiaron y no se aplicó casi nada. El sistema británico fue en la dirección contraria durante la década siguiente: más exámenes nacionales, tablas de resultados por centro y horas fijas de lectura y cálculo.",
        },
        {
          forma: "texto",
          texto:
            "Lo nombraron caballero en 2003 por servicios a las artes. Y en 2006, ya sin cargo público, subió al escenario de TED. Hay una lectura razonable de su carrera: cuando la vía institucional se agotó, se pasó al escenario, que resultó ser cien mil veces más eficaz para llegar a la gente y bastante menos para cambiar una ley.",
        },
        {
          forma: "arte",
          texto:
            "En 2010 vino la segunda pieza, la charla animada a mano sobre los paradigmas de la educación, donde suelta la imagen que más daño ha hecho a la discusión seria: educamos a los niños por lotes, agrupados por fecha de fabricación, como si fueran un producto industrial.",
          arte: "mapa",
        },
        {
          forma: "texto",
          texto:
            "El libro llegó en 2009, tres años después de la charla, y aquí conviene ser preciso sobre qué es. No es la charla ampliada con datos. Es la charla ampliada con más historias. Quien lo abra buscando el aparato de pruebas detrás del discurso se va a llevar una decepción.",
        },
        {
          forma: "texto",
          texto:
            "Escribió luego «Escuelas creativas» en 2015, que sí baja al detalle de qué hacen los centros que lo intentan, con casos concretos y con presupuestos. Es un libro peor de leer y bastante más útil, y es el que casi nadie de los que citan a Robinson ha abierto.",
        },
        {
          forma: "texto",
          texto:
            "Murió en agosto de 2020, a los setenta años, de cáncer. Para entonces sus charlas se habían convertido en el argumento de cabecera de cualquiera que quisiera decir algo crítico sobre la escuela, con independencia de lo que ese alguien propusiera después.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí empieza el problema del que nos ocupamos en el capítulo siguiente. Un argumento que se repite setenta millones de veces deja de comprobarse. Nadie va a la fuente de una cifra que ha oído tantas veces, y menos si la cifra le gusta.",
        },
        {
          forma: "texto",
          texto:
            "Porque en la charla, entre dos chistes buenos, Robinson da un dato. Y ese dato lleva casi veinte años circulando por el mundo con el sello de una agencia espacial que no tuvo nada que ver.",
        },
        {
          forma: "texto",
          texto:
            "Diecinueve minutos.",
        },
        {
          forma: "texto",
          texto:
            "Ni una diapositiva, ni una cita a pie de página.",
        },
        {
          forma: "texto",
          texto:
            "La charla más vista del mundo es también la menos verificada.",
        },
      ],
    },
    {
      titulo: "El test que la NASA nunca hizo",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El dato es este, y probablemente lo has oído: el noventa y ocho por ciento de los niños de cinco años puntúa a nivel de genio en creatividad. A los diez, el treinta por ciento. A los quince, el doce. Y entre los adultos, el dos por ciento.",
        },
        {
          forma: "texto",
          texto:
            "Es una cifra perfecta. Tiene una curva descendente, tiene una edad de oro perdida y tiene un culpable implícito que está entre los cinco y los quince años, que es exactamente el tramo en el que uno va al colegio. No hace falta acusar a nadie: los números acusan solos.",
        },
        {
          forma: "texto",
          texto:
            "Vamos a la fuente, que es lo que casi nadie hace. Los números vienen de George Land y Beth Jarman, y aparecieron en 1992 en un libro comercial titulado «Breakpoint and Beyond». Land los contó también él mismo, años después, en una charla de la red local de TED en Tucson.",
        },
        {
          forma: "arte",
          texto:
            "Land había desarrollado un test de pensamiento divergente para la NASA, que quería una herramienta para elegir ingenieros y científicos con más capacidad de generar soluciones nuevas. Eso es cierto y está documentado. Y es todo lo que la NASA tiene que ver con esta historia.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Lo que hizo después fue por su cuenta: aplicó ese mismo test a mil seiscientos niños de tres a cinco años y volvió a pasárselo al mismo grupo a los diez y a los quince. De ahí salen los porcentajes. La agencia espacial no encargó ese estudio, no lo financió y no lo avaló.",
        },
        {
          forma: "texto",
          texto:
            "La diferencia entre «un test que la NASA encargó» y «un estudio de la NASA» parece de matiz y no lo es. Es la diferencia entre usar un martillo de una marca y decir que la marca firma tu casa. Casi todas las veces que se cita este dato, se cita mal.",
        },
        {
          forma: "texto",
          texto:
            "El segundo problema es más serio: ese estudio longitudinal nunca se publicó en una revista con revisión por pares. No hay artículo que consultar, ni método detallado, ni datos que otro equipo pueda volver a analizar. Hay un libro de divulgación y una charla contándolo.",
        },
        {
          forma: "texto",
          texto:
            "El tercero está en la palabra genio. No es un rango establecido por nadie más: es un umbral que el propio Land definió para su prueba. Decir que un niño puntúa a nivel de genio significa, exactamente, que pasó de una raya que puso quien diseñó la raya.",
        },
        {
          forma: "clave",
          rotulo: "Qué mide en realidad",
          frase: "El test cuenta cuántas ideas distintas se te ocurren. Un niño de cinco años produce muchísimas porque no tiene filtro. Perder el filtro no es lo mismo que ganar creatividad.",
        },
        {
          forma: "texto",
          texto:
            "Ese es el punto que hunde la interpretación popular. El pensamiento divergente es una parte de la creatividad, no la creatividad. Producir cincuenta usos para un clip es un talento real, pero elegir el que sirve y llevarlo a cabo es la otra mitad, y esa mitad mejora con la edad.",
        },
        {
          forma: "texto",
          texto:
            "De hecho, con la definición del propio Robinson —original y valioso— el niño de cinco años suspende. Genera lo original a espuertas y no puede evaluar lo valioso, porque para eso hace falta conocer el campo. Su cifra estrella contradice su definición buena.",
        },
        {
          forma: "texto",
          texto:
            "Ahora la parte honrada en la otra dirección, porque hay pruebas serias que apuntan hacia donde él apuntaba. Existen los tests de Torrance, que sí llevan sesenta años en la literatura académica y sí tienen datos normalizados de cientos de miles de personas.",
        },
        {
          forma: "texto",
          texto:
            "Kyung Hee Kim analizó en 2011 alrededor de trescientas mil puntuaciones de esos tests desde 1966 y publicó el resultado en una revista con revisión por pares. Las puntuaciones de creatividad subieron hasta 1990 y desde entonces bajan, y bajan más en los niños pequeños que en los mayores.",
        },
        {
          forma: "texto",
          texto:
            "Fíjate en que ese hallazgo no es el de Land, aunque se citen juntos. Kim no dice que uno se vuelva menos creativo al crecer: dice que los niños de ahora puntúan peor que los niños de hace treinta años. Es un declive histórico, no un declive biográfico. Son dos afirmaciones distintas.",
        },
        {
          forma: "texto",
          texto:
            "Y tiene sus propias reservas. Las causas del descenso están sin establecer, y las candidatas —más pantallas, más exámenes, menos juego libre— son hipótesis razonables que nadie ha demostrado. Además la relación entre puntuar alto en esos tests y crear algo de verdad es moderada, no fuerte.",
        },
        {
          forma: "texto",
          texto:
            "Aunque hay un dato a favor de los tests que suele omitirse. Torrance siguió a un grupo de escolares desde 1958 durante cincuenta años, y en el seguimiento las puntuaciones creativas de la infancia predecían los logros creativos adultos mejor que el cociente intelectual. No es poca cosa.",
        },
        {
          forma: "texto",
          texto:
            "Así que el balance queda así: la cifra famosa del noventa y ocho por ciento no es fiable, y aun así existen pruebas revisadas de que la creatividad medible ha caído en las últimas tres décadas. Robinson tenía razón con la munición equivocada, que es la peor manera de tenerla.",
        },
        {
          forma: "texto",
          texto:
            "Es la peor porque desarma. Cualquiera que quiera desmontar su argumento no tiene que discutir con la escuela: le basta con tirar del hilo de la NASA, enseñar que no hay estudio, y todo lo demás queda contaminado por asociación aunque lo demás sea cierto.",
        },
        {
          forma: "texto",
          texto:
            "Aquí esta biblioteca tiene el manual del caso: «Factfulness», de Hans Rosling. Su método entero consiste en ir a mirar el número antes de repetirlo, sobre todo cuando el número confirma lo que ya creías. Es exactamente el paso que se saltaron setenta millones de espectadores.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una ironía que conviene dejar por escrito. El hombre que dedicó su vida a decir que medimos a los niños con la vara equivocada se hizo famoso citando una medición. Cuando la cifra viene a favor, la desconfianza hacia las cifras se apaga sola.",
        },
        {
          forma: "texto",
          texto:
            "Nada de esto es una acusación de mala fe. Robinson no inventó el dato: se lo encontró, le encajaba y lo contó, que es lo que hacemos todos. Lo que enseña el episodio no es sobre él, es sobre lo que le pasa a un dato bonito cuando entra en circulación.",
        },
        {
          forma: "texto",
          texto:
            "Un dato bueno se comprueba una vez.",
        },
        {
          forma: "texto",
          texto:
            "Un dato bonito no se comprueba nunca.",
        },
        {
          forma: "texto",
          texto:
            "Y este llevaba encima el logotipo de una agencia espacial que no lo había firmado.",
        },
      ],
    },
    {
      titulo: "La escuela que dicen que es una fábrica",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La imagen más eficaz de Robinson es la de la fábrica. Dice que los colegios se diseñaron a imagen del industrialismo: timbres que suenan como en una planta de montaje, instalaciones separadas, asignaturas separadas, y niños agrupados por fecha de fabricación.",
        },
        {
          forma: "texto",
          texto:
            "Es una frase excelente. Explica en doce segundos por qué el colegio se parece tan poco a cualquier otro sitio donde haya estado un adulto, y le da al oyente algo que casi ningún argumento educativo ofrece: un culpable histórico con nombre.",
        },
        {
          forma: "texto",
          texto:
            "El problema es que la historia de la educación no la respalda tal cual. Agrupar a los alumnos por edad no lo inventó ninguna fábrica: llegó a Estados Unidos en 1848, con la Quincy Grammar School de Boston, copiado del sistema prusiano por Horace Mann.",
        },
        {
          forma: "arte",
          texto:
            "Y el sistema prusiano es anterior a la producción industrial en serie. Arranca en la segunda mitad del siglo dieciocho y su objetivo declarado no era fabricar obreros, sino ciudadanos leales, alfabetizados y con una religión y una lengua comunes. La fábrica todavía no existía.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Hay una parte real, y es más tardía y más estrecha. A principios del siglo veinte, la administración escolar estadounidense sí se dejó invadir por los métodos de eficiencia industrial: medir costes por alumno, cronometrar tareas, hablar de rendimiento. Raymond Callahan lo documentó en 1962.",
        },
        {
          forma: "texto",
          texto:
            "Así que la versión precisa sería: la gestión de las escuelas se contagió del taylorismo durante unas décadas, y la estructura por edades venía de antes y de otro sitio. Dicho así ya no cabe en un vídeo animado, y por eso circula la versión corta.",
        },
        {
          forma: "texto",
          texto:
            "Esto importa porque cambia lo que hay que arreglar. Si el aula por edades la puso la industria, se quita quitando la industria. Si la puso un Estado del siglo dieciocho que quería súbditos alfabetizados, entonces hay que discutir para qué sirve alfabetizar a todo el mundo a la vez, que es más incómodo.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un segundo problema en el discurso de Robinson que es más grave que el de la fábrica, porque no es una simplificación histórica sino una afirmación empírica falsa: la de los estilos de aprendizaje.",
        },
        {
          forma: "clave",
          rotulo: "El error más repetido",
          frase: "La idea de que cada alumno aprende mejor si le enseñan en su estilo —visual, auditivo, cinestésico— se ha comprobado, y no funciona. Enseñar bien funciona igual con todos.",
        },
        {
          forma: "texto",
          texto:
            "La revisión de referencia es de 2008, firmada por Pashler, McDaniel, Rohrer y Bjork. Buscaron estudios que hicieran la prueba correcta: enseñar lo mismo a los mismos alumnos en su estilo y fuera de él, y comparar. Encontraron poquísimos, y los que había no mostraban ninguna ventaja.",
        },
        {
          forma: "texto",
          texto:
            "Lo llamativo es cuánta gente lo cree. Las encuestas a docentes dan porcentajes por encima del noventa por ciento en varios países. Es probablemente el mito más resistente de la educación, y Robinson lo dio por bueno en sus charlas y en sus libros sin señalarlo como discutido.",
        },
        {
          forma: "texto",
          texto:
            "En la misma familia está el hemisferio izquierdo y el derecho, que él usa con soltura para hablar de gente analítica y gente creativa. En 2013 un equipo analizó las conexiones cerebrales de más de mil personas y no encontró ni rastro de individuos dominados por un hemisferio.",
        },
        {
          forma: "texto",
          texto:
            "Existe la lateralización, claro: el lenguaje suele procesarse más en el izquierdo. Pero de ahí a que haya personas de hemisferio derecho hay el mismo salto que de que el hígado esté a la derecha a que existan personas hepáticas. La metáfora se independizó de la anatomía hace décadas.",
        },
        {
          forma: "texto",
          texto:
            "Y llegamos al asunto delicado: la frase sobre Gillian Lynne y las pastillas. Robinson dice en el escenario que el trastorno por déficit de atención se está diagnosticando como una epidemia y que se medica a los niños con la misma alegría con la que antes se quitaban las amígdalas.",
        },
        {
          forma: "texto",
          texto:
            "Hay que decir las dos mitades. La primera es que ese trastorno es de las categorías mejor replicadas de la psiquiatría infantil, con una heredabilidad estimada en torno al setenta u ochenta por ciento en estudios de gemelos, y con ensayos que muestran beneficios claros del tratamiento a corto plazo.",
        },
        {
          forma: "texto",
          texto:
            "El ensayo de referencia es el estudio multimodal de 1999, con casi seiscientos niños seguidos catorce meses: el tratamiento farmacológico bien ajustado superó al conductual solo. Sostener que ahí no hay nada es tan poco defendible como sostener que ahí no hay ningún exceso.",
        },
        {
          forma: "texto",
          texto:
            "Y ahora la segunda mitad, que le da la razón a Robinson por un camino que él nunca usó. Es el efecto de la edad relativa, y está documentado con muestras enormes en varios países. Consiste en algo tan tonto como esto: importa el mes en que naciste.",
        },
        {
          forma: "texto",
          texto:
            "En la Columbia Británica se siguió a casi un millón de escolares y los niños nacidos en diciembre, los más pequeños de su clase, tenían alrededor de un treinta por ciento más de probabilidad de recibir el diagnóstico que sus compañeros nacidos en enero.",
        },
        {
          forma: "texto",
          texto:
            "En Estados Unidos se replicó en 2018 con cuatrocientos mil niños: en los estados con fecha de corte el uno de septiembre, los nacidos en agosto tenían más de un treinta por ciento más de diagnósticos que los nacidos en septiembre. Once meses de diferencia de edad, un año de diferencia de expectativa.",
        },
        {
          forma: "texto",
          texto:
            "Eso es exactamente lo que Robinson intuía: una parte de lo que se está diagnosticando es inmadurez relativa respecto a los compañeros de aula, causada por dónde el sistema puso la raya del calendario. Tenía razón, y tenía las cifras a mano, y contó un chiste en vez de darlas.",
        },
        {
          forma: "texto",
          texto:
            "Ese es el patrón del libro entero, y por eso este resumen insiste. No es que Robinson se equivoque en el fondo. Es que elige sistemáticamente la versión aplaudible del argumento sobre la versión comprobable, y la aplaudible es la que se puede desmontar en un tuit.",
        },
        {
          forma: "texto",
          texto:
            "La escuela tiene mucho de lo que responder.",
        },
        {
          forma: "texto",
          texto:
            "Pero no la diseñó ninguna fábrica.",
        },
        {
          forma: "texto",
          texto:
            "Y el niño de agosto no necesita una pastilla: necesita haber nacido en septiembre.",
        },
      ],
    },
    {
      titulo: "Lo que aguanta cuando le quitas las cifras",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Quitémosle al libro todo lo que no se sostiene: el noventa y ocho por ciento, la fábrica prusiana, los estilos de aprendizaje, los hemisferios y el chiste de las amígdalas. Es una amputación considerable. La pregunta que importa es qué queda en pie después.",
        },
        {
          forma: "texto",
          texto:
            "Queda esto, y no es poco. Cualquier currículo escolar mide una franja estrecha de capacidades humanas, esa franja se eligió por razones históricas y no por razones de importancia, y a quien tiene su talento fuera de la franja el sistema no le dice que no encaja: le dice que no vale.",
        },
        {
          forma: "texto",
          texto:
            "Esa afirmación no necesita ninguna estadística. Se comprueba mirando un horario de secundaria y contando las horas. Y la consecuencia tampoco: hay adultos convencidos de que no se les da bien nada porque lo único que se les midió fueron ocho asignaturas durante doce años.",
        },
        {
          forma: "arte",
          texto:
            "Robinson cuenta que por el Liverpool Institute pasaron Paul McCartney y George Harrison, y que en todos aquellos años nadie del centro pensó que ninguno de los dos tuviera talento musical. El colegio tuvo a media banda dentro y no vio nada.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Ahora la objeción seria, que es de la casa. Su propio título es un problema: el elemento se encuentra, como si estuviera puesto en algún sitio esperando. Y hay investigación que dice que creer eso es contraproducente.",
        },
        {
          forma: "texto",
          texto:
            "En 2018, un equipo en el que estaba Carol Dweck comparó a las personas que creen que los intereses se descubren con las que creen que los intereses se desarrollan. Los primeros abandonan antes cuando la materia se pone difícil, porque interpretan la dificultad como prueba de que aquello no era lo suyo.",
        },
        {
          forma: "clave",
          rotulo: "La corrección que más duele",
          frase: "Buscar tu pasión te hace frágil ante la primera semana aburrida. Construirla te hace capaz de aguantarla. La diferencia no es de actitud: se mide en cuánta gente lo deja.",
        },
        {
          forma: "texto",
          texto:
            "Es una objeción que vale la pena señalar porque viene de dentro de esta biblioteca. «Mindset», de la propia Dweck, está en Psicología, y su tesis choca de frente con la de Robinson en un punto concreto: si tu talento es algo que tienes y hay que localizar, ya has aceptado que es fijo.",
        },
        {
          forma: "texto",
          texto:
            "Robinson tiene defensa, y es honesta. Su tercera condición es la actitud, y dedica un capítulo entero a la disciplina y al trabajo largo. Pero el título manda sobre el capítulo, y lo que la gente se lleva del libro es la palabra encontrar, no la palabra construir.",
        },
        {
          forma: "texto",
          texto:
            "La segunda objeción viene de otro libro de la casa, y es más incómoda. «Una educación», de Tara Westover: una niña sin escolarizar en las montañas de Idaho, con un padre que consideraba el colegio un instrumento de control, que acabó doctorándose en Cambridge.",
        },
        {
          forma: "texto",
          texto:
            "Lo que le abrió el mundo a Westover fue exactamente el currículo estrecho y estandarizado: aprender álgebra por su cuenta para aprobar un examen normalizado. La escuela convencional no fue el enemigo de su potencial, fue el único vehículo que había. Robinson no tiene mucho que decirle a ese caso.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una tercera, la más práctica de las tres. El libro se lee mayoritariamente en países donde la escuela funciona razonablemente. Para la mayor parte del planeta, el problema no es que el colegio no vea tu talento: es que no hay colegio, o que hay que trabajar en vez de ir.",
        },
        {
          forma: "texto",
          texto:
            "Dicho todo eso, hay algo que Robinson hizo y que ninguno de sus críticos hizo: convertir una discusión de facultad de pedagogía en una conversación que tuvo tu tío en una comida familiar. Eso también es un logro, y bastante más raro que tener razón.",
        },
        {
          forma: "texto",
          texto:
            "También conviene decir lo que nunca dijo, porque en internet circula un Robinson mucho más radical que el real. No pidió abolir la escuela. No dijo que las matemáticas no importaran. No dijo que hubiera que bajar el nivel ni que los exámenes debieran desaparecer.",
        },
        {
          forma: "texto",
          texto:
            "Lo que dijo fue que la jerarquía de asignaturas es arbitraria, que la conformidad es un objetivo pobre y que un sistema que produce una sola forma de éxito va a fabricar mucha gente convencida de haber fracasado. Ninguna de las tres cosas exige quemar nada.",
        },
        {
          forma: "texto",
          texto:
            "Y en «Escuelas creativas», su libro tardío, la propuesta se concreta bastante: menos horas de examen estandarizado, más proyectos largos, evaluación por trabajo acumulado, y dar a las escuelas margen para decidir. Se puede estar en contra, pero ya no es un eslogan.",
        },
        {
          forma: "texto",
          texto:
            "Si alguien quiere quedarse con una sola idea del libro, propongo esta, que además es comprobable esta semana. Pregúntate qué hacías a los once años que nadie te mandó hacer, y cuánto de eso ha sobrevivido. La respuesta suele ser corta y suele doler un poco.",
        },
        {
          forma: "texto",
          texto:
            "Y si alguien quiere usarlo con un hijo, la versión útil no es buscarle el elemento. Es la del médico de Londres: apagar la vigilancia un rato, encender la radio y mirar qué hace cuando cree que nadie le está evaluando. Eso no cuesta dinero ni requiere ninguna teoría.",
        },
        {
          forma: "texto",
          texto:
            "Robinson pasó veinte años dentro del sistema intentando cambiarlo con informes, y catorce años fuera cambiándolo con chistes. Consiguió infinitamente más público con lo segundo y prácticamente ninguna reforma con lo primero, y las dos cosas son la misma persona diciendo lo mismo.",
        },
        {
          forma: "texto",
          texto:
            "Ese contraste es la lección que el libro no sabe que da. Un argumento correcto y aburrido no cambia nada, y un argumento apasionante con una cifra floja cambia la conversación pero no el sistema. Robinson probó las dos rutas y no llegó por ninguna.",
        },
        {
          forma: "texto",
          texto:
            "Aun así, cada vez que alguien mira a un niño que no para quieto y se pregunta si el problema es el niño o la silla, está usando su libro. No hace falta que se lo haya leído, y ese es el único sitio donde una idea gana de verdad.",
        },
        {
          forma: "texto",
          texto:
            "La cifra de la NASA no existía.",
        },
        {
          forma: "texto",
          texto:
            "La niña que bailaba en el despacho, sí.",
        },
        {
          forma: "texto",
          texto:
            "Y con una sola de las dos cosas se puede construir un argumento honrado.",
        },
      ],
    },
  ],
};
