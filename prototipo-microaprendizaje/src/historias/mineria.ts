import type { Short } from "../shorts";

/* ==========================================================================
   La minería.

   Sacar cosas de debajo de la tierra, que es la actividad más peligrosa y
   más antigua de la industria. El tema se estropea si se cuenta con
   toneladas producidas: hay que contarlo desde el agujero.

   La regla del tema: cada short explica UN PROBLEMA FÍSICO de estar bajo
   tierra —el agua, el aire, la luz, el peso de la roca— y cómo se resolvió.
   Y se dice siempre quién bajaba: mineros, niños, animales, presos.
   ========================================================================== */

export const MINERIA: Short[] = [
  {
    id: "la-bomba-que-cambio-el-mundo",
    titulo: "El vapor nació achicando agua",
    gancho: "Las minas se inundaban y no había forma de vaciarlas. De ese problema salió la máquina que movió el siglo XIX.",
    categoria: "Minería",
    color: "var(--slate)",
    encargo: "Una casa de máquinas de ladrillo con una viga enorme de madera asomando.",
    entrada:
      "Inglaterra, 1712. Las minas de carbón y de estaño se han hecho tan profundas que se inundan constantemente, porque por debajo de cierto nivel el agua del terreno entra sola. Sacarla con cubos y caballos cuesta más que el mineral que se extrae, así que muchas galerías buenas se abandonan llenas de agua. Ese es el problema que resuelve la primera máquina de vapor útil.",
    paginas: [
      {
        rotulo: "El vacío",
        texto:
          "Aquella máquina no empujaba con la presión del vapor, como la gente imagina, sino con el vacío. Se llenaba de vapor un cilindro grande y después se le echaba agua fría por dentro. El vapor se condensaba de golpe y dejaba un hueco casi vacío, así que la presión del aire de fuera empujaba el pistón hacia abajo con una fuerza enorme. Ese movimiento se transmitía a una viga de madera basculante y de ahí a las varillas de la bomba. Consumía carbón a lo bestia, pero en una mina de carbón el combustible estaba al lado y era casi gratis.",
        destacado: { tipo: "frase", frase: "No empujaba el vapor: empujaba el aire, aprovechando el vacío." },
      },
      {
        rotulo: "Más hondo",
        texto:
          "El efecto fue inmediato y muy poco glamuroso: se pudo bajar más. Con las bombas funcionando día y noche, las minas alcanzaron profundidades que antes eran imposibles y la producción de carbón se disparó. Ese carbón alimentó después las fábricas, los altos hornos y los ferrocarriles, así que la cadena entera de la industrialización empieza en un problema de fontanería. La máquina se fue mejorando durante el siglo, sobre todo cuando se separó la parte que se enfría de la que se calienta, y con ello dejó de derrochar tanto combustible.",
        destacado: { tipo: "cifra", cifra: "1712", unidad: "el año de la primera máquina útil" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una lección que se repite en la historia de la técnica: los inventos que cambian el mundo suelen nacer resolviendo una molestia concreta y bastante fea. Nadie construyó aquella máquina pensando en trenes ni en barcos, sino en dejar de pagar caballos para subir cubos de agua sucia. Quedan también las casas de máquinas de piedra junto a las minas antiguas, con su chimenea y el hueco por donde asomaba la viga. Se han convertido en el símbolo de comarcas mineras enteras y algunas están protegidas como patrimonio industrial.",
      },
    ],
  },
  {
    id: "los-ninos-de-la-puerta",
    titulo: "Niños de cinco años bajo tierra",
    gancho: "Doce horas sentados a oscuras, esperando a abrir cuando pasaba una vagoneta. El aire de la mina dependía de ellos.",
    categoria: "Minería",
    color: "var(--plum)",
    encargo: "Una galería estrecha de mina con una puerta de madera cerrada y un candil colgado.",
    entrada:
      "Inglaterra, 1842. Una comisión parlamentaria publica un informe sobre el trabajo en las minas, con dibujos y con testimonios recogidos a los propios trabajadores. El país descubre entonces que en el fondo de sus minas trabajan miles de niños, algunos de cinco años. Uno de sus oficios consiste en pasar la jornada entera solo, a oscuras y sentado junto a una puerta.",
    paginas: [
      {
        rotulo: "Por qué la puerta",
        texto:
          "Aquellas puertas no eran un capricho: eran el sistema de ventilación. En una mina hay que obligar al aire a recorrer todas las galerías, para que llegue oxígeno al fondo y salgan los gases. Eso se consigue cerrando unos ramales y dejando abiertos otros. Si una puerta se queda abierta, el aire toma el atajo y una parte de la mina se queda sin ventilar, con riesgo de asfixia o de explosión. El trabajo del niño consistía en abrirla al oír venir una vagoneta y cerrarla justo después de que pasara.",
        destacado: { tipo: "frase", frase: "Si la puerta quedaba abierta, el aire tomaba el atajo." },
      },
      {
        rotulo: "El informe",
        texto:
          "Los testimonios que recogió aquella comisión son lo que cambió las cosas, más que las cifras. Una niña de ocho años contó que bajaba a las cuatro de la mañana, que se quedaba a oscuras porque no siempre le daban vela y que a veces se dormía. También se documentó que había mujeres arrastrando vagonetas a cuatro patas, con una cadena enganchada a la cintura, por galerías de menos de un metro de alto. El informe llevaba grabados, y esas imágenes circularon por todo el país. La ley salió ese mismo año.",
        destacado: { tipo: "cifra", cifra: "1842", unidad: "el año del informe y de la ley" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La ley prohibió trabajar bajo tierra a las mujeres y a los menores de diez años, y creó un inspector para vigilarlo, que era uno solo para todo el país. Fue un paso corto pero abrió la puerta a los siguientes. Quedó sobre todo una técnica que después se ha usado mil veces: cuando la opinión pública no reacciona ante los datos, se publican los testimonios en primera persona y los dibujos. Aquel informe se considera hoy uno de los documentos que fundaron el periodismo de investigación social, y se estudia en las facultades por cómo está construido.",
      },
    ],
  },
  {
    id: "el-derrumbe-de-la-mina",
    titulo: "El mineral que nunca se saca",
    gancho: "Se deja sin extraer una parte del mineral para que aguante la roca de encima. Sacarlo es lo último que se hace.",
    categoria: "Minería",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una galería subterránea con pilares gruesos de roca dejados a intervalos.",
    entrada:
      "Minas de todo el mundo, desde la Antigüedad. Cuando se vacía una capa de mineral bajo tierra queda un hueco, y encima de ese hueco hay decenas o cientos de metros de roca que pesan muchísimo. El sistema más antiguo y más extendido para que no se venga abajo consiste en no sacarlo todo. Se dejan columnas del propio material sin extraer, repartidas por la galería como los pilares de un aparcamiento.",
    paginas: [
      {
        rotulo: "Cámaras y pilares",
        texto:
          "El método se llama de cámaras y pilares, y su cálculo es un compromiso incómodo. Cuanto más grandes sean los pilares, más seguro es todo, pero más mineral se queda ahí sin vender. Cuanto más pequeños, más mineral se extrae y más riesgo hay de que uno reviente y arrastre a los demás. En una mina de carbón era normal dejar entre un tercio y la mitad del mineral bajo tierra solo para sostener el techo. Eso da idea de lo cara que resulta la seguridad cuando se mide en producto que no se vende.",
        destacado: { tipo: "cifra", cifra: "50", unidad: "por ciento del mineral podía quedarse de pilar" },
      },
      {
        rotulo: "La retirada",
        texto:
          "La parte peligrosa venía al final. Cuando una zona se agotaba se hacía la llamada retirada de pilares. Los mineros iban recuperando esas columnas empezando por la más lejana y saliendo hacia la entrada, mientras el techo se hundía detrás de ellos de forma controlada. Se colocaban maderos que crujían al empezar a ceder y servían de aviso, porque la roca casi nunca cae sin avisar antes. Era el trabajo peor pagado en riesgo de toda la mina, y buena parte de los accidentes mortales del siglo XIX ocurrieron durante esa operación.",
        destacado: { tipo: "frase", frase: "El techo se hundía detrás de ellos mientras salían." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedan bajo muchas ciudades y campos huecos antiguos que nadie cartografió bien, y de vez en cuando alguno se hunde y se traga una carretera o una casa. Hay comarcas enteras con mapas de riesgo por este motivo, y ayuntamientos que no dan licencia de obra sin un estudio del subsuelo. Quedó también el método, que sigue usándose en minas de sal, de potasa y de carbón. La diferencia es que hoy los pilares se calculan con modelos de resistencia de materiales y se vigilan con sensores que detectan el movimiento de la roca mucho antes de que cruja ningún madero.",
      },
    ],
  },
];
