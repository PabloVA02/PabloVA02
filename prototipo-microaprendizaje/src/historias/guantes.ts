import type { Short } from "../shorts";

/* ==========================================================================
   Los guantes.

   Una segunda piel que siempre quita algo a cambio de lo que da. El tema
   se estropea si se cuenta como moda o como historia del vestido.

   La regla del tema: cada short plantea QUÉ PROTEGE Y QUÉ SACRIFICA ese
   guante (tacto, agilidad, conductividad eléctrica), porque ahí está toda
   la ingeniería. El defecto nunca es un fallo: es el precio pagado.
   ========================================================================== */

export const GUANTES: Short[] = [
  {
    id: "el-guante-del-quirofano",
    titulo: "El guante fue por amor",
    gancho: "Una enfermera tenía las manos destrozadas por el desinfectante. El cirujano encargó unos guantes de goma para ella.",
    categoria: "Medicina",
    color: "var(--slate)",
    encargo: "Par de guantes de goma finos sobre una mesa de instrumental quirúrgico antiguo.",
    fotos: [
      {
        archivo: "Rubber tree and latex cup.jpg",
        autor: "Un árbol del caucho sangrado, con el látex cayendo al cuenco: la materia prima de los primeros guantes. Fotografía de Wee Hong.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Rubber_tree_and_latex_cup.jpg",
        foco: "50% 55%",
        alt: "El tronco de un árbol con un corte en diagonal por el que baja un hilo blanco hasta un cuenco negro.",
      },
      {
        archivo: "Lister-type carbolic steam spray, England, 1869-1890 Wellcome L0058935.jpg",
        autor: "Pulverizador de vapor de ácido fénico, Inglaterra, 1869-1890: el desinfectante que destrozaba las manos. Wellcome Collection.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Lister-type_carbolic_steam_spray,_England,_1869-1890_Wellcome_L0058935.jpg",
        foco: "50% 50%",
        alt: "Un aparato de latón con caldera, tubos y boquilla, montado sobre un pie, fotografiado sobre fondo negro.",
      },
      {
        archivo: "Amputation set, comprising saw, three large knives, one fing Wellcome L0057731.jpg",
        autor: "Estuche de instrumental quirúrgico del siglo XIX, con sierra y cuchillos. Wellcome Collection.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Amputation_set,_comprising_saw,_three_large_knives,_one_fing_Wellcome_L0057731.jpg",
        foco: "50% 50%",
        alt: "Una caja forrada con instrumentos de acero encajados en huecos de terciopelo: una sierra y varios cuchillos.",
      },
      {
        archivo: "Metal carbolic steam spray, cased, Europe, 1872-1900 Wellcome L0057240.jpg",
        autor: "Otro pulverizador de ácido fénico, guardado en su caja de viaje. Wellcome Collection.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Metal_carbolic_steam_spray,_cased,_Europe,_1872-1900_Wellcome_L0057240.jpg",
        foco: "50% 50%",
        alt: "Un aparato metálico desmontado y colocado dentro de una caja con compartimentos forrados.",
      },
    ],
    entrada:
      "Estados Unidos, 1890. Los hospitales acaban de aceptar, después de décadas de discusión, que hay que desinfectarlo todo antes de operar, y para eso usan soluciones muy fuertes de ácido fénico y de sublimado corrosivo que efectivamente matan los microbios y de paso abrasan la piel de quien las maneja. La enfermera jefe de un quirófano tiene las manos llenas de eczemas, no se le curan nunca y está a punto de dejar el trabajo. El cirujano que dirige el servicio, que además está enamorado de ella, encarga a una fábrica de neumáticos unos guantes finos de goma hechos a su medida.",
    paginas: [
      {
        rotulo: "Proteger la mano",
        texto:
          "Aquellos guantes no se hicieron para proteger al paciente, sino para proteger las manos de quien trabajaba. La antisepsia de la época consistía en lavarse con una solución que mataba los microbios y también la piel. Los cirujanos tenían las manos agrietadas de manera permanente, y esas grietas eran a su vez un refugio de bacterias. El guante resolvió los dos problemas a la vez, aunque el segundo no se entendió hasta unos años después. Al principio se pusieron solo para las tareas sucias y se quitaban para operar, porque quitaban tacto. Un ayudante del mismo servicio fue el primero en usarlos durante la operación entera, y aquello acabó imponiéndose.",
        destacado: { tipo: "frase", frase: "Se inventaron para la piel del cirujano, no del paciente." },
      },
      {
        rotulo: "El talco",
        texto:
          "Un guante de goma se pega a sí mismo y cuesta muchísimo ponerlo con la mano húmeda. La solución durante casi un siglo fue espolvorearlos por dentro con polvo, primero de licopodio y después de almidón. Ese polvo se convirtió en un problema serio, porque flota en el aire del quirófano y cae dentro de la herida. El cuerpo reacciona formando adherencias, que son bridas de tejido que pegan órganos entre sí y causan dolor crónico. También transportaba proteínas del látex y multiplicaba las alergias del personal sanitario. Estados Unidos prohibió los guantes con polvo en 2016, y el resto de países fueron detrás.",
        destacado: { tipo: "cifra", cifra: "2016", unidad: "el año en que se prohibió el polvo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un objeto que se fabrica por cientos de miles de millones al año y que dura una sola vez. Quedó también el problema de la alergia al látex, que obligó a fabricar versiones de otros materiales sintéticos. Esos guantes de color azul o morado que se ven en todas partes son precisamente esa alternativa. El color no es casual, porque un guante claro no deja ver un pinchazo y uno oscuro sí. Y quedó el origen de todo, que no fue una idea médica brillante, sino unas manos estropeadas y alguien que se fijó.",
      },
    ],
  },
  {
    id: "el-guante-de-trabajo",
    titulo: "Cuatro números en el puño",
    gancho: "La etiqueta lleva cuatro números que casi nadie lee. Dicen cuánto aguanta frente a la lija, la cuchilla, el desgarro y la punta.",
    categoria: "Objetos",
    color: "var(--clay)",
    encargo: "Guante anticorte con el pictograma y los cuatro números impresos en el puño.",
    fotos: [
      {
        archivo: "Let the sparks fly (13313009905).jpg",
        autor: "Soldador trabajando con manoplas largas de cuero mientras saltan las chispas.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File%3ALet%20the%20sparks%20fly%20(13313009905).jpg",
        foco: "42% 60%",
        alt: "Operario agachado con careta de soldar y guantes largos de cuero, soldando un marco metálico entre chispas naranjas.",
      },
      {
        archivo: "Leather work gloves composite P1010224 copy.jpg",
        autor: "Dos pares de guantes de cuero de trabajo, gastados de distinta manera.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ALeather%20work%20gloves%20composite%20P1010224%20copy.jpg",
        foco: "38% 50%",
        alt: "Cuatro guantes de cuero amarillento puestos en fila al sol sobre un suelo de cemento.",
      },
      {
        archivo: "Folded kusuri armor.JPG",
        autor: "Malla de anillas de una armadura japonesa: el mismo principio de los guantes de cota metálica.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AFolded%20kusuri%20armor.JPG",
        foco: "50% 50%",
        alt: "Tejido de anillas metálicas pequeñas entrelazadas, plegado sobre sí mismo.",
      },
      {
        archivo: "Lathe Center Drilling.jpg",
        autor: "Torno en marcha: junto a una máquina que gira, los guantes son justo lo que no hay que llevar.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ALathe%20Center%20Drilling.jpg",
        foco: "50% 50%",
        alt: "Pieza metálica girando en un torno mientras una broca la taladra por el centro, con virutas alrededor.",
      },
    ],
    entrada:
      "Industria europea y estadounidense, con las normas actuales vigentes desde 1994. Un guante de trabajo no es una prenda, sino un equipo de protección homologado, y lleva impresa en el puño una etiqueta llena de números que casi nadie se para a leer. Esos números no son un adorno ni una referencia de fábrica: dicen cuánto aguanta ese guante concreto frente a cuatro peligros distintos, que son la abrasión, el corte, el desgarro y la perforación. Elegir el guante equivocado para la máquina equivocada significa perder un dedo.",
    paginas: [
      {
        rotulo: "Cuatro números",
        texto:
          "El pictograma del martillo que llevan estos guantes va acompañado de cuatro cifras en un orden fijo. La primera mide la abrasión y se comprueba frotando el material con papel de lija hasta agujerearlo. La segunda mide el corte con una cuchilla circular que gira sobre la tela hasta atravesarla. La tercera mide el desgarro tirando de un corte ya hecho, y la cuarta clava una punta metálica. Cada ensayo da una nota, y un guante puede sacar la máxima en corte y la mínima en abrasión. Por eso no existe el guante bueno, sino el guante adecuado para el peligro concreto de cada puesto.",
        destacado: { tipo: "frase", frase: "No existe el guante bueno: existe el guante adecuado." },
      },
      {
        rotulo: "Cortar sin cortar",
        texto:
          "Los guantes que resisten cuchillas no lo consiguen siendo gruesos, sino con fibras que la hoja no puede seccionar. La más conocida es una fibra de polietileno con las moléculas alineadas, que a igual peso supera al acero. Otras llevan hilos de vidrio o de acero muy fino trenzados dentro del tejido, invisibles desde fuera. La cuchilla resbala sobre esas fibras en vez de cortarlas, y el guante queda rayado y entero. Frente a una punta afilada no sirven, porque la punta se cuela entre los hilos sin cortar ninguno. Para eso hacen falta guantes de malla metálica, los mismos que llevan los carniceros en una sola mano.",
        destacado: { tipo: "cifra", cifra: "1994", unidad: "el año de la norma que puso los números" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una etiqueta que casi nadie mira y que decide si una mano acaba entera o en el hospital. Quedó también un problema de talla, porque un guante grande engancha en la máquina y uno pequeño se quita. Durante décadas se fabricaron con una sola horma masculina, y las mujeres trabajaban con guantes que les bailaban. Quedó una regla contraria a la intuición que enseñan en cualquier taller donde haya máquinas giratorias. Junto a un torno no se llevan guantes, porque si el guante se engancha se lleva la mano detrás.",
      },
    ],
  },
  {
    id: "el-guante-y-la-pantalla",
    titulo: "La pantalla no siente el guante",
    gancho: "No detecta presión ni calor. Detecta que un cuerpo conductor le está robando un poco de carga eléctrica.",
    categoria: "Tecnología",
    color: "var(--plum)",
    curioso: true,
    encargo: "Guante de lana con hilos plateados en la punta de los dedos sobre una pantalla encendida.",
    entrada:
      "Todo el mundo, con la pantalla capacitiva generalizada desde 2007. Cualquiera que haya intentado usar el móvil en invierno sabe que un guante normal no funciona. La explicación no tiene nada que ver con la presión ni con el calor de la mano. La pantalla no nota que la tocan: nota que alguien le está robando un poco de electricidad.",
    paginas: [
      {
        rotulo: "Robar carga",
        texto:
          "Bajo el cristal del móvil hay una rejilla de hilos transparentes que forman miles de cruces. En cada cruce se guarda una cantidad minúscula de carga eléctrica, siempre la misma mientras nadie toque. El cuerpo humano es en buena parte agua con sales, así que conduce la electricidad bastante bien. Al acercar un dedo, parte de esa carga se desvía hacia él y el valor del cruce baja. El aparato mide todos los cruces muchas veces por segundo y localiza dónde ha bajado el valor. Por eso funciona sin apretar, y por eso funciona igual con la punta de la nariz.",
        destacado: { tipo: "frase", frase: "El dedo no aprieta: le roba carga a la pantalla." },
      },
      {
        rotulo: "El hilo conductor",
        texto:
          "La lana, el algodón y el cuero son aislantes, de modo que cortan por completo ese camino. La solución comercial fue tejer en la punta de los dedos unos hilos con metal, casi siempre plata. Esos hilos conectan la piel con el exterior y devuelven al dedo su capacidad de robar carga. Funcionan peor que la piel desnuda porque la superficie de contacto es menor y menos húmeda. El mismo motivo explica que la pantalla falle con las manos mojadas, ya que el agua conduce y confunde la medida. Y explica el truco de urgencia que funciona de verdad, que consiste en mojar un poco el dedo del guante.",
        destacado: { tipo: "cifra", cifra: "2007", unidad: "el año de la pantalla capacitiva de bolsillo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un accesorio que no existía hace veinte años y que hoy se vende en cualquier sitio. Quedaron también problemas nuevos en oficios que trabajan con guante y con pantalla a la vez. Un sanitario con guante estéril o un operario con guante anticorte no pueden tocarse la pantalla sin quitárselo. Los fabricantes han respondido con pantallas más sensibles, capaces de notar el dedo a través de un guante fino. Y quedó el resumen de este tema entero, porque un guante siempre quita algo a cambio de lo que da, y da igual que sea tacto, agilidad o una señal eléctrica.",
      },
    ],
  },
];
