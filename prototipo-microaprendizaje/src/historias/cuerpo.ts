import type { Short } from "../shorts";

/* ==========================================================================
   Cuerpo.

   El tema con el lector más cautivo: todo el mundo tiene uno y nadie sabe
   cómo funciona. Y el tema donde más basura circula, porque cualquier cifra
   sobre el cuerpo humano se repite mil veces antes de que alguien la mire.

   La regla del tema: si la cifra famosa es falsa, la historia es esa. No se
   corrige de pasada en la última línea — se cuenta de dónde salió el número,
   quién lo dijo, por qué se creyó tanto tiempo y qué se sabe ahora. Un mito
   bien desmontado engancha más que el mito, porque el lector se lleva dos
   cosas: el dato bueno y la sensación de haber estado dentro de la cocina.

   Nada de consejos. Esto no es salud, es asombro: cómo está hecho lo que
   llevas puesto. En cuanto una historia empieza a recomendar algo, se va al
   fichero de salud y aquí no vuelve.
   ========================================================================== */

export const CUERPO: Short[] = [
  {
    id: "bacterias-diez-a-uno",
    titulo: "Diez bacterias por célula",
    gancho: "La cifra más repetida de la microbiología salió de una estimación de 1972.",
    categoria: "Cuerpo",
    color: "var(--sage)",
    encargo: "Colonias bacterianas en una placa de Petri, luz rasante, fondo oscuro.",
    fotos: [
      {
        archivo: "Разнообразие почвенной микрофлоры в чашке Петри.jpg",
        autor: "Microflora de un puñado de tierra, cultivada en una placa de Petri. Fotografía de Oksana Lastochkina.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:%D0%A0%D0%B0%D0%B7%D0%BD%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B8%D0%B5_%D0%BF%D0%BE%D1%87%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%BC%D0%B8%D0%BA%D1%80%D0%BE%D1%84%D0%BB%D0%BE%D1%80%D1%8B_%D0%B2_%D1%87%D0%B0%D1%88%D0%BA%D0%B5_%D0%9F%D0%B5%D1%82%D1%80%D0%B8.jpg",
        foco: "58% 50%",
        alt: "Una placa redonda con colonias de moho ocres, verdes, negras y crema repartidas sobre el medio de cultivo.",
      },
      {
        archivo: "E. coli Bacteria (7316101966).jpg",
        autor: "Escherichia coli al microscopio electrónico. Fotografía del NIAID.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:E._coli_Bacteria_(7316101966).jpg",
        foco: "50% 30%",
        alt: "Bastoncillos alargados y rugosos amontonados unos sobre otros, en blanco y negro.",
      },
      {
        archivo: "Red blood cells (2).jpg",
        autor: "Glóbulos rojos al microscopio electrónico de barrido.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Red_blood_cells_(2).jpg",
        foco: "50% 32%",
        alt: "Discos hundidos por el centro, apilados unos sobre otros sobre un fondo negro.",
      },
      {
        archivo: "Cross-section histology of small intestinal villi of the terminal ileum.jpg",
        autor: "Corte de las vellosidades del intestino delgado visto al microscopio. Imagen de Mikael Häggström.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Cross-section_histology_of_small_intestinal_villi_of_the_terminal_ileum.jpg",
        foco: "50% 50%",
        alt: "Un mosaico de celdas rosas y moradas, cada una con un centro punteado, como un panal teñido.",
      },
    ],
    entrada:
      "Durante cuarenta años se repitió en libros de texto, en charlas divulgativas y en titulares de periódico: en tu cuerpo hay diez bacterias por cada célula humana, de modo que, contando por unidades, eres más ellas que tú. Es una idea preciosa, encaja en un tuit y da para varias frases lapidarias sobre lo poco humanos que somos. Se citaba en artículos científicos serios y nadie parecía haber comprobado el dato. El problema apareció en 2016, cuando tres investigadores se sentaron a rehacer la cuenta desde cero y, de paso, fueron a buscar de dónde había salido la original.",
    paginas: [
      {
        rotulo: "El origen",
        texto:
          "El rastro llevaba a un artículo de 1972 de un microbiólogo estadounidense, que calculó cuántas bacterias caben en un adulto. La estimación era razonable para su época y estaba hecha con los datos que había entonces. Pero era eso, una estimación aproximada, con supuestos muy gruesos sobre el volumen del tubo digestivo y la densidad de bacterias. Nadie la revisó. Se citó, y luego se citó la cita, y a los pocos años ya circulaba sin fuente, con la seguridad que dan los números redondos. La proporción diez a uno se convirtió en un hecho por repetición, que es la forma más silenciosa de convertirse en un hecho.",
        destacado: {
          tipo: "frase",
          frase: "Nadie mintió. Simplemente nadie volvió a mirar durante cuarenta años.",
        },
      },
      {
        rotulo: "La cuenta nueva",
        texto:
          "En 2016, tres investigadores publicaron una revisión que hacía las dos cuentas por separado y con datos modernos. Por el lado bacteriano, casi todo el peso está en el colon, y midieron su contenido real en vez de suponerlo. Por el lado humano, la mayoría de las células del cuerpo no son las grandes que uno imagina: son glóbulos rojos, pequeñísimos y numerosísimos. Salieron unos 38 billones de bacterias frente a unos 30 billones de células humanas. La proporción no es diez a uno: es aproximadamente uno a uno, y basta ir al baño para inclinar la balanza un rato.",
        destacado: { tipo: "cifra", cifra: "1:1", unidad: "y no 10:1, según la revisión de 2016" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Que la proporción se desinfle no rebaja lo importante. Esas bacterias siguen aportando un repertorio de genes muchísimo mayor que el humano, fabrican vitaminas que nosotros no sabemos fabricar y digieren fibra que sin ellas pasaría de largo. Lo que se ha caído es el eslogan, no la biología. Y queda una lección aparte, que es la mejor parte del asunto. Una cifra puede vivir cuarenta años en los libros sin que nadie la compruebe. No es por conspiración, sino porque comprobar lo que todos dan por bueno no da prestigio a nadie.",
      },
    ],
  },

  {
    id: "huesos-se-rehacen",
    titulo: "Tu esqueleto se rehace",
    gancho: "El hueso se derriba y se levanta todos los días, y tú no notas la obra.",
    categoria: "Cuerpo",
    color: "var(--clay)",
    curioso: true,
    encargo: "Un fémur humano seccionado a lo largo, con el hueso esponjoso visible.",
    fotos: [
      {
        archivo: "Blue whale skeleton Hope Hintze Hall Natural History Museum London 2025 dllu.jpg",
        autor: "Esqueleto de ballena azul colgado en el vestíbulo del Museo de Historia Natural de Londres. Fotografía de Daniel Lu.",
        licencia: "CC BY-SA 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Blue_whale_skeleton_Hope_Hintze_Hall_Natural_History_Museum_London_2025_dllu.jpg",
        foco: "50% 45%",
        alt: "Esqueleto enorme de ballena suspendido sobre el vestíbulo de un museo de arcos de piedra, con visitantes debajo.",
      },
      {
        archivo: "Natural History Museum Hintze Hall.jpg",
        autor: "El vestíbulo Hintze del Museo de Historia Natural de Londres.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Natural_History_Museum_Hintze_Hall.jpg",
        foco: "50% 50%",
        alt: "Nave de museo con arcos de ladrillo, escalinata de piedra y esqueletos expuestos.",
      },
      {
        archivo: "X-ray of the bones of a hand with a ring on one finger Wellcome V0029523.jpg",
        autor: "Radiografía de una mano con un anillo, hecha por Wilhelm Röntgen en 1895. Wellcome Collection.",
        licencia: "Public domain",
        fuente:
          "https://commons.wikimedia.org/wiki/File:X-ray_of_the_bones_of_a_hand_with_a_ring_on_one_finger_Wellcome_V0029523.jpg",
        pdPorEdad: 1923,
        foco: "50% 50%",
        alt: "Radiografía antigua de una mano: los huesos claros sobre fondo oscuro y un anillo en un dedo.",
      },
      {
        archivo: "Natural History Museum, London (46263138575).jpg",
        autor: "Escalinata y galerías del Museo de Historia Natural de Londres. Fotografía de Martin Pettitt.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Natural_History_Museum,_London_(46263138575).jpg",
        foco: "50% 50%",
        alt: "Interior de museo victoriano con arcos de piedra clara, vidrieras y una escalera ancha.",
      },
    ],
    entrada:
      "Un hueso parece lo más quieto que hay en el cuerpo: duro, seco, terminado, casi un mineral. Es exactamente lo contrario, y se sabe desde mediados del siglo XX, cuando se pudo seguir el rastro del calcio dentro de un organismo vivo y se vio que no paraba de moverse. Dentro de cada hueso trabaja una cuadrilla permanente que abre túneles, retira material viejo y lo repone con material nuevo. El esqueleto entero se sustituye cada década más o menos, sin que la forma cambie ni un milímetro.",
    paginas: [
      {
        rotulo: "La cuadrilla",
        texto:
          "Hay dos oficios. Los primeros son células grandes, con varios núcleos, que se pegan a la superficie del hueso y la sellan como una ventosa. Debajo vierten ácido y enzimas, que disuelven el mineral y se comen el resto, dejando un cráter. Se llaman osteoclastos. Detrás llegan los osteoblastos y rellenan el cráter con colágeno, que después se mineraliza. La obra tarda unos meses en cada punto y hay miles de puntos abiertos a la vez. Algunos osteoblastos quedan atrapados en el material que ellos mismos fabricaron y se convierten en osteocitos: se quedan dentro, conectados por prolongaciones finísimas, detectando dónde el hueso está sufriendo y avisando de dónde toca reforzar.",
        destacado: {
          tipo: "frase",
          frase: "El hueso no se conserva: se rehace, y la forma es lo único que sobrevive.",
        },
      },
      {
        rotulo: "Por qué se molestan",
        texto:
          "Porque un material que no se repara acumula grietas hasta que revienta, y porque el hueso es además el almacén de calcio del cuerpo: cuando la sangre necesita calcio, se saca de ahí. Ese doble oficio explica lo que le pasa al esqueleto de un astronauta. Sin peso encima, las células que vigilan dentro dejan de detectar carga y la reposición se relaja mientras la demolición sigue. En la Estación Espacial se pierde en torno a un uno por ciento de masa ósea al mes en las zonas que soportan el cuerpo. Por eso allí arriba se hacen dos horas y media de ejercicio diarias, sujetos con arneses a una cinta.",
        destacado: { tipo: "cifra", cifra: "1 %", unidad: "de masa ósea al mes sin gravedad" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La obra explica también por qué un hueso roto suelda y una muela picada no. El diente está cubierto de esmalte, que es el tejido más duro del cuerpo y no tiene células vivas dentro. Lo que se rompe ahí no se rehace nunca. Y explica la letra pequeña de la cifra famosa: lo de «cada diez años» es un promedio. El hueso esponjoso del interior de las vértebras se renueva mucho más deprisa que la capa compacta de la tibia, así que a los cuarenta llevas partes recién estrenadas y partes que vienen de lejos.",
      },
    ],
  },

  {
    id: "olfato-atajo",
    titulo: "El olfato no pasa aduana",
    gancho: "Todo lo que ves y oyes pasa un control antes de llegar. Un olor, no.",
    categoria: "Cuerpo",
    color: "var(--plum)",
    curioso: true,
    encargo: "Un primer plano lateral de una nariz humana, luz dura, casi abstracto.",
    entrada:
      "Un olor cualquiera, el cloro de una piscina o la colonia de alguien, puede devolverte a un sitio con una nitidez que ninguna foto consigue. No es una impresión romántica, sino una consecuencia del cableado, y se entendió del todo en 2004. El olfato entra en el cerebro por una puerta distinta a la de los demás sentidos, que da al barrio de la memoria.",
    paginas: [
      {
        rotulo: "La aduana",
        texto:
          "La vista, el oído, el gusto y el tacto tienen una escala obligatoria: el tálamo, una estructura central que recibe la señal, la filtra y decide qué sube a la corteza. Es el control de aduanas del cerebro y hace un trabajo enorme, porque impide que la conciencia se ahogue en información. El olfato se lo salta. Las neuronas del epitelio olfativo mandan sus fibras directamente al bulbo olfativo, y desde ahí la señal llega en muy pocos relevos a la amígdala y a la corteza entorrinal, la puerta del hipocampo. Es decir: a la emoción y a la memoria antes que al pensamiento.",
        destacado: {
          tipo: "frase",
          frase: "Un olor llega a la emoción antes de que sepas qué estás oliendo.",
        },
      },
      {
        rotulo: "La cifra que cambió",
        texto:
          "Durante casi un siglo se repitió que el ser humano distingue unos diez mil olores. La cifra venía de un modelo teórico de los años veinte, no de un experimento. En 2014 un equipo estadounidense hizo la prueba de verdad. Mezclaron moléculas de olor en combinaciones y midieron cuántas sabían separar los voluntarios. Extrapolando, salió una estimación de más de un billón de mezclas distinguibles. El número recibió críticas metodológicas serias y no conviene tomarlo al pie de la letra, pero incluso los críticos aceptan lo esencial: diez mil se quedaba corto por mucho.",
        destacado: { tipo: "cifra", cifra: "10.000", unidad: "olores: la cifra nunca se midió" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Las neuronas olfativas son además una rareza anatómica: están expuestas al aire de fuera y se sustituyen cada pocas semanas, algo que casi ninguna otra neurona hace. Eso las convierte en una vía de entrada, y también en un aviso. La pérdida de olfato aparece años antes de los primeros síntomas en varias enfermedades neurodegenerativas, y en 2020 se hizo famosa por otro motivo. Un sentido que solemos poner el último en la lista resultó ser el más pegado a lo que somos: cuando desaparece, la gente no dice que come peor. Dice que el mundo se ha vuelto plano.",
      },
    ],
  },
  {
    id: "hipo-antiguo",
    titulo: "El hipo viene de los peces",
    gancho: "No sirve para nada y ningún medicamento lo cura. La explicación mejor es que sobra desde hace millones de años.",
    categoria: "Cuerpo",
    color: "var(--slate)",
    curioso: true,
    encargo: "Un renacuajo o un anfibio pequeño flotando en agua verdosa muy cercana.",
    entrada:
      "El hipo consiste en una contracción brusca del diafragma, el músculo grande que hay bajo los pulmones. Detrás viene el cierre de golpe de la garganta, que es lo que produce el ruido. Ocurre unas veinte veces por minuto y no se puede controlar. Se estudia desde el siglo XIX y, a diferencia de toser o estornudar, no cumple ninguna función conocida.",
    paginas: [
      {
        rotulo: "El nervio largo",
        texto:
          "La pista está en el recorrido absurdo del nervio que lo provoca. El que controla el diafragma sale del cuello, a la altura de la tercera vértebra, y baja hasta el pecho. Está mucho más lejos de lo que haría falta si el cuerpo se hubiera diseñado de cero. Ese trazado tiene sentido en un pez, donde el mismo circuito nervioso gobernaba las branquias, que están al lado. Al pasar a respirar por pulmones, el músculo se desplazó hacia abajo y el nervio se estiró detrás, dejando este cableado heredado.",
        destacado: { tipo: "frase", frase: "El nervio baja del cuello al pecho porque en un pez no tenía que bajar." },
      },
      {
        rotulo: "Los renacuajos",
        texto:
          "La otra pista viene de los anfibios y del propio embarazo. Un renacuajo respira por branquias, y para hacerlo bombea agua por la boca mientras cierra la glotis. La glotis es la tapa que hay en la garganta, y la cierra para que el agua no se le meta en el pulmón. Es exactamente el mismo movimiento que el hipo: contracción y cierre brusco. Los fetos humanos hipan dentro del útero desde la novena semana, mucho antes de respirar. Hay estudios que sostienen que ese ejercicio les entrena el diafragma y les enseña a coordinar la deglución.",
        destacado: { tipo: "cifra", cifra: "9", unidad: "semanas de feto y ya hipa" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un reflejo que no sirve para nada y que ningún medicamento cura del todo. Los remedios caseros son contener la respiración, beber del lado contrario del vaso o llevarse un susto. Funcionan a veces por el mismo motivo, porque casi todos suben el dióxido de carbono en la sangre o estimulan el nervio que va del cerebro al abdomen. Eso interrumpe el reflejo, aunque ninguno de los remedios está demostrado. El récord conocido lo tiene un estadounidense que estuvo con hipo sesenta y ocho años seguidos, desde 1922. Llegó a casarse dos veces y a tener ocho hijos sin que le parara.",
      },
    ],
  },

  {
    id: "huesos-oido",
    titulo: "Dos huesos que fueron mandíbula",
    gancho: "Los tres huesos más pequeños del cuerpo entran en una moneda de dos céntimos. Dos vienen de una quijada.",
    categoria: "Cuerpo",
    color: "var(--forest)",
    curioso: true,
    encargo: "Tres huesecillos diminutos sobre un paño oscuro, fotografiados muy de cerca.",
    entrada:
      "Dentro de cada oído hay tres huesos que son los más pequeños del cuerpo humano. Juntos pesan menos que un grano de arroz y el más pequeño mide tres milímetros. Se llaman martillo, yunque y estribo por la forma que tienen, y transmiten la vibración del tímpano hacia dentro del oído. Son además los únicos huesos que ya nacen con su tamaño definitivo.",
    paginas: [
      {
        rotulo: "La quijada",
        texto:
          "Dos de esos tres huesos no empezaron ahí. En los reptiles, la mandíbula inferior está formada por varias piezas, y dos ocupan la parte de atrás, junto al oído. Hace más de doscientos millones de años, en la línea que lleva a los mamíferos, esa mandíbula se fue simplificando hasta quedar en un solo hueso. Las dos piezas sobrantes se encogieron, se desprendieron y quedaron atrapadas dentro del oído medio, donde encontraron un oficio nuevo. Se conservan fósiles en los que la pieza aparece a medio camino, todavía unida a la mandíbula y ya orientada hacia el oído. Es una de las secuencias mejor documentadas del registro fósil.",
        destacado: { tipo: "frase", frase: "Dos piezas de una quijada quedaron atrapadas dentro del oído." },
      },
      {
        rotulo: "Para qué sirven",
        texto:
          "El motivo de que hagan falta tres es de física. El sonido llega por el aire, que es ligero, y tiene que pasar a un líquido. Ese líquido es el que llena el caracol del oído interno. Sin ayuda, casi toda la energía rebotaría en la frontera, igual que rebota una voz en la superficie de una piscina. La cadena de huesecillos hace de palanca y concentra la fuerza del tímpano en una ventana veinte veces más pequeña, multiplicando la presión lo suficiente para mover el líquido. Sin ellos oiríamos como debajo del agua.",
        destacado: { tipo: "cifra", cifra: "20x", unidad: "más pequeña es la ventana de salida" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Esa herencia explica de paso por qué los mamíferos oímos agudos que un reptil no percibe: los huesos sueltos y pequeños vibran mejor con frecuencias altas que una mandíbula entera. Y hay un músculo diminuto pegado al estribo, el más pequeño del cuerpo entero. Se contrae solo ante un ruido fuerte, para frenar la cadena de huesos y proteger el oído. Tarda unos cuarenta milisegundos en reaccionar, así que llega tarde ante un disparo o una explosión. Sirve contra el ruido continuo de una obra o de un motor, y no sirve absolutamente de nada contra lo que aparece de golpe.",
      },
    ],
  },

  {
    id: "huellas-dactilares",
    titulo: "Las huellas no dan agarre",
    gancho: "Se enseñó durante un siglo que daban agarre. Los experimentos dicen que reducen el contacto.",
    categoria: "Cuerpo",
    color: "var(--clay)",
    curioso: true,
    encargo: "Una yema de dedo iluminada de lado, con los surcos marcados por la sombra.",
    entrada:
      "Todo el mundo ha oído la explicación en el colegio: las huellas de los dedos existen para que las cosas no se nos resbalen, como los dibujos de un neumático. Es una idea razonable, se repite en los libros de texto desde hace más de cien años y, según los experimentos que se han hecho desde 2009, es probablemente falsa.",
    paginas: [
      {
        rotulo: "La medida",
        texto:
          "Un equipo británico midió la fricción real de un dedo humano contra una superficie de vidrio, variando la presión, y encontró lo contrario de lo esperado. La piel de la yema se comporta como una goma, y en una goma el rozamiento depende del área que toca. Los surcos, al ser valles, levantan parte de la piel y reducen el contacto en torno a un tercio respecto a una yema lisa. Es decir, agarraríamos mejor un vaso si tuviéramos las yemas completamente lisas. El experimento se repitió con distintos materiales y presiones y el resultado se sostuvo en todos.",
        destacado: { tipo: "cifra", cifra: "1/3", unidad: "menos superficie de contacto que una yema lisa" },
      },
      {
        rotulo: "Para qué son",
        texto:
          "Las explicaciones que se manejan ahora son otras dos, y no se excluyen. Una es el tacto fino. Los surcos amplifican la vibración cuando el dedo recorre una superficie, y esa vibración llega a unos receptores que están justo debajo. Las crestas funcionan como la aguja de un tocadiscos y permiten notar rugosidades de una milésima de milímetro. La otra explicación es el agua. Los canales que quedan entre los surcos evacuan el líquido de la superficie, igual que hace el dibujo de un neumático con la lluvia. Y eso sí mejora el agarre cuando la piel está mojada o sudada. Las dos ideas conviven y ninguna está cerrada del todo.",
        destacado: { tipo: "frase", frase: "Los surcos funcionan como la aguja de un tocadiscos." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El dibujo se forma entre la décima y la decimosexta semana de embarazo, cuando la piel del feto crece más rápido que la capa de debajo y se arruga. Depende de la presión del líquido, de la postura y de la nutrición, y por eso ni dos gemelos idénticos, con el mismo ADN, tienen la misma huella. No cambia en toda la vida salvo por una cicatriz profunda. Y existen unas pocas familias en el mundo con una mutación rarísima que hace nacer sin ninguna huella, con las yemas lisas. No pueden sacarse el pasaporte ni cruzar una frontera automática sin un informe médico.",
      },
    ],
  },
];
