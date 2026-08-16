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
    titulo: "El mar de Aral se secó",
    gancho: "Era el cuarto lago del mundo. Hoy hay barcos oxidados tumbados en mitad de un desierto de sal.",
    categoria: "Agua",
    color: "var(--ochre)",
    encargo: "Un barco pesquero oxidado escorado sobre arena seca, sin agua a la vista.",
    fotos: [
      {
        archivo: "Aral Sea.jpg",
        autor: "Barcos varados en la arena donde estaba el mar de Aral. Fotografía de Ecpirolli.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Aral_Sea.jpg",
        foco: "50% 50%",
        alt: "Dos barcos oxidados encallados sobre arena seca, con nieve a manchas y un cielo plomizo.",
      },
      {
        archivo: "Closeup image of a cotton field in Raichur Karnataka.jpg",
        autor: "Un campo de algodón. El cultivo que se llevó el agua de los ríos que alimentaban el Aral.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Closeup_image_of_a_cotton_field_in_Raichur_Karnataka.jpg",
        foco: "50% 50%",
        alt: "Cápsulas de algodón abiertas y blancas sobre las matas verdes de un campo.",
      },
      {
        archivo: "Earth from Space- The shrinking Aral Sea ESA507898.jpg",
        autor: "El mar de Aral desde el satélite, con la marca de la orilla antigua a la vista. Agencia Espacial Europea.",
        licencia: "Attribution",
        fuente: "https://commons.wikimedia.org/wiki/File:Earth_from_Space-_The_shrinking_Aral_Sea_ESA507898.jpg",
        foco: "50% 50%",
        alt: "Vista de satélite del Aral: una mancha de agua pequeña dentro del cerco blanco de lo que fue el mar.",
      },
      {
        archivo: "Cotton boll nearly ready for harvest.jpg",
        autor: "Una cápsula de algodón a punto de recogerse. Fotografía de Michael Bass-Deschênes.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Cotton_boll_nearly_ready_for_harvest.jpg",
        foco: "50% 45%",
        alt: "Una cápsula de algodón abierta, con la fibra blanca saliendo de las valvas secas.",
      },
    ],
    entrada:
      "Asia central, 1960. El mar de Aral es el cuarto lago del planeta, con sesenta y ocho mil kilómetros cuadrados de agua salada, una flota pesquera que saca cuarenta mil toneladas de pescado al año y puertos con astilleros y fábricas de conservas. Ese año empieza un plan para desviar los dos ríos que lo alimentan hacia campos de algodón en mitad del desierto. Nadie lo hace a escondidas ni por error: está calculado, publicado y aprobado, y los propios planificadores escriben que el lago se irá secando. Lo consideran un precio razonable, y lo dicen con estas palabras: el mar de Aral tiene que morir con elegancia.",
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
    titulo: "Roma bebía de lejos",
    gancho: "Once conducciones, treinta centímetros de caída por kilómetro y ni una sola bomba.",
    categoria: "Agua",
    color: "var(--slate)",
    encargo: "Una fila de arcos de piedra cruzando un valle seco a primera hora de la mañana.",
    fotos: [
      {
        archivo: "Pont du Gard aqueduct at sunset (sat10mar2012-18.24h).jpg",
        autor: "El Pont du Gard, en el sur de Francia, al atardecer. Fotografía de Rik Schuiling, 2012.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Pont_du_Gard_aqueduct_at_sunset_(sat10mar2012-18.24h).jpg",
        foco: "50% 45%",
        alt: "Tres pisos de arcos de piedra dorada cruzando un valle, iluminados por el sol bajo y enmarcados por ramas de olivo.",
      },
      {
        archivo: "Pont du Gard Arch Underside.jpg",
        autor: "Los arcos del Pont du Gard vistos desde abajo, con los bloques colocados sin argamasa. Fotografía de Elihbeckman, 2014.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Pont_du_Gard_Arch_Underside.jpg",
        foco: "50% 50%",
        alt: "Vista en contrapicado del intradós de un arco romano, con las dovelas de piedra encajadas una a una.",
      },
      {
        archivo: "Acueducto, Segovia, España, 2024-06-14, DD 18.jpg",
        autor: "El acueducto de Segovia atravesando la ciudad, 2024. Fotografía de Diego Delso.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Acueducto,_Segovia,_Espa%C3%B1a,_2024-06-14,_DD_18.jpg",
        foco: "50% 50%",
        alt: "La doble arquería de granito del acueducto de Segovia elevándose sobre una plaza.",
      },
      {
        archivo: "Acueducto, Segovia, España, 2024-06-14, DD 12.jpg",
        autor: "Detalle de los bloques de granito del acueducto de Segovia, colocados sin argamasa. Fotografía de Diego Delso, 2024.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Acueducto,_Segovia,_Espa%C3%B1a,_2024-06-14,_DD_12.jpg",
        foco: "50% 50%",
        alt: "Los pilares y arcos de granito del acueducto vistos de cerca, con las juntas secas entre las piedras.",
      },
    ],
    entrada:
      "Roma, siglo I. Una ciudad de un millón de habitantes necesita agua todos los días y no la tiene cerca en cantidad suficiente ni de calidad decente. La solución son once conducciones que la traen desde manantiales situados a decenas de kilómetros, la mayor parte del recorrido por debajo del suelo y solo los últimos tramos sobre arcos, que es lo único que ha quedado a la vista. No existe ninguna máquina capaz de empujar el agua hacia arriba, así que todo el sistema tiene que bajar sin parar desde el manantial hasta la fuente.",
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
    titulo: "La ciudad sin agua",
    gancho: "Publicaron cada semana los días que faltaban para cerrar los grifos a cuatro millones de personas.",
    categoria: "Agua",
    color: "var(--plum)",
    encargo: "Un embalse con la orilla muy retirada y el fondo agrietado al sol.",
    fotos: [
      {
        archivo: "Yesa - Embalse - Sequía 01.jpg",
        autor: "Fondo agrietado del embalse de Yesa durante la sequía, Navarra, 2016.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AYesa%20-%20Embalse%20-%20Sequ%C3%ADa%2001.jpg",
        foco: "50% 45%",
        alt: "Fondo de un embalse seco y cuarteado, con el agua retirada al fondo.",
      },
      {
        archivo: "Yesa - Embalse - Sequía 03.jpg",
        autor: "Orilla retirada del embalse de Yesa, Navarra, 2016.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AYesa%20-%20Embalse%20-%20Sequ%C3%ADa%2003.jpg",
        foco: "50% 50%",
        alt: "Franja de tierra desnuda entre el nivel antiguo del agua y el actual.",
      },
      {
        archivo: "Yesa - Embalse - Sequía 04.jpg",
        autor: "Detalle del lecho seco del embalse de Yesa, 2016.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AYesa%20-%20Embalse%20-%20Sequ%C3%ADa%2004.jpg",
        foco: "50% 50%",
        alt: "Placas de barro seco levantadas por el sol en el fondo de un pantano.",
      },
      {
        archivo: "Sau reservoir Spain.jpg",
        autor: "El pantano de Sau al diez por ciento de su capacidad, visto por el satélite Sentinel-2, 2023.",
        licencia: "Attribution",
        fuente: "https://commons.wikimedia.org/wiki/File%3ASau%20reservoir%20Spain.jpg",
        foco: "50% 50%",
        alt: "Imagen de satélite de un embalse casi vacío, con el cauce del río marcado en el fondo.",
      },
    ],
    entrada:
      "Ciudad del Cabo, en Sudáfrica, 2018. Tres años seguidos de sequía han dejado los embalses que abastecen a una ciudad de cuatro millones de habitantes por debajo del veinte por ciento de su capacidad, y bajando. El ayuntamiento, en vez de esperar a ver qué pasa, hace una cuenta sencilla y anuncia en público una fecha concreta del calendario: el Día Cero, el día en que cerrará los grifos de las casas y la gente tendrá que ir a recoger su ración diaria de agua a un punto de la calle, con militares vigilando la cola.",
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
