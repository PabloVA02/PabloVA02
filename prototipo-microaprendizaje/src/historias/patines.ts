import type { Short } from "../shorts";

/* ==========================================================================
   Los patines.

   Resbalar por gusto y por necesidad. El tema se estropea si se cuenta como
   deporte: lo interesante es que durante siglos patinar fue la manera normal
   de ir al mercado, y que el patin de ruedas tardo cien anos en poder girar.

   La regla del tema: se explica SIEMPRE POR QUE RESBALA O NO RESBALA antes
   de contar lo que se hacia con ello. Un hueso no tiene filo y no muerde el
   hielo; una rueda fija no gira; una goma bajo el eje lo cambia todo. Nada
   de nombres de campeones. Y se dice siempre quien lo usaba: carteros y
   lecheros antes que deportistas.
   ========================================================================== */

export const PATINES: Short[] = [
  {
    id: "los-huesos-atados-a-los-pies",
    titulo: "Los patines de hueso",
    gancho: "No servían para deslizarse solos. Había que empujarse con un palo, como quien mueve una barca.",
    categoria: "Patines",
    color: "var(--slate)",
    encargo: "Una tibia de caballo pulida y agujereada por los extremos, sobre hielo.",
    fotos: [
      {
        archivo: "Landschap met een bevroren gracht, schaatsers en een ijsschuit, SK-A-2510.jpg",
        autor: "Diversión sobre el hielo en un canal helado, pintura de Adam van Breen, 1611. Rijksmuseum.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Landschap_met_een_bevroren_gracht,_schaatsers_en_een_ijsschuit,_SK-A-2510.jpg",
        foco: "50% 50%",
        alt: "Un canal helado lleno de gente patinando, con un trineo de vela, un pueblo al fondo y árboles pelados a los lados.",
      },
      {
        archivo: "Sebastiaan Vrancx - Winter landscape with skaters on a frozen canal.jpg",
        autor: "Paisaje de invierno con patinadores en un canal helado, de Sebastiaen Vrancx, primera mitad del siglo XVII.",
        licencia: "Dominio público",
        pdPorEdad: 1647,
        fuente: "https://commons.wikimedia.org/wiki/File:Sebastiaan_Vrancx_-_Winter_landscape_with_skaters_on_a_frozen_canal.jpg",
        foco: "50% 50%",
        alt: "Una ciudad flamenca nevada con el canal helado en primer término y decenas de figuras cruzándolo.",
      },
      {
        archivo: "Patineurs sur un canal gelé (Louvre, INV 1837).jpg",
        autor: "Patinadores sobre un canal helado, cuadro conservado en el Museo del Louvre.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Patineurs_sur_un_canal_gel%C3%A9_(Louvre,_INV_1837).jpg",
        foco: "50% 50%",
        alt: "Figuras pequeñas patinando sobre un canal helado entre casas bajas, bajo un cielo pálido de invierno.",
      },
      {
        archivo: "Elector Frederick V, dethroned King of Bohemia, on a frozen canal at The Hague.jpg",
        autor: "El canal Paviljoensgracht de La Haya helado en 1621, en un grabado de Cornelis Ploos van Amstel de 1766.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Elector_Frederick_V,_dethroned_King_of_Bohemia,_on_a_frozen_canal_at_The_Hague.jpg",
        foco: "50% 50%",
        alt: "Un canal urbano helado con patinadores y trineos, y la torre de una iglesia recortada al fondo.",
      },
    ],
    entrada:
      "Sur de Finlandia, hace unos tres mil años. En invierno los lagos se hielan y quedan intransitables durante meses, lo que obliga a rodearlos y a perder días de camino en una tierra que tiene más agua que suelo firme. Los arqueólogos han encontrado allí tibias de caballo y de vaca pulidas por una cara y agujereadas por los extremos, y durante mucho tiempo nadie supo para qué servían. Son los patines más antiguos que se conocen. Y no funcionaban como los de ahora, porque un hueso no tiene filo y no muerde el hielo.",
    paginas: [
      {
        rotulo: "El palo",
        texto:
          "Un hueso pulido no tiene filo, así que no se clava en el hielo ni permite empujar de lado. Con los patines de ahora se avanza porque la cuchilla muerde el hielo y el pie empuja hacia fuera. Con un hueso atado a la suela eso es imposible, porque resbala en todas las direcciones por igual. Lo que hacían era ponerse de pie encima y clavar un palo largo en el hielo, entre los dos pies. Empujaban con el palo hacia atrás y se dejaban ir, como quien mueve una barca con una pértiga. Era menos elegante que patinar, pero permitía cruzar un lago helado a buena velocidad sin cansarse.",
        destacado: { tipo: "frase", frase: "Un hueso resbala igual en todas las direcciones." },
      },
      {
        rotulo: "El filo",
        texto:
          "El cambio llegó en los Países Bajos hacia el siglo XIV, con la cuchilla de hierro. Un filo de metal es fino y duro, así que se hunde un poco en el hielo y deja un surco. Ese surco es lo que da agarre y permite empujar de lado sin resbalar hacia atrás. Con eso se pudo soltar el palo y usar los brazos para equilibrarse y coger impulso. El país tenía además canales helados por todas partes durante el invierno, así que patinar dejó de ser deporte. Era la manera normal de ir al mercado, de repartir mercancía y de que un cartero hiciera su ronda.",
        destacado: { tipo: "cifra", cifra: "14", unidad: "el siglo de la cuchilla de hierro" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron los canales holandeses como carretera de invierno, con carreras que aún se organizan cuando el hielo aguanta. Quedó una prueba de doscientos kilómetros por once ciudades que solo puede celebrarse si hiela lo suficiente. Se ha corrido quince veces en cien años, y la última fue en 1997. Quedaron también los huesos, que aparecen en excavaciones de media Europa y que durante mucho tiempo se tomaron por herramientas. Nadie entendía para qué servía una tibia pulida y agujereada hasta que alguien probó a atársela al pie. Funcionó, y desde entonces los museos los exponen como lo que son.",
      },
    ],
  },
  {
    id: "el-violin-y-el-espejo",
    titulo: "El violín sobre ruedas",
    gancho: "Entró en un salón de baile tocando el violín sobre ruedas. Acabó contra un espejo de pared.",
    categoria: "Patines",
    color: "var(--clay)",
    curioso: true,
    encargo: "Un zapato del siglo XVIII con ruedas de metal atornilladas a la suela.",
    entrada:
      "Londres, 1760. Un inventor belga afincado en la ciudad fabrica instrumentos musicales y autómatas, esos muñecos de relojería que escriben o tocan solos, y tiene fama de aparecer en las fiestas con algún cacharro nuevo. Ese año se presenta en un baile de disfraces con unas ruedas de metal atornilladas a las suelas de los zapatos, algo que nadie ha visto nunca. La idea es buena y el momento es perfecto, porque toda la sala está mirando. Lo que no ha pensado es cómo se para.",
    paginas: [
      {
        rotulo: "Dos ruedas",
        texto:
          "Aquellos primeros patines llevaban las ruedas puestas en línea, una detrás de otra, como una bicicleta diminuta. Ese montaje tiene un problema que hoy conoce cualquiera que se haya puesto unos patines. Las ruedas en fila ruedan hacia delante estupendamente y no giran nada, porque están fijas al eje. Para cambiar de dirección hay que inclinar el pie de canto, y él no había previsto cómo hacerlo. Tampoco había previsto lo otro, que es cómo se para uno cuando ya va lanzado. Los patines actuales frenan con un taco de goma detrás; aquellos no llevaban absolutamente nada.",
        destacado: { tipo: "frase", frase: "Las ruedas en fila ruedan bien y no giran nada." },
      },
      {
        rotulo: "El espejo",
        texto:
          "Entró en el salón rodando y tocando, con todo el mundo mirando, y cogió velocidad sin darse cuenta. Al fondo de la sala había un espejo de pared de más de dos metros. No pudo girar, no pudo frenar y se estrelló contra él a la velocidad a la que iba. Rompió el espejo, rompió el violín y se hizo heridas serias, según contaron los que estaban allí. La escena se hizo famosa en Londres y se contó durante décadas como advertencia de lo que pasa por presumir. Nadie volvió a intentarlo en un salón, y el patín de ruedas se quedó en un chiste durante cien años.",
        destacado: { tipo: "cifra", cifra: "1760", unidad: "el año del choque" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó la primera aparición documentada de un patín de ruedas, y quedó de la peor manera posible. El problema que él no resolvió tardó un siglo en resolverse, y no era un problema de ruedas. Era un problema de dirección: hacía falta que las ruedas se orientaran solas al inclinar el pie. Hasta que alguien lo consiguió, patinar sobre ruedas consistió en ir recto y confiar en que hubiera sitio. Quedó además una idea que aquel inventor entendió mejor que nadie y ejecutó peor que nadie. Un cacharro nuevo se vende enseñándolo en público, siempre que uno sepa parar antes de la pared.",
      },
    ],
  },
  {
    id: "el-eje-que-gira",
    titulo: "La goma bajo el patín",
    gancho: "Durante cien años los patines solo iban rectos. La solución fue apoyar el eje sobre una goma.",
    categoria: "Patines",
    color: "var(--ochre)",
    encargo: "El eje de un patin de cuatro ruedas visto por debajo, con el taco de goma.",
    entrada:
      "Nueva York, 1863. El patín de ruedas lleva un siglo existiendo y sigue sin servir para nada, porque va recto y no hay manera de gobernarlo. Quien se lo pone solo puede hacer dos cosas: seguir la línea que lleva o caerse. Un empresario de la ciudad patenta ese año un montaje distinto, con cuatro ruedas repartidas en dos ejes y una pieza de goma entre cada eje y la bota. Ese trozo de goma, que no parece nada, es lo que convierte el patín en algo que se puede conducir.",
    paginas: [
      {
        rotulo: "La goma",
        texto:
          "Un eje atornillado a la bota no puede moverse, así que las ruedas apuntan siempre al mismo sitio. Si en vez de atornillarlo se apoya sobre un taco de goma, el eje puede bascular un poco. Al inclinar el pie hacia dentro, el peso aplasta la goma de ese lado y el eje se tuerce. Las cuatro ruedas quedan entonces apuntando en curva, y el patín gira solo mientras el patinador se inclina. Es el mismo principio que usan hoy los monopatines, y no ha cambiado en más de siglo y medio. Con eso, patinar dejó de consistir en ir recto y pasó a parecerse a bailar.",
        destacado: { tipo: "frase", frase: "Al inclinar el pie, la goma cede y el eje se tuerce." },
      },
      {
        rotulo: "El alquiler",
        texto:
          "El inventor no se dedicó a vender patines, y ahí estuvo lo listo del asunto. Montó pistas de patinaje y alquilaba los patines por horas, sin venderlos a nadie. Así se aseguraba de que nadie pudiera copiarle el mecanismo desmontando un par en su casa. Abrió salas por todo el país y las llenó de espejos, música y suelo de madera pulida. Para que las familias respetables entraran, prohibió el alcohol y contrató profesores que enseñaban a los principiantes. Funcionó tan bien que en pocos años había pistas de patinaje en casi todas las ciudades grandes.",
        destacado: { tipo: "cifra", cifra: "1863", unidad: "el año de la patente del eje" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó la pista de patinaje como sitio donde la gente joven podía quedar sin carabina, que en aquella época era mucho. Quedó el mecanismo del eje sobre goma, que llevan igual los patines de cuatro ruedas de hoy. Quedaron las modas, porque el patinaje ha resucitado tres o cuatro veces desde entonces y siempre igual. Llega una novedad técnica, se llenan las pistas durante unos años y luego se vacían sin que nadie sepa por qué. Y quedó la lección de negocio del que lo inventó. Vendió el sitio para usarlo en vez del cacharro, que es lo que hacen hoy la mitad de las empresas.",
      },
    ],
  },
];
