import type { Short } from "../shorts";

/* ==========================================================================
   Periódicos.

   El riesgo del tema es la queja gremial: la crisis de la prensa, los
   bulos, los tiempos que corren. Opinión conocida y sin datos.

   La regla del tema: un periódico se cuenta por SU PRISA Y SU MÁQUINA. La
   hora de cierre, la velocidad de composición, el coste del ejemplar y lo
   que hay que hacer para llenar la portada mañana. Casi todos los grandes
   errores y todos los grandes cambios del oficio salen de ahí.

   Y cuando algo se hizo mal, se cuenta el mecanismo exacto del fallo,
   no la moraleja.
   ========================================================================== */

export const PERIODICOS: Short[] = [
  {
    id: "bulo-de-la-luna",
    titulo: "Vida en la Luna, en portada",
    gancho: "En 1835 publicó seis entregas sobre la vida en la Luna y se convirtió en el diario más vendido.",
    categoria: "Periódicos",
    color: "var(--plum)",
    curioso: true,
    encargo: "Un grabado antiguo de criaturas aladas en un paisaje lunar con árboles.",
    fotos: [
      {
        archivo: "Lunar animals and other objects Discovered by Sir John Herschel in his observatory at the Cape of Good Hope and copied from sketches in the Edinburgh Journal of Science. LCCN2003665049.jpg",
        autor: "«Animales lunares y otros objetos», litografía publicada por Benjamin Day en 1835 para acompañar la serie.",
        licencia: "Dominio público",
        pdPorEdad: 1889,
        fuente: "https://commons.wikimedia.org/wiki/File:Lunar_animals_and_other_objects_Discovered_by_Sir_John_Herschel_in_his_observatory_at_the_Cape_of_Good_Hope_and_copied_from_sketches_in_the_Edinburgh_Journal_of_Science._LCCN2003665049.jpg",
        foco: "50% 40%",
        alt: "Litografía de hombres con alas de murciélago volando sobre un valle con cascadas, unicornios y palmeras.",
      },
      {
        archivo: "Dearborn Telescope with open dome.jpg",
        autor: "Un telescopio refractor bajo la cúpula abierta, iluminado de rojo para no estropear la vista. Fotografía de Jackricono.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Dearborn_Telescope_with_open_dome.jpg",
        foco: "45% 55%",
        alt: "El tubo de un telescopio antiguo apuntando por la rendija de una cúpula, con estrellas en el cielo oscuro.",
      },
      {
        archivo: "February 23rd 1908 Boys Selling Newspapers on Brooklyn Bridge.jpg",
        autor: "Vendedores de periódicos en Nueva York. Fotografía de Lewis Hine, 1908.",
        licencia: "Dominio público",
        pdPorEdad: 1940,
        fuente: "https://commons.wikimedia.org/wiki/File:February_23rd_1908_Boys_Selling_Newspapers_on_Brooklyn_Bridge.jpg",
        foco: "50% 55%",
        alt: "Un grupo de chicos con gorra cargando fajos de periódicos delante del escaparate de una cafetería.",
      },
      {
        archivo: "Full disc of moon photographed by Apollo 17 crewmen during transearth coast (as17-152-23311).jpg",
        autor: "La Luna fotografiada desde el Apolo 17 en el viaje de vuelta, 1972. NASA.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Full_disc_of_moon_photographed_by_Apollo_17_crewmen_during_transearth_coast_(as17-152-23311).jpg",
        foco: "50% 45%",
        alt: "El disco entero de la Luna sobre fondo negro, con los mares oscuros y los cráteres del borde a contraluz.",
      },
    ],
    entrada:
      "Nueva York, agosto de 1835. Un periódico barato de los que se venden por un centavo en la calle publica en portada la primera de seis entregas en las que asegura, con toda seriedad y con firma, que un astrónomo famosísimo ha descubierto vida en la Luna gracias a un telescopio nuevo instalado en el cabo de Buena Esperanza. A lo largo de la semana va describiendo bosques y playas, manadas de bisontes, cabras de un solo cuerno, castores que caminan de pie y hombres alados con cara de murciélago que se sientan a conversar entre ellos junto a un río.",
    paginas: [
      {
        rotulo: "El detalle",
        texto:
          "El texto estaba escrito con una minuciosidad convincente: citaba una revista científica escocesa real, aunque llevaba años sin publicarse, daba especificaciones técnicas del telescopio, describía el método óptico empleado y aparecía firmado como si fuera el ayudante del astrónomo. Los artículos salían por entregas y cada día añadían criaturas nuevas, hasta llegar a una civilización con templos de zafiro. Otros periódicos reprodujeron la noticia sin comprobar nada, en parte porque el astrónomo mencionado estaba realmente en Sudáfrica observando el cielo con un telescopio nuevo, y no había manera humana de preguntarle nada en menos de tres meses.",
        destacado: { tipo: "frase", frase: "Citaba una revista científica real que llevaba años cerrada." },
      },
      {
        rotulo: "La tirada",
        texto:
          "El periódico multiplicó sus ventas y se convirtió en el diario de mayor tirada del mundo en aquel momento, que era exactamente el objetivo perseguido. Formaba parte de una generación nueva de periódicos que se vendían por un centavo en la calle, en lugar de por suscripción anual a los ricos, y que vivían de la venta diaria y de la publicidad, así que necesitaban un titular potente cada mañana. Cuando el engaño quedó claro, semanas después, no hubo apenas escándalo: el director dijo que había sido una sátira y las ventas se mantuvieron.",
        destacado: { tipo: "cifra", cifra: "6", unidad: "entregas y la mayor tirada del mundo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El astrónomo real se enteró al volver de África y no le hizo ninguna gracia, porque durante años tuvo que aclarar por carta que él no había visto ningún hombre murciélago. El episodio se estudia como el primer bulo periodístico de masas de la era moderna, con todos los ingredientes que siguen funcionando hoy: una fuente prestigiosa citada de lejos, detalles técnicos abundantes, entregas que enganchan y una comprobación que llega tarde. De entonces a hoy han cambiado el papel y el centavo por una pantalla y un enlace, y poco más en el mecanismo de fondo.",
      },
    ],
  },

  {
    id: "titular-equivocado",
    titulo: "El ganador equivocado",
    gancho: "El titular se imprimió antes de contar los votos, y el presidente electo posó sonriendo con él.",
    categoria: "Periódicos",
    color: "var(--slate)",
    encargo: "Un periódico doblado sostenido en alto con un titular enorme a toda página.",
    fotos: [
      {
        archivo: "Apprentice linotype operator at Queensland Times, Ipswich, 1975 (34583024235).jpg",
        autor: "Un aprendiz de linotipista componiendo texto en el Queensland Times, en 1975. Archivos del Estado de Queensland.",
        licencia: "CC0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Apprentice_linotype_operator_at_Queensland_Times,_Ipswich,_1975_(34583024235).jpg",
        foco: "50% 50%",
        alt: "Fotografía en blanco y negro de un joven tecleando en la consola de una linotipia llena de engranajes.",
      },
      {
        archivo: "Linotype 2503-0230.jpg",
        autor: "Linotipia en funcionamiento en el Museo de la Industria de Gante, Bélgica.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Linotype_2503-0230.jpg",
        foco: "40% 45%",
        alt: "Máquina de componer de metal negro con brazos y engranajes, manejada por un operario sentado.",
      },
      {
        archivo: "Linotype typesetting machine (45618071855).jpg",
        autor: "El mecanismo que devuelve cada matriz de letra a su cajetín en una linotipia de 1892. Fotografía de Richard Ash.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Linotype_typesetting_machine_(45618071855).jpg",
        foco: "50% 50%",
        alt: "Detalle del mecanismo interior de una linotipia, con raíles y matrices metálicas alineadas.",
      },
      {
        archivo: "Type furniture.jpg",
        autor: "Cajas de madera con las piezas que sujetan los tipos dentro de la rama de imprenta. Museo del Escritor, Edimburgo.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Type_furniture.jpg",
        foco: "50% 50%",
        alt: "Cajas de madera abiertas llenas de listones y piezas de plomo de imprenta ordenados por tamaño.",
      },
    ],
    entrada:
      "Estados Unidos, noviembre de 1948. Un diario de Chicago tiene que cerrar su primera edición antes de que se conozcan los resultados de las elecciones presidenciales: hay una huelga de tipógrafos, la composición va lentísima y eso obliga a adelantar la impresión varias horas. El periódico se fía entonces de lo único que tiene, las encuestas, que llevan meses dando una ventaja aplastante a uno de los dos candidatos y que ningún analista discute. Y titula a toda página, con las letras más grandes que tiene en la caja, que ese candidato ha ganado.",
    paginas: [
      {
        rotulo: "La huelga",
        texto:
          "El periódico llevaba meses trabajando con un sistema de impresión distinto por culpa del conflicto laboral, bastante más lento, lo que le obligaba a cerrar mucho antes que de costumbre. El corresponsal en la capital, con el escrutinio empezado y sin datos claros, confirmó por teléfono el titular basándose en lo que decían las encuestas y los analistas, que llevaban meses coincidiendo. Se imprimieron unos ciento cincuenta mil ejemplares con el nombre equivocado en letras enormes. A media noche empezaron a llegar resultados que no encajaban con nada, y a las pocas horas el diario intentó retirar de la calle los ejemplares ya vendidos.",
        destacado: { tipo: "cifra", cifra: "150.000", unidad: "ejemplares con el titular falso" },
      },
      {
        rotulo: "La foto",
        texto:
          "El presidente reelegido, que había hecho una campaña de pueblo en pueblo mientras los encuestadores lo daban por perdido, se enteró dos días después en una estación de tren. Alguien le pasó un ejemplar y él lo levantó delante de los fotógrafos con una sonrisa enorme. Esa imagen dio la vuelta al mundo y sigue siendo una de las fotografías políticas más reproducidas de la historia. El fallo de las encuestas tuvo su explicación técnica: habían dejado de preguntar tres semanas antes de la votación y usaban un método de selección sesgado.",
        destacado: { tipo: "frase", frase: "Levantó el periódico delante de los fotógrafos, sonriendo." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El episodio cambió el oficio de encuestar: se empezó a medir hasta el último día, se revisaron los métodos de selección de la muestra y se generalizó la costumbre de publicar el margen de error, que antes no aparecía en ninguna parte. También cambió algo en las redacciones, que desde entonces preparan dos portadas y esperan. Aun así vuelve a pasar cada pocos años en alguna elección del mundo, y siempre se recuerda aquella fotografía. Un periódico que quiso adelantarse unas pocas horas se quedó para siempre como el ejemplo de por qué no conviene hacerlo.",
      },
    ],
  },

  {
    id: "maquina-de-lineas",
    titulo: "Adiós al plomo",
    gancho: "Antes, un hombre colocaba las letras a mano una por una. Un diario grande empleaba a cientos.",
    categoria: "Periódicos",
    color: "var(--ochre)",
    encargo: "Una máquina de componer con teclado y crisol, llena de engranajes y matrices de latón.",
    entrada:
      "Nueva York, 1886. Se instala en la redacción de un diario de la ciudad una máquina que funde líneas enteras de texto en plomo a partir de un teclado, delante de los periodistas que han bajado a verla. Hasta ese momento, componer una página de periódico consiste en ir cogiendo letras de plomo de una caja, una por una y con la mano, y colocarlas al revés en una regleta. Un operario bueno, con años de oficio, hace unas mil quinientas letras por hora. Con la máquina nueva, uno solo hacía el trabajo de cuatro o de cinco.",
    paginas: [
      {
        rotulo: "El teclado",
        texto:
          "La máquina tenía un teclado de noventa teclas y funcionaba así: al pulsar una letra caía por un canal una matriz de latón con esa forma, las matrices se iban alineando hasta formar una línea completa, se les inyectaba plomo fundido encima y salía una barra sólida con el renglón entero en relieve. Después, unas muescas distintas en cada matriz permitían que un mecanismo las devolviera automáticamente a su canal correspondiente, sin que nadie tuviera que ordenarlas a mano, que era la parte verdaderamente ingeniosa del invento y la que costó años de trabajo resolver.",
        destacado: { tipo: "cifra", cifra: "1.500", unidad: "letras por hora colocaba un operario" },
      },
      {
        rotulo: "El cambio",
        texto:
          "Con aquello un solo operario hacía el trabajo de cuatro o de cinco, y de pronto un periódico podía tener muchas más páginas por el mismo dinero. Los diarios pasaron de ocho páginas a treinta o cuarenta en pocos años, aparecieron los suplementos y bajó el precio de los libros. El oficio de cajista, que se aprendía en años y tenía uno de los gremios más fuertes de la industria, se transformó por completo; hubo resistencia y conflictos, aunque la máquina también creó empleo, porque hacía falta mucho más texto para llenarla.",
        destacado: { tipo: "frase", frase: "Un solo operario hacía el trabajo de cuatro o cinco." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquellas máquinas, ruidosas, calientes y con un crisol de plomo fundido dentro, estuvieron en todas las redacciones del mundo durante casi noventa años, hasta que en los setenta las barrieron la fotocomposición y después los ordenadores en cuestión de una década. Quedan unas pocas funcionando en talleres de imprenta artesanal y en museos. Y quedó un detalle que usamos a diario sin saberlo: los tipos de letra diseñados para aquellas máquinas siguen instalados en cualquier ordenador, con el mismo nombre y prácticamente el mismo dibujo que tenían grabadas aquellas matrices de latón.",
      },
    ],
  },
];
