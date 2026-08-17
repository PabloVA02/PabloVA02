import type { Short } from "../shorts";

/* ==========================================================================
   Los astilleros.

   Fábricas de barcos, que son los objetos móviles más grandes que hace la
   humanidad. El tema se estropea si se cuenta con toneladas de registro
   bruto: hay que contarlo desde la organización del trabajo.

   La regla del tema: se cuenta CÓMO SE ORGANIZA UNA OBRA ENORME —quién hace
   qué, en qué orden y cómo se mueven las piezas—, porque los astilleros
   inventaron formas de trabajar que después copió el resto de la industria.
   Con tiempos de construcción, que es la cifra que lo dice todo.
   ========================================================================== */

export const ASTILLEROS: Short[] = [
  {
    id: "un-barco-al-dia",
    titulo: "Una galera en un día",
    gancho: "Con los cascos hechos y las piezas numeradas por adelantado, el montaje final era casi una cadena de montaje.",
    categoria: "Astilleros",
    color: "var(--slate)",
    encargo: "Un canal estrecho entre naves de ladrillo con arcos, sin barcos dentro.",
    fotos: [
      {
        archivo: "Vista Arsenale di Venezia - panoramio.jpg",
        autor: "El Arsenal de Venecia visto desde arriba, con sus naves de ladrillo alineadas junto al canal. Fotografía de Marco Usan.",
        licencia: "CC BY 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Vista_Arsenale_di_Venezia_-_panoramio.jpg",
        foco: "50% 42%",
        alt: "Una hilera larga de naves de ladrillo con arcos a la orilla de un canal, vistas desde lo alto.",
      },
      {
        archivo: "Venice- The entrance to the Arsenal (SM stf144).png",
        autor: "La entrada del Arsenal de Venecia, fotografía de Carlo Naya, 1875.",
        licencia: "PDM-owner",
        fuente: "https://commons.wikimedia.org/wiki/File:Venice-_The_entrance_to_the_Arsenal_(SM_stf144).png",
        foco: "50% 42%",
        alt: "Fotografía antigua de una puerta monumental con torres almenadas y leones de mármol delante.",
      },
      {
        archivo: "Cordage chantier de l'Hermione Rochefort sur Mer.jpg",
        autor: "Cabos ordenados en el astillero donde se reconstruyó la fragata Hermione, en Rochefort. Fotografía de Jebulon.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Cordage_chantier_de_l%27Hermione_Rochefort_sur_Mer.jpg",
        foco: "50% 45%",
        alt: "Cabos gruesos de fibra enrollados y colgados en orden sobre una pared de madera.",
      },
      {
        archivo: "Arsenale ingresso Venezia notte.jpg",
        autor: "La puerta del Arsenal de noche. Fotografía de Wolfgang Moroder.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Arsenale_ingresso_Venezia_notte.jpg",
        foco: "50% 45%",
        alt: "La portada de piedra del Arsenal iluminada de noche, con el agua del canal delante.",
      },
    ],
    entrada:
      "Venecia, siglos XV y XVI. El astillero de la república no es un taller grande: es la mayor instalación industrial de Europa, con miles de trabajadores fijos, un recinto amurallado propio y sus propias leyes dentro. Su fama, sin embargo, no viene del tamaño sino de una capacidad muy concreta que los embajadores extranjeros contaban en sus cartas sin acabar de creérsela. En momentos de urgencia militar, el Arsenal podía botar una galera terminada, armada y aprovisionada en un solo día. Y no era un alarde puntual: se hizo varias veces, delante de testigos, para impresionar a las visitas.",
    paginas: [
      {
        rotulo: "Piezas en almacén",
        texto:
          "El truco no era la velocidad de los carpinteros, sino la preparación previa. El astillero guardaba cascos ya construidos y, sobre todo, un almacén enorme de piezas hechas por adelantado y clasificadas: remos, timones, mástiles, velas, cordajes y armas. Todas ellas seguían medidas estándar, de modo que cualquier pieza encajaba en cualquier barco del mismo tipo sin necesidad de ajustarla. Cuando hacía falta armar una nave, el casco recorría un canal pasando por delante de cada almacén. En cada parada le entregaban por una ventana lo que le tocaba, y el barco seguía avanzando.",
        destacado: { tipo: "frase", frase: "El casco pasaba por delante de los almacenes y recogía sus piezas." },
      },
      {
        rotulo: "El orden",
        texto:
          "Aquello exigía una organización que hoy llamaríamos industrial, con reglas escritas y jerarquías claras. Había especialidades separadas con sus propios maestros, un sistema de inspección de calidad y contabilidad detallada de los materiales. La plantilla era fija y cobraba también en los tiempos de poca actividad, para que el astillero no la perdiera. Un visitante español que lo vio en 1436 dejó escrito su asombro al presenciar cómo salían diez galeras armadas en unas horas. Ese testimonio se cita todavía en los manuales de historia de la organización del trabajo.",
        destacado: { tipo: "cifra", cifra: "16.000", unidad: "personas llegó a emplear el astillero" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el recinto, hoy convertido en sede de exposiciones y visitable, y quedó la palabra que designa a cualquier astillero en varios idiomas europeos, tomada del árabe a través del dialecto veneciano. Y quedó la demostración de que la cadena de montaje no es un invento del siglo XX. Es una forma de organizar el trabajo que aparece siempre que hay que construir muchas unidades iguales y deprisa. Lo que cambió después fue la fuente de energía y el tamaño de las piezas, no la idea de repartir el trabajo en puestos fijos por los que pasa el producto.",
      },
    ],
  },
  {
    id: "el-barco-por-modulos",
    titulo: "El barco se hace a trozos",
    gancho: "Se fabrican bloques enormes en distintos talleres y se sueldan al final, como un juguete de piezas gigante.",
    categoria: "Astilleros",
    color: "var(--ochre)",
    encargo: "Un bloque enorme de casco de acero colgando de una grúa pórtico.",
    fotos: [
      {
        archivo: "Modernisation de la Thalassa - vues extérieures du navire (Ifremer 00400-51188 - 35313).jpg",
        autor: "El buque Thalassa en dique seco, con el casco abierto para alargarlo. Fotografía de Stéphane Lesbats, Ifremer.",
        licencia: "CC BY 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Modernisation_de_la_Thalassa_-_vues_ext%C3%A9rieures_du_navire_(Ifremer_00400-51188_-_35313).jpg",
        foco: "50% 50%",
        alt: "Casco de un barco en dique seco con un hueco recortado en el costado y andamios apoyados al lado.",
      },
      {
        archivo: "Modernisation de la Thalassa (Ifremer 00400-51186 - 35322).jpg",
        autor: "Obras de transformación del buque Thalassa en el astillero. Ifremer.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Modernisation_de_la_Thalassa_(Ifremer_00400-51186_-_35322).jpg",
        foco: "50% 50%",
        alt: "Estructura de acero de un barco a medio montar, con las planchas soldadas a la vista.",
      },
      {
        archivo: "Modernisation de la Thalassa - travaux dans la passerelle (Ifremer 00400-51182 - 35307).jpg",
        autor: "Trabajos en el puente de mando del Thalassa durante su modernización. Ifremer.",
        licencia: "CC BY 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Modernisation_de_la_Thalassa_-_travaux_dans_la_passerelle_(Ifremer_00400-51182_-_35307).jpg",
        foco: "50% 50%",
        alt: "Interior desmontado del puente de un barco, con cables y paneles a medio instalar.",
      },
      {
        archivo: "Modernisation de la Thalassa - vues extérieures du navire (Ifremer 00400-51188 - 35310).jpg",
        autor: "Otra vista del casco del Thalassa durante las obras en el astillero. Ifremer.",
        licencia: "CC BY 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Modernisation_de_la_Thalassa_-_vues_ext%C3%A9rieures_du_navire_(Ifremer_00400-51188_-_35310).jpg",
        foco: "50% 50%",
        alt: "Proa de un buque en dique seco rodeada de andamios y maquinaria de astillero.",
      },
    ],
    entrada:
      "Astilleros de todo el mundo, con un método que se generalizó durante la Segunda Guerra Mundial y que hoy es el único que se usa. Hasta 1940, un barco se levantaba pieza a pieza sobre la grada, empezando por la quilla y subiendo hacia arriba, con todos los oficios trabajando a la vez en el mismo sitio, estorbándose unos a otros y esperando su turno. La guerra obligó a botar miles de cargueros a toda prisa, muchos más de los que aquel método permitía, y para conseguirlo hubo que tirar la manera de trabajar de siglos y empezar de cero.",
    paginas: [
      {
        rotulo: "Bloques",
        texto:
          "La idea es dividir el barco en bloques de varios cientos de toneladas, que se fabrican por separado en naves cubiertas y en posiciones cómodas para trabajar. Dentro de cada bloque se instalan ya las tuberías, los cables y hasta los camarotes, con los operarios trabajando en el suelo en lugar de colgados en altura. Después se llevan a la grada con grúas enormes y se sueldan unos a otros. La soldadura sustituyó además al remachado, que era mucho más lento y exigía cuadrillas de cuatro personas por cada línea de remaches.",
        destacado: { tipo: "frase", frase: "Se trabaja en el suelo, y no colgado a veinte metros." },
      },
      {
        rotulo: "Los tiempos",
        texto:
          "El efecto de aquel cambio sobre los plazos de entrega fue brutal y se notó en pocos meses. Los cargueros construidos así durante la guerra pasaron de necesitar unos ocho meses a salir en pocas semanas. En un caso extremo, montado además con fines propagandísticos, se botó uno en menos de cinco días. Hoy un astillero grande organiza el trabajo como una fábrica de coches, con bloques que llegan por carretera desde talleres externos. Algunos portacontenedores enormes se terminan en menos de un año desde el corte de la primera chapa.",
        destacado: { tipo: "cifra", cifra: "5", unidad: "días tardó el caso más extremo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una industria concentrada en muy pocos países, sobre todo asiáticos, porque este método premia el volumen, las grúas gigantes y las instalaciones enormes. Quedó también una exigencia de precisión asombrosa. Si un bloque de trescientas toneladas viene con un centímetro de diferencia, no encaja con el siguiente, así que todo se mide con láser antes de mover nada. Y quedó una imagen que impresiona en cualquier visita a un astillero: media proa colgando de una grúa mientras el resto del barco espera abajo, ya soldado y esperando su pieza.",
      },
    ],
  },
  {
    id: "la-botadura",
    titulo: "Botar es dejarlo caer",
    gancho: "Se apoya sobre una cuna engrasada y se corta la sujeción. A partir de ahí lo único que lo frena es el agua.",
    categoria: "Astilleros",
    color: "var(--plum)",
    curioso: true,
    encargo: "Un casco de barco deslizando por una rampa hacia el agua con espuma alrededor.",
    entrada:
      "Astilleros de todo el mundo, con un procedimiento que apenas ha cambiado desde el siglo XIX. Un barco se construye en seco sobre una rampa inclinada que baja hacia el agua, y llega un día en que hay que meter dentro del mar varios miles de toneladas de acero que no se pueden levantar con ninguna grúa. La operación clásica consiste en soltarlo y dejar que resbale por su propio peso hasta el agua. Es uno de los momentos más delicados de toda la construcción, y solo se puede hacer una vez.",
    paginas: [
      {
        rotulo: "La cuna",
        texto:
          "Bajo el casco se monta una estructura de madera llamada cuna, que se apoya sobre unas guías engrasadas con sebo o con grasa especial. El barco descansa mientras tanto sobre unos calzos de madera que lo mantienen quieto y repartido. En el momento de la botadura se retiran esos calzos y se corta la última sujeción, y el conjunto empieza a deslizar. Cuanto más pesa, mejor desliza, y ahí está el peligro: una vez que arranca no hay forma de pararlo, y el barco entra en el agua a bastante velocidad.",
        destacado: { tipo: "frase", frase: "Cuando arranca ya no hay manera de pararlo." },
      },
      {
        rotulo: "Lo que puede fallar",
        texto:
          "Los accidentes de botadura han sido frecuentes y a veces graves. Un barco puede quedarse encallado a medio camino si la grasa no funciona bien. Puede escorarse si la cuna cede por un lado, o provocar una ola enorme al entrar de costado en un río estrecho. En una botadura famosa de 1912, en un río americano, la ola que levantó el barco arrolló a los espectadores agolpados en la otra orilla. Por eso hoy se calcula todo con modelos y se usan cadenas de freno que arrastran por el suelo.",
        destacado: { tipo: "cifra", cifra: "20", unidad: "kilómetros por hora puede alcanzar al entrar" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó la ceremonia, con su madrina y su botella de vino espumoso estrellada contra el casco, que viene de ritos antiquísimos para pedir suerte a un barco. Y quedó una alternativa cada vez más usada que hace todo esto innecesario. Consiste en construir dentro de un dique seco, un recinto excavado junto al agua que se inunda cuando el barco está terminado. Un dique así es mucho más caro de construir, pero el barco simplemente empieza a flotar sin moverse un metro, y ya no hay nada que pueda salir mal.",
      },
    ],
  },
];
