import type { Short } from "../shorts";

/* ==========================================================================
   La sal.

   La sustancia más barata del supermercado y la que más historia mueve.
   El tema se estropea si se repite lo del salario, que ya está contado en
   comida.ts, o si se convierte en advertencia dietética.

   La regla del tema: la sal nunca actúa por fuerza, sino ESTORBANDO AL
   AGUA, y eso hay que explicarlo antes de contar para qué se usa. Cada
   short lo aplica a un sitio distinto: la despensa, el desierto, la
   carretera helada.
   ========================================================================== */

export const SAL: Short[] = [
  {
    id: "por-que-la-sal-conserva",
    titulo: "La sal no mata, seca",
    gancho: "Un jamón curado pasa meses a temperatura ambiente sin estropearse. El motivo no es que la sal envenene nada.",
    categoria: "Objetos",
    color: "var(--ochre)",
    encargo: "Jamones colgados en un secadero con las paredes de piedra y poca luz.",
    entrada:
      "Todas las culturas del mundo, desde hace por lo menos cinco mil años. Antes de que existiera el frigorífico, la única manera de guardar carne o pescado más de dos días era cubrirlos de sal. Un animal sacrificado en otoño tenía que dar de comer hasta la primavera, y sin eso no se pasaba el invierno. Funcionaba tan bien que ciudades enteras vivieron de ello durante siglos, y hubo guerras por controlar un yacimiento. Los caminos por los que se transportaba se llaman todavía hoy vías de la sal, y por uno de ellos entra la sal a Roma desde el siglo IV antes de Cristo. Lo curioso es que la sal no envenena a las bacterias. Les hace algo mucho más simple: les quita el agua.",
    paginas: [
      {
        rotulo: "El agua robada",
        texto:
          "Una bacteria es una bolsa de agua rodeada de una membrana que deja pasar el líquido en los dos sentidos. Cuando fuera hay mucha más sal que dentro, el agua sale de la bacteria para igualar las concentraciones. Ese fenómeno se llama ósmosis y ocurre solo, sin que nadie lo empuje. La bacteria se deshidrata, se arruga y deja de multiplicarse, aunque en muchos casos no llega a morir. A la carne le pasa lo mismo, y por eso un jamón pierde una tercera parte de su peso mientras cura. Lo que queda es un alimento en el que ya no hay agua libre suficiente para que crezca nada.",
        destacado: { tipo: "frase", frase: "La bacteria no muere: se queda sin agua y se para." },
      },
      {
        rotulo: "Salar y ahumar",
        texto:
          "Salar bien tiene su técnica, porque la sal actúa en la superficie y hay que darle tiempo para que entre. Una pieza gruesa se cubre entera durante semanas, se lava y se deja secar meses en un sitio fresco y ventilado. Si se salta un paso, la sal no llega al centro y ahí dentro queda agua de sobra. El ahumado se añadió al método porque el humo deja sobre la carne sustancias que frenan a los hongos. También la seca por fuera y forma una costra, así que las dos técnicas hacen lo mismo por caminos distintos. El bacalao llevaba las dos cosas y podía cruzar el Atlántico en un barco caliente sin estropearse.",
        destacado: { tipo: "cifra", cifra: "30", unidad: "% del peso pierde un jamón al curarse" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una despensa entera construida sobre el mismo principio, con el jamón, el bacalao, las anchoas, los encurtidos y los quesos curados. Quedaron también unas cuantas recetas que ya no hacen falta y que se siguen haciendo porque saben mejor que el original fresco. El frigorífico dejó la conservación por sal sin trabajo en menos de un siglo, y aun así nadie ha renunciado a ella. Y quedó una advertencia médica que no estaba prevista, porque comer mucha sal sube la tensión y castiga el riñón, que es el órgano encargado de sacarla del cuerpo.",
      },
    ],
  },
  {
    id: "las-caravanas-de-sal",
    titulo: "Sal por oro, al peso",
    gancho: "Miles de camellos cruzando el Sáhara cargados solo con losas blancas. Al otro lado del desierto esperaba el oro.",
    categoria: "Historia",
    color: "var(--clay)",
    encargo: "Caravana de camellos en el desierto con losas rectangulares de sal atadas a los costados.",
    entrada:
      "Desierto del Sáhara, siglos VIII a XVI. En el norte de África sobra sal y falta oro; al sur del desierto, en el África occidental, sobra el oro y no hay ni un yacimiento de sal. Entre los dos sitios hay dos mil kilómetros de arena. Durante ochocientos años, las caravanas de camellos cruzaron ese vacío llevando losas de sal en una dirección y polvo de oro en la otra.",
    paginas: [
      {
        rotulo: "El cuerpo pide",
        texto:
          "En un clima caluroso el cuerpo pierde sal por el sudor y necesita reponerla, o los músculos dejan de funcionar. Quien come carne obtiene bastante de la propia carne, pero una dieta de mijo y de raíces no lleva casi nada. Por eso en las regiones agrícolas del interior de África la sal no era un condimento, sino una necesidad diaria. Encima hacía falta para conservar la carne y el pescado del río, igual que en todas partes. El oro, en cambio, no sirve para nada práctico y allí abundaba en los ríos hasta el punto de resultar corriente. Cuando dos sitios valoran al revés dos cosas distintas, el comercio se organiza solo.",
        destacado: { tipo: "frase", frase: "Sin carne en la dieta, la sal deja de ser condimento." },
      },
      {
        rotulo: "La caravana",
        texto:
          "La sal se sacaba de unas minas en mitad del desierto donde el suelo es una costra dura de varios metros. Allí se cortaba en losas rectangulares de unos treinta kilos, dos por camello, atadas a los costados del animal. Las caravanas grandes juntaban miles de camellos y tardaban dos meses en cruzar, guiadas por hombres que conocían los pozos de memoria. Errar un pozo significaba morir todos, y hay relatos de caravanas enteras encontradas años después junto a sus cargas intactas. El cambio no era libre, porque el rey del sur controlaba el oro y fijaba la proporción a la que se intercambiaba. En algunos tramos del recorrido se cambiaba peso por peso.",
        destacado: { tipo: "cifra", cifra: "2", unidad: "meses tardaba la caravana en cruzar" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron ciudades que fueron riquísimas y que hoy están medio enterradas por la arena, porque el negocio se acabó de golpe. Se acabó cuando los barcos europeos empezaron a llegar por la costa y ofrecieron el mismo intercambio sin cruzar el desierto. Quedó también una ruta que todavía funciona a pequeña escala, con caravanas de unos pocos cientos de camellos cargando losas. Y quedó la lección económica de siempre, que es que nada vale por sí mismo. El oro valía poco donde había oro, y una piedra blanca valía una fortuna dos mil kilómetros más allá.",
      },
    ],
  },
  {
    id: "la-sal-de-las-carreteras",
    titulo: "El hielo deja de poder existir",
    gancho: "No lo derrite por calor. Baja la temperatura a la que el agua puede congelarse, y el hielo deja de poder existir.",
    categoria: "Objetos",
    color: "var(--slate)",
    curioso: true,
    encargo: "Camión esparcidor soltando sal sobre una carretera nevada al amanecer.",
    entrada:
      "Países fríos de todo el mundo, con el sistema generalizado desde los años cincuenta del siglo XX. Cada invierno se esparcen millones de toneladas de sal sobre las carreteras, y la mayoría de la gente cree que la sal derrite el hielo dándole calor. No es eso. Lo que hace es cambiar la temperatura a la que el agua puede permanecer congelada.",
    paginas: [
      {
        rotulo: "Bajar el cero",
        texto:
          "El agua pura se congela a cero grados, y ese número no es una propiedad mágica, sino un equilibrio. A esa temperatura, las moléculas que se pegan al hielo y las que se sueltan van al mismo ritmo. Cuando hay sal disuelta, sus partículas estorban a las moléculas de agua que intentan colocarse en el hielo. Congelarse se vuelve más difícil, así que hace falta bajar más la temperatura para que el equilibrio vuelva. Con sal común el agua aguanta hasta unos diez grados bajo cero sin congelarse, y con otras sales se baja más. Por debajo de esa temperatura la sal deja de servir, y entonces solo queda la arena para dar agarre.",
        destacado: { tipo: "cifra", cifra: "-10", unidad: "grados es el límite de la sal común" },
      },
      {
        rotulo: "El precio",
        texto:
          "El sistema funciona muy bien y tiene una factura ambiental que ha tardado décadas en verse. Toda esa sal termina en la cuneta, se filtra al suelo y acaba en arroyos y en pozos de agua potable. Muchos ríos del norte de Europa y de Norteamérica se han vuelto medibles más salados en los últimos cincuenta años. Los árboles de las cunetas se secan, el hormigón de los puentes se degrada y los coches se oxidan. Por eso muchas ciudades han pasado a mojar la sal antes de echarla, porque así se pega y hace falta bastante menos. Otras usan salmuera de remolacha o de queso, que baja el punto de congelación y ensucia menos.",
        destacado: { tipo: "frase", frase: "Toda la sal de la carretera acaba en el río." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una industria enorme, porque solo una parte pequeña de la sal que se produce en el mundo acaba en la comida. El resto va a la industria química y a las carreteras heladas, en cantidades que no cabrían en ninguna cocina. Quedó también un dilema sin solución limpia, ya que quitar la sal significaría más accidentes en invierno. Y quedó la misma explicación de siempre, porque la sal no calienta nada ni mata nada. Solo estorba al agua, y con eso le basta para conservar un jamón o para despejar una autopista.",
      },
    ],
  },
];
