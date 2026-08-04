import type { Short } from "../shorts";

/* ==========================================================================
   Los ríos.

   Fronteras, carreteras, alcantarillas y despensas, todo a la vez. El tema se
   estropea si se cuenta como geografía: longitudes, caudales y afluentes no
   le interesan a nadie.

   La regla del tema: un río se cuenta por lo que DECIDE. Dónde acaba un país,
   quién bebe, quién pierde la cosecha. Y siempre se recuerda que un río se
   mueve: cambia de curso, se seca, se desvía, y todo lo que los humanos hemos
   construido a su alrededor da por hecho que se quedará donde está.
   ========================================================================== */

export const RIOS: Short[] = [
  {
    id: "la-frontera-que-se-movio",
    titulo: "Un río cambió de curso y movió la frontera",
    gancho: "Se llevó seiscientas hectáreas de un país al otro, y el pleito duró cien años.",
    categoria: "Ríos",
    color: "var(--ochre)",
    encargo: "Un meandro de río visto desde el aire, con una orilla de tierra clara.",
    entrada:
      "Frontera entre México y Estados Unidos, 1864. Un tratado firmado dieciséis años antes fija la línea entre los dos países en el cauce de un río. El problema aparece cuando el río, que corre por una llanura de arena, se desplaza durante una crecida y deja al norte un terreno que estaba al sur, con casas, campos y varios centenares de vecinos dentro.",
    paginas: [
      {
        rotulo: "Qué manda",
        texto:
          "El derecho internacional distingue dos casos y ahí estaba el nudo del asunto. Si un río se desplaza poco a poco, arrastrando tierra de una orilla y depositándola en la otra, la frontera se mueve con él. Si en cambio salta de golpe y abre un cauce nuevo en una avenida, la frontera se queda donde estaba y el terreno sigue perteneciendo a quien lo tenía. Cada país sostuvo la interpretación que le convenía, y como el río se había movido a ratos deprisa y a ratos despacio, los dos tenían argumentos.",
        destacado: { tipo: "frase", frase: "Si el río se mueve despacio, la frontera lo sigue." },
      },
      {
        rotulo: "Cien años",
        texto:
          "El terreno en disputa eran unas seiscientas hectáreas en mitad de dos ciudades que crecían pegadas una a otra, con barrios enteros construidos encima. Un tribunal internacional falló en 1911 repartiéndolo, y uno de los dos países no aceptó el fallo. El asunto se enquistó, envenenó las relaciones durante décadas y solo se resolvió en 1963 con un acuerdo político: se repartió el terreno, se indemnizó a los vecinos realojados y, para que aquello no volviera a pasar, se encauzó el río en un canal de hormigón revestido, con la línea fronteriza fijada en el centro del canal y no en el agua.",
        destacado: { tipo: "cifra", cifra: "100", unidad: "años duró el conflicto" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un parque conmemorativo a cada lado y una lección repetida en muchas otras fronteras del mundo, porque una parte enorme de las fronteras internacionales sigue el curso de un río. Los tratados modernos ya no dicen simplemente el río, sino que fijan coordenadas y establecen qué pasa si el cauce se mueve. Y quedó el río, metido en un canal de hormigón: para que la línea entre dos países dejara de discutirse, hubo que quitarle al río la posibilidad de cambiar de sitio, que es lo que llevaba haciendo desde mucho antes de que existiera ninguna frontera.",
      },
    ],
  },
  {
    id: "un-rio-con-derechos",
    titulo: "Hay un río que es legalmente una persona",
    gancho: "Desde 2017 tiene derechos propios y dos representantes que hablan en su nombre ante los tribunales.",
    categoria: "Ríos",
    color: "var(--slate)",
    curioso: true,
    encargo: "Un río ancho y tranquilo entre colinas verdes, con niebla baja.",
    entrada:
      "Nueva Zelanda, 2017. El parlamento aprueba una ley que reconoce a un río del norte del país la condición de persona jurídica, con derechos y deberes propios, después de un pleito iniciado por la comunidad indígena de su cuenca en 1873. Es el litigio más largo de la historia del país y termina con una figura legal que casi nadie había usado antes para un accidente geográfico.",
    paginas: [
      {
        rotulo: "Qué significa",
        texto:
          "Ser persona jurídica no es una metáfora poética: es la misma categoría que tiene una empresa o una fundación. Significa que el río puede ser titular de bienes, comparecer en juicio y recibir indemnizaciones si alguien lo daña, sin que haga falta demostrar que ese daño perjudica a una persona concreta, que era justamente el obstáculo de siempre. Dos guardianes, uno nombrado por el Estado y otro por la comunidad indígena, actúan en su nombre y deciden juntos qué reclamar y a quién. La ley les obliga a ponerse de acuerdo: ninguno de los dos puede actuar solo.",
        destacado: { tipo: "frase", frase: "El río puede ir a juicio, y dos personas hablan por él." },
      },
      {
        rotulo: "De dónde sale",
        texto:
          "La idea viene de la forma de entender el río de la comunidad que vive en su cuenca, que no lo considera un recurso sino un antepasado y una unidad indivisible desde la montaña hasta el mar. La ley recoge esa idea literalmente y trata al río como un todo: cauce, afluentes, lecho y elementos físicos y espirituales. La fórmula ha viajado deprisa: en el mismo año, un tribunal indio reconoció derechos a dos ríos, y después han seguido casos en Bangladés, Colombia, Ecuador y varios municipios de otros países.",
        destacado: { tipo: "cifra", cifra: "144", unidad: "años duró el pleito hasta la ley" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un debate jurídico serio y abierto. Los partidarios señalan que funciona: da a alguien legitimidad clara para defender el río sin tener que demostrar un perjuicio propio. Los críticos responden que el reconocimiento sirve de poco si no viene con dinero, con personal y con capacidad real de hacer cumplir las sentencias, y que en algunos países se ha quedado en papel mojado. Lo que nadie discute es lo que revela: durante siglos, un río contaminado solo podía llegar a un tribunal si el daño perjudicaba de paso a un propietario, y sin propietario damnificado no había caso.",
      },
    ],
  },
  {
    id: "el-rio-que-no-llega-al-mar",
    titulo: "Hay grandes ríos que ya no llegan al mar",
    gancho: "Se reparten entre siete estados y dos países, y al final del recorrido no queda agua que repartir.",
    categoria: "Ríos",
    color: "var(--plum)",
    encargo: "Un cauce seco de arena y grava con matorral creciendo en el fondo.",
    entrada:
      "Suroeste de Norteamérica, 1922. Siete estados firman un pacto para repartirse el agua de un río grande que atraviesa desiertos y alimenta ciudades y campos de cultivo. El reparto se hace sobre las mediciones de las dos décadas anteriores, que resultaron ser, sin que nadie lo supiera entonces, las más lluviosas de los últimos siglos. Se repartió más agua de la que el río lleva.",
    paginas: [
      {
        rotulo: "El reparto",
        texto:
          "El pacto asignó cantidades fijas a cada mitad de la cuenca y, más tarde, un tratado internacional añadió una parte para el país vecino, aguas abajo. La suma de todos los derechos supera lo que el río lleva en un año normal, y con la sequía prolongada de las últimas décadas la diferencia se ha vuelto insostenible. Como los derechos son antiguos y jerárquicos —quien llegó primero cobra primero—, los recortes no se reparten por igual, sino que caen sobre los usuarios más recientes, muchas veces ciudades enteras que llegaron después que las explotaciones agrícolas.",
        destacado: { tipo: "frase", frase: "Se repartió sobre los años más lluviosos que se recordaban." },
      },
      {
        rotulo: "El delta",
        texto:
          "El resultado es visible desde el aire. Desde los años sesenta, el río deja de correr antes de llegar al mar en la mayoría de los años: el último tramo es un cauce de arena con matorral, y el delta, que era una zona húmeda enorme llena de aves y de pesca, se ha reducido a una fracción mínima de su tamaño. En 2014 se soltó agua a propósito desde una presa durante unas semanas, en un experimento internacional, y el agua llegó al mar por primera vez en años.",
        destacado: { tipo: "cifra", cifra: "7", unidad: "estados y dos países se reparten el río" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "No es un caso aislado: hay varios ríos grandes del mundo que en muchos años no llegan al mar por la misma combinación de riego intensivo, presas y crecimiento urbano. Quedó también un ejemplo de manual sobre cómo se reparten los recursos: un acuerdo firmado con los datos de una racha buena se convierte, cuando la racha acaba, en una fuente permanente de conflicto. Y quedó una imagen difícil de olvidar, la de un río grande que se acaba en mitad del desierto sin que nadie se lo haya bebido de golpe.",
      },
    ],
  },
];
