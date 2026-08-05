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
    entrada:
      "Sudoeste de Egipto, 1933. Un explorador húngaro que busca un oasis perdido encuentra en una cueva del desierto, a cientos de kilómetros de cualquier agua, unas pinturas rupestres con figuras humanas en postura de nadar. Alrededor no hay más que arena y roca en todas direcciones. El hallazgo tardó décadas en tomarse en serio.",
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
    entrada:
      "Norte de Chile, 1971. Un equipo instala estaciones meteorológicas en una franja de desierto encajada entre la cordillera y la costa. Décadas después, algunas de esas estaciones no han registrado ni una sola precipitación medible. Es el sitio no polar más seco del planeta, y lleva así varios millones de años seguidos, desde mucho antes de que existiera nuestra especie.",
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
    entrada:
      "Llanuras centrales de Estados Unidos, 1935. Una nube de tierra de dos kilómetros de alto avanza sobre los campos y deja las casas a oscuras a mediodía. La gente se mete debajo de las camas con trapos mojados en la cara. Aquel año hay decenas de tormentas así, y la peor cubre de polvo hasta la costa este.",
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
