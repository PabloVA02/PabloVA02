import type { Arte } from "./lesson";

/* ==========================================================================
   Shorts: historias sueltas de dos minutos.

   La diferencia con un capítulo de Books no es solo la longitud. Un capítulo
   explica un tema; un short cuenta UNA cosa y la suelta. Por eso la primera
   tarjeta es siempre una fotografía real a sangre: la foto hace el trabajo
   del gancho y el texto solo tiene que rematar.

   FOTOGRAFÍAS
   Todas de Wikimedia Commons, y todas de dominio público o con licencia
   Creative Commons. Se piden por `Special:FilePath`, que es la dirección
   estable de Commons: no depende del hash interno del fichero, así que no se
   rompe cuando Commons reorganiza su almacenamiento.

   Cada foto guarda su autoría y su licencia porque las CC-BY la exigen, y
   porque en una app de verdad esa línea de crédito tiene que salir en
   pantalla. Sale: la pinta el pie de la portada.
   ========================================================================== */

export type Foto = {
  /** Nombre exacto del fichero en Commons, tal cual, con espacios. */
  archivo: string;
  autor: string;
  licencia: string;
  /** Qué parte no se puede perder al recortar (CSS object-position). */
  foco?: string;
  /** Descripción para quien no ve la imagen. */
  alt: string;
};

