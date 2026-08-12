import type { Short } from "../shorts";

/* ==========================================================================
   Las gafas de sol.

   Un accesorio de moda que es en realidad un equipo de protección. El tema
   se estropea si se cuenta como historia del estilo o de las marcas.

   La regla del tema: cada short parte de LO QUE HACE LA LUZ EN EL OJO
   (quemar, deslumbrar, entrar por una pupila abierta) y solo después
   explica el cristal. El ultravioleta se nombra y se explica siempre.
   ========================================================================== */

export const GAFAS_DE_SOL: Short[] = [
  {
    id: "las-gafas-de-hueso",
    titulo: "Las primeras gafas de sol",
    gancho: "Eran una tira de hueso con dos ranuras finísimas, y protegían de la nieve mejor que cualquier cristal oscuro.",
    categoria: "Objetos",
    color: "var(--slate)",
    encargo: "Gafas de nieve inuit talladas en hueso, con dos ranuras horizontales y cordel de tendón.",
    /* Las gafas, otras gafas distintas, la luz de la que protegen y el sitio
       inesperado donde el mismo truco sigue trabajando. */
    fotos: [
      {
        archivo: "Snow goggles MET DP-15396-001.jpg",
        autor:
          "Gafas de nieve talladas en marfil entre los años 800 y 1200, con dos ranuras estrechas en vez de cristales. Museo Metropolitano de Arte, Nueva York.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Snow_goggles_MET_DP-15396-001.jpg",
        foco: "50% 38%",
        alt: "Una pieza de marfil amarillento con forma de antifaz, ajustada a la nariz, con dos rendijas horizontales talladas a la altura de los ojos.",
      },
      {
        archivo: "Snow goggles, Alaska Eskimo, 1883 - Ethnological Museum, Berlin - DSC01065.JPG",
        autor:
          "Tres pares de gafas de nieve de Alaska, recogidos en 1883: cada pueblo les daba su forma y las hacía del material que tenía. Museo Etnológico de Berlín. Fotografía de Daderot, 2014.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Snow_goggles,_Alaska_Eskimo,_1883_-_Ethnological_Museum,_Berlin_-_DSC01065.JPG",
        foco: "50% 55%",
        alt: "Tres antifaces de madera oscura expuestos en una vitrina, cada uno con una ranura larga y fina abierta de lado a lado.",
      },
      {
        archivo: "Glassy sea ice with iceberg (7873357450).jpg",
        autor:
          "El sol saliendo sobre el hielo marino en la costa este de Groenlandia, en abril de 2012. Fotografía de Jefferson Beck, NASA.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Glassy_sea_ice_with_iceberg_(7873357450).jpg",
        foco: "50% 62%",
        alt: "Una llanura de hielo marino fino con el reflejo blanco del sol bajo extendido sobre ella, y témpanos al fondo.",
      },
      {
        archivo: "Arc welding (13151937313).jpg",
        autor:
          "Un soldador trabajando tras el cristal de su careta. Mira el arco por una ventana pequeña y muy filtrada, por el mismo motivo que las gafas de hueso. Base aérea de Little Rock, Estados Unidos, 2014.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Arc_welding_(13151937313).jpg",
        foco: "55% 45%",
        alt: "Un soldador con careta y guantes trabaja en una nave oscura, iluminado por el resplandor rojo y violeta del arco.",
      },
    ],
    entrada:
      "Ártico, desde hace por lo menos dos mil años. En primavera, la nieve devuelve casi toda la luz que le llega y quien camina sobre ella recibe el doble de sol que en cualquier otro sitio. El resultado es una quemadura en la superficie del ojo que deja ciego durante días y duele como si hubiera arena dentro. El problema no tiene arreglo una vez hecho. No hay pomada ni descanso que devuelvan la vista antes de dos o tres días, y en un sitio donde cazar es comer, tres días ciego son muchos días. Los pueblos del Ártico lo resolvieron hace milenios con una tira de hueso atada a la cabeza, y la solución que encontraron no se parece nada a unas gafas de sol modernas.",
    paginas: [
      {
        rotulo: "La ranura",
        texto:
          "Aquellas gafas se tallaban en hueso de caribú, en marfil o en madera flotada, ajustadas a la cara. En vez de un cristal oscuro llevaban dos ranuras horizontales de un par de milímetros de alto. Esa rendija deja pasar muy poca luz, y de paso hace algo que ningún cristal consigue. Al estrechar la entrada de luz, la imagen se vuelve más nítida, igual que al entornar los ojos. El cazador veía mejor los bordes de una grieta en el hielo con las gafas puestas que sin ellas. El interior se ennegrecía con hollín para que no rebotara luz dentro, y llevaban una cuerda de tendón.",
        destacado: { tipo: "frase", frase: "Una rendija estrecha oscurece y además enfoca." },
      },
      {
        rotulo: "Quemarse el ojo",
        texto:
          "La ceguera de la nieve es una quemadura por radiación ultravioleta en la capa exterior del ojo. Esa radiación no se ve ni se nota mientras ocurre, así que el daño aparece horas después. El afectado se despierta de noche con los ojos llenos de lágrimas y no soporta ninguna luz. Se cura sola en un par de días porque esa capa se regenera, y repetirla mucho pasa factura. En alta montaña el problema es peor todavía, porque hay menos aire filtrando y más nieve reflejando. Las expediciones del siglo XIX que subían a los Alpes llevaban gafas ahumadas por el mismo motivo.",
        destacado: { tipo: "cifra", cifra: "80", unidad: "% de la luz devuelve la nieve fresca" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron esas gafas en los museos de todo el norte, con formas que varían de un pueblo a otro y de un material a otro. Quedó también el principio en un sitio inesperado, porque los soldadores usan una rendija estrecha por la misma razón. Y quedó una lección que se repite en muchos inventos, porque la solución buena no siempre es la más avanzada. Un trozo de hueso con dos cortes protege del ultravioleta el cien por cien, porque simplemente no lo deja entrar. Ningún cristal moderno puede decir lo mismo sin llevar encima un tratamiento químico.",
      },
    ],
  },
  {
    id: "el-cristal-oscuro-que-engana",
    titulo: "Peores que no llevar nada",
    gancho: "El cristal oscuro abre la pupila y deja entrar más luz. Si no filtra el ultravioleta, el ojo recibe más daño que sin nada.",
    categoria: "Medicina",
    color: "var(--ochre)",
    encargo: "Par de gafas de sol muy oscuras sobre un mostrador de mercadillo, sin etiqueta.",
    fotos: [
      {
        archivo: "Sunglasses Carried by Charles A. Lindbergh on His New York to Paris Flight - DPLA - b1febcdb411187b4982ec18b75ff7f64 (page 1).jpg",
        autor: "Gafas de sol de cristales verdes y montura de alambre, con su estuche de ante. Missouri Historical Society.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Sunglasses_Carried_by_Charles_A._Lindbergh_on_His_New_York_to_Paris_Flight_-_DPLA_-_b1febcdb411187b4982ec18b75ff7f64_(page_1).jpg",
        foco: "50% 55%",
        alt: "Unas gafas redondas de lentes verde botella junto a un estuche alargado de ante marrón, sobre fondo blanco.",
      },
      {
        archivo: "World through her eye - Flickr - shioshvili.jpg",
        autor: "Un ojo visto muy de cerca, con el iris y la pupila. Fotografía de Vladimer Shioshvili.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:World_through_her_eye_-_Flickr_-_shioshvili.jpg",
        foco: "50% 50%",
        alt: "Macro de un ojo con el iris veteado y la pupila negra abierta en el centro.",
      },
      {
        archivo: "Sunglasses Carried by Charles A. Lindbergh on His New York to Paris Flight - DPLA - b1febcdb411187b4982ec18b75ff7f64 (page 7).jpg",
        autor: "Las mismas gafas de cerca, con el cristal a contraluz. Missouri Historical Society.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Sunglasses_Carried_by_Charles_A._Lindbergh_on_His_New_York_to_Paris_Flight_-_DPLA_-_b1febcdb411187b4982ec18b75ff7f64_(page_7).jpg",
        foco: "50% 50%",
        alt: "Detalle de una lente circular verde montada en un aro fino de metal.",
      },
      {
        archivo: "Sunglasses Carried by Charles A. Lindbergh on His New York to Paris Flight - DPLA - b1febcdb411187b4982ec18b75ff7f64 (page 12).jpg",
        autor: "Otro ángulo del mismo par y su funda. Missouri Historical Society.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Sunglasses_Carried_by_Charles_A._Lindbergh_on_His_New_York_to_Paris_Flight_-_DPLA_-_b1febcdb411187b4982ec18b75ff7f64_(page_12).jpg",
        foco: "50% 50%",
        alt: "Las gafas plegadas vistas desde arriba, con las patillas cruzadas sobre el fondo claro.",
      },
    ],
    entrada:
      "Todo el mundo, con las normas de etiquetado europeas vigentes desde 1995. En cualquier mercadillo se venden gafas de sol muy oscuras y muy baratas, y lo que casi nadie sabe al comprarlas es que esas gafas pueden hacer bastante más daño que ir sin nada puesto. El motivo es un mecanismo del propio ojo que en este caso trabaja en contra de uno: la pupila se abre en la penumbra para dejar entrar más luz y se cierra cuando hay mucha. Un cristal oscuro sin filtro engaña a ese mecanismo y lo deja abierto justo cuando debería cerrarse.",
    paginas: [
      {
        rotulo: "La pupila abierta",
        texto:
          "La pupila es el agujero por el que entra la luz, y su tamaño lo regula el iris automáticamente. Con mucha luz se cierra hasta quedar del tamaño de la cabeza de un alfiler, y en penumbra se abre. Ese ajuste responde solo a la luz visible, porque el ultravioleta no se ve y el ojo no lo detecta. Unas gafas oscuras bajan la luz visible y hacen que la pupila se abra de par en par. Si el cristal no filtra el ultravioleta, entra más que sin gafas por ese agujero más grande. Es el caso raro en que un producto de protección aumenta exactamente el riesgo del que protege.",
        destacado: { tipo: "frase", frase: "El cristal oscuro abre la pupila y deja entrar más rayos." },
      },
      {
        rotulo: "Los números",
        texto:
          "La etiqueta de unas gafas europeas lleva una categoría del cero al cuatro que dice cuánta luz visible corta. La cero apenas oscurece y la cuatro es tan oscura que no se puede conducir con ella. Ese número no dice nada sobre el ultravioleta, y ahí está la confusión que sufre casi todo el mundo. La protección real la indica una marca aparte, que en Europa es el sello de conformidad de la Unión. Filtrar el ultravioleta es barato y no requiere que el cristal sea oscuro ni caro. Por eso unas gafas transparentes bien fabricadas protegen más que unas negras compradas en la playa.",
        destacado: { tipo: "cifra", cifra: "4", unidad: "categorías de oscuridad, y ninguna habla del ultravioleta" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un producto que se vende como accesorio de moda y está regulado como equipo de protección. Quedaron también las consecuencias de no protegerse, que no son inmediatas y sí acumulativas a lo largo de los años. El ultravioleta acelera las cataratas, que son la opacidad del cristalino y la primera causa de ceguera del mundo. También daña la piel del párpado, que es la más fina del cuerpo y donde aparecen muchos tumores cutáneos. Y quedó el consejo que dan los oftalmólogos y que suena a broma: si son muy baratas, mejor no ponérselas.",
      },
    ],
  },
  {
    id: "el-cristal-polarizado",
    titulo: "El cristal corta el brillo",
    gancho: "No oscurece más: filtra solo la luz que rebota en horizontal, que es justo la que deslumbra.",
    categoria: "Tecnología",
    color: "var(--plum)",
    curioso: true,
    encargo: "Misma escena de un río vista con y sin filtro polarizado, con el fondo visible en una mitad.",
    fotos: [
      {
        archivo: "Dülmen, Hausdülmen, Kettbach -- 2015 -- 8499-503.jpg",
        autor: "El arroyo Kettbach reflejando el cielo, Dülmen, Alemania, 2015.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AD%C3%BClmen%2C%20Hausd%C3%BClmen%2C%20Kettbach%20--%202015%20--%208499-503.jpg",
        foco: "50% 60%",
        alt: "Arroyo recto entre maizales que devuelve el cielo y las nubes como un espejo.",
      },
      {
        archivo: "Haltern am See, Westruper Heide, Pfütze -- 2024 -- 5602-6.jpg",
        autor: "Charco en el brezal de Westrup, Haltern am See, Alemania, 2024.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AHaltern%20am%20See%2C%20Westruper%20Heide%2C%20Pf%C3%BCtze%20--%202024%20--%205602-6.jpg",
        foco: "50% 55%",
        alt: "Charco en un camino de brezal que refleja el cielo y los árboles del fondo.",
      },
      {
        archivo: "Dülmen, Merfeld, Feldweg am Mühlenbach -- 2021 -- 4347-51.jpg",
        autor: "Camino junto al Mühlenbach, Merfeld, Alemania, 2021.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AD%C3%BClmen%2C%20Merfeld%2C%20Feldweg%20am%20M%C3%BChlenbach%20--%202021%20--%204347-51.jpg",
        foco: "50% 55%",
        alt: "Camino de campo mojado en invierno junto a un arroyo, con la luz baja de la mañana.",
      },
      {
        archivo: "Münster, Torminbrücke -- 2018 -- 3592.jpg",
        autor: "El lago Aa desde el puente Tormin, Münster, Alemania, 2018.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AM%C3%BCnster%2C%20Torminbr%C3%BCcke%20--%202018%20--%203592.jpg",
        foco: "50% 55%",
        alt: "Agua quieta de un lago urbano al amanecer, con reflejos alargados sobre la superficie.",
      },
    ],
    entrada:
      "Estados Unidos, 1936. Un estudiante de Harvard había patentado años antes, trabajando casi solo, una lámina de plástico capaz de dejar pasar la luz que vibra en una dirección y bloquear la que vibra en la otra. Aquel año esa lámina llega por fin a las gafas de sol y resuelve de golpe un problema que ningún cristal oscuro había conseguido resolver por más que se oscureciera: el reflejo cegador del agua, de la nieve y del asfalto mojado. No es que las gafas oscurezcan más, es que quitan una luz concreta y dejan pasar el resto.",
    paginas: [
      {
        rotulo: "Luz que vibra",
        texto:
          "La luz viaja como una onda, y esa onda vibra en un plano concreto que puede ser cualquiera. La luz del sol lleva todos los planos mezclados, así que en conjunto no tiene ninguna dirección. Cuando esa luz rebota en una superficie plana y brillante, sale ordenada y vibrando casi toda en horizontal. Ese reflejo ordenado es el brillo que impide ver el fondo de un río o la línea de la carretera. El cristal polarizado lleva dentro una rejilla molecular que solo deja pasar la luz vertical. El reflejo horizontal se queda fuera y el resto de la escena entra casi entera.",
        destacado: { tipo: "frase", frase: "La luz que rebota sale ordenada: por eso deslumbra." },
      },
      {
        rotulo: "Para qué sirve",
        texto:
          "El efecto se nota de golpe en cuanto uno se pone unas y mira hacia el agua. Un pescador ve los peces bajo la superficie, y un conductor ve la carretera sin el brillo del mediodía. Hay un truco para comprobar si unas gafas son polarizadas de verdad y no lo pone en la etiqueta. Se miran a través de ellas y se giran noventa grados, y un reflejo debería aparecer y desaparecer. El sistema tiene un inconveniente que sorprende, porque muchas pantallas emiten luz ya polarizada. Con unas gafas de estas, la pantalla del móvil o del salpicadero puede verse negra según cómo se incline.",
        destacado: { tipo: "cifra", cifra: "1936", unidad: "el año del primer cristal polarizado" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una lámina que se usa en muchísimos sitios más allá de las gafas, y casi todos invisibles. Toda pantalla de cristal líquido lleva dos de esas láminas cruzadas, y sin ellas no se vería nada. Las gafas del cine en tres dimensiones funcionan igual, con cada ojo recibiendo una polarización distinta. Quedó también un fabricante que se hizo enorme con esa lámina y que luego se hizo famoso por otra cosa. Era la misma empresa de las cámaras que revelaban la foto en el momento, y el nombre venía de aquí.",
      },
    ],
  },
];
