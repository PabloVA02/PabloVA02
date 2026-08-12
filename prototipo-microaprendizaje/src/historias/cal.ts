import type { Short } from "../shorts";

/* ==========================================================================
   La cal.

   El primer material que el ser humano fabricó cambiando la química de una
   piedra. Se cuece, se apaga, se extiende y vuelve a ser piedra. El tema se
   estropea si se cuenta como química de manual.

   La regla del tema: cada short sigue EL CICLO COMPLETO de la piedra (horno,
   agua, aire) y termina en un uso concreto que el lector reconoce: la
   fachada blanca de un pueblo, un campo de cultivo, un muro viejo.
   ========================================================================== */

export const CAL: Short[] = [
  {
    id: "la-piedra-que-vuelve",
    titulo: "La cal vuelve a ser piedra",
    gancho: "Se cuece caliza, se apaga con agua y se extiende en la pared. Con el tiempo vuelve a ser la misma piedra.",
    categoria: "Objetos",
    color: "var(--ochre)",
    encargo: "Balsa de cal apagándose, con la pasta blanca borboteando y humeando.",
    fotos: [
      {
        archivo: "Flowers and Whitewashed Buildings in Mykonos, 2024.jpg",
        autor: "Casas encaladas en Mykonos. Fotografía de Julian Lupyan.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Flowers_and_Whitewashed_Buildings_in_Mykonos,_2024.jpg",
        foco: "50% 40%",
        alt: "Fachadas blanquísimas de cal con contraventanas rojas y verdes, buganvilla en flor y cielo azul.",
      },
      {
        archivo: "Calcium oxide powder.JPG",
        autor: "Óxido de calcio, la cal viva que sale del horno. Fotografía de Leiem.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Calcium_oxide_powder.JPG",
        foco: "50% 45%",
        alt: "Un montón de polvo blanco y terrones sobre un vidrio de reloj redondo.",
      },
      {
        archivo: "Wall painting - idyllic landscape with sarcophagus of Osiris - Pompeii (VIII 7 28 - sanctuary of Isis - ekklesiasterion) - Napoli MAN 8570 - 01.jpg",
        autor: "Pintura mural de Pompeya, hecha sobre el revoco de cal todavía fresco. Fotografía de ArchaiOptix.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Wall_painting_-_idyllic_landscape_with_sarcophagus_of_Osiris_-_Pompeii_(VIII_7_28_-_sanctuary_of_Isis_-_ekklesiasterion)_-_Napoli_MAN_8570_-_01.jpg",
        foco: "50% 45%",
        alt: "Un fresco romano con un templete entre árboles, pintado en azules, ocres y rosas sobre el muro.",
      },
      {
        archivo: "Lime residue thermal water Katlanovo spa 1.jpg",
        autor: "Costra de cal arrancada de las tuberías de un balneario termal, en Macedonia del Norte. Fotografía de kallerna.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Lime_residue_thermal_water_Katlanovo_spa_1.jpg",
        foco: "50% 45%",
        alt: "Placas rotas de cal endurecida, blancas y anaranjadas, con el interior fibroso como un coral.",
      },
    ],
    entrada:
      "Todo el Mediterráneo, desde hace al menos siete mil años. La cal es el primer material que el ser humano fabricó transformando químicamente una piedra, y lo hizo miles de años antes de saber una sola palabra de química. El procedimiento es sencillo de describir y durísimo de ejecutar: quemar caliza durante días a temperatura muy alta. Lo asombroso viene después, cuando el resultado se apaga con agua y se convierte en una pasta que se puede extender con la mano en una pared. Porque esa pasta, con el tiempo, vuelve a endurecerse hasta ser la misma piedra del principio.",
    paginas: [
      {
        rotulo: "Cocer y apagar",
        texto:
          "El horno de cal es un pozo donde se apilan caliza y leña y se mantiene el fuego días enteros. A unos novecientos grados la piedra suelta el gas que lleva dentro y queda un terrón blanco y ligero, la cal viva. Ese terrón es peligroso, porque si le cae agua reacciona con violencia y quema la piel. Apagarla consiste en echarle agua de forma controlada en una balsa, donde borbotea, humea y se deshace en pasta blanca. Esa pasta mejora cuanto más reposa, y en los buenos talleres se guardaba bajo agua durante años antes de usarla. Con ella se hacía el mortero que une las piedras y el revoco que cubre la pared.",
        destacado: { tipo: "frase", frase: "Si le cae agua, la cal viva hierve y quema la piel." },
      },
      {
        rotulo: "El aire la endurece",
        texto:
          "Lo que ocurre en la pared es que la cal vuelve a capturar del aire el mismo gas que perdió en el horno. Ese gas es el dióxido de carbono, y al combinarse con la pasta la convierte otra vez en carbonato de calcio, es decir, en caliza. Por eso un revoco de cal no se seca, sino que fragua desde fuera hacia dentro y tarda meses o años en endurecer del todo. Tiene a cambio una virtud que el cemento no tiene, porque es un material blando que deja respirar a la pared y permite que la humedad salga. También se repara sola: una grieta fina se vuelve a cerrar con el tiempo.",
        destacado: { tipo: "cifra", cifra: "900", unidad: "grados para cocer la caliza" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron en pie los edificios hechos con ella, porque una fábrica de piedra con mortero de cal se mueve un poco sin romperse. Quedó casi arrinconada durante el siglo XX, cuando el cemento la sustituyó por rápido, fuerte y barato, y nadie miró atrás. Y ha vuelto por dos motivos, ya que en la restauración de edificios antiguos el cemento los estropea y en obra nueva la cal absorbe parte del gas que costó cocerla. Quedó también el gesto de encalar la fachada cada primavera en los pueblos del sur, que no era adorno: la cal desinfecta y refleja el sol.",
      },
    ],
  },
  {
    id: "los-pueblos-blancos",
    titulo: "Encalar era higiene",
    gancho: "La estampa turística del sur empezó siendo desinfectante, aislante y tapagrietas, todo por el precio de un cubo.",
    categoria: "Objetos",
    color: "var(--slate)",
    encargo: "Calle estrecha de casas encaladas al mediodía, con la sombra muy marcada.",
    fotos: [
      {
        archivo: "Frigiliana calles.jpg",
        autor: "Calle escalonada de Frigiliana, en la Axarquía malagueña, con las fachadas encaladas y los tiestos de barro.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AFrigiliana%20calles.jpg",
        foco: "45% 52%",
        alt: "Callejón en cuesta con escalones de piedra entre casas blancas, macetas de geranios y rejas negras.",
      },
      {
        archivo: "Vejer de la Frontera (40424083591).jpg",
        autor: "Vejer de la Frontera, en la provincia de Cádiz, encaramado en su cerro.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AVejer%20de%20la%20Frontera%20(40424083591).jpg",
        foco: "50% 50%",
        alt: "Pueblo de casas blancas apiñadas en lo alto de una colina, con murallas y campanario recortados contra el cielo.",
      },
      {
        archivo: "Frigiliana 20230910.jpg",
        autor: "Fachadas de Frigiliana a media tarde, con la cal devolviendo la luz del sol.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AFrigiliana%2020230910.jpg",
        foco: "50% 50%",
        alt: "Casas blancas escalonadas por la ladera, con tejados de teja y sombras muy marcadas.",
      },
      {
        archivo: "Tsidi bou said.jpg",
        autor: "Sidi Bou Saïd, en Túnez, otro pueblo que resuelve el calor con cal blanca y carpintería azul.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ATsidi%20bou%20said.jpg",
        foco: "50% 50%",
        alt: "Casas blancas con puertas y celosías azules asomadas sobre el mar Mediterráneo.",
      },
    ],
    entrada:
      "Andalucía y todo el sur de Europa, desde la Antigüedad y con mucha fuerza a partir del siglo XIX. Los pueblos blancos se fotografían hoy como estampa turística y se cuidan por ordenanza, pero aquella capa de cal no se daba por gusto estético ni por tradición. Encalar era barato, mataba bichos y microbios, tapaba las grietas del muro y devolvía la luz del sol en vez de tragarla. Era, en la práctica, toda la desinfección y todo el aislamiento que se podía permitir una familia pobre, y se repetía cada primavera con un cubo y una brocha.",
    paginas: [
      {
        rotulo: "Contra el bicho",
        texto:
          "La cal apagada es fuertemente alcalina, lo que significa que destruye las proteínas de lo que toca. Aplicada en la pared, mata hongos, larvas y buena parte de los microbios que viven en las grietas del muro. En los siglos de epidemias, encalar era de las pocas medidas que un ayuntamiento podía ordenar y una familia podía cumplir. Tras un brote de cólera o de peste, las ordenanzas obligaban a blanquear casas, establos y hasta pozos. Se echaba también en las fosas y en los mataderos, porque seca la materia orgánica y frena el olor. Nadie sabía por qué funcionaba, ya que la teoría de los microbios llegó mucho después, pero se veía que funcionaba.",
        destacado: { tipo: "frase", frase: "Nadie sabía por qué funcionaba, pero se veía que funcionaba." },
      },
      {
        rotulo: "El sol",
        texto:
          "La segunda razón es térmica y se nota con la mano en cualquier tarde de agosto. Una pared blanca devuelve casi toda la luz que recibe, mientras que una oscura la absorbe y se convierte en un radiador. La diferencia entre una fachada encalada y la misma pared en piedra desnuda puede pasar de diez grados a pleno sol. En casas de muros gruesos, eso decide si de noche el interior se refresca o sigue soltando el calor del día. Por eso el blanco domina en el sur y desaparece en el norte, donde interesa lo contrario. No es una decisión de gusto, sino de latitud, tomada mucho antes de que existiera la palabra eficiencia.",
        destacado: { tipo: "cifra", cifra: "10", unidad: "grados menos con la pared blanca" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron los pueblos blancos convertidos en imagen de marca, con ordenanzas municipales que obligan a encalar y ayudas para pagarlo. Quedó el trabajo anual de darle una mano cada primavera, que sigue haciéndose en muchos sitios aunque ya casi nadie recuerde el motivo sanitario. Y ha vuelto la idea por la puerta grande, porque varias ciudades grandes están pintando de blanco tejados y calles enteras para bajar la temperatura del verano. Lo llaman ahora tejado frío y lo presentan como novedad, cuando en realidad es lo mismo que llevan siglos haciendo los pueblos del sur con un cubo y una brocha.",
      },
    ],
  },
  {
    id: "echar-cal-al-campo",
    titulo: "La cal cambia la cosecha",
    gancho: "No alimenta a la planta y aun así sube el grano. La explicación tardó un siglo en llegar.",
    categoria: "Objetos",
    color: "var(--plum)",
    curioso: true,
    encargo: "Horno de cal circular de piedra abandonado en un campo, medio cubierto de hiedra.",
    entrada:
      "Inglaterra, siglo XVIII. En plena revolución agrícola, los propietarios están probando maneras de sacar más grano de la misma tierra, y una de las que mejor funciona parece magia: echar cal molida sobre el campo. No aporta ningún alimento a la planta y aun así la cosecha sube. La explicación tardó otro siglo en llegar y tiene que ver con la acidez del suelo.",
    paginas: [
      {
        rotulo: "El suelo ácido",
        texto:
          "Un suelo ácido tiene demasiados iones de hidrógeno sueltos, y eso pasa sobre todo donde llueve mucho. La lluvia arrastra hacia abajo el calcio y el magnesio, que son los que mantienen el equilibrio, y el terreno se acidifica. El problema no es que la acidez queme la raíz, sino que bloquea los nutrientes: el fósforo se queda pegado y la planta no lo alcanza. Además libera aluminio, que en cantidad daña las raíces finas y frena el crecimiento. La cal, al ser alcalina, neutraliza esa acidez y devuelve el suelo al punto donde las raíces trabajan. El efecto tarda meses en notarse y dura varios años, así que se echa cada cierto tiempo.",
        destacado: { tipo: "frase", frase: "La acidez no quema la raíz: le esconde la comida." },
      },
      {
        rotulo: "Los hornos del campo",
        texto:
          "Aquella práctica creó un paisaje que todavía se ve, porque la cal pesa demasiado para transportarla lejos con carros. La solución fue cocerla en el sitio, y los campos ingleses se llenaron de hornos pequeños, uno por finca grande. Eran torres de piedra de unos cuatro metros, abiertas por arriba, donde se alternaban capas de caliza y carbón. El trabajo era duro e insalubre, porque el horno suelta gases que desplazan el aire y han matado a más de un operario dormido cerca. Cuando llegaron el ferrocarril y las fábricas grandes, aquellos hornos se abandonaron en pocas décadas. Muchos siguen ahí, medio comidos por la hiedra, y la gente pasa al lado sin saber qué son.",
        destacado: { tipo: "cifra", cifra: "4", unidad: "metros medía el horno" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el encalado como una de las prácticas agrícolas más extendidas del mundo, con millones de toneladas movidas cada año. Quedó también un análisis de rutina, porque hoy se mide la acidez del suelo con un aparato antes de decidir cuánta cal echar y dónde. Quedaron los hornos abandonados en los campos de media Europa, protegidos en algunos sitios como patrimonio industrial y convertidos en refugio de murciélagos. Y quedó la misma piedra haciendo tres trabajos distintos: sujeta las paredes, blanquea las fachadas y corrige la tierra, según se cueza, se apague o se muela.",
      },
    ],
  },
];
