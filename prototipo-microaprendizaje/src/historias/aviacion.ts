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
    titulo: "La lista de comprobación nació de un despegue",
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
    titulo: "El agujerito de la ventanilla del avión sirve",
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
    titulo: "La caja negra es naranja y la rechazaron",
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
];
