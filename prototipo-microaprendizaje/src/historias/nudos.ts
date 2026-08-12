import type { Short } from "../shorts";

/* ==========================================================================
   Los nudos.

   Una máquina hecha de cuerda. Nadie los estudia y todo el mundo los usa
   mal. El tema se estropea si se convierte en manual de marinería.

   La regla del tema: cada short explica POR QUÉ AGARRA o por qué falla,
   con el rozamiento y la carga por delante, y termina en un oficio
   concreto donde eso decide algo: un barco, un quirófano, una montaña.
   ========================================================================== */

export const NUDOS: Short[] = [
  {
    id: "el-nudo-que-aprieta-solo",
    titulo: "Aprieta cuanto más tiras",
    gancho: "La cuerda no sujeta por ser fuerte, sino por cómo se dobla sobre sí misma. Y ahí mismo está su punto débil.",
    categoria: "Objetos",
    color: "var(--ochre)",
    encargo: "Primer plano de un as de guía hecho con cabo grueso de barco, muy tensado.",
    fotos: [
      {
        archivo: "A colorful knot on a boat.jpg",
        autor: "Un nudo hecho con cabo trenzado de colores, amarrado en una embarcación. Fotografía de Goose Green Photography.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:A_colorful_knot_on_a_boat.jpg",
        foco: "50% 45%",
        alt: "Un nudo apretado de cuerda amarilla, roja y negra sobre el borde azul de una barca, con el chicote deshilachado.",
      },
      {
        archivo: "2010-365-315 Not Tied (5168145497).jpg",
        autor: "Una cuerda anudada alrededor del tronco de un árbol. Fotografía de Alan Levine.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:2010-365-315_Not_Tied_(5168145497).jpg",
        foco: "50% 45%",
        alt: "Primer plano en blanco y negro de una cuerda que se cruza sobre sí misma contra la corteza de un árbol.",
      },
      {
        archivo: "Double Figure-Eight Loop.jpg",
        autor: "Un nudo de ocho doble, de los que se usan en escalada. Fotografía de Arbitrarily0.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Double_Figure-Eight_Loop.jpg",
        foco: "50% 50%",
        alt: "Un nudo grueso hecho con cordino azul y negro, con dos gazas abiertas, sobre una mesa de madera clara.",
      },
      {
        archivo: "A knot on a winter boot.jpg",
        autor: "El nudo de un cordón de bota. Fotografía de Goose Green Photography.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:A_knot_on_a_winter_boot.jpg",
        foco: "50% 45%",
        alt: "Primer plano de un lazo de cordón gris con herretes metálicos sobre el cuero de una bota.",
      },
    ],
    entrada:
      "En cualquier puerto y en cualquier obra, desde hace por lo menos quince mil años. Un nudo no es un enredo ni una chapuza: es una máquina hecha de cuerda, con piezas que tienen nombre propio —senos, cocas, chicotes— y que hace un trabajo concreto y previsible. Hay cientos catalogados, cada uno bueno para una cosa y peligroso para otra. Y los que de verdad funcionan comparten una propiedad que suena a contradicción: cuanto más fuerte se tira de ellos, más apretados quedan y menos posibilidades hay de que se suelten. Entender por qué explica también cómo se rompen.",
    paginas: [
      {
        rotulo: "Cómo agarra",
        texto:
          "Una cuerda tensa entre dos manos no sujeta nada. En cuanto se dobla sobre sí misma y se cruza, la tensión de un tramo aprieta contra el otro. Ese rozamiento crece con la presión, así que tirar más fuerte significa apretar más y agarrar mejor. El límite sorprende a mucha gente: la cuerda se rompe justo donde el nudo la obliga a doblarse. Un doblez cerrado estira las fibras de la parte de fuera y aplasta las de dentro. Por eso un nudo cualquiera le quita a la cuerda entre un veinte y un cincuenta por ciento de su resistencia. Un buen nudo es también el que dobla la cuerda con curvas suaves.",
        destacado: { tipo: "cifra", cifra: "50", unidad: "% de resistencia puede perder la cuerda" },
      },
      {
        rotulo: "El nudo de rizo",
        texto:
          "El ejemplo clásico de nudo que falla es el que casi todo el mundo hace sin saber su nombre. Es el nudo de rizo, el de los cordones, y sirve para unir dos cabos del mismo grosor sin carga. En cuanto se le cuelga peso de verdad, o si los dos cabos tienen distinto diámetro, se desliza y se abre. Con eso se ha matado gente en montaña, hasta el punto de que los manuales de escalada lo prohíben expresamente para unir cuerdas. La diferencia con el nudo de vaca, que no aguanta nada, es un solo gesto de muñeca al cruzar la segunda vuelta.",
        destacado: { tipo: "frase", frase: "El nudo de los cordones no sirve para colgar peso." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron unos pocos nudos buenos que se repiten en oficios que no tienen nada que ver entre sí. El as de guía hace un lazo que no corre y se deshace aunque haya aguantado una tonelada, y lo usan marineros, bomberos y escaladores. El ballestrinque sujeta una cuerda a un palo en dos segundos y se afloja igual de rápido, que es justo lo que hace falta en un andamio. Quedó también una sociedad internacional dedicada a estudiarlos y un catálogo de miles de nudos documentados. Y quedó lo mismo que decía la entrada: la cuerda no sujeta por ser fuerte, sino por cómo se dobla sobre sí misma.",
      },
    ],
  },
  {
    id: "por-que-se-mide-en-nudos",
    titulo: "La velocidad con cuerda",
    gancho: "Una tablilla lastrada, un cordel con nudos y un reloj de arena. De ahí viene la unidad que se sigue usando hoy.",
    categoria: "Objetos",
    color: "var(--slate)",
    encargo: "Marinero echando por la popa una tablilla de madera atada a un cordel con nudos.",
    fotos: [
      {
        archivo: "Walker's Excelsior III Patent Log Huolintatalo.jpg",
        autor: "Corredera de patente en su caja de madera, con el cordel y el contador. Museo de la Fundación John Nurminen, Helsinki.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Walker%27s_Excelsior_III_Patent_Log_Huolintatalo.jpg",
        foco: "50% 62%",
        alt: "Caja de madera abierta con un instrumento de latón, una hélice y un cordel enrollado dentro.",
      },
      {
        archivo: "Sand clock Enschede.jpg",
        autor: "Reloj de arena, el cronómetro con el que se contaban los nudos. Fotografía de Gianluca Miscione.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Sand_clock_Enschede.jpg",
        foco: "50% 50%",
        alt: "Reloj de arena de madera y vidrio con la arena cayendo por el estrechamiento.",
      },
      {
        archivo: "Sextant-MnM 11 NA 59-IMG 5971.JPG",
        autor: "Sextante de latón, el otro instrumento de a bordo para saber dónde se estaba. Museo Nacional de la Marina, París.",
        licencia: "CC BY-SA 3.0 fr",
        fuente: "https://commons.wikimedia.org/wiki/File:Sextant-MnM_11_NA_59-IMG_5971.JPG",
        foco: "50% 55%",
        alt: "Sextante de latón con su arco graduado y sus espejos, sobre fondo negro.",
      },
      {
        archivo: "Sand Clock.jpg",
        autor: "Otro reloj de arena con la arena a medio caer.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Sand_Clock.jpg",
        foco: "50% 50%",
        alt: "Reloj de arena visto de cerca, con el hilo de arena cayendo al bulbo inferior.",
      },
    ],
    entrada:
      "Océano Atlántico, siglo XVI. Un barco en alta mar no tiene ninguna referencia fija para saber a qué velocidad va, porque alrededor solo hay agua moviéndose. Y necesita saberlo con precisión, ya que la única manera de calcular dónde está consiste en multiplicar velocidad por tiempo y sumar rumbos. La solución fue tan casera que asombra: un trozo de madera, una cuerda con nudos y un reloj de arena.",
    paginas: [
      {
        rotulo: "La corredera",
        texto:
          "El aparato se llamaba corredera: una tablilla de madera lastrada con plomo, atada al extremo de una cuerda larga. Al echarla por la popa, la tablilla se quedaba clavada en el agua y la cuerda salía a la velocidad del barco. Esa cuerda llevaba nudos a intervalos exactos, y un marinero contaba cuántos le pasaban entre los dedos mientras otro vigilaba un reloj de arena. Cuando la arena se acababa se gritaba, y los nudos contados eran directamente la velocidad. Los intervalos estaban calculados para que un nudo cada medio minuto fuera una milla náutica por hora. De ahí viene que hoy se diga que un barco navega a doce nudos.",
        destacado: { tipo: "frase", frase: "Un nudo cada medio minuto: una milla náutica por hora." },
      },
      {
        rotulo: "Contar sin ver tierra",
        texto:
          "Aquella medición era la pieza central de la navegación por estima, que consistía en llevar la cuenta de todo. Cada media hora se anotaban en una tablilla el rumbo de la brújula y la velocidad de la corredera. Con esos dos datos y el tiempo, el piloto dibujaba en la carta un tramo recto detrás de otro y sabía dónde estaba. El método acumula error, porque las corrientes empujan el barco de lado y la corredera no las ve. Un mes de travesía podía terminar con cientos de kilómetros de desviación, que en un océano se paga caro. Aun así fue lo único que hubo hasta los relojes fiables y el sextante.",
        destacado: { tipo: "cifra", cifra: "30", unidad: "segundos duraba el reloj de arena" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó la unidad, porque la velocidad en el mar y en el aire se sigue midiendo en nudos en todo el planeta. Un nudo es una milla náutica por hora, y esa milla no es un número arbitrario: equivale a un minuto de arco sobre la superficie de la Tierra. Quedó también una palabra, porque aquella tablilla se llamaba log en inglés y de ahí salió el nombre de los registros informáticos. Y quedó el gesto original congelado en una palabra que usa a diario gente que jamás ha visto una cuerda con nudos.",
      },
    ],
  },
  {
    id: "el-nudo-del-cirujano",
    titulo: "Un nudo que no puede ceder",
    gancho: "El hilo se moja, resbala y trabaja dentro de algo que se mueve. Si el nudo cede un milímetro, la herida se abre.",
    categoria: "Objetos",
    color: "var(--plum)",
    curioso: true,
    encargo: "Manos con guantes atando un nudo quirúrgico con hilo fino sobre un soporte de práctica.",
    entrada:
      "Quirófanos del mundo entero, con la técnica moderna asentada desde finales del siglo XIX. Coser un tejido vivo tiene un problema que no aparece en otra costura, porque el hilo se moja, resbala y trabaja dentro de algo que se mueve. Si el nudo cede un milímetro, la herida se abre o un vaso vuelve a sangrar. Por eso el nudo quirúrgico se enseña como un gesto de precisión.",
    paginas: [
      {
        rotulo: "La primera vuelta",
        texto:
          "El nudo quirúrgico básico se parece al de los cordones y lleva una diferencia decisiva en la primera vuelta. En lugar de pasar el hilo una vez, se pasa dos, de modo que el rozamiento se duplica y la lazada se queda quieta. Eso resuelve el problema clásico, que es que la primera vuelta se afloja justo cuando el cirujano suelta para hacer la segunda. Encima se coloca una vuelta cruzada al revés, que bloquea la de abajo y cierra el conjunto. La tensión importa tanto como el nudo, porque apretar de más corta el riego al tejido. Se aprieta hasta que los bordes se tocan, ni un milímetro más.",
        destacado: { tipo: "frase", frase: "Dos vueltas en la primera lazada: no se afloja al soltar." },
      },
      {
        rotulo: "Hilo que desaparece",
        texto:
          "El otro cambio grande no fue el nudo, sino el material con el que se ata. Durante siglos se usó tripa de oveja tratada, que el cuerpo digiere y desaparece sola a las pocas semanas. Su problema era que provocaba reacción y que cada lote duraba lo que le daba la gana. Desde los años setenta se usan hilos de plástico diseñados para romperse con el agua del cuerpo a un ritmo previsto. El cirujano elige el hilo por el plazo que necesita, porque una herida de piel se sostiene en una semana y un tendón tarda meses. Para lo que no debe ceder nunca se usa hilo que no se disuelve.",
        destacado: { tipo: "cifra", cifra: "7", unidad: "días tarda la piel en sostenerse sola" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una destreza manual que se sigue aprendiendo con las manos y no con libros, atando cientos de nudos sobre un soporte de práctica. Quedaron también las grapas y los pegamentos quirúrgicos, que son más rápidos y no valen para todo, de modo que el hilo no se ha ido. Y quedó una coincidencia que dice bastante del asunto, porque el nudo que usa un cirujano para cerrar una arteria es primo hermano del que usa un marinero para amarrar un cabo. Los dos resuelven lo mismo con lo mismo: una cuerda que solo agarra si se dobla bien sobre sí misma.",
      },
    ],
  },
];
