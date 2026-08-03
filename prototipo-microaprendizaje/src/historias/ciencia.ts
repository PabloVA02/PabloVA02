import type { Short } from "../shorts";

/* ==========================================================================
   Ciencia.

   Física y química, que son las dos asignaturas que más gente recuerda con
   antipatía. El riesgo del tema es evidente: la fórmula, la unidad y el
   nombre del efecto. Nada de eso se cuenta aquí.

   La regla del tema: se cuenta el MOMENTO EN QUE ALGUIEN NO SABÍA. La tabla
   periódica antes de estar ordenada, con los elementos como cartas sueltas.
   Un cuaderno que sigue radiactivo cien años después. Un eclipse en una isla
   con nubes decidiendo si el universo funciona de otra manera. La ciencia se
   entiende bien contada como lo que fue: gente perdida buscando a tientas.

   Si hace falta un concepto técnico, se explica con un objeto de la cocina y
   se sigue adelante. No hay ninguna ecuación en esta sección.
   ========================================================================== */

export const CIENCIA: Short[] = [
  {
    id: "tabla-periodica",
    titulo: "La tabla periódica dejó huecos para lo que faltaba",
    gancho: "Su autor no solo ordenó lo que se conocía: predijo tres elementos que nadie había visto.",
    categoria: "Ciencia",
    color: "var(--slate)",
    encargo: "Una cuartilla antigua con símbolos químicos escritos a mano y tachones.",
    entrada:
      "Rusia, 1869. Se conocen sesenta y tres elementos químicos —el oxígeno, el hierro, el oro— y no hay manera de ordenarlos: cada uno se descubrió por su lado y nadie sabe si son sesenta y tres o si faltan. Un profesor de química de treinta y cinco años está escribiendo un manual para sus alumnos y necesita presentarlos en algún orden que se entienda.",
    paginas: [
      {
        rotulo: "Las cartas",
        texto:
          "Escribió cada elemento en una ficha con su peso y sus propiedades y se puso a colocarlas sobre la mesa como quien hace un solitario, buscando qué agrupaciones tenían sentido. Al ordenarlos por peso, ciertas propiedades se repetían cada cierto número de posiciones, igual que las notas de una escala. Contó él mismo, años después, que llevaba tres días sin dormir cuando la disposición definitiva se le apareció en un sueño, con todos los elementos colocados en su casilla; al despertar la escribió de un tirón en el reverso de una carta y solo tuvo que corregir un sitio. La hoja original se conserva.",
        destacado: { tipo: "frase", frase: "Escribió cada elemento en una ficha y jugó a un solitario." },
      },
      {
        rotulo: "Los huecos",
        texto:
          "Lo verdaderamente audaz vino después. En vez de forzar la tabla para que encajaran todos, dejó casillas vacías donde el patrón exigía un elemento que nadie conocía, y se atrevió a describir cómo serían: peso aproximado, color, densidad y hasta con qué reaccionarían. Sus colegas lo tomaron por una excentricidad. Entre 1875 y 1886 aparecieron tres de aquellos elementos, descubiertos por investigadores de tres países distintos que no buscaban confirmarle nada, y sus propiedades coincidían con lo predicho hasta el segundo decimal en algún caso. A partir de ahí ya nadie discutió la tabla, y a él se le empezó a considerar otra cosa.",
        destacado: { tipo: "cifra", cifra: "3", unidad: "elementos predichos aparecieron después" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Se le escaparon cosas. No previó los gases nobles, una columna entera que se descubrió en la década siguiente y que hubo que añadir al final, y su criterio de ordenación —el peso— resultó estar equivocado: lo correcto es el número de protones, que no se supo hasta 1913 y que arregla las tres o cuatro parejas que él había tenido que colocar al revés. Hoy la tabla tiene ciento dieciocho elementos y los últimos no existen en la naturaleza en ninguna parte: se fabrican de uno en uno estrellando átomos y duran milésimas de segundo antes de deshacerse. Uno de ellos lleva su apellido, cosa que él no llegó a saber.",
      },
    ],
  },

  {
    id: "cuaderno-radiactivo",
    titulo: "Sus cuadernos siguen radiactivos cien años después",
    gancho: "Guardaba material luminoso en un cajón porque le parecía bonito. Aquello la mató, y su libreta sigue peligrosa.",
    categoria: "Ciencia",
    color: "var(--forest)",
    encargo: "Un cuaderno de laboratorio antiguo, abierto, con anotaciones a mano y manchas.",
    entrada:
      "París, 1898. Un matrimonio de científicos trabaja en un cobertizo con goteras del que ellos mismos dicen que en invierno hace el mismo frío que en la calle. Están intentando aislar una sustancia nueva a partir de toneladas de un mineral de desecho traído de una mina de Bohemia, en la actual Chequia. Tardarán cuatro años y sacarán un décimo de gramo.",
    paginas: [
      {
        rotulo: "El cobertizo",
        texto:
          "El trabajo era físico y brutal. Ella removía a mano, con una barra de hierro casi tan alta como ella, calderos de veinte kilos de mineral hervido, al aire libre y en un patio, para ir concentrando el material paso a paso; escribió que al final de la jornada quedaba molida. De ocho toneladas de residuo obtuvieron un gramo escaso de una sal que brillaba en la oscuridad con una luz azulada. Guardaban muestras en un cajón de la mesilla, y en sus cartas cuentan que entraban de noche solo para verlo brillar.",
        destacado: { tipo: "cifra", cifra: "8 t", unidad: "de mineral para un gramo de sal" },
      },
      {
        rotulo: "El precio",
        texto:
          "Nadie sabía entonces lo que hacía aquello. Llevaba tubos con material en el bolsillo de la bata, manejaba las muestras sin ninguna protección y las quemaduras en las manos las tomaba por una molestia menor. Él murió atropellado por un carro de caballos en 1906; ella siguió sola, ocupó la cátedra que él dejaba vacante —la primera mujer que daba clase en aquella universidad en seiscientos cincuenta años— y ganó un segundo premio en otra disciplina. Murió en 1934 de una enfermedad de la médula que casi con seguridad venía de la exposición acumulada durante treinta y cinco años de laboratorio sin ninguna protección.",
        destacado: { tipo: "frase", frase: "Llevaba tubos con material en el bolsillo de la bata." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Sus cuadernos de laboratorio, sus muebles y hasta el libro de cocina que usaba en casa están contaminados y se conservan en la biblioteca nacional francesa dentro de cajas forradas de plomo. Quien quiera consultarlos tiene que firmar un documento asumiendo el riesgo y ponerse guantes y bata. Seguirán siendo peligrosos durante unos mil seiscientos años, que es lo que tarda esa sustancia en reducirse a la mitad, así que ningún visitante vivo los verá dejar de serlo. La luz azulada que entraban a mirar de noche, y que ella describió en una carta como algo parecido a una fiesta de luciérnagas, era exactamente lo que los estaba matando.",
      },
    ],
  },

  {
    id: "eclipse-1919",
    titulo: "Un eclipse de 1919 hizo famoso a Einstein",
    gancho: "Su teoría decía que la luz se curva. Hubo que esperar a que una isla africana dejara de tener nubes.",
    categoria: "Ciencia",
    color: "var(--plum)",
    encargo: "Un eclipse total de sol con la corona blanca sobre un cielo negro.",
    entrada:
      "Isla de Príncipe, frente a la costa de África, 29 de mayo de 1919. Un astrónomo británico lleva meses de viaje con telescopios y placas fotográficas para aprovechar un eclipse total de seis minutos. Quiere comprobar una idea publicada cuatro años antes por un físico alemán casi desconocido fuera de su gremio: que la gravedad curva la luz. Aquella mañana llueve.",
    paginas: [
      {
        rotulo: "La prueba",
        texto:
          "La idea era medible y por eso valía la pena el viaje. Si la masa del Sol curva el espacio a su alrededor, la luz de las estrellas que pasan justo por detrás debería desviarse un poquito, y esas estrellas aparecerían corridas de sitio respecto a donde salen de noche. El problema es que el Sol deslumbra y no deja ver ninguna estrella cercana a él; el único momento en que se puede fotografiar el cielo pegado al disco solar es durante un eclipse total, y hacían falta dos minutos de cielo limpio.",
        destacado: { tipo: "frase", frase: "Había que fotografiar estrellas pegadas al Sol. Solo se puede en un eclipse." },
      },
      {
        rotulo: "Las nubes",
        texto:
          "Llovió toda la mañana y el cielo no se abrió hasta que el eclipse ya había empezado. Tomaron dieciséis placas casi a ciegas y en la mayoría no salió nada aprovechable; solo dos sirvieron. Una segunda expedición fotografiaba lo mismo al otro lado del Atlántico, en Brasil, por si una de las dos fallaba. Al revelar las placas y compararlas con fotografías del mismo trozo de cielo tomadas meses antes, cuando el Sol estaba en otra parte, las estrellas aparecían desplazadas alrededor de una milésima de grado: aproximadamente el doble de lo que predecía la física antigua y justo lo que decía la nueva. El astrónomo tardó semanas en atreverse a anunciarlo.",
        destacado: { tipo: "cifra", cifra: "2", unidad: "placas útiles de dieciséis tomadas" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El resultado se anunció en Londres el 6 de noviembre y al día siguiente los periódicos de medio mundo lo llevaron a portada con titulares sobre las luces torcidas en el cielo y una teoría nueva del universo. Aquel físico pasó de ser un profesor conocido en su gremio a la persona más famosa de la ciencia en una semana, y ya no dejó de serlo. Las medidas de 1919 tenían un margen de error incómodamente grande y algún historiador ha sugerido que el astrónomo descartó las placas que menos le convenían. Se han repetido muchas veces desde entonces, con instrumentos mucho mejores y en eclipses de medio mundo, y siempre ha salido lo mismo.",
      },
    ],
  },
];
