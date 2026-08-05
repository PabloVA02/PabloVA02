import type { Short } from "../shorts";

/* ==========================================================================
   Dinero.

   El tema más abstracto del muro y por eso el que más necesita objetos. El
   dinero no se puede fotografiar: lo que se fotografía son billetes, piedras,
   conchas y cajas fuertes, que son las excusas físicas de un acuerdo.

   La regla del tema: cada historia tiene que enseñar que el dinero es una
   convención y que la convención se puede romper. Un billete que no compra un
   huevo. Una piedra de dos toneladas que cambia de dueño sin moverse. Cuando
   el lector ve el acuerdo por dentro, la historia se le queda.

   Nada de consejos financieros ni de moralejas sobre el ahorro. Aquí el
   dinero es antropología, no gestión.
   ========================================================================== */

export const DINERO: Short[] = [
  {
    id: "pengo-hungria",
    titulo: "El billete más grande no compraba nada",
    gancho: "Hungría llegó a un billete de cien trillones. Los precios doblaban cada 15 horas.",
    categoria: "Dinero",
    color: "var(--ochre)",
    encargo: "Un billete húngaro de 1946 con la cifra enorme, arrugado, luz rasante.",
    entrada:
      "En el verano de 1946, Hungría imprimió un billete con veinte ceros: cien trillones de pengő. Es el billete de mayor denominación jamás puesto en circulación por ningún país. Con él no se compraba prácticamente nada, y no porque hubiera escasez de cosas, sino porque el dinero había dejado de significar algo en el plazo de unos meses.",
    paginas: [
      {
        rotulo: "La cuesta",
        texto:
          "El país salía de la guerra con la industria destrozada, la mitad de la riqueza nacional perdida y una factura de reparaciones a la Unión Soviética que se pagaba en bienes. El Estado no recaudaba y necesitaba pagar, así que imprimió. Al principio la inflación fue mala; después dejó de parecerse a nada conocido. En el peor momento, julio de 1946, los precios se doblaban cada <strong>15 horas</strong>, la tasa más alta jamás registrada. Un sueldo cobrado por la mañana valía la mitad por la tarde, y la gente corría a gastarlo antes de comer.",
        destacado: { tipo: "cifra", cifra: "15 h", unidad: "tardaban los precios en doblarse" },
      },
      {
        rotulo: "El truco de la imprenta",
        texto:
          "Los ceros crecían más rápido que el papel. Para no rediseñar los billetes cada semana inventaron unidades de cuenta encadenadas: el <em>milpengő</em> valía un millón de pengő, y el <em>bilpengő</em>, un billón de los de un millón de millones. Así, un billete que ponía «cien millones» en realidad significaba cien trillones. Llegaron a imprimirse planchas de una denominación mil veces mayor, que nunca salió a la calle porque la moneda se abandonó antes. Las fotos de la época muestran calles con billetes barridos a montones: recogerlos costaba más de lo que valían.",
        destacado: {
          tipo: "frase",
          frase: "Barrían el dinero de la calle porque no compensaba agacharse.",
        },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El 1 de agosto de 1946 se cambió el pengő por una moneda nueva, el forint, a razón de cuatrocientos mil cuatrillones de pengő por forint. Y funcionó: el forint sigue siendo la moneda húngara hoy. Lo que hizo que aguantara no fue la aritmética del cambio, sino que se ancló a reservas y a un presupuesto que dejó de imprimir para tapar agujeros. La lección incómoda del episodio es que el valor del dinero no está en el papel ni en el metal, sino en que un número suficiente de personas crea que mañana seguirá valiendo. Cuando esa creencia se rompe, se rompe deprisa.",
      },
    ],
  },

  {
    id: "piedras-yap",
    titulo: "El dinero que pesa dos toneladas",
    gancho: "Una moneda se hundió en el mar y su dueño siguió siendo rico.",
    categoria: "Dinero",
    color: "var(--slate)",
    encargo: "Discos de piedra rai apoyados contra los árboles en un sendero de Yap.",
    entrada:
      "En la isla de Yap, en el Pacífico occidental, el dinero tradicional son discos de piedra caliza con un agujero en el centro. Los hay pequeños y los hay de tres metros y media docena de toneladas. Nadie los mueve para pagar: se quedan donde están, apoyados en un camino o delante de una casa, y lo único que cambia es de quién se dice que son.",
    paginas: [
      {
        rotulo: "El viaje",
        texto:
          "En Yap no hay caliza. Las piedras se sacaban de Palaos, a unos cuatrocientos kilómetros, se tallaban allí a mano y se traían en canoas y balsas cruzando mar abierto. Ese viaje es la clave del valor: una piedra grande valía más no por su tamaño, sino por lo que había costado traerla, por cuánta gente había ido y por si alguien había muerto en el intento. Cada piedra tiene una historia que se recuerda y se cuenta, y esa historia es su certificado de autenticidad. No hay registro escrito: hay memoria colectiva, y todo el mundo sabe de quién es cada una.",
        destacado: { tipo: "cifra", cifra: "400", unidad: "kilómetros de mar para traer una" },
      },
      {
        rotulo: "La que se hundió",
        texto:
          "El antropólogo William Henry Furness III recogió en 1910 el caso que hizo famoso el sistema. Una familia había traído una piedra enorme que se perdió en una tormenta antes de llegar; se fue al fondo del océano y nadie volvió a verla. Los testigos confirmaron que existía, que era buena y que era suya, así que la comunidad aceptó que aquella riqueza contaba igual. La familia siguió siendo rica y pudo pagar con una piedra que ningún ser humano ha visto desde entonces. En 1991, el economista Milton Friedman escribió sobre el caso para explicar qué es exactamente el dinero.",
        destacado: {
          tipo: "frase",
          frase: "Una moneda en el fondo del mar que nadie discute.",
        },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Friedman señaló el paralelismo que hace que el asunto no sea exótico en absoluto: en 1932, el Banco de Francia pidió a Estados Unidos que convirtiera parte de sus dólares en oro, y en vez de embarcar los lingotes se limitaron a etiquetarlos en el sótano de Nueva York como propiedad francesa. Ni un gramo se movió, y los periódicos del mundo hablaron de fuga de oro. Es la piedra de Yap con aire acondicionado. Las rai siguen usándose en Yap para asuntos ceremoniales y de estatus; para la compra diaria, allí se paga en dólares como en cualquier otro sitio.",
      },
    ],
  },

  {
    id: "dolar-valle-checo",
    titulo: "El dólar viene de un valle",
    gancho: "La moneda de Estados Unidos lleva el nombre de una mina checa del siglo XVI.",
    categoria: "Dinero",
    color: "var(--sage)",
    curioso: true,
    encargo: "Una moneda de plata antigua, muy gastada, sobre paño oscuro.",
    entrada:
      "En 1520, en un valle de Bohemia llamado Joachimsthal —el valle de San Joaquín, hoy Jáchymov, en la República Checa—, se abrió una mina de plata tan productiva que empezó a acuñar su propia moneda grande. La llamaron <em>Joachimsthaler</em>. El nombre era largo, la gente lo acortó a <em>thaler</em>, y de ahí ha salido casi todo lo demás.",
    paginas: [
      {
        rotulo: "La cadena",
        texto:
          "El tálero se convirtió en el patrón de moneda grande de plata en media Europa durante trescientos años, y cada idioma lo deformó a su manera: <em>daler</em> en los países escandinavos, <em>daalder</em> en los Países Bajos, <em>dollar</em> en inglés. Los colonos ingleses de América llegaron con esa palabra en la boca, pero apenas les llegaba moneda de Londres, así que lo que circulaba de verdad era la plata española: el real de a ocho, acuñado sobre todo en México y en Potosí. Los angloparlantes lo llamaban <em>Spanish dollar</em>, porque era del mismo tamaño y ley que el tálero.",
        destacado: { tipo: "cifra", cifra: "1520", unidad: "la primera acuñación del tálero" },
      },
      {
        rotulo: "El símbolo",
        texto:
          "Cuando en 1792 el joven Estados Unidos eligió nombre para su moneda, no inventó nada: adoptó el que ya usaba todo el mundo en la calle. El real de a ocho siguió siendo de curso legal allí hasta 1857. El signo del dólar tiene el mismo origen mestizo: la explicación mejor documentada lo hace venir de la abreviatura manuscrita de <em>pesos</em>, con la <em>s</em> escrita encima de la <em>p</em> hasta que las dos letras se fundieron en una ese atravesada. Las teorías de las columnas de Hércules o de las iniciales de <em>United States</em> son posteriores y no tienen apoyo documental.",
        destacado: {
          tipo: "frase",
          frase: "El símbolo del dólar empezó siendo una abreviatura de «pesos».",
        },
      },
      {
        rotulo: "Lo que queda",
        texto:
          "El valle de Joachimsthal tuvo un segundo acto que nadie habría predicho. La mina de plata se agotó, pero en sus escombreras había un mineral negro y pesado que los mineros llamaban pechblenda y consideraban basura. De esa basura, enviada a París, Marie y Pierre Curie aislaron el polonio y el radio en 1898. Y del mismo valle sale también otra palabra que se usa a diario: los mineros de la zona llamaban <em>Kobold</em>, duende, a un mineral que los engañaba y que hoy se llama cobalto. Un solo valle checo bautizó la moneda de reserva del mundo y un elemento de la tabla periódica.",
      },
    ],
  },
  {
    id: "tulipanes-holanda",
    titulo: "Un tulipán costaba una casa",
    gancho: "Se compraban flores que aún no habían salido de la tierra. En un mes no valían nada.",
    categoria: "Dinero",
    color: "var(--plum)",
    curioso: true,
    encargo: "Unos tulipanes rayados de rojo y blanco sobre fondo oscuro, estilo bodegón antiguo.",
    entrada:
      "Holanda, invierno de 1636. El país es el más rico de Europa y por sus puertos entra de todo, incluida una flor traída de Turquía que allí no crecía: el tulipán. Los más caros son los que salen con las pétalos rayados de dos colores, y nadie sabe entonces por qué salen así. Cuestan más que una casa junto a un canal.",
    paginas: [
      {
        rotulo: "El virus bonito",
        texto:
          "Aquellas rayas, que era justo lo que se pagaba, no eran una variedad mejor: eran una enfermedad. Un virus transmitido por pulgones alteraba el color del pétalo y producía dibujos irrepetibles, y de paso debilitaba la planta, de modo que las más caras eran también las que menos bulbos daban. Nadie lo supo hasta el siglo XX. Un bulbo enfermo podía valer diez veces el sueldo anual de un artesano, y hay contratos firmados por el precio de una vivienda con jardín en el centro de Ámsterdam.",
        destacado: { tipo: "frase", frase: "Lo que se pagaba a precio de casa era, literalmente, una planta enferma." },
      },
      {
        rotulo: "Vender lo que no hay",
        texto:
          "En invierno los bulbos están bajo tierra y no se pueden ni ver ni entregar, así que el negocio se movió a los papeles: se firmaban contratos por bulbos que se entregarían en primavera, y esos contratos se revendían muchas veces antes de que la flor existiera. Se cerraban en tabernas, con testigos y con vino pagado por el comprador. Alguien podía comprar y vender el mismo bulbo tres veces en una tarde sin haberlo tenido nunca en la mano ni saber de qué color saldría.",
        destacado: { tipo: "cifra", cifra: "3", unidad: "reventas en una tarde, sin ver el bulbo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "En febrero de 1637, en una subasta de la ciudad de Haarlem, no apareció ningún comprador. La noticia corrió en días y los precios se desplomaron hasta casi cero; los tribunales se llenaron de pleitos por contratos que nadie quería pagar y acabaron resolviéndose con quitas. El daño real a la economía holandesa fue menor de lo que cuenta la leyenda, porque afectó a un grupo reducido. Pero desde entonces, cada vez que un precio sube sin motivo, alguien saca a relucir los tulipanes.",
      },
    ],
  },

  {
    id: "crisis-2008",
    titulo: "Casas que nadie podía pagar",
    gancho: "Se prestaba dinero a quien no podía devolverlo, se troceaba la deuda y se vendía como segura.",
    categoria: "Dinero",
    color: "var(--slate)",
    encargo: "Un cartel de «se vende» torcido delante de una casa vacía de las afueras.",
    entrada:
      "Estados Unidos, verano de 2007. Durante casi diez años los bancos han dado hipotecas a gente sin ingresos estables ni ahorros, con la idea de que las casas siempre suben y de que, si alguien no paga, se vende el piso y en paz. Los precios llevan meses cayendo. Y entonces se descubre que esa deuda está repartida por medio mundo.",
    paginas: [
      {
        rotulo: "El paquete",
        texto:
          "El truco consistía en juntar miles de hipotecas en un mismo paquete y venderlo troceado a inversores de todo el planeta. El argumento era estadístico y sonaba sensato: aunque algunas hipotecas fueran malas, era improbable que fallaran todas a la vez, así que el conjunto podía considerarse seguro. Las agencias que puntúan el riesgo les daban la nota máxima, la misma que a la deuda de un Estado. Nadie había comprobado qué había dentro, y dentro había préstamos concedidos sin pedir ni una nómina.",
        destacado: { tipo: "frase", frase: "Miles de hipotecas malas juntas recibían la nota de un Estado." },
      },
      {
        rotulo: "El efecto dominó",
        texto:
          "Cuando los precios de la vivienda bajaron, la premisa se rompió entera: los impagos no llegaron sueltos, llegaron todos a la vez y por el mismo motivo. En septiembre de 2008 quebró un banco de inversión con ciento cincuenta y ocho años de historia y los mercados se congelaron, porque nadie sabía cuánta basura tenía el banco de al lado. Los gobiernos acabaron rescatando con dinero público a los mismos bancos que habían montado los paquetes, por una cifra que en Europa y Estados Unidos superó el billón de euros.",
        destacado: { tipo: "cifra", cifra: "158", unidad: "años tenía el banco que quebró" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "En España el golpe llegó con retraso y por otro lado: el ladrillo. Se habían levantado más viviendas que en Alemania, Francia e Italia juntas, y al pararse la obra el paro subió del ocho al veintiséis por ciento en cinco años. Casi ningún banquero fue a la cárcel en ningún país, y las hipotecas siguen empaquetándose hoy con reglas más estrictas. Aquella idea de que las casas siempre suben tardó una generación en desaparecer de las conversaciones.",
      },
    ],
  },

  {
    id: "papel-moneda",
    titulo: "El billete es ochocientos años más viejo",
    gancho: "Europa tardó siglos en fiarse de un papel. En China ya estaban resolviendo la inflación.",
    categoria: "Dinero",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un billete antiguo de papel de morera con caracteres impresos en tinta negra.",
    entrada:
      "China, siglo VII. Los comerciantes que recorren el país cargan sacos de monedas de cobre atadas con cuerdas, y una cantidad grande pesa tanto que hacen falta carros y guardias para moverla. A alguien se le ocurre dejar las monedas depositadas en una casa de confianza y llevar en su lugar un recibo escrito. Ese recibo es el primer billete de la historia.",
    paginas: [
      {
        rotulo: "Del recibo al billete",
        texto:
          "Al principio era un papel privado que valía solo entre quienes se conocían. Dos siglos después, el Estado se dio cuenta del negocio, prohibió los recibos particulares y empezó a emitirlos él, impresos en papel de morera con tinta de varios colores y sellos difíciles de copiar; se avisaba en el propio billete de que falsificarlo se castigaba con la muerte, y se prometía una recompensa a quien delatara al falsificador. Circulaban con fecha de caducidad, y cada tres años había que ir a cambiarlos por otros nuevos pagando una comisión.",
        destacado: { tipo: "frase", frase: "El propio billete avisaba de que falsificarlo se pagaba con la muerte." },
      },
      {
        rotulo: "El primer descubrimiento",
        texto:
          "También fueron los primeros en descubrir el problema, porque imprimir es más fácil que fabricar monedas. Cuando el Estado necesitaba dinero para una guerra imprimía más papel, y el papel perdía valor: en el siglo XIII un mercader italiano que viajó hasta allí escribió asombrado que el emperador fabricaba dinero de la nada y que todos lo aceptaban. En un momento dado, un billete llegó a valer una centésima parte de lo que decía. El gobierno acabó retirándolos del todo en el siglo XV y volviendo a la plata.",
        destacado: { tipo: "cifra", cifra: "1/100", unidad: "de su valor llegó a valer un billete" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "En Europa el primer papel moneda no aparece hasta 1661, en Suecia, y también acabó mal: se imprimió de más y el banco quebró en tres años. Costó otro siglo largo que la gente se fiara de un trozo de papel sin oro detrás, y hasta 1971 los billetes prometían formalmente convertirse en metal si alguien lo pedía. Hoy no lo promete ninguno. Lo único que sostiene el dinero es exactamente lo mismo que sostenía aquellos recibos: que el de enfrente también lo acepte.",
      },
    ],
  },
];
