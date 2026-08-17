import type { Short } from "../shorts";

/* ==========================================================================
   Pasaportes y fronteras.

   El riesgo del tema es la abstracción política: soberanía, movilidad,
   derechos. Palabras grandes que no se ven ni se tocan.

   La regla del tema: una frontera se cuenta a través de UN PAPEL CONCRETO
   y de quién se queda sin él. Un librito de treinta y dos páginas fijado
   en una conferencia. Un documento que no emite ningún país. Un hombre
   que no puede entrar ni salir de una terminal. El sistema entero se
   apoya en un impreso, y eso se ve cuando alguien lo pierde.

   Y siempre se dice cómo se viajaba antes, que es lo que sorprende.
   ========================================================================== */

export const PASAPORTES: Short[] = [
  {
    id: "pasaporte-1914",
    titulo: "Viajar sin papeles se acabó",
    gancho: "Se cruzaba media Europa sin enseñar nada. La guerra puso el control y ya no se quitó.",
    categoria: "Pasaportes",
    color: "var(--slate)",
    encargo: "Un pasaporte antiguo abierto con una fotografía pegada y sellos de tinta.",
    fotos: [
      {
        archivo: "Gare Du Nord Interior, Paris, France - Diliff.jpg",
        autor: "La Gare du Nord de París bajo su bóveda de hierro. Fotografía de David Iliff.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Gare_Du_Nord_Interior,_Paris,_France_-_Diliff.jpg",
        foco: "50% 55%",
        alt: "El interior de una estación enorme con columnas de hierro, andenes iluminados y trenes esperando.",
      },
      {
        archivo: "An Advanced Post, Day Art.IWMART1157.jpg",
        autor: "«Un puesto avanzado, de día», óleo de John Nash, 1918. Imperial War Museum.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:An_Advanced_Post,_Day_Art.IWMART1157.jpg",
        foco: "50% 40%",
        alt: "Soldados con capote color mostaza apretados en una trinchera, con los fusiles apoyados y los ojos cerrados.",
      },
      {
        archivo: "Hall of Mirrors, Versailles (4304198440).jpg",
        autor: "La galería de los Espejos de Versalles, vacía, en una fotografía de archivo.",
        licencia: "No restrictions",
        fuente: "https://commons.wikimedia.org/wiki/File:Hall_of_Mirrors,_Versailles_(4304198440).jpg",
        foco: "50% 50%",
        alt: "Una galería larguísima con arcos, espejos y ventanales, sin nadie dentro, en tonos sepia.",
      },
      {
        archivo: "Pasová kontrola, Letiště Burgas.jpg",
        autor: "Cola de control de pasaportes en el aeropuerto de Burgas. Fotografía de Ondřej Žváček, 2019.",
        licencia: "CC BY 2.5",
        fuente: "https://commons.wikimedia.org/wiki/File:Pasov%C3%A1_kontrola,_Leti%C5%A1t%C4%9B_Burgas.jpg",
        foco: "50% 60%",
        alt: "Una multitud apretada esperando de pie delante de las cabinas de control de pasaportes de un aeropuerto.",
      },
    ],
    entrada:
      "Europa, 1914. Un ciudadano corriente puede comprar un billete, coger un tren en París, bajarse en Berlín, seguir hasta Moscú y volver a casa sin enseñar un solo documento en ninguna frontera del camino. Los pasaportes existen, pero son otra cosa: cartas de recomendación de un gobierno a otro, voluntarias, que se piden si uno quiere y que no hacen falta para nada. Hay quien viaja toda su vida sin haber tenido uno en la mano. Ese verano estalla la guerra, y en cuestión de semanas los países empiezan a exigir papeles en las estaciones y en los puertos.",
    paginas: [
      {
        rotulo: "Los espías",
        texto:
          "El motivo del cambio fue el miedo al espionaje. Los gobiernos empezaron a exigir un documento con fotografía y descripción física para controlar quién entraba y quién salía, y de paso para impedir que los hombres en edad militar se escaparan del país. Las descripciones eran minuciosas y a veces humillantes: forma de la nariz, color de los ojos, marcas particulares y la altura en centímetros, todo escrito a mano por un funcionario que miraba al solicitante mientras rellenaba la casilla. Las fotografías tampoco estaban reguladas y cada uno se retrataba como quería.",
        destacado: { tipo: "frase", frase: "Anotaban a mano la forma de la nariz y las marcas del cuerpo." },
      },
      {
        rotulo: "La conferencia",
        texto:
          "Al acabar la guerra se dio por hecho que aquello era una medida temporal, y no lo fue. En 1920, una conferencia internacional celebrada en Francia acordó un modelo común: librito de treinta y dos páginas, tapa dura, fotografía pegada, datos en francés y en el idioma del país, y validez de dos años. Se fijaron también las medidas exactas, que siguen siendo prácticamente las mismas de hoy porque están pensadas para caber en el bolsillo interior de una chaqueta. De aquel acuerdo salen el formato, la foto obligatoria y la costumbre de sellar.",
        destacado: { tipo: "cifra", cifra: "32", unidad: "páginas fijadas en 1920" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Lo que empezó como una medida de guerra se convirtió en el sistema normal del mundo, y hoy no se puede cruzar una frontera sin él salvo dentro de unos pocos acuerdos regionales. Los colores se han reducido a cuatro, por razones de imprenta y de tradición, y desde 2006 casi todos llevan un chip con datos biométricos dentro de la tapa. Aquel viaje de París a Moscú sin enseñar nada, que era lo normal en 1913, hoy suena a privilegio raro, y fue la situación habitual durante casi todo el siglo XIX.",
      },
    ],
  },

  {
    id: "pasaporte-para-apatridas",
    titulo: "Un pasaporte sin país",
    gancho: "Cuatrocientas cincuenta mil personas sin Estado viajaron con un documento que no era de nadie.",
    categoria: "Pasaportes",
    color: "var(--ochre)",
    encargo: "Un documento de viaje antiguo con un sello circular grande en la portada.",
    fotos: [
      {
        archivo: "No-nb bldsa q3c040.jpg",
        autor: "Dos tripulantes leen los barómetros a bordo del Fram durante la expedición ártica de Nansen, 1893-1896.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:No-nb_bldsa_q3c040.jpg",
        pdPorEdad: 1930,
        foco: "50% 50%",
        alt: "Fotografía antigua en blanco y negro de dos hombres anotando medidas junto a unos instrumentos colgados en el camarote de un barco.",
      },
      {
        archivo: "No-nb bldsa 3c189.jpg",
        autor: "Velada musical a bordo del Fram: Fridtjof Nansen al órgano durante los años atrapados en el hielo.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:No-nb_bldsa_3c189.jpg",
        pdPorEdad: 1930,
        foco: "50% 50%",
        alt: "Fotografía antigua en blanco y negro de varios hombres reunidos alrededor de un órgano en el interior de un barco.",
      },
      {
        archivo: "Palace of Nations Geneva 20102014 02.jpg",
        autor: "Palacio de las Naciones de Ginebra, sede de la organización internacional que emitió el documento.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Palace_of_Nations_Geneva_20102014_02.jpg",
        foco: "50% 50%",
        alt: "Fachada larga de un palacio de piedra clara con columnas, vista desde el jardín.",
      },
      {
        archivo: "Palais des Nations Unies Genève.jpg",
        autor: "El Palacio de las Naciones visto desde el parque, en Ginebra.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Palais_des_Nations_Unies_Gen%C3%A8ve.jpg",
        foco: "50% 50%",
        alt: "Edificio institucional de piedra clara con banderas delante y césped en primer plano.",
      },
    ],
    entrada:
      "Ginebra, 1922. Después de la guerra y de varias revoluciones hay en Europa cientos de miles de personas a las que su país ya no reconoce: refugiados rusos, armenios y de otros lugares que no tienen documento válido y que, por tanto, no pueden cruzar ninguna frontera legalmente ni trabajar en ningún sitio ni casarse ni cobrar un sueldo. Existen, pero administrativamente no están en ninguna parte. Un explorador noruego, más conocido hasta entonces por haberse dejado atrapar en el hielo del Ártico, propone entonces algo que hasta ese momento no se le había ocurrido a nadie.",
    paginas: [
      {
        rotulo: "El explorador",
        texto:
          "El hombre que lo propuso era un personaje improbable para un despacho: había cruzado el interior de Groenlandia esquiando y había pasado tres años atrapado a propósito en el hielo del Ártico, con un barco diseñado para que la presión lo levantara en vez de aplastarlo. Terminada la guerra le encargaron organizar el intercambio de prisioneros y se topó con el problema de la gente sin papeles. Su idea fue sencilla: un documento emitido por la organización internacional, no por un Estado, que los países aceptaran voluntariamente como identificación válida para cruzar una frontera y para firmar un contrato de trabajo.",
        destacado: { tipo: "frase", frase: "Un documento de viaje que no emitía ningún país." },
      },
      {
        rotulo: "El sello",
        texto:
          "Lo aceptaron cincuenta y dos países, y el documento sirvió a unas cuatrocientas cincuenta mil personas a lo largo de dos décadas. No daba nacionalidad ni derecho a volver a ninguna parte, pero permitía moverse y trabajar, y para mucha gente fue la diferencia entre existir administrativamente o no existir en absoluto. Lo llevaron una bailarina famosa, un compositor y un ajedrecista campeón del mundo, entre miles de personas anónimas. Su promotor recibió el premio Nobel de la Paz en 1922 y destinó el dinero a los mismos programas de ayuda.",
        destacado: { tipo: "cifra", cifra: "450.000", unidad: "personas viajaron con aquel papel" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquel invento es el antepasado directo del sistema actual de protección de refugiados: la figura del apátrida, la oficina internacional que se ocupa de ellos y el documento de viaje que hoy expiden varios países siguen exactamente la misma lógica. Se calcula que en el mundo hay todavía varios millones de personas sin nacionalidad reconocida, muchas de ellas nacidas ya en esa situación. El documento dejó de emitirse en 1942, y la medalla de aquel premio se subastó décadas más tarde para financiar, otra vez, programas de ayuda a refugiados.",
      },
    ],
  },

  {
    id: "hombre-del-aeropuerto",
    titulo: "Dieciocho años de escala",
    gancho: "Se quedó sin papeles en un aeropuerto y no podía entrar en el país ni salir de la zona de tránsito.",
    categoria: "Pasaportes",
    color: "var(--plum)",
    curioso: true,
    encargo: "Un banco rojo de plástico en una terminal vacía con maletas y cajas alrededor.",
    entrada:
      "París, 1988. Un hombre llega al aeropuerto principal de la ciudad procedente de Londres, donde lo han devuelto por viajar sin documentación encima. Dice que le robaron los papeles en una estación de tren y no puede demostrar lo contrario. Sin pasaporte no puede entrar en Francia, porque la policía de fronteras no le deja pasar, y sin pasaporte tampoco puede subirse a ningún avión que lo saque de allí. Así que se queda en la zona de tránsito de la terminal uno, que no es exactamente ningún país. Y allí se queda dieciocho años.",
    paginas: [
      {
        rotulo: "El bucle",
        texto:
          "El problema era administrativo y no tenía salida por ninguna parte. Para expedirle documentos nuevos hacía falta acreditar su identidad, y los certificados que podían acreditarla estaban en el país del que había salido años antes y al que no quería volver bajo ningún concepto. Francia no podía admitirlo porque había entrado sin papeles, y tampoco podía expulsarlo porque no existía ningún país obligado a recibirlo. Así que se instaló en un banco rojo de plástico junto a una tienda de la planta baja, con sus maletas y sus cajas alrededor, y allí se quedó un día tras otro.",
        destacado: { tipo: "frase", frase: "No podían dejarle entrar y tampoco podían echarlo." },
      },
      {
        rotulo: "La rutina",
        texto:
          "Se organizó una vida entera dentro. Desayunaba en el mismo restaurante, se aseaba de madrugada en los lavabos cuando no había nadie, lavaba la ropa en el lavabo y la tendía, leía revistas y escribía un diario larguísimo en cuadernos que iba amontonando. Los empleados del aeropuerto le llevaban comida y periódicos, un médico de la terminal lo revisaba de vez en cuando y los pasajeros que lo reconocían le hacían fotos. En 1999 le concedieron por fin papeles franceses, y para entonces llevaba once años allí y decidió no firmarlos.",
        destacado: { tipo: "cifra", cifra: "18", unidad: "años dentro de la terminal" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Salió en 2006 por motivos de salud y pasó los años siguientes en residencias de acogida. Su historia inspiró varias películas y le reportó algún dinero por los derechos, que acabó gastándose. En 2022 volvió por su cuenta al mismo aeropuerto y murió allí de un infarto pocas semanas después, en la misma terminal donde había vivido casi dos décadas. El caso se estudia en derecho como el ejemplo extremo de lo que pasa cuando un sistema entero de fronteras se apoya en un papel y alguien se queda sin él.",
      },
    ],
  },
];
