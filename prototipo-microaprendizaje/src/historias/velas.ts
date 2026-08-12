import type { Short } from "../shorts";

/* ==========================================================================
   Las velas.

   Hoy son un objeto decorativo con olor a vainilla y durante milenios fueron
   la única forma de tener luz después del anochecer. El tema se estropea si
   se cuenta con romanticismo de cena a la luz de las velas.

   La regla del tema: se cuenta CUÁNTA LUZ DABAN Y CUÁNTO COSTABAN, en horas
   de trabajo. Nada de ambiente: una vela de sebo apesta, gotea, hay que
   cortarle la mecha cada pocos minutos y alumbra menos que la pantalla de un
   móvil. Se compara siempre con algo que el lector tenga a mano.
   ========================================================================== */

export const VELAS: Short[] = [
  {
    id: "vela-de-sebo",
    titulo: "Las velas eran de sebo",
    gancho: "Se hacían con sebo de vaca, chisporroteaban y había que cortarles la mecha cada pocos minutos.",
    categoria: "Velas",
    color: "var(--ochre)",
    encargo: "Una vela gruesa de sebo con la mecha larga y negra, humeando.",
    fotos: [
      {
        archivo: "Georges de La Tour 006.jpg",
        autor: "La Magdalena penitente, óleo de Georges de La Tour, hacia 1638: una habitación entera alumbrada por una sola llama.",
        licencia: "Dominio público",
        pdPorEdad: 1652,
        fuente: "https://commons.wikimedia.org/wiki/File:Georges_de_La_Tour_006.jpg",
        foco: "50% 28%",
        alt: "Una mujer sentada en penumbra ante un espejo y una calavera, iluminada por la llama de una vela escondida detrás.",
      },
      {
        archivo: "Three Persons Viewing the Gladiator by Candlelight Met DP-18854-001.jpg",
        autor: "Tres personas contemplando una estatua a la luz de una vela, grabado de William Pether, 1769. Metropolitan Museum of Art.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Three_Persons_Viewing_the_Gladiator_by_Candlelight_Met_DP-18854-001.jpg",
        foco: "50% 35%",
        alt: "Tres figuras inclinadas alrededor de una estatuilla, con las caras iluminadas por una vela y el resto en negro.",
      },
      {
        archivo: "Snuffer and wick trimmer (51360098113).jpg",
        autor: "Despabiladeras y apagavelas de latón: las tijeras cortan la mecha y la caja recoge el trozo. Auckland Museum.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Snuffer_and_wick_trimmer_(51360098113).jpg",
        foco: "50% 50%",
        alt: "Unas tijeras de latón con una cajita en la hoja, junto a un apagavelas cónico del mismo metal.",
      },
      {
        archivo: "Candle in Paris.jpg",
        autor: "Una vela encendida en un candelero de iglesia, en París. Fotografía de Barbara-Ingeborg.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Candle_in_Paris.jpg",
        foco: "50% 45%",
        alt: "Una velita encendida sobre una rejilla de hierro, con la llama reflejada en la cera derretida.",
      },
    ],
    entrada:
      "Europa, siglos XIV a XIX. Una casa corriente se alumbra con velas de sebo, es decir, de grasa animal fundida, que son las baratas y las que hay en todas partes. Las de cera de abeja arden limpias, no gotean apenas y huelen bien, pero cuestan varias veces más y quedan para las iglesias, los palacios y las casas ricas. La diferencia entre unas y otras no es un detalle de comodidad: se nota al entrar por la puerta, en el olor y en el color del techo, y marca de un vistazo la posición de quien vive allí.",
    paginas: [
      {
        rotulo: "El sebo",
        texto:
          "Una vela de sebo se fabricaba sumergiendo repetidamente una mecha de algodón trenzado en grasa fundida de vaca o de cordero hasta que engordaba capa a capa. Ardía con una llama pequeña y amarillenta, soltaba un humo grasiento que ennegrecía techos y cortinas y desprendía un olor característico que las casas de la época tenían pegado a las paredes. Además se reblandecía con el calor y se doblaba, así que en verano había que guardarlas en sitio fresco, y los ratones se las comían, lo que obligaba a encerrarlas en cajas de metal.",
        destacado: { tipo: "frase", frase: "Se reblandecían en verano y se las comían los ratones." },
      },
      {
        rotulo: "Despabilar",
        texto:
          "El trabajo constante era la mecha. Las mechas antiguas no se consumían al mismo ritmo que la grasa, así que sobresalían cada vez más, se carbonizaban, formaban un hongo negro en la punta y la llama empezaba a humear y a dar menos luz. Había que cortarlas cada diez o quince minutos con unas tijeras especiales que atrapaban el trozo cortado en una cajita, para no llenar la mesa de brasas. Ese gesto se llamaba despabilar, y de él vienen tanto la palabra pabilo, que es la mecha, como espabilarse, que era estar atento.",
        destacado: { tipo: "cifra", cifra: "15", unidad: "minutos entre corte y corte de mecha" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El problema se resolvió en 1820, cuando un fabricante francés tuvo la idea de trenzar la mecha en lugar de retorcerla y tratarla con una sal. Una mecha trenzada se curva al arder y su punta sale al borde de la llama, donde hay oxígeno de sobra y se consume sola. Desde entonces las velas no hay que despabilarlas, y por eso el gesto y las tijeras han desaparecido de las casas sin que nadie los eche de menos. Quedaron las palabras, que se siguen usando a diario sin saber que hablan de cortar una mecha quemada.",
      },
    ],
  },
  {
    id: "la-vela-patron",
    titulo: "La luz se medía en velas",
    gancho: "La cantidad de luz se medía comparando con una vela de esperma de ballena de peso y llama fijados por ley.",
    categoria: "Velas",
    color: "var(--slate)",
    curioso: true,
    encargo: "Una vela blanca encendida junto a una regla graduada, sobre fondo oscuro.",
    fotos: [
      {
        archivo: "Small candle flame.jpg",
        autor: "Llama de una vela pequeña fotografiada a oscuras, con el cono azul en la base bien visible.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ASmall%20candle%20flame.jpg",
        foco: "50% 45%",
        alt: "Una vela de té encendida sobre fondo negro, con la llama amarilla alargada y quieta.",
      },
      {
        archivo: "Mother and baby sperm whale.jpg",
        autor: "Cachalote con su cría frente a la isla de Mauricio. De la cabeza de este animal salía el espermaceti.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AMother%20and%20baby%20sperm%20whale.jpg",
        foco: "50% 50%",
        alt: "Dos cachalotes, uno grande y uno pequeño, nadando juntos en agua azul iluminada desde arriba.",
      },
      {
        archivo: "Candle light projected through a glass orb.jpg",
        autor: "La luz de una vela atravesando una esfera de vidrio y proyectándose al otro lado.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ACandle%20light%20projected%20through%20a%20glass%20orb.jpg",
        foco: "50% 50%",
        alt: "Bola de cristal sobre una superficie oscura con la llama de una vela concentrada y repetida dentro.",
      },
      {
        archivo: "Yaquina Head Lighthouse Fresnel lens (14862581912).jpg",
        autor: "Lente de Fresnel del faro de Yaquina Head, en Oregón, hecha de anillos de vidrio tallado.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File%3AYaquina%20Head%20Lighthouse%20Fresnel%20lens%20(14862581912).jpg",
        foco: "50% 50%",
        alt: "Gran lente de faro formada por anillos concéntricos de cristal que rodean la lámpara central.",
      },
    ],
    entrada:
      "Inglaterra, 1860. Una ley del alumbrado necesita comprobar que las compañías de gas dan de verdad la luz que cobran, y para eso hace falta una unidad con la que discutir. Se define entonces una que hoy suena a broma: la luz que emite una vela fabricada con esperma de ballena, de un peso determinado, con una mecha determinada y que consuma unos gramos exactos por hora. Se llamó, sencillamente, bujía. Durante casi un siglo, cada farola y cada bombilla del país se midió comparándola con aquella vela de laboratorio.",
    paginas: [
      {
        rotulo: "La ballena",
        texto:
          "El material no era un capricho. En la cabeza de los cachalotes hay una cavidad enorme llena de una sustancia cerosa que al enfriarse forma un sólido blanco, y con ella se hacían las mejores velas que se conocían: llama muy estable, sin humo y sin olor. Era exactamente lo que hace falta en un patrón de medida, porque dos velas iguales tenían que dar la misma luz en Londres y en cualquier otro sitio. La contrapartida es que aquella industria de precisión funcionaba matando cachalotes por decenas de miles cada año.",
        destacado: { tipo: "frase", frase: "El patrón de luz salía de la cabeza de un cachalote." },
      },
      {
        rotulo: "Comparar a ojo",
        texto:
          "Medir consistía en comparar. El aparato era una regla larga con una pantalla de papel en el centro y una mancha de grasa en ella: se ponía la vela patrón a un lado, la lámpara que se quería medir al otro y se deslizaba la pantalla hasta que la mancha dejaba de verse, señal de que llegaba la misma luz por las dos caras. Con la distancia se calculaba el resto, porque la luz cae con el cuadrado de la distancia. Todo el sistema dependía, en última instancia, del ojo de un funcionario en una sala oscura.",
        destacado: { tipo: "cifra", cifra: "1860", unidad: "el año en que la luz se midió en velas" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó la unidad, con otro nombre y otra definición. En 1948 se sustituyó la vela por un patrón físico reproducible en un laboratorio, y desde 1979 la unidad se define a partir de una cantidad exacta de energía radiada en una frecuencia concreta. Sigue llamándose candela, que es como se llamaba en latín la vela, y sigue midiendo lo mismo. En España se conservó además la palabra bujía, que hoy solo se usa para la pieza del motor que da la chispa, y que se llama así por descendencia directa de aquella vela de ballena.",
      },
    ],
  },
  {
    id: "el-precio-de-la-luz",
    titulo: "Una hora de luz costaba una jornada de trabajo",
    gancho: "Un economista calculó cuánto había que trabajar para tener luz, desde la hoguera hasta la bombilla.",
    categoria: "Velas",
    color: "var(--plum)",
    encargo: "Una bombilla encendida al lado de una vela apagada, sobre una mesa oscura.",
    entrada:
      "Estados Unidos, 1994. Un economista de una universidad americana quiso medir algo que las estadísticas oficiales no captan: cuánto ha bajado de verdad el precio de las cosas cuando la tecnología cambia por completo. Eligió la luz, y en lugar de comparar precios de lámparas comparó lo único que interesa al usuario, que es la luz misma, medida en unidades físicas y a lo largo de tres mil años.",
    paginas: [
      {
        rotulo: "La cuenta",
        texto:
          "Para hacerlo reunió datos de todas las fuentes que ha usado la humanidad y calculó cuántas horas de trabajo costaba obtener una cantidad fija de luz. Los resultados son de los que descolocan. Con una lámpara de aceite de la Antigüedad hacían falta muchas horas de trabajo para conseguir el equivalente a una hora de bombilla moderna. Con velas de sebo en 1800, algo así como una tarde entera de jornal. Con las bombillas de finales del siglo XX, una fracción minúscula de segundo. La caída total supera el factor de varios miles.",
        destacado: { tipo: "frase", frase: "Lo que costaba una tarde de jornal hoy no cuesta nada." },
      },
      {
        rotulo: "El truco",
        texto:
          "El detalle importante es metodológico y por eso el trabajo se sigue citando. Las estadísticas oficiales de precios seguían el coste de las velas, luego el de las lámparas de queroseno y luego el de las bombillas, cada una por su lado, y al hacerlo se perdían el salto entre unas y otras. Midiendo la luz en sí, se ve que el precio real cayó muchísimo más de lo que dicen los índices. El autor sostuvo que lo mismo pasa con otros muchos productos, y que por eso probablemente subestimamos cuánto ha mejorado la vida material.",
        destacado: { tipo: "cifra", cifra: "3.000", unidad: "años abarca el cálculo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una forma de mirar los precios que se usa hoy para discutir de todo, desde los ordenadores hasta los medicamentos: no comparar aparatos, sino comparar lo que el aparato consigue. Y quedó una imagen que ordena toda la historia de las velas: durante milenios, alumbrar una habitación después de anochecer fue un gasto que había que pensarse, se hacía con grasa maloliente y obligaba a estar cortando una mecha cada cuarto de hora. Hoy se resuelve con un interruptor y ni siquiera aparece en la factura como una partida que nadie mire.",
      },
    ],
  },
];
