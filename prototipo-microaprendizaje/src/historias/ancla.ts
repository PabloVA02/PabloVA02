import type { Short } from "../shorts";

/* ==========================================================================
   El ancla.

   Un objeto que todo el mundo cree entender y casi nadie entiende, porque
   no sujeta por lo que parece. El tema se estropea si se cuenta como
   historia de la navegación.

   La regla del tema: la idea madre es que NADA SUJETA POR SU PROPIO PESO,
   sino por cómo se agarra o por cómo reparte la fuerza. Se aplica al mar,
   al océano abierto y a un edificio, y se explica la física antes del uso.
   ========================================================================== */

export const ANCLA: Short[] = [
  {
    id: "el-ancla-no-sujeta-por-peso",
    titulo: "Por qué agarra un ancla",
    gancho: "Un buque de cien mil toneladas se queda quieto con un ancla de diez. Lo que sujeta es el fondo y la cadena.",
    categoria: "Barcos",
    color: "var(--slate)",
    encargo: "Ancla de uñas enterrada a medias en la arena del fondo, con la cadena tumbada.",
    /* El ancla donde trabaja —en el fondo—, el ancla en seco para verle las
       uñas, la cadena que es la otra mitad del truco, y una proa con el ancla
       echada, que es de donde viene la expresión. */
    fotos: [
      {
        archivo: "Ancla, Anchor Bay, Malta, Malta, 2021-08-24, DD 12.jpg",
        autor:
          "Un ancla en el fondo de la bahía de Anchor Bay, en Malta, ya cubierta de vida marina. Fotografía de Diego Delso, 2021.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Ancla,_Anchor_Bay,_Malta,_Malta,_2021-08-24,_DD_12.jpg",
        foco: "50% 50%",
        alt: "Un ancla grande posada en el fondo arenoso de un mar transparente, incrustada de algas y piedra.",
      },
      {
        archivo: "Sydney (AU), Coastal Cliff Walk, Dunbar Anchor -- 2019 -- 2328.jpg",
        autor:
          "El ancla del velero Dunbar, naufragado en 1857 y rescatada un siglo después. Se le ven las dos uñas, las palas que se clavan en el fondo. Sídney, Australia. Fotografía de Dietmar Rabich, 2019.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Sydney_(AU),_Coastal_Cliff_Walk,_Dunbar_Anchor_--_2019_--_2328.jpg",
        foco: "45% 55%",
        alt: "Un ancla antigua de hierro, con sus dos brazos curvados acabados en pala, apoyada sobre un muro de piedra junto a una placa de bronce.",
      },
      {
        archivo: "ARTHUR B. HOMER Windlass & Anchor Chain.jpg",
        autor:
          "El molinete de un carguero de los Grandes Lagos, la máquina que recoge la cadena, con los eslabones enfilados hacia el pozo. Puerto de Duluth, 1978. Fotografía de Gary Todd.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:ARTHUR_B._HOMER_Windlass_%26_Anchor_Chain.jpg",
        foco: "50% 50%",
        alt: "Maquinaria pesada de cubierta pintada de marrón, con un tambor dentado por el que pasa una cadena de eslabones muy gruesos.",
      },
      {
        archivo: "La proa del buque. Tenía el ancla echada. La marea estaba muy alta (16626733765).jpg",
        autor:
          "La proa de un patrullero de la Armada española con el ancla echada, en los muelles de Marín, Pontevedra. Fotografía de Contando Estrelas, 2015.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:La_proa_del_buque._Ten%C3%ADa_el_ancla_echada._La_marea_estaba_muy_alta_(16626733765).jpg",
        foco: "50% 50%",
        alt: "La proa de un barco de guerra gris vista de cerca, con la cadena del ancla saliendo por el escobén hacia el agua.",
      },
    ],
    entrada:
      "Todos los mares del mundo, con el diseño actual asentado desde 1821. Un barco grande lleva un ancla que pesa una milésima parte de lo que pesa él, y aun así aguanta el viento y la corriente. Un ancla que sujetara por peso tendría que pesar tanto como el barco. La explicación no está en el hierro, sino en dos cosas que trabajan juntas. Una es la forma del ancla, que se clava en el fondo en cuanto se tira de ella. La otra es el peso de la cadena tumbada, que se encarga de que se tire siempre en la dirección correcta. Si la cadena se levantara del fondo, el ancla saldría de un tirón y el barco se iría a la deriva.",
    paginas: [
      {
        rotulo: "Morder el fondo",
        texto:
          "Un ancla moderna lleva dos brazos con forma de pala que se llaman uñas. Al arrastrarla por el fondo, esas palas se ponen de canto y se entierran en la arena o en el fango. Cuanto más tira el barco, más se clavan, porque la fuerza empuja las palas hacia abajo. Lo que sujeta al final no es el ancla, sino la masa de fondo marino que hay encima de ella. Un ancla bien enterrada puede aguantar veinte o treinta veces su propio peso sin moverse. En un fondo de roca o de hierba marina no se clava, y ahí el fondeo falla siempre.",
        destacado: { tipo: "frase", frase: "Lo que sujeta es el fondo que queda encima del ancla." },
      },
      {
        rotulo: "La cadena",
        texto:
          "La segunda mitad del truco está en la cadena, y es la parte que más gente ignora. Se suelta mucha más cadena de la profundidad que hay, normalmente entre tres y siete veces más. Con esa longitud, un tramo largo de cadena queda tumbado en el fondo formando una curva. Esa curva hace que el tirón llegue al ancla en horizontal y no hacia arriba. Si el tirón fuera vertical, el ancla se desenterraría al primer golpe de ola. La cadena hace además de muelle, porque hay que levantarla del fondo antes de tensar nada.",
        destacado: { tipo: "cifra", cifra: "30", unidad: "veces su peso puede aguantar un ancla" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un diseño que apenas ha cambiado en dos siglos y que todavía se llama por el apellido de su inventor. Quedaron también unas cuantas expresiones del idioma común que vienen directamente de fondear un barco. Echar el ancla, levar anclas o estar anclado significan casi lo mismo dentro y fuera del mar. Todas hablan de lo mismo: quedarse quieto donde uno decide. Quedó un problema moderno que preocupa bastante, porque las anclas de los buques arrasan el fondo al arrastrarse. En zonas de praderas submarinas y de corales, un solo fondeo puede destrozar lo que tardó siglos en crecer.",
      },
    ],
  },
  {
    id: "el-ancla-flotante",
    titulo: "El ancla que no toca fondo",
    gancho: "En mitad del océano no hay fondo al alcance. Se echa un saco de tela que frena el barco contra el propio agua.",
    categoria: "Barcos",
    color: "var(--clay)",
    encargo: "Cono de tela reforzada abierto bajo el agua, tirando de un cabo hacia la superficie.",
    entrada:
      "Alta mar, con el recurso usado por los navegantes desde el siglo XVIII. Cuando un barco se ve sorprendido por un temporal lejos de la costa, el fondo puede estar a cuatro mil metros y no hay ancla que llegue. El peligro no es hundirse, sino ponerse de lado a las olas y volcar. La solución es un ancla que no se clava en nada y trabaja contra el agua.",
    paginas: [
      {
        rotulo: "Poner la proa",
        texto:
          "Una ola grande no hunde un barco si le llega de frente, porque la proa está hecha para partirla. La misma ola llegando de costado lo levanta por un lado y lo puede tumbar entero. Un barco parado en el mar tiende a ponerse de lado, porque el viento empuja más la parte alta. El ancla flotante es un cono de tela reforzada que se echa por la proa atado a un cabo largo. Se llena de agua y frena esa punta del barco, de modo que el viento no puede girarlo. El barco queda mirando a las olas y baja su velocidad de deriva a casi nada.",
        destacado: { tipo: "frase", frase: "De frente la ola se parte; de lado te tumba." },
      },
      {
        rotulo: "El saco",
        texto:
          "El aparato es sencillísimo y su fuerza depende solo de dos cosas medibles. Una es la superficie de tela que se opone al agua, y la otra es la velocidad. La resistencia crece con el cuadrado de la velocidad, así que frenar poco es muy fácil y frenar mucho es carísimo. Un cono de un metro de boca genera toneladas de tirón en un barco que va a pocos nudos. El cabo tiene que ser larguísimo y elástico, para que el tirón no llegue de golpe. Y lleva un cabo fino por el otro extremo, porque recogerlo de frente es imposible a mano.",
        destacado: { tipo: "cifra", cifra: "4000", unidad: "metros de fondo donde ningún ancla llega" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un equipo obligatorio en cualquier travesía oceánica y en muchos barcos de pesca de altura. Quedó también el mismo principio en el aire, porque un paracaídas es exactamente lo mismo con otro fluido. Los aviones de combate llevan uno pequeño en la cola para frenar al aterrizar en pista corta. Las cápsulas espaciales bajan con varios enormes, y algunos coches de carreras los usaban antiguamente. Y quedó una imagen que explica el invento entero, porque un ancla flotante no agarra nada. Se limita a hacer que mover el barco cueste mucho más trabajo del que el viento puede pagar.",
      },
    ],
  },
  {
    id: "el-ancla-de-los-edificios",
    titulo: "Los edificios llevan anclas",
    gancho: "Un rascacielos no se cae por su peso: se caería levantándose. El viento tira hacia arriba de una esquina.",
    categoria: "Ciudades",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Cabeza de anclaje con placa cuadrada de acero sobre un muro de contención de roca.",
    entrada:
      "Cualquier ciudad con edificios altos, con el cálculo moderno asentado desde 1960. Un rascacielos parece que solo tiene que aguantar su propio peso hacia abajo, y ese es el problema fácil. El difícil es el viento, que lo empuja de lado y trata de volcarlo como si fuera una palanca. Al volcar, un lado del edificio se comprime y el otro se levanta del suelo.",
    paginas: [
      {
        rotulo: "Hacia arriba",
        texto:
          "El hormigón aguanta muy bien que lo aplasten y muy mal que tiren de él. Un pilar comprimido trabaja de maravilla, y ese mismo pilar estirado se agrieta enseguida. Cuando el viento empuja un edificio alto, la cimentación del lado contrario recibe un tirón hacia arriba. Si ese tirón supera el peso que hay encima, el edificio empieza a levantarse por esa esquina. La solución se llama anclaje, y consiste en barras de acero metidas en el terreno y tensadas. Esas barras cosen el edificio a la roca de debajo igual que una cadena cose el barco al fondo.",
        destacado: { tipo: "frase", frase: "El hormigón aguanta que lo aplasten, no que tiren de él." },
      },
      {
        rotulo: "Anclar y tensar",
        texto:
          "Un anclaje se hace perforando un agujero profundo, metiendo un cable de acero y llenando el hueco de mortero. Cuando el mortero fragua, se tira del cable con un gato hidráulico hasta dejarlo muy tenso. Esa tensión previa es la clave, porque el anclaje ya está trabajando antes de que sople el viento. Así el terreno queda apretado contra la cimentación y no hay holgura donde el edificio pueda moverse. El mismo sistema sujeta los taludes de las carreteras y las paredes de roca sobre las vías. Esas placas cuadradas de acero que se ven en un muro son la cabeza de un anclaje.",
        destacado: { tipo: "cifra", cifra: "1960", unidad: "el año en que se generalizó el cálculo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una técnica que se aplica igual a un rascacielos, a una presa y a un aerogenerador de campo. Los molinos de viento grandes son el caso extremo, porque su peso es pequeño y el empuje enorme. Su cimentación es una tarta de hormigón de cientos de toneladas enterrada, y aun así lleva anclajes. Quedó también una tarea de mantenimiento que casi nadie ve, porque un anclaje pierde tensión con los años. Hay que medirlos cada cierto tiempo y volver a tensarlos, igual que se revisa la cadena de un barco.",
      },
    ],
  },
];
