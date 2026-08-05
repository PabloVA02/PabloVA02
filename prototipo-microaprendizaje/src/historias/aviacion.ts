import type { Short } from "../shorts";

/* ==========================================================================
   Aviación.

   Volar es la actividad humana donde mejor se ve una idea incómoda: casi
   todas las normas de seguridad están escritas después de un accidente, y
   muchas veces con el nombre del muerto en el expediente.

   La regla del tema: la historia va de un PROCEDIMIENTO, no de una máquina.
   Una lista de papel, un agujero de tres milímetros en una ventanilla, una
   caja que graba. Objetos y rutinas pequeñas, cada una nacida de un desastre
   concreto, que es lo que convierte una cifra de seguridad en algo que se
   puede contar.

   Nada de romanticismo de pioneros. Lo interesante de este oficio no es
   quién voló primero, sino quién se sentó a escribir por qué se cayó.
   ========================================================================== */

export const AVIACION: Short[] = [
  {
    id: "lista-comprobacion",
    titulo: "La lista nació de un choque",
    gancho: "El avión más avanzado de 1935 se estrelló por una palanca que nadie soltó.",
    categoria: "Aviación",
    color: "var(--slate)",
    encargo: "Una tablilla de vuelo con una lista mecanografiada sujeta con pinza metálica.",
    entrada:
      "30 de octubre de 1935, base aérea de Wright Field, Ohio. El Ejército estadounidense evalúa el bombardero que quiere comprar y el favorito es el Boeing 299, una máquina enorme, cuatro motores, más instrumentos de los que nadie había visto en una cabina. Despega, sube unos setenta metros, se encabrita y cae. Mueren dos de los cinco tripulantes.",
    paginas: [
      {
        rotulo: "El pestillo",
        texto:
          "La investigación no encontró ningún fallo mecánico. La causa fue un pestillo: un seguro que inmoviliza los mandos de vuelo mientras el avión está aparcado, para que el viento no golpee las superficies. Se había quedado puesto. El piloto era el mayor Ployer Hill, uno de los más veteranos del cuerpo de pruebas del Ejército, y aun así se le pasó. La prensa resumió el asunto con una frase que estuvo a punto de matar el proyecto: aquello era demasiado avión para que lo pilotara un solo hombre. Boeing perdió el concurso y Douglas se llevó el contrato.",
        destacado: {
          tipo: "frase",
          frase: "«Demasiado avión para un solo hombre.» El fallo fue una palanca.",
        },
      },
      {
        rotulo: "La hoja de papel",
        texto:
          "El Ejército compró de todos modos trece unidades para seguir probando, y un grupo de pilotos de pruebas se puso a resolver el problema. Descartaron alargar la formación, porque Hill ya era el más experto que había. Lo que hicieron fue mucho más humilde: escribieron a máquina una lista de comprobaciones que cabía en una tarjeta, con lo que había que verificar antes de despegar, al despegar, antes de aterrizar y al aterrizar. Con esa tarjeta, aquellos aviones volaron cerca de <strong>3 millones</strong> de kilómetros sin un accidente grave, y el modelo acabó siendo el B-17.",
        destacado: { tipo: "cifra", cifra: "1935", unidad: "el año de la primera lista de vuelo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La idea se ha ido copiando fuera de las cabinas, y siempre con la misma resistencia inicial: quien domina un oficio suele considerar humillante tener que leer una lista. En quirófano tardó setenta años en entrar. Un estudio de la Organización Mundial de la Salud publicado en 2009, con ocho hospitales de países muy distintos, midió que una lista de diecinueve puntos leída en voz alta antes de operar reducía de forma notable las complicaciones graves y la mortalidad. La lección de fondo del accidente de 1935 sigue intacta: el experto no falla por ignorancia, falla por despiste.",
      },
    ],
  },

  {
    id: "agujero-ventanilla",
    titulo: "El agujero de la ventanilla",
    gancho: "No es un defecto ni un desgaste: decide qué cristal aguanta la presión.",
    categoria: "Aviación",
    color: "var(--sage)",
    curioso: true,
    encargo: "Una ventanilla ovalada de avión a contraluz con el agujero inferior bien visible.",
    entrada:
      "Casi todo el mundo lo ha visto y muy poca gente sabe qué hace ahí: un agujero diminuto en la parte baja de la ventanilla del avión, siempre en el mismo sitio. No es un defecto de fabricación, ni una picadura, ni el resultado del uso. Está puesto a propósito, tiene nombre técnico y hace dos trabajos a la vez.",
    paginas: [
      {
        rotulo: "Tres cristales",
        texto:
          "Una ventanilla no es un cristal, son tres láminas de acrílico separadas por huecos de aire. La exterior está pegada al fuselaje y es la que se enfrenta al vacío de fuera; la intermedia lleva el agujero; la interior, la que se toca con el dedo, es solo una protección contra arañazos y golpes. A once mil metros de altura, la cabina está presurizada y fuera casi no hay aire, así que la diferencia de presión entre un lado y otro del conjunto es enorme y hay que decidir con precisión cuál de las láminas la soporta.",
        destacado: {
          tipo: "frase",
          frase: "El agujero decide qué cristal trabaja y cuál descansa.",
        },
      },
      {
        rotulo: "Qué hace",
        texto:
          "El agujero comunica el hueco entre la lámina exterior y la intermedia con el aire de la cabina. Al igualar la presión en ese espacio, toda la carga recae sobre la lámina exterior, que es la diseñada para aguantarla; la intermedia queda descargada y actúa como reserva, capaz de sostenerlo todo si la de fuera se agrieta. Y hace un segundo trabajo más visible: ese hueco se llenaría de vaho y de hielo al enfriarse, porque el aire de cabina lleva humedad, y el agujero permite que la humedad se ventile en vez de condensarse ahí dentro.",
        destacado: { tipo: "cifra", cifra: "3", unidad: "láminas, y solo una aguanta la presión" },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "Ese mismo enfoque —que una pieza cargue y otra espere sin hacer nada— está en todas partes en un avión, y explica también la forma ovalada. Los primeros aviones comerciales presurizados, los De Havilland Comet, llevaban ventanas casi cuadradas, y en 1954 dos se desintegraron en vuelo. La investigación encontró que las esquinas concentraban la tensión de los ciclos de presurización hasta abrir grietas por fatiga del metal. Desde entonces, todas las ventanillas del mundo son redondeadas, y la razón por la que miras el mar por un óvalo es que hace setenta años se cayeron dos aviones.",
      },
    ],
  },

  {
    id: "caja-negra-naranja",
    titulo: "La caja negra es naranja",
    gancho: "Su inventor tardó años en convencer a nadie. Le dijeron que no servía.",
    categoria: "Aviación",
    color: "var(--clay)",
    encargo: "Un registrador de vuelo naranja, rayado y abollado, sobre fondo neutro.",
    entrada:
      "En los años cincuenta, un químico australiano llamado David Warren trabajaba en los laboratorios de investigación aeronáutica de Melbourne, investigando por qué se desintegraban en el aire los primeros reactores comerciales. Se le ocurrió una idea sencilla y le costó casi diez años lograr que alguien la escuchara: grabar en el propio avión lo que decía la tripulación y lo que hacían los instrumentos.",
    paginas: [
      {
        rotulo: "El rechazo",
        texto:
          "La reacción fue mala en todas las puertas a las que llamó. La autoridad aeronáutica australiana respondió que el aparato no tenía interés inmediato. El estamento militar lo vio como una manera de espiar a sus propios pilotos. Y desde el Reino Unido llegó la valoración más citada del episodio: que un aparato así produciría más tacos que explicaciones. Los sindicatos de pilotos se opusieron durante años a que se grabara la cabina, y esa discusión —quién puede escuchar esas cintas y para qué— sigue viva hoy, con reglas estrictas sobre su uso fuera de una investigación.",
        destacado: {
          tipo: "frase",
          frase: "«Producirá más tacos que explicaciones.» Así lo despacharon.",
        },
      },
      {
        rotulo: "El giro",
        texto:
          "Lo salvó una visita. En 1958, un responsable británico de aviación pasó por el laboratorio, vio una demostración y se llevó a Warren a Londres a enseñarlo. A partir de ahí el interés fue creciendo. En <strong>1960</strong>, tras un accidente en Queensland cuya causa no se pudo determinar, Australia se convirtió en el primer país del mundo en exigir el registrador a bordo en los vuelos comerciales. Hoy hay dos aparatos separados: uno graba los parámetros de vuelo y otro las voces de la cabina, y ambos deben aguantar impactos y fuego durante media hora.",
        destacado: { tipo: "cifra", cifra: "1960", unidad: "Australia, el primer país en exigirla" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Del nombre lo único claro es que no viene del color: los registradores se pintan de naranja internacional precisamente para que se vean entre los restos, y llevan bandas reflectantes. El origen de «caja negra» se discute —hay quien lo atribuye a un periodista de los años cincuenta y quien lo remonta a la jerga de la electrónica militar, donde una caja negra es un aparato del que solo importa qué entra y qué sale—. Warren murió en 2010, y en su funeral el ataúd llevaba una placa con una frase escrita a mano: registrador de vuelo, no abrir.",
      },
    ],
  },
  {
    id: "wright-doce-segundos",
    titulo: "El primer vuelo duró doce segundos",
    gancho: "Lo vieron cinco personas. Los periódicos no fueron y la agencia de noticias descartó la nota.",
    categoria: "Aviación",
    color: "var(--slate)",
    encargo: "Una playa de arena gris con un aparato de tela y madera y un cielo blanco.",
    entrada:
      "Carolina del Norte, Estados Unidos, 17 de diciembre de 1903. Dos hermanos que tienen una tienda de bicicletas en Ohio llevan cuatro años yendo a una playa ventosa a probar planeadores. Aquella mañana hace un frío de perros y sopla viento de treinta kilómetros por hora. Han montado un motor sobre las alas y van a intentar despegar por sus propios medios.",
    paginas: [
      {
        rotulo: "Los doce segundos",
        texto:
          "Echaron a suertes quién pilotaba. El aparato recorrió unos doce metros de raíl, se levantó y voló treinta y seis metros en doce segundos antes de posarse en la arena, una distancia más corta que la envergadura de un avión de pasajeros actual. Aquel día hicieron cuatro vuelos y el último llegó a los doscientos sesenta metros y cincuenta y nueve segundos. Después, una racha de viento volcó el aparato en tierra y lo destrozó; no volvió a volar nunca. Había cinco testigos, cuatro de ellos del puesto de salvamento marítimo de al lado.",
        destacado: { tipo: "cifra", cifra: "36", unidad: "metros duró el primer vuelo" },
      },
      {
        rotulo: "Lo que nadie contó",
        texto:
          "Mandaron un telegrama a su padre pidiéndole que avisara a la prensa y la noticia se filtró mal: un periódico publicó una versión llena de errores y de frases inventadas, y varias agencias la descartaron por increíble. Ellos no ayudaron: durante cinco años volaron casi en secreto, sin exhibiciones públicas, porque temían que les copiaran el sistema de control antes de tener la patente. Aquello alimentó la sospecha de que mentían, y en Francia se les llegó a llamar farsantes en la prensa hasta que en 1908 volaron delante de todo el mundo.",
        destacado: { tipo: "frase", frase: "Varias agencias descartaron la noticia por increíble." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Lo que ellos aportaron no fue el motor ni las alas, que ya existían, sino la manera de girar: entendieron que un avión no vira como un barco sino inclinándose, y diseñaron un sistema para torcer las puntas de las alas que es el antepasado directo de lo que llevan hoy todos los aviones. Un trozo de la tela de aquel aparato viajó a la Luna en 1969, en el bolsillo de un astronauta. Y aquellos treinta y seis metros caben enteros dentro del pasillo de un avión grande de hoy.",
      },
    ],
  },

  {
    id: "gimli-sin-combustible",
    titulo: "Sin gasolina por confundir unidades",
    gancho: "Cargaron la mitad de combustible del necesario. El país acababa de cambiar de sistema de medidas.",
    categoria: "Aviación",
    color: "var(--slate)",
    encargo: "Una pista de aeródromo abandonada con hierba entre el asfalto y un hangar al fondo.",
    entrada:
      "Canadá, 23 de julio de 1983. Un avión con sesenta y nueve personas a bordo cruza el país a doce mil metros cuando se apagan los dos motores, uno detrás de otro, en menos de un minuto. No hay avería: se ha quedado sin combustible en pleno vuelo. El fallo empezó en tierra, con una multiplicación mal hecha.",
    paginas: [
      {
        rotulo: "El número",
        texto:
          "Canadá había cambiado hacía poco al sistema métrico y aquel era uno de los primeros aviones de la compañía que medía el combustible en kilos en vez de en libras. El indicador automático estaba averiado, así que había que calcular la carga a mano, con una varilla metida en el depósito que daba una medida en centímetros y una tabla para convertirla. El personal aplicó el factor de las libras, que es casi el doble que el de los kilos, y el resultado fue que subieron a bordo poco más de la mitad del combustible que hacía falta.",
        destacado: { tipo: "frase", frase: "Usaron el factor de las libras. Cargaron la mitad." },
      },
      {
        rotulo: "El planeador",
        texto:
          "Sin motores se pierde también la mayor parte de la electricidad y de la presión hidráulica, así que los pilotos se quedaron con unos pocos instrumentos de emergencia y con los mandos muy duros. Una turbinita de emergencia salió sola al viento y les dio lo justo para gobernar. El comandante era piloto de planeadores en su tiempo libre y aplicó lo que sabía: buscar el ángulo de descenso que más distancia da por cada metro perdido. El copiloto recordó un aeródromo militar cerrado a ochenta kilómetros, donde había estado destinado.",
        destacado: { tipo: "cifra", cifra: "80", unidad: "kilómetros planeando sin motores" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Lo que no sabían es que aquella base ya no era militar: la pista se usaba como circuito de coches y aquel día había carreras, con familias acampadas en la hierba de al lado. Llegaron demasiado altos y el comandante hizo una maniobra de planeador para perder altura de golpe, cruzando el aparato de costado. Al tocar, el tren delantero se plegó y el morro frenó contra el asfalto a pocos metros de la gente. No murió nadie; solo hubo heridas leves al evacuar por los toboganes, demasiado inclinados porque el morro estaba en el suelo. El avión se reparó y voló veinticinco años más.",
      },
    ],
  },

  {
    id: "ventanas-cuadradas",
    titulo: "Las ventanas cuadradas lo partieron",
    gancho: "Tres se partieron en el aire en un año. La culpa era de las esquinas.",
    categoria: "Aviación",
    color: "var(--clay)",
    encargo: "Una ventanilla ovalada de avión desde dentro, con el ala y nubes al fondo.",
    entrada:
      "Reino Unido, 1954. Hace dos años que vuela el primer avión de pasajeros con motores de reacción, un aparato precioso que ha puesto a la industria británica por delante de todos. En doce meses, tres de ellos se desintegran en pleno vuelo sin dar aviso ni tiempo a nada. Se suspenden todos los vuelos y empieza la investigación más grande hecha hasta entonces.",
    paginas: [
      {
        rotulo: "La piscina",
        texto:
          "Se recuperaron los restos del fondo del mar y se reconstruyó el avión sobre un armazón de madera, pieza a pieza. Después se metió otro aparato entero, completo, dentro de un tanque de agua gigante construido a propósito, y se le fue inflando y desinflando el fuselaje con bombas para simular miles de despegues y aterrizajes en unas semanas. A los tres mil ciclos, la estructura reventó dentro del tanque. Al examinar la grieta se vio que arrancaba justo en la esquina de una abertura del techo, cerca de una ventanilla cuadrada.",
        destacado: { tipo: "cifra", cifra: "3.000", unidad: "ciclos aguantó antes de reventar" },
      },
      {
        rotulo: "Las esquinas",
        texto:
          "El motivo es de geometría y hoy se enseña en primero de ingeniería. Un avión de reacción vuela mucho más alto, así que la diferencia de presión entre dentro y fuera es enorme y el fuselaje se hincha y se deshincha en cada vuelo como un globo. En una esquina en ángulo recto, esa tensión no se reparte: se concentra en el vértice, multiplicada por tres o por cuatro, y ahí acaba apareciendo una grieta que crece un poco en cada ciclo hasta que el metal cede de golpe. Un óvalo no tiene ningún punto donde concentrarse.",
        destacado: { tipo: "frase", frase: "En una esquina en ángulo recto la tensión se multiplica por cuatro." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquel avión perdió el mercado y la industria británica no volvió a encabezarlo nunca; los fabricantes estadounidenses aprovecharon los resultados de la investigación, que se publicaron enteros, para diseñar los suyos con ventanillas redondeadas. Es la razón de que hoy todas las ventanillas del mundo sean ovaladas, y también las puertas y las trampillas. La investigación inauguró además la costumbre de reconstruir los restos de un accidente sobre un armazón de madera, pieza a pieza, que sigue siendo el método estándar setenta años después. Aquel tanque de agua estuvo funcionando hasta los años setenta, y hoy hay uno equivalente en cada fabricante grande del mundo.",
      },
    ],
  },
];
