import type { Short } from "../shorts";

/* ==========================================================================
   CURIOSIDADES — el muro empieza de cero.

   Pablo, el 27 de agosto: «veo un problema y es que muchos shorts no dicen
   nada. Por ejemplo, "La cura estaba en la tierra", "De la feria al
   quirófano": son títulos que nadie ve atractivos, y menos las imágenes. Creo
   que deberíamos empezar por cosas de intereses, como cuánto de vida le queda
   al sol, o por qué llueve, cómo funciona un móvil, cosas así, curiosidades y
   preguntas cotidianas y de interés general».

   Tenía razón, y el diagnóstico es más fino de lo que parece. Los 761 shorts
   viejos estaban ordenados por OBJETO —la escoba, el ancla, el corcho— y un
   objeto no es una pregunta: «Escoba» no le pica a nadie. Lo que pica es una
   duda que el lector ya tenía antes de abrir la aplicación y que nunca se ha
   parado a resolver. Ahí el título no hay que inventarlo: ya está escrito en
   la cabeza del que va a leerlo.

   POR ESO SE BORRÓ TODO. No se rescató lo bueno de lo viejo: se empieza por el
   criterio, que es lo que estaba mal. Están en el historial de git —nada se ha
   perdido— y de ahí saldrá lo que valga la pena rescatar, si sale.

   AHORA MISMO ESTE FICHERO TIENE UNA SOLA HISTORIA, y está bien que así sea:
   primero se ajusta el diseño de la pantalla con un ejemplo delante, y solo
   cuando la forma esté cerrada se escriben las demás. Escribir cien y después
   descubrir que la portada pedía otra cosa es rehacer cien.

   Las reglas de cómo se escribe un short siguen en `MOLDE.md`.
   ========================================================================== */

