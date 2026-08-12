import type { Short } from "../shorts";

/* ==========================================================================
   Escuela.

   Todo el mundo ha pasado por una, así que el riesgo del tema es la
   nostalgia: el olor a tiza, el patio, la maestra. No aporta nada.

   La regla del tema: la escuela se cuenta por SUS REGLAS MATERIALES. Un
   examen que dura tres días dentro de una celda. Un calendario que se
   parte en verano por el calor de las ciudades. Una plancha de pizarra
   que permite hablarle a cuarenta a la vez. Las ideas pedagógicas cambian
   cada década; lo que de verdad manda es el mobiliario y el reglamento.

   Y si hay una explicación popular equivocada, se desmonta con datos.
   ========================================================================== */

export const ESCUELA: Short[] = [
  {
    id: "examenes-imperiales",
    titulo: "Un examen de tres días",
    gancho: "En una celda de poco más de un metro, con la comida, un orinal y una vela.",
    categoria: "Escuela",
    color: "var(--plum)",
    encargo: "Filas larguísimas de celdas de ladrillo idénticas y abiertas por delante.",
    fotos: [
      {
        archivo: "Turtle stelae (26431873708).jpg",
        autor: "Una de las ochenta y dos estelas del Templo de la Literatura de Hanói, con los nombres de quienes aprobaron el examen. Fotografía de Mig Gilbert.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Turtle_stelae_(26431873708).jpg",
        foco: "50% 45%",
        alt: "Una losa de piedra cubierta de caracteres grabados, apoyada sobre una tortuga de piedra, bajo un pórtico de madera.",
      },
      {
        archivo: "DGJ 1701 - Rub my head.. (3504631463).jpg",
        autor: "La fila de tortugas de piedra que sostienen las estelas, en el mismo templo de Hanói. Fotografía de Dennis G. Jarvis.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:DGJ_1701_-_Rub_my_head.._(3504631463).jpg",
        foco: "50% 50%",
        alt: "Varias estelas alineadas una detrás de otra, cada una sobre su tortuga, en un pabellón abierto.",
      },
      {
        archivo: "Chinese - Brush Pot with a Man - Walters 491988 - View B.jpg",
        autor: "Bote para pinceles chino de entre 1723 y 1730, con un hombre que sueña que llega a letrado. Walters Art Museum.",
        licencia: "Dominio público",
        pdPorEdad: 1800,
        fuente: "https://commons.wikimedia.org/wiki/File:Chinese_-_Brush_Pot_with_a_Man_-_Walters_491988_-_View_B.jpg",
        foco: "50% 45%",
        alt: "Un recipiente cilíndrico tallado en relieve con la figura de un hombre tumbado y su mesa de escribir.",
      },
      {
        archivo: "Hand Rubbing the Doctor's Stelae.jpg",
        autor: "Una mano frotando la cabeza de una de las tortugas, costumbre que se hace por suerte. Fotografía de Caitlin Childs.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Hand_Rubbing_the_Doctor's_Stelae.jpg",
        foco: "50% 50%",
        alt: "Una mano apoyada sobre la cabeza pulida y brillante de una tortuga de piedra.",
      },
    ],
    entrada:
      "China, siglo VII. El imperio empieza a seleccionar a sus funcionarios mediante un examen abierto a casi cualquier varón, sin importar de qué familia venga, de qué provincia llegue ni cuánto dinero tenga detrás. Es la primera vez en la historia que un puesto de poder se reparte por una prueba escrita y no por nacimiento, y la idea resulta entonces tan chocante como práctica: el imperio ha crecido, necesita administradores capaces por miles y las familias nobles no dan abasto para llenar los puestos. El sistema no fue un experimento pasajero, porque durará mil trescientos años y solo se suprimirá, ya agotado, en 1905.",
    paginas: [
      {
        rotulo: "La celda",
        texto:
          "Los aspirantes se presentaban en recintos enormes con miles de celdas idénticas alineadas en filas, de poco más de un metro de ancho, con dos tablones que servían de mesa de día y de cama de noche. Se entraba tras un registro minucioso y se pasaban dentro hasta tres días con sus noches, escribiendo ensayos sobre los libros clásicos con un pincel, sin salir para nada: la comida entraba por un hueco y había un orinal en el suelo. Si un candidato moría durante la prueba, cosa que ocurría, el cuerpo se sacaba por encima del muro.",
        destacado: { tipo: "cifra", cifra: "3", unidad: "días encerrado sin salir de la celda" },
      },
      {
        rotulo: "Las trampas",
        texto:
          "Copiar estaba castigado con penas durísimas y aun así se copiaba con una inventiva notable. Se conservan camisetas interiores de seda cubiertas por completo de caracteres diminutos, escritos con pinceles de un solo pelo, que se llevaban debajo de la ropa; también pinceles huecos con papeles enrollados dentro y hasta zapatillas con la suela falsa. Los vigilantes registraban las trenzas y las costuras, hacían cambiar de ropa a los candidatos en la puerta y, en algunas épocas, obligaban a copiar todos los ejercicios a mano para que ningún corrector reconociera una letra.",
        destacado: { tipo: "frase", frase: "Camisetas de seda escritas con pinceles de un solo pelo." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aprobar el nivel más alto lo conseguían unos cientos de personas en todo el imperio cada tres años, y garantizaba de por vida un puesto, una casa y el respeto de una comarca entera; había hombres que seguían presentándose a los setenta. El sistema se estudió con enorme interés en la Europa del siglo XVIII, y de ahí sale en línea bastante directa la idea moderna de oposición: una prueba escrita, anónima y con temario público para entrar a trabajar en el Estado. Aquellos recintos de celdas siguen en pie en alguna ciudad, convertidos en museo.",
      },
    ],
  },

  {
    id: "vacaciones-de-verano",
    titulo: "El verano no es agrícola",
    gancho: "En el campo se libraba en primavera y en otoño, que es cuando hay faena. El verano es cosa de ciudad.",
    categoria: "Escuela",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un aula vacía con las sillas sobre las mesas y la luz entrando muy fuerte.",
    fotos: [
      {
        archivo: "The one-room classroom inside the Octagonal Schoolhouse in Essex, NY.JPG",
        autor: "Aula única de la escuela octogonal de Essex, en el estado de Nueva York, conservada como estaba.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AThe%20one-room%20classroom%20inside%20the%20Octagonal%20Schoolhouse%20in%20Essex%2C%20NY.JPG",
        foco: "50% 58%",
        alt: "Aula vacía con pupitres de madera y hierro colado, una estufa en el centro y la luz entrando por las ventanas.",
      },
      {
        archivo: "Harvey One-Room School.jpg",
        autor: "Escuela rural de un aula construida en 1876 en el condado de Crawford, Ohio.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File%3AHarvey%20One-Room%20School.jpg",
        foco: "50% 50%",
        alt: "Escuela pequeña de ladrillo con dos ventanas altas y una puerta, sola en mitad del campo.",
      },
      {
        archivo: "Attlebury Schoolhouse, Stanford, NY.jpg",
        autor: "Escuela de Attlebury, en Stanford, Nueva York, de las que cerraban según la faena del campo.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AAttlebury%20Schoolhouse%2C%20Stanford%2C%20NY.jpg",
        foco: "50% 50%",
        alt: "Casita de madera blanca de una sola planta con ventanas grandes, junto a un camino de campo.",
      },
      {
        archivo: "Elgin Schoolhouse State Historic Site.jpg",
        autor: "Escuela de Elgin, en Nevada, que funcionó de 1922 a 1967 y hoy es sitio histórico.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AElgin%20Schoolhouse%20State%20Historic%20Site.jpg",
        foco: "50% 50%",
        alt: "Escuela de madera pintada de claro en un paisaje seco, con la campana sobre el tejado.",
      },
    ],
    entrada:
      "Estados Unidos, 1840. Las escuelas rurales y las urbanas funcionan con calendarios prácticamente opuestos, y ninguna de las dos se parece al que tenemos hoy. En el campo se dan clases en invierno y en pleno verano, y se cierra en primavera y en otoño, que es justo cuando hacen falta manos para sembrar y para recoger. En las ciudades, en cambio, se da clase casi todo el año, con hasta doscientos cincuenta días lectivos y vacaciones repartidas en trozos pequeños. Que los dos calendarios acabaran fundiéndose en uno solo no tuvo nada que ver con la cosecha.",
    paginas: [
      {
        rotulo: "El calor",
        texto:
          "El problema de las ciudades era el verano. Los edificios eran hornos sin ventilación, las epidemias de tifus y de cólera aparecían con el calor y las familias que podían permitírselo se marchaban al campo o a la costa durante semanas, de modo que las aulas de julio y agosto se quedaban medio vacías. Los médicos de la época sostenían además una teoría muy repetida: que estudiar demasiado recalentaba el cerebro de los niños y provocaba enfermedades nerviosas. Con ese argumento y con el calor real, las escuelas urbanas empezaron a cerrar los meses peores.",
        destacado: { tipo: "frase", frase: "Se creía que estudiar demasiado recalentaba el cerebro." },
      },
      {
        rotulo: "La unificación",
        texto:
          "A finales del siglo XIX se impuso la idea de que todos los niños del país debían recibir el mismo número de días de clase, y para unificar los dos calendarios había que quitarle días a alguien. Se eligió el verano, que ya estaba medio vacío en la ciudad y que en el campo era la temporada menos crítica, porque la siembra y la recolección caen fuera de esos meses. Se recortaron los días lectivos de las ciudades y se ampliaron los del campo hasta encontrarse en un punto intermedio, con un parón largo en los meses de más calor.",
        destacado: { tipo: "cifra", cifra: "250", unidad: "días de clase al año en las ciudades" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El calendario resultante se exportó a medio mundo junto con las escuelas públicas, incluidos países donde el verano no aprieta y países del hemisferio sur que lo copiaron con las fechas cambiadas. Hoy se discute mucho, porque los estudios encuentran que dos meses sin clase hacen perder parte de lo aprendido, sobre todo a los alumnos de familias que no pueden pagar campamentos ni actividades. Y el argumento que se oye siempre para mantenerlo, que viene de la cosecha, es justo el único que no tiene ninguna base: en la cosecha nunca se libró.",
      },
    ],
  },

  {
    id: "pizarra-de-aula",
    titulo: "La pizarra cambió la clase",
    gancho: "Antes, el maestro atendía de uno en uno. Con una pared negra pudo hablarle a cuarenta a la vez.",
    categoria: "Escuela",
    color: "var(--slate)",
    encargo: "Una pizarra negra grande con restos de tiza borrada en trazos circulares.",
    entrada:
      "Escocia, 1801. Un profesor de matemáticas cuelga en la pared de su aula una plancha grande de pizarra negra para escribir con tiza delante de toda la clase a la vez. Hasta ese momento cada alumno tenía su propia tablilla individual y el maestro iba pasando de pupitre en pupitre, corrigiendo y explicando de uno en uno.",
    paginas: [
      {
        rotulo: "De uno en uno",
        texto:
          "El sistema anterior era lento y caro. En una escuela con cuarenta niños de edades distintas, el maestro dedicaba unos minutos a cada uno mientras los demás repetían o esperaban, y el material era el punto débil: el papel resultaba carísimo y la tinta se derramaba, así que se escribía en tablillas de pizarra individuales que había que borrar constantemente, muchas veces con saliva y la manga. Con una superficie grande delante de todos, el maestro pudo explicar una vez para cuarenta, dibujar un problema y dejarlo escrito mientras la clase trabajaba.",
        destacado: { tipo: "frase", frase: "Explicar una vez para cuarenta, y no cuarenta veces." },
      },
      {
        rotulo: "La expansión",
        texto:
          "Se extendió a una velocidad enorme, primero por las academias militares, que necesitaban enseñar lo mismo a grupos grandes, y después por las escuelas de todo Occidente; a mediados del siglo XIX era raro encontrar un aula sin ella. Vino acompañada de un cambio de mobiliario: los pupitres dejaron de mirarse entre sí y se alinearon todos hacia la pared, que es la disposición que casi todos hemos conocido. La pizarra verde, más suave para la vista, llegó en los años sesenta, y la blanca de rotulador en los ochenta, sobre todo por el polvo de tiza.",
        destacado: { tipo: "cifra", cifra: "1801", unidad: "la primera pizarra colgada en un aula" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Sigue siendo el aparato más usado en la enseñanza de todo el mundo, por delante de cualquier pantalla, y es de los pocos que apenas ha cambiado en dos siglos. Los intentos de sustituirla han ido regular: las pizarras digitales interactivas se compraron por millones a partir del año 2000 y en muchos centros acabaron usándose como un proyector caro, porque exigían formación y se estropeaban. Lo que hizo aquella plancha negra no fue mejorar la clase, sino inventarla: sin ella, un maestro no da clase a un grupo, atiende a alumnos sueltos.",
      },
    ],
  },
];
