import type { Short } from "../shorts";

/* ==========================================================================
   Los trasplantes.

   Coger un órgano de una persona y ponerlo en otra. El tema se cuenta casi
   siempre como una proeza técnica de quirófano, y esa es justamente la parte
   que menos costó: coser vasos sanguíneos se sabía hacer desde 1900.

   La regla del tema: lo difícil nunca fue la mano, fue OTRA COSA —el sistema
   inmunitario, la definición legal de la muerte, la organización de los
   hospitales—, y cada short cuenta cuál. Se evita el morbo del donante y se
   habla siempre de cuántos años se ganan, que es lo que importa.
   ========================================================================== */

export const TRASPLANTES: Short[] = [
  {
    id: "trasplante-entre-gemelos",
    titulo: "El donante era su gemelo",
    gancho: "El cuerpo del receptor no atacó al riñón nuevo porque era, molécula a molécula, el suyo propio.",
    categoria: "Trasplantes",
    color: "var(--plum)",
    encargo: "Dos camas de hospital paralelas en una habitación de los años cincuenta.",
    fotos: [
      {
        archivo: "Beilinson Hospital ward 1950.jpg",
        autor: "Una sala de hospital en 1950. Fotografía de Fritz Cohen.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Beilinson_Hospital_ward_1950.jpg",
        foco: "50% 50%",
        alt: "Camas de metal alineadas junto a los ventanales de una sala, con enfermeras de uniforme repartiendo bandejas.",
      },
      {
        archivo: "T Lymphocyte, also known as a T cell (yellow color).jpg",
        autor: "Un linfocito T visto al microscopio electrónico y coloreado. Fotografía del NIAID.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:T_Lymphocyte,_also_known_as_a_T_cell_(yellow_color).jpg",
        foco: "58% 50%",
        alt: "Una célula redonda de superficie plegada y erizada, teñida de amarillo sobre un fondo rosa.",
      },
      {
        archivo: "Amputation set, Europe, 1891-1910 Wellcome L0057842.jpg",
        autor: "Instrumental quirúrgico europeo, entre 1891 y 1910, con su caja de esterilizar. Wellcome Collection.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Amputation_set,_Europe,_1891-1910_Wellcome_L0057842.jpg",
        foco: "50% 55%",
        alt: "Bandejas de acero con bisturíes, pinzas y una sierra alineados uno junto a otro sobre fondo negro.",
      },
      {
        archivo: "CDC scientist transfers H7N9.png",
        autor: "Trabajo de laboratorio en una cabina de seguridad biológica. Fotografía de los CDC.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:CDC_scientist_transfers_H7N9.png",
        foco: "55% 50%",
        alt: "Una investigadora con bata azul, mascarilla y pantalla facial pipeteando en una gradilla de tubos verdes.",
      },
    ],
    entrada:
      "Boston, diciembre de 1954. Un joven de veintitrés años se está muriendo por un fallo de los riñones, en una época en la que todavía no existe la diálisis tal como la conocemos, y resulta que tiene un hermano gemelo idéntico y sano. Los cirujanos llevan medio siglo sabiendo coser vasos sanguíneos con precisión, y han trasplantado riñones muchas veces en animales y unas cuantas en personas, siempre con el mismo final: el órgano funciona unos días, se hincha, deja de filtrar y se destruye solo. Nadie sabe todavía por qué pasa eso. Con estos dos hermanos deciden probar.",
    paginas: [
      {
        rotulo: "El rechazo",
        texto:
          "El obstáculo no era la costura. El sistema inmunitario reconoce lo propio y lo ajeno por unas marcas moleculares que cada persona lleva en la superficie de sus células, y ataca cualquier tejido que no lleve las suyas exactamente iguales. Un riñón ajeno se hincha, deja de filtrar y se necrosa en pocos días, por muy bien cosido que esté. Antes de operar, el equipo hizo una comprobación insólita: injertó un trocito de piel de un hermano en el otro para ver si prendía. Prendió. Aquello demostró que para el cuerpo del receptor el donante no era otro.",
        destacado: { tipo: "frase", frase: "Probaron con un injerto de piel para ver si el cuerpo lo aceptaba." },
      },
      {
        rotulo: "Cinco horas",
        texto:
          "La operación duró cinco horas y media y se hizo en dos quirófanos contiguos. Al conectar la última vena, el riñón trasplantado cambió de color y empezó a producir orina sobre la mesa, delante de todo el equipo, que es la señal que se sigue esperando hoy. El receptor vivió ocho años más, se casó con la enfermera que lo había cuidado y tuvo hijos. El donante, que se quedó con un solo riñón, vivió hasta 2010. El cirujano que la dirigió recibió el premio Nobel treinta y seis años después de aquella operación.",
        destacado: { tipo: "cifra", cifra: "8", unidad: "años vivió el primer receptor" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó demostrado que el problema era exclusivamente inmunitario, y eso reorientó toda la investigación: dejaron de buscarse mejores técnicas de sutura y empezaron a buscarse formas de convencer al cuerpo de que aceptara lo ajeno. Primero se probó con radiación, que era casi peor que la enfermedad, y a partir de los años ochenta llegaron los medicamentos que frenan el sistema inmunitario sin apagarlo del todo. Solo entonces el trasplante dejó de ser un caso excepcional entre gemelos y pasó a ser una operación que se programa en cualquier hospital grande.",
      },
    ],
  },

  {
    id: "primer-corazon",
    titulo: "El corazón latió 18 días",
    gancho: "La técnica estaba resuelta desde hacía años. Lo que faltaba era una definición legal de la muerte.",
    categoria: "Trasplantes",
    color: "var(--slate)",
    encargo: "Un quirófano vacío de los años sesenta con la lámpara redonda encendida.",
    fotos: [
      {
        archivo: "Cape Town (ZA), Table Mountain -- 2024 -- 2762+64+66+68+70+72.jpg",
        autor: "Ciudad del Cabo desde la Montaña de la Mesa. Fotografía de Dietmar Rabich.",
        licencia: "CC BY-SA 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Cape_Town_(ZA),_Table_Mountain_--_2024_--_2762%2B64%2B66%2B68%2B70%2B72.jpg",
        foco: "50% 45%",
        alt: "Panorámica desde lo alto de una montaña plana sobre el mar azul y un barrio costero al fondo.",
      },
      {
        archivo: "Groote Schuur Hospital, Observatory, Cape Town, Western Cape. 02.JPG",
        autor: "Hospital Groote Schuur de Ciudad del Cabo, donde se hizo la operación en 1967.",
        licencia: "CC BY-SA 3.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Groote_Schuur_Hospital,_Observatory,_Cape_Town,_Western_Cape._02.JPG",
        foco: "50% 50%",
        alt: "Edificio hospitalario grande de fachada clara con muchas ventanas, visto desde la calle.",
      },
      {
        archivo: "Heart valve replacement operations.jpg",
        autor: "Cirugía cardíaca en el instituto Amosov de Kiev, 2019. Fotografía de Lena Gulenko.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Heart_valve_replacement_operations.jpg",
        foco: "50% 40%",
        alt: "Cuatro cirujanos con bata verde y mascarilla inclinados sobre la mesa de operaciones bajo la lámpara.",
      },
      {
        archivo: "Cape Town (ZA), Table Mountain -- 2024 -- 2794+96+98+2800+01.jpg",
        autor: "La bahía de Ciudad del Cabo vista desde la Montaña de la Mesa. Fotografía de Dietmar Rabich.",
        licencia: "CC BY-SA 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Cape_Town_(ZA),_Table_Mountain_--_2024_--_2794%2B96%2B98%2B2800%2B01.jpg",
        foco: "50% 50%",
        alt: "Vista panorámica muy ancha de una bahía con la ciudad extendida entre la montaña y el mar.",
      },
    ],
    entrada:
      "Sudáfrica, 3 de diciembre de 1967. Un equipo quirúrgico saca el corazón de una joven que ha muerto atropellada esa misma tarde y lo cose dentro del pecho de un hombre de cincuenta y cuatro años con el suyo destrozado por los infartos. El paciente despierta, habla, come y se hace fotos sentado en la cama. La noticia da la vuelta al mundo en horas y convierte al cirujano en una celebridad mundial. Muere dieciocho días después, de una neumonía, con el corazón nuevo latiendo perfectamente.",
    paginas: [
      {
        rotulo: "El problema legal",
        texto:
          "La técnica de coser un corazón en su sitio estaba publicada desde principios de los años sesenta y varios equipos americanos podían hacerla. Lo que los frenaba era otra cosa: en casi todos los países, la muerte se definía legalmente como la parada del corazón, así que para tener un corazón que sirviera había que esperar a que dejara de latir, y un corazón parado ya no vale. El equipo sudafricano operaba en un país donde la ley dejaba más margen al criterio del médico, y eso, más que ninguna genialidad quirúrgica, explica que llegara primero.",
        destacado: { tipo: "frase", frase: "Con la ley de entonces, el corazón útil llegaba siempre tarde." },
      },
      {
        rotulo: "La muerte del cerebro",
        texto:
          "El revuelo obligó a resolver el asunto en meses. En 1968 una comisión de una universidad americana publicó un informe que definía la muerte de otra manera: la pérdida irreversible de toda la función del cerebro, incluida la del tronco, comprobada con una lista de pruebas repetidas por médicos que no participan en el trasplante. La idea era que una persona cuyo cerebro ha muerto está muerta aunque una máquina mantenga su corazón latiendo. Los países fueron adoptando ese criterio con sus propias garantías, y ese cambio de definición, no el bisturí, es lo que hizo posible todo lo demás.",
        destacado: { tipo: "cifra", cifra: "1968", unidad: "el año de la nueva definición de muerte" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El año siguiente se hicieron más de cien trasplantes de corazón en el mundo y casi todos los pacientes murieron en semanas, así que la mayoría de los equipos lo abandonaron durante una década entera, hasta que aparecieron los medicamentos contra el rechazo. Hoy se hacen unos ocho mil al año y más de la mitad de los pacientes pasan de los doce años. De aquel primer caso quedó la lección de que el obstáculo estaba en la ley y no en el quirófano, y quedó también una fecha: dieciocho días de vida ganados que abrieron una puerta que ya no se cerró.",
      },
    ],
  },

  {
    id: "modelo-espanol",
    titulo: "Primera en donaciones",
    gancho: "No es que los españoles sean más generosos. Es que hay un médico dedicado a esto en cada hospital.",
    categoria: "Trasplantes",
    color: "var(--ochre)",
    encargo: "Una nevera portátil blanca y azul en el pasillo de un hospital.",
    entrada:
      "España, 1989. El país tiene una tasa de donación de órganos mediocre, por debajo de la media europea, y listas de espera que no se mueven. Se crea entonces una organización nacional de trasplantes con una idea que en aquel momento no tenía nadie más, y que no consiste en hacer campañas ni en cambiar la ley, sino en cambiar cómo funciona por dentro cada hospital.",
    paginas: [
      {
        rotulo: "Un médico dedicado",
        texto:
          "La pieza clave es una figura profesional: el coordinador de trasplantes, casi siempre un médico de cuidados intensivos del propio hospital, con formación específica y tiempo asignado para esto. Su trabajo es detectar a los posibles donantes entre los pacientes que fallecen, cuidar el proceso desde el principio y hablar con la familia. No es un cargo administrativo lejano, sino alguien que trabaja en la misma planta, conoce a los compañeros y está localizable a cualquier hora. Hoy hay coordinadores en casi doscientos hospitales españoles, y la red está conectada a una central que funciona sin parar.",
        destacado: { tipo: "frase", frase: "El coordinador trabaja en el propio hospital, no en un despacho." },
      },
      {
        rotulo: "La conversación",
        texto:
          "La ley española presume desde 1979 que todo el mundo es donante salvo que haya expresado lo contrario, pero en la práctica nunca se hace nada sin hablar con la familia, y ahí se juega todo. Esa conversación está estudiada al detalle: quién la hace, cuándo, en qué sitio, después de cuánto tiempo desde la mala noticia y con qué palabras. Las negativas familiares han bajado del cuarenta por ciento de los años ochenta a menos del quince. En 2023 el país alcanzó cuarenta y ocho donantes por millón de habitantes, más del doble de la media de la Unión Europea.",
        destacado: { tipo: "cifra", cifra: "48", unidad: "donantes por millón de habitantes" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un modelo que han copiado decenas de países, con equipos que viajan a España a formarse, y una organización que asesora a gobiernos de medio mundo. Y quedó una conclusión que va contra la intuición y que conviene repetir: los estudios comparados muestran que las diferencias entre países no se explican por lo generosa que sea la población ni por cómo esté redactada la ley, sino por si existe o no alguien concreto encargado de esto dentro de cada hospital. Se organizó bien un trabajo que ya estaba, y una tasa mediocre se convirtió en la mejor del mundo durante tres décadas seguidas.",
      },
    ],
  },
];
