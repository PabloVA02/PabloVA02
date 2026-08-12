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
    titulo: "Por qué la sal conserva",
    gancho: "Un jamón curado pasa meses a temperatura ambiente sin estropearse. El motivo no es que la sal envenene nada.",
    categoria: "Objetos",
    color: "var(--ochre)",
    encargo: "Jamones colgados en un secadero con las paredes de piedra y poca luz.",
    /* Lo que la sal hace, contado en cuatro objetos: la pieza colgada, el
       cristal que le roba el agua, el pescado que se guarda con él y la tienda
       que sigue viviendo de todo eso. */
    fotos: [
      {
        archivo: "Secadero natural de la empresa Jamón Or de Guijuelo, Salamanca.jpg",
        autor:
          "Un secadero natural de jamones en Guijuelo, Salamanca. Cada pieza pierde ahí casi un tercio de su peso. Fotografía de Guanbirra, 2011.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Secadero_natural_de_la_empresa_Jam%C3%B3n_Or_de_Guijuelo,_Salamanca.jpg",
        foco: "50% 50%",
        alt: "Cientos de jamones colgados en filas apretadas del techo de un secadero, con la pezuña hacia abajo.",
      },
      {
        archivo: "Salt Crystals1.jpg",
        autor:
          "Cristales de sal gorda vistos de cerca. Es lo que saca el agua de la carne y de las bacterias que hay en ella. Fotografía de Donald Olszewski.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Salt_Crystals1.jpg",
        foco: "50% 50%",
        alt: "Una cuchara con trozos gruesos de sal rosada y translúcida, apoyada sobre un plato de colores.",
      },
      {
        archivo: "Dried and salted cod.jpg",
        autor:
          "Bacalao salado y secado, apilado bajo un tejadillo de madera sujeto con piedras. Fotografía coloreada a mano de Anders Beer Wilse, Noruega.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Dried_and_salted_cod.jpg",
        foco: "50% 55%",
        alt: "Un montón enorme de pescados abiertos y secos, apilados unos sobre otros y cubiertos por un tejadillo de tablas con piedras encima.",
      },
      {
        archivo: "Salt cod shop (7008016739).jpg",
        autor:
          "Un puesto de bacalao salado, con las piezas abiertas en cajas y el precio de cada corte. Fotografía de Michael Clarke, 2012.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Salt_cod_shop_(7008016739).jpg",
        foco: "50% 60%",
        alt: "El escaparate de una pescadería con cajas de bacalao salado y carteles amarillos de oferta con los precios.",
      },
    ],
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
    fotos: [
      {
        archivo: "Salt transport by a camel train on Lake Assale (Karum) in Ethiopia.jpg",
        autor: "Caravana de camellos cargados con losas de sal cruzando el lago Assale, en Etiopía. Fotografía de LeFnake.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Salt_transport_by_a_camel_train_on_Lake_Assale_(Karum)_in_Ethiopia.jpg",
        foco: "50% 50%",
        alt: "Una fila de camellos con placas rectangulares atadas a los costados avanzando por una llanura blanca de sal.",
      },
      {
        archivo: "Cavalier de chameaux au passage dans une dune de sable au Maroc.jpg",
        autor: "Camellos cruzando una duna en el Sáhara marroquí.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Cavalier_de_chameaux_au_passage_dans_une_dune_de_sable_au_Maroc.jpg",
        foco: "50% 50%",
        alt: "Camellos bajando por la cresta de una duna de arena anaranjada, con sus sombras alargadas al lado.",
      },
      {
        archivo: "20151122 Morocco 2777 Erg Chigaga sRGB.jpg",
        autor: "El erg de Chigaga, en el sur de Marruecos. Fotografía de Dan Lundberg.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:20151122_Morocco_2777_Erg_Chigaga_sRGB.jpg",
        foco: "50% 50%",
        alt: "Un mar de dunas onduladas hasta el horizonte, sin un solo punto de referencia.",
      },
      {
        archivo: "Above Moroccan Dunes.jpg",
        autor: "Dunas marroquíes vistas desde lo alto. Fotografía de Patricia Ilizaliturri.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Above_Moroccan_Dunes.jpg",
        foco: "50% 50%",
        alt: "Crestas de arena dibujando líneas curvas y limpias sobre el desierto, con luz rasante.",
      },
    ],
    entrada:
      "Desierto del Sáhara, siglos VIII a XVI. En el norte de África sobra la sal y falta el oro; al sur del desierto, en el África occidental, pasa exactamente lo contrario: sobra el oro y no hay ni un solo yacimiento de sal en cientos de kilómetros a la redonda. Entre los dos sitios hay dos mil kilómetros de arena sin agua. Durante ochocientos años, las caravanas de camellos cruzaron ese vacío llevando losas de sal en una dirección y polvo de oro en la otra, y a veces cambiándolos peso por peso.",
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
    titulo: "El hielo ya no existe",
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
