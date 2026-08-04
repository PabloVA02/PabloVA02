import type { Short } from "../shorts";

/* ==========================================================================
   Los canales.

   Las autopistas de mercancías anteriores al ferrocarril, y la razón de que
   ciertas ciudades crecieran y otras no. El tema se hunde si se cuenta con
   datos de obra pública: kilómetros, presupuestos, ingenieros.

   La regla del tema: se empieza siempre por la FÍSICA DEL ARRASTRE. Un
   caballo mueve en agua muchísima más carga que en tierra, y de ahí sale
   todo lo demás. Cada short explica un mecanismo con las manos —la esclusa,
   la sirga, el peaje— y dice qué se abarató y cuánto.
   ========================================================================== */

export const CANALES: Short[] = [
  {
    id: "un-caballo-en-el-agua",
    titulo: "Un caballo tira treinta veces más en el agua",
    gancho: "El mismo animal, la misma cuerda. Cambia solo el rozamiento, y por eso Europa se llenó de canales.",
    categoria: "Canales",
    color: "var(--slate)",
    encargo: "Un camino de sirga junto a un canal, con la cuerda tensa hacia una barcaza.",
    entrada:
      "Inglaterra, 1761. Un duque manda construir un canal para sacar el carbón de sus minas y llevarlo a la ciudad cercana. El precio del carbón cae a la mitad en cuanto se abre. Lo que hay detrás no es un truco financiero, sino una diferencia física que hoy hemos olvidado porque ya no movemos nada tirando de una cuerda.",
    paginas: [
      {
        rotulo: "El rozamiento",
        texto:
          "Un carro cargado sobre un camino de tierra tiene que vencer el rozamiento de las ruedas contra el suelo, y ese suelo está lleno de baches, barro y cuestas. Una barcaza flotando apenas roza con nada: el agua se aparta a su paso y no hay pendiente que subir. Por eso el mismo caballo que arrastra una tonelada en un carro puede tirar de treinta en una barcaza, andando por un camino paralelo al canal llamado camino de sirga. La carga se mueve despacio, a paso de hombre, pero se mueve muchísima de una vez.",
        destacado: { tipo: "cifra", cifra: "30", unidad: "veces más carga con el mismo caballo" },
      },
      {
        rotulo: "El carbón barato",
        texto:
          "Ese cambio de precio lo transformó todo. El carbón, la piedra, el ladrillo y el grano son mercancías pesadas y baratas, y en ellas el transporte cuesta más que el producto. Cuando llevar una tonelada deja de ser prohibitivo, se pueden construir fábricas lejos de las minas, ciudades enteras pueden calentarse con carbón y las canteras encuentran mercado a doscientos kilómetros. Entre 1760 y 1830 Inglaterra se llenó de canales pagados por accionistas privados, en una fiebre inversora que dejó también a mucha gente arruinada cuando se construyeron rutas que nadie usaba.",
        destacado: { tipo: "frase", frase: "En las cosas pesadas y baratas, el transporte cuesta más que el producto." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El ferrocarril los dejó obsoletos en pocas décadas, porque iba diez veces más deprisa y no se helaba en invierno. Muchos canales fueron comprados por las propias compañías de tren, que a veces los dejaron morir a propósito. Quedó la red física, reconvertida hoy en rutas de paseo y en barcos de recreo, y quedaron los nombres de barrios industriales que crecieron junto a un muelle interior. Y quedó el principio físico, que sigue mandando en el comercio mundial: mover mercancía por agua es, con diferencia, la forma más barata de moverla. Por eso hoy el noventa por ciento del comercio internacional viaja en barco.",
      },
    ],
  },
  {
    id: "como-funciona-una-esclusa",
    titulo: "Una esclusa sube un barco sin bombas ni motores",
    gancho: "Es una caja con dos puertas donde el agua entra y sale sola. La levanta la gravedad, y nada más.",
    categoria: "Canales",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Unas puertas de esclusa de madera oscura cerradas, con el agua a distinto nivel a cada lado.",
    entrada:
      "Europa, desde el siglo XIV. Un canal necesita ir llano, porque el agua no sube cuestas, y el terreno casi nunca lo es. La solución que se impuso es una caja de piedra con una puerta en cada extremo, colocada donde el canal cambia de nivel. Con ella un barco sube o baja varios metros sin necesidad de ninguna máquina, solo abriendo y cerrando compuertas.",
    paginas: [
      {
        rotulo: "Subir un barco",
        texto:
          "El proceso es siempre el mismo y se entiende bien en cuatro pasos. Primero se vacía la caja hasta que su nivel iguala el del tramo bajo, y entonces se abre la puerta de abajo y el barco entra. Después se cierra esa puerta y se abren unas compuertas pequeñas en la de arriba, con lo que el agua del tramo alto pasa a la caja y el barco sube flotando con ella. Cuando los dos niveles se igualan, la puerta de arriba se abre sin esfuerzo y el barco sale ya en el tramo superior.",
        destacado: { tipo: "frase", frase: "El barco no lo levanta nadie: sube flotando con el agua." },
      },
      {
        rotulo: "Las puertas en pico",
        texto:
          "La pieza más ingeniosa es la forma de las puertas. En lugar de cerrar en línea recta, se juntan formando un ángulo que apunta hacia el lado del agua alta, como la proa de un barco. Así, cuanto más empuja el agua, más se aprietan entre sí y mejor cierran, y no hace falta ningún cerrojo capaz de aguantar esa presión. El diseño es del siglo XV y suele atribuirse a Leonardo, aunque hay canales anteriores con soluciones parecidas y la autoría se discute. Se sigue usando exactamente igual en las esclusas modernas.",
        destacado: { tipo: "cifra", cifra: "0", unidad: "motores hacen falta para subir el barco" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un mecanismo casi sin cambios en seis siglos, con la misma física y muchas veces con las mismas puertas de madera. Lo único que ha cambiado es el tamaño y quién mueve las compuertas, hoy motores en vez de manivelas. El precio de este sistema es el tiempo: llenar y vaciar una esclusa lleva entre diez y veinte minutos, y un canal con cincuenta esclusas se convierte en un viaje de días. Por eso los ingenieros del siglo XIX se obsesionaron con evitarlas a base de túneles y acueductos.",
      },
    ],
  },
  {
    id: "el-canal-que-hizo-nueva-york",
    titulo: "Un canal decidió qué ciudad sería la más grande",
    gancho: "Abarató el transporte veinte veces y desvió hacia un solo puerto el comercio de medio continente.",
    categoria: "Canales",
    color: "var(--plum)",
    encargo: "Un canal recto entre campos, con una barcaza cargada y un puente de piedra al fondo.",
    entrada:
      "Estados Unidos, 1825. Se inaugura un canal de casi seiscientos kilómetros que une los Grandes Lagos, en el interior del continente, con el río que desemboca en el puerto de Nueva York. Hasta entonces sacar el grano del interior costaba tanto que muchos agricultores no vendían fuera de su comarca. La obra la pagó el Estado, endeudándose, y hubo quien la llamó una locura.",
    paginas: [
      {
        rotulo: "El precio del grano",
        texto:
          "Los números explican el resto de la historia. Antes del canal, llevar una tonelada de harina desde los lagos hasta la costa costaba unos cien dólares y tardaba tres semanas en carro. Después costaba unos diez y tardaba una. Con esa diferencia, las tierras del interior pasaron de ser casi inútiles para el comercio a ser un granero exportador, y se llenaron de colonos en pocos años. El canal se pagó a sí mismo con los peajes en menos de una década, algo insólito para una obra pública de ese tamaño.",
        destacado: { tipo: "cifra", cifra: "10", unidad: "veces más barato llevar una tonelada" },
      },
      {
        rotulo: "La ciudad ganadora",
        texto:
          "Todo ese comercio tenía que salir por alguna parte, y salió por el puerto que estaba al final del río. Nueva York competía entonces con otras ciudades de la costa que tenían tanto o más peso, pero ninguna consiguió una conexión igual con el interior. En treinta años pasó a mover más mercancía que todas ellas juntas y se convirtió en la puerta de entrada y salida del país. Las ciudades del canal crecieron con él, y la ruta marcó por dónde pasarían después las carreteras y las vías de tren.",
        destacado: { tipo: "frase", frase: "El comercio del interior tenía que salir por algún puerto, y salió por ese." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una lección de geografía económica que se estudia en todas partes: la posición de una ciudad no la decide solo el mapa, la deciden las conexiones que alguien construye. Quedó también el propio canal, ampliado varias veces y hoy usado sobre todo por embarcaciones de recreo. Y quedaron los pueblos que fueron apareciendo a lo largo de sus orillas, muchos con nombres tomados de la Antigüedad clásica porque quien los bautizó tenía debilidad por Grecia y Roma. Todavía hoy se puede seguir el trazado del canal en un mapa leyendo los nombres de las localidades.",
      },
    ],
  },
];
