import type { Short } from "../shorts";

/* ==========================================================================
   Esclavitud.

   El tema más fácil de estropear de todo el catálogo. Dos maneras de
   hacerlo mal: el horror por el horror, que satura y no enseña nada, y el
   resumen moral de tres frases, que tampoco.

   La regla del tema: se cuenta el PAPELEO. Las pólizas de seguro, las
   indemnizaciones, las apuestas entre señores, los plazos de una deuda.
   Fue durante siglos un negocio legal con contabilidad, y es esa
   contabilidad la que resulta insoportable de leer, mucho más que
   cualquier adjetivo.

   Ni se sermonea ni se adorna. Los hechos van solos y el lector saca sus
   conclusiones sin que nadie se las apunte.
   ========================================================================== */

export const ESCLAVITUD: Short[] = [
  {
    id: "haiti-indemnizacion",
    titulo: "Haití pagó por ser libre",
    gancho: "Ganó su independencia peleando, y luego indemnizó a sus antiguos dueños durante ciento veintidós años.",
    categoria: "Esclavitud",
    color: "var(--clay)",
    encargo: "Un campo de caña de azúcar al atardecer, con montañas al fondo.",
    fotos: [
      {
        archivo: "The Citadelle Laferrière, Haiti (7761638618).jpg",
        autor: "La Citadelle Laferrière, levantada en Haití tras la independencia. Fotografía de Alex Proimos, 2012.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:The_Citadelle_Laferri%C3%A8re,_Haiti_(7761638618).jpg",
        foco: "45% 45%",
        alt: "Una fortaleza de piedra en lo alto de un cerro boscoso, con la niebla subiendo por la ladera de la derecha.",
      },
      {
        archivo: "Portrait de Toussaint Louverture, à cheval1.jpg",
        autor: "Toussaint Louverture a caballo, grabado publicado en París hacia 1802.",
        licencia: "Dominio público",
        pdPorEdad: 1803,
        fuente: "https://commons.wikimedia.org/wiki/File:Portrait_de_Toussaint_Louverture,_%C3%A0_cheval1.jpg",
        foco: "50% 35%",
        alt: "Grabado de un militar con bicornio emplumado montado en un caballo blanco, señalando al frente con el brazo.",
      },
      {
        archivo: "Charles Edward Dixon Duguay Trouin 1789 HMS Implacable Battle of Cape Ortegal Trafalgar (cropped).jpg",
        autor: "Un navío de línea francés a toda vela, acuarela de Charles Edward Dixon.",
        licencia: "Dominio público",
        pdPorEdad: 1934,
        fuente: "https://commons.wikimedia.org/wiki/File:Charles_Edward_Dixon_Duguay_Trouin_1789_HMS_Implacable_Battle_of_Cape_Ortegal_Trafalgar_(cropped).jpg",
        foco: "50% 55%",
        alt: "Un barco de guerra de tres palos con las portas abiertas navegando sobre un mar verde y agitado.",
      },
      {
        archivo: "Palais du sans-soucis.JPG",
        autor: "Las ruinas del palacio de Sans-Souci, en Milot. Fotografía de Iconem, 2014.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Palais_du_sans-soucis.JPG",
        foco: "45% 45%",
        alt: "Un palacio sin techo con las ventanas vacías y la escalinata invadida de hierba, al pie de una montaña verde.",
      },
    ],
    entrada:
      "Caribe, 1791. La colonia francesa más rica del mundo, en la mitad occidental de una isla, produce buena parte del azúcar y del café que se consume en Europa, y lo hace con casi medio millón de personas esclavizadas frente a unos treinta mil colonos blancos. La proporción explica el miedo con el que se vivía allí y la dureza con la que se gobernaba. Aquel agosto estalla una revuelta en las plantaciones del norte que nadie consigue sofocar, y que acaba en una guerra larga contra Francia, contra Inglaterra y contra España a la vez. Trece años más tarde nace de allí un país nuevo.",
    paginas: [
      {
        rotulo: "La única",
        texto:
          "Fue la única rebelión de esclavos de la historia que terminó fundando un Estado. Los sublevados derrotaron una tras otra a las tropas francesas, a una expedición británica y a otra española, y en 1802 a un ejército de más de veinte mil hombres enviado desde Francia para reimplantar la esclavitud, aunque de aquellos soldados se llevó a buena parte la fiebre amarilla. La independencia se proclamó el 1 de enero de 1804. El país recuperó el nombre que le daban sus habitantes originarios, borrado tres siglos antes, y prohibió la esclavitud en su primera constitución.",
        destacado: { tipo: "frase", frase: "La única rebelión de esclavos que acabó fundando un país." },
      },
      {
        rotulo: "La factura",
        texto:
          "Ningún país quiso reconocerlo. En 1825, una escuadra francesa de catorce barcos de guerra se presentó frente a la capital con una exigencia por escrito: para levantar el bloqueo y aceptar la independencia, el Estado nuevo debía indemnizar a los antiguos propietarios por la pérdida de sus plantaciones y de sus esclavos. La cifra eran ciento cincuenta millones de francos, unas diez veces todo lo que el país ingresaba en un año. Para pagar el primer plazo hubo que pedir prestado a bancos franceses, con lo que la deuda se duplicó sola. Se terminó de pagar en 1947.",
        destacado: { tipo: "cifra", cifra: "122", unidad: "años pagando la indemnización" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Durante más de un siglo, una parte enorme de lo que recaudaba aquel país salió por la puerta en forma de intereses en lugar de ir a carreteras, escuelas u hospitales. Los estudios que han intentado ponerle número calculan decenas de miles de millones de euros de hoy. En 2003 el gobierno reclamó formalmente la devolución y no consiguió nada; en 2025, el presidente francés reconoció en público que aquella deuda había colocado al país en una situación injusta y anunció una comisión de historiadores, sin comprometer ninguna devolución. Se liberó peleando y estuvo pagando por ello hasta bien entrado el siglo XX.",
      },
    ],
  },

  {
    id: "zong-seguro",
    titulo: "El seguro de los ahogados",
    gancho: "El capitán echó al agua a ciento treinta y dos cautivos y sus dueños pidieron cobrar la póliza.",
    categoria: "Esclavitud",
    color: "var(--slate)",
    encargo: "Un mar oscuro y agitado bajo un cielo cargado, sin nada más.",
    fotos: [
      {
        archivo: "Een schip in volle zee bij vliegende storm, bekend als ‘De windstoot’ Rijksmuseum SK-A-1848.jpeg",
        autor: "«La ráfaga», óleo de Willem van de Velde el Joven, hacia 1680. Rijksmuseum, Ámsterdam.",
        licencia: "Public domain",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Een_schip_in_volle_zee_bij_vliegende_storm,_bekend_als_%E2%80%98De_windstoot%E2%80%99_Rijksmuseum_SK-A-1848.jpeg",
        pdPorEdad: 1707,
        foco: "50% 60%",
        alt: "Pintura de un velero escorado por el viento entre olas grandes, bajo un cielo de tormenta.",
      },
      {
        archivo: "Lloyd's Building - Adam Room chandelier.jpg",
        autor: "La Adam Room del edificio del Lloyd's de Londres, un comedor del siglo XVIII trasladado pieza a pieza. Fotografía de Colin.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Lloyd%27s_Building_-_Adam_Room_chandelier.jpg",
        foco: "50% 50%",
        alt: "Sala de reuniones de estilo dieciochesco con molduras claras y una lámpara de araña de cristal.",
      },
      {
        archivo: "Schepen in de storm Rijksmuseum SK-C-448.jpeg",
        autor: "«Barcos en la tormenta», óleo anónimo holandés de la primera mitad del siglo XVII. Rijksmuseum, Ámsterdam.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Schepen_in_de_storm_Rijksmuseum_SK-C-448.jpeg",
        pdPorEdad: 1652,
        foco: "50% 50%",
        alt: "Pintura apaisada de varios barcos de vela repartidos en un mar picado bajo nubes bajas.",
      },
      {
        archivo: "Lloyd's Building - Exterior Staircase.jpg",
        autor: "Escalera exterior del edificio del Lloyd's de Londres, el mercado de seguros marítimos. Fotografía de Colin.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Lloyd%27s_Building_-_Exterior_Staircase.jpg",
        foco: "50% 50%",
        alt: "Escalera de acero y cristal adosada por fuera a un edificio moderno de tubos metálicos.",
      },
    ],
    entrada:
      "Atlántico, noviembre de 1781. Un barco negrero británico se ha desviado de su rumbo camino de Jamaica, lleva navegando mucho más tiempo del previsto y empieza a escasear el agua potable. Van a bordo cuatrocientas cuarenta personas esclavizadas, más del doble de las que el barco puede llevar, y una tripulación de diecisiete hombres. La tripulación toma entonces una decisión, la ejecuta durante tres días seguidos y la anota con toda naturalidad en el diario de a bordo, porque no la considera un crimen sino una operación contable.",
    paginas: [
      {
        rotulo: "El cálculo",
        texto:
          "Durante tres días echaron al mar a ciento treinta y dos personas, atadas, en tandas sucesivas. El motivo no fue el pánico ni la desesperación: fue una cuenta. El seguro marítimo de la época no cubría a los cautivos que morían de enfermedad o de sed a bordo, porque eso se consideraba una pérdida natural de la mercancía; en cambio sí cubría la carga arrojada al agua deliberadamente para salvar el barco, lo que en derecho marítimo se llama echazón. Muerto de sed en la bodega, un cautivo no valía nada. Tirado por la borda, valía treinta libras.",
        destacado: { tipo: "cifra", cifra: "30", unidad: "libras se cobraban por cada uno" },
      },
      {
        rotulo: "El juicio",
        texto:
          "El barco llegó a puerto con más de mil litros de agua sobrantes en los toneles. Los armadores reclamaron el dinero, la aseguradora se negó a pagarlo y el asunto acabó en un tribunal de Londres en 1783, aunque no como un crimen: como un pleito comercial entre dos empresas por una indemnización. En ninguna de las sesiones se juzgó a nadie por aquellas muertes. Un hombre que había sido esclavizado y vivía entonces en Londres se enteró y avisó a un activista, y entre los dos llevaron el caso a los periódicos, que publicaron el cálculo tal como constaba en las actas.",
        destacado: { tipo: "frase", frase: "No se juzgó un crimen: se juzgó una reclamación de seguro." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La frialdad de aquellas cuentas hizo más por el movimiento contra la trata que años enteros de sermones. Cuatro años después se fundó en Londres la primera sociedad para abolirla, con este caso como argumento de cabecera; el Parlamento británico prohibió el comercio de esclavos en 1807 y la esclavitud en sus colonias en 1833. Nunca se procesó a nadie por lo ocurrido en aquel barco. La escena se pintó sesenta años más tarde en un cuadro enorme de tormenta y cuerpos en el agua, que hoy cuelga en un museo de Boston y que casi nadie asocia con una discusión sobre una póliza.",
      },
    ],
  },

  {
    id: "ultimo-barco-negrero",
    titulo: "El último barco, por una apuesta",
    gancho: "El comercio llevaba medio siglo prohibido y se castigaba con la horca. Un rico apostó a que podía.",
    categoria: "Esclavitud",
    color: "var(--plum)",
    encargo: "Las cuadernas quemadas de un barco de madera medio hundidas en el barro de un río.",
    entrada:
      "Alabama, en el sur de Estados Unidos, 1860. Traer personas esclavizadas desde África está prohibido en el país desde 1808 y se castiga con la pena de muerte. Un armador rico de la zona apuesta con unos conocidos, en una cena, a que puede hacerlo sin que lo pillen. Fleta una goleta rápida y la manda al otro lado del océano.",
    paginas: [
      {
        rotulo: "La travesía",
        texto:
          "Compró ciento diez personas en un puerto de la costa occidental de África, casi todas jóvenes y capturadas semanas antes en una guerra entre reinos vecinos, y cruzó el Atlántico en seis semanas con el pasaje escondido bajo cubierta. Al llegar de noche a la bahía trasladó a los cautivos a un vapor de río y prendió fuego a la goleta para hundirla y borrar la prueba. La apuesta estaba ganada. Nunca fue condenado por aquello: la guerra civil estalló al año siguiente, los tribunales se ocuparon de otras cosas y el caso se archivó sin que declarase nadie.",
        destacado: { tipo: "cifra", cifra: "1808", unidad: "llevaba prohibido más de cincuenta años" },
      },
      {
        rotulo: "El pueblo",
        texto:
          "Cinco años más tarde la esclavitud quedó abolida y aquellas personas se encontraron libres, sin nada y a nueve mil kilómetros de su casa. Pidieron que se les pagara el regreso y nadie se lo pagó, así que trabajaron en serrerías y en el campo, ahorraron y compraron terrenos a las afueras de la ciudad. Allí fundaron un pueblo con sus propios jefes, sus reglas y su idioma, que siguieron hablando entre ellos durante décadas. Una de las supervivientes vivió hasta 1937 y contó su historia a una escritora que la grabó en cine; la última murió en 1940.",
        destacado: { tipo: "frase", frase: "Fundaron un pueblo y siguieron hablando su idioma." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Durante siglo y medio hubo quien dudó de que el barco hubiera existido, porque los descendientes contaban una historia que ningún papel confirmaba y la goleta estaba quemada y hundida. En 2019 aparecieron los restos en el fango de un brazo del río, identificados por las medidas del casco y por la madera carbonizada, y en 2023 se confirmó que eran los de aquella goleta. El pueblo sigue habitado por descendientes de los que llegaron en ella. Es el único caso del que se conserva el rastro entero: el barco, el puerto de salida, los nombres y el sitio donde acabaron.",
      },
    ],
  },
];
