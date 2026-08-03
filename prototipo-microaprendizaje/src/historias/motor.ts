import type { Short } from "../shorts";

/* ==========================================================================
   Motor.

   Coches, carreteras y todo lo que rueda. El riesgo del tema es el catálogo
   de aficionado: caballos, cilindradas, modelos y años. Eso lo disfrutan
   cuatro y aburre a los demás.

   La regla del tema: el coche interesa por lo que le CAMBIÓ LA VIDA A LA
   GENTE. Una mujer que se escapa de casa con el invento de su marido. Una
   patente que se regala. Un color elegido porque secaba antes. Detrás de
   cada pieza hay una decisión que se puede contar sin saber mecánica.
   ========================================================================== */

export const MOTOR: Short[] = [
  {
    id: "bertha-benz",
    titulo: "El primer viaje en coche lo hizo ella",
    gancho: "Su marido llevaba dos años sin vender ninguno. Ella cogió uno de madrugada y se fue.",
    categoria: "Motor",
    color: "var(--clay)",
    encargo: "Un carruaje de tres ruedas con motor, en un camino de tierra, a primera hora.",
    entrada:
      "Alemania, agosto de 1888. Un ingeniero lleva dos años con un invento que no compra nadie: un carro de tres ruedas con motor de gasolina, ruidoso y lento, que la gente mira con desconfianza. Su mujer decide que el problema no es el aparato, sino que nadie lo ha visto andar. Una madrugada coge a sus dos hijos adolescentes y se va con él.",
    paginas: [
      {
        rotulo: "Ciento seis kilómetros",
        texto:
          "Salió sin avisar, dejando una nota, y se propuso llegar a casa de su madre: ciento seis kilómetros por caminos de tierra pensados para caballos. El coche hacía dieciséis kilómetros por hora en llano y no podía con las cuestas, así que los tres bajaban y empujaban. Tampoco existían las gasolineras: el combustible se vendía en las farmacias, en frascos pequeños, como quitamanchas, y tuvo que parar en varias para ir llenando un depósito de cinco litros. Tardó doce horas.",
        destacado: { tipo: "cifra", cifra: "106", unidad: "kilómetros por caminos de carro" },
      },
      {
        rotulo: "Las averías",
        texto:
          "Por el camino fue arreglando el coche con lo que llevaba encima. Desatascó el conducto de la gasolina con un alfiler de sombrero. Aisló un cable pelado con una liga. Y cuando los frenos de madera se gastaron hasta no morder, entró en un taller de pueblo y pidió que le clavaran unas tiras de cuero encima: acababa de inventar, sin proponérselo, la pastilla de freno. Aquella noche mandó un telegrama a su marido diciendo que había llegado. Los periódicos de la zona contaron el viaje.",
        destacado: { tipo: "frase", frase: "Desatascó el tubo de gasolina con un alfiler de sombrero." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Las ventas arrancaron justo después, y las dos mejoras que ella exigió al volver —una marcha más corta para las cuestas y unos frenos que aguantaran— se montaron en los modelos siguientes. El dinero para construir aquel primer coche también había salido de ella: era su dote, y la ley alemana de entonces no le permitía figurar como socia de la empresa de su marido. Hoy la ruta está señalizada y se puede recorrer entera. Ella se llamaba Bertha. Su marido, Karl Benz.",
      },
    ],
  },

  {
    id: "cinturon-volvo",
    titulo: "Regalaron el invento que más vidas ha salvado",
    gancho: "Podían haber cobrado por cada coche del mundo durante veinte años. Abrieron la patente gratis.",
    categoria: "Motor",
    color: "var(--slate)",
    encargo: "Un cinturón de tres puntos abrochado sobre un asiento vacío, luz dura de estudio.",
    entrada:
      "Suecia, 1959. Los coches ya corren y las carreteras se llenan, pero dentro no hay nada que sujete a nadie: en un choque, el conductor sale despedido contra el volante o atraviesa el parabrisas. Una marca sueca contrata a un ingeniero que viene de diseñar asientos eyectables de avión y le encarga resolverlo. Tarda un año en dar con la respuesta.",
    paginas: [
      {
        rotulo: "Las tres puntas",
        texto:
          "Cinturones ya había, pero de dos puntos: una banda que cruzaba la cintura y que en un choque fuerte podía reventar los órganos por dentro. La idea nueva fue sumarle una banda en diagonal sobre el pecho y anclar las tres puntas en una sola hebilla, colocada a un lado de la cadera. Y lo decisivo no fue la forma, sino que se abrochara con una mano y en un segundo: un sistema incómodo no se lo pone nadie, por mucho que salve.",
        destacado: { tipo: "frase", frase: "Lo difícil no era sujetar a alguien. Era que quisiera abrocharse." },
      },
      {
        rotulo: "La patente abierta",
        texto:
          "La marca lo montó de serie en 1959 y entonces hizo algo raro para una empresa: abrió la patente y dejó que cualquier fabricante del mundo la copiara gratis, con el argumento de que aquello salvaba demasiadas vidas para guardárselo. Nunca ha publicado cuánto dejó de ingresar. Ser obligatorio le costó décadas más: en España no lo fue en carretera hasta 1974, y dentro de las ciudades hubo que esperar a 1992, treinta y tres años después de que existiera.",
        destacado: { tipo: "cifra", cifra: "1992", unidad: "el año en que fue obligatorio en ciudad" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Se calcula que ese cinturón ha salvado más de un millón de vidas y sigue siendo, con diferencia, la pieza de seguridad que más muertes evita: reduce a la mitad la probabilidad de morir en un accidente, más que el airbag y que los frenos electrónicos juntos. El ingeniero que lo diseñó siguió en la misma empresa hasta jubilarse y no cobró un céntimo por él. Cuando le preguntaban por su invento contestaba que lo difícil no había sido el cinturón.",
      },
    ],
  },

  {
    id: "ford-negro",
    titulo: "Cualquier color, mientras sea negro",
    gancho: "No fue una manía del dueño. Era el único esmalte que secaba lo bastante rápido.",
    categoria: "Motor",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una hilera de carrocerías negras idénticas saliendo de una nave industrial.",
    entrada:
      "Estados Unidos, 1913. Un fabricante de coches lleva cinco años vendiendo un modelo que la gente quiere y no puede pagar: cuesta lo que gana un obrero en casi dos años. Para abaratarlo se le ocurre invertir la lógica de la fábrica. En vez de que los operarios se acerquen al coche, hará que el coche se acerque a los operarios.",
    paginas: [
      {
        rotulo: "La cinta",
        texto:
          "La idea la copió de los mataderos, donde las reses colgaban de un raíl y cada trabajador les daba un corte al pasar. Montó una cinta que arrastraba el chasis a paso lento mientras cada obrero repetía una única operación, siempre la misma, hasta el final del turno. El tiempo de montaje de un coche cayó de doce horas a hora y media. El precio se desplomó, y aquel modelo pasó de ser un capricho de ricos a costar lo que un obrero ganaba en cuatro meses.",
        destacado: { tipo: "frase", frase: "La cinta de montaje se copió de un matadero." },
      },
      {
        rotulo: "El color",
        texto:
          "Lo del negro tuvo una razón práctica y ninguna estética. Con la cinta en marcha, el cuello de botella pasó a ser la pintura: había que esperar a que secara, y de todos los esmaltes que existían solo uno, un negro muy duro llamado japonés, secaba lo bastante rápido para no frenar la línea. Los demás tardaban días. De ahí la frase que se le atribuye al dueño. Lo curioso es que los primeros años sí se vendió en verde, en rojo y en gris.",
        destacado: { tipo: "cifra", cifra: "12 h", unidad: "de montaje pasaron a hora y media" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El trabajo se volvió tan monótono que la fábrica no lograba retener a nadie: en un solo año hubo que contratar a más de cincuenta mil personas para sostener una plantilla de catorce mil. La solución fue doblar el salario de golpe, algo que la prensa llamó locura y que resultó un negocio redondo, porque frenó las bajas y de paso convirtió a los obreros en clientes capaces de comprar el coche que fabricaban. La cinta se extendió después a todo, del pollo asado a los ordenadores.",
      },
    ],
  },
];
