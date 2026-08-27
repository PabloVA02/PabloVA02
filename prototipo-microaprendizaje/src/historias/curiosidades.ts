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
      "En 1938 el físico Hans Bethe explicó por fin de qué vive el Sol, y con esa cuenta se pudo saber lo que le queda. Lleva ardiendo cuatro mil seiscientos millones de años y le quedan otros cinco mil: en una vida humana, cuarenta y tantos. Lo raro no es cuándo se apaga, sino cuándo deja de servirnos.",
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
          "Cuando al núcleo se le acabe el hidrógeno, el Sol hará algo que parece contradictorio: el centro se contraerá y las capas de fuera se hincharán muchísimo. Se convertirá en una gigante roja y se tragará Mercurio y Venus. Con la Tierra el cálculo está justo: puede que se salve por poco y puede que no. Después soltará sus capas y quedará el núcleo desnudo, una enana blanca del tamaño de la Tierra. Para entonces hará mucho que aquí no queda nadie a quien alumbrar.",
      },
    ],
  },

  {
    id: "por-que-llueve",
    titulo: "Por qué llueve",
    gancho:
      "Dentro de cada gota de lluvia hay una mota de polvo. Sin ella no llovería nunca.",
    categoria: "Ciencia",
    color: "var(--slate)",
    encargo: "Una nube de tormenta descargando, con las cortinas de lluvia colgando debajo.",
    fotos: [
      {
        archivo: "Cumulonimbus cloud over the Sundarbans, West Bengal, India 01.jpg",
        autor:
          "Nube de tormenta sobre los Sundarbans, India. Las cortinas que cuelgan son lluvia que se evapora antes de llegar. Kingshuk Mondal, 2025.",
        licencia: "CC BY 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Cumulonimbus_cloud_over_the_Sundarbans,_West_Bengal,_India_01.jpg",
        foco: "50% 40%",
        alt: "Una nube de tormenta enorme sobre un río ancho, con franjas grises de lluvia colgando de su base.",
      },
      {
        archivo: "Wave breaking into spray on rocky Robben Island shore.jpg",
        autor:
          "Una ola reventando contra las rocas de Robben Island, en Sudáfrica. Cada gota que salta deja sal en el aire. Daniel Case, 2018.",
        licencia: "CC BY-SA 3.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Wave_breaking_into_spray_on_rocky_Robben_Island_shore.jpg",
        foco: "50% 45%",
        alt: "Una ola blanca estallando contra rocas oscuras y levantando una nube de espuma y salpicaduras.",
      },
      {
        archivo: "Cute summer cloud over Tuntorp, Brastad.jpg",
        autor:
          "Un cúmulo de verano sobre Tuntorp, en la costa oeste de Suecia. Dentro hay medio millón de kilos de agua. W. Carter, 2026.",
        licencia: "CC BY 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Cute_summer_cloud_over_Tuntorp,_Brastad.jpg",
        foco: "50% 58%",
        alt: "Una sola nube blanca y redonda flotando en un cielo azul intenso, con hilos de cirros por encima.",
      },
      {
        archivo: "Snowflake macro photography 1.jpg",
        autor:
          "Un copo de nieve de cuatro milímetros, fotografiado con lente de aumento en Moscú. Alexey Kljatov, 2014.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Snowflake_macro_photography_1.jpg",
        foco: "50% 50%",
        alt: "Un copo de nieve visto muy de cerca, con sus seis brazos ramificados y simétricos, sobre fondo azul.",
      },
    ],
    entrada:
      "En 1880 el físico escocés John Aitken llenó una campana de cristal con aire limpio, lo enfrió y esperó. No se formó ni una gota. Metió después una pizca de polvo y la niebla apareció enseguida. Acababa de descubrir que el agua del aire, por su cuenta, no sabe convertirse en lluvia.",
    paginas: [
      {
        rotulo: "Lo que hay dentro",
        texto:
          "El aire nunca está limpio. Lleva polvo del desierto, sal que el mar suelta al romper las olas, polen, ceniza de los incendios y hollín de los motores. Esas motas se llaman núcleos de condensación, y son el suelo que el vapor de agua necesita para agarrarse. Cuando el aire sube y se enfría, el vapor se pega a ellas y se vuelve líquido. Cada mota queda envuelta en una gotita de dos centésimas de milímetro, cincuenta veces más pequeña que la punta de un bolígrafo. Una nube es exactamente eso: millones de motas de suciedad, cada una con su abrigo de agua.",
      },
      {
        rotulo: "Por qué no cae",
        texto:
          "Una nube blanca de las de un día de verano lleva dentro medio millón de kilos de agua, lo que pesa un avión grande a plena carga. Y se queda arriba. El motivo es el tamaño: una gotita tan pequeña baja despacísimo, un centímetro por segundo, y el aire que sube por debajo va más deprisa que eso. Para que caiga hay que engordarla, y por condensación tardaría días. Lo que ocurre es más bruto: las gotitas chocan entre ellas y se van pegando. La que más ha crecido baja más rápido, alcanza a las de abajo y se las va comiendo.",
      },
      {
        rotulo: "Empieza nevando",
        texto:
          "Y hay un tercer empujón. Arriba del todo hace tanto frío que el agua sigue líquida por debajo de cero, esperando una excusa para helarse. Basta un cristal de hielo para que empiece a robarles el vapor a las gotas de alrededor: crece, pesa y cae. A media bajada se encuentra aire templado y se derrite. Casi toda la lluvia que has visto en tu vida empezó siendo nieve. El agua no cae sola: necesita una mota, un choque y una helada.",
      },
    ],
  },

  {
    id: "por-que-vuelan-los-aviones",
    titulo: "Por qué vuelan los aviones",
    gancho:
      "La explicación del colegio está mal, y lo demuestran los que vuelan boca abajo.",
    categoria: "Ciencia",
    color: "var(--clay)",
    encargo: "El ala de un avión de línea desde la ventanilla, sobre un mar de nubes.",
    fotos: [
      {
        archivo: "A wing tip of an airplane (40118125441).jpg",
        autor:
          "El ala de un avión vista desde la ventanilla, sobre un banco de nubes al atardecer. Departamento de Agricultura de EE. UU., 2018.",
        licencia: "Public domain",
        fuente:
          "https://commons.wikimedia.org/wiki/File:A_wing_tip_of_an_airplane_(40118125441).jpg",
        foco: "50% 50%",
        alt: "El ala blanca de un avión saliendo de la ventanilla, con nubes altas iluminadas por el sol bajo.",
      },
      {
        archivo: "Airplane vortex.jpg",
        autor:
          "El aire que deja atrás un ala, teñido con humo de colores para poder verlo. Ensayo de la NASA en Wallops Island, 1990.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Airplane_vortex.jpg",
        foco: "45% 55%",
        alt: "Una avioneta cruzando una cortina de humo rojo y azul, que se enrosca detrás de su ala en un remolino enorme.",
      },
      {
        archivo:
          "The Red Arrows roll upside down in tight formation during display training MOD 45147906.jpg",
        autor:
          "La patrulla acrobática de la Real Fuerza Aérea británica, volando boca abajo en formación cerrada. Cabo Andy Benson, 2008.",
        licencia: "OGL v1.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:The_Red_Arrows_roll_upside_down_in_tight_formation_during_display_training_MOD_45147906.jpg",
        foco: "45% 50%",
        alt: "Siete aviones rojos volando invertidos muy juntos sobre un cielo azul, dejando estelas blancas.",
      },
      {
        archivo: "N910DU taking off at Tampa International Airport.jpg",
        autor:
          "Un Boeing 737 levantando el morro para despegar en Tampa: cuanto más inclinada va el ala, más aire desvía. Andrew Heneen, 2023.",
        licencia: "CC BY 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:N910DU_taking_off_at_Tampa_International_Airport.jpg",
        foco: "55% 45%",
        alt: "Un avión de pasajeros con el morro levantado justo al despegar, con el tren de aterrizaje todavía en el suelo.",
      },
    ],
    entrada:
      "Casi todo el mundo aprendió lo mismo en el colegio: el ala es más curva por arriba, el aire de arriba corre más deprisa y por eso el avión sube. Suena redondo y tiene un fallo. Nadie ha cronometrado nunca esas dos corrientes, y medidas no llegan juntas ni de lejos. La explicación buena es más vieja y más simple.",
    paginas: [
      {
        rotulo: "Lo que lo sostiene",
        texto:
          "Un ala vuela porque tira del aire hacia abajo, y ya está. Es una ley que escribió Newton en 1687: si empujas una masa de aire hacia abajo, esa masa te empuja a ti hacia arriba con la misma fuerza. El ala va siempre un poco inclinada respecto al viento que le llega, y su curva sirve para que el aire se le quede pegado y salga por detrás apuntando al suelo. Un avión de línea en pleno vuelo está desviando hacia abajo cientos de toneladas de aire cada segundo.",
      },
      {
        rotulo: "La forma no manda",
        texto:
          "La joroba de arriba sí sirve para algo, aunque no sea lo que nos contaron: sirve para que el aire no se despegue. Una corriente que roza una superficie curva tiende a seguirla en vez de irse recta, y una buena curva consigue que aguante pegada hasta el final del ala y salga limpia hacia abajo. Ayuda muchísimo, pero no es la causa. La prueba son los aviones acrobáticos: muchos llevan alas simétricas, sin joroba ninguna, y vuelan igual de bien boca arriba que boca abajo. Un ala plana también vuela, solo que peor y gastando más.",
      },
      {
        rotulo: "Cuando deja de agarrar",
        texto:
          "Todo depende de cuánto se puede inclinar el ala. Cuanto más inclinada, más aire desvía y más tira hacia arriba. Pero pasados unos quince grados el aire deja de seguir la curva, se desprende en remolinos y el ala pierde casi toda su fuerza de golpe. Eso es entrar en pérdida, y no depende de la velocidad: pasa yendo rapidísimo. Por eso lo primero que enseña un instructor es lo que menos apetece: bajar el morro. Volar es convencer al aire de que baje, y nada más.",
      },
    ],
  },
];
