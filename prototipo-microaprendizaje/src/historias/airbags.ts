import type { Short } from "../shorts";

/* ==========================================================================
   Los airbags.

   Una explosión controlada que salva vidas y que ha matado a gente por un
   error de calibración. El tema se estropea si se cuenta como historia de
   la seguridad vial en general.

   La regla del tema: todo se mide EN MILISEGUNDOS, y esa escala se dice
   siempre antes de explicar nada. Los fallos se cuentan con su cifra y sin
   dramatismo, porque el dato ya es bastante fuerte por sí solo.
   ========================================================================== */

export const AIRBAGS: Short[] = [
  {
    id: "explotar-para-salvar",
    titulo: "Cómo se infla un airbag",
    gancho: "No se infla con aire comprimido. Quema una pastilla química y llena la bolsa en cuatro centésimas de segundo.",
    categoria: "Tecnología",
    color: "var(--slate)",
    encargo: "Airbag desplegado en el volante de un coche accidentado, ya flácido.",
    /* La bolsa después, la caja antes, el coche entero y la etiqueta que salió
       de los niños muertos. Las dos primeras son el mismo objeto en sus dos
       estados, que es justo lo que cuesta imaginarse: eso sale de ahí. */
    fotos: [
      {
        archivo: "Abandoned car interior showing a deployed airbag and a worn steering wheel in a forgotten location.jpg",
        autor:
          "Un airbag ya disparado, colgando del volante. Se llena y se vacía en menos de dos décimas de segundo, y así es como se queda. Fotografía de Shixart1985.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Abandoned_car_interior_showing_a_deployed_airbag_and_a_worn_steering_wheel_in_a_forgotten_location.jpg",
        foco: "50% 42%",
        alt: "El interior polvoriento de un coche abandonado, con la bolsa blanca del airbag colgando flácida sobre el volante.",
      },
      {
        archivo: "Renault Talisman Grandtour (5) - Undeployed airbag.jpg",
        autor:
          "El airbag del acompañante sin disparar, con el salpicadero quitado: la caja blanca lleva dentro la bolsa doblada y el bote que la llena. Fotografía de Cjp24, 2018.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Renault_Talisman_Grandtour_(5)_-_Undeployed_airbag.jpg",
        foco: "50% 40%",
        alt: "Una caja blanca rectangular atornillada dentro del armazón de un salpicadero desmontado, entre cables y travesaños metálicos.",
      },
      {
        archivo: "Ford Fiesta 2008 Crashed.jpg",
        autor:
          "Los dos airbags delanteros de un coche accidentado, ya desinflados. Lo que amortigua no es el gas quieto: es el gas escapándose mientras el cuerpo aplasta la bolsa. Fotografía de StomboyCarGeek.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Ford_Fiesta_2008_Crashed.jpg",
        foco: "50% 55%",
        alt: "El interior de un coche siniestrado con las dos bolsas de los airbags arrugadas sobre el volante y el salpicadero.",
      },
      {
        archivo: "Suzuki Swift 2011 - Multilanguage Airbag Label.jpg",
        autor:
          "La etiqueta que llevan hoy todos los coches, en seis idiomas: nunca una silla infantil de espaldas delante de un airbag activo. Fotografía de StomboyCarGeek, 2021.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Suzuki_Swift_2011_-_Multilanguage_Airbag_Label.jpg",
        foco: "50% 22%",
        alt: "Una pegatina de aviso con el dibujo tachado de una silla infantil delante de un airbag, y el texto repetido en varios idiomas debajo.",
      },
    ],
    entrada:
      "Estados Unidos y Alemania, con la patente original de 1953 y la instalación de serie desde 1981. Un airbag tiene que estar completamente lleno antes de que la cabeza del conductor llegue al volante, y ese plazo es de unas cuatro centésimas de segundo. Para hacerse una idea, un parpadeo dura ocho veces más. Ningún compresor puede llenar nada en ese tiempo, y llevar el gas ya comprimido en un depósito tampoco vale, porque un depósito a presión dentro del volante es una bomba esperando. La única manera de mover tanto gas tan rápido es provocar una reacción química explosiva a un palmo de la cara del conductor, y que salga bien todas las veces.",
    paginas: [
      {
        rotulo: "La pastilla",
        texto:
          "Dentro del volante hay un bote metálico con unas pastillas de un compuesto sólido de nitrógeno. Cuando el sensor detecta un choque, una chispa eléctrica enciende esas pastillas de golpe. El sólido se descompone y suelta un volumen enorme de gas nitrógeno en milésimas de segundo. Ese gas pasa por un filtro que lo enfría y le quita las partículas antes de entrar en la bolsa. La bolsa se despliega a más de doscientos kilómetros por hora y se llena por completo. El polvo blanco que queda después no es humo, sino talco puesto para que la tela no se pegue.",
        destacado: { tipo: "frase", frase: "El polvo blanco no es humo: es talco de la tela." },
      },
      {
        rotulo: "Y desinflarse",
        texto:
          "La parte que nadie espera es que el airbag tiene que vaciarse casi tan rápido como se llena. Una bolsa dura y llena de gas sería una pared, y chocar contra ella haría bastante daño. Lo que amortigua no es el gas quieto, sino el gas escapándose mientras el cuerpo lo aplasta. Por eso la bolsa lleva unos agujeros calibrados por detrás que dejan salir el nitrógeno. El tamaño de esos agujeros decide cuánto frena y está calculado con muchísimo cuidado. Cuando alguien sale del coche, el airbag ya está flácido y colgando del volante.",
        destacado: { tipo: "cifra", cifra: "40", unidad: "milisegundos tarda en llenarse del todo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un sistema que salva miles de vidas al año y que también ha matado a gente. Los primeros modelos estadounidenses se calibraron para un adulto sin cinturón y golpeaban demasiado fuerte. Varios niños sentados delante murieron por el propio despliegue en choques que habrían sobrevivido. De ahí viene la norma de no llevar nunca una silla infantil delante con el airbag activado. Y de ahí viene también el airbag de dos fases, que se infla más o menos según el choque. El sensor mide la desaceleración y decide cuánta pastilla quema, porque no todos los golpes son iguales.",
      },
    ],
  },
  {
    id: "saber-que-es-un-choque",
    titulo: "Un bache no es un choque",
    gancho: "Un frenazo fuerte y un golpe a treinta por hora se parecen mucho. Decidir mal cuesta vidas en los dos sentidos.",
    categoria: "Tecnología",
    color: "var(--clay)",
    encargo: "Unidad de control de airbag abierta, con la placa y el acelerómetro visibles.",
    fotos: [
      {
        archivo: "Abandoned car interior showing a deployed airbag and a worn steering wheel in a forgotten location.jpg",
        autor: "Los airbags de un coche abandonado, ya disparados y deshinchados sobre el volante y el salpicadero. Fotografía de Shixart1985.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Abandoned_car_interior_showing_a_deployed_airbag_and_a_worn_steering_wheel_in_a_forgotten_location.jpg",
        foco: "50% 50%",
        alt: "El interior polvoriento de un coche con dos bolsas blancas de tela colgando flácidas del volante y del salpicadero.",
      },
      {
        archivo: "Two JRC RC4580 dual op amps on a sound card PCB (144128909).jpg",
        autor: "Componentes soldados en una placa de circuito impreso, vistos de cerca. Fotografía de Samtoucan.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Two_JRC_RC4580_dual_op_amps_on_a_sound_card_PCB_(144128909).jpg",
        foco: "50% 50%",
        alt: "Chips negros y componentes diminutos soldados sobre una placa verde llena de pistas de cobre.",
      },
      {
        archivo: "Bga und via IMGP4531 wp.jpg",
        autor: "Detalle de una placa electrónica con sus vías y contactos. Fotografía de Smial.",
        licencia: "FAL",
        fuente: "https://commons.wikimedia.org/wiki/File:Bga_und_via_IMGP4531_wp.jpg",
        foco: "50% 50%",
        alt: "Macro de una placa de circuito con hileras de puntos de soldadura y pistas finísimas entre ellos.",
      },
      {
        archivo: "Renault Laguna 01 airbag by-dpc.jpg",
        autor: "Los airbags disparados de un turismo tras un accidente. Fotografía de David Pérez.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Renault_Laguna_01_airbag_by-dpc.jpg",
        foco: "50% 50%",
        alt: "El habitáculo de un coche accidentado con las bolsas del conductor y del acompañante desplegadas.",
      },
    ],
    entrada:
      "Todos los coches modernos, con el sensor electrónico generalizado desde 1990. El airbag tiene que tomar una decisión en menos de veinte milésimas de segundo, sin consultar con nadie: decidir si lo que está pasando ahí fuera es un accidente o no lo es. Si se dispara por un bordillo o un bache, hiere a alguien sin ningún motivo y cuesta miles de euros de reparación. Si no se dispara en un choque de verdad, no sirve absolutamente de nada y lo mismo daría no haberlo montado. Todo lo que hace un airbag, y todo lo que se discute de él, sale de esa cuenta de veinte milésimas.",
    paginas: [
      {
        rotulo: "Medir el frenazo",
        texto:
          "El sensor que decide todo es un acelerómetro, una pieza que mide cuánto se frena el coche. Dentro lleva una masa diminuta grabada en silicio que se mueve un poco cuando el coche cambia de velocidad. Ese movimiento minúsculo se convierte en una señal eléctrica que el ordenador lee mil veces por segundo. Un frenazo brusco da una desaceleración de un par de unidades y dura casi un segundo entero. Un choque frontal da veinte veces más y dura unas pocas centésimas, así que la forma es distinta. El programa no mira solo el pico, sino cómo evoluciona la curva en los primeros milisegundos.",
        destacado: { tipo: "frase", frase: "No mira el golpe: mira la forma de la curva." },
      },
      {
        rotulo: "Muchos sensores",
        texto:
          "Un coche moderno no lleva un solo sensor, sino toda una red repartida por la carrocería. Hay acelerómetros en el frontal, en los pilares de las puertas y en la unidad central. La unidad compara lo que dicen todos antes de disparar, para no fiarse de uno solo. También mira si el cinturón está abrochado y cuánto pesa el ocupante del asiento. Con cinturón puesto, el airbag se dispara más suave, porque el cinturón ya está frenando el cuerpo. Un asiento con poco peso encima puede desactivar el airbag de ese lado por completo.",
        destacado: { tipo: "cifra", cifra: "20", unidad: "milisegundos tiene el sistema para decidir" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un aparato que va conectado a una batería propia dentro de la unidad de control. El motivo es que un choque puede cortar los cables antes de que el airbag se dispare. Con esa reserva, el sistema sigue funcionando unos segundos aunque el coche se quede sin electricidad. Quedó también un motivo por el que un airbag usado nunca debe manipularse en casa. Uno sin disparar sigue teniendo la carga dentro, y se ha disparado en talleres al desmontarlo. Los desguaces lo tratan como material pirotécnico y lo activan a distancia antes de reciclar.",
      },
    ],
  },
  {
    id: "la-mayor-llamada-a-revision",
    titulo: "El airbag que reventaba",
    gancho: "El gas se generaba con una sustancia barata que se estropea con la humedad. Al estropearse, el bote reventaba.",
    categoria: "Catástrofes",
    color: "var(--plum)",
    curioso: true,
    encargo: "Generador de gas de airbag desmontado sobre un banco de taller.",
    entrada:
      "Japón y todo el mundo, con el problema destapado a partir de 2008. Un fabricante de airbags cambió el compuesto que genera el gas por otro más barato y más potente. Ese compuesto tiene una debilidad conocida, porque absorbe humedad del aire y se degrada con los años. Degradado, arde demasiado deprisa y hace estallar el bote metálico que lo contiene.",
    paginas: [
      {
        rotulo: "La metralla",
        texto:
          "Un airbag que funciona bien quema el compuesto a una velocidad controlada dentro del bote. Si el compuesto se ha degradado, arde mucho más deprisa y la presión sube más de lo previsto. El bote metálico no aguanta y se parte, lanzando trozos de metal hacia el interior del coche. Esos trozos salen justo desde el volante y a la altura de la cara del conductor. Se han documentado más de treinta muertes y varios cientos de heridos graves por esa causa. La ironía es que ocurría en accidentes leves que la persona habría sobrevivido sin problema.",
        destacado: { tipo: "frase", frase: "El bote reventaba y lanzaba metal contra la cara." },
      },
      {
        rotulo: "Cien millones",
        texto:
          "El fabricante suministraba a casi todas las marcas del mundo, y ahí está la escala del problema. La llamada a revisión acabó afectando a más de cien millones de vehículos en decenas de países. Es la mayor operación de este tipo que se ha hecho nunca en la industria del automóvil. El riesgo era mayor en zonas calurosas y húmedas, porque la degradación depende del clima. Por eso las autoridades priorizaron los coches matriculados en las regiones más húmedas del planeta. La empresa acabó en quiebra y siguen circulando vehículos afectados que nadie ha llevado al taller.",
        destacado: { tipo: "cifra", cifra: "100", unidad: "millones de vehículos afectados" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una lección de diseño que se estudia en cualquier escuela de ingeniería de seguridad. Un componente que envejece mal es peor que uno que falla el primer día, porque tarda en verse. Los ensayos de la época duraban unos meses y el problema tardaba diez años en aparecer. Quedaron ensayos nuevos de envejecimiento acelerado con calor y humedad durante semanas seguidas. Y quedó un consejo práctico que casi nadie sigue, porque las revisiones se avisan por carta. Con el número de bastidor se puede comprobar en internet si un coche tiene alguna pendiente.",
      },
    ],
  },
];
