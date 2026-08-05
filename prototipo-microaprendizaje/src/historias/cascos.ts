import type { Short } from "../shorts";

/* ==========================================================================
   Los cascos.

   Proteger la cabeza, que es la parte que peor encaja un golpe. El tema se
   estropea si se convierte en catálogo militar de morriones y celadas.

   La regla del tema: se explica QUÉ HACE EL CASCO CON LA ENERGÍA del golpe,
   que es lo que casi nadie entiende: no es una coraza, es un amortiguador
   que se destruye a propósito. Con cifras de fuerzas y de tiempos, y con la
   fecha de cada norma, porque los cascos existen gracias a las normas.
   ========================================================================== */

export const CASCOS: Short[] = [
  {
    id: "el-casco-se-rompe-a-proposito",
    titulo: "El casco sirve una sola vez",
    gancho: "No protege por ser duro, sino porque su interior se aplasta y alarga el golpe unas milésimas de segundo.",
    categoria: "Cascos",
    color: "var(--ochre)",
    encargo: "Un casco de ciclismo partido por dentro, con el corcho blanco a la vista.",
    entrada:
      "Cualquier caída en bicicleta, con cascos regulados por normas desde los años setenta. Lo que hace daño en un golpe no es el impacto en sí, sino la brusquedad con que el cerebro se frena dentro del cráneo. Por eso un casco no funciona como una armadura: funciona como un colchón que se destruye para estirar ese frenazo el mayor tiempo posible.",
    paginas: [
      {
        rotulo: "Estirar el golpe",
        texto:
          "La física es sencilla de ver con un ejemplo cotidiano. Saltar sobre hormigón y saltar sobre un colchón implican la misma energía, pero el colchón alarga la parada y por eso no duele. El interior blanco de un casco es una espuma rígida que se aplasta en el impacto y consigue justo eso. Alarga la frenada unas milésimas de segundo, y con ello reduce mucho la fuerza que llega a la cabeza. La carcasa exterior de plástico cumple otras dos funciones: reparte el golpe por una superficie mayor y desliza contra el asfalto en lugar de engancharse.",
        destacado: { tipo: "frase", frase: "El casco no rebota: se aplasta, y por eso funciona." },
      },
      {
        rotulo: "Una vez",
        texto:
          "De ahí sale la regla que muchos ciclistas desconocen: un casco que ha recibido un golpe fuerte hay que tirarlo, aunque por fuera parezca intacto. La espuma se ha comprimido y ya no puede volver a aplastarse, así que en el siguiente impacto transmitirá mucha más fuerza. Por el mismo motivo, los cascos tienen fecha de caducidad recomendada, porque la espuma y las correas se degradan con el sudor, el sol y el calor del maletero. Un casco guardado diez años en un trastero protege bastante menos que uno recién comprado, aunque no se haya usado nunca.",
        destacado: { tipo: "cifra", cifra: "1", unidad: "golpe fuerte y a la basura" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una idea que se aplica también a los coches, donde el frontal está diseñado para arrugarse y alargar el choque, y a las cuerdas de escalada, que se estiran a propósito. Todo lo que protege de un impacto funciona igual: se sacrifica una pieza barata para ganar unas milésimas de segundo y repartir la fuerza. Quedó además una discusión que sigue viva sobre la obligatoriedad del casco en ciudad. Los datos de accidentes conviven ahí con otro argumento: una norma demasiado estricta desanima a mucha gente de coger la bicicleta.",
      },
    ],
  },
  {
    id: "el-casco-de-obra",
    titulo: "El casco de obra nació navegando",
    gancho: "Un fabricante de gorros impermeables para pescadores empezó a endurecerlos con laca para los obreros de un puente.",
    categoria: "Cascos",
    color: "var(--slate)",
    encargo: "Un casco de obra amarillo con el arnés interior a la vista.",
    entrada:
      "Estados Unidos, años veinte del siglo XX. En las obras grandes, las herramientas y los remaches que caen desde arriba matan trabajadores con regularidad, y no existe ninguna protección estándar. Un fabricante de gorros de lona impermeable para marineros prueba a endurecer sus sombreros con vapor y con laca, y ofrece el resultado a los obreros de las grandes obras públicas.",
    paginas: [
      {
        rotulo: "El hueco",
        texto:
          "La pieza clave de un casco de obra no es la cáscara, sino lo que lleva dentro. El arnés de cintas mantiene la cabeza separada de la carcasa unos tres centímetros, y ese hueco es lo que salva. Cuando cae un objeto, la carcasa se hunde un poco y el arnés se deforma, de modo que el golpe se reparte por todo el cráneo en vez de concentrarse en un punto. Por eso está prohibido llevar algo entre el casco y la cabeza, porque anula ese espacio y con él la protección.",
        destacado: { tipo: "frase", frase: "Lo que salva es el hueco entre la cabeza y la cáscara." },
      },
      {
        rotulo: "Los colores",
        texto:
          "Con los años apareció una segunda función, la de identificar de un vistazo quién es quién en una obra grande. Aunque no existe una norma internacional única, en muchos países se ha impuesto una convención parecida. El blanco es para jefes de obra y técnicos, el amarillo para los operarios, el azul para electricistas, el verde para seguridad y el rojo para el equipo contra incendios. En una obra con cientos de personas y varias empresas trabajando a la vez, distinguir de lejos a quién hay que dirigirse ahorra un tiempo enorme y evita accidentes.",
        destacado: { tipo: "cifra", cifra: "3", unidad: "centímetros de hueco dentro" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una prenda obligatoria en las obras de todo el mundo, con normas propias y una industria enorme alrededor. Quedó también el rastro de aquel origen marinero en el nombre inglés del casco de obra, que significa literalmente sombrero duro y sigue usándose para nombrar al oficio entero. Y quedó la evolución lógica. Los cascos modernos llevan barboquejo, porque uno que se cae al primer tropiezo no protege de nada. Los de trabajos en altura se parecen ya más a los de escalada que a aquellos sombreros endurecidos con laca.",
      },
    ],
  },
  {
    id: "el-casco-que-gira",
    titulo: "El peligro no es el golpe",
    gancho: "La mayoría de las caídas llegan de lado y hacen que el cerebro rote. Los cascos nuevos añaden una capa que resbala.",
    categoria: "Cascos",
    color: "var(--plum)",
    curioso: true,
    encargo: "Un casco cortado por la mitad, con una capa amarilla fina bajo la espuma.",
    entrada:
      "Suecia, años noventa. Un neurocirujano observa algo que las normas de la época no medían. En las lesiones cerebrales graves por caída, el daño no suele venir de un golpe recto, sino de un impacto oblicuo que hace girar la cabeza. Ese giro estira y desgarra las conexiones internas del cerebro, y contra eso una espuma que solo se aplasta hace poco.",
    paginas: [
      {
        rotulo: "El giro",
        texto:
          "El cerebro flota en un líquido dentro del cráneo, así que cuando la cabeza gira bruscamente se produce un desfase: el cráneo arranca y la masa cerebral tarda unas milésimas en seguirlo. Ese desajuste tuerce y estira las fibras nerviosas que conectan unas zonas del cerebro con otras, y ahí está el origen de buena parte de las lesiones graves y de sus secuelas. En una caída real, el suelo casi nunca llega de frente y perpendicular, sino de refilón, así que el componente de giro está presente casi siempre.",
        destacado: { tipo: "frase", frase: "El cráneo arranca y el cerebro tarda unas milésimas en seguirlo." },
      },
      {
        rotulo: "La capa deslizante",
        texto:
          "La solución que se ha extendido es tan simple como discutida: añadir dentro del casco una capa fina que puede desplazarse unos milímetros respecto a la carcasa. Al recibir un golpe oblicuo, esa capa desliza y se lleva parte de la rotación antes de que llegue a la cabeza. Es lo mismo que hace el cuero cabelludo, que se mueve un poco sobre el cráneo. Los ensayos de laboratorio muestran reducciones importantes de la rotación transmitida, y varios centros independientes puntúan hoy los cascos también por este criterio, además de por el golpe recto.",
        destacado: { tipo: "cifra", cifra: "15", unidad: "milímetros desliza la capa" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un cambio de norma en marcha, porque los ensayos oficiales clásicos se limitaban a dejar caer el casco en vertical y no medían el giro en ningún momento. Quedaron también las dudas razonables de quienes señalan que buena parte de la investigación disponible la financian los propios fabricantes del sistema. Y quedó una idea que vale mucho más allá del ciclismo. Durante décadas se midió lo que era fácil de medir: un golpe recto en un laboratorio. Lo que de verdad ocurre en la calle es caerse de lado y de mala manera.",
      },
    ],
  },
];
