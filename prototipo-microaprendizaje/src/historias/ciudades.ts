import type { Short } from "../shorts";

/* ==========================================================================
   Ciudades.

   Todo el mundo vive en una y nadie mira cómo está hecha. Ese es el gancho:
   señalar un detalle que el lector ha pisado mil veces sin verlo.

   La regla del tema: la ciudad es un DOCUMENTO. Una esquina cortada, un plano
   de metro que miente a propósito, una casa apoyada sobre troncos. Cada rasgo
   raro es la firma de alguien que resolvió un problema concreto en una fecha
   concreta, y muchas veces ese alguien perdió la discusión y solo quedó el
   trozo que ya estaba construido.

   Nada de urbanismo abstracto. Si no se puede señalar con el dedo desde una
   acera, no entra.
   ========================================================================== */

export const CIUDADES: Short[] = [
  {
    id: "chaflanes-cerda",
    titulo: "Las esquinas cortadas de Barcelona son un plan de 1859",
    gancho: "Su autor diseñó manzanas con jardín dentro. Se construyeron los cuatro lados.",
    categoria: "Ciudades",
    color: "var(--ochre)",
    encargo: "Una esquina achaflanada del Eixample vista desde el centro de la calzada.",
    entrada:
      "En el Eixample de Barcelona no hay esquinas en ángulo recto: cada cruce tiene los cuatro vértices cortados en diagonal, formando una plaza octogonal de unos veinte metros de lado. No es un capricho estético ni una tradición. Es una decisión de ingeniería tomada por un hombre concreto, Ildefons Cerdà, y aprobada en 1859.",
    paginas: [
      {
        rotulo: "Para qué",
        texto:
          "Cerdà era ingeniero de caminos y llegó al urbanismo desde los datos: hizo un estudio sobre las condiciones de vida en la Barcelona amurallada y encontró que en los barrios más hacinados la esperanza de vida era menos de la mitad que en los acomodados. Su plan atacaba eso con aire, luz y circulación. El chaflán resolvía varias cosas a la vez: dejaba entrar sol en el cruce, permitía ver quién venía por la calle perpendicular y daba espacio de sobra para que girase un vehículo largo, que en aquel momento significaba un carro o un tranvía tirado por caballos.",
        destacado: {
          tipo: "frase",
          frase: "El chaflán no lo pidió la estética: lo pidieron el sol y el radio de giro.",
        },
      },
      {
        rotulo: "Lo que no se hizo",
        texto:
          "El plano original es bastante más ambicioso que la ciudad resultante. Cerdà proyectaba manzanas edificadas solo por dos de sus lados, con jardines y equipamientos en el interior, y una altura limitada a unos dieciséis metros. Lo que ocurrió fue lo previsible: el suelo era privado, la presión inmobiliaria empujó, se fueron autorizando excepciones y las manzanas acabaron cerradas por los cuatro costados y con más plantas. De aquel interior de jardín quedan hoy unos pocos patios recuperados. El propio Cerdà murió arruinado en <strong>1876</strong>, con su plan a medio traicionar.",
        destacado: { tipo: "cifra", cifra: "1859", unidad: "año de aprobación del plan" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La geometría, sin embargo, aguantó, y sigue dando de sí siglo y medio después. Los chaflanes se han usado desde entonces para aparcamiento, para terrazas, para contenedores y, en los últimos años, para el programa de supermanzanas, que reordena el tráfico de grupos de nueve manzanas y devuelve espacio al peatón. También los inventó la palabra: <em>chaflán</em> era un término de cantería, el corte de una arista en un sillar, antes de que Barcelona lo convirtiera en una forma urbana entera, reconocible desde un avión y copiada después en media docena de ciudades.",
      },
    ],
  },

  {
    id: "venecia-pilotes",
    titulo: "Venecia está de pie sobre millones de troncos",
    gancho: "La madera lleva mil años bajo el agua y no se ha podrido.",
    categoria: "Ciudades",
    color: "var(--sage)",
    curioso: true,
    encargo: "Los cimientos de ladrillo de un palacio veneciano al ras del agua del canal.",
    entrada:
      "Venecia no se levanta sobre roca ni sobre tierra firme: se levanta sobre el barro blando de una laguna. Para poder construir encima, quienes la hicieron clavaron troncos de árbol en el fango, uno junto a otro, hasta alcanzar una capa de arcilla compacta. Sobre esa cabellera de madera se apoyan las plataformas de piedra y, encima, los palacios.",
    paginas: [
      {
        rotulo: "El bosque de abajo",
        texto:
          "Los pilotes son sobre todo de aliso, roble y alerce, traídos por flotación desde los bosques de la actual Eslovenia y de los Alpes. Se hincaban a golpe de maza, muy juntos, hasta atravesar el lodo. Para levantar la basílica de Santa María de la Salud, en el siglo XVII, la documentación de la obra habla de más de un millón de pilotes clavados a lo largo de dos años. La ciudad entera funciona así: cada edificio se apoya no en un cimiento macizo, sino en un bosque invertido que nadie ha visto nunca entero.",
        destacado: { tipo: "cifra", cifra: "1.000.000+", unidad: "pilotes bajo una sola iglesia" },
      },
      {
        rotulo: "Por qué no se pudre",
        texto:
          "La madera se pudre porque unos hongos y unas bacterias la comen, y esos organismos necesitan oxígeno. Enterrada en el barro de la laguna y cubierta permanentemente de agua salobre, la madera queda en un ambiente sin oxígeno donde esos descomponedores no pueden trabajar. Con el tiempo, además, el agua deposita minerales dentro de la estructura y la va endureciendo, en un proceso parecido a una petrificación lenta. El peligro no es que el agua la tape: es que la destape. Un pilote que asome y se seque a ratos sí se degrada.",
        destacado: {
          tipo: "frase",
          frase: "El agua no es lo que ataca a esa madera: es lo que la conserva.",
        },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "Los problemas de Venecia vienen de por encima y de por debajo. Durante el siglo XX se bombeó agua del subsuelo para la industria de tierra firme, y la ciudad se hundió unos centímetros antes de que se prohibiera; a eso se suma la subida del nivel del mar. Desde 2020 funciona el sistema MOSE, un juego de compuertas móviles en las bocas de la laguna que se levantan con aire comprimido cuando se anuncia marea alta. Los pilotes, mientras tanto, siguen ahí abajo, aguantando exactamente igual que el primer día.",
      },
    ],
  },

  {
    id: "mapa-beck",
    titulo: "El plano del metro miente y por eso funciona",
    gancho: "Un delineador lo dibujó en su tiempo libre y se lo rechazaron por raro.",
    categoria: "Ciudades",
    color: "var(--slate)",
    encargo: "Un plano de metro esquemático de líneas de colores, sin nombres legibles.",
    entrada:
      "Todos los planos de metro del mundo se parecen: líneas de colores que solo van en horizontal, en vertical o a cuarenta y cinco grados, estaciones repartidas a distancias regulares y un centro más grande de lo que le toca. Ninguna de esas cosas es cierta sobre el terreno. La idea es de un delineador de la compañía del metro de Londres llamado Harry Beck, y es de 1931.",
    paginas: [
      {
        rotulo: "La idea",
        texto:
          "Hasta entonces, los planos del metro se dibujaban sobre el mapa real de la ciudad, y el resultado era ilegible: en el centro las estaciones se amontonaban unas encima de otras y en las afueras las líneas se estiraban por zonas vacías. Beck, que trabajaba dibujando esquemas de circuitos eléctricos, se dio cuenta de algo evidente y que nadie había dicho: bajo tierra, al viajero le da igual la geografía. Lo único que necesita saber es el orden de las paradas y dónde puede cambiar de línea. Todo lo demás es ruido, y se puede tirar.",
        destacado: {
          tipo: "frase",
          frase: "Bajo tierra la geografía no sirve. Solo importa el orden y los cambios.",
        },
      },
      {
        rotulo: "El rechazo",
        texto:
          "La compañía lo rechazó al principio por demasiado esquemático: temían que el público lo encontrara confuso precisamente por no parecerse a un mapa. Beck insistió y en <strong>1933</strong> aceptaron imprimir una tirada de prueba en formato de bolsillo. Se agotó en cuestión de días y hubo que reimprimir de inmediato. Le pagaron unas pocas guineas por el trabajo, siguió actualizando el plano durante casi treinta años a cambio de muy poco, y acabó enfrentado con la compañía por las modificaciones que le fueron haciendo sin consultarle, hasta que le retiraron el nombre del plano y dejó de figurar en él.",
        destacado: { tipo: "cifra", cifra: "1933", unidad: "la tirada de prueba se agotó en días" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El diseño se copió en todo el planeta y hoy es un idioma internacional: cualquiera se orienta en el metro de una ciudad que no conoce y cuyo alfabeto no lee. Tiene un efecto secundario documentado y bastante gracioso: la gente coge el metro para trayectos que se harían antes andando, porque en el plano parecen lejos. En Londres, dos estaciones célebres del centro están a menos de trescientos metros la una de la otra, con la calle de por medio, y durante décadas hubo viajeros que bajaban al andén y hacían un transbordo entero para recorrerlas.",
      },
    ],
  },
];
