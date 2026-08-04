import type { Short } from "../shorts";

/* ==========================================================================
   Los monasterios.

   Durante siglos fueron a la vez granja, fábrica, hotel, hospital, archivo y
   universidad. El tema se estropea si se cuenta como historia de la piedad:
   lo interesante es que eran empresas.

   La regla del tema: se cuenta el MONASTERIO COMO ORGANIZACIÓN. Qué producía,
   cómo repartía el día, de qué vivía y qué inventó por necesidad. La fe está
   ahí, pero lo que hay que explicar es por qué una comunidad que rezaba ocho
   veces al día acabó fabricando relojes, quesos y libros en serie.
   ========================================================================== */

export const MONASTERIOS: Short[] = [
  {
    id: "las-ocho-horas-del-dia",
    titulo: "Rezar a horas fijas obligó a medir el tiempo",
    gancho: "Ocho servicios diarios, uno de ellos de madrugada. Alguien tenía que despertarse antes que todos y no fallar.",
    categoria: "Monasterios",
    color: "var(--slate)",
    encargo: "Una campana de bronce colgada en una espadaña de piedra al amanecer.",
    entrada:
      "Europa, siglo VI. Una regla monástica escrita en Italia organiza el día de una comunidad religiosa en ocho momentos de oración repartidos entre el amanecer y la noche, incluido uno en plena madrugada. La regla se copia y se adopta en cientos de casas por todo el continente, y con ella se cuela un problema técnico nuevo: hay que saber la hora sin sol.",
    paginas: [
      {
        rotulo: "El que vela",
        texto:
          "La solución inicial fue humana. Un monje se encargaba de no dormir, o de dormir a ratos, y de avisar al resto tocando una campanilla. Para orientarse usaba cualquier cosa que midiera el paso del tiempo. Una vela marcada con rayas, que se consumía a un ritmo conocido. Un reloj de agua, que goteaba de un recipiente a otro. O la posición de ciertas estrellas vistas por una ventana. La regla lo dice sin rodeos: si el hermano encargado se equivoca y la comunidad se levanta tarde, la culpa es suya y debe reconocerlo en público.",
        destacado: { tipo: "frase", frase: "Si la comunidad se levantaba tarde, la culpa era suya." },
      },
      {
        rotulo: "La máquina",
        texto:
          "De ahí sale, en línea recta, el reloj mecánico. Lo que se buscaba no era una esfera con agujas, sino un despertador: un mecanismo de pesas que soltara un martillo sobre una campana a una hora determinada, de modo que nadie tuviera que velar. Los primeros aparatos, del siglo XIII, ni siquiera tenían cara visible; sonaban, que era lo único que hacía falta. La palabra que los nombra en varios idiomas europeos viene precisamente de campana, y no de esfera ni de aguja. La esfera con números llegó después, cuando aquellos aparatos salieron del claustro y hubo que enseñar la hora a gente que pasaba por la plaza.",
        destacado: { tipo: "cifra", cifra: "8", unidad: "servicios diarios marcaba la regla" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó la costumbre de partir el día en tramos iguales anunciados por una campana. Del claustro pasó a la torre de la iglesia. De ahí, al reloj del ayuntamiento y a la sirena de la fábrica. Quedaron los nombres de aquellas horas en el idioma, incluida la siesta, que era la sexta. Y quedó una ironía que a los propios monjes les habría hecho gracia. La disciplina horaria se inventó para no faltar a la oración. Es la misma que rige hoy los turnos, los fichajes y los horarios de tren.",
      },
    ],
  },
  {
    id: "cerveza-y-queso-de-abadia",
    titulo: "Los monasterios eran fábricas de alimentos",
    gancho: "Cerveza para beber durante el ayuno, quesos que aguantan meses y licores de hierbas: todo salió de una necesidad práctica.",
    categoria: "Monasterios",
    color: "var(--ochre)",
    encargo: "Una bodega abovedada de piedra con barricas alineadas y poca luz.",
    entrada:
      "Europa, siglos IX a XVIII. Una comunidad de cien personas encerrada en un recinto tiene que comer todos los días, guardar comida para el invierno y mantener el edificio, y no puede depender del mercado más cercano. Esa necesidad convirtió a los monasterios en unidades de producción muy serias, con contabilidad, especialización y algunos productos que siguen vendiéndose hoy.",
    paginas: [
      {
        rotulo: "Beber seguro",
        texto:
          "La cerveza monástica nace de un problema sanitario. El agua de pozo o de río era una fuente frecuente de enfermedad, y hervirla para hacer cerveza la volvía segura sin que nadie supiera por qué. Además alimenta: durante los ayunos, en los que no se podía comer sólido, una cerveza espesa y nutritiva permitía aguantar semanas. Los monjes afinaron el oficio hasta convertirlo en técnica, y a ellos se debe el uso sistemático del lúpulo, que da amargor y, sobre todo, conserva la bebida durante meses. Se elaboraban además tres calidades: la fuerte para las fiestas, la corriente para la comunidad y una muy floja para los peregrinos y los criados.",
        destacado: { tipo: "frase", frase: "Hervir el agua para hacer cerveza la volvía potable." },
      },
      {
        rotulo: "Guardar el año",
        texto:
          "El queso responde a lo mismo. La leche se estropea en horas y el queso curado dura años. Así que un monasterio con vacas u ovejas convertía el sobrante de primavera en comida de invierno. Y, de paso, en mercancía para vender. Varias abadías desarrollaron quesos de corteza lavada, licores de hierbas destilados como remedio medicinal y vinos de gran calidad, y algunos de esos productos conservan hoy el nombre y la receta. La regla monástica exigía trabajar con las manos unas horas al día, y ese mandato, repetido durante siglos en cientos de casas, acabó produciendo una industria alimentaria completa.",
        destacado: { tipo: "cifra", cifra: "100", unidad: "personas había que alimentar a diario" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron marcas. Un puñado de cervecerías monásticas siguen produciendo bajo control de la comunidad. La condición es estricta: el negocio no puede buscar beneficio más allá de mantener la casa y ayudar a obras sociales. Sus botellas se venden en medio mundo. Quedaron denominaciones de queso, licores de hierbas cuya receta guarda una comunidad y viñedos que llevan mil años en producción. Y quedó una idea que explica el edificio entero. Aquellos claustros no eran solo lugares de retiro: eran las empresas mejor organizadas de su tiempo. Tenían inventario, reparto de tareas y libros de cuentas que hoy estudian los historiadores de la economía.",
      },
    ],
  },
  {
    id: "el-taller-de-copiar",
    titulo: "Copiar un libro costaba un año de trabajo",
    gancho: "Tres monjes escribiendo, uno preparando pieles y otro moliendo colores. Un solo ejemplar.",
    categoria: "Monasterios",
    color: "var(--plum)",
    encargo: "Un atril inclinado con un libro grande abierto y un tintero al lado.",
    entrada:
      "Europa, siglos VIII a XIV. Antes de la imprenta, un libro es un objeto artesanal carísimo. Hace falta pergamino, que se obtiene raspando y estirando pieles de animal, además de tinta cocida a mano y de colores molidos a partir de piedras traídas de lejos. Y hace falta, sobre todo, alguien que lo copie letra a letra durante meses. Los monasterios eran el sitio donde se hacía eso.",
    paginas: [
      {
        rotulo: "Las pieles",
        texto:
          "La cuenta material asusta. Un libro grande podía llevarse las pieles de doscientos animales, porque de cada oveja salen dos hojas dobles útiles después de raspar, estirar y cortar. Ese material había que producirlo en la propia granja del monasterio. La tinta negra se cocía con agallas de roble y sulfato de hierro. El azul más caro venía de una piedra traída de Asia y costaba más que el oro a igualdad de peso. Por eso se reservaba para el manto de las figuras importantes. Cada página era una inversión que había que decidir de antemano, y por eso los libros se encargaban, no se compraban hechos.",
        destacado: { tipo: "cifra", cifra: "200", unidad: "animales podía costar un solo libro" },
      },
      {
        rotulo: "La sala",
        texto:
          "El taller de copia era una sala fría, con ventanas grandes y sin fuego, porque una chispa podía acabar con todo. Se trabajaba solo con luz natural, de pie o sentado ante atriles inclinados, y en silencio: los copistas se comunicaban con señas para no distraerse. En los márgenes de los manuscritos aparecen sus quejas, escritas en letra pequeña. Son de lo más humano que ha llegado de la Edad Media. Que si hace frío. Que si la tinta es mala. Que si duele la espalda y cuándo se acaba esto.",
        destacado: { tipo: "frase", frase: "En los márgenes se quejaban del frío y de la mala tinta." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó todo lo que sabemos de la Antigüedad. Casi ningún texto griego o latino se conserva en su original. Lo que ha llegado hasta nosotros son copias de copias hechas en aquellas salas. Y muchas obras sobreviven en un único manuscrito, porque alguien decidió copiarlas una vez. Quedaron también los hábitos de lectura: el espacio entre palabras, los signos de puntuación, los índices y los números de página se inventaron ahí para poder consultar sin leerlo todo. Cuando llegó la imprenta, el libro ya tenía forma de libro: lo único que cambió fue cuántas copias podían hacerse y a qué precio.",
      },
    ],
  },
];
