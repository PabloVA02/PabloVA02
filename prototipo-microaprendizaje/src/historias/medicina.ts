import type { Short } from "../shorts";

/* ==========================================================================
   Medicina.

   Tema delicado y por eso con una línea roja: aquí no se aconseja nada. No se
   dice qué tomar, qué evitar ni qué hacer si te duele algo. Esto es historia
   de la ciencia y curiosidad, no consulta.

   La regla del tema: contar cómo se supo. La medicina es el mejor escaparate
   que existe de cómo cambia una idea: alguien mide algo, el gremio se niega a
   creerlo, pasan treinta años y acaba en el primer capítulo del manual. Ese
   recorrido —la resistencia incluida— es la historia.

   Y cuando el protagonista tuvo razón y aun así acabó mal, se cuenta entero.
   La versión heroica en la que la verdad se impone sola no describe casi
   ningún caso real.
   ========================================================================== */

export const MEDICINA: Short[] = [
  {
    id: "estetoscopio-verguenza",
    titulo: "El estetoscopio, por pudor",
    gancho: "Un médico no quiso pegar la oreja al pecho de una paciente y enrolló un papel.",
    categoria: "Medicina",
    color: "var(--clay)",
    encargo: "Un estetoscopio de madera del siglo XIX, cilíndrico, sobre paño oscuro.",
    fotos: [
      {
        archivo: "Laennec-type monaural stethoscope, France, 1851-1900 Wellcome L0057235.jpg",
        autor: "Estetoscopio monoaural del tipo de Laennec, torneado en madera, Francia, entre 1851 y 1900. Wellcome Collection.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Laennec-type_monaural_stethoscope,_France,_1851-1900_Wellcome_L0057235.jpg",
        foco: "50% 50%",
        alt: "Un cilindro de madera clara torneada, con dos aros de refuerzo y un agujero pequeño en el extremo.",
      },
      {
        archivo: "Laennec stethoscope, English version Wellcome M0016403.jpg",
        autor: "Un estetoscopio de Laennec en su versión inglesa, desmontado en sus piezas. Wellcome Collection.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Laennec_stethoscope,_English_version_Wellcome_M0016403.jpg",
        foco: "50% 50%",
        alt: "Varias piezas de madera cilíndricas alineadas, que encajan unas en otras para formar un tubo.",
      },
      {
        archivo: "6 portable stethoscopes. Wellcome M0014330.jpg",
        autor: "Seis estetoscopios portátiles de distintos modelos. Wellcome Collection.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:6_portable_stethoscopes._Wellcome_M0014330.jpg",
        foco: "50% 50%",
        alt: "Media docena de tubos de madera y metal de formas distintas, colocados uno junto a otro.",
      },
      {
        archivo: "2023 Stetoskop.jpg",
        autor: "Un estetoscopio moderno de dos auriculares. Fotografía de Jacek Halicki.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:2023_Stetoskop.jpg",
        foco: "50% 50%",
        alt: "Un estetoscopio de goma negra y metal cromado, con la campana redonda y los dos tubos de las orejas.",
      },
    ],
    entrada:
      "París, 1816. René Laennec tiene que auscultar a una mujer joven en el hospital Necker y se encuentra con un problema que no es médico. El método de entonces se llamaba aplicación inmediata y consistía en apoyar la oreja directamente sobre el pecho del paciente, sin nada en medio. Con una mujer joven, en aquella época y delante de testigos, a Laennec le pareció sencillamente impracticable. Cogió unas hojas de papel que tenía a mano, las enrolló bien apretadas en un cilindro y apoyó un extremo en el pecho y el otro en su oído.",
    paginas: [
      {
        rotulo: "La sorpresa",
        texto:
          "Lo que Laennec esperaba era una solución de compromiso: oír algo, aunque fuera peor. Lo que oyó fue mucho más claro que con la oreja. El cilindro concentraba el sonido en vez de dispersarlo, y de pronto se distinguían cosas que hasta entonces se confundían. Pasó los tres años siguientes construyendo versiones en madera torneada, probando longitudes y grosores, y sobre todo haciendo algo más importante que el aparato: catalogar los sonidos. Inventó el vocabulario que todavía se usa —estertores, soplos, roce— y los emparejó con lo que después aparecía en la autopsia.",
        destacado: {
          tipo: "frase",
          frase: "Buscaba una manera de oír menos incómoda y oyó mucho mejor.",
        },
      },
      {
        rotulo: "El emparejamiento",
        texto:
          "Ese emparejamiento es lo que convierte el invento en medicina y no en curiosidad. Laennec escuchaba a un enfermo, anotaba con detalle qué oía, y si el paciente moría comprobaba en el cuerpo qué lesión correspondía a aquel ruido. Publicó el resultado en <strong>1819</strong>, en un tratado de casi novecientas páginas que se vendía con un estetoscopio incluido en la caja. Por primera vez un médico podía decir algo fiable sobre el interior de una persona viva sin abrirla. El diagnóstico dejó de depender solo de lo que el paciente contaba.",
        destacado: { tipo: "cifra", cifra: "1819", unidad: "el tratado se vendía con el aparato" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Laennec murió en 1826, a los cuarenta y cinco años, de tuberculosis: la misma enfermedad cuyos sonidos había aprendido a reconocer mejor que nadie. Se cuenta que fue su sobrino quien lo auscultó y le dio el diagnóstico, usando un estetoscopio. El aparato lleva dos siglos colgado del cuello de los médicos y sigue siendo el símbolo de la profesión, aunque hoy se discuta cuánto aporta frente a una ecografía portátil. Lo que no ha cambiado es el vocabulario: los ruidos que anotó aquel hombre en su cuaderno siguen llamándose como él los llamó.",
      },
    ],
  },

  {
    id: "semmelweis-manos",
    titulo: "Lavarse las manos ofendía",
    gancho: "Bajó la mortalidad de dieciocho al dos por ciento y lo echaron del hospital.",
    categoria: "Medicina",
    color: "var(--slate)",
    encargo: "Una palangana de porcelana con agua turbia en una sala de hospital antigua.",
    entrada:
      "Hospital General de Viena, 1847. La maternidad tiene dos pabellones. En uno atienden los médicos y los estudiantes; en el otro, las comadronas. Las mujeres que llegan de parto suplican que las lleven al segundo, y algunas prefieren dar a luz en la calle. Tienen motivos: en el pabellón de los médicos se muere aproximadamente una de cada seis.",
    paginas: [
      {
        rotulo: "La pista",
        texto:
          "Ignaz Semmelweis, un médico húngaro de veintiocho años, se obsesionó con la diferencia entre los dos pabellones y fue descartando explicaciones una a una: el clima, el hacinamiento, la postura del parto, hasta el paso del sacerdote con la campanilla. La respuesta llegó por una desgracia. Un colega suyo, Jakob Kolletschka, se cortó con un bisturí durante una autopsia y murió con exactamente los mismos síntomas que las parturientas. Semmelweis ató cabos: los médicos venían de diseccionar cadáveres y pasaban directamente a atender partos, sin lavarse. Las comadronas no pisaban la sala de autopsias.",
        destacado: {
          tipo: "frase",
          frase: "La pista no la dio una paciente. La dio un médico muerto por un corte.",
        },
      },
      {
        rotulo: "El número",
        texto:
          "En mayo de 1847 impuso el lavado de manos con una solución de cal clorada antes de entrar en la sala de partos. La mortalidad del pabellón cayó desde cifras que en algunos meses rozaban el <strong>18 %</strong> hasta alrededor del 2 %, y en algún mes hasta cero. El dato era demoledor y no sirvió de nada. Semmelweis no sabía explicar POR QUÉ funcionaba —faltaban veinte años para la teoría microbiana de Pasteur— y su hipótesis implicaba algo intolerable: que eran los propios médicos, con sus manos, quienes estaban matando a las pacientes.",
        destacado: { tipo: "cifra", cifra: "18 % → 2 %", unidad: "mortalidad tras el lavado" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "No le renovaron el puesto. Se marchó a Budapest, repitió el resultado allí y fue radicalizándose: escribió cartas abiertas llamando asesinos a los obstetras europeos, lo que terminó de cerrarle todas las puertas. En 1865 lo internaron en un manicomio, donde murió a las dos semanas, a los cuarenta y siete años, por una infección de una herida que le hicieron los guardias. Se le dio la razón cuando Pasteur y Lister explicaron el mecanismo. Hoy el fenómeno de rechazar un dato porque contradice lo que uno cree tiene nombre propio en psicología: reflejo Semmelweis.",
      },
    ],
  },

  {
    id: "placebo-abierto",
    titulo: "Funciona aunque sepas que es azúcar",
    gancho: "Les dieron pastillas de azúcar avisando de que eran azúcar. Mejoraron igual.",
    categoria: "Medicina",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un frasco de pastillas blancas con la etiqueta claramente escrita, luz limpia.",
    entrada:
      "La explicación de manual dice que un placebo funciona porque el paciente cree estar tomando un medicamento. Si eso fuera todo, avisarle debería desactivarlo por completo. En 2010, un equipo del Harvard Medical School decidió comprobarlo de la manera más directa posible: dando pastillas de azúcar con el bote etiquetado como pastillas de azúcar.",
    paginas: [
      {
        rotulo: "El ensayo",
        texto:
          "Ted Kaptchuk y su equipo reclutaron a ochenta pacientes con síndrome de intestino irritable. A la mitad no les dieron nada; a la otra mitad, un frasco donde ponía «placebo», y una explicación previa sin trampa: esto son pastillas inertes, no llevan principio activo, pero en algunos estudios el cuerpo responde a este tipo de ritual. Los pacientes sabían perfectamente lo que estaban tomando. Al final del ensayo, el grupo del placebo declarado había mejorado de forma clara respecto al que no tomó nada, con una diferencia parecida a la de algunos fármacos usados para ese trastorno.",
        destacado: { tipo: "cifra", cifra: "80", unidad: "pacientes, y el bote decía «placebo»" },
      },
      {
        rotulo: "Los límites",
        texto:
          "El resultado se ha repetido después en dolor lumbar crónico, en fatiga de pacientes oncológicos y en rinitis alérgica, con efectos moderados pero consistentes. Y aquí llega la parte que casi nunca se cuenta: el placebo actúa sobre lo que el paciente siente e informa —dolor, náusea, cansancio, ánimo—, no sobre lo que se mide con una máquina. No encoge un tumor, no baja el colesterol, no cierra una fractura. Un ensayo con asmáticos lo enseñó de manera brutal: los pacientes decían encontrarse igual de bien con placebo que con broncodilatador, mientras la prueba de función pulmonar solo mejoraba con el fármaco.",
        destacado: {
          tipo: "frase",
          frase: "Cambia cómo te sientes. No cambia lo que mide el aparato.",
        },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "La hipótesis que mejor encaja es que buena parte del efecto no está en creer, sino en el ritual: la consulta, la atención recibida, el gesto de tomarse algo a una hora fija. El cerebro lleva toda la vida aprendiendo que ese guion precede al alivio, y responde a la señal aunque el bote esté vacío de fármaco. La consecuencia práctica no es recetar azúcar, sino algo menos llamativo y más incómodo de organizar: cómo se explica un tratamiento y cuánto tiempo se dedica a explicarlo forma parte del tratamiento, y eso sí se puede medir.",
      },
    ],
  },
  {
    id: "penicilina-placa",
    titulo: "La penicilina, por descuido",
    gancho: "Un moho se coló en un cultivo olvidado durante las vacaciones y mató a las bacterias de alrededor.",
    categoria: "Medicina",
    color: "var(--forest)",
    encargo: "Una placa de laboratorio con una mancha de moho verdoso y un halo limpio alrededor.",
    entrada:
      "Londres, septiembre de 1928. Un médico escocés vuelve de un mes de vacaciones y encuentra su laboratorio tal y como lo dejó: desordenado, con placas de cultivo apiladas junto a la ventana. Trabaja con una bacteria que provoca infecciones y había dejado colonias creciendo antes de marcharse. Al mirarlas ve que una está contaminada por un moho, y que a su alrededor no crece absolutamente nada.",
    paginas: [
      {
        rotulo: "El moho",
        texto:
          "Podía haber tirado la placa, que es lo que se hace siempre con una muestra contaminada, y de hecho ya la había apartado a un lado del montón para deshacerse de ella. Se fijó de casualidad, mientras le enseñaba el desorden a un compañero que había pasado a saludarle. Alrededor de la mancha verdosa había un anillo limpio donde las bacterias se habían disuelto por completo. Cultivó aquel moho, comprobó que el líquido que soltaba mataba varios tipos de bacteria sin dañar los tejidos animales y publicó el hallazgo al año siguiente. No le hizo caso prácticamente nadie.",
        destacado: { tipo: "frase", frase: "Ya había apartado la placa para tirarla cuando se fijó." },
      },
      {
        rotulo: "Diez años parado",
        texto:
          "El problema era práctico y él lo sabía: no conseguía extraer la sustancia en cantidad suficiente ni conservarla estable, y no era químico. Lo dejó estar y siguió con otros asuntos durante una década. Diez años después, un equipo de Oxford rescató aquel artículo olvidado y logró purificarla, trabajando con material improvisado —bañeras, latas de leche y hasta orinales de hospital— porque estaban en plena guerra y no había ni dinero ni cristalería. El primer paciente tratado, un policía con una infección grave por un arañazo de rosal, mejoró de forma espectacular y murió cuando se acabaron las existencias.",
        destacado: { tipo: "cifra", cifra: "10", unidad: "años estuvo el hallazgo olvidado" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La producción industrial la resolvió Estados Unidos y llegó justo a tiempo para el desembarco de Normandía, donde salvó a miles de heridos que hasta entonces habrían muerto de infección en la propia camilla. El descubridor compartió el premio de medicina en 1945 y avisó en su discurso de algo que entonces sonó exagerado: que usarla mal volvería resistentes a las bacterias. Tenía razón. Hoy las bacterias resistentes matan a más de un millón de personas al año en todo el mundo, y la placa sin lavar de la que salió todo se conserva en la vitrina de un museo de Londres.",
      },
    ],
  },

  {
    id: "eter-anestesia",
    titulo: "Operar a alguien despierto",
    gancho: "El único remedio contra el dolor era la velocidad. Los cirujanos famosos lo eran por sus tiempos.",
    categoria: "Medicina",
    color: "var(--slate)",
    encargo: "Un anfiteatro de operaciones antiguo, con gradas de madera alrededor de una mesa.",
    entrada:
      "Boston, 16 de octubre de 1846. Un dentista sube a un anfiteatro de operaciones lleno de médicos escépticos con un frasco de cristal y un tubo de goma en la mano. Va a demostrar que puede dormir a un paciente para que lo operen sin dolor. Hasta ese día, la cirugía consistía en cortar lo más deprisa posible mientras varios hombres sujetaban al enfermo contra la mesa.",
    paginas: [
      {
        rotulo: "La velocidad",
        texto:
          "El único recurso contra el dolor era la rapidez, y los cirujanos célebres lo eran por sus tiempos: uno británico presumía de amputar una pierna en menos de treinta segundos, y en una ocasión, con las prisas, le cortó también dos dedos a su ayudante. Los gritos se oían desde la calle, y por eso los hospitales colocaban los quirófanos en la última planta del edificio. Muchos enfermos preferían morirse a pasar por allí, y bastantes se morían de la impresión durante la propia operación. Solo se operaba lo imprescindible: amputaciones, piedras y dientes.",
        destacado: { tipo: "cifra", cifra: "30 s", unidad: "tardaba en amputar una pierna" },
      },
      {
        rotulo: "La demostración",
        texto:
          "Aquella mañana le administró un vapor de éter a un joven al que había que quitarle un tumor en el cuello. El paciente se durmió en pocos minutos, el cirujano cortó y no hubo ni un grito en toda la sala, que estaba llena de médicos esperando el escándalo. Al despertar, el joven dijo que había notado algo raro, como si le rascaran, pero ningún dolor. El cirujano se volvió hacia las gradas y dijo una frase que quedó escrita: «Caballeros, esto no es un engaño». La noticia dio la vuelta al mundo en dos meses.",
        destacado: { tipo: "frase", frase: "«Caballeros, esto no es un engaño.»" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El dentista intentó patentar el invento con un nombre comercial, ocultando que se trataba de éter corriente, y se pasó el resto de su vida enredado en pleitos con otros que reclamaban la autoría; murió arruinado a los cuarenta y nueve años. La sustancia era conocida desde hacía tres siglos y se usaba en fiestas para reírse un rato. Lo que cambió no fue la química, sino que a alguien se le ocurriera para qué servía. Aquel anfiteatro de Boston se conserva y se llama, desde entonces, la cúpula del éter.",
      },
    ],
  },

  {
    id: "expedicion-vacuna",
    titulo: "La vacuna viajó dentro de niños",
    gancho: "No había manera de conservarla en un barco. La solución fue ir contagiándolos de dos en dos.",
    categoria: "Medicina",
    color: "var(--clay)",
    encargo: "Un velero del XIX visto desde el muelle, con el mar picado y cielo bajo.",
    entrada:
      "La Coruña, noviembre de 1803. La viruela mata cada año a cientos de miles de personas en el imperio español y desde hace siete años existe una vacuna que funciona. El problema es llevarla: es un líquido que se estropea en pocos días y a América se tarda dos meses de navegación. Un médico militar propone al rey una solución incómoda.",
    paginas: [
      {
        rotulo: "La cadena viva",
        texto:
          "La vacuna se hacía entonces con el líquido de las ampollas que salían en la piel de la persona vacunada, y ese material solo servía durante unos días. Así que el plan consistía en llevar la vacuna dentro de personas, viva, pasándola de brazo a brazo durante toda la travesía. Se eligieron veintidós niños de un orfanato de La Coruña, de entre tres y nueve años, ninguno de los cuales había pasado la enfermedad. Se vacunaba a dos, y cuando les salían las ampollas, unos diez días después, se usaba su líquido para vacunar a los dos siguientes.",
        destacado: { tipo: "cifra", cifra: "22", unidad: "niños de un orfanato hicieron de nevera" },
      },
      {
        rotulo: "El viaje",
        texto:
          "Iba con ellos la rectora del orfanato, que se embarcó para cuidarlos y acabó siendo la única adulta que estuvo en la expedición de principio a fin. La ruta duró tres años y no paró en América: desde allí saltó a Filipinas y llegó hasta China, reclutando por el camino a más niños en cada puerto para no romper la cadena. Se calcula que se vacunó a cientos de miles de personas. Los primeros veintidós no volvieron a España: el rey ordenó que se les buscara acomodo y educación en México, y allí se quedaron.",
        destacado: { tipo: "frase", frase: "Tres años de viaje, de brazo en brazo, sin romper la cadena." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Está considerada la primera campaña internacional de vacunación de la historia y se estudia como tal en salud pública. La viruela, que había matado a más gente que ninguna otra enfermedad conocida, fue declarada erradicada del planeta en 1980, la única que lo ha conseguido hasta hoy. De aquellos veintidós niños apenas quedan los nombres apuntados en una lista de embarque, sin apellidos en algunos casos porque no los tenían. La mujer que los cuidó durante los tres años murió en México sin pensión y sin reconocimiento de ninguna clase, y hasta hace un par de décadas casi nadie sabía siquiera que había existido.",
      },
    ],
  },
];