export const CURIOSIDADES: Short[] = [
  {
    id: "al-sol-le-queda-media-vida",
    titulo: "¿Cuánto le queda al sol?",
    gancho:
      "No se apagará como una bombilla: se hinchará hasta tragarse la órbita de la Tierra.",
    categoria: "Ciencia",
    color: "var(--ochre)",
    encargo: "El disco solar entero en ultravioleta, con la corona erizada de arcos.",
    fotos: [
      {
        archivo: "Solar Orbiter’s widest high-res view of the Sun ESA508430.jpg",
        autor:
          "La corona solar en ultravioleta: doscientas tomas de la sonda Solar Orbiter cosidas en una, 9 de marzo de 2025. Agencia Espacial Europea.",
        licencia: "CC BY-SA 3.0 igo",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Solar_Orbiter%E2%80%99s_widest_high-res_view_of_the_Sun_ESA508430.jpg",
        foco: "50% 50%",
        alt: "El disco del Sol en amarillo cálido, con la corona erizada de arcos brillantes alrededor del ecuador y una franja oscura cerca del polo sur.",
      },
      /* LAS TRES DE DENTRO LAS PONGO YO Y SON PROVISIONALES. La de la portada
         es la que mandó Pablo; estas están para poder juzgar el diseño con
         cuatro imágenes distintas, que es como está pensado —«se ordenan de
         lejos a cerca», dice el tipo—, y no con la misma foto cuatro veces.
         Las tres vienen de Commons con su licencia comprobada y se cambian el
         día que Pablo mande las suyas. */
      {
        archivo: "NSF’s Inouye Solar Telescope First Light (NSO-DKIST-firstlight-full).jpg",
        autor:
          "Cada celda de gas hirviendo del Sol mide como un país. Telescopio Solar Inouye, 2020. NSO/NSF/AURA.",
        licencia: "CC BY 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:NSF%E2%80%99s_Inouye_Solar_Telescope_First_Light_(NSO-DKIST-firstlight-full).jpg",
        foco: "50% 50%",
        alt: "La superficie del Sol vista muy de cerca: celdas doradas apretadas como panales, separadas por surcos oscuros.",
      },
      {
        archivo: "The Blue Marble, AS17-148-22727.jpg",
        autor:
          "La Tierra entera iluminada, fotografiada por la tripulación del Apolo 17 camino de la Luna el 7 de diciembre de 1972. NASA.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:The_Blue_Marble,_AS17-148-22727.jpg",
        foco: "50% 50%",
        alt: "La Tierra sobre el negro del espacio, con África y la Antártida a la vista bajo remolinos de nubes blancas.",
      },
      {
        archivo: "NGC7293 (2004).jpg",
        autor:
          "La nebulosa de la Hélice: lo que dejó al morir una estrella como el Sol. Hubble, 2004. NASA y ESA.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:NGC7293_(2004).jpg",
        foco: "50% 50%",
        alt: "Un anillo enorme de gas azul y anaranjado sobre el fondo negro del espacio, con un punto blanco diminuto en el centro.",
      },
    ],
    /* Cincuenta y seis palabras. Tenía ciento treinta: era la que se salía de
       la caja y se pintaba encima del «Seguir». Lo que sobraba no se ha
       perdido —que el Sol no se funde como una bombilla es ahora el gancho, y
       que la Tierra se seca antes del final es la página 2—, y la medida
       nueva sale de medir la portada con el gancho ya pintado: ver `MOLDE.md`
       y el bloque «EL SHORT, AJUSTADO» de la hoja de estilos. */
    entrada:
      "En 1938 Hans Bethe explicó por fin de qué vive el Sol, y con esa cuenta se pudo saber lo que le queda. Lleva ardiendo cuatro mil seiscientos millones de años y le quedan otros cinco mil: en una vida humana, cuarenta y tantos. Lo raro no es cuándo se apaga, sino cuándo deja de servirnos.",
    paginas: [
      {
        rotulo: "Qué está quemando",
        texto:
          "En el centro del Sol hay tanta presión que los núcleos de hidrógeno se fusionan de cuatro en cuatro y se convierten en helio. Cada fusión suelta energía, y esa energía tarda cien mil años en salir a la superficie a base de rebotar. Lo importante es lo que va quedando: el helio es más pesado y se acumula en el núcleo, que se va comprimiendo y calentando. Por eso el Sol no brilla siempre igual. Hoy alumbra alrededor de un treinta por ciento más que cuando se formó, y seguirá subiendo aproximadamente un uno por ciento cada cien millones de años.",
        destacado: { tipo: "cifra", cifra: "30", unidad: "% más brillante que al nacer" },
      },
      {
        rotulo: "Cuándo nos toca",
        texto:
          "Ese uno por ciento parece poco y no lo es. Dentro de unos mil millones de años el Sol calentará lo bastante como para que los océanos empiecen a evaporarse en serio. Y el vapor de agua es a su vez un gas de efecto invernadero potentísimo, así que acelerará el proceso él solo. La Tierra seguirá aquí, girando, pero seca. O sea que el planeta deja de ser habitable no dentro de cinco mil millones de años, sino dentro de mil. Dicho de otra manera: la vida en la Tierra ha gastado ya cerca del ochenta por ciento del tiempo que tenía.",
        destacado: { tipo: "frase", frase: "La Tierra se queda sin agua mil millones de años antes del final." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Cuando al núcleo se le acabe el hidrógeno, el Sol hará algo que parece contradictorio: el centro se contraerá y las capas de fuera se hincharán muchísimo. Se convertirá en una gigante roja, más fría en la superficie y enorme, y se comerá a Mercurio y a Venus. Con la Tierra el cálculo está justo, porque para entonces el Sol habrá perdido masa y nuestra órbita se habrá ensanchado; puede que se salve por poco y puede que no. Después expulsará sus capas exteriores y quedará el núcleo desnudo, una enana blanca del tamaño de la Tierra que se irá enfriando durante billones de años.",
      },
    ],
  },
];
