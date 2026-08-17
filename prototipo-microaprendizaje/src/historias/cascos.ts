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
    titulo: "El casco vale una sola vez",
    gancho: "No protege por ser duro, sino porque su interior se aplasta y alarga el golpe unas milésimas de segundo.",
    categoria: "Cascos",
    color: "var(--ochre)",
    encargo: "Un casco de ciclismo partido por dentro, con el corcho blanco a la vista.",
    fotos: [
      {
        archivo: "Bicycle Helmet 0085.jpg",
        autor: "Un casco de bicicleta corriente, con la espuma gris asomando por las rejillas. Fotografía de Ashley Pomeroy.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Bicycle_Helmet_0085.jpg",
        foco: "50% 50%",
        alt: "Un casco blanco y negro de ciclista visto de lado sobre fondo claro, con la correa colgando.",
      },
      {
        archivo: "Cracked bicycle helmet.jpg",
        autor: "Un casco partido después de un accidente: la espuma se ha aplastado y agrietado. Fotografía de Andrew Kvalheim.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Cracked_bicycle_helmet.jpg",
        foco: "50% 45%",
        alt: "Primer plano de un casco con una grieta abierta que atraviesa la carcasa y deja ver la espuma interior.",
      },
      {
        archivo: "Purple bicycle leaning against a stone wall.jpg",
        autor: "Una bicicleta apoyada en un muro de piedra.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Purple_bicycle_leaning_against_a_stone_wall.jpg",
        foco: "50% 50%",
        alt: "Una bicicleta morada apoyada contra un muro de piedra irregular, con el manillar hacia la cámara.",
      },
      {
        archivo: "Revo Wild Country outdoor with rope.jpg",
        autor: "Una cuerda de escalada pasada por un aparato de seguro: también se estira a propósito para alargar la frenada. Fotografía de Polarbear24.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Revo_Wild_Country_outdoor_with_rope.jpg",
        foco: "50% 50%",
        alt: "Una cuerda azul trenzada pasando por una pieza metálica redonda sujeta a un mosquetón, sobre roca gris.",
      },
    ],
    entrada:
      "Cualquier caída en bicicleta, en cualquier calle, con cascos regulados por normas desde los años setenta. Lo que hace daño en un golpe no es el impacto en sí, sino la brusquedad con la que el cerebro se frena dentro del cráneo: es un órgano blando flotando en líquido, y cuando la cabeza se para de golpe él sigue moviéndose un instante más. Por eso un casco no funciona como una armadura, que sería lo intuitivo. Funciona justo al revés, como un colchón que se destruye a sí mismo para estirar ese frenazo todo lo que puede. Un casco que sale intacto de un accidente serio es un casco que no ha hecho su trabajo.",
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
    titulo: "El casco nació en el mar",
    gancho: "Un fabricante de gorros impermeables para pescadores empezó a endurecerlos con laca para los obreros de un puente.",
    categoria: "Cascos",
    color: "var(--slate)",
    encargo: "Un casco de obra amarillo con el arnés interior a la vista.",
    fotos: [
      {
        archivo: "Worker at Boundary Dam, 1967 (50669284287).jpg",
        autor: "Un operario con casco trabajando dentro de la turbina de la presa de Boundary, en 1967. Archivos Municipales de Seattle.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Worker_at_Boundary_Dam,_1967_(50669284287).jpg",
        foco: "60% 55%",
        alt: "Fotografía en blanco y negro de un obrero con casco asomado entre las piezas metálicas de una turbina.",
      },
      {
        archivo: "Deux artisans électriciens avec leurs apprentis sur un chantier (1969).jpg",
        autor: "Electricistas y aprendices en una obra, en 1969.",
        licencia: "CC BY-SA 3.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Deux_artisans_%C3%A9lectriciens_avec_leurs_apprentis_sur_un_chantier_(1969).jpg",
        foco: "50% 45%",
        alt: "Grupo de operarios con cascos trabajando en el interior de un edificio en construcción.",
      },
      {
        archivo: "Baliwagenyo welder with green hard hat working atop a petrol station metal structure 01.jpg",
        autor: "Un soldador con casco trabajando en lo alto de una estructura metálica.",
        licencia: "CC BY-SA 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Baliwagenyo_welder_with_green_hard_hat_working_atop_a_petrol_station_metal_structure_01.jpg",
        foco: "50% 50%",
        alt: "Soldador con casco verde encaramado a una estructura de acero, recortado contra el cielo.",
      },
      {
        archivo: "Baliwagenyo welder with green hard hat working atop a petrol station metal structure 03.jpg",
        autor: "El mismo soldador, visto desde otro ángulo, sobre la estructura.",
        licencia: "CC BY-SA 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Baliwagenyo_welder_with_green_hard_hat_working_atop_a_petrol_station_metal_structure_03.jpg",
        foco: "50% 50%",
        alt: "Operario con casco y equipo de soldadura trabajando en altura sobre vigas metálicas.",
      },
    ],
    entrada:
      "Estados Unidos, años veinte del siglo XX. En las obras grandes —presas, puentes, rascacielos— las herramientas y los remaches que se caen desde arriba matan trabajadores con una regularidad que se acepta como parte del oficio, y no existe ninguna protección estándar: el que quiere se pone un sombrero de fieltro y poco más. Un fabricante de gorros de lona impermeable para marineros prueba entonces a endurecer sus sombreros con vapor y con varias capas de laca negra, y le ofrece el resultado a los obreros de las obras públicas, que hasta ese día no habían tenido nada mejor que la suerte.",
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
      "Suecia, años noventa. Un neurocirujano que lleva años abriendo cabezas rotas observa algo que las normas de homologación de la época no medían por ninguna parte. En las lesiones cerebrales graves por caída, el daño no suele venir de un golpe recto contra el suelo, sino de un impacto oblicuo, en ángulo, que hace girar la cabeza de golpe. Ese giro estira y desgarra las conexiones internas del cerebro, y contra eso una espuma que solo sabe aplastarse hacia dentro no puede hacer gran cosa. Los cascos estaban probándose mal. Faltaba una pieza que ya llevamos todos dentro de la cabeza.",
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
