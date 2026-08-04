import type { Short } from "../shorts";

/* ==========================================================================
   Los imanes.

   Una piedra que atrae hierro sin tocarlo y sin gastarse. El tema se
   estropea si se convierte en historia de la brújula, que ya está en
   brujula.ts.

   La regla del tema: todo se explica desde LOS DOMINIOS, esos trocitos ya
   imantados que hay dentro de cualquier hierro, y esa idea va siempre
   antes que cualquier aplicación. Nada de campos abstractos sin apoyo.
   ========================================================================== */

export const IMANES: Short[] = [
  {
    id: "por-que-un-iman-es-iman",
    titulo: "Un imán es hierro con los átomos alineados",
    gancho: "Todo el hierro tiene imanes diminutos dentro apuntando en desorden. Un imán es el mismo hierro con todos mirando igual.",
    categoria: "Ciencia",
    color: "var(--slate)",
    encargo: "Limaduras de hierro dibujando las líneas del campo alrededor de un imán de barra.",
    entrada:
      "Grecia y China, con el fenómeno descrito desde hace más de dos mil quinientos años. Una piedra concreta, la magnetita, atrae al hierro sin tocarlo y sin gastarse, y durante siglos eso no tuvo ninguna explicación. Hoy sabemos que cualquier trozo de hierro está lleno de imanes microscópicos que se anulan entre sí. Un imán de verdad es el mismo hierro con todos ellos apuntando en la misma dirección.",
    paginas: [
      {
        rotulo: "Los dominios",
        texto:
          "Cada electrón que gira dentro de un átomo se comporta como un imán minúsculo con su norte y su sur. En casi todos los materiales esos imancitos apuntan en direcciones al azar y se cancelan unos a otros. En el hierro, el níquel y el cobalto ocurre algo distinto, porque se ponen de acuerdo por zonas. Cada zona se llama dominio y es un trocito ya imantado, más pequeño que un grano de polvo. Un clavo normal tiene millones de dominios apuntando a todas partes, así que en conjunto no atrae nada. Imantarlo consiste en girarlos todos hacia el mismo lado con un campo magnético fuerte.",
        destacado: { tipo: "frase", frase: "El hierro ya está imantado por dentro, pero en desorden." },
      },
      {
        rotulo: "Perder la fuerza",
        texto:
          "Un imán pierde su fuerza por dos caminos, y los dos consisten en descolocar esos dominios. El primero es el golpe, porque un martillazo sacude la estructura y muchos dominios se giran solos. El segundo es el calor, ya que la temperatura hace vibrar los átomos y deshace la alineación. Cada material tiene una temperatura a la que pierde el magnetismo de golpe y se vuelve hierro corriente. En el hierro esa temperatura ronda los setecientos setenta grados, y por encima ningún imán funciona. Al enfriarse vuelve a poder imantarse, aunque no recupera solo la imantación que tenía antes.",
        destacado: { tipo: "cifra", cifra: "770", unidad: "grados y el hierro deja de ser magnético" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una explicación que tardó dos mil quinientos años en llegar y que hoy cabe en un solo párrafo. Quedó también un truco doméstico que funciona, porque frotar una aguja siempre en el mismo sentido con un imán la imanta. Esa aguja flotando sobre un trocito de corcho en un vaso de agua es una brújula improvisada. Y quedó el detalle que más sorprende de todo el asunto, porque un imán no gasta energía nunca. Puede sostener un objeto contra la gravedad durante siglos sin consumir nada, porque no está haciendo ningún trabajo.",
      },
    ],
  },
  {
    id: "el-iman-de-neodimio",
    titulo: "Un imán del tamaño de una moneda levanta kilos",
    gancho: "El imán de neodimio es tan fuerte que rompe dedos y perfora intestinos. Salió de la crisis del petróleo.",
    categoria: "Tecnología",
    color: "var(--clay)",
    encargo: "Dos imanes de neodimio pequeños pegados con fuerza sobre una mesa de acero.",
    entrada:
      "Japón y Estados Unidos, 1982. La crisis del petróleo de la década anterior ha empujado a fabricar motores eléctricos más pequeños y eficientes, y para eso hacen falta imanes muchísimo más potentes. Dos equipos que trabajan por separado dan aquel año con la misma aleación de hierro, boro y un metal poco común llamado neodimio. El resultado multiplica por diez la fuerza de un imán normal.",
    paginas: [
      {
        rotulo: "Fuerza y peligro",
        texto:
          "Un imán de neodimio del tamaño de una moneda de dos euros sostiene varios kilos de hierro. Esa fuerza lo convierte en un objeto peligroso, cosa que la gente descubre cuando ya es tarde. Dos imanes de ese tipo se atraen tan deprisa que chocan y saltan en esquirlas afiladas. Si un dedo queda en medio, la piel se pilla y el hueso puede llegar a romperse. El caso más grave es el de los niños que se tragan dos bolitas de esas en momentos distintos. Se atraen a través de la pared del intestino, la aprietan hasta perforarla y hace falta operar.",
        destacado: { tipo: "frase", frase: "Dos bolitas tragadas se atraen a través del intestino." },
      },
      {
        rotulo: "Tierras raras",
        texto:
          "El neodimio pertenece a un grupo de diecisiete metales llamados tierras raras, y el nombre engaña bastante. No son raros en la corteza terrestre, porque hay más neodimio que plomo repartido por el planeta. Lo difícil es que casi nunca aparecen concentrados, sino mezclados unos con otros y con material radiactivo. Separarlos exige cientos de pasos químicos, mucha agua y unos residuos que pocos países quieren gestionar. Por eso el noventa por ciento de la producción mundial está concentrada en un solo país. Esa concentración convierte un metal técnico en un asunto de política internacional.",
        destacado: { tipo: "cifra", cifra: "90", unidad: "% de las tierras raras sale de un solo país" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron esos imanes metidos en casi todo lo que se mueve con electricidad y no se ve por fuera. Van en los auriculares, en el motor que hace vibrar el móvil, en los discos duros y en los altavoces. Un coche eléctrico lleva un par de kilos de ellos, y un aerogenerador grande lleva toneladas. Quedó también un problema de reciclaje, porque recuperar el neodimio de un aparato viejo es difícil y caro. Menos de una vigésima parte del que se usa vuelve a la cadena, y el resto se pierde.",
      },
    ],
  },
  {
    id: "el-iman-del-altavoz",
    titulo: "Un altavoz es un imán empujando papel",
    gancho: "Dentro de cualquier altavoz hay un imán quieto y una bobina que se mueve. El sonido es esa bobina temblando.",
    categoria: "Tecnología",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Altavoz abierto en corte con el imán circular, la bobina y el cono de cartón.",
    entrada:
      "Estados Unidos, 1925. Dos ingenieros publican el diseño de un altavoz que sigue siendo, casi cien años después, el que llevan el móvil, el coche y el cine. La idea es tan sencilla que parece imposible que funcione. Un imán quieto, una bobina de cobre metida en su campo y un cono de cartón pegado a la bobina que empuja el aire.",
    paginas: [
      {
        rotulo: "Empujar el aire",
        texto:
          "Una corriente eléctrica que pasa por un cable crea a su alrededor un campo magnético propio. Si ese cable está dentro del campo de un imán, los dos campos se empujan y el cable se mueve. Cambiando el sentido de la corriente, el cable se mueve hacia el otro lado, y así una y otra vez. La señal de música es exactamente eso: una corriente que cambia de sentido miles de veces por segundo. La bobina sigue esos cambios, el cono pegado a ella va y viene, y el aire delante se comprime. Esa compresión que viaja por el aire y llega al oído es el sonido, sin más misterio.",
        destacado: { tipo: "frase", frase: "La música es una corriente que cambia de sentido." },
      },
      {
        rotulo: "Grande y pequeño",
        texto:
          "El tamaño del cono decide qué sonidos puede producir, y eso explica la forma de cualquier equipo. Un sonido grave es una onda muy larga que necesita mover mucha cantidad de aire de golpe. Por eso el altavoz de graves es grande y pesado, y por eso se nota en el pecho. Un sonido agudo es una onda corta, y el cono tiene que moverse muy rápido y poco. Un cono grande no consigue esa velocidad porque pesa demasiado, así que hace falta uno pequeño aparte. De ahí vienen las cajas con varios altavoces distintos y un filtro que reparte la señal entre ellos.",
        destacado: { tipo: "cifra", cifra: "1925", unidad: "el año del altavoz que se sigue usando" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un diseño que no ha cambiado en lo esencial desde hace un siglo, cosa poco frecuente. Quedó también su reverso, porque el mismo aparato funciona al revés y se convierte en micrófono. Si el sonido mueve el cono, la bobina se mueve dentro del imán y genera corriente sola. Un altavoz pequeño conectado a un amplificador sirve de micrófono aceptable, y los interfonos antiguos lo aprovechaban. Y quedó la razón por la que un imán fuerte no debe acercarse a según qué cosas, porque borra bandas magnéticas y descalibra pantallas antiguas.",
      },
    ],
  },
];
