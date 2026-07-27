import type { Short } from "../shorts";

/* ==========================================================================
   Cine.

   Aquí no se hacen críticas ni se resumen argumentos: la trama de una
   película no es una historia, es un spoiler largo.

   La regla del tema: se cuenta el TALLER. Cuántos planos hicieron falta, qué
   se usó en lugar de lo que parece, qué archivo se saqueó, quién discutió
   con quién sobre quién había dirigido qué. El cine es el arte que más se
   fabrica y menos se enseña fabricado, y ahí está todo lo interesante.

   Y se cuenta lo que se repite mal. Que el cine mudo era mudo, que la sangre
   era pintura, que aquel plano fue improvisado. Casi siempre hay una versión
   documentada más rara que la leyenda del rodaje.
   ========================================================================== */

export const CINE: Short[] = [
  {
    id: "grito-wilhelm",
    titulo: "El mismo grito lleva setenta años en el cine",
    gancho: "Está en Star Wars, en Indiana Jones y en cuatrocientas películas más.",
    categoria: "Cine",
    color: "var(--clay)",
    encargo: "Una bobina de cinta magnética de sonido abierta sobre una mesa de montaje.",
    entrada:
      "Hay un alarido concreto —corto, agudo, con un quiebro al final— que suena cada vez que alguien cae de un tejado, recibe un flechazo o sale despedido por una explosión. Es siempre exactamente el mismo archivo de sonido, grabado en 1951 por un actor que no llegó a saber en qué se convertiría. En el oficio se le llama el grito Wilhelm.",
    paginas: [
      {
        rotulo: "El origen",
        texto:
          "Se grabó para <em>Tambores lejanos</em>, un wéstern de 1951 en el que un soldado es arrastrado bajo el agua por un caimán. La sesión de doblaje registró seis variantes; la que triunfó fue la número cinco. Dos años después, la misma pista se usó en <em>La carga del río Feather</em> para un personaje llamado soldado Wilhelm, y ese es el nombre que se le quedó dentro de la biblioteca de efectos de Warner. Quién puso la voz nunca se ha confirmado del todo: la atribución más citada apunta al actor y cantante Sheb Wooley, cuyos allegados lo dieron por bueno años después.",
        destacado: {
          tipo: "frase",
          frase: "Lleva el nombre de un personaje que no es el que grita.",
        },
      },
      {
        rotulo: "El rescate",
        texto:
          "En los años setenta, un joven diseñador de sonido llamado Ben Burtt rebuscaba en los archivos de efectos de los grandes estudios y encontró una bobina etiquetada como «hombre devorado por un caimán». Le hizo gracia y decidió colarla en todo lo que hiciera. La metió en <em>La guerra de las galaxias</em> en 1977 —un soldado imperial cae por un hueco— y luego en Indiana Jones, y a partir de ahí se convirtió en un guiño entre profesionales del gremio. Hoy se cuentan más de <strong>400</strong> películas con el grito dentro, y sigue apareciendo en estrenos cada año.",
        destacado: { tipo: "cifra", cifra: "400+", unidad: "películas con el mismo archivo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El chiste tiene fecha de caducidad y lo saben quienes lo usan: cuanto más se reconoce, menos sirve, porque un efecto que saca al espectador de la película es un efecto roto. Varios diseñadores de sonido han dicho públicamente que lo han retirado de su repertorio por eso mismo. Y hay una consecuencia más amplia: buena parte de lo que suena en una sala no se grabó para esa película. Los truenos, los cristales, los pasos y los pájaros vienen de bibliotecas compartidas, y hay ruidos concretos que llevan medio siglo repitiéndose sin que nadie los note.",
      },
    ],
  },

  {
    id: "psicosis-ducha",
    titulo: "La escena de la ducha: 45 segundos y una semana",
    gancho: "El cuchillo no toca la piel en ningún fotograma. La sangre era sirope.",
    categoria: "Cine",
    color: "var(--slate)",
    encargo: "Una alcachofa de ducha antigua vista desde abajo, agua cayendo, blanco y negro.",
    entrada:
      "Dura menos de un minuto y es probablemente la secuencia más analizada del cine. Hitchcock la rodó durante una semana entera en 1960, con unas setenta y ocho posiciones de cámara distintas para un montaje final de unos cincuenta cortes. Todo ese trabajo sirve para que el espectador crea haber visto algo que la película nunca enseña.",
    paginas: [
      {
        rotulo: "Lo que no se ve",
        texto:
          "En ningún fotograma el cuchillo entra en el cuerpo. Lo que hay son fragmentos: una mano, un grito, un hombro, el filo bajando, un pie, el agua. El cerebro rellena el resto y lo rellena peor —o sea, mejor— de lo que lo habría hecho cualquier efecto. Como la película es en blanco y negro, la sangre del desagüe es sirope de chocolate, que en escala de grises tiene una densidad y un brillo que la pintura roja no da. El ruido de las puñaladas se consiguió acuchillando un melón, después de probar con varias frutas hasta dar con el tono exacto.",
        destacado: { tipo: "cifra", cifra: "78", unidad: "posiciones de cámara para 45 segundos" },
      },
      {
        rotulo: "La discusión",
        texto:
          "El diseñador gráfico Saul Bass, que hizo los títulos de crédito y dibujó el guion visual de la secuencia plano a plano, sostuvo años después que la había dirigido él. El equipo lo negó en bloque: la actriz Janet Leigh y el ayudante de dirección afirmaron siempre que Hitchcock estuvo allí dirigiendo cada toma, y que lo de Bass fueron los dibujos. La disputa no se ha cerrado nunca del todo y es un buen recordatorio de cómo funciona el cine: lo que se ve en pantalla lo firma una persona y lo han hecho ochenta, y a veces ni ellas se ponen de acuerdo sobre quién hizo qué.",
        destacado: {
          tipo: "frase",
          frase: "Cincuenta cortes para que veas algo que nunca aparece.",
        },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La película cambió además cómo se va al cine. Hitchcock compró todos los ejemplares que pudo de la novela para que nadie conociera el final, prohibió la entrada a la sala una vez empezada la sesión —hasta entonces se entraba a mitad de película sin problema— y montó una campaña entera alrededor de no contar el desenlace. Aquello inauguró la idea moderna del pase con hora fija y del final que no se destripa. La escena, mientras tanto, se sigue proyectando en escuelas de montaje como el ejemplo de que el corte es el efecto especial más barato que existe.",
      },
    ],
  },

  {
    id: "cine-mudo",
    titulo: "El cine mudo nunca fue mudo, ni iba tan rápido",
    gancho: "Siempre sonó música en la sala, y esos movimientos acelerados son un error nuestro.",
    categoria: "Cine",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un proyector de manivela de los años veinte, la bobina superior a medio girar.",
    entrada:
      "La imagen mental del cine antiguo tiene dos rasgos: no se oía nada y todo el mundo se movía a trompicones, como muñecos con prisa. Las dos cosas son falsas, y ninguna tiene que ver con cómo se veían aquellas películas cuando se estrenaron. La primera es un problema de nombre; la segunda, un fallo técnico que cometemos nosotros.",
    paginas: [
      {
        rotulo: "El ruido",
        texto:
          "Una proyección de los años veinte era cualquier cosa menos silenciosa. En las salas pequeñas había un pianista; en las grandes, un órgano capaz de imitar truenos, cascos de caballo y sirenas; en los estrenos importantes, una orquesta completa. Los estudios repartían partituras y hojas de indicaciones con la música que tocaba en cada escena. Lo que faltaba no era el sonido, era el sonido SINCRONIZADO con la imagen, y llamar «mudo» a todo aquello es una etiqueta que se inventó después, cuando llegó el sonoro y hubo que distinguir una cosa de la otra.",
        destacado: {
          tipo: "frase",
          frase: "No era cine mudo. Era cine sin sonido grabado, que no es lo mismo.",
        },
      },
      {
        rotulo: "La velocidad",
        texto:
          "Las cámaras se accionaban a manivela y rodaban a unos <strong>16 a 18</strong> fotogramas por segundo, según el operador y según lo que pidiera la escena. Los proyectores de la sala se ajustaban a esa misma velocidad. Cuando el cine sonoro fijó el estándar en 24 fotogramas por segundo, todo el catálogo anterior empezó a proyectarse y luego a copiarse a esa velocidad, un tercio más rápido de lo debido. De ahí vienen los andares cómicos de Chaplin y las persecuciones a trompicones: no son un estilo de la época, son una copia mal pasada.",
        destacado: { tipo: "cifra", cifra: "16-18", unidad: "fotogramas por segundo, no 24" },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "Las restauraciones modernas corrigen las dos cosas: se ajusta la velocidad a la que se rodó cada película y se recupera o se recompone la música que la acompañaba. Vistas así, aquellas actuaciones dejan de parecer exageradas y se vuelven sorprendentemente contenidas. Del catálogo, en cambio, queda poco: se estima que se ha perdido en torno a las tres cuartas partes de todo el cine anterior a 1930, porque el soporte de nitrato se descompone, arde con facilidad y durante décadas se reciclaba para recuperar la plata de la emulsión.",
      },
    ],
  },
];
