import type { Short } from "../shorts";

/* ==========================================================================
   Desiertos.

   El riesgo del tema es la estampa: la duna, el camello, el silencio.
   Tres tópicos y ninguna información.

   La regla del tema: un desierto se cuenta como ALGO QUE CAMBIA. No es un
   escenario fijo sino un sitio que fue otra cosa o que lo será, y casi
   siempre por una causa medible: una oscilación del eje terrestre, una
   corriente marina fría, un arado. Lo interesante nunca es la arena, es
   el antes y el después.

   Y se dice siempre qué había allí antes y qué queda enterrado debajo.
   ========================================================================== */

export const DESIERTOS: Short[] = [
  {
    id: "sahara-verde",
    titulo: "El Sáhara estuvo verde",
    gancho: "Hay pinturas rupestres de gente nadando en cuevas del desierto más seco del mundo.",
    categoria: "Desiertos",
    color: "var(--ochre)",
    encargo: "Una pared de roca con figuras humanas pintadas en ocre, en penumbra.",
    /* Lo que hay hoy, lo que hubo, por qué cambió y lo que queda: el desierto
       al amanecer, un oasis con agua de verdad entre las dunas, la Tierra
       entera —que es de lo que depende todo esto— y las pinturas de gente y
       ganado en mitad de la nada. */
    fotos: [
      {
        archivo: "Erg Chebbi sunset.jpg",
        autor: "El erg Chebbi, en el Sáhara marroquí, al caer el sol. Fotografía de Thomas Fuhrmann.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Erg_Chebbi_sunset.jpg",
        foco: "50% 45%",
        alt: "Dunas de arena naranja rizadas por el viento, con el sol tocando el horizonte al fondo.",
      },
      {
        archivo: "Libya 5391 Ubari Lakes Luca Galuzzi 2007.jpg",
        autor:
          "Uno de los lagos de Ubari, en el desierto de Libia: agua y palmeras entre las dunas. Fotografía de Luca Galuzzi.",
        licencia: "CC BY-SA 2.5",
        fuente: "https://commons.wikimedia.org/wiki/File:Libya_5391_Ubari_Lakes_Luca_Galuzzi_2007.jpg",
        foco: "50% 55%",
        alt: "Un lago verde rodeado de palmeras datileras, con una duna enorme de arena clara detrás.",
      },
      {
        archivo: "View of Earth showing the Arctic, Europe, and Asia.jpg",
        autor:
          "La Tierra desde el satélite Suomi NPP. La inclinación del eje decide cuánto sol recibe cada franja del planeta. NASA y NOAA.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:View_of_Earth_showing_the_Arctic,_Europe,_and_Asia.jpg",
        foco: "50% 50%",
        alt: "La Tierra vista desde el espacio como un disco completo, con el Ártico arriba y Europa y Asia debajo.",
      },
      {
        archivo: "The Tanzoumaitak cave painting in Tassili n'ajjer.jpg",
        autor:
          "Pinturas rupestres de Tanzoumaitak, en el Tassili n'Ajjer argelino, hoy en pleno desierto. Fotografía de Issam Barhoumi.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:The_Tanzoumaitak_cave_painting_in_Tassili_n%27ajjer.jpg",
        foco: "50% 35%",
        alt: "Figuras humanas y animales pintadas en ocre sobre la pared inclinada de un abrigo de roca.",
      },
    ],
    entrada:
      "Sudoeste de Egipto, 1933. Un explorador húngaro que busca un oasis perdido encuentra en una cueva del desierto, a cientos de kilómetros de cualquier agua, unas pinturas rupestres con figuras humanas en postura de nadar. Alrededor no hay más que arena y roca en todas direcciones, en el sitio más seco del planeta, donde puede no llover en varios años seguidos. El hallazgo tardó décadas en tomarse en serio, porque la alternativa a que aquello fuera un dibujo simbólico resultaba mucho más difícil de creer: que quien lo pintó estuviera dibujando lo que veía. Porque si allí hubo gente nadando, el desierto más seco del mundo estuvo lleno de agua. Y eso es lo que pasó.",
    paginas: [
      {
        rotulo: "Los lagos",
        texto:
          "Aquellas pinturas tienen entre seis mil y diez mil años, y no son una fantasía: en la misma zona hay grabados de jirafas, de elefantes y de vacas domésticas, y bajo la arena se han encontrado lechos de ríos secos, conchas de moluscos de agua dulce y sedimentos de lago. Los sondeos por satélite han cartografiado cauces enteros enterrados a pocos metros de profundidad. Donde hoy no cae una gota había sabana con hierba alta, hipopótamos y poblados de pastores que enterraban a sus muertos con collares de cuentas y con cerámica decorada.",
        destacado: { tipo: "frase", frase: "Bajo la arena hay conchas de agua dulce y cauces de río." },
      },
      {
        rotulo: "La inclinación",
        texto:
          "La causa no fue nada que hiciera nadie. El eje de la Tierra oscila con ciclos de decenas de miles de años, y esa oscilación cambia la cantidad de sol que recibe cada hemisferio en verano y desplaza las lluvias del monzón hacia el norte o hacia el sur. Hace unos nueve mil años el monzón africano llegaba mucho más arriba y regaba el norte del continente entero. Alrededor del año 3500 antes de Cristo se retiró, y el paisaje se secó en cuestión de unos pocos siglos, no de milenios como se pensaba antes.",
        destacado: { tipo: "cifra", cifra: "9.000", unidad: "años cuando el monzón llegaba al norte" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquella gente se marchó hacia donde seguía habiendo agua, y buena parte fue a parar al valle de un río que corre de sur a norte; hay quien relaciona esa concentración repentina de población con el nacimiento de la civilización egipcia poco después. El ciclo continúa, así que el desierto volverá a verdear dentro de unos quince mil años sin que nadie mueva un dedo. Y las pinturas de la cueva siguen en su sitio, a doscientos kilómetros del pozo más cercano, con gente flotando en un agua que estuvo allí de verdad.",
      },
    ],
  },

  {
    id: "desierto-sin-lluvia",
    titulo: "Hay desiertos sin una gota",
    gancho: "Algunas estaciones no han registrado una gota en todo el siglo que llevan midiendo.",
    categoria: "Desiertos",
    color: "var(--slate)",
    encargo: "Una llanura agrietada de sal blanca con montañas peladas al fondo.",
    fotos: [
      {
        archivo: "Anfiteatro, Valle de la Luna, San Pedro de Atacama, Chile, 2016-02-01, DD 149.JPG",
        autor: "El anfiteatro del Valle de la Luna, cerca de San Pedro de Atacama, 2016. Fotografía de Diego Delso.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Anfiteatro,_Valle_de_la_Luna,_San_Pedro_de_Atacama,_Chile,_2016-02-01,_DD_149.JPG",
        foco: "50% 55%",
        alt: "Cortados de roca rojiza sobre una llanura cubierta de costra blanca de sal, bajo un cielo sin nubes.",
      },
      {
        archivo: "Miscanti Lagoon near San Pedro de Atacama Chile Luca Galuzzi 2006.jpg",
        autor: "Laguna Miscanti, en el altiplano sobre el desierto de Atacama, 2006. Fotografía de Luca Galuzzi.",
        licencia: "CC BY-SA 2.5",
        fuente: "https://commons.wikimedia.org/wiki/File:Miscanti_Lagoon_near_San_Pedro_de_Atacama_Chile_Luca_Galuzzi_2006.jpg",
        foco: "50% 50%",
        alt: "Una laguna azul intenso al pie de unos volcanes pelados, con la orilla blanca de sal.",
      },
      {
        archivo: "Oficinas salitreras de Humberstone y Santa Laura, Chile, 2016-02-11, DD 89.jpg",
        autor: "Oficinas salitreras de Humberstone y Santa Laura, abandonadas en el desierto chileno, 2016. Fotografía de Diego Delso.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Oficinas_salitreras_de_Humberstone_y_Santa_Laura,_Chile,_2016-02-11,_DD_89.jpg",
        foco: "50% 55%",
        alt: "Naves y estructuras metálicas oxidadas de una explotación de salitre vacía en mitad del desierto.",
      },
      {
        archivo: "ALMAs OSF An Oasis in the Desert.jpg",
        autor: "Instalaciones del observatorio ALMA en el desierto de Atacama. Fotografía de J. Velásquez para el ESO, 2015.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:ALMAs_OSF_An_Oasis_in_the_Desert.jpg",
        foco: "50% 50%",
        alt: "Antenas y edificios de un observatorio astronómico levantados sobre una explanada árida rodeada de cerros.",
      },
    ],
    entrada:
      "Norte de Chile, 1971. Un equipo instala estaciones meteorológicas en una franja de desierto encajada entre la cordillera y la costa, con la idea de medir cuánto llueve allí exactamente. Décadas después, algunas de esas estaciones no han registrado todavía ni una sola precipitación medible: ni un chubasco, ni una tormenta perdida, nada. Es el sitio no polar más seco del planeta y lleva así varios millones de años seguidos, desde mucho antes de que existiera nuestra especie, lo que significa que ese suelo guarda intacto todo lo que le ha ido cayendo encima.",
    paginas: [
      {
        rotulo: "Tres barreras",
        texto:
          "La sequedad tiene tres causas que se suman. Por el este, la cordillera de los Andes bloquea toda la humedad que llega del Atlántico y del Amazonas. Por el oeste, una corriente marina fría recorre la costa y enfría el aire de abajo, de modo que no sube ni llega a formar nubes de lluvia. Y por encima se sitúa una zona de aire descendente permanente, que al bajar se calienta y reseca todavía más. El resultado es un suelo cargado de sales que en cualquier otro sitio se habrían disuelto con la lluvia.",
        destacado: { tipo: "frase", frase: "Cordillera, corriente fría y aire que baja: tres barreras." },
      },
      {
        rotulo: "El salitre",
        texto:
          "Esa falta de lluvia dejó acumulada una capa enorme de nitrato de sodio, que sirve tanto para fertilizante como para fabricar explosivos, y que en el siglo XIX se convirtió en el negocio más rentable del continente. Se levantaron decenas de pueblos mineros en mitad de la nada, con teatro, piscina y ferrocarril propio, y por aquel mineral se libró una guerra entre tres países que cambió las fronteras para siempre. En 1909 dos químicos alemanes aprendieron a fabricar nitrógeno del aire, y en veinte años esos pueblos estaban vacíos.",
        destacado: { tipo: "cifra", cifra: "1909", unidad: "el año que arruinó a aquellos pueblos" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El mismo suelo que arruinó a los pueblos sirve hoy para otras cosas. Las agencias espaciales prueban allí los vehículos que van a Marte, porque la química del terreno y la ausencia de agua se parecen bastante a las de allá arriba; los telescopios más grandes del mundo están en esos cerros por la sequedad del aire, que es lo que enturbia las imágenes; y los cuerpos enterrados hace miles de años aparecen momificados de forma natural, con la piel y la ropa puestas. Donde no llueve se conserva todo.",
      },
    ],
  },

  {
    id: "tormentas-de-polvo",
    titulo: "El polvo tapó el sol",
    gancho: "Araron tanta hierba que el suelo se levantó con el viento y viajó dos mil kilómetros.",
    categoria: "Desiertos",
    color: "var(--clay)",
    encargo: "Una pared de polvo oscuro avanzando sobre una granja de madera en la llanura.",
    fotos: [
      {
        archivo: "Dust storm approaching Stratford, Texas.jpg",
        autor: "Tormenta de polvo acercándose a Stratford, Texas, abril de 1935.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File%3ADust%20storm%20approaching%20Stratford%2C%20Texas.jpg",
        foco: "50% 50%",
        alt: "Pared de polvo enorme avanzando sobre unas casas bajas de madera en la llanura.",
      },
      {
        archivo: "Dust Storm in Rolla, Kansas 05-06-35 (4546091662).jpg",
        autor: "Tormenta de polvo en Rolla, Kansas, mayo de 1935.",
        licencia: "No restrictions",
        fuente: "https://commons.wikimedia.org/wiki/File%3ADust%20Storm%20in%20Rolla%2C%20Kansas%2005-06-35%20(4546091662).jpg",
        foco: "50% 50%",
        alt: "Nube de tierra oscura cubriendo el cielo sobre un pueblo de la llanura.",
      },
      {
        archivo: "Dust Storms, \"Dust Storm Near Beaver, Oklahoma\" - NARA - 195354.tif",
        autor: "Tormenta de polvo cerca de Beaver, Oklahoma, julio de 1935.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File%3ADust%20Storms%2C%20%22Dust%20Storm%20Near%20Beaver%2C%20Oklahoma%22%20-%20NARA%20-%20195354.tif",
        foco: "50% 50%",
        alt: "Frente de polvo cruzando el horizonte plano de Oklahoma.",
      },
      {
        archivo: "Dust Storm, \"Dust Storm Approaching Spearman, Texas.\" - NARA - 196033.tif",
        autor: "Tormenta de polvo acercándose a Spearman, Texas, abril de 1935.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File%3ADust%20Storm%2C%20%22Dust%20Storm%20Approaching%20Spearman%2C%20Texas.%22%20-%20NARA%20-%20196033.tif",
        foco: "50% 50%",
        alt: "Muro de tierra en movimiento visto desde un pueblo pequeño de Texas.",
      },
    ],
    entrada:
      "Llanuras centrales de Estados Unidos, 1935. Una nube de tierra de dos kilómetros de alto y varios de ancho avanza rodando sobre los campos y deja las casas completamente a oscuras a mediodía, como si hubiera caído la noche de golpe. La gente se mete debajo de las camas con trapos mojados en la cara para poder respirar mientras pasa. Aquel año hay decenas de tormentas parecidas, una detrás de otra, y la peor de todas llega a cubrir de polvo la costa este del país, a dos mil kilómetros de allí.",
    paginas: [
      {
        rotulo: "El arado",
        texto:
          "Lo que había debajo era hierba. Aquellas praderas llevaban milenios cubiertas por gramíneas de raíces profundas que sujetaban el suelo y aguantaban las sequías sin despeinarse. En dos décadas se araron millones de hectáreas para sembrar trigo, empujados por los buenos precios de la Primera Guerra Mundial y por los tractores nuevos, que permitían voltear en un día lo que antes costaba semanas. Cuando llegó una sequía larga, hacia 1931, el trigo se secó y no quedó nada agarrando la tierra: solo polvo suelto y un viento que en esas llanuras no encuentra ni un árbol que lo frene.",
        destacado: { tipo: "frase", frase: "Debajo había hierba con raíces de dos metros." },
      },
      {
        rotulo: "Ventiscas negras",
        texto:
          "Así las llamaron. El polvo entraba por las rendijas de las puertas y se acumulaba dentro de las casas como si fuera nieve; había que barrer varias veces al día y comer con un paño encima del plato para que no se llenara la comida. Muchos niños y ancianos enfermaron de una neumonía de polvo que llenaba los pulmones de partículas de sílice. En abril de 1935, una de aquellas nubes recorrió el país entero y oscureció la capital justo mientras el Congreso debatía una ley de conservación del suelo, que se aprobó ese mismo día.",
        destacado: { tipo: "cifra", cifra: "2.000", unidad: "kilómetros viajó el polvo, hasta el mar" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Dos millones y medio de personas abandonaron la región, en la mayor migración interna de la historia del país. La respuesta pública fue técnica y masiva: se enseñó a arar siguiendo las curvas de nivel en lugar de en línea recta, se pagó por dejar campos en barbecho y se plantaron más de doscientos millones de árboles en franjas para cortar el viento. Buena parte de esas hileras siguen en pie ochenta años después, y desde el aire se ven como rayas verdes cruzando las llanuras que en 1935 se levantaron enteras.",
      },
    ],
  },
];
