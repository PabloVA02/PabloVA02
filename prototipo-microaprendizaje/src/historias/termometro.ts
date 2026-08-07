import type { Short } from "../shorts";

/* ==========================================================================
   El termómetro.

   Medir el calor parece lo más natural del mundo y fue durante siglo y medio
   un caos: cada fabricante tenía su escala y dos termómetros de dos ciudades
   no decían lo mismo. El tema se hunde si se convierte en historia de las
   escalas: nadie quiere una tabla de conversión.

   La regla del tema: se cuenta el PROBLEMA DE ACORDARSE. Medir sirve para
   comparar, y comparar exige que todos midan igual, así que cada short trata
   de un acuerdo: fijar dos puntos, meter el aparato en la axila, decidir qué
   es normal. Y siempre hay una cifra que el lector cree saber y no sabe.
   ========================================================================== */

export const TERMOMETRO: Short[] = [
  {
    id: "treinta-escalas-distintas",
    titulo: "Cada termómetro, una escala",
    gancho: "Cada fabricante ponía la suya, así que dos termómetros de dos ciudades no decían lo mismo.",
    categoria: "Termómetro",
    color: "var(--slate)",
    encargo: "Varios termómetros antiguos de vidrio con escalas distintas, alineados sobre un paño.",
    fotos: [
      {
        archivo: "Copy of Gallileo Firenze thermometer-MHS 1882-P5200181-white.jpg",
        autor: "Copia de un termómetro florentino de vidrio soplado del siglo XVII. Fotografía de Rama, Museo de Historia de la Ciencia.",
        licencia: "CC BY-SA 3.0 fr",
        fuente: "https://commons.wikimedia.org/wiki/File:Copy_of_Gallileo_Firenze_thermometer-MHS_1882-P5200181-white.jpg",
        foco: "50% 50%",
        alt: "Un tubo de vidrio enroscado en espiral sobre una bola llena de líquido rojo, montado en un pie.",
      },
      {
        archivo: "Hoar frost ice crystals on snow in Tuntorp 8.jpg",
        autor: "Cristales de escarcha sobre la nieve. Fotografía de W. Carter, Suecia, 2021.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Hoar_frost_ice_crystals_on_snow_in_Tuntorp_8.jpg",
        foco: "50% 55%",
        alt: "Cristales de hielo transparentes creciendo sobre la nieve, recortados contra un fondo azul oscuro.",
      },
      {
        archivo: "Mercury escaped.jpg",
        autor: "Mercurio derramado de un tubo roto. Fotografía de Tavo Romann, 2017.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Mercury_escaped.jpg",
        foco: "50% 50%",
        alt: "Gotas de mercurio brillantes como espejos repartidas sobre una superficie naranja, junto a dos tubos de vidrio.",
      },
      {
        archivo: "Clinical thermometer, Europe, 1851-1900 Wellcome L0058018.jpg",
        autor: "Termómetro clínico europeo de la segunda mitad del siglo XIX, con su estuche. Wellcome Collection.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Clinical_thermometer,_Europe,_1851-1900_Wellcome_L0058018.jpg",
        foco: "50% 55%",
        alt: "Un termómetro de vidrio con la escala grabada, tumbado en diagonal junto a su estuche de madera oscura.",
      },
    ],
    entrada:
      "Europa, 1700. Existen termómetros desde hace casi cien años: tubos de vidrio con alcohol coloreado que suben y bajan con el calor y que cualquiera reconoce al verlos. Y sin embargo no sirven para casi nada, porque dos de ellos puestos uno al lado del otro marcan números distintos para la misma habitación. El motivo es que no hay una escala común: cada artesano gradúa su tubo tomando como referencia lo que le parece, desde el día más frío que recuerda la ciudad hasta la temperatura de un sótano concreto o la de la sangre de un animal. Con esas cifras no se puede comparar nada ni repetir un experimento en otro sitio.",
    paginas: [
      {
        rotulo: "Dos puntos",
        texto:
          "La solución que se acabó imponiendo fue elegir dos fenómenos que ocurren siempre a la misma temperatura y usarlos como referencias fijas: la congelación y la ebullición del agua. Entre esos dos puntos se reparte la escala en partes iguales y ya cualquiera puede fabricar un termómetro que coincida con los demás. Un astrónomo sueco propuso en 1742 dividir ese intervalo en cien partes, con la particularidad de que puso el cero en el agua hirviendo y el cien en el hielo, es decir, al revés de como lo usamos. La escala se invirtió después de su muerte.",
        destacado: { tipo: "cifra", cifra: "100", unidad: "partes entre hielo y agua hirviendo" },
      },
      {
        rotulo: "El mercurio",
        texto:
          "El otro avance fue el líquido. El alcohol hierve pronto y no sirve para medir temperaturas altas; un fabricante alemán instalado en Países Bajos probó con mercurio, que se dilata de forma muy regular, aguanta un intervalo mucho mayor y, al ser opaco, se ve perfectamente dentro del tubo. Sus termómetros eran tan buenos y tan repetibles que su escala personal, con el cero en una mezcla de hielo y sal, se convirtió en la habitual del mundo anglosajón y todavía se usa allí. Hizo además algo poco frecuente en la época: fabricar cientos de aparatos idénticos.",
        destacado: { tipo: "frase", frase: "El mercurio se dilata regular, aguanta más y se ve." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron dos escalas conviviendo por pura inercia, una de las pocas medidas en las que el mundo no se ha puesto de acuerdo, y quedó una tercera que solo usan los científicos y que empieza en el punto donde ya no se puede enfriar más nada. Y quedó una lección que se repite en toda la historia de las medidas: el aparato es lo de menos, lo difícil es el acuerdo. Aquellos tubos de 1700 medían perfectamente el calor; lo que no podían hacer era decirle a nadie de otra ciudad cuánto calor hacía.",
      },
    ],
  },

  {
    id: "termometro-clinico",
    titulo: "El termómetro de fiebre medía treinta centímetros",
    gancho: "Había que sujetarlo veinte minutos bajo el brazo del enfermo. Y el médico no lo llevaba encima.",
    categoria: "Termómetro",
    color: "var(--clay)",
    encargo: "Un termómetro de vidrio largo dentro de un estuche de metal alargado.",
    entrada:
      "Inglaterra, 1866. Tomar la temperatura a un enfermo es un procedimiento raro y engorroso: el aparato mide un palmo y medio, hay que mantenerlo colocado unos veinte minutos y hay que leerlo sin sacarlo, porque en cuanto se retira el mercurio baja. Un médico de hospital decide que aquello tiene que caber en un bolsillo y funcionar en minutos.",
    paginas: [
      {
        rotulo: "El estrechamiento",
        texto:
          "Su aparato medía quince centímetros y daba la lectura en cinco minutos, pero la idea que lo cambió todo fue otra y es de una elegancia mecánica notable: un estrechamiento del tubo justo encima del depósito. Al calentarse, el mercurio tiene fuerza para pasar por ese cuello y sube; al enfriarse, la columna se corta ahí y el mercurio de arriba se queda donde estaba, marcando el máximo alcanzado. Por eso los termómetros de mercurio hay que sacudirlos antes de usarlos: el gesto sirve para devolver la columna al depósito de un golpe.",
        destacado: { tipo: "frase", frase: "Por eso hay que sacudirlos: para bajar la columna atrapada." },
      },
      {
        rotulo: "La curva",
        texto:
          "Con un aparato manejable, la temperatura pasó a anotarse varias veces al día en una hoja al pie de la cama, y aparecieron las gráficas de fiebre. Aquello resultó ser mucho más útil que el dato suelto: hay enfermedades que dan picos cada dos días, otras que suben en escalera y otras que bajan de golpe, así que la forma de la curva orientaba el diagnóstico antes de que existieran los análisis. El mismo médico publicó un tratado con miles de curvas registradas paciente a paciente, y de ahí viene la costumbre hospitalaria de medir la temperatura por turnos.",
        destacado: { tipo: "cifra", cifra: "5", unidad: "minutos, frente a los veinte de antes" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el gesto de sacudir el termómetro, que sobrevivió hasta que los aparatos de mercurio se prohibieron en Europa en 2009 por el riesgo de los vertidos si se rompen. Quedaron los digitales, que miden con un sensor eléctrico y avisan con un pitido, y los de oído y frente, más rápidos y algo menos precisos. Y quedó la hoja a los pies de la cama, con su línea quebrada subiendo y bajando, que sigue siendo lo primero que mira un médico al entrar en una habitación de hospital, ciento cincuenta años después de aquel aparato de bolsillo.",
      },
    ],
  },

  {
    id: "ya-no-son-treinta-y-siete",
    titulo: "La temperatura normal del cuerpo ha bajado",
    gancho: "Los treinta y siete grados salen de un estudio de 1851. Hoy la media está por debajo.",
    categoria: "Termómetro",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un termómetro digital sobre una mesa blanca mostrando una cifra.",
    entrada:
      "Alemania, 1851. Un médico se propone establecer cuál es la temperatura normal de una persona sana y hace algo insólito para la época: toma más de un millón de mediciones a veinticinco mil pacientes, con un termómetro de axila de treinta centímetros. Publica una media de treinta y siete grados, y esa cifra se convierte en la definición de normalidad durante más de siglo y medio.",
    paginas: [
      {
        rotulo: "La nueva media",
        texto:
          "En 2020, un equipo de una universidad americana revisó tres conjuntos de datos que abarcaban desde los veteranos de una guerra del siglo XIX hasta pacientes actuales, casi setecientos mil registros en total. El resultado fue consistente: la temperatura media de los adultos ha ido bajando de forma sostenida, alrededor de tres centésimas de grado por década, y hoy se sitúa en torno a treinta y seis grados y medio. La caída aparece en todos los grupos de edad, en hombres y en mujeres, y no se explica por la diferencia entre los termómetros antiguos y los modernos.",
        destacado: { tipo: "cifra", cifra: "36,6", unidad: "grados es hoy la media, no 37" },
      },
      {
        rotulo: "Por qué baja",
        texto:
          "La explicación más aceptada es que hemos dejado de tener el cuerpo permanentemente ocupado en pelear. En el siglo XIX era normal convivir con infecciones crónicas —dentales, respiratorias, intestinales, tuberculosis—, y una inflamación de fondo mantiene el metabolismo acelerado y la temperatura alta. Con los antibióticos, las vacunas, el agua limpia y la mejor alimentación, ese trabajo constante desapareció. También cuenta que vivimos en casas templadas todo el año, así que el cuerpo gasta menos energía en mantener su propia temperatura y puede permitirse funcionar un poco más bajo. Ninguna explicación está cerrada, pero las dos apuntan a lo mismo: aquella cifra describía a una población más enferma.",
        destacado: { tipo: "frase", frase: "Un cuerpo que ya no pelea a diario funciona más frío." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una cifra redonda que se sigue repitiendo en las consultas y que nunca fue una constante de la naturaleza, sino la media de una población concreta en un momento concreto. La temperatura normal varía además entre personas y a lo largo del día casi un grado entero: es más baja al amanecer y más alta a media tarde. Aquel médico de 1851 hizo un trabajo enorme y bien hecho con un termómetro de un palmo y medio; lo que no podía saber es que estaba midiendo a una población distinta de la nuestra.",
      },
    ],
  },
];
