import type { Short } from "../shorts";

/* ==========================================================================
   Mar.

   El océano se cuenta casi siempre con superlativos —lo más profundo, lo más
   oscuro, lo desconocido— y eso, repetido, no dice nada.

   La regla del tema: el mar se cuenta con INSTRUMENTOS. Una boya que midió
   algo que se creía imposible, un hidrófono que lleva décadas escuchando,
   un satélite que confirmó lo que los marineros contaban y nadie creía. La
   historia es siempre el momento en que algo dejó de ser leyenda porque un
   aparato lo registró.

   Y se respeta a quien lo contó antes de que hubiera aparato. Muchas de esas
   leyendas resultaron ser descripciones exactas hechas por gente a la que se
   tomó por exagerada durante un siglo.
   ========================================================================== */

export const MAR: Short[] = [
  {
    id: "ola-draupner",
    titulo: "La ola que era un cuento",
    gancho: "Un láser midió 25,6 metros en el mar del Norte y se acabó la discusión.",
    categoria: "Mar",
    color: "var(--slate)",
    encargo: "Una ola enorme rompiendo contra una estructura metálica en mar abierto.",
    fotos: [
      {
        archivo: "Oseberg A - Waves II.jpg",
        autor: "Una ola rompiendo sobre la plataforma Oseberg A, en el mar del Norte. Fotografía de Richard Child.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Oseberg_A_-_Waves_II.jpg",
        foco: "50% 55%",
        alt: "Una plataforma petrolífera con el agua cayendo en cortina desde la cubierta y el mar blanco de espuma debajo.",
      },
      {
        archivo: "Oseberg A - Waves IV.jpg",
        autor: "La misma plataforma minutos después, con el mar reventando entre las patas de hormigón. Fotografía de Richard Child.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Oseberg_A_-_Waves_IV.jpg",
        foco: "50% 60%",
        alt: "Dos columnas de hormigón sosteniendo una plataforma, rodeadas de espuma que salta varios metros.",
      },
      {
        archivo: "Katsushika Hokusai - Thirty-Six Views of Mount Fuji- The Great Wave Off the Coast of Kanagawa - Google Art Project.jpg",
        autor: "La gran ola de Kanagawa, estampa de Katsushika Hokusai, hacia 1831.",
        licencia: "Dominio público",
        pdPorEdad: 1849,
        fuente: "https://commons.wikimedia.org/wiki/File:Katsushika_Hokusai_-_Thirty-Six_Views_of_Mount_Fuji-_The_Great_Wave_Off_the_Coast_of_Kanagawa_-_Google_Art_Project.jpg",
        foco: "50% 45%",
        alt: "Una ola azul enorme con la cresta rota en garras blancas cerniéndose sobre tres barcas alargadas.",
      },
      {
        archivo: "DZ6 0640 A fleet of small boats dots a calm sea under a dramatic cloud-filled sky as rays of light break through toward the horizon.jpg",
        autor: "Una bahía en calma al atardecer, con las barcas fondeadas. Fotografía de PattayaPatrol.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:DZ6_0640_A_fleet_of_small_boats_dots_a_calm_sea_under_a_dramatic_cloud-filled_sky_as_rays_of_light_break_through_toward_the_horizon.jpg",
        foco: "50% 45%",
        alt: "Decenas de barcas pequeñas repartidas por un mar liso, bajo rayos de luz que atraviesan las nubes.",
      },
    ],
    entrada:
      "Durante siglos, los marineros volvieron a puerto contando lo mismo: muros de agua que aparecen de la nada, casi verticales, muy por encima de todo lo que hay alrededor, y que se van igual de rápido. Los oceanógrafos lo achacaban al miedo, a la exageración y a la mala memoria, y tenían un argumento de peso: los modelos matemáticos con los que se calculaba el oleaje decían que una ola de ese tamaño podía darse una vez cada diez mil años. El 1 de enero de 1995, una plataforma petrolífera del mar del Norte la midió con un láser.",
    paginas: [
      {
        rotulo: "La medición",
        texto:
          "La plataforma Draupner, en el mar del Norte noruego, tenía instalado un medidor láser que apuntaba hacia abajo y registraba la altura de la superficie del agua veces por segundo. Aquel día había temporal, con olas significativas de unos doce metros, lo normal en una tormenta fuerte. A mediodía, el láser registró una sola cresta de <strong>25,6 metros</strong>, más del doble de lo que había alrededor, aparecida y desaparecida en cuestión de segundos. Los daños en cubierta encajaban con el registro, así que no se pudo despachar como un fallo del sensor.",
        destacado: { tipo: "cifra", cifra: "25,6", unidad: "metros de una sola ola" },
      },
      {
        rotulo: "El modelo roto",
        texto:
          "El problema no era la ola: era que el modelo la prohibía. La oceanografía trabajaba con una descripción lineal del oleaje, en la que las olas se suman de forma sencilla y las muy grandes son rarísimas. Con esas cuentas, la de Draupner era prácticamente imposible. Lo que hizo falta fue admitir efectos no lineales: olas que se roban energía unas a otras, corrientes que las comprimen contra sí mismas, trenes de olas que enfocan como una lente. En 2004, un estudio con imágenes de satélite del Atlántico y el Índico detectó decenas de olas gigantes en solo tres semanas de observación.",
        destacado: {
          tipo: "frase",
          frase: "No era que no existieran. Es que la ecuación no las dejaba existir.",
        },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Con el fenómeno aceptado, varios naufragios sin explicación se releyeron desde cero, y las normas de construcción naval y de plataformas cambiaron: hoy se diseñan para aguantar impactos que antes se consideraban fuera del catálogo. En 2019, un equipo de Oxford y Edimburgo reprodujo la ola de Draupner en un tanque de laboratorio haciendo chocar dos trenes de olas en ángulo, y descubrió algo inesperado: si el ángulo pasa de cierto valor, la ola no rompe y se levanta mucho más. La leyenda de los marineros era una descripción técnica esperando instrumento.",
      },
    ],
  },

  {
    id: "punto-nemo",
    titulo: "El sitio más lejos de tierra",
    gancho: "Cuando pasa la Estación Espacial, los humanos más cercanos están arriba.",
    categoria: "Mar",
    color: "var(--sage)",
    curioso: true,
    encargo: "Mar abierto absolutamente vacío bajo un cielo gris, sin horizonte definido.",
    fotos: [
      {
        archivo: "Tracy Caldwell Dyson in Cupola ISS.jpg",
        autor: "La astronauta Tracy Caldwell Dyson mirando la Tierra desde la cúpula de la Estación Espacial Internacional, 2010. NASA.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File%3ATracy%20Caldwell%20Dyson%20in%20Cupola%20ISS.jpg",
        foco: "50% 42%",
        alt: "Mujer flotando junto a los ventanales de una nave espacial, apoyada en el marco y mirando hacia la Tierra azul.",
      },
      {
        archivo: "ISS031-E-56860 - View of Pacific Ocean.jpg",
        autor: "El Pacífico visto desde la Estación Espacial Internacional. NASA.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File%3AISS031-E-56860%20-%20View%20of%20Pacific%20Ocean.jpg",
        foco: "50% 50%",
        alt: "Extensión de océano vista desde la órbita, con nubes dispersas y el brillo del sol sobre el agua.",
      },
      {
        archivo: "The station pictured from the SpaceX Crew Dragon 5 (cropped).jpg",
        autor: "La Estación Espacial Internacional fotografiada desde una nave que se alejaba, con la Tierra al fondo. NASA.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File%3AThe%20station%20pictured%20from%20the%20SpaceX%20Crew%20Dragon%205%20(cropped).jpg",
        foco: "50% 50%",
        alt: "La estación espacial entera, con sus paneles solares extendidos, recortada sobre el azul del planeta.",
      },
      {
        archivo: "Iceberg in Pléneau Bay, Antarctica (6058728043).jpg",
        autor: "Iceberg en la bahía de Pléneau, en la Antártida: de un bloque así salió el sonido que llamaron Bloop.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AIceberg%20in%20Pl%C3%A9neau%20Bay%2C%20Antarctica%20(6058728043).jpg",
        foco: "50% 50%",
        alt: "Gran bloque de hielo flotando en un mar oscuro, con las paredes azuladas y la superficie erosionada.",
      },
    ],
    entrada:
      "En el Pacífico sur hay un punto que no tiene nada alrededor. La tierra firme más próxima está a 2.688 kilómetros, y no es una costa, sino tres islas diminutas que quedan en tres direcciones distintas y a la misma distancia exacta. Se llama punto Nemo, por el capitán de Julio Verne, y no lo encontró ningún navegante ni aparece en ninguna carta antigua: lo calculó un ingeniero con un ordenador en 1992, resolviendo un problema de geometría que a mano no hay manera de abordar. Nunca ha ido a verlo, y tampoco tendría mucho sentido ir.",
    paginas: [
      {
        rotulo: "El cálculo",
        texto:
          "El ingeniero croata-canadiense Hrvoje Lukatela buscaba el punto oceánico más alejado de cualquier costa, un problema que a mano es inabordable porque hay que comparar cada punto del océano con todo el litoral del planeta. Con geometría computacional le salieron unas coordenadas en mitad del Pacífico sur, equidistantes de la isla Ducie, al norte, del islote Motu Nui junto a la isla de Pascua, al nordeste, y de la isla Maher, en la Antártida, al sur. Nunca ha ido a verlo. No hay nada que ver: es agua igual a la de al lado, y su interés es exclusivamente aritmético.",
        destacado: { tipo: "cifra", cifra: "2.688", unidad: "km hasta la tierra más cercana" },
      },
      {
        rotulo: "Los vecinos",
        texto:
          "De ahí sale el dato que lo hizo famoso. La Estación Espacial Internacional orbita a unos cuatrocientos kilómetros de altura, así que cuando pasa por encima del punto Nemo, sus tripulantes están seis veces más cerca de ese trozo de mar que cualquier persona en tierra. Y hay una segunda consecuencia menos poética: como es el lugar más alejado de todo, se usa como cementerio de naves espaciales. Allí se hacen caer los satélites y las estaciones que se retiran, entre ellas la estación rusa Mir en 2001, y en el fondo hay ya restos de varios cientos de vehículos.",
        destacado: {
          tipo: "frase",
          frase: "El sitio más solo de la Tierra es donde se tiran las naves.",
        },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "El agua de esa zona está además entre las más vacías de vida del océano: es el centro del giro del Pacífico sur, una noria de corrientes que impide que suban nutrientes desde el fondo, y a esa distancia tampoco llega nada arrastrado desde la costa. Es lo que los oceanógrafos llaman un desierto oceánico. Y hay una nota literaria: en 1997, unos hidrófonos captaron cerca de allí un sonido bajísimo y potente al que llamaron <em>Bloop</em>. Se especuló con criaturas gigantes durante años, hasta que se identificó: era un gran iceberg partiéndose.",
      },
    ],
  },

  {
    id: "ballena-52-hercios",
    titulo: "La ballena que nadie oye",
    gancho: "La escucharon los hidrófonos militares durante décadas. Nunca hubo respuesta.",
    categoria: "Mar",
    color: "var(--plum)",
    encargo: "Un hidrófono suspendido de un cable en agua muy oscura, luz cenital tenue.",
    entrada:
      "En 1989, los hidrófonos que la Marina de Estados Unidos había repartido por el Pacífico para vigilar submarinos soviéticos registraron un canto de ballena que no encajaba con ninguno conocido. La estructura era de ballena, pero la frecuencia estaba muy por encima de la de cualquier especie grande. Alrededor de 52 hercios, donde no canta nadie.",
    paginas: [
      {
        rotulo: "La frecuencia",
        texto:
          "Una ballena azul canta entre unos 10 y 40 hercios; un rorcual común, alrededor de 20. Son sonidos graves, y esa gravedad no es un capricho: cuanto más baja es la frecuencia, más lejos viaja el sonido en el mar, y esas especies se comunican a cientos de kilómetros. Un canto a <strong>52</strong> hercios sigue siendo grave para un oído humano, pero para una ballena está fuera del registro habitual de su propia conversación. El animal recorría el Pacífico norte año tras año, con las migraciones desfasadas respecto a las especies conocidas, y siempre solo en los registros.",
        destacado: { tipo: "cifra", cifra: "52", unidad: "hercios, donde no canta ninguna especie" },
      },
      {
        rotulo: "El apodo",
        texto:
          "El biólogo Bill Watkins, del instituto oceanográfico de Woods Hole, siguió las grabaciones durante doce años y publicó el análisis en 2004. La prensa la bautizó como «la ballena más solitaria del mundo» y la historia se convirtió en un símbolo de la soledad, con documentales, canciones y campañas. Los especialistas llevan desde entonces poniendo peros al apodo: nada indica que las demás ballenas no la oigan, porque sus oídos abarcan un rango mucho más ancho que el de sus propios cantos. Que cante distinto no significa que nadie la escuche.",
        destacado: {
          tipo: "frase",
          frase: "Cantar distinto no es lo mismo que no ser oído.",
        },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Las hipótesis serias apuntan a un híbrido entre dos especies —cosa documentada entre ballena azul y rorcual común— o a una malformación. Y hay un detalle que se cuenta poco: en 2010, unos sensores separados por bastante distancia captaron llamadas parecidas a la vez, lo que sugiere que puede no ser un único animal. Watkins murió en 2004, poco después de publicar. Nadie ha visto nunca a la ballena de los 52 hercios: todo lo que se sabe de ella entra por el oído, y sigue apareciendo de vez en cuando en los registros.",
      },
    ],
  },
];
