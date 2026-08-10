import type { Short } from "../shorts";

/* ==========================================================================
   Los seguros.

   Un producto que casi nadie lee y que casi todo el mundo tiene. El tema
   se estropea si repite el café de Lloyd's, que ya está en banca.ts, o si
   se convierte en denuncia de las aseguradoras.

   La regla del tema: todo sale de la MISMA IDEA MATEMÁTICA, que una
   persona no se puede predecir y cien mil sí. Cada short la aplica a un
   sitio distinto, y las cláusulas se explican por el mecanismo que
   protegen, no por la mala fe de nadie.
   ========================================================================== */

export const SEGUROS: Short[] = [
  {
    id: "la-tabla-de-mortalidad",
    titulo: "Cómo se calcula un seguro",
    gancho: "Nadie sabe cuándo morirá una persona. Con cien mil personas, en cambio, la cifra se predice con bastante precisión.",
    categoria: "Dinero",
    color: "var(--slate)",
    encargo: "Página de una tabla de mortalidad del siglo XVIII, con columnas de edades y cifras.",
    /* La tabla, la multitud de la que sale, el reconocimiento que separa a unos
       de otros y la máquina de echar las cuentas.

       Ojo con la primera: en Commons está guardada como «City of London» y la
       hoja, leída, dice Dublín y lista parroquias de Dublín. El pie va por lo
       que pone la hoja, que es lo que se ve. */
    fotos: [
      {
        archivo: "Quarterly Bill of Mortality for the City of London. Wellcome M0013809.jpg",
        autor:
          "Un boletín trimestral de mortalidad impreso para la ciudad de Dublín: las parroquias en filas, y en columnas los nacidos, los casados y los muertos por edad y por enfermedad. Colección Wellcome, Londres.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Quarterly_Bill_of_Mortality_for_the_City_of_London._Wellcome_M0013809.jpg",
        foco: "50% 22%",
        alt: "Hoja impresa antigua con el título «A Quarterly Bill of Mortality» y una rejilla de casillas con los nombres de las parroquias a la izquierda.",
      },
      {
        archivo: "Aerial view of Victorious Festival 1.jpg",
        autor:
          "Un festival visto desde el aire, en 2022. De uno solo de esos puntos no se puede predecir nada; de todos a la vez, bastante. Fotografía de Tim Sheerman-Chase.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Aerial_view_of_Victorious_Festival_1.jpg",
        foco: "50% 68%",
        alt: "Vista aérea de un recinto junto al mar con una multitud enorme y apretada delante de un escenario.",
      },
      {
        archivo: "Female doctor listens to the patient using a stethoscope closeup.jpg",
        autor: "Un reconocimiento médico con estetoscopio. Fotografía de Shixart1985.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Female_doctor_listens_to_the_patient_using_a_stethoscope_closeup.jpg",
        foco: "50% 45%",
        alt: "Primer plano de una doctora auscultando a un paciente con el estetoscopio apoyado en el pecho.",
      },
      {
        archivo: "Mechanical-calculator-Brunsviga-15-01a.jpg",
        autor:
          "Una calculadora mecánica Brunsviga, fabricada entre 1934 y 1947. Con una máquina de manivela como esta se echaban estas cuentas antes del ordenador. Fotografía de Uwe Aranas, 2015.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Mechanical-calculator-Brunsviga-15-01a.jpg",
        foco: "50% 50%",
        alt: "Una calculadora mecánica de sobremesa, con filas de ruedas numeradas y una manivela en el lateral.",
      },
    ],
    entrada:
      "Londres, 1762. Se funda la primera compañía que vende seguros de vida calculando el precio según la edad del cliente, cosa que hasta entonces nadie hacía. Antes se cobraba a todos lo mismo y el negocio se hundía siempre por la misma razón. El que se sabía enfermo contrataba y el que se sabía sano no, así que la compañía acababa pagando más de lo que ingresaba. La idea nueva era usar una tabla de mortalidad, que dice cuánta gente de cada edad muere en un año. Con esa tabla delante, el precio deja de ser una apuesta y pasa a ser una cuenta. Es la primera vez que alguien le pone un número al futuro de una persona y acierta lo bastante como para vivir de ello.",
    paginas: [
      {
        rotulo: "Muchos a la vez",
        texto:
          "Predecir cuándo va a morir una persona concreta es imposible y siempre lo será. Predecir cuántas morirán de un grupo de cien mil personas de cuarenta años es bastante fácil. Esa diferencia es todo el negocio, y tiene nombre matemático: la ley de los grandes números. Cuanta más gente entra en el reparto, más se parece el resultado real a la media calculada. La compañía cobra a cada asegurado un poco más de lo que le corresponde según la tabla. Con la suma paga a las familias de los que mueren ese año y le sobra un margen.",
        destacado: { tipo: "frase", frase: "Una persona no se puede predecir; cien mil, sí." },
      },
      {
        rotulo: "Quien sabe más",
        texto:
          "El sistema tiene un fallo evidente que arruinó a las primeras compañías del sector. Quien sabe que está enfermo tiene muchísimo más interés en contratar que quien se siente bien. Si la compañía no lo distingue, acaba llena de clientes que van a cobrar pronto. De ahí vienen el cuestionario de salud, el reconocimiento médico y las preguntas incómodas del formulario. De ahí viene también el plazo de carencia, esos meses iniciales en los que la póliza no cubre casi nada. Ese desequilibrio de información entre las dos partes es el problema central de todo el sector.",
        destacado: { tipo: "cifra", cifra: "1762", unidad: "el año del primer seguro calculado por edad" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una profesión entera dedicada a esos cálculos, con exámenes durísimos y muy poca gente capaz de aprobarlos. Quedaron también las tablas de mortalidad como una de las estadísticas mejor cuidadas y más revisadas de cualquier país. De ellas salen las pensiones, la planificación sanitaria y buena parte de las decisiones públicas a largo plazo. Quedó una discusión que sigue muy viva sobre qué se puede preguntar antes de conceder un seguro. Varios países prohíben ya usar la información genética, porque con ella el reparto del riesgo deja de existir.",
      },
    ],
  },
  {
    id: "el-seguro-que-no-cubre",
    titulo: "La letra pequeña sirve",
    gancho: "Las exclusiones no son solo trampas comerciales. Sin algunas de ellas el reparto del riesgo se rompe entero.",
    categoria: "Dinero",
    color: "var(--clay)",
    encargo: "Contrato de seguro con un párrafo subrayado y una lupa encima.",
    fotos: [
      {
        archivo: "Lightning In The Blue Hour.jpg",
        autor: "Un rayo ramificado cayendo sobre la sierra a última hora de la tarde. Fotografía de A Guy Named Nyal.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Lightning_In_The_Blue_Hour.jpg",
        foco: "50% 45%",
        alt: "Un relámpago blanco con muchas ramas atravesando un cielo azul oscuro, sobre la silueta de unas montañas.",
      },
      {
        archivo: "Shelf Cloud 4 8 2013 (146961335).jpeg",
        autor: "Una nube de estante avanzando por delante de una tormenta. Fotografía de Sumie Dh.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Shelf_Cloud_4_8_2013_(146961335).jpeg",
        foco: "50% 50%",
        alt: "Una masa de nube baja con el frente recto y amenazante, extendida de lado a lado del horizonte.",
      },
      {
        archivo: "Delaware Seashore Evening Storm - Flickr - aparlette.jpg",
        autor: "Tormenta al atardecer sobre la costa de Delaware. Fotografía de Andrew Parlette.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Delaware_Seashore_Evening_Storm_-_Flickr_-_aparlette.jpg",
        foco: "50% 50%",
        alt: "Nubes de tormenta cargadas sobre el mar, con la luz del sol filtrándose por debajo.",
      },
      {
        archivo: "Lightning over the Atlantic - Flickr - aparlette.jpg",
        autor: "Relámpagos sobre el Atlántico esa misma noche. Fotografía de Andrew Parlette.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Lightning_over_the_Atlantic_-_Flickr_-_aparlette.jpg",
        foco: "50% 45%",
        alt: "Varios rayos cayendo a la vez sobre el mar, iluminando las nubes desde dentro.",
      },
    ],
    entrada:
      "Todo el mundo, con la regulación europea de contratos de seguro reforzada desde 1980. Cualquier póliza que uno firme incluye una lista de cosas que no cubre, y esa lista tiene una fama pésima y bastante merecida. Una parte de ella es efectivamente una trampa comercial, escrita para no pagar. La otra parte, en cambio, es la condición sin la cual el producto no podría existir: un seguro reparte un riesgo entre mucha gente, y solo funciona si nadie puede provocar el suceso a voluntad ni elegir el momento en que ocurre.",
    paginas: [
      {
        rotulo: "Riesgo asegurable",
        texto:
          "Para que algo se pueda asegurar tiene que cumplir unas condiciones bastante estrictas. El suceso debe ser posible pero improbable, medible en dinero y ajeno a la voluntad del asegurado. Si el asegurado puede provocarlo, deja de ser un riesgo y se convierte en una decisión. Por eso ninguna póliza cubre el daño causado a propósito, y por eso el fraude se persigue tanto. También debe afectar a pocos a la vez, porque si le pasa a todos no hay quien pague. De ahí salen las exclusiones por guerra, por terremoto y por pandemia, que arruinarían a cualquier compañía.",
        destacado: { tipo: "frase", frase: "Si puedes provocarlo, no es un riesgo: es una decisión." },
      },
      {
        rotulo: "Quién paga",
        texto:
          "Cuando un riesgo es demasiado grande para el sector privado, aparece el Estado por detrás. España tiene desde 1954 un organismo público que cubre lo que las pólizas dejan fuera. Se financia con un recargo pequeño que aparece en el recibo de casi cualquier seguro contratado. Ese céntimo por póliza acumulado durante décadas es lo que paga las inundaciones y los terremotos. El mecanismo es el mismo de siempre, solo que el grupo entre el que se reparte es el país entero. Las aseguradoras hacen algo parecido entre ellas, cediendo parte de sus riesgos a compañías todavía más grandes.",
        destacado: { tipo: "cifra", cifra: "1954", unidad: "el año del fondo público para catástrofes" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un producto que casi nadie lee entero y que casi todo el mundo tiene contratado varias veces. Quedó también una obligación legal para las compañías, porque las exclusiones tienen que ir destacadas y firmadas aparte. Una cláusula escondida en el cuerpo del contrato puede llegar a declararse nula si el cliente la impugna. Y quedó una distinción útil para leer cualquier póliza sin necesidad de ser abogado ni experto. Las exclusiones razonables protegen el reparto del riesgo, y las abusivas protegen solamente el margen de la compañía. Distinguirlas es más fácil de lo que parece.",
      },
    ],
  },
  {
    id: "la-tontina",
    titulo: "Cobraba más si morían más",
    gancho: "Se llamaba tontina y fue legal en media Europa durante dos siglos. El último superviviente se quedaba con todo.",
    categoria: "Historia",
    color: "var(--plum)",
    curioso: true,
    encargo: "Documento notarial antiguo con una lista de nombres y varios tachados.",
    entrada:
      "Francia, 1653. El Estado necesita dinero y un banquero italiano le propone un producto financiero que nadie ha visto: un grupo de personas pone dinero en común y cobra una renta anual de por vida. Cuando uno muere, su parte se reparte entre los que siguen vivos. El último superviviente acaba cobrando la renta de todos los demás.",
    paginas: [
      {
        rotulo: "El invento",
        texto:
          "Para el Estado era un préstamo cómodo, porque la deuda se extinguía sola al morir el último miembro. Para el inversor era una apuesta con la ventaja de que la renta subía cada año. Muchas familias apuntaban a un bebé recién nacido, que era quien más posibilidades tenía de durar. El producto se hizo popularísimo en Francia, en los Países Bajos y en el Reino Unido durante dos siglos. Varios ayuntamientos financiaron con tontinas puentes, teatros y traídas de agua que siguen en pie. El nombre viene del apellido de aquel banquero, y en varios idiomas sigue significando lo mismo.",
        destacado: { tipo: "frase", frase: "La deuda del Estado se extinguía sola al morir el último." },
      },
      {
        rotulo: "El final",
        texto:
          "El problema del producto es evidente en cuanto se piensa dos segundos en los incentivos. Cada participante gana dinero cuando muere otro, y en los grupos pequeños eso se volvió peligroso. Hubo casos documentados de fraude, con muertes ocultadas para seguir cobrando y sospechas de algo peor. El otro problema era matemático, porque las primeras tontinas se calcularon sin ninguna tabla de mortalidad. Los Estados prometieron rentas que no podían pagar y varias emisiones acabaron en suspensión de pagos. A finales del siglo XIX quedaron prohibidas en casi toda Europa y en Estados Unidos.",
        destacado: { tipo: "cifra", cifra: "1653", unidad: "el año de la primera tontina" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron edificios levantados con ese dinero y unas cuantas novelas y películas que siguen usando la idea como argumento. Quedó también el mecanismo en sí, que ha vuelto en versión moderna y sin el incentivo macabro. Los planes de pensiones que reparten un fondo común entre los jubilados vivos funcionan con la misma lógica. La diferencia es que hoy participan cientos de miles de personas en vez de una docena de vecinos. Con ese tamaño, la muerte de uno deja de ser un dinero que alguien concreto pueda notar y esperar.",
      },
    ],
  },
];
