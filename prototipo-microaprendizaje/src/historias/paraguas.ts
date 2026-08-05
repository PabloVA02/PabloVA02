import type { Short } from "../shorts";

/* ==========================================================================
   El paraguas.

   Un objeto que todo el mundo ha tenido y perdido, y que arrastra una
   historia social sorprendente: durante siglos fue cosa de mujeres, de curas
   o de reyes, y llevarlo por la calle costaba insultos.

   La regla del tema: se cuenta QUIÉN PODÍA LLEVARLO y por qué, porque el
   paraguas es un objeto de estatus antes que de lluvia. Y siempre se dice de
   qué está hecho el armazón —ballena, madera, acero, aluminio—, porque cada
   material cambia el precio y con el precio cambia quién lo lleva.
   ========================================================================== */

export const PARAGUAS: Short[] = [
  {
    id: "el-hombre-del-paraguas",
    titulo: "Al primero le tiraban basura",
    gancho: "Los cocheros de alquiler lo insultaban por la calle: si no llovía encima, nadie pagaba un carruaje.",
    categoria: "Paraguas",
    color: "var(--clay)",
    curioso: true,
    encargo: "Un paraguas negro grande abierto en una calle empedrada bajo lluvia fina.",
    entrada:
      "Londres, hacia 1750. El paraguas existe y se conoce, pero en Inglaterra solo lo usan las mujeres, y las tiendas lo tienen por artículo femenino. Un hombre que ha viajado mucho por Europa y por Oriente decide que aquello es una tontería y empieza a salir a la calle con uno, todos los días, llueva o no. Lo hará durante treinta años seguidos.",
    paginas: [
      {
        rotulo: "El enemigo del cochero",
        texto:
          "La reacción fue mucho más agresiva de lo que cabría esperar de un objeto de tela y madera. Los aprendices le gritaban por la calle y algunos le tiraban desperdicios, pero la hostilidad organizada venía de los cocheros de alquiler, que veían el asunto con una claridad comercial impecable: en una ciudad donde llueve constantemente, quien no tiene con qué taparse paga un coche para recorrer cuatro calles. Un paraguas es un cliente perdido para siempre. Se cuenta que alguno lanzó su caballo hacia él a propósito, y que él se defendió con el propio paraguas.",
        destacado: { tipo: "frase", frase: "Un paraguas es un cliente que ya no coge el coche." },
      },
      {
        rotulo: "Treinta años de calle",
        texto:
          "El hombre era comerciante y filántropo, fundador de un hospital para niños abandonados, y tenía una tozudez notable: siguió saliendo con el paraguas hasta su muerte en 1786. Para entonces la costumbre se había extendido y en Londres empezaban a verse hombres con paraguas sin que nadie girara la cabeza. Los aparatos de entonces eran armatostes: varillas de barba de ballena, mango de madera maciza, tela de seda aceitada o de algodón encerado, y un peso de más de dos kilos que obligaba a llevarlos como un bastón. Cerrados chorreaban durante horas.",
        destacado: { tipo: "cifra", cifra: "2", unidad: "kilos pesaba un paraguas de la época" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el nombre. Durante un siglo, en el habla popular londinense se llamó a los paraguas con el apellido de aquel hombre, igual que hoy se llama a un pañuelo de papel por una marca. La ciudad pasó de burlarse de él a convertir el paraguas negro en su símbolo más reconocible, el complemento del oficinista, del banquero y del ministro. Y la resistencia inicial dejó una lección que se repite con cualquier objeto nuevo: la burla no venía de que fuera raro, venía de que le quitaba el negocio a alguien que ya lo tenía montado.",
      },
    ],
  },

  {
    id: "varillas-de-acero",
    titulo: "El acero lo puso al alcance",
    gancho: "Una varilla con forma de U pesa la mitad y aguanta el doble. Cambió el precio y cambió quién lo llevaba.",
    categoria: "Paraguas",
    color: "var(--slate)",
    encargo: "Un detalle de varillas metálicas acanaladas abiertas contra un cielo gris.",
    entrada:
      "Inglaterra, 1852. Hasta ese año el esqueleto de un paraguas se hace con barba de ballena o con tiras de madera, materiales caros, pesados y que se parten con el viento. Un fabricante de acero de una ciudad conocida por sus cuchillos patenta una idea que parece menor y no lo es: hacer las varillas de acero, pero no macizas, sino con la sección en forma de U.",
    paginas: [
      {
        rotulo: "La forma en U",
        texto:
          "El truco es puramente geométrico y es el mismo que explica por qué una viga de un puente tiene forma de doble T. Una barra maciza aguanta la flexión con el material de los bordes; el del centro casi no trabaja y solo añade peso. Al doblar una chapa fina en forma de U se consigue una pieza con el material repartido donde hace falta, que resiste igual que una varilla maciza mucho más gruesa pesando la mitad. El paraguas quedó ligero, más rígido frente a las rachas de viento y, sobre todo, mucho más barato de fabricar en serie.",
        destacado: { tipo: "frase", frase: "El material del centro de la barra no trabaja: solo pesa." },
      },
      {
        rotulo: "De lujo a corriente",
        texto:
          "El efecto sobre el precio fue inmediato. Un paraguas dejó de ser una inversión que se heredaba y se reparaba durante años y pasó a ser un objeto que podía permitirse un obrero, y la fábrica llegó a ser la mayor del mundo en su ramo, con miles de empleados. Al abaratarse cambió también la costumbre: aparecieron los paraguas de colores, los de señora más pequeños y los primeros paragüeros en los portales y en los cafés, porque de pronto había paraguas por todas partes y había que dejarlos en alguna parte al entrar.",
        destacado: { tipo: "cifra", cifra: "1852", unidad: "el año de la patente de la varilla" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el esqueleto. El paraguas que se compra hoy en cualquier esquina tiene exactamente la misma arquitectura que aquel de 1852: varillas acanaladas, un anillo corredizo que sube y baja por el mango y unos tirantes que empujan hacia fuera al abrirlo. Han cambiado los materiales —aluminio, fibra de vidrio, poliéster— y poco más. Y quedó una paradoja que enfada a mucha gente: al volverse tan barato, el paraguas se convirtió en el objeto que menos cuidamos, hasta el punto de que se pierden por millones y casi nadie se molesta en volver a buscarlo.",
      },
    ],
  },

  {
    id: "paraguas-de-bolsillo",
    titulo: "Dos siglos para que se plegara",
    gancho: "La idea era vieja y evidente. Lo difícil era que el tubo aguantara plegarse mil veces sin partirse.",
    categoria: "Paraguas",
    color: "var(--plum)",
    encargo: "Un paraguas plegado y corto sobre la mesa, junto a un sombrero y unas llaves.",
    entrada:
      "Alemania, 1928. Todo el mundo lleva paraguas desde hace casi un siglo, y todo el mundo se queja de lo mismo: mide casi un metro, no cabe en ninguna parte y hay que llevarlo en la mano incluso cuando ha dejado de llover. Un ingeniero que había pensado en el problema desde joven presenta la patente de un paraguas cuyo mango y cuyas varillas se acortan sobre sí mismos.",
    paginas: [
      {
        rotulo: "El tubo telescópico",
        texto:
          "El problema no era imaginarlo, sino aguantarlo. Un mango telescópico es un tubo dentro de otro con un juego de milésimas: si va holgado, baila y el paraguas se dobla al primer golpe de viento; si va apretado, se agarrota en cuanto entra una gota de agua o una mota de polvo. Las varillas plantean lo mismo multiplicado por ocho, con articulaciones diminutas que tienen que doblarse en el sentido justo. Hizo falta un acero fino de buena calidad y máquinas capaces de trabajar con tolerancias pequeñas, y por eso la idea no llegó antes.",
        destacado: { tipo: "frase", frase: "Holgado baila y apretado se agarrota: ese era el problema." },
      },
      {
        rotulo: "En el bolso",
        texto:
          "El aparato se vendió con un nombre cariñoso que significaba enano y salió al mercado en 1932 con un éxito enorme, sobre todo entre las mujeres, porque cabía en el bolso. Medía treinta centímetros cerrado frente a los noventa de un paraguas normal, y esa diferencia lo cambió todo: se podía llevar siempre encima por si acaso, en lugar de decidir por la mañana si iba a llover. El paraguas dejó de ser una previsión meteorológica y pasó a ser un objeto que se olvida en el fondo de un bolso durante meses.",
        destacado: { tipo: "cifra", cifra: "30", unidad: "centímetros medía cerrado, frente a 90" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el objeto que casi todo el mundo tiene y casi nadie sabe dónde está. El transporte público de las grandes ciudades recoge decenas de miles de paraguas al año en sus objetos perdidos y casi ninguno se reclama, porque cuesta más ir a buscarlo que comprar otro. También quedó el reproche de los fabricantes antiguos, que sigue siendo razonable: un paraguas plegable barato dura una temporada, mientras que los de armazón entero, con su varilla de acero de 1852 y su mango de madera, se reparaban y duraban treinta años.",
      },
    ],
  },
];
