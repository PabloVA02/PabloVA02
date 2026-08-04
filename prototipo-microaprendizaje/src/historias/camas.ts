import type { Short } from "../shorts";

/* ==========================================================================
   Las camas.

   El mueble en el que pasamos un tercio de la vida y del que no se cuenta
   nunca nada. El tema se estropea si se convierte en historia del mobiliario:
   maderas, doseles, estilos.

   La regla del tema: se cuenta QUIÉN DORMÍA AHÍ Y CON QUIÉN, porque la cama
   fue durante siglos un espacio público, compartido y heredado, y eso choca
   de frente con la idea moderna de intimidad. Cada short tiene que dejar al
   lector mirando su propia cama de otra manera.
   ========================================================================== */

export const CAMAS: Short[] = [
  {
    id: "la-segunda-mejor-cama",
    titulo: "La cama era el mueble más caro",
    gancho: "Se ponía en el testamento con nombre y apellidos, antes que las tierras y que el dinero.",
    categoria: "Camas",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una cama antigua de madera oscura con dosel y cortinas gruesas.",
    entrada:
      "Inglaterra, 1616. Un dramaturgo de Stratford redacta su testamento y deja a su mujer una sola cosa nombrada expresamente: su segunda mejor cama. La frase ha alimentado siglos de especulación sobre su matrimonio, y casi todo el mundo la ha leído como un desprecio. Para entender lo que significa hay que saber cuánto valía entonces una cama.",
    paginas: [
      {
        rotulo: "Un año de sueldo",
        texto:
          "Una cama buena de aquella época era una construcción de carpintería maciza, con dosel, cortinas de tela gruesa para conservar el calor, un colchón relleno de plumas y varias capas de ropa encima. Todo eso costaba más que cualquier otro objeto de la casa: en los inventarios de bienes de la época la cama principal aparece tasada por encima de los muebles, de los aperos y a veces del ganado, y podía equivaler al salario de un año de un artesano. Por eso no se compraba, se heredaba, y por eso aparece nombrada una por una en los testamentos.",
        destacado: { tipo: "frase", frase: "Costaba más que cualquier otra cosa de la casa." },
      },
      {
        rotulo: "La cama de visita",
        texto:
          "La segunda parte del malentendido es a quién se destinaba cada cama. En las casas acomodadas, la mejor cama no era la del matrimonio: era la de los invitados, un objeto de exhibición que se colocaba en la sala principal para que se viera, y que además pasaba con la casa al heredero principal por costumbre legal. La segunda mejor era la conyugal, la de dormir de verdad. Dejarla nombrada era señalar precisamente la cama en la que había dormido con su mujer treinta años, y la viuda tenía además derecho de por vida a una parte de los bienes sin necesidad de que él lo escribiera.",
        destacado: { tipo: "cifra", cifra: "1616", unidad: "el año de aquel testamento" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una frase famosa que probablemente significaba lo contrario de lo que se le atribuye, y quedó el rastro de una época en la que los muebles se transmitían por escrito como hoy se transmite un piso. La cama dejó de ser el bien más valioso de una casa cuando la industria empezó a fabricar armazones de hierro en serie, a mediados del siglo XIX, y el precio se desplomó. Desde entonces se compra y se tira, y ya no aparece en ningún testamento. Fue el último mueble en dejar de heredarse.",
      },
    ],
  },

  {
    id: "dormir-con-desconocidos",
    titulo: "En las posadas se compartía cama con desconocidos",
    gancho: "Pagabas por un sitio en el colchón, no por la habitación. Y el sitio venía con vecino.",
    categoria: "Camas",
    color: "var(--slate)",
    encargo: "Una habitación de posada antigua con dos camas anchas y una vela sobre la mesa.",
    entrada:
      "Europa y América, siglos XVI a XIX. Un viajero que llega a una posada al anochecer no alquila una habitación: alquila un sitio en una cama, y si esa cama tiene hueco, el posadero mete a otro. La costumbre está tan asumida que aparece con naturalidad en diarios de viaje, en contratos y hasta en las guías de buenos modales, que explican cómo comportarse con el compañero de colchón.",
    paginas: [
      {
        rotulo: "Reglas del colchón",
        texto:
          "Los manuales de urbanidad de la época dedican párrafos al asunto con una seriedad que hoy hace gracia: no acaparar la manta, no dar patadas, no meterse vestido con las botas puestas, dejar sitio al que llega tarde y no hablar una vez apagada la vela. Las camas eran anchas a propósito y se dormía muchas veces en diagonal o de tres en tres. Lo que a nosotros nos parece una invasión insoportable era entonces la única forma de calentar una habitación sin chimenea, y compartir el calor de otro cuerpo se consideraba una ventaja y no un incordio.",
        destacado: { tipo: "frase", frase: "Los manuales de buenos modales explicaban cómo compartir cama." },
      },
      {
        rotulo: "La casa entera",
        texto:
          "Dentro de las casas pasaba lo mismo. En las viviendas rurales, la familia entera dormía en la misma habitación y muchas veces en el mismo camastro, con los criados a los pies o en un jergón al lado, y los niños repartidos entre los adultos. La intimidad no era un valor: era un lujo caro que exigía muros, puertas y calefacción. El cambio llegó con las casas urbanas de más habitaciones, con las estufas y con las campañas de higiene del siglo XIX, que empezaron a describir la cama compartida como un peligro de contagio y de indecencia.",
        destacado: { tipo: "cifra", cifra: "XIX", unidad: "el siglo en que la cama se volvió individual" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una idea de intimidad que nos parece natural y que tiene poco más de siglo y medio: dormir solo, o como mucho en pareja, detrás de una puerta cerrada. Quedaron también las palabras, porque aquellas posadas se anunciaban con el precio por cama y no por cuarto, igual que hoy hacen los albergues juveniles, que son lo único que sobrevive de aquel sistema. Y quedó un detalle que explica de golpe muchas escenas de las novelas antiguas: cuando un personaje se enfada porque le han metido a un extraño en la cama, no se queja del hecho, se queja del extraño.",
      },
    ],
  },

  {
    id: "el-segundo-sueno",
    titulo: "Antes se dormía en dos turnos con vigilia",
    gancho: "Un primer sueño, una hora despierto en mitad de la noche y un segundo sueño hasta el amanecer.",
    categoria: "Camas",
    color: "var(--plum)",
    curioso: true,
    encargo: "Una vela encendida junto a una cama deshecha en plena noche.",
    entrada:
      "Europa, antes de 1800. Un historiador americano revisó a lo largo de los años noventa miles de documentos —diarios, actas judiciales, obras de teatro, tratados médicos— y encontró en todos ellos una expresión repetida que nadie se había parado a explicar: el primer sueño y el segundo sueño, como si la noche estuviera partida en dos mitades separadas por un rato despierto.",
    paginas: [
      {
        rotulo: "La hora intermedia",
        texto:
          "Las referencias son cientos y coinciden entre sí. La gente se acostaba poco después de anochecer, dormía unas cuatro horas, se despertaba hacia la medianoche y pasaba una hora o dos despierta en la oscuridad antes de volver a dormirse hasta el amanecer. Esa vigilia no se vivía como insomnio ni como problema: los documentos la describen como el rato de rezar, de hablar con quien tenías al lado, de atender el fuego o de pensar. Algunos manuales médicos la recomendaban expresamente y varios tratados de la época consideraban ese momento el mejor para reflexionar.",
        destacado: { tipo: "frase", frase: "Aquel rato despierto no era insomnio: tenía nombre y función." },
      },
      {
        rotulo: "La luz lo borró",
        texto:
          "La costumbre desapareció entre finales del siglo XVIII y mediados del XIX, primero en las ciudades y luego en el campo, y el sospechoso principal es la luz artificial: el alumbrado de gas en las calles, la lámpara de aceite barata y después la bombilla alargaron la tarde varias horas y comprimieron la noche en un solo bloque. Un experimento de los años noventa apuntó en la misma dirección: personas sometidas durante semanas a catorce horas diarias de oscuridad acabaron durmiendo espontáneamente en dos tramos separados por un rato de vigilia tranquila.",
        destacado: { tipo: "cifra", cifra: "14", unidad: "horas de oscuridad partían el sueño en dos" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La tesis se discute: hay historiadores que creen que el patrón no era tan general como se ha contado y que dependía mucho de la estación y del oficio. Pero deja algo útil para cualquiera que se despierte de madrugada y se angustie por ello, que es muchísima gente: despertarse a mitad de la noche no ha sido siempre un síntoma de nada, y durante siglos tuvo nombre propio, hueco reconocido y hasta recomendaciones sobre en qué emplearlo. La noche de un solo bloque, que hoy damos por la única normal, es un invento reciente y probablemente hijo de la luz eléctrica.",
      },
    ],
  },
];
