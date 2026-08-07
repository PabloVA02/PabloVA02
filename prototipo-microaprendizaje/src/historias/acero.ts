import type { Short } from "../shorts";

/* ==========================================================================
   Acero.

   El riesgo del tema es la metalurgia: aleaciones, temples, porcentajes de
   carbono. Se entiende al leerlo y se olvida en el acto.

   La regla del tema: el acero se cuenta por SU PRECIO Y POR EL DESCUIDO
   QUE LO CAMBIÓ. Una receta que se pierde porque se agota una mina. Un
   procedimiento que baja el coste a una fracción en veinte años. Una
   muestra descartada en un patio que sigue brillando. Es un material que
   solo importa cuando pasa de caro a barato, y ahí está la historia.

   Y siempre se dice qué se pudo construir después que antes no.
   ========================================================================== */

export const ACERO: Short[] = [
  {
    id: "acero-de-damasco",
    titulo: "El acero de Damasco",
    gancho: "Hojas con vetas como el agua, imposibles de imitar, y la receta se perdió en el siglo XVIII.",
    categoria: "Acero",
    color: "var(--slate)",
    encargo: "La hoja de una espada antigua con ondulaciones claras y oscuras en la superficie.",
    fotos: [
      {
        archivo: "Front and back of blades of hair-cutting shears made from Damascus steel.jpg",
        autor: "Las vetas del acero de damasco en las hojas de unas tijeras. Fotografía de Pittigrilli.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Front_and_back_of_blades_of_hair-cutting_shears_made_from_Damascus_steel.jpg",
        foco: "50% 50%",
        alt: "Dos hojas de acero pulido recorridas por vetas onduladas claras y oscuras, como las de la madera.",
      },
      {
        archivo:
          "A masterpiece of blacksmith craftsmanship - Damascus knife in a very modern Bowie knife design forged from cannon steel from the Leopard I main battle tank. Length of the knife blade 26 centimeters. Picture one.jpg",
        autor: "Un cuchillo forjado en acero de damasco moderno. Fotografía de Lupus in Saxonia.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:A_masterpiece_of_blacksmith_craftsmanship_-_Damascus_knife_in_a_very_modern_Bowie_knife_design_forged_from_cannon_steel_from_the_Leopard_I_main_battle_tank._Length_of_the_knife_blade_26_centimeters._Picture_one.jpg",
        foco: "50% 50%",
        alt: "La hoja de un cuchillo grande con el dibujo del damasco recorriéndola de punta a mango.",
      },
      {
        archivo: "Nanotube Soot (6648549965).jpg",
        autor: "Hollín de nanotubos de carbono al microscopio. Es la clase de estructura que se encontró dentro del acero antiguo.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Nanotube_Soot_(6648549965).jpg",
        foco: "50% 50%",
        alt: "Una maraña de filamentos finísimos vista al microscopio electrónico.",
      },
      {
        archivo: "Quantum dot circuit (24964113547).jpg",
        autor: "Imagen de microscopio electrónico: así se mira hoy lo que hay dentro de un metal.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Quantum_dot_circuit_(24964113547).jpg",
        foco: "50% 50%",
        alt: "Estructuras metálicas muy ampliadas al microscopio electrónico, en grises.",
      },
    ],
    entrada:
      "Oriente Próximo, siglos IX a XVIII. Los herreros forjan hojas de espada con un dibujo de bandas onduladas en la superficie, como vetas de madera o remolinos de agua, y con una fama enorme de dureza y de filo. El acero de partida llega en tortas desde la India. En algún momento del siglo XVIII la producción se para y la técnica se pierde por completo. No queda un solo herrero capaz de repetirla, ni un manual, ni una receta: solo quedan las hojas ya hechas. Durante doscientos años nadie ha conseguido fabricar una igual sabiendo de antemano lo que iba a salir. Y cuando se metió una hoja antigua en un microscopio de los buenos, lo que apareció dentro no lo esperaba nadie.",
    paginas: [
      {
        rotulo: "Las vetas",
        texto:
          "El material de partida se fabricaba en crisoles cerrados, calentando mineral de hierro con madera y con hojas de determinadas plantas durante días, y salía en forma de tortas del tamaño de un puño con un contenido de carbono muy alto. Al forjarlo despacio y a temperatura controlada aparecían unas bandas de carburo de hierro que dan el dibujo característico. Ese dibujo no es una decoración añadida: está en la estructura interna del metal y reaparece si se lija la superficie, cosa que no ocurre con las imitaciones grabadas con ácido que se vendieron después.",
        destacado: { tipo: "frase", frase: "El dibujo no está pintado: reaparece al lijar la hoja." },
      },
      {
        rotulo: "Los nanotubos",
        texto:
          "En 2006, un equipo alemán disolvió con ácido una muestra de una hoja auténtica del siglo XVII y examinó los restos con un microscopio electrónico. Encontró nanotubos de carbono, unas estructuras tubulares de pocos nanómetros que se creían un descubrimiento de los años noventa, y dentro de ellos, hilos de carburo de hierro. La hipótesis es que ciertas impurezas del mineral indio, como el vanadio y el manganeso, actuaban de catalizador durante el ciclo lento de calentamiento y enfriamiento. Los herreros no sabían nada de esto: seguían una receta heredada.",
        destacado: { tipo: "cifra", cifra: "2006", unidad: "el año que se miró al microscopio" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La explicación más aceptada de la pérdida es sencilla y algo decepcionante: se agotaron las minas concretas de la India cuyo mineral traía esas impurezas, y con otro mineral la receta dejaba de funcionar aunque se siguiera al pie de la letra. Los herreros no podían saber por qué, porque el ingrediente decisivo era invisible y estaba en una proporción diminuta. Varios grupos han conseguido reproducir hojas con vetas parecidas en las últimas décadas, ajustando la composición y el ciclo térmico, pero el procedimiento original sigue sin recuperarse tal como era.",
      },
    ],
  },

  {
    id: "acero-barato",
    titulo: "El acero fue una joya",
    gancho: "En 1856 se abarató tanto que en veinte años se usaba para vías, vigas y latas de conserva.",
    categoria: "Acero",
    color: "var(--clay)",
    encargo: "Un convertidor con forma de pera inclinado soltando una llamarada enorme.",
    entrada:
      "Inglaterra, 1856. El acero es un material caro y escaso que se fabrica en cantidades pequeñas y se reserva para muelles, herramientas y cubiertos: producir una tonelada cuesta días de trabajo y una montaña de carbón. Un ingeniero presenta ante la asociación británica un procedimiento que promete hacerlo en veinte minutos y sin combustible añadido.",
    paginas: [
      {
        rotulo: "El aire",
        texto:
          "La idea parecía absurda: soplar aire frío a través del hierro fundido. Lo que ocurre es que el oxígeno del aire quema el exceso de carbono y las impurezas del metal, y esa combustión libera tanto calor que la masa no solo no se enfría, sino que sube de temperatura y se mantiene líquida ella sola. El convertidor era un recipiente en forma de pera que se inclinaba para vaciarlo, con toberas en el fondo, y el proceso entero producía una llamarada espectacular de varios metros que se veía desde media ciudad.",
        destacado: { tipo: "frase", frase: "Se sopla aire frío y el metal, en vez de enfriarse, se calienta." },
      },
      {
        rotulo: "El fósforo",
        texto:
          "Las primeras licencias fueron un desastre y estuvieron a punto de arruinarle: el procedimiento funcionaba con unos minerales y no con otros, y nadie entendía por qué. El culpable resultó ser el fósforo, que el aire no elimina y que vuelve el acero quebradizo. La solución llegó en 1878, cuando dos primos, un empleado de juzgado y un químico, propusieron revestir el interior del convertidor con un material básico que atrapa el fósforo en la escoria. Con eso se pudo usar el mineral europeo corriente, que casi todo lo lleva.",
        destacado: { tipo: "cifra", cifra: "20", unidad: "minutos por tonelada, en lugar de días" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El precio del acero cayó a una fracción del anterior en menos de dos décadas, y con él llegaron los raíles capaces de aguantar trenes pesados, las vigas de los primeros rascacielos, los cascos de barco, la alambrada de las praderas, las latas de conserva y los muelles de los relojes baratos. Es uno de los pocos inventos de los que se puede decir que cambiaron el aspecto de las ciudades en una sola generación. El procedimiento se sustituyó a mediados del siglo XX por otro que usa oxígeno puro en vez de aire.",
      },
    ],
  },

  {
    id: "inoxidable-por-descarte",
    titulo: "El inoxidable salió de la basura",
    gancho: "Buscaba un acero para cañones y descartó unas muestras. Semanas después seguían brillando.",
    categoria: "Acero",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Restos de metal oxidado amontonados en un patio, con una pieza limpia entre ellos.",
    entrada:
      "Sheffield, en el norte de Inglaterra, 1913. Un metalúrgico trabaja por encargo del ejército en un problema muy concreto: los cañones se desgastan por dentro con el rozamiento y el calor de los disparos, y hace falta un acero que aguante más tiempo. Prueba decenas de mezclas con distintos metales y va tirando al patio las que no sirven.",
    paginas: [
      {
        rotulo: "El montón",
        texto:
          "Una de las variantes llevaba una proporción alta de cromo y no dio buen resultado para lo que buscaba, así que fue a parar al montón de desechos del patio, a la intemperie y bajo la lluvia. Semanas más tarde, al pasar por delante, se dio cuenta de que todas las muestras estaban cubiertas de óxido menos aquella, que seguía brillando como el primer día. El motivo es que el cromo, en cuanto toca el aire, forma en la superficie una capa de óxido finísima, transparente y muy compacta, que sella el metal y se regenera sola si se raya.",
        destacado: { tipo: "frase", frase: "Todas oxidadas menos una, que seguía brillando." },
      },
      {
        rotulo: "Los cuchillos",
        texto:
          "Entendió enseguida para qué servía de verdad, y no era para el ejército: en su ciudad la industria principal era la cuchillería, y los cuchillos de mesa se manchaban y se picaban con la comida, sobre todo con la fruta y el vinagre, hasta el punto de que había que limpiarlos con polvo abrasivo después de cada uso. Convenció a un fabricante local para hacer una tanda de prueba y funcionó a la primera. Lo llamó al principio acero que no mancha, y el nombre que se quedó decía lo mismo de otra manera.",
        destacado: { tipo: "cifra", cifra: "1913", unidad: "el año de las muestras al patio" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Las patentes fueron un lío considerable, porque varios investigadores de Alemania, Francia y Estados Unidos habían llegado a aleaciones parecidas por su cuenta en los mismos años, y él nunca cobró demasiado por el hallazgo. Hoy ese material está en los fregaderos, en los instrumentos quirúrgicos, en las tuberías de las fábricas de leche, en los tanques químicos y en los cubiertos de cualquier cocina del mundo, y es de los pocos metales que se reciclan casi por completo. Empezó como una muestra descartada que alguien se molestó en mirar dos veces.",
      },
    ],
  },
];
