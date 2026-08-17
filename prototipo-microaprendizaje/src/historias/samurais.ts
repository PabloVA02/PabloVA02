import type { Short } from "../shorts";

/* ==========================================================================
   Los samuráis.

   Un tema que llega al lector ya deformado por el cine: la espada, el honor,
   el suicidio ritual. Casi todo lo que se cree saber corresponde a los dos
   últimos siglos de su historia, cuando ya no combatían.

   La regla del tema: se cuenta lo que HACÍAN DE VERDAD en cada época, con
   armas, sueldos y horarios. Nada de filosofía guerrera flotando: un samurái
   fue primero un arquero a caballo, después un lancero de infantería y al
   final un funcionario con dos espadas y una mesa de despacho.
   ========================================================================== */

export const SAMURAIS: Short[] = [
  {
    id: "el-arma-era-el-arco",
    titulo: "El samurái iba con arco",
    gancho: "Durante siglos su oficio se llamó, literalmente, el camino del caballo y el arco.",
    categoria: "Samuráis",
    color: "var(--clay)",
    encargo: "Un arco largo asimétrico de bambú apoyado contra una pared de madera.",
    fotos: [
      {
        archivo: "MET DP121467.jpg",
        autor: "Guerrero a caballo con el arco y la aljaba, estampa de Utagawa Hiroshige, hacia 1835. Metropolitan Museum of Art.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:MET_DP121467.jpg",
        foco: "50% 42%",
        alt: "Estampa de un jinete con armadura sobre un caballo negro en la orilla, con el arco largo colgado del hombro.",
      },
      {
        archivo: "Acteur als boogschutter, RP-P-2017-6127.jpg",
        autor: "Un actor en el papel de arquero, estampa de 1847. Rijksmuseum, Ámsterdam.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Acteur_als_boogschutter,_RP-P-2017-6127.jpg",
        foco: "45% 42%",
        alt: "Un hombre de kimono estampado sujetando un arco amarillo altísimo, con la espada al cinto.",
      },
      {
        archivo: "Polearm (AM 1934.316-1).jpg",
        autor: "Una lanza japonesa, el arma que sustituyó al arco en los ejércitos grandes. Auckland Museum.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Polearm_(AM_1934.316-1).jpg",
        foco: "50% 50%",
        alt: "Una hoja de lanza de acero montada en un asta lacada, fotografiada sobre fondo liso.",
      },
      {
        archivo: "Blade and Mounting for a Sword (Katana) MET DT217427.jpg",
        autor: "Hoja y montura de una katana, siglo XVI. Metropolitan Museum of Art.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Blade_and_Mounting_for_a_Sword_(Katana)_MET_DT217427.jpg",
        foco: "50% 50%",
        alt: "Una hoja curva de acero pulido junto a su vaina lacada y su empuñadura trenzada.",
      },
    ],
    entrada:
      "Japón, siglos X a XVI. El guerrero a caballo que sirve a un señor no se define en absoluto por la espada, que es lo que todo el mundo imagina, sino por el arco. Su oficio se nombra con una expresión que puede traducirse como el camino del caballo y el arco, y así aparece en los documentos de la época, sin que nadie sienta la necesidad de mencionar la hoja. Los relatos de guerra describen combates que empiezan con jinetes gritando su nombre y su linaje a distancia, para que el rival sepa a quién se enfrenta, y siguen con un duelo a flechazos al galope.",
    paginas: [
      {
        rotulo: "El arco raro",
        texto:
          "El arco japonés es una pieza extraña que se reconoce a la primera: mide más de dos metros y la empuñadura no está en el centro, sino a un tercio de la parte de abajo. Esa asimetría no es un capricho estético, es la solución a un problema práctico: un arco largo tiene más potencia, y con la empuñadura descentrada el brazo inferior queda corto y puede pasar por encima del lomo del caballo sin golpearlo. Se fabricaba con láminas de bambú y de madera encoladas, y disparar desde una montura al galope exigía años de entrenamiento diario.",
        destacado: { tipo: "frase", frase: "La empuñadura va descentrada para que quepa sobre el caballo." },
      },
      {
        rotulo: "Después la lanza",
        texto:
          "Cuando las guerras crecieron y los ejércitos pasaron de centenares a decenas de miles de hombres, el duelo de arqueros dejó de tener sentido y la infantería en formación se impuso. El arma principal pasó a ser entonces la lanza larga, manejada en filas cerradas, y después el arcabuz, que llegó de Europa en 1543 y del que Japón se convirtió en pocas décadas en uno de los mayores fabricantes del mundo. En las batallas grandes del siglo XVI, la inmensa mayoría de las heridas registradas las causaban flechas, lanzas y balas, no espadas.",
        destacado: { tipo: "cifra", cifra: "1543", unidad: "el año en que llegó el arcabuz" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La espada era, en todo ese tiempo, un arma secundaria de distancia corta y sobre todo un objeto de prestigio: cara, heredada, firmada por su forjador y cargada de significado, como lo es hoy un reloj de familia. Su fama posterior viene de la época en que ya no se combatía. Quedó también el arco, convertido en una disciplina de tiro que sigue practicándose con el mismo arco asimétrico de bambú, en la que la puntuación importa menos que la postura, y que muchos aprendices japoneses estudian todavía como parte de su educación.",
      },
    ],
  },
  {
    id: "guerreros-funcionarios",
    titulo: "Dos siglos sin guerras",
    gancho: "Con el país en paz, la clase guerrera acabó llevando la contabilidad de los almacenes de arroz.",
    categoria: "Samuráis",
    color: "var(--slate)",
    encargo: "Un escritorio bajo de madera con pincel, tintero y papeles apilados.",
    fotos: [
      {
        archivo: "The Samurai Collection September 2018 1 (dōmaru tōsei gusoku and warabe tōsei gusoku armor).jpg",
        autor: "Armaduras de samurái expuestas sobre tatami. Colección Ann y Gabriel Barbier-Mueller, Dallas.",
        licencia: "CC BY-SA 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:The_Samurai_Collection_September_2018_1_(d%C5%8Dmaru_t%C5%8Dsei_gusoku_and_warabe_t%C5%8Dsei_gusoku_armor).jpg",
        foco: "50% 50%",
        alt: "Tres armaduras japonesas completas sentadas sobre esteras, con cascos de cuernos y placas laqueadas.",
      },
      {
        archivo: "Samurai Museum Tokyo 2017 2.jpg",
        autor: "Armaduras en el Museo del Samurái de Tokio. Fotografía de Monica Wong.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Samurai_Museum_Tokyo_2017_2.jpg",
        foco: "50% 50%",
        alt: "Armaduras japonesas alineadas en una sala de museo, con los cascos y las máscaras a la vista.",
      },
      {
        archivo: "The Samurai Collection September 2018 6 (mogamidō gusoku armor with bagai horse armor and bagu horse tack).jpg",
        autor: "Armadura de samurái con su arreo de caballo. Colección Ann y Gabriel Barbier-Mueller, Dallas.",
        licencia: "CC BY-SA 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:The_Samurai_Collection_September_2018_6_(mogamid%C5%8D_gusoku_armor_with_bagai_horse_armor_and_bagu_horse_tack).jpg",
        foco: "50% 45%",
        alt: "Armadura japonesa completa junto a la de un caballo, montadas sobre soportes en un museo.",
      },
      {
        archivo: "Armor and hand warmer display - The Ann and Gabriel Barbier-Mueller Museum - DSC05626.jpg",
        autor: "Armadura y calientamanos expuestos en el museo Barbier-Mueller de Dallas. Fotografía de Daderot.",
        licencia: "Public domain",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Armor_and_hand_warmer_display_-_The_Ann_and_Gabriel_Barbier-Mueller_Museum_-_DSC05626.jpg",
        foco: "50% 50%",
        alt: "Armadura japonesa expuesta en una vitrina junto a objetos cotidianos de metal.",
      },
    ],
    entrada:
      "Japón, 1603. Termina un siglo largo de guerra civil, un solo linaje se hace con el control del país y cierra las fronteras casi por completo. Empiezan doscientos cincuenta años sin conflictos internos ni exteriores, un caso casi único en la historia de cualquier país grande. El problema, si se mira desde dentro, es que Japón tiene una clase social entera —entre el cinco y el siete por ciento de la población, con sus privilegios y su apellido— cuyo oficio hereditario, el único que la ley le permite tener, es combatir en unas guerras que ya no hay.",
    paginas: [
      {
        rotulo: "Sueldo en arroz",
        texto:
          "Aquellos hombres cobraban un salario hereditario medido en arroz, pagado por su señor, y a cambio debían estar disponibles para la guerra. Sin guerra, se les fue dando trabajo administrativo: recaudar impuestos, inspeccionar obras, llevar registros, vigilar mercados, atender pleitos. Un samurái medio del siglo XVIII pasaba el día en una oficina con pincel y tintero, iba a un despacho a una hora fija y discutía presupuestos. Muchos vivían apretados, porque el sueldo en arroz perdía valor cuando subían los precios y a ellos les estaba mal visto comerciar para completarlo.",
        destacado: { tipo: "cifra", cifra: "250", unidad: "años sin guerras dentro del país" },
      },
      {
        rotulo: "El código tardío",
        texto:
          "Es en esa época de paz cuando se escriben casi todos los textos sobre el honor guerrero que hoy asociamos a los samuráis, incluido el más famoso, redactado hacia 1716 por un hombre que nunca estuvo en una batalla. No describen una práctica, proponen una moral para una clase que ha perdido su función y busca justificar sus privilegios. Las dos espadas, que solo ellos podían llevar por ley, dejaron de ser herramientas y pasaron a ser un distintivo de rango, como una toga o un uniforme de gala. Muchos samuráis de aquel siglo no llegaron a desenvainar la suya en toda su vida.",
        destacado: { tipo: "frase", frase: "El código del guerrero lo escribió gente que no había combatido." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un malentendido enorme, porque la imagen que ha viajado por el mundo entero procede de esos textos tardíos y no de los siglos de combate real. Y quedó una consecuencia práctica que explica el siglo siguiente: al abrirse el país en 1853, aquella clase administrativa era la más alfabetizada de la sociedad, con escuelas propias y costumbre de papeleo, y muchos de sus miembros ocuparon los puestos técnicos de la modernización. Los mismos que habían pasado dos siglos llevando cuentas de arroz montaron los ferrocarriles, los bancos y el ejército moderno.",
      },
    ],
  },
  {
    id: "prohibido-llevar-espada",
    titulo: "Prohibido llevar espada",
    gancho: "Una ley acabó de golpe con la clase guerrera: sin espadas, sin sueldo y sin peinado propio.",
    categoria: "Samuráis",
    color: "var(--plum)",
    encargo: "Dos espadas envainadas guardadas sobre un soporte de madera lacada.",
    entrada:
      "Japón, marzo de 1876. El gobierno que ha tomado el poder ocho años antes publica un decreto que cabe en una sola línea: se prohíbe llevar espada en público a todo el mundo, salvo a los militares y a los policías de uniforme y en acto de servicio. No parece gran cosa leído así. Es la última de una serie de medidas que en menos de una década desmontan por completo, y desde dentro, a la clase guerrera que había gobernado el país durante casi setecientos años. Y lo desmontaron ellos mismos, desde el gobierno, sin que nadie los invadiera.",
    paginas: [
      {
        rotulo: "Desmontar la clase",
        texto:
          "El desmontaje fue metódico y rapidísimo. Primero se abolieron los dominios y se sustituyeron por provincias con funcionarios nombrados desde la capital. Después se creó un ejército de reclutas obligatorio, abierto a campesinos y comerciantes, lo que eliminaba el monopolio guerrero de una clase entera. Luego se conmutaron los sueldos hereditarios en arroz por bonos del Estado de pago único, que muchos perdieron en negocios ruinosos. Y por último se prohibieron el moño tradicional y las espadas, es decir, los dos signos visibles que permitían reconocer a un samurái en la calle.",
        destacado: { tipo: "cifra", cifra: "700", unidad: "años de gobierno guerrero se acabaron" },
      },
      {
        rotulo: "La última revuelta",
        texto:
          "Hubo revueltas, y la mayor estalló al año siguiente en el sur, con unos veinte mil hombres levantados contra el gobierno. Su jefe era, paradójicamente, uno de los arquitectos del nuevo Estado, que se puso del lado de los descontentos. Duró siete meses y terminó en una montaña, con unos pocos centenares de supervivientes cargando contra una posición fortificada. Los vencieron soldados reclutados entre campesinos, armados con fusiles y artillería moderna y mandados por oficiales que habían sido samuráis. Esa batalla es la que ha llegado al cine, con bastante libertad.",
        destacado: { tipo: "frase", frase: "Los venció un ejército de campesinos con fusiles." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron los apellidos, que hasta entonces solo ellos podían usar y que en 1875 se hicieron obligatorios para todo el mundo. Quedó la forja de espadas como oficio artesanal protegido, con muy pocos talleres autorizados y una producción de unas pocas piezas al año. Y quedó una transformación que sigue estudiándose por su velocidad: un país entero pasó de la clase guerrera hereditaria al servicio militar universal, del sueldo en arroz al presupuesto en dinero y del moño al sombrero occidental en poco más de veinte años, casi sin resistencia organizada.",
      },
    ],
  },
];
