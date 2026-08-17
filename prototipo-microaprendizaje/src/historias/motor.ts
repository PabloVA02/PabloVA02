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
    titulo: "El coche lo probó su mujer",
    gancho: "Su marido llevaba dos años sin vender ninguno. Ella cogió uno de madrugada y se fue.",
    categoria: "Motor",
    color: "var(--clay)",
    encargo: "Un carruaje de tres ruedas con motor, en un camino de tierra, a primera hora.",
    fotos: [
      {
        archivo: "Beaulieu Motor Museum, Benz Patent Motorwagen (1886) - geograph.org.uk - 8064654.jpg",
        autor: "El triciclo de motor de 1886, el coche del viaje. Fotografía de Michael Garlick, Museo de Beaulieu.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Beaulieu_Motor_Museum,_Benz_Patent_Motorwagen_(1886)_-_geograph.org.uk_-_8064654.jpg",
        foco: "50% 50%",
        alt: "Un carruaje de tres ruedas con radios de bicicleta, banco de madera y motor de latón a la vista.",
      },
      {
        archivo: "Dülmen, Dernekamp, Allee -- 2026 -- 1265.jpg",
        autor: "Una carretera de árboles al amanecer en Westfalia. Fotografía de Dietmar Rabich, 2026.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:D%C3%BClmen,_Dernekamp,_Allee_--_2026_--_1265.jpg",
        foco: "50% 55%",
        alt: "Un camino estrecho entre dos hileras de árboles viejos, con niebla y luz temprana al fondo.",
      },
      {
        archivo: "Verkehrsmuseum Dresden Replika Benz-Patent-Motorwagen von 1886 Detail Motor VIII.jpg",
        autor: "El motor del Benz de cerca: cilindro, volante y cadena. Fotografía de NoRud, Museo del Transporte de Dresde.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Verkehrsmuseum_Dresden_Replika_Benz-Patent-Motorwagen_von_1886_Detail_Motor_VIII.jpg",
        foco: "50% 50%",
        alt: "Un cilindro rojo horizontal con piezas de latón, un volante rojo enorme y una cadena de transmisión.",
      },
      {
        archivo: "Berthabenzportrait.jpg",
        autor: "Bertha Benz retratada en el estudio de Bühler, Mannheim, hacia 1871.",
        licencia: "Dominio público",
        pdPorEdad: 1900,
        fuente: "https://commons.wikimedia.org/wiki/File:Berthabenzportrait.jpg",
        foco: "50% 40%",
        alt: "Retrato ovalado de una mujer joven con trenza y cuello de encaje, mirando de frente.",
      },
    ],
    entrada:
      "Alemania, agosto de 1888. Un ingeniero lleva dos años con un invento que no compra nadie: un carro de tres ruedas con motor de gasolina, ruidoso, lento y con un depósito minúsculo, que la gente mira con la misma desconfianza con la que miraría una caldera suelta por la calle. Lo ha enseñado en ferias, ha salido en algún periódico y no ha vendido ni una unidad. Su mujer llega a una conclusión distinta a la de él: el problema no es el aparato, sino que nadie lo ha visto recorrer una distancia de verdad. Una madrugada, sin decirle nada a su marido, coge a sus dos hijos adolescentes y se va con él.",
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
    titulo: "Regalaron la patente",
    gancho: "Podían haber cobrado por cada coche del mundo durante veinte años. Abrieron la patente gratis.",
    categoria: "Motor",
    color: "var(--slate)",
    encargo: "Un cinturón de tres puntos abrochado sobre un asiento vacío, luz dura de estudio.",
    fotos: [
      {
        archivo: "Dülmen, Merfeld, Volvo PV 544 B18 -- 2021 -- 0138.jpg",
        autor: "Volvo PV 544, el modelo que en 1959 estrenó el cinturón de tres puntos de serie. Fotografía de Dietmar Rabich, 2021.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:D%C3%BClmen,_Merfeld,_Volvo_PV_544_B18_--_2021_--_0138.jpg",
        foco: "50% 50%",
        alt: "Un coche negro de los años cincuenta con la trasera redondeada, parado en una carretera al anochecer bajo nubes estriadas.",
      },
      {
        archivo: "Dülmen, Merfeld, Volvo PV 544 B18 -- 2021 -- 9946.jpg",
        autor: "Salpicadero del mismo Volvo, con los mandos rotulados en sueco. Fotografía de Dietmar Rabich, 2021.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:D%C3%BClmen,_Merfeld,_Volvo_PV_544_B18_--_2021_--_9946.jpg",
        foco: "50% 50%",
        alt: "Detalle de un salpicadero antiguo con tiradores negros de baquelita y molduras cromadas.",
      },
      {
        archivo: "Dülmen, Merfeld, Volvo PV 544 B18 -- 2021 -- 9896.jpg",
        autor: "Otro detalle del Volvo PV 544 restaurado. Fotografía de Dietmar Rabich, 2021.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:D%C3%BClmen,_Merfeld,_Volvo_PV_544_B18_--_2021_--_9896.jpg",
        foco: "50% 50%",
        alt: "Primer plano de la carrocería y los cromados del coche.",
      },
      {
        archivo: "Dülmen, Merfeld, Volvo PV 544 B18 -- 2021 -- 0120-4.jpg",
        autor: "El coche completo al anochecer. Fotografía de Dietmar Rabich, 2021.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:D%C3%BClmen,_Merfeld,_Volvo_PV_544_B18_--_2021_--_0120-4.jpg",
        foco: "50% 50%",
        alt: "Vista lateral del coche negro con los faros encendidos sobre el asfalto.",
      },
    ],
    entrada:
      "Suecia, 1959. Los coches ya corren de verdad y las carreteras se llenan, pero dentro del habitáculo no hay nada que sujete a nadie: en un choque frontal, el conductor sale despedido contra el volante o atraviesa el parabrisas de cabeza. Los cinturones que existen son de dos puntos, cruzan solo el abdomen y en un impacto fuerte hacen casi tanto daño como el golpe. Una marca sueca contrata entonces a un ingeniero que viene de diseñar asientos eyectables de avión y le encarga resolverlo. Tarda un año en dar con la respuesta.",
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
    titulo: "Negro, cualquier color",
    gancho: "No fue una manía del dueño. Era el único esmalte que secaba lo bastante rápido.",
    categoria: "Motor",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una hilera de carrocerías negras idénticas saliendo de una nave industrial.",
    entrada:
      "Estados Unidos, 1913. Un fabricante de coches lleva cinco años vendiendo un modelo que la gente quiere de verdad y no se puede permitir: cuesta lo que gana un obrero trabajando casi dos años enteros. Bajar el precio es lo único que le falta y no sabe por dónde meterle mano, hasta que se le ocurre invertir la lógica de la fábrica de arriba abajo. En vez de que los operarios se acerquen al coche con sus herramientas, hará que el coche se acerque a los operarios. Y de ahí salió, de rebote, el color con el que se lo asocia para siempre.",
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
