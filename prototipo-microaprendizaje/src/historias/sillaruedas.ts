import type { Short } from "../shorts";

/* ==========================================================================
   La silla de ruedas.

   Un objeto que pasó de mueble a vehículo, y de vehículo a herramienta
   deportiva. El tema se estropea si se cuenta con lástima o como historia
   de superación.

   La regla del tema: cada short parte de UN PROBLEMA MECÁNICO CONCRETO
   (agarrar la rueda, caber en un coche, subir un escalón, no volcar) y lo
   resuelve con física. La persona que la usa aparece como usuaria de un
   aparato, nunca como paciente.
   ========================================================================== */

export const SILLA_DE_RUEDAS: Short[] = [
  {
    id: "la-silla-que-empujaba-otro",
    titulo: "La silla la empujaba otro",
    gancho: "Durante siglos fue un mueble con ruedas, no un vehículo. Nadie pensó que su usuario quisiera moverla solo.",
    categoria: "Objetos",
    color: "var(--slate)",
    encargo: "Silla de ruedas antigua de mimbre y madera con ruedecillas pequeñas debajo.",
    fotos: [
      {
        archivo: "Early wheelchair (39723826015).jpg",
        autor: "Un carruaje para enfermos del castillo de Frederiksborg, en Dinamarca. Fotografía de Thomas Quine.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Early_wheelchair_(39723826015).jpg",
        foco: "50% 50%",
        alt: "Un asiento antiguo de madera con capota de cuero, una rueda grande de radios detrás y una ruedecilla delante.",
      },
      {
        archivo: "Küschall wheelchair R33.jpg",
        autor: "Una silla de ruedas manual moderna: el aro fino azul va montado por fuera del neumático. Fotografía de Tim99.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:K%C3%BCschall_wheelchair_R33.jpg",
        foco: "50% 50%",
        alt: "Una silla de ruedas ligera vista de lado, con la rueda grande y un aro delgado montado por fuera de ella.",
      },
      {
        archivo: "Wheelchairs for visitors at the entrance - NÄL hospital 3.jpg",
        autor: "Sillas de transporte encajadas unas en otras en la entrada de un hospital sueco. Fotografía de W. Carter.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Wheelchairs_for_visitors_at_the_entrance_-_N%C3%84L_hospital_3.jpg",
        foco: "50% 58%",
        alt: "Una fila de sillas metálicas plegables metidas unas dentro de otras contra una pared de ladrillo.",
      },
      {
        archivo: "2026 Barcelona Marathon wheelchair race at passeig de gracia by JJxFile.jpg",
        autor: "La carrera en silla de ruedas del maratón de Barcelona, en el paseo de Gracia. Fotografía de Jorge Jaramillo.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:2026_Barcelona_Marathon_wheelchair_race_at_passeig_de_gracia_by_JJxFile.jpg",
        foco: "50% 45%",
        alt: "Varios corredores en sillas de ruedas de competición avanzando inclinados por una avenida ancha.",
      },
    ],
    entrada:
      "Europa, siglos XVI a XIX. Las primeras sillas con ruedas para personas enfermas no eran vehículos: eran sillones pesados de madera a los que alguien había puesto ruedecillas debajo, y así funcionaban y así se vendían. El detalle que hoy salta a la vista es que ninguna se podía mover desde el asiento, porque las ruedas quedaban demasiado lejos de las manos o iban tapadas por el armazón. Alguien tenía que empujar siempre. Y eso, durante trescientos años, no le pareció un defecto de diseño a nadie: se daba por supuesto que quien iba sentado no querría moverse solo.",
    paginas: [
      {
        rotulo: "El aro",
        texto:
          "El invento que lo cambió todo es una pieza tan sencilla que cuesta creer que tardara tanto. Se trata de un aro metálico montado por fuera de la rueda grande y a pocos centímetros de ella. Ese aro permite empujar sin tocar el neumático, que va sucio y mojado de la calle. Sin él, mover la silla exigiría agarrar la goma con las manos y acabar negro. Con el aro, y colocando las ruedas grandes atrás y junto al asiento, el usuario se mueve solo. Aquella combinación convirtió un mueble en un vehículo, y a un paciente en una persona autónoma.",
        destacado: { tipo: "frase", frase: "El aro convirtió un mueble en un vehículo." },
      },
      {
        rotulo: "Poder plegarla",
        texto:
          "El segundo salto llegó en 1933, cuando dos ingenieros diseñaron una silla que se plegaba. Uno de ellos era ingeniero de minas y había quedado en silla de ruedas tras un accidente. Su queja era muy concreta, porque su silla no cabía en un coche y no podía salir de casa. La solución fue un armazón de tubo de acero con una cruz articulada bajo el asiento. Esa cruz permite juntar las dos ruedas y dejar la silla plana como una carpeta. El diseño pesaba la mitad que los anteriores y sigue siendo el esquema básico de hoy.",
        destacado: { tipo: "cifra", cifra: "1933", unidad: "el año de la primera silla plegable" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un objeto que ha ido perdiendo peso sin parar, de treinta kilos a menos de diez. Las sillas deportivas de competición bajan de cinco kilos usando fibra de carbono y titanio. Quedó también una diferencia enorme de precio entre lo que cubre la sanidad y lo que existe. Una silla estándar pesada se financia sin problema, y una ligera a medida cuesta miles de euros. Y quedó un cambio de lenguaje que refleja exactamente lo que cambió el aro de empuje. Ya no se dice que alguien está postrado, sino que alguien usa una silla de ruedas.",
      },
    ],
  },
  {
    id: "el-bordillo",
    titulo: "Un bordillo es una pared",
    gancho: "Un escalón pequeño no es un detalle: es una pared. Bajarlo costó una campaña de años y mucho cemento.",
    categoria: "Ciudades",
    color: "var(--clay)",
    encargo: "Esquina de acera con el bordillo rebajado formando una rampa hasta el asfalto.",
    fotos: [
      {
        archivo: "UC Berkeley September 2024 001.jpg",
        autor: "Berkeley, California, con el campus y las calles donde empezó todo. Fotografía de King of Hearts.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:UC_Berkeley_September_2024_001.jpg",
        foco: "50% 62%",
        alt: "Vista aérea de una ciudad universitaria, con calles rectas, casas bajas y colinas al fondo.",
      },
      {
        archivo: "UC Berkeley September 2024 002.jpg",
        autor: "Otra vista de Berkeley desde el aire. Fotografía de King of Hearts.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:UC_Berkeley_September_2024_002.jpg",
        foco: "50% 60%",
        alt: "Manzanas de casas y avenidas arboladas vistas desde arriba.",
      },
      {
        archivo: "University of California, Berkeley.jpg",
        autor: "Panorámica del campus de Berkeley. Fotografía de Daniel Koenig.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:University_of_California,_Berkeley.jpg",
        foco: "50% 50%",
        alt: "Panorámica muy ancha de un campus universitario entre árboles, con la bahía al fondo.",
      },
      {
        archivo: "UC Berkeley campus and surroundings from Berkeley Hills January 2026.jpg",
        autor: "Berkeley y su bahía vistos desde las colinas.",
        licencia: "CC BY 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:UC_Berkeley_campus_and_surroundings_from_Berkeley_Hills_January_2026.jpg",
        foco: "50% 55%",
        alt: "La ciudad extendida hasta la bahía, vista desde lo alto de unas colinas.",
      },
    ],
    entrada:
      "Estados Unidos, 1972. Un grupo de estudiantes en silla de ruedas de una universidad de California se harta de no poder cruzar la calle: cada esquina termina en un escalón de doce centímetros que para ellos es un muro, y la ciudad lleva años sin hacer nada. Así que salen de noche con sacos de cemento, rompen los bordillos de varias esquinas y construyen ellos mismos las rampas, sin permiso de nadie. La ciudad acaba adoptando la idea en vez de multarlos, y el rebaje de bordillo termina siendo norma en medio mundo.",
    paginas: [
      {
        rotulo: "Una pared",
        texto:
          "Una silla de ruedas manual sube un escalón de dos centímetros sin ningún problema. A partir de cuatro o cinco ya hace falta levantar las ruedas pequeñas de delante. Un bordillo normal mide entre doce y quince centímetros, y eso es sencillamente infranqueable. La rueda delantera choca contra la pared vertical y la silla se para en seco. Sin rampa, esa esquina convierte una manzana entera en un sitio del que no se puede salir. El mismo escalón afecta también a un carrito de bebé, a una maleta y a quien usa bastón.",
        destacado: { tipo: "frase", frase: "Doce centímetros de escalón son una pared vertical." },
      },
      {
        rotulo: "El efecto acera",
        texto:
          "Aquellas rampas nocturnas acabaron dando nombre a una idea que se estudia en diseño. Se llama efecto de la acera rebajada y describe algo que se repite una y otra vez. Una solución pensada para un grupo pequeño acaba beneficiando a muchísima más gente de la prevista. Las cuentas de uso lo confirman, porque la mayoría de quienes usan un rebaje no van en silla. Van con carrito, con carro de la compra, con muletas, en patinete o arrastrando una maleta. Lo mismo pasa con los subtítulos, con los mandos grandes y con las puertas automáticas.",
        destacado: { tipo: "cifra", cifra: "1972", unidad: "el año de las rampas hechas de noche" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una normativa de accesibilidad en casi todos los países desarrollados, con medidas exactas. Fija la pendiente máxima de una rampa, el ancho de una puerta y el radio de giro necesario. Quedó también un rebaje mal hecho que se ve en muchas ciudades y no sirve de nada. Si la rampa acaba en un escalón de dos dedos, la silla se sigue quedando fuera. Y quedó una manera de comprobar cualquier obra que no necesita ningún aparato de medida. Basta empujar un carrito de la compra por ahí y ver dónde hay que levantarlo.",
      },
    ],
  },
  {
    id: "la-silla-de-baloncesto",
    titulo: "Las ruedas del baloncesto van inclinadas",
    gancho: "Forman una uve invertida y no es un capricho de diseño. Esa inclinación decide si el jugador vuelca o gira.",
    categoria: "Deporte",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Silla de baloncesto adaptado vista de frente, con las ruedas muy inclinadas.",
    entrada:
      "Estados Unidos, 1946, cuando los hospitales de veteranos de la Segunda Guerra Mundial organizan los primeros partidos en silla de ruedas. De aquellos partidos sale un deporte que hoy es paralímpico y una silla que no se parece nada a la de calle. El detalle más visible es que las ruedas van muy inclinadas hacia fuera por abajo.",
    paginas: [
      {
        rotulo: "La inclinación",
        texto:
          "Inclinar las ruedas hacia fuera separa los puntos de apoyo en el suelo sin ensanchar el asiento. Con la base más ancha, la silla aguanta un giro brusco sin volcar de lado. Como el asiento sigue estrecho, el jugador puede pasar entre otros dos sin engancharse. La inclinación cambia además el gesto de empujar, porque el aro queda más cerca de los hombros. Eso permite dar impulsos más largos y más potentes con menos esfuerzo en cada brazada. El precio es que la silla ocupa más ancho y desgasta antes los neumáticos por el borde.",
        destacado: { tipo: "frase", frase: "Base ancha abajo y asiento estrecho arriba." },
      },
      {
        rotulo: "Cada deporte",
        texto:
          "Cada deporte en silla usa un diseño distinto, y las diferencias saltan a la vista. La de baloncesto lleva un parachoques bajo y una rueda antivuelco detrás para los frenazos. La de rugby va blindada por delante como un carro de combate, porque ahí los choques están permitidos. La de atletismo tiene tres ruedas y el asiento casi tumbado, para reducir la resistencia del aire. Ninguna de esas sillas sirve para ir por la calle, porque no giran en un pasillo. Un deportista tiene dos sillas, igual que un ciclista tiene una bici de carretera y otra de ciudad.",
        destacado: { tipo: "cifra", cifra: "1946", unidad: "el año de los primeros partidos" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un deporte que se juega en más de un centenar de países y llena pabellones. Quedaron también unas reglas de clasificación que puntúan a cada jugador según su movilidad. La suma de puntos de los cinco que están en pista no puede pasar de un tope. Eso obliga a que en el campo haya siempre jugadores con distintos grados de movilidad. Y quedó una parte del diseño deportivo que se ha ido colando en las sillas de calle. Las ruedas algo inclinadas, el peso ligero y el respaldo bajo salieron todos del pabellón.",
      },
    ],
  },
];
