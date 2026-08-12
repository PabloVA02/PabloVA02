import type { Short } from "../shorts";

/* ==========================================================================
   Petróleo.

   El riesgo del tema es el editorial energético: geopolítica, barriles,
   dependencia. Todo cierto y todo abstracto.

   La regla del tema: el petróleo se cuenta por PARA QUÉ SE QUERÍA EN CADA
   MOMENTO. Primero para alumbrar y salvar ballenas, con la gasolina como
   residuo que se tiraba al río; después para mover coches; ahora como
   materia prima de casi todo. Cada vez que cambia el uso, cambia también
   qué parte del barril vale dinero y cuál sobra.

   Y las predicciones de agotamiento se cuentan con su fecha y su fallo.
   ========================================================================== */

export const PETROLEO: Short[] = [
  {
    id: "primer-pozo",
    titulo: "El pozo era para lámparas",
    gancho: "Se perforó para sacar aceite de alumbrado. La gasolina era un residuo que se tiraba al río.",
    categoria: "Petróleo",
    color: "var(--slate)",
    encargo: "Una torre de madera de perforación junto a un arroyo entre árboles.",
    fotos: [
      {
        archivo: "Drake Oil Well.jpg",
        autor: "La réplica del pozo Drake, en Titusville, Pensilvania. Fotografía de PLBthetoonist, 2018.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Drake_Oil_Well.jpg",
        foco: "50% 50%",
        alt: "Una caseta de madera oscura con una torre de perforación puntiaguda, rodeada de pinos.",
      },
      {
        archivo: "Brass kerosene lamp.jpg",
        autor: "Lámpara de queroseno de latón con tubo de vidrio. Fotografía de W. Carter, 2019.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Brass_kerosene_lamp.jpg",
        foco: "50% 45%",
        alt: "Una lámpara de latón brillante con el tubo de vidrio encima, sobre fondo negro.",
      },
      {
        archivo: "Vintage Gas Pump (Unsplash).jpg",
        autor: "Surtidores de gasolina antiguos. Fotografía de Evan Kirby, 2017.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Vintage_Gas_Pump_(Unsplash).jpg",
        foco: "45% 50%",
        alt: "Dos surtidores de gasolina de color turquesa con la manguera colgando y los contadores a la vista.",
      },
      {
        archivo: "Blue hour fog over Preemraff oil refinery by Brofjorden.jpg",
        autor: "Una refinería reflejada en el agua a la hora azul. Fotografía de W. Carter, Suecia, 2021.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Blue_hour_fog_over_Preemraff_oil_refinery_by_Brofjorden.jpg",
        foco: "62% 50%",
        alt: "Las luces de una refinería encendidas al anochecer, reflejadas enteras en un agua sin una onda.",
      },
    ],
    entrada:
      "Pensilvania, agosto de 1859. Un antiguo revisor de tren lleva meses perforando un agujero junto a un arroyo donde el petróleo brota solo y mancha el agua, algo que la gente del valle conocía desde siempre y aprovechaba para remedios y ungüentos. Nadie ha intentado antes sacarlo con una máquina de perforar en vez de recogerlo de la superficie, y el pozo se derrumba una y otra vez hasta que se le ocurre entubarlo con tubería de hierro. La compañía que lo contrató está a punto de retirarle el dinero y mandarle parar. A veintiún metros encuentra crudo, y funda sin saberlo la industria más grande del siglo siguiente.",
    paginas: [
      {
        rotulo: "La lámpara",
        texto:
          "El objetivo no era el combustible sino la luz. Hasta entonces, la manera decente de alumbrar una casa por la noche era una lámpara de aceite de ballena, que daba buena llama y costaba caro, y la caza había reducido tanto las poblaciones que el precio no dejaba de subir año tras año. Del crudo refinado se sacaba un aceite parecido y mucho más barato, el queroseno, que ardía sin demasiado humo. En veinte años el aceite de ballena estaba fuera del mercado y buena parte de la industria ballenera se hundió por razones económicas.",
        destacado: { tipo: "frase", frase: "Le ganó la partida al aceite de ballena en veinte años." },
      },
      {
        rotulo: "El residuo",
        texto:
          "Al destilar el crudo salen fracciones distintas según la temperatura, y la más ligera y volátil era un estorbo: se evaporaba, se incendiaba con facilidad y no servía para las lámparas. Las refinerías la tiraban a los ríos por la noche o la quemaban en fosas abiertas detrás de la fábrica. Esa fracción era la gasolina. Cuando llegó el motor de explosión, cuarenta años después, aquel residuo pasó a ser el producto principal y el queroseno quedó relegado, hasta que lo rescató el avión a reacción. Basura y tesoro en medio siglo.",
        destacado: { tipo: "cifra", cifra: "21", unidad: "metros tenía el primer pozo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El hombre que lo perforó no patentó su método de entubar el pozo con tubería de hierro para que no se derrumbara, que era la parte realmente ingeniosa del asunto, y murió pobre en 1880; el estado le pagó una pensión los últimos años. Alrededor de aquel arroyo crecieron en meses ciudades enteras de madera que se vaciaron igual de rápido al agotarse los pozos, y algunas están hoy señalizadas como pueblos fantasma. La industria que salió de allí mueve media energía del planeta, y empezó buscando cómo leer de noche.",
      },
    ],
  },

  {
    id: "crisis-del-petroleo",
    titulo: "El domingo sin coches",
    gancho: "Hubo países que prohibieron circular en coche un día a la semana y adelantaron los relojes.",
    categoria: "Petróleo",
    color: "var(--clay)",
    encargo: "Una autopista completamente vacía con gente paseando por el asfalto.",
    fotos: [
      {
        archivo: "Een postkoets rijdt op de snelweg N206 richting Katwijk aan den Rijn, begeleid door een fietser, Bestanddeelnr 926-8011.jpg",
        autor: "Una diligencia y un ciclista por la autopista N206 vacía durante un domingo sin coches, Países Bajos, 4 de noviembre de 1973. Fotografía de Anefo.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Een_postkoets_rijdt_op_de_snelweg_N206_richting_Katwijk_aan_den_Rijn,_begeleid_door_een_fietser,_Bestanddeelnr_926-8011.jpg",
        foco: "50% 55%",
        alt: "Un carruaje tirado por cuatro caballos y una ciclista avanzando por los carriles desiertos de una autopista.",
      },
      {
        archivo: "EmptyHwy407.jpg",
        autor: "Autopista vacía. Fotografía de Raysonho, 2020.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:EmptyHwy407.jpg",
        foco: "50% 50%",
        alt: "Varios carriles de autopista completamente vacíos perdiéndose hacia el horizonte.",
      },
      {
        archivo: "Blue hour fog over Preemraff oil refinery by Brofjorden.jpg",
        autor: "Refinería de Preemraff en Brofjorden, Suecia, entre la niebla de la hora azul. Fotografía de W. Carter, 2021.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Blue_hour_fog_over_Preemraff_oil_refinery_by_Brofjorden.jpg",
        foco: "50% 50%",
        alt: "Las torres y chimeneas iluminadas de una refinería asomando sobre una capa de niebla azulada.",
      },
      {
        archivo: "Sunniland Oil Field preserved pumpjack.jpg",
        autor: "Balancín de extracción conservado en el campo petrolífero de Sunniland, Florida, 2021. Fotografía de Declan M. Martin.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Sunniland_Oil_Field_preserved_pumpjack.jpg",
        foco: "50% 50%",
        alt: "Una bomba de balancín de un pozo de petróleo, parada, con el brazo inclinado hacia el suelo.",
      },
    ],
    entrada:
      "Octubre de 1973. Los países árabes productores de petróleo recortan la producción y decretan un embargo contra varios países occidentales por su apoyo a Israel en la guerra que acaba de empezar. En dos meses el precio del barril se multiplica por cuatro, y no vuelve a bajar. Las economías europeas y la estadounidense, construidas enteras sobre la idea de que el petróleo iba a ser barato para siempre, se paran casi en seco: no es solo la gasolina, es el plástico, el abono, el transporte y la calefacción a la vez.",
    paginas: [
      {
        rotulo: "Los domingos",
        texto:
          "Las medidas fueron inmediatas y muy visibles. Varios países europeos prohibieron circular con vehículos privados los domingos, y se publicaron fotografías de autopistas vacías con gente paseando y montando a caballo por el asfalto. Se limitó la velocidad, se apagó el alumbrado de escaparates y monumentos, se bajó la calefacción de los edificios públicos y se adelantaron los relojes para aprovechar la luz de la tarde, que es el origen del cambio horario tal como lo conocemos hoy en buena parte del mundo. Hubo colas de horas en las gasolineras.",
        destacado: { tipo: "frase", frase: "Autopistas vacías con gente paseando y montando a caballo." },
      },
      {
        rotulo: "El plan",
        texto:
          "El susto duró bastante más que la crisis. Los gobiernos crearon reservas estratégicas de crudo con existencias para meses, que siguen vigentes; se fundó una agencia internacional de la energía para coordinar respuestas; se impusieron límites de consumo a los coches y se lanzaron programas nucleares enormes en varios países, entre ellos Francia, que todavía saca de ahí la mayor parte de su electricidad. También cambió el diseño de los automóviles: los modelos americanos enormes perdieron cuota de mercado a toda velocidad frente a los japoneses y europeos, mucho más pequeños y más eficientes.",
        destacado: { tipo: "cifra", cifra: "4", unidad: "veces subió el barril en dos meses" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Fue la primera vez que los países ricos comprobaron en su propia casa que dependían de decisiones tomadas a miles de kilómetros, y la palabra energía entró en la política del día a día para no salir. La segunda crisis llegó seis años después y consolidó todo aquello. Del episodio quedan cosas que usamos sin saber de dónde vienen: el cambio de hora dos veces al año, las etiquetas de consumo de los electrodomésticos y la costumbre de que cualquier gobierno tenga escrito y guardado un plan para el día en que falte combustible.",
      },
    ],
  },

  {
    id: "petroleo-que-se-acaba",
    titulo: "Un siglo acabándose",
    gancho: "En 1919 se anunció que quedaba para nueve años. La fecha se ha ido moviendo desde entonces.",
    categoria: "Petróleo",
    color: "var(--plum)",
    curioso: true,
    encargo: "Un bombeo de varilla oxidado moviéndose en un campo seco al atardecer.",
    entrada:
      "Estados Unidos, 1919. El servicio geológico del país publica un informe según el cual las reservas nacionales de petróleo se agotarán en nueve años. La predicción es seria, la firma gente competente y se toma en serio en todas partes. Un siglo después, aquel país produce más petróleo que nunca. La historia se ha repetido con distintas fechas cada dos décadas.",
    paginas: [
      {
        rotulo: "El error",
        texto:
          "El fallo no está en la geología sino en dar por fija una cifra que se mueve. Las reservas no son la cantidad de petróleo que hay bajo tierra, sino la parte que se puede extraer con la tecnología disponible y al precio del momento, y las dos cosas cambian continuamente. Cuando el precio sube, yacimientos que no compensaban pasan a compensar y las reservas aumentan sin que haya aparecido una gota nueva. Cuando mejora la técnica ocurre lo mismo: de un pozo del que se sacaba un quinto se pasó a sacar bastante más.",
        destacado: { tipo: "cifra", cifra: "9", unidad: "años daban en 1919, y siguen quedando" },
      },
      {
        rotulo: "El pico",
        texto:
          "En los años cincuenta, un geólogo formuló una teoría razonada según la cual la producción de un país sigue una curva con forma de campana, y predijo que la estadounidense tocaría techo hacia 1970. Acertó de pleno durante décadas y su idea se convirtió en un clásico que se enseñaba en las facultades. Después, la extracción de crudo atrapado en roca porosa mediante fractura hidráulica volvió a subir la producción por encima de aquel máximo a partir de 2010, y la curva dejó de parecerse a una campana. La geología tenía razón; lo que cambió fue el terreno de juego.",
        destacado: { tipo: "frase", frase: "Acertó durante cuarenta años, hasta que cambió la técnica." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Nada de esto significa que el petróleo sea infinito, porque no lo es: es un recurso limitado y cada yacimiento nuevo resulta más caro y más difícil de explotar que el anterior. Lo que ha cambiado es la pregunta. Hoy se discute menos cuándo se acabará y más cuándo se dejará de usar, por precio de las alternativas y por decisiones políticas sobre emisiones. Es decir, la conversación ha pasado de la escasez a la demanda. Y aquella predicción de 1919 sigue recordando que una reserva es un cálculo, no un depósito.",
      },
    ],
  },
];
