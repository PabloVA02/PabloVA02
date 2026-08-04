import type { Short } from "../shorts";

/* ==========================================================================
   Radio.

   El primer medio que entró en las casas y el primero al que se acusó de
   volver tonta a la gente. El riesgo del tema es la nostalgia: aparatos de
   madera, locutores con voz grave y la familia alrededor.

   La regla del tema: la radio interesa cuando ALGUIEN INTENTA CONTROLARLA
   y no puede. Un físico que dice que la señal no ha podido llegar. Unos
   periódicos que inflan un pánico para desprestigiarla. Un gobierno que
   corta el suministro a unos barcos porque no puede cortar la emisión.

   Y siempre se explica el truco físico o legal en lenguaje de calle: por
   qué rebota una onda, por qué un barco fondeado no obedece a nadie.
   ========================================================================== */

export const RADIO: Short[] = [
  {
    id: "senal-transatlantica",
    titulo: "Tres pitidos cruzaron el Atlántico sin cable",
    gancho: "Los físicos dijeron que era imposible, porque la Tierra es curva. Tenían razón y se equivocaban.",
    categoria: "Radio",
    color: "var(--slate)",
    encargo: "Una cometa sujeta a un cable subiendo sobre un acantilado gris y ventoso.",
    entrada:
      "Terranova, en el extremo este de Canadá, diciembre de 1901. Un joven italiano espera en una habitación fría de un antiguo hospital, con un auricular pegado a la oreja y una antena de cien metros colgada de una cometa. Al otro lado del océano, a tres mil kilómetros, una estación emite sin descanso la letra ese.",
    paginas: [
      {
        rotulo: "La cometa",
        texto:
          "El experimento parecía una temeridad. Las antenas de las dos estaciones se habían venido abajo en los temporales de las semanas anteriores, así que en un lado se improvisó una con globos y cometas y en el otro se levantó a toda prisa un anillo de postes. El código elegido fue el más sencillo posible, la letra ese en morse: tres puntos, tres pitidos cortos, imposibles de confundir con otra cosa. Aquella tarde, con el viento zarandeando la cometa, el italiano y su ayudante creyeron oír los tres golpes secos varias veces entre el ruido. No había grabación, ni testigos, ni instrumentos.",
        destacado: { tipo: "frase", frase: "Tres puntos en morse, oídos entre el ruido, sin grabar." },
      },
      {
        rotulo: "La discusión",
        texto:
          "El anuncio provocó incredulidad inmediata entre los físicos. Las ondas de radio viajan en línea recta y la Tierra es curva: entre los dos puntos había una joroba de agua de más de cien kilómetros de altura, así que la señal tendría que haberse escapado hacia el espacio en lugar de bajar al otro lado. Varios dijeron abiertamente que aquel hombre había oído ruido atmosférico y se estaba engañando a sí mismo. La respuesta llegó unos meses después y por otro camino: dos investigadores propusieron por separado que en lo alto de la atmósfera hay una capa cargada que devuelve las ondas hacia abajo, como un techo.",
        destacado: { tipo: "cifra", cifra: "3.000", unidad: "kilómetros, con una joroba de agua en medio" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquella capa existe, se llama ionosfera y no se demostró hasta 1924, más de veinte años más tarde. La radio de onda corta rebota en ella, y por eso una emisora pequeña puede escucharse en otro continente de madrugada, cuando la capa sube y refleja mejor. Sigue habiendo dudas técnicas sobre si aquella tarde se oyó de verdad la señal o fue una interferencia, y hay cálculos serios en las dos direcciones. Lo indiscutible es lo que vino detrás: cinco años después ya se mandaban mensajes comerciales entre continentes, y ningún barco volvió a salir a alta mar completamente incomunicado.",
      },
    ],
  },

  {
    id: "panico-marciano",
    titulo: "El pánico marciano de la radio fue exagerado",
    gancho: "La emisión de 1938 existió. La avalancha de gente huyendo la inflaron los periódicos del día siguiente.",
    categoria: "Radio",
    color: "var(--plum)",
    curioso: true,
    encargo: "Un micrófono de radio antiguo de rejilla metálica sobre una mesa vacía.",
    entrada:
      "Estados Unidos, la noche de Halloween de 1938. Una emisora emite una adaptación de una novela de invasión extraterrestre montada como si fuera un informativo, con boletines que interrumpen un programa de música. Al día siguiente los periódicos abren con miles de personas huyendo de sus casas presas del pánico. La historia se sigue contando así noventa años después.",
    paginas: [
      {
        rotulo: "La emisión",
        texto:
          "El montaje era ingenioso. Empezaba con una orquesta y unos partes meteorológicos, y las noticias de la invasión iban entrando poco a poco, cada vez más seguidas, con corresponsales que se quedaban callados a media frase. Se avisó al principio, a mitad y al final de que aquello era una obra de ficción. El programa tenía además poca audiencia: competía con el espectáculo de humor más escuchado del país y las mediciones de esa noche le dan alrededor del dos por ciento de los oyentes. Hubo llamadas a comisarías y a la emisora, eso está documentado, y también gente preguntando a qué hora lo repetían.",
        destacado: { tipo: "cifra", cifra: "2 %", unidad: "de la audiencia escuchó el programa" },
      },
      {
        rotulo: "Los periódicos",
        texto:
          "Lo que vino después explica bastante. La prensa escrita llevaba años perdiendo publicidad frente a la radio y aquel episodio le venía de perlas para sostener que el medio nuevo era irresponsable y necesitaba control. Los diarios publicaron más de doce mil artículos en tres semanas, muchos con anécdotas de segunda mano y sin un solo nombre comprobable. Los estudios posteriores que han buscado ingresos hospitalarios, denuncias o daños de aquella noche no encuentran ninguna avalancha. El propio director del programa, que al principio se asustó, entendió enseguida que la leyenda le convenía y nunca hizo nada por desmentirla.",
        destacado: { tipo: "frase", frase: "Doce mil artículos en tres semanas, casi ninguno con nombres." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquel director era un desconocido la noche anterior y un famoso a la mañana siguiente; con esa fama consiguió el contrato de cine más libre que se había firmado nunca con un debutante y rodó una de las películas más influyentes de la historia. La leyenda del pánico ha sobrevivido porque encaja con algo que nos gusta creer: que el público es crédulo y que un medio nuevo lo manipula. Se repitió luego con la televisión, con los videojuegos y con las redes sociales. La emisión de aquella noche existió y era excelente; la gente huyendo por las calles, mucho menos.",
      },
    ],
  },

  {
    id: "radios-piratas",
    titulo: "La radio joven se emitía desde un barco",
    gancho: "El país tenía una sola emisora y apenas ponía discos. Unos barcos fondeados fuera de la ley lo rompieron.",
    categoria: "Radio",
    color: "var(--clay)",
    encargo: "Un barco pequeño con una antena altísima fondeado en un mar plano y gris.",
    entrada:
      "Reino Unido, marzo de 1964. Solo existe una radio en el país, la pública, y emite muy poca música moderna porque un acuerdo con los músicos le limita las horas de discos al día. Un empresario irlandés de veintitrés años compra un barco de carga viejo, le monta una antena enorme y lo fondea a ocho kilómetros de la costa.",
    paginas: [
      {
        rotulo: "Fuera de la ley",
        texto:
          "El truco estaba en la distancia. Las aguas territoriales llegaban entonces a cinco kilómetros de la orilla, así que un barco fondeado un poco más allá no estaba sometido a ninguna ley británica y podía emitir sin licencia hacia tierra firme. La emisora empezó a poner música moderna todo el día, sin permiso de nadie y con publicidad pagada. En pocos meses la escuchaban millones de personas y aparecieron una decena de imitadores: otros barcos, y hasta unos fuertes antiaéreos abandonados sobre pilotes en un estuario, ocupados por locutores que subían por una escalera de hierro con los discos en una bolsa.",
        destacado: { tipo: "frase", frase: "Emitían desde fuertes antiaéreos abandonados sobre pilotes." },
      },
      {
        rotulo: "El cierre",
        texto:
          "El gobierno tardó tres años en reaccionar y lo hizo por el lado del dinero, no por el de las ondas: en 1967 aprobó una ley que no prohibía emitir, porque no podía, sino abastecer a los barcos, anunciarse en ellos o trabajar a bordo siendo británico. Sin comida, sin combustible y sin publicidad, casi todas cerraron en pocas semanas. Ese mismo año la radio pública reorganizó sus emisoras, creó un canal dedicado a la música moderna y contrató a los locutores de los barcos, que pasaron de piratas a funcionarios sin cambiar de repertorio ni de manera de hablar.",
        destacado: { tipo: "cifra", cifra: "1967", unidad: "la ley que las dejó sin suministros" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Una de aquellas emisoras aguantó fuera, cambiando de barco y de bandera, y todavía existe, ahora legal y emitiendo por internet. Las radios de a bordo se llevaron por delante un monopolio público que llevaba cuarenta años sin discutirse, y el modelo se copió en media Europa: en Holanda, en Escandinavia y también en España, donde años más tarde hubo emisoras libres emitiendo desde pisos con equipos caseros. Aquel barco fondeado a ocho kilómetros de la playa acabó cambiando la ley que lo perseguía, que es lo más raro que le puede pasar a un pirata.",
      },
    ],
  },
];
