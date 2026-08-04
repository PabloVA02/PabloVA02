import type { Short } from "../shorts";

/* ==========================================================================
   Copiar a la naturaleza.

   Inventos que salieron de mirar un bicho o una planta con atención. El tema
   se estropea si se convierte en lista de anécdotas: hay que explicar bien
   el mecanismo copiado, porque ahí está lo bueno.

   La regla del tema: primero se cuenta CÓMO LO HACE EL SER VIVO y por qué le
   sirve, y solo después cómo se llevó eso a una fábrica. Y se dice siempre
   qué se tardó y qué falló, porque copiar a la naturaleza es mucho más lento
   de lo que suena.
   ========================================================================== */

export const BIOMIMESIS: Short[] = [
  {
    id: "el-velcro-y-el-cardo",
    titulo: "El velcro salió de los cardos del perro",
    gancho: "Un ingeniero volvió de cazar con el pantalón lleno de bolitas pegadas y las miró al microscopio.",
    categoria: "Copiar a la naturaleza",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una bolita seca de cardo enganchada en un tejido de lana.",
    entrada:
      "Suiza, 1941. Un ingeniero eléctrico vuelve de una jornada de caza en los Alpes con el pantalón y el pelo de su perro cubiertos de esas bolitas de cardo que se pegan a todo. En lugar de limpiarlas y olvidarse, se lleva unas cuantas a casa y las mira con un microscopio para entender por qué se agarran con tanta fuerza.",
    paginas: [
      {
        rotulo: "El gancho",
        texto:
          "Lo que vio era un bosque de ganchitos diminutos. Cada espina de la bolita termina en una curva cerrada, como un anzuelo, y esas curvas se enredan en cualquier superficie con fibras sueltas: lana, pelo animal, tela basta. La planta hace eso por un motivo muy concreto: así consigue que un animal la transporte lejos y disperse sus semillas por terreno nuevo. El ingeniero pensó que, si aquello se agarraba tan bien a un pantalón sin ningún pegamento, podía servir como cierre reutilizable para la ropa y para mil cosas más.",
        destacado: { tipo: "frase", frase: "Cada espina acaba en un anzuelo diminuto." },
      },
      {
        rotulo: "Diez años",
        texto:
          "Copiar aquel mecanismo costó muchísimo más de lo que él había previsto al empezar. Los primeros intentos, hechos a mano con algodón, se deshacían después de unos pocos usos, y ningún fabricante textil quiso ayudarle con el asunto. La solución llegó al probar con nailon, que al coserse bajo luz infrarroja conserva la forma de los ganchos. Hizo falta además una máquina capaz de cortar las lazadas en el ángulo exacto para dejar cada gancho abierto. Entre la idea inicial y el producto vendible pasaron unos diez años, y la patente acabó registrándose en 1955.",
        destacado: { tipo: "cifra", cifra: "10", unidad: "años entre la idea y el producto" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un cierre que se usa en zapatillas de niño, en trajes de bombero y en el interior de las naves espaciales, donde sirve para que las cosas no floten. Quedó también el nombre, formado juntando dos palabras francesas, que hoy se usa como nombre común en muchos idiomas aunque siga siendo una marca registrada. Y quedó el ejemplo que se cita siempre para explicar una idea: mirar con atención algo molesto puede dar más que ponerse a buscar soluciones. Eso sí, después hicieron falta diez años de laboratorio para rematarlo.",
      },
    ],
  },
  {
    id: "el-tren-y-el-pajaro",
    titulo: "Un tren dejó de tronar copiando a un pájaro",
    gancho: "Al salir del túnel provocaba un estruendo enorme. Lo resolvieron dándole al morro forma de pico de martín pescador.",
    categoria: "Copiar a la naturaleza",
    color: "var(--slate)",
    encargo: "El morro alargado y puntiagudo de un tren de alta velocidad.",
    entrada:
      "Japón, principios de los años noventa. Los trenes de alta velocidad tienen un problema serio en un país lleno de montañas y de túneles. Al entrar en uno a más de doscientos kilómetros por hora, empujan el aire de dentro como un émbolo. Al salir se produce un estampido que se oye a cientos de metros.",
    paginas: [
      {
        rotulo: "El émbolo",
        texto:
          "Lo que ocurre es un problema de aire comprimido. Un túnel es un tubo cerrado y el tren, que casi lo llena, empuja delante de sí una masa de aire que no puede escapar por los lados. Esa presión avanza por el túnel hasta la boca de salida y allí se libera de golpe, produciendo una onda que suena como un cañonazo. Cuanto más rápido va el tren y más ajustado es el túnel, más fuerte resulta el estampido. Así que la velocidad máxima no la limitaba el motor, sino el ruido y las quejas de los vecinos.",
        destacado: { tipo: "frase", frase: "El tren empuja el aire como un émbolo dentro de un tubo." },
      },
      {
        rotulo: "El pico",
        texto:
          "El ingeniero jefe del proyecto era aficionado a la observación de aves y se fijó en el martín pescador, un pájaro que se lanza al agua desde el aire para pescar y apenas levanta salpicadura. Su pico es largo, estrecho y de sección casi triangular, una forma que atraviesa la frontera entre dos medios de distinta densidad sin empujar bruscamente el segundo. Rediseñaron el morro del tren siguiendo esa geometría, con una punta alargada de quince metros, y comprobaron el resultado disparando modelos a escala contra tubos en el laboratorio.",
        destacado: { tipo: "cifra", cifra: "15", unidad: "metros mide el morro rediseñado" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El resultado fue mejor de lo esperado y no solo por el ruido. El tren rediseñado eliminó el estampido y permitió subir la velocidad, y además consumió alrededor de un quince por ciento menos de electricidad. Aquella forma de pico reduce también la resistencia del aire cuando el tren circula en campo abierto, que es la mayor parte del trayecto. Quedó una silueta reconocible que otros fabricantes han copiado después. Y quedó un ejemplo que se repite siempre que se habla de esto: la solución no salió de un túnel de viento, sino de mirar pájaros.",
      },
    ],
  },
  {
    id: "la-hoja-que-no-se-moja",
    titulo: "Hay hojas que se limpian solas con la lluvia",
    gancho: "El agua resbala en bolas y arrastra la suciedad. La clave está en unas rugosidades que no se ven.",
    categoria: "Copiar a la naturaleza",
    color: "var(--plum)",
    encargo: "Una hoja verde con gotas de agua perfectamente redondas encima.",
    entrada:
      "Alemania, años setenta del siglo XX. Dos botánicos observan con microscopio electrónico las hojas de varias plantas y encuentran una diferencia llamativa. Las del loto, una planta que crece en aguas embarradas, aparecen siempre limpias, mientras que otras hojas retienen polvo y restos. La explicación no está en ninguna sustancia, sino en la forma microscópica de la superficie.",
    paginas: [
      {
        rotulo: "La rugosidad",
        texto:
          "La superficie de esas hojas no es lisa, sino que está cubierta de bultos minúsculos recubiertos a su vez de una cera muy fina. Una gota que cae encima no llega a tocar el fondo, porque queda apoyada sobre las puntas de esos bultos con aire debajo, así que la superficie de contacto es mínima. Al no llegar a mojar, la gota se redondea casi hasta formar una bola y rueda a la menor inclinación. Por el camino va arrastrando las partículas de polvo que encuentra, que se pegan al agua antes que a la hoja.",
        destacado: { tipo: "frase", frase: "La gota se apoya en las puntas y no llega a tocar el fondo." },
      },
      {
        rotulo: "Copiarlo",
        texto:
          "Llevar aquello a un material fabricado exigió reproducir la rugosidad a escala de micras, y ese resultó ser el trabajo verdaderamente difícil. Existen ya pinturas de fachada, tejidos, cristales y azulejos con superficies de este tipo. Se ensucian mucho menos que los normales y, en muchos casos, se limpian solos con el agua de lluvia. El problema de todos ellos es la durabilidad. Esas microestructuras son delicadas y se estropean con el roce, con los detergentes fuertes o con la grasa, que sí moja el material y arruina el efecto.",
        destacado: { tipo: "cifra", cifra: "150", unidad: "grados forma la gota con la superficie" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un campo entero de investigación en superficies, con aplicaciones que van desde las fachadas que se limpian solas hasta los tejidos donde el vino resbala sin dejar mancha. Quedó también una advertencia útil frente al entusiasmo. En la naturaleza, esas superficies funcionan porque la planta las repara sin parar, fabricando cera nueva cada día, mientras que un azulejo no se repara solo. Copiar la forma resulta fácil comparado con copiar el mantenimiento. Ahí es exactamente donde fallan estos productos al cabo de unos años de sol, lluvia y limpiezas.",
      },
    ],
  },
];
