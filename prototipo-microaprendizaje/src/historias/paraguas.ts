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
    titulo: "Al primero lo insultaban",
    gancho: "Los cocheros de alquiler lo insultaban por la calle: si no llovía encima, nadie pagaba un carruaje.",
    categoria: "Paraguas",
    color: "var(--clay)",
    curioso: true,
    encargo: "Un paraguas negro grande abierto en una calle empedrada bajo lluvia fina.",
    fotos: [
      {
        archivo: "Burgos in the rain - Flickr - conall...jpg",
        autor: "Una calle porticada de Burgos bajo la lluvia. Fotografía de Conall.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Burgos_in_the_rain_-_Flickr_-_conall...jpg",
        foco: "50% 55%",
        alt: "Paraguas abiertos avanzando por una calle empedrada y mojada, con soportales de piedra a un lado.",
      },
      {
        archivo: "Fine day in London, RP-F-F25501-S.jpg",
        autor: "Un coche de caballos en una calle de Londres, fotografía de Hector Colard de hacia 1891. Rijksmuseum.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Fine_day_in_London,_RP-F-F25501-S.jpg",
        foco: "50% 45%",
        alt: "Un carruaje tirado por un caballo parado en una calle londinense, en una fotografía antigua en sepia.",
      },
      {
        archivo: "Wachtende rijtuigen bij de Waterloo Bridge in Londen, RP-P-OB-25.711.jpg",
        autor: "Coches de alquiler esperando junto al puente de Waterloo, en Londres. Aguafuerte de Willem Witsen, 1890. Rijksmuseum.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Wachtende_rijtuigen_bij_de_Waterloo_Bridge_in_Londen,_RP-P-OB-25.711.jpg",
        foco: "50% 50%",
        alt: "Un grabado de varios carruajes parados en fila junto a un puente, con los caballos cabizbajos.",
      },
      {
        archivo: "Downpour in Chinatown.jpg",
        autor: "Un aguacero en el barrio chino de Toronto.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Downpour_in_Chinatown.jpg",
        foco: "50% 55%",
        alt: "Lluvia fuerte cayendo sobre una calle comercial, con el asfalto encharcado y reflejos de los escaparates.",
      },
    ],
    entrada:
      "Londres, hacia 1750. El paraguas existe desde hace siglos y todo el mundo sabe lo que es, pero en Inglaterra solo lo usan las mujeres y las tiendas lo tienen catalogado como artículo femenino, junto a los abanicos. Un hombre que ha viajado mucho por Europa y por Oriente, y que ha visto usarlo allí con normalidad, decide que aquello es una tontería y empieza a salir a la calle con uno todos los días, llueva o no llueva. Lo hará durante treinta años seguidos, aguantando burlas, insultos y alguna pedrada, hasta que la costumbre cambie de bando.",
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
    titulo: "El acero lo abarató",
    gancho: "Una varilla con forma de U pesa la mitad y aguanta el doble. Cambió el precio y cambió quién lo llevaba.",
    categoria: "Paraguas",
    color: "var(--slate)",
    encargo: "Un detalle de varillas metálicas acanaladas abiertas contra un cielo gris.",
    fotos: [
      {
        archivo: "Les Parapluies de Viborg.jpg",
        autor: "Paraguas de colores colgados sobre una calle de Viborg, en Dinamarca, un día de lluvia.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File%3ALes%20Parapluies%20de%20Viborg.jpg",
        foco: "50% 45%",
        alt: "Docenas de paraguas abiertos de colores colgados de cables sobre una calle, entre los tejados.",
      },
      {
        archivo: "Clear Umbrella Rain Liverpool (Unsplash).jpg",
        autor: "Paraguas transparente bajo la lluvia en Liverpool, con las varillas a la vista.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AClear%20Umbrella%20Rain%20Liverpool%20(Unsplash).jpg",
        foco: "50% 50%",
        alt: "Paraguas de plástico transparente visto desde debajo, con las varillas metálicas y las gotas encima.",
      },
      {
        archivo: "Man with umbrella crossing road in the rain.jpg",
        autor: "Hombre cruzando la calle con paraguas bajo la lluvia, en Mánchester.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AMan%20with%20umbrella%20crossing%20road%20in%20the%20rain.jpg",
        foco: "50% 50%",
        alt: "Figura con paraguas negro cruzando una calzada mojada, con los coches y los edificios difuminados.",
      },
      {
        archivo: "Umbrella in Wellington.jpg",
        autor: "Lluvia y paraguas en una esquina de Wellington, en Nueva Zelanda.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AUmbrella%20in%20Wellington.jpg",
        foco: "50% 50%",
        alt: "Paraguas abierto en una acera mojada de ciudad, con el reflejo de las luces en el suelo.",
      },
    ],
    entrada:
      "Inglaterra, 1852. Hasta ese año el esqueleto de un paraguas se hace con barba de ballena o con tiras de madera curvada, materiales caros, pesados y que se parten en cuanto sopla algo de viento, de manera que un paraguas es a la vez un objeto de lujo y un objeto que dura poco. Un fabricante de acero de una ciudad conocida por sus cuchillos patenta entonces una idea que parece menor y que no lo es en absoluto: hacer las varillas de acero, pero no macizas, sino con la sección doblada en forma de U.",
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
    titulo: "Dos siglos para plegarlo",
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
