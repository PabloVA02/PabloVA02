import type { Short } from "../shorts";

/* ==========================================================================
   Microscopios.

   El riesgo del tema es la lección de óptica: aumentos, aberraciones,
   índices de refracción. Se entiende al leerlo y no queda nada.

   La regla del tema: un microscopio se cuenta por LO QUE SE VE POR
   PRIMERA VEZ y por el límite que impide ver más. Bichos en una gota de
   agua, huecos en una lámina de corcho, virus que ninguna luz podía
   mostrar. La técnica solo importa en la medida en que abre o cierra una
   puerta concreta.

   Y el tamaño se compara siempre con algo que el lector pueda imaginar.
   ========================================================================== */

export const MICROSCOPIO: Short[] = [
  {
    id: "comerciante-de-telas",
    titulo: "Un comerciante de telas vio las bacterias",
    gancho: "Sin estudios y con lentes que pulía él mismo, doscientos años antes que ningún científico.",
    categoria: "Microscopios",
    color: "var(--ochre)",
    encargo: "Una placa de latón pequeña con una lente diminuta y una aguja delante.",
    entrada:
      "Delft, en los Países Bajos, 1674. Un comerciante de telas de cuarenta y dos años, sin formación universitaria y sin saber latín, mira una gota de agua de un lago con un aparato que ha fabricado él mismo y ve dentro seres diminutos moviéndose. Nadie ha visto nunca eso, y nadie volverá a verlo con esa nitidez en dos siglos.",
    paginas: [
      {
        rotulo: "La lente",
        texto:
          "Su microscopio no se parecía a los de hoy: era una placa de latón del tamaño de una mano con un agujero, y en el agujero una sola lente diminuta, casi una gota de vidrio, del tamaño de una cabeza de alfiler. La muestra se sujetaba en una aguja por delante y se acercaba el conjunto al ojo, casi pegado a la cara. Aquellas lentes esféricas aumentaban hasta doscientas y trescientas veces, mucho más que los microscopios compuestos de la época, que llegaban a cuarenta y daban imágenes borrosas y con halos de color.",
        destacado: { tipo: "cifra", cifra: "300", unidad: "aumentos, frente a 40 de los demás" },
      },
      {
        rotulo: "El secreto",
        texto:
          "Nunca contó cómo las fabricaba. Enseñaba los aparatos a las visitas ilustres, incluidos reyes y embajadores que se acercaban expresamente, pero no dejaba ver el procedimiento, y se llevó el método a la tumba en 1723. Durante siglos se creyó que soplaba hilos de vidrio y aprovechaba las gotitas que se formaban en la punta. Un análisis reciente con rayos X de uno de los pocos ejemplares conservados apunta a que las pulía a mano, con la técnica corriente de la época, solo que muchísimo mejor que nadie. Fabricó más de quinientos.",
        destacado: { tipo: "frase", frase: "Enseñaba los aparatos y jamás el procedimiento." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Mandó sus observaciones por carta a la sociedad científica de Londres durante cincuenta años, escritas en su idioma y acompañadas de dibujos, describiendo bacterias, espermatozoides, glóbulos rojos, la circulación de la sangre en los capilares y la estructura de un músculo. Al principio no le creyeron y tuvieron que mandar una comisión a comprobarlo en persona. Después lo hicieron miembro, aunque él no fue nunca a recoger el nombramiento. Lo que vio en aquella gota de agua no volvió a verse con claridad hasta bien entrado el siglo XIX, cuando se corrigieron los defectos ópticos de las lentes compuestas.",
      },
    ],
  },

  {
    id: "celda-de-monje",
    titulo: "La célula se llama así por una celda",
    gancho: "Miró una lámina de corcho, vio huecos ordenados y le recordaron a los cuartos de un monasterio.",
    categoria: "Microscopios",
    color: "var(--slate)",
    curioso: true,
    encargo: "Una lámina fina de corcho al microscopio, con celdillas hexagonales.",
    entrada:
      "Londres, 1665. Un científico publica un libro con láminas grabadas de lo que ha visto con un microscopio compuesto: una pulga dibujada del tamaño de un palmo, el ojo de una mosca, el filo de una navaja lleno de mellas. En una de las láminas aparece una lámina fina de corcho, llena de huecos regulares separados por paredes.",
    paginas: [
      {
        rotulo: "El corcho",
        texto:
          "Cortó el corcho con una navaja bien afilada hasta dejar una lámina casi transparente y la colocó bajo la lente. Lo que vio fueron cavidades pequeñas, ordenadas y todas parecidas entre sí, como un panal, y calculó que había más de mil millones en una pulgada cúbica. Buscando una palabra para describirlas eligió una que significa habitación pequeña, la misma que se usaba para los cuartos de los monjes en un monasterio. Estaba viendo las paredes vacías de células muertas y no células vivas, pero el nombre se quedó y hoy se usa en todos los idiomas.",
        destacado: { tipo: "frase", frase: "Le recordaron a los cuartos pequeños de un monasterio." },
      },
      {
        rotulo: "El libro",
        texto:
          "Aquel libro fue un éxito enorme y algo inesperado: era el primero que enseñaba al público general dibujos detallados de cosas invisibles, y las láminas desplegables con insectos gigantes impresionaron a media Europa. Un diarista famoso de la época escribió que se quedó leyéndolo hasta las dos de la mañana y que era el libro más ingenioso que había leído en su vida. Su autor era además un experimentador extraordinario y bastante peleón, que discutió con casi todos sus contemporáneos, y de quien no se conserva hoy ningún retrato que se pueda dar por seguro.",
        destacado: { tipo: "cifra", cifra: "1665", unidad: "el año del libro con las láminas" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La palabra tardó casi dos siglos en significar lo que significa hoy. Hasta 1838 no se formuló la idea de que todos los seres vivos están hechos de esas unidades y de que cada una procede de otra anterior, que es una de las ideas más importantes de la biología entera. Aquellos huecos de corcho eran, efectivamente, las paredes de células vegetales, así que el nombre estaba bien puesto por accidente. Y el gesto de cortar una lámina finísima con una cuchilla y mirarla a contraluz sigue siendo lo primero que se enseña en un laboratorio.",
      },
    ],
  },

  {
    id: "limite-de-la-luz",
    titulo: "La luz limita lo que se puede ver",
    gancho: "Por debajo de doscientos nanómetros ninguna lente sirve. Hubo que cambiar la luz por electrones.",
    categoria: "Microscopios",
    color: "var(--plum)",
    encargo: "Un microscopio electrónico grande y gris con una pantalla al lado.",
    entrada:
      "Alemania, 1873. Un físico que trabaja para un fabricante de instrumentos ópticos publica una fórmula incómoda: por muy bien que se pula una lente, ningún microscopio de luz podrá distinguir dos puntos separados por menos de la mitad de la longitud de onda que los ilumina. Con luz visible, eso son unos doscientos nanómetros y no hay manera de bajar.",
    paginas: [
      {
        rotulo: "El muro",
        texto:
          "La razón es que la luz no viaja como una flecha sino como una onda, y una onda no puede dibujar detalles más pequeños que ella misma: al pasar por una abertura estrecha se abre y se emborrona. Es el mismo motivo por el que no se puede tallar una figura fina con un cincel grueso. La fórmula fue una mala noticia para toda la industria óptica, porque significaba que ya se había llegado al final del camino y que seguir mejorando el pulido no serviría de nada. Aquel físico rediseñó los objetivos y los llevó justo hasta ese límite.",
        destacado: { tipo: "cifra", cifra: "200", unidad: "nanómetros, el límite de la luz" },
      },
      {
        rotulo: "Los electrones",
        texto:
          "La salida llegó sesenta años después y consistió en cambiar de onda. Los electrones también se comportan como ondas, y su longitud de onda es miles de veces menor que la de la luz visible, así que un haz de electrones enfocado con bobinas magnéticas en lugar de lentes de vidrio puede resolver detalles muchísimo más pequeños. El primer microscopio electrónico se construyó en 1931 y superó al óptico en pocos años. Con él se vieron por primera vez los virus, el interior de las células y la disposición de los átomos.",
        destacado: { tipo: "frase", frase: "Se cambió la luz por electrones, que son ondas más finas." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El límite de 1873 se ha acabado esquivando también con luz, por un camino que nadie esperaba: encendiendo y apagando moléculas fluorescentes de una en una y componiendo después la imagen con un ordenador, de modo que nunca hay dos puntos brillando a la vez y el problema sencillamente desaparece. Esa técnica recibió el premio Nobel de Química en 2014 y permite ver el interior de células vivas con un detalle que la fórmula declaraba imposible. La fórmula sigue siendo correcta: lo que cambió fue dejar de mirarlo todo a la vez.",
      },
    ],
  },
];
