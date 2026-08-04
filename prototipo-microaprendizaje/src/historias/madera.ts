import type { Short } from "../shorts";

/* ==========================================================================
   La madera.

   El material más usado de la historia y el único que se fabrica solo. El
   tema se estropea si se cuenta como carpintería: aquí interesa la madera
   como recurso estratégico y como material vivo que se mueve.

   La regla del tema: se explica siempre CÓMO SE COMPORTA la madera —que
   encoge, que se pudre, que arde, que flota— y qué se inventó para tratar
   con ella. Con cifras de tiempo: secar, crecer, durar.
   ========================================================================== */

export const MADERA: Short[] = [
  {
    id: "la-madera-sigue-moviendose",
    titulo: "Un mueble de madera se mueve toda su vida",
    gancho: "Encoge y se hincha con la humedad del aire, y por eso los muebles antiguos están hechos sin pegar del todo.",
    categoria: "Madera",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una junta de madera vista de cerca, con la veta marcada y una pequeña separación.",
    entrada:
      "Cualquier taller de carpintería, desde hace milenios y todavía hoy. La madera es un material poroso que absorbe y suelta agua según el aire que la rodea, así que nunca se está quieta del todo. Un tablón encoge en invierno con la calefacción y se hincha en verano con la humedad, y ese movimiento puede llegar a varios milímetros por cada palmo de ancho.",
    paginas: [
      {
        rotulo: "El movimiento",
        texto:
          "Lo llamativo es que no se mueve igual en todas las direcciones. A lo largo de la veta, es decir, en el sentido en que crecía el árbol, apenas cambia de tamaño. A lo ancho, en cambio, puede variar bastante, y por eso un tablero grande pegado a la fuerza en un marco rígido acaba abriéndose o rajándose. Los carpinteros antiguos lo sabían de sobra y por eso diseñaron uniones que dejan holgura, como los paneles que van sueltos dentro de una ranura y solo se sujetan por los bordes.",
        destacado: { tipo: "frase", frase: "A lo largo de la veta casi no se mueve; a lo ancho, mucho." },
      },
      {
        rotulo: "Secar despacio",
        texto:
          "Antes de trabajarla hay que secarla, y esa es la parte lenta del oficio. La regla tradicional hablaba de un año de secado al aire por cada dos o tres centímetros de grosor, con los tablones apilados y separados por listones para que corriera el aire. Si se seca demasiado deprisa, la superficie encoge antes que el interior y la pieza se agrieta. Hoy se usan hornos de secado que hacen en pocas semanas lo que antes llevaba años, controlando la temperatura y la humedad hora a hora con sondas metidas dentro de la propia madera.",
        destacado: { tipo: "cifra", cifra: "1", unidad: "año de secado por cada pulgada de grosor" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron unas cuantas costumbres que parecen manías y son física pura. Las puertas de los armarios antiguos tienen paneles que suenan flojos porque deben poder moverse. Los suelos de tarima se colocan dejando un hueco contra la pared, tapado con el rodapié. Y los instrumentos musicales de madera se aclimatan durante días antes de un concierto en otra ciudad. Quedó también un dicho de carpinteros que resume el asunto entero: la madera trabaja siempre, y quien no cuenta con ello acaba con una grieta o con un cajón que no cierra.",
      },
    ],
  },
  {
    id: "el-barco-y-el-bosque",
    titulo: "Un imperio se quedó sin madera para sus barcos",
    gancho: "Venecia dependía de sus bosques para mantener la flota, y llegó a numerar y proteger árboles uno a uno.",
    categoria: "Madera",
    color: "var(--slate)",
    encargo: "Troncos flotando atados en un canal, vistos desde la orilla.",
    entrada:
      "Venecia, siglos XV y XVI. La ciudad es la mayor potencia naval del Mediterráneo y su astillero público llega a emplear a miles de personas, capaz de armar una galera al día en momentos de urgencia. Todo eso depende de un material que no se puede fabricar deprisa: robles para los cascos y alerces para los mástiles, que tardan décadas o siglos en crecer.",
    paginas: [
      {
        rotulo: "Contar árboles",
        texto:
          "La república reaccionó con una burocracia forestal sorprendente para la época. Se declararon bosques reservados para el astillero, con guardas y penas para quien cortara sin permiso, y se enviaron funcionarios a inventariar los árboles útiles, marcándolos con un hierro. Existen registros que anotan la especie, el tamaño y hasta la curvatura de árboles concretos. Las costillas de un barco necesitan piezas curvadas de forma natural, porque una madera serrada en curva se parte por la veta. Aquellos inventarios se actualizaban cada pocos años y se guardaban como documentos de Estado.",
        destacado: { tipo: "frase", frase: "Se marcaban árboles uno a uno, con su curvatura anotada." },
      },
      {
        rotulo: "El límite",
        texto:
          "Aun así, la madera se acabó volviendo escasa y cara. Los bosques cercanos se agotaron y hubo que traer la madera desde más lejos, flotando por los ríos, con lo que el coste de cada barco subió. Sus competidores del Atlántico, mientras tanto, tenían a mano bosques enormes en el norte de Europa y en América. Ese factor, entre otros muchos, pesó en el declive naval de la ciudad. Un imperio marítimo del siglo XVI dependía de la silvicultura tanto como de sus marineros, y esa parte casi nunca se cuenta.",
        destacado: { tipo: "cifra", cifra: "1", unidad: "galera al día podía armar el astillero" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron bosques que existen hoy porque hace cinco siglos alguien los protegió para hacer barcos que ya no navegan. Varios están declarados reservas naturales y todavía conservan ejemplares enormes plantados con aquel criterio militar. Quedó también un concepto que nació de esta clase de problemas: el rendimiento sostenido, es decir, cortar cada año solo lo que el bosque es capaz de reponer. La idea se formuló por escrito en la minería alemana del siglo XVIII, pero en estas costas se practicaba ya doscientos años antes, con guardas, multas y libros de cuentas.",
      },
    ],
  },
  {
    id: "la-madera-que-no-arde",
    titulo: "Una viga de madera aguanta más que el acero",
    gancho: "En un incendio, la madera se carboniza por fuera y el interior sigue sujetando. El acero, en cambio, se dobla.",
    categoria: "Madera",
    color: "var(--plum)",
    encargo: "Una viga de madera quemada por fuera, con el corazón intacto al partirla.",
    entrada:
      "Ingeniería de incendios, siglo XX y actualidad. Suena a error, porque la madera arde y el acero no. Y sin embargo los bomberos lo saben de sobra: en un edificio en llamas, una estructura de vigas gruesas de madera puede aguantar en pie más tiempo que otra de perfiles de acero sin proteger. La explicación está en lo que le pasa a cada material con el calor.",
    paginas: [
      {
        rotulo: "La capa negra",
        texto:
          "Cuando una viga de madera arde, la superficie se convierte en carbón, y ese carbón es un mal conductor del calor. La capa negra actúa como un abrigo que protege el interior, de modo que el fuego avanza hacia dentro muy despacio, a un ritmo bastante predecible de menos de un milímetro por minuto. Mientras tanto, el corazón de la viga sigue frío y conserva casi toda su resistencia. Por eso las normas de construcción permiten calcular una viga con un grueso de más, pensado precisamente para sacrificarse durante el incendio.",
        destacado: { tipo: "cifra", cifra: "0,7", unidad: "milímetros por minuto avanza el fuego" },
      },
      {
        rotulo: "El acero",
        texto:
          "Al acero le pasa algo distinto y peor en este contexto. No arde, pero pierde resistencia con la temperatura: hacia los quinientos grados conserva menos de la mitad, y un perfil cargado empieza a deformarse y a pandear. Como además conduce muy bien el calor, un perfil se calienta entero y deprisa, sin que ninguna parte quede fría. Por eso las estructuras metálicas se protegen con placas, pinturas que se hinchan al calentarse o recubrimientos, y por eso un fuego largo puede tumbar una nave industrial de acero sin que nada haya ardido.",
        destacado: { tipo: "frase", frase: "El acero no arde, pero a quinientos grados se dobla." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una idea que ha vuelto con fuerza en la construcción reciente. Se están levantando edificios de varias plantas con madera contralaminada, que son paneles hechos de capas cruzadas y pegadas, más ligeros que el hormigón y con un comportamiento ante el fuego que se puede calcular. Los primeros bloques altos de este tipo llevan ya años en pie y han superado pruebas de fuego exigentes en laboratorio. La madera ha dejado de ser el material del pasado para convertirse en una opción que compite de tú a tú en edificios grandes.",
      },
    ],
  },
];
