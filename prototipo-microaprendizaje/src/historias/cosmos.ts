import type { Short } from "../shorts";
import venusFoto from "../fotos/venus-dia.jpg";

/* ==========================================================================
   Cosmos.

   El tema con el enganche más fácil y la trampa más gorda. Fácil porque las
   cifras del espacio son absurdas por naturaleza y no hay que adornarlas.
   La trampa es justo esa: si se cuenta a base de superlativos —lo más
   grande, lo más lejano, lo más antiguo— todo suena igual y a la cuarta
   historia el lector ya no distingue un millón de un billón.

   La regla del tema: cada historia tiene que poder MEDIRSE CONTRA ALGO QUE
   SE TOCA. Un día que dura más que un año. Un planeta que flotaría en la
   bañera si hubiera bañera. Una Luna que se aleja lo que crecen las uñas.
   La cifra sola no impresiona; impresiona la comparación.

   Y cuando la comparación es un tópico —Saturno flotando— se cuenta también
   por qué el tópico cojea. Lo que se pierde en efecto se gana en confianza,
   que es lo que hace que alguien siga deslizando media hora.
   ========================================================================== */

export const COSMOS: Short[] = [
  {
    id: "venus-dia",
    titulo: "Venus: allí el día dura más que el año",
    gancho: "Da una vuelta sobre sí mismo en 243 días y una vuelta al Sol en 225.",
    categoria: "Cosmos",
    color: "var(--ochre)",
    curioso: true,
    foto: {
      local: venusFoto,
      autor: "NASA / JPL-Caltech",
      licencia: "Dominio público",
      /* La imagen viene ya recompuesta en vertical, con el planeta arriba y el
         negro abajo para que el texto se apoye en algo. El original de la NASA
         es apaisado 2:1 y el marco del muro es de móvil: recortado al vuelo
         solo se veía un trozo de superficie, así que la composición se hace
         antes y aquí no hay nada que reencuadrar. */
      foco: "50% 50%",
      /* El disco, medido sobre la imagen recompuesta: ocupa el 52 % del ancho
         y arranca al 8,5 % del alto, así que su centro cae al 26 % de altura y
         su radio es del 26 % del ancho. La máscara va un par de puntos por
         dentro para que la deriva se apague antes del borde. */
      esfera: { cx: "50%", cy: "26%", rx: "24%", ry: "16%" },
      alt: "Venus visto desde el Mariner 10: un disco crema con bandas de nubes anaranjadas sobre fondo negro.",
    },
    encargo:
      "Venus en falso color radar, la superficie sin nubes, ocupando casi todo el encuadre.",
    entrada:
      "Un año es lo que tarda un planeta en dar la vuelta al Sol. Un día es lo que tarda en girar sobre sí mismo. En la Tierra la cuenta sale redonda: trescientas sesenta y cinco vueltas de lo segundo por cada una de lo primero. En Venus sale al revés, y por eso allí no se puede decir «dentro de un año» sin pensarlo dos veces.",
    paginas: [
      {
        rotulo: "Las dos vueltas",
        texto:
          "Venus tarda <strong>243 días terrestres</strong> en girar una vez sobre su eje y <strong>225</strong> en completar su órbita. El giro es tan lento que un coche por autopista adelantaría al ecuador venusiano: la superficie se mueve a unos 6,5 km/h, frente a los 1.670 km/h del ecuador terrestre. Y gira al revés que casi todos los demás, en sentido retrógrado, de modo que allí el Sol sale por el oeste. La explicación más aceptada no es un choque catastrófico sino algo más lento y más raro: las mareas del Sol y el rozamiento de una atmósfera densísima frenaron el planeta durante miles de millones de años hasta darle la vuelta al giro.",
        destacado: { tipo: "cifra", cifra: "243", unidad: "días terrestres dura una vuelta" },
      },
      {
        rotulo: "El día que sí se ve",
        texto:
          "Aquí conviene la letra pequeña, porque hay dos días distintos. El de 243 días es el sidéreo: una vuelta completa medida contra las estrellas. Pero lo que nota alguien de pie en la superficie es el día solar, de amanecer a amanecer, y como el planeta gira hacia un lado mientras orbita hacia el otro, los dos movimientos se suman en vez de restarse. Resultado: el Sol vuelve al mismo punto del cielo cada <strong>117 días terrestres</strong>. Así que en un año venusiano caben casi dos amaneceres. Ninguna de las dos cuentas se parece a nada de lo que tenemos.",
        destacado: { tipo: "cifra", cifra: "117", unidad: "días entre un amanecer y el siguiente" },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "Nada de esto se vería a simple vista, porque no hay vista: la capa de nubes de ácido sulfúrico es opaca y bajo ella hace unos 465 °C, más que en Mercurio, que está mucho más cerca del Sol. La presión al nivel del suelo equivale a estar a novecientos metros bajo el mar. La sonda soviética Venera 13 aterrizó en 1982 y aguantó 127 minutos, casi el doble de lo previsto, tiempo suficiente para mandar las únicas fotos en color que existen del suelo de Venus. Se ven piedras planas y un cielo naranja. Después, silencio.",
      },
    ],
  },

  {
    id: "saturno-flota",
    titulo: "Saturno flotaría en el agua (con truco)",
    gancho: "Es el único planeta menos denso que el agua. La bañera es el problema.",
    categoria: "Cosmos",
    color: "var(--slate)",
    curioso: true,
    encargo: "Saturno con los anillos casi de canto, sobre negro, ocupando el ancho entero.",
    entrada:
      "La frase circula desde hace décadas y es cierta en su parte medible: Saturno tiene una densidad media de 0,687 gramos por centímetro cúbico y el agua tiene uno. Es el único planeta del sistema solar del que se puede decir eso. Lo que pasa es que la imagen que evoca —un planeta a remojo— es imposible por motivos que resultan más interesantes que la frase.",
    paginas: [
      {
        rotulo: "La cifra",
        texto:
          "Saturno pesa 95 veces lo que la Tierra, pero ocupa unas 760 veces más volumen. De ahí sale una densidad media de <strong>0,687 g/cm³</strong>, por debajo de la del agua. La causa es de qué está hecho: sobre todo hidrógeno y helio, los dos elementos más ligeros que existen, sin superficie sólida donde apoyar el pie. Girar deprisa ayuda a la exageración. Da una vuelta en poco más de diez horas y media, y esa velocidad lo achata: el diámetro por el ecuador es un 10 % mayor que de polo a polo, la diferencia más marcada de todos los planetas. Achatarse es hincharse, e hincharse es bajar la densidad.",
        destacado: { tipo: "cifra", cifra: "0,687", unidad: "g/cm³ frente a 1 del agua" },
      },
      {
        rotulo: "Por qué no flota",
        texto:
          "Para que flote hace falta una bañera, y una bañera capaz de contener Saturno tendría tanta agua que su propia gravedad la aplastaría hasta convertirla en algo que ya no se parece al agua. Además, esa densidad es un promedio: el interior de Saturno no es ligero en absoluto. Hacia el centro, la presión comprime el hidrógeno hasta que se comporta como un metal líquido, y en el núcleo se apilan roca y hielo con la masa de varias Tierras. Un planeta no es un cubo de hielo homogéneo. Flotar, además, exige un cuerpo que aguante entero, y Saturno se desharía antes de tocar el agua.",
        destacado: {
          tipo: "frase",
          frase: "El dato es correcto. Lo imposible es el experimento.",
        },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "Los anillos, que son lo que todo el mundo dibuja, tienen casi 300.000 kilómetros de lado a lado y en muchos tramos menos de diez metros de espesor: si se hiciera una maqueta del ancho de un campo de fútbol, tendrían el grosor de una hoja de papel. Están hechos de trozos de hielo de agua, desde granos de polvo hasta bloques de varios metros. Y no son eternos: las medidas de la sonda Cassini indican que material del anillo va cayendo sobre el planeta, y que en unos cientos de millones de años podrían haber desaparecido. Los estamos viendo en un buen momento.",
      },
    ],
  },

  {
    id: "luna-se-aleja",
    titulo: "La Luna se aleja y se llevará los eclipses",
    gancho: "Se va 3,8 centímetros al año. Lo sabemos porque hay espejos allí arriba.",
    categoria: "Cosmos",
    color: "var(--plum)",
    curioso: true,
    encargo: "La Luna llena muy nítida, sin paisaje delante, sobre cielo negro limpio.",
    entrada:
      "Que un eclipse total de Sol funcione depende de una casualidad incómoda de creer: el Sol es unas cuatrocientas veces más grande que la Luna y está unas cuatrocientas veces más lejos, así que los dos se ven del mismo tamaño desde aquí. Esa coincidencia no es una ley de la naturaleza. Es un momento, y se está acabando.",
    paginas: [
      {
        rotulo: "Los espejos",
        texto:
          "En julio de 1969 los tripulantes del Apolo 11 dejaron sobre el suelo lunar un panel de reflectores, y las misiones siguientes —y dos vehículos soviéticos Lunojod— pusieron más. Son espejos con forma de esquina de cubo: devuelven la luz exactamente por donde vino, sin importar el ángulo. Desde entonces, varios observatorios disparan un pulso láser, esperan a que vuelva y cronometran el viaje. Como la velocidad de la luz se conoce con enorme precisión, ese tiempo da la distancia con un margen de milímetros. Es de los experimentos más largos que existen: lleva más de medio siglo funcionando y sigue dando datos cada semana.",
        destacado: { tipo: "cifra", cifra: "3,8", unidad: "centímetros al año se aleja" },
      },
      {
        rotulo: "Quién empuja",
        texto:
          "No es que la Luna huya: es que la Tierra la empuja sin querer. La atracción lunar levanta las mareas, pero la Tierra gira más deprisa de lo que la Luna orbita, así que arrastra el bulto de agua un poco por delante de la Luna. Ese bulto adelantado tira de ella hacia adelante y la sube a una órbita más alta. La energía sale de algún sitio, y sale del giro terrestre: el día se alarga unos dos milisegundos por siglo. Los corales fósiles del Devónico, de hace unos 400 millones de años, muestran líneas de crecimiento diarias que dan años de unos <strong>400 días</strong>.",
        destacado: { tipo: "cifra", cifra: "400", unidad: "días tenía el año hace 400 millones" },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "Al alejarse, la Luna se ve cada vez más pequeña, y llegará un punto en que ya no podrá tapar el disco solar del todo. Los cálculos habituales sitúan el último eclipse total dentro de unos 600 millones de años; después solo quedarán los anulares, ese anillo de fuego que deja el borde del Sol asomando. Nadie tomará nota. Pero merece la pena saber que vivimos en el intervalo exacto de la historia del planeta en el que un eclipse total es posible, y que si alguien hubiera llegado mil millones de años tarde, no tendría ni palabra para nombrarlo.",
      },
    ],
  },
];
