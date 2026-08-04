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
    titulo: "Un periódico contó que había hombres murciélago",
    gancho: "En 1835 publicó seis entregas sobre la vida en la Luna y se convirtió en el diario más vendido.",
    categoria: "Periódicos",
    color: "var(--plum)",
    curioso: true,
    encargo: "Un grabado antiguo de criaturas aladas en un paisaje lunar con árboles.",
    entrada:
      "Nueva York, agosto de 1835. Un periódico barato publica en portada la primera de seis entregas en las que asegura que un astrónomo famoso ha descubierto vida en la Luna con un telescopio nuevo instalado en Sudáfrica. Describe bosques, playas, bisontes, unicornios azules y hombres alados con cara de murciélago que conversan entre ellos.",
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
    titulo: "Un periódico anunció al ganador equivocado",
    gancho: "El titular se imprimió antes de contar los votos, y el presidente electo posó sonriendo con él.",
    categoria: "Periódicos",
    color: "var(--slate)",
    encargo: "Un periódico doblado sostenido en alto con un titular enorme a toda página.",
    entrada:
      "Estados Unidos, noviembre de 1948. Un diario de Chicago tiene que cerrar su primera edición antes de que se conozcan los resultados de las elecciones presidenciales, por una huelga de tipógrafos que obliga a adelantar la impresión varias horas. Se fía de las encuestas, que dan una ventaja aplastante a un candidato, y titula a toda página que ha ganado.",
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
    titulo: "Una máquina hizo el periódico cuatro veces más rápido",
    gancho: "Antes, un hombre colocaba las letras a mano una por una. Un diario grande empleaba a cientos.",
    categoria: "Periódicos",
    color: "var(--ochre)",
    encargo: "Una máquina de componer con teclado y crisol, llena de engranajes y matrices de latón.",
    entrada:
      "Nueva York, 1886. Se instala en la redacción de un diario una máquina que funde líneas enteras de texto en plomo a partir de un teclado. Hasta ese momento, componer una página consiste en coger letras de plomo de una caja, una por una, y colocarlas al revés en una regleta. Un operario bueno hace unas mil quinientas letras por hora.",
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
