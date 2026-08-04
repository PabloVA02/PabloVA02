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
    titulo: "Las velas corrientes olían a grasa quemada",
    gancho: "Se hacían con sebo de vaca, chisporroteaban y había que cortarles la mecha cada pocos minutos.",
    categoria: "Velas",
    color: "var(--ochre)",
    encargo: "Una vela gruesa de sebo con la mecha larga y negra, humeando.",
    entrada:
      "Europa, siglos XIV a XIX. Una casa corriente se alumbra con velas de sebo, es decir, de grasa animal fundida, que son las baratas. Las de cera de abeja, que arden limpias y huelen bien, cuestan varias veces más y quedan para las iglesias y para las casas ricas. La diferencia entre unas y otras marca de un vistazo la posición de quien vive allí.",
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
    titulo: "Una vela fue la unidad oficial de luz",
    gancho: "La cantidad de luz se medía comparando con una vela de esperma de ballena de peso y llama fijados por ley.",
    categoria: "Velas",
    color: "var(--slate)",
    curioso: true,
    encargo: "Una vela blanca encendida junto a una regla graduada, sobre fondo oscuro.",
    entrada:
      "Inglaterra, 1860. Una ley del alumbrado necesita comprobar que las compañías de gas dan la luz que cobran, y para eso hace falta una unidad. Se define entonces una: la luz que emite una vela fabricada con esperma de ballena, de un peso determinado, que consuma unos gramos exactos por hora. Se llamó, sencillamente, bujía, y durante casi un siglo la luz se midió en velas.",
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
