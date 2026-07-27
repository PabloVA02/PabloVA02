import type { Resumen } from "./tipos";

export const CUERPO_CUENTA: Resumen = {
  id: "cuerpo-cuenta",
  titulo: "El cuerpo lleva la cuenta",
  autor: "Bessel van der Kolk",
  ano: 2014,
  gancho: "El trauma no se guarda como un recuerdo. Se guarda en el cuerpo, y por eso no se cura hablando.",
  porQue:
    "Lleva más de una década en las listas de más vendidos porque explica por qué gente que sabe perfectamente lo que le pasó sigue reaccionando como si volviera a pasar.",
  partes: [
    {
      titulo: "Los veteranos",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En 1978 Bessel van der Kolk empezó a trabajar en un hospital de veteranos de Vietnam. Sus pacientes le describían escenas que no encajaban con ningún manual: hombres que se tiraban al suelo al oír un petardo, que no soportaban que su mujer les tocara la espalda, que se sentían muertos por dentro y solo se notaban vivos conduciendo a doscientos.",
        },
        {
          forma: "arte",
          texto:
            "Todos sabían exactamente lo que les había ocurrido. Podían contarlo con detalle. Y contarlo no servía de nada: al terminar la sesión salían igual o peor. Van der Kolk pasó cuarenta años intentando entender por qué, y el libro es esa respuesta.",
          arte: "noche",
        },
        {
          forma: "clave",
          rotulo: "El hallazgo",
          frase: "El trauma no se archiva como una historia con principio y final. Se archiva como sensaciones sueltas sin fecha.",
        },
        {
          forma: "texto",
          texto:
            "Los estudios de neuroimagen que dirigió lo mostraron con claridad. Al revivir el episodio, se encendía la zona de la alarma y se apagaba la del lenguaje — la misma región que se lesiona en algunos ictus y deja a la persona sin palabras. De ahí que el trauma se describa tan mal: literalmente, mientras se revive, el cerebro no tiene el habla disponible.",
        },
      ],
    },

    {
      titulo: "Un reloj que no avanza",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Su explicación central es que el cuerpo se queda atascado en la respuesta de emergencia. Ante un peligro, el organismo se prepara para luchar o huir; si ninguna de las dos cosas es posible —un niño no puede huir de su casa, un soldado no puede huir del convoy— el sistema se bloquea con el motor en marcha.",
        },
        {
          forma: "clave",
          rotulo: "Por qué el tiempo no cura",
          frase: "El cuerpo sigue actuando como si el peligro continuara. No es que recuerde el pasado: es que no ha registrado que terminó.",
        },
        {
          forma: "texto",
          texto:
            "De ahí síntomas que parecen inconexos y no lo son: hipervigilancia, sobresaltos, insomnio, problemas digestivos, dolores crónicos sin causa detectable, dificultad para concentrarse y la sensación de estar mirándose desde fuera. Todo eso es un sistema de alarma que no se ha apagado.",
        },
        {
          forma: "arte",
          texto:
            "Van der Kolk señala además algo que cambió su forma de tratar: mucha gente traumatizada no siente su propio cuerpo. No sabe si tiene hambre, si está cansada, dónde nota la tensión. Es una anestesia que empezó siendo protección — dejar de sentir cuando sentir era insoportable— y que después impide vivir.",
          arte: "memoria",
        },
      ],
    },

    {
      titulo: "Lo que sí funciona",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Su conclusión práctica es la que hizo el libro famoso: si el trauma vive en el cuerpo, el tratamiento tiene que pasar por el cuerpo. Hablar ayuda, pero no basta, y en algunos casos repetir el relato una y otra vez reactiva la herida sin cerrarla.",
        },
        {
          forma: "texto",
          texto:
            "Repasa lo que ha visto funcionar en sus pacientes: terapias que trabajan con la atención corporal, yoga adaptado —donde lo importante no es la postura sino volver a notar el cuerpo sin miedo—, respiración lenta, teatro, artes marciales, coros. Cosas donde uno se mueve con otros y recupera la sensación de tener control.",
        },
        {
          forma: "clave",
          rotulo: "El otro pilar",
          frase: "La seguridad viene de otras personas. Nadie se recupera del trauma en soledad.",
        },
        {
          forma: "texto",
          texto:
            "Lo dice con una precisión que importa: no vale cualquier compañía. Hace falta al menos una persona ante la cual puedas dejar de estar en guardia, y eso es justamente lo que el trauma dificulta, porque enseña a desconfiar. Por eso, dice, la primera parte del tratamiento suele ser la más lenta.",
        },
        {
          forma: "texto",
          texto:
            "Dedica bastante espacio al <em>EMDR</em>, una terapia que combina el recuerdo con movimientos oculares dirigidos y que a él mismo le pareció inverosímil hasta que vio los resultados. Hoy tiene respaldo en ensayos clínicos y está en las guías de tratamiento, aunque sigue sin haber acuerdo sobre por qué funciona.",
        },
      ],
    },

    {
      titulo: "Lo que hay que matizar",
      tarjetas: [
        {
          forma: "arte",
          texto:
            "El libro se convirtió en un fenómeno cultural y ahí empezaron los problemas. Su frase título se usa hoy para explicar cualquier dolor de espalda o cualquier malestar, y esa lectura no está en el libro: van der Kolk habla de trauma clínico, no de que todo síntoma físico esconda una herida emocional.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Hay críticas técnicas serias. Algunos de los estudios que cita son pequeños o antiguos, su defensa del yoga y del neurofeedback se apoya en evidencia más flaca de lo que sugiere el tono, y varios investigadores le reprochan presentar como establecido lo que aún se discute.",
        },
        {
          forma: "texto",
          texto:
            "Y un aviso práctico: es un libro duro. Contiene descripciones detalladas de abusos y violencia. A mucha gente le ha servido para poner nombre a lo que le pasa; a otra le ha removido cosas sin tener a nadie al lado. No sustituye a un tratamiento.",
        },
        {
          forma: "clave",
          rotulo: "Para llevarte",
          frase: "Si tu cuerpo reacciona a algo que tu cabeza sabe que ya pasó, no estás fallando. Estás con la alarma encendida.",
        },
        {
          forma: "texto",
          texto:
            "Antes de cerrar conviene rescatar el capítulo sobre la infancia, que es el corazón del libro. Van der Kolk trabajó con niños maltratados y descubrió que casi ninguno encajaba en los diagnósticos disponibles: se les etiquetaba de hiperactivos, oposicionistas o bipolares, y se les medicaba. Su equipo propuso una categoría nueva —trauma del desarrollo— que la asociación psiquiátrica estadounidense rechazó. Su argumento sigue en pie: a un niño que creció en peligro constante no se le está tratando la enfermedad, se le está tratando la adaptación que le mantuvo vivo.",
        },
      ],
    },
  ],
};

export const DIGESTION: Resumen = {
  id: "digestion-cuestion",
  titulo: "La digestión es la cuestión",
  autor: "Giulia Enders",
  ano: 2014,
  gancho: "Una estudiante de medicina de veinticuatro años dio una charla de diez minutos sobre el intestino. El vídeo se hizo viral y el libro vendió millones.",
  porQue:
    "Convierte el órgano del que nadie quiere hablar en el más interesante del cuerpo. Y es un buen ejemplo de un libro escrito justo en el pico de una moda científica.",
  partes: [
    {
      titulo: "Una charla de diez minutos en Berlín",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En 2012, en un local de Berlín, se celebra un concurso en el que estudiantes de doctorado explican su tesis al público en diez minutos y gana el que mejor lo cuente. Una chica de veintidós años sube al escenario y anuncia que va a hablar del intestino, que es lo que estudia.",
        },
        {
          forma: "texto",
          texto:
            "El público reacciona con la risa incómoda de siempre, y ella lo usa a su favor desde la primera frase. Su tesis del concurso es sencilla: el intestino es el órgano peor tratado del cuerpo, hacemos chistes con él y resulta que tiene sistema nervioso propio y la mitad del sistema inmune.",
        },
        {
          forma: "texto",
          texto:
            "Gana el concurso, alguien sube el vídeo a internet y lo ven cientos de miles de personas en pocas semanas. A los pocos meses, una editorial le propone convertir aquello en un libro, y ella acepta mientras sigue haciendo el doctorado en un instituto de microbiología de Fráncfort.",
        },
        {
          forma: "texto",
          texto:
            "El formato de aquel concurso explica bastante el resultado. En un certamen así no se premia el rigor sino la capacidad de hacerse entender y de hacer reír, y el libro conserva esa forma: cada capítulo funciona como una charla corta con un remate al final.",
        },
        {
          forma: "texto",
          texto:
            "Esa estructura tiene una consecuencia buena para este formato en concreto. El libro se puede abrir por cualquier capítulo, cada uno se entiende solo y ninguno depende del anterior, que es exactamente lo que hace falta para leerlo a ratos y en cualquier orden.",
        },
        {
          forma: "clave",
          rotulo: "Por qué le interesaba el tema",
          frase: "A los diecisiete le salió una llaga en una pierna que se le fue extendiendo por el cuerpo, y ningún médico supo explicarle por qué.",
        },
        {
          forma: "texto",
          texto:
            "Una de las cosas que le llamó la atención al leer sobre el asunto fue el reparto del sistema inmune. Alrededor de tres cuartas partes de las células inmunitarias del cuerpo están alrededor del intestino, así que buscar allí el origen de un problema de piel no era ninguna extravagancia.",
        },
        {
          forma: "texto",
          texto:
            "Aquella lesión duró meses y le cambió la vida entera de sitio. Se puso a leer por su cuenta sobre inmunidad y sobre flora intestinal, cambió cosas de su alimentación y de su medicación, la piel se le curó, y decidió estudiar medicina y dedicarse a ese órgano.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí está establecido, y es lo que la puso en esa pista, es la relación entre piel e intestino. Varias enfermedades cutáneas se asocian con trastornos digestivos y con problemas inmunitarios, y esa asociación lleva décadas descrita, aunque el mecanismo siga sin estar claro.",
        },
        {
          forma: "texto",
          texto:
            "Conviene decir con claridad qué es esa historia y qué no es. Es un caso individual, sin control ni seguimiento, contado por la propia interesada años después, y ella lo presenta como lo que la empujó a estudiar, no como una prueba de nada; el lector suele leerlo del segundo modo.",
        },
        {
          forma: "texto",
          texto:
            "Es exactamente el mismo problema que tiene el experimento de Stanford de Respira. Un autor que se cura o que se enferma dentro de su propio libro produce una escena inolvidable y un dato sin ningún valor, y el lector recuerda la escena y se queda con la conclusión.",
        },
        {
          forma: "texto",
          texto:
            "La diferencia es que Enders no construye el libro sobre su caso. Lo cuenta al principio para explicar por qué le interesa el tema y después no vuelve a él, mientras que en Respira el experimento personal es la columna vertebral del argumento entero.",
        },
        {
          forma: "arte",
          texto:
            "El libro lo firma ella y lo dibuja su hermana Jill, diseñadora gráfica, y esa colaboración explica media mitad del éxito. Las ilustraciones son intestinos sonrientes, bacterias con cara y esquemas amables, y consiguen que se pueda leer un capítulo entero sobre heces mientras se desayuna.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Ese recurso tiene además un efecto práctico que no es solo estético. Un esquema simpático del esfínter interno y el externo se entiende y se recuerda mejor que la misma información en un dibujo clínico, y varios capítulos serían ilegibles para un lector normal sin esos dibujos al lado.",
        },
        {
          forma: "texto",
          texto:
            "El título original alemán es un juego de palabras intraducible que viene a decir intestino con encanto, y describe el proyecto entero. La apuesta consiste en hablar sin vergüenza y con humor de lo que la conversación educada no menciona, y en Alemania funcionó de una manera desproporcionada.",
        },
        {
          forma: "texto",
          texto:
            "El efecto cultural del libro fue mayor que el científico y eso también cuenta. Consiguió que en varios países se hablara en la sobremesa de estreñimiento, de heces y de flora intestinal sin bajar la voz, y bastantes gastroenterólogos reconocieron entonces que les llegaban pacientes mejor informados.",
        },
        {
          forma: "texto",
          texto:
            "Estuvo más de un año en lo más alto de las listas alemanas de no ficción. Se citan más de un millón y medio de ejemplares vendidos solo en Alemania y unos cinco millones en el mundo, en más de cuarenta idiomas, siempre según las cifras que da su editorial.",
        },
        {
          forma: "texto",
          texto:
            "El éxito alemán tuvo además un componente local que no se repitió igual fuera. Alemania es un país con una tradición muy arraigada de hablar de la digestión y de las curas de salud, con balnearios y remedios domésticos, y aquel libro llegó a un público ya predispuesto a interesarse.",
        },
        {
          forma: "texto",
          texto:
            "Su autora tenía veinticuatro años al publicarlo y no era médica en ejercicio ni investigadora con obra propia. Era una estudiante de doctorado que había leído mucho y que sabía explicar, y el libro es una síntesis divulgativa de un campo que en aquel momento estaba en plena efervescencia.",
        },
        {
          forma: "texto",
          texto:
            "Después terminó la carrera, se doctoró y ha seguido escribiendo y dando charlas. No se convirtió en investigadora con laboratorio propio, que era lo que muchos esperaban, y en las ediciones posteriores del libro ha ido añadiendo correcciones y matices sobre lo que había cambiado.",
        },
        {
          forma: "texto",
          texto:
            "Ese detalle importa para leerlo bien y no para desacreditarlo. Un libro escrito por alguien de fuera del laboratorio explica mejor y distingue peor, y aquí ocurren las dos cosas: se entiende todo a la primera y hay que separar después lo demostrado de lo prometedor.",
        },
        {
          forma: "texto",
          texto:
            "Hay dos libros ya en este catálogo con exactamente el mismo perfil.",
        },
        {
          forma: "texto",
          texto:
            "Los tres se leen mejor con una regla: subrayar el mecanismo y desconfiar de la promesa.",
        },
        {
          forma: "texto",
          texto:
            "Respira y La vida secreta de los árboles: fisiología real contada con demasiado entusiasmo.",
        },
      ],
    },
    {
      titulo: "El órgano que nadie quiere mirar",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El aparato digestivo es un tubo que atraviesa el cuerpo de un extremo al otro, y esa es la primera idea que el libro coloca. Lo que hay dentro de ese tubo sigue estando técnicamente fuera de ti: la comida no entra en el cuerpo hasta que atraviesa la pared del intestino.",
        },
        {
          forma: "texto",
          texto:
            "Esa idea del tubo explica por qué esa pared tiene tanto sistema inmune detrás. Es la mayor superficie de contacto entre el mundo exterior y el interior del cuerpo, mucho más grande que la piel, y por ahí entra todos los días una cantidad enorme de material desconocido.",
        },
        {
          forma: "texto",
          texto:
            "El problema que resuelve ese sistema inmune es más difícil de lo que parece. Tiene que atacar a lo peligroso y a la vez tolerar la comida y a billones de bacterias que conviene mantener, y buena parte de las alergias y de las enfermedades autoinmunes son fallos de esa distinción.",
        },
        {
          forma: "texto",
          texto:
            "Mide unos siete u ocho metros en un adulto, plegado dentro del abdomen. El delgado se lleva la mayor parte y es donde se absorbe casi todo; el grueso, más corto y más ancho, se dedica sobre todo a recuperar agua y a alojar a la población bacteriana.",
        },
        {
          forma: "texto",
          texto:
            "Esa medida se toma en cadáveres y en vivo es bastante menor, cosa que casi nunca se aclara. Al morir, el músculo de la pared se relaja y el intestino se alarga; en una persona viva el tono muscular lo mantiene contraído, en torno a la mitad de esa longitud.",
        },
        {
          forma: "texto",
          texto:
            "Es otro ejemplo del mismo patrón de este libro y de tantos otros. Una cifra que se aprende en el colegio, que se repite en todas partes y que resulta venir de una manera concreta de medir, sin que casi nadie mencione en qué condiciones se hizo esa medición.",
        },
        {
          forma: "clave",
          rotulo: "La cifra famosa y su asterisco",
          frase: "Se repite que la superficie intestinal es como una pista de tenis. Un trabajo de 2014 la midió mejor: unos treinta metros cuadrados, media pista de bádminton.",
        },
        {
          forma: "texto",
          texto:
            "La diferencia entre las dos cifras no es una tontería, y explica cómo funcionan estas cosas. La comparación con la pista de tenis venía de estimaciones antiguas hechas con modelos geométricos idealizados; cuando se midió con microscopía moderna, la superficie real resultó ser unas siete veces menor.",
        },
        {
          forma: "texto",
          texto:
            "Aun así, treinta metros cuadrados dentro del abdomen siguen siendo un prodigio de plegado. Se consigue con tres niveles de pliegues encajados: los pliegues grandes de la pared, las vellosidades que los recubren y las microvellosidades microscópicas que recubren cada célula.",
        },
        {
          forma: "texto",
          texto:
            "Esa superficie se renueva además a una velocidad que no tiene ningún otro tejido. Las células que recubren el intestino viven unos pocos días, se desprenden y son sustituidas por otras nuevas, de modo que la capa que separa tu sangre de la comida es siempre reciente.",
        },
        {
          forma: "arte",
          texto:
            "La parte más útil del libro es la más doméstica y también la más comentada. Enders explica que la postura sentada en el retrete deja un músculo estrangulando el recto, que en cuclillas ese músculo se relaja del todo, y que basta con poner un taburete bajo los pies para conseguir el mismo efecto.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "El músculo del que habla se llama puborrectal y funciona como una honda alrededor del intestino. Mantiene un ángulo cerrado mientras estás de pie o sentado, que es lo que evita los accidentes durante el día, y solo se afloja del todo cuando las caderas están muy flexionadas.",
        },
        {
          forma: "texto",
          texto:
            "Ese consejo tiene una base anatómica real y una evidencia clínica modesta. Hay estudios pequeños que miden menos esfuerzo y menos tiempo con los pies elevados, sobre todo en personas con estreñimiento, y no hay ensayos grandes que demuestren beneficios de salud a largo plazo.",
        },
        {
          forma: "texto",
          texto:
            "El efecto comercial del asunto sí fue enorme y muy medible. Se vendieron millones de taburetes de plástico diseñados para eso, con nombres de marca que se hicieron populares, y el libro se cita en la publicidad de todos ellos aunque él no venda ninguno.",
        },
        {
          forma: "texto",
          texto:
            "El otro consejo práctico es el de no aguantarse las ganas de forma habitual. Aguantar devuelve el contenido al colon, que sigue absorbiendo agua y lo endurece, y la repetición de esa maniobra durante años es una de las causas más frecuentes y menos reconocidas del estreñimiento crónico.",
        },
        {
          forma: "texto",
          texto:
            "El libro insiste además en un detalle social que tiene consecuencias médicas. Mucha gente es incapaz de usar un baño que no sea el suyo y aguanta jornadas enteras por vergüenza, sobre todo en el trabajo y en los viajes, y ese pudor acaba produciendo un problema clínico real.",
        },
        {
          forma: "texto",
          texto:
            "Ese pudor tiene también una versión más grave que el libro señala de pasada. Los síntomas digestivos que la gente no cuenta a tiempo por vergüenza incluyen algunos que conviene mirar cuanto antes, y el retraso en consultar por sangrado o cambios en el ritmo cuesta vidas cada año.",
        },
        {
          forma: "texto",
          texto:
            "El capítulo del vómito es de los mejor explicados de todo el libro. Cuenta que el cerebro decide vomitar cuando recibe señales de varios sitios a la vez, y que por eso funcionan tanto una intoxicación como una lectura en un coche en marcha: en los dos casos hay información que no concuerda.",
        },
        {
          forma: "texto",
          texto:
            "La explicación del mareo del coche es la que mejor se recuerda. El oído interno detecta movimiento y los ojos, fijos en un libro, informan de quietud, y el cerebro interpreta esa contradicción como una posible intoxicación, porque históricamente lo que más produce delirios sensoriales es haber comido algo malo.",
        },
        {
          forma: "texto",
          texto:
            "También rehabilita al apéndice, al que la medicina llevaba un siglo llamando inútil. La hipótesis más aceptada hoy es que funciona como refugio de bacterias buenas: un callejón sin salida donde la flora sobrevive a una diarrea fuerte y desde el que puede volver a colonizar el colon después.",
        },
        {
          forma: "texto",
          texto:
            "Esa hipótesis se propuso en 2007 y sigue siendo eso, una hipótesis con buenos indicios. Encaja con la anatomía y con que el apéndice esté lleno de tejido inmunitario, y no cambia la conducta clínica: una apendicitis se sigue operando y quien no lo tiene vive perfectamente.",
        },
        {
          forma: "texto",
          texto:
            "Hay un capítulo entero dedicado a mirar las heces con una escala de siete tipos.",
        },
        {
          forma: "texto",
          texto:
            "Del uno, bolitas duras, al siete, líquido; los buenos son el tres y el cuatro.",
        },
        {
          forma: "texto",
          texto:
            "Es una herramienta clínica real, la escala de Bristol, y aquí se explica sin remilgos.",
        },
      ],
    },
    {
      titulo: "Cien millones de neuronas en la tripa",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La pared del intestino está recorrida por una red de neuronas propia que trabaja sola. Se calcula que tiene alrededor de cien millones de células nerviosas, más que la médula espinal, organizadas en dos capas que rodean el tubo digestivo de arriba abajo.",
        },
        {
          forma: "texto",
          texto:
            "Para poner esa cifra en contexto conviene compararla con la de arriba. El cerebro humano tiene del orden de ochenta y seis mil millones de neuronas, casi mil veces más, así que lo del segundo cerebro habla de independencia funcional y no de potencia de cálculo.",
        },
        {
          forma: "texto",
          texto:
            "Esa red se llama sistema nervioso entérico y hace su trabajo sin consultar a nadie. Coordina las contracciones que empujan la comida, decide cuánto jugo hay que segregar en cada tramo y detecta qué ha llegado, y sigue funcionando aunque se corten sus conexiones con el cerebro.",
        },
        {
          forma: "texto",
          texto:
            "Esa autonomía es la razón de que el intestino siga trabajando cuando alguien duerme o está inconsciente. También explica que un trozo de intestino extraído en una operación siga contrayéndose un rato en la bandeja, cosa que impresiona bastante a los estudiantes de medicina la primera vez.",
        },
        {
          forma: "texto",
          texto:
            "De noche ocurre además algo que el libro cuenta muy bien. Cuando llevas horas sin comer, el intestino ejecuta unas ondas de limpieza que barren los restos hacia abajo, y ese barrido es el ruido de tripas que se oye en el silencio y que no significa hambre.",
        },
        {
          forma: "clave",
          rotulo: "De dónde viene lo del segundo cerebro",
          frase: "La expresión la popularizó el neurobiólogo Michael Gershon en un libro de 1998. Es una metáfora sobre autonomía, no sobre pensamiento.",
        },
        {
          forma: "texto",
          texto:
            "La comparación funciona en un sentido y falla en el otro, y conviene tenerlo claro. El intestino tiene neuronas de sobra para gobernarse solo, y no tiene nada parecido a una corteza, ni memoria, ni capacidad de representar el mundo; es un sistema de control local, muy bueno y muy tonto.",
        },
        {
          forma: "texto",
          texto:
            "El origen evolutivo explica bastante bien ese reparto. Los primeros animales eran básicamente un tubo con una red de nervios alrededor, y el cerebro apareció después; visto así, el sistema nervioso del intestino no es un segundo cerebro sino el primero, y el de la cabeza es la novedad.",
        },
        {
          forma: "texto",
          texto:
            "El dato que más se cita del libro es la asimetría del nervio vago. Ese nervio conecta el intestino con el tronco del encéfalo, y en torno a nueve de cada diez de sus fibras llevan información hacia arriba, del intestino al cerebro, y no al revés.",
        },
        {
          forma: "texto",
          texto:
            "Es decir, el cerebro recibe muchísimo más de lo que manda. Está permanentemente informado del estado del tubo digestivo, de qué hay dentro y de cómo va la cosa, aunque casi nada de esa información llegue a la conciencia salvo cuando algo va francamente mal.",
        },
        {
          forma: "texto",
          texto:
            "Esa asimetría se ha convertido además en una vía terapéutica real. Existe la estimulación del nervio vago como tratamiento aprobado para algunas epilepsias y depresiones resistentes, con un aparato implantado, y funciona precisamente porque esa autopista lleva información hacia arriba.",
        },
        {
          forma: "arte",
          texto:
            "De ahí sale la explicación fisiológica de expresiones que parecían literarias. Tener un nudo en el estómago antes de un examen o que algo no te siente bien son descripciones bastante literales de lo que hace el intestino cuando el cerebro le manda señales de alarma.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "El mecanismo concreto de ese nudo está bien descrito. Ante una amenaza, el sistema nervioso simpático corta el riego del aparato digestivo para mandar sangre a los músculos, se para la digestión y se contraen algunas zonas, y eso se nota exactamente en la boca del estómago.",
        },
        {
          forma: "texto",
          texto:
            "Y aquí hay que meter el matiz que casi ningún resumen del libro incluye. Es cierto que alrededor del noventa y cinco por ciento de la serotonina del cuerpo está en el intestino y no en la cabeza, y de ahí sale el titular de que la felicidad se fabrica en la tripa.",
        },
        {
          forma: "texto",
          texto:
            "Esa serotonina intestinal sí tiene una consecuencia que cualquiera ha notado. Los antidepresivos que actúan sobre ella producen náuseas y alteraciones del ritmo intestinal las primeras semanas, precisamente porque afectan también a la enorme reserva que hay en el tubo digestivo.",
        },
        {
          forma: "texto",
          texto:
            "Ese titular es engañoso por un motivo técnico y decisivo. La serotonina no atraviesa la barrera que protege al cerebro, así que la que hay en el intestino se queda en el intestino, donde regula el movimiento del tubo; no es la que interviene en el estado de ánimo.",
        },
        {
          forma: "texto",
          texto:
            "La conexión entre intestino y ánimo, si existe, funciona por otras vías. Se estudian las señales del nervio vago, las moléculas que fabrican las bacterias y la inflamación, y ninguna de esas rutas está establecida en humanos con la solidez con que se cuenta por ahí.",
        },
        {
          forma: "texto",
          texto:
            "La ruta con más apoyo hoy es la de los ácidos grasos de cadena corta. Los fabrican las bacterias al fermentar la fibra, pasan a la sangre, tienen efectos sobre la inflamación y sobre la barrera del intestino, y hay indicios de que llegan a influir en el cerebro por esa vía indirecta.",
        },
        {
          forma: "texto",
          texto:
            "Aun con esa ruta, la distancia entre un efecto medible y una recomendación clínica es enorme. Que una molécula bacteriana llegue al cerebro no dice nada sobre si cambiar la dieta de alguien con depresión servirá para algo, y esa es la pregunta que todavía no tiene respuesta.",
        },
        {
          forma: "texto",
          texto:
            "El libro tampoco afirma lo contrario, y conviene reconocérselo. Enders presenta esa parte como investigación en marcha y repite que son hipótesis; lo que ocurre es que el tono entusiasta y los titulares que generó el libro dejaron esa cautela por el camino.",
        },
        {
          forma: "texto",
          texto:
            "Es el mismo fenómeno que se ve con casi todos estos libros y que conviene tener presente. El autor escribe hipótesis y el titular de prensa escribe hallazgos, y a los tres meses la gente cita el titular convencida de estar citando el libro que no ha leído.",
        },
        {
          forma: "texto",
          texto:
            "Un intestino tiene más neuronas que un cerebro de gato.",
        },
        {
          forma: "texto",
          texto:
            "Y aun así nunca ha tenido una sola idea.",
        },
        {
          forma: "texto",
          texto:
            "Y ninguna de ellas piensa en nada.",
        },
      ],
    },
    {
      titulo: "Los que viven dentro",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El último tercio del libro es el que hizo que se hablara tanto de él, y trata de las bacterias. La idea central es que en el intestino grueso vive una población enorme de microorganismos que no son pasajeros: fabrican vitaminas, digieren fibras que nosotros no podemos y ocupan el sitio de los patógenos.",
        },
        {
          forma: "texto",
          texto:
            "El trabajo químico que hacen es medible y nada metafórico. Fermentan la fibra y producen ácidos grasos de cadena corta que alimentan a las células del propio colon, sintetizan vitamina K y varias del grupo B, y transforman compuestos de la dieta que de otro modo pasarían de largo.",
        },
        {
          forma: "texto",
          texto:
            "También metabolizan medicamentos, y eso tiene consecuencias clínicas concretas. Hay fármacos que las bacterias del intestino activan o desactivan, de modo que dos personas con la misma dosis pueden acabar con cantidades distintas en sangre según qué población lleven dentro.",
        },
        {
          forma: "texto",
          texto:
            "Las cifras que da el libro son las que se manejaban en 2014 y han cambiado. Entonces se hablaba de cien billones de bacterias, diez por cada célula humana, y de uno o dos kilos de peso, y esos tres números circularon durante décadas en revistas y en libros de texto.",
        },
        {
          forma: "texto",
          texto:
            "Lo que no ha cambiado es la cifra que de verdad importa, que es la de genes. El conjunto de bacterias del intestino aporta muchísimos más genes distintos que el propio genoma humano, y esa diversidad química es la razón de que puedan hacer cosas que nuestras células no saben hacer.",
        },
        {
          forma: "clave",
          rotulo: "La corrección de 2016",
          frase: "Un trabajo israelí rehízo el cálculo: unas treinta y ocho billones de bacterias frente a treinta billones de células humanas, y unos doscientos gramos de peso.",
        },
        {
          forma: "texto",
          texto:
            "Ese mismo trabajo señaló otro detalle que descoloca. La mayoría de las células humanas del cuerpo no son las que uno imagina: son glóbulos rojos, que son diminutos y numerosísimos, así que la comparación entre bacterias y células propias depende mucho de qué se esté contando exactamente.",
        },
        {
          forma: "texto",
          texto:
            "La proporción de diez a uno, que todo el mundo repetía, venía de una estimación de 1972 hecha a ojo. Alguien calculó un orden de magnitud en un artículo, no lo presentó como un dato firme, y la cifra se fue citando hasta convertirse en un hecho establecido sin que nadie la comprobara.",
        },
        {
          forma: "texto",
          texto:
            "Es exactamente el mismo mecanismo que denunciaba la revisión sobre las redes de hongos de La vida secreta de los árboles. Un cálculo provisional se cita con más seguridad en cada trabajo posterior, nadie vuelve al original, y la estimación acaba convertida en dato de manual.",
        },
        {
          forma: "texto",
          texto:
            "La cifra correcta sigue siendo asombrosa y menos espectacular: aproximadamente una bacteria por cada célula tuya. Además, ese número cambia mucho a lo largo del día, porque cada deposición se lleva una parte enorme de la población y la colonia se repone después.",
        },
        {
          forma: "texto",
          texto:
            "El reparto por el cuerpo también sorprende cuando se mira de cerca. Casi todas esas bacterias están en el intestino grueso y en concreto en el colon, mientras que el estómago y el intestino delgado, con su acidez y su tránsito rápido, tienen poblaciones muchísimo menores.",
        },
        {
          forma: "arte",
          texto:
            "La intervención con mejor evidencia de todo este campo es también la más desagradable. En infecciones graves y recurrentes por una bacteria llamada Clostridioides difficile, trasplantar heces de un donante sano cura a la mayoría de los pacientes cuando los antibióticos ya han fallado.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Esa infección aparece casi siempre después de un tratamiento antibiótico largo. Los antibióticos arrasan con la flora normal del colon, esa bacteria aprovecha el terreno vacío para instalarse y produce diarreas graves que pueden matar a un paciente debilitado en un hospital.",
        },
        {
          forma: "texto",
          texto:
            "Las tasas de curación de ese procedimiento superan a las del tratamiento antibiótico en ensayos aleatorizados, y hoy está en las guías clínicas. Es el único caso en que manipular deliberadamente la flora intestinal tiene un efecto grande, medido y aceptado por la comunidad médica.",
        },
        {
          forma: "texto",
          texto:
            "Los intentos de repetir ese éxito en otras enfermedades han sido bastante decepcionantes. Se ha probado el trasplante fecal en colitis, en síndrome metabólico, en autismo y en varias cosas más, con resultados irregulares y sin nada parecido a la eficacia contundente del caso original.",
        },
        {
          forma: "texto",
          texto:
            "El contraste con los probióticos del supermercado es enorme y conviene decirlo. Un yogur con bacterias añadidas no tiene demostrado ningún efecto relevante en una persona sana, la mayoría de esas bacterias no llegan vivas ni se instalan, y los efectos probados son de cepas concretas en cuadros concretos.",
        },
        {
          forma: "texto",
          texto:
            "El caso mejor documentado es el de ciertas cepas en la diarrea asociada a antibióticos. Ahí hay ensayos que muestran una reducción modesta, con cepas y dosis identificadas, y ese resultado no se puede extender a cualquier producto lácteo con la palabra bífidus en el envase.",
        },
        {
          forma: "texto",
          texto:
            "Hay además un estudio de 2018 que complica todavía más el asunto. Investigadores israelíes vieron que la colonización depende muchísimo de cada persona, y que tomar probióticos después de un tratamiento antibiótico retrasaba la recuperación de la flora propia en vez de acelerarla.",
        },
        {
          forma: "texto",
          texto:
            "El detalle metodológico de ese trabajo es lo que le da fuerza. En vez de mirar las heces, que es lo fácil, hicieron endoscopias para ver qué había realmente pegado a la pared del intestino, y descubrieron que las heces contaban una historia distinta de la que pasaba dentro.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí tiene respaldo razonable es lo aburrido: comer fibra variada. Las bacterias del colon viven de lo que nosotros no digerimos, y una dieta con muchas verduras, legumbres y granos enteros produce poblaciones más diversas, que es el indicador que suele asociarse con mejor salud.",
        },
        {
          forma: "texto",
          texto:
            "Conviene decir que hasta esa recomendación está peor probada de lo que parece. La asociación entre diversidad bacteriana y salud es robusta, y sigue sin demostrarse que aumentar la diversidad a propósito mejore nada; comer fibra tiene por su cuenta razones de sobra sin necesidad de invocar bacterias.",
        },
        {
          forma: "texto",
          texto:
            "El libro también explica bien las intolerancias, que se confunden todo el rato con las alergias.",
        },
        {
          forma: "texto",
          texto:
            "Una puede dar molestias y la otra puede matarte en minutos.",
        },
        {
          forma: "texto",
          texto:
            "Una es una enzima que falta y la otra es el sistema inmune atacando.",
        },
      ],
    },
    {
      titulo: "Lo que se sabía en 2014 y lo que se sabe ahora",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Este libro se publicó exactamente en el pico de una moda científica, y eso lo marca entero. Entre 2010 y 2015, el estudio del microbioma vivió una explosión de financiación, de artículos y de titulares, y todo el mundo esperaba que las bacterias intestinales explicaran media medicina.",
        },
        {
          forma: "texto",
          texto:
            "El desencadenante técnico de aquella explosión fue la secuenciación barata. Hasta entonces solo se podían estudiar las bacterias que crecían en una placa de laboratorio, que son una minoría, y de pronto se pudo leer el material genético de una muestra entera sin cultivar nada.",
        },
        {
          forma: "texto",
          texto:
            "Ese salto técnico produjo también su efecto secundario típico. Cuando aparece una herramienta que permite medir algo barato y rápido, se publica una avalancha de estudios que encuentran correlaciones por todas partes, y hacen falta años para separar las que significan algo.",
        },
        {
          forma: "texto",
          texto:
            "Diez años después el panorama es más modesto y más interesante. Se han confirmado asociaciones entre flora intestinal y muchas enfermedades, y en casi todos los casos sigue sin saberse si la flora rara causa la enfermedad o es la enfermedad la que cambia la flora.",
        },
        {
          forma: "texto",
          texto:
            "El problema de la dirección de la flecha se ve muy bien con la obesidad. Las personas obesas tienen una flora distinta, eso está medido muchas veces, y como la flora depende de lo que se come, encontrar diferencias entre quienes comen distinto no demuestra que las bacterias sean la causa.",
        },
        {
          forma: "clave",
          rotulo: "El problema de fondo",
          frase: "Casi todos los resultados espectaculares son de ratones criados sin bacterias en jaulas estériles. Traducirlos a personas ha salido mal muchas veces.",
        },
        {
          forma: "texto",
          texto:
            "El precedente que conviene recordar es el de los suplementos antioxidantes. También venían de resultados de laboratorio impecables, se recomendaron durante años, y los ensayos grandes acabaron encontrando que en algunos casos aumentaban la mortalidad en vez de reducirla.",
        },
        {
          forma: "texto",
          texto:
            "Los experimentos con ratones son de verdad llamativos y el libro los cuenta. Se cría a los animales sin ninguna bacteria, se les trasplanta la flora de un ratón nervioso o de uno tranquilo, y el comportamiento del receptor cambia en la dirección del donante en varias pruebas.",
        },
        {
          forma: "texto",
          texto:
            "Hay resultados todavía más llamativos con animales delgados y obesos. Trasplantar la flora de un ratón obeso a uno sin bacterias hace que el receptor engorde más comiendo lo mismo, y ese experimento es el que está detrás de todos los titulares sobre bacterias que adelgazan.",
        },
        {
          forma: "texto",
          texto:
            "El salto a los humanos es donde se rompe casi todo. Un ratón sin bacterias es un animal anómalo criado en condiciones que no existen en ninguna parte, las cepas de laboratorio están muy emparentadas y las pruebas de ansiedad en roedores miden algo bastante distinto de lo que sentimos nosotros.",
        },
        {
          forma: "texto",
          texto:
            "Hay además una diferencia de dieta que rara vez se menciona. Los ratones de laboratorio comen un pienso idéntico toda su vida y las personas comen cosas distintas cada día, así que la flora de un ratón es muchísimo más uniforme y más fácil de manipular que la nuestra.",
        },
        {
          forma: "arte",
          texto:
            "Con las cifras pasa algo parecido y es la mejor lección del libro leído hoy. Tres de sus números más repetidos, la pista de tenis, las diez bacterias por célula y los dos kilos de flora, se corrigieron a la baja en los años inmediatamente anteriores o posteriores a su publicación.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Lo interesante es que las tres correcciones van en la misma dirección. Todas rebajan una cifra que resultaba impresionante, lo cual sugiere que el sesgo no está en el error de medida sino en qué versión de un dato dudoso se elige repetir y cuál se deja de lado.",
        },
        {
          forma: "texto",
          texto:
            "Ninguna de esas correcciones es culpa suya, porque escribía con los datos disponibles. Lo que sí es responsabilidad del lector es no dar por buena una cifra impresionante solo porque aparezca en un libro con buena prensa, sobre todo si es redonda y muy fácil de recordar.",
        },
        {
          forma: "texto",
          texto:
            "La señal de alarma que conviene aprender es esa misma: la cifra demasiado redonda y demasiado citable. Diez a uno, dos kilos, una pista de tenis, el noventa y cinco por ciento; todas ellas resultaron ser aproximaciones antiguas repetidas hasta parecer medidas exactas.",
        },
        {
          forma: "texto",
          texto:
            "Conviene precisar además lo que el libro no dice, porque se le atribuye continuamente. No propone ninguna dieta, no vende suplementos, no promete curar la depresión con yogures y no sostiene que el intestino gobierne la mente; dice que hay una conversación entre los dos y que aún no se entiende bien.",
        },
        {
          forma: "texto",
          texto:
            "Tampoco culpa al gluten ni a la lactosa de nada general, que era otra moda de aquellos años. Explica qué es una intolerancia real, cuánta gente la tiene de verdad y por qué mucha gente sin diagnóstico se encuentra mejor al quitar esos alimentos por razones que nada tienen que ver.",
        },
        {
          forma: "texto",
          texto:
            "Su otro defecto es de tono y depende bastante del lector. El humor constante y las metáforas cariñosas le abrieron millones de casas y a la vez hacen que a ratos parezca un libro para niños, y varios médicos alemanes se lo reprocharon en su momento con bastante acidez.",
        },
        {
          forma: "texto",
          texto:
            "La defensa evidente es la misma que la de cualquier divulgador con éxito. Un manual de gastroenterología escrito con el registro que piden los especialistas no lo lee nadie fuera de la facultad, y este libro consiguió que millones de personas supieran cómo funciona su propio aparato digestivo.",
        },
        {
          forma: "texto",
          texto:
            "Lo que queda cuando se le quita la parte de moda es bastante y es sólido. Un órgano de ocho metros con red nerviosa propia, un aparato inmunitario enorme repartido por su pared, una población bacteriana que hace trabajo químico real y unos cuantos consejos prácticos que cuestan cero euros.",
        },
        {
          forma: "texto",
          texto:
            "Y queda un cambio de actitud que probablemente sea su mayor mérito. Mucha gente pasa años con molestias digestivas sin contárselo a nadie por vergüenza, y un libro que consigue que ese tema se hable en voz alta hace más por esas personas que cualquier hallazgo sobre bacterias.",
        },
        {
          forma: "texto",
          texto:
            "Y una idea que ningún manual explica igual de bien: que ese tubo te informa constantemente.",
        },
        {
          forma: "texto",
          texto:
            "Aunque casi nunca le hagas caso hasta que grita.",
        },
        {
          forma: "texto",
          texto:
            "Nueve de cada diez fibras suben, y solo una baja.",
        },
      ],
    },
  ],
};

export const NACIDOS_CORRER: Resumen = {
  id: "nacidos-correr",
  titulo: "Nacidos para correr",
  autor: "Christopher McDougall",
  ano: 2009,
  gancho: "Fue al médico porque le dolía el pie corriendo. Acabó en un cañón de México con gente que corre cien kilómetros con sandalias de neumático.",
  porQue:
    "Cambió la manera de correr y de fabricar zapatillas de medio mundo a partir de una pregunta. Y después llegaron los ensayos clínicos y una demanda judicial.",
  partes: [
    {
      titulo: "¿Por qué me duele el pie?",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Un periodista estadounidense de casi metro noventa y cien kilos entra en la consulta de un médico deportivo con un dolor en el pie. Corre poco y despacio, y aun así lleva años lesionándose una y otra vez: fascitis, tendones, rodillas, y ahora esto.",
        },
        {
          forma: "texto",
          texto:
            "McDougall tenía cuarenta y tantos años cuando empezó todo esto y llevaba media vida abandonando el deporte. Había probado a correr varias veces, siempre acababa en el fisioterapeuta al cabo de unos meses, y había asumido que aquello no era para un cuerpo como el suyo.",
        },
        {
          forma: "texto",
          texto:
            "El médico le mira la radiografía y le da una respuesta que él no olvidará. Le dice que el cuerpo humano no está hecho para correr, que a su tamaño y a su edad debería dedicarse a la bicicleta o a nadar, y le receta antiinflamatorios y plantillas caras.",
        },
        {
          forma: "texto",
          texto:
            "Esa respuesta era la ortodoxia de la época y sigue oyéndose en muchas consultas. La idea de que correr desgasta las rodillas está tan extendida como poco respaldada: los estudios de seguimiento encuentran menos artrosis de rodilla entre corredores aficionados que entre sedentarios.",
        },
        {
          forma: "clave",
          rotulo: "La pregunta del libro",
          frase: "Si no estamos hechos para correr, ¿por qué corriendo se siente uno tan bien? ¿Y por qué hay gente que corre cien kilómetros sin lesionarse?",
        },
        {
          forma: "texto",
          texto:
            "Esa pregunta tiene la forma de todos los libros de este género y conviene reconocerla. Se parte de una experiencia personal frustrante, se busca fuera una comunidad que no tiene el problema, y se vuelve con una explicación que sirve para todo el mundo, que es donde se tuerce.",
        },
        {
          forma: "texto",
          texto:
            "Christopher McDougall no era un experto en nada de esto. Había sido corresponsal de guerra en África para una agencia de noticias, escribía reportajes largos y le habían encargado un artículo sobre una tribu mexicana de la que había leído una nota suelta.",
        },
        {
          forma: "texto",
          texto:
            "Su oficio anterior explica bastante bien cómo está construido el libro. Un corresponsal aprende a encontrar un personaje, seguirlo y contar una historia con tensión, y eso es exactamente lo que hace aquí con un asunto que en manos de un fisiólogo habría sido un artículo técnico.",
        },
        {
          forma: "arte",
          texto:
            "Antes de este libro había publicado poco y no era conocido fuera del periodismo. Después vendió millones de ejemplares, se convirtió en conferenciante y escribió dos libros más sobre lo mismo, y esa trayectoria conviene tenerla presente al leer sus afirmaciones más rotundas sobre lesiones y calzado.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "La nota decía que en las barrancas del Cobre, en el estado de Chihuahua, vivía un pueblo capaz de correr distancias enormes por terreno imposible, con sandalias hechas de neumático viejo, y que llegaban a los ochenta años corriendo. Decidió ir a buscarlos.",
        },
        {
          forma: "texto",
          texto:
            "El libro se publicó en 2009 con un título que en español quedó como Nacidos para correr, y el subtítulo original prometía una tribu escondida, superatletas y la mayor carrera jamás vista. Ese subtítulo ya avisa de que no se está ante un texto científico.",
        },
        {
          forma: "arte",
          texto:
            "Las barrancas del Cobre son un sistema de cañones más profundo y más extenso que el Gran Cañón del Colorado, con senderos de cabras entre paredes de mil metros. Llegar hasta las rancherías más apartadas exige días de camino, y en 2005 la zona ya empezaba a estar controlada por narcotraficantes.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "El desnivel de ese terreno explica por qué se corre así y no de otra manera. No hay ni un kilómetro llano: se baja mil metros y se suben otros mil, y en piedra suelta el paso corto y el apoyo delantero no son estética sino la única forma de no caerse.",
        },
        {
          forma: "texto",
          texto:
            "El libro que salió de aquel viaje no es un ensayo, y conviene decirlo desde el principio. Es un reportaje largo con estructura de novela, con personajes, suspense y un final de carrera, y su tesis científica va montada encima de esa trama y no al revés.",
        },
        {
          forma: "texto",
          texto:
            "La estructura alterna tres hilos que se van trenzando a lo largo de las páginas. El viaje del autor por las barrancas, los capítulos de divulgación sobre evolución y biomecánica, y la preparación de una carrera cuyo desenlace se reserva para el final. Cada vez que la ciencia se pone densa, vuelve la aventura.",
        },
        {
          forma: "texto",
          texto:
            "Esa forma es la razón de su éxito y también de casi todos sus problemas. Se lee como una aventura, vendió millones de ejemplares en decenas de idiomas, y consiguió que una hipótesis sobre biomecánica se convirtiera en un movimiento de masas en apenas tres años.",
        },
        {
          forma: "texto",
          texto:
            "El efecto sobre el número de corredores fue además enorme y medible. Coincidió con el auge mundial de las carreras populares, se le atribuye buena parte del salto de participación en maratones de aquellos años, y muchísima gente empezó a correr después de leerlo.",
        },
        {
          forma: "texto",
          texto:
            "Ese efecto es la mejor defensa que puede hacerse del libro. Puso a mucha gente sedentaria a correr, y el beneficio de pasar de no moverse a moverse es enorme y está mejor demostrado que cualquiera de las tesis concretas que defiende sobre técnica o calzado.",
        },
        {
          forma: "texto",
          texto:
            "La cifra que más se le cita conviene mirarla de cerca. Dice que entre seis y ocho de cada diez corredores se lesionan cada año, y ese rango sale de estudios que definen lesión de maneras muy distintas; las revisiones serias dan cifras que van del veinte al ochenta por ciento.",
        },
        {
          forma: "texto",
          texto:
            "Conviene además saber quién produce esas cifras y con quién. Buena parte de la investigación sobre calzado deportivo se ha financiado con dinero de los propios fabricantes, y eso no invalida los resultados pero explica por qué las preguntas incómodas se estudian menos que las cómodas.",
        },
        {
          forma: "texto",
          texto:
            "Un rango tan ancho es en sí mismo una señal de que la pregunta está mal planteada. Si un estudio cuenta cualquier molestia y otro solo lo que obliga a parar dos semanas, no están midiendo lo mismo, y comparar sus resultados no permite concluir gran cosa.",
        },
        {
          forma: "texto",
          texto:
            "Hay otro problema de medida que casi nunca se menciona en estas estadísticas. Casi todas se calculan sobre corredores que ya corren, de modo que quien se lesionó una vez y lo dejó para siempre desaparece de la muestra y no cuenta en ninguna parte.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí es cierto es que correr lesiona mucho y que eso no ha mejorado en décadas.",
        },
        {
          forma: "texto",
          texto:
            "Ese hecho incómodo es el punto de partida honesto del libro.",
        },
      ],
    },
    {
      titulo: "Los de los pies ligeros",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El pueblo del que habla el libro se llama a sí mismo rarámuri, palabra que suele traducirse como los de los pies ligeros o los que corren. La palabra tarahumara es la deformación española del mismo nombre, y es la que usa el libro casi siempre.",
        },
        {
          forma: "texto",
          texto:
            "Son unas cincuenta o sesenta mil personas repartidas por un territorio enorme y quebrado. No forman un grupo homogéneo: hay comunidades en las cumbres y otras en el fondo de los cañones, con climas, cultivos y costumbres bastante distintos entre sí, y el libro los trata a todos como uno solo.",
        },
        {
          forma: "texto",
          texto:
            "Viven en la sierra de Chihuahua desde hace siglos, y su aislamiento no fue una elección romántica. Se metieron en aquellos cañones huyendo de los colonizadores españoles y de la esclavitud en las minas de plata, y la geografía imposible es lo que los mantuvo con vida.",
        },
        {
          forma: "texto",
          texto:
            "Correr, además, tenía funciones prácticas en aquel terreno. Servía para cazar, para llevar mensajes entre rancherías separadas por días de camino y para juntar el ganado en laderas donde no entra ningún vehículo, así que era transporte antes que deporte y desde luego antes que ocio.",
        },
        {
          forma: "texto",
          texto:
            "Conviene entonces separar dos cosas que el libro mezcla. Que un pueblo corra mucho porque su terreno y su economía lo exigen es un hecho etnográfico; que corra mucho porque haya descubierto una forma superior de correr es una interpretación bastante más aventurada y sin ninguna prueba.",
        },
        {
          forma: "clave",
          rotulo: "Las sandalias",
          frase: "Los huaraches son una suela de neumático viejo y unas tiras de cuero. Sin amortiguación, sin sujeción y sin nada parecido a una zapatilla.",
        },
        {
          forma: "texto",
          texto:
            "El neumático es además un material moderno y eso también dice algo. Las sandalias tradicionales se hacían de cuero, y el caucho reciclado se adoptó porque dura más y aguanta mejor la piedra, de modo que el calzado más famoso del minimalismo es en realidad un producto industrial reaprovechado.",
        },
        {
          forma: "texto",
          texto:
            "Su carrera tradicional no es una prueba deportiva sino un juego ritual con nombre propio. Se llama rarájipari en el caso de los hombres, y consiste en ir empujando una bola de madera con el pie a lo largo de un recorrido que puede durar un día entero o más.",
        },
        {
          forma: "texto",
          texto:
            "La bola se empuja con el empeine, nunca con la mano, y ese detalle cambia toda la carrera. Va rodando por el sendero, hay que buscarla cuando cae a un barranco, y el equipo entero se turna para mantenerla en movimiento durante horas.",
        },
        {
          forma: "texto",
          texto:
            "Las mujeres tienen su propia versión, que se juega lanzando y recogiendo aros con un palo. En los dos casos se corren distancias enormes por terreno rotísimo, hay apuestas de por medio y participa el pueblo entero animando y avituallando por el camino.",
        },
        {
          forma: "arte",
          texto:
            "Esas carreras se corren muchas veces de noche, alumbradas con antorchas de madera resinosa. La gente del pueblo acompaña por atajos, grita, apuesta maíz o animales, y el asunto se parece más a una fiesta comunal con público que a una competición individual como las nuestras.",
          arte: "noche",
        },
        {
          forma: "arte",
          texto:
            "El personaje que abre esa puerta al autor es un estadounidense estrafalario al que llaman Caballo Blanco. Se llamaba Micah True, había sido boxeador y repartidor de mudanzas, y llevaba años viviendo solo en las barrancas, corriendo por allí y llevando maíz a las rancherías más pobres.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "Micah True no era ningún sabio ni pretendía serlo, y el libro lo convierte en una especie de gurú del desierto. Vivía en una choza, cobraba pintando casas en Colorado durante el invierno y volvía a México a gastarse lo ganado en aquella carrera cada primavera.",
        },
        {
          forma: "texto",
          texto:
            "Su idea era organizar una carrera entre corredores rarámuri y los mejores ultrafondistas estadounidenses. No por dinero ni por espectáculo, sino para que los suyos ganaran maíz y para demostrar algo que él creía saber sobre cómo corre la gente que nunca ha llevado zapatillas.",
        },
        {
          forma: "texto",
          texto:
            "Había un precedente que a Caballo Blanco le dolía y que el libro cuenta. En los años noventa, un empresario llevó a varios rarámuri a competir a Estados Unidos, ganaron carreras de cien millas y después el asunto se torció entre promesas incumplidas y patrocinios que nunca llegaron.",
        },
        {
          forma: "texto",
          texto:
            "Aquel episodio dejó una desconfianza que el libro reconoce a medias. Varios corredores volvieron a la sierra sin el dinero prometido y con la sensación de haber sido exhibidos, y por eso a Caballo Blanco le costó años convencer a nadie de que corriera otra vez.",
        },
        {
          forma: "texto",
          texto:
            "Aquí está el punto donde el libro se pone más discutible y menos honesto. Los rarámuri aparecen retratados como un pueblo alegre, sano, sin lesiones, sin enfermedades del corazón y sin ninguno de nuestros males, y esa imagen es una versión bastante recortada de la realidad.",
        },
        {
          forma: "texto",
          texto:
            "Ese retrato tiene un nombre viejo en antropología y una historia larga de daños. Es la figura del buen salvaje: un pueblo sin corromper que conserva lo que nosotros hemos perdido, y que existe sobre todo para darnos una lección a nosotros y no para ser entendido.",
        },
        {
          forma: "texto",
          texto:
            "La realidad de la sierra en esos años incluía otras cosas. Pobreza severa, malnutrición infantil, alcoholismo asociado a la bebida de maíz fermentado, sequías largas y una esperanza de vida bastante menor que la del país, todo ello prácticamente ausente del relato.",
        },
        {
          forma: "texto",
          texto:
            "Sobre lo que más le interesa al libro, además, hay poco dato duro. No existen buenos estudios de salud cardiovascular ni de lesiones en esa población, así que la afirmación de que no se lesionan nunca no está medida: viene de lo que unos cuantos contaron a un periodista.",
        },
        {
          forma: "texto",
          texto:
            "También estaba el narcotráfico, que el libro menciona de pasada como color local. En los años posteriores a su publicación, la violencia en las barrancas empeoró mucho, varias personas relacionadas con las carreras fueron asesinadas y algunas comunidades tuvieron que desplazarse.",
        },
        {
          forma: "texto",
          texto:
            "La sierra también se vació de gente joven en esos mismos años. La sequía y la falta de trabajo empujaron a muchos rarámuri hacia las ciudades de Chihuahua, donde acabaron viviendo en asentamientos precarios, y esa parte de la historia no aparece en el libro.",
        },
        {
          forma: "texto",
          texto:
            "El libro no inventa lo que cuenta: elige qué contar y qué no.",
        },
        {
          forma: "texto",
          texto:
            "Y elige lo que sostiene su tesis, que es lo que hace cualquier reportaje con tesis.",
        },
      ],
    },
    {
      titulo: "El simio que suda",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La parte científica del libro se apoya en un artículo publicado en Nature en 2004 por dos investigadores, Dennis Bramble y Daniel Lieberman. Su título viene a decir que la carrera de resistencia intervino en la evolución del género humano, y esa idea es el esqueleto del volumen.",
        },
        {
          forma: "texto",
          texto:
            "Bramble era anatomista comparado en la Universidad de Utah y Lieberman es paleoantropólogo en Harvard, y ninguno de los dos escribió aquel artículo pensando en zapatillas. Su pregunta era por qué el cuerpo de Homo erectus se parece tan poco al de un chimpancé o al de un australopiteco.",
        },
        {
          forma: "texto",
          texto:
            "El argumento no parte de la velocidad sino al revés. Corriendo, un humano es lento y ridículo comparado con casi cualquier mamífero de su tamaño; a distancias largas y con calor, en cambio, es de los mejores animales del planeta y puede agotar a presas mucho más rápidas.",
        },
        {
          forma: "texto",
          texto:
            "Hay una prueba anual que ilustra ese punto mejor que ningún artículo. En Gales se celebra desde 1980 una carrera de unos treinta y cinco kilómetros entre personas y caballos, y aunque suele ganar un caballo, en dos ediciones ha ganado un corredor humano.",
        },
        {
          forma: "texto",
          texto:
            "Las dos veces que ganó una persona fueron años de calor, y eso encaja con la hipótesis. Con frío el caballo gana siempre y con holgura; en cuanto sube la temperatura, la ventaja de refrigerarse sudando empieza a compensar la diferencia de velocidad y de zancada.",
        },
        {
          forma: "clave",
          rotulo: "El rasgo decisivo",
          frase: "Sudamos por casi toda la piel y no tenemos pelo. Un caballo o un antílope se refrigeran jadeando, y jadear no se puede hacer al galope.",
        },
        {
          forma: "texto",
          texto:
            "Las glándulas sudoríparas humanas son entre dos y cinco millones y están repartidas por casi toda la superficie del cuerpo. Ningún otro primate tiene nada parecido, y esa capacidad de evaporar agua es lo que permite mantener el esfuerzo con el sol encima durante horas.",
        },
        {
          forma: "texto",
          texto:
            "Esa diferencia de refrigeración lo cambia todo en un día de calor. Un animal que jadea tiene que pararse para bajar la temperatura, y un humano puede seguir trotando mientras suda, de modo que la persecución se convierte en una carrera de paciencia que gana el que no se sobrecalienta.",
        },
        {
          forma: "texto",
          texto:
            "El precio de ese sistema es que hay que beber, y eso también dejó huella. Un humano perseguidor necesita agua durante la persecución, de modo que la caza por persistencia solo funciona conociendo el terreno y sabiendo dónde están los charcos y los pozos de la zona.",
        },
        {
          forma: "texto",
          texto:
            "La lista de rasgos anatómicos que citan es lo más convincente del capítulo. El tendón de Aquiles, el ligamento de la nuca que estabiliza la cabeza al trotar, el glúteo mayor enorme, el arco del pie que actúa como muelle y los dedos cortos no sirven para andar, y sí para correr.",
        },
        {
          forma: "texto",
          texto:
            "El caso del ligamento de la nuca es el más elegante de todos. Es una banda elástica que impide que la cabeza vaya dando bandazos con cada zancada, la tienen los perros y los caballos, no la tienen los chimpancés, y en el linaje humano aparece justo con el género Homo.",
        },
        {
          forma: "texto",
          texto:
            "Ese detalle es también un buen ejemplo de cómo se argumenta en paleoantropología. No se puede ver correr a un fósil, así que se busca en el hueso la marca donde se insertaba el ligamento y se compara con la de animales que corren y que no corren.",
        },
        {
          forma: "arte",
          texto:
            "Ese arco del pie funciona como un muelle que devuelve energía en cada zancada. Se estira al apoyar, almacena una parte de la fuerza del impacto y la suelta al despegar, y ese mecanismo ahorra en torno a un diez por ciento del gasto energético de la carrera.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "El tendón de Aquiles hace lo mismo a mayor escala y es enorme en los humanos. Los chimpancés lo tienen cortísimo, el nuestro mide más de un palmo, y sin ese muelle correr costaría bastante más energía, hasta el punto de que el trote largo dejaría de compensar.",
        },
        {
          forma: "texto",
          texto:
            "El otro apoyo empírico es la caza por persistencia, documentada en el Kalahari. Antropólogos como Louis Liebenberg acompañaron a cazadores san persiguiendo antílopes durante horas bajo el sol, hasta que el animal se desplomaba por hipertermia y podían acercarse y rematarlo.",
        },
        {
          forma: "texto",
          texto:
            "El método consiste en elegir un animal grande en las horas de más calor y no dejarlo descansar nunca. Se le sigue el rastro, se le levanta cada vez que se para a la sombra, y al cabo de varias horas se derrumba sin poder seguir.",
        },
        {
          forma: "texto",
          texto:
            "Conviene precisar el alcance de esa evidencia, porque suele exagerarse. Se han documentado unas pocas cacerías de ese tipo en muy pocos grupos, y no está demostrado que fuera la forma principal de cazar de nuestros antepasados; es una hipótesis plausible y bien argumentada, no un hecho establecido.",
        },
        {
          forma: "texto",
          texto:
            "Hay además una explicación alternativa que compite con ella. Puede que esos mismos rasgos evolucionaran para recorrer distancias largas buscando comida y carroña, sin ninguna persecución de por medio, y las dos hipótesis predicen la misma anatomía y son difíciles de separar.",
        },
        {
          forma: "texto",
          texto:
            "También conviene distinguir dos afirmaciones que el libro mezcla continuamente. Que el cuerpo humano evolucionó para correr largo es una tesis defendible con anatomía; que por eso debas correr descalzo por el asfalto de tu ciudad es un salto que la anatomía no autoriza.",
        },
        {
          forma: "texto",
          texto:
            "Ese salto de la evolución a la recomendación práctica es el error más repetido en la divulgación. Que un rasgo se seleccionara hace dos millones de años no dice nada sobre qué te conviene hoy con cuarenta años, sobrepeso y una vida entera sentado en una silla.",
        },
        {
          forma: "texto",
          texto:
            "El propio Lieberman ha insistido después en esa distinción muchas veces. Dice que su trabajo describe cómo se apoya el pie y qué fuerzas se generan, y que nunca ha demostrado que una forma de correr prevenga lesiones, que es lo que todo el mundo le atribuye.",
        },
        {
          forma: "texto",
          texto:
            "En su libro posterior sobre el ejercicio lo dice con más claridad todavía. Sostiene que no hay una única forma correcta de correr, que la mayoría de la gente se adapta bien a lo que hace, y que los cambios bruscos son lo que causa problemas.",
        },
        {
          forma: "texto",
          texto:
            "Esa parte evolutiva del libro sigue siendo la más sólida quince años después.",
        },
        {
          forma: "texto",
          texto:
            "Y es la única que no depende de qué lleves puesto en los pies.",
        },
      ],
    },
    {
      titulo: "La carrera de 2006",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El clímax del libro es una carrera de unos ochenta kilómetros organizada en marzo de 2006 en el fondo de las barrancas. La monta Caballo Blanco por su cuenta, con financiación mínima, y consigue llevar hasta allí a varios de los mejores corredores de ultrafondo de Estados Unidos.",
        },
        {
          forma: "texto",
          texto:
            "La carrera se llamaba entonces Copper Canyon Ultra Marathon y no tenía nada de profesional. Sin cronometraje electrónico, sin control médico, sin avituallamientos organizados más allá de unas mesas con agua y comida traída por las familias de las rancherías cercanas. El premio era maíz.",
        },
        {
          forma: "texto",
          texto:
            "El más conocido de ellos es Scott Jurek, que por entonces había ganado siete veces seguidas la carrera de cien millas más famosa del país. Llega a un cañón mexicano sin apenas infraestructura, con calor, polvo y un recorrido que nadie ha medido con precisión.",
        },
        {
          forma: "texto",
          texto:
            "Jurek aparece en el libro como el contrapunto del corredor profesional moderno. Vegetariano estricto, meticuloso con la nutrición y con el material, y aun así derrotado por un hombre que corría con neumático reciclado en los pies y sin haber medido nunca nada.",
        },
        {
          forma: "texto",
          texto:
            "Jurek contó después su versión de aquella carrera en su propio libro de memorias. La describe como una experiencia extraordinaria y a la vez poco formal, con un recorrido mal medido y un ambiente de fiesta, lejos del duelo deportivo que sugiere el relato del libro.",
        },
        {
          forma: "clave",
          rotulo: "Quién ganó",
          frase: "Arnulfo Quimare, rarámuri, con huaraches de neumático. Jurek entró segundo, y llevaba las mejores zapatillas del mercado.",
        },
        {
          forma: "texto",
          texto:
            "Conviene no sacar de ese resultado más de lo que dice. Una carrera es una carrera: participaron unas decenas de personas, los locales conocían el terreno y llevaban toda la vida corriéndolo, y de ahí no se deduce nada sobre qué calzado conviene a nadie.",
        },
        {
          forma: "texto",
          texto:
            "El reparto de personajes es lo que convierte el capítulo en una película. Una corredora de veintipocos años que sale de fiesta la noche antes, un tipo apodado Ted el Descalzo que corre literalmente sin nada, un par de hermanos jóvenes y unos cuantos rarámuri de todas las edades.",
        },
        {
          forma: "texto",
          texto:
            "El detalle que más se recuerda de aquella carrera es la ropa de los locales. Los rarámuri corrieron con camisas anchas de colores, faldas tradicionales y las sandalias de siempre, mientras los estadounidenses llevaban tejidos técnicos, geles y relojes con altímetro.",
        },
        {
          forma: "texto",
          texto:
            "El propio McDougall corre la carrera, y esa decisión es la clave del libro. Un periodista que llega sin poder correr diez kilómetros sin lesionarse termina una prueba de ochenta en un cañón, y esa transformación personal es lo que el lector recuerda y lo que convence.",
        },
        {
          forma: "texto",
          texto:
            "Su preparación la dirige un entrenador excéntrico que aparece a mitad del libro. Le quita las zapatillas caras, le hace correr descalzo por la hierba, le baja el ritmo hasta poder hablar mientras corre y le prohíbe subir el kilometraje deprisa. Lo último es probablemente lo que más le sirvió.",
        },
        {
          forma: "arte",
          texto:
            "Como argumento científico, sin embargo, esa transformación no vale nada. Es un caso, sin control, sin medición y contado por el propio protagonista, exactamente el mismo tipo de prueba que el experimento de Stanford de Respira, que también está en este catálogo.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "El propio autor no lo presenta como prueba, y ahí es justo con el lector. El problema no está en el libro sino en cómo se leyó: millones de personas tomaron una historia personal bien contada por una demostración de que el método funciona en cualquiera.",
        },
        {
          forma: "texto",
          texto:
            "El detalle que sí es informativo es cómo corren los rarámuri, y ahí hay observación real. Apoyan con la parte delantera o media del pie, dan pasos cortos y muy frecuentes, llevan el cuerpo erguido y no golpean el suelo con el talón por delante de la cadera.",
        },
        {
          forma: "texto",
          texto:
            "Ese patrón no tiene nada de exótico y aparece solo en cuanto uno se descalza. Cualquiera que corra unos metros descalzo sobre asfalto deja de aterrizar con el talón en la primera zancada, porque duele, y ese ajuste automático es todo el argumento del capítulo.",
        },
        {
          forma: "texto",
          texto:
            "Esa manera de correr tiene una consecuencia mecánica medible. Cuando se aterriza con el talón y la pierna estirada, aparece un pico de fuerza muy brusco al principio del apoyo; aterrizando con el antepié ese pico desaparece y la carga se reparte por el tendón y el gemelo.",
        },
        {
          forma: "texto",
          texto:
            "Ese pico brusco tiene nombre técnico y se llama transitorio de impacto. Aparece en los primeros milisegundos del apoyo, se transmite por la tibia hacia arriba, y es lo que se siente como un golpe seco cuando uno corre con el talón por delante de la cadera.",
        },
        {
          forma: "texto",
          texto:
            "Ese hallazgo se publicó formalmente en 2010, un año después del libro. Lieberman midió a corredores keniatas habitualmente descalzos y a corredores calzados, y documentó exactamente esa diferencia en los registros de fuerza, que es un dato físico y no una opinión.",
        },
        {
          forma: "texto",
          texto:
            "El experimento se hizo con una plataforma que mide la fuerza contra el suelo durante el apoyo. En un corredor calzado que aterriza de talón aparece un pico brusco en los primeros milisegundos; en uno descalzo que aterriza con el antepié, la curva sube suave y ese pico no existe.",
        },
        {
          forma: "texto",
          texto:
            "Un matiz de aquel experimento se olvida siempre al citarlo. También había corredores calzados que aterrizaban con el mediopié y descalzos que llegaban de talón, de modo que el calzado inclina la forma de apoyar pero no la determina, y hay gente que corre de talón toda su vida sin problema.",
        },
        {
          forma: "texto",
          texto:
            "Lo que ese estudio no midió, y aquí está todo el problema, son las lesiones. Demostró que cambia el patrón de fuerzas, no que ese cambio proteja de nada, y la distancia entre esas dos frases es la que separa un buen hallazgo de una moda mundial.",
        },
        {
          forma: "texto",
          texto:
            "La aclaración importa porque un impacto brusco no es lo mismo que un daño. El hueso y el tendón se adaptan a cargas repetidas si se les da tiempo, y una fuerza más suave repartida durante más rato puede acabar haciendo tanto daño como un golpe.",
        },
        {
          forma: "texto",
          texto:
            "La carrera acabó con todos abrazándose y con maíz repartido por las rancherías.",
        },
        {
          forma: "texto",
          texto:
            "Y con un libro que iba a cambiar una industria de miles de millones.",
        },
      ],
    },
    {
      titulo: "La demanda de las zapatillas",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El argumento comercial del libro es una acusación directa contra la industria. Sostiene que la zapatilla amortiguada moderna nació en los años setenta, que desde entonces las lesiones no han bajado, y que el acolchado invita a aterrizar de talón porque anestesia el golpe.",
        },
        {
          forma: "texto",
          texto:
            "Esa acusación llegó en un momento en que el mercado del calzado deportivo movía decenas de miles de millones de dólares al año. Un libro que sugería que el producto principal de ese negocio hacía daño tenía garantizada la conversación, y la tuvo durante años.",
        },
        {
          forma: "texto",
          texto:
            "La primera parte de esa acusación es histórica y correcta. Antes de los años setenta se corría con zapatillas planas y finas, la amortiguación gruesa es un invento comercial de esa década, y no existe ninguna prueba de que su aparición redujera la tasa de lesiones.",
        },
        {
          forma: "texto",
          texto:
            "La suela acolchada moderna nació además de un experimento casero muy citado. Un entrenador estadounidense vertió goma en la plancha de hacer gofres de su cocina para fabricar una suela con relieve, y de aquel invento salió la marca que dominaría el mercado durante medio siglo.",
        },
        {
          forma: "clave",
          rotulo: "Lo que pasó después",
          frase: "El libro creó un mercado entero de calzado minimalista. Cuatro años después, una de esas marcas pagó millones para cerrar una demanda por publicidad engañosa.",
        },
        {
          forma: "texto",
          texto:
            "El movimiento tuvo además su propia liturgia y sus propios excesos. Grupos de gente corriendo descalza por parques, foros discutiendo el grosor de las suelas en milímetros, y una fe considerable en que quitarse el acolchado arreglaba lo que llevaba años doliendo. La prisa fue el problema, no la idea.",
        },
        {
          forma: "texto",
          texto:
            "La marca en cuestión vendía unas zapatillas con dedos separados que se hicieron famosísimas. Anunciaba que fortalecían los músculos del pie y reducían las lesiones, no pudo respaldar esas afirmaciones con estudios, y en 2012 aceptó pagar unos millones de dólares para devolver el dinero a los compradores.",
        },
        {
          forma: "texto",
          texto:
            "El acuerdo se cerró sin reconocer culpa, como suele ocurrir en estos casos. La empresa mantuvo que sus productos eran buenos y aceptó pagar para no ir a juicio, y a partir de entonces cambió la publicidad para no prometer beneficios de salud que no pudiera demostrar.",
        },
        {
          forma: "texto",
          texto:
            "Los ensayos que se hicieron en aquellos años no ayudaron a la causa. Varios trabajos con corredores repartidos al azar entre calzado minimalista y convencional encontraron más lesiones en el grupo minimalista, sobre todo fracturas por estrés en los huesos del metatarso.",
        },
        {
          forma: "texto",
          texto:
            "Hubo además una serie de casos clínicos que llamó mucho la atención de los traumatólogos. Corredores que cambiaron de calzado y aparecieron a las pocas semanas con edema en los huesos del pie visible en resonancia, un daño previo a la fractura que antes casi no se veía.",
        },
        {
          forma: "arte",
          texto:
            "La explicación de esas fracturas es sencilla y era previsible. Pasar de una zapatilla acolchada a una suela de tres milímetros cambia la carga de la rodilla a la pantorrilla y al pie, y el hueso tarda meses en adaptarse, mientras que el entusiasmo del lector duraba dos semanas.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "La recomendación sensata que salió de aquel desastre es aburridísima y funciona. Si alguien quiere cambiar de calzado, que reduzca a la mitad su kilometraje, que suba muy poco a poco durante varios meses y que pare al primer aviso del pie o de la pantorrilla.",
        },
        {
          forma: "texto",
          texto:
            "El mercado minimalista creció como la espuma y se hundió igual de rápido. Llegó a mover cientos de millones de dólares hacia 2012 y a partir de 2014 se desplomó, y las mismas marcas se pasaron al extremo contrario con zapatillas de amortiguación gigantesca.",
        },
        {
          forma: "texto",
          texto:
            "Las zapatillas de suela gruesa que dominan hoy las tiendas son la respuesta a aquello. Se venden con el argumento contrario, que cuanto más blando mejor, y las revisiones tampoco encuentran que reduzcan las lesiones respecto a las de antes. El péndulo cambió de lado; la evidencia, no.",
        },
        {
          forma: "texto",
          texto:
            "Ese giro completo del péndulo es la mejor lección del episodio entero. En diez años, la industria vendió primero que el acolchado sobraba y después que cuanto más acolchado mejor, con la misma seguridad en las dos direcciones y con la misma ausencia de pruebas sólidas.",
        },
        {
          forma: "texto",
          texto:
            "El único calzado con algo parecido a una prueba sólida es otro. Las zapatillas con placa de fibra de carbono, aparecidas en 2016, mejoran de forma medible la economía de carrera, y eso se refiere al rendimiento y no a las lesiones, que es la pregunta que sigue abierta.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí ha resistido de todo aquello es más modesto y más útil. Aumentar la frecuencia de zancada entre un cinco y un diez por ciento reduce la carga en la rodilla y en la cadera, y eso está medido varias veces y no requiere comprar nada.",
        },
        {
          forma: "texto",
          texto:
            "La manera práctica de aplicarlo es contar los pasos durante un minuto y subirlos un poco. Si salen ciento sesenta, apuntar a ciento setenta acortando la zancada sin correr más rápido, y mantener eso unas semanas hasta que deje de requerir atención consciente.",
        },
        {
          forma: "texto",
          texto:
            "También ha resistido lo que los entrenadores llevaban diciendo desde siempre. El factor de riesgo mejor establecido para lesionarse corriendo no es el calzado ni la técnica: es aumentar demasiado deprisa el volumen de entrenamiento, y eso lo controla cada uno con un calendario.",
        },
        {
          forma: "texto",
          texto:
            "El otro factor con buen respaldo es haberse lesionado antes. Quien ya ha tenido una lesión corriendo tiene bastante más probabilidad de volver a lesionarse, lo que apunta a que buena parte del problema está en volver demasiado pronto y no en el material que se lleva puesto.",
        },
        {
          forma: "texto",
          texto:
            "Conviene precisar lo que el libro no llega a decir, porque se le atribuye entero. No dice que haya que correr descalzo por la ciudad, ni que las zapatillas causen todas las lesiones, y el propio McDougall repitió después que su tema era la forma de correr y no el calzado.",
        },
        {
          forma: "texto",
          texto:
            "El destino del libro se parece bastante al de Respira y al de La digestión es la cuestión, sus vecinos de catálogo. Un periodista encuentra un fenómeno real, lo cuenta de maravilla, se pasa de frenada en la conclusión, y diez años después queda un tercio del contenido en pie.",
        },
        {
          forma: "texto",
          texto:
            "Caballo Blanco murió en 2012 corriendo solo por el monte, de una enfermedad de corazón.",
        },
        {
          forma: "texto",
          texto:
            "La carrera de las barrancas se sigue celebrando, y los rarámuri siguen ganándola.",
        },
      ],
    },
  ],
};

export const DILEMA_OMNIVORO: Resumen = {
  id: "dilema-omnivoro",
  titulo: "El dilema del omnívoro",
  autor: "Michael Pollan",
  ano: 2006,
  gancho: "Siguió cuatro comidas hasta su origen. Una de ellas venía casi entera de una sola planta: el maíz.",
  porQue:
    "Es el libro que cambió la conversación pública sobre comida, y conviene saber qué demostró y qué solo insinuó.",
  partes: [
    {
      titulo: "El pasillo del supermercado",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Un supermercado estadounidense medio tenía en 2006 unos cuarenta y cinco mil productos distintos en sus estanterías. Michael Pollan empieza el libro plantado en uno de esos pasillos con una pregunta que suena tonta y no lo es: qué debería cenar esta noche y por qué.",
        },
        {
          forma: "texto",
          texto:
            "Ese número de referencias creció además muy deprisa en pocas décadas. Un supermercado de los años cincuenta tenía unos pocos miles de productos, y el salto hasta las decenas de miles ocurre a la vez que el maíz barato y la industria de los aditivos.",
        },
        {
          forma: "texto",
          texto:
            "El término que da título al libro no es suyo y conviene decirlo. Lo acuñó el psicólogo Paul Rozin en los años setenta estudiando por qué las ratas y las personas se acercan a la comida nueva con una mezcla de curiosidad y miedo que ningún koala necesita tener.",
        },
        {
          forma: "texto",
          texto:
            "Rozin describió una tensión entre dos impulsos que tenemos a la vez. La neofilia empuja a probar lo desconocido, porque puede ser alimento nuevo; la neofobia frena, porque puede ser veneno, y el resultado es un animal que come de todo y desconfía de todo.",
        },
        {
          forma: "clave",
          rotulo: "El dilema",
          frase: "Un animal que solo come una cosa nunca tiene que elegir. Nosotros podemos comer casi todo, y por eso necesitamos una cultura que nos diga qué es comida.",
        },
        {
          forma: "texto",
          texto:
            "Esa cultura resuelve el problema sin que nadie tenga que pensarlo cada día. Una cocina heredada dice qué se come, con qué se acompaña, en qué cantidad y en qué momento del año, y funciona como un filtro que ahorra decisiones a quien la recibe.",
        },
        {
          forma: "texto",
          texto:
            "Pollan no era ni cocinero ni nutricionista cuando escribió esto. Era periodista de revista y profesor de escritura en Berkeley, había publicado un libro sobre plantas domesticadas cinco años antes, y llegó a la comida por el jardín y no por la salud, y esa procedencia se nota en todo el libro.",
        },
        {
          forma: "texto",
          texto:
            "Aquel libro anterior contaba la historia de cuatro plantas domesticadas desde el punto de vista de las plantas. La idea era que la manzana, el tulipán, el cannabis y la patata nos han usado a nosotros para extenderse, y esa inversión reaparece entera aquí con el maíz.",
        },
        {
          forma: "texto",
          texto:
            "Su método es sencillo de explicar y costoso de ejecutar. Elige cuatro comidas concretas, las sigue hacia atrás hasta el suelo del que salieron, y cuenta lo que se encuentra por el camino sin resumirlo en consejos ni en tablas de nutrientes. Ese recorrido le llevó varios años de viajes.",
        },
        {
          forma: "texto",
          texto:
            "Ese método tiene un nombre viejo en periodismo y una ventaja evidente. Seguir la cosa concreta hasta el final obliga a visitar sitios reales y a hablar con quien está allí, y produce escenas que ninguna estadística sobre consumo alimentario puede producir por sí sola.",
        },
        {
          forma: "texto",
          texto:
            "Las cuatro comidas organizan el libro entero y conviene tenerlas presentes. Un menú de hamburguesería comido en el coche, una cena comprada en una cadena de supermercados ecológicos, otra hecha con productos de una granja de Virginia, y una última que caza y recolecta él mismo.",
        },
        {
          forma: "texto",
          texto:
            "Cada comida corresponde además a un tipo de cadena alimentaria distinta. La industrial, la ecológica de gran escala, la de la granja que cierra sus propios ciclos y la de cazar y recolectar. Van ordenadas de la más opaca a la más transparente, y esa progresión es también la del lector.",
        },
        {
          forma: "arte",
          texto:
            "Aquellos cuarenta y cinco mil productos vienen en realidad de un puñado muy pequeño de especies. Detrás de la mayoría hay maíz, soja, trigo y arroz transformados de mil maneras, de modo que la variedad del pasillo es sobre todo variedad de envases y de aditivos.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "La consecuencia práctica es que la etiqueta de ingredientes se ha vuelto ilegible. Nombres como jarabe de maíz de alta fructosa, dextrosa, maltodextrina, almidón modificado o ácido cítrico designan casi siempre lo mismo, el mismo grano tratado de formas distintas en la misma planta de molienda húmeda.",
        },
        {
          forma: "texto",
          texto:
            "La tesis cultural del libro es que a Estados Unidos le falta una cocina heredada. Sin una tradición que diga qué se come y en qué orden, cada pocos años una nación entera cambia de dieta según lo que digan los titulares y la industria.",
        },
        {
          forma: "texto",
          texto:
            "Ese argumento tiene una debilidad que conviene señalar. Estados Unidos sí tiene cocinas heredadas, muchas y muy vivas, traídas por quienes llegaron de México, de Italia, del sur rural o de Asia, y Pollan escribe como si el país fuera solo el suburbio de clase media.",
        },
        {
          forma: "texto",
          texto:
            "Los ejemplos que usa son de su época y siguen sirviendo. La grasa fue el enemigo en los años ochenta, el hidrato de carbono lo fue a partir de 2003 con el auge de las dietas bajas en pan, y en los dos casos la industria reformuló y siguió vendiendo.",
        },
        {
          forma: "texto",
          texto:
            "A ese vaivén lo llama un trastorno alimentario nacional, y la expresión es más literaria que clínica. Describe bien la sensación de ir dando bandazos, pero no está midiendo nada y conviene leerla como una metáfora y no como el diagnóstico clínico de una población.",
        },
        {
          forma: "texto",
          texto:
            "Lo que este libro no es, aunque medio mundo lo cite así, es un libro de dietas. No hay menús, ni raciones, ni una lista de alimentos prohibidos, y su única recomendación explícita aparece de pasada y en las últimas páginas. Ni siquiera hay una lista de la compra.",
        },
        {
          forma: "texto",
          texto:
            "Tampoco es un alegato vegetariano, y esto sorprende a mucha gente. Pollan dedica un capítulo entero a leer a un filósofo animalista, se toma en serio sus argumentos y acaba defendiendo comer carne bajo condiciones muy concretas, no dejar de comerla. Su postura final es comer menos y saber de dónde viene.",
        },
        {
          forma: "texto",
          texto:
            "El libro salió en 2006 y llegó en el momento exacto. Se apoyaba en un reportaje anterior sobre comida rápida, coincidió con un documental que lo popularizó dos años después, y de ahí salió lo que en Estados Unidos se llamó el movimiento por la comida.",
        },
        {
          forma: "texto",
          texto:
            "El efecto sobre el mercado fue rápido y no siempre el que él quería. Las ventas de productos ecológicos se dispararon, los mercados de agricultores se multiplicaron, y a la vez las grandes cadenas descubrieron que la palabra local vendía tanto como la palabra ecológico.",
        },
        {
          forma: "texto",
          texto:
            "Todo el libro cabe en una pregunta muy vieja: de dónde viene esto que me estoy comiendo.",
        },
        {
          forma: "texto",
          texto:
            "Las respuestas son cuatro, y solo una de ellas es cómoda.",
        },
      ],
    },
    {
      titulo: "El mar de maíz de Iowa",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El primer viaje lo lleva a la granja de George Naylor, en el condado de Greene, en Iowa. Son unas doscientas hectáreas de maíz y soja donde antes hubo vacas, gallinas, frutales y una familia entera trabajando, y ahora hay un hombre y dos máquinas.",
        },
        {
          forma: "texto",
          texto:
            "Naylor no es un agricultor cualquiera y por eso lo elige. Preside una organización de granjeros críticos con la política agraria del país y conoce al céntimo los números de su propia ruina. Su granja alimenta a más de cien personas y no da de cenar a su familia.",
        },
        {
          forma: "texto",
          texto:
            "La comparación entre generaciones es lo que mejor explica el sistema. El abuelo de Naylor sacaba unos veinte fanegas por acre, él saca casi diez veces más, y a pesar de eso gana menos dinero por hectárea que ninguno de sus antepasados. El grano vale hoy menos de lo que cuesta producirlo.",
        },
        {
          forma: "texto",
          texto:
            "La razón de esa paradoja está en el precio y no en la productividad. Cuando todo el mundo cosecha el doble, el grano vale la mitad, de modo que el aumento de rendimiento acaba en manos de quien compra el maíz y no de quien lo siembra.",
        },
        {
          forma: "texto",
          texto:
            "Conviene aclarar qué maíz es ese, porque no es el de la mazorca. Es maíz de campo, duro y casi incomible tal cual, cultivado para molerlo y transformarlo, y ni un grano de esa cosecha llegará jamás a una mesa con la forma de maíz.",
        },
        {
          forma: "clave",
          rotulo: "Dónde acaba",
          frase: "Pienso para animales, jarabe para refrescos, almidón, aceite, alcohol y una lista larga de aditivos con nombres de laboratorio.",
        },
        {
          forma: "texto",
          texto:
            "Ese jarabe de maíz merece un párrafo aparte porque explica media dieta estadounidense. Se obtiene tratando el almidón con enzimas hasta convertirlo en un azúcar líquido barato, y a partir de los años ochenta sustituyó al azúcar de caña en casi todos los refrescos del país.",
        },
        {
          forma: "texto",
          texto:
            "La prueba más elegante del libro es química y viene de un laboratorio de Berkeley. El maíz fija el carbono de una manera algo distinta a otras plantas, deja una firma isotópica reconocible, y esa firma se puede buscar después en el pelo y en los tejidos de quien lo come.",
        },
        {
          forma: "texto",
          texto:
            "El biólogo que hizo esas mediciones, Todd Dawson, resume el resultado con una frase que Pollan repite. Dice que los norteamericanos, vistos con ese método, parecemos patatas fritas de maíz con piernas, porque nuestra firma de carbono se parece más a la del maíz que la de un mexicano.",
        },
        {
          forma: "texto",
          texto:
            "Conviene precisar qué demuestra y qué no demuestra esa medición. Dice de dónde viene el carbono que llevamos encima, no que ese carbono nos haga daño, y es un dato sobre el origen de la comida y no sobre sus efectos en el cuerpo de nadie.",
        },
        {
          forma: "texto",
          texto:
            "Nada de esto sería posible sin un invento alemán de principios del siglo veinte. Fritz Haber encontró la manera de fabricar amoníaco a partir del nitrógeno del aire, y con eso convirtió un elemento inagotable pero inservible en el fertilizante que sostiene la agricultura moderna.",
        },
        {
          forma: "texto",
          texto:
            "Antes de ese invento, todo el nitrógeno disponible venía de seres vivos o de minas. Estiércol, leguminosas que lo fijan en sus raíces y guano traído en barco desde islas del Pacífico, y esa escasez era el techo real de la población humana del planeta.",
        },
        {
          forma: "texto",
          texto:
            "El personaje es de los que no caben en una casilla. Haber recibió el Nobel de Química en 1918 y también dirigió el programa alemán de gas venenoso en la Primera Guerra Mundial, incluido el ataque con cloro de Ypres en 1915. Su mujer se suicidó pocos días después de aquel ataque.",
        },
        {
          forma: "texto",
          texto:
            "La cifra que se cita siempre sobre ese invento tiene autor conocido. El que la calculó fue Vaclav Smil, y su estimación es que en torno a un cuarenta por ciento de la población mundial está viva gracias al nitrógeno de síntesis. Es una estimación y no una medición, y él lo advierte.",
        },
        {
          forma: "texto",
          texto:
            "El precio de ese fertilizante se paga aguas abajo y se ve desde el aire. Lo que la planta no absorbe se va con la lluvia al río, baja por el Misisipi y alimenta en el golfo de México una zona sin oxígeno donde casi nada puede vivir.",
        },
        {
          forma: "texto",
          texto:
            "La pregunta obvia es por qué siguen sembrando maíz si pierden dinero. La respuesta es una trampa de dos partes: cada agricultor por separado gana produciendo más, y todos juntos hunden el precio, así que el año siguiente tienen que producir todavía más. Salirse exige un acuerdo entre todos, no una decisión individual.",
        },
        {
          forma: "texto",
          texto:
            "La política agraria estadounidense empujó en esa dirección de forma deliberada. A partir de los años setenta, el secretario de Agricultura Earl Butz animó a los granjeros a sembrar hasta el último palmo y a hacerse grandes o irse, y el sistema de ayudas se rediseñó para premiar el volumen.",
        },
        {
          forma: "arte",
          texto:
            "El segundo viaje del capítulo es a un cebadero de Kansas donde Pollan compra un novillo. Le pone el número quinientos treinta y cuatro, lo sigue durante meses y describe el corral, el barro, el olor y la montaña de maíz molido que constituye toda su dieta.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "El recorrido del animal está contado con fechas y lugares. Nace en una explotación de Dakota del Sur, mama seis meses de una vaca en pasto, y a partir de ahí pasa a un corral donde vive de maíz hasta que pesa lo suficiente para el matadero.",
        },
        {
          forma: "texto",
          texto:
            "Un rumen no evolucionó para digerir grano y eso tiene consecuencias médicas. La acidez del estómago sube, aparecen hinchazones y abscesos en el hígado, y por eso el pienso lleva antibióticos de forma rutinaria, no para curar una infección sino para que el animal aguante la dieta.",
        },
        {
          forma: "texto",
          texto:
            "El uso rutinario de antibióticos en pienso es hoy el punto más caliente de este capítulo. Se le relaciona con la aparición de bacterias resistentes, la Unión Europea lo prohibió como promotor del crecimiento en 2006 y Estados Unidos lo restringió bastantes años más tarde.",
        },
        {
          forma: "texto",
          texto:
            "Esta parte conversa directamente con Sapiens, que también está en el catálogo. Harari sostiene que fue el trigo el que nos domesticó a nosotros y no al revés, y Pollan dice exactamente lo mismo del maíz, que ha conquistado medio planeta usándonos de brazos.",
        },
        {
          forma: "texto",
          texto:
            "Un dato del libro ha envejecido y conviene actualizarlo.",
        },
        {
          forma: "texto",
          texto:
            "Desde 2007, una parte enorme del maíz estadounidense va a fabricar etanol para los coches.",
        },
      ],
    },
    {
      titulo: "La etiqueta que dice ecológico",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La segunda comida la compra en una cadena de supermercados ecológicos y la lee antes de cocinarla. Los envases cuentan historias de granjas familiares, de gallinas que corretean y de vacas contentas, y Pollan se dedica a comprobar cuántas de esas historias resisten una visita.",
        },
        {
          forma: "texto",
          texto:
            "La cadena en cuestión había convertido esa prosa en su modelo de negocio. Vendía a un precio bastante alto la sensación de estar comprando en un mercado de pueblo, con pizarras escritas a mano y cajones de madera dentro de una nave de supermercado enorme.",
        },
        {
          forma: "texto",
          texto:
            "Al género literario de esas etiquetas le pone un nombre que hizo fortuna. Lo llama pastoral de supermercado: una prosa que no miente del todo pero que describe una granja que ya no existe, con establos de madera y prados que en la realidad son naves y campos enormes.",
        },
        {
          forma: "texto",
          texto:
            "El nombre viene de un género antiguo de la literatura. La poesía pastoral inventó hace siglos un campo idealizado de pastores felices que nunca existió, escrito por gente de ciudad para gente de ciudad, y la etiqueta del supermercado hace exactamente lo mismo con una granja.",
        },
        {
          forma: "texto",
          texto:
            "El ejemplo más recordado es un pollo con nombre de mujer que se vendía como criado en libertad. Pollan visita la instalación y encuentra una nave larga con una puertecita al patio que se abre solo las dos últimas semanas, cuando los pollos ya no salen porque no saben.",
        },
        {
          forma: "texto",
          texto:
            "La expresión criado en libertad no estaba regulada de forma estricta y ahí está el truco. Bastaba con que existiera acceso al exterior, sin fijar cuánto espacio, durante cuánto tiempo ni desde qué edad, y una puerta abierta dos semanas cumplía la norma sin cambiar nada.",
        },
        {
          forma: "texto",
          texto:
            "El otro ejemplo es la ensalada lavada y embolsada que se vende en toda California. Sale de una empresa que cultiva miles de hectáreas de lechuga ecológica en monocultivo, la lava con agua clorada y la reparte en camión por todo el país en cajas refrigeradas.",
        },
        {
          forma: "texto",
          texto:
            "Ese lavado tiene además una consecuencia que sorprende. La ensalada embolsada se enjuaga con agua clorada precisamente porque una hoja que ha pasado por una planta industrial necesita desinfección, de modo que un producto ecológico llega a casa habiendo tocado más cloro que uno del huerto.",
        },
        {
          forma: "clave",
          rotulo: "Lo que certifica el sello",
          frase: "Cómo se cultivó una planta, no cómo vivió un animal, ni cuánta energía costó, ni de qué tamaño era la granja.",
        },
        {
          forma: "texto",
          texto:
            "Hay además una parte de la cadena que ninguna etiqueta cubre. El transporte, el envasado en plástico, la refrigeración durante días y el reparto en camión pesan mucho en el gasto energético del producto, y el sello ecológico no dice absolutamente nada sobre ninguno de ellos.",
        },
        {
          forma: "texto",
          texto:
            "Esa distinción es la clave del capítulo y casi nadie la tiene clara. La norma ecológica es una lista de insumos permitidos y prohibidos, y una empresa gigantesca puede cumplirla entera sin parecerse en nada a la granja que sale dibujada en el envase. El sello mide insumos, no paisajes.",
        },
        {
          forma: "texto",
          texto:
            "La historia de cómo se llegó a esa norma explica bastante. Una ley de 1990 encargó al Departamento de Agricultura definir la palabra ecológico, el sello nacional no llegó hasta 2002, y en esos doce años hubo una pelea larga sobre qué dejaba fuera y qué no.",
        },
        {
          forma: "texto",
          texto:
            "En aquella pelea se decidieron cosas que hoy damos por evidentes. Si valía el estiércol de granjas industriales, si se podían usar aditivos de síntesis en el procesado, y si una explotación de miles de hectáreas podía llamarse ecológica igual que un huerto de dos hectáreas.",
        },
        {
          forma: "texto",
          texto:
            "Pollan cuenta esa pelea a través de un personaje que la vivió por dentro. Gene Kahn empezó con una granja pequeña en Washington en los años setenta, fue creciendo, acabó vendiendo su marca a una multinacional de cereales y terminó sentado en el comité que escribía las reglas.",
        },
        {
          forma: "texto",
          texto:
            "Su trayectoria resume el capítulo mejor que cualquier argumento. El movimiento ecológico nació contra la agricultura industrial en los años setenta, creció hasta interesar a las grandes empresas, y acabó siendo un departamento dentro de ellas con sus propias normas escritas en parte por él.",
        },
        {
          forma: "arte",
          texto:
            "El caso de la leche ecológica es el que más incomoda al lector. Se puede cumplir la norma con vacas que apenas pisan la hierba, comiendo grano ecológico en un establo, porque durante años la exigencia de pasto estuvo redactada de forma tan vaga que no obligaba a casi nada.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Aquí conviene ser justo con lo que el sello sí garantiza, porque el libro lo pasa deprisa. Sin pesticidas de síntesis ni fertilizante nitrogenado industrial hay menos residuos, menos nitrógeno en los ríos y un suelo con más materia orgánica, y eso está medido y no es poco.",
        },
        {
          forma: "texto",
          texto:
            "Los estudios posteriores han matizado también la parte nutricional. Las revisiones grandes no encuentran diferencias claras de vitaminas o minerales entre lo ecológico y lo convencional, y sí encuentran menos residuos de pesticidas, que es un argumento distinto y bastante más defendible que el primero.",
        },
        {
          forma: "texto",
          texto:
            "El reproche que se le puede hacer a Pollan aquí es de vara de medir. Juzga la agricultura ecológica industrial comparándola con una granja idealizada que nadie prometió, en vez de compararla con la agricultura convencional, que es la alternativa real que tiene delante el comprador.",
        },
        {
          forma: "texto",
          texto:
            "El libro tampoco resuelve el problema del precio, y ese es su punto ciego mayor. La comida que defiende cuesta dos o tres veces más que la del supermercado, él lo reconoce en una página, y la respuesta que da es que deberíamos estar dispuestos a pagarla.",
        },
        {
          forma: "texto",
          texto:
            "Esa respuesta le costó críticas duras y bastante merecidas. Varias investigadoras del ámbito de la alimentación le reprocharon convertir una cuestión de renta y de tiempo en una cuestión de virtud personal, como si comer mal fuera sobre todo una falta de criterio. El reproche apunta a un punto real del libro.",
        },
        {
          forma: "texto",
          texto:
            "Lo que pasó después con el mercado le da parte de razón y parte de disgusto. El sector ecológico estadounidense pasó de nicho a decenas de miles de millones de dólares, y lo consiguió industrializándose todavía más, que es justo lo que el capítulo advertía.",
        },
        {
          forma: "texto",
          texto:
            "La etiqueta cuenta una historia, y la historia no es una mentira ni es la verdad.",
        },
        {
          forma: "texto",
          texto:
            "Es publicidad, y hay que leerla como se lee la publicidad.",
        },
      ],
    },
    {
      titulo: "La hierba de Polyface",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La tercera comida lo lleva a una granja pequeña del valle de Shenandoah, en Virginia, donde pasa una semana trabajando. Se llama Polyface, la lleva una familia apellidada Salatin, y lo primero que le dicen al llegar es que allí no se cultiva comida sino hierba.",
        },
        {
          forma: "texto",
          texto:
            "La finca tiene unas cuarenta hectáreas de pasto y unas ciento sesenta de bosque, y esa proporción no es casual. El bosque de la ladera retiene el agua, da sombra y madera, y para Salatin es parte del sistema y no un terreno sin aprovechar.",
        },
        {
          forma: "texto",
          texto:
            "Joel Salatin se presenta como pastor de hierba y no como ganadero, y la distinción es literal. Todo lo que sale de la granja —carne, huevos, pollos, cerdos— es una forma de vender la luz del sol que ha caído sobre esos prados, convertida en animal.",
        },
        {
          forma: "texto",
          texto:
            "La cuenta que hace es de energía y de superficie. Una hectárea de pasto captura luz todo el año sin que nadie la are ni la abone, y el rumiante es la única máquina capaz de convertir esa hierba indigerible en algo que podamos comer.",
        },
        {
          forma: "texto",
          texto:
            "El sistema empieza con las vacas y con una valla eléctrica que se mueve cada día. Comen una parcela pequeña en pocas horas, se van antes de arrancar la hierba de raíz, y no vuelven a pisarla hasta que se ha rehecho, semanas después. A eso lo llaman pastoreo racional.",
        },
        {
          forma: "texto",
          texto:
            "Ese descanso es todo el secreto y tiene una explicación de fisiología vegetal. Una hierba pastada rebrota usando las reservas de la raíz, y si la vuelven a cortar antes de que las reponga, la planta se debilita y acaba dejando sitio a las malas hierbas.",
        },
        {
          forma: "texto",
          texto:
            "Detrás de las vacas va un gallinero con ruedas al que llaman el huevomóvil. Llega tres días más tarde, justo cuando las larvas de mosca de las boñigas están gordas, y las gallinas las escarban y se las comen, esparcen el estiércol y dejan el suyo propio.",
        },
        {
          forma: "texto",
          texto:
            "El resultado de ese truco es que la granja no necesita comprar dos cosas. No hace falta insecticida contra la mosca del ganado ni antiparasitario rutinario, porque el ciclo de la mosca se rompe cada semana con gallinas en vez de con productos comprados fuera.",
        },
        {
          forma: "clave",
          rotulo: "Por qué tres días",
          frase: "Es el tiempo que tarda la larva en crecer y aún no en volar. Un día antes no hay comida, un día después hay moscas.",
        },
        {
          forma: "texto",
          texto:
            "Ese tipo de cálculo se repite en toda la granja y es lo que la hace difícil de copiar. No hay una receta que se pueda imprimir: hay decenas de decisiones ajustadas a un clima, a una pendiente y a unos animales concretos, aprendidas a lo largo de años.",
        },
        {
          forma: "texto",
          texto:
            "Los pollos de carne viven en jaulas sin suelo que se arrastran un metro cada mañana. Comen la hierba que tienen debajo, dejan su abono repartido en vez de acumulado, y el granjero se ahorra a la vez el pienso, el estiércol y la limpieza de la nave.",
        },
        {
          forma: "texto",
          texto:
            "Esa jaula móvil tiene también sus críticos y conviene decirlo. Los pollos siguen viviendo apretados, en una caja baja y sin poder alejarse, y quien defiende que las aves deberían andar sueltas por el prado no encuentra aquí gran diferencia con una nave, más allá del sol.",
        },
        {
          forma: "texto",
          texto:
            "Los cerdos tienen el trabajo más curioso de la granja. Se les suelta en el establo donde se ha ido apilando la cama de las vacas con maíz enterrado dentro, y ellos la remueven buscándolo, con lo que airean el montón y lo convierten en compost.",
        },
        {
          forma: "arte",
          texto:
            "Un prado bien llevado no se parece a un campo de cultivo ni a un jardín. Tiene decenas de especies distintas mezcladas, altura desigual, raíces de dos metros que sujetan el suelo, y ese suelo va ganando materia orgánica año tras año en vez de perderla.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Ese suelo que gana materia orgánica es el argumento climático de todo el capítulo. Un pasto bien manejado guarda carbono en la tierra, y ese es el punto donde más se ha discutido después, porque las cifras que circulan son mucho más optimistas que las medidas.",
        },
        {
          forma: "texto",
          texto:
            "Los pollos se matan en el patio, al aire libre, y Pollan participa en la tarea. La escena está contada con detalle porque para Salatin la transparencia es el argumento: sostiene que ninguna granja debería hacer nada que no pueda enseñarse a quien llegue sin avisar.",
        },
        {
          forma: "texto",
          texto:
            "Su negativa a distribuir es lo que más desconcierta a los lectores. No vende por correo ni a supermercados, ni siquiera lejos: quien quiera su carne tiene que ir a buscarla, y con eso renuncia a un mercado enorme por una idea sobre lo que significa local.",
        },
        {
          forma: "texto",
          texto:
            "La pregunta que todo el mundo hace, y que el libro no contesta, es si esto da de comer al mundo. Pollan la plantea, reconoce que no tiene la respuesta y sigue adelante, y esa evasiva es el hueco más grande de todo el volumen.",
        },
        {
          forma: "texto",
          texto:
            "Los cálculos que se han hecho desde entonces no le dan la razón del todo. Alimentar a ocho mil millones de personas solo con sistemas de pasto exigiría bastante más superficie agrícola de la que hay, salvo que se comiera mucha menos carne que ahora.",
        },
        {
          forma: "texto",
          texto:
            "Las condiciones que hacen posible Polyface tampoco son universales. Hace falta lluvia abundante, tierra barata, mano de obra familiar y una ciudad cerca con clientes dispuestos a conducir una hora, y muy pocos sitios del planeta reúnen las cuatro cosas a la vez. Virginia las tiene todas y casi nadie más.",
        },
        {
          forma: "texto",
          texto:
            "El retrato del personaje también está lavado, y eso se le ha reprochado. Salatin es un libertario cristiano con opiniones muy duras sobre la regulación y sobre otras cuestiones, y en el libro aparece sobre todo como un artesano simpático y un poco excéntrico. El lector amable no llega a enterarse.",
        },
        {
          forma: "texto",
          texto:
            "Aquí es donde Factfulness, que también está en el catálogo, discutiría con Pollan. Rosling recordaría que el sistema industrial que este libro retrata tan mal es el que hizo desaparecer las hambrunas de casi todo el mundo en dos generaciones.",
        },
        {
          forma: "texto",
          texto:
            "Las dos cosas pueden ser verdad a la vez, y normalmente lo son.",
        },
        {
          forma: "texto",
          texto:
            "El sistema que te da de comer puede estar destrozando el suelo del que come tu nieto.",
        },
      ],
    },
    {
      titulo: "La cena que se cazó él mismo",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La cuarta comida se la propone un cerrajero y cocinero siciliano afincado en San Francisco. Se llama Angelo Garro, se dedica a recolectar y cazar por el norte de California, y se lleva a Pollan al monte de Sonoma a buscar jabalíes con un rifle prestado.",
        },
        {
          forma: "texto",
          texto:
            "Pollan no había cazado nunca y tuvo que sacarse la licencia como cualquiera. Hizo el curso obligatorio de seguridad en California, aprobó el examen, y describe con sorna el manual, lleno de advertencias sobre lo que la gente hace mal con un rifle cargado en la mano.",
        },
        {
          forma: "texto",
          texto:
            "El capítulo de la caza es el mejor escrito del libro y el más incómodo. Cuenta la concentración extraña de esas horas, el disparo, y después la náusea, y admite que no fue capaz de mirar las fotos en las que sale sonriendo junto al animal muerto.",
        },
        {
          forma: "texto",
          texto:
            "Lo que describe de esas horas es un cambio en la atención que le sorprende. Dice que el bosque se le vuelve nítido, que oye cosas que antes no oía y que el tiempo deja de pasar igual, y sospecha que eso es muy viejo y muy poco literario.",
        },
        {
          forma: "texto",
          texto:
            "Esa vergüenza es justo el material que le interesa. Sostiene que comer carne sin ver nunca cómo se obtiene nos ahorra un trabajo moral que antes hacía todo el mundo, y que el matadero cerrado no resuelve el problema sino que lo esconde. Verlo, sostiene, es parte del precio de comerlo.",
        },
        {
          forma: "texto",
          texto:
            "La recolección de setas ocupa la otra mitad del capítulo. Busca colmenillas en un bosque quemado y rebozuelos bajo los robles, y aprende que un aficionado no puede fiarse de su criterio porque la diferencia entre una cena y un trasplante de hígado es sutil.",
        },
        {
          forma: "texto",
          texto:
            "El mundo de los buscadores de setas le da además el mejor material cómico del libro. Son gente que guarda en secreto sus lugares, que miente sobre dónde ha estado y que se reconoce por el barro de las botas, y él acaba entendiendo por qué.",
        },
        {
          forma: "texto",
          texto:
            "El resto del menú lo completa a base de favores y de paseos. Habas de un huerto, cerezas de un árbol de un vecino, pan levantado con levaduras silvestres capturadas del aire de su barrio y sal evaporada del agua de la bahía de San Francisco.",
        },
        {
          forma: "texto",
          texto:
            "Ese menú tiene además una trampa que él mismo señala. Casi nada de lo que sirve podría repetirse fuera del norte de California en primavera, con ese clima, esos bosques y esa costa, así que la comida perfecta es también una comida absolutamente local e irrepetible.",
        },
        {
          forma: "clave",
          rotulo: "Lo que costó",
          frase: "Si se contara el tiempo que le llevó, dice, sería probablemente la comida más cara de la historia.",
        },
        {
          forma: "texto",
          texto:
            "La frase también sirve de aviso contra la lectura moralista del libro. Si la comida honesta exige un mes de trabajo y un maestro siciliano, entonces no es una respuesta para nadie que tenga un empleo, y él lo sabe y lo dice en voz alta.",
        },
        {
          forma: "texto",
          texto:
            "Esa frase es una broma con un fondo serio que se suele pasar por alto. La comida perfecta del libro es un ejercicio de laboratorio, no una propuesta, y él lo dice con todas las letras en el mismo capítulo en el que la sirve.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí pretende ese menú es hacer visible una cadena entera de una sentada. En la comida de la hamburguesería nadie puede rastrear de dónde vino nada; en esta, Pollan puede nombrar el árbol, el bosque y el animal de cada cosa que hay en la mesa.",
        },
        {
          forma: "texto",
          texto:
            "En medio de todo esto se lee entero un clásico de la filosofía animalista. Pollan se lleva a Peter Singer a un restaurante, lo lee mientras se come un solomillo, y reconoce que los argumentos contra el sufrimiento industrial le parecen difíciles de rebatir. El restaurante era una casa de filetes.",
        },
        {
          forma: "texto",
          texto:
            "El libro de Singer se publicó en 1975 y sostiene que el sufrimiento cuenta con independencia de la especie. Pollan acepta ese punto de partida, discute la conclusión, y el capítulo es un ejemplo raro de alguien argumentando contra un autor al que ha entendido.",
        },
        {
          forma: "texto",
          texto:
            "Su conclusión no es la que cabría esperar de esa lectura. No se hace vegetariano: sostiene que el problema no es matar animales sino cómo se los cría, y que una granja como la de Virginia le parece defendible mientras que un cebadero no lo es.",
        },
        {
          forma: "arte",
          texto:
            "Conviene precisar de dónde salen las siete palabras famosas, porque casi todo el mundo las atribuye a este libro. Come comida, no demasiada, sobre todo plantas apareció en un artículo de prensa de 2007 y abre el libro siguiente de Pollan, publicado en 2008. Este libro no las contiene.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "El desliz es comprensible porque los dos libros se leyeron juntos. Pero conviene tenerlo claro: este cuenta de dónde viene la comida y el siguiente dice qué hacer con ella, y solo el segundo tiene la forma de un manual de instrucciones para el lector.",
        },
        {
          forma: "texto",
          texto:
            "El consejo que sí está aquí es distinto y menos memorizable. Viene a decir que comas cosas que tu bisabuela reconocería como comida, que sepas de dónde vienen, y que desconfíes de cualquier producto que necesite anunciar sus beneficios para la salud. No es una regla, es un criterio.",
        },
        {
          forma: "texto",
          texto:
            "Visto veinte años después, el libro acertó en el diagnóstico y falló en la escala. Describió con precisión de qué está hecha la comida barata y quién paga la diferencia, y no supo decir qué hacer con eso más allá de una granja de Virginia.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí se le puede acreditar es un cambio de conversación. Antes de este libro, discutir de comida en público era discutir de calorías y de colesterol; después, se empezó a discutir también de suelo, de trabajadores, de animales y de energía fósil, que es otro mapa.",
        },
        {
          forma: "texto",
          texto:
            "Sus vecinos de catálogo tienen el mismo perfil y el mismo defecto. Respira, La digestión es la cuestión y Nacidos para correr son también periodistas que encuentran algo real, lo cuentan mejor que nadie y se pasan de frenada al proponer la solución.",
        },
        {
          forma: "texto",
          texto:
            "La pregunta del pasillo, en todo caso, sigue sin respuesta fácil.",
        },
        {
          forma: "texto",
          texto:
            "Pero después de este libro cuesta bastante más hacer como que no se ha oído.",
        },
      ],
    },
  ],
};

export const ALIENTO_AIRE: Resumen = {
  id: "aliento-aire",
  titulo: "Cuando el aliento se vuelve aire",
  autor: "Paul Kalanithi",
  ano: 2016,
  gancho: "Neurocirujano de treinta y seis años, a un año de terminar diez de formación. Le diagnosticaron cáncer de pulmón terminal.",
  porQue:
    "Es el libro sobre morir escrito por alguien que se había pasado la vida decidiendo, del otro lado de la mesa, cuánto le quedaba a otros.",
  partes: [
    {
      titulo: "El escáner",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Paul Kalanithi llevaba diez años formándose como neurocirujano en Stanford. Le quedaban meses para terminar y ya tenía ofertas de trabajo. Llevaba tiempo perdiendo peso y con dolor de espalda, y lo había achacado al agotamiento. Un día miró su propio escáner y vio lo que había visto cientos de veces en las pantallas de sus pacientes.",
        },
        {
          forma: "clave",
          rotulo: "El giro",
          frase: "Pasó de ser el médico que da la noticia a ser el paciente que la recibe, en la misma planta del mismo hospital.",
        },
        {
          forma: "arte",
          texto:
            "Cáncer de pulmón en estadio IV, con treinta y seis años y sin haber fumado nunca. El libro lo escribió durante los veintidós meses siguientes, entre tratamientos, y lo dejó sin terminar. Su mujer Lucy, también médica, escribió el epílogo.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "Antes de medicina había estudiado literatura inglesa y filosofía. Cuenta que llegó a la neurocirugía buscando una respuesta a la misma pregunta que buscaba en los libros: qué hace que una vida tenga sentido. Le pareció que el sitio donde eso se decide de verdad era un quirófano donde se opera un cerebro.",
        },
      ],
    },

    {
      titulo: "El otro lado de la mesa",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La primera mitad del libro es su formación, y es lo que hace que la segunda duela. Kalanithi describe cómo se aprende a dar malas noticias, cómo se decide cuándo operar y cuándo no, y cómo un cirujano acaba manejando la estadística como escudo.",
        },
        {
          forma: "texto",
          texto:
            "Cuenta una conversación con un paciente al que tenía que explicar que un tumor le cambiaría la personalidad, y cómo aprendió que lo importante no era la cifra de supervivencia sino averiguar qué era lo que esa persona no estaba dispuesta a perder. Para uno era hablar; para otro, seguir tocando el piano.",
        },
        {
          forma: "clave",
          rotulo: "Lo que descubre siendo paciente",
          frase: "Preguntó a su oncóloga cuánto le quedaba. Ella se negó a darle un número, y él tardó en entender por qué.",
        },
        {
          forma: "arte",
          texto:
            "Su explicación es la mejor página del libro. Con un año, aprovechas el tiempo con tu familia. Con diez, escribes, investigas, vuelves al quirófano. La cifra no es información médica: es lo que decide en qué gastas lo que queda. Y como nadie la sabe de verdad, dar una es quitarle al paciente la posibilidad de vivir en la incertidumbre real.",
          arte: "memoria",
        },
      ],
    },

    {
      titulo: "Volver a operar",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Con el primer tratamiento respondió bien y decidió volver al quirófano. Terminó su residencia. Operaba con dolor, agotado, sabiendo que era temporal, y describe esa vuelta sin ninguna épica: no fue heroísmo, fue que necesitaba seguir siendo quien era mientras pudiera.",
        },
        {
          forma: "texto",
          texto:
            "La decisión más difícil llegó después. Él y Lucy se plantearon si tener un hijo sabiendo que él no llegaría a verlo crecer. Se lo preguntaron a ella misma de la forma más cruda posible: ¿no hará eso que despedirse sea más duro? Y ella respondió que sí, y que precisamente por eso valía la pena.",
        },
        {
          forma: "clave",
          rotulo: "Su hija",
          frase: "Cady nació ocho meses antes de que él muriera. Kalanithi dijo que fue el mejor tiempo de su vida.",
        },
        {
          forma: "texto",
          texto:
            "El libro termina con un mensaje escrito para ella, para que lo lea de mayor. Le dice que en los años en que un hombre valora su vida y calcula lo que ha conseguido, ella le llenó de una alegría que él no conocía y que no le hacía pedir nada más. Es una página muy corta y es la razón por la que este libro se recomienda tanto.",
        },
      ],
    },

    {
      titulo: "El epílogo",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Kalanithi murió en marzo de 2015, con treinta y siete años, sin terminar el libro. Estaba escribiéndolo hasta pocos días antes, con guantes porque el tratamiento le había agrietado las yemas de los dedos.",
        },
        {
          forma: "arte",
          texto:
            "Lucy escribió las últimas veinte páginas, y muchos lectores dicen que son lo mejor del conjunto. Cuenta cómo fueron sus últimas horas, la decisión de no entrar en cuidados intensivos, y cómo la familia le acompañó. No es un final consolador ni pretende serlo.",
          arte: "noche",
        },
        {
          forma: "clave",
          rotulo: "Lo que no hace",
          frase: "No dice que la enfermedad le enseñara nada. No busca un sentido a lo ocurrido. Solo lo cuenta bien.",
        },
        {
          forma: "texto",
          texto:
            "Hay un momento del libro que se cita mucho en las facultades de medicina. Kalanithi describe la tentación del médico de refugiarse en los datos —el porcentaje, el protocolo, la siguiente prueba— porque hablar de cifras es infinitamente más fácil que sentarse al lado de alguien y no tener nada que ofrecerle. Escribe que el trabajo del médico no es aplazar la muerte ni devolver la vida de antes, sino acompañar a una persona y a su familia mientras entienden lo que les está pasando. Y admite que él tardó años en aprenderlo, y que lo terminó de entender desde la cama.",
        },
        {
          forma: "texto",
          texto:
            "Hay que avisar de lo evidente: es un libro que hace llorar y no es lectura ligera. También se le puede reprochar cierto tono solemne en la primera parte, y que la mirada sea la de alguien con una posición privilegiada — un médico de Stanford tratado en su propio hospital no atraviesa lo que atraviesa la mayoría.",
        },
        {
          forma: "texto",
          texto:
            "Con eso dicho, es de los pocos libros que consiguen que un lector sano se plantee la pregunta que el título esquiva: qué es lo que no estarías dispuesto a perder, y si estás organizando tu vida en torno a eso o en torno a otra cosa.",
        },
      ],
    },
  ],
};

export const ZONAS_AZULES: Resumen = {
  id: "zonas-azules",
  titulo: "El secreto de las zonas azules",
  autor: "Dan Buettner",
  ano: 2008,
  gancho: "Cinco sitios del mundo donde la gente llega a los cien años. Y una pregunta incómoda que llegó quince años después: ¿y si muchos no los tuvieran?",
  porQue:
    "Es el libro que metió el ikigai y la dieta mediterránea en medio mundo, y también el mejor caso práctico de cómo se convierte una correlación en un negocio.",
  partes: [
    {
      titulo: "El círculo azul en el mapa",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Año 2000, un despacho de la Universidad de Sassari, en Cerdeña. Dos investigadores están dibujando círculos con un rotulador azul sobre un mapa de la isla. Cada círculo marca un pueblo donde hay muchos más hombres centenarios de los que debería haber.",
        },
        {
          forma: "texto",
          texto:
            "Se llamaban Gianni Pes, médico sardo, y Michel Poulain, demógrafo belga. Llevaban meses cruzando registros civiles y partidas de nacimiento de toda la isla, pueblo por pueblo. Los círculos se iban concentrando en una zona montañosa del interior: la provincia de Nuoro y Ogliastra.",
        },
        {
          forma: "texto",
          texto:
            "El dato que les llamó la atención no era la cantidad, era el sexo. En el mundo entero, por cada hombre que llega a los cien años hay cuatro o cinco mujeres. En aquellos pueblos la proporción era casi de uno a uno, y eso no pasa en ningún otro sitio conocido.",
        },
        {
          forma: "clave",
          rotulo: "De dónde sale el nombre",
          frase: "«Zona azul» no es un concepto científico ni una categoría médica. Es el color del rotulador con el que Pes y Poulain marcaron aquellos pueblos en un mapa de papel.",
        },
        {
          forma: "texto",
          texto:
            "Publicaron el hallazgo en 2004 en una revista de gerontología experimental. Habría sido un artículo técnico más de no ser porque lo leyó un americano que buscaba exactamente eso: un escritor y explorador de National Geographic llamado Dan Buettner.",
        },
        {
          forma: "texto",
          texto:
            "Buettner no era médico ni demógrafo. Era ciclista de fondo y periodista de aventuras: tenía récords Guinness por atravesar África y América en bicicleta y se había especializado en montar expediciones que además contaran una historia. Vio en aquellos círculos azules una expedición perfecta.",
        },
        {
          forma: "texto",
          texto:
            "Propuso a National Geographic una idea sencilla de vender: buscar en el planeta todos los sitios donde la gente vive más y mejor, ir a vivir con ellos, y averiguar qué tienen en común. La revista lo publicó en 2005 con el título «Los secretos de una vida larga».",
        },
        {
          forma: "arte",
          texto:
            "Aquel reportaje fue uno de los más leídos en la historia de la revista, y de ahí salió el libro de 2008. La palabra zona azul dejó de ser una anotación en un artículo técnico y se convirtió en una marca registrada, con documentales, dietas y ciudades enteras suscritas al programa.",
          arte: "mapa",
        },
        {
          forma: "texto",
          texto:
            "El método de Buettner fue el de un reportero, no el de un laboratorio. Fichó a demógrafos para validar los sitios, y luego se fue a vivir a cada uno con un traductor, comió lo que comían, siguió a los viejos a sus huertos y les hizo preguntas durante semanas.",
        },
        {
          forma: "texto",
          texto:
            "Al final se quedó con cinco lugares. Ogliastra, en Cerdeña. Okinawa, en el sur de Japón. La península de Nicoya, en Costa Rica. La isla de Icaria, en Grecia. Y, la más rara de todas, Loma Linda, una ciudad de California a una hora de Los Ángeles.",
        },
        {
          forma: "texto",
          texto:
            "Los cuatro primeros son sitios remotos, pobres hasta hace poco y con poca inmigración. El quinto está en el país con más obesidad del mundo, al lado de una autopista, y es una comunidad religiosa: los adventistas del séptimo día.",
        },
        {
          forma: "texto",
          texto:
            "Ese contraste es el mejor argumento del libro, y Buettner lo sabe. Si los adventistas de California viven diez años más que sus vecinos comiendo lo mismo que se puede comprar en cualquier supermercado americano, entonces no es cuestión de aire puro ni de genética mediterránea.",
        },
        {
          forma: "clave",
          rotulo: "La pregunta del libro",
          frase: "No es «¿por qué unos genes duran más?». Es «¿qué hacen todos los días personas de cinco culturas que no se conocen entre sí y que llegan a los cien?».",
        },
        {
          forma: "texto",
          texto:
            "De ese cruce salió la lista que ha dado la vuelta al mundo, y que Buettner llamó los nueve factores. Conviene decir desde ya lo que son y lo que no son: son coincidencias observadas en cinco poblaciones, no un tratamiento probado en un ensayo clínico.",
        },
        {
          forma: "texto",
          texto:
            "Uno: moverse de forma natural. Ninguno de los centenarios que conoció iba al gimnasio ni corría maratones. Todos tenían vidas donde el movimiento estaba obligado: huertos, escaleras, cuestas, animales, cocinar sin máquinas y caminar porque no había otra manera de llegar.",
        },
        {
          forma: "texto",
          texto:
            "Dos: tener un motivo para levantarse. En Okinawa lo llaman ikigai y en Nicoya, plan de vida. Buettner señala que en ninguno de esos idiomas existe la palabra jubilación en el sentido de dejar de hacer cosas, y que ninguno de aquellos viejos se había retirado de nada.",
        },
        {
          forma: "arte",
          texto:
            "Tres: bajar revoluciones. Todos tenían un ritual diario contra el estrés: la siesta en Icaria, la oración de los adventistas, el rato de recuerdo de los okinawenses ante sus antepasados. No es relajarse por gusto: es un hueco fijo, a la misma hora, todos los días.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Cuatro: la regla del ochenta por ciento. En Okinawa hay una frase que se dice antes de comer, hara hachi bu, que significa comer hasta estar lleno al ochenta por ciento. Como la señal de saciedad tarda unos veinte minutos en llegar, parar antes cambia mucho la cuenta del día.",
        },
        {
          forma: "texto",
          texto:
            "Cinco: mayoría vegetal. Ninguna de las cinco zonas era vegetariana, pero en todas la carne era cosa de fiesta, unas cinco veces al mes. La base eran legumbres: habas y garbanzos en el Mediterráneo, soja en Japón, frijol negro y maíz en Costa Rica.",
        },
        {
          forma: "texto",
          texto:
            "Y los cuatro restantes son sociales, no dietéticos. Vino con moderación, pertenecer a una comunidad de fe, poner a la familia primero y —el que a Buettner le parece el más potente de todos— rodearse de la gente adecuada.",
        },
      ],
    },

    {
      titulo: "Los pastores de Cerdeña",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Villagrande Strisaili, Cerdeña, mil habitantes, colgado en una ladera. Buettner conoce allí a Tonino Tola, un pastor de setenta y cinco años que se levanta a las cinco, ordeña, sube y baja la montaña y a media mañana ya ha andado más que un oficinista en una semana.",
        },
        {
          forma: "texto",
          texto:
            "Los pastores sardos de aquella zona recorrían a pie entre seis y ocho kilómetros diarios, casi todos en pendiente. No era ejercicio: era el trabajo. Buettner insiste en ese matiz porque cambia el consejo entero. Nadie de aquellos pueblos decidía nunca hacer deporte.",
        },
        {
          forma: "texto",
          texto:
            "El paisaje ayuda a entenderlo. Son pueblos donde la calle principal tiene un desnivel que en cualquier ciudad justificaría un ascensor. Ir a por el pan, ir a misa o ir a ver a un primo implica subir. Se envejece con las piernas fuertes porque no hay alternativa.",
        },
        {
          forma: "clave",
          rotulo: "El detalle del vino",
          frase: "En Ogliastra beben cannonau, una uva con más antioxidantes que casi cualquier otra. Uno o dos vasos al día, siempre con comida y siempre con gente. Nunca solos y nunca de golpe.",
        },
        {
          forma: "texto",
          texto:
            "La comida sarda de aquellos pueblos es más sobria de lo que la palabra mediterránea sugiere: pan de cebada, habas, garbanzos, tomate, queso de oveja de animales que pastan hierba, y carne los domingos y las fiestas. La leche de oveja aparece en casi todas las comidas.",
        },
        {
          forma: "texto",
          texto:
            "Pero lo que a Buettner le impresiona no es la dieta, es la posición social del viejo. En Villagrande el abuelo de cien años no está en una residencia: está sentado en la puerta con un bastón, controlando la calle, y todos los que pasan le saludan por su nombre.",
        },
        {
          forma: "arte",
          texto:
            "Cuenta una escena que resume el capítulo: un centenario al que le preguntan cuál es su secreto y contesta que trabajar, y que la familia. Y añade que si dejara de servir para algo, se moriría. La utilidad, en aquellos pueblos, es un tratamiento médico.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Aporta un dato que sostiene esa idea desde fuera: en las culturas donde los mayores viven con sus hijos y cuidan de los nietos, los índices de mortalidad de los abuelos son menores, y también, curiosamente, los de mortalidad infantil de los nietos. Se cuidan en las dos direcciones.",
        },
        {
          forma: "texto",
          texto:
            "También está lo que casi nadie cuenta de Cerdeña: aquellos pueblos fueron muy pobres hasta hace cincuenta años y muy aislados. El aislamiento genético es real, y Pes y Poulain lo tuvieron siempre en cuenta como una de las explicaciones posibles.",
        },
        {
          forma: "texto",
          texto:
            "De hecho la anomalía sarda no es vivir mucho: es que vivan mucho los hombres. Y esa proporción de uno a uno es el punto donde los propios investigadores dijeron desde el principio que hacía falta buscar una causa que no fuera solo el estilo de vida.",
        },
        {
          forma: "texto",
          texto:
            "Buettner recoge esa cautela y luego, en la práctica del libro, la deja de lado. Es una de las cosas que se le reprochan: menciona la genética en un párrafo y dedica el resto a los hábitos, porque los hábitos son lo que un lector americano puede copiar.",
        },
        {
          forma: "texto",
          texto:
            "El siguiente destino es Icaria, una isla griega de ocho mil habitantes a doce horas de barco de Atenas. Buettner llega allí en 2009 y la incorpora al mapa después del libro original; en las ediciones posteriores ya es la quinta zona de pleno derecho.",
        },
        {
          forma: "texto",
          texto:
            "Icaria tiene una fama que ellos mismos cultivan: la isla donde se olvidan de morirse. Los datos que manejaba el equipo hablaban de una probabilidad de llegar a los noventa muy superior a la media europea, y de tasas muy bajas de demencia.",
        },
        {
          forma: "arte",
          texto:
            "Lo que más llama la atención de Icaria es la relación con el reloj. Nadie llega a la hora. Las cenas empiezan a las once y acaban de madrugada. La siesta es diaria y casi obligatoria. Buettner cuenta que le costó semanas conseguir que alguien apareciera cuando había quedado.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "La dieta icariota es la mediterránea de manual, pero con dos cosas propias: comen enormes cantidades de verdura silvestre recogida en el monte, con más antioxidantes que la de invernadero, y beben infusiones de hierbas locales que funcionan además como diuréticos suaves.",
        },
        {
          forma: "texto",
          texto:
            "También hay ayuno, aunque el libro no lo llame así. Los icariotas son cristianos ortodoxos practicantes, y el calendario ortodoxo tiene entre ciento cincuenta y doscientos días de ayuno al año. Comer menos, muchos días, sin llamarlo dieta y sin decidirlo cada mañana.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una historia que se ha contado mil veces: la de Stamatis Moraitis, un icariota emigrado a Estados Unidos al que en 1976 le diagnosticaron cáncer de pulmón terminal y le dieron nueve meses. Volvió a su isla a morir cerca de sus padres.",
        },
        {
          forma: "texto",
          texto:
            "Plantó viñas, empezó a beber vino con sus amigos, se pasaba las tardes en el jardín y no volvió a pisar un hospital. Vivió más de treinta años más. Cuando por fin volvió a Estados Unidos a preguntar qué había pasado, sus médicos ya habían muerto todos.",
        },
        {
          forma: "texto",
          texto:
            "La historia es cierta y también es exactamente el tipo de anécdota que un epidemiólogo señalaría con un círculo rojo: un caso único, sin historial verificado y con un diagnóstico de 1976 que hoy podría discutirse. Buettner la cuenta entera y no la matiza.",
        },
        {
          forma: "texto",
          texto:
            "Ese es el vaivén constante del libro: observaciones sólidas mezcladas con historias irresistibles que no prueban nada. Y la siguiente parada, Okinawa, es donde esa mezcla se ve mejor, porque ahí hay tanto la idea más útil como el problema más gordo.",
        },
      ],
    },

    {
      titulo: "El moai de Okinawa",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Okinawa es una isla subtropical al sur de Japón, a mil quinientos kilómetros de Tokio, con un pasado propio: fue un reino independiente hasta el siglo XIX. Durante décadas fue el sitio del planeta con más centenarios por habitante y con menos infartos, cáncer de mama y demencia.",
        },
        {
          forma: "texto",
          texto:
            "Buettner conoce allí a mujeres de más de cien años que siguen cultivando el huerto de casa, cocinando y recibiendo visitas. Una de ellas, Ushi Okushima, se hizo famosa por el reportaje: pasaba de los cien y seguía yendo a ver a sus amigas todos los días.",
        },
        {
          forma: "texto",
          texto:
            "Y de esas visitas sale la idea más valiosa del libro entero, que además es la más fácil de copiar en cualquier sitio: el moai. En Okinawa, a los niños se les mete de pequeños en un grupo de unos cinco amigos, y ese grupo se compromete de por vida.",
        },
        {
          forma: "clave",
          rotulo: "Moai",
          frase: "Cinco personas que se ven casi todas las semanas durante ochenta años. Se prestan dinero, se cuidan en la enfermedad y se acompañan en la vejez. No es una amistad: es una estructura.",
        },
        {
          forma: "texto",
          texto:
            "El moai empezó siendo una institución económica: los campesinos ponían dinero en común para financiar cosechas o emergencias. Con el tiempo se convirtió en lo que Buettner encuentra en 2005, que es una red de seguridad emocional con ochenta años de historia compartida.",
        },
        {
          forma: "texto",
          texto:
            "Ushi Okushima llevaba en el suyo desde los cinco años. Cuando Buettner lo conoció, se seguían reuniendo. Es el ejemplo perfecto del noveno factor de la lista: rodearse de la gente adecuada, porque los hábitos, buenos y malos, se contagian con una eficacia enorme.",
        },
        {
          forma: "arte",
          texto:
            "Ahí el libro se apoya en investigación sólida de verdad. El estudio de Framingham demostró que la obesidad, el tabaco y hasta la sensación de felicidad se propagan por las redes de amigos, y que la influencia de un amigo pesa más que la de un vecino o un familiar lejano.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "La conclusión práctica de Buettner es más honesta que la mayoría de consejos de salud: es mucho más fácil cambiar de amigos que cambiar de fuerza de voluntad. Si los tres con los que más tiempo pasas fuman y cenan mal, tú vas a fumar y cenar mal.",
        },
        {
          forma: "texto",
          texto:
            "La dieta okinawense tradicional era casi vegetariana por pobreza: boniato morado como alimento principal —llegó a ser el sesenta por ciento de las calorías—, soja en forma de tofu y miso, verdura amarga local, algas, muy poco arroz y prácticamente nada de carne.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí está el hara hachi bu, que Buettner considera la práctica dietética más potente que encontró. No es contar calorías. Es una frase que se dice antes de comer y que recuerda pararse antes de estar lleno. Un recordatorio cultural, gratis, repetido tres veces al día.",
        },
        {
          forma: "texto",
          texto:
            "Ahora bien, aquí hay que decir lo que el libro cuenta de pasada y merece un capítulo: esa Okinawa ya no existe. La dieta tradicional se hundió después de la guerra, cuando la isla quedó llena de bases militares americanas y de la comida que venía con ellas.",
        },
        {
          forma: "texto",
          texto:
            "Los datos son claros y son japoneses. Okinawa pasó de ser la prefectura más longeva del país a caer puestos década tras década. Hoy tiene de los peores índices de obesidad de Japón entre los menores de cincuenta años, y su esperanza de vida masculina ha bajado por debajo de la media nacional.",
        },
        {
          forma: "arte",
          texto:
            "Es decir: la zona azul de Okinawa es una foto de una generación concreta, la que se crió comiendo boniato en los años treinta y sobrevivió a una de las batallas más sangrientas de la Segunda Guerra Mundial. Sus nietos comen otra cosa y viven menos que ellos.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Eso obliga a leer el libro de otra manera. No describe un lugar mágico: describe unos hábitos que existieron en un lugar durante un tiempo y que se perdieron en dos generaciones en cuanto llegó otra forma de comer. Es una advertencia además de una receta.",
        },
        {
          forma: "texto",
          texto:
            "La cuarta zona, Nicoya, en Costa Rica, aporta la pieza que faltaba. Es una península seca del Pacífico donde los peones ganaderos, gente pobre, tenían tasas de mortalidad en la mediana edad notablemente más bajas que las de los costarricenses de la capital.",
        },
        {
          forma: "texto",
          texto:
            "La dieta era maíz nixtamalizado, frijol negro y calabaza: las tres hermanas de la agricultura mesoamericana, que juntas dan una proteína completa. El maíz cocido con cal libera niacina y calcio, y su agua es muy dura, lo que se ha propuesto como factor añadido.",
        },
        {
          forma: "texto",
          texto:
            "Y está la expresión que Buettner se llevó de allí: plan de vida. Preguntaba a los viejos por su secreto y le contestaban con un motivo concreto, no con un consejo. Cuidar de un nieto, atender el ganado, mantener la casa. Un sitio donde hacer falta cada mañana.",
        },
        {
          forma: "texto",
          texto:
            "La quinta zona rompe el patrón y por eso es la más interesante: Loma Linda, California, veinticuatro mil habitantes, la mayor concentración de adventistas del séptimo día del mundo. Nada de aislamiento, nada de montaña, nada de pobreza ancestral.",
        },
        {
          forma: "texto",
          texto:
            "Los adventistas no fuman, no beben, guardan el sábado entero sin trabajar, muchos son vegetarianos y comen frutos secos varias veces por semana. El Adventist Health Study, con decenas de miles de participantes, es de los estudios de cohorte más serios que existen sobre dieta.",
        },
        {
          forma: "texto",
          texto:
            "Sus resultados son los más sólidos del libro precisamente porque no dependen de partidas de nacimiento antiguas: los adventistas viven entre siete y diez años más que la media estadounidense, con datos modernos y verificables. Es la zona azul menos exótica y la mejor documentada.",
        },
      ],
    },

    {
      titulo: "El plan de vida",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La segunda mitad del libro cambia de género. Deja de ser un reportaje de viajes y se convierte en un manual: qué hacer con todo esto en una casa de Badajoz, de Bogotá o de Ohio, donde no hay pastores ni moais ni templos adventistas.",
        },
        {
          forma: "texto",
          texto:
            "Y la primera propuesta es la más contraintuitiva de todas: no intentes cambiar tu fuerza de voluntad, cambia tu entorno. Buettner sostiene que los centenarios que conoció no tenían más disciplina que nadie; tenían sitios donde lo sano era el camino de menor resistencia.",
        },
        {
          forma: "clave",
          rotulo: "La tesis práctica",
          frase: "Ninguna de las cinco zonas hacía nada a propósito. No había dietas, ni gimnasios, ni propósitos de año nuevo. El entorno decidía por ellos, y por eso funcionaba durante ochenta años seguidos.",
        },
        {
          forma: "texto",
          texto:
            "De ahí salen recomendaciones muy físicas y muy poco espirituales. Quitar la tele del salón principal. Tener un huerto o al menos plantas que obliguen a agacharse. Poner los dulces en un armario alto y la fruta en la mesa. Usar platos más pequeños, que reducen la ración sin esfuerzo.",
        },
        {
          forma: "texto",
          texto:
            "Sobre el movimiento, su consejo es el que más choca con la industria del fitness: no hace falta ir al gimnasio. Hace falta que la vida diaria tenga fricción. Aparcar lejos, subir escaleras, cocinar de verdad, ir andando a los recados, tener algo vivo que cuidar.",
        },
        {
          forma: "texto",
          texto:
            "Buettner cita un dato que ilustra bien la diferencia: un okinawense mayor se levanta y se sienta del suelo decenas de veces al día porque come y descansa en el tatami. Eso es una sentadilla con peso corporal repetida sin que nadie la llame ejercicio.",
        },
        {
          forma: "arte",
          texto:
            "Y hay una idea que aparece de fondo y que es la más útil del libro: la longevidad de aquellas comunidades no era el resultado de un esfuerzo, sino de una acumulación de decisiones que ya venían tomadas. La disciplina se agota; la arquitectura de una vida, no.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Sobre la comida, sus reglas son sencillas hasta el aburrimiento y coinciden con casi todo lo que sabe la nutrición seria. Legumbres todos los días. Frutos secos un puñado. Carne pocas veces al mes. Nada de refrescos azucarados. Y la mayor parte de las calorías, de plantas.",
        },
        {
          forma: "texto",
          texto:
            "Añade dos hábitos de horario: hacer la comida más fuerte al principio del día y la más ligera al final, y no comer después de cenar. En todas las zonas azules la última comida era temprana, pequeña y con gente, nunca solo y nunca delante de una pantalla.",
        },
        {
          forma: "texto",
          texto:
            "La parte social ocupa más páginas que la dietética y es donde el libro se juega su valor. Buettner insiste en que si tuviera que elegir un solo factor, elegiría la comunidad, y que las tasas de soledad de los países ricos son un problema de salud pública comparable al tabaco.",
        },
        {
          forma: "texto",
          texto:
            "Sobre la fe, es cuidadoso y honesto. Dice que no importa la religión: los adventistas son protestantes, los icariotas ortodoxos, los okinawenses animistas, los sardos católicos. Lo que comparten es asistir a algo con otras personas varias veces al mes, durante toda la vida.",
        },
        {
          forma: "texto",
          texto:
            "Y desmonta un tópico con datos propios: en ninguna de las zonas la gente vivía sola. Los mayores estaban con la familia o muy cerca, y eso tenía un efecto medible en los dos sentidos, porque el que cuida también recibe una razón diaria para levantarse.",
        },
        {
          forma: "clave",
          rotulo: "Ikigai, sin mística",
          frase: "En Okinawa y en Nicoya, cuando preguntaba por el sentido de la vida, la gente no filosofaba: nombraba una tarea concreta de esa misma mañana. Un nieto, unas vacas, un huerto.",
        },
        {
          forma: "texto",
          texto:
            "Buettner señala que en las lenguas de aquellos sitios no existe una palabra para jubilarse en el sentido occidental, y aporta un dato que ha circulado mucho: en los estudios que manejaba, dejar de tener un propósito claro se asociaba a un aumento notable del riesgo de mortalidad.",
        },
        {
          forma: "texto",
          texto:
            "Después del libro montó un programa llamado Blue Zones Project que aplica todo esto a ciudades enteras de Estados Unidos: rediseñar aceras, cambiar los menús escolares, poner huertos, negociar con supermercados. Ha trabajado con decenas de municipios.",
        },
        {
          forma: "texto",
          texto:
            "Los resultados publicados por el propio proyecto hablan de bajadas en tasas de tabaquismo y obesidad en ciudades como Albert Lea, en Minnesota, o Beach Cities, en California. Son datos de la propia empresa, y esa es exactamente la primera cautela que hay que tener con ellos.",
        },
        {
          forma: "arte",
          texto:
            "Porque a estas alturas conviene decirlo claro: zonas azules dejó de ser una investigación y pasó a ser una marca. Hay libros de cocina, una serie de Netflix de 2023, certificaciones para restaurantes, para empresas y para barrios enteros, y una compañía detrás que factura por ello.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Eso no invalida nada por sí solo. Pero cambia el nivel de escrutinio que merece, porque a partir de cierto punto ya no hay solo una hipótesis que defender: hay un negocio que depende de que la hipótesis siga siendo cierta.",
        },
        {
          forma: "texto",
          texto:
            "Y en 2024 llegó la objeción que puso todo el edificio en cuestión. No venía de un nutricionista ni de un rival comercial, sino de un demógrafo que se dedica a algo muy poco glamuroso: comprobar si la gente que dice tener cien años los tiene de verdad.",
        },
        {
          forma: "texto",
          texto:
            "Se llama Saul Newman y llevaba años estudiando una anomalía estadística curiosísima. Su conclusión, publicada y premiada, es lo bastante grave como para merecer el último capítulo entero de cualquier resumen honesto de este libro.",
        },
      ],
    },

    {
      titulo: "Los papeles",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Saul Newman, demógrafo del University College de Londres, se hizo una pregunta simple: si vivir mucho depende de dieta, ejercicio y comunidad, las regiones con más centenarios deberían tener también buena salud general. Fue a mirar si era así.",
        },
        {
          forma: "texto",
          texto:
            "Encontró lo contrario. En Estados Unidos, los condados con más centenarios registrados tendían a ser los más pobres, con peor esperanza de vida media, más criminalidad y menos acceso a sanidad. Justo al revés de lo que la teoría predice.",
        },
        {
          forma: "clave",
          rotulo: "La correlación incómoda",
          frase: "El mejor predictor de que una zona tenga muchos centenarios no era la dieta ni el ejercicio: era que los registros de nacimiento fueran malos o inexistentes.",
        },
        {
          forma: "texto",
          texto:
            "El dato que lo hizo célebre: en Estados Unidos, cuando un estado empezaba a expedir partidas de nacimiento fiables, el número de supercentenarios registrados en él caía de golpe entre un ochenta y un cien por cien. No se morían antes: dejaban de aparecer.",
        },
        {
          forma: "texto",
          texto:
            "Aplicó el mismo análisis a las zonas azules y los resultados fueron duros. Okinawa perdió sus registros civiles en la batalla de 1945, cuando los bombardeos destruyeron los archivos de la isla. Muchas edades se reconstruyeron después de memoria y por declaración de los propios interesados.",
        },
        {
          forma: "texto",
          texto:
            "En Grecia el problema era otro y estaba documentado por el propio Estado. Una auditoría del sistema de pensiones encontró que un porcentaje altísimo de los centenarios que cobraban pensión llevaban años muertos, y que alguien seguía cobrando por ellos.",
        },
        {
          forma: "texto",
          texto:
            "El mecanismo es de una banalidad deprimente: en zonas pobres, con burocracia débil y pensiones que sostienen a una familia entera, no declarar una muerte es dinero. Y donde el registro es malo, exagerar la edad hacia arriba no cuesta nada y a veces da acceso a una ayuda.",
        },
        {
          forma: "arte",
          texto:
            "Newman recibió por este trabajo el Ig Nobel de demografía de 2024, un premio que se da a investigaciones que primero hacen reír y luego hacen pensar. Es una broma con un fondo serio: su hallazgo no es gracioso, y de momento nadie lo ha refutado bien.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Conviene ser justo con lo que dice y con lo que no dice. Newman no afirma que la dieta mediterránea sea mala, ni que el ejercicio no sirva, ni que la comunidad no importe. Afirma que los recuentos de centenarios en los que se apoya la teoría no son fiables.",
        },
        {
          forma: "texto",
          texto:
            "Buettner ha respondido públicamente. Sostiene que sus zonas fueron validadas por demógrafos, que en Cerdeña Pes y Poulain verificaron partidas parroquiales una por una, y que los datos de Loma Linda proceden de un estudio de cohorte moderno y no dependen de archivos antiguos.",
        },
        {
          forma: "texto",
          texto:
            "Esa última defensa es la buena, y merece subrayarse: la zona azul más sólida es la que menos se parece a una zona azul. Los adventistas de California están documentados con historiales médicos actuales, y su ventaja de siete a diez años nadie la ha discutido en serio.",
        },
        {
          forma: "texto",
          texto:
            "Así que la conclusión razonable no es tirar el libro. Es separar dos cosas que venían pegadas. Por un lado, el recuento de centenarios, que está en cuestión. Por otro, los hábitos, que coinciden con lo que dicen los grandes estudios de cohorte desde hace treinta años.",
        },
        {
          forma: "texto",
          texto:
            "Y ahora, dónde falla el libro más allá de esa polémica, que falla en varias cosas. La primera es de método: es un reportaje, no un estudio. Buettner elige los sitios, va, observa y saca patrones. Eso genera hipótesis buenísimas y no prueba ninguna.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es que ignora casi por completo la variable más aburrida y probablemente más importante: no fumar, no beber en exceso, no tener accidentes y tener agua limpia. En todas las zonas azules esas cuatro cosas se cumplían, y explican una parte enorme del resultado.",
        },
        {
          forma: "texto",
          texto:
            "La tercera es el vino de las cinco, que es el consejo peor sostenido de la lista. La evidencia reciente sobre alcohol ha ido en la dirección contraria, y hoy la mayoría de organismos de salud pública no defienden ninguna cantidad como beneficiosa.",
        },
        {
          forma: "arte",
          texto:
            "Y la cuarta es de fondo: el libro vende como elección personal lo que en aquellos sitios era una condición impuesta. Aquella gente andaba porque no había coche y comía legumbres porque no había carne. Convertir la pobreza rural en un estilo de vida premium tiene algo de trampa.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Lo que casi todo el mundo cree y no es verdad: que zona azul sea un término científico. No lo es. Es una marca registrada nacida de un rotulador, y hoy es propiedad de una empresa que licencia certificaciones a restaurantes y ayuntamientos.",
        },
        {
          forma: "texto",
          texto:
            "Segundo malentendido: mucha gente cree que la clave es la dieta. El propio Buettner dice lo contrario en el libro: si tuviera que quedarse con un factor, se quedaría con la gente. Y esa parte es la que casi nunca sale en los resúmenes ni en las portadas.",
        },
        {
          forma: "texto",
          texto:
            "Y el tercero: se lee como si aquellos sitios siguieran igual. No siguen. Okinawa ha perdido su ventaja, Cerdeña se ha despoblado, Icaria vive del turismo y Nicoya ha cambiado de dieta. Las cinco zonas azules están desapareciendo mientras se venden libros sobre ellas.",
        },
        {
          forma: "texto",
          texto:
            "Con todo eso descontado, queda algo que sigue siendo útil y que no depende de ninguna partida de nacimiento: come plantas, muévete sin llamarlo ejercicio, duerme, ten a alguien a quien le importe si no apareces, y ten un motivo concreto para levantarte mañana.",
        },
      ],
    },
  ],
};

export const OUTLIVE: Resumen = {
  id: "outlive",
  titulo: "Outlive: el arte de vivir más y mejor",
  autor: "Peter Attia",
  ano: 2023,
  gancho: "Un cirujano que odiaba la medicina preventiva calcula cuántos años de vida sana pierde el que espera a tener síntomas. Le salen veinte.",
  porQue:
    "Es el libro de longevidad con la mejor argumentación y también el que más honradamente admite dónde no hay pruebas. Y el consejo principal no es la dieta.",
  partes: [
    {
      titulo: "El paciente que llega tarde",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Un hospital universitario, guardia de noche. Entra un hombre de sesenta y dos años con un infarto. Le abren la arteria, le ponen un stent y a los tres días se va a casa con cinco medicamentos. El equipo lo considera un éxito. Y lo es, según el manual con el que trabajan.",
        },
        {
          forma: "texto",
          texto:
            "Peter Attia se pasó años haciendo eso. Se formó como cirujano en Johns Hopkins, operó cáncer en el Instituto Nacional del Cáncer y después trabajó en McKinsey analizando riesgo. Y en algún momento se hizo la pregunta que le cambió el oficio.",
        },
        {
          forma: "texto",
          texto:
            "La pregunta es: ¿cuándo empezó de verdad ese infarto? No esa noche. La placa que reventó llevaba veinte o treinta años formándose, en silencio, mientras aquel hombre pasaba revisiones anuales que salían normales. Todo el sistema estaba diseñado para esperar al episodio.",
        },
        {
          forma: "clave",
          rotulo: "Medicina 2.0 y Medicina 3.0",
          frase: "La 2.0 espera a que aparezca la enfermedad y entonces actúa, muy bien. La 3.0 asume que el proceso lleva décadas en marcha y actúa antes de que exista un diagnóstico.",
        },
        {
          forma: "texto",
          texto:
            "Attia no desprecia la medicina moderna: la separa en dos fases. La 1.0 era Hipócrates y dos mil años sin resultados. La 2.0 llega con el método científico, los antibióticos y la cirugía, y es un triunfo: en un siglo la esperanza de vida pasa de cuarenta y pico años a casi ochenta.",
        },
        {
          forma: "texto",
          texto:
            "El problema es que ese triunfo fue contra las enfermedades rápidas. Una infección mata en días y un antibiótico la cura en días. Las que matan hoy son lentas: tardan décadas en instalarse, no dan síntomas hasta el final y para entonces el daño ya no se deshace.",
        },
        {
          forma: "arte",
          texto:
            "La imagen que usa es de aviación, que es un tema que le obsesiona: en aviación se investiga cada incidente menor para evitar el accidente. En medicina se espera al accidente y entonces se despliegan los mejores medios del mundo. La diferencia no es de calidad, es de momento.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale la distinción que ordena el libro entero: años de vida y años de vida sana. La medicina ha alargado mucho lo primero y bastante menos lo segundo, así que hemos ganado sobre todo décadas finales de dependencia, medicación y hospital.",
        },
        {
          forma: "texto",
          texto:
            "Attia pone cifras a esa brecha. En los países ricos la diferencia entre lo que se vive y lo que se vive con salud ronda la década. Diez años de media en los que una persona sigue viva y ya no puede hacer lo que quiere hacer.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí introduce el concepto que más se ha citado del libro: la década marginal. Los últimos diez años de vida. La pregunta no es cuántos años vas a vivir, sino cómo van a ser esos diez, y esa es una pregunta que se responde treinta años antes.",
        },
        {
          forma: "texto",
          texto:
            "Porque la capacidad física funciona como una cuenta que solo baja. A partir de los treinta y tantos se pierde masa muscular y capacidad aeróbica cada década, y ese descenso es más o menos inevitable. Lo que sí se elige es desde qué altura se empieza a bajar.",
        },
        {
          forma: "clave",
          rotulo: "La cuenta que solo baja",
          frase: "Si a los cuarenta estás en la media, a los ochenta estarás por debajo del umbral de autonomía. No porque envejezcas peor, sino porque partías de demasiado abajo.",
        },
        {
          forma: "texto",
          texto:
            "Esa idea cambia el objetivo del entrenamiento. No se entrena para estar bien ahora: se entrena para tener margen dentro de cuarenta años. Attia lo llama entrenar para la década marginal, y es lo que le lleva a proponer el ejercicio que estructura la segunda mitad del libro.",
        },
        {
          forma: "texto",
          texto:
            "Antes de eso deja claro con qué está peleando. Sostiene que casi todo lo que hoy nos mata cabe en cuatro grupos de enfermedades, que comparten factores de riesgo y que llevan décadas gestándose antes del diagnóstico. Los llama los cuatro jinetes.",
        },
        {
          forma: "texto",
          texto:
            "Y avisa desde el principio de una cosa que conviene tener presente todo el libro: gran parte de lo que propone no procede de ensayos clínicos con asignación aleatoria, porque hacer un ensayo de cuarenta años sobre longevidad es prácticamente imposible.",
        },
        {
          forma: "arte",
          texto:
            "Su honestidad en ese punto es de las mejores cosas del libro. Dedica un capítulo entero a explicar por qué los estudios de nutrición son tan malos, por qué la epidemiología confunde correlación con causa y por qué él tiene que razonar con probabilidades y no con certezas.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "Pone un ejemplo demoledor: durante años la terapia hormonal sustitutiva se retiró masivamente por un estudio de 2002 cuyos resultados, releídos por edades, decían algo mucho más matizado. Millones de mujeres cambiaron de tratamiento por una lectura apresurada de un titular.",
        },
        {
          forma: "texto",
          texto:
            "Y añade el problema de fondo de todo el campo: casi ningún estudio observacional puede separar el efecto de un alimento del efecto de ser la clase de persona que come ese alimento. Quien desayuna avena también suele fumar menos, dormir más y tener seguro médico.",
        },
        {
          forma: "texto",
          texto:
            "Con ese aviso puesto, el libro se convierte en una toma de decisiones bajo incertidumbre: qué palancas tienen la mejor relación entre evidencia y beneficio esperado, y en qué orden merece la pena tocarlas. La respuesta a esa pregunta es lo que hace útil el libro.",
        },
        {
          forma: "texto",
          texto:
            "Y la respuesta corta, que él adelanta y que casi nadie espera de un médico de longevidad, es que la palanca más potente que existe no es un suplemento, ni un ayuno, ni un fármaco. Es la capacidad aeróbica y la fuerza. Todo lo demás va detrás.",
        },
      ],
    },

    {
      titulo: "Los cuatro jinetes",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Attia sostiene que si se descuenta la muerte accidental, casi todo lo que nos mata en el mundo rico entra en cuatro categorías: enfermedad cardiovascular, cáncer, enfermedad neurodegenerativa y disfunción metabólica. Las llama los cuatro jinetes y las trata una por una.",
        },
        {
          forma: "texto",
          texto:
            "El primero es el más previsible y el peor tratado. La enfermedad cardiovascular mata más que ninguna otra cosa, se sabe cómo empieza, se puede medir con décadas de antelación y aun así se sigue diagnosticando en urgencias.",
        },
        {
          forma: "texto",
          texto:
            "Su crítica técnica es concreta: el análisis estándar mide el colesterol LDL en miligramos, es decir, cuánto colesterol transportan las partículas. Y lo que daña la arteria no es la carga, es el número de partículas que chocan contra la pared y se cuelan.",
        },
        {
          forma: "clave",
          rotulo: "ApoB",
          frase: "Cada partícula aterogénica lleva exactamente una molécula de apolipoproteína B. Medir la ApoB es contar partículas. Cuesta unos pocos euros y casi ningún análisis rutinario la incluye.",
        },
        {
          forma: "texto",
          texto:
            "Y añade un segundo marcador que casi nadie mide: la lipoproteína (a). Es de origen genético, la tiene elevada aproximadamente una de cada cinco personas, multiplica el riesgo cardiovascular y no responde a la dieta. Se mide una sola vez en la vida y ya se sabe.",
        },
        {
          forma: "texto",
          texto:
            "Su argumento es difícil de rebatir: hay un factor de riesgo importante, hereditario, que afecta a un veinte por ciento de la población, que se detecta con un análisis barato y que la mayoría de la gente nunca se ha hecho porque no está en el protocolo estándar.",
        },
        {
          forma: "arte",
          texto:
            "El segundo jinete es el cáncer, y aquí Attia es más humilde. Reconoce que la biología del cáncer sigue siendo mala noticia: los tratamientos han mejorado poco en tumores sólidos avanzados y la mayor parte de la ganancia de supervivencia viene de detectarlo antes.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Por eso su apuesta es el cribado agresivo, y aquí es donde se separa de la medicina convencional y donde más se le discute. Defiende colonoscopias antes de la edad recomendada y pruebas de imagen que el sistema no cubre porque generan falsos positivos y sobrediagnóstico.",
        },
        {
          forma: "texto",
          texto:
            "Él contesta que el sobrediagnóstico es un problema poblacional y que a un individuo concreto le compensa asumir algún susto a cambio de encontrar un tumor operable. Es un argumento legítimo y también es un argumento que solo funciona si puedes pagar las pruebas.",
        },
        {
          forma: "texto",
          texto:
            "El tercer jinete es la neurodegeneración: alzhéimer, párkinson, demencia vascular. Aquí aporta un dato que sorprende a todo el mundo: los cambios cerebrales del alzhéimer empiezan quince o veinte años antes de que aparezca el primer olvido significativo.",
        },
        {
          forma: "texto",
          texto:
            "Y menciona el factor genético con nombre y apellidos: el gen APOE tiene una variante, la e4, que aumenta bastante el riesgo. Attia la lleva. Ese detalle personal, que cuenta sin dramatismo, explica por qué el libro insiste tanto en el sueño y en el ejercicio.",
        },
        {
          forma: "texto",
          texto:
            "Porque lo que se sabe de prevención cognitiva no es un fármaco: es ejercicio, sueño, control de la tensión y de la glucosa, audición corregida y actividad social. Nada de eso es un descubrimiento; lo llamativo es cuánta gente lo sabe y cuánta poca lo aplica a los cuarenta.",
        },
        {
          forma: "clave",
          rotulo: "El cuarto jinete",
          frase: "La disfunción metabólica no mata directamente: multiplica a los otros tres. Resistencia a la insulina, hígado graso y síndrome metabólico son el suelo sobre el que crecen los demás.",
        },
        {
          forma: "texto",
          texto:
            "Attia insiste en que el problema no empieza cuando el médico dice diabetes tipo 2. Empieza mucho antes, con la insulina en ayunas subiendo durante años mientras la glucosa se mantiene normal porque el páncreas compensa. Cuando la glucosa sube, la avería lleva una década.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí propone medir insulina en ayunas y no solo glucosa, hacerse una curva con insulina y no solo con azúcar, y vigilar el perímetro de cintura por encima del peso, porque la grasa visceral —la que envuelve los órganos— es la que se asocia al daño metabólico.",
        },
        {
          forma: "texto",
          texto:
            "El hígado graso no alcohólico es el ejemplo que más le preocupa: afecta a una parte enorme de la población adulta, es reversible en fases tempranas, no da síntomas y casi nadie se entera hasta que aparece por casualidad en una ecografía por otro motivo.",
        },
        {
          forma: "arte",
          texto:
            "La conclusión de los cuatro capítulos es la misma cuatro veces: los procesos empiezan décadas antes del diagnóstico, se pueden medir antes con pruebas que ya existen, y el sistema no las hace de rutina porque está diseñado para tratar enfermos, no para vigilar sanos.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Hay que decir la objeción de frente, porque es seria: vigilar sanos también tiene costes. Genera ansiedad, cascadas de pruebas y tratamientos innecesarios. El equilibrio entre prevenir e intervenir de más es un debate real y Attia lo despacha más rápido de lo que merece.",
        },
        {
          forma: "texto",
          texto:
            "Con el mapa de amenazas trazado, la pregunta pasa a ser qué hacer. Y Attia estructura las herramientas en cinco: ejercicio, nutrición, sueño, salud emocional y fármacos. Dedica al ejercicio más páginas que a las otras cuatro juntas, y no es un descuido de reparto.",
        },
        {
          forma: "texto",
          texto:
            "Es su tesis. Sostiene que si solo pudiera darle una recomendación a un paciente, y tuviera que elegir entre cambiarle la dieta, darle un fármaco o ponerlo a entrenar, elegiría lo tercero sin dudar, porque no hay ninguna intervención con un efecto comparable.",
        },
      ],
    },

    {
      titulo: "VO2 máx",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El dato que sostiene medio libro procede de un estudio de 2018 con más de ciento veinte mil personas seguidas durante años, en el que se midió la capacidad cardiorrespiratoria en cinta y se cruzó con la mortalidad posterior por cualquier causa.",
        },
        {
          forma: "texto",
          texto:
            "El resultado es de los más contundentes que existen en medicina preventiva. Pasar del cuartil más bajo de forma física al siguiente se asocia a una reducción del riesgo de morir de en torno a la mitad. No de morir de corazón: de morir de cualquier cosa.",
        },
        {
          forma: "clave",
          rotulo: "La comparación que hace",
          frase: "Attia calcula que estar en el cuartil bajo de capacidad aeróbica supone un riesgo comparable al de fumar. Y estar en el diez por ciento superior se asocia a reducciones que ningún fármaco alcanza.",
        },
        {
          forma: "texto",
          texto:
            "El VO2 máximo mide cuánto oxígeno puede usar el cuerpo por minuto en el esfuerzo máximo. Es, en la práctica, el techo de todo lo que se puede hacer: cuanto más alto, más lejos queda el punto en que subir unas escaleras deja de ser posible.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí está la conexión con la década marginal. Un VO2 máximo alto a los cincuenta significa que el descenso natural de las décadas siguientes tarda mucho más en cruzar el umbral por debajo del cual una persona ya no puede vivir sola.",
        },
        {
          forma: "texto",
          texto:
            "Su plan de entrenamiento tiene dos piezas y una proporción. La mayor parte del trabajo aeróbico, alrededor del ochenta por ciento, se hace en lo que se llama zona 2: intensidad baja, sostenida, en la que se puede hablar aunque cueste, entre tres y cuatro horas a la semana.",
        },
        {
          forma: "arte",
          texto:
            "La zona 2 no es un invento suyo: es como entrenan los ciclistas profesionales la mayor parte del tiempo. Lo que hace es mejorar la capacidad de la mitocondria para usar grasa como combustible, y esa eficiencia metabólica se relaciona directamente con el cuarto jinete.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "La otra pieza es el veinte por ciento restante: series duras, cerca del máximo, de tres a cuatro minutos, repetidas con descansos. Eso es lo que sube el techo. Attia recomienda una sesión semanal, y avisa de que es la parte que casi todo el mundo se salta.",
        },
        {
          forma: "texto",
          texto:
            "La tercera pata es la fuerza, y aquí el argumento cambia de terreno. La masa muscular y la fuerza de agarre están entre los mejores predictores de mortalidad y de independencia en la vejez, y la pérdida de músculo con la edad tiene nombre propio: sarcopenia.",
        },
        {
          forma: "texto",
          texto:
            "El dato que usa para convencer es de traumatología, no de gimnasio: una fractura de cadera en una persona mayor se asocia a una mortalidad muy alta en el año siguiente. Y las caídas dependen de fuerza, equilibrio y masa muscular, las tres entrenables a cualquier edad.",
        },
        {
          forma: "texto",
          texto:
            "Prioriza dos capacidades por encima de las demás. La fuerza de agarre, porque correlaciona con la fuerza global y es fácil de medir. Y la capacidad de tirar y de cargar peso, que es lo que se usa para levantarse, subir escaleras y no caerse.",
        },
        {
          forma: "clave",
          rotulo: "La cuarta pata",
          frase: "Estabilidad. Attia le dedica un capítulo entero porque él mismo se destrozó la espalda entrenando mal, y sostiene que no sirve de nada un motor potente si el chasis se rompe a los sesenta.",
        },
        {
          forma: "texto",
          texto:
            "Esa parte es la menos glamurosa y la que más se salta el lector. Va de respiración, de posición de la caja torácica, de pie y de cadera, y de ejercicios lentos que no dan ninguna satisfacción inmediata. Es también donde él admite haber cometido sus peores errores.",
        },
        {
          forma: "texto",
          texto:
            "El capítulo de nutrición es, por decisión suya, el más corto y el más prudente. Empieza diciendo que la nutrición está tan mal estudiada que casi todo lo que se afirma con seguridad debería decirse con dudas, y que él ha cambiado de opinión varias veces en diez años.",
        },
        {
          forma: "texto",
          texto:
            "Su marco es minimalista: solo hay tres formas de intervenir. Restringir calorías, restringir tipos de alimento o restringir el tiempo en que se come. Todas las dietas del mundo son combinaciones de esas tres, y la mejor es la que cada persona pueda sostener años.",
        },
        {
          forma: "texto",
          texto:
            "Da dos recomendaciones firmes y poco discutidas. Proteína suficiente, bastante más de lo que marcan las recomendaciones oficiales, sobre todo a partir de los cincuenta. Y suficiente comida de verdad: la mayoría de la gente no come demasiado, come demasiado poco de lo que sacia.",
        },
        {
          forma: "arte",
          texto:
            "Y matiza el ayuno intermitente, que él mismo practicó durante años y del que se ha desdicho en parte. Su objeción es concreta: comer en ventanas muy estrechas suele hacer que se pierda músculo junto con la grasa, y para alguien mayor esa pérdida es exactamente lo que no interesa.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Sobre sueño es tajante y no aporta nada original: siete horas y media u ocho, con horarios estables, sin alcohol cerca de la cama y con oscuridad y temperatura bajas. Menciona que dormir mal deteriora la tolerancia a la glucosa en pocos días y en gente sana.",
        },
        {
          forma: "texto",
          texto:
            "Sobre fármacos es donde más se le puede discutir. Habla de rapamicina, un inmunosupresor que alarga la vida en ratones y que él toma él mismo fuera de indicación, y reconoce que no hay ningún ensayo de longevidad en humanos y que puede estar equivocándose.",
        },
        {
          forma: "texto",
          texto:
            "Con todo el arsenal en la mesa, queda la pregunta de para qué. Y ahí Attia propone el ejercicio mental que más ha calado del libro, que consiste en escribir una lista de diez cosas concretas que uno quiere seguir pudiendo hacer con ochenta años.",
        },
      ],
    },
    {
      titulo: "El decatlón del centenario",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El ejercicio es este: coger un papel y escribir diez tareas físicas concretas que quieras poder hacer en tu última década. No metas objetivos: mete acciones. Levantarte del suelo sin manos. Subir tres pisos con la compra. Coger a un nieto de veinte kilos del suelo.",
        },
        {
          forma: "texto",
          texto:
            "Attia lo llama el decatlón del centenario y lo usa con sus pacientes como punto de partida. La gracia es que convierte una aspiración vaga —envejecer bien— en una lista de requisitos medibles, y a partir de ahí el entrenamiento se diseña hacia atrás.",
        },
        {
          forma: "clave",
          rotulo: "Entrenar hacia atrás",
          frase: "Si a los ochenta quieres levantar a un nieto de veinte kilos, y a esa edad tendrás bastante menos fuerza que hoy, la cuenta te dice qué tienes que poder levantar ahora. Y suele ser mucho más de lo que la gente imagina.",
        },
        {
          forma: "texto",
          texto:
            "Los ejemplos que pone son deliberadamente domésticos. Levantarse del suelo apoyando una sola mano. Subir cuatro pisos en menos de un minuto sin agarrarse. Cargar diez kilos en cada mano durante un minuto. Abrir un bote. Bajar de un coche sin ayuda.",
        },
        {
          forma: "texto",
          texto:
            "Ninguna de esas cosas parece un objetivo deportivo, y esa es la idea. Son exactamente las tareas cuyo fallo marca el paso de vivir solo a no poder. La autonomía no se pierde de golpe: se pierde tarea a tarea, y cada una tiene un umbral de fuerza detrás.",
        },
        {
          forma: "arte",
          texto:
            "El test más simple que menciona es el de levantarse del suelo sentado y volver a sentarse usando el menor número de apoyos posible. Se ha estudiado en adultos mayores y la puntuación se asocia de forma clara con la mortalidad en los años siguientes.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "A partir de esa lista, el programa se ordena solo. Si hay que subir escaleras deprisa, hace falta capacidad aeróbica. Si hay que cargar peso, hace falta fuerza de agarre y de tirón. Si hay que levantarse del suelo, hace falta movilidad de cadera y de tobillo.",
        },
        {
          forma: "texto",
          texto:
            "Y aparece el argumento que hace que este marco funcione mejor que cualquier plan genérico: el entrenamiento deja de ser una obligación abstracta y pasa a ser el mantenimiento de una lista de cosas que uno ya ha decidido que quiere conservar.",
        },
        {
          forma: "texto",
          texto:
            "Attia insiste en que el margen hay que construirlo pronto, porque la pendiente es implacable. Se pierde entre un tres y un ocho por ciento de masa muscular por década a partir de los treinta, y ese porcentaje se acelera después de los sesenta si no se hace nada.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un dato que usa mucho y que asusta: tras diez días de reposo en cama, un adulto mayor puede perder una cantidad enorme de masa muscular de las piernas. Una hospitalización de dos semanas a los setenta y cinco puede costar años de autonomía.",
        },
        {
          forma: "texto",
          texto:
            "De ahí su insistencia en la reserva. No se entrena para lo que hace falta hoy: se entrena para tener de sobra cuando llegue el ingreso, la caída o la operación. El margen es lo único que separa una convalecencia de una pérdida definitiva de independencia.",
        },
        {
          forma: "clave",
          rotulo: "La estabilidad, otra vez",
          frase: "El decatlón no se cumple si uno se lesiona a los cincuenta y cinco. Por eso Attia pone la estabilidad por delante de la fuerza: sin chasis no hay motor que valga.",
        },
        {
          forma: "texto",
          texto:
            "Y añade el elemento que casi nadie asocia con la longevidad: la caída. Es la causa principal de pérdida de independencia en mayores, y depende de tres cosas entrenables —fuerza en las piernas, equilibrio y capacidad de reacción— más una no entrenable, que es la vista.",
        },
        {
          forma: "texto",
          texto:
            "Attia dedica también páginas al entrenamiento del pie y del tobillo, que es lo más aburrido del libro y probablemente de lo más útil. La mayoría de la gente lleva cincuenta años con los pies dentro de zapatos rígidos y ha perdido movilidad que no sabe que ha perdido.",
        },
        {
          forma: "texto",
          texto:
            "El programa completo que propone son entre cinco y siete horas semanales entre todo: zona 2, series duras, fuerza y estabilidad. Es mucho, y él lo reconoce. Y sostiene que es la mejor inversión de tiempo disponible, porque no hay ningún fármaco con ese efecto.",
        },
        {
          forma: "arte",
          texto:
            "Su argumento de coste de oportunidad es el que mejor convence: cinco horas semanales son el tres por ciento de las horas que uno está despierto. Y lo que compran, según los datos de capacidad aeróbica, es una diferencia de riesgo de mortalidad de las mayores que se han medido.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Para el que no pueda hacer eso, da una jerarquía y es honesto con ella: si solo hay tiempo para una cosa, caminar rápido todos los días. Si hay para dos, añadir fuerza dos veces por semana. Lo demás es optimización sobre una base que la mayoría no tiene puesta.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un aviso que repite: nada de esto sirve si uno lo hace tres meses. Todo el marco depende de décadas de continuidad, así que el criterio para elegir un plan no es cuál es óptimo, sino cuál se va a seguir haciendo dentro de veinte años.",
        },
        {
          forma: "texto",
          texto:
            "Con el plan físico cerrado, quedaría un manual de longevidad completo y competente. Y entonces el libro hace un giro que no anuncia en la portada y que su propio autor considera el más importante de los cinco.",
        },
        {
          forma: "texto",
          texto:
            "Attia escribe que estuvo a punto de no incluir ese último capítulo, porque implicaba contar cosas suyas que no quería contar. Y que si tuviera que quedarse con uno solo de todo el libro, sería ese, no el del VO2 máximo.",
        },
      ],
    },

    {
      titulo: "El paciente difícil",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El último capítulo empieza con una escena doméstica pequeña. Attia pierde los nervios por algo mínimo y ve la cara de su hija. No es un diagnóstico ni un análisis: es la expresión de una niña mirando a su padre. Escribe que fue la señal más clara que recibió nunca.",
        },
        {
          forma: "texto",
          texto:
            "Hasta ese momento tenía todos los marcadores en orden. Entrenaba varias horas al día, dormía lo que tocaba, se hacía todas las pruebas que recomienda en el libro y su ApoB era ejemplar. Y era, según cuenta él mismo, una persona con la que costaba vivir.",
        },
        {
          forma: "texto",
          texto:
            "Describe una rabia constante, una exigencia brutal consigo mismo y con los demás, y una incapacidad para estar presente. Cuenta que llegó a tener pensamientos de estrellarse conduciendo, y que su matrimonio estuvo cerca de romperse.",
        },
        {
          forma: "clave",
          rotulo: "Lo que faltaba",
          frase: "«¿De qué sirve vivir hasta los cien años si los últimos veinte no hay nadie que quiera pasarlos contigo?» Attia lo plantea como un fallo de diseño de todo su propio programa.",
        },
        {
          forma: "texto",
          texto:
            "Acabó ingresando en un programa terapéutico intensivo, en régimen residencial, y volviendo después a otro. Lo cuenta sin heroísmo y con bastante vergüenza, y esa es la parte del libro que más lectores mencionan cuando hablan de él.",
        },
        {
          forma: "texto",
          texto:
            "En terapia salió lo que sospechaba y no había mirado: maltrato en la infancia, del que no había hablado nunca, y una estructura mental construida encima. La disciplina extrema, la competitividad y la obsesión por el rendimiento eran, en su lectura, el mismo mecanismo de defensa.",
        },
        {
          forma: "arte",
          texto:
            "Y ahí conecta con el resto del libro de una forma que no es retórica. La conducta que le hacía ser buen atleta y buen médico era la misma que le hacía insoportable en casa. No había dos personas: había una estrategia que servía en un sitio y destruía en el otro.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Attia aporta el argumento clínico para no tratar esto como un añadido blando. La depresión, el aislamiento y la soledad son factores de riesgo medibles de mortalidad, comparables a factores físicos clásicos, y actúan tanto directamente como a través de la conducta.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una consecuencia práctica: nadie entrena cinco horas semanales durante treinta años si vive mal. La salud emocional no es un objetivo paralelo al físico; es la condición que hace posible sostener todo lo demás en el tiempo.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, dónde falla el libro, que falla en cosas importantes. La primera es de acceso. Attia dirige una consulta privada de altísimo coste, y buena parte del programa de pruebas que describe —imagen de cuerpo completo, paneles avanzados, seguimiento continuo— es inalcanzable para la mayoría.",
        },
        {
          forma: "texto",
          texto:
            "Él responde que las intervenciones que más importan son gratis, y es verdad: andar, levantar peso, dormir y no fumar no cuestan dinero. Pero el libro dedica muchas páginas a un nivel de monitorización que solo existe si alguien lo paga.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es la fuerza de la evidencia. Attia razona mucho desde mecanismos biológicos y desde estudios observacionales, y avisa de ello, pero el lector medio no distingue entre lo que está probado en ensayos —el ejercicio, la tensión, el tabaco— y lo que es una apuesta razonada.",
        },
        {
          forma: "clave",
          rotulo: "La apuesta más discutible",
          frase: "La rapamicina alarga la vida en ratones. No hay ningún ensayo de longevidad en humanos. Attia la toma y lo dice. Eso es transparencia, no es evidencia.",
        },
        {
          forma: "texto",
          texto:
            "La tercera es de tamaño: son más de cuatrocientas páginas y algunas secciones técnicas se hacen muy densas. El propio libro señala qué capítulos puede saltarse quien no quiera entrar en bioquímica, y ese aviso dice bastante sobre su estructura.",
        },
        {
          forma: "texto",
          texto:
            "Y la cuarta: el capítulo de nutrición se queda corto para lo que promete el resto. Es prudente y honesto, pero después de veinte páginas explicando por qué casi ningún estudio nutricional vale, deja al lector con menos indicaciones prácticas de las que esperaba.",
        },
        {
          forma: "texto",
          texto:
            "Lo que casi todo el mundo cree y no es verdad: que este es un libro de dieta. No lo es. La dieta ocupa un capítulo, es el más cauteloso de todos, y su recomendación central es comer suficiente proteína y sostener el hábito, no seguir ningún protocolo concreto.",
        },
        {
          forma: "texto",
          texto:
            "Segundo malentendido: que la medicina 3.0 sea una tecnología nueva. No lo es. Es un cambio de momento y de actitud: medir antes, actuar antes y aceptar tratar a alguien que todavía no está enfermo. Las herramientas ya existen casi todas.",
        },
        {
          forma: "arte",
          texto:
            "Y el tercero, el que más le importa a él: mucha gente resume el libro como come bien y haz ejercicio. La aportación real es otra: la palanca dominante es la capacidad aeróbica y la fuerza, medidas y entrenadas con un objetivo a cuarenta años vista.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Lo que queda es un manual exigente escrito por alguien que se aplicó su propio programa hasta llevarlo al absurdo, se estrelló por el lado que no estaba midiendo, y decidió contarlo en el último capítulo en vez de dejarlo fuera.",
        },
        {
          forma: "texto",
          texto:
            "Y esa es la frase con la que se queda uno. Attia escribe que pasó una década optimizando cada variable de su salud sin haber contestado a la pregunta previa: para qué quería todos esos años, y con quién pensaba pasarlos.",
        },
      ],
    },
  ],
};

export const COME_COMIDA_REAL: Resumen = {
  id: "come-comida-real",
  titulo: "Come comida real",
  autor: "Carlos Ríos",
  ano: 2019,
  gancho: "Siete de cada diez productos de un supermercado español no son comida en sentido estricto. Son formulaciones industriales diseñadas para que no puedas parar.",
  porQue:
    "Porque detrás del eslogan hay un ensayo clínico de 2019 que es de los pocos experimentos serios que existen en nutrición, y sus resultados son difíciles de discutir.",
  partes: [
    {
      titulo: "El setenta por ciento del supermercado",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Un supermercado español cualquiera, pasillo central. A un lado, cereales de desayuno con un dibujo de un tigre y un sello que dice que aportan vitaminas. Al otro, galletas integrales con avena. Al fondo, yogures desnatados de sabores y zumos sin azúcares añadidos.",
        },
        {
          forma: "texto",
          texto:
            "Todos esos productos llevan reclamos de salud en el envase. Y todos, según la clasificación que usa este libro, pertenecen a la misma categoría: no son alimentos, son formulaciones industriales hechas con derivados baratos de unos pocos cultivos.",
        },
        {
          forma: "clave",
          rotulo: "El reparto de un súper",
          frase: "Alrededor del setenta por ciento de las referencias de un supermercado grande son ultraprocesados. La comida de verdad está en el perímetro: fruta, verdura, pescadería, carnicería, legumbre.",
        },
        {
          forma: "texto",
          texto:
            "El autor es Carlos Ríos, dietista-nutricionista onubense nacido en 1991. Empezó publicando en redes sociales en 2016 fotos de etiquetas de supermercado y en dos años había montado un movimiento con millones de seguidores al que llamó realfooding.",
        },
        {
          forma: "texto",
          texto:
            "El libro salió en 2019 y su propuesta cabe en tres categorías. Comida real: alimentos sin procesar o mínimamente procesados. Buenos procesados: alimentos procesados que siguen siendo saludables. Y ultraprocesados, que son el objetivo del libro entero.",
        },
        {
          forma: "texto",
          texto:
            "La primera aclaración es la que más falta hace, porque el mensaje se ha simplificado hasta deformarse: procesado no significa malo. El aceite de oliva virgen extra está procesado. El queso está procesado. Las legumbres de bote, el pan de verdad y las conservas están procesados.",
        },
        {
          forma: "arte",
          texto:
            "La cocina es procesar. Cortar, cocer, fermentar y conservar son procesos, y llevamos haciéndolos diez mil años. La distinción no está entre natural y procesado, sino entre procesado y ultraprocesado, y esa segunda palabra tiene una definición técnica precisa.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Un ultraprocesado no es un alimento al que se le han hecho cosas. Es un producto fabricado a partir de sustancias extraídas de alimentos —almidones, azúcares, aceites refinados, proteínas aisladas— y recombinadas con aditivos que no se usan en ninguna cocina doméstica.",
        },
        {
          forma: "texto",
          texto:
            "La prueba de la cocina es la más práctica que da el libro. Si en la lista de ingredientes aparecen cosas que uno no tendría nunca en su despensa —jarabe de glucosa y fructosa, aceite de palma refinado, proteína de suero, estabilizantes, aromas—, es un ultraprocesado.",
        },
        {
          forma: "texto",
          texto:
            "Y aquí está el punto de partida técnico del libro, que no es de Ríos: es de un equipo de la Universidad de São Paulo dirigido por el epidemiólogo Carlos Monteiro, que en 2009 propuso una clasificación de los alimentos según su grado de procesamiento industrial.",
        },
        {
          forma: "clave",
          rotulo: "La clasificación NOVA",
          frase: "Cuatro grupos, ordenados por procesamiento y no por nutrientes. Fue la primera vez que alguien propuso clasificar la comida por cómo se ha hecho en lugar de por lo que contiene.",
        },
        {
          forma: "texto",
          texto:
            "Ese cambio de criterio es más importante de lo que parece. La nutrición del siglo XX se organizó alrededor de nutrientes: calorías, grasas, azúcares, proteínas. Se legislaba y se etiquetaba por nutrientes, y toda la industria aprendió a optimizar esa tabla.",
        },
        {
          forma: "texto",
          texto:
            "El resultado fueron cuarenta años de productos formulados para cumplir la tabla nutricional sin dejar de ser lo que eran. Bajos en grasa con azúcar añadido. Bajos en azúcar con edulcorantes. Enriquecidos con fibra y vitaminas sintéticas. Todos con sello de saludable.",
        },
        {
          forma: "texto",
          texto:
            "La hipótesis de Monteiro y la de este libro es que ese enfoque era erróneo de raíz: que el problema no está en los nutrientes que un producto contiene, sino en lo que le han hecho al alimento para llegar hasta él. La matriz importa tanto como el contenido.",
        },
        {
          forma: "arte",
          texto:
            "El ejemplo que aclara la idea: una manzana entera, una compota de manzana y un zumo de manzana tienen azúcares muy parecidos en la etiqueta. Y el cuerpo responde de forma muy distinta a los tres, porque en la fruta entera el azúcar viene dentro de una estructura de fibra.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Esa estructura ralentiza la absorción, obliga a masticar, ocupa espacio en el estómago y activa señales de saciedad. Al triturarla y colarla, todo eso desaparece. La tabla nutricional apenas cambia, y el efecto sobre el apetito y sobre la glucemia cambia por completo.",
        },
        {
          forma: "texto",
          texto:
            "El libro se apoya además en cifras de consumo que en España son llamativas. Estudios sobre dieta infantil española han encontrado que una parte muy alta de las calorías de los niños procede de productos ultraprocesados, y que el desayuno es la comida peor resuelta.",
        },
        {
          forma: "texto",
          texto:
            "Y aporta el contraste histórico: en dos generaciones, la dieta española ha pasado de legumbre, pescado, verdura y aceite de oliva a un patrón donde el desayuno es cereal azucarado, la merienda es bollería y la cena a menudo es precocinado.",
        },
        {
          forma: "texto",
          texto:
            "Todo eso es correlación y podría explicarse por muchas cosas: más sedentarismo, más renta, menos tiempo, porciones mayores. Para separar el efecto del procesamiento hacía falta un experimento controlado, y durante años nadie lo había hecho.",
        },
        {
          forma: "texto",
          texto:
            "Ese experimento se publicó en 2019, el mismo año que este libro, y lo dirigió un investigador de los Institutos Nacionales de Salud de Estados Unidos que hasta entonces había sido bastante escéptico con esta hipótesis.",
        },
      ],
    },

    {
      titulo: "Dos semanas encerrados",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Bethesda, Maryland, 2018. Veinte adultos sanos ingresan en una unidad metabólica de investigación y viven allí dentro durante cuatro semanas. No pueden salir. Todo lo que comen se pesa antes y después. El investigador principal se llama Kevin Hall.",
        },
        {
          forma: "texto",
          texto:
            "El diseño es cruzado: cada participante pasa dos semanas con una dieta de ultraprocesados y dos semanas con una dieta sin procesar, en orden aleatorio. Y aquí está lo importante, porque es lo que hace válido el experimento.",
        },
        {
          forma: "clave",
          rotulo: "Las dietas estaban igualadas",
          frase: "Mismas calorías ofrecidas, misma proporción de azúcar, grasa, sal, fibra y macronutrientes. La única diferencia era el grado de procesamiento de los alimentos que las componían.",
        },
        {
          forma: "texto",
          texto:
            "Y una condición más: podían comer todo lo que quisieran. Se les servía el doble de lo necesario y se pesaba lo que dejaban. Nadie les dijo que comieran menos ni les habló de dietas. Se limitaron a medir cuánto comía cada uno con cada tipo de comida.",
        },
        {
          forma: "texto",
          texto:
            "El resultado fue claro. Con la dieta de ultraprocesados, los participantes comieron alrededor de quinientas calorías más al día que con la otra. No un poco más: unas quinientas, todos los días, sin pedirlo y sin darse cuenta.",
        },
        {
          forma: "texto",
          texto:
            "Y el peso siguió a las calorías. En dos semanas de ultraprocesados ganaron cerca de un kilo de media. En dos semanas de comida sin procesar perdieron aproximadamente el mismo kilo. Las mismas personas, con dietas igualadas en nutrientes, en un mes.",
        },
        {
          forma: "arte",
          texto:
            "Ese estudio es la mejor prueba que existe de la tesis del libro, y su valor está en el diseño: es un ensayo controlado, no una encuesta. La gente no recordaba lo que había comido: se lo pesaron. Y no se comparó a personas distintas: cada una fue su propio control.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "También midieron la velocidad de ingesta y encontraron una pista del mecanismo: comían más deprisa con los ultraprocesados. Son productos blandos, poco fibrosos y de alta densidad energética, así que entran más calorías por minuto y da tiempo a meter muchas antes de que llegue la saciedad.",
        },
        {
          forma: "texto",
          texto:
            "Conviene señalar las limitaciones, porque el libro no lo hace bien: veinte personas es una muestra pequeña, cuatro semanas es poco tiempo, y los participantes estaban encerrados en un entorno artificial. Es un experimento excelente y es un solo experimento.",
        },
        {
          forma: "texto",
          texto:
            "Junto a eso hay una base de estudios observacionales muy amplia. Cohortes europeas de decenas de miles de personas han encontrado asociaciones entre el consumo de ultraprocesados y más riesgo cardiovascular, más cáncer y mayor mortalidad general.",
        },
        {
          forma: "clave",
          rotulo: "La cautela obligatoria",
          frase: "Los estudios observacionales no prueban causa. Quien come muchos ultraprocesados suele fumar más, moverse menos y tener menos renta, y esas variables se ajustan con modelos, no se eliminan.",
        },
        {
          forma: "texto",
          texto:
            "Por eso el ensayo de Hall importa tanto: es el único que aísla la variable. Y por eso conviene no exagerarlo tampoco: demostró un efecto sobre la ingesta espontánea y el peso a corto plazo, no sobre el cáncer ni sobre la mortalidad.",
        },
        {
          forma: "texto",
          texto:
            "Sobre el mecanismo, el libro propone varias explicaciones y todas son razonables aunque ninguna esté cerrada. La primera es la palatabilidad diseñada: estos productos se formulan en laboratorio buscando la combinación de azúcar, grasa y sal que maximiza el deseo de seguir comiendo.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es la densidad energética. Un plato de lentejas y una bolsa de patatas pueden tener calorías parecidas y ocupar volúmenes completamente distintos en el estómago. La saciedad depende mucho del volumen y del tiempo de masticación, no solo de la energía.",
        },
        {
          forma: "texto",
          texto:
            "La tercera es la velocidad. La señal de saciedad tarda unos veinte minutos en llegar al cerebro. Un producto que se puede ingerir en tres minutos permite meter una cantidad enorme de calorías antes de que el sistema de aviso se entere de que ha empezado la comida.",
        },
        {
          forma: "arte",
          texto:
            "Y la cuarta, más especulativa: el efecto sobre la microbiota y sobre los emulgentes. Hay estudios en animales que sugieren que algunos aditivos alteran la barrera intestinal. En humanos la evidencia es todavía preliminar y el libro la presenta con más seguridad de la que tiene.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Lo que Ríos deduce de todo esto es una consecuencia práctica que sí es sólida: contar calorías es una estrategia mala porque ignora el apetito. Si un tipo de comida te hace comer quinientas calorías más sin querer, el problema no se arregla con fuerza de voluntad.",
        },
        {
          forma: "texto",
          texto:
            "Su alternativa es cambiar la composición de lo que hay en casa, no la cantidad. Si la despensa está llena de comida que sacia, se come menos sin proponérselo. Es el mismo principio que la arquitectura de decisiones, aplicado a la nevera.",
        },
        {
          forma: "texto",
          texto:
            "Y de ahí sale la parte más útil del libro para el día a día, que consiste en aprender a leer una etiqueta. Ríos insiste en que la tabla nutricional, que es donde todo el mundo mira, es la parte menos informativa del envase.",
        },
        {
          forma: "texto",
          texto:
            "Lo que hay que leer está debajo, en letra más pequeña, y en un orden que muy poca gente sabe interpretar.",
        },
      ],
    },

    {
      titulo: "La lista de ingredientes",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La primera regla es de orden: los ingredientes aparecen por peso, de mayor a menor. Si el azúcar está en segundo lugar, ese producto es mayoritariamente harina y azúcar, diga lo que diga el frontal del envase sobre la avena o el cacao.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es de longitud. Ríos propone una heurística sencilla: si hay más de cinco ingredientes y varios no se reconocen, sospechar. No es una regla infalible —una conserva de legumbre puede llevar pocos y un buen pan integral llevar varios—, pero acierta la mayoría de las veces.",
        },
        {
          forma: "clave",
          rotulo: "El truco del azúcar",
          frase: "Al ir por peso, conviene repartirlo. Si un producto lleva jarabe de glucosa, dextrosa, melaza y azúcar moreno, cada uno pesa menos y ninguno sale el primero. Sumados, son la mitad del producto.",
        },
        {
          forma: "texto",
          texto:
            "El libro incluye una lista larga de nombres del azúcar, y es de las páginas más útiles: jarabe de maíz, jarabe de glucosa y fructosa, dextrosa, maltodextrina, sacarosa, azúcar invertido, concentrado de zumo de fruta, melaza, miel de caña, sirope de agave.",
        },
        {
          forma: "texto",
          texto:
            "Después está el capítulo de los reclamos, que es el más divertido y el más práctico. Ríos repasa uno por uno los mensajes del frontal y explica qué significan legalmente, que suele ser mucho menos de lo que el comprador entiende.",
        },
        {
          forma: "texto",
          texto:
            "Sin azúcares añadidos no significa sin azúcar: un zumo no lleva añadido y tiene tanto como un refresco. Light significa un treinta por ciento menos que el producto de referencia, que puede seguir siendo malísimo. Integral, en muchos productos, se cumple con un porcentaje mínimo de harina integral.",
        },
        {
          forma: "arte",
          texto:
            "Y el reclamo estrella: enriquecido con vitaminas y minerales. Añadir vitaminas sintéticas a un producto de harina refinada y azúcar no lo convierte en saludable; permite poner un sello en la caja. Es la operación que Ríos llama, con razón, maquillaje nutricional.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "El libro dedica atención especial a tres categorías por su peso en la dieta española. La primera, el desayuno: cereales, galletas, bollería, cacao soluble y zumos. Sostiene que es la comida donde más ultraprocesado se concentra y la que más fácil es de arreglar.",
        },
        {
          forma: "texto",
          texto:
            "La segunda, los productos infantiles: yogures de sabores, batidos, natillas, snacks con dibujos. Señala algo objetivo y bastante incómodo: los productos dirigidos a niños suelen tener peor perfil nutricional que sus equivalentes para adultos, y llevan más publicidad.",
        },
        {
          forma: "texto",
          texto:
            "Y la tercera, los embutidos y las carnes procesadas. Aquí se apoya en la clasificación de la Organización Mundial de la Salud de 2015, que situó la carne procesada en el grupo de agentes con evidencia suficiente de carcinogenicidad para el cáncer colorrectal.",
        },
        {
          forma: "clave",
          rotulo: "Un matiz que casi nadie hace",
          frase: "Esa clasificación mide la solidez de la evidencia, no la magnitud del riesgo. Que el tabaco esté en el mismo grupo no significa que un chorizo equivalga a un cigarrillo, y el libro no lo aclara del todo.",
        },
        {
          forma: "texto",
          texto:
            "La parte constructiva son las listas de sustitución, y son buenas porque son concretas. En vez de cereales, avena en copos. En vez de zumo, fruta entera. En vez de yogur de sabores, yogur natural con fruta. En vez de embutido, conservas de pescado o huevo.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una defensa explícita de productos que la nutrición popular ha demonizado sin motivo: los huevos, los frutos secos, el aceite de oliva, el aguacate, las conservas de pescado, la legumbre de bote y las verduras congeladas, que conservan prácticamente todo su valor.",
        },
        {
          forma: "texto",
          texto:
            "Ese último punto es importante y suele perderse: comer bien no exige comprar en mercados ni cocinar desde cero cada día. La legumbre en conserva, el pescado en lata y la verdura congelada son procesados perfectamente saludables y resuelven una comida en diez minutos.",
        },
        {
          forma: "texto",
          texto:
            "El libro incluye también planificación semanal, listas de la compra y recetas sencillas. Es la sección más floja y la más prescindible, y probablemente esté ahí por exigencias del formato más que por necesidad del argumento.",
        },
        {
          forma: "arte",
          texto:
            "Su mejor consejo operativo es de compra y no de cocina: hacer la mayor parte de la compra en el perímetro del supermercado y bajar poco a los pasillos centrales. Es una regla física, se cumple sin pensar y filtra la mayoría de lo que el libro quiere evitar.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Ríos plantea además el objetivo en términos de proporción y no de pureza: recomienda que en torno al ochenta o noventa por ciento de lo que se come sea comida real o buen procesado, y deja el resto libre. No propone eliminar nada de forma absoluta.",
        },
        {
          forma: "texto",
          texto:
            "Ese matiz es el que más se pierde en la divulgación del movimiento, y es justamente el que evita que la propuesta se convierta en una obsesión. El libro lo dice; las redes sociales que salieron de él, mucho menos.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí es donde empiezan los problemas serios de todo esto, que no están tanto en la tesis como en lo que ha pasado alrededor de ella, en el vocabulario que ha instalado y en quién puede permitirse seguirla.",
        },
      ],
    },

    {
      titulo: "Lo que cuesta cocinar",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La objeción más importante al libro no es científica: es económica y de tiempo. Comer comida real exige comprar más a menudo, porque se estropea; cocinar casi todos los días; y disponer de una cocina, de tiempo y de la energía para usarla al salir del trabajo.",
        },
        {
          forma: "texto",
          texto:
            "Una familia con dos empleos, turnos partidos y niños pequeños no tiene ese margen. Y los ultraprocesados no triunfan solo por sabor: triunfan porque son baratos, duran meses, no requieren preparación y resuelven una cena a las nueve y media de la noche.",
        },
        {
          forma: "clave",
          rotulo: "El punto ciego",
          frase: "El libro presenta como decisión individual algo que en buena medida es estructural: precios relativos, jornadas laborales, publicidad y qué se vende en el barrio donde vives.",
        },
        {
          forma: "texto",
          texto:
            "Los datos apoyan esa objeción. En casi todos los países ricos, el consumo de ultraprocesados es mayor en los hogares con menos renta y menos nivel educativo. Decirle a esa población que elija mejor, sin cambiar nada de su entorno, tiene un rendimiento limitado.",
        },
        {
          forma: "texto",
          texto:
            "Ríos sí menciona el problema y propone medidas regulatorias —impuestos a las bebidas azucaradas, límites a la publicidad infantil, etiquetado frontal—, pero le dedica unas páginas en un libro que va sobre todo de lo que puede hacer el lector en su cocina.",
        },
        {
          forma: "texto",
          texto:
            "La segunda objeción es de definición. La clasificación NOVA es útil y también es difícil de aplicar de forma consistente. Investigadores que la usan discrepan sobre en qué grupo colocar el pan de molde integral, el yogur de sabores o una bebida vegetal.",
        },
        {
          forma: "arte",
          texto:
            "Y esa ambigüedad tiene consecuencias: si dos equipos clasifican distinto, los estudios que asocian ultraprocesados con enfermedad están midiendo cosas ligeramente diferentes. Es una crítica metodológica seria y sigue abierta en la literatura científica.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "La tercera es de tono, y viene de dentro de la propia profesión. Varios dietistas han señalado que el vocabulario de comida real frente a comida basura moraliza el acto de comer, y que llamar a algo comida falsa invita a sentir culpa por haberla comido.",
        },
        {
          forma: "texto",
          texto:
            "La preocupación concreta es la ortorexia: la obsesión por comer de forma pura, que no está reconocida como diagnóstico formal pero que los profesionales de trastornos alimentarios ven cada vez más. Un marco de alimentos buenos y malos puede alimentarla.",
        },
        {
          forma: "texto",
          texto:
            "Ríos ha respondido a esto que él propone una proporción y no una pureza, y es cierto que el libro lo dice. También es cierto que el eslogan que ha calado en redes no es una proporción: es una división del mundo en comida y no comida.",
        },
        {
          forma: "clave",
          rotulo: "El conflicto de interés",
          frase: "Del movimiento salieron una marca de productos, una aplicación de pago y una plataforma de contenidos. Quien recomienda evitar productos industriales acabó vendiendo productos.",
        },
        {
          forma: "texto",
          texto:
            "Eso no invalida la tesis, que se sostiene o no por sus datos. Sí obliga a leer con la misma desconfianza que el libro pide aplicar a la industria alimentaria, y a fijarse en que las recomendaciones y el catálogo comercial coinciden bastante.",
        },
        {
          forma: "texto",
          texto:
            "La cuarta objeción es de nivel de evidencia. Ríos es divulgador y comunicador, no investigador, y en varios tramos presenta con seguridad hipótesis que están en fase preliminar, sobre todo en lo relativo a aditivos, emulgentes y microbiota.",
        },
        {
          forma: "texto",
          texto:
            "Y la quinta es de contenido: el libro repite mucho. La idea central se enuncia en el primer capítulo y las doscientas páginas siguientes la ilustran con ejemplos. Es un libro de doscientas páginas construido sobre un artículo de veinte.",
        },
        {
          forma: "texto",
          texto:
            "Lo que casi todo el mundo cree y no es verdad, empezando por lo más extendido: el libro no dice que lo procesado sea malo. Dice lo contrario en el segundo capítulo. El aceite, el queso, el yogur natural, la conserva y el pan de verdad están procesados y son buenos.",
        },
        {
          forma: "arte",
          texto:
            "Segundo malentendido: no es una dieta. No hay calorías que contar, no hay pesos, no hay menús obligatorios y no hay días de descanso. Es un criterio de compra, y quien lo lea buscando un plan de adelgazamiento no va a encontrar ninguno.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Tercero: la clasificación NOVA no es de Ríos. Es de un equipo brasileño dirigido por Carlos Monteiro y se publicó en 2009. Este libro la divulgó en España con muchísimo éxito, y esa es su aportación real, que no es pequeña pero es de comunicación.",
        },
        {
          forma: "texto",
          texto:
            "Y cuarto: los ultraprocesados no engordan por las calorías que tienen, sino por las que hacen comer. Esa es la conclusión del ensayo de Hall y es lo contrario del mensaje que la industria lleva décadas repitiendo, que es que todo cabe en una dieta equilibrada.",
        },
        {
          forma: "texto",
          texto:
            "Lo que queda es un libro con una tesis sólida, un respaldo experimental razonable, un tono que a veces se pasa de moralista, un punto ciego de clase importante y un consejo práctico que casi nadie discute: cuanto más se parezca lo que comes a un alimento, mejor.",
        },
        {
          forma: "texto",
          texto:
            "Y una regla final que resume el libro entero sin necesidad de leerlo: lo que tu bisabuela no habría reconocido como comida probablemente no lo sea. Es una simplificación, se le pueden buscar excepciones, y para hacer la compra de esta tarde funciona bastante bien.",
        },
      ],
    },

    {
      titulo: "La cocina de un martes",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Un martes cualquiera, nueve de la noche, alguien que ha salido de trabajar a las ocho abre la nevera. La pregunta no es qué es más sano en abstracto: es qué se puede poner en la mesa en quince minutos con lo que hay dentro.",
        },
        {
          forma: "texto",
          texto:
            "Ahí es donde se gana o se pierde todo, y el libro lo sabe. Su parte final va de logística, y es más aprovechable que la teoría porque parte de una premisa realista: nadie va a cocinar desde cero todas las noches, y el sistema tiene que funcionar igual.",
        },
        {
          forma: "clave",
          rotulo: "La regla de la despensa",
          frase: "Lo que decide lo que cenas no es tu voluntad a las nueve de la noche: es lo que compraste el sábado. La decisión importante se toma en el supermercado, no en la cocina.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale una lista de fondo de armario que resuelve casi cualquier improvisación: legumbre cocida en bote, conservas de pescado, huevos, verdura congelada, tomate triturado, arroz y pasta, frutos secos, aceite de oliva virgen extra y fruta.",
        },
        {
          forma: "texto",
          texto:
            "Con eso se montan cenas en diez minutos que no requieren ninguna habilidad: garbanzos salteados con espinacas congeladas y un huevo. Sardinas con tomate y pan. Arroz con verdura y atún. Ninguna es una receta: son combinaciones de cuatro ingredientes.",
        },
        {
          forma: "texto",
          texto:
            "El libro insiste en desmontar la idea de que comer bien exige recetas elaboradas. La mayoría de las comidas saludables del mundo son tres o cuatro ingredientes cocinados de forma simple, y la complicación culinaria es una barrera inventada.",
        },
        {
          forma: "arte",
          texto:
            "Y hace una observación buena sobre el tiempo: cocinar una legumbre no lleva tiempo de persona, lleva tiempo de olla. Se pone y se va uno. La confusión entre tiempo de cocción y tiempo de trabajo hace que mucha gente descarte platos que casi no dan faena.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "También defiende el batch cooking sin llamarlo así: cocinar una vez por semana una base de legumbre, un cereal y verdura asada, y montar los platos durante la semana. Es una recomendación con décadas de uso doméstico y sigue siendo la más eficaz.",
        },
        {
          forma: "texto",
          texto:
            "Sobre el precio, Ríos aporta un argumento que conviene matizar. Sostiene que comer real no es más caro, y comparando por kilo tiene razón: la legumbre seca, el huevo, la verdura de temporada y las conservas están entre lo más barato del supermercado.",
        },
        {
          forma: "texto",
          texto:
            "Lo que no computa es lo demás: el tiempo, el equipamiento, el conocimiento culinario, la capacidad de comprar dos veces por semana y de tirar lo que se estropea. Comparado por euros el argumento aguanta; comparado por coste total de una vida real, mucho menos.",
        },
        {
          forma: "clave",
          rotulo: "La comparación justa",
          frase: "Un plato de lentejas es más barato que una pizza congelada. Y la pizza no exige planificar, ni comprar fresco, ni fregar, ni saber cocinar, ni llegar a casa con energía.",
        },
        {
          forma: "texto",
          texto:
            "Otra parte útil es la de las salidas y la vida social, donde el libro baja el listón deliberadamente. Recomienda no convertir cada comida fuera en un problema, elegir lo mejor disponible sin agonizar, y no compensar después con restricción.",
        },
        {
          forma: "texto",
          texto:
            "Ese consejo choca con la imagen que el movimiento acabó proyectando, y es de lo más sensato del libro. Un patrón alimentario se define por lo que se hace la mayoría de los días, no por lo que se hace en una boda o en una cena con amigos.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una idea que se agradece: no propone contar nada. Ni calorías, ni macros, ni raciones. La única cuenta que pide es de proporción aproximada, y esa es probablemente la razón de que a mucha gente le haya resultado sostenible durante años.",
        },
        {
          forma: "texto",
          texto:
            "El libro se cierra con el argumento político, que es breve y es el que más ha crecido desde 2019. Sostiene que la responsabilidad individual es insuficiente si el entorno está diseñado en contra, y pide etiquetado frontal claro y límites a la publicidad dirigida a menores.",
        },
        {
          forma: "arte",
          texto:
            "Desde entonces varios países han implantado sellos frontales de advertencia —Chile fue el primero, en 2016— y las evaluaciones han encontrado cambios reales en la compra. Es la línea de trabajo con más respaldo y la que menos espacio ocupa en este libro.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "El balance honesto es este. La tesis central —que el grado de procesamiento importa por sí mismo, más allá de los nutrientes— tiene detrás una clasificación académica seria, una cohorte amplia de estudios observacionales y un ensayo controlado que apunta en la misma dirección.",
        },
        {
          forma: "texto",
          texto:
            "El libro que la divulga es repetitivo, moraliza más de lo necesario, tiene un punto ciego de clase importante y viene con un conflicto comercial que conviene tener presente. Y aun así ha cambiado la compra semanal de mucha gente, que es más de lo que consigue casi nadie.",
        },
        {
          forma: "texto",
          texto:
            "Su mérito real no es científico: es de traducción. Convirtió una clasificación epidemiológica brasileña, publicada en revistas técnicas, en una pregunta que cualquiera puede hacerse delante de una estantería. ¿Esto es un alimento o es un producto?",
        },
        {
          forma: "texto",
          texto:
            "Y esa pregunta, hecha veinte veces mientras se llena un carro, cambia más una dieta que cualquier plan semanal. No requiere aprender nada, no requiere pesar nada y se puede empezar a aplicar el sábado que viene sin haber leído el libro entero.",
        },
      ],
    },
  ],
};

export const INVICTO: Resumen = {
  id: "invencible",
  titulo: "Invicto",
  autor: "Marcos Vázquez",
  ano: 2021,
  gancho: "El mismo principio que hace crecer un músculo —estrés controlado más descanso— aplicado a la cabeza. Con dos mil años de instrucciones ya escritas.",
  porQue:
    "Es la mejor traducción al español del estoicismo a un programa de entrenamiento, y también un buen sitio para ver dónde ese marco deja de funcionar.",
  partes: [
    {
      titulo: "El esclavo cojo",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Roma, hacia el año 70. Un esclavo con una pierna inútil trabaja en casa de un secretario del emperador Nerón. Cojea desde joven y, según una tradición antigua, quedó así porque su amo le rompió la pierna. Cuenta esa misma tradición que él avisó de que se iba a romper.",
        },
        {
          forma: "texto",
          texto:
            "Cuando se rompió, dijo simplemente: ya te lo había dicho. Se llamaba Epicteto, que en griego significa más o menos adquirido, y ni siquiera es un nombre: es lo que se le pone a una propiedad. No se conserva el que le pusieron sus padres.",
        },
        {
          forma: "clave",
          rotulo: "Quién fundó esto",
          frase: "Un esclavo cojo liberado tras la muerte de Nerón, que abrió escuela en Grecia, no escribió una sola línea y cuyas clases conocemos porque un alumno tomó apuntes.",
        },
        {
          forma: "texto",
          texto:
            "Ese alumno se llamaba Arriano y de sus cuadernos salieron dos libros: los Discursos y un resumen breve, el Enquiridión, que significa manual de mano. Marco Aurelio, emperador de Roma, llevaba ese manual encima y lo cita en sus propias notas privadas.",
        },
        {
          forma: "texto",
          texto:
            "Marcos Vázquez, ingeniero español reconvertido en divulgador de salud, construye su libro sobre ese material. Es el creador de Fitness Revolucionario, uno de los pódcast más escuchados en español, y viene del mundo del entrenamiento físico, no del de la filosofía.",
        },
        {
          forma: "texto",
          texto:
            "Y esa procedencia es lo que le da su idea central, que es una analogía y funciona bastante bien: la mente se entrena igual que un músculo, con estrés controlado, descanso y progresión. No se fortalece evitando la dificultad; se fortalece dosificándola.",
        },
        {
          forma: "arte",
          texto:
            "El concepto biológico que hay detrás se llama hormesis: dosis pequeñas de un estresor producen una adaptación que deja al organismo más fuerte que antes. Es lo que ocurre con el ejercicio, con el ayuno moderado y, según su tesis, con la incomodidad deliberada.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "El libro está montado como un programa por fases, con ejercicios al final de cada bloque, en lugar de como un ensayo. Es una decisión coherente con la analogía: nadie se pone fuerte leyendo sobre entrenamiento, y él aplica lo mismo al terreno mental.",
        },
        {
          forma: "texto",
          texto:
            "El estoicismo del que parte no es el que sugiere la palabra en español corriente. Ser estoico, en el uso habitual, significa aguantar en silencio y sin quejarse. La escuela original no proponía eso, y esa confusión es el primer obstáculo que el libro tiene que quitar.",
        },
        {
          forma: "texto",
          texto:
            "El estoicismo fue una escuela filosófica completa, fundada en Atenas hacia el 300 antes de Cristo por Zenón de Citio, con tres partes: lógica, física y ética. Duró cinco siglos y tuvo entre sus figuras a un esclavo, a un consejero imperial riquísimo y a un emperador.",
        },
        {
          forma: "clave",
          rotulo: "Qué proponían de verdad",
          frase: "No suprimir las emociones, sino dejar de estar a merced de las que nacen de juicios equivocados. La palabra griega que usaban no significa insensibilidad: significa no ser arrastrado.",
        },
        {
          forma: "texto",
          texto:
            "Su tesis psicológica es la que ha resistido mejor el paso de dos mil años y es sorprendentemente moderna: no nos alteran las cosas que ocurren, sino los juicios que hacemos sobre ellas. La frase es de Epicteto y aparece en el Enquiridión casi al principio.",
        },
        {
          forma: "texto",
          texto:
            "Ese enunciado es, literalmente, la base de la terapia cognitiva moderna. Aaron Beck y Albert Ellis, los dos psicólogos que la fundaron en los años cincuenta y sesenta, citaron explícitamente a Epicteto como antecedente de lo que estaban proponiendo.",
        },
        {
          forma: "texto",
          texto:
            "Y tiene una consecuencia práctica inmediata que Vázquez desarrolla en todo el libro: si el malestar viene del juicio y no del hecho, entonces hay un punto intermedio en el que se puede intervenir, y ese punto es entrenable.",
        },
        {
          forma: "arte",
          texto:
            "Entre lo que pasa y cómo te sientes hay una interpretación, que suele ser automática, invisible y rapidísima. Todo el programa del libro consiste en hacer visible ese paso intermedio y en aprender a examinarlo antes de que produzca la reacción.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Vázquez añade a los estoicos material de psicología contemporánea: formación de hábitos, intenciones de implementación, teoría de la autodeterminación, exposición gradual y reestructuración cognitiva. La mezcla es su aportación, porque original no hay prácticamente nada.",
        },
        {
          forma: "texto",
          texto:
            "Él lo reconoce sin problemas en la introducción: dice que no ha inventado nada, que lo que hace es traducir a lenguaje de entrenamiento algo que ya estaba escrito, y que su valor está en la estructura y en los ejercicios, no en las ideas.",
        },
        {
          forma: "texto",
          texto:
            "Esa honestidad es útil y también acota lo que se puede esperar del libro. Quien ya haya leído a Epicteto y algo de psicología de hábitos va a encontrar poco nuevo. Quien no haya leído ninguna de las dos cosas va a encontrar un atajo bastante bien construido.",
        },
        {
          forma: "texto",
          texto:
            "El programa empieza por la herramienta más antigua y más famosa de la escuela, que Epicteto coloca en la primera frase de su manual y que Vázquez usa como cimiento de todo lo demás.",
        },
        {
          forma: "texto",
          texto:
            "Es una distinción de una sola línea que, aplicada en serio, reordena la manera de decidir en qué se gasta uno la energía.",
        },
        {
          forma: "texto",
          texto:
            "Se llama la dicotomía del control.",
        },
      ],
    },

    {
      titulo: "Lo que depende de ti",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El Enquiridión empieza así: de todas las cosas que existen, unas dependen de nosotros y otras no. Dependen de nosotros nuestros juicios, nuestros impulsos, nuestros deseos y nuestros rechazos. No dependen el cuerpo, la reputación, los cargos y todo lo demás.",
        },
        {
          forma: "texto",
          texto:
            "Y sigue: las que dependen de nosotros son por naturaleza libres, sin trabas y sin impedimento. Las que no dependen son débiles, esclavas, sujetas a estorbos y ajenas. La frase entera cabe en un párrafo y es el corazón de toda la escuela.",
        },
        {
          forma: "clave",
          rotulo: "La consecuencia práctica",
          frase: "Casi todo el sufrimiento evitable viene de invertir esfuerzo emocional en lo que no controlas y de no invertirlo en lo que sí. La lista de cada categoría es corta y comprobable.",
        },
        {
          forma: "texto",
          texto:
            "Vázquez lo aterriza con ejemplos cotidianos. No controlas si te dan el trabajo; controlas cómo preparas la entrevista. No controlas lo que opinen de ti; controlas cómo te comportas. No controlas si llueve; controlas si has cogido paraguas.",
        },
        {
          forma: "texto",
          texto:
            "Y añade una versión matizada que los estoicos modernos han propuesto y que resuelve un problema real de la formulación original: la tricotomía. Hay cosas que controlas del todo, cosas sobre las que no tienes ninguna influencia, y cosas en las que influyes sin controlar.",
        },
        {
          forma: "texto",
          texto:
            "Esa tercera categoría es la más importante en la práctica y la que la formulación clásica deja fuera. Un resultado profesional, la salud, una relación: en todos ellos se influye mucho y no se controla nada del todo, y ahí es donde vive casi toda la vida adulta.",
        },
        {
          forma: "arte",
          texto:
            "La regla que propone para ese terreno es la que más se usa: poner el esfuerzo en el proceso y desligar el juicio sobre uno mismo del resultado. Se entrena, se prepara, se hace todo lo que está en la mano, y después se acepta que el desenlace no es propiedad de nadie.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "El ejemplo clásico es de Cicerón y se conserva en las fuentes estoicas: un arquero apunta y dispara. Controla la postura, la respiración, la tensión del arco y el momento de soltar. En cuanto la flecha sale, el viento y el blanco dejan de ser asunto suyo.",
        },
        {
          forma: "texto",
          texto:
            "El objetivo del arquero, decían, no es acertar: es disparar bien. Suena a truco retórico y no lo es, porque cambia el criterio con el que uno se juzga. Un mal tirador que acierta por suerte lo ha hecho peor que uno bueno al que le desvía el viento.",
        },
        {
          forma: "texto",
          texto:
            "La segunda herramienta que el libro toma de la escuela es la más contraintuitiva de todas y también la que más alivia: consiste en visualizar por adelantado lo que puede salir mal, con detalle, en lugar de evitarlo.",
        },
        {
          forma: "clave",
          rotulo: "Premeditación de los males",
          frase: "Séneca aconsejaba dedicar un rato a imaginar la pérdida del trabajo, del dinero o de la salud. No para angustiarse, sino para que el golpe no llegue nunca sin haber sido pensado.",
        },
        {
          forma: "texto",
          texto:
            "El mecanismo tiene dos partes. La primera es que lo imprevisto duele más que lo previsto, y que anticipar reduce el impacto. La segunda es más útil todavía: al imaginar la pérdida, se descubre que lo que se tiene ahora no era obvio ni estaba garantizado.",
        },
        {
          forma: "texto",
          texto:
            "Esa segunda parte es un antídoto contra la adaptación hedónica, que es la tendencia comprobada a dejar de valorar cualquier cosa buena a las pocas semanas de tenerla. Imaginar perderlo la devuelve al primer plano sin que pase nada.",
        },
        {
          forma: "texto",
          texto:
            "Vázquez propone hacerlo por escrito y con un límite de tiempo: diez minutos, un escenario concreto, qué haría exactamente si ocurriera. Y luego cerrar el cuaderno. La diferencia entre esto y la ansiedad es que aquí hay plan y hay hora de terminar.",
        },
        {
          forma: "arte",
          texto:
            "Ese matiz es esencial y el libro lo subraya bien: rumiar es dar vueltas sin plan y sin final; premeditar es plantear un escenario, decidir la respuesta y parar. La diferencia no es el contenido del pensamiento, es su estructura.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "La tercera herramienta es la vista desde arriba, que aparece varias veces en las notas de Marco Aurelio: imaginarse desde muy lejos, viendo la propia ciudad, el país y el planeta, y a uno mismo dentro con su problema del día.",
        },
        {
          forma: "texto",
          texto:
            "Marco Aurelio lo llevaba más lejos y añadía la dimensión temporal: recordarse que todos los que le precedieron en el trono están muertos y olvidados, que dentro de cien años nadie recordará su nombre, y que eso vale también para el asunto que le está quitando el sueño.",
        },
        {
          forma: "texto",
          texto:
            "Es un ejercicio de proporción, no de nihilismo. No sirve para concluir que nada importa, sino para recalibrar cuánto importa cada cosa. Y funciona sobre todo con las humillaciones pequeñas, que son las que más energía consumen y menos consecuencias tienen.",
        },
        {
          forma: "texto",
          texto:
            "Con las herramientas mentales puestas, el libro pasa a la parte que le da su carácter propio y que viene directamente del oficio de su autor: cómo se entrena eso, con qué progresión y con qué cargas.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí aparece la idea que da título al capítulo siguiente y que los estoicos practicaban dos mil años antes de que existiera el concepto biológico que la explica.",
        },
      ],
    },

    {
      titulo: "Sobrecarga progresiva",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Séneca era uno de los hombres más ricos de Roma: fue tutor y consejero de Nerón y acumuló una fortuna enorme. Y escribió que conviene dedicar unos días al mes a comer la comida más barata y áspera, vestir con la ropa más basta y dormir mal, a propósito.",
        },
        {
          forma: "texto",
          texto:
            "Su razón la dejó escrita en una carta y es puramente práctica: para preguntarse mientras tanto si eso era realmente lo que se temía. La incomodidad voluntaria sirve para descubrir que el suelo del que uno tiene miedo está más cerca y es más habitable de lo que parecía.",
        },
        {
          forma: "clave",
          rotulo: "La incomodidad deliberada",
          frase: "No es ascetismo ni castigo. Es una prueba de estrés: exponerse en pequeño y de forma controlada a lo que se teme para que deje de gobernar las decisiones desde la sombra.",
        },
        {
          forma: "texto",
          texto:
            "Vázquez lo traduce a prácticas concretas: duchas frías, ayunos, entrenamientos duros, dormir alguna vez en el suelo, pasar un día sin móvil, hacer en público algo que dé un poco de vergüenza. Todas comparten la misma estructura y todas son reversibles.",
        },
        {
          forma: "texto",
          texto:
            "Y aplica el principio del gimnasio: progresión. Nadie levanta cien kilos el primer día. Se empieza por lo mínimo, se sube poco a poco y se respeta el descanso, porque la adaptación no ocurre durante el esfuerzo sino después, mientras el sistema se recupera.",
        },
        {
          forma: "texto",
          texto:
            "Esa parte es la que mejor funciona del libro, porque corrige un error común de la autoayuda: la idea de que basta con decidirse. Aquí la tesis es la contraria: la fuerza de voluntad no se decide, se construye, y se construye con cargas pequeñas y repetidas.",
        },
        {
          forma: "arte",
          texto:
            "Hay respaldo parcial para la analogía. La exposición gradual es un tratamiento con evidencia sólida para fobias y para ansiedad, y funciona exactamente así: acercarse a lo temido en dosis crecientes y tolerables hasta que la reacción se apaga sola.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Conviene decir también dónde la analogía se estira. La hormesis está bien documentada para el ejercicio y para algunos estresores fisiológicos. Extenderla a la exposición al frío o al ayuno como herramientas de fortaleza mental es plausible y no está probado.",
        },
        {
          forma: "texto",
          texto:
            "El libro presenta algunas de esas prácticas con más seguridad de la que la evidencia permite, y ese es uno de sus defectos: mezcla intervenciones muy respaldadas —el ejercicio, la exposición gradual— con otras que están de moda y tienen datos preliminares.",
        },
        {
          forma: "texto",
          texto:
            "La segunda mitad del programa se ocupa de los hábitos, y ahí Vázquez usa el consenso actual de la psicología conductual sin inventar nada, que es exactamente lo que hay que hacer con un campo donde ya se sabe bastante.",
        },
        {
          forma: "clave",
          rotulo: "La regla de los hábitos",
          frase: "Empezar ridículamente pequeño, anclar el hábito nuevo a uno que ya existe, hacerlo en el mismo sitio y a la misma hora, y no romper la cadena dos días seguidos.",
        },
        {
          forma: "texto",
          texto:
            "Añade el concepto de intención de implementación, que está bien estudiado: en lugar de proponerse hacer más ejercicio, escribir la frase completa —cuándo, dónde y cómo— porque una intención concreta se cumple bastante más que una genérica.",
        },
        {
          forma: "texto",
          texto:
            "Y el de identidad: sostiene que el hábito se sostiene mejor cuando se formula como pertenencia y no como objetivo. No quiero correr diez kilómetros, soy alguien que corre. La diferencia parece cosmética y cambia lo que ocurre el día que uno no tiene ganas.",
        },
        {
          forma: "texto",
          texto:
            "El capítulo sobre la motivación es de los mejores y va contra el sentido común. Su tesis es que la motivación no precede a la acción: la sigue. Que esperar a tener ganas es la forma más eficaz de no empezar nunca, y que la acción produce la motivación y no al revés.",
        },
        {
          forma: "arte",
          texto:
            "De ahí una regla operativa que resulta útil: reducir el listón de entrada hasta que sea ridículo. Ponerse las zapatillas y salir a la calle cinco minutos. Escribir una frase. Abrir el libro por la página que sea. Una vez dentro, seguir cuesta mucho menos que empezar.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "También dedica espacio al descanso, y es coherente con la analogía del entrenamiento: sin recuperación no hay adaptación, solo desgaste. Sostiene que el sobreentrenamiento mental existe y se parece bastante a lo que hoy se llama agotamiento profesional.",
        },
        {
          forma: "texto",
          texto:
            "Esa advertencia es importante porque salva al libro de convertirse en una apología del sufrimiento. Su marco no dice aguanta más: dice dosifica bien y descansa lo suficiente, que es lo contrario de lo que suele venderse con este vocabulario.",
        },
        {
          forma: "texto",
          texto:
            "Queda una herramienta más y es la más antigua de todas. Marco Aurelio la practicaba cada noche en tiendas de campaña, durante campañas militares, y de ahí salió el único libro suyo que conservamos, que no escribió para publicar.",
        },
        {
          forma: "texto",
          texto:
            "Séneca describía la suya con detalle: al acabar el día, cuando se apagaba la luz y su mujer se callaba, repasaba la jornada entera y examinaba cada cosa que había dicho y hecho, sin ocultarse nada y sin pasar nada por alto.",
        },
        {
          forma: "texto",
          texto:
            "Y añadía la parte que la mayoría se salta al citarlo: no se escondía nada y tampoco se castigaba. Repasaba, corregía y dormía.",
        },
      ],
    },

    {
      titulo: "El juez interior",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El diario estoico no es un diario personal ni un desahogo. Tiene una estructura fija: qué hice bien, qué hice mal, qué haré distinto mañana. Tres preguntas, unas líneas cada una, todos los días, escritas para uno mismo y para nadie más.",
        },
        {
          forma: "texto",
          texto:
            "Marco Aurelio escribía las suyas en griego, en campaña, entre los años 170 y 180. No las tituló, no las ordenó y no hay ningún indicio de que quisiera publicarlas. El libro que hoy se llama Meditaciones es literalmente el cuaderno de trabajo de un hombre que gobernaba un imperio.",
        },
        {
          forma: "clave",
          rotulo: "Por qué funciona",
          frase: "Escribirlo obliga a formular el pensamiento, y un pensamiento formulado se puede examinar. Mientras está solo en la cabeza, se repite en bucle y no se somete a ninguna prueba.",
        },
        {
          forma: "texto",
          texto:
            "Vázquez añade a esa práctica el método de la terapia cognitiva, que hace lo mismo con más estructura: identificar el pensamiento automático, buscar la prueba a favor, buscar la prueba en contra y formular una versión alternativa más ajustada a los datos.",
        },
        {
          forma: "texto",
          texto:
            "Y repasa las distorsiones típicas, que son un catálogo bien conocido. Pensar en blanco y negro. Sacar una conclusión general de un caso. Adivinar lo que piensan los demás. Anticipar catástrofes. Descartar lo bueno por accidental y quedarse con lo malo por definitorio.",
        },
        {
          forma: "texto",
          texto:
            "El paralelismo con Epicteto es exacto y él lo señala: lo que la terapia cognitiva llama pensamiento automático es lo que el estoico llamaba impresión, y en los dos casos la instrucción es la misma: no aceptar la impresión sin examinarla.",
        },
        {
          forma: "arte",
          texto:
            "Epicteto lo formulaba con una imagen de aduana: cuando aparezca una impresión, dile que espere, no te dejes arrastrar por ella, y examínala con las reglas que tienes. Es un procedimiento de dos mil años que describe con precisión lo que hoy se enseña en consulta.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "El libro añade una figura útil que llama el juez interior: la voz que evalúa constantemente y que en mucha gente funciona como fiscal permanente. Su propuesta no es silenciarla —no se puede— sino exigirle el mismo rigor que a un juez de verdad.",
        },
        {
          forma: "texto",
          texto:
            "Es decir, pedirle pruebas. Si la voz dice que todo te sale mal, exigirle la lista. Si dice que la gente te desprecia, preguntarle cómo lo sabe. La mayoría de esos juicios no sobrevive a la primera pregunta seria, y la mayoría no se pregunta nunca.",
        },
        {
          forma: "texto",
          texto:
            "Otro capítulo trata la ira, que es la emoción a la que Séneca dedicó un tratado entero. Su tesis es que la ira nace de una expectativa: uno se enfada cuando el mundo no se comporta como creía que debía comportarse, y esa creencia es revisable.",
        },
        {
          forma: "clave",
          rotulo: "La receta de Marco Aurelio",
          frase: "Empezaba las mañanas recordándose que iba a encontrarse con gente entrometida, desagradecida y arrogante. No para despreciarlos: para no sorprenderse y no perder la mañana enfadado.",
        },
        {
          forma: "texto",
          texto:
            "Y añadía la segunda parte, que casi nunca se cita: que actúan así por ignorancia de lo que es bueno y de lo que es malo, y que él comparte con ellos la misma naturaleza. Es decir, la anticipación va acompañada de una obligación de no despreciar a nadie.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, dónde falla el libro, que falla en cosas que conviene decir. La primera es de originalidad: no hay nada nuevo. Es una síntesis competente de estoicismo y de psicología conductual, bien organizada y bien escrita, y su autor lo reconoce.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es de fidelidad a las fuentes. El estoicismo era un sistema completo con una física detrás: sostenían que el cosmos es racional y providencial, y que aceptar el destino tenía sentido porque el destino era obra de una razón universal.",
        },
        {
          forma: "arte",
          texto:
            "Si se quita esa metafísica y se conservan solo los ejercicios, queda un conjunto de técnicas útiles y queda sin fundamento la parte que pedía aceptar lo que ocurre. Amar el destino tiene sentido si el destino es racional; sin eso, es una recomendación sin apoyo.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "La tercera es la más seria y va más allá de este libro: hay sufrimiento que no es una oportunidad de entrenamiento. Un duelo, una depresión clínica, una enfermedad grave o la pobreza no se resuelven examinando juicios, y presentarlos así puede hacer daño.",
        },
        {
          forma: "texto",
          texto:
            "Vázquez lo menciona brevemente y recomienda ayuda profesional cuando corresponde, pero el marco general del libro empuja en la dirección contraria: si todo depende de tu interpretación, entonces no salir adelante pasa a ser un fallo de entrenamiento.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una cuarta objeción, política, que se le ha hecho al revival estoico en general: es una filosofía que enseña a soportar circunstancias y no a cambiarlas. Epicteto le decía a un esclavo que su condición no dependía de él y que se ocupara de su juicio interior.",
        },
        {
          forma: "texto",
          texto:
            "Eso puede ser un consuelo enorme para alguien que no puede cambiar nada, y también puede ser una anestesia muy conveniente para quien sí podría. La distinción entre las dos situaciones no la resuelve la filosofía: la resuelve mirar quién la está recomendando y a quién.",
        },
        {
          forma: "texto",
          texto:
            "Con esas advertencias puestas, queda el concepto con el que el libro cierra y que es el más difícil de todos.",
        },
      ],
    },

    {
      titulo: "Amor fati",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La expresión no es de los estoicos antiguos: la acuñó Nietzsche a finales del siglo XIX, y significa amor al destino. Escribió que su fórmula para la grandeza era no querer que nada sea distinto, ni hacia atrás, ni hacia delante, ni por toda la eternidad.",
        },
        {
          forma: "texto",
          texto:
            "Y añadió el matiz que la separa de la resignación: no basta con soportar lo necesario, ni siquiera con ocultarlo. Hay que amarlo. La resignación aguanta y sigue considerando que lo ocurrido está mal; el amor al destino deja de considerarlo así.",
        },
        {
          forma: "clave",
          rotulo: "La diferencia",
          frase: "Resignarse es aceptar a regañadientes lo que no se puede cambiar. Amor fati es dejar de librar esa batalla y usar lo ocurrido como material. Nietzsche lo consideraba la prueba más difícil.",
        },
        {
          forma: "texto",
          texto:
            "Su antecedente estoico está en Epicteto, que lo dijo sin poesía: no pretendas que las cosas ocurran como tú quieres, quiere que ocurran como ocurren y te irá bien. Es la misma idea con dos mil años menos y bastante menos entusiasmo.",
        },
        {
          forma: "texto",
          texto:
            "Vázquez lo presenta como el último nivel del entrenamiento y con una advertencia sensata: no es un punto de partida. A alguien en mitad de una desgracia no se le puede pedir que la ame, y proponérselo es una crueldad disfrazada de sabiduría.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí se puede hacer, y es lo que el libro propone, es aplicarlo retrospectivamente: mirar hacia atrás y buscar qué salió de aquello que en su momento pareció una catástrofe. Casi todo el mundo encuentra algo, y esa constatación cambia cómo se mira lo siguiente.",
        },
        {
          forma: "arte",
          texto:
            "Marco Aurelio tenía una formulación más operativa y menos exigente que la de Nietzsche: lo que impide la acción se convierte en la acción; lo que se interpone en el camino se convierte en el camino. Es una instrucción de trabajo, no un estado de ánimo.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "El otro concepto con el que cierra es memento mori, recordar que se va a morir. Los estoicos lo usaban a diario y no como práctica morbosa: como instrumento de prioridad. Séneca escribió que el problema no es que la vida sea corta, es que perdemos la mayor parte.",
        },
        {
          forma: "texto",
          texto:
            "Su queja concreta es contra la postergación: dice que la gente vive como si fuera a vivir siempre, aplaza lo que le importa y se dedica a lo urgente ajeno. Y que después se queja de que la vida se le ha pasado, cuando lo que ha hecho es regalarla a trozos.",
        },
        {
          forma: "texto",
          texto:
            "El libro traduce eso a una pregunta práctica que se puede hacer cualquier lunes: si esta semana fuera representativa del resto de tu vida, ¿estarías conforme? Y sostiene que la respuesta no exige un cambio radical, sino corregir el reparto de unas cuantas horas.",
        },
        {
          forma: "clave",
          rotulo: "Lo que casi todo el mundo cree y no es verdad",
          frase: "El estoicismo no es aguantar sin quejarse ni reprimir emociones. Eso es lo que significa «estoico» en castellano corriente, y es prácticamente lo contrario de lo que enseñaba la escuela.",
        },
        {
          forma: "texto",
          texto:
            "Segundo malentendido: no es una filosofía de la indiferencia. Los estoicos defendían la implicación política, la amistad y el deber. Marco Aurelio gobernó un imperio treinta años y Séneca fue consejero de gobierno. Ninguno de los dos se retiró a mirar desde fuera.",
        },
        {
          forma: "texto",
          texto:
            "Tercero: la dicotomía del control no dice que el mundo exterior no importe. Dice que no está bajo tu mando, que es otra cosa. Se puede trabajar duro por un resultado y a la vez no hacer depender de él la propia estabilidad; esas dos cosas son compatibles.",
        },
        {
          forma: "texto",
          texto:
            "Y cuarto: este libro no es un tratado de filosofía. Es un programa de entrenamiento que usa material filosófico. Quien busque entender el estoicismo como sistema tiene que ir a las fuentes, que además son breves y baratísimas: el Enquiridión son treinta páginas.",
        },
        {
          forma: "arte",
          texto:
            "Esa es, de hecho, la mejor recomendación que se puede dar alrededor de este libro: leerlo y después leer a Epicteto directamente. Vázquez organiza y traduce; Epicteto es más duro, más raro y bastante más interesante, y se lee en una tarde.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "El balance justo es este: un libro sin ideas propias, bien estructurado, honesto sobre sus fuentes, con ejercicios aplicables, un exceso de confianza en algunas prácticas de moda y un punto ciego serio sobre el sufrimiento que no se entrena.",
        },
        {
          forma: "texto",
          texto:
            "Su virtud principal es de formato. Convierte un material que suele leerse como frases sueltas en algo que se puede practicar por fases, con progresión y con un cuaderno al lado, que es exactamente como los propios estoicos decían que había que usarlo.",
        },
        {
          forma: "texto",
          texto:
            "Porque eso es lo que Epicteto repetía a sus alumnos y lo que más se olvida al citarlo: que no quería que aprendieran sus lecciones de memoria, sino que las aplicaran. Decía que una oveja no vomita la hierba para enseñarle al pastor cuánto ha comido: produce lana.",
        },
        {
          forma: "texto",
          texto:
            "Su instrucción era que no expusieran los principios ante los ignorantes, sino que expusieran las obras nacidas de haberlos digerido. Es una crítica adelantada a dos mil años de gente citando estoicismo en lugar de practicarlo.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí está el mejor argumento a favor de un libro como este, que reduce la filosofía a ejercicios con horario: es la única forma de uso que su fundador habría aprobado. El resto —las citas, los carteles, las frases— es exactamente lo que él prohibía.",
        },
        {
          forma: "texto",
          texto:
            "Un esclavo cojo diciendo, en el año setenta, que no se enseña una filosofía hablando de ella. Se enseña siendo alguien a quien resulta difícil desestabilizar, y eso solo se consigue entrenando.",
        },
      ],
    },
  ],
};

export const MILAGRO_MANANA: Resumen = {
  id: "milagro-manana",
  titulo: "Mañanas milagrosas",
  autor: "Hal Elrod",
  ano: 2012,
  gancho: "Estuvo clínicamente muerto seis minutos a los veinte años. Doce años después escribió un método de una hora que han copiado dos millones de personas.",
  porQue:
    "Porque cuatro de sus seis prácticas están razonablemente respaldadas, y la afirmación central del libro sobre el sueño es sencillamente falsa.",
  partes: [
    {
      titulo: "Seis minutos muerto",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Carretera de California, 3 de diciembre de 1999, de noche. Un comercial de veinte años vuelve a casa de un acto de su empresa. Conduce un Ford Mustang. De frente, en dirección contraria y por su carril, viene una camioneta a más de cien kilómetros por hora.",
        },
        {
          forma: "texto",
          texto:
            "El conductor de la camioneta va borracho. El choque es frontal. Un segundo vehículo golpea después el Mustang por el lado del conductor. Cuando llegan los servicios de emergencia, el chico de veinte años no tiene pulso.",
        },
        {
          forma: "clave",
          rotulo: "El parte",
          frase: "Estuvo clínicamente muerto seis minutos. Once huesos rotos, bazo reventado, un pulmón perforado, daño cerebral permanente y seis días en coma. Le dijeron que probablemente no volvería a andar.",
        },
        {
          forma: "texto",
          texto:
            "Se llamaba Hal Elrod. Despertó del coma sin recordar el accidente y con una lesión cerebral que los médicos consideraban irreversible. Volvió a caminar en unas semanas y años después completó una ultramaratón de más de ochenta kilómetros.",
        },
        {
          forma: "texto",
          texto:
            "Esa historia es real, está documentada y él la cuenta al principio del libro. Y es también el problema del libro, porque establece desde la primera página un tono que atraviesa todo lo demás: el de la superación extraordinaria como modelo general.",
        },
        {
          forma: "texto",
          texto:
            "Lo que vino después de recuperarse fue una carrera de conferenciante motivacional y de vendedor. Y después una segunda catástrofe, esta vez económica, que es la que de verdad produjo este libro y la que suele contarse menos.",
        },
        {
          forma: "arte",
          texto:
            "En 2008, con la crisis financiera, perdió la mayor parte de sus ingresos, sus clientes cancelaron contratos, se endeudó considerablemente y entró en una depresión que él describe como el peor momento de su vida, peor que el accidente.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Un amigo le insistió en que saliera a correr. Salió sin ganas, se llevó auriculares y escuchó una charla de un conferenciante veterano llamado Jim Rohn. Una frase concreta de aquella grabación es el origen declarado de todo el método.",
        },
        {
          forma: "texto",
          texto:
            "La frase venía a decir que el nivel de éxito de alguien raramente supera su nivel de desarrollo personal, porque el éxito es algo que uno atrae por la persona en que se ha convertido. Elrod la interpretó como una instrucción práctica: trabajar sobre sí mismo primero.",
        },
        {
          forma: "texto",
          texto:
            "Volvió a casa, se puso a buscar cuáles eran las prácticas de desarrollo personal más recomendadas por la gente que admiraba, y se encontró con seis que aparecían una y otra vez en fuentes distintas.",
        },
        {
          forma: "clave",
          rotulo: "La decisión",
          frase: "No elegir una. Hacer las seis, la misma mañana, antes de que empezara el día. Su razonamiento fue que llevaba años eligiendo cuál probar y abandonándolas todas, y que hacerlas juntas eliminaba la elección.",
        },
        {
          forma: "texto",
          texto:
            "Las hizo al día siguiente por primera vez, a las cinco de la mañana, y sostiene que aquel día se sintió mejor que en meses. Siguió haciéndolas, lo contó en su blog, la gente empezó a copiarlo y en 2012 lo autopublicó como libro.",
        },
        {
          forma: "texto",
          texto:
            "Lleva vendidos más de dos millones de ejemplares y está traducido a más de cuarenta idiomas. Se ha convertido en una franquicia: hay libros derivados para escritores, para universitarios, para vendedores y para familias, además de comunidad, aplicación y documental.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un segundo capítulo de su biografía que conviene mencionar. En 2016 le diagnosticaron una leucemia linfoblástica aguda de una variante rara y muy agresiva, con una probabilidad de supervivencia que los médicos le situaron en torno al veinte o treinta por ciento.",
        },
        {
          forma: "arte",
          texto:
            "Sobrevivió, y escribió sobre ello después. Ese dato no valida su método —la supervivencia a una leucemia no depende de la rutina matutina— y sí explica por qué su público lo lee con una devoción que otros autores del género no consiguen.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "El libro está escrito en el registro habitual del sector: entusiasta, con mayúsculas emotivas, con testimonios de lectores intercalados y con llamadas constantes a unirse a la comunidad. Quien no soporte ese tono no va a pasar del segundo capítulo.",
        },
        {
          forma: "texto",
          texto:
            "Y su tesis de partida es una observación bastante razonable: que la mayoría de la gente reacciona todo el día a lo que le llega —correos, avisos, urgencias ajenas— y que nunca hay un momento del día que sea suyo, porque siempre lo ocupa otra cosa.",
        },
        {
          forma: "texto",
          texto:
            "Su propuesta es apropiarse del único tramo del día que nadie más reclama, que es el que va antes de que empiecen las obligaciones. Y llenarlo con seis actividades concretas, en un orden fijo y con un cronómetro.",
        },
        {
          forma: "texto",
          texto:
            "El método completo dura una hora, diez minutos por práctica, y existe una versión reducida de seis minutos —uno por práctica— pensada para los días imposibles.",
        },
        {
          forma: "texto",
          texto:
            "El orden tampoco es decorativo. Empieza por lo más difícil de sostener con sueño encima, que es estar sentado en silencio, y termina por lo que más despeja, que es escribir. Elrod cuenta que probó otras secuencias y que esta era la que menos abandonos le producía.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un detalle de procedimiento que suele pasarse por alto: la ropa preparada la noche anterior, un vaso de agua en la mesilla y el despertador al otro lado del cuarto, para obligarse a levantarse a apagarlo. Tres decisiones tomadas de antemano para no tener que tomar ninguna a las cinco.",
        },
        {
          forma: "texto",
          texto:
            "Las seis forman un acrónimo en inglés que en español se ha mantenido casi siempre igual, y que se ha convertido en la parte más reconocible del libro.",
        },
        {
          forma: "texto",
          texto:
            "Silencio, afirmaciones, visualización, ejercicio, lectura y escritura.",
        },
      ],
    },

    {
      titulo: "Las seis prácticas",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La primera es el silencio, y admite varias formas: meditación, oración, respiración consciente o simplemente estar sentado sin hacer nada. Su función, según Elrod, es empezar el día sin ruido en lugar de con el móvil en la mano.",
        },
        {
          forma: "texto",
          texto:
            "Es la práctica con más respaldo de las seis. Los programas estructurados de atención plena tienen ensayos con resultados razonables en ansiedad, en dolor crónico y en prevención de recaídas depresivas, y están recomendados en guías clínicas de varios países.",
        },
        {
          forma: "clave",
          rotulo: "El matiz",
          frase: "Esos resultados proceden de programas de ocho semanas con instructores formados. Diez minutos sentado a las cinco de la mañana no es lo mismo, aunque probablemente tampoco haga daño.",
        },
        {
          forma: "texto",
          texto:
            "La segunda son las afirmaciones: frases en primera persona, escritas de antemano, que se leen o se dicen en voz alta cada mañana. Y es la práctica más floja de las seis, con diferencia, y sobre la que hay evidencia en contra.",
        },
        {
          forma: "texto",
          texto:
            "Un estudio de 2009 dirigido por la psicóloga Joanne Wood examinó qué ocurre cuando la gente repite frases positivas sobre sí misma. En participantes con autoestima alta el efecto era pequeño y positivo. En los de autoestima baja, el ánimo empeoraba.",
        },
        {
          forma: "texto",
          texto:
            "La explicación propuesta es de contraste: al decirse algo que uno no cree, se activa automáticamente toda la evidencia en contra. Repetir que uno es capaz cuando está convencido de lo contrario funciona como recordatorio de la distancia entre las dos cosas.",
        },
        {
          forma: "arte",
          texto:
            "Elrod matiza esto a medias en ediciones posteriores y recomienda afirmaciones basadas en compromisos concretos —lo que uno va a hacer— en lugar de en estados deseados. Ese cambio es acertado y lo aleja bastante de lo que la gente entiende por afirmación.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "La tercera es la visualización: imaginar con detalle el resultado deseado y también el proceso de conseguirlo. Y aquí la evidencia es igualmente incómoda y bastante conocida en psicología de la motivación.",
        },
        {
          forma: "texto",
          texto:
            "Los estudios de Gabriele Oettingen encontraron que fantasear con el resultado conseguido reduce la energía disponible para perseguirlo: el cerebro obtiene parte de la recompensa por adelantado y la motivación baja. Visualizar el éxito puede ser contraproducente.",
        },
        {
          forma: "clave",
          rotulo: "Lo que sí funciona",
          frase: "Visualizar el obstáculo y el plan, no el trofeo. Imaginar qué se va a interponer y qué se hará exactamente entonces. Ese contraste sí mejora el rendimiento y está bastante replicado.",
        },
        {
          forma: "texto",
          texto:
            "La cuarta es el ejercicio, y aquí no hay nada que discutir: es probablemente la intervención con mejor relación entre esfuerzo y beneficio que existe. Su efecto sobre el ánimo, sobre el sueño y sobre prácticamente todos los marcadores de salud está sobradamente documentado.",
        },
        {
          forma: "texto",
          texto:
            "Elrod propone solo unos minutos, que es poco desde el punto de vista del acondicionamiento físico y suficiente para el efecto que busca, que es de activación. Y añade una razón adicional, la más sólida del libro y que él no formula bien: la luz.",
        },
        {
          forma: "texto",
          texto:
            "Exponerse a luz brillante poco después de despertar es uno de los reguladores más potentes del ritmo circadiano. Adelanta el reloj interno, mejora el estado de alerta diurno y facilita conciliar el sueño esa misma noche. Salir a la calle temprano hace eso.",
        },
        {
          forma: "arte",
          texto:
            "Ese mecanismo es probablemente responsable de una parte importante de los beneficios que sus lectores atribuyen al método completo, y en el libro apenas se menciona. Lo que funciona es salir a la luz; el resto de la hora es lo que hay alrededor.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "La quinta es la lectura, unas páginas cada mañana de un libro que enseñe algo. Su argumento es de acumulación: diez páginas diarias son unos tres mil seiscientos folios al año, es decir, entre doce y dieciocho libros que de otra manera no se leerían.",
        },
        {
          forma: "texto",
          texto:
            "Esa aritmética es correcta y es de lo más útil que hay en el libro, porque desmonta la idea de que hace falta tiempo para leer. No hace falta tiempo: hace falta un hueco fijo. Diez páginas se leen en quince minutos y se olvidan si no tienen sitio.",
        },
        {
          forma: "texto",
          texto:
            "Y la sexta es escribir: llevar un cuaderno donde anotar lo que se piensa, lo que preocupa, lo que se agradece o lo que se pretende hacer ese día. Tampoco es original y tiene detrás una literatura respetable.",
        },
        {
          forma: "texto",
          texto:
            "La investigación sobre escritura expresiva, iniciada por James Pennebaker en los años ochenta, encontró que escribir sobre experiencias difíciles durante unos minutos, varios días seguidos, se asocia a mejoras medibles en indicadores de salud y de ánimo.",
        },
        {
          forma: "clave",
          rotulo: "El balance de las seis",
          frase: "Dos con evidencia sólida (ejercicio y escritura), una razonable (silencio), una buena por aritmética (lectura), y dos con evidencia en contra o muy floja (afirmaciones y visualización).",
        },
        {
          forma: "texto",
          texto:
            "Elrod no cita ninguna de esas investigaciones, ni a favor ni en contra. El libro no tiene bibliografía, no menciona un solo estudio y presenta las seis prácticas con el mismo grado de confianza, que es total.",
        },
        {
          forma: "texto",
          texto:
            "Y eso es un problema, porque un lector no tiene manera de saber que cuatro de esas seis cosas son buenas ideas por razones comprobables y dos podrían estar haciéndole perder el tiempo o algo peor.",
        },
        {
          forma: "texto",
          texto:
            "Pero el problema mayor del libro no está en ninguna de las seis prácticas. Está en la afirmación que las hace posibles, que aparece en el capítulo dedicado a levantarse, y que es la que más daño puede hacer.",
        },
      ],
    },

    {
      titulo: "No se negocia con el sueño",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Elrod sostiene que la cantidad de sueño que uno necesita depende en buena medida de lo que se diga a sí mismo antes de acostarse. Que si uno se va a la cama pensando que solo va a dormir cinco horas y que va a estar destrozado, se levantará destrozado.",
        },
        {
          forma: "texto",
          texto:
            "Y que si se va a la cama diciéndose que cinco horas son suficientes y que despertará lleno de energía, despertará con energía. Lo presenta como un descubrimiento personal comprobado en sí mismo y lo recomienda al lector sin ninguna reserva.",
        },
        {
          forma: "clave",
          rotulo: "Eso es falso",
          frase: "La necesidad de sueño es en gran medida biológica y está determinada por factores genéticos. No se negocia con la actitud. Restringirlo crónicamente tiene efectos documentados que no dependen de lo que uno se diga.",
        },
        {
          forma: "texto",
          texto:
            "La evidencia sobre restricción de sueño es abundante y bastante contundente. Dormir menos de lo necesario de forma sostenida deteriora la atención, la memoria de trabajo y la toma de decisiones, altera la tolerancia a la glucosa y afecta al sistema inmunitario.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un hallazgo especialmente relevante aquí: en los estudios de restricción, el rendimiento se deteriora progresivamente mientras la percepción subjetiva de somnolencia se estabiliza. Es decir, la gente rinde peor y no se da cuenta de que rinde peor.",
        },
        {
          forma: "texto",
          texto:
            "Eso desmonta directamente el argumento del libro. Elrod concluye que duerme cinco horas y está bien porque se siente bien. Y sentirse bien es precisamente el indicador que deja de funcionar cuando alguien lleva semanas durmiendo poco.",
        },
        {
          forma: "arte",
          texto:
            "Existe una minoría de personas con variantes genéticas concretas que necesitan de verdad muy poco sueño y no muestran deterioro. Se han identificado algunas de esas mutaciones y son rarísimas: se estima que afectan a una fracción minúscula de la población.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Es decir, existe la gente que duerme cinco horas y está perfectamente, y son muy pocos, y no lo son por su actitud sino por su genoma. El resto de quienes creen serlo están, en la mayoría de los casos, funcionando peor de lo que perciben.",
        },
        {
          forma: "texto",
          texto:
            "Hay una segunda cosa que el libro ignora por completo y que afecta a mucha más gente: los cronotipos. La hora a la que el reloj biológico de una persona quiere dormir y despertar varía muchísimo entre individuos y tiene un componente hereditario claro.",
        },
        {
          forma: "clave",
          rotulo: "La proporción",
          frase: "En torno a una cuarta parte de la población es de cronotipo vespertino de forma marcada. Para esas personas, levantarse a las cinco no es disciplina: es funcionar contra su propia biología todos los días.",
        },
        {
          forma: "texto",
          texto:
            "Existe además un concepto para lo que les pasa: el desfase social. Es la diferencia entre el horario que el cuerpo pide y el que la vida laboral impone, y se ha asociado en estudios de población con peores indicadores metabólicos y de ánimo.",
        },
        {
          forma: "texto",
          texto:
            "Para alguien vespertino, adoptar este método significa una de dos cosas: o acostarse a las nueve de la noche, lo que suele ser incompatible con tener vida social o familiar, o dormir cinco horas todos los días, que es exactamente lo que no debería hacer.",
        },
        {
          forma: "texto",
          texto:
            "El libro no plantea esa alternativa en ningún momento, y presenta el madrugar como una cuestión de voluntad. Un lector vespertino que fracase con el método concluirá que le falta disciplina, cuando lo que le pasa es que su reloj interno va en otra fase.",
        },
        {
          forma: "arte",
          texto:
            "Y hay un dato que da la vuelta al argumento entero: lo que sí está bien respaldado no es madrugar, sino la regularidad. Acostarse y levantarse a horas parecidas todos los días, incluidos los fines de semana, se asocia a mejor sueño y mejores indicadores de salud.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Es decir, alguien que se acuesta a la una y se levanta a las nueve todos los días, sin excepción, está haciéndolo mejor que alguien que se levanta a las cinco entre semana y a mediodía el domingo. La hora concreta importa mucho menos que la constancia.",
        },
        {
          forma: "texto",
          texto:
            "Ahora bien, hay que ser justo con lo que el libro dice de verdad, porque el malentendido más extendido sobre él es precisamente sobre este punto y no es culpa del autor.",
        },
        {
          forma: "clave",
          rotulo: "Lo que Elrod sí dice",
          frase: "Que la hora concreta da igual. Que el método consiste en hacer las seis prácticas antes de que empiecen las obligaciones del día, sea eso a las cinco, a las siete o a las once para quien trabaje de noche.",
        },
        {
          forma: "texto",
          texto:
            "Eso está escrito en el libro y prácticamente nadie lo recuerda. La cultura popular ha convertido esto en el método de levantarse a las cinco, y esa lectura es la que produce el daño, porque combina madrugar con no adelantar la hora de acostarse.",
        },
        {
          forma: "texto",
          texto:
            "La regla honesta que se deriva de todo esto es sencilla y el libro casi la formula: si quieres una hora tuya por la mañana, acuéstate una hora antes. La hora no se saca del sueño; se saca de la noche anterior.",
        },
        {
          forma: "texto",
          texto:
            "El problema es que el libro sí ofrece la alternativa de sacarla del sueño, y la ofrece con un argumento pseudocientífico sobre el poder de la intención. Esa página concreta es lo que separa un manual razonable de uno que puede perjudicar a quien lo siga.",
        },
        {
          forma: "texto",
          texto:
            "Lo demás del capítulo sobre levantarse es bastante práctico y no tiene nada que objetar: poner el despertador lejos de la cama, beber un vaso de agua al levantarse, lavarse los dientes inmediatamente y vestirse antes de sentarse a hacer nada.",
        },
        {
          forma: "texto",
          texto:
            "Son trucos de reducción de fricción, del mismo tipo que usa cualquier manual serio de hábitos, y funcionan por una razón conocida: eliminan el momento de decisión, que es donde se pierde la mayoría de las rutinas nuevas.",
        },
      ],
    },

    {
      titulo: "Los treinta primeros días",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El libro incluye también un plan de treinta días para instalar la rutina, dividido en tres fases de diez, y su descripción de esas fases es de lo más honesto que contiene.",
        },
        {
          forma: "texto",
          texto:
            "Dice que los diez primeros días son insoportables, que los diez siguientes siguen siendo incómodos pero llevaderos, y que a partir del día veintiuno empieza a costar menos. Y avisa de que casi todo el mundo abandona en la primera fase.",
        },
        {
          forma: "clave",
          rotulo: "Por qué eso es útil",
          frase: "Casi ningún libro de hábitos avisa de que la primera semana va a ser mala. Al advertirlo, convierte el malestar en una señal esperada en lugar de en una prueba de que uno no vale para esto.",
        },
        {
          forma: "texto",
          texto:
            "La cifra de veintiún días es un mito popular y él la usa. La investigación disponible sobre formación de hábitos apunta a periodos bastante más largos y muy variables según la conducta, con medias de dos meses y rangos que van de tres semanas a ocho meses.",
        },
        {
          forma: "texto",
          texto:
            "Otro elemento del método es la responsabilidad compartida: hacerlo con otra persona o en grupo. Esa recomendación sí tiene respaldo consistente en la literatura sobre cambio de conducta, y es probablemente uno de los factores que explica su tasa de continuidad.",
        },
        {
          forma: "texto",
          texto:
            "Y también es, conviene decirlo, el motor comercial de la franquicia: la comunidad, los grupos, los retos colectivos y la aplicación. Funciona porque la responsabilidad ante otros funciona, y además vende suscripciones. Las dos cosas son verdad a la vez.",
        },
        {
          forma: "arte",
          texto:
            "Ahora, dónde falla el libro más allá del sueño. La primera cosa es el punto ciego social: levantarse una hora antes exige controlar la noche anterior, no hacer turnos rotatorios, no tener un bebé y no encadenar dos trabajos. No es una cuestión de voluntad.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Para una enfermera con turnos cambiantes, para alguien que sale de trabajar a las once de la noche o para quien tiene un hijo pequeño que se despierta a las tres, este método no es difícil: es inaplicable. Y el libro no lo reconoce en ninguna página.",
        },
        {
          forma: "texto",
          texto:
            "La segunda es la ausencia total de evidencia. No hay una sola referencia, ni un estudio, ni una distinción entre lo que está probado y lo que no. Las seis prácticas se presentan con idéntica seguridad, y dos de ellas tienen investigación en contra.",
        },
        {
          forma: "texto",
          texto:
            "La tercera es de contenido: es un libro corto con una idea, estirado con testimonios de lectores, repeticiones y llamadas a la acción. La parte útil son unas cuarenta páginas y el resto es refuerzo motivacional y promoción del ecosistema que lo rodea.",
        },
        {
          forma: "clave",
          rotulo: "La cuarta",
          frase: "El marco de la superación individual. Si levantarse una hora antes basta para transformar una vida, entonces no haberla transformado pasa a ser un fallo personal. Es la misma trampa de todo el género.",
        },
        {
          forma: "texto",
          texto:
            "Y la quinta, más de estilo: el uso de la propia biografía extrema como prueba. Que alguien sobreviviera a un accidente devastador y a una leucemia agresiva es admirable y no demuestra absolutamente nada sobre la eficacia de una rutina matutina.",
        },
        {
          forma: "texto",
          texto:
            "Lo que casi todo el mundo cree y no es verdad, empezando por lo principal: esto no va de levantarse a las cinco de la mañana. El libro dice explícitamente que la hora es irrelevante y que lo que importa es que sea antes de las obligaciones del día.",
        },
        {
          forma: "texto",
          texto:
            "Segundo malentendido: no hace falta una hora. Hay una versión de seis minutos, un minuto por práctica, y el propio autor sostiene que es preferible hacer seis minutos todos los días que sesenta minutos tres veces al mes.",
        },
        {
          forma: "arte",
          texto:
            "Tercero: las seis prácticas no son suyas. Meditación, ejercicio, lectura y escritura llevan siglos recomendándose. Su aportación es empaquetarlas en un orden fijo con un cronómetro, y esa aportación es de formato, no de contenido.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Y cuarto, el más importante de todos: no se puede recortar el sueño con actitud. Esa afirmación es el núcleo del libro y es contraria a la evidencia, y quien la aplique estará restringiendo su sueño mientras cree que ha encontrado un atajo.",
        },
        {
          forma: "texto",
          texto:
            "Lo que queda, si se descuenta eso, es un procedimiento razonable para reservarse un tramo del día. Y hay una versión de ese procedimiento que respeta la biología y que se puede formular en tres líneas.",
        },
        {
          forma: "texto",
          texto:
            "Elige una hora de despertar que puedas sostener todos los días del año, incluidos los domingos. Ajusta la hora de acostarte para que salgan tus horas de sueño. Y dedica los primeros veinte o treinta minutos del día a algo tuyo antes de mirar el teléfono.",
        },
        {
          forma: "texto",
          texto:
            "Dentro de esos minutos, lo que tiene mejor respaldo es salir a la luz, moverse un poco y escribir algo. Lo demás es opcional y depende de a quién le sirva, que es exactamente la manera en que el libro debería haberlo presentado.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una última cosa que decir sobre por qué un libro tan flojo en su argumentación ha funcionado tan bien con dos millones de personas.",
        },
        {
          forma: "texto",
          texto:
            "Porque lo que vende no es la rutina.",
        },
        {
          forma: "texto",
          texto:
            "Es la propiedad sobre un tramo del día.",
        },
      ],
    },

    {
      titulo: "La hora que no importa",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La observación real que hay debajo del libro, y que Elrod formula mejor que su método, es esta: la mayoría de la gente no tiene ni un solo tramo del día que le pertenezca. La jornada empieza reaccionando a lo que llega y termina agotada sin haber decidido nada.",
        },
        {
          forma: "texto",
          texto:
            "Y el momento en que eso se puede romper con menos resistencia externa es antes de que nadie más esté despierto, porque es la única franja en la que nadie va a llamar, ni escribir, ni pedir nada. La ventaja no es biológica: es de disponibilidad.",
        },
        {
          forma: "clave",
          rotulo: "El argumento fuerte",
          frase: "No es que la mañana sea mejor para la mente. Es que a las seis de la mañana nadie te interrumpe, y a las siete de la tarde te interrumpe todo el mundo.",
        },
        {
          forma: "texto",
          texto:
            "Ese argumento vale igual para alguien que trabaje de noche y tenga su franja libre a las cuatro de la tarde. Lo que importa es que exista un tramo protegido, y el libro elige la mañana por conveniencia práctica, no por ninguna propiedad especial del amanecer.",
        },
        {
          forma: "texto",
          texto:
            "Sobre lo que sí sostiene el reloj biológico, la evidencia disponible se puede resumir en cuatro puntos que el libro no menciona y que valen más que él entero.",
        },
        {
          forma: "texto",
          texto:
            "El primero: la regularidad importa más que la hora. Un horario estable de sueño, con la misma hora de despertar todos los días, se asocia con mejores indicadores que cualquier hora concreta. La constancia es la variable, no el madrugar.",
        },
        {
          forma: "arte",
          texto:
            "El segundo: la luz por la mañana es la señal más potente para ajustar el reloj interno. Salir a la calle en los primeros noventa minutos después de despertar, incluso en un día nublado, aporta una intensidad lumínica muy superior a cualquier interior.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "El tercero: el cronotipo es real, tiene componente genético y cambia con la edad. Los adolescentes se desplazan hacia la noche por razones biológicas, y ese desplazamiento retrocede a partir de los veinte y pico. No es pereza y no se corrige con voluntad.",
        },
        {
          forma: "texto",
          texto:
            "Y el cuarto: la deuda de sueño no se compensa del todo el fin de semana. Dormir cinco horas de lunes a viernes y doce el sábado no restaura los efectos acumulados sobre el metabolismo y la atención, aunque la sensación subjetiva mejore.",
        },
        {
          forma: "clave",
          rotulo: "La versión aplicable",
          frase: "Si quieres una hora para ti, quítasela a la noche anterior y no al sueño. Y elige una hora de despertar que puedas mantener también el domingo, porque la constancia es lo que produce el efecto.",
        },
        {
          forma: "texto",
          texto:
            "Con esa corrección puesta, el método de Elrod es perfectamente aprovechable y bastante bien diseñado: seis actividades cortas, orden fijo, cronómetro, versión reducida para los días malos y aviso explícito de que las dos primeras semanas van a ser desagradables.",
        },
        {
          forma: "texto",
          texto:
            "Esas cinco decisiones de diseño son buenas y explican por qué funciona mejor que muchos programas más sofisticados: reducen la fricción, eliminan las decisiones y ponen un suelo mínimo para los días en que todo se tuerce.",
        },
        {
          forma: "texto",
          texto:
            "Y la versión de seis minutos es probablemente la mejor idea del libro, aunque ocupe dos páginas. Un minuto de silencio, uno de afirmaciones, uno de visualización, uno de ejercicio, uno de lectura y uno de escritura. Nadie puede alegar que no tiene seis minutos.",
        },
        {
          forma: "arte",
          texto:
            "Su función no es producir ningún beneficio en seis minutos: es no romper la cadena. Y mantener una cadena es, según casi toda la literatura de hábitos, la variable que mejor predice que una conducta siga existiendo dentro de un año.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "El balance justo es este: un libro sin ninguna evidencia, con una afirmación central falsa y potencialmente dañina sobre el sueño, con dos de sus seis prácticas contradichas por la investigación, y con un diseño de rutina notablemente bien pensado.",
        },
        {
          forma: "texto",
          texto:
            "Su virtud no está en las ideas, que no son suyas, sino en el empaquetado. Convirtió media docena de recomendaciones dispersas en un procedimiento con nombre, orden, duración y versión de emergencia, y eso es exactamente lo que hace que la gente lo cumpla.",
        },
        {
          forma: "texto",
          texto:
            "Y su defecto principal no es lo que dice, sino lo que promete. El título habla de milagros, y lo que hay es una rutina de una hora que, bien hecha y sostenida durante meses, produce las mejoras modestas que producen el ejercicio, la lectura y escribir un rato.",
        },
        {
          forma: "texto",
          texto:
            "Que no es poco. Pero llamarlo milagro es exactamente lo que hace que la gente lo abandone a las tres semanas, cuando compruebe que sigue siendo la misma persona con los mismos problemas y una hora menos de sueño.",
        },
        {
          forma: "texto",
          texto:
            "La recomendación práctica, para quien quiera probarlo sin comprar el libro, cabe en cuatro líneas y no requiere levantarse a ninguna hora concreta.",
        },
        {
          forma: "texto",
          texto:
            "Elige tu hora de despertar sostenible. Acuéstate lo bastante pronto para dormir lo que necesitas. Los primeros veinte minutos, sin teléfono: sal a la luz, muévete algo y escribe cuatro líneas. Y hazlo todos los días, aunque solo sean seis minutos.",
        },
        {
          forma: "texto",
          texto:
            "Eso es el noventa por ciento del beneficio del libro, respeta la biología que el libro ignora, y no exige creer que uno puede negociar con su necesidad de dormir diciéndose una frase antes de apagar la luz.",
        },
      ],
    },
  ],
};

export const SER_MORTAL: Resumen = {
  id: "ser-mortal",
  titulo: "Ser mortal",
  autor: "Atul Gawande",
  ano: 2014,
  gancho: "Un cirujano de Harvard descubre, con su padre muriéndose, que en toda su formación médica nadie le enseñó qué hacer cuando ya no se puede curar a alguien.",
  porQue:
    "Porque desmonta la creencia más extendida sobre los cuidados paliativos —que son rendirse— con un ensayo clínico que encontró justo lo contrario: los pacientes que los recibieron pronto vivieron más.",
  partes: [
    {
      titulo: "Lo que no enseñan en la facultad",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Facultad de Medicina de Harvard, primeros años noventa. Un estudiante de veintitantos años repasa el temario del curso y comprueba que hay clases sobre casi todo: anatomía, farmacología, cirugía, urgencias, obstetricia. Sobre la muerte no hay ninguna.",
        },
        {
          forma: "texto",
          texto:
            "El único texto del programa relacionado con el asunto es un relato de Tolstói, La muerte de Iván Ilich, sobre un funcionario ruso que se muere despacio mientras todos a su alrededor fingen que va a mejorar. Y estaba puesto para debatir la relación médico-paciente.",
        },
        {
          forma: "clave",
          rotulo: "La formación que recibió",
          frase: "Aprendió a mantener a alguien vivo con una precisión enorme y no aprendió absolutamente nada sobre qué hacer cuando eso ya no es posible. Escribe que salió de la facultad convencido de que la muerte de un paciente era un fallo técnico suyo.",
        },
        {
          forma: "texto",
          texto:
            "Ese estudiante era Atul Gawande, hijo de dos médicos indios emigrados a Ohio, que acabó siendo cirujano en un hospital de Boston, profesor en Harvard y redactor de plantilla en The New Yorker, que es una combinación bastante infrecuente.",
        },
        {
          forma: "texto",
          texto:
            "Este es su cuarto libro y el que escribió cuando dejó de poder mirar el asunto desde fuera, porque a su padre, urólogo de setenta y tantos años, le diagnosticaron un tumor dentro de la médula espinal.",
        },
        {
          forma: "texto",
          texto:
            "El libro arranca con un dato que reorganiza el problema. Durante casi toda la historia de la humanidad, la gente moría deprisa: una infección, un accidente, un parto, una neumonía. Se estaba sano hasta que de pronto no se estaba, y en cuestión de días se acababa.",
        },
        {
          forma: "arte",
          texto:
            "La medicina del siglo veinte cambió eso. Los antibióticos, las vacunas, la cirugía y los cuidados intensivos convirtieron una caída vertical en una pendiente larga: hoy la mayoría de la gente de los países ricos muere después de años de deterioro.",
          arte: "mapa",
        },
        {
          forma: "texto",
          texto:
            "Gawande describe tres formas de morir. La primera, la súbita, cada vez más rara. La segunda, la del cáncer: bastante bien durante meses y después una caída rápida al final, que es la que la gente imagina cuando piensa en enfermar.",
        },
        {
          forma: "texto",
          texto:
            "Y la tercera, que es la más común y de la que casi nadie habla: el declive largo y lleno de dientes de sierra de la insuficiencia de órganos y de la fragilidad. Una caída, una neumonía, un ingreso, una recuperación parcial, y otra vez.",
        },
        {
          forma: "texto",
          texto:
            "Cada uno de esos episodios deja a la persona un poco por debajo de donde estaba, durante años. Esa trayectoria no tiene un momento claro en el que decir que se está muriendo, y por eso el sistema no sabe cuándo cambiar de objetivo.",
        },
        {
          forma: "clave",
          rotulo: "El problema del libro",
          frase: "La medicina moderna está diseñada para arreglar cosas. Y para una parte cada vez mayor de lo que le pasa a la gente mayor, no hay nada que arreglar: hay que decidir cómo se vive con lo que hay. Para eso nadie está formado.",
        },
        {
          forma: "texto",
          texto:
            "Dedica un capítulo a explicar qué es envejecer en términos físicos, y es de lo más informativo del libro porque casi nadie lo sabe. No es una enfermedad: es la acumulación de deterioros pequeños en todos los sistemas a la vez.",
        },
        {
          forma: "texto",
          texto:
            "Los dientes se desgastan, el cristalino del ojo se endurece y necesita tres veces más luz, los vasos se calcifican, los músculos pierden masa, los huesos se vacían y el cerebro se encoge lo suficiente para moverse dentro del cráneo.",
        },
        {
          forma: "texto",
          texto:
            "Ese último dato explica una cosa concreta: por qué un golpe leve en la cabeza puede provocar un sangrado en una persona mayor y no en una joven. Hay espacio para que el cerebro se mueva y las venas que lo sujetan se rompan.",
        },
        {
          forma: "arte",
          texto:
            "Y da un dato de sistema que es el corazón del capítulo: la geriatría es la especialidad con menos residentes en Estados Unidos, y una de las peor pagadas, en un país cuya población envejece a toda velocidad.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Cuenta el caso de un geriatra que le enseñó su consulta. Gawande, cirujano, esperaba una revisión médica normal y lo que vio fue otra cosa: el médico dedicó la mitad del tiempo a mirarle los pies a una anciana.",
        },
        {
          forma: "texto",
          texto:
            "Buscaba uñas mal cortadas, callos, hongos y heridas, porque si a esa mujer le duelen los pies dejará de andar, y si deja de andar perderá músculo, y si pierde músculo se caerá, y una caída con fractura de cadera es la puerta de salida.",
        },
        {
          forma: "texto",
          texto:
            "Los tres factores que la geriatría vigila para prevenir eso son concretos y aburridos: el estado de los pies, el número de medicamentos que toma la persona y si come lo suficiente. No hay tecnología ni pruebas caras.",
        },
        {
          forma: "clave",
          rotulo: "Lo que se sabe que funciona",
          frase: "Los estudios sobre atención geriátrica muestran reducciones importantes de discapacidad y de caídas. Y aun así las unidades de geriatría se cierran por falta de rentabilidad, porque nadie factura por revisar unos pies y evitar una fractura que no llega a ocurrir.",
        },
        {
          forma: "texto",
          texto:
            "El sistema paga por operar, por escanear y por ingresar. No paga por las conversaciones ni por la prevención lenta, y eso configura la medicina que le llega a la gente al final de su vida.",
        },
        {
          forma: "texto",
          texto:
            "Con ese diagnóstico puesto, el libro se va a lo concreto: dónde acaba viviendo la gente cuando ya no puede vivir sola. Y empieza por el caso que Gawande tenía en su propia familia.",
        },
        {
          forma: "texto",
          texto:
            "La abuela de su mujer, Alice Hobson, viuda, ochenta y tantos años, que vivía sola en su casa de Virginia, conducía, cuidaba su jardín y arreglaba ella misma la fontanería.",
        },
        {
          forma: "texto",
          texto:
            "Hasta que empezó a caerse.",
        },
        {
          forma: "texto",
          texto:
            "Primero en el jardín, después en la escalera, después en el gimnasio.",
        },
        {
          forma: "texto",
          texto:
            "La familia se reunió, hizo lo que hace cualquier familia responsable y le buscó un sitio seguro donde no pudiera hacerse daño.",
        },
        {
          forma: "texto",
          texto:
            "Alice odió ese sitio desde el primer día hasta el último.",
        },
        {
          forma: "texto",
          texto:
            "Y el libro se pasa doscientas páginas explicando por qué eso no era culpa de ella, ni de la familia, ni siquiera de la residencia.",
        },
        {
          forma: "texto",
          texto:
            "Sino de para qué se inventaron esos sitios, que no fue para vivir en ellos.",
        },
      ],
    },

    {
      titulo: "La llave de la puerta",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Las residencias de ancianos no se diseñaron pensando en los ancianos. Nacieron en Estados Unidos como una solución a un problema de los hospitales: camas ocupadas por gente que ya no necesitaba tratamiento y que no podía volver a su casa.",
        },
        {
          forma: "texto",
          texto:
            "Por eso tienen la forma que tienen. Pasillos de hospital, habitaciones compartidas, horarios de comida fijos, luces que se apagan a una hora, personal en turnos y un plan de cuidados. Todo está organizado alrededor de la seguridad y de la eficiencia del cuidado.",
        },
        {
          forma: "clave",
          rotulo: "La pregunta que nadie hizo",
          frase: "Si funcionan es porque cumplen su objetivo: que nadie se caiga, que todos coman y que se tomen las medicinas. Lo que no se preguntó nunca es si a alguien le gustaría vivir así, y la respuesta, cuando se pregunta a los residentes, es que no.",
        },
        {
          forma: "texto",
          texto:
            "Gawande describe lo que perdió Alice al entrar: la hora de levantarse, la de acostarse, qué comer y cuándo, con quién compartía habitación, y sobre todo la posibilidad de cerrar una puerta con llave y estar sola.",
        },
        {
          forma: "texto",
          texto:
            "Ese detalle de la llave aparece varias veces en el libro y no es sentimental: es la definición operativa de tener una vida propia. Un sitio donde nadie entra sin llamar es la diferencia entre un domicilio y una institución.",
        },
        {
          forma: "texto",
          texto:
            "El contraste que pone es el de su propio abuelo, Sitaram Gawande, que vivió en una aldea de la India hasta los ciento diez años, en una casa con hijos, nietos y bisnietos, y al que se seguía consultando sobre las decisiones de la familia.",
        },
        {
          forma: "arte",
          texto:
            "A los cien años se caía del caballo con el que iba a supervisar sus tierras y alguien lo recogía. Nadie le prohibió montar. La seguridad no era el valor supremo, y su posición en la casa no dependía de si podía valerse.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Gawande no idealiza ese modelo y dice claramente por qué desapareció: exige que alguien —casi siempre una mujer— renuncie a su vida para sostenerlo, y en cuanto las mujeres tuvieron alternativas, el sistema dejó de funcionar.",
        },
        {
          forma: "texto",
          texto:
            "Y añade un dato que suele sorprender: cuando los ancianos tienen medios económicos propios, en casi todas las culturas eligen vivir independientes de sus hijos. No es que los mayores echen de menos aquello: los hijos lo echan de menos por ellos.",
        },
        {
          forma: "texto",
          texto:
            "El personaje que resuelve el problema en el libro es una investigadora llamada Keren Brown Wilson, y lo resolvió por una razón personal muy concreta.",
        },
        {
          forma: "texto",
          texto:
            "Su madre, Jessie, tuvo un ictus a los cincuenta y cinco años que la dejó paralizada de un lado. Acabó en una residencia y le pedía a su hija, en cada visita, que la sacara de allí y le buscara un sitio donde pudiera tener una vida.",
        },
        {
          forma: "clave",
          rotulo: "Lo que su madre le pedía",
          frase: "No pedía volver a su casa, porque sabía que no podía. Pedía una puerta con cerradura, sus propios muebles, decidir qué comía y a qué hora, y poder tener un gato. Con la ayuda que necesitara, pero decidiendo ella.",
        },
        {
          forma: "texto",
          texto:
            "Wilson montó eso a principios de los ochenta en Oregón: un edificio de apartamentos pequeños, cada uno con su llave, su cocina y su baño, con personal disponible para lo que hiciera falta, y con el residente decidiendo su propia vida.",
        },
        {
          forma: "texto",
          texto:
            "Lo llamó vivienda asistida, y le costó años convencer al Estado de que autorizara un sitio donde una persona con demencia moderada pudiera vivir sola en un apartamento con una cocina y una puerta que se cierra.",
        },
        {
          forma: "texto",
          texto:
            "Cuando por fin lo evaluaron, los resultados fueron mejores de lo que ella misma esperaba: los residentes mantenían más funciones físicas y cognitivas, tenían menos depresión y el coste era menor que el de una residencia convencional.",
        },
        {
          forma: "arte",
          texto:
            "El modelo se extendió por todo el país a una velocidad enorme. Y aquí viene la parte amarga del capítulo: la etiqueta se copió y el contenido no. Hoy en Estados Unidos se llama vivienda asistida a casi cualquier cosa.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Wilson lo dice en el libro con toda claridad: la mayoría de los sitios que usan ese nombre no cumplen ninguno de sus principios. Se convirtieron en residencias con mejor decoración, porque quien elige y paga no suele ser el residente.",
        },
        {
          forma: "texto",
          texto:
            "Ese es el diagnóstico más útil del capítulo y vale para cualquier país. Quien contrata la plaza suele ser un hijo, y lo que un hijo compra es tranquilidad: que no se caiga, que no se pierda, que esté vigilado.",
        },
        {
          forma: "texto",
          texto:
            "Y lo que quiere el residente es exactamente lo contrario: correr algún riesgo a cambio de decidir. Los dos objetivos son incompatibles, y en el mercado gana siempre el que paga.",
        },
        {
          forma: "clave",
          rotulo: "La pregunta que Gawande propone",
          frase: "Cuando una familia elige un sitio para su madre, la pregunta no debería ser si es seguro, sino si allí ella podría seguir teniendo una razón para levantarse por la mañana. Y esa pregunta casi no se hace en ninguna visita.",
        },
        {
          forma: "texto",
          texto:
            "Hay un detalle práctico que da y que se puede usar mañana: en una visita a una residencia, mirar si los residentes tienen objetos propios en las paredes, si hay puertas cerradas y si alguien está haciendo algo por iniciativa propia.",
        },
        {
          forma: "texto",
          texto:
            "Si todo el mundo está sentado en una sala común mirando una televisión encendida que nadie ha elegido, dice, ya se sabe lo suficiente sobre ese sitio.",
        },
        {
          forma: "texto",
          texto:
            "Alice Hobson murió en una residencia de ese tipo, y Gawande escribe que su familia hizo todo lo que se suponía que había que hacer.",
        },
        {
          forma: "texto",
          texto:
            "La cuidaron, la visitaron, se aseguraron de que estuviera segura y bien atendida.",
        },
        {
          forma: "texto",
          texto:
            "Y le quitaron, sin querer y sin saberlo, todo lo que hacía que su vida fuera suya.",
        },
        {
          forma: "texto",
          texto:
            "El libro cambia entonces de tono, porque va a contar lo que pasó en una residencia pequeña del norte del estado de Nueva York en 1991.",
        },
        {
          forma: "texto",
          texto:
            "Cuando llegó un médico de treinta y un años recién salido de la facultad, sin experiencia en geriatría, y decidió que aquel sitio tenía un problema que no era médico.",
        },
        {
          forma: "texto",
          texto:
            "Y que la solución pasaba por meter animales dentro.",
        },
      ],
    },

    {
      titulo: "Dos perros, cuatro gatos y cien periquitos",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El médico se llamaba Bill Thomas y acababa de aceptar la dirección médica de una residencia con ochenta camas en Nueva Berlín, un pueblo del norte del estado de Nueva York. Venía de urgencias y no sabía nada de geriatría.",
        },
        {
          forma: "texto",
          texto:
            "Lo primero que hizo fue lo que hace cualquier médico nuevo: revisar historias, ajustar medicaciones y buscar diagnósticos mal puestos. Encontró unos cuantos, los corrigió, y comprobó que aquello no cambiaba nada.",
        },
        {
          forma: "clave",
          rotulo: "Su diagnóstico",
          frase: "Concluyó que el problema de aquel sitio no era médico. Lo formuló con tres palabras que dan nombre a lo que veía en cada habitación: aburrimiento, soledad y desamparo. Y que ninguna de las tres se trata con medicación.",
        },
        {
          forma: "texto",
          texto:
            "Su solución fue tan poco ortodoxa que tuvo que pelear con la administración estatal durante meses para conseguir permisos y una pequeña subvención. Quería meter vida dentro del edificio, y lo decía en sentido literal.",
        },
        {
          forma: "texto",
          texto:
            "El plan era: dos perros, cuatro gatos, un centenar de periquitos, un huerto y un jardín de flores, más una guardería infantil dentro del recinto para que hubiera niños entrando y saliendo todos los días.",
        },
        {
          forma: "texto",
          texto:
            "La normativa permitía un perro por planta y ningún gato. Consiguió la excepción argumentando que aquello era un experimento. El día que llegaron los periquitos no habían montado las jaulas, así que soltaron cien pájaros en el edificio.",
        },
        {
          forma: "arte",
          texto:
            "Gawande cuenta esa escena con detalle porque es la imagen que resume el libro: personal corriendo con jaulas a medio montar, pájaros por los pasillos, residentes en las puertas de sus habitaciones mirando aquello, y por primera vez en años, riéndose.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Después vino el trabajo: cada residente que quisiera podía tener uno o dos periquitos en su habitación y encargarse de ellos. Los perros y los gatos circulaban libremente. El huerto lo llevaban los que podían.",
        },
        {
          forma: "texto",
          texto:
            "Los resultados los midieron comparando con otra residencia parecida durante dos años. El número de recetas por residente bajó a aproximadamente la mitad, y el ahorro en medicación fue considerable. Los psicofármacos para la agitación cayeron especialmente.",
        },
        {
          forma: "texto",
          texto:
            "Y la mortalidad bajó alrededor de un quince por ciento respecto a la residencia de control. Ese dato hay que cogerlo con la cautela habitual de un estudio pequeño y sin aleatorizar, y aun así apunta en una dirección clara.",
        },
        {
          forma: "clave",
          rotulo: "La explicación de Thomas",
          frase: "Que la gente necesita una razón para levantarse por la mañana, y que da igual lo pequeña que sea. Alguien que tiene que dar de comer a un periquito tiene una obligación con otro ser vivo, y eso cambia el motivo por el que se levanta.",
        },
        {
          forma: "texto",
          texto:
            "El caso concreto que cita es el de un hombre que llevaba tiempo encamado, casi sin hablar, con varios psicofármacos pautados. Le pusieron dos periquitos en la habitación. Empezó a describirlos al personal. A las semanas se levantaba y sacaba al perro.",
        },
        {
          forma: "texto",
          texto:
            "El concepto que hay debajo de todo esto tiene respaldo en psicología, y viene de una investigadora de Stanford, Laura Carstensen, que estudió cómo cambian las prioridades de la gente según el tiempo que cree que le queda.",
        },
        {
          forma: "texto",
          texto:
            "Su hallazgo es que la edad, por sí sola, no explica el cambio. Lo que lo explica es la percepción del horizonte. Cuando el futuro parece abierto, la gente prioriza conocer gente nueva, aprender y acumular. Cuando parece corto, prioriza a los suyos y lo que ya sabe que le importa.",
        },
        {
          forma: "arte",
          texto:
            "Lo comprobó en gente joven bajo amenaza: pacientes con enfermedades graves, habitantes de Hong Kong ante el traspaso de 1997, y neoyorquinos después de 2001. En todos los casos, jóvenes con el horizonte acortado elegían igual que los ancianos.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "La consecuencia práctica es que el desinterés de los mayores por lo nuevo no es apatía ni deterioro: es una reasignación razonable de un tiempo limitado. Y que tratarlo como un síntoma a corregir es no haber entendido nada.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale la crítica más dura del libro a las residencias convencionales: que están organizadas para prolongar la vida de gente cuyo problema no es la duración, sino qué se puede hacer con lo que queda.",
        },
        {
          forma: "texto",
          texto:
            "Thomas convirtió aquello en un movimiento, con formación para otras residencias, y su modelo se ha extendido a cientos de centros en varios países, con resultados desiguales según lo en serio que se tomen los principios y no solo los animales.",
        },
        {
          forma: "texto",
          texto:
            "Porque el error habitual, dice Gawande, es copiar los perros y no la parte difícil: ceder el control. Un perro en una residencia donde el residente sigue sin decidir a qué hora se levanta es decoración.",
        },
        {
          forma: "texto",
          texto:
            "Hasta aquí el libro trata de dónde vive la gente. La segunda mitad cambia de asunto y se mete en el terreno donde Gawande es a la vez autor y culpable, y lo dice así.",
        },
        {
          forma: "texto",
          texto:
            "En qué se le dice a alguien que se está muriendo.",
        },
        {
          forma: "texto",
          texto:
            "Y empieza con una paciente suya, Sara Monopoli, de treinta y cuatro años, embarazada de treinta y nueve semanas.",
        },
        {
          forma: "texto",
          texto:
            "A la que le diagnosticaron un cáncer de pulmón con metástasis dos días antes de dar a luz.",
        },
        {
          forma: "texto",
          texto:
            "Y que recibió, en los ocho meses que le quedaban, cuatro líneas distintas de quimioterapia.",
        },
        {
          forma: "texto",
          texto:
            "Ninguna de las cuales tenía posibilidades razonables de funcionar.",
        },
        {
          forma: "texto",
          texto:
            "Y ninguno de sus médicos, incluido él, encontró el momento de decírselo con esas palabras.",
        },
      ],
    },

    {
      titulo: "El helado de chocolate y el fútbol",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El capítulo sobre Sara Monopoli es el más incómodo del libro porque Gawande no se coloca fuera. Cuenta las conversaciones que tuvo con ella y con su marido, y señala en cada una el momento exacto en el que cambió de tema.",
        },
        {
          forma: "texto",
          texto:
            "Cuando ella preguntaba por el pronóstico, él hablaba del siguiente tratamiento. Cuando ella preguntaba si aquello iba a funcionar, él decía que había opciones. Ninguna de las dos respuestas era mentira y ninguna contestaba la pregunta.",
        },
        {
          forma: "clave",
          rotulo: "Por qué lo hacen los médicos",
          frase: "Porque decir la verdad completa parece cruel, porque el paciente casi siempre pide esperanza, y porque ofrecer otro tratamiento es lo único que un médico sabe hacer cuando no tiene nada más. Callar es la salida cómoda para los dos.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un dato que agrava el problema y que casi nadie conoce. Los médicos son sistemáticamente malos prediciendo cuánto le queda a un paciente terminal, y se equivocan siempre en la misma dirección: de más.",
        },
        {
          forma: "texto",
          texto:
            "Un estudio con pacientes derivados a cuidados paliativos encontró que las estimaciones de los médicos eran, de media, unas cinco veces más largas que la supervivencia real. Y cuanto mejor conocía el médico al paciente, más se equivocaba.",
        },
        {
          forma: "texto",
          texto:
            "Ese sesgo tiene una consecuencia práctica enorme: las conversaciones importantes se posponen porque siempre parece que hay tiempo, y cuando por fin se tienen, el paciente ya está demasiado enfermo para participar en ellas.",
        },
        {
          forma: "arte",
          texto:
            "Gawande describe tres tipos de médico. El paternalista, que decide por el paciente. El informativo, que le da todos los datos y le deja elegir solo, que es el modelo actual. Y un tercero, que él llama interpretativo, y que es el que defiende.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "El interpretativo no decide por el paciente ni le suelta una lista de opciones y se va. Le pregunta qué le importa, qué teme y qué está dispuesto a soportar, y con eso le ayuda a decidir. Es el modelo más difícil y el que casi nadie enseña.",
        },
        {
          forma: "texto",
          texto:
            "Para aprender a hacerlo se fue a ver a Susan Block, una especialista en cuidados paliativos de su propio hospital, que le dio una lista de preguntas que él ha reconocido después haber usado cientos de veces.",
        },
        {
          forma: "clave",
          rotulo: "Las preguntas",
          frase: "Qué entiende usted de su situación. Qué le da miedo y qué espera. Qué es lo que no está dispuesto a sacrificar. Y qué tendría que pasar para que un día fuera un buen día. Con esas cuatro respuestas se puede decidir casi todo lo demás.",
        },
        {
          forma: "texto",
          texto:
            "Block le insistió en una regla de método que suena obvia y que casi nadie cumple: en esa conversación hay que hablar menos de la mitad del tiempo. Un médico que habla más del cincuenta por ciento no está teniendo una conversación, está informando.",
        },
        {
          forma: "texto",
          texto:
            "Y le contó su propio caso, que es la escena que le da título a este capítulo. A su padre, Jack Block, psicólogo de setenta y cuatro años, le encontraron un tumor en la médula cervical que iba a dejarle tetrapléjico si no lo operaban.",
        },
        {
          forma: "texto",
          texto:
            "La operación también podía dejarle tetrapléjico. Las probabilidades eran malas por los dos lados, y ella, que se dedicaba profesionalmente a estas conversaciones, se encontró incapaz de tenerla con su propio padre.",
        },
        {
          forma: "arte",
          texto:
            "La tuvo. Le preguntó qué estaba dispuesto a aguantar para seguir vivo. Él lo pensó y contestó: si puedo comer helado de chocolate y ver el fútbol en la televisión, estoy dispuesto a seguir. Dijo que si podía hacer esas dos cosas, aceptaba lo que hiciera falta.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Ella escribió aquello en un papel. Durante la operación surgió una complicación y el cirujano salió a preguntar si continuaban, con el riesgo de que quedara paralizado. Ella tenía la respuesta de su padre y pudo contestar en veinte segundos.",
        },
        {
          forma: "texto",
          texto:
            "Su padre salió de la operación con una parálisis parcial, pasó meses en rehabilitación, recuperó bastante, volvió a escribir artículos científicos y vivió diez años más. Y comió helado de chocolate y vio el fútbol.",
        },
        {
          forma: "texto",
          texto:
            "Ese es el argumento del libro entero, dicho sin discursos: no se trata de elegir entre luchar o rendirse. Se trata de saber qué es lo que hace que a esta persona concreta le merezca la pena, y decidir en función de eso.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí entra el dato que más ha cambiado la conversación pública sobre este tema, y que es la razón por la que este libro se recomienda en las facultades de medicina.",
        },
        {
          forma: "texto",
          texto:
            "En 2010 se publicó en el New England Journal of Medicine un ensayo aleatorizado con pacientes de cáncer de pulmón con metástasis, recién diagnosticados, en el hospital general de Massachusetts.",
        },
        {
          forma: "clave",
          rotulo: "El diseño",
          frase: "A la mitad se les dio el tratamiento oncológico habitual. A la otra mitad, el mismo tratamiento más una consulta con el equipo de paliativos desde el principio, para hablar de síntomas, de miedos y de objetivos. Nadie dejó de recibir quimioterapia.",
        },
        {
          forma: "texto",
          texto:
            "El grupo con paliativos desde el principio tuvo menos depresión, mejor calidad de vida y recibió menos tratamiento agresivo en las últimas semanas. Eso era lo esperable y era lo que se buscaba medir.",
        },
        {
          forma: "texto",
          texto:
            "Lo que nadie esperaba es que vivieran más. La mediana de supervivencia fue de unos once meses y medio frente a unos ocho meses y medio: alrededor de un veinticinco por ciento más de vida, en el grupo que recibió menos tratamiento agresivo.",
        },
        {
          forma: "texto",
          texto:
            "Ese resultado se ha replicado en otros contextos y ha cambiado las guías clínicas de varias sociedades oncológicas, que hoy recomiendan integrar cuidados paliativos desde el diagnóstico en enfermedad avanzada, y no al final.",
        },
        {
          forma: "arte",
          texto:
            "La explicación probable no es mágica: menos ingresos en cuidados intensivos, menos quimioterapia en pacientes demasiado débiles para tolerarla, mejor control del dolor, mejor nutrición y menos complicaciones evitables.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Y desmonta la creencia más extendida sobre este asunto, que es la razón por la que mucha gente rechaza los paliativos: que aceptarlos es rendirse y morirse antes. En este ensayo, quienes los aceptaron pronto vivieron más.",
        },
        {
          forma: "texto",
          texto:
            "Gawande describe también cómo trabaja una enfermera de cuidados paliativos a domicilio, siguiéndola durante varias visitas, y lo que se ve es que la mayor parte de su trabajo consiste en preguntar y en ajustar cosas pequeñas.",
        },
        {
          forma: "texto",
          texto:
            "Qué le impide dormir. Qué querría poder hacer esta semana. Si el dolor le deja hablar por teléfono con su hija. Y a partir de ahí, cambiar una dosis, mover una cama o conseguir una silla.",
        },
        {
          forma: "texto",
          texto:
            "Sara Monopoli murió en un hospital, con una discusión abierta sobre si intubarla, sin haber tenido nunca esa conversación.",
        },
        {
          forma: "texto",
          texto:
            "Su hija tenía ocho meses.",
        },
        {
          forma: "texto",
          texto:
            "Dos años después, a Gawande le tocó tener esa conversación en el sitio donde no se puede esquivar.",
        },
      ],
    },

    {
      titulo: "Las cenizas en el Ganges",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "A su padre, Atmaram Gawande, urólogo de setenta y cinco años en Ohio, le encontraron un tumor creciendo dentro de la médula espinal, en el cuello. Era un astrocitoma, y por su localización era inoperable sin un riesgo altísimo.",
        },
        {
          forma: "texto",
          texto:
            "El primer neurocirujano al que fueron, en Cleveland, les dijo que había que operar cuanto antes y no contestó ninguna de las preguntas sobre qué pasaría después. Habló casi todo el rato y les dio una fecha.",
        },
        {
          forma: "texto",
          texto:
            "El segundo, en Boston, hizo lo contrario: preguntó a su padre qué era importante para él, cuánto tiempo llevaba con los síntomas y qué estaba dispuesto a perder. Y le dijo que mientras pudiera seguir operando y viviendo su vida, esperar era razonable.",
        },
        {
          forma: "clave",
          rotulo: "La diferencia entre los dos",
          frase: "No estaban en desacuerdo sobre el tumor: los dos veían lo mismo en la resonancia. Estaban en desacuerdo sobre de quién era la decisión. Y esa diferencia le dio a su padre varios años más de operar, de dar clase y de dirigir su club rotario.",
        },
        {
          forma: "texto",
          texto:
            "El deterioro llegó despacio, con la secuencia que el libro ha descrito en abstracto durante doscientas páginas: la mano que falla, el brazo, el equilibrio, y las decisiones que se van tomando una a una sin ver el conjunto.",
        },
        {
          forma: "texto",
          texto:
            "El momento en que dejó de operar. El momento en que dejó de conducir. El momento en que necesitó ayuda para vestirse. Cada uno de ellos discutido en la mesa de la cocina de una familia de tres médicos que sabían perfectamente lo que venía.",
        },
        {
          forma: "arte",
          texto:
            "Gawande escribe que saber medicina no le sirvió de nada en esas conversaciones, y que lo único que le sirvió fueron las cuatro preguntas de Susan Block, que usó con su propio padre sabiendo exactamente lo que estaba haciendo.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Su padre contestó que lo que no soportaría sería estar paralizado, sin poder hablar con la gente y dependiendo de otros para todo. Y que quería estar en casa, y quería estar consciente, aunque eso significara menos tiempo.",
        },
        {
          forma: "texto",
          texto:
            "Con esa respuesta, la familia rechazó una segunda tanda de radioterapia agresiva y pidió cuidados paliativos a domicilio. Su padre pasó sus últimos meses en su casa, recibiendo visitas, hablando por teléfono con la India y comiendo lo que quería.",
        },
        {
          forma: "texto",
          texto:
            "Hubo un episodio que Gawande cuenta sin adornar: un día su padre sufrió una crisis y les pidió que lo llevaran al hospital, y después, ya estabilizado, les dijo que no quería volver a ir. Cambió de opinión. Eso también pasa y el libro lo deja.",
        },
        {
          forma: "clave",
          rotulo: "Lo que aprendió",
          frase: "Que las preferencias de la gente cambian según avanza la enfermedad, y que por eso la conversación no se tiene una vez: se tiene muchas. Un documento de voluntades firmado hace cinco años no sustituye a preguntarle otra vez a la persona.",
        },
        {
          forma: "texto",
          texto:
            "Su padre murió en su casa, con su familia, sin ingreso y sin intubación. La última parte del libro es el viaje de Gawande, su madre y su hermana a Benarés, para esparcir las cenizas en el Ganges según el rito que su padre había pedido.",
        },
        {
          forma: "texto",
          texto:
            "Cuenta el ritual con precisión: los pasos, el sacerdote, el agua, y el detalle de que él, médico, bebió un sorbo del río como manda la ceremonia sabiendo perfectamente el recuento bacteriano de aquel agua, y que tomó antibióticos preventivos antes.",
        },
        {
          forma: "arte",
          texto:
            "Ese detalle es lo mejor del libro entero: un hombre que hace lo que su padre le pidió y a la vez toma precauciones, sin que las dos cosas se contradigan. Es exactamente lo que el libro propone hacer con la medicina y con la muerte.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Ahora, dónde falla el libro. Lo primero, y es estructural: es profundamente estadounidense. Las residencias, la vivienda asistida, el seguro médico y los incentivos que describe son los de un sistema privado que no se parece al español.",
        },
        {
          forma: "texto",
          texto:
            "Aquí la conversación es otra: plazas públicas con listas de espera, la ley de dependencia, y un modelo familiar donde la mayoría de los cuidados los sigue prestando la familia en casa. Las preguntas de fondo valen; los diagnósticos institucionales, no directamente.",
        },
        {
          forma: "texto",
          texto:
            "Lo segundo es el dinero. Todo lo que el libro elogia —apartamentos con llave, personal suficiente, paliativos domiciliarios de calidad— cuesta más que aparcar a alguien en una sala común. El libro lo menciona y no se enfrenta a ello.",
        },
        {
          forma: "texto",
          texto:
            "Lo tercero es quién cuida. Las cuidadoras aparecen constantemente y casi nunca como protagonistas. El coste que tiene para una hija de cincuenta años dejar su trabajo para cuidar a su madre está en el libro de fondo y sin analizar.",
        },
        {
          forma: "clave",
          rotulo: "El cuarto, el más de fondo",
          frase: "Toda la propuesta depende de que exista un profesional con tiempo, formación y disposición para tener esas conversaciones. Eso no es un sistema: es una virtud individual. Y un modelo que se apoya en las virtudes de los profesionales no escala.",
        },
        {
          forma: "texto",
          texto:
            "Y lo quinto: la eutanasia. Hay un capítulo sobre los Países Bajos donde Gawande se muestra ambivalente y termina argumentando que un país que hace bien los paliativos necesita menos la eutanasia. Es un tratamiento breve para un asunto enorme.",
        },
        {
          forma: "texto",
          texto:
            "En España, con una ley de eutanasia vigente desde 2021, ese capítulo se queda especialmente corto, y quien busque aquí una discusión seria sobre la muerte asistida no la va a encontrar.",
        },
        {
          forma: "texto",
          texto:
            "Lo que la gente cree y no es verdad. Lo primero y más importante: que los cuidados paliativos son rendirse y acortan la vida. El ensayo del hospital general de Massachusetts encontró lo contrario, con un veinticinco por ciento más de supervivencia.",
        },
        {
          forma: "texto",
          texto:
            "Segundo: que este libro está en contra de tratar. No lo está. Está en contra de tratar sin haber preguntado antes qué quiere la persona, que es una cosa distinta y bastante más exigente.",
        },
        {
          forma: "texto",
          texto:
            "Tercero: que los mayores temen sobre todo morirse. Lo que dicen temer, cuando se les pregunta, es perder la independencia, no poder decidir y ser una carga para los suyos. La muerte aparece por detrás de esas tres.",
        },
        {
          forma: "texto",
          texto:
            "Cuarto: que los médicos saben cuánto le queda a alguien. Sus estimaciones son sistemáticamente demasiado optimistas, y ese error es la razón por la que las conversaciones importantes llegan tarde.",
        },
        {
          forma: "texto",
          texto:
            "Y quinto: que decir la verdad quita la esperanza. Los datos apuntan a que los pacientes que hablan abiertamente de su pronóstico no están más deprimidos, y sus familias afrontan mejor el duelo después.",
        },
        {
          forma: "texto",
          texto:
            "Lo que queda para llevarse, y no depende de vivir en ningún país concreto, son las cuatro preguntas.",
        },
        {
          forma: "texto",
          texto:
            "Qué entiendes de tu situación. Qué te da miedo y qué esperas. Qué no estás dispuesto a sacrificar. Y qué tendría que pasar para que hoy fuera un buen día.",
        },
        {
          forma: "texto",
          texto:
            "Se pueden hacer con un padre, con una madre o consigo mismo, y el libro sostiene que hacerlas pronto es la única manera de que las decisiones difíciles las tome la persona a la que le van a pasar.",
        },
      ],
    },
  ],
};

export const CODIGO_OBESIDAD: Resumen = {
  id: "codigo-obesidad",
  titulo: "El código de la obesidad",
  autor: "Jason Fung",
  ano: 2016,
  gancho: "Un nefrólogo de Toronto llevaba años poniendo diálisis a diabéticos y un día se dio cuenta de que estaba tratando las complicaciones de una enfermedad que, según él, se podía revertir.",
  porQue:
    "Porque acierta en cosas que la nutrición oficial llevaba treinta años diciendo mal, y porque su mecanismo central se ha puesto a prueba en salas metabólicas después de 2016 y no ha salido bien parado.",
  partes: [
    {
      titulo: "El nefrólogo que se hartó",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Un hospital de Scarborough, en las afueras de Toronto. Un médico especialista en riñón pasa consulta a pacientes que llevan años en diálisis. La mayoría están ahí por lo mismo: diabetes tipo dos de larga evolución que les ha destrozado los riñones.",
        },
        {
          forma: "texto",
          texto:
            "Su trabajo consiste en mantenerlos vivos conectados a una máquina tres veces por semana, cuatro horas cada vez. Es un trabajo técnicamente exigente y bien pagado, y él llevaba tiempo con la sensación incómoda de estar llegando demasiado tarde a todo.",
        },
        {
          forma: "clave",
          rotulo: "Lo que le chirriaba",
          frase: "Que el tratamiento estándar de la diabetes tipo dos consistía en dar insulina a pacientes que ya tenían la insulina alta, y que con ese tratamiento los pacientes engordaban y la enfermedad seguía avanzando. Estaba controlando un número mientras la enfermedad progresaba.",
        },
        {
          forma: "texto",
          texto:
            "El médico se llama Jason Fung, es canadiense, nefrólogo de formación, y a partir de esa observación se dedicó a leer literatura sobre obesidad y metabolismo hasta acabar montando una clínica dedicada a otra cosa distinta de la diálisis.",
        },
        {
          forma: "texto",
          texto:
            "El código de la obesidad se publicó en 2016 y fue un superventas inmediato en todo el mundo. Después escribió sobre ayuno, sobre diabetes y sobre cáncer, y se convirtió en una de las voces más conocidas y más discutidas de la divulgación sobre alimentación.",
        },
        {
          forma: "texto",
          texto:
            "Su punto de partida es una constatación que nadie discute: en los últimos cuarenta años, la obesidad ha aumentado enormemente en casi todos los países del mundo, y ha aumentado en poblaciones muy distintas entre sí, con culturas y comidas que no se parecen en nada.",
        },
        {
          forma: "arte",
          texto:
            "Su argumento contra la explicación habitual es que un fenómeno tan generalizado y tan rápido no puede explicarse por un fallo simultáneo de fuerza de voluntad de miles de millones de personas. Algo cambió en el entorno, y hay que averiguar qué.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Sobre eso hay bastante acuerdo. El desacuerdo empieza inmediatamente después, cuando hay que decir qué cambió exactamente y por qué mecanismo, y ahí Fung propone una respuesta muy concreta que es la tesis del libro.",
        },
        {
          forma: "texto",
          texto:
            "Su respuesta es que la obesidad no es un problema de calorías sino de hormonas, y que la hormona responsable es la insulina. Que engordar no es un problema de contabilidad energética sino de señales que le dicen al cuerpo si guarda o si gasta.",
        },
        {
          forma: "texto",
          texto:
            "Antes de llegar ahí dedica varios capítulos a demoler el modelo que enseñan en todas partes, que es el de comer menos y moverse más. Y esa demolición es la mejor parte del libro, aunque no sea original suya.",
        },
        {
          forma: "clave",
          rotulo: "El problema del modelo de calorías",
          frase: "Que las calorías que entran y las que salen no son variables independientes. Si se reducen mucho las que entran, el cuerpo baja las que salen. Es un termostato, no una cuenta bancaria, y por eso el consejo de comer menos falla de forma tan sistemática.",
        },
        {
          forma: "texto",
          texto:
            "La ecuación en sí no es discutible: si se gasta más energía de la que se ingiere, se pierde peso. Eso es termodinámica y ningún libro la va a derogar. Lo que Fung ataca no es la ecuación, es su utilidad como consejo práctico.",
        },
        {
          forma: "texto",
          texto:
            "Su analogía es que decirle a alguien que engorda porque come más de lo que gasta es como decirle a alguien que se emborracha porque bebe demasiado. Es verdad, no informa de nada y no dice qué hacer.",
        },
        {
          forma: "texto",
          texto:
            "La comparación que usa para explicar por qué es un mal consejo es la de una habitación con demasiado calor. Decir que hace calor porque entra más calor del que sale es cierto y no sirve; lo que hay que preguntar es quién ha subido el termostato y por qué.",
        },
        {
          forma: "texto",
          texto:
            "Y añade una observación clínica que cualquier médico de familia reconoce: el consejo de comer menos y moverse más se lleva dando cuarenta años, con carteles, campañas y consultas, en el mismo periodo en que la obesidad se ha multiplicado en todos los países que lo aplicaron.",
        },
        {
          forma: "texto",
          texto:
            "Un consejo que se da masivamente durante cuatro décadas mientras el problema empeora es, como mínimo, un consejo incompleto. Fung sostiene que no es que la gente no lo haya seguido: es que seguirlo produce el resultado contrario a medio plazo.",
        },
        {
          forma: "texto",
          texto:
            "Su explicación de por qué se mantiene pese a todo es que sitúa la responsabilidad entera en el paciente. Si la fórmula es correcta y el paciente no adelgaza, la conclusión automática es que no la está cumpliendo, y eso deja al médico sin nada más que decir.",
        },
        {
          forma: "texto",
          texto:
            "Y añade el dato que hunde el consejo estándar: en los estudios de seguimiento a largo plazo, la inmensa mayoría de las personas que pierden peso con una dieta hipocalórica lo recuperan en un plazo de tres a cinco años, y una parte recupera más del que perdió.",
        },
        {
          forma: "arte",
          texto:
            "Ese dato es sólido y no lo discute nadie en el campo. Lo que se discute es qué se deduce de él: si el problema es que las dietas no se sostienen, o si es que el cuerpo defiende activamente su peso con mecanismos que ninguna fuerza de voluntad vence.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Fung sostiene lo segundo, y para demostrarlo recurre a dos casos que son los mejores argumentos de todo el libro y que conviene conocer aunque uno no compre nada más de lo que dice.",
        },
        {
          forma: "texto",
          texto:
            "El primero ocurrió en un sótano de un estadio universitario de Minnesota durante la Segunda Guerra Mundial.",
        },
        {
          forma: "texto",
          texto:
            "Y el segundo, en un programa de televisión americano en el que gente con obesidad severa competía por perder peso delante de las cámaras.",
        },
      ],
    },

    {
      titulo: "Los treinta y seis hombres de Minnesota",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Noviembre de 1944. En la Universidad de Minnesota, un fisiólogo llamado Ancel Keys pone en marcha un experimento para saber cómo recuperar a las poblaciones europeas que están pasando hambre por la guerra. Necesita voluntarios dispuestos a morirse de hambre bajo control médico.",
        },
        {
          forma: "texto",
          texto:
            "Se presentan objetores de conciencia que se niegan a combatir y quieren servir de otra manera. Selecciona a treinta y seis, todos jóvenes y sanos. Los primeros tres meses comen con normalidad y se les mide todo. Después empieza la restricción.",
        },
        {
          forma: "clave",
          rotulo: "El régimen",
          frase: "Unas mil quinientas kilocalorías diarias durante veinticuatro semanas, con patatas, pan, nabos y macarrones, más veintidós kilómetros de marcha semanal. Es aproximadamente la mitad de lo que necesitaban, y es más comida de la que permiten muchas dietas comerciales de hoy.",
        },
        {
          forma: "texto",
          texto:
            "Perdieron alrededor de una cuarta parte de su peso, que era lo previsto. Lo que no estaba previsto, y es lo que hace famoso al experimento, es todo lo demás que les ocurrió y que Keys documentó con un detalle enorme.",
        },
        {
          forma: "texto",
          texto:
            "Su metabolismo en reposo cayó en torno a un cuarenta por ciento. La frecuencia cardíaca bajó de unos cincuenta y cinco latidos por minuto a menos de cuarenta. Tenían frío constante, se movían despacio y les costaba subir escaleras.",
        },
        {
          forma: "texto",
          texto:
            "El cambio psicológico fue todavía más llamativo. Se volvieron obsesivos con la comida: hablaban de comida, soñaban con comida, coleccionaban recetas, leían libros de cocina y algunos se apuntaron a estudiar cocina profesional. Dejaron de interesarse por el sexo, la política y sus amigos.",
        },
        {
          forma: "arte",
          texto:
            "Varios desarrollaron conductas que hoy se describirían como un trastorno alimentario: comer a escondidas, masticar chicle durante horas, hacer durar una comida cuarenta minutos. Uno se cortó tres dedos con un hacha y nunca supo si lo hizo a propósito.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "La conclusión que saca Fung es directa: eso no es una crisis de fuerza de voluntad. Es la respuesta fisiológica y psicológica de un cuerpo sano a una restricción sostenida, y es exactamente la misma respuesta que produce cualquier dieta hipocalórica prolongada.",
        },
        {
          forma: "texto",
          texto:
            "El segundo caso es de 2016 y es el que más impresiona, porque no es un experimento de guerra sino gente normal siguiendo el consejo estándar con todos los recursos posibles a su disposición.",
        },
        {
          forma: "texto",
          texto:
            "Un equipo de investigadores del instituto nacional de salud de Estados Unidos siguió durante seis años a catorce concursantes de un programa de televisión en el que personas con obesidad severa competían por perder peso con dieta y ejercicio intensivos.",
        },
        {
          forma: "clave",
          rotulo: "Lo que encontraron",
          frase: "Trece de los catorce habían recuperado casi todo el peso perdido. Y lo más llamativo: su metabolismo en reposo seguía deprimido en unas quinientas kilocalorías diarias seis años después, y la depresión no se había corregido con el tiempo, sino que era mayor que al terminar el programa.",
        },
        {
          forma: "texto",
          texto:
            "Es decir: seis años después, esas personas quemaban en reposo mucho menos de lo que correspondería a alguien de su mismo peso y composición que nunca hubiera adelgazado. Su cuerpo seguía comportándose como si estuviera defendiendo un peso anterior.",
        },
        {
          forma: "texto",
          texto:
            "Ese estudio es real, está publicado en una revista científica seria y sus resultados no se discuten. Es la mejor evidencia disponible de que el cuerpo defiende un peso determinado con mecanismos que operan durante años.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale el concepto que Fung usa en todo el libro: el peso de referencia, una especie de termostato corporal que el organismo intenta mantener y que explica por qué las dietas fracasan a largo plazo con tanta regularidad.",
        },
        {
          forma: "arte",
          texto:
            "La analogía que emplea es buena: si en una habitación hace demasiado calor, se puede abrir la ventana, y el radiador trabajará más para compensar. Lo que hay que hacer es bajar el termostato, y el termostato del peso no se toca comiendo menos.",
          arte: "mapa",
        },
        {
          forma: "texto",
          texto:
            "Hasta aquí, casi todo lo que dice el libro es defendible y está bien apoyado. El fracaso a largo plazo de la restricción calórica, la adaptación metabólica y el peso defendido son fenómenos reconocidos por prácticamente todo el mundo en el campo.",
        },
        {
          forma: "texto",
          texto:
            "Y una tercera parte del libro, sobre el ejercicio, también aguanta. Fung sostiene que el ejercicio es excelente para casi todo y bastante malo como herramienta para adelgazar, y esa afirmación tiene mucho respaldo.",
        },
        {
          forma: "texto",
          texto:
            "Los estudios de intervención con ejercicio sin cambios en la dieta producen pérdidas de peso pequeñas, del orden de uno o dos kilos, porque el gasto se compensa parcialmente comiendo más y moviéndose menos el resto del día.",
        },
        {
          forma: "texto",
          texto:
            "Eso no es un argumento contra el ejercicio, que mejora la tensión, el azúcar, el ánimo, la masa muscular y la mortalidad. Es un argumento contra usarlo como estrategia principal de pérdida de peso, y ahí el libro tiene razón.",
        },
        {
          forma: "texto",
          texto:
            "El mecanismo de esa compensación está bastante estudiado y tiene dos vías. Una es el hambre: el ejercicio intenso abre el apetito y la ingesta sube de forma bastante ajustada a lo gastado, casi siempre sin que la persona sea consciente.",
        },
        {
          forma: "texto",
          texto:
            "La otra es más sutil y se ha medido en varios trabajos: después de una sesión dura de gimnasio, la gente se mueve menos el resto del día. Menos escaleras, menos paseos, más rato sentada. El gasto total sube mucho menos de lo que sugeriría la pantalla de la máquina.",
        },
        {
          forma: "texto",
          texto:
            "Hay estudios en poblaciones con estilos de vida muy distintos que apuntan en la misma dirección: cazadores recolectores que caminan muchos kilómetros al día tienen un gasto energético total no muy distinto del de oficinistas occidentales de su mismo tamaño.",
        },
        {
          forma: "texto",
          texto:
            "El problema empieza en el capítulo siguiente, cuando hay que explicar qué mueve ese termostato.",
        },
        {
          forma: "texto",
          texto:
            "Porque Fung tiene una respuesta, y es una sola.",
        },
      ],
    },

    {
      titulo: "La hormona que guarda",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La insulina es una hormona que fabrica el páncreas y cuya función principal es permitir que la glucosa de la sangre entre en las células. Sube después de comer, sobre todo con hidratos de carbono, y baja cuando llevamos horas sin comer.",
        },
        {
          forma: "texto",
          texto:
            "Y tiene una segunda función que es la que interesa al libro: mientras la insulina está alta, el cuerpo está en modo de almacenamiento. Guarda energía en forma de glucógeno y de grasa, y bloquea la salida de grasa del tejido adiposo.",
        },
        {
          forma: "clave",
          rotulo: "La tesis de Fung",
          frase: "Que la insulina alta de forma crónica es la causa de la obesidad. Mientras esté alta, el cuerpo no puede usar sus reservas de grasa, así que si hay déficit de energía la sacará bajando el gasto y aumentando el hambre, en lugar de sacarla de la grasa.",
        },
        {
          forma: "texto",
          texto:
            "El apoyo más claro que tiene esa idea es clínico y no se discute: los pacientes con diabetes tipo uno a los que se les pone insulina engordan, y los que se ponen dosis insuficientes adelgazan. Y a los diabéticos tipo dos tratados con insulina les pasa lo mismo.",
        },
        {
          forma: "texto",
          texto:
            "También se sabe que hay tumores raros del páncreas que producen insulina en exceso y que causan aumento de peso, y que ciertos fármacos que suben la insulina engordan. La insulina hace engordar: eso es un hecho establecido.",
        },
        {
          forma: "texto",
          texto:
            "La pregunta que separa a Fung del resto del campo es otra: si la insulina crónicamente elevada de una persona con obesidad es la causa de esa obesidad o una consecuencia de ella. Y esa pregunta es mucho más difícil de contestar de lo que parece.",
        },
        {
          forma: "arte",
          texto:
            "Fung sostiene que es la causa, y monta un círculo vicioso: comer hidratos refinados sube la insulina, la insulina alta mantenida genera resistencia a la insulina, y la resistencia obliga al páncreas a producir todavía más para conseguir el mismo efecto.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "En ese esquema, la resistencia a la insulina no la causa la grasa corporal, sino la exposición repetida a insulina alta. Y por eso su recomendación no es solo qué comer, sino cada cuánto, porque cada comida vuelve a levantar la hormona.",
        },
        {
          forma: "texto",
          texto:
            "El villano concreto que señala es el azúcar, y dentro del azúcar, la fructosa. Aquí su argumento es de los mejores del libro y tiene bastante apoyo bioquímico.",
        },
        {
          forma: "texto",
          texto:
            "La glucosa la puede usar cualquier célula del cuerpo. La fructosa, en cambio, se metaboliza casi exclusivamente en el hígado, y cuando llega en cantidad, una parte se convierte allí en grasa mediante un proceso que se llama lipogénesis de novo.",
        },
        {
          forma: "clave",
          rotulo: "Por qué eso importa",
          frase: "Porque la grasa acumulada en el hígado se asocia estrechamente con la resistencia a la insulina, y porque la fructosa no dispara las mismas señales de saciedad que otros alimentos. Se puede beber medio litro de refresco sin que el cuerpo registre que ha ingerido energía.",
        },
        {
          forma: "texto",
          texto:
            "El azúcar de mesa es mitad glucosa y mitad fructosa, y el jarabe de maíz de alta fructosa, que en Estados Unidos endulza casi todo lo industrial, tiene una proporción parecida o mayor. Su consumo se disparó exactamente en las décadas en que se disparó la obesidad.",
        },
        {
          forma: "texto",
          texto:
            "La parte de la fruta entera la resuelve bien: la fructosa de una manzana viene con fibra, agua y volumen, llega despacio al hígado y es prácticamente imposible comer la cantidad de fruta equivalente a un refresco. El problema es el azúcar líquido y el añadido.",
        },
        {
          forma: "arte",
          texto:
            "Otro capítulo bien traído es el de la fibra y el vinagre. Sostiene que la fibra actúa como antídoto de los propios hidratos, ralentizando su absorción, y que la acidez reduce la respuesta glucémica de una comida. Las dos cosas tienen respaldo experimental razonable.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Y dedica un capítulo entero a la industria alimentaria y a las guías dietéticas oficiales, sosteniendo que la recomendación de reducir grasa que se generalizó desde finales de los setenta empujó a la población hacia los hidratos refinados y contribuyó al problema.",
        },
        {
          forma: "texto",
          texto:
            "Esa parte es la más floja del libro en términos de método: es una correlación temporal entre unas guías y una epidemia, presentada como si fuera una demostración causal, y con un tono conspirativo que le resta credibilidad a todo lo anterior.",
        },
        {
          forma: "texto",
          texto:
            "El problema de esa clase de argumento es que en esas mismas décadas cambiaron muchísimas otras cosas: el precio relativo de la comida procesada, el tamaño de las raciones, el trabajo físico, el transporte, las horas de sueño y la aparición de la comida a domicilio.",
        },
        {
          forma: "texto",
          texto:
            "Cualquiera de ellas coincide igual de bien en el tiempo con la curva de obesidad, y elegir una y presentarla como la causa es exactamente el error que el libro le reprocha a la nutrición oficial en otros capítulos.",
        },
        {
          forma: "texto",
          texto:
            "Hay además un dato incómodo para su relato: el consumo de azúcar añadido en Estados Unidos lleva bajando desde principios de los dos mil, y la obesidad ha seguido subiendo en ese mismo periodo. No lo refuta, y obliga a matizar la historia.",
        },
        {
          forma: "texto",
          texto:
            "Lo honesto es decir que el azúcar es casi con seguridad una parte del problema, y que presentarlo como el problema entero deja fuera demasiadas cosas para explicar un fenómeno que ocurre a la vez en países con dietas completamente distintas.",
        },
        {
          forma: "texto",
          texto:
            "Con el mecanismo establecido, la recomendación práctica sale sola: si el problema es la insulina alta y constante, hay que bajarla. Y para eso no basta con cambiar qué se come.",
        },
        {
          forma: "texto",
          texto:
            "Hay que cambiar cuándo.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí es donde este libro se separó de todos los demás y donde consiguió su público.",
        },
      ],
    },

    {
      titulo: "Cuándo comes",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El consejo de comer cinco o seis veces al día en porciones pequeñas se convirtió en dogma nutricional durante décadas. Se justificaba diciendo que mantiene el metabolismo activo y evita los picos de hambre que llevan a atracones.",
        },
        {
          forma: "texto",
          texto:
            "Fung lo desmonta y aquí tiene razón sin matices. El efecto térmico de los alimentos —la energía que cuesta digerir— es proporcional a la cantidad total ingerida, no al número de veces que se come. Repartir la misma comida en seis tomas no acelera nada.",
        },
        {
          forma: "clave",
          rotulo: "De dónde venía ese consejo",
          frase: "En buena parte de estudios financiados por fabricantes de productos de picoteo, barritas y cereales, que tenían un interés evidente en que la gente comiera más veces al día. Es de los pocos casos en que el argumento del conflicto de intereses está bien documentado.",
        },
        {
          forma: "texto",
          texto:
            "Con el desayuno pasa algo parecido. La idea de que es la comida más importante del día se apoya en estudios observacionales que muestran que quien desayuna pesa menos, y esos estudios no distinguen causa de correlación ni controlan el estilo de vida.",
        },
        {
          forma: "texto",
          texto:
            "Los ensayos aleatorizados que se han hecho después no encuentran que obligar a desayunar ayude a perder peso, y en algunos casos los que desayunan acaban ingiriendo más calorías totales. Buena parte de la investigación clásica sobre desayuno la financió la industria de los cereales.",
        },
        {
          forma: "texto",
          texto:
            "De ahí llega a su propuesta central, que es el ayuno intermitente: concentrar la comida en una ventana de horas y dejar el resto del día sin ingerir nada con calorías, de modo que la insulina baje durante un periodo prolongado.",
        },
        {
          forma: "arte",
          texto:
            "Los protocolos que describe van de lo suave a lo agresivo: dieciséis horas sin comer y ocho para comer, que en la práctica es saltarse el desayuno; ayunos de veinticuatro horas un par de veces por semana; y ayunos de treinta y seis horas o más para casos con supervisión.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Sus argumentos a favor son razonables. Que el ayuno es una situación fisiológicamente normal, no una anomalía; que el cuerpo tiene mecanismos específicos para funcionar sin comida; y que durante siglos la mayoría de la gente comió dos veces al día sin problema.",
        },
        {
          forma: "texto",
          texto:
            "Desmonta también el miedo al modo hambruna a corto plazo: en ayunos cortos el metabolismo no se hunde, en parte por el aumento de noradrenalina, y algunos estudios muestran gasto energético mantenido o incluso ligeramente aumentado en las primeras setenta y dos horas.",
        },
        {
          forma: "texto",
          texto:
            "Y señala una ventaja práctica que es probablemente la razón real de que funcione para mucha gente: es una regla sencilla. No hay que contar, ni pesar, ni calcular porciones. Solo hay dos estados posibles, comiendo o sin comer, y eso es fácil de sostener.",
        },
        {
          forma: "clave",
          rotulo: "Donde se pasa de frenada",
          frase: "El libro presenta el ayuno como superior a la restricción de calorías, y los ensayos que comparan las dos cosas cara a cara encuentran resultados equivalentes. El ayuno funciona porque hace que se coma menos, no por un efecto metabólico añadido.",
        },
        {
          forma: "texto",
          texto:
            "El estudio más citado sobre esto es un ensayo aleatorizado publicado en 2020 en el que se comparó una ventana de ocho horas con el patrón habitual de tres comidas. La pérdida de peso fue pequeña y no significativamente distinta entre grupos.",
        },
        {
          forma: "texto",
          texto:
            "Y encontró algo que Fung no menciona: en el grupo de ayuno, una parte considerable de lo perdido fue masa magra, no grasa. No es un resultado definitivo y sí un aviso de que el ayuno sin atención a la proteína y a la fuerza tiene un coste.",
        },
        {
          forma: "arte",
          texto:
            "Hay además contraindicaciones que el libro menciona demasiado de pasada para lo entusiasta que es con los ayunos largos: personas con diabetes tipo uno, con medicación que baja el azúcar, embarazadas, personas con bajo peso y cualquiera con antecedentes de trastorno alimentario.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "En ese último grupo el riesgo es real y no es teórico: prescribirle restricción horaria estricta a alguien con historia de atracones o de anorexia puede reactivar el problema, y eso merecía bastante más de un párrafo.",
        },
        {
          forma: "texto",
          texto:
            "Hay un segundo riesgo práctico que tampoco se trata bien: mucha gente con diabetes tipo dos que empieza a ayunar sin ajustar su medicación puede tener hipoglucemias serias, porque la dosis estaba calculada para un patrón de comidas que ya no existe.",
        },
        {
          forma: "texto",
          texto:
            "Fung trabaja con pacientes supervisados y ajusta la medicación él mismo, así que en su consulta ese riesgo está controlado. El lector que compra el libro en una librería no tiene a nadie ajustándole nada, y esa diferencia debería estar en la primera página.",
        },
        {
          forma: "texto",
          texto:
            "La recomendación sensata, que el libro podría haber hecho y no hace con suficiente énfasis, es que cualquiera con medicación para el azúcar o para la tensión hable con su médico antes de cambiar el patrón de comidas, no después.",
        },
        {
          forma: "texto",
          texto:
            "Con todo, la parte práctica del libro es la más aprovechable, y se puede resumir en cinco cosas que casi nadie discute a estas alturas.",
        },
        {
          forma: "texto",
          texto:
            "Quitar el azúcar añadido y sobre todo el líquido. Reducir los cereales refinados. Comer proteína y grasa de verdad. Añadir fibra y verdura a cada comida. Y dejar de picar entre horas.",
        },
        {
          forma: "texto",
          texto:
            "Esas cinco recomendaciones no dependen de que su mecanismo sea correcto, y ese es el punto que hay que mirar al final.",
        },
        {
          forma: "texto",
          texto:
            "Porque desde 2016 se han hecho los experimentos que ponen a prueba ese mecanismo.",
        },
        {
          forma: "texto",
          texto:
            "En habitaciones cerradas donde se mide cada gramo que entra y cada caloría que sale.",
        },
      ],
    },

    {
      titulo: "La sala metabólica de Kevin Hall",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Una sala metabólica es una habitación sellada en la que una persona vive durante días o semanas mientras se mide con precisión el oxígeno que consume y el dióxido de carbono que exhala, lo que permite calcular exactamente cuánta energía está gastando.",
        },
        {
          forma: "texto",
          texto:
            "Toda la comida que entra está pesada y analizada, y no hay manera de comer nada que no esté registrado. Es el único diseño experimental que permite comprobar afirmaciones sobre metabolismo sin depender de que la gente recuerde bien lo que ha comido.",
        },
        {
          forma: "clave",
          rotulo: "Quién las usa",
          frase: "Kevin Hall, investigador del instituto nacional de salud de Estados Unidos, es el mismo que dirigió el estudio de los concursantes del programa de televisión que Fung usa como prueba principal. Y después hizo los experimentos que contradicen su mecanismo.",
        },
        {
          forma: "texto",
          texto:
            "El primero se publicó en 2015. Se comparó, en sala metabólica y con las mismas calorías totales, una dieta con restricción de hidratos frente a una con restricción de grasa, midiendo cuánta grasa corporal perdía cada persona en cada condición.",
        },
        {
          forma: "texto",
          texto:
            "Según el modelo de la insulina, la dieta baja en hidratos debería haber ganado con claridad, porque baja la insulina y desbloquea la salida de grasa. El resultado fue el contrario: la restricción de grasa produjo algo más de pérdida de grasa corporal.",
        },
        {
          forma: "texto",
          texto:
            "Las diferencias eran pequeñas y el estudio era corto y con pocos participantes, así que no zanja nada por sí solo. Lo que sí hace es apuntar en la dirección opuesta a la predicción central del libro, que es lo relevante.",
        },
        {
          forma: "arte",
          texto:
            "El segundo experimento es de 2021 y es más interesante, porque en vez de fijar las calorías dejó comer libremente. Los participantes vivían internados y podían comer todo lo que quisieran de un menú bajo en grasa y de base vegetal, o de uno cetogénico.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "El modelo de Fung predice que con la dieta cetogénica, al estar la insulina baja, se comería espontáneamente menos. Lo que ocurrió fue lo contrario: comiendo libremente, la gente ingirió del orden de setecientas kilocalorías diarias menos con la dieta baja en grasa.",
        },
        {
          forma: "texto",
          texto:
            "Hay un tercer estudio que pone a prueba la otra afirmación del libro, la de que hay personas cuyo perfil de insulina las hace responder mejor a una dieta baja en hidratos. Es un ensayo grande de la Universidad de Stanford publicado en 2018.",
        },
        {
          forma: "clave",
          rotulo: "Qué encontró",
          frase: "Más de seiscientos adultos repartidos al azar entre una dieta baja en grasa sana y una baja en hidratos sana, durante doce meses. La diferencia media de pérdida de peso fue de menos de un kilo y no significativa. Y ni la secreción de insulina ni el genotipo predijeron quién iba mejor con cuál.",
        },
        {
          forma: "texto",
          texto:
            "Ese último detalle es el que más directamente contradice al libro: la idea de que se puede saber por la insulina de alguien qué dieta le conviene se puso a prueba con un diseño hecho a medida, y no funcionó.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí encontró ese estudio es que los dos grupos perdieron peso de forma parecida, y que lo que ambas dietas tenían en común era eliminar azúcar añadido y harinas refinadas y comer más verdura y comida sin procesar.",
        },
        {
          forma: "texto",
          texto:
            "Y ese es probablemente el resumen honesto de todo el asunto: las recomendaciones prácticas de Fung funcionan razonablemente bien, y su explicación de por qué funcionan parece no ser la correcta.",
        },
        {
          forma: "arte",
          texto:
            "Hay una tercera hipótesis que ha ido ganando terreno y que es compatible con casi todos los datos: que el factor decisivo es el grado de procesamiento de la comida. Un ensayo del mismo laboratorio encontró que con comida ultraprocesada la gente come unas quinientas kilocalorías diarias más sin notarlo.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Eso explicaría por qué funcionan dietas con composiciones opuestas: todas eliminan los ultraprocesados. Y explicaría la epidemia mejor que las guías dietéticas, porque el consumo de ultraprocesados creció en todos los países al mismo tiempo.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, dónde falla el libro en conjunto. Lo primero, ya dicho: presenta como establecido un mecanismo que se ha puesto a prueba y ha salido mal parado en varios diseños distintos.",
        },
        {
          forma: "texto",
          texto:
            "Lo segundo: la selección de estudios. Cita con detalle los que apoyan su tesis y despacha o ignora los que no. Es una práctica habitual en la divulgación de este tipo y no por habitual deja de ser un problema serio en un libro sobre salud.",
        },
        {
          forma: "texto",
          texto:
            "Lo tercero: el tono. Se burla de la nutrición académica, sugiere connivencias con la industria y presenta a la profesión como un bloque equivocado. Eso vende y hace difícil separar sus buenos argumentos de su retórica.",
        },
        {
          forma: "texto",
          texto:
            "Y lo cuarto: la ligereza con las contraindicaciones del ayuno prolongado, en un libro que sabe perfectamente que lo va a leer gente con diabetes y con medicación.",
        },
        {
          forma: "clave",
          rotulo: "Lo que la gente cree y no es verdad",
          frase: "Que este libro demuestra que las calorías no importan. No lo demuestra ni puede: el balance energético es termodinámica. Lo que sostiene, y en eso tiene razón, es que las calorías que entran y las que salen no son independientes, y por eso contarlas funciona tan mal como estrategia.",
        },
        {
          forma: "texto",
          texto:
            "Segundo: que el ayuno intermitente es superior a comer menos. Los ensayos que los comparan encuentran resultados equivalentes. Es una herramienta buena porque es simple de seguir, no porque tenga un efecto metabólico extra.",
        },
        {
          forma: "texto",
          texto:
            "Tercero: que la resistencia a la insulina la causan los hidratos de la dieta. La causalidad está discutida, y hay bastante evidencia de que la grasa acumulada en el hígado y el músculo también la produce, con lo que el círculo puede empezar por otro sitio.",
        },
        {
          forma: "texto",
          texto:
            "Y cuarto, en la otra dirección: que comer cinco veces al día acelera el metabolismo y que hay que desayunar sí o sí. Eso es falso, Fung lo desmonta correctamente y sigue repitiéndose en todas partes.",
        },
        {
          forma: "texto",
          texto:
            "El balance justo es este: un libro con un mecanismo probablemente equivocado, con una selección de pruebas sesgada y con un tono innecesariamente beligerante.",
        },
        {
          forma: "texto",
          texto:
            "Y que acertó antes que casi nadie en tres cosas que la nutrición oficial llevaba treinta años diciendo mal: que picar entre horas no ayuda, que el desayuno obligatorio no tiene base, y que el fracaso de las dietas es fisiológico y no un defecto moral del que las hace.",
        },
        {
          forma: "texto",
          texto:
            "Quien quiera quedarse con lo aprovechable no necesita creerse la teoría.",
        },
        {
          forma: "texto",
          texto:
            "Quitar el azúcar líquido, reducir las harinas refinadas, comer comida que no venga en un envase con quince ingredientes, y dejar de comer entre horas.",
        },
        {
          forma: "texto",
          texto:
            "Eso lo firma tanto Jason Fung como el investigador que ha dedicado diez años a demostrar que su mecanismo no es el correcto.",
        },
      ],
    },
  ],
};

export const DIETA_COJEA: Resumen = {
  id: "dieta-cojea",
  titulo: "Mi dieta cojea",
  autor: "Aitor Sánchez García",
  ano: 2016,
  gancho: "En 2015, la pirámide alimentaria oficial española tenía cerveza y vino dentro, y estaba patrocinada, entre otros, por fabricantes de bollería y de bebidas alcohólicas.",
  porQue:
    "Porque es el libro que puso nombre en español a las mentiras que hay en cualquier supermercado, y porque su parte más útil —qué comer— es la más corta.",
  partes: [
    {
      titulo: "El nutricionista que no estaba en el ambulatorio",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Un centro de salud español, cualquier día. Un paciente con sobrepeso, colesterol alto y prediabetes sale de la consulta del médico de familia con una hoja fotocopiada de recomendaciones dietéticas y una cita para dentro de seis meses. En ese centro no hay ningún dietista-nutricionista.",
        },
        {
          forma: "texto",
          texto:
            "No es una excepción: es la norma. España tiene una de las peores proporciones de dietistas-nutricionistas por habitante de Europa occidental, y la inmensa mayoría de ellos trabaja en consultas privadas, en la industria o en clínicas de estética, no en la sanidad pública.",
        },
        {
          forma: "clave",
          rotulo: "La contradicción de partida",
          frase: "Es un país donde la obesidad y la diabetes tipo dos crecen año tras año, donde la dieta es responsable de una parte enorme de la carga de enfermedad, y donde el profesional formado específicamente para eso está fuera del sistema que atiende a la población.",
        },
        {
          forma: "texto",
          texto:
            "El autor de este libro es Aitor Sánchez García, nacido en Granada en 1988, dietista-nutricionista y tecnólogo de alimentos, que abrió un blog en 2012 con el nombre que después dio título al libro y que se convirtió en uno de los más leídos del sector en español.",
        },
        {
          forma: "texto",
          texto:
            "El libro salió en 2016 y fue un éxito inmediato, con reediciones continuas y una secuela dos años después. Su formato es sencillo: coge creencias muy extendidas sobre alimentación, las desmonta una por una y explica de dónde salieron.",
        },
        {
          forma: "texto",
          texto:
            "Su reivindicación profesional recorre el libro entero y conviene entenderla porque explica el tono. En España, dietista-nutricionista es un título universitario regulado, con una carrera de cuatro años, y la palabra nutricionista a secas no está protegida.",
        },
        {
          forma: "arte",
          texto:
            "Eso significa que cualquiera puede llamarse coach nutricional, asesor en nutrición o experto en alimentación después de un curso de fin de semana, y montar una consulta. Y que quien busca ayuda no tiene manera fácil de distinguir a uno de otro.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "La consecuencia práctica la ve cualquiera que haya intentado perder peso en España: se acaba en manos de un centro de dietas de franquicia, de un herbolario, de un entrenador personal con opiniones o de un plan descargado de internet.",
        },
        {
          forma: "texto",
          texto:
            "Su segundo objetivo es la propia profesión. Dedica páginas duras a los dietistas que ponen su título al servicio de una marca, que aparecen en anuncios de galletas o que avalan productos con perfiles nutricionales malos a cambio de dinero.",
        },
        {
          forma: "texto",
          texto:
            "Y a las sociedades científicas que aceptan patrocinios de las empresas cuyos productos deberían estar evaluando, que es donde el libro conecta con su capítulo más citado y el que le dio notoriedad fuera del sector.",
        },
        {
          forma: "clave",
          rotulo: "El problema de fondo que plantea",
          frase: "Que la información nutricional que llega a la gente no viene de la sanidad pública ni de la universidad, sino de la publicidad, de los envases y de los programas de televisión. Y que quien paga esa información es quien vende el producto.",
        },
        {
          forma: "texto",
          texto:
            "Ese planteamiento no es original suyo ni es exclusivo de España, y en el caso español tiene un ejemplo tan claro que resulta casi cómico, y ocupa el capítulo siguiente.",
        },
        {
          forma: "texto",
          texto:
            "Antes conviene decir qué tipo de libro es este, para que nadie lo compre esperando otra cosa: no es un plan de alimentación, no trae menús semanales y no dice cuántas calorías comer.",
        },
        {
          forma: "texto",
          texto:
            "Es un libro de desmontar creencias, escrito en un tono directo y con bastante mala uva, dirigido a alguien que hace la compra semanal en un supermercado español y que lleva años oyendo cosas contradictorias.",
        },
        {
          forma: "arte",
          texto:
            "Su virtud principal es que trabaja con productos reales y con marcas reconocibles, no con nutrientes abstractos. Habla de los cereales del desayuno, del pan de molde, del zumo del brik y de las galletas que anuncian que llevan fibra.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Eso lo hace mucho más útil que la mayoría de los libros de nutrición traducidos, porque los productos que analiza son los que están en la estantería a la que uno va a ir esta semana.",
        },
        {
          forma: "texto",
          texto:
            "Hay además un motivo por el que un libro así hacía falta en español y no bastaba con traducir uno americano: los productos, las marcas, la normativa de etiquetado y las guías oficiales son distintas, y buena parte de los mitos de aquí no existen allí ni al revés.",
        },
        {
          forma: "texto",
          texto:
            "El ejemplo más claro es el desayuno español, con su cacao soluble, sus galletas de desayuno y su zumo de brik, que es una construcción publicitaria de los años setenta y ochenta que no tiene equivalente exacto en otros países.",
        },
        {
          forma: "texto",
          texto:
            "Y el aceite de oliva, que aquí funciona como comodín moral: cualquier producto con aceite de oliva en la etiqueta pasa a considerarse saludable, aunque sea una bollería industrial con la misma cantidad de azúcar que cualquier otra.",
        },
        {
          forma: "texto",
          texto:
            "El blog del que salió el libro llevaba cuatro años analizando ese tipo de productos uno a uno, con fotos de las etiquetas, y esa costumbre se nota en el texto: casi todas las afirmaciones vienen con un ejemplo comprobable en un supermercado.",
        },
        {
          forma: "texto",
          texto:
            "Y empieza por el documento que durante años se ha colgado en los colegios y en los centros de salud españoles como resumen oficial de cómo hay que comer.",
        },
        {
          forma: "texto",
          texto:
            "Una pirámide.",
        },
        {
          forma: "texto",
          texto:
            "Con la bollería, los embutidos y las bebidas azucaradas dibujados dentro.",
        },
        {
          forma: "texto",
          texto:
            "Y con una recomendación de consumo moderado de vino y cerveza para adultos sanos.",
        },
      ],
    },

    {
      titulo: "La pirámide con cerveza dentro",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En 2015, la Sociedad Española de Nutrición Comunitaria publicó una versión actualizada de la pirámide de la alimentación saludable. Es el documento que se reprodujo en colegios, ambulatorios y libros de texto como referencia de cómo debía comer un español.",
        },
        {
          forma: "texto",
          texto:
            "En la cúspide, en la zona de consumo opcional y ocasional, aparecían la bollería, los dulces, los snacks salados y las bebidas azucaradas. Incluirlos ahí, aunque sea arriba, significa que forman parte del esquema de alimentación saludable.",
        },
        {
          forma: "clave",
          rotulo: "Lo que provocó la polémica",
          frase: "Junto a la pirámide aparecía una recomendación de consumo moderado y opcional de bebidas fermentadas, es decir, cerveza y vino, para adultos sanos. Y en los materiales figuraban patrocinadores del sector de la bollería, de los refrescos y de las bebidas alcohólicas.",
        },
        {
          forma: "texto",
          texto:
            "La reacción de una parte importante de la profesión fue inmediata y muy crítica, y el libro recoge ese debate. No era una acusación de mala fe individual: era la constatación de que un documento de salud pública lo estaba financiando quien vendía lo que recomendaba.",
        },
        {
          forma: "texto",
          texto:
            "Sobre el alcohol, la posición del libro es la que hoy sostienen los organismos internacionales: no existe un nivel de consumo de alcohol seguro para la salud, y los supuestos beneficios cardiovasculares del consumo moderado se apoyan en estudios observacionales con problemas de método conocidos.",
        },
        {
          forma: "texto",
          texto:
            "El problema principal de esos estudios es el grupo de comparación: entre los que no beben nada hay muchos exbebedores y personas que han dejado de beber por enfermedad, lo que hace que el grupo abstemio parezca más enfermo de lo que sería.",
        },
        {
          forma: "arte",
          texto:
            "Cuando se corrige eso, la curva de beneficio se aplana o desaparece. La Organización Mundial de la Salud ha declarado desde entonces que ninguna cantidad de alcohol es segura, y que el alcohol es un carcinógeno de grupo uno desde 1988.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "El segundo blanco del capítulo es la etiqueta de dieta mediterránea, que en España funciona como sello de calidad y que se usa para vender prácticamente cualquier cosa producida en la península.",
        },
        {
          forma: "texto",
          texto:
            "Su argumento es sencillo y comprobable con los datos de consumo: la dieta que come hoy la población española no es la dieta mediterránea. El consumo de legumbres ha caído, el de verduras está por debajo de las recomendaciones y el de carne y ultraprocesados es alto.",
        },
        {
          forma: "texto",
          texto:
            "España tiene además una de las tasas de obesidad infantil más altas de Europa, lo cual encaja mal con la idea de que aquí se come como en los años cincuenta. La dieta mediterránea real es una cosa y la etiqueta comercial es otra.",
        },
        {
          forma: "clave",
          rotulo: "Cómo se usa esa etiqueta",
          frase: "Para vender productos que no tienen nada que ver con ella: bollería industrial con aceite de oliva en la lista de ingredientes, embutidos, galletas con imágenes de campos y refrescos con la palabra tradicional en la etiqueta. El sello no lo otorga nadie y no significa nada.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí hay detrás del concepto original es un patrón alimentario documentado en estudios como el PREDIMED, con aceite de oliva virgen extra, frutos secos, legumbres, verdura, pescado y muy poca carne procesada y azúcar.",
        },
        {
          forma: "texto",
          texto:
            "Ese patrón tiene evidencia razonable de beneficio cardiovascular, y no se parece al carro de la compra medio de un supermercado español actual, que es exactamente el punto que el libro quiere dejar claro.",
        },
        {
          forma: "arte",
          texto:
            "El tercer objetivo del capítulo son las guías alimentarias en general, y aquí hace una observación que se aplica a casi todos los países: se elaboran con participación de la industria, se negocian, y el resultado es un documento de consenso, no un documento científico.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "El ejemplo que da es el de los grupos de alimentos. Que exista un grupo llamado lácteos con recomendación de tres raciones diarias no sale de un hallazgo científico: sale de una manera de organizar la comida que tiene décadas y detrás de la cual hay un sector económico.",
        },
        {
          forma: "texto",
          texto:
            "Su alternativa preferida es el plato saludable de Harvard, que en lugar de grupos y raciones divide el plato en proporciones: la mitad verdura y fruta, un cuarto cereales integrales y un cuarto proteína, con agua como bebida y aceite de oliva como grasa.",
        },
        {
          forma: "texto",
          texto:
            "Es más fácil de aplicar porque describe un plato real y no un número de raciones diarias que nadie cuenta, y porque no incluye ninguna categoría que exista por razones comerciales.",
        },
        {
          forma: "texto",
          texto:
            "Ese plato tiene además una ventaja de comunicación que las pirámides nunca tuvieron: se puede comprobar mirando lo que uno tiene delante en la mesa. Nadie sabe si ha cumplido sus raciones diarias de nada, y cualquiera ve si medio plato es verdura.",
        },
        {
          forma: "texto",
          texto:
            "El libro señala también un problema de forma que parece menor y no lo es: en una pirámide, la base es lo que más se come, y durante décadas la base española estuvo ocupada por cereales, con el pan, la pasta y el arroz refinados como cimiento de la dieta.",
        },
        {
          forma: "texto",
          texto:
            "Esa colocación no salía de la evidencia, salía de una tradición de guías que arranca en Estados Unidos en los años setenta y que se copió con adaptaciones locales en media Europa. En las versiones actuales, la verdura ha subido y los cereales refinados han bajado.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un detalle que el libro remarca sobre las polémicas de este tipo: la respuesta habitual de las sociedades científicas patrocinadas es que el patrocinio no condiciona el contenido. Puede ser cierto en cada caso concreto y sigue siendo un problema estructural evidente.",
        },
        {
          forma: "texto",
          texto:
            "Con las guías desmontadas, el libro baja al supermercado y empieza por la comida sobre la que más se ha mentido en España en los últimos cuarenta años.",
        },
        {
          forma: "texto",
          texto:
            "La que todo el mundo ha oído que es la más importante del día.",
        },
      ],
    },

    {
      titulo: "El desayuno completo",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El desayuno completo del anuncio consiste en un vaso de leche con cacao azucarado, un vaso de zumo de naranja envasado, unas galletas o cereales de colores, y a veces una tostada con mermelada. Es la imagen mental que tiene media España de un desayuno sano.",
        },
        {
          forma: "texto",
          texto:
            "El libro lo analiza con las etiquetas delante y el resultado es demoledor: entre el cacao soluble, el zumo, los cereales y la mermelada, un niño puede superar antes de salir de casa la recomendación de azúcares libres de la Organización Mundial de la Salud para todo el día.",
        },
        {
          forma: "clave",
          rotulo: "El dato del cacao soluble",
          frase: "Los preparados solubles de cacao más vendidos en España rondan el setenta por ciento de azúcar. El primer ingrediente de la lista es azúcar, no cacao. Se está echando en la leche de un niño un producto que es mayoritariamente azúcar con sabor.",
        },
        {
          forma: "texto",
          texto:
            "Con los cereales de desayuno infantiles pasa algo parecido: muchos rondan o superan el veinticinco por ciento de azúcar, y se anuncian con reclamos de vitaminas, hierro y fibra, que son ciertos y que no compensan el perfil general del producto.",
        },
        {
          forma: "texto",
          texto:
            "Ese mecanismo tiene nombre y aparece en todo el libro: se destaca un nutriente positivo en el envase para desviar la atención del conjunto. Un producto puede llevar fibra añadida, calcio y ocho vitaminas y seguir siendo una galleta.",
        },
        {
          forma: "texto",
          texto:
            "Sobre la idea de que hay que desayunar sí o sí, la posición del libro es la que sostiene hoy la mayoría de la evidencia: la afirmación de que el desayuno es la comida más importante del día no tiene un respaldo sólido.",
        },
        {
          forma: "arte",
          texto:
            "Viene de estudios observacionales en los que la gente que desayuna pesa menos, sin controlar que quien desayuna suele tener también otros hábitos distintos. Y buena parte de esa investigación la financió la industria de los cereales, que tenía un interés evidente.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Su conclusión práctica es sensata: desayunar no es obligatorio, y si se desayuna, que sea comida. Fruta entera, huevo, pan integral con tomate y aceite, frutos secos, yogur natural. La comparación no es entre desayunar o no, sino entre desayunar comida o desayunar producto.",
        },
        {
          forma: "texto",
          texto:
            "El siguiente asunto es el zumo, y es probablemente el mito más resistente de todos porque parece contraintuitivo: mucha gente sigue creyendo que un vaso de zumo equivale a comerse las naranjas exprimidas.",
        },
        {
          forma: "texto",
          texto:
            "No equivale, y la razón no es que se pierdan vitaminas, que es lo que se suele decir. La razón es la matriz del alimento: la fruta entera lleva su azúcar atrapado en una estructura de fibra que hace que se absorba despacio y que llene.",
        },
        {
          forma: "clave",
          rotulo: "Lo que cambia al exprimir",
          frase: "Se rompe esa estructura y el azúcar queda libre en un líquido que se bebe en veinte segundos. La Organización Mundial de la Salud cuenta el azúcar del zumo, incluso del natural y sin añadir nada, dentro de los azúcares libres que recomienda limitar.",
        },
        {
          forma: "texto",
          texto:
            "A eso se suma la cantidad. Nadie se come cuatro naranjas seguidas y cualquiera se bebe un vaso de zumo de cuatro naranjas sin esfuerzo, porque el líquido no sacia igual y porque se ha eliminado el trabajo de masticar.",
        },
        {
          forma: "texto",
          texto:
            "Los zumos envasados sin azúcares añadidos añaden un problema de etiquetado: la frase es cierta, no se ha añadido azúcar, y el producto tiene alrededor de diez gramos de azúcar por cada cien mililitros, que es una cantidad parecida a la de un refresco.",
        },
        {
          forma: "arte",
          texto:
            "Ese es el patrón de las declaraciones nutricionales que el libro recorre una por una: sin azúcares añadidos, cero por ciento, bajo en grasa, con fibra, natural, artesano, casero. Casi todas son literalmente ciertas y casi todas están puestas para que se entienda otra cosa.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "El caso del cero por ciento es el más claro. Un yogur desnatado con azúcar puede llevar el cero por ciento en grande en la tapa, porque se refiere solo a la grasa, y llevar tres terrones de azúcar dentro.",
        },
        {
          forma: "texto",
          texto:
            "Y el de los productos light: la ley permite usar esa palabra cuando el producto tiene un treinta por ciento menos de un nutriente que su versión original. Unas patatas fritas light siguen siendo patatas fritas, y una mayonesa light sigue siendo mayonesa.",
        },
        {
          forma: "texto",
          texto:
            "La recomendación que da para todo esto es la única que funciona en un supermercado y cabe en una frase: leer la lista de ingredientes en lugar de la parte delantera del envase, y desconfiar de todo lo que necesite un reclamo para venderse.",
        },
        {
          forma: "texto",
          texto:
            "Los alimentos que no necesitan reclamos son los que no llevan lista de ingredientes.",
        },
        {
          forma: "texto",
          texto:
            "Una manzana no dice en ningún sitio que sea rica en fibra.",
        },
        {
          forma: "texto",
          texto:
            "Hay una regla práctica que se desprende de todo el capítulo y que funciona bastante bien: cuanto más grande es el reclamo de salud en la parte delantera del envase, peor suele ser el producto que hay dentro.",
        },
        {
          forma: "texto",
          texto:
            "El motivo es de negocio, no de conspiración: los reclamos cuestan dinero en diseño, en asesoría legal y en publicidad, y solo compensa ponerlos en productos con márgenes altos, que son precisamente los ultraprocesados y no las lentejas.",
        },
        {
          forma: "texto",
          texto:
            "El libro da además una regla de lectura de ingredientes que ahorra tiempo: están ordenados por cantidad, de mayor a menor. Si el azúcar aparece entre los tres primeros, el producto es mayoritariamente azúcar con otras cosas, por muchas vitaminas que anuncie.",
        },
        {
          forma: "texto",
          texto:
            "Y un aviso sobre los nombres: el azúcar aparece en las etiquetas con decenas de denominaciones distintas —jarabe de glucosa, dextrosa, melaza, concentrado de zumo, jarabe de arroz—, lo que permite repartirlo y que ninguna quede en los primeros puestos de la lista.",
        },
        {
          forma: "texto",
          texto:
            "El siguiente capítulo se ocupa del susto alimentario más grande que ha tenido España en la última década.",
        },
      ],
    },

    {
      titulo: "Grupo uno no significa lo que crees",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En octubre de 2015, la Agencia Internacional para la Investigación del Cáncer, que depende de la Organización Mundial de la Salud, publicó una evaluación sobre el consumo de carne roja y de carne procesada. La noticia dio la vuelta al mundo en horas.",
        },
        {
          forma: "texto",
          texto:
            "Los titulares decían que la Organización Mundial de la Salud había equiparado el jamón al tabaco. En España, con el peso que tiene el sector cárnico y con lo que significa el embutido en la dieta, el revuelo fue considerable.",
        },
        {
          forma: "clave",
          rotulo: "Lo que dijo el informe",
          frase: "Que la carne procesada pasa al grupo uno, carcinógeno para humanos, y la carne roja al grupo dos A, probablemente carcinógeno. Y esa clasificación mide la solidez de la evidencia de que algo causa cáncer, no cuánto cáncer causa.",
        },
        {
          forma: "texto",
          texto:
            "Esa distinción es la clave de todo el capítulo y casi ningún medio la explicó. El grupo uno significa que hay evidencia suficiente para afirmar que existe una relación causal. No dice nada sobre la magnitud del riesgo.",
        },
        {
          forma: "texto",
          texto:
            "En el grupo uno están el tabaco, el amianto, la radiación solar, el alcohol y la carne procesada, y sus riesgos son de órdenes de magnitud completamente distintos. Están juntos porque de todos ellos se sabe con certeza que causan cáncer, no porque den el mismo cáncer.",
        },
        {
          forma: "texto",
          texto:
            "Las cifras concretas ayudan. El informe estimaba que cincuenta gramos diarios de carne procesada se asocian con un aumento de alrededor del dieciocho por ciento del riesgo relativo de cáncer colorrectal, que en términos absolutos es un aumento modesto sobre un riesgo de base bajo.",
        },
        {
          forma: "arte",
          texto:
            "Fumar multiplica el riesgo de cáncer de pulmón por veinte o más. Poner las dos cosas en la misma frase, como hicieron muchos titulares, es un error de interpretación de la escala que confundió a mucha gente y que benefició a quien quería restar importancia al informe.",
          arte: "mapa",
        },
        {
          forma: "texto",
          texto:
            "La conclusión razonable del libro es la que recogen las recomendaciones actuales: la carne procesada conviene reducirla a un consumo ocasional, la carne roja fresca puede formar parte de una dieta razonable en cantidades moderadas, y ninguna de las dos es imprescindible.",
        },
        {
          forma: "texto",
          texto:
            "El siguiente asunto que aborda es el gluten, donde hay tres situaciones distintas que se mezclan constantemente y que conviene separar porque tienen implicaciones muy diferentes.",
        },
        {
          forma: "texto",
          texto:
            "La primera es la celiaquía, una enfermedad autoinmune real que afecta a alrededor del uno por ciento de la población, que se diagnostica con serología y biopsia, y cuyo único tratamiento es eliminar el gluten de por vida sin excepciones.",
        },
        {
          forma: "clave",
          rotulo: "La segunda y la tercera",
          frase: "La sensibilidad al gluten no celíaca, que existe como cuadro clínico y cuyo mecanismo se discute, y la moda de comer sin gluten sin ningún motivo médico, que no aporta nada y que en la práctica empeora la dieta.",
        },
        {
          forma: "texto",
          texto:
            "El motivo por el que la empeora es concreto: los productos sin gluten industriales suelen llevar más azúcar, más grasa y más aditivos para compensar la textura que da el gluten, y cuestan bastante más caros. Cambiar galletas por galletas sin gluten no mejora nada.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un efecto secundario social que el libro señala bien: la banalización de la celiaquía. Cuando comer sin gluten se percibe como una preferencia, los restaurantes se relajan con la contaminación cruzada, y para un celíaco eso no es una molestia sino un problema médico.",
        },
        {
          forma: "arte",
          texto:
            "Con los suplementos su posición es la mayoritaria en la profesión: con una alimentación adecuada, la inmensa mayoría de la población no necesita suplementarse nada, y el mercado de complementos vive en buena parte de vender soluciones a problemas que no existen.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Las excepciones que sí reconoce son concretas y están bien establecidas: la vitamina B12 en dietas veganas, que es obligatoria y no negociable; el ácido fólico en el embarazo; la vitamina D en determinadas situaciones; y el hierro cuando hay déficit diagnosticado.",
        },
        {
          forma: "texto",
          texto:
            "Sobre las dietas detox y alcalinas es tajante y tiene razón: el cuerpo tiene hígado y riñones, que es exactamente el sistema de depuración, y el pH de la sangre está regulado en un margen estrechísimo que ninguna comida modifica. Si lo modificara, sería una urgencia médica.",
        },
        {
          forma: "texto",
          texto:
            "Y sobre los superalimentos, su observación es de mercado: la palabra no tiene definición legal ni científica, y se aplica a productos exóticos y caros con perfiles nutricionales que en muchos casos no superan a los de una legumbre o una verdura de temporada.",
        },
        {
          forma: "texto",
          texto:
            "Su comparación favorita es entre las bayas de goji y una naranja, o entre la quinoa y las lentejas. En los dos casos, el producto caro y exótico no aporta nada que el barato y local no tenga, y en algunos parámetros sale perdiendo.",
        },
        {
          forma: "texto",
          texto:
            "Y añade el argumento que menos se oye: la lógica del superalimento distrae del problema real. Nadie mejora su alimentación añadiendo una cucharada de semillas caras a una dieta mala; se mejora cambiando lo que se come todos los días, que es aburrido y no se puede vender en un bote.",
        },
        {
          forma: "texto",
          texto:
            "Sobre los productos con probióticos y con esteroles vegetales que se anuncian para el colesterol y las defensas, su posición es que los efectos existen, son pequeños, están medidos en condiciones concretas y no justifican ni el precio ni el papel central que se les da.",
        },
        {
          forma: "texto",
          texto:
            "Y cierra ese bloque con una observación que vale para todo el libro: casi ningún producto que se venda con una promesa de salud concreta tiene un efecto comparable al de cambiar el conjunto de la dieta, que es lo que nadie financia con campañas.",
        },
        {
          forma: "texto",
          texto:
            "Después de cuatro capítulos desmontando cosas, queda la pregunta que cualquier lector se está haciendo desde la página veinte.",
        },
        {
          forma: "texto",
          texto:
            "Vale, ¿y entonces qué como?",
        },
      ],
    },

    {
      titulo: "Vale, ¿y entonces qué como?",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La respuesta del libro es corta y sin trucos, y ocupa muchas menos páginas que la parte de desmontar. La base son verduras y hortalizas en cantidad, fruta entera, legumbres varias veces por semana, frutos secos sin freír ni salar, y cereales integrales de verdad.",
        },
        {
          forma: "texto",
          texto:
            "Añade aceite de oliva virgen extra como grasa principal, huevos sin el miedo al colesterol que se instaló en los años ochenta y que la evidencia posterior no ha sostenido, pescado, y carne fresca en cantidades moderadas si se quiere.",
        },
        {
          forma: "clave",
          rotulo: "Y la parte de quitar",
          frase: "Bebidas azucaradas y zumos, bollería, galletas, cereales de desayuno azucarados, embutidos y carnes procesadas, precocinados, snacks salados y alcohol. Su regla resumida es que el noventa por ciento de la compra debería ser comida que no necesita etiqueta.",
        },
        {
          forma: "texto",
          texto:
            "Sobre el integral hace una advertencia útil en un supermercado español: un pan que se llama integral puede estar hecho con harina refinada a la que se ha añadido salvado. La ley española se endureció en 2019, después de este libro, y conviene mirar los ingredientes igualmente.",
        },
        {
          forma: "texto",
          texto:
            "La comprobación práctica es leer el primer ingrediente: si pone harina integral de trigo, es integral; si pone harina de trigo y más abajo salvado, no lo es. Lo mismo con la pasta, con el arroz y con las galletas que se anuncian como integrales.",
        },
        {
          forma: "texto",
          texto:
            "Sobre los lácteos su posición es intermedia y probablemente la correcta a día de hoy: no son imprescindibles, porque el calcio se obtiene de otras fuentes, y tampoco son el veneno que dicen algunos. Un yogur natural o un queso son alimentos perfectamente razonables.",
        },
        {
          forma: "arte",
          texto:
            "Lo que sí desmonta es la recomendación de tres raciones diarias que aparecía en las guías, que no sale de ninguna evidencia sobre necesidades de calcio sino de una manera de organizar los grupos de alimentos con décadas de historia y con un sector detrás.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Ahora, dónde falla el libro. Lo primero es de proporción: es un libro de desmontar, y la parte constructiva —qué comer, cómo organizar una compra, cómo cocinar sin tiempo— ocupa una fracción pequeña al final y se queda corta.",
        },
        {
          forma: "texto",
          texto:
            "Lo segundo es de fecha. Se publicó en 2016 y desde entonces han cambiado cosas: la normativa del pan integral, la llegada del Nutri-Score a España, y la propia pirámide de la SENC, que se revisó después de la polémica que este libro contribuyó a levantar.",
        },
        {
          forma: "clave",
          rotulo: "Lo tercero, y es lo que más se le critica",
          frase: "El concepto de ultraprocesado, que el libro usa constantemente, tiene bordes difusos. La clasificación que lo define mete en la misma categoría un refresco, un pan de molde integral y una conserva de legumbres, y no todos merecen el mismo trato.",
        },
        {
          forma: "texto",
          texto:
            "Es una herramienta útil como orientación general y mala como criterio absoluto, porque hay productos procesados que son perfectamente razonables —legumbres en bote, verdura congelada, conservas de pescado— y que en un discurso simplificado acaban siendo sospechosos.",
        },
        {
          forma: "texto",
          texto:
            "Lo cuarto es de tono. El libro es combativo y a veces tan categórico como aquello que critica, y hay pasajes en los que la contundencia va por delante del matiz. Es eficaz para el lector y no siempre es justo con lo discutible.",
        },
        {
          forma: "texto",
          texto:
            "Y lo quinto es lo que casi no aparece: el dinero y el tiempo. Comer así exige comprar fresco, cocinar y tener una cocina y horarios que lo permitan. El libro apela sobre todo a la información y la información no es lo que falta en muchas casas.",
        },
        {
          forma: "arte",
          texto:
            "Ese punto es importante en un país donde el precio de la verdura fresca ha subido y donde mucha gente encadena turnos. Decirle a alguien que cocine legumbres tres veces por semana es un consejo excelente y no es gratis.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Lo que la gente cree y no es verdad, que en este libro es prácticamente todo el contenido, se puede resumir en seis puntos que conviene tener a mano.",
        },
        {
          forma: "texto",
          texto:
            "Un zumo natural no equivale a la fruta: al exprimir se rompe la fibra que retenía el azúcar, y la Organización Mundial de la Salud lo cuenta como azúcar libre igual que el de un refresco.",
        },
        {
          forma: "texto",
          texto:
            "El desayuno no es obligatorio ni es la comida más importante del día, y la investigación que lo sostenía la financió en buena parte quien vendía los cereales.",
        },
        {
          forma: "texto",
          texto:
            "Sin azúcares añadidos no significa sin azúcar, y cero por ciento suele referirse solo a la grasa.",
        },
        {
          forma: "texto",
          texto:
            "Que la carne procesada esté en el grupo uno no la equipara al tabaco: esa clasificación mide cuánta certeza hay de que algo cause cáncer, no cuánto cáncer causa.",
        },
        {
          forma: "texto",
          texto:
            "Comer sin gluten sin ser celíaco no aporta nada, sale más caro y suele empeorar la dieta.",
        },
        {
          forma: "texto",
          texto:
            "Y las dietas detox no existen: para eso están el hígado y los riñones, que trabajan gratis y sin batidos.",
        },
        {
          forma: "texto",
          texto:
            "El balance justo: un libro desigual, más fuerte destruyendo que construyendo, muy pegado al supermercado español y escrito con más contundencia de la que a veces admite la evidencia.",
        },
        {
          forma: "texto",
          texto:
            "Y probablemente el más útil que se ha publicado en español para alguien que hace la compra sin saber en quién confiar.",
        },
        {
          forma: "texto",
          texto:
            "Quien quiera seguir por ahí tiene camino: el propio autor publicó dos años después una continuación centrada en qué comer y cómo organizarse, que es justamente la parte que aquí se queda corta, con menús, listas de compra y recetas.",
        },
        {
          forma: "texto",
          texto:
            "Y hay en español una generación entera de dietistas divulgando en la misma línea, con libros sobre alimentación infantil, sobre etiquetado y sobre cocina, que es probablemente el efecto más importante que ha tenido este libro.",
        },
        {
          forma: "texto",
          texto:
            "El cambio de fondo que reclamaba —que haya dietistas-nutricionistas en la sanidad pública española— sigue sin producirse casi diez años después, con algunas experiencias autonómicas sueltas y ninguna incorporación general a la atención primaria.",
        },
        {
          forma: "texto",
          texto:
            "Mientras eso no ocurra, la información nutricional que le llega a la mayoría de la gente seguirá viniendo de los envases, y este libro seguirá haciendo falta.",
        },
      ],
    },
  ],
};

export const VIVIR_PLENITUD: Resumen = {
  id: "vivir-plenitud",
  titulo: "Vivir con plenitud las crisis",
  autor: "Jon Kabat-Zinn",
  ano: 1990,
  gancho:
    "Un biólogo molecular montó en el sótano de un hospital una consulta para los pacientes que ya no mejoraban, y les enseñó a comerse una uva pasa.",
  porQue:
    "Es el manual del programa del que salió todo el mindfulness que hay hoy en hospitales, aplicaciones y oficinas. Merece la pena leer el original para ver qué prometía de verdad y qué le han colgado después.",
  partes: [
    {
      titulo: "El sótano de Worcester",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En el otoño de 1979, en el sótano del hospital universitario de Massachusetts, en la ciudad de Worcester, se abrió una consulta nueva. No tenía nombre médico: se llamaba clínica de reducción del estrés y ocupaba una sala prestada con sillas de plástico apiladas contra la pared.",
        },
        {
          forma: "texto",
          texto:
            "Los pacientes llegaban derivados por sus propios médicos y todos tenían algo en común: eran los que no mejoraban. Dolor de espalda de años, migrañas, colon irritable, secuelas de infarto, cáncer en tratamiento, ansiedad crónica. Gente a la que ya se le había probado todo.",
        },
        {
          forma: "texto",
          texto:
            "Quien montó aquello era un biólogo molecular de treinta y cinco años llamado Jon Kabat-Zinn. Se había doctorado en el MIT en 1971 bajo la dirección de Salvador Luria, que tenía un Nobel, y trabajaba en anatomía celular. No era médico ni psicólogo.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí era, desde los veintipocos años, es practicante de meditación budista. Había estudiado zen con Philip Kapleau y con el maestro coreano Seung Sahn, y hacía retiros de vipassana de dos semanas en silencio. Llevaba una vida partida limpiamente en dos.",
        },
        {
          forma: "clave",
          rotulo: "La idea que tuvo en un retiro",
          frase: "Que los hospitales estaban llenos de gente a la que la medicina ya no podía ofrecer nada más, y que a esa gente se le podía enseñar a meditar. No para curarla, sino para cambiar su relación con lo que le pasaba. Cuenta que la idea entera le duró unos diez segundos.",
        },
        {
          forma: "texto",
          texto:
            "El problema era cómo meter eso en un hospital. Ninguna aseguradora iba a pagar un curso de budismo, ningún médico de familia iba a derivar a un paciente a un maestro zen, y ningún obrero de sesenta años de Massachusetts se iba a sentar en un cojín a cantar en pali.",
        },
        {
          forma: "texto",
          texto:
            "Su solución fue quitar las palabras. Se quedó con las prácticas y dejó fuera todo el vocabulario: nada de dharma, ni de karma, ni de iluminación, ni de Buda. Lo llamó atención plena, mindfulness, y lo presentó como un entrenamiento y no como una religión.",
        },
        {
          forma: "arte",
          texto:
            "Esa decisión es la razón de que hoy haya programas de mindfulness en hospitales, en cárceles, en el ejército estadounidense y en los consejos de administración. Y es también la raíz de casi todas las críticas que ha recibido, que son serias y hay que contarlas.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Kabat-Zinn nunca lo ha ocultado, y eso hay que reconocérselo. Ha escrito y repetido que lo que enseña es práctica budista sin la envoltura, y que quitó la envoltura por un motivo práctico: para que llegara a gente que si no se habría levantado y se habría ido.",
        },
        {
          forma: "texto",
          texto:
            "El programa que diseñó dura ocho semanas. Una clase semanal de dos horas y media, un día entero de silencio hacia la sexta semana, y cuarenta y cinco minutos de práctica en casa todos los días con una grabación. Ese último punto es el que lo decide todo.",
        },
        {
          forma: "texto",
          texto:
            "Se le conoce por las siglas inglesas MBSR, y desde 1979 lo han hecho decenas de miles de personas en cientos de hospitales del mundo. Este libro, publicado en 1990, es el manual completo: lo que se hace, en qué orden, con qué instrucciones y por qué.",
        },
        {
          forma: "texto",
          texto:
            "Es un libro gordo. Unas seiscientas páginas en la edición revisada de 2013, con una mezcla de indicaciones muy concretas, historias de pacientes y pasajes que a un lector escéptico se le van a hacer cuesta arriba por lo elevado del tono. Conviene saberlo antes.",
        },
        {
          forma: "texto",
          texto:
            "El título viene de una película. En Zorba el griego, el protagonista explica por qué se casó y tuvo hijos y casa y todo lo demás, y lo llama la catástrofe completa. No lo dice con amargura: lo dice como quien describe con exactitud lo que es estar vivo.",
        },
        {
          forma: "texto",
          texto:
            "Ese es el punto de partida del libro, y no es el de la autoayuda. No promete que las cosas mejoren. Parte de que la vida trae enfermedad, pérdida y dolor de serie, y de que el asunto no es evitarlos sino cómo nos colocamos frente a ellos.",
        },
        {
          forma: "texto",
          texto:
            "Lo demuestra con los pacientes que le mandaban. A un hombre con lumbalgia de doce años no se le puede prometer que se le vaya el dolor. Lo que se le puede ofrecer es dejar de pasarse el día peleándose con él, que es una carga añadida y a veces más pesada que la primera.",
        },
        {
          forma: "texto",
          texto:
            "Kabat-Zinn distingue entre el dolor y el sufrimiento, y la distinción viene directamente del budismo. El dolor es la señal física. El sufrimiento es todo lo que le montamos encima: el miedo a que dure siempre, la rabia, la anticipación, la identidad de enfermo.",
        },
        {
          forma: "texto",
          texto:
            "Su tesis es que sobre lo primero muchas veces no se puede hacer nada y que sobre lo segundo se puede hacer bastante. No porque haya que pensar en positivo, cosa que él desprecia explícitamente, sino porque se puede aprender a no añadir.",
        },
        {
          forma: "texto",
          texto:
            "Los resultados que empezó a ver le parecieron suficientes para publicarlos. En 1982 sacó un artículo sobre cincuenta y un pacientes con dolor crónico que habían pasado por el programa, con reducciones notables del dolor y del consumo de analgésicos.",
        },
        {
          forma: "texto",
          texto:
            "Aquel estudio no tenía grupo de control y él lo reconoce. Era el primer informe de una consulta nueva, no un ensayo clínico, y sirvió sobre todo para que el hospital le dejara continuar y para que los médicos empezaran a mandarle más gente.",
        },
        {
          forma: "texto",
          texto:
            "La clínica creció hasta convertirse en el centro de referencia mundial, y de allí ha salido la formación de la mayoría de los instructores que hay hoy. Kabat-Zinn dejó la dirección en el año 2000 y se dedicó a escribir y a defender el asunto en público.",
        },
        {
          forma: "texto",
          texto:
            "Todo eso está en el libro, contado con detalle y con los nombres de los pacientes cambiados. Pero lo que explica de verdad de qué va esto ocurre en la primera clase y dura unos diez minutos.",
        },
        {
          forma: "texto",
          texto:
            "Consiste en comerse una uva pasa.",
        },
      ],
    },

    {
      titulo: "Una uva pasa",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El instructor reparte tres uvas pasas a cada uno y pide que nadie se coma ninguna todavía. Que cojan una y la miren como si no hubieran visto nunca algo parecido, como si acabaran de llegar de otro planeta y les hubieran puesto ese objeto en la palma de la mano.",
        },
        {
          forma: "texto",
          texto:
            "Que se fijen en los pliegues, en cómo la luz se queda en unos sitios y no en otros, en los cambios de color. Que la toquen y noten la textura. Que se la acerquen al oído y la aprieten un poco entre los dedos, porque suena. Que la huelan un rato.",
        },
        {
          forma: "texto",
          texto:
            "Después, que se la lleven a la boca sin morderla y que noten cómo el brazo sabe perfectamente el camino sin que nadie tenga que decirle nada. Que la dejen sobre la lengua unos segundos. Que la muerdan una sola vez y esperen antes de seguir.",
        },
        {
          forma: "texto",
          texto:
            "El ejercicio dura unos diez minutos para una pasa, y en cada clase hay gente que se ríe y gente que se emociona. Es lo primero que se hace en la primera de las ocho sesiones, y no es un juego de bienvenida: es el programa entero convertido en un ejercicio.",
        },
        {
          forma: "clave",
          rotulo: "La definición que da del asunto",
          frase: "Atención plena es prestar atención de una manera concreta: a propósito, en el momento presente y sin juzgar. Las tres partes cuentan. A propósito, o sea deliberadamente; ahora, ni en el recuerdo ni en el plan; y sin decidir a cada segundo si lo que aparece está bien o mal.",
        },
        {
          forma: "texto",
          texto:
            "Lo que la pasa demuestra es lo poco que estamos donde estamos. Casi nadie ha probado una pasa en su vida: se comen a puñados mientras se hace otra cosa. Y lo que pasa con las pasas pasa también con las duchas, con las conversaciones y con los años.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale el concepto que más ha calado del libro, el que él llama el piloto automático. Buena parte del día lo pasamos ejecutando rutinas sin nadie al mando, mientras la cabeza está metida en una discusión de ayer o en un correo de mañana.",
        },
        {
          forma: "arte",
          texto:
            "Su ejemplo es conducir hasta el trabajo y darse cuenta al aparcar de que no se recuerda absolutamente nada del trayecto. El coche ha llegado. Alguien ha frenado en los semáforos. Y esos veinte minutos de vida no han quedado registrados en ninguna parte.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "El siguiente punto es el que más se malinterpreta y por eso lo repite sin parar: esto no es relajación. No es una técnica para ponerse tranquilo, y quien empiece esperando eso se va a llevar un chasco en la segunda semana como muy tarde.",
        },
        {
          forma: "texto",
          texto:
            "Lo que se entrena es notar lo que hay, sea lo que sea. Si lo que hay es un dolor en la rodilla, aburrimiento o unas ganas enormes de levantarse, eso es lo que se observa. Muchas veces relaja, y eso es un efecto secundario, no el objetivo del ejercicio.",
        },
        {
          forma: "texto",
          texto:
            "Tampoco consiste en dejar la mente en blanco, que es la otra idea equivocada de siempre. La cabeza produce pensamientos igual que el páncreas produce enzimas. Lo que se entrena no es apagarla, sino darse cuenta de que se ha ido y volver al sitio.",
        },
        {
          forma: "texto",
          texto:
            "Y él insiste en que ese momento de darse cuenta, justo el que la gente vive como un fracaso, es el ejercicio. Igual que en el gimnasio la fuerza no viene de sostener el peso arriba, sino de completar cada repetición una y otra vez.",
        },
        {
          forma: "texto",
          texto:
            "El libro enumera siete actitudes que sostienen la práctica, y la primera es la más difícil: no juzgar. Basta con sentarse cinco minutos para ver la cantidad de veces que la cabeza clasifica lo que aparece en agradable, desagradable o indiferente sin que nadie se lo pida.",
        },
        {
          forma: "texto",
          texto:
            "Las otras seis son la paciencia, la mente de principiante, la confianza, la aceptación, el soltar y una que descoloca a todo el mundo: no esforzarse. En cualquier otra disciplina, esforzarse es la vía. Aquí, ir a por un resultado es exactamente lo que lo estropea.",
        },
        {
          forma: "texto",
          texto:
            "La razón es sentido común aplicado a un caso raro. Si uno se sienta a meditar para relajarse, ha convertido la práctica en una tarea con objetivo, y va a pasarse el rato comprobando si lo está consiguiendo, que es lo contrario de prestar atención a algo.",
        },
        {
          forma: "texto",
          texto:
            "La palabra aceptación es la otra que se entiende mal, y le dedica páginas a aclararla. Aceptar no es resignarse ni dar por bueno. Es reconocer lo que hay ahora, que es el único punto desde el que se puede hacer algo, en vez de gastar la energía en negarlo.",
        },
        {
          forma: "texto",
          texto:
            "Y lo aterriza con un ejemplo que funciona. A alguien que acaba de recibir un diagnóstico le pueden pasar seis meses en la fase de esto no me puede estar pasando a mí. Esos seis meses son reales, no le hacen nada a la enfermedad y son seis meses menos.",
        },
        {
          forma: "texto",
          texto:
            "Hay dos maneras de practicar y el programa insiste en las dos. La formal es sentarse o tumbarse a hacer un ejercicio con un tiempo marcado. La informal es meter la misma atención en lo que ya se está haciendo: fregar, andar por la calle, escuchar a alguien.",
        },
        {
          forma: "texto",
          texto:
            "La informal parece la fácil y es la difícil, porque no tiene horario ni esterilla. Nadie se olvida de haber ido al gimnasio; olvidarse de estar presente mientras se lava un plato es lo normal, y el programa da eso por descontado desde el primer día.",
        },
        {
          forma: "texto",
          texto:
            "En la primera clase se manda además una tarea que a mucha gente le parece una tontería y que suele ser la que más recuerdan después: comer una comida al día en atención plena, sin pantalla, sin conversación y sin libro. Solo comiendo.",
        },
        {
          forma: "texto",
          texto:
            "Lo que suele aparecer no es serenidad, sino incomodidad. Media hora a solas con un plato y sin nada que distraiga es, para bastante gente, la primera vez en años que se queda sin estímulo, y lo que sale de ahí no siempre resulta agradable.",
        },
        {
          forma: "texto",
          texto:
            "Y eso es solo un aviso de lo que llega en la semana siguiente, cuando toca tumbarse en el suelo durante cuarenta y cinco minutos.",
        },
      ],
    },

    {
      titulo: "Cuarenta y cinco minutos tumbado",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El primer ejercicio formal del programa se llama exploración corporal y ocupa las dos primeras semanas. Se hace tumbado boca arriba, en el suelo o en una cama, con los ojos cerrados y siguiendo una grabación que dura tres cuartos de hora.",
        },
        {
          forma: "texto",
          texto:
            "Consiste en llevar la atención por todo el cuerpo, muy despacio, empezando por los dedos del pie izquierdo. Se pasa un rato en cada zona notando lo que haya allí —o notando que no hay nada, que también es un dato— y después se suelta y se pasa a la siguiente.",
        },
        {
          forma: "texto",
          texto:
            "Dicho así suena a masaje mental. En la práctica es de lo más difícil del programa, porque tres cuartos de hora tumbado sin hacer nada producen sueño, impaciencia, picores y una cantidad extraordinaria de pensamientos sobre cosas pendientes.",
        },
        {
          forma: "clave",
          rotulo: "Por qué precisamente el cuerpo",
          frase: "Porque el cuerpo siempre está en presente. La cabeza puede estar en 1998 o en el año que viene; la rodilla solo puede estar ahora. Volver a una sensación física es la manera más fiable de salir de un bucle mental, y por eso todas las prácticas del programa pasan por ahí.",
        },
        {
          forma: "texto",
          texto:
            "La segunda práctica es la meditación sentada y se introduce a partir de la tercera semana. Se empieza por la respiración: notar el aire entrando y saliendo, sin cambiarla, y cada vez que la atención se marche, volver. Ese volver, otra vez, es el ejercicio entero.",
        },
        {
          forma: "texto",
          texto:
            "Después se va abriendo el foco por etapas. Primero la respiración, luego las sensaciones de todo el cuerpo, luego los sonidos, luego los pensamientos observados como acontecimientos que aparecen y se van, y al final lo que él llama atención sin objeto.",
        },
        {
          forma: "texto",
          texto:
            "La tercera pata es el yoga, y sorprende a quien llega esperando solo meditación. Son posturas suaves de hatha yoga hechas muy despacio, y la instrucción no es llegar lejos: es notar dónde está hoy el límite del cuerpo y quedarse justo antes de él.",
        },
        {
          forma: "arte",
          texto:
            "Lo mete por una razón concreta: la mitad de sus pacientes llevaban años sin hacer nada con su cuerpo, o tratándolo como a un enemigo que les había fallado. Moverse despacio y con atención es, para alguien con dolor crónico, un paso bastante más grande de lo que parece.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "También está la meditación caminando, que se hace en un pasillo de diez pasos, ida y vuelta, sin ir a ninguna parte. Es la que más ridícula le parece a todo el mundo al principio y la que más se acaba usando luego, porque se puede hacer en cualquier sitio.",
        },
        {
          forma: "texto",
          texto:
            "Hacia la sexta semana llega el día entero. Siete u ocho horas de práctica en silencio, en grupo, alternando ejercicios, sin hablar con nadie y sin teléfono. Va incluido en el programa y es el punto en el que más gente se descuelga del curso.",
        },
        {
          forma: "texto",
          texto:
            "El compromiso real de las ocho semanas, sumando la clase semanal, la práctica diaria y el día de silencio, ronda las cincuenta horas. Eso, y no la dificultad de la técnica, es el filtro de verdad, y el libro no lo disimula en ningún momento.",
        },
        {
          forma: "texto",
          texto:
            "Los abandonos en estos programas se mueven habitualmente entre el quince y el treinta por ciento según el estudio que se mire, y la práctica en casa que los participantes declaran suele quedarse bastante por debajo de los cuarenta y cinco minutos diarios que se piden.",
        },
        {
          forma: "texto",
          texto:
            "Ese dato importa para leer todo lo que viene después. Cuando se dice que el programa funciona, se está diciendo que funciona en la gente que lo termina, que es gente que de entrada estaba dispuesta a dedicarle una hora al día durante dos meses seguidos.",
        },
        {
          forma: "texto",
          texto:
            "El libro incluye además capítulos sobre cómo aplicar esto a situaciones concretas: al dolor, al miedo, a la ansiedad, al tiempo, al trabajo, a la comida y a las relaciones. Es la parte más desigual y donde el tono se vuelve más de predicador.",
        },
        {
          forma: "texto",
          texto:
            "En el capítulo del dolor está lo más útil y lo más comprobable. La instrucción, contraintuitiva, no es distraerse del dolor sino ir hacia él: observar de qué está hecho, si es ardor o presión, si tiene bordes, si cambia de un minuto al siguiente.",
        },
        {
          forma: "texto",
          texto:
            "Lo que muchos pacientes observan es que el dolor, mirado de cerca, no es un bloque continuo sino una sucesión de sensaciones que suben y bajan. Y que la parte que más pesa muchas veces no es la sensación, sino la película sobre lo que esa sensación significa.",
        },
        {
          forma: "texto",
          texto:
            "Kabat-Zinn tiene cuidado, y hay que apuntárselo a favor, en no prometer curaciones. No dice que meditar quite una lumbalgia ni que encoja un tumor. Dice que cambia la relación con el síntoma, y que a veces, de rebote, el síntoma también afloja.",
        },
        {
          forma: "texto",
          texto:
            "Esa prudencia se ha perdido del todo en la industria que vino después. Buena parte de los libros y las aplicaciones que citan este programa prometen cosas que su fundador no ha prometido nunca, y él ha protestado por escrito en más de una ocasión.",
        },
        {
          forma: "texto",
          texto:
            "El libro tampoco lo vende como algo para todo el mundo. Advierte de que a personas en crisis psicótica, en depresión aguda o con un trauma reciente no se las debe meter en un programa así sin supervisión, y esa advertencia ya estaba en la edición de 1990.",
        },
        {
          forma: "texto",
          texto:
            "Es una advertencia que la investigación posterior ha confirmado con datos, y a la que habrá que volver, porque durante veinte años esto se contó como si no tuviera efectos adversos y resulta que los tiene.",
        },
        {
          forma: "texto",
          texto:
            "Con el programa montado y el libro publicado, quedaba la pregunta que hace cualquier médico ante un tratamiento nuevo.",
        },
        {
          forma: "texto",
          texto:
            "Si funciona, cuánto, en quién y comparado con qué.",
        },
      ],
    },

    {
      titulo: "La consulta del dermatólogo",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "A mediados de los noventa, Kabat-Zinn montó un experimento que se ha citado mil veces y que se entiende en una frase. Cogió a pacientes con psoriasis que iban a recibir sesiones de luz ultravioleta en una cabina, y a la mitad les puso dentro una grabación de meditación.",
        },
        {
          forma: "texto",
          texto:
            "La psoriasis es ideal para un estudio así porque se ve. No hay que preguntarle al paciente cómo se encuentra: se fotografía la piel y se mide cuándo se aclara. El tratamiento con luz era idéntico para los dos grupos y lo daban los mismos dermatólogos.",
        },
        {
          forma: "texto",
          texto:
            "El resultado, publicado en 1998, fue que los que meditaban dentro de la cabina aclaraban la piel antes que los que estaban allí de pie en silencio. Es el estudio que más se cita para sostener que la mente influye en el cuerpo de una manera medible.",
        },
        {
          forma: "clave",
          rotulo: "El problema de ese estudio",
          frase: "Que era pequeño —unas decenas de pacientes— y que en casi tres décadas nadie lo ha replicado con solvencia. Un resultado llamativo, con pocos participantes y sin réplica es exactamente el perfil de los hallazgos que luego se caen. No está desmentido: está sin confirmar.",
        },
        {
          forma: "texto",
          texto:
            "La evidencia buena de todo esto está en otro sitio y es bastante menos espectacular. Está en la salud mental, y sobre todo en una adaptación del programa que hicieron otros: la terapia cognitiva basada en la atención plena, desarrollada en los años noventa.",
        },
        {
          forma: "texto",
          texto:
            "La diseñaron tres psicólogos, Zindel Segal, Mark Williams y John Teasdale, con un objetivo estrecho y muy concreto: evitar las recaídas en personas que ya habían pasado por varios episodios de depresión y que en ese momento estaban bien.",
        },
        {
          forma: "texto",
          texto:
            "El razonamiento clínico es fino. Quien ha tenido tres depresiones tiene un camino aprendido: una bajada de ánimo normal enciende de manera automática el patrón de pensamiento rumiativo, y ese patrón es el que arrastra hacia la siguiente. Se trata de notarlo antes.",
        },
        {
          forma: "arte",
          texto:
            "Los resultados aguantan. Un análisis conjunto de nueve ensayos con más de mil doscientos pacientes, publicado en 2016, encontró que ese programa reduce el riesgo de recaída frente al tratamiento habitual, con un efecto comparable al de seguir tomando antidepresivos.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Por eso el sistema público de salud británico lo recomienda desde hace años para personas con tres o más episodios previos. Es la única aplicación de todo esto que ha llegado a una guía clínica seria, y conviene tenerlo presente cuando alguien hable de mindfulness en general.",
        },
        {
          forma: "texto",
          texto:
            "Para lo demás, la referencia sigue siendo una revisión publicada en 2014 en una revista de la Asociación Médica Americana, que examinó cuarenta y siete ensayos con más de tres mil quinientos participantes aplicando criterios estrictos de calidad.",
        },
        {
          forma: "texto",
          texto:
            "Sus conclusiones son las que hay que saberse. Evidencia moderada de mejora en ansiedad, en depresión y en dolor. Evidencia baja o insuficiente para el estrés, el ánimo positivo, la atención, el sueño, el peso y el consumo de sustancias.",
        },
        {
          forma: "texto",
          texto:
            "Y el tamaño de los efectos en aquello que sí funciona es modesto, del orden de lo que consigue un antidepresivo en esas mismas poblaciones. No es despreciable en absoluto, y tampoco es lo que sugieren las portadas de las revistas de divulgación.",
        },
        {
          forma: "texto",
          texto:
            "El hallazgo más incómodo de esa revisión es otro. No encontraron pruebas de que los programas de meditación fueran mejores que las alternativas activas: mejor que hacer ejercicio, que una terapia conductual o que tomar medicación. Mejores que no hacer nada, sí.",
        },
        {
          forma: "texto",
          texto:
            "Ahí está el problema metodológico de fondo del campo entero. Muchísimos estudios comparan meditar con estar en lista de espera, y estar en lista de espera no es un tratamiento. Cualquier cosa que implique grupo, horario y atención de un profesional gana esa comparación.",
        },
        {
          forma: "texto",
          texto:
            "En 2018, un grupo de investigadores publicó una revisión crítica con un título que lo resume: cuidado con el bombo. Señalaban muestras pequeñas, definiciones distintas de mindfulness en cada estudio y una tendencia clara a publicar solamente lo que sale bien.",
        },
        {
          forma: "texto",
          texto:
            "Con la neurociencia ocurre algo parecido. Los estudios de imagen que se citan para decir que meditar cambia el cerebro suelen tener veinte o treinta participantes, y una parte de esos resultados no ha resistido bien los intentos de repetirlos con más gente.",
        },
        {
          forma: "texto",
          texto:
            "Eso no quiere decir que en el cerebro no pase nada. Quiere decir que la frase de que la meditación reconfigura el cerebro, repetida en cualquier suplemento dominical, va muy por delante de lo que los datos sostienen ahora mismo.",
        },
        {
          forma: "texto",
          texto:
            "El capítulo de los efectos adversos es el que más ha tardado en abrirse. Durante treinta años esto se contó como una práctica sin riesgos, cosa que ningún médico diría de ningún tratamiento con efecto, porque lo que hace algo también puede hacer daño.",
        },
        {
          forma: "texto",
          texto:
            "En 2017, un equipo de la Universidad Brown entrevistó a sesenta meditadores y documentó experiencias que nadie estaba registrando: ansiedad intensa, despersonalización, reaparición de recuerdos traumáticos y episodios que necesitaron atención psiquiátrica.",
        },
        {
          forma: "texto",
          texto:
            "Trabajos posteriores del mismo grupo estiman que alrededor de una de cada diez personas que pasan por un programa de este tipo sufre algún efecto adverso duradero. Es una cifra que ningún fármaco podría esconder y que aquí se ignoró durante mucho tiempo.",
        },
        {
          forma: "texto",
          texto:
            "Kabat-Zinn ya avisaba en 1990 de que esto no es para cualquiera en cualquier momento. La industria que creció después dejó de avisar, y un curso de ocho semanas dado por alguien con una formación de fin de semana no tiene manera de detectar a quién no le conviene.",
        },
        {
          forma: "texto",
          texto:
            "Porque para entonces aquello había dejado de ser una consulta de hospital y se había convertido en otra cosa.",
        },
      ],
    },

    {
      titulo: "La sala de reuniones de Google",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En 2007, un ingeniero de Google llamado Chade-Meng Tan puso en marcha dentro de la empresa un curso interno de meditación para empleados. Lo llamó Busca en tu interior, se llenó, tuvo lista de espera durante años y acabó convertido en un libro y en una fundación.",
        },
        {
          forma: "texto",
          texto:
            "A partir de ahí, el mindfulness entró en las empresas a toda velocidad. Programas para plantillas enteras, aplicaciones con suscripción mensual, sesiones de diez minutos antes de las reuniones y consultoras vendiendo formación en atención plena a bancos y aseguradoras.",
        },
        {
          forma: "texto",
          texto:
            "También entró en sitios menos previsibles. El ejército estadounidense financió programas de entrenamiento de la atención para soldados antes de un despliegue, con el objetivo declarado de sostener el rendimiento cognitivo bajo estrés extremo.",
        },
        {
          forma: "clave",
          rotulo: "La crítica que salió de ahí",
          frase: "Se le llama McMindfulness: una práctica que nació para aliviar el sufrimiento acaba convertida en una herramienta para que la gente aguante mejor aquello que le hace daño. Enseñar a un empleado a respirar en vez de arreglar por qué trabaja sesenta horas a la semana.",
        },
        {
          forma: "texto",
          texto:
            "El argumento lo formularon el profesor de estudios budistas Ronald Purser y el filósofo David Loy en 2013, y Purser lo desarrolló después en un libro entero. Su tesis es que al quitar la ética budista se quitó justo la parte que impedía usar esto para cualquier cosa.",
        },
        {
          forma: "texto",
          texto:
            "Porque en el budismo la atención plena es un elemento de un camino que incluye normas de conducta: no mentir, no dañar, ganarse la vida de una manera que no perjudique a otros. Aislada de eso es una técnica de concentración, y una técnica sirve para lo que sea.",
        },
        {
          forma: "texto",
          texto:
            "El ejemplo que usan es incómodo a propósito: un francotirador también se beneficia de una atención estable y no juzgadora. El propio Kabat-Zinn ha reconocido el riesgo y sostiene que la ética va implícita en la práctica bien enseñada. La discusión sigue abierta.",
        },
        {
          forma: "arte",
          texto:
            "Hay además un problema práctico que la crítica señala muy bien. Cuando una empresa ofrece mindfulness a su plantilla está definiendo el estrés como un problema individual de gestión emocional, y no como el resultado de una manera concreta de organizar el trabajo.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "El golpe más duro de los últimos años, sin embargo, no vino de la filosofía sino de un ensayo clínico. En 2022 se publicaron los resultados del mayor estudio hecho nunca sobre mindfulness en colegios, con ochenta y cuatro centros británicos y unos ocho mil alumnos.",
        },
        {
          forma: "texto",
          texto:
            "El diseño era serio: la mitad de los colegios daban entrenamiento en atención plena y la otra mitad seguía con su enseñanza socioemocional habitual, y se midió a los chavales durante un año después. El resultado fue que no mejoró nada.",
        },
        {
          forma: "texto",
          texto:
            "Ni la salud mental, ni el bienestar, ni el clima del aula respecto al grupo de comparación. Y en los alumnos que ya venían con más riesgo, algunos indicadores salieron algo peores. Los propios autores, que son partidarios del enfoque, lo publicaron tal cual.",
        },
        {
          forma: "texto",
          texto:
            "Eso no significa que el programa original no sirva. Significa que trasladar algo diseñado para adultos con dolor crónico y muy motivados a un aula de doce años con asistencia obligatoria es otra cosa distinta, y que no funciona por el hecho de llamarse igual.",
        },
        {
          forma: "texto",
          texto:
            "Con todo eso encima, la pregunta es qué queda en pie de este libro. Y queda bastante, si se lee con la cabeza fría y sin las expectativas que le ha ido colgando el mercado durante treinta y cinco años.",
        },
        {
          forma: "texto",
          texto:
            "Queda un programa concreto, con las instrucciones completas, para gente que convive con dolor crónico o con una enfermedad larga. Ahí la evidencia es moderada, es real, y tampoco es que las alternativas para esos pacientes abunden demasiado.",
        },
        {
          forma: "texto",
          texto:
            "Queda la aplicación a la prevención de recaídas depresivas, que está en las guías clínicas británicas y que es el resultado más sólido que ha dado todo este campo en cuarenta y cinco años de trabajo.",
        },
        {
          forma: "texto",
          texto:
            "Y queda una manera de plantear el problema que sigue siendo útil aunque uno no medite nunca: la distinción entre lo que duele y lo que le añadimos a lo que duele. Eso se puede usar un martes por la tarde sin apuntarse a ningún programa.",
        },
        {
          forma: "texto",
          texto:
            "Lo que la gente cree y no es verdad, uno: que esto es relajación. No lo es, el libro lo repite en cada capítulo, y la exploración corporal saca a la superficie bastante más incomodidad que calma durante las primeras semanas.",
        },
        {
          forma: "texto",
          texto:
            "Dos: que no es religioso. Es práctica budista con el vocabulario quitado, y su autor lo dice él mismo sin ningún problema. Se puede hacer sin creer en nada, igual que se hace yoga sin creer en nada, pero de dónde viene no es ningún misterio.",
        },
        {
          forma: "texto",
          texto:
            "Tres: que cura enfermedades. Kabat-Zinn no lo afirma en ninguna página. Lo que sostiene es que cambia la relación con los síntomas, y el único estudio que apunta a un efecto físico directo es el de la psoriasis, que sigue sin replicarse.",
        },
        {
          forma: "texto",
          texto:
            "Cuatro: que son diez minutos al día con una aplicación. El programa del que habla este libro son cuarenta y cinco minutos diarios durante ocho semanas más un día entero en silencio. Lo que ofrece una aplicación se parece a esto lo que un paseo a un maratón.",
        },
        {
          forma: "texto",
          texto:
            "Y cinco: que no puede hacer daño. Puede, en torno a una de cada diez personas, y con más probabilidad en quien arrastra un trauma o está en una crisis. Que sea gratis y no lleve prospecto no significa que no tenga efectos.",
        },
        {
          forma: "texto",
          texto:
            "Lo que no ha cambiado desde 1979 es la sala de espera: sigue llena de gente a la que ya se le ha probado todo.",
        },
      ],
    },
  ],
};

export const ANTICANCER: Resumen = {
  id: "anticancer",
  titulo: "Anticáncer",
  autor: "David Servan-Schreiber",
  ano: 2007,
  gancho:
    "Un neurocientífico de treinta y un años se metió en su propio escáner para sustituir a un voluntario que no vino. Le encontraron un tumor cerebral.",
  porQue:
    "Es el libro sobre cáncer y estilo de vida más vendido de este siglo, escrito por un médico serio que además era el paciente. Merece leerse separando con cuidado lo que la evidencia sostiene de lo que él quería que fuera verdad.",
  partes: [
    {
      titulo: "El escáner de Pittsburgh, 1992",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Universidad de Pittsburgh, una tarde de 1992. Un equipo de neurocientíficos tiene reservada la máquina de resonancia magnética para un experimento sobre el funcionamiento del cerebro, y el voluntario que tenía que servir de control no aparece. Alguien tiene que meterse.",
        },
        {
          forma: "texto",
          texto:
            "Se mete uno de los investigadores, que tiene treinta y un años y ninguna molestia. Le hacen la prueba, salen las imágenes, y un compañero que las está mirando en la pantalla de al lado se queda callado más tiempo del normal. Hay una masa donde no debería haber nada.",
        },
        {
          forma: "clave",
          rotulo: "Lo que le encontraron",
          frase: "Un tumor cerebral del tamaño de una nuez. Tenía treinta y un años, ningún síntoma, y estaba en aquella máquina por casualidad y para hacer un favor. Lo operaron poco después, y a partir de ahí su vida profesional entera cambió de tema.",
        },
        {
          forma: "texto",
          texto:
            "Se llamaba David Servan-Schreiber y era francés. Venía de una familia conocida: su padre había fundado la revista L'Express y había sido diputado, y en su casa la conversación de la cena era la política nacional y el periodismo.",
        },
        {
          forma: "texto",
          texto:
            "Él eligió otra cosa. Estudió Medicina en Quebec, se doctoró en neurociencia cognitiva en Carnegie Mellon, y en Pittsburgh cofundó un centro de medicina integrativa. Además fue uno de los fundadores de la rama estadounidense de Médicos Sin Fronteras.",
        },
        {
          forma: "texto",
          texto:
            "Eso conviene tenerlo claro desde el principio, porque marca la diferencia con casi todo lo que se publica en esta estantería. No era un charlatán ni un vendedor de suplementos: era un médico investigador con publicaciones en revistas serias y con una carrera académica real.",
        },
        {
          forma: "arte",
          texto:
            "La operación salió bien y volvió a trabajar. Años después, el tumor reapareció, y esta vez pasó por quimioterapia. Fue entonces cuando le hizo a su oncólogo la pregunta que da origen a este libro: qué podía hacer él, además del tratamiento, para que aquello no volviera.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "La respuesta que recibió fue que nada en particular, que comiera de todo y llevara una vida normal. Servan-Schreiber cuenta que aquello le pareció una respuesta insuficiente, y que se pasó los años siguientes leyendo literatura científica para ver si era cierto.",
        },
        {
          forma: "texto",
          texto:
            "El libro salió en Francia en 2007, vendió más de un millón de ejemplares en su país y se tradujo a decenas de idiomas. Su título completo es un programa: prevenir y luchar gracias a nuestras defensas naturales, y ese subtítulo ya contiene la ambigüedad de todo el asunto.",
        },
        {
          forma: "texto",
          texto:
            "La tesis de partida es correcta y bien establecida. Prácticamente todos tenemos células con mutaciones potencialmente cancerosas circulando en el cuerpo, y la mayoría no llegan nunca a nada, porque el sistema inmunitario las elimina o porque no encuentran condiciones para crecer.",
        },
        {
          forma: "texto",
          texto:
            "De ahí saca su metáfora central, que es la del terreno. Una semilla necesita tierra: si el cuerpo ofrece inflamación crónica, exceso de factores de crecimiento y vasos sanguíneos nuevos con facilidad, el tumor prospera; si no los ofrece, la semilla se queda ahí.",
        },
        {
          forma: "texto",
          texto:
            "Sobre esa metáfora construye cuatro pilares que estructuran el libro entero. La alimentación, el ejercicio físico, la gestión del estrés y las emociones, y la reducción de la exposición a tóxicos ambientales. Cada uno tiene sus capítulos y sus recomendaciones concretas.",
        },
        {
          forma: "texto",
          texto:
            "Y hay que decir de entrada lo que dice él, porque casi todos sus lectores lo olvidan: repite muchas veces, y con claridad, que nada de esto sustituye al tratamiento médico. Que es un complemento, que él se operó y se puso quimioterapia, y que quien no lo haga se equivoca.",
        },
        {
          forma: "texto",
          texto:
            "Esa advertencia es la que separa este libro de la mayoría de los que comparten estantería con él. También es la que peor se transmite, porque el mensaje que llega al público es que hay una manera de comer que protege del cáncer, y el matiz se pierde por el camino.",
        },
        {
          forma: "texto",
          texto:
            "El problema del libro no es lo que niega, sino cuánto afirma. Servan-Schreiber toma un cuerpo de evidencia real y desigual, y lo presenta con una confianza uniforme, sin distinguir entre lo que está demostrado en personas y lo que solo se ha visto en placas de laboratorio.",
        },
        {
          forma: "texto",
          texto:
            "Esa distinción es la clave para leerlo, y merece explicarse porque sirve para cualquier libro de este tipo. Hay tres niveles de prueba, y en un texto divulgativo suelen mezclarse hasta parecer uno solo.",
        },
        {
          forma: "arte",
          texto:
            "El primero es el laboratorio: una sustancia mata células tumorales en una placa. El segundo es el animal: hace algo en un ratón. Y el tercero es el ensayo clínico: se prueba en personas, con grupo de control, y se mide si viven más o enferman menos.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "La distancia entre el primero y el tercero es enorme. En una placa se puede matar cualquier célula tumoral con lejía; el problema es hacerlo dentro de un cuerpo sin matar al cuerpo. Y las concentraciones que funcionan en una placa suelen ser inalcanzables comiendo.",
        },
        {
          forma: "texto",
          texto:
            "La inmensa mayoría de las cosas que han funcionado en el nivel uno han fracasado después en el tres. Es la historia entera de la investigación oncológica, y quien no lo tenga presente leerá este libro con mucho más optimismo del que corresponde.",
        },
        {
          forma: "texto",
          texto:
            "Dicho eso, hay una parte de sus recomendaciones que sí está respaldada por evidencia en personas y por organismos internacionales, y hay otra que no. Conviene ir por partes, empezando por la que ocupa más páginas.",
        },
        {
          forma: "texto",
          texto:
            "Casi la mitad del libro habla de comida.",
        },
        {
          forma: "texto",
          texto:
            "De qué poner y qué quitar de la cesta de la compra.",
        },
      ],
    },

    {
      titulo: "La cocina",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Su lista de alimentos recomendados es concreta y se ha reproducido en miles de artículos: crucíferas como el brócoli y la col, cúrcuma con pimienta negra, té verde, frutos rojos, ajo y cebolla, setas, chocolate negro, aceite de oliva y pescado azul.",
        },
        {
          forma: "texto",
          texto:
            "Y su lista de lo que hay que reducir: azúcar y harinas refinadas, carne roja y procesada, exceso de omega-6 —que está en los aceites de girasol y de maíz y en la carne de animales alimentados con grano—, y alcohol más allá de una copa de vino.",
        },
        {
          forma: "texto",
          texto:
            "Leída así, es una dieta mediterránea con especias. Prácticamente todo lo que recomienda coincide con lo que recomendaría cualquier nutricionista para reducir el riesgo cardiovascular, y por ahí el consejo es sensato aunque los motivos que da no lo sean.",
        },
        {
          forma: "clave",
          rotulo: "El argumento más repetido y más discutible",
          frase: "Que el azúcar alimenta al tumor. Se apoya en el efecto Warburg, que es real: las células tumorales consumen glucosa a una velocidad muy superior a la normal, y eso se aprovecha para verlas en las pruebas de imagen con glucosa marcada.",
        },
        {
          forma: "texto",
          texto:
            "El salto que hace el libro es de ahí a la cocina: si el tumor come glucosa, quitar azúcar de la dieta lo debilitará. Y ese salto no se sostiene, por una razón fisiológica que ninguna dieta puede saltarse.",
        },
        {
          forma: "texto",
          texto:
            "La glucosa en sangre está regulada dentro de un margen estrechísimo. Si uno deja de comer azúcar, el hígado la fabrica a partir de otras cosas, porque el cerebro la necesita. Ningún régimen alimentario consigue que un tumor se quede sin glucosa mientras el resto del cuerpo sigue vivo.",
        },
        {
          forma: "texto",
          texto:
            "Las principales sociedades oncológicas del mundo tienen páginas dedicadas expresamente a desmontar esta idea, precisamente porque circula tanto. Ningún ensayo clínico ha demostrado que retirar el azúcar frene un tumor ya existente en una persona.",
        },
        {
          forma: "arte",
          texto:
            "Donde sí hay una relación real es por otro camino. La obesidad y la resistencia a la insulina aumentan el riesgo de al menos trece tipos de cáncer, y eso está sólidamente documentado. O sea que comer menos azúcar ayuda, pero por el peso y el metabolismo, no por matar de hambre a nada.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "El segundo caballo de batalla del libro es la cúrcuma, a la que dedica páginas entusiastas. La curcumina, su principio activo, es una de las sustancias más estudiadas en laboratorio: inhibe crecimiento tumoral, angiogénesis e inflamación en cultivos celulares.",
        },
        {
          forma: "texto",
          texto:
            "Servan-Schreiber recomienda tomarla con pimienta negra, y ese consejo tiene fundamento: la piperina multiplica su absorción, que de otro modo es bajísima. Es un detalle real y bien documentado y explica por qué en la cocina india van siempre juntas.",
        },
        {
          forma: "texto",
          texto:
            "El problema es lo que pasó después. En 2017, un grupo de químicos medicinales publicó una revisión demoledora en una revista de la Sociedad Química Americana, señalando que la curcumina es el ejemplo de manual de una molécula que da positivo en casi cualquier ensayo.",
        },
        {
          forma: "texto",
          texto:
            "Su argumento es técnico y contundente: la curcumina interfiere con los métodos de detección, es inestable, se absorbe fatal y se degrada rápido, y pese a miles de artículos y a más de cien ensayos clínicos no ha producido ni un solo fármaco aprobado.",
        },
        {
          forma: "texto",
          texto:
            "Eso no significa que echar cúrcuma a la comida sea malo. Significa que la promesa que el libro le cuelga —tomarla a diario como parte de una estrategia contra el cáncer— no tiene respaldo en personas, y que veinte años después de aquel entusiasmo sigue sin tenerlo.",
        },
        {
          forma: "texto",
          texto:
            "Con el té verde pasa algo parecido. Los estudios de laboratorio sobre sus catequinas son prometedores; los estudios en poblaciones humanas dan resultados inconsistentes según el país, y las dosis que funcionan en un tubo de ensayo equivalen a litros diarios.",
        },
        {
          forma: "texto",
          texto:
            "Y con las crucíferas, que es su recomendación estrella, la situación es la mejor de todas y aun así modesta. Hay estudios observacionales que asocian el consumo alto de verduras crucíferas con menos riesgo de algunos tumores, con efectos pequeños y difíciles de aislar.",
        },
        {
          forma: "texto",
          texto:
            "El problema de fondo de toda la nutrición y el cáncer es ese: quien come mucho brócoli suele además fumar menos, moverse más, beber menos y tener más dinero, y separar el efecto del brócoli de todo lo demás es endiabladamente difícil.",
        },
        {
          forma: "texto",
          texto:
            "Hay una parte de sus consejos alimentarios que sí tiene detrás evidencia de primer nivel, y es la que menos ocupa en el libro: reducir el alcohol y reducir la carne procesada. Las dos cosas están clasificadas como cancerígenas por la agencia internacional correspondiente.",
        },
        {
          forma: "texto",
          texto:
            "El alcohol está en el grupo uno, el de los cancerígenos comprobados en humanos, y se relaciona con siete tipos de tumor, entre ellos el de mama, sin que exista un umbral seguro conocido. Servan-Schreiber, sin embargo, recomienda una copa de vino tinto al día por el resveratrol.",
        },
        {
          forma: "texto",
          texto:
            "Esa recomendación concreta ha envejecido mal. La idea del vino protector se ha ido cayendo en la última década, y los organismos de salud pública han pasado de hablar de consumo moderado a decir que cuanto menos, mejor. Es de las páginas del libro que hoy no se sostienen.",
        },
        {
          forma: "texto",
          texto:
            "En resumen: la dieta que propone es sensata, coincide con lo que se recomienda por otros motivos, y los mecanismos que da para justificarla van bastante por delante de lo que se sabe.",
        },
        {
          forma: "texto",
          texto:
            "Su segundo pilar tiene mucho mejor respaldo y ocupa mucho menos espacio.",
        },
        {
          forma: "texto",
          texto:
            "Y el tercero, al revés: es el que más páginas se lleva y el que peor aguanta.",
        },
      ],
    },

    {
      titulo: "El gimnasio y la respiración",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La recomendación de ejercicio del libro es de media hora diaria de actividad moderada, andar a buen paso incluido, y es la parte de todo el programa que descansa sobre el terreno más firme. Aquí Servan-Schreiber no está adelantándose a la evidencia: la está resumiendo.",
        },
        {
          forma: "texto",
          texto:
            "La actividad física se asocia con una reducción del riesgo de varios tipos de cáncer —colon, mama y endometrio son los mejor documentados— y esa asociación aparece en cohortes enormes, en países distintos y con métodos distintos, lo cual es lo que da confianza.",
        },
        {
          forma: "clave",
          rotulo: "Y lo que no se sabía en 2007",
          frase: "Que el ejercicio también mejora los resultados en personas que ya tienen un diagnóstico. Los estudios posteriores en supervivientes de cáncer de mama y de colon apuntan a menos recaídas y mejor supervivencia, y hoy la actividad física forma parte de las recomendaciones oncológicas estándar.",
        },
        {
          forma: "texto",
          texto:
            "En eso el libro acertó de pleno y por adelantado. También acertó al insistir en el peso corporal, que es uno de los factores modificables con más peso en la incidencia de cáncer y que en 2007 todavía no estaba en la conversación pública como lo está ahora.",
        },
        {
          forma: "texto",
          texto:
            "El tercer pilar es la gestión del estrés y de las emociones, y ahí el libro cambia de naturaleza. Deja de resumir evidencia y empieza a defender una tesis que, mirada con los datos que hay hoy, no se puede sostener en la forma en que él la sostiene.",
        },
        {
          forma: "texto",
          texto:
            "Su argumento es que el estrés crónico y las emociones no expresadas alteran la respuesta inmunitaria y la inflamación, y que eso favorece el desarrollo tumoral. Propone meditación, yoga, terapia, y una técnica de respiración lenta para regular la variabilidad del ritmo cardiaco.",
        },
        {
          forma: "arte",
          texto:
            "El mecanismo biológico existe: el estrés crónico eleva el cortisol y modifica marcadores inflamatorios e inmunitarios, y eso está medido. La pregunta es otra: si ese cambio se traduce en más cáncer y en peor supervivencia en personas reales, a lo largo de años.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Y esa pregunta se ha estudiado en serio, con cohortes gigantescas, precisamente porque la intuición popular es tan fuerte. Los resultados no acompañan la tesis del libro, y conviene decirlo con nombres y cifras porque el asunto tiene consecuencias.",
        },
        {
          forma: "texto",
          texto:
            "Un consorcio europeo publicó en 2013 un análisis conjunto con más de cien mil trabajadores seguidos durante años, y no encontró ninguna asociación entre el estrés laboral y el riesgo de desarrollar cáncer de colon, pulmón, mama o próstata.",
        },
        {
          forma: "texto",
          texto:
            "Los registros nacionales daneses, que permiten seguir a poblaciones enteras, se han usado para mirar si acontecimientos vitales devastadores —la muerte de un hijo, un divorcio— aumentan la incidencia de cáncer, y los resultados han sido en general negativos.",
        },
        {
          forma: "texto",
          texto:
            "El otro pilar de esta parte es la idea de que el apoyo psicológico alarga la vida de los enfermos, y tiene una historia muy instructiva. En 1989, un estudio de un psiquiatra de Stanford encontró que las mujeres con cáncer de mama que iban a terapia de grupo vivían más.",
        },
        {
          forma: "texto",
          texto:
            "Aquel resultado se hizo famosísimo y cambió la práctica de muchos hospitales. El problema es que no se ha replicado. Los intentos posteriores, incluido uno del propio autor original publicado en 2007, no encontraron diferencias de supervivencia.",
        },
        {
          forma: "texto",
          texto:
            "Un análisis publicado ese mismo año en una revista de psicología repasó toda esa literatura y concluyó que la esperanza había ido por delante de los datos: la terapia mejora claramente la calidad de vida y el estado de ánimo, y no hay pruebas de que alargue la supervivencia.",
        },
        {
          forma: "texto",
          texto:
            "Y otro trabajo con más de mil pacientes de cáncer de cabeza y cuello comprobó que el bienestar emocional al inicio del tratamiento no predecía cuánto iban a vivir. Es un resultado incómodo y bastante robusto.",
        },
        {
          forma: "texto",
          texto:
            "Esto importa por algo más que la exactitud. Si el estado de ánimo influye en el curso de la enfermedad, entonces el enfermo que empeora ha hecho algo mal, y esa idea aplasta a mucha gente en el peor momento posible de su vida.",
        },
        {
          forma: "texto",
          texto:
            "La periodista Barbara Ehrenreich escribió un libro entero sobre esto después de pasar por un cáncer de mama, y su reproche es exacto: la exigencia de mantener una actitud positiva convierte una desgracia en una responsabilidad y prohíbe estar hecho polvo con razón.",
        },
        {
          forma: "texto",
          texto:
            "Hay que decir en descargo de Servan-Schreiber que él no culpa a nadie y que evita explícitamente el discurso de la personalidad cancerígena. Pero su libro se apoya en esa literatura, y el mensaje que llega al lector es que gestionar bien las emociones cambia el pronóstico.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí está fuera de discusión es que el apoyo psicológico y las técnicas de relajación mejoran cómo se pasan los meses de tratamiento: menos ansiedad, mejor sueño, mejor tolerancia. Eso es mucho y basta para recomendarlas sin necesidad de prometer más.",
        },
        {
          forma: "texto",
          texto:
            "Su cuarto pilar, el de los tóxicos ambientales, tiene el mismo problema en versión reducida: mezcla riesgos bien establecidos con otros que están en discusión, y trata a todos con la misma alarma.",
        },
        {
          forma: "texto",
          texto:
            "Para saber qué hay que hacer de verdad hay un documento mucho menos ameno que este libro.",
        },
        {
          forma: "texto",
          texto:
            "Y con bastantes más autores detrás.",
        },
      ],
    },

    {
      titulo: "El informe del Fondo Mundial",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En el mismo año en que salió este libro, 2007, el Fondo Mundial para la Investigación del Cáncer y el Instituto Americano para la Investigación del Cáncer publicaron un informe conjunto que sigue siendo la referencia del campo, actualizado después en 2018.",
        },
        {
          forma: "texto",
          texto:
            "No es un libro de un autor: es la revisión sistemática de miles de estudios hecha por paneles internacionales de especialistas, con criterios explícitos de calidad y con una gradación de la evidencia en cada afirmación. Es aburridísimo y es lo que hay que mirar.",
        },
        {
          forma: "clave",
          rotulo: "Cuánto se puede prevenir",
          frase: "La Organización Mundial de la Salud estima que entre un tercio y la mitad de los cánceres serían evitables actuando sobre factores conocidos. La cifra suena enorme y lo es, y la mayor parte de esa proporción no viene de superalimentos: viene de cuatro o cinco cosas muy poco glamurosas.",
        },
        {
          forma: "texto",
          texto:
            "La primera y con muchísima diferencia es el tabaco, responsable de una parte enorme del total. Después, el exceso de peso corporal, el alcohol, el sedentarismo, algunas infecciones prevenibles con vacuna, y la exposición solar sin protección.",
        },
        {
          forma: "texto",
          texto:
            "Las recomendaciones del informe de 2018 son diez y se resumen rápido: mantener un peso saludable, moverse a diario, comer mucha verdura y legumbre, limitar la comida ultraprocesada, limitar la carne roja y evitar la procesada, limitar las bebidas azucaradas y limitar el alcohol.",
        },
        {
          forma: "arte",
          texto:
            "Y una recomendación explícita que va justo en contra del reflejo del comprador de suplementos: no confiar en pastillas ni en cápsulas para prevenir el cáncer. El panel dice que la protección debe buscarse en la alimentación entera y no en compuestos aislados.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Ese punto tiene detrás una historia que conviene conocer. En los años noventa se probaron en ensayos grandes suplementos antioxidantes que en laboratorio parecían protectores, y en dos de ellos el grupo que tomaba betacaroteno tuvo más cáncer de pulmón, no menos.",
        },
        {
          forma: "texto",
          texto:
            "Los ensayos hubo que detenerlos. Es el recordatorio más útil de todo este campo: una sustancia que hace algo bueno en una placa puede hacer daño en una persona, y la única manera de saberlo es probarlo, no deducirlo.",
        },
        {
          forma: "texto",
          texto:
            "El informe añade además una advertencia sobre las cifras que maneja, y es de las cosas más honradas que contiene. Casi toda la evidencia sobre alimentación y cáncer es observacional, y en ese tipo de estudios las asociaciones pequeñas son extremadamente difíciles de interpretar.",
        },
        {
          forma: "texto",
          texto:
            "Por eso el panel gradúa cada afirmación en tres niveles: convincente, probable y limitada. Muy pocas cosas llegan a convincente, y las que llegan son las de siempre: el peso, el alcohol, la carne procesada y la actividad física. Lo demás vive en los escalones de abajo.",
        },
        {
          forma: "texto",
          texto:
            "Ese detalle metodológico explica por qué los titulares sobre alimentos y cáncer cambian cada seis meses. No es que la ciencia se contradiga: es que se están publicando asociaciones pequeñas que aparecen y desaparecen según qué población se mire y cómo se ajusten los datos.",
        },
        {
          forma: "texto",
          texto:
            "Comparado con esa lista, el programa de Servan-Schreiber acierta en lo esencial y se desvía en el énfasis. Sus cuatro pilares recogen el peso, el ejercicio y la alimentación; y donde el informe dice que la evidencia es limitada, el libro pone entusiasmo.",
        },
        {
          forma: "texto",
          texto:
            "Hay además un desequilibrio de proporción que salta a la vista al comparar los dos textos. El tabaco, que es de largo el mayor factor evitable, ocupa muy poco espacio en el libro; la cúrcuma y el té verde ocupan mucho más.",
        },
        {
          forma: "texto",
          texto:
            "Eso no es casual y no es exclusivo de este autor. Un libro que dijera no fumes, adelgaza, muévete y bebe menos, en cuarenta páginas, sería exacto y no lo compraría nadie. La estantería de salud premia lo que se puede añadir a la vida, no lo que hay que quitar.",
        },
        {
          forma: "texto",
          texto:
            "Hay otra distinción que el libro difumina y que es la más importante de todas: la diferencia entre reducir el riesgo de que aparezca un cáncer y modificar el curso de uno que ya está ahí. Son dos preguntas distintas con dos niveles de evidencia muy distintos.",
        },
        {
          forma: "texto",
          texto:
            "Para lo primero hay datos poblacionales sólidos y recomendaciones internacionales. Para lo segundo hay muchísimo menos, y casi todo lo que se sabe apunta a que el estilo de vida ayuda a tolerar mejor el tratamiento y a recuperarse, no a sustituirlo ni a frenar el tumor.",
        },
        {
          forma: "texto",
          texto:
            "Un lector con un diagnóstico reciente que abra este libro buscando qué puede hacer va a encontrar respuestas concretas y esperanzadoras, y ese es a la vez su mayor mérito y su mayor riesgo, según lo que decida hacer con ellas.",
        },
        {
          forma: "texto",
          texto:
            "Servan-Schreiber era plenamente consciente de ese riesgo y vuelve una y otra vez sobre él. Insiste en que no ha visto nunca a nadie curarse con dieta, en que él mismo se sometió a todo lo que la medicina convencional le ofreció, y en que lo suyo es un añadido.",
        },
        {
          forma: "texto",
          texto:
            "También hay que reconocerle algo que el tiempo le ha dado: en 2007 defendía que el estilo de vida importa en oncología y que había que estudiarlo, y aquello sonaba a medicina alternativa. Hoy hay unidades hospitalarias dedicadas a eso y la conversación ha cambiado.",
        },
        {
          forma: "texto",
          texto:
            "Y le dio una cosa a mucha gente que no es despreciable: algo que hacer. Un diagnóstico oncológico coloca a la persona en una posición de pasividad total, y tener una lista de cosas que dependen de uno tiene un valor psicológico que él conocía bien por experiencia.",
        },
        {
          forma: "texto",
          texto:
            "La pregunta que quedaba flotando sobre el libro desde el primer día era otra, y era cruel: qué pasaría si al autor le volvía el tumor.",
        },
        {
          forma: "texto",
          texto:
            "Porque el libro entero está escrito por alguien que se presentaba como la prueba viviente de lo que contaba.",
        },
        {
          forma: "texto",
          texto:
            "En 2010 le volvió.",
        },
        {
          forma: "texto",
          texto:
            "Y esta vez no había operación posible.",
        },
      ],
    },

    {
      titulo: "El 24 de julio de 2011",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El tumor reapareció dieciocho años después del primer diagnóstico, y esta vez de una manera que no dejaba margen. Servan-Schreiber tenía cuarenta y nueve años, había vendido millones de libros explicando cómo mantener el cáncer a raya, y sabía perfectamente lo que se venía encima.",
        },
        {
          forma: "texto",
          texto:
            "Escribió entonces un último libro corto en el que se enfrenta a la pregunta de frente, sin escurrirse. Sabía que su muerte se iba a leer como el desmentido de su obra, y decidió contestar antes de que se lo preguntaran.",
        },
        {
          forma: "clave",
          rotulo: "Su respuesta",
          frase: "Que en 1992 le habían dado unos pocos años y había vivido diecinueve, la mayoría de ellos trabajando, escribiendo y con buena calidad de vida. Que él nunca había prometido la inmortalidad, sino una manera de vivir mejor y de ganar tiempo. Y que la muerte no anula lo vivido.",
        },
        {
          forma: "texto",
          texto:
            "Murió el 24 de julio de 2011, a los cincuenta años. Lo honrado es decir que su caso no demuestra nada en ninguna de las dos direcciones. Sobrevivir diecinueve años a un tumor cerebral maligno es extraordinario, y con un solo paciente no se puede saber por qué.",
        },
        {
          forma: "texto",
          texto:
            "La supervivencia en estos tumores varía enormemente según el tipo exacto, la localización, la edad, la genética del tumor y la respuesta al tratamiento. Hay pacientes que viven décadas sin haber cambiado una coma de su dieta, y otros que hacen todo bien y no llegan al año.",
        },
        {
          forma: "arte",
          texto:
            "Ese es exactamente el problema de razonar con casos individuales, y es el que hace que existan los ensayos clínicos. Un testimonio, por sincero y por documentado que esté, no distingue entre lo que funcionó y lo que habría pasado igual sin hacer nada.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Ahora, el balance ordenado. Lo que el libro acierta: el ejercicio físico, el control del peso, reducir el alcohol y comer más verdura y menos ultraprocesado. Todo eso reduce el riesgo de varios tipos de cáncer y está en las recomendaciones internacionales.",
        },
        {
          forma: "texto",
          texto:
            "Acierta también al defender que estas cosas se estudien en serio dentro de la oncología, y al insistir en que el paciente puede hacer algo por su cuenta sin abandonar el tratamiento. Eso en 2007 era una posición minoritaria y hoy es mayoritaria.",
        },
        {
          forma: "texto",
          texto:
            "Lo que no aguanta: el azúcar como combustible del tumor tal como lo plantea, la cúrcuma y el té verde como agentes anticancerosos en personas, la copa diaria de vino, y sobre todo la idea de que gestionar el estrés y las emociones modifica el curso de la enfermedad.",
        },
        {
          forma: "texto",
          texto:
            "Ese último punto es el más importante porque es el que puede hacer daño. Las cohortes grandes no encuentran relación entre estrés y aparición de cáncer, y los ensayos de intervención psicológica mejoran la calidad de vida sin alargar la supervivencia.",
        },
        {
          forma: "texto",
          texto:
            "Hay un problema de método que atraviesa el libro entero y que conviene saber detectar en cualquier obra parecida: cita centenares de estudios, y no distingue entre los que están hechos en placas, en ratones o en personas. Todos aparecen con la misma autoridad.",
        },
        {
          forma: "texto",
          texto:
            "Y otro de actualización: se publicó en 2007 y algunas de sus posiciones han sido superadas por lo que se ha investigado después, especialmente en lo del alcohol y en lo de la psicooncología. Ningún libro de salud de hace veinte años debería leerse sin comprobar qué ha cambiado.",
        },
        {
          forma: "texto",
          texto:
            "Lo que la gente cree de este libro y no es verdad, uno: que dice que la dieta cura el cáncer. No lo dice en ninguna página, insiste en lo contrario repetidamente, y se sometió él mismo a cirugía y a quimioterapia sin dudarlo.",
        },
        {
          forma: "texto",
          texto:
            "Dos: que quitar el azúcar mata de hambre al tumor. La glucosa en sangre se mantiene aunque uno deje de comer azúcar, porque el hígado la fabrica. Ningún ensayo clínico ha demostrado que esa estrategia frene nada.",
        },
        {
          forma: "texto",
          texto:
            "Tres: que su muerte demuestra que el libro estaba equivocado. No demuestra nada: un caso no es evidencia, ni a favor cuando vivía ni en contra cuando murió. Lo que refuta partes del libro son las cohortes y los ensayos, no su necrológica.",
        },
        {
          forma: "texto",
          texto:
            "Cuatro: que existe una categoría de alimentos anticáncer. La epidemiología nutricional trabaja con patrones de alimentación y con riesgos relativos pequeños, no con alimentos que combaten tumores. Esa categoría la inventó el mercado editorial, no la ciencia.",
        },
        {
          forma: "texto",
          texto:
            "Y cinco: que sus recomendaciones son una alternativa al tratamiento. Son un complemento, y quien las use para retrasar una cirugía o una quimioterapia está haciendo justo lo que el autor pasó cuatro años pidiendo por escrito que no se hiciera.",
        },
        {
          forma: "texto",
          texto:
            "Si alguien quiere una sola cosa práctica de todo esto, no está en la lista de alimentos. Está en lo aburrido: no fumar, mantener un peso razonable, moverse media hora al día, beber poco o nada y no faltar a los cribados que le tocan por edad.",
        },
        {
          forma: "texto",
          texto:
            "Eso, según los organismos internacionales, cubre una parte enorme de todo lo que un individuo puede hacer. Lo demás son márgenes, y los márgenes están bien mientras no se confundan con el centro.",
        },
        {
          forma: "texto",
          texto:
            "Servan-Schreiber lo sabía y lo escribió. Lo que pasa es que sus lectores compraron el libro por la cúrcuma.",
        },
        {
          forma: "texto",
          texto:
            "Y él, con toda su formación, escribió más páginas sobre la cúrcuma que sobre el tabaco.",
        },
      ],
    },
  ],
};

export const CEREBRO_DE_PAN: Resumen = {
  id: "cerebro-de-pan",
  titulo: "Cerebro de pan",
  autor: "David Perlmutter",
  ano: 2013,
  gancho:
    "Un neurólogo sostiene que el pan, la pasta y la fruta te están destruyendo el cerebro, y que el alzhéimer es una diabetes. Ha vendido millones de ejemplares.",
  porQue:
    "Es de los libros de salud más vendidos del siglo y conviene leerlo con la evidencia al lado, porque cita estudios reales y saca de ellos conclusiones que los estudios no dicen. Aprender a ver esa costura sirve para cualquier libro del estante.",
  partes: [
    {
      titulo: "Una consulta en Naples, Florida",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Naples es una ciudad de la costa de Florida con una de las poblaciones más envejecidas y más ricas de Estados Unidos. Allí tiene su consulta privada un neurólogo llamado David Perlmutter, y por su puerta entran sobre todo personas mayores preocupadas por su memoria.",
        },
        {
          forma: "texto",
          texto:
            "Perlmutter nació en 1954, se licenció en Medicina en la Universidad de Miami y es neurólogo con la certificación oficial correspondiente. Eso es importante decirlo de entrada: no es un charlatán sin títulos, es un médico con formación reglada y ejercicio clínico.",
        },
        {
          forma: "clave",
          rotulo: "Lo que sostiene este libro",
          frase: "Que los cereales, y en especial el gluten, son tóxicos para el cerebro de casi todo el mundo y no solo de los celíacos. Que los hidratos de carbono provocan deterioro cognitivo. Y que el alzhéimer es en el fondo una enfermedad metabólica, una diabetes del cerebro.",
        },
        {
          forma: "texto",
          texto:
            "El libro salió en 2013, llegó al número uno de la lista de más vendidos del New York Times y se ha traducido a decenas de idiomas. En español se llama Cerebro de pan y sigue siendo uno de los títulos de salud que más se recomiendan de boca en boca.",
        },
        {
          forma: "texto",
          texto:
            "Y hay que decir por qué convence, porque no convence por casualidad. El libro está escrito con claridad, se apoya en cientos de referencias a artículos científicos reales, y su autor es neurólogo en ejercicio. No parece pseudociencia: parece medicina.",
        },
        {
          forma: "arte",
          texto:
            "El problema no está en las citas, que en su mayoría existen y dicen lo que dice que dicen. Está en el paso siguiente: en la conclusión que se saca de ellas, que casi siempre va varios escalones por delante de lo que el estudio permite afirmar.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Ese mecanismo es lo más útil que se puede aprender de este resumen, y sirve para cualquier libro de salud. Consiste en tres pasos. Primero se cita un estudio verdadero, normalmente en ratones o de tipo observacional. Segundo, se describe correctamente.",
        },
        {
          forma: "texto",
          texto:
            "Y tercero, se extrae una recomendación práctica para el lector que el estudio no sostiene. El salto está en ese tercer paso, no en los dos primeros, y por eso las referencias a pie de página dan una impresión de rigor que el argumento no tiene.",
        },
        {
          forma: "texto",
          texto:
            "Conviene además reconocer lo que el libro acierta, que existe y no es poco, porque un resumen que solo demoliera sería tan tramposo como el propio libro. Hay tres cosas en él que están bien fundadas y merecen tomarse en serio.",
        },
        {
          forma: "texto",
          texto:
            "La primera: la enfermedad celíaca es real, afecta a alrededor del uno por ciento de la población y está gravemente infradiagnosticada. Mucha gente pasa años con síntomas sin que nadie le pida la prueba, y eso es un fallo del sistema sanitario que el libro denuncia con razón.",
        },
        {
          forma: "texto",
          texto:
            "La segunda: la relación entre el metabolismo y el cerebro existe. La diabetes tipo 2 es un factor de riesgo establecido de demencia, y hay estudios de cohorte grandes que encuentran más riesgo de deterioro cognitivo incluso con glucemias altas que no llegan a diabetes.",
        },
        {
          forma: "texto",
          texto:
            "La tercera: el ejercicio físico es lo mejor que existe hoy para reducir el riesgo de deterioro cognitivo, con más respaldo que cualquier alimento, cualquier suplemento y cualquier juego de entrenamiento mental. El libro lo dice y hace bien en decirlo.",
        },
        {
          forma: "arte",
          texto:
            "Con esas tres bases verdaderas construye después un edificio que no se sostiene, y esa es la estructura de casi todos los libros de este estante: un cimiento real, una planta discutible y un ático inventado, todo con la misma seguridad en el tono.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Su tesis central sobre el mecanismo es la inflamación. Sostiene que el gluten y los hidratos provocan una inflamación crónica de bajo grado que llega al cerebro y que está detrás del alzhéimer, del párkinson, de la ansiedad, del déficit de atención y de las migrañas.",
        },
        {
          forma: "texto",
          texto:
            "La inflamación es un concepto real y muy investigado, y también es el comodín favorito de la divulgación de salud, porque permite conectar cualquier causa con cualquier efecto sin tener que explicar el camino concreto entre las dos.",
        },
        {
          forma: "texto",
          texto:
            "Que en varias enfermedades neurodegenerativas hay procesos inflamatorios está documentado. Que esos procesos los cause el pan, y que quitarlo los revierta en una persona sana, es un salto que ningún ensayo clínico ha dado, y es exactamente lo que el libro afirma.",
        },
        {
          forma: "texto",
          texto:
            "La estructura de su argumento contra los cereales tiene además un componente histórico que conviene mirar, porque es el más repetido y el más fácil de comprobar: la idea de que nuestros genes no están preparados para comer grano.",
        },
        {
          forma: "texto",
          texto:
            "Sostiene que la agricultura llegó hace unos diez mil años y que el genoma humano se formó durante cientos de miles de años sin cereales, con lo que nuestro cuerpo estaría diseñado para grasas y proteínas y no para hidratos.",
        },
        {
          forma: "texto",
          texto:
            "Es un argumento que suena bien y que la genética de poblaciones ha desmentido en su forma fuerte. Diez mil años son unas cuatrocientas generaciones, y hay cambios evolutivos documentados en ese plazo, empezando por el más famoso de todos.",
        },
        {
          forma: "texto",
          texto:
            "La tolerancia a la lactosa en la edad adulta es una mutación reciente que se extendió por Europa y por África oriental en unos pocos miles de años, precisamente porque el pastoreo la hizo ventajosa. La evolución humana no se detuvo en el Paleolítico.",
        },
        {
          forma: "texto",
          texto:
            "También está documentado que las poblaciones con dietas ricas en almidón tienen más copias del gen de la amilasa salival, la enzima que empieza a digerirlo en la boca. Es decir: hay adaptación medible al consumo de hidratos, y va en la dirección contraria a la del libro.",
        },
        {
          forma: "texto",
          texto:
            "Con ese marco montado, el libro va a por su objetivo principal, que es la proteína que le da el título.",
        },
        {
          forma: "texto",
          texto:
            "Y aquí es donde hay que separar con cuidado dos cosas que él mezcla continuamente.",
        },
        {
          forma: "texto",
          texto:
            "Porque una de las dos es una enfermedad grave y bien definida.",
        },
      ],
    },

    {
      titulo: "El uno por ciento que sí",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La enfermedad celíaca es un trastorno autoinmune. En quien la tiene, el gluten desencadena una respuesta inmunitaria que ataca al propio intestino delgado y destruye las vellosidades que absorben los nutrientes. No es una intolerancia ni una alergia: es autoinmunidad.",
        },
        {
          forma: "texto",
          texto:
            "Afecta a alrededor del uno por ciento de la población en los países occidentales, se diagnostica con análisis de anticuerpos y, cuando hace falta, con biopsia intestinal, y el único tratamiento eficaz es retirar el gluten de por vida y por completo.",
        },
        {
          forma: "texto",
          texto:
            "Que el culpable fuera el pan lo descubrió un pediatra holandés, Willem-Karel Dicke, en el peor invierno posible. Durante el hambre de 1944 desapareció la harina de los hospitales de los Países Bajos, y sus pacientes celíacos, que se iban muriendo despacio, empezaron a mejorar.",
        },
        {
          forma: "texto",
          texto:
            "La confirmación llegó cuando los aviones suecos lanzaron pan sobre las ciudades ocupadas y aquellos mismos niños volvieron a empeorar en cuestión de días. Dicke tardó todavía años en demostrarlo en el laboratorio y publicó su tesis en Utrecht en 1950.",
        },
        {
          forma: "texto",
          texto:
            "Antes de él, la celiaquía se trataba con dietas de plátano y con una mortalidad infantil altísima. Conviene recordarlo cuando se habla del asunto a la ligera: es una enfermedad grave de verdad, y hubo que dar con su causa mirando a unos niños durante una hambruna.",
        },
        {
          forma: "texto",
          texto:
            "Hoy se sabe que hace falta además un terreno genético concreto, dos variantes del sistema inmunitario conocidas como DQ2 y DQ8. Entre un treinta y un cuarenta por ciento de la población las lleva encima, y solo alrededor del uno por ciento desarrolla la enfermedad.",
        },
        {
          forma: "texto",
          texto:
            "Por eso el test genético sirve para descartar y no para confirmar: si no llevas esas variantes, casi con seguridad no eres celíaco; si las llevas, no significa casi nada. Es un matiz que se malinterpreta continuamente, en internet y también en algunas consultas.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un dato que sí respalda la alarma de fondo del libro. Comparando muestras de sangre congeladas de los años cincuenta con muestras actuales se ha visto que la celiaquía real, no solo la diagnosticada, es varias veces más frecuente hoy que hace medio siglo.",
        },
        {
          forma: "texto",
          texto:
            "Nadie sabe con seguridad por qué. Se han propuesto cambios en la flora intestinal, en las infecciones de la infancia, en cómo y cuándo se introduce el gluten en la dieta del bebé. Es una pregunta abierta y legítima, y el libro hace bien en señalarla.",
        },
        {
          forma: "clave",
          rotulo: "Y aquí el libro tiene razón",
          frase: "Está gravemente infradiagnosticada. Se calcula que una parte importante de los celíacos no lo sabe, porque los síntomas son variadísimos —anemia, cansancio, dolor articular, infertilidad— y muchos no incluyen molestias digestivas, que es lo que el médico busca.",
        },
        {
          forma: "texto",
          texto:
            "Y también tiene razón en algo que es su terreno como neurólogo: la celiaquía puede dar manifestaciones neurológicas. Están documentadas la ataxia por gluten, que afecta al equilibrio, y neuropatías periféricas, y en algunos pacientes son el único síntoma visible.",
        },
        {
          forma: "texto",
          texto:
            "Eso significa que una persona con problemas de equilibrio o de sensibilidad en las extremidades sin causa clara sí debería ser estudiada para descartar celiaquía, y que muchos neurólogos no lo hacen. Es una aportación real del libro y hay que apuntársela.",
        },
        {
          forma: "arte",
          texto:
            "El problema empieza cuando el argumento se extiende del uno por ciento al noventa y nueve restante. El libro sostiene que el gluten daña a prácticamente todo el mundo, con distintos grados, y que la celiaquía es solo la punta visible de un problema general.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Esa afirmación es la que sostiene las ventas del libro y la que no tiene respaldo. Y conviene entender por qué es tan difícil de comprobar, porque en ese hueco es donde caben todos los libros de dieta que existen.",
        },
        {
          forma: "texto",
          texto:
            "El problema es que cuando alguien deja el gluten, no deja solo el gluten. Deja el pan blanco, la bollería industrial, la pizza, la cerveza, la pasta y la mayoría de los ultraprocesados, y empieza a cocinar más y a comprar más verdura.",
        },
        {
          forma: "texto",
          texto:
            "Y como además ha tomado una decisión importante sobre su salud y está pendiente de los resultados, se encuentra mejor. Eso es real, la persona no se lo inventa, y no dice absolutamente nada sobre si el culpable era el gluten o cualquiera de las otras quince cosas.",
        },
        {
          forma: "texto",
          texto:
            "Queda por revisar el otro pilar del libro, que es la idea de que el trigo de hoy no es el de antes. Se repite en todo el género: que lo han modificado genéticamente, que lleva mucho más gluten que hace un siglo y que por eso ahora nos sienta mal a todos.",
        },
        {
          forma: "texto",
          texto:
            "El primer punto es sencillamente falso y es fácil de comprobar: no existe trigo transgénico comercial en ningún país del mundo. Las variedades modernas salieron del cruce clásico de plantas, sobre todo del trabajo de Norman Borlaug en los años cincuenta y sesenta.",
        },
        {
          forma: "texto",
          texto:
            "Lo que Borlaug buscaba era un trigo de tallo corto que no se venciera con el peso del grano ni con el viento. Aquello multiplicó las cosechas en México, la India y Pakistán, y es probablemente la razón de que varios cientos de millones de personas no murieran de hambre.",
        },
        {
          forma: "texto",
          texto:
            "El segundo punto tampoco se sostiene. Los análisis que han comparado el contenido de proteína de variedades cultivadas a lo largo del último siglo, incluidas colecciones históricas del departamento de Agricultura estadounidense, no encuentran ese aumento del gluten por ninguna parte.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí ha cambiado es otra cosa: cuánto gluten añadido lleva la comida industrial. El gluten de trigo se vende como ingrediente y se echa a embutidos, salsas, pan de molde y precocinados para dar textura, y ese consumo ha subido de forma clara y documentada.",
        },
        {
          forma: "texto",
          texto:
            "Y ha cambiado cómo se hace el pan. La fermentación industrial dura una hora donde la tradicional duraba muchas, y la larga degrada parte de esos hidratos fermentables mientras que la corta los deja intactos. Es una hipótesis que encaja con los datos mucho mejor que la del gluten malvado.",
        },
        {
          forma: "texto",
          texto:
            "Mientras tanto, el mercado sin gluten ha crecido hasta mover miles de millones con una enfermedad que sigue afectando al uno por ciento. En las encuestas de consumo, la proporción de adultos que dice querer reducir el gluten se acerca a un tercio de la población.",
        },
        {
          forma: "texto",
          texto:
            "Y el producto sin gluten industrial suele ser peor que el normal: para compensar la falta de la proteína que da elasticidad lleva más azúcar, más grasa y menos fibra que su equivalente con trigo, y cuesta dos o tres veces más en el supermercado.",
        },
        {
          forma: "texto",
          texto:
            "Nada de esto demuestra que el trigo sea inocente. Demuestra que la pregunta seguía sin respuesta, y que responderla exigía un experimento que nadie había hecho todavía del todo bien.",
        },
      ],
    },

    {
      titulo: "El experimento de Melbourne",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En la Universidad Monash, a las afueras de Melbourne, hay un departamento de gastroenterología que en los años dos mil se hizo conocido por una idea distinta: que lo que sienta mal del trigo, la cebolla o la manzana no es una proteína, sino unos azúcares que fermentan en el intestino.",
        },
        {
          forma: "texto",
          texto:
            "A esos azúcares les pusieron un nombre técnico que se abrevia FODMAP, y diseñaron una dieta para retirarlos y volver a introducirlos uno a uno. Es decir: eran el equipo del mundo que mejor sabía qué otras cosas hay en el pan además del gluten.",
        },
        {
          forma: "texto",
          texto:
            "En 2011, una investigadora de ese grupo, Jessica Biesiekierski, publicó un ensayo con treinta y cuatro personas que decían reaccionar al gluten sin ser celíacas. A unas les dio pan y magdalenas con gluten y a otras idénticos sin él, sin que nadie supiera cuál era cuál.",
        },
        {
          forma: "texto",
          texto:
            "El grupo del gluten empeoró de forma significativa. El estudio salió en una revista de referencia y durante años fue la prueba más citada de que la sensibilidad al gluten no celíaca existe de verdad. El propio equipo de los FODMAP la había demostrado.",
        },
        {
          forma: "clave",
          rotulo: "Lo que hicieron después",
          frase: "En vez de defender su hallazgo, fueron a intentar tumbarlo. En el ensayo de 2011 no habían controlado el resto de la dieta, y ellos mejor que nadie sabían que eso dejaba a los FODMAP sueltos. Así que lo repitieron con un diseño más exigente.",
        },
        {
          forma: "arte",
          texto:
            "Volver sobre el propio resultado con un método mejor es lo que se supone que hace la ciencia y lo que en la práctica casi nadie hace, porque no da premios ni titulares ni plazas. Aquí conviene detenerse un segundo, porque el gesto vale por sí solo.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "En La estructura de las revoluciones científicas, Thomas Kuhn describió comunidades científicas que se agarran a su marco hasta que ya no pueden más. Este es el contraejemplo que merece nombrarse: un grupo que desmontó su propio resultado antes de que se lo desmontara nadie.",
        },
        {
          forma: "texto",
          texto:
            "El ensayo nuevo se publicó en 2013, el mismo año que Cerebro de pan, y merece contarse con detalle: es a la vez la mejor prueba que existe sobre esta cuestión y una lección de cómo se comprueba una idea que todo el mundo daba ya por buena.",
        },
        {
          forma: "texto",
          texto:
            "Reclutaron a personas que decían reaccionar al gluten, sin celiaquía diagnosticada, y a las que quitar el gluten les había mejorado los síntomas. Es decir: el grupo que más claro tenía que el gluten era su problema.",
        },
        {
          forma: "texto",
          texto:
            "Primero les pusieron a todos una dieta baja en unos hidratos fermentables que se conocen por sus siglas en inglés y que están en el trigo, pero también en la cebolla, el ajo, las legumbres, la manzana y la leche. Con esa dieta, los síntomas de casi todos mejoraron.",
        },
        {
          forma: "texto",
          texto:
            "Y después, sobre esa base ya limpia, les fueron dando en distintas fases gluten en dosis alta, gluten en dosis baja o placebo, sin que nadie supiera qué tocaba. Si el gluten fuera el culpable, los síntomas tenían que reaparecer con el gluten y no con el placebo.",
        },
        {
          forma: "texto",
          texto:
            "No ocurrió. Los participantes empeoraron en todas las fases, incluida la del placebo, sin ningún patrón específico ligado al gluten. Lo que les estaba sentando mal no era la proteína del título del libro: eran los otros hidratos del trigo.",
        },
        {
          forma: "texto",
          texto:
            "Ese resultado no cierra la discusión del todo —la sensibilidad al trigo no celíaca sigue siendo un campo de investigación activo y hay otras hipótesis sobre la mesa—, y sí desmonta la afirmación concreta de que el gluten sea un tóxico para la población general.",
        },
        {
          forma: "texto",
          texto:
            "Y explica algo muy práctico: por qué tanta gente mejora al dejar el trigo y sin embargo el gluten no es la causa. Están quitando de la dieta otra cosa que va en el mismo alimento, y atribuyéndolo a lo que han leído en un libro.",
        },
        {
          forma: "texto",
          texto:
            "Explica también el otro fenómeno que apareció en el experimento, que se llama efecto nocebo. Si esperas que algo te siente mal, te sienta mal: aparecen hinchazón, dolor y cansancio reales y medibles. Por eso los participantes empeoraron incluso en la fase del placebo.",
        },
        {
          forma: "texto",
          texto:
            "El nocebo no es una acusación al paciente ni significa que se lo invente. Es un efecto conocido y potente, y es la razón exacta por la que hacen falta los ensayos a ciegas: sin ellos, la convicción del que come y la del que observa se cuelan en el resultado sin que nadie mienta.",
        },
        {
          forma: "texto",
          texto:
            "Conviene decir también los límites del estudio de Melbourne, porque los tiene. Eran menos de cuarenta personas, las fases duraban días y los síntomas se medían con cuestionarios. No es la última palabra sobre el trigo, y su equipo nunca dijo que lo fuera.",
        },
        {
          forma: "texto",
          texto:
            "De hecho sigue viva otra hipótesis sobre unas proteínas distintas del trigo, unos inhibidores que la planta fabrica para defenderse de los insectos y que en el laboratorio activan la inmunidad innata. Lo que el ensayo desmonta no es el trigo entero: es el gluten como veneno universal.",
        },
        {
          forma: "texto",
          texto:
            "De todo esto sale una instrucción práctica que vale más que el libro entero. Si el pan te sienta mal, lo primero es hacerse la prueba de celiaquía comiendo gluten con normalidad, y solo después probar una dieta baja en FODMAP con un profesional y con reintroducción.",
        },
        {
          forma: "texto",
          texto:
            "Ese con reintroducción no es un adorno. La dieta baja en FODMAP se diseñó como herramienta de diagnóstico y no como forma de vida: mantenida durante años recorta la fibra y empobrece la flora intestinal, y el propio equipo de Monash lleva desde el principio insistiendo en ello.",
        },
        {
          forma: "texto",
          texto:
            "Hay además una consecuencia médica del asunto que casi nunca se cuenta y que puede hacer daño real. Si alguien deja el gluten por su cuenta antes de hacerse la prueba de celiaquía, la prueba sale negativa aunque sea celíaco.",
        },
        {
          forma: "texto",
          texto:
            "Los anticuerpos que se buscan solo aparecen si se está comiendo gluten. Con lo cual, una persona que lo deja porque ha leído este libro y después va al médico puede quedarse sin diagnóstico durante años, con la enfermedad activa cada vez que se salte la dieta.",
        },
        {
          forma: "texto",
          texto:
            "Es la ironía completa: un libro que denuncia con razón el infradiagnóstico de la celiaquía puede contribuir a él, porque empuja a quitar el gluten antes de pasar por la consulta.",
        },
        {
          forma: "texto",
          texto:
            "La segunda mitad del libro va a por un objetivo mucho mayor que el pan.",
        },
        {
          forma: "texto",
          texto:
            "Va a por la enfermedad que más asusta a los lectores de sesenta años.",
        },
      ],
    },

    {
      titulo: "La diabetes tipo tres",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El alzhéimer afecta a decenas de millones de personas, no tiene cura, y los fármacos disponibles apenas modifican su curso. Cualquier libro que ofrezca una manera de prevenirlo tiene garantizado un público desesperado, y este ofrece una que suena convincente.",
        },
        {
          forma: "texto",
          texto:
            "La tesis es que el alzhéimer es en realidad una enfermedad metabólica, causada por la resistencia a la insulina en el cerebro, y que por tanto se previene comiendo pocos hidratos. El libro la llama diabetes tipo tres y la presenta como un hecho.",
        },
        {
          forma: "clave",
          rotulo: "De dónde sale esa etiqueta",
          frase: "Es una hipótesis publicada en 2008 por un equipo estadounidense a partir de observaciones de que en el cerebro con alzhéimer hay alteraciones de la señalización de la insulina. Es una línea de investigación legítima y activa, y no es una categoría diagnóstica reconocida.",
        },
        {
          forma: "texto",
          texto:
            "Ningún manual de neurología ni ninguna sociedad científica clasifica el alzhéimer como una diabetes. Presentar una hipótesis de investigación como si fuera nomenclatura establecida es uno de los movimientos que más se repiten en este libro.",
        },
        {
          forma: "texto",
          texto:
            "Ahora bien, la relación entre metabolismo y demencia existe y es sólida, así que hay que decir con precisión qué se sabe. La diabetes tipo 2 aumenta el riesgo de demencia de manera consistente en estudios de cohorte grandes y en varios países.",
        },
        {
          forma: "arte",
          texto:
            "Y hay un resultado más fino y bastante impresionante: un estudio publicado en una revista médica de primer nivel en 2013 siguió a más de dos mil personas mayores y encontró que niveles más altos de glucosa se asociaban a más riesgo de demencia incluso sin llegar a ser diabéticos.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Eso es real, es importante, y da un motivo bueno para no vivir con la glucemia por las nubes. Lo que no dice, y aquí está el salto del libro, es que una persona sana que come pan vaya a desarrollar alzhéimer por comer pan.",
        },
        {
          forma: "texto",
          texto:
            "La distancia entre las dos afirmaciones es la distancia entre una asociación observacional en un rango alto de glucosa y una recomendación dietética preventiva para toda la población. Para dar ese paso haría falta un ensayo, y ese ensayo no existe.",
        },
        {
          forma: "texto",
          texto:
            "Las asociaciones que reúnen a los investigadores de alzhéimer publican revisiones periódicas de lo que se sabe sobre prevención, y su posición es constante: ninguna dieta ha demostrado prevenir la enfermedad, y quien diga lo contrario va por delante de los datos.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí aparece con regularidad en esas revisiones es un puñado de factores de riesgo modificables: el tabaco, la hipertensión no tratada, la diabetes mal controlada, el sedentarismo, la pérdida de audición sin corregir, el aislamiento social y la depresión.",
        },
        {
          forma: "texto",
          texto:
            "Esa lista es mucho menos atractiva comercialmente que una dieta, porque no se vende en un libro ni en un frasco, y es donde está la evidencia. Ninguno de esos factores garantiza nada; simplemente son los únicos con respaldo.",
        },
        {
          forma: "texto",
          texto:
            "El otro frente del libro es el colesterol, y ahí sostiene algo que va contra un cuerpo de evidencia enorme: que el colesterol alto es bueno para el cerebro, que bajarlo es peligroso y que las estatinas perjudican la función cognitiva.",
        },
        {
          forma: "arte",
          texto:
            "El punto de partida no es falso: el cerebro contiene mucho colesterol y lo necesita. Lo que omite es que el cerebro fabrica el suyo propio y no lo toma de la sangre, porque el colesterol no atraviesa la barrera que separa el cerebro de la circulación.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Sobre las estatinas y la memoria hubo una alarma real hace años, y se estudió. Los análisis conjuntos de los ensayos disponibles no han encontrado un efecto perjudicial sobre la función cognitiva, y las agencias reguladoras revisaron el asunto y mantuvieron los fármacos.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí está fuera de discusión es que las estatinas reducen los infartos y los ictus en las personas con riesgo cardiovascular alto, y eso está medido en ensayos con decenas de miles de participantes durante décadas. Es de lo mejor establecido en toda la medicina.",
        },
        {
          forma: "texto",
          texto:
            "Y aquí el consejo del libro puede hacer daño de verdad, más que en lo del pan. Una persona de sesenta y cinco años con riesgo cardiovascular que deje su tratamiento porque un neurólogo escribió que le va a estropear la memoria está corriendo un riesgo grande y evitable.",
        },
        {
          forma: "texto",
          texto:
            "Ese es el criterio que conviene aplicar a cualquier libro de salud: no si el consejo es raro, sino qué pasa si alguien lo sigue y el autor estaba equivocado. Comer menos pan no le hace daño a nadie. Dejar una estatina indicada, sí.",
        },
        {
          forma: "texto",
          texto:
            "Hay además un ámbito donde la dieta que propone sí tiene una base médica real y donde el libro pisa terreno firme, y hay que reconocérselo porque es la parte mejor fundamentada de todas.",
        },
        {
          forma: "texto",
          texto:
            "La dieta cetogénica, muy alta en grasas y casi sin hidratos, se usa en medicina desde los años veinte para tratar la epilepsia infantil que no responde a los fármacos, y funciona en una parte de esos pacientes. Eso está establecido y se hace en hospitales.",
        },
        {
          forma: "texto",
          texto:
            "El libro se apoya en eso para extenderla a la prevención de la demencia en personas sanas, y ese es otro salto: que una dieta funcione como tratamiento de una enfermedad concreta no dice nada de su efecto preventivo en alguien que no la tiene.",
        },
        {
          forma: "texto",
          texto:
            "Hay algunos ensayos pequeños de intervenciones cetogénicas en deterioro cognitivo leve, con resultados preliminares y muestras de decenas de personas. Es un campo abierto y prometedor, y está a mucha distancia de justificar lo que el libro recomienda.",
        },
        {
          forma: "texto",
          texto:
            "Con todo eso montado, la última parte del libro pasa a lo concreto: qué hay que comer, qué hay que dejar de comer y qué hay que comprar.",
        },
        {
          forma: "texto",
          texto:
            "Y esa última parte es la que conviene mirar con más atención de todas.",
        },
        {
          forma: "texto",
          texto:
            "Porque es la que tiene precio.",
        },
      ],
    },

    {
      titulo: "El pasillo de los suplementos",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El plan alimentario del libro se resume rápido. Fuera todos los cereales, con o sin gluten. Fuera azúcar, fuera zumos, fuera la mayoría de la fruta, fuera las legumbres y las patatas. Dentro grasas en abundancia, carne, pescado, huevos, verdura de hoja y frutos secos.",
        },
        {
          forma: "texto",
          texto:
            "Y a eso se le añade una lista de suplementos que el libro recomienda tomar a diario: omega-3, cúrcuma, resveratrol, probióticos, aceite de coco, ácido alfa lipoico y vitamina D. La lista aparece con dosis concretas y con su justificación cada una.",
        },
        {
          forma: "clave",
          rotulo: "El conflicto de interés",
          frase: "David Perlmutter comercializa suplementos. Tiene una marca propia y vende productos que corresponden a las categorías que su libro recomienda tomar todos los días. Eso no invalida automáticamente lo que dice y sí obliga a leer las recomendaciones sabiéndolo.",
        },
        {
          forma: "texto",
          texto:
            "Es un patrón que se repite en el género y conviene saber detectarlo. Un libro que diagnostica un problema generalizado, propone una solución que exige comprar productos concretos, y cuyo autor vende esos productos, tiene una estructura comercial que hay que tener en cuenta al leerlo.",
        },
        {
          forma: "texto",
          texto:
            "Sobre los suplementos concretos, la evidencia va de escasa a inexistente para lo que se les pide aquí. La curcumina se absorbe fatal, lleva más de cien ensayos clínicos y no ha dado ni un fármaco aprobado, cosa que ya se cuenta en el resumen de Anticáncer de esta misma biblioteca.",
        },
        {
          forma: "arte",
          texto:
            "El aceite de coco es el caso más claro. No hay ninguna evidencia de que prevenga o mejore el alzhéimer, y sí la hay de que sube el colesterol LDL más que otras grasas. Las asociaciones de cardiología recomiendan limitarlo, no tomarlo a cucharadas.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Con los omega-3 la historia es instructiva. Parecían prometedores para la cognición en estudios observacionales, se hicieron ensayos grandes con suplementos, y los resultados en prevención del deterioro cognitivo han sido en general negativos.",
        },
        {
          forma: "texto",
          texto:
            "Es el patrón habitual: lo que se observa en gente que come pescado no se reproduce dando cápsulas, probablemente porque quien come pescado hace además otras diez cosas distintas. Comer pescado sigue siendo buena idea; el frasco no ha demostrado nada.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, un ejercicio honrado: qué queda de esta dieta si se le quitan las afirmaciones que no se sostienen. Y la respuesta es que queda algo bastante razonable, aunque por motivos completamente distintos de los que da el libro.",
        },
        {
          forma: "texto",
          texto:
            "Quitar azúcar añadido, refrescos, zumos y bollería es una buena idea para cualquiera. Comer más verdura, más pescado y más frutos secos también. Cocinar en casa en vez de comprar ultraprocesados también. Nada de eso necesita ninguna teoría sobre el gluten.",
        },
        {
          forma: "texto",
          texto:
            "Y hay partes que son peores que la dieta de partida. Quitar las legumbres y la mayoría de la fruta no tiene ninguna justificación, elimina fibra y micronutrientes bien documentados, y va en contra de lo que recomiendan todas las guías alimentarias serias.",
        },
        {
          forma: "arte",
          texto:
            "El resumen práctico sería este: si alguien sigue esta dieta y se encuentra mejor, casi seguro que es por lo que ha quitado —ultraprocesados, azúcar, alcohol— y no por lo que el libro dice que ha quitado. La mejoría es real y la explicación es otra.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Lo que la gente cree y no es verdad, uno: que el gluten es malo para todo el mundo. Lo es, y mucho, para el uno por ciento que tiene celiaquía. Para el resto no hay evidencia, y el mejor ensayo hecho para comprobarlo apuntó a otros componentes del trigo.",
        },
        {
          forma: "texto",
          texto:
            "Dos: que el alzhéimer es una diabetes. Es una hipótesis de investigación de 2008, no una categoría médica. La relación entre glucosa alta y riesgo de demencia sí está documentada, y de ahí no se sigue que una persona sana desarrolle alzhéimer por comer pan.",
        },
        {
          forma: "texto",
          texto:
            "Tres: que se puede prevenir el alzhéimer con la dieta. Ninguna dieta lo ha demostrado. Lo que sí tiene respaldo es controlar la tensión y la diabetes, no fumar, moverse, corregir la pérdida de audición y no aislarse socialmente.",
        },
        {
          forma: "texto",
          texto:
            "Cuatro, y es el más peligroso: que las estatinas dañan el cerebro. Los análisis de los ensayos no han encontrado ese efecto, y su beneficio cardiovascular está entre lo mejor demostrado de la medicina moderna. Dejar una estatina indicada por leer un libro es un riesgo real.",
        },
        {
          forma: "texto",
          texto:
            "Y cinco: que un libro con cientos de referencias científicas es un libro riguroso. Las referencias solo demuestran que los estudios existen. Lo que hay que mirar es si la conclusión que se saca de ellos es la que el estudio permite, y aquí muy a menudo no lo es.",
        },
        {
          forma: "texto",
          texto:
            "Si alguien quiere quedarse con algo útil de este libro, hay dos cosas. La primera: si tiene síntomas raros y persistentes —anemia sin explicación, cansancio, problemas de equilibrio— que pida una prueba de celiaquía, y que la pida antes de dejar el gluten.",
        },
        {
          forma: "texto",
          texto:
            "Y la segunda: que la salud metabólica y la del cerebro están conectadas, cosa que hace veinte años no se decía. Cuidar la glucemia y el peso es también cuidar la cabeza, y eso el libro lo divulgó antes de que fuera una idea corriente.",
        },
        {
          forma: "texto",
          texto:
            "El resto es una teoría atractiva construida sobre un cimiento pequeño, vendida con la autoridad de una bata blanca y acompañada de una lista de la compra.",
        },
        {
          forma: "texto",
          texto:
            "Y el mejor consejo que se puede sacar de leerlo no está dentro del libro.",
        },
        {
          forma: "texto",
          texto:
            "Es aprender a mirar el tercer paso: el que va del estudio citado a la recomendación.",
        },
        {
          forma: "texto",
          texto:
            "Ahí es donde se cae casi todo lo que se vende en este estante.",
        },
      ],
    },
  ],
};

export const MILAGRO_METABOLICO: Resumen = {
  id: "milagro-metabolico",
  titulo: "El milagro metabólico",
  autor: "Carlos Jaramillo",
  ano: 2019,
  gancho:
    "Sostiene que el problema no son las calorías sino las hormonas. Acierta en la crítica al modelo viejo y se pasa de frenada al sustituirlo por una sola causa.",
  porQue:
    "Es el libro de salud más vendido en español de los últimos años y tiene una mitad sólida y otra que no se sostiene. Separarlas enseña a leer cualquier libro de nutrición, que es lo más útil que se puede sacar de este estante.",
  partes: [
    {
      titulo: "Una consulta en Bogotá",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "En la consulta entra una mujer de cuarenta y cinco años que ha hecho todo lo que le mandaron durante quince. Contó calorías, comió cinco veces al día, cambió la mantequilla por margarina, se compró los yogures desnatados y salió a caminar cuarenta minutos cada mañana.",
        },
        {
          forma: "texto",
          texto:
            "Y ha ganado catorce kilos en ese periodo. Tiene el colesterol alto, la glucosa en el límite, se levanta cansada y a las once de la mañana necesita comer algo dulce o se le nubla la cabeza. Su médico anterior le dijo que tenía que esforzarse más.",
        },
        {
          forma: "texto",
          texto:
            "Esa escena, con variantes, abre casi todos los libros de este género, y hay que reconocer de entrada que describe algo real. Millones de personas han seguido durante décadas un consejo oficial y han empeorado, y la respuesta que reciben suele ser que no lo siguieron bien.",
        },
        {
          forma: "texto",
          texto:
            "El autor es Carlos Alberto Jaramillo, médico colombiano formado en la Universidad de La Sabana, con estudios de posgrado en medicina funcional en Estados Unidos. Es médico titulado, y eso hay que decirlo igual que hay que decir lo demás.",
        },
        {
          forma: "texto",
          texto:
            "El libro salió en 2019 en Colombia, se convirtió en el más vendido del país y de ahí saltó a toda Hispanoamérica y a España. Tiene continuaciones, recetarios, un canal enorme y una comunidad muy activa, así que sus afirmaciones circulan mucho más allá de sus lectores.",
        },
        {
          forma: "clave",
          rotulo: "La tesis del libro",
          frase: "Que la obesidad y el cansancio crónico no vienen de comer demasiado sino de comer de una manera que mantiene la insulina permanentemente alta. Y que cuando la insulina baja, el cuerpo vuelve a usar su propia grasa como combustible sin que haya que pasar hambre.",
        },
        {
          forma: "texto",
          texto:
            "El adversario declarado es el modelo de las calorías: la idea de que adelgazar consiste en gastar más de lo que se ingiere y que todo lo demás es ruido. Jaramillo sostiene que ese modelo es cierto en física y prácticamente inútil en una consulta.",
        },
        {
          forma: "texto",
          texto:
            "Ese matiz merece detenerse. Nadie discute la termodinámica: si se almacena grasa es porque entra más energía de la que se gasta. Lo que se discute es si contar esa energía sirve para algo, dado que el hambre, la saciedad y el gasto no son cifras que uno decida.",
        },
        {
          forma: "texto",
          texto:
            "La analogía que usan los defensores de este modelo es buena: decir que alguien engorda porque come de más es como decir que una habitación se llena porque entra más gente de la que sale. Es verdad y no explica nada sobre por qué entra tanta.",
        },
        {
          forma: "arte",
          texto:
            "La pregunta útil no es cuánto come alguien, sino qué hace que coma eso. Y ahí sí entran las hormonas, el sueño, el estrés, la composición de la comida y su capacidad de saciar. Ese desplazamiento de la pregunta es lo mejor que aporta el libro.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "El problema empieza cuando esa pregunta buena recibe una respuesta única. Todo el libro gira alrededor de una sola hormona, y prácticamente cualquier síntoma —el cansancio, la niebla mental, el acné, la caída del pelo, el sueño malo— acaba explicado por ella.",
        },
        {
          forma: "texto",
          texto:
            "Un sistema que explica todo con una sola pieza es cómodo y sospechoso, y es exactamente el rasgo que en otros contextos llamaríamos erizo: una idea grande a la que se le acomoda cualquier dato en vez de ponerla a prueba con él.",
        },
        {
          forma: "texto",
          texto:
            "Este resumen va a hacer con el libro lo que el libro pide que se haga con la nutrición oficial: mirar de dónde sale cada afirmación. Y salen tres montones muy distintos, así que conviene separarlos antes de opinar del conjunto.",
        },
        {
          forma: "texto",
          texto:
            "Antes de eso conviene entender qué hace la insulina, porque el libro la trata como una villana y es lo contrario: es la hormona que permite que las células usen la glucosa. Sin ella, la glucosa se queda en la sangre y la persona se muere, que es lo que era la diabetes tipo uno antes de 1922.",
        },
        {
          forma: "texto",
          texto:
            "Sube después de comer, sobre todo con hidratos, y baja entre comidas. Cuando está alta, el cuerpo almacena; cuando está baja, saca de sus reservas. Ese ciclo es normal y necesario, y no hay nada patológico en que la insulina suba tres veces al día.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí es un problema es que esté alta de forma permanente, y ahí el libro señala algo con razón: el consejo de comer cinco o seis veces al día, que se dio durante décadas sin gran respaldo, mantiene el sistema en modo almacenamiento casi todo el rato.",
        },
        {
          forma: "texto",
          texto:
            "El origen de aquel consejo es curioso y vale la pena. La idea de que picar entre horas acelera el metabolismo no salió de ningún ensayo: se popularizó desde el mundo del culturismo y de la industria de las barritas, y los estudios posteriores no encontraron ese efecto.",
        },
        {
          forma: "texto",
          texto:
            "Cuando se ha comparado la misma cantidad de comida repartida en dos o en seis tomas, el gasto energético total no cambia de forma apreciable. Es decir: la frecuencia de las comidas importa por el hambre que produce, no por ninguna aceleración metabólica.",
        },
        {
          forma: "texto",
          texto:
            "Ese es un buen ejemplo del valor del libro. Hay consejos oficiales que se repitieron durante treinta años sin haberse comprobado nunca, y señalar eso es legítimo y necesario. El problema es cuando se usa como licencia para no comprobar los propios.",
        },
        {
          forma: "texto",
          texto:
            "Hay una asimetría en la que conviene fijarse al leer cualquier libro de este género: la evidencia que se exige al adversario es mucho más estricta que la que se exige a uno mismo. Un estudio en ratones basta para lo propio y no basta para lo ajeno.",
        },
        {
          forma: "texto",
          texto:
            "Hay cosas que están bien respaldadas y que casi nadie sabe.",
        },
        {
          forma: "texto",
          texto:
            "Hay una hipótesis discutida que se presenta como hecho.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un tercer bloque que directamente no existe.",
        },
      ],
    },

    {
      titulo: "Lo que sí está respaldado",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Empecemos por lo mejor del libro, que es su ataque a la comida ultraprocesada. Ahí no está solo ni va contra la corriente científica: va exactamente con ella, y con un respaldo que se ha reforzado mucho en los últimos años.",
        },
        {
          forma: "texto",
          texto:
            "La clasificación que se usa hoy la propuso un equipo brasileño dirigido por Carlos Monteiro y se llama NOVA. Ordena los alimentos no por sus nutrientes sino por cuánto se han procesado, y el cuarto grupo son las formulaciones industriales con ingredientes que no hay en una cocina.",
        },
        {
          forma: "texto",
          texto:
            "Ahí entran los refrescos, la bollería, los cereales de desayuno, las salsas, los precocinados, los embutidos reconstituidos y buena parte de lo que se vende como saludable: barritas, yogures de sabores, panes de molde, bebidas vegetales azucaradas.",
        },
        {
          forma: "clave",
          rotulo: "El estudio que lo demostró bien",
          frase: "En 2019, un equipo del Instituto Nacional de Salud estadounidense encerró a veinte personas dos semanas y les dio dieta ultraprocesada o sin procesar, igualadas en calorías, azúcar, grasa, sal y fibra, comiendo lo que quisieran. Con la ultraprocesada comieron unas 500 kilocalorías más al día y engordaron.",
        },
        {
          forma: "texto",
          texto:
            "Ese diseño es lo que lo hace fuerte. Es aleatorizado, cruzado —cada persona pasó por las dos dietas— y con la comida preparada y pesada por el equipo, no declarada por el participante. En nutrición, ese nivel de control es rarísimo.",
        },
        {
          forma: "texto",
          texto:
            "Y su conclusión es exactamente la que sostiene el libro: con los mismos nutrientes sobre el papel, un tipo de comida hace que comas más sin que lo decidas. La composición importa más allá de la aritmética, y aquí está medido.",
        },
        {
          forma: "texto",
          texto:
            "El segundo acierto es el azúcar líquido. Las calorías bebidas no producen prácticamente saciedad: un refresco de trescientos treinta mililitros lleva unos treinta y cinco gramos de azúcar y no reduce en nada lo que se come después, cosa que no ocurre con la misma cantidad en fruta entera.",
        },
        {
          forma: "texto",
          texto:
            "El tercero es la fibra, y es de los puntos donde el consejo tradicional y este libro coinciden del todo. La mayoría de la población está muy por debajo de los veinticinco o treinta gramos diarios recomendados, y la fibra es de lo poco que tiene evidencia consistente para casi todo.",
        },
        {
          forma: "texto",
          texto:
            "El cuarto es la resistencia a la insulina, que existe, se mide y es clínicamente importante. Es la situación en la que las células responden peor a la insulina y el páncreas compensa produciendo más, y precede en años a la diabetes tipo dos.",
        },
        {
          forma: "arte",
          texto:
            "Y ahí el libro señala algo cierto que se hace poco: en una analítica corriente se pide glucosa en ayunas, que se mantiene normal durante años mientras la insulina sube para conseguirlo. Cuando la glucosa se descontrola, el proceso lleva mucho tiempo en marcha.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "El quinto acierto es histórico y desmiente algo que mucha gente cree. Las guías alimentarias que recomendaron bajar la grasa se apoyaron en evidencia mucho más débil de lo que su rotundidad sugería, y se adoptaron en un clima de urgencia política.",
        },
        {
          forma: "texto",
          texto:
            "El efecto secundario está documentado: la industria sustituyó la grasa por azúcar y almidones para que los productos siguieran siendo apetecibles, y el resultado fue una generación de alimentos bajos en grasa y llenos de azúcar vendidos como la opción sana.",
        },
        {
          forma: "texto",
          texto:
            "Sobre esto conviene añadir un matiz que el libro no hace y que es justo: aquellas guías no eran una conspiración. Eran una decisión tomada con datos insuficientes bajo presión de dar alguna recomendación, que es como se toman casi todas las decisiones de salud pública.",
        },
        {
          forma: "texto",
          texto:
            "Hay un sexto punto donde también acierta y que conviene subrayar porque afecta a mucha gente: la importancia de la proteína. Es el macronutriente que más sacia, el que más energía cuesta digerir y el único imprescindible para mantener músculo mientras se pierde peso.",
        },
        {
          forma: "texto",
          texto:
            "Las cantidades que se recomiendan oficialmente —unos ocho décimas de gramo por kilo al día— son un mínimo para no enfermar, no un óptimo. Los estudios de composición corporal apuntan a cifras bastante más altas cuando hay déficit calórico o entrenamiento de fuerza.",
        },
        {
          forma: "texto",
          texto:
            "El séptimo es el sueño, que es de lo mejor documentado de todo el libro y de lo que menos se hace caso. Dormir mal sube la grelina, que da hambre, y baja la leptina, que da saciedad, y en experimentos de restricción de sueño la gente come varios cientos de calorías más al día.",
        },
        {
          forma: "texto",
          texto:
            "El octavo es el efecto del estrés crónico a través del cortisol, y aquí hay que separar dos cosas. Que el estrés sostenido afecta al apetito y a la distribución de grasa está respaldado; que exista una fatiga adrenal medible con un análisis de saliva, no.",
        },
        {
          forma: "texto",
          texto:
            "El noveno acierto es negativo y es de los más útiles: los productos etiquetados como light, sin azúcar o fitness suelen ser peores que su versión normal. Al quitar grasa o azúcar hay que compensar con almidones, edulcorantes y aditivos para que el producto siga siendo comestible.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un efecto psicológico medido encima: la etiqueta saludable hace que la gente coma más cantidad y que subestime lo que ha comido. A eso se le llama efecto de aureola, y es de los pocos hallazgos de psicología del consumo que se replican bien.",
        },
        {
          forma: "texto",
          texto:
            "Merece la pena leer este bloque junto a Come comida real, de Carlos Ríos, que está en esta biblioteca y que llega exactamente a las mismas conclusiones prácticas sin apoyarse en ninguna teoría hormonal. Que dos caminos distintos den lo mismo es buena señal para el consejo.",
        },
        {
          forma: "texto",
          texto:
            "Y junto a El dilema del omnívoro, de Michael Pollan, que explica por qué la comida industrial es como es siguiendo el maíz desde el campo hasta el refresco. Aquello es periodismo de sistema; esto es fisiología. Se complementan bastante bien.",
        },
        {
          forma: "texto",
          texto:
            "Todo este bloque es defendible y está bien contado.",
        },
        {
          forma: "texto",
          texto:
            "El problema es el paso siguiente.",
        },
      ],
    },

    {
      titulo: "La hipótesis de la insulina",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La idea que sostiene el libro tiene nombre en la literatura científica: modelo carbohidrato-insulina de la obesidad. No es una ocurrencia de divulgador; la defienden investigadores serios como David Ludwig, de Harvard, y ha generado ensayos diseñados para ponerla a prueba.",
        },
        {
          forma: "texto",
          texto:
            "El mecanismo que propone es este: los hidratos de carbono elevan la insulina; la insulina ordena a las células grasas almacenar y les impide soltar; con la energía secuestrada dentro de la grasa, el resto del cuerpo pasa hambre y uno come más y se mueve menos.",
        },
        {
          forma: "texto",
          texto:
            "Es una historia coherente, con una fisiología reconocible, y tiene una consecuencia que la hace comprobable: si es cierta, dos dietas con las mismas calorías pero distinto reparto de hidratos deberían producir pérdidas de grasa distintas. Eso se puede medir.",
        },
        {
          forma: "texto",
          texto:
            "Se midió. En 2016, el mismo equipo del Instituto Nacional de Salud metió a diecisiete hombres con sobrepeso en una sala metabólica durante ocho semanas, controlando cada gramo que entraba y midiendo cada gramo que salía, y les cambió la dieta a mitad del periodo.",
        },
        {
          forma: "clave",
          rotulo: "El resultado del experimento",
          frase: "Con las mismas calorías, la dieta baja en hidratos redujo la insulina, como predecía la teoría, y no produjo más pérdida de grasa. La produjo ligeramente menor que la dieta baja en grasa. La versión fuerte del modelo predecía lo contrario y falló.",
        },
        {
          forma: "texto",
          texto:
            "El segundo golpe llegó en 2018 con un ensayo de Stanford dirigido por Christopher Gardner, llamado DIETFITS. Seiscientas nueve personas, doce meses, asignadas al azar a una dieta baja en grasa o baja en hidratos, ambas con comida real y sin contar calorías.",
        },
        {
          forma: "texto",
          texto:
            "Resultado: los dos grupos perdieron alrededor de cinco o seis kilos de media, sin diferencia significativa entre ellos. Y con una variabilidad enorme dentro de cada grupo, con gente que perdió treinta kilos y gente que ganó peso en la misma dieta.",
        },
        {
          forma: "texto",
          texto:
            "El detalle que remata el asunto es el que menos se cuenta. El estudio había registrado por adelantado la hipótesis de que quienes secretan más insulina responderían mejor a la dieta baja en hidratos. No ocurrió: la secreción de insulina no predijo nada.",
        },
        {
          forma: "texto",
          texto:
            "Es decir: la prueba diseñada específicamente para confirmar el mecanismo del libro, hecha por un investigador que simpatizaba con él y registrada antes de mirar los datos, dio negativo. Eso es lo más parecido a una refutación limpia que hay en nutrición.",
        },
        {
          forma: "arte",
          texto:
            "Conviene ser justo: Ludwig y sus colegas han discutido esas interpretaciones, señalando que los periodos son cortos para un modelo que habla de años y que la adherencia declarada no coincide con la real. La discusión sigue viva y no está cerrada por ninguna de las partes.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí se puede afirmar con tranquilidad es esto: como mecanismo obligatorio, el modelo no ha superado las pruebas; como consejo práctico, reducir hidratos refinados funciona en mucha gente. Las dos cosas son compatibles y el libro solo cuenta la segunda.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una explicación sencilla de por qué funciona en la práctica sin que el mecanismo sea el que dice: las dietas bajas en hidratos suelen tener más proteína y más volumen, sacian más, y al eliminar categorías enteras de alimentos reducen la ingesta espontánea.",
        },
        {
          forma: "texto",
          texto:
            "Esa explicación es menos vistosa y encaja con todos los datos, incluidos los que contradicen al modelo hormonal. Es también la razón de que casi cualquier dieta funcione durante seis meses y casi ninguna a cinco años.",
        },
        {
          forma: "texto",
          texto:
            "En esta biblioteca hay un libro que defiende la misma tesis con más aparato: El código de la obesidad, de Jason Fung, que llega a las mismas conclusiones prácticas y comparte los mismos problemas de mecanismo.",
        },
        {
          forma: "texto",
          texto:
            "Hay además un dato incómodo para cualquier modelo de causa única, y es la variabilidad. En el ensayo de Stanford, dentro de cada grupo hubo personas que perdieron treinta kilos y personas que ganaron peso siguiendo exactamente el mismo protocolo durante un año.",
        },
        {
          forma: "texto",
          texto:
            "Esa dispersión es mucho mayor que la diferencia entre las dos dietas, y es el resultado que más se olvida al citar estos estudios. Significa que la pregunta de qué dieta es mejor está mal planteada: la variación relevante está entre personas, no entre dietas.",
        },
        {
          forma: "texto",
          texto:
            "El otro elefante es la adherencia. En casi todos los ensayos largos, los dos grupos convergen hacia la misma dieta con el paso de los meses, porque la gente abandona las restricciones. Lo que se mide al año no son dos dietas, son dos intenciones.",
        },
        {
          forma: "texto",
          texto:
            "De ahí sale la conclusión más útil de toda esta literatura y la que menos se vende: la mejor dieta es la que uno puede sostener durante años, y eso depende de la cultura, el horario, el presupuesto y con quién se come, no de la fisiología.",
        },
        {
          forma: "texto",
          texto:
            "Hay una parte de la teoría del libro que sí ha ganado apoyo y conviene reconocerla: el peso perdido se defiende. Cuando alguien adelgaza, su gasto en reposo baja más de lo que corresponde a su nuevo tamaño y el hambre sube, y eso puede durar años.",
        },
        {
          forma: "texto",
          texto:
            "El estudio que lo documentó mejor siguió a los concursantes de un programa de televisión de pérdida de peso extrema durante seis años, y encontró que su metabolismo seguía deprimido y que la mayoría había recuperado casi todo el peso perdido.",
        },
        {
          forma: "texto",
          texto:
            "Ese hallazgo es demoledor para el consejo simple de comer menos y moverse más, y da la razón al libro en su crítica aunque no en su explicación. El cuerpo defiende su peso con mecanismos que no dependen de la voluntad.",
        },
        {
          forma: "texto",
          texto:
            "Con la teoría situada, quedan las herramientas.",
        },
        {
          forma: "texto",
          texto:
            "Y la principal es el ayuno.",
        },
      ],
    },

    {
      titulo: "El ayuno y el resto del botiquín",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La herramienta estrella del libro es el ayuno intermitente, y en su versión más difundida consiste en comer dentro de una ventana de ocho horas y no comer nada durante las dieciséis restantes. Se le suele llamar dieciséis-ocho y en la práctica significa saltarse el desayuno.",
        },
        {
          forma: "texto",
          texto:
            "La promesa es doble: que al no picar entre horas la insulina baja durante periodos largos, y que el cuerpo entra en un estado distinto en el que quema grasa y activa mecanismos de reparación celular. La segunda parte se apoya en algo real llamado autofagia.",
        },
        {
          forma: "texto",
          texto:
            "La autofagia existe, es el proceso por el que la célula recicla sus propios componentes dañados, y su descubridor, Yoshinori Ohsumi, ganó el Nobel de Medicina en 2016. Lo que está mucho menos establecido es en qué medida un ayuno de dieciséis horas la activa en humanos.",
        },
        {
          forma: "texto",
          texto:
            "La mayor parte de esa investigación está hecha en levaduras y en ratones, con ayunos proporcionalmente mucho más largos, y midiendo marcadores en tejidos a los que no se accede en una persona viva. Extrapolar de ahí a saltarse el desayuno es un salto grande.",
        },
        {
          forma: "clave",
          rotulo: "Lo que dicen los ensayos en personas",
          frase: "En 2020, un ensayo de la Universidad de California con 116 personas comparó comer en ventana de ocho horas con tres comidas al día: la diferencia de peso fue mínima y no significativa, y en el grupo de ayuno hubo indicios de pérdida de masa magra.",
        },
        {
          forma: "texto",
          texto:
            "Y en 2022 se publicó un ensayo chino de doce meses con ciento treinta y nueve personas que comparó la ventana horaria con la restricción de calorías corriente. Los dos grupos perdieron peso de forma parecida y no hubo diferencia entre ellos.",
        },
        {
          forma: "texto",
          texto:
            "La conclusión razonable no es que el ayuno no sirva, sino algo más modesto y más útil: sirve exactamente en la medida en que hace que uno coma menos, y es una herramienta entre varias, no un interruptor metabólico. A quien le encaja, le funciona; a quien no, no.",
        },
        {
          forma: "texto",
          texto:
            "Hay además un aviso de seguridad que el libro no da con la contundencia necesaria y que puede tener consecuencias graves. Una persona con diabetes tipo dos tratada con insulina o con sulfonilureas que empieza a ayunar sin ajustar la medicación puede sufrir una hipoglucemia seria.",
        },
        {
          forma: "texto",
          texto:
            "Eso no es un riesgo teórico: es la razón por la que cualquier protocolo de ayuno en pacientes diabéticos exige supervisión y ajuste de dosis. Y es justo el tipo de lector que un libro así atrae, porque es quien más motivado está para probarlo.",
        },
        {
          forma: "texto",
          texto:
            "Ahora, el tercer montón: lo que no se sostiene. El primero es la desintoxicación. La idea de limpiar el hígado con zumos, protocolos o suplementos no tiene base: el hígado y los riñones hacen ese trabajo continuamente y no existe evidencia de que ningún régimen mejore su función.",
        },
        {
          forma: "arte",
          texto:
            "La palabra detox no tiene una definición clínica. Un análisis de productos que la usaban encontró que ninguno de sus fabricantes fue capaz de decir de qué toxina hablaba ni cómo medían haberla eliminado. Es un término de marketing, no de fisiología.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "El segundo es la fatiga adrenal, un diagnóstico que aparece en este género y que no existe en ninguna clasificación médica. Una revisión sistemática de 2016 examinó cincuenta y ocho estudios y concluyó que no hay ninguna prueba que respalde su existencia como entidad.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí existe es la insuficiencia suprarrenal, que es una enfermedad grave, poco frecuente y con criterios diagnósticos claros. Confundir las dos cosas lleva a que gente con cansancio por sueño malo, anemia, depresión o hipotiroidismo real acabe tomando suplementos.",
        },
        {
          forma: "texto",
          texto:
            "El tercero es el bloque de suplementos y de pruebas. Los paneles amplios de intolerancias alimentarias por inmunoglobulina G, que se recetan mucho en este entorno, están explícitamente desaconsejados por las sociedades de alergología: miden exposición, no intolerancia.",
        },
        {
          forma: "texto",
          texto:
            "Lo que esos análisis detectan es que el sistema inmunitario reconoce un alimento que se come con frecuencia, que es lo normal y lo esperable. El resultado típico marca en rojo el trigo, la leche y el huevo de casi cualquier persona, y de ahí salen dietas restrictivas sin motivo.",
        },
        {
          forma: "texto",
          texto:
            "El cuarto punto flojo es el tono de certeza. El libro afirma con la misma seguridad cosas muy bien establecidas y cosas que son hipótesis en discusión, y el lector no tiene manera de distinguirlas porque no hay ninguna marca en el texto que las separe.",
        },
        {
          forma: "texto",
          texto:
            "Un divulgador honrado escribe está demostrado, hay indicios de y creo que, y usa las tres expresiones donde toca. Cuando todo se dice en el mismo registro, la parte sólida presta credibilidad a la parte inventada, que es la operación central de este género.",
        },
        {
          forma: "texto",
          texto:
            "El quinto es la ausencia de números. Casi ninguna afirmación viene con una magnitud: se dice que algo mejora, no cuánto ni en cuánta gente. Y la diferencia entre un efecto del dos por ciento y uno del cuarenta por ciento es la diferencia entre una anécdota y un tratamiento.",
        },
        {
          forma: "texto",
          texto:
            "Hay que decir también qué tiene de valioso el ayuno más allá del peso, porque algo tiene. Para mucha gente, dejar de picar entre horas simplifica la vida: menos decisiones, menos comidas que preparar y una regla clara en vez de un cálculo permanente.",
        },
        {
          forma: "texto",
          texto:
            "Y hay señales de mejora en marcadores de sensibilidad a la insulina en algunos ensayos, sobre todo cuando la ventana de comida se coloca temprano en el día en vez de tarde. Ese matiz horario, que el libro no subraya, es de lo más prometedor del campo.",
        },
        {
          forma: "texto",
          texto:
            "Conviene añadir para quién no es buena idea: embarazadas, personas con antecedentes de trastorno de la conducta alimentaria, adolescentes, y quien tenga bajo peso. En el primer y el segundo caso, el riesgo no es teórico y está documentado.",
        },
        {
          forma: "texto",
          texto:
            "Con los tres montones separados, queda lo más útil.",
        },
        {
          forma: "texto",
          texto:
            "Que no es una dieta sino un método de lectura.",
        },
      ],
    },

    {
      titulo: "Cómo se lee un libro de salud",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El patrón que se repite en este género está descrito en esta misma biblioteca, en el resumen de Cerebro de pan, y tiene tres pasos. Se cita un estudio real. Se describe correctamente. Y se saca de él una recomendación que el estudio no sostiene.",
        },
        {
          forma: "texto",
          texto:
            "Lo que hace tan eficaz ese mecanismo es que las dos primeras partes son verdad, y son las que el lector puede comprobar. Nadie va a leerse el artículo original; con ver que existe y que dice lo que se dice, la conclusión se acepta entera.",
        },
        {
          forma: "texto",
          texto:
            "Así que la primera pregunta útil no es si el estudio existe, sino en quién se hizo. Si fue en ratones, en células o en levaduras, la afirmación sobre humanos es una conjetura. La mayor parte de la biología llamativa de estos libros viene de ahí.",
        },
        {
          forma: "clave",
          rotulo: "Las cinco preguntas",
          frase: "¿En humanos o en animales? ¿Cuántas personas? ¿Cuánto tiempo? ¿Se asignó al azar quién hacía qué? Y la más importante: ¿lo que midieron es lo que me importa, o es un marcador intermedio que se supone que lo predice?",
        },
        {
          forma: "texto",
          texto:
            "Esa última pregunta es la que más discrimina. Bajar la insulina, mejorar un marcador de inflamación o subir la autofagia son resultados intermedios; perder grasa, no desarrollar diabetes o vivir más son resultados finales. La historia de la medicina está llena de intermedios que no llevaron a ninguna parte.",
        },
        {
          forma: "texto",
          texto:
            "El caso clásico es de cardiología: unos fármacos antiarrítmicos corregían muy bien las extrasístoles después de un infarto, que era el marcador. Cuando por fin se midió la mortalidad, en un ensayo de finales de los ochenta, resultó que aumentaban las muertes.",
        },
        {
          forma: "texto",
          texto:
            "La segunda herramienta es distinguir un mecanismo de un resultado. Un mecanismo explica por qué debería funcionar algo y suena convincente porque encaja; un resultado dice si funcionó. Los mecanismos plausibles que no producen resultados son la norma, no la excepción.",
        },
        {
          forma: "texto",
          texto:
            "La tercera es preguntarse qué haría falta para que el autor cambiara de opinión. Si de un libro entero no se puede extraer ni un solo resultado posible que lo refutaría, no es un argumento sobre el mundo: es una descripción de lo que su autor ya creía.",
        },
        {
          forma: "texto",
          texto:
            "Conviene decir también qué es la medicina funcional, que es el marco desde el que escribe Jaramillo, porque el lector suele no saberlo. No es una especialidad médica reconocida ni tiene una vía de formación oficial: es un enfoque con certificaciones privadas.",
        },
        {
          forma: "texto",
          texto:
            "Dentro caben cosas muy distintas. Hay médicos que simplemente dedican más tiempo a la alimentación, al sueño y al estrés, que es exactamente lo que a la medicina convencional le falta. Y hay quien vende pruebas sin validar y suplementos con margen propio.",
        },
        {
          forma: "arte",
          texto:
            "La diferencia entre las dos cosas se detecta con una pregunta sencilla: si el profesional gana dinero con las pruebas que pide o con los productos que recomienda, hay un conflicto de interés que en cualquier otra consulta habría que declarar.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Queda decir qué hacer, y es aburridísimo. Lo que tiene mejor evidencia no es ningún protocolo: es comer sobre todo comida sin envoltorio, con verdura, legumbre, fruta entera, proteína suficiente y poca bebida azucarada y poco alcohol.",
        },
        {
          forma: "texto",
          texto:
            "Añadir entrenamiento de fuerza dos o tres veces por semana, que es lo que más protege la masa muscular y la función a partir de los cuarenta; caminar bastante; y dormir siete u ocho horas, que es lo que peor se cumple y de lo que más depende el apetito del día siguiente.",
        },
        {
          forma: "texto",
          texto:
            "Nada de eso vende libros, porque no tiene enemigo, ni descubrimiento, ni promesa de milagro. Y es la parte en la que este libro y sus críticos coinciden casi por completo, lo cual dice algo sobre dónde está de verdad la discusión.",
        },
        {
          forma: "texto",
          texto:
            "En esta biblioteca hay tres libros para leerlo al lado: El código de la obesidad, que defiende la misma tesis; Come comida real, que llega a las mismas conclusiones prácticas sin la teoría hormonal; y Cerebro de pan, que enseña el mismo patrón de argumentación fallando peor.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un cuarto, Outlive, de Peter Attia, que hace lo contrario que este: se apoya en el mismo tipo de medicina personalizada y es escrupuloso al señalar qué está probado, qué es probable y qué es su apuesta personal. Comparar los dos enseña cuánto se gana con esa disciplina.",
        },
        {
          forma: "texto",
          texto:
            "Queda decir por qué libros así son tan populares, porque la respuesta no es que la gente sea crédula. Es que responden a una experiencia real: mucha gente ha seguido el consejo oficial durante años, ha empeorado, y no ha recibido ninguna explicación ni disculpa.",
        },
        {
          forma: "texto",
          texto:
            "Frente a eso, la medicina convencional ofrece consultas de siete minutos y una recomendación genérica; y estos libros ofrecen tiempo, una explicación completa y un plan. Que la explicación sea parcialmente falsa importa menos de lo que a los críticos les gustaría.",
        },
        {
          forma: "texto",
          texto:
            "La conclusión razonable para un lector no es tirar el libro ni comprarlo entero. Es quedarse con su parte de comida real, su crítica al picoteo y su insistencia en el sueño y el estrés, y descartar la teoría de la causa única, los detox y los análisis de intolerancias.",
        },
        {
          forma: "texto",
          texto:
            "Y llevarse las cinco preguntas, que valen para el siguiente libro de este estante y para el de después.",
        },
        {
          forma: "texto",
          texto:
            "Y queda una advertencia final que sirve para todo el estante.",
        },
        {
          forma: "texto",
          texto:
            "Un libro que explica todos tus síntomas con una sola causa te está halagando.",
        },
      ],
    },
  ],
};

export const PODER_METABOLISMO: Resumen = {
  id: "poder-metabolismo",
  titulo: "El poder del metabolismo",
  autor: "Frank Suárez",
  ano: 2006,
  gancho:
    "El libro de salud más vendido en español lo escribió alguien sin ninguna titulación sanitaria, que vendía los suplementos que recomendaba. Y aun así acertó en la cosa que la medicina tardó otros diez años en admitir.",
  porQue:
    "Porque separar en este libro lo que funciona de lo que está inventado es el mejor ejercicio de lectura crítica que se puede hacer en salud. Y porque millones de personas en español lo usaron: merecen que alguien haga esa separación en serio, sin reírse de ellas.",
  partes: [
    {
      titulo: "Un hombre de ciento treinta kilos con una libreta",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Puerto Rico, mediados de los noventa. Un vendedor de unos cuarenta y cinco años pesa alrededor de ciento treinta kilos, ronca de noche, se levanta agotado y ha hecho todas las dietas que existían en la isla. Las hizo bien. Perdió peso en todas y lo recuperó en todas.",
        },
        {
          forma: "texto",
          texto:
            "Se llamaba Frank Suárez y no tenía ninguna formación sanitaria. Ni medicina, ni nutrición, ni biología, ni enfermería. Lo dice él mismo en la primera página de su libro, y no como disculpa: como argumento. Yo no soy médico, viene a decir, yo era el gordo.",
        },
        {
          forma: "texto",
          texto:
            "Lo que hizo fue lo que hace un vendedor: llevar registro. Empezó a anotar qué comía, qué le pasaba después, cuánto dormía y cuánta agua bebía, y a probar cosas sobre sí mismo durante meses. Perdió unos cuarenta kilos y esta vez no los recuperó.",
        },
        {
          forma: "arte",
          texto:
            "En 1998 montó una empresa de asesoría para adelgazar en San Juan. No era una consulta médica: eran consultores que atendían por teléfono, seguían al cliente semana a semana y le vendían suplementos. Ese detalle —que vendía lo que recomendaba— hay que tenerlo presente todo el rato.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "El libro llegó en 2006 y se convirtió en un fenómeno que la prensa sanitaria en español tardó años en mirar. Ha vendido más de un millón de ejemplares, y su canal de vídeo llegó a superar los cinco millones de suscriptores: uno de los mayores de salud en nuestro idioma.",
        },
        {
          forma: "texto",
          texto:
            "Conviene entender por qué funcionó tan bien, porque no fue por la ciencia. Fue por el tono. Está escrito en un español llano y caribeño, sin una sola palabra técnica sin explicar, dirigido a alguien que ha fracasado seis veces y a quien todo el mundo ha dicho que le falta voluntad.",
        },
        {
          forma: "texto",
          texto:
            "Y ahí Suárez hace algo que la consulta rara vez hacía en 2006: quitarle la culpa al paciente. Si has hecho todo lo que te dijeron y no funcionó, dice, el problema no es tu carácter, es que te dieron instrucciones equivocadas. Esa frase vende un millón de libros, y además tiene parte de razón.",
        },
        {
          forma: "clave",
          rotulo: "Por qué caló",
          frase: "No prometía disciplina, prometía inocencia. A quien lleva veinte años creyéndose culpable de su propio cuerpo, eso le suena a diagnóstico y le suena a alivio.",
        },
        {
          forma: "texto",
          texto:
            "Hay un rasgo del libro que sorprende a cualquiera que lo abra por primera vez. Antes de empezar te pide que busques en el diccionario cualquier palabra que no entiendas del todo, y avisa de que si sigues leyendo con una palabra mal entendida no vas a comprender nada de lo que viene después.",
        },
        {
          forma: "texto",
          texto:
            "Esa instrucción no es un capricho de estilo: es una técnica de estudio concreta, la del aclarado de palabras, procedente del método de la cienciología, movimiento con el que a Suárez se le relacionó repetidamente. Saberlo no hace más ciertas ni más falsas sus afirmaciones sobre comida, pero explica la forma del libro.",
        },
        {
          forma: "texto",
          texto:
            "Y explica también su estructura de capítulos cortos y repetitivos, con la misma idea vuelta a decir de cinco maneras. Es un libro construido para que no se abandone a la mitad, y en eso es sinceramente eficaz, más que muchos manuales escritos por gente que sí sabía del tema.",
        },
        {
          forma: "texto",
          texto:
            "La tesis central cabe en una frase: no engordas por comer mucho, engordas porque tu metabolismo está lento, y el metabolismo se puede subir. Todo el libro es un catálogo de cosas que según él lo bajan y cosas que según él lo suben.",
        },
        {
          forma: "texto",
          texto:
            "Empecemos por lo que hay de verdad ahí debajo, porque hay algo. El metabolismo basal —lo que gastas en reposo— no es una constante: varía con la masa muscular, con la edad, con las hormonas tiroideas, con el sueño y con lo que hayas hecho con tu peso en los últimos años.",
        },
        {
          forma: "arte",
          texto:
            "Y también es verdad que la fórmula oficial de aquellos años —come menos y muévete más— fracasaba en la inmensa mayoría de la gente que la aplicaba. Suárez no inventó ese fracaso: lo señaló diez años antes de que la literatura médica dejara de tratarlo como un problema de obediencia.",
          arte: "mapa",
        },
        {
          forma: "texto",
          texto:
            "Lo que viene después de esa observación correcta es donde el libro se separa en dos mitades muy distintas. Una mitad es un plan alimentario sensato y bastante aburrido. La otra es una teoría inventada con supuestos tipos de sistema nervioso, hongos y suplementos que se venden en su propia tienda.",
        },
        {
          forma: "texto",
          texto:
            "Este resumen va a hacer esa separación con cuidado, porque el desprecio no sirve de nada aquí. Mucha gente adelgazó siguiendo este libro y le mejoraron los análisis. Explicarles que su libro tiene errores exige empezar reconociendo por qué les funcionó.",
        },
        {
          forma: "texto",
          texto:
            "Y exige también decir de dónde salen las afirmaciones. El libro no tiene bibliografía comprobable: no hay referencias a estudios, ni notas, ni citas de revistas. Las pruebas que ofrece son los casos de sus propios clientes, contados por él, sin grupo de comparación.",
        },
        {
          forma: "texto",
          texto:
            "Eso no significa automáticamente que sea falso, pero sí que no hay manera de comprobarlo, y en salud esa distinción lo es todo. Un consejo sin fuente puede ser correcto por casualidad, y el lector no tiene forma de saber en cuál de los dos casos está.",
        },
        {
          forma: "texto",
          texto:
            "Frank Suárez murió a finales de 2021, a los setenta y un años, por un traumatismo tras una caída en su casa de Puerto Rico. Para entonces llevaba más de dos décadas siendo, para millones de hispanohablantes, la primera y a veces la única explicación que habían oído sobre cómo funciona su propio cuerpo.",
        },
        {
          forma: "texto",
          texto:
            "Esa es la razón de que valga la pena hacer esto bien. No se trata de ganar una discusión contra un muerto. Se trata de que quien tenga el libro en casa sepa qué páginas puede seguir usando y qué páginas le pueden hacer daño de verdad.",
        },
        {
          forma: "texto",
          texto:
            "Porque hay páginas de las dos clases, y no están señaladas.",
        },
        {
          forma: "texto",
          texto:
            "El hombre de la libreta acertó en su diagnóstico.",
        },
        {
          forma: "texto",
          texto:
            "Se equivocó en casi todos los mecanismos.",
        },
        {
          forma: "texto",
          texto:
            "Y el negocio que montó encima complica juzgar dónde acaba una cosa y empieza la otra.",
        },
      ],
    },
    {
      titulo: "Dos tipos de sistema nervioso que no existen",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La idea más original del libro, y también la más inventada, es que cada persona pertenece a uno de dos grupos según su sistema nervioso: el excitado y el pasivo. De ahí se deduce, según Suárez, qué debe comer cada uno para adelgazar.",
        },
        {
          forma: "texto",
          texto:
            "El excitado, dice, duerme mal, se estresa fácil, tiene la digestión rápida y adelgaza comiendo más verdura y menos carne. El pasivo duerme como un tronco, se levanta arrastrando los pies, tiene la digestión lenta y necesita justo lo contrario: más proteína animal y menos ensalada.",
        },
        {
          forma: "texto",
          texto:
            "El libro incluye un cuestionario para que averigües cuál eres, con preguntas sobre si te despiertas de noche, si te cae bien el café o si te sientan mal las carnes rojas. Es un test de personalidad con formato de diagnóstico, y esa mezcla es exactamente lo que lo hace convincente.",
        },
        {
          forma: "arte",
          texto:
            "Ahora la parte incómoda: esa clasificación no existe en fisiología. El sistema nervioso autónomo tiene una rama simpática y una parasimpática, y las dos funcionan en todo el mundo a la vez, alternándose según lo que estés haciendo. No hay personas de una rama y personas de la otra.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Hay variación individual real en el tono autónomo, se mide y tiene consecuencias, sobre todo cardiovasculares. Lo que no existe es un tipo estable de persona que determine qué proporción de proteína le hace adelgazar. Eso no está en ningún manual de fisiología ni en ningún estudio.",
        },
        {
          forma: "texto",
          texto:
            "Conviene entender por qué el sistema parece funcionar aunque la teoría sea falsa. Las dos dietas que propone —más verdura o más proteína— son las dos mejores que la evidencia soporta para saciar y para reducir calorías sin pasar hambre. Cualquiera de las dos ayuda, te toque el grupo que te toque.",
        },
        {
          forma: "texto",
          texto:
            "Ese es un patrón que se repite en todo el libro y que merece la pena aprender, porque sirve para cualquier otro. Un consejo puede funcionar por un motivo distinto del que da quien lo da, y entonces el éxito del consejo no prueba nada sobre la teoría.",
        },
        {
          forma: "clave",
          rotulo: "La trampa lógica",
          frase: "Que un remedio funcione no demuestra que la explicación sea cierta. Comprobar el remedio es fácil; comprobar la explicación es lo que casi nadie hace.",
        },
        {
          forma: "texto",
          texto:
            "La segunda pieza teórica es el hongo. Suárez sostiene que la candida albicans, un hongo que efectivamente vive en el intestino de casi todo el mundo, se multiplica con el azúcar, genera antojos, inflama y bloquea el adelgazamiento, y que hay que hacer una limpieza para eliminarlo.",
        },
        {
          forma: "texto",
          texto:
            "Es una idea muy antigua en el mundo de la salud alternativa y tiene nombre propio: síndrome de hipersensibilidad a la candida. La Academia Americana de Alergia e Inmunología lo revisó y publicó en 1986 una posición formal declarándolo especulativo y no demostrado. Cuarenta años después sigue igual.",
        },
        {
          forma: "texto",
          texto:
            "Ojo con no pasarse en la otra dirección, que también hay quien lo hace. La candidiasis existe y es seria: la candidiasis oral, la vaginal y sobre todo la invasiva en personas con la inmunidad comprometida, que es una infección grave. Lo que no existe es la candidiasis crónica que engorda a gente sana.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un mecanismo mucho más sencillo para lo que Suárez observaba. Cuando alguien deja de golpe el azúcar y la harina, los antojos desaparecen a los pocos días. Eso pasa por la comida que quitó, no por ningún hongo, y el resultado que él atribuía a la limpieza lo produce la dieta sola.",
        },
        {
          forma: "texto",
          texto:
            "Porque cualquier dieta anticandida es, mirada de cerca, una dieta sin azúcar, sin harina refinada, sin alcohol y sin ultraprocesados. Quítale el hongo y sigue siendo una buena dieta. El hongo no está haciendo nada salvo darle a la restricción una historia que el paciente pueda contar.",
        },
        {
          forma: "texto",
          texto:
            "La tercera pieza es la tiroides, y aquí la cosa se pone delicada porque mezcla algo verdadero con algo peligroso. Lo verdadero: el hipotiroidismo existe, afecta al peso y a la energía, es más frecuente en mujeres y se diagnostica menos de lo que se debería.",
        },
        {
          forma: "texto",
          texto:
            "Lo problemático es cómo propone detectarlo: tomarse la temperatura al despertar, antes de moverse de la cama, y concluir que si está por debajo de treinta y seis grados y medio tienes la tiroides lenta. Ese método existe, se llama prueba de Barnes y se propuso en los años setenta.",
        },
        {
          forma: "texto",
          texto:
            "Y no vale. La temperatura basal depende del ciclo menstrual, del sueño, de la hora, de la habitación y del termómetro, y no muestra una relación fiable con la función tiroidea. El hipotiroidismo se diagnostica midiendo la hormona estimulante del tiroides en sangre, y cuesta lo que cuesta un análisis.",
        },
        {
          forma: "arte",
          texto:
            "El daño de esa recomendación es doble y va en las dos direcciones. Alguien con hipotiroidismo real puede quedarse con una temperatura normal y no ir al médico. Y alguien sano puede convencerse de que tiene la tiroides averiada y empezar a tomar yodo por su cuenta, que es lo que viene después en el libro.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Ese punto merece una advertencia sin adornos, porque es de las pocas cosas de este libro que pueden mandar a alguien al hospital. El yodo en exceso no es inocuo: puede provocar tanto hipotiroidismo como hipertiroidismo, y es especialmente arriesgado en personas con tiroiditis autoinmune, que son muchísimas y no lo saben.",
        },
        {
          forma: "texto",
          texto:
            "La cuarta pieza es la soja, que según él daña la tiroides y hay que evitar. El grano de verdad es que las isoflavonas de la soja pueden interferir con la enzima que fabrica hormona tiroidea, y eso se ha visto sobre todo en situaciones de falta de yodo.",
        },
        {
          forma: "texto",
          texto:
            "Pero una revisión sistemática de 2019 que reunió dieciocho estudios concluyó que en personas con la tiroides sana la soja no altera las hormonas tiroideas; como mucho sube ligeramente la hormona estimulante, sin significado clínico. Un consejo razonable para una minoría convertido en prohibición general.",
        },
        {
          forma: "texto",
          texto:
            "Y ese es, en resumen, el método teórico del libro. Coge un fenómeno real —hipotiroidismo, candida, isoflavonas—, lo saca de su contexto clínico, lo convierte en la explicación universal de por qué no adelgazas, y le pone al final un producto.",
        },
        {
          forma: "texto",
          texto:
            "Ninguna de las tres cosas es un invento completo.",
        },
        {
          forma: "texto",
          texto:
            "Las tres están estiradas hasta que no aguantan.",
        },
        {
          forma: "texto",
          texto:
            "Y todas terminan en el mismo sitio, que es el capítulo cuarto de este resumen.",
        },
      ],
    },
    {
      titulo: "El plato partido en dos tercios",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Ahora la parte buena, que existe y ocupa más páginas de lo que sus críticos suelen reconocer. Suárez divide toda la comida en dos grupos con nombres que cualquiera recuerda: alimentos tipo A, de adelgazar, y alimentos tipo E, de engordar.",
        },
        {
          forma: "texto",
          texto:
            "En el grupo E van el azúcar, la harina, el pan, la pasta, el arroz, la patata, el plátano y todo lo dulce. En el grupo A van la carne, el pescado, los huevos, el queso, las verduras que no son féculas, las ensaladas, los frutos secos y las grasas.",
        },
        {
          forma: "texto",
          texto:
            "Y la regla es visual, que es lo importante: divides el plato en tres partes y llenas dos con alimentos A y una con alimentos E. Eso es la dieta dos por uno. Cuando ya has llegado a tu peso, pasas a tres por dos, que es un poco más permisiva.",
        },
        {
          forma: "arte",
          texto:
            "Fíjate en lo que no hay que hacer aquí: no hay que contar calorías, ni pesar comida, ni apuntar nada, ni saber leer una etiqueta. Se mira el plato y se estima a ojo. Para alguien que ha abandonado cuatro dietas por aburrimiento, esa sencillez no es un detalle menor.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "¿Funciona? Sí, y por razones que no tienen nada que ver con el metabolismo lento. Sustituir un tercio de tu plato de arroz por pollo y ensalada reduce las calorías de esa comida, aumenta la proteína y la fibra, y te deja lleno más tiempo. Es aritmética de plato, no bioquímica.",
        },
        {
          forma: "texto",
          texto:
            "La proteína es la parte más sólida de todo el sistema. Es el macronutriente que más sacia por caloría, el que más energía cuesta digerir y el que mejor protege la masa muscular mientras se pierde peso, que es justo lo que hay que proteger para que el gasto no se hunda.",
        },
        {
          forma: "texto",
          texto:
            "El segundo pilar es el agua, con una regla igual de simple: una cantidad diaria proporcional a tu peso. La evidencia de que beber agua adelgace es floja, pero beber un vaso antes de comer sí reduce algo lo que se come después, y sustituir refrescos por agua tiene un efecto grande y comprobado.",
        },
        {
          forma: "texto",
          texto:
            "Aquí una precisión que el libro no hace y que hay que hacer: más agua no es siempre mejor. Beber cantidades muy grandes en poco tiempo puede diluir el sodio en sangre y provocar una hiponatremia, que en casos raros ha matado a corredores de maratón. La regla razonable es beber cuando se tiene sed.",
        },
        {
          forma: "clave",
          rotulo: "Lo que de verdad hace el sistema",
          frase: "El dos por uno no acelera nada. Recorta el pan, sube la proteína y llena el plato de fibra. Eso ya adelgaza a casi todo el mundo, y no hace falta ninguna teoría para explicarlo.",
        },
        {
          forma: "texto",
          texto:
            "El tercer pilar es el sueño, y en 2006 ponerlo en un libro de adelgazar era ir por delante. Hoy sabemos que dormir poco altera el apetito, sube la grelina, baja la leptina y empeora la sensibilidad a la insulina. «Por qué dormimos», que está en esta categoría, dedica capítulos enteros a eso.",
        },
        {
          forma: "texto",
          texto:
            "El cuarto es el ejercicio, y aquí Suárez dice algo que era herejía y hoy es consenso: el ejercicio es malísimo como herramienta para adelgazar y excelente para todo lo demás. Correr una hora quema menos de lo que la gente cree y abre el apetito, y aun así hay que hacerlo.",
        },
        {
          forma: "texto",
          texto:
            "Su quinto punto es el estrés, con la explicación del cortisol. Ahí el grano de verdad es que el estrés crónico y el mal dormir empeoran la conducta alimentaria. La versión que circula —que el cortisol te engorda directamente— está muy estirada respecto a lo que muestran los estudios.",
        },
        {
          forma: "texto",
          texto:
            "Puesto junto, el plan práctico del libro es este: menos harina y azúcar, más proteína y verdura, agua, dormir, moverse y no pasar hambre. Es un consejo tan poco original que resulta casi decepcionante, y es exactamente lo que recomendaría cualquier dietista sensato.",
        },
        {
          forma: "texto",
          texto:
            "Esa coincidencia es la clave de todo el asunto. La parte que funciona del libro es la parte convencional, y la parte original del libro es la parte que no funciona. Quien adelgazó con esto adelgazó con la mitad aburrida, aunque él crea que fue por la otra.",
        },
        {
          forma: "texto",
          texto:
            "Conviene compararlo con «El código de la obesidad», de Jason Fung, que está aquí al lado y sostiene una tesis parecida sobre la insulina. La diferencia no está en la conclusión: está en que Fung es nefrólogo y cita ensayos, y cuando se equivoca se le puede señalar exactamente dónde.",
        },
        {
          forma: "arte",
          texto:
            "Y conviene compararlo sobre todo con «Mi dieta cojea», de Aitor Sánchez, que está en esta misma categoría. Es el libro escrito precisamente para desmontar la clase de afirmaciones que hay en este, y leer los dos seguidos es el mejor curso de nutrición de veinticinco minutos que hay en esta biblioteca.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Hay un punto donde el sistema del plato sí falla y hay que decirlo: mete en el mismo saco el azúcar de mesa y el plátano, la bollería y las lentejas, el refresco y el arroz integral. Esa simplificación adelgaza igual y desinforma bastante sobre qué es un alimento sano.",
        },
        {
          forma: "texto",
          texto:
            "Un plátano y un donut no son la misma cosa por mucho que los dos tengan hidratos, y una legumbre es probablemente el alimento con mejor relación entre precio, saciedad y salud que existe. Salir del libro creyendo que las lentejas engordan es salir peor informado de lo que se entró.",
        },
        {
          forma: "texto",
          texto:
            "El mismo problema aparece en el otro grupo. En los alimentos de adelgazar caben, sin distinción ninguna, el salmón y el chorizo, el aguacate y las salchichas. Un sistema que solo mira los hidratos se queda ciego para todo lo demás, y lo demás también importa a los diez años vista.",
        },
        {
          forma: "texto",
          texto:
            "Y falta un aviso importante para quien tenga diabetes. Reducir mucho los hidratos con insulina o con ciertas pastillas para bajar el azúcar puede provocar hipoglucemias serias si no se ajusta la medicación. Eso hay que hacerlo con el médico, no con un libro.",
        },
        {
          forma: "texto",
          texto:
            "Con esas dos salvedades, el plato de dos tercios es una herramienta decente. No hace lo que dice que hace, pero hace algo útil, y es lo bastante simple como para sobrevivir a un miércoles con prisa, que es donde mueren casi todas las dietas.",
        },
        {
          forma: "texto",
          texto:
            "Si alguien se queda solo con este capítulo, ha sacado del libro lo mejor que tiene.",
        },
        {
          forma: "texto",
          texto:
            "El problema es que el libro no termina aquí.",
        },
        {
          forma: "texto",
          texto:
            "Termina en una tienda.",
        },
      ],
    },
    {
      titulo: "La tienda que hay detrás del libro",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "A partir de cierto punto, el libro deja de hablar de comida y empieza a hablar de frascos. Y casi todos los frascos que menciona se podían comprar, en aquel momento, en la empresa que el propio autor había fundado ocho años antes.",
        },
        {
          forma: "texto",
          texto:
            "Esto hay que decirlo sin dramatismo y sin insinuaciones: no es ilegal, no es raro en el sector y no demuestra que los productos no sirvan. Lo que sí hace es cambiar cómo hay que leer las recomendaciones, porque el que recomienda cobra si le haces caso.",
        },
        {
          forma: "texto",
          texto:
            "En medicina eso tiene nombre y se declara obligatoriamente al publicar: conflicto de intereses. Cualquier artículo de una revista seria lleva al final quién ha pagado y qué vende cada firmante. En este libro esa declaración no aparece, y el lector la tiene que deducir.",
        },
        {
          forma: "arte",
          texto:
            "El producto estrella es el aceite de coco, presentado como un acelerador del metabolismo por sus triglicéridos de cadena media, que el cuerpo quema más rápido en vez de almacenarlos. La idea suena bien, tiene una base real y está mal aplicada.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "El detalle que casi nadie cuenta es este: el aceite de coco es en torno a la mitad ácido láurico, que tiene doce carbonos y se comporta bastante más como una grasa de cadena larga que como una de cadena media. No es el aceite de triglicéridos medios de los estudios, aunque se venda como si lo fuera.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un dato en la dirección contraria que conviene tener. Un metaanálisis publicado en 2020 en una revista cardiológica reunió dieciséis ensayos y encontró que el aceite de coco sube el colesterol LDL de forma significativa frente a los aceites vegetales no tropicales, sin ninguna ventaja en peso ni en cintura.",
        },
        {
          forma: "texto",
          texto:
            "El segundo grupo de productos son los minerales, sobre todo potasio y magnesio, presentados como necesarios para que el metabolismo funcione. La parte cierta es que ambos son imprescindibles y que la deficiencia de magnesio no es rara. La parte falsa es que suplementarlos adelgace a quien no tiene deficiencia.",
        },
        {
          forma: "clave",
          rotulo: "El aviso que el libro no da",
          frase: "El potasio en suplemento no es inocuo. Con el riñón tocado, o tomando ciertos fármacos para la tensión, puede acumularse en sangre y provocar arritmias graves.",
        },
        {
          forma: "texto",
          texto:
            "Eso último merece detalle porque es lo más serio de todo el libro. Los inhibidores de la enzima convertidora, los antagonistas de los receptores de angiotensina y los diuréticos que ahorran potasio son de los medicamentos más recetados del mundo, y los tres retienen potasio.",
        },
        {
          forma: "texto",
          texto:
            "Una persona mayor con la tensión alta, la función renal algo disminuida y uno de esos fármacos que se pone a tomar suplementos de potasio por su cuenta está corriendo un riesgo real de hiperpotasemia, que puede alterar el ritmo del corazón. Esa advertencia no está en el libro y tendría que estar.",
        },
        {
          forma: "texto",
          texto:
            "El tercer grupo son los productos para la limpieza de la candida, que es lógicamente el más difícil de defender: son productos contra un problema cuya existencia lleva cuarenta años sin demostrarse. Aquí el conflicto de intereses no es un matiz, es el mecanismo entero.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un cuarto asunto que es el más delicado de todos: los medicamentos. Suárez sostiene que muchos fármacos habituales bajan el metabolismo y engordan, y menciona antidepresivos, anticonceptivos, antiinflamatorios y pastillas para el colesterol.",
        },
        {
          forma: "texto",
          texto:
            "El grano de verdad es grande y hay que reconocerlo. Hay fármacos que sí hacen ganar peso de forma bien documentada: varios antipsicóticos, algunos antidepresivos, los corticoides, la insulina y ciertos antiepilépticos. Un médico honesto te lo dice antes de recetarlos.",
        },
        {
          forma: "texto",
          texto:
            "Lo peligroso es el salto siguiente. De ahí a insinuar que la medicación es en general el enemigo del metabolismo hay un trecho, y ese trecho lo recorren solos algunos lectores, que dejan de tomar lo que tomaban sin decírselo a nadie. Las estatinas y los antihipertensivos no se dejan por un libro.",
        },
        {
          forma: "texto",
          texto:
            "Hay que reconocerle algo, sin embargo, y es que jamás dijo que su método curase enfermedades ni que sustituyera a un tratamiento. Comparado con otros autores del mismo mercado, Suárez fue relativamente prudente en eso, y conviene no atribuirle lo que no dijo.",
        },
        {
          forma: "texto",
          texto:
            "Tampoco vendía milagros de una semana ni prometía perder treinta kilos en un mes. Su discurso era de meses, de constancia y de consultores que llaman por teléfono, que es un modelo comercial mucho más parecido al de un gimnasio que al de un timo.",
        },
        {
          forma: "texto",
          texto:
            "El problema no es que estafara: es que un negocio de suplementos y un manual de salud no pueden ser el mismo objeto sin que uno de los dos se contamine. Y aquí el que se contamina es siempre el manual, porque es el que decide qué capítulos existen.",
        },
        {
          forma: "arte",
          texto:
            "La prueba está en qué falta. En un libro entero sobre metabolismo no hay un capítulo sobre entrenamiento de fuerza, que es la intervención mejor demostrada para subir el gasto en reposo de verdad, porque aumenta la masa muscular. No se puede embotellar, así que no aparece.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "Ese es el filtro invisible de todos los libros de este género y merece la pena aprenderlo. Fíjate menos en lo que recomiendan y más en lo que no mencionan: lo que falta suele ser justo aquello de lo que no se puede sacar un producto.",
        },
        {
          forma: "texto",
          texto:
            "Conviene añadir una cosa que casi nadie sabe y que cambia la lectura de cualquier estante de suplementos. En la mayoría de los países no se registran como medicamentos, sino como alimentos, y eso significa que nadie ha tenido que demostrar antes de venderlos que hagan lo que dice la etiqueta.",
        },
        {
          forma: "texto",
          texto:
            "Aplicado aquí: dormir ocho horas, levantar peso tres veces por semana, comer legumbres y cocinar en casa no dan margen comercial. El aceite de coco, el potasio en cápsulas y la limpieza de hongos, sí. Y el reparto de páginas del libro sigue esa línea con bastante fidelidad.",
        },
        {
          forma: "texto",
          texto:
            "La comida ocupa la primera mitad.",
        },
        {
          forma: "texto",
          texto:
            "Los frascos, la segunda.",
        },
        {
          forma: "texto",
          texto:
            "Y la primera mitad se puede seguir sin comprar absolutamente nada.",
        },
      ],
    },
    {
      titulo: "Lo que sí se le rompe a un cuerpo que ha hecho veinte dietas",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Queda por resolver la pregunta importante, la que hace que este libro merezca un resumen y no una burla. Suárez decía que hacer dietas de hambre estropea el metabolismo y que por eso quien ha adelgazado muchas veces cada vez lo tiene más difícil. ¿Tenía razón en eso?",
        },
        {
          forma: "texto",
          texto:
            "En parte sí, y la prueba más famosa es de 2016 y viene de un sitio inesperado: un programa de televisión. En Estados Unidos, «The Biggest Loser» encerraba a personas con obesidad grave y las sometía a restricción severa y ejercicio brutal durante treinta semanas, con pérdidas de sesenta kilos o más.",
        },
        {
          forma: "texto",
          texto:
            "Un equipo del Instituto Nacional de Salud siguió a catorce de aquellos concursantes seis años después y midió su gasto en reposo. El resultado sorprendió incluso a los que esperaban malas noticias: seguían gastando, de media, unas quinientas calorías diarias menos de lo que correspondía a su composición corporal.",
        },
        {
          forma: "arte",
          texto:
            "Trece de los catorce habían recuperado buena parte del peso, y el frenazo metabólico no se había corregido con el tiempo: seguía ahí seis años después. Eso es adaptación metabólica, existe, se mide y es exactamente lo que Suárez llamaba metabolismo dañado.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Ese estudio le da la razón en su intuición central y hay que decirlo con todas las letras: la orden de comer menos y moverse más, aplicada a lo bruto, deja al cuerpo peor preparado para mantener el peso que antes de empezar. No es falta de voluntad; es fisiología.",
        },
        {
          forma: "clave",
          rotulo: "Donde acertó",
          frase: "Adelgazar a base de hambre baja el gasto en reposo, y ese descenso puede durar años. El cuerpo no vuelve solo al punto de partida cuando tú vuelves a comer.",
        },
        {
          forma: "texto",
          texto:
            "Ahora las tres precisiones que hacen falta para no pasarse al otro extremo, que también es un error. La primera: el frenazo ralentiza, no detiene. La idea de que a partir de cierto punto dejas de perder peso por muy poco que comas es falsa, y se sabe desde hace ochenta años.",
        },
        {
          forma: "texto",
          texto:
            "Lo demostró un experimento incómodo de mirar. En 1944, Ancel Keys reclutó en Minnesota a treinta y seis objetores de conciencia y los sometió a media ración durante veinticuatro semanas para estudiar cómo realimentar Europa después de la guerra. Perdieron alrededor de la cuarta parte de su peso.",
        },
        {
          forma: "texto",
          texto:
            "El metabolismo de aquellos hombres se hundió en torno a un cuarenta por ciento, y siguieron adelgazando hasta el final. Se volvieron irritables, obsesionados con la comida, incapaces de concentrarse y sexualmente apagados, y algunos tardaron años en recuperar una relación normal con comer.",
        },
        {
          forma: "texto",
          texto:
            "Ese experimento enseña las dos cosas a la vez, y por eso conviene tenerlo cerca. Que la restricción severa no deja de funcionar biológicamente, y que destroza a la persona por otros caminos: por la cabeza, por el estado de ánimo y por lo que viene después.",
        },
        {
          forma: "texto",
          texto:
            "La segunda precisión: el tamaño del frenazo se discute. El estudio del programa de televisión es un caso extremo con una muestra de catorce personas, y otras cohortes con pérdidas grandes han encontrado adaptaciones bastante menores. Que el fenómeno exista no significa que le pase igual a todo el mundo.",
        },
        {
          forma: "texto",
          texto:
            "La tercera, y es la más útil en la práctica: hay una forma conocida de proteger el gasto mientras se adelgaza, y consiste en conservar músculo. Suficiente proteína y entrenamiento de fuerza. Es justo lo que no viene en el libro, porque, como decíamos, no se puede vender en frasco.",
        },
        {
          forma: "texto",
          texto:
            "Así que el balance final queda raro, y hay que aceptarlo raro. La observación principal del libro era buena y llegó pronto. Sus mecanismos son inventados. Su plan alimentario es correcto y aburrido. Sus suplementos son innecesarios y alguno es arriesgado. Y todo eso convive en el mismo volumen.",
        },
        {
          forma: "texto",
          texto:
            "Merece también un reconocimiento que casi nadie le hace. Este libro le explicó a millones de hispanohablantes qué es la insulina, qué hace un hidrato de carbono y por qué el hambre a las once de la mañana no es un defecto de carácter. Nadie más les había explicado eso nunca.",
        },
        {
          forma: "texto",
          texto:
            "El fallo no es solo suyo. Si un vendedor de Puerto Rico sin ninguna titulación llenó ese hueco durante veinte años es porque el hueco estaba vacío, y lo estaba porque la información sanitaria seria se escribía en un idioma que su público no entendía y no llegaba a los sitios donde su público estaba.",
        },
        {
          forma: "texto",
          texto:
            "Esa es la lección que este resumen quiere dejar por encima de la lista de errores. La divulgación mala no gana porque la gente sea tonta: gana porque llega antes, habla claro y no humilla a quien pregunta. Las tres cosas se pueden copiar sin copiar ni una sola de sus afirmaciones falsas.",
        },
        {
          forma: "texto",
          texto:
            "Para quien tenga el libro en casa, la instrucción práctica cabe en tres líneas. La parte del plato, sírvela. La parte del agua, el sueño y el ejercicio, hazla. La parte de los frascos, de la temperatura basal y del hongo, sáltatela entera.",
        },
        {
          forma: "texto",
          texto:
            "Y si algo de lo que cuenta te ha sonado a tu propio caso —el cansancio, el frío, el peso que no baja—, la conclusión correcta no es comprar yodo: es pedir un análisis de tiroides. Cuesta poco, lo cubre la sanidad pública y contesta la pregunta de verdad en tres días.",
        },
        {
          forma: "texto",
          texto:
            "Y una regla general que sale gratis y sirve para cualquier libro de salud que llegue después de este: mira quién cobra si le haces caso. No es una acusación, es una pregunta de higiene, y basta con hacérsela una vez antes de empezar a leer.",
        },
        {
          forma: "texto",
          texto:
            "Frank Suárez llevaba razón en que a mucha gente le habían roto el metabolismo mandándole pasar hambre. Se equivocó al decir que se arreglaba con aceite de coco, cuando lo que hacía falta era comer proteína suficiente y levantar peso.",
        },
        {
          forma: "texto",
          texto:
            "La distancia entre esas dos frases es todo este libro, y también es la distancia entre observar bien y explicar bien, que son dos talentos distintos que casi nunca vienen en la misma persona.",
        },
        {
          forma: "texto",
          texto:
            "Vio el problema antes que casi nadie.",
        },
        {
          forma: "texto",
          texto:
            "Le puso una explicación que se inventó.",
        },
        {
          forma: "texto",
          texto:
            "Y le puso un precio, que es la parte que hay que mirar primero.",
        },
      ],
    },
  ],
};

export const DEJA_DE_SER_TU: Resumen = {
  id: "deja-de-ser-tu",
  titulo: "Deja de ser tú",
  autor: "Joe Dispenza",
  ano: 2012,
  gancho:
    "Un quiropráctico se rompió seis vértebras en 1986, rechazó la operación y se pasó dos meses y medio boca abajo reconstruyendo su columna con la imaginación. Volvió a andar, y de ahí sale todo lo demás.",
  porQue:
    "Porque llena estadios en español y merece un examen serio en vez de una burla. Debajo hay una hora de meditación diaria que es defendible, una neurociencia real estirada hasta romperse y una física cuántica que dice justo lo contrario de lo que él cuenta.",
  partes: [
    {
      titulo: "Una bicicleta en Palm Springs",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Abril de 1986, Palm Springs, California. Un hombre de veintitrés años compite en la parte ciclista de un triatlón. En un cruce, un todoterreno lo alcanza por detrás. Sale despedido, cae sobre la espalda y no se puede mover. Se llama Joe Dispenza y acaba de romperse seis vértebras.",
        },
        {
          forma: "texto",
          texto:
            "El diagnóstico es de los malos: fracturas por compresión en la zona dorsal y lumbar, con fragmentos de hueso desplazados hacia el canal medular. Los cirujanos que lo ven coinciden en la indicación de la época, colocarle una barra metálica a lo largo de la columna para estabilizarla.",
        },
        {
          forma: "texto",
          texto:
            "Le advierten de lo que pasa si no lo hace: que puede quedarse sin poder andar. Él, que era quiropráctico recién licenciado y desconfiaba de la cirugía, se niega. Firma el alta voluntaria, se lo llevan a casa de unos amigos y se queda tumbado boca abajo esperando.",
        },
        {
          forma: "texto",
          texto:
            "Conviene entender lo que rechazaba, porque la técnica de entonces era dura: una barra metálica atornillada a lo largo de varias vértebras que estabiliza la columna a costa de dejarla rígida en ese tramo. Negarse a eso en 1986 era una decisión defendible y muy arriesgada a la vez.",
        },
        {
          forma: "arte",
          texto:
            "Y decide hacer algo con ese tiempo. Se pasa dos horas al día, todos los días, visualizando mentalmente su columna: reconstruyéndola vértebra a vértebra en la cabeza, con todo el detalle anatómico que sabía, imaginando el hueso volviendo a su sitio. Nueve semanas y media así.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "A las diez semanas se levantó. A las doce estaba trabajando otra vez. No volvió a operarse y ha seguido caminando desde entonces, y esa historia es la piedra fundacional de todo lo que ha escrito y de todo lo que enseña, cuarenta años después.",
        },
        {
          forma: "texto",
          texto:
            "Vamos a tratarla en serio, que es lo que merece, y eso significa mirarla con cuidado en vez de creerla o descartarla entera. Lo primero: es su relato. No hay historia clínica publicada, ni radiografías disponibles, ni un informe médico que se pueda consultar. Tenemos su palabra.",
        },
        {
          forma: "texto",
          texto:
            "Eso no significa que mienta y sería injusto insinuarlo. Significa algo más aburrido y más importante: que no hay forma de comprobar el estado exacto de aquellas fracturas ni de saber qué habría pasado con el mismo reposo y sin las dos horas diarias de visualización.",
        },
        {
          forma: "clave",
          rotulo: "Qué se puede decir de esa recuperación",
          frase: "Es real y es extraordinaria. Y una recuperación de una persona, sin nadie con quien compararla, no dice absolutamente nada sobre la causa. Ese es el problema, no si ocurrió.",
        },
        {
          forma: "texto",
          texto:
            "Porque las fracturas por compresión de ese tipo se tratan a veces de forma conservadora y consolidan solas, con reposo prolongado y sin cirugía. No es lo habitual con fragmentos hacia el canal, pero ocurre, y en 1986 el reposo largo era una opción clínica que se manejaba.",
        },
        {
          forma: "texto",
          texto:
            "Es decir, hay una explicación mucho más aburrida disponible: Dispenza estuvo en el grupo de pacientes que consolidan bien sin operarse, y además pasó dos meses y medio en reposo absoluto, que es exactamente lo que ese tratamiento conservador exige. La visualización pudo no aportar nada.",
        },
        {
          forma: "texto",
          texto:
            "Y hay una posibilidad intermedia que también es razonable: que aquellas dos horas diarias de concentración le sirvieran para soportar el reposo, para no desesperarse y para cumplirlo a rajatabla, que en una consolidación ósea de ese tipo es lo que decide el resultado.",
        },
        {
          forma: "texto",
          texto:
            "Esa tercera explicación es la más interesante de las tres porque no niega nada de lo que él vivió y no exige ninguna física nueva. Un paciente que aguanta diez semanas inmóvil sin moverse ni un centímetro tiene un pronóstico distinto del que se levanta a la semana porque se aburre.",
        },
        {
          forma: "texto",
          texto:
            "Nada de eso se puede saber, y él eligió la explicación más ambiciosa de las tres. Quien decida que sanó la columna con la mente está haciendo la misma operación que hizo él: coger un caso sin control y sacar de ahí una ley que después se aplica a enfermedades muy distintas.",
        },
        {
          forma: "texto",
          texto:
            "Conviene también saber quién es, porque su formación se cuenta mal. Es doctor en quiropráctica por una universidad de Georgia, que es una titulación real y regulada. No es médico, ni neurocientífico, ni biólogo, aunque su público lo tome por las tres cosas y sus libros no lo aclaren.",
        },
        {
          forma: "texto",
          texto:
            "En español el equívoco es mayor, porque la palabra doctor arrastra a médico y porque en las presentaciones de sus actos se le suele llamar doctor Dispenza sin más. Él no comete el fraude de decir que es médico; sencillamente no corrige a nadie que lo suponga.",
        },
        {
          forma: "arte",
          texto:
            "Su salto a la fama fue una película documental de 2004 sobre física cuántica y conciencia, que fue un fenómeno de taquilla y en la que aparecía entrevistado. Ese detalle importa porque de ahí sale el vocabulario cuántico que domina sus libros, y porque la película tiene su propia historia.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "La produjeron tres seguidores de una escuela espiritual estadounidense cuya fundadora sostiene canalizar a un guerrero de la Atlántida de treinta y cinco mil años. Esa mujer aparece en la película entrevistada como una voz más sobre la naturaleza de la realidad, sin que se explique el contexto.",
        },
        {
          forma: "texto",
          texto:
            "Ese dato no invalida por sí solo lo que diga Dispenza y por eso hay que manejarlo con cuidado. Lo que sí explica es de dónde procede la mezcla concreta —conciencia, campo cuántico, creación de la realidad— que aparece intacta en este libro ocho años después.",
        },
        {
          forma: "texto",
          texto:
            "Este libro, publicado en 2012, es el más vendido de los suyos y probablemente el libro de autoayuda espiritual más leído en español de la última década. Su promesa está en el título: dejar de ser la persona que uno es, entendida como un conjunto de hábitos mentales y emocionales.",
        },
        {
          forma: "texto",
          texto:
            "Y esa idea de partida, dicho sea a su favor, es buena y no tiene nada de esotérico: que la personalidad es en gran medida un conjunto de reacciones repetidas tantas veces que se han vuelto automáticas, y que uno se pasa la vida confundiendo un hábito con una identidad.",
        },
        {
          forma: "texto",
          texto:
            "Seis vértebras rotas y una negativa a operarse.",
        },
        {
          forma: "texto",
          texto:
            "Nueve semanas y media boca abajo, dos horas al día imaginando huesos.",
        },
        {
          forma: "texto",
          texto:
            "Y una sola persona de la que sacar una teoría general.",
        },
      ],
    },
    {
      titulo: "Las neuronas que se disparan juntas",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La primera parte del libro es la mejor y es la que tiene ciencia de verdad detrás. Su tesis es que el cerebro cambia físicamente con el uso, que las conexiones que se activan a la vez se refuerzan y que las que no se usan se debilitan. Eso se llama plasticidad y está establecido.",
        },
        {
          forma: "texto",
          texto:
            "La frase que lo resume la repite en todos sus libros: las neuronas que se disparan juntas se conectan juntas. Conviene precisar de dónde viene, porque tiene su gracia. El principio lo formuló Donald Hebb en 1949 en un libro técnico y con un lenguaje bastante más aburrido.",
        },
        {
          forma: "texto",
          texto:
            "La formulación original de Hebb dice, más o menos, que cuando una célula participa repetidamente en activar a otra se produce un cambio que hace más eficiente esa activación. Es lo mismo, y nadie lo habría citado nunca en un libro de autoayuda si se hubiera quedado así.",
        },
        {
          forma: "texto",
          texto:
            "La frase pegadiza la acuñó cuarenta años después una neurobióloga de Stanford, Carla Shatz, en 1992, resumiendo a Hebb en una charla. Es decir: la cita que circula como si fuera un descubrimiento antiguo es en realidad un eslogan didáctico de los años noventa, y funciona muy bien.",
        },
        {
          forma: "arte",
          texto:
            "El ejemplo clásico de plasticidad en humanos es de 2000 y es precioso: se escanearon los cerebros de taxistas de Londres, que tienen que aprenderse de memoria veinticinco mil calles para sacarse la licencia, y se encontró que una parte del hipocampo era mayor que en el grupo de control.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Y el hallazgo se afinó después con un detalle importante: cuanto más años llevaba alguien conduciendo el taxi, mayor era la diferencia. Eso apunta a que el cerebro cambió por el trabajo y no a que los que tienen ese hipocampo grande escojan ser taxistas.",
        },
        {
          forma: "texto",
          texto:
            "Y se afinó todavía más siguiendo a aspirantes desde antes de empezar a estudiarse las calles: los que aprobaron mostraron el cambio y los que abandonaron no. Eso convierte una correlación en algo bastante más parecido a una causa, y es lo que hace bueno a ese estudio.",
        },
        {
          forma: "clave",
          rotulo: "Lo que sí está demostrado",
          frase: "Practicar algo cambia la estructura física del cerebro, y se puede medir. Ese es el suelo real sobre el que Dispenza construye, y es un suelo sólido.",
        },
        {
          forma: "texto",
          texto:
            "Su segundo pilar también tiene respaldo, y este sorprende a mucha gente: ensayar algo mentalmente produce cambios cerebrales parecidos a practicarlo de verdad. No es una metáfora de coach: hay experimentos con resonancia y con estimulación magnética que lo miden.",
        },
        {
          forma: "texto",
          texto:
            "El más citado es de 1995. Un equipo enseñó a unos voluntarios un ejercicio sencillo de piano con cinco dedos. Un grupo lo practicó dos horas al día durante cinco días; otro se limitó a imaginarlo, sin tocar el teclado, el mismo tiempo. Después les midieron la corteza motora.",
        },
        {
          forma: "texto",
          texto:
            "El mapa cortical de la mano se había reorganizado en los dos grupos, y de manera bastante parecida, aunque el rendimiento real al tocar fuera mejor en los que habían practicado de verdad. Ensayar en la cabeza había modificado el cerebro sin mover un dedo.",
        },
        {
          forma: "texto",
          texto:
            "Ese resultado lleva treinta años usándose en deporte de élite y en rehabilitación con criterio: los pianistas ensayan partituras sin teclado y los pacientes con una mano inmovilizada practican mentalmente el movimiento para frenar la pérdida. Es una aplicación seria y acotada.",
        },
        {
          forma: "texto",
          texto:
            "Hay otro experimento del mismo estilo con fuerza muscular, de 2004: entrenar mentalmente una contracción del dedo meñique durante semanas produjo ganancias de fuerza de alrededor de un tercio, frente a algo más de la mitad en los que entrenaron físicamente, sin tocar ninguna pesa.",
        },
        {
          forma: "texto",
          texto:
            "Esos resultados son reales, se han replicado y son de los datos más contraintuitivos de la neurociencia del movimiento. La explicación es que buena parte de la fuerza no está en el músculo sino en la señal que le llega, y esa señal se puede entrenar sin contracción.",
        },
        {
          forma: "texto",
          texto:
            "Fíjate además en el detalle que delimita el hallazgo: el músculo no crecía. Lo que mejoraba era la capacidad de reclutarlo, es decir, la instalación eléctrica y no el motor. Es un resultado precioso y describe exactamente su propio límite, cosa que el libro no recoge.",
        },
        {
          forma: "texto",
          texto:
            "Y ahora viene la parte que hay que decir con toda claridad, porque es donde el libro se despeña. Todos esos experimentos tienen tres características comunes: se hacen sobre movimientos que el cuerpo ya sabe hacer, en personas sanas, y miden efectos pequeños en días o semanas.",
        },
        {
          forma: "arte",
          texto:
            "Ninguno de ellos dice nada sobre curar una enfermedad. Entrenar el circuito que mueve un dedo y reconstruir una vértebra rota o eliminar un tumor son problemas distintos, con biología distinta, y el salto de lo primero a lo segundo no está en ningún artículo científico.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Ese salto es el método del libro entero, y conviene aprender a verlo porque se repite en todo el género: se cita un estudio real, se describe con razonable fidelidad, y en el párrafo siguiente se aplica a un problema al que ese estudio no se refiere. La cita es correcta y la conclusión no.",
        },
        {
          forma: "texto",
          texto:
            "Es exactamente lo mismo que ocurría en «El cerebro del niño», que anda por Psicología: una capa de neurociencia real puesta encima de un consejo para que el consejo parezca demostrado. Existe un estudio de 2008 que midió ese efecto y encontró que funciona con quien no es especialista.",
        },
        {
          forma: "texto",
          texto:
            "El tercer pilar es la epigenética, y ahí el libro repite la misma operación. Es verdad que la expresión de los genes responde al ambiente, incluidas las hormonas del estrés, y hay algún estudio que ha medido cambios de expresión en meditadores experimentados tras un día intensivo.",
        },
        {
          forma: "texto",
          texto:
            "Lo que esos estudios encuentran son variaciones pequeñas y transitorias en la expresión de unos pocos genes relacionados con la inflamación, en células inmunitarias, medidas horas después. De ahí a reprogramar una enfermedad hay la misma distancia que del dedo meñique a la vértebra.",
        },
        {
          forma: "texto",
          texto:
            "Las neuronas se conectan con el uso, y eso es cierto.",
        },
        {
          forma: "texto",
          texto:
            "Imaginar un ejercicio cambia el mapa motor, y también es cierto.",
        },
        {
          forma: "texto",
          texto:
            "De ahí a reconstruir una vértebra hay un salto que no ha dado ningún experimento.",
        },
      ],
    },
    {
      titulo: "El campo cuántico",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "A partir de la mitad del libro entra la física, y aquí hay que ser preciso porque es donde está el problema serio. Dispenza sostiene que existe un campo cuántico de posibilidades infinitas, que la conciencia lo afecta, y que uno puede elegir un futuro de ese campo y hacerlo real observándolo.",
        },
        {
          forma: "texto",
          texto:
            "Su apoyo es una idea que todo el mundo ha oído: el efecto del observador. En mecánica cuántica, un sistema puede estar en una superposición de estados hasta que se observa, y al observarlo se concreta en uno solo. De ahí, dice, se sigue que la conciencia crea la realidad.",
        },
        {
          forma: "texto",
          texto:
            "Conviene reconocer por qué el argumento seduce: la formulación popular de la física cuántica está llena de palabras que en el habla corriente significan otra cosa. Observador, medida, información, incertidumbre y colapso son términos técnicos que suenan a filosofía y no lo son.",
        },
        {
          forma: "texto",
          texto:
            "La palabra que hace todo el trabajo en ese argumento es observar, y significa otra cosa. En física, observar es cualquier interacción que enrede el sistema con su entorno: un fotón que choca, un detector que registra, una molécula de aire. No hace falta que haya nadie mirando.",
        },
        {
          forma: "arte",
          texto:
            "El experimento de la doble rendija funciona exactamente igual con el detector encendido y la sala vacía, sin ningún ser consciente en el edificio, y el resultado se lee después. La conciencia humana no aparece en ninguna ecuación de la mecánica cuántica.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "Hay además una explicación física de por qué esos efectos no se escalan a un cuerpo humano: se llama decoherencia. Un objeto grande, caliente y húmedo interactúa con su entorno miles de millones de veces por segundo, y esas interacciones destruyen la superposición en fracciones inimaginables de segundo.",
        },
        {
          forma: "texto",
          texto:
            "Es la misma razón por la que un gato de verdad no puede estar vivo y muerto a la vez, y por la que aquel ejemplo se propuso en 1935 precisamente como una crítica: Schrödinger no estaba describiendo una posibilidad, estaba señalando lo absurdo de llevar la superposición a esa escala.",
        },
        {
          forma: "clave",
          rotulo: "La corrección exacta",
          frase: "No es que la física cuántica no explique lo que dice el libro. Es que explica por qué eso no puede pasar: a la escala de una persona, las superposiciones se deshacen antes de que exista la palabra observar.",
        },
        {
          forma: "texto",
          texto:
            "Conviene decir que la interpretación que él usa existió y fue seria. En los años treinta, John von Neumann dejó abierta la puerta a que la cadena de medición terminara en la conciencia, y Eugene Wigner, premio Nobel de física, la defendió explícitamente durante un tiempo.",
        },
        {
          forma: "texto",
          texto:
            "Y aquí está el detalle que casi nadie cuenta: Wigner la abandonó. Se convenció con los años, sobre todo por los trabajos sobre decoherencia, de que su propia propuesta no hacía falta, y dejó de defenderla. Hoy prácticamente ningún físico en activo la sostiene.",
        },
        {
          forma: "texto",
          texto:
            "Es decir, el libro se apoya en una interpretación minoritaria y abandonada por su propio autor hace medio siglo, y la presenta al lector como si fuera lo que dice la física. No es un matiz: es la diferencia entre citar una posición discutida y citar el consenso.",
        },
        {
          forma: "texto",
          texto:
            "Y aunque aquella interpretación fuera cierta, no serviría para lo que él quiere. Decir que la conciencia interviene en el colapso de un sistema microscópico aislado no permite deducir que uno pueda elegir con qué salud amanece, y ese segundo paso no lo dio nunca ningún físico.",
        },
        {
          forma: "texto",
          texto:
            "Quien quiera saber qué dice de verdad la mecánica cuántica sobre esto tiene en esta biblioteca «Siete breves lecciones de física», de Carlo Rovelli, que además defiende una interpretación en la que las propiedades existen en relación con otros objetos, y no con ninguna conciencia.",
        },
        {
          forma: "texto",
          texto:
            "Hay que reconocerle una cosa a Dispenza, porque es más que muchos de su género: ha publicado. Él y sus colaboradores tienen artículos en revistas con revisión por pares, con mediciones de variabilidad cardiaca, electroencefalograma y expresión génica tomadas en sus propios retiros.",
        },
        {
          forma: "texto",
          texto:
            "Eso está bien y hay que decirlo. Y hay que decir también cómo son esos estudios: sin grupo de control, con participantes que han pagado varios miles de dólares por asistir a un retiro de una semana, autoseleccionados entre sus seguidores, y con el propio autor como parte interesada.",
        },
        {
          forma: "texto",
          texto:
            "Hay además un problema que ningún grupo de control resolvería y que conviene nombrar: quien ha pagado una cantidad grande y ha viajado para asistir tiene un incentivo psicológico considerable en notar algo, y eso afecta a todo lo que se mida preguntándole cómo se siente.",
        },
        {
          forma: "arte",
          texto:
            "Nada de eso es fraude. Es, sencillamente, la clase de evidencia más débil que existe: gente muy motivada, en un entorno intenso, midiendo variables que responden a la motivación y al entorno. Cualquier retiro de una semana con meditación produciría cambios parecidos.",
          arte: "museo",
        },
        {
          forma: "texto",
          texto:
            "Falta un contraste que hace mucha falta y que está aquí al lado. En la misma categoría de Salud está Jon Kabat-Zinn, que en 1979 montó en un hospital universitario un programa de reducción de estrés basado en meditación, sin ninguna metafísica, y lo sometió a ensayos durante cuarenta años.",
        },
        {
          forma: "texto",
          texto:
            "Ese programa tiene hoy cientos de estudios, algunos buenos y otros malos, con efectos que son modestos y reales sobre el estrés, la ansiedad y el dolor crónico. Es exactamente la misma práctica que propone Dispenza, medida con grupos de control y sin mencionar la palabra cuántico.",
        },
        {
          forma: "texto",
          texto:
            "Y con una honradez que conviene subrayar: la literatura sobre atención plena reconoce sus propios problemas, desde estudios pequeños hasta la dificultad de cegar a los participantes, y publica los resultados negativos. Es lo que separa un campo de investigación de un catálogo de testimonios.",
        },
        {
          forma: "texto",
          texto:
            "La comparación es la mejor manera de entender el asunto. La meditación no necesitaba el campo cuántico para funcionar, y con el campo cuántico no funciona mejor. Lo que el campo cuántico hace es otra cosa: convence a mucha gente de sentarse una hora al día, que no es poco.",
        },
        {
          forma: "texto",
          texto:
            "Observar, en física, lo hace un detector apagado en una sala vacía.",
        },
        {
          forma: "texto",
          texto:
            "El físico que propuso lo contrario se retractó él mismo.",
        },
        {
          forma: "texto",
          texto:
            "Y un cuerpo humano pierde la coherencia cuántica antes de que a nadie le dé tiempo a mirarlo.",
        },
      ],
    },
    {
      titulo: "La culpa de estar enfermo",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Hay una consecuencia de este libro que no está escrita en ninguna página y que se deduce de todas, y es la razón por la que este resumen no puede quedarse en el análisis. Si tus pensamientos y tus emociones crean tu estado físico, entonces tu enfermedad la has creado tú.",
        },
        {
          forma: "texto",
          texto:
            "Dispenza no escribe esa frase. Escribe la afirmativa, que suena bien: que puedes cambiar tu biología cambiando tu mente. Pero la afirmativa arrastra la negativa sin remedio, porque si el pensamiento explica la curación, también explica la enfermedad. No hay manera de tener una sin la otra.",
        },
        {
          forma: "texto",
          texto:
            "Y esa es una idea vieja, con una historia larga y bien documentada. Cada época ha tenido su versión: la tuberculosis como enfermedad de las almas apasionadas en el siglo diecinueve, el cáncer como resultado de emociones reprimidas en el veinte, y hoy el estrés y la vibración baja.",
        },
        {
          forma: "texto",
          texto:
            "El patrón se repite con una regularidad que da que pensar: mientras no se conoce la causa de una enfermedad, se le atribuye un carácter. Cuando se descubre el bacilo o el mecanismo celular, la teoría psicológica desaparece de golpe y nadie recuerda haberla defendido.",
        },
        {
          forma: "arte",
          texto:
            "Contra eso escribió Susan Sontag su ensayo más importante, en 1978, tres años después de que le diagnosticaran un cáncer de mama. Se titula «La enfermedad y sus metáforas» y su tesis es que la enfermedad no significa nada, y que atribuirle un sentido moral es una crueldad añadida.",
          arte: "escritor",
        },
        {
          forma: "texto",
          texto:
            "Sontag lo escribió porque lo vivió: mientras se trataba, la gente de su alrededor le insinuaba que su carácter reservado había tenido algo que ver, y encontró en la literatura psicológica de la época teorías enteras sobre la personalidad cancerígena. Ninguna se ha sostenido después.",
        },
        {
          forma: "texto",
          texto:
            "Ella, por cierto, se trató con la medicina más agresiva que había, sobrevivió a aquel cáncer y vivió veintiocho años más. Y en esta biblioteca está «Sobre la fotografía», también suyo, así que su manera de pensar ya andaba por aquí sin que hiciera falta esta ficha para presentarla.",
        },
        {
          forma: "clave",
          rotulo: "El coste de esta idea",
          frase: "A quien se cura le da la razón, y a quien no se cura le añade el reproche de no haberlo intentado bastante. Una teoría que solo puede confirmarse es una teoría que solo castiga.",
        },
        {
          forma: "texto",
          texto:
            "Y hay un segundo coste, más concreto y más grave: el retraso del tratamiento. Alguien convencido de que puede revertir un proceso con meditación puede posponer una consulta, una prueba o una quimioterapia, y en muchas enfermedades el tiempo es la variable que decide el resultado.",
        },
        {
          forma: "texto",
          texto:
            "Aquí hay que ser justo con el libro y decir lo que sí dice: Dispenza recomienda expresamente no abandonar el tratamiento médico y presenta su método como complementario. Eso está en el texto y hay que reconocérselo, porque no todos los de su género lo hacen.",
        },
        {
          forma: "texto",
          texto:
            "El problema es que el resto del libro empuja en la dirección contraria con mucha más fuerza que esa advertencia. Trescientas páginas explicando que la mente reconstruye una columna vertebral pesan más que un párrafo recomendando ir al médico, y el lector se queda con el peso.",
        },
        {
          forma: "texto",
          texto:
            "Y lo que circula fuera del libro pesa todavía más. Los vídeos, los testimonios de los retiros y los grupos de seguidores son bastante más radicales que las páginas que firmó él, y esa distancia entre lo que un autor escribe y lo que su público entiende no es un accidente evitable.",
        },
        {
          forma: "texto",
          texto:
            "Eso, además, no es responsabilidad de sus lectores. Es una consecuencia previsible de haber construido el libro sobre un caso extremo: la historia de las seis vértebras está puesta ahí precisamente para que el lector piense que lo suyo también se puede.",
        },
        {
          forma: "texto",
          texto:
            "Conviene mencionar el efecto placebo, porque el libro se apoya mucho en él y lo agranda. El placebo existe y está medido, y es real sobre todo en síntomas que el paciente informa: dolor, náuseas, fatiga, ánimo. Ahí puede ser considerable y es un fenómeno serio.",
        },
        {
          forma: "texto",
          texto:
            "Donde no aparece es en las variables duras. Un placebo no reduce un tumor, no baja la carga viral, no consolida una fractura y no mueve la supervivencia. La distinción entre síntoma y enfermedad es exactamente la línea donde el placebo funciona y deja de funcionar.",
        },
        {
          forma: "texto",
          texto:
            "Hay un estudio muy citado sobre asma que lo ilustra perfectamente: los pacientes tratados con placebo decían encontrarse igual de bien que los tratados con broncodilatador, y la medición objetiva de su función pulmonar solo mejoraba con el fármaco. Se sentían mejor y respiraban igual.",
        },
        {
          forma: "arte",
          texto:
            "Ese matiz importa porque salva lo aprovechable. Si alguien duerme mejor, tiene menos dolor y afronta un tratamiento con más ánimo después de meditar una hora al día, eso es un beneficio real y medible que no exige creer nada sobre campos cuánticos.",
          arte: "aprendizaje",
        },
        {
          forma: "texto",
          texto:
            "Hay un libro en esta misma categoría que cubre el terreno adyacente sin ninguno de estos problemas: «El cuerpo lleva la cuenta», de van der Kolk. Sostiene que el trauma deja marcas físicas y que el cuerpo participa en la recuperación, con clínica detrás y sin prometer curaciones.",
        },
        {
          forma: "texto",
          texto:
            "La diferencia entre los dos libros es un buen resumen de todo esto. Van der Kolk dice que la mente y el cuerpo están conectados y explora qué se puede hacer con eso. Dispenza dice que la mente manda sobre el cuerpo y que basta con hacerlo bien. La primera frase es cierta y la segunda no.",
        },
        {
          forma: "texto",
          texto:
            "Y el aviso práctico que hay que dar sin adornos: si alguien tiene un diagnóstico serio, este libro no es el sitio. La meditación que propone puede acompañar un tratamiento y ayudar bastante; sustituirlo, o retrasarlo, es la manera más rápida de que este libro haga daño de verdad.",
        },
        {
          forma: "texto",
          texto:
            "Sontag lo escribió con un cáncer encima.",
        },
        {
          forma: "texto",
          texto:
            "Su tesis era que la enfermedad no significa nada.",
        },
        {
          forma: "texto",
          texto:
            "Y que buscarle un sentido moral se lo cobran siempre los que no se curan.",
        },
      ],
    },
    {
      titulo: "Una hora sentado antes de que amanezca",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Después de todo eso queda la pregunta que importa: qué hace en la práctica alguien que sigue este libro. Y la respuesta es mucho menos exótica de lo que sugieren cuatrocientas páginas de física cuántica. Se levanta antes de que amanezca y se sienta a meditar durante una hora.",
        },
        {
          forma: "texto",
          texto:
            "La sesión que propone tiene una estructura reconocible para cualquiera que conozca la tradición meditativa. Empieza con inducción y respiración lenta, sigue con un recorrido de atención por las partes del cuerpo y por el espacio alrededor, y termina con una visualización sostenida.",
        },
        {
          forma: "texto",
          texto:
            "La primera parte es prácticamente idéntica a un examen corporal de atención plena. La segunda, la que él llama abrir el foco, consiste en dejar de atender a objetos concretos y atender al espacio vacío entre ellos, que es una técnica antigua y bien conocida.",
        },
        {
          forma: "texto",
          texto:
            "Esa técnica de abrir el foco tiene además un fundamento razonable y nada místico: la atención estrecha va asociada al estado de alerta, y ensancharla deliberadamente tiende a bajar la activación. Se usa en entrenamiento deportivo y en terapia con ese mismo nombre y sin ninguna metafísica.",
        },
        {
          forma: "arte",
          texto:
            "Y la tercera es la parte propia: ensayar en la cabeza, con detalle sensorial y sobre todo con la emoción correspondiente, la versión de uno mismo que quiere llegar a ser. No visualizar el resultado, insiste, sino sentir de antemano cómo se sentiría uno teniéndolo ya.",
          arte: "memoria",
        },
        {
          forma: "texto",
          texto:
            "Ese último matiz es lo mejor que hay en el libro y merece rescatarse de todo el envoltorio. La diferencia entre imaginar un objetivo y ensayar el estado emocional de haberlo conseguido es real, y es la que separa una fantasía de un ensayo mental de los que sí se han medido.",
        },
        {
          forma: "texto",
          texto:
            "Aunque conviene añadir un contrapunto que la investigación sobre visualización lleva años señalando: imaginar el éxito sin más tiende a reducir el esfuerzo, porque el cerebro cobra por adelantado la recompensa. Lo que funciona es ensayar el proceso, no disfrutar del final imaginado.",
        },
        {
          forma: "clave",
          rotulo: "Lo que queda cuando se quita todo lo demás",
          frase: "Una hora al día de meditación con visualización, hecha todas las mañanas durante meses. Eso es lo que hacen sus lectores, y eso tiene efectos comprobados que no necesitan ninguna teoría cuántica.",
        },
        {
          forma: "texto",
          texto:
            "Y aquí conviene una honradez que rara vez se concede en estas discusiones. Conseguir que alguien se siente una hora al día, en ayunas, todas las mañanas y durante meses es dificilísimo. Los programas clínicos serios luchan con el abandono y ofrecen sesiones de cuarenta minutos con vídeos.",
        },
        {
          forma: "texto",
          texto:
            "Dispenza lo consigue con miles de personas. Y lo consigue precisamente por la parte falsa: la promesa de que aquello reescribe la biología y de que hay un campo esperando. Nadie madruga una hora durante seis meses por una reducción moderada del cortisol.",
        },
        {
          forma: "texto",
          texto:
            "Y lo consigue también por algo más terrenal: la comunidad. Sus lectores se agrupan, se cuentan lo que les pasa, se animan y se esperan. Eso, en cualquier programa de cambio de conducta, es de los predictores más fuertes de que alguien siga haciéndolo dentro de seis meses.",
        },
        {
          forma: "texto",
          texto:
            "Esa es la paradoja incómoda del libro y no tiene una solución bonita. Lo que hace daño y lo que hace bien son la misma cosa. El relato metafísico es lo que produce la adherencia, y la adherencia es lo que produce el único beneficio verificable que hay aquí.",
        },
        {
          forma: "texto",
          texto:
            "Y la misma paradoja aparece en otros libros de esta biblioteca, lo cual es útil para verla mejor. «Sentirse bien», de Burns, tiene ejercicios que funcionan y una teoría que su propio autor no logró confirmar. Ahí la teoría era mala; aquí es falsa. La diferencia es de grado y no de tipo.",
        },
        {
          forma: "texto",
          texto:
            "La recomendación práctica, entonces, se puede dar sin condescendencia. Si a alguien le funciona sentarse una hora al día con este libro debajo del brazo, que lo haga: está haciendo algo bueno para sí mismo, aunque la explicación que le hayan dado sea incorrecta.",
        },
        {
          forma: "texto",
          texto:
            "Con dos condiciones. La primera, que nada de esto sustituya a un tratamiento médico ni retrase una consulta, por convincente que suene el capítulo que se esté leyendo esa semana. La segunda, que si no funciona, la conclusión sea que no funcionó y no que uno no lo hizo bien.",
        },
        {
          forma: "texto",
          texto:
            "Y una tercera de tipo económico, que también hace falta: los retiros de una semana cuestan varios miles de euros con el viaje incluido, y lo que se hace en ellos se puede hacer gratis en casa con un cojín. Si algo funciona, funcionará igual sin pagar la entrada.",
        },
        {
          forma: "arte",
          texto:
            "Esa segunda condición es la más importante y la que el libro imposibilita, porque su estructura no admite el fracaso. Si no te curas, es que no habías cambiado de verdad tu estado emocional. Un método que no puede fallar es un método que siempre le pasa la factura al que lo intentó.",
          arte: "estanteria",
        },
        {
          forma: "texto",
          texto:
            "Y si alguien quiere lo mismo sin la factura, está a dos estanterías: cualquier programa de atención plena de los que se enseñan en hospitales, o el libro de Kabat-Zinn que anda en esta categoría, dan la misma práctica con instrucciones más claras y sin prometer nada que no puedan cumplir.",
        },
        {
          forma: "texto",
          texto:
            "Queda una última cosa por decir sobre el hombre de las seis vértebras. Sea lo que sea lo que pasó en aquellos dos meses y medio de 1986, hizo algo que a la mayoría de la gente le resulta imposible: sostener una disciplina diaria durante semanas tumbado boca abajo y sin garantías.",
        },
        {
          forma: "texto",
          texto:
            "Y lo hizo, además, sin ningún libro que le prometiera nada. En 1986 no existía ninguna de las explicaciones que vende hoy: había un chico de veintitrés años boca abajo, asustado, que decidió llenar las horas con lo único que tenía a mano, que era su propia cabeza.",
        },
        {
          forma: "texto",
          texto:
            "Eso sí es replicable, y no hace falta ninguna física para explicarlo. Es lo único de este libro que se puede recomendar a cualquiera sin advertencias: sentarse todos los días a la misma hora, tanto rato como se aguante, y volver mañana aunque no haya pasado nada.",
        },
        {
          forma: "texto",
          texto:
            "El campo cuántico no está.",
        },
        {
          forma: "texto",
          texto:
            "La hora sentado, sí.",
        },
        {
          forma: "texto",
          texto:
            "Y es la única de las dos que sus lectores hacen de verdad cada mañana.",
        },
      ],
    },
  ],
};
