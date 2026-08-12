import type { Short } from "../shorts";

/* ==========================================================================
   Rayos X.

   El riesgo del tema es la física de la radiación: longitudes de onda,
   ionización, dosis en unidades que nadie maneja.

   La regla del tema: los rayos X se cuentan por LO QUE SE VE Y POR LO QUE
   CUESTA VERLO. Una mano con su anillo. Los huesos del pie dentro de un
   zapato nuevo. La metralla localizada antes de abrir a un herido. Y
   siempre, al lado, el precio que pagó quien estuvo delante del tubo sin
   saber lo que le hacía.

   La dosis se compara con algo cotidiano, nunca con una unidad técnica.
   ========================================================================== */

export const RAYOSX: Short[] = [
  {
    id: "mano-con-anillo",
    titulo: "La mano de su mujer",
    gancho: "Vio los huesos y el anillo de boda, y dijo que acababa de ver su propia muerte.",
    categoria: "Rayos X",
    color: "var(--slate)",
    encargo: "Una radiografía antigua de una mano con un anillo alrededor de un dedo.",
    fotos: [
      {
        archivo: "First medical X-ray by Wilhelm Röntgen of his wife Anna Bertha Ludwig's hand - 18951222.jpg",
        autor: "La primera radiografía médica de la historia: la mano de Anna Bertha Ludwig, hecha por Wilhelm Röntgen el 22 de diciembre de 1895.",
        licencia: "Dominio público",
        pdPorEdad: 1923,
        fuente: "https://commons.wikimedia.org/wiki/File:First_medical_X-ray_by_Wilhelm_R%C3%B6ntgen_of_his_wife_Anna_Bertha_Ludwig's_hand_-_18951222.jpg",
        foco: "50% 45%",
        alt: "Los huesos de una mano en gris claro sobre fondo negro, con un anillo destacando en un dedo.",
      },
      {
        archivo: "Wue RoentgenGedSt Geraet1912.JPG",
        autor: "Aparato de rayos X de 1912 conservado en el museo Röntgen de Wurzburgo. Fotografía de Kai Borgeest.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Wue_RoentgenGedSt_Geraet1912.JPG",
        foco: "50% 50%",
        alt: "Un armazón metálico con dos tubos de vidrio y bobinas, montado sobre una peana de madera.",
      },
      {
        archivo: "Podoscope par The Pedoscope Compagny 01.jpg",
        autor: "Un pedoscopio de rayos X, de los que había en las zapaterías para ver el pie dentro del zapato.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Podoscope_par_The_Pedoscope_Compagny_01.jpg",
        foco: "50% 40%",
        alt: "Un mueble de madera con forma de columna, con un hueco abajo para los pies y visores en la parte de arriba.",
      },
      {
        archivo: "Podoscope par The Pedoscope Compagny 03.jpg",
        autor: "El mismo aparato por dentro, con el tubo emisor debajo de la plataforma.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Podoscope_par_The_Pedoscope_Compagny_03.jpg",
        foco: "50% 50%",
        alt: "El interior de un mueble de zapatería con la maquinaria y los cables del emisor de rayos X a la vista.",
      },
    ],
    entrada:
      "Wurzburgo, en Alemania, noviembre de 1895. Un físico de cincuenta años trabaja a oscuras con un tubo de vacío cuidadosamente envuelto en cartón negro, y ve que una pantalla colocada al otro lado del laboratorio se ilumina sola cuando enciende el tubo. Algo está saliendo de ahí y atravesando el cartón, el aire y la mesa que hay en medio, sin que él pueda verlo ni explicarlo. Lo llama rayos equis, con la equis que en matemáticas señala lo que no se conoce, porque no tiene la menor idea de qué son ni de dónde salen. En siete semanas de trabajo encerrado en el laboratorio va a averiguar casi todo lo que se sabría de ellos durante años.",
    paginas: [
      {
        rotulo: "Siete semanas",
        texto:
          "Se encerró siete semanas en el laboratorio, comiendo y durmiendo allí, sin contárselo a nadie, y fue poniendo objetos entre el tubo y la pantalla para ver cuáles lo frenaban: papel, madera, un libro de mil páginas, láminas de distintos metales. Descubrió que casi todo se dejaba atravesar y que el plomo era la gran excepción. En una de las pruebas sostuvo un disco de plomo con la mano y vio en la pantalla la sombra de sus propios huesos. Llamó entonces a su mujer y le colocó la mano sobre una placa fotográfica quince minutos.",
        destacado: { tipo: "frase", frase: "Sostuvo un disco de plomo y vio sus propios huesos." },
      },
      {
        rotulo: "El anillo",
        texto:
          "La placa reveló la mano completa: los huesos oscuros, la carne como una niebla y el anillo de boda flotando alrededor de un dedo. Ella dijo que acababa de ver su propia muerte y se negó a volver al laboratorio. Él publicó el hallazgo el 28 de diciembre y en tres meses había radiografías funcionando en hospitales de medio mundo, porque el aparato se montaba con material corriente y no existía ninguna patente: se negó a registrarla, sosteniendo que aquello pertenecía a todos. Recibió el primer premio Nobel de Física en 1901.",
        destacado: { tipo: "cifra", cifra: "15", unidad: "minutos con la mano quieta" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La rapidez de la difusión tuvo su precio, porque nadie sabía todavía que aquella radiación era peligrosa: los primeros radiólogos se quemaron las manos, perdieron dedos y muchos murieron de cáncer, y en varios hospitales hay monumentos con sus nombres grabados. Se tardó unas dos décadas en generalizar los delantales de plomo y en acortar los tiempos de exposición. Hoy una radiografía dura milisegundos y la dosis es una fracción diminuta de aquella. Y sigue llamándose con la letra que aquel hombre eligió para decir que no sabía qué estaba mirando.",
      },
    ],
  },

  {
    id: "fluoroscopio-de-zapateria",
    titulo: "Rayos X en la zapatería",
    gancho: "Metías el pie y veías los huesos dentro del zapato. Estuvieron cuarenta años en las tiendas.",
    categoria: "Rayos X",
    color: "var(--clay)",
    curioso: true,
    encargo: "Un mueble de madera barnizada con tres mirillas arriba y un hueco abajo.",
    entrada:
      "Estados Unidos y Europa, 1927. Se pone de moda en las zapaterías un mueble de madera con tres mirillas y un hueco abajo para meter los pies. Dentro hay un tubo de rayos X funcionando: el cliente ve sus propios huesos dentro del zapato nuevo, y por las otras dos mirillas miran a la vez el vendedor y la madre.",
    paginas: [
      {
        rotulo: "El mueble",
        texto:
          "El argumento comercial era la precisión: en lugar de fiarse del tacto y de la palabra del cliente, el aparato enseñaba si los dedos iban apretados, sobre todo en zapatos infantiles, que eran el mercado principal del invento. Llegó a haber unos diez mil de estos muebles en las tiendas estadounidenses y varios miles en Europa. Los niños se subían a probar por gusto y los vendedores pasaban la jornada entera junto al aparato, en muchos casos con el tubo mal apantallado y sin ningún control de dosis, porque no existía normativa alguna.",
        destacado: { tipo: "cifra", cifra: "10.000", unidad: "aparatos en las zapaterías" },
      },
      {
        rotulo: "Las medidas",
        texto:
          "Las primeras mediciones serias llegaron en los años cuarenta y fueron alarmantes: una prueba de veinte segundos podía entregar al pie una dosis muy superior a la de una radiografía médica, y algunos aparatos disparaban radiación en todas direcciones por los laterales del mueble. Se documentaron quemaduras en clientes y daños graves en vendedoras que llevaban años trabajando junto a ellos, incluida una amputación. La comunidad médica empezó a pedir su retirada, aunque las asociaciones del sector del calzado defendieron el aparato durante bastante tiempo, alegando que la exposición era mínima y que el cliente lo pedía.",
        destacado: { tipo: "frase", frase: "Veinte segundos daban más dosis que una radiografía." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Se prohibieron en la mayoría de los países entre 1950 y 1970, y en algunos sitios más tarde: se documenta alguno todavía en funcionamiento a comienzos de los años ochenta. Quedan unas decenas de ejemplares en museos, con el tubo desmontado, y son de los objetos que más impresionan a los visitantes precisamente porque parecen inofensivos: un mueble bonito de madera barnizada con un rótulo. Es el caso que se cita siempre para explicar que una tecnología nueva se cuela en la vida diaria mucho antes de que nadie mida lo que hace.",
      },
    ],
  },

  {
    id: "ambulancias-radiologicas",
    titulo: "Ambulancias con rayos X",
    gancho: "Aprendió a conducir, sacó el carné y las llevó ella misma hasta el frente en 1914.",
    categoria: "Rayos X",
    color: "var(--plum)",
    encargo: "Una furgoneta antigua de carrocería alta aparcada en un camino embarrado.",
    entrada:
      "Francia, otoño de 1914. Empieza una guerra en la que los heridos llegan a los hospitales de campaña con metralla dentro y los cirujanos operan a ciegas, buscando los fragmentos a tientas. Los aparatos de rayos X existen desde hace veinte años, pero están en los hospitales de las ciudades, a cientos de kilómetros del frente.",
    paginas: [
      {
        rotulo: "Los coches",
        texto:
          "Una científica de cuarenta y siete años, ya famosa por sus trabajos sobre la radiactividad, decidió llevar los aparatos hasta los heridos en lugar de esperar a que los heridos llegaran a los aparatos. Consiguió que le donaran vehículos, los hizo equipar con un tubo de rayos X, una placa y una dinamo conectada al motor del coche para generar la corriente, y se sacó el carné de conducir para poder moverlos ella misma. Al final de la guerra funcionaban unas veinte unidades móviles y más de doscientas instalaciones fijas.",
        destacado: { tipo: "cifra", cifra: "20", unidad: "unidades móviles en el frente" },
      },
      {
        rotulo: "Las ayudantes",
        texto:
          "El problema siguiente era el personal, porque no había técnicos suficientes en todo el país. Organizó cursos rápidos y formó a unas ciento cincuenta mujeres para manejar los equipos, revelar las placas y colocar bien al herido, un trabajo que hasta entonces nadie consideraba propio de una enfermera. Su hija, con diecisiete años, trabajó también en el frente. Se calcula que más de un millón de heridos pasaron por aquellas máquinas durante la guerra, con la consecuencia práctica de que el cirujano sabía dónde estaba la metralla antes de abrir.",
        destacado: { tipo: "frase", frase: "Formó a ciento cincuenta mujeres en cursos rápidos." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "De aquella experiencia salió la radiología como servicio organizado dentro de los hospitales, con personal propio y con equipos portátiles, algo que hasta entonces se veía como una curiosidad de laboratorio. Ella no cobró nada por el trabajo y llegó a intentar donar sus medallas para fundirlas, cosa que el banco no aceptó. Murió en 1934 de una enfermedad de la sangre asociada a la exposición prolongada. Las unidades móviles siguieron usándose después en zonas rurales sin hospital, y de aquel apaño salió la costumbre de llevar la máquina al enfermo.",
      },
    ],
  },
];
