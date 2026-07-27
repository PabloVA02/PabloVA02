import type { Short } from "../shorts";

/* ==========================================================================
   Espionaje.

   El tema con el material más divertido y la documentación más resbaladiza:
   media bibliografía sobre servicios secretos son memorias interesadas y la
   otra media, expedientes desclasificados a medias.

   La regla del tema: solo entra lo que está confirmado por una desclasificación
   o por un objeto que se puede ir a ver a un museo. Si la anécdota famosa
   depende del testimonio de una sola persona, se dice.

   Y se prefiere el ingenio a la violencia. Un micrófono sin pilas, un cadáver
   con la documentación equivocada, una emisora que lleva cuarenta años
   repitiendo un zumbido: las historias buenas de este oficio son de gente
   resolviendo un problema técnico, no de tiroteos.
   ========================================================================== */

export const ESPIONAJE: Short[] = [
  {
    id: "sello-theremin",
    titulo: "Un micrófono sin pilas escuchó siete años",
    gancho: "Iba dentro de un regalo colgado en la pared del embajador. No tenía nada que detectar.",
    categoria: "Espionaje",
    color: "var(--slate)",
    encargo: "Un escudo de madera tallado con un águila, colgado en una pared con panelado.",
    entrada:
      "En 1945, un grupo de niños de una organización juvenil soviética entregó al embajador de Estados Unidos en Moscú un regalo de buena voluntad: un escudo con el águila americana, tallado en madera con notable primor. El embajador lo colgó en la pared de su despacho, en la residencia oficial. Estuvo ahí siete años, y durante siete años funcionó.",
    paginas: [
      {
        rotulo: "Sin pilas",
        texto:
          "Dentro no había batería, ni circuito, ni nada que emitiera señal por su cuenta, y por eso los barridos periódicos con detectores no encontraban nada: no había nada encendido que encontrar. El aparato lo había diseñado Lev Termen, más conocido como Léon Theremin, el mismo inventor del instrumento musical que se toca sin tocarlo. Era una cavidad resonante con una membrana y una antena. Desde un edificio cercano se le apuntaba con un haz de radio; la voz de la habitación hacía vibrar la membrana, eso alteraba la señal reflejada, y la conversación viajaba de vuelta montada en el rebote.",
        destacado: {
          tipo: "frase",
          frase: "No emitía nada. Solo devolvía, deformada, la señal que le mandaban.",
        },
      },
      {
        rotulo: "El hallazgo",
        texto:
          "Lo encontraron por casualidad en <strong>1952</strong>: un operador de radio británico captó en su receptor una conversación en inglés que procedía, inexplicablemente, de la residencia del embajador estadounidense. A partir de ahí, un registro minucioso dio con el escudo. Cuatro embajadores lo habían tenido colgado en su despacho. Estados Unidos guardó silencio durante ocho años más, hasta que en 1960 le convino sacarlo: tras el derribo de un avión espía U-2 sobre territorio soviético, su representante lo exhibió ante las cámaras en el Consejo de Seguridad de la ONU, a modo de respuesta.",
        destacado: { tipo: "cifra", cifra: "7", unidad: "años colgado en el despacho" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El principio que usaba —un dispositivo pasivo que solo responde cuando alguien lo interroga con energía desde fuera— es el mismo en el que se basan hoy las etiquetas antirrobo de las tiendas, los abonos de transporte sin contacto y los chips que identifican a una mascota. No se inventó para eso, pero la genealogía es directa. El escudo original se conserva en el museo de la Agencia Nacional de Seguridad estadounidense, y quienes lo han visto de cerca coinciden en lo mismo: es, sobre todo, una talla de madera bastante buena.",
      },
    ],
  },

  {
    id: "mincemeat",
    titulo: "Un cadáver con documentos falsos engañó a Hitler",
    gancho: "Lo soltó un submarino frente a Huelva con una cartera esposada a la muñeca.",
    categoria: "Espionaje",
    color: "var(--plum)",
    encargo: "Un maletín de cuero antiguo con una cadena y una esposa metálica atada al asa.",
    entrada:
      "30 de abril de 1943, amanecer, aguas frente a la costa de Huelva. Un submarino británico emerge y su tripulación deposita en el mar el cuerpo de un hombre con uniforme de oficial de Marina, chaleco salvavidas y una cartera de cuero encadenada al cinturón. La marea lo lleva a la playa. Dentro de la cartera hay documentos secretos, y todos son falsos.",
    paginas: [
      {
        rotulo: "El personaje",
        texto:
          "El cuerpo era el de Glyndwr Michael, un vagabundo galés muerto en Londres, sin familia que reclamara nada. La inteligencia británica lo convirtió en el comandante William Martin, y esa conversión es la parte más meticulosa de la operación: le fabricaron una novia con foto y cartas de amor, entradas de teatro usadas, una factura de una camisería, un aviso del banco por un descubierto. Todo lo que llevaba encima estaba pensado para que un investigador que buscara inconsistencias encontrara, en cambio, la vida desordenada y verosímil de un hombre real.",
        destacado: {
          tipo: "frase",
          frase: "Lo creíble no fue el documento secreto. Fue la factura de la camisería.",
        },
      },
      {
        rotulo: "El anzuelo",
        texto:
          "Los papeles importantes daban a entender que el desembarco aliado en el Mediterráneo apuntaba a Grecia y Cerdeña, y que Sicilia era una maniobra de distracción. España era neutral pero su aparato militar filtraba información a Berlín, y eso se sabía: la operación contaba con ello. Los documentos llegaron a manos alemanas, se consideraron auténticos y Hitler ordenó reforzar Grecia y Cerdeña con divisiones enteras. Cuando los aliados desembarcaron en Sicilia en julio de <strong>1943</strong>, buena parte de las tropas que podían haberles esperado en la playa estaba a cientos de kilómetros, en otro sitio.",
        destacado: { tipo: "cifra", cifra: "1943", unidad: "el desembarco fue en Sicilia" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El cuerpo está enterrado en el cementerio de Huelva, y durante décadas la lápida llevó solo el nombre falso; en 1998, tras confirmarse la identidad, se añadió una línea al pie reconociendo a Glyndwr Michael. La operación se estudia como el ejemplo canónico de engaño militar y de una idea que vale fuera de la guerra: para que alguien se crea algo grande, lo que hay que cuidar no es el mensaje principal, sino los detalles pequeños y prescindibles de alrededor, esos que a nadie se le ocurriría suponer fabricados uno por uno.",
      },
    ],
  },

  {
    id: "emisoras-numeros",
    titulo: "Hay emisoras que solo dictan números, y siguen",
    gancho: "Una lleva desde los años ochenta emitiendo un zumbido en la misma frecuencia.",
    categoria: "Espionaje",
    color: "var(--clay)",
    curioso: true,
    encargo: "Un receptor de radio de onda corta con el dial iluminado, en penumbra.",
    entrada:
      "Si se recorre la onda corta con un receptor, entre emisoras internacionales y conversaciones de radioaficionados aparecen de vez en cuando estaciones que no dicen nada: una voz recita series de números o de letras, sin presentación y sin despedida, y desaparece. Llevan haciéndolo desde la Guerra Fría y varias siguen en el aire ahora mismo.",
    paginas: [
      {
        rotulo: "El zumbido",
        texto:
          "La más célebre emite en <strong>4.625</strong> kilohercios y se conoce entre los aficionados como el Zumbador. Desde principios de los ochenta repite un tono corto, una y otra vez, unas veinticinco veces por minuto, día y noche. Cada cierto tiempo el zumbido se interrumpe y una voz lee una serie de palabras y números, y luego vuelve el tono. Nadie ha reivindicado nunca la emisora; el rastreo de la señal la sitúa en territorio ruso, y ha cambiado de ubicación al menos una vez, cosa que se detectó porque el zumbido se cortó unos días.",
        destacado: { tipo: "cifra", cifra: "4.625", unidad: "kHz, emitiendo desde los ochenta" },
      },
      {
        rotulo: "Por qué así",
        texto:
          "El motivo de un método tan tosco es exactamente su tosquedad. Un mensaje cifrado con libreta de un solo uso —una clave aleatoria, del mismo tamaño que el mensaje y usada una única vez— es indescifrable si se hace bien, y eso está demostrado matemáticamente. Y la radio de onda corta tiene una virtud que ninguna tecnología moderna iguala: el receptor no emite nada. Un agente con una radio comprada en cualquier tienda es invisible, mientras que cualquier cosa conectada a una red deja rastro. Por eso el sistema sobrevive a internet.",
        destacado: {
          tipo: "frase",
          frase: "La ventaja no es el cifrado: es que escuchar no deja rastro.",
        },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "Que no es folclore lo demuestran los tribunales. En varios procesos por espionaje en Estados Unidos y en Europa, la acusación presentó como prueba receptores de onda corta y libretas de claves halladas en los domicilios, y en algún caso se aportaron transcripciones de las emisiones correspondientes. Los aficionados llevan décadas catalogando estas estaciones y poniéndoles nombre por su sintonía o su voz, con archivos sonoros de miles de horas. Se sabe quién emite, más o menos. Lo que dicen, salvo casos concretos aparecidos en un juicio, no lo sabe nadie.",
      },
    ],
  },
];
