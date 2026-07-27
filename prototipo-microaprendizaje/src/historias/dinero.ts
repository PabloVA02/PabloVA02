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
    titulo: "El billete más grande de la historia no compraba nada",
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
    titulo: "La isla donde el dinero pesa dos toneladas",
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
    titulo: "El dólar se llama así por un valle de Bohemia",
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
];
