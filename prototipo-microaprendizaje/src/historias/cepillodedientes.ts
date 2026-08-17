import type { Short } from "../shorts";

/* ==========================================================================
   El cepillo de dientes.

   Un objeto de dos euros que casi todo el mundo usa mal porque nadie le ha
   explicado contra qué está luchando. El tema se estropea si se convierte
   en consejos de dentista.

   La regla del tema: la clave es que LA PLACA ES UNA COLONIA VIVA, no un
   resto de comida, y eso hay que explicarlo antes de hablar de cerdas ni
   de motores. Todo lo demás (la fibra, el temporizador) se justifica desde
   ahí.
   ========================================================================== */

export const CEPILLO_DE_DIENTES: Short[] = [
  {
    id: "el-pelo-de-cerdo",
    titulo: "El cepillo era de cerdo",
    gancho: "Se arrancaba del cuello del animal, se pudría dentro de la boca y era lo mejor que había hasta 1938.",
    categoria: "Objetos",
    color: "var(--clay)",
    encargo: "Cepillo antiguo de mango de hueso con las cerdas naturales muy abiertas.",
    fotos: [
      {
        archivo: "Silver toothbrush set, Birmingham, England, 1793 Wellcome L0058115.jpg",
        autor: "Cepillo de dientes de plata con cerdas naturales y su estuche de piel, Birmingham, 1793. Wellcome Collection.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Silver_toothbrush_set,_Birmingham,_England,_1793_Wellcome_L0058115.jpg",
        foco: "50% 30%",
        alt: "Un cepillo antiguo de mango de plata con cerdas amarillentas, saliendo de un estuche rojo, sobre fondo negro.",
      },
      {
        archivo: "Inkognito. - Flickr - simon berger.jpg",
        autor: "Un cerdo dormido, con la cerda del lomo y del cuello a la vista. Fotografía de Simon Berger.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Inkognito._-_Flickr_-_simon_berger.jpg",
        foco: "50% 60%",
        alt: "Un cerdo blanco y negro tumbado sobre serrín, con el pelo áspero del lomo iluminado a contraluz.",
      },
      {
        archivo: "A Toothbrush.JPG",
        autor: "Un cepillo moderno de mango translúcido y filamentos de nailon. Fotografía de Dwight Burdette.",
        licencia: "CC BY 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:A_Toothbrush.JPG",
        foco: "50% 50%",
        alt: "Un cepillo de dientes verde transparente tumbado sobre fondo blanco, con las cerdas blancas rectas.",
      },
      {
        archivo: "Colorful toothbrush.jpg",
        autor: "Tres cepillos usados en un vaso. Fotografía de Gausanchennai.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Colorful_toothbrush.jpg",
        foco: "50% 30%",
        alt: "Tres cepillos de dientes con las cerdas abiertas y gastadas, asomando de un vaso naranja.",
      },
    ],
    entrada:
      "China, siglo XV, y Europa a partir del XVIII. El primer cepillo con cerdas parecido al que usamos hoy se fabricaba clavando a mano pelo de cerdo en un mango de hueso, de marfil o de bambú, agujero a agujero. Ese pelo no se eligió por gusto: era la única fibra disponible en el mundo con la rigidez adecuada para arrastrar la suciedad sin destrozar la encía. Y tenía dos problemas graves que nadie supo resolver durante siglos. Absorbe agua, así que se reblandece y se acaba pudriendo, y guarda bacterias dentro de su propio hueco.",
    paginas: [
      {
        rotulo: "Pelo de cuello",
        texto:
          "El pelo que servía era el del cuello del cerdo, más grueso y más rígido que el del resto del cuerpo. Los mejores venían de cerdos criados en climas fríos, porque el frío endurece la cerda. Cada pelo es hueco por dentro, y ese hueco es exactamente el problema del material. Se llena de agua y de restos, las bacterias se instalan dentro y el cepillo empieza a oler. Además la cerda mojada pierde rigidez, así que el cepillo limpia peor cuanto más se usa. Y las puntas se rompen en astillas afiladas que hacían sangrar las encías con facilidad.",
        destacado: { tipo: "frase", frase: "Cada pelo es hueco: dentro se instalan las bacterias." },
      },
      {
        rotulo: "La fibra nueva",
        texto:
          "En 1938, una empresa química estadounidense sacó al mercado la primera fibra sintética fabricada del todo en laboratorio. Aquella fibra era el nailon, y el primer producto en el que se usó no fueron las medias, sino un cepillo. El nailon es macizo, no absorbe agua y mantiene la misma rigidez mojado que seco. Resuelve de golpe los tres defectos del pelo de cerdo, y encima cuesta una fracción. Los primeros modelos eran demasiado duros y destrozaban las encías, así que hubo que afinar el grosor. Hoy las puntas se redondean una a una con una máquina, porque una punta cortada raspa el esmalte.",
        destacado: { tipo: "cifra", cifra: "1938", unidad: "el primer cepillo de nailon" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un objeto que se cambia cada tres meses y del que se tiran miles de millones al año. Quedó también la costumbre de cepillarse a diario, que en Europa no se generalizó hasta después de la Segunda Guerra Mundial. La difundieron los ejércitos, que obligaban a hacerlo y devolvieron a casa a millones de hombres acostumbrados. Y quedó el problema de reciclarlo, porque un cepillo mezcla varios plásticos distintos pegados entre sí sin manera de despegarlos. Separarlos cuesta más de lo que valen, así que casi todos acaban en un vertedero o incinerados.",
      },
    ],
  },
  {
    id: "la-placa-no-es-comida",
    titulo: "La placa no es comida",
    gancho: "No se quita el resto del bocadillo. Se desmonta una película de bacterias vivas pegadas al diente.",
    categoria: "Medicina",
    color: "var(--slate)",
    encargo: "Diente ampliado con la película de placa teñida de rojo por un revelador.",
    fotos: [
      {
        archivo: "Granulated White Sugar with Large Crystals, Bright Side Light.jpg",
        autor: "Azúcar de mesa fotografiado de cerca con luz lateral, con los cristales grandes bien separados.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AGranulated%20White%20Sugar%20with%20Large%20Crystals%2C%20Bright%20Side%20Light.jpg",
        foco: "50% 50%",
        alt: "Montón de cristales de azúcar transparentes vistos muy de cerca, brillando con la luz que les llega de lado.",
      },
      {
        archivo: "Mixed-culture biofilm.jpg",
        autor: "Biopelícula de varias especies de bacterias vista con microscopio electrónico de barrido.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AMixed-culture%20biofilm.jpg",
        foco: "50% 28%",
        alt: "Imagen de microscopio: un tapiz de bacterias con forma de bolita y de bastón enredadas unas con otras sobre una superficie.",
      },
      {
        archivo: "Willem Claesz. Heda - Still Life with Oysters, a Rummer, a Lemon and a Silver Bowl - Google Art Project.jpg",
        autor: "Óleo de Willem Claesz. Heda, 1634: ostras, una copa, un limón pelado y un cuenco de plata. Rijksmuseum, Ámsterdam.",
        licencia: "Public domain",
        pdPorEdad: 1680,
        fuente: "https://commons.wikimedia.org/wiki/File%3AWillem%20Claesz.%20Heda%20-%20Still%20Life%20with%20Oysters%2C%20a%20Rummer%2C%20a%20Lemon%20and%20a%20Silver%20Bowl%20-%20Google%20Art%20Project.jpg",
        foco: "50% 55%",
        alt: "Bodegón sobre mantel blanco con ostras abiertas, una copa de vino, un limón a medio pelar y un cuenco de plata volcado.",
      },
      {
        archivo: "Fluorite (Crystal Victory Mine, near Cave-in-Rock, Illinois, USA) 1 (34519726136).jpg",
        autor: "Fluorita de Illinois, el mineral del que sale el flúor, con cristales cúbicos morados y amarillos.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AFluorite%20(Crystal%20Victory%20Mine%2C%20near%20Cave-in-Rock%2C%20Illinois%2C%20USA)%201%20(34519726136).jpg",
        foco: "50% 50%",
        alt: "Grupo de cristales cúbicos de fluorita, unos morados oscuros y otros de un amarillo miel, encajados unos en otros.",
      },
    ],
    entrada:
      "Todo el mundo, con el mecanismo entendido desde los años sesenta del siglo XX. Mucha gente cree que cepillarse sirve para quitar los restos de comida, y esa idea explica bastante mal por qué hay que hacerlo todos los días aunque no se haya comido nada pegajoso. Lo que se quita no son restos: es una película de bacterias vivas que se forma sobre el diente en cuestión de horas y que vuelve sola en cuanto se la deja tranquila. La comida por sí sola no causa caries, y en realidad tampoco el azúcar. La causan los ácidos que esas bacterias fabrican con él.",
    paginas: [
      {
        rotulo: "La película",
        texto:
          "A los pocos minutos de limpiar un diente, la saliva deposita sobre él una capa fina de proteínas. Esa capa es pegajosa y sirve de agarre para las primeras bacterias, que llegan enseguida. Una vez ancladas, esas bacterias fabrican una especie de gel que las protege y atrae a otras especies. En un día hay una comunidad organizada con cientos de especies distintas conviviendo por capas. Eso es la placa, y el gel que la envuelve es lo que la hace resistente al enjuague. Por muy fuerte que uno se enjuague, el agua pasa por encima sin llevarse nada.",
        destacado: { tipo: "frase", frase: "El gel que las envuelve es lo que resiste al enjuague." },
      },
      {
        rotulo: "El ácido",
        texto:
          "Esas bacterias comen azúcar y sueltan ácido, exactamente igual que la levadura suelta gas. El ácido queda atrapado bajo el gel, pegado al diente, y ahí disuelve el mineral del esmalte. La saliva repara ese daño devolviendo minerales, y la carrera está en cuál de los dos gana. Por eso importa más la frecuencia con la que se come azúcar que la cantidad total. Un refresco bebido a sorbos durante dos horas hace más daño que el mismo refresco de golpe. El flúor del dentífrico ayuda porque se incorpora al esmalte y lo vuelve más resistente al ácido.",
        destacado: { tipo: "cifra", cifra: "24", unidad: "horas y la placa se organiza" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un consejo que cambia bastante si se entiende el mecanismo en lugar de repetirlo. Cepillarse justo después de comer algo ácido es mala idea, porque el esmalte está ablandado y se raspa. Conviene esperar un rato y dejar que la saliva devuelva los minerales antes de pasar el cepillo. Quedó también la explicación de por qué el hilo dental importa tanto como el cepillo. Las cerdas no entran entre dos dientes pegados, y ahí es donde la colonia crece más tranquila. Y quedó una regla que resume todo, porque no se limpia una superficie: se desmonta una comunidad.",
      },
    ],
  },
  {
    id: "el-cepillo-electrico",
    titulo: "Un cepillo de hospital",
    gancho: "No nació como un lujo. Se hizo para gente con las manos paralizadas y para quien llevaba aparatos fijos.",
    categoria: "Tecnología",
    color: "var(--plum)",
    curioso: true,
    encargo: "Cepillo eléctrico sobre su base de carga, sin contactos metálicos a la vista.",
    entrada:
      "Suiza, 1954. Un médico diseña un cepillo de dientes con motor pensando en dos grupos de pacientes muy concretos, no en el público general: los que tienen problemas de movilidad en las manos y no pueden cepillarse bien, y los que llevan aparatos fijos en los dientes. La idea es buena y el aparato funciona. El problema es que se enchufaba directamente a la corriente de la pared, cosa que dentro de un cuarto de baño mojado no era ninguna buena idea. Tardó veinte años en volverse seguro y otros treinta en ser corriente.",
    paginas: [
      {
        rotulo: "Enchufe y agua",
        texto:
          "El primer modelo iba conectado directamente a la red eléctrica con un cable, dentro de un baño. La combinación de agua, manos mojadas y doscientos voltios es exactamente la que se intenta evitar siempre. El invento no despegó hasta que llegaron las baterías recargables y el aparato pudo separarse del enchufe. Cargarlo también planteaba un problema, porque unos contactos metálicos al aire se oxidan y hacen chispa. La solución fue la carga por inducción, que pasa la energía a través del plástico sin ningún contacto. La base tiene una bobina y el mango otra, y el campo magnético salta de una a otra.",
        destacado: { tipo: "frase", frase: "Se carga sin contactos: el campo cruza el plástico." },
      },
      {
        rotulo: "Los estudios",
        texto:
          "La pregunta obvia es si limpia mejor que uno de toda la vida, y la respuesta tiene matices. Las revisiones grandes encuentran una ventaja real y moderada, sobre todo en los modelos que giran y oscilan. Esa ventaja no viene tanto del motor como de dos cosas que el motor obliga a hacer. La primera es el temporizador, porque casi todo el mundo se cepilla mucho menos tiempo del que cree. La segunda es el sensor de presión, que avisa cuando se aprieta demasiado y se daña la encía. Un cepillo manual usado dos minutos y sin apretar consigue casi lo mismo por mucho menos dinero.",
        destacado: { tipo: "cifra", cifra: "2", unidad: "minutos que casi nadie cumple" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un aparato que se vende como electrónica de consumo y se recomienda como producto sanitario. Quedó también un modelo de negocio copiado de otros sitios, porque el mango es barato y los recambios no. Un juego de cabezales al año puede costar más que el aparato entero. Y quedaron los pacientes para los que se inventó, que siguen siendo los que más lo necesitan. Con una mano temblorosa, con artritis o con un aparato de ortodoncia, el motor no es un lujo. Es la diferencia entre poder limpiarse los dientes y no poder.",
      },
    ],
  },
];
