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
  gancho: "Una estudiante de medicina de veinticinco años escribió un libro sobre el intestino y vendió millones.",
  porQue:
    "Convierte el órgano del que nadie quiere hablar en el más interesante del cuerpo, con humor y sin una sola palabra técnica sin explicar.",
  partes: [
    {
      titulo: "Una charla que salió bien",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Giulia Enders era estudiante de medicina en Fráncfort cuando se presentó a un concurso de divulgación científica en el que hay que explicar tu investigación en diez minutos ante un público general. Eligió el intestino. Ganó, el vídeo circuló y una editorial la llamó.",
        },
        {
          forma: "arte",
          texto:
            "El libro, ilustrado por su hermana con dibujos deliberadamente simpáticos, arrasó en Alemania y después en el resto del mundo. Su mérito es de tono: consigue hablar de digestión, gases y heces durante trescientas páginas sin resultar ni asqueroso ni infantil.",
          arte: "aprendizaje",
        },
        {
          forma: "clave",
          rotulo: "El punto de partida",
          frase: "Tres cuartas partes de tu sistema inmunitario están en el intestino. No es una tubería: es un órgano central.",
        },
        {
          forma: "texto",
          texto:
            "Su argumento es que tratamos al intestino como un tema vergonzoso y por eso ignoramos lo que nos está diciendo. La gente aguanta años con molestias sin consultarlas, mientras que iría al médico al primer pinchazo en el pecho.",
        },
      ],
    },

    {
      titulo: "Cómo funciona de verdad",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Empieza por lo básico y lo hace bien. El aparato digestivo es un tubo de varios metros cuya superficie interior, con todos sus pliegues y vellosidades, ocuparía decenas de metros cuadrados. Es, con diferencia, la mayor superficie de contacto de tu cuerpo con el mundo exterior — mucho más que la piel.",
        },
        {
          forma: "texto",
          texto:
            "Explica por qué vomitamos, por qué se producen los gases y qué significan sus distintos olores, y dedica un capítulo entero a la postura al ir al baño: el ángulo del recto está diseñado para hacer de freno, y sentarse en un inodoro moderno no lo desactiva del todo. Elevar los pies con un taburete sí.",
        },
        {
          forma: "clave",
          rotulo: "El detalle que todo el mundo recuerda",
          frase: "Los cierres del sistema son dos: uno lo controlas tú y el otro no. El de dentro decide antes que tú.",
        },
        {
          forma: "texto",
          texto:
            "Enders explica que aguantar sistemáticamente por vergüenza —en el trabajo, en un baño ajeno— reeduca a la baja ese sistema y es una causa frecuente de estreñimiento crónico. Es de esas cosas que nadie cuenta y que resuelven años de molestias.",
        },
        {
          forma: "arte",
          texto:
            "También aclara intolerancias y alergias con una distinción útil: la intolerancia es un problema de enzimas que faltan y su gravedad depende de la cantidad; la alergia es el sistema inmunitario atacando, y ahí no hay dosis pequeña que valga.",
          arte: "explorar",
        },
      ],
    },

    {
      titulo: "El segundo cerebro",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La parte más llamativa del libro es la que trata el sistema nervioso propio del intestino: una red de cientos de millones de neuronas que funciona con bastante autonomía y que está conectada al cerebro por el nervio vago. Lo asombroso es la dirección del tráfico — la mayor parte de la información sube del intestino al cerebro, no al revés.",
        },
        {
          forma: "clave",
          rotulo: "La consecuencia",
          frase: "Tu intestino le está contando cosas a tu cerebro todo el rato. Mucho más de lo que el cerebro le cuenta a él.",
        },
        {
          forma: "texto",
          texto:
            "Enders repasa los experimentos con ratones libres de microbios, que se comportaban de forma más temeraria y respondían distinto al estrés, y los que trasplantaban microbiota de un animal ansioso a otro tranquilo. También menciona que buena parte de la serotonina del cuerpo se produce en el intestino, aunque advierte de que esa no es la misma que actúa en el cerebro.",
        },
        {
          forma: "texto",
          texto:
            "Sobre la microbiota da datos concretos: pesa entre uno y dos kilos, contiene miles de especies distintas, y la de cada persona es tan particular que podría servir para identificarla. Los primeros años de vida y el tipo de parto influyen en cómo se forma.",
        },
      ],
    },

    {
      titulo: "Qué hacer y qué no creerse",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Sus consejos prácticos son pocos y razonables: comer fibra variada —que es lo que alimenta a las bacterias buenas—, no abusar de antibióticos, masticar, y no tomarse los probióticos comerciales como una solución mágica, porque la mayoría no colonizan nada y desaparecen a los días.",
        },
        {
          forma: "arte",
          texto:
            "Aquí conviene poner la advertencia grande. La investigación sobre microbiota es reciente y se ha adelantado muchísimo a lo que se puede afirmar. Enders es más prudente que el mercado que vino después, pero el libro contribuyó a una ola de productos y dietas que prometen mucho más de lo que hay demostrado.",
          arte: "noche",
        },
        {
          forma: "clave",
          rotulo: "Lo que sí está claro",
          frase: "Que existe una conversación entre intestino y cerebro. Lo que se dicen exactamente, todavía no lo sabemos.",
        },
        {
          forma: "texto",
          texto:
            "Enders dedica un tramo estupendo a explicar por qué el estrés sienta mal a la barriga, y la respuesta es de contabilidad energética. Ante una amenaza, el cuerpo recorta el presupuesto de todo lo que no sea urgente, y digerir es carísimo: se reduce el riego intestinal, se altera el movimiento del tubo y se produce menos moco protector. Mantenido en el tiempo, eso explica buena parte de las molestias que la gente arrastra durante años sin que ninguna prueba encuentre nada. El intestino no está roto: está esperando a que se acabe una emergencia que no acaba nunca.",
        },
        {
          forma: "texto",
          texto:
            "Léelo por lo que hace mejor que nadie: entender cómo funciona tu propio cuerpo por dentro, con humor y en un fin de semana. Como manual de dietas o de suplementos, mejor no usarlo.",
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
  gancho: "Fue al médico porque le dolía el pie corriendo. Acabó en un cañón de México con una tribu que corre cien kilómetros por diversión.",
  porQue:
    "Provocó una revolución mundial en la forma de correr y de fabricar zapatillas a partir de una sola pregunta: ¿por qué me duele?",
  partes: [
    {
      titulo: "La pregunta del pie",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Christopher McDougall era un periodista grande y pesado que corría de vez en cuando y siempre acababa lesionado. Fue al médico con un dolor en el pie y le dijeron lo de siempre: que su cuerpo no estaba hecho para correr, que dejara de hacerlo y se comprara una bicicleta. Le pareció una respuesta insuficiente y decidió preguntar en otro sitio.",
        },
        {
          forma: "clave",
          rotulo: "La pregunta que abre el libro",
          frase: "Si correr nos rompe, ¿por qué el ochenta por ciento de los corredores se lesiona cada año haciendo lo que la especie lleva haciendo dos millones de años?",
        },
        {
          forma: "arte",
          texto:
            "Buscando respuestas encontró referencias sueltas a un pueblo del norte de México, en la sierra Tarahumara: los rarámuri. Corren distancias enormes por barrancos, con sandalias hechas de neumático viejo, hasta edades muy avanzadas, y apenas se lesionan. Decidió ir a buscarlos.",
          arte: "mapa",
        },
        {
          forma: "texto",
          texto:
            "El libro es el relato de ese viaje, y funciona como una novela de aventuras: para llegar hasta ellos necesita a un americano medio desaparecido que vive en la sierra y al que llaman Caballo Blanco. La historia culmina en una carrera improvisada de ochenta kilómetros entre corredores de élite estadounidenses y rarámuris, dentro del cañón.",
        },
      ],
    },

    {
      titulo: "La zapatilla",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La parte que hizo ruido es su acusación contra la industria del calzado deportivo. Su argumento: la zapatilla moderna con amortiguación gruesa se inventó a principios de los setenta, y desde entonces las lesiones de corredor no han bajado. En algunos estudios, los que usan calzado más caro se lesionan igual o más.",
        },
        {
          forma: "clave",
          rotulo: "La explicación que propone",
          frase: "Un talón muy acolchado te deja aterrizar de talón sin que duela. Y aterrizar de talón es lo que manda el impacto arriba, a la rodilla y la cadera.",
        },
        {
          forma: "texto",
          texto:
            "Descalzo, nadie corre así: el dolor te obliga a apoyar la parte media o delantera del pie, con la zancada más corta y las rodillas algo flexionadas, y todo el pie actúa como muelle. La amortiguación, dice McDougall, no protege — silencia la señal que te haría corregir.",
        },
        {
          forma: "arte",
          texto:
            "Se apoya también en la hipótesis de la resistencia por persistencia: los humanos somos malísimos en velocidad punta y extraordinarios en distancia con calor. Sudamos por toda la piel, no jadeamos para enfriarnos, tenemos tendón de Aquiles y glúteos enormes. Hay pueblos cazadores que perseguían antílopes a pie durante horas hasta que el animal caía por sobrecalentamiento.",
          arte: "explorar",
        },
      ],
    },

    {
      titulo: "Lo que provocó",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "El impacto comercial fue inmediato y enorme. Las ventas de calzado minimalista se dispararon, aparecieron zapatillas con dedos separados y todas las marcas grandes sacaron su línea «natural». Miles de personas se pusieron a correr descalzas de un día para otro.",
        },
        {
          forma: "texto",
          texto:
            "Y muchas se lesionaron. Pasar de veinte años con amortiguación a correr descalzo sin transición sobrecarga unos pies y unos gemelos que no están preparados: hubo una oleada de fracturas por estrés en los metatarsianos. Una gran marca acabó pagando una indemnización millonaria por prometer beneficios musculares que no pudo demostrar.",
        },
        {
          forma: "clave",
          rotulo: "El matiz que el libro no da",
          frase: "El problema no era la zapatilla. Era cambiar de técnica de golpe y sin adaptación.",
        },
        {
          forma: "texto",
          texto:
            "La investigación posterior ha dejado el asunto en tablas: no hay pruebas sólidas de que el calzado minimalista prevenga lesiones, ni de que la amortiguación las cause. Lo que sí parece importar es el volumen —cuánto aumentas cada semana—, la cadencia y la fuerza previa. Es una conclusión mucho menos épica.",
        },
      ],
    },

    {
      titulo: "Lo que queda",
      tarjetas: [
        {
          forma: "arte",
          texto:
            "Como periodismo, el libro es extraordinario: engancha desde la primera página y tiene personajes que parecen inventados. Como ciencia, hay que leerlo con distancia — McDougall selecciona los estudios que le convienen, presenta hipótesis discutidas como hechos y romantiza a los rarámuri, cuya realidad incluye pobreza severa, y cuyas carreras tradicionales van acompañadas de apuestas y alcohol.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "También conviene saber el final que el libro no cuenta: la carrera del cañón se convirtió en una ultramaratón anual, y Caballo Blanco —Micah True— murió en 2012 corriendo solo por el monte, a los cincuenta y ocho años.",
        },
        {
          forma: "texto",
          texto:
            "Lo que sí ha quedado, y no es poco: la idea de que la técnica de carrera importa y se puede entrenar, la atención a la cadencia, y el hecho de que millones de personas se plantearan por primera vez cómo apoyan el pie. Antes de 2009 eso no lo discutía nadie fuera de la élite.",
        },
        {
          forma: "clave",
          rotulo: "Para llevarte",
          frase: "Correr no rompe el cuerpo. Lo rompe correr mucho más de golpe, sin haberle enseñado antes a hacerlo.",
        },
        {
          forma: "texto",
          texto:
            "Queda una idea del libro que ha aguantado mejor que todo lo demás, y no tiene que ver con el calzado. McDougall observa que los rarámuri corren sonriendo, en grupo y sin cronómetro, y que para ellos correr no es entrenamiento ni sacrificio: es una fiesta que dura horas. Su tesis es que el ser humano evolucionó para hacerlo así, y que convertirlo en una tarea medida —ritmos, marcas, culpa por no cumplir— es lo que hace que la mayoría lo abandone a los tres meses. Corre despacio, acompañado y sin mirar el reloj, dice, y no tendrás que obligarte.",
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
    "Es el libro que cambió la conversación pública sobre comida, y su consejo final cabe en siete palabras.",
  partes: [
    {
      titulo: "La pregunta del omnívoro",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Un koala no tiene ninguna duda sobre qué cenar. Nosotros sí: podemos comer casi cualquier cosa, y por eso tenemos que decidir. Pollan llama a eso el dilema del omnívoro, y sostiene que en las últimas décadas hemos perdido lo único que nos ayudaba a resolverlo — una cultura alimentaria heredada que decía qué es comida y qué no.",
        },
        {
          forma: "clave",
          rotulo: "El síntoma",
          frase: "Somos el único país donde una nación entera cambia de dieta cada pocos años según lo que diga el titular de turno.",
        },
        {
          forma: "arte",
          texto:
            "Su método es de periodista, y es lo que hace el libro. Elige cuatro comidas y las persigue hacia atrás hasta el suelo del que salieron: un menú de comida rápida, una cena de supermercado ecológico, una comida de una granja pequeña y una que él mismo caza y recolecta.",
          arte: "mapa",
        },
      ],
    },

    {
      titulo: "Todo es maíz",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "Al rastrear el menú de comida rápida se encuentra con algo que no esperaba. La carne del hamburguesa viene de una vaca alimentada con maíz. El refresco es jarabe de maíz. El pollo, maíz. Las patatas se fríen en aceite de maíz. Los espesantes, los emulgentes y el colorante son derivados del maíz.",
        },
        {
          forma: "clave",
          rotulo: "El análisis",
          frase: "Un análisis isotópico de un estadounidense medio delata que buena parte del carbono de su cuerpo procede del maíz.",
        },
        {
          forma: "texto",
          texto:
            "Explica cómo se llegó ahí: subvenciones que premian producir la máxima cantidad posible, una montaña de grano barato que hay que colocar en algún sitio, y una industria que aprendió a convertirlo en cualquier cosa. El maíz no se impuso porque fuera lo mejor, sino porque era lo más barato de sobreproducir.",
        },
        {
          forma: "texto",
          texto:
            "La consecuencia en las granjas industriales es dura de leer. La vaca es un animal diseñado para digerir hierba; alimentarla con grano le acidifica el estómago y la enferma, lo que obliga a administrarle antibióticos de forma rutinaria. El sistema funciona solo mientras la medicación lo sostenga.",
        },
      ],
    },

    {
      titulo: "Lo ecológico industrial",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La segunda comida es la que más incomodó a sus lectores. Pollan sigue la etiqueta de un supermercado ecológico de gama alta y descubre que buena parte de ese sector se ha industrializado igual: monocultivos gigantes, gallinas «camperas» con una puerta al exterior que casi ninguna usa, y lechugas que recorren miles de kilómetros refrigeradas.",
        },
        {
          forma: "clave",
          rotulo: "Su conclusión",
          frase: "Lo ecológico industrial es mejor que lo convencional, pero muchísimo menos de lo que promete la etiqueta.",
        },
        {
          forma: "texto",
          texto:
            "Su reproche no es al sello, que sí garantiza cosas reales sobre pesticidas y antibióticos, sino al relato que lo envuelve: fotos de granjas familiares y vacas en el prado impresas en envases de productos que salen de explotaciones tan grandes como cualquier otra.",
        },
        {
          forma: "arte",
          texto:
            "Frente a eso pasa una semana en una granja pequeña de Virginia donde las vacas pastan, y detrás van las gallinas —tres días después, el tiempo exacto para que las larvas hayan crecido en el estiércol— picoteando y fertilizando. Nadie compra fertilizante ni antibióticos. Es el capítulo más luminoso del libro.",
          arte: "explorar",
        },
        {
          forma: "texto",
          texto:
            "El propio granjero le señala el problema: ese modelo no vende a distancia, exige más gente trabajando y sale más caro. No es escalable a un país entero con los precios actuales, y Pollan no esconde esa objeción.",
        },
      ],
    },

    {
      titulo: "Siete palabras",
      tarjetas: [
        {
          forma: "texto",
          texto:
            "La cuarta comida se la prepara él: caza un jabalí, recoge setas con un experto y hace pan con levadura silvestre. El capítulo es en parte una broma sobre sí mismo —es un intelectual urbano bastante inútil en el monte— y en parte un argumento serio sobre lo que se pierde cuando no sabes de dónde viene nada de lo que comes.",
        },
        {
          forma: "clave",
          rotulo: "La regla que le hizo famoso",
          frase: "Come comida. No demasiada. Sobre todo plantas.",
        },
        {
          forma: "texto",
          texto:
            "Pollan añade una crítica que se ha vuelto más relevante con los años: lo que llama el nutricionismo, la costumbre de juzgar la comida por sus componentes aislados en vez de por lo que es. Primero el enemigo fue la grasa, y la industria llenó los lineales de productos desnatados cargados de azúcar. Después el azúcar, y llegaron los edulcorantes. Cada vez que la ciencia señala una molécula, aparece un producto que la elimina y que resulta estar más procesado que el original. Su conclusión: si un alimento necesita una etiqueta que explique por qué es sano, sospecha.",
        },
        {
          forma: "texto",
          texto:
            "Con «comida» quiere decir algo concreto: lo que tu bisabuela habría reconocido como tal. Si tiene más de cinco ingredientes, o alguno que no sabrías pronunciar, o si se anuncia por lo saludable que es, probablemente sea un producto y no un alimento. Los alimentos de verdad no llevan campaña publicitaria.",
        },
        {
          forma: "arte",
          texto:
            "Sus críticas son justas y conviene tenerlas: el libro es muy estadounidense —las subvenciones al maíz no son el problema europeo—, su ideal de granja pequeña es económicamente inviable a gran escala, y sus consejos son bastante más fáciles de seguir con dinero y tiempo que sin ellos.",
          arte: "noche",
        },
        {
          forma: "texto",
          texto:
            "Aun así, cambió la conversación. Buena parte de lo que hoy se da por sabido sobre etiquetas, ultraprocesados y comida local empezó a discutirse a gran escala a partir de este libro.",
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
