import type { Short } from "../shorts";

/* ==========================================================================
   Egipto y los faraones.

   El riesgo del tema es el misterio de sobremesa: enigmas, maldiciones,
   sabidurías perdidas. Suena bien y no informa de nada.

   La regla del tema: Egipto se cuenta con LOS PAPELES Y LOS HUESOS. Un
   registro de raciones de pan y cerveza. Un cementerio de obreros con
   fracturas soldadas. Un diente guardado en una caja que identifica una
   momia. Es una de las civilizaciones que más documentación dejó, así
   que cualquier misterio se resuelve mirando lo que anotaron ellos.

   Y donde hay leyenda popular, se dice quién la fabricó y cuándo.
   ========================================================================== */

export const FARAONES: Short[] = [
  {
    id: "constructores-piramides",
    titulo: "Las pirámides no las levantaron esclavos",
    gancho: "Se ha excavado el poblado de los obreros: cobraban en pan y cerveza y tenían médicos.",
    categoria: "Faraones",
    color: "var(--ochre)",
    encargo: "Bloques de piedra caliza enormes vistos desde muy cerca, al sol.",
    entrada:
      "Meseta de Guiza, siglo XXVI antes de Cristo. Se construye la pirámide más grande de Egipto con más de dos millones de bloques de piedra. La idea de que la levantaron esclavos a latigazos viene de un historiador griego que escribió dos mil años después y de las películas. Las excavaciones cuentan una cosa bastante distinta.",
    paginas: [
      {
        rotulo: "El poblado",
        texto:
          "En 1990 se encontró, a unos cientos de metros del monumento, el poblado donde vivían los trabajadores: barracones, panaderías con moldes de cerámica para hornear a gran escala, fábricas de cerveza, corrales y montañas de huesos de vacuno y de cordero. Las cuentas de lo consumido indican que se sacrificaban varias decenas de reses al día, lo que significa carne para miles de personas. Había también un cementerio con tumbas cuidadas y ajuar, y esqueletos que muestran fracturas soldadas con entablillado y hasta amputaciones sobrevividas, es decir, atención médica organizada y disponible en la propia obra.",
        destacado: { tipo: "frase", frase: "Huesos con fracturas bien soldadas: alguien los curaba." },
      },
      {
        rotulo: "Los turnos",
        texto:
          "Los papeles administrativos encontrados en un puerto del mar Rojo, el registro diario de un capataz, describen el sistema: cuadrillas organizadas en equipos con nombre propio, que competían entre ellas y firmaban las piedras con su marca, y que trabajaban por turnos de unos meses. Muchos eran campesinos que acudían durante la crecida del Nilo, cuando los campos estaban bajo el agua y no había nada que sembrar ni que recoger. Se les pagaba en raciones de grano, pan, cerveza y aceite, y quedaban anotados con su nombre y sus días trabajados.",
        destacado: { tipo: "cifra", cifra: "2,3", unidad: "millones de bloques de piedra" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Nada de esto convierte aquello en un buen empleo: el trabajo era durísimo, la obligación de acudir venía impuesta desde arriba y los esqueletos muestran desgaste de columna y de rodillas en gente joven. Pero la imagen del látigo no aparece por ninguna parte, y sí aparece un Estado capaz de alimentar, alojar, curar y contabilizar a decenas de miles de personas durante veinte años seguidos, que es una hazaña administrativa mayor que la de apilar las piedras. La pirámide no demuestra crueldad ni magia perdida: demuestra sobre todo una contabilidad muy buena y una cadena de suministro que no falló en veinte años.",
      },
    ],
  },

  {
    id: "faraona-borrada",
    titulo: "Un faraón borró a su antecesora de los muros",
    gancho: "Reinó veintidós años y después alguien picó su nombre de cada monumento del país.",
    categoria: "Faraones",
    color: "var(--slate)",
    encargo: "Un relieve egipcio con una figura picada y el hueco liso donde estaba.",
    entrada:
      "Egipto, siglo XV antes de Cristo. Una mujer gobierna el país durante unos veintidós años como faraón de pleno derecho, con la barba postiza ceremonial y todos los títulos, y deja un reinado próspero, con expediciones comerciales y obras enormes. Décadas después de su muerte, alguien ordena borrar de forma sistemática su nombre y su imagen.",
    paginas: [
      {
        rotulo: "El reinado",
        texto:
          "Había empezado como regente de un niño, su hijastro, y en algún momento asumió el cargo completo con todos sus títulos. Mandó una expedición comercial por mar a un país lejano del sur, del que volvieron con incienso, ébano, monos y árboles vivos plantados en cestos, y lo dejó todo grabado en relieve en su templo, con los barcos y la carga detallados uno por uno. Construyó un templo funerario de terrazas escalonadas contra un acantilado que sigue siendo uno de los edificios más admirados del país, y levantó obeliscos de más de veinte metros de una sola pieza.",
        destacado: { tipo: "frase", frase: "Volvieron con incienso, monos y árboles vivos en cestos." },
      },
      {
        rotulo: "El picado",
        texto:
          "Veinte años después de su muerte, con el hijastro ya reinando, empezaron a picar su figura de los relieves, a tapar sus obeliscos levantando muros alrededor y a sustituir su nombre por el de otros faraones en las listas oficiales. El trabajo fue sistemático pero no perfecto: se hizo sobre todo en lo visible y a la altura de la vista, y se olvidaron partes altas, caras interiores y objetos guardados en almacenes. Durante siglos su reinado desapareció de la historia oficial, y solo se recuperó en el siglo XIX.",
        destacado: { tipo: "cifra", cifra: "22", unidad: "años de reinado, borrados después" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Durante mucho tiempo se explicó como una venganza personal del hijastro humillado, aunque hoy se prefiere otra explicación: se hizo tarde, no en caliente, y probablemente buscaba dejar una línea de sucesión masculina limpia para su propio hijo, sin el precedente incómodo de una mujer con el cargo. La momia se identificó en 2007 gracias a un diente guardado en una caja con su nombre, que encajaba exactamente en el hueco de la mandíbula de un cuerpo sin identificar. La borraron de las paredes y se delataron con una muela.",
      },
    ],
  },

  {
    id: "maldicion-inventada",
    titulo: "La maldición de la momia la inventó la prensa",
    gancho: "Un periódico tenía la exclusiva y los demás necesitaban llenar páginas. Se inventaron una amenaza.",
    categoria: "Faraones",
    color: "var(--plum)",
    curioso: true,
    encargo: "Una escalera de piedra bajando hacia una puerta sellada en la roca.",
    entrada:
      "Valle de los Reyes, noviembre de 1922. Se abre una tumba egipcia intacta, la más rica que se ha encontrado nunca, y su descubridor vende la exclusiva informativa a un solo periódico de Londres. El resto de la prensa mundial se queda sin poder contar nada de lo que hay dentro, y necesita llenar páginas todos los días con algo.",
    paginas: [
      {
        rotulo: "El invento",
        texto:
          "Los periódicos excluidos empezaron a publicar lo único que podían: rumores, declaraciones de gente ajena a la excavación y advertencias de novelistas y de ocultistas sobre lo peligroso que resulta molestar a un muerto. Se inventó una inscripción amenazante en la puerta de la tumba, que sencillamente no existe: los textos reales son fórmulas religiosas corrientes. Cuando el financiador de la excavación murió pocos meses después por una infección tras la picadura de un mosquito, la historia ya tenía su primera víctima y a partir de ahí se alimentó sola.",
        destacado: { tipo: "frase", frase: "La inscripción amenazante de la puerta nunca existió." },
      },
      {
        rotulo: "Las cuentas",
        texto:
          "Un estudio publicado en 2002 en una revista médica siguió a las personas presentes en la apertura de la tumba y en la del sarcófago y comparó su edad de fallecimiento con la de otros occidentales que estaban en Egipto en aquellos mismos años. No encontró ninguna diferencia apreciable. El descubridor, que era quien más tiempo había pasado dentro, murió dieciséis años más tarde con sesenta y cuatro años. Sí existe un riesgo real en las tumbas cerradas, los hongos del aire estancado, pero no explica ninguna de las muertes atribuidas.",
        destacado: { tipo: "cifra", cifra: "16", unidad: "años sobrevivió el descubridor" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La leyenda ha resultado enormemente rentable: sostiene películas, novelas y una parte del turismo egipcio, y reaparece cada vez que se abre un sarcófago en un documental. El museo que guarda aquellos objetos tampoco la desmiente demasiado. Es un caso de manual de cómo se fabrica un mito moderno: una exclusiva mal repartida, unos periódicos con espacio que llenar y una coincidencia oportuna. Aquellos reporteros que no pudieron entrar en la tumba acabaron escribiendo la historia que todo el mundo recuerda un siglo después, mucho más que el contenido real de aquella tumba.",
      },
    ],
  },
];
