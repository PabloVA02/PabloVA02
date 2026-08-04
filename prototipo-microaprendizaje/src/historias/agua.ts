import type { Short } from "../shorts";

/* ==========================================================================
   Agua.

   El riesgo del tema es el documental de concienciación: porcentajes de
   agua dulce, gráficos de consumo y un final de advertencia. Nadie
   recuerda un porcentaje.

   La regla del tema: el agua se cuenta con INGENIERÍA Y DECISIONES. Una
   pendiente de treinta centímetros por kilómetro sostenida durante
   cincuenta. Un canal que se lleva un mar entero. Un ayuntamiento que
   pone fecha al día en que cerrará los grifos. Detrás de cada litro que
   sale de un grifo hay una obra y una decisión que alguien firmó.

   Y siempre se traduce el volumen a algo del cuerpo: una ducha, un cubo,
   una bañera, porque los hectómetros cúbicos no significan nada.
   ========================================================================== */

export const AGUA: Short[] = [
  {
    id: "mar-de-aral",
    titulo: "Un mar entero se secó en cincuenta años",
    gancho: "Era el cuarto lago del mundo. Hoy hay barcos oxidados tumbados en mitad de un desierto de sal.",
    categoria: "Agua",
    color: "var(--ochre)",
    encargo: "Un barco pesquero oxidado escorado sobre arena seca, sin agua a la vista.",
    entrada:
      "Asia central, 1960. El mar de Aral es el cuarto lago del planeta, con sesenta y ocho mil kilómetros cuadrados de agua salada, una flota pesquera que saca cuarenta mil toneladas de pescado al año y puertos con astilleros y fábricas de conservas. Ese año empieza un plan para desviar los dos ríos que lo alimentan.",
    paginas: [
      {
        rotulo: "El algodón",
        texto:
          "El plan tenía una lógica interna impecable. Se trataba de convertir el desierto en campos de algodón, y para eso se abrieron miles de kilómetros de canales que sacaban agua de los dos ríos antes de que llegaran al lago. Funcionó: la región se convirtió en uno de los mayores productores de algodón del mundo. Los canales, en cambio, eran de tierra sin revestir y perdían por filtración más de la mitad de lo que transportaban. Los informes internos ya calculaban entonces que el lago acabaría secándose, y la respuesta oficial fue que un lago sin uso agrícola es agua desperdiciada.",
        destacado: { tipo: "frase", frase: "Los canales perdían por el suelo más de la mitad del agua." },
      },
      {
        rotulo: "La retirada",
        texto:
          "El agua empezó a retroceder a un ritmo que se apreciaba a simple vista de un año para otro. En 1987 el lago se partió en dos, y en 2014 la mitad oriental se secó por completo por primera vez en seiscientos años. La orilla llegó a quedarse a cien kilómetros de los antiguos puertos. Lo que quedó atrás no fue arena limpia, sino un fondo cubierto de sal, de restos de fertilizante y de pesticidas acumulados durante décadas, que el viento levanta y reparte por toda la región. Las tormentas de polvo blanco se ven desde el espacio.",
        destacado: { tipo: "cifra", cifra: "100", unidad: "kilómetros se alejó la orilla" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Los pueblos pesqueros se quedaron sin oficio y casi sin gente, y los barcos que no se pudieron mover se oxidan tumbados sobre el fondo seco, convertidos en una atracción turística a la que se llega en coche por donde antes había veinte metros de agua. La salud de los habitantes empeoró de forma medible, con más enfermedades respiratorias y de riñón. Una parte del norte se ha recuperado a medias gracias a un dique construido en 2005, que ha subido el nivel varios metros y ha devuelto algo de pesca. La otra parte no volverá.",
      },
    ],
  },

  {
    id: "acueductos-romanos",
    titulo: "Roma traía el agua desde cincuenta kilómetros",
    gancho: "Once conducciones, treinta centímetros de caída por kilómetro y ni una sola bomba.",
    categoria: "Agua",
    color: "var(--slate)",
    encargo: "Una fila de arcos de piedra cruzando un valle seco a primera hora de la mañana.",
    entrada:
      "Roma, siglo I. Una ciudad de un millón de habitantes necesita agua todos los días y no la tiene cerca en cantidad suficiente. La solución son once conducciones que la traen desde manantiales situados a decenas de kilómetros, unas por debajo del suelo y otras sobre arcos. No existe ninguna máquina capaz de empujar el agua hacia arriba.",
    paginas: [
      {
        rotulo: "La pendiente",
        texto:
          "Todo el sistema funciona por gravedad, y ahí está el problema técnico entero. El agua tiene que bajar siempre, pero muy poco: con demasiada pendiente corre rápido, erosiona el canal y llega turbia; con muy poca se estanca y se pudre. Los ingenieros trabajaban con caídas de unos treinta centímetros por kilómetro, sostenidas a lo largo de decenas de kilómetros, midiendo con un instrumento de madera con plomadas y una cubeta de agua. Cuando el terreno subía se atravesaba con un túnel excavado a pico desde pozos verticales abiertos cada pocos cientos de metros para no perder el nivel.",
        destacado: { tipo: "cifra", cifra: "30", unidad: "centímetros de caída por kilómetro" },
      },
      {
        rotulo: "El grifo abierto",
        texto:
          "El agua llegaba a la ciudad y no se cerraba nunca: manaba día y noche en fuentes públicas, termas y letrinas, y lo que sobraba se iba por las alcantarillas arrastrando la suciedad. El funcionario encargado del servicio dejó escrito a finales del siglo I un informe detalladísimo, con caudales, medidas y quejas, y la principal era el fraude: gente que perforaba los canales para llevarse agua a su casa o a su huerto sin pagarla. También describía cómo se calibraban las bocas de salida con piezas de bronce de tamaño fijo, para que nadie tomara más de lo concedido.",
        destacado: { tipo: "frase", frase: "El agua no se cerraba nunca: corría día y noche." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "En España sigue en pie el ejemplo más limpio de todo aquello: un acueducto de casi mil setecientos metros y ciento sesenta y siete arcos, levantado con bloques de granito colocados sin argamasa, sostenidos solo por su propio peso y por el ajuste entre las piedras. Estuvo llevando agua a la ciudad hasta bien entrado el siglo XX. Cuando el imperio se deshizo y los canales dejaron de mantenerse, muchas ciudades europeas tardaron más de mil quinientos años en volver a tener agua corriente en la calle, y Roma pasó de un millón de habitantes a treinta mil.",
      },
    ],
  },

  {
    id: "dia-cero",
    titulo: "Una ciudad puso fecha al fin del agua",
    gancho: "Publicaron cada semana los días que faltaban para cerrar los grifos a cuatro millones de personas.",
    categoria: "Agua",
    color: "var(--plum)",
    encargo: "Un embalse con la orilla muy retirada y el fondo agrietado al sol.",
    entrada:
      "Ciudad del Cabo, en Sudáfrica, 2018. Tres años seguidos de sequía han dejado los embalses de una ciudad de cuatro millones de habitantes por debajo del veinte por ciento. El ayuntamiento hace una cuenta y anuncia una fecha concreta: el día en que cortará el suministro y la gente tendrá que recoger su ración en la calle.",
    paginas: [
      {
        rotulo: "La cuenta atrás",
        texto:
          "Lo llamaron el día cero y lo publicaron cada semana en la web del ayuntamiento, en carteles y en la prensa, como una cuenta atrás. La primera fecha estimada fue el 22 de abril y, a medida que el consumo no bajaba lo suficiente, se fue adelantando hasta el 12 de abril. Se prepararon doscientos puntos de recogida, con soldados previstos para vigilarlos, y una ración de veinticinco litros por persona y día, que es más o menos lo que gasta una ducha corriente de siete minutos. La palabra racionamiento salió en todos los titulares del país.",
        destacado: { tipo: "cifra", cifra: "25", unidad: "litros por persona y día" },
      },
      {
        rotulo: "Los cincuenta litros",
        texto:
          "El consumo doméstico se limitó primero a ochenta y siete litros y después a cincuenta, con multas para quien se pasara y un mapa público donde se podía ver, calle por calle, qué casas cumplían y cuáles no. La ciudad cambió de costumbres en pocas semanas: duchas de dos minutos con cronómetro, cubos dentro de la ducha para recoger el agua y echarla luego en la cisterna, restaurantes que quitaron los tapones de los lavabos, hoteles que arrancaron las bañeras. El consumo total bajó a menos de la mitad del que tenía la ciudad tres años antes.",
        destacado: { tipo: "frase", frase: "Cubos dentro de la ducha para llenar después la cisterna." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El día cero no llegó. Llovió en junio, los embalses se recuperaron y la fecha se retiró del calendario, aunque los estudios posteriores coinciden en que lo decisivo fue el recorte del consumo y no la lluvia. La ciudad se ha convertido en el caso que estudian los ayuntamientos de medio mundo, empezando por el hallazgo incómodo de que la manera más eficaz de ahorrar agua fue ponerle una fecha al desastre y repetirla en voz alta cada semana. Varias ciudades grandes tienen desde entonces su propia cuenta atrás preparada, esperando no usarla.",
      },
    ],
  },
];
