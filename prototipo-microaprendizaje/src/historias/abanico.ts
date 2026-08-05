import type { Short } from "../shorts";

/* ==========================================================================
   El abanico.

   Un objeto de dos euros que mueve aire y una leyenda que se fabricó para
   venderlo. El tema se estropea si se convierte en historia de la moda.

   La regla del tema: el abanico NO ENFRÍA EL AIRE, retira el aire ya
   usado que hay pegado a la piel, y eso se explica antes de nada. Cuando
   aparece una creencia, se dice de dónde salió y qué parte era cierta.
   ========================================================================== */

export const ABANICO: Short[] = [
  {
    id: "el-abanico-plegable",
    titulo: "El abanico llegó de Japón",
    gancho: "En Europa se abanicaban con una pantalla rígida. El plegable es un invento japonés que cabe en un puño.",
    categoria: "Objetos",
    color: "var(--ochre)",
    encargo: "Abanico plegable abierto sobre una mesa, con el varillaje de madera a la vista.",
    entrada:
      "Japón, siglo VIII, y Europa a partir del XVI. El abanico rígido, que es una pantalla con mango, existe en casi todas las culturas calurosas desde hace milenios. El plegable, en cambio, se inventó en Japón y tardó siglos en llegar a Europa por la ruta de los portugueses. Su gracia es que se guarda en un puño y se despliega en un gesto.",
    paginas: [
      {
        rotulo: "Mover el aire",
        texto:
          "Un abanico no enfría el aire, porque no tiene con qué hacerlo. Lo que hace es mover el aire pegado a la piel, que es donde está el problema. Alrededor del cuerpo se forma una capa fina de aire caliente y cargado de humedad. Esa capa frena la evaporación del sudor, y sin evaporación el sudor no enfría nada. Abanicarse retira esa capa y la sustituye por aire más seco, así que el sudor vuelve a evaporarse. Por eso funciona muchísimo peor en un ambiente muy húmedo, donde el aire ya no admite más vapor.",
        destacado: { tipo: "frase", frase: "El abanico no enfría el aire: retira el que ya sobraba." },
      },
      {
        rotulo: "El varillaje",
        texto:
          "Un abanico plegable es una pieza de ingeniería más fina de lo que parece. Lleva unas varillas unidas por un remache en un extremo y una tela o un papel pegado arriba. Al abrirse, las varillas tienen que separarse en ángulos exactamente iguales o el papel se arruga. El papel va plegado en acordeón y lleva doblado a mano un número impar de pliegues. Los varillajes buenos son de madera de peral o de hueso, cortados a un grosor uniforme. En España el oficio se concentró en una comarca valenciana que sigue fabricándolos hoy.",
        destacado: { tipo: "cifra", cifra: "20", unidad: "varillas lleva un abanico corriente" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un objeto que se ha vuelto a vender muchísimo con los veranos cada vez más largos. Quedó también un gesto que en muchos sitios sigue siendo señal de que hace demasiado calor dentro. Los estudios de confort en interiores lo tienen medido, porque mover el aire equivale a bajar grados. Una corriente suave da una sensación parecida a bajar dos o tres grados el termostato. Por eso un ventilador de techo gasta una décima parte que un aparato de aire y alivia igual. Un abanico es exactamente lo mismo, movido con el brazo y sin ningún consumo.",
      },
    ],
  },
  {
    id: "el-lenguaje-del-abanico",
    titulo: "El lenguaje del abanico es falso",
    gancho: "Los gestos secretos que todo el mundo cita salen de un folleto publicitario de una tienda de París.",
    categoria: "Creencias",
    color: "var(--plum)",
    curioso: true,
    encargo: "Folleto decimonónico con dibujos de gestos de abanico y sus significados.",
    entrada:
      "París y Londres, siglo XIX. Circula desde entonces la idea de que las mujeres se comunicaban en secreto moviendo el abanico de una manera u otra, cada gesto con su significado. La historia es preciosa y su origen documentado es bastante menos romántico. Las listas de gestos que se citan hoy vienen de folletos que repartían las propias tiendas de abanicos.",
    paginas: [
      {
        rotulo: "El folleto",
        texto:
          "Una casa de abanicos parisina publicó a mediados del siglo XIX un pequeño catálogo con instrucciones. Explicaba qué significaba abanicarse deprisa, cerrarlo de golpe o apoyarlo en la mejilla derecha. Era publicidad pura, porque quien quisiera hablar ese idioma necesitaba comprar un abanico primero. El folleto se copió, se tradujo y acabó en revistas de moda de media Europa. De ahí saltó a las novelas, al teatro y después a los libros de historia como si fuera cierto. No hay documentos anteriores que describan ese código funcionando de verdad en la vida real.",
        destacado: { tipo: "frase", frase: "El código secreto lo repartía la tienda que los vendía." },
      },
      {
        rotulo: "Lo que sí",
        texto:
          "Eso no significa que el abanico no dijera nada, porque decía bastante sin ningún código. Un abanico tapa media cara y permite hablar sin que se vean los labios ni la expresión. En un salón lleno de gente eso ya es un instrumento social de primer orden. Abrirlo y cerrarlo marca el ritmo de una conversación igual que hoy lo marca un móvil en la mano. Y el propio objeto decía mucho de quien lo llevaba, por el material y por lo pintado. Un abanico de encaje y marfil pintado a mano costaba lo que un mes de sueldo.",
        destacado: { tipo: "cifra", cifra: "1", unidad: "mes de sueldo costaba un abanico bueno" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una leyenda que se repite en guías turísticas, en documentales y en artículos de prensa. Quedó también un ejemplo muy claro de cómo se fabrica una tradición y luego se cree. Basta que algo se repita durante un siglo para que nadie se acuerde de dónde salió. Quedaron los propios folletos, que se conservan en varios museos y se pueden leer enteros. Y quedó una pregunta razonable que hace cualquiera al oír la historia por primera vez. Si el código era secreto, no tiene mucho sentido que viniera impreso con el producto.",
      },
    ],
  },
  {
    id: "abanicarse-calienta",
    titulo: "Abanicarse a veces calienta",
    gancho: "Si el aire está más caliente que la piel, moverlo trae calor en vez de llevárselo. La frontera está medida.",
    categoria: "Cuerpo",
    color: "var(--slate)",
    curioso: true,
    encargo: "Ventilador de sobremesa funcionando en una habitación con un termómetro marcando calor.",
    entrada:
      "Cualquier ola de calor, con el estudio que lo midió publicado en 2019. Abanicarse o poner un ventilador parece siempre buena idea, y hay un punto a partir del cual deja de serlo. Si el aire que se mueve está más caliente que la piel, ese aire le entrega calor al cuerpo en vez de quitárselo. Dónde está exactamente ese punto depende de la humedad.",
    paginas: [
      {
        rotulo: "Dos efectos",
        texto:
          "Mover aire sobre la piel hace dos cosas a la vez que van en direcciones contrarias. Por un lado acelera la evaporación del sudor, y eso enfría bastante. Por otro lado transmite calor por contacto, y ahí manda la diferencia de temperatura entre aire y piel. La piel suele estar alrededor de treinta y cinco grados, algo por debajo de la temperatura interna. Con el aire a veinticinco grados, el balance está clarísimo y el ventilador ayuda mucho. Con el aire a cuarenta y dos, el contacto empieza a pesar más que la evaporación.",
        destacado: { tipo: "frase", frase: "El aire quita calor y también lo trae: gana el mayor." },
      },
      {
        rotulo: "La humedad",
        texto:
          "El punto exacto donde se invierte el balance no es un número fijo, y ahí está el matiz. Si el aire está muy seco, el sudor se evapora tanto que compensa hasta temperaturas altísimas. En un desierto a cuarenta y cinco grados con humedad baja, el ventilador sigue siendo útil. Con humedad alta el sudor no se evapora, así que solo queda el efecto de contacto. En una ciudad húmeda a cuarenta grados, el ventilador puede empeorar las cosas de verdad. El caso peor es una persona mayor que suda poco, porque para ella solo queda el contacto.",
        destacado: { tipo: "cifra", cifra: "35", unidad: "grados tiene la piel, y ahí está la frontera" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una recomendación oficial que varias autoridades sanitarias tuvieron que matizar hace pocos años. Durante mucho tiempo decían sin más que no se usara ventilador por encima de treinta y cinco grados. Los estudios recientes han mostrado que ese consejo era demasiado simple y dependía de la humedad. Ahora se recomienda mirar los dos datos juntos y no solo la temperatura del termómetro. Y quedó un truco que sí funciona siempre, porque mojarse la piel con agua cambia la cuenta entera. Con la piel mojada hay mucho más que evaporar, y ahí el aire vuelve a ser un aliado.",
      },
    ],
  },
];
