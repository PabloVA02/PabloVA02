import type { Short } from "../shorts";

/* ==========================================================================
   Las grúas.

   Levantar cosas pesadas sin más energía que la humana o la animal. El tema
   se estropea si se convierte en una lista de máquinas: hay que explicar la
   ganancia mecánica, que es lo que de verdad asombra.

   La regla del tema: cada short explica UN TRUCO FÍSICO con números —cuánto
   se multiplica la fuerza, a cambio de qué— y después cuenta quién estaba
   dentro de la rueda o al final de la cuerda, porque esa parte se olvida
   siempre. Nada de altura de rascacielos por sí sola.
   ========================================================================== */

export const GRUAS: Short[] = [
  {
    id: "la-rueda-de-ardilla",
    titulo: "La grúa de las catedrales",
    gancho: "Caminaban por el interior de una rueda enorme, como un hámster, y así subían dos toneladas de piedra.",
    categoria: "Grúas",
    color: "var(--plum)",
    encargo: "Una rueda de madera enorme bajo el techo de una iglesia, con una cuerda enrollada en su eje.",
    fotos: [
      {
        archivo: "Salisbury Cathedral, tower interior, treadmill crane.jpg",
        autor:
          "La rueda de andar que sigue montada en la torre de la catedral de Salisbury, con la maroma enrollada en el eje. Fotografía de Gaius Cornelius.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Salisbury_Cathedral,_tower_interior,_treadmill_crane.jpg",
        foco: "50% 45%",
        alt: "Una rueda enorme de madera dentro de una torre de piedra, con una maroma gruesa enrollada en su eje.",
      },
      {
        archivo: "Salisbury Cathedral Spire - Wiltshire.jpg",
        autor: "La aguja de la catedral de Salisbury, ciento veintitrés metros. Fotografía de Sumit Surai.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Salisbury_Cathedral_Spire_-_Wiltshire.jpg",
        foco: "50% 40%",
        alt: "La aguja de piedra de una catedral gótica levantándose sobre el resto del edificio.",
      },
      {
        archivo: "Flying Buttresses Notre Dame Paris 04 2024 8737.jpg",
        autor: "Los arbotantes de Notre Dame de París, que llevan el peso de la bóveda hasta el suelo.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Flying_Buttresses_Notre_Dame_Paris_04_2024_8737.jpg",
        foco: "50% 50%",
        alt: "Una hilera de arcos de piedra apoyados en contrafuertes, saliendo del costado de una catedral.",
      },
      {
        archivo: "Gothic cloisters of Sé do Porto Portugal (17120324410).png",
        autor: "El claustro gótico de la catedral de Oporto. Fotografía de Terry Kearney.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Gothic_cloisters_of_S%C3%A9_do_Porto_Portugal_(17120324410).png",
        foco: "50% 50%",
        alt: "Los arcos y las bóvedas de piedra de un claustro gótico, en penumbra.",
      },
    ],
    entrada:
      "Europa, siglos XIII a XVI. Para construir una catedral hay que subir bloques de piedra de una o dos toneladas hasta treinta o cuarenta metros de altura, y no existe ningún motor. La solución que se usó durante siglos sigue colgada en el desván de muchas catedrales: una rueda de madera de varios metros de diámetro con uno o dos hombres andando por dentro, como un hámster. No es una anécdota pintoresca: es la máquina que levantó las catedrales de media Europa, y sigue instalada bajo los tejados de muchas de ellas porque nunca se llegó a desmontar. Un hombre dentro de una rueda de cuatro metros levanta dos toneladas él solo.",
    paginas: [
      {
        rotulo: "Por qué funciona",
        texto:
          "El mecanismo aprovecha una idea muy simple. La cuerda que sube la piedra se enrolla en un eje delgado, y ese eje va unido a una rueda enorme por la que camina una persona. Cuanto mayor sea la diferencia entre el radio de la rueda y el del eje, más se multiplica la fuerza que hace quien camina. Con una rueda de cuatro metros y un eje de treinta centímetros, la fuerza se multiplica por trece. Así, dos hombres empujando con su propio peso levantan lo que ni veinte moverían a pulso.",
        destacado: { tipo: "cifra", cifra: "13", unidad: "veces se multiplicaba la fuerza" },
      },
      {
        rotulo: "El precio",
        texto:
          "Lo que se gana en fuerza se paga en distancia, y esa es la regla de oro de cualquier máquina. Para subir la piedra un metro, los hombres de dentro tenían que caminar trece. Subir un bloque a treinta metros suponía varios centenares de metros andados dentro de la rueda, despacio y con mucho cuidado. Si la carga tiraba de golpe, la rueda giraba al revés y los lanzaba contra las tablas. Muchas de estas ruedas no tenían freno mecánico: todo dependía de un hombre con una palanca de madera apoyada contra el borde.",
        destacado: { tipo: "frase", frase: "Lo que se gana en fuerza se paga en distancia caminada." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedan decenas de ruedas originales en catedrales de media Europa, algunas todavía en uso para subir materiales de restauración. Quedó también el nombre de la máquina en varios idiomas, que viene del pájaro: se llamó grúa porque el brazo con la cuerda recordaba al cuello y el pico de una grulla estirando para picar. Y quedó el principio, que no ha cambiado en los aparatos modernos. Toda grúa multiplica la fuerza a costa de recorrer más cable. Lo único distinto es que hoy quien camina dentro de la rueda es un motor eléctrico.",
      },
    ],
  },
  {
    id: "el-contrapeso-de-la-torre",
    titulo: "Se sostiene por detrás",
    gancho: "Los bloques de hormigón de la parte de atrás pesan lo justo para que la máquina no vuelque hacia delante.",
    categoria: "Grúas",
    color: "var(--slate)",
    encargo: "Una grúa torre recortada contra el cielo, con sus bloques de contrapeso al fondo del brazo.",
    fotos: [
      {
        archivo: "Crane against blue sky.jpg",
        autor: "Grúa torre recortada contra el cielo, con el contrapeso en la parte trasera del brazo. Fotografía de ProjectManhattan, 2014.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Crane_against_blue_sky.jpg",
        foco: "50% 50%",
        alt: "La parte alta de una grúa torre contra un cielo azul con nubes, con el brazo largo a un lado y los bloques de contrapeso al otro.",
      },
      {
        archivo: "Tower crane rising at hollywoodHUB construction site, Portland, Oregon.jpg",
        autor: "Grúa torre levantada en una obra de Portland, Oregón. Fotografía de PortlandAppraisalBlog.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Tower_crane_rising_at_hollywoodHUB_construction_site,_Portland,_Oregon.jpg",
        foco: "50% 45%",
        alt: "Una grúa torre completa sobre una obra, con la torre de celosía y el brazo horizontal extendido.",
      },
      {
        archivo: "King's Cross Central development tower cranes, London, England 01.jpg",
        autor: "Grúas torre en las obras de King's Cross, Londres, 2019. Fotografía de Acabashi.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:King's_Cross_Central_development_tower_cranes,_London,_England_01.jpg",
        foco: "50% 45%",
        alt: "Varias grúas torre de distintas alturas trabajando sobre un edificio en construcción.",
      },
      {
        archivo: "Crane at dusk (5066600657).jpg",
        autor: "Grúa torre al anochecer. Fotografía de Quinn Dombrowski, 2010.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Crane_at_dusk_(5066600657).jpg",
        foco: "50% 50%",
        alt: "La silueta de una grúa torre recortada contra un cielo de atardecer.",
      },
    ],
    entrada:
      "Cualquier obra desde 1949, año en que se patentó la grúa torre montable que hoy vemos por todas partes. Es una estructura de celosía metálica muy alta y muy delgada, con un brazo largo que gira sobre la punta, y a cualquiera que se pare a mirarla le sorprende que no se venza hacia delante cuando levanta varias toneladas en el extremo. No hay ningún tirante escondido ni ningún anclaje al suelo que lo impida: el truco está entero en el otro extremo del brazo, en unos bloques de hormigón que la mayoría de la gente ni mira.",
    paginas: [
      {
        rotulo: "La balanza",
        texto:
          "Una grúa torre funciona como una balanza gigante apoyada sobre la torre. Cuando la carga cuelga del brazo largo, tiende a hacer girar toda la estructura hacia ese lado, y ese esfuerzo depende de dos cosas: cuánto pesa la carga y a qué distancia del centro está. Por eso una grúa puede levantar mucho más peso cerca de la torre que en la punta del brazo, y por eso cada máquina lleva una tabla que dice cuánto puede izar a cada distancia. Al otro lado va el brazo corto, con bloques de hormigón que compensan.",
        destacado: { tipo: "frase", frase: "Puede levantar mucho más peso cerca de la torre que en la punta." },
      },
      {
        rotulo: "Trepar sola",
        texto:
          "La parte que más desconcierta es cómo crecen. Una grúa torre se monta con unos pocos tramos y después se alarga a sí misma con una pieza llamada jaula de trepado, que abraza la torre. La jaula sube empujando con gatos hidráulicos la parte superior de la grúa, dejando un hueco, y en ese hueco se mete un tramo nuevo que llega colgado de la propia grúa. Repitiendo la operación, la máquina se hace tan alta como haga falta, y en los rascacielos se amarra al edificio cada cierta altura.",
        destacado: { tipo: "cifra", cifra: "1949", unidad: "el año de la grúa torre moderna" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una máquina tan estandarizada que se alquila por meses igual que un coche, y una silueta que define el paisaje de cualquier ciudad en obras. Quedó también una costumbre de seguridad que llama la atención de cualquiera que mire una obra por la tarde: cuando termina la jornada, el freno de giro se deja suelto a propósito. Así, si por la noche entra viento fuerte, el brazo gira solo y se pone a favor, como una veleta. Si estuviera frenado, tendría que aguantar de lado un empujón capaz de tumbar la grúa entera.",
      },
    ],
  },
  {
    id: "el-puerto-y-la-carga",
    titulo: "Semanas para descargar",
    gancho: "Cuadrillas de estibadores sacaban a mano sacos y cajas de una en una. Una grúa cambió el oficio entero.",
    categoria: "Grúas",
    color: "var(--ochre)",
    encargo: "Un muelle con grúas de pórtico sobre raíles y contenedores apilados.",
    fotos: [
      {
        archivo: "Container cranes at the MPET- MSC PSA European Terminal in Port of Antwerp (Kieldrecht, Belgium) during the sunset civil twilight (DSCF3919).jpg",
        autor: "Grúas de pórtico del puerto de Amberes al anochecer, Bélgica, 2018.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AContainer%20cranes%20at%20the%20MPET-%20MSC%20PSA%20European%20Terminal%20in%20Port%20of%20Antwerp%20(Kieldrecht%2C%20Belgium)%20during%20the%20sunset%20civil%20twilight%20(DSCF3919).jpg",
        foco: "50% 50%",
        alt: "Fila de grúas portacontenedores recortadas contra un cielo lila al anochecer.",
      },
      {
        archivo: "Container cranes in Tokyo Bay.jpg",
        autor: "Grúas de contenedores en la bahía de Tokio, 2023.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AContainer%20cranes%20in%20Tokyo%20Bay.jpg",
        foco: "50% 50%",
        alt: "Grúas blancas de pórtico sobre el muelle con contenedores apilados debajo.",
      },
      {
        archivo: "Red Hook Container Terminal New York September 2016 002.jpg",
        autor: "Terminal de contenedores de Red Hook, Nueva York, 2016.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ARed%20Hook%20Container%20Terminal%20New%20York%20September%202016%20002.jpg",
        foco: "50% 50%",
        alt: "Grúa de pórtico descargando un buque portacontenedores en el muelle.",
      },
      {
        archivo: "Container cranes at the Port of Oakland.jpg",
        autor: "Grúas del puerto de Oakland, California, 2025.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AContainer%20cranes%20at%20the%20Port%20of%20Oakland.jpg",
        foco: "50% 50%",
        alt: "Grúas de contenedores alineadas sobre raíles a la orilla del agua.",
      },
    ],
    entrada:
      "Puertos de todo el mundo, hasta bien entrados los años sesenta. Un barco de carga llega lleno de sacos, cajas, barriles y fardos de tamaños todos distintos, apilados como se ha podido, y todo eso hay que sacarlo pieza a pieza. Cuadrillas enteras de estibadores bajan a la bodega, atan la carga a mano con eslingas, la suben con una pluma y luego la vuelven a colocar y a ordenar en el muelle. Un barco mediano podía pasarse así una semana entera amarrado sin moverse, y a veces más de dos.",
    paginas: [
      {
        rotulo: "El cuello de botella",
        texto:
          "El coste de aquello era enorme y estaba mal repartido. Un barco parado no gana dinero, y en muchos casos el gasto de cargar y descargar superaba al del viaje por mar. Además el trabajo era peligroso, con cargas mal atadas, bodegas oscuras y fardos que se soltaban a media altura. Cuando en 1956 empezaron a usarse cajas metálicas de medidas iguales, el problema cambió de naturaleza. Ya no había que manipular mil objetos distintos, sino mover cajas idénticas, y eso lo puede hacer una máquina si se construye a esa medida.",
        destacado: { tipo: "frase", frase: "Con cajas todas iguales, el trabajo lo puede hacer una máquina." },
      },
      {
        rotulo: "La grúa de pórtico",
        texto:
          "La máquina que apareció es una grúa de pórtico: una estructura enorme montada sobre raíles en el muelle, con un brazo que se adentra sobre el barco. De ella cuelga un bastidor que se engancha solo a las cuatro esquinas de la caja mediante unos pestillos giratorios. El operario trabaja sentado en una cabina acristalada a treinta metros de altura, mirando hacia abajo entre sus pies, y mueve una caja cada dos o tres minutos. Un barco que antes tardaba una semana en descargarse pasó a resolverse en menos de un día.",
        destacado: { tipo: "cifra", cifra: "1", unidad: "día, frente a una semana de antes" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una transformación que se llevó por delante un oficio entero y los barrios que vivían de él. Los puertos históricos, pegados al centro de las ciudades, no tenían sitio para las nuevas grúas ni para las explanadas de contenedores, así que la actividad se trasladó a terminales nuevas más afuera. Los muelles antiguos se convirtieron en paseos, museos y viviendas caras. Y quedó el motivo de fondo, que no fue la grúa sino la caja: en cuanto todo tuvo la misma medida, la máquina pudo sustituir a la cuadrilla.",
      },
    ],
  },
];
