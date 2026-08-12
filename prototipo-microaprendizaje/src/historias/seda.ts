import type { Short } from "../shorts";

/* ==========================================================================
   Seda y fibras.

   El riesgo del tema es el catálogo textil: tramas, urdimbres, calidades.
   Y el riesgo contrario es el exotismo de la ruta comercial.

   La regla del tema: una fibra se cuenta por EL BICHO O LA MÁQUINA QUE LA
   FABRICA y por lo que cuesta obtener un metro. Un gusano que ya no sabe
   volar. Una araña que hay que devolver cada tarde a su poste. Una fibra
   sacada del carbón que arrasó con las dos anteriores en un año.

   Y siempre se da la cuenta: cuántos animales, cuántas horas, cuánto hilo.
   ========================================================================== */

export const SEDA: Short[] = [
  {
    id: "secreto-de-la-seda",
    titulo: "Cómo se robó la seda",
    gancho: "China lo guardó tres mil años bajo pena de muerte. Dos monjes lo sacaron en cañas huecas.",
    categoria: "Seda",
    color: "var(--ochre)",
    encargo: "Capullos blancos de gusano de seda amontonados en una cesta de mimbre.",
    /* El capullo, el bicho que lo teje, el momento en que llegó a Occidente y
       lo que se sigue haciendo con él. La tercera es una estampa de 1595 que
       cuenta exactamente esta historia: los monjes entregando los huevos. */
    fotos: [
      {
        archivo: "Silk cocoon, Sopura Silk Mills Ltd (04).jpg",
        autor:
          "Capullos de gusano de seda recogidos en una hilandería de Bangladés. Cada uno es un solo hilo de casi un kilómetro. Fotografía de Moheen Reeyad, 2017.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Silk_cocoon,_Sopura_Silk_Mills_Ltd_(04).jpg",
        foco: "50% 50%",
        alt: "Un montón de capullos ovalados de color amarillo intenso, apilados sobre una tela blanca.",
      },
      {
        archivo: "Da Lat - Silkworms eating mulberry leaves.jpg",
        autor:
          "Orugas de seda comiendo hoja de morera, que es lo único que comen. Da Lat, Vietnam, 2015. Fotografía de P. Hughes.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Da_Lat_-_Silkworms_eating_mulberry_leaves.jpg",
        foco: "50% 50%",
        alt: "Decenas de orugas blancas y gordas moviéndose sobre un lecho de hojas verdes dentro de una bandeja.",
      },
      {
        archivo: "Emperor Justinian Receiving the First Imported Silkworm Eggs from Nestorian Monks, Plate 2 from \"The Introduction of the Silkworm\" -Vermis Sericus- MET DP841101.jpg",
        autor:
          "El emperador recibiendo los primeros huevos de gusano traídos de Asia por dos monjes. Estampa de hacia 1595, de la serie «Vermis Sericus». Museo Metropolitano de Arte, Nueva York.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Emperor_Justinian_Receiving_the_First_Imported_Silkworm_Eggs_from_Nestorian_Monks,_Plate_2_from_%22The_Introduction_of_the_Silkworm%22_-Vermis_Sericus-_MET_DP841101.jpg",
        foco: "50% 45%",
        alt: "Grabado antiguo: un emperador sentado en su trono recibe a dos religiosos que le tienden un bastón hueco, rodeados de cortesanos.",
      },
      {
        archivo: "Making silk from cocoon at Korean Folk Village.jpg",
        autor:
          "Sacando el hilo de los capullos en agua caliente, como se ha hecho siempre. Aldea Folclórica de Corea. Fotografía de Misok Kim, 2015.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Making_silk_from_cocoon_at_Korean_Folk_Village.jpg",
        foco: "50% 40%",
        alt: "Una mujer con traje tradicional, agachada junto a un puchero humeante, tira con los dedos de los hilos de unos capullos.",
      },
    ],
    entrada:
      "Constantinopla, año 552. El imperio bizantino compra seda a precio de oro a intermediarios persas, que a su vez la traen de China, y el desequilibrio comercial es enorme. China guarda desde hace tres mil años cómo se hace la seda, y sacar el secreto del país se castiga con la muerte. Ni siquiera se sabe fuera si es un mineral, una planta o el pelo de algún animal. Dos monjes que han viajado por Asia se presentan ante el emperador con una oferta concreta: pueden traer ese secreto, si les financia el viaje. El emperador acepta, y lo que traen de vuelta no es un plano ni una receta, sino algo vivo escondido en una caña hueca.",
    paginas: [
      {
        rotulo: "El gusano",
        texto:
          "El secreto no era una técnica sino un bicho. La seda la produce la oruga de una mariposa que se alimenta exclusivamente de hoja de morera y que teje un capullo con un solo hilo continuo de casi un kilómetro de largo. Para obtener la fibra hay que matar la crisálida con vapor antes de que salga, porque al salir rompe el hilo en mil trozos, y después devanarlo con paciencia. En China aquello se sabía desde hacía unos tres mil años y sacar huevos o semillas de morera del país estaba castigado con la muerte.",
        destacado: { tipo: "cifra", cifra: "1", unidad: "kilómetro de hilo por capullo" },
      },
      {
        rotulo: "Las cañas",
        texto:
          "Los monjes volvieron a Asia, consiguieron huevos del gusano y los escondieron dentro de unas cañas de bambú huecas, que era el bastón normal de cualquier viajero, manteniéndolos a la temperatura justa para que no eclosionaran por el camino. El viaje duró meses. Al llegar, los huevos se incubaron y de ahí salió toda la producción de seda del Mediterráneo, junto con plantaciones de morera en Grecia y en Siria. El imperio bizantino mantuvo después su propio monopolio con la misma severidad con la que acababa de romper el ajeno.",
        destacado: { tipo: "frase", frase: "Los llevaron dentro de cañas de bambú, como un bastón." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La seda llegó a Italia en el siglo XII y a Francia en el XVI, y con ella ciudades enteras que vivían del gusano y de la morera, incluida buena parte del levante español. Hoy la mayor parte se produce otra vez en Asia. El animal, mientras tanto, se ha domesticado tanto que ya no existe en estado salvaje: las mariposas adultas no vuelan, apenas se mueven, no comen nada y dependen por completo de que alguien les acerque la hoja. Es el único insecto que hemos vuelto incapaz de vivir sin nosotros.",
      },
    ],
  },

  {
    id: "seda-de-arana",
    titulo: "Tela de un millón de arañas",
    gancho: "Ochenta personas recogiendo arañas cada mañana durante ocho años para hacer dos piezas de tela.",
    categoria: "Seda",
    color: "var(--plum)",
    curioso: true,
    encargo: "Una tela dorada brillante con bordados, extendida bajo una luz cálida.",
    fotos: [
      {
        archivo: "Golden orb-weavers (Nephila pilipes) female and male Double Haven.jpg",
        autor: "Hembra y macho de araña de seda dorada (Nephila pilipes) en su tela, Hong Kong, 2024. Fotografía de Charles J. Sharp.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Golden_orb-weavers_(Nephila_pilipes)_female_and_male_Double_Haven.jpg",
        foco: "50% 50%",
        alt: "Una araña grande de patas negras y abdomen rayado, colgada en el centro de una tela tupida sobre un fondo verde desenfocado.",
      },
      {
        archivo: "Nephila plumipes Eastern Golden Orb-weaver removing leaf from its web Beor St Creek 7th Brigade Park Chermside P1030895.jpg",
        autor: "Araña de seda dorada oriental (Nephila plumipes) limpiando su tela, Chermside, Australia, 2014. Fotografía de John Robert McPherson.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Nephila_plumipes_Eastern_Golden_Orb-weaver_removing_leaf_from_its_web_Beor_St_Creek_7th_Brigade_Park_Chermside_P1030895.jpg",
        foco: "50% 50%",
        alt: "Una araña de patas largas trabajando en su tela entre la vegetación, con los hilos tensados en abanico a su alrededor.",
      },
      {
        archivo: "Guarding the rainbow strands - Flickr - conall...jpg",
        autor: "Hilos de tela de araña descomponiendo la luz del sol, Irlanda del Norte, 2015. Fotografía de Conall, Downpatrick.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Guarding_the_rainbow_strands_-_Flickr_-_conall...jpg",
        foco: "50% 50%",
        alt: "Primer plano de hilos de seda de araña que brillan con colores de arcoíris al atravesarlos la luz, sobre un fondo oscuro.",
      },
      {
        archivo: "Mulberry leaves and silkworms.jpg",
        autor: "Gusanos de seda alimentándose de hojas de morera. Es la vía por la que hoy se intenta producir seda de araña.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Mulberry_leaves_and_silkworms.jpg",
        foco: "50% 50%",
        alt: "Varios gusanos de seda blancos comiendo hojas verdes de morera muy juntas.",
      },
    ],
    entrada:
      "Madagascar, 2004. Dos aficionados a los textiles emprenden un proyecto que llevaba un siglo sin intentarse: tejer una tela entera con seda de araña, un material más resistente que el acero a igualdad de peso y más elástico que la goma. La idea había tentado a mucha gente desde el siglo XVIII y siempre había acabado igual, porque las arañas no se pueden criar juntas en una granja: encerradas se comen unas a otras. Si se quería seda de araña había que ir a buscarla al campo, araña por araña, y devolverlas después a su sitio exacto.",
    paginas: [
      {
        rotulo: "La recogida",
        texto:
          "Contrataron a unas ochenta personas que salían cada mañana a recoger arañas de una especie local en los postes de teléfono y en los árboles, las llevaban al taller y por la tarde las devolvían al sitio exacto donde las habían cogido. En el taller, cada araña se sujetaba con cuidado en un pequeño soporte y se le extraía el hilo con una maquinilla de manivela durante unos veinte minutos, sin dañarla. Cada animal daba unos cuarenta metros de hilo, tan fino que hacían falta noventa y seis hebras para formar uno solo utilizable.",
        destacado: { tipo: "cifra", cifra: "96", unidad: "hebras para formar un solo hilo" },
      },
      {
        rotulo: "Ocho años",
        texto:
          "El trabajo duró ocho años y se calcularon más de un millón de arañas manipuladas para producir dos piezas: un tapiz de casi cuatro metros y una capa bordada. El color es un amarillo dorado natural, sin ningún tinte, que es simplemente el color de la seda de esa especie. Se expusieron en museos de Nueva York y de Londres y provocaron colas larguísimas, en parte por el aspecto y en parte por la explicación de cómo se habían hecho. El coste fue enorme y no existe ninguna posibilidad de fabricarlo a escala industrial.",
        destacado: { tipo: "frase", frase: "Ochenta personas recogiendo arañas cada mañana, ocho años." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Por eso la investigación va por otro camino: meter el gen de la proteína de la seda de araña en bacterias, en levaduras, en gusanos de seda o incluso en cabras que la producen en la leche, y filtrarla después. Se han conseguido fibras muy buenas en laboratorio, aunque igualar la resistencia del hilo original sigue siendo difícil, porque la araña lo hila con una precisión que no se sabe reproducir. Mientras tanto, la única tela grande de seda de araña que existe salió de un millón de bichos devueltos cada tarde a su poste.",
      },
    ],
  },

  {
    id: "medias-de-nailon",
    titulo: "El nailon mató la seda",
    gancho: "Se vendieron cuatro millones de pares en un día y las medias de seda desaparecieron del mercado.",
    categoria: "Seda",
    color: "var(--slate)",
    encargo: "Un escaparate de los años cuarenta con medias colgadas y un cartel escrito a mano.",
    entrada:
      "Estados Unidos, 15 de mayo de 1940. Sale a la venta en todo el país la primera fibra completamente artificial, fabricada a partir de carbón, agua y aire, según la presenta su fabricante. Se vende en forma de medias femeninas, que hasta ese momento eran de seda japonesa y se rompían con mirarlas. En un solo día se venden cuatro millones de pares.",
    paginas: [
      {
        rotulo: "El laboratorio",
        texto:
          "La fibra salió de un programa de investigación básica de una empresa química que había contratado a un químico joven y le había dado libertad para investigar sin ningún objetivo comercial concreto. Su equipo consiguió encadenar moléculas pequeñas en cadenas larguísimas, y al tirar de la masa fundida con una varilla salía un hilo que se estiraba y se volvía sorprendentemente fuerte. Tardaron once años y una fortuna en convertir aquello en un producto: había que fabricarlo, hilarlo, teñirlo y tejerlo, y cada uno de esos pasos exigía inventar antes la maquinaria correspondiente, que no existía en ninguna parte.",
        destacado: { tipo: "cifra", cifra: "4", unidad: "millones de pares en un solo día" },
      },
      {
        rotulo: "La guerra",
        texto:
          "Duró poco. Al entrar el país en la guerra, en 1941, toda la producción se requisó para paracaídas, cuerdas, neumáticos de avión y mosquiteras, y las medias desaparecieron de las tiendas durante cuatro años seguidos. Se pagaron precios absurdos en el mercado negro y hubo mujeres que se pintaban una raya con lápiz de ojos en la parte de atrás de la pierna para simular la costura. Cuando volvieron a venderse, en 1945, hubo colas y disturbios en varias ciudades del país, con miles de personas peleándose en la acera por unos pocos pares.",
        destacado: { tipo: "frase", frase: "Se pintaban la costura con lápiz de ojos en la pierna." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquella fibra abrió la puerta a todas las demás: el poliéster, el acrílico y las mezclas que hoy visten a medio mundo y que han abaratado la ropa hasta lo que vemos en cualquier escaparate. La seda quedó reducida a un producto de lujo. Su inventor no llegó a ver nada de esto: sufría depresiones graves y se quitó la vida en 1937, con cuarenta y un años, poco después de patentar la fibra y antes de que se vendiera un solo par. En la patente figura su nombre, y en las tiendas, ninguno.",
      },
    ],
  },
];