export function urlFoto(foto: Foto, ancho = 1400) {
  const nombre = encodeURIComponent(foto.archivo.replace(/ /g, "_"));
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${nombre}?width=${ancho}`;
}

export type TarjetaShort =
  /** Texto a página completa. */
  | { forma: "texto"; texto: string }
  /** Una frase sola, grande. El punto de giro de la historia. */
  | { forma: "golpe"; frase: string }
  /** Una cifra que se sostiene sola, con su explicación debajo. */
  | { forma: "cifra"; cifra: string; unidad: string; texto: string }
  /** Otra fotografía real, a media altura, con el texto debajo. */
  | { forma: "foto"; texto: string; foto: Foto }
  /** Una de nuestras ilustraciones, en la paleta del proyecto. */
  | { forma: "arte"; texto: string; arte: Arte };

export type Short = {
  id: string;
  titulo: string;
  /** La frase que se lee en el muro, debajo del título. */
  gancho: string;
  categoria: string;
  /** Color de acento del short: tiñe el degradado y la barra de progreso. */
  color: string;
  /** Minutos de lectura previstos. Se comparan con los reales al terminar. */
  minutos: number;
  /** La portada: foto real a sangre. */
  foto: Foto;
  /** Ilustración de respaldo, por si la foto no carga. */
  arte: Arte;
  /** Texto de la portada, debajo de la foto. */
  entrada: string;
  tarjetas: TarjetaShort[];
};

export const SHORTS: Short[] = [
  {
    id: "chernobil",
    titulo: "Chernóbil: 36 horas de silencio",
    gancho: "El reactor ya ardía y nadie había avisado a la ciudad de al lado.",
    categoria: "Catástrofes",
    color: "var(--sage)",
    minutos: 2,
    arte: "noche",
    foto: {
      archivo: "IAEA 02790015 (5613115146).jpg",
      autor: "IAEA Imagebank",
      licencia: "CC BY-SA 2.0",
      foco: "50% 45%",
      alt: "El reactor 4 de Chernóbil destruido, fotografiado desde un helicóptero.",
    },
    entrada:
      "26 de abril de 1986, la 1:23 de la madrugada. Una prueba de seguridad —una prueba de <em>seguridad</em>— deja al reactor 4 de Chernóbil funcionando a una potencia imposible de controlar. En cuatro segundos, la potencia se multiplica por cien.",
    tarjetas: [
      {
        forma: "texto",
        texto:
          "La explosión levanta la tapa del reactor: una pieza de acero y hormigón de <strong>1.200 toneladas</strong> que los operarios llamaban «Elena». Cae de canto y deja el núcleo abierto al cielo. No hay edificio de contención. No lo llevaba.",
      },
      {
        forma: "cifra",
        cifra: "1.200",
        unidad: "toneladas",
        texto:
          "Lo que pesaba la tapa que salió despedida. En los reactores occidentales, sobre el núcleo hay una cúpula de contención. En este diseño soviético, el RBMK, no había ninguna.",
      },
      {
        forma: "texto",
        texto:
          "El grafito del núcleo empieza a arder y no se apaga en <strong>diez días</strong>. La columna sube kilómetros y va soltando yodo y cesio radiactivos, que el viento reparte por media Europa. Suecia lo detecta antes de que Moscú lo cuente.",
      },
      { forma: "golpe", frase: "A tres kilómetros vivían 49.000 personas. Nadie les dijo nada." },
      {
        forma: "texto",
        texto:
          "Prípiat era una ciudad nueva, de trabajadores jóvenes: la edad media rondaba los 26 años. El sábado siguiente amaneció soleado. Hubo bodas. Los niños jugaron en la calle. El parque de atracciones iba a abrirse el 1 de mayo.",
      },
      {
        forma: "cifra",
        cifra: "36",
        unidad: "horas",
        texto:
          "Lo que tardó en llegar la orden de evacuar. Cuando llegaron los 1.200 autobuses, se les dijo que cogieran documentación y comida para <strong>tres días</strong>. Ninguno volvió.",
      },
      {
        forma: "foto",
        texto:
          "La noria de Prípiat nunca llegó a abrir. Cuarenta años después sigue ahí, y se ha convertido en la imagen de lo que pasa cuando una ciudad se vacía de golpe: la naturaleza no tarda tanto como creemos en volver.",
        foto: {
          archivo: "Pripyat - Abandoned funfair.jpg",
          autor: "Jorge Franganillo",
          licencia: "CC BY 2.0",
          foco: "50% 50%",
          alt: "La noria abandonada del parque de atracciones de Prípiat.",
        },
      },
      {
        forma: "texto",
        texto:
          "Dos personas murieron aquella noche. Otras 28 en los meses siguientes, casi todas bomberos que subieron al tejado sin saber que el brillo que estaban apagando era el núcleo. La cifra total a largo plazo se sigue discutiendo hoy.",
      },
    ],
  },

  {
    id: "yamaguchi",
    titulo: "El hombre que sobrevivió a las dos",
    gancho: "Escapó de Hiroshima en tren. Llegó a Nagasaki a tiempo para la segunda.",
    categoria: "Historias",
    color: "var(--clay)",
    minutos: 2,
    arte: "lectora",
    foto: {
      archivo: "Atomic cloud over Hiroshima.jpg",
      autor: "Fuerzas Armadas de los EE. UU.",
      licencia: "Dominio público",
      foco: "50% 40%",
      alt: "La nube en forma de hongo sobre Hiroshima el 6 de agosto de 1945.",
    },
    entrada:
      "Tsutomu Yamaguchi era ingeniero naval. El 6 de agosto de 1945 estaba en Hiroshima en viaje de trabajo, el último día de una estancia de tres meses. Se había dejado el sello personal en la oficina y volvió a por él. Ese desvío lo dejó a tres kilómetros del centro de la explosión.",
    tarjetas: [
      {
        forma: "texto",
        texto:
          "A las 8:15 vio caer algo desde un bombardero y luego «un relámpago blanco». La onda lo lanzó al suelo y lo dejó con los tímpanos rotos, ciego temporalmente y con quemaduras graves en el lado izquierdo del cuerpo.",
      },
      {
        forma: "cifra",
        cifra: "8:15",
        unidad: "de la mañana",
        texto:
          "Los relojes de Hiroshima pararon todos a la misma hora. Es de las cosas que más impresionan del museo de la ciudad: no un reloj, sino la misma hora repetida en todos.",
      },
      {
        forma: "texto",
        texto:
          "Pasó la noche en un refugio y al día siguiente cogió un tren. Volvía a casa, a <strong>Nagasaki</strong>, con las quemaduras vendadas. El 9 de agosto por la mañana ya estaba en su oficina, explicándole a su jefe lo que había visto.",
      },
      {
        forma: "golpe",
        frase: "«Una sola bomba había destruido la ciudad entera.» El jefe le dijo que estaba loco.",
      },
      {
        forma: "texto",
        texto:
          "Mientras se lo decía, a las 11:02, la sala se llenó de la misma luz blanca. Nagasaki. Otra vez a unos tres kilómetros. Otra vez de pie. Los vendajes se le habían quedado pequeños dos veces en cuatro días.",
      },
      {
        forma: "arte",
        texto:
          "Yamaguchi tardó sesenta años en contarlo en público. Durante décadas prefirió el silencio, como muchos <em>hibakusha</em>: en Japón, sobrevivir a la bomba traía estigma, problemas para casarse y para encontrar trabajo.",
        arte: "escritor",
      },
      {
        forma: "texto",
        texto:
          "En 2009, el gobierno japonés lo reconoció oficialmente como superviviente doble: la única persona con ese reconocimiento. Murió en 2010, a los <strong>93 años</strong>. Se pasó los últimos escribiendo contra las armas nucleares.",
      },
      {
        forma: "cifra",
        cifra: "165",
        unidad: "personas",
        texto:
          "Las que se calcula que estuvieron en las dos ciudades aquellos tres días. Yamaguchi fue el único al que el Estado japonés se lo reconoció por escrito.",
      },
    ],
  },

  {
    id: "pompeya",
    titulo: "Los huecos de Pompeya",
    gancho: "Los cuerpos desaparecieron. Los agujeros que dejaron, no.",
    categoria: "Arqueología",
    color: "var(--ochre)",
    minutos: 2,
    arte: "museo",
    foto: {
      archivo: "Pompeii Garden of the Fugitives 02.jpg",
      autor: "Lancevortex",
      licencia: "CC BY-SA 3.0",
      foco: "50% 55%",
      alt: "Moldes de yeso de víctimas en el Jardín de los Fugitivos, Pompeya.",
    },
    entrada:
      "En el año 79, el Vesubio levantó una columna de ceniza de más de 30 kilómetros. Plinio el Joven la vio desde la otra orilla de la bahía y la describió por carta: parecía un pino, decía, con el tronco recto y la copa abierta. Hoy a ese tipo de erupción se le llama pliniana por él.",
    tarjetas: [
      {
        forma: "texto",
        texto:
          "Durante horas cayó piedra pómez. Los tejados se hundieron por el peso. Muchos huyeron a tiempo. Pero de madrugada la columna se derrumbó sobre sí misma y bajó por la ladera convertida en otra cosa.",
      },
      {
        forma: "cifra",
        cifra: "300",
        unidad: "°C",
        texto:
          "La temperatura estimada del flujo piroclástico al llegar a Pompeya: una avalancha de gas y ceniza bajando a más de 100 km/h. No hubo tiempo de nada. La muerte fue casi instantánea.",
      },
      {
        forma: "texto",
        texto:
          "La ceniza los sepultó y se compactó a su alrededor. Los cuerpos se descompusieron con los siglos, pero la ceniza endurecida mantuvo la forma exacta: quedó un <strong>hueco vacío</strong> con la silueta de una persona dentro de la roca.",
      },
      { forma: "golpe", frase: "Nadie supo qué hacer con esos huecos durante cien años de excavación." },
      {
        forma: "texto",
        texto:
          "En 1863, el arqueólogo <strong>Giuseppe Fiorelli</strong> tuvo la idea: si el hueco es un molde, se rellena. Perforó, inyectó yeso líquido, esperó a que fraguase y picó la roca alrededor.",
      },
      {
        forma: "arte",
        texto:
          "Lo que salió no era una estatua: era la postura real del último segundo. Manos tapando la cara, cuerpos abrazados, un perro con la cadena tensa. Fiorelli no había recuperado objetos, había recuperado <em>gestos</em>.",
        arte: "memoria",
      },
      {
        forma: "texto",
        texto:
          "Hoy la técnica se hace con resina transparente, que deja ver los huesos y los objetos que hay dentro sin taparlos. Y se excava despacio a propósito: se deja parte del yacimiento sin tocar para los métodos que aún no existen.",
      },
      {
        forma: "cifra",
        cifra: "⅓",
        unidad: "sin excavar",
        texto:
          "La parte de Pompeya que sigue bajo tierra, deliberadamente. La arqueología aprendió que excavar es destruir: cada generación se guarda algo para la siguiente.",
      },
    ],
  },

  {
    id: "titanic",
    titulo: "Treinta y siete segundos",
    gancho: "El tiempo que hubo entre ver el iceberg y chocar contra él.",
    categoria: "Catástrofes",
    color: "var(--slate)",
    minutos: 2,
    arte: "explorar",
    foto: {
      archivo: "RMS Titanic 3.jpg",
      autor: "Francis Godolphin Osbourne Stuart",
      licencia: "Dominio público",
      foco: "50% 50%",
      alt: "El Titanic saliendo de Southampton el 10 de abril de 1912.",
    },
    entrada:
      "23:39 del 14 de abril de 1912. El vigía Frederick Fleet ve una sombra delante y toca la campana tres veces. Llama al puente: «Iceberg, justo delante». El primer oficial ordena virar y parar máquinas. Y entonces empieza a contar el tiempo.",
    tarjetas: [
      {
        forma: "cifra",
        cifra: "37",
        unidad: "segundos",
        texto:
          "Lo que tardó el Titanic en llegar al iceberg. Un barco de 269 metros y 52.000 toneladas no gira en 37 segundos. Casi lo consigue: el golpe fue de refilón, contra el costado.",
      },
      {
        forma: "texto",
        texto:
          "Y ese «casi» fue el problema. Un choque frontal habría aplastado dos o tres compartimentos y el barco habría aguantado. El roce lateral abrió una serie de grietas a lo largo de <strong>seis</strong> compartimentos seguidos.",
      },
      {
        forma: "golpe",
        frase: "El Titanic flotaba con cuatro compartimentos inundados. Se inundaron seis.",
      },
      {
        forma: "texto",
        texto:
          "Los mamparos no llegaban hasta arriba. Al llenarse uno, el agua rebosaba por encima al siguiente, como una cubitera que se inclina. El diseñador Thomas Andrews hizo las cuentas en media hora y dio una cifra: dos horas.",
      },
      {
        forma: "cifra",
        cifra: "1.178",
        unidad: "plazas en los botes",
        texto:
          "Para 2.224 personas a bordo. Y no era ilegal: la norma británica calculaba los botes por el <em>tonelaje</em> del barco, no por la gente que llevaba. El Titanic incluso llevaba cuatro botes de más.",
      },
      {
        forma: "arte",
        texto:
          "Los primeros botes salieron medio vacíos. Uno con capacidad para 65 personas se descolgó con 28. Nadie se creía todavía que el barco fuera a hundirse, y bajar seis pisos en una cuerda de noche daba más miedo que quedarse.",
        arte: "mapa",
      },
      {
        forma: "texto",
        texto:
          "A 20 kilómetros estaba el <strong>Californian</strong>. Vio las bengalas y no las interpretó. Su radiotelegrafista se había ido a dormir y había apagado el equipo hacía una hora: no era negligencia, es que entonces no se hacían turnos de noche.",
      },
      {
        forma: "texto",
        texto:
          "De ahí salieron las reglas modernas: botes para todos, guardia de radio 24 horas, simulacros obligatorios y una patrulla internacional del hielo que sigue vigilando el Atlántico Norte hoy mismo.",
      },
    ],
  },

  {
    id: "zar",
    titulo: "La bomba que se quedó a la mitad",
    gancho: "La diseñaron de 100 megatones y la bajaron a 50. Por si acaso.",
    categoria: "Ciencia",
    color: "var(--clay)",
    minutos: 2,
    arte: "aprendizaje",
    foto: {
      archivo: "The tsar bomba test.jpg",
      autor: "Ministerio de Energía Atómica de la URSS",
      licencia: "Dominio público",
      foco: "50% 45%",
      alt: "La nube de la prueba de la Bomba del Zar, 30 de octubre de 1961.",
    },
    entrada:
      "30 de octubre de 1961, archipiélago de Nueva Zembla, en el Ártico. Un bombardero Tu-95 modificado —le habían quitado las puertas del compartimento de bombas porque el artefacto no cabía— suelta una bomba de ocho metros y 27 toneladas con un paracaídas del tamaño de un piso.",
    tarjetas: [
      {
        forma: "texto",
        texto:
          "El paracaídas no era para precisión. Era para darle al avión <strong>tiempo de huir</strong>. Aun así, los cálculos daban un 50 % de probabilidades de que la tripulación no volviera.",
      },
      {
        forma: "cifra",
        cifra: "50",
        unidad: "megatones",
        texto:
          "Unas 3.300 veces Hiroshima. Y era la versión <em>reducida</em>: el diseño original llegaba a 100, pero cambiaron una capa de uranio por plomo para no doblar la lluvia radiactiva sobre el planeta entero.",
      },
      {
        forma: "golpe",
        frase: "Es la única vez que alguien ha rebajado un arma a la mitad por vergüenza.",
      },
      {
        forma: "texto",
        texto:
          "Detonó a 4.000 metros de altura. La bola de fuego llegó a medir unos <strong>8 kilómetros</strong> de diámetro y no tocó el suelo: rebotó contra su propia onda reflejada. Eso, paradójicamente, redujo muchísimo la contaminación.",
      },
      {
        forma: "cifra",
        cifra: "67",
        unidad: "km de altura",
        texto:
          "Lo que subió el hongo: siete veces el Everest, muy por encima de donde vuelan los aviones. Se vio desde 1.000 kilómetros de distancia.",
      },
      {
        forma: "texto",
        texto:
          "La onda de choque dio <strong>tres vueltas completas</strong> a la Tierra antes de disiparse. En un pueblo a 55 km, las casas de madera quedaron arrasadas. Se rompieron cristales a cientos de kilómetros, en Finlandia y Noruega.",
      },
      {
        forma: "arte",
        texto:
          "El avión, ya a 115 km de distancia, cayó un kilómetro en picado antes de que el piloto recuperara el control. Volvió. Andréi Sájarov, que la había diseñado, se convirtió después en el disidente más famoso de la URSS y ganó el Nobel de la Paz.",
        arte: "aprendizaje",
      },
      {
        forma: "texto",
        texto:
          "La Bomba del Zar no era un arma útil: ningún avión podía llevarla a un objetivo real y volver. Era un mensaje. Dos años después se firmó el tratado que prohibió las pruebas nucleares en la atmósfera.",
      },
    ],
  },

  {
    id: "emus",
    titulo: "La guerra que Australia perdió contra unos pájaros",
    gancho: "Dos ametralladoras, 10.000 balas y 20.000 emús. Ganaron los emús.",
    categoria: "Absurdos",
    color: "var(--ochre)",
    minutos: 2,
    arte: "explorar",
    foto: {
      archivo: "Lewis Gun during Emu War.jpg",
      autor: "Desconocido",
      licencia: "Dominio público",
      foco: "50% 50%",
      alt: "Soldados australianos con una ametralladora Lewis durante la Guerra del Emú, 1932.",
    },
    entrada:
      "1932, Australia Occidental. Los veteranos de la Gran Guerra a los que el gobierno había dado tierras para cultivar trigo llevan años en la ruina. Y encima, cada temporada bajan unos 20.000 emús desde el interior y les arrasan los campos. Los granjeros piden ayuda al Ministerio de Defensa. Y el Ministerio dice que sí.",
    tarjetas: [
      {
        forma: "texto",
        texto:
          "Mandan al mayor <strong>G. P. W. Meredith</strong> con dos ametralladoras Lewis, 10.000 cartuchos y dos soldados. Sobre el papel es un ejercicio de tiro. En la práctica, nadie ha comprobado cómo se comporta un emú cuando le disparan.",
      },
      {
        forma: "cifra",
        cifra: "50",
        unidad: "km/h",
        texto:
          "A lo que corre un emú. Mide casi dos metros, pesa 50 kilos, cambia de dirección en seco y aguanta varios impactos sin caerse. Y no va en bandada compacta: se dispersa.",
      },
      {
        forma: "texto",
        texto:
          "Primer intento: unos 50 emús a tiro. Abren fuego. Los pájaros se dispersan antes de que la ametralladora los alcance. Segundo intento, desde una emboscada: el arma se encasquilla después de doce bajas.",
      },
      {
        forma: "golpe",
        frase: "Montaron una ametralladora sobre un camión. El camión no podía seguirles el ritmo.",
      },
      {
        forma: "texto",
        texto:
          "El terreno era tan irregular que el artillero no podía apuntar en marcha. En una de esas persecuciones, un emú se metió bajo la dirección del vehículo y lo estrelló contra una valla. Los emús: cero bajas en ese episodio.",
      },
      {
        forma: "cifra",
        cifra: "2.500",
        unidad: "balas",
        texto:
          "Las gastadas en la primera campaña, para unas 50 bajas confirmadas: cincuenta balas por pájaro. La prensa se enteró, y con la prensa llegó el ridículo. Meredith fue retirado el 8 de noviembre.",
      },
      {
        forma: "arte",
        texto:
          "Meredith declaró después, medio en serio, que si tuviera una división con la capacidad de encajar balas de estos pájaros se enfrentaría a cualquier ejército del mundo. La expresión «Guerra del Emú» se quedó, y con ella la respuesta a quién ganó.",
        arte: "explorar",
      },
      {
        forma: "texto",
        texto:
          "Lo que funcionó al final no fue el ejército: fueron <strong>vallas</strong> y un sistema de recompensas por pieza. En 1934 se pagaron 57.000 recompensas en seis meses. La solución aburrida, como casi siempre.",
      },
    ],
  },

  {
    id: "baile",
    titulo: "El verano en que Estrasburgo no paró de bailar",
    gancho: "Cuatrocientas personas bailando en la calle. Algunas hasta morir.",
    categoria: "Misterios",
    color: "var(--plum)",
    minutos: 2,
    arte: "memoria",
    foto: {
      archivo: "Die Wallfahrt der Fallsuechtigen nach Meulebeeck.jpg",
      autor: "Hendrik Hondius, sobre un dibujo de Pieter Brueghel (1642)",
      licencia: "Dominio público",
      foco: "50% 50%",
      alt: "Grabado de 1642 que representa una epidemia de baile en Flandes.",
    },
    entrada:
      "Julio de 1518, Estrasburgo. Una mujer a la que las crónicas llaman <em>frau</em> Troffea sale a la calle y se pone a bailar. Sin música. Sigue bailando ese día, y el siguiente, y el siguiente. A la semana la acompañan 34 personas. Al mes, unas 400.",
    tarjetas: [
      {
        forma: "texto",
        texto:
          "No es una leyenda de transmisión oral: está en los libros de cuentas del ayuntamiento, en los sermones de la época y en las crónicas de varios médicos. Se conserva la documentación administrativa de lo que costó gestionarlo.",
      },
      {
        forma: "golpe",
        frase: "Las autoridades consultaron a los médicos. El diagnóstico fue: sangre caliente.",
      },
      {
        forma: "texto",
        texto:
          "Y si el problema era exceso de calor en la sangre, la cura era <strong>sudarlo</strong>. Es decir: bailar más. El ayuntamiento habilitó dos salones gremiales y el mercado del grano, contrató músicos y pagó a bailarines profesionales para acompañarlos.",
      },
      {
        forma: "cifra",
        cifra: "400",
        unidad: "personas",
        texto:
          "La cifra que dan las crónicas en el punto álgido, en agosto. Algunas fuentes hablan de quince muertos al día por agotamiento, infartos y derrames, aunque esa cifra concreta no está confirmada.",
      },
      {
        forma: "arte",
        texto:
          "La explicación más repetida fue durante años el <em>ergotismo</em>: un hongo del centeno, el cornezuelo, que produce alucinaciones y convulsiones. Es pariente químico del LSD. Pero el cornezuelo también corta la circulación: es muy difícil bailar días seguidos envenenado con él.",
        arte: "memoria",
      },
      {
        forma: "texto",
        texto:
          "La hipótesis que más peso tiene hoy es la <strong>histeria colectiva</strong>. Estrasburgo venía de años de hambruna, viruela y sífilis. Y en la tradición local existía san Vito: quien lo enfadaba, decían, era castigado con un baile imparable.",
      },
      {
        forma: "texto",
        texto:
          "Es decir: había un guion previo. La gente sabía qué forma tenía «volverse loco» en aquella ciudad concreta. Y bajo suficiente estrés, ese guion se ejecutó. En septiembre los llevaron en carro a un santuario de san Vito y la epidemia se apagó.",
      },
    ],
  },

  {
    id: "girar",
    titulo: "¿Y si la Tierra dejara de girar?",
    gancho: "Estás moviéndote a 1.600 km/h ahora mismo. Sin notarlo.",
    categoria: "¿Y si...?",
    color: "var(--slate)",
    minutos: 2,
    arte: "explorar",
    foto: {
      archivo: "The Earth seen from Apollo 17.jpg",
      autor: "NASA / tripulación del Apolo 17",
      licencia: "Dominio público",
      foco: "50% 50%",
      alt: "La Tierra completa vista desde el Apolo 17, la «canica azul».",
    },
    entrada:
      "En el ecuador, la superficie de la Tierra gira a unos <strong>1.670 km/h</strong>. No lo notas porque todo gira contigo: el suelo, el aire, los océanos y tú. Es la misma razón por la que puedes servirte agua en un avión.",
    tarjetas: [
      {
        forma: "texto",
        texto:
          "Ahora imagina que el suelo se para de golpe y lo demás no. Todo lo que no esté atornillado al planeta sigue a 1.670 km/h: personas, coches, edificios, la capa superior del terreno. Sería como el frenazo definitivo.",
      },
      {
        forma: "cifra",
        cifra: "1.670",
        unidad: "km/h",
        texto:
          "La velocidad de giro en el ecuador. En Madrid, por latitud, unos 1.270 km/h. En los polos, cero: por eso desde allí el frenazo sería el único sitio soportable.",
      },
      {
        forma: "golpe",
        frase: "El aire no frenaría. Habría un viento global más rápido que un huracán, indefinido.",
      },
      {
        forma: "texto",
        texto:
          "La atmósfera seguiría girando por inercia durante mucho tiempo, arrasando todo en su dirección y calentando la superficie por fricción hasta provocar incendios continuos. El viento se llevaría por delante lo que hubiera sobrevivido al frenazo.",
      },
      {
        forma: "texto",
        texto:
          "Pero hay una versión más interesante: que se frenara <em>despacio</em>, a lo largo de milenios. Ahí no habría frenazo, y aun así el planeta cambiaría de forma. Porque la Tierra no es una esfera: el giro la ensancha por el ecuador.",
      },
      {
        forma: "cifra",
        cifra: "21",
        unidad: "km de más",
        texto:
          "Lo que abulta el ecuador respecto a los polos por efecto de la rotación. Ese abultamiento es lo que mantiene el agua repartida. Sin giro, el mar se iría hacia los polos.",
      },
      {
        forma: "arte",
        texto:
          "Quedarían dos océanos polares gigantes y un <strong>supercontinente</strong> seco rodeando el ecuador, de un lado al otro del planeta. Y el día duraría un año: seis meses de sol continuo y seis de noche.",
        arte: "mapa",
      },
      {
        forma: "texto",
        texto:
          "El giro tampoco es decorativo dentro del planeta: el núcleo líquido en rotación genera el campo magnético que desvía el viento solar. Sin campo, la atmósfera se iría erosionando poco a poco. Es, más o menos, lo que le pasó a Marte.",
      },
    ],
  },

  {
    id: "agujero",
    titulo: "¿Y si cayeras en un agujero negro?",
    gancho: "Depende del tamaño. En uno grande, cruzarías sin enterarte.",
    categoria: "¿Y si...?",
    color: "var(--plum)",
    minutos: 2,
    arte: "noche",
    foto: {
      archivo: "Black hole - Messier 87 crop max res.jpg",
      autor: "Event Horizon Telescope Collaboration",
      licencia: "CC BY 4.0",
      foco: "50% 50%",
      alt: "Primera imagen de un agujero negro, M87*, publicada en 2019.",
    },
    entrada:
      "Esta imagen es de abril de 2019 y es el agujero negro del centro de la galaxia M87. No es un dibujo: es una reconstrucción a partir de datos de ocho radiotelescopios repartidos por el planeta, sincronizados para funcionar como una antena del tamaño de la Tierra.",
    tarjetas: [
      {
        forma: "texto",
        texto:
          "Lo negro del centro no es el agujero: es su <strong>sombra</strong>. El anillo es gas girando tan rápido y tan caliente que brilla. Y la luz de la parte de atrás nos llega curvada alrededor, lo que hace que veamos el disco entero como un aro.",
      },
      {
        forma: "cifra",
        cifra: "6.500",
        unidad: "millones de soles",
        texto:
          "La masa de M87*. Su horizonte de sucesos —el punto de no retorno— es más grande que todo el sistema solar. Cabría la órbita de Neptuno con holgura.",
      },
      {
        forma: "texto",
        texto:
          "Si cayeras en uno pequeño, de unas pocas masas solares, la gravedad en tus pies sería muchísimo mayor que en tu cabeza. Esa diferencia te estiraría hasta romperte. Los físicos lo llaman, sin ninguna solemnidad, <em>espaguetificación</em>.",
      },
      {
        forma: "golpe",
        frase: "En uno supermasivo cruzarías el horizonte sin notar absolutamente nada.",
      },
      {
        forma: "texto",
        texto:
          "Cuanto mayor es el agujero, más suave es la diferencia de gravedad entre tus pies y tu cabeza. En M87* no hay ninguna frontera visible ni ninguna sacudida. Simplemente, a partir de cierto punto, todos los caminos posibles llevan al centro.",
      },
      {
        forma: "arte",
        texto:
          "Y desde fuera se vería otra cosa completamente distinta. La gravedad estira el tiempo: para quien te mira, tus últimos metros durarían cada vez más. Te verían frenar, enrojecer y apagarse, congelado para siempre justo en el borde.",
        arte: "noche",
      },
      {
        forma: "texto",
        texto:
          "Las dos versiones son ciertas a la vez, cada una en su marco de referencia. No es un truco narrativo: es lo que dice la relatividad general, y es de las cosas que más cuesta aceptar de toda la física.",
      },
      {
        forma: "texto",
        texto:
          "Lo que pasa después del horizonte, nadie lo sabe. La relatividad predice una singularidad de densidad infinita, y «infinito» en física suele significar que la teoría se ha quedado sin gasolina. Ahí es donde haría falta una teoría cuántica de la gravedad. No la tenemos.",
      },
    ],
  },

  {
    id: "sin-nosotros",
    titulo: "¿Y si mañana desapareciéramos todos?",
    gancho: "Las farolas aguantarían días. Los puentes, siglos.",
    categoria: "¿Y si...?",
    color: "var(--sage)",
    minutos: 2,
    arte: "noche",
    foto: {
      archivo: "Pripyat FerrisWheel.jpg",
      autor: "Ingmar Runge",
      licencia: "CC BY 3.0",
      foco: "50% 50%",
      alt: "Prípiat vista desde arriba, con la noria y los bloques cubiertos de vegetación.",
    },
    entrada:
      "No hace falta imaginárselo del todo: hay un ensayo real. Prípiat lleva desde 1986 sin nadie, y el bosque ya se ha comido las plazas, los bloques y las carreteras. Sirve para poner fechas a lo que pasaría en todas partes.",
    tarjetas: [
      {
        forma: "cifra",
        cifra: "48",
        unidad: "horas",
        texto:
          "Lo que tardarían en inundarse los metros de Londres o Nueva York. Están secos porque unas bombas achican agua sin parar. Sin nadie que las alimente, el agua sube en dos días.",
      },
      {
        forma: "texto",
        texto:
          "Las centrales térmicas se paran en horas o días, cuando se acaba el combustible que alguien tiene que meter. Las nucleares entran en parada automática. Las luces se apagan casi todas la primera semana.",
      },
      {
        forma: "golpe",
        frase: "A los dos años, las ciudades empiezan a arder solas. Sin bomberos, no se apagan.",
      },
      {
        forma: "texto",
        texto:
          "Los rayos prenden lo que encuentran y el fuego corre sin nadie que lo pare. Lo que queda en pie se llena de agua por las goteras, y el agua entra en las grietas, se hiela en invierno y las abre. El hielo es el gran demoledor.",
      },
      {
        forma: "cifra",
        cifra: "25",
        unidad: "años",
        texto:
          "Lo que tarda la vegetación en cubrir por completo una ciudad templada. En Prípiat, los árboles atraviesan el asfalto de las avenidas y crecen en los salones de los pisos altos.",
      },
      {
        forma: "arte",
        texto:
          "Hacia los <strong>300 años</strong> caen los puentes de acero: el acero necesita pintura, y la pintura necesita a alguien. Las presas se colmatan y revientan. Los rascacielos, sin bombeo, se corroen desde los cimientos inundados.",
        arte: "noche",
      },
      {
        forma: "texto",
        texto:
          "A los 10.000 años quedaría muy poco reconocible. La piedra sin argamasa aguanta: las pirámides, la Gran Muralla en sus tramos macizos, las cabezas de Rushmore, que pierden unos <strong>2,5 cm cada 10.000 años</strong>.",
      },
      {
        forma: "texto",
        texto:
          "Lo que de verdad nos sobreviviría no son los edificios. Son las señales de radio que ya van de camino a otras estrellas, el plástico repartido por los sedimentos y una capa fina y rara de isótopos en la roca, del año en que empezamos a probar bombas.",
      },
    ],
  },
];
