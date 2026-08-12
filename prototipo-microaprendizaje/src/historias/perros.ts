import type { Short } from "../shorts";

/* ==========================================================================
   Perros y gatos.

   El riesgo del tema es la ternura: la lealtad, la mirada, el mejor amigo.
   Todo el mundo llega ya convencido y no se aprende nada.

   La regla del tema: la domesticación se cuenta como UN EXPERIMENTO CON
   RESULTADO MEDIBLE. Zorros seleccionados solo por mansedumbre a los que
   les salen manchas y orejas caídas. Un jurado que decide en 1859 cómo
   debe ser un cráneo. Un gato que no ha cambiado casi nada porque nunca
   hizo falta que obedeciera. Aquí manda la biología, no el cariño.

   Y siempre se dice qué se seleccionó y qué salió de propina.
   ========================================================================== */

export const PERROS: Short[] = [
  {
    id: "zorros-de-siberia",
    titulo: "El zorro explica al perro",
    gancho: "Seleccionaron solo por mansedumbre y salieron orejas caídas, colas curvadas y manchas blancas.",
    categoria: "Perros",
    color: "var(--ochre)",
    encargo: "Un zorro plateado con una mancha blanca en la frente mirando de frente.",
    fotos: [
      {
        archivo: "Portrait of a red fox in Rautas fjällurskog.jpg",
        autor: "Un zorro rojo en la nieve, en Laponia. Fotografía de ClaudiaTen.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Portrait_of_a_red_fox_in_Rautas_fj%C3%A4llurskog.jpg",
        foco: "55% 45%",
        alt: "Un zorro naranja de cola espesa mirando a cámara sobre la nieve blanca.",
      },
      {
        archivo: "Vulpes Vulpes in snow.jpg",
        autor: "Otro zorro rojo. Fotografía de peggycadigan.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Vulpes_Vulpes_in_snow.jpg",
        foco: "50% 45%",
        alt: "Un zorro caminando por la nieve con las orejas erguidas.",
      },
      {
        archivo: "German Shepherd Dog, Puppy, 5 months, Portrait.jpg",
        autor: "Un cachorro de pastor alemán de cinco meses. Fotografía de Kristjan S.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:German_Shepherd_Dog,_Puppy,_5_months,_Portrait.jpg",
        foco: "50% 40%",
        alt: "Un cachorro de pastor alemán con las orejas grandes y levantadas, mirando de frente.",
      },
      {
        archivo: "DSC09611a Search and Rescue Dog, Austrian Red Cross Perchtoldsdorf, 2024-10.jpg",
        autor: "Un perro de rescate en un ejercicio de la Cruz Roja austriaca. Fotografía de Aciarium.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:DSC09611a_Search_and_Rescue_Dog,_Austrian_Red_Cross_Perchtoldsdorf,_2024-10.jpg",
        foco: "50% 40%",
        alt: "Un perro de trabajo con arnés, atento, en un descampado.",
      },
    ],
    entrada:
      "Siberia, 1959. Un genetista soviético empieza un experimento en una granja de zorros plateados criados para peletería, aprovechando que allí hay miles de animales y nadie hace preguntas. La idea es de una sencillez casi ingenua: en cada generación, elegir únicamente a los zorros que menos miedo tienen a la mano de un humano y cruzarlos entre sí. No selecciona por aspecto, ni por tamaño, ni por color de pelo, ni por ninguna otra cosa. Solo por carácter. Lo que empieza a salir de esos cruces al cabo de unas pocas generaciones no lo tenía previsto nadie.",
    paginas: [
      {
        rotulo: "Los cambios",
        texto:
          "En pocas generaciones aparecieron cosas que nadie había buscado. Los zorros mansos empezaron a tener manchas blancas en la frente, orejas caídas de cachorro que no se levantaban con la edad, colas curvadas hacia arriba, hocicos más cortos y cráneos más redondeados, y a ladrar y a mover la cola al ver a una persona conocida. Todo eso vino junto con la mansedumbre sin que se hubiera seleccionado ninguna de esas características. Al cabo de unas cuarenta generaciones había zorros que buscaban activamente el contacto humano y que se comportaban, en casi todo, como perros de casa.",
        destacado: { tipo: "frase", frase: "Nadie seleccionó las manchas ni las orejas: vinieron solas." },
      },
      {
        rotulo: "La explicación",
        texto:
          "La hipótesis más aceptada tiene que ver con un grupo de células del embrión que migran muy pronto y acaban formando cosas aparentemente inconexas: parte de las glándulas suprarrenales, que regulan la respuesta al miedo, y también los pigmentos de la piel, el cartílago de las orejas y parte del hueso de la cara. Seleccionar por menos miedo significa seleccionar por menos actividad de esas glándulas, y de rebote se tocan todas las demás. El conjunto se llama síndrome de domesticación y aparece también en el cerdo, la vaca y el conejo.",
        destacado: { tipo: "cifra", cifra: "40", unidad: "generaciones para tener zorros mansos" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El experimento sigue en marcha más de sesenta años después, con una línea paralela seleccionada por agresividad para poder comparar, y ha cambiado la manera de entender la domesticación del perro: probablemente no lo domesticamos nosotros, sino que se domesticaron ellos, porque los lobos que menos miedo tenían se acercaban a los campamentos a comer restos y dejaban más crías. Todo lo demás vino de propina. El proyecto tuvo además problemas graves de financiación al caer la Unión Soviética, y llegó a vender zorros mansos como mascotas para poder seguir adelante.",
      },
    ],
  },

  {
    id: "razas-de-concurso",
    titulo: "Las razas son recientes",
    gancho: "Se fijaron en concursos del siglo XIX. Antes había perros de oficio, no razas cerradas.",
    categoria: "Perros",
    color: "var(--slate)",
    curioso: true,
    encargo: "Una mesa de exposición canina con una cinta de premio y una cinta métrica.",
    fotos: [
      {
        archivo: "Golden retriever alert (30190754125).jpg",
        autor: "Golden retriever tumbado en la hierba, 2016. Fotografía de David Whelan.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Golden_retriever_alert_(30190754125).jpg",
        foco: "50% 45%",
        alt: "Un perro dorado de pelo largo echado entre hierba alta, mirando hacia un lado con la luz del atardecer.",
      },
      {
        archivo: "Doberman Pinscher dogs in the \" Judging Ring\" at Bombay Presidency Kennel Club Dog Show.jpg",
        autor: "Dóberman presentados en el ring de un concurso canino, Bombay. Fotografía de Rudolph A. Furtado.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Doberman_Pinscher_dogs_in_the_%22_Judging_Ring%22_at_Bombay_Presidency_Kennel_Club_Dog_Show.jpg",
        foco: "50% 55%",
        alt: "Media docena de perros de la misma raza colocados en fila por sus manejadores para que el jurado los compare.",
      },
      {
        archivo: "HK pet dog walking 老虎狗 English Bulldog November 2022 Px3 01.jpg",
        autor: "Bulldog inglés, una de las razas de hocico aplastado con problemas respiratorios documentados. Fotografía de MOSCKAI Yinam, 2022.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:HK_pet_dog_walking_%E8%80%81%E8%99%8E%E7%8B%97_English_Bulldog_November_2022_Px3_01.jpg",
        foco: "50% 45%",
        alt: "Un bulldog de cara chata y pliegues marcados, de pie sobre el pavimento.",
      },
      {
        archivo: "Kattai dog alias kattakal dog nagapattinam indian dog breed.jpg",
        autor: "Perro kattai de Nagapattinam, un tipo local definido por su oficio y no por ningún libro genealógico.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Kattai_dog_alias_kattakal_dog_nagapattinam_indian_dog_breed.jpg",
        foco: "50% 50%",
        alt: "Un perro delgado de pelo corto y patas largas, de pie en un camino de tierra.",
      },
    ],
    entrada:
      "Inglaterra, 1859. Se celebra en una ciudad del norte la primera exposición canina con premios, jaulas numeradas y jurado. En pocas décadas aparecen los clubes, los libros genealógicos y los estándares escritos que describen con precisión de milímetro cómo debe ser cada raza: la altura, el ángulo del cuello, la forma del cráneo. Antes de eso no existía nada de esto. Existían tipos de perro definidos por lo que hacían —un pastor, un ratonero, un perro de agua— y a nadie se le había ocurrido llevar la cuenta por escrito de quién era hijo de quién.",
    paginas: [
      {
        rotulo: "El estándar",
        texto:
          "El cambio de fondo fue pasar de seleccionar por lo que un perro hace a seleccionar por cómo es. Un pastor valía por juntar ovejas, un ratonero por cazar ratas, y a nadie se le ocurría mirarle la longitud del hocico. Con los concursos apareció un documento que fijaba la altura, el ángulo del cuello, la forma del cráneo y hasta la inclinación de la cola, y los ejemplares que más se acercaban a ese papel eran los que se cruzaban. Se cerró además el libro: solo se admite descendencia de perros ya inscritos.",
        destacado: { tipo: "frase", frase: "Se pasó de seleccionar lo que hace a seleccionar cómo es." },
      },
      {
        rotulo: "El precio",
        texto:
          "El resultado, un siglo y medio después, son poblaciones muy pequeñas y muy emparentadas entre sí, con problemas de salud concretos y bien documentados: razas de hocico aplastado que no respiran bien y necesitan cirugía, razas grandes con displasia de cadera, razas con la espalda alargada y hernias de disco frecuentes. Las fotografías comparadas de hace cien años muestran cambios enormes bajo el mismo nombre de raza. Varios países han empezado a legislar contra la cría de los rasgos más extremos, y algunos clubes han acabado cambiando sus propios estándares para corregirlo.",
        destacado: { tipo: "cifra", cifra: "1859", unidad: "la primera exposición con jurado" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Hay unas cuantas razas realmente antiguas, con miles de años detrás, aunque bastantes menos de las que se anuncian: los análisis genéticos han deshecho no pocas historias de origen milenario inventadas en el siglo XIX para dar prestigio a un criador. Y existe un movimiento creciente a favor de los cruces sin pedigrí, que suelen presentar menos problemas hereditarios. El perro lleva quince mil años con nosotros; las razas tal como las entendemos llevan poco más de siglo y medio, y se decidieron en una sala de exposiciones, con un jurado, una cinta métrica y un papel escrito.",
      },
    ],
  },

  {
    id: "gato-del-granero",
    titulo: "El gato se domesticó solo",
    gancho: "Llegó detrás de los ratones que llegaron detrás del grano, y apenas ha cambiado desde entonces.",
    categoria: "Perros",
    color: "var(--plum)",
    encargo: "Un gato atigrado sentado sobre sacos de grano en un almacén en penumbra.",
    entrada:
      "Oriente Próximo, hacia el año 7500 antes de Cristo. Las primeras aldeas agrícolas almacenan grano, y ese grano atrae a ratones y a otros roedores en cantidades enormes. Detrás de los roedores aparece un gato salvaje africano que se instala en los alrededores. Nadie lo captura ni lo cría: sencillamente le compensa quedarse cerca de la gente.",
    paginas: [
      {
        rotulo: "El más antiguo",
        texto:
          "La prueba más antigua de convivencia se encontró en Chipre: una tumba de hace unos nueve mil quinientos años con una persona enterrada junto a un gato de ocho meses, colocado con cuidado y orientado igual que el cuerpo humano. En Chipre no hay gatos autóctonos, así que alguien lo llevó hasta allí en barco, lo que indica que ya era un animal que valía la pena transportar. En Egipto, miles de años más tarde, el gato pasó a ser un animal sagrado, con momificaciones masivas y una pena severa para quien matara uno.",
        destacado: { tipo: "cifra", cifra: "9.500", unidad: "años tiene la tumba con un gato" },
      },
      {
        rotulo: "Lo que no cambió",
        texto:
          "Comparado con el perro, el gato ha cambiado muy poco. Sigue teniendo el tamaño, la dentadura y el comportamiento de caza de su antepasado salvaje, con el que además puede cruzarse sin ningún problema; muchos gatos domésticos vuelven a la vida libre en una sola generación y se apañan perfectamente. Las diferencias genéticas con el gato salvaje son pocas y se concentran en genes de la memoria y de la respuesta al miedo, es decir, en lo justo para tolerar a las personas. Las razas de gato son casi todas del siglo XX.",
        destacado: { tipo: "frase", frase: "Sigue siendo, casi entero, el mismo bicho salvaje." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La relación se explica bien desde la economía: el gato no obedece órdenes ni hace tareas, así que nunca hubo motivo para seleccionarlo por obediencia, solo para tolerarlo por lo que ya hacía él solo. Hoy hay cientos de millones repartidos por el mundo y son también uno de los depredadores introducidos más dañinos para la fauna de las islas, un asunto incómodo del que se discute cada vez más. Aquel bicho que se acercó a un granero a por ratones se ha instalado en más casas que ninguna otra especie.",
      },
    ],
  },
];
