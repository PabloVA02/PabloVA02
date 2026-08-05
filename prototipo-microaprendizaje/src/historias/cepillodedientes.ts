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
    titulo: "El cepillo, de pelo de cerdo",
    gancho: "Se arrancaba del cuello del animal, se pudría dentro de la boca y era lo mejor que había hasta 1938.",
    categoria: "Objetos",
    color: "var(--clay)",
    encargo: "Cepillo antiguo de mango de hueso con las cerdas naturales muy abiertas.",
    entrada:
      "China, siglo XV, y Europa a partir del XVIII. El primer cepillo con cerdas parecido al actual se fabricaba clavando pelo de cerdo en un mango de hueso o de bambú. Ese pelo era la única fibra disponible con la rigidez adecuada, y tenía dos problemas graves. Absorbe agua, así que se reblandece y se pudre, y además guarda bacterias dentro de su propio hueco.",
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
    entrada:
      "Todo el mundo, con el mecanismo entendido desde los años sesenta del siglo XX. Mucha gente cree que cepillarse sirve para quitar los restos de comida, y esa idea explica mal por qué hay que hacerlo todos los días. Lo que se quita es una película de bacterias vivas que se forma sobre el diente en horas. La comida no causa caries: la causan los ácidos que esas bacterias fabrican.",
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
    titulo: "El cepillo eléctrico nació en hospitales",
    gancho: "No nació como un lujo. Se hizo para gente con las manos paralizadas y para quien llevaba aparatos fijos.",
    categoria: "Tecnología",
    color: "var(--plum)",
    curioso: true,
    encargo: "Cepillo eléctrico sobre su base de carga, sin contactos metálicos a la vista.",
    entrada:
      "Suiza, 1954. Un médico diseña un cepillo con motor pensando en dos grupos de pacientes muy concretos: los que tienen problemas de movilidad en las manos y los que llevan aparatos fijos en los dientes. El aparato se enchufaba a la corriente, cosa que en un cuarto de baño no era buena idea. Tardó veinte años en volverse seguro y otros treinta en ser corriente.",
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
